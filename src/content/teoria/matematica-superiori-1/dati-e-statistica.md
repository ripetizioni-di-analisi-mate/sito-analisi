---
titolo: "Dati e statistica descrittiva"
sommario: "Caratteri, frequenze, grafici, media, mediana, moda e lettura critica dei dati."
---

## Popolazione, campione e caratteri

:::definizione{#dati titolo="Che cosa viene osservato"}
La **popolazione statistica** è l’insieme delle unità su cui si vuole studiare un carattere. Un **campione** ne è una parte effettivamente osservata. Il carattere è la proprietà registrata e le sue modalità sono i valori o le categorie che può assumere.

Il mezzo di trasporto usato per andare a scuola è un carattere qualitativo nominale. Il grado di soddisfazione espresso come basso, medio, alto è qualitativo ordinale. Il numero di fratelli è quantitativo discreto, perché può assumere soltanto valori interi non negativi. L’altezza è quantitativa continua, perché può assumere valori in un intervallo anche quando la misura viene arrotondata. L’unità di misura e il criterio di raccolta fanno parte della descrizione dei dati.
:::

## Frequenze assolute, relative e cumulate

:::definizione{#frequenze titolo="Dal conteggio al rapporto"}
La **frequenza assoluta** $n_i$ è il numero di osservazioni della modalità i. Il totale delle osservazioni è $N=\sum n_i$. Se $N>0$, la **frequenza relativa** è $f_i=\dfrac{n_i}{N}$. Per esprimerla in percentuale si moltiplica $f_i$ per $100$ e si aggiunge il simbolo $\%$.

Se $8$ studenti su $20$ vanno in autobus, la frequenza relativa è $\dfrac8{20}=0{,}4$ e la percentuale è $40\%$. Le frequenze relative di tutte le modalità disgiunte ed esaustive sommano a uno.

Per un carattere ordinato, una frequenza cumulata somma le frequenze fino alla modalità indicata. Il conteggio di chi ha al massimo due fratelli comprende le frequenze di zero, uno e due fratelli.
:::

:::esempio{titolo="Ricostruire una frequenza dalla tabella"}
La tabella riporta il numero di libri letti da $20$ studenti nel mese di ottobre. La frequenza del valore $2$ si trova sommando le tre frequenze note e sottraendo il risultato dal totale.

| Libri letti | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| Studenti | $3$ | $7$ | $n_2$ | $4$ |

$$
n_2=20-(3+7+4)=6.
$$

La frequenza relativa di chi ha letto esattamente due libri è $\dfrac6{20}=0{,}30$. Chi ne ha letti al massimo due comprende anche i primi due gruppi. La frequenza assoluta cumulata è dunque $3+7+6=16$.
:::

## Grafici e scale

:::osservazione{#grafici titolo="Leggere il valore rappresentato"}
Un diagramma a barre confronta modalità separate. Un diagramma circolare assegna a una modalità un settore di ampiezza $\alpha=360^\circ f_i$. Per esempio una frequenza del $25\%$ corrisponde a $90^\circ$.

La scala degli assi deve essere letta prima di confrontare le altezze. In un grafico a barre con asse verticale troncato, una piccola differenza numerica può sembrare molto grande. Le etichette, l’unità di misura e l’origine della scala permettono di ricostruire il significato corretto.

Un grafico delle frequenze deve distinguere il valore della modalità dal numero di volte in cui compare. Una barra alta cinque può indicare cinque osservazioni della modalità tre.
:::

:::esempio{titolo="Confrontare due barre dalla stessa origine"}
In due settimane una biblioteca presta rispettivamente $32$ e $36$ libri. Le barre partono da zero e ognuna ha altezza pari al numero di prestiti.

::grafico{xmin=0 xmax=3 ymin=0 ymax=40 poligoni="0.72,0 1.28,0 1.28,32 0.72,32;1.72,0 2.28,0 2.28,36 1.72,36" etichette="0.93,33,32;1.93,37,36" titolo="I prestiti passano da 32 nella prima settimana a 36 nella seconda"}

Nella seconda settimana ci sono quattro prestiti in più. Se l’asse partisse da $30$, le altezze visibili sarebbero $2$ e $6$. Il rapporto fra i due conteggi rimarrebbe $\dfrac{36}{32}=\dfrac98$. Nel grafico con asse troncato, la seconda barra avrebbe il triplo dell’altezza della prima.
:::

## Media aritmetica e media pesata

:::teorema{#media titolo="Usare tutti i dati con il peso corretto"}
Per N osservazioni numeriche, la **media aritmetica** è

$$
\bar x=\frac{x_1+\cdots+x_N}{N}.
$$

Se i valori sono raccolti in una tabella di frequenze, ogni valore va moltiplicato per la propria frequenza:

$$
\bar x=\frac{\sum x_i n_i}{\sum n_i}.
$$

Se il valore quattro compare due volte e il valore sette quattro volte, la media è $\dfrac{4\cdot2+7\cdot4}{6}=6$.

Aggiungere la stessa quantità a tutti i dati aggiunge quella quantità alla media. Moltiplicare tutti i dati per un fattore moltiplica anche la media per quel fattore. Per trovare un dato mancante si può ricavare la somma totale come $N\bar x$.
:::

:::esempio{titolo="Media complessiva di gruppi di dimensione diversa"}
Un primo gruppo di $10$ studenti passa in media $6$ ore alla settimana in biblioteca. Un secondo gruppo, formato da $20$ studenti, vi passa in media $9$ ore. Le due medie rappresentano gruppi di dimensione diversa, quindi per riunirli si parte dalle somme.

$$
\begin{aligned}
\bar x&=\frac{10\cdot6+20\cdot9}{10+20}\\[6pt]
&=\frac{60+180}{30}=8.
\end{aligned}
$$

La media complessiva è di otto ore. È più vicina a nove che a sei perché il gruppo con media nove ha un numero maggiore di studenti.
:::

## Mediana e moda

:::definizione{#mediana-moda titolo="Posizione centrale e valore più frequente"}
La **mediana** si calcola ordinando i dati. Con un numero dispari di osservazioni si prende il valore centrale; con un numero pari si prende la media dei due valori centrali. Per $2,4,7,10$, la mediana è $\dfrac{4+7}{2}=5{,}5$.

La **moda** è una modalità con frequenza massima. Un insieme di dati può avere più mode. Nei dati $2,3,3,5,5$, le mode sono tre e cinque. Il valore della moda è distinto dalla sua frequenza: qui ciascuna moda compare due volte.

Media, mediana e moda rispondono a domande diverse e non coincidono necessariamente. La mediana dipende dalle posizioni; la media usa il valore di tutte le osservazioni.
:::

## Dispersione e valori estremi

:::definizione{#dispersione titolo="Campo di variazione e limiti di un riassunto"}
Il **campo di variazione** è la differenza fra massimo e minimo. Per i dati $3,4,5,12$ vale $12-3=9$. È un indice semplice della dispersione, ma dipende soltanto dai due estremi.

Nei dati $4,4,5,5,24$, la mediana è cinque e la media è $\dfrac{42}{5}=8{,}4$. Il valore estremo ventiquattro sposta molto la media. Presentare soltanto un indice può quindi nascondere una caratteristica del gruppo.

La stessa media può descrivere gruppi diversi: $4,5,6$ e $1,5,9$ hanno entrambi media cinque, ma campi di variazione rispettivamente due e otto. Il contesto e la distribuzione completano l’informazione fornita dall’indice centrale.
:::
