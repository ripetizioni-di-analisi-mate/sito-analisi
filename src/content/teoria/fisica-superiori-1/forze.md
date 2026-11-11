---
titolo: "Forze, peso, elasticità e attrito"
sommario: "Peso e massa, legge di Hooke, reazioni di contatto e attrito statico e dinamico."
---

:::percorso
Le forze sono vettori e si sommano mediante le componenti.
Qui si riconoscono peso, forza elastica, reazione normale e attrito, con le condizioni dei relativi modelli.
Nel capitolo successivo queste forze saranno combinate nei problemi di equilibrio.
:::

## Interazioni e rappresentazione

:::definizione{#forza titolo="La forza come grandezza vettoriale"}
Una **forza** descrive un'interazione fra corpi. Può essere di contatto, come quella di un tavolo su un oggetto, oppure agire senza contatto diretto, come la forza gravitazionale.
Si rappresenta con modulo, direzione e verso; nei corpi rigidi conta anche la linea d'azione. L'unità SI è il newton, simbolo N. Il dinamometro misura una forza attraverso la deformazione di un elemento elastico opportunamente tarato.
:::

## Peso e massa

:::definizione{#peso titolo="Il campo gravitazionale locale"}
La massa m si esprime in chilogrammi. Il peso è la forza gravitazionale locale e, vicino alla superficie considerata, ha modulo
$$
P=mg.
$$
Qui g è il campo gravitazionale in N/kg; negli esercizi viene indicato il valore da usare. Con $m=2\,\mathrm{kg}$ e $g=10\,\mathrm{N/kg}$ il peso vale 20 N.
Spostare lo stesso oggetto in un luogo con g diverso cambia il peso, non la massa. La direzione del peso è verticale, con verso verso il basso nel riferimento locale.
:::

## Molle e legge di Hooke

:::teorema{#hooke titolo="Forza proporzionale alla deformazione"}
Nel tratto elastico lineare di una molla ideale, il modulo della forza è $F_e=k|x|$. La deformazione x è la differenza fra lunghezza attuale e lunghezza naturale; k è la costante elastica in N/m.
Con $k=100\,\mathrm{N/m}$ e allungamento 3 cm, si usa $x=0{,}03\,\mathrm m$ e si ottiene 3 N. Il verso della forza tende a ripristinare la lunghezza naturale: una molla allungata tira, una compressa spinge.
La legge richiede deformazioni entro il campo in cui il modello lineare è valido.

::grafico{f="x" xmin=0 xmax=6 ymin=0 ymax=6 nomi="x,F" punti="3,3,pieno,A" titolo="Allungamento $x$ in centimetri e forza $F$ in newton. Per $k=100\,\mathrm{N/m}$, $3\,\mathrm{cm}=0{,}03\,\mathrm m$ corrispondono a $3\,\mathrm N$"}
:::

## Confrontare e tarare molle

:::osservazione{#taratura titolo="Pendenza del grafico forza-allungamento"}
Il rapporto F/x e la pendenza $\Delta F/\Delta x$ del grafico lineare forniscono k. A forza uguale, la molla con k maggiore si deforma meno.
La lunghezza totale non deve sostituire x. Se una molla passa da 12 a 16 cm, la deformazione è 4 cm. Se il grafico riporta lunghezza totale anziché allungamento, la pendenza resta k, ma la retta in generale non passa per l'origine degli assi.
:::

## Reazione normale e tensione

:::definizione{#contatto titolo="Forze dei vincoli"}
La **reazione normale** N di una superficie è perpendicolare alla superficie di contatto. Una corda ideale tesa tira lungo la propria direzione; la relativa forza si chiama tensione.
Su un tavolo orizzontale, con solo peso e normale e con corpo fermo, N=P. Se si aggiunge una spinta verticale verso il basso, N aumenta; con una trazione verso l'alto, N diminuisce. Il piano non può esercitare una normale di trazione: un calcolo che richiede N negativa indica che quel contatto non può essere mantenuto nelle ipotesi date.
:::

## Attrito radente

:::definizione{#attrito titolo="Valore effettivo e limite statico"}
L'attrito agisce lungo la superficie. Nel modello statico,
$$
0\leq f_s\leq\mu_sN.
$$
Il valore effettivo è quello richiesto dalla quiete, finché non supera il limite $f_{s,\max}=\mu_sN$. Un blocco tirato con 3 N può avere attrito di 3 N anche se il limite è 8 N.
Durante lo scorrimento, il modello dinamico assegna $f_d=\mu_dN$, opposto alla velocità relativa delle superfici. I coefficienti sono adimensionali. Per riconoscere il verso statico si considera la tendenza allo scorrimento; esso non è sempre opposto a una forza scelta senza esaminare tutte le altre.
:::

## Usare correttamente un modello

:::osservazione{#modelli titolo="Ipotesi e controlli fisici"}
I dati devono precisare se la molla è nel tratto lineare, se il corpo è fermo o scorre, se il piano è liscio o ruvido e quali forze aggiuntive agiscono.
Dopo il calcolo si controllano unità, segni e condizioni. Se l'attrito necessario supera il massimo statico, la quiete non è possibile. Se la normale trovata è negativa, il contatto assunto deve essere rivisto. Questi controlli fanno parte della soluzione e precedono l'uso della risposta numerica.
:::
