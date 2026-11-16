---
titolo: "Fisica per il TOLC-I"
sommario: "Misure, moti, forze, energia, fluidi, calore, onde, ottica ed elettromagnetismo con modelli, esempi e grafici."
---

## Misure, unità e vettori

:::definizione{#misure titolo="Grandezza e unità di misura"}
Una **grandezza fisica** si esprime mediante un valore numerico e un'unità. Nella misura $2\,\mathrm{m}$, il numero indica quante volte la lunghezza contiene l'unità metro. Una conversione cambia il numero e l'unità insieme, lasciando invariata la grandezza. Le unità di base usate in questo capitolo sono metro, chilogrammo, secondo, kelvin e ampere.

Un prefisso rappresenta una potenza di dieci. Poiché $1\,\mathrm{cm}=10^{-2}\,\mathrm{m}$, un centimetro quadrato vale $10^{-4}\,\mathrm{m^2}$ e un centimetro cubo vale $10^{-6}\,\mathrm{m^3}$. L'esponente riguarda anche il fattore di conversione. Inoltre $1\,\mathrm{L}=10^{-3}\,\mathrm{m^3}$; quindi mezzo litro occupa $5\cdot10^{-4}\,\mathrm{m^3}$.
:::

:::esempio{titolo="Una conversione di velocità"}
La velocità $72\,\mathrm{km/h}$ equivale a
$$
72\,\frac{\mathrm{km}}{\mathrm{h}}
=72\,\frac{1000\,\mathrm{m}}{3600\,\mathrm{s}}
=20\,\mathrm{m/s}.
$$
Il rapporto fra lunghezza e tempo conserva la dimensione di una velocità. Una formula che sommasse una velocità a una distanza sarebbe dimensionalmente incoerente, perché le due grandezze hanno unità diverse.
:::

:::definizione{#vettori titolo="Scalari e vettori"}
Massa, temperatura ed energia sono **scalari**. Spostamento, velocità e forza sono vettori, descritti da modulo, direzione e verso. Lungo un asse orientato una componente positiva indica il verso dell'asse; una componente negativa indica quello opposto. Due forze opposte si sommano algebricamente; due componenti perpendicolari $F_x,F_y$ danno modulo $\sqrt{F_x^2+F_y^2}$. Il prodotto scalare $\vec F\cdot\vec s=Fs\cos\theta$ misura quanto la forza agisce nella direzione dello spostamento e servirà nel lavoro.
:::

:::osservazione
Una misura ripetuta presenta in genere una dispersione. La media riduce l'effetto delle fluttuazioni casuali, mentre un errore di taratura può spostare tutte le letture nello stesso verso. Un valore $L=(12{,}0\pm0{,}2)\,\mathrm{cm}$ ha incertezza relativa $\dfrac{0{,}2}{12{,}0}$, circa $1{,}7\%$. Le cifre decimali esprimono la precisione della misura; aggiungere zeri senza una nuova informazione sperimentale non la aumenta.
:::

## Posizione, velocità e accelerazione

:::definizione{#cinematica titolo="Spostamento e velocità media"}
Scelti un'origine e un asse, $x(t)$ indica la posizione all'istante $t$. Fra due istanti lo **spostamento** è $\Delta x=x_f-x_i$ e la velocità media è $v_m=\dfrac{\Delta x}{\Delta t}$. La distanza percorsa somma invece le lunghezze dei tratti, indipendentemente dal verso. Chi compie un giro e torna alla partenza ha spostamento nullo, anche se ha percorso una distanza positiva.

Nel grafico posizione-tempo, la pendenza del segmento che unisce due punti dà la velocità media. Una retta crescente descrive velocità positiva costante; una retta orizzontale descrive un corpo fermo. Un'intersezione fra due grafici di posizione indica che i corpi occupano lo stesso punto nello stesso istante.
:::

:::teorema{#moto-uniformemente-accelerato titolo="Moto con accelerazione costante"}
L'accelerazione media misura la variazione di velocità nell'unità di tempo. Se l'accelerazione $a$ è costante e $t=0$ è l'istante iniziale, allora
$$
v=v_0+at,\qquad x=x_0+v_0t+\frac12at^2.
$$
Eliminando il tempo si ottiene $v^2-v_0^2=2a(x-x_0)$. Le grandezze sono componenti lungo lo stesso asse, quindi i segni hanno significato fisico. Una velocità positiva con accelerazione negativa descrive inizialmente un rallentamento; dopo l'eventuale arresto il corpo può muoversi nel verso negativo.
:::

:::esempio{titolo="Dal grafico velocità-tempo alla distanza"}
Un corpo parte da fermo e ha accelerazione $2\,\mathrm{m/s^2}$ per $3\,\mathrm{s}$. La velocità finale è $6\,\mathrm{m/s}$. Lo spostamento è l'area del triangolo sotto il grafico, quindi $\dfrac12\cdot3\cdot6=9\,\mathrm{m}$. La velocità finale moltiplicata per tutto il tempo darebbe il doppio, perché il corpo raggiunge quel valore soltanto alla fine.

::grafico{f="2*x" xmin=0 xmax=3.5 ymin=0 ymax=7 nomi="t,v" area="2*x;0;0;3" punti="3,6,pieno" legenda="v=2t" titolo="Tempo in secondi, velocità in m/s: l’area è lo spostamento di 9 m"}
:::

:::osservazione
Nella caduta libera vicino alla superficie terrestre, trascurando l'aria, l'accelerazione ha modulo $g$ ed è diretta verso il basso. Con asse positivo verso l'alto si scrive $a=-g$. Nel punto più alto di un lancio verticale la velocità è zero per un istante, mentre l'accelerazione resta $-g$. L'annullarsi della velocità e l'annullarsi dell'accelerazione descrivono perciò condizioni diverse.
:::

## Forze, equilibrio e moto circolare

:::teorema{#dinamica titolo="Le leggi di Newton"}
In un riferimento inerziale, una risultante nulla mantiene costante la velocità del corpo. Per una massa $m$ costante, la **seconda legge di Newton** è $\sum\vec F=m\vec a$. Si sommano tutte le forze che agiscono sul corpo scelto, quindi si risolve lungo ciascun asse. Una cassa tirata con $18\,\mathrm{N}$ e frenata da $6\,\mathrm{N}$ di attrito riceve una risultante di $12\,\mathrm{N}$, non di $18\,\mathrm{N}$.

Le forze di azione e reazione hanno uguale modulo e versi opposti, ma agiscono su corpi diversi. Il peso di un libro e la forza del tavolo sul libro possono equilibrarsi; la reazione al peso è invece la forza gravitazionale del libro sulla Terra.
:::

:::definizione{#forze-usuali titolo="Peso, elasticità e attrito"}
Il peso vicino alla superficie terrestre è $P=mg$; la massa resta la stessa se cambia $g$. Una molla ideale allungata di $x$ esercita forza di richiamo di modulo $k|x|$, dove $k$ è la costante elastica. La reazione normale $N$ è perpendicolare alla superficie di contatto.

L'attrito statico si adatta fino al limite $F_s\leq\mu_sN$. Se una spinta di $8\,\mathrm{N}$ lascia il corpo fermo, l'attrito vale $8\,\mathrm{N}$ anche quando il limite è maggiore. Durante lo scorrimento il modello di attrito dinamico dà $F_d=\mu_dN$, opposto alla velocità relativa. Un corpo esteso è in equilibrio quando sono nulle sia la risultante sia la somma dei momenti. Il momento di una forza rispetto a un punto ha modulo $Fb$, con $b$ distanza perpendicolare della retta d'azione.
:::

:::definizione{#moto-circolare titolo="Accelerazione centripeta"}
Un corpo in moto circolare uniforme mantiene la rapidità $v$, mentre cambia continuamente la direzione della velocità. Per raggio $r$ e periodo $T$, cioè tempo di un giro,
$$
v=\frac{2\pi r}{T},\qquad f=\frac1T,\qquad a_c=\frac{v^2}{r}.
$$
L'accelerazione è diretta verso il centro. La forza centripeta è il nome della risultante radiale richiesta dal moto, pari a $\dfrac{mv^2}{r}$; può essere fornita dalla tensione di un filo, dall'attrito o dalla gravitazione. Nel grafico seguente velocità e accelerazione sono perpendicolari.

::grafico{curve="2*cos(t),2*sin(t),0,6.283185" xmin=-3 xmax=4 ymin=-3 ymax=4 uguale=1 vettori="2,0,2,2,v;2,0,0.5,0,a" punti="2,0,pieno,P" legenda="x^2+y^2=4" titolo="Nel punto P la velocità v è tangente e l'accelerazione a è centripeta"}
:::

## Lavoro, energia e quantità di moto

:::definizione{#energia titolo="Lavoro ed energia cinetica"}
Per una forza costante, il **lavoro** sullo spostamento $s$ è $W=Fs\cos\theta$. Se forza e spostamento sono concordi il lavoro è positivo; se sono opposti è negativo; se sono perpendicolari è nullo. Il joule equivale a un newton moltiplicato per un metro, $1\,\mathrm{J}=1\,\mathrm{N}\,\mathrm{m}$. Una forza di $10\,\mathrm{N}$ inclinata di $60^\circ$ rispetto a uno spostamento di $4\,\mathrm{m}$ compie $20\,\mathrm{J}$, perché la componente utile è $5\,\mathrm{N}$.

L'energia cinetica di un corpo di massa $m$ e rapidità $v$ è $K=\dfrac12mv^2$. Il lavoro della risultante soddisfa $W_{\mathrm{tot}}=K_f-K_i$. Un lavoro totale negativo riduce l'energia cinetica, ma il suo valore finale resta non negativo. La potenza media è $P=\dfrac W{\Delta t}$ e si misura in watt, cioè joule al secondo.
:::

:::teorema{#conservazione-energia titolo="Energia meccanica"}
Vicino alla superficie terrestre, l'energia potenziale gravitazionale rispetto a una quota di riferimento è $U_g=mgh$. Per una molla ideale vale $U_e=\dfrac12kx^2$. Se le forze non conservative compiono lavoro nullo, l'energia meccanica $K+U$ si conserva. Un corpo che parte da fermo e scende senza attrito di $h$ soddisfa
$$
mgh=\frac12mv^2,\qquad v=\sqrt{2gh}.
$$
La massa si semplifica; il risultato dipende dal dislivello, non dalla lunghezza della guida. Con attrito, la variazione di energia meccanica coincide con il lavoro delle forze non conservative, generalmente negativo nel caso dello scorrimento.
:::

:::definizione{#quantita-di-moto titolo="Impulso e urti"}
La **quantità di moto** è $\vec p=m\vec v$. L'impulso della forza risultante è la variazione di quantità di moto; per una forza costante vale $\vec J=\vec F\Delta t$. Per un sistema con impulso esterno trascurabile si conserva la somma vettoriale delle quantità di moto.

Se due carrelli si agganciano, la velocità comune soddisfa $m_1v_1+m_2v_2=(m_1+m_2)v_f$, con velocità dotate di segno. L'urto è completamente anelastico: una parte dell'energia cinetica si trasforma in altre forme. Conservare la quantità di moto resta corretto anche quando l'energia cinetica diminuisce. Nell'urto elastico si conservano entrambe.
:::

## Fluidi in quiete e in moto

:::definizione{#fluidi titolo="Densità e pressione"}
La densità media è $\rho=\dfrac mV$, con unità $\mathrm{kg/m^3}$. La pressione media su una superficie è $p=\dfrac{F_\perp}{A}$, dove conta la componente normale della forza. Il pascal equivale a $\mathrm{N/m^2}$. A parità di forza, una superficie più piccola riceve pressione maggiore; per questo una punta concentra l'azione meccanica.

In un liquido in quiete, con densità uniforme e accelerazione gravitazionale costante, la **legge di Stevino** dà $p=p_0+\rho gh$, dove $h$ è la profondità sotto la superficie. A parità di pressione sulla superficie, densità e gravità, alla stessa profondità la pressione è uguale anche in recipienti di forma diversa. Nei vasi comunicanti aperti alla stessa pressione, le superfici dello stesso liquido si trovano alla stessa quota.
:::

:::esempio{titolo="Pressione assoluta e aumento di pressione"}
In acqua con $\rho=1000\,\mathrm{kg/m^3}$, a $2\,\mathrm{m}$ sotto la superficie, usando $g=10\,\mathrm{m/s^2}$, l'aumento è $\rho gh=20000\,\mathrm{Pa}$. Con $p_0=100000\,\mathrm{Pa}$, la pressione assoluta è $120000\,\mathrm{Pa}$. Le due risposte riguardano grandezze diverse.

::grafico{f="10*x" xmin=0 xmax=4 ymin=0 ymax=45 nomi="h,Δp" punti="2,20,pieno" legenda="p-p_0=10h" titolo="Profondità h in metri e aumento di pressione Δp in kPa: Δp indica la differenza rispetto alla superficie"}
:::

:::teorema{#archimede titolo="Spinta idrostatica"}
Un corpo immerso riceve una spinta verso l'alto pari al peso del fluido spostato, $F_A=\rho_f gV_{\mathrm{imm}}$. Per un corpo galleggiante in equilibrio, senza altre forze verticali, $F_A=mg$. Se il corpo ha volume $V$ e densità media $\rho_c$, allora $\dfrac{V_{\mathrm{imm}}}{V}=\dfrac{\rho_c}{\rho_f}$. Un corpo con densità pari a metà di quella del liquido galleggia con metà volume immerso. La spinta dipende dal volume immerso, non necessariamente dal volume totale.
:::

:::definizione{#continuita titolo="Portata e continuità"}
La portata volumetrica è $q_v=\dfrac{\Delta V}{\Delta t}=Av$, con $v$ velocità media sulla sezione. Per un liquido incomprimibile in moto stazionario, in una condotta senza perdite di fluido né ramificazioni, $A_1v_1=A_2v_2$. Un restringimento aumenta quindi la velocità media. Un flusso laminare presenta strati ordinati; un flusso turbolento presenta fluttuazioni e mescolamento. La continuità esprime la conservazione della massa e resta distinta dalle relazioni che collegano pressione ed energia del flusso. Un incremento di pressione applicato a un liquido confinato si trasmette al suo interno: è il principio di Pascal. In un torchio ideale con pistoni alla stessa quota vale $\dfrac{F_1}{A_1}=\dfrac{F_2}{A_2}$.
:::

## Temperatura, calore e gas

:::definizione{#calore titolo="Temperatura e trasferimento di energia"}
La temperatura descrive lo stato termico; il **calore** è energia trasferita a causa di una differenza di temperatura. Due corpi in contatto raggiungono l'equilibrio termico quando hanno la stessa temperatura. Lo scambio spontaneo avviene dal corpo più caldo a quello più freddo. Conduzione, convezione e irraggiamento sono tre meccanismi di trasferimento; l'irraggiamento può avvenire anche nel vuoto.

La temperatura assoluta è $T=t_C+273{,}15$, con $T$ in kelvin e $t_C$ in gradi Celsius. Un aumento di $20\,{}^\circ\mathrm{C}$ corrisponde a un aumento di $20\,\mathrm{K}$, perché la costante si elimina nella differenza. Nei rapporti fra temperature dei gas si usano invece i valori assoluti.
:::

:::teorema{#calorimetria titolo="Calore specifico e cambiamenti di stato"}
Senza passaggi di stato, con calore specifico $c$ approssimativamente costante, il calore assorbito è $Q=mc\Delta T$. Il calore specifico indica l'energia necessaria per aumentare di un kelvin la temperatura di un chilogrammo di sostanza. Per $m=0{,}5\,\mathrm{kg}$, $c=4000\,\mathrm{J/(kg\,K)}$ e $\Delta T=3\,\mathrm{K}$, si ottiene $Q=6000\,\mathrm{J}$.

Durante un passaggio di stato in equilibrio a pressione costante, il calore è $Q=mL$, dove $L$ è il calore latente specifico. Finché coesistono acqua e ghiaccio alla pressione atmosferica, il calore di fusione cambia le quantità delle due fasi mantenendo la temperatura circa a $0\,{}^\circ\mathrm{C}$. La dilatazione lineare di un solido, per piccoli intervalli termici, è $\Delta\ell=\alpha\ell_0\Delta T$.
:::

:::teorema{#gas-ideali titolo="Equazione del gas ideale"}
Per una quantità $n$ di gas ideale vale $pV=nRT$, con pressione assoluta e temperatura assoluta. A quantità di gas fissata, due stati soddisfano $\dfrac{p_1V_1}{T_1}=\dfrac{p_2V_2}{T_2}$. Nell'isoterma $pV$ è costante; nell'isocora è costante $\dfrac pT$; nell'isobara è costante $\dfrac VT$. Queste leggi dipendono quindi dalla grandezza mantenuta costante. Un recipiente rigido impedisce la variazione di volume, mentre un pistone mobile può permetterla.
:::

## Bilanci termodinamici

:::teorema{#termodinamica titolo="Primo principio"}
L'energia interna $U$ comprende l'energia microscopica del sistema. Con $Q$ positivo quando il sistema assorbe calore e $W$ positivo quando compie lavoro sull'esterno, il **primo principio** si scrive
$$
\Delta U=Q-W.
$$
Una compressione riceve lavoro dall'esterno e ha $W<0$. Un gas che assorbe $500\,\mathrm{J}$ e compie $200\,\mathrm{J}$ di lavoro aumenta perciò la propria energia interna di $300\,\mathrm{J}$. Il calore e il lavoro descrivono scambi di energia; l'energia interna descrive invece una proprietà dello stato.
:::

:::esempio{titolo="Trasformazioni riconosciute dai vincoli"}
In un recipiente rigido il lavoro di espansione è nullo, quindi $\Delta U=Q$. In una trasformazione adiabatica il calore scambiato è nullo, quindi $\Delta U=-W$. Durante un'espansione isoterma di un gas ideale l'energia interna resta costante, perché dipende soltanto dalla temperatura; pertanto $Q=W$.

In un'espansione contro pressione esterna costante, il lavoro è $W=p_{\mathrm{est}}\Delta V$. Con $p_{\mathrm{est}}=2\cdot10^5\,\mathrm{Pa}$ e aumento di volume $10^{-3}\,\mathrm{m^3}$, il gas compie $200\,\mathrm{J}$. Nel grafico pressione-volume il lavoro corrisponde all'area sottesa alla trasformazione quasi statica. Il verso di percorrenza distingue espansione e compressione.
:::

:::definizione{#rendimento titolo="Macchine termiche e rendimento"}
In un ciclo il sistema ritorna allo stato iniziale, quindi $\Delta U=0$. Una macchina assorbe calore $Q_h>0$, cede una quantità di calore di modulo $Q_c>0$ e produce lavoro $W=Q_h-Q_c$. Il rendimento è
$$
\eta=\frac W{Q_h}=1-\frac{Q_c}{Q_h}.
$$
Con $Q_h=500\,\mathrm{J}$ e $Q_c=350\,\mathrm{J}$, il lavoro è $150\,\mathrm{J}$ e il rendimento è $30\%$. Il denominatore è il calore assorbito dalla sorgente calda. Il secondo principio esclude una macchina ciclica che trasformi integralmente in lavoro il calore preso da un'unica sorgente. Un frigorifero trasferisce calore dal freddo al caldo grazie al lavoro fornito dall'esterno.
:::

## Oscillazioni, onde e suono

:::definizione{#onde titolo="Periodo, frequenza e lunghezza d'onda"}
Il periodo $T$ è il tempo di un'oscillazione completa; la frequenza $f=\dfrac1T$ è il numero di oscillazioni al secondo, espresso in hertz. L'ampiezza è il massimo scostamento dalla posizione di equilibrio. Nel moto armonico $x=A\cos(\omega t+\varphi)$, con pulsazione $\omega=2\pi f$, la fase iniziale $\varphi$ stabilisce da quale punto dell'oscillazione si parte.

Un'onda trasporta energia attraverso una perturbazione. La lunghezza d'onda $\lambda$ è la distanza fra due creste successive e la velocità di propagazione è $v=\lambda f$. Nel suono in aria le particelle oscillano prevalentemente lungo la direzione di propagazione, quindi l'onda è longitudinale. Un suono richiede un mezzo materiale; un'onda elettromagnetica può propagarsi nel vuoto. Per piccole oscillazioni di un pendolo semplice di lunghezza $\ell$, il periodo è $T=2\pi\sqrt{\dfrac{\ell}{g}}$. Una forzante periodica vicina alla frequenza propria può trasferire energia in modo efficace e aumentare l’ampiezza: questo fenomeno è la risonanza.
:::

:::esempio{titolo="Leggere un profilo d'onda"}
Il grafico mostra il profilo a un istante fissato. Le creste si ripetono ogni $4\,\mathrm{m}$, quindi $\lambda=4\,\mathrm{m}$. Se un punto del mezzo oscilla con frequenza $3\,\mathrm{Hz}$, la perturbazione si propaga a $12\,\mathrm{m/s}$. Il profilo spaziale da solo non fornisce la frequenza; occorre anche un'informazione temporale.

::grafico{f="sin(pi*x/2)" xmin=0 xmax=8 ymin=-1.5 ymax=1.5 nomi="x,y" legenda="y=\sin(\pi x/2)" punti="1,1,pieno;5,1,pieno" titolo="Ascisse in metri e ordinate in cm: le creste distano 4 m e l’ampiezza è 1 cm"}
:::

:::osservazione
Quando un'onda passa fra due mezzi fermi, la frequenza resta imposta dalla sorgente. Se cambia la velocità, cambia quindi la lunghezza d'onda. La sovrapposizione somma gli spostamenti delle perturbazioni: due onde in fase si rafforzano, mentre in opposizione di fase possono cancellarsi se hanno uguale ampiezza. La diffrazione descrive l'allargamento della propagazione presso un'apertura o un ostacolo, particolarmente evidente quando le dimensioni sono confrontabili con la lunghezza d'onda.

Per una sorgente sonora che si avvicina a un osservatore fermo, i fronti arrivano più ravvicinati e la frequenza percepita aumenta. Questo è l'effetto Doppler. L'eco richiede invece un percorso di andata e ritorno; con velocità del suono $v$ e ritardo $\Delta t$, la distanza dalla parete è $\dfrac{v\Delta t}{2}$.
:::

## Riflessione, rifrazione e lenti

:::teorema{#ottica titolo="Riflessione e legge di Snell"}
Nella riflessione l'angolo riflesso è uguale a quello incidente; entrambi sono misurati rispetto alla normale alla superficie. Uno specchio piano forma un'immagine virtuale dietro il piano, alla stessa distanza dell'oggetto davanti. La distanza fra oggetto e immagine è quindi doppia rispetto alla distanza dallo specchio.

L'indice di rifrazione è $n=\dfrac cv$, con $c$ velocità della luce nel vuoto e $v$ nel mezzo. Fra due mezzi vale $n_1\sin\theta_1=n_2\sin\theta_2$. Entrando in un mezzo con indice maggiore, un raggio obliquo si avvicina alla normale. La frequenza rimane invariata nel passaggio, mentre cambiano velocità e lunghezza d'onda.
:::

:::definizione{#riflessione-totale titolo="Angolo critico e dispersione"}
La riflessione totale può avvenire passando da indice maggiore $n_1$ a indice minore $n_2$. L'angolo critico soddisfa $\sin\theta_c=\dfrac{n_2}{n_1}$; oltre tale angolo manca il raggio rifratto propagante. Da un mezzo di indice $2$ all'aria di indice $1$, si ha $\theta_c=30^\circ$. La dipendenza dell'indice dalla lunghezza d'onda si chiama dispersione; perciò un prisma può deviare diversamente le componenti della luce bianca.
:::

:::teorema{#lenti titolo="Lenti sottili"}
Per una lente sottile, in approssimazione paraassiale,
$$
\frac1f=\frac1p+\frac1q,\qquad M=-\frac qp.
$$
Si assumono $p>0$ per un oggetto reale, $q>0$ per un'immagine reale e $f>0$ per una lente convergente. Un valore $q<0$ indica un'immagine virtuale sul lato dell'oggetto. L'ingrandimento $M$ confronta le altezze: il segno negativo indica un'immagine capovolta.

Con $f=10\,\mathrm{cm}$ e $p=30\,\mathrm{cm}$ si ottiene $\dfrac1q=\dfrac1{10}-\dfrac1{30}=\dfrac1{15}$, quindi $q=15\,\mathrm{cm}$ e $M=-\dfrac12$. Una lente convergente con oggetto fra lente e fuoco produce invece un'immagine virtuale e diritta. Una lente divergente ha $f<0$ e, per un oggetto reale, produce un'immagine virtuale ridotta.
:::

## Cariche, circuiti e magnetismo

:::teorema{#campo-elettrico titolo="Forza elettrica e potenziale"}
Due cariche puntiformi ferme nel vuoto interagiscono con forza di modulo $F=k\dfrac{|q_1q_2|}{r^2}$. Cariche dello stesso segno si respingono; cariche di segno opposto si attraggono. Il campo elettrico è la forza per unità di carica positiva di prova, $\vec E=\dfrac{\vec F}{q}$. Per una carica negativa la forza è opposta al campo. I campi di più sorgenti si sommano vettorialmente.

Nei conduttori sono presenti cariche libere di spostarsi; negli isolanti la loro mobilità è molto limitata. Strofinio e contatto possono trasferire elettroni, conservando la carica totale del sistema isolato.

La differenza di potenziale soddisfa $\Delta U=q\Delta V$. Il lavoro del campo elettrico è $-\Delta U$. In un sistema isolato la carica totale si conserva. Due sfere conduttrici identiche, messe in contatto lontano da altri corpi, si ripartiscono la carica totale in parti uguali per simmetria. Un conduttore in equilibrio elettrostatico ha campo nullo nel materiale; un condensatore di capacità $C$ conserva cariche opposte di modulo $Q=C\Delta V$ sulle armature.
:::

:::definizione{#circuiti titolo="Corrente e resistenza"}
La corrente media è $I=\dfrac{\Delta Q}{\Delta t}$. Il verso convenzionale è quello del moto di cariche positive. Un resistore ohmico a temperatura costante soddisfa $V=RI$. La potenza dissipata è $P=VI=I^2R=\dfrac{V^2}{R}$ e l'energia in un intervallo è $P\Delta t$ quando la potenza è costante.

In serie tutti i resistori hanno la stessa corrente e $R_{\mathrm{eq}}=R_1+R_2$. In parallelo hanno la stessa tensione e $\dfrac1{R_{\mathrm{eq}}}=\dfrac1{R_1}+\dfrac1{R_2}$. Ai nodi la somma delle correnti entranti uguaglia quella delle correnti uscenti, perché la carica si conserva. Un interruttore aperto interrompe la corrente nel proprio ramo; gli altri rami di un parallelo alimentato da un generatore ideale restano alla stessa tensione. Un voltmetro ideale si collega in parallelo e ha resistenza infinita, mentre un amperometro ideale si collega in serie e ha resistenza nulla. Per un generatore con forza elettromotrice $\mathcal E$ e resistenza interna $r$, la tensione erogata ai morsetti è $V=\mathcal E-Ir$.
:::

:::definizione{#magnetismo titolo="Campo magnetico e forza di Lorentz"}
Un filo rettilineo percorso da corrente genera linee di campo circolari attorno al filo. Un magnete mantiene due poli anche quando viene diviso in pezzi magnetizzati. I materiali ferromagnetici, come il ferro, possono magnetizzarsi fortemente grazie all’orientamento dei domini magnetici. Una carica in moto subisce forza magnetica di modulo $|q|vB\sin\theta$, perpendicolare a velocità e campo. Per velocità parallela al campo la forza è nulla. Per velocità perpendicolare e campo uniforme, in assenza di altre forze, il moto è circolare uniforme: la forza magnetica cambia la direzione della velocità e compie lavoro nullo.

Una variazione del flusso magnetico concatenato a un circuito induce una forza elettromotrice. Il verso della corrente indotta si oppone alla variazione che la produce. Le onde elettromagnetiche uniscono campi elettrici e magnetici variabili e nel vuoto soddisfano $c=\lambda f$. Lo spettro, a frequenza crescente, comprende onde radio, microonde, infrarosso, visibile, ultravioletto, raggi X e gamma; la lunghezza d’onda diminuisce nello stesso ordine.
:::
