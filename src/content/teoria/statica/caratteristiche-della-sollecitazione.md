---
titolo: Caratteristiche della sollecitazione e diagrammi di N, T e M
sommario: Come si definiscono sforzo normale, taglio e momento flettente in una sezione di una trave, come si calcolano con l'equilibrio di una delle due parti e come si tracciano i loro diagrammi per travi, travi Gerber, telai e archi a tre cerniere.
---

## Azioni interne in una trave

Le reazioni vincolari, ricavate nell'argomento sulle equazioni cardinali della statica, dicono come la struttura scarica i carichi sui vincoli. Per dimensionare una trave serve sapere quali forze si trasmettono le sue parti, sezione per sezione.

:::definizione{#trave-e-sezione titolo="Trave, asse e sezione"}
Una **trave** è un corpo in cui una dimensione, la lunghezza, prevale sulle altre due. Si descrive con il suo **asse**, la linea che congiunge i baricentri delle sezioni, e con le **sezioni rette**, le figure piane ortogonali all'asse; per il baricentro e le proprietà delle sezioni si rimanda all'argomento sulla geometria delle masse. Nelle strutture piane l'asse giace nel piano $xy$ e i carichi agiscono in quel piano. Una trave rettilinea orizzontale si descrive con l'ascissa $x$ del baricentro della sezione; un'asta inclinata o verticale con l'ascissa $s$ misurata lungo il suo asse.

Il tratto di trave compreso fra due sezioni vicine si chiama **concio**. Il concio è il modello con cui si definiscono i versi positivi delle azioni interne.
:::

:::definizione{#caratteristiche-della-sollecitazione titolo="Caratteristiche della sollecitazione"}
Si consideri una struttura in equilibrio e una sua sezione $S$, che divide la trave in una parte a sinistra e una parte a destra. Le due parti si scambiano attraverso $S$ forze distribuite sulla sezione. Il sistema di queste forze, ridotto al baricentro della sezione, equivale a una forza e a una coppia, e le loro componenti sono le **caratteristiche della sollecitazione** in $S$:

- lo **sforzo normale** $N$, componente della forza lungo l'asse della trave;
- il **taglio** $T$, componente della forza ortogonale all'asse, nel piano della struttura;
- il **momento flettente** $M$, momento della coppia, con l'asse ortogonale al piano.

Per il principio di azione e reazione le azioni che la parte destra esercita sulla sinistra sono opposte a quelle che la parte sinistra esercita sulla destra. Le caratteristiche della sollecitazione sono perciò grandezze della sezione, con un solo valore, e su ciascuna faccia agiscono con versi opposti. $N$ e $T$ si misurano in $\mathrm{kN}$, $M$ in $\mathrm{kN\,m}$.

::struttura{nodi="A,0,0;B,8,0" aste="A-3 0;5 0-B" vincoli="A,cerniera;B,carrello" forze="3.7 0,0.7,0,N;4.3 0,-0.7,0,N;3.05 -0.9,0,-0.8,T;4.95 -0.1,0,0.8,T" coppie="3 0,1,M;5 0,-1,M" etichette="1.5,-0.9,parte sinistra;6.5,-0.9,parte destra;4,0.9,S" titolo="Le due parti della trave separate dalla sezione $S$ e le azioni interne che si scambiano, uguali e opposte"}

Le caratteristiche della sollecitazione servono a valutare gli sforzi nel materiale: $N$ allunga o accorcia la trave, $T$ fa scorrere una sezione rispetto alla vicina, $M$ la inflette. Le verifiche di resistenza, oggetto della Scienza delle costruzioni, partono dai loro valori massimi.
:::

## Convenzione di segno

Il verso di $N$, $T$ e $M$ sulla faccia di sinistra è opposto a quello sulla faccia di destra. Il segno si fissa perciò in base all'effetto sul concio, che è lo stesso per le due facce.

:::definizione{#convenzione-di-segno titolo="Convenzione di segno"}
Per una trave orizzontale percorsa da sinistra a destra, con le fibre di riferimento in basso, i segni delle caratteristiche della sollecitazione sono questi:

- $N$ è positivo se è di **trazione**, cioè se tende ad allungare il concio;
- $T$ è positivo se tende a far ruotare il concio in verso *orario*;
- $M$ è positivo se tende le fibre *inferiori*, cioè se incurva il concio con la concavità verso l'alto.

Sulla faccia di destra del concio, che ha la normale uscente nel verso delle $x$ crescenti, le azioni positive sono $N$ verso destra, $T$ verso il basso e $M$ antiorario; sulla faccia di sinistra sono $N$ verso sinistra, $T$ verso l'alto e $M$ orario.

::struttura{poligoni="0,0 1.2,0 1.2,0.8 0,0.8;3.2,0 4.4,0 4.4,0.8 3.2,0.8;6.4,0 7.6,0 7.6,0.8 6.4,0.8" tratteggi="0,0.12 1.2,0.12;3.2,0.12 4.4,0.12;6.4,0.12 7.6,0.12" forze="1.9 0.4,0.7,0,N;-0.7 0.4,-0.7,0,N;4.55 0.05,0,-0.7,T;3.05 0.75,0,0.7,T" coppie="7.75 0.4,1,M;6.25 0.4,-1,M" etichette="0.6,-0.6,N > 0;3.8,-0.6,T > 0;7,-0.6,M > 0" riferimento=0 titolo="Versi positivi di $N$, $T$ e $M$ sulle due facce del concio; il tratteggio indica le fibre inferiori, tese quando $M$ è positivo"}

Con questa convenzione, in un tratto con carico distribuito $q$ (positivo verso il basso) valgono le relazioni $\dfrac{dT}{dx} = -q$ e $\dfrac{dM}{dx} = T$, che si dimostrano nell'argomento sulle equazioni indefinite di equilibrio della trave. Un momento positivo indica una trave inflessa verso il basso, come una trave appoggiata caricata dall'alto; un momento negativo indica fibre superiori tese, come nella sezione di incastro di una mensola.
:::

:::definizione{#diagrammi-delle-sollecitazioni titolo="Diagrammi di N, T e M"}
Il **diagramma** di una caratteristica della sollecitazione è il grafico del suo valore in funzione dell'ascissa, disegnato sull'asse della trave. Si tracciano con queste regole:

- il diagramma di $M$ si disegna dalla parte delle **fibre tese**, quindi sotto l'asse dove $M > 0$ e sopra dove $M < 0$, senza segni;
- i diagrammi di $N$ e $T$ si disegnano con i valori positivi sopra l'asse e con i segni $+$ e $-$;
- si scrivono i valori agli estremi di ogni tratto e nei punti di massimo e di minimo.

I diagrammi mostrano dove la trave è più sollecitata e quale lato è teso; da questa informazione dipende, per esempio, la posizione delle armature in una trave di cemento armato.
:::

## Calcolo per sezioni

Una volta note le reazioni vincolari, le caratteristiche della sollecitazione si ricavano dall'equilibrio di una parte della struttura.

::::teorema{#calcolo-per-sezioni titolo="Calcolo delle caratteristiche per sezioni"}
Sia una struttura in equilibrio sotto i carichi e le reazioni vincolari, e sia $S$ una sua sezione. Allora $N$, $T$ e $M$ in $S$ sono le azioni che, applicate alla faccia della parte sinistra, equilibrano le forze esterne (carichi e reazioni) agenti su quella parte. Lo stesso valore si ottiene imponendo l'equilibrio della parte destra.

Il teorema riduce il calcolo di $N$, $T$ e $M$ in una sezione a tre equazioni di equilibrio con tre incognite, una per equazione. Conviene la parte su cui agiscono meno forze; per una mensola è la parte che contiene l'estremo libero, perché su di essa non agiscono reazioni.

:::dimostrazione
L'idea è che ogni parte di un corpo in equilibrio è a sua volta in equilibrio, se fra le forze che agiscono su di essa si includono le azioni scambiate con il resto del corpo. Si indicano con $R^{\mathrm{sx}}_x$ e $R^{\mathrm{sx}}_y$ le componenti della risultante delle forze esterne applicate alla parte sinistra e con $M^{\mathrm{sx}}_S$ il loro momento rispetto al baricentro di $S$, antiorario positivo. Sulla faccia di destra della parte sinistra le azioni interne positive sono $N$ verso destra, $T$ verso il basso e $M$ antiorario. Le equazioni cardinali della parte sinistra, con il polo nel baricentro di $S$, sono
$$
\begin{cases}
R^{\mathrm{sx}}_x + N = 0 \\[4pt]
R^{\mathrm{sx}}_y - T = 0 \\[4pt]
M^{\mathrm{sx}}_S + M = 0
\end{cases}
$$
e il momento di $N$ e $T$ rispetto al polo è nullo, perché le loro rette d'azione passano per il polo. Il sistema ha una sola soluzione, quindi $N$, $T$ e $M$ sono determinati.

Per la parte destra le azioni interne positive sono $N$ verso sinistra, $T$ verso l'alto e $M$ orario, e le stesse equazioni danno $N = R^{\mathrm{dx}}_x$, $T = -R^{\mathrm{dx}}_y$, $M = M^{\mathrm{dx}}_S$. Le forze esterne sulle due parti formano insieme il sistema di tutte le forze applicate alla struttura, che è equilibrato; perciò $R^{\mathrm{dx}}_x = -R^{\mathrm{sx}}_x$, $R^{\mathrm{dx}}_y = -R^{\mathrm{sx}}_y$ e $M^{\mathrm{dx}}_S = -M^{\mathrm{sx}}_S$. Ne segue che le due parti danno gli stessi valori.
:::
::::

:::osservazione{#regole-pratiche titolo="Regole pratiche per una trave orizzontale"}
Dalla dimostrazione del teorema seguono le formule che si usano negli esercizi. Con le forze esterne a sinistra della sezione $S$:
$$
N = -R^{\mathrm{sx}}_x ,
\qquad
T = R^{\mathrm{sx}}_y ,
\qquad
M = -M^{\mathrm{sx}}_S ;
$$
con le forze esterne a destra:
$$
N = R^{\mathrm{dx}}_x ,
\qquad
T = -R^{\mathrm{dx}}_y ,
\qquad
M = M^{\mathrm{dx}}_S .
$$
In parole, con la parte sinistra il taglio è la somma delle componenti verticali delle forze, prese positive verso l'alto, e il momento flettente è la somma dei loro momenti rispetto a $S$, presi positivi in verso *orario*. Per esempio una trave appoggiata con la reazione $V_A = 8\,\mathrm{kN}$ verso l'alto in $A$ e nessun carico nei primi $2\,\mathrm{m}$ ha, a $1{,}5\,\mathrm{m}$ da $A$, $T = 8\,\mathrm{kN}$ e $M = 8 \cdot 1{,}5 = 12\,\mathrm{kN\,m}$, perché $V_A$ ha momento orario rispetto alla sezione.
:::

## Forze concentrate

Fra due punti in cui il carico cambia, le caratteristiche della sollecitazione hanno un'espressione unica. Questi intervalli si chiamano **campi**, e il diagramma si costruisce campo per campo.

::::teorema{#andamento-nei-campi titolo="Andamento in un campo con carico uniforme"}
Sia $(a, b)$ un campo di una trave orizzontale su cui agisce soltanto un carico uniforme $q$ verso il basso, eventualmente nullo, e siano $N_a$, $T_a$, $M_a$ i valori nella sezione subito a destra di $a$. Allora per $a < x < b$
$$
N(x) = N_a ,
\qquad
T(x) = T_a - q\,(x - a) ,
\qquad
M(x) = M_a + T_a\,(x - a) - \frac{q\,(x - a)^2}{2} .
$$
Nei campi scarichi $T$ è costante e $M$ è lineare; nei campi con carico uniforme $T$ è lineare e $M$ è una parabola. Inoltre la derivata di $M$ è $T$, quindi la pendenza del diagramma di $M$ in ogni punto è il valore del taglio.

:::dimostrazione
Le forze a sinistra della sezione di ascissa $x$ sono quelle a sinistra di $a$ più il carico sul tratto da $a$ a $x$, la cui risultante vale $q\,(x - a)$, è diretta verso il basso e passa per il punto medio del tratto. La risultante orizzontale non cambia, quindi per le regole pratiche $N$ resta $N_a$. La risultante verticale diminuisce di $q\,(x - a)$, perciò $T(x) = T_a - q\,(x - a)$. Per il momento, la formula del cambiamento di polo (argomento sui sistemi di forze) dà il momento rispetto a $x$ delle forze a sinistra di $a$, che vale $M^{\mathrm{sx}}_a - (x - a)\,T_a$; il carico del tratto ha braccio $\dfrac{x - a}{2}$ e momento antiorario $\dfrac{q\,(x - a)^2}{2}$. Cambiando segno secondo la regola $M = -M^{\mathrm{sx}}_S$ si ottiene l'espressione di $M(x)$, e derivandola si trova $T(x)$.
:::
::::

::::teorema{#salto-del-taglio titolo="Salto del taglio sotto una forza concentrata"}
Sia applicata nella sezione di ascissa $x_0$ una forza concentrata di componenti $F_x$ e $F_y$. Allora attraversando $x_0$ da sinistra verso destra
$$
N(x_0^+) - N(x_0^-) = -F_x ,
\qquad
T(x_0^+) - T(x_0^-) = F_y ,
$$
mentre $M$ è continuo. Una forza verticale $F$ diretta verso il basso fa quindi scendere il diagramma del taglio di $F$, e il diagramma di $M$ ha in $x_0$ un **punto angoloso**, perché le pendenze a sinistra e a destra sono i due valori diversi del taglio.

:::dimostrazione
Le forze a sinistra di una sezione appena a destra di $x_0$ sono quelle a sinistra di una sezione appena a sinistra, più la forza applicata in $x_0$. Per le regole pratiche $N$ varia di $-F_x$ e $T$ varia di $F_y$. Il momento della forza rispetto a una sezione che si avvicina a $x_0$ tende a zero, perché il braccio tende a zero; perciò $M$ non ha salti.
:::
::::

:::esempio{titolo="Trave appoggiata con una forza"}
La trave $AB$, lunga $6\,\mathrm{m}$, ha una cerniera in $A$ e un carrello in $B$ e porta in $C$, a $2\,\mathrm{m}$ da $A$, la forza $F = 12\,\mathrm{kN}$ verso il basso. Le reazioni sono $H_A = 0$, $V_A = 8\,\mathrm{kN}$ e $V_B = 4\,\mathrm{kN}$, entrambe verso l'alto. Nel campo $AC$ la sola forza a sinistra è $V_A$, quindi $T = 8\,\mathrm{kN}$ e $M = 8x$; nel campo $CB$ conviene la parte destra, che contiene soltanto $V_B$, e dà $T = -4\,\mathrm{kN}$ e $M = 4\,(6 - x)$. In $C$ il taglio scende di $12\,\mathrm{kN}$, cioè di $F$, e il momento raggiunge il massimo $M_C = 16\,\mathrm{kN\,m}$, uguale a $\dfrac{F a b}{L}$ con $a = 2\,\mathrm{m}$, $b = 4\,\mathrm{m}$ e $L = 6\,\mathrm{m}$.

::struttura{nodi="A,0,0;C,2,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,2,0,8;2,0,6,0,-4" segni=1 titolo="Diagramma del taglio $T$ ($\mathrm{kN}$)"}

::struttura{nodi="A,0,0;C,2,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,2,0,8*s;2,0,6,0,-4*s+16" verso=-1 forze="C,0,-1.5,F" titolo="Diagramma del momento flettente $M$ ($\mathrm{kN\,m}$)"}
:::

## Carichi distribuiti

Con un carico distribuito il diagramma del momento diventa curvo, e il suo valore massimo cade in generale all'interno di un campo.

:::esempio{titolo="Trave appoggiata con carico uniforme"}
La trave $AB$, lunga $L = 6\,\mathrm{m}$, appoggiata agli estremi, porta il carico uniforme $q = 4\,\mathrm{kN/m}$ su tutta la luce. Per simmetria $V_A = V_B = \dfrac{qL}{2} = 12\,\mathrm{kN}$. Con la parte sinistra di una sezione di ascissa $x$, che contiene $V_A$ e il carico $q x$ con il braccio $\dfrac{x}{2}$,
$$
T(x) = 12 - 4x ,
\qquad
M(x) = 12x - 4x \cdot \frac{x}{2} = 12x - 2x^2 .
$$
Il taglio si annulla in mezzeria, dove il momento vale $M\!\left(3\right) = 18\,\mathrm{kN\,m}$, cioè $\dfrac{qL^2}{8}$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,6,0,-2*s^2+12*s" verso=-1 carichi="A,B,0.6,0.6,q" titolo="Diagramma del momento flettente $M$ ($\mathrm{kN\,m}$)"}
:::

:::osservazione{#momento-massimo titolo="Momento massimo dove il taglio si annulla"}
Per il teorema sull'andamento in un campo la derivata di $M$ è $T$. Quindi il momento flettente è massimo o minimo, all'interno di un campo, nella sezione in cui il taglio si annulla, e negli estremi dei campi dove il taglio cambia segno con un salto. Per trovare il momento massimo si risolve $T(x) = 0$ e si sostituisce il valore trovato in $M(x)$. La relazione $\dfrac{dM}{dx} = T$ vale con qualsiasi carico distribuito, come si dimostra nell'argomento sulle equazioni indefinite di equilibrio della trave.
:::

:::esempio{titolo="Mensola con carico triangolare"}
La mensola $AB$, lunga $L = 3\,\mathrm{m}$, è incastrata in $A$ e porta un carico triangolare che vale $q_0 = 6\,\mathrm{kN/m}$ in $A$ e si annulla nell'estremo libero $B$. Si usa la parte destra della sezione di ascissa $x$, che non contiene reazioni: su di essa il carico è un triangolo di base $3 - x$ e altezza $2\,(3 - x)$, con risultante $(3 - x)^2$ diretta verso il basso e applicata a un terzo della base dalla sezione. Per le regole pratiche
$$
T(x) = (3 - x)^2 ,
\qquad
M(x) = -(3 - x)^2 \cdot \frac{3 - x}{3} = -\frac{(3 - x)^3}{3} .
$$
Il taglio è di secondo grado e il momento di terzo grado; all'incastro $T = 9\,\mathrm{kN}$ e $M = -9\,\mathrm{kN\,m}$, con le fibre superiori tese. Gli stessi valori sono le reazioni $V_A = 9\,\mathrm{kN}$ verso l'alto e $M_A = 9\,\mathrm{kN\,m}$ antiorario.
:::

## Coppie concentrate e sbalzi

::::teorema{#salto-del-momento titolo="Salto del momento sotto una coppia concentrata"}
Sia applicata nella sezione di ascissa $x_0$ una coppia concentrata $\mathcal{M}$, positiva se antioraria. Allora
$$
M(x_0^+) - M(x_0^-) = -\mathcal{M} ,
$$
mentre $N$ e $T$ sono continui. Una coppia antioraria fa scendere il diagramma di $M$ di $\mathcal{M}$, una coppia oraria lo fa salire; le pendenze a sinistra e a destra sono uguali, perché il taglio non cambia.

:::dimostrazione
Le forze a sinistra di una sezione appena a destra di $x_0$ sono quelle a sinistra di una sezione appena a sinistra, più la coppia $\mathcal{M}$. La coppia non ha risultante, quindi $N$ e $T$ non cambiano; il suo momento è $\mathcal{M}$ rispetto a qualunque polo, perciò per la regola $M = -M^{\mathrm{sx}}_S$ il momento flettente varia di $-\mathcal{M}$.
:::
::::

:::esempio{titolo="Trave appoggiata con una coppia"}
La trave $AB$, lunga $6\,\mathrm{m}$, appoggiata agli estremi, porta in $C$, a $2\,\mathrm{m}$ da $A$, la coppia antioraria $\mathcal{M} = 12\,\mathrm{kN\,m}$. L'equilibrio alla rotazione attorno a $B$ dà $V_A = \dfrac{\mathcal{M}}{L} = 2\,\mathrm{kN}$ verso l'alto, e la traslazione verticale dà $V_B = -2\,\mathrm{kN}$, cioè $2\,\mathrm{kN}$ verso il basso. Il taglio vale $2\,\mathrm{kN}$ su tutta la trave. Il momento vale $M = 2x$ nel campo $AC$ e $M = 2x - 12$ nel campo $CB$: in $C$ scende da $4\,\mathrm{kN\,m}$ a $-8\,\mathrm{kN\,m}$, e i due tratti sono paralleli.

::struttura{nodi="A,0,0;C,2,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,2,0,2*s;2,0,6,0,2*s-8" verso=-1 coppie="C,1,ℳ" titolo="Diagramma del momento flettente $M$ ($\mathrm{kN\,m}$)"}
:::

:::esempio{titolo="Trave con sbalzo"}
La trave $AC$, lunga $6\,\mathrm{m}$, ha una cerniera in $A$ e un carrello in $B$, a $4\,\mathrm{m}$ da $A$; il tratto $BC$ è uno **sbalzo**. Il carico uniforme $q = 3\,\mathrm{kN/m}$ agisce su $AB$ e la forza $F = 4\,\mathrm{kN}$ verso il basso agisce nell'estremo libero $C$. La rotazione attorno ad $A$ dà $4\,V_B - 12 \cdot 2 - 4 \cdot 6 = 0$, quindi $V_B = 12\,\mathrm{kN}$, e la traslazione verticale dà $V_A = 4\,\mathrm{kN}$, entrambe verso l'alto. Nel campo $AB$
$$
T(x) = 4 - 3x ,
\qquad
M(x) = 4x - \frac{3x^2}{2} ;
$$
nello sbalzo, con la parte destra, $T = 4\,\mathrm{kN}$ e $M = -4\,(6 - x)$. In $B$ il taglio sale di $12\,\mathrm{kN}$, cioè di $V_B$, e il momento vale $-8\,\mathrm{kN\,m}$. Il taglio si annulla in $x = \dfrac{4}{3}\,\mathrm{m}$, dove il momento ha il massimo positivo $\dfrac{8}{3}\,\mathrm{kN\,m} \approx 2{,}67\,\mathrm{kN\,m}$. Lo sbalzo rende negativo il momento sopra l'appoggio, con le fibre superiori tese.

::struttura{nodi="A,0,0;B,4,0;C,6,0" aste="A-C" vincoli="A,cerniera;B,carrello" diagramma="0,0,4,0,-1.5*s^2+4*s;4,0,6,0,4*s-8" verso=-1 titolo="Diagramma del momento flettente $M$ ($\mathrm{kN\,m}$)"}
:::

## Travi Gerber

Nelle travi Gerber le reazioni e le forze nelle cerniere interne si ricavano smontando la trave, come nell'argomento sulle strutture composte. Una volta note le reazioni, la trave si studia come una trave unica.

:::osservazione{#cerniera-interna titolo="Momento nullo nella cerniera interna"}
Una cerniera interna trasmette fra i due tronchi le forze $X_C$ e $Y_C$, e nessuna coppia. Il momento flettente nella sezione della cerniera è il momento scambiato fra i due tronchi, quindi è nullo: $M_C = 0$. Se nella cerniera non agiscono forze concentrate, $N$ e $T$ sono continui, e il diagramma del momento attraversa la cerniera senza salti né punti angolosi. Il valore $M_C = 0$ è anche un controllo dei conti.
:::

:::esempio{titolo="Trave Gerber con carico uniforme"}
La trave $AB$, lunga $6\,\mathrm{m}$, è incastrata in $A$, ha una cerniera interna in $C$, a $2\,\mathrm{m}$ da $A$, e un carrello in $B$; il carico uniforme $q = 2\,\mathrm{kN/m}$ agisce su tutta la trave. Il tronco $CB$, appoggiato in $C$ e in $B$, porta $8\,\mathrm{kN}$, quindi $V_B = 4\,\mathrm{kN}$ e il tronco $CB$ si appoggia sul tronco $AC$ con $4\,\mathrm{kN}$. L'equilibrio della trave intera dà $V_A = 8\,\mathrm{kN}$ verso l'alto e $M_A = 12\,\mathrm{kN\,m}$ antiorario. Con la parte sinistra di una sezione di ascissa $x$
$$
T(x) = 8 - 2x ,
\qquad
M(x) = -12 + 8x - x^2 ,
$$
un'unica espressione per tutta la trave, perché il carico non cambia lungo di essa. Il momento si annulla in $C$, come deve, e ha il massimo positivo $4\,\mathrm{kN\,m}$ in $x = 4\,\mathrm{m}$, dove $T = 0$.

::struttura{nodi="A,0,0;C,2,0;B,6,0" aste="A-B" vincoli="A,incastro,180;B,carrello" cerniere="C" diagramma="0,0,2,0,-s^2+8*s-12;2,0,6,0,-s^2+4*s" verso=-1 titolo="Diagramma del momento flettente $M$ ($\mathrm{kN\,m}$)"}
:::

## Telai: aste verticali e inclinate

In un telaio le aste hanno direzioni diverse, e le parole *sinistra*, *destra*, *sopra* e *sotto* vanno riferite a ciascuna asta.

:::definizione{#fibre-di-riferimento titolo="Verso di percorrenza e fibre di riferimento"}
Per ogni asta di un telaio si sceglie un **verso di percorrenza**, che fissa l'ascissa $s$ lungo l'asse, e si tratteggiano le **fibre di riferimento** sul lato che sta alla destra di chi percorre l'asta. Ruotando il disegno finché l'asta è orizzontale e percorsa da sinistra a destra, le fibre tratteggiate stanno in basso e valgono la convenzione di segno e le regole pratiche della trave orizzontale: $M > 0$ tende le fibre tratteggiate e $T > 0$ fa ruotare il concio in verso orario. Lo sforzo normale non dipende dalla scelta: $N > 0$ è di trazione.

In un portale si percorre di solito la struttura da un piede all'altro, salendo sul pilastro di sinistra, attraversando il traverso e scendendo sul pilastro di destra; le fibre tratteggiate sono allora tutte all'interno del portale. Il diagramma di $M$ si disegna dalla parte delle fibre tese, come per le travi.
:::

:::osservazione{#aste-inclinate titolo="Componenti lungo l'asse e ortogonali all'asse"}
Per un'asta che forma l'angolo $\alpha$ con l'asse $x$, percorsa nel verso del versore $\hat{t} = (\cos\alpha, \sin\alpha)$, sia $\hat{n} = (-\sin\alpha, \cos\alpha)$ il versore ortogonale, ruotato di $90^\circ$ in verso antiorario. Le regole pratiche diventano
$$
N = -\big( R^{\mathrm{sx}}_x \cos\alpha + R^{\mathrm{sx}}_y \sin\alpha \big) ,
\qquad
T = -R^{\mathrm{sx}}_x \sin\alpha + R^{\mathrm{sx}}_y \cos\alpha ,
\qquad
M = -M^{\mathrm{sx}}_S ,
$$
dove *sinistra* indica la parte che precede la sezione nel verso di percorrenza. Per $\alpha = 0$ si ritrovano le formule della trave orizzontale; per un pilastro percorso dal basso verso l'alto, con $\alpha = 90^\circ$, $N = -R^{\mathrm{sx}}_y$ e $T = -R^{\mathrm{sx}}_x$. Una forza verticale, su un'asta inclinata, contribuisce quindi sia allo sforzo normale sia al taglio.
:::

::::teorema{#nodo-rigido titolo="Continuità del momento in un nodo rigido"}
Sia un nodo rigido in cui si incontrano due aste, percorse una dopo l'altra, con le fibre tratteggiate alla destra del verso di percorrenza su entrambe, e sia applicata nel nodo al più una forza concentrata. Allora il momento flettente all'estremo della prima asta è uguale al momento flettente all'inizio della seconda. Se nel nodo agisce anche una coppia $\mathcal{M}$ antioraria, il momento varia di $-\mathcal{M}$, come in una trave rettilinea.

In un portale percorso da un piede all'altro il diagramma di $M$ resta quindi dalla stessa parte nel passaggio dal pilastro al traverso: se nel pilastro sono tese le fibre interne, lo sono anche nel traverso.

:::dimostrazione
Si isola il tratto di struttura compreso fra una sezione della prima asta e una sezione della seconda, a distanza $\varepsilon$ dal nodo. Sulla prima sezione, che è una faccia di sinistra rispetto al verso di percorrenza, agisce il momento orario $M_1$; sulla seconda, che è una faccia di destra, agisce il momento antiorario $M_2$. L'equilibrio alla rotazione attorno al nodo dà $M_2 - M_1$ più i momenti delle forze sulle due facce e dell'eventuale forza nel nodo, uguale a zero. I bracci di queste forze sono al più $\varepsilon$, quindi per $\varepsilon \to 0$ si ottiene $M_2 = M_1$. Con una coppia $\mathcal{M}$ nel nodo l'equazione diventa $M_2 - M_1 + \mathcal{M} = 0$.
:::
::::

:::esempio{titolo="Portale con forza orizzontale"}
Il portale $ABCD$ ha i pilastri $AB$ e $DC$ alti $4\,\mathrm{m}$ e il traverso $BC$ lungo $4\,\mathrm{m}$; è vincolato con una cerniera in $A$ e un carrello in $D$, e porta in $B$ la forza orizzontale $F = 6\,\mathrm{kN}$ verso destra. Le reazioni sono $H_A = -6\,\mathrm{kN}$, cioè $6\,\mathrm{kN}$ verso sinistra, $V_A = -6\,\mathrm{kN}$, cioè $6\,\mathrm{kN}$ verso il basso, e $V_D = 6\,\mathrm{kN}$ verso l'alto. Si percorre la struttura da $A$ a $D$, con le fibre tratteggiate all'interno.

- Pilastro $AB$, con $s$ misurata da $A$: la parte che precede la sezione contiene $H_A$, che ha braccio $s$, quindi $M = 6s$, positivo, con le fibre interne tese; inoltre $N = 6\,\mathrm{kN}$ di trazione e $T = 6\,\mathrm{kN}$.
- Traverso $BC$, con $s$ misurata da $B$: con la parte che segue la sezione, che contiene soltanto $V_D$, $M = 6\,(4 - s)$, da $24\,\mathrm{kN\,m}$ in $B$ a zero in $C$; $T = -6\,\mathrm{kN}$ e $N = 0$.
- Pilastro $CD$: $V_D$ agisce lungo l'asse, quindi $M = 0$, $T = 0$ e $N = -6\,\mathrm{kN}$, di compressione.

In $B$ il momento vale $24\,\mathrm{kN\,m}$ sia alla sommità del pilastro sia all'inizio del traverso, con le fibre interne tese in entrambi, come stabilisce il teorema sul nodo rigido.

::struttura{nodi="A,0,0;B,0,4;C,4,4;D,4,0" aste="A-B;B-C;C-D" vincoli="A,cerniera;D,carrello" diagramma="0,0,0,4,6*s;0,4,4,4,-6*s+24;4,4,4,0,0" verso=-1 scala=0.025 titolo="Diagramma del momento flettente $M$ ($\mathrm{kN\,m}$)"}
:::

## Arco a tre cerniere

Un arco a tre cerniere con asse a tratti rettilinei si studia come un telaio. La spinta orizzontale, ricavata nell'argomento sulle strutture composte, comprime il traverso e produce momenti di segno opposto a quelli di una trave appoggiata.

:::osservazione{#asta-tra-due-cerniere titolo="Asta scarica fra due cerniere"}
Sia un'asta rettilinea collegata al resto della struttura da due cerniere ai suoi estremi e priva di carichi lungo l'asse. L'asta è in equilibrio sotto le sole due forze trasmesse dalle cerniere, quindi queste forze sono opposte e dirette lungo la retta che congiunge le cerniere, cioè lungo l'asse dell'asta. Perciò in ogni sezione dell'asta $T = 0$, $M = 0$ e $N$ è costante: l'asta si comporta come un pendolo. In un arco a tre cerniere con una sola forza applicata in chiave, entrambe le aste sono in questa situazione e sono soltanto compresse.
:::

:::esempio{titolo="Portale a tre cerniere con carico uniforme"}
Il portale ha i piedi $A$ e $B$ incernierati, i pilastri $AD$ e $BE$ alti $4\,\mathrm{m}$, il traverso $DE$ lungo $6\,\mathrm{m}$ con la cerniera interna $C$ in mezzeria, e porta il carico uniforme $q = 4\,\mathrm{kN/m}$ sul traverso. Per simmetria $V_A = V_B = 12\,\mathrm{kN}$; la condizione di momento nullo in $C$ per la parte sinistra dà la spinta $H_A = \dfrac{9}{2}\,\mathrm{kN}$ verso destra e, per la traslazione orizzontale, $H_B = -\dfrac{9}{2}\,\mathrm{kN}$, cioè verso sinistra. Si percorre il portale da $A$ a $B$ con le fibre interne tratteggiate.

- Pilastro $AD$: $M = -\dfrac{9}{2}\,s$, quindi sono tese le fibre esterne e in $D$ si ha $M = -18\,\mathrm{kN\,m}$; $N = -12\,\mathrm{kN}$.
- Traverso $DE$, con $s$ misurata da $D$: $M = -18 + 12s - 2s^2$, che si annulla in $C$, per $s = 3\,\mathrm{m}$, e torna a $-18\,\mathrm{kN\,m}$ in $E$; $N = -\dfrac{9}{2}\,\mathrm{kN}$, cioè il traverso è compresso dalla spinta.
- Pilastro $EB$: per simmetria $M$ va da $-18\,\mathrm{kN\,m}$ in $E$ a zero in $B$.

Senza la spinta il traverso si comporterebbe come una trave appoggiata con momento massimo $\dfrac{qL^2}{8} = 18\,\mathrm{kN\,m}$ in mezzeria; la spinta sposta il diagramma verso le fibre esterne e annulla il momento nella cerniera $C$.

::struttura{nodi="A,0,0;D,0,4;C,3,4;E,6,4;B,6,0" aste="A-D;D-E;E-B" vincoli="A,cerniera;B,cerniera" cerniere="C" diagramma="0,0,0,4,-4.5*s;0,4,3,4,-2*s^2+12*s-18;3,4,6,4,-2*s^2;6,4,6,0,4.5*s-18" verso=-1 titolo="Diagramma del momento flettente $M$ ($\mathrm{kN\,m}$)"}
:::
