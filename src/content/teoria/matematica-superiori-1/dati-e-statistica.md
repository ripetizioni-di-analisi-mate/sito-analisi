---
titolo: "Dati e statistica descrittiva"
sommario: "Rilevazione dei dati, frequenze, lettura di grafici e istogrammi, media, mediana, moda e dispersione."
---

## Che cosa si osserva

:::definizione{#dati titolo="Popolazione, campione e carattere"}
Un'indagine statistica raccoglie informazioni su un gruppo di persone o di oggetti per descriverlo con dei numeri. Ogni persona o oggetto di cui si raccolgono le informazioni è un'**unità statistica**.

La **popolazione** è l'insieme di tutte le unità a cui si riferisce l'indagine. Quando si osserva soltanto una parte della popolazione, le unità osservate formano il **campione**. Il **carattere**, chiamato anche variabile, è la proprietà che si misura o si registra per ciascuna unità. Le **modalità** sono i valori o le categorie che il carattere può assumere. Per il carattere «mezzo di trasporto» le modalità sono, per esempio, bici, autobus e treno.

Si vuole studiare il tragitto casa-scuola degli iscritti a un istituto nel mese di ottobre. La popolazione è formata da tutti gli iscritti e l'unità statistica è lo studente. Per ogni studente osservato si registrano tre caratteri:

- il mezzo abituale;
- il numero di cambi;
- il tempo di viaggio in minuti.

Se i tempi si misurano ogni mattina, lo stesso studente fornisce più osservazioni, una per ogni viaggio. Perciò per il conteggio finale si specifica se si riferisce ai viaggi oppure agli studenti.
:::

:::esempio{titolo="La misura e la registrazione"}
I caratteri sono di due tipi.

- Un carattere **qualitativo** ha come modalità parole o categorie. È **nominale** se le categorie non hanno un ordine, **ordinale** se lo hanno.
- Un carattere **quantitativo** ha come modalità dei numeri. È **discreto** se assume valori isolati, come i numeri interi che si ottengono contando. È **continuo** se può assumere qualsiasi valore di un intervallo, come una durata o una lunghezza.

Nell'indagine sui tragitti:

- il mezzo abituale è **qualitativo nominale**, perché bici, autobus e treno sono categorie senza ordine;
- un giudizio espresso come scarso, adeguato e buono è qualitativo ordinale, perché scarso viene prima di adeguato e adeguato viene prima di buono;
- il numero di cambi è quantitativo discreto, perché assume valori interi: $0$, $1$, $2$, …;
- la durata del viaggio è quantitativa continua, perché può assumere qualsiasi valore positivo in un intervallo, anche se il questionario la fa registrare al minuto intero.

Un tempo registrato come $12$ minuti, arrotondato al minuto più vicino, corrisponde a una durata compresa fra $11{,}5$ minuti, incluso, e $12{,}5$ minuti, escluso. I mezzi minuti si arrotondano verso l'alto, quindi $11{,}5$ diventa $12$ e $12{,}5$ diventa $13$.
:::

:::attenzione
Per registrare i dati più in fretta si possono assegnare ai mezzi dei codici: $1$ alla bici, $2$ all'autobus, $3$ al treno. Questi numeri sono etichette. Scambiando i codici $1$ e $3$ i viaggi restano gli stessi, mentre la media dei codici cambia. Con due viaggi in bici e uno in treno la media dei codici è
$$
\frac{1+1+3}{3}=\frac53,
$$
e con i codici scambiati diventa
$$
\frac{3+3+1}{3}=\frac73.
$$
La media dei codici dipende quindi dalla codifica scelta. Restano significativi i conteggi o le quote di ciascun mezzo.
:::

## Frequenze e denominatori

:::definizione{#frequenze titolo="Frequenze assolute e relative"}
La **frequenza assoluta** di una modalità è il numero di volte in cui la modalità compare nei dati. Si indica con $n_i$, dove l'indice $i$ numera le modalità: $n_1$ per la prima, $n_2$ per la seconda, e così via. Il **totale** $N$ è il numero di tutte le osservazioni. La **frequenza relativa** $f_i$ è la frequenza assoluta divisa per il totale $N>0$, cioè la parte del totale che ha quella modalità.

Le modalità sono **disgiunte**, cioè nessuna osservazione appartiene a due modalità, ed **esaustive**, cioè ogni osservazione appartiene a una modalità. Con queste due condizioni ogni osservazione si conta una sola volta.

Il simbolo $\sum$ (sigma maiuscola, una lettera greca) indica una somma. La scrittura $\sum_i n_i$ si legge «somma degli $n_i$» e vale $n_1+n_2+\cdots$, fino all'ultima modalità.

$$
N=\sum_i n_i,\qquad
f_i=\frac{n_i}{N},\qquad
\sum_i f_i=\frac{\sum_i n_i}{N}=1.
$$

La **percentuale** si ottiene calcolando $100f_i$ e aggiungendo il simbolo $\%$. Per esempio $f_i=0{,}4$ corrisponde a $40\%$. Se il totale è zero, non si può calcolare alcuna frequenza relativa, perché la divisione per zero non è definita.

La **frequenza cumulata** di un valore è il numero di osservazioni minori o uguali a quel valore. Si ottiene sommando la frequenza di quel valore e le frequenze di tutti i valori che lo precedono. La cumulata ha senso quando i valori hanno un ordine. Si può chiedere quanti studenti abbiano letto al massimo due libri oppure quanti giudizi siano almeno adeguati. I mezzi di trasporto invece non hanno un ordine, quindi mettere prima la bici o l'autobus cambierebbe arbitrariamente i risultati della cumulata.
:::

:::esempio{titolo="Lettura di una tabella di frequenze"}
Venti studenti hanno registrato il numero di libri letti in un mese, quindi $N=20$. La riga dei conteggi dice che $8$ studenti hanno letto esattamente due libri. La loro frequenza relativa è $\dfrac{8}{20}=0{,}4=40\%$. La riga cumulata dice che $16$ studenti ne hanno letti al massimo due. La quota corrispondente è $\dfrac{16}{20}=80\%$.

| Libri letti | $0$ | $1$ | $2$ | $3$ |
|---|---:|---:|---:|---:|
| Frequenza assoluta | $3$ | $5$ | $8$ | $4$ |
| Frequenza relativa | $15\%$ | $25\%$ | $40\%$ | $20\%$ |
| Cumulata assoluta | $3$ | $8$ | $16$ | $20$ |

Nel diagramma a barre l'asse orizzontale riporta il numero $x$ di libri e l'altezza di ogni barra è il numero $n$ di studenti con quel valore.

::grafico{assi=0 xmin=-1.2 xmax=4.15 ymin=-1.3 ymax=10 vettori="-0.62,0,3.95,0;-0.62,0,-0.62,9.5" poligoni="-0.19,0 0.19,0 0.19,3 -0.19,3;0.81,0 1.19,0 1.19,5 0.81,5;1.81,0 2.19,0 2.19,8 1.81,8;2.81,0 3.19,0 3.19,4 2.81,4" etichette="-0.10,3.55,3;0.9,5.55,5;1.9,8.55,8;2.9,4.55,4;-0.1,-0.75,0;0.9,-0.75,1;1.9,-0.75,2;2.9,-0.75,3;3.78,-0.75,x;-0.93,9.45,n" titolo="$x$ è il numero di libri, $n$ il numero di studenti con quel valore"}

La cumulata cresce aggiungendo ogni volta il conteggio della colonna successiva:
$$
\begin{aligned}
&\text{fino a } 0: && 3,\\[3pt]
&\text{fino a } 1: && 3+5=8,\\[3pt]
&\text{fino a } 2: && 8+8=16,\\[3pt]
&\text{fino a } 3: && 16+4=20.
\end{aligned}
$$
La cumulata fino al valore $x$ si indica con $N(x)$, quindi $N(1)=8$ e $N(2)=16$. Se si avesse soltanto la riga cumulata, la frequenza di $2$ si ritroverebbe con la differenza $N(2)-N(1)=16-8=8$. L'ultima cumulata coincide con il totale $N=20$.

Nel secondo grafico la cumulata $N(x)$ resta costante fra due valori osservati e sale con un salto in corrispondenza di ciascuno di essi. L'altezza del salto è la frequenza di quel valore. Il pallino pieno indica il valore della cumulata nel punto del salto, il pallino vuoto il valore che la cumulata aveva subito prima del salto.

::grafico{xmin=-0.55 xmax=4.2 ymin=-0.65 ymax=22 nomi="x,N(x)" linee="-0.48,0 0,0;0,3 1,3;1,8 2,8;2,16 3,16;3,20 3.9,20" punti="0,0,vuoto;0,3,pieno;1,3,vuoto;1,8,pieno;2,8,vuoto;2,16,pieno;3,16,vuoto;3,20,pieno" etichette="0.23,4.3,3;1.25,9.4,8;2.24,17.4,16;3.30,20.7,20" titolo="Il salto in $x=2$ aggiunge gli studenti con esattamente due libri"}
:::

:::osservazione
Si confrontano due turni di studenti:

- nel primo turno $9$ studenti su $18$ usano la bici;
- nel secondo turno $12$ studenti su $30$ usano la bici.

Il secondo turno ha più ciclisti, perché $12>9$. Le quote dei ciclisti sono invece
$$
\frac{9}{18}=\frac12=0{,}5,\qquad \frac{12}{30}=\frac25=0{,}4,
$$
quindi la quota è più alta nel primo turno. Per confrontare quanto è diffusa la bici in due gruppi di numerosità diversa si confrontano perciò le quote, ciascuna calcolata sul totale del proprio gruppo.
:::

## Diagrammi a barre, settori e scale

:::osservazione{#grafici titolo="Leggere l'asse verticale"}
Un **diagramma a barre** è un grafico che disegna una barra separata per ogni modalità. Le modalità stanno sull'asse orizzontale. L'altezza della barra è la frequenza della modalità, assoluta (un conteggio) o relativa (una quota), e si legge sull'asse verticale. Prima di leggere un'altezza si guardano il nome dell'asse verticale, l'unità di misura e la distanza numerica fra due tacche, cioè fra due trattini numerati dell'asse. Questo controllo distingue un valore del carattere, letto sull'asse orizzontale, dalla frequenza con cui è stato osservato, letta sull'asse verticale.
:::

:::esempio{titolo="Gli stessi dati con due scale"}
Una biblioteca presta $48$ libri in una settimana e $54$ in quella successiva. Nel primo grafico $s$ indica la settimana, $n$ il conteggio dei prestiti, e la scala verticale parte da zero. Il confronto dà
$$
54-48=6\ \text{prestiti in più},\qquad \frac{54}{48}=\frac{54\div6}{48\div6}=\frac98.
$$

::grafico{xmin=-0.3 xmax=3.3 ymin=0 ymax=60 nomi="s,n" poligoni="0.73,0 1.27,0 1.27,48 0.73,48;1.73,0 2.27,0 2.27,54 1.73,54" etichette="0.87,51,48;1.87,57,54" titolo="Conteggio dei prestiti per settimana $s$, con origine a zero"}

Nel secondo grafico l'asse verticale parte da $45$. Delle due barre si vedono soltanto le parti alte
$$
48-45=3,\qquad 54-45=9.
$$
La seconda parte visibile è alta $\dfrac93=3$ volte la prima, mentre il rapporto dei conteggi continua a essere $\dfrac98$. Il secondo grafico rende più evidente lo scarto perché riserva lo stesso spazio verticale a un intervallo di valori più piccolo.

::grafico{xmin=-0.3 xmax=3.3 ymin=45 ymax=56.5 nomi="s,n" poligoni="0.73,45 1.27,45 1.27,48 0.73,48;1.73,45 2.27,45 2.27,54 1.73,54" etichette="0.87,48.55,48;1.87,54.65,54" titolo="Lo stesso conteggio con origine visibile a 45 prestiti"}
:::

:::esempio{titolo="Dal conteggio all'angolo"}
Un **diagramma circolare**, detto anche diagramma a torta, divide un cerchio in settori, uno per ogni modalità. Un settore è la parte del cerchio compresa fra due raggi. L'angolo del settore si indica con $\alpha_i$ (alfa, una lettera greca) e vale
$$
\alpha_i=360^\circ\cdot f_i,
$$
perché l'intero giro misura $360^\circ$ e ogni modalità ne occupa la stessa parte che ha fra le osservazioni.

Quaranta studenti scelgono una delle tre attività $A$, $B$ e $C$, con $20$, $10$ e $10$ preferenze.
$$
\begin{aligned}
A:&\quad f=\frac{20}{40}=\frac12, && \alpha=360^\circ\cdot\frac12=180^\circ,\\[5pt]
B:&\quad f=\frac{10}{40}=\frac14, && \alpha=360^\circ\cdot\frac14=90^\circ,\\[5pt]
C:&\quad f=\frac{10}{40}=\frac14, && \alpha=360^\circ\cdot\frac14=90^\circ.
\end{aligned}
$$
La somma dei tre angoli è $180^\circ+90^\circ+90^\circ=360^\circ$, l'intero giro. Nel grafico $A$ occupa la metà superiore del cerchio, $B$ e $C$ un quarto ciascuno nella metà inferiore.

::grafico{assi=0 uguale=1 xmin=-1.3 xmax=1.3 ymin=-1.22 ymax=1.22 curve="cos(t),sin(t),0,6.2832" poligoni="-1,0 -0.966,0.259 -0.866,0.5 -0.707,0.707 -0.5,0.866 -0.259,0.966 0,1 0.259,0.966 0.5,0.866 0.707,0.707 0.866,0.5 0.966,0.259 1,0" linee="-1,0 1,0;0,0 0,-1" etichette="-0.25,0.43,A 180°;-0.65,-0.45,B 90°;0.18,-0.45,C 90°" titolo="L'angolo di ciascun settore è proporzionale alle preferenze"}
:::

## Classi e istogrammi

:::definizione{#istogrammi titolo="Perché conta l'area del rettangolo"}
Un carattere continuo, come una durata, assume molti valori diversi. Per riassumerli si raggruppano in **classi**, cioè intervalli di valori consecutivi. La scrittura $[a_i,b_i)$ indica i valori $x$ con $a_i\le x<b_i$. Il segno $[$ indica che l'estremo $a_i$ è incluso, il segno $)$ indica che l'estremo $b_i$ è escluso. Per esempio la classe $[0,3)$ contiene $0$ e $2{,}9$, mentre il valore $3$ appartiene alla classe successiva $[3,9)$. Con questa convenzione ogni valore di confine appartiene a una sola classe.

Un **istogramma** rappresenta le classi con rettangoli accostati. La base di ogni rettangolo è l'**ampiezza** della classe, cioè la differenza $h_i=b_i-a_i$ fra i due estremi. Il numero $n_i$ di osservazioni della classe è rappresentato dall'**area** del rettangolo. L'area è base per altezza, quindi l'altezza è la **densità di frequenza assoluta** $d_i$, cioè il numero di osservazioni per ogni unità di ampiezza.

$$
h_i d_i=n_i,\qquad d_i=\frac{n_i}{h_i}.
$$

Se la base si misura in minuti, la densità si misura in osservazioni al minuto. Il prodotto di minuti per osservazioni al minuto restituisce quindi un conteggio. Si può costruire anche un istogramma a densità relativa, usando $\dfrac{f_i}{h_i}$ come altezza. In quel caso l'area di ogni rettangolo è la frequenza relativa della classe, quindi la somma delle aree vale uno.
:::

:::esempio{titolo="La barra più alta e la classe più numerosa"}
Si registrano $30$ tempi di attesa, in minuti. Il tempo $3$ cade nella seconda classe, perché la prima classe $[0,3)$ esclude il $3$.

| Durata (min) | Ampiezza (min) | Attese | Densità (attese/min) |
|---|---:|---:|---:|
| $[0,3)$ | $3$ | $12$ | $4$ |
| $[3,9)$ | $6$ | $18$ | $3$ |

Le altezze dei rettangoli sono le densità, che si ricavano dividendo le attese per l'ampiezza:
$$
d_1=\frac{12}{3}=4,\qquad d_2=\frac{18}{6}=3.
$$

::grafico{xmin=-0.8 xmax=10.2 ymin=-0.35 ymax=5.45 nomi="t,d" poligoni="0,0 3,0 3,4 0,4;3,0 9,0 9,3 3,3" linee="0,4 3,4 3,0;3,3 9,3 9,0" etichette="0.74,2.18,12 attese;4.55,1.48,18 attese" titolo="$t$ è in minuti e $d$ in attese al minuto"}

Il rettangolo di sinistra è più alto ma ha area $3\cdot4=12$. Quello di destra ha area $6\cdot3=18$, quindi rappresenta più attese. La classe più numerosa è la seconda, anche se il suo rettangolo è più basso.

Usando i conteggi come altezze si disegnerebbero invece aree $3\cdot12=36$ e $6\cdot18=108$. Il rapporto visivo sarebbe $\dfrac{108}{36}=3$, mentre il rapporto corretto fra le attese è $\dfrac{18}{12}=1{,}5$. Con basi uguali il confronto fra altezze e quello fra aree darebbero lo stesso rapporto, perché le basi uguali si semplificano.
:::

:::osservazione{titolo="Soglie dentro e fuori le classi"}
Dalla tabella si sa che esattamente $12$ attese durano meno di tre minuti, perché la soglia $3$ coincide con il confine fra le due classi. La soglia di cinque minuti cade invece dentro la seconda classe $[3,9)$. Le $12$ attese della prima classe durano certamente meno di cinque minuti. Delle $18$ attese della seconda classe ne possono durare meno di cinque minuti da nessuna a tutte. In assenza dei valori individuali il conteggio può quindi andare da $12$ a $12+18=30$. L'istogramma raggruppa le osservazioni, e il rettangolo, alto uguale su tutta la classe, rappresenta una densità della classe nel suo complesso.

Anche la somma delle attese dipende dai dati all'interno delle classi. I gruppi di valori $1,1,4,4$ e $2,2,8,8$ darebbero lo stesso istogramma con le due classi della tabella, perché ciascuna classe conterrebbe due attese. Le medie sarebbero però
$$
\frac{1+1+4+4}{4}=\frac{10}{4},\qquad \frac{2+2+8+8}{4}=\frac{20}{4}
$$
minuti. Se sono rimaste soltanto le frequenze delle classi, il valore esatto della media può essere perduto.
:::

## Media aritmetica e media pesata

::::teorema{#media titolo="Dalla somma dei valori alla media"}
La **media aritmetica** di $N>0$ osservazioni numeriche è la loro somma divisa per $N$. Le osservazioni si indicano con $x_1,x_2,\ldots,x_N$ e la media con $\bar x$, che si legge «$x$ segnato». Per i dati $3,5,10$ la media è $\bar x=\dfrac{3+5+10}{3}=\dfrac{18}{3}=6$.

Quando un valore si ripete, la somma si accorcia con una moltiplicazione. Per i dati $2,2,2,5$ la somma $2+2+2+5$ vale $2\cdot3+5\cdot1=11$. In una tabella di frequenze, a ogni valore distinto $v_i$ corrisponde la sua frequenza $n_i$, e il valore contribuisce alla somma con il prodotto $v_i n_i$. Il calcolo che si ottiene si chiama **media pesata**, perché ogni valore conta tanto quanto la sua frequenza, detta anche peso.

$$
\bar x=\frac{x_1+\cdots+x_N}{N}
=\frac{\sum_i v_i n_i}{\sum_i n_i}.
$$

:::dimostrazione
Gli **addendi** sono i numeri che si sommano. Nella somma $x_1+\cdots+x_N$ il valore $v_i$ compare in $n_i$ addendi.

Raggruppando questi addendi uguali, il valore $v_i$ contribuisce alla somma per $v_i n_i$.

Sommando i contributi di tutti i valori distinti si ottiene il numeratore $\sum_i v_i n_i$.

Ogni osservazione è contata in una sola frequenza, quindi il numero degli addendi è $\sum_i n_i=N$.

Il numeratore e il denominatore restano dunque uguali a quelli calcolati con l'elenco completo, perciò le due frazioni sono uguali.
:::
::::

:::esempio{titolo="La media come punto di equilibrio"}
I dati $1,1,4,4,4,7$ contengono il valore $1$ due volte, il valore $4$ tre volte e il valore $7$ una volta. La media pesata è
$$
\bar x=\frac{1\cdot2+4\cdot3+7\cdot1}{6}=\frac{2+12+7}{6}=\frac{21}{6}=\frac72=3{,}5.
$$
Il risultato sta fra il minimo $1$ e il massimo $7$, benché non compaia fra le osservazioni.

Lo **scarto** di un'osservazione dalla media è la differenza fra l'osservazione e la media. Se i valori sono posizioni sulla retta, gli scarti misurano le distanze da $3{,}5$, con il segno meno a sinistra.

- A sinistra di $3{,}5$ ci sono le due osservazioni uguali a $1$, ciascuna a distanza $2{,}5$. Il contributo è $2\cdot2{,}5=5$.
- A destra ci sono le tre osservazioni uguali a $4$, a distanza $0{,}5$, e l'osservazione $7$, a distanza $3{,}5$. I contributi sono $3\cdot0{,}5=1{,}5$ e $3{,}5$, con somma $5$.

I due contributi sono uguali, quindi la somma degli scarti è $-5+5=0$. Nel grafico ogni punto è un'osservazione e la linea tratteggiata segna la media.

::grafico{xmin=-0.7 xmax=8.2 ymin=-0.4 ymax=4.2 nomi="x," punti="1,1;1,2;4,1;4,2;4,3;7,1" segmenti="3.5,0,3.5,3.35" etichette="2.55,3.55,3,5" titolo="Ogni punto rappresenta un'osservazione. Gli scarti a destra e a sinistra di $3{,}5$ si bilanciano."}
:::

:::esempio{titolo="Riunire due gruppi"}
Otto ragazzi impiegano in media $12$ minuti per arrivare al campo sportivo, altri dodici ne impiegano in media $7$. I due gruppi sono disgiunti, cioè nessun ragazzo appartiene a entrambi. Moltiplicando ogni media per il numero di ragazzi del gruppo si ritrovano le durate sommate:
$$
\begin{aligned}
\text{primo gruppo:}&\quad 8\cdot12=96\ \text{minuti},\\[5pt]
\text{secondo gruppo:}&\quad 12\cdot7=84\ \text{minuti},\\[5pt]
\text{tutti:}&\quad \frac{96+84}{8+12}=\frac{180}{20}=9\ \text{minuti}.
\end{aligned}
$$
La media semplice delle due medie, $\dfrac{12+7}{2}=9{,}5$, attribuirebbe a ciascun gruppo lo stesso peso, mentre il secondo gruppo comprende più osservazioni. Per questo la media di tutti è più vicina a $7$.
:::

:::osservazione
Moltiplicando per $N$ i due membri di $\bar x=\dfrac{\sum_i x_i}{N}$ si ottiene $N\bar x=\sum_i x_i$. Questa uguaglianza è un'**identità**, cioè vale per qualsiasi gruppo di dati. Con essa si torna dalla media alla somma quando manca un dato. Se tre dati hanno media $10$, la loro somma è $3\cdot10=30$. Se due di essi sommano $18$, il terzo vale $30-18=12$.

Dall'identità segue anche che la somma degli scarti dalla media è zero:
$$
\sum_i (x_i-\bar x)=\sum_i x_i-N\bar x=0.
$$

Se si aggiunge $b$ a ciascun dato, ognuno degli $N$ addendi cresce di $b$. La somma cresce quindi di $Nb$ e la media cresce di $b$. Se si moltiplica ogni valore per $a$, anche la somma è moltiplicata per $a$ e la media lo è a sua volta. I dati $2,5,11$ hanno media $6$. Aggiungendo $3$ a ogni dato si ottengono $5,8,14$, con media $\dfrac{27}{3}=9=6+3$. Raddoppiando ogni dato si ottengono $4,10,22$, con media $\dfrac{36}{3}=12=2\cdot6$.

Se ogni dato è fra un minimo $m$ e un massimo $M$, ciascuno degli $N$ addendi è fra $m$ e $M$. La somma è quindi fra $Nm$ e $NM$. Dividendo per $N>0$ si ottiene $m\le \bar x\le M$. La media resta quindi nell'intervallo dei dati, e un risultato fuori da quell'intervallo segnala un errore di calcolo, per esempio un denominatore sbagliato.
:::

## Mediana e moda

:::definizione{#mediana-moda titolo="Posizione centrale e frequenza massima"}
La **mediana** di dati numerici è il valore che occupa la posizione centrale quando i dati sono messi in ordine crescente. Si indica con $\operatorname{Med}$. Nell'ordinamento le ripetizioni si contano, quindi nei dati $4,4,6$ il valore $4$ occupa la prima e la seconda posizione. Il dato che occupa la posizione $k$ si indica con $x_{(k)}$.

- Se il numero di dati è dispari, $N=2k+1$, si prende il valore in posizione $k+1$. Con $5$ dati si ha $k=2$ e la posizione centrale è la terza: i dati $3,8,5,1,9$, ordinati, diventano $1,3,5,8,9$, e la mediana è $5$.
- Se il numero di dati è pari, $N=2k>0$, si fa la media dei valori nelle posizioni $k$ e $k+1$. Con $6$ dati si ha $k=3$ e le posizioni centrali sono la terza e la quarta.

In una tabella di frequenze si possono trovare quelle posizioni usando la cumulata. Un valore con frequenza $n$, preceduto da una cumulata $c$, occupa le posizioni da $c+1$ a $c+n$.

La **moda** è una modalità di frequenza massima, cioè una modalità che compare più volte di ogni altra. Più modalità sono mode quando condividono la stessa frequenza massima. Si può trovare una moda anche per caratteri qualitativi, perché basta confrontare i conteggi: se $5$ studenti usano la bici, $8$ l'autobus e $2$ il treno, la moda è l'autobus.
:::

:::esempio{titolo="La mediana fra due valori e due mode"}
I dati $2,2,4,7,7,9$ hanno sei osservazioni, quindi $N=6=2\cdot3$ e le posizioni centrali sono la terza e la quarta. Le posizioni si leggono dalla cumulata:

- il valore $2$ ha cumulata $2$ e occupa le posizioni prima e seconda;
- la cumulata passa da $2$ a $3$ in corrispondenza di $4$, quindi $4$ è il terzo valore;
- il valore $7$ occupa le posizioni dalla quarta alla quinta, quindi il quarto valore è $7$;
- il valore $9$ occupa la sesta posizione.

La mediana è
$$
\operatorname{Med}=\frac{x_{(3)}+x_{(4)}}{2}=\frac{4+7}{2}=5{,}5.
$$
La frequenza massima è due, raggiunta dalle modalità $2$ e $7$, quindi i dati hanno due mode.

::grafico{xmin=-0.7 xmax=10.2 ymin=-0.4 ymax=3.4 nomi="x," punti="2,1;2,2;4,1;7,1;7,2;9,1" segmenti="5.5,0,5.5,2.2" etichette="4.64,2.43,5,5" titolo="I due valori centrali sono $4$ e $7$, ai lati della mediana"}

Si sostituisce ora il valore $9$ con $21$. Il valore $21$ occupa ancora la sesta posizione, quindi i due valori centrali e le due frequenze massime restano uguali, e con essi mediana e mode. La somma dei dati invece cresce di $21-9=12$, perciò la media cresce di $\dfrac{21-9}{6}=2$. Un valore estremo può quindi cambiare la media molto più della mediana quando la sua posizione nell'ordine resta la stessa.
:::

## Dispersione ed estremi

:::definizione{#dispersione titolo="Campo di variazione"}
La **dispersione** di un gruppo di dati indica quanto i valori sono sparsi, cioè lontani fra loro. Il **campo di variazione**, indicato con $R$, è il massimo meno il minimo: per i dati $3,8,5$ vale $R=8-3=5$. Si esprime nella stessa unità dei dati, quindi per tempi in minuti è in minuti.

Il campo di variazione dipende soltanto da due osservazioni, il minimo e il massimo. Perciò cambia subito quando si sposta un estremo e può rimanere uguale quando cambiano le osservazioni interne. I dati $3,4,8$ e $3,7,8$ hanno entrambi $R=8-3=5$.
:::

:::esempio{titolo="Stessa media, diversa dispersione"}
I dati $6,7,8$ e $2,7,12$ hanno entrambi media e mediana $7$. Il primo gruppo è contenuto nell'intervallo di ampiezza $8-6=2$, il secondo occupa l'intervallo di ampiezza $12-2=10$. Nel grafico le due righe usano lo stesso asse dei valori, così le distanze sono confrontabili, e la linea tratteggiata segna il centro comune $7$.

::grafico{xmin=-0.8 xmax=13.2 ymin=-0.35 ymax=3.3 nomi="x," punti="6,2;7,2;8,2;2,1;7,1;12,1" linee="6,2 8,2;2,1 12,1" segmenti="7,0,7,2.6" etichette="2.55,2.2,primo;2.55,1.2,secondo;6.47,2.77,7" titolo="La linea tratteggiata è lo stesso centro per due ampiezze diverse"}

Viceversa, i dati $2,3,3,3,12$ e $2,7,10,11,12$ hanno lo stesso campo di variazione $12-2=10$, ma mediane $3$ e $10$. Un gruppo di dati è quindi descritto meglio da un valore centrale insieme a un indice di dispersione e, quando è possibile, dai dati stessi o dal loro grafico.
:::

## Come si raccolgono i dati

:::osservazione{#rilevazione titolo="Chi può entrare nel campione"}
Il luogo in cui si raccolgono i dati decide chi può entrare nel campione. Un sondaggio sui tragitti condotto soltanto alla rastrelliera delle bici della scuola raggiunge più facilmente chi usa la bici. Aumentando il numero di interviste nello stesso punto, gli intervistati restano in maggioranza ciclisti, quindi quella preferenza nella selezione resta inalterata. Per descrivere tutti gli iscritti si può selezionare un insieme di studenti dall'elenco delle classi e contattare anche chi raggiunge la scuola in altri modi.

Anche il momento della rilevazione influisce sul dato. Se si vuole stimare il numero di studenti che vanno abitualmente a piedi, un giorno di pioggia descrive soltanto i tragitti di quel giorno. Rilevando i dati in più giorni, con condizioni del tempo diverse, si risponde alla domanda sul comportamento abituale. Infine la domanda del questionario offre una risposta a ogni studente quando comprende tutte le risposte pertinenti, per esempio quando distingue «solo autobus» da «autobus e treno».
:::

:::esempio{titolo="Risposte valide e risposte mancanti"}
Dei $50$ studenti invitati a un sondaggio, $32$ rispondono e $50-32=18$ non rispondono. Il **tasso di risposta** è la quota degli invitati che ha risposto, cioè $\dfrac{32}{50}=64\%$. Fra chi risponde, $16$ dichiarano di andare a piedi. Il $50\%$ è quindi la quota fra le risposte, perché
$$
\frac{16}{32}=\frac12=50\%
$$
ha denominatore $32$. Per i $18$ assenti il mezzo di trasporto è sconosciuto, quindi fra tutti gli invitati si conoscono soltanto due estremi:
$$
\begin{aligned}
\text{nessun assente va a piedi:}&\quad \frac{16}{50}=32\%,\\[5pt]
\text{tutti gli assenti vanno a piedi:}&\quad \frac{16+18}{50}=\frac{34}{50}=68\%.
\end{aligned}
$$
Nel grafico il rettangolo rappresenta i $50$ invitati: a sinistra le $32$ risposte, divise fra $16$ a piedi e $16$ con altri mezzi, a destra i $18$ non rispondenti.

::grafico{assi=0 xmin=-1.0 xmax=51.0 ymin=-0.35 ymax=3.65 linee="0,0 50,0 50,2 0,2 0,0;16,0 16,2;32,0 32,2" poligoni="0,0 16,0 16,2 0,2" etichette="3.4,0.95,16 a piedi;18.0,0.95,16 altri mezzi;34.1,0.97,18 mancanti;1.1,2.65,32 risposte;34.1,2.65,non rispondenti" titolo="Solo per chi ha risposto si conosce il mezzo di trasporto"}
:::

:::osservazione{#controlli titolo="A quale domanda può rispondere il riepilogo"}
Lo stesso gruppo di dati si riassume in modi diversi a seconda della domanda.

- Per predisporre i posti su un autobus conta il numero di studenti che lo prendono, cioè una frequenza assoluta.
- Per confrontare la diffusione dell'autobus in due istituti con un numero diverso di iscritti si usano le quote, cioè le frequenze relative.
- Per descrivere una durata tipica del tragitto si confronta la mediana con la media e si osserva se pochi tragitti molto lunghi spiegano la differenza.

Il denominatore, l'unità di misura e il modo in cui sono state raccolte le osservazioni si leggono insieme al risultato.
:::
