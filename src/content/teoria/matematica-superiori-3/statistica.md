---
titolo: Statistica descrittiva e dati a due variabili
sommario: Dalle tabelle di frequenza alla regressione, con esempi svolti di lettura, confronto e previsione.
---

## Dati, frequenze e percentuali

:::definizione{#frequenze titolo="Frequenza assoluta e relativa"}
In un'indagine ogni riga rappresenta un'**unità statistica**, per esempio uno studente, e ogni colonna registra una caratteristica. Il mezzo di trasporto è un dato qualitativo. Il numero di viaggi è quantitativo discreto perché si conta, mentre la durata è quantitativa continua perché si misura.

Per un valore o una categoria, la **frequenza assoluta** $n_i$ conta quante osservazioni appartengono alla categoria $i$. Se ogni osservazione rientra in una sola categoria e le categorie includono tutti i dati, la somma delle frequenze assolute è la numerosità $N$. Con $N>0$ si ottengono la frequenza relativa $f_i$ e la frequenza percentuale $p_i$.
$$
f_i=\frac{n_i}{N},\qquad p_i=100f_i\,\%,\qquad \sum_i f_i=1.
$$
Il totale al denominatore è la popolazione descritta dalla tabella. Se le percentuali sono arrotondate, la loro somma può differire leggermente da $100\,\%$.
:::

:::esempio{titolo="Confrontare gruppi di numerosità diversa"}
Arrivano in bicicletta $8$ studenti su $20$ nella classe A e $9$ su $30$ nella classe B. Per confrontare la diffusione del mezzo si confrontano le due quote.
$$
\begin{aligned}
f_A&=\frac{8}{20}=\frac25=0{,}40,\\[4pt]
f_B&=\frac{9}{30}=\frac3{10}=0{,}30.
\end{aligned}
$$
La classe B ha un ciclista in più, mentre la quota è maggiore nella classe A di $10$ punti percentuali. Nelle due classi insieme i ciclisti sono $17$ su $50$, quindi la quota complessiva è $34\,\%$. Il denominatore complessivo tiene conto della diversa numerosità delle classi.
:::

:::definizione{#cumulata titolo="Frequenze cumulate"}
Se la variabile assume valori ordinati $v_1<\cdots<v_k$, la **frequenza cumulata** in $v_i$ conta le osservazioni che hanno valore al più $v_i$. Si ottiene sommando le frequenze dalla prima riga fino alla riga di $v_i$. Dividendo per $N$ si conosce la quota di osservazioni entro la soglia.
:::

:::esempio{titolo="Leggere una soglia nella tabella"}
La tabella riassume il numero di assenze di $20$ studenti in un mese.

| Assenze | Frequenza assoluta | Frequenza cumulata |
| --- | --- | --- |
| $0$ | $5$ | $5$ |
| $1$ | $8$ | $13$ |
| $2$ | $4$ | $17$ |
| $3$ | $3$ | $20$ |

Hanno al più un'assenza $13$ studenti, quindi la relativa quota è $\dfrac{13}{20}=65\,\%$. Poiché chi ha più di un'assenza appartiene al gruppo complementare, gli studenti con due o tre assenze sono $20-13=7$.
:::

## Grafici per valori e per intervalli

:::osservazione{#grafici titolo="Barre per categorie e valori discreti"}
Un **diagramma a barre** assegna una barra a ogni categoria o valore discreto. Le barre sono separate perché categorie diverse occupano posizioni distinte. Se la variabile è qualitativa senza ordine naturale, si possono riordinare le barre mantenendo la corrispondenza tra etichette e frequenze.

Il diagramma rappresenta le assenze registrate nella tabella. Confrontando le altezze delle barre si individua il numero di assenze più frequente. In questo caso il punto di altezza massima corrisponde a un'assenza.

::grafico{xmin=-0.6 xmax=3.8 ymin=-0.7 ymax=9.4 nomi="x,studenti" poligoni="-0.24,0 0.24,0 0.24,5 -0.24,5;0.76,0 1.24,0 1.24,8 0.76,8;1.76,0 2.24,0 2.24,4 1.76,4;2.76,0 3.24,0 3.24,3 2.76,3" titolo="Sull'asse orizzontale si legge il numero di assenze. A una sola assenza corrispondono $8$ studenti."}

:::

:::definizione{#istogramma titolo="Istogramma e densità di frequenza"}
Quando una misura è raggruppata in classi di ampiezza $w_i>0$, il rettangolo di ogni classe occupa tutto il corrispondente intervallo orizzontale. La quota di dati è proporzionale all'**area**. Se si vogliono aree uguali alle frequenze assolute $n_i$, l'altezza dev'essere la **densità di frequenza** $d_i$.
$$
d_i=\frac{n_i}{w_i},\qquad w_i d_i=n_i.
$$
Si possono usare anche le frequenze relative al posto delle assolute. In questo caso l'area totale è $1$. La convenzione $[a,b)$ assegna una misura uguale a $b$ all'intervallo successivo, così ogni misura viene contata una volta.
:::

:::esempio{titolo="Classi di diversa ampiezza"}
Due intervalli di durata raccolgono, rispettivamente, $12$ soste in $[0,4)$ e $18$ soste in $[4,13)$. La prima classe è larga $4$ minuti e la seconda $9$.
$$
\begin{aligned}
d_1&=\frac{12}{4}=3,\\[4pt]
d_2&=\frac{18}{9}=2.
\end{aligned}
$$
Il rettangolo della prima classe è più alto perché vi sono più soste per minuto di ampiezza. Quello della seconda ha area maggiore perché l'intervallo è abbastanza largo da contenere $18$ soste.

::grafico{xmin=-1 xmax=15 ymin=-0.35 ymax=4 nomi="min,densità" poligoni="0,0 4,0 4,3 0,3;4,0 13,0 13,2 4,2" etichette="1.4,1.3,12;8,1.1,18;4,0.23,4" titolo="Le frequenze $12$ e $18$ si leggono dalle aree. La separazione tra le classi è a $4$ minuti."}

:::

## Media e pesi

:::definizione{#media titolo="Media aritmetica e media con frequenze"}
La **media aritmetica** è il valore che si otterrebbe distribuendo la somma dei dati in $N$ parti uguali. Per osservazioni numeriche $x_1,\ldots,x_N$ con $N>0$ vale
$$
\bar x=\frac{x_1+\cdots+x_N}{N}.
$$
Se la tabella riporta ogni valore distinto $v_i$ una volta con la sua frequenza $n_i$, il valore $v_i$ contribuisce $n_i v_i$ alla somma. Dunque
$$
\bar x=\frac{\sum_i n_i v_i}{\sum_i n_i}.
$$
La stessa idea consente di riunire due gruppi usando le loro medie. La media di ciascun gruppo va moltiplicata per la numerosità del gruppo, perché quel prodotto ricostruisce la somma delle sue osservazioni.
:::

:::esempio{titolo="Media complessiva di due gruppi"}
Un gruppo di $10$ studenti ottiene una media di $8$ punti e un gruppo di $20$ studenti ottiene una media di $6$ punti. Si ricostruiscono i totali prima di dividere.
$$
\begin{aligned}
S&=10\cdot 8+20\cdot 6=200,\\[4pt]
\bar x&=\frac{200}{30}=\frac{20}{3}.
\end{aligned}
$$
La media complessiva è più vicina a $6$ perché il secondo gruppo conta il doppio degli studenti. Se entrambi i gruppi avessero la stessa numerosità, le due medie contribuirebbero in egual misura.
:::

:::attenzione
Se una tabella riporta soltanto classi di valori, i dati all'interno di ogni classe restano incogniti. Usare il punto medio della classe in luogo di ciascun suo dato fornisce una **stima**. Per esempio, due misure in $[0,10)$ potrebbero essere $1$ e $3$ oppure $7$ e $9$. Il punto medio è $5$, mentre le due medie effettive sono $2$ e $8$.
:::

## Mediana, moda e quartili

:::definizione{#mediana titolo="Posizione centrale e valore più frequente"}
La **mediana** di dati numerici si ricava dopo averli ordinati. Se $N$ è dispari, occupa la posizione $\dfrac{N+1}{2}$. Se $N$ è pari, è la media dei valori nelle posizioni $\dfrac N2$ e $\dfrac N2+1$. Le posizioni contano tutte le osservazioni, comprese le ripetizioni. La **moda** è ogni valore o categoria di frequenza massima. Se due valori hanno la stessa frequenza massima, entrambi sono mode.
:::

:::esempio{titolo="Leggere la mediana dalle cumulate"}
In una distribuzione di $12$ punteggi, i valori $4$, $6$ e $9$ hanno frequenza rispettivamente $3$, $4$ e $5$. I primi tre posti spettano a $4$. Dal quarto al settimo posto compreso si trova $6$, quindi sia la sesta sia la settima osservazione valgono $6$. La mediana è $6$. La moda è $9$ perché la frequenza $5$ è la maggiore, pur essendoci più di metà osservazioni con valore al più $6$.
:::

:::definizione{#quartili titolo="Quartili e intervallo interquartile"}
I **quartili** individuano posizioni nella successione ordinata. Con almeno due osservazioni, una convenzione scolastica prende $Q_1$ come mediana della metà inferiore e $Q_3$ come mediana della metà superiore, escludendo la mediana centrale da entrambe le metà quando $N$ è dispari. La differenza $Q_3-Q_1$ è l'**ampiezza interquartile**. Misura la distanza tra i due quartili. Quando i quartili dipendono da posizioni interne, variare un estremo senza cambiare i dati in quelle posizioni lascia invariata l'ampiezza interquartile.
:::

:::esempio{titolo="Un valore lontano aumenta la media"}
Nei dati ordinati $2,3,4,5,6$, la mediana è $4$ e i quartili sono $\dfrac52$ e $\dfrac{11}{2}$. Sostituendo $6$ con $36$, la mediana resta $4$ perché la posizione centrale è occupata dallo stesso dato. La somma cresce di $30$, quindi la media aumenta di $\dfrac{30}{5}=6$ e passa da $4$ a $10$. La mediana descrive il centro per posizione, mentre la media tiene conto anche della distanza dei valori estremi.
:::

## Dispersione e unità di misura

:::definizione{#varianza titolo="Varianza descrittiva e deviazione standard"}
Due gruppi possono avere la stessa media e differire per la distanza delle osservazioni dal centro. Lo **scarto** dalla media è $x_i-\bar x$. Gli scarti con segno sommano a zero, quindi si mediano i loro quadrati per misurare la dispersione. Per descrivere le $N$ osservazioni registrate si usa
$$
\sigma^2=\frac1N\sum_i(x_i-\bar x)^2,\qquad \sigma=\sqrt{\sigma^2}.
$$
Con una tabella di frequenze si pesa ciascun quadrato per la frequenza $n_i$. Se le misure sono in centimetri, la varianza si esprime in centimetri quadrati e la deviazione standard in centimetri. Il divisore $N$ si riferisce qui alla varianza descrittiva dell'insieme osservato.
:::

::::teorema{#formula-varianza titolo="Media dei quadrati e quadrato della media"}
Per $N>0$ la varianza si può calcolare anche con
$$
\sigma^2=\frac{1}{N}\sum_i x_i^2-\bar x^2.
$$
Questa formula è comoda quando si conoscono già la somma dei valori e quella dei loro quadrati.

:::dimostrazione
Si sviluppa il quadrato dello scarto. Poiché $\sum_i x_i=N\bar x$, il termine misto risulta $-2\bar x^2$ dopo la divisione per $N$.
$$
\begin{aligned}
\sigma^2
&=\frac{\sum_i x_i^2}{N}
-\frac{2\bar x\sum_i x_i}{N}+\bar x^2\\[5pt]
&=\frac{\sum_i x_i^2}{N}-2\bar x^2+\bar x^2\\[5pt]
&=\frac{\sum_i x_i^2}{N}-\bar x^2 .
\end{aligned}
$$
:::
::::

:::esempio{titolo="Stesso centro e dispersioni diverse"}
I dati $2,4,6$ e $3,4,5$ hanno entrambi media $4$. I loro scarti quadrati sono rispettivamente $4,0,4$ e $1,0,1$, pertanto
$$
\sigma_A^2=\frac83,\qquad \sigma_B^2=\frac23.
$$
La varianza di A è quattro volte quella di B, ma il rapporto tra le deviazioni standard è $\sqrt{4}=2$. La radice riporta la misura della dispersione alla scala dei dati.
:::

## Cambi di unità e trasformazioni affini

::::teorema{#trasformazioni titolo="Effetti di una trasformazione affine"}
Se ogni osservazione diventa $y_i=ax_i+b$, con $a,b\in\mathbb R$, allora
$$
\bar y=a\bar x+b,\qquad \sigma_y^2=a^2\sigma_x^2,\qquad
\sigma_y=|a|\sigma_x.
$$
Il termine $b$ sposta i dati e la media della stessa quantità. Il fattore $a$ moltiplica gli scarti e il suo valore assoluto moltiplica le distanze.

:::dimostrazione
Sommando le $N$ relazioni $y_i=ax_i+b$ e dividendo per $N$ si ottiene la formula per $\bar y$. Sottraendo questa media al dato $y_i$ si esplicita il nuovo scarto.
$$
\begin{aligned}
y_i-\bar y
&=(ax_i+b)-(a\bar x+b)\\
&=a(x_i-\bar x).
\end{aligned}
$$
Il quadrato dello scarto contiene il fattore $a^2$. Poiché questo fattore è comune a tutti i dati, esce dalla media. La deviazione standard contiene dunque il fattore $\sqrt{a^2}=|a|$.
:::
::::

:::esempio{titolo="Convertire metri in centimetri"}
Un insieme di lunghezze ha media $2{,}4\,\mathrm{m}$ e deviazione standard $0{,}15\,\mathrm{m}$. I valori numerici in centimetri si ottengono con $a=100$ e $b=0$. La nuova media è $240\,\mathrm{cm}$ e la deviazione standard è $15\,\mathrm{cm}$. Il valore numerico della varianza passa da $0{,}0225$ a $225$ perché il suo fattore di conversione è $100^2$.
:::

## Coppie, covarianza e correlazione

:::definizione{#covarianza titolo="Covarianza e diagramma di dispersione"}
Quando su ogni unità si rilevano due misure, per esempio ore di allenamento e distanza percorsa, le osservazioni sono **coppie** $(x_i,y_i)$. Nel diagramma di dispersione ogni coppia è un punto e le rette $x=\bar x$ e $y=\bar y$ dividono il piano in quattro regioni. Il prodotto degli scarti è positivo dove entrambi i valori sono maggiori delle rispettive medie o entrambi minori. Nelle altre due regioni è negativo.

La **covarianza** è la media di questi prodotti. Il suo segno indica quale contributo prevale.
$$
\operatorname{cov}(x,y)
=\frac1N\sum_i (x_i-\bar x)(y_i-\bar y).
$$
Se $\sigma_x$ e $\sigma_y$ sono positive, la covarianza divisa per il loro prodotto è il **coefficiente di correlazione lineare** $r$.
$$
r=\frac{\operatorname{cov}(x,y)}{\sigma_x\sigma_y},
\qquad -1\le r\le 1.
$$
Il denominatore ha la stessa unità della covarianza, quindi $r$ è privo di unità. Valori di $|r|$ vicini a $1$ indicano punti vicini a una relazione lineare. Se tutti i valori di una variabile sono uguali, il denominatore è nullo e $r$ è indefinito.
:::

:::esempio{titolo="Il segno dei prodotti degli scarti"}
Per le coppie $(1,1)$, $(2,4)$ e $(3,4)$ le medie sono $\bar x=2$ e $\bar y=3$. I prodotti degli scarti sono
$$
(1-2)(1-3)=2,\qquad
(2-2)(4-3)=0,\qquad
(3-2)(4-3)=1.
$$
La covarianza vale $\dfrac{2+0+1}{3}=1$. Il primo e il terzo punto contribuiscono positivamente perché ciascuno ha scarti dello stesso segno. Nel secondo punto lo scarto orizzontale è zero, quindi il contributo è nullo.

::grafico{xmin=-0.4 xmax=4.4 ymin=-0.4 ymax=5.3 punti="1,1;2,4;3,4" asintoti="x=2;y=3" titolo="Le rette tratteggiate passano per le medie delle due variabili."}

:::

::::teorema{#limiti-correlazione titolo="Perché la correlazione è compresa tra −1 e 1"}
Le quantità $u_i=\dfrac{x_i-\bar x}{\sigma_x}$ e $v_i=\dfrac{y_i-\bar y}{\sigma_y}$ misurano gli scarti in unità di deviazione standard. Per definizione, sia la media dei quadrati di $u_i$ sia quella dei quadrati di $v_i$ vale $1$. La media dei prodotti $u_iv_i$ è $r$.

:::dimostrazione
La media dei quadrati di $u_i-v_i$ è $2-2r$, mentre quella dei quadrati di $u_i+v_i$ è $2+2r$. Le due medie sono non negative, perciò $r\le1$ e $r\ge-1$. Se $r=1$, la prima media vale zero e quindi $u_i=v_i$ per ogni $i$. Se $r=-1$, la seconda vale zero e $u_i=-v_i$. In entrambi i casi le coppie giacciono esattamente su una retta.
:::
::::

:::attenzione
Una correlazione nulla riguarda la componente lineare. Nelle coppie $(-2,4)$, $(-1,1)$, $(0,0)$, $(1,1)$ e $(2,4)$ vale sempre $y=x^2$. La media di $x$ è zero e i contributi alla covarianza per le ascisse opposte si compensano, quindi $r=0$.

::grafico{xmin=-2.6 xmax=2.7 ymin=-0.6 ymax=5.3 punti="-2,4;-1,1;0,0;1,1;2,4" titolo="I punti verificano $y=x^2$ e hanno correlazione lineare nulla."}

:::

## Regressione lineare e residui

::::teorema{#regressione titolo="Retta di regressione di y su x"}
La retta di regressione usa $x$ per prevedere $y$. Per la coppia $(x_i,y_i)$, il valore previsto è $\hat y_i=mx_i+q$ e il **residuo** è $e_i=y_i-\hat y_i$. Il criterio dei minimi quadrati sceglie la retta che rende minima la somma $\sum_i e_i^2$. Se $\sigma_x^2>0$, i coefficienti sono
$$
m=\frac{\operatorname{cov}(x,y)}{\sigma_x^2},\qquad
q=\bar y-m\bar x.
$$
La relazione per $q$ implica che la retta passa per il punto medio $(\bar x,\bar y)$.

:::dimostrazione
Per una pendenza $m$ fissata, si cercano i valori di $q$ che minimizzano gli scarti tra $y_i-mx_i$ e $q$. La somma di questi scarti al quadrato è minima quando $q$ coincide con la loro media $\bar y-m\bar x$. Infatti, per numeri $u_i$ di media $\bar u$,
$$
\sum_i(u_i-q)^2=\sum_i(u_i-\bar u)^2+N(\bar u-q)^2 ,
$$
perché il termine misto contiene $\sum_i(u_i-\bar u)=0$. Sostituendo $q=\bar y-m\bar x$, il residuo diventa $(y_i-\bar y)-m(x_i-\bar x)$. La media del suo quadrato è
$$
\sigma_y^2-2m\operatorname{cov}(x,y)+m^2\sigma_x^2 .
$$
Questa è una parabola in $m$ con coefficiente quadratico positivo. La formula del vertice dà come ascissa di minimo $\dfrac{\operatorname{cov}(x,y)}{\sigma_x^2}$.
:::
::::

:::esempio{titolo="Una previsione e il suo residuo"}
Riprendiamo le coppie $(1,1)$, $(2,4)$ e $(3,4)$. Si ha $\sigma_x^2=\dfrac{1+0+1}{3}=\dfrac23$ e $\operatorname{cov}(x,y)=1$. I coefficienti e il residuo centrale sono
$$
\begin{aligned}
m&=\frac{1}{\dfrac23}=\frac32,\\[5pt]
q&=3-\frac32\cdot 2=0,\\[5pt]
e_2&=4-\frac32\cdot 2=1.
\end{aligned}
$$
Per $x=2$ la retta prevede $3$, mentre l'osservazione vale $4$. Il residuo è positivo perché il punto si trova un'unità sopra la retta.

::grafico{f="1.5*x" xmin=-0.4 xmax=4.4 ymin=-0.4 ymax=5.5 punti="1,1;2,4;3,4" segmenti="2,3,2,4" titolo="Il segmento verticale a $x=2$ misura il residuo $e_2=1$."}

:::

## Interpretare il modello

:::osservazione{#lettura titolo="Intervallo osservato e fattori comuni"}
Una previsione in corrispondenza di un'ascissa compresa tra la più piccola e la più grande osservata è un'**interpolazione**. Una previsione esterna è un'**estrapolazione**. In entrambi i casi si applica la stessa equazione, ma per l'estrapolazione bisogna assumere che la relazione osservata prosegua oltre i dati.

La covarianza e la correlazione sono simmetriche rispetto allo scambio di $x$ e $y$. La regressione di $y$ su $x$ minimizza gli scarti verticali. Scambiando le variabili, la nuova regressione minimizza gli scarti lungo l'asse orizzontale del grafico iniziale.
:::

:::esempio{titolo="Previsione entro i dati e fuori scala"}
In un esperimento ipotetico il tempo di riscaldamento è compreso tra $2$ e $8$ minuti. Un modello lineare prevede un aumento di temperatura di $3\,\mathrm{^\circ C}$ al minuto. Applicarlo a $5$ minuti è un'interpolazione. A $40$ minuti è un'estrapolazione, perché l'esperimento termina a $8$ minuti. Un limite fisico o una regolazione automatica può modificare la pendenza oltre il tratto misurato.
:::

:::esempio{titolo="Una nuova osservazione cambia la pendenza"}
I punti $(1,2)$, $(2,3)$ e $(3,4)$ stanno sulla retta $y=x+1$, quindi la regressione sui tre punti ha pendenza $1$. Si aggiunge la coppia $(8,0)$. Ora la media delle ascisse è $\dfrac72$ e quella delle ordinate è $\dfrac94$. La media dei prodotti $x_iy_i$ vale $\dfrac{2+6+12+0}{4}=5$. Sviluppando il prodotto degli scarti si trova che la covarianza è la media dei prodotti meno il prodotto delle medie.

$$
\begin{aligned}
\operatorname{cov}(x,y)
&=5-\frac72\cdot\frac94=-\frac{23}{8},\\[4pt]
\sigma_x^2&=\frac{1+4+9+64}{4}-\left(\frac72\right)^2=\frac{29}{4},\\[4pt]
m&=\frac{-\dfrac{23}{8}}{\dfrac{29}{4}}=-\frac{23}{58},\\[4pt]
q&=\frac94+\frac{23}{58}\cdot\frac72=\frac{211}{58}.
\end{aligned}
$$

La nuova pendenza è negativa. L’ascissa $8$ è lontana dal gruppo iniziale e la sua ordinata è bassa, perciò il prodotto dei suoi scarti è negativo e grande in valore assoluto. Prima di interpretare la pendenza conviene quindi verificare se una singola osservazione esercita un’influenza marcata e capire come è stata misurata.

::grafico{f="x+1;(-23*x+211)/58" xmin=-0.4 xmax=9 ymin=-0.55 ymax=6 punti="1,2;2,3;3,4;8,0,pieno,P" legenda="y=x+1;y=-\dfrac{23}{58}x+\dfrac{211}{58}" titolo="La retta continua usa i primi tre punti. La tratteggiata include anche $P$."}

:::

:::attenzione
Un'associazione osservata da sola lascia aperta la questione della causalità. Un chiosco può vendere più gelati nei giorni in cui la piscina ha più ingressi. Una temperatura più alta può aumentare sia gli ingressi sia le vendite, quindi le due serie possono crescere insieme anche senza un effetto degli ingressi sulle decisioni di acquisto. Per valutare l'associazione occorre conoscere il contesto in cui sono stati rilevati i dati.
:::
