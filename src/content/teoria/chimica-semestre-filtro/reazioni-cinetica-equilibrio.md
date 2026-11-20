---
titolo: "Reazioni chimiche, cinetica ed equilibrio"
sommario: "Conservazioni, velocità e direzione delle trasformazioni: bilanci, meccanismi, catalisi, attività, equilibri e precipitazione, con esperimenti e modelli biomedici."
---

## Bilanciare una trasformazione e prevederne le quantità

:::definizione{#bilanciamento titolo="Atomi, carica ed energia"}
Una **reazione chimica** trasforma alcune sostanze, i *reagenti*, in altre sostanze, i *prodotti*. Si rappresenta con un'**equazione chimica**: i reagenti a sinistra della freccia e i prodotti a destra. Durante una reazione gli atomi si legano in modo diverso, e nessun atomo si crea o si distrugge. Per questo ogni elemento compare con lo stesso numero di atomi nei due membri dell'equazione. **Bilanciare** un'equazione significa scegliere i numeri da scrivere davanti alle formule, detti *coefficienti*, in modo che questa condizione sia soddisfatta.

Per esempio, nella combustione dell'etanolo $\mathrm{C_2H_5OH}$ con l'ossigeno si formano diossido di carbonio e acqua. I 2 atomi di carbonio dell'etanolo richiedono 2 molecole di $\mathrm{CO_2}$. I 6 atomi di idrogeno richiedono 3 molecole di $\mathrm{H_2O}$. A destra ci sono allora $2\cdot2+3=7$ atomi di ossigeno; uno è già nell'etanolo, quindi ne servono altri 6, cioè 3 molecole di $\mathrm{O_2}$.
$$
\mathrm{C_2H_5OH}+3\mathrm{O_2}\longrightarrow2\mathrm{CO_2}+3\mathrm{H_2O}.
$$
I coefficienti indicano in quale rapporto reagiscono le sostanze: una mole di etanolo reagisce con tre moli di ossigeno. Gli indici, cioè i numeri piccoli in basso nelle formule, indicano invece come è fatta la sostanza. Durante il bilanciamento si cambiano solo i coefficienti, perché cambiare un indice significa scrivere un'altra sostanza: $\mathrm{H_2O}$ è acqua e $\mathrm{H_2O_2}$ è acqua ossigenata.

In una reazione fra ioni si conserva anche la carica elettrica, cioè la somma delle cariche è la stessa nei due membri. Un esempio è la formazione del carbonato di calcio solido.
$$
\mathrm{Ca^{2+}}+\mathrm{CO_3^{2-}}\longrightarrow\mathrm{CaCO_3(s)}
$$
A sinistra la somma delle cariche è $+2-2=0$ e a destra il solido è neutro. Questa è un'**equazione ionica netta**, cioè contiene solo gli ioni che reagiscono. Gli altri ioni presenti nella soluzione, che restano uguali prima e dopo la reazione, si chiamano **ioni spettatori** e non si scrivono.

In una reazione si conserva anche la massa: la massa totale dei prodotti è uguale a quella dei reagenti. Se la reazione produce un gas in un recipiente aperto, la bilancia segna una massa minore soltanto perché il gas è uscito. L'equazione bilanciata indica le quantità di sostanza che reagiscono. Non indica quanto calore viene scambiato né quanto velocemente la reazione avviene; questi due aspetti sono trattati nei paragrafi seguenti.
:::

:::definizione{#stechiometria titolo="Avanzamento, limitante e resa"}
La **stechiometria** è il calcolo delle quantità di reagenti e prodotti a partire dall'equazione bilanciata. Si considera la reazione generica $a\mathrm A+b\mathrm B\longrightarrow c\mathrm C$, dove $a$, $b$, $c$ sono i coefficienti. L'**avanzamento** $\xi$ è una quantità in moli che indica di quanto la reazione è progredita: quando l'avanzamento vale $\xi$, si sono consumate $a\xi$ moli di A e $b\xi$ moli di B e si sono formate $c\xi$ moli di C.
$$
\Delta n_A=-a\xi,\qquad\Delta n_B=-b\xi,\qquad\Delta n_C=c\xi.
$$
In queste formule $\Delta n$ è la variazione del numero di moli di ciascuna sostanza, negativa per i reagenti e positiva per i prodotti. La reazione si ferma quando uno dei reagenti finisce. Se $n_{A,0}$ e $n_{B,0}$ sono le moli iniziali, il reagente A basta per un avanzamento $\dfrac{n_{A,0}}{a}$ e il reagente B per un avanzamento $\dfrac{n_{B,0}}{b}$. L'avanzamento massimo è il più piccolo dei due valori.
$$
\xi_{\max}=\min\left\{\dfrac{n_{A,0}}{a},\dfrac{n_{B,0}}{b}\right\}.
$$
Il **reagente limitante** è quello che finisce per primo, cioè quello a cui corrisponde il rapporto più piccolo. L'altro reagente è *in eccesso* e ne resta una parte. Il confronto si fa sulle moli divise per il coefficiente, e non sulle masse. Se i dati sono masse, si calcolano prima le moli con $n=\dfrac{m}{M}$, dove $M$ è la massa molare.

Per esempio, nella reazione $2\mathrm{H_2}+\mathrm{O_2}\longrightarrow2\mathrm{H_2O}$ si hanno $3\,\mathrm{mol}$ di idrogeno e $1\,\mathrm{mol}$ di ossigeno. I rapporti sono $\dfrac32=1{,}5$ per l'idrogeno e $\dfrac11=1$ per l'ossigeno, quindi l'ossigeno è il reagente limitante e $\xi_{\max}=1\,\mathrm{mol}$. Si formano $2\cdot1=2\,\mathrm{mol}$ di acqua, si consumano $2\,\mathrm{mol}$ di idrogeno e ne resta $1\,\mathrm{mol}$.

La quantità di prodotto così calcolata è la quantità *teorica*, cioè la massima possibile. In pratica se ne ottiene di meno, perché la reazione può non essere completa, possono avvenire altre reazioni e una parte del prodotto si perde durante il recupero. La **resa percentuale** è il rapporto fra la quantità ottenuta e quella teorica, moltiplicato per 100: $\dfrac{n_{\mathrm{isolato}}}{n_{\mathrm{teorico}}}\cdot100\%$. Se si ottengono $1{,}6\,\mathrm{mol}$ di acqua su 2 teoriche, la resa è l'80%. Una resa superiore al 100% indica che il prodotto pesato non è puro, per esempio perché contiene ancora acqua.

![Tre moli di idrogeno e una di ossigeno producono al massimo due moli di acqua, lasciando una mole di idrogeno.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/bilancio-it.svg)
:::

## Misurare la velocità e ricostruire una legge cinetica

:::definizione{#velocita titolo="Variazione di una specie e velocità normalizzata"}
La **cinetica chimica** studia la velocità delle reazioni. La **velocità di reazione** indica di quanto varia la concentrazione di un reagente o di un prodotto in un secondo. Si misura in $\mathrm{mol\,L^{-1}\,s^{-1}}$. Per la reazione $a\mathrm A+b\mathrm B\longrightarrow c\mathrm C$, in una soluzione di volume costante, la velocità è definita dalla formula seguente.
$$
v=-\dfrac{1}{a}\dfrac{d[A]}{dt}=-\dfrac{1}{b}\dfrac{d[B]}{dt}=\dfrac{1}{c}\dfrac{d[C]}{dt}.
$$
In questa formula $[A]$ indica la concentrazione di A e $\dfrac{d[A]}{dt}$ la sua variazione nell'unità di tempo. Per i reagenti compare il segno meno, perché la loro concentrazione diminuisce e la velocità è un numero positivo. Ogni variazione è divisa per il coefficiente della sostanza, così la velocità ha lo stesso valore qualunque sostanza si misuri. La velocità *media* si calcola su un intervallo di tempo, dividendo la variazione di concentrazione per la durata dell'intervallo. La velocità *istantanea* è la velocità in un preciso momento e corrisponde alla pendenza della curva concentrazione-tempo in quel punto.

Per esempio, nella reazione $2\mathrm{H_2O_2}\longrightarrow2\mathrm{H_2O}+\mathrm{O_2}$ per ogni molecola di ossigeno formata si consumano due molecole di perossido. Se l'ossigeno si forma alla velocità di $0{,}010\,\mathrm{mol\,L^{-1}\,s^{-1}}$, il perossido si consuma alla velocità di $0{,}020\,\mathrm{mol\,L^{-1}\,s^{-1}}$, e la velocità di reazione è $0{,}010\,\mathrm{mol\,L^{-1}\,s^{-1}}$ in entrambi i casi. Queste formule valgono a volume costante. Se il volume cambia, la concentrazione varia anche per la sola diluizione, e la velocità si definisce a partire dall'avanzamento come $\dfrac{1}{V}\dfrac{d\xi}{dt}$.
:::

:::definizione{#ordine titolo="Ordine sperimentale e stadi elementari"}
La velocità di una reazione dipende dalle concentrazioni dei reagenti. La relazione che esprime questa dipendenza si chiama **legge cinetica** e ha spesso la forma $v=k[A]^\alpha[B]^\beta$. Il numero $k$ è la **costante cinetica**, che dipende dalla reazione e dalla temperatura. Gli esponenti $\alpha$ e $\beta$ sono gli **ordini di reazione** rispetto ad A e a B (ordini parziali), e la loro somma è l'ordine complessivo. L'ordine indica quanto la velocità è sensibile alla concentrazione: con ordine 1 la velocità raddoppia se la concentrazione raddoppia; con ordine 2 diventa quattro volte maggiore; con ordine 0 non cambia.

Gli ordini si ricavano dagli esperimenti e non dai coefficienti dell'equazione. Si misura la velocità cambiando la concentrazione di un solo reagente e lasciando costante tutto il resto. Per esempio, se raddoppiando $[A]$ la velocità diventa quattro volte maggiore, allora $2^\alpha=4$ e $\alpha=2$. Se un reagente è presente in grande eccesso, la sua concentrazione resta quasi costante durante la reazione. Nella legge $v=k[A][B]$ con B in eccesso, il prodotto $k[B]$ è praticamente costante e la reazione si comporta come se fosse di ordine 1 rispetto al solo A.

Gli ordini sono di solito 0, 1 o 2. Possono anche essere frazionari o negativi; un ordine negativo significa che la velocità diminuisce quando la concentrazione di quella sostanza aumenta, come accade con un inibitore. Le unità di $k$ dipendono dall'ordine complessivo $n$ e sono $\mathrm{(mol\,L^{-1})^{1-n}\,s^{-1}}$: per l'ordine 1 si ottiene $\mathrm{s^{-1}}$ e per l'ordine 2 si ottiene $\mathrm{L\,mol^{-1}\,s^{-1}}$.

Molte reazioni avvengono in più passaggi successivi, detti **stadi elementari**. L'insieme degli stadi è il **meccanismo** della reazione. Uno stadio elementare è un singolo evento, per esempio l'urto fra due molecole. La **molecolarità** di uno stadio è il numero di particelle che vi partecipano: 1 per uno stadio unimolecolare, 2 per uno bimolecolare. Solo per uno stadio elementare gli ordini coincidono con i coefficienti: per lo stadio $\mathrm A+\mathrm B\longrightarrow\mathrm P$ la legge è $v=k[A][B]$.

Un **intermedio** è una sostanza che si forma in uno stadio e si consuma in uno stadio successivo, quindi non compare nell'equazione complessiva. La velocità della reazione complessiva è determinata soprattutto dallo stadio più lento, detto *stadio limitante*. Anche uno stadio veloce che lo precede ha un effetto, perché stabilisce quanto intermedio è disponibile per lo stadio lento.
:::

:::osservazione{#leggi-integrate titolo="Come cambia la concentrazione nel tempo"}
Le **leggi integrate** danno la concentrazione del reagente A in funzione del tempo. La tabella riporta i tre casi più comuni: ordine 0, ordine 1 e ordine 2. In ogni riga $[A]_0$ è la concentrazione iniziale, $k$ la costante cinetica e $t$ il tempo. Il **tempo di dimezzamento** è il tempo necessario perché la concentrazione si riduca alla metà.

| Legge di scomparsa | Relazione integrata | Tempo di dimezzamento |
| --- | --- | --- |
| $-\dfrac{d[A]}{dt}=k$ | $[A]=[A]_0-kt$ | $\dfrac{[A]_0}{2k}$ |
| $-\dfrac{d[A]}{dt}=k[A]$ | $\ln\dfrac{[A]}{[A]_0}=-kt$ | $\dfrac{\ln2}{k}$ |
| $-\dfrac{d[A]}{dt}=k[A]^2$ | $\dfrac{1}{[A]}=\dfrac{1}{[A]_0}+kt$ | $\dfrac{1}{k[A]_0}$ |

I tre casi si distinguono per il modo in cui la concentrazione diminuisce.

- **Ordine 0**. La concentrazione diminuisce della stessa quantità in tempi uguali, quindi il grafico di $[A]$ in funzione del tempo è una retta. Il tempo di dimezzamento dipende dalla concentrazione iniziale.
- **Ordine 1**. La concentrazione diminuisce della stessa *frazione* in tempi uguali. Il tempo di dimezzamento è costante: se vale 10 minuti, dopo 10 minuti resta la metà, dopo 20 un quarto, dopo 30 un ottavo. È una retta il grafico di $\ln[A]$ in funzione del tempo. Seguono questa legge il decadimento radioattivo e l'eliminazione di molti farmaci.
- **Ordine 2**. È una retta il grafico di $\dfrac{1}{[A]}$ in funzione del tempo. Il tempo di dimezzamento si allunga man mano che la concentrazione diminuisce.

Per riconoscere l'ordine di una reazione si riportano i dati sperimentali nei tre grafici e si osserva quale dei tre è una retta.

Nella figura le tre curve partono dalla stessa concentrazione iniziale e hanno la stessa velocità iniziale $v_0$. Sull'asse orizzontale è riportato il tempo diviso per $\dfrac{[A]_0}{v_0}$, cioè $\tau=\dfrac{v_0t}{[A]_0}$. Nell'ordine 0 la velocità resta costante fino alla fine; negli ordini 1 e 2 la velocità diminuisce mentre il reagente si consuma, e nell'ordine 2 diminuisce più rapidamente.

![Curve di concentrazione normalizzata: diminuzione lineare nell'ordine zero, esponenziale nel primo e iperbolica nel secondo, con uguale pendenza iniziale.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/cinetiche-it.svg)
:::

## Barriere, temperatura e catalisi

:::definizione{#arrhenius titolo="Urti efficaci e stato di transizione"}
Perché due molecole reagiscano devono urtarsi. Solo una parte degli urti porta alla reazione: un urto è *efficace* se le molecole hanno abbastanza energia e sono orientate nel modo adatto. Da qui derivano i fattori che modificano la velocità.

- **Concentrazione**. Con più molecole nello stesso volume gli urti sono più frequenti.
- **Temperatura**. A temperatura più alta le molecole sono più veloci e una frazione maggiore di urti ha l'energia sufficiente.
- **Superficie di contatto**. Se un reagente è solido, reagiscono solo le particelle in superficie. Una polvere reagisce più in fretta di un blocco della stessa massa, perché ha una superficie maggiore.

L'energia minima che le molecole devono avere perché l'urto sia efficace si chiama **energia di attivazione** $E_a$. La **legge di Arrhenius** esprime la dipendenza della costante cinetica $k$ dalla temperatura.
$$
k=Ae^{-\dfrac{E_a}{RT}},\qquad
\ln\dfrac{k_2}{k_1}=-\dfrac{E_a}{R}\left(\dfrac{1}{T_2}-\dfrac{1}{T_1}\right).
$$
In queste formule $T$ è la temperatura assoluta, $R=8{,}314\,\mathrm{J\,mol^{-1}\,K^{-1}}$ è la costante dei gas e $A$ è il fattore preesponenziale, legato alla frequenza degli urti con l'orientazione adatta. La prima formula mostra che $k$ aumenta quando la temperatura aumenta e che, a parità di temperatura, è più piccola se l'energia di attivazione è grande. La seconda formula confronta le costanti $k_1$ e $k_2$ a due temperature $T_1$ e $T_2$, e si usa per ricavare $E_a$ da due misure. Poiché $R$ è in joule, un'energia di attivazione data in kilojoule si converte in joule. In un grafico di $\ln k$ in funzione di $\dfrac1T$ i punti stanno su una retta di pendenza $-\dfrac{E_a}{R}$. Una retta più ripida corrisponde a un'energia di attivazione maggiore, cioè a una reazione più sensibile alla temperatura.

Durante uno stadio elementare l'energia delle molecole prima sale e poi scende. Il punto di massima energia si chiama **stato di transizione** (o complesso attivato): è la disposizione degli atomi in cui i legami vecchi sono in parte rotti e quelli nuovi in parte formati. Esiste solo per un istante e non si può isolare. Un intermedio, invece, corrisponde a un minimo di energia fra due stadi ed esiste per un tempo misurabile.

La differenza di energia fra i reagenti e lo stato di transizione è la **barriera di attivazione**. La differenza di energia fra reagenti e prodotti è un'altra grandezza, e stabilisce se la reazione è favorita. Le due grandezze sono indipendenti, quindi una reazione molto favorita può essere lentissima se la barriera è alta. Un esempio è la combustione della carta, che a temperatura ambiente non avviene finché non si fornisce l'energia iniziale.

La **teoria dello stato di transizione** esprime la barriera come energia libera di attivazione $\Delta G^\ddagger$, misurata dai reagenti allo stato di transizione. Più alta è la barriera, minore è il numero di molecole che in ogni istante raggiunge lo stato di transizione, e più lenta è la reazione.
:::

:::definizione{#catalisi titolo="Percorsi alternativi ed enzimi"}
Un **catalizzatore** è una sostanza che aumenta la velocità di una reazione senza essere consumata. Partecipa alla reazione e alla fine si ritrova inalterato, quindi non compare nell'equazione complessiva. Il catalizzatore offre alla reazione un meccanismo diverso, con una barriera di attivazione più bassa. Non cambia l'energia dei reagenti e dei prodotti, quindi non cambia la costante di equilibrio $K$ né la quantità di prodotto che si ottiene all'equilibrio: l'equilibrio viene soltanto raggiunto in meno tempo. Il catalizzatore accelera nella stessa misura la reazione diretta e quella inversa.

Gli **enzimi** sono i catalizzatori delle cellule. Quasi tutti sono proteine; alcuni sono molecole di RNA (acido ribonucleico). La sostanza su cui l'enzima agisce si chiama *substrato* e si lega a una zona dell'enzima detta *sito attivo*. Ogni enzima riconosce solo uno o pochi substrati. L'enzima abbassa la barriera perché lega con più forza lo stato di transizione.

La velocità di una reazione enzimatica dipende dalla concentrazione del substrato in due modi. Con poco substrato la velocità cresce in proporzione alla sua concentrazione (ordine 1). Con molto substrato tutti i siti attivi sono occupati, l'enzima è *saturo* e la velocità non aumenta più (ordine 0); per aumentarla serve altro enzima. Anche la temperatura ha due effetti: un riscaldamento moderato accelera la reazione, mentre una temperatura troppo alta altera la struttura dell'enzima (denaturazione) e la velocità diminuisce bruscamente.

Un catalizzatore non rende possibile una reazione sfavorita. Nelle cellule le reazioni sfavorite avvengono perché sono accoppiate a un'altra reazione molto favorita, per esempio l'idrolisi dell'ATP (adenosina trifosfato, la molecola che fornisce energia alle reazioni cellulari). L'accoppiamento cambia la reazione complessiva, perché aggiunge reagenti e prodotti, e quindi cambia il bilancio di energia. La catalisi cambia soltanto la velocità.

![Due profili di energia libera con gli stessi livelli iniziale e finale e diverse barriere; il percorso catalizzato mantiene invariata la differenza tra reagenti e prodotti.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/barriere-it.svg)
:::

## Riconoscere l'equilibrio e scrivere la costante

:::definizione{#equilibrio titolo="Equilibrio dinamico e stato stazionario"}
Molte reazioni sono **reversibili**: mentre i reagenti si trasformano in prodotti, i prodotti si ritrasformano in reagenti. In un recipiente chiuso la reazione diretta rallenta mentre i reagenti si consumano e quella inversa accelera mentre i prodotti si accumulano. Quando le due velocità diventano uguali, le concentrazioni non cambiano più e si è raggiunto l'**equilibrio chimico**.

L'equilibrio è *dinamico*, cioè le due reazioni continuano ad avvenire e si compensano esattamente. All'equilibrio le concentrazioni restano costanti nel tempo; in generale reagenti e prodotti hanno concentrazioni diverse fra loro. Lo scambio continuo si mette in evidenza aggiungendo un reagente marcato con un isotopo: dopo un certo tempo l'isotopo si ritrova anche nei prodotti.

Una reazione si considera *irreversibile* quando la reazione inversa è trascurabile, come in una combustione. Si scrive con una freccia singola; una reazione reversibile si scrive con la doppia freccia $\rightleftharpoons$.

Lo **stato stazionario** è una situazione diversa dall'equilibrio. Anche in esso le concentrazioni restano costanti, ma il sistema è aperto: una sostanza entra o viene prodotta con la stessa velocità con cui esce o viene consumata. Una cellula mantiene costante la concentrazione di un metabolita producendolo e consumandolo continuamente, con un flusso netto di materia ed energia. All'equilibrio, invece, non c'è alcun flusso netto. Per distinguere i due casi si osserva quindi se il sistema scambia materia con l'esterno.

![Confronto fra reazione reversibile con velocità opposte uguali e sistema aperto mantenuto costante da ingresso e consumo.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/stazionario-it.svg)
:::

:::definizione{#costante-equilibrio titolo="Attività e stati standard"}
All'equilibrio le concentrazioni di reagenti e prodotti sono legate fra loro da un numero, la **costante di equilibrio** $K$. Per la reazione $a\mathrm A+b\mathrm B\rightleftharpoons c\mathrm C+d\mathrm D$ la costante è
$$
K=\dfrac{a_C^c a_D^d}{a_A^a a_B^b}.
$$
Questa relazione si chiama **legge d'azione di massa**. I prodotti stanno al numeratore, i reagenti al denominatore, e ogni termine ha per esponente il proprio coefficiente. I simboli $a_C$, $a_D$, $a_A$, $a_B$ indicano le *attività*, che nelle soluzioni diluite coincidono con i valori numerici delle concentrazioni in $\mathrm{mol\,L^{-1}}$. Il valore di $K$ dipende solo dalla reazione e dalla temperatura. Se $K$ è molto maggiore di 1, all'equilibrio prevalgono i prodotti; se è molto minore di 1, prevalgono i reagenti. Per esempio, per $\mathrm A\rightleftharpoons\mathrm B$ con $K=4$, all'equilibrio la concentrazione di B è quattro volte quella di A.

Nella costante di equilibrio gli esponenti sono sempre i coefficienti dell'equazione. Nella legge cinetica, invece, gli ordini si ricavano dagli esperimenti.

L'attività di ogni sostanza è un numero senza unità, quindi anche $K$ è senza unità. Si calcola in modo diverso secondo lo stato della sostanza.

- Per un soluto, $a_i=\gamma_i\dfrac{[i]}{c^\circ}$, con $c^\circ=1\,\mathrm{mol\,L^{-1}}$. Il coefficiente di attività $\gamma_i$ vale circa 1 nelle soluzioni diluite.
- Per un gas, $a_i=\dfrac{p_i}{p^\circ}$, dove $p_i$ è la pressione parziale e $p^\circ=1\,\mathrm{bar}$.
- Per un solido puro o un liquido puro, $a_i=1$.

Di conseguenza i solidi puri e i liquidi puri, compresa l'acqua quando è il solvente, non compaiono nell'espressione di $K$. Per esempio, per $\mathrm{CaCO_3(s)}\rightleftharpoons\mathrm{CaO(s)}+\mathrm{CO_2(g)}$ la costante contiene solo la pressione della $\mathrm{CO_2}$. Aggiungere altro solido non sposta l'equilibrio; aumenta solo la superficie e quindi la velocità con cui l'equilibrio viene raggiunto. Questo vale finché il solido è presente: se si scioglie o si consuma del tutto, l'equilibrio con il solido non esiste più.

Si incontrano spesso i simboli $K_c$ e $K_p$. $K_c$ è la costante scritta con le concentrazioni in $\mathrm{mol\,L^{-1}}$ e $K_p$ è quella scritta con le pressioni parziali. Nei calcoli di questo capitolo si usano i valori numerici delle concentrazioni in $\mathrm{mol\,L^{-1}}$, il che equivale a dividerle per $c^\circ$.
:::

## Stabilire il verso con Q e l'energia libera

:::definizione{#quoziente-gibbs titolo="Composizione attuale e composizione di equilibrio"}
Il **quoziente di reazione** $Q$ ha la stessa espressione di $K$, ma si calcola con le concentrazioni presenti in un momento qualsiasi, anche lontano dall'equilibrio. Il confronto fra $Q$ e $K$ indica in quale verso la reazione procede.

- Se $Q<K$ ci sono pochi prodotti rispetto all'equilibrio, quindi la reazione procede verso i prodotti.
- Se $Q>K$ ci sono troppi prodotti, quindi la reazione procede verso i reagenti.
- Se $Q=K$ il sistema è all'equilibrio.

Lo stesso criterio si esprime con l'energia libera di reazione $\Delta_rG$, che a temperatura e pressione costanti è legata a $Q$ dalle relazioni seguenti.
$$
\Delta_rG=\Delta_rG^\circ+RT\ln Q,
$$
$$
\Delta_rG^\circ=-RT\ln K,\qquad
\Delta_rG=RT\ln\dfrac{Q}{K}.
$$
In queste formule $\Delta_rG^\circ$ è l'energia libera standard di reazione, cioè il valore di $\Delta_rG$ quando tutte le attività valgono 1, $R$ è la costante dei gas e $T$ la temperatura assoluta. Dall'ultima formula si vede che con $Q<K$ il logaritmo è negativo, quindi $\Delta_rG<0$ e la reazione procede verso i prodotti. Con $Q>K$ si ha $\Delta_rG>0$ e la reazione procede verso i reagenti. Con $Q=K$ si ha $\Delta_rG=0$. La relazione $\Delta_rG^\circ=-RT\ln K$ collega la costante di equilibrio all'energia libera standard: a un $\Delta_rG^\circ$ negativo corrisponde $K>1$.

Per esempio, per $\mathrm A\rightleftharpoons\mathrm B$ con $K=4$, una miscela con $[A]=0{,}80\,\mathrm{mol\,L^{-1}}$ e $[B]=0{,}20\,\mathrm{mol\,L^{-1}}$ ha $Q=\dfrac{0{,}20}{0{,}80}=0{,}25$. Poiché $Q<K$, una parte di A si trasforma in B finché il rapporto diventa 4. Se invece la miscela iniziale ha $Q=20$, una parte di B si trasforma in A, anche se $K>1$. Il valore di $K$ indica la composizione finale; il verso in cui la reazione procede dipende dalla composizione di partenza.

Per calcolare le concentrazioni all'equilibrio si indica con $x$ la concentrazione che reagisce. Per $\mathrm A\rightleftharpoons\mathrm B$ a volume costante si ha $[A]=[A]_0-x$ e $[B]=[B]_0+x$. Si sostituiscono queste espressioni in $K$ e si risolve l'equazione in $x$. Nell'esempio precedente $\dfrac{0{,}20+x}{0{,}80-x}=4$, da cui $x=0{,}60$. All'equilibrio $[A]=0{,}20\,\mathrm{mol\,L^{-1}}$ e $[B]=0{,}80\,\mathrm{mol\,L^{-1}}$. Se i coefficienti sono diversi da 1, ogni variazione è moltiplicata per il proprio coefficiente. Fra le soluzioni dell'equazione si sceglie quella che dà concentrazioni positive. La costante $K$ non dà informazioni sul tempo necessario a raggiungere l'equilibrio.

![Segno di delta G diviso RT rispetto al logaritmo di Q su K: negativo verso i prodotti, zero all'equilibrio, positivo verso i reagenti.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/quoziente-it.svg)
:::

## Perturbare concentrazione, pressione e temperatura

:::osservazione{#le-chatelier titolo="Equilibrio mobile con condizioni esplicite"}
Il **principio di Le Chatelier** afferma che, se si modifica una condizione di un sistema all'equilibrio, il sistema reagisce nel verso che riduce l'effetto della modifica, fino a raggiungere un nuovo equilibrio. Le condizioni che si possono modificare sono la concentrazione, la pressione e la temperatura.

**Concentrazione**. Se si aggiunge un reagente, la reazione procede verso i prodotti e ne consuma una parte. Se si aggiunge un prodotto, procede verso i reagenti. Lo stesso risultato si ottiene con il quoziente di reazione: aggiungendo un reagente $Q$ diventa minore di $K$, e la reazione procede verso i prodotti finché $Q$ torna uguale a $K$. Il valore di $K$ non cambia, perché la temperatura è la stessa.

**Pressione**. Conta solo se nella reazione ci sono gas. Se si comprime il sistema, cioè si riduce il volume, la reazione procede verso il lato con meno moli di gas. Per esempio, in $\mathrm{N_2O_4}\rightleftharpoons2\mathrm{NO_2}$ a sinistra c'è 1 mole di gas e a destra ce ne sono 2, quindi la compressione favorisce $\mathrm{N_2O_4}$. Se le moli di gas sono uguali nei due membri, la pressione non ha effetto. In termini quantitativi, se tutte le pressioni parziali vengono moltiplicate per un numero $\lambda$, il quoziente $Q$ viene moltiplicato per $\lambda^{\Delta\nu}$, dove $\Delta\nu$ è la differenza fra le moli di gas dei prodotti e quelle dei reagenti.

**Gas inerte**. L'aggiunta di un gas che non reagisce ha effetti diversi secondo le condizioni. A volume costante le pressioni parziali dei gas che reagiscono restano uguali, perché $p_i=\dfrac{n_iRT}{V}$ non dipende dagli altri gas; la pressione totale aumenta e l'equilibrio non si sposta. A pressione totale costante il recipiente si espande, le pressioni parziali diminuiscono e l'equilibrio si sposta verso il lato con più moli di gas, come in un'espansione.

**Temperatura**. È l'unica modifica che cambia il valore di $K$. Se $\Delta_rH^\circ$ è l'entalpia standard di reazione, le costanti $K_1$ e $K_2$ a due temperature $T_1$ e $T_2$ sono legate dalla relazione seguente (equazione di van't Hoff).
$$
\ln\dfrac{K_2}{K_1}=-\dfrac{\Delta_rH^\circ}{R}\left(\dfrac{1}{T_2}-\dfrac{1}{T_1}\right).
$$
Se la reazione è endotermica ($\Delta_rH^\circ>0$), un aumento di temperatura fa aumentare $K$ e favorisce i prodotti. Se è esotermica ($\Delta_rH^\circ<0$), un aumento di temperatura fa diminuire $K$ e favorisce i reagenti. In una reazione esotermica il riscaldamento ha quindi due effetti opposti: la reazione è più veloce, per la legge di Arrhenius, e all'equilibrio si ottiene meno prodotto. La legge di Arrhenius riguarda la velocità; l'equazione di van't Hoff riguarda la composizione all'equilibrio.

![Per N2O4 in equilibrio con due NO2, la compressione aumenta Q, il gas inerte a volume costante lascia Q invariato e quello a pressione costante lo riduce.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/gas-inerte-it.svg)
:::

## Collegare più reazioni

:::osservazione{#equilibri-multipli titolo="Costanti e bilanci simultanei"}
Spesso una reazione si ottiene combinando altre reazioni di cui si conosce la costante di equilibrio. La costante della nuova reazione si calcola con tre regole.

| Operazione sull'equazione | Nuova costante |
| --- | --- |
| Inversione | $\dfrac{1}{K}$ |
| Coefficienti moltiplicati per $n$ | $K^n$ |
| Somma di due equazioni | $K_1K_2$ |

Per esempio, se $\mathrm A\rightleftharpoons\mathrm B$ ha $K_1=3$ e $\mathrm B\rightleftharpoons\mathrm C$ ha $K_2=5$, sommando le due equazioni si ottiene $\mathrm A\rightleftharpoons\mathrm C$, con $K=3\cdot5=15$. La reazione inversa $\mathrm C\rightleftharpoons\mathrm A$ ha $K=\dfrac{1}{15}$. Le regole derivano dal fatto che le energie libere standard si sommano e che $\Delta_rG^\circ=-RT\ln K$: a una somma di logaritmi corrisponde un prodotto. Un catalizzatore di una delle due reazioni fa raggiungere l'equilibrio più in fretta e non cambia queste costanti.

Le regole valgono se tutte le costanti sono riferite alla stessa temperatura. Quando in una soluzione avvengono più equilibri insieme, tutte le costanti devono essere soddisfatte contemporaneamente. Occorre anche tenere conto che una sostanza può essere presente in più forme. Il calcio in una soluzione, per esempio, è in parte ione libero $\mathrm{Ca^{2+}}$ e in parte legato ad altre molecole. Nella costante di equilibrio compare la concentrazione della forma libera, che è minore della concentrazione totale.

![Le costanti di A in B e di B in C si moltiplicano per ottenere quella di A in C; la reazione inversa ha costante reciproca.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/costanti-it.svg)
:::

## Dissoluzione, precipitazione e sistemi biologici

:::definizione{#prodotto-solubilita titolo="Solubilità, saturazione e nucleazione"}
Un sale *poco solubile* si scioglie in acqua solo in piccola quantità. Quando la soluzione è satura, il solido rimasto è in equilibrio con i suoi ioni in soluzione. La costante di questo equilibrio si chiama **prodotto di solubilità** $K_{\mathrm{ps}}$. Per un sale MX formato da un catione e un anione si scrive
$$
\mathrm{MX(s)}\rightleftharpoons\mathrm{M^+(aq)}+\mathrm{X^-(aq)},\qquad
K_{\mathrm{ps}}=a_{M^+}a_{X^-}.
$$
Il solido non compare nella costante, perché la sua attività vale 1. Più piccolo è $K_{\mathrm{ps}}$, meno solubile è il sale. La **solubilità molare** $s$ è il numero di moli di sale che si sciolgono in un litro. Il legame fra $s$ e $K_{\mathrm{ps}}$ dipende dalla formula del sale.

- Per un sale MX, da ogni mole sciolta si ottengono una mole di $\mathrm{M^+}$ e una di $\mathrm{X^-}$. Quindi $[M^+]=[X^-]=s$ e $K_{\mathrm{ps}}=s^2$. Per esempio, per AgCl $K_{\mathrm{ps}}\simeq1{,}8\cdot10^{-10}$, da cui $s=\sqrt{1{,}8\cdot10^{-10}}\simeq1{,}3\cdot10^{-5}\,\mathrm{mol\,L^{-1}}$.
- Per un sale $\mathrm{MX_2}$ si ottengono una mole di $\mathrm{M^{2+}}$ e due di $\mathrm{X^-}$. Quindi $[M^{2+}]=s$, $[X^-]=2s$ e $K_{\mathrm{ps}}=s\cdot(2s)^2=4s^3$.

Per questo motivo i valori di $K_{\mathrm{ps}}$ di due sali si confrontano direttamente solo se i sali hanno lo stesso tipo di formula.

Per sapere se in una soluzione si forma un precipitato si calcola il **prodotto ionico** $Q_{\mathrm{ps}}$, che ha la stessa espressione di $K_{\mathrm{ps}}$ e usa le concentrazioni presenti in quel momento.

- Se $Q_{\mathrm{ps}}<K_{\mathrm{ps}}$ la soluzione non è satura, e altro solido può sciogliersi.
- Se $Q_{\mathrm{ps}}=K_{\mathrm{ps}}$ la soluzione è satura.
- Se $Q_{\mathrm{ps}}>K_{\mathrm{ps}}$ la soluzione è *sovrasatura* e il sale precipita finché $Q_{\mathrm{ps}}$ torna uguale a $K_{\mathrm{ps}}$.

Una soluzione sovrasatura può restare limpida per un certo tempo, perché la formazione dei primi cristalli (*nucleazione*) è lenta. L'aggiunta di un piccolo cristallo del sale fa iniziare subito la precipitazione.

Quando si mescolano due soluzioni, ciascuna diluisce l'altra. Le concentrazioni da inserire in $Q_{\mathrm{ps}}$ sono quelle dopo il mescolamento, calcolate sul volume totale. Per esempio, mescolando volumi uguali di due soluzioni, ciascuna concentrazione si dimezza.

![Tre rapporti fra prodotto ionico e prodotto di solubilità: dissoluzione possibile, saturazione e precipitazione favorita con possibile ritardo di nucleazione.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/solubilita-it.svg)
:::

:::osservazione{#ione-comune titolo="Specie libere, ione comune e rilevanza biomedica"}
La solubilità di un sale diminuisce se la soluzione contiene già uno dei suoi ioni. Questo è l'**effetto dello ione comune**, ed è una conseguenza del principio di Le Chatelier: lo ione già presente sposta l'equilibrio verso il solido. Se la soluzione contiene già lo ione $\mathrm{X^-}$ alla concentrazione $c_0$ e si scioglie il sale MX con solubilità $s$, allora $[M^+]=s$ e $[X^-]=c_0+s$.
$$
K_{\mathrm{ps}}\simeq s(c_0+s),\qquad
s\simeq\dfrac{K_{\mathrm{ps}}}{c_0}\quad\text{se }s\ll c_0.
$$
La seconda formula vale quando $s$ è molto più piccola di $c_0$, come accade di solito. Per esempio, la solubilità di AgCl in una soluzione che contiene già $0{,}10\,\mathrm{mol\,L^{-1}}$ di ioni cloruro è $s\simeq\dfrac{1{,}8\cdot10^{-10}}{0{,}10}=1{,}8\cdot10^{-9}\,\mathrm{mol\,L^{-1}}$, circa settemila volte minore che in acqua pura. Il valore di $K_{\mathrm{ps}}$ è lo stesso nei due casi, perché dipende solo dalla temperatura; cambia la solubilità.

Il ragionamento inverso spiega come un sale poco solubile si può sciogliere: basta togliere dalla soluzione uno dei suoi ioni. L'ossalato di calcio, il componente più comune dei calcoli renali, è in equilibrio con gli ioni calcio e ossalato liberi. Se il calcio viene legato da un'altra molecola, per esempio il citrato, oppure se l'ossalato acquista un $\mathrm{H^+}$ in ambiente acido, la concentrazione dello ione libero diminuisce e una parte del solido si scioglie. Nel prodotto ionico compaiono gli ioni liberi, quindi la misura del calcio totale non basta per calcolarlo.

L'acido urico offre un secondo esempio. In soluzione esiste in due forme: l'acido urico neutro e il suo anione, l'urato. Le due forme danno due solidi diversi, ciascuno con una propria solubilità: l'acido urico solido e l'urato di sodio. Se il pH diminuisce, cioè se la soluzione diventa più acida, una parte maggiore dell'urato acquista un $\mathrm{H^+}$ e diventa acido urico, che è meno solubile; per questo un'urina acida favorisce i calcoli di acido urico. L'urato di sodio precipita invece dove la concentrazione di urato e di sodio è alta, come accade nelle articolazioni nella gotta. La formazione dei calcoli dipende anche dal volume di urina, dal pH e dalla velocità con cui i cristalli crescono; il prodotto di solubilità indica soltanto se la precipitazione è favorita.
:::
