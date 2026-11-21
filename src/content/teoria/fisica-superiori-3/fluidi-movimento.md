---
titolo: Fluidi in movimento
sommario: Portata, continuità, Bernoulli, efflusso e modelli del moto viscoso.
---

## Portata e regime stazionario

:::definizione{#portata titolo="Volume che attraversa una sezione"}
Un **fluido** è un liquido o un gas. Una **sezione** è la superficie che taglia un tubo di traverso.

La **portata volumetrica media** è il volume di fluido che attraversa una sezione diviso per il tempo impiegato:
$$
Q_m=\frac{\Delta V}{\Delta t}.
$$
Il simbolo $\Delta$ (*delta* maiuscola) indica una variazione; $\Delta V$ è il volume passato e $\Delta t$ la durata. Nel Sistema Internazionale (SI) il volume si misura in metri cubi e il tempo in secondi, perciò la portata si misura in $\mathrm{m^3/s}$.

Si supponga che la velocità $v$ sia la stessa in ogni punto della sezione (velocità **uniforme**) e perpendicolare alla sezione. In un intervallo breve $\Delta t$ ogni particella avanza di $v\Delta t$, quindi il fluido che ha attraversato la sezione occupa un cilindro di base $A$, l'area della sezione, e altezza $v\Delta t$. Il suo volume è $\Delta V=Av\Delta t$. Dividendo per $\Delta t$ si ottiene
$$
Q=Av.
$$
Se la velocità cambia da punto a punto della sezione (profilo **non uniforme**), in $Q=Av$ si usa la media, su tutta la sezione, della componente **normale** della velocità, cioè della sua parte perpendicolare alla sezione. Se la sezione è divisa in parti con velocità diverse, la portata è la somma dei prodotti area per velocità delle singole parti. Quando il fluido al centro del tubo è più veloce che vicino alle pareti, la velocità letta al centro è maggiore della media e, sostituita in $Q=Av$, dà una portata troppo grande.

Il litro ($\mathrm L$) è un millesimo di metro cubo, $1\,\mathrm L=10^{-3}\,\mathrm{m^3}$. Una portata di $6\,\mathrm{L/s}$ è quindi $0{,}006\,\mathrm{m^3/s}$.

La **densità** $\rho$ (lettera greca *rho*) è la massa contenuta in un metro cubo, in $\mathrm{kg/m^3}$. La **portata massica** è la massa che attraversa la sezione in un secondo, in $\mathrm{kg/s}$. Se la densità è la stessa in tutta la sezione, la portata massica è $\dot m=\rho Q$ (si legge «emme punto»).

Il moto è in **regime stazionario** quando velocità, pressione e densità misurate in un punto fisso non cambiano nel tempo. Da una sezione all'altra questi valori possono essere diversi. *A monte* indica la parte del tubo che il fluido attraversa prima, *a valle* quella che attraversa dopo. In una **strozzatura**, cioè un tratto in cui il tubo si restringe, la velocità è maggiore che a monte. Un misuratore fermo a monte e uno fermo nella strozzatura leggono quindi due velocità diverse, ciascuna costante nel tempo. Una stessa particella di fluido accelera passando dal primo al secondo, anche se il regime è stazionario.
:::

:::esempio{titolo="Volume da un grafico portata-tempo"}
Una pompa trasferisce $4\,\mathrm{L/s}$ per $10\,\mathrm s$, poi $2\,\mathrm{L/s}$ per $5\,\mathrm s$. A portata costante il volume è portata per durata, che nel grafico portata-tempo è l'area di un rettangolo:
$$
\Delta V_1=(4\cdot10)\,\mathrm L=40\,\mathrm L,\qquad \Delta V_2=(2\cdot5)\,\mathrm L=10\,\mathrm L.
$$
In tutto transitano $50\,\mathrm L$ in $15\,\mathrm s$, perciò la portata media nei quindici secondi è
$$
Q_m=\frac{50\,\mathrm L}{15\,\mathrm s}\simeq3{,}33\,\mathrm{L/s}.
$$
Il simbolo $\simeq$ significa «circa uguale». La media semplice dei due valori, $\dfrac{4+2}{2}\,\mathrm{L/s}=3\,\mathrm{L/s}$, sarebbe valida solo se le due durate fossero uguali.

Anche quando la portata cambia nel tempo, il volume trasferito è l'area fra il grafico e l'asse dei tempi. Se la portata ha un segno, per esempio positivo quando il fluido entra in una vasca e negativo quando esce, l'area sotto l'asse dei tempi si conta con il segno meno. La somma delle aree con il loro segno è il volume netto entrato.

::grafico{linee="0,4 10,4;10,2 15,2" area="4;0;0;10|2;0;10;15" xmin=0 xmax=17 ymin=0 ymax=5.3 nomi="t (s),Q (L/s)" titolo="I rettangoli hanno aree pari ai volumi trasferiti nei due intervalli"}
:::

:::esempio{titolo="Quale velocità attraversa la superficie?"}
La velocità è un vettore: ha un modulo (quanto è grande), una direzione e un verso. La **normale** a una superficie è la direzione perpendicolare alla superficie. Per dare un segno alla portata si sceglie un verso sulla normale, e la portata è positiva se il fluido attraversa la superficie in quel verso.

Se la velocità è uniforme e forma un angolo $\theta$ (lettera greca *theta*) con la normale, la sua componente lungo la normale è $v\cos\theta$. Il coseno $\cos\theta$ è il fattore che trasforma il modulo di un vettore nella sua componente lungo una retta inclinata di $\theta$; per esempio $\cos60^\circ=0{,}5$ e $\cos90^\circ=0$. La componente parallela alla superficie fa scorrere il fluido lungo di essa, senza attraversarla. Il volume orientato che attraversa la superficie in un secondo è quindi
$$
Q=Av\cos\theta.
$$
Con $A=0{,}015\,\mathrm{m^2}$, $v=4\,\mathrm{m/s}$ e $\theta=60^\circ$, la componente normale è $(4\cdot0{,}5)\,\mathrm{m/s}=2\,\mathrm{m/s}$ e
$$
Q=(0{,}015\cdot2)\,\mathrm{m^3/s}=0{,}030\,\mathrm{m^3/s}.
$$
Con lo stesso modulo della velocità, un flusso parallelo alla superficie ha $\theta=90^\circ$ e $\cos90^\circ=0$, quindi portata nulla. Cambiando il verso scelto per la normale, il risultato cambia segno.

::grafico{assi=0 uguale=1 linee="0,-.85 0,4.2" vettori="-2,0,0,0,v_n;-2,0,0,3.4641,v" curve="-2+.78*cos(t),.78*sin(t),0,1.047198" etichette="-0.91,0.62,60°;0.25,2.6,sezione" xmin=-2.8 xmax=2.0 ymin=-.9 ymax=4.4 titolo="La freccia orizzontale rappresenta la componente normale che determina la portata."}
:::

## Continuità

:::teorema{#continuita titolo="Conservazione della massa"}
Si considera il fluido contenuto nel tratto di tubo fra due sezioni. In un certo intervallo di tempo la sua massa varia di quanto ne entra meno quanto ne esce. In regime stazionario la massa nel tratto resta la stessa. Se il tubo non ha perdite (fughe) e non ha diramazioni, la massa che entra in un secondo è quindi uguale a quella che esce, cioè le due portate massiche coincidono. Poiché $\dot m=\rho Q=\rho Av$, si ha
$$
\rho_1 A_1 v_1=\rho_2A_2v_2,
$$
dove gli indici 1 e 2 indicano le due sezioni.

Un fluido è **incomprimibile** quando la sua densità non cambia; i liquidi si trattano come incomprimibili. Per un liquido incomprimibile vale $\rho_1=\rho_2$, perciò la densità si semplifica e si conserva anche la portata volumetrica:
$$
A_1v_1=A_2v_2.
$$
Dove la sezione è più piccola, la velocità media è quindi più grande. Una sezione circolare di raggio $r$ ha area $A=\pi r^2$. Dimezzando il raggio l'area diventa $\pi\left(\dfrac r2\right)^2=\dfrac{\pi r^2}{4}$, cioè un quarto. Alla stessa portata la velocità media quadruplica. La densità di un gas invece può cambiare da una sezione all'altra; in quel caso la relazione vincola la portata massica e la portata volumetrica cambia.

In una **biforcazione** (o diramazione) un tubo si divide in più rami. Se il tratto non accumula massa, la portata massica in ingresso è uguale alla somma delle portate massiche in uscita. Con lo stesso liquido incomprimibile in tutti i rami si sommano direttamente le portate volumetriche, per esempio $Q_1=Q_2+Q_3$ con un ramo entrante e due uscenti. La continuità fissa soltanto la somma delle portate uscenti. La divisione della portata fra i rami dipende dalle pressioni e dalla resistenza che ciascun tubo oppone al moto.
:::

:::esempio{titolo="Una diramazione"}
Arrivano $10\,\mathrm{L/s}$ e il ramo 2 scarica $6\,\mathrm{L/s}$. Poiché non c'è accumulo, il terzo ramo riceve $(10-6)\,\mathrm{L/s}=4\,\mathrm{L/s}$, cioè $0{,}004\,\mathrm{m^3/s}$. Se la sua sezione perpendicolare al moto è $0{,}002\,\mathrm{m^2}$, nel ramo 3 la velocità media vale
$$
v_3=\frac{Q_3}{A_3}=\frac{0{,}004}{0{,}002}\,\mathrm{m/s}=2\,\mathrm{m/s}.
$$
Le velocità nei rami 2 e 3 possono essere diverse, perché il calcolo usa soltanto i dati del ramo 3.

::grafico{assi=0 vettori="-3,0,-.4,0,10;.2,.3,2.7,1.4,6;.2,-.3,2.4,-1.3,4" punti="0,0,pieno" xmin=-4 xmax=4 ymin=-2 ymax=2.5 titolo="Le portate riportate sulle frecce sono in litri al secondo"}
:::

:::esempio{titolo="La densità cambia in una condotta di gas"}
Un gas attraversa una condotta senza rami con portata massica costante. A monte transitano $8\,\mathrm{L/s}$ con densità $1{,}20\,\mathrm{kg/m^3}$, quindi passano
$$
\dot m=\rho_1Q_1=(1{,}20\cdot0{,}008)\,\mathrm{kg/s}=0{,}0096\,\mathrm{kg/s}.
$$
A valle si misura una densità di $0{,}96\,\mathrm{kg/m^3}$. La stessa massa al secondo occupa allora
$$
Q_2=\frac{\dot m}{\rho_2}=\frac{0{,}0096}{0{,}96}\,\mathrm{m^3/s}=0{,}010\,\mathrm{m^3/s}=10\,\mathrm{L/s},
$$
cioè il $25\%$ in più. In un tubo di sezione uniforme, con la stessa area ovunque, aumenta della stessa percentuale anche la velocità media, perché $v=\dfrac QA$. Un confronto fra i soli volumi farebbe pensare a un ingresso di gas. Prima si moltiplicano i volumi al secondo per le rispettive densità. Nel grafico, per $\dfrac{\rho_2}{\rho_1}=0{,}8$ si legge $\dfrac{Q_2}{Q_1}=1{,}25$.

::grafico{f="1/x" punti=".8,1.25,pieno;1,1,pieno" segmenti=".8,0,.8,1.25;0.54,1.25,.8,1.25" etichette=".80,.13,0,8;.70,1.42,1,25" xmin=.54 xmax=1.31 ymin=0 ymax=2.15 nomi="ρ₂/ρ₁,Q₂/Q₁" titolo="A massa al secondo costante la portata volumetrica cresce quando la densità cala."}
:::

## Equazione di Bernoulli

:::teorema{#bernoulli titolo="Energia lungo una linea di corrente"}
In regime stazionario tutte le particelle di fluido che passano per uno stesso punto seguono lo stesso percorso, detto **linea di corrente**. Un fluido è **ideale** quando gli attriti, interni al fluido e con le pareti, sono trascurabili. La **pressione** $p$ è la forza che il fluido esercita su ogni metro quadrato di superficie; si misura in pascal (Pa), e $1\,\mathrm{kPa}=1000\,\mathrm{Pa}$. La lettera $y$ indica la **quota**, cioè l'altezza del punto sopra un livello scelto come zero, e $g\simeq9{,}81\,\mathrm{m/s^2}$ è l'accelerazione di gravità.

Per un fluido ideale incomprimibile in regime stazionario, senza pompe o turbine fra due punti della stessa linea di corrente,
$$
p_1+\frac12\rho v_1^2+\rho gy_1
=
p_2+\frac12\rho v_2^2+\rho gy_2 .
$$
Ciascun termine è un'energia per unità di volume, cioè un'energia riferita a un metro cubo di fluido:
- $\dfrac12\rho v^2$ è l'energia cinetica per unità di volume, perché un volume $V$ ha massa $\rho V$ ed energia cinetica $\dfrac12\rho Vv^2$;
- $\rho gy$ è l'energia potenziale gravitazionale per unità di volume, cioè $mgy=\rho Vgy$ divisa per $V$;
- $p$ si misura in pascal, e $1\,\mathrm{Pa}=1\,\dfrac{\mathrm N}{\mathrm{m^2}}=1\,\dfrac{\mathrm{N\cdot m}}{\mathrm{m^3}}=1\,\dfrac{\mathrm J}{\mathrm{m^3}}$, cioè un joule per metro cubo.

Per ricavare l'equazione si segue un piccolo volume $\Delta V$ di fluido lungo la linea di corrente. All'ingresso il fluido che sta dietro lo spinge e compie su di esso il lavoro $p_1\Delta V$. All'uscita il volume spinge il fluido a valle e compie il lavoro $p_2\Delta V$. Il lavoro netto $(p_1-p_2)\Delta V$ è uguale alla variazione dell'energia cinetica più la variazione dell'energia potenziale gravitazionale del volume:
$$
(p_1-p_2)\Delta V=\frac12\rho\Delta V\,(v_2^2-v_1^2)+\rho\Delta V\,g(y_2-y_1).
$$
Dividendo per $\Delta V$ e portando in ciascun membro i termini dello stesso punto si ottiene l'equazione.

La pressione **assoluta** è misurata rispetto al vuoto. La pressione **relativa** è la pressione assoluta meno la pressione atmosferica, circa $101\,\mathrm{kPa}$, ed è quella che legge un manometro. Nell'equazione si possono usare pressioni assolute oppure relative, purché nello stesso modo nei due punti, perché la pressione atmosferica compare allora in entrambi i membri e si cancella.

Dall'equazione seguono due casi semplici:
- a parità di velocità, un aumento di quota riduce la pressione;
- a parità di quota, un aumento di velocità riduce la pressione nel modello ideale.

Il prodotto $\rho g$ si chiama **peso specifico**. Per l'acqua, con $\rho=1000\,\mathrm{kg/m^3}$ e $g=10\,\mathrm{m/s^2}$, vale $10\,\mathrm{kPa/m}$, quindi ogni metro di salita toglie $10\,\mathrm{kPa}$ alla pressione. Nei casi con quota e velocità che cambiano insieme si calcolano i due contributi separatamente, ciascuno con il suo segno, e poi si sommano. Una pompa fornisce energia al fluido e una turbina ne preleva, perciò con una di queste macchine fra i due punti il teorema non si applica.
:::

:::esempio{titolo="Termini di segno opposto"}
L’acqua va da quota $y_1$ a quota $y_1+1\,\mathrm m$. La velocità cala da $6$ a $2\,\mathrm{m/s}$. Con $\rho=1000\,\mathrm{kg/m^3}$ e $g=10\,\mathrm{m/s^2}$ si calcolano i due contributi:
$$
\frac12\rho(v_1^2-v_2^2)=\frac12\cdot1000\cdot(36-4)\,\mathrm{Pa}=16000\,\mathrm{Pa},
$$
$$
\rho g(y_2-y_1)=1000\cdot10\cdot1\,\mathrm{Pa}=10000\,\mathrm{Pa}.
$$
Il rallentamento aumenta la pressione di $16000\,\mathrm{Pa}$, mentre la salita la riduce di $10000\,\mathrm{Pa}$. Perciò
$$
p_2-p_1=(16000-10000)\,\mathrm{Pa}=6000\,\mathrm{Pa}.
$$
Poiché il saldo è positivo, una sezione più alta può avere pressione maggiore, se il calo di velocità è sufficiente.
:::

:::osservazione{titolo="Separare i contributi prima di sommarli"}
Si prende come quota zero la prima sezione, quindi il suo termine gravitazionale è zero. La seconda sezione ha un termine gravitazionale di $(1000\cdot10\cdot1)\,\mathrm{Pa}=10\,\mathrm{kPa}$. I termini cinetici sono $\dfrac12\cdot1000\cdot6^2\,\mathrm{Pa}=18\,\mathrm{kPa}$ e $\dfrac12\cdot1000\cdot2^2\,\mathrm{Pa}=2\,\mathrm{kPa}$. La variazione della pressione è il saldo fra i $(18-2)\,\mathrm{kPa}=16\,\mathrm{kPa}$ resi disponibili dal rallentamento e i $10\,\mathrm{kPa}$ richiesti dalla salita, come mostrano le tre barre del grafico. Con velocità uguali resterebbe la legge della pressione nei fluidi fermi (legge di Stevino), $p_1-p_2=\rho g(y_2-y_1)$. Con pressioni uguali nei due punti, invece, la diminuzione del termine cinetico sarebbe uguale all'aumento del termine gravitazionale.

::grafico{assi=0 linee=".22,0 3.8,0" poligoni=".62,0 1.38,0 1.38,16 .62,16;1.62,0 2.38,0 2.38,-10 1.62,-10;2.62,0 3.38,0 3.38,6 2.62,6" etichette=".72,18,+16 kPa;1.72,-12.2,−10 kPa;2.72,8,+6 kPa;.58,-2.5,velocità;1.76,2.6,quota;2.64,-2.5,saldo" xmin=.1 xmax=3.85 ymin=-14.5 ymax=21 titolo="Il rallentamento e la salita portano contributi opposti alla variazione di pressione."}
:::

:::esempio{titolo="Due prese di pressione a confronto"}
Una **presa di pressione** è un foro collegato a un manometro. Una presa laterale, a filo della parete, misura la **pressione statica** $p$, cioè la pressione del fluido che scorre. Un piccolo tubo rivolto contro la corrente ferma il fluido alla sua imboccatura, nel punto di **ristagno**, dove la pressione è $p_0$.

In un tratto rettilineo, dove le linee di corrente sono quasi parallele, la presa laterale dà la pressione statica del punto misurato alla stessa quota. Se fra quel punto e il punto di ristagno le perdite sono trascurabili, Bernoulli con velocità finale zero e quote uguali dà
$$
p_0-p=\frac12\rho v^2.
$$
Con acqua di densità $1000\,\mathrm{kg/m^3}$ e differenza $8\,\mathrm{kPa}$ si ricava
$$
v=\sqrt{\frac{2(p_0-p)}{\rho}}=\sqrt{\frac{2\cdot8000}{1000}}\,\mathrm{m/s}=4\,\mathrm{m/s}.
$$
Per dedurre la portata servono anche l'area della sezione e la velocità media, che può essere diversa. Nel moto laminare in un tubo, per esempio, la velocità al centro è il doppio della media.
:::

## Effetto Venturi

:::osservazione{#venturi titolo="Restringimenti e pressione"}
Un **tubo di Venturi** è un tubo con una strozzatura, chiamata **gola**. Si considera un tubo orizzontale con un fluido ideale e incomprimibile. Nella gola l'area è minore, quindi per la continuità la velocità è maggiore. Le quote sono uguali, perciò per Bernoulli la pressione nella gola è minore. Dalla continuità $A_1v_1=A_2v_2$ si ricava $v_2=\dfrac{A_1}{A_2}v_1$. Sostituendo nel bilancio $p_1-p_2=\dfrac12\rho\left(v_2^2-v_1^2\right)$ e raccogliendo $v_1^2$ si ottiene
$$
p_1-p_2=\frac12\rho v_1^2\left[\left(\frac{A_1}{A_2}\right)^2-1\right].
$$
Se le aree restano fissate, la caduta di pressione $p_1-p_2$ è proporzionale al quadrato della velocità d'ingresso; per esempio, se $v_1$ raddoppia, la caduta diventa quattro volte più grande. Viceversa, noti la differenza di pressione e il rapporto delle aree, si ricava $v_1^2$, poi $v_1$ con la radice quadrata e infine la portata $Q=A_1v_1$.

Dopo la gola il tubo si riallarga, la velocità diminuisce e la pressione statica risale; si dice che la pressione si **recupera**. In un fluido reale una parte dell'energia meccanica si trasforma in calore a causa degli attriti (**dissipazione**), quindi la pressione recuperata è minore di quella prevista dal modello ideale. Il confronto fra due velocità non basta a stabilire quale pressione è maggiore se:
- le quote dei punti sono diverse;
- fra i due punti c'è una macchina, come una pompa;
- i punti stanno su linee di corrente con energie diverse.
:::

:::esempio{titolo="Portata da una differenza di pressione"}
In un Venturi orizzontale ideale l’area d’ingresso è doppia rispetto alla gola, quindi $\dfrac{A_1}{A_2}=2$ e la formula dà
$$
p_1-p_2=\frac12\rho v_1^2\left(2^2-1\right)=\frac32\rho v_1^2.
$$
Con acqua di densità $1000\,\mathrm{kg/m^3}$ e $p_1-p_2=6000\,\mathrm{Pa}$, il quadrato della velocità d’ingresso vale
$$
v_1^2=\frac{2\cdot6000}{1000\cdot3}\,\mathrm{m^2/s^2}=4\,\mathrm{m^2/s^2}.
$$
Quindi $v_1=2\,\mathrm{m/s}$ e, poiché la gola ha metà dell'area, $v_2=4\,\mathrm{m/s}$. Se $A_1=0{,}010\,\mathrm{m^2}$, la portata è $Q=A_1v_1=(0{,}010\cdot2)\,\mathrm{m^3/s}=0{,}020\,\mathrm{m^3/s}$.

::grafico{assi=0 linee="-4,1.4 -1,1.4 1,1 4,1;-4,-1.4 -1,-1.4 1,-1 4,-1" vettori="-3.3,0,-1.9,0,v_1;1,0,3.8,0,v_2" xmin=-4.5 xmax=4.7 ymin=-2.2 ymax=2.3 titolo="La gola ha metà dell’area e velocità media doppia"}
:::

:::esempio{titolo="Leggere una taratura del Venturi"}
La **taratura** è la tabella che collega la lettura dello strumento, qui la differenza di pressione, alla grandezza cercata. Per la geometria dell'esempio precedente valgono $\Delta p=\dfrac32\rho v_1^2$, $v_2=2v_1$ e $Q=A_1v_1$.

| $\Delta p$ (kPa) | $v_1$ (m/s) | $v_2$ (m/s) | $Q$ (L/s) |
| ---: | ---: | ---: | ---: |
| 1,5 | 1 | 2 | 10 |
| 6 | 2 | 4 | 20 |
| 13,5 | 3 | 6 | 30 |

Se la lettura passa da $1{,}5$ a $6\,\mathrm{kPa}$ la differenza quadruplica e la portata raddoppia, perché $\Delta p$ è proporzionale al quadrato di $Q$. Una lettura di $13{,}5\,\mathrm{kPa}$, nove volte la prima, indica invece una portata tripla rispetto alla prima. La parabola del grafico parte dall'origine perché, nel modello orizzontale ideale, a fluido fermo le due pressioni alla stessa quota sono uguali.

Un secondo confronto usa due prese alla stessa quota e in due sezioni con la stessa area, una prima della strozzatura e l'altra dopo il riallargamento. In regime stazionario, per la continuità, le velocità medie nelle due sezioni coincidono. In assenza di pompe, la differenza di pressione che resta fra le due prese misura quindi l'energia meccanica persa per unità di volume.

::grafico{f=".015*x^2" punti="10,1.5,pieno;20,6,pieno;30,13.5,pieno" segmenti="20,0,20,6;0,6,20,6;30,0,30,13.5;0,13.5,30,13.5" xmin=0 xmax=33 ymin=0 ymax=16.5 nomi="Q (L/s),Δp (kPa)" titolo="Con area e densità fissate la differenza di pressione segue il quadrato della portata."}
:::

## La legge di Torricelli

:::teorema{#torricelli titolo="Velocità di efflusso da un serbatoio"}
Un serbatoio aperto, cioè a contatto con l'aria, scarica da un piccolo foro a profondità $h$ sotto la superficie libera del liquido, detta anche **pelo libero**. L'**efflusso** è l'uscita del liquido dal foro, e il **getto** è il liquido appena uscito. Si fanno queste ipotesi:
- la superficie è molto più grande del foro e il livello scende lentamente, quindi la velocità della superficie è trascurabile rispetto a quella del getto;
- la superficie e il getto appena uscito sono entrambi alla pressione atmosferica.

Si applica Bernoulli fra un punto della superficie, con velocità zero e quota $h$ sopra il foro, e un punto del getto, con velocità $v$ e quota zero. Le pressioni sono uguali e si cancellano, perciò resta
$$
\rho gh=\frac12\rho v^2,\qquad v=\sqrt{2gh}.
$$
Con queste ipotesi la portata è $Q=Av$, dove $A$ è l'**area efficace** del getto, cioè l'area della sezione del getto appena fuori dal foro. Se la pressione sulla superficie $p_{\mathrm s}$ è diversa dalla pressione allo sbocco $p_{\mathrm u}$, al bilancio per unità di massa si aggiunge il termine $\dfrac{p_{\mathrm s}-p_{\mathrm u}}{\rho}$:
$$
\frac{v^2}{2}=gh+\frac{p_{\mathrm s}-p_{\mathrm u}}{\rho}.
$$
Se le due aree fossero confrontabili, anche la velocità della superficie andrebbe inclusa nel bilancio, ricavandola dalla continuità $A_{\mathrm s}v_{\mathrm s}=Av$.

Quando il serbatoio si svuota, il livello scende e la profondità del foro diminuisce. Ne segue che la velocità e la portata calano. Se si usa la portata iniziale per tutto lo svuotamento, si ottiene un volume uscito troppo grande in un tempo dato, oppure un tempo troppo breve per far uscire un dato volume. Nella realtà il getto si restringe appena uscito (**contrazione** del getto) e gli attriti dissipano energia. Per questi motivi la portata è minore del prodotto fra velocità ideale e area geometrica del foro; si usa allora l'area efficace oppure un **coefficiente di efflusso**, un numero minore di 1 che moltiplica la portata ideale.
:::

:::esempio{titolo="Modifica della profondità"}
Con $g=10\,\mathrm{m/s^2}$, a profondità $0{,}80\,\mathrm m$ il modulo ideale della velocità vale
$$
v=\sqrt{2\cdot10\cdot0{,}80}\,\mathrm{m/s}=\sqrt{16}\,\mathrm{m/s}=4\,\mathrm{m/s}.
$$
Se il livello scende lasciando il foro a profondità $0{,}20\,\mathrm m$, la profondità diventa un quarto. La velocità diventa $\sqrt{2\cdot10\cdot0{,}20}\,\mathrm{m/s}=\sqrt4\,\mathrm{m/s}=2\,\mathrm{m/s}$, cioè la metà, perché $\sqrt{\dfrac14}=\dfrac12$. A foro fisso anche la portata si dimezza. La velocità è proporzionale alla radice quadrata della profondità, quindi il grafico è una curva che sale sempre più lentamente.

::grafico{f="sqrt(20*x)" punti=".2,2,pieno;0.8,4,pieno" xmin=0 xmax=1 ymin=0 ymax=5 nomi="h (m),v (m/s)" titolo="La profondità determina la velocità di efflusso nel modello ideale"}
:::

:::esempio{titolo="Un serbatoio chiuso scarica all'aria"}
In un serbatoio chiuso il gas sopra il liquido può avere una pressione $p_{\mathrm s}$ diversa da quella atmosferica $p_{\mathrm u}$ che agisce sul getto. Con una superficie libera molto più ampia del foro, il bilancio moltiplicato per due dà
$$
v^2=2gh+\frac{2(p_{\mathrm s}-p_{\mathrm u})}{\rho}.
$$
Per acqua con $\rho=1000\,\mathrm{kg/m^3}$, $h=0{,}45\,\mathrm m$ e $g=10\,\mathrm{m/s^2}$, a pressioni uguali si ha $v^2=(2\cdot10\cdot0{,}45)\,\mathrm{m^2/s^2}=9\,\mathrm{m^2/s^2}$, quindi lo sbocco darebbe $3\,\mathrm{m/s}$. Una sovrapressione di $3500\,\mathrm{Pa}$ sulla superficie, cioè una pressione di $3500\,\mathrm{Pa}$ più alta che allo sbocco, aggiunge $\dfrac{2\cdot3500}{1000}\,\mathrm{m^2/s^2}=7\,\mathrm{m^2/s^2}$ ai $9\,\mathrm{m^2/s^2}$ forniti dalla profondità. In tutto $v^2=16\,\mathrm{m^2/s^2}$, e la velocità sale a $4\,\mathrm{m/s}$. Se la superficie fosse invece a pressione inferiore rispetto all'uscita, il contributo della pressione sarebbe negativo. Il liquido esce dal foro in quel verso solo se il valore calcolato di $v^2$ è positivo.

::grafico{assi=0 linee="-2,0 -2,3.6 1.5,3.6 1.5,.8;-2,0 1.5,0 1.5,.42;-2,2.37 1.5,2.37" poligoni="-2,0 1.5,0 1.5,2.37 -2,2.37" segmenti="1.5,2.37,2.12,2.37;1.5,.61,2.12,.61;2.06,2.37,2.06,.61" vettori="1.53,.61,3.26,.61,v" etichette="-.40,2.88,pₛ;2.67,1.0,pᵤ;2.19,1.52,h" xmin=-2.3 xmax=3.5 ymin=-.36 ymax=3.91 titolo="Per lo sbocco si confrontano la profondità del foro e le pressioni sulla superficie e sul getto."}
:::

## Viscosità e moto reale

:::osservazione{#viscosita titolo="Resistenza al moto e regime laminare"}
La **viscosità** è l'attrito interno di un fluido, per cui due strati vicini che scorrono a velocità diverse si frenano a vicenda. La **viscosità dinamica** $\eta$ (lettera greca *eta*) misura la resistenza allo scorrimento relativo degli strati del fluido e si misura in pascal secondo, $\mathrm{Pa\cdot s}$. Un fluido è **newtoniano** quando la sua viscosità non dipende da quanto rapidamente scorrono gli strati, come l'acqua, l'olio e l'aria. Il moto è **laminare** quando il fluido scorre a strati ordinati, senza vortici, ed è **turbolento** quando si formano vortici e il moto diventa irregolare.

Si considera un fluido newtoniano incomprimibile in moto laminare stazionario in un lungo tubo cilindrico, abbastanza lungo da avere lo stesso profilo di velocità in ogni sezione (moto **completamente sviluppato**). In queste ipotesi vale la **legge di Poiseuille**
$$
Q=\frac{\pi r^4\Delta p}{8\eta L},
$$
dove $r$ è il raggio del tubo, $L$ la sua lunghezza e $\Delta p$ la differenza di pressione fra i due estremi.

La differenza di pressione è necessaria anche a velocità media e quota costanti, perché fornisce l'energia che la viscosità dissipa, cioè trasforma in calore. Il profilo della velocità lungo l'asse del tubo è una parabola, massima al centro e nulla alla parete, perché il fluido aderisce alla parete ferma e non scivola su di essa. La velocità massima è il doppio della velocità media sulla sezione. A differenza di pressione fissata, raddoppiando il raggio la portata diventa $2^4=16$ volte più grande, se il flusso resta laminare.

Una piccola sfera di raggio $r$ si muove lentamente in un fluido newtoniano, lontano dalle pareti. La **velocità relativa** è la velocità della sfera meno quella del fluido; per esempio, una sfera a $0{,}020\,\mathrm{m/s}$ verso destra in un liquido a $0{,}005\,\mathrm{m/s}$ verso destra ha velocità relativa $0{,}015\,\mathrm{m/s}$ verso destra. La resistenza del fluido, detta **resistenza di Stokes**, ha modulo
$$
F_v=6\pi\eta rv,
$$
dove $v$ è il modulo della velocità relativa, ed è diretta in verso opposto alla velocità relativa fra sfera e fluido.

La relazione richiede un numero di Reynolds molto piccolo. Il **numero di Reynolds** confronta l'inerzia del fluido con la sua viscosità:
$$
\mathrm{Re}=\frac{\rho vD}{\eta},
$$
dove $D$ è il diametro del tubo, con la velocità media, oppure il diametro della sfera, secondo il problema. È un numero puro, senza unità di misura. In un tubo rettilineo il moto è laminare per valori di $\mathrm{Re}$ fino a circa $2000$; per valori molto maggiori diventa turbolento.

La **velocità limite** $v_\ell$ di una sfera che cade è la velocità costante raggiunta quando la somma della resistenza e della spinta di Archimede, la forza verso l'alto uguale al peso del fluido spostato, uguaglia il peso. Da quel momento la forza risultante è zero e l'accelerazione è nulla. Per una sfera di densità $\rho_{\mathrm s}$ e volume $\dfrac43\pi r^3$, in un fluido di densità $\rho$, l'uguaglianza
$$
6\pi\eta rv_\ell=(\rho_{\mathrm s}-\rho)\frac43\pi r^3g
$$
dà $v_\ell=\dfrac{2(\rho_{\mathrm s}-\rho)gr^2}{9\eta}$. Un oggetto meno denso del fluido sale, quindi la sua velocità limite è verso l’alto e la resistenza è verso il basso, opposta alla risalita.
:::

:::esempio{titolo="Stesso fluido e tubo più lungo"}
Un tubo è sostituito da uno della stessa sezione, ma lungo il triplo. Nella legge di Poiseuille $L$ sta al denominatore, quindi la portata è inversamente proporzionale alla lunghezza. A parità di viscosità e differenza di pressione, se rimane valido Poiseuille, la portata si riduce a un terzo. Per mantenere invece la portata precedente, la caduta di pressione deve triplicare. Cambiare il raggio avrebbe un effetto più forte, perché il raggio compare elevato alla quarta.

Il grafico mostra il profilo laminare. In orizzontale c'è la distanza dall'asse divisa per il raggio $R$ del tubo, in verticale la velocità divisa per la velocità massima; il valore è 1 sull'asse e zero alle pareti.

::grafico{curve="t,1-t^2,-1,1" punti="0,1,pieno;1,0,pieno;-1,0,pieno" xmin=-1.25 xmax=1.25 ymin=-.16 ymax=1.25 nomi="r/R,v/v_max" titolo="Nel profilo laminare normalizzato la velocità vale zero alle pareti"}
:::

:::esempio{titolo="Mantenere la portata in un tubo più stretto"}
Dalla legge di Poiseuille si ricava $\Delta p=\dfrac{8\eta LQ}{\pi r^4}$. A portata, viscosità e lunghezza fissate, la caduta di pressione richiesta è quindi proporzionale a $\dfrac1{r^4}$. Se il nuovo raggio è $0{,}80$ volte quello iniziale, serve un salto di pressione pari a
$$
\frac{1}{0{,}80^4}=\frac{1}{0{,}4096}\simeq2{,}44
$$
volte il precedente. Con lo stesso salto iniziale passerebbe invece la frazione $0{,}80^4\simeq0{,}41$, cioè circa il $41\%$ della portata precedente. Se si alza la pressione per mantenere la portata, la velocità media aumenta, perché $v=\dfrac{Q}{\pi r^2}$ è proporzionale a $\dfrac1{r^2}$. Nel numero di Reynolds $\dfrac{\rho vD}{\eta}$ la velocità è proporzionale a $\dfrac1{r^2}$ e il diametro $D=2r$ è proporzionale a $r$, quindi $\mathrm{Re}$ è proporzionale a $\dfrac1r$. Poiché $\dfrac1{0{,}80}=1{,}25$, il numero di Reynolds cresce del $25\%$. Prima di usare la legge nel nuovo tubo si controlla quindi che il moto rimanga laminare.

Due tratti di tubo sono **in serie** quando sono collegati uno dopo l'altro, quindi li attraversa la stessa portata. Le loro differenze di pressione si sommano. Con raggio e viscosità uguali, la parte di caduta su ciascun tratto è proporzionale alla sua lunghezza.

::grafico{f="1/x^4" punti=".8,2.441406,pieno;1,1,pieno" segmenti=".8,0,.8,2.441406;.6,2.441406,.8,2.441406" etichette=".80,2.95,2,44" xmin=.6 xmax=1.42 ymin=0 ymax=8.2 nomi="r/r₀,Δp/Δp₀" titolo="La pressione necessaria per mantenere la portata aumenta rapidamente quando il raggio diminuisce."}
:::
