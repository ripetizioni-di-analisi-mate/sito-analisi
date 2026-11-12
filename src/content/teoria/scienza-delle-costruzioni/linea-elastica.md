---
titolo: "Linea elastica e spostamenti delle travi"
sommario: "Come ricavare deformata, rotazioni e frecce dai diagrammi di momento, anche in presenza di carichi a tratti e rigidezza variabile."
---

## Geometria della deformata

:::definizione{#modello-eulero-bernoulli titolo="Trave di Eulero–Bernoulli"}
Una trave inizialmente rettilinea si flette quando le fibre longitudinali da un lato si allungano e quelle dal lato opposto si accorciano. Nel modello di **Eulero–Bernoulli** le sezioni piane rimangono piane e ortogonali all’asse deformato. Questa ipotesi descrive la risposta flessionale di travi snelle nel regime di piccole deformazioni e permette di ricavare l’angolo di ogni sezione dalla forma assunta dall’asse. Se una trave è tozza o se il taglio contribuisce in misura rilevante allo spostamento, la rotazione della sezione può differire da quella della tangente alla deformata.

Si orienta l’asse $x$ verso destra e si indica con $v(x)$ lo spostamento trasversale, positivo verso il basso. Il riferimento globale ha comunque $y$ verso l’alto, quindi l’ordinata della linea elastica è $y(x)=-v(x)$. Per piccole pendenze, la rotazione della sezione, positiva in senso antiorario, è $\varphi(x)=-v'(x)$. Per esempio, se $v$ cresce avanzando verso destra, la tangente scende e $\varphi$ è negativa. Le pendenze sono adimensionali e i piccoli angoli corrispondenti si esprimono in radianti.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" tratteggi="0,0 1,0 2,-0.1 3,-0.3 4,-0.62 5,-1.02 6,-1.48" frecce="4,0,4,-0.62,v;3.3,-0.38,4.75,-0.87,tangente" titolo="Spostamento positivo verso il basso e tangente inclinata in senso orario"}

La **freccia** è lo spostamento verticale di una sezione identificata. Si specifica perciò la sezione quando si confrontano valori in mezzeria, sotto il carico o in punta. La posizione della freccia massima dipende dai vincoli e dal carico. In una trave con carico asimmetrico, la sezione più bassa può trovarsi lontano dalla mezzeria e dal punto in cui è applicato il carico.
:::

:::esempio{titolo="Dalla misura di quota alla rotazione"}
Due sezioni distanti $0{,}5\,\mathrm m$ hanno frecce di $2\,\mathrm{mm}$ e $3\,\mathrm{mm}$. Fra le due sezioni la pendenza media della funzione $v$ vale $\dfrac{0{,}001}{0{,}5}=0{,}002$. La rotazione media associata è circa $-0{,}002\,\mathrm{rad}$. Si ottiene una stima locale della rotazione quando la distanza fra le sezioni è piccola rispetto alla scala sulla quale varia la curvatura. Nel modello si assume che il punto di misura segua l’asse della trave. Uno spostamento letto vicino a un collegamento può includere il cedimento del supporto o la deformazione locale della connessione. In quel caso va distinto dalla freccia dovuta alla sola flessione dell’asta.
:::

:::esempio{titolo="Dalla trave reale alla linea elastica"}
L’asse di ciascuna trave longitudinale è la linea di riferimento del modello. Con la linea elastica si cerca lo spostamento verticale di quell’asse. Per ricavare la deformata occorrono la distribuzione del momento e le condizioni cinematiche ai vincoli.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/travi-da-sotto.webp" alt="Vista laterale degli elementi metallici sotto l’impalcato di un ponte" width="1280" height="720" loading="lazy" decoding="async"><figcaption>Dalla trave reale alla linea elastica. Foto ridimensionata di <a href="https://commons.wikimedia.org/wiki/File:Steel_Bridge_Inspection_-_Going_underneath_the_bridge_to_take_a_look.jpg">Oregon Department of Transportation</a>, <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.</figcaption></figure>
:::

## Curvatura, momento e rigidezza

::::teorema{#linea-elastica titolo="Equazione della linea elastica"}
Siano $E$ il modulo di Young e $I$ il momento d’inerzia della sezione rispetto all’asse di flessione. Per una trave di Eulero–Bernoulli elastica lineare, con piccole pendenze e flessione retta, vale
$$
EI(x)v''(x)=-M(x).
$$
Il prodotto $EI$ è la **rigidezza flessionale**. A parità di momento, una sezione con rigidezza maggiore ha una curvatura di modulo minore. Il momento positivo tende le fibre inferiori e comprime le superiori. In questa convenzione la deformata ha curvatura geometrica antioraria e $v''<0$.

:::dimostrazione
Si considera una fibra a quota $y$ rispetto all’asse neutro. Se la curvatura geometrica $\kappa$ è positiva, la fibra con $y>0$ si accorcia. Dalla cinematica delle sezioni si ha quindi $\varepsilon_x=-y\kappa$. Applicando la legge di Hooke si ottiene $\sigma_x=-Ey\kappa$. Con la convenzione adottata il momento positivo è $-\int_A y\sigma_x\,\mathrm dA$, perciò $M=E\kappa\int_A y^2\,\mathrm dA=EI\kappa$. Dato che l’ordinata della deformata è $-v$, al primo ordine la sua curvatura geometrica è $-v''$. Segue $EI v''=-M$.
:::

::struttura{nodi="A,0,0;B,6,0" aste="A-B" tratteggi="0,0 1,-0.37 2,-0.60 3,-0.68 4,-0.60 5,-0.37 6,0" etichette="3,-1.12,M positivo;3,0.35,asse iniziale" titolo="Con momento positivo la deformata fisica presenta concavità verso l’alto"}

Nelle espressioni dimensionali $M$ si misura in $\mathrm{kN\,m}$, mentre $EI$ si misura in $\mathrm{kN\,m^2}$. Il rapporto ha dimensione inversa di una lunghezza. Integrarlo una volta dà una variazione di pendenza, integrarlo due volte dà uno spostamento.
::::

:::osservazione{titolo="Momento nullo e deformata rettilinea"}
Se il momento è identicamente nullo su un intervallo e $EI>0$, allora $v''=0$ su quell’intervallo. La deformata è un segmento diritto, che può essere inclinato oppure traslato. Per esempio, nella porzione libera di una mensola oltre l’ultimo carico concentrato, la freccia continua a variare se la pendenza nel punto di raccordo è diversa da zero. Se $M$ si annulla in un punto isolato, in quel punto si annulla la curvatura. Si ha un flesso quando il segno di $M$ cambia passando attraverso il punto.
:::

:::esempio{titolo="Leggere il segno della curvatura senza integrare"}
Una trave appoggiata è soggetta a una forza verticale verso il basso a metà luce. Il momento è positivo in ogni sezione interna, quindi la freccia è concava verso il basso quando si disegna $v$ come funzione matematica. La quota fisica è $-v$, perciò il disegno della trave ha concavità rivolta verso l’alto. In una mensola con forza verso il basso in punta, il momento interno è invece negativo e $v''$ risulta positiva. La pendenza parte da zero all’incastro e cresce lungo la mensola. Queste deduzioni si ottengono dal diagramma del momento e dalle condizioni ai vincoli prima di calcolare le costanti di integrazione.
:::

## Condizioni ai vincoli e alle estremità

:::definizione{#condizioni-vincolari titolo="Condizioni al contorno"}
Le condizioni ai vincoli fissano gli spostamenti ammessi. Un **incastro fisso** blocca spostamento e rotazione, quindi impone $v=0$ e $v'=0$. Un appoggio semplice fisso blocca lo spostamento verticale e consente la rotazione. Se è posto all’estremità della trave e manca una coppia applicata in quella sezione, vale anche $M=0$. Se la trave passa sopra un appoggio intermedio senza interruzione, la continuità può invece trasmettere momento. In un estremo libero privo di forze e coppie concentrate valgono $M=0$ e $T=0$. Se sono presenti azioni applicate all’estremo, i valori di $M$ e $T$ immediatamente all’interno si ricavano dall’equilibrio del tratto terminale.

::struttura{nodi="A,0,0;B,4,0" aste="A-B" vincoli="A,incastro,180" forze="B,0,-0.87,P" quote="A,B,L" titolo="L’incastro fissa spostamento e rotazione, la forza di punta fissa il taglio terminale"}

Quando si parte da $M(x)$ noto, l’equazione $EI v''=-M$ richiede due costanti per tratto. Si determinano imponendo condizioni cinematiche e di raccordo. Se invece si parte direttamente dal carico, si usa un’equazione di quarto ordine, quindi occorrono quattro condizioni al contorno complessive su una trave con un solo tratto. In quel caso anche i valori imposti di $M$ e $T$ entrano nella determinazione delle costanti. Per una mensola senza azioni concentrate in punta si usano due condizioni in $A$ e due in $B$. Per una trave appoggiata a entrambe le estremità, con estremità prive di coppie, si impongono $v=0$ e $M=0$ in ciascun appoggio.
:::

:::esempio{titolo="Appoggio con quota prescritta"}
Se un appoggio cede di $\delta_B>0$ verso il basso, la condizione diventa $v(B)=\delta_B$. Per una trave semplicemente appoggiata scarica, i vincoli possono essere soddisfatti con un campo lineare $v(x)=\dfrac{\delta_B x}{L}$ se l’appoggio di sinistra rimane fermo. La seconda derivata è nulla, quindi la trave si sposta senza sviluppare un momento flettente. In una trave iperstatica le condizioni cinematiche possono invece impedire uno spostamento rigido. In quel caso anche il solo cedimento può generare reazioni e azioni interne.
:::

:::attenzione{titolo="Appoggio intermedio e cerniera sono condizioni diverse"}
Una trave continua che passa sopra un rullo intermedio può avere una freccia nulla in quella sezione e un momento diverso da zero. Il rullo impedisce la traslazione verticale del punto, mentre il materiale continuo trasmette momento da un tratto al successivo. Una cerniera interna, al contrario, può avere una freccia diversa da zero se manca un appoggio esterno nel punto. I due tronchi hanno allora la stessa quota nella cerniera e pendenze che possono differire. Nei problemi con più campate, è il tipo di collegamento fra i tronchi a stabilire se si impone l’annullamento del momento oppure la continuità della pendenza.
:::

## Continuità, cerniere e salti

:::osservazione{#continuita titolo="Raccordo fra due tratti"}
Quando cambia la legge del momento o della rigidezza, si determina una funzione $v_1$ per il tratto a sinistra e una funzione $v_2$ per quello a destra. Se la sezione di passaggio $x=a$ appartiene alla stessa trave continua, lo spostamento e la rotazione sono unici. Si impongono quindi insieme $v_1(a)=v_2(a)$ e $v'_1(a)=v'_2(a)$. La curvatura può avere un salto. In particolare, se cambia $EI$ mantenendo un momento non nullo e continuo, cambia il rapporto $-\dfrac{M}{EI}$. L’equazione di continuità riguarda la tangente, mentre il cambio di curvatura riguarda la rapidità con cui la tangente ruota.

::struttura{nodi="A,0,0;C,3,0;B,6,0" aste="A-C;C-B" vincoli="A,incastro,180" etichette="1.35,0.35,EI_1;4.6,0.35,EI_2" forze="B,0,-0.9,P" quote="A,C,a;C,B,b" titolo="Un cambio di sezione mantiene la continuità di spostamento e pendenza"}

In una **cerniera interna** i due tronchi condividono lo spostamento del punto comune. Il momento a ciascun lato della cerniera vale zero se non si applicano coppie ai tronchi in quel punto. Le due pendenze possono essere diverse, perché il vincolo permette una rotazione relativa. Se si imponesse la stessa pendenza si aggiungerebbe una condizione propria di una connessione rigida. Il conteggio delle condizioni va fatto sullo schema effettivo, perché la cerniera modifica il numero di spostamenti indipendenti.
:::

::::teorema{#salti titolo="Salti dovuti a una forza o a una coppia"}
Si indichi con $[f]_a=f(a^+)-f(a^-)$ il salto da sinistra a destra. In una trave continua, una forza concentrata $P$ verso il basso produce $[T]_a=-P$. Una coppia concentrata $\mathcal M$ antioraria produce $[M]_a=-\mathcal M$. Se $EI$ è costante attraverso la sezione, ne seguono
$$
[EI v''']_a=P,\qquad [EI v'']_a=\mathcal M.
$$
La forza concentrata produce quindi un salto nella derivata della curvatura quando $EI$ è costante. La coppia produce invece un salto della curvatura. Entrambe rispettano la continuità di $v$ e $v'$ quando la trave è integra.

::struttura{nodi="A,0,0;C,2,0;B,5,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="C,0,-1.03,P" coppie="C,1,M_c" quote="A,C,a;C,B,b" titolo="Forza e coppia concentrate in una sezione interna"}

:::dimostrazione
Si isola un tratto attorno alla sezione e si scrive l’equilibrio verticale. Mandando a zero la sua lunghezza, la risultante di un carico distribuito limitato tende a zero. Restano la forza concentrata e le azioni di taglio alle due facce. Con il segno positivo adottato per $T$ risulta $T(a^-)-T(a^+)-P=0$. L’equilibrio alla rotazione contiene i due momenti, la coppia applicata e termini proporzionali al braccio delle forze. Nel limite i bracci tendono a zero e si ottiene $M(a^+)-M(a^-)+\mathcal M=0$. Usando $EI v''=-M$ e $(EI v'')'=-T$ si ricavano le due formule per la deformata.
:::
::::

:::esempio{titolo="Che cosa resta continuo quando cambia il carico"}
Si consideri un carico uniforme applicato solo sulla parte sinistra della trave, fino alla sezione $x=a$. L’intensità $q$ ha un salto in $a$. Su un intervallo di ampiezza arbitrariamente piccola attorno ad $a$, la risultante del carico è proporzionale all’ampiezza. Nel limite si annulla, quindi non si genera un salto del taglio. Anche il momento è continuo perché manca una coppia concentrata. A rigidezza costante si raccordano dunque le prime tre derivate di $v$, oltre a $v$ stessa. È la derivata quarta a cambiare valore. Se nello stesso punto agisce anche una forza concentrata, il contributo di quella forza sopravvive nel limite e la terza derivata presenta il salto corrispondente.
:::

## Dall’intensità del carico alla deformata

::::teorema{#carichi-distribuiti titolo="Equazione del quarto ordine"}
Sui tratti privi di azioni concentrate, l’equilibrio fornisce $M'=T$ e $T'=-q$, con $q>0$ verso il basso. Sostituendo $M=-EI v''$ si ottiene
$$
\bigl(EI(x)v''(x)\bigr)''=q(x).
$$
Per una rigidezza costante l’equazione diventa $EI\,v^{(4)}=q$. Se la rigidezza varia in modo continuo, le derivate agiscono sul prodotto. Nei problemi in cui $M$ si ricava direttamente dall’equilibrio, è spesso più breve partire da $v''=-\dfrac{M}{EI}$ perché si riduce il numero di integrazioni.

::struttura{nodi="A,0,0;B,5,0" aste="A-B" vincoli="A,incastro,180" carichi="A,B,0,1.06,q_B" quote="A,B,L" titolo="Carico triangolare crescente verso la punta della mensola"}

:::dimostrazione
La derivata di $-EI v''$ coincide con il taglio. Derivando ancora si ottiene $-(EI v'')''=T'$. Per la seconda equazione di equilibrio $T'=-q$, quindi i due segni meno si cancellano. Una funzione candidata soddisfa il problema se verifica l’equazione nel tratto, i vincoli e le eventuali condizioni di passaggio.
:::
::::

:::esempio{titolo="Carico triangolare e ordine del polinomio"}
Per una mensola a rigidezza costante caricata da $q(x)=kx$ si ha $v^{(4)}(x)=\dfrac{kx}{EI}$. Una primitiva di ordine quattro ha termine di grado cinque pari a $\dfrac{kx^5}{120EI}$. Le quattro costanti si ricavano da $v(0)=v'(0)=0$ e, in assenza di azioni concentrate in punta, $v''(L)=v'''(L)=0$. Imponendo per prima la condizione sul taglio si ottiene $EI v'''(x)=\dfrac{kx^2}{2}-\dfrac{kL^2}{2}$. La condizione sul momento dà poi $EI v''(x)=\dfrac{kx^3}{6}-\dfrac{kL^2x}{2}+\dfrac{kL^3}{3}$. Le due integrazioni con condizioni in $A$ conducono a $v(L)=\dfrac{11kL^5}{120EI}$. Poiché l’intensità in punta è $q_B=kL$, la freccia è proporzionale a $\dfrac{q_BL^4}{EI}$.
:::

:::osservazione{titolo="Costanti con dimensioni diverse"}
Se si scrive $EI\,v(x)$ come polinomio in $x$, i coefficienti hanno unità diverse secondo la potenza che moltiplicano. Per esempio, il termine costante ha unità $\mathrm{kN\,m^3}$, mentre il coefficiente di $x$ ha unità $\mathrm{kN\,m^2}$. Lo stesso vale per un sistema di equazioni costruito con le condizioni al contorno. Un’equazione imposta alla freccia confronta termini della dimensione di uno spostamento. Un’equazione imposta alla pendenza confronta grandezze adimensionali. Prima di sostituire i numeri, si sceglie se dividere per $EI$ in tutte le formule oppure mantenerlo a sinistra. Questa scelta permette di verificare che ogni termine aggiunto alla primitiva abbia la dimensione corretta.
:::

## Quattro configurazioni ricorrenti

::::teorema{#frecce-notevoli titolo="Frecce per travi a rigidezza costante"}
Le seguenti frecce riguardano travi prismatiche di luce $L$, rigidezza $EI$ costante e carichi verso il basso. I valori positivi indicano spostamento verso il basso.

- Mensola con forza $P$ in punta. In punta $v=\dfrac{PL^3}{3EI}$ e $v'=\dfrac{PL^2}{2EI}$.
- Mensola con carico uniforme $q$ su tutta la luce. In punta $v=\dfrac{qL^4}{8EI}$ e $v'=\dfrac{qL^3}{6EI}$.
- Trave semplicemente appoggiata con forza $P$ in mezzeria. In mezzeria $v=\dfrac{PL^3}{48EI}$.
- Trave semplicemente appoggiata con carico uniforme $q$ su tutta la luce. In mezzeria $v=\dfrac{5qL^4}{384EI}$.

::struttura{nodi="A,0,0;C,2.5,0;B,5,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="C,0,-0.92,P" quote="A,C,metà luce;C,B,metà luce" titolo="La forza centrale e i vincoli producono una deformata simmetrica"}

:::dimostrazione
Per la mensola con forza in punta si taglia a distanza $x$ dall’incastro. L’equilibrio del tratto terminale fornisce $M=-P(L-x)$. Integrando la curvatura con pendenza e spostamento nulli all’incastro si ottiene
$$
\begin{aligned}
EI\,v'(x)&=P\left(Lx-\frac{x^2}{2}\right),\\[6pt]
EI\,v(x)&=P\left(\frac{Lx^2}{2}-\frac{x^3}{6}\right).
\end{aligned}
$$
Sostituendo $x=L$ si ricavano i due valori indicati. Per la trave appoggiata con forza centrale, nel semitratto sinistro $M=\dfrac{Px}{2}$. Si integra imponendo $v(0)=0$ e $v'\left(\dfrac L2\right)=0$. Per il carico uniforme si usa lo stesso procedimento sostituendo la funzione momento quadratica. Nella mensola è $M=-\dfrac{q(L-x)^2}{2}$, mentre nella trave appoggiata è $M=\dfrac{qx(L-x)}{2}$.
:::
::::

:::osservazione{titolo="Effetto della luce e unità"}
Raddoppiare la luce a parità di forza e di rigidezza moltiplica per otto le frecce dovute a una forza concentrata nei due schemi elencati. Se rimane costante l’intensità uniforme $q$, il fattore diventa sedici. La differenza dipende dal fatto che nel secondo caso aumenta anche la risultante del carico. Con forze in $\mathrm{kN}$, lunghezze in $\mathrm m$ e rigidezza in $\mathrm{kN\,m^2}$, il risultato è in metri. Per esprimere lo spostamento in millimetri si moltiplica per mille. La conversione può essere fatta al termine, così le potenze della luce restano coerenti con le unità di $EI$.
:::

:::esempio{titolo="Confronto a parità di risultante del carico"}
Per una trave semplicemente appoggiata, una forza centrale e un carico uniforme possono avere la stessa risultante $P$. In tal caso $q=\dfrac PL$. Il rapporto fra la freccia centrale del carico uniforme e quella della forza concentrata è $\dfrac{5\cdot48}{384}=\dfrac58$. La differenza si spiega con il diagramma del momento. Nel caso distribuito la risultante ha la stessa posizione globale, ma una sezione interna separa soltanto una parte di quel carico. Quella sezione ha quindi un momento diverso da quello prodotto da una forza puntuale. Il confronto mostra perché la sostituzione di un carico con la sua risultante è adatta al calcolo delle reazioni, mentre la freccia richiede il diagramma di momento del carico effettivo.
:::

## Rigidezza flessionale variabile

::::teorema{#rigidezza-variabile titolo="Integrazione con rigidezza variabile"}
Se $EI(x)>0$ e il momento è noto, la curvatura al primo ordine è $-\dfrac{M(x)}{EI(x)}$. Integrando a partire da una sezione $a$ con spostamento e pendenza noti si ottiene
$$
\begin{aligned}
v'(x)&=v'(a)-\int_a^x\frac{M(s)}{EI(s)}\,\mathrm ds,\\[6pt]
v(x)&=v(a)+(x-a)v'(a)-\int_a^x(x-s)\frac{M(s)}{EI(s)}\,\mathrm ds.
\end{aligned}
$$
La variabile $s$ indica la sezione in cui si valuta la curvatura. Il fattore $x-s$ misura la distanza fino al punto in cui si cerca la freccia. In una mensola la stessa variazione locale di pendenza ha un effetto maggiore sulla freccia di punta se si verifica più vicino all’incastro.

::struttura{nodi="A,0,0;C,2.2,0;B,5.4,0" poligoni="0,-0.17 2.2,-0.17 2.2,0.17 0,0.17;2.2,-0.09 5.4,-0.09 5.4,0.09 2.2,0.09" vincoli="A,incastro,180" forze="B,0,-0.9,P" etichette="1.0,0.35,EI_1;3.45,0.35,EI_2" quote="A,C,a;C,B,b" titolo="Mensola con due valori di rigidezza e forza in punta"}

:::dimostrazione
La prima uguaglianza è l’integrale di $v''=-\dfrac{M}{EI}$ con valore iniziale $v'(a)$. Derivando la seconda si ritrova la prima perché il contributo del limite superiore contiene il fattore $x-x=0$. Sostituendo $x=a$ si ritrova $v(a)$. Questa verifica vale anche se la rigidezza ha un numero finito di cambi a gradino e le integrazioni sono spezzate nei tratti corrispondenti.
:::
::::

:::esempio{titolo="Due tratti contribuiscono in misura diversa"}
Per una mensola lunga $4\,\mathrm m$ con $P=12\,\mathrm{kN}$ in punta, la freccia vale $P\int_0^4\dfrac{(4-s)^2}{EI(s)}\,\mathrm ds$. Con $EI_1=12\,000\,\mathrm{kN\,m^2}$ fra $0$ e $2\,\mathrm m$ ed $EI_2=6\,000\,\mathrm{kN\,m^2}$ fra $2$ e $4\,\mathrm m$, gli integrali dei soli numeratori valgono rispettivamente $\dfrac{56}3$ e $\dfrac83$ in $\mathrm{m^3}$. Il tratto più rigido fornisce perciò il contributo maggiore, perché è vicino all’incastro. Sommando i due contributi si ottengono $24\,\mathrm{mm}$ verso il basso.
:::

:::esempio{titolo="Spostare il tratto rigido verso l’incastro"}
Due mensole hanno la stessa luce, la stessa forza in punta e due tratti della stessa lunghezza. Una ha il tratto più rigido vicino all’incastro, l’altra vicino alla punta. Il diagramma di momento è uguale nei due casi, perché gli schemi sono isostatici. Nell’integrale della freccia di punta il peso è proporzionale a $(L-s)^2$ e diminuisce procedendo verso la punta. Collocando il valore maggiore di $EI$ dove quel peso è maggiore, si riduce maggiormente l’integrale. La conclusione riguarda il carico in punta considerato. Con altri schemi o altre posizioni di misura cambia il modo in cui una variazione locale di rigidezza influenza lo spostamento.
:::

## Sovrapposizione, simmetria e posizione del massimo

:::esempio{#sovrapposizione titolo="Sovrapposizione con forza centrale e carico uniforme"}
Se la trave rimane nel campo elastico lineare, la geometria di riferimento, la rigidezza e i vincoli restano fissati. Le equazioni per le frecce e le condizioni omogenee si possono sommare. Per una trave appoggiata con forza centrale $P$ e carico uniforme $q$ verso il basso si ottiene quindi
$$
v\left(\frac L2\right)=\frac{PL^3}{48EI}+\frac{5qL^4}{384EI}.
$$
La geometria, la rigidezza, i vincoli e le azioni sono simmetrici, quindi $v(x)=v(L-x)$. Derivando in mezzeria si ha $v'\left(\dfrac L2\right)=-v'\left(\dfrac L2\right)$ e la pendenza è nulla. In una trave con carico centrale ma rigidezze diverse fra i due semitratti, l’argomento di simmetria richiede un controllo aggiuntivo. Le reazioni possono essere ancora uguali, perché dipendono dall’equilibrio, mentre la deformata può perdere la simmetria.

::struttura{nodi="A,0,0;C,3,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" carichi="A,B,0.58,0.58,q" forze="C,0,-1.12,P" quote="A,C,metà luce;C,B,metà luce" titolo="Due azioni simmetriche sulla stessa trave appoggiata"}

Per un cedimento prescritto si può sommare la soluzione dei carichi con vincoli fissi alla soluzione del solo cedimento. La prima soddisfa spostamenti vincolari nulli, mentre la seconda assume lo spostamento imposto. La somma rispetta così il dato reale. Le condizioni al contorno devono essere sommate insieme alle azioni. Se si cambia la posizione di un appoggio fra due schemi, la somma delle soluzioni non corrisponde in generale a un problema con un unico schema.
:::

:::osservazione{titolo="Come individuare la sezione più bassa"}
Su ogni intervallo liscio si risolve $v'(x)=0$ per trovare i candidati interni. Poi si confrontano gli spostamenti ottenuti con quelli alle estremità e ai raccordi, comprese eventuali cerniere. Poiché $v$ è positiva verso il basso, il valore maggiore corrisponde alla sezione più bassa. Se si cerca invece lo spostamento maggiore in modulo, si confrontano anche le escursioni verso l’alto. In una trave continua con momento positivo lungo tutto l’interno, $v''<0$. La pendenza decresce e il suo eventuale zero interno è unico. Una coppia applicata o una variazione del segno del momento può cambiare questo comportamento, quindi la ricerca degli estremi va fatta sulla funzione ottenuta dai carichi effettivi.

::grafico{curve="t,t*(4-t)*(16+4*t-t^2)/96,0,4" xmin=-0.4 xmax=4.4 ymin=-0.15 ymax=1.05 nomi="x,v" punti="0,0,pieno,A;2,0.833333,pieno,C;4,0,pieno,B" legenda="\text{deformata simmetrica in scala}" titolo="Una deformata con freccia nulla agli appoggi e tangente orizzontale in mezzeria"}
:::
