---
titolo: Radiazioni, radioattività e ottica
sommario: Campi e fotoni, spettro e attenuazione, probabilità di decadimento e attività, ionizzazione e dose, rifrazione e immagini delle lenti sottili.
---

## Campi che trasportano energia

:::osservazione{titolo="Campi e propagazione"}
La luce raggiunge la Terra attraversando lo spazio quasi vuoto: la sua propagazione non richiede un mezzo materiale come quello necessario al suono. La perturbazione consiste in campi elettrico e magnetico variabili, capaci di trasferire energia alla materia. La descrizione ondulatoria permette di calcolare propagazione e intensità; quella quantistica chiarisce gli scambi di energia in singoli eventi.
:::

:::definizione{#onde-em titolo="Onda elettromagnetica piana"}
Nel vuoto, per un'onda piana progressiva, $\mathbf E$ e $\mathbf B$ sono perpendicolari tra loro e alla direzione di propagazione. Oscillano in fase: massimi, minimi e zeri delle rispettive componenti si presentano insieme. Il prodotto vettoriale $\mathbf E\times\mathbf B$ indica il verso del trasporto di energia. Le ampiezze soddisfano $E_0=cB_0$.
$$
c=\lambda_0\nu,\qquad T=\dfrac1\nu,\qquad c\simeq3{,}00\cdot10^8\,\mathrm{m/s}.
$$
Qui $\nu$ è la frequenza, $T$ il periodo e $\lambda_0$ la lunghezza d'onda nel vuoto. Si usa $\nu$ per non confondere la frequenza con la distanza focale $f$.
:::

:::osservazione{titolo="Intensità e lettura dei campi"}
L'ampiezza $E_0$ si misura in volt al metro; non è un'energia. L'intensità media $I$ è la potenza che attraversa una superficie perpendicolare alla propagazione divisa per la sua area. Per un fascio uniforme $I=\dfrac{P}{S}$; per un'onda sinusoidale piana nel vuoto,
$$
I=\dfrac12\varepsilon_0cE_0^2,\qquad
\varepsilon_0\simeq8{,}85\cdot10^{-12}\,\mathrm{F/m}.
$$
Raddoppiare l'ampiezza quadruplica quindi l'intensità, mantenendo frequenza e condizioni del mezzo. Raddoppiare soltanto l'area illuminata a potenza fissa, invece, dimezza l'intensità media. Sono due modifiche fisiche diverse.

![Componenti elettrica e magnetica in fase lungo la direzione di propagazione.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/em-wave-it.svg)

I due grafici rappresentano componenti su direzioni perpendicolari, non due campi paralleli. Nel mezzo trasparente si usa la velocità di fase $v=\dfrac{c}{n}$ e la relazione $v=\lambda\nu$. L'indice $n$ può dipendere dalla frequenza: specificare il colore della luce è necessario quando questa dipendenza conta.
:::

## Leggere lo spettro elettromagnetico

:::osservazione{titolo="Ordinare le radiazioni"}
Un segnale radio e un raggio X appartengono alla stessa famiglia di onde, ma interagiscono con la materia in modi molto diversi. Per ordinare lo spettro conviene scegliere una sola variabile: aumentando la frequenza, la lunghezza d'onda nel vuoto diminuisce e l'energia per fotone aumenta. La potenza totale di una sorgente non determina la regione spettrale.
:::

:::osservazione{#spettro titolo="Regioni e scale dello spettro"}
La sequenza usuale a frequenza crescente è radio, microonde, infrarosso, visibile, ultravioletto, raggi X e gamma. La tabella riporta esempi rappresentativi, non confini rigidi.

| Regione | Lunghezza d'onda nel vuoto di esempio | Collegamento fisico |
| --- | --- | --- |
| Radio | $3\,\mathrm m$ | segnale a $100\,\mathrm{MHz}$ |
| Microonde | $3\,\mathrm{cm}$ | interazioni dielettriche |
| Infrarosso | $10\,\mathrm{\mu m}$ | emissione termica e vibrazioni molecolari |
| Visibile | $600\,\mathrm{nm}$ | rivelazione nell'occhio e negli strumenti |
| Ultravioletto | $100\,\mathrm{nm}$ | eccitazioni elettroniche e possibili ionizzazioni |
| Raggi X | $0{,}1\,\mathrm{nm}$ | attenuazione differente nei materiali |
| Gamma | $0{,}001\,\mathrm{nm}$ | possibile emissione nucleare |
:::

:::osservazione{titolo="Confini spettrali e meccanismi di interazione"}
Il visibile occupa approssimativamente l'intervallo da $400$ a $700\,\mathrm{nm}$; la sensibilità visiva non presenta un bordo matematico netto. Il violetto ha frequenza maggiore del rosso. Un fascio rosso molto intenso può trasportare più energia totale di un debole fascio violetto, pur avendo fotoni individualmente meno energetici.

I raggi X possono essere prodotti da processi elettronici, come frenamento di elettroni o transizioni degli elettroni interni; molti raggi gamma derivano da transizioni nucleari. Le loro energie possono sovrapporsi. Perciò l'affermazione «ogni gamma è più energetico di ogni X» non segue dalla classificazione. Anche le denominazioni radio e microonde hanno confini convenzionali, spesso sovrapposti negli usi tecnici.

Nelle applicazioni biomediche lo spettro guida la scelta del meccanismo osservato: trasmissione ottica, assorbimento molecolare e attenuazione dei raggi X non misurano la stessa proprietà del campione. La sola parola «radiazione» non specifica né l'energia di ciascun quanto né quanto il materiale ne assorbe.
:::

## Fotoni: energia individuale e bilancio del fascio

:::osservazione{titolo="Dal quanto alla potenza"}
Una sorgente monocromatica emette quanti tutti della stessa energia, nel modello ideale. La potenza dice quanto rapidamente viene emessa energia; per ricavare quanti fotoni vengono emessi bisogna prima conoscere l'energia di uno solo.
:::

:::definizione{#fotoni titolo="Energia e numero di fotoni"}
$$
E_\gamma=h\nu=\dfrac{hc}{\lambda_0},\qquad
h\simeq6{,}626\cdot10^{-34}\,\mathrm{J\,s}.
$$
Con $1\,\mathrm{eV}\simeq1{,}602\cdot10^{-19}\,\mathrm J$ si ottiene la forma pratica
$$
E_\gamma\,(\mathrm{eV})\simeq\dfrac{1240}{\lambda_0\,(\mathrm{nm})},\qquad
\dot N_\gamma=\dfrac P{E_\gamma},\qquad
N_\gamma=\dfrac{P\Delta t}{E_\gamma}
$$
per potenza costante nell'intervallo $\Delta t$. Il numero di fotoni è un conteggio, mentre $\dot N_\gamma$ è un tasso in $\mathrm{s^{-1}}$.
:::

:::osservazione{titolo="Confrontare energie e tassi di fotoni"}
A $500\,\mathrm{nm}$ ogni fotone porta circa $2{,}48\,\mathrm{eV}$. Per trasformare questo valore in joule si moltiplica per l'energia corrispondente a un elettronvolt. Un fascio di potenza doppia alla stessa lunghezza d'onda ha il doppio dei fotoni al secondo, senza raddoppiare l'energia di ciascuno. Al contrario, a potenza uguale, dimezzare la lunghezza d'onda raddoppia l'energia individuale e dimezza il numero di fotoni al secondo.

![Energia del fotone in funzione della lunghezza d'onda nel vuoto e soglia di tre elettronvolt.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/photon-energy-it.svg)

Il grafico è un'iperbole: sottrarre la stessa quantità alla lunghezza d'onda non produce sempre lo stesso aumento di energia. All'ingresso in un mezzo trasparente fermo la frequenza resta invariata e quindi resta invariata $h\nu$. La lunghezza d'onda nel mezzo si accorcia perché diminuisce la velocità. Inserire questa nuova lunghezza d'onda in $\dfrac{hc}{\lambda}$ usando ancora la velocità nel vuoto darebbe erroneamente un'energia maggiore: nella formula con $c$ occorre $\lambda_0$.

Per un fascio policromatico non basta una generica «lunghezza d'onda media»: il bilancio si esegue per le diverse componenti e poi si sommano le rispettive energie o i rispettivi conteggi.
:::

## Attenuazione: frazioni, esponenziali e assorbanza

:::osservazione{titolo="Il significato della perdita frazionaria"}
Uno strato omogeneo non sottrae necessariamente la stessa potenza a ogni centimetro. Nel modello esponenziale ogni strato di uguale spessore elimina la stessa **frazione** del fascio che lo raggiunge. Il secondo strato riceve già meno radiazione del primo.
:::

:::teorema{#attenuazione titolo="Attenuazione e legge di Lambert-Beer"}
Per un fascio monocromatico collimato, materiale omogeneo e coefficiente costante,
$$
\dfrac{dI}{dx}=-\mu I,\qquad I(x)=I_0e^{-\mu x},\qquad
\mathcal T=\dfrac I{I_0},\qquad x_{1/2}=\dfrac{\ln2}{\mu}.
$$
Il coefficiente lineare $\mu$ ha unità inverse a quelle dello spessore $x$. Lo spessore emivalente $x_{1/2}$ dimezza l'intensità del fascio diretto. L'attenuazione può comprendere assorbimento e diffusione fuori dal fascio; non equivale automaticamente a energia tutta depositata nel campione.
:::

:::osservazione{titolo="Dai dati di trasmissione alla concentrazione"}
Due spessori emivalenti trasmettono un quarto, tre un ottavo. Per ricavare $\mu$ dai dati si usa $\mu=\dfrac{\ln\!\left(\dfrac{I_0}{I}\right)}{x}$: il logaritmo è naturale. Una retta nel grafico di $\ln(\dfrac{I}{I_0})$ contro $x$ ha pendenza $-\mu$, mentre il grafico ordinario di $I$ contro $x$ è curvo.

![Trasmissione esponenziale e sua rappresentazione con logaritmo naturale.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/attenuation-it.svg)

In spettrofotometria si definisce l'assorbanza decimale
$$
\mathcal A=\log_{10}\dfrac{I_0}{I}=-\log_{10}\mathcal T
=\varepsilon c_s\ell.
$$
Qui $c_s$ è la concentrazione della specie assorbente, $\ell$ il cammino ottico e $\varepsilon$ il coefficiente di assorbimento molare alla lunghezza d'onda scelta. Con $c_s$ in $\mathrm{mol/L}$ e $\ell$ in centimetri, $\varepsilon$ si esprime in $\mathrm{L\,mol^{-1}\,cm^{-1}}$. L'assorbanza è adimensionale: $\mathcal A=1$ significa trasmissione del $10\%$, non assorbimento dell'$1\%$.

La linearità richiede che la specie chimica e il suo coefficiente rimangano gli stessi, con diffusione trascurabile e banda spettrale adeguatamente stretta. Si confronta il campione con un bianco appropriato per separare il contributo di solvente e contenitore. Nei dosaggi spettrofotometrici di laboratorio, una calibrazione collega così l’assorbanza misurata alla concentrazione della specie responsabile del segnale. Per due filtri indipendenti le trasmittanze si moltiplicano e le assorbanze si sommano. In un fascio policromatico le componenti possono attenuarsi diversamente: lo spettro trasmesso cambia e un unico $\mu$ costante può non descrivere tutti gli spessori.
:::

## Che cosa cambia in un decadimento nucleare

:::osservazione{titolo="Contare protoni e nucleoni"}
La trasformazione di un nucleo non è una normale reazione chimica: può cambiare l'identità dell'elemento. Per capire il prodotto si contano protoni e nucleoni, senza confondere il numero di massa con la massa esatta del nucleo.
:::

:::definizione{#decadimenti titolo="Nuclidi, isotopi e trasformazioni"}
Nella scrittura ${}^{A}_{Z}X$, $Z$ è il numero di protoni e $A$ la somma di protoni e neutroni; i neutroni sono $A-Z$. Due isotopi dello stesso elemento hanno uguale $Z$ e diverso $A$. Essere isotopi non implica essere entrambi radioattivi: la stabilità dipende dal nuclide.

| Emissione | Trasformazione del nucleo figlio | Bilancio essenziale |
| --- | --- | --- |
| Alfa | $A-4$, $Z-2$ | esce un nucleo ${}^{4}_{2}\mathrm{He}$ |
| Beta meno | $A$ invariato, $Z+1$ | $n\to p+e^-+\bar\nu_e$ |
| Beta più | $A$ invariato, $Z-1$ | $p\to n+e^++\nu_e$ nel nucleo |
| Gamma | $A$ e $Z$ invariati | il nucleo passa a uno stato energetico inferiore |
:::

:::osservazione{titolo="Bilanci nucleari e massa a riposo"}
Nel beta meno l'elettrone non viene semplicemente estratto dalla nube elettronica: viene emesso nella trasformazione nucleare insieme all'antineutrino. Il beta più riguarda una trasformazione energeticamente permessa del nucleo; non afferma che un protone libero possa decadere spontaneamente in quel modo. Neutrini e antineutrini partecipano ai bilanci energetici e alla conservazione delle grandezze fisiche.

![Bilancio di numero di massa e numero atomico in una catena alfa e beta meno, con transizione gamma separata.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/nuclear-decays-it.svg)

Per esempio, ${}^{238}_{92}\mathrm U$ emette un'alfa e diventa ${}^{234}_{90}\mathrm{Th}$: $238=234+4$ e $92=90+2$. Un successivo beta meno conserva $234$ e aumenta il numero atomico a $91$. Dopo due beta meno si torna a uranio, ma all'isotopo con numero di massa $234$, diverso da quello iniziale.

Una transizione gamma riduce l'energia interna del nucleo, quindi anche la sua massa a riposo in misura corrispondente all'energia liberata, pur lasciando invariato il **numero di massa** $A$. Alfa e beta sono particelle massive; gamma è radiazione elettromagnetica. Le emissioni possono accompagnarsi nella stessa catena: conoscere soltanto il nome del radionuclide iniziale non autorizza a ignorare eventuali figli radioattivi.
:::

## Emivita e probabilità: la legge esponenziale

:::osservazione{titolo="Previsione statistica del decadimento"}
Un nucleo sopravvissuto a lungo non è necessariamente «vicino alla scadenza». Nel modello del decadimento esponenziale la probabilità per unità di tempo resta costante. Un grande insieme permette una previsione precisa della frazione media superstite, mentre il tempo del singolo evento resta imprevedibile.
:::

:::teorema{#decadimento-esponenziale titolo="Sopravvivenza di un radionuclide isolato"}
Senza produzione aggiuntiva, separazioni fisiche o alimentazione da precursori,
$$
N(t)=N_0e^{-\lambda_d t}=N_0\,2^{-\dfrac{t}{T_{1/2}}},\qquad
T_{1/2}=\dfrac{\ln2}{\lambda_d}.
$$
$N(t)$ indica il numero medio non ancora decaduto. La costante $\lambda_d$ ha unità di inverso del tempo; non è la lunghezza d'onda. Per un nucleo inizialmente presente,
$$
P(\text{sopravvivere fino a }t)=e^{-\lambda_d t},\qquad
P(\text{decadere entro }t)=1-e^{-\lambda_d t}.
$$
:::

:::osservazione{titolo="Media, fluttuazioni e limiti del modello"}
Dopo tre emivite la frazione superstite è $\dfrac{1}{8}$ e quella decaduta $\dfrac{7}{8}$. Non si sottrae metà del numero iniziale a ogni intervallo: si dimezza il numero ancora presente. Per un tempo non intero in unità di emivita, come $1{,}5T_{1/2}$, si usa la potenza $2^{-1{,}5}$; un'interpolazione lineare non descrive la legge.

![Numero medio di nuclei superstiti e due possibili realizzazioni discrete per un piccolo campione.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/decay-statistics-it.svg)

La curva liscia è una media; i tracciati a gradini sono due possibili campioni di nuclei indipendenti. Da cento nuclei dopo un'emivita ci si attende cinquanta superstiti, ma non si impone che ogni esperimento ne trovi esattamente cinquanta. Il modello assegna ancora probabilità $\dfrac{1}{2}$ di sopravvivere alla prossima emivita a un nucleo già sopravvissuto per tre emivite.

Per determinare un intervallo da una frazione residua $r$, si risolve $t=-\dfrac{\ln r}{\lambda_d}$. Una perdita di campione per trasporto o eliminazione biologica può ridurre la quantità misurata senza essere un decadimento nucleare. Se un nucleo figlio viene continuamente prodotto dal padre, la sua popolazione non segue in generale la semplice esponenziale decrescente con il proprio valore iniziale.
:::

## Attività e conteggi di un rivelatore

:::osservazione{titolo="Confrontare campioni radioattivi"}
Due campioni con lo stesso numero di nuclei possono avere ritmi di decadimento molto diversi. Il campione con emivita più breve perde una frazione maggiore dei propri nuclei nell'unità di tempo; inizialmente ha quindi attività maggiore.
:::

:::definizione{#attivita titolo="Decadimenti medi per secondo"}
$$
\mathscr A(t)=-\dfrac{dN}{dt}=\lambda_dN(t)
=\mathscr A_0e^{-\lambda_d t},\qquad 1\,\mathrm{Bq}=1\,\mathrm{s^{-1}}.
$$
L'attività $\mathscr A$ conta trasformazioni nucleari nell'unità di tempo. Il becquerel non è un'unità di potenza e non misura il numero totale di nuclei. Per il radionuclide isolato, attività e popolazione si dimezzano nello stesso intervallo.
:::

:::osservazione{titolo="Popolazioni, rivelatori ed energia emessa"}
A parità di attività, il radionuclide con emivita dieci volte maggiore richiede dieci volte più nuclei: $N=\dfrac{\mathscr A T_{1/2}}{\ln2}$. A parità di numero iniziale, invece, l'attività è inversamente proporzionale all'emivita. Queste due situazioni non vanno scambiate.

![Rette attività-numero di nuclei per due emivite, con uguale attività ottenuta da popolazioni diverse.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/activity-it.svg)

Il rivelatore non registra necessariamente tutti i decadimenti. Se una particolare emissione compare con probabilità $b$ per decadimento, viene registrata con efficienza $\eta$ e il fondo vale $R_f$, allora, nel modello senza perdite da tempo morto,
$$
R_{\mathrm{mis}}=\eta b\mathscr A+R_f.
$$
L'efficienza comprende qui geometria e probabilità di registrazione dell'emissione considerata. Si sottrae prima il fondo e poi si divide per $\eta b$. Un conteggio integrato su un minuto va diviso per sessanta prima di confrontarlo con un'attività in becquerel. Il modello assume attività praticamente costante durante quella misura; i conteggi osservati fluttuano attorno al valore atteso.

Su un intervallo lungo, il numero medio di decadimenti è $N_0-N(t)$, oppure l'integrale dell'attività nel tempo. Sostituirlo con $\mathscr A_0t$ è un'approssimazione valida solo quando l'attività varia poco. Per ricavare una potenza radiativa occorrono anche le energie emesse e le probabilità dei diversi canali: un uguale valore in becquerel non garantisce uguale energia al secondo.
:::

## Ionizzazione, energia depositata e dose

:::osservazione{titolo="Confrontare il fotone con il bersaglio"}
La ionizzazione rimuove un elettrone da un atomo o da una molecola. Per un processo a singolo fotone, l'energia disponibile è $h\nu$: occorre confrontarla con l'energia necessaria per il bersaglio considerato. Aumentare il numero di fotoni non aumenta l'energia di ciascuno di essi.
:::

:::definizione{#ionizzazione titolo="Energia individuale e dose assorbita"}
Radio, microonde e infrarosso sono esempi di radiazioni non ionizzanti; raggi X e gamma hanno energie capaci di ionizzare la materia ordinaria. Nell'ultravioletto conta la specifica energia e il bersaglio: non esiste un'unica conclusione per tutte le lunghezze d'onda e tutti gli atomi.

La dose media assorbita in una massa $m$ è
$$
D=\dfrac{E_{\mathrm{ass}}}{m},\qquad 1\,\mathrm{Gy}=1\,\mathrm{J/kg}.
$$
Si deve usare l'energia effettivamente depositata nella massa scelta, non tutta l'energia emessa dalla sorgente.
:::

:::osservazione{titolo="Dalla soglia alla deposizione di energia"}
Se un bersaglio ha soglia $10\,\mathrm{eV}$, la corrispondente lunghezza d'onda massima nel vuoto è circa $124\,\mathrm{nm}$. Un fotone da $100\,\mathrm{nm}$ supera la soglia; uno da $200\,\mathrm{nm}$ no. Questo confronto stabilisce una possibilità energetica, non assicura che ogni fotone incidente venga assorbito. Il ragionamento riguarda eventi a singolo fotone e non si estende automaticamente ai processi multifotonici ad alte intensità.

Anche particelle alfa e beta ionizzano lungo il percorso attraverso le loro interazioni con la materia. Il tipo di particella, la distribuzione dell'energia depositata e le proprietà del materiale contano oltre all'energia totale. Una radiazione non ionizzante intensa può riscaldare un campione: «non ionizzante» non significa «priva di effetti».

Tre domande richiedono quindi tre dati diversi: quanti decadimenti avvengono al secondo richiede l'attività; quanta energia porta ogni fotone richiede la frequenza; quanta energia resta per chilogrammo richiede la dose. Per passare dalla sorgente alla dose servono inoltre tempo, emissioni, geometria e frazione assorbita. La dose media descrive un bilancio fisico e, da sola, non determina un effetto biologico specifico.
:::

## Riflessione, rifrazione e riflessione totale

:::osservazione{titolo="La normale come riferimento"}
Un raggio rappresenta la direzione locale di propagazione nell'ottica geometrica. All'interfaccia si traccia prima la normale: usare l'angolo rispetto alla superficie al posto di quello rispetto alla normale scambia seno e coseno e può invertire la previsione.
:::

:::teorema{#snell titolo="Leggi all'interfaccia"}
Per mezzi trasparenti isotropi con interfaccia ferma, raggio incidente, riflesso, rifratto e normale appartengono allo stesso piano:
$$
\theta_r=\theta_i,\qquad n_1\sin\theta_i=n_2\sin\theta_t,
\qquad v_i=\dfrac c{n_i}.
$$
Gli angoli sono misurati dalla normale. La frequenza resta invariata, mentre $\lambda_i=\dfrac{\lambda_0}{n_i}$. Se $n_2>n_1$, il raggio trasmesso si avvicina alla normale; all'incidenza normale non cambia direzione, pur cambiando velocità.
:::

:::osservazione{titolo="Angoli, interfacce e guida della luce"}
![Raggio incidente, riflesso e rifratto con angoli misurati rispetto alla normale.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/snell-it.svg)

Per luce dall'aria, approssimata con $n_1=1$, al vetro con $n_2=1{,}5$ e $\theta_i=30^\circ$, si trova $\sin\theta_t=\dfrac{1}{3}$ e quindi $\theta_t\simeq19{,}5^\circ$. Il valore minore dell'angolo è coerente con l'ingresso nel mezzo a indice maggiore. La legge non impone che tutta l'energia sia trasmessa: una parte può essere riflessa.

Quando $n_1>n_2$, l'angolo trasmesso cresce più rapidamente di quello incidente. Al limite,
$$
\theta_c=\arcsin\dfrac{n_2}{n_1}.
$$
Per $\theta_i=\theta_c$ il raggio rifratto è radente; per $\theta_i>\theta_c$ si ha riflessione totale interna nel modello dei raggi. Se il rapporto richiesto da Snell supera uno non si cerca un «arcoseno maggiore di novanta gradi»: non esiste un raggio trasmesso propagante di quel tipo.

![Tre incidenze dal vetro all'aria: trasmissione, angolo critico e riflessione totale.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/total-reflection-it.svg)

La guida della luce in una fibra sfrutta un nucleo con indice maggiore del rivestimento e angoli appropriati. Cambiare il materiale esterno cambia l'angolo critico. Fibre ottiche possono portare luce fino alla zona osservata in strumenti endoscopici: la guida richiede di mantenere il contrasto di indice e condizioni geometriche adatte. Oltre l'angolo critico il modello ondulatorio comprende un campo evanescente vicino all'interfaccia: l'assenza del raggio trasmesso non significa che il campo sia identicamente nullo ovunque nel secondo mezzo.
:::

## Lenti sottili: posizione, verso e dimensione dell'immagine

:::osservazione{titolo="Ipotesi del modello ottico"}
Una lente convergente riunisce raggi inizialmente paralleli nel fuoco immagine. La formula dei punti coniugati descrive l'immagine di un oggetto a distanza finita, assumendo lente sottile rispetto alle distanze e raggi parassiali, vicini all'asse e poco inclinati. Le immagini reali hanno aberrazioni che il modello non descrive.
:::

:::teorema{#lenti titolo="Convenzione dei segni e punti coniugati"}
In aria si pone $f>0$ per una lente convergente, $p>0$ per un oggetto reale, $q>0$ per un'immagine reale sul lato opposto all'oggetto e $q<0$ per un'immagine virtuale sul lato dell'oggetto:
$$
\dfrac1f=\dfrac1p+\dfrac1q,\qquad
q=\dfrac{fp}{p-f},\qquad M=\dfrac{h_i}{h_o}=-\dfrac qp.
$$
Il segno di $M$ distingue immagine diritta e capovolta; il suo modulo confronta le altezze. Il potere diottrico è $\mathcal D=\dfrac1f$ con $f$ in metri, espresso in diottrie, cioè $\mathrm{m^{-1}}$. Non è la dose $D$.
:::

:::osservazione{titolo="Costruzione delle immagini reali e virtuali"}
| Posizione dell'oggetto | Posizione e natura dell'immagine |
| --- | --- |
| $p>2f$ | $f<q<2f$, reale, capovolta, ridotta |
| $p=2f$ | $q=2f$, reale, capovolta, uguale altezza in modulo |
| $f<p<2f$ | $q>2f$, reale, capovolta, ingrandita |
| $p=f$ | raggi emergenti paralleli, nessuna immagine a distanza finita |
| $0<p<f$ | $q<0$, virtuale, diritta, ingrandita |

![Tre raggi principali formano un'immagine reale capovolta per un oggetto oltre il doppio della focale.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/lens-real-it.svg)

Il raggio parallelo all'asse esce passando per il fuoco posteriore; quello attraverso il centro ottico non devia nel modello sottile; quello la cui retta incidente passa per il fuoco anteriore esce parallelo. I tre raggi devono individuare la stessa immagine. Con $f=10\,\mathrm{cm}$ e $p=30\,\mathrm{cm}$ si trova $q=15\,\mathrm{cm}$ e $M=-\dfrac{1}{2}$: uno schermo posto lì può raccogliere l'immagine capovolta.

![Raggi divergenti e prolungamenti all'indietro individuano l'immagine virtuale diritta.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/lens-virtual-it.svg)

Con la stessa lente e $p=6\,\mathrm{cm}$, invece, $q=-15\,\mathrm{cm}$ e $M=2{,}5$. I raggi emergenti divergono; si incontrano soltanto i prolungamenti all'indietro. Uno schermo nella posizione virtuale non riceve un fascio convergente proveniente dalla lente. Il segno negativo non è una distanza «impossibile», ma l'informazione sul lato dell'immagine. Vicino a $p=f$ una piccola variazione di $p$ cambia molto $q$: controllare il denominatore prima di arrotondare evita errori grandi.
:::
