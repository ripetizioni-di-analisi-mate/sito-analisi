---
titolo: Vettori e prime forze
sommario: Grandezze scalari e vettoriali, somme e componenti dei vettori, misura delle forze, peso e forza elastica.
---

## Grandezze scalari e vettoriali

:::definizione{#scalari-e-vettori titolo="Scalari e vettori"}
Per descrivere la massa di un oggetto basta un valore con la sua unità, per esempio $2\,\mathrm{kg}$. Per descrivere uno spostamento occorre anche precisare in quale direzione e in quale verso avviene. Un avanzamento di $3\,\mathrm{m}$ verso est conduce a una posizione diversa da un avanzamento di $3\,\mathrm{m}$ verso ovest.

Una grandezza **scalare** è descritta da un numero e dalla sua unità di misura. Sono scalari la massa, la durata e la temperatura. Una grandezza **vettoriale** è descritta da un modulo, una direzione e un verso, e segue le regole di somma dei vettori. Sono vettoriali lo spostamento e la forza.

La distinzione stabilisce quali informazioni servono per descrivere una situazione. Dire che una corda esercita una forza di $10\,\mathrm{N}$ precisa l'intensità della forza; la sua descrizione si completa indicando come è orientata la corda e da quale parte tira.
:::

:::definizione{#modulo-direzione-verso titolo="Modulo, direzione e verso"}
Un **vettore** si rappresenta con una freccia. La direzione è quella della retta lungo la quale si trova la freccia; il verso è indicato dalla punta. Il **modulo** è il valore non negativo della grandezza, espresso con la sua unità.

Il simbolo $\vec{A}$ indica il vettore; $A$ indica il suo modulo. Una freccia orizzontale rivolta a destra e una orizzontale rivolta a sinistra hanno la stessa direzione e versi opposti. Una freccia verticale ha invece una direzione diversa.

Nel disegno si sceglie una scala. Se $1\,\mathrm{cm}$ rappresenta $2\,\mathrm{N}$, una forza di $6\,\mathrm{N}$ si disegna con una freccia lunga $3\,\mathrm{cm}$. La lunghezza sul foglio rappresenta quindi una forza, mentre la forza si misura in newton.

::grafico{vettori="0,1,3,1,A;3,-1,0,-1,B" assi=0 uguale=1 xmin=-1 xmax=5 ymin=-2 ymax=3 titolo="Due vettori di uguale modulo, con direzione orizzontale e versi opposti."}
:::

## Vettori lungo una retta

:::definizione{#componente-su-un-asse titolo="Componente lungo un asse"}
Per lavorare con vettori paralleli si sceglie un asse, cioè una retta con un'origine e un verso positivo. La **componente** $A_x$ è il numero con segno che descrive il vettore lungo quell'asse, con la stessa unità del vettore.

Se il verso positivo è verso destra, un vettore di modulo $5\,\mathrm{m}$ verso destra ha $A_x=+5\,\mathrm{m}$. Un vettore di modulo $5\,\mathrm{m}$ verso sinistra ha $A_x=-5\,\mathrm{m}$. Il modulo è $5\,\mathrm{m}$ in entrambi i casi; il segno della componente permette di distinguere i versi.

Il **vettore opposto** di $\vec{A}$, indicato con $-\vec{A}$, ha lo stesso modulo e la stessa direzione, ma verso opposto. Se $A_x=-5\,\mathrm{m}$, la componente del vettore opposto è $+5\,\mathrm{m}$.
:::

:::teorema{#somma-collineare titolo="Somma di vettori collineari"}
Due vettori sono **collineari** quando hanno la stessa direzione. Scelto un asse parallelo a essi, la componente della loro somma è la somma delle componenti con segno:
$$
R_x=A_x+B_x.
$$
Il simbolo $\vec{R}$ indica il vettore somma. Il suo modulo è $R=|R_x|$, dove il valore assoluto toglie l'eventuale segno negativo. Il verso si ricava dal segno di $R_x$.

Due spostamenti di $4\,\mathrm{m}$ e $3\,\mathrm{m}$ entrambi verso destra danno $R_x=4+3=7\,\mathrm{m}$. Se il secondo è verso sinistra, si ha invece $R_x=4-3=1\,\mathrm{m}$. Nel secondo caso il punto finale dista $1\,\mathrm{m}$ dal punto iniziale verso destra.
:::

:::attenzione{titolo="Modulo e componente"}
Il modulo di un vettore non è negativo. Per due forze di $2\,\mathrm{N}$ verso destra e $7\,\mathrm{N}$ verso sinistra, con asse positivo verso destra, si trova
$$
R_x=2\,\mathrm{N}-7\,\mathrm{N}=-5\,\mathrm{N}.
$$
La risultante ha quindi modulo $5\,\mathrm{N}$ e verso sinistra. Il valore $-5\,\mathrm{N}$ è la sua componente, non il suo modulo.
:::

## Somma nel piano

:::definizione{#somma-punta-coda titolo="Regola punta-coda"}
Due spostamenti successivi possono avere direzioni diverse. Per ottenere lo spostamento complessivo si disegna il secondo vettore a partire dalla punta del primo. La **somma vettoriale** è la freccia che va dalla coda del primo alla punta del secondo.

Questa costruzione si chiama **regola punta-coda**. Nel trasferire un vettore per costruire la somma si conservano modulo, direzione e verso. La stessa regola permette di sommare tre o più vettori, disponendoli uno dopo l'altro.

Un percorso di $3\,\mathrm{m}$ verso est seguito da $4\,\mathrm{m}$ verso nord termina a nord-est del punto iniziale. La distanza percorsa è $7\,\mathrm{m}$, mentre la lunghezza della freccia che unisce partenza e arrivo è $5\,\mathrm{m}$. Le due grandezze descrivono aspetti diversi del percorso.

::grafico{vettori="0,0,3,0,A;3,0,3,4,B;0,0,3,4,R" uguale=1 xmin=-1 xmax=5 ymin=-1 ymax=6 nomi="est,nord" titolo="Somma di uno spostamento di $3\,\mathrm{m}$ verso est e uno di $4\,\mathrm{m}$ verso nord. Ogni unità sugli assi vale $1\,\mathrm{m}$."}
:::

::::teorema{#somma-perpendicolare titolo="Somma di vettori perpendicolari"}
Se due vettori sono perpendicolari, cioè formano un angolo retto, il modulo della somma si calcola con
$$
R=\sqrt{A^2+B^2}.
$$
La radice quadrata positiva di un numero è il numero non negativo che, moltiplicato per se stesso, dà quel numero. Per esempio $\sqrt{25}=5$, perché $5\cdot5=25$.

La relazione permette di calcolare il modulo della somma conoscendo soltanto i moduli dei due vettori perpendicolari. Per $A=6\,\mathrm{m}$ e $B=8\,\mathrm{m}$ si ottiene $R=10\,\mathrm{m}$.

:::dimostrazione
Si applica il teorema di Pitagora al triangolo costruito con la regola punta-coda. I due vettori perpendicolari sono i cateti; il vettore somma è l'ipotenusa. Perciò
$$
R^2=A^2+B^2.
$$
Poiché il modulo è non negativo, prendendo la radice quadrata si ottiene la relazione indicata.
:::
::::

## Le componenti di un vettore

:::definizione{#componenti-nel-piano titolo="Componenti cartesiane"}
Nel piano si scelgono due assi perpendicolari, $x$ e $y$. La freccia di un vettore può essere ottenuta sommando una freccia parallela all'asse $x$ e una parallela all'asse $y$. Le rispettive componenti con segno si indicano con $A_x$ e $A_y$.

Se $\vec{A}$ va dall'origine al punto di coordinate $(3\,\mathrm{m},4\,\mathrm{m})$, le componenti sono $A_x=3\,\mathrm{m}$ e $A_y=4\,\mathrm{m}$. Il modulo vale $5\,\mathrm{m}$ per il teorema di Pitagora. Se il punto finale ha coordinata orizzontale negativa, anche $A_x$ è negativa.

Le componenti permettono di descrivere il verso del vettore senza misurare un angolo. Per esempio $A_x=-3\,\mathrm{m}$ e $A_y=4\,\mathrm{m}$ indicano una freccia verso sinistra e verso l'alto.

::grafico{vettori="0,0,-3,4,A;0,0,-3,0,Ax;0,0,0,4,Ay" segmenti="-3,0,-3,4;0,4,-3,4" uguale=1 xmin=-5 xmax=2 ymin=-1 ymax=6 titolo="Vettore con componenti $A_x=-3\,\mathrm{m}$ e $A_y=4\,\mathrm{m}$. Le proiezioni individuano le due componenti."}
:::

:::teorema{#somma-per-componenti titolo="Somma mediante le componenti"}
Per sommare due vettori nel piano si sommano separatamente le componenti lungo i due assi:
$$
R_x=A_x+B_x,
\qquad
R_y=A_y+B_y.
$$
Il modulo della somma è quindi
$$
R=\sqrt{R_x^2+R_y^2}.
$$
Per componenti, in metri, $(2,1)$ e $(1,3)$ si ottiene $(3,4)$, quindi il modulo della somma è $5\,\mathrm{m}$. Ogni somma riguarda componenti lungo lo stesso asse e riferite alla stessa grandezza fisica.
:::

## Le forze e la loro misura

:::definizione{#forza titolo="Forza"}
Una **forza** descrive un'interazione tra corpi che può modificarne il moto o deformarli. Una mano esercita una forza sulla molla che allunga; la Terra esercita una forza su un oggetto anche senza essere a contatto con esso.

La forza è una grandezza vettoriale. La sua unità nel Sistema Internazionale è il newton, di simbolo $\mathrm{N}$. Per descriverla si specificano modulo, direzione, verso e corpo sul quale agisce. Quando le dimensioni del corpo contano, si specifica anche il punto di applicazione. Una spinta applicata vicino alla cerniera di una porta produce un effetto di rotazione diverso dalla stessa spinta applicata alla maniglia.

Nel modello di **punto materiale** le dimensioni del corpo si trascurano per il problema studiato. Le forze che agiscono su di esso si sommano vettorialmente; la loro somma è detta **risultante**. Due forze sullo stesso punto, una di $8\,\mathrm{N}$ verso destra e una di $3\,\mathrm{N}$ verso sinistra, hanno risultante di $5\,\mathrm{N}$ verso destra.
:::

:::definizione{#dinamometro titolo="Dinamometro"}
Il **dinamometro** è uno strumento per misurare il modulo di una forza. Un modello a molla associa alla deformazione della molla una scala graduata in newton. Lo strumento viene tarato confrontando le sue indicazioni con forze note.

Se tra $2\,\mathrm{N}$ e $3\,\mathrm{N}$ ci sono cinque intervalli uguali, ogni intervallo corrisponde a $0{,}2\,\mathrm{N}$. Un indice sulla seconda tacca dopo $2\,\mathrm{N}$ indica quindi $2{,}4\,\mathrm{N}$. La lettura resta una misura con incertezza, secondo quanto discusso nel capitolo sulle misure.

La scala ha una portata, cioè un valore massimo misurabile. Un dinamometro con portata $5\,\mathrm{N}$ fornisce letture entro quell'intervallo; una forza superiore richiede uno strumento con portata adeguata.
:::

## La massa e la forza peso

:::definizione{#massa-e-peso titolo="Massa e forza peso"}
La **massa** $m$ è una proprietà del corpo e si misura in chilogrammi. La **forza peso** $\vec{P}$ è la forza gravitazionale esercitata dalla Terra sul corpo. Vicino alla superficie terrestre è diretta lungo la verticale verso il basso.

Il modulo del peso si calcola mediante
$$
P=mg,
$$
dove $g$ è l'accelerazione di gravità del luogo. Vicino alla superficie terrestre si usa qui $g=9{,}81\,\mathrm{m/s^2}$, equivalente a $9{,}81\,\mathrm{N/kg}$ per il calcolo del peso. Il significato dell'accelerazione verrà trattato nel capitolo sull'accelerazione e la caduta.

Per una massa di $2\,\mathrm{kg}$ si ottiene $P=19{,}62\,\mathrm{N}$. La relazione permette anche di ricavare la massa da un peso noto dividendo per $g$. A parità di massa, un luogo con un diverso valore di $g$ dà un peso diverso.
:::

:::esempio{titolo="La stessa massa in due luoghi"}
Un corpo ha massa $5\,\mathrm{kg}$. In un luogo con $g=10\,\mathrm{N/kg}$ il peso è $50\,\mathrm{N}$; in un altro, con $g=2\,\mathrm{N/kg}$, il peso è $10\,\mathrm{N}$. La massa resta $5\,\mathrm{kg}$. Cambia la forza gravitazionale esercitata sul corpo, perché cambia il valore di $g$.
:::

## La forza elastica

:::definizione{#allungamento titolo="Allungamento di una molla"}
La **lunghezza a riposo** $\ell_0$ è la lunghezza della molla quando è indeformata. Se la lunghezza diventa $\ell$, l'allungamento è
$$
\Delta\ell=\ell-\ell_0.
$$
Il simbolo $\Delta$, letto delta, indica una variazione. Una molla lunga a riposo $12\,\mathrm{cm}$, portata a $15\,\mathrm{cm}$, ha allungamento $3\,\mathrm{cm}$, cioè $0{,}03\,\mathrm{m}$. La lunghezza finale e l'allungamento sono due misure differenti.
:::

:::teorema{#legge-di-hooke titolo="Legge di Hooke"}
Per una molla che segue la **legge di Hooke**, entro l'intervallo in cui la deformazione è elastica e proporzionale alla forza, il modulo della forza elastica è
$$
F_e=k\,\Delta\ell
$$
nel caso di allungamento. La **costante elastica** $k$ è positiva e si misura in $\mathrm{N/m}$. La forza esercitata dalla molla tende a riportarla alla lunghezza a riposo; perciò, se l'estremità viene spostata verso destra allungando una molla fissata a sinistra, la forza elastica sull'estremità è verso sinistra.

La legge è sperimentale e vale nell'intervallo descritto. Per $k=100\,\mathrm{N/m}$ e $\Delta\ell=0{,}02\,\mathrm{m}$ il modulo è $2\,\mathrm{N}$. Raddoppiando l'allungamento a $0{,}04\,\mathrm{m}$, finché la legge resta valida, la forza diventa $4\,\mathrm{N}$.

::grafico{f="0.1*x" xmin=0 xmax=60 ymin=0 ymax=7 nomi="Δℓ,F" legenda=0 titolo="Molla con $k=100\,\mathrm{N/m}$. L'allungamento è in millimetri e la forza in newton; $20\,\mathrm{mm}$ corrispondono a $2\,\mathrm{N}$."}
:::

:::osservazione{#formule-inverse-hooke titolo="Costante elastica e allungamento"}
La stessa legge permette di trovare una grandezza diversa dalla forza. Dividendo entrambi i membri per $k$ si ottiene
$$
\Delta\ell=\frac{F_e}{k}.
$$
Se è noto un allungamento positivo, dividendo per esso si ottiene
$$
k=\frac{F_e}{\Delta\ell}.
$$
Una forza elastica di modulo $3\,\mathrm{N}$ associata a un allungamento di $0{,}015\,\mathrm{m}$ corrisponde a $k=200\,\mathrm{N/m}$. A parità di allungamento, una molla con costante elastica maggiore esercita una forza maggiore. Questo confronto riguarda molle che operano entrambe nell'intervallo di validità della legge.
:::
