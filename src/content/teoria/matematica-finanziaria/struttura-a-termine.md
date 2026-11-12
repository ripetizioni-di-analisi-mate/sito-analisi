---
titolo: Struttura a termine, tassi forward e arbitraggio
sommario: Dai prezzi degli zero coupon si ricavano la curva spot, i tassi a termine e il valore dei flussi replicabili.
---

## Fattori di sconto

:::definizione{#fattori-sconto titolo="Prezzo di un euro futuro"}
Si fissa la data di valutazione al tempo zero e si misurano le scadenze in anni. Il **fattore di sconto** $v(0,T)$ è il prezzo oggi di un euro certo disponibile alla data $T$. Per convenzione $v(0,0)=1$. Se un titolo privo di cedole paga $N>0$ euro alla data $T$ e ha prezzo $P>0$, allora vale

$$
v(0,T)=\frac{P}{N}.
$$

Il fattore è un rapporto tra importi nella stessa valuta. Si può quindi moltiplicare per qualsiasi capitale pagabile alla stessa data, purché abbia le stesse caratteristiche di certezza del rimborso. La **struttura a termine** associa a ciascuna data il fattore che la riguarda. In un esercizio la curva può essere assegnata soltanto su un insieme finito di date, dette *nodi*.
:::

:::esempio{titolo="Prezzi espressi in euro e fattori unitari"}
Un titolo paga $250\,\mathrm{euro}$ fra due anni e oggi ne costa $230$. Il fattore biennale vale $\dfrac{230}{250}=0{,}92$. Due titoli identici pagano insieme $500\,\mathrm{euro}$ alla stessa data, quindi costano $2\cdot230=460\,\mathrm{euro}$. Per lo stesso pagamento biennale si trova anche $500\cdot0{,}92=460\,\mathrm{euro}$. Il numero di titoli cambia quando cambia il pagamento promesso. Il fattore resta lo stesso perché il confronto si riferisce sempre a un euro da incassare fra due anni.
:::

:::attenzione
La positività del fattore richiede $v(0,T)>0$. Una curva con $v(0,1)=0{,}98$ e $v(0,2)=0{,}99$ rispetta questa condizione anche se il fattore cresce tra il primo e il secondo anno. Il tasso a termine implicito in quell'intervallo è negativo. Per dedurre un arbitraggio dall'aumento del fattore occorre un'ulteriore ipotesi, per esempio la possibilità di trasferire un euro dalla prima data alla seconda senza costi. In un modello che contempla quell'operazione, pagare $0{,}99\,\mathrm{euro}$ oggi per ricevere un euro al secondo anno sarebbe più caro che acquistare un euro al primo anno e conservarlo per l'anno successivo.
:::

## Tassi a pronti

:::definizione{#tassi-spot titolo="Tasso spot annuo effettivo"}
Il **tasso spot** $s_T$ è il tasso annuo composto equivalente per un'operazione che inizia oggi e termina alla data $T>0$. Il valore iniziale di un euro alla scadenza è $(1+s_T)^{-T}$, quindi

$$
v(0,T)=(1+s_T)^{-T},
\qquad s_T=v(0,T)^{-\frac{1}{T}}-1.
$$

Il fattore di montante $1+s_T$ è positivo, perciò $s_T>-1$. Il pedice $T$ indica la scadenza del pagamento. L'esponente tiene invece conto della durata per la quale si applica il tasso annuo. Il tasso spot esprime in percentuale annua la stessa informazione che il fattore esprime in termini di prezzo.
:::

:::esempio{titolo="Tasso annuo e rendimento su due anni"}
Un pagamento biennale di $121\,\mathrm{euro}$ costa $100\,\mathrm{euro}$. Sul biennio il fattore di montante è $\dfrac{121}{100}=1{,}21$. Il fattore annuo è la radice quadrata positiva di $1{,}21$, quindi vale $1{,}1$ e il tasso spot è del $10\%$. Il rendimento complessivo è del $21\%$ perché il capitale iniziale è moltiplicato due volte per $1{,}1$. Il secondo anno comprende dunque anche gli interessi maturati sul montante del primo.
:::

:::osservazione
A scadenze diverse si possono osservare tassi spot uguali, crescenti o decrescenti. Per esempio, se $s_1=s_2=5\%$, allora $v(0,2)=(1{,}05)^{-2}<v(0,1)=(1{,}05)^{-1}$. Una curva piatta dei tassi positivi genera quindi fattori decrescenti perché la durata dell'attualizzazione aumenta. Il rendimento a scadenza di un titolo con cedole, trattato nell'argomento sulle obbligazioni, è invece il tasso unico che riproduce un prezzo assegnato attualizzando tutti i flussi del titolo. Il suo valore dipende dalle cedole e dal rimborso perché questi importi entrano nell'equazione del prezzo.
:::

## Tassi a termine

::::teorema{#tassi-forward titolo="Tasso forward implicito"}
Siano $0\le s<t$ due date. Si assumono fattori positivi, assenza di costi e possibilità di acquistare e vendere allo scoperto gli zero coupon unitari alle due date. Il **tasso forward** annuo effettivo $f_{s,t}$ fissato oggi per un prestito a valore iniziale nullo da $s$ a $t$ soddisfa

$$
1+f_{s,t}=\left(\frac{v(0,s)}{v(0,t)}\right)^{\frac{1}{t-s}}.
$$

La formula stabilisce oggi le condizioni implicite di uno scambio tra due date future. Consente, per esempio, di confrontare un prestito che dura un anno e parte subito con uno che dura un anno e parte alla fine dell'anno corrente.

:::dimostrazione
Si costruiscono i due flussi del prestito mediante zero coupon. Dal punto di vista di chi presta, si paga un euro alla data $s$ e si incassa $K$ alla data $t$, dove $K=(1+f_{s,t})^{t-s}$. Vendere oggi un titolo unitario con scadenza $s$ riproduce l'esborso futuro. Acquistare oggi $K$ titoli unitari con scadenza $t$ riproduce l'incasso. La somma dei costi deve essere zero, quindi $Kv(0,t)-v(0,s)=0$. Dividendo per $v(0,t)>0$ si ottiene $K$, che si eleva alla potenza $\dfrac{1}{t-s}$ per annualizzarlo.
:::
::::

:::esempio{titolo="Tasso implicito fra il primo e il terzo anno"}
Siano $v(0,1)=0{,}968$ e $v(0,3)=0{,}8$. Il fattore di montante fra le due date è $\dfrac{0{,}968}{0{,}8}=1{,}21$. L'intervallo dura due anni, perciò il fattore annuo è $\sqrt{1{,}21}=1{,}1$ e $f_{1,3}=10\%$. Il medesimo rapporto confronta i prezzi attuali di un euro alle due date. Si ricava infatti $1{,}21\cdot0{,}8=0{,}968$, quindi il valore attuale del rimborso uguaglia il valore attuale del capitale prestato.
:::

:::osservazione
Sia $s<u<t$ una data intermedia. Il prodotto dei rapporti $\dfrac{v(0,s)}{v(0,u)}$ e $\dfrac{v(0,u)}{v(0,t)}$ è $\dfrac{v(0,s)}{v(0,t)}$. I fattori a termine si compongono quindi per moltiplicazione. Con due intervalli di un anno al $5\%$ e al $10\%$, il fattore biennale è $1{,}05\cdot1{,}10=1{,}155$. Il tasso annuo equivalente si ricava come $\sqrt{1{,}155}-1$. Il forward si ricava dalle quotazioni di oggi. Il tasso spot che si osserverà alla data $s$ potrà essere diverso se le quotazioni nel frattempo cambiano.
:::

## Convenzione continua

:::definizione{#forward-continuo titolo="Tassi spot e forward a forza costante equivalente"}
Con capitalizzazione continua, si scrive il fattore a pronti come $v(0,T)=e^{-z(T)T}$, dove $z(T)$ è il **tasso spot continuo** per $T>0$. Tra due date $s<t$ si scrive il fattore di montante come $e^{\phi_{s,t}(t-s)}$, dove $\phi_{s,t}$ è il **forward continuo medio**. Prendendo i logaritmi si trova

$$
\begin{aligned}
z(T)&=-\frac{\log v(0,T)}{T},\\[6pt]
\phi_{s,t}&=\frac{\log v(0,s)-\log v(0,t)}{t-s}.
\end{aligned}
$$

In queste relazioni $\log$ indica il logaritmo naturale. La conversione al tasso annuo effettivo si ottiene imponendo lo stesso fattore su un anno. Un tasso continuo $z$ equivale quindi a $e^z-1$ in capitalizzazione composta annuale.
:::

:::esempio{titolo="Scadenze con spot continui diversi"}
Si osservano $z(1)=2\%$ e $z(3)=4\%$. I due logaritmi dei fattori sono $-0{,}02$ e $-0{,}12$. Fra il primo e il terzo anno il logaritmo del montante è quindi $0{,}12-0{,}02=0{,}10$. Dividendo per i due anni di durata si ottiene $\phi_{1,3}=5\%$. Per verificare il calcolo si somma il logaritmo del primo tratto a quello del secondo. Infatti $0{,}02+2\cdot0{,}05=0{,}12$.
:::

:::osservazione
Quando $T\mapsto v(0,T)>0$ è derivabile, il forward **istantaneo** alla data $T$ è $g(T)=-\dfrac{\mathrm d}{\mathrm dT}\log v(0,T)$. È il limite del forward continuo medio mentre l'ampiezza dell'intervallo tende a zero. Se la derivata è continua, il teorema fondamentale del calcolo dà $\log v(0,s)-\log v(0,t)=\int_s^t g(u)\,\mathrm du$. Il forward continuo medio è quindi la media integrale di $g$ sull'intervallo. Poiché $-\log v(0,T)=Tz(T)$, quando $z$ è derivabile vale anche $g(T)=z(T)+Tz'(T)$.
:::

::grafico{f="2+x;2+2*x" xmin=0 xmax=4.3 ymin=0 ymax=11.2 nomi="T,tasso (%)" legenda="z(T);g(T)" punti="2,4,pieno;2,6,pieno" titolo="Con spot continuo z(T) = 0,02 + 0,01T, il forward istantaneo g(T) vale 0,02 + 0,02T. Al secondo anno i tassi sono 4% e 6%."}

## Bootstrap

::::teorema{#bootstrap titolo="Determinazione successiva dei fattori"}
Si conoscano i fattori $v(0,t_k)$ alle prime $n-1$ scadenze. Sia $P$ il prezzo di un titolo che paga importi $C_k$ alle date $t_k$, con $0<t_1<\dots<t_n$ e ultimo pagamento $C_n>0$. Il fattore mancante è

$$
v(0,t_n)=\frac{P-\sum_{k=1}^{n-1} C_kv(0,t_k)}{C_n}.
$$

Questa operazione si chiama **bootstrap** quando la si ripete su una successione di titoli. Per trovare un nuovo fattore serve un prezzo che contenga quel fattore con coefficiente diverso da zero. Il rimborso finale e la cedola pagata alla stessa data entrano insieme in $C_n$.

:::dimostrazione
Il prezzo del titolo è la somma dei valori attuali dei pagamenti. Si sottraggono da $P$ i contributi delle date note. Resta $C_n v(0,t_n)$ perché l'unica data ancora da valutare è $t_n$. La divisione per $C_n$ determina un solo valore possibile per il fattore mancante.
:::
::::

:::esempio{titolo="Una curva ricostruita con due titoli"}
Uno zero coupon annuale che rimborsa $100\,\mathrm{euro}$ costa $96\,\mathrm{euro}$, perciò $v(0,1)=0{,}96$. Un titolo biennale paga una cedola annua di $5\,\mathrm{euro}$, rimborsa $100\,\mathrm{euro}$ e ha prezzo $99{,}30\,\mathrm{euro}$. La prima cedola vale oggi $4{,}80\,\mathrm{euro}$. Di conseguenza il pagamento finale di $105\,\mathrm{euro}$ contribuisce per $94{,}50\,\mathrm{euro}$ e il secondo fattore vale

$$
v(0,2)=\frac{99{,}30-4{,}80}{105}=0{,}9.
$$

Se si dispone ora di un titolo triennale con pagamenti nei tre anni, si possono calcolare i primi due contributi con $0{,}96$ e $0{,}9$. Il contributo residuo determina il fattore del terzo anno.
:::

:::attenzione
Con rimborso finale positivo, il bootstrap richiede che il prezzo del titolo superi la somma dei contributi delle date già note. Supponiamo che $v(0,1)=0{,}96$ e che un titolo paghi $10\,\mathrm{euro}$ fra un anno e $100\,\mathrm{euro}$ fra due anni. Se il prezzo è $9\,\mathrm{euro}$, la prima cedola vale da sola $9{,}60\,\mathrm{euro}$. Si otterrebbe dunque $v(0,2)=-0{,}006$, incompatibile con un prezzo positivo per un euro certo alla seconda data. In un esercizio con due nuove scadenze nello stesso titolo l'ostacolo è diverso. Una sola equazione lascia due fattori incogniti, quindi serve un ulteriore prezzo indipendente oppure un'ipotesi sulla curva.
:::

## Prezzo sulla curva

:::definizione{#prezzo-curva titolo="Valutazione di un flusso certo"}
Siano $C_k$ gli importi con segno alle date $t_k$. Un importo positivo rappresenta un incasso dal punto di vista scelto. Se ogni data ha un fattore di sconto e i pagamenti sono replicabili mediante gli zero coupon corrispondenti, il **valore sulla curva** è

$$
P=\sum_k C_kv(0,t_k).
$$

Il fattore di una data si applica all'importo complessivo che scade in quella data. In questo modo, due flussi con lo stesso totale nominale possono avere valori diversi se distribuiscono i pagamenti in anni diversi.
:::

:::esempio{titolo="Prezzo di una nuova obbligazione"}
Con $v(0,1)=0{,}96$ e $v(0,2)=0{,}9$, un titolo paga $8\,\mathrm{euro}$ al primo anno e $108\,\mathrm{euro}$ al secondo. Il prezzo sulla curva è

$$
\begin{aligned}
P&=8\cdot0{,}96+108\cdot0{,}9\\[6pt]
 &=7{,}68+97{,}20=104{,}88\,\mathrm{euro}.
\end{aligned}
$$

Se $4\,\mathrm{euro}$ vengono spostati dal secondo anno al primo, il prezzo aumenta di $4(0{,}96-0{,}9)=0{,}24\,\mathrm{euro}$. L'effetto dipende dalla differenza tra i fattori, perché l'importo totale rimane lo stesso.
:::

:::osservazione
Un pagamento può cadere fra due nodi della curva. Se si assume un'interpolazione lineare dei logaritmi dei fattori, la media dei logaritmi al punto medio produce la media geometrica dei due fattori. Per esempio, tra $v(0,1)=0{,}96$ e $v(0,3)=0{,}864$, questa convenzione dà $v(0,2)=\sqrt{0{,}96\cdot0{,}864}$. Con interpolazione lineare dei fattori si ottiene invece la media aritmetica $0{,}912$. Entrambi i metodi riproducono esattamente i nodi assegnati. Per quotare un flusso nella data intermedia occorre dichiarare quale convenzione si adotta, perché il valore del flusso dipende dal fattore interpolato.
:::

:::esempio{titolo="Cedola che porta il prezzo alla pari"}
Per un titolo con nominale $100\,\mathrm{euro}$ e cedola annua costante $c$, le date di pagamento sono il primo e il secondo anno. Con $v(0,1)=0{,}96$ e $v(0,2)=0{,}9$, il rimborso finale vale oggi $90\,\mathrm{euro}$. Per arrivare a un prezzo di $100\,\mathrm{euro}$, le due cedole devono dunque contribuire per $10\,\mathrm{euro}$ in valore attuale. Poiché $0{,}96c+0{,}9c=10$, si trova $c=\dfrac{10}{1{,}86}\approx 5{,}38\,\mathrm{euro}$. Questa è la cedola di parità. Divisa per il nominale dà un tasso cedolare di circa $5{,}38\%$. I due spot si ricavano invece dai singoli fattori di sconto. Il primo vale circa $4{,}17\%$ e il secondo circa $5{,}41\%$. La cedola di parità risolve un'equazione che dipende da entrambe le date.
:::

:::osservazione
Se per due scadenze si interpolano linearmente i logaritmi dei fattori, il forward continuo medio è lo stesso per ogni sottointervallo fra quei nodi. Infatti il numeratore nella formula del forward è il calo di una funzione affine, quindi è proporzionale alla lunghezza del sottointervallo. Questa convenzione permette di leggere l'interpolazione come un tratto a forza costante. Per esempio, con $v(0,1)=0{,}9$ e $v(0,3)=0{,}729$, il fattore al secondo anno è $0{,}81$. Entrambi i rapporti annuali valgono $\dfrac{10}{9}$. Si ritrova così anche il fattore al terzo anno moltiplicando due volte il fattore di sconto di un anno, pari a $0{,}9$, per il fattore al primo anno.
:::

## Arbitraggio

:::definizione{#arbitraggio titolo="Arbitraggio con flussi certi"}
In un modello deterministico, un **arbitraggio** è una strategia realizzabile con costo iniziale minore o uguale a zero, flussi successivi non negativi e almeno un guadagno strettamente positivo. Un costo iniziale negativo indica un incasso all'apertura della posizione. Per costruire la strategia si controllano tutte le date, poiché una somma nominale positiva dei flussi futuri potrebbe includere un esborso intermedio. Le operazioni disponibili sono quelle ammesse dal modello, comprese eventuali vendite allo scoperto.
:::

:::esempio{titolo="Stesso rimborso, due prezzi"}
Due strumenti pagano entrambi $100\,\mathrm{euro}$ fra un anno, senza altri flussi. Il primo costa $96\,\mathrm{euro}$ e il secondo $97\,\mathrm{euro}$. Se è possibile vendere il secondo allo scoperto al prezzo indicato, la vendita dà un incasso iniziale di $97\,\mathrm{euro}$. L'acquisto del primo ne richiede $96$, quindi rimane un incasso immediato di $1\,\mathrm{euro}$. Fra un anno il primo strumento paga $100\,\mathrm{euro}$, esattamente quanto si deve alla controparte della vendita. Il flusso futuro netto è zero. I due prezzi violano quindi la **legge del prezzo unico** sotto le ipotesi di mercato dichiarate.
:::

:::attenzione
La strategia presuppone che l'incasso della vendita e il costo dell'acquisto siano entrambi eseguibili ai prezzi assegnati. Con uno spread denaro-lettera, può accadere che il titolo più caro si venda per $95\,\mathrm{euro}$ e quello meno caro si compri per $96\,\mathrm{euro}$. In quel caso l'operazione richiede un esborso di $1\,\mathrm{euro}$ e si annulla a scadenza. L'arbitraggio descritto richiede dunque che il ricavo realizzabile dalla vendita superi il costo effettivo dell'acquisto, dopo le commissioni.
:::

## Replicazione

::::teorema{#replicazione titolo="Prezzo di un flusso replicabile"}
Sia $b$ il vettore dei flussi di un titolo. Si indichi con $A$ la matrice che ha come colonne i flussi degli strumenti negoziabili alle stesse date. Se si possono assumere le posizioni con segno $x_j$ e il vettore $x$ soddisfa $Ax=b$, il portafoglio **replica** il titolo. In assenza di arbitraggio, e potendo comprare o vendere allo scoperto anche il titolo stesso, il suo prezzo è $\sum_j x_jP_j$, dove $P_j$ sono i prezzi degli strumenti.

:::dimostrazione
Il titolo e il portafoglio producono gli stessi flussi data per data. Se uno dei due costasse meno dell'altro, si potrebbe comprare quello meno caro e vendere quello più caro. I flussi futuri si annullerebbero, mentre la differenza dei prezzi darebbe un incasso oggi. Per l'assenza di arbitraggio i due costi iniziali devono coincidere.
:::
::::

:::esempio{titolo="Replicazione con un titolo cedolare"}
Un titolo annuale $A$ paga $100\,\mathrm{euro}$ al primo anno e costa $96\,\mathrm{euro}$. Il titolo biennale $B$ paga $10\,\mathrm{euro}$ al primo anno, $110\,\mathrm{euro}$ al secondo e costa $108{,}60\,\mathrm{euro}$. Si vuole replicare un flusso di $60\,\mathrm{euro}$ al primo anno e $110\,\mathrm{euro}$ al secondo. Per il secondo pagamento serve un'unità di $B$. Il primo pagamento di $B$ copre $10\,\mathrm{euro}$, perciò le unità di $A$ devono fornire i $50\,\mathrm{euro}$ restanti. Le quantità e il costo sono

$$
\begin{aligned}
x_B&=\frac{110}{110}=1,\\[6pt]
x_A&=\frac{60-10x_B}{100}=0{,}5,\\[6pt]
P&=0{,}5\cdot96+108{,}60=156{,}60\,\mathrm{euro}.
\end{aligned}
$$

Se l'obiettivo fosse incassare soltanto $110\,\mathrm{euro}$ al secondo anno, si dovrebbe eliminare la cedola del primo anno vendendo $0{,}1$ unità di $A$ allo scoperto. Una quantità negativa rappresenta quella posizione. Il flusso del primo anno è infatti $10-0{,}1\cdot100=0$.
:::


:::osservazione
Se due portafogli diversi replicano lo stesso flusso, il sistema $Ax=b$ può avere più soluzioni. In un mercato senza arbitraggio tutte hanno lo stesso costo, perché altrimenti l'acquisto del portafoglio più economico e la vendita dell'altro produrrebbero un incasso iniziale con flussi futuri nulli. Ad esempio, se due strumenti pagano rispettivamente $100$ e $50\,\mathrm{euro}$ alla stessa data, un'unità del primo e due del secondo riproducono lo stesso rimborso. Un prezzo di $96\,\mathrm{euro}$ per il primo richiede quindi un prezzo di $48\,\mathrm{euro}$ per il secondo, a parità di valuta e certezza del pagamento.
:::
