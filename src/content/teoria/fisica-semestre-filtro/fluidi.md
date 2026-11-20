---
titolo: Meccanica dei fluidi e modelli della circolazione
sommario: Pressioni misurate e assolute, equilibrio e galleggiamento, conservazione della massa e dell'energia, viscosità e reti idrauliche, interfacce e capillarità.
---
:::osservazione{titolo="Tre bilanci per i fluidi"}
Un **fluido** è una sostanza che scorre, cioè un liquido o un gas. Il capitolo ha tre parti. La prima riguarda i fluidi fermi, in cui la pressione dipende dalla profondità. La seconda riguarda i fluidi in movimento, descritti dalla conservazione della massa e dell'energia e dall'attrito interno, detto viscosità. La terza riguarda la superficie dei liquidi, che si comporta come una pellicola tesa. Gli esempi vengono in gran parte dalla circolazione del sangue e dalla respirazione.
:::

## Stati della materia, densità e pressione

:::osservazione{titolo="Solidi, liquidi e gas"}
Un solido ha forma e volume propri. Un fluido non ha forma propria e prende quella del recipiente. I fluidi sono di due tipi.

- Un **liquido** ha un volume proprio. È quasi **incomprimibile**, cioè la sua densità resta praticamente la stessa anche se la pressione aumenta molto.
- Un **gas** non ha volume proprio e occupa tutto lo spazio disponibile. È comprimibile, cioè la sua densità cambia con la pressione.
:::

:::definizione{#pressione-densita titolo="Densità e pressione"}
Due grandezze descrivono un fluido. La **densità** $\rho$ è la massa contenuta in un'unità di volume. La **pressione** $p$ è la forza che agisce perpendicolarmente su una superficie, divisa per l'area della superficie.
$$
\rho=\dfrac{m}{V},\qquad p=\dfrac{F_\perp}{A}.
$$
La densità si misura in $\mathrm{kg/m^3}$. L'acqua ha densità $1000\,\mathrm{kg/m^3}$ e il sangue circa $1060\,\mathrm{kg/m^3}$. La pressione si misura in pascal, $\mathrm{Pa}=\mathrm{N/m^2}$. In un fluido fermo la pressione in un punto è la stessa in tutte le direzioni, quindi è uno scalare. La forza che il fluido esercita su una parete è sempre perpendicolare alla parete.
:::

:::osservazione{titolo="Forza, riferimento e conversioni"}
Dalla definizione segue $F=pA$. La stessa forza su un'area più piccola produce una pressione maggiore. Una persona di peso $700\,\mathrm{N}$ in piedi su due scarpe di area totale $350\,\mathrm{cm^2}=0{,}035\,\mathrm{m^2}$ esercita sul pavimento una pressione di $\dfrac{700}{0{,}035}=2{,}0\cdot10^4\,\mathrm{Pa}$. Su tacchi a spillo di area totale $2\,\mathrm{cm^2}$ la pressione è 175 volte maggiore.

La pressione si esprime in due modi, secondo il valore preso come zero.

- La **pressione assoluta** è misurata a partire dal vuoto. È sempre positiva.
- La **pressione relativa** è la differenza fra la pressione assoluta e la pressione atmosferica. È quella indicata da quasi tutti gli strumenti, compreso lo sfigmomanometro con cui si misura la pressione del sangue.
$$
p_{\mathrm{rel}}=p_{\mathrm{ass}}-p_{\mathrm{atm}}.
$$
Una pressione relativa negativa indica una pressione assoluta minore di quella atmosferica. Con $p_{\mathrm{atm}}=101\,\mathrm{kPa}$, una pressione relativa di $-20\,\mathrm{kPa}$ corrisponde a una pressione assoluta di $101-20=81\,\mathrm{kPa}$, come nella figura. Nella differenza fra due pressioni la pressione atmosferica si elimina, quindi la differenza è la stessa con i due modi.

In medicina la pressione si misura in millimetri di mercurio, con $1\,\mathrm{mmHg}\simeq133{,}3\,\mathrm{Pa}$. L'atmosfera standard vale $1\,\mathrm{atm}=101325\,\mathrm{Pa}=760\,\mathrm{mmHg}$. Una pressione sanguigna di $120\,\mathrm{mmHg}$ è una pressione relativa e corrisponde a $120\cdot133{,}3\simeq1{,}6\cdot10^4\,\mathrm{Pa}$. Per i volumi e le aree servono le conversioni $1\,\mathrm{L}=10^{-3}\,\mathrm{m^3}$, $1\,\mathrm{mL}=10^{-6}\,\mathrm{m^3}$ e $1\,\mathrm{cm^2}=10^{-4}\,\mathrm{m^2}$.

![Scala con pressione assoluta di 81 kPa, pressione atmosferica di 101 kPa e differenza relativa di meno 20 kPa.](/figure/fisica-semestre-filtro/fluidi/pressure-it.svg)
:::

## Equilibrio idrostatico e manometri

:::osservazione{titolo="Bilancio di una colonna in quiete"}
In un liquido fermo la pressione aumenta con la profondità, perché ogni strato sostiene il peso del liquido che gli sta sopra. Si considera una colonna verticale di liquido, di area di base $A$ e altezza $h$. Sulla faccia superiore la pressione è $p_0$ e sulla base è $p$. La colonna è ferma, quindi la forza verso l'alto sulla base, $pA$, equilibra la forza verso il basso sulla faccia superiore, $p_0A$, più il peso della colonna, $\rho Ahg$. Da $pA=p_0A+\rho Ahg$, dividendo per $A$, si ottiene la legge seguente.
:::

:::teorema{#stevino titolo="Legge di Stevino"}
In un liquido fermo di densità $\rho$, la pressione a profondità $h$ sotto un livello in cui la pressione è $p_0$ vale:
$$
p=p_0+\rho gh.
$$
L'area $A$ non compare. La pressione dipende quindi solo dalla profondità e non dalla forma o dalla larghezza del recipiente. Ne segue che due punti alla stessa quota, nello stesso liquido fermo e senza interruzioni fra loro, hanno la stessa pressione. In acqua la pressione aumenta di circa $1\,\mathrm{atm}$ ogni $10\,\mathrm{m}$, perché $1000\cdot9{,}81\cdot10\simeq9{,}8\cdot10^4\,\mathrm{Pa}$.
:::

:::osservazione{titolo="Recipienti e colonne manometriche"}
La legge di Stevino è il principio di funzionamento degli strumenti che misurano la pressione con una colonna di liquido.

Il **manometro a U** è un tubo a forma di U che contiene un liquido. Un ramo è collegato al gas di cui si vuole misurare la pressione e l'altro è aperto all'aria. Se il gas ha pressione maggiore di quella atmosferica, spinge il liquido verso il basso nel proprio ramo e lo fa salire nell'altro. Il dislivello $\Delta h$ fra i due rami dà la pressione relativa del gas, $p_{\mathrm{gas}}-p_{\mathrm{atm}}=\rho g\Delta h$. In generale, lungo un tubo che contiene liquidi fermi, la pressione aumenta di $\rho gh$ quando si scende di $h$ e diminuisce della stessa quantità quando si sale. Se i liquidi sono più d'uno, in ogni tratto si usa la densità del liquido presente.

Il **barometro di Torricelli** misura la pressione atmosferica. È un tubo pieno di mercurio, chiuso in alto e capovolto in una vaschetta di mercurio. Il mercurio scende finché la colonna è alta circa $760\,\mathrm{mm}$, e sopra di essa resta uno spazio quasi vuoto. La pressione atmosferica, che agisce sulla vaschetta, sostiene la colonna:
$$
p_{\mathrm{atm}}-p_{\mathrm{top}}=\rho_{\mathrm{Hg}}gh.
$$
La pressione $p_{\mathrm{top}}$ sopra la colonna è quasi nulla, quindi $p_{\mathrm{atm}}=\rho_{\mathrm{Hg}}gh$. Con $\rho_{\mathrm{Hg}}=13600\,\mathrm{kg/m^3}$ e $h=0{,}760\,\mathrm{m}$ si ottiene $13600\cdot9{,}81\cdot0{,}760\simeq1{,}01\cdot10^5\,\mathrm{Pa}$. Da questo strumento viene l'unità millimetro di mercurio. L'altezza $h$ si misura in verticale, anche se il tubo è inclinato.
:::

:::esempio{titolo="Una differenza di quota"}
In una persona in piedi il cuore e un punto del braccio abbassato distano in verticale circa $0{,}40\,\mathrm{m}$. Il sangue ha densità $1060\,\mathrm{kg/m^3}$. Se il sangue fosse fermo, la differenza di pressione fra i due punti sarebbe:
$$
\Delta p=1060\cdot9{,}81\cdot0{,}40\,\mathrm{Pa}
\simeq4{,}16\cdot10^3\,\mathrm{Pa}\simeq31{,}2\,\mathrm{mmHg}.
$$
La pressione è maggiore nel punto più basso. Per questo motivo la pressione del sangue si misura sul braccio tenuto all'altezza del cuore: a un'altezza diversa lo strumento indicherebbe un valore più alto o più basso di alcune decine di mmHg.
:::

:::osservazione{titolo="Leggere il grafico idrostatico"}
![Pressione relativa in acqua in quiete: retta da zero a 19,62 kPa fra zero e due metri di profondità.](/figure/fisica-semestre-filtro/fluidi/hydrostatic-it.svg)
:::

## Pascal e Archimede

:::osservazione{titolo="Incrementi di pressione nel torchio"}
Un liquido chiuso in un recipiente trasmette le variazioni di pressione. Se si preme su un pistone, la pressione aumenta della stessa quantità in tutti i punti del liquido. Su questo si basa il **torchio idraulico**, formato da due cilindri di area diversa collegati fra loro e pieni di liquido, ciascuno chiuso da un pistone.
:::

:::teorema{#pascal-archimede titolo="Trasmissione della pressione e spinta"}
Il **principio di Pascal** afferma che una variazione di pressione applicata a un liquido chiuso si trasmette invariata a tutti i punti del liquido. Nel torchio idraulico la pressione sotto i due pistoni è la stessa, quindi:
$$
\dfrac{F_1}{A_1}=\dfrac{F_2}{A_2}.
$$
Una forza piccola sul pistone piccolo produce una forza grande sul pistone grande. Con $A_2=10A_1$ la forza è dieci volte maggiore.

Il **principio di Archimede** afferma che un corpo immerso in un fluido riceve una forza diretta verso l'alto, detta **spinta di Archimede**, uguale al peso del fluido che il corpo sposta:
$$
F_A=\rho_f gV_{\mathrm{sub}}.
$$
Nella formula $\rho_f$ è la densità del fluido, non quella del corpo, e $V_{\mathrm{sub}}$ è il volume della parte immersa. Un corpo di volume $2\,\mathrm{L}=2\cdot10^{-3}\,\mathrm{m^3}$ tutto immerso in acqua riceve una spinta di $1000\cdot9{,}81\cdot2\cdot10^{-3}\simeq19{,}6\,\mathrm{N}$, qualunque sia il materiale di cui è fatto.
:::

:::osservazione{titolo="Galleggiamento e forze di vincolo"}
La spinta esiste perché la pressione aumenta con la profondità. La faccia inferiore del corpo è più in basso di quella superiore, quindi il fluido la spinge verso l'alto con una forza maggiore di quella con cui spinge verso il basso la faccia superiore. Sul corpo agiscono due forze, il peso verso il basso e la spinta verso l'alto, e il confronto fra le due stabilisce che cosa accade.

- Se la densità del corpo è maggiore di quella del fluido, il peso supera la spinta e il corpo affonda.
- Se è minore, la spinta supera il peso e il corpo sale fino a galleggiare, con una parte fuori dal fluido.

Un corpo che galleggia è in equilibrio, quindi la spinta sulla parte immersa è uguale al peso, $\rho_fgV_{\mathrm{sub}}=\rho_cgV$. Ne segue la frazione di volume immersa:
$$
\dfrac{V_{\mathrm{sub}}}{V}=\dfrac{\rho_c}{\rho_f}.
$$
Il ghiaccio ha densità $917\,\mathrm{kg/m^3}$. In acqua di mare, di densità $1025\,\mathrm{kg/m^3}$, la frazione immersa è $\dfrac{917}{1025}\simeq0{,}89$. Di un iceberg emerge quindi circa l'11%.

Per un corpo tutto immerso la spinta non dipende dalla profondità, perché il volume spostato resta lo stesso. Un corpo più denso del fluido, appeso a un filo e immerso, tira il filo con una forza $T=mg-F_A$, minore del suo peso. Pesando un corpo in aria e in acqua si ricava così il suo volume.

Nel torchio idraulico il liquido che esce da un cilindro entra nell'altro, quindi i volumi spostati sono uguali, $A_1s_1=A_2s_2$, dove $s$ è lo spostamento di ciascun pistone. Il pistone grande si sposta meno di quello piccolo. Il lavoro è lo stesso dai due lati, $F_1s_1=F_2s_2$: il torchio moltiplica la forza e non l'energia.

![Forze su un cubo galleggiante: peso e spinta uguali, con il 60 per cento del volume immerso.](/figure/fisica-semestre-filtro/fluidi/buoyancy-it.svg)
:::

## Portata ed equazione di continuità

:::osservazione{titolo="Velocità e portata"}
Per un fluido che scorre in un tubo si usano due grandezze. La **velocità** $v$ indica quanto rapidamente si sposta il fluido. La **portata** $Q$ indica quanto volume di fluido attraversa una sezione del tubo in un secondo. Il cuore di un adulto a riposo, per esempio, ha una portata di circa $5\,\mathrm{L/min}$.
:::

:::teorema{#continuita titolo="Conservazione della massa"}
La **portata volumetrica** è il volume che attraversa una sezione diviso per il tempo, $Q=\dfrac{\Delta V}{\Delta t}$, e si misura in $\mathrm{m^3/s}$. È uguale all'area $A$ della sezione moltiplicata per la velocità media $\bar v$ del fluido. In un secondo, infatti, attraversa la sezione un cilindro di fluido di base $A$ e altezza $\bar v$. La **portata in massa** $\dot m$ è la massa che attraversa la sezione in un secondo.
$$
Q=A\bar v,\qquad \dot m=\rho Q.
$$
In un tubo senza perdite e senza diramazioni, in cui il moto non cambia nel tempo (moto **stazionario**), la massa che entra in un secondo è uguale a quella che esce. Questa è l'**equazione di continuità**:
$$
\rho_1A_1\bar v_1=\rho_2A_2\bar v_2.
$$
Per un liquido la densità è costante e si semplifica, quindi $A_1\bar v_1=A_2\bar v_2$: la portata è la stessa in ogni sezione. Dove il tubo si restringe il liquido scorre più veloce, e dove si allarga scorre più lento.
:::

:::osservazione{titolo="Conservazione, accumulo e aree"}
Per un tubo a sezione circolare $A=\pi r^2$, quindi l'area dipende dal quadrato del raggio. Se il raggio si dimezza l'area diventa un quarto e la velocità quadruplica.

L'equazione vale anche quando il tubo si divide in più rami. In una diramazione la portata che entra è uguale alla somma delle portate che escono. Nella circolazione l'aorta ha una sezione di circa $3\,\mathrm{cm^2}$ e il sangue vi scorre a circa $30\,\mathrm{cm/s}$. I capillari sono sottilissimi ma sono miliardi, e la loro area totale è circa $3000\,\mathrm{cm^2}$, mille volte quella dell'aorta. La portata è la stessa, quindi nei capillari la velocità è mille volte minore, circa $0{,}3\,\mathrm{mm/s}$. Questa lentezza dà il tempo necessario agli scambi con i tessuti.

L'equazione di continuità esprime la conservazione della massa, quindi vale anche per i fluidi viscosi. Per un gas, la cui densità cambia lungo il tubo, si conserva la portata in massa e non quella volumetrica.

![Due sezioni circolari di diametri nel rapporto due a uno: aree nel rapporto quattro a uno e velocità nel rapporto uno a quattro.](/figure/fisica-semestre-filtro/fluidi/continuity-it.svg)
:::

## Bernoulli e variazioni di sezione

:::osservazione{titolo="Il lavoro delle pressioni"}
L'equazione di Bernoulli è la conservazione dell'energia applicata a un fluido che scorre. Un volume di fluido possiede energia cinetica, perché si muove, ed energia potenziale, perché si trova a una certa quota. Inoltre il fluido che sta dietro lo spinge e compie lavoro su di esso, in misura proporzionale alla pressione. Se non c'è attrito la somma di questi tre contributi resta costante lungo il tubo.
:::

:::teorema{#bernoulli titolo="Bilancio energetico di un fluido ideale"}
Per un **fluido ideale**, cioè incomprimibile e senza viscosità, in moto stazionario, lungo il tubo vale:
$$
p+\dfrac12\rho v^2+\rho gz=\text{costante}.
$$
I tre termini sono energie per unità di volume e hanno l'unità di una pressione. Il termine $p$ è la pressione del fluido. Il termine $\dfrac12\rho v^2$ è l'energia cinetica per unità di volume. Il termine $\rho gz$ è l'energia potenziale per unità di volume, con $z$ quota misurata verso l'alto. Se uno dei tre aumenta, la somma degli altri due diminuisce della stessa quantità.
:::

:::osservazione{titolo="Applicazioni e limiti di Bernoulli"}
In un tubo orizzontale la quota è costante e l'equazione si riduce a $p+\dfrac12\rho v^2=\text{costante}$. Dove il fluido è più veloce la pressione è minore. Insieme all'equazione di continuità ne segue che in una strozzatura la velocità aumenta e la pressione diminuisce. Nella figura più avanti, l'acqua passa da $1\,\mathrm{m/s}$ a $3\,\mathrm{m/s}$ e la pressione diminuisce di $\dfrac12\cdot1000\cdot(3^2-1^2)=4000\,\mathrm{Pa}$.

Un secondo caso è lo svuotamento di un serbatoio aperto attraverso un piccolo foro, posto a una profondità $\Delta h$ sotto la superficie. Alla superficie e all'uscita del foro la pressione è quella atmosferica, e la superficie scende così lentamente che la sua velocità si trascura. L'equazione di Bernoulli dà allora $\rho g\Delta h=\dfrac12\rho v^2$, da cui la **legge di Torricelli**:
$$
v=\sqrt{2g\Delta h}.
$$
È la stessa velocità di un corpo che cade da fermo da un'altezza $\Delta h$. Da un foro posto $0{,}80\,\mathrm{m}$ sotto la superficie l'acqua esce a $\sqrt{2\cdot9{,}81\cdot0{,}80}\simeq4{,}0\,\mathrm{m/s}$. Il valore è ideale, e in un serbatoio reale l'attrito lo riduce un poco.
:::

:::osservazione{#circolazione titolo="Stenosi, aneurisma e pressione recuperata"}
Le due equazioni descrivono due alterazioni dei vasi sanguigni. In una **stenosi**, cioè un restringimento di un'arteria, la sezione diminuisce. Il sangue vi scorre più veloce e la sua pressione sulla parete è minore. In un **aneurisma**, cioè una dilatazione, la sezione aumenta. Il sangue rallenta e la pressione sulla parete è maggiore, il che tende ad allargare ancora la dilatazione. Il modello ideale è una prima approssimazione. Nel sangue reale l'attrito dissipa energia, quindi a valle di una stenosi la pressione resta più bassa di quella a monte, e le pareti dei vasi sono elastiche.
:::

:::osservazione{titolo="Confrontare i termini energetici"}
![Bilancio orizzontale ideale: aumentando la velocità da 1 a 3 metri al secondo, la pressione statica diminuisce di 4 kPa e la somma energetica resta costante.](/figure/fisica-semestre-filtro/fluidi/bernoulli-it.svg)
:::

## Viscosità e regimi di moto

:::osservazione{titolo="Origine dello sforzo viscoso"}
I fluidi reali hanno un attrito interno, detto **viscosità**. Il miele è più viscoso dell'acqua. Si pensa il fluido diviso in strati sottili che scorrono l'uno sull'altro. Lo strato a contatto con una parete ferma è fermo, e gli strati più lontani sono via via più veloci. Ogni strato frena quello più veloce che gli scorre accanto. Per mantenere il moto serve quindi una forza, e l'energia spesa diventa calore.
:::

:::definizione{#viscosita titolo="Fluidi newtoniani e regimi"}
La forza di attrito fra due strati, divisa per l'area di contatto, si chiama **sforzo tangenziale** $\tau$. In un **fluido newtoniano** è proporzionale alla rapidità con cui la velocità cambia da uno strato all'altro, cioè al gradiente di velocità $\dfrac{dv}{dy}$:
$$
\tau=\eta\left|\dfrac{dv}{dy}\right|,
$$
La costante $\eta$ è la **viscosità** del fluido e si misura in $\mathrm{Pa\,s}$. L'acqua a $20\,^\circ\mathrm{C}$ ha viscosità $1{,}0\cdot10^{-3}\,\mathrm{Pa\,s}$ e il sangue circa $3{,}5\cdot10^{-3}\,\mathrm{Pa\,s}$. L'acqua è un fluido newtoniano. Il sangue lo è solo in modo approssimato, perché contiene cellule e la sua viscosità cambia con la velocità e con il diametro del vaso.
:::

:::osservazione{titolo="Regimi di moto e numero di Reynolds"}
Un fluido viscoso scorre in due regimi.

- Nel **regime laminare** gli strati scorrono ordinati l'uno sull'altro senza mescolarsi. Il moto è silenzioso.
- Nel **regime turbolento** si formano vortici irregolari e gli strati si mescolano. Il moto dissipa più energia e produce rumore.

Laminare e stazionario sono proprietà diverse. Stazionario significa che in ogni punto la velocità non cambia nel tempo. Il flusso del sangue nelle arterie è laminare e non stazionario, perché pulsa a ogni battito.

Il regime si prevede con il **numero di Reynolds**. Per un tubo di diametro $D$:
$$
\mathrm{Re}=\dfrac{\rho\bar vD}{\eta}
$$
È un numero puro. In un tubo diritto il moto è laminare se $\mathrm{Re}$ è minore di circa 2000 e diventa turbolento per valori molto maggiori. Il valore di soglia dipende dalla forma del condotto. Nell'aorta, con $\rho=1060\,\mathrm{kg/m^3}$, $\bar v=0{,}30\,\mathrm{m/s}$, $D=0{,}020\,\mathrm{m}$ e $\eta=3{,}5\cdot10^{-3}\,\mathrm{Pa\,s}$, si ottiene $\mathrm{Re}\simeq1800$. Il moto è laminare, vicino al limite. In una stenosi la velocità aumenta, il moto diventa turbolento e produce un rumore, detto soffio, che si sente con lo stetoscopio.

![Profilo laminare parabolico normalizzato: velocità nulla alle pareti, massima sull'asse, velocità media pari alla metà del massimo.](/figure/fisica-semestre-filtro/fluidi/profile-it.svg)

Nel moto laminare in un tubo la velocità è nulla alla parete e massima sull'asse, e il suo andamento è una parabola. Nel grafico $x$ è la posizione lungo un diametro, con origine sull'asse del tubo.
:::

## Poiseuille e resistenze idrauliche
:::teorema{#poiseuille titolo="Flusso laminare in un tubo cilindrico"}
Per far scorrere un fluido viscoso in un tubo serve una differenza di pressione fra i due estremi, che compensa l'attrito. La **legge di Poiseuille** dà la portata di un fluido newtoniano in moto laminare in un tubo cilindrico rigido di raggio $r$ e lunghezza $L$:
$$
Q=\dfrac{\pi r^4}{8\eta L}\Delta p,\qquad
R_h=\dfrac{8\eta L}{\pi r^4},\qquad \Delta p=R_hQ.
$$
Nella formula $\Delta p$ è la pressione all'ingresso meno quella all'uscita. La grandezza $R_h$ è la **resistenza idraulica** del tubo. Con essa la legge prende la forma $\Delta p=R_hQ$, simile alla legge di Ohm dei circuiti elettrici: la differenza di pressione corrisponde alla tensione, la portata alla corrente. La resistenza aumenta con la viscosità e con la lunghezza, e dipende dalla quarta potenza del raggio.
:::

:::osservazione{titolo="Profilo sviluppato e perdite di pressione"}
La velocità del fluido a distanza $s$ dall'asse del tubo è:
$$
v(s)=\dfrac{\Delta p}{4\eta L}(r^2-s^2),\qquad
v_{\max}=2\bar v.
$$
La velocità è nulla alla parete, dove $s=r$, ed è massima sull'asse, dove $s=0$. La velocità massima è il doppio della velocità media.

La dipendenza dalla quarta potenza del raggio è il risultato più importante. Se il raggio si dimezza, la resistenza diventa $2^4=16$ volte maggiore. A parità di differenza di pressione la portata si riduce a un sedicesimo. Per mantenere la stessa portata serve una differenza di pressione 16 volte maggiore. Una riduzione del raggio del 16% è sufficiente a dimezzare la portata, perché $0{,}84^4\simeq0{,}50$. L'organismo regola in questo modo la distribuzione del sangue: le piccole arterie cambiano di poco il proprio raggio e la portata cambia di molto.
:::

:::teorema{#resistenze-idrauliche titolo="Serie e parallelo"}
Più tubi collegati fra loro equivalgono a un solo tubo, con una resistenza equivalente $R_{\mathrm{eq}}$. I collegamenti sono di due tipi. Tubi **in serie** sono collegati uno dopo l'altro. Li attraversa la stessa portata e le differenze di pressione si sommano, quindi si sommano le resistenze:
$$
R_{\mathrm{eq}}=\sum_iR_i.
$$
Tubi **in parallelo** partono dallo stesso punto e arrivano allo stesso punto. Hanno la stessa differenza di pressione e le loro portate si sommano, quindi si sommano gli inversi delle resistenze:
$$
\dfrac1{R_{\mathrm{eq}}}=\sum_i\dfrac1{R_i}.
$$
:::

:::osservazione{titolo="Reti e vincoli della pompa"}
In serie la resistenza equivalente è maggiore di ciascuna resistenza. In parallelo è minore della più piccola. Due tubi uguali in parallelo, per esempio, hanno resistenza equivalente pari a metà di quella di uno solo. I capillari sono miliardi di vasi in parallelo, e per questo la loro resistenza complessiva è moderata, anche se ciascuno ha una resistenza enorme.

La potenza dissipata dall'attrito in un tubo è $\mathcal P=\Delta p\,Q=R_hQ^2$. Il cuore di un adulto a riposo spinge $Q=5\,\mathrm{L/min}\simeq8{,}3\cdot10^{-5}\,\mathrm{m^3/s}$ con una differenza di pressione media di circa $100\,\mathrm{mmHg}\simeq1{,}3\cdot10^4\,\mathrm{Pa}$, quindi fornisce al sangue una potenza di circa $1{,}1\,\mathrm{W}$.

![Rete in serie con la stessa portata e rete in parallelo con la stessa differenza di pressione; le leggi di combinazione sono indicate separatamente.](/figure/fisica-semestre-filtro/fluidi/network-it.svg)
:::

## Tensione superficiale e legge di Laplace

:::osservazione{titolo="Energia delle interfacce"}
La superficie di un liquido si comporta come una pellicola elastica tesa. Le molecole all'interno del liquido sono attratte dalle vicine in tutte le direzioni. Quelle sulla superficie sono attratte solo verso l'interno e di lato, quindi la superficie tende a ridursi il più possibile. Per questo motivo una goccia libera è sferica, dato che la sfera è la forma con la superficie minore a parità di volume, e alcuni insetti camminano sull'acqua.
:::

:::definizione{#laplace titolo="Interfacce piane e curve"}
La **tensione superficiale** $\gamma$ misura questo effetto. È la forza con cui la superficie tira lungo un suo bordo, divisa per la lunghezza del bordo. È anche l'energia necessaria per aumentare la superficie di un'unità di area. Per l'acqua a $20\,^\circ\mathrm{C}$ vale $0{,}073\,\mathrm{N/m}$.
$$
[\gamma]=\mathrm{N/m}=\mathrm{J/m^2}.
$$
Una superficie curva, proprio perché è tesa, preme sul fluido che racchiude. La pressione dalla parte concava è quindi maggiore di quella dalla parte convessa. La **legge di Laplace** dà questa differenza di pressione in funzione dei due raggi di curvatura $R_1$ e $R_2$ della superficie, misurati in due direzioni perpendicolari:
$$
\Delta p=\gamma\left(\dfrac1{R_1}+\dfrac1{R_2}\right).
$$
Più la superficie è curva, cioè più i raggi sono piccoli, più la differenza di pressione è grande.
:::

:::osservazione{titolo="Curvature e numero di interfacce"}
I casi particolari sono quattro.

- **Sfera** di raggio $r$, per esempio una goccia o una bolla d'aria in un liquido. I due raggi sono uguali a $r$, quindi $\Delta p=\dfrac{2\gamma}{r}$.
- **Cilindro** di raggio $r$. Un raggio è $r$ e l'altro è infinito, quindi $\Delta p=\dfrac{\gamma}{r}$.
- **Superficie piana**. I due raggi sono infiniti, quindi $\Delta p=0$.
- **Bolla di sapone**. La parete è una pellicola con due superfici, una interna e una esterna, quindi l'effetto è doppio: $\Delta p=\dfrac{4\gamma}{r}$.

Gli **alveoli** dei polmoni sono piccole cavità quasi sferiche, rivestite all'interno da un velo di liquido. Per la legge di Laplace un alveolo più piccolo richiede una pressione maggiore per restare aperto. Con la tensione superficiale dell'acqua gli alveoli piccoli si chiuderebbero. Il liquido contiene però una sostanza, il **surfattante**, che riduce la tensione superficiale, soprattutto quando l'alveolo è piccolo. I neonati prematuri, che non producono ancora surfattante, hanno per questo motivo gravi difficoltà a respirare.

![Confronto delle curvature: piano, cilindro, sfera con una interfaccia e bolla di sapone con due interfacce.](/figure/fisica-semestre-filtro/fluidi/laplace-it.svg)
:::

## Capillarità

:::osservazione{titolo="Geometria del menisco"}
La **capillarità** è la salita, o la discesa, di un liquido in un tubo molto sottile, detto capillare. Dipende dall'attrazione fra il liquido e la parete. Dove la superficie del liquido tocca la parete forma con essa un angolo, detto **angolo di contatto** $\theta$, misurato dalla parte del liquido. Se il liquido è attratto dalla parete più che da sé stesso, come l'acqua sul vetro, l'angolo è minore di $90^\circ$ e la superficie nel tubo, detta menisco, è concava. Si dice che il liquido bagna la parete. Se accade il contrario, come per il mercurio sul vetro, l'angolo è maggiore di $90^\circ$ e il menisco è convesso.
:::

:::teorema{#capillarita titolo="Risalita e depressione capillare"}
In un tubo verticale di raggio $r$ immerso in un liquido, la tensione superficiale tira il liquido verso l'alto lungo tutta la circonferenza di contatto, lunga $2\pi r$. La componente verticale di questa forza è $2\pi r\gamma\cos\theta$. Il liquido sale finché questa forza è uguale al peso della colonna sollevata, di volume $\pi r^2h$. Dall'uguaglianza si ricava l'altezza $h$, detta **legge di Jurin**:
$$
2\pi r\gamma\cos\theta=\rho g\pi r^2h,
\qquad h=\dfrac{2\gamma\cos\theta}{\rho gr}.
$$
L'altezza è inversamente proporzionale al raggio: in un tubo di raggio dimezzato il liquido sale del doppio. Per l'acqua in un tubo di vetro, con $\theta\simeq0$ e $r=0{,}50\,\mathrm{mm}$, si ottiene $h=\dfrac{2\cdot0{,}072}{1000\cdot9{,}81\cdot5{,}0\cdot10^{-4}}\simeq2{,}9\,\mathrm{cm}$, come nella figura più avanti.
:::

:::osservazione{titolo="Risalita, depressione e limiti del modello"}
Il segno di $h$ dipende da $\cos\theta$.

- Se $\theta<90^\circ$ il coseno è positivo e il liquido sale nel tubo. È il caso dell'acqua nel vetro.
- Se $\theta>90^\circ$ il coseno è negativo e il liquido nel tubo scende sotto il livello esterno. È il caso del mercurio nel vetro.
- Se $\theta=90^\circ$ il livello non cambia.

La stessa legge si ottiene dalla legge di Laplace. Sotto un menisco concavo la pressione del liquido è minore di quella dell'aria, di una quantità $\dfrac{2\gamma\cos\theta}{r}$. Il liquido sale finché la pressione $\rho gh$ della colonna compensa questa differenza. Raggiunto l'equilibrio il liquido resta fermo.

![Altezza capillare in funzione del raggio per acqua con angolo nullo: 5,87 cm a 0,25 mm, 2,94 cm a 0,50 mm e 1,47 cm a 1,00 mm.](/figure/fisica-semestre-filtro/fluidi/capillary-it.svg)
:::
