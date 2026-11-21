---
titolo: "Dati, frequenze e grafici"
sommario: "Dalla rilevazione delle unità statistiche alla lettura di frequenze, tabelle, distribuzioni empiriche e istogrammi."
---

La statistica serve a conoscere un gruppo grande partendo dai dati raccolti su una sua parte. La durata media del tragitto degli studenti per arrivare a lezione, o la quota di studenti che usa l'autobus, riguardano migliaia di persone, mentre di solito si conoscono le risposte di qualche centinaio. Prima di qualsiasi calcolo occorre quindi sapere di chi si parla, che cosa si è misurato e come si leggono i numeri raccolti.

Questo capitolo tratta questi tre punti. Si definiscono la popolazione e il campione, poi i tipi di dati e i conti che hanno senso su ciascun tipo, infine le frequenze, le tabelle e i grafici con cui si riassumono i dati. Sono gli strumenti usati in tutto il corso. Gli indici del capitolo 2, come la media e la varianza, si calcolano a partire dalle frequenze; le tabelle a doppia entrata tornano nella probabilità condizionata del capitolo 4; il passaggio dal campione alla popolazione è l'argomento dei capitoli dall'8 all'11.

## Popolazione, unità e campione

:::definizione{#popolazione titolo="Popolazione e campione"}
Si supponga di voler sapere quanto tempo impiegano gli studenti di un ateneo per arrivare all'università durante un certo semestre. Gli studenti iscritti in quel semestre formano la **popolazione** dell'indagine. La popolazione è quindi l'insieme di tutti gli elementi a cui si riferisce la domanda, e ciascuno di questi elementi è un'**unità statistica**. Nell'esempio l'unità statistica è il singolo studente iscritto.

Per definire la popolazione si dice chi ne fa parte, in quale luogo e in quale periodo. Qui ne fanno parte gli iscritti a quell'ateneo nel semestre considerato. Quando la popolazione è finita, il numero delle sue unità si indica con $N$; nell'esempio $N$ è il numero degli iscritti, che si legge dall'elenco della segreteria.

Rilevare tutte le unità si chiama censimento. Un censimento costa tempo e denaro, perciò di solito si rileva soltanto una parte delle unità. La parte di unità selezionate per la rilevazione si chiama **campione**, e il numero delle sue unità, detto numerosità del campione, si indica con $n$. Se si intervistano 200 studenti di un ateneo con 12000 iscritti, si ha $N=12000$ e $n=200$.
:::

:::esempio{titolo="Un'unità e più misure"}
Un'azienda produce un lotto di 300 piastrelle e ne vuole controllare la massa e lo spessore. Si scelgono 25 piastrelle; di ciascuna si misura la massa e si misura lo spessore in tre punti diversi. La popolazione è il lotto, l'unità statistica è la singola piastrella e il campione è formato dalle 25 piastrelle scelte, quindi $N=300$ e $n=25$.

I dati si scrivono in una tabella con una riga per ogni unità e una colonna per ogni misura. Qui le righe sono 25 e le colonne di misure sono quattro, cioè la massa e i tre spessori.

Le misure di spessore sono $25\cdot3=75$, ma le unità restano 25, perché ogni piastrella compare con tre misure. Per confrontare le piastrelle fra loro si calcola prima lo spessore medio di ciascuna, cioè la media dei suoi tre spessori; il confronto usa quindi 25 valori, uno per piastrella. Per vedere quanto varia lo spessore all'interno di una stessa piastrella si usano invece i tre valori di quella piastrella.
:::

:::definizione{#parametro-statistica titolo="Parametro e statistica"}
Nel lotto di 300 piastrelle alcune hanno uno spessore fuori dai limiti ammessi dall'azienda; queste piastrelle si dicono fuori tolleranza. La quota di piastrelle fuori tolleranza su tutte le 300 è un numero fisso del lotto, anche se nessuno lo conosce finché non si misurano tutte. Un **parametro** è un numero di questo tipo, cioè una grandezza che descrive l'intera popolazione. Nei capitoli sulle variabili aleatorie la popolazione sarà descritta da un modello matematico, e anche le grandezze che descrivono quel modello si chiameranno parametri.

La quota di piastrelle fuori tolleranza fra le 25 scelte si calcola invece dai soli dati del campione. Un numero calcolato a partire dalle osservazioni del campione si chiama **statistica campionaria**; in termini matematici è una funzione delle osservazioni campionarie.

Se si sceglie un altro gruppo di 25 piastrelle dallo stesso lotto, il parametro resta lo stesso, perché il lotto non è cambiato. La statistica può invece dare un valore diverso, perché le piastrelle scelte sono altre. Per esempio, se le piastrelle fuori tolleranza sono 3 nel primo campione e 1 nel secondo, la statistica vale $\dfrac{3}{25}=0{,}12$ nel primo caso e $\dfrac{1}{25}=0{,}04$ nel secondo.

Il parametro è di solito il numero che interessa, ma non si conosce; la statistica si conosce, perché si calcola dai dati raccolti. Gran parte del corso studia come usare una statistica campionaria per dire qualcosa di affidabile sul parametro: è l'argomento dei capitoli sulla stima, sugli intervalli di confidenza e sui test.
:::

:::osservazione
Ogni unità ha un identificativo, per esempio il numero stampato sul retro della piastrella. L'identificativo serve a sapere quali misure appartengono alla stessa unità. La massa e lo spessore misurati sulla piastrella numero 7 formano, per esempio, una coppia di dati.

Se si ordinano dalla più piccola alla più grande la colonna delle masse e, separatamente, la colonna degli spessori, ogni colonna contiene ancora gli stessi valori, ma le coppie non corrispondono più alle piastrelle. Per studiare la relazione fra due proprietà misurate sulle stesse unità, come massa e spessore, si ordinano perciò le righe intere della tabella, in modo che le coppie restino unite.
:::

## Caratteri e scale di misura

:::definizione{#caratteri titolo="Caratteri qualitativi e quantitativi"}
Di ogni studente dell'indagine sul tragitto si possono rilevare più informazioni, per esempio il mezzo con cui arriva, il giudizio che dà al servizio di trasporto, il numero di assenze nel semestre e la durata del tragitto. Ciascuna di queste proprietà è un **carattere**. Il valore che il carattere assume su una certa unità, per esempio «autobus» oppure «35 minuti», si chiama **modalità**.

I caratteri si dividono in quattro tipi.

- Un carattere è qualitativo nominale quando le modalità sono categorie senza un ordine. Il mezzo di trasporto è di questo tipo, perché bici, autobus, auto e a piedi sono categorie diverse e nessuna viene prima delle altre.
- Un carattere è qualitativo ordinale quando le modalità sono categorie ordinate. Il giudizio insufficiente, adeguato oppure ottimo è di questo tipo. L'ordine dei livelli è chiaro, mentre la distanza fra due livelli resta indefinita, quindi non si può dire se fra insufficiente e adeguato ci sia la stessa distanza che fra adeguato e ottimo.
- Un carattere è quantitativo discreto quando le modalità sono numeri che si possono elencare uno dopo l'altro. Il numero di assenze è di questo tipo, perché assume i valori interi $0,1,2,\ldots$. L'insieme dei valori possibili è finito oppure infinito ma elencabile come i numeri naturali; un insieme infinito elencabile in questo modo si dice numerabile.
- Un carattere è quantitativo continuo quando le modalità sono numeri e, in linea di principio, è possibile ogni valore di un intervallo. La durata di un tragitto è di questo tipo, perché un tragitto può durare $31$, $31{,}5$ oppure $31{,}47$ minuti. Il carattere resta continuo anche se, per comodità, le durate vengono registrate arrotondate al minuto.

Il tipo di carattere determina quali conti hanno significato. Per il mezzo di trasporto si contano gli studenti che usano ciascun mezzo. Per il giudizio si può contare anche quanti studenti hanno dato almeno «adeguato», perché le modalità sono ordinate. Per la durata si può calcolare la differenza in minuti fra due tragitti, perché le modalità sono numeri.
:::

:::definizione{#scale-di-misura titolo="Scale a intervalli e a rapporti"}
Si considerino due temperature, $10\,^\circ\mathrm{C}$ e $20\,^\circ\mathrm{C}$. In gradi Celsius il loro rapporto vale $\dfrac{20}{10}=2$, e verrebbe da dire che la seconda temperatura è il doppio della prima. Le stesse temperature in kelvin sono però $283{,}15\,\mathrm{K}$ e $293{,}15\,\mathrm{K}$, e il loro rapporto è $\dfrac{293{,}15}{283{,}15}\approx1{,}04$. Il «doppio» dipende quindi dall'unità di misura scelta, perciò non descrive le temperature. Questo accade perché lo zero dei gradi Celsius è fissato per convenzione alla temperatura a cui fonde il ghiaccio, e $0\,^\circ\mathrm{C}$ è una temperatura come le altre.

La differenza fra le due temperature vale invece $20-10=10$ gradi Celsius e $293{,}15-283{,}15=10$ kelvin, quindi resta la stessa nelle due unità.

Un carattere come la temperatura in gradi Celsius si misura su una **scala a intervalli**. In una scala a intervalli lo zero è scelto per convenzione, perciò hanno significato le differenze fra i valori e non i loro rapporti. Il motivo si vede con un conto. Un cambio di unità o di zero ha la forma $y=ax+b$ con $a>0$; da Celsius a kelvin, per esempio, $a=1$ e $b=273{,}15$. La differenza di due valori diventa

$$
y_2-y_1=(ax_2+b)-(ax_1+b)=a(x_2-x_1),
$$

perché il termine $b$ si cancella. Il rapporto $\dfrac{y_2}{y_1}=\dfrac{ax_2+b}{ax_1+b}$ contiene ancora $b$, quindi cambia quando si cambia lo zero.

Con le durate la situazione è diversa. Un tragitto di $30\,\mathrm{min}$ dura il doppio di uno di $15\,\mathrm{min}$, e in secondi le due durate diventano $1800\,\mathrm{s}$ e $900\,\mathrm{s}$, con rapporto ancora $\dfrac{1800}{900}=2$. Qui lo zero non è una convenzione, perché una durata di $0\,\mathrm{min}$ indica l'assenza di durata. Un carattere come la durata si misura su una **scala a rapporti**. In una scala a rapporti lo zero indica l'assenza della quantità misurata e il cambio di unità ha la forma $y=ax$ con $a>0$; dai minuti ai secondi, per esempio, $a=60$. Se $x_1\ne0$, il rapporto resta lo stesso, perché

$$
\frac{y_2}{y_1}=\frac{ax_2}{ax_1}=\frac{x_2}{x_1}.
$$

In una scala a rapporti hanno quindi significato sia le differenze sia i rapporti. Scale a intervalli e scale a rapporti sono due tipi di scala di misura, cioè due modi di assegnare i numeri a un carattere quantitativo.
:::

:::attenzione
Per elaborare i dati, alle categorie di un carattere qualitativo si assegnano a volte dei numeri, per esempio 1 alla bici e 2 all'autobus. Questi numeri sono soltanto etichette. Con una risposta «bici» e una risposta «autobus», la codifica $(1,2)$ dà la media $\dfrac{1+2}{2}=1{,}5$, mentre la codifica $(10,20)$ dà la media $\dfrac{10+20}{2}=15$, anche se le risposte sono le stesse. La media di un carattere nominale dipende quindi dalla codifica scelta. I dati qualitativi sono descritti dal conteggio delle risposte in ciascuna categoria.

Allo stesso modo, il rapporto fra $20\,^\circ\mathrm{C}$ e $10\,^\circ\mathrm{C}$ cambia passando ai kelvin, mentre la differenza di temperatura ha lo stesso valore numerico nelle due unità.
:::

## Frequenze assolute e relative

:::definizione{#frequenze titolo="Distribuzione di frequenza"}
Si chiede a 40 studenti di scegliere una fra tre modalità, indicate con A, B e C. Gli studenti che scelgono A sono 13, quelli che scelgono B sono 17 e quelli che scelgono C sono 10.

Il numero di osservazioni di una modalità si chiama **frequenza assoluta**; per la modalità A vale 13. La quota di osservazioni di una modalità si chiama **frequenza relativa** e si ottiene dividendo la frequenza assoluta per il numero totale di osservazioni; per la modalità A vale $\dfrac{13}{40}=0{,}325$. Moltiplicando per 100 si ottiene la frequenza percentuale, che per A è il $32{,}5\,\%$.

Con le lettere, siano $x_1,\ldots,x_k$ le $k$ modalità del carattere e siano disponibili $n>0$ osservazioni. La frequenza assoluta della modalità $x_i$ si indica con $n_i$, la frequenza relativa con $f_i$ e la frequenza percentuale è $100 f_i\,\%$. Vale

$$
f_i=\frac{n_i}{n}.
$$

L'elenco delle modalità con le rispettive frequenze si chiama distribuzione di frequenza del carattere. Se le modalità non si sovrappongono e insieme coprono tutti i casi, ogni osservazione compare una e una sola volta nei conteggi. Perciò la somma delle frequenze assolute è il numero totale di osservazioni e la somma delle frequenze relative è 1:

$$
\sum_{i=1}^k n_i=n,\qquad
\sum_{i=1}^k f_i=\frac{\sum_{i=1}^k n_i}{n}=1.
$$

Nell'esempio $13+17+10=40$ e $\dfrac{13}{40}+\dfrac{17}{40}+\dfrac{10}{40}=1$. La somma dei conteggi serve anche a ricavare una frequenza assoluta mancante. Se si conoscono soltanto i conteggi di A e di B, il conteggio di C è $40-13-17=10$.

La figura rappresenta i tre conteggi con un diagramma a barre, in cui ogni modalità ha una barra alta quanto il suo conteggio.

::grafico{assi=0 xmin=-0.08 xmax=3.95 ymin=-2.2 ymax=19.5 poligoni="0.69,0 1.31,0 1.31,13 0.69,13;1.69,0 2.31,0 2.31,17 1.69,17;2.69,0 3.31,0 3.31,10 2.69,10" vettori="0.33,0,3.7,0;0.33,0,0.33,18.1" etichette="0.41,18.65,conteggio;0.94,13.55,13;1.94,17.55,17;2.94,10.55,10;0.94,-1.23,A;1.94,-1.23,B;2.94,-1.23,C" titolo="Diagramma a barre delle tre modalità. La separazione grafica fra A, B e C distingue le categorie. Le altezze rappresentano i conteggi."}
:::

::::teorema{#frequenze-aggregate titolo="Frequenza relativa di gruppi riuniti"}
Quando si riuniscono più gruppi, la frequenza relativa di una modalità nel totale si ottiene dalle frequenze relative dei singoli gruppi, pesate con la numerosità di ciascun gruppo.

Siano dati $g$ gruppi disgiunti, cioè senza unità in comune, di numerosità $m_1,\ldots,m_g$, tutte positive. In ciascun gruppo si osserva lo stesso carattere con le stesse modalità. Se $q_r$ è la frequenza relativa di una modalità nel gruppo $r$, allora la frequenza relativa della modalità nei gruppi riuniti è

$$
f=\sum_{r=1}^g w_rq_r,\qquad
w_r=\frac{m_r}{\sum_{j=1}^g m_j}.
$$

Il peso $w_r$ è la quota di unità che appartengono al gruppo $r$, quindi i pesi sommano a 1. La formula permette di ricostruire la frequenza complessiva conoscendo soltanto le quote dei gruppi e le loro numerosità.

:::dimostrazione
Poiché $q_r$ è il rapporto fra il conteggio della modalità nel gruppo $r$ e la numerosità $m_r$, il conteggio nel gruppo $r$ è $m_rq_r$. Ogni unità appartiene a un solo gruppo, quindi il conteggio complessivo è $\sum_{r=1}^g m_rq_r$. Dividendo per la numerosità totale $\sum_{j=1}^g m_j$ si ottiene la somma pesata. Quando i gruppi hanno tutti la stessa numerosità, $w_r=\dfrac1g$ per ogni $r$, e la somma pesata coincide con la media aritmetica delle quote.
:::
::::

:::esempio{titolo="Confronto tra gruppi di diversa ampiezza"}
Fra i 40 studenti del primo turno, 14 raggiungono la sede in autobus. Fra i 60 studenti del secondo turno, quelli che usano l'autobus sono 18. Il secondo turno ha $18-14=4$ utenti dell'autobus in più, mentre il primo turno ha una quota più alta, perché $\dfrac{14}{40}=0{,}35$ e $\dfrac{18}{60}=0{,}30$. I due confronti rispondono a domande diverse. Il conteggio serve a sapere quanti posti in autobus occorrono. La quota dice quanto è diffusa la scelta dell'autobus in ciascun turno.

Unendo i due turni si contano $14+18=32$ utenti su $40+60=100$ studenti, quindi la frequenza relativa complessiva è $\dfrac{32}{100}=0{,}32$. Lo stesso valore si ottiene con il teorema. Il primo turno contiene 40 studenti su 100 e il secondo 60, quindi i pesi sono $w_1=0{,}40$ e $w_2=0{,}60$, e

$$
f=0{,}40\cdot0{,}35+0{,}60\cdot0{,}30=0{,}14+0{,}18=0{,}32.
$$

La media semplice delle due quote, $\dfrac{0{,}35+0{,}30}{2}=0{,}325$, dà un valore diverso, perché assegna lo stesso peso a due turni di ampiezza diversa.
:::

:::osservazione
Le percentuali pubblicate sono di solito arrotondate all'intero. In un gruppo di 200 unità, una categoria indicata con il $33\%$ può contare 65 unità oppure 66, se i mezzi si arrotondano verso l'alto. Infatti $\dfrac{65}{200}$ corrisponde al $32{,}5\%$, che si arrotonda al $33\%$, e $\dfrac{66}{200}$ corrisponde esattamente al $33\%$. Ogni categoria di una tabella viene arrotondata per conto suo, quindi la somma delle percentuali arrotondate può risultare $99\%$ o $101\%$ anche quando la tabella è completa.
:::

## Frequenze cumulate e ripartizione empirica

:::definizione{#cumulate titolo="Frequenze cumulate"}
Si chiede a 20 studenti un giudizio sul servizio di trasporto. Rispondono insufficiente in 4, adeguato in 10 e ottimo in 6. Gli studenti che danno al più «adeguato», cioè insufficiente oppure adeguato, sono $4+10=14$, e la loro quota è $\dfrac{14}{20}=0{,}70$. Un conteggio di questo tipo, che somma le osservazioni di una modalità e di tutte quelle che la precedono, si chiama frequenza cumulata. Si calcola quando le modalità hanno un ordine, perché occorre sapere quali modalità vengono prima.

Con le lettere, si supponga che le modalità siano ordinate, $x_1<\cdots<x_k$. La **frequenza cumulata assoluta** $N_i$ conta le osservazioni al più pari a $x_i$. La **frequenza cumulata relativa** $F_i$ esprime la stessa informazione come quota:

$$
N_i=\sum_{j=1}^i n_j,\qquad F_i=\frac{N_i}{n}.
$$

Nell'esempio $N_1=4$, $N_2=14$, $N_3=20$, e quindi $F_1=0{,}20$, $F_2=0{,}70$, $F_3=1$.

Per convenzione si pone $N_0=F_0=0$. Poiché $N_i=N_{i-1}+n_i$, la frequenza di una singola modalità si ricava come differenza di due cumulate consecutive, $n_i=N_i-N_{i-1}$. Allo stesso modo $f_i=F_i-F_{i-1}$. Nell'esempio, gli studenti che rispondono adeguato sono $n_2=N_2-N_1=14-4=10$.

Per un carattere nominale, come il colore preferito, l'ordine delle modalità è una scelta di chi scrive la tabella, per esempio l'ordine alfabetico. Cambiando quell'ordine cambierebbero le cumulate, quindi per un carattere nominale le cumulate non hanno significato statistico.
:::

:::definizione{#ripartizione-empirica titolo="Funzione di ripartizione empirica"}
Con dati numerici la frequenza cumulata si può calcolare per qualsiasi soglia, anche per un valore che nessuno ha osservato. Per i cinque dati $1,2,2,4,6$, le osservazioni minori o uguali a $3$ sono tre, quindi la loro quota è $\dfrac35$.

Siano $x_1^{\mathrm{oss}},\ldots,x_n^{\mathrm{oss}}$ le singole osservazioni numeriche, ripetizioni comprese. La **funzione di ripartizione empirica** $F_n(x)$ è la quota di osservazioni minori o uguali alla soglia $x$, per ogni numero reale $x$. Il pedice $n$ ricorda il numero di osservazioni. In formula

$$
F_n(x)=\frac{1}{n}\sum_{j=1}^n
\mathbf{1}_{\{x_j^{\mathrm{oss}}\le x\}}.
$$

Il simbolo $\mathbf{1}_{\{x_j^{\mathrm{oss}}\le x\}}$ si chiama indicatore e vale 1 quando l'osservazione $x_j^{\mathrm{oss}}$ soddisfa la disuguaglianza, 0 negli altri casi. La somma conta quindi le osservazioni che non superano la soglia. Calcolata in una modalità osservata $x_i$, la funzione dà la frequenza cumulata relativa, cioè $F_n(x_i)=F_i$.

Fra due valori osservati consecutivi la funzione è costante, perché spostando la soglia in quel tratto non si aggiunge nessuna osservazione. In ogni valore osservato la funzione sale con un salto, e la grandezza del salto è la frequenza relativa di quel valore. Nel punto del salto la funzione ha già il valore più alto, perché la disuguaglianza $x_j^{\mathrm{oss}}\le x$ comprende l'uguaglianza; per questo si dice che la funzione è continua da destra. Il valore che la funzione ha subito prima del salto in un punto $x$ si indica con $F_n(x^-)$ ed è la quota delle osservazioni strettamente minori di $x$.
:::

:::esempio{titolo="Lettura di un gradino e di un intervallo"}
Per i dati $1,2,2,4,6$, fino alla soglia $2$ si contano tre osservazioni, perciò $F_n(2)=\dfrac35$. Per ogni soglia dell'intervallo $[2,4)$ si contano sempre le stesse tre osservazioni. In $4$ si aggiunge una quarta osservazione, quindi $F_n(4)=\dfrac45$.

::grafico{xmin=-1.1 xmax=7.1 ymin=-0.1 ymax=1.16 nomi="x,F_n(x)" linee="-0.5,0 1,0;1,0.2 2,0.2;2,0.6 4,0.6;4,0.8 6,0.8;6,1 6.8,1" punti="1,0,vuoto;1,0.2,pieno;2,0.2,vuoto;2,0.6,pieno;4,0.6,vuoto;4,0.8,pieno;6,0.8,vuoto;6,1,pieno" etichette="-0.63,0.18,0,2;-0.63,0.58,0,6;-0.63,0.78,0,8" titolo="Ripartizione empirica dei cinque dati"}

Per contare le osservazioni in $(2,4]$, si parte da quelle minori o uguali a $4$ e si tolgono quelle minori o uguali a $2$. Si ottiene $F_n(4)-F_n(2)=\dfrac45-\dfrac35=\dfrac15$. Per contare quelle in $[2,4]$ occorre invece togliere soltanto le osservazioni strettamente minori di $2$. Il valore subito prima del salto in $2$ è $F_n(2^-)=\dfrac15$, perché l'unica osservazione minore di $2$ è $1$. La frequenza relativa dell'intervallo chiuso è quindi $\dfrac45-\dfrac15=\dfrac35$.
:::

## Raggruppamento in classi

:::definizione{#classi titolo="Classi, ampiezze e punti medi"}
Quando un carattere numerico assume molti valori diversi, come le durate dei tragitti di 200 studenti, una tabella con una riga per valore diventa troppo lunga. I valori si raccolgono allora in intervalli disgiunti, detti **classi**, e per ogni classe si conta quante osservazioni contiene.

La classe $[a_i,b_i)$ comprende l'estremo sinistro $a_i$ ed esclude l'estremo destro $b_i$. Questa convenzione assegna ogni osservazione che cade esattamente su un confine a una sola classe. Se l'ultimo intervallo è chiuso a destra, la tabella lo indica esplicitamente. L'**ampiezza** della classe è $h_i=b_i-a_i$ e il **punto medio** è

$$
c_i=\frac{a_i+b_i}{2}.
$$

Per classi di durata $[0,5)$, $[5,10)$ e $[10,20]$ misurate in minuti, una durata uguale a $5\,\mathrm{min}$ appartiene alla seconda classe e una durata di $20\,\mathrm{min}$ appartiene all'ultima. Le ampiezze sono $5$, $5$ e $10\,\mathrm{min}$, e i punti medi sono $2{,}5$, $7{,}5$ e $15\,\mathrm{min}$.
:::

:::esempio{titolo="Che cosa si può recuperare da una tabella"}
Le classi $[0,5)$, $[5,10)$ e $[10,20]$ contengano 8, 12 e 5 tempi di attesa. Dalla tabella si ricava esattamente che $8+12=20$ attese sono strettamente inferiori a $10\,\mathrm{min}$. Una soglia di $8\,\mathrm{min}$ cade invece dentro la seconda classe. Le otto attese della prima classe sono sotto la soglia e le cinque dell'ultima sono sopra, mentre delle dodici attese della seconda classe non si sa da che parte stiano. Il numero di attese strettamente inferiori a $8\,\mathrm{min}$ è quindi compreso fra 8, se nessuna attesa della seconda classe è sotto la soglia, e $8+12=20$, se lo sono tutte. Una stima più precisa richiede informazioni su come sono distribuiti i valori all'interno della seconda classe.

::grafico{assi=0 xmin=-1.5 xmax=22.5 ymin=-1.3 ymax=2.3 vettori="-0.5,0,21.8,0" poligoni="0,0.3 5,0.3 5,1.2 0,1.2;5,0.3 10,0.3 10,1.2 5,1.2;10,0.3 20,0.3 20,1.2 10,1.2" linee="0,0.12 0,-0.12;5,0.12 5,-0.12;10,0.12 10,-0.12;20,0.12 20,-0.12" segmenti="8,-0.1,8,1.75" etichette="-0.2,-0.55,0;4.8,-0.55,5;9.6,-0.55,10;19.6,-0.55,20;21.3,-0.6,t;2.2,0.65,8;6.0,0.65,12;14.8,0.65,5;7.3,2.0,soglia 8" titolo="Classi di attesa con 8, 12 e 5 osservazioni. La soglia di 8 minuti cade dentro la classe $[5,10)$, quindi le sue 12 attese possono stare da entrambe le parti."}
:::

:::osservazione
Il punto medio rappresenta con un solo valore tutte le osservazioni della classe. Per esempio, assegnare $7{,}5\,\mathrm{min}$ alle dodici attese della classe $[5,10)$ permette di calcolare una media approssimata, come si vedrà nel capitolo sugli indici descrittivi. La media vera delle dodici attese può differire da $7{,}5\,\mathrm{min}$ se le attese si concentrano vicino a uno dei due estremi. Una classe aperta come $[20,+\infty)$ non ha un estremo destro finito, quindi il suo punto medio non è determinato.
:::

## Grafici e densità di frequenza

:::definizione{#istogramma titolo="Istogramma a densità relativa"}
Quando le classi hanno ampiezze diverse, una classe larga può contenere più osservazioni soltanto perché copre più valori. Per confrontare correttamente le classi, nell'istogramma la quota di una classe si legge sull'area del rettangolo.

Un **istogramma** rappresenta ogni classe di un carattere quantitativo con un rettangolo che ha per base l'intervallo della classe. In un istogramma a densità relativa l'area del rettangolo è la frequenza relativa $f_i$ della classe. L'altezza $d_i$ è perciò la frequenza relativa divisa per l'ampiezza $h_i>0$, cioè la quota di osservazioni per ogni unità di ampiezza, e si chiama **densità** di frequenza relativa:

$$
d_i=\frac{f_i}{h_i},\qquad d_i h_i=f_i.
$$

Se le classi coprono tutte le osservazioni, la somma delle aree vale 1, perché è la somma delle frequenze relative. Con un asse orizzontale in minuti, l'altezza si misura in frequenza relativa per minuto, cioè in $\mathrm{min}^{-1}$. Se si usa la densità assoluta $\dfrac{n_i}{h_i}$, espressa in osservazioni per minuto, la somma delle aree vale $n$.
:::

:::esempio{titolo="Il rettangolo più alto e la classe più frequente"}
Su 20 attese, 8 cadono in $[0,2)$ minuti e 12 in $[2,8)$ minuti. Le frequenze relative sono $\dfrac{8}{20}=0{,}40$ e $\dfrac{12}{20}=0{,}60$. Dividendo per le ampiezze, che sono $2$ e $6\,\mathrm{min}$, si ottengono le densità $d_1=\dfrac{0{,}40}{2}=0{,}20\,\mathrm{min}^{-1}$ e $d_2=\dfrac{0{,}60}{6}=0{,}10\,\mathrm{min}^{-1}$. Il primo rettangolo è più alto, perché le sue attese sono più concentrate per minuto. Il secondo ha base tripla e area maggiore, quindi la sua classe contiene più osservazioni.

::grafico{xmin=-0.99 xmax=8.99 ymin=-0.023 ymax=0.253 nomi="t,d_i" poligoni="0,0 2,0 2,0.2 0,0.2;2,0 8,0 8,0.1 2,0.1" linee="0,0.2 2,0.2 2,0 8,0 8,0.1 2,0.1" etichette="-0.78,0.19,0,20;-0.78,0.09,0,10;0.62,0.12,0,40;4.64,0.055,0,60" titolo="Aree relative delle due classi"}
:::

:::attenzione
Con classi di ampiezze diverse, altezze proporzionali ai conteggi assegnano alle classi larghe un'area eccessiva. Si considerino 30 attese nelle classi $[0,5)$, $[5,10)$ e $[10,20)$ minuti, con 8, 12 e 10 osservazioni. Se tutte le altezze si ottengono dividendo il conteggio per la stessa ampiezza $5\,\mathrm{min}$, l'ultimo rettangolo ha altezza $\dfrac{10}{5}=2$ osservazioni per minuto e area $2\cdot10=20$, cioè il doppio delle 10 osservazioni che contiene. Le densità assolute corrette si ottengono dividendo ogni conteggio per l'ampiezza della propria classe, e valgono $\dfrac{8}{5}=1{,}6$, $\dfrac{12}{5}=2{,}4$ e $\dfrac{10}{10}=1$ osservazioni per minuto. Con queste altezze ogni area coincide con il conteggio della classe, e la somma delle aree vale $8+12+10=30$.

::grafico{assi=0 xmin=-2.6 xmax=22.8 ymin=-0.45 ymax=3.05 vettori="-0.6,0,22,0;-0.6,0,-0.6,2.85" poligoni="0,0 5,0 5,1.6 0,1.6;5,0 10,0 10,2.4 5,2.4;10,0 20,0 20,1 10,1" linee="0,1.6 5,1.6 5,0;5,2.4 10,2.4 10,0;10,1 20,1 20,0;-0.75,1 -0.45,1;-0.75,2 -0.45,2" segmenti="10,1,10,2;10,2,20,2;20,2,20,1" etichette="-1.9,0.95,1;-1.9,1.95,2;-0.4,2.95,densità;-0.2,-0.22,0;4.8,-0.22,5;9.6,-0.22,10;19.6,-0.22,20;21.4,-0.25,t;2.2,0.75,8;7.2,1.15,12;14.6,0.45,10;13.4,2.18,area 20" titolo="Densità assolute corrette delle tre classi. Il contorno tratteggiato è il rettangolo alto $\dfrac{10}{5}$, la cui area 20 non corrisponde alle 10 osservazioni della classe $[10,20)$."}
:::

:::osservazione
In un **diagramma a barre** i rettangoli sono separati e l'altezza rappresenta il conteggio o la quota di una modalità; la larghezza delle barre è una scelta grafica. In un istogramma, invece, la base misura l'ampiezza della classe sull'asse dei valori. In un **grafico a settori** la quota $f_i$ è rappresentata da un settore circolare di ampiezza $360^\circ f_i$; un settore di $90^\circ$, per esempio, corrisponde a un quarto del totale. In tutti e tre i grafici l'etichetta dell'asse o della legenda indica se si stanno leggendo conteggi, quote o densità.
:::

:::esempio{titolo="Angoli di un grafico a settori"}
Tre modalità A, B e C contano 13, 17 e 10 osservazioni su 40. Gli angoli dei settori sono $360^\circ\cdot\dfrac{13}{40}=117^\circ$, $360^\circ\cdot\dfrac{17}{40}=153^\circ$ e $360^\circ\cdot\dfrac{10}{40}=90^\circ$. La loro somma è $360^\circ$, perché le frequenze relative sommano a 1. La modalità C occupa un quarto del cerchio, perché $\dfrac{10}{40}=\dfrac14$. Il rapporto fra due angoli coincide con il rapporto fra i conteggi, per esempio $\dfrac{153}{117}=\dfrac{17}{13}$, quindi il grafico conserva i confronti fra le modalità.

::grafico{assi=0 uguale=1 xmin=-1.35 xmax=1.35 ymin=-1.25 ymax=1.25 curve="cos(t),sin(t),0,6.2832" poligoni="0,0 0,-1 0.174,-0.985 0.342,-0.940 0.500,-0.866 0.643,-0.766 0.766,-0.643 0.866,-0.500 0.940,-0.342 0.985,-0.174 1,0" linee="0,0 1,0;0,0 -0.454,0.891;0,0 0,-1" etichette="0.22,0.47,A 117°;-0.72,-0.13,B 153°;0.30,-0.40,C 90°" titolo="Settori di ampiezza $360^\circ\cdot\dfrac{n_i}{40}$ per le tre modalità"}
:::

## Tabelle a doppia entrata

:::definizione{#tabelle titolo="Frequenze congiunte, marginali e condizionate"}
Quando su ogni unità si rilevano due caratteri, per esempio il turno frequentato e l'esito di una prova, i conteggi si raccolgono in una tabella a doppia entrata. La tabella ha una riga per ogni modalità del primo carattere e una colonna per ogni modalità del secondo. La cella della riga $i$ e della colonna $j$ contiene $n_{ij}$, il numero di unità che hanno insieme la modalità $i$ del primo carattere e la modalità $j$ del secondo.

I totali di riga e di colonna si chiamano **frequenze marginali**, perché si scrivono ai margini della tabella. Si ottengono sommando lungo una riga o lungo una colonna:

$$
n_{i\cdot}=\sum_j n_{ij},\qquad
n_{\cdot j}=\sum_i n_{ij}.
$$

Il punto al posto di un indice indica che si è sommato su quell'indice. Quindi $n_{i\cdot}$ è il totale della riga $i$ e $n_{\cdot j}$ è il totale della colonna $j$.

Dalla stessa cella si ottengono tre frequenze relative, che differiscono per il denominatore.

- La **frequenza relativa congiunta** è $\dfrac{n_{ij}}{n}$, cioè la quota della cella su tutte le unità.
- Entro la riga $i$, la frequenza relativa della colonna $j$ è $\dfrac{n_{ij}}{n_{i\cdot}}$, definita quando $n_{i\cdot}>0$. Si chiama **frequenza condizionata** della colonna $j$ alla riga $i$.
- Entro la colonna $j$, la frequenza relativa della riga $i$ è $\dfrac{n_{ij}}{n_{\cdot j}}$, definita quando $n_{\cdot j}>0$. È la frequenza condizionata della riga $i$ alla colonna $j$.

La scelta del denominatore indica il gruppo di riferimento: tutte le unità, le sole unità della riga $i$ oppure le sole unità della colonna $j$.
:::

:::esempio{titolo="Tre domande sulla stessa cella"}
Un corso offre un turno diurno e uno serale. La tabella riassume l'esito della prova di 80 iscritti.

| Turno | Idonei | Non idonei | Totale |
| --- | ---: | ---: | ---: |
| Diurno | 30 | 20 | 50 |
| Serale | 21 | 9 | 30 |
| Totale | 51 | 29 | 80 |

La quota di iscritti serali e idonei sul totale è la frequenza congiunta $\dfrac{21}{80}=0{,}2625$. Tra i serali, la quota degli idonei è la frequenza condizionata $\dfrac{21}{30}=0{,}70$. Tra gli idonei, la quota dei serali è $\dfrac{21}{51}=\dfrac7{17}\approx0{,}41$. I tre numeratori coincidono perché contano la stessa cella. Il denominatore cambia perché le tre domande riguardano, rispettivamente, tutti gli iscritti, il solo turno serale e i soli idonei.

Per confrontare la quota di idonei nei due turni si divide per i totali delle due righe, e si ottiene $\dfrac{30}{50}=0{,}60$ per il diurno e $\dfrac{21}{30}=0{,}70$ per il serale. Gli idonei del diurno sono più numerosi di quelli del serale, 30 contro 21, perché il diurno comprende 50 iscritti contro 30. I conteggi rispondono quindi a una domanda sul numero di idonei, mentre il confronto delle quote tiene conto dell'ampiezza dei turni.

::grafico{assi=0 xmin=-0.7 xmax=4.4 ymin=-16 ymax=112 vettori="0,0,4.1,0;0,0,0,108" poligoni="0.7,0 1.5,0 1.5,60 0.7,60;2.4,0 3.2,0 3.2,70 2.4,70" linee="0.7,60 0.7,100 1.5,100 1.5,60;2.4,70 2.4,100 3.2,100 3.2,70;-0.08,50 0.08,50;-0.08,100 0.08,100" etichette="-0.5,48,50;-0.6,98,100;0.1,108,quota (%);0.82,28,idonei 60;0.82,78,non 40;2.52,33,idonei 70;2.52,83,non 30;0.85,-8,Diurno;2.6,-8,Serale" titolo="Frequenze relative degli esiti entro ciascun turno. Ogni barra usa come denominatore il totale della propria riga, $\dfrac{n_{ij}}{n_{i\cdot}}$."}
:::

## Selezione e dati mancanti

:::definizione{#campionamento titolo="Selezione casuale, stratificata e per disponibilità"}
Un **campione casuale semplice** di numerosità $n$ si ottiene estraendo a sorte $n$ unità distinte della popolazione, in modo che ogni gruppo di $n$ unità abbia la stessa probabilità di essere scelto. Per esempio, si numerano i 2000 iscritti di un ateneo e si estraggono 100 numeri, senza rimettere in gioco quelli già usciti; un'estrazione di questo tipo si dice senza reinserimento. Il calcolo di queste probabilità si vede nel capitolo su probabilità e combinatoria.

Nel **campionamento stratificato** la popolazione viene divisa, prima della selezione, in gruppi disgiunti detti strati, e le unità si estraggono all'interno di ciascuno strato. Se gli strati sono le facoltà di un ateneo, si può fissare il numero di studenti da estrarre in ogni facoltà.

Se invece si intervistano le persone che passano davanti a una sola aula, il campione dipende da chi si trova in quel luogo e a quell'ora. Un campione di questo tipo si dice per disponibilità.

La frequenza calcolata sui rispondenti descrive il gruppo che ha risposto. Per usarla come stima della frequenza nell'intera popolazione occorre sapere come sono state selezionate le unità e quali hanno risposto. Il capitolo sul campionamento mostra come, con una selezione casuale, si misura la precisione di una stima con una grandezza detta errore standard.
:::

:::attenzione
Un campione grande può descrivere bene una parte della popolazione e trascurarne un'altra. Per stimare il tempo di percorrenza di tutti gli studenti, 800 interviste raccolte davanti alla residenza universitaria descrivono gli studenti che passano da quel luogo. Gli studenti pendolari, che non frequentano quella zona, hanno poche occasioni di essere intervistati. Ripetere le interviste nello stesso luogo aumenta il numero di interviste, ma lascia invariato questo meccanismo di selezione.
:::

:::esempio{titolo="Tasso di risposta e percentuale sulle risposte valide"}
Su 120 studenti invitati, 90 rispondono alla domanda sul mezzo di trasporto. Tra questi, 27 dichiarano di andare a piedi. Il tasso di risposta, cioè la quota di invitati che hanno risposto, è $\dfrac{90}{120}=0{,}75$. La quota di chi va a piedi fra le risposte valide è $\dfrac{27}{90}=0{,}30$. La quota di invitati di cui si sa che vanno a piedi è $\dfrac{27}{120}=0{,}225$.

Se interessa la quota effettiva fra tutti i 120 invitati e non si sa nulla dei 30 che non hanno risposto, si può indicare un intervallo. Il conteggio minimo è 27, se tutti i 30 usano un altro mezzo. Il massimo è $27+30=57$, se vanno tutti a piedi. Le quote estreme sono quindi $\dfrac{27}{120}=0{,}225$ e $\dfrac{57}{120}=0{,}475$. Questo intervallo nasce dalle risposte mancanti. Nel capitolo sugli intervalli di confidenza si incontreranno intervalli di un altro tipo, che misurano l'incertezza dovuta alla scelta casuale del campione e che richiedono ipotesi specifiche.

::grafico{assi=0 xmin=-4 xmax=124 ymin=-0.32 ymax=1.32 uguale=1 poligoni="0,0 27,0 27,1 0,1" linee="0,0 120,0 120,1 0,1 0,0;27,0 27,1;90,0 90,1" etichette="4,0.46,27 a piedi;49,0.46,63 altri mezzi;95,0.60,30 senza;96.2,0.32,risposta" titolo="I 120 invitati comprendono 90 rispondenti e 30 assenti. La quota effettiva di chi va a piedi dipende dalle risposte mancanti."}
:::
