---
titolo: Meccanica dei fluidi
sommario: Come densità e pressione descrivono un fluido, come la legge di Stevino, il principio di Pascal e il principio di Archimede spiegano i liquidi in quiete e il galleggiamento, e come l'equazione di continuità e il teorema di Bernoulli descrivono i fluidi in moto.
---

## Densità e pressione

:::definizione{#fluido titolo="Fluido"}
Un **fluido** è un sistema che non ha forma propria e che, in quiete, non sopporta sforzi di taglio: una forza tangente a una sua superficie, per quanto piccola, lo mette in moto. I liquidi e i gas sono fluidi. Un liquido ha volume proprio e una superficie libera; un gas occupa tutto il volume a disposizione. Un fluido si dice **incomprimibile** se la sua densità è la stessa in ogni punto e non cambia con la pressione. I liquidi si comportano quasi sempre come fluidi incomprimibili, perché per ridurne il volume di una piccola frazione servono pressioni molto alte, e in tutto l'argomento i liquidi sono trattati come incomprimibili.
:::

:::definizione{#densita titolo="Densità"}
La **densità** di un corpo omogeneo di massa $m$ e volume $V$ è
$$
\rho = \frac{m}{V} ,
$$
e si misura in $\mathrm{kg/m^3}$. Valori tipici sono $1{,}00 \cdot 10^3\,\mathrm{kg/m^3}$ per l'acqua dolce, circa $1{,}03 \cdot 10^3\,\mathrm{kg/m^3}$ per l'acqua di mare, $13{,}6 \cdot 10^3\,\mathrm{kg/m^3}$ per il mercurio e circa $1{,}2\,\mathrm{kg/m^3}$ per l'aria a temperatura ambiente. La densità permette di passare dal volume alla massa e quindi al peso: un blocco di alluminio ($\rho = 2{,}70 \cdot 10^3\,\mathrm{kg/m^3}$) di volume $0{,}20\,\mathrm{dm^3} = 2{,}0 \cdot 10^{-4}\,\mathrm{m^3}$ ha massa $0{,}54\,\mathrm{kg}$.
:::

:::definizione{#pressione titolo="Pressione"}
Sia $\vec{F}$ la forza che un fluido esercita su una superficie piana di area $A$. La **pressione** è il rapporto tra la componente di $\vec{F}$ perpendicolare alla superficie e l'area:
$$
p = \frac{F_\perp}{A} .
$$
Se la forza non è uniforme, la pressione in un punto è il limite di $\dfrac{\Delta F_\perp}{\Delta A}$ su superfici sempre più piccole attorno al punto. La pressione è uno scalare e si misura in **pascal**, $1\,\mathrm{Pa} = 1\,\mathrm{N/m^2}$. Un fluido in quiete esercita su ogni superficie solo forze perpendicolari, perché una componente tangente metterebbe in moto il fluido stesso; inoltre in un punto la pressione ha lo stesso valore qualunque sia l'orientazione della superficie su cui la si misura. Perciò la forza di pressione su una superficie piccola di area $\Delta A$ ha modulo $p\,\Delta A$ ed è diretta verso la superficie, perpendicolarmente a essa. La stessa forza produce pressioni molto diverse a seconda dell'area: una persona di peso $600\,\mathrm{N}$ in piedi su $0{,}040\,\mathrm{m^2}$ esercita sul pavimento $1{,}5 \cdot 10^4\,\mathrm{Pa}$, e appoggiata su un tacco di $1{,}0\,\mathrm{cm^2}$ esercita $6{,}0 \cdot 10^6\,\mathrm{Pa}$.
:::

:::osservazione{#unita-di-pressione titolo="Altre unità di pressione"}
Accanto al pascal si usano il **bar**, $1\,\mathrm{bar} = 10^5\,\mathrm{Pa}$, l'**atmosfera**, $1\,\mathrm{atm} = 1{,}013 \cdot 10^5\,\mathrm{Pa}$, che è la pressione media dell'aria al livello del mare, e il **millimetro di mercurio**, $1\,\mathrm{mmHg} \approx 133\,\mathrm{Pa}$, per cui $1\,\mathrm{atm} = 760\,\mathrm{mmHg}$. Negli esercizi si indica con $p_0 = 1{,}013 \cdot 10^5\,\mathrm{Pa}$ la pressione atmosferica e ogni valore va convertito in pascal prima di usarlo nelle formule.
:::

## Legge di Stevino

::::teorema{#legge-di-stevino titolo="Legge di Stevino"}
Sia un fluido incomprimibile di densità $\rho$ in quiete nel campo di gravità uniforme $g$, e sia $y$ la quota misurata lungo la verticale verso l'alto. Per due punti del fluido alle quote $y_1$ e $y_2$ vale
$$
p_2 = p_1 + \rho g\,(y_1 - y_2) .
$$
In particolare tutti i punti alla stessa quota hanno la stessa pressione e, se la superficie libera è a contatto con l'aria alla pressione $p_0$, alla profondità $h$ sotto la superficie la pressione è
$$
p = p_0 + \rho g h .
$$
La legge dice che la pressione in un liquido dipende *solo* dalla profondità, e cresce linearmente con essa, indipendentemente dalla forma del recipiente. In acqua $\rho g = 9{,}81 \cdot 10^3\,\mathrm{Pa/m}$, quindi a $10\,\mathrm{m}$ di profondità la pressione è $1{,}013 \cdot 10^5 + 0{,}981 \cdot 10^5 \approx 1{,}99 \cdot 10^5\,\mathrm{Pa}$, circa il doppio di quella atmosferica.

::grafico{f="1.013+0.0981*x" xmin=0 xmax=20 ymin=0 ymax=3.4 nomi="h,p" punti="0,1.013,pieno;10,1.994,pieno" segmenti="10,0,10,1.994;0,1.994,10,1.994" titolo="Pressione assoluta $p$ (in $10^5\,\mathrm{Pa}$) alla profondità $h$ (in metri) in acqua: la retta $p = p_0 + \rho g h$ sale di circa $0{,}98 \cdot 10^5\,\mathrm{Pa}$ ogni $10\,\mathrm{m}$"}

:::dimostrazione
Si considera, all'interno del fluido, un cilindro immaginario con l'asse verticale, le basi di area $A$ alle quote $y_2 < y_1$ e altezza $y_1 - y_2$. Il liquido contenuto nel cilindro è in quiete, quindi la risultante delle forze che agiscono su di esso è nulla. Le forze di pressione sulla superficie laterale sono orizzontali e, poiché il fluido è in equilibrio anche in direzione orizzontale, la loro risultante è nulla. Lungo la verticale agiscono tre forze: la forza $p_1 A$ verso il basso sulla base superiore, la forza $p_2 A$ verso l'alto sulla base inferiore e il peso $mg = \rho A\,(y_1 - y_2)\,g$, dove si è usato che la densità è uniforme. L'equilibrio lungo la verticale dà
$$
p_2 A - p_1 A - \rho g A\,(y_1 - y_2) = 0 ,
$$
e dividendo per $A$ si ottiene la tesi. Con un cilindro orizzontale il peso non ha componenti lungo l'asse, perciò le pressioni sulle due basi sono uguali, quindi punti alla stessa quota hanno la stessa pressione. Infine, prendendo il punto $1$ sulla superficie libera, dove $p_1 = p_0$, e posto $h = y_1 - y_2$, si ottiene $p = p_0 + \rho g h$.

::grafico{curve="1+6*(abs(t-1)-abs(t-2)+1)/2-3.5*(abs(t-4)-abs(t-5)+1)/2+1*(abs(t-6)-abs(t-7)+1)/2-1*(abs(t-8)-abs(t-9)+1)/2+1*(abs(t-10)-abs(t-11)+1)/2,4.8-4.8*(abs(t)-abs(t-1)+1)/2+4.8*(abs(t-2)-abs(t-3)+1)/2+995.2*(abs(t-3)-abs(t-4)+1)/2-999*(abs(t-5)-abs(t-6)+1)/2+1.5*(abs(t-7)-abs(t-8)+1)/2-1.5*(abs(t-9)-abs(t-10)+1)/2,0,14" area="4;0;1;7" vettori="4,3.3,4,2.5,p₁A;4,0.2,4,1,p₂A;4,1.75,4,1.2,mg" segmenti="0,1,3.5,1;0,2.5,3.5,2.5" etichette="0.15,1.15,y₂;0.15,2.65,y₁" xmin=0 xmax=8 ymin=0 ymax=4.8 uguale=1 titolo="Il cilindro di liquido fra le quote $y_2$ e $y_1$ è in equilibrio sotto il peso e le forze di pressione sulle due basi"}

:::
::::

:::definizione{#pressione-assoluta-e-relativa titolo="Pressione assoluta e pressione relativa"}
La pressione $p$ che compare nella legge di Stevino è la **pressione assoluta**. La differenza $p - p_0$ tra la pressione assoluta e quella atmosferica si chiama **pressione relativa** (o manometrica): è la grandezza misurata dai manometri e dai misuratori della pressione degli pneumatici, che segnano zero all'aria aperta. In un liquido con la superficie libera a contatto con l'atmosfera la pressione relativa alla profondità $h$ è $\rho g h$. La distinzione conta nel calcolo delle forze: su una parete che ha da un lato il liquido e dall'altro l'aria, la pressione atmosferica agisce su entrambe le facce, quindi la forza risultante si calcola con la sola pressione relativa.
:::

:::osservazione{#vasi-comunicanti titolo="Vasi comunicanti e tubo a U"}
In recipienti comunicanti che contengono lo stesso liquido in quiete le superfici libere, tutte alla pressione $p_0$, stanno alla stessa quota, qualunque sia la forma dei recipienti. È una conseguenza diretta della **legge di Stevino**, perché punti dello stesso liquido alla stessa pressione hanno la stessa quota. Se un tubo a U contiene due liquidi che non si mescolano, di densità $\rho_1$ e $\rho_2$, si sceglie la quota della superficie di separazione: i punti $A$ e $B$ a quella quota nei due rami stanno nello stesso liquido connesso, quindi hanno la stessa pressione. Indicate con $h_1$ e $h_2$ le altezze delle colonne di liquido sopra quella quota, si ha $p_0 + \rho_1 g h_1 = p_0 + \rho_2 g h_2$, cioè
$$
\rho_1 h_1 = \rho_2 h_2 .
$$
Le altezze sono inversamente proporzionali alle densità, e il confronto tra le colonne permette di misurare la densità di un liquido rispetto a quella dell'acqua.

::grafico{curve="1+4*(abs(t-1)-abs(t-2)+1)/2-1*(abs(t-4)-abs(t-5)+1)/2-2*(abs(t-7)-abs(t-8)+1)/2,5.2-5.2*(abs(t)-abs(t-1)+1)/2+5.2*(abs(t-2)-abs(t-3)+1)/2+994.8*(abs(t-3)-abs(t-4)+1)/2-994.8*(abs(t-5)-abs(t-6)+1)/2-4.2*(abs(t-6)-abs(t-7)+1)/2+4.2*(abs(t-8)-abs(t-9)+1)/2,0,10" area="1;0;1;5|2;1;1;2|4;1;4;5|4.5;2;1;2|4.5;2;1;2" segmenti="0.5,2,5.5,2;0.6,2,0.6,4.5;5.4,2,5.4,4" punti="1.5,2,pieno,A;4.5,2,pieno,B" etichette="0.15,3.3,h₁;5.55,3.1,h₂;1.15,3.6,olio;4.1,3.3,acqua" xmin=0 xmax=6 ymin=0 ymax=5.2 uguale=1 titolo="Tubo a U con olio e acqua: i punti $A$ e $B$ stanno alla stessa quota nello stesso liquido, quindi $\rho_1 g h_1 = \rho_2 g h_2$"}

:::

:::osservazione{#barometro titolo="Barometro di Torricelli"}
Un tubo lungo circa un metro, chiuso a un'estremità e pieno di mercurio, viene capovolto in una vaschetta di mercurio. Il mercurio scende fino a un'altezza $h$ sopra la superficie della vaschetta e sopra di esso resta un volume in cui la pressione è trascurabile. Il punto del tubo alla quota della superficie della vaschetta ha la stessa pressione $p_0$ dell'aria, e per la **legge di Stevino** vale $p_0 = 0 + \rho_{\mathrm{Hg}}\, g h$. Il barometro misura quindi la pressione atmosferica attraverso un'altezza: con $h = 760\,\mathrm{mm}$ si ottiene $p_0 = 13{,}6 \cdot 10^3 \cdot 9{,}81 \cdot 0{,}760 \approx 1{,}01 \cdot 10^5\,\mathrm{Pa}$. Con l'acqua, che è $13{,}6$ volte meno densa, la colonna equivalente è alta $\dfrac{p_0}{\rho g} \approx 10{,}3\,\mathrm{m}$.
:::

:::richiamo{titolo="Integrale definito"}
Se una grandezza si distribuisce lungo un intervallo $[a, b]$ con contributo $f(y)\,dy$ su ogni tratto di lunghezza $dy$, il totale è $\displaystyle\int_a^b f(y)\,dy$. Per il calcolo si rimanda all'argomento sugli integrali definiti di Analisi 1.
:::

::::teorema{#forza-su-una-parete titolo="Forza su una parete verticale"}
Un liquido di densità $\rho$ in quiete, con la superficie libera a contatto con l'aria, bagna una parete verticale rettangolare di larghezza $w$ fino all'altezza $H$, e dall'altro lato della parete c'è aria alla pressione $p_0$. Allora la forza risultante che il liquido esercita sulla parete è perpendicolare alla parete e ha modulo
$$
F = \frac{1}{2}\,\rho g w H^2 .
$$
La forza cresce con il quadrato della profondità, ed è il motivo per cui le dighe hanno la base più spessa della sommità. Per una paratia larga $4{,}0\,\mathrm{m}$ con l'acqua alta $3{,}0\,\mathrm{m}$ si ha $F = \dfrac{1}{2} \cdot 1000 \cdot 9{,}81 \cdot 4{,}0 \cdot 9{,}0 \approx 1{,}77 \cdot 10^5\,\mathrm{N}$.

:::dimostrazione
La pressione non è uniforme sulla parete, quindi la si divide in strisce orizzontali di altezza $dz$, alla profondità $z$, su ciascuna delle quali la pressione si può considerare costante. Sulla striscia, di area $w\,dz$, la pressione relativa è $\rho g z$, perché la pressione atmosferica agisce su entrambe le facce della parete e il suo contributo si annulla. Le forze sulle strisce sono tutte perpendicolari alla parete, quindi si sommano come numeri e la forza totale è l'integrale
$$
F = \int_0^H \rho g z\, w\, dz = \rho g w \left[ \frac{z^2}{2} \right]_0^H = \frac{1}{2}\,\rho g w H^2 .
$$
Lo stesso risultato si scrive $F = \rho g\,\dfrac{H}{2}\,(wH)$: è l'area bagnata moltiplicata per la pressione relativa a metà altezza, che è la pressione media perché la pressione cresce linearmente con la profondità.
:::
::::

## Principio di Pascal e torchio idraulico

:::teorema{#principio-di-pascal titolo="Principio di Pascal"}
Una variazione di pressione prodotta in un punto di un fluido incomprimibile in quiete, contenuto in un recipiente chiuso, si trasmette invariata a ogni punto del fluido e alle pareti del recipiente. È un principio sperimentale formulato da Pascal; per i liquidi è anche una conseguenza della **legge di Stevino**, perché la relazione $p_2 = p_1 + \rho g\,(y_1 - y_2)$ dice che, se $p_1$ aumenta di $\Delta p$, anche $p_2$ aumenta di $\Delta p$. Il principio serve a moltiplicare le forze nei dispositivi idraulici: freni delle automobili, sollevatori, presse. Per esempio, se un pistone di area $2{,}0\,\mathrm{cm^2}$ spinge con forza $10\,\mathrm{N}$ sul liquido di un circuito chiuso, la pressione in ogni punto del circuito aumenta di $\dfrac{10}{2{,}0 \cdot 10^{-4}} = 5{,}0 \cdot 10^4\,\mathrm{Pa}$.
:::

::::teorema{#torchio-idraulico titolo="Torchio idraulico"}
Due cilindri verticali di sezioni $A_1 < A_2$, chiusi da pistoni di massa trascurabile alla stessa quota, sono collegati da un condotto pieno di liquido incomprimibile. Se sul pistone piccolo agisce la forza $F_1$, il pistone grande è in equilibrio con la forza
$$
F_2 = \frac{A_2}{A_1}\, F_1 ,
$$
e se il pistone piccolo si abbassa di $s_1$, il pistone grande si alza di $s_2 = \dfrac{A_1}{A_2}\, s_1$. Il torchio moltiplica la forza per il rapporto tra le aree e divide lo spostamento per lo stesso rapporto, perciò il lavoro $F_1 s_1 = F_2 s_2$ è lo stesso sui due pistoni. Con $A_2 = 100\,A_1$ una forza di $50\,\mathrm{N}$ sostiene un carico di $5000\,\mathrm{N}$, ma per alzarlo di $1\,\mathrm{cm}$ il pistone piccolo deve scendere di $1\,\mathrm{m}$.

::grafico{curve="1+5*(abs(t-1)-abs(t-2)+1)/2-3*(abs(t-4)-abs(t-5)+1)/2-1.4*(abs(t-7)-abs(t-8)+1)/2,4-4*(abs(t)-abs(t-1)+1)/2+4*(abs(t-2)-abs(t-3)+1)/2+996*(abs(t-3)-abs(t-4)+1)/2-996*(abs(t-5)-abs(t-6)+1)/2-3.2*(abs(t-6)-abs(t-7)+1)/2+3.2*(abs(t-8)-abs(t-9)+1)/2,0,10" area="0.8;0;1;6|2.5;0.8;1;1.6|2.5;0.8;3;6" segmenti="1,2.5,1.6,2.5;3,2.5,6,2.5" vettori="1.3,3.5,1.3,2.55,F₁;4.5,2.55,4.5,3.95,F₂" etichette="1.75,2.6,A₁;5.2,2.1,A₂" xmin=0 xmax=7 ymin=0 ymax=4 uguale=1 titolo="Torchio idraulico: la pressione $\dfrac{F_1}{A_1}$ si trasmette al pistone grande, che riceve la forza $F_2 = \dfrac{A_2}{A_1}\,F_1$"}

:::dimostrazione
La forza $F_1$ produce sotto il pistone piccolo la pressione $\dfrac{F_1}{A_1}$ in più rispetto a quella dovuta al solo liquido. I due pistoni sono alla stessa quota, quindi per il **principio di Pascal** la stessa variazione di pressione agisce sul pistone grande, che riceve la forza $F_2 = \dfrac{F_1}{A_1}\, A_2$. Il liquido è incomprimibile, perciò il volume $A_1 s_1$ che esce dal cilindro piccolo entra nel cilindro grande, quindi da $A_1 s_1 = A_2 s_2$ segue la relazione tra gli spostamenti. Moltiplicando le due relazioni membro a membro si ottiene $F_2 s_2 = F_1 s_1$.
:::
::::

## Principio di Archimede

::::teorema{#principio-di-archimede titolo="Principio di Archimede"}
Un corpo immerso, in tutto o in parte, in un fluido in quiete di densità $\rho_f$ riceve dal fluido una forza verticale diretta verso l'alto, detta **spinta di Archimede**, di modulo uguale al peso del fluido spostato:
$$
S = \rho_f\, V_{\mathrm{imm}}\, g ,
$$
dove $V_{\mathrm{imm}}$ è il volume della parte immersa del corpo. La spinta è applicata nel baricentro del fluido spostato, detto centro di spinta. Il nome di principio è storico, perché il risultato si ricava dalla **legge di Stevino**. La spinta dipende dalla densità del fluido e dal volume immerso, e serve a calcolare il peso apparente dei corpi immersi e le condizioni di galleggiamento; per esempio un corpo di volume $2{,}0\,\mathrm{dm^3}$ completamente immerso in acqua riceve la spinta $1000 \cdot 2{,}0 \cdot 10^{-3} \cdot 9{,}81 \approx 19{,}6\,\mathrm{N}$, qualunque sia il materiale di cui è fatto.

::grafico{curve="1+6*(abs(t-1)-abs(t-2)+1)/2-4*(abs(t-4)-abs(t-5)+1)/2+2*(abs(t-6)-abs(t-7)+1)/2-2*(abs(t-8)-abs(t-9)+1)/2+2*(abs(t-10)-abs(t-11)+1)/2,5.6-5.6*(abs(t)-abs(t-1)+1)/2+5.6*(abs(t-2)-abs(t-3)+1)/2+994.4*(abs(t-3)-abs(t-4)+1)/2-998.5*(abs(t-5)-abs(t-6)+1)/2+1.5*(abs(t-7)-abs(t-8)+1)/2-1.5*(abs(t-9)-abs(t-10)+1)/2,0,14" area="5;0;1;3|5;0;5;7|1.5;0;3;5|5;3;3;5" vettori="4,3.85,4,3.05,F₁;4,0.15,4,1.45,F₂;2.2,2.25,2.95,2.25;5.8,2.25,5.05,2.25" xmin=0 xmax=8 ymin=0 ymax=5.6 uguale=1 titolo="Le forze di pressione laterali si annullano; sulla base inferiore, più profonda, la forza è maggiore, e la differenza $F_2 - F_1$ è la spinta"}

:::dimostrazione
Si considera prima un parallelepipedo immerso, con le basi orizzontali di area $A$ alle quote $y_2 < y_1$. Le forze di pressione sulle facce laterali si annullano a due a due, perché su facce opposte agiscono alla stessa profondità pressioni uguali con versi opposti. Sulla base superiore agisce la forza $F_1 = p_1 A$ verso il basso, sulla base inferiore la forza $F_2 = p_2 A$ verso l'alto. Per la **legge di Stevino** $p_2 - p_1 = \rho_f g\,(y_1 - y_2)$, quindi la risultante è diretta verso l'alto e vale
$$
F_2 - F_1 = \rho_f g\,(y_1 - y_2)\,A = \rho_f\, V g .
$$
Per un corpo di forma qualunque si ragiona per sostituzione. Si immagina di togliere il corpo e di riempire la regione che occupava con lo stesso fluido che lo circonda. Questo fluido è in equilibrio, quindi la risultante delle forze di pressione sulla sua superficie è opposta al suo peso: è verticale, verso l'alto, di modulo $\rho_f V_{\mathrm{imm}}\, g$, e la sua retta d'azione passa per il baricentro del fluido sostituito. Le forze di pressione dipendono solo dal fluido esterno e dalla forma della superficie, non da ciò che la superficie racchiude; perciò sul corpo agisce la stessa risultante. Se il corpo è immerso solo in parte, sulla parte emersa agisce la pressione atmosferica $p_0$, uniforme perché il peso dell'aria si trascura. Una pressione uniforme su tutta la superficie chiusa del corpo ha risultante nulla, quindi resta la sola pressione relativa sulla parte immersa, e il ragionamento per sostituzione si applica alla regione occupata dalla parte immersa.
:::
::::

:::osservazione{#peso-apparente titolo="Peso apparente"}
Un corpo di peso $P$ appeso a un dinamometro e immerso completamente in un liquido di densità $\rho_f$ è in equilibrio sotto il peso, la spinta $S$ e la forza del dinamometro. Il dinamometro segna quindi il **peso apparente**
$$
P_{\mathrm{app}} = P - S = (\rho_c - \rho_f)\, V g ,
$$
dove $\rho_c$ è la densità del corpo e $V$ il suo volume. Il peso apparente permette di misurare il volume e la densità di un corpo di forma irregolare: la differenza $P - P_{\mathrm{app}} = \rho_f V g$ dà il volume, e il rapporto
$$
\frac{P}{P - P_{\mathrm{app}}} = \frac{\rho_c}{\rho_f}
$$
dà la densità rispetto a quella del liquido.
:::

## Galleggiamento

::::teorema{#condizione-di-galleggiamento titolo="Condizione di galleggiamento"}
Sia un corpo omogeneo di densità $\rho_c$ e volume $V$ in un liquido di densità $\rho_f$, e si trascurino le forze dell'aria. Allora:

- se $\rho_c < \rho_f$, il corpo galleggia, in equilibrio con la frazione di volume immerso
$$
\frac{V_{\mathrm{imm}}}{V} = \frac{\rho_c}{\rho_f} ;
$$
- se $\rho_c = \rho_f$, il corpo completamente immerso è in equilibrio a qualunque profondità;
- se $\rho_c > \rho_f$, il corpo affonda.

Il comportamento del corpo dipende quindi solo dal confronto tra le densità, e la frazione immersa si calcola senza conoscere le dimensioni. Per un corpo non omogeneo, o per un corpo cavo come una nave, si usa la densità media $\dfrac{m}{V}$, dove $V$ comprende anche le cavità chiuse.

::grafico{curve="1+6*(abs(t-1)-abs(t-2)+1)/2-4*(abs(t-4)-abs(t-5)+1)/2+2*(abs(t-6)-abs(t-7)+1)/2-2*(abs(t-8)-abs(t-9)+1)/2+2*(abs(t-10)-abs(t-11)+1)/2,4.4-4.4*(abs(t)-abs(t-1)+1)/2+4.4*(abs(t-2)-abs(t-3)+1)/2+995.6*(abs(t-3)-abs(t-4)+1)/2-998.2*(abs(t-5)-abs(t-6)+1)/2+2*(abs(t-7)-abs(t-8)+1)/2-2*(abs(t-9)-abs(t-10)+1)/2,0,14" area="3;0;1;3|3;0;5;7|1.8;0;3;5" vettori="3.85,2.8,3.85,1.6,P;4.15,2.4,4.15,3.6,S" xmin=0 xmax=8 ymin=0 ymax=4.4 uguale=1 titolo="Un blocco con densità pari a $0{,}6$ volte quella dell'acqua galleggia con $0{,}6$ del volume immerso: il peso $P$ e la spinta $S$ sono uguali e opposti"}

:::dimostrazione
Il corpo completamente immerso riceve la spinta $\rho_f V g$ e ha peso $\rho_c V g$, quindi la risultante verticale, positiva verso l'alto, è $(\rho_f - \rho_c)\,V g$. Se $\rho_c > \rho_f$ la risultante è diretta verso il basso e il corpo affonda; se $\rho_c = \rho_f$ è nulla in ogni posizione. Se $\rho_c < \rho_f$ la risultante è diretta verso l'alto, quindi il corpo sale ed emerge in parte; mentre emerge il volume immerso diminuisce e con esso la spinta, finché la spinta uguaglia il peso. In equilibrio vale perciò $\rho_f V_{\mathrm{imm}}\, g = \rho_c V g$, da cui la frazione immersa.
:::
::::

:::esempio{titolo="Iceberg"}
Il ghiaccio ha densità $917\,\mathrm{kg/m^3}$ e l'acqua di mare $1025\,\mathrm{kg/m^3}$, quindi un blocco di ghiaccio galleggia con la frazione immersa $\dfrac{917}{1025} \approx 0{,}895$. Emerge circa il $10{,}5\,\%$ del volume, e la parte visibile di un iceberg è una piccola frazione del totale.
:::

:::attenzione
La spinta si calcola con la densità del *fluido* e con il volume *immerso*; la densità del corpo entra solo nel peso. Un cubo di ferro e un cubo di legno di lato $10\,\mathrm{cm}$, tenuti entrambi completamente sott'acqua, ricevono la stessa spinta $1000 \cdot 10^{-3} \cdot 9{,}81 \approx 9{,}8\,\mathrm{N}$; il cubo di legno, lasciato libero, sale, perché il suo peso è minore di $9{,}8\,\mathrm{N}$.
:::

## Fluidi in moto: portata ed equazione di continuità

:::definizione{#fluido-ideale titolo="Fluido ideale e moto stazionario"}
Il moto di un fluido è **stazionario** se in ogni punto fissato dello spazio la velocità e la pressione del fluido non cambiano nel tempo, anche se ogni singola particella cambia velocità mentre si sposta. In moto stazionario le traiettorie delle particelle sono le **linee di corrente**, tangenti in ogni punto alla velocità, e l'insieme delle linee di corrente che attraversano il contorno di una piccola superficie forma un *tubo di flusso*, dalle cui pareti il fluido non esce. Si chiama **fluido ideale** un fluido incomprimibile e privo di attrito interno (viscosità nulla), in moto stazionario. È il modello in cui valgono l'equazione di continuità e il teorema di Bernoulli, e descrive bene l'acqua che scorre in condotti non troppo lunghi e con velocità moderate.
:::

:::definizione{#portata titolo="Portata"}
Sia $A$ l'area di una sezione di un condotto, perpendicolare al moto, e sia $v$ la velocità del fluido attraverso di essa, supposta uniforme sulla sezione. La **portata** è il volume di fluido che attraversa la sezione nell'unità di tempo:
$$
Q = \frac{dV}{dt} = A v ,
$$
e si misura in $\mathrm{m^3/s}$; spesso si usano i litri al secondo, con $1\,\mathrm{L/s} = 10^{-3}\,\mathrm{m^3/s}$. La relazione $Q = Av$ si ottiene osservando che in un intervallo $dt$ attraversa la sezione il fluido contenuto in un cilindro di base $A$ e altezza $v\,dt$. La **portata di massa** è $\rho Q$, in $\mathrm{kg/s}$. Un tubo con sezione di $2{,}0\,\mathrm{cm^2}$ in cui l'acqua scorre a $1{,}5\,\mathrm{m/s}$ ha portata $3{,}0 \cdot 10^{-4}\,\mathrm{m^3/s}$, cioè $0{,}30\,\mathrm{L/s}$.
:::

::::teorema{#equazione-di-continuita titolo="Equazione di continuità"}
In un condotto, o in un tubo di flusso, percorso in moto stazionario da un fluido incomprimibile, la portata è la stessa in ogni sezione: per due sezioni di aree $A_1$ e $A_2$, con velocità $v_1$ e $v_2$,
$$
A_1 v_1 = A_2 v_2 .
$$
La velocità è inversamente proporzionale all'area della sezione, quindi dove il condotto si restringe il fluido accelera. Se un tubo circolare dimezza il diametro, l'area diventa un quarto e la velocità quadruplica.

::grafico{curve="0+3*(abs(t)-abs(t-1)+1)/2+2*(abs(t-1)-abs(t-2)+1)/2+3*(abs(t-2)-abs(t-3)+1)/2-8*(abs(t-4)-abs(t-5)+1)/2+3*(abs(t-6)-abs(t-7)+1)/2+2*(abs(t-7)-abs(t-8)+1)/2+3*(abs(t-8)-abs(t-9)+1)/2,1.2-0.35*(abs(t-1)-abs(t-2)+1)/2+999.15*(abs(t-3)-abs(t-4)+1)/2-1001.2*(abs(t-5)-abs(t-6)+1)/2+0.35*(abs(t-7)-abs(t-8)+1)/2,0,10" area="1.2-0.35*(abs((x-3)/2)-abs((x-3)/2-1)+1)/2;-(1.2-0.35*(abs((x-3)/2)-abs((x-3)/2-1)+1)/2);0;8" segmenti="1.5,-1.2,1.5,1.2;6.5,-0.85,6.5,0.85" vettori="0.3,0.5,1.1,0.5,v₁;5.4,0.4,7,0.4,v₂" etichette="1.65,-0.95,A₁;6.65,-0.65,A₂" xmin=0 xmax=8 ymin=-1.6 ymax=1.6 uguale=1 titolo="Dove la sezione si dimezza la velocità raddoppia, perché la portata $Q = A_1 v_1 = A_2 v_2$ è la stessa in ogni sezione"}

:::dimostrazione
Si considera il fluido compreso tra le sezioni $A_1$ e $A_2$. In un intervallo di tempo $dt$ entra dalla prima sezione la massa $\rho A_1 v_1\, dt$ ed esce dalla seconda la massa $\rho A_2 v_2\, dt$, mentre dalle pareti laterali non passa fluido. Poiché il moto è stazionario, la massa contenuta tra le due sezioni non cambia nel tempo, quindi la massa entrata è uguale a quella uscita: $\rho A_1 v_1\, dt = \rho A_2 v_2\, dt$. Il fluido è incomprimibile, perciò la densità è la stessa nelle due sezioni e si semplifica insieme a $dt$, dando $A_1 v_1 = A_2 v_2$.
:::
::::

## Teorema di Bernoulli

:::richiamo{titolo="Teorema dell'energia cinetica"}
La variazione di energia cinetica di un sistema è uguale al lavoro totale delle forze che agiscono su di esso: $\Delta K = L_{\mathrm{tot}}$. Si rimanda all'argomento sul lavoro e l'energia.
:::

::::teorema{#teorema-di-bernoulli titolo="Teorema di Bernoulli"}
Sia un fluido ideale di densità $\rho$ che scorre in un condotto. Per due sezioni qualsiasi del condotto, alle quote $y_1$ e $y_2$, con pressioni $p_1$ e $p_2$ e velocità $v_1$ e $v_2$, vale
$$
p_1 + \frac{1}{2}\rho v_1^2 + \rho g y_1 = p_2 + \frac{1}{2}\rho v_2^2 + \rho g y_2 ,
$$
cioè la quantità $p + \dfrac{1}{2}\rho v^2 + \rho g y$ è costante lungo il condotto. Ogni termine è un'energia per unità di volume: $\dfrac{1}{2}\rho v^2$ è l'energia cinetica, $\rho g y$ l'energia potenziale gravitazionale, $p$ il lavoro che le forze di pressione compiono per spingere un'unità di volume di fluido. Il teorema esprime la conservazione dell'energia per un fluido senza attrito, e insieme all'equazione di continuità permette di calcolare velocità e pressioni. In un condotto orizzontale dove la velocità passa da $1{,}0$ a $3{,}0\,\mathrm{m/s}$, la pressione dell'acqua diminuisce di $\dfrac{1}{2} \cdot 1000 \cdot (9{,}0 - 1{,}0) = 4{,}0 \cdot 10^3\,\mathrm{Pa}$.

::grafico{curve="0+3*(abs(t)-abs(t-1)+1)/2+2*(abs(t-1)-abs(t-2)+1)/2+3*(abs(t-2)-abs(t-3)+1)/2-8*(abs(t-4)-abs(t-5)+1)/2+3*(abs(t-6)-abs(t-7)+1)/2+2*(abs(t-7)-abs(t-8)+1)/2+3*(abs(t-8)-abs(t-9)+1)/2,1.6+1.8*(abs(t-1)-abs(t-2)+1)/2+996.6*(abs(t-3)-abs(t-4)+1)/2-999.6*(abs(t-5)-abs(t-6)+1)/2+2.2*(abs(t-7)-abs(t-8)+1)/2,0,10" area="1.6+1.8*(abs((x-3)/2)-abs((x-3)/2-1)+1)/2;0.4+2.2*(abs((x-3)/2)-abs((x-3)/2-1)+1)/2;0;8" segmenti="1.5,0.4,1.5,1.6;6.5,2.6,6.5,3.4;0,1,1.5,1;0,3,6.5,3" vettori="0.3,1.3,1.1,1.3,v₁;6.7,3.15,7.9,3.15,v₂" etichette="0.15,1.15,y₁;0.15,3.15,y₂;1.6,0.55,A₁;6.6,2.7,A₂" xmin=0 xmax=8.4 ymin=0 ymax=3.8 uguale=1 titolo="Il fluido compreso fra le sezioni $A_1$ e $A_2$ sale dalla quota $y_1$ alla quota $y_2$ e accelera da $v_1$ a $v_2$"}

:::dimostrazione
Si considera il fluido compreso, all'istante $t$, tra le sezioni $A_1$ e $A_2$. Nell'intervallo $dt$ la sezione di coda avanza di $v_1\, dt$ e quella di testa di $v_2\, dt$. Per l'**equazione di continuità** i due volumi spazzati sono uguali, $dV = A_1 v_1\, dt = A_2 v_2\, dt$, e contengono la stessa massa $dm = \rho\, dV$.

Si calcola il lavoro delle forze sul fluido considerato. Il fluido che segue spinge la sezione di coda con la forza $p_1 A_1$ nel verso del moto, che compie il lavoro $p_1 A_1 v_1\, dt = p_1\, dV$; il fluido che precede agisce sulla sezione di testa con la forza $p_2 A_2$ opposta al moto, che compie il lavoro $-p_2\, dV$. Le pareti del condotto esercitano forze perpendicolari alla velocità, perché il fluido non ha attrito, quindi non compiono lavoro. Il moto è stazionario, perciò la parte di fluido compresa fra le due posizioni intermedie ha la stessa distribuzione di velocità e di quote prima e dopo: l'effetto complessivo dello spostamento è che la massa $dm$ passa dalla quota $y_1$ con velocità $v_1$ alla quota $y_2$ con velocità $v_2$. Il lavoro della forza peso è quindi $-dm\, g\,(y_2 - y_1)$ e la variazione di energia cinetica è $\dfrac{1}{2}\, dm\,(v_2^2 - v_1^2)$.

Per il **teorema dell'energia cinetica**
$$
\frac{1}{2}\,\rho\, dV\,(v_2^2 - v_1^2) = (p_1 - p_2)\, dV - \rho\, dV\, g\,(y_2 - y_1) ,
$$
e dividendo per $dV$ e portando a primo membro i termini con l'indice $1$ si ottiene la tesi.
:::
::::

:::osservazione{#bernoulli-e-stevino titolo="Bernoulli per un fluido in quiete"}
Se il fluido è fermo, $v_1 = v_2 = 0$ e il teorema di Bernoulli si riduce a $p_2 = p_1 + \rho g\,(y_1 - y_2)$, cioè alla **legge di Stevino**. Se invece il condotto è orizzontale, $y_1 = y_2$ e resta $p_1 + \dfrac{1}{2}\rho v_1^2 = p_2 + \dfrac{1}{2}\rho v_2^2$, quindi dove la velocità è maggiore la pressione è minore. Su questa relazione si basa il tubo di Venturi.
:::

## Applicazioni: Torricelli e Venturi

::::teorema{#teorema-di-torricelli titolo="Teorema di Torricelli"}
Un serbatoio aperto contiene un liquido ideale, e sulla sua parete c'è un foro di area $a$ molto minore dell'area $A$ della superficie libera, a una profondità $h$ sotto la superficie libera. Allora il liquido esce dal foro con velocità
$$
v = \sqrt{2 g h} .
$$
È la stessa velocità che acquista un corpo in caduta libera da un'altezza $h$. Il teorema dà la portata del foro, $Q = a\sqrt{2gh}$, e insieme alle leggi del moto del proiettile la traiettoria del getto; da un foro $1{,}25\,\mathrm{m}$ sotto la superficie l'acqua esce a $\sqrt{2 \cdot 9{,}81 \cdot 1{,}25} \approx 4{,}95\,\mathrm{m/s}$.

::grafico{curve="0.5+2*(abs(t-1)-abs(t-2)+1)/2,3.2-3.2*(abs(t)-abs(t-1)+1)/2+0.3*(abs(t-2)-abs(t-3)+1)/2+999.7*(abs(t-3)-abs(t-4)+1)/2-999.5*(abs(t-5)-abs(t-6)+1)/2+2.7*(abs(t-6)-abs(t-7)+1)/2,0,7;2.5+t,0.4-t^2/8.4,0,1.833" area="2.5;0;0.5;2.5" vettori="2.5,0.4,3.2,0.4,v" segmenti="2.2,0.4,2.2,2.5" etichette="1.95,1.4,h" xmin=0 xmax=4.8 ymin=0 ymax=3.2 uguale=1 titolo="Dal foro a profondità $h$ sotto la superficie libera il liquido esce con velocità $v = \sqrt{2 g h}$ e descrive un arco di parabola"}

:::dimostrazione
Si applica il **teorema di Bernoulli** fra un punto della superficie libera e un punto del getto appena fuori dal foro, prendendo la quota del foro come zero. Entrambi i punti sono a contatto con l'aria, quindi hanno pressione $p_0$. Per l'**equazione di continuità** la superficie libera scende con velocità $\dfrac{a}{A}\, v$, che si trascura perché $a \ll A$. Allora
$$
p_0 + 0 + \rho g h = p_0 + \frac{1}{2}\rho v^2 + 0 ,
$$
e risolvendo rispetto a $v$ si ottiene $v = \sqrt{2gh}$. Se l'area del foro non è trascurabile, lo stesso calcolo con la velocità della superficie dà $v = \sqrt{\dfrac{2gh}{1 - \left( \dfrac{a}{A} \right)^2}}$.
:::
::::

::::teorema{#tubo-di-venturi titolo="Tubo di Venturi"}
Un condotto orizzontale di sezione $A_1$ presenta una strozzatura di sezione $A_2 < A_1$ ed è percorso da un fluido ideale di densità $\rho$. Se la differenza di pressione tra la sezione larga e la strozzatura è $\Delta p = p_1 - p_2$, la velocità nella sezione larga è
$$
v_1 = \sqrt{\frac{2\,\Delta p}{\rho\left( \dfrac{A_1^2}{A_2^2} - 1 \right)}} ,
$$
e la portata è $Q = A_1 v_1$. Il tubo di Venturi è quindi un misuratore di portata che richiede soltanto la misura di una differenza di pressione. Quando la pressione si legge con due tubi verticali aperti, collegati alle due sezioni e riempiti dallo stesso liquido che scorre nel condotto, la **legge di Stevino** applicata nei tubi dà $\Delta p = \rho g\, \Delta h$, dove $\Delta h$ è il dislivello tra le colonne.

::grafico{curve="0+1.3*(abs(t)-abs(t-1)+1)/2+0.4*(abs(t-3)-abs(t-4)+1)/2+0.8*(abs(t-6)-abs(t-7)+1)/2+1*(abs(t-7)-abs(t-8)+1)/2+0.3*(abs(t-8)-abs(t-9)+1)/2+0.4*(abs(t-11)-abs(t-12)+1)/2+0.3*(abs(t-14)-abs(t-15)+1)/2+1*(abs(t-15)-abs(t-16)+1)/2+2.5*(abs(t-16)-abs(t-17)+1)/2-8*(abs(t-18)-abs(t-19)+1)/2+2.5*(abs(t-20)-abs(t-21)+1)/2+1*(abs(t-21)-abs(t-22)+1)/2+1*(abs(t-22)-abs(t-23)+1)/2+1*(abs(t-23)-abs(t-24)+1)/2+2.5*(abs(t-24)-abs(t-25)+1)/2,1+2.6*(abs(t-1)-abs(t-2)+1)/2+996.4*(abs(t-2)-abs(t-3)+1)/2-996.4*(abs(t-4)-abs(t-5)+1)/2-2.6*(abs(t-5)-abs(t-6)+1)/2-0.5*(abs(t-7)-abs(t-8)+1)/2+3.1*(abs(t-9)-abs(t-10)+1)/2+996.4*(abs(t-10)-abs(t-11)+1)/2-996.4*(abs(t-12)-abs(t-13)+1)/2-3.1*(abs(t-13)-abs(t-14)+1)/2+0.5*(abs(t-15)-abs(t-16)+1)/2+999*(abs(t-17)-abs(t-18)+1)/2-1001*(abs(t-19)-abs(t-20)+1)/2+0.5*(abs(t-21)-abs(t-22)+1)/2-0.5*(abs(t-23)-abs(t-24)+1)/2,0,25" area="1-0.5*(abs(x-2.5)-abs(x-2.5-1)+1)/2+0.5*(abs(x-4.5)-abs(x-4.5-1)+1)/2;-(1-0.5*(abs(x-2.5)-abs(x-2.5-1)+1)/2+0.5*(abs(x-4.5)-abs(x-4.5-1)+1)/2);0;8|3;1;1.3;1.7|1.8;0.5;3.8;4.2" segmenti="1.7,3,4.8,3;4.2,1.8,4.8,1.8;4.8,1.8,4.8,3" etichette="4.95,2.35,Δh;0.95,-0.75,A₁;3.6,-0.3,A₂" vettori="0.3,0.4,0.7,0.4,v₁;3.2,0.2,4.8,0.2,v₂" xmin=0 xmax=8 ymin=-1.4 ymax=3.8 uguale=1 titolo="Tubo di Venturi: nella strozzatura la velocità è maggiore e la pressione minore, e il dislivello $\Delta h$ nei tubi verticali misura $p_1 - p_2$"}

:::dimostrazione
Per l'**equazione di continuità** $v_2 = \dfrac{A_1}{A_2}\, v_1$. Il condotto è orizzontale, quindi il **teorema di Bernoulli** fra le due sezioni dà
$$
p_1 - p_2 = \frac{1}{2}\rho\,(v_2^2 - v_1^2) = \frac{1}{2}\rho\, v_1^2 \left( \frac{A_1^2}{A_2^2} - 1 \right) .
$$
Poiché $A_1 > A_2$, il fattore tra parentesi è positivo, quindi $p_1 > p_2$ e si può risolvere rispetto a $v_1$, ottenendo la formula dell'enunciato.
:::
::::

## Viscosità

:::definizione{#viscosita titolo="Viscosità"}
In un fluido reale gli strati che scorrono a velocità diverse si scambiano forze tangenti, come un attrito interno. Si considerano due lastre piane parallele di area $A$, a distanza $d$, con il fluido in mezzo: una lastra è ferma e l'altra si muove con velocità $v$. Per molti fluidi, detti newtoniani, la forza necessaria a mantenere il moto è
$$
F = \eta\, A\, \frac{v}{d} ,
$$
dove $\eta$ è la **viscosità** del fluido, che si misura in $\mathrm{Pa \cdot s}$. A $20\,^{\circ}\mathrm{C}$ l'acqua ha $\eta \approx 1{,}0 \cdot 10^{-3}\,\mathrm{Pa \cdot s}$ e l'aria $\eta \approx 1{,}8 \cdot 10^{-5}\,\mathrm{Pa \cdot s}$; nei liquidi la viscosità diminuisce al crescere della temperatura. La viscosità è la causa della dissipazione di energia nei condotti, di cui il teorema di Bernoulli non tiene conto.
:::

:::teorema{#legge-di-poiseuille titolo="Legge di Poiseuille"}
In un tubo cilindrico orizzontale di raggio $R$ e lunghezza $L$, un fluido newtoniano di viscosità $\eta$ in moto laminare stazionario ha portata
$$
Q = \frac{\pi R^4\, \Delta p}{8\, \eta L} ,
$$
dove $\Delta p$ è la differenza di pressione tra le estremità. La legge si ricava imponendo l'equilibrio tra le forze di pressione e le forze viscose su ogni strato cilindrico di fluido; ne risulta un profilo di velocità parabolico, massimo sull'asse e nullo sulla parete, la cui integrazione sulla sezione dà $Q$. Il calcolo si omette. A parità di $\Delta p$, la portata è proporzionale alla quarta potenza del raggio, perciò dimezzando il raggio di un tubo la portata diventa $\dfrac{1}{16}$ di quella iniziale.
:::

:::osservazione{#numero-di-reynolds titolo="Moto laminare e turbolento"}
Il moto di un fluido in un tubo è **laminare** quando gli strati scorrono ordinatamente uno accanto all'altro, **turbolento** quando si formano vortici che rimescolano il fluido. Il regime dipende dal **numero di Reynolds**
$$
\mathrm{Re} = \frac{\rho\, v D}{\eta} ,
$$
dove $v$ è la velocità media e $D$ il diametro del tubo; $\mathrm{Re}$ è un numero puro. Nei tubi cilindrici il moto è laminare per $\mathrm{Re}$ minore di circa $2000$, e solo in quel caso vale la legge di Poiseuille. Per l'acqua a $0{,}10\,\mathrm{m/s}$ in un tubo di diametro $1{,}0\,\mathrm{cm}$ si ha $\mathrm{Re} = \dfrac{1000 \cdot 0{,}10 \cdot 0{,}010}{1{,}0 \cdot 10^{-3}} = 1000$, quindi il moto è laminare.
:::
