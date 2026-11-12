---
titolo: VAN, TIR e confronto degli investimenti
sommario: Valore attuale netto, tasso interno di rendimento, confronto fra progetti, costo effettivo di un prestito e tempo di recupero.
---

## Valore attuale netto

:::definizione{#van titolo="Valore attuale netto"}
Un progetto richiede pagamenti e produce incassi in date diverse. Per esprimere il saldo in euro della data iniziale, si riporta ciascun flusso al tempo $0$ con lo stesso tasso di valutazione.

Sia $C_0>0$ l'esborso al tempo $0$. Indichiamo con $F_k$ il flusso al tempo $t_k>0$, positivo per un incasso e negativo per un pagamento. Se $i>-1$ è il tasso effettivo riferito all'unità di tempo con cui si misurano i $t_k$, poniamo $q=1+i$ e $v=q^{-1}$. Il **valore attuale netto** è
$$
\operatorname{VAN}(i)=-C_0+\sum_{k=1}^n F_kv^{t_k}.
$$
Il termine $-C_0$ è già espresso in euro del tempo $0$. Il fattore $v^{t_k}$ esprime in euro del tempo $0$ anche il flusso alla data $t_k$, quindi la somma misura l'eccedenza dei valori attuali degli incassi su quelli dei pagamenti.
:::

:::esempio{titolo="Due incassi dopo l'esborso iniziale"}
Un investimento costa oggi $100\,\mathrm{euro}$ e produce $60\,\mathrm{euro}$ alla fine di ciascuno dei due anni successivi. Al tasso annuo effettivo del $10\%$, il primo incasso vale oggi $\dfrac{60}{1{,}1}\,\mathrm{euro}$ e il secondo vale $\dfrac{60}{1{,}1^2}\,\mathrm{euro}$. La spesa iniziale entra con il proprio importo, perciò
$$
\begin{aligned}
\operatorname{VAN}(0{,}10)
&=-100+\frac{60}{1{,}1}+\frac{60}{1{,}1^2}\\[6pt]
&\approx 4{,}13\,\mathrm{euro}.
\end{aligned}
$$
I due incassi hanno lo stesso importo. Poiché il secondo è disponibile un anno più tardi, il suo valore attuale è minore. La somma attualizzata supera l'esborso di circa $4{,}13\,\mathrm{euro}$.
:::

:::osservazione
Se l'alternativa è rinunciare al progetto e il tasso $i$ misura il costo opportunità dei fondi nel modello, il **criterio del VAN** assegna tre esiti.

- Per $\operatorname{VAN}(i)>0$, il progetto offre un'eccedenza di valore rispetto all'alternativa.
- Per $\operatorname{VAN}(i)=0$, il valore degli incassi compensa esattamente quello dei pagamenti al tasso assegnato.
- Per $\operatorname{VAN}(i)<0$, il valore degli incassi è inferiore a quello dei pagamenti.

Se, al tasso assegnato, gli incassi valgono oggi $1000\,\mathrm{euro}$ e l'unico costo è il prezzo iniziale, $1000\,\mathrm{euro}$ è il prezzo di pareggio. Abbassare il prezzo di $40\,\mathrm{euro}$ aumenta il VAN di $40\,\mathrm{euro}$, perché il prezzo è un flusso al tempo $0$.
:::

:::esempio{titolo="Ricavo e costo alla stessa data"}
Un macchinario costa oggi $600\,\mathrm{euro}$. Dopo un anno genera un ricavo di $500\,\mathrm{euro}$ e richiede una manutenzione di $60\,\mathrm{euro}$. Alla fine del secondo anno viene rivenduto a $242\,\mathrm{euro}$. I primi due importi futuri sono disponibili alla stessa data, quindi il flusso netto del primo anno è $500-60=440\,\mathrm{euro}$. Al $10\%$ annuo si trova
$$
\operatorname{VAN}(0{,}10)
=-600+\frac{440}{1{,}1}+\frac{242}{1{,}1^2}
=-600+400+200=0.
$$
Il ricavo di vendita fa parte del valore del progetto perché è un incasso futuro previsto. Se il ricavo di vendita fosse disponibile un anno prima, avrebbe un fattore di sconto diverso da quello del secondo anno.
:::

## Tasso interno di rendimento

:::definizione{#tir titolo="Tasso interno di rendimento"}
Nel calcolo del VAN il tasso è un dato. Si può anche porre il VAN uguale a zero e chiedere quale tasso renda equivalente il flusso futuro all'esborso iniziale.

Un tasso $i^*>-1$ è un **tasso interno di rendimento**, o TIR, se $\operatorname{VAN}(i^*)=0$. L'unità del tasso coincide con quella in cui sono espresse le date. Per un esborso iniziale $C_0>0$ e un unico incasso $M>0$ dopo $T>0$ periodi, l'equazione di pareggio dà
$$
\begin{aligned}
C_0&=M(1+i^*)^{-T},\\[6pt]
(1+i^*)^T&=\frac{M}{C_0},\\[6pt]
i^*&=\left(\frac{M}{C_0}\right)^{\frac{1}{T}}-1.
\end{aligned}
$$
Il rapporto $\dfrac{M}{C_0}$ è il fattore di crescita dell'intero intervallo. La potenza di esponente $\dfrac{1}{T}$ ricava da quel fattore la crescita per una singola unità di tempo.
:::

:::esempio{titolo="Dal rendimento di due anni al tasso annuo"}
Un esborso di $1000\,\mathrm{euro}$ è seguito da un unico incasso di $1210\,\mathrm{euro}$ al tempo $2$, misurato in anni. Il fattore sui due anni è $1{,}21$. Poiché $1{,}1^2=1{,}21$, il tasso annuo è $10\%$. Sostituendolo nell'equazione di pareggio si ottiene $\dfrac{1210}{1{,}1^2}=1000$.

Il guadagno complessivo è pari al $21\%$ dell'esborso. Un capitale ipotetico che cresca al tasso composto equivalente matura $100\,\mathrm{euro}$ nel primo anno e $110\,\mathrm{euro}$ nel secondo, perché la seconda applicazione del tasso si riferisce a $1100\,\mathrm{euro}$. Il flusso dell'investimento prevede un solo incasso al termine del secondo anno.
:::

:::osservazione
Se le scadenze sono intere, la sostituzione $v=(1+i)^{-1}$ trasforma l'equazione del TIR in un polinomio in $v$. Le radici utili sono i valori reali $v>0$, perché $1+i>0$. Da ciascuna si ricava $i=v^{-1}-1$.

Per il flusso $(-300,165,181{,}5)$ alle date $0,1,2$, si ha $-300+165v+181{,}5v^2=0$. Con $v=\dfrac{10}{11}$, il termine del primo anno vale $150$ e quello del secondo vale ancora $150$, quindi $i^*=10\%$. La sostituzione ricostruisce l'uguaglianza economica, oltre a verificare il calcolo algebrico.
:::

## Unicità per investimenti convenzionali

::::teorema{#unicita-tir titolo="Esistenza e unicità del TIR convenzionale"}
Sia $C_0>0$ e siano $F_k\geq 0$ per ogni $k$, con almeno un $F_k>0$. Supponiamo che tutti i tempi $t_k$ siano positivi. Il VAN è continuo e strettamente decrescente su $(-1,+\infty)$ e ammette esattamente un TIR $i^*$.

- Se $\sum_k F_k>C_0$, allora $i^*>0$.
- Se $\sum_k F_k=C_0$, allora $i^*=0$.
- Se $\sum_k F_k<C_0$, allora $-1<i^*<0$.

Per un tasso assegnato $i>-1$, inoltre, il VAN è positivo esattamente quando $i<i^*$. In questo caso si può confrontare il TIR con il tasso di valutazione per stabilire il segno del VAN.

:::dimostrazione
Ogni incasso positivo perde valore attuale quando il tasso cresce. Formalmente, la derivata rispetto a $i$ è
$$
\operatorname{VAN}'(i)
=-\sum_{k=1}^n t_kF_k(1+i)^{-t_k-1}<0.
$$
Almeno un addendo è strettamente negativo e gli altri sono al più nulli, quindi la derivata è negativa in tutto il dominio. Per $i\to-1^+$, il fattore di sconto di ogni incasso positivo tende a $+\infty$, perciò anche il VAN tende a $+\infty$. Per $i\to+\infty$, i valori attuali degli incassi tendono a zero, quindi il VAN tende a $-C_0$. Per il teorema degli zeri esiste una radice e per la stretta monotonia essa è unica. Il confronto con $\operatorname{VAN}(0)=\sum_kF_k-C_0$ determina il segno della radice.
:::
::::

:::esempio{titolo="Ricerca della radice per bisezione"}
Un investimento costa $260\,\mathrm{euro}$ e paga $150\,\mathrm{euro}$ alla fine di ciascuno dei due anni successivi. Al tasso zero il VAN è $40\,\mathrm{euro}$. Al $20\%$ è $-260+125+\dfrac{625}{6}<0$, quindi l'unico TIR è compreso tra $0\%$ e $20\%$.

Il punto medio è il $10\%$. A questo tasso il VAN vale $-260+\dfrac{150}{1{,}1}+\dfrac{150}{1{,}1^2}\approx0{,}33\,\mathrm{euro}$. Poiché è positivo e il VAN è decrescente, si conserva l'intervallo dal $10\%$ al $20\%$. Ogni ripetizione dimezza l'ampiezza dell'intervallo. La ricerca termina quando le due estremità concordano alla precisione richiesta.
:::

## Flussi con più cambiamenti di segno

:::attenzione{#tir-multipli titolo="Molteplicità e assenza di TIR"}
Una manutenzione straordinaria o un costo di chiusura possono seguire un incasso. In questo caso l'attualizzazione di un pagamento futuro produce un termine che aumenta quando il tasso cresce, quindi la monotonia va verificata sul flusso specifico.

Per i flussi $-100$, $230$, $-132$ ai tempi $0$, $1$, $2$, l'equazione è
$$
-100+230v-132v^2=-(11v-10)(12v-10)=0.
$$
Le due radici sono $v=\dfrac{10}{11}$ e $v=\dfrac{5}{6}$, entrambe positive. I tassi corrispondenti sono quindi $10\%$ e $20\%$. Al tasso zero il VAN vale $-2\,\mathrm{euro}$, pur essendoci due TIR positivi.

Con i flussi $(-100,180,-100)$, invece, si ottiene
$$
-100+180v-100v^2=-100(v-0{,}9)^2-19<0.
$$
Il VAN è sempre negativo e il flusso è privo di TIR. Entrambi gli esempi hanno due cambiamenti di segno, quindi il solo numero di cambiamenti non basta per determinare quante radici ammissibili esistano.
:::

::grafico{f="-100+230/(1+x)-132/(1+x)^2" xmin=0 xmax=0.31 ymin=-2.2 ymax=0.45 punti="0.1,0;0.2,0" etichette="0.105,-0.5,10%;0.205,-0.5,20%" nomi="i,VAN" legenda="\operatorname{VAN}(i)" titolo="VAN del flusso con due TIR"}

:::osservazione
Nel flusso $(-100,230,-132)$ il prodotto $-(11v-10)(12v-10)$ è positivo quando $v$ è compreso tra $\dfrac{5}{6}$ e $\dfrac{10}{11}$. Poiché $i=v^{-1}-1$ è decrescente in $v>0$, il VAN è positivo esattamente per $10\%<i<20\%$.

Una radice doppia può produrre un altro esito. Per $(-100,220,-121)$ si ha $\operatorname{VAN}(i)=-(11v-10)^2$. Esiste un solo TIR, pari al $10\%$, ma il VAN è negativo da entrambi i lati. Un tasso che annulla il VAN indica un pareggio. Il cambio di segno è una proprietà distinta, che si controlla esaminando la funzione ai due lati.
:::

## Confronto fra progetti alternativi

:::definizione{#confronto-progetti titolo="VAN differenziale"}
Due progetti sono alternativi se si può realizzarne al più uno. Per confrontarli occorrono lo stesso tasso di valutazione, la stessa data di riferimento e ipotesi coerenti sui flussi futuri. Se entrambi sono realizzabili con le risorse disponibili, si preferisce il progetto con VAN maggiore, tenendo conto dell'eventuale alternativa di rinunciare a entrambi.

Indicando con $A$ e $B$ i due progetti, il flusso differenziale $B-A$ si costruisce sottraendo il flusso di $A$ dal flusso di $B$ alla stessa data. Per la linearità dell'attualizzazione vale
$$
\operatorname{VAN}_{B-A}(i)
=\operatorname{VAN}_B(i)-\operatorname{VAN}_A(i).
$$
Il risultato misura quanto valore in più offre $B$ rispetto ad $A$. Se $B$ richiede un esborso iniziale maggiore, il flusso al tempo $0$ di $B-A$ è negativo e rappresenta il capitale aggiuntivo richiesto.
:::

:::esempio{titolo="Rendimento percentuale e valore in euro"}
Il progetto $A$ costa oggi $100\,\mathrm{euro}$ e incassa $130\,\mathrm{euro}$ dopo un anno. Il progetto $B$ costa $500\,\mathrm{euro}$ e incassa $600\,\mathrm{euro}$ alla stessa data. I TIR sono rispettivamente $30\%$ e $20\%$. Al tasso di valutazione del $10\%$, i valori netti sono
$$
\begin{aligned}
\operatorname{VAN}_A&=-100+\frac{130}{1{,}1}=\frac{200}{11},\\[6pt]
\operatorname{VAN}_B&=-500+\frac{600}{1{,}1}=\frac{500}{11}.
\end{aligned}
$$
Il VAN di $B$ è maggiore di $\dfrac{300}{11}\,\mathrm{euro}$. Passare da $A$ a $B$ costa $400\,\mathrm{euro}$ oggi e produce $470\,\mathrm{euro}$ in più tra un anno. Il rendimento di questo impiego aggiuntivo è $17{,}5\%$, superiore al tasso di valutazione. Il confronto incrementale spiega perché al $10\%$ si sceglie $B$.
:::

:::osservazione
Un progetto di durata minore può lasciare spazio a un rinnovo, a un impiego alternativo o a un periodo senza altri flussi. Se si compra una macchina che dura due anni e la prestazione serve per quattro anni, il confronto con una macchina quadriennale deve includere ciò che avviene dal terzo anno. Se il rinnovo è previsto alle stesse condizioni, il VAN di un secondo ciclo è riportato al tempo $0$ dalla data di rinnovo. Se i progetti sono disponibili una sola volta, dopo il termine di ciascuno si includono solo i flussi effettivamente previsti, per esempio il ricavo di vendita finale. La scelta dell'orizzonte dipende dal problema economico.

Per esempio, una macchina biennale ha VAN di $110\,\mathrm{euro}$ per ciclo, misurato alla data di acquisto del ciclo. La macchina quadriennale ha VAN di $205\,\mathrm{euro}$. Se il tasso annuo è $10\%$ e la macchina biennale viene sostituita alle stesse condizioni dopo due anni, il valore attuale netto dei due cicli è
$$
110+\frac{110}{1{,}1^2}\approx200{,}91\,\mathrm{euro}.
$$
I $110\,\mathrm{euro}$ del secondo ciclo esprimono il saldo dei suoi flussi in euro dell'anno $2$. La divisione per $1{,}1^2$ li esprime in euro della data iniziale, quindi consente di sommarli al VAN del primo ciclo. I due cicli hanno un VAN inferiore a quello della macchina quadriennale, benché i valori calcolati separatamente all'inizio dei due cicli sommino a $220\,\mathrm{euro}$.
:::

## Tassi di indifferenza

:::definizione{#tasso-soglia titolo="Tasso di indifferenza fra due progetti"}
Un **tasso di indifferenza** è un valore $i>-1$ per cui $\operatorname{VAN}_B(i)=\operatorname{VAN}_A(i)$. Si trova annullando $\operatorname{VAN}_{B-A}(i)$. Se il flusso differenziale consiste in un esborso iniziale e incassi futuri non negativi, almeno uno positivo, il teorema di unicità si applica a $B-A$. In questo caso, al di sotto del tasso di indifferenza il VAN di $B$ è maggiore e al di sopra è minore.

Questa relazione riguarda la graduatoria dei due progetti. Per stabilire se il progetto preferito abbia valore positivo, occorre confrontare il suo VAN anche con quello dell'alternativa di rinuncia.
:::

:::esempio{titolo="Incassi in date diverse con lo stesso costo"}
Due progetti hanno lo stesso costo iniziale. Il progetto $A$ incassa $110\,\mathrm{euro}$ fra un anno e $B$ ne incassa $121$ fra due anni. Per l'indifferenza si impone
$$
\begin{aligned}
\frac{110}{q}&=\frac{121}{q^2},\\[6pt]
q&=\frac{121}{110}=1{,}1.
\end{aligned}
$$
Poiché $q>0$, la differenza $\dfrac{121-110q}{q^2}$ ha il segno di $121-110q$. Quindi $B$ ha VAN maggiore per $i<10\%$, mentre $A$ ha VAN maggiore per $i>10\%$. L'esborso iniziale si semplifica solo perché è uguale per i due progetti.
:::

:::osservazione
Anche se $A$ e $B$ sono convenzionali, la sottrazione dei flussi può produrre incassi e uscite in più date. Il differenziale può quindi avere più tassi di indifferenza. In quel caso, per ricavare la graduatoria, si esamina il segno della differenza dei VAN nell'intervallo che contiene il tasso assegnato. Se i flussi coincidono a tutte le date, la differenza dei VAN è identicamente nulla e ogni tasso ammissibile dà lo stesso valore.
:::

## Costo effettivo di un finanziamento

:::definizione{#taeg titolo="Tasso effettivo del flusso del debitore"}
Il debitore riceve il capitale nominale $C$ e paga subito spese per $S$, con $C-S>0$. Alle date $t_k>0$ paga importi $R_k\geq 0$, almeno uno positivo. Dal suo punto di vista il primo flusso è positivo e i pagamenti successivi sono negativi. Il **tasso effettivo del flusso** è il tasso che annulla il VAN, quindi soddisfa
$$
C-S=\sum_{k=1}^n R_k(1+i)^{-t_k}.
$$
Moltiplicare tutti i flussi per $-1$ lascia invariati gli zeri del VAN. Il flusso così ottenuto ha un'uscita iniziale e incassi successivi, quindi il teorema di unicità garantisce un solo tasso nel dominio $i>-1$.
:::

:::esempio{titolo="Spese pagate alla data di erogazione"}
Il contratto prevede un capitale nominale di $1050\,\mathrm{euro}$, spese immediate di $50\,\mathrm{euro}$ e un rimborso di $1100\,\mathrm{euro}$ tra un anno. Alla data iniziale sono disponibili $1000\,\mathrm{euro}$, quindi $1000=\dfrac{1100}{1+i}$ e $i=10\%$. Se si usassero i $1050\,\mathrm{euro}$ nominali come importo disponibile, si otterrebbe un tasso minore perché il rimborso verrebbe confrontato con un capitale iniziale maggiore.
:::

:::osservazione
Se le date sono misurate in mesi, la radice $i_m$ è un tasso mensile. L'equivalente annuo effettivo è $(1+i_m)^{12}-1$, perché un anno comprende dodici applicazioni del fattore mensile. Le spese pagate con una rata si sommano al pagamento di quella data. Le spese pagate subito si sottraggono dal capitale ricevuto.

Il calcolo descrive il costo del flusso assegnato nell'esercizio. Per identificare il TAEG di un prodotto reale occorre conoscere le componenti di costo e le convenzioni temporali applicabili a quel prodotto.
:::

## Tempo di recupero attualizzato

:::definizione{#recupero-attualizzato titolo="Tempo di recupero attualizzato discreto"}
Siano $C_0>0$ il costo iniziale e $F_k\geq0$ gli incassi alle date ordinate $0<t_1<\cdots<t_n$. Al tasso assegnato $i>-1$, indichiamo con $S_m$ il valore attuale dei primi $m$ incassi. Il **tempo di recupero attualizzato** è la prima data $t_m$ per cui
$$
S_m=\sum_{k=1}^m F_k(1+i)^{-t_k}\geq C_0.
$$
Gli incrementi di $S_m$ sono non negativi, quindi la somma cumulata resta almeno pari al costo dopo la prima data di recupero. Se $S_n<C_0$, il recupero è assente entro l'orizzonte del progetto. L'uguaglianza esatta alla data $t_m$ conta come recupero.
:::

:::esempio{titolo="Recupero semplice e attualizzato"}
Un progetto costa $105\,\mathrm{euro}$ e incassa $55\,\mathrm{euro}$ alla fine del primo anno, $55$ alla fine del secondo e $44$ alla fine del terzo. La somma non scontata dei primi due incassi è $110\,\mathrm{euro}$, quindi il recupero semplice avviene al secondo anno.

Al tasso del $10\%$, i primi due incassi valgono $50+\dfrac{500}{11}\approx95{,}45\,\mathrm{euro}$. Il terzo vale $\dfrac{44}{1{,}1^3}\approx33{,}06\,\mathrm{euro}$. La cumulata supera $105\,\mathrm{euro}$ al terzo anno, quindi il recupero attualizzato avviene a quella data. Prima della terza scadenza si dispone ancora soltanto dei primi due incassi.
:::

:::attenzione
Due progetti possono recuperare il costo alla stessa data e avere VAN diversi. Al $10\%$ annuo, due progetti che costano $100\,\mathrm{euro}$ e incassano entrambi $110\,\mathrm{euro}$ dopo un anno recuperano entrambi il costo al primo anno. Se il secondo progetto incassa anche $121\,\mathrm{euro}$ al secondo anno, il suo VAN è maggiore di $100\,\mathrm{euro}$.

Se compaiono pagamenti dopo una prima cumulata positiva, questa può tornare sotto il costo iniziale. Il significato del primo attraversamento va quindi distinto da quello di recupero permanente. Con flussi a scadenze discrete, un recupero fra due scadenze richiede inoltre un'ipotesi aggiuntiva sulla distribuzione temporale dei pagamenti.
:::
