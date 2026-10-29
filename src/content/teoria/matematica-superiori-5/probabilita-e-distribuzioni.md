---
titolo: Probabilità e distribuzioni
sommario: Come si contano i casi con il calcolo combinatorio, come si calcola la probabilità di un evento con i teoremi della somma e del prodotto, la probabilità condizionata e il teorema di Bayes, che cosa sono le variabili aleatorie discrete e continue con valore medio e varianza, e come si usano le distribuzioni binomiale, di Poisson, uniforme, esponenziale e normale.
---

## Richiami di calcolo combinatorio

:::definizione{#disposizioni-permutazioni titolo="Disposizioni e permutazioni"}
Siano dati $n$ oggetti distinti e un numero naturale $k \leq n$. Una **disposizione semplice** di classe $k$ è una sequenza ordinata di $k$ oggetti scelti fra gli $n$, senza ripetizioni. Due disposizioni sono diverse se contengono oggetti diversi oppure gli stessi oggetti in un ordine diverso. Il primo oggetto si sceglie in $n$ modi, il secondo fra gli $n - 1$ rimasti, e così via fino al $k$-esimo, quindi il numero delle disposizioni semplici è
$$
D_{n,k} = n\,(n - 1)\,(n - 2) \cdots (n - k + 1) .
$$
Se gli oggetti si possono ripetere, ogni posto si riempie in $n$ modi e si ottengono le **disposizioni con ripetizione**, in numero $D'_{n,k} = n^k$. Le **permutazioni** di $n$ oggetti sono le disposizioni semplici di classe $n$, cioè i modi di mettere in fila tutti gli oggetti. Il loro numero è $P_n = n!$, dove $n! = n\,(n - 1) \cdots 2 \cdot 1$ si legge "$n$ fattoriale"; si pone inoltre $0! = 1$.

Per esempio, in una gara con $8$ atleti i podi possibili sono $D_{8,3} = 8 \cdot 7 \cdot 6 = 336$, i codici di $3$ cifre, che possono ripetersi, sono $D'_{10,3} = 10^3 = 1000$, e i modi di mettere in fila $5$ persone sono $P_5 = 5! = 120$.
:::

:::definizione{#combinazioni titolo="Combinazioni e coefficiente binomiale"}
Una **combinazione semplice** di $n$ oggetti distinti di classe $k$ è un gruppo di $k$ oggetti scelti fra gli $n$, senza ripetizioni e senza tenere conto dell'ordine. I $k$ oggetti di una combinazione si possono ordinare in $k!$ modi, quindi ogni combinazione corrisponde a $k!$ disposizioni. Perciò il numero delle combinazioni è
$$
C_{n,k} = \frac{D_{n,k}}{k!} = \binom{n}{k} = \frac{n!}{k!\,(n - k)!} .
$$
Il numero $\dbinom{n}{k}$ si chiama **coefficiente binomiale** e si legge "$n$ su $k$". Valgono $\dbinom{n}{0} = \dbinom{n}{n} = 1$ e $\dbinom{n}{k} = \dbinom{n}{n - k}$. Per esempio, i modi di scegliere $3$ studenti su $10$ per un'interrogazione sono
$$
\binom{10}{3} = \frac{10 \cdot 9 \cdot 8}{3!} = \frac{720}{6} = 120 .
$$
I coefficienti binomiali sono anche i coefficienti dello sviluppo della potenza di un binomio, e compaiono nella distribuzione binomiale.
:::

:::esempio{titolo="Tre modi di contare le coppie di lettere"}
Con le lettere $A$, $B$, $C$, $D$ si formano coppie di lettere.

- Se l'ordine conta e le lettere sono diverse, $AB$ e $BA$ sono coppie diverse, e le coppie sono $D_{4,2} = 4 \cdot 3 = 12$.
- Se l'ordine conta e le lettere possono ripetersi, si aggiungono $AA$, $BB$, $CC$, $DD$, e le coppie sono $D'_{4,2} = 4^2 = 16$.
- Se l'ordine non conta, $AB$ e $BA$ sono lo stesso gruppo, e i gruppi sono $\dbinom{4}{2} = \dfrac{12}{2} = 6$.
:::

## Eventi e probabilità classica

:::definizione{#eventi titolo="Spazio campionario ed eventi"}
Un **esperimento aleatorio** è un esperimento di cui non si può prevedere il risultato, come il lancio di un dado o l'estrazione di una carta. L'insieme di tutti i risultati possibili si chiama **spazio campionario** e si indica con $\Omega$. Un **evento** è un sottoinsieme di $\Omega$, e si dice che l'evento si verifica se il risultato dell'esperimento gli appartiene. Lo spazio $\Omega$ è l'evento certo, l'insieme vuoto è l'evento impossibile.

Con gli eventi si opera come con gli insiemi.

- L'**unione** $A \cup B$ si verifica quando si verifica almeno uno dei due eventi.
- L'**intersezione** $A \cap B$ si verifica quando si verificano entrambi gli eventi.
- L'**evento contrario** $\overline{E}$ è il complementare di $E$ in $\Omega$, e si verifica quando $E$ non si verifica.

Due eventi si dicono **incompatibili** se $A \cap B = \emptyset$, cioè se non possono verificarsi insieme. Nel lancio di un dado si ha $\Omega = \{1, 2, 3, 4, 5, 6\}$. Gli eventi "esce un numero pari" e "esce un numero maggiore di $3$" sono $A = \{2, 4, 6\}$ e $B = \{4, 5, 6\}$, quindi $A \cup B = \{2, 4, 5, 6\}$, $A \cap B = \{4, 6\}$ e $\overline{A} = \{1, 3, 5\}$.
:::

:::definizione{#probabilita-classica titolo="Probabilità classica"}
Sia $\Omega$ un insieme finito di risultati **equiprobabili**, cioè con la stessa possibilità di verificarsi. La **probabilità** di un evento $E$ è il rapporto tra il numero dei casi favorevoli, cioè degli elementi di $E$, e il numero dei casi possibili, cioè degli elementi di $\Omega$:
$$
P(E) = \frac{\text{numero dei casi favorevoli}}{\text{numero dei casi possibili}} .
$$
I casi favorevoli sono al massimo quanti i casi possibili, quindi $0 \leq P(E) \leq 1$; inoltre $P(\Omega) = 1$ e $P(\emptyset) = 0$. Nel lancio di un dado la probabilità che esca un numero pari è $\dfrac{3}{6} = \dfrac{1}{2}$. Nel lancio di due dadi i casi possibili sono le coppie ordinate di risultati, cioè $D'_{6,2} = 36$; la somma vale $7$ nei $6$ casi $(1, 6)$, $(2, 5)$, $(3, 4)$, $(4, 3)$, $(5, 2)$, $(6, 1)$, perciò la sua probabilità è $\dfrac{6}{36} = \dfrac{1}{6}$.
:::

:::osservazione{#altre-definizioni titolo="Probabilità statistica e soggettiva"}
Quando i casi non sono equiprobabili si usano altre definizioni. Nella definizione **statistica** la probabilità di un evento è la frequenza relativa $\dfrac{m}{n}$ con cui l'evento si è verificato in un numero $n$ grande di prove ripetute nelle stesse condizioni; per esempio, se su $1000$ pezzi controllati $23$ sono difettosi, la probabilità che un pezzo sia difettoso si valuta $0{,}023$. Nella definizione **soggettiva** la probabilità è la somma che una persona coerente è disposta a pagare per ricevere $1$ se l'evento si verifica. I teoremi che seguono valgono per tutte queste definizioni.
:::

:::teorema{#evento-contrario titolo="Probabilità dell'evento contrario"}
Per ogni evento $E$ vale
$$
P\big( \overline{E} \big) = 1 - P(E) .
$$
Nella probabilità classica i casi favorevoli a $\overline{E}$ sono i casi possibili meno quelli favorevoli a $E$, e da qui segue la formula. Il teorema serve per gli eventi del tipo "almeno uno", il cui contrario è più semplice. Per esempio, nel lancio di tre monete il contrario di "esce almeno una testa" è "escono tre croci", che ha probabilità $\dfrac{1}{8}$, perché i casi possibili sono $2^3 = 8$. Quindi la probabilità di almeno una testa è $1 - \dfrac{1}{8} = \dfrac{7}{8}$.
:::

:::esempio{titolo="Probabilità calcolata con le combinazioni"}
Un'urna contiene $6$ palline rosse e $4$ bianche, e se ne estraggono $3$ insieme. L'ordine non conta, quindi i casi possibili sono $\dbinom{10}{3} = 120$. I casi in cui le tre palline sono rosse sono $\dbinom{6}{3} = 20$, perciò
$$
P(\text{tre rosse}) = \frac{20}{120} = \frac{1}{6} .
$$
Per avere esattamente due rosse si scelgono $2$ rosse fra $6$ e $1$ bianca fra $4$, in $\dbinom{6}{2} \cdot \dbinom{4}{1} = 15 \cdot 4 = 60$ modi, quindi la probabilità è $\dfrac{60}{120} = \dfrac{1}{2}$.
:::

## Teoremi della somma e del prodotto

:::teorema{#teorema-somma titolo="Teorema della somma"}
Per due eventi qualsiasi $A$ e $B$ vale
$$
P(A \cup B) = P(A) + P(B) - P(A \cap B) .
$$
Se $A$ e $B$ sono incompatibili, allora $P(A \cap B) = 0$ e la formula diventa $P(A \cup B) = P(A) + P(B)$. Nella probabilità classica la formula si ottiene contando i casi favorevoli. Sommando i casi di $A$ e quelli di $B$, i casi di $A \cap B$ vengono contati due volte, quindi si sottraggono una volta.

Nel lancio di un dado, con $A = \{2, 4, 6\}$ e $B = \{4, 5, 6\}$, si ha
$$
P(A \cup B) = \frac{3}{6} + \frac{3}{6} - \frac{2}{6} = \frac{4}{6} = \frac{2}{3} ,
$$
in accordo con il conteggio diretto di $A \cup B = \{2, 4, 5, 6\}$.

::venn{zone="a,ab,b" nomi="A,B" ambiente="Ω" elementi="a:2;ab:4,6;b:5;u:1,3" titolo="Nel lancio di un dado $A \cup B = \{2, 4, 5, 6\}$; i risultati $4$ e $6$ appartengono sia ad $A$ sia a $B$, e nella somma $P(A) + P(B)$ vengono contati due volte"}

:::

:::definizione{#probabilita-condizionata titolo="Probabilità condizionata"}
Siano $A$ e $B$ due eventi, con $P(B) > 0$. La **probabilità di $A$ condizionata a $B$** è la probabilità che si verifichi $A$ sapendo che si è verificato $B$, e vale
$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)} .
$$
Sapere che $B$ si è verificato riduce i casi possibili a quelli di $B$, e fra questi i casi favorevoli sono quelli di $A \cap B$. Con casi equiprobabili $P(A \mid B)$ è quindi il numero degli elementi di $A \cap B$ diviso per il numero degli elementi di $B$. Nel lancio di un dado, sapendo che è uscito un numero maggiore di $3$, la probabilità che il numero sia pari è
$$
P(A \mid B) = \frac{P(\{4, 6\})}{P(\{4, 5, 6\})} = \frac{\dfrac{2}{6}}{\dfrac{3}{6}} = \frac{2}{3} ,
$$
mentre senza informazioni la probabilità di un numero pari è $\dfrac{1}{2}$.

::venn{zone="ab" nomi="A,B" ambiente="Ω" elementi="a:2;ab:4,6;b:5;u:1,3" titolo="Sapendo che si è verificato $B = \{4, 5, 6\}$, i casi possibili sono $3$ e i casi favorevoli ad $A$ sono quelli di $A \cap B = \{4, 6\}$, quindi $P(A \mid B) = \dfrac{2}{3}$"}

:::

:::teorema{#teorema-prodotto titolo="Teorema del prodotto"}
Per due eventi $A$ e $B$ con probabilità positiva vale
$$
P(A \cap B) = P(A) \cdot P(B \mid A) = P(B) \cdot P(A \mid B) .
$$
La formula si ottiene moltiplicando per il denominatore la definizione di probabilità condizionata. Serve per le estrazioni successive, in cui si conosce la probabilità di ogni estrazione sapendo come sono andate le precedenti. Per esempio, da un mazzo di $40$ carte si estraggono due carte senza rimettere la prima nel mazzo. La probabilità che la prima sia un asso è $\dfrac{4}{40}$; se la prima è un asso restano $3$ assi su $39$ carte, quindi
$$
P(\text{due assi}) = \frac{4}{40} \cdot \frac{3}{39} = \frac{12}{1560} = \frac{1}{130} .
$$
:::

:::definizione{#eventi-indipendenti titolo="Eventi indipendenti"}
Due eventi $A$ e $B$ con probabilità positiva sono **indipendenti** se $P(A \mid B) = P(A)$, cioè se sapere che $B$ si è verificato non cambia la probabilità di $A$. Per il teorema del prodotto la condizione equivale a
$$
P(A \cap B) = P(A) \cdot P(B) .
$$
Per più eventi indipendenti la probabilità che si verifichino tutti è il prodotto delle loro probabilità. Le prove ripetute con reinserimento e i lanci successivi di un dado o di una moneta danno eventi indipendenti. Nel lancio di due dadi la probabilità che il primo mostri $6$ e il secondo un numero pari è $\dfrac{1}{6} \cdot \dfrac{1}{2} = \dfrac{1}{12}$; lo conferma il conteggio diretto, perché le coppie favorevoli sono $(6, 2)$, $(6, 4)$, $(6, 6)$, cioè $3$ su $36$.
:::

:::attenzione
Due eventi incompatibili con probabilità positive *non* sono mai indipendenti. Nel lancio di un dado gli eventi $A = \{1, 2\}$ e $B = \{3, 4\}$ sono incompatibili, quindi $P(A \cap B) = 0$. Invece $P(A) \cdot P(B) = \dfrac{1}{3} \cdot \dfrac{1}{3} = \dfrac{1}{9}$, perciò $A$ e $B$ non sono indipendenti. Infatti, sapendo che si è verificato $B$, la probabilità di $A$ diventa $0$.
:::

## Teorema di Bayes

:::teorema{#disintegrazione titolo="Formula di disintegrazione"}
Siano $B_1, B_2, \dots, B_n$ eventi incompatibili a due a due, con probabilità positive, la cui unione è $\Omega$; si dice che formano una **partizione** di $\Omega$. Allora per ogni evento $A$ vale
$$
P(A) = P(B_1) \cdot P(A \mid B_1) + P(B_2) \cdot P(A \mid B_2) + \dots + P(B_n) \cdot P(A \mid B_n) .
$$
L'evento $A$ è l'unione degli eventi incompatibili $A \cap B_1, \dots, A \cap B_n$, quindi la sua probabilità è la somma delle loro probabilità, e per il teorema del prodotto $P(A \cap B_i) = P(B_i) \cdot P(A \mid B_i)$. La formula si chiama anche formula della probabilità totale.

Per esempio, l'urna $U_1$ contiene $2$ palline bianche e $3$ nere, l'urna $U_2$ contiene $4$ bianche e $1$ nera. Si sceglie un'urna lanciando una moneta e si estrae una pallina. Gli eventi $U_1$ e $U_2$ formano una partizione, perciò
$$
P(\text{bianca}) = \frac{1}{2} \cdot \frac{2}{5} + \frac{1}{2} \cdot \frac{4}{5} = \frac{1}{5} + \frac{2}{5} = \frac{3}{5} .
$$
:::

:::teorema{#teorema-bayes titolo="Teorema di Bayes"}
Siano $B_1, \dots, B_n$ una partizione di $\Omega$ e sia $A$ un evento con $P(A) > 0$. Allora per ogni $k$ vale
$$
P(B_k \mid A) = \frac{P(B_k) \cdot P(A \mid B_k)}{P(B_1) \cdot P(A \mid B_1) + \dots + P(B_n) \cdot P(A \mid B_n)} .
$$
Per la definizione di probabilità condizionata $P(B_k \mid A) = \dfrac{P(B_k \cap A)}{P(A)}$. Il numeratore si scrive con il teorema del prodotto e il denominatore con la formula di disintegrazione, e si ottiene la formula. Il teorema permette di risalire dall'effetto osservato, l'evento $A$, alla probabilità di ciascuna causa $B_k$. Nell'esempio delle due urne, se la pallina estratta è bianca, la probabilità che provenga da $U_2$ è
$$
P(U_2 \mid \text{bianca}) = \frac{\dfrac{1}{2} \cdot \dfrac{4}{5}}{\dfrac{3}{5}} = \frac{\dfrac{2}{5}}{\dfrac{3}{5}} = \frac{2}{3} .
$$
:::

:::esempio{titolo="Un test diagnostico"}
Una malattia colpisce l'$1\%$ della popolazione. Un test è positivo nel $90\%$ dei malati e nel $5\%$ dei sani. Gli eventi $M$, "la persona è malata", e $S$, "la persona è sana", formano una partizione, con $P(M) = 0{,}01$ e $P(S) = 0{,}99$. Per la formula di disintegrazione la probabilità di un test positivo è
$$
P(+) = 0{,}01 \cdot 0{,}9 + 0{,}99 \cdot 0{,}05 = 0{,}009 + 0{,}0495 = 0{,}0585 .
$$
Per il teorema di Bayes la probabilità che una persona con il test positivo sia malata è
$$
P(M \mid +) = \frac{0{,}009}{0{,}0585} \approx 0{,}154 .
$$
Il valore è circa il $15\%$, perché i sani sono molto più numerosi dei malati e quindi i falsi positivi sono più dei veri positivi.
:::

## Variabili aleatorie discrete

:::definizione{#variabile-aleatoria-discreta titolo="Variabile aleatoria discreta"}
Una **variabile aleatoria** $X$ associa un numero a ogni risultato di un esperimento aleatorio. Si dice **discreta** se assume un numero finito di valori $x_1, x_2, \dots, x_n$, oppure una successione di valori. La **distribuzione di probabilità** di $X$ è l'elenco dei valori con le loro probabilità $p_i = P(X = x_i)$. Gli eventi $X = x_i$ sono incompatibili e la loro unione è $\Omega$, quindi
$$
p_1 + p_2 + \dots + p_n = 1 .
$$
Per esempio, si lanciano tre monete e $X$ è il numero di teste. I casi possibili sono $8$; una sola sequenza dà $0$ teste, tre sequenze danno $1$ testa, cioè $TCC$, $CTC$, $CCT$, tre danno $2$ teste e una dà $3$ teste. La distribuzione è

| $x_i$ | $0$ | $1$ | $2$ | $3$ |
| --- | --- | --- | --- | --- |
| $p_i$ | $\dfrac{1}{8}$ | $\dfrac{3}{8}$ | $\dfrac{3}{8}$ | $\dfrac{1}{8}$ |

e la somma delle probabilità è $1$. Nel grafico della distribuzione, detto istogramma, sopra ogni valore $x_i$ si disegna un rettangolo di altezza $p_i$.

::grafico{poligoni="-0.35,0 -0.35,0.1250 0.35,0.1250 0.35,0;0.65,0 0.65,0.3750 1.35,0.3750 1.35,0;1.65,0 1.65,0.3750 2.35,0.3750 2.35,0;2.65,0 2.65,0.1250 3.35,0.1250 3.35,0" linee="-0.06,0.125 0.06,0.125;-0.06,0.375 0.06,0.375" etichette="-0.75,0.125,0,125;-0.75,0.375,0,375" xmin=-1 xmax=4 ymin=-0.05 ymax=0.45 nomi="x,p" legenda=0 titolo="Distribuzione del numero di teste in tre lanci di una moneta: i valori $0$ e $3$ hanno probabilità $\dfrac{1}{8}$, i valori $1$ e $2$ hanno probabilità $\dfrac{3}{8}$"}

:::

:::definizione{#valore-medio titolo="Valore medio"}
Il **valore medio**, o speranza matematica, di una variabile aleatoria discreta $X$ è la somma dei prodotti di ogni valore per la sua probabilità:
$$
M(X) = x_1 p_1 + x_2 p_2 + \dots + x_n p_n .
$$
Si indica anche con $\mu$. Se l'esperimento si ripete molte volte, la media dei valori osservati di $X$ è vicina a $M(X)$. Per il numero di teste in tre lanci si ottiene
$$
M(X) = 0 \cdot \frac{1}{8} + 1 \cdot \frac{3}{8} + 2 \cdot \frac{3}{8} + 3 \cdot \frac{1}{8} = \frac{12}{8} = \frac{3}{2} .
$$
Il valore medio può non essere uno dei valori della variabile, come in questo caso.
:::

:::osservazione{#gioco-equo titolo="Gioco equo"}
In un gioco il guadagno $G$ di un giocatore è una variabile aleatoria, e il gioco si dice **equo** se $M(G) = 0$. Per esempio, si paga $1$ euro per lanciare un dado e si ricevono $4$ euro se esce $6$. Il guadagno vale $3$ con probabilità $\dfrac{1}{6}$ e $-1$ con probabilità $\dfrac{5}{6}$, quindi
$$
M(G) = 3 \cdot \frac{1}{6} - 1 \cdot \frac{5}{6} = -\frac{2}{6} = -\frac{1}{3} ,
$$
e il gioco è sfavorevole al giocatore. Se in caso di $6$ si ricevono $6$ euro, il guadagno vale $5$ con probabilità $\dfrac{1}{6}$ e $M(G) = \dfrac{5}{6} - \dfrac{5}{6} = 0$, quindi il gioco è equo.
:::

:::definizione{#varianza titolo="Varianza e deviazione standard"}
Sia $\mu = M(X)$. La **varianza** di $X$ è il valore medio del quadrato della distanza dei valori da $\mu$:
$$
\operatorname{var}(X) = (x_1 - \mu)^2 p_1 + (x_2 - \mu)^2 p_2 + \dots + (x_n - \mu)^2 p_n .
$$
La **deviazione standard** è $\sigma = \sqrt{\operatorname{var}(X)}$, e si misura nella stessa unità di $X$. Le due grandezze misurano quanto i valori di $X$ sono dispersi attorno al valore medio; si scrive anche $\operatorname{var}(X) = \sigma^2$. Per il numero di teste in tre lanci, con $\mu = \dfrac{3}{2}$, si ha
$$
\operatorname{var}(X) = \frac{9}{4} \cdot \frac{1}{8} + \frac{1}{4} \cdot \frac{3}{8} + \frac{1}{4} \cdot \frac{3}{8} + \frac{9}{4} \cdot \frac{1}{8} = \frac{24}{32} = \frac{3}{4} ,
$$
quindi $\sigma = \dfrac{\sqrt{3}}{2} \approx 0{,}87$.
:::

:::teorema{#calcolo-varianza titolo="Formula per il calcolo della varianza"}
La varianza è uguale al valore medio del quadrato meno il quadrato del valore medio:
$$
\operatorname{var}(X) = M\big( X^2 \big) - \big[ M(X) \big]^2 ,
\qquad
\text{dove } M\big( X^2 \big) = x_1^2 p_1 + \dots + x_n^2 p_n .
$$
Si sviluppa $(x_i - \mu)^2 = x_i^2 - 2\mu x_i + \mu^2$ in ogni termine della definizione e si somma. Si ottiene $M\big( X^2 \big) - 2\mu \cdot \mu + \mu^2 \cdot 1$, perché la somma degli $x_i p_i$ è $\mu$ e la somma dei $p_i$ è $1$, e il risultato è $M\big( X^2 \big) - \mu^2$. La formula evita le differenze $x_i - \mu$, che spesso sono frazioni. Per il numero di teste $M\big( X^2 \big) = \dfrac{0 + 3 + 12 + 9}{8} = 3$, quindi $\operatorname{var}(X) = 3 - \dfrac{9}{4} = \dfrac{3}{4}$, come nel calcolo con la definizione.
:::

:::osservazione{#trasformazione-lineare titolo="Valore medio e varianza di aX + b"}
Siano $a$ e $b$ due numeri reali. La variabile $aX + b$ assume i valori $a x_i + b$ con le stesse probabilità $p_i$, e dalle definizioni seguono
$$
M(aX + b) = a\,M(X) + b ,
\qquad
\operatorname{var}(aX + b) = a^2 \operatorname{var}(X) .
$$
Una traslazione di tutti i valori sposta il valore medio e lascia invariata la dispersione. Per il numero di teste $X$ e $Y = 2X + 1$ si ha $M(Y) = 2 \cdot \dfrac{3}{2} + 1 = 4$ e $\operatorname{var}(Y) = 4 \cdot \dfrac{3}{4} = 3$.
:::

## Distribuzione binomiale

:::definizione{#distribuzione-binomiale titolo="Distribuzione binomiale"}
Una prova ha due soli esiti, il successo con probabilità $p$ e l'insuccesso con probabilità $q = 1 - p$. Si ripete la prova $n$ volte, in modo che le ripetizioni siano indipendenti, e si indica con $X$ il numero dei successi. Allora per $k = 0, 1, \dots, n$ vale
$$
P(X = k) = \binom{n}{k}\,p^k\,q^{\,n - k} .
$$
Si dice che $X$ ha **distribuzione binomiale** di parametri $n$ e $p$. Una sequenza particolare con $k$ successi e $n - k$ insuccessi ha probabilità $p^k q^{\,n - k}$, per il teorema del prodotto di eventi indipendenti. I $k$ posti dei successi fra le $n$ prove si scelgono in $\dbinom{n}{k}$ modi, e queste sequenze sono incompatibili, quindi le loro probabilità si sommano.

Per esempio, si lancia un dado $4$ volte e $X$ è il numero di volte in cui esce $6$, con $p = \dfrac{1}{6}$ e $q = \dfrac{5}{6}$. Allora
$$
P(X = 2) = \binom{4}{2} \left( \frac{1}{6} \right)^2 \left( \frac{5}{6} \right)^2 = 6 \cdot \frac{25}{1296} = \frac{25}{216} \approx 0{,}116 .
$$

::grafico{poligoni="-0.35,0 -0.35,0.0878 0.35,0.0878 0.35,0;0.65,0 0.65,0.2634 1.35,0.2634 1.35,0;1.65,0 1.65,0.3292 2.35,0.3292 2.35,0;2.65,0 2.65,0.2195 3.35,0.2195 3.35,0;3.65,0 3.65,0.0823 4.35,0.0823 4.35,0;4.65,0 4.65,0.0165 5.35,0.0165 5.35,0;5.65,0 5.65,0.0014 6.35,0.0014 6.35,0" linee="-0.08,0.1 0.08,0.1;-0.08,0.2 0.08,0.2;-0.08,0.3 0.08,0.3" etichette="-0.75,0.1,0,1;-0.75,0.2,0,2;-0.75,0.3,0,3" xmin=-1 xmax=7 ymin=-0.04 ymax=0.38 nomi="k,p" legenda=0 titolo="Distribuzione binomiale con $n = 6$ e $p = \dfrac{1}{3}$: il valore più probabile è $k = 2$, con probabilità $\dfrac{80}{243} \approx 0{,}33$"}

:::

:::teorema{#media-varianza-binomiale titolo="Valore medio e varianza della distribuzione binomiale"}
Se $X$ ha distribuzione binomiale di parametri $n$ e $p$, allora
$$
M(X) = n p ,
\qquad
\operatorname{var}(X) = n p q ,
\qquad
\sigma = \sqrt{n p q} .
$$
Per $n = 1$ la variabile vale $1$ con probabilità $p$ e $0$ con probabilità $q$, quindi $M(X) = p$, $M\big( X^2 \big) = p$ e $\operatorname{var}(X) = p - p^2 = pq$; per $n$ qualsiasi la dimostrazione si studia all'università. Per esempio, in $600$ lanci di un dado il numero di $6$ ha valore medio $600 \cdot \dfrac{1}{6} = 100$ e varianza $600 \cdot \dfrac{1}{6} \cdot \dfrac{5}{6} = \dfrac{250}{3}$, quindi $\sigma \approx 9{,}13$.
:::

## Distribuzione di Poisson

:::definizione{#distribuzione-poisson titolo="Distribuzione di Poisson"}
Sia $\lambda$ un numero positivo. Una variabile aleatoria $X$ che assume i valori $0, 1, 2, \dots$ ha **distribuzione di Poisson** di parametro $\lambda$ se
$$
P(X = k) = \frac{\lambda^k}{k!}\,e^{-\lambda} .
$$
Questa distribuzione descrive il numero di eventi rari che avvengono in un intervallo di tempo o in una regione di spazio, quando gli eventi sono indipendenti e il loro numero medio è $\lambda$. Sono di questo tipo il numero di telefonate a un centralino in un minuto, il numero di decadimenti di una sorgente radioattiva in un secondo e il numero di difetti in un metro di tessuto. La somma di tutte le probabilità è $1$; la verifica richiede le serie, che si studiano all'università.

Per esempio, se un centralino riceve in media $2$ telefonate al minuto, la probabilità di nessuna telefonata in un minuto è $P(X = 0) = e^{-2} \approx 0{,}135$, e quella di esattamente $3$ telefonate è
$$
P(X = 3) = \frac{2^3}{3!}\,e^{-2} = \frac{4}{3}\,e^{-2} \approx 0{,}180 .
$$

::grafico{poligoni="-0.35,0 -0.35,0.1353 0.35,0.1353 0.35,0;0.65,0 0.65,0.2707 1.35,0.2707 1.35,0;1.65,0 1.65,0.2707 2.35,0.2707 2.35,0;2.65,0 2.65,0.1804 3.35,0.1804 3.35,0;3.65,0 3.65,0.0902 4.35,0.0902 4.35,0;4.65,0 4.65,0.0361 5.35,0.0361 5.35,0;5.65,0 5.65,0.0120 6.35,0.0120 6.35,0;6.65,0 6.65,0.0034 7.35,0.0034 7.35,0" linee="-0.08,0.1 0.08,0.1;-0.08,0.2 0.08,0.2" etichette="-0.8,0.1,0,1;-0.8,0.2,0,2" xmin=-1 xmax=8 ymin=-0.03 ymax=0.32 nomi="k,p" legenda=0 titolo="Distribuzione di Poisson con $\lambda = 2$: i valori $k = 1$ e $k = 2$ hanno la stessa probabilità $2e^{-2} \approx 0{,}27$, e per $k$ grande le probabilità diventano molto piccole"}

:::

:::teorema{#media-varianza-poisson titolo="Valore medio e varianza della distribuzione di Poisson"}
Se $X$ ha distribuzione di Poisson di parametro $\lambda$, allora
$$
M(X) = \lambda ,
\qquad
\operatorname{var}(X) = \lambda ,
\qquad
\sigma = \sqrt{\lambda} .
$$
Il parametro $\lambda$ è quindi il numero medio di eventi, e si ricava dai dati del problema. La dimostrazione si studia all'università. Nell'esempio del centralino il numero di telefonate in un minuto ha valore medio $2$ e deviazione standard $\sqrt{2} \approx 1{,}41$, e il numero di telefonate in $5$ minuti ha distribuzione di Poisson con $\lambda = 10$.
:::

:::osservazione{#approssimazione-poisson titolo="Approssimazione della binomiale con la distribuzione di Poisson"}
Se $n$ è grande e $p$ è piccolo, la distribuzione binomiale di parametri $n$ e $p$ ha valori molto vicini a quelli della distribuzione di Poisson con $\lambda = n p$. Il calcolo con la formula di Poisson è più semplice, perché non contiene coefficienti binomiali con $n$ grande. Per esempio, se lo $0{,}4\%$ dei pezzi prodotti da una macchina è difettoso, in un lotto di $500$ pezzi si ha $\lambda = 500 \cdot 0{,}004 = 2$. La probabilità che il lotto non contenga pezzi difettosi è $0{,}996^{500} \approx 0{,}1348$ con la binomiale e $e^{-2} \approx 0{,}1353$ con la distribuzione di Poisson.
:::

## Variabili aleatorie continue

:::definizione{#densita-probabilita titolo="Variabile aleatoria continua e densità di probabilità"}
Una variabile aleatoria è **continua** se può assumere tutti i valori di un intervallo, come un tempo di attesa o una lunghezza. La sua distribuzione è descritta da una **densità di probabilità**, cioè da una funzione $f$ tale che
$$
\begin{cases}
f(x) \geq 0 \quad \text{per ogni } x , \\[4pt]
\displaystyle\int_{-\infty}^{+\infty} f(x)\,dx = 1 .
\end{cases}
$$
La probabilità che $X$ sia compresa tra $a$ e $b$ è l'area del trapezoide di $f$ su $[a, b]$:
$$
P(a \leq X \leq b) = \int_a^b f(x)\,dx .
$$
Gli integrali su intervalli illimitati sono integrali impropri, studiati nell'argomento sugli integrali definiti, aree e volumi. Per esempio, la funzione che vale $\dfrac{x}{2}$ per $0 \leq x \leq 2$ e $0$ altrove è una densità, perché non è mai negativa e $\displaystyle\int_0^2 \frac{x}{2}\,dx = \left[ \frac{x^2}{4} \right]_0^2 = 1$. Per questa densità
$$
P(1 \leq X \leq 2) = \int_1^2 \frac{x}{2}\,dx = \left[ \frac{x^2}{4} \right]_1^2 = 1 - \frac{1}{4} = \frac{3}{4} .
$$

::grafico{f="x<0||x>2?0:x/2" area="x/2;0;1;2" segmenti="2,0,2,1" xmin=-1 xmax=3 ymin=-0.2 ymax=1.4 legenda="y = f(x)" titolo="La densità che vale $\dfrac{x}{2}$ su $[0, 2]$ e $0$ altrove: l'area colorata tra $x = 1$ e $x = 2$ è $P(1 \leq X \leq 2) = \dfrac{3}{4}$, e l'area totale è $1$"}

:::

:::attenzione
Per una variabile continua la probabilità di un singolo valore è nulla, perché $P(X = a) = \displaystyle\int_a^a f(x)\,dx = 0$. Perciò $P(a \leq X \leq b) = P(a < X < b)$, e includere o escludere gli estremi non cambia il risultato. Inoltre il valore $f(x)$ *non* è una probabilità e può essere maggiore di $1$. Per esempio, la funzione che vale $2$ su $\left[ 0, \dfrac{1}{2} \right]$ e $0$ altrove è una densità, perché l'area del rettangolo è $2 \cdot \dfrac{1}{2} = 1$.
:::

:::definizione{#funzione-ripartizione titolo="Funzione di ripartizione"}
La **funzione di ripartizione** di una variabile aleatoria continua $X$ con densità $f$ è
$$
F(x) = P(X \leq x) = \int_{-\infty}^{x} f(t)\,dt .
$$
È una funzione integrale, quindi, per il teorema fondamentale del calcolo integrale, $F'(x) = f(x)$ nei punti in cui $f$ è continua. Con la funzione di ripartizione si ha $P(a \leq X \leq b) = F(b) - F(a)$. Per la densità $\dfrac{x}{2}$ su $[0, 2]$ si ottiene $F(x) = 0$ per $x < 0$, $F(x) = \dfrac{x^2}{4}$ per $0 \leq x \leq 2$ e $F(x) = 1$ per $x > 2$; per esempio $P(X \leq 1) = F(1) = \dfrac{1}{4}$.
:::

:::definizione{#media-varianza-continua titolo="Valore medio e varianza di una variabile continua"}
Per una variabile aleatoria continua con densità $f$ il valore medio e la varianza si definiscono come per le variabili discrete, con l'integrale al posto della somma:
$$
M(X) = \int_{-\infty}^{+\infty} x\,f(x)\,dx ,
\qquad
\operatorname{var}(X) = \int_{-\infty}^{+\infty} (x - \mu)^2 f(x)\,dx = \int_{-\infty}^{+\infty} x^2 f(x)\,dx - \mu^2 .
$$
La seconda espressione della varianza si ricava come la formula per il calcolo della varianza nel caso discreto. Per la densità $\dfrac{x}{2}$ su $[0, 2]$ si ha
$$
M(X) = \int_0^2 \frac{x^2}{2}\,dx = \frac{8}{6} = \frac{4}{3} ,
\qquad
\int_0^2 \frac{x^3}{2}\,dx = \frac{16}{8} = 2 ,
$$
quindi $\operatorname{var}(X) = 2 - \dfrac{16}{9} = \dfrac{2}{9}$ e $\sigma = \dfrac{\sqrt{2}}{3} \approx 0{,}47$.
:::

## Distribuzione uniforme ed esponenziale

:::definizione{#distribuzione-uniforme titolo="Distribuzione uniforme"}
Una variabile aleatoria ha **distribuzione uniforme** sull'intervallo $[a, b]$ se la sua densità vale $\dfrac{1}{b - a}$ su $[a, b]$ e $0$ altrove. La densità è costante, quindi intervalli della stessa lunghezza contenuti in $[a, b]$ hanno la stessa probabilità, e per $a \leq c \leq d \leq b$ si ha
$$
P(c \leq X \leq d) = \frac{d - c}{b - a} .
$$
Con le formule del valore medio e della varianza di una variabile continua si trovano
$$
M(X) = \frac{a + b}{2} ,
\qquad
\operatorname{var}(X) = \frac{(b - a)^2}{12} .
$$
Per esempio, un treno della metropolitana passa ogni $8$ minuti e una persona arriva in stazione in un istante casuale. Il suo tempo di attesa $X$, in minuti, ha distribuzione uniforme su $[0, 8]$. La probabilità di aspettare al massimo $3$ minuti è $\dfrac{3}{8}$, l'attesa media è $4$ minuti e la deviazione standard è $\sqrt{\dfrac{64}{12}} = \dfrac{4}{\sqrt{3}} \approx 2{,}31$ minuti.

::grafico{f="x<0||x>8?0:1/8" area="1/8;0;0;3" segmenti="0,0,0,0.125;8,0,8,0.125" xmin=-2 xmax=10 ymin=-0.03 ymax=0.2 nomi="x,y" legenda="y = f(x)" titolo="Densità uniforme su $[0, 8]$, di altezza $\dfrac{1}{8}$: l'area colorata è $P(0 \leq X \leq 3) = \dfrac{3}{8}$"}

:::

:::definizione{#distribuzione-esponenziale titolo="Distribuzione esponenziale"}
Sia $\lambda$ un numero positivo. Una variabile aleatoria ha **distribuzione esponenziale** di parametro $\lambda$ se la sua densità vale $\lambda\,e^{-\lambda x}$ per $x \geq 0$ e $0$ per $x < 0$. Descrive tempi di attesa e durate, come il tempo fino al guasto di un componente o fino al decadimento di un nucleo. Per $t \geq 0$ l'integrale improprio dà
$$
P(X > t) = \int_t^{+\infty} \lambda\,e^{-\lambda x}\,dx = \lim_{c \to +\infty} \Big[ -e^{-\lambda x} \Big]_t^c = e^{-\lambda t} ,
$$
quindi la funzione di ripartizione è $F(t) = 1 - e^{-\lambda t}$. Il valore medio e la varianza sono
$$
M(X) = \frac{1}{\lambda} ,
\qquad
\operatorname{var}(X) = \frac{1}{\lambda^2} ,
$$
e si calcolano integrando per parti. Per esempio, se la durata di una telefonata, in minuti, ha distribuzione esponenziale con durata media di $1$ minuto, allora $\lambda = 1$. La probabilità che una telefonata duri più di $2$ minuti è $e^{-2} \approx 0{,}135$, e quella che duri al massimo $1$ minuto è $1 - e^{-1} \approx 0{,}632$.

::grafico{f="x<0?0:exp(-x)" area="exp(-x);0;0;1" xmin=-1 xmax=5 ymin=-0.2 ymax=1.3 legenda="y = f(x)" titolo="Densità esponenziale con $\lambda = 1$: l'area colorata è $P(X \leq 1) = 1 - e^{-1} \approx 0{,}632$"}

:::

:::osservazione{#assenza-memoria titolo="Assenza di memoria"}
Per una variabile con distribuzione esponenziale e per $s, t \geq 0$ vale
$$
P(X > s + t \mid X > s) = \frac{P(X > s + t)}{P(X > s)} = \frac{e^{-\lambda (s + t)}}{e^{-\lambda s}} = e^{-\lambda t} = P(X > t) ,
$$
dove si è usato che l'evento $X > s + t$ è contenuto nell'evento $X > s$. In parole, un componente che ha già funzionato per un tempo $s$ ha la stessa probabilità di funzionare per un altro tempo $t$ di un componente nuovo. Nell'esempio delle telefonate, una telefonata che dura già da $3$ minuti supera i $5$ minuti con probabilità $e^{-2}$, come una telefonata appena iniziata supera i $2$ minuti.
:::

## Distribuzione normale

:::definizione{#distribuzione-normale titolo="Distribuzione normale"}
Siano $\mu$ un numero reale e $\sigma$ un numero positivo. Una variabile aleatoria ha **distribuzione normale**, o gaussiana, di parametri $\mu$ e $\sigma$ se la sua densità è
$$
f(x) = \frac{1}{\sigma \sqrt{2\pi}}\,e^{-\frac{(x - \mu)^2}{2\sigma^2}} .
$$
Il valore medio è $\mu$ e la deviazione standard è $\sigma$. Lo studio di funzione dà il grafico a campana, con queste proprietà.

- Il grafico è simmetrico rispetto alla retta $x = \mu$.
- Il massimo è nel punto $x = \mu$ e vale $\dfrac{1}{\sigma \sqrt{2\pi}}$.
- I flessi sono nei punti $x = \mu - \sigma$ e $x = \mu + \sigma$.
- L'asse $x$ è asintoto orizzontale per $x \to \pm\infty$.

Al crescere di $\sigma$ la campana diventa più bassa e più larga, perché l'area sotto il grafico resta $1$. Molte grandezze misurate, come le altezze delle persone o gli errori di misura, hanno una distribuzione vicina alla normale.

::grafico{f="exp(-x^2/2)/sqrt(2*pi);exp(-x^2/8)/(2*sqrt(2*pi))" punti="-1,0.242,pieno;1,0.242,pieno" xmin=-6 xmax=6 ymin=-0.05 ymax=0.5 legenda="\mu = 0,\ \sigma = 1;\mu = 0,\ \sigma = 2" titolo="Densità normali con $\mu = 0$: con $\sigma = 2$ la campana è più bassa e più larga che con $\sigma = 1$; i punti segnati sono i flessi $x = \pm 1$ della curva con $\sigma = 1$"}

:::

:::definizione{#normale-standard titolo="Normale standard e valori tabulati"}
La distribuzione normale con $\mu = 0$ e $\sigma = 1$ si chiama **normale standard**, e la sua variabile si indica con $Z$. La sua funzione di ripartizione si indica con
$$
\Phi(z) = P(Z \leq z) = \int_{-\infty}^{z} \frac{1}{\sqrt{2\pi}}\,e^{-\frac{t^2}{2}}\,dt .
$$
La funzione $e^{-\frac{t^2}{2}}$ non ha una primitiva esprimibile con le funzioni elementari, quindi i valori di $\Phi$ si leggono su una tavola. Alcuni valori sono

| $z$ | $0$ | $0{,}5$ | $1$ | $1{,}5$ | $1{,}645$ | $1{,}96$ | $2$ | $2{,}5$ | $3$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\Phi(z)$ | $0{,}5000$ | $0{,}6915$ | $0{,}8413$ | $0{,}9332$ | $0{,}9500$ | $0{,}9750$ | $0{,}9772$ | $0{,}9938$ | $0{,}9987$ |

La tavola contiene solo valori di $z$ non negativi. Il grafico della densità è simmetrico rispetto all'asse $y$, quindi l'area a sinistra di $-z$ è uguale all'area a destra di $z$, e perciò
$$
\Phi(-z) = 1 - \Phi(z) ,
\qquad
P(a \leq Z \leq b) = \Phi(b) - \Phi(a) .
$$
Per esempio $P(Z \leq -1) = 1 - 0{,}8413 = 0{,}1587$ e $P(-1 \leq Z \leq 2) = 0{,}9772 - 0{,}1587 = 0{,}8185$.
:::

:::teorema{#standardizzazione titolo="Standardizzazione"}
Se $X$ ha distribuzione normale di parametri $\mu$ e $\sigma$, la variabile
$$
Z = \frac{X - \mu}{\sigma}
$$
ha distribuzione normale standard. Di conseguenza, per ogni $x$ vale
$$
P(X \leq x) = \Phi\left( \frac{x - \mu}{\sigma} \right) .
$$
Il numero $z = \dfrac{x - \mu}{\sigma}$ indica di quante deviazioni standard il valore $x$ si trova sopra o sotto la media, e con la standardizzazione una sola tavola basta per tutte le distribuzioni normali. La dimostrazione si studia all'università. Per esempio, le altezze dei ragazzi di una scuola hanno distribuzione normale con $\mu = 170\,\mathrm{cm}$ e $\sigma = 8\,\mathrm{cm}$. Allora
$$
P(X \leq 178) = \Phi\left( \frac{178 - 170}{8} \right) = \Phi(1) = 0{,}8413 ,
$$
$$
P(162 \leq X \leq 186) = \Phi(2) - \Phi(-1) = 0{,}9772 - 0{,}1587 = 0{,}8185 .
$$

::grafico{f="exp(-x^2/2)/sqrt(2*pi)" area="exp(-x^2/2)/sqrt(2*pi);0;-1;2" xmin=-4 xmax=4 ymin=-0.05 ymax=0.5 nomi="z,y" legenda="y = \frac{1}{\sqrt{2\pi}}\,e^{-\frac{z^2}{2}}" titolo="Con la standardizzazione $z = \dfrac{x - 170}{8}$ le altezze $162$ e $186$ diventano $z = -1$ e $z = 2$; l'area colorata sotto la densità normale standard è $\Phi(2) - \Phi(-1) = 0{,}8185$"}

:::

:::esempio{titolo="Dalla probabilità al valore"}
Con la tavola si risolve anche il problema inverso. Nell'esempio delle altezze si cerca l'altezza $h$ superata solo dal $5\%$ dei ragazzi, cioè tale che $P(X \leq h) = 0{,}95$. Dalla tavola $\Phi(1{,}645) = 0{,}9500$, quindi
$$
\frac{h - 170}{8} = 1{,}645 ,
\qquad
h = 170 + 1{,}645 \cdot 8 \approx 183{,}2\,\mathrm{cm} .
$$
:::

:::osservazione{#regola-tre-sigma titolo="Regola delle tre sigma"}
Con la standardizzazione e la tavola si ottengono le probabilità che una variabile normale disti dalla media meno di una, due o tre deviazioni standard:
$$
\begin{aligned}
P(\mu - \sigma \leq X \leq \mu + \sigma) &= 2\,\Phi(1) - 1 \approx 0{,}683 , \\[4pt]
P(\mu - 2\sigma \leq X \leq \mu + 2\sigma) &= 2\,\Phi(2) - 1 \approx 0{,}954 , \\[4pt]
P(\mu - 3\sigma \leq X \leq \mu + 3\sigma) &= 2\,\Phi(3) - 1 \approx 0{,}997 .
\end{aligned}
$$
Per la simmetria si ha infatti $P(-z \leq Z \leq z) = \Phi(z) - \big( 1 - \Phi(z) \big) = 2\,\Phi(z) - 1$. Nell'esempio delle altezze circa il $68\%$ dei ragazzi è alto tra $162$ e $178\,\mathrm{cm}$, e quasi tutti sono alti tra $146$ e $194\,\mathrm{cm}$.
:::
