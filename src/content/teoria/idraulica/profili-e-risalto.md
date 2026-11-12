---
titolo: Profili di moto permanente e risalto idraulico
sommario: L'equazione del profilo di moto gradualmente vario, la classificazione dei profili negli alvei a debole e a forte pendenza, le sezioni di controllo, il risalto idraulico con le altezze coniugate e la perdita di energia, e il calcolo del profilo per tratti.
---

## Moto permanente gradualmente vario

Nel moto uniforme l'altezza d'acqua è la stessa in ogni sezione del canale. Un canale reale ha però estremità, paratoie, soglie e cambi di pendenza, e vicino a questi elementi l'altezza d'acqua varia da sezione a sezione.

:::richiamo{#richiamo-correnti titolo="Moto uniforme, altezza critica e numero di Froude"}
In un canale prismatico di pendenza $i > 0$ il moto uniforme ha cadente $J = i$ e altezza $h_0$, che si ricava dalla formula di Gauckler-Strickler
$$
Q = k_s\,A\,R^{2/3}\,\sqrt{i} .
$$
L'altezza critica $h_c$ annulla la derivata dell'energia specifica $E = h + \dfrac{Q^2}{2 g A^2}$ ed è l'altezza per cui $Fr = 1$; per la sezione rettangolare di larghezza $b$ vale
$$
h_c = \sqrt[3]{\frac{Q^2}{g\,b^2}} .
$$
La corrente è *lenta* se $Fr < 1$, cioè se $h > h_c$, ed è *veloce* se $Fr > 1$, cioè se $h < h_c$. La pendenza critica $i_c$ è la pendenza per cui $h_0 = h_c$. Si rimanda all'argomento sulle correnti a pelo libero.
:::

:::definizione{#moto-gradualmente-vario titolo="Moto permanente gradualmente vario"}
Una corrente a pelo libero è in **moto permanente gradualmente vario** quando la portata è costante nel tempo e l'altezza d'acqua varia lungo l'asse del canale in modo tanto lento che in ogni sezione la distribuzione delle pressioni resta idrostatica e la perdita di carico per unità di lunghezza si calcola con la formula del moto uniforme che compete all'altezza locale:
$$
J = \frac{v^2}{k_s^2\,R^{4/3}} ,
\qquad
v = \frac{Q}{A} .
$$
Le due ipotesi sono soddisfatte finché le linee di corrente restano quasi parallele al fondo, cioè finché la variazione di $h$ su una lunghezza pari a qualche volta l'altezza d'acqua è piccola rispetto a $h$ stessa.

Questa definizione permette di scrivere un'equazione differenziale per $h(x)$ e quindi di tracciare il pelo libero lungo il canale. Il risalto idraulico, nel quale l'altezza raddoppia in pochi metri, non soddisfa queste ipotesi e si studia invece con l'equazione globale.

::schema{solidi="0,1.00 8,0.40 8,0.00 0,0.60" acqua="0,1.00 2,0.85 4,0.70 6,0.55 8,0.40 8,1.66 6,1.93 4,2.17 2,2.39 0,2.60" linee="0,2.60 2,2.39 4,2.17 6,1.93 8,1.66" energia="0,2.72 2,2.52 4,2.31 6,2.09 8,1.85" tratteggi="0,-0.60 8,-0.60" quote="4 -0.60,4 0.70,z,0.8;4 0.70,4 2.17,h,0.8" etichette="6.8,-0.15,i;0.8,2.88,J;2.0,-0.82,piano di riferimento" riferimento=0 titolo="Corrente gradualmente variata: il fondo scende con pendenza $i$, la linea dei carichi totali con cadente $J$"}
:::

:::osservazione{#piezometrica-pelo-libero titolo="La piezometrica coincide con il pelo libero"}
Sul pelo libero la pressione relativa è nulla, quindi il carico piezometrico di un punto della superficie vale $h_p = z + h$. La distribuzione delle pressioni nella sezione è idrostatica, perciò ogni punto della sezione ha lo stesso carico piezometrico. Il pelo libero **è** quindi la piezometrica della corrente, e la linea dei carichi totali sta sopra di esso dell'altezza cinetica $\dfrac{v^2}{2g}$.
:::

## L'equazione del profilo

::::teorema{#equazione-del-profilo titolo="Equazione del profilo di moto gradualmente vario"}
Sia una corrente in moto permanente gradualmente vario, con portata $Q$ costante, in un canale prismatico di pendenza del fondo $i$, con coefficiente di ragguaglio $\alpha = 1$. Detta $h(x)$ l'altezza d'acqua nella sezione di ascissa $x$, misurata lungo il canale nel verso del moto, vale
$$
\frac{dh}{dx} = \frac{i - J}{1 - Fr^2} ,
$$
dove $J$ è la cadente e $Fr$ il numero di Froude, entrambi calcolati con l'altezza $h(x)$.

L'equazione è la base del tracciamento dei profili. Il suo segno dice se il pelo libero sale o scende procedendo verso valle, e i due valori $h_0$ e $h_c$ che annullano il numeratore e il denominatore separano i casi possibili.

:::dimostrazione
L'idea è derivare rispetto a $x$ il carico totale e riconoscere nel termine cinetico il numero di Froude.

Il carico totale della corrente nella sezione di ascissa $x$ è
$$
H = z + h + \frac{Q^2}{2 g A^2} ,
$$
dove $z$ è la quota del fondo e $A = A(h)$ l'area della sezione bagnata. Il fondo scende con pendenza $i$, perciò $\dfrac{dz}{dx} = -i$. Il carico totale diminuisce nel verso del moto con cadente $J$, perciò $\dfrac{dH}{dx} = -J$. Derivando l'espressione di $H$ si ottiene
$$
-J = -i + \frac{dh}{dx} - \frac{Q^2}{g A^3}\,\frac{dA}{dh}\,\frac{dh}{dx} .
$$
L'area bagnata cresce con l'altezza d'acqua secondo la larghezza del pelo libero, cioè $\dfrac{dA}{dh} = B$. Il numero di Froude è $Fr = \dfrac{v}{\sqrt{g\,h_m}}$ con $h_m = \dfrac{A}{B}$, quindi
$$
Fr^2 = \frac{Q^2}{A^2}\,\frac{B}{g A} = \frac{Q^2 B}{g A^3} .
$$
Sostituendo si ottiene $-J = -i + \left(1 - Fr^2\right)\dfrac{dh}{dx}$, e perciò, poiché $Fr \neq 1$,
$$
\frac{dh}{dx} = \frac{i - J}{1 - Fr^2} .
$$
:::
::::

:::osservazione{#lettura-equazione titolo="Segno dei due termini"}
Il numeratore e il denominatore cambiano segno in corrispondenza di $h_0$ e di $h_c$.

- La cadente diminuisce al crescere dell'altezza d'acqua, perché crescono l'area e il raggio idraulico. Dato che $J = i$ quando $h = h_0$, risulta $J < i$ per $h > h_0$ e $J > i$ per $h < h_0$. Il numeratore è quindi positivo sopra l'altezza di moto uniforme e negativo sotto.
- Il numero di Froude vale $1$ quando $h = h_c$ e diminuisce al crescere di $h$. Il denominatore è perciò positivo per $h > h_c$ (corrente lenta) e negativo per $h < h_c$ (corrente veloce).

Il prodotto dei due segni dà il verso in cui si muove il pelo libero procedendo verso valle. In un canale a debole pendenza con $h_c < h < h_0$ il numeratore è negativo e il denominatore positivo, quindi $\dfrac{dh}{dx} < 0$ e la corrente si abbassa andando verso valle.
:::

:::osservazione{#asintoti titolo="Comportamento vicino a $h_0$ e a $h_c$"}
Per $h \to h_0$ il numeratore tende a zero e il denominatore a un valore diverso da zero, quindi $\dfrac{dh}{dx} \to 0$ e il pelo libero diventa parallelo al fondo e l'altezza di moto uniforme è un asintoto, raggiunto solo a distanza infinita.

Per $h \to h_c$ il denominatore tende a zero e il numeratore a un valore diverso da zero, quindi $\left|\dfrac{dh}{dx}\right| \to \infty$ e il pelo libero tende a disporsi perpendicolarmente al fondo. L'ipotesi di variazione graduale non è più soddisfatta, perciò in prossimità dell'altezza critica il profilo calcolato con questa equazione descrive soltanto la tendenza della corrente, e il passaggio effettivo avviene su un tratto breve.
:::

## Classificazione dei profili

:::definizione{#regioni titolo="Regioni 1, 2 e 3"}
Le rette parallele al fondo di quota $h_0$ e $h_c$ dividono lo spazio sopra il fondo in tre fasce, numerate dall'alto verso il basso:

- **regione 1**: $h$ maggiore sia di $h_0$ sia di $h_c$;
- **regione 2**: $h$ compreso fra $h_0$ e $h_c$;
- **regione 3**: $h$ minore sia di $h_0$ sia di $h_c$.

Il profilo prende il nome dalla lettera dell'alveo e dal numero della regione in cui si trova: $M$ per l'alveo a debole pendenza ($i < i_c$, dall'inglese *mild*), $S$ per quello a forte pendenza ($i > i_c$, *steep*), $C$ per quello a pendenza critica, $H$ per il canale orizzontale, $A$ per il canale in contropendenza. Un profilo resta nella regione in cui comincia, perché per uscirne dovrebbe attraversare $h_0$, dove la derivata è nulla, oppure $h_c$, dove le ipotesi non sono soddisfatte.
:::

:::osservazione{#profili-debole titolo="Alveo a debole pendenza: M1, M2, M3"}
Nell'alveo a debole pendenza $h_0 > h_c$ e il moto uniforme è una corrente lenta.

- **M1** ($h > h_0$): numeratore positivo, denominatore positivo, quindi $\dfrac{dh}{dx} > 0$. Il pelo libero sale verso valle, tende a $h_0$ risalendo verso monte e diventa orizzontale verso valle, perché $J$ e $Fr$ tendono a zero al crescere di $h$. È il rigurgito a monte di una soglia, di uno sbarramento o di un restringimento.
- **M2** ($h_c < h < h_0$): numeratore negativo, denominatore positivo, quindi $\dfrac{dh}{dx} < 0$. Il pelo libero scende verso valle da $h_0$ fino a $h_c$. È la chiamata allo sbocco, cioè il profilo che precede un salto di fondo o l'immissione in un tratto a forte pendenza.
- **M3** ($h < h_c$): numeratore negativo, denominatore negativo, quindi $\dfrac{dh}{dx} > 0$. Il pelo libero sale verso valle da un valore imposto fino a $h_c$, dove il profilo termina con un risalto. È il profilo che segue l'efflusso sotto una paratoia.

::schema{solidi="0,0.70 12,0.40 12,-0.02 0,0.28" tratteggi="0,2.15 12,1.85;0,1.40 12,1.10" linee="0.40,0.99 0.61,1.00 0.83,1.02 1.04,1.03 1.26,1.05 1.47,1.06 1.69,1.08 1.90,1.09 2.11,1.11 2.33,1.13 2.54,1.15 2.76,1.17 2.97,1.20 3.19,1.23 3.40,1.28;4.30,2.03 4.54,2.03 4.77,2.02 5.01,2.01 5.24,2.00 5.48,1.98 5.71,1.97 5.95,1.95 6.19,1.93 6.42,1.91 6.66,1.87 6.89,1.83 7.13,1.76 7.36,1.65 7.60,1.25;8.50,1.95 8.72,1.95 8.94,1.96 9.16,1.96 9.39,1.97 9.61,1.99 9.83,2.02 10.05,2.05 10.27,2.10 10.49,2.15 10.71,2.22 10.94,2.30 11.16,2.39 11.38,2.49 11.60,2.60" etichette="2.0,0.92,M3;5.4,1.80,M2;10.0,2.21,M1;12.6,1.85,h_0;12.6,1.10,h_c" riferimento=0 titolo="Le tre regioni di un alveo a debole pendenza e la forma del profilo in ciascuna"}
:::

:::osservazione{#profili-forte titolo="Alveo a forte pendenza: S1, S2, S3"}
Nell'alveo a forte pendenza $h_0 < h_c$ e il moto uniforme è una corrente veloce. Le due rette si scambiano di posizione, perciò cambiano i segni.

- **S1** ($h > h_c$): numeratore positivo, denominatore positivo, quindi $\dfrac{dh}{dx} > 0$. Il profilo comincia a valle di un risalto e sale fino a diventare orizzontale, per esempio contro uno sbarramento posto su un canale ripido.
- **S2** ($h_0 < h < h_c$): numeratore positivo, denominatore negativo, quindi $\dfrac{dh}{dx} < 0$. Il pelo libero scende da $h_c$ verso $h_0$. È il profilo che si forma subito a valle del passaggio da un tratto a debole pendenza a un tratto a forte pendenza.
- **S3** ($h < h_0$): numeratore negativo, denominatore negativo, quindi $\dfrac{dh}{dx} > 0$. Il pelo libero sale da un valore imposto, per esempio dall'apertura di una paratoia, fino a $h_0$.

::schema{solidi="0,0.95 12,0.05 12,-0.37 0,0.53" tratteggi="0,1.90 12,1.00;0,2.31 12,1.41" linee="0.40,1.21 0.61,1.29 0.83,1.36 1.04,1.42 1.26,1.48 1.47,1.53 1.69,1.57 1.90,1.60 2.11,1.63 2.33,1.64 2.54,1.65 2.76,1.65 2.97,1.65 3.19,1.64 3.40,1.63;4.30,1.97 4.54,1.78 4.77,1.71 5.01,1.66 5.24,1.61 5.48,1.58 5.71,1.55 5.95,1.52 6.19,1.49 6.42,1.46 6.66,1.44 6.89,1.41 7.13,1.39 7.36,1.37 7.60,1.35;8.50,1.71 8.72,1.98 8.94,2.14 9.16,2.27 9.39,2.39 9.61,2.50 9.83,2.61 10.05,2.72 10.27,2.83 10.49,2.93 10.71,3.03 10.94,3.13 11.16,3.23 11.38,3.33 11.60,3.42" etichette="2.0,1.38,S3;5.9,1.70,S2;10.3,2.86,S1;12.6,1.00,h_0;12.6,1.41,h_c" riferimento=0 titolo="Le tre regioni di un alveo a forte pendenza e la forma del profilo in ciascuna"}
:::

:::osservazione{#profili-limite titolo="Alveo orizzontale, critico e a contropendenza"}
Nei tre casi limite l'altezza di moto uniforme non esiste oppure coincide con quella critica, perciò si perde una delle due rette e restano due sole regioni.

- **Canale orizzontale** ($i = 0$): il numeratore vale $-J < 0$ per ogni altezza. La regione 1 non esiste, perché $h_0$ si può pensare infinita. Si hanno il profilo **H2** fra $h_c$ e l'infinito, decrescente verso valle, e il profilo **H3** sotto $h_c$, crescente verso valle.
- **Canale a pendenza critica** ($i = i_c$, cioè $h_0 = h_c$): le due rette coincidono. Restano i profili **C1** sopra e **C3** sotto, entrambi quasi orizzontali, perché numeratore e denominatore si annullano insieme.
- **Canale in contropendenza** ($i < 0$): il numeratore vale $i - J < 0$ per ogni altezza e l'altezza di moto uniforme non esiste. Restano i profili **A2** e **A3**, con l'andamento dei corrispondenti H2 e H3.

Il nome di ogni profilo si ricostruisce dal segno del numeratore e del denominatore, una volta note $h_0$ e $h_c$.
:::

:::attenzione
Un profilo di moto gradualmente vario *non* attraversa l'altezza critica. In un canale a debole pendenza con $h_0 = 1{,}26\,\mathrm{m}$ e $h_c = 0{,}61\,\mathrm{m}$, una corrente che a valle di una paratoia ha altezza $0{,}25\,\mathrm{m}$ segue un profilo M3 e sale verso valle; raggiunta un'altezza prossima a $h_c$, non prosegue con un profilo M2, perché il profilo M2 scende verso valle. Il passaggio da corrente veloce a corrente lenta avviene con un risalto, che è un fenomeno bruscamente vario.
:::

## Sezioni di controllo e direzione del tracciamento

:::definizione{#sezione-di-controllo titolo="Sezione di controllo"}
Una **sezione di controllo** è una sezione in cui l'altezza d'acqua è nota perché imposta da un manufatto o dalla geometria del canale, indipendentemente da ciò che accade nelle sezioni vicine. Sono sezioni di controllo:

- la sezione a valle di una paratoia, dove l'altezza è fissata dall'apertura e dal coefficiente di contrazione;
- la sezione di sbocco su un salto di fondo o su un tratto a forte pendenza, dove si stabilisce $h = h_c$;
- la sezione immediatamente a monte di una soglia o di uno stramazzo, dove l'altezza è legata alla portata dalla scala del manufatto;
- la sezione di immissione in un serbatoio o in un canale di valle, dove l'altezza è imposta dal livello esterno.

Il profilo si calcola a partire da una sezione di controllo, che fornisce la condizione iniziale dell'equazione differenziale.
:::

:::osservazione{#direzione-tracciamento titolo="Da valle per le correnti lente, da monte per le veloci"}
La celerità delle piccole perturbazioni rispetto all'acqua vale $\sqrt{g\,h_m}$. In una corrente lenta risulta $v < \sqrt{g\,h_m}$, quindi una perturbazione risale la corrente e le condizioni imposte a valle determinano l'altezza nelle sezioni di monte. Il profilo di una corrente lenta si traccia perciò **da valle verso monte**, partendo dalla sezione di controllo posta a valle. In una corrente veloce risulta $v > \sqrt{g\,h_m}$, quindi nessuna perturbazione risale la corrente e l'altezza in una sezione dipende soltanto da ciò che accade a monte. Il profilo di una corrente veloce si traccia perciò **da monte verso valle**, partendo dalla sezione di controllo posta a monte.

Da questa regola segue il procedimento per un canale lungo. Si calcolano $h_0$ e $h_c$ in ogni tratto, si individuano le sezioni di controllo, si stabilisce in ciascun tratto se la corrente è lenta o veloce e si traccia ogni profilo nel verso che gli compete, fino a incontrare un altro profilo o un risalto.
:::

:::esempio{titolo="Cambio di pendenza da debole a forte"}
Un canale rettangolare largo $4\,\mathrm{m}$ porta $Q = 6\,\mathrm{m^3/s}$ con $k_s = 50\,\mathrm{m^{1/3}/s}$; il tratto di monte ha $i_1 = 0{,}0008$ e quello di valle $i_2 = 0{,}020$. Risulta $h_c = 0{,}612\,\mathrm{m}$, $i_c = 0{,}00660$, quindi $h_{01} = 1{,}26\,\mathrm{m}$ con $i_1 < i_c$ e $h_{02} = 0{,}426\,\mathrm{m}$ con $i_2 > i_c$.

La corrente passa da lenta a veloce, perciò nella sezione di cambio di pendenza si stabilisce $h = h_c$, che è la sezione di controllo. A monte la corrente è lenta e il profilo si traccia da valle, perciò partendo da $h_c$ si risale con un profilo M2 che tende a $h_{01}$. A valle la corrente è veloce e il profilo si traccia da monte, perciò partendo da $h_c$ si scende con un profilo S2 che tende a $h_{02}$.

::schema{solidi="0,1.60 6,1.30 12,0.40 12,0.00 0,1.20" tratteggi="0,2.06 6,1.76;6,1.76 12,0.86;0,2.55 6,2.25;6,1.62 12,0.72" linee="0.00,2.55 0.50,2.52 1.00,2.49 1.50,2.47 2.00,2.44 2.50,2.41 3.00,2.38 3.50,2.34 4.00,2.30 4.50,2.25 5.00,2.19 5.50,2.10 6.00,1.77;6.00,1.76 6.50,1.61 7.00,1.52 7.50,1.43 8.00,1.35 8.50,1.27 9.00,1.19 9.50,1.11 10.00,1.03 10.50,0.95 11.00,0.88 11.50,0.80 12.00,0.73" etichette="3.5,2.17,M2;7.3,1.63,S2;13.0,1.12,h_c;13.0,0.42,h_0;2.0,2.72,i_1 < i_c;10.6,1.98,i_2 > i_c" riferimento=0 titolo="Passaggio da debole a forte pendenza: la sezione di controllo è nel cambio di pendenza, con $h = h_c$"}
:::

## Il risalto idraulico

:::definizione{#risalto titolo="Risalto idraulico"}
Il **risalto idraulico** è il passaggio brusco da corrente veloce a corrente lenta che avviene in un tratto lungo pochi metri, con forte turbolenza, superficie ondulata e inglobamento d'aria. L'altezza d'acqua passa da un valore $h_1 < h_c$ a un valore $h_2 > h_c$; le due altezze si dicono **coniugate**.

Nel risalto le linee di corrente non sono parallele e la dissipazione è concentrata, perciò l'equazione del profilo non si applica. Il bilancio di energia contiene la perdita $\Delta E$, che è incognita; il bilancio di quantità di moto invece non la contiene, perché le uniche forze in gioco sono le spinte sulle sezioni estreme, il peso e la reazione delle pareti. Il risalto si studia quindi con l'equazione globale.

::schema{solidi="0,0 12,0 12,-0.45 0,-0.45" acqua="0,0 12,0 12,1.60 10.2,1.60 9.0,1.55 7.8,1.42 6.6,1.20 5.4,0.92 4.2,0.63 3,0.40 0,0.40" linee="0,0.40 3,0.40 4.2,0.63 5.4,0.92 6.6,1.20 7.8,1.42 9.0,1.55 10.2,1.60 12,1.60" energia="0,2.39 3,2.39;10.2,1.72 12,1.72" tratteggi="3,1.72 10.2,1.72" quote="2.2 0,2.2 0.40,h_1,0.55;11.2 0,11.2 1.60,h_2,-0.6;5 1.72,5 2.39,ΔE,0.6" etichette="1.1,0.72,corrente veloce;7.8,0.70,corrente lenta" riferimento=0 titolo="Risalto idraulico: il carico totale scende di $\Delta E$ fra le due sezioni estreme"}
:::

:::richiamo{#richiamo-equazione-globale titolo="Equazione globale in moto permanente"}
Per un volume di controllo attraversato in moto permanente da una portata $Q$, con una sezione di ingresso e una di uscita in corrente lineare,
$$
\rho\,Q\,(\vec{v}_2 - \vec{v}_1) = \vec{\Pi}_1 + \vec{\Pi}_2 + \vec{G} + \vec{R} ,
$$
dove $\vec{\Pi}_i = p_i A_i \hat{n}_i$ sono le spinte sulle due sezioni, dirette verso l'interno del volume, $\vec{G}$ è il peso del volume e $\vec{R}$ la forza che le pareti esercitano sul fluido. Si rimanda all'argomento sull'equazione globale dell'equilibrio dinamico.
:::

:::definizione{#spinta-totale titolo="Spinta totale di una corrente"}
Si chiama **spinta totale** della corrente nella sezione di altezza $h$ la somma della spinta idrostatica sulla sezione e del flusso di quantità di moto che la attraversa. Per un canale rettangolare di larghezza $b$,
$$
S(h) = \frac{\gamma\,b\,h^2}{2} + \rho\,Q\,v = \frac{\gamma\,b\,h^2}{2} + \frac{\rho\,Q^2}{b\,h} .
$$
Il primo termine cresce come $h^2$, il secondo decresce come $\dfrac{1}{h}$, perciò $S(h)$ ha un minimo. Annullando la derivata si trova
$$
\gamma\,b\,h - \frac{\rho\,Q^2}{b\,h^2} = 0
\quad\Longrightarrow\quad
h^3 = \frac{Q^2}{g\,b^2} ,
$$
cioè il minimo della spinta totale cade in $h = h_c$. Ogni valore di $S$ maggiore del minimo è assunto da due altezze, una minore e una maggiore di $h_c$, e queste due altezze sono fra loro coniugate.

::grafico{f="19.62*x^2+25/x" xmin=0.15 xmax=2.2 ymin=0 ymax=130 punti="0.4,65.6,pieno;1.596,65.6,pieno;0.86,43.6,vuoto" segmenti="0.4,0,0.4,65.6;1.596,0,1.596,65.6;0.86,0,0.86,43.6" nomi="h,S" etichette="0.45,78,h₁;1.66,78,h₂;1.0,34,hc" titolo="Spinta totale $S(h)$ in $\mathrm{kN}$ per $Q = 10\,\mathrm{m^3/s}$ e $b = 4\,\mathrm{m}$: le due altezze coniugate hanno la stessa spinta e il minimo cade in $h_c$"}
:::

::::teorema{#altezze-coniugate titolo="Altezze coniugate del risalto"}
Sia un risalto idraulico in un canale rettangolare di larghezza $b$ e fondo orizzontale, con portata $Q$. Si assumano la distribuzione delle pressioni idrostatica nelle due sezioni estreme e la resistenza del fondo trascurabile sulla lunghezza del risalto. Dette $h_1$ e $h_2$ le altezze a monte e a valle e $Fr_1 = \dfrac{v_1}{\sqrt{g\,h_1}}$ il numero di Froude della corrente veloce, vale
$$
\frac{h_2}{h_1} = \frac{1}{2}\left(\sqrt{1 + 8\,Fr_1^2} - 1\right) .
$$

La formula lega le due altezze coniugate alla sola corrente di monte, perciò permette di calcolare il livello che si stabilisce a valle di una paratoia o al piede di uno scarico. La stessa relazione, scritta a partire da valle, dà $h_1$ in funzione di $h_2$ e di $Fr_2$.

:::dimostrazione
L'idea è applicare l'equazione globale al volume di acqua compreso fra le due sezioni, nel quale la forza incognita dovuta alla dissipazione non compare.

Si prende come volume di controllo il tratto di corrente compreso fra la sezione $1$ e la sezione $2$ e si proietta l'equazione globale sull'asse $x$, orizzontale e diretto nel verso del moto. Il peso è verticale, quindi la sua componente lungo $x$ è nulla; il fondo è orizzontale e la sua resistenza è trascurata, quindi anche $R_x$ è nullo. Le spinte sulle due sezioni sono dirette verso l'interno del volume, perciò
$$
\Pi_{1x} = +\frac{\gamma\,b\,h_1^2}{2} ,
\qquad
\Pi_{2x} = -\frac{\gamma\,b\,h_2^2}{2} ,
$$
poiché su una sezione rettangolare verticale con distribuzione idrostatica la spinta vale $\gamma\,h_G\,A = \gamma\,\dfrac{h}{2}\,b\,h$. L'equazione globale proiettata su $x$ diventa
$$
\rho\,Q\,(v_2 - v_1) = \frac{\gamma\,b\,h_1^2}{2} - \frac{\gamma\,b\,h_2^2}{2} ,
$$
cioè $S(h_1) = S(h_2)$, quindi la spinta totale si conserva attraverso il risalto.

Si divide per $b$ e si introduce la portata per unità di larghezza $q = \dfrac{Q}{b}$, con $v = \dfrac{q}{h}$:
$$
\frac{\gamma}{2}\left(h_1^2 - h_2^2\right) = \rho\,q^2\left(\frac{1}{h_2} - \frac{1}{h_1}\right)
= \rho\,q^2\,\frac{h_1 - h_2}{h_1 h_2} .
$$
Le due altezze sono diverse, quindi si può dividere per $h_1 - h_2$ e si ottiene, essendo $\rho = \dfrac{\gamma}{g}$,
$$
\frac{h_1 + h_2}{2} = \frac{q^2}{g\,h_1 h_2}
\quad\Longrightarrow\quad
h_1 h_2 (h_1 + h_2) = \frac{2 q^2}{g} .
$$
Poiché $Fr_1^2 = \dfrac{q^2}{g\,h_1^3}$, risulta $\dfrac{2q^2}{g} = 2\,h_1^3\,Fr_1^2$, e dividendo per $h_1$ si ha
$$
h_2^2 + h_1 h_2 - 2\,h_1^2\,Fr_1^2 = 0 .
$$
Questa equazione di secondo grado in $h_2$ ha la sola radice positiva
$$
h_2 = \frac{-h_1 + \sqrt{h_1^2 + 8\,h_1^2\,Fr_1^2}}{2}
= \frac{h_1}{2}\left(\sqrt{1 + 8\,Fr_1^2} - 1\right) .
$$
:::
::::

:::esempio{titolo="Altezze coniugate e spinta totale"}
In un canale rettangolare largo $b = 4\,\mathrm{m}$ che porta $Q = 10\,\mathrm{m^3/s}$, a valle di una paratoia la corrente ha altezza $h_1 = 0{,}40\,\mathrm{m}$. Risulta
$$
v_1 = \frac{10}{4 \cdot 0{,}40} = 6{,}25\,\mathrm{m/s} ,
\qquad
Fr_1 = \frac{6{,}25}{\sqrt{9{,}81 \cdot 0{,}40}} = 3{,}16 ,
$$
quindi la corrente è veloce e
$$
h_2 = \frac{0{,}40}{2}\left(\sqrt{1 + 8 \cdot 3{,}16^2} - 1\right) = 1{,}60\,\mathrm{m} .
$$
La verifica si fa con la spinta totale: $S(h_1) = \dfrac{9{,}81 \cdot 4 \cdot 0{,}40^2}{2} + \dfrac{1000 \cdot 10^2}{4 \cdot 0{,}40 \cdot 1000} = 3{,}14 + 62{,}5 = 65{,}6\,\mathrm{kN}$ e $S(h_2) = 50{,}2 + 15{,}6 = 65{,}8\,\mathrm{kN}$, uguali entro l'arrotondamento.
:::

::::teorema{#perdita-nel-risalto titolo="Perdita di energia nel risalto"}
Nelle stesse ipotesi del teorema sulle altezze coniugate, la perdita di carico totale attraverso il risalto vale
$$
\Delta E = E_1 - E_2 = \frac{(h_2 - h_1)^3}{4\,h_1 h_2} .
$$

La perdita cresce con il cubo del salto di altezza, perciò i risalti con forte differenza fra le due altezze coniugate dissipano molta energia. È questa la ragione per cui il risalto si impiega al piede degli scarichi delle dighe. La potenza dissipata vale $P = \gamma\,Q\,\Delta E$.

:::dimostrazione
L'idea è calcolare la differenza delle energie specifiche e sostituirvi la relazione fra le altezze coniugate già dimostrata.

Il fondo è orizzontale, perciò la differenza dei carichi totali coincide con la differenza delle energie specifiche:
$$
\Delta E = \left(h_1 + \frac{q^2}{2 g h_1^2}\right) - \left(h_2 + \frac{q^2}{2 g h_2^2}\right)
= (h_1 - h_2) + \frac{q^2}{2g}\,\frac{h_2^2 - h_1^2}{h_1^2 h_2^2} .
$$
Dalla dimostrazione delle altezze coniugate si ha $\dfrac{q^2}{g} = \dfrac{h_1 h_2 (h_1 + h_2)}{2}$, quindi $\dfrac{q^2}{2g} = \dfrac{h_1 h_2 (h_1 + h_2)}{4}$. Sostituendo e semplificando $h_1 h_2$,
$$
\Delta E = (h_1 - h_2) + \frac{(h_1 + h_2)(h_2 - h_1)(h_2 + h_1)}{4\,h_1 h_2}
= (h_2 - h_1)\left[\frac{(h_1 + h_2)^2}{4 h_1 h_2} - 1\right] .
$$
Poiché $(h_1 + h_2)^2 - 4 h_1 h_2 = (h_2 - h_1)^2$, ne segue
$$
\Delta E = \frac{(h_2 - h_1)^3}{4\,h_1 h_2} .
$$
Le due altezze sono positive e $h_2 > h_1$, perciò $\Delta E > 0$ e il carico totale diminuisce nel verso del moto.
:::
::::

:::osservazione{#lunghezza-del-risalto titolo="Lunghezza del risalto"}
La lunghezza del risalto non si ricava dalle equazioni di bilancio, perché dipende dalla struttura della turbolenza. Si valuta con formule ricavate da misure di laboratorio su canali rettangolari, fra le quali quella di Smetana,
$$
L \simeq 6\,(h_2 - h_1) ,
$$
che fornisce valori attendibili per $2 < Fr_1 < 10$. Le misure dello United States Bureau of Reclamation danno $L$ compreso fra $4{,}5\,h_2$ e $6\,h_2$ nel campo del risalto stabile. Per il risalto dell'esempio precedente risulta $L \simeq 6\,(1{,}60 - 0{,}40) = 7{,}2\,\mathrm{m}$.
:::

:::osservazione{#tipi-di-risalto titolo="Forma del risalto secondo $Fr_1$"}
Le prove di laboratorio mostrano che l'aspetto del risalto e la quota di energia dissipata dipendono dal numero di Froude della corrente di monte. La classificazione corrente è la seguente:

- $1 < Fr_1 < 1{,}7$: risalto ondulato, con una successione di onde superficiali e dissipazione molto piccola;
- $1{,}7 < Fr_1 < 2{,}5$: risalto debole, superficie poco agitata;
- $2{,}5 < Fr_1 < 4{,}5$: risalto oscillante, con un getto che si sposta dal fondo alla superficie e genera onde che si propagano a valle;
- $4{,}5 < Fr_1 < 9$: risalto stabile, con posizione poco sensibile alle condizioni di valle e dissipazione fra il $45\%$ e il $70\%$ dell'energia di monte;
- $Fr_1 > 9$: risalto forte, molto turbolento, con dissipazione elevata e superficie irregolare a valle.

Le vasche di dissipazione si dimensionano in modo da ricadere nel campo del risalto stabile.
:::

## Posizione del risalto

:::osservazione{#posizione-del-risalto titolo="Dove si colloca il risalto"}
Il risalto si colloca nella sezione in cui l'altezza della corrente veloce e quella della corrente lenta sono coniugate fra loro. Nel caso di una paratoia su un canale a debole pendenza, con altezza $h_1$ all'uscita della paratoia e altezza $h_0$ nel tratto di valle, si confronta l'altezza coniugata di $h_1$ con $h_0$.

- Se l'altezza coniugata di $h_1$ è uguale a $h_0$, il risalto comincia subito a valle della paratoia.
- Se l'altezza coniugata di $h_1$ è maggiore di $h_0$, il livello di valle è insufficiente a sostenere il risalto nella sezione della paratoia. La corrente veloce prosegue con un profilo M3, che sale verso valle, e il risalto si forma dove l'altezza del profilo M3 è coniugata di $h_0$. Il risalto si dice **allontanato** e la sua distanza dalla paratoia si calcola con il metodo passo a passo.
- Se l'altezza coniugata di $h_1$ è minore di $h_0$, il livello di valle è eccessivo e il risalto viene spinto contro la paratoia, che resta parzialmente annegata. Il risalto si dice **annegato** e la formula delle altezze coniugate non si applica in questa forma.

::schema{solidi="0,0 18,0 18,-0.5 0,-0.5;5.95,0.30 6.15,0.30 6.15,2.90 5.95,2.90" acqua="0,0 5.95,0 5.95,2.50 0,2.50;6.15,0 18,0 18,1.45 16.2,1.45 14.5,1.40 12.8,1.25 11.1,1.00 9.4,0.32 6.15,0.30" linee="0,2.50 5.95,2.50;6.15,0.30 9.4,0.32 11.1,1.00 12.8,1.25 14.5,1.40 16.2,1.45 18,1.45" tratteggi="6.15,1.45 18,1.45;6.15,0.74 18,0.74" etichette="7.9,0.54,M3;12.5,1.78,risalto;18.8,1.45,h_0;18.8,0.74,h_c;2.8,1.30,paratoia" riferimento=0 titolo="Risalto allontanato: il profilo M3 collega la paratoia alla sezione in cui l'altezza è coniugata di $h_0$"}
:::

:::esempio{titolo="Risalto a valle di una paratoia"}
Un canale rettangolare largo $b = 4\,\mathrm{m}$, con $k_s = 55\,\mathrm{m^{1/3}/s}$ e $i = 0{,}0008$, porta $Q = 8\,\mathrm{m^3/s}$. Risulta $h_0 = 1{,}45\,\mathrm{m}$ e $h_c = 0{,}742\,\mathrm{m}$, quindi l'alveo è a debole pendenza. All'uscita della paratoia l'altezza è $h_1 = 0{,}30\,\mathrm{m}$, con $v_1 = 6{,}67\,\mathrm{m/s}$ e $Fr_1 = 3{,}89$; la sua coniugata vale $1{,}51\,\mathrm{m}$.

La coniugata supera $h_0 = 1{,}45\,\mathrm{m}$, perciò il risalto è allontanato. L'altezza del profilo M3 nella sezione del risalto è la coniugata di monte di $h_0$, cioè $0{,}320\,\mathrm{m}$, e il profilo M3 impiega $3{,}2\,\mathrm{m}$ per passare da $0{,}300\,\mathrm{m}$ a $0{,}320\,\mathrm{m}$.
:::

:::osservazione{#vasche-di-dissipazione titolo="Vasche di dissipazione"}
Al piede di uno scarico la corrente arriva veloce e deve essere riportata a corrente lenta prima di immettersi nell'alveo naturale, per non erodere il fondo. La **vasca di dissipazione** è un tratto di canale rivestito, con fondo ribassato rispetto a quello di valle, lungo quanto basta a contenere il risalto. Il ribassamento aumenta l'altezza disponibile a valle e tiene il risalto dentro la vasca anche quando il livello dell'alveo di valle è minore di $h_2$; la lunghezza si prende pari a $L$ aumentata di un margine, e la soglia terminale stabilizza la posizione del risalto. Il dimensionamento completo appartiene alla progettazione delle opere idrauliche.

::schema{solidi="0,0.60 4,0.60 4,0 13,0 13,0.60 17,0.60 17,-0.60 0,-0.60" acqua="0,0.60 4,0.60 4,0 13,0 13,0.60 17,0.60 17,2.00 13,2.00 11.4,1.95 9.8,1.80 8.2,1.50 6.6,1.10 5.0,0.90 4,0.90 0,0.90" linee="0,0.90 5.0,0.90 6.6,1.10 8.2,1.50 9.8,1.80 11.4,1.95 13,2.00 17,2.00" etichette="2.2,1.20,corrente veloce;9.0,2.22,risalto;15.0,1.25,alveo di valle;13.45,0.28,d" riferimento=0 titolo="Vasca di dissipazione: il fondo ribassato di $d$ aumenta l'altezza disponibile e trattiene il risalto"}
:::

## Calcolo del profilo per tratti

:::definizione{#metodo-passo-a-passo titolo="Metodo passo a passo"}
Il **metodo passo a passo** calcola la distanza fra due sezioni a partire da due altezze d'acqua assegnate. Si scrive l'equazione del profilo nella forma che lega l'energia specifica alla pendenza, cioè
$$
\frac{dE}{dx} = i - J ,
\qquad
E = h + \frac{Q^2}{2 g A^2} ,
$$
che si ottiene dal carico totale $H = z + E$ con $\dfrac{dz}{dx} = -i$ e $\dfrac{dH}{dx} = -J$. Fra due sezioni vicine, di altezze $h_j$ e $h_{j+1}$, si sostituisce la cadente con la sua media e si ottiene
$$
\Delta x = \frac{E_{j+1} - E_j}{i - \bar{J}} ,
\qquad
\bar{J} = \frac{J_j + J_{j+1}}{2} .
$$
Si parte dalla sezione di controllo, si sceglie una successione di altezze fra quella iniziale e quella d'arrivo e si sommano i $\Delta x$ dei singoli passi. L'errore diminuisce al ridursi dell'ampiezza dei passi, perciò il risultato si controlla ripetendo il calcolo con passi dimezzati.
:::

:::esempio{titolo="Due passi su un profilo M3"}
Nel canale dell'esempio precedente ($b = 4\,\mathrm{m}$, $Q = 8\,\mathrm{m^3/s}$, $k_s = 55\,\mathrm{m^{1/3}/s}$, $i = 0{,}0008$) si calcola la distanza fra la sezione in cui $h = 0{,}300\,\mathrm{m}$ e quella in cui $h = 0{,}310\,\mathrm{m}$, con un passo intermedio a $0{,}305\,\mathrm{m}$.

| $h$ ($\mathrm{m}$) | $v$ ($\mathrm{m/s}$) | $R$ ($\mathrm{m}$) | $E$ ($\mathrm{m}$) | $J$ | $\bar{J}$ | $\Delta x$ ($\mathrm{m}$) |
|---|---|---|---|---|---|---|
| 0,300 | 6,667 | 0,2609 | 2,5653 | 0,08814 |  |  |
| 0,305 | 6,557 | 0,2646 | 2,4966 | 0,08366 | 0,08590 | 0,807 |
| 0,310 | 6,452 | 0,2684 | 2,4315 | 0,07948 | 0,08157 | 0,806 |

La distanza complessiva è $0{,}807 + 0{,}806 = 1{,}61\,\mathrm{m}$. Il profilo sale verso valle, come compete a un profilo M3, e l'energia specifica diminuisce, perché la cadente supera di molto la pendenza del fondo.
:::
