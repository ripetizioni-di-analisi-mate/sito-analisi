---
titolo: Temperatura, calore e termodinamica
sommario: Stati e gas ideali, calorimetria, trasferimento di calore, lavoro, trasformazioni reversibili e irreversibili, macchine di Carnot ed entropia.
---

## Sistemi, equilibrio e temperatura

:::definizione{#stato-termico titolo="Sistema e variabili di stato"}
Un gas in un cilindro e l'acqua in un calorimetro richiedono prima di tutto di fissare un confine. Il **sistema** è la materia o la regione scelta per il bilancio; l'**ambiente** è ciò che resta all'esterno. Un sistema aperto può scambiare materia ed energia; un sistema chiuso scambia energia conservando la materia; un sistema isolato non scambia né materia né energia. Una parete adiabatica impedisce il calore, ma un pistone adiabatico può ancora trasmettere lavoro.

Uno stato di equilibrio è descritto da grandezze macroscopiche, come pressione $p$, volume $V$, temperatura $T$ e quantità di sostanza $n$. L'equilibrio termico richiede assenza di differenze di temperatura capaci di produrre un flusso netto di calore. L'equilibrio meccanico richiede un bilancio delle forze sulla frontiera. Durante un'espansione rapida il gas può presentare pressioni locali differenti: attribuirgli un'unica pressione intermedia richiede un'ulteriore approssimazione.

Una **funzione di stato**, come energia interna $U$ o entropia $S$, ha una variazione determinata dagli stati iniziale e finale. Calore e lavoro descrivono energia trasferita durante un processo e dipendono dal percorso. La pressione e la temperatura sono intensive; volume, quantità di sostanza, energia interna ed entropia sono estensive per sistemi macroscopici additivi.
:::

:::osservazione{titolo="Scale di temperatura e termometro"}
Se due corpi sono separatamente in equilibrio termico con un terzo, sono in equilibrio termico fra loro: è il principio zero, che consente il confronto mediante un termometro. La conversione fra scala Celsius e kelvin è
$$
T\,(\mathrm K)=t\,({}^\circ\mathrm C)+273{,}15.
$$
Un aumento di $15\,{}^\circ\mathrm C$ corrisponde a $15\,\mathrm K$, mentre $15\,{}^\circ\mathrm C$ come temperatura corrisponde a $288{,}15\,\mathrm K$. La stessa differenza fra due letture si conserva perché la costante additiva si cancella. Nei rapporti, nei logaritmi di temperature e nelle leggi dei gas si usano invece temperature assolute. Un termometro immerso modifica leggermente il bilancio: la perturbazione è piccola quando la sua capacità termica è piccola rispetto a quella del campione.
:::

## Gas ideali e capacità termiche

:::teorema{#gas-ideale titolo="Equazione di stato del gas ideale"}
Il **gas ideale** descrive particelle con volume proprio trascurabile e interazioni trascurabili salvo gli urti. È un'approssimazione utile per gas sufficientemente diluiti e lontani dalla condensazione. Per $n$ moli in equilibrio,
$$
pV=nRT,\qquad R\simeq8{,}314\,\mathrm{J\,mol^{-1}K^{-1}}.
$$
Con questo valore di $R$, $p$ è la pressione assoluta in pascal e $V$ il volume in metri cubi. Vale $1\,\mathrm L=10^{-3}\,\mathrm{m^3}$ e il prodotto $pV$ ha dimensioni di energia. Un manometro relativo richiede $p=p_{\mathrm{rel}}+p_{\mathrm{atm}}$ prima dell'applicazione della legge.

Per una quantità fissata, $\dfrac{p_1V_1}{T_1}=\dfrac{p_2V_2}{T_2}$. A temperatura costante segue la proporzionalità inversa fra pressione e volume; a volume costante $p$ è proporzionale a $T$; a pressione costante $V$ è proporzionale a $T$. Una valvola aperta può cambiare $n$: la rigidità del recipiente, da sola, non permette allora di imporre $\dfrac{p}{T}$ costante. L'equazione di stato collega gli stati e non determina il calore o il lavoro scambiati lungo il percorso.
:::

:::definizione{titolo="Energia interna e gradi di libertà"}
L'energia interna comprende le energie microscopiche, distinguendole dall'energia cinetica del centro di massa e dall'energia potenziale macroscopica. Per un gas ideale a quantità e composizione fissate dipende soltanto dalla temperatura. Indicando con $C_V$ la capacità termica *molare* a volume costante,
$$
\Delta U=nC_V(T_f-T_i)
$$
quando $C_V$ è costante nell'intervallo. Per un gas monoatomico classico, le tre componenti della traslazione danno $C_V=\dfrac32R$. Per un biatomico con rotazioni attive e vibrazioni trascurabili, $C_V\simeq\dfrac52R$. Queste condizioni delimitano l'uso dei valori: a temperature che attivano altri modi il modello a capacità costante può perdere precisione.

A pressione costante parte del calore produce espansione. Perciò la capacità molare $C_p$ supera $C_V$; per un gas ideale vale $C_p-C_V=R$. Nel caso monoatomico $C_p=\dfrac52R$ e $\gamma=\dfrac{C_p}{C_V}=\dfrac53$. Nel biatomico descritto $C_p=\dfrac72R$ e $\gamma=\dfrac75$. Il rapporto $\gamma$ determinerà la pendenza delle adiabatiche reversibili.
:::

## Calore e bilanci calorimetrici

:::definizione{#calorimetria titolo="Capacità termica e calore specifico"}
Il **calore** $Q$ è energia trasferita per una differenza di temperatura. È positivo quando entra nel sistema scelto. Un corpo può ricevere la stessa energia anche attraverso lavoro, per esempio mediante un agitatore: il modo del trasferimento va identificato dal processo.

Per una variazione senza passaggi di fase, con calore specifico $c$ costante e nelle condizioni a cui quel valore si riferisce,
$$
Q=mc\Delta T=C\Delta T.
$$
La massa è $m$, la capacità termica del corpo è $C=mc$, in $\mathrm{J\,K^{-1}}$, e $c$ si misura in $\mathrm{J\,kg^{-1}K^{-1}}$. Per solidi e liquidi le differenze fra i comuni vincoli meccanici sono spesso trascurate negli esercizi; per i gas la distinzione fra $C_p$ e $C_V$ è invece necessaria. Se il calore specifico varia sensibilmente, il prodotto va sostituito da $Q=m\int c(T)\,dT$ lungo il processo specificato.

In un calorimetro complessivamente adiabatico, senza lavoro esterno apprezzabile, si impone il bilancio fra i corpi. Nel modello di calori specifici costanti e senza reazioni o transizioni, $\sum_i C_i(T_f-T_i)=0$. Il recipiente e il termometro vanno inclusi quando la loro capacità termica è fornita. Ogni contributo ha già il segno corretto: il corpo caldo ha $T_f-T_i<0$.
:::

:::esempio{titolo="La temperatura finale è una media pesata"}
Si mescolano $0{,}20\,\mathrm{kg}$ d'acqua a $60\,{}^\circ\mathrm C$ e $0{,}30\,\mathrm{kg}$ a $20\,{}^\circ\mathrm C$, con uguale $c$ costante, recipiente trascurabile e nessuna dispersione. Il bilancio dà
$$
0{,}20c(t_f-60)+0{,}30c(t_f-20)=0,
$$
$$
t_f=\dfrac{0{,}20\cdot60+0{,}30\cdot20}{0{,}50}=36\,{}^\circ\mathrm C.
$$
Il risultato è più vicino alla temperatura iniziale della massa maggiore. Con sostanze diverse si pesano le temperature mediante $mc$, perché masse uguali possono immagazzinare energie diverse per lo stesso aumento di temperatura. La media aritmetica semplice vale soltanto quando le capacità termiche complessive dei due corpi sono uguali.
:::

## Cambiamenti di stato ed evaporazione

:::definizione{#calore-latente titolo="Energia durante la coesistenza delle fasi"}
Durante una transizione di equilibrio di una sostanza pura a pressione fissata, l'energia assorbita può cambiare le quantità delle fasi mantenendo la temperatura di coesistenza. Indicando con $\ell$ il calore latente specifico positivo,
$$
Q=m\ell
$$
per fusione o vaporizzazione della massa $m$; per la trasformazione inversa il calore del sistema ha segno negativo. Il valore di $\ell$ dipende dalla sostanza e dalle condizioni, quindi va usato quello dichiarato.

Per trasformare ghiaccio freddo in acqua calda si distinguono riscaldamento del ghiaccio, fusione e riscaldamento dell'acqua. La curva della temperatura in funzione del calore ha due tratti inclinati e un tratto orizzontale. La pendenza dei tratti inclinati vale $\dfrac{1}{mc}$, mentre la lunghezza orizzontale del plateau misura $m\ell_f$.

![Curva di riscaldamento per 0,200 kg di ghiaccio da meno 30 gradi a acqua a 40 gradi, con plateau di fusione](/figure/fisica-semestre-filtro/termodinamica/riscaldamento-it.svg)

Nel mescolamento di acqua e ghiaccio si confronta prima l'energia che l'acqua può cedere raffreddandosi fino alla fusione con quella necessaria a fondere tutto il ghiaccio. Se l'energia è insufficiente, restano entrambe le fasi alla temperatura di fusione. La formula che presuppone acqua interamente liquida produrrebbe in questo caso una temperatura finale incompatibile con l'ipotesi.
:::

:::osservazione{titolo="Evaporazione e bilancio del corpo"}
L'evaporazione avviene alla superficie anche sotto la temperatura di ebollizione; l'ebollizione coinvolge la formazione di bolle nel liquido quando la pressione di vapore raggiunge quella esterna. Per il raffreddamento evaporativo conta la massa effettivamente evaporata. Nel modello in cui l'energia proviene tutta dal corpo, evaporare $10\,\mathrm g$ con $\ell_v=2{,}4\,\mathrm{kJ\,g^{-1}}$ sottrae $24\,\mathrm{kJ}$. L'acqua che cola non produce quel contributo latente. Umidità, movimento dell'aria e temperatura modificano il processo reale; il calcolo isola il solo bilancio energetico dichiarato.
:::

## Trasferimento del calore

:::definizione{#trasmissione-calore titolo="Conduzione, convezione e irraggiamento"}
Nella **conduzione** l'energia si trasferisce attraverso interazioni microscopiche nella materia, senza un trasporto macroscopico del materiale. Per una lastra piana omogenea in regime stazionario, con facce a $T_h>T_c$, lati isolati e conducibilità $\kappa$ costante, la potenza diretta dalla faccia calda alla fredda è
$$
P=\kappa A\dfrac{T_h-T_c}{L}.
$$
Qui $A$ è l'area attraversata e $L$ lo spessore. La potenza è energia per unità di tempo; in un intervallo con $P$ costante si ha $Q=P\Delta t$. La **resistenza termica** $R_{\mathrm{th}}=\dfrac{L}{\kappa A}$ si misura in $\mathrm{K\,W^{-1}}$ e permette di scrivere $P=\dfrac{T_h-T_c}{R_{\mathrm{th}}}$.

In strati in serie, con contatto ideale e senza accumulo energetico all'interfaccia, passa la stessa potenza. Le resistenze si sommano e lo strato con maggiore resistenza presenta il maggiore salto di temperatura. In ciascun materiale omogeneo la temperatura varia linearmente con la posizione; la pendenza cambia quando cambia $\kappa$.

![Profilo stazionario della temperatura attraverso due strati in serie, con maggiore caduta nello strato più resistente](/figure/fisica-semestre-filtro/termodinamica/conduzione-it.svg)

Nella **convezione** il movimento del fluido trasporta energia. Il moto può derivare dalla spinta di galleggiamento dovuta a differenze di densità, oppure essere imposto da una pompa o un ventilatore. Nel modello empirico $P=hA(T_s-T_f)$, il coefficiente $h$ dipende dal flusso e dalla geometria: non coincide con la conducibilità del materiale. Il raffreddamento di una superficie esposta all'aria può combinare convezione ed evaporazione.
:::

:::teorema{titolo="Scambio radiativo netto"}
L'**irraggiamento** trasferisce energia mediante onde elettromagnetiche e può avvenire nel vuoto. Una superficie grigia di area $A$, emissività $\varepsilon$ e temperatura uniforme $T$, circondata da un grande ambiente isotermo a $T_a$, con fattore di vista unitario, ha potenza netta uscente
$$
P_{\mathrm{net}}=\varepsilon\sigma A(T^4-T_a^4),
$$
con $\sigma\simeq5{,}67\cdot10^{-8}\,\mathrm{W\,m^{-2}K^{-4}}$ e temperature in kelvin. Si assume che la stessa emissività descriva l'assorbimento nel modello grigio. Il corpo emette anche quando $T=T_a$, ma l'assorbimento compensa l'emissione e lo scambio netto è nullo. Se $T<T_a$, il segno negativo indica energia netta entrante.

![Potenza radiativa netta di una superficie di un metro quadrato ed emissività 0,90 in un ambiente a 293,15 kelvin](/figure/fisica-semestre-filtro/termodinamica/irraggiamento-it.svg)

Raddoppiare la temperatura assoluta moltiplica per sedici la potenza *emessa* a emissività invariata. La potenza netta richiede anche il termine dell'ambiente. In un bilancio corporeo i contributi radiativo, convettivo, conduttivo ed evaporativo vanno distinti per evitare di contare due volte la stessa energia.
:::

## Lavoro, percorsi e primo principio

:::teorema{#primo-principio titolo="Convenzione dei segni e bilancio energetico"}
Si assume $Q>0$ per il calore assorbito e $W>0$ per il lavoro **compiuto dal sistema** sull'ambiente. Per un sistema chiuso, trascurando variazioni macroscopiche di energia cinetica e potenziale,
$$
\Delta U=Q-W.
$$
Un sistema che assorbe $500\,\mathrm J$ e compie $200\,\mathrm J$ aumenta $U$ di $300\,\mathrm J$. In una compressione il lavoro compiuto dal gas è negativo: con $Q=0$ e $W=-200\,\mathrm J$ si ottiene $\Delta U=+200\,\mathrm J$. Usando invece lavoro ricevuto positivo, si porrebbe $w=-W$ e si scriverebbe $\Delta U=Q+w$; i due bilanci esprimono la stessa conservazione.

Per il lavoro di volume contro una pressione esterna definita,
$$
W=\int_{V_i}^{V_f}p_{\mathrm{ext}}\,dV.
$$
In un processo meccanicamente reversibile la pressione esterna differisce infinitesimamente da quella del gas e si può usare $W=\int p\,dV$. Il risultato è l'area con segno sotto il percorso nel piano $p,V$: positiva nell'espansione, negativa nella compressione. Il prodotto $1\,\mathrm{kPa}\cdot1\,\mathrm L$ equivale a $1\,\mathrm J$.

![Due percorsi meccanicamente reversibili fra gli stessi stati: espansione a pressione alta o bassa e aree di lavoro differenti](/figure/fisica-semestre-filtro/termodinamica/lavoro-it.svg)

Nella figura, partire da $A$ e arrivare a $B$ comporta $600\,\mathrm J$ di lavoro compiuto lungo il percorso con espansione a $300\,\mathrm{kPa}$ e $200\,\mathrm J$ lungo quello a $100\,\mathrm{kPa}$. La variazione di energia interna è la stessa, quindi anche i calori differiscono di $400\,\mathrm J$. Nei sistemi aperti l'energia trasportata dalla materia richiede termini aggiuntivi: il bilancio chiuso non si trasferisce direttamente all'intero organismo.
:::

## Trasformazioni canoniche e reversibilità

:::definizione{titolo="Quasistatico e reversibile"}
Un processo **quasistatico** attraversa stati arbitrariamente vicini all'equilibrio, permettendo di assegnare variabili di stato durante il percorso. La **reversibilità** richiede inoltre che sia possibile invertire il processo ripristinando sia sistema sia ambiente senza effetti residui. Attrito e scambi di calore attraverso differenze finite di temperatura rendono un processo irreversibile anche quando parte dell'evoluzione è lenta.

Un gas che si espande nel vuoto dentro un recipiente rigido isolato compie lavoro esterno nullo e riceve calore nullo. Per un gas ideale $\Delta U=0$ implica temperature iniziale e finale uguali. Il processo resta irreversibile e non è rappresentato da una successione di stati di equilibrio con pressione uniforme. Questo caso distingue l'isolamento termico dall'adiabatica reversibile.
:::

:::osservazione{#trasformazioni titolo="Quattro trasformazioni del gas ideale"}
Le relazioni seguenti riguardano quantità e composizione fisse, con solo lavoro di volume e capacità termiche molari costanti dove usate.

| Processo | Vincolo | Bilancio e relazione |
| --- | --- | --- |
| isocoro | volume costante | $W=0$, $Q=\Delta U=nC_V\Delta T$ |
| isobaro meccanicamente reversibile | pressione costante | $W=p\Delta V=nR\Delta T$, $Q=nC_p\Delta T$ |
| isotermo reversibile | temperatura costante | $\Delta U=0$, $W=Q=nRT\ln\dfrac{V_f}{V_i}$ |
| adiabatico | calore nullo | $Q=0$, $\Delta U=-W$ |

Nell'isoterma l'integrale di $p=\dfrac{nRT}{V}$ produce il logaritmo. Il rapporto dei volumi è adimensionale, perciò si possono usare litri in entrambi i termini. Un'espansione isoterma reversibile assorbe il calore necessario a compensare esattamente il lavoro compiuto.

Per l'adiabatica *reversibile*, usando $dU=-p\,dV$, si ricava $nC_VdT=-nRT\,\dfrac{dV}{V}$. L'integrazione dà
$$
TV^{\gamma-1}=\text{costante},\qquad pV^\gamma=\text{costante}.
$$
Il lavoro vale $W=\dfrac{p_iV_i-p_fV_f}{\gamma-1}$. Nell'espansione la temperatura diminuisce, poiché il lavoro proviene dall'energia interna. A partire dallo stesso stato, la pressione scende più rapidamente lungo l'adiabatica reversibile che lungo l'isoterma. Le leggi con $\gamma$ richiedono reversibilità e non descrivono l'espansione libera appena discussa.

![Isobara, isoterma e adiabatica reversibile monoatomica passanti per lo stesso stato iniziale](/figure/fisica-semestre-filtro/termodinamica/trasformazioni-it.svg)
:::

## Secondo principio, cicli e macchine

:::teorema{#secondo-principio titolo="Direzione dei processi e macchine cicliche"}
Il primo principio ammette bilanci energetici che il secondo principio esclude. L'enunciato di **Kelvin–Planck** impedisce una macchina ciclica il cui unico risultato sia trasformare integralmente in lavoro il calore ricevuto da un solo serbatoio. L'enunciato di **Clausius** impedisce un processo il cui unico risultato sia trasferire calore dal freddo al caldo. Un frigorifero realizza questo trasferimento ricevendo lavoro, quindi il trasferimento non è il suo unico effetto.

In un ciclo lo stato finale coincide con quello iniziale, perciò $\Delta U=0$ e $W_{\mathrm{ciclo}}=Q_{\mathrm{ciclo}}$. Per un ciclo meccanicamente reversibile con solo lavoro di volume, nel piano $p,V$ il lavoro netto è l'area racchiusa, positiva se il ciclo è percorso in senso orario. Una curva chiusa non implica lavoro nullo: è la variazione delle funzioni di stato a essere nulla.

Per una macchina che assorbe la quantità positiva $Q_h$ dal serbatoio caldo e cede la quantità positiva $Q_c$ a quello freddo,
$$
W=Q_h-Q_c,\qquad \eta=\dfrac{W}{Q_h}=1-\dfrac{Q_c}{Q_h}.
$$
$Q_c$ qui è il modulo del calore ceduto; il calore con segno ricevuto dalla macchina in quello scambio è $-Q_c$. A frequenza $f$ cicli al secondo la potenza meccanica è $P=fW$. Il rendimento confronta energie o potenze omogenee e non ha unità di misura.
:::

:::teorema{titolo="Carnot e prestazioni dei frigoriferi"}
Il ciclo di **Carnot** comprende espansione isoterma a $T_h$, espansione adiabatica reversibile fino a $T_c$, compressione isoterma a $T_c$ e compressione adiabatica reversibile fino allo stato iniziale. Tutti i tratti sono reversibili e i due serbatoi mantengono temperature assolute $T_h>T_c>0$.

![Ciclo di Carnot di un gas monoatomico con due isoterme a temperature nel rapporto due a uno e due adiabatiche reversibili](/figure/fisica-semestre-filtro/termodinamica/carnot-it.svg)

Per questo ciclo $\dfrac{Q_c}{Q_h}=\dfrac{T_c}{T_h}$, dunque
$$
\eta_C=1-\dfrac{T_c}{T_h}.
$$
Fra le stesse due sorgenti nessuna macchina può superare questo rendimento; l'uguaglianza è raggiunta nel limite reversibile. Aumentare $T_h$ o diminuire $T_c$ aumenta il limite, ma il risultato dipende dal rapporto in kelvin. Il valore teorico non stabilisce la potenza: il limite quasistatico può comportare tempi molto lunghi.

Per un frigorifero si usa il lavoro entrante positivo $W_{\mathrm{in}}=Q_h-Q_c$. Il coefficiente di prestazione è $\mathrm{COP}_R=\dfrac{Q_c}{W_{\mathrm{in}}}$; per una pompa di calore il risultato utile è $Q_h$, quindi $\mathrm{COP}_H=\dfrac{Q_h}{W_{\mathrm{in}}}=\mathrm{COP}_R+1$. Un COP maggiore di uno è compatibile con il bilancio perché il dispositivo trasferisce calore già presente. Nel limite reversibile $\mathrm{COP}_{R,C}=\dfrac{T_c}{T_h-T_c}$.
:::

## Entropia e irreversibilità

:::definizione{#entropia titolo="Variazione di entropia tra due stati"}
Per confrontare processi che rispettano lo stesso bilancio energetico si introduce l'**entropia**, funzione di stato con unità $\mathrm{J\,K^{-1}}$. La variazione si calcola lungo un cammino reversibile fra gli stati assegnati:
$$
\Delta S=\int_i^f\dfrac{\delta Q_{\mathrm{rev}}}{T}.
$$
Il cammino usato nel calcolo può essere diverso dal processo reale. Un serbatoio ideale a temperatura costante che assorbe $Q$ ha $\Delta S=\dfrac{Q}{T}$. Per un corpo di capacità termica $C=mc$ costante, senza transizioni e alle condizioni considerate, $\Delta S=C\ln(\dfrac{T_f}{T_i})$. Il logaritmo deriva dall'integrazione di $\dfrac{C\,dT}{T}$; usare un'unica temperatura finale nel rapporto $\dfrac{Q}{T_f}$ perderebbe la variazione durante il riscaldamento.

Per una transizione reversibile alla temperatura di coesistenza $T_0$, la fusione dà $\Delta S=\dfrac{m\ell_f}{T_0}$. Per un gas ideale con $C_V$ costante,
$$
\Delta S=nC_V\ln\dfrac{T_f}{T_i}+nR\ln\dfrac{V_f}{V_i}.
$$
Tutti i rapporti di temperatura sono in kelvin. La formula del gas vale fra gli stati di equilibrio anche quando il percorso reale è irreversibile. Nell'espansione libera ideale $T_f=T_i$, ma $V_f>V_i$, perciò $\Delta S=nR\ln(\dfrac{V_f}{V_i})>0$ malgrado il calore reale sia nullo.
:::

:::teorema{titolo="Entropia totale e interpretazione statistica"}
Per sistema e ambiente considerati insieme come complesso isolato,
$$
\Delta S_{\mathrm{tot}}=\Delta S_{\mathrm{sist}}+\Delta S_{\mathrm{amb}}\ge0.
$$
L'uguaglianza caratterizza il limite reversibile; un processo irreversibile produce entropia. Una singola parte può diminuire la propria entropia purché gli altri contributi compensino la diminuzione. Per un dispositivo ciclico $\Delta S$ del fluido di lavoro è zero anche se il ciclo è irreversibile; l'aumento totale include i serbatoi.

Il trasferimento di $2000\,\mathrm J$ da un serbatoio a $400\,\mathrm K$ a uno a $250\,\mathrm K$ dà $\Delta S_h=-5\,\mathrm{J\,K^{-1}}$ e $\Delta S_c=+8\,\mathrm{J\,K^{-1}}$. La somma è positiva. Il verso opposto, come unico effetto, darebbe una somma negativa e sarebbe escluso.

![Variazioni di entropia dei serbatoi caldo e freddo e aumento totale per 2000 joule trasferiti da 400 a 250 kelvin](/figure/fisica-semestre-filtro/termodinamica/entropia-it.svg)

Nell'interpretazione statistica di Boltzmann, $S=k_B\ln\Omega$, dove $k_B=1{,}380649\cdot10^{-23}\,\mathrm{J\,K^{-1}}$ e $\Omega$ conta i microstati equiprobabili compatibili con il macrostato. Se il numero aumenta di un fattore $r$, $\Delta S=k_B\ln r$. Per un sistema macroscopico isolato i macrostati con maggiore molteplicità sono enormemente più probabili. L'interpretazione riguarda probabilità e vincoli fisici; il termine generico disordine non sostituisce il conteggio o il bilancio.
:::
