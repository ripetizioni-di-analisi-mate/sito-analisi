---
titolo: "Metodi energetici e metodo degli spostamenti"
sommario: "Come ricavare spostamenti e reazioni dall’energia elastica e risolvere travi e telai mediante le rigidezze dei nodi."
---

## Energia elastica delle aste

:::definizione{#energia-elastica titolo="Energia elastica e azioni interne"}
Una forza che cresce lentamente allunga un tirante. A ogni incremento di allungamento, la forza compie un lavoro che si accumula come **energia elastica**. Per una struttura elastica lineare la relazione fra forza e allungamento è lineare. L’area sotto il grafico della forza in funzione dell’allungamento è quindi un triangolo. Con forza finale $N$ e allungamento $u$ si ottiene $U=\dfrac12 Nu$.

In una barra prismatica lunga $L$, con modulo elastico $E$ e area $A$, l’allungamento è $u=\dfrac{NL}{EA}$. La grandezza $EA$ è la rigidezza assiale. Per un’asta in cui $N$ o $EA$ variano con l’ascissa $x$, si sommano le energie degli elementi di lunghezza $dx$. In un sistema di aste con comportamento elastico lineare, si possono sommare i contributi assiali e flessionali quando le rispettive deformazioni sono disaccoppiate.

$$
U=\sum_e\int_0^{L_e}
\left(\frac{N_e(x)^2}{2E_eA_e}
+\frac{M_e(x)^2}{2E_eI_e}\right)dx.
$$

L’indice $e$ individua l’asta e $I_e$ è il suo momento d’inerzia rispetto all’asse di flessione. L’integrale si esegue in ciascun tratto con la legge delle azioni interne valida in quel tratto. Il quadrato rende positivo il contributo anche nei tratti in compressione o con momento negativo. Se occorre tenere conto della deformazione da taglio, si aggiunge il termine $\dfrac{T^2}{2GA_s}$, con $G$ modulo di taglio e $A_s$ area efficace prevista dal modello adottato.
:::

:::esempio{titolo="Due tratti di un tirante con aree diverse"}
Una forza di trazione di $24\,\mathrm{kN}$ attraversa due tratti in serie. Il primo tratto ha lunghezza $1\,\mathrm{m}$ e rigidezza $EA_1=24\,000\,\mathrm{kN}$. Il secondo ha lunghezza $2\,\mathrm{m}$ e rigidezza $EA_2=12\,000\,\mathrm{kN}$. Poiché fra i due tratti manca un carico intermedio, lo sforzo normale ha lo stesso valore in entrambi. I contributi all’energia sono

$$
U_1=\frac{24^2\cdot1}{2\cdot24\,000}\,\mathrm{kN\,m}
=0{,}012\,\mathrm{kN\,m},
\qquad
U_2=\frac{24^2\cdot2}{2\cdot12\,000}\,\mathrm{kN\,m}
=0{,}048\,\mathrm{kN\,m}.
$$

Il secondo tratto accumula quattro volte l’energia del primo, perché è lungo il doppio e ha rigidezza dimezzata. La somma vale $0{,}060\,\mathrm{kN\,m}$. Lo spostamento della punta è la somma degli allungamenti dei due tratti, cioè $5\,\mathrm{mm}$. Il lavoro della forza crescente dà lo stesso valore, pari a $\dfrac12\cdot24\cdot0{,}005\,\mathrm{kN\,m}$.

::struttura{nodi="A,0,0;B,1,0;C,3,0" aste="A-B;B-C" vincoli="A,incastro,180" forze="C,0.65,0,P" quote="A,B,1 m;B,C,2 m" etichette="0.55,0.28,EA_1;2,0.28,EA_2" titolo="Asta con due rigidezze assiali in serie"}
:::

:::esempio{titolo="Prova di flessione a tre punti"}
La macchina applica una forza in mezzeria mentre il provino poggia sui due sostegni. L’area sotto la curva forza–spostamento misura il lavoro del carico. Nel tratto elastico lineare, sotto carico quasi statico, l’area è un triangolo e dà l’energia elastica accumulata.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/prova-flessione.webp" alt="Macchina di prova che applica un carico centrale a un provino sostenuto su due appoggi" width="1280" height="1000" loading="lazy" decoding="async"><figcaption>Prova di flessione a tre punti. Foto ridimensionata di <a href="https://commons.wikimedia.org/wiki/File:Three_point_flexural_test.jpg">Cjp24</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</figcaption></figure>
:::

## Energia flessionale e lavoro esterno

:::definizione{#energia-flessionale titolo="Energia della trave inflessa"}
Per una trave di Eulero–Bernoulli in campo elastico lineare, sia $w(x)$ lo spostamento trasversale positivo verso l’alto. La rotazione antioraria vale $\varphi=w^\prime$. Il momento positivo tende le fibre inferiori e vale $M=EIw^{\prime\prime}$. Se si usa la freccia $v=-w$ positiva verso il basso, la stessa relazione diventa $M=-EIv^{\prime\prime}$.

Un elemento di lunghezza $dx$ ruota relativamente di $w^{\prime\prime}dx$ fra le sue due sezioni estreme. Il contributo energetico è quindi $\dfrac12 M w^{\prime\prime}dx$. Sostituendo la relazione costitutiva si ottiene

$$
U_M=\int_0^L\frac{M(x)^2}{2EI}\,dx
=\frac12\int_0^L EI\big(w^{\prime\prime}(x)\big)^2\,dx.
$$

La prima espressione è comoda quando sono note le azioni interne. La seconda usa direttamente la deformata ed è adatta a derivare le rigidezze. Con $M$ in $\mathrm{kN\,m}$, $EI$ in $\mathrm{kN\,m^2}$ e $dx$ in $\mathrm{m}$, l’integrale dà $\mathrm{kN\,m}$.
:::

:::esempio{titolo="Una coppia all’estremità della mensola"}
Una mensola di lunghezza $L$ porta una coppia antioraria $C$ in punta. Poiché lungo la trave manca un carico trasversale, il taglio è nullo e il momento interno è costante. Ne segue $U_M=\dfrac{C^2 L}{2EI}$. La rotazione varia linearmente lungo la mensola perché la curvatura è costante. In punta vale $\varphi_B=\dfrac{CL}{EI}$. Il prodotto $\dfrac12 C\varphi_B$ coincide con l’integrale dell’energia.

::struttura{nodi="A,0,0;B,3,0" aste="A-B" vincoli="A,incastro,180" coppie="B,1,C" quote="A,B,L" titolo="Coppia antioraria applicata alla punta della mensola"}
:::

::::teorema{#clapeyron titolo="Teorema di Clapeyron"}
Si consideri una struttura elastica lineare che parte scarica, senza deformazioni imposte, con vincoli fissi. Siano $Q_i$ le forze e coppie finali e siano $d_i$ gli spostamenti e le rotazioni a esse coniugati. Una forza è coniugata allo spostamento nel proprio verso. Una coppia è coniugata alla rotazione misurata con la stessa convenzione di segno. L’energia elastica totale è

$$
U=\frac12\sum_i Q_i d_i.
$$

Per un carico distribuito si aggiunge il contributo continuo $\dfrac12\int q(x)v(x)\,dx$, dove $q$ e $v$ si misurano nel medesimo verso.

:::dimostrazione
Si fa crescere l’insieme delle forze da zero ai valori finali moltiplicandolo per un parametro $\lambda$ che passa da $0$ a $1$. Per linearità anche gli spostamenti valgono $\lambda d_i$. Il lavoro incrementale è quindi $\lambda\sum_i Q_i d_i\,d\lambda$. Integrando in $\lambda$ si ottiene il fattore $\dfrac12$. Le reazioni ai vincoli fissi compiono lavoro nullo perché i corrispondenti spostamenti sono nulli. In condizioni quasi statiche il lavoro coincide con l’energia elastica.
:::
::::


:::osservazione{titolo="Vincoli fissi e contributi al lavoro"}
La formula di Clapeyron include solo le forze per cui esiste uno spostamento coniugato. Per esempio, una coppia applicata a un estremo con rotazione bloccata può cambiare la reazione locale. In quella coordinata la rotazione è nulla, quindi la coppia compie lavoro nullo. Se si impone invece il movimento di un vincolo, l’azione che lo mantiene in posizione ha uno spostamento coniugato e va inclusa nel bilancio. Il carico imposto e il lavoro della reazione sono allora contributi distinti.

La condizione di struttura inizialmente scarica permette di misurare il lavoro dall’origine. In presenza di tensioni iniziali o di una variazione di temperatura imposta, la relazione fra i soli carichi meccanici finali e la deformazione totale può avere un termine iniziale. Occorre allora esplicitare lo stato iniziale e la parte di deformazione che contribuisce all’energia elastica.
:::

## Reciprocità di Betti e Maxwell

::::teorema{#betti-maxwell titolo="Lavori mutui e reciprocità"}
Si applichino separatamente due sistemi di carico, contrassegnati da $(1)$ e $(2)$, alla stessa struttura lineare con vincoli invariati. Sia $Q_i^{(1)}$ la forza o coppia del primo sistema nella coordinata $i$ e sia $d_i^{(2)}$ lo spostamento che il secondo sistema produce in quella coordinata. Per il **teorema di Betti** vale

$$
\sum_i Q_i^{(1)}d_i^{(2)}
=\sum_i Q_i^{(2)}d_i^{(1)}.
$$

Il caso di due carichi unitari applicati separatamente a due coordinate dà la **reciprocità di Maxwell**. Lo spostamento nella prima coordinata prodotto da un carico unitario nella seconda coincide con lo spostamento nella seconda prodotto da un carico unitario nella prima. L’uguaglianza riguarda valori con segno e richiede che carico e spostamento di ciascuna coordinata siano coniugati.

:::dimostrazione
Sovrapponendo i due sistemi, l’energia totale contiene un termine incrociato. In ciascuna asta la parte flessionale di questo termine è $\int\dfrac{M^{(1)}M^{(2)}}{EI}\,dx$. Il lavoro del primo sistema negli spostamenti del secondo dà questa espressione, insieme agli eventuali contributi assiali, per il principio dei lavori virtuali. Scambiando i sistemi, il prodotto dei due momenti resta uguale. Lo stesso vale per il prodotto degli sforzi normali. Quindi i due lavori mutui coincidono.
:::
::::

:::esempio{titolo="Scambio fra due sezioni di un tirante"}
In un’asta incastrata assialmente in $A$, le sezioni $B$ e $C$ distano rispettivamente $a$ e $b$ dal vincolo, con $a<b$. Se una forza $F$ agisce in $C$, il tratto $AB$ porta lo sforzo $F$ e il suo allungamento è $\dfrac{Fa}{EA}$. Questo è lo spostamento di $B$. Se la stessa forza agisce in $B$, il tratto $BC$ ha sforzo normale nullo e si trasla insieme a $B$. Quindi anche lo spostamento di $C$ vale $\dfrac{Fa}{EA}$. La lunghezza comune che si deforma nei due lavori mutui è $a$.

::struttura{nodi="A,0,0;B,1,0;C,3,0" aste="A-B;B-C" vincoli="A,incastro,180" quote="A,B,a;A,C,b,1.35" titolo="Due sezioni in cui confrontare carico e spostamento"}
:::

## Derivate dell’energia e carichi ausiliari

::::teorema{#castigliano titolo="Teorema di Castigliano"}
Per una struttura stabile elastica lineare con vincoli fissi e senza deformazioni iniziali, si esprima l’energia elastica $U$ in funzione dei carichi indipendenti. La derivata rispetto a una forza o coppia $Q_i$ dà lo spostamento o la rotazione coniugata.

$$
d_i=\frac{\partial U}{\partial Q_i}.
$$

Nel modello flessionale la derivazione dell’energia sotto il segno di integrale dà

$$
d_i=\sum_e\int_0^{L_e}
\frac{M_e}{E_e I_e}\,\frac{\partial M_e}{\partial Q_i}\,dx.
$$

Se il carico è una forza verso il basso, la derivata dà lo spostamento positivo verso il basso. Se il carico è una coppia antioraria, la derivata dà una rotazione positiva in verso antiorario. Il segno si stabilisce quindi prima di calcolare i diagrammi.

:::dimostrazione
Per Clapeyron si ha $U=\dfrac12\sum_j Q_jd_j$. Poiché gli spostamenti dipendono linearmente dai carichi, si può scrivere $d_j=\sum_k f_{jk}Q_k$, dove $f_{jk}$ è il coefficiente di flessibilità. Derivando il prodotto, un termine è $\dfrac12 d_i$. Il secondo è $\dfrac12\sum_j Q_j f_{ji}$. Per reciprocità $f_{ji}=f_{ij}$, quindi anche il secondo termine vale $\dfrac12 d_i$. La somma dà $d_i$.
:::
::::

:::esempio{#carico-ausiliario titolo="Freccia in un punto privo di forza concentrata"}
Su una mensola agisce un carico uniforme $q$ diretto verso il basso. Per trovare la freccia in punta si aggiunge una forza ausiliaria $F$ verso il basso in quel punto. Se $x$ si misura dall’incastro, il momento vale

$$
M(x)=-\frac{q(L-x)^2}{2}-F(L-x).
$$

La derivata di $M$ rispetto a $F$ vale $-(L-x)$. Si deriva prima l’energia e si pone poi $F=0$, perché nello schema reale resta il solo carico uniforme. Ne segue

$$
v_B=\int_0^L\frac{q(L-x)^3}{2EI}\,dx
=\frac{qL^4}{8EI}.
$$

Il risultato è positivo nel verso della forza ausiliaria. Se si sostituisse $F=0$ prima della derivazione, si perderebbe la dipendenza dell’energia dal carico coniugato alla freccia cercata.

::struttura{nodi="A,0,0;B,4,0" aste="A-B" vincoli="A,incastro,180" carichi="A,B,0.5,0.5,q" forze="B,0,-1.1,F" quote="A,B,L" titolo="Carico reale uniforme e forza ausiliaria in punta"}
:::

## Menabrea e incognite iperstatiche

::::teorema{#menabrea titolo="Condizione energetica di Menabrea"}
Si rimuovano i vincoli sovrabbondanti da una struttura elastica lineare in modo da ottenere uno schema principale isostatico e stabile. In ciascuna coordinata liberata si introduca la corrispondente reazione incognita $X_i$. Se i vincoli rimossi imponevano spostamenti nulli, i valori reali delle incognite soddisfano

$$
\frac{\partial U}{\partial X_i}=0.
$$

La condizione esprime la compatibilità nella direzione della reazione. Se esiste invece uno spostamento assegnato $\bar d_i$ nella stessa direzione, la derivata deve valere $\bar d_i$, con il segno della coordinata liberata.

:::dimostrazione
Nello schema principale le reazioni incognite sono carichi indipendenti. Per Castigliano, $\dfrac{\partial U}{\partial X_i}$ è lo spostamento nella coordinata in cui agisce $X_i$. Lo spostamento reale deve coincidere con quello assegnato dal vincolo. Nel caso di vincoli senza cedimenti, la stazionarietà è un minimo se le deformazioni prodotte da combinazioni distinte delle reazioni sono indipendenti. Infatti la parte quadratica dell’energia è positiva per ogni combinazione non nulla di tali reazioni.
:::
::::

:::esempio{titolo="Appoggio di una mensola puntellata"}
Una mensola di luce $L$ è puntellata in $B$ ed è soggetta a $q$ verso il basso su tutta la luce. Si rimuove il puntello e si introduce $X$ verso l’alto in $B$. Il momento vale $M=X(L-x)-\dfrac{q(L-x)^2}{2}$. La coordinata coniugata a $X$ è lo spostamento verso l’alto di $B$, che il puntello impone nullo. Pertanto

$$
0=\frac{1}{EI}\left(X\frac{L^3}{3}-q\frac{L^4}{8}\right),
\qquad
X=\frac{3qL}{8}.
$$

I due termini si possono leggere come due spostamenti. Il primo è dovuto alla reazione incognita. Il secondo è la freccia della mensola libera dovuta al carico distribuito, con segno opposto. La somma nulla mostra come il metodo delle forze e la derivazione dell’energia esprimano la stessa condizione di compatibilità.

::struttura{nodi="A,0,0;B,4,0" aste="A-B" vincoli="A,incastro,180;B,carrello" carichi="A,B,0.52,0.52,q" quote="A,B,L" titolo="Schema reale della mensola con appoggio in punta"}

::struttura{nodi="A,0,0;B,4,0" aste="A-B" vincoli="A,incastro,180" carichi="A,B,0.52,0.52,q" reazioni="B,0,0.95,X" quote="A,B,L" titolo="Schema principale con la reazione introdotta come incognita"}
:::

## Rigidezza di una trave ai suoi estremi

::::teorema{#rigidezza-rotazionale titolo="Momenti d’estremità dovuti alle rotazioni"}
Sia $AB$ una trave prismatica di rigidezza $EI$ e lunghezza $L$. In assenza di carico distribuito o concentrato fra gli estremi, si impongano spostamenti verticali nulli e rotazioni antiorarie $\varphi_A$ e $\varphi_B$. Le coppie esterne $m_A$ e $m_B$ applicate alle estremità della singola asta sono entrambe positive in senso antiorario. Valgono

$$
\begin{aligned}
m_A&=\frac{EI}{L}(4\varphi_A+2\varphi_B),\\[6pt]
m_B&=\frac{EI}{L}(2\varphi_A+4\varphi_B).
\end{aligned}
$$

Il coefficiente $\dfrac{4EI}{L}$ è la rigidezza alla rotazione di un estremo quando l’altro è impedito. Il coefficiente $\dfrac{2EI}{L}$ misura il momento trasmesso all’altro estremo per la stessa rotazione.

:::dimostrazione
Senza carichi fra gli estremi, l’equilibrio impone una curvatura lineare, quindi $w(x)$ è un polinomio cubico. Indicando con $r=\dfrac{x}{L}$ l’ascissa adimensionale, il cubico che soddisfa gli spostamenti e le pendenze assegnati è

$$
w(x)=L\big[\varphi_A(r-2r^2+r^3)+\varphi_B(-r^2+r^3)\big].
$$

Le azioni esterne al bordo sinistro e al bordo destro hanno segni opposti rispetto al momento interno. Infatti l’integrazione per parti della variazione dell’energia produce il termine al bordo $[EIw^{\prime\prime}\,\delta w^\prime]_0^L$. Ne segue $m_A=-EIw^{\prime\prime}(0)$ e $m_B=EIw^{\prime\prime}(L)$. Sostituendo la derivata seconda del cubico si ottengono le due relazioni.
:::
::::

:::esempio{titolo="Rotazione antioraria a un solo estremo"}
Se si impone $\varphi_A=\varphi$ e si blocca $\varphi_B$, le due coppie esterne valgono rispettivamente $\dfrac{4EI}{L}\varphi$ e $\dfrac{2EI}{L}\varphi$. Le due coppie hanno lo stesso segno. Per equilibrare la loro somma serve una coppia di forze verticali agli estremi. Il segno delle coppie esterne va tenuto distinto dal segno del diagramma del momento interno alle sezioni terminali.

:::

## Traslazioni e cerniere

:::definizione{#rotazione-corda titolo="Rotazione della corda"}
Siano $w_A$ e $w_B$ gli spostamenti trasversali verso l’alto delle estremità. La **rotazione della corda** è $\psi=\dfrac{w_B-w_A}{L}$. Si tratta dell’inclinazione della retta che unisce gli estremi spostati, nell’ipotesi di piccoli spostamenti.

Per ricavare la flessione si sottrae la retta $w_A+\psi x$ dalla deformata. La retta ha curvatura nulla. Di conseguenza la differenza conserva la curvatura della deformata e ha spostamenti nulli agli estremi. Le sue rotazioni di estremità sono $\varphi_A-\psi$ e $\varphi_B-\psi$. Sostituendole nella relazione di rigidezza si ottiene

$$
\begin{aligned}
m_A&=\frac{EI}{L}(4\varphi_A+2\varphi_B-6\psi),\\[6pt]
m_B&=\frac{EI}{L}(2\varphi_A+4\varphi_B-6\psi).
\end{aligned}
$$

Se le rotazioni dei due estremi coincidono entrambe con $\psi$, la trave compie un moto rigido infinitesimo e le coppie dovute a deformazione sono nulle.
:::

:::esempio{#rigidezza-traslazionale titolo="Traslazione trasversale con rotazioni nulle"}
Si mantengano entrambe le rotazioni nulle e si imponga a $B$ uno spostamento $\Delta$ verso l’alto, mentre $A$ è fisso. Le due coppie esterne valgono $-\dfrac{6EI\Delta}{L^2}$. Dall’equilibrio dei momenti rispetto ad $A$ si ottiene la forza trasversale esterna in $B$.

$$
F_BL+m_A+m_B=0,
\qquad
F_B=\frac{12EI\Delta}{L^3}.
$$

La forza ha il verso dello spostamento assegnato. Il rapporto fra la forza e quello spostamento è la rigidezza trasversale con rotazioni bloccate. In un telaio il calcolo si applica in coordinate locali a ogni elemento.

::struttura{nodi="A,0,0;B,4,0,-" aste="A-B" vincoli="A,incastro,180;B,incastro,0" quote="A,B,L" frecce="4,0,4,0.85,Δ" tratteggi="0,0 1,0.12 2,0.43 3,0.74 4,0.85" etichette="4.17,-0.13,B" titolo="Spostamento assegnato in B con rotazioni bloccate"}
:::

:::esempio{#rigidezza-cerniera titolo="Rigidezza quando l’estremo opposto è incernierato"}
Si blocchino le traslazioni e si lasci libero di ruotare l’estremo $B$ con una cerniera. Senza carichi fra gli estremi, la condizione $m_B=0$ dà

$$
2\varphi_A+4\varphi_B=0,
\qquad
\varphi_B=-\frac{\varphi_A}{2}.
$$

Sostituendo nella prima relazione si ottiene $m_A=\dfrac{3EI}{L}\varphi_A$. La libertà di ruotare in $B$ riduce quindi la rigidezza vista da $A$. Il valore $\dfrac{3EI}{L}$ vale per una rotazione imposta con traslazioni bloccate e senza carico intermedio. Un carico presente sull’asta aggiunge i suoi contributi ai momenti d’estremità.

::struttura{nodi="A,0,0;B,4,0" aste="A-B" vincoli="A,cerniera;B,carrello" quote="A,B,L" coppie="A,1,m_A" titolo="Rotazione assegnata in A e momento esterno nullo in B"}
:::

## Equilibrio dei nodi e metodo degli spostamenti

:::definizione{#metodo-spostamenti titolo="Incognite cinematiche e azioni d’asta"}
Nel **metodo degli spostamenti** le incognite sono le rotazioni e le traslazioni dei nodi liberi. Gli elementi che si incontrano in un nodo rigido condividono lo stesso spostamento e la stessa rotazione del nodo. Si esprimono quindi le azioni d’estremità di ciascuna asta in funzione delle incognite e si impone l’equilibrio del nodo.

Se un’asta porta un carico intermedio, si calcolano anche le azioni esterne che sarebbero necessarie ai suoi estremi per bloccarne gli spostamenti e le rotazioni. Per sovrapposizione queste azioni si sommano ai contributi dovuti ai movimenti effettivi. Le azioni che le aste esercitano sul nodo hanno verso opposto alle azioni esterne esercitate dal nodo su ciascuna asta. Pertanto la somma delle coppie necessarie alle estremità delle aste che convergono nel nodo è uguale alla coppia applicata esternamente al nodo.
:::


:::esempio{titolo="Effetto di un carico presente sulla campata"}
Una campata prismatica di lunghezza $L$ è caricata da $q$ verso il basso. Per ricavare i contributi di carico alle coppie esterne, si bloccano i quattro movimenti trasversali agli estremi. La deformata sotto queste condizioni è

$$
w(x)=-\frac{q}{24EI}x^2(L-x)^2.
$$

Il polinomio ha valore e derivata prima nulli nei due estremi. Inoltre $EIw^{\prime\prime\prime\prime}=-q$, perciò soddisfa l’equazione della linea elastica con forza distribuita verso il basso. Dalle curvature agli estremi si ricavano $m_A^{(0)}=\dfrac{qL^2}{12}$ e $m_B^{(0)}=-\dfrac{qL^2}{12}$. Questi valori entrano nell’equilibrio del nodo insieme alle coppie dovute alle rotazioni effettive. Perciò una struttura con carichi intermedi può richiedere una rotazione nodale anche quando la coppia applicata direttamente al nodo è nulla.
:::

:::esempio{#rigidezza-nodi titolo="Nodo intermedio di una trave continua"}
In una trave continua con due campate, gli estremi lontani $A$ e $C$ sono incastrati. L’appoggio intermedio $B$ blocca lo spostamento verticale, mentre le sezioni delle due campate ruotano insieme. Senza carichi intermedi e con una coppia $C_B$ applicata in $B$, i momenti esterni necessari alle due aste sommano a $C_B$.

$$
\left(\frac{4EI_{AB}}{L_{AB}}
+\frac{4EI_{BC}}{L_{BC}}\right)\varphi_B=C_B.
$$

L’asta con rigidezza rotazionale maggiore riceve la quota maggiore della coppia, perché le due aste sono soggette alla stessa rotazione. Il confronto si fa tra i rapporti $\dfrac{EI_e}{L_e}$, poiché sia la rigidezza flessionale sia la lunghezza influenzano la risposta.

::struttura{nodi="A,0,0;B,3,0;C,6,0" aste="A-B;B-C" vincoli="A,incastro,180;B,carrello;C,incastro,0" quote="A,B,L_1;B,C,L_2" coppie="B,1,C_B" titolo="Trave continua con una sola rotazione incognita"}
:::

:::esempio{titolo="Traslazione di un portale con traverso rigido"}
Si consideri un portale con due colonne uguali alte $H$, incastrate alla base. Il traverso è rigido nel suo piano e le colonne sono assunte assialmente inestensibili. Gli spostamenti verticali in sommità sono quindi nulli. Poiché il traverso è rigido, i due nodi di sommità traslano orizzontalmente dello stesso valore $\Delta$ e hanno rotazione nulla. Ogni colonna ha così rigidezza trasversale $\dfrac{12EI}{H^3}$.

Una forza orizzontale totale $Q$ richiede che le due forze trasversali in sommità sommino a $Q$. Ne segue $\Delta=\dfrac{QH^3}{24EI}$. Se le colonne hanno rigidezze diverse, si sommano i due coefficienti di rigidezza valutati separatamente. Se invece il traverso ha rigidezza flessionale finita, si introducono anche le rotazioni dei nodi di sommità e si impone l’equilibrio delle coppie a entrambi i nodi.

::struttura{nodi="A,0,0;B,0,3;C,4,3;D,4,0" aste="A-B;B-C;C-D" vincoli="A,incastro;D,incastro" forze="C,0.9,0,Q" quote="A,B,H,-0.85" titolo="Portale con due colonne uguali e carico orizzontale in sommità"}
:::


## Controlli sulle equazioni del sistema

:::osservazione{titolo="Rigidezza di sistema e lavoro dei movimenti imposti"}
Una volta scritte le equazioni nodali, si può disporre il sistema nella forma $K\mathbf d=\mathbf f$. Il vettore $\mathbf d$ contiene le coordinate libere, mentre $\mathbf f$ contiene le forze e le coppie equivalenti in quelle coordinate dopo avere trasferito al secondo membro i contributi già noti. La matrice $K$ si ottiene sommando per ogni nodo i contributi delle aste collegate. Per una coordinata di traslazione, il coefficiente diagonale è la forza necessaria a imporre una traslazione unitaria mantenendo bloccate le altre coordinate. Per una coordinata di rotazione, il coefficiente diagonale è la coppia corrispondente a una rotazione unitaria.

Se una coordinata è assegnata, il suo valore contribuisce alle equazioni delle altre coordinate attraverso i coefficienti di rigidezza. Quella coordinata si trasferisce al secondo membro delle equazioni delle coordinate libere. Dopo aver ricavato i movimenti, l’equazione relativa alla coordinata assegnata determina la forza o la coppia necessaria a mantenerla. Per un cedimento vincolare questa procedura fornisce le reazioni prodotte dal cedimento, anche in assenza di altri carichi.
:::

:::osservazione{titolo="Controllo per compatibilità ed equilibrio"}
La deformata di un nodo rigido deve dare la stessa rotazione per tutte le aste che vi terminano. Si verifica quindi la compatibilità rileggendo gli spostamenti effettivamente assegnati a ogni elemento. Si verifica poi l’equilibrio sommando le azioni di tutte le aste sul nodo e il carico esterno. Le reazioni ai vincoli si possono confrontare anche con l’equilibrio dell’intera struttura, perché le forze e le coppie di interazione fra le aste si elidono a coppie.

Le unità distinguono i coefficienti che operano su traslazioni da quelli che operano su rotazioni. Per esempio, $\dfrac{12EI}{L^3}$ si misura in $\mathrm{kN/m}$ e moltiplicato per uno spostamento in metri dà una forza. Il coefficiente $\dfrac{4EI}{L}$ si misura in $\mathrm{kN\,m}$ per radiante e moltiplicato per una rotazione dà una coppia. Quando si assegnano movimenti in millimetri e si usano rigidezze espresse con i metri, la conversione del movimento precede la moltiplicazione. Si evita così di attribuire all’asta una forza mille volte maggiore di quella corrispondente al movimento reale.
:::
