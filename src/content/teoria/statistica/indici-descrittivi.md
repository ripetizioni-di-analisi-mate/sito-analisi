---
titolo: "Indici di posizione e dispersione"
sommario: "Media, mediana, quantili e misure di dispersione per descrivere e confrontare gruppi di dati."
---

Nel capitolo 1 i dati raccolti sono stati riassunti con tabelle di frequenze e grafici. Questo capitolo li riassume con pochi numeri, detti indici. Cinque pazienti di un ambulatorio, per esempio, aspettano $5$, $10$, $15$, $20$ e $50$ minuti. La media delle attese è $\dfrac{5+10+15+20+50}{5}=20$ minuti; la mediana, cioè l'attesa che sta al centro della lista ordinata, è $15$ minuti; fra l'attesa più breve e la più lunga ci sono $50-5=45$ minuti.

Media e mediana sono indici di posizione, perché ciascuna dà con un solo numero la durata tipica di un'attesa. La differenza di $45$ minuti è un indice di dispersione, perché dice quanto sono diverse le attese fra loro. La media supera la mediana perché la sola attesa di $50$ minuti alza la somma; il capitolo mostra come cambia ciascun indice quando un dato è lontano dagli altri, e come si calcolano gli indici dalle tabelle di frequenze del capitolo 1. Il capitolo definisce anche la varianza e la deviazione standard, due indici di dispersione calcolati dalle distanze dei dati dalla media.

Nei capitoli 5 e 6, sulla probabilità, media e varianza diventano il valore atteso e la varianza di un numero che dipende dal caso. Nei capitoli dall'8 al 12, sull'inferenza, la media $\bar x$ e la deviazione standard $s$ di un campione servono a stimare la media dell'intera popolazione e a calcolare l'errore di questa stima. La proprietà della media dimostrata in questo capitolo, di rendere minima la somma dei quadrati delle distanze dai dati, è il criterio con cui si costruisce la retta di regressione del capitolo 12.

## Media aritmetica e medie ponderate

:::definizione{#media titolo="Media aritmetica"}
Quattro visite in un ambulatorio durano $20$, $25$, $35$ e $40$ minuti, in tutto $120$ minuti. Se il tempo totale fosse diviso in parti uguali fra le quattro visite, ciascuna durerebbe $\dfrac{120}{4}=30$ minuti. Questo valore è la media aritmetica delle quattro durate.

Con le lettere, siano $x_1,\ldots,x_n$ le $n\ge 1$ osservazioni di un carattere quantitativo (capitolo 1). La **media aritmetica** $\bar x$, che si legge «x segnato», è la somma delle osservazioni divisa per il loro numero:
$$
\bar x=\frac{1}{n}\sum_{i=1}^n x_i.
$$
Il simbolo $\sum_{i=1}^n x_i$ indica la somma $x_1+x_2+\cdots+x_n$.

La media ha la stessa unità di misura dei dati. Moltiplicandola per la numerosità si ritrova il totale, perché $n\bar x=\sum_{i=1}^n x_i$, anche quando i singoli valori sono ignoti. Se di quattro visite si sa soltanto che durano in media $30\,\mathrm{min}$, il tempo complessivo è $4\cdot30=120\,\mathrm{min}$. Con questo passaggio si uniscono due gruppi e si aggiorna una media.
:::

:::definizione{#media-ponderata titolo="Media ponderata e frequenze"}
Uno studente ha preso $24$ in un esame da $6$ crediti e $30$ in un esame da $12$ crediti. L'esame da $12$ crediti conta il doppio, quindi ogni voto si moltiplica per i suoi crediti e la somma si divide per il totale dei crediti:
$$
\frac{6\cdot24+12\cdot30}{6+12}=\frac{144+360}{18}=28.
$$
La media semplice dei due voti, $\dfrac{24+30}{2}=27$, tratta i due esami come se valessero gli stessi crediti. Il numero $28$ è una media ponderata dei voti, e i crediti sono i pesi.

Con le lettere, siano $a_1,\ldots,a_k$ dei valori numerici con pesi $w_1,\ldots,w_k$ non negativi e con somma positiva. La **media ponderata** è
$$
\bar a_w=\frac{\sum_{j=1}^k w_j a_j}{\sum_{j=1}^k w_j}.
$$
Il denominatore è la somma dei pesi, perciò se tutti i pesi vengono moltiplicati per la stessa costante positiva la media resta uguale.

Quando $w_j$ è la frequenza assoluta (capitolo 1) del valore $a_j$, il prodotto $w_ja_j$ è la somma delle osservazioni uguali ad $a_j$ e la somma dei pesi è il numero delle osservazioni. La media della tabella di frequenze coincide quindi con quella dei dati elencati uno per uno. I dati $2,2,2,5$, per esempio, hanno la tabella «valore $2$ con frequenza $3$, valore $5$ con frequenza $1$», e $\dfrac{3\cdot2+1\cdot5}{4}=2{,}75$ è anche la media $\dfrac{2+2+2+5}{4}$.
:::

:::esempio{titolo="Ricostruire il totale dai gruppi"}
Un laboratorio ha misurato una concentrazione media di $12\,\mathrm{mg/L}$ su dieci provette e di $16\,\mathrm{mg/L}$ su altre trenta provette. I due gruppi sono disgiunti e le misure sono nella stessa unità. La somma delle misure del primo gruppo è $10\cdot12=120$, mentre quella del secondo è $30\cdot16=480$. La media complessiva è quindi
$$
\bar x=\frac{120+480}{40}\,\mathrm{mg/L}=15\,\mathrm{mg/L}.
$$
È la media ponderata delle medie $12$ e $16$ con pesi uguali alle numerosità $10$ e $30$. Il risultato è più vicino a $16$ perché le provette del secondo gruppo sono tre volte quelle del primo. La media semplice delle due medie darebbe $14\,\mathrm{mg/L}$, perché assegnerebbe lo stesso peso ai due gruppi.

::grafico{xmin=10.5 xmax=17.5 ymin=-0.7 ymax=35 nomi="x,n" poligoni="11.7,0 12.3,0 12.3,10 11.7,10;15.7,0 16.3,0 16.3,30 15.7,30" segmenti="15,0,15,30" etichette="11.85,12.1,10;15.85,32.2,30" titolo="Le barre rappresentano i due gruppi tramite la loro media e la loro numerosità. La verticale a 15 indica la media ponderata."}
:::

:::osservazione
Quando le osservazioni sono raccolte in classi (capitolo 1), si sa quante osservazioni cadono in ogni classe, ma non si conoscono i singoli valori. Si sostituisce allora ogni osservazione con il punto medio della sua classe e si calcola la media ponderata dei punti medi, con pesi uguali alle frequenze; il risultato si chiama **media approssimata**. Per sei dati in $[0,10)$ e quattro in $[10,30)$ i punti medi sono $5$ e $20$, e la media approssimata vale $\dfrac{6\cdot5+4\cdot20}{10}=11$.

La media vera dipende da come i valori sono disposti dentro le classi. Se i sei dati della prima classe valgono tutti $0$ e i quattro della seconda valgono tutti $10$, la media vera è $\dfrac{4\cdot10}{10}=4$, molto lontana da $11$.

::grafico{xmin=-0.5 xmax=33 ymin=-0.07 ymax=0.78 nomi="x,densità" poligoni="0,0 10,0 10,0.6 0,0.6;10,0 30,0 30,0.2 10,0.2" linee="0,0.6 10,0.6 10,0;10,0.2 30,0.2 30,0" segmenti="11,0,11,0.7" punti="5,0,pieno;20,0,pieno" etichette="3.2,0.66,6 dati;17.2,0.26,4 dati;11.6,0.73,media 11" titolo="Istogramma delle due classi. Le altezze sono le densità $\dfrac{6}{10}$ e $\dfrac{4}{20}$, le aree sono le frequenze $6$ e $4$. I punti sull'asse sono i centri $5$ e $20$; la verticale indica la media approssimata $11$."}
:::

:::osservazione
Gli estremi delle classi danno due limiti per la media vera. Una tabella riporta tre tempi in $[10,20)$ e due in $[20,25)$, in minuti. Ogni tempo della prima classe è almeno $10$ e minore di $20$, e ogni tempo della seconda è almeno $20$ e minore di $25$. Perciò il totale dei cinque tempi è almeno $3\cdot10+2\cdot20=70$ minuti e strettamente minore di $3\cdot20+2\cdot25=110$ minuti. Dividendo per $5$, la media è almeno $14\,\mathrm{min}$ e minore di $22\,\mathrm{min}$. La media approssimata con i punti medi vale $\dfrac{3\cdot15+2\cdot22{,}5}{5}=18\,\mathrm{min}$, il centro di questo intervallo.
:::

:::osservazione
Cinque tempi hanno media $30\,\mathrm{min}$, quindi il loro totale è $150\,\mathrm{min}$. Si aggiunge un sesto tempo di $42\,\mathrm{min}$; il totale diventa $192\,\mathrm{min}$ e la nuova media è $\dfrac{192}{6}=32\,\mathrm{min}$.

Con le lettere, se si aggiunge un valore $u$ a $n$ osservazioni di media $\bar x$, la nuova media è $\dfrac{n\bar x+u}{n+1}$. Sottraendo la media precedente si ottiene
$$
\bar x_{\rm nuova}-\bar x=\frac{n\bar x+u-(n+1)\bar x}{n+1}=\frac{u-\bar x}{n+1}.
$$
La media si sposta quindi nella direzione del nuovo valore, e lo spostamento è tanto minore quanto più numeroso è il gruppo iniziale; nell'esempio vale $\dfrac{42-30}{6}=2\,\mathrm{min}$. Se invece il tempo di $42\,\mathrm{min}$ sostituisce un tempo registrato di $36\,\mathrm{min}$, la numerosità resta cinque e il totale aumenta di $6\,\mathrm{min}$, perciò la media aumenta di $\dfrac{42-36}{5}\,\mathrm{min}=1{,}2\,\mathrm{min}$. Nell'aggiunta il denominatore è $n+1$, nella sostituzione resta $n$.
:::

## Mediana, moda e quantili

:::definizione{#quantili titolo="Mediana e quantili empirici"}
Sette studenti impiegano $12$, $30$, $8$, $25$, $15$, $40$ e $18$ minuti per arrivare all'università. In ordine crescente i tempi sono $8,12,15,18,25,30,40$. Il tempo al centro della lista, $18$, ha tre tempi prima e tre dopo, ed è la mediana dei sette tempi.

Con le lettere, si ordinano le $n\ge1$ osservazioni dalla più piccola alla più grande e si indica con $x_{(k)}$ il valore che occupa il posto $k$ nella lista ordinata. Il posto $k$ si chiama rango del dato. I valori ripetuti occupano posti distinti; nella lista $2,2,4$, per esempio, il valore $2$ occupa i ranghi $1$ e $2$. La **mediana** $\operatorname{Med}(x)$ è il dato centrale se $n$ è dispari e la media dei due dati centrali se $n$ è pari. Scrivendo $n=2m+1$ nel primo caso e $n=2m$ nel secondo, si ha
$$
\begin{aligned}
\operatorname{Med}(x)&=x_{(m+1)} &&\text{se }n=2m+1,\\[6pt]
\operatorname{Med}(x)&=\frac{x_{(m)}+x_{(m+1)}}{2} &&\text{se }n=2m.
\end{aligned}
$$
Con i sette tempi $m=3$ e $\operatorname{Med}(x)=x_{(4)}=18$. In entrambi i casi almeno metà dei dati è minore o uguale alla mediana e almeno metà è maggiore o uguale.

Allo stesso modo si cerca un valore che lasci sotto di sé un quarto dei dati. Un quarto dei sette tempi corrisponde a $7\cdot0{,}25=1{,}75$ dati. Fino al rango $1$ c'è un solo dato, meno di $1{,}75$; fino al rango $2$ ce ne sono due, che sono almeno $1{,}75$. Il valore cercato è quindi il dato di rango $2$, cioè $12$.

Il **quantile empirico** di livello $p$, con $0<p<1$, è il dato $q_p$ che occupa il primo rango $k$ in cui la quota $\dfrac kn$ dei dati fino a quel posto raggiunge almeno $p$. La condizione $\dfrac kn\ge p$ equivale a $k\ge np$, perciò il rango cercato è il più piccolo intero maggiore o uguale a $np$, che si indica con $\lceil np\rceil$; per esempio $\lceil1{,}75\rceil=2$ e $\lceil2\rceil=2$. In formula
$$
q_p=x_{(\lceil np\rceil)}.
$$
Questa regola si chiama regola del **rango superiore** ed è quella usata in tutto il corso; per $p=0{,}5$ si usa invece la mediana definita sopra. I livelli $0{,}25$ e $0{,}75$ danno il primo e il terzo quartile, indicati con $Q_1$ e $Q_3$, che insieme alla mediana dividono la lista ordinata in quattro parti con circa $\dfrac n4$ dati ciascuna. Il quantile $q_p$ si chiama anche percentile di ordine $100p$.

I quartili servono a misurare la dispersione della metà centrale dei dati e a disegnare il box plot, più avanti in questo capitolo. I quantili di una variabile aleatoria tornano nel capitolo 6 e negli intervalli di confidenza del capitolo 10.
:::

:::esempio{titolo="Rango e frequenze cumulate"}
I dati ordinati sono $2,2,4,5,7,7,8,10$, quindi $n=8$. Il primo quartile occupa il rango $\lceil 8\cdot0{,}25\rceil=2$, perciò $Q_1=x_{(2)}=2$. Il terzo quartile occupa il rango $\lceil8\cdot0{,}75\rceil=6$, perciò $Q_3=x_{(6)}=7$. Per la mediana si usano i ranghi $4$ e $5$, occupati da $5$ e $7$, quindi $\operatorname{Med}(x)=\dfrac{5+7}{2}=6$.

Con una tabella di frequenze, la frequenza cumulata assoluta di un valore (capitolo 1) è il rango dell'ultima copia di quel valore. Il rango $6$ si trova perciò cercando il primo valore la cui cumulata raggiunge almeno $6$. Al valore $5$ la cumulata è $2+1+1=4$, mentre al valore $7$ è $4+2=6$. Si ottiene così $Q_3=7$ senza riscrivere la lista completa.

Nel grafico l'asse orizzontale riporta il rango $k$ e l'asse verticale il valore $x_{(k)}$ che occupa quel rango.

::grafico{xmin=-0.3 xmax=9 ymin=-0.6 ymax=11.6 nomi="k,xₖ" punti="1,2;2,2;3,4;4,5;5,7;6,7;7,8;8,10" segmenti="2,0,2,2;6,0,6,7" titolo="I punti danno i valori in ordine di rango. Le verticali ai ranghi 2 e 6 raggiungono rispettivamente il primo e il terzo quartile."}
:::

:::attenzione
I programmi di calcolo usano regole diverse per i quantili, e i risultati differiscono quando $np$ non è intero. Nei dati $2,6,10,18,30$ la regola del rango superiore dà $Q_1=6$, perché $\lceil5\cdot0{,}25\rceil=\lceil1{,}25\rceil=2$. Un'altra regola diffusa usa il rango $(n+1)p$ e, quando non è intero, prende il valore intermedio fra i due dati vicini, con un procedimento detto interpolazione lineare. Qui $(5+1)\cdot0{,}25=1{,}5$ è a metà fra il primo e il secondo rango, quindi il quartile è $\dfrac{2+6}{2}=4$. Due quartili calcolati con regole diverse non sono quindi confrontabili.
:::

:::definizione{#moda titolo="Moda"}
In un sondaggio sul colore preferito, rosso, blu e verde compaiono rispettivamente $5$, $5$ e $2$ volte. Una **moda** è una modalità di frequenza massima, quindi in questo sondaggio le mode sono due, rosso e blu. La moda è l'unico indice di posizione di questo capitolo che si calcola anche per un carattere qualitativo nominale (capitolo 1), perché richiede soltanto di contare le risposte.

Con dati raggruppati in classi di ampiezza diversa si confrontano le densità di frequenza dell'istogramma (capitolo 1). Con $8$ attese in $[0,2)$ minuti e $12$ in $[2,8)$ minuti, la classe con più attese è $[2,8)$, ma la densità della prima classe è $\dfrac82=4$ attese per minuto e quella della seconda è $\dfrac{12}{6}=2$ attese per minuto. La **classe modale** è la classe di densità di frequenza massima, cioè quella con il rettangolo più alto nell'istogramma; qui è $[0,2)$.
:::

:::osservazione
Nella serie $1,2,4,4,4,4,6,9$ il terzo quartile occupa il rango $\lceil8\cdot0{,}75\rceil=6$ e vale $4$. I dati minori o uguali a $4$ sono sei, cioè il $75\,\%$ degli otto dati, mentre i dati strettamente minori di $4$ sono soltanto due, cioè il $25\,\%$. Le due quote sono molto diverse perché il valore $4$ è ripetuto quattro volte.

Per ogni quantile calcolato con il rango superiore, posto $k=\lceil np\rceil$, valgono due disuguaglianze.

- La quota di dati minori o uguali a $q_p$ è almeno $p$, perché i dati di rango da $1$ a $k$ sono minori o uguali a $x_{(k)}$ e $\dfrac kn\ge p$.
- La quota di dati strettamente minori di $q_p$ è minore di $p$, perché questi dati occupano ranghi precedenti a $k$, quindi sono al più $k-1$, e $k-1<np$ dato che $k$ è il più piccolo intero maggiore o uguale a $np$.

Con la funzione di ripartizione empirica del capitolo 1 le due disuguaglianze si scrivono $F_n(q_p)\ge p$ e $F_n(q_p^-)<p$, quindi il quantile è il punto in cui il grafico di $F_n$ raggiunge o supera con un salto il livello $p$. La frase «il terzo quartile lascia sotto di sé il $75\,\%$ dei dati» va perciò letta come «almeno il $75\,\%$ dei dati è minore o uguale a $Q_3$».

::grafico{xmin=-1 xmax=10.5 ymin=-0.08 ymax=1.16 nomi="x,Fₙ(x)" linee="-0.6,0 1,0;1,0.125 2,0.125;2,0.25 4,0.25;4,0.75 6,0.75;6,0.875 9,0.875;9,1 10,1" punti="1,0,vuoto;1,0.125,pieno;2,0.125,vuoto;2,0.25,pieno;4,0.25,vuoto;4,0.75,pieno;6,0.75,vuoto;6,0.875,pieno;9,0.875,vuoto;9,1,pieno" segmenti="-0.6,0.75,4,0.75;4,0,4,0.25" etichette="-0.95,0.79,0,75;-0.95,0.29,0,25" titolo="Funzione di ripartizione empirica di $1,2,4,4,4,4,6,9$. Il salto in $4$ va da $\dfrac{2}{8}$ a $\dfrac{6}{8}$ e raggiunge il livello $\dfrac{3}{4}$, quindi $Q_3=4$."}
:::

::::teorema{#centro-assoluto titolo="Minimo della somma delle distanze assolute"}
Tre case si trovano lungo una strada rettilinea, ai chilometri $1$, $2$ e $9$. Con un punto di raccolta al chilometro $2$, che è la mediana dei tre dati, la strada complessiva dalle tre case è $1+0+7=8$ chilometri. Al chilometro $4$, che è la media, la strada complessiva è $3+2+5=10$ chilometri.

Siano $x_1,\ldots,x_n$ dati reali, con $n\ge1$. La somma delle distanze dei dati da un numero $c$, cioè $S(c)=\sum_i |x_i-c|$, è minima quando $c$ è la mediana. Se $n$ è pari, ogni valore fra i due dati centrali rende minima la somma, quindi prendere la loro media come mediana è una convenzione. Il teorema dice in quale senso la mediana è un centro dei dati.

::grafico{f="abs(x-1)+abs(x-2)+abs(x-9)" xmin=-0.8 xmax=11 ymin=-1 ymax=23 nomi="c,S(c)" legenda=0 punti="2,8,pieno;4,10,pieno" segmenti="2,0,2,8;4,0,4,10" etichette="2.2,6.2,(2, 8);4.2,11.6,(4, 10)" titolo="Grafico di $S(c)=|1-c|+|2-c|+|9-c|$. La funzione è lineare a tratti e ha il minimo $8$ nella mediana $c=2$; nella media $c=4$ vale $10$."}

:::dimostrazione
Si ordinano i dati e si accoppia il dato più piccolo con il più grande, il secondo con il penultimo, e così via. Per una coppia $a\le b$ la somma $|a-c|+|b-c|$ vale

- $(c-a)+(b-c)=b-a$ se $c\in[a,b]$;
- $(a-c)+(b-c)=b-a+2(a-c)$, maggiore di $b-a$, se $c<a$;
- $(c-a)+(c-b)=b-a+2(c-b)$, maggiore di $b-a$, se $c>b$.

Il contributo di ogni coppia è quindi minimo esattamente quando $c$ sta nell'intervallo $[a,b]$ della coppia. Gli intervalli delle coppie sono annidati, cioè ciascuno contiene il successivo, perché passando da una coppia alla successiva il dato sinistro aumenta e il dato destro diminuisce. Perciò ogni $c$ dell'intervallo della coppia centrale appartiene a tutti gli intervalli e rende minimi tutti i contributi insieme. Per $n$ pari questo è l'intervallo fra i due dati centrali. Per $n$ dispari resta anche il dato centrale senza compagno, il cui contributo $|x_{(m+1)}-c|$ è minimo, e vale $0$, per $c=x_{(m+1)}$. Con i dati $1,2,9$ la coppia $(1,9)$ contribuisce almeno $8$ e il dato $2$ almeno $0$, quindi il minimo di $S$ è $8$, in $c=2$.
:::
::::

## Varianza descrittiva e varianza corretta

:::definizione{#varianza titolo="Varianza e deviazione standard"}
I tempi $4,4,4$ e i tempi $1,4,7$, in minuti, hanno la stessa media, $4$ minuti, ma solo nel secondo gruppo sono diversi fra loro. Per misurare la differenza si calcola, per ogni dato, lo scarto dalla media $x_i-\bar x$, positivo se il dato è sopra la media e negativo se è sotto. Per $1,4,7$ gli scarti sono $-3$, $0$ e $3$.

La somma degli scarti con segno è sempre zero, perché $\sum_i(x_i-\bar x)=\sum_i x_i-n\bar x$ e $\sum_i x_i=n\bar x$ per la definizione di media. Si sommano allora i quadrati degli scarti, che sono positivi o nulli. Per $1,4,7$ la somma è $9+0+9=18\,\mathrm{min^2}$, per $4,4,4$ è $0$. Indicata questa somma con $D$, si definiscono
$$
D=\sum_{i=1}^{n}(x_i-\bar x)^2,\qquad
v=\frac{D}{n},\qquad
s^2=\frac{D}{n-1}\quad(n>1).
$$

- La **varianza descrittiva** $v$ è la media dei quadrati degli scarti; per $1,4,7$ vale $\dfrac{18}{3}=6\,\mathrm{min^2}$. Si usa quando interessano soltanto i dati raccolti.
- La **varianza campionaria corretta** $s^2$, che si legge «s quadro», divide la stessa somma per $n-1$; per $1,4,7$ vale $\dfrac{18}{2}=9\,\mathrm{min^2}$. Si usa quando i dati sono un campione (capitolo 1) e interessa la dispersione dell'intera popolazione da cui provengono.

Il divisore $n-1$ dipende dal fatto che la media della popolazione non è nota, perciò gli scarti si calcolano dalla media del campione $\bar x$. Per il teorema sul minimo della somma degli scarti quadratici, più avanti in questo capitolo, la somma dei quadrati delle distanze dei dati da un numero è minima quando quel numero è $\bar x$. Quindi $D$ è minore o uguale alla stessa somma calcolata dalla media della popolazione. Se per esempio la popolazione da cui provengono i tempi $1,4,7$ avesse media $5$ minuti, quella somma varrebbe $16+1+4=21\,\mathrm{min^2}$, mentre $D=18\,\mathrm{min^2}$. Dividendo per $n-1$ invece che per $n$ si ottiene un valore più grande, che compensa questa differenza; il capitolo 9 dimostra che la compensazione è esatta in media su tutti i campioni possibili.

Se i dati sono quelli di tutte le $N$ unità di una popolazione finita, la varianza della popolazione è la loro varianza descrittiva, con divisore $N$.

La varianza si misura nel quadrato dell'unità dei dati, per esempio in minuti quadrati. La sua radice quadrata torna all'unità dei dati e si chiama **deviazione standard**. La radice di $v$ è la deviazione standard descrittiva, $s=\sqrt{s^2}$ è la deviazione standard corretta e la radice della varianza della popolazione è la deviazione standard della popolazione. Per $1,4,7$ si ha $s=\sqrt9=3\,\mathrm{min}$. La deviazione standard torna negli intervalli di confidenza e nei test dei capitoli 10 e 11.
:::

:::esempio{titolo="Due divisori per gli stessi scarti"}
Tre tempi di lavorazione sono $2,4,6$ minuti. La media vale $4\,\mathrm{min}$, quindi gli scarti sono $-2,0,2$ minuti e la somma dei loro quadrati vale $8\,\mathrm{min^2}$. I due indici valgono
$$
v=\frac{8}{3}\,\mathrm{min^2},
\qquad
s^2=\frac{8}{2}\,\mathrm{min^2}=4\,\mathrm{min^2}.
$$
Le deviazioni standard sono $\sqrt v=\sqrt{\dfrac83}\approx1{,}63\,\mathrm{min}$ e $s=2\,\mathrm{min}$.
:::

:::osservazione
I dati $2,2,2,5$ hanno media $2{,}75$, come si è visto con la media ponderata. Lo scarto $-0{,}75$ compare tre volte e lo scarto $2{,}25$ una volta, perciò
$$
D=3\cdot(-0{,}75)^2+1\cdot2{,}25^2=1{,}6875+5{,}0625=6{,}75,
$$
da cui $v=\dfrac{6{,}75}{4}=1{,}6875$ e $s^2=\dfrac{6{,}75}{3}=2{,}25$.

Con una tabella di frequenze assolute, lo scarto quadratico del valore $a_j$ compare $n_j$ volte, quindi $D=\sum_j n_j(a_j-\bar x)^2$. Con le frequenze relative $f_j=\dfrac{n_j}{n}$ si ottiene direttamente $v=\sum_j f_j(a_j-\bar x)^2$. Il divisore per ottenere $s^2$ è $n-1$, dove $n$ è il numero delle osservazioni e non il numero delle righe della tabella; nell'esempio le righe sono due, le osservazioni quattro e il divisore $3$.
:::

## Identità di calcolo e cambi di scala

::::teorema{#trasformazioni titolo="Scarti, formula della varianza e trasformazioni"}
Per i dati $1,4,7$ la media dei quadrati è $\dfrac{1+16+49}{3}=22$ e il quadrato della media è $16$; la differenza $6$ è la varianza descrittiva trovata con gli scarti. Moltiplicando i dati per $2$ e aggiungendo $10$ si ottengono $12,18,24$, con media $18=10+2\cdot4$ e varianza descrittiva $\dfrac{36+0+36}{3}=24=2^2\cdot6$.

Una trasformazione dei dati della forma $y=a+bx$, con $a$ e $b$ numeri reali, si chiama trasformazione affine o cambio affine. Il numero $a$ sposta lo zero della scala e il numero $b$ cambia l'unità di misura; il passaggio da gradi Celsius a gradi Fahrenheit, per esempio, è $y=32+\dfrac95x$.

Per $n\ge1$ dati reali di media $\bar x$ si ha
$$
\sum_{i=1}^{n}(x_i-\bar x)=0,\qquad
v=\frac{1}{n}\sum_{i=1}^n x_i^2-\bar x^2.
$$
Se ogni dato è trasformato secondo $y_i=a+bx_i$ con $a,b$ reali, allora
$$
\bar y=a+b\bar x,\qquad
v_y=b^2v_x,\qquad
s_y=|b|s_x\quad(n>1).
$$
La formula con i quadrati dà $v$ dalla sola media e dalla media dei quadrati, senza calcolare gli scarti uno per uno. Le regole della trasformazione danno gli indici dei dati convertiti senza riscrivere i dati.

:::dimostrazione
Per la definizione di media $\sum_i x_i=n\bar x$, quindi $\sum_i(x_i-\bar x)=n\bar x-n\bar x=0$. Per la varianza si sviluppa il quadrato $(x_i-\bar x)^2=x_i^2-2\bar xx_i+\bar x^2$, si somma su $i$ e si sostituisce di nuovo $\sum_i x_i=n\bar x$:
$$
\begin{aligned}
D
&=\sum_i x_i^2-2\bar x\sum_i x_i+n\bar x^2\\[6pt]
&=\sum_i x_i^2-2\bar x\cdot n\bar x+n\bar x^2\\[6pt]
&=\sum_i x_i^2-n\bar x^2.
\end{aligned}
$$
Dividendo per $n$ si ottiene la formula di $v$. Per i dati trasformati $\bar y=\dfrac1n\sum_i(a+bx_i)=\dfrac{na+b\sum_i x_i}{n}=a+b\bar x$. Segue che $y_i-\bar y=b(x_i-\bar x)$, quindi il quadrato di ogni scarto è moltiplicato per $b^2$, e lo stesso fattore moltiplica $D$, $v$ e $s^2$. Poiché $\sqrt{b^2}=|b|$, la deviazione standard è moltiplicata per $|b|$.
:::
::::

:::esempio{titolo="Spostare lo zero e cambiare l'unità"}
Tre temperature hanno media $20\,^\circ\mathrm{C}$ e deviazione standard corretta $5\,^\circ\mathrm{C}$. Nella scala Fahrenheit si usa $y=32+\dfrac{9}{5}x$. La nuova media è $32+\dfrac95\cdot20=68\,^\circ\mathrm{F}$ e la nuova deviazione standard è $\dfrac95\cdot5=9\,^\circ\mathrm{F}$. L'addendo $32$ interviene nel calcolo della media. Nella deviazione standard interviene solo il fattore $\dfrac{9}{5}$, perché ogni scarto è una differenza fra due temperature e nella differenza lo spostamento dello zero si cancella.
:::

:::osservazione
Se $b>0$, la trasformazione $y=a+bx$ conserva l'ordine delle osservazioni, quindi ogni dato conserva il suo rango. Mediana e quantili si trasformano perciò con la stessa formula $a+bx$, e la differenza $Q_3-Q_1$ fra terzo e primo quartile, detta intervallo interquartile, è moltiplicata per $b$. Se $b<0$, l'ordine si inverte, e il dato di rango $n+1-k$ fra le $x$ diventa il dato di rango $k$ fra le $y$. Per individuare un quantile si usa allora $y_{(k)}=a+bx_{(n+1-k)}$. La mediana si trasforma ancora con $a+b\operatorname{Med}(x)$, perché i due valori centrali si scambiano di posto e la loro media si trasforma con la stessa formula.
:::

:::attenzione
Con il rango superiore, il ribaltamento $y=-x$ cambia l'intervallo interquartile $Q_3-Q_1$, mentre lascia uguale il campo di variazione, cioè la differenza fra il dato massimo e il dato minimo. Nei dati $0,1,2,10$ il primo e il terzo quartile occupano i ranghi $\lceil4\cdot0{,}25\rceil=1$ e $\lceil4\cdot0{,}75\rceil=3$, quindi valgono $0$ e $2$, e l'intervallo interquartile vale $2$. Dopo il ribaltamento i dati ordinati sono $-10,-2,-1,0$, e gli stessi ranghi danno i quartili $-10$ e $-1$, con intervallo interquartile $9$. Il campo di variazione vale $10$ prima e dopo.

La differenza nasce dal fatto che i ranghi $1$ e $3$ non sono simmetrici nella lista di quattro dati, dato che il simmetrico del rango $1$ è il rango $4$. Prima del ribaltamento il dato lontano dagli altri, $10$, occupa il rango $4$ e resta fuori dai due quartili; dopo il ribaltamento diventa $-10$, occupa il rango $1$ e coincide con il primo quartile.
:::

:::osservazione
I gruppi $1,3$ e $7,9$ hanno medie $2$ e $8$, e la media dei quattro dati insieme è $5$. Le somme dei quadrati degli scarti dentro i gruppi sono $D_1=1+1=2$ e $D_2=1+1=2$. Sui quattro dati la somma dei quadrati degli scarti da $5$ è $16+4+4+16=40$, che è anche $2+2+2\cdot(2-5)^2+2\cdot(8-5)^2$.

Con le lettere, siano dati due gruppi disgiunti di numerosità $n_1,n_2$, con medie $\bar x_1,\bar x_2$ e somme dei quadrati degli scarti interni $D_1,D_2$, e sia $\bar x$ la media complessiva. La somma dei quadrati degli scarti rispetto a $\bar x$ è
$$
D=D_1+D_2+n_1(\bar x_1-\bar x)^2+n_2(\bar x_2-\bar x)^2.
$$
Per ricavarla, per un dato del primo gruppo si scrive $x_i-\bar x=(x_i-\bar x_1)+(\bar x_1-\bar x)$ e si sommano i quadrati sul gruppo:
$$
\sum_{i\in\text{gr. 1}}(x_i-\bar x)^2=D_1+2(\bar x_1-\bar x)\sum_{i\in\text{gr. 1}}(x_i-\bar x_1)+n_1(\bar x_1-\bar x)^2=D_1+n_1(\bar x_1-\bar x)^2.
$$
Il termine centrale è zero perché gli scarti dalla media del proprio gruppo sommano a zero. Lo stesso conto vale per il secondo gruppo, e sommando i due risultati si ottiene la formula. La dispersione complessiva somma quindi la dispersione dentro i gruppi e la distanza fra le medie dei gruppi e la media complessiva.
:::

::::teorema{#centro-quadratico titolo="Minimo della somma degli scarti quadratici"}
Per i dati $0,1,5$, la cui media è $2$, la somma dei quadrati delle distanze dei dati da $2$ vale $4+1+9=14$. Da $1$, che è la mediana, la stessa somma vale $1+0+16=17$.

Siano $x_1,\ldots,x_n$ dati reali con $n\ge1$. Fra tutti i numeri reali $c$, la somma $\sum_i(x_i-c)^2$ assume il minimo in $c=\bar x$. La media è quindi il centro dei dati se le distanze si misurano con i loro quadrati, mentre senza quadrati il centro è la mediana. Il teorema spiega il divisore $n-1$ della varianza corretta, e lo stesso criterio costruisce la retta di regressione del capitolo 12.

::grafico{f="x^2+(x-1)^2+(x-5)^2" xmin=-0.8 xmax=5 ymin=-0.5 ymax=45 nomi="c,Q(c)" legenda=0 punti="2,14,pieno;1,17,pieno" segmenti="2,0,2,14;1,0,1,17" etichette="2.2,10,(2, 14);0.15,12.5,(1, 17)" titolo="Grafico di $Q(c)=c^2+(c-1)^2+(c-5)^2$ per i dati $0,1,5$. La parabola ha il vertice nella media $c=2$, dove vale $D=14$; nella mediana $c=1$ vale $17$."}

:::dimostrazione
Si scrive $x_i-c=(x_i-\bar x)+(\bar x-c)$ e si sviluppa il quadrato:
$$
\sum_i(x_i-c)^2=\sum_i(x_i-\bar x)^2+2(\bar x-c)\sum_i(x_i-\bar x)+n(\bar x-c)^2.
$$
Il termine centrale è zero, perché $2(\bar x-c)$ non dipende da $i$ e $\sum_i(x_i-\bar x)=0$. Si ottiene
$$
\sum_i(x_i-c)^2=D+n(\bar x-c)^2.
$$
Il termine aggiunto a $D$ è non negativo e si annulla solo per $c=\bar x$, quindi in quel punto si trova il minimo. La formula dice anche di quanto cresce la somma quando il centro si allontana dalla media; per i dati $0,1,5$ e il centro $1$ dà $14+3\cdot(2-1)^2=17$, lo stesso valore trovato sommando $1+0+16$.
:::
::::

## Misure di dispersione assolute e relative

:::definizione{#dispersione titolo="Campo di variazione, intervallo interquartile e coefficiente di variazione"}
Le attese $5,10,15,20,50$ minuti dell'introduzione coprono $50-5=45$ minuti. Il primo e il terzo quartile occupano i ranghi $\lceil5\cdot0{,}25\rceil=2$ e $\lceil5\cdot0{,}75\rceil=4$, quindi valgono $10$ e $20$ minuti, e distano $10$ minuti. Se l'attesa più lunga fosse di $100$ minuti, la prima distanza diventerebbe $95$ minuti e la seconda resterebbe $10$.

Il **campo di variazione** è la differenza fra il dato massimo e il dato minimo. L'**intervallo interquartile** è la differenza $\operatorname{IQR}=Q_3-Q_1$; la sigla viene dall'inglese *interquartile range*. Fra $Q_1$ e $Q_3$ cade circa la metà centrale dei dati, perciò l'intervallo interquartile misura la dispersione della parte centrale. Entrambi gli indici hanno la stessa unità dei dati. Il campo di variazione dipende soltanto dai due dati estremi, mentre l'intervallo interquartile dipende da due dati di rango intermedio e non cambia se cambia soltanto il valore del massimo o del minimo.

Una deviazione standard di $8\,\mathrm{mL}$ è il $4\,\%$ di una capacità media di $200\,\mathrm{mL}$ e lo $0{,}4\,\%$ di una capacità media di $2000\,\mathrm{mL}$. Il **coefficiente di variazione** è la deviazione standard divisa per la media,
$$
\operatorname{CV}=\frac{s}{\bar x},
$$
dove $s$ è la deviazione standard corretta; per una popolazione intera si usa la deviazione standard della popolazione. Il coefficiente è un numero puro, si scrive anche in percentuale e confronta la dispersione di gruppi con medie diverse. Si calcola per misure su una scala a rapporti (capitolo 1), con uno zero che indica l'assenza della grandezza, e con media positiva; con uno zero convenzionale il coefficiente cambia quando si sposta lo zero, come mostra più avanti l'esempio delle temperature.
:::

:::esempio{titolo="Confrontare processi su livelli diversi"}
Due linee producono contenitori di capacità media rispettivamente $200\,\mathrm{mL}$ e $500\,\mathrm{mL}$. Le deviazioni standard corrette sono $8\,\mathrm{mL}$ e $15\,\mathrm{mL}$. I coefficienti di variazione sono
$$
\operatorname{CV}_1=\frac{8}{200}=0{,}04,\qquad
\operatorname{CV}_2=\frac{15}{500}=0{,}03,
$$
cioè il $4\,\%$ e il $3\,\%$. La seconda linea ha la deviazione standard maggiore in millilitri, mentre la prima ha la dispersione maggiore in rapporto alla propria media. Convertendo le capacità in litri, numeratore e denominatore di ciascun rapporto vengono divisi per $1000$, perciò i coefficienti restano uguali.
:::

:::attenzione
Il coefficiente di variazione dipende dalla posizione dello zero della scala. Temperature con media $20\,^\circ\mathrm{C}$ e deviazione standard $5\,^\circ\mathrm{C}$ danno il rapporto $\dfrac{5}{20}=0{,}25$. In kelvin le stesse misure hanno media $293{,}15\,\mathrm{K}$ e deviazione standard $5\,\mathrm{K}$, perché il passaggio ai kelvin aggiunge $273{,}15$ a ogni dato e lascia uguali gli scarti. Il rapporto diventa quindi $\dfrac{5}{293{,}15}\approx0{,}017$, anche se le temperature misurate sono le stesse.

Anche una media vicina a zero rende il coefficiente instabile. Con $s=1$ e media $0{,}1$ il coefficiente vale $10$; se la media passa a $0{,}2$, il coefficiente scende a $5$.
:::

## Box plot e osservazioni oltre le barriere

:::definizione{#boxplot titolo="Box plot e regola delle barriere"}
Il **box plot**, o diagramma a scatola, riassume una lista di dati sull'asse dei valori con questi elementi.

- Una scatola che va dal primo al terzo quartile, con una linea interna in corrispondenza della mediana.
- Due baffi, cioè due segmenti che partono dai lati della scatola e arrivano a due dati osservati.
- Un punto isolato per ogni dato lontano dagli altri.

La lunghezza dei baffi si stabilisce con due soglie, dette barriere, calcolate con la regola proposta dallo statistico John Tukey:
$$
L=Q_1-1{,}5\operatorname{IQR},\qquad
U=Q_3+1{,}5\operatorname{IQR}.
$$
Le barriere sono soglie di calcolo e non si disegnano. Il baffo inferiore arriva al più piccolo dato maggiore o uguale a $L$, il baffo superiore al più grande dato minore o uguale a $U$; un dato uguale a una barriera è quindi interno. I dati strettamente esterni all'intervallo $[L,U]$ si disegnano come punti isolati e si chiamano **valori anomali** secondo la regola di Tukey (in inglese *outlier*).

Più box plot disegnati sulla stessa scala mettono a confronto più gruppi.
:::

:::esempio{titolo="Dai quartili ai baffi"}
Per i dati $2,3,4,5,6,7,8,18$ si ha $n=8$. I quartili occupano i ranghi $\lceil8\cdot0{,}25\rceil=2$ e $\lceil8\cdot0{,}75\rceil=6$, quindi $Q_1=3$ e $Q_3=7$, mentre la mediana è $\dfrac{5+6}{2}=5{,}5$. Poiché $\operatorname{IQR}=4$ e $1{,}5\cdot4=6$, le barriere sono $L=3-6=-3$ e $U=7+6=13$. Il dato $18$ supera la barriera superiore, quindi è un valore anomalo. I baffi si fermano perciò in $2$ e in $8$, il dato più piccolo e il dato più grande compresi fra le barriere. Nel grafico si vedono la scatola da $3$ a $7$, la mediana $5{,}5$, i baffi fino a $2$ e a $8$ e il punto isolato $18$.

::grafico{xmin=0 xmax=20 ymin=-0.6 ymax=1.7 nomi="x,y" poligoni="3,0.65 7,0.65 7,1.35 3,1.35" linee="3,0.65 7,0.65 7,1.35 3,1.35 3,0.65;2,1 3,1;7,1 8,1;2,0.86 2,1.14;8,0.86 8,1.14;5.5,0.65 5.5,1.35" punti="18,1,pieno" titolo="Valori osservati sull'asse x."}
:::

:::osservazione
La lunghezza della scatola è l'intervallo interquartile, e la posizione della mediana nella scatola mostra come si dispone la metà centrale dei dati; nell'esempio precedente la mediana $5{,}5$ dista $2{,}5$ da $Q_1$ e $1{,}5$ da $Q_3$.

Il box plot conserva soltanto pochi numeri della lista, perciò liste diverse danno lo stesso grafico. Le liste $1,2,3,4,5$ e $1,2,3,3,3,4,5$ hanno entrambe $Q_1=2$, mediana $3$, $Q_3=4$ e baffi fino a $1$ e a $5$; il grafico non mostra quindi quanti dati ci sono.

Il valore anomalo $18$ dell'esempio precedente è un errore di registrazione oppure un valore vero ma raro, e per distinguere i due casi si torna a come il dato è stato raccolto.
:::

:::esempio{titolo="Confronto fra due box plot"}
Due reparti producono lotti misurati nella stessa unità. Nel primo si osservano $Q_1=12$, mediana $14$ e $Q_3=18$. Nel secondo si osservano $Q_1=16$, mediana $18$ e $Q_3=20$. La mediana del secondo reparto coincide con il terzo quartile del primo. Perciò almeno metà dei lotti del secondo reparto misura almeno $18$, mentre nel primo almeno tre quarti dei lotti misurano al più $18$. Le misure del secondo reparto sono quindi spostate verso valori più alti.

L'intervallo interquartile vale $20-16=4$ nel secondo reparto e $18-12=6$ nel primo, quindi la metà centrale delle misure è meno dispersa nel secondo reparto. Per confrontare i campi di variazione servono anche il dato minimo e il dato massimo di ciascun reparto, compresi gli eventuali valori anomali.

::grafico{xmin=0 xmax=23 ymin=-0.3 ymax=3.3 nomi="x,y" poligoni="12,0.6 18,0.6 18,1.4 12,1.4;16,1.9 20,1.9 20,2.7 16,2.7" linee="12,0.6 18,0.6 18,1.4 12,1.4 12,0.6;14,0.6 14,1.4;16,1.9 20,1.9 20,2.7 16,2.7 16,1.9;18,1.9 18,2.7" segmenti="18,1.4,18,1.9" etichette="2,1,reparto 1;2,2.3,reparto 2" titolo="Scatole dei due reparti sulla stessa scala, senza baffi perché gli estremi non sono noti. La tratteggiata collega il terzo quartile del primo reparto alla mediana del secondo, entrambi uguali a $18$."}
:::

## Standardizzazione e forma della distribuzione

:::definizione{#standardizzazione titolo="Punteggio standardizzato"}
In un gruppo di misure con media $70$ e deviazione standard $6$, la misura $58$ ha scarto $58-70=-12$ dalla media. Poiché $\dfrac{-12}{6}=-2$, la misura $58$ sta due deviazioni standard sotto la media, e il numero $-2$ è il suo punteggio standardizzato.

Con le lettere, per un insieme di $n>1$ osservazioni con deviazione standard corretta $s>0$, il **punteggio standardizzato** di $x_i$ è
$$
z_i=\frac{x_i-\bar x}{s}.
$$
Il segno di $z_i$ dice da che parte della media si trova il dato, e il valore assoluto $|z_i|$ dice quante deviazioni standard lo separano dalla media. Il punteggio è un numero puro. Serve a confrontare dati misurati su scale diverse, come nell'esempio seguente, e nel capitolo 6 a calcolare le probabilità della legge normale con una sola tabella.

La formula inversa $x_i=\bar x+s z_i$ riporta un punteggio standardizzato sulla scala dei dati; con media $70$ e deviazione standard $6$, al punteggio $z=1$ corrisponde il dato $76$. Se tutti i dati coincidono, $s=0$ e la divisione non è definita.
:::

:::esempio{titolo="Confronto fra due misure"}
Una prova ha media $64$ e deviazione standard $8$. Il punteggio $76$ si trova a $\dfrac{76-64}{8}=1{,}5$ deviazioni standard sopra la media. In una seconda prova con media $72$ e deviazione standard $4$, il punteggio $78$ ha lo stesso valore standardizzato, perché $\dfrac{78-72}{4}=1{,}5$.

La quota di risultati inferiori dipende invece anche dalla forma della distribuzione dei punteggi, cioè da come i punteggi sono disposti attorno alla media. Le liste $-1,-1,2$ e $-2,1,1$, per esempio, hanno entrambe media $0$ e deviazione standard corretta $\sqrt3$, quindi al valore $0$ corrisponde in entrambe il punteggio standardizzato $0$. Nella prima lista il valore $0$ ha sotto di sé due dati su tre, nella seconda uno solo.
:::

:::osservazione
Nella serie $1,2,2,3,22$ quattro dati stanno fra $1$ e $3$, mentre il dato $22$ è molto più a destra. La disposizione dei dati sull'asse, cioè dove si addensano, se ci sono vuoti fra gruppi di valori e da che parte si allungano, si chiama **forma della distribuzione**. Una distribuzione ha una **coda a destra** quando alcuni dati si allontanano dal centro verso i valori alti molto più di quanto gli altri si allontanino verso i valori bassi; si dice anche che è asimmetrica a destra. Nella serie il dato $22$ forma una coda a destra e porta la media a $6$, mentre la mediana resta $2$.

La standardizzazione è il cambio affine $z=-\dfrac{\bar x}{s}+\dfrac1s\,x$, con coefficiente $b=\dfrac{1}{s}$ positivo. Perciò, per il teorema sulle trasformazioni, conserva l'ordine dei dati e porta la media a $0$ e la deviazione standard corretta a $1$. Sposta l'asse e moltiplica tutte le distanze fra i dati per lo stesso numero $\dfrac1s$, quindi la forma resta la stessa; in particolare la coda resta a destra e i vuoti fra gruppi di valori restano.
:::

:::osservazione
I due insiemi $2,3,4,5,6$ e $2,3,4,5,26$ differiscono soltanto per il dato più alto. Mediana e quartili sono i dati di rango $3$, $2$ e $4$, quindi coincidono nei due insiemi e valgono $4$, $3$ e $5$. Le medie valgono invece $4$ e $8$, e le deviazioni standard corrette circa $1{,}58$ e $10{,}12$.

Mediana e intervallo interquartile dipendono soltanto dai dati di certi ranghi, quindi non cambiano finché il dato più alto resta il più alto. Media e deviazione standard usano i valori di tutti i dati, perciò risentono del dato $26$, e la differenza fra media e mediana mostra quanto pesa quel dato.

::grafico{xmin=0 xmax=28 ymin=-0.2 ymax=3 nomi="x,y" punti="2,2;3,2;4,2;5,2;6,2;2,1;3,1;4,1;5,1;26,1" linee="4,1.7 4,2.3;8,0.7 8,1.3" segmenti="4,0.75,4,1.25" etichette="3.4,2.55,media e mediana 4;8.4,1.5,media 8;3.4,0.4,mediana 4" titolo="I due insiemi $2,3,4,5,6$ (in alto) e $2,3,4,5,26$ (in basso). Le linee continue indicano le medie $4$ e $8$; la tratteggiata indica la mediana $4$ del secondo insieme."}
:::
