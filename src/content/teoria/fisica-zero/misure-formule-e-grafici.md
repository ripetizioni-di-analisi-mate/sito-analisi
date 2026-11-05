---
titolo: Misure, formule e grafici
sommario: Lettura degli strumenti, incertezza delle misure, media e semidispersione, arrotondamenti, formule inverse, proporzionalità e rappresentazione dei dati nei grafici.
---

## Gli strumenti di misura

:::definizione{#strumenti titolo="Portata e risoluzione"}
Uno strumento permette di confrontare una grandezza con l'unità di misura. Un righello misura lunghezze, una bilancia misura masse e un cronometro misura intervalli di tempo. Ogni strumento può misurare soltanto entro un certo intervallo di valori.

La **portata**, per uno strumento la cui scala parte da zero, è il valore massimo che lo strumento può misurare. La **risoluzione** è la più piccola variazione della grandezza che lo strumento permette di distinguere. In un righello con tacche millimetriche la distanza fra due tacche consecutive è $1\,\mathrm{mm}$. Per una bilancia digitale che mostra passi di $1\,\mathrm{g}$, il passo dell'indicazione è $1\,\mathrm{g}$.

Per esempio una bilancia con portata $5\,\mathrm{kg}$ e risoluzione $1\,\mathrm{g}$ può indicare $352\,\mathrm{g}$, ma una massa di $6\,\mathrm{kg}$ supera il suo intervallo di misura. Portata e risoluzione descrivono due caratteristiche distinte.
:::

:::esempio{titolo="Lettura di una scala"}
Fra le tacche segnate $20\,\mathrm{mL}$ e $30\,\mathrm{mL}$ di un recipiente graduato ci sono cinque intervalli uguali. Il valore di un intervallo è
$$
r=\frac{30-20}{5}\,\mathrm{mL}=2\,\mathrm{mL}.
$$
La lettera $r$ indica il passo della scala. La terza tacca dopo $20\,\mathrm{mL}$ corrisponde a $20+3\cdot2=26\,\mathrm{mL}$.

::grafico{assi=0 uguale=1 xmin=-0.5 xmax=5.7 ymin=-0.8 ymax=1.3 linee="0,0 5,0;0,-0.15 0,0.15;1,-0.15 1,0.15;2,-0.15 2,0.15;3,-0.15 3,0.15;4,-0.15 4,0.15;5,-0.15 5,0.15" punti="3,0,pieno" etichette="0,-0.45,20;1,-0.45,22;2,-0.45,24;3,-0.45,26;4,-0.45,28;5,-0.45,30;3,0.65,lettura;5.3,0.7,mL" titolo="La scala rappresenta cinque intervalli da $2\,\mathrm{mL}$."}
:::

:::attenzione{titolo="Risoluzione e accuratezza"}
Un piccolo passo di lettura non garantisce che lo strumento misuri vicino al valore di riferimento. Una bilancia che aggiunge sistematicamente $5\,\mathrm{g}$ può mostrare $105\,\mathrm{g}$ per una massa campione di $100\,\mathrm{g}$, anche se la risoluzione è $1\,\mathrm{g}$. L'**accuratezza** riguarda l'accordo con il valore di riferimento; la risoluzione riguarda le variazioni distinguibili.
:::

## Come si esprime una misura

:::definizione{#incertezza titolo="Valore misurato e incertezza"}
La lettura di uno strumento e il procedimento di misura hanno dei limiti. Per descriverli si accompagna il valore misurato con un'**incertezza assoluta**, cioè una quantità positiva espressa nella stessa unità della grandezza.

La scrittura
$$
\ell=(12{,}4\pm0{,}1)\,\mathrm{cm}
$$
indica un valore misurato di $12{,}4\,\mathrm{cm}$ e un'incertezza assoluta di $0{,}1\,\mathrm{cm}$. Il simbolo $\pm$ si legge «più o meno». Sottraendo e aggiungendo l'incertezza si ottiene l'intervallo associato alla misura, da $12{,}3\,\mathrm{cm}$ a $12{,}5\,\mathrm{cm}$.

L'intervallo esprime la stima adottata nel procedimento. Il suo significato dipende da come è stata valutata l'incertezza; la sola scrittura con $\pm$ non garantisce che contenga certamente il valore vero.
:::

:::osservazione{#stima-lettura titolo="Stima dell'incertezza di lettura"}
In un esercizio si può adottare un criterio esplicito per stimare l'incertezza. Per una scala analogica regolare si può, per esempio, assumere metà della minima divisione, se si considera soltanto l'incertezza di lettura fra due tacche. Per una minima divisione di $2\,\mathrm{mL}$ questo criterio dà $1\,\mathrm{mL}$.

Questa scelta riguarda un modello semplificato. Uno strumento reale può avere ulteriori contributi dovuti alla taratura, al modo in cui viene usato o alla stabilità dell'oggetto misurato. Nei problemi il criterio adottato viene dichiarato, così il calcolo ha un significato preciso.
:::

:::esempio{titolo="Estremi dell'intervallo associato"}
Per una massa $m=(248\pm2)\,\mathrm{g}$, il valore centrale è $248\,\mathrm{g}$. Gli estremi dell'intervallo associato sono
$$
m_{\min}=(248-2)\,\mathrm{g}=246\,\mathrm{g},
\qquad
m_{\max}=(248+2)\,\mathrm{g}=250\,\mathrm{g}.
$$
La larghezza dell'intervallo è $4\,\mathrm{g}$, cioè due volte l'incertezza assoluta.
:::

## Misure ripetute

:::definizione{#media titolo="Media aritmetica delle misure"}
Ripetendo una misura si possono ottenere letture leggermente diverse. Per riassumere una serie di $n$ misure, cioè una serie che contiene $n$ valori, si usa la **media aritmetica**, ottenuta sommando tutti i valori e dividendo per il loro numero.

Se $x_1$, $x_2$, fino a $x_n$ indicano le letture della stessa grandezza, la media, indicata con $\overline{x}$, è
$$
\overline{x}=\frac{x_1+x_2+\cdots+x_n}{n}.
$$
I puntini indicano che si sommano anche gli eventuali valori intermedi. Per tre durate di $9{,}8\,\mathrm{s}$, $10{,}0\,\mathrm{s}$ e $10{,}2\,\mathrm{s}$ si ottiene una durata media di $\dfrac{9{,}8+10{,}0+10{,}2}{3}\,\mathrm{s}=10{,}0\,\mathrm{s}$. Le letture devono essere riferite alla stessa grandezza, nelle stesse condizioni, ed espresse nella stessa unità.
:::

:::definizione{#semidispersione titolo="Semidispersione"}
Per descrivere in modo elementare la variazione fra le letture si può usare la **semidispersione**, cioè metà della differenza fra la lettura massima e quella minima:
$$
s=\frac{x_{\max}-x_{\min}}{2}.
$$
La lettera $s$ indica qui la semidispersione. Per le durate $9{,}8\,\mathrm{s}$, $10{,}0\,\mathrm{s}$ e $10{,}2\,\mathrm{s}$ si ha $s=0{,}2\,\mathrm{s}$. In un esercizio introduttivo che assume la semidispersione come incertezza, il risultato si scrive $(10{,}0\pm0{,}2)\,\mathrm{s}$.

La semidispersione descrive soltanto l'intervallo delle letture ottenute. Ripetere una misura può evidenziare la variabilità, mentre un errore sistematico può interessare tutte le letture nello stesso modo. La stima completa dell'incertezza richiede anche informazioni sullo strumento e sul metodo.
:::

:::osservazione{titolo="Letture tutte uguali"}
Tre letture uguali a $20{,}0\,\mathrm{g}$ hanno semidispersione nulla. Questo risultato indica che le letture registrate coincidono. La bilancia conserva comunque i propri limiti di misura.

Se il testo di un problema prescrive di usare il maggiore fra la semidispersione e un'incertezza strumentale assegnata di $0{,}1\,\mathrm{g}$, si assume $0{,}1\,\mathrm{g}$ e si scrive $(20{,}0\pm0{,}1)\,\mathrm{g}$. Il criterio è dichiarato perché non costituisce una regola generale per combinare qualsiasi tipo di incertezza.
:::

## Confronto delle incertezze

:::definizione{#incertezza-relativa titolo="Incertezza relativa e percentuale"}
Per confrontare misure di grandezze positive di dimensioni diverse si considera l'incertezza rispetto al valore misurato. Se $x>0$ è il valore misurato e $u$ la sua incertezza assoluta, l'**incertezza relativa** è
$$
u_r=\frac{u}{x}.
$$
Il simbolo $u_r$ indica il rapporto; le unità al numeratore e al denominatore sono uguali e si semplificano. Per scriverlo in percentuale si moltiplica il valore numerico per $100$ e si aggiunge il simbolo $\%$.

Per $\ell=(50\pm1)\,\mathrm{cm}$ si ottiene $u_r=\dfrac{1}{50}=0{,}02$, cioè il $2\%$. Un'incertezza di un centimetro rappresenta due centesimi della lunghezza misurata.

Il rapporto resta uguale quando si cambia l'unità. La stessa misura in metri è $(0{,}50\pm0{,}01)\,\mathrm{m}$ e dà ancora $u_r=\dfrac{0{,}01}{0{,}50}=0{,}02$. Valore misurato e incertezza assoluta sono stati divisi entrambi per cento, quindi il loro rapporto non cambia.
:::

:::esempio{titolo="La stessa incertezza assoluta"}
Le misure $\ell_1=(20\pm1)\,\mathrm{cm}$ e $\ell_2=(100\pm1)\,\mathrm{cm}$ hanno la stessa incertezza assoluta. Le incertezze relative sono però
$$
u_{r,1}=\frac{1}{20}=0{,}05=5\%,
\qquad
u_{r,2}=\frac{1}{100}=0{,}01=1\%.
$$
La seconda misura ha **incertezza relativa minore**, perché lo stesso centimetro rappresenta una frazione più piccola del valore misurato. Il confronto riguarda le incertezze dichiarate e presuppone che siano state stimate con criteri confrontabili.
:::

## Arrotondamenti

:::teorema{#arrotondamento titolo="Arrotondamento di un numero"}
Per arrotondare a una posizione decimale si osserva la cifra immediatamente successiva. Se questa è minore di $5$, la cifra conservata resta uguale; se è almeno $5$, si aumenta di uno la cifra conservata. Le cifre successive vengono eliminate. Nei casi esattamente a metà si adotta qui la convenzione di arrotondare verso l'alto per i numeri positivi.

Per esempio $3{,}246$ arrotondato ai centesimi diventa $3{,}25$, perché la terza cifra decimale è $6$. Il numero $3{,}241$ diventa invece $3{,}24$, perché la terza cifra è $1$. Il simbolo $\approx$ indica che i due valori sono approssimativamente uguali.
:::

:::osservazione{#cifre-misura titolo="Cifre del valore e dell'incertezza"}
Nelle misure proposte in questo percorso si riporta di solito l'incertezza con una cifra significativa, oppure con due quando questo evita un arrotondamento troppo grossolano. Le **cifre significative** sono le cifre che esprimono la precisione con cui si riporta il numero, a partire dalla prima cifra diversa da zero.

Il valore misurato si arrotonda alla stessa posizione decimale dell'incertezza riportata. Se il calcolo dà una lunghezza media di $12{,}437\,\mathrm{cm}$ e l'incertezza viene riportata come $0{,}1\,\mathrm{cm}$, si scrive $(12{,}4\pm0{,}1)\,\mathrm{cm}$. Se l'incertezza assegnata è $0{,}05\,\mathrm{cm}$, si scrive invece $(12{,}44\pm0{,}05)\,\mathrm{cm}$.

Nei passaggi intermedi si possono conservare più cifre, per evitare che gli arrotondamenti successivi alterino il risultato finale. Le conversioni esatte, come il fattore $100$ fra metri e centimetri, non introducono un'incertezza aggiuntiva.
:::

## Le formule e le grandezze incognite

:::definizione{#formula-inversa titolo="Formula inversa"}
Una **formula** esprime una relazione fra grandezze usando lettere. Ogni lettera rappresenta una grandezza definita. Nella formula della densità, $\rho=\dfrac{m}{V}$, $m$ è la massa e $V$ è il volume.

Una **formula inversa** è la stessa relazione riscritta per trovare una grandezza diversa. Per ricavare la massa si moltiplicano entrambi i membri per il volume:
$$
\rho V=\frac{m}{V}V=m,
\qquad m=\rho V.
$$
Per ricavare il volume, con densità positiva, si divide l'uguaglianza $\rho V=m$ per $\rho$, ottenendo
$$
V=\frac{m}{\rho}.
$$
Le operazioni sono lecite perché il volume e la densità considerati sono positivi. Il procedimento permette di usare una sola relazione per determinare una qualunque delle tre grandezze a partire dalle altre due.
:::

:::esempio{titolo="Ricavare un'altezza"}
L'area di un rettangolo è $A=bh$. Se sono note l'area $A=18\,\mathrm{m^2}$ e la base $b=6\,\mathrm{m}$, si divide per la base, che è positiva. Si ottiene
$$
h=\frac{A}{b}=\frac{18\,\mathrm{m^2}}{6\,\mathrm{m}}=3\,\mathrm{m}.
$$
Le unità danno $\mathrm{m^2}$ diviso per $\mathrm{m}$, quindi resta il metro. Il risultato rappresenta una lunghezza, come richiesto. Sostituendo nella formula iniziale si ritrova $6\cdot3=18\,\mathrm{m^2}$.
:::

## Proporzionalità

:::definizione{#proporzionalita-diretta titolo="Grandezze direttamente proporzionali"}
Due grandezze positive sono **direttamente proporzionali** quando il loro rapporto resta costante. Indicandole con $x$ e $y$, si scrive
$$
y=kx,
\qquad k=\frac{y}{x},
$$
dove $k$ è la costante di proporzionalità. Se $x$ raddoppia, anche $y$ raddoppia; se $x$ triplica, anche $y$ triplica.

Per uno stesso materiale omogeneo, nelle stesse condizioni, massa e volume sono direttamente proporzionali. Se la densità è $2\,\mathrm{g/cm^3}$, a volumi di $1$, $2$ e $3\,\mathrm{cm^3}$ corrispondono masse di $2$, $4$ e $6\,\mathrm{g}$. Il rapporto massa-volume resta $2\,\mathrm{g/cm^3}$.

::grafico{f="2*x" xmin=0 xmax=4 ymin=0 ymax=8 nomi="V,m" punti="1,2;2,4;3,6" legenda="m=\rho V" titolo="Massa in grammi e volume in centimetri cubi per densità $\rho=2\,\mathrm{g/cm^3}$."}
:::

:::definizione{#proporzionalita-inversa titolo="Grandezze inversamente proporzionali"}
Due grandezze positive sono **inversamente proporzionali** quando il loro prodotto resta costante. Si scrive
$$
xy=k,
\qquad y=\frac{k}{x}.
$$
Se $x$ raddoppia, $y$ si dimezza, perché il prodotto deve conservare lo stesso valore. Per rettangoli di area fissata $A=12\,\mathrm{cm^2}$, base e altezza sono inversamente proporzionali. Le coppie $b=2\,\mathrm{cm}$, $h=6\,\mathrm{cm}$ e $b=4\,\mathrm{cm}$, $h=3\,\mathrm{cm}$ danno entrambe area $12\,\mathrm{cm^2}$.

::grafico{f="12/x" xmin=0 xmax=8 ymin=0 ymax=12 nomi="b,h" punti="2,6;4,3;6,2" legenda="h=\dfrac{A}{b}" titolo="Base e altezza in centimetri per rettangoli di area $12\,\mathrm{cm^2}$."}
:::

## Tabelle e grafici

:::definizione{#grafici titolo="Dati su due assi"}
Una tabella raccoglie coppie di valori corrispondenti. Un **grafico cartesiano** rappresenta ogni coppia con un punto. L'asse orizzontale descrive la prima grandezza e l'asse verticale la seconda. Il punto si trova spostandosi fino al valore orizzontale e poi fino al valore verticale.

Per esempio la coppia $V=2\,\mathrm{cm^3}$, $m=4\,\mathrm{g}$ si rappresenta con il punto di coordinate $(2,4)$ quando gli assi indicano queste unità. Il nome della grandezza e la sua unità rendono leggibile il grafico. Le tacche possono avere scale diverse sui due assi; ciascuna scala mantiene intervalli uguali per incrementi numerici uguali.
:::

:::osservazione{#retta-con-intercetta titolo="Una retta che parte da un valore iniziale"}
Un recipiente vuoto ha massa $2\,\mathrm{g}$ e riceve un liquido di densità $1\,\mathrm{g/cm^3}$. Se $V$ è il volume del liquido in centimetri cubi, la massa complessiva in grammi cresce secondo $m=2+V$. Il termine $2$ rappresenta la massa già presente quando il volume del liquido è nullo.

Il grafico è una retta che incontra l'asse verticale nel valore $2$. Per $V=1$ il rapporto numerico $\dfrac{m}{V}$ è $3$; per $V=2$ è $2$. I rapporti sono diversi, quindi questa relazione non è di proporzionalità diretta. L'aumento della massa rispetto alla massa iniziale è invece direttamente proporzionale al volume aggiunto.

::grafico{f="x+2" xmin=0 xmax=6 ymin=0 ymax=8 nomi="V,m" punti="0,2;1,3;2,4;4,6" legenda="m=m_0+\rho V" titolo="Volume del liquido in centimetri cubi e massa complessiva in grammi; il recipiente ha massa $m_0=2\,\mathrm{g}$."}
:::

:::osservazione{titolo="Punti misurati e relazione ipotizzata"}
Ogni punto ottenuto da una misura descrive una coppia di valori rilevata. Una linea fra i punti rappresenta invece una scelta di collegamento o una relazione proposta per descrivere i dati. Per usare la linea per valori intermedi occorre assumere che la relazione valga anche fra le misure.

Se le coppie numeriche sono $(1,2)$, $(2,4)$ e $(3,6)$, esse sono compatibili con la relazione $y=2x$. Assumendo che valga nell'intervallo considerato, a $x=2{,}5$ corrisponde $y=5$. Un insieme limitato di punti, da solo, non dimostra che la stessa legge valga per qualsiasi valore esterno all'intervallo osservato.
:::
