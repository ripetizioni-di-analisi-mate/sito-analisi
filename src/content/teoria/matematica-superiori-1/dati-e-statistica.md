---
titolo: "Dati e statistica descrittiva"
sommario: "Rilevazione dei dati, frequenze, lettura di grafici e istogrammi, media, mediana, moda e dispersione."
---

## Che cosa si osserva

:::definizione{#dati titolo="Popolazione, campione e carattere"}
La **popolazione** è l'insieme delle unità a cui si riferisce l'indagine. Quando si studia soltanto una parte della popolazione, le unità osservate costituiscono il **campione**. Il **carattere**, o variabile, è la proprietà misurata o registrata per ciascuna unità. Le **modalità** sono i valori o le categorie che il carattere può assumere.

Per studiare il tragitto casa-scuola degli iscritti a un istituto nel mese di ottobre, l'unità può essere lo studente. Si viene allora a sapere, per ogni studente osservato, il mezzo abituale, il numero di cambi e il tempo di viaggio in minuti. Se si misurano i tempi ogni mattina, lo stesso studente fornisce più osservazioni. Si deve specificare se il conteggio finale si riferisce ai viaggi oppure agli studenti.
:::

:::esempio{titolo="La misura e la registrazione"}
Il mezzo abituale è **qualitativo nominale**, perché bici, autobus e treno sono categorie senza ordine. Un giudizio espresso come scarso, adeguato e buono è qualitativo ordinale. Il numero di cambi è quantitativo discreto e assume valori interi. La durata è quantitativa continua, perché può assumere qualsiasi valore positivo in un intervallo, anche se il questionario la fa registrare al minuto intero. Il tempo di $12$ minuti registrato al minuto più vicino può corrispondere a una durata da $11{,}5$ minuti inclusi a $12{,}5$ minuti esclusi, con arrotondamento dei mezzi verso l'alto.
:::

:::attenzione
Assegnare i codici $1$, $2$ e $3$ a tre mezzi facilita la registrazione. Il codice $3$ si potrebbe però scambiare con $1$ senza cambiare alcun viaggio. Una media di quei codici dipenderebbe dalla codifica. Restano significativi i conteggi o le quote per ciascun mezzo.
:::

## Frequenze e denominatori

:::definizione{#frequenze titolo="Frequenze assolute e relative"}
La **frequenza assoluta** $n_i$ conta quante volte compare la modalità $i$. La **frequenza relativa** divide quel conteggio per il totale $N>0$. Le modalità devono essere disgiunte ed esaustive per sommare ogni osservazione una sola volta.

$$
N=\sum_i n_i,\qquad
f_i=\frac{n_i}{N},\qquad
\sum_i f_i=\frac{\sum_i n_i}{N}=1.
$$

Per ottenere la percentuale si calcola $100f_i$ e si aggiunge $\%$. Se il totale è zero, non si può calcolare alcuna frequenza relativa. La cumulata ha senso quando i valori hanno un ordine. Si può chiedere quanti studenti abbiano letto al massimo due libri oppure quanti giudizi siano almeno adeguati. Per i mezzi di trasporto, mettere prima la bici o l'autobus cambierebbe arbitrariamente i risultati della cumulata.
:::

:::esempio{titolo="Lettura di una tabella di frequenze"}
Venti studenti hanno registrato il numero di libri letti in un mese. La riga dei conteggi dice che $8$ studenti hanno letto esattamente due libri. La riga cumulata dice che $16$ ne hanno letti al massimo due. La quota corrispondente è $\dfrac{16}{20}=80\%$.

| Libri letti | $0$ | $1$ | $2$ | $3$ |
|---|---:|---:|---:|---:|
| Frequenza assoluta | $3$ | $5$ | $8$ | $4$ |
| Frequenza relativa | $15\%$ | $25\%$ | $40\%$ | $20\%$ |
| Cumulata assoluta | $3$ | $8$ | $16$ | $20$ |

::grafico{assi=0 xmin=-1.2 xmax=4.15 ymin=-1.3 ymax=10 vettori="-0.62,0,3.95,0;-0.62,0,-0.62,9.5" poligoni="-0.19,0 0.19,0 0.19,3 -0.19,3;0.81,0 1.19,0 1.19,5 0.81,5;1.81,0 2.19,0 2.19,8 1.81,8;2.81,0 3.19,0 3.19,4 2.81,4" etichette="-0.10,3.55,3;0.9,5.55,5;1.9,8.55,8;2.9,4.55,4;-0.1,-0.75,0;0.9,-0.75,1;1.9,-0.75,2;2.9,-0.75,3;3.78,-0.75,x;-0.93,9.45,n" titolo="$x$ è il numero di libri, $n$ il numero di studenti con quel valore"}

La cumulata cresce aggiungendo ogni volta il conteggio della colonna successiva. Al valore $2$ si aggiungono $8$ osservazioni alla cumulata precedente, che era $8$. Se si avesse soltanto la riga cumulata, si ritroverebbe la frequenza di $2$ con la differenza $16-8=8$. L'ultima cumulata coincide con $N$.

::grafico{xmin=-0.55 xmax=4.2 ymin=-0.65 ymax=22 nomi="x,N(x)" linee="-0.48,0 0,0;0,3 1,3;1,8 2,8;2,16 3,16;3,20 3.9,20" punti="0,0,vuoto;0,3,pieno;1,3,vuoto;1,8,pieno;2,8,vuoto;2,16,pieno;3,16,vuoto;3,20,pieno" etichette="0.23,4.3,3;1.25,9.4,8;2.24,17.4,16;3.30,20.7,20" titolo="Il salto in $x=2$ aggiunge gli studenti con esattamente due libri"}
:::

:::osservazione
Fra $18$ studenti di un turno, $9$ usano la bici. Nell'altro turno, i ciclisti sono $12$ su $30$. Il secondo turno ha più ciclisti, ma una quota più bassa, perché $\dfrac9{18}=\dfrac12$ e $\dfrac{12}{30}=\dfrac25$. Per confrontare quanto il mezzo è diffuso nei due turni occorre usare le quote calcolate sui rispettivi totali.
:::

## Diagrammi a barre, settori e scale

:::osservazione{#grafici titolo="Leggere l'asse verticale"}
In un **diagramma a barre** le modalità hanno barre separate. Il conteggio o la quota si legge dall'asse verticale. Controllare il nome dell'asse, l'unità e la distanza numerica fra due tacche evita di confondere un valore della variabile con la frequenza con cui è stato osservato.
:::

:::esempio{titolo="Gli stessi dati con due scale"}
Una biblioteca presta $48$ libri in una settimana e $54$ in quella successiva. Nel primo grafico, $n$ è il conteggio dei prestiti e la scala parte da zero. Il confronto dà $54-48=6$ prestiti in più e un rapporto $\dfrac{54}{48}=\dfrac98$.

::grafico{xmin=-0.3 xmax=3.3 ymin=0 ymax=60 nomi="s,n" poligoni="0.73,0 1.27,0 1.27,48 0.73,48;1.73,0 2.27,0 2.27,54 1.73,54" etichette="0.87,51,48;1.87,57,54" titolo="Conteggio dei prestiti per settimana $s$, con origine a zero"}

Facendo partire l'asse da $45$, si vedono soltanto gli ultimi $3$ e $9$ prestiti nelle due barre. La seconda parte visibile è tre volte più alta, mentre il rapporto dei conteggi continua a essere $\dfrac98$. Il secondo grafico rende più evidente lo scarto perché riserva più spazio a un intervallo più piccolo.

::grafico{xmin=-0.3 xmax=3.3 ymin=45 ymax=56.5 nomi="s,n" poligoni="0.73,45 1.27,45 1.27,48 0.73,48;1.73,45 2.27,45 2.27,54 1.73,54" etichette="0.87,48.55,48;1.87,54.65,54" titolo="Lo stesso conteggio con origine visibile a 45 prestiti"}
:::

:::esempio{titolo="Dal conteggio all'angolo"}
Quaranta studenti scelgono una delle tre attività $A$, $B$ e $C$, con $20$, $10$ e $10$ preferenze. Un **diagramma circolare** assegna a ogni modalità l'angolo $\alpha_i=360^\circ f_i$. Poiché $A$ rappresenta metà delle risposte, occupa $180^\circ$. Le altre due attività contano un quarto ciascuna, quindi occupano $90^\circ$ a testa. L'intero giro vale $360^\circ$, la somma dei tre angoli.

::grafico{assi=0 uguale=1 xmin=-1.3 xmax=1.3 ymin=-1.22 ymax=1.22 curve="cos(t),sin(t),0,6.2832" poligoni="-1,0 -0.966,0.259 -0.866,0.5 -0.707,0.707 -0.5,0.866 -0.259,0.966 0,1 0.259,0.966 0.5,0.866 0.707,0.707 0.866,0.5 0.966,0.259 1,0" linee="-1,0 1,0;0,0 0,-1" etichette="-0.25,0.43,A 180°;-0.65,-0.45,B 90°;0.18,-0.45,C 90°" titolo="L'angolo di ciascun settore è proporzionale alle preferenze"}
:::

## Classi e istogrammi

:::definizione{#istogrammi titolo="Perché conta l'area del rettangolo"}
Un dato continuo si può raggruppare in **classi**. L'intervallo $[a_i,b_i)$ include $a_i$ ed esclude $b_i$. La convenzione assegna ogni valore di confine a una sola classe. In un **istogramma** la base del rettangolo è la sua ampiezza $h_i=b_i-a_i$. Per rappresentare $n_i$ osservazioni con l'area, l'altezza deve essere la **densità di frequenza assoluta** $d_i$.

$$
h_i d_i=n_i,\qquad d_i=\frac{n_i}{h_i}.
$$

Se la base si misura in minuti, la densità si misura in osservazioni per minuto. Il prodotto restituisce un conteggio. Si può costruire anche un istogramma a densità relativa, usando $f_i/h_i$ come altezza. In quel caso la somma delle aree vale uno.
:::

:::esempio{titolo="La barra più alta e la classe più numerosa"}
Si registrano $30$ tempi di attesa, in minuti. Il tempo $3$ cade nella seconda classe. Dalla tabella si ricavano altezze $12/3=4$ e $18/6=3$.

| Durata (min) | Ampiezza (min) | Attese | Densità (attese/min) |
|---|---:|---:|---:|
| $[0,3)$ | $3$ | $12$ | $4$ |
| $[3,9)$ | $6$ | $18$ | $3$ |

::grafico{xmin=-0.8 xmax=10.2 ymin=-0.35 ymax=5.45 nomi="t,d" poligoni="0,0 3,0 3,4 0,4;3,0 9,0 9,3 3,3" linee="0,4 3,4 3,0;3,3 9,3 9,0" etichette="0.74,2.18,12 attese;4.55,1.48,18 attese" titolo="$t$ è in minuti e $d$ in attese al minuto"}

Il rettangolo di sinistra è più alto ma ha area $3\cdot4=12$. Quello di destra ha area $6\cdot3=18$, dunque rappresenta più attese. Usando i conteggi come altezze si disegnerebbero invece aree $3\cdot12=36$ e $6\cdot18=108$. Il rapporto visivo sarebbe $108/36=3$, mentre quello corretto è $18/12=1{,}5$. Con basi uguali il confronto fra altezze e quello fra aree darebbero lo stesso rapporto.
:::

:::osservazione{titolo="Soglie dentro e fuori le classi"}
Dalla tabella si sa che esattamente $12$ attese durano meno di tre minuti. Per «meno di cinque minuti» la soglia attraversa la seconda classe. In assenza dei valori individuali il conteggio può andare da $12$ a $30$. L'istogramma raggruppa le osservazioni e il rettangolo uniforme rappresenta una densità della classe nel suo complesso.

Anche la somma delle attese dipende dai dati all'interno delle classi. I gruppi di valori $1,1,4,4$ e $2,2,8,8$ darebbero lo stesso istogramma con le due classi della tabella, perché ciascuna conterrebbe due attese. Le medie sarebbero però $\dfrac{10}{4}$ e $\dfrac{20}{4}$ minuti. Se sono rimaste soltanto le frequenze delle classi, il valore esatto della media può essere perduto.
:::

## Media aritmetica e media pesata

::::teorema{#media titolo="Dalla somma dei valori alla media"}
Per $N>0$ osservazioni numeriche $x_1,\ldots,x_N$, la **media aritmetica** $\bar x$ è la somma divisa per $N$. Se una tabella assegna a ogni valore distinto $v_i$ una frequenza $n_i$, si può usare il prodotto $v_i n_i$ al posto di elencare tutte le ripetizioni.

$$
\bar x=\frac{x_1+\cdots+x_N}{N}
=\frac{\sum_i v_i n_i}{\sum_i n_i}.
$$

:::dimostrazione
Raggruppando i termini uguali nella somma, il valore $v_i$ compare in $n_i$ addendi, perciò contribuisce per $v_i n_i$. Il totale degli addendi è $\sum_i n_i$. Il numeratore e il denominatore restano dunque uguali a quelli calcolati con l'elenco completo.
:::
::::

:::esempio{titolo="La media come punto di equilibrio"}
I dati $1,1,4,4,4,7$ hanno media $\dfrac{1\cdot2+4\cdot3+7}{6}=\dfrac72$. Il risultato sta fra il minimo e il massimo, benché non compaia fra le osservazioni. Se i valori sono posizioni sulla retta, il contributo a sinistra di $3{,}5$ è $2\cdot2{,}5=5$. A destra i contributi sono $3\cdot0{,}5$ e $3{,}5$, con la stessa somma.

::grafico{xmin=-0.7 xmax=8.2 ymin=-0.4 ymax=4.2 nomi="x," punti="1,1;1,2;4,1;4,2;4,3;7,1" segmenti="3.5,0,3.5,3.35" etichette="2.55,3.55,3,5" titolo="Ogni punto rappresenta un'osservazione. Gli scarti a destra e a sinistra di $3{,}5$ si bilanciano."}
:::

:::esempio{titolo="Riunire due gruppi"}
Otto ragazzi impiegano in media $12$ minuti per arrivare al campo sportivo, altri dodici ne impiegano in media $7$. I due gruppi sono disgiunti. Le durate sommate sono $8\cdot12=96$ e $12\cdot7=84$ minuti, quindi la media di tutti è $\dfrac{96+84}{20}=9$ minuti. La media semplice delle due medie attribuirebbe a ciascun gruppo lo stesso peso, mentre il secondo comprende più osservazioni.
:::

:::osservazione
L'identità $N\bar x=\sum_i x_i$ permette di tornare dalla media alla somma quando manca un dato. Se si aggiunge $b$ a ciascun dato, la somma cresce di $Nb$ e la media cresce di $b$. Se si moltiplica ogni valore per $a$, anche la somma è moltiplicata per $a$ e la media lo è a sua volta.

Se ogni dato è fra $m$ e $M$, la somma è fra $Nm$ e $NM$. Dividendo per $N>0$ si ottiene $m\le \bar x\le M$. La media resta quindi nell'intervallo dei dati. Questo controllo permette di scartare un risultato impossibile quando si sbaglia denominatore.
:::

## Mediana e moda

:::definizione{#mediana-moda titolo="Posizione centrale e frequenza massima"}
Per trovare la **mediana** di dati numerici, si ordinano i valori contando anche le ripetizioni. Se $N=2k+1$, si prende il valore in posizione $k+1$. Se $N=2k>0$, si fa la media dei valori nelle posizioni $k$ e $k+1$. In una tabella di frequenze si possono trovare quelle posizioni usando la cumulata.

La **moda** è una modalità di frequenza massima. Più modalità sono mode quando condividono il massimo. Si può trovare una moda anche per categorie qualitative, perché basta confrontare i conteggi.
:::

:::esempio{titolo="La mediana fra due valori e due mode"}
I dati $2,2,4,7,7,9$ hanno sei osservazioni. La cumulata passa da $2$ a $3$ in corrispondenza di $4$, quindi $4$ è il terzo valore. Il quarto è $7$, poiché il suo blocco occupa le posizioni dalla quarta alla quinta. La mediana è $\dfrac{4+7}{2}=5{,}5$. La frequenza massima è due, raggiunta dalle modalità $2$ e $7$.

::grafico{xmin=-0.7 xmax=10.2 ymin=-0.4 ymax=3.4 nomi="x," punti="2,1;2,2;4,1;7,1;7,2;9,1" segmenti="5.5,0,5.5,2.2" etichette="4.64,2.43,5,5" titolo="I due valori centrali sono $4$ e $7$, ai lati della mediana"}

Sostituendo il valore $9$ con $21$, i due ordini centrali e le due frequenze massime restano uguali. La media invece cresce di $\dfrac{21-9}{6}=2$. Un valore estremo può quindi cambiare la media molto più della mediana quando la sua posizione nell'ordine resta la stessa.
:::

## Dispersione ed estremi

:::definizione{#dispersione titolo="Campo di variazione"}
Il **campo di variazione** è il massimo meno il minimo. Si esprime nella stessa unità dei dati. Dipende da due osservazioni, quindi risponde subito allo spostamento di un estremo e può rimanere uguale quando cambiano le osservazioni interne.
:::

:::esempio{titolo="Stessa media, diversa dispersione"}
I dati $6,7,8$ e $2,7,12$ hanno entrambi media e mediana $7$. Il primo gruppo è contenuto nell'intervallo di ampiezza $8-6=2$, il secondo occupa l'intervallo di ampiezza $12-2=10$. Nel grafico le due righe usano lo stesso asse dei valori, così le distanze sono confrontabili.

::grafico{xmin=-0.8 xmax=13.2 ymin=-0.35 ymax=3.3 nomi="x," punti="6,2;7,2;8,2;2,1;7,1;12,1" linee="6,2 8,2;2,1 12,1" segmenti="7,0,7,2.6" etichette="2.55,2.2,primo;2.55,1.2,secondo;6.47,2.77,7" titolo="La linea tratteggiata è lo stesso centro per due ampiezze diverse"}

Viceversa, i dati $2,3,3,3,12$ e $2,7,10,11,12$ hanno lo stesso campo di variazione $10$, ma mediane $3$ e $10$. Per confrontare due gruppi è quindi opportuno affiancare al centro un indice di dispersione e, quando è possibile, guardare i dati o il grafico.
:::

## Come si raccolgono i dati

:::osservazione{#rilevazione titolo="Chi può entrare nel campione"}
Un sondaggio sui tragitti condotto soltanto alla rastrelliera della scuola raggiunge più facilmente chi usa la bici. Aumentare il numero di interviste nello stesso punto lascia inalterata quella preferenza nella selezione. Per descrivere tutti gli iscritti si può selezionare un insieme di studenti dall'elenco delle classi e contattare anche chi raggiunge la scuola in altri modi.

Il momento della rilevazione può influire sul dato. Se si vuole stimare il consueto numero di studenti che vanno a piedi, un giorno di pioggia descrive i tragitti di quel giorno. Rilevare più giorni con condizioni diverse aiuta a rispondere alla domanda sul comportamento abituale. Anche la domanda deve lasciare scegliere fra tutte le risposte pertinenti, per esempio distinguendo «solo autobus» da «autobus e treno».
:::

:::esempio{titolo="Risposte valide e risposte mancanti"}
Dei $50$ studenti invitati a un sondaggio, $32$ rispondono. Fra chi risponde, $16$ dichiarano di andare a piedi. Il $50\%$ è quindi la quota fra le risposte, perché il denominatore è $32$. Fra tutti gli invitati, almeno $16$ e al massimo $16+18=34$ vanno a piedi. Gli estremi $32\%$ e $68\%$ contemplano rispettivamente nessuno e tutti gli assenti fra chi va a piedi.

::grafico{assi=0 xmin=-1.0 xmax=51.0 ymin=-0.35 ymax=3.65 linee="0,0 50,0 50,2 0,2 0,0;16,0 16,2;32,0 32,2" poligoni="0,0 16,0 16,2 0,2" etichette="3.4,0.95,16 a piedi;18.0,0.95,16 altri mezzi;34.1,0.97,18 mancanti;1.1,2.65,32 risposte;34.1,2.65,non rispondenti" titolo="Solo per chi ha risposto si conosce il mezzo di trasporto"}
:::

:::osservazione{#controlli titolo="A quale domanda può rispondere il riepilogo"}
Se si devono predisporre i posti su un autobus, conta il numero di studenti che lo prendono. Per confrontarne la diffusione in due istituti di dimensioni diverse si usano le quote. Per descrivere una durata tipica, si può confrontare la mediana con la media e osservare se pochi tragitti molto lunghi spiegano la differenza. Il denominatore, l'unità e il modo in cui sono state raccolte le osservazioni vanno letti insieme al risultato.
:::
