---
titolo: "Statistica descrittiva"
sommario: "Dalle frequenze alla forma dei dati. Media ponderata, mediana e quartili, scarti, varianza descrittiva e deviazione standard."
---

## Che cosa dicono le osservazioni

:::definizione{#dati titolo="Unità, carattere e gruppo di riferimento"}
Una **popolazione** comprende tutte le unità a cui si riferisce un'indagine. Un **campione** è una parte della popolazione. Il **carattere** è la proprietà osservata su ogni unità. È qualitativo se descrive una categoria, come la linea di autobus usata. È quantitativo discreto se i valori sono separati, come il numero di fermate. È quantitativo continuo se la misura può assumere ogni valore in un intervallo, come la durata.

Indicheremo con $N$ il numero di osservazioni che stiamo descrivendo. Se rileviamo il tempo di viaggio dello stesso autobus cinque volte, le cinque durate sono cinque osservazioni, ottenute però da un solo mezzo. Per confrontare la puntualità di due linee si specificano periodo, unità di misura, orario previsto e criterio di scelta delle corse.
:::

:::osservazione
Una media dei ritardi alle otto del mattino descrive le corse selezionate a quell'ora. Trarre conclusioni su tutte le corse della giornata richiede che la rilevazione copra anche altri orari. Un numero maggiore di dati alle otto fornisce informazioni più dettagliate su quell'orario.
:::

## Frequenze e gruppi di dimensione diversa

:::definizione{#frequenze titolo="Conteggi e proporzioni"}
Per $N>0$, una modalità con $n_i$ osservazioni ha frequenza relativa $f_i=\dfrac{n_i}{N}$ e rappresenta il $100f_i\%$. Se le modalità sono disgiunte ed esauriscono le osservazioni, la somma delle frequenze assolute è $N$ e quella delle relative è $1$. Per valori ordinati, la frequenza cumulata fino a una soglia somma le frequenze delle modalità minori o uguali a quella soglia.
:::

:::esempio{titolo="Stesso conteggio, diversa diffusione"}
In due turni disgiunti un laboratorio conta $8$ prove ripetute nel primo turno su $20$ e $8$ nel secondo su $40$. Il conteggio uguale dà quote diverse, $\dfrac8{20}=40\%$ e $\dfrac8{40}=20\%$. Se il laboratorio deve predisporre postazioni per chi ripete, conta otto in entrambi i turni. Per confrontare quanto è comune ripetere la prova, si confrontano le due quote.

::grafico{xmin=-0.35 xmax=3.3 ymin=0 ymax=50 nomi="s,p" poligoni="0.73,0 1.27,0 1.27,40 0.73,40;1.73,0 2.27,0 2.27,20 1.73,20" etichette="0.81,43,40%;1.81,23,20%" titolo="Per il turno $s$ l'altezza dà la percentuale $p$ di prove ripetute sul totale di quel turno"}

La quota dei due turni insieme è $\dfrac{8+8}{20+40}=\dfrac4{15}$. Entrambi i numeratori contribuiscono per otto. Al denominatore il secondo turno pesa il doppio, quindi la quota complessiva è più vicina al $20\%$ che al $40\%$.
:::

## Grafici, scale e istogrammi

:::osservazione{#grafici titolo="Che cosa rappresentano altezza e area"}
Un diagramma a barre assegna a ogni modalità una barra separata. La sua altezza indica il conteggio o la quota dichiarata sull'asse verticale. In un diagramma a settori, una quota $f_i$ occupa un angolo pari a $360^\circ f_i$. Queste rappresentazioni suddividono un totale quando le modalità sono disgiunte ed esauriscono le risposte.
:::

:::esempio{titolo="Separare lo scarto dal rapporto visibile"}
Due termometri in una prova di laboratorio registrano rispettivamente $21$ e $24$ gradi Celsius. In entrambi i grafici i valori differiscono di $3$ gradi. Con una base a $20$, i tratti visibili sono alti $1$ e $4$ gradi. Il secondo tratto è quattro volte il primo, perché in entrambi i casi vengono omessi i gradi da $0$ a $20$. Confrontare i due valori in Celsius richiede di dichiarare la scala e l'origine.

::grafico{xmin=-0.35 xmax=3.3 ymin=0 ymax=27 nomi="s,T" poligoni="0.72,0 1.28,0 1.28,21 0.72,21;1.72,0 2.28,0 2.28,24 1.72,24" etichette="0.91,22.1,21;1.91,25.1,24" titolo="Dalla base 0 si leggono le misure $T$ in gradi Celsius dei due strumenti $s$"}

::grafico{xmin=-0.35 xmax=3.3 ymin=20 ymax=25.5 nomi="s,T" poligoni="0.72,20 1.28,20 1.28,21 0.72,21;1.72,20 2.28,20 2.28,24 1.72,24" etichette="0.91,21.38,21;1.91,24.38,24" titolo="La base a 20 ingrandisce visivamente la stessa differenza"}
:::

:::definizione{#istogrammi titolo="L'area ricostruisce il conteggio"}
Raggruppando misure in intervalli, la base del rettangolo dell'**istogramma** ha ampiezza $h_i$. Se ci sono $n_i$ dati nella classe, si sceglie l'altezza $d_i=\dfrac{n_i}{h_i}$ in modo che l'area sia $n_i$. La densità relativa $\dfrac{f_i}{h_i}$ dà invece area $f_i$. La somma delle aree deve essere rispettivamente $N$ o $1$.
:::

:::esempio{titolo="Altezza uguale, conteggi diversi"}
In una rilevazione le classi $[0,2)$, $[2,5)$ e $[5,9)$ minuti contengono $6$, $9$ e $8$ osservazioni. Le densità assolute sono $\dfrac{6}{2}=3$, $\dfrac{9}{3}=3$ e $\dfrac{8}{4}=2$ osservazioni al minuto. Le prime due barre arrivano entrambe a $3$, ma la seconda ha area maggiore perché la sua base è più larga. Una durata esattamente pari a cinque minuti va nella terza classe, per la parentesi quadra a sinistra.

::grafico{xmin=-0.8 xmax=10.2 ymin=-0.35 ymax=4.35 nomi="t,d" poligoni="0,0 2,0 2,3 0,3;2,0 5,0 5,3 2,3;5,0 9,0 9,2 5,2" linee="0,3 2,3 2,0;2,3 5,3 5,0;5,2 9,2 9,0" etichette="0.68,1.25,6;3.25,1.25,9;6.75,0.89,8" titolo="La densità $d$ è in osservazioni al minuto. I numeri nelle regioni indicano le aree."}
:::
## Media e scarti con segno

::::teorema{#media titolo="Frequenze come pesi e somma degli scarti"}
La **media aritmetica** di $N>0$ misure è la somma delle misure divisa per $N$. Se il valore distinto $v_i$ compare $n_i$ volte, il suo contributo alla somma è $n_i v_i$. Uno **scarto** dalla media è la differenza con segno $x_j-\bar x$.

$$
\begin{aligned}
\bar x&=\frac{\sum_{j=1}^N x_j}{N}
=\frac{\sum_i n_i v_i}{\sum_i n_i},\\[5pt]
\sum_{j=1}^N (x_j-\bar x)&=0.
\end{aligned}
$$

:::dimostrazione
Nella prima somma si possono raccogliere le $n_i$ copie di $v_i$, senza cambiare né il totale né il numero di termini. Per la seconda uguaglianza, dalla somma dei dati si sottrae $\bar x$ una volta per ogni osservazione. Si ottiene $\sum_jx_j-N\bar x$, che vale zero per definizione della media.
:::
::::

:::esempio{titolo="Lo stesso valore ripetuto ha più peso"}
Tre valori sono $0$, $3$ e $6$, con frequenze $1$, $2$ e $3$. La media è $\dfrac{0\cdot1+3\cdot2+6\cdot3}{6}=4$. Gli scarti con segno sono $-4$, $-1$ per due volte e $2$ per tre volte. Il peso delle osservazioni a destra compensa quello delle osservazioni a sinistra, perché $3\cdot2=4+2\cdot1$.

::grafico{xmin=-0.65 xmax=7.3 ymin=-0.35 ymax=4.25 nomi="x," punti="0,1;3,1;3,2;6,1;6,2;6,3" segmenti="4,0,4,3.6" etichette="3.53,3.94,4" titolo="Ciascun punto è un'osservazione. La linea tratteggiata indica la media."}
:::

## Mediana e quartili

:::definizione{#mediana titolo="Leggere le posizioni centrali"}
Si ordinano i dati dal più piccolo al più grande, contando anche le ripetizioni. Con $N=2k+1$ la **mediana** è l'osservazione in posizione $k+1$. Con $N=2k>0$ è la media dei dati in posizione $k$ e $k+1$. In una tabella, il rango cercato si raggiunge alla prima cumulata che vale almeno quel numero.
:::

:::definizione{#quartili titolo="Convenzione dei ranghi per il primo e il terzo quartile"}
Per $Q_1$ si moltiplica $N$ per $\tfrac14$, per $Q_3$ per $\tfrac34$, e si arrotondano i prodotti all'intero superiore se occorre. Si prende il dato che occupa il rango ottenuto. È la convenzione del rango superiore, una fra le convenzioni possibili. Per $Q_2$ si usa la regola della mediana. La differenza $Q_3-Q_1$ si chiama **distanza interquartile**.
:::

:::esempio{titolo="Quartili e mediana in una lista con ripetizioni"}
I dati ordinati sono $1,2,2,3,5,7,7,11$. Si ha $N=8$. Il primo quartile si legge al posto $\dfrac{8}{4}=2$, dunque $Q_1=2$. Il terzo si legge al posto $\dfrac{3\cdot8}{4}=6$, dunque $Q_3=7$. I due dati centrali sono al quarto e quinto posto e danno $Q_2=\dfrac{3+5}{2}=4$. La distanza interquartile vale $7-2=5$.

::grafico{xmin=-0.3 xmax=9.2 ymin=-0.4 ymax=12.2 nomi="k,xₖ" punti="1,1;2,2;3,2;4,3;5,5;6,7;7,7;8,11" segmenti="2,0,2,2;6,0,6,7" titolo="I quartili $Q_1$ e $Q_3$ sono ai ranghi $2$ e $6$. La mediana usa i ranghi $4$ e $5$."}

Qui un solo dato è strettamente inferiore a $Q_1$, mentre tre dati sono minori o uguali. Per interpretare un quartile si deve distinguere fra valori uguali alla soglia e valori strettamente sotto. Cambiando $11$ in $20$ si sposta il massimo e si allunga il campo di variazione. Le posizioni dei quartili e dei due valori centrali restano occupate dagli stessi dati.
:::
:::esempio{titolo="Stessi estremi, diversa dispersione centrale"}
I due elenchi $1,3,4,5,6,8$ e $1,2,3,6,7,8$ hanno entrambi campo di variazione $8-1=7$ e mediana $\dfrac{4+5}{2}=\dfrac{3+6}{2}=4{,}5$. I ranghi dei quartili sono il secondo e il quinto. Nel primo elenco la distanza interquartile è $6-3=3$, nel secondo $7-2=5$. Nel disegno la scatola va da $Q_1$ a $Q_3$, la linea interna indica la mediana e i segmenti arrivano agli estremi.

::grafico{xmin=-0.4 xmax=9.5 ymin=-0.35 ymax=3.05 nomi="x," poligoni="3,1.78 6,1.78 6,2.22 3,2.22;2,0.78 7,0.78 7,1.22 2,1.22" linee="1,2 3,2;6,2 8,2;1,1 2,1;7,1 8,1;1,1.81 1,2.19;8,1.81 8,2.19;1,0.81 1,1.19;8,0.81 8,1.19;4.5,0.78 4.5,1.22;4.5,1.78 4.5,2.22" etichette="0.38,2.15,A;0.38,1.15,B" titolo="Le scatole hanno ampiezza diversa pur condividendo mediana ed estremi"}
:::

:::esempio{titolo="La posizione si trova anche senza espandere i dati"}
In questa tabella si contano nove osservazioni. I tre ranghi sono $3$, $5$ e $7$. La cumulata arriva a $5$ già al valore $2$, che copre le posizioni dalla seconda alla quinta. Perciò $Q_1=Q_2=2$. Il rango $7$ cade nel blocco del valore $8$, che comincia subito dopo la cumulata $6$. Il terzo quartile vale dunque $8$.

| Valore | Frequenza | Cumulata |
|---|---:|---:|
| $1$ | $1$ | $1$ |
| $2$ | $4$ | $5$ |
| $5$ | $1$ | $6$ |
| $8$ | $3$ | $9$ |
:::

## Moda e significato dell'indice

:::definizione{#moda titolo="La modalità più frequente"}
Una **moda** è una modalità con frequenza massima. Più valori possono condividere il massimo. Per le linee di autobus $A$, $B$ e $C$, con $5$, $7$ e $7$ utilizzi, sono mode $B$ e $C$. Il numero $7$ indica la frequenza di ciascuna. La moda è definita anche per categorie senza ordine.
:::

:::osservazione
Se una misura è stata raggruppata in classi, si può indicare la classe con il conteggio più alto. Per classi di ampiezza diversa, la barra più alta indica la densità maggiore e può appartenere a una classe con meno osservazioni. Senza i singoli valori non si sa quale misura esatta sia comparsa più volte.
:::

## Varianza descrittiva

::::teorema{#varianza titolo="Quadrati degli scarti e frequenze"}
Il **campo di variazione** è il massimo meno il minimo. La **varianza descrittiva** $\sigma^2$ è la media dei quadrati degli scarti, per $N>0$. Si divide per $N$, il numero di osservazioni che si stanno descrivendo. Per dati raggruppati in valori uguali si può pesare ogni quadrato con la sua frequenza.

$$
\begin{aligned}
\sigma^2&=\frac{1}{N}\sum_{j=1}^N(x_j-\bar x)^2\\[5pt]
&=\frac{\sum_i n_i(v_i-\bar x)^2}{\sum_i n_i}.
\end{aligned}
$$

:::dimostrazione
Ogni occorrenza di $v_i$ contribuisce con lo stesso quadrato, quindi le $n_i$ occorrenze contribuiscono per $n_i(v_i-\bar x)^2$. I quadrati rendono tutti i contributi non negativi. La loro somma è zero solo se ogni scarto è zero, cioè se tutte le osservazioni sono uguali alla media.
:::

La divisione per $N$ si usa anche se i dati descritti provengono da un campione. Il divisore $N-1$ compare in un diverso problema, quando si stima la varianza di una popolazione dai dati campionari. Gli esercizi di questo capitolo chiedono la varianza descrittiva.
::::

:::esempio{titolo="Stessa media e stesso campo, varianza diversa"}
Nei dati $A=(0,0,4,4)$ e $B=(0,2,2,4)$ la media è $2$ e il campo di variazione è $4$. In $A$ tutti i dati distano due unità dalla media. In $B$ due dati coincidono con la media e soltanto due sono agli estremi. Le varianze sono $\sigma_A^2=\dfrac{16}{4}=4$ e $\sigma_B^2=\dfrac{8}{4}=2$. Due distribuzioni con gli stessi estremi possono essere diverse anche nelle loro frequenze interne.

::grafico{xmin=-0.7 xmax=5.2 ymin=-0.25 ymax=5.25 nomi="x," punti="0,3;0,4;4,3;4,4;0,0.9;2,0.9;2,1.9;4,0.9" segmenti="2,0,2,4.65" etichette="0.5,4.2,A;0.5,1.85,B;2.25,4.62,2" titolo="I due gruppi hanno la stessa media. In B due osservazioni hanno scarto zero."}
:::

::::teorema{#secondo-momento titolo="Controllo con la media dei quadrati"}
Sviluppando i quadrati si ottiene anche

$$
\sigma^2=\frac{\sum_i n_i v_i^2}{N}-\bar x^2.
$$

:::dimostrazione
Sviluppando $(v_i-\bar x)^2$ compare il termine $-2v_i\bar x$. Pesandolo per $n_i$ e sommando, esso produce $-2N\bar x^2$, perché $\sum_i n_i v_i=N\bar x$. L'ultimo termine produce $N\bar x^2$, perché le frequenze sommano a $N$. Dividendo per $N$ resta la differenza indicata.
:::
::::

:::esempio{titolo="Controllare la varianza usando una tabella"}
I valori $0$, $2$ e $8$ hanno frequenze $1$, $2$ e $1$. La media è $\dfrac{0+2\cdot2+8}{4}=3$. Con gli scarti pesati, le quantità da sommare sono $9$, $2$ e $25$. La varianza è $\dfrac{36}{4}=9$. La media dei quadrati dei dati è $\dfrac{0+2\cdot4+64}{4}=18$. Togliendo il quadrato della media, $3^2=9$, si ritrova la stessa varianza.

| Valore $v_i$ | Conteggio $n_i$ | $n_i(v_i-3)^2$ |
|---|---:|---:|
| $0$ | $1$ | $9$ |
| $2$ | $2$ | $2$ |
| $8$ | $1$ | $25$ |
:::

:::osservazione
Se tutte le frequenze si moltiplicano per lo stesso numero positivo, le frequenze relative restano uguali. Nella media e nella varianza raddoppiare, per esempio, ciascun conteggio raddoppia numeratori e denominatori. Quindi due gruppi possono avere numerosità diverse e gli stessi indici, se i valori hanno le stesse proporzioni. Per decidere quale gruppo è più disperso bisogna confrontare la distribuzione delle quote, perché il solo numero di dati non determina la dispersione.
:::

## Deviazione standard e cambi di scala

::::teorema{#deviazione titolo="Unità di misura e trasformazioni"}
La **deviazione standard** è $\sigma=\sqrt{\sigma^2}$ ed è espressa nella stessa unità dei dati. La varianza ha quella unità al quadrato. Se si sostituisce ogni $x_j$ con $y_j=ax_j+b$, la media diventa $a\bar x+b$.

$$
\begin{aligned}
y_j-\bar y&=a(x_j-\bar x),\\[5pt]
\sigma_y^2&=a^2\sigma_x^2,\qquad
\sigma_y=|a|\sigma_x.
\end{aligned}
$$

:::dimostrazione
La costante $b$ compare sia nel dato trasformato sia nella sua media, quindi si cancella nello scarto. Il fattore $a$ moltiplica lo scarto e il quadrato dello scarto viene moltiplicato per $a^2$. La media dei quadrati segue lo stesso fattore. Estraendo la radice, $\sqrt{a^2}=|a|$.
:::
::::

:::esempio{titolo="Correggere lo zero o cambiare unità"}
Le lunghezze $2,4,6$ centimetri hanno media $4$ e varianza $\dfrac{8}{3}$ centimetri quadrati. In millimetri la media è $40$ e la varianza è $\dfrac{800}{3}$ millimetri quadrati. Il cambio d'unità ha moltiplicato le distanze per dieci. Se in una taratura si aggiungono poi $3$ millimetri a ogni misura, la nuova media è $43$ e le distanze dal centro non cambiano.

::grafico{xmin=-2 xmax=70 ymin=-0.3 ymax=2.8 nomi="x," punti="20,1;40,1;60,1;23,2;43,2;63,2" linee="20,1 60,1;23,2 63,2" etichette="5,1.17,A;5,2.17,B" titolo="Le misure A in millimetri e le misure B corrette di 3 millimetri conservano gli scarti dalle rispettive medie"}
:::

:::attenzione
Una trasformazione di scala riguarda tutti i dati. Per esempio, per $4,4,4,4$ la varianza è zero. Se si raddoppia soltanto l'ultima osservazione, il nuovo centro è $5$ e la varianza diventa $\dfrac{1+1+1+9}{4}=3$. Raddoppiando invece tutte le osservazioni si ottengono quattro $8$ e la varianza rimane zero. Prima di applicare la regola del fattore quadrato occorre capire a quali osservazioni si riferisce la modifica.
:::

## Che cosa si perde raggruppando i valori

:::osservazione{#riepilogo titolo="Stimare con i punti medi delle classi"}
Gli elenchi $1,2,6,7$ e $3,3,5,5$ forniscono entrambi due osservazioni in $[0,4)$ e due in $[4,8)$. La medesima tabella per classi darebbe lo stesso istogramma. In realtà la media è $4$ in entrambi, ma le varianze sono $\dfrac{26}{4}$ e $1$. Gli scarti al quadrato dipendono dai valori all'interno delle classi.

::grafico{xmin=-0.7 xmax=9.0 ymin=-0.35 ymax=5.1 nomi="x," punti="1,3;2,3;6,3;7,3;3,0.9;3,1.9;5,0.9;5,1.9" segmenti="4,0,4,4.7" etichette="0.45,3.5,A;0.45,1.6,B;4.24,4.45,4" titolo="Entrambe le distribuzioni hanno due osservazioni per classe, con distanze dal centro diverse"}

Se si dispone soltanto della tabella, si possono usare i punti medi $2$ e $6$ come valori rappresentativi. Questo equivale a calcolare gli indici per $2,2,6,6$, che ha media $4$ e varianza $4$. Si ottiene un'approssimazione, perché la tabella non permette di ricostruire i singoli dati. Anche la media potrebbe cambiare a parità di istogramma. Per esempio le misure $3,3,7,7$ ricadono ancora due per classe e hanno media $5$. Prima di scegliere un indice conviene controllare se i dati disponibili sono individuali, raggruppati per valori uguali oppure raccolti in classi.
:::
