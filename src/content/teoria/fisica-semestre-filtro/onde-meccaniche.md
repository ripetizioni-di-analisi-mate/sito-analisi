---
titolo: "Onde meccaniche e acustica"
sommario: "Dall’oscillatore alla propagazione: fase, interferenza, energia, intensità e decibel, velocità del suono, eco ed effetto Doppler."
---

## Dall’oscillatore alla sorgente di un’onda

:::osservazione{titolo="Moto locale e propagazione"}
Si fa vibrare un estremo di una corda tesa. Il primo tratto di corda si muove su e giù e trascina il tratto vicino, che trascina il successivo. Lungo la corda avanza così una deformazione, detta **onda**. Nel fenomeno ci sono due moti distinti. Ogni punto della corda oscilla intorno alla sua posizione di riposo e non si sposta lungo la corda. L’onda, invece, avanza lungo la corda con una propria velocità. Il capitolo descrive prima l’oscillazione di un punto e poi l’avanzamento dell’onda.
:::

:::definizione{#armonico titolo="Periodo, frequenza e moto armonico"}
Un moto è **periodico** se si ripete uguale a intervalli di tempo regolari. Tre grandezze lo descrivono.

- Il **periodo** $T$ è la durata di un’oscillazione completa. Si misura in secondi.
- La **frequenza** $f=\dfrac1T$ è il numero di oscillazioni in un secondo. Si misura in hertz, $1\,\mathrm{Hz}=1\,\mathrm{s^{-1}}$. Un cuore che batte 60 volte al minuto ha $T=1\,\mathrm{s}$ e $f=1\,\mathrm{Hz}$.
- La **pulsazione** $\omega=2\pi f$ è la frequenza espressa in radianti al secondo.

Il moto periodico più semplice è il **moto armonico**, in cui la posizione varia nel tempo come un coseno. È il moto di una massa attaccata a una molla. Posizione, velocità e accelerazione sono:
$$
x(t)=A\cos(\omega t+\varphi),\qquad
v_x(t)=-A\omega\sin(\omega t+\varphi),
$$
$$
a_x(t)=-\omega^2x(t).
$$
L'**ampiezza** $A$ è la distanza massima dalla posizione di equilibrio. La **fase iniziale** $\varphi$ stabilisce dove si trova il corpo all’istante $t=0$. L’ultima formula dice che l’accelerazione è proporzionale allo spostamento e ha verso opposto, quindi è sempre diretta verso la posizione di equilibrio.

Durante un’oscillazione il corpo passa per due situazioni estreme.

- Agli **estremi** ($x=\pm A$) il corpo è fermo per un istante. La velocità è nulla e l’accelerazione ha il valore massimo, $a_{\max}=A\omega^2$.
- Nella **posizione di equilibrio** ($x=0$) la velocità ha il valore massimo, $v_{\max}=A\omega$, e l’accelerazione è nulla.

![Posizione, velocità e accelerazione normalizzate durante un periodo, con fasi diverse.](/figure/fisica-semestre-filtro/onde-meccaniche/oscillator-it.svg)
:::

:::teorema{titolo="Oscillatore massa-molla"}
Una massa $m$ è attaccata a una molla di costante elastica $K$. La molla esercita la forza $-Kx$, quindi per la seconda legge di Newton $ma=-Kx$, cioè $a=-\dfrac Km x$. Confrontando con $a=-\omega^2x$ si ottiene $\omega^2=\dfrac Km$. Il moto è quindi armonico, con:
$$
\omega=\sqrt{\dfrac{K}{m}},\qquad
T=2\pi\sqrt{\dfrac{m}{K}},\qquad
E=\dfrac12KA^2.
$$
Il periodo aumenta con la massa e diminuisce con la rigidità della molla. Non dipende dall’ampiezza: un’oscillazione ampia e una piccola durano lo stesso tempo. Una massa di $0{,}50\,\mathrm{kg}$ su una molla con $K=200\,\mathrm{N/m}$ ha $T=2\pi\sqrt{\dfrac{0{,}50}{200}}\simeq0{,}31\,\mathrm{s}$. L’energia $E$ dell’oscillatore dipende invece dal quadrato dell’ampiezza, quindi con ampiezza doppia è quattro volte maggiore. In questo capitolo la costante della molla si indica con $K$ maiuscola, perché $k$ minuscola indica più avanti il numero d’onda. Il modello trascura gli attriti, che in un oscillatore reale riducono a poco a poco l’ampiezza.

Se la molla è verticale, il peso della massa la allunga di $\dfrac{mg}{K}$ e sposta la posizione di equilibrio. Le oscillazioni intorno alla nuova posizione di equilibrio hanno lo stesso periodo.
:::

## Propagazione e movimento del mezzo

:::definizione{#onda titolo="Che cosa si propaga in un’onda meccanica"}
Un'**onda meccanica** è una perturbazione che si propaga in un mezzo materiale, come una corda, l’acqua o l’aria. Ogni parte del mezzo, spostata dalla posizione di riposo, sposta la parte vicina e viene richiamata indietro dalle forze elastiche.

Un’onda trasporta energia e non materia. Le particelle del mezzo oscillano intorno alla propria posizione e vi ritornano. Un tappo di sughero su un lago, al passaggio di un’onda, sale e scende e resta dove si trova.

Le onde si distinguono secondo la direzione in cui oscillano le particelle rispetto alla direzione in cui avanza l’onda.

- In un’onda **trasversale** le particelle oscillano in direzione perpendicolare a quella di propagazione. Ne è un esempio l’onda su una corda.
- In un’onda **longitudinale** le particelle oscillano nella stessa direzione di propagazione. Ne è un esempio il suono, in cui si alternano zone dove l’aria è più compressa e zone dove è più rarefatta.

Nei liquidi e nei gas si propagano solo onde longitudinali. Nei solidi si propagano entrambi i tipi.

![Confronto fra oscillazione trasversale di una corda e spostamenti longitudinali di particelle del mezzo.](/figure/fisica-semestre-filtro/onde-meccaniche/modes-it.svg)

Le onde meccaniche hanno bisogno di un mezzo, quindi nel vuoto il suono non si propaga. Una perturbazione breve e isolata, come un colpo dato alla corda, si chiama **impulso**. Una perturbazione che si ripete con regolarità è un’onda periodica, e la più semplice è l’onda armonica, in cui ogni punto del mezzo compie un moto armonico.
:::

## Leggere spazio, tempo e fase

:::teorema{#parametri-onda titolo="Relazione fra velocità, lunghezza d’onda e frequenza"}
Un’onda periodica si ripete nel tempo e anche nello spazio. La **lunghezza d’onda** $\lambda$ è la distanza fra due creste consecutive, cioè fra due punti consecutivi del mezzo che si trovano nella stessa condizione. In un periodo $T$ ogni punto compie un’oscillazione completa e l’onda avanza di una lunghezza d’onda. La velocità dell’onda è quindi:
$$
v=\dfrac{\lambda}{T}=\lambda f.
$$
La velocità $v$ dipende solo dal mezzo. Su una corda tesa vale:
$$
v=\sqrt{\dfrac{F_T}{\mu_\ell}},
$$
Nella formula $F_T$ è la tensione della corda, in newton, e $\mu_\ell$ è la sua massa per unità di lunghezza, in $\mathrm{kg/m}$, che si ottiene dividendo la massa della corda per la sua lunghezza. L’onda è più veloce su una corda più tesa e più lenta su una corda più pesante. Su una corda con $F_T=100\,\mathrm{N}$ e $\mu_\ell=0{,}010\,\mathrm{kg/m}$ la velocità è $\sqrt{\dfrac{100}{0{,}010}}=100\,\mathrm{m/s}$.

Le tre grandezze dipendono da cose diverse. La frequenza è stabilita dalla sorgente. La velocità è stabilita dal mezzo. La lunghezza d’onda segue dalle altre due, $\lambda=\dfrac vf$. Ne derivano due regole.

- Se la sorgente raddoppia la frequenza, nello stesso mezzo la velocità resta la stessa e la lunghezza d’onda si dimezza.
- Se l’onda passa da un mezzo a un altro, la frequenza resta la stessa. Cambiano la velocità e, nella stessa proporzione, la lunghezza d’onda.
:::

:::definizione{#equazione-onda titolo="Equazione di un’onda progressiva"}
Un’onda armonica che avanza nel verso positivo dell’asse $x$ è descritta da una funzione della posizione $x$ e del tempo $t$, che dà lo spostamento $y$ di ogni punto del mezzo in ogni istante:
$$
y(x,t)=A\cos(kx-\omega t+\varphi),\qquad
k=\dfrac{2\pi}{\lambda},\qquad v=\dfrac{\omega}{k}.
$$
Il **numero d’onda** $k$ è per lo spazio ciò che la pulsazione $\omega$ è per il tempo. L’argomento del coseno, $kx-\omega t+\varphi$, si chiama **fase**. Il segno fra $kx$ e $\omega t$ indica il verso di propagazione. Con il segno meno l’onda avanza verso le $x$ positive, perché al crescere di $t$ la stessa fase si ritrova in un punto con $x$ maggiore. Con il segno più l’onda avanza verso le $x$ negative.

La funzione si legge in due modi.

- Fissando l’istante $t$ si ottiene una fotografia dell’onda, cioè lo spostamento in funzione della posizione. Da essa si leggono l’ampiezza e la lunghezza d’onda.
- Fissando la posizione $x$ si ottiene il moto di un solo punto nel tempo. Da esso si leggono l’ampiezza e il periodo.

Dalla sola fotografia non si ricava la frequenza. Serve anche la velocità dell’onda, e allora $f=\dfrac{v}{\lambda}$.

![Due profili distanziati di un quarto di periodo e la registrazione temporale di un punto fisso.](/figure/fisica-semestre-filtro/onde-meccaniche/profiles-it.svg)
:::

:::esempio{titolo="Lunghezza d’onda degli ultrasuoni"}
L’ecografia usa ultrasuoni di frequenza $f=2{,}0\,\mathrm{MHz}$. Nei tessuti molli il suono viaggia a circa $v=1540\,\mathrm{m/s}$. Si converte la frequenza, $2{,}0\,\mathrm{MHz}=2{,}0\cdot10^6\,\mathrm{Hz}$, e si calcola $\lambda=\dfrac{v}{f}=\dfrac{1540}{2{,}0\cdot10^6}=7{,}7\cdot10^{-4}\,\mathrm{m}=0{,}77\,\mathrm{mm}$. La lunghezza d’onda indica la dimensione dei dettagli più piccoli che l’immagine distingue. Per questo motivo con una frequenza più alta l’immagine è più dettagliata.
:::

## Sovrapposizione, fase e interferenza

:::teorema{#interferenza titolo="Somma delle perturbazioni in un mezzo lineare"}
Quando due onde si incontrano nello stesso punto, lo spostamento risultante è la somma dei due spostamenti. Questo è il **principio di sovrapposizione**. Dopo l’incontro ciascuna onda prosegue invariata, come se l’altra non ci fosse stata. L’effetto della somma si chiama **interferenza**.

Per due onde armoniche della stessa frequenza il risultato dipende dalla **differenza di fase** $\Delta\varphi$, cioè da quanto un’onda è spostata rispetto all’altra. L’ampiezza risultante $A_R$ è data da:
$$
A_R^2=A_1^2+A_2^2+2A_1A_2\cos\Delta\varphi.
$$
I due casi estremi sono i seguenti.

- **Interferenza costruttiva.** Le onde sono in fase ($\Delta\varphi=0$): le creste dell’una coincidono con le creste dell’altra. Le ampiezze si sommano, $A_R=A_1+A_2$.
- **Interferenza distruttiva.** Le onde sono in opposizione di fase ($\Delta\varphi=\pi$): le creste dell’una coincidono con le valli dell’altra. Le ampiezze si sottraggono, $A_R=|A_1-A_2|$. Se le due ampiezze sono uguali il risultato è nullo.

Per valori intermedi si usa la formula. Con ampiezze uguali $A$ e $\Delta\varphi=\dfrac{\pi}{2}$ il coseno è nullo e $A_R=\sqrt{A^2+A^2}=\sqrt2\,A$.

![Somma di due sinusoidi di uguale ampiezza per tre differenze di fase: zero, pi greco mezzi e pi greco.](/figure/fisica-semestre-filtro/onde-meccaniche/interference-it.svg)

La differenza di fase nasce spesso da una differenza di percorso. Due sorgenti uguali, che vibrano in fase, emettono onde che arrivano in un punto dopo aver percorso distanze diverse. Se $\Delta\ell$ è la differenza fra le due distanze, valgono due regole.

- Se $\Delta\ell$ è un multiplo intero della lunghezza d’onda ($0$, $\lambda$, $2\lambda$, …) le onde arrivano in fase e l’interferenza è costruttiva.
- Se $\Delta\ell$ è un multiplo dispari di mezza lunghezza d’onda ($\dfrac{\lambda}{2}$, $\dfrac{3\lambda}{2}$, …) le onde arrivano in opposizione di fase e l’interferenza è distruttiva.

L’interferenza si osserva solo se le due sorgenti sono **coerenti**, cioè se la loro differenza di fase resta costante nel tempo. Due sorgenti indipendenti, come due persone che parlano, non sono coerenti. In quel caso si sommano le intensità delle due onde e non le ampiezze.
:::

:::osservazione{titolo="Nodi di un’onda stazionaria"}
Due onde uguali che viaggiano in versi opposti, come un’onda su una corda e la sua riflessione all’estremo fisso, si sovrappongono e formano un'**onda stazionaria**, $y=2A\cos(kx)\cos(\omega t)$. In un’onda stazionaria la forma non avanza. Alcuni punti, detti **nodi**, restano sempre fermi. A metà fra due nodi ci sono i punti che oscillano con l’ampiezza massima, detti **ventri**. Due nodi consecutivi distano mezza lunghezza d’onda. È ciò che accade nelle corde di una chitarra.
:::

## Energia, potenza e distribuzione nello spazio

:::definizione{#intensita titolo="Dal trasferimento di energia all’intensità"}
Un’onda trasporta energia. La **potenza** $P$ dell’onda è l’energia che attraversa una superficie in un secondo, $P=\dfrac{\Delta E}{\Delta t}$, e si misura in watt. L'**intensità** $I$ è la potenza che attraversa una superficie perpendicolare alla direzione di propagazione, divisa per l’area $S$ della superficie:
$$
I=\dfrac{P}{S}.
$$
L’intensità si misura in $\mathrm{W/m^2}$. La stessa potenza concentrata su un’area più piccola dà un’intensità maggiore. Un fascio di ultrasuoni di potenza $0{,}10\,\mathrm{W}$ su un’area di $2{,}0\,\mathrm{cm^2}=2{,}0\cdot10^{-4}\,\mathrm{m^2}$ ha intensità $\dfrac{0{,}10}{2{,}0\cdot10^{-4}}=500\,\mathrm{W/m^2}$.

Per un’onda armonica su una corda la potenza media è:
$$
P_{\mathrm m}=\dfrac12\mu_\ell v\omega^2A^2.
$$
Il risultato importante è che la potenza, e quindi l’intensità, è proporzionale al quadrato dell’ampiezza. Vale per tutte le onde. Un’onda con ampiezza doppia trasporta quattro volte più energia. A parità di ampiezza la potenza è proporzionale anche al quadrato della frequenza.
:::

:::teorema{#inverso-quadrato titolo="Propagazione sferica senza assorbimento"}
Una sorgente piccola che emette in modo uguale in tutte le direzioni produce un’onda sferica. A distanza $r$ dalla sorgente la potenza $P$ è distribuita su una sfera di area $4\pi r^2$. Se il mezzo non assorbe energia, l’intensità è:
$$
I(r)=\dfrac{P}{4\pi r^2},\qquad
\dfrac{I_2}{I_1}=\left(\dfrac{r_1}{r_2}\right)^2.
$$
Questa è la **legge dell’inverso del quadrato**. A distanza doppia l’area della sfera è quattro volte maggiore, quindi l’intensità è un quarto. A distanza tripla è un nono. La potenza totale è la stessa: si distribuisce su una superficie più grande. Poiché l’intensità è proporzionale al quadrato dell’ampiezza, l’ampiezza diminuisce come $\dfrac1r$.

![Intensità relativa in funzione della distanza relativa per una sorgente sferica ideale.](/figure/fisica-semestre-filtro/onde-meccaniche/spreading-it.svg)

La legge vale per una sorgente piccola rispetto alla distanza, che emette in tutte le direzioni, in un mezzo che non assorbe. Un fascio stretto, come quello di una sonda per ecografia, non si allarga su una sfera, quindi la sua intensità diminuisce più lentamente con la distanza. In un mezzo che assorbe, come i tessuti, l’intensità diminuisce più rapidamente, e l’energia assorbita scalda il mezzo.
:::

## Suono, pressione ed eco

:::definizione{#suono titolo="Propagazione acustica nei mezzi materiali"}
Il **suono** è un’onda longitudinale che si propaga in un gas, in un liquido o in un solido. Nell’aria è una successione di zone in cui la pressione è un poco maggiore di quella normale (compressioni) e zone in cui è un poco minore (rarefazioni). La differenza fra la pressione in un punto e la pressione normale si chiama **pressione acustica** $p'$. È positiva nelle compressioni e negativa nelle rarefazioni, ed è piccolissima rispetto alla pressione atmosferica. La velocità del suono in un fluido è:
$$
v=\sqrt{\dfrac{B}{\rho}},
$$
Nella formula $\rho$ è la densità e $B$ è il **modulo di comprimibilità**, che misura quanto il mezzo si oppone alla compressione. Il suono è più veloce nei mezzi difficili da comprimere. Per questo motivo è più veloce nei liquidi e nei solidi che nei gas, anche se sono più densi.

| Mezzo | Velocità del suono |
| --- | --- |
| Aria a $20\,^\circ\mathrm{C}$ | $343\,\mathrm{m/s}$ |
| Acqua | circa $1480\,\mathrm{m/s}$ |
| Tessuti molli | circa $1540\,\mathrm{m/s}$ |

Nell’aria la velocità aumenta con la temperatura.

In un’onda sonora ogni particella d’aria oscilla avanti e indietro lungo la direzione di propagazione. Se lo spostamento delle particelle è $\xi=A\cos(kx-\omega t)$, la pressione acustica è:
$$
p'=-B\dfrac{\partial\xi}{\partial x}
=BkA\sin(kx-\omega t).
$$
Lo spostamento è un coseno e la pressione è un seno, quindi i due sono sfasati di un quarto di lunghezza d’onda. La pressione è massima nei punti in cui lo spostamento è nullo. Il motivo è che l’aria è compressa dove le particelle dei due lati si sono avvicinate, e in quel punto la particella centrale non si è spostata.

![Spostamento e pressione normalizzati a uno stesso istante: i massimi di pressione non coincidono con quelli dello spostamento.](/figure/fisica-semestre-filtro/onde-meccaniche/sound-phase-it.svg)

Le caratteristiche fisiche del suono corrispondono a ciò che si percepisce.

- La **frequenza** determina l’altezza del suono. Un suono di frequenza alta è acuto, uno di frequenza bassa è grave.
- L'**intensità** determina il volume. La sensazione dipende anche dalla frequenza, perché l’orecchio è più sensibile fra 1000 e 4000 Hz.

L’orecchio umano percepisce i suoni di frequenza compresa fra circa $20\,\mathrm{Hz}$ e $20\,\mathrm{kHz}$. Sotto $20\,\mathrm{Hz}$ si parla di **infrasuoni** e sopra $20\,\mathrm{kHz}$ di **ultrasuoni**.

Un'**eco** è un suono che torna alla sorgente dopo essere stato riflesso da un ostacolo. Il suono percorre due volte la distanza $d$ fra sorgente e ostacolo, all’andata e al ritorno, quindi $2d=v\,\Delta t$, dove $\Delta t$ è il tempo fra l’emissione e il ritorno:
$$
d=\dfrac{v\Delta t}{2}.
$$
L’ecografia funziona così. La sonda emette un impulso di ultrasuoni e misura dopo quanto tempo torna l’eco di ogni struttura. Con $v=1540\,\mathrm{m/s}$, un’eco che torna dopo $\Delta t=40\,\mu\mathrm{s}=40\cdot10^{-6}\,\mathrm{s}$ viene da una profondità $d=\dfrac{1540\cdot40\cdot10^{-6}}{2}=0{,}0308\,\mathrm{m}=30{,}8\,\mathrm{mm}$.

![Percorso di andata e ritorno fra trasduttore e riflettore, con due impulsi separati nel tempo.](/figure/fisica-semestre-filtro/onde-meccaniche/echo-it.svg)
:::

## Livelli sonori e scala logaritmica

:::definizione{#decibel titolo="Livello di intensità sonora"}
L’orecchio percepisce intensità molto diverse fra loro. Il suono più debole che si sente ha intensità di circa $10^{-12}\,\mathrm{W/m^2}$ e quello che provoca dolore di circa $1\,\mathrm{W/m^2}$, mille miliardi di volte maggiore. Per esprimere valori così diversi con numeri comodi si usa una scala logaritmica, il **livello di intensità sonora** $L_I$, misurato in **decibel** (dB):
$$
L_I=10\log_{10}\left(\dfrac{I}{I_0}\right)\,\mathrm{dB},
\qquad I_0=10^{-12}\,\mathrm{W/m^2}.
$$
L’intensità di riferimento $I_0$ è quella del suono più debole udibile. Un suono con $I=I_0$ ha livello $10\log_{10}1=0\,\mathrm{dB}$, quindi $0\,\mathrm{dB}$ non significa assenza di suono. Un suono con $I=10^{-6}\,\mathrm{W/m^2}$, come una conversazione, ha livello $10\log_{10}\dfrac{10^{-6}}{10^{-12}}=10\cdot6=60\,\mathrm{dB}$. Il dolore compare intorno a $120\,\mathrm{dB}$.

![Incrementi uguali di livello corrispondono a fattori moltiplicativi uguali dell’intensità.](/figure/fisica-semestre-filtro/onde-meccaniche/decibels-it.svg)

Dal livello si ricava l’intensità con la formula inversa. Indicando con $\ell$ il numero dei decibel:
$$
I=I_0\,10^{\dfrac{\ell}{10}},\qquad
\Delta\ell=10\log_{10}\left(\dfrac{I_2}{I_1}\right).
$$
La seconda formula dà la differenza di livello fra due suoni. In una scala logaritmica a una moltiplicazione dell’intensità corrisponde un’addizione del livello.

- Un’intensità 10 volte maggiore dà $10\log_{10}10=10\,\mathrm{dB}$ in più. Un’intensità 100 volte maggiore dà $20\,\mathrm{dB}$ in più.
- Un’intensità doppia dà $10\log_{10}2\simeq3\,\mathrm{dB}$ in più.
- Raddoppiando la distanza da una sorgente sferica l’intensità diventa un quarto, e il livello diminuisce di $10\log_{10}4\simeq6\,\mathrm{dB}$.

I livelli di due sorgenti non si sommano. Si sommano le intensità. Due strumenti che producono ciascuno $60\,\mathrm{dB}$ danno insieme un’intensità doppia, quindi un livello di $60+3=63\,\mathrm{dB}$, e non di $120\,\mathrm{dB}$.

L’intensità di un’onda sonora è proporzionale al quadrato della pressione acustica, $I=\dfrac{p_{\mathrm{rms}}^2}{\rho v}$, dove $p_{\mathrm{rms}}=\dfrac{p_{\max}}{\sqrt2}$ è il valore efficace della pressione. Se si confrontano due pressioni, nella formula del livello compare perciò il fattore 20 al posto di 10: $\Delta\ell=20\log_{10}\left(\dfrac{p_{\mathrm{rms},2}}{p_{\mathrm{rms},1}}\right)$. Una pressione acustica 10 volte maggiore corrisponde a $20\,\mathrm{dB}$ in più.
:::

## Effetto Doppler e ruolo del mezzo

:::osservazione{#doppler titolo="Contare i fronti d’onda incontrati"}
L'**effetto Doppler** è il cambiamento della frequenza percepita quando la sorgente del suono e chi ascolta si muovono l’una rispetto all’altro. La sirena di un’ambulanza ha un suono più acuto mentre si avvicina e più grave mentre si allontana. La regola generale è che la frequenza percepita aumenta quando sorgente e osservatore si avvicinano e diminuisce quando si allontanano.

Si considera prima un osservatore che si muove con velocità $u$ verso una sorgente ferma. Le creste dell’onda distano $\lambda=\dfrac vf$ e viaggiano a velocità $v$. L’osservatore va loro incontro, quindi le incontra alla velocità $v+u$ e ne riceve di più ogni secondo:
$$
f_{\mathrm{oss}}=f\dfrac{v+u}{v}.
$$
Se l’osservatore si allontana si usa $v-u$ e la frequenza diminuisce. La velocità del suono nell’aria è sempre $v$.

Si considera poi una sorgente che si muove con velocità $u_s$ verso un osservatore fermo. Fra l’emissione di una cresta e quella della successiva passa un periodo $T$, durante il quale la sorgente avanza di $u_sT$. Davanti alla sorgente le creste sono quindi più vicine fra loro, cioè la lunghezza d’onda è minore, e la frequenza percepita è maggiore:
$$
\lambda_{\mathrm{front}}=(v-u_s)T,
\qquad f_{\mathrm{oss}}=f\dfrac{v}{v-u_s}.
$$
Dietro la sorgente le creste sono più distanti, la lunghezza d’onda è $(v+u_s)T$ e la frequenza percepita è $f\dfrac{v}{v+u_s}$. Un’ambulanza con sirena a $1000\,\mathrm{Hz}$ che si avvicina a $30\,\mathrm{m/s}$, con $v=343\,\mathrm{m/s}$, è percepita a $1000\cdot\dfrac{343}{343-30}\simeq1096\,\mathrm{Hz}$. Dopo il passaggio è percepita a $1000\cdot\dfrac{343}{343+30}\simeq920\,\mathrm{Hz}$. Le formule dei due casi, osservatore in moto e sorgente in moto, sono diverse, e danno risultati quasi uguali quando le velocità sono molto minori di quella del suono.

![Fronti circolari emessi a intervalli uguali da una sorgente che avanza: più ravvicinati davanti, più distanziati dietro.](/figure/fisica-semestre-filtro/onde-meccaniche/doppler-it.svg)

In medicina l’effetto Doppler serve a misurare la velocità del sangue (**ecodoppler**). La sonda invia ultrasuoni, che vengono riflessi dai globuli rossi in movimento e tornano alla sonda con una frequenza diversa. L’effetto avviene due volte: il globulo riceve l’onda come un osservatore in moto e la rimanda come una sorgente in moto. Dalla variazione di frequenza lo strumento calcola la velocità del sangue. Si misura solo la componente della velocità lungo la direzione del fascio, quindi un vaso perpendicolare al fascio non dà variazione di frequenza.
:::
