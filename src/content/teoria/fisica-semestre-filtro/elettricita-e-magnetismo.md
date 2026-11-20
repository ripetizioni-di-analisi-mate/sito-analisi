---
titolo: Elettricità, circuiti e magnetismo
sommario: Dal segno delle cariche ai bilanci di energia, dai circuiti ai condensatori, fino alla forza magnetica e all’induzione.
---

## Carica e interazione: scegliere il sistema

:::osservazione
La **carica elettrica** è una proprietà delle particelle che formano la materia. Esiste in due tipi, positiva e negativa. I protoni, nel nucleo dell’atomo, hanno carica positiva e gli elettroni, intorno al nucleo, hanno carica negativa. Un corpo è **neutro** quando contiene tante cariche positive quante negative. Strofinando due materiali, alcuni elettroni passano da uno all’altro. Quello che li riceve diventa negativo e quello che li perde diventa positivo, con cariche uguali in valore. La carica non si crea e non si distrugge: in un sistema isolato la somma di tutte le cariche, prese con il loro segno, resta costante. Questo è il **principio di conservazione della carica**.
:::

:::definizione{#coulomb titolo="Carica e legge di Coulomb"}
La carica si misura in coulomb (C). La carica più piccola che esiste libera è la **carica elementare**, $e\simeq1{,}602\cdot10^{-19}\,\mathrm C$. Il protone ha carica $+e$ e l’elettrone $-e$, e la carica di ogni corpo è un multiplo intero di $e$. Due cariche esercitano una forza l’una sull’altra. La **legge di Coulomb** dà il modulo di questa forza per due cariche puntiformi $q_1$ e $q_2$ ferme, a distanza $r$ nel vuoto:
$$
F=k_e\dfrac{|q_1q_2|}{r^2},\qquad k_e=\dfrac{1}{4\pi\varepsilon_0}\simeq8{,}99\cdot10^9\,\mathrm{N\,m^2/C^2}.
$$
La forza è diretta lungo la retta che unisce le due cariche. Cariche dello stesso segno si respingono e cariche di segno opposto si attraggono.
:::

:::osservazione
La forza è proporzionale al prodotto delle cariche e inversamente proporzionale al quadrato della distanza. Se una carica raddoppia, la forza raddoppia. Se la distanza raddoppia, la forza diventa un quarto. Per la terza legge di Newton le due cariche subiscono forze uguali e opposte, anche se le cariche sono diverse. Due cariche di $2{,}0\,\mu\mathrm C$ e $3{,}0\,\mu\mathrm C$ a $0{,}30\,\mathrm m$ di distanza si respingono con una forza $F=8{,}99\cdot10^9\cdot\dfrac{2{,}0\cdot10^{-6}\cdot3{,}0\cdot10^{-6}}{0{,}30^2}\simeq0{,}60\,\mathrm N$. Nel calcolo le cariche vanno in coulomb e le distanze in metri. La formula dà il modulo, e il verso si stabilisce dai segni delle cariche.

![Due cariche opposte e forze di attrazione uguali; confronto della forza a distanza r e 2r.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/coulomb-it.svg)

Se su una carica agiscono più cariche, la forza totale è la somma vettoriale delle forze esercitate da ciascuna. Si calcola ogni forza con la legge di Coulomb e poi si sommano le componenti. Con cariche allineate basta un asse, e ogni forza ha il segno del suo verso.

La legge vale per cariche puntiformi, cioè piccole rispetto alla distanza che le separa, e per sfere con carica distribuita in modo uniforme, usando la distanza fra i centri. Se due sferette conduttrici uguali, con cariche diverse, vengono messe a contatto, la carica totale si divide in parti uguali fra le due.
:::

## Campo elettrico: una proprietà dello spazio

:::osservazione
Una carica esercita forze su altre cariche anche a distanza. Per descrivere questo effetto si dice che la carica crea intorno a sé un **campo elettrico**, presente in ogni punto dello spazio anche se in quel punto non c’è nulla. Per misurarlo si mette nel punto una piccola carica, detta carica di prova, e si misura la forza che subisce.
:::

:::definizione{#campo-elettrico titolo="Campo, sovrapposizione e accelerazione"}
Il campo elettrico in un punto è la forza che agisce su una carica posta in quel punto, divisa per la carica stessa, $\vec E=\dfrac{\vec F}{q}$. È un vettore. Ha il verso della forza su una carica positiva, e una carica negativa subisce una forza nel verso opposto. Conoscendo il campo si ricava la forza su qualunque carica, $\vec F=q\vec E$. Per una carica puntiforme $Q$:
$$
\vec E=k_e\dfrac{Q}{r^2}\hat r,\qquad \vec E_{\mathrm{tot}}=\sum_i\vec E_i,\qquad \vec a=\dfrac{q\vec E}{m}.
$$
La prima formula dice che il campo di una carica puntiforme diminuisce con il quadrato della distanza. È diretto lungo la retta che passa per la carica, in verso uscente se $Q$ è positiva ed entrante se è negativa. La seconda è il **principio di sovrapposizione**: il campo di più cariche è la somma vettoriale dei campi di ciascuna. La terza dà l’accelerazione di una particella di massa $m$ e carica $q$ nel campo. Il campo si misura in $\mathrm{N/C}$, unità equivalente a $\mathrm{V/m}$.
:::

:::osservazione
Il campo si rappresenta con le **linee di campo**, che seguono tre regole.

- In ogni punto la linea è tangente al campo.
- Le linee escono dalle cariche positive ed entrano in quelle negative.
- Dove le linee sono più fitte il campo è più intenso.

Le linee di campo indicano la direzione della forza e non la traiettoria di una carica. La forza determina l’accelerazione, e il percorso dipende anche dalla velocità iniziale.

Un **campo uniforme** ha lo stesso valore e la stessa direzione in tutti i punti. Si trova fra due lastre piane parallele con cariche opposte. Una particella di carica $q$ entra con velocità $v_0$ in direzione $x$ in un campo uniforme diretto lungo $y$. Lungo $x$ non c’è forza e il moto è uniforme. Lungo $y$ la forza $qE$ è costante e il moto è uniformemente accelerato:
$$
x=v_0t,\qquad y=\dfrac{qE}{2m}t^2,\qquad y=\dfrac{qE}{2mv_0^2}x^2.
$$
La traiettoria è una parabola, come quella di un corpo lanciato in orizzontale nel campo di gravità, con $\dfrac{qE}{m}$ al posto di $g$. Il tempo che la particella impiega ad attraversare una zona di lunghezza $L$ dipende solo dal moto lungo $x$ ed è $\dfrac{L}{v_0}$.

![Campo uniforme verso l’alto; una carica positiva entra verso destra e segue una parabola, distinta dalle linee verticali.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/campo-moto-it.svg)

Due esempi mostrano la somma dei campi. Nel punto medio fra due cariche positive uguali, i due campi hanno lo stesso modulo e versi opposti, quindi il campo totale è nullo. Nel punto medio fra due cariche uguali di segno opposto, i due campi puntano entrambi verso la carica negativa, quindi il campo totale è il doppio di quello di una sola carica.
:::

## Potenziale ed energia: mantenere il segno

:::osservazione
Una carica in un campo elettrico possiede un’energia potenziale, come una massa nel campo di gravità. L'**energia potenziale elettrica** $U$ dipende dalla carica e dal punto in cui si trova. Il **potenziale elettrico** $V$ in un punto è l’energia potenziale di una carica posta in quel punto, divisa per la carica, $V=\dfrac Uq$. Dipende solo dalle cariche che creano il campo. Si misura in volt, $1\,\mathrm V=1\,\mathrm{J/C}$. Conta solo la differenza di potenziale fra due punti, detta anche **tensione**, che è ciò che misura un voltmetro. Il punto a potenziale zero si sceglie liberamente.
:::

:::teorema{#potenziale titolo="Lavoro elettrostatico"}
Quando una carica $q$ si sposta fra due punti con differenza di potenziale $\Delta V$, la sua energia potenziale varia di $\Delta U=q\,\Delta V$. Il lavoro compiuto dalla forza elettrica nello spostamento da A a B, e la variazione di energia cinetica, sono:
$$
W_e=q(V_A-V_B)=-\Delta U,\qquad \Delta K=-q\Delta V+W_{\mathrm{ext}}.
$$
Il termine $W_{\mathrm{ext}}$ è il lavoro di eventuali altre forze. Se agisce solo la forza elettrica, l’energia cinetica che la carica acquista è uguale all’energia potenziale che perde. Per cariche puntiformi, con potenziale zero a distanza infinita, il potenziale in un punto P e l’energia di un sistema di cariche sono:
$$
V(P)=k_e\sum_i\dfrac{Q_i}{r_i},\qquad U_{\mathrm{sys}}=k_e\sum_{i<j}\dfrac{q_iq_j}{r_{ij}}.
$$
Il potenziale è uno scalare, quindi i contributi delle cariche si sommano come numeri, ciascuno con il segno della sua carica. Nell’energia del sistema ogni coppia di cariche compare una sola volta.
:::

:::osservazione
Un elettrone accelerato da una differenza di potenziale di $1\,\mathrm V$ acquista un’energia di $1{,}602\cdot10^{-19}\,\mathrm J$. Questa quantità è un’unità di energia, l'**elettronvolt**, $1\,\mathrm{eV}\simeq1{,}602\cdot10^{-19}\,\mathrm J$, usata per atomi e radiazioni. Il volt misura un potenziale e l’elettronvolt un’energia.

In un campo uniforme il potenziale diminuisce nel verso del campo, e fra due punti a distanza $d$ lungo il campo la differenza di potenziale è $Ed$. Fra due lastre distanti $2{,}0\,\mathrm{cm}$ con tensione di $100\,\mathrm V$ il campo vale $\dfrac{100}{0{,}020}=5000\,\mathrm{V/m}$. In generale il campo è la pendenza del grafico del potenziale in funzione della posizione, cambiata di segno, $E_x=-\dfrac{dV}{dx}$. Il campo dipende quindi da quanto rapidamente varia il potenziale e non dal suo valore. Una **superficie equipotenziale** è formata da punti allo stesso potenziale. Il campo è perpendicolare a essa, e spostare una carica lungo di essa non richiede lavoro.

![Grafico del potenziale lineare decrescente e campo costante positivo; un cambio dello zero non cambia la pendenza.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/potenziale-it.svg)

Una carica positiva libera si muove spontaneamente verso i punti a potenziale minore. Una carica negativa, come un elettrone, si muove verso i punti a potenziale maggiore. In entrambi i casi la carica perde energia potenziale e acquista energia cinetica. Un elettrone che parte da fermo e attraversa una differenza di potenziale di $100\,\mathrm V$ acquista $100\,\mathrm{eV}=1{,}6\cdot10^{-17}\,\mathrm J$. Da $K=\dfrac{mv^2}{2}$, con $m=9{,}11\cdot10^{-31}\,\mathrm{kg}$, la sua velocità è $v=\sqrt{\dfrac{2K}{m}}\simeq5{,}9\cdot10^6\,\mathrm{m/s}$. Questa formula dell’energia cinetica vale finché la velocità è molto minore di quella della luce.
:::

## Conduttori e dielettrici: due risposte differenti

:::osservazione
I materiali si dividono in due gruppi secondo il comportamento delle loro cariche. Nei **conduttori**, come i metalli, una parte degli elettroni è libera di muoversi in tutto il materiale. Negli **isolanti**, detti anche **dielettrici**, come il vetro e la plastica, gli elettroni restano legati ai propri atomi. Se si avvicina una bacchetta carica positivamente a un conduttore neutro, gli elettroni liberi sono attratti e si spostano verso il lato vicino alla bacchetta. Il lato vicino diventa negativo e quello lontano positivo, mentre la carica totale resta nulla. Questo fenomeno si chiama **induzione elettrostatica**. Il conduttore è attratto dalla bacchetta, perché le cariche negative sono più vicine di quelle positive.
:::

:::definizione{#materiali titolo="Equilibrio e polarizzazione"}
In un conduttore in **equilibrio elettrostatico**, cioè con le cariche ferme, valgono tre proprietà.

- Il campo elettrico all’interno del conduttore è nullo.
- Tutti i punti del conduttore hanno lo stesso potenziale.
- La carica in eccesso si trova sulla superficie.

In un dielettrico le cariche non si spostano attraverso il materiale. In un campo elettrico, però, in ogni molecola le cariche positive si spostano un poco in un verso e quelle negative nel verso opposto. Questo fenomeno si chiama **polarizzazione**.
:::

:::osservazione
La prima proprietà si spiega così. Se all’interno del conduttore ci fosse un campo, gli elettroni liberi subirebbero una forza e si muoverebbero, e le cariche non sarebbero ferme. Le proprietà valgono solo all’equilibrio. In un filo percorso da corrente le cariche si muovono, e nel filo c’è un campo elettrico. Campo nullo, inoltre, non significa potenziale nullo: il potenziale del conduttore è uniforme e ha in genere un valore diverso da zero.

![Conduttore neutro con cariche separate e dielettrico con dipoli orientati nel campo esterno.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/materiali-it.svg)

La **messa a terra** è il collegamento di un conduttore al suolo, che può cedere o ricevere elettroni in quantità praticamente illimitata. Con essa si carica un conduttore per induzione, in tre passaggi.

1. Si avvicina una bacchetta positiva al conduttore neutro.
2. Si collega il conduttore a terra. Dal suolo salgono elettroni, attratti dalla bacchetta.
3. Si toglie il collegamento a terra e poi si allontana la bacchetta. Il conduttore resta con elettroni in eccesso, quindi è carico negativamente.

Un involucro conduttore chiuso protegge il suo interno dai campi elettrici esterni. Questo effetto si chiama **schermatura** e l’involucro si chiama gabbia di Faraday.

In un dielettrico polarizzato le cariche spostate creano un campo opposto a quello esterno, quindi il campo all’interno del materiale è minore. La riduzione è misurata dalla **costante dielettrica relativa** $\varepsilon_r$, un numero maggiore di 1 che dipende dal materiale. Vale circa 1 per l’aria e circa 80 per l’acqua. Nelle formule si usa $\varepsilon=\varepsilon_r\varepsilon_0$ al posto di $\varepsilon_0$.
:::

## Corrente e resistenza: leggere una misura

:::osservazione
La **corrente elettrica** è un movimento ordinato di cariche. Nei metalli si muovono gli elettroni. Nelle soluzioni, come i liquidi del corpo, si muovono gli ioni positivi e negativi. Per convenzione il verso della corrente è quello in cui si muoverebbero cariche positive, quindi nei metalli è opposto al verso in cui si muovono gli elettroni. In un circuito la corrente non si consuma: la corrente che entra in un componente è uguale a quella che ne esce. Ciò che il componente assorbe è energia.
:::

:::definizione{#ohm titolo="Corrente e leggi di Ohm"}
L'**intensità di corrente** $I$ è la carica che attraversa una sezione del filo in un secondo, $I=\dfrac{\Delta q}{\Delta t}$. Si misura in ampere, $1\,\mathrm A=1\,\mathrm{C/s}$. Per far scorrere una corrente in un conduttore serve una differenza di potenziale ai suoi capi. Per molti conduttori vale la **prima legge di Ohm**: la differenza di potenziale è proporzionale alla corrente. La costante di proporzionalità è la **resistenza** $R$, che misura quanto il conduttore si oppone al passaggio della corrente. La **seconda legge di Ohm** dà la resistenza di un filo:
$$
\Delta V=RI,\qquad R=\rho_e\dfrac{L}{A}.
$$
La resistenza si misura in ohm, $1\,\Omega=1\,\mathrm{V/A}$. Nella seconda legge $L$ è la lunghezza del filo, $A$ l’area della sua sezione e $\rho_e$ la **resistività** del materiale, in $\Omega\,\mathrm m$. Un filo più lungo ha resistenza maggiore e un filo più grosso ha resistenza minore. Un resistore da $100\,\Omega$ collegato a una pila da $9\,\mathrm V$ è percorso da una corrente $I=\dfrac{9}{100}=0{,}09\,\mathrm A$.
:::

:::osservazione
La resistività è una proprietà del materiale: è bassa nei metalli e altissima negli isolanti. La resistenza è una proprietà del singolo oggetto, perché dipende anche dalla sua forma. Se il raggio di un filo raddoppia, l’area della sezione quadruplica e la resistenza diventa un quarto. La resistività dei metalli aumenta con la temperatura.

![Grafico tensione-corrente di due resistori ohmici; la pendenza della retta V in funzione di I è la resistenza.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/ohm-it.svg)

Un conduttore che segue la prima legge di Ohm si dice **ohmico**. Il suo grafico della tensione in funzione della corrente è una retta che passa per l’origine, e la pendenza della retta è la resistenza. Se gli assi sono scambiati, con la corrente in funzione della tensione, la pendenza è $\dfrac1R$. Per un componente non ohmico, come un diodo, il grafico è una curva e la resistenza cambia con la tensione.

Un circuito ha bisogno di un **generatore**, come una pila, che mantiene una differenza di potenziale fra i suoi due poli. Un generatore ideale mantiene sempre la stessa tensione, e la corrente dipende da ciò che vi è collegato. Per le misure si usano due strumenti.

- L'**amperometro** misura la corrente. Si inserisce in serie al componente, in modo che la corrente lo attraversi, e ha resistenza quasi nulla.
- Il **voltmetro** misura la differenza di potenziale. Si collega in parallelo, ai due capi del componente, e ha resistenza molto grande.
:::

## Resistori, nodi e dissipazione

:::osservazione
I componenti di un circuito si collegano in due modi.

- Due componenti sono **in serie** se sono collegati uno dopo l’altro sullo stesso filo, senza diramazioni fra loro. Sono attraversati dalla stessa corrente.
- Due componenti sono **in parallelo** se i loro capi sono collegati agli stessi due punti. Hanno la stessa differenza di potenziale.

Un punto in cui si incontrano tre o più fili si chiama **nodo**. Il tipo di collegamento si riconosce seguendo i fili, e non dalla posizione dei componenti nel disegno.
:::

:::teorema{#circuiti titolo="Reti resistive ed effetto Joule"}
In un nodo la somma delle correnti che entrano è uguale alla somma di quelle che escono, perché la carica si conserva. Più resistori collegati fra loro equivalgono a un solo resistore, la cui **resistenza equivalente** è $R_s$ per i resistori in serie e $R_p$ per quelli in parallelo:
$$
R_s=\sum_iR_i,\qquad \dfrac{1}{R_p}=\sum_i\dfrac{1}{R_i}.
$$
Un resistore percorso da corrente si scalda. Questo fenomeno si chiama **effetto Joule**. L’energia elettrica che in un secondo diventa calore è la potenza:
$$
P=I\Delta V=RI^2=\dfrac{(\Delta V)^2}{R},\qquad E_{\mathrm{diss}}=Pt
$$
Le tre forme della potenza sono equivalenti e si passa dall’una all’altra con la legge di Ohm. In un tempo $t$ l’energia dissipata è $Pt$. Una stufetta da $230\,\mathrm V$ e $1000\,\mathrm W$ è percorsa da $I=\dfrac{P}{\Delta V}\simeq4{,}3\,\mathrm A$ e in un’ora consuma $1000\cdot3600=3{,}6\cdot10^6\,\mathrm J$, cioè un chilowattora.
:::

:::osservazione
In serie la resistenza equivalente è la somma delle resistenze, quindi è maggiore di ciascuna. La tensione del generatore si divide fra i resistori, in proporzione alle resistenze. In parallelo la resistenza equivalente è minore della più piccola, perché la corrente ha più strade. La corrente del generatore si divide fra i rami, e nel ramo con resistenza minore passa la corrente maggiore. Un circuito con collegamenti dei due tipi si risolve a passi: si sostituisce ogni gruppo in serie o in parallelo con la sua resistenza equivalente fino a ottenere un solo resistore, si calcola la corrente totale e poi si torna indietro per trovare tensione e corrente di ogni resistore.

![Circuito da 12 volt: resistore da 2 ohm in serie al parallelo da 6 e 3 ohm, con nodi e correnti.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/circuito-it.svg)

Nel circuito della figura un resistore da $2\,\Omega$ è in serie con due resistori da $6\,\Omega$ e $3\,\Omega$ in parallelo fra loro, e il generatore è da $12\,\mathrm V$. Il calcolo procede in quattro passi.

1. Il parallelo vale $\dfrac{1}{R_p}=\dfrac16+\dfrac13=\dfrac12$, quindi $R_p=2\,\Omega$.
2. La resistenza totale è $2+2=4\,\Omega$ e la corrente totale è $\dfrac{12}{4}=3\,\mathrm A$.
3. Ai capi del resistore da $2\,\Omega$ la tensione è $2\cdot3=6\,\mathrm V$. Ai capi del parallelo restano $12-6=6\,\mathrm V$.
4. Nel resistore da $6\,\Omega$ passa $\dfrac66=1\,\mathrm A$ e in quello da $3\,\Omega$ passano $\dfrac63=2\,\mathrm A$. La somma è $3\,\mathrm A$, come la corrente totale.

Le potenze dissipate sono $2\cdot3^2=18\,\mathrm W$, $6\cdot1^2=6\,\mathrm W$ e $3\cdot2^2=12\,\mathrm W$. La somma, $36\,\mathrm W$, è uguale alla potenza erogata dal generatore, $12\cdot3=36\,\mathrm W$.

Quale resistore dissipa di più dipende dal collegamento. In serie la corrente è la stessa, e per $P=RI^2$ dissipa di più la resistenza maggiore. In parallelo la tensione è la stessa, e per $P=\dfrac{(\Delta V)^2}{R}$ dissipa di più la resistenza minore. In un circuito aperto, cioè interrotto, la corrente è nulla e ai capi dell’interruzione c’è tutta la tensione del generatore. In un **cortocircuito** i due poli del generatore sono collegati da un filo di resistenza quasi nulla. La corrente diventa molto grande, e la limita solo la piccola resistenza interna del generatore.
:::

## Condensatori: geometria, carica ed energia

:::osservazione
Un **condensatore** è un dispositivo che accumula carica ed energia. È formato da due conduttori vicini, detti **armature**, separati da un isolante. Collegato a un generatore, un’armatura acquista una carica $+q$ e l’altra una carica $-q$. Fra le armature si forma un campo elettrico. Per carica del condensatore si intende $q$, il valore della carica su una delle due armature.
:::

:::definizione{#condensatori titolo="Capacità e accumulo"}
La carica accumulata è proporzionale alla tensione fra le armature. La **capacità** $C=\dfrac{q}{\Delta V}$ è la carica accumulata per ogni volt di tensione. Si misura in farad, $1\,\mathrm F=1\,\mathrm{C/V}$. Il farad è un’unità molto grande e nella pratica si usano microfarad e picofarad. Per un condensatore piano, formato da due lastre parallele di area $A$ a distanza $d$, la capacità e l’energia accumulata sono:
$$
C=\dfrac{\varepsilon A}{d},\qquad U_C=\dfrac12q\Delta V=\dfrac12C(\Delta V)^2=\dfrac{q^2}{2C}.
$$
La capacità dipende solo dalla forma del condensatore e dal materiale fra le armature. È maggiore con armature più grandi e più vicine. Un condensatore da $10\,\mu\mathrm F$ caricato a $12\,\mathrm V$ accumula una carica $q=C\Delta V=120\,\mu\mathrm C$ e un’energia $\dfrac12\cdot10\cdot10^{-6}\cdot12^2=7{,}2\cdot10^{-4}\,\mathrm J$.
:::

:::osservazione
Nell’energia compare il fattore $\dfrac12$ perché durante la carica la tensione non è costante: cresce da zero al valore finale $\Delta V$. Le prime cariche vengono trasferite quasi senza lavoro e le ultime con la tensione piena, quindi in media ogni carica è trasferita con tensione $\dfrac{\Delta V}{2}$. L’energia dipende dal quadrato della tensione, quindi con tensione doppia è quattro volte maggiore.

![Condensatore piano e confronto fra inserimento del dielettrico a carica costante e a tensione costante.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/condensatore-it.svg)

Se lo spazio fra le armature è riempito con un dielettrico di costante $\varepsilon_r$, la capacità diventa $\varepsilon_r$ volte maggiore. L’effetto sulle altre grandezze dipende da come è collegato il condensatore.

- **Condensatore scollegato dal generatore.** La carica non può cambiare. La capacità aumenta, quindi la tensione $\Delta V=\dfrac qC$ e l’energia $\dfrac{q^2}{2C}$ diventano $\varepsilon_r$ volte minori.
- **Condensatore collegato al generatore.** La tensione non può cambiare. La capacità aumenta, quindi la carica $q=C\Delta V$ e l’energia $\dfrac12C(\Delta V)^2$ diventano $\varepsilon_r$ volte maggiori. La carica in più è fornita dal generatore.

La **membrana cellulare** si comporta come un condensatore. Il doppio strato di lipidi è un isolante sottile, e i liquidi ai suoi due lati sono conduttori. Sulle due facce si accumulano cariche opposte, che producono il potenziale di membrana, di circa $70\,\mathrm{mV}$. La membrana è molto sottile, quindi bastano pochissime cariche per produrre questa tensione, e la composizione dei liquidi ai due lati resta praticamente invariata.
:::

## Reti di condensatori: ricostruire i vincoli

:::osservazione
Anche i condensatori si collegano in serie e in parallelo, e si sostituiscono con un condensatore equivalente. Le regole sono scambiate rispetto a quelle dei resistori: le capacità si sommano in parallelo, e in serie si sommano i loro inversi.
:::

:::teorema{#reti-condensatori titolo="Collegamenti ideali"}
In parallelo tutti i condensatori hanno la stessa tensione $\Delta V$, e la carica totale è la somma delle cariche di ciascuno:
$$
q_{\mathrm{tot}}=\sum_i C_i\Delta V,\qquad C_{\mathrm{eq}}=\sum_iC_i.
$$
In serie tutti i condensatori hanno la stessa carica $q$, e la tensione totale è la somma delle tensioni di ciascuno:
$$
\Delta V_{\mathrm{tot}}=\sum_i\dfrac{q}{C_i},\qquad \dfrac1{C_{\mathrm{eq}}}=\sum_i\dfrac1{C_i}.
$$
:::

:::osservazione
In serie la carica è la stessa per il motivo seguente. Le due armature collegate fra loro, una di un condensatore e una del successivo, formano un conduttore isolato, inizialmente neutro. Se su una compare la carica $-q$, sull’altra compare $+q$. Poiché $\Delta V_i=\dfrac{q}{C_i}$, in serie il condensatore con la capacità minore ha la tensione maggiore.

![Condensatori da 3 e 6 microfarad: confronto tra serie con uguale carica e parallelo con uguale tensione.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/reti-capacita-it.svg)

Due condensatori da $3\,\mu\mathrm F$ e $6\,\mu\mathrm F$ sono collegati a un generatore da $12\,\mathrm V$.

- **In serie.** $\dfrac{1}{C_{\mathrm{eq}}}=\dfrac13+\dfrac16=\dfrac12$, quindi $C_{\mathrm{eq}}=2\,\mu\mathrm F$. La carica è $q=2\cdot12=24\,\mu\mathrm C$ per entrambi. Le tensioni sono $\dfrac{24}{3}=8\,\mathrm V$ e $\dfrac{24}{6}=4\,\mathrm V$, con somma $12\,\mathrm V$.
- **In parallelo.** $C_{\mathrm{eq}}=3+6=9\,\mu\mathrm F$. Entrambi hanno $12\,\mathrm V$. Le cariche sono $3\cdot12=36\,\mu\mathrm C$ e $6\cdot12=72\,\mu\mathrm C$.

In un circuito con una pila, la corrente scorre nei fili solo mentre il condensatore si carica. Quando è carico la corrente si annulla, perché fra le armature c’è un isolante. In corrente continua un condensatore carico equivale quindi a un’interruzione del circuito.
:::

## Campo magnetico: direzione senza lavoro sulla carica

:::osservazione
Il **campo magnetico** è il campo creato dai magneti e dalle correnti elettriche. Si indica con $\vec B$. L’esperimento di Oersted mostrò il legame fra elettricità e magnetismo: l’ago di una bussola vicino a un filo si sposta quando nel filo passa corrente. Intorno a un filo diritto le linee del campo magnetico sono circonferenze con il centro sul filo. Il verso si trova con la mano destra. Si punta il pollice nel verso della corrente, e le altre dita, piegate, indicano il verso delle linee. Le linee del campo magnetico sono sempre chiuse, perché non esistono cariche magnetiche isolate.
:::

:::definizione{#lorentz titolo="Forza magnetica e moto"}
Il campo magnetico si misura in tesla (T). Esercita una forza sulle cariche in movimento, detta **forza di Lorentz**. La forza totale su una carica in presenza di un campo elettrico e di uno magnetico è $\vec F=q(\vec E+\vec v\times\vec B)$. La parte magnetica è:
$$
\vec F_B=q\vec v\times\vec B,\qquad F_B=|q|vB\sin\theta.
$$
Nella formula $\theta$ è l’angolo fra la velocità e il campo. La forza è perpendicolare sia alla velocità sia al campo. È massima quando la carica si muove perpendicolarmente al campo ed è nulla quando si muove parallelamente al campo o è ferma. Su un filo diritto di lunghezza $\ell$ percorso da corrente $I$ la forza è $\vec F=I\vec\ell\times\vec B$, con $\vec\ell$ nel verso della corrente.
:::

:::osservazione
Il verso della forza su una carica positiva si trova con la mano destra. Si punta il pollice lungo la velocità e le altre dita lungo il campo. La forza esce dal palmo. Per una carica negativa il verso è opposto. Nei disegni un vettore perpendicolare al foglio si indica con $\odot$ se esce dal foglio verso chi guarda e con $\otimes$ se entra nel foglio.

![Carica positiva con velocità verso destra in un campo entrante: forza verso l’alto e traiettoria circolare.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/lorentz-it.svg)

La forza magnetica è sempre perpendicolare alla velocità, quindi non compie lavoro. Cambia la direzione della velocità e non il suo modulo, e l’energia cinetica della particella resta costante. Una particella che entra in un campo uniforme con velocità perpendicolare al campo percorre quindi una circonferenza con rapidità costante. La forza magnetica è la forza centripeta:
$$
|q|vB=\dfrac{mv^2}{r},\qquad r=\dfrac{mv}{|q|B},\qquad T=\dfrac{2\pi m}{|q|B}.
$$
Il raggio $r$ è maggiore per le particelle più pesanti e più veloci, e minore in un campo più intenso. Il periodo $T$ non dipende dalla velocità. Un protone ($m=1{,}67\cdot10^{-27}\,\mathrm{kg}$) con velocità $1{,}0\cdot10^6\,\mathrm{m/s}$ in un campo di $0{,}50\,\mathrm T$ percorre una circonferenza di raggio $r=\dfrac{1{,}67\cdot10^{-27}\cdot1{,}0\cdot10^6}{1{,}602\cdot10^{-19}\cdot0{,}50}\simeq0{,}021\,\mathrm m$. Se la velocità ha anche una componente parallela al campo, questa componente non cambia e la traiettoria è un’elica.
:::

## Induzione: opporsi alla variazione del flusso

:::osservazione
Un campo magnetico che cambia nel tempo produce una corrente in un circuito, anche senza pila. Questo fenomeno si chiama **induzione elettromagnetica**. Se si avvicina un magnete a una bobina collegata a un amperometro, lo strumento segna una corrente mentre il magnete si muove. Quando il magnete è fermo la corrente è nulla, anche se il magnete è vicino. La corrente compare quindi quando il campo attraverso la bobina varia.
:::

:::teorema{#induzione titolo="Faraday-Neumann-Lenz"}
La grandezza che conta è il **flusso magnetico** $\Phi_B$ attraverso il circuito, che misura quanto campo attraversa la sua superficie. Per una spira piana di area $A$ in un campo uniforme vale $\Phi_B=BA\cos\theta$, dove $\theta$ è l’angolo fra il campo e la perpendicolare alla spira. Si misura in weber, $1\,\mathrm{Wb}=1\,\mathrm{T\,m^2}$. Il flusso cambia se cambia il campo, se cambia l’area oppure se la spira ruota. La **legge di Faraday-Neumann-Lenz** afferma che la variazione del flusso produce nel circuito una **forza elettromotrice** $\mathcal E$, cioè una tensione, uguale alla rapidità con cui il flusso varia. Per una bobina di $N$ spire:
$$
\mathcal E=-N\dfrac{d\Phi_B}{dt},\qquad \mathcal E_{\mathrm m}=-N\dfrac{\Delta\Phi_B}{\Delta t}.
$$
La prima formula dà il valore in un istante e la seconda il valore medio in un intervallo $\Delta t$. Una bobina di 100 spire, in cui il flusso per spira aumenta di $2{,}0\cdot10^{-3}\,\mathrm{Wb}$ in $0{,}10\,\mathrm s$, ha una forza elettromotrice media di modulo $100\cdot\dfrac{2{,}0\cdot10^{-3}}{0{,}10}=2{,}0\,\mathrm V$. La forza elettromotrice, nonostante il nome, è una tensione e si misura in volt.
:::

:::osservazione
Il segno meno nella formula è la **legge di Lenz**, che dà il verso della corrente indotta: la corrente indotta crea un campo magnetico che si oppone alla variazione del flusso che l’ha prodotta. Si oppone alla variazione, non al campo. I due casi sono i seguenti.

- Se il flusso aumenta, il campo della corrente indotta ha verso opposto al campo esterno.
- Se il flusso diminuisce, il campo della corrente indotta ha lo stesso verso del campo esterno.

Una spira, per esempio, è immersa in un campo che entra nel foglio e che sta aumentando. La corrente indotta crea un campo che esce dal foglio, e per la regola della mano destra circola in verso antiorario. Se lo stesso campo sta diminuendo, la corrente indotta crea un campo che entra nel foglio e circola in verso orario.

![Spira in campo entrante crescente: corrente antioraria e campo indotto uscente; il grafico del flusso distingue pendenza e valore.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/induzione-it.svg)

Se il circuito è chiuso e ha resistenza $R$, la corrente indotta è $I=\dfrac{|\mathcal E|}{R}$. Se il circuito è aperto la forza elettromotrice c’è ugualmente e la corrente non scorre.

La legge di Lenz è una conseguenza della conservazione dell’energia. Quando si avvicina un magnete a una spira, la corrente indotta respinge il magnete. Per avvicinarlo si deve quindi compiere lavoro, e questo lavoro diventa l’energia elettrica della corrente, che si dissipa come calore nella spira.

In un grafico del flusso in funzione del tempo la forza elettromotrice è la pendenza, cambiata di segno. Un flusso grande e costante dà forza elettromotrice nulla. Un flusso che varia rapidamente dà una forza elettromotrice grande, anche nell’istante in cui il flusso vale zero.
:::
