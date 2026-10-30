---
titolo: Medie, tabelle e grafici
sommario: Come si contano e si riassumono i dati con frequenze, media, mediana, moda e indici di variabilità, come cambia la media quando si aggiunge o si toglie un dato e come si leggono tabelle a doppia entrata, diagrammi a barre, istogrammi, diagrammi a torta e diagrammi cartesiani.
---

## Dati e frequenze

:::definizione{#dati-e-caratteri titolo="Dati e carattere"}
Un'indagine statistica raccoglie informazioni su un gruppo di persone o di oggetti, detto **popolazione**. La proprietà che si osserva su ciascun elemento si chiama **carattere**, e il valore osservato si chiama **dato** o modalità. Un carattere è *quantitativo* se i dati sono numeri, come l'età o il numero di componenti di una famiglia, ed è *qualitativo* se i dati sono parole, come il colore preferito o il titolo di studio. La distinzione ha una conseguenza pratica, perché la media si calcola solo per un carattere quantitativo, mentre la moda si calcola per entrambi i tipi.
:::

:::definizione{#frequenza-assoluta titolo="Frequenza assoluta"}
La **frequenza assoluta** di un dato è il numero di volte in cui il dato compare. Le frequenze si raccolgono in una tabella, e la loro somma è il numero totale $N$ degli elementi osservati. In un'indagine su $20$ famiglie si conta il numero di componenti di ciascuna:

| componenti | $1$ | $2$ | $3$ | $4$ | $5$ | totale |
|---|---|---|---|---|---|---|
| famiglie | $6$ | $5$ | $4$ | $3$ | $2$ | $20$ |

La frequenza assoluta del dato $3$ è $4$, cioè $4$ famiglie hanno tre componenti. Come controllo, $6 + 5 + 4 + 3 + 2 = 20$.
:::

:::definizione{#frequenza-relativa titolo="Frequenza relativa e frequenza percentuale"}
La **frequenza relativa** di un dato è il rapporto tra la sua frequenza assoluta e il totale $N$:
$$
f = \frac{\text{frequenza assoluta}}{N} .
$$
Moltiplicata per $100$ dà la **frequenza percentuale**. La frequenza relativa serve a confrontare gruppi di grandezza diversa. Nella tabella delle famiglie il dato $1$ ha frequenza relativa $\dfrac{6}{20} = 0{,}3$, cioè il $30\%$; il dato $2$ ha frequenza relativa $\dfrac{5}{20} = 0{,}25$, cioè il $25\%$. Le frequenze relative di tutti i dati hanno somma $1$, e le frequenze percentuali hanno somma $100\%$.
:::

:::definizione{#frequenze-cumulate titolo="Frequenze cumulate"}
Per un carattere quantitativo, la **frequenza cumulata** di un dato è la somma delle frequenze di quel dato e di tutti i dati minori. Serve a rispondere alle domande del tipo "quanti hanno *al più* …". Per le famiglie le frequenze cumulate sono
$$
6, \qquad 6 + 5 = 11, \qquad 11 + 4 = 15, \qquad 15 + 3 = 18, \qquad 18 + 2 = 20 .
$$
Quindi $15$ famiglie su $20$, cioè il $75\%$, hanno al più tre componenti. Le famiglie con *almeno* quattro componenti sono le rimanenti, $20 - 15 = 5$.
:::

## Media aritmetica e media ponderata

:::definizione{#media-aritmetica titolo="Media aritmetica"}
La **media aritmetica** di $n$ numeri $x_1, x_2, \ldots, x_n$ è la loro somma divisa per $n$:
$$
\bar{x} = \frac{x_1 + x_2 + \cdots + x_n}{n} .
$$
La media è il valore che ogni dato dovrebbe avere perché la somma resti la stessa. I voti $6$, $7$, $7$, $8$, $9$, $5$ hanno somma $42$, quindi la loro media è $\dfrac{42}{6} = 7$, e sei voti tutti uguali a $7$ hanno la stessa somma $42$. La media è sempre compresa tra il dato minimo e il dato massimo, e questo fornisce un primo controllo sul risultato.
:::

:::definizione{#media-ponderata titolo="Media ponderata"}
Quando i dati non hanno tutti la stessa importanza, a ciascun dato $x_i$ si associa un **peso** $p_i$ e si calcola la **media ponderata**
$$
\bar{x} = \frac{x_1 \cdot p_1 + x_2 \cdot p_2 + \cdots + x_n \cdot p_n}{p_1 + p_2 + \cdots + p_n} .
$$
Si divide per la somma dei pesi e non per il numero dei dati. Uno studente ha superato quattro esami con i voti $24$, $28$, $30$, $26$, che valgono rispettivamente $6$, $9$, $6$, $9$ crediti. La media pesata sui crediti è
$$
\frac{24 \cdot 6 + 28 \cdot 9 + 30 \cdot 6 + 26 \cdot 9}{6 + 9 + 6 + 9} = \frac{810}{30} = 27 .
$$
La media ponderata serve anche per i dati raccolti in una tabella di frequenze, perché in quel caso i pesi sono le frequenze.
:::

:::esempio{titolo="Media da una tabella di frequenze"}
Nella tabella delle $20$ famiglie ogni numero di componenti si moltiplica per la sua frequenza:
$$
\bar{x} = \frac{1 \cdot 6 + 2 \cdot 5 + 3 \cdot 4 + 4 \cdot 3 + 5 \cdot 2}{20} = \frac{50}{20} = 2{,}5 .
$$
La famiglia media ha quindi $2{,}5$ componenti. La media di un carattere che assume solo valori interi può essere un numero decimale, perché descrive il gruppo e non una singola famiglia.
:::

:::attenzione{#media-di-gruppi}
La media di due gruppi riuniti *non* è in generale la media delle due medie. In una classe di $20$ studenti la media è $6$ e in un'altra di $30$ studenti la media è $7$. La media dei $50$ studenti è la media ponderata con pesi $20$ e $30$:
$$
\frac{6 \cdot 20 + 7 \cdot 30}{50} = \frac{330}{50} = 6{,}6 .
$$
La semplice media delle medie, $6{,}5$, sarebbe corretta solo con due gruppi di uguale numerosità. La media complessiva è più vicina alla media del gruppo più numeroso.
:::

## Mediana e moda

:::definizione{#mediana titolo="Mediana"}
La **mediana** di un insieme di dati numerici è il valore centrale dei dati disposti in ordine crescente.

- Se il numero $n$ dei dati è dispari, la mediana è il dato che occupa la posizione centrale $\dfrac{n + 1}{2}$. I dati $3$, $8$, $5$, $12$, $4$ ordinati diventano $3$, $4$, $5$, $8$, $12$, quindi la mediana è $5$.
- Se $n$ è pari, i dati centrali sono due e la mediana è la loro media. I dati $2$, $9$, $4$, $7$ ordinati diventano $2$, $4$, $7$, $9$, quindi la mediana è $\dfrac{4 + 7}{2} = 5{,}5$.

La mediana divide i dati in due metà, perché almeno metà dei dati è minore o uguale alla mediana e almeno metà è maggiore o uguale. Nella tabella delle $20$ famiglie i dati centrali sono il decimo e l'undicesimo; le frequenze cumulate $6$ e $11$ mostrano che entrambi valgono $2$, perciò la mediana è $2$.
:::

:::definizione{#moda titolo="Moda"}
La **moda** è il dato con la frequenza più alta. Si calcola anche per un carattere qualitativo; per esempio, se in un sondaggio sul mezzo di trasporto il più scelto è l'autobus, la moda è "autobus". Nella tabella delle famiglie la moda è $1$, perché $6$ è la frequenza maggiore. Un insieme di dati può avere più mode, quando due o più dati hanno la stessa frequenza massima. La moda è un dato e va distinta dalla sua frequenza. Nelle famiglie la moda è $1$, mentre $6$ è il numero di famiglie con un componente.
:::

:::osservazione{#valori-anomali titolo="Media e mediana con un valore anomalo"}
La media dipende da tutti i dati, compreso un valore molto lontano dagli altri; la mediana dipende solo dalla posizione dei dati centrali. In un piccolo ufficio gli stipendi mensili sono $1500$, $1600$, $1700$, $1800$ e $9400$ euro. La media è
$$
\frac{1500 + 1600 + 1700 + 1800 + 9400}{5} = \frac{16\,000}{5} = 3200 \text{ euro},
$$
mentre la mediana è $1700$ euro. Quattro stipendi su cinque sono minori della media, quindi in questo caso la mediana descrive meglio lo stipendio tipico. Nei quesiti che chiedono di confrontare media e mediana, un dato molto grande fa la media maggiore della mediana, e un dato molto piccolo la fa minore.
:::

## Come cambia la media

:::teorema{#somma-dei-dati titolo="Somma dei dati e media"}
Se $n$ dati hanno media $\bar{x}$, la loro somma è
$$
x_1 + x_2 + \cdots + x_n = n \cdot \bar{x} .
$$
La formula si ottiene moltiplicando per $n$ i due membri della definizione di media. È lo strumento per tutti i quesiti in cui un dato si aggiunge, si toglie o manca, perché quando si aggiunge o si toglie un dato la somma cambia esattamente del valore di quel dato. Se $8$ pacchi pesano in media $15$ kg, il loro peso complessivo è $8 \cdot 15 = 120$ kg.
:::

:::esempio{#aggiungere-un-dato titolo="Aggiungere o togliere un dato"}
Dieci dati hanno media $20$, quindi somma $10 \cdot 20 = 200$. Se si aggiunge il dato $31$, la somma diventa $231$ e i dati diventano $11$, perciò la nuova media è
$$
\frac{231}{11} = 21 .
$$
Allo stesso modo, cinque dati con media $12$ hanno somma $60$; togliendo il dato $20$ restano quattro dati con somma $40$ e media $10$. Un dato maggiore della media, se aggiunto, fa aumentare la media e, se tolto, la fa diminuire. Un dato uguale alla media lascia la media invariata in entrambi i casi.
:::

:::esempio{#dato-mancante titolo="Il dato mancante"}
Uno studente ha preso $5$, $6$ e $7$ nei primi tre compiti e vuole la media di $6{,}5$ sui quattro compiti. La somma dei quattro voti deve essere
$$
4 \cdot 6{,}5 = 26 ,
$$
e la somma dei primi tre è $18$, quindi il quarto voto deve essere $26 - 18 = 8$. In generale il dato mancante è la differenza tra la somma richiesta, cioè il numero dei dati per la media voluta, e la somma dei dati noti.
:::

:::teorema{#trasformazioni-dei-dati titolo="Media di dati trasformati"}
Se a ogni dato si aggiunge lo stesso numero $k$, la media aumenta di $k$. Se ogni dato si moltiplica per lo stesso numero $k$, anche la media si moltiplica per $k$. Infatti nel primo caso la somma aumenta di $n \cdot k$ e, divisa per $n$, aumenta di $k$; nel secondo caso la somma si moltiplica per $k$. I dati $5$, $7$, $8$, $9$, $11$ hanno media $8$; aumentati di $10$ diventano $15$, $17$, $18$, $19$, $21$, con media $18$; moltiplicati per $3$ diventano $15$, $21$, $24$, $27$, $33$, con media $24$. Un aumento percentuale di tutti i dati è una moltiplicazione, perciò uno stipendio medio di $2000$ euro aumentato del $10\%$ per tutti diventa $2000 \cdot 1{,}1 = 2200$ euro.
:::

## Indici di variabilità

:::definizione{#campo-di-variazione titolo="Campo di variazione"}
Due insiemi di dati possono avere la stessa media ed essere molto diversi; per esempio $7$, $7$, $7$ e $1$, $7$, $13$ hanno entrambi media $7$. Gli indici di variabilità misurano quanto i dati sono sparsi. Il più semplice è il **campo di variazione**, cioè la differenza tra il dato massimo e il dato minimo. Se in una settimana le temperature massime vanno da $9$ °C a $20$ °C, il campo di variazione è $20 - 9 = 11$ °C. Il campo di variazione dipende solo da due dati, quindi un solo valore anomalo lo rende molto grande.
:::

:::definizione{#varianza titolo="Varianza e scarto quadratico medio"}
Lo **scarto** di un dato dalla media è la differenza $x_i - \bar{x}$. La somma degli scarti è sempre zero, perché gli scarti positivi e negativi si compensano; per questo si usano i loro quadrati. La **varianza** è la media dei quadrati degli scarti,
$$
\sigma^2 = \frac{(x_1 - \bar{x})^2 + (x_2 - \bar{x})^2 + \cdots + (x_n - \bar{x})^2}{n} ,
$$
e lo **scarto quadratico medio** (o deviazione standard) è la sua radice quadrata, $\sigma = \sqrt{\sigma^2}$, che ha la stessa unità di misura dei dati. Per i dati $5$, $7$, $8$, $9$, $11$, con media $8$, gli scarti sono $-3$, $-1$, $0$, $1$, $3$ e i loro quadrati sono $9$, $1$, $0$, $1$, $9$. Quindi
$$
\sigma^2 = \frac{20}{5} = 4, \qquad \sigma = 2 .
$$
Uno scarto quadratico medio piccolo indica dati raccolti vicino alla media.
:::

:::osservazione{#variabilita-e-trasformazioni titolo="Variabilità di dati trasformati"}
Aggiungendo lo stesso numero a tutti i dati, gli scarti dalla media non cambiano, quindi varianza e scarto quadratico medio restano uguali. Moltiplicando tutti i dati per $k > 0$, gli scarti si moltiplicano per $k$, perciò lo scarto quadratico medio si moltiplica per $k$ e la varianza per $k^2$. I dati $5$, $7$, $8$, $9$, $11$ aumentati di $10$ hanno ancora $\sigma = 2$; moltiplicati per $3$ hanno $\sigma = 6$ e $\sigma^2 = 36$.
:::

## Tabelle a doppia entrata

:::definizione{#tabella-doppia-entrata titolo="Tabella a doppia entrata"}
Una **tabella a doppia entrata** raccoglie le frequenze di due caratteri osservati insieme: le righe corrispondono ai valori di un carattere, le colonne ai valori dell'altro, e ogni casella contiene il numero di elementi che hanno entrambi i valori. L'ultima riga e l'ultima colonna contengono i **totali marginali**. In un'azienda di $120$ dipendenti si osservano il sesso e il tipo di contratto:

| | uomini | donne | totale |
|---|---|---|---|
| tempo pieno | $42$ | $48$ | $90$ |
| part-time | $18$ | $12$ | $30$ |
| totale | $60$ | $60$ | $120$ |

Ogni totale di riga è la somma delle caselle della riga, e lo stesso vale per le colonne. Perciò, se di una riga si conoscono il totale e tutte le caselle tranne una, la casella mancante è la differenza tra il totale e la somma delle altre caselle.
:::

:::osservazione{#percentuali-di-riga-e-colonna titolo="Percentuali su totali diversi"}
Dalla stessa casella si ottengono percentuali diverse, a seconda del totale per cui si divide. Nella tabella dei dipendenti la casella "uomini part-time" contiene $18$.

- Rispetto al totale degli uomini, $\dfrac{18}{60} = 30\%$, cioè il $30\%$ degli uomini lavora part-time.
- Rispetto al totale dei part-time, $\dfrac{18}{30} = 60\%$, cioè il $60\%$ dei part-time sono uomini.
- Rispetto al totale generale, $\dfrac{18}{120} = 15\%$, cioè il $15\%$ dei dipendenti sono uomini part-time.

Il testo del quesito indica il totale di riferimento con le parole "tra", "degli", "sul totale di". Nella frase "la percentuale di uomini *tra* i part-time" il totale di riferimento è quello dei part-time, cioè $30$.
:::

## Grafici statistici

:::definizione{#diagramma-a-barre titolo="Diagramma a barre"}
In un **diagramma a barre** ogni dato è rappresentato da una barra di altezza uguale alla sua frequenza; le barre hanno la stessa larghezza e sono separate. Si usa per caratteri qualitativi o per caratteri quantitativi con pochi valori. Le frequenze si leggono sull'asse verticale, e la barra più alta indica la moda.

::grafico{poligoni="0.7,0 0.7,6 1.3,6 1.3,0;1.7,0 1.7,5 2.3,5 2.3,0;2.7,0 2.7,4 3.3,4 3.3,0;3.7,0 3.7,3 4.3,3 4.3,0;4.7,0 4.7,2 5.3,2 5.3,0" xmin=0 xmax=6 ymin=0 ymax=7 nomi="x,n" legenda=0 titolo="Numero $n$ di famiglie con $x$ componenti, su $20$ famiglie: la barra più alta corrisponde alla moda, cioè $1$ componente"}

:::

:::definizione{#istogramma titolo="Istogramma"}
Quando un carattere quantitativo ha molti valori, i dati si raggruppano in **classi**, cioè intervalli come "da $20$ a $30$ anni". L'**istogramma** rappresenta ogni classe con un rettangolo che ha per base l'intervallo; con classi di uguale ampiezza l'altezza è la frequenza della classe, e i rettangoli sono affiancati senza spazi. L'istogramma mostra le età dei $50$ partecipanti a un corso, con classi di ampiezza $10$ anni; per convenzione ogni classe comprende l'estremo sinistro e non il destro.

::grafico{poligoni="20,0 20,10 30,10 30,0;30,0 30,16 40,16 40,0;40,0 40,12 50,12 50,0;50,0 50,8 60,8 60,0;60,0 60,4 70,4 70,0" xmin=0 xmax=91 ymin=0 ymax=18 nomi="età,n" legenda=0 titolo="Numero $n$ di partecipanti per classe di età, su $50$ partecipanti: $10$ tra $20$ e $30$ anni, $16$ tra $30$ e $40$, $12$ tra $40$ e $50$, $8$ tra $50$ e $60$, $4$ tra $60$ e $70$"}

I partecipanti con almeno $40$ anni sono $12 + 8 + 4 = 24$, cioè il $\dfrac{24}{50} = 48\%$. Con i dati in classi la media esatta non si può calcolare; si approssima usando come dato il valore centrale di ogni classe:
$$
\frac{25 \cdot 10 + 35 \cdot 16 + 45 \cdot 12 + 55 \cdot 8 + 65 \cdot 4}{50} = \frac{2050}{50} = 41 .
$$
:::

:::definizione{#diagramma-a-torta titolo="Diagramma a torta"}
In un **diagramma a torta** (o areogramma) un cerchio è diviso in settori, uno per ogni dato, con ampiezza proporzionale alla frequenza. Poiché l'angolo giro misura $360°$, l'angolo del settore è
$$
\text{angolo} = \frac{\text{frequenza}}{\text{totale}} \cdot 360° .
$$
Ogni punto percentuale corrisponde quindi a $3{,}6°$. Per le $20$ famiglie i settori misurano $\dfrac{6}{20} \cdot 360° = 108°$, poi $90°$, $72°$, $54°$ e $36°$; la somma degli angoli è $360°$. Il calcolo inverso dà la frequenza da un angolo: un settore di $72°$ corrisponde a $\dfrac{72}{360} = \dfrac{1}{5}$, cioè al $20\%$ del totale.

::grafico{assi=0 uguale=1 curve="3*cos(t),3*sin(t),0,6.29" segmenti="0,0,0,3;0,0,2.853,-0.927;0,0,-0.927,-2.853;0,0,-3,0;0,0,-1.763,2.427" etichette="0.81,1.05,x = 1, 108°;0.19,-1.84,x = 2, 90°;-2.28,-1.25,x = 3, 72°;-2.44,0.79,x = 4, 54°;-1.30,1.75,x = 5, 36°" xmin=-3.4 xmax=3.4 ymin=-3.4 ymax=3.4 legenda=0 titolo="Diagramma a torta delle $20$ famiglie secondo il numero $x$ di componenti: il settore di un dato con frequenza $f$ misura $\dfrac{f}{20} \cdot 360°$"}

:::

:::definizione{#diagramma-cartesiano titolo="Diagramma cartesiano"}
Un **diagramma cartesiano** (o grafico a linee) rappresenta l'andamento di una grandezza nel tempo. Sull'asse orizzontale si riporta il tempo, sull'asse verticale il valore della grandezza, e i punti consecutivi sono uniti da segmenti. Un segmento in salita indica un aumento, uno in discesa una diminuzione, e la pendenza indica di quanto la grandezza è cambiata. Il grafico mostra le pratiche evase da un ufficio nei primi sei mesi dell'anno.

::grafico{linee="1,80 2,100 3,90 4,120 5,150 6,120" punti="1,80,pieno;2,100,pieno;3,90,pieno;4,120,pieno;5,150,pieno;6,120,pieno" etichette="0.8,87,80;1.8,107,100;2.8,97,90;3.8,127,120;4.8,157,150;5.8,127,120" xmin=0 xmax=7 ymin=0 ymax=200 nomi="t,n" legenda=0 titolo="Numero $n$ di pratiche evase nel mese $t$, da gennaio ($t = 1$) a giugno ($t = 6$)"}

Tra marzo e aprile e tra aprile e maggio l'aumento è lo stesso, $30$ pratiche. La variazione percentuale invece è diversa, perché si calcola sul valore di partenza: $\dfrac{30}{90} \cdot 100 \approx 33{,}3\%$ tra marzo e aprile e $\dfrac{30}{120} \cdot 100 = 25\%$ tra aprile e maggio. Per la variazione percentuale si rimanda all'argomento su rapporti, proporzioni e percentuali.
:::

:::attenzione
Il segmento più ripido di un diagramma cartesiano indica la variazione *assoluta* maggiore, e non sempre la variazione percentuale maggiore. Nel grafico delle pratiche i segmenti da marzo ad aprile e da aprile a maggio salgono entrambi di $30$, ma l'aumento percentuale maggiore è il primo, perché parte da un valore più basso. Per la stessa ragione un aumento di $10$ su un valore di partenza $20$ vale il $50\%$, mentre un aumento di $30$ su un valore di partenza $150$ vale il $20\%$.
:::

## Metodi rapidi per i quiz

:::osservazione{#metodi-rapidi titolo="Calcolo rapido di medie e frequenze"}
Nelle prove a tempo molti quesiti di statistica si risolvono a mente.

- **Media con un valore di riferimento**: si sceglie un numero vicino ai dati, si calcola la media degli scarti da quel numero e la si aggiunge. Per $998$, $1003$, $1005$, $994$, $1010$ gli scarti da $1000$ sono $-2$, $3$, $5$, $-6$, $10$, con somma $10$ e media $2$, quindi la media è $1002$. Il metodo segue dalla regola sulla media di dati trasformati.
- **Lavorare con le somme**: nei quesiti con un dato aggiunto, tolto o mancante si trasforma ogni media in una somma moltiplicando per il numero dei dati, si fanno i conti sulle somme e solo alla fine si divide.
- **Controlli sul risultato**: la media è compresa tra il dato minimo e il dato massimo; una media ponderata è più vicina al dato con il peso maggiore; le frequenze relative hanno somma $1$ e gli angoli di un diagramma a torta hanno somma $360°$.

Tra le opzioni compaiono spesso la somma dei dati al posto della media, la mediana calcolata senza ordinare i dati, la media delle medie al posto della media ponderata e la percentuale calcolata sul totale sbagliato. Riconoscere questi valori permette di eliminarli prima di fare il conto.
:::
