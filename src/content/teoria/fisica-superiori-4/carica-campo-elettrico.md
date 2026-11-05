---
titolo: Carica elettrica, legge di Coulomb e campo elettrico
sommario: Elettrizzazione, conservazione della carica, forza fra cariche puntiformi, sovrapposizione dei campi e moto in un campo uniforme.
---

## Carica e struttura della materia

:::definizione{#carica titolo="Carica elettrica e quantizzazione"}
La **carica elettrica** è una proprietà della materia associata all'interazione elettrica. Si misura in coulomb, simbolo $\mathrm C$. Esistono cariche positive e negative; cariche dello stesso segno si respingono e cariche di segno opposto si attraggono. Il protone ha carica $+e$ e l'elettrone $-e$, con
$$
e=1{,}60\cdot10^{-19}\,\mathrm C.
$$
Per i corpi ordinari la carica netta è un multiplo intero della carica elementare, $q=Ne$ con $N$ intero con segno. Un corpo con $5{,}0\cdot10^{12}$ elettroni in eccesso ha carica $q=-8{,}0\cdot10^{-7}\,\mathrm C$. Un corpo neutro contiene cariche positive e negative che si compensano nel totale.

La carica totale di un sistema isolato si conserva. Un'elettrizzazione per contatto o strofinio comporta un trasferimento di carica fra corpi. Per esempio, se due corpi inizialmente neutri acquistano cariche opposte $+2{,}0\,\mathrm{\mu C}$ e $-2{,}0\,\mathrm{\mu C}$, la loro somma resta nulla. Un microcoulomb corrisponde a $10^{-6}\,\mathrm C$ e un nanocoulomb a $10^{-9}\,\mathrm C$.
:::

## Conduttori, isolanti e induzione

:::definizione{#conduttori titolo="Mobilità delle cariche"}
In un **conduttore** alcune cariche possono muoversi attraverso il materiale. Nei metalli i portatori mobili sono elettroni. In un **isolante** le cariche restano maggiormente legate alle rispettive strutture atomiche, pur potendo subire piccoli spostamenti che producono polarizzazione.

Avvicinando una bacchetta carica a un conduttore neutro isolato, le cariche del conduttore si redistribuiscono. Il corpo può essere attratto anche se la sua carica totale resta nulla, perché la distribuzione vicina alla bacchetta interagisce più intensamente di quella lontana. Per ottenere una carica netta per induzione si può collegare temporaneamente il conduttore a terra, rimuovere il collegamento e poi allontanare la bacchetta.

Due sfere conduttrici identiche molto lontane da altri corpi, dopo il contatto e la separazione simmetrica, si dividono la carica totale in parti uguali. Se le cariche iniziali sono $+6{,}0$ e $-2{,}0\,\mathrm{nC}$, ciascuna resta con $+2{,}0\,\mathrm{nC}$. L'uguaglianza dipende dall'identità delle sfere e dalla situazione simmetrica; in generale i conduttori in contatto raggiungono lo stesso potenziale.
:::

## Legge di Coulomb

:::teorema{#coulomb titolo="Forza fra due cariche puntiformi"}
Per due cariche puntiformi ferme nel vuoto, a distanza $r$, il modulo della forza elettrica è
$$
F=k_e\frac{|q_1q_2|}{r^2},\qquad
k_e=8{,}99\cdot10^9\,\mathrm{N\,m^2/C^2}.
$$
La forza è lungo la congiungente; il segno delle cariche determina attrazione o repulsione. Le due forze reciproche hanno uguale modulo e verso opposto, applicate a corpi diversi. Il modello puntiforme è adeguato quando le dimensioni delle distribuzioni sono piccole rispetto alla distanza, oppure nei casi di simmetria che permettono una descrizione equivalente.

Con $q_1=+2{,}0\,\mathrm{nC}$, $q_2=-3{,}0\,\mathrm{nC}$ e $r=0{,}10\,\mathrm m$, il modulo è $5{,}39\cdot10^{-6}\,\mathrm N$ e la forza è attrattiva. Raddoppiare la distanza riduce il modulo a un quarto; raddoppiare una sola carica lo raddoppia. In un mezzo dielettrico omogeneo semplice la costante si modifica attraverso la permittività del mezzo.
:::

::grafico{f="1/x^2" xmin=1 xmax=5 ymin=0 ymax=2 nomi="r,F" titolo="Dipendenza normalizzata della forza di Coulomb dalla distanza, con cariche fissate: a distanza doppia il modulo è un quarto"}

## Campo elettrico

:::definizione{#campo titolo="Forza per unità di carica di prova"}
Il **campo elettrico** in un punto si definisce mediante la forza su una piccola carica positiva di prova che non modifichi sensibilmente la distribuzione sorgente,
$$
\vec E=\frac{\vec F}{q_0},\qquad \vec F=q\vec E.
$$
Si misura in $\mathrm{N/C}$. Il campo dipende dalle cariche sorgenti e dal punto; la forza dipende anche dalla carica collocata in quel punto. Una carica positiva subisce una forza nel verso di $\vec E$, una negativa nel verso opposto.

Una carica $q=-2{,}0\,\mathrm{nC}$ in un campo uniforme di modulo $300\,\mathrm{N/C}$ subisce una forza di modulo $6{,}0\cdot10^{-7}\,\mathrm N$, opposta al campo. Per una carica puntiforme sorgente $Q$,
$$
E=k_e\frac{|Q|}{r^2}.
$$
Il campo è radiale uscente per $Q>0$ ed entrante per $Q<0$. La carica di prova non compare in questa espressione, perché si semplifica nel rapporto che definisce il campo.
:::

::grafico{assi=0 uguale=1 punti="0,0,pieno,+Q" vettori="0.8,0,2,0;-0.8,0,-2,0;0,0.8,0,2;0,-0.8,0,-2;0.6,0.6,1.5,1.5;-0.6,0.6,-1.5,1.5" unicolore=1 xmin=-3 xmax=3 ymin=-3 ymax=3 titolo="Versi del campo di una carica positiva: le frecce sono radiali uscenti; la loro lunghezza nello schema non rappresenta una scala dei moduli"}

## Sovrapposizione dei campi

:::teorema{#sovrapposizione titolo="Somma vettoriale"}
Il campo prodotto da più cariche è la somma vettoriale dei campi che ciascuna produrrebbe da sola,
$$
\vec E_{\mathrm{tot}}=\vec E_1+\vec E_2+\cdots.
$$
Su una retta si sceglie un verso positivo e si sommano le componenti con segno. Se in un punto $\vec E_1$ vale $300\,\mathrm{N/C}$ verso destra e $\vec E_2$ vale $100\,\mathrm{N/C}$ verso sinistra, il totale è $200\,\mathrm{N/C}$ verso destra. Se i due campi sono perpendicolari, con moduli $300$ e $400\,\mathrm{N/C}$, il modulo totale è $500\,\mathrm{N/C}$ per il teorema di Pitagora.

Nel punto medio fra due cariche uguali positive i campi si annullano perché hanno stesso modulo e versi opposti. Fra due cariche opposte di uguale modulo, invece, i campi nel punto medio hanno lo stesso verso, dalla positiva alla negativa, e si sommano. Il confronto dei segni riguarda la direzione del campo nel punto osservato, non soltanto il segno delle sorgenti.
:::

## Linee di campo e dipolo

:::definizione{#linee titolo="Rappresentazione del campo"}
Le **linee di campo** sono curve la cui tangente ha la direzione del campo elettrico. Il verso è quello della forza su una carica positiva. In elettrostatica escono dalle cariche positive e arrivano a quelle negative o all'infinito. Non si intersecano nei punti in cui il campo è definito e diverso da zero, perché il campo ha una sola direzione in ciascun punto.

Un **dipolo elettrico** è formato da due cariche opposte $+q$ e $-q$ separate da una distanza $d$. Il momento di dipolo $\vec p$ ha modulo $p=qd$ e verso dalla carica negativa alla positiva. In un campo esterno uniforme le due forze hanno risultante nulla ma possono produrre una rotazione. Il momento torcente ha modulo $M=pE\sin\theta$, con $\theta$ fra $\vec p$ e $\vec E$.

Con $q=1{,}0\,\mathrm{nC}$, $d=2{,}0\,\mathrm{cm}$ ed $E=1000\,\mathrm{N/C}$, il momento massimo vale $2{,}0\cdot10^{-8}\,\mathrm{N\,m}$. Il momento è nullo quando il dipolo è parallelo o antiparallelo al campo; l'orientamento parallelo è quello di equilibrio stabile.
:::

## Moto in un campo uniforme

:::teorema{#moto-campo titolo="Accelerazione elettrica"}
Una particella di massa $m$ e carica $q$ in un campo elettrico uniforme, quando le altre forze sono trascurabili e la descrizione classica è adeguata, ha accelerazione costante
$$
\vec a=\frac qm\vec E.
$$
La traiettoria si studia con le leggi del moto uniformemente accelerato. Se la velocità iniziale è parallela al campo, il moto è rettilineo. Se ha una componente perpendicolare, quella componente resta costante e il moto può essere parabolico.

Per un protone, con $q=+1{,}60\cdot10^{-19}\,\mathrm C$ e $m=1{,}67\cdot10^{-27}\,\mathrm{kg}$, in $E=100\,\mathrm{N/C}$, il modulo dell'accelerazione è circa $9{,}58\cdot10^9\,\mathrm{m/s^2}$. Per un elettrone si usa $m_e=9{,}11\cdot10^{-31}\,\mathrm{kg}$ e carica negativa, quindi l'accelerazione ha verso opposto al campo. Le velocità ottenute con le formule classiche devono restare molto minori di $c$.
:::

## Equilibrio e scelta del punto

:::osservazione{#equilibrio titolo="Campo nullo e forza nulla"}
Una carica di prova diversa da zero ha forza elettrica nulla dove il campo totale è nullo. Fra due sorgenti dello stesso segno il punto di annullamento si trova fra esse ed è più vicino alla carica di modulo minore. Per cercarlo si uguagliano i moduli dei campi dopo aver verificato che i versi siano opposti.

Per due cariche positive $Q$ e $4Q$ poste a distanza $d$, se $x$ è la distanza del punto dalla prima,
$$
\frac{k_eQ}{x^2}=\frac{4k_eQ}{(d-x)^2}
\quad\Longrightarrow\quad d-x=2x,
\quad x=\frac d3.
$$
La radice positiva si usa perché entrambe le distanze sono positive nell'intervallo considerato. Il capitolo sul potenziale introdurrà una grandezza scalare: sommare i potenziali richiede un procedimento diverso dalla somma vettoriale dei campi.
:::
