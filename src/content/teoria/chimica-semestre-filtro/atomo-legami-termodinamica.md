---
titolo: "Atomo, legami, stati della materia e termodinamica"
sommario: "Struttura atomica, quantità di sostanza, geometria e polarità delle molecole, proprietà della materia ed energia dei processi chimici."
---

## Atomi, isotopi e nuclei

Tutta la materia è fatta di atomi. Questo paragrafo descrive le tre particelle che compongono un atomo e spiega che cosa cambia quando varia il numero degli elettroni (si ottiene uno ione) oppure il numero dei neutroni (si ottiene un isotopo).

:::definizione{#atomo-isotopi titolo="Numero atomico e numero di massa"}
Un **atomo** è formato da un **nucleo** centrale, molto piccolo, e da **elettroni** che si muovono attorno al nucleo. Il nucleo contiene due tipi di particelle, i **protoni** e i **neutroni**.

- Il protone ha carica elettrica positiva, indicata con $+e$.
- L'elettrone ha carica negativa $-e$, uguale in valore a quella del protone e di segno opposto.
- Il neutrone non ha carica.

Il protone e il neutrone hanno circa la stessa massa, pari a circa $1\,\mathrm{u}$ (unità di massa atomica). L'elettrone ha una massa circa 1800 volte più piccola, quindi quasi tutta la massa dell'atomo si trova nel nucleo.

Il **numero atomico** $Z$ è il numero dei protoni. Tutti gli atomi di uno stesso elemento hanno lo stesso $Z$: ogni atomo con 6 protoni è un atomo di carbonio. Il **numero di massa** $A$ è la somma dei protoni e dei neutroni, quindi il numero dei neutroni è $A-Z$.

La scrittura ${}^{A}_{Z}\mathrm{X}$ indica un atomo dell'elemento X con numero di massa $A$, scritto in alto, e numero atomico $Z$, scritto in basso. Per esempio ${}^{23}_{11}\mathrm{Na}$ è un atomo di sodio con 11 protoni e $23-11=12$ neutroni. Un atomo neutro ha tanti elettroni quanti protoni, quindi il sodio neutro ha 11 elettroni. Uno **ione** è un atomo che ha perso o acquistato elettroni e ha perciò una carica elettrica. Lo ione $\mathrm{Na^+}$ ha perso un elettrone, quindi possiede 11 protoni e 10 elettroni e ha carica $+1$.

![Confronto fra magnesio 24, magnesio 25 e ione magnesio 24: protoni, neutroni ed elettroni](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/isotopi-it.svg)
:::

:::definizione{#isotopi-rmn titolo="Isotopi e spin nucleare"}
Gli **isotopi** sono atomi dello stesso elemento che hanno un numero diverso di neutroni. Hanno quindi lo stesso $Z$ e un diverso $A$. Per esempio ${}^{12}\mathrm C$ e ${}^{13}\mathrm C$ sono due isotopi del carbonio: entrambi hanno 6 protoni, il primo ha 6 neutroni e il secondo 7. Gli isotopi di un elemento hanno quasi le stesse proprietà chimiche, perché queste dipendono dagli elettroni, e hanno massa diversa.

In natura un elemento è di solito una miscela di isotopi. La **massa atomica media** riportata nella tavola periodica si calcola moltiplicando la massa di ciascun isotopo per la sua abbondanza (la frazione di atomi di quel tipo, un numero fra 0 e 1) e sommando i risultati. Per il cloro, formato per circa il 76% da ${}^{35}\mathrm{Cl}$ e per circa il 24% da ${}^{37}\mathrm{Cl}$, si ottiene $0{,}76\cdot35+0{,}24\cdot37\simeq35{,}5\,\mathrm u$.

Alcuni nuclei si comportano come piccolissimi magneti. Questa proprietà si chiama **spin nucleare** e si indica con il numero $I$. Il nucleo dell'idrogeno ${}^{1}\mathrm H$, che è un singolo protone, ha $I=\dfrac12$. Il nucleo di ${}^{12}\mathrm C$ ha $I=0$ e non possiede questa proprietà.

Sullo spin nucleare si basa la **risonanza magnetica nucleare**, che funziona in tre passi.

1. Il campione viene posto in un forte campo magnetico. I nuclei con spin si dispongono in due stati di energia diversa.
2. Si invia un'onda radio. Se l'energia dell'onda è uguale alla differenza di energia $\Delta E$ fra i due stati, i nuclei la assorbono e passano allo stato di energia maggiore. Vale la relazione $\Delta E=h\nu$, dove $h$ è la costante di Planck e $\nu$ è la frequenza dell'onda radio.
3. Quando l'onda viene spenta, i nuclei tornano allo stato iniziale ed emettono un segnale, che lo strumento registra.

La differenza $\Delta E$ cresce con l'intensità del campo magnetico, quindi anche la frequenza assorbita cresce con il campo. La risonanza magnetica usata in medicina registra il segnale dei nuclei ${}^{1}\mathrm H$ dell'acqua, molto abbondante nei tessuti. Il campo magnetico viene reso leggermente diverso da punto a punto (gradiente di campo), perciò nuclei in posizioni diverse assorbono frequenze diverse e dal segnale si ricostruisce un'immagine. Il nucleo ${}^{1}\mathrm H$ è stabile, quindi l'esame non impiega sostanze radioattive.
:::

## Orbitali, configurazioni e sistema periodico

:::definizione{#numeri-quantici titolo="Numeri quantici e orbitali"}
Un **orbitale** è la regione di spazio attorno al nucleo in cui è più probabile trovare un elettrone. In termini matematici è una funzione, e il quadrato del suo modulo dà la probabilità di trovare l'elettrone in ciascun punto. Dell'elettrone si conosce la probabilità di trovarlo in una zona; la sua traiettoria non è definita. Ogni elettrone di un atomo è descritto da quattro numeri, detti **numeri quantici**.

| Numero | Valori consentiti | Significato |
| --- | --- | --- |
| $n$ | $1,2,3,\ldots$ | livello principale |
| $l$ | $0,1,\ldots,n-1$ | sottolivello; $0=s$, $1=p$, $2=d$, $3=f$ |
| $m_l$ | $-l,-l+1,\ldots,l$ | orbitale nel sottolivello |
| $m_s$ | $+\dfrac12$ oppure $-\dfrac12$ | proiezione dello spin elettronico |

Dalla tabella si ricava quanti elettroni può contenere ogni sottolivello. Un sottolivello con numero $l$ contiene $2l+1$ orbitali e ogni orbitale ospita al massimo 2 elettroni. Un sottolivello $s$ ($l=0$) ha quindi 1 orbitale e al massimo 2 elettroni; un sottolivello $p$ ($l=1$) ha 3 orbitali e 6 elettroni; un sottolivello $d$ ($l=2$) ha 5 orbitali e 10 elettroni. L'orbitale $2d$ non esiste, perché per $n=2$ il numero $l$ può valere soltanto 0 oppure 1.
:::

:::osservazione{#configurazioni titolo="Pauli, Hund e configurazioni elettroniche"}
La **configurazione elettronica** indica come gli elettroni di un atomo sono distribuiti negli orbitali. Si costruisce con tre regole.

1. Gli elettroni occupano prima gli orbitali di energia più bassa. L'ordine di riempimento per i primi elementi è $1s,2s,2p,3s,3p,4s,3d,4p$.
2. **Principio di Pauli**: un orbitale contiene al massimo due elettroni, e i due hanno spin opposto.
3. **Regola di Hund**: negli orbitali di uguale energia, come i tre orbitali $p$, gli elettroni si dispongono prima uno per orbitale con lo stesso spin, e solo dopo si accoppiano.

La scrittura $2p^4$ significa che nel sottolivello $2p$ ci sono 4 elettroni. Alcuni elementi, come il cromo e il rame, fanno eccezione all'ordine di riempimento.

Il carbonio ha 6 elettroni e configurazione $1s^2\,2s^2\,2p^2$. Per la regola di Hund i due elettroni $2p$ occupano due orbitali diversi, quindi il carbonio ha due elettroni spaiati. L'ossigeno ha 8 elettroni e configurazione $1s^2\,2s^2\,2p^4$: dei quattro elettroni $2p$, due sono accoppiati nello stesso orbitale e due restano spaiati.

Gli **elettroni di valenza** sono gli elettroni del livello più esterno. Sono quelli che partecipano ai legami chimici. Il sodio ha configurazione $[\mathrm{Ne}]\,3s^1$, dove $[\mathrm{Ne}]$ indica i 10 elettroni interni, disposti come nel neon. Il suo unico elettrone di valenza è l'elettrone $3s$. Il sodio lo perde facilmente e diventa lo ione $\mathrm{Na^+}$, con configurazione $[\mathrm{Ne}]$.

| Elemento | Configurazione esterna dell’atomo neutro | Elettroni di valenza |
| --- | --- | --- |
| H | $1s^1$ | $1$ |
| C | $2s^2\,2p^2$ | $4$ |
| N | $2s^2\,2p^3$ | $5$ |
| O | $2s^2\,2p^4$ | $6$ |
| P | $3s^2\,3p^3$ | $5$ |
| S | $3s^2\,3p^4$ | $6$ |

![Occupazione dei tre orbitali 2p di azoto e ossigeno secondo Pauli e Hund](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/orbitali-it.svg)
:::

:::osservazione{#proprieta-periodiche titolo="Proprietà periodiche"}
Nella tavola periodica gli elementi sono ordinati per numero atomico crescente. Le righe si chiamano **periodi** e le colonne **gruppi**. Gli elementi di uno stesso gruppo hanno lo stesso numero di elettroni di valenza e per questo hanno proprietà chimiche simili. Tre proprietà cambiano in modo regolare lungo la tavola.

- **Raggio atomico**. Lungo un periodo, da sinistra verso destra, aumentano i protoni del nucleo mentre gli elettroni si aggiungono allo stesso livello. Il nucleo attira quindi più fortemente gli elettroni esterni e il raggio diminuisce. Scendendo in un gruppo si aggiunge un livello a ogni riga, quindi il raggio aumenta.
- **Energia di ionizzazione**. È l'energia necessaria per togliere un elettrone a un atomo allo stato gassoso. Aumenta lungo un periodo, perché gli elettroni sono attirati più fortemente, e diminuisce scendendo in un gruppo.
- **Elettronegatività**. Misura quanto un atomo attira verso di sé gli elettroni di un legame. Aumenta lungo un periodo e diminuisce scendendo in un gruppo. Il fluoro è l'elemento più elettronegativo.

Esistono alcune eccezioni a questi andamenti.

L'**affinità elettronica** è l'energia liberata quando un atomo neutro allo stato gassoso acquista un elettrone. Il cloro, per esempio, libera energia quando diventa $\mathrm{Cl^-}$, quindi ha affinità elettronica positiva. Alcune tabelle riportano invece la variazione di energia $\Delta E$ dello stesso processo, che per il cloro è negativa perché l'energia viene ceduta. Il numero è lo stesso e cambia il segno, perciò in una tabella si controlla quale convenzione è usata.

L'elettronegatività permette di prevedere come sono distribuiti gli elettroni in un legame. L'ossigeno è più elettronegativo del carbonio, quindi nel legame $\mathrm{C-O}$ gli elettroni sono spostati verso l'ossigeno.
:::

## Masse, mole e numero di particelle

:::definizione{#mole-masse titolo="Quantità di sostanza e massa molare"}
Gli atomi sono troppo piccoli per essere pesati uno alla volta, quindi in chimica si usano due strumenti: un'unità di massa adatta agli atomi e un'unità per contare grandi numeri di particelle.

L'**unità di massa atomica** $\mathrm u$ è la dodicesima parte della massa di un atomo di ${}^{12}\mathrm C$. Vale circa $1{,}66\cdot10^{-24}\,\mathrm g$. La **massa molecolare** è la somma delle masse degli atomi che formano la molecola. La massa molecolare relativa $M_r$ è lo stesso valore scritto senza unità, cioè il rapporto fra la massa della molecola e $\mathrm u$. I composti ionici come NaCl non sono formati da molecole separate, quindi per essi si usa la massa dell'unità formula, cioè la somma delle masse degli ioni scritti nella formula.

La **mole** è l'unità con cui si contano le particelle. Una mole contiene esattamente $6{,}02214076\cdot10^{23}$ particelle (atomi, molecole o ioni, secondo il caso). Questo numero è la **costante di Avogadro**, $N_A=6{,}02214076\cdot10^{23}\,\mathrm{mol^{-1}}$. La **massa molare** $M$ è la massa di una mole di sostanza. Le due formule seguenti collegano la massa $m$ del campione, il numero di moli $n$ e il numero di particelle $N$.
$$
n=\dfrac{m}{M},\qquad N=nN_A.
$$
La massa molare si misura in $\mathrm{g\,mol^{-1}}$ e ha lo stesso valore numerico della massa molecolare espressa in $\mathrm u$. Per l'acqua $\mathrm{H_2O}$, con $\mathrm H=1{,}008\,\mathrm u$ e $\mathrm O=16{,}00\,\mathrm u$, la massa molecolare è $2\cdot1{,}008+16{,}00=18{,}016\,\mathrm u$, quindi la massa molare è $18{,}016\,\mathrm{g\,mol^{-1}}$ e una mole di acqua ha una massa di circa 18 grammi. Ogni molecola contiene due atomi di idrogeno e uno di ossigeno, quindi una mole di acqua contiene due moli di atomi di idrogeno e una mole di atomi di ossigeno.
:::

:::esempio{titolo="Dalla massa alle molecole"}
Si vuole sapere quante molecole contiene un campione di $9{,}008\,\mathrm g$ di acqua. Si divide la massa per la massa molare $M=18{,}016\,\mathrm{g\,mol^{-1}}$ e si ottiene il numero di moli; poi si moltiplica per la costante di Avogadro.
$$
n=\dfrac{9{,}008}{18{,}016}\,\mathrm{mol}=0{,}5000\,\mathrm{mol},
\qquad N\simeq3{,}011\cdot10^{23}\text{ molecole}.
$$
Il campione contiene mezza mole di acqua, cioè circa $3{,}011\cdot10^{23}$ molecole. Ogni molecola contiene due atomi di idrogeno, quindi gli atomi di idrogeno sono il doppio, circa $6{,}022\cdot10^{23}$.

![Da una mole di acqua a due moli di atomi di idrogeno e una mole di atomi di ossigeno](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/entita-it.svg)
:::

## Legami chimici e strutture elettroniche

:::definizione{#legami titolo="Legami ionico, covalente e metallico"}
Un **legame chimico** è la forza che tiene uniti due atomi. Esistono tre tipi principali di legame: covalente, ionico e metallico.

Nel **legame covalente** due atomi mettono in comune una o più coppie di elettroni. Se i due atomi sono uguali, come in $\mathrm{H-H}$, gli elettroni sono condivisi in parti uguali e il legame si dice *apolare* (o omopolare). Se i due atomi hanno elettronegatività diversa, come in $\mathrm{O-H}$, gli elettroni stanno più vicini all'atomo più elettronegativo e il legame si dice *polare* (o eteropolare). L'ossigeno acquista allora una piccola carica negativa, indicata con $\delta^-$, e l'idrogeno una piccola carica positiva $\delta^+$.

Nel **legame ionico** un atomo cede uno o più elettroni a un altro atomo. Si formano uno ione positivo (*catione*) e uno ione negativo (*anione*), che si attraggono perché hanno cariche opposte. Nel cloruro di sodio il sodio cede un elettrone al cloro e si formano $\mathrm{Na^+}$ e $\mathrm{Cl^-}$ in rapporto 1:1. Gli ioni si dispongono in modo ordinato in un reticolo che si estende in tutto il cristallo.

Nel **legame metallico** gli elettroni di valenza non restano legati a un singolo atomo e si muovono liberamente fra tutti gli atomi del metallo. Per questo i metalli conducono la corrente elettrica.

Il **legame covalente di coordinazione** (o dativo) è un legame covalente in cui entrambi gli elettroni della coppia condivisa provengono dallo stesso atomo. Per esempio l'azoto dell'ammoniaca $\mathrm{NH_3}$ possiede una coppia di elettroni non impegnata in legami e la mette in comune con uno ione $\mathrm{H^+}$, che non ha elettroni. Si forma lo ione ammonio $\mathrm{NH_4^+}$. Una volta formato, questo legame è identico agli altri tre legami N-H.
:::

:::osservazione{#lewis-ottetto titolo="Strutture di Lewis e regola dell'ottetto"}
Una **struttura di Lewis** è un disegno della molecola in cui compaiono solo gli elettroni di valenza. Un trattino fra due atomi rappresenta una coppia di elettroni condivisa (coppia di legame). Due puntini su un atomo rappresentano una coppia di elettroni non condivisa, detta **doppietto**.

La **regola dell'ottetto** afferma che un atomo tende a formare legami fino ad avere otto elettroni nel livello esterno, come un gas nobile. Vale bene per carbonio, azoto, ossigeno e fluoro. L'idrogeno si ferma a due elettroni. La regola ha eccezioni: il boro in $\mathrm{BF_3}$ ha solo sei elettroni, e le molecole con un numero dispari di elettroni, come NO, non possono rispettarla.

Una struttura di Lewis si costruisce in tre passi.

1. Si contano gli elettroni di valenza di tutti gli atomi. Si aggiunge un elettrone per ogni carica negativa e se ne toglie uno per ogni carica positiva.
2. Si collegano gli atomi con legami singoli.
3. Si distribuiscono gli elettroni rimasti come doppietti o come legami multipli, finché ogni atomo ha l'ottetto (l'idrogeno due elettroni).

In $\mathrm{NH_3}$ l'azoto ha 5 elettroni di valenza: ne usa tre per i tre legami con gli idrogeni e gli resta un doppietto. In $\mathrm{CO_2}$ la struttura è $\mathrm{O=C=O}$, con due legami doppi, e ogni atomo ha otto elettroni. In $\mathrm{NH_4^+}$ gli elettroni sono $5+4-1=8$, cioè quattro coppie di legame, e sull'azoto non resta alcun doppietto.

Per alcune molecole si possono disegnare più strutture di Lewis che differiscono solo per la posizione degli elettroni. In questo caso si parla di **risonanza**: la molecola reale è una sola e i suoi elettroni sono distribuiti su più atomi (elettroni *delocalizzati*). Le diverse formule sono modi di rappresentare la stessa molecola.
:::

:::definizione{#sigma-pi titolo="Sovrapposizione degli orbitali e legami sigma e pi greco"}
Un legame covalente si forma quando un orbitale di un atomo si sovrappone a un orbitale dell'altro atomo. Secondo il modo in cui avviene la sovrapposizione si distinguono due tipi di legame.

- Nel legame **sigma** ($\sigma$) gli orbitali si sovrappongono di fronte, lungo la linea che unisce i due nuclei. Gli elettroni si trovano fra i due nuclei.
- Nel legame **pi greco** ($\pi$) due orbitali $p$ paralleli si sovrappongono di lato. Gli elettroni si trovano sopra e sotto la linea che unisce i nuclei.

Un legame singolo è un legame $\sigma$. Un legame doppio è formato da un $\sigma$ e un $\pi$. Un legame triplo è formato da un $\sigma$ e due $\pi$. Attorno a un legame singolo i due atomi possono ruotare. Attorno a un legame doppio $\mathrm{C=C}$ la rotazione è impedita, perché ruotando i due orbitali $p$ non sarebbero più paralleli e il legame $\pi$ si romperebbe.

Due grandezze descrivono un legame. La **distanza di legame** è la distanza fra i due nuclei. L'**energia di legame** (o di dissociazione) è l'energia necessaria per rompere il legame. Fra gli stessi due atomi, un legame doppio è più corto e più forte di uno singolo, e un legame triplo è più corto e più forte di uno doppio.

Quando due orbitali atomici si combinano, si formano due orbitali della molecola. Uno ha energia più bassa e si chiama orbitale *legante*, perché gli elettroni che lo occupano tengono uniti i due atomi. L'altro ha energia più alta e si chiama *antilegante*, perché gli elettroni che lo occupano indeboliscono il legame. L'**ordine di legame** è $\dfrac{n_b-n_a}{2}$, dove $n_b$ è il numero di elettroni negli orbitali leganti e $n_a$ quello negli orbitali antileganti. Ordine 1 corrisponde a un legame singolo, 2 a un doppio, 3 a un triplo. In $\mathrm{H_2}$ i due elettroni occupano l'orbitale legante, quindi l'ordine è $\dfrac{2-0}{2}=1$.

In una reazione chimica alcuni legami si rompono e altri si formano. Rompere un legame richiede energia e formarlo ne libera. La reazione libera energia se l'energia liberata dai legami nuovi supera quella spesa per rompere i legami vecchi.

![Energia potenziale di una molecola biatomica: minimo alla distanza di equilibrio e separazione dei nuclei](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/energia-legame-it.svg)
:::

## Geometria, polarità e interazioni tra molecole

:::definizione{#geometria-ibridazione titolo="Domini elettronici e ibridazione"}
La forma di una molecola si prevede con il modello **VSEPR**. L'idea è che le coppie di elettroni attorno a un atomo si respingono, perché hanno tutte carica negativa, e si dispongono quindi il più lontano possibile l'una dall'altra.

Si contano i **domini elettronici** dell'atomo centrale. Ogni legame vale un dominio, anche se è doppio o triplo, e ogni doppietto non condiviso vale un dominio. Il numero dei domini determina la loro disposizione nello spazio, riportata nella tabella. La forma della molecola è data dalle posizioni dei soli atomi, quindi è diversa dalla disposizione dei domini quando sono presenti doppietti.

| Domini | Disposizione dei domini | Ibridazione nel modello localizzato | Esempio |
| --- | --- | --- | --- |
| 2 | lineare, $180^\circ$ | $sp$ | C in $\mathrm{CO_2}$ |
| 3 | trigonale planare, circa $120^\circ$ | $sp^2$ | C nel gruppo carbonilico |
| 4 | tetraedrica, circa $109{,}5^\circ$ | $sp^3$ | C in $\mathrm{CH_4}$ |

L'**ibridazione** è il modello che descrive gli orbitali usati dall'atomo per formare legami in queste direzioni. Un orbitale $s$ e tre orbitali $p$ si combinano in quattro orbitali uguali, detti $sp^3$, diretti verso i vertici di un tetraedro. Allo stesso modo si ottengono tre orbitali $sp^2$ oppure due orbitali $sp$.

Tre molecole con quattro domini hanno forme diverse.

- In $\mathrm{CH_4}$ i quattro domini sono quattro legami, quindi la molecola è tetraedrica, con angoli di $109{,}5^\circ$.
- In $\mathrm{NH_3}$ i domini sono tre legami e un doppietto, quindi i quattro atomi formano una piramide a base triangolare. L'angolo fra i legami è circa $107^\circ$.
- In $\mathrm{H_2O}$ i domini sono due legami e due doppietti, quindi i tre atomi formano una V (molecola angolare). L'angolo fra i legami è circa $104{,}5^\circ$.

Gli angoli di ammoniaca e acqua sono un po' minori di $109{,}5^\circ$ perché un doppietto respinge più di una coppia di legame e avvicina i legami fra loro.

![Confronto tra CO2 lineare con dipoli opposti e acqua angolare con dipolo risultante](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/geometria-it.svg)
:::

:::definizione{#polarita-interazioni titolo="Dipoli molecolari e forze intermolecolari"}
Una molecola è **polare** se ha una parte con carica parziale positiva e una parte con carica parziale negativa. La grandezza che misura questa separazione di cariche è il **momento dipolare**. Ogni legame polare ha un proprio dipolo, che si rappresenta con una freccia diretta verso l'atomo più elettronegativo. Il momento dipolare della molecola è la somma di queste frecce, quindi dipende anche dalla forma della molecola.

In $\mathrm{CO_2}$ i due legami $\mathrm{C=O}$ sono polari, ma la molecola è lineare e le due frecce sono uguali e opposte. La loro somma è zero e la molecola è apolare. Nell'acqua i due legami O-H formano un angolo, quindi le due frecce non si annullano e la molecola è polare.

Le **forze intermolecolari** sono le attrazioni fra molecole diverse. Sono molto più deboli dei legami covalenti e determinano, per esempio, la temperatura a cui una sostanza bolle. In ordine di forza crescente si distinguono tre tipi.

- **Forze di dispersione di London**. Gli elettroni di una molecola si spostano continuamente, quindi per un istante la molecola ha un piccolo dipolo, che ne induce uno nella molecola vicina. Agiscono fra tutte le molecole, anche apolari, e crescono con le dimensioni della molecola.
- **Forze dipolo-dipolo**. La parte positiva di una molecola polare attira la parte negativa di un'altra.
- **Legame a idrogeno**. Un atomo di idrogeno legato a un atomo molto elettronegativo (N, O oppure F) è attirato dal doppietto di un altro atomo N, O o F. È la più forte delle tre.

Le prime due, insieme alle attrazioni fra un dipolo permanente e uno indotto, prendono il nome di **forze di van der Waals**. Ogni molecola d'acqua forma fino a quattro legami a idrogeno con le molecole vicine. Questa rete spiega perché l'acqua bolle a una temperatura alta per una molecola così piccola e perché scioglie bene le sostanze polari.

L'interazione **ione-dipolo** è l'attrazione fra uno ione e una molecola polare. Quando NaCl si scioglie in acqua, ogni ione viene circondato da molecole d'acqua. Attorno a $\mathrm{Na^+}$ le molecole rivolgono verso lo ione l'ossigeno, che ha carica parziale negativa. Attorno a $\mathrm{Cl^-}$ rivolgono gli idrogeni, che hanno carica parziale positiva. Queste attrazioni compensano l'energia spesa per separare gli ioni del reticolo, e per questo molti sali si sciolgono in acqua.

L'**interazione idrofobica** è la tendenza delle molecole apolari, o delle parti apolari di una molecola, a riunirsi quando si trovano in acqua. Le molecole d'acqua attorno a una superficie apolare sono costrette a disporsi in modo più ordinato. Quando le parti apolari si riuniscono, la superficie a contatto con l'acqua diminuisce, meno molecole d'acqua sono vincolate e l'energia libera del sistema si abbassa. Fra le parti apolari non si forma alcun legame covalente. Le goccioline di olio in acqua si riuniscono per questo motivo. Lo stesso effetto guida la formazione delle membrane cellulari e il ripiegamento delle proteine.
:::

## Numeri di ossidazione e nomenclatura inorganica

:::definizione{#ossidazione-nomenclatura titolo="Numeri di ossidazione e formule"}
Il **numero di ossidazione** di un atomo in un composto è la carica che l'atomo avrebbe se gli elettroni di ogni legame fossero assegnati per intero all'atomo più elettronegativo. Serve a riconoscere quale atomo cede elettroni e quale li acquista in una reazione. Si calcola con poche regole.

- In un elemento allo stato libero ($\mathrm{O_2}$, Fe, $\mathrm{H_2}$) vale 0.
- In uno ione formato da un solo atomo è uguale alla carica: $+1$ in $\mathrm{Na^+}$, $-1$ in $\mathrm{Cl^-}$.
- L'ossigeno vale $-2$. Fanno eccezione i perossidi, come $\mathrm{H_2O_2}$, dove vale $-1$.
- L'idrogeno vale $+1$ nei composti con i non metalli e $-1$ negli idruri dei metalli, come NaH.
- La somma dei numeri di ossidazione è 0 in una molecola neutra ed è uguale alla carica in uno ione.

Il numero di ossidazione è diverso dalla **carica formale** delle strutture di Lewis, che si calcola dividendo a metà gli elettroni di ogni legame. Nel carbonio di $\mathrm{CO_2}$ il numero di ossidazione è $+4$ e la carica formale è 0.

Per $\mathrm{H_3PO_4}$, posto $x$ il numero di ossidazione del fosforo,
$$
3(+1)+x+4(-2)=0,\qquad x=+5.
$$
Il fosforo nell'acido fosforico ha quindi numero di ossidazione $+5$. Lo stesso elemento può avere numeri di ossidazione diversi in composti diversi: il ferro vale $+2$ in $\mathrm{FeCl_2}$ e $+3$ in $\mathrm{FeCl_3}$. Nei nomi il valore si indica con un numero romano, ferro(II) e ferro(III). I numeri di ossidazione si usano per bilanciare le reazioni di ossidoriduzione.
:::

:::osservazione{#classi-inorganiche titolo="Ossidi, idrossidi, acidi e sali"}
I composti inorganici si raggruppano in poche classi, riconoscibili dalla formula.

- **Ossidi**: composti dell'ossigeno con un altro elemento. Esempi: $\mathrm{CO_2}$, diossido di carbonio; $\mathrm{Fe_2O_3}$, ossido di ferro(III).
- **Perossidi**: contengono due atomi di ossigeno legati fra loro, ciascuno con numero di ossidazione $-1$. Esempio: $\mathrm{H_2O_2}$, perossido di idrogeno (acqua ossigenata).
- **Idrossidi**: contengono lo ione $\mathrm{OH^-}$ e sono basi. Esempio: $\mathrm{NaOH}$, idrossido di sodio.

- **Acidi**: in acqua cedono ioni $\mathrm{H^+}$. Gli acidi binari sono formati da idrogeno e un non metallo, come $\mathrm{HCl}$, acido cloridrico. Gli ossoacidi contengono anche ossigeno, come $\mathrm{H_2SO_4}$, acido solforico, e $\mathrm{H_3PO_4}$, acido fosforico.
- **Basi senza OH**: l'ammoniaca $\mathrm{NH_3}$ è una base perché acquista un $\mathrm{H^+}$ e diventa $\mathrm{NH_4^+}$, anche se nella sua formula non compare OH.

- **Sali**: sono formati da cationi e anioni, e la somma delle cariche è zero. Esempi: $\mathrm{CaCl_2}$, cloruro di calcio; $\mathrm{NaHCO_3}$, idrogenocarbonato (bicarbonato) di sodio; $\mathrm{Ca_3(PO_4)_2}$, fosfato di calcio.

Alcuni ioni sono formati da più atomi legati fra loro e hanno una carica complessiva. Sono gli **ioni poliatomici**, come $\mathrm{HCO_3^-}$, $\mathrm{SO_4^{2-}}$, $\mathrm{PO_4^{3-}}$ e $\mathrm{NH_4^+}$. Per scrivere la formula di un sale si scelgono gli indici in modo che le cariche positive e negative si compensino. Lo ione $\mathrm{SO_4^{2-}}$ ha due cariche negative e lo ione $\mathrm{NH_4^+}$ una positiva, quindi servono due ioni ammonio per ogni solfato e la formula del solfato di ammonio è $\mathrm{(NH_4)_2SO_4}$.

I nomi degli ossoacidi e dei loro anioni seguono una regola. L'acido con meno ossigeno ha il suffisso *-oso* e il suo anione *-ito*; l'acido con più ossigeno ha il suffisso *-ico* e il suo anione *-ato*.

| Formula | Nome usato | Anione dell’ossoacido |
| --- | --- | --- |
| $\mathrm{HNO_2}$ | acido nitroso | nitrito, $\mathrm{NO_2^-}$ |
| $\mathrm{HNO_3}$ | acido nitrico | nitrato, $\mathrm{NO_3^-}$ |
| $\mathrm{H_2SO_3}$ | acido solforoso | solfito, $\mathrm{SO_3^{2-}}$ |
| $\mathrm{H_2SO_4}$ | acido solforico | solfato, $\mathrm{SO_4^{2-}}$ |
| $\mathrm{H_3PO_4}$ | acido fosforico | fosfato, $\mathrm{PO_4^{3-}}$ |

Accanto a questi nomi tradizionali esistono due sistemi di nomenclatura. Nel primo, usato per i composti fra due non metalli, un prefisso indica il numero degli atomi: $\mathrm{CO}$ è il monossido di carbonio e $\mathrm{CO_2}$ il diossido di carbonio. Nel secondo, la nomenclatura di Stock, un numero romano fra parentesi indica il numero di ossidazione del metallo: in ossido di ferro(III) il ferro ha numero di ossidazione $+3$. Il numero romano non indica quanti atomi di ferro ci sono nella formula.

![Formule di Lewis del perossido di idrogeno e dello ione ammonio con doppietti e carica](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/lewis-it.svg)
:::

## Solidi, gas e distribuzione delle velocità

:::osservazione{#solidi titolo="Tipi di solidi"}
In un solido le particelle occupano posizioni fisse e possono soltanto vibrare attorno a esse. I solidi si classificano in base alle particelle che li formano e alla forza che le tiene unite.

- **Solidi ionici**, come NaCl. Sono formati da ioni positivi e negativi che si attraggono. Sono duri, fragili e fondono a temperature alte.
- **Solidi molecolari**, come il ghiaccio e la $\mathrm{CO_2}$ solida (ghiaccio secco). Sono formati da molecole tenute insieme da forze intermolecolari, che sono deboli, quindi fondono a temperature basse.
- **Solidi covalenti**, come il diamante. Tutti gli atomi sono uniti da legami covalenti in un'unica rete. Sono molto duri e fondono a temperature altissime.
- **Solidi metallici**, come il rame. Gli elettroni di valenza si muovono liberamente fra gli atomi, quindi questi solidi conducono corrente e calore.

Uno stesso elemento può formare solidi diversi. Il diamante e la grafite sono entrambi carbonio puro. Nel diamante ogni atomo è legato ad altri quattro, e il solido è durissimo e isolante. Nella grafite gli atomi formano strati piani che scorrono l'uno sull'altro, con elettroni liberi di muoversi lungo gli strati, quindi la grafite è tenera e conduce la corrente.
:::

:::definizione{#gas-ideali titolo="Temperatura assoluta e leggi dei gas"}
In un gas le particelle sono lontane fra loro e si muovono liberamente in tutto il recipiente. Lo stato di un gas è descritto da quattro grandezze: la pressione $p$, il volume $V$, la quantità di gas $n$ in moli e la temperatura $T$.

Nelle leggi dei gas la temperatura si esprime in **kelvin** (temperatura assoluta). Si ottiene sommando $273{,}15$ alla temperatura $t$ in gradi Celsius, cioè $T=t+273{,}15$. Per esempio $25\,^\circ\mathrm C$ corrispondono a $298{,}15\,\mathrm K$.

Un **gas ideale** è un modello semplificato in cui le particelle hanno volume trascurabile e non si attraggono né si respingono. I gas reali si comportano in modo molto simile quando la pressione è bassa e la temperatura è lontana da quella a cui il gas diventa liquido. Le quattro grandezze di un gas ideale sono legate dall'**equazione di stato**.
$$
pV=nRT.
$$
$R$ è la **costante dei gas**. Il suo valore dipende dalle unità scelte: $R=8{,}314\,\mathrm{J\,mol^{-1}K^{-1}}$ se la pressione è in pascal e il volume in metri cubi; $R=0{,}082057\,\mathrm{L\,atm\,mol^{-1}K^{-1}}$ se la pressione è in atmosfere e il volume in litri. La pressione $p$ è quella assoluta. Per esempio una mole di gas a $273{,}15\,\mathrm K$ e $1\,\mathrm{atm}$ occupa $V=\dfrac{nRT}{p}=\dfrac{1\cdot0{,}082057\cdot273{,}15}{1}\simeq22{,}4\,\mathrm L$.

Dall'equazione di stato si ricavano tre leggi, valide per una quantità fissa di gas. In ciascuna una grandezza resta costante.

- **Legge di Boyle** (temperatura costante): $pV=\text{costante}$. Se il volume raddoppia, la pressione si dimezza.
- **Legge di Charles** (pressione costante): $\dfrac VT=\text{costante}$. Se la temperatura assoluta raddoppia, il volume raddoppia.
- **Legge di Gay-Lussac** (volume costante): $\dfrac pT=\text{costante}$. Se la temperatura assoluta raddoppia, la pressione raddoppia.

La legge di Boyle descrive l'inizio dell'inspirazione. Il torace si espande, il volume dei polmoni aumenta e la pressione dell'aria al loro interno scende sotto quella esterna. L'aria entra allora nei polmoni finché le due pressioni tornano uguali.
:::

:::osservazione{#cinetica-gas titolo="Teoria cinetica e distribuzione di Maxwell-Boltzmann"}
La **teoria cinetica** spiega le proprietà di un gas con il movimento delle sue particelle. Le particelle si muovono in tutte le direzioni e urtano le pareti del recipiente; la pressione è l'effetto di questi urti. La temperatura misura l'energia di movimento delle particelle: l'energia cinetica media di una particella è $\dfrac32 k_BT$, dove $k_B$ è la costante di Boltzmann e $T$ la temperatura assoluta. A temperatura più alta le particelle si muovono in media più velocemente.

Le particelle di un gas non hanno tutte la stessa velocità. Alcune sono lente, molte hanno velocità intermedie e poche sono molto veloci. La curva che indica quante particelle hanno ciascuna velocità si chiama **distribuzione di Maxwell-Boltzmann**.

La velocità quadratica media è
$$
v_{\mathrm{rms}}=\sqrt{\dfrac{3RT}{M}},
$$
In questa formula $R$ è la costante dei gas, $T$ la temperatura assoluta e $M$ la massa molare, che va espressa in $\mathrm{kg\,mol^{-1}}$ quando si usa $R=8{,}314\,\mathrm{J\,mol^{-1}K^{-1}}$. La velocità quadratica media è un valore tipico della velocità delle particelle. È poco diversa dalla velocità media e dalla velocità più probabile, che corrisponde al massimo della curva.

Dalla formula si leggono due fatti.

- Se la temperatura aumenta, le velocità aumentano e la curva si allarga verso destra.
- Alla stessa temperatura le particelle più leggere sono più veloci. La massa molare di $\mathrm{H_2}$ è $2\,\mathrm{g\,mol^{-1}}$ e quella di $\mathrm{O_2}$ è $32\,\mathrm{g\,mol^{-1}}$, quindi le molecole di idrogeno sono $\sqrt{\dfrac{32}{2}}=4$ volte più veloci di quelle di ossigeno.

L'energia cinetica media è invece la stessa per i due gas, perché dipende soltanto dalla temperatura.

![Distribuzioni normalizzate delle velocità di azoto ideale a 300 e 600 kelvin](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/maxwell-it.svg)
:::

## Liquidi e cambiamenti di fase

:::definizione{#liquidi-fasi titolo="Evaporazione, pressione di vapore e tensione superficiale"}
In un liquido le particelle sono a contatto fra loro, come in un solido, e possono scorrere le une sulle altre. Per questo un liquido ha un volume proprio e prende la forma del recipiente.

L'**evaporazione** è il passaggio dallo stato liquido allo stato gassoso che avviene alla superficie del liquido, a qualsiasi temperatura. Lasciano il liquido le particelle più veloci, cioè quelle con energia sufficiente a vincere l'attrazione delle vicine. Nel liquido restano le particelle più lente, quindi il liquido si raffredda. Per questo il sudore che evapora sottrae calore alla pelle. Il calore necessario per far evaporare una mole di liquido si chiama **entalpia di vaporizzazione**.

In un recipiente chiuso le particelle evaporate restano sopra il liquido e alcune vi rientrano. Dopo un certo tempo il numero di particelle che evaporano in un secondo è uguale al numero di quelle che rientrano, cioè si è raggiunto un equilibrio. La pressione del vapore in questa condizione si chiama **pressione di vapore** (o tensione di vapore) del liquido. Aumenta con la temperatura, perché a temperatura più alta più particelle hanno l'energia per evaporare.

L'**ebollizione** avviene quando la pressione di vapore diventa uguale alla pressione esterna. Da quel momento le bolle di vapore si formano anche all'interno del liquido. L'acqua bolle a $100\,^\circ\mathrm C$ alla pressione di $1\,\mathrm{atm}$. In alta montagna la pressione esterna è minore, quindi l'acqua bolle a una temperatura più bassa.

La **tensione superficiale** è l'energia necessaria per aumentare di un'unità l'area della superficie di un liquido. Si misura in $\mathrm{J\,m^{-2}}$, unità equivalente a $\mathrm{N\,m^{-1}}$. Nasce dal fatto che una particella all'interno del liquido è attirata dalle vicine in tutte le direzioni, mentre una particella in superficie è attirata solo verso l'interno. Il liquido tende quindi ad avere la superficie più piccola possibile, e per questo le gocce sono sferiche. I **tensioattivi**, come i saponi, si dispongono sulla superficie dell'acqua e ne abbassano la tensione superficiale.
:::

:::osservazione{#diagrammi-fase titolo="Diagrammi di fase di acqua e anidride carbonica"}
Un **diagramma di fase** è un grafico con la temperatura sull'asse orizzontale e la pressione sull'asse verticale. Indica in quale stato (solido, liquido o gas) si trova una sostanza per ogni coppia di valori di temperatura e pressione. Il grafico è diviso in tre regioni, una per ciascuno stato, e contiene tre elementi.

- Le **curve** che separano due regioni. Su una curva i due stati sono presenti insieme, in equilibrio. Attraversare una curva corrisponde a un passaggio di stato.
- Il **punto triplo**, in cui le tre curve si incontrano. A quella temperatura e a quella pressione solido, liquido e gas sono presenti insieme.
- Il **punto critico**, in cui termina la curva fra liquido e gas. Oltre questo punto liquido e gas non sono più distinguibili.

I diagrammi dell'acqua e dell'anidride carbonica differiscono in due aspetti.

Il primo è la pendenza della curva fra solido e liquido. Il ghiaccio è meno denso dell'acqua liquida, e infatti galleggia. Un aumento di pressione favorisce lo stato più denso, cioè il liquido, quindi sotto pressione il ghiaccio fonde a una temperatura più bassa e la curva pende verso sinistra. Nella $\mathrm{CO_2}$, come in quasi tutte le sostanze, il solido è più denso del liquido e la curva pende verso destra.

Il secondo è la pressione del punto triplo. Per la $\mathrm{CO_2}$ vale circa $5{,}2\,\mathrm{bar}$, più della pressione atmosferica. Alla pressione atmosferica la $\mathrm{CO_2}$ liquida non esiste e il solido (ghiaccio secco) passa direttamente a gas. Questo passaggio si chiama **sublimazione**. Per ottenere $\mathrm{CO_2}$ liquida serve una pressione maggiore di $5{,}2\,\mathrm{bar}$. Il punto triplo dell'acqua si trova invece a una pressione molto più bassa di quella atmosferica, quindi l'acqua liquida esiste nelle condizioni ordinarie.

![Diagrammi qualitativi pressione-temperatura di acqua e CO2 con punto triplo e pendenze di fusione diverse](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/fasi-it.svg)
:::

## Energia, entropia e sistemi aperti

:::definizione{#energia-entalpia titolo="Primo principio ed entalpia"}
La termodinamica studia gli scambi di energia. La parte di universo che si studia si chiama **sistema** e tutto il resto **ambiente**. Si distinguono tre tipi di sistema.

- Un sistema **aperto** scambia con l'ambiente sia materia sia energia. Un organismo vivente è un sistema aperto.
- Un sistema **chiuso** scambia energia e non materia. Un esempio è una bottiglia tappata.
- Un sistema **isolato** non scambia né materia né energia. Un thermos ideale è un sistema isolato.

L'**energia interna** $U$ è l'energia totale delle particelle del sistema. Il **primo principio della termodinamica** afferma che l'energia si conserva: l'energia interna di un sistema chiuso cambia soltanto se il sistema scambia calore o lavoro con l'ambiente.
$$
\Delta U=q+w.
$$
$\Delta U$ è la variazione dell'energia interna, $q$ è il calore e $w$ è il lavoro. Calore e lavoro sono positivi quando il sistema li riceve e negativi quando li cede. Per esempio, se un sistema riceve $100\,\mathrm J$ di calore e compie $40\,\mathrm J$ di lavoro sull'ambiente, allora $q=+100\,\mathrm J$, $w=-40\,\mathrm J$ e $\Delta U=60\,\mathrm J$. Un gas che si espande contro una pressione esterna costante $p_{\mathrm{ext}}$ compie lavoro, e $w=-p_{\mathrm{ext}}\Delta V$, dove $\Delta V$ è l'aumento di volume. In un sistema aperto si conta anche l'energia portata dalla materia che entra ed esce.

L'**entalpia** $H$ è definita da $H=U+pV$. È utile perché la maggior parte delle reazioni avviene a pressione costante, e in questa condizione il calore scambiato è uguale alla variazione di entalpia, cioè $q_p=\Delta H$.

- Una trasformazione **esotermica** cede calore all'ambiente e ha $\Delta H<0$. Esempi: una combustione, la condensazione, la solidificazione.
- Una trasformazione **endotermica** assorbe calore dall'ambiente e ha $\Delta H>0$. Esempi: la fusione e la vaporizzazione.

$U$ e $H$ sono **funzioni di stato**, cioè la loro variazione dipende solo dallo stato iniziale e da quello finale. Il calore e il lavoro dipendono invece anche dal modo in cui la trasformazione avviene. Il valore di $\Delta H$ di una reazione si riferisce a quantità precise di sostanze in uno stato fisico preciso, quindi è sempre accompagnato da questi dati.
:::

:::definizione{#entropia-gibbs titolo="Entropia ed energia libera di Gibbs"}
L'**entropia** $S$ misura il numero di modi in cui le particelle e l'energia di un sistema possono essere disposte. Un sistema con molte disposizioni possibili ha entropia alta. Un gas ha più entropia di un liquido e un liquido più di un solido, perché le particelle hanno via via più libertà di movimento. Nella fusione del ghiaccio, per esempio, l'entropia aumenta.

Il **secondo principio della termodinamica** afferma che in ogni trasformazione spontanea l'entropia totale, cioè quella del sistema più quella dell'ambiente, aumenta: $\Delta S_{\mathrm{tot}}\ge0$, con il segno di uguale solo per una trasformazione reversibile. L'entropia del solo sistema può diminuire, purché quella dell'ambiente aumenti di più. Quando l'acqua congela la sua entropia diminuisce, e il calore ceduto fa aumentare l'entropia dell'ambiente.

In un passaggio di stato che avviene alla temperatura di equilibrio $T$, la variazione di entropia è $\Delta S=\dfrac{\Delta H}{T}$.

Calcolare l'entropia dell'ambiente è scomodo. L'**energia libera di Gibbs**, $G=H-TS$, permette di stabilire se una trasformazione è spontanea usando solo grandezze del sistema. A temperatura costante la sua variazione è
$$
\Delta G=\Delta H-T\Delta S.
$$
In questa formula $\Delta H$ è la variazione di entalpia, $T$ la temperatura assoluta e $\Delta S$ la variazione di entropia del sistema. A temperatura e pressione costanti il segno di $\Delta G$ indica il verso della trasformazione.

- $\Delta G<0$: la trasformazione è spontanea e si dice **esoergonica**.
- $\Delta G=0$: il sistema è all'equilibrio.
- $\Delta G>0$: la trasformazione non è spontanea e si dice **endoergonica**. È spontanea la trasformazione inversa.

Una trasformazione spontanea può essere molto lenta, perché $\Delta G$ non dà informazioni sulla velocità. Nel calcolo le unità devono essere le stesse: se $\Delta H$ è in kilojoule e $\Delta S$ in joule per kelvin, uno dei due valori va convertito.

Il valore di $\Delta G$ di una reazione dipende dalle concentrazioni di reagenti e prodotti presenti in quel momento, quindi cambia mentre la reazione procede e diventa zero all'equilibrio.

Nelle cellule molte reazioni necessarie hanno $\Delta G>0$. Avvengono perché sono **accoppiate** a una reazione con $\Delta G$ molto negativo, di solito l'idrolisi dell'ATP. La somma delle due variazioni è negativa e il processo complessivo è spontaneo. L'accoppiamento richiede un meccanismo che leghi le due reazioni, in genere un enzima che le fa avvenire insieme. Due reazioni che avvengono separatamente nella stessa soluzione non si influenzano in questo modo.

Un organismo è un sistema aperto: riceve continuamente materia ed energia con il cibo ed elimina prodotti di scarto. In questo modo mantiene le concentrazioni costanti, a valori lontani dall'equilibrio. Questa condizione si chiama **stato stazionario**. All'equilibrio, invece, nessuna reazione procede in un verso più che nell'altro.
:::

:::esempio{titolo="Entalpia ed entropia nel criterio di spontaneità"}
Una trasformazione ha $\Delta H=20\,\mathrm{kJ\,mol^{-1}}$ e $\Delta S=100\,\mathrm{J\,mol^{-1}K^{-1}}$. Si vuole sapere se è spontanea a $300\,\mathrm K$. Si converte l'entalpia in joule, $20\,\mathrm{kJ}=20000\,\mathrm J$, e si applica la formula $\Delta G=\Delta H-T\Delta S$.
$$
\Delta G=20000-300\cdot100=-10000\,\mathrm{J\,mol^{-1}}.
$$
Il risultato è negativo, quindi a $300\,\mathrm K$ la trasformazione è spontanea, anche se è endotermica. Il termine $T\Delta S=30000\,\mathrm{J\,mol^{-1}}$ supera infatti $\Delta H$. A temperature più basse $T\Delta S$ è minore: sotto $\dfrac{20000}{100}=200\,\mathrm K$ si ha $\Delta G>0$ e la trasformazione non è più spontanea.

![Energia libera pari a 20 meno 0,100 per T in kilojoule per mole: cambio di segno a 200 kelvin](/figure/chimica-semestre-filtro/atomo-legami-termodinamica/gibbs-it.svg)
:::
