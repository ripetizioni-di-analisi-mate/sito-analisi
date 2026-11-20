---
titolo: "Acidi, basi, tamponi e reazioni di ossidoriduzione"
sommario: "Equilibri acido-base, calcolo del pH, tamponi biologici, bilanciamento redox e potenziali elettrochimici."
---

:::osservazione{titolo="Composizione e trasformazioni"}
Gli acidi e le basi sono fra le sostanze più comuni: il succo gastrico è acido, il sangue è leggermente basico e ogni cellula funziona solo in un intervallo ristretto di acidità. Questo capitolo tratta due tipi di reazione. Nelle reazioni **acido-base** una sostanza cede uno ione $\mathrm{H^+}$ (un protone) a un'altra. Nelle reazioni di **ossidoriduzione** (o redox) una sostanza cede elettroni a un'altra.

La prima parte spiega che cosa sono acidi e basi, come si misura l'acidità con il pH e come funzionano i **tamponi**, cioè le soluzioni che mantengono il pH quasi costante anche quando si aggiunge un acido o una base. La seconda parte spiega come si riconosce e si bilancia una reazione redox e come una reazione redox produce corrente elettrica in una pila. Nei problemi di questo capitolo il procedimento è sempre lo stesso: si individuano le sostanze presenti, si fa avvenire l'eventuale reazione completa fra acido e base, e solo dopo si calcola l'equilibrio.
:::

## Le definizioni di acido e di base

:::definizione{#acidi-basi titolo="Arrhenius e Brønsted-Lowry"}
Esistono tre definizioni di acido e di base, via via più generali.

Secondo **Arrhenius** un acido è una sostanza che in acqua libera ioni $\mathrm{H^+}$ e una base è una sostanza che in acqua libera ioni idrossido $\mathrm{OH^-}$. L'acido cloridrico HCl è un acido e l'idrossido di sodio NaOH è una base. In acqua lo ione $\mathrm{H^+}$ non resta libero: si lega subito a una molecola d'acqua e forma lo ione **idronio** $\mathrm{H_3O^+}$. Le scritture $\mathrm{H^+}$ e $\mathrm{H_3O^+}$ indicano quindi la stessa cosa.

Secondo **Brønsted e Lowry** un acido è una sostanza che cede un protone e una base è una sostanza che lo acquista. Questa definizione vale anche fuori dall'acqua e spiega perché l'ammoniaca è una base pur non contenendo OH. In ogni reazione acido-base un acido cede il protone a una base.
$$
\mathrm{HA+B\rightleftharpoons A^-+BH^+}.
$$
Quando l'acido $\mathrm{HA}$ cede il protone diventa $\mathrm{A^-}$, che a sua volta può riacquistarlo ed è quindi una base. $\mathrm{HA}$ e $\mathrm{A^-}$ formano una **coppia coniugata**, cioè due sostanze che differiscono per un solo protone. Allo stesso modo $\mathrm{BH^+}$ e $\mathrm B$ formano la seconda coppia. Per esempio, nella reazione $\mathrm{NH_3+H_2O\rightleftharpoons NH_4^++OH^-}$ l'ammoniaca acquista un protone ed è la base; l'acqua lo cede ed è l'acido. Le coppie coniugate sono $\mathrm{NH_4^+/NH_3}$ e $\mathrm{H_2O/OH^-}$.
:::

:::definizione{#lewis-anfoliti titolo="Lewis e specie anfiprotiche"}
Secondo **Lewis** un acido è una sostanza che accetta una coppia di elettroni e una base è una sostanza che la dona. Fra le due si forma un legame. Per esempio, in $\mathrm{BF_3+NH_3\rightarrow F_3B\!\leftarrow\!NH_3}$ l'azoto dell'ammoniaca dona il suo doppietto al boro, che ha solo sei elettroni. L'ammoniaca è la base di Lewis e $\mathrm{BF_3}$ è l'acido di Lewis. Questa definizione comprende anche reazioni in cui non si sposta alcun protone.

Una sostanza **anfiprotica** (o anfotera) può comportarsi sia da acido sia da base, secondo la sostanza con cui reagisce. Lo ione $\mathrm{H_2PO_4^-}$ può cedere un protone e diventare $\mathrm{HPO_4^{2-}}$, oppure acquistarne uno e diventare $\mathrm{H_3PO_4}$. Anche l'acqua è anfiprotica: cede un protone all'ammoniaca e ne acquista uno da HCl.
:::

:::esempio{titolo="Riconoscere le coppie coniugate"}
Per trovare la base coniugata di un acido si toglie un $\mathrm{H^+}$ dalla formula: scompare un atomo di idrogeno e la carica diminuisce di una unità. Da $\mathrm{H_2PO_4^-}$ si ottiene $\mathrm{HPO_4^{2-}}$. Per trovare l'acido coniugato di una base si aggiunge un $\mathrm{H^+}$: da $\mathrm{NH_3}$ si ottiene $\mathrm{NH_4^+}$. Le due sostanze di una coppia coniugata differiscono sempre e soltanto per un protone. Nella reazione fra ammoniaca e acqua, $\mathrm{NH_3}$ e $\mathrm{OH^-}$ non formano una coppia coniugata, perché sono le due basi delle due coppie.

![Trasferimenti di un protone fra le quattro forme del fosfato](/figure/chimica-semestre-filtro/acidi-basi-redox/coppie-it.svg)

La figura mostra le quattro forme del fosfato, da $\mathrm{H_3PO_4}$ a $\mathrm{PO_4^{3-}}$. Ogni passaggio corrisponde alla perdita o all'acquisto di un protone. Quale forma prevale in una soluzione dipende dal pH.
:::

## Autoprotolisi dell'acqua e pH

:::definizione{#kw-ph titolo="Prodotto ionico dell'acqua e scala del pH"}
L'acqua pura contiene una piccolissima quantità di ioni, perché ogni tanto una molecola d'acqua cede un protone a un'altra. Questa reazione si chiama **autoprotolisi** (o autoionizzazione) dell'acqua.
$$
\mathrm{2H_2O\rightleftharpoons H_3O^++OH^-}.
$$
La costante di questo equilibrio è il **prodotto ionico dell'acqua**, $K_w=a_{\mathrm{H_3O^+}}a_{\mathrm{OH^-}}$. Il simbolo $a$ indica l'attività, che nelle soluzioni diluite coincide con il valore numerico della concentrazione in $\mathrm{mol\,L^{-1}}$: $a_i\simeq\dfrac{[i]}{c^\circ}$, con $c^\circ=1\,\mathrm{mol\,L^{-1}}$. In pratica $K_w=[\mathrm{H_3O^+}][\mathrm{OH^-}]$. A $25\,^\circ\mathrm C$ vale $10^{-14}$. In ogni soluzione acquosa il prodotto delle due concentrazioni ha questo valore, quindi se una aumenta l'altra diminuisce.

Le concentrazioni di $\mathrm{H_3O^+}$ sono numeri molto piccoli, scomodi da usare. Per questo si usa il **pH**, definito come $-\log_{10}a_{\mathrm{H_3O^+}}$, cioè in pratica $\mathrm{pH}=-\log_{10}[\mathrm{H_3O^+}]$. Allo stesso modo $\mathrm{pOH}=-\log_{10}[\mathrm{OH^-}]$ e $pK_w=-\log_{10}K_w$. Dal prodotto ionico segue che
$$
\mathrm{pH+pOH}=pK_w.
$$
A $25\,^\circ\mathrm C$ si ha $pK_w=14$, quindi $\mathrm{pH}+\mathrm{pOH}=14$. Si distinguono tre casi.

- Soluzione **neutra**: $[\mathrm{H_3O^+}]=[\mathrm{OH^-}]=10^{-7}\,\mathrm{mol\,L^{-1}}$ e $\mathrm{pH}=7$.
- Soluzione **acida**: $[\mathrm{H_3O^+}]>10^{-7}\,\mathrm{mol\,L^{-1}}$ e $\mathrm{pH}<7$.
- Soluzione **basica**: $[\mathrm{H_3O^+}]<10^{-7}\,\mathrm{mol\,L^{-1}}$ e $\mathrm{pH}>7$.

Per esempio, una soluzione con $[\mathrm{H_3O^+}]=10^{-3}\,\mathrm{mol\,L^{-1}}$ ha $\mathrm{pH}=3$ e $\mathrm{pOH}=11$. Il valore 7 per la neutralità vale a $25\,^\circ\mathrm C$; a temperature diverse $K_w$ cambia e il pH di una soluzione neutra è $\dfrac{pK_w}{2}$.
:::

:::osservazione{#indicatori titolo="Indicatori acido-base"}
Un **indicatore** è una sostanza che cambia colore secondo il pH. È un acido debole, indicato con HIn, la cui base coniugata $\mathrm{In^-}$ ha un colore diverso: $\mathrm{HIn\rightleftharpoons H^++In^-}$. In ambiente acido prevale HIn e si vede il suo colore; in ambiente basico prevale $\mathrm{In^-}$. Il passaggio da un colore all'altro avviene in un intervallo di circa due unità di pH attorno al $pK_a$ dell'indicatore, detto intervallo di viraggio. In una titolazione si sceglie un indicatore il cui intervallo di viraggio comprende il pH del punto di equivalenza.
:::

:::osservazione{titolo="Leggere la scala del pH"}
La scala del pH è logaritmica, quindi a ogni unità di pH corrisponde un fattore 10 nella concentrazione di $\mathrm{H_3O^+}$. Una soluzione a pH 3 è dieci volte più acida di una a pH 4 e cento volte più acida di una a pH 5. Per la stessa ragione il pH di una miscela di due soluzioni non è la media dei due pH: si calcolano prima le moli totali di $\mathrm{H_3O^+}$, tenendo conto delle eventuali reazioni, e poi il pH. I valori di pH più comuni sono compresi fra 0 e 14; soluzioni molto concentrate di acidi o basi forti hanno valori fuori da questo intervallo.

![pH di un acido forte molto diluito, includendo l'autoprotolisi dell'acqua](/figure/chimica-semestre-filtro/acidi-basi-redox/diluizione-it.svg)

La figura mostra il pH di un acido forte sempre più diluito, a $25\,^\circ\mathrm C$. Finché l'acido è abbastanza concentrato il pH è $-\log_{10}C$, dove $C$ è la concentrazione dell'acido. Quando l'acido è molto diluito contano anche gli ioni $\mathrm{H_3O^+}$ prodotti dall'acqua, e il pH si avvicina a 7 restando minore di 7. Una soluzione $10^{-8}\,\mathrm{mol\,L^{-1}}$ di HCl ha quindi pH poco minore di 7, e non 8.
:::

## Acidi e basi forti o deboli

:::definizione{#ka-kb titolo="Costanti di dissociazione e forza acido-base"}
La **forza** di un acido indica quanto l'acido si dissocia in acqua, cioè quale frazione delle sue molecole cede il protone. Si misura con la **costante di dissociazione acida** $K_a$, che è la costante di equilibrio della reazione fra l'acido e l'acqua. Per un acido HA con un solo protone (monoprotico) si scrive
$$
\mathrm{HA+H_2O\rightleftharpoons H_3O^++A^-},
\qquad K_a=\dfrac{a_{\mathrm{H_3O^+}}a_{\mathrm{A^-}}}{a_{\mathrm{HA}}}.
$$
Più grande è $K_a$, più l'acido è dissociato e più è forte. Per comodità si usa $pK_a=-\log_{10}K_a$: a un acido più forte corrisponde un $pK_a$ più piccolo. Per una base B, che reagisce con l'acqua secondo $\mathrm{B+H_2O\rightleftharpoons BH^++OH^-}$, si definiscono allo stesso modo $K_b=\dfrac{a_{\mathrm{BH^+}}a_{\mathrm{OH^-}}}{a_{\mathrm B}}$ e $pK_b=-\log_{10}K_b$. Per un acido e la sua base coniugata vale $K_aK_b=K_w$, cioè $pK_a+pK_b=14$ a $25\,^\circ\mathrm C$. Di conseguenza a un acido più forte corrisponde una base coniugata più debole.

Un **acido forte** in acqua è dissociato completamente: tutte le sue molecole cedono il protone. Sono acidi forti HCl, $\mathrm{HNO_3}$ e $\mathrm{H_2SO_4}$. Un **acido debole** è dissociato solo in parte e la maggior parte delle sue molecole resta intera. L'acido acetico, con $K_a=1{,}8\cdot10^{-5}$, è un acido debole. Lo stesso vale per le basi: NaOH è una base forte e l'ammoniaca è una base debole. La forza è una proprietà diversa dalla concentrazione, che indica quanta sostanza è sciolta in un litro: una soluzione può contenere un acido forte molto diluito oppure un acido debole molto concentrato.
:::

:::osservazione{#calcolo-ph titolo="Calcolo del pH e controllo delle approssimazioni"}
Il calcolo del pH dipende dal tipo di acido o di base.

**Acido forte**. È dissociato completamente, quindi la concentrazione di $\mathrm{H_3O^+}$ è uguale alla concentrazione $C$ dell'acido: $[\mathrm{H_3O^+}]\simeq C$ e $\mathrm{pH}=-\log_{10}C$. Una soluzione $0{,}010\,\mathrm{mol\,L^{-1}}$ di HCl ha $\mathrm{pH}=2$.

**Base forte**. La concentrazione di $\mathrm{OH^-}$ è uguale alla concentrazione della base moltiplicata per il numero di ioni idrossido della formula; $\mathrm{Ca(OH)_2}$ ne libera due. Si calcola il pOH e poi $\mathrm{pH}=14-\mathrm{pOH}$. Una soluzione $0{,}010\,\mathrm{mol\,L^{-1}}$ di NaOH ha $\mathrm{pOH}=2$ e $\mathrm{pH}=12$.

**Acido debole**. È dissociato solo in parte, quindi si usa l'equilibrio. Si indica con $x$ la concentrazione di acido che si dissocia. All'equilibrio $[\mathrm{H_3O^+}]=[\mathrm{A^-}]=x$ e $[\mathrm{HA}]=C-x$. Sostituendo nell'espressione di $K_a$, con le concentrazioni in $\mathrm{mol\,L^{-1}}$, si ottiene
$$
K_a=\dfrac{x^2}{C-x},
\qquad x=\dfrac{-K_a+\sqrt{K_a^2+4K_aC}}{2}.
$$
La seconda formula è la soluzione dell'equazione di secondo grado. Se l'acido è poco dissociato, $x$ è molto più piccolo di $C$, si può scrivere $C-x\simeq C$ e la formula diventa $x\simeq\sqrt{K_aC}$. Per esempio, per l'acido acetico con $C=0{,}010$ e $K_a=1{,}8\cdot10^{-5}$ la formula approssimata dà $x=\sqrt{1{,}8\cdot10^{-7}}=4{,}2\cdot10^{-4}$ e quella esatta dà $x=4{,}15\cdot10^{-4}$, quindi $\mathrm{pH}=3{,}38$.

**Base debole**. Si procede allo stesso modo con $K_b$ al posto di $K_a$: $x$ è la concentrazione di $\mathrm{OH^-}$, da cui si ricavano il pOH e poi il pH.

Queste formule trascurano gli ioni prodotti dall'autoprotolisi dell'acqua, e sono valide quando la concentrazione dell'acido è molto maggiore di $10^{-7}\,\mathrm{mol\,L^{-1}}$. Per un acido forte molto diluito si tiene conto anche dell'acqua risolvendo l'equazione $h=C+\dfrac{K_w}{h}$, dove $h$ è la concentrazione di $\mathrm{H_3O^+}$.
:::

:::osservazione{titolo="Controllare la dissociazione trascurata"}
L'approssimazione $x\simeq\sqrt{K_aC}$ è valida se la frazione di acido dissociata, $\dfrac{x}{C}$, è piccola; di solito si accetta un valore inferiore al 5%. Il controllo si fa dopo il calcolo. Per l'acido acetico dell'esempio $\dfrac{x}{C}\simeq0{,}0415$, cioè circa il 4%, quindi l'approssimazione è accettabile. Per un acido con $K_a=10^{-3}$ alla stessa concentrazione $C=0{,}010$ la frazione dissociata è circa il 27%, quindi si usa l'equazione di secondo grado.

Nei casi più complessi, per esempio con concentrazioni molto basse o con più acidi e basi insieme, il pH si calcola mettendo a sistema tre tipi di equazioni: le costanti di equilibrio, il bilancio di materia (la quantità totale di ogni sostanza si conserva) e l'elettroneutralità (la somma delle cariche positive è uguale a quella delle cariche negative). Le formule usate finora sono casi particolari di questo sistema.
:::

## Acidi poliprotici, neutralizzazione e sali

:::definizione{#poliprotici titolo="Dissociazioni successive e specie anfiprotiche"}
Un **acido poliprotico** ha più di un protone da cedere. L'acido carbonico $\mathrm{H_2CO_3}$ ne ha due (diprotico) e l'acido fosforico $\mathrm{H_3PO_4}$ ne ha tre (triprotico). I protoni vengono ceduti uno alla volta, in stadi successivi, ciascuno con la propria costante. Per un acido diprotico $\mathrm{H_2A}$ gli stadi sono
$$
\mathrm{H_2A\rightleftharpoons H^++HA^-},\qquad
\mathrm{HA^-\rightleftharpoons H^++A^{2-}},
$$
Le costanti dei due stadi si indicano con $K_{a1}$ e $K_{a2}$. La seconda è sempre molto più piccola della prima, perché è più difficile togliere un protone a uno ione già negativo. Per questo, nel calcolo del pH di una soluzione dell'acido, di solito basta considerare il primo stadio. Una base poliprotica acquista i protoni in più stadi: lo ione carbonato $\mathrm{CO_3^{2-}}$ diventa prima $\mathrm{HCO_3^-}$ e poi $\mathrm{H_2CO_3}$.

La forma intermedia $\mathrm{HA^-}$ è anfiprotica, perché può cedere un protone oppure acquistarne uno. Il pH di una soluzione di un suo sale, per esempio il bicarbonato di sodio, è circa la media dei due $pK_a$ e dipende poco dalla concentrazione.
$$
\mathrm{pH}\simeq\dfrac{pK_{a1}+pK_{a2}}{2}.
$$
Per esempio, per il bicarbonato $pK_{a1}=6{,}37$ e $pK_{a2}=10{,}33$, quindi $\mathrm{pH}\simeq\dfrac{6{,}37+10{,}33}{2}=8{,}35$, e una soluzione di bicarbonato di sodio è leggermente basica. Il valore di $pK_{a1}$ usato qui tiene conto del fatto che in acqua l'acido carbonico è in equilibrio con la $\mathrm{CO_2}$ disciolta.
:::

:::osservazione{#neutralizzazione-sali titolo="Neutralizzazione, equivalenza e idrolisi"}
La **neutralizzazione** è la reazione fra un acido e una base. Gli ioni $\mathrm{H_3O^+}$ dell'acido e gli ioni $\mathrm{OH^-}$ della base si uniscono e formano acqua: $\mathrm{H_3O^++OH^-\rightarrow2H_2O}$. Il calcolo si svolge in due passi. Si confrontano le moli di acido e di base per stabilire quale delle due è in eccesso; poi si divide l'eccesso per il volume totale e si calcola il pH. Per esempio, mescolando $50\,\mathrm{mL}$ di HCl $0{,}10\,\mathrm{mol\,L^{-1}}$ ($5{,}0\,\mathrm{mmol}$) con $30\,\mathrm{mL}$ di NaOH $0{,}10\,\mathrm{mol\,L^{-1}}$ ($3{,}0\,\mathrm{mmol}$) restano $2{,}0\,\mathrm{mmol}$ di acido in $80\,\mathrm{mL}$, cioè $0{,}025\,\mathrm{mol\,L^{-1}}$, e $\mathrm{pH}=1{,}6$. Il **punto di equivalenza** si raggiunge quando le moli di base aggiunte sono esattamente quelle richieste dall'acido.

Dalla neutralizzazione si ottiene un sale. Una soluzione di un sale non è sempre neutra, perché i suoi ioni possono reagire con l'acqua; questa reazione si chiama **idrolisi**. Si distinguono tre casi.

- L'anione di un acido debole è una base. Lo ione acetato reagisce con l'acqua secondo $\mathrm{CH_3COO^-+H_2O\rightleftharpoons CH_3COOH+OH^-}$, con costante $K_b=\dfrac{K_w}{K_a}$. Una soluzione di acetato di sodio è quindi basica.
- Il catione di una base debole è un acido. Lo ione ammonio ha $K_a=\dfrac{K_w}{K_b(\mathrm{NH_3})}$. Una soluzione di cloruro di ammonio è quindi acida.
- Gli ioni che derivano da acidi e basi forti, come $\mathrm{Na^+}$ e $\mathrm{Cl^-}$, non reagiscono con l'acqua. Una soluzione di NaCl è neutra.

Di conseguenza il pH al punto di equivalenza dipende dall'acido e dalla base usati. Se un acido forte è neutralizzato da una base forte, il pH all'equivalenza è 7. Se un acido debole è neutralizzato da una base forte, all'equivalenza la soluzione contiene la base coniugata dell'acido e il pH è maggiore di 7. Se entrambi gli ioni del sale reagiscono con l'acqua, come nell'acetato di ammonio, il pH dipende da quale dei due equilibri ha la costante maggiore.
:::

:::esempio{titolo="Seguire una titolazione"}
Una **titolazione** è una misura in cui a una soluzione di un acido si aggiunge poco per volta una base di concentrazione nota (o viceversa), fino al punto di equivalenza. Dal volume di base usato si ricava la quantità di acido. Durante la titolazione di un acido debole HA con una base forte la soluzione attraversa quattro situazioni, e in ciascuna il pH si calcola in modo diverso.

1. **All'inizio** è presente solo l'acido debole. Il pH si calcola con $K_a$.
2. **Prima dell'equivalenza** una parte di HA è stata trasformata in $\mathrm{A^-}$. La soluzione contiene entrambe le sostanze ed è un tampone; il pH si calcola con l'equazione di Henderson-Hasselbalch, esposta nel paragrafo seguente. A metà strada (*semiequivalenza*) le quantità di HA e $\mathrm{A^-}$ sono uguali e $\mathrm{pH}=pK_a$.
3. **All'equivalenza** tutto HA è diventato $\mathrm{A^-}$. Il pH si calcola con l'idrolisi di $\mathrm{A^-}$ ed è basico.
4. **Dopo l'equivalenza** il pH è determinato dalla base forte in eccesso.

![Curva di titolazione di un acido debole con semiequivalenza ed equivalenza distinte](/figure/chimica-semestre-filtro/acidi-basi-redox/titolazione-it.svg)

La figura mostra la curva di titolazione di $25\,\mathrm{mL}$ di un acido debole $0{,}10\,\mathrm{mol\,L^{-1}}$ con $pK_a=4{,}76$, titolato con NaOH della stessa concentrazione, a $25\,^\circ\mathrm C$. Il punto di equivalenza si trova a $25\,\mathrm{mL}$ di base aggiunta e la semiequivalenza a $12{,}5\,\mathrm{mL}$. Attorno alla semiequivalenza il pH cambia poco; vicino all'equivalenza sale bruscamente.
:::

## Tamponi e capacità tamponante

:::definizione{#tamponi titolo="Coppia tampone e Henderson-Hasselbalch"}
Una **soluzione tampone** è una soluzione il cui pH cambia poco quando si aggiunge una piccola quantità di acido o di base. Contiene un acido debole e la sua base coniugata in quantità simili, per esempio acido acetico e acetato di sodio, oppure una base debole e il suo acido coniugato, per esempio ammoniaca e cloruro di ammonio. Il tampone funziona perché contiene una sostanza per ciascun tipo di aggiunta.

- Se si aggiunge un acido forte, la base coniugata $\mathrm{A^-}$ ne acquista i protoni e diventa HA.
- Se si aggiunge una base forte, l'acido debole HA le cede protoni e diventa $\mathrm{A^-}$.

In entrambi i casi l'acido o la base forte vengono sostituiti da una sostanza debole, e il pH cambia di poco.

Il pH di un tampone si calcola con l'**equazione di Henderson-Hasselbalch**, che si ottiene dall'espressione di $K_a$ passando ai logaritmi.
$$
\mathrm{pH}=pK_a+\log_{10}\dfrac{a_{\mathrm{A^-}}}{a_{\mathrm{HA}}}
\simeq pK_a+\log_{10}\dfrac{[\mathrm{A^-}]}{[\mathrm{HA}]}.
$$
In questa formula $[\mathrm{A^-}]$ è la concentrazione della base coniugata e $[\mathrm{HA}]$ quella dell'acido. Il pH dipende dal *rapporto* fra le due. Se le concentrazioni sono uguali il logaritmo vale zero e $\mathrm{pH}=pK_a$. Poiché acido e base si trovano nella stessa soluzione, al posto delle concentrazioni si può usare il rapporto fra le moli. Per esempio, un tampone con $0{,}030\,\mathrm{mol}$ di acetato e $0{,}020\,\mathrm{mol}$ di acido acetico ($pK_a=4{,}76$) ha $\mathrm{pH}=4{,}76+\log_{10}\dfrac{0{,}030}{0{,}020}=4{,}94$.

Se al tampone si aggiunge un acido o una base forte, si aggiornano prima le moli e poi si applica la formula. Aggiungendo $0{,}005\,\mathrm{mol}$ di HCl al tampone dell'esempio, l'acetato scende a $0{,}025\,\mathrm{mol}$ e l'acido acetico sale a $0{,}025\,\mathrm{mol}$, quindi $\mathrm{pH}=4{,}76$. La stessa quantità di HCl in un litro di acqua pura porterebbe il pH da 7 a $2{,}3$.
:::

:::esempio{titolo="Tampone ammoniaca e ammonio"}
Un tampone si può preparare anche con una base debole e il suo acido coniugato. Per la coppia ammoniaca/ammonio conviene usare la costante $K_b$ dell'ammoniaca, che a $25\,^\circ\mathrm C$ vale $1{,}80\cdot10^{-5}$, e calcolare prima il pOH con la formula seguente.
$$
\mathrm{pOH}=pK_b+\log_{10}\dfrac{[\mathrm{NH_4^+}]}{[\mathrm{NH_3}]}.
$$
In questa formula al numeratore c'è l'acido coniugato $\mathrm{NH_4^+}$ e al denominatore la base $\mathrm{NH_3}$. Per esempio, con $0{,}020\,\mathrm{mol\,L^{-1}}$ di ammonio e $0{,}010\,\mathrm{mol\,L^{-1}}$ di ammoniaca si ha $pK_b=4{,}745$ e $\mathrm{pOH}=4{,}745+\log_{10}2=5{,}046$, quindi $\mathrm{pH}=14{,}00-5{,}046\simeq8{,}95$. In questo tampone l'ammoniaca neutralizza un acido aggiunto e lo ione ammonio neutralizza una base aggiunta.
:::

:::osservazione{#capacita-tampone titolo="Efficienza del tampone"}
In un tampone il rapporto fra base e acido determina il pH, mentre la quantità totale delle due sostanze determina quanto acido o quanta base il tampone può neutralizzare. La **capacità tamponante** è il numero di moli di acido o di base forte che si devono aggiungere a un litro di tampone per far variare il pH di una unità.

La capacità è massima quando acido e base coniugata hanno la stessa concentrazione, cioè a $\mathrm{pH}=pK_a$. Un tampone è efficace nell'intervallo $pK_a\pm1$, in cui il rapporto fra base e acido è compreso fra $0{,}1$ e $10$. Per preparare un tampone a un certo pH si sceglie quindi una coppia con $pK_a$ vicino a quel valore. A parità di rapporto, un tampone più concentrato ha lo stesso pH e una capacità maggiore: un tampone $0{,}10\,\mathrm{mol\,L^{-1}}$ neutralizza dieci volte più acido di uno $0{,}010\,\mathrm{mol\,L^{-1}}$.
:::

:::osservazione{titolo="Diluizione e capacità tampone"}
Se si diluisce un tampone con acqua, le concentrazioni di acido e base diminuiscono nella stessa proporzione. Il loro rapporto resta lo stesso, quindi il pH non cambia; la capacità per litro, invece, diminuisce. Le moli totali contenute nel recipiente restano le stesse. Con diluizioni molto spinte anche il pH comincia a spostarsi verso 7.

![Bilancio delle moli di acido e base coniugata prima e dopo aggiunta di acido forte](/figure/chimica-semestre-filtro/acidi-basi-redox/tampone-it.svg)

La figura mostra un tampone con $50\,\mathrm{mmol}$ totali fra acido acetico e acetato a cui si aggiungono $5\,\mathrm{mmol}$ di HCl. L'acido aggiunto trasforma $5\,\mathrm{mmol}$ di acetato in acido acetico. Il totale resta $50\,\mathrm{mmol}$, mentre il rapporto fra le due sostanze cambia, e con esso il pH.
:::

## I sistemi tampone nei fluidi biologici

:::osservazione{#tamponi-biologici titolo="Bicarbonato, fosfati e proteine"}
Il pH del sangue è mantenuto fra $7{,}35$ e $7{,}45$ da più tamponi. Il più importante è il **sistema bicarbonato**. L'anidride carbonica prodotta dalle cellule si scioglie nel sangue e reagisce con l'acqua: $\mathrm{CO_2+H_2O\rightleftharpoons H_2CO_3\rightleftharpoons H^++HCO_3^-}$. L'acido della coppia è la $\mathrm{CO_2}$ disciolta e la base è lo ione bicarbonato. Questo tampone è particolarmente efficace perché il sangue è un sistema aperto: i polmoni eliminano la $\mathrm{CO_2}$ e i reni regolano il bicarbonato, quindi le due sostanze vengono continuamente riportate ai valori normali. Il pH si calcola con l'equazione di Henderson-Hasselbalch scritta per questa coppia, a $37\,^\circ\mathrm C$.
$$
\mathrm{pH}\simeq6{,}1+\log_{10}
\dfrac{[\mathrm{HCO_3^-}]}{\alpha p_{\mathrm{CO_2}}},
\qquad \alpha\simeq0{,}030\,\dfrac{\mathrm{mmol}}{\mathrm{L\,mmHg}}.
$$
In questa formula $[\mathrm{HCO_3^-}]$ è la concentrazione del bicarbonato in $\mathrm{mmol\,L^{-1}}$ e $p_{\mathrm{CO_2}}$ è la pressione parziale della $\mathrm{CO_2}$ in $\mathrm{mmHg}$. Il prodotto $\alpha\,p_{\mathrm{CO_2}}$ è la concentrazione della $\mathrm{CO_2}$ disciolta, ricavata dalla legge di Henry. Il numero $6{,}1$ è il $pK_a$ della coppia in queste condizioni. Con i valori normali, $24\,\mathrm{mmol\,L^{-1}}$ e $40\,\mathrm{mmHg}$, si ottiene $\mathrm{pH}=6{,}1+\log_{10}\dfrac{24}{0{,}030\cdot40}=6{,}1+\log_{10}20\simeq7{,}40$.

Gli altri tamponi dell'organismo sono due. Il **tampone fosfato** è formato dalla coppia $\mathrm{H_2PO_4^-/HPO_4^{2-}}$, con $pK_a$ vicino a 7, ed è importante all'interno delle cellule e nelle urine. Le **proteine** contengono gruppi che possono cedere o acquistare protoni, soprattutto nelle catene laterali degli amminoacidi; nel sangue la proteina tampone più importante è l'emoglobina. Un tampone limita la variazione del pH al momento dell'aggiunta. Il ritorno delle quantità ai valori normali è opera dei polmoni e dei reni.

L'**acidosi** è una condizione in cui il pH del sangue scende sotto $7{,}35$ e l'**alcalosi** una condizione in cui sale sopra $7{,}45$. Si dicono *respiratorie* se la causa è una variazione della $\mathrm{CO_2}$ e *metaboliche* se la causa è una variazione del bicarbonato.
:::

:::esempio{titolo="Variabili nel modello bicarbonato"}
La formula permette di prevedere l'effetto di una variazione. Se la $p_{\mathrm{CO_2}}$ raddoppia e il bicarbonato resta costante, il denominatore raddoppia e il pH diminuisce di $\log_{10}2\simeq0{,}30$: da $7{,}40$ scende a $7{,}10$. È ciò che accade quando la respirazione è insufficiente e la $\mathrm{CO_2}$ si accumula (acidosi respiratoria). Nell'organismo i reni rispondono trattenendo bicarbonato, e nel tempo il pH risale in parte; la formula descrive l'effetto chimico immediato.
:::

## Solubilità ed equilibrio acido-base

:::osservazione{#solubilita-ph titolo="Protonazione e dissoluzione dei sali"}
La solubilità di molti sali poco solubili dipende dal pH. Accade quando l'anione del sale è la base coniugata di un acido debole, perché in ambiente acido l'anione acquista un protone. Un esempio è l'ossalato di calcio, il cui equilibrio di solubilità è
$$
\mathrm{CaC_2O_4(s)\rightleftharpoons Ca^{2+}+C_2O_4^{2-}},
\qquad K_{ps}=a_{\mathrm{Ca^{2+}}}a_{\mathrm{C_2O_4^{2-}}}.
$$
Se si aggiunge un acido, lo ione ossalato acquista un protone: $\mathrm{C_2O_4^{2-}+H^+\rightleftharpoons HC_2O_4^-}$. La concentrazione di ossalato libero diminuisce e, per il principio di Le Chatelier, altro solido si scioglie. L'ossalato di calcio è quindi più solubile in ambiente acido. Lo stesso vale per i fosfati di calcio, che formano le ossa e lo smalto dei denti: gli acidi prodotti dai batteri della bocca sciolgono lo smalto e causano la carie.

L'acido urico si comporta in modo opposto. La sua forma neutra, che prevale a pH acido, è poco solubile, mentre l'anione urato, che prevale a pH più alto, lo è di più. Un pH basso favorisce quindi la precipitazione dell'acido urico. In generale un ambiente acido aumenta la solubilità dei sali il cui anione è una base, e diminuisce la solubilità degli acidi deboli che sono poco solubili nella forma neutra.
:::

:::osservazione{titolo="Specie libere e concentrazione totale"}
Nel prodotto di solubilità compare solo lo ione ossalato libero $\mathrm{C_2O_4^{2-}}$, e non la forma protonata $\mathrm{HC_2O_4^-}$. Un'analisi di laboratorio misura di solito l'ossalato totale, cioè la somma delle due forme. Per calcolare il prodotto ionico si ricava prima, dal pH, quale frazione del totale è nella forma libera.

![Equilibrio di dissoluzione accoppiato alla protonazione dell'ossalato libero](/figure/chimica-semestre-filtro/acidi-basi-redox/solubilita-it.svg)
:::

## Ossidazione, riduzione e bilanciamento

:::definizione{#redox titolo="Trasferimento di elettroni e agenti redox"}
Una reazione di **ossidoriduzione** (o redox) è una reazione in cui alcuni elettroni passano da una sostanza a un'altra. Vi avvengono insieme due processi.

- L'**ossidazione** è la perdita di elettroni. Il numero di ossidazione dell'atomo aumenta.
- La **riduzione** è l'acquisto di elettroni. Il numero di ossidazione dell'atomo diminuisce.

La sostanza che cede elettroni si ossida e si chiama **riducente**, perché fa ridurre l'altra. La sostanza che acquista elettroni si riduce e si chiama **ossidante**. Ogni reazione redox si può scomporre in due **semireazioni**, una di ossidazione e una di riduzione. Le due seguenti descrivono la reazione fra lo zinco metallico e gli ioni rame.
$$
\mathrm{Zn\rightarrow Zn^{2+}+2e^-},\qquad
\mathrm{Cu^{2+}+2e^-\rightarrow Cu}.
$$
Lo zinco cede due elettroni e passa da numero di ossidazione 0 a $+2$: si ossida ed è il riducente. Lo ione rame(II) acquista due elettroni e passa da $+2$ a 0: si riduce ed è l'ossidante. Sommando le due semireazioni si ottiene $\mathrm{Zn+Cu^{2+}\rightarrow Zn^{2+}+Cu}$. Gli elettroni ceduti in un'ossidazione sono sempre tanti quanti quelli acquistati nella riduzione.
:::

:::osservazione{#bilanciamento-redox titolo="Metodo delle semireazioni"}
Una reazione redox si bilancia con il **metodo delle semireazioni**. In ambiente acido i passi sono sei.

1. Si scrivono separatamente le due semireazioni.
2. In ciascuna si bilanciano gli atomi diversi da idrogeno e ossigeno.
3. Si bilancia l'ossigeno aggiungendo molecole di $\mathrm{H_2O}$.
4. Si bilancia l'idrogeno aggiungendo ioni $\mathrm{H^+}$.
5. Si bilancia la carica aggiungendo elettroni.
6. Si moltiplicano le semireazioni in modo che gli elettroni ceduti siano uguali a quelli acquistati, e si sommano.

Per esempio, lo ione permanganato $\mathrm{MnO_4^-}$ ossida il ferro(II). Il manganese acquista 5 elettroni e ogni ione ferro ne cede 1, quindi la semireazione del ferro va moltiplicata per 5.
$$
\begin{aligned}
\mathrm{MnO_4^-+8H^++5e^-}&\mathrm{\rightarrow Mn^{2+}+4H_2O},\\
\mathrm{5Fe^{2+}}&\mathrm{\rightarrow5Fe^{3+}+5e^-},\\
\mathrm{MnO_4^-+8H^++5Fe^{2+}}&\mathrm{\rightarrow Mn^{2+}+4H_2O+5Fe^{3+}}.
\end{aligned}
$$
Nell'equazione finale gli elettroni non compaiono più, perché i 5 ceduti dal ferro sono i 5 acquistati dal manganese. Come controllo si verifica la carica: a sinistra $-1+8+5\cdot2=+17$ e a destra $+2+5\cdot3=+17$. In ambiente basico si bilancia prima come in ambiente acido; poi si aggiungono ai due membri tanti ioni $\mathrm{OH^-}$ quanti sono gli $\mathrm{H^+}$. Gli $\mathrm{H^+}$ e gli $\mathrm{OH^-}$ dallo stesso lato formano acqua, e le molecole d'acqua presenti in entrambi i membri si semplificano.
:::

:::osservazione{titolo="Controllare atomi e carica"}
Un'equazione redox è bilanciata quando sono uguali nei due membri sia gli atomi di ogni elemento sia la carica totale. Può accadere che gli atomi siano bilanciati e la carica no; in questo caso gli elettroni scambiati non sono stati pareggiati. La scelta fra ambiente acido e basico stabilisce se usare $\mathrm{H^+}$ oppure $\mathrm{OH^-}$ nel bilanciamento, e può cambiare anche i prodotti: il permanganato si riduce a $\mathrm{Mn^{2+}}$ in ambiente acido e a $\mathrm{MnO_2}$ in ambiente neutro o basico.

![Cinque ossidazioni del ferro bilanciano la riduzione di uno ione permanganato](/figure/chimica-semestre-filtro/acidi-basi-redox/redox-it.svg)
:::

## Celle elettrochimiche, energia e potenziale

:::definizione{#celle-potenziali titolo="Anodo, catodo e potenziali standard"}
Una **cella galvanica**, o pila, è un dispositivo che ricava corrente elettrica da una reazione redox spontanea. Le due semireazioni avvengono in due recipienti separati, così gli elettroni sono costretti a passare da uno all'altro attraverso un filo esterno. In ciascun recipiente è immersa una lamina metallica, l'**elettrodo**.

- L'**anodo** è l'elettrodo in cui avviene l'ossidazione. Qui si liberano elettroni, quindi in una pila è il polo negativo.
- Il **catodo** è l'elettrodo in cui avviene la riduzione. Qui arrivano gli elettroni, quindi in una pila è il polo positivo.

Gli elettroni passano nel filo dall'anodo al catodo. I due recipienti sono collegati anche da un **ponte salino**, un tubo che contiene una soluzione di un sale: i suoi ioni passano nei due recipienti e compensano le cariche che vi si formano.

Ogni semireazione ha un **potenziale standard di riduzione** $E^\circ$, misurato in volt, che indica quanto facilmente la sostanza acquista elettroni. È misurato rispetto all'elettrodo a idrogeno, al quale si assegna il valore zero, in condizioni standard: concentrazioni $1\,\mathrm{mol\,L^{-1}}$ e gas alla pressione di $1\,\mathrm{bar}$. Fra due coppie, quella con il potenziale più alto si riduce e fa da catodo; l'altra si ossida e fa da anodo. La differenza di potenziale della pila è
$$
E^\circ=E^\circ_{\mathrm{red,c}}-E^\circ_{\mathrm{red,a}}.
$$
I pedici $c$ e $a$ indicano il catodo e l'anodo, e si usano i potenziali di riduzione di entrambi, così come sono in tabella. Per esempio, $E^\circ(\mathrm{Cu^{2+}/Cu})=0{,}34\,\mathrm V$ ed $E^\circ(\mathrm{Zn^{2+}/Zn})=-0{,}76\,\mathrm V$. Il rame ha il potenziale più alto, quindi è il catodo, e la pila ha $E^\circ=0{,}34-(-0{,}76)=1{,}10\,\mathrm V$. Se una semireazione viene moltiplicata per un numero per pareggiare gli elettroni, il suo potenziale non cambia.
:::

:::esempio{titolo="Elettrodi e conduzione nella pila"}
Nella pila zinco-rame (pila Daniell) lo zinco è l'anodo: la lamina si consuma e libera ioni $\mathrm{Zn^{2+}}$. Il rame è il catodo: gli ioni $\mathrm{Cu^{2+}}$ della soluzione si depositano sulla lamina come rame metallico. Nel filo passano elettroni e nel ponte salino passano ioni. Senza il ponte la pila si fermerebbe subito, perché nel recipiente dello zinco si accumulerebbero cariche positive e in quello del rame cariche negative.

In una **cella elettrolitica** avviene il contrario: un generatore esterno fornisce energia e fa avvenire una reazione non spontanea (elettrolisi). Anche qui l'ossidazione avviene all'anodo e la riduzione al catodo, ma i segni dei poli sono invertiti: l'anodo è positivo e il catodo è negativo.

![Pila zinco-rame: elettroni nel filo e ioni nel ponte salino](/figure/chimica-semestre-filtro/acidi-basi-redox/pila-it.svg)
:::

:::osservazione{#nernst-gibbs titolo="Equazione di Nernst e lavoro elettrico"}
I potenziali standard valgono quando tutte le concentrazioni sono $1\,\mathrm{mol\,L^{-1}}$. Con concentrazioni diverse il potenziale della pila cambia. L'**equazione di Nernst** dà il potenziale $E$ in funzione del quoziente di reazione $Q$.
$$
E=E^\circ-\dfrac{RT}{nF}\ln Q.
$$
In questa formula $R$ è la costante dei gas, $T$ la temperatura assoluta, $n$ il numero di elettroni scambiati nella reazione e $F\simeq96485\,\mathrm{C\,mol^{-1}}$ la **costante di Faraday**, cioè la carica di una mole di elettroni. A $25\,^\circ\mathrm C$, passando al logaritmo in base 10, la formula diventa
$$
E=E^\circ-\dfrac{0{,}05916\,\mathrm V}{n}\log_{10}Q.
$$
Per esempio, nella pila $\mathrm{Zn+Cu^{2+}\rightarrow Zn^{2+}+Cu}$ si scambiano $n=2$ elettroni e $Q=\dfrac{a_{\mathrm{Zn^{2+}}}}{a_{\mathrm{Cu^{2+}}}}$, cioè il rapporto fra le concentrazioni dei due ioni; i metalli solidi non compaiono. Se $Q=100$, il potenziale è $E=1{,}10-\dfrac{0{,}05916}{2}\cdot2=1{,}041\,\mathrm V$. Mentre la pila funziona, gli ioni zinco aumentano e gli ioni rame diminuiscono, quindi $Q$ cresce e il potenziale scende.

Il potenziale è legato all'energia libera della reazione da $\Delta_rG=-nFE$, e in condizioni standard da $\Delta_rG^\circ=-nFE^\circ$. Se $E>0$ allora $\Delta_rG<0$ e la reazione è spontanea nel verso scritto. Il valore $-\Delta_rG$ è il massimo lavoro elettrico che la pila può fornire per ogni mole di reazione. Quando la pila è scarica la reazione ha raggiunto l'equilibrio: $E=0$ e $Q=K$. Dall'equazione di Nernst si ricava allora la costante di equilibrio, $\ln K=\dfrac{nFE^\circ}{RT}$.

In biochimica si usa il potenziale standard $E^{\circ\prime}$, riferito a pH 7 invece che a una concentrazione di $\mathrm{H^+}$ pari a $1\,\mathrm{mol\,L^{-1}}$, perché nelle cellule il pH è vicino a 7.
:::

:::osservazione{titolo="Potenziale e condizioni effettive"}
Il potenziale non dipende dalla quantità di sostanza che reagisce. Se si moltiplica l'equazione per 2, raddoppiano gli elettroni $n$ e raddoppia $\Delta_rG$, ma il rapporto $-\dfrac{\Delta_rG}{nF}$ resta lo stesso. Per questo i potenziali non si moltiplicano per i coefficienti. Un valore $E^\circ>0$ indica che la reazione è spontanea in condizioni standard. In condizioni diverse conta il valore di $E$ dato dall'equazione di Nernst, che per $Q$ molto grande può diventare negativo; in quel caso è spontanea la reazione inversa.

![Dipendenza del potenziale della pila zinco-rame dal logaritmo del quoziente di reazione](/figure/chimica-semestre-filtro/acidi-basi-redox/nernst-it.svg)
:::

## Ossigeno, respirazione e specie radicaliche

:::osservazione{#ossigeno-respirazione titolo="Ossigeno come accettore di elettroni"}
Nella **respirazione cellulare** gli elettroni tolti alle molecole del cibo passano da una molecola all'altra lungo la catena di trasporto degli elettroni, nei mitocondri. L'ultima sostanza che li riceve è l'ossigeno, che si riduce ad acqua.
$$
\mathrm{O_2+4H^++4e^-\rightarrow2H_2O}.
$$
La reazione complessiva dell'ossidazione del glucosio è $\mathrm{C_6H_{12}O_6+6O_2\rightarrow6CO_2+6H_2O}$. Il carbonio del glucosio si ossida a $\mathrm{CO_2}$ e l'ossigeno si riduce ad acqua. È la stessa reazione della combustione del glucosio, ma nella cellula avviene in molti passaggi, e una parte dell'energia liberata viene usata per produrre ATP (adenosina trifosfato, la molecola che fornisce energia alle reazioni cellulari) invece di disperdersi tutta come calore.

Il potenziale della coppia ossigeno/acqua dipende dal pH, perché nella semireazione compaiono ioni $\mathrm{H^+}$. In condizioni standard, cioè a pH 0, vale $E^\circ=1{,}229\,\mathrm V$ a $25\,^\circ\mathrm C$. Applicando l'equazione di Nernst si ottiene $E=1{,}229-0{,}05916\,\mathrm{pH}$ in volt. A pH 7 il potenziale è circa $0{,}815\,\mathrm V$. È un valore alto, quindi l'ossigeno è un forte ossidante anche alle condizioni della cellula.
:::

:::osservazione{#fenton-haber-weiss titolo="Fenton e bilancio di Haber-Weiss"}
L'ossigeno si riduce ad acqua acquistando quattro elettroni. Se ne acquista meno, si formano sostanze molto reattive, dette **specie reattive dell'ossigeno**. Con un elettrone si forma lo ione superossido $\mathrm{O_2^{\bullet-}}$ e con due il perossido di idrogeno $\mathrm{H_2O_2}$. Un **radicale** è una sostanza con un elettrone spaiato, indicato con un punto nella formula. Nella **reazione di Fenton** il ferro(II) reagisce con il perossido di idrogeno.
$$
\mathrm{Fe^{2+}+H_2O_2\rightarrow Fe^{3+}+OH^-+{}^\bullet OH}.
$$
Il ferro(II) cede un elettrone e diventa ferro(III). Il perossido si divide in uno ione idrossido $\mathrm{OH^-}$ e in un **radicale ossidrile** ${}^\bullet\mathrm{OH}$, che è una delle sostanze più reattive presenti nelle cellule e danneggia il DNA (acido desossiribonucleico), le proteine e i lipidi. Il superossido riporta poi il ferro(III) a ferro(II).
$$
\mathrm{Fe^{3+}+O_2^{\bullet-}\rightarrow Fe^{2+}+O_2}.
$$
Il ferro(II) è di nuovo disponibile per un'altra reazione di Fenton, quindi il ferro agisce da catalizzatore. Sommando le due reazioni il ferro si semplifica e si ottiene la reazione complessiva, detta di **Haber-Weiss**.
$$
\mathrm{O_2^{\bullet-}+H_2O_2\rightarrow O_2+OH^-+{}^\bullet OH}.
$$
Senza il ferro la reazione diretta fra superossido e perossido è molto lenta. Per questo nelle cellule il ferro libero è mantenuto a concentrazioni bassissime, legato a proteine come la ferritina e la transferrina. È un altro caso in cui una reazione favorita avviene a velocità apprezzabile solo in presenza di un catalizzatore.
:::

:::osservazione{titolo="Distinguere radicali e ioni"}
Il punto nella formula indica un elettrone spaiato. Lo ione idrossido $\mathrm{OH^-}$ e il radicale ossidrile ${}^\bullet\mathrm{OH}$ sono due sostanze diverse: il primo ha una carica negativa e tutti gli elettroni accoppiati, il secondo è neutro e ha un elettrone spaiato. Il perossido di idrogeno è una specie reattiva dell'ossigeno senza essere un radicale, perché non ha elettroni spaiati. Un **chelante** è una molecola che lega uno ione metallico. Se in un esperimento l'aggiunta di un chelante del ferro riduce il danno ossidativo, il risultato indica che il ferro libero partecipa alla reazione.

![Riciclo del ferro nel modello radicalico di Fenton e nel bilancio catalizzato di Haber-Weiss](/figure/chimica-semestre-filtro/acidi-basi-redox/fenton-it.svg)
:::
