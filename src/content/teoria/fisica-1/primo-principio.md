---
titolo: Temperatura, calore e primo principio della termodinamica
sommario: Come si misura la temperatura, come il calore cambia temperatura e stato dei corpi, come si descrive un gas perfetto e come il primo principio collega calore, lavoro ed energia interna nelle trasformazioni e nei cicli.
---

## Temperatura ed equilibrio termico

:::definizione{#sistema-termodinamico titolo="Sistema termodinamico e variabili di stato"}
Un **sistema termodinamico** è una porzione di materia separata dal resto, l'ambiente, da una superficie reale o ideale; un gas chiuso in un cilindro con pistone ne è l'esempio tipico. Il sistema è *chiuso* se non scambia materia con l'ambiente, *isolato* se non scambia né materia né energia. Lo stato di equilibrio di un sistema si descrive con poche grandezze macroscopiche, le **variabili di stato**: per un gas sono la pressione $p$, il volume $V$, la temperatura $T$ e la quantità di sostanza $n$. Una grandezza che dipende solo dallo stato, e non dal modo in cui il sistema ci è arrivato, si chiama **funzione di stato**; l'energia interna ne sarà l'esempio principale.
:::

:::definizione{#equilibrio-termico titolo="Equilibrio termico"}
Due sistemi messi in contatto attraverso una parete che consente scambi di energia, detta parete **diatermica**, evolvono finché le loro variabili di stato smettono di cambiare; a quel punto si dicono in **equilibrio termico**. Una parete che impedisce questi scambi si dice **adiabatica**, e un thermos approssima un recipiente con pareti adiabatiche. Ogni misura di temperatura si basa sull'equilibrio termico, perché il termometro indica il proprio stato quando ha raggiunto l'equilibrio con il corpo misurato.
:::

:::teorema{#principio-zero titolo="Principio zero della termodinamica"}
Se due sistemi $A$ e $B$ sono ciascuno in equilibrio termico con un terzo sistema $C$, allora $A$ e $B$ sono in equilibrio termico tra loro.

È un principio, cioè un'affermazione ricavata dall'esperienza e non dimostrabile a partire da altre leggi. Permette di definire la **temperatura** come la grandezza che assume lo stesso valore in tutti i sistemi in equilibrio termico tra loro, e giustifica l'uso del termometro. Il termometro ha il ruolo del sistema $C$; se segna lo stesso valore a contatto con $A$ e con $B$, allora i due corpi sono in equilibrio termico anche senza essere mai stati messi a contatto.
:::

:::definizione{#scale-termometriche titolo="Scale termometriche"}
Una **scala termometrica** associa un numero alla temperatura per mezzo di una grandezza che varia con essa, come la lunghezza di una colonna di mercurio o la pressione di un gas a volume costante, e di due punti fissi riproducibili. Le scale in uso sono tre.

- Scala Celsius: $0\,^\circ\mathrm{C}$ è la fusione del ghiaccio e $100\,^\circ\mathrm{C}$ l'ebollizione dell'acqua alla pressione di $1\,\mathrm{atm}$.
- Scala Kelvin, o assoluta, che è quella del Sistema Internazionale: ha gli stessi intervalli della Celsius e lo zero nello **zero assoluto**, la temperatura minima, che non si può raggiungere; vale $T = t_C + 273{,}15$, con $T$ in kelvin e $t_C$ in gradi Celsius.
- Scala Fahrenheit: la fusione del ghiaccio è a $32\,^\circ\mathrm{F}$ e l'ebollizione a $212\,^\circ\mathrm{F}$, quindi cento gradi Celsius corrispondono a centottanta gradi Fahrenheit e $t_F = \dfrac{9}{5}\,t_C + 32$.

Poiché il kelvin e il grado Celsius hanno la stessa ampiezza, una *differenza* di temperatura ha lo stesso valore nelle due scale: $\Delta T = 20\,\mathrm{K}$ equivale a $\Delta t_C = 20\,^\circ\mathrm{C}$. Nelle formule che contengono $T$ e non $\Delta T$, come l'equazione di stato dei gas, si usa invece la temperatura in kelvin. Per esempio $37\,^\circ\mathrm{C}$ corrispondono a $310{,}15\,\mathrm{K}$ e a $\dfrac{9}{5} \cdot 37 + 32 = 98{,}6\,^\circ\mathrm{F}$.
:::

## Dilatazione termica

:::definizione{#dilatazione-lineare titolo="Dilatazione lineare"}
Quando la temperatura di un solido aumenta, in generale le sue dimensioni aumentano. Per una sbarra di lunghezza $L_0$ alla temperatura $T_0$, in un intervallo di temperatura non troppo ampio, l'allungamento è proporzionale alla lunghezza iniziale e alla variazione di temperatura:
$$
\Delta L = \alpha\, L_0\, \Delta T, \qquad L = L_0\,(1 + \alpha\,\Delta T) .
$$
La costante $\alpha$ è il **coefficiente di dilatazione lineare**, si misura in $\mathrm{K^{-1}}$ e dipende dal materiale; vale circa $1{,}2 \cdot 10^{-5}\,\mathrm{K^{-1}}$ per l'acciaio e $2{,}3 \cdot 10^{-5}\,\mathrm{K^{-1}}$ per l'alluminio. La legge è sperimentale e serve a dimensionare i giunti di dilatazione di ponti e binari. Una rotaia di acciaio lunga $10\,\mathrm{m}$ che si scalda di $30\,\mathrm{K}$ si allunga di $1{,}2 \cdot 10^{-5} \cdot 10 \cdot 30\,\mathrm{m} = 3{,}6\,\mathrm{mm}$.
:::

:::teorema{#dilatazione-volumica titolo="Dilatazione superficiale e volumica"}
Sia dato un solido omogeneo e isotropo con coefficiente di dilatazione lineare $\alpha$. Per piccole variazioni di temperatura, una superficie $S_0$ e un volume $V_0$ del solido variano di
$$
\Delta S = 2\alpha\, S_0\, \Delta T, \qquad \Delta V = \beta\, V_0\, \Delta T \quad \text{con } \beta = 3\alpha .
$$
Per un cubo di spigolo $\ell_0$ si ha infatti $V = \ell_0^3\,(1 + \alpha\,\Delta T)^3 = V_0\,(1 + 3\alpha\,\Delta T + 3\alpha^2 \Delta T^2 + \alpha^3 \Delta T^3)$, e poiché $\alpha\,\Delta T$ è dell'ordine di $10^{-3}$ i termini con $\alpha^2$ e $\alpha^3$ sono trascurabili; per la superficie il ragionamento è lo stesso con il quadrato. Un foro in una lastra si dilata come se fosse pieno dello stesso materiale, e su questo fatto si basa il montaggio a caldo di anelli metallici su un albero. Per i liquidi si considera solo la dilatazione volumica, con un coefficiente $\beta$ misurato direttamente e in genere maggiore di quello dei solidi. Quando un liquido riempie fino all'orlo un recipiente e i due si scaldano insieme, il volume che trabocca è $(\beta_{\ell} - 3\alpha_r)\,V_0\,\Delta T$, dove $\beta_{\ell}$ è il coefficiente del liquido e $\alpha_r$ quello del recipiente.
:::

:::osservazione{#acqua-anomala titolo="Comportamento dell'acqua"}
L'acqua tra $0\,^\circ\mathrm{C}$ e $4\,^\circ\mathrm{C}$ si contrae quando viene scaldata, quindi la sua densità è massima a circa $4\,^\circ\mathrm{C}$. Per questo motivo in un lago che gela d'inverno l'acqua del fondo resta a circa $4\,^\circ\mathrm{C}$, mentre il ghiaccio, meno denso dell'acqua liquida, si forma in superficie.
:::

## Calore e calorimetria

:::definizione{#calore titolo="Calore"}
Il **calore** $Q$ è l'energia che passa da un sistema a un altro a causa di una differenza di temperatura. Il calore è energia in transito; un corpo *possiede* energia interna e *scambia* calore con altri corpi. Si misura in joule. La vecchia unità, la **caloria**, è il calore che innalza da $14{,}5\,^\circ\mathrm{C}$ a $15{,}5\,^\circ\mathrm{C}$ la temperatura di $1\,\mathrm{g}$ di acqua, e vale $1\,\mathrm{cal} = 4{,}186\,\mathrm{J}$. L'equivalenza fu stabilita da Joule, che scaldò una massa d'acqua con un mulinello azionato da pesi in caduta e trovò che a un dato lavoro meccanico corrisponde sempre lo stesso aumento di temperatura. Nella convenzione adottata $Q > 0$ quando il sistema assorbe calore e $Q < 0$ quando lo cede.
:::

:::definizione{#capacita-termica titolo="Capacità termica e calore specifico"}
Se un corpo assorbe il calore $Q$ e la sua temperatura passa da $T_i$ a $T_f$ senza cambiamenti di stato, la sua **capacità termica** è
$$
C = \frac{Q}{\Delta T}, \qquad \Delta T = T_f - T_i ,
$$
e si misura in $\mathrm{J/K}$. Per un corpo omogeneo di massa $m$ la capacità termica è proporzionale alla massa, $C = m\,c$, e la costante $c$ è il **calore specifico** del materiale, in $\mathrm{J/(kg\cdot K)}$. Ne segue la legge della calorimetria
$$
Q = m\,c\,\Delta T .
$$
L'acqua ha $c_a = 4186\,\mathrm{J/(kg\cdot K)}$, un valore alto rispetto ai metalli: circa $900\,\mathrm{J/(kg\cdot K)}$ per l'alluminio, $450$ per il ferro, $385$ per il rame. Perciò, a parità di massa e di calore assorbito, l'aumento di temperatura dell'acqua è circa un undicesimo di quello del rame. Per scaldare $2{,}0\,\mathrm{kg}$ di acqua da $20\,^\circ\mathrm{C}$ a $70\,^\circ\mathrm{C}$ servono $2{,}0 \cdot 4186 \cdot 50\,\mathrm{J} \approx 4{,}2 \cdot 10^5\,\mathrm{J}$.
:::

:::osservazione{#calore-specifico-variabile titolo="Calore specifico variabile"}
Il calore specifico dipende debolmente dalla temperatura, e negli esercizi si considera costante. Quando la dipendenza non è trascurabile, la legge vale per un intervallo infinitesimo, $\delta Q = m\,c(T)\,dT$, e il calore scambiato è un integrale:
$$
Q = m \int_{T_i}^{T_f} c(T)\, dT .
$$
Il simbolo $\delta Q$ ricorda che il calore non è il differenziale di una funzione di stato, perché il calore scambiato tra due stati dipende dalla trasformazione seguita, come mostra il primo principio.
:::

::::teorema{#temperatura-di-equilibrio titolo="Temperatura di equilibrio"}
Due corpi di masse $m_1$, $m_2$, calori specifici $c_1$, $c_2$ e temperature iniziali $T_1$, $T_2$ sono messi in contatto in un recipiente con pareti adiabatiche e capacità termica trascurabile, detto **calorimetro** ideale. Se non avvengono cambiamenti di stato, i due corpi raggiungono la temperatura di equilibrio
$$
T_e = \frac{m_1 c_1 T_1 + m_2 c_2 T_2}{m_1 c_1 + m_2 c_2} .
$$
$T_e$ è la media delle temperature iniziali pesata con le capacità termiche, quindi è compresa tra $T_1$ e $T_2$ ed è più vicina alla temperatura del corpo con capacità termica maggiore. La formula si estende a più corpi sommando un termine per ciascuno, e vale con le temperature in gradi Celsius come in kelvin, perché lo spostamento dello zero si semplifica tra numeratore e denominatore. Mescolando $1{,}0\,\mathrm{kg}$ di acqua a $80\,^\circ\mathrm{C}$ con $2{,}0\,\mathrm{kg}$ di acqua a $20\,^\circ\mathrm{C}$ si ottiene $T_e = \dfrac{80 + 2 \cdot 20}{3}\,^\circ\mathrm{C} = 40\,^\circ\mathrm{C}$.

::grafico{f="40+40*exp(-x);40-20*exp(-x)" asintoti="y=40" xmin=0 xmax=5 ymin=0 ymax=100 nomi="t,T" etichette="0.25,88,corpo 1;0.25,12,corpo 2;3.4,46,Tₑ = 40 °C" titolo="Le temperature di $1{,}0\,\mathrm{kg}$ di acqua a $80\,^\circ\mathrm{C}$ e di $2{,}0\,\mathrm{kg}$ di acqua a $20\,^\circ\mathrm{C}$ tendono a $T_e = 40\,^\circ\mathrm{C}$; la temperatura del corpo con capacità termica doppia varia della metà"}

:::dimostrazione
Le pareti sono adiabatiche e il recipiente non assorbe calore, quindi il calore ceduto da un corpo è tutto assorbito dall'altro e la somma dei calori scambiati è nulla:
$$
Q_1 + Q_2 = m_1 c_1 (T_e - T_1) + m_2 c_2 (T_e - T_2) = 0 .
$$
Raccogliendo $T_e$ si ottiene $(m_1 c_1 + m_2 c_2)\,T_e = m_1 c_1 T_1 + m_2 c_2 T_2$, e poiché $m_1 c_1 + m_2 c_2 > 0$ si può dividere, da cui la tesi.
:::
::::

:::osservazione{#equivalente-in-acqua titolo="Calorimetro reale ed equivalente in acqua"}
Un calorimetro reale assorbe una parte del calore. Se ne tiene conto con l'**equivalente in acqua** $m_e$, la massa d'acqua che ha la stessa capacità termica del recipiente, del termometro e dell'agitatore; nel bilancio dei calori, quindi, il calorimetro compare come una massa $m_e$ di acqua alla temperatura iniziale del liquido che contiene. L'equivalente in acqua si ricava da un primo esperimento con sole masse d'acqua, e permette poi di misurare il calore specifico di un materiale incognito.
:::

## Cambiamenti di stato e propagazione del calore

:::definizione{#calore-latente titolo="Calore latente"}
Durante un **cambiamento di stato** a pressione costante (fusione, solidificazione, vaporizzazione, condensazione) la temperatura resta costante, e il calore assorbito modifica la struttura della sostanza. Il calore necessario per far cambiare stato a una massa $m$ è
$$
Q = m\,\lambda ,
$$
dove $\lambda$ è il **calore latente** della trasformazione, in $\mathrm{J/kg}$. Per l'acqua a $1\,\mathrm{atm}$ il calore latente di fusione è $\lambda_f = 3{,}33 \cdot 10^5\,\mathrm{J/kg}$ a $0\,^\circ\mathrm{C}$ e quello di vaporizzazione è $\lambda_v = 2{,}26 \cdot 10^6\,\mathrm{J/kg}$ a $100\,^\circ\mathrm{C}$. Nella trasformazione inversa (solidificazione, condensazione) la sostanza cede lo stesso calore, quindi $Q = -m\,\lambda$. Fondere $1\,\mathrm{kg}$ di ghiaccio richiede quanto scaldare $1\,\mathrm{kg}$ di acqua di circa $80\,\mathrm{K}$.

::grafico{f="min(0,-20+20*x/0.418)+max(0,min(100,100*(x-3.748)/4.186))+max(0,20*(x-30.534)/0.402)+0*sqrt(30.936-x)" xmin=0 xmax=31 ymin=-40 ymax=160 nomi="Q,T" etichette="0.6,12,fusione;13,112,vaporizzazione" titolo="Temperatura di $0{,}10\,\mathrm{kg}$ di acqua in funzione del calore assorbito, da ghiaccio a $-20\,^\circ\mathrm{C}$ a vapore a $120\,^\circ\mathrm{C}$, con $Q$ in $10^4\,\mathrm{J}$; i tratti orizzontali corrispondono ai cambiamenti di stato"}

:::

:::osservazione{#bilancio-con-cambiamenti-di-stato titolo="Bilanci di calore con cambiamenti di stato"}
Quando in un calorimetro si mescolano ghiaccio e acqua, lo stato finale non è noto in partenza. Si confrontano allora due quantità, calcolate prendendo $0\,^\circ\mathrm{C}$ come temperatura di riferimento: il calore $Q_{\text{disp}}$ che l'acqua cede raffreddandosi fino a $0\,^\circ\mathrm{C}$ e il calore $Q_{\text{fus}}$ che serve per portare il ghiaccio a $0\,^\circ\mathrm{C}$ e fonderlo tutto.

- Se $Q_{\text{disp}} > Q_{\text{fus}}$, il ghiaccio fonde completamente e la temperatura finale, superiore a $0\,^\circ\mathrm{C}$, si ricava dal bilancio $\sum Q = 0$ con il termine $m\,\lambda_f$.
- Se $Q_{\text{disp}} < Q_{\text{fus}}$, il ghiaccio fonde solo in parte, la temperatura finale è $0\,^\circ\mathrm{C}$ e la massa fusa si ricava dal calore che resta disponibile dopo il riscaldamento del ghiaccio fino a $0\,^\circ\mathrm{C}$.
- Se $Q_{\text{disp}}$ è minore anche del calore che serve solo a portare il ghiaccio a $0\,^\circ\mathrm{C}$, è una parte dell'acqua a solidificare, e il ragionamento si ripete scambiando i ruoli.
:::

:::teorema{#legge-di-fourier titolo="Legge di Fourier della conduzione"}
Una parete piana di spessore $d$ e area $A$, con le facce mantenute alle temperature $T_1 > T_2$, è attraversata dal calore $Q$ nel tempo $\Delta t$ con potenza
$$
P = \frac{Q}{\Delta t} = k\,A\,\frac{T_1 - T_2}{d} .
$$
È una legge sperimentale. La costante $k$ è la **conducibilità termica** del materiale, in $\mathrm{W/(m\cdot K)}$, alta nei metalli (circa $400$ per il rame) e bassa negli isolanti (circa $0{,}04$ per la lana di vetro). In regime stazionario la temperatura all'interno della parete diminuisce linearmente da una faccia all'altra. La legge serve a stimare le dispersioni di un edificio: un muro di $10\,\mathrm{m^2}$ spesso $30\,\mathrm{cm}$, con $k = 0{,}60\,\mathrm{W/(m\cdot K)}$ e facce a $18\,^\circ\mathrm{C}$ e $4\,^\circ\mathrm{C}$, disperde $P = 0{,}60 \cdot 10 \cdot \dfrac{14}{0{,}30}\,\mathrm{W} = 280\,\mathrm{W}$.

::grafico{f="18-14*x/30+0*sqrt(x*(30-x))" area="20;0;0;30" xmin=-10 xmax=40 ymin=0 ymax=20 nomi="x,T" punti="0,18,pieno;30,4,pieno" etichette="1.5,19,T₁ = 18 °C;31,6,T₂ = 4 °C" titolo="Profilo di temperatura nel muro, con $x$ in centimetri: in regime stazionario $T$ decresce linearmente da $T_1$ a $T_2$"}

:::

:::osservazione{#convezione-e-irraggiamento titolo="Convezione e irraggiamento"}
La conduzione trasferisce energia senza spostamento di materia. Nei fluidi il calore si propaga anche per **convezione**, che comporta un trasporto di materia; il fluido scaldato si dilata, diventa meno denso e sale, e il suo posto è preso da fluido più freddo. L'**irraggiamento** è l'emissione di onde elettromagnetiche e avviene anche nel vuoto. Un corpo di area $A$ e temperatura assoluta $T$ emette la potenza $P = e\,\sigma\,A\,T^4$ (**legge di Stefan-Boltzmann**), con $\sigma = 5{,}67 \cdot 10^{-8}\,\mathrm{W/(m^2\cdot K^4)}$ ed emissività $0 \le e \le 1$.
:::

## Gas perfetto ed equazione di stato

:::definizione{#gas-perfetto titolo="Gas perfetto"}
Un **gas perfetto** è un modello di gas in cui le molecole hanno volume proprio trascurabile e interagiscono solo con urti elastici, senza forze a distanza. I gas reali rarefatti, a pressioni non troppo alte e a temperature lontane da quella di liquefazione, ne seguono bene il comportamento; l'aria a pressione atmosferica e temperatura ambiente è un esempio. La quantità di gas si misura in **moli**. Una mole contiene $N_A = 6{,}022 \cdot 10^{23}$ particelle (**numero di Avogadro**), e $n = \dfrac{m}{M}$, dove $M$ è la massa molare: $32{,}0\,\mathrm{g/mol}$ per l'ossigeno $\mathrm{O_2}$, $28{,}0\,\mathrm{g/mol}$ per l'azoto $\mathrm{N_2}$, circa $29\,\mathrm{g/mol}$ per l'aria.
:::

:::teorema{#leggi-dei-gas titolo="Leggi di Boyle e di Gay-Lussac"}
Per una quantità fissata di gas perfetto valgono le leggi sperimentali seguenti.

- **Legge di Boyle**, a temperatura costante: $pV = \text{costante}$.
- **Prima legge di Gay-Lussac**, a pressione costante: $V = V_0\,(1 + \alpha_0\, t_C)$, cioè $\dfrac{V}{T} = \text{costante}$.
- **Seconda legge di Gay-Lussac**, a volume costante: $p = p_0\,(1 + \alpha_0\, t_C)$, cioè $\dfrac{p}{T} = \text{costante}$.

Qui $V_0$ e $p_0$ sono i valori a $0\,^\circ\mathrm{C}$, e $\alpha_0 = \dfrac{1}{273{,}15}\,\mathrm{K^{-1}}$ è lo stesso per tutti i gas. Estrapolate, le due leggi di Gay-Lussac danno volume e pressione nulli a $t_C = -273{,}15\,^\circ\mathrm{C}$; da qui nasce la scala Kelvin, nella quale le leggi diventano proporzionalità dirette. Un gas chiuso in un recipiente rigido a $27\,^\circ\mathrm{C}$ e portato a $327\,^\circ\mathrm{C}$ raddoppia la pressione, perché la temperatura assoluta passa da $300\,\mathrm{K}$ a $600\,\mathrm{K}$.
:::

:::teorema{#equazione-di-stato titolo="Equazione di stato del gas perfetto"}
Gli stati di equilibrio di $n$ moli di gas perfetto soddisfano
$$
pV = nRT ,
$$
con $p$ in pascal, $V$ in metri cubi, $T$ in kelvin e $R = 8{,}314\,\mathrm{J/(mol\cdot K)}$ (**costante dei gas**). L'equazione riassume in una sola relazione le leggi di Boyle e di Gay-Lussac e la legge di Avogadro, secondo cui volumi uguali di gas diversi, alla stessa pressione e temperatura, contengono lo stesso numero di moli. Scritta con il numero di molecole $N = n N_A$ diventa $pV = N k_B T$, con $k_B = \dfrac{R}{N_A} = 1{,}38 \cdot 10^{-23}\,\mathrm{J/K}$ (**costante di Boltzmann**). Due delle tre variabili $p$, $V$, $T$ determinano la terza, quindi lo stato di equilibrio di una quantità fissata di gas è un punto del **piano di Clapeyron** $(V, p)$. Una mole a $0\,^\circ\mathrm{C}$ e $1{,}013 \cdot 10^5\,\mathrm{Pa}$ occupa $V = \dfrac{8{,}314 \cdot 273{,}15}{1{,}013 \cdot 10^5}\,\mathrm{m^3} = 22{,}4 \cdot 10^{-3}\,\mathrm{m^3}$, cioè $22{,}4\,\mathrm{L}$.

::grafico{f="2/x;4/x;6/x" xmin=0 xmax=6 ymin=0 ymax=5 nomi="V,p" etichette="3.05,2.15,T₃;3.05,1.48,T₂;3.05,0.82,T₁" titolo="Isoterme del gas perfetto nel piano $(V, p)$, in unità arbitrarie: sono rami di iperbole $pV = nRT$, più lontani dagli assi per temperature maggiori, con $T_1 < T_2 < T_3$"}

:::

## Lavoro termodinamico

:::definizione{#trasformazione-quasistatica titolo="Trasformazione quasistatica"}
Una **trasformazione** è il passaggio di un sistema da uno stato di equilibrio a un altro. È **quasistatica** se avviene così lentamente che il sistema passa per una successione di stati di equilibrio; in questo caso in ogni istante $p$, $V$, $T$ sono definite, e la trasformazione si rappresenta con una curva nel piano $(V, p)$. Una trasformazione quasistatica senza attriti è **reversibile**: invertendo di poco le condizioni esterne, il sistema ripercorre gli stessi stati in senso opposto. Un'espansione rapida, come quella di un gas che esce da una bombola forata, è irreversibile, e nel piano $(V, p)$ se ne rappresentano solo gli stati iniziale e finale.
:::

:::definizione{#lavoro-termodinamico titolo="Lavoro termodinamico"}
Un gas alla pressione $p$ è chiuso in un cilindro da un pistone di area $A$. Se il pistone si sposta di $dx$ verso l'esterno, il gas esercita la forza $pA$ lungo lo spostamento e compie il lavoro $\delta L = pA\,dx = p\,dV$. In una trasformazione quasistatica dal volume $V_i$ al volume $V_f$ il **lavoro fatto dal sistema** è
$$
L = \int_{V_i}^{V_f} p\, dV .
$$
Il lavoro è positivo in un'espansione, dove $dV > 0$, negativo in una compressione e nullo se il volume non cambia. A pressione costante l'integrale vale $L = p\,(V_f - V_i)$; un gas a $2{,}0 \cdot 10^5\,\mathrm{Pa}$ che si espande da $1{,}0\,\mathrm{L}$ a $3{,}0\,\mathrm{L}$ compie $L = 2{,}0 \cdot 10^5 \cdot 2{,}0 \cdot 10^{-3}\,\mathrm{J} = 400\,\mathrm{J}$. Nelle formule i volumi si esprimono in metri cubi, con $1\,\mathrm{L} = 10^{-3}\,\mathrm{m^3}$.
:::

:::richiamo{titolo="Integrale definito"}
Se $f$ è continua su $[a, b]$ e $F$ è una sua primitiva, allora $\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)$, e per $f \geq 0$ l'integrale è l'area sotto il grafico. In particolare, per $a, b > 0$, $\displaystyle\int_a^b \frac{dx}{x} = \ln\frac{b}{a}$. Si rimanda all'argomento sugli integrali di Analisi 1.
:::

:::osservazione{#lavoro-come-area titolo="Lavoro come area nel piano (V, p)"}
Poiché $L$ è l'integrale di $p$ rispetto a $V$, il lavoro di un'espansione quasistatica è l'**area** sotto la curva della trasformazione nel piano $(V, p)$, tra $V_i$ e $V_f$; in una compressione l'area è la stessa e il lavoro ha segno negativo. Due trasformazioni con gli stessi stati iniziale e finale possono avere aree diverse sotto la curva, perciò il lavoro *dipende dalla trasformazione* e non è una funzione di stato.

::grafico{f="6/x" area="6/x;0;1.5;4" punti="1.5,4,pieno,A;4,1.5,pieno,B" segmenti="1.5,0,1.5,4;4,0,4,1.5" xmin=0 xmax=6 ymin=0 ymax=5 nomi="V,p" titolo="Il lavoro dell'espansione da $A$ a $B$ è l'area sotto la curva, $L = \displaystyle\int_{V_A}^{V_B} p\,dV$; $V$ e $p$ in unità arbitrarie"}

::grafico{vettori="1,1,1,3;1,3,4,3;1,1,4,1;4,1,4,3" area="3;0;1;4" punti="1,1,pieno,A;4,3,pieno,B;1,3,pieno,C;4,1,pieno,D" xmin=0 xmax=5 ymin=0 ymax=4 nomi="V,p" titolo="Da $A$ a $B$ lungo $ACB$ il lavoro è l'area colorata, $3 \cdot 3 = 9$ con $V$ e $p$ in unità arbitrarie; lungo $ADB$ è l'area sotto il segmento $AD$, $3 \cdot 1 = 3$"}

:::

## Primo principio della termodinamica

:::definizione{#energia-interna titolo="Energia interna"}
L'**energia interna** $U$ di un sistema è la somma delle energie cinetiche delle sue particelle, misurate nel riferimento del centro di massa, e delle energie potenziali delle loro interazioni. È una funzione di stato, quindi dipende solo dallo stato del sistema e non dalla sua storia. In una trasformazione conta la variazione $\Delta U = U_f - U_i$, che è la stessa per tutte le trasformazioni tra gli stessi due stati.
:::

:::teorema{#primo-principio titolo="Primo principio della termodinamica"}
In ogni trasformazione di un sistema chiuso tra due stati di equilibrio
$$
\Delta U = Q - L ,
$$
dove $Q$ è il calore assorbito dal sistema e $L$ il lavoro fatto dal sistema. In forma infinitesima $dU = \delta Q - \delta L$.

È un principio ricavato dall'esperienza. Gli esperimenti di Joule mostrano che, tra due stati assegnati, $Q$ e $L$ dipendono dalla trasformazione, mentre la differenza $Q - L$ è sempre la stessa. Il primo principio estende la conservazione dell'energia ai fenomeni termici, poiché stabilisce che il calore assorbito si divide tra aumento di energia interna e lavoro ceduto all'esterno. Se un gas assorbe $500\,\mathrm{J}$ di calore e compie $200\,\mathrm{J}$ di lavoro espandendosi, la sua energia interna aumenta di $300\,\mathrm{J}$.
:::

:::osservazione{#casi-del-primo-principio titolo="Casi particolari del primo principio"}
- Sistema isolato: $Q = 0$ e $L = 0$, quindi $\Delta U = 0$ e l'energia interna si conserva.
- Trasformazione adiabatica: $Q = 0$, quindi $\Delta U = -L$; un gas che si espande senza scambiare calore compie lavoro a spese della propria energia interna.
- Trasformazione a volume costante: $L = 0$, quindi $\Delta U = Q$.
- Trasformazione ciclica: lo stato finale coincide con quello iniziale, quindi $\Delta U = 0$ e $Q = L$.

Il primo principio vale anche nei cambiamenti di stato. Quando l'acqua bolle a pressione atmosferica, una parte del calore latente diventa lavoro di espansione del vapore e il resto aumenta l'energia interna.
:::

## Energia interna e calori molari del gas perfetto

:::teorema{#energia-interna-gas-perfetto titolo="Energia interna del gas perfetto"}
L'energia interna di una quantità fissata di gas perfetto dipende solo dalla temperatura: $U = U(T)$.

È un risultato sperimentale, ottenuto da Joule con l'**espansione libera**. Un gas rarefatto, chiuso in un recipiente con pareti rigide e adiabatiche, si espande nel vuoto in un secondo recipiente. Il gas non scambia calore e non compie lavoro, perché nulla si oppone all'espansione, quindi per il primo principio $\Delta U = 0$. Nell'espansione volume e pressione cambiano, mentre la temperatura misurata resta la stessa; perciò $U$ dipende solo da $T$. Nel modello del gas perfetto il risultato è atteso, poiché le molecole non interagiscono a distanza e l'energia interna è solo energia cinetica.
:::

:::definizione{#calori-molari titolo="Calori molari"}
Il **calore molare** di un gas è il calore che serve per innalzare di $1\,\mathrm{K}$ la temperatura di una mole. Il suo valore dipende dalla trasformazione, e se ne usano due:
$$
c_V = \frac{1}{n}\,\frac{\delta Q}{dT}\ \text{ a volume costante}, \qquad c_p = \frac{1}{n}\,\frac{\delta Q}{dT}\ \text{ a pressione costante},
$$
misurati in $\mathrm{J/(mol\cdot K)}$. Per un gas perfetto i calori molari sono costanti, con valori che dipendono dalla struttura delle molecole:

- gas **monoatomico** (elio, argon): $c_V = \dfrac{3}{2}R$ e $c_p = \dfrac{5}{2}R$;
- gas **biatomico** a temperatura ambiente (azoto, ossigeno, aria): $c_V = \dfrac{5}{2}R$ e $c_p = \dfrac{7}{2}R$.

Il rapporto $\gamma = \dfrac{c_p}{c_V}$ vale quindi $\dfrac{5}{3}$ per i gas monoatomici e $\dfrac{7}{5} = 1{,}40$ per quelli biatomici, e compare nelle trasformazioni adiabatiche. In una trasformazione a volume costante $n$ moli assorbono $Q = n\,c_V\,\Delta T$, in una a pressione costante $Q = n\,c_p\,\Delta T$.
:::

::::teorema{#variazione-energia-interna titolo="Variazione di energia interna del gas perfetto"}
In *ogni* trasformazione di $n$ moli di gas perfetto dalla temperatura $T_i$ alla temperatura $T_f$
$$
\Delta U = n\,c_V\,(T_f - T_i) ,
$$
anche quando il volume non è costante. La formula dà $\Delta U$ in tutte le trasformazioni del gas perfetto; per esempio $2{,}0\,\mathrm{mol}$ di gas monoatomico che passano da $300\,\mathrm{K}$ a $400\,\mathrm{K}$ hanno $\Delta U = 2{,}0 \cdot \dfrac{3}{2} \cdot 8{,}314 \cdot 100\,\mathrm{J} \approx 2{,}5\,\mathrm{kJ}$, qualunque sia la trasformazione.

:::dimostrazione
Siano $A$ e $B$ gli stati iniziale e finale, con temperature $T_i$ e $T_f$, e sia $C$ lo stato con lo stesso volume di $A$ e temperatura $T_f$. Lungo l'isocora $AC$ il lavoro è nullo, quindi per il primo principio $\Delta U_{AC} = Q_{AC} = n\,c_V\,(T_f - T_i)$. Gli stati $C$ e $B$ hanno la stessa temperatura e l'energia interna del gas perfetto dipende solo da $T$, perciò $\Delta U_{CB} = 0$. Poiché $U$ è una funzione di stato, $\Delta U_{AB} = \Delta U_{AC} + \Delta U_{CB} = n\,c_V\,(T_f - T_i)$, qualunque sia la trasformazione da $A$ a $B$.
:::
::::

::::teorema{#relazione-di-mayer titolo="Relazione di Mayer"}
Per un gas perfetto
$$
c_p - c_V = R .
$$
A pressione costante il gas, oltre ad aumentare l'energia interna, compie lavoro espandendosi, quindi per la stessa variazione di temperatura assorbe più calore che a volume costante. La relazione permette di ricavare un calore molare dall'altro e dà $\gamma = 1 + \dfrac{R}{c_V}$.

:::dimostrazione
Si scalda il gas a pressione costante di $dT$. Il calore assorbito è $\delta Q = n\,c_p\,dT$, e per la variazione di energia interna del gas perfetto $dU = n\,c_V\,dT$. Differenziando l'equazione di stato a $p$ costante si ottiene $p\,dV = nR\,dT$, quindi il lavoro è $\delta L = p\,dV = nR\,dT$. Sostituendo nel primo principio $dU = \delta Q - \delta L$ si ha
$$
n\,c_V\,dT = n\,c_p\,dT - nR\,dT ,
$$
e dividendo per $n\,dT$ si ottiene $c_V = c_p - R$, cioè la tesi.
:::
::::

## Trasformazioni del gas perfetto

:::teorema{#trasformazione-isocora titolo="Trasformazione isocora"}
In una trasformazione a volume costante di $n$ moli di gas perfetto
$$
\frac{p}{T} = \text{costante}, \qquad L = 0, \qquad Q = \Delta U = n\,c_V\,\Delta T .
$$
Il lavoro è nullo perché $dV = 0$, e il primo principio dà $Q = \Delta U$. Nel piano $(V, p)$ l'isocora è un segmento verticale, e tutto il calore assorbito aumenta l'energia interna. Un recipiente rigido con $1{,}0\,\mathrm{mol}$ di aria scaldata di $10\,\mathrm{K}$ assorbe $Q = \dfrac{5}{2} \cdot 8{,}314 \cdot 10\,\mathrm{J} \approx 208\,\mathrm{J}$.
:::

:::teorema{#trasformazione-isobara titolo="Trasformazione isobara"}
In una trasformazione a pressione costante di $n$ moli di gas perfetto
$$
\frac{V}{T} = \text{costante}, \qquad L = p\,\Delta V = nR\,\Delta T, \qquad \Delta U = n\,c_V\,\Delta T, \qquad Q = n\,c_p\,\Delta T .
$$
Il lavoro è l'integrale di una costante, e $p\,\Delta V = nR\,\Delta T$ per l'equazione di stato. Nel piano $(V, p)$ l'isobara è un segmento orizzontale. Per un gas biatomico i tre termini stanno nel rapporto $L : \Delta U : Q = 2 : 5 : 7$, perciò i $\dfrac{2}{7}$ del calore assorbito diventano lavoro.
:::

::::teorema{#trasformazione-isoterma titolo="Trasformazione isoterma"}
In una trasformazione quasistatica a temperatura costante $T$ di $n$ moli di gas perfetto, dal volume $V_i$ al volume $V_f$,
$$
pV = \text{costante}, \qquad \Delta U = 0, \qquad Q = L = nRT \ln\frac{V_f}{V_i} .
$$
In un'espansione isoterma il gas assorbe calore e lo restituisce tutto come lavoro; in una compressione cede all'ambiente come calore il lavoro ricevuto. Poiché $p_i V_i = p_f V_f$, il rapporto dei volumi si può sostituire con $\dfrac{p_i}{p_f}$. Per $1{,}0\,\mathrm{mol}$ a $300\,\mathrm{K}$ che raddoppia il volume, $L = 8{,}314 \cdot 300 \cdot \ln 2\,\mathrm{J} \approx 1{,}73\,\mathrm{kJ}$.

:::dimostrazione
La temperatura non cambia e l'energia interna del gas perfetto dipende solo da $T$, quindi $\Delta U = 0$ e per il primo principio $Q = L$. Lungo la trasformazione $p = \dfrac{nRT}{V}$ con $T$ costante, perciò
$$
L = \int_{V_i}^{V_f} \frac{nRT}{V}\, dV = nRT \int_{V_i}^{V_f} \frac{dV}{V} = nRT \ln\frac{V_f}{V_i} .
$$
:::
::::

::::teorema{#trasformazione-adiabatica titolo="Trasformazione adiabatica"}
In una trasformazione adiabatica quasistatica di $n$ moli di gas perfetto
$$
pV^{\gamma} = \text{costante}, \qquad TV^{\gamma - 1} = \text{costante}, \qquad Q = 0 ,
$$
e il lavoro fatto dal gas dallo stato $(p_i, V_i, T_i)$ allo stato $(p_f, V_f, T_f)$ è
$$
L = -\Delta U = n\,c_V\,(T_i - T_f) = \frac{p_i V_i - p_f V_f}{\gamma - 1} .
$$
Poiché $\gamma > 1$, nel piano $(V, p)$ l'adiabatica passante per un punto è più ripida dell'isoterma passante per lo stesso punto. In un'espansione adiabatica il gas compie lavoro e si raffredda; in una compressione si scalda, come l'aria in una pompa da bicicletta. Un gas biatomico compresso adiabaticamente a metà del volume passa da $300\,\mathrm{K}$ a $300 \cdot 2^{0{,}40}\,\mathrm{K} \approx 396\,\mathrm{K}$.

::grafico{f="4/x;2*(2/x)^1.4" punti="2,2,pieno,A" xmin=0 xmax=6 ymin=0 ymax=6 nomi="V,p" etichette="4.8,1.05,isoterma;4.4,0.3,adiabatica" titolo="Isoterma $pV = \text{costante}$ e adiabatica $pV^{\gamma} = \text{costante}$ con $\gamma = 1{,}4$ passanti per lo stesso stato $A$, in unità arbitrarie; l'adiabatica è più ripida"}

:::dimostrazione
Il calore scambiato è nullo, quindi per il primo principio $dU = -p\,dV$; per la variazione di energia interna del gas perfetto, inoltre, $dU = n\,c_V\,dT$. Sostituendo $p = \dfrac{nRT}{V}$ si ottiene
$$
n\,c_V\,dT = -\frac{nRT}{V}\,dV
\quad\Longrightarrow\quad
\frac{dT}{T} = -\frac{R}{c_V}\,\frac{dV}{V} = -(\gamma - 1)\,\frac{dV}{V} ,
$$
dove per la relazione di Mayer $\dfrac{R}{c_V} = \dfrac{c_p - c_V}{c_V} = \gamma - 1$. Integrando tra lo stato iniziale e uno stato generico della trasformazione si ottiene
$$
\ln\frac{T}{T_i} = -(\gamma - 1) \ln\frac{V}{V_i}
\quad\Longrightarrow\quad
T V^{\gamma - 1} = T_i V_i^{\gamma - 1} ,
$$
e sostituendo $T = \dfrac{pV}{nR}$ si ottiene $pV^{\gamma} = p_i V_i^{\gamma}$. Infine $L = -\Delta U = n\,c_V\,(T_i - T_f)$; poiché $nT = \dfrac{pV}{R}$ e $\dfrac{c_V}{R} = \dfrac{1}{\gamma - 1}$, il lavoro è $\dfrac{p_i V_i - p_f V_f}{\gamma - 1}$.
:::
::::

:::osservazione{#confronto-trasformazioni titolo="Quadro delle trasformazioni"}
Per $n$ moli di gas perfetto le grandezze delle quattro trasformazioni si ottengono sempre da $\Delta U = n\,c_V\,\Delta T$ e dal primo principio $Q = \Delta U + L$.

- Isocora: $L = 0$ e $Q = n\,c_V\,\Delta T$.
- Isobara: $L = p\,\Delta V$ e $Q = n\,c_p\,\Delta T$.
- Isoterma: $\Delta U = 0$ e $Q = L = nRT\ln\dfrac{V_f}{V_i}$.
- Adiabatica: $Q = 0$ e $L = -n\,c_V\,\Delta T$.

Negli esercizi si ricavano dall'equazione di stato le variabili mancanti di ogni stato, si calcolano $\Delta U$ e $L$ e si ottiene $Q$ per differenza; il segno di ciascuna grandezza va confrontato con il senso fisico della trasformazione.
:::

## Cicli termodinamici

:::definizione{#ciclo-termodinamico titolo="Ciclo termodinamico"}
Un **ciclo** è una successione di trasformazioni al termine della quale il sistema torna nello stato iniziale. Poiché $U$ è una funzione di stato, in un ciclo $\Delta U = 0$, e per il primo principio
$$
Q_{\text{tot}} = L_{\text{tot}} ,
$$
dove $Q_{\text{tot}}$ è la somma algebrica dei calori scambiati nelle singole trasformazioni e $L_{\text{tot}}$ la somma dei lavori. Il calore *assorbito* $Q_{\text{ass}}$ è la somma dei termini positivi, il calore *ceduto* $Q_{\text{ced}}$ è il valore assoluto della somma dei termini negativi, quindi $L_{\text{tot}} = Q_{\text{ass}} - Q_{\text{ced}}$. Un ciclo che compie lavoro positivo trasforma in lavoro una parte del calore assorbito ed è il modello di una macchina termica; per il rendimento e i limiti di questa trasformazione si rimanda all'argomento sul secondo principio della termodinamica.
:::

::::teorema{#lavoro-di-un-ciclo titolo="Lavoro di un ciclo"}
Il lavoro totale di un ciclo quasistatico è, in valore assoluto, l'area racchiusa dalla curva del ciclo nel piano $(V, p)$; è positivo se il ciclo è percorso in senso orario e negativo se è percorso in senso antiorario.

Il risultato permette di calcolare il lavoro di un ciclo senza sommare i singoli contributi. Il ciclo rettangolare della figura, formato da due isobare e due isocore e percorso in senso orario, compie il lavoro $L = (p_2 - p_1)(V_2 - V_1)$.

::grafico{vettori="1,1,1,3;1,3,4,3;4,3,4,1;4,1,1,1" area="3;1;1;4" punti="1,1,pieno,A;1,3,pieno,B;4,3,pieno,C;4,1,pieno,D" segmenti="0,1,1,1;0,3,1,3;1,0,1,1;4,0,4,1" etichette="0.25,3.15,p₂;0.25,1.15,p₁;1.1,0.3,V₁;4.1,0.3,V₂" xmin=0 xmax=5 ymin=0 ymax=4 nomi="V,p" titolo="Ciclo $ABCDA$ percorso in senso orario, in unità arbitrarie: il lavoro totale è positivo e uguale all'area del rettangolo, $(p_2 - p_1)(V_2 - V_1)$"}

:::dimostrazione
Si considera un ciclo percorso in senso orario e lo si divide nel tratto superiore, percorso da sinistra verso destra con $dV > 0$, e nel tratto inferiore, percorso da destra verso sinistra con $dV < 0$. Il lavoro del tratto superiore è l'area sotto di esso, con segno positivo; il lavoro del tratto inferiore è l'area sotto di esso, con segno negativo. La somma è la differenza delle due aree, cioè l'area racchiusa dal ciclo. Nel verso antiorario i ruoli dei due tratti si scambiano, quindi il lavoro cambia segno.
:::
::::
