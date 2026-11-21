---
titolo: "Statistica descrittiva"
sommario: "Dalle frequenze alla forma dei dati. Media ponderata, mediana e quartili, scarti, varianza descrittiva e deviazione standard."
---

## Che cosa dicono le osservazioni

:::definizione{#dati titolo="Unità, carattere e gruppo di riferimento"}
La **statistica descrittiva** raccoglie dei dati e li riassume con tabelle, grafici e pochi numeri, detti **indici**.

Ogni dato si riferisce a un'**unità**, cioè all'oggetto o alla persona su cui si fa la rilevazione: una corsa di un autobus, uno studente, una prova di laboratorio.

- La **popolazione** è l'insieme di tutte le unità a cui si riferisce l'indagine, per esempio tutte le corse di una linea in un mese.
- Un **campione** è una parte della popolazione, per esempio venti corse scelte in quel mese.

Il **carattere** è la proprietà che si osserva su ogni unità. I valori che il carattere assume si chiamano **modalità**.

- Il carattere è **qualitativo** se le modalità sono categorie espresse a parole, come la linea di autobus usata.
- È **quantitativo discreto** se le modalità sono numeri separati fra loro, come il numero di fermate ($12$ o $13$, mai $12{,}5$).
- È **quantitativo continuo** se la misura può assumere ogni valore di un intervallo, come la durata del viaggio (per esempio $23{,}4$ minuti).

Con $N$ si indica il numero di **osservazioni**, cioè dei dati che si stanno descrivendo. Una stessa unità può dare più osservazioni. Se si rileva cinque volte il tempo di viaggio dello stesso autobus, le cinque durate sono cinque osservazioni, quindi $N=5$, ottenute però da un solo mezzo. Per confrontare la puntualità di due linee si dichiarano il periodo delle rilevazioni, l'unità di misura, l'orario previsto e il criterio con cui si scelgono le corse, così che i dati delle due linee siano raccolti nello stesso modo.
:::

:::osservazione
La media dei ritardi rilevati alle otto del mattino, cioè la somma di quei ritardi divisa per il numero delle corse, descrive soltanto le corse delle otto. Per trarre conclusioni su tutte le corse della giornata, la rilevazione deve comprendere anche gli altri orari. Un numero maggiore di dati raccolti alle otto dà informazioni più dettagliate soltanto su quell'orario.
:::

## Frequenze e gruppi di dimensione diversa

:::definizione{#frequenze titolo="Conteggi e proporzioni"}
La **frequenza assoluta** $n_i$ di una modalità è il numero di osservazioni che hanno quella modalità. L'indice $i$ scritto in basso distingue le modalità: $n_1$ è il conteggio della prima modalità, $n_2$ quello della seconda, e così via.

La **frequenza relativa** $f_i$ è la frequenza assoluta divisa per il numero totale $N>0$ delle osservazioni:
$$
f_i=\frac{n_i}{N}.
$$
Moltiplicata per $100$, la frequenza relativa dà la **frequenza percentuale** $100f_i\,\%$. Se $6$ studenti su $N=24$ vanno a scuola in bici, la frequenza assoluta è $6$, la frequenza relativa è $\dfrac{6}{24}=\dfrac14=0{,}25$ e la frequenza percentuale è $25\%$.

Le modalità sono **disgiunte** se nessuna osservazione ha due modalità insieme, ed **esauriscono** le osservazioni se ogni osservazione ha una modalità. In questo caso ogni osservazione è contata una e una sola volta, quindi:

- la somma delle frequenze assolute è $N$;
- la somma delle frequenze relative è $\dfrac{N}{N}=1$, cioè il $100\%$.

Se le modalità sono numeri messi in ordine crescente, la **frequenza cumulata** di un valore è il numero di osservazioni minori o uguali a quel valore. Si ottiene sommando la frequenza di quel valore e le frequenze di tutti i valori più piccoli. Per i valori $1$, $2$, $5$ con frequenze $1$, $4$, $1$ le cumulate sono $1$, poi $1+4=5$, poi $5+1=6$.
:::

:::esempio{titolo="Stesso conteggio, diversa diffusione"}
Un laboratorio conta le prove ripetute in due turni disgiunti, cioè senza persone in comune. Nel primo turno le prove ripetute sono $8$ su $20$, nel secondo sono $8$ su $40$. Le frequenze assolute sono uguali, mentre le frequenze relative sono diverse:
$$
\frac{8}{20}=\frac{40}{100}=40\%,\qquad \frac{8}{40}=\frac{20}{100}=20\%.
$$
Il numero di postazioni da preparare per chi ripete dipende dal conteggio, quindi è otto in entrambi i turni. Quanto è comune ripetere la prova in ciascun turno si legge invece dalle quote, perché ogni quota confronta il conteggio con il totale del proprio turno. Nel grafico l'altezza della barra di ogni turno è la sua percentuale.

::grafico{xmin=-0.35 xmax=3.3 ymin=0 ymax=50 nomi="s,p" poligoni="0.73,0 1.27,0 1.27,40 0.73,40;1.73,0 2.27,0 2.27,20 1.73,20" etichette="0.81,43,40%;1.81,23,20%" titolo="Per il turno $s$ l'altezza dà la percentuale $p$ di prove ripetute sul totale di quel turno"}

La quota dei due turni insieme si ottiene sommando i conteggi e sommando i totali:
$$
\frac{8+8}{20+40}=\frac{16}{60}=\frac4{15}\approx26{,}7\%.
$$
I due turni contribuiscono al numeratore con otto prove ciascuno. Al denominatore il secondo turno contribuisce con $40$ persone, il doppio del primo, quindi la quota complessiva è più vicina al $20\%$ che al $40\%$. Per lo stesso motivo la quota complessiva è diversa dalla media delle due quote, che vale $\dfrac{40\%+20\%}{2}=30\%$.
:::

## Grafici, scale e istogrammi

:::osservazione{#grafici titolo="Che cosa rappresentano altezza e area"}
In un **diagramma a barre** ogni modalità ha una barra separata dalle altre. L'altezza della barra è il conteggio oppure la quota, come indica la scritta sull'asse verticale.

In un **diagramma a settori**, detto anche grafico a torta, il cerchio rappresenta il totale e ogni modalità occupa uno spicchio, chiamato **settore**. Un giro completo misura $360^\circ$, quindi una modalità con frequenza relativa $f_i$ occupa un angolo di $360^\circ\cdot f_i$. Per esempio una modalità con il $25\%$ delle risposte occupa $360^\circ\cdot\dfrac14=90^\circ$.

Questi grafici rappresentano la suddivisione di un totale quando le modalità sono disgiunte ed esauriscono le risposte. In questo caso le quote sommano a $100\%$ e gli angoli dei settori sommano a $360^\circ$.
:::

:::esempio{titolo="Separare lo scarto dal rapporto visibile"}
Due termometri, in una prova di laboratorio, segnano $21$ e $24$ gradi Celsius. La differenza fra le due misure è $24-21=3$ gradi.

- Nel primo grafico l'asse verticale parte da $0$. Le barre sono alte $21$ e $24$, e la seconda supera la prima di poco.
- Nel secondo grafico l'asse verticale parte da $20$, cioè la **base** del grafico è $20$. Le parti visibili delle barre sono alte $21-20=1$ e $24-20=4$, quindi la seconda appare quattro volte la prima.

In entrambi i grafici le misure differiscono di $3$ gradi. Il rapporto visibile $4$ nasce dal fatto che nel secondo disegno mancano i gradi da $0$ a $20$. Il rapporto fra le altezze visibili coincide con il rapporto fra le misure soltanto quando l'asse verticale parte da $0$, perciò per confrontare due valori in un grafico si legge la scala e il valore da cui parte l'asse.

::grafico{xmin=-0.35 xmax=3.3 ymin=0 ymax=27 nomi="s,T" poligoni="0.72,0 1.28,0 1.28,21 0.72,21;1.72,0 2.28,0 2.28,24 1.72,24" etichette="0.91,22.1,21;1.91,25.1,24" titolo="Dalla base 0 si leggono le misure $T$ in gradi Celsius dei due strumenti $s$"}

::grafico{xmin=-0.35 xmax=3.3 ymin=20 ymax=25.5 nomi="s,T" poligoni="0.72,20 1.28,20 1.28,21 0.72,21;1.72,20 2.28,20 2.28,24 1.72,24" etichette="0.91,21.38,21;1.91,24.38,24" titolo="La base a 20 ingrandisce visivamente la stessa differenza"}
:::

:::definizione{#istogrammi titolo="L'area ricostruisce il conteggio"}
Quando delle misure, per esempio delle durate, si raggruppano in intervalli, gli intervalli si chiamano **classi** e il grafico si chiama **istogramma**. La scrittura $[2,5)$ indica i valori da $2$ incluso a $5$ escluso. Il simbolo $[$ segna un estremo compreso nella classe, il simbolo $)$ un estremo escluso.

Ogni classe è la base di un rettangolo. L'**ampiezza** $h_i$ della classe è la lunghezza della base, per esempio $[2,5)$ ha ampiezza $5-2=3$. Se nella classe ci sono $n_i$ dati, come altezza si prende la **densità**
$$
d_i=\frac{n_i}{h_i},
$$
cioè il numero di dati per ogni unità di ampiezza. Con questa scelta l'area del rettangolo, base per altezza, è $h_i\cdot\dfrac{n_i}{h_i}=n_i$, il conteggio della classe. Se invece come altezza si prende la **densità relativa** $\dfrac{f_i}{h_i}$, l'area è la frequenza relativa $f_i$. La somma delle aree di tutti i rettangoli è quindi $N$ nel primo caso e $1$ nel secondo.
:::

:::esempio{titolo="Altezza uguale, conteggi diversi"}
In una rilevazione di durate, le classi $[0,2)$, $[2,5)$ e $[5,9)$ minuti contengono $6$, $9$ e $8$ osservazioni. Le ampiezze sono $2$, $3$ e $4$ minuti, quindi le densità sono
$$
\frac{6}{2}=3,\qquad \frac{9}{3}=3,\qquad \frac{8}{4}=2
$$
osservazioni al minuto. Le prime due barre arrivano entrambe all'altezza $3$. La seconda ha però area $3\cdot3=9$, mentre la prima ha area $2\cdot3=6$, perché la seconda base è più larga. Una durata di esattamente cinque minuti va nella terza classe, perché $5$ è incluso in $[5,9)$ ed escluso da $[2,5)$.

::grafico{xmin=-0.8 xmax=10.2 ymin=-0.35 ymax=4.35 nomi="t,d" poligoni="0,0 2,0 2,3 0,3;2,0 5,0 5,3 2,3;5,0 9,0 9,2 5,2" linee="0,3 2,3 2,0;2,3 5,3 5,0;5,2 9,2 9,0" etichette="0.68,1.25,6;3.25,1.25,9;6.75,0.89,8" titolo="La densità $d$ è in osservazioni al minuto. I numeri nelle regioni indicano le aree."}
:::
## Media e scarti con segno

::::teorema{#media titolo="Frequenze come pesi e somma degli scarti"}
Le $N$ misure si indicano con $x_1,x_2,\ldots,x_N$. Il simbolo $\sum$ (sigma maiuscola, lettera greca) indica una somma: $\sum_{j=1}^N x_j$ si legge «somma degli $x_j$ per $j$ da $1$ a $N$» e significa $x_1+x_2+\ldots+x_N$.

La **media aritmetica** $\bar x$ (si legge «x segnato») di $N>0$ misure è la somma delle misure divisa per $N$.

Se le misure si ripetono, si indicano con $v_i$ i valori distinti e con $n_i$ le loro frequenze. Un valore $v_i$ che compare $n_i$ volte contribuisce alla somma con $n_i v_i$. La media calcolata in questo modo si chiama **media ponderata**, e le frequenze sono i **pesi**. Dividendo ogni peso per $N$ si ottiene la stessa media con le frequenze relative, $\bar x=\sum_i v_i f_i$.

Lo **scarto** di una misura dalla media è la differenza con segno $x_j-\bar x$. È positivo per le misure sopra la media e negativo per quelle sotto.

$$
\begin{aligned}
\bar x&=\frac{\sum_{j=1}^N x_j}{N}
=\frac{\sum_i n_i v_i}{\sum_i n_i},\\[5pt]
\sum_{j=1}^N (x_j-\bar x)&=0.
\end{aligned}
$$

:::dimostrazione
Per la prima uguaglianza si sommano le $n_i$ copie di $v_i$, che danno $n_i v_i$. Il totale non cambia, e il numero delle osservazioni resta $N=\sum_i n_i$.

Per la seconda uguaglianza si osserva che sommare gli scarti significa sommare tutti i dati e sottrarre $\bar x$ una volta per ogni osservazione, cioè $N$ volte:
$$
\sum_{j=1}^N (x_j-\bar x)=\sum_{j=1}^N x_j-N\bar x.
$$
Per la definizione della media vale $\sum_j x_j=N\bar x$, quindi la differenza è zero.
:::
::::

:::esempio{titolo="Lo stesso valore ripetuto ha più peso"}
I valori $0$, $3$ e $6$ hanno frequenze $1$, $2$ e $3$. La media ponderata è
$$
\bar x=\frac{0\cdot1+3\cdot2+6\cdot3}{1+2+3}=\frac{0+6+18}{6}=\frac{24}{6}=4.
$$
Gli scarti con segno sono $0-4=-4$ una volta, $3-4=-1$ due volte e $6-4=2$ tre volte. La loro somma è $-4+2\cdot(-1)+3\cdot2=-4-2+6=0$. Le osservazioni a destra della media hanno distanza totale $3\cdot2=6$, uguale alla distanza totale $4+2\cdot1=6$ delle osservazioni a sinistra, perciò si compensano. Nel grafico ogni punto è un'osservazione e la linea tratteggiata indica la media.

::grafico{xmin=-0.65 xmax=7.3 ymin=-0.35 ymax=4.25 nomi="x," punti="0,1;3,1;3,2;6,1;6,2;6,3" segmenti="4,0,4,3.6" etichette="3.53,3.94,4" titolo="Ciascun punto è un'osservazione. La linea tratteggiata indica la media."}
:::

## Mediana e quartili

:::definizione{#mediana titolo="Leggere le posizioni centrali"}
Si ordinano i dati dal più piccolo al più grande, contando anche le ripetizioni. Il **rango** di un dato è la sua posizione in questo elenco ordinato: in $2,5,5,9$ il dato $9$ ha rango $4$. Il dato di rango $k$ si indica anche con $x_{(k)}$.

La **mediana**, indicata con $M_e$, con $\operatorname{Med}$ oppure con $Q_2$, è il valore al centro dell'elenco ordinato.

- Se $N$ è dispari, $N=2k+1$, la mediana è il dato di rango $k+1$. Per esempio con $N=5$ si ha $k=2$, e in $2,5,5,9,11$ la mediana è il terzo dato, $5$.
- Se $N$ è pari, $N=2k>0$, la mediana è la media dei dati di rango $k$ e $k+1$. Per esempio con $N=4$ si ha $k=2$, e in $2,5,7,9$ la mediana è $\dfrac{5+7}{2}=6$.

Se i dati sono in una tabella con le frequenze cumulate, il dato di un certo rango è il primo valore la cui cumulata è maggiore o uguale a quel rango.
:::

:::definizione{#quartili titolo="Convenzione dei ranghi per il primo e il terzo quartile"}
I **quartili** $Q_1$, $Q_2$ e $Q_3$ dividono l'elenco ordinato in quattro parti con circa lo stesso numero di dati. Qui si usa la convenzione del **rango superiore**.

- Per $Q_1$ si calcola $\dfrac N4$, per $Q_3$ si calcola $\dfrac{3N}{4}$.
- Se il risultato non è intero, si arrotonda all'intero successivo, per esempio $2{,}25$ diventa $3$.
- Il quartile è il dato che occupa il rango ottenuto.

Esistono anche altre convenzioni, che con pochi dati danno valori un po' diversi. Il secondo quartile $Q_2$ è la mediana e si calcola con la regola della mediana. La differenza $Q_3-Q_1$ si chiama **distanza interquartile** ed è la larghezza dell'intervallo che contiene circa la metà centrale dei dati.
:::

:::esempio{titolo="Quartili e mediana in una lista con ripetizioni"}
I dati ordinati sono $1,2,2,3,5,7,7,11$, quindi $N=8$.

- Per il primo quartile si calcola $\dfrac{8}{4}=2$, che è intero. Il dato di rango $2$ è $2$, quindi $Q_1=2$.
- Per il terzo quartile si calcola $\dfrac{3\cdot8}{4}=6$. Il dato di rango $6$ è $7$, quindi $Q_3=7$.
- Poiché $N=8$ è pari, la mediana è la media del quarto e del quinto dato, $Q_2=\dfrac{3+5}{2}=4$.

La distanza interquartile vale $Q_3-Q_1=7-2=5$.

::grafico{xmin=-0.3 xmax=9.2 ymin=-0.4 ymax=12.2 nomi="k,xₖ" punti="1,1;2,2;3,2;4,3;5,5;6,7;7,7;8,11" segmenti="2,0,2,2;6,0,6,7" titolo="I quartili $Q_1$ e $Q_3$ sono ai ranghi $2$ e $6$. La mediana usa i ranghi $4$ e $5$."}

Un solo dato, $1$, è strettamente minore di $Q_1=2$, mentre i dati minori o uguali a $Q_1$ sono tre, cioè $1,2,2$. Con valori ripetuti le due quantità sono diverse, perciò per interpretare un quartile si distingue fra i valori uguali alla soglia e i valori strettamente sotto.

Il **campo di variazione** è la differenza fra il dato massimo e il dato minimo, qui $11-1=10$. Se si cambia $11$ in $20$, il massimo diventa $20$ e il campo di variazione si allunga a $20-1=19$. I ranghi $2$, $4$, $5$ e $6$ restano occupati dagli stessi dati, quindi quartili e mediana non cambiano.
:::
:::esempio{titolo="Stessi estremi, diversa dispersione centrale"}
Gli elenchi $A$: $1,3,4,5,6,8$ e $B$: $1,2,3,6,7,8$ hanno entrambi campo di variazione $8-1=7$. Anche la mediana è la stessa, perché $\dfrac{4+5}{2}=\dfrac{3+6}{2}=4{,}5$. Con $N=6$ si ha $\dfrac64=1{,}5$ e $\dfrac{3\cdot6}{4}=4{,}5$, che arrotondati all'intero successivo danno i ranghi dei quartili, il secondo e il quinto. In $A$ la distanza interquartile è $6-3=3$, in $B$ è $7-2=5$, quindi in $B$ i dati centrali sono più distanti fra loro, cioè più **dispersi**.

Il disegno è un **diagramma a scatola**. La scatola va da $Q_1$ a $Q_3$, la linea interna indica la mediana e i segmenti esterni arrivano al minimo e al massimo.

::grafico{xmin=-0.4 xmax=9.5 ymin=-0.35 ymax=3.05 nomi="x," poligoni="3,1.78 6,1.78 6,2.22 3,2.22;2,0.78 7,0.78 7,1.22 2,1.22" linee="1,2 3,2;6,2 8,2;1,1 2,1;7,1 8,1;1,1.81 1,2.19;8,1.81 8,2.19;1,0.81 1,1.19;8,0.81 8,1.19;4.5,0.78 4.5,1.22;4.5,1.78 4.5,2.22" etichette="0.38,2.15,A;0.38,1.15,B" titolo="Le scatole hanno ampiezza diversa pur condividendo mediana ed estremi"}
:::

:::esempio{titolo="La posizione si trova anche senza espandere i dati"}
Nella tabella la cumulata finale è $9$, quindi le osservazioni sono nove. I tre ranghi cercati sono $\dfrac94=2{,}25$ arrotondato a $3$ per $Q_1$, il quinto per la mediana (con $N=9=2\cdot4+1$ si prende il rango $4+1$) e $\dfrac{27}{4}=6{,}75$ arrotondato a $7$ per $Q_3$.

La cumulata del valore $1$ è $1$ e quella del valore $2$ è $5$, quindi il valore $2$ occupa le posizioni dalla seconda alla quinta. Perciò $Q_1=Q_2=2$. La cumulata del valore $5$ è $6$, quindi il rango $7$ cade nel blocco del valore $8$, che comincia subito dopo. Il terzo quartile vale dunque $8$.

| Valore | Frequenza | Cumulata |
|---|---:|---:|
| $1$ | $1$ | $1$ |
| $2$ | $4$ | $5$ |
| $5$ | $1$ | $6$ |
| $8$ | $3$ | $9$ |
:::

## Moda e significato dell'indice

:::definizione{#moda titolo="La modalità più frequente"}
Una **moda** è una modalità con la frequenza massima. Più modalità possono avere la stessa frequenza massima, e allora le mode sono più di una. Le linee di autobus $A$, $B$ e $C$ hanno $5$, $7$ e $7$ utilizzi. Il massimo è $7$ ed è raggiunto da $B$ e da $C$, quindi le mode sono $B$ e $C$, e $7$ è la frequenza di ciascuna. La moda si trova anche per le categorie senza un ordine, come le linee di autobus, perché richiede soltanto di contare.
:::

:::osservazione
Se una misura è raggruppata in classi, si può indicare la classe con il conteggio più alto. Con classi di ampiezza diversa, la barra più alta dell'istogramma è quella con la densità maggiore, e può appartenere a una classe con meno osservazioni. Nell'esempio delle durate, la classe $[0,2)$ ha la stessa altezza $3$ della classe $[2,5)$, ma contiene $6$ osservazioni contro $9$. Senza i singoli valori non si sa quale misura esatta sia comparsa più volte.
:::

## Varianza descrittiva

::::teorema{#varianza titolo="Quadrati degli scarti e frequenze"}
Il **campo di variazione** $R$ è il massimo meno il minimo. La **varianza descrittiva** $\sigma^2$, per $N>0$, è la media dei quadrati degli scarti. Per calcolarla si eleva al quadrato ogni scarto, si sommano i quadrati e si divide per $N$, il numero delle osservazioni che si stanno descrivendo. Il simbolo $\sigma$ è la lettera greca sigma minuscola, e $\sigma^2$ si legge «sigma quadro». Si usano i quadrati perché la somma degli scarti con segno è sempre zero, mentre ogni quadrato è positivo o nullo. Per dati raggruppati in valori uguali, il quadrato dello scarto di $v_i$ si moltiplica per la sua frequenza $n_i$.

$$
\begin{aligned}
\sigma^2&=\frac{1}{N}\sum_{j=1}^N(x_j-\bar x)^2\\[5pt]
&=\frac{\sum_i n_i(v_i-\bar x)^2}{\sum_i n_i}.
\end{aligned}
$$

:::dimostrazione
Le $n_i$ osservazioni uguali a $v_i$ hanno tutte lo stesso scarto e quindi lo stesso quadrato. Insieme contribuiscono con $n_i(v_i-\bar x)^2$, e questo dà la seconda riga.

Ogni quadrato è maggiore o uguale a zero, quindi anche la varianza è maggiore o uguale a zero. Una somma di numeri non negativi vale zero soltanto se ogni addendo (cioè ogni numero sommato) è zero. Perciò la varianza è zero soltanto se ogni scarto è zero, cioè se tutte le osservazioni sono uguali alla media.
:::

Si divide per $N$ anche quando i dati descritti provengono da un campione. Il divisore $N-1$ compare in un problema diverso, quando dai dati di un campione si vuole stimare la varianza dell'intera popolazione. Gli esercizi di questo capitolo chiedono la varianza descrittiva, con divisore $N$.
::::

:::esempio{titolo="Stessa media e stesso campo, varianza diversa"}
Nei dati $A=(0,0,4,4)$ e $B=(0,2,2,4)$ la media è $2$ e il campo di variazione è $4-0=4$. In $A$ tutti i dati distano due unità dalla media. In $B$ due dati coincidono con la media e soltanto due sono agli estremi. Le varianze sono
$$
\sigma_A^2=\frac{(-2)^2+(-2)^2+2^2+2^2}{4}=\frac{16}{4}=4,\qquad
\sigma_B^2=\frac{(-2)^2+0^2+0^2+2^2}{4}=\frac{8}{4}=2.
$$
Due distribuzioni con la stessa media e gli stessi estremi possono quindi avere varianze diverse, perché la varianza dipende anche da quanti dati stanno vicino alla media.

::grafico{xmin=-0.7 xmax=5.2 ymin=-0.25 ymax=5.25 nomi="x," punti="0,3;0,4;4,3;4,4;0,0.9;2,0.9;2,1.9;4,0.9" segmenti="2,0,2,4.65" etichette="0.5,4.2,A;0.5,1.85,B;2.25,4.62,2" titolo="I due gruppi hanno la stessa media. In B due osservazioni hanno scarto zero."}
:::

::::teorema{#secondo-momento titolo="Controllo con la media dei quadrati"}
La **media dei quadrati** dei dati è $\dfrac{\sum_i n_i v_i^2}{N}$. Sviluppando i quadrati degli scarti si ottiene anche

$$
\sigma^2=\frac{\sum_i n_i v_i^2}{N}-\bar x^2.
$$

La formula si legge «la varianza è la media dei quadrati meno il quadrato della media». Serve a controllare il calcolo fatto con gli scarti, e a ricavare la media dei quadrati quando sono note media e varianza.

:::dimostrazione
Per il quadrato di una differenza vale $(v_i-\bar x)^2=v_i^2-2v_i\bar x+\bar x^2$. Si moltiplica ogni riga per $n_i$ e si somma su tutti i valori:
$$
\begin{aligned}
\sum_i n_i(v_i-\bar x)^2&=\sum_i n_i v_i^2-2\bar x\sum_i n_i v_i+\bar x^2\sum_i n_i\\[5pt]
&=\sum_i n_i v_i^2-2\bar x\cdot N\bar x+\bar x^2\cdot N\\[5pt]
&=\sum_i n_i v_i^2-N\bar x^2.
\end{aligned}
$$
Nel secondo passaggio si è usato $\sum_i n_i v_i=N\bar x$, che è la definizione della media, e $\sum_i n_i=N$, perché le frequenze sommano a $N$. Dividendo per $N$ resta la formula indicata.
:::
::::

:::esempio{titolo="Controllare la varianza usando una tabella"}
I valori $0$, $2$ e $8$ hanno frequenze $1$, $2$ e $1$. La media è
$$
\bar x=\frac{0\cdot1+2\cdot2+8\cdot1}{4}=\frac{12}{4}=3.
$$
Con gli scarti pesati si calcolano $1\cdot(0-3)^2=9$, $2\cdot(2-3)^2=2$ e $1\cdot(8-3)^2=25$, come nella tabella. La varianza è
$$
\sigma^2=\frac{9+2+25}{4}=\frac{36}{4}=9.
$$
La media dei quadrati dei dati è $\dfrac{0^2\cdot1+2^2\cdot2+8^2\cdot1}{4}=\dfrac{0+8+64}{4}=18$. Togliendo il quadrato della media, $3^2=9$, si ottiene $18-9=9$, la stessa varianza.

| Valore $v_i$ | Conteggio $n_i$ | $n_i(v_i-3)^2$ |
|---|---:|---:|
| $0$ | $1$ | $9$ |
| $2$ | $2$ | $2$ |
| $8$ | $1$ | $25$ |
:::

:::osservazione
Se tutte le frequenze si moltiplicano per uno stesso numero positivo, le frequenze relative non cambiano. Raddoppiando ogni conteggio, per esempio, nella media e nella varianza raddoppiano sia i numeratori sia i denominatori, quindi i risultati restano uguali. Con le frequenze $2$, $4$, $2$ al posto di $1$, $2$, $1$ nella tabella precedente, la media è ancora $\dfrac{0\cdot2+2\cdot4+8\cdot2}{8}=\dfrac{24}{8}=3$. Due gruppi con numerosità diverse hanno perciò gli stessi indici quando i valori hanno le stesse frequenze relative. Per stabilire quale gruppo è più disperso si confrontano le quote dei valori, perché il solo numero di dati non determina la dispersione.
:::

## Deviazione standard e cambi di scala

::::teorema{#deviazione titolo="Unità di misura e trasformazioni"}
La **deviazione standard** è la radice quadrata della varianza, $\sigma=\sqrt{\sigma^2}$. Se i dati sono in centimetri, anche gli scarti sono in centimetri e i loro quadrati in centimetri quadrati. Perciò la varianza ha come unità il quadrato dell'unità dei dati, mentre la deviazione standard è espressa nella stessa unità dei dati.

Una **trasformazione lineare** sostituisce ogni dato $x_j$ con $y_j=ax_j+b$. Il numero $a$ moltiplica tutti i dati, per esempio $a=10$ nel passaggio da centimetri a millimetri. Il numero $b$ si aggiunge a tutti i dati, per esempio per correggere lo zero di uno strumento. La media diventa $a\bar x+b$. Il simbolo $|a|$ indica il **valore assoluto** di $a$, cioè il numero $a$ preso senza segno, per esempio $|-2|=2$.

$$
\begin{aligned}
y_j-\bar y&=a(x_j-\bar x),\\[5pt]
\sigma_y^2&=a^2\sigma_x^2,\qquad
\sigma_y=|a|\sigma_x.
\end{aligned}
$$

:::dimostrazione
La somma dei nuovi dati è $a\sum_j x_j+Nb$, perché ogni dato viene moltiplicato per $a$ e aumentato di $b$. Dividendo per $N$ si ottiene $\bar y=a\bar x+b$.

La costante $b$ compare sia nel dato trasformato sia nella sua media, quindi si cancella nello scarto:
$$
y_j-\bar y=(ax_j+b)-(a\bar x+b)=a(x_j-\bar x).
$$
Ogni scarto viene moltiplicato per $a$, quindi il suo quadrato viene moltiplicato per $a^2$. La media dei quadrati degli scarti viene moltiplicata per lo stesso fattore, cioè $\sigma_y^2=a^2\sigma_x^2$. Estraendo la radice si ottiene $\sigma_y=\sqrt{a^2}\,\sigma_x=|a|\sigma_x$, perché la radice quadrata di un numero è sempre positiva o nulla.
:::

Con $a>0$ la trasformazione conserva l'ordine dei dati, quindi i ranghi restano occupati dagli stessi dati trasformati. La mediana diventa $aM_e+b$ e la distanza interquartile viene moltiplicata per $a$. Con $a<0$ l'ordine si inverte, e la mediana diventa ancora $aM_e+b$.
::::

:::esempio{titolo="Correggere lo zero o cambiare unità"}
Le lunghezze $2,4,6$ centimetri hanno media $4$ e varianza $\dfrac{(-2)^2+0^2+2^2}{3}=\dfrac{8}{3}$ centimetri quadrati. In millimetri ogni lunghezza si moltiplica per $10$, quindi i dati diventano $20,40,60$. La media è $10\cdot4=40$ e la varianza è $10^2\cdot\dfrac83=\dfrac{800}{3}$ millimetri quadrati, perché il cambio d'unità ha moltiplicato per dieci le distanze dalla media. Se in una taratura si aggiungono poi $3$ millimetri a ogni misura, i dati diventano $23,43,63$ e la nuova media è $43$. Gli scarti restano $-20$, $0$ e $20$, quindi le distanze dal centro non cambiano.

::grafico{xmin=-2 xmax=70 ymin=-0.3 ymax=2.8 nomi="x," punti="20,1;40,1;60,1;23,2;43,2;63,2" linee="20,1 60,1;23,2 63,2" etichette="5,1.17,A;5,2.17,B" titolo="Le misure A in millimetri e le misure B corrette di 3 millimetri conservano gli scarti dalle rispettive medie"}
:::

:::attenzione
La regola $\sigma_y^2=a^2\sigma_x^2$ vale quando la stessa trasformazione si applica a tutti i dati. Per $4,4,4,4$ la varianza è zero. Se si raddoppia soltanto l'ultima osservazione si ottiene $4,4,4,8$, il nuovo centro è $\dfrac{20}{4}=5$ e la varianza diventa $\dfrac{1+1+1+9}{4}=3$, diversa da $2^2\cdot0=0$. Raddoppiando invece tutte le osservazioni si ottengono quattro $8$ e la varianza rimane zero. Prima di applicare la regola del fattore al quadrato si controlla quindi a quali osservazioni si riferisce la modifica.
:::

## Che cosa si perde raggruppando i valori

:::osservazione{#riepilogo titolo="Stimare con i punti medi delle classi"}
Gli elenchi $A$: $1,2,6,7$ e $B$: $3,3,5,5$ hanno entrambi due osservazioni in $[0,4)$ e due in $[4,8)$. Raggruppati in classi danno quindi la stessa tabella e lo stesso istogramma. Entrambi hanno media $4$, mentre le varianze sono diverse:
$$
\sigma_A^2=\frac{(-3)^2+(-2)^2+2^2+3^2}{4}=\frac{26}{4},\qquad
\sigma_B^2=\frac{(-1)^2+(-1)^2+1^2+1^2}{4}=1.
$$
Gli scarti al quadrato dipendono dai valori all'interno delle classi, che la tabella non riporta.

::grafico{xmin=-0.7 xmax=9.0 ymin=-0.35 ymax=5.1 nomi="x," punti="1,3;2,3;6,3;7,3;3,0.9;3,1.9;5,0.9;5,1.9" segmenti="4,0,4,4.7" etichette="0.45,3.5,A;0.45,1.6,B;4.24,4.45,4" titolo="Entrambe le distribuzioni hanno due osservazioni per classe, con distanze dal centro diverse"}

Se si conosce soltanto la tabella, come valore rappresentativo di ogni classe si usa il **punto medio**, cioè la media dei due estremi della classe: $\dfrac{0+4}{2}=2$ per $[0,4)$ e $\dfrac{4+8}{2}=6$ per $[4,8)$. Questo equivale a calcolare gli indici per l'elenco $2,2,6,6$, che ha media $4$ e varianza $\dfrac{4+4+4+4}{4}=4$. Il risultato è un'approssimazione, perché dalla tabella non si ricostruiscono i singoli dati. Anche la media può cambiare a parità di istogramma. Per esempio le misure $3,3,7,7$ ricadono ancora due per classe e hanno media $5$. Gli indici sono quindi esatti quando i dati sono individuali o raggruppati per valori uguali, e sono approssimati quando i dati sono raccolti in classi.
:::
