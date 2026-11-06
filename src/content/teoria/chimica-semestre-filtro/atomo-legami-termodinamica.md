---
titolo: "Atomo, legami, stati della materia e termodinamica"
sommario: "Struttura atomica, quantità di sostanza, geometria e polarità delle molecole, proprietà della materia ed energia dei processi chimici."
---

## Atomi, isotopi e nuclei

:::definizione{#atomo-isotopi titolo="Numero atomico e numero di massa"}
Un **atomo** contiene un nucleo di protoni e neutroni, circondato da elettroni. Un protone ha carica $+e$, un elettrone ha carica $-e$ e un neutrone è elettricamente neutro. La massa di un protone o di un neutrone è circa $1\,\mathrm{u}$, mentre quella dell'elettrone è molto minore. Il **numero atomico** $Z$ conta i protoni e identifica l'elemento. Il **numero di massa** $A$ conta protoni e neutroni, quindi il numero di neutroni è $A-Z$.

La scrittura ${}^{A}_{Z}\mathrm{X}$ specifica elemento e isotopo. Per esempio ${}^{23}_{11}\mathrm{Na}$ contiene 11 protoni e 12 neutroni. Un atomo neutro contiene $Z$ elettroni; lo ione $\mathrm{Na^+}$ ne contiene 10, perché la carica positiva deriva dalla perdita di un elettrone.
:::

:::definizione{#isotopi-rmn titolo="Isotopi e spin nucleare"}
Gli **isotopi** sono atomi dello stesso elemento con diverso numero di neutroni. ${}^{12}\mathrm C$ e ${}^{13}\mathrm C$ hanno entrambi 6 protoni, ma rispettivamente 6 e 7 neutroni. La massa atomica media di un campione si ricava dalle masse isotopiche e dalle loro frazioni di abbondanza, espresse come numeri tra 0 e 1.

Alcuni nuclei possiedono un momento angolare intrinseco, detto *spin*, e un momento magnetico. In un campo magnetico i loro stati energetici si separano; una radiazione a radiofrequenza opportuna può provocare transizioni tra questi stati. Questo è il principio della risonanza magnetica nucleare. Il protone ${}^{1}\mathrm H$, abbondante nell'acqua, è il nucleo più impiegato nella risonanza magnetica per immagini. Un isotopo può essere stabile e possedere spin nucleare, quindi il fenomeno non richiede radioattività.
:::

## Orbitali, configurazioni e sistema periodico

:::definizione{#numeri-quantici titolo="Numeri quantici e orbitali"}
Un **orbitale** è una funzione che descrive uno stato elettronico; il quadrato del suo modulo permette di calcolare probabilità di localizzazione. Non rappresenta una traiettoria dell'elettrone. Lo stato è caratterizzato dai numeri quantici seguenti.

| Numero | Valori consentiti | Significato |
| --- | --- | --- |
| $n$ | $1,2,3,\ldots$ | livello principale |
| $l$ | $0,1,\ldots,n-1$ | sottolivello; $0=s$, $1=p$, $2=d$, $3=f$ |
| $m_l$ | $-l,-l+1,\ldots,l$ | orbitale nel sottolivello |
| $m_s$ | $+\dfrac12$ oppure $-\dfrac12$ | proiezione dello spin elettronico |

Un sottolivello con numero $l$ possiede $2l+1$ orbitali. Un sottolivello $p$ possiede quindi 3 orbitali e può contenere 6 elettroni. Un orbitale $2d$ non è consentito, perché per $n=2$ i soli valori di $l$ sono 0 e 1.
:::

:::osservazione{#configurazioni titolo="Pauli, Hund e configurazioni elettroniche"}
Il **principio di Pauli** permette al massimo due elettroni nello stesso orbitale, con spin opposti. La **regola di Hund** stabilisce che, entro un insieme di orbitali di uguale energia, gli elettroni occupano prima orbitali diversi con spin paralleli. Per gli elementi dei primi periodi la costruzione dello stato di minima energia procede in genere nell'ordine $1s,2s,2p,3s,3p,4s,3d,4p$; le energie dei sottolivelli dipendono dall'occupazione e sono possibili eccezioni.

Il carbonio ha configurazione $1s^2\,2s^2\,2p^2$ e due elettroni spaiati nella descrizione dell'atomo isolato. L'ossigeno ha configurazione $1s^2\,2s^2\,2p^4$ e due elettroni spaiati. Gli elettroni del livello esterno sono detti *elettroni di valenza*. Nel sodio $[\mathrm{Ne}]\,3s^1$ l'elettrone $3s$ viene perso formando $\mathrm{Na^+}$, che ha configurazione $[\mathrm{Ne}]$.
:::

:::osservazione{#proprieta-periodiche titolo="Proprietà periodiche"}
Lungo un periodo, da sinistra verso destra, aumenta in genere l'attrazione del nucleo sugli elettroni di valenza. Il raggio atomico tende perciò a diminuire, mentre energia di ionizzazione ed elettronegatività tendono ad aumentare. Scendendo in un gruppo aumenta il numero dei livelli occupati e il raggio tende ad aumentare. Il volume atomico segue qualitativamente la dimensione dell'atomo, pur dipendendo dalla definizione e dallo stato del materiale.

L'**energia di ionizzazione** è l'energia richiesta per sottrarre un elettrone a una specie gassosa. L'affinità elettronica descrive la variazione energetica associata all'acquisto di un elettrone da parte di un atomo gassoso; il suo segno dipende dalla convenzione adottata. L'elettronegatività misura la tendenza di un atomo legato ad attirare gli elettroni del legame. Le tendenze periodiche presentano eccezioni e non sostituiscono i dati dell'elemento. L'ossigeno è più elettronegativo del carbonio, quindi il legame $\mathrm{C-O}$ presenta una distribuzione elettronica spostata verso O.
:::

## Masse, mole e numero di particelle

:::definizione{#mole-masse titolo="Quantità di sostanza e massa molare"}
L'unità di massa atomica $\mathrm u$ è un dodicesimo della massa di un atomo di ${}^{12}\mathrm C$. La massa molecolare si ottiene sommando le masse degli atomi della molecola. Per un solido ionico si parla di massa dell'unità formula, perché il reticolo non è costituito da molecole discrete.

Una **mole** contiene esattamente $6{,}02214076\cdot10^{23}$ entità specificate. La costante di Avogadro è $N_A=6{,}02214076\cdot10^{23}\,\mathrm{mol^{-1}}$. Se $n$ è la quantità di sostanza, $m$ la massa, $M$ la massa molare e $N$ il numero delle entità,
$$
n=\frac{m}{M},\qquad N=nN_A.
$$
La massa molare ha unità $\mathrm{g\,mol^{-1}}$ quando la massa è in grammi. Con le masse approssimate $\mathrm H=1{,}008\,\mathrm u$ e $\mathrm O=16{,}00\,\mathrm u$, l'acqua ha massa molecolare $18{,}016\,\mathrm u$ e massa molare circa $18{,}016\,\mathrm{g\,mol^{-1}}$. Una mole di acqua contiene una mole di atomi di ossigeno e due moli di atomi di idrogeno.
:::

:::esempio{titolo="Dalla massa alle molecole"}
Un campione di $9{,}008\,\mathrm g$ di acqua, usando $M=18{,}016\,\mathrm{g\,mol^{-1}}$, contiene
$$
n=\frac{9{,}008}{18{,}016}\,\mathrm{mol}=0{,}5000\,\mathrm{mol},
\qquad N\simeq3{,}011\cdot10^{23}\text{ molecole}.
$$
Il numero degli atomi di idrogeno è il doppio del numero delle molecole, perché ogni molecola contiene due H.
:::

## Legami chimici e strutture elettroniche

:::definizione{#legami titolo="Legami ionico, covalente e metallico"}
Un **legame covalente** implica la condivisione di densità elettronica tra atomi. In un legame omopolare, come $\mathrm{H-H}$, gli atomi equivalenti condividono gli elettroni in modo simmetrico. In un legame eteropolare, come $\mathrm{O-H}$, la diversa elettronegatività produce cariche parziali $\delta^+$ e $\delta^-$.

Un **legame ionico** è l'attrazione elettrostatica che contribuisce alla stabilità di un insieme di cationi e anioni. Nel cloruro di sodio il rapporto tra $\mathrm{Na^+}$ e $\mathrm{Cl^-}$ è 1:1 e il solido forma un reticolo esteso. Nel legame metallico gli elettroni di valenza sono delocalizzati tra molti centri, condizione associata alla conduzione elettrica dei metalli.

Nel legame covalente di coordinazione la coppia condivisa proviene inizialmente da un solo partner. Per esempio l'ammoniaca dona il doppietto dell'azoto a $\mathrm{H^+}$ e forma $\mathrm{NH_4^+}$. Dopo la formazione, i quattro legami N-H dello ione ammonio sono equivalenti.
:::

:::osservazione{#lewis-ottetto titolo="Strutture di Lewis e regola dell'ottetto"}
Una struttura di Lewis rappresenta gli elettroni di valenza mediante coppie di legame e doppietti non condivisi. Per gli elementi del secondo periodo la regola dell'**ottetto** descrive molte strutture stabili con otto elettroni attorno all'atomo. L'idrogeno completa invece un livello con due elettroni. La regola ha limiti, per esempio nelle specie a numero dispari di elettroni e nei composti del boro con ottetto incompleto.

In $\mathrm{NH_3}$ l'azoto impiega tre dei suoi cinque elettroni di valenza nei tre legami e conserva un doppietto. In $\mathrm{CO_2}$ la struttura $\mathrm{O=C=O}$ assegna un ottetto a ciascun atomo. Se più strutture di Lewis differiscono soltanto per la disposizione degli elettroni, la risonanza descrive una distribuzione elettronica delocalizzata; le singole formule sono rappresentazioni della stessa specie.
:::

:::definizione{#sigma-pi titolo="Sovrapposizione degli orbitali e legami sigma e pi greco"}
La sovrapposizione di orbitali atomici permette di descrivere orbitali di legame a energia inferiore e orbitali antileganti a energia superiore. Un legame **sigma**, $\sigma$, presenta densità elettronica lungo l'asse internucleare. Un legame **pi greco**, $\pi$, deriva dalla sovrapposizione laterale di orbitali e presenta un piano nodale contenente quell'asse.

Un legame singolo è normalmente un legame $\sigma$, un doppio contiene un $\sigma$ e un $\pi$, un triplo un $\sigma$ e due $\pi$. Il doppio legame C=C ostacola la rotazione, perché una rotazione libera ridurrebbe la sovrapposizione laterale. La distanza di legame è la separazione di equilibrio tra i nuclei; l'energia di dissociazione è l'energia necessaria per rompere il legame nelle condizioni specificate. A parità degli atomi coinvolti, legami multipli tendono a essere più corti e più forti di un singolo legame.
:::

## Geometria, polarità e interazioni tra molecole

:::definizione{#geometria-ibridazione titolo="Domini elettronici e ibridazione"}
Nel modello VSEPR le regioni di densità elettronica attorno a un atomo assumono una disposizione che riduce le repulsioni. Ogni legame, anche multiplo, conta come un dominio; ogni doppietto non condiviso è un altro dominio. La geometria molecolare descrive le posizioni degli atomi e va distinta dalla disposizione di tutti i domini.

| Domini | Disposizione dei domini | Ibridazione nel modello localizzato | Esempio |
| --- | --- | --- | --- |
| 2 | lineare, $180^\circ$ | $sp$ | C in $\mathrm{CO_2}$ |
| 3 | trigonale planare, circa $120^\circ$ | $sp^2$ | C nel gruppo carbonilico |
| 4 | tetraedrica, circa $109{,}5^\circ$ | $sp^3$ | C in $\mathrm{CH_4}$ |

L'ibridazione combina orbitali atomici per descrivere direzioni di legame; è un modello della struttura elettronica. L'azoto in $\mathrm{NH_3}$ ha quattro domini, ma tre soli atomi legati, quindi la molecola è piramidale trigonale. Nell'acqua quattro domini comprendono due legami e due doppietti, quindi la molecola è angolare. Le repulsioni differenti modificano gli angoli rispetto al tetraedro ideale.
:::

:::definizione{#polarita-interazioni titolo="Dipoli molecolari e forze intermolecolari"}
Il momento dipolare molecolare è la somma vettoriale dei contributi della distribuzione di carica. $\mathrm{CO_2}$ contiene legami polari, ma la struttura lineare simmetrica ne annulla il momento risultante. Nell'acqua la geometria angolare produce un momento risultante diverso da zero.

Le **forze di van der Waals** comprendono interazioni tra dipoli permanenti, tra dipoli permanenti e indotti e forze di dispersione di London. Queste ultime derivano da fluttuazioni della densità elettronica e sono presenti anche in molecole apolari. Il legame a idrogeno coinvolge un H legato a un atomo elettronegativo e un sito accettore dotato di densità elettronica disponibile; nei casi biologici comuni partecipano soprattutto O e N. L'acqua può formare una rete di legami a idrogeno, che contribuisce alle sue proprietà di solvente e alla coesione del liquido.

L’interazione **ione-dipolo** è l’attrazione tra uno ione e il dipolo di una molecola polare. Nell’idratazione di $\mathrm{Na^+}$, l’estremità dell’acqua vicina all’ossigeno si orienta verso il catione; per $\mathrm{Cl^-}$ si orientano verso lo ione le estremità vicine agli idrogeni. Queste interazioni contribuiscono alla dissoluzione dei sali.

L'interazione idrofobica descrive la tendenza di superfici apolari ad associarsi in acqua: l'associazione modifica l'organizzazione del solvente e può ridurre l'energia libera complessiva. Non è un nuovo legame covalente tra le superfici. La formazione delle membrane e il ripiegamento proteico dipendono anche da questo effetto.
:::

## Numeri di ossidazione e nomenclatura inorganica

:::definizione{#ossidazione-nomenclatura titolo="Numeri di ossidazione e formule"}
Il **numero di ossidazione** è la carica ipotetica attribuita a un atomo assegnando gli elettroni di ciascun legame all’atomo più elettronegativo; nei legami tra atomi uguali gli elettroni si dividono in parti uguali. La carica formale delle strutture di Lewis usa invece una divisione uguale degli elettroni di ogni legame. Nel carbonio di $\mathrm{CO_2}$ il numero di ossidazione è $+4$, mentre la carica formale nella struttura $\mathrm{O=C=O}$ è zero. La somma dei numeri di ossidazione è zero in una specie neutra e coincide con la carica in uno ione poliatomico. Negli elementi allo stato libero il numero vale zero; l'ossigeno vale generalmente $-2$, ma nei perossidi vale $-1$. L'idrogeno vale generalmente $+1$ nei composti con non metalli e $-1$ negli idruri metallici.

Per $\mathrm{H_3PO_4}$, posto $x$ il numero di ossidazione del fosforo,
$$
3(+1)+x+4(-2)=0,\qquad x=+5.
$$
Il numero di ossidazione distingue specie come ferro(II) e ferro(III) ed è utile nel bilanciamento delle reazioni redox.
:::

:::osservazione{#classi-inorganiche titolo="Ossidi, idrossidi, acidi e sali"}
Negli **ossidi** l'ossigeno è combinato con un altro elemento, come in $\mathrm{CO_2}$, diossido di carbonio, e $\mathrm{Fe_2O_3}$, ossido di ferro(III). I **perossidi** contengono un gruppo O-O con ossigeno a $-1$, come $\mathrm{H_2O_2}$, perossido di idrogeno. Gli idrossidi contengono lo ione $\mathrm{OH^-}$, come $\mathrm{NaOH}$, idrossido di sodio.

Gli acidi possono essere binari, come $\mathrm{HCl}$, detto acido cloridrico in soluzione acquosa, o contenere ossigeno, come $\mathrm{H_2SO_4}$, acido solforico, e $\mathrm{H_3PO_4}$, acido fosforico. Tra le basi biologicamente rilevanti compare anche $\mathrm{NH_3}$, che accetta un protone formando $\mathrm{NH_4^+}$ pur non contenendo OH nella formula.

I sali contengono cationi e anioni in rapporto tale da rispettare l'elettroneutralità. $\mathrm{CaCl_2}$ è cloruro di calcio, $\mathrm{NaHCO_3}$ è idrogenocarbonato di sodio e $\mathrm{Ca_3(PO_4)_2}$ è fosfato di calcio. Ioni come $\mathrm{HCO_3^-}$, $\mathrm{SO_4^{2-}}$, $\mathrm{PO_4^{3-}}$ e $\mathrm{NH_4^+}$ sono gruppi di atomi con carica complessiva; la loro carica determina gli indici della formula del sale.
:::

## Solidi, gas e distribuzione delle velocità

:::osservazione{#solidi titolo="Tipi di solidi"}
Nei solidi le particelle sono mantenute in posizioni medie definite, pur compiendo moti termici. Nei solidi ionici, come NaCl, la stabilità deriva soprattutto dalle interazioni tra ioni. Nei solidi molecolari, come il ghiaccio e la CO2 solida, sono riconoscibili molecole legate da interazioni intermolecolari. I solidi covalenti, come il diamante, presentano una rete estesa di legami covalenti; nei metalli la delocalizzazione elettronica consente il trasporto di carica. La grafite mostra che struttura e proprietà possono differire anche per uno stesso elemento, perché i suoi strati e gli elettroni delocalizzati producono proprietà diverse da quelle del diamante.
:::

:::definizione{#gas-ideali titolo="Temperatura assoluta e leggi dei gas"}
La temperatura assoluta $T$, espressa in kelvin, si ricava da quella Celsius mediante $T=t+273{,}15$. Un **gas ideale** è un modello con particelle di volume trascurabile e interazioni trascurabili tra un urto e l'altro. Il modello descrive meglio gas sufficientemente diluiti e lontani dalla condensazione. L'equazione di stato è
$$
pV=nRT.
$$
La pressione $p$ è assoluta, $V$ è il volume e $R$ è la costante dei gas. Si può usare $R=8{,}314\,\mathrm{J\,mol^{-1}K^{-1}}$ con pascal e metri cubi, oppure $R=0{,}082057\,\mathrm{L\,atm\,mol^{-1}K^{-1}}$ con litri e atmosfere.

Per una quantità fissa di gas, la legge di Boyle dà $pV=\text{costante}$ a temperatura costante. La legge di Charles dà $\dfrac VT=\text{costante}$ a pressione costante. La legge di Gay-Lussac dà $\dfrac pT=\text{costante}$ a volume costante. Un aumento del volume toracico può quindi essere collegato a una diminuzione della pressione del gas nelle condizioni in cui l'approssimazione isoterma è adeguata; nel processo respiratorio reale entra ed esce anche materia.
:::

:::osservazione{#cinetica-gas titolo="Teoria cinetica e distribuzione di Maxwell-Boltzmann"}
La pressione del gas deriva dagli urti delle particelle contro le pareti. Per un gas ideale monoatomico l'energia cinetica traslazionale media per particella è $\dfrac32 k_BT$, con $k_B$ costante di Boltzmann; dipende quindi dalla temperatura assoluta. Le particelle hanno velocità differenti, descritte in equilibrio dalla distribuzione di Maxwell-Boltzmann.

La velocità quadratica media è
$$
v_{\mathrm{rms}}=\sqrt{\frac{3RT}{M}},
$$
dove la massa molare $M$ va espressa in $\mathrm{kg\,mol^{-1}}$ se si usa $R$ in unità SI. All'aumentare di $T$ la distribuzione si allarga e le velocità caratteristiche aumentano; alla stessa temperatura particelle più leggere hanno velocità caratteristiche maggiori. Per esempio, alla stessa temperatura il rapporto tra le velocità quadratiche medie di $\mathrm{H_2}$ e $\mathrm{O_2}$ è circa $\sqrt{\frac{32}{2}}=4$.
:::

## Liquidi e cambiamenti di fase

:::definizione{#liquidi-fasi titolo="Evaporazione, pressione di vapore e tensione superficiale"}
In un liquido le particelle restano vicine e possono scorrere. L'**evaporazione** è il passaggio alla fase gassosa dalla superficie e avviene anche sotto la temperatura di ebollizione. Le particelle che lasciano il liquido sottraggono energia, quindi l'evaporazione del sudore contribuisce al trasferimento di calore dal corpo all'ambiente. Il calore necessario per vaporizzare una quantità di sostanza a temperatura fissata è collegato all'entalpia di vaporizzazione.

In un recipiente chiuso il vapore può raggiungere un equilibrio dinamico con il liquido. La **pressione di vapore** è la pressione del vapore in quell'equilibrio e cresce con la temperatura. L'ebollizione si verifica quando la pressione di vapore uguaglia la pressione esterna, perché possono allora formarsi bolle di vapore nel liquido. Abbassando la pressione esterna si abbassa la temperatura di ebollizione.

La tensione superficiale è il lavoro necessario per aumentare di un'unità l'area dell'interfaccia, nelle condizioni specificate, ed è esprimibile in $\mathrm{J\,m^{-2}}$ o $\mathrm{N\,m^{-1}}$. Le interazioni coesive spiegano la tendenza di una goccia a ridurre la propria area. L'aggiunta di tensioattivi modifica l'interfaccia e ne riduce la tensione superficiale.
:::

:::osservazione{#diagrammi-fase titolo="Diagrammi di fase di acqua e anidride carbonica"}
Un diagramma pressione-temperatura distingue le regioni di stabilità delle fasi solida, liquida e gassosa. Sulle curve di coesistenza due fasi sono in equilibrio; nel punto triplo coesistono tre fasi. La curva liquido-vapore termina nel punto critico, oltre il quale la distinzione tra liquido e gas viene meno.

Nell'acqua, vicino alle condizioni ordinarie, il ghiaccio è meno denso dell'acqua liquida. La curva di fusione ha quindi pendenza negativa: aumentando la pressione si favorisce il liquido e la temperatura di fusione diminuisce. Nella CO2 la curva di fusione ha pendenza positiva nelle condizioni usuali. A pressione atmosferica la CO2 solida sublima, perché la pressione è inferiore a quella del punto triplo, circa $5{,}2\,\mathrm{bar}$; per osservare CO2 liquida sono necessarie pressioni maggiori di quella tripla e temperature nella regione liquida. L'acqua, invece, presenta una fase liquida stabile anche a pressione atmosferica.
:::

## Energia, entropia e sistemi aperti

:::definizione{#energia-entalpia titolo="Primo principio ed entalpia"}
Un sistema **aperto** scambia materia ed energia con l'ambiente; un sistema chiuso scambia energia ma non materia; un sistema isolato non scambia né materia né energia. Un organismo è un sistema aperto. Per un sistema chiuso, trascurando variazioni di energia cinetica e potenziale macroscopiche, il primo principio si scrive
$$
\Delta U=q+w.
$$
$U$ è l'energia interna, $q$ è il calore assorbito dal sistema e $w$ è il lavoro ricevuto. In un'espansione contro pressione esterna costante, $w=-p_{\mathrm{ext}}\Delta V$. Un sistema aperto richiede nel bilancio anche l'energia trasportata dalla materia in ingresso e in uscita.

L'**entalpia** è $H=U+pV$ ed è una funzione di stato, quindi la sua variazione dipende dagli stati iniziale e finale. Per un sistema chiuso a pressione costante, con solo lavoro di espansione, il calore scambiato è $q_p=\Delta H$. Una trasformazione esotermica ha $\Delta H<0$ e cede calore; una trasformazione endotermica ha $\Delta H>0$ e lo assorbe. La fusione e la vaporizzazione richiedono normalmente calore, mentre solidificazione e condensazione lo cedono.
:::

:::definizione{#entropia-gibbs titolo="Entropia ed energia libera di Gibbs"}
L'**entropia** $S$ descrive il numero di stati microscopici compatibili con le condizioni macroscopiche e la dispersione dell'energia. Il secondo principio richiede $\Delta S_{\mathrm{universo}}\ge0$; la disuguaglianza è stretta per un processo irreversibile. L'entropia di un singolo sistema può diminuire se l'ambiente riceve un aumento di entropia almeno sufficiente a compensarla.

L'energia libera di Gibbs è $G=H-TS$. Per una trasformazione a temperatura costante,
$$
\Delta G=\Delta H-T\Delta S.
$$
A temperatura e pressione costanti il segno di $\Delta G$ fornisce un criterio di spontaneità per la trasformazione considerata: $\Delta G<0$ indica un verso termodinamicamente favorito, $\Delta G=0$ l'equilibrio e $\Delta G>0$ un verso sfavorito. Il segno non determina la velocità. Una trasformazione esoergonica ha $\Delta G<0$; una trasformazione endoergonica ha $\Delta G>0$. Il calcolo richiede unità coerenti, per esempio entalpia in joule ed entropia in joule per kelvin.

Nei sistemi aperti biologici si mantengono flussi di materia ed energia. Una reazione con variazione di energia libera positiva può essere accoppiata a una reazione con variazione negativa abbastanza grande da rendere negativa la somma. Uno stato stazionario con concentrazioni costanti può perciò mantenere reazioni e flussi, mentre all'equilibrio manca una forza motrice netta per la reazione.
:::

:::esempio{titolo="Entalpia ed entropia nel criterio di spontaneità"}
Una trasformazione presenta $\Delta H=20\,\mathrm{kJ\,mol^{-1}}$ e $\Delta S=100\,\mathrm{J\,mol^{-1}K^{-1}}$. Trattando queste variazioni come costanti nell'intervallo considerato, a $300\,\mathrm K$ si ottiene
$$
\Delta G=20000-300\cdot100=-10000\,\mathrm{J\,mol^{-1}}.
$$
La trasformazione è endotermica ed esoergonica a quella temperatura, perché il contributo $T\Delta S$ supera $\Delta H$.
:::
