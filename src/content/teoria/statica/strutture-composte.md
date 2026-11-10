---
titolo: "Strutture composte: travi Gerber, telai e archi a tre cerniere"
sommario: Come si calcolano le reazioni vincolari e le forze scambiate nei vincoli interni delle strutture formate da più corpi rigidi, con le travi Gerber, i portali e i telai a più corpi, l'arco a tre cerniere e la sua spinta.
---

## Strutture composte e forze nelle cerniere interne

Le equazioni cardinali di un solo corpo rigido forniscono tre equazioni. Una struttura formata da più corpi ha più incognite, e le equazioni che mancano si ottengono studiando l'equilibrio di ciascun corpo.

:::definizione{#struttura-composta titolo="Struttura composta"}
Una **struttura composta** è un insieme di $n \geq 2$ corpi rigidi piani collegati tra loro da vincoli interni (cerniere, pendoli, doppi pendoli) e al suolo da vincoli esterni. Si considerano qui strutture isostatiche, per le quali il numero $s$ di vincoli semplici è uguale a $3n$ e i vincoli sono ben disposti; l'analisi cinematica che lo accerta è trattata nell'argomento sui vincoli e sull'analisi cinematica.

Si assume che i corpi siano rigidi, che i vincoli siano lisci e bilaterali e che il peso proprio sia trascurabile. Esempi tipici sono la trave Gerber, formata da tratti di trave allineati e collegati da cerniere, il portale a tre cerniere e l'arco a tre cerniere.
:::

:::definizione{#forze-nella-cerniera titolo="Forze scambiate in una cerniera interna"}
Una cerniera interna $C$ che collega il corpo $1$ al corpo $2$ impedisce lo spostamento relativo dei due punti collegati e lascia libera la rotazione relativa. Perciò i due corpi si scambiano in $C$ una forza di direzione qualsiasi e nessuna coppia. Si indicano con $X_C$ e $Y_C$ le componenti della forza che il corpo $1$ esercita sul corpo $2$, positive secondo gli assi. Per il **principio di azione e reazione** il corpo $2$ esercita sul corpo $1$ la forza opposta, di componenti $-X_C$ e $-Y_C$, applicata nello stesso punto.

Le incognite $X_C$ e $Y_C$ sono due, come la molteplicità della cerniera. Una cerniera che collega $k$ corpi equivale a $k - 1$ cerniere semplici e introduce $2(k - 1)$ incognite.
:::

:::definizione{#diagramma-di-corpo-libero-dei-corpi titolo="Smontaggio in corpi"}
**Smontare** la struttura significa disegnare ciascun corpo isolato con i carichi che agiscono su di esso, le reazioni dei vincoli esterni che lo toccano e le forze scambiate nei vincoli interni, queste ultime con versi opposti sui due corpi collegati. Ogni corpo così isolato è un diagramma di corpo libero, al quale si applicano le equazioni cardinali.

::struttura{nodi="A,0,0;B,0,4;C,3,4,-;C2,6.2,4,-;D,9.2,4;E,9.2,0" aste="A-B;B-C;C2-D;D-E" vincoli="A,cerniera;E,cerniera" carichi="B,C,0.6,0.6,q;C2,D,0.6,0.6,q" reazioni="A,1.1,0,H_A;A,0,1.1,V_A;E,1.1,0,H_E;E,0,1.1,V_E;C,-0.9,0,X_C;C,0,-1.1,Y_C;C2,0.9,0,X_C;C2,0,1.1,Y_C" etichette="2.7,4.3,C;6.35,4.3,C" punti="3,4;6.2,4" titolo="Portale a tre cerniere smontato nei due corpi $ABC$ e $CDE$: in $C$ le forze scambiate hanno versi opposti sui due corpi"}

:::

::::teorema{#equilibrio-dei-corpi titolo="Equilibrio di una struttura composta"}
Una struttura composta da $n$ corpi rigidi è in equilibrio se e solo se ciascun corpo, isolato con i carichi, le reazioni esterne e le forze scambiate nei vincoli interni, soddisfa le tre equazioni cardinali. Si ottengono così $3n$ equazioni scalari. Le tre equazioni cardinali scritte per l'intera struttura sono la somma di quelle dei singoli corpi, perciò non sono indipendenti da esse.

Per una struttura isostatica le incognite (reazioni esterne e forze interne) sono $s = 3n$, quante le equazioni, e il sistema ha una sola soluzione. Un portale a tre cerniere ha $n = 2$, quattro reazioni esterne e due forze in $C$, cioè sei incognite per sei equazioni.

:::dimostrazione
Una struttura è in equilibrio quando ogni suo corpo resta in quiete. Ciascun corpo, isolato con tutte le forze che lo sollecitano, è un corpo rigido, e per l'argomento sulle equazioni cardinali della statica un corpo rigido è in equilibrio se e solo se il risultante e il momento risultante delle forze che agiscono su di esso sono nulli. Ne segue la prima parte dell'enunciato.

Per la seconda parte si sommano le equazioni dei corpi. In ogni vincolo interno le due forze scambiate sono applicate nello stesso punto e sono opposte, quindi la loro somma è nulla e la somma dei loro momenti rispetto a qualsiasi polo è nulla. Perciò la somma delle equazioni di traslazione dei corpi è l'equazione di traslazione della struttura intera, che contiene solo carichi e reazioni esterne, e lo stesso vale per le equazioni di rotazione rispetto a uno stesso polo.
:::
::::

:::attenzione
Le tre equazioni cardinali della struttura intera non bastano a calcolare più di tre reazioni esterne. Nel portale a tre cerniere le reazioni esterne sono $H_A$, $V_A$, $H_E$, $V_E$, e ogni equazione di equilibrio globale, anche scritta rispetto a un quarto polo, è combinazione delle altre tre. Per esempio, con il solo carico verticale $q$ sulla traversa le equazioni globali danno $V_A$ e $V_E$ e la sola relazione $H_A + H_E = 0$; il valore di $H_A$ si ottiene soltanto da un'equazione che riguarda una parte della struttura.
:::

## Equazione ausiliaria nella cerniera

Lo smontaggio completo introduce anche le forze nelle cerniere. Quando servono soltanto le reazioni esterne, si può scrivere un'equazione per ciascuna cerniera interna in cui le forze interne non compaiono.

::::teorema{#equazione-ausiliaria titolo="Equazione ausiliaria di momento nullo nella cerniera"}
Sia $C$ una cerniera interna che divide una struttura in equilibrio in due parti, collegate tra loro soltanto da $C$. Allora la somma dei momenti rispetto a $C$ delle forze esterne (carichi e reazioni dei vincoli esterni) che agiscono su una qualsiasi delle due parti è nulla:
$$
\sum M_C^{\text{parte}} = 0 .
$$
Per una struttura con $k$ cerniere interne di questo tipo le tre equazioni globali e le $k$ equazioni ausiliarie formano un sistema nelle sole reazioni esterne. Nel portale a tre cerniere le reazioni esterne sono quattro e l'equazione ausiliaria in $C$ è la quarta equazione che mancava.

:::dimostrazione
L'idea è scrivere l'equilibrio alla rotazione di una delle due parti scegliendo come polo proprio la cerniera. La parte considerata è un corpo rigido in equilibrio, quindi il momento risultante rispetto a $C$ di tutte le forze che agiscono su di essa è nullo. Tra queste forze c'è quella che l'altra parte esercita in $C$; la sua retta d'azione passa per il polo, perciò il suo momento rispetto a $C$ è nullo. Restano le forze esterne applicate alla parte, e la somma dei loro momenti rispetto a $C$ è nulla.
:::
::::

:::esempio{titolo="Portale con una forza orizzontale"}
Un portale ha le cerniere esterne $A$ e $E$ alla stessa quota, i ritti alti $3\,\mathrm{m}$, la traversa lunga $6\,\mathrm{m}$ e la cerniera interna $C$ a metà della traversa. Nel nodo $B$, in cima al ritto sinistro, agisce la forza orizzontale $F = 12\,\mathrm{kN}$ verso destra. L'equazione di rotazione della struttura intera attorno ad $A$ e l'equazione ausiliaria per la parte $CDE$ attorno a $C$ sono
$$
\begin{cases}
6\,V_E - 3\,F = 0 \\[4pt]
3\,V_E + 3\,H_E = 0
\end{cases}
$$
quindi $V_E = 6\,\mathrm{kN}$ e $H_E = -6\,\mathrm{kN}$. La traslazione orizzontale e quella verticale della struttura intera danno poi $H_A = -F - H_E = -6\,\mathrm{kN}$ e $V_A = -V_E = -6\,\mathrm{kN}$. Entrambe le cerniere esterne spingono verso sinistra con $6\,\mathrm{kN}$ e si dividono la forza $F$.
:::

## Travi Gerber

:::definizione{#trave-gerber titolo="Trave Gerber"}
Una **trave Gerber** è una trave ad asse rettilineo formata da più tratti collegati da cerniere interne e vincolata al suolo in modo che la struttura sia isostatica. Con $n$ tratti servono $3n$ vincoli semplici: le $n - 1$ cerniere interne ne danno $2(n - 1)$, quindi i vincoli esterni devono averne $n + 2$, cioè uno in più per ogni cerniera rispetto alla trave semplice.

Rispetto a una trave continua su più appoggi, la trave Gerber è isostatica e le sue reazioni si calcolano con le sole equazioni di equilibrio.
:::

::struttura{nodi="A,0,0;C,4,0;B,8,0" aste="A-C;C-B" cerniere="C" vincoli="A,incastro,180;B,carrello" forze="6 0,0,-1.8,P" quote="A,C,4 m,0.8;C,6 0,2 m,0.8;6 0,B,2 m,0.8" titolo="Trave Gerber: mensola $AC$ incastrata in $A$ e trave $CB$ appoggiata in $C$ e in $B$, con la forza $P = 20\,\mathrm{kN}$"}

:::definizione{#trave-portante-e-portata titolo="Trave portante e trave portata"}
In una trave Gerber un tratto si dice **portante** se i suoi vincoli esterni bastano da soli a renderlo isostatico, e **portato** se si appoggia su un altro tratto attraverso una cerniera interna. Nella trave della figura la mensola $AC$ è portante, perché l'incastro la vincola completamente; la trave $CB$ è portata, perché senza la cerniera $C$ avrebbe soltanto il carrello in $B$.

Per la trave portata la cerniera $C$ ha lo stesso effetto di una cerniera esterna: il tratto $CB$ si calcola come una trave appoggiata in $C$ e in $B$.
:::

:::teorema{#ordine-di-calcolo titolo="Ordine di calcolo di una trave Gerber"}
Le reazioni di una trave Gerber si calcolano partendo dai tratti portati, che non sostengono nessun altro tratto, e risalendo verso i tratti portanti. Per ogni tratto portato si calcolano le reazioni dei suoi vincoli, compresa la forza della cerniera; questa forza, cambiata di verso, diventa un carico concentrato applicato all'estremo del tratto portante. La regola segue dal teorema sull'equilibrio di una struttura composta e dal principio di azione e reazione.
:::

:::esempio{titolo="Calcolo della trave Gerber della figura"}
Il tratto portato $CB$ ha la forza $P = 20\,\mathrm{kN}$ a metà, quindi $V_B = Y_C = 10\,\mathrm{kN}$, dove $Y_C$ è la forza che la mensola esercita sulla trave $CB$. Sulla mensola $AC$ agisce allora in $C$ la forza di $10\,\mathrm{kN}$ verso il basso, e l'equilibrio della mensola dà
$$
\begin{cases}
V_A - Y_C = 0 \\[4pt]
M_A - 4\,Y_C = 0
\end{cases}
\qquad\Longrightarrow\qquad
V_A = 10\,\mathrm{kN}, \quad M_A = 40\,\mathrm{kN\,m} .
$$
Il momento reattivo dell'incastro è antiorario. Come verifica, il momento risultante attorno a $B$ delle forze agenti sull'intera trave è $M_A - 8\,V_A + 2\,P = 40 - 80 + 40 = 0$.

::struttura{nodi="A,0,0;C1,4,0,-;C2,5,1.6,-;B,9,1.6" aste="A-C1;C2-B" vincoli="A,incastro,180" forze="7 1.6,0,-1.8,P;C1,0,-1.1,Y_C" reazioni="C2,0,1.1,Y_C;B,0,1.1,V_B;A,0,1.1,V_A" coppie="A,1,M_A" etichette="3.9,0.35,C;4.75,1.95,C" punti="4,0;5,1.6" titolo="La trave portata $CB$, sopra, si calcola per prima; la forza $Y_C$ si trasmette alla mensola $AC$ con il verso opposto"}

:::

:::attenzione
La forza che la trave portata scambia con la portante non è sempre diretta verso il basso sulla portante. Se il tratto portato ha uno sbalzo oltre il suo appoggio, può tendere a sollevarsi in corrispondenza della cerniera. Per esempio, con la cerniera $C$ in $x = 2\,\mathrm{m}$, il carrello $B$ in $x = 4\,\mathrm{m}$ e una forza di $10\,\mathrm{kN}$ verso il basso all'estremo libero in $x = 5\,\mathrm{m}$, l'equilibrio alla rotazione del tratto portato attorno a $C$ dà $V_B = 15\,\mathrm{kN}$ e quindi $Y_C = 10 - 15 = -5\,\mathrm{kN}$: la cerniera trattiene la trave portata verso il basso, e sulla portante agisce una forza di $5\,\mathrm{kN}$ verso l'alto.
:::

## Pendoli e doppi pendoli interni

I collegamenti tra i corpi non sono soltanto cerniere. Un vincolo interno trasmette le componenti di forza e di momento corrispondenti agli spostamenti relativi che impedisce.

:::definizione{#pendolo-interno titolo="Pendolo interno"}
Un **pendolo interno** (o biella) è un'asta rettilinea, incernierata ai due estremi, che collega due corpi. Impedisce soltanto la variazione di distanza tra i due punti collegati, quindi è un vincolo semplice e trasmette una sola forza, diretta lungo il suo asse. L'incognita è lo sforzo normale $N$ della biella, positivo di trazione. Un esempio è la **catena** di un arco, che collega le due imposte e assorbe la spinta.
:::

::::teorema{#asta-scarica-incernierata titolo="Asta scarica incernierata ai due estremi"}
Sia un corpo rigido collegato al resto della struttura soltanto da due cerniere $P$ e $Q$, senza carichi applicati. Allora le forze che esso riceve nelle due cerniere sono opposte e dirette lungo la retta $PQ$. Il corpo si comporta quindi come un pendolo, anche se il suo asse non è rettilineo, e introduce una sola incognita.

:::dimostrazione
Sul corpo agiscono soltanto le due forze delle cerniere. L'equilibrio alla rotazione attorno a $P$ richiede che la forza applicata in $Q$ abbia momento nullo rispetto a $P$, quindi la sua retta d'azione passa per $P$ ed è la retta $PQ$. L'equilibrio alla traslazione richiede poi che la forza in $P$ sia opposta a quella in $Q$.
:::
::::

:::definizione{#doppio-pendolo-interno titolo="Doppio pendolo interno"}
Un **doppio pendolo interno** collega due corpi con due bielle parallele. Impedisce la traslazione relativa nella direzione delle bielle e la rotazione relativa, e lascia libera la traslazione relativa nella direzione perpendicolare. Perciò trasmette una forza parallela alle bielle e una coppia, ed è un vincolo doppio. Con le bielle parallele all'asse di una trave trasmette lo sforzo assiale e il momento e nessuna forza perpendicolare all'asse.

::struttura{nodi="A,0,1;C1,3.8,1,-;C2,4.2,1,-;B,7,1" aste="A-C1;C2-B;3.8 0.75-3.8 1.25;4.2 0.75-4.2 1.25;3.8 1.18-4.2 1.18;3.8 0.82-4.2 0.82" cerniere="3.8 1.18;4.2 1.18;3.8 0.82;4.2 0.82" vincoli="A,incastro,180;B,carrello" carichi="A,C1,0.6,0.6,q;C2,B,0.6,0.6,q" etichette="3.9,1.55,C" titolo="Trave con doppio pendolo interno in $C$, bielle parallele all'asse: i due tratti si scambiano una forza orizzontale e una coppia"}

:::

::::teorema{#equazione-ausiliaria-doppio-pendolo titolo="Equazioni ausiliarie per pendoli e doppi pendoli interni"}
Sia una struttura in equilibrio divisa in due parti da un solo vincolo interno. Valgono le seguenti equazioni, scritte per le forze esterne (carichi e reazioni) che agiscono su una delle due parti.

- Se il vincolo è un doppio pendolo con le bielle parallele alla direzione $\vec{d}$, la somma delle componenti delle forze nella direzione perpendicolare a $\vec{d}$ è nulla.
- Se il vincolo è un pendolo di asse $r$, la somma dei momenti rispetto a un qualsiasi punto di $r$ è nulla.

Nella trave della figura il doppio pendolo non trasmette forze verticali, quindi il carrello $B$ porta tutto il carico del tratto $CB$: $V_B = q \cdot \overline{CB}$.

:::dimostrazione
Nel primo caso si scrive l'equilibrio alla traslazione della parte nella direzione perpendicolare alle bielle. La forza trasmessa dal doppio pendolo è parallela a $\vec{d}$ e la sua coppia non contribuisce alle equazioni di traslazione, quindi nell'equazione restano soltanto le forze esterne. Nel secondo caso si scrive l'equilibrio alla rotazione della parte attorno a un punto di $r$; la forza della biella ha la retta d'azione $r$, perciò il suo momento rispetto a quel punto è nullo.
:::
::::

## Portali e telai a più corpi

:::definizione{#portale-a-tre-cerniere titolo="Portale a tre cerniere"}
Un **portale a tre cerniere** è formato da due corpi a forma di L, ciascuno composto da un ritto e da una parte della traversa, incernierati al suolo nelle basi $A$ ed $E$ e collegati tra loro dalla cerniera interna $C$ sulla traversa. Ha $n = 2$ e $s = 2 + 2 + 2 = 6$, ed è isostatico se le tre cerniere $A$, $C$, $E$ non sono allineate.

Le quattro reazioni esterne si calcolano con le tre equazioni globali e l'equazione ausiliaria in $C$; le forze nella cerniera si ottengono poi dall'equilibrio di uno dei due corpi.
:::

:::osservazione{#imposte-alla-stessa-quota}
Quando le cerniere esterne $A$ ed $E$ sono alla stessa quota, le reazioni orizzontali $H_A$ e $H_E$ hanno braccio nullo rispetto ad $A$ e rispetto a $E$. Perciò l'equazione di rotazione attorno ad $A$ contiene soltanto $V_E$ e quella attorno a $E$ soltanto $V_A$, e le reazioni verticali si calcolano come per una trave appoggiata in $A$ e in $E$. L'equazione ausiliaria in $C$, scritta per una delle due parti, contiene allora una sola incognita orizzontale.

Quando le cerniere esterne sono a quote diverse, l'equazione di rotazione attorno ad $A$ contiene anche $H_E$, con il braccio uguale al dislivello. Si risolve allora il sistema formato da questa equazione e dall'equazione ausiliaria per la parte che contiene $E$, entrambe nelle incognite $H_E$ e $V_E$.
:::

:::definizione{#telaio-zoppo titolo="Telaio zoppo"}
Si chiama **telaio zoppo** un portale in cui uno dei due ritti è incernierato sia alla base sia alla traversa. Se su quel ritto non agiscono carichi, per il teorema sull'asta scarica incernierata ai due estremi esso trasmette soltanto una forza diretta lungo il suo asse, e la struttura si riduce a un corpo a forma di L vincolato da una cerniera e da un pendolo. Le reazioni si calcolano allora con le tre equazioni cardinali del corpo a L.

::struttura{nodi="A,0,0;B,0,4;C,5,4;D,5,0" aste="A-B;B-C;C-D" cerniere="C" vincoli="A,cerniera;D,cerniera" forze="B,1.3,0,F" reazioni="A,1.1,0,H_A;A,0,1.1,V_A;D,0,1.1,V_D" quote="A,B,4 m,0.8;B,C,5 m,-0.6" titolo="Telaio zoppo: il ritto $CD$ è incernierato in $C$ e in $D$ ed è scarico, quindi la reazione in $D$ è verticale"}

Con $F = 10\,\mathrm{kN}$ in $B$ la rotazione attorno ad $A$ del telaio intero dà $5\,V_D - 4\,F = 0$, cioè $V_D = 8\,\mathrm{kN}$ verso l'alto; poi $V_A = -8\,\mathrm{kN}$, cioè $8\,\mathrm{kN}$ verso il basso, e $H_A = -10\,\mathrm{kN}$, cioè $10\,\mathrm{kN}$ verso sinistra.
:::

:::attenzione
Il ritto incernierato agli estremi si tratta come un pendolo soltanto se è scarico. Con un carico applicato al ritto, per esempio la pressione del vento, le forze nelle sue due cerniere non sono più dirette lungo l'asse: il ritto $CD$ della figura con un carico orizzontale di $3\,\mathrm{kN/m}$ trasmette in $C$ una forza orizzontale, e il telaio va smontato in due corpi.
:::

## Arco a tre cerniere e spinta

:::definizione{#arco-a-tre-cerniere titolo="Arco a tre cerniere"}
Un **arco a tre cerniere** è formato da due corpi ad asse curvo (o a tratti rettilinei) incernierati al suolo nelle **imposte** $A$ e $B$ e collegati dalla cerniera interna $C$, detta **chiave**. La distanza orizzontale tra le imposte è la **luce** $L$; la quota della chiave rispetto alla retta delle imposte è la **freccia** $f$.

Con carichi verticali le imposte reagiscono anche con forze orizzontali, dirette verso l'interno dell'arco. La loro intensità comune $H$ si chiama **spinta**. La spinta caratterizza l'arco rispetto alla trave: le imposte devono essere in grado di sopportarla, oppure va assorbita da una catena.
:::

::struttura{nodi="A,0,0;C,6,4;B,12,0" aste="0 0-1 1.222;1 1.222-2 2.222;2 2.222-3 3;3 3-4 3.556;4 3.556-5 3.889;5 3.889-6 4;6 4-7 3.889;7 3.889-8 3.556;8 3.556-9 3;9 3-10 2.222;10 2.222-11 1.222;11 1.222-12 0" cerniere="C" vincoli="A,cerniera;B,cerniera" carichi="0 4.6,12 4.6,0.9,0.9,q" reazioni="A,1.6,0,H;A,0,1.6,V_A;B,-1.6,0,H;B,0,1.6,V_B" quote="A,B,L,0.8;6 0,C,f,-0.6" titolo="Arco a tre cerniere parabolico con carico $q$ uniforme sulla proiezione orizzontale: le imposte spingono verso l'interno con la spinta $H$"}

::::teorema{#spinta-arco titolo="Reazioni e spinta dell'arco a tre cerniere"}
Sia un arco a tre cerniere con le imposte $A$ e $B$ alla stessa quota, soggetto a soli carichi verticali. Siano $V_A^0$, $V_B^0$ le reazioni e $M_C^0$ il momento flettente nella sezione di ascissa $x_C$ della **trave appoggiata equivalente**, cioè di una trave appoggiata di luce $L$ con gli stessi carichi verticali alle stesse ascisse. Allora
$$
V_A = V_A^0 ,
\qquad
V_B = V_B^0 ,
\qquad
H = \frac{M_C^0}{f} ,
$$
dove $H$ è la spinta, con $H_A = H$ verso destra e $H_B = -H$, cioè verso sinistra. Con il carico uniforme $q$ sulla proiezione orizzontale e la chiave a metà luce si ha $M_C^0 = \dfrac{qL^2}{8}$, quindi
$$
H = \frac{qL^2}{8f} .
$$
Per esempio, con $q = 10\,\mathrm{kN/m}$, $L = 16\,\mathrm{m}$ e $f = 4\,\mathrm{m}$ si ottiene $V_A = V_B = 80\,\mathrm{kN}$ e $H = \dfrac{10 \cdot 256}{32} = 80\,\mathrm{kN}$. La spinta è inversamente proporzionale alla freccia: un arco ribassato spinge più di un arco alto.

:::dimostrazione
L'idea è che le reazioni orizzontali non compaiono nelle equazioni che danno le reazioni verticali, e che la spinta si ottiene dall'equazione ausiliaria in $C$. L'equilibrio alla traslazione orizzontale dell'arco intero dà $H_A + H_B = 0$, perché i carichi sono verticali; si pone $H_A = H$, $H_B = -H$. Le imposte sono alla stessa quota, quindi le reazioni orizzontali hanno braccio nullo rispetto ad $A$ e a $B$, e le equazioni di rotazione attorno ad $A$ e a $B$ coincidono con quelle della trave appoggiata equivalente. Perciò $V_A = V_A^0$ e $V_B = V_B^0$.

Si scrive ora l'equazione ausiliaria per la parte $AC$ attorno a $C$, con i momenti antiorari positivi. La reazione $V_A$, applicata in $A$ a distanza $x_C$ a sinistra di $C$, ha momento $-V_A\,x_C$; la reazione $H$, applicata in $A$ a quota $f$ sotto $C$, ha momento $H f$. I carichi verticali della parte $AC$ hanno rispetto a $C$ lo stesso momento che hanno nella trave equivalente, perché i loro bracci dipendono soltanto dalle ascisse; la somma di questo momento e di $-V_A^0\,x_C$ è l'opposto del momento flettente $M_C^0$ della trave equivalente, che per definizione è il momento rispetto a $C$ delle forze a sinistra di $C$ con il segno delle fibre inferiori tese. Quindi l'equazione ausiliaria è $H f - M_C^0 = 0$, da cui $H = \dfrac{M_C^0}{f}$. Per il carico uniforme $V_A^0 = \dfrac{qL}{2}$ e
$$
M_C^0 = \frac{qL}{2} \cdot \frac{L}{2} - \frac{qL}{2} \cdot \frac{L}{4} = \frac{qL^2}{8} .
$$
:::
::::

:::osservazione{#meta-scarica}
Se una delle due metà dell'arco è scarica, per il teorema sull'asta scarica incernierata ai due estremi la reazione della sua imposta è diretta lungo la retta che congiunge l'imposta con la chiave. Sull'altra metà agiscono allora tre forze: il risultante dei carichi, la reazione della sua imposta e la forza trasmessa in $C$. Tre forze in equilibrio non parallele hanno le rette d'azione concorrenti in un punto, quindi la reazione dell'imposta carica passa per il punto $K$ in cui la retta $BC$ incontra la retta d'azione del carico.

::struttura{nodi="A,0,0;C,6,4;B,12,0" aste="0 0-1 1.222;1 1.222-2 2.222;2 2.222-3 3;3 3-4 3.556;4 3.556-5 3.889;5 3.889-6 4;6 4-7 3.889;7 3.889-8 3.556;8 3.556-9 3;9 3-10 2.222;10 2.222-11 1.222;11 1.222-12 0" cerniere="C" vincoli="A,cerniera;B,cerniera" forze="3 3,0,-2,P" tratteggi="12,0 3,6;0,0 3,6;3,3 3,6" punti="3,6,K" quote="A,3 0,3 m,0.8;3 0,B,9 m,0.8" titolo="La metà $CB$ è scarica: la reazione in $B$ è diretta lungo $BC$ e la reazione in $A$ passa per il punto $K$"}

Con $L = 12\,\mathrm{m}$, $f = 4\,\mathrm{m}$ e $P = 12\,\mathrm{kN}$ in $x = 3\,\mathrm{m}$ la trave equivalente dà $V_A = 9\,\mathrm{kN}$ e $V_B = 3\,\mathrm{kN}$. La retta $BC$ sale di $4\,\mathrm{m}$ ogni $6\,\mathrm{m}$, quindi $H = \dfrac{6}{4}\,V_B = 4{,}5\,\mathrm{kN}$, lo stesso valore che dà la formula $H = \dfrac{M_C^0}{f} = \dfrac{3 \cdot 6}{4}\,\mathrm{kN}$. La retta $AK$ ha pendenza $\dfrac{6}{3} = 2$, e infatti $\dfrac{V_A}{H_A} = \dfrac{9}{4{,}5} = 2$.
:::

## Carichi applicati nelle cerniere

:::osservazione{#carico-nella-cerniera}
Una forza applicata proprio in una cerniera interna va attribuita a uno dei corpi collegati: per esempio al tratto portato, alla fine del tratto portante, oppure al perno della cerniera, trattato come un corpo a sé. Le reazioni esterne non dipendono da questa scelta, perché le equazioni globali contengono la forza nello stesso punto qualunque sia il corpo che la riceve. Le forze scambiate nella cerniera invece cambiano, perché la stessa forza si somma all'una o all'altra parte.

Nella trave Gerber con la mensola $AC$ incastrata, la cerniera $C$ in $x = 2\,\mathrm{m}$, il carrello $B$ in $x = 6\,\mathrm{m}$ e la forza $P = 12\,\mathrm{kN}$ in $C$, si ottiene in ogni caso $V_B = 0$, $V_A = 12\,\mathrm{kN}$ e $M_A = 24\,\mathrm{kN\,m}$. Se $P$ è applicata al tratto $CB$ la cerniera trasmette $Y_C = 12\,\mathrm{kN}$; se è applicata alla mensola si ha $Y_C = 0$.

Per una coppia concentrata la scelta fa parte dei dati: la cerniera non trasmette coppie, quindi una coppia applicata «in $C$» agisce su uno solo dei due corpi e il testo deve dire quale.
:::

## Procedura e verifica

:::osservazione{#procedura-strutture-composte}
Il calcolo di una struttura composta isostatica segue questi passi.

- Si individuano i corpi e i vincoli e si controlla che $s = 3n$ e che i vincoli siano ben disposti.
- Si disegna il diagramma di corpo libero della struttura intera, con le reazioni esterne positive secondo gli assi, e si sostituiscono i carichi distribuiti con i loro risultanti, tratto per tratto: un risultante che si estende a cavallo di una cerniera va diviso tra i due corpi.
- Si scrivono le equazioni globali e un'equazione ausiliaria per ogni vincolo interno, scegliendo i poli in modo da avere poche incognite per equazione: una cerniera esterna come polo elimina le sue due reazioni.
- Si smonta la struttura e si calcolano le forze nei vincoli interni dall'equilibrio di un corpo.
- Si conclude dicendo il verso di ogni reazione.
:::

:::osservazione{#verifica-globale}
Una volta calcolate tutte le incognite, un'equazione di equilibrio non usata deve dare zero. Si usa di solito l'equilibrio alla rotazione della struttura intera attorno a un polo diverso da quelli già scelti, oppure l'equilibrio dell'altro corpo, quello non utilizzato per calcolare le forze nella cerniera. Questa seconda verifica controlla anche i versi delle forze interne: sul secondo corpo le forze nella cerniera vanno inserite con il segno opposto a quello usato sul primo.

Per il portale con la forza orizzontale $F = 12\,\mathrm{kN}$ visto nell'esempio sull'equazione ausiliaria, la rotazione della struttura intera attorno a $C$ dà
$$
-3\,V_A + 3\,H_A + 3\,V_E + 3\,H_E + 0 \cdot F = 18 - 18 + 18 - 18 = 0 ,
$$
perché la forza $F$, applicata alla quota di $C$, ha braccio nullo rispetto a $C$.
:::
