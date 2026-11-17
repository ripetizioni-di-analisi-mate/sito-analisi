---
titolo: Lavoro, energia e potenza
sommario: Lavoro con segno, bilanci dell’energia meccanica, attrito, potenza e rendimento.
---

## Lavoro di una forza costante

:::definizione{#lavoro titolo="Componente lungo lo spostamento"}
Si consideri una forza $\vec F$ costante che agisca mentre il suo punto di applicazione si sposta di $\Delta\vec r$. Il **lavoro** misura l’energia trasferita dall’azione di quella forza durante lo spostamento. Indicato con $s=|\Delta\vec r|$ il modulo dello spostamento e con $\theta$ l’angolo tra i due vettori, si ha
$$
W=\vec F\cdot\Delta\vec r=(F\cos\theta)s .
$$
La componente $F_s=F\cos\theta$ ha un segno. Per $\theta$ acuto il lavoro è positivo, per $\theta$ ottuso è negativo, per $\theta=90^\circ$ è nullo. Anche una forza intensa compie lavoro nullo se il punto di applicazione rimane fermo. Il lavoro è uno scalare e si misura in joule, con $1\,\mathrm J=1\,\mathrm{N\cdot m}$.

Quando agiscono più forze, si può sommare il lavoro di ciascuna oppure proiettare prima la risultante sullo spostamento. I due procedimenti danno lo stesso valore, poiché il prodotto scalare è distributivo. Su un piano orizzontale fisso, per esempio, il peso e la normale sono perpendicolari allo spostamento orizzontale. Entrano nell’equilibrio verticale e possono servire a calcolare l’attrito, mentre il loro lavoro diretto è zero.
:::

:::esempio{titolo="Trazione inclinata e resistenza orizzontale"}
Una corda tira una cassa con $20\,\mathrm N$ a $60^\circ$ sopra l’orizzontale. La cassa percorre $4\,\mathrm m$ verso destra e l’attrito vale $6\,\mathrm N$. Proiettando la tensione lungo lo spostamento si trova $20\cos 60^\circ=10\,\mathrm N$. Ne segue
$$
W_{\mathrm{net}}=10\cdot4\,\mathrm J-6\cdot4\,\mathrm J=16\,\mathrm J.
$$
Il segno positivo del lavoro risultante indica un aumento dell’energia cinetica della cassa. I $40\,\mathrm J$ della trazione eccedono i $24\,\mathrm J$ assorbiti dall’interazione con la superficie.

::grafico{assi=0 uguale=1 vettori="0,0,4,0,s;0,0,1.7,2.944,F;0,0,-1,0,f" xmin=-2 xmax=5 ymin=-1 ymax=4 titolo="La forza di trazione forma un angolo di $60^\circ$ con lo spostamento"}
:::

## Lavoro nei grafici

:::osservazione{#lavoro-variabile titolo="Area sotto il grafico forza-posizione"}
Se la componente $F_x$ varia durante un percorso rettilineo, su un piccolo tratto si approssima il lavoro con $F_x\,\Delta x$. La somma sui tratti, nel limite di una suddivisione fine, è l’**area orientata** tra il grafico di $F_x$ e l’asse delle posizioni. Nel moto verso $x$ crescenti si contano positivamente le regioni sopra l’asse e negativamente le regioni sotto l’asse. Percorrere lo stesso tratto nel verso opposto cambia il segno del lavoro della stessa legge $F_x(x)$.

La coordinata orizzontale è la posizione. L’area sotto un grafico forza-tempo rappresenta invece l’impulso, perché le sue unità sono $\mathrm{N\cdot s}$ invece di $\mathrm{N\cdot m}$. Un’area in un grafico $F_x$-$x$ si calcola con un triangolo, un rettangolo o un trapezio quando il grafico è a tratti rettilineo. I livelli costanti di forza corrispondono ai rettangoli.
:::

:::esempio{titolo="Regioni di segno opposto"}
Da $0$ a $2\,\mathrm m$ la forza passa linearmente da zero a $6\,\mathrm N$. Da $2$ a $4\,\mathrm m$ vale $-1\,\mathrm N$. Il triangolo ha area $2\cdot6/2\,\mathrm J=6\,\mathrm J$. Il contributo del rettangolo è $-1\cdot2\,\mathrm J=-2\,\mathrm J$. La somma algebrica è quindi $4\,\mathrm J$. L’eventuale salto istantaneo della forza in $x=2\,\mathrm m$ non aggiunge lavoro, perché accade a una sola posizione.

::grafico{linee="0,0 2,6;2,-1 4,-1" area="3*x;0;0;2|-1;0;2;4" punti="2,6,pieno;4,-1,pieno" xmin=0 xmax=5 ymin=-3 ymax=7 nomi="x (m),F_x (N)" titolo="Il triangolo contribuisce $+6\,\mathrm J$ e il rettangolo $-2\,\mathrm J$"}
:::

## Energia cinetica

:::teorema{#energia-cinetica titolo="Teorema dell’energia cinetica"}
In un riferimento inerziale, per un punto materiale di massa costante, l’energia cinetica è $K=\dfrac12mv^2$, dove $v$ è il modulo della velocità. Il lavoro della risultante fra due posizioni è
$$
W_{\mathrm{tot}}=K_f-K_i.
$$
Con forza costante lungo un asse, si sceglie lo stesso verso positivo per forza, spostamento e velocità. L’equazione di Newton dà $W_{\mathrm{tot}}=ma\Delta x$. Dalla legge $v_f^2-v_i^2=2a\Delta x$ segue $ma\Delta x=\dfrac12m(v_f^2-v_i^2)$. Per forze variabili il ragionamento si applica su intervalli brevi. Sommando, le variazioni di energia intermedie si cancellano.

L’energia cinetica è positiva in movimento e dipende dalla velocità nel riferimento scelto. Due stati con velocità uguali in modulo e opposte in verso hanno la stessa $K$. Il lavoro totale nullo implica che i moduli iniziale e finale coincidono. Il verso può cambiare, come in una curva a velocità scalare costante, dove la forza risultante è istante per istante perpendicolare alla velocità.
:::

:::esempio{titolo="Arresto con forza costante"}
Un carrello di $4\,\mathrm{kg}$ si muove a $5\,\mathrm{m/s}$ e una forza resistente di $10\,\mathrm N$ lo arresta. L’energia iniziale è $\dfrac12\cdot4\cdot5^2\,\mathrm J=50\,\mathrm J$ e quella finale è zero. Poiché il lavoro resistente è $-10d$ in joule quando $d$ è espresso in metri, $-10d=-50$ dà $d=5\,\mathrm m$. Raddoppiare la velocità quadruplica la distanza di arresto se massa e forza sono le stesse. Questa previsione cessa di valere se la forza resistente cambia durante la frenata.

::grafico{f="2*x^2" punti="5,50,pieno,A;0,0,pieno,B" xmin=0 xmax=6 ymin=0 ymax=74 nomi="v (m/s),K (J)" titolo="Per questo carrello $K=2v^2$, in unità SI"}
:::

## Forze conservative ed energia potenziale

:::definizione{#potenziale titolo="Energia associata alla configurazione"}
Una forza è **conservativa** se il lavoro fra due configurazioni dipende soltanto dagli estremi. Si assegna un’energia potenziale $U$ alle configurazioni scegliendo la relazione $W_c=-\Delta U$. In un percorso chiuso le due configurazioni coincidono, quindi $\Delta U=0$ e il lavoro totale della forza conservativa è nullo. Un cambiamento del livello zero trasla tutti i valori di $U$ della stessa quantità e lascia invariato il lavoro.

Vicino alla superficie terrestre la gravità è approssimativamente uniforme. Per il sistema corpo-Terra si usa $U_g=mgh$, con $h$ quota rispetto al livello scelto. Se il corpo sale, $U_g$ cresce e il peso compie lavoro negativo. Scendendo, $U_g$ diminuisce e il peso compie lavoro positivo. Per traiettorie molto più brevi del raggio terrestre la formula è utilizzabile; fuori da tale approssimazione si studia il potenziale gravitazionale.

Una molla ideale esercita $F_x=-kx$, dove $x$ è la deformazione con segno rispetto alla lunghezza naturale. Il lavoro della molla da $x=0$ a $x=d$ è $-\dfrac12 kd^2$. Ne deriva $U_e=\dfrac12 kx^2$, prendendo lo zero alla lunghezza naturale. Un allungamento e una compressione di uguale modulo immagazzinano la stessa energia, perché la deformazione compare al quadrato. Le forze elastiche associate hanno invece segno opposto.
:::

:::esempio{titolo="Dalla compressione all’allungamento"}
Per $k=200\,\mathrm{N/m}$, le configurazioni $x=-0{,}10\,\mathrm m$ e $x=+0{,}10\,\mathrm m$ hanno entrambe energia elastica $1\,\mathrm J$. Durante il tragitto la molla prima cede $1\,\mathrm J$ nel tornare alla lunghezza naturale e poi riassorbe $1\,\mathrm J$ nell’allungarsi. Il lavoro complessivo della molla è zero, anche se l’energia potenziale cambia nei singoli tratti.

::grafico{f="100*x^2" punti="-0.1,1,pieno,A;0.1,1,pieno,B" xmin=-0.18 xmax=0.18 ymin=0 ymax=3.5 nomi="x (m),U_e (J)" titolo="Le due deformazioni hanno la stessa energia elastica"}
:::

## Conservazione e dissipazione

:::teorema{#bilancio-energia titolo="Bilancio dell’energia meccanica"}
Per un sistema descritto da $K$ e dalle energie potenziali selezionate, l’**energia meccanica** è $E=K+U$. Dividendo il lavoro totale in contributi conservativi e altre azioni si ottiene
$$
\Delta K=W_c+W_{\mathrm{nc}},
\qquad
\Delta(K+U)=W_{\mathrm{nc}}.
$$
Prima si scelgono sistema e configurazioni, poi si decide quali interazioni entrano in $U$. Ogni forza si conta una sola volta. Se la gravità è già in $U_g$, aggiungere il lavoro del peso al secondo membro conterebbe due volte lo stesso trasferimento. Se tutti i contributi residui hanno somma nulla, $E_i=E_f$. Per un corpo che scende senza attrito e parte da fermo, il bilancio dà $\dfrac12mv^2=mgh$. La massa si semplifica e resta $v=\sqrt{2gh}$.

L’attrito dinamico di una superficie fissa dissipa energia meccanica. Per una superficie orizzontale e sole forze verticali peso e normale, $N=mg$ e il suo lavoro vale $W_{\mathrm{attr}}=-\mu_dmg\,s$. In un percorso composto da tratti diversi si calcola questo lavoro su ciascun tratto con la sua lunghezza e la normale pertinente. Quando il piano è inclinato e nessun’altra forza ha componente normale, $N=mg\cos\alpha$. Un lavoro non conservativo può anche essere positivo, come quello di una persona che spinge una cassa: il criterio è la somma di tutti i contributi residui.
:::

:::esempio{titolo="Percorso con una tratta dissipativa"}
Un carrello di $2\,\mathrm{kg}$ parte da fermo e scende di $3\,\mathrm m$ senza attrito. In un tratto orizzontale successivo l’attrito compie lavoro $-12\,\mathrm J$. Con $g=9{,}81\,\mathrm{m/s^2}$, la discesa fornisce $58{,}86\,\mathrm J$. Dopo il tratto orizzontale rimangono $46{,}86\,\mathrm J$ di energia cinetica, perciò $v=\sqrt{46{,}86}\,\mathrm{m/s}\simeq6{,}85\,\mathrm{m/s}$. Se il lavoro resistente richiesto dalla traccia eccedesse $58{,}86\,\mathrm J$, il carrello si fermerebbe prima del punto finale. Una radice di argomento negativo segnalerebbe che quel punto non è raggiungibile nel modello.

::grafico{linee="0,3 3,0 6,0" punti="0,3,pieno,A;3,0,pieno,B;6,0,pieno,C" xmin=-.6 xmax=6.7 ymin=-.8 ymax=3.9 nomi="s,h (m)" titolo="La discesa da A a B precede il tratto dissipativo da B a C. La posizione orizzontale è schematica"}
:::

## Potenza e rendimento

:::definizione{#potenza titolo="Velocità del trasferimento di energia"}
La **potenza media** di un trasferimento è $P_m=\dfrac{W}{\Delta t}$. La potenza istantanea di una forza è il prodotto scalare $P=\vec F\cdot\vec v$, perché su un intervallo breve $\Delta\vec r\simeq\vec v\,\Delta t$. Il segno dipende dalla componente della forza lungo la velocità. Una resistenza applicata quando il corpo si muove fornisce potenza meccanica negativa. Il watt equivale a un joule al secondo. Il kilowattora misura energia, perché moltiplica una potenza per un tempo, e vale $3{,}6\cdot10^6\,\mathrm J$.

Il **rendimento** confronta il risultato utile con l’energia in ingresso nello stesso intervallo. Scrivendo $\eta=\dfrac{E_{\mathrm{utile}}}{E_{\mathrm{fornita}}}$ si specifica quali trasferimenti rientrano nel numeratore. Per una macchina che lavora in regime stazionario si può usare il rapporto delle potenze medie, poiché entrambe sono riferite allo stesso tempo. Un rendimento dell’$80\%$ significa che la parte utile è $0{,}80$ volte l’energia ricevuta. Se si conosce la parte utile, l’energia in ingresso si ottiene dividendo per $0{,}80$.
:::

:::esempio{titolo="Potenza richiesta in salita"}
Un montacarichi solleva a velocità costante una massa di $50\,\mathrm{kg}$ per $8\,\mathrm m$ in $10\,\mathrm s$. Con $g=9{,}81\,\mathrm{m/s^2}$ il lavoro utile è $3924\,\mathrm J$ e la potenza utile media è $392{,}4\,\mathrm W$. Se il rendimento complessivo vale $0{,}75$, la potenza in ingresso deve essere $523{,}2\,\mathrm W$. La differenza di $130{,}8\,\mathrm W$ è la potenza che non si ritrova come innalzamento della massa. In una fase con accelerazione, la variazione dell’energia cinetica sarebbe un termine aggiuntivo.
:::
