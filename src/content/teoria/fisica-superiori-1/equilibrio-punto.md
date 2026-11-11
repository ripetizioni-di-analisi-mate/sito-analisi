---
titolo: "Equilibrio del punto materiale"
sommario: "Risultante nulla, corde, molle, piani inclinati e condizioni per la quiete con attrito."
---

:::percorso
Si usano le componenti dei vettori e le leggi delle forze peso, elastiche e d'attrito.
Il modello di punto materiale descrive i casi in cui non occorre studiare la rotazione del corpo.
L'equilibrio dei momenti sarà aggiunto nel capitolo sul corpo rigido.
:::

## Condizioni di equilibrio

:::teorema{#condizioni titolo="Risultante nulla"}
Un punto materiale che rimane fermo in un riferimento inerziale ha risultante delle forze nulla:
$$
\sum\vec F=\vec 0.
$$
Nel piano questa condizione richiede contemporaneamente
$$
\begin{cases}
\sum F_x=0,\\
\sum F_y=0.
\end{cases}
$$
La quiete iniziale è parte dell'ipotesi statica. La sola risultante nulla non distingue da un moto rettilineo uniforme; qui si studiano corpi fermi. Una forza equilibrante è opposta alla risultante di tutte le altre.
:::

## Disegnare e proiettare le forze

:::osservazione{#componenti titolo="Un corpo alla volta"}
Si sceglie il corpo studiato e si rappresentano le sole forze esterne che agiscono su quel corpo. Poi si scelgono gli assi, si attribuiscono i segni e si impongono le somme nulle.
Se le forze già note sommano $(6;8)\,\mathrm N$, l'equilibrante ha componenti $(-6;-8)\,\mathrm N$ e modulo 10 N. Una forza che il corpo esercita su un altro oggetto non deve essere aggiunta fra quelle che agiscono sul primo corpo.
:::

## Corde verticali

:::teorema{#corde titolo="Ripartire un carico"}
Per un corpo appeso a una sola corda verticale, senza altre forze, vale $T=P$. Con due corde verticali vale $T_1+T_2=P$.
Le tensioni sono uguali solo se la configurazione e il carico permettono quella simmetria. Se P=30 N e una corda sostiene 12 N, l'altra sostiene 18 N. Una corda ideale tesa tira lungo la propria direzione; non può spingere il corpo.
:::

## Molle in equilibrio

:::teorema{#molla titolo="Deformazione richiesta dal carico"}
Una molla verticale che sostiene da sola un peso soddisfa $kx=mg$. Con $m=1\,\mathrm{kg}$, $g=10\,\mathrm{N/kg}$ e $k=200\,\mathrm{N/m}$, l'allungamento è $x=0{,}05\,\mathrm m$.
La stessa relazione di equilibrio può essere usata orizzontalmente: la forza elastica deve uguagliare la risultante opposta delle altre forze lungo l'asse. La deformazione trovata deve restare entro il campo elastico lineare assunto.
:::

## Piani inclinati

:::teorema{#piano titolo="Assi parallelo e perpendicolare al piano"}
Su un piano inclinato si scelgono assi lungo il piano e perpendicolari ad esso. Se il triangolo del piano ha altezza h, base b e lunghezza L, le componenti del peso hanno moduli
$$
P_\parallel=P\frac hL,\qquad P_\perp=P\frac bL.
$$
I due rapporti derivano dalla similitudine dei triangoli costruiti con il peso e le sue proiezioni. Per un triangolo 3-4-5 e peso 10 N, le componenti sono 6 N lungo il piano e 8 N perpendicolari.
Senza altre forze perpendicolari, la normale vale $N=P_\perp$. Una corda parallela a un piano liscio deve equilibrare $P_\parallel$.
:::

## Attrito e possibilità di quiete

:::teorema{#attrito-equilibrio titolo="Prima la forza richiesta, poi il limite"}
Si calcola l'attrito necessario all'equilibrio e si verifica
$$
f_{\mathrm{richiesto}}\leq\mu_sN.
$$
Su un piano inclinato senza altre forze parallele, $f_{\mathrm{richiesto}}=P_\parallel$ e l'attrito punta verso l'alto. Il coefficiente minimo è $\mu_{s,\min}=P_\parallel/N$, purché N sia positivo.
Se servono 9 N e il limite è 7 N, nessun valore statico ammissibile equilibra il corpo. Se il limite è 12 N, l'attrito effettivo resta 9 N.
:::

## Corde inclinate simmetriche

:::teorema{#corde-inclinate titolo="Somma delle componenti verticali"}
Due corde simmetriche hanno tensioni uguali. Le componenti orizzontali si annullano e le verticali devono sommare il peso.
Se la componente verticale di ciascuna tensione è $\dfrac45T$, allora $2\cdot\dfrac45T=P$. Per P=16 N si trova T=10 N. Il valore supera metà del peso perché ogni corda fornisce anche una componente orizzontale, che viene annullata dall'altra.
:::

## Contatto con un piano

:::osservazione{#contatto titolo="Normale e forze verticali"}
Un corpo fermo sul tavolo, aiutato da una trazione verticale T verso l'alto, soddisfa $N+T=P$. Per P=20 N e T=6 N, la normale è 14 N.
Il risultato deve essere non negativo. Se la trazione supera il peso, il tavolo non può applicare una forza verso il basso per conservarne il contatto: la configurazione statica assunta non è più possibile.
:::

## Corpi premuti contro una parete

:::teorema{#parete titolo="Normale orizzontale e attrito verticale"}
Una spinta orizzontale F può premere un corpo contro una parete verticale. Se non vi sono altre forze orizzontali, la normale ha modulo N=F. Per impedirne la discesa, l'attrito deve equilibrare il peso.
Il limite statico richiede $P\leq\mu_sF$. La spinta minima è quindi $F_{\min}=P/\mu_s$ per coefficiente positivo. Un corpo di peso 10 N con $\mu_s=0{,}5$ richiede almeno 20 N di spinta. In questo caso l'attrito è verso l'alto e la normale è orizzontale.
:::
