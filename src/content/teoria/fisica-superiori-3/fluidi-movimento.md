---
titolo: Fluidi in movimento
sommario: Portata, continuità, Bernoulli, efflusso e modelli del moto viscoso.
---

## Portata e regime stazionario

:::definizione{#portata titolo="Volume che attraversa una sezione"}
La **portata volumetrica media** è il volume di fluido che attraversa una sezione diviso per la durata, $Q_m=\dfrac{\Delta V}{\Delta t}$. L’unità SI è $\mathrm{m^3/s}$. Se la velocità è uniforme e perpendicolare alla sezione, in un intervallo breve il fluido attraversato occupa un cilindro di sezione $A$ e lunghezza $v\Delta t$. Si ottiene $Q=Av$. Con un profilo non uniforme si usa la media della componente normale della velocità su tutta la sezione. Una velocità letta al centro del tubo può essere maggiore della media e non va sostituita direttamente in $Q=Av$.

Il litro corrisponde a $10^{-3}\,\mathrm{m^3}$. Una portata di $6\,\mathrm{L/s}$ è quindi $0{,}006\,\mathrm{m^3/s}$. La **portata massica** è $\dot m=\rho Q$ quando la densità è uniforme sulla sezione; indica massa per tempo. In un regime stazionario velocità, pressione e densità a un punto fissato non cambiano nel tempo. Possono variare da sezione a sezione: la velocità può quindi essere stazionaria pur aumentando mentre la stessa particella entra in una strozzatura.
:::

:::esempio{titolo="Volume da un grafico portata-tempo"}
Una pompa trasferisce $4\,\mathrm{L/s}$ per $10\,\mathrm s$, poi $2\,\mathrm{L/s}$ per $5\,\mathrm s$. I volumi sono $40\,\mathrm L$ e $10\,\mathrm L$, perciò in tutto transitano $50\,\mathrm L$. La portata media nei quindici secondi vale $50/15\,\mathrm{L/s}\simeq3{,}33\,\mathrm{L/s}$. La media semplice dei due valori darebbe $3\,\mathrm{L/s}$ e sarebbe valida solo se le durate coincidessero.

::grafico{linee="0,4 10,4;10,2 15,2" area="4;0;0;10|2;0;10;15" xmin=0 xmax=17 ymin=0 ymax=5.3 nomi="t (s),Q (L/s)" titolo="I rettangoli hanno aree pari ai volumi trasferiti nei due intervalli"}
:::

## Continuità

:::teorema{#continuita titolo="Conservazione della massa"}
Si consideri il tratto di fluido tra due sezioni. La variazione della massa in quel tratto è massa entrante meno massa uscente. In regime stazionario, senza perdite e senza diramazioni, le due portate massiche coincidono:
$$
\rho_1 A_1 v_1=\rho_2A_2v_2.
$$
Per un liquido incomprimibile $\rho_1=\rho_2$, perciò si conserva anche la portata volumetrica e vale $A_1v_1=A_2v_2$. Dimezzando il raggio di una sezione circolare si riduce l’area a un quarto. Alla stessa portata, la velocità media quadruplica. Se la densità cambia, come può accadere con un gas, è la portata massica a essere vincolata.

In una biforcazione la portata massica in ingresso è uguale alla somma delle portate massiche in uscita, purché il tratto non accumuli massa. Con lo stesso liquido incomprimibile in tutti i rami, basta sommare le portate volumetriche. La continuità vincola i flussi ma non determina da sola come la portata totale si ripartisce tra i rami. Per questo servono relazioni con le pressioni e le resistenze dei condotti.
:::

:::esempio{titolo="Una diramazione"}
Arrivano $10\,\mathrm{L/s}$ e il ramo 2 scarica $6\,\mathrm{L/s}$. Senza accumulo il terzo ramo riceve $4\,\mathrm{L/s}$. Se la sua sezione perpendicolare è $0{,}002\,\mathrm{m^2}$, nel ramo 3 la velocità media vale $2\,\mathrm{m/s}$, poiché $4\,\mathrm{L/s}=0{,}004\,\mathrm{m^3/s}$. Non occorre supporre che il fluido nei due rami esca con la stessa velocità.

::grafico{assi=0 vettori="-3,0,-.4,0,10;.2,.3,2.7,1.4,6;.2,-.3,2.4,-1.3,4" punti="0,0,pieno" xmin=-4 xmax=4 ymin=-2 ymax=2.5 titolo="Le portate riportate sulle frecce sono in litri al secondo"}
:::

## Equazione di Bernoulli

:::teorema{#bernoulli titolo="Energia lungo una linea di corrente"}
Per un fluido ideale incomprimibile in regime stazionario, con attriti trascurabili e senza pompe o turbine fra due punti della stessa linea di corrente,
$$
p_1+\frac12\rho v_1^2+\rho gy_1
=
p_2+\frac12\rho v_2^2+\rho gy_2 .
$$
I tre termini hanno unità di pascal, cioè energia per unità di volume. Per ricavare l’equazione si segue un volume $\Delta V$. All’ingresso il fluido circostante gli fornisce lavoro $p_1\Delta V$; all’uscita il volume deve fare lavoro $p_2\Delta V$ contro il fluido a valle. Il saldo modifica l’energia cinetica e l’energia potenziale gravitazionale del volume. Dividere il bilancio per $\Delta V$ dà l’equazione.

Si può usare pressione assoluta o relativa allo stesso valore di riferimento in entrambi i punti, perché una costante aggiunta si cancella. Un aumento di quota riduce la pressione se velocità e altre condizioni non cambiano. Un aumento di velocità a pari quota riduce la pressione nel modello ideale. Nei casi con quota e velocità che cambiano insieme si calcolano i due contributi separatamente, con i loro segni.
:::

:::esempio{titolo="Termini di segno opposto"}
L’acqua va da quota $y_1$ a quota $y_1+1\,\mathrm m$. La velocità cala da $6$ a $2\,\mathrm{m/s}$. Con $\rho=1000\,\mathrm{kg/m^3}$ e $g=10\,\mathrm{m/s^2}$, rallentare aumenta la pressione di $16000\,\mathrm{Pa}$, mentre salire la riduce di $10000\,\mathrm{Pa}$. Il saldo $p_2-p_1=6000\,\mathrm{Pa}$ è positivo. Una sezione più alta può quindi avere pressione maggiore se il calo di velocità è sufficiente.
:::

## Effetto Venturi

:::osservazione{#venturi titolo="Restringimenti e pressione"}
In un tubo orizzontale, ideale e incomprimibile, una strozzatura fa aumentare la velocità per continuità. Per Bernoulli la pressione nella gola diminuisce. Sostituendo $v_2=(A_1/A_2)v_1$ nel bilancio si ottiene
$$
p_1-p_2=\frac12\rho v_1^2\left[\left(\frac{A_1}{A_2}\right)^2-1\right].
$$
La caduta di pressione cresce con il quadrato della velocità d’ingresso se le aree restano fissate. Inversamente, dati la differenza di pressione e il rapporto delle aree, si ricava la velocità da una radice quadrata e poi la portata mediante $A_1v_1$.

Una sezione che si riallarga può recuperare parte della pressione statica. In un fluido reale, la dissipazione riduce la pressione recuperata rispetto al modello ideale. Il confronto tra due valori di velocità da solo è insufficiente se cambiano anche le quote, se ci sono macchine, o se i punti appartengono a linee di corrente con energie diverse.
:::

:::esempio{titolo="Portata da una differenza di pressione"}
In un Venturi orizzontale ideale l’area d’ingresso è doppia rispetto alla gola. Con acqua di densità $1000\,\mathrm{kg/m^3}$ e $p_1-p_2=6000\,\mathrm{Pa}$, il quadrato della velocità d’ingresso vale $2\cdot6000/(1000\cdot3)=4\,\mathrm{m^2/s^2}$. Quindi $v_1=2\,\mathrm{m/s}$ e $v_2=4\,\mathrm{m/s}$. Se $A_1=0{,}010\,\mathrm{m^2}$, la portata è $0{,}020\,\mathrm{m^3/s}$.

::grafico{assi=0 linee="-4,1.4 -1,1.4 1,1 4,1;-4,-1.4 -1,-1.4 1,-1 4,-1" vettori="-3.3,0,-1.9,0,v_1;1,0,3.8,0,v_2" xmin=-4.5 xmax=4.7 ymin=-2.2 ymax=2.3 titolo="La gola ha metà dell’area e velocità media doppia"}
:::

## La legge di Torricelli

:::teorema{#torricelli titolo="Velocità di efflusso da un serbatoio"}
Un serbatoio aperto scarica da un piccolo foro a profondità $h$ sotto la superficie. Supponiamo che la superficie sia molto più grande del foro e che il livello cambi lentamente. La velocità della superficie è allora trascurabile rispetto a quella del getto. Sia la superficie sia il getto appena uscito sono alla pressione atmosferica. Bernoulli trasforma la differenza di altezza in energia cinetica per unità di volume:
$$
\rho gh=\frac12\rho v^2,\qquad v=\sqrt{2gh}.
$$
In queste ipotesi si ricava $Q=Av$ per l’area efficace del getto. Una differenza di pressione fra superficie e uscita aggiungerebbe il termine $(p_{\mathrm s}-p_{\mathrm u})/\rho$ al bilancio per unità di massa. Se le due aree fossero confrontabili, anche la superficie avrebbe velocità da includere tramite la continuità.

Quando il serbatoio si svuota, la quota libera scende. Ne segue che la velocità e la portata calano. Usare la portata iniziale per tutto il processo sovrastima il volume effluito a parità di tempo, o sottostima il tempo per svuotare un dato volume. La contrazione del getto e altre perdite riducono in pratica la portata rispetto al prodotto ottenuto con l’intera area geometrica del foro.
:::

:::esempio{titolo="Modifica della profondità"}
Con $g=10\,\mathrm{m/s^2}$, a profondità $0{,}80\,\mathrm m$ il modulo ideale della velocità vale $4\,\mathrm{m/s}$. Se il livello scende lasciando il foro a profondità $0{,}20\,\mathrm m$, la profondità diventa un quarto e la velocità si dimezza. A foro fisso anche la portata si dimezza. L’andamento è a radice quadrata, non lineare.

::grafico{f="sqrt(20*x)" punti=".2,2,pieno;0.8,4,pieno" xmin=0 xmax=1 ymin=0 ymax=5 nomi="h (m),v (m/s)" titolo="La profondità determina la velocità di efflusso nel modello ideale"}
:::

## Viscosità e moto reale

:::osservazione{#viscosita titolo="Resistenza al moto e regime laminare"}
La **viscosità dinamica** $\eta$ misura la resistenza allo scorrimento relativo degli strati del fluido e si misura in $\mathrm{Pa\cdot s}$. Per un fluido newtoniano incomprimibile con flusso laminare stazionario, completamente sviluppato in un lungo tubo cilindrico, la legge di Poiseuille dà
$$
Q=\frac{\pi r^4\Delta p}{8\eta L}.
$$
La differenza di pressione è necessaria persino a velocità media e quota costanti. Essa alimenta le dissipazioni del moto. Il profilo assiale è parabolico, massimo al centro e nullo alla parete quando il fluido non scivola su di essa. Il massimo è il doppio della media di sezione. A pressione imposta, raddoppiare il raggio moltiplica la portata per sedici se il flusso resta laminare.

Per una sfera piccola che si muove lentamente in un fluido newtoniano con pareti lontane, la resistenza di Stokes ha modulo $F_v=6\pi\eta rv$ ed è diretta contro la velocità relativa fra sfera e fluido. La relazione richiede un numero di Reynolds molto piccolo. Il numero di Reynolds confronta inerzia e viscosità, $\mathrm{Re}=\rho vD/\eta$, utilizzando il diametro del tubo o della sfera secondo il problema. In caduta, la velocità limite si ottiene quando resistenza e spinta uguagliano il peso. Per un oggetto meno denso del fluido, la velocità limite è verso l’alto, con la resistenza opposta alla risalita.
:::

:::esempio{titolo="Stesso fluido e tubo più lungo"}
Un tubo è sostituito da uno della stessa sezione, ma lungo il triplo. A parità di viscosità e differenza di pressione, se rimane valido Poiseuille, la portata si riduce a un terzo. Per mantenere invece la portata precedente, occorre triplicare la caduta di pressione. Cambiare il raggio avrebbe un effetto più forte perché esso compare elevato alla quarta.

::grafico{curve="t,1-t^2,-1,1" punti="0,1,pieno;1,0,pieno;-1,0,pieno" xmin=-1.25 xmax=1.25 ymin=-.16 ymax=1.25 nomi="r/R,v/v_max" titolo="Nel profilo laminare normalizzato la velocità vale zero alle pareti"}
:::
