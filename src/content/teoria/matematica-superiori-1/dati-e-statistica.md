---
titolo: "Dati e statistica descrittiva"
sommario: "Caratteri, frequenze, grafici, media, mediana, moda e lettura critica dei dati."
---

:::percorso
Rapporti e percentuali permettono di confrontare gruppi di dimensioni diverse. La statistica descrittiva organizza osservazioni e riassume le loro caratteristiche. Qui si distinguono indici che descrivono il centro dei dati e indici che descrivono quanto sono dispersi.
:::

## Popolazione, campione e caratteri

:::definizione{#dati titolo="Che cosa viene osservato"}
La **popolazione statistica** è l’insieme delle unità su cui si vuole studiare un carattere. Un **campione** ne è una parte effettivamente osservata. Il carattere è la proprietà registrata e le sue modalità sono i valori o le categorie che può assumere.

Il mezzo di trasporto usato per andare a scuola è un carattere qualitativo nominale. Il grado di soddisfazione espresso come basso, medio, alto è qualitativo ordinale. Il numero di fratelli è quantitativo discreto, perché si conta; l’altezza è quantitativa continua, perché si misura. L’unità di misura e il criterio di raccolta fanno parte della descrizione dei dati.
:::

## Frequenze assolute, relative e cumulate

:::definizione{#frequenze titolo="Dal conteggio al rapporto"}
La **frequenza assoluta** $n_i$ è il numero di osservazioni della modalità i. Il totale è $N=\sum n_i$. La **frequenza relativa** è $f_i=\dfrac{n_i}{N}$ e quella percentuale è $100f_i$.

Se $8$ studenti su $20$ vanno in autobus, la frequenza relativa è $\dfrac8{20}=0{,}4$ e la percentuale è $40\%$. Le frequenze relative di tutte le modalità disgiunte ed esaustive sommano a uno.

Per un carattere ordinato, una frequenza cumulata somma le frequenze fino alla modalità indicata. Il conteggio di chi ha al massimo due fratelli comprende le frequenze di zero, uno e due fratelli.
:::

## Grafici e scale

:::osservazione{#grafici titolo="Leggere il valore rappresentato"}
Un diagramma a barre confronta modalità separate. Un diagramma circolare assegna a una modalità un settore di ampiezza $\alpha=360^\circ f_i$. Per esempio una frequenza del $25\%$ corrisponde a $90^\circ$.

La scala degli assi deve essere letta prima di confrontare le altezze. In un grafico a barre con asse verticale troncato, una piccola differenza numerica può sembrare molto grande. Le etichette, l’unità di misura e l’origine della scala permettono di ricostruire il significato corretto.

Un grafico delle frequenze deve distinguere il valore della modalità dal numero di volte in cui compare. Una barra alta cinque può indicare cinque osservazioni della modalità tre.
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
