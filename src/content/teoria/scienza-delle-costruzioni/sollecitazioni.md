---
titolo: Sforzo normale, taglio e momento flettente
sommario: L’equilibrio delle sezioni permette di ricavare le azioni interne e di riconoscerne pendenze, salti, valori estremi e cambi di segno nelle travi e nei telai.
---

## Azioni interne e versi positivi

:::definizione{#convenzione-ntm titolo="Convenzione per una trave orizzontale"}
Per studiare quanto una trave è sollecitata in un punto si introduce una sezione immaginaria. La parte rimossa esercitava sulla parte rimasta un insieme di forze sulla superficie della sezione. L’equilibrio del tratto isolato permette di determinare la risultante di tali forze e il loro momento rispetto al punto in cui l’asse della trave attraversa la sezione.

Si considera una trave orizzontale con asse $x$ verso destra e asse $y$ verso l’alto. Per la faccia di taglio del tratto sinistro si adottano i versi seguenti.

- Lo **sforzo normale** $N$ è positivo verso destra. Sulle due parti il verso positivo allontana le facce, quindi $N>0$ indica trazione.
- Il **taglio** $T$ è positivo verso il basso. Sulle facce opposte di un concio i due versi positivi tendono a farlo ruotare in senso orario.
- Il **momento flettente** $M$ è positivo in senso antiorario. Nella flessione retta della trave orizzontale $M>0$ tende le fibre inferiori.

Sul tratto destro si invertono tutte le frecce. La stessa azione interna si legge dunque con lo stesso segno qualunque sia il tratto isolato, purché si usino i versi propri della faccia scelta. Le forze si esprimono in kilonewton e il momento in kilonewton metro.

::struttura{nodi="A,0,0;B,3,0;C,4,0;D,7,0" aste="A-B;C-D" nomi=0 reazioni="B,0.8,0,N;B,0,-0.8,T;C,-0.8,0,N;C,0,0.8,T" coppie="B,1,M;C,-1,M" titolo="Versi positivi sui due lati di una sezione, separati nel disegno"}
:::

:::esempio{titolo="Trazione e compressione sulla faccia destra"}
Si consideri un’asta rettilinea soggetta a due forze opposte lungo il proprio asse. Se a destra agisce una forza di $8\,\mathrm{kN}$ verso destra, il tratto destro richiede una forza di $8\,\mathrm{kN}$ verso sinistra sulla faccia di taglio. Quel verso è positivo sulla faccia sinistra del tratto destro, quindi $N=8\,\mathrm{kN}$. Se la forza esterna a destra punta invece verso sinistra, sulla faccia di taglio occorre una forza verso destra e si ottiene $N=-8\,\mathrm{kN}$. Nei due casi si può ottenere lo stesso valore isolando il tratto sinistro. Per effetto dell’allineamento delle forze con l’asse, il taglio e il momento flettente valgono zero.
:::

:::esempio{titolo="Elementi longitudinali sotto un impalcato"}
La vista di lato mostra gli elementi metallici sotto il piano viabile. Nel modello strutturale si distinguono gli elementi longitudinali, lungo il ponte, da quelli trasversali che li collegano. Per costruire i diagrammi di una singola trave si isolano l’elemento, i vincoli e le azioni trasferite dagli elementi adiacenti. La sezione di taglio appartiene allo schema che si ottiene da questa idealizzazione.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/travi-da-sotto.webp" alt="Vista laterale di un ponte metallico con elementi strutturali sotto il piano viabile" width="1280" height="720" loading="lazy" decoding="async"><figcaption>Elementi longitudinali sotto un impalcato. Foto ridimensionata di <a href="https://commons.wikimedia.org/wiki/File:Steel_Bridge_Inspection_-_Going_underneath_the_bridge_to_take_a_look.jpg">Oregon Department of Transportation</a>, <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.</figcaption></figure>
:::

## Metodo della sezione

::::teorema{#metodo-sezione titolo="Equilibrio di una parte di trave"}
Si supponga nota la distribuzione delle reazioni su una struttura piana in equilibrio. Si tagli la trave in una sezione interna e si isoli il tratto a sinistra. Si indichino con $F_{x,\mathrm{sx}}$ e $F_{y,\mathrm{sx}}$ le risultanti esterne, positive lungo gli assi, e con $M_{\mathrm{sx}}$ la somma dei momenti esterni rispetto alla sezione, positiva in senso antiorario. Allora
$$
N=-F_{x,\mathrm{sx}},
\qquad
T=F_{y,\mathrm{sx}},
\qquad
M=-M_{\mathrm{sx}}.
$$
Sul tratto destro i versi di taglio sono opposti, quindi, con le corrispondenti somme esterne, si trova $N=F_{x,\mathrm{dx}}$, $T=-F_{y,\mathrm{dx}}$ e $M=M_{\mathrm{dx}}$. Il polo nella sezione elimina dai momenti le due forze incognite $N$ e $T$. Il momento della coppia di taglio, invece, compare direttamente nel bilancio.

:::dimostrazione
Il tratto isolato deve restare in equilibrio dopo la sostituzione della parte rimossa con le tre azioni di sezione. Sul tratto sinistro la risultante assiale vale $F_{x,\mathrm{sx}}+N$ e quella verticale vale $F_{y,\mathrm{sx}}-T$. Il momento risultante rispetto al taglio vale $M_{\mathrm{sx}}+M$. Le tre somme sono nulle, quindi si ricavano le espressioni date. Inoltre, poiché l’intera trave è in equilibrio, le somme esterne dei due tratti sono opposte se si usa per entrambe lo stesso polo. Il calcolo da destra restituisce perciò gli stessi tre valori.
:::
::::

:::esempio{titolo="Taglio da destra in una mensola"}
Una mensola lunga $5\,\mathrm{m}$ porta in punta una forza $P=8\,\mathrm{kN}$ verso il basso. Si taglia la trave a $3\,\mathrm{m}$ dall’incastro e si isola il tratto verso la punta. In quel tratto l’unica forza esterna è quella in punta, quindi $F_{y,\mathrm{dx}}=-8\,\mathrm{kN}$ e $T=8\,\mathrm{kN}$. Il suo braccio rispetto alla sezione misura $2\,\mathrm{m}$, perciò il momento esterno è orario e vale $-16\,\mathrm{kN\,m}$. Sulla faccia del tratto destro il momento positivo è orario, quindi l’equilibrio richiede un valore negativo di $M$. Si ottiene $M=-16\,\mathrm{kN\,m}$.

::struttura{nodi="A,0,0;S,3,0;B,5,0" aste="A-B" vincoli="A,incastro,180" forze="B,0,-0.9,P" quote="A,S,3 m;S,B,2 m" titolo="Mensola con sezione di taglio S e forza verticale in punta"}
:::

:::osservazione{titolo="Scelta del tratto isolato"}
Se il taglio cade vicino alla punta libera, il tratto destro può contenere poche azioni note e rendere superfluo il calcolo delle reazioni. Se invece a sinistra agisce solo una reazione nota, il tratto sinistro fornisce la formula più corta. Per applicare il metodo a un intervallo si lascia l’ascissa del taglio come variabile. Si cambia espressione ogni volta che il tratto isolato acquista una forza o una coppia concentrata, oppure quando il taglio entra in una zona in cui cambia la legge del carico.
:::

## Equazioni locali e aree con segno

::::teorema{#relazioni-diagrammi titolo="Relazioni tra carico, taglio e momento"}
Sia $q(x)$ l’intensità del carico distribuito trasversale, positiva verso il basso. Sia $p(x)$ il carico assiale per unità di lunghezza, positivo verso destra. In un intervallo in cui questi carichi sono continui e le azioni concentrate sono assenti valgono le relazioni
$$
N'(x)=-p(x),
\qquad
T'(x)=-q(x),
\qquad
M'(x)=T(x).
$$
La pendenza del diagramma di $M$ si legge quindi dai valori di $T$ nello stesso intervallo. Se $q$ è uniforme e diverso da zero, $T$ varia linearmente e $M$ è un polinomio di secondo grado.

:::dimostrazione
Si confrontano due sezioni distanti $h>0$. Sul tratto sinistro, spostando la sezione da $x$ a $x+h$, si include la forza assiale distribuita di intensità $p$ e quella trasversale di intensità $q$. Le differenze delle azioni interne soddisfano
$$
\begin{aligned}
N(x+h)-N(x)&=-\int_x^{x+h}p(u)\,\mathrm du,\\[6pt]
T(x+h)-T(x)&=-\int_x^{x+h}q(u)\,\mathrm du.
\end{aligned}
$$
Nel bilancio dei momenti, le forze verticali già presenti sul tratto iniziale acquistano tutte un braccio supplementare $h$. Il loro contributo alla differenza di $M$ vale $hT(x)$. Il nuovo carico distribuito ha invece braccio $x+h-u$ nella posizione $u$, quindi
$$
M(x+h)-M(x)=hT(x)-\int_x^{x+h}(x+h-u)q(u)\,\mathrm du.
$$
Il secondo termine è dell’ordine di $h^2$, perché $q$ è limitato vicino a $x$, l’intervallo ha lunghezza $h$ e il braccio è al più $h$. Si dividono le tre differenze per $h$ e si passa al limite. Le prime due medie tendono ai valori delle rispettive intensità, mentre nel terzo bilancio rimane $T(x)$.
:::
::::

:::osservazione{#aree-ntm titolo="Variazioni sui tratti regolari"}
Fra due sezioni di ascisse $a$ e $b$ collegate da un tratto regolare, il taglio varia dell’opposto dell’area con segno sotto $q$. Il momento varia dell’area con segno sotto $T$. Per esempio, se $T$ passa linearmente da $6\,\mathrm{kN}$ a $-2\,\mathrm{kN}$ su un tratto di $4\,\mathrm{m}$, la media algebrica è $2\,\mathrm{kN}$. La variazione del momento è perciò $8\,\mathrm{kN\,m}$, anche se su una parte dell’intervallo il momento diminuisce. La corrispondenza fra aree e variazioni offre un controllo dei valori al bordo di ogni campo.
:::

:::esempio{titolo="Forza risultante di un carico triangolare parziale"}
Su un tratto di $6\,\mathrm{m}$ l’intensità cresce linearmente da zero a $6\,\mathrm{kN/m}$. A una sezione interna di ascissa $x$ la sola parte a sinistra del taglio ha intensità massima pari a $x$ in kilonewton al metro. La sua risultante vale $\dfrac{x^2}{2}$ in kilonewton e agisce a $\dfrac{2x}{3}$ dall’inizio del carico. Il braccio rispetto alla sezione vale dunque $\dfrac{x}{3}$. Se $V_A$ è la reazione verticale nel punto di origine, si ottiene $T(x)=V_A-\dfrac{x^2}{2}$ e $M(x)=V_Ax-\dfrac{x^3}{6}$, con ascisse in metri e momento in kilonewton metro. Un carico lineare produce quindi un taglio quadratico e un momento cubico.

::struttura{nodi="A,0,0;S,3,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" carichi="A,B,0,1,6 kN/m" quote="A,S,3 m;S,B,3 m" titolo="Carico triangolare e sezione interna S"}
:::

## Salti e limiti laterali

::::teorema{#salti-diagrammi titolo="Salti dei diagrammi"}
Si consideri un punto interno di ascissa $a$ in cui agiscono una forza assiale $F_x$ positiva verso destra, una forza trasversale $P$ positiva verso il basso e una coppia $\mathcal M$ positiva in senso antiorario. La variazione da sinistra a destra di ciascuna azione è
$$
\begin{aligned}
N(a^+)-N(a^-)&=-F_x,\\[6pt]
T(a^+)-T(a^-)&=-P,\\[6pt]
M(a^+)-M(a^-)&=-\mathcal M.
\end{aligned}
$$
I simboli $a^-$ e $a^+$ indicano le sezioni appena prima e appena dopo il punto di applicazione. Una reazione concentrata verso l’alto entra nella seconda formula con $P<0$, quindi produce un salto positivo di $T$.

:::dimostrazione
Si isola un concio che contiene la sezione $a$ e si considerano i bilanci di forza. Sulla faccia sinistra del concio agiscono $-N(a^-)$ in direzione assiale e $T(a^-)$ in direzione trasversale positiva. Sulla faccia destra agiscono $N(a^+)$ e $-T(a^+)$. Al tendere della lunghezza del concio a zero, i carichi distribuiti limitati hanno risultante nulla. Restano i contributi concentrati, dai quali si ottengono le prime due uguaglianze. Per i momenti rispetto alla sezione $a$, i bracci delle forze tendono a zero. I tre contributi rimanenti valgono $-M(a^-)$, $M(a^+)$ e $\mathcal M$. L’equilibrio rotazionale dà quindi l’ultima uguaglianza.
:::
::::

:::esempio{titolo="Forza e coppia nella stessa sezione"}
Si supponga che appena a sinistra di una sezione $T=7\,\mathrm{kN}$ e $M=15\,\mathrm{kN\,m}$. Se nella sezione sono applicate una forza di $10\,\mathrm{kN}$ verso il basso e una coppia antioraria di $6\,\mathrm{kN\,m}$, il taglio passa a $-3\,\mathrm{kN}$ e il momento passa a $9\,\mathrm{kN\,m}$. In assenza della coppia i due limiti di $M$ varrebbero entrambi $15\,\mathrm{kN\,m}$, benché le pendenze prima e dopo la sezione abbiano segni opposti. La forza introduce un angolo nel diagramma del momento, mentre la coppia introduce una discontinuità.
:::

## Lettura congiunta dei diagrammi

:::esempio{titolo="Trave appoggiata con una forza interna"}
Una trave lunga $5\,\mathrm{m}$ è appoggiata alle due estremità e porta una forza verso il basso di $10\,\mathrm{kN}$ a $2\,\mathrm{m}$ dall’appoggio sinistro. La somma dei momenti rispetto al primo appoggio dà $V_B=4\,\mathrm{kN}$, quindi il bilancio verticale dà $V_A=6\,\mathrm{kN}$. Si taglia prima della forza. Sul tratto sinistro agisce la sola reazione $V_A$, quindi $T=6\,\mathrm{kN}$ e $M(x)=6x$ con $x$ in metri e momento in kilonewton metro. Superata la forza, il taglio vale $-4\,\mathrm{kN}$ e il momento diventa $M(x)=6x-10(x-2)$.

::struttura{nodi="A,0,0;C,2,0;B,5,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="C,0,-0.95,10 kN" quote="A,C,2 m;C,B,3 m" titolo="Dati della trave appoggiata con forza concentrata in C"}

::struttura{nodi="A,0,0;C,2,0;B,5,0" aste="A-B" diagramma="0,0,2,0,6;2,0,5,0,-4" segni=1 titolo="Taglio in kilonewton con salto di meno 10 in C"}

::struttura{nodi="A,0,0;C,2,0;B,5,0" aste="A-B" diagramma="0,0,2,0,6*s;2,0,5,0,12-4*s" verso=-1 titolo="Momento in kilonewton metro, riportato dal lato delle fibre tese"}

Nel primo campo la variazione del momento vale $6\cdot2=12\,\mathrm{kN\,m}$. Nel secondo vale $-4\cdot3=-12\,\mathrm{kN\,m}$. Partendo da zero all’appoggio sinistro, il diagramma raggiunge $12\,\mathrm{kN\,m}$ sotto il carico e torna a zero all’appoggio destro. La somma delle aree con segno del taglio controlla l’accordo con il momento nullo ai due estremi. Sul disegno il tratto di momento positivo sta sotto l’asse della trave perché le fibre inferiori sono tese. La posizione sotto l’asse rappresenta la convenzione grafica del momento, perciò il segno si ricava dalla faccia tesa e dalla scala indicata in figura.
:::

:::osservazione{titolo="Ascissa globale e ascissa del campo"}
Una formula si può scrivere con l’ascissa globale $x$ o con una coordinata locale $s$ misurata dall’inizio del campo. Nel secondo tratto dell’esempio, il primo punto ha $x=2\,\mathrm{m}$ e $s=0$. Si ha dunque $M=12-4s$ se si usano metri e kilonewton metro. Il coefficiente di $s$ rimane uguale a $T$, mentre il termine costante dà il valore nel primo punto del campo. Scrivere le espressioni con l’origine locale è comodo quando si costruisce un diagramma a tratti a partire da valori di bordo già noti.
:::

## Estremi, cerniere e bordi

:::osservazione{#valori-ai-vincoli titolo="Condizioni ai bordi"}
In assenza di una coppia applicata, il momento è nullo all’estremità di una trave appoggiata o incernierata. Un estremo libero senza forze né coppie applicate ha invece tutte e tre le azioni nulle nel limite dall’interno. All’incastro il momento è in genere diverso da zero perché il vincolo può esercitare una coppia. Una cerniera interna ideale permette la rotazione relativa fra le parti e può trasmettere una forza con due componenti. In assenza di coppie applicate direttamente all’estremità di un membro che vi converge, quel membro ha momento nullo alla cerniera.
:::

:::attenzione{titolo="Appoggio intermedio su una trave continua"}
Una trave appoggiata in $A$ e $B$ prosegue oltre $B$ con uno sbalzo lungo $2\,\mathrm{m}$. Sulla punta $C$ agisce una forza $P=10\,\mathrm{kN}$ verso il basso. Tagliando appena a destra di $B$, il tratto verso la punta ha rispetto al taglio un momento esterno che tende a $-20\,\mathrm{kN\,m}$. Poiché in $B$ è applicata una reazione verticale senza coppia concentrata, il momento ha lo stesso limite da sinistra. Il carrello in $B$ consente la rotazione rispetto al terreno. La sezione della trave rimane continua e può quindi trasmettere momento attraverso l’appoggio.

::struttura{nodi="A,0,0;B,5,0;C,7,0" aste="A-C" vincoli="A,cerniera;B,carrello" forze="C,0,-1.25,P" quote="A,B,5 m;B,C,2 m" titolo="Trave continua con carrello intermedio e forza sulla punta dello sbalzo"}

::struttura{nodi="A,0,0;B,5,0;C,7,0" aste="A-C" diagramma="0,0,5,0,-4*s;5,0,7,0,-20+10*s" verso=-1 titolo="Momento in kilonewton metro. In B vale meno 20"}
:::

:::osservazione{#estremi-momento titolo="Ricerca delle sezioni più sollecitate"}
All’interno di un campo regolare, un estremo del momento può trovarsi dove $T=0$. Il segno del taglio prima e dopo la sezione distingue un massimo, un minimo e un punto stazionario senza estremo. Una forza concentrata può far passare $T$ da positivo a negativo senza che il taglio valga zero nella sezione. Se $M$ è continuo in quel punto, vi si ha ugualmente un massimo locale. Se in una sezione è applicata una coppia, si calcolano separatamente i due limiti del momento. Per cercare il valore massimo di $\lvert M\rvert$ si confrontano i moduli dei limiti ai bordi di ciascun campo e dei valori interni corrispondenti ai cambi di monotonia.
:::

## Assi locali nei telai

:::definizione{#assi-locali titolo="Riferimento di una singola asta"}
In un telaio le aste possono avere direzioni diverse. Su ciascuna asta si sceglie il verso della coordinata locale $s$ dal nodo iniziale al nodo finale. Il versore trasversale positivo si ottiene ruotando quello longitudinale di un quarto di giro in senso antiorario. Sul tratto che precede la sezione, $N$ positivo è diretto lungo $s$, $T$ positivo è opposto al versore trasversale e $M$ positivo è antiorario. Per una colonna orientata verso l’alto il versore trasversale positivo punta a sinistra. La stessa forza verticale che su una trave orizzontale contribuisce al taglio può contribuire allo sforzo normale nel montante.

::struttura{nodi="A,0,0;B,0,3;C,4,3" aste="A-B;B-C" vincoli="A,incastro" forze="C,0,-0.8,P" frecce="0,1,0,2,s_AB;0,1,-0.85,1,y_AB;2,3,3.1,3,s_BC;2,3,2,3.8,y_BC" quote="A,B,3 m;B,C,4 m,-1.25" titolo="Assi locali del montante e della trave in un telaio a mensola"}
:::

:::esempio{titolo="Forza verticale in un telaio a mensola"}
Il montante $AB$ è alto $3\,\mathrm{m}$ e la trave $BC$ è lunga $4\,\mathrm{m}$. In $C$ agisce una forza $P=12\,\mathrm{kN}$ verso il basso. Si orientano le aste da $A$ a $B$ e da $B$ a $C$ e si isola ogni volta il tratto a valle del taglio. Nella trave la forza è interamente trasversale, quindi $T=12\,\mathrm{kN}$ e $N=0$. Il suo braccio rispetto al taglio è $4-s$ con $s$ in metri misurata da $B$. Il momento vale dunque $M(s)=-12(4-s)$ in kilonewton metro. Nel montante la forza è interamente assiale e diretta contro il verso locale, quindi $N=-12\,\mathrm{kN}$ e $T=0$. La retta d’azione della forza resta a distanza orizzontale costante di $4\,\mathrm{m}$ da qualsiasi sezione del montante. Si ottiene perciò $M=-48\,\mathrm{kN\,m}$ lungo tutta l’asta.

::struttura{nodi="A,0,0;B,0,3;C,4,3" aste="A-B;B-C" diagramma="0,0,0,3,-48;0,3,4,3,-48+12*s" verso=-1 etichette="0,-0.5," titolo="Momento del telaio in kilonewton metro sui lati tesi"}

Nel nodo rigido $B$ i valori di momento che si leggono alla fine di $AB$ e all’inizio di $BC$ coincidono. Le azioni effettive esercitate dalle due aste sul nodo sono opposte perché si riferiscono alle facce di estremità con verso contrario. Le componenti assiale e trasversale possono invece assumere valori diversi sulle due aste perché le loro direzioni locali cambiano.
:::

## Sezioni caratteristiche nei diagrammi

:::esempio{titolo="Sezione di momento massimo con carico parziale"}
Si consideri una trave appoggiata lunga $8\,\mathrm{m}$. Un carico uniforme di $6\,\mathrm{kN/m}$ agisce fra le ascisse $2\,\mathrm{m}$ e $6\,\mathrm{m}$. La risultante vale $24\,\mathrm{kN}$ e si applica in mezzeria per simmetria. Le reazioni valgono quindi $12\,\mathrm{kN}$ ciascuna. Prima dell’inizio del carico, il taglio vale $12\,\mathrm{kN}$ e il momento in corrispondenza di $x=2\,\mathrm{m}$ vale $24\,\mathrm{kN\,m}$. Sotto il carico si indichi con $s=x-2$ la distanza dall’inizio del tratto caricato, espressa in metri. Le due azioni valgono
$$
T(s)=12-6s,
\qquad
M(s)=24+12s-3s^2,
$$
in kilonewton e in kilonewton metro. Il taglio passa per zero quando $s=2$, quindi nella sezione di ascissa $4\,\mathrm{m}$. Prima di quella sezione il taglio è positivo e dopo è negativo. Il momento raggiunge così il valore massimo di $36\,\mathrm{kN\,m}$. In corrispondenza di $s=4$ si ritrova $M=24\,\mathrm{kN\,m}$ perché l’area del taglio positivo è compensata da quella del taglio negativo. Da lì il momento decresce linearmente fino all’appoggio destro. Il carico cambia legge ai bordi del tratto, dove il taglio resta continuo e cambia pendenza. Di conseguenza il momento resta continuo con derivata continua anche ai due bordi.
:::

:::esempio{titolo="Momento costante con due coppie opposte"}
Una trave appoggiata lunga $7\,\mathrm{m}$ porta una coppia oraria di $9\,\mathrm{kN\,m}$ a $2\,\mathrm{m}$ dall’origine e una coppia antioraria dello stesso modulo a $5\,\mathrm{m}$ dall’origine. Le coppie hanno somma nulla e il carico totale è privo di forze. Poiché i due appoggi sono distinti, le due reazioni verticali valgono zero. Il taglio è dunque nullo lungo tutta la trave. Il momento è costante su ognuno dei tre campi, ma il suo valore cambia alle due coppie. Partendo da zero all’appoggio sinistro, il momento sale a $9\,\mathrm{kN\,m}$ alla coppia oraria e ritorna a zero a quella antioraria. Ogni sezione compresa fra le due coppie ha lo stesso valore massimo di $M$. L’esempio mostra come una regione possa essere soggetta a flessione pur avendo taglio nullo in tutte le sue sezioni.
:::

## Controlli di equilibrio dei diagrammi

:::osservazione{#controllo-diagrammi titolo="Equilibrio della parte opposta"}
Per verificare un valore interno si può calcolare la stessa azione isolando la parte opposta. Si consideri la trave appoggiata lunga $5\,\mathrm{m}$ con una forza di $10\,\mathrm{kN}$ a $2\,\mathrm{m}$ da sinistra. Nella sezione a $3\,\mathrm{m}$, dal tratto sinistro si ottengono $T=6-10=-4\,\mathrm{kN}$ e $M=6\cdot3-10\cdot1=8\,\mathrm{kN\,m}$. A destra della sezione agisce soltanto la reazione di $4\,\mathrm{kN}$ verso l’alto. Il taglio è l’opposto di quella forza, quindi vale $-4\,\mathrm{kN}$. Il momento coincide con il momento esterno della parte destra rispetto al taglio, che vale $4\cdot2=8\,\mathrm{kN\,m}$. Il controllo usa un bilancio con forze diverse e mette in evidenza gli errori di segno che un confronto fra formule derivate dalla stessa equazione può lasciare inosservati.
:::

:::osservazione{titolo="Controllo presso una cerniera interna"}
Nello schema di una trave con cerniera interna si può usare il momento nullo alla cerniera prima ancora di avere tutte le reazioni. Se il tratto a destra è appoggiato anche nel suo estremo destro, i momenti rispetto alla cerniera eliminano le due componenti di forza scambiate nella cerniera. Si ricava così la reazione dell’appoggio destro. Il bilancio verticale fornisce poi la componente verticale nella cerniera, che sulla parte sinistra si applica con verso opposto. In seguito, il momento trovato tagliando vicino alla cerniera deve tendere a zero da entrambe le parti. Il taglio può invece essere diverso da zero, dato che la cerniera trasmette la forza verticale. Se la cerniera è priva di forze trasversali esterne, il taglio mantiene lo stesso limite da sinistra e da destra. La forza scambiata fra le parti è interna e, proprio per questo, può comparire nel bilancio di una parte senza introdurre un salto nel diagramma complessivo.
:::

:::osservazione{titolo="Controlli locali e chiusura del diagramma"}
Per ogni tratto si verifica che le pendenze siano coerenti con le azioni presenti. Sotto un carico positivo verso il basso il taglio deve diminuire e un taglio costante deve produrre un momento lineare. In una sezione concentrata si confrontano i due limiti con l’azione applicata. Sull’intera trave si può infine ottenere la differenza fra i momenti ai due estremi sommando le aree con segno di $T$ e aggiungendo i salti di $M$. L’esito è un controllo globale distinto dalla verifica di un singolo valore. I diagrammi così ottenuti forniscono le azioni di sezione impiegate nel calcolo delle tensioni e, attraverso il momento flettente, nello studio della linea elastica.
:::
