---
titolo: Capitalizzazione, rendite e ammortamenti
sommario: Come cresce un capitale in capitalizzazione semplice, composta e continua, come si riportano gli importi a una stessa data con il valore attuale e i tassi equivalenti, come si valutano rendite e piani di ammortamento, e come si giudica un investimento con il VAN e il TIR.
---

## Interesse semplice e interesse composto

:::definizione{#capitale-montante titolo="Capitale, interesse e montante"}
Chi presta oggi un **capitale** $C$ riceve dopo un tempo $t$, misurato in anni, una somma maggiore, il **montante** $M$. La differenza $I = M - C$ è l'**interesse**, cioè il compenso per avere rinunciato alla disponibilità del denaro. Il **tasso annuo di interesse** $i$ è l'interesse prodotto in un anno da un capitale di $1$ euro, e si scrive come numero decimale o come percentuale; per esempio $i = 0{,}05$ equivale a $i = 5\%$. Il **fattore di montante** è il rapporto $\dfrac{M}{C}$, cioè il valore dopo il tempo $t$ di $1$ euro investito oggi; la legge che lo esprime in funzione di $t$ si chiama **regime di capitalizzazione**. I due regimi usati in pratica differiscono per il trattamento degli interessi già maturati.
:::

:::definizione{#interesse-semplice titolo="Capitalizzazione semplice"}
In **capitalizzazione semplice** l'interesse è proporzionale al capitale e al tempo, $I = C\,i\,t$, quindi il montante è
$$
M = C\,(1 + i\,t), \qquad t \geq 0 .
$$
Gli interessi maturati non producono a loro volta interessi, perciò ogni anno il capitale riceve lo stesso interesse $C\,i$ e il montante è una funzione lineare del tempo, con pendenza $C\,i$. Si usa per operazioni di durata inferiore all'anno. Un capitale di $2000$ euro al $4\%$ per $3$ anni produce un interesse di $2000 \cdot 0{,}04 \cdot 3 = 240$ euro, quindi il montante è $2240$ euro; per $9$ mesi si pone $t = \dfrac{9}{12} = \dfrac{3}{4}$, e l'interesse è $60$ euro.
:::

:::definizione{#interesse-composto titolo="Capitalizzazione composta"}
In **capitalizzazione composta** gli interessi maturati alla fine di ogni anno si aggiungono al capitale e producono interessi negli anni successivi. Alla fine di ogni anno il montante viene quindi moltiplicato per $1 + i$, e dopo $n$ anni vale $C\,(1 + i)^{n}$, cioè il termine di una progressione geometrica di ragione $1 + i$. La formula si estende a ogni tempo $t \geq 0$:
$$
M = C\,(1 + i)^{t} .
$$
Il montante è una funzione esponenziale del tempo. Con $C = 2000$ euro e $i = 4\%$, dopo $3$ anni si ha $M = 2000 \cdot 1{,}04^{3} = 2249{,}73$ euro, cioè $9{,}73$ euro in più che in capitalizzazione semplice, e la differenza è data dagli interessi prodotti dagli interessi dei primi due anni.

::grafico{f="1000*1.1^x+0*sqrt(x);1000*(1+0.1*x)+0*sqrt(x)" punti="1,1100,pieno" xmin=-1 xmax=5 ymin=-200 ymax=1800 nomi="t,M" legenda="M = 1000 \cdot 1{,}1^{t};M = 1000\,(1 + 0{,}1\,t)" titolo="Montante di $1000$ euro al $10\%$ annuo in capitalizzazione composta e semplice: i due montanti coincidono per $t = 1$"}

:::

:::teorema{#confronto-regimi titolo="Confronto tra i due regimi"}
Sia $i > 0$. Allora
$$
\begin{cases}
(1 + i)^{t} < 1 + i\,t & \text{se } 0 < t < 1 , \\[4pt]
(1 + i)^{t} > 1 + i\,t & \text{se } t > 1 ,
\end{cases}
$$
e i due fattori di montante coincidono per $t = 0$ e per $t = 1$. Il risultato segue dalla convessità della funzione esponenziale, trattata nell'argomento sullo studio di funzione e l'ottimizzazione; infatti il grafico di $(1 + i)^{t}$ sta sotto la retta per i punti di ascissa $0$ e $1$ tra questi due punti, e sopra di essa fuori. Per durate inferiori all'anno la capitalizzazione semplice dà quindi il montante maggiore. Con $1000$ euro al $10\%$ per sei mesi si ottengono $1050$ euro in regime semplice e $1000 \cdot \sqrt{1{,}1} \approx 1048{,}81$ euro in regime composto.
:::

## Valore attuale e sconto

:::definizione{#valore-attuale titolo="Valore attuale"}
Il **valore attuale** $V$ di un importo $M$ disponibile tra $t$ anni è il capitale che, investito oggi, ha montante $M$ dopo il tempo $t$. Si ottiene risolvendo rispetto a $C$ la formula del montante:
$$
V = M\,(1 + i)^{-t} \quad \text{(regime composto)},
\qquad
V = \frac{M}{1 + i\,t} \quad \text{(regime semplice)} .
$$
Il passaggio da $M$ a $V$ si chiama **attualizzazione**, e il numero $v = \dfrac{1}{1 + i}$ è il **fattore di sconto** annuo, con cui $V = M\,v^{t}$. Il valore attuale serve a confrontare importi disponibili a date diverse, riportandoli tutti a oggi. Al $3\%$ composto, $5000$ euro disponibili tra $4$ anni valgono oggi $5000 \cdot 1{,}03^{-4} \approx 4442{,}44$ euro. Poiché $0 < v < 1$, il valore attuale diminuisce quando la scadenza si allontana e tende a $0$ per $t \to +\infty$.

::grafico{f="1000*1.05^(-x)+0*sqrt(x);1000*1.1^(-x)+0*sqrt(x)" xmin=-4 xmax=36 ymin=-125 ymax=1125 nomi="t,V" legenda="V = 1000 \cdot 1{,}05^{-t};V = 1000 \cdot 1{,}1^{-t}" titolo="Valore attuale di $1000$ euro disponibili tra $t$ anni, al $5\%$ e al $10\%$: a tasso maggiore corrisponde un valore attuale minore"}

:::

:::definizione{#sconto titolo="Sconto e tasso di sconto"}
Lo **sconto** è la differenza $D = M - V$ tra l'importo a scadenza e il suo valore attuale; è l'interesse visto da chi anticipa il pagamento. Il **tasso annuo di sconto** $d$ è lo sconto su $1$ euro esigibile tra un anno, quindi
$$
d = 1 - v = 1 - \frac{1}{1 + i} = \frac{i}{1 + i} .
$$
Nello **sconto commerciale**, usato per operazioni brevi, lo sconto è proporzionale all'importo e al tempo, $D = M\,d\,t$, quindi
$$
V = M\,(1 - d\,t), \qquad 0 \leq t < \frac{1}{d} .
$$
La limitazione su $t$ serve a mantenere positivo il valore attuale. Una cambiale di $5000$ euro che scade tra $9$ mesi, scontata oggi al tasso commerciale $d = 4\%$, dà un valore attuale di $5000 \left( 1 - 0{,}04 \cdot \dfrac{3}{4} \right) = 4850$ euro. Con lo sconto razionale, cioè l'attualizzazione in regime semplice, e il tasso $i = 4\%$ si otterrebbe invece $\dfrac{5000}{1{,}03} \approx 4854{,}37$ euro.
:::

:::teorema{#tempo-e-tasso titolo="Tempo e tasso incogniti"}
In capitalizzazione composta, dati $C$, $M$ con $M > C > 0$ e il tasso $i > 0$, il tempo necessario perché $C$ diventi $M$ è
$$
t = \frac{\ln \dfrac{M}{C}}{\ln(1 + i)} ;
$$
dati $C$, $M$ e $t > 0$, il tasso che li lega è
$$
i = \left( \frac{M}{C} \right)^{\frac{1}{t}} - 1 .
$$
Le formule seguono da $(1 + i)^{t} = \dfrac{M}{C}$, prendendo il logaritmo dei due membri nel primo caso e la radice $t$-esima nel secondo, come nell'argomento sulle funzioni reali e i modelli economici. Per esempio $1000$ euro al $4\%$ diventano $1500$ euro dopo $t = \dfrac{\ln 1{,}5}{\ln 1{,}04} \approx 10{,}34$ anni, e un capitale che in $2$ anni passa da $1000$ a $1210$ euro è stato investito al tasso $\sqrt{1{,}21} - 1 = 10\%$.
:::

## Tassi equivalenti e tasso nominale

:::definizione{#tassi-equivalenti titolo="Tassi equivalenti"}
Si divide l'anno in $k$ periodi uguali (per esempio $k = 2$ per i semestri, $k = 4$ per i trimestri, $k = 12$ per i mesi). Il tasso periodale $i_k$ è **equivalente** al tasso annuo $i$ se un capitale investito per un anno produce lo stesso montante nei due casi, cioè se
$$
(1 + i_k)^{k} = 1 + i .
$$
In altre parole, capitalizzare $k$ volte all'anno al tasso $i_k$ oppure una volta al tasso $i$ è indifferente. Risolvendo si ottengono le formule di passaggio
$$
i_k = (1 + i)^{\frac{1}{k}} - 1,
\qquad
i = (1 + i_k)^{k} - 1 .
$$
Il tasso annuo dell'$8{,}16\%$ equivale al tasso semestrale $i_2 = \sqrt{1{,}0816} - 1 = 4\%$. Il tasso mensile equivalente al $6\%$ annuo è $1{,}06^{\frac{1}{12}} - 1 \approx 0{,}487\%$, un po' meno di $\dfrac{6\%}{12} = 0{,}5\%$. In capitalizzazione semplice i tassi equivalenti sono invece proporzionali, $i_k = \dfrac{i}{k}$, perché il montante è lineare nel tempo.
:::

:::definizione{#tasso-nominale titolo="Tasso nominale convertibile k volte"}
Il **tasso nominale annuo convertibile** $k$ volte è il numero $j_k = k\,i_k$, cioè il tasso periodale moltiplicato per il numero dei periodi. È il tasso dichiarato nei contratti (il TAN), mentre il tasso annuo effettivo $i$ (il TAE) è quello equivalente:
$$
i = \left( 1 + \frac{j_k}{k} \right)^{k} - 1 .
$$
Poiché lo sviluppo di $\left( 1 + \dfrac{j_k}{k} \right)^{k}$ con il binomio di Newton contiene, oltre a $1 + j_k$, altri termini positivi, per $k \geq 2$ il tasso effettivo è maggiore del tasso nominale. Un conto che paga il $12\%$ nominale con capitalizzazione mensile applica ogni mese l'$1\%$, quindi il tasso effettivo è $1{,}01^{12} - 1 \approx 12{,}68\%$. Al tasso nominale dell'$8\%$ convertibile trimestralmente corrisponde il tasso effettivo $1{,}02^{4} - 1 \approx 8{,}24\%$.
:::

## Capitalizzazione continua

:::richiamo{titolo="Limiti notevoli"}
Per ogni numero reale $r$ vale
$$
\lim_{x \to +\infty} \left( 1 + \frac{r}{x} \right)^{x} = e^{r} .
$$
:::

::::teorema{#capitalizzazione-continua titolo="Capitalizzazione continua"}
Sia $\delta > 0$ un tasso nominale annuo, e si capitalizzi $k$ volte all'anno al tasso periodale $\dfrac{\delta}{k}$. Al crescere di $k$ il montante di un capitale $C$ dopo $t$ anni tende a
$$
M = C\,e^{\delta t} .
$$
Questa legge si chiama **capitalizzazione continua**, e $\delta$ è l'**intensità istantanea di interesse**. La capitalizzazione continua è equivalente alla capitalizzazione composta al tasso annuo $i$ quando $e^{\delta} = 1 + i$, cioè
$$
\delta = \ln(1 + i),
\qquad
i = e^{\delta} - 1 .
$$
Il tasso nominale del $12\%$ dà, dopo un anno, $1120$ euro per $1000$ euro capitalizzati una volta, $1126{,}83$ euro capitalizzati ogni mese e $1000\,e^{0{,}12} \approx 1127{,}50$ euro capitalizzati in modo continuo. Al tasso annuo del $5\%$ corrisponde l'intensità $\delta = \ln 1{,}05 \approx 4{,}879\%$. La capitalizzazione continua si usa nei modelli teorici perché la funzione $e^{\delta t}$ è comoda da derivare e da integrare, come nel valore attuale di un flusso continuo trattato nell'argomento sul calcolo integrale.

::grafico{punti="1,1120,pieno;2,1123.6,pieno;3,1124.864,pieno;4,1125.509,pieno;5,1125.882,pieno;6,1126.162,pieno;7,1126.351,pieno;8,1126.493,pieno;9,1126.603,pieno;10,1126.691,pieno;11,1126.763,pieno;12,1126.825,pieno" asintoti="y=1127.497" xmin=-2 xmax=14 ymin=1116 ymax=1130 nomi="k,M" titolo="Montante dopo un anno di $1000$ euro al tasso nominale del $12\%$ capitalizzato $k$ volte: i valori crescono con $k$ e si avvicinano a $1000\,e^{0{,}12} \approx 1127{,}50$ euro"}

:::dimostrazione
L'idea è scrivere il montante dopo $t$ anni come potenza di un'espressione a cui si applica il limite notevole. Dopo $t$ anni i periodi sono $k\,t$, perciò il montante è
$$
C \left( 1 + \frac{\delta}{k} \right)^{k t} = C \left[ \left( 1 + \frac{\delta}{k} \right)^{k} \right]^{t} .
$$
Per il limite notevole con $r = \delta$ l'espressione fra parentesi quadre tende a $e^{\delta}$ per $k \to +\infty$, e la funzione $y \mapsto y^{t}$ è continua, quindi il montante tende a $C\,(e^{\delta})^{t} = C\,e^{\delta t}$. L'equivalenza con il tasso annuo $i$ richiede che i due montanti dopo un anno coincidano, cioè $e^{\delta} = 1 + i$; prendendo il logaritmo si ottiene $\delta = \ln(1 + i)$, e allora $e^{\delta t} = (1 + i)^{t}$ per ogni $t$.
:::
::::

## Equivalenza finanziaria e scadenza media

:::definizione{#equivalenza-finanziaria titolo="Equivalenza finanziaria"}
Due importi $C_1$ disponibile al tempo $t_1$ e $C_2$ disponibile al tempo $t_2$ sono **finanziariamente equivalenti** al tasso $i$, in regime composto, se hanno lo stesso valore attuale:
$$
C_1\,(1 + i)^{-t_1} = C_2\,(1 + i)^{-t_2} .
$$
Più in generale due insiemi di importi sono equivalenti se le somme dei loro valori attuali coincidono. L'equivalenza permette di sostituire un piano di pagamenti con un altro senza vantaggio per nessuna delle due parti. Al $5\%$, $1000$ euro tra un anno equivalgono a $1050$ euro tra due anni, perché $1000 \cdot 1{,}05^{-1} = 1050 \cdot 1{,}05^{-2}$.
:::

::::teorema{#equivalenza-data titolo="Indipendenza dalla data di valutazione"}
In capitalizzazione composta, se due insiemi di importi hanno lo stesso valore in una data $\tau$, allora hanno lo stesso valore in qualunque altra data.

Per questo l'equivalenza si può definire con il solo valore attuale, e nei problemi si può scegliere la data di confronto più comoda, per esempio la scadenza dell'ultimo pagamento, ed evitare esponenti negativi.

:::dimostrazione
L'idea è che spostare tutti gli importi da una data a un'altra significa moltiplicarli per uno stesso fattore. Il valore in $\tau$ di un importo $C_h$ disponibile al tempo $t_h$ è $C_h\,(1 + i)^{\tau - t_h}$, sia per $t_h \leq \tau$ (montante) sia per $t_h > \tau$ (valore attuale). Si ha
$$
\sum_h C_h\,(1 + i)^{\tau' - t_h} = (1 + i)^{\tau' - \tau} \sum_h C_h\,(1 + i)^{\tau - t_h} ,
$$
quindi il valore in $\tau'$ di ciascun insieme è il valore in $\tau$ moltiplicato per $(1 + i)^{\tau' - \tau}$. Se i valori in $\tau$ coincidono, coincidono anche i valori in $\tau'$.
:::
::::

:::attenzione
In capitalizzazione semplice l'equivalenza *dipende* dalla data scelta. Al $10\%$ semplice, $1000$ euro oggi e $1100$ euro tra un anno hanno lo stesso valore alla data $1$, perché $1000 \cdot (1 + 0{,}1) = 1100$. Alla data $2$ invece il primo importo vale $1000 \cdot (1 + 0{,}2) = 1200$ euro e il secondo $1100 \cdot (1 + 0{,}1) = 1210$ euro, quindi i due importi non sono più equivalenti.
:::

:::definizione{#scadenza-media titolo="Scadenza media"}
Siano $C_1, \dots, C_n$ importi positivi disponibili ai tempi $t_1, \dots, t_n$, con somma $S = C_1 + \dots + C_n$. La **scadenza media** è il tempo $t^*$ al quale il pagamento unico di $S$ è equivalente all'insieme dei pagamenti. In regime composto la condizione è
$$
S\,(1 + i)^{-t^*} = \sum_{h=1}^{n} C_h\,(1 + i)^{-t_h} ,
$$
e prendendo il logaritmo si ottiene
$$
t^* = \frac{\ln S - \ln \displaystyle\sum_{h=1}^{n} C_h\,(1 + i)^{-t_h}}{\ln(1 + i)} .
$$
Serve a sostituire più debiti con un solo pagamento della stessa somma. Con $2000$ euro dovuti tra un anno, $3000$ euro tra tre anni e $i = 5\%$, il valore attuale dei due debiti è $2000 \cdot 1{,}05^{-1} + 3000 \cdot 1{,}05^{-3} \approx 4496{,}27$ euro, quindi
$$
t^* = \frac{\ln 5000 - \ln 4496{,}27}{\ln 1{,}05} \approx 2{,}18 \text{ anni} .
$$
:::

:::teorema{#scadenza-media-aritmetica titolo="Scadenza media con lo sconto commerciale"}
Se gli importi si attualizzano con lo sconto commerciale a un tasso $d$, con tutti i tempi minori di $\dfrac{1}{d}$, la scadenza media è la media aritmetica dei tempi pesata con gli importi,
$$
t^* = \frac{C_1 t_1 + \dots + C_n t_n}{C_1 + \dots + C_n} ,
$$
e non dipende da $d$. Infatti la condizione $S\,(1 - d\,t^*) = \sum_h C_h\,(1 - d\,t_h)$ si riduce a $S\,d\,t^* = d \sum_h C_h\,t_h$, perché $S = \sum_h C_h$, e si divide per $S\,d$. Nell'esempio precedente la media pesata è $\dfrac{2000 \cdot 1 + 3000 \cdot 3}{5000} = 2{,}2$ anni, un valore vicino a quello del regime composto, e la formula si usa spesso come approssimazione.
:::

## Rendite

:::definizione{#rendita titolo="Rendita"}
Una **rendita** è una successione di importi, le **rate**, disponibili a scadenze regolari. Qui le rate sono costanti, uguali a $R$, e il periodo è quello a cui si riferisce il tasso $i$. La rendita è:

- **posticipata** se ogni rata si paga alla fine del suo periodo, **anticipata** se si paga all'inizio;
- **immediata** se il primo periodo comincia oggi, **differita** di $p$ periodi se comincia tra $p$ periodi;
- **temporanea** se le rate sono $n$, **perpetua** se non hanno termine.

Il **valore attuale** della rendita è la somma dei valori attuali delle rate, il **montante** è la somma dei loro valori alla fine dell'ultimo periodo. Un affitto pagato all'inizio di ogni mese è una rendita anticipata; le rate di un mutuo, pagate alla fine di ogni periodo, formano una rendita posticipata.
:::

:::richiamo{titolo="Somma dei termini di una progressione geometrica"}
Se $q \neq 1$, allora $a_1 + a_1 q + \dots + a_1 q^{\,n-1} = a_1\,\dfrac{1 - q^{\,n}}{1 - q}$.
:::

::::teorema{#rendita-posticipata titolo="Rendita immediata posticipata"}
Siano $i > 0$ e $n \geq 1$. Il valore attuale e il montante della rendita immediata posticipata di $n$ rate uguali a $R$ sono
$$
V = R\,a_{\overline{n}|i},
\qquad
M = R\,s_{\overline{n}|i},
\qquad
\text{con} \quad
a_{\overline{n}|i} = \frac{1 - (1 + i)^{-n}}{i},
\quad
s_{\overline{n}|i} = \frac{(1 + i)^{n} - 1}{i} .
$$
I numeri $a_{\overline{n}|i}$ e $s_{\overline{n}|i}$ (si legge "$a$ figurato $n$ al tasso $i$") sono il valore attuale e il montante della rendita di rata $1$, e vale $s_{\overline{n}|i} = (1 + i)^{n}\,a_{\overline{n}|i}$. Dieci rate annue posticipate di $1000$ euro al $4\%$ hanno valore attuale $1000\,a_{\overline{10}|0{,}04} \approx 8110{,}90$ euro e montante $1000\,s_{\overline{10}|0{,}04} \approx 12\,006{,}11$ euro, come nell'esempio dei versamenti periodici dell'argomento sulle successioni e le serie.

::grafico{assi=0 uguale=1 linee="-0.4,0 6.2,0" vettori="1,0,1,1.4,R;2,0,2,1.4,R;3,0,3,1.4,R;4,0,4,1.4,R;5,0,5,1.4,R" unicolore=1 punti="0,0,pieno;5,0,pieno" etichette="0,-0.45,0;1,-0.45,1;2,-0.45,2;3,-0.45,3;4,-0.45,4;5,-0.45,n;0,0.45,V;5.4,0.35,M" xmin=-1 xmax=7 ymin=-1 ymax=2 titolo="Rendita immediata posticipata: le $n$ rate $R$ si pagano alla fine dei periodi $1, 2, \dots, n$; il valore attuale $V$ si riferisce al tempo $0$, il montante $M$ al tempo $n$"}

:::dimostrazione
L'idea è riconoscere nel valore attuale la somma di una progressione geometrica. La rata pagata al tempo $h$ vale oggi $R\,v^{h}$, con $v = (1 + i)^{-1}$, quindi
$$
V = R\,v + R\,v^{2} + \dots + R\,v^{n} .
$$
È la somma di $n$ termini di una progressione geometrica di primo termine $R\,v$ e ragione $v \neq 1$, perciò
$$
V = R\,v\,\frac{1 - v^{n}}{1 - v} = R\,\frac{1 - (1 + i)^{-n}}{i} ,
$$
perché $1 - v = \dfrac{i}{1 + i}$ e quindi $\dfrac{v}{1 - v} = \dfrac{1}{i}$. Il montante è il valore di $V$ portato al tempo $n$, cioè $M = V\,(1 + i)^{n} = R\,\dfrac{(1 + i)^{n} - 1}{i}$.
:::
::::

:::teorema{#rendita-anticipata titolo="Rendita immediata anticipata"}
Nelle stesse ipotesi, la rendita immediata anticipata di $n$ rate $R$ ha valore attuale e montante
$$
V = R\,(1 + i)\,a_{\overline{n}|i},
\qquad
M = R\,(1 + i)\,s_{\overline{n}|i} .
$$
Ogni rata si paga un periodo prima che nella rendita posticipata, quindi ogni valore va moltiplicato per $1 + i$. Le dieci rate di $1000$ euro al $4\%$ pagate all'inizio di ogni anno valgono oggi $1{,}04 \cdot 8110{,}90 \approx 8435{,}33$ euro.
:::

:::teorema{#rendita-differita titolo="Rendita differita"}
La rendita posticipata di $n$ rate $R$ differita di $p$ periodi, con la prima rata al tempo $p + 1$, ha valore attuale
$$
V = R\,(1 + i)^{-p}\,a_{\overline{n}|i} .
$$
Al tempo $p$ la rendita è una rendita immediata posticipata, che in quella data vale $R\,a_{\overline{n}|i}$; il fattore $(1 + i)^{-p}$ la riporta al tempo $0$. Le dieci rate di $1000$ euro al $4\%$ differite di $2$ anni valgono oggi $1{,}04^{-2} \cdot 8110{,}90 \approx 7498{,}98$ euro.

::grafico{assi=0 uguale=1 linee="-0.4,0 6.6,0" vettori="3,0,3,1.4,R;4,0,4,1.4,R;5,0,5,1.4,R;6,0,6,1.4,R" unicolore=1 punti="0,0,pieno;2,0,pieno" etichette="0,-0.45,0;1,-0.45,1;2,-0.45,p;3,-0.45,p + 1;6,-0.45,p + n;0,0.45,V;1,0.45,differimento" segmenti="0,0.2,2,0.2" xmin=-1 xmax=7 ymin=-1 ymax=2 titolo="Rendita posticipata differita di $p$ periodi: la prima rata si paga al tempo $p + 1$ e l'ultima al tempo $p + n$"}

:::

::::teorema{#rendita-perpetua titolo="Rendita perpetua"}
Sia $i > 0$. La rendita perpetua posticipata di rata $R$ e quella anticipata hanno valore attuale
$$
V = \frac{R}{i}
\qquad \text{e} \qquad
V = \frac{R\,(1 + i)}{i} .
$$
Una rendita perpetua non ha montante, perché non ha un'ultima scadenza. Il valore attuale serve a valutare un bene che produce un reddito costante senza scadenza, come un terreno affittato. Al $5\%$ un affitto annuo posticipato di $500$ euro vale $\dfrac{500}{0{,}05} = 10\,000$ euro, e se è anticipato vale $10\,500$ euro.

:::dimostrazione
Il valore attuale della rendita perpetua posticipata è il limite per $n \to +\infty$ del valore attuale della rendita di $n$ rate. Poiché $0 < (1 + i)^{-1} < 1$, per il limite della successione geometrica si ha $(1 + i)^{-n} \to 0$, quindi
$$
R\,a_{\overline{n}|i} = R\,\frac{1 - (1 + i)^{-n}}{i} \to \frac{R}{i} .
$$
È lo stesso risultato della serie geometrica nell'argomento sulle successioni e le serie. Per la rendita anticipata ogni rata è anticipata di un periodo, e si moltiplica per $1 + i$.
:::
::::

:::esempio{titolo="Rata e numero delle rate"}
La formula $V = R\,a_{\overline{n}|i}$ lega quattro grandezze, e dalle altre tre se ne ricava una. Un prestito di $20\,000$ euro da rimborsare in $5$ rate annue posticipate al $3\%$ richiede la rata
$$
R = \frac{20\,000}{a_{\overline{5}|0{,}03}} = \frac{20\,000 \cdot 0{,}03}{1 - 1{,}03^{-5}} \approx 4367{,}09 \text{ euro} .
$$
Se invece è fissata la rata, da $1 - (1 + i)^{-n} = \dfrac{V\,i}{R}$ si ottiene
$$
n = -\frac{\ln\left( 1 - \dfrac{V\,i}{R} \right)}{\ln(1 + i)} ,
$$
che ha senso *solo* se $R > V\,i$, cioè se la rata supera l'interesse del primo periodo; altrimenti il debito non diminuisce mai. In genere $n$ non è intero, e si arrotonda all'intero successivo modificando l'ultima rata.
:::

## Ammortamento dei prestiti

:::definizione{#ammortamento titolo="Piano di ammortamento"}
Un debito $S$ contratto al tempo $0$ al tasso $i$ si **ammortizza** con $n$ rate $R_1, \dots, R_n$ pagate alla fine di ogni periodo. Ogni rata si divide in due parti,
$$
R_k = Q_k + I_k ,
$$
dove la **quota interessi** $I_k = i\,S_{k-1}$ paga gli interessi del periodo sul debito ancora da restituire, e la **quota capitale** $Q_k$ riduce il debito. Il **debito residuo** dopo il pagamento della rata $k$ è $S_k = S_{k-1} - Q_k$, con $S_0 = S$. Le condizioni di chiusura sono
$$
S_n = 0,
\qquad \text{cioè} \qquad
Q_1 + Q_2 + \dots + Q_n = S .
$$
Il **piano di ammortamento** è la tabella che riporta, periodo per periodo, rata, quota capitale, quota interessi e debito residuo. I due piani più usati sono l'ammortamento francese e l'ammortamento italiano.
:::

::::teorema{#debito-residuo titolo="Debito residuo"}
In un piano di ammortamento il debito residuo soddisfa $S_k = (1 + i)\,S_{k-1} - R_k$, e dopo $k$ rate vale
$$
S_k = \sum_{h=k+1}^{n} R_h\,(1 + i)^{-(h - k)}
\qquad \text{(metodo prospettivo)} ,
$$
cioè il valore, al tempo $k$, delle rate ancora da pagare. In particolare $S = S_0$ è il valore attuale di tutte le rate, quindi il prestito e le rate sono finanziariamente equivalenti. Il debito residuo è la somma da versare per estinguere il prestito in anticipo subito dopo la rata $k$.

:::dimostrazione
L'idea è ricavare una relazione tra due debiti residui consecutivi e applicarla a ritroso partendo da $S_n = 0$. Poiché $Q_k = R_k - I_k = R_k - i\,S_{k-1}$, si ha
$$
S_k = S_{k-1} - Q_k = S_{k-1} + i\,S_{k-1} - R_k = (1 + i)\,S_{k-1} - R_k .
$$
Ne segue $S_{k-1} = \dfrac{S_k + R_k}{1 + i}$. Applicando questa relazione con $k = n$ e $S_n = 0$ si ottiene $S_{n-1} = R_n\,(1 + i)^{-1}$; applicandola di nuovo si ottiene $S_{n-2} = R_{n-1}\,(1 + i)^{-1} + R_n\,(1 + i)^{-2}$, e proseguendo fino all'indice $k$ si ottiene la formula.
:::
::::

::::teorema{#ammortamento-francese titolo="Ammortamento francese"}
Nell'**ammortamento francese** le $n$ rate sono costanti. Allora
$$
R = \frac{S}{a_{\overline{n}|i}},
\qquad
Q_1 = R - i\,S,
\qquad
Q_{k+1} = Q_k\,(1 + i),
\qquad
S_k = R\,a_{\overline{n-k}|i} .
$$
Le quote capitale formano una progressione geometrica crescente di ragione $1 + i$, mentre le quote interessi diminuiscono, perché il debito su cui si calcolano diminuisce. È il piano dei mutui a rata fissa. Con $S = 3000$ euro, $n = 3$ e $i = 10\%$ la rata è $R = \dfrac{3000}{a_{\overline{3}|0{,}1}} \approx 1206{,}34$ euro, e il piano è il seguente (importi in euro, arrotondati al centesimo).

| $k$ | $R_k$ | $Q_k$ | $I_k$ | $S_k$ |
| --- | --- | --- | --- | --- |
| $0$ | | | | $3000{,}00$ |
| $1$ | $1206{,}34$ | $906{,}34$ | $300{,}00$ | $2093{,}66$ |
| $2$ | $1206{,}34$ | $996{,}98$ | $209{,}37$ | $1096{,}68$ |
| $3$ | $1206{,}34$ | $1096{,}68$ | $109{,}67$ | $0{,}00$ |

:::dimostrazione
Per il teorema sul debito residuo, $S$ è il valore attuale delle rate, che formano una rendita immediata posticipata, quindi $S = R\,a_{\overline{n}|i}$ e si ricava $R$. Allo stesso modo $S_k$ è il valore al tempo $k$ delle $n - k$ rate residue, cioè $R\,a_{\overline{n-k}|i}$. La prima quota capitale è la rata meno gli interessi sul debito iniziale. Per due rate consecutive si ha $R = Q_k + i\,S_{k-1} = Q_{k+1} + i\,S_k$; sottraendo si ottiene $Q_{k+1} - Q_k = i\,(S_{k-1} - S_k) = i\,Q_k$, quindi $Q_{k+1} = Q_k\,(1 + i)$.
:::
::::

:::teorema{#ammortamento-italiano titolo="Ammortamento italiano"}
Nell'**ammortamento italiano** le quote capitale sono costanti. Allora
$$
Q = \frac{S}{n},
\qquad
S_k = S \left( 1 - \frac{k}{n} \right),
\qquad
I_k = i\,S\,\frac{n - k + 1}{n},
\qquad
R_k = \frac{S}{n} + I_k .
$$
Le formule seguono dalle definizioni, perché dopo $k$ rate il debito è diminuito di $k$ quote uguali. Le rate formano una progressione aritmetica decrescente di ragione $-\dfrac{i\,S}{n}$, quindi le prime rate sono più alte di quelle del piano francese con gli stessi dati. Con $S = 12\,000$ euro, $n = 4$ e $i = 5\%$ la quota capitale è $3000$ euro, e il piano è il seguente.

| $k$ | $R_k$ | $Q_k$ | $I_k$ | $S_k$ |
| --- | --- | --- | --- | --- |
| $0$ | | | | $12\,000$ |
| $1$ | $3600$ | $3000$ | $600$ | $9000$ |
| $2$ | $3450$ | $3000$ | $450$ | $6000$ |
| $3$ | $3300$ | $3000$ | $300$ | $3000$ |
| $4$ | $3150$ | $3000$ | $150$ | $0$ |

Il totale degli interessi è $1500$ euro. Nel piano francese il debito diminuisce più lentamente all'inizio, perché le prime quote capitale sono piccole, e il debito residuo resta sopra quello del piano italiano, come mostra il grafico.

::grafico{f="1000*(1-1.1^(-(10-x)))/(1-1.1^(-10))+0*sqrt(x*(10-x));1000*(1-x/10)+0*sqrt(x*(10-x))" punti="5,616.93,pieno;5,500,pieno" xmin=-2 xmax=12 ymin=-125 ymax=1125 nomi="k,S" legenda="\text{francese};\text{italiano}" titolo="Debito residuo di un prestito di $1000$ euro in $10$ rate al $10\%$: dopo $5$ rate restano $616{,}93$ euro nel piano francese e $500$ euro nel piano italiano"}

:::

## Valore attuale netto e tasso interno di rendimento

:::definizione{#van titolo="Valore attuale netto"}
Un investimento è descritto dai flussi di cassa $a_0, a_1, \dots, a_n$ ai tempi $0, 1, \dots, n$, negativi le uscite e positivi le entrate. Il **valore attuale netto** al tasso di valutazione $i$ è
$$
\operatorname{VAN}(i) = \sum_{k=0}^{n} a_k\,(1 + i)^{-k} = a_0 + \frac{a_1}{1 + i} + \dots + \frac{a_n}{(1 + i)^{n}} .
$$
Il tasso $i$ è il rendimento delle alternative disponibili, per esempio il tasso a cui si può investire in un titolo sicuro. Secondo il **criterio del VAN** l'investimento conviene se $\operatorname{VAN}(i) > 0$, perché le entrate, riportate a oggi, superano le uscite; tra due investimenti si preferisce quello con il VAN maggiore. Un investimento che costa $1000$ euro e rende $400$ euro alla fine di ognuno dei tre anni successivi ha, al $5\%$,
$$
\operatorname{VAN}(0{,}05) = -1000 + 400\,a_{\overline{3}|0{,}05} \approx 89{,}30 \text{ euro} ,
$$
quindi conviene rispetto all'investimento al $5\%$.
:::

:::definizione{#tir titolo="Tasso interno di rendimento"}
Il **tasso interno di rendimento** (TIR) di un investimento è il tasso $i^* > -1$ che annulla il valore attuale netto:
$$
\operatorname{VAN}(i^*) = 0 .
$$
Al tasso $i^*$ le entrate e le uscite sono finanziariamente equivalenti, quindi $i^*$ è il rendimento dell'investimento stesso. Secondo il **criterio del TIR** l'investimento conviene se il suo TIR supera il tasso delle alternative. Con due soli periodi l'equazione è di secondo grado nell'incognita $v = (1 + i^*)^{-1}$; per esempio $-100 + 60\,v + 60\,v^{2} = 0$ dà $v = \dfrac{-3 + \sqrt{69}}{6} \approx 0{,}8844$, quindi $i^* \approx 13{,}07\%$. In generale l'equazione non si risolve con una formula, e il TIR si approssima.
:::

:::richiamo{titolo="Teorema degli zeri"}
Sia $f$ continua sull'intervallo chiuso $[a, b]$, con $f(a)$ e $f(b)$ di segno opposto. Allora esiste almeno un punto $c \in (a, b)$ tale che $f(c) = 0$.
:::

::::teorema{#esistenza-tir titolo="Esistenza e unicità del TIR"}
Si consideri un investimento con $a_0 < 0$, con $a_k \geq 0$ per $k = 1, \dots, n$ e non tutti nulli, e con
$$
a_0 + a_1 + \dots + a_n > 0 .
$$
Allora la funzione $\operatorname{VAN}(i)$ è continua e strettamente decrescente per $i \geq 0$, e ha uno e un solo zero $i^* > 0$. Inoltre $\operatorname{VAN}(i) > 0$ per $0 \leq i < i^*$ e $\operatorname{VAN}(i) < 0$ per $i > i^*$.

Per un investimento di questo tipo, con un'uscita iniziale seguita da sole entrate che in totale la superano, i due criteri danno quindi la stessa risposta, perché il VAN al tasso $i$ è positivo *se e solo se* $i < i^*$. Inoltre il TIR si può approssimare con il **metodo di bisezione**, perché il VAN è continuo e cambia segno.

::grafico{f="-1000+400/(1+x/100)+400/(1+x/100)^2+400/(1+x/100)^3+0*sqrt(x)" punti="0,200,pieno;5,89.3,pieno;9.701,0,vuoto" segmenti="5,0,5,89.3" xmin=-4 xmax=36 ymin=-500 ymax=500 nomi="i,VAN" legenda="\operatorname{VAN}(i) = -1000 + 400\,a_{\overline{3}|i}" titolo="Il VAN dell'investimento $(-1000, 400, 400, 400)$ decresce al crescere del tasso, vale $89{,}30$ euro al $5\%$ e si annulla nel TIR $i^* \approx 9{,}70\%$ (tasso in percentuale sull'asse orizzontale)"}

:::dimostrazione
L'idea è applicare il teorema degli zeri su un intervallo $[0, b]$ con $b$ abbastanza grande, e ottenere l'unicità dalla monotonia. Ogni termine $a_k\,(1 + i)^{-k}$ è continuo per $i > -1$, quindi $\operatorname{VAN}$ è continua. Per $k \geq 1$ con $a_k > 0$ il termine $a_k\,(1 + i)^{-k}$ è strettamente decrescente, perché $(1 + i)^{k}$ è crescente; i termini con $a_k = 0$ sono nulli. Almeno un $a_k$ è positivo, perciò $\operatorname{VAN}$ è strettamente decrescente.

Per $i = 0$ si ha $\operatorname{VAN}(0) = a_0 + a_1 + \dots + a_n > 0$ per ipotesi. Per $i \to +\infty$ ogni termine con $k \geq 1$ tende a $0$, quindi $\operatorname{VAN}(i) \to a_0 < 0$, e per la definizione di limite esiste $b > 0$ con $\operatorname{VAN}(b) < 0$. Il teorema degli zeri si applica alla funzione $\operatorname{VAN}$ sull'intervallo $[0, b]$, e garantisce uno zero $i^* \in (0, b)$. Una funzione strettamente decrescente assume ogni valore al più una volta, quindi lo zero è unico, e il segno di $\operatorname{VAN}$ è positivo prima di $i^*$ e negativo dopo.
:::
::::

:::esempio{titolo="TIR con il metodo di bisezione"}
Per l'investimento $(-1000, 400, 400, 400)$ si ha $\operatorname{VAN}(0) = 200 > 0$ e $\operatorname{VAN}(0{,}2) \approx -157{,}41 < 0$, quindi il TIR sta in $(0;\ 0{,}2)$. A ogni passo si calcola il VAN nel punto medio e si tiene la metà dell'intervallo ai cui estremi il VAN ha segno opposto.

| intervallo | punto medio | VAN nel punto medio | metà tenuta |
| --- | --- | --- | --- |
| $[0;\ 0{,}2]$ | $0{,}1$ | $-5{,}26$ | sinistra |
| $[0;\ 0{,}1]$ | $0{,}05$ | $89{,}30$ | destra |
| $[0{,}05;\ 0{,}1]$ | $0{,}075$ | $40{,}21$ | destra |
| $[0{,}075;\ 0{,}1]$ | $0{,}0875$ | $17{,}05$ | destra |
| $[0{,}0875;\ 0{,}1]$ | $0{,}09375$ | $5{,}79$ | destra |

Dopo cinque passi il TIR sta in $[0{,}09375;\ 0{,}1]$, un intervallo di ampiezza $0{,}00625$; proseguendo si trova $i^* \approx 9{,}70\%$. Ogni passo dimezza l'ampiezza dell'intervallo, perciò per ottenere il TIR a meno di $0{,}01\%$ partendo da un intervallo di ampiezza $0{,}2$ bastano $11$ passi, poiché $\dfrac{0{,}2}{2^{11}} < 0{,}0001$.
:::

:::attenzione
Se i flussi cambiano segno più di una volta, il TIR può non essere unico. L'operazione $(-10\,000,\ 26\,000,\ -16\,800)$ ha
$$
\operatorname{VAN}(i) = -10\,000 + 26\,000\,v - 16\,800\,v^{2}, \qquad v = (1 + i)^{-1},
$$
che si annulla per $v = \dfrac{5}{6}$ e per $v = \dfrac{5}{7}$, cioè per $i = 20\%$ e per $i = 40\%$. In questo caso il TIR non individua un rendimento, e si usa il criterio del VAN.

::grafico{f="-10000+26000/(1+x/100)-16800/(1+x/100)^2+0*sqrt((x-10)*(50-x))" punti="20,0,vuoto;40,0,vuoto" xmin=0 xmax=50 ymin=-400 ymax=100 nomi="i,VAN" legenda="\operatorname{VAN}(i)" titolo="Il VAN dell'operazione $(-10\,000,\ 26\,000,\ -16\,800)$, con il tasso in percentuale sull'asse orizzontale, si annulla per $i = 20\%$ e per $i = 40\%$"}

:::
