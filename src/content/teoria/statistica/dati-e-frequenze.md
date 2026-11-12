---
titolo: "Dati, frequenze e grafici"
sommario: "Dalla rilevazione delle unità statistiche alla lettura di frequenze, tabelle, distribuzioni empiriche e istogrammi."
---

## Popolazione, unità e campione

:::definizione{#popolazione titolo="Popolazione e campione"}
La **popolazione** è l'insieme delle unità a cui si riferisce la domanda di studio. L'**unità statistica** è ciascun elemento di tale insieme. In una popolazione finita si indica con $N$ il numero di unità. Un censimento tenta di rilevarle tutte, mentre una rilevazione campionaria ne osserva una parte. Il **campione** è l'insieme delle unità selezionate per la rilevazione e la sua numerosità si indica con $n$.

Il criterio di appartenenza alla popolazione comprende le condizioni di luogo, tempo ed eleggibilità necessarie per riconoscere ciascuna unità. Se l'indagine riguarda il tragitto degli studenti di un ateneo in un dato semestre, l'unità è lo studente iscritto in quel semestre. Il totale $N$ si ricava dall'elenco degli iscritti, mentre $n$ è il numero degli studenti selezionati.
:::

:::esempio{titolo="Un'unità e più misure"}
Un laboratorio analizza una proprietà di un lotto di 300 piastrelle. Su 25 piastrelle selezionate si rilevano la massa e lo spessore in tre punti. La popolazione è il lotto e l'unità è la piastrella. La tabella con una riga per unità ha 25 righe e quattro colonne di misure. Le 75 misure di spessore appartengono a 25 piastrelle. Un'analisi dello spessore medio per piastrella usa quindi le 25 medie individuali, mentre un'analisi della variazione dello spessore all'interno di una piastrella usa i tre valori associati a ciascuna unità.
:::

:::definizione{#parametro-statistica titolo="Parametro e statistica"}
Un **parametro** è una grandezza che descrive la popolazione o il modello che la rappresenta. Una **statistica campionaria** è una funzione delle osservazioni campionarie. La proporzione di tutte le piastrelle fuori tolleranza è un parametro del lotto. La proporzione di piastrelle fuori tolleranza tra quelle selezionate è una statistica. Quando si ripete la selezione sullo stesso lotto, il parametro rimane fisso, mentre il valore della statistica può cambiare.
:::

:::osservazione
L'identificativo di un'unità permette di collegare le sue misure. Per esempio, la misura di una massa e quella di uno spessore formano una coppia quando provengono dalla stessa piastrella. Ordinare le due colonne separatamente conserva i conteggi di ciascuna grandezza, ma modifica le coppie. Per studiare la relazione tra due caratteri, l'associazione tra le osservazioni deve quindi essere conservata.
:::

## Caratteri e scale di misura

:::definizione{#caratteri titolo="Caratteri qualitativi e quantitativi"}
Un **carattere** è la proprietà rilevata su ciascuna unità. Una modalità è un valore o una categoria che il carattere può assumere.

- Un carattere è qualitativo nominale quando le modalità sono categorie prive di ordine intrinseco. Il mezzo principale usato per arrivare all'università è un esempio.
- Un carattere è qualitativo ordinale quando le categorie sono ordinate. Le modalità insufficiente, adeguato e ottimo esprimono livelli crescenti, mentre la distanza tra due livelli rimane indefinita.
- Un carattere quantitativo è discreto quando i valori possibili costituiscono un insieme finito o numerabile. Il numero di assenze durante un semestre assume valori interi.
- Un carattere quantitativo è continuo quando il modello ammette ogni valore di un intervallo. La durata di un tragitto è continua anche se viene registrata arrotondando al minuto.

La distinzione determina quali elaborazioni hanno significato. Per il mezzo di trasporto si confrontano i conteggi. Per i giudizi ordinati si può contare quanti sono almeno adeguati. Per la durata si può calcolare la differenza, in minuti, tra due osservazioni.
:::

:::definizione{#scale-di-misura titolo="Scale a intervalli e a rapporti"}
In una **scala a intervalli** le differenze esprimono distanze confrontabili e l'origine è convenzionale. Una trasformazione di unità o di origine ha la forma $y=ax+b$ con $a>0$. La differenza diventa $y_2-y_1=a(x_2-x_1)$, poiché il termine $b$ si cancella. Un rapporto tra i valori, invece, può cambiare al variare dell'origine.

In una **scala a rapporti** lo zero esprime l'assenza della quantità misurata e il cambio di unità ha la forma $y=ax$ con $a>0$. Se $x_1\ne 0$, allora $\dfrac{y_2}{y_1}=\dfrac{ax_2}{ax_1}=\dfrac{x_2}{x_1}$. Una durata di $30\,\mathrm{min}$ è quindi il doppio di una di $15\,\mathrm{min}$ anche quando si esprimono entrambe in secondi.
:::

:::attenzione
La codifica numerica di una categoria può cambiare senza alterare i dati qualitativi. Per i mezzi bici e autobus, le codifiche $(1,2)$ e $(10,20)$ danno medie aritmetiche diverse a parità di risposte. È il conteggio delle categorie a descrivere la scelta del mezzo. Analogamente, il rapporto tra $20\,^\circ\mathrm{C}$ e $10\,^\circ\mathrm{C}$ cambia dopo la conversione in kelvin. La differenza di temperatura ha invece lo stesso valore numerico nelle due unità.
:::

## Frequenze assolute e relative

:::definizione{#frequenze titolo="Distribuzione di frequenza"}
Siano $x_1,\ldots,x_k$ le modalità di un carattere e siano disponibili $n>0$ osservazioni. La **frequenza assoluta** $n_i$ è il numero di osservazioni della modalità $x_i$. La **frequenza relativa** $f_i$ è la quota di osservazioni che le appartiene e si calcola dividendo il conteggio per il totale delle osservazioni:

$$
f_i=\frac{n_i}{n}.
$$

La frequenza percentuale è $100 f_i\,\%$. Se le modalità sono disgiunte ed esauriscono le osservazioni, ogni dato compare una volta nei conteggi. Perciò

$$
\sum_{i=1}^k n_i=n,\qquad
\sum_{i=1}^k f_i=\frac{\sum_{i=1}^k n_i}{n}=1.
$$

La somma dei conteggi consente di ricavare una frequenza assoluta mancante. Per esempio, in una tabella con 40 osservazioni e due modalità che contano 13 e 17 casi, la terza modalità conta $40-13-17=10$ casi.

::grafico{assi=0 xmin=-0.08 xmax=3.95 ymin=-2.2 ymax=19.5 poligoni="0.69,0 1.31,0 1.31,13 0.69,13;1.69,0 2.31,0 2.31,17 1.69,17;2.69,0 3.31,0 3.31,10 2.69,10" vettori="0.33,0,3.7,0;0.33,0,0.33,18.1" etichette="0.41,18.65,conteggio;0.94,13.55,13;1.94,17.55,17;2.94,10.55,10;0.94,-1.23,A;1.94,-1.23,B;2.94,-1.23,C" titolo="Diagramma a barre delle tre modalità. La separazione grafica fra A, B e C distingue le categorie. Le altezze rappresentano i conteggi."}
:::

::::teorema{#frequenze-aggregate titolo="Frequenza relativa di gruppi riuniti"}
Siano dati $g$ gruppi disgiunti di numerosità $m_1,\ldots,m_g$, tutte positive. Si osservi lo stesso carattere con le stesse modalità in ciascun gruppo. Se $q_r$ è la frequenza relativa di una modalità nel gruppo $r$, allora la frequenza della modalità nei gruppi riuniti è

$$
f=\sum_{r=1}^g w_rq_r,\qquad
w_r=\frac{m_r}{\sum_{j=1}^g m_j}.
$$

I pesi $w_r$ sommano a 1. La formula permette quindi di ricostruire la frequenza complessiva dalle quote di gruppo e dalle rispettive numerosità.

:::dimostrazione
Il conteggio nel gruppo $r$ è $m_rq_r$, poiché $q_r$ è il rapporto fra il conteggio e $m_r$. Ogni unità appartiene a un solo gruppo, quindi il conteggio complessivo è $\sum_{r=1}^g m_rq_r$. Dividendo per la numerosità totale $\sum_{j=1}^g m_j$, si ottiene la somma pesata. Quando i gruppi sono tutti della stessa ampiezza, $w_r=\dfrac1g$ per ogni $r$ e la somma pesata coincide con la media aritmetica delle quote.
:::
::::

:::esempio{titolo="Confronto tra gruppi di diversa ampiezza"}
Tra 40 studenti del primo turno, 14 raggiungono la sede in autobus. Tra 60 studenti del secondo turno, quelli che usano l'autobus sono 18. Il secondo turno ha quattro utenti in più, mentre il primo ha una quota più alta, poiché $\dfrac{14}{40}=0{,}35$ e $\dfrac{18}{60}=0{,}30$. Le due informazioni rispondono a domande diverse. Il conteggio serve a stimare quanti posti devono essere disponibili. La percentuale descrive quanto è comune la scelta dell'autobus in ciascun turno.

Unendo i due turni si contano $14+18=32$ utenti su $40+60=100$ studenti, quindi la frequenza relativa complessiva è $0{,}32$. Il primo turno conta 40 studenti e il secondo 60, quindi nel totale le due percentuali contribuiscono con pesi $0{,}40$ e $0{,}60$.
:::

:::osservazione
Le percentuali pubblicate possono essere arrotondate. Se una categoria vale il $33\%$ dopo arrotondamento all'intero in un gruppo di 200 unità, il conteggio può essere 65 o 66 con la convenzione usuale che arrotonda i mezzi verso l'alto. Il conteggio 65 corrisponde al $32{,}5\%$, mentre 66 corrisponde al $33\%$. Un totale percentuale di $99\%$ o $101\%$ può quindi essere compatibile con una tabella completa.
:::

## Frequenze cumulate e ripartizione empirica

:::definizione{#cumulate titolo="Frequenze cumulate"}
Supponiamo che le modalità soddisfino $x_1<\cdots<x_k$. La cumulata assoluta $N_i$ conta le osservazioni al più pari a $x_i$. La cumulata relativa $F_i$ esprime la stessa informazione come proporzione:

$$
N_i=\sum_{j=1}^i n_j,\qquad F_i=\frac{N_i}{n}.
$$

Per convenzione si pone $N_0=F_0=0$. Poiché $N_i=N_{i-1}+n_i$, la frequenza della singola modalità si recupera con $n_i=N_i-N_{i-1}$. Analogamente, $f_i=F_i-F_{i-1}$. Il carattere deve ammettere un ordine significativo. Per livelli di soddisfazione ordinati si può quindi determinare la quota fino al livello adeguato. Cambiare l'ordine alfabetico dei colori, invece, cambierebbe una cumulata priva di significato statistico.
:::

:::definizione{#ripartizione-empirica titolo="Funzione di ripartizione empirica"}
Siano $x_1^{\mathrm{oss}},\ldots,x_n^{\mathrm{oss}}$ le singole osservazioni numeriche, comprese le ripetizioni. La **funzione di ripartizione empirica** $F_n(x)$ è la quota di osservazioni minori o uguali alla soglia reale $x$:

$$
F_n(x)=\frac{1}{n}\sum_{j=1}^n
\mathbf{1}_{\{x_j^{\mathrm{oss}}\le x\}}.
$$

L'indicatore vale 1 quando l'osservazione soddisfa la disuguaglianza e vale 0 negli altri casi. La funzione è costante tra due valori distinti osservati e, nel punto osservato, assume già il valore dopo il salto. È quindi continua da destra. La grandezza del salto è la frequenza relativa della modalità che si incontra in quel punto.
:::

:::esempio{titolo="Lettura di un gradino e di un intervallo"}
Per i dati $1,2,2,4,6$, fino alla soglia $2$ si contano tre osservazioni, perciò $F_n(2)=\dfrac35$. Nell'intervallo $[2,4)$ la soglia comprende sempre le stesse tre osservazioni. In $4$ si aggiunge una quarta osservazione, quindi $F_n(4)=\dfrac45$.

::grafico{xmin=-1.1 xmax=7.1 ymin=-0.1 ymax=1.16 nomi="x,F_n(x)" linee="-0.5,0 1,0;1,0.2 2,0.2;2,0.6 4,0.6;4,0.8 6,0.8;6,1 6.8,1" punti="1,0,vuoto;1,0.2,pieno;2,0.2,vuoto;2,0.6,pieno;4,0.6,vuoto;4,0.8,pieno;6,0.8,vuoto;6,1,pieno" etichette="-0.63,0.18,0,2;-0.63,0.58,0,6;-0.63,0.78,0,8" titolo="Ripartizione empirica dei cinque dati"}

Per contare le osservazioni in $(2,4]$, si parte da quelle minori o uguali a $4$ e si tolgono quelle minori o uguali a $2$. Si ottiene $F_n(4)-F_n(2)=\dfrac15$. Per contare quelle in $[2,4]$, occorre invece togliere solo le osservazioni strettamente minori di $2$. Il valore immediatamente precedente il salto in $2$, indicato con $F_n(2^-)$, è $\dfrac15$. La frequenza dell'intervallo chiuso è quindi $\dfrac45-\dfrac15=\dfrac35$.
:::

## Raggruppamento in classi

:::definizione{#classi titolo="Classi, ampiezze e punti medi"}
Quando i valori di una misura sono numerosi, si possono raccogliere in intervalli disgiunti. Per una classe $[a_i,b_i)$, l'estremo sinistro $a_i$ è incluso e quello destro $b_i$ è escluso. L'ampiezza è $h_i=b_i-a_i$ e il punto medio è $c_i=\dfrac{a_i+b_i}{2}$. La convenzione sugli estremi assegna ogni osservazione di confine a una sola classe. Se l'ultimo intervallo è chiuso a destra, la tabella lo indica esplicitamente.

Per classi di durata $[0,5)$, $[5,10)$ e $[10,20]$ misurate in minuti, una durata esattamente uguale a $5\,\mathrm{min}$ appartiene alla seconda classe. Una durata di $20\,\mathrm{min}$ appartiene all'ultima. Le ampiezze sono $5$, $5$ e $10\,\mathrm{min}$.
:::

:::esempio{titolo="Che cosa si può recuperare da una tabella"}
Supponiamo che le classi $[0,5)$, $[5,10)$ e $[10,20]$ contengano 8, 12 e 5 tempi di attesa. Dalla tabella si ricava esattamente che $8+12=20$ attese sono strettamente inferiori a $10\,\mathrm{min}$. Una soglia di $8\,\mathrm{min}$ attraversa invece la seconda classe. Sappiamo che le prime otto osservazioni sono sotto la soglia e che le cinque dell'ultima classe sono sopra. Il conteggio strettamente sotto $8\,\mathrm{min}$ è quindi compreso tra 8 e 20. Qualsiasi stima più precisa richiede informazioni sulla distribuzione dei valori all'interno della seconda classe.
:::

:::osservazione
Il punto medio è una scelta per rappresentare il contenuto della classe con un solo valore. Per esempio, assegnare $7{,}5\,\mathrm{min}$ alle dodici attese della classe $[5,10)$ permette di calcolare una media approssimata, come nel capitolo sugli indici descrittivi. La media dei dodici valori osservati può differire da $7{,}5\,\mathrm{min}$ se le attese si concentrano vicino a un estremo. Una classe aperta come $[20,+\infty)$ manca di un estremo finito, quindi il punto medio non è determinato.
:::

## Grafici e densità di frequenza

:::definizione{#istogramma titolo="Istogramma a densità relativa"}
Un **istogramma** rappresenta ciascuna classe di una variabile quantitativa con un rettangolo la cui base è l'intervallo. In un istogramma a densità relativa, l'area del rettangolo è la frequenza relativa $f_i$. Se $h_i>0$ è la sua base, l'altezza $d_i$ è

$$
d_i=\frac{f_i}{h_i},\qquad d_i h_i=f_i.
$$

Se le classi coprono tutte le osservazioni, la somma delle aree vale 1. Con un asse orizzontale in minuti, l'altezza si misura in frequenza relativa per minuto. Se si usa la densità assoluta $\dfrac{n_i}{h_i}$, espressa in osservazioni per minuto, la somma delle aree vale $n$.
:::

:::esempio{titolo="Il rettangolo più alto e la classe più frequente"}
Su 20 attese, 8 cadono in $[0,2)$ minuti e 12 in $[2,8)$ minuti. Le frequenze relative sono rispettivamente $0{,}40$ e $0{,}60$. Dividendo per le ampiezze si ottengono $d_1=0{,}20\,\mathrm{min}^{-1}$ e $d_2=0{,}10\,\mathrm{min}^{-1}$. La prima classe è più concentrata per minuto. La seconda ha base tripla e area maggiore, quindi raccoglie più osservazioni.

::grafico{xmin=-0.99 xmax=8.99 ymin=-0.023 ymax=0.253 nomi="t,d_i" poligoni="0,0 2,0 2,0.2 0,0.2;2,0 8,0 8,0.1 2,0.1" linee="0,0.2 2,0.2 2,0 8,0 8,0.1 2,0.1" etichette="-0.78,0.19,0,20;-0.78,0.09,0,10;0.62,0.12,0,40;4.64,0.055,0,60" titolo="Aree relative delle due classi"}
:::

:::osservazione
In un **diagramma a barre** i rettangoli sono separati e l'altezza rappresenta il conteggio o la proporzione della modalità. La larghezza è grafica. In un istogramma, invece, la base misura l'ampiezza della classe sull'asse quantitativo. In un **grafico a settori** la quota $f_i$ è rappresentata da un angolo di ampiezza $360^\circ f_i$. Un settore di $90^\circ$ corrisponde a un quarto del totale. In tutti i casi l'etichetta dell'asse o della legenda indica se si stanno leggendo conteggi, proporzioni o densità.
:::

## Tabelle a doppia entrata

:::definizione{#tabelle titolo="Frequenze congiunte, marginali e condizionate"}
Una **tabella a doppia entrata** incrocia due caratteri rilevati sulle stesse unità. La cella $n_{ij}$ conta le unità con la modalità $i$ del primo carattere e la modalità $j$ del secondo. Le **marginali** si ottengono sommando lungo una riga o una colonna:

$$
n_{i\cdot}=\sum_j n_{ij},\qquad
n_{\cdot j}=\sum_i n_{ij}.
$$

La frequenza relativa congiunta è $\dfrac{n_{ij}}{n}$. Entro la riga $i$, la frequenza relativa della colonna $j$ è $\dfrac{n_{ij}}{n_{i\cdot}}$, definita quando $n_{i\cdot}>0$. Entro la colonna $j$ la frequenza relativa della riga $i$ è $\dfrac{n_{ij}}{n_{\cdot j}}$ se $n_{\cdot j}>0$. La scelta del denominatore determina il gruppo di riferimento.
:::

:::esempio{titolo="Tre domande sulla stessa cella"}
Un corso offre un turno diurno e uno serale. L'esito di 80 iscritti è riassunto dalla tabella.

| Turno | Idonei | Non idonei | Totale |
| --- | ---: | ---: | ---: |
| Diurno | 30 | 20 | 50 |
| Serale | 21 | 9 | 30 |
| Totale | 51 | 29 | 80 |

La quota di iscritti serali e idonei sul totale è $\dfrac{21}{80}=0{,}2625$. Tra i serali, la quota degli idonei è $\dfrac{21}{30}=0{,}70$. Tra gli idonei, la quota dei serali è $\dfrac{21}{51}=\dfrac7{17}$. I tre numeratori coincidono perché contano la stessa cella. Il denominatore cambia perché la domanda riguarda, rispettivamente, tutti gli iscritti, il solo turno serale o i soli idonei.

Per confrontare la quota di idonei tra i due turni si usano i totali delle due righe, ottenendo $0{,}60$ per il diurno e $0{,}70$ per il serale. I 30 idonei del diurno sono più numerosi dei 21 del serale perché il diurno comprende 50 iscritti. I conteggi da soli rispondono a una domanda sulla numerosità, mentre il confronto delle quote tiene conto dell'ampiezza dei turni.
:::

## Selezione e dati mancanti

:::definizione{#campionamento titolo="Selezione casuale, stratificata e per disponibilità"}
Un **campione casuale semplice** senza reinserimento di numerosità $n$ assegna la stessa probabilità a ogni sottoinsieme di $n$ unità della popolazione. Il **campionamento stratificato** suddivide la popolazione in gruppi disgiunti definiti prima della selezione e preleva unità entro ciascun gruppo. Se i gruppi sono le facoltà di un ateneo, si può fissare il numero di studenti da selezionare in ogni facoltà. Se invece si intervistano le persone che passano davanti a una sola aula, il campione dipende dalla loro disponibilità in quel luogo e orario.

La frequenza calcolata sui rispondenti descrive il gruppo che ha risposto. Per usarla come stima riferita all'intera popolazione occorre considerare come sono state selezionate le unità e quali hanno risposto. Il capitolo sul campionamento sviluppa il ruolo della selezione nel calcolo dell'errore standard.
:::

:::attenzione
Un campione grande può descrivere bene una parte della popolazione e trascurarne un'altra. Per stimare il tempo di percorrenza di tutti gli studenti, 800 interviste raccolte davanti alla residenza universitaria descrivono gli studenti raggiunti in quel luogo. Gli studenti pendolari che evitano quella zona hanno poche occasioni di essere intervistati. Ripetere le interviste nello stesso luogo lascia intatto questo meccanismo di selezione.
:::

:::esempio{titolo="Tasso di risposta e percentuale sulle risposte valide"}
Su 120 studenti invitati, 90 rispondono alla domanda sul mezzo di trasporto. Tra questi, 27 dichiarano di andare a piedi. Il tasso di risposta è $\dfrac{90}{120}=0{,}75$. La quota di chi va a piedi fra le risposte valide è $\dfrac{27}{90}=0{,}30$. La quota di invitati di cui si sa che vanno a piedi è $\dfrac{27}{120}=0{,}225$.

Se interessa la quota effettiva tra i 120 invitati e mancano informazioni sui 30 assenti, si può indicare un intervallo. Il conteggio minimo è 27, se tutti gli assenti usano un altro mezzo. Il massimo è $27+30=57$, se tutti vanno a piedi. Le quote estreme sono quindi $0{,}225$ e $0{,}475$. Questo intervallo riguarda la mancanza di risposte e si distingue da un intervallo di confidenza, che quantifica l'incertezza di campionamento sotto ipotesi specifiche.

::grafico{assi=0 xmin=-4 xmax=124 ymin=-0.32 ymax=1.32 uguale=1 poligoni="0,0 27,0 27,1 0,1" linee="0,0 120,0 120,1 0,1 0,0;27,0 27,1;90,0 90,1" etichette="4,0.46,27 a piedi;49,0.46,63 altri mezzi;95,0.60,30 senza;96.2,0.32,risposta" titolo="I 120 invitati comprendono 90 rispondenti e 30 assenti. La quota effettiva di chi va a piedi dipende dalle risposte mancanti."}
:::
