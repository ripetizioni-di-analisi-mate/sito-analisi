---
titolo: Radiazioni, radioattività e ottica
sommario: Campi e fotoni, spettro e attenuazione, probabilità di decadimento e attività, ionizzazione e dose, rifrazione e immagini delle lenti sottili.
---

## Campi che trasportano energia

:::osservazione{titolo="Campi e propagazione"}
La luce, le onde radio e i raggi X sono **onde elettromagnetiche**. A differenza del suono non hanno bisogno di un mezzo e si propagano anche nel vuoto, come la luce del Sole che raggiunge la Terra. Ciò che oscilla sono un campo elettrico e un campo magnetico. Un'onda elettromagnetica trasporta energia e la cede alla materia che incontra. La si descrive in due modi, entrambi necessari: come onda, per studiarne la propagazione, e come insieme di pacchetti di energia detti fotoni, per studiare gli scambi di energia con gli atomi.
:::

:::definizione{#onde-em titolo="Onda elettromagnetica piana"}
In un'onda elettromagnetica il campo elettrico $\mathbf E$ e il campo magnetico $\mathbf B$ oscillano in direzioni perpendicolari fra loro, ed entrambe sono perpendicolari alla direzione in cui l'onda avanza. L'onda è quindi trasversale. I due campi oscillano insieme: sono massimi negli stessi istanti e nulli negli stessi istanti. Nel vuoto tutte le onde elettromagnetiche viaggiano alla stessa velocità, la **velocità della luce** $c$. Come per ogni onda, la velocità è il prodotto della lunghezza d'onda per la frequenza:
$$
c=\lambda_0\nu,\qquad T=\dfrac1\nu,\qquad c\simeq3{,}00\cdot10^8\,\mathrm{m/s}.
$$
In questo capitolo la frequenza si indica con la lettera greca $\nu$ (ni), perché la lettera $f$ indica più avanti la distanza focale delle lenti. Il simbolo $\lambda_0$ è la lunghezza d'onda nel vuoto. Frequenza e lunghezza d'onda sono inversamente proporzionali. Una luce verde con $\lambda_0=500\,\mathrm{nm}=5{,}00\cdot10^{-7}\,\mathrm m$ ha frequenza $\nu=\dfrac{c}{\lambda_0}=\dfrac{3{,}00\cdot10^8}{5{,}00\cdot10^{-7}}=6{,}0\cdot10^{14}\,\mathrm{Hz}$.
:::

:::osservazione{titolo="Intensità e lettura dei campi"}
L'**intensità** $I$ di un'onda è la potenza che attraversa una superficie perpendicolare alla direzione di propagazione, divisa per l'area della superficie, $I=\dfrac PS$. Si misura in $\mathrm{W/m^2}$. È legata all'ampiezza $E_0$ del campo elettrico, cioè al suo valore massimo, in volt al metro:
$$
I=\dfrac12\varepsilon_0cE_0^2,\qquad
\varepsilon_0\simeq8{,}85\cdot10^{-12}\,\mathrm{F/m}.
$$
L'intensità è proporzionale al quadrato dell'ampiezza, quindi con ampiezza doppia è quattro volte maggiore. Un laser di potenza $1{,}0\,\mathrm{mW}$ con un fascio di area $1{,}0\,\mathrm{mm^2}=1{,}0\cdot10^{-6}\,\mathrm{m^2}$ ha intensità $\dfrac{1{,}0\cdot10^{-3}}{1{,}0\cdot10^{-6}}=1000\,\mathrm{W/m^2}$. Se la stessa potenza è distribuita su un'area doppia, l'intensità si dimezza.

![Componenti elettrica e magnetica in fase lungo la direzione di propagazione.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/em-wave-it.svg)

In un materiale trasparente, come l'acqua o il vetro, la luce è più lenta che nel vuoto. Il rapporto fra le due velocità è l'**indice di rifrazione** $n$ del materiale, quindi la velocità nel materiale è $v=\dfrac cn$. L'indice vale 1 nel vuoto, quasi 1 nell'aria, $1{,}33$ nell'acqua e circa $1{,}5$ nel vetro. Dipende un poco dal colore della luce.
:::

## Leggere lo spettro elettromagnetico

:::osservazione{titolo="Ordinare le radiazioni"}
Le onde elettromagnetiche differiscono fra loro per la frequenza. L'insieme di tutte le frequenze possibili si chiama **spettro elettromagnetico**. Passando dalle onde radio ai raggi gamma tre grandezze cambiano insieme: la frequenza aumenta, la lunghezza d'onda diminuisce e l'energia di ciascun fotone aumenta.
:::

:::osservazione{#spettro titolo="Regioni e scale dello spettro"}
Lo spettro è diviso in sette regioni. In ordine di frequenza crescente sono onde radio, microonde, infrarosso, luce visibile, ultravioletto, raggi X e raggi gamma. La tabella dà una lunghezza d'onda tipica di ogni regione. I confini fra le regioni non sono netti.

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
La **luce visibile** occupa una parte piccolissima dello spettro, fra circa $400\,\mathrm{nm}$ (violetto) e $700\,\mathrm{nm}$ (rosso). Il violetto ha quindi frequenza maggiore del rosso.

Raggi X e raggi gamma si distinguono per l'origine. I **raggi X** sono prodotti dagli elettroni, per esempio quando elettroni veloci vengono frenati da un metallo. I **raggi gamma** sono emessi dai nuclei degli atomi. In genere i raggi gamma hanno frequenza maggiore, ma gli intervalli di frequenza dei due tipi si sovrappongono in parte.

Ogni regione interagisce con la materia in modo diverso, e la medicina usa regioni diverse per scopi diversi. Le onde radio servono nella risonanza magnetica, l'infrarosso misura la temperatura della pelle, la luce visibile serve in endoscopia e i raggi X in radiografia, perché attraversano i tessuti molli e sono fermati in misura maggiore dalle ossa.
:::

## Fotoni: energia individuale e bilancio del fascio

:::osservazione{titolo="Dal quanto alla potenza"}
Un'onda elettromagnetica scambia energia con la materia in quantità definite, dette **fotoni**. Un fascio di luce di un solo colore è formato da fotoni che hanno tutti la stessa energia. L'energia di un fotone dipende solo dalla frequenza. La potenza del fascio dipende anche da quanti fotoni arrivano ogni secondo.
:::

:::definizione{#fotoni titolo="Energia e numero di fotoni"}
$$
E_\gamma=h\nu=\dfrac{hc}{\lambda_0},\qquad
h\simeq6{,}626\cdot10^{-34}\,\mathrm{J\,s}.
$$
Questa formula dà l'energia $E_\gamma$ di un fotone. L'energia è proporzionale alla frequenza, e la costante $h$ è la **costante di Planck**. Le energie dei fotoni sono piccolissime e si esprimono in elettronvolt, con $1\,\mathrm{eV}\simeq1{,}602\cdot10^{-19}\,\mathrm J$. Con l'energia in elettronvolt e la lunghezza d'onda in nanometri la formula diventa più comoda. Dividendo la potenza $P$ del fascio per l'energia di un fotone si ottiene il numero di fotoni emessi ogni secondo, $\dot N_\gamma$, e moltiplicando per il tempo il numero totale $N_\gamma$:
$$
E_\gamma\,(\mathrm{eV})\simeq\dfrac{1240}{\lambda_0\,(\mathrm{nm})},\qquad
\dot N_\gamma=\dfrac P{E_\gamma},\qquad
N_\gamma=\dfrac{P\Delta t}{E_\gamma}
$$
Le ultime due formule valgono se la potenza resta costante durante il tempo $\Delta t$.
:::

:::osservazione{titolo="Confrontare energie e tassi di fotoni"}
Un fotone di luce verde, con $\lambda_0=500\,\mathrm{nm}$, ha energia $\dfrac{1240}{500}=2{,}48\,\mathrm{eV}$, cioè $2{,}48\cdot1{,}602\cdot10^{-19}\simeq3{,}97\cdot10^{-19}\,\mathrm J$. Un laser verde da $1{,}0\,\mathrm{mW}$ emette quindi $\dfrac{1{,}0\cdot10^{-3}}{3{,}97\cdot10^{-19}}\simeq2{,}5\cdot10^{15}$ fotoni al secondo. Dalle formule seguono due regole.

- Se la potenza raddoppia e il colore resta lo stesso, raddoppia il numero di fotoni al secondo. L'energia di ciascun fotone non cambia.
- Se la lunghezza d'onda si dimezza e la potenza resta la stessa, l'energia di ciascun fotone raddoppia e il numero di fotoni al secondo si dimezza.

![Energia del fotone in funzione della lunghezza d'onda nel vuoto e soglia di tre elettronvolt.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/photon-energy-it.svg)

Quando la luce passa dall'aria a un materiale trasparente, la frequenza resta la stessa. Resta quindi la stessa anche l'energia dei fotoni, $h\nu$. Cambiano la velocità e la lunghezza d'onda, che nel materiale diventa $\dfrac{\lambda_0}{n}$. Nella formula $E_\gamma=\dfrac{hc}{\lambda_0}$ si usa sempre la lunghezza d'onda nel vuoto.

Una luce formata da più colori, come la luce bianca, contiene fotoni di energie diverse. Il conteggio dei fotoni si esegue separatamente per ogni colore.
:::

## Attenuazione: frazioni, esponenziali e assorbanza

:::osservazione{titolo="Il significato della perdita frazionaria"}
Un fascio di radiazione che attraversa un materiale si indebolisce, perché una parte dei fotoni viene assorbita o deviata. Questo fenomeno si chiama **attenuazione**. Ogni strato di materiale dello stesso spessore toglie al fascio la stessa frazione dell'intensità che gli arriva, e non la stessa quantità. Se il primo centimetro lascia passare metà del fascio, il secondo lascia passare metà di quella metà, cioè un quarto del totale. Una grandezza che diminuisce in questo modo segue una legge esponenziale.
:::

:::teorema{#attenuazione titolo="Attenuazione e legge di Lambert-Beer"}
Per un fascio di un solo colore che attraversa uno spessore $x$ di un materiale omogeneo, l'intensità diminuisce secondo la legge seguente, in cui $I_0$ è l'intensità iniziale:
$$
\dfrac{dI}{dx}=-\mu I,\qquad I(x)=I_0e^{-\mu x},\qquad
\mathcal T=\dfrac I{I_0},\qquad x_{1/2}=\dfrac{\ln2}{\mu}.
$$
La costante $\mu$ è il **coefficiente di attenuazione** del materiale. Si misura in $\mathrm{m^{-1}}$ o in $\mathrm{cm^{-1}}$ ed è maggiore nei materiali che fermano di più la radiazione. La **trasmittanza** $\mathcal T$ è la frazione dell'intensità che attraversa il materiale. Lo **spessore emivalente** $x_{1/2}$ è lo spessore che dimezza l'intensità. Per i raggi X il piombo ha uno spessore emivalente molto minore di quello dell'acqua, e per questo si usa per le schermature.
:::

:::osservazione{titolo="Dai dati di trasmissione alla concentrazione"}
Ogni spessore emivalente dimezza l'intensità. Dopo due spessori emivalenti resta $\dfrac12\cdot\dfrac12=\dfrac14$ dell'intensità, e dopo tre resta $\dfrac18$. Un materiale con $\mu=0{,}20\,\mathrm{cm^{-1}}$ ha spessore emivalente $\dfrac{\ln2}{0{,}20}\simeq3{,}5\,\mathrm{cm}$. Uno strato di $10\,\mathrm{cm}$ lascia passare la frazione $e^{-0{,}20\cdot10}=e^{-2}\simeq0{,}14$, cioè il 14%. Da una misura di intensità si ricava il coefficiente con $\mu=\dfrac{\ln\!\left(\dfrac{I_0}{I}\right)}{x}$, dove il logaritmo è quello naturale.

![Trasmissione esponenziale e sua rappresentazione con logaritmo naturale.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/attenuation-it.svg)

La stessa legge serve in laboratorio per misurare la concentrazione di una sostanza disciolta, con uno strumento detto spettrofotometro. Si fa passare un fascio di luce attraverso la soluzione e si misura quanta ne esce. La grandezza usata è l'**assorbanza** $\mathcal A$, definita con il logaritmo in base 10. La **legge di Lambert-Beer** afferma che l'assorbanza è proporzionale alla concentrazione:
$$
\mathcal A=\log_{10}\dfrac{I_0}{I}=-\log_{10}\mathcal T
=\varepsilon c_s\ell.
$$
Nella formula $c_s$ è la concentrazione della sostanza, in $\mathrm{mol/L}$, $\ell$ è la lunghezza del percorso della luce nella soluzione, in centimetri, e $\varepsilon$ è il coefficiente di assorbimento molare, che dipende dalla sostanza e dal colore della luce. L'assorbanza è un numero puro. Un'assorbanza 1 significa che passa $\dfrac{1}{10}$ della luce, cioè il 10%. Un'assorbanza 2 significa che passa $\dfrac{1}{100}$, cioè l'1%.

Poiché assorbanza e concentrazione sono proporzionali, una soluzione con assorbanza doppia ha concentrazione doppia. Nella pratica si misura prima l'assorbanza del solo solvente nel suo contenitore, detta bianco, e la si sottrae. Se la luce attraversa due filtri uno dopo l'altro, le trasmittanze si moltiplicano e le assorbanze si sommano. Due filtri che lasciano passare ciascuno il 10% ne lasciano passare insieme l'1%. La legge vale per luce di un solo colore e per soluzioni non troppo concentrate.
:::

## Che cosa cambia in un decadimento nucleare

:::osservazione{titolo="Contare protoni e nucleoni"}
Il nucleo di un atomo è formato da protoni e neutroni, detti insieme **nucleoni**. Alcuni nuclei sono instabili: si trasformano spontaneamente in un altro nucleo ed emettono radiazione. Questo fenomeno si chiama **radioattività**, o decadimento radioattivo. A differenza di una reazione chimica, che riguarda gli elettroni, un decadimento cambia il nucleo e può trasformare un elemento in un altro.
:::

:::definizione{#decadimenti titolo="Nuclidi, isotopi e trasformazioni"}
Un nucleo si indica con la scrittura ${}^{A}_{Z}X$, dove $X$ è il simbolo dell'elemento. Il **numero atomico** $Z$ è il numero di protoni e stabilisce di quale elemento si tratta. Il **numero di massa** $A$ è il numero totale di nucleoni, quindi i neutroni sono $A-Z$. Due **isotopi** sono nuclei dello stesso elemento, cioè con lo stesso $Z$, con un numero diverso di neutroni, cioè con $A$ diverso. Il carbonio-12 e il carbonio-14 sono isotopi: il primo è stabile e il secondo è radioattivo. I decadimenti sono di quattro tipi.

| Emissione | Trasformazione del nucleo figlio | Bilancio essenziale |
| --- | --- | --- |
| Alfa | $A-4$, $Z-2$ | esce un nucleo ${}^{4}_{2}\mathrm{He}$ |
| Beta meno | $A$ invariato, $Z+1$ | $n\to p+e^-+\bar\nu_e$ |
| Beta più | $A$ invariato, $Z-1$ | $p\to n+e^++\nu_e$ nel nucleo |
| Gamma | $A$ e $Z$ invariati | il nucleo passa a uno stato energetico inferiore |
:::

:::osservazione{titolo="Bilanci nucleari e massa a riposo"}
La tabella si legge così.

- Nel decadimento **alfa** il nucleo emette una particella alfa, cioè un nucleo di elio formato da due protoni e due neutroni. Perde quindi 4 nucleoni, di cui 2 protoni.
- Nel decadimento **beta meno** un neutrone del nucleo si trasforma in un protone, e vengono emessi un elettrone e un antineutrino. Il numero di nucleoni resta lo stesso e i protoni aumentano di uno. L'elettrone emesso nasce nel nucleo al momento della trasformazione e non è uno degli elettroni che circondano il nucleo.
- Nel decadimento **beta più** un protone del nucleo si trasforma in un neutrone, e vengono emessi un positrone, cioè un elettrone con carica positiva, e un neutrino. I protoni diminuiscono di uno.
- Nel decadimento **gamma** il nucleo passa da uno stato con più energia a uno con meno energia ed emette un fotone gamma. Il numero di protoni e quello di neutroni non cambiano.

In ogni decadimento si conservano il numero totale di nucleoni e la carica totale. Con queste due regole si trova il nucleo prodotto.

![Bilancio di numero di massa e numero atomico in una catena alfa e beta meno, con transizione gamma separata.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/nuclear-decays-it.svg)

L'uranio-238, ${}^{238}_{92}\mathrm U$, per esempio, emette una particella alfa. Il nucleo prodotto ha $A=238-4=234$ e $Z=92-2=90$. L'elemento con $Z=90$ è il torio, quindi il prodotto è ${}^{234}_{90}\mathrm{Th}$. Il torio-234 decade poi beta meno: $A$ resta 234 e $Z$ diventa 91. Un secondo decadimento beta meno porta $Z$ a 92, che è di nuovo uranio, con $A=234$. Si ottiene quindi l'uranio-234, un isotopo dell'uranio di partenza.

Le particelle alfa e beta hanno massa. La radiazione gamma è un'onda elettromagnetica, cioè è fatta di fotoni. Il nucleo prodotto da un decadimento è spesso anch'esso radioattivo, e i decadimenti proseguono in una serie, detta catena di decadimento, fino a un nucleo stabile.
:::

## Emivita e probabilità: la legge esponenziale

:::osservazione{titolo="Previsione statistica del decadimento"}
Il decadimento di un singolo nucleo è un evento casuale: non è possibile prevedere quando avverrà. Ogni nucleo di un certo tipo ha la stessa probabilità di decadere nel prossimo secondo, qualunque sia il tempo già trascorso. Un nucleo non invecchia. Su un numero grande di nuclei, però, la frazione che decade in un dato tempo si prevede con precisione. Il tempo in cui decade metà dei nuclei si chiama **emivita**, o tempo di dimezzamento, e si indica con $T_{1/2}$. Lo iodio-131, usato in medicina, ha un'emivita di 8 giorni. Il carbonio-14 ha un'emivita di 5730 anni.
:::

:::teorema{#decadimento-esponenziale titolo="Sopravvivenza di un radionuclide isolato"}
Se all'istante iniziale i nuclei sono $N_0$, dopo un tempo $t$ ne restano in media:
$$
N(t)=N_0e^{-\lambda_d t}=N_0\,2^{-\dfrac{t}{T_{1/2}}},\qquad
T_{1/2}=\dfrac{\ln2}{\lambda_d}.
$$
La **costante di decadimento** $\lambda_d$ è la probabilità che un nucleo decada in un'unità di tempo. Si misura in $\mathrm{s^{-1}}$ e non va confusa con la lunghezza d'onda, che ha un simbolo simile. È legata all'emivita dalla seconda formula: un nucleo con emivita breve ha una costante di decadimento grande. Le due forme della legge sono equivalenti, e quella con la potenza di 2 è più comoda quando il tempo è un multiplo dell'emivita. Per un singolo nucleo le stesse espressioni danno le probabilità:
$$
P(\text{sopravvivere fino a }t)=e^{-\lambda_d t},\qquad
P(\text{decadere entro }t)=1-e^{-\lambda_d t}.
$$
:::

:::osservazione{titolo="Media, fluttuazioni e limiti del modello"}
A ogni emivita si dimezza il numero di nuclei ancora presenti in quel momento. Dopo una emivita resta $\dfrac12$ dei nuclei iniziali, dopo due resta $\dfrac14$ e dopo tre resta $\dfrac18$, mentre i $\dfrac78$ sono decaduti. Un campione di iodio-131 dopo 24 giorni, cioè tre emivite, contiene un ottavo dei nuclei iniziali. Se il tempo non è un multiplo dell'emivita si usa la formula. Dopo una emivita e mezza resta la frazione $2^{-1{,}5}\simeq0{,}35$.

![Numero medio di nuclei superstiti e due possibili realizzazioni discrete per un piccolo campione.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/decay-statistics-it.svg)

La legge dà il valore medio. Nella figura la curva liscia è la media, e le linee a gradini sono due possibili andamenti reali di un campione piccolo. Da 100 nuclei, dopo una emivita, ne restano in media 50, e in un singolo esperimento ne restano per esempio 47 o 54. Con un numero enorme di nuclei, come in un campione reale, queste differenze sono trascurabili. Un nucleo che è già sopravvissuto per tre emivite ha ancora probabilità $\dfrac12$ di sopravvivere per un'altra emivita.

Per trovare il tempo necessario perché resti una frazione $r$ dei nuclei si inverte la legge, $t=-\dfrac{\ln r}{\lambda_d}$. In un organismo una sostanza radioattiva diminuisce anche perché viene eliminata, per esempio con le urine. La quantità presente nel corpo diminuisce allora più in fretta di quanto prevede il solo decadimento.
:::

## Attività e conteggi di un rivelatore

:::osservazione{titolo="Confrontare campioni radioattivi"}
Per descrivere quanto è radioattivo un campione non basta il numero di nuclei. Conta il numero di decadimenti che avvengono ogni secondo, detto **attività**. Due campioni con lo stesso numero di nuclei hanno attività diverse se le emivite sono diverse: quello con emivita più breve decade più in fretta e ha attività maggiore.
:::

:::definizione{#attivita titolo="Decadimenti medi per secondo"}
$$
\mathscr A(t)=-\dfrac{dN}{dt}=\lambda_dN(t)
=\mathscr A_0e^{-\lambda_d t},\qquad 1\,\mathrm{Bq}=1\,\mathrm{s^{-1}}.
$$
L'attività $\mathscr A$ è il prodotto della costante di decadimento per il numero di nuclei presenti. Si misura in **becquerel**, e $1\,\mathrm{Bq}$ è un decadimento al secondo. Poiché è proporzionale al numero di nuclei, l'attività diminuisce nel tempo con la stessa legge esponenziale e si dimezza a ogni emivita. Un campione di iodio-131 con attività di $400\,\mathrm{MBq}$ ha dopo 16 giorni, cioè due emivite, un'attività di $100\,\mathrm{MBq}$.
:::

:::osservazione{titolo="Popolazioni, rivelatori ed energia emessa"}
Dalla definizione, sostituendo $\lambda_d=\dfrac{\ln2}{T_{1/2}}$, si ottiene il numero di nuclei che corrisponde a una data attività, $N=\dfrac{\mathscr A\,T_{1/2}}{\ln2}$. Ne seguono due confronti. A parità di attività, il campione con emivita maggiore contiene più nuclei. A parità di numero di nuclei, il campione con emivita maggiore ha attività minore.

![Rette attività-numero di nuclei per due emivite, con uguale attività ottenuta da popolazioni diverse.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/activity-it.svg)

L'attività si misura con un **rivelatore**, che conta le radiazioni che lo raggiungono. Il rivelatore non conta tutti i decadimenti, per tre motivi. Solo una frazione $b$ dei decadimenti emette la radiazione che lo strumento rivela. Solo una frazione $\eta$ di queste radiazioni, detta **efficienza**, raggiunge lo strumento e viene registrata. Inoltre lo strumento registra alcuni conteggi anche senza campione, dovuti alla radioattività naturale dell'ambiente, detti **fondo** $R_f$. I conteggi al secondo misurati sono quindi:
$$
R_{\mathrm{mis}}=\eta b\mathscr A+R_f.
$$
Per ricavare l'attività dalla misura si sottrae prima il fondo e poi si divide per $\eta b$. Un rivelatore, per esempio, registra 1300 conteggi in un minuto, con un fondo di 100 conteggi al minuto, efficienza $\eta=0{,}10$ e $b=1$. I conteggi dovuti al campione sono $1300-100=1200$ al minuto, cioè $\dfrac{1200}{60}=20$ al secondo. L'attività è $\dfrac{20}{0{,}10}=200\,\mathrm{Bq}$.

Il numero di decadimenti avvenuti in un tempo $t$ è $N_0-N(t)$. Se $t$ è molto più breve dell'emivita l'attività resta quasi costante, e il numero di decadimenti è con buona approssimazione $\mathscr A_0t$. L'attività indica quanti decadimenti avvengono e non quanta energia viene emessa. Due campioni con la stessa attività emettono energie diverse se le loro radiazioni hanno energie diverse.
:::

## Ionizzazione, energia depositata e dose

:::osservazione{titolo="Confrontare il fotone con il bersaglio"}
La **ionizzazione** è la rimozione di un elettrone da un atomo o da una molecola. Per ogni atomo serve un'energia minima, detta energia di ionizzazione, di alcuni elettronvolt. Un fotone ionizza un atomo solo se la sua energia $h\nu$ è almeno uguale a questa energia minima. Un fotone con energia minore non ionizza, e un numero maggiore di fotoni dello stesso tipo non cambia il risultato, perché l'energia di ciascuno resta la stessa.
:::

:::definizione{#ionizzazione titolo="Energia individuale e dose assorbita"}
Le radiazioni si dividono per questo in due gruppi.

- Le **radiazioni non ionizzanti** hanno fotoni con energia troppo bassa per ionizzare. Sono le onde radio, le microonde, l'infrarosso e la luce visibile.
- Le **radiazioni ionizzanti** hanno energia sufficiente. Sono i raggi X, i raggi gamma e l'ultravioletto di frequenza più alta, oltre alle particelle alfa e beta.

Le radiazioni ionizzanti rompono i legami chimici e danneggiano le molecole delle cellule, compreso il DNA. La quantità di radiazione ricevuta da un materiale si misura con la **dose assorbita** $D$, cioè l'energia che la radiazione cede al materiale divisa per la massa del materiale:
$$
D=\dfrac{E_{\mathrm{ass}}}{m},\qquad 1\,\mathrm{Gy}=1\,\mathrm{J/kg}.
$$
La dose si misura in **gray** (Gy). Conta solo l'energia assorbita dal materiale, e non quella che lo attraversa senza essere assorbita. Un tessuto di massa $0{,}50\,\mathrm{kg}$ che assorbe $1{,}0\,\mathrm J$ riceve una dose di $\dfrac{1{,}0}{0{,}50}=2{,}0\,\mathrm{Gy}$.
:::

:::osservazione{titolo="Dalla soglia alla deposizione di energia"}
Un atomo, per esempio, ha energia di ionizzazione di $10\,\mathrm{eV}$. Un fotone ha questa energia se la sua lunghezza d'onda è $\lambda_0=\dfrac{1240}{10}=124\,\mathrm{nm}$. Un fotone con lunghezza d'onda minore ha più energia. Un fotone da $100\,\mathrm{nm}$, con energia $12{,}4\,\mathrm{eV}$, ionizza quindi l'atomo. Un fotone da $200\,\mathrm{nm}$, con energia $6{,}2\,\mathrm{eV}$, non lo ionizza.

Le particelle alfa e beta ionizzano gli atomi che incontrano lungo il loro percorso. Le particelle alfa cedono tutta la loro energia in un tratto brevissimo e sono fermate da un foglio di carta. Le beta sono fermate da qualche millimetro di alluminio. I raggi gamma sono molto più penetranti. Una radiazione non ionizzante ha comunque effetti: le microonde e l'infrarosso scaldano i tessuti.

Le tre grandezze di questa parte del capitolo rispondono a tre domande diverse. L'**attività**, in becquerel, dice quanti decadimenti avvengono ogni secondo nella sorgente. L'**energia del fotone**, in elettronvolt, dice se la radiazione è ionizzante. La **dose**, in gray, dice quanta energia è stata assorbita per ogni chilogrammo di tessuto. Il danno biologico dipende inoltre dal tipo di radiazione e dal tessuto colpito.
:::

## Riflessione, rifrazione e riflessione totale

:::osservazione{titolo="La normale come riferimento"}
L'**ottica geometrica** descrive la luce con i **raggi**, cioè linee rette che indicano la direzione in cui la luce avanza. Quando un raggio arriva sulla superficie che separa due materiali trasparenti, per esempio aria e acqua, una parte della luce torna indietro (**riflessione**) e una parte entra nel secondo materiale cambiando direzione (**rifrazione**). Tutti gli angoli si misurano rispetto alla **normale**, cioè alla retta perpendicolare alla superficie nel punto in cui arriva il raggio, e non rispetto alla superficie.
:::

:::teorema{#snell titolo="Leggi all'interfaccia"}
Il raggio che arriva (incidente), quello riflesso e quello rifratto stanno nello stesso piano, insieme alla normale. Se $\theta_i$ è l'angolo di incidenza, $\theta_r$ quello di riflessione e $\theta_t$ quello di rifrazione, valgono la **legge della riflessione** e la **legge di Snell** per la rifrazione:
$$
\theta_r=\theta_i,\qquad n_1\sin\theta_i=n_2\sin\theta_t,
\qquad v_i=\dfrac c{n_i}.
$$
La prima legge dice che l'angolo di riflessione è uguale a quello di incidenza. Nella seconda $n_1$ e $n_2$ sono gli indici di rifrazione dei due materiali. Ne segue la regola seguente.

- Se la luce passa in un materiale con indice maggiore, per esempio dall'aria al vetro, il raggio si avvicina alla normale.
- Se passa in un materiale con indice minore, per esempio dal vetro all'aria, il raggio si allontana dalla normale.

Un raggio che arriva lungo la normale prosegue diritto. Nel passaggio la frequenza della luce resta la stessa, e cambiano la velocità e la lunghezza d'onda.
:::

:::osservazione{titolo="Angoli, interfacce e guida della luce"}
![Raggio incidente, riflesso e rifratto con angoli misurati rispetto alla normale.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/snell-it.svg)

Un raggio passa dall'aria ($n_1=1$) al vetro ($n_2=1{,}5$) con angolo di incidenza $\theta_i=30^\circ$. Dalla legge di Snell, $1\cdot\sin30^\circ=1{,}5\cdot\sin\theta_t$, quindi $\sin\theta_t=\dfrac{0{,}5}{1{,}5}=\dfrac13$ e $\theta_t\simeq19{,}5^\circ$. L'angolo è minore di quello di incidenza, perché il raggio entra in un materiale con indice maggiore.

Nel passaggio opposto, da un materiale con indice maggiore a uno con indice minore, l'angolo di rifrazione è più grande di quello di incidenza. Aumentando l'angolo di incidenza, l'angolo di rifrazione arriva a $90^\circ$, e il raggio rifratto corre lungo la superficie. L'angolo di incidenza per cui ciò accade è l'**angolo limite** $\theta_c$. Ponendo $\theta_t=90^\circ$ nella legge di Snell si ottiene:
$$
\theta_c=\arcsin\dfrac{n_2}{n_1}.
$$
Per angoli di incidenza maggiori dell'angolo limite il raggio rifratto non esiste, e tutta la luce viene riflessa. Questo fenomeno si chiama **riflessione totale**. Avviene solo quando la luce va da un materiale con indice maggiore verso uno con indice minore. Dal vetro ($n_1=1{,}5$) all'aria l'angolo limite è $\arcsin\dfrac{1}{1{,}5}\simeq41{,}8^\circ$.

![Tre incidenze dal vetro all'aria: trasmissione, angolo critico e riflessione totale.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/total-reflection-it.svg)

Le **fibre ottiche** funzionano con la riflessione totale. Una fibra è un filo sottile di vetro formato da una parte centrale e da un rivestimento con indice di rifrazione minore. La luce che entra nella parte centrale colpisce la parete con un angolo maggiore dell'angolo limite, viene riflessa totalmente e prosegue a zig-zag lungo la fibra, anche se la fibra è curva. L'**endoscopio** usa fasci di fibre ottiche per portare la luce all'interno del corpo e riportare all'esterno l'immagine.
:::

## Lenti sottili: posizione, verso e dimensione dell'immagine

:::osservazione{titolo="Ipotesi del modello ottico"}
Una **lente** è un oggetto trasparente con le superfici curve, che devia i raggi per rifrazione. Una lente **convergente**, più spessa al centro che ai bordi, fa convergere in un punto i raggi che arrivano paralleli al suo asse. Quel punto è il **fuoco**, e la sua distanza dalla lente è la **distanza focale** $f$. Una lente **divergente**, più sottile al centro, allontana i raggi fra loro. Le formule seguenti valgono per una lente sottile, cioè di spessore piccolo rispetto alle distanze in gioco, e per raggi vicini all'asse.
:::

:::teorema{#lenti titolo="Convenzione dei segni e punti coniugati"}
Un oggetto si trova a distanza $p$ dalla lente. La lente ne forma un'immagine a distanza $q$. L'**equazione delle lenti sottili** lega le tre distanze, e l'**ingrandimento** $M$ è il rapporto fra l'altezza dell'immagine $h_i$ e quella dell'oggetto $h_o$:
$$
\dfrac1f=\dfrac1p+\dfrac1q,\qquad
q=\dfrac{fp}{p-f},\qquad M=\dfrac{h_i}{h_o}=-\dfrac qp.
$$
I segni hanno un significato preciso.

- $f$ è positiva per una lente convergente e negativa per una divergente.
- $q$ è positiva se l'immagine si forma dalla parte opposta all'oggetto. L'immagine è **reale**: i raggi vi passano davvero e la si raccoglie su uno schermo.
- $q$ è negativa se l'immagine si forma dalla stessa parte dell'oggetto. L'immagine è **virtuale**: la si vede guardando attraverso la lente e non si raccoglie su uno schermo.
- $M$ è negativo se l'immagine è capovolta e positivo se è diritta. L'immagine è ingrandita se $|M|>1$ e ridotta se $|M|<1$.

Il **potere diottrico** di una lente è $\mathcal D=\dfrac1f$, con $f$ in metri. Si misura in **diottrie**. Una lente con $f=0{,}50\,\mathrm m$ ha potere di 2 diottrie. È la grandezza indicata sulle prescrizioni degli occhiali.
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

L'immagine si costruisce sul disegno con tre raggi che partono dalla punta dell'oggetto.

1. Il raggio parallelo all'asse, dopo la lente, passa per il fuoco che sta dall'altra parte.
2. Il raggio che passa per il centro della lente prosegue diritto.
3. Il raggio che passa per il fuoco dalla parte dell'oggetto, dopo la lente, esce parallelo all'asse.

I tre raggi si incontrano nella punta dell'immagine. Con $f=10\,\mathrm{cm}$ e $p=30\,\mathrm{cm}$ l'equazione dà $\dfrac1q=\dfrac1{10}-\dfrac1{30}=\dfrac{2}{30}$, quindi $q=15\,\mathrm{cm}$. L'ingrandimento è $M=-\dfrac{15}{30}=-\dfrac12$. L'immagine è reale, capovolta e alta la metà dell'oggetto. È il caso dell'occhio e della macchina fotografica.

![Raggi divergenti e prolungamenti all'indietro individuano l'immagine virtuale diritta.](/figure/fisica-semestre-filtro/radiazioni-e-ottica/lens-virtual-it.svg)

Con la stessa lente e l'oggetto più vicino del fuoco, $p=6\,\mathrm{cm}$, l'equazione dà $\dfrac1q=\dfrac1{10}-\dfrac16=-\dfrac{4}{60}$, quindi $q=-15\,\mathrm{cm}$. L'ingrandimento è $M=-\dfrac{-15}{6}=2{,}5$. Il segno meno di $q$ indica che l'immagine è virtuale e sta dalla stessa parte dell'oggetto. Dopo la lente i raggi si allontanano fra loro, e si incontrano solo i loro prolungamenti all'indietro. L'immagine è diritta e ingrandita due volte e mezza. È il caso della lente di ingrandimento. Quando l'oggetto è molto vicino al fuoco, $p-f$ è piccolo e una piccola variazione di $p$ cambia molto $q$.
:::
