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
La componente $F_s=F\cos\theta$ ha un segno. Per un angolo acuto il lavoro è positivo, per un angolo ottuso è negativo, per $\theta=90^\circ$ è nullo. Anche una forza intensa compie lavoro nullo se il punto di applicazione rimane fermo. Il lavoro è uno scalare e si misura in joule, con $1\,\mathrm J=1\,\mathrm{N\cdot m}$.

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

:::esempio{#trazione-inversa titolo="Ricavare la trazione dal bilancio dei lavori"}
Una slitta percorre orizzontalmente $6\,\mathrm m$. La fune forma un angolo di $60^\circ$ e la resistenza costante vale $4\,\mathrm N$. Se il lavoro totale è $36\,\mathrm J$, quello della trazione deve compensare la resistenza e lasciare i $36\,\mathrm J$ richiesti. Il lavoro resistente vale $-24\,\mathrm J$, quindi la trazione deve compiere $60\,\mathrm J$.
$$
F\cos60^\circ=\dfrac{60\,\mathrm J}{6\,\mathrm m}=10\,\mathrm N,\qquad F=20\,\mathrm N.
$$
Il bilancio ricava prima la forza orizzontale. Per recuperare il modulo della tensione occorre anche l'angolo. Una trazione perpendicolare allo spostamento renderebbe impossibile il bilancio assegnato, qualunque fosse il suo modulo.

Per una forza costante, sommare i lavori lungo più segmenti dà lo stesso risultato che usare lo spostamento fra gli estremi. Nel disegno, il tratto iniziale verso destra e quello finale verso sinistra si compensano per tre metri. Lo spostamento netto ha componenti $(1,3)\,\mathrm m$. La lunghezza percorsa, invece, serve per calcolare il lavoro di una resistenza sempre opposta al moto.

::grafico{assi=0 uguale=1 vettori="0,0,4,0;4,0,4,3;4,3,1,3" segmenti="0,0,1,3" punti="0,0,pieno,A;1,3,pieno,B" xmin=-.52 xmax=4.51 ymin=-.50 ymax=3.56 titolo="La linea tratteggiata unisce gli estremi A e B. La somma degli spostamenti dei singoli tratti coincide con questo vettore."}
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

:::esempio{#lavoro-accumulato titolo="Punto in cui il lavoro accumulato si azzera"}
Un cursore avanza da $x=0$ a $x=6\,\mathrm m$ mentre la forza lungo l'asse segue $F_x=(6-2x)\,\mathrm N$, con il valore di $x$ espresso in metri. La forza si annulla in $x=3\,\mathrm m$. Fino a quel punto il lavoro accumulato cresce di $9\,\mathrm J$, perché il grafico forma un triangolo di base $3\,\mathrm m$ e altezza $6\,\mathrm N$. Nel resto del percorso compare un triangolo uguale sotto l'asse. Al termine il lavoro totale è zero. Il punto in cui la forza si annulla indica un massimo del lavoro accumulato, mentre il suo azzeramento richiede che si compensino le due aree.

::grafico{linee="0,6 6,-6" area="6-2*x;0;0;3|0;6-2*x;3;6" punti="0,6,pieno;3,0,pieno;6,-6,pieno" xmin=0 xmax=7 ymin=-7 ymax=8 nomi="x (m),F_x (N)" titolo="Il lavoro accumulato cresce fino a 3 m e torna a zero a 6 m"}

La stessa regola delle aree vale per altre coppie di grandezze. L’unità del prodotto fra ordinata e ascissa chiarisce che cosa si sta sommando.

| Grafico | Unità dell’area | Grandezza |
| --- | --- | --- |
| $F_x$ rispetto a $x$ | $\mathrm{N\,m}$ | Lavoro |
| $F_x$ rispetto a $t$ | $\mathrm{N\,s}$ | Impulso |
| $P$ rispetto a $t$ | $\mathrm{W\,s}$ | Energia trasferita |
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

:::esempio{#frenata-parziale titolo="Frenata interrotta a metà percorso"}
Una forza resistente costante arresterebbe un corpo in $12\,\mathrm m$. Dopo $6\,\mathrm m$ il lavoro resistente ha raggiunto metà del suo valore finale, quindi resta metà dell'energia cinetica iniziale. Il teorema dà
$$
\dfrac{K}{K_i}=\dfrac{1}{2},\qquad \dfrac{v}{v_i}=\dfrac{1}{\sqrt 2}.
$$
La distanza residua è ancora metà della distanza di arresto, ma la velocità è circa il settanta per cento di quella iniziale. Al passaggio dalla frazione di energia alla frazione di velocità si estrae la radice. Il risultato vale anche senza conoscere la forza o la massa, purché la resistenza sia costante lungo il tratto.

::grafico{curve="t,1-t/12,0,12;t,sqrt(1-t/12),0,12" punti="6,.5,pieno;6,.707107,pieno" segmenti="6,0,6,.707107" xmin=0 xmax=13 ymin=0 ymax=1.15 nomi="s (m),frazione" legenda="K/K_i;v/v_i" titolo="A metà frenata resta metà dell’energia cinetica. Il modulo della velocità vale circa il 71% di quello iniziale."}
:::

## Forze conservative ed energia potenziale

:::definizione{#potenziale titolo="Energia associata alla configurazione"}
Una forza è **conservativa** se il lavoro fra due configurazioni dipende soltanto dagli estremi. Si assegna un’energia potenziale $U$ alle configurazioni scegliendo la relazione $W_c=-\Delta U$. In un percorso chiuso le due configurazioni coincidono, quindi $\Delta U=0$ e il lavoro totale della forza conservativa è nullo. Un cambiamento del livello zero trasla tutti i valori di $U$ della stessa quantità e lascia invariato il lavoro.

Vicino alla superficie terrestre la gravità è approssimativamente uniforme. Per il sistema corpo-Terra si usa $U_g=mgh$, con $h$ quota rispetto al livello scelto. Se il corpo sale, $U_g$ cresce e il peso compie lavoro negativo. Scendendo, $U_g$ diminuisce e il peso compie lavoro positivo. Per traiettorie molto più brevi del raggio terrestre la formula è utilizzabile; fuori da tale approssimazione si studia il potenziale gravitazionale.

Una molla ideale esercita $F_x=-kx$, dove $x$ è la deformazione con segno rispetto alla lunghezza naturale. Il lavoro della molla da $x=0$ a $x=d$ è $-\dfrac12 kd^2$. Ne deriva $U_e=\dfrac12 kx^2$, prendendo lo zero alla lunghezza naturale. Un allungamento e una compressione di uguale modulo immagazzinano la stessa energia, perché la deformazione compare al quadrato. Le forze elastiche associate hanno invece segno opposto.
:::

:::esempio{titolo="Dalla compressione all’allungamento"}
Per $k=200\,\mathrm{N/m}$, le configurazioni $x=-0{,}10\,\mathrm m$ e $x=+0{,}10\,\mathrm m$ hanno entrambe energia elastica $1\,\mathrm J$. Durante il tragitto la molla prima cede $1\,\mathrm J$ nel tornare alla lunghezza naturale e poi riassorbe $1\,\mathrm J$ nell’allungarsi. Il lavoro complessivo della molla è zero, anche se l’energia potenziale cambia nei singoli tratti.

::grafico{f=".01*x^2" punti="-10,1,pieno,A;10,1,pieno,B" xmin=-18 xmax=18 ymin=0 ymax=3.5 nomi="x (cm),Uₑ (J)" titolo="Le due deformazioni hanno la stessa energia elastica"}
:::

:::osservazione{#molla-verticale titolo="Posizione di equilibrio di una molla verticale"}
Per una massa sospesa a una molla, si consideri positivo verso il basso l'allungamento $x$ e si prenda zero dell'energia gravitazionale alla lunghezza naturale. Il potenziale totale è
$$
U=\dfrac{1}{2}kx^2-mgx
  =\dfrac{1}{2}k\left(x-\dfrac{mg}{k}\right)^2-\dfrac{(mg)^2}{2k}.
$$
Il minimo si trova a $x=\dfrac{mg}{k}$, dove la forza elastica compensa il peso. Configurazioni equidistanti da questo punto hanno lo stesso potenziale totale. Per i calcoli si può porre lo zero del potenziale totale al minimo. Si conserva così la stessa differenza di energia fra configurazioni, perché la costante sottratta compare sia all'inizio sia alla fine.

Con $k=200\,\mathrm{N/m}$, massa $3\,\mathrm{kg}$ e $g=10\,\mathrm{m/s^2}$, l’equilibrio è a $15\,\mathrm{cm}$. A $5\,\mathrm{cm}$ e a $25\,\mathrm{cm}$ il potenziale è lo stesso, $-1{,}25\,\mathrm J$ con lo zero scelto alla lunghezza naturale.

::grafico{f=".01*x^2-.3*x" punti="5,-1.25,pieno;15,-2.25,pieno,E;25,-1.25,pieno" segmenti="5,-1.25,25,-1.25;15,0,15,-2.25" xmin=0 xmax=34 ymin=-2.75 ymax=2 nomi="x (cm),U (J)" titolo="Il potenziale totale ha un minimo in E, sotto la lunghezza naturale. I punti equidistanti da E hanno la stessa energia."}
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

:::esempio{#contorno-sistema titolo="Attrito, contorno del sistema ed energia termica"}
Un pattino parte con $50\,\mathrm J$ di energia cinetica e termina un tratto orizzontale con $32\,\mathrm J$. Se si considera solo il pattino come punto materiale, il teorema dell'energia cinetica assegna alla risultante un lavoro di $-18\,\mathrm J$. Se la forza responsabile è l'attrito della pista, il lavoro resistente ha quel valore. Allargando invece il sistema a pattino e pista e supponendo trascurabili gli scambi con l'esterno, la perdita meccanica di $18\,\mathrm J$ corrisponde a un aumento dell'energia interna dell'insieme. Il bilancio energetico determina l'aumento totale. Per stabilire quanto si scaldi ciascun corpo occorrono informazioni sul contatto e sui materiali.
:::

:::esempio{#vincolo-guida titolo="Energia e contatto in una guida circolare"}
Una pallina puntiforme parte da ferma a quota $H$ rispetto al punto più basso della guida interna circolare di raggio $R$. La guida è fissa e liscia. Alla sommità, la normale e il peso puntano verso il centro. Al limite del distacco la normale vale zero, quindi $\dfrac{v^2}{R}=g$. Il bilancio energetico dalla partenza alla sommità dà $gH=2gR+\dfrac{v^2}{2}$, da cui $H_{\rm min}=\dfrac{5R}{2}$. Durante il giro la velocità è minima in cima e la componente del peso verso il centro è massima lì. È dunque la sommità a fissare il requisito di contatto. L’energia da sola stabilisce la velocità, mentre l’equazione radiale stabilisce se la guida può esercitare la forza richiesta.

::grafico{assi=0 uguale=1 linee="-3,2.5 -2.65,2.5;-1.08,0 0,0" curve="-2.65+1.57*t,2.5*(1-3*t^2+2*t^3),0,1;cos(t),1+sin(t),0,6.283185" segmenti="-3,0,-.15,0;-2.95,0,-2.95,2.5;0,1,1,1" vettori="0,2,0,1.39,mg" punti="-2.65,2.5,pieno,A;0,2,pieno;0,0,pieno" etichette="-2.85,1.52,H;.44,1.08,R" xmin=-3.45 xmax=1.45 ymin=-.28 ymax=2.88 titolo="Al contatto limite in cima resta soltanto il peso lungo il raggio. Le quote sono misurate dal punto più basso."}
:::

## Potenza e rendimento

:::definizione{#potenza titolo="Velocità del trasferimento di energia"}
La **potenza media** di un trasferimento è $P_m=\dfrac{W}{\Delta t}$. La potenza istantanea di una forza è il prodotto scalare $P=\vec F\cdot\vec v$, perché su un intervallo breve $\Delta\vec r\simeq\vec v\,\Delta t$. Il segno dipende dalla componente della forza lungo la velocità. Una resistenza applicata quando il corpo si muove fornisce potenza meccanica negativa. Il watt equivale a un joule al secondo. Il kilowattora misura energia, perché moltiplica una potenza per un tempo, e vale $3{,}6\cdot10^6\,\mathrm J$.

Il **rendimento** confronta il risultato utile con l’energia in ingresso nello stesso intervallo. Scrivendo $\eta=\dfrac{E_{\mathrm{utile}}}{E_{\mathrm{fornita}}}$ si specifica quali trasferimenti rientrano nel numeratore. Per una macchina che lavora in regime stazionario si può usare il rapporto delle potenze medie, poiché entrambe sono riferite allo stesso tempo. Un rendimento dell’$80\%$ significa che la parte utile è $0{,}80$ volte l’energia ricevuta. Se si conosce la parte utile, l’energia in ingresso si ottiene dividendo per $0{,}80$.
:::

:::esempio{titolo="Potenza richiesta in salita"}
Un montacarichi solleva a velocità costante una massa di $50\,\mathrm{kg}$ per $8\,\mathrm m$ in $10\,\mathrm s$. Con $g=9{,}81\,\mathrm{m/s^2}$ il lavoro utile è $3924\,\mathrm J$ e la potenza utile media è $392{,}4\,\mathrm W$. Se il rendimento complessivo vale $0{,}75$, la potenza in ingresso deve essere $523{,}2\,\mathrm W$. La differenza di $130{,}8\,\mathrm W$ è la potenza che non si ritrova come innalzamento della massa. In una fase con accelerazione, la variazione dell’energia cinetica sarebbe un termine aggiuntivo.
:::

:::esempio{#potenza-ciclo titolo="Potenza media nelle fasi di un ciclo"}
Una macchina fornisce $300\,\mathrm W$ per $4\,\mathrm s$ e poi resta ferma per $6\,\mathrm s$, senza trasferimenti utili nell'intervallo di pausa. Il lavoro utile del ciclo è $1200\,\mathrm J$. La potenza media va riferita ai dieci secondi complessivi.
$$
P_m=\dfrac{300\cdot4\,\mathrm J}{10\,\mathrm s}=120\,\mathrm W.
$$
Una macchina che producesse costantemente $120\,\mathrm W$ fornirebbe la stessa energia dopo un ciclo. Nei primi quattro secondi, però, la sua energia utile sarebbe minore. L'equivalenza fra potenze medie riguarda gli estremi dell'intervallo sul quale si calcola la media.

::grafico{linee="0,300 4,300;4,0 10,0" area="300;0;0;4" segmenti="0,120,10,120;4,0,4,300" xmin=0 xmax=11 ymin=0 ymax=330 nomi="t (s),P (W)" titolo="L’area del rettangolo fino a 4 s equivale a quella corrispondente a 120 W per tutti i 10 s."}
:::
