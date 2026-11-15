---
titolo: "Onde meccaniche e acustica"
sommario: "Dall’oscillatore alla propagazione: fase, interferenza, energia, intensità e decibel, velocità del suono, eco ed effetto Doppler."
---

## Dall’oscillatore alla sorgente di un’onda

:::osservazione{titolo="Moto locale e propagazione"}
Una punta che vibra su una corda mette in movimento prima un piccolo tratto, poi quelli vicini. Per capire il fenomeno conviene separare due domande: come si muove ciascun punto e come passa la perturbazione da un punto all’altro. Il moto armonico descrive il primo aspetto; la velocità dell’onda descrive il secondo. In generale queste due velocità non coincidono.
:::

:::definizione{#armonico titolo="Periodo, frequenza e moto armonico"}
Un moto periodico ritorna nello stesso stato dopo un **periodo** $T$. Non basta ritrovare la stessa posizione: durante un’oscillazione il corpo può attraversarla con versi opposti. La **frequenza** $f=\dfrac1T$ conta cicli completi per secondo e si misura in hertz, $1\,\mathrm{Hz}=1\,\mathrm{s^{-1}}$. La pulsazione $\omega=2\pi f$ misura invece l’avanzamento della fase in radianti al secondo.

Per un moto armonico lungo un asse,
$$
x(t)=A\cos(\omega t+\varphi),\qquad
v_x(t)=-A\omega\sin(\omega t+\varphi),
$$
$$
a_x(t)=-\omega^2x(t).
$$
L’ampiezza $A$ è non negativa e rappresenta la massima distanza dall’equilibrio; la fase iniziale $\varphi$ specifica posizione e verso del moto a $t=0$. L’argomento della funzione trigonometrica è un angolo: scrivendo una legge numerica, il coefficiente del tempo deve avere unità compatibili con una pulsazione.

L’accelerazione è opposta allo spostamento, mentre la velocità non ha sempre quel verso. Agli estremi il corpo si ferma istantaneamente, ma l’accelerazione è massima; all’equilibrio l’accelerazione si annulla e la rapidità è massima. Ne seguono $v_{\max}=A\omega$ e $a_{\max}=A\omega^2$. Il grafico distingue anche gli istanti in cui il corpo sta tornando verso il centro da quelli in cui se ne sta allontanando.

![Posizione, velocità e accelerazione normalizzate durante un periodo, con fasi diverse.](/figure/fisica-semestre-filtro/onde-meccaniche/oscillator-it.svg)
:::

:::teorema{titolo="Oscillatore massa-molla"}
Per una massa $m$ e una molla ideale di costante elastica $K$, la forza risultante $-Kx$ dà $m\ddot x=-Kx$ e quindi
$$
\omega=\sqrt{\dfrac{K}{m}},\qquad
T=2\pi\sqrt{\dfrac{m}{K}},\qquad
E=\dfrac12KA^2.
$$
Qui usiamo $K$ per la molla, riservando $k$ al numero d’onda. La frequenza naturale dipende da massa e rigidità, mentre l’energia dipende anche dall’ampiezza. Raddoppiare $A$ quadruplica l’energia senza cambiare il periodo nel modello lineare. Il modello richiede attriti trascurabili e deformazioni nel campo elastico: non implica che ogni oscillatore reale mantenga indefinitamente la propria ampiezza.

Con una molla verticale si misura $x$ dall’equilibrio carico, non dalla lunghezza naturale. Il peso sposta l’equilibrio di $\dfrac{mg}{K}$; sottraendo la condizione statica, la forza risultante per un ulteriore spostamento resta $-Kx$. Questo spiega perché la stessa formula del periodo rimane valida.
:::

## Propagazione e movimento del mezzo

:::definizione{#onda titolo="Che cosa si propaga in un’onda meccanica"}
Un’**onda meccanica** trasferisce una perturbazione attraverso le interazioni fra parti di un mezzo materiale. Una corda tesa trasmette forze ai tratti vicini; un fluido compresso esercita pressioni sulle regioni adiacenti. Elasticità e inerzia permettono alla perturbazione di proseguire anche quando la sorgente ha già cambiato posizione.

Nel modello di piccola ampiezza le particelle oscillano intorno all’equilibrio e non viaggiano insieme a una cresta. La propagazione trasporta energia; non richiede un trasporto netto di materia dall’emettitore al ricevitore. Eventuali correnti medie o deformazioni permanenti appartengono a fenomeni ulteriori e non si deducono dalla semplice sinusoide.

In un’onda **trasversale** lo spostamento è perpendicolare alla propagazione; in una **longitudinale** è parallelo. Queste parole confrontano due direzioni, non descrivono la forma visibile del grafico. Il grafico della pressione sonora può essere sinusoidale pur rappresentando un’onda longitudinale. In un fluido le compressioni e le rarefazioni si trasmettono lungo la direzione acustica; una deformazione di taglio non trova la stessa forza di richiamo che avrebbe in un solido.

![Confronto fra oscillazione trasversale di una corda e spostamenti longitudinali di particelle del mezzo.](/figure/fisica-semestre-filtro/onde-meccaniche/modes-it.svg)

Nel vuoto manca il mezzo necessario al suono e alle altre onde meccaniche. Un impulso, invece di una vibrazione periodica, produce una perturbazione localizzata: ha durata e forma, ma non possiede necessariamente una sola frequenza. Il modello armonico è utile sia per toni semplici sia come componente nella descrizione di segnali più complessi.
:::

## Leggere spazio, tempo e fase

:::teorema{#parametri-onda titolo="Relazione fra velocità, lunghezza d’onda e frequenza"}
La **lunghezza d’onda** $\lambda$ è il periodo spaziale: la distanza fra due creste consecutive, o due compressioni consecutive, a uno stesso istante. Durante un periodo una fase riconoscibile avanza di una lunghezza d’onda, perciò
$$
v=\dfrac{\lambda}{T}=\lambda f.
$$
La velocità $v$ si riferisce alla fase della perturbazione nel mezzo considerato. Per una corda ideale tesa,
$$
v=\sqrt{\dfrac{F_T}{\mu_\ell}},
$$
con tensione $F_T$ in newton e densità lineare $\mu_\ell$ in chilogrammi al metro. Una tensione maggiore aumenta la forza di richiamo; una densità lineare maggiore aumenta l’inerzia. Il rapporto ha dimensioni di velocità al quadrato. La massa totale della corda non sostituisce $\mu_\ell$ senza dividere per la lunghezza.

A un’interfaccia fissa, con mezzi lineari e sorgente periodica stazionaria, la frequenza trasmessa resta uguale a quella incidente. Cambiando mezzo possono cambiare $v$ e $\lambda$: è la lunghezza d’onda ad adattarsi secondo $\lambda=\dfrac{v}{f}$. Una sorgente che raddoppia la frequenza sulla stessa corda ideale dimezza invece $\lambda$, senza raddoppiare la velocità.
:::

:::definizione{#equazione-onda titolo="Equazione di un’onda progressiva"}
Una perturbazione armonica diretta verso $+x$ si rappresenta con
$$
y(x,t)=A\cos(kx-\omega t+\varphi),\qquad
k=\dfrac{2\pi}{\lambda},\qquad v=\dfrac{\omega}{k}.
$$
Il numero d’onda $k$ misura la variazione di fase per unità di lunghezza. Per seguire una cresta si mantiene costante l’argomento: $kx-\omega t+\varphi=C$, quindi $x(t)=\dfrac{\omega}{k}t+\text{costante}$. È questo ragionamento, e non il segno di $y$, a stabilire il verso. Con $k,\omega>0$, il segno più fra $kx$ e $\omega t$ produce invece una velocità di fase negativa.

Una fotografia del mezzo a $t$ fissato dà un profilo spaziale e permette di leggere $A$ e $\lambda$. Il segnale di un sensore a $x$ fissato dà un grafico temporale e permette di leggere $A$ e $T$. Una fotografia isolata non determina la frequenza senza conoscere anche la velocità o un’informazione temporale. La pendenza di un profilo $y(x)$ non è la velocità della particella: per quella occorre la derivata rispetto al tempo a posizione fissata.

![Due profili distanziati di un quarto di periodo e la registrazione temporale di un punto fisso.](/figure/fisica-semestre-filtro/onde-meccaniche/profiles-it.svg)
:::

:::esempio{titolo="Lunghezza d’onda degli ultrasuoni"}
Per esempio, nel modello omogeneo $v=1540\,\mathrm{m/s}$ e $f=2{,}0\,\mathrm{MHz}$ danno $\lambda=0{,}77\,\mathrm{mm}$. Il valore del mezzo è assegnato, non universale. La frequenza di milioni di cicli al secondo richiede di convertire i megahertz prima della divisione: usare direttamente il numero $2$ darebbe una lunghezza un milione di volte troppo grande.
:::

## Sovrapposizione, fase e interferenza

:::teorema{#interferenza titolo="Somma delle perturbazioni in un mezzo lineare"}
Nel regime lineare la perturbazione totale è la somma algebrica dei contributi nello stesso punto e allo stesso istante. In un mezzo anche non dispersivo, due impulsi possono attraversarsi e proseguire con la forma originaria dopo l’incontro. Una cancellazione durante la sovrapposizione non equivale a distruggere definitivamente i due impulsi.

Per due contributi armonici della stessa frequenza, con differenza di fase stabile $\Delta\varphi$, l’ampiezza risultante soddisfa
$$
A_R^2=A_1^2+A_2^2+2A_1A_2\cos\Delta\varphi.
$$
In fase si ottiene $A_R=A_1+A_2$; in opposizione di fase $A_R=|A_1-A_2|$. L’annullamento richiede dunque anche ampiezze uguali. Con uno sfasamento di un quarto di ciclo e ampiezze uguali $A$, il risultato è $\sqrt2A$: non si devono sommare le ampiezze come numeri positivi in qualsiasi situazione.

![Somma di due sinusoidi di uguale ampiezza per tre differenze di fase: zero, pi greco mezzi e pi greco.](/figure/fisica-semestre-filtro/onde-meccaniche/interference-it.svg)

Se due sorgenti sono inizialmente in fase e i cammini differiscono di $\Delta\ell$, lo sfasamento di propagazione ha modulo $\dfrac{2\pi\Delta\ell}{\lambda}$. Differenze pari a multipli interi di $\lambda$ danno un massimo; multipli dispari di $\dfrac{\lambda}{2}$ danno un minimo. Queste condizioni vanno corrette quando le sorgenti possiedono già uno sfasamento o intervengono inversioni di fase alla riflessione. Due cammini uguali non garantiscono un massimo se gli emettitori vibrano in opposizione.

La **coerenza** richiede che la relazione di fase rimanga sufficientemente stabile durante l’osservazione. Con sorgenti incoerenti il termine incrociato si media a zero: nelle condizioni adatte si sommano le intensità medie. Con sorgenti coerenti occorre prima sommare le perturbazioni. Nel confronto fra intensità locali si considerano contributi propaganti nella stessa direzione e nello stesso mezzo; l’intensità netta di un campo stazionario non si ricava automaticamente dal quadrato dello spostamento locale.
:::

:::osservazione{titolo="Nodi di un’onda stazionaria"}
Due onde uguali che viaggiano in versi opposti possono formare un’onda stazionaria, $y=2A\cos(kx)\cos(\omega t)$. I nodi restano fermi e distano $\dfrac{\lambda}{2}$: il disegno oscilla senza traslare. Questo confronto aiuta a distinguere una vera propagazione da una semplice dipendenza sinusoidale dal tempo. È un’applicazione del principio di sovrapposizione, non un nuovo tipo di moto delle particelle.
:::

## Energia, potenza e distribuzione nello spazio

:::definizione{#intensita titolo="Dal trasferimento di energia all’intensità"}
Una particella del mezzo acquista energia cinetica e il mezzo deformato accumula energia potenziale. L’interazione con i vicini trasferisce energia attraverso una sezione. Se $\Delta E$ attraversa la sezione in $\Delta t$, la potenza media è $P=\dfrac{\Delta E}{\Delta t}$. Quando il flusso è uniforme su una superficie $S$ perpendicolare alla propagazione,
$$
I=\dfrac{P}{S}.
$$
L’intensità si misura in $\mathrm{W/m^2}$, la potenza in watt e l’energia in joule. Specificare l’area è essenziale: una medesima potenza concentrata su una sezione più piccola produce intensità maggiore. Per una superficie inclinata si deve considerare la sua area proiettata perpendicolarmente al flusso; per un fascio non uniforme serve integrare l’intensità sull’area.

Per una sinusoide trasversale su una corda ideale,
$$
P_{\mathrm m}=\dfrac12\mu_\ell v\omega^2A^2.
$$
Il fattore $\dfrac{1}{2}$ deriva dalla media temporale del quadrato di una funzione sinusoidale. A mezzo e frequenza fissati, la potenza è proporzionale ad $A^2$; a mezzo e ampiezza di spostamento fissati è proporzionale a $f^2$. Non si può usare il solo rapporto delle ampiezze se cambiano contemporaneamente frequenza o mezzo. La formula della corda fornisce una potenza: non va chiamata intensità senza un’area appropriata al problema.
:::

:::teorema{#inverso-quadrato titolo="Propagazione sferica senza assorbimento"}
Una sorgente puntiforme isotropa distribuisce la potenza uniformemente in tutte le direzioni. In regime stazionario, se non vi sono assorbimento, ostacoli o altre sorgenti, la stessa potenza attraversa sfere concentriche:
$$
I(r)=\dfrac{P}{4\pi r^2},\qquad
\dfrac{I_2}{I_1}=\left(\dfrac{r_1}{r_2}\right)^2.
$$
Raddoppiare $r$ quadruplica l’area e riduce l’intensità a un quarto. La potenza totale non è diminuita: è cambiata la superficie su cui si distribuisce. Nello stesso mezzo l’ampiezza di pressione di una componente propagante varia allora come $\dfrac{1}{r}$, mentre l’intensità varia come $\dfrac{1}{r^2}$.

![Intensità relativa in funzione della distanza relativa per una sorgente sferica ideale.](/figure/fisica-semestre-filtro/onde-meccaniche/spreading-it.svg)

Un fascio collimato non occupa automaticamente sfere intere; una sorgente estesa vista da vicino non equivale a un punto. Se si osserva una diminuzione più rapida di $\dfrac{1}{r^2}$, possono intervenire assorbimento o geometria, non un errore nella conservazione dell’energia. L’energia assorbita può diventare energia interna del mezzo. Il confronto sperimentale va quindi fatto dichiarando le ipotesi prima di usare la legge delle distanze.
:::

## Suono, pressione ed eco

:::definizione{#suono titolo="Propagazione acustica nei mezzi materiali"}
In un fluido il suono consiste in piccole variazioni di pressione e densità, accompagnate da moto longitudinale delle particelle. La pressione acustica $p'$ è lo scostamento dalla pressione di equilibrio: una rarefazione ha $p'<0$ senza richiedere una pressione assoluta negativa. La comprimibilità fornisce il richiamo elastico e la densità l’inerzia. Per un fluido ideale,
$$
v=\sqrt{\dfrac{B}{\rho}},
$$
con $B$ modulo di comprimibilità appropriato al processo. Per il suono ordinario in un gas si usa il modulo adiabatico: le compressioni rapide non hanno il tempo di equilibrarsi termicamente con l’ambiente. La densità da sola non determina la velocità, perché cambia anche la risposta elastica.

In aria a circa $20\,{}^\circ\mathrm C$ si usa spesso $343\,\mathrm{m/s}$; nei modelli dei tessuti molli è frequente $1540\,\mathrm{m/s}$. Temperatura, composizione e stato del mezzo contano. Nei solidi possono propagarsi modi longitudinali e trasversali con velocità diverse: non esiste un unico valore valido per ogni materiale e ogni modo.

Per un’onda piana progressiva sinusoidale, spostamento longitudinale e pressione sono sfasati nello spazio. Se $\xi=A\cos(kx-\omega t)$, la compressione è legata al gradiente di spostamento:
$$
p'=-B\dfrac{\partial\xi}{\partial x}
=BkA\sin(kx-\omega t).
$$
Una regione è compressa quando particelle vicine si avvicinano, non quando ogni particella ha il massimo spostamento. La velocità delle particelle $u=\dfrac{\partial\xi}{\partial t}$ è invece in fase con la pressione per un’onda diretta verso $+x$.

![Spostamento e pressione normalizzati a uno stesso istante: i massimi di pressione non coincidono con quelli dello spostamento.](/figure/fisica-semestre-filtro/onde-meccaniche/sound-phase-it.svg)

La frequenza contribuisce all’altezza percepita; intensità, spettro e risposta dell’orecchio contribuiscono alla sensazione di volume. Due suoni di uguale intensità e frequenza diversa non sono necessariamente percepiti ugualmente forti. Le soglie convenzionali di circa $20\,\mathrm{Hz}$ e $20\,\mathrm{kHz}$ delimitano il campo udibile nominale: infrasuoni e ultrasuoni si definiscono dalla frequenza, non dalla loro intensità.

Un’eco percorre due volte la distanza dal riflettore. Per una traiettoria rettilinea, mezzo omogeneo e riflettore fermo,
$$
d=\dfrac{v\Delta t}{2}.
$$
Si sottraggono eventuali ritardi strumentali prima di usare il tempo di volo. Con $v=1540\,\mathrm{m/s}$ e $\Delta t=40\,\mu\mathrm s$ si trova $d=30{,}8\,\mathrm{mm}$. Il metodo collega la misura temporale a una distanza; usare una velocità non appropriata produce un errore proporzionale sulla distanza stimata.

![Percorso di andata e ritorno fra trasduttore e riflettore, con due impulsi separati nel tempo.](/figure/fisica-semestre-filtro/onde-meccaniche/echo-it.svg)
:::

## Livelli sonori e scala logaritmica

:::definizione{#decibel titolo="Livello di intensità sonora"}
Per confrontare intensità distribuite su molti ordini di grandezza si usa
$$
L_I=10\log_{10}\left(\dfrac{I}{I_0}\right)\,\mathrm{dB},
\qquad I_0=10^{-12}\,\mathrm{W/m^2}.
$$
Il logaritmo agisce su un rapporto adimensionale. Un livello di $0\,\mathrm{dB}$ significa $I=I_0$, non assenza di suono; livelli negativi corrispondono a intensità inferiori al riferimento. Il riferimento non costituisce una soglia percettiva universale per ogni frequenza e persona.

![Incrementi uguali di livello corrispondono a fattori moltiplicativi uguali dell’intensità.](/figure/fisica-semestre-filtro/onde-meccaniche/decibels-it.svg)

Ponendo $\ell=\dfrac{L_I}{\mathrm{dB}}$, cioè il valore numerico del livello in decibel, si inverte la formula:
$$
I=I_0\,10^{\dfrac{\ell}{10}},\qquad
\Delta\ell=10\log_{10}\left(\dfrac{I_2}{I_1}\right).
$$
Un aumento di $10\,\mathrm{dB}$ moltiplica l’intensità per dieci, mentre un raddoppio dà circa $3{,}01\,\mathrm{dB}$. Per una propagazione sferica ideale, raddoppiare la distanza dà $10\log_{10}(\dfrac{1}{4})\simeq-6{,}02$: il livello diminuisce di circa sei decibel.

Per contributi progressivi incoerenti nello stesso mezzo e nello stesso verso si sommano prima le intensità. Due contributi da $60\,\mathrm{dB}$ portano a circa $63{,}01\,\mathrm{dB}$, non a $120\,\mathrm{dB}$. Se i contributi sono coerenti, uguali, in fase e propaganti nello stesso verso nello stesso mezzo, il raddoppio dell’ampiezza può invece quadruplicare l’intensità locale e dare $6{,}02\,\mathrm{dB}$ in più. Occorre specificare la relazione di fase e la geometria prima di scegliere una somma.

Per una singola onda piana progressiva si può usare anche $I=\dfrac{p_{\mathrm{rms}}^2}{\rho v}$, con $p_{\mathrm{rms}}=\dfrac{p_{\max}}{\sqrt2}$ per una sinusoide. Nello stesso mezzo segue $\Delta\ell=20\log_{10}(\dfrac{p_{\mathrm{rms},2}}{p_{\mathrm{rms},1}})$. Il fattore venti deriva dal quadrato della pressione. Non va applicato direttamente a un rapporto di intensità né a un campo stazionario qualsiasi.
:::

## Effetto Doppler e ruolo del mezzo

:::osservazione{#doppler titolo="Contare i fronti d’onda incontrati"}
Il Doppler riguarda la frequenza registrata quando sorgente o ricevitore si muovono rispetto al mezzo. La spiegazione parte dal numero di fronti incontrati in un secondo. Se la sorgente è ferma, la distanza fra le creste nel mezzo resta $\lambda=\dfrac{v}{f}$. Un osservatore che si muove verso la sorgente a rapidità $u$ incontra le creste alla rapidità relativa $v+u$, perciò
$$
f_{\mathrm{oss}}=f\dfrac{v+u}{v}.
$$
Se si allontana si usa $v-u$. Queste espressioni assumono mezzo fermo, moto lungo la congiungente e $u<v$. La velocità di propagazione nel mezzo non è diventata $v+u$: è cambiata la rapidità con cui il ricevitore attraversa i fronti.

Una sorgente mobile produce invece creste da posizioni diverse. Se si avvicina a un ricevitore fermo con rapidità $u_s<v$, durante un periodo avanza di $u_sT$, quindi davanti a sé lascia
$$
\lambda_{\mathrm{front}}=(v-u_s)T,
\qquad f_{\mathrm{oss}}=f\dfrac{v}{v-u_s}.
$$
Dietro la sorgente la separazione è $(v+u_s)T$. Anche qui ciascun fronte viaggia alla velocità del suono rispetto al mezzo. Sorgente mobile e osservatore mobile non sono casi perfettamente intercambiabili: a parità di rapidità di avvicinamento le formule differiscono, pur concordando al primo ordine per velocità molto piccole rispetto a $v$.

![Fronti circolari emessi a intervalli uguali da una sorgente che avanza: più ravvicinati davanti, più distanziati dietro.](/figure/fisica-semestre-filtro/onde-meccaniche/doppler-it.svg)

Nella riflessione da strutture in movimento si combinano due passaggi: la struttura riceve l’onda come osservatore mobile e la rimanda come sorgente mobile. Per piccoli rapporti $\dfrac{u}{v}$ e geometria nota, lo spostamento è legato alla componente della velocità lungo il fascio; un moto perpendicolare non produce lo stesso effetto di un moto longitudinale. Questo è il fondamento qualitativo del Doppler ultrasonoro. La frequenza da sola, senza velocità del mezzo e geometria, non identifica una velocità vettoriale completa.
:::
