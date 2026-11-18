---
titolo: "Similitudine e teorema di Talete"
sommario: "Segmenti proporzionali, Talete, criteri di similitudine, corrispondenze fra lati, rapporti di perimetri e aree e scale."
---

## Corrispondenze fra figure

:::definizione{#rapporto titolo="Il rapporto di similitudine"}
Due poligoni sono **simili** se hanno angoli corrispondenti congruenti e lati corrispondenti proporzionali. Il rapporto $k>0$ tra una lunghezza della seconda figura e quella della prima è il **rapporto di similitudine** dalla prima alla seconda.

Se un lato passa da $4$ a $10$, $k=\dfrac{10}{4}=\dfrac52$. Un altro lato di $6$ diventa $15$. Il rapporto inverso è $\dfrac25$ e descrive il passaggio nella direzione opposta.

Un rapporto maggiore di uno produce un ingrandimento, uno minore di uno una riduzione. Con rapporto uno le figure simili sono congruenti.
:::

:::esempio{titolo="Stessi angoli oppure stessi lati"}
Due rettangoli di lati $2,3$ e $2,4$ hanno tutti gli angoli uguali. Confrontando prima i lati corti si trova rapporto $2/2=1$, mentre per i lati lunghi il rapporto è $4/3$. Non esiste un unico fattore che trasformi il primo nel secondo. Viceversa, un quadrato e un rombo di angolo $60^\circ$, con lati della stessa lunghezza, hanno rapporti dei lati uguali a uno ma angoli diversi. Per poligoni con più di tre lati occorre controllare entrambe le condizioni della definizione.

::grafico{assi=0 uguale=1 xmin=-0.6 xmax=9.6 ymin=-0.65 ymax=2.75 linee="0,0 3,0 3,2 0,2 0,0;5,0 9,0 9,2 5,2 5,0" etichette="1.5,-0.32,3;-0.25,1,2;7,-0.32,4;4.75,1,2" titolo="I due rettangoli hanno gli stessi angoli e rapporti di lati diversi"}
:::

## Segmenti proporzionali

:::teorema{#proporzioni titolo="Ordine dei termini"}
La proporzione $a:b=c:d$, con denominatori non nulli, equivale ad $ad=bc$. Nei problemi geometrici le lunghezze sono positive.

Se $\dfrac{x}{6}=\dfrac{4}{3}$, moltiplicando si trova $3x=24$ e $x=8$. Se si inverte un rapporto, si deve invertire anche l'altro.

Le corrispondenze sono parte del dato. Nella scrittura $\triangle ABC\sim\triangle DEF$, i vertici corrispondenti sono $A,D$, $B,E$ e $C,F$. Perciò $AB$ corrisponde a $DE$ e $BC$ a $EF$.
:::

:::esempio{titolo="Il lato corrispondente si legge dai vertici"}
Se $ABC\sim DEF$, $AB=4$, $BC=6$, $AC=5$ e $DE=10$, l'ordine stabilisce che $k=DE/AB=5/2$. Ne seguono $EF=15$ e $DF=25/2$. Nella scrittura inversa i rapporti diventano $AB/DE=BC/EF=AC/DF=2/5$. Conviene scrivere prima due coppie di lati omologhi e solo dopo sostituire i numeri.

::grafico{assi=0 uguale=1 xmin=-0.65 xmax=16 ymin=-0.75 ymax=13.2 linee="0,0 4,0 0.625,4.960783708 0,0;5.3,0 15.3,0 6.8625,12.40195927 5.3,0" etichette="-0.21,-0.31,A;4.19,-0.31,B;0.56,5.27,C;5.11,-0.31,D;15.56,-0.31,E;6.76,12.72,F" titolo="Corrispondenza dei lati"}
:::

:::osservazione{titolo="Invertire tutte le frazioni nello stesso passaggio"}
Per due lunghezze omologhe positive, il rapporto inverso è il reciproco del diretto. Da $DE/AB=EF/BC$ segue $AB/DE=BC/EF$. Per esempio, con $AB=4$, $DE=10$, $BC=6$ e $EF=15$, entrambe le frazioni nel primo verso valgono $5/2$ e quelle nel verso opposto valgono $2/5$. Mescolare i versi nello stesso confronto non è in generale equivalente. Nei problemi, il fattore piccolo-grande e quello grande-piccolo descrivono trasformazioni diverse.
:::

## Criteri per i triangoli

:::teorema{#criteri titolo="Tre modi di riconoscere la similitudine"}
Due triangoli sono simili se hanno due angoli corrispondenti congruenti. Il terzo è allora congruente perché in entrambi la somma degli angoli è $180^\circ$.

Sono simili anche se hanno tutti e tre i lati corrispondenti proporzionali, oppure due lati corrispondenti proporzionali e l'angolo *compreso* congruente.

Due triangoli con lati $3,4,5$ e $6,8,10$ sono simili con rapporto $2$. Un solo angolo congruente non determina una forma: occorre un altro dato del criterio. Nel criterio dei due lati, l'angolo deve trovarsi fra quei lati.
:::

:::dimostrazione{titolo="Ridurre i criteri a congruenze"}
Per confrontare due triangoli si può ingrandire o ridurre uno di essi fino a far coincidere una coppia di lati. Una dilatazione di fattore $k$ attorno a un punto $O$ manda $X$ nel punto $X'$ sulla semiretta $OX$ con $OX'=k\,OX$. Rispetto a $O$, moltiplica per $k$ entrambe le componenti di ogni spostamento. La direzione del segmento resta la stessa e la sua lunghezza si moltiplica per $k$. Gli angoli restano quindi invariati.

Se due angoli corrispondono, anche il terzo coincide, e dopo aver reso uguali due lati omologhi si applica ALA usando gli angoli ai loro estremi. Se si conoscono due rapporti uguali e l'angolo compreso, la dilatazione rende quei due lati rispettivamente uguali e si applica LAL. Con tre rapporti uguali si rendono uguali tutti i lati corrispondenti e si applica LLL.
:::

:::attenzione{titolo="L'angolo deve essere compreso fra i due lati dati"}
Dal punto $A$ parte una semiretta che incontra la circonferenza di centro $B$ e raggio $\sqrt{13}$ in $C_1$ e $C_2$. In figura $AB=5$, $AC_1=2$ e $AC_2=6$. I triangoli $ABC_1$ e $ABC_2$ hanno uguali $AB$, il lato di lunghezza $\sqrt{13}$ e l'angolo in $A$. L'angolo dato non è compreso fra i lati $AB$ e $BC_1$ o fra $AB$ e $BC_2$. Le altre lunghezze differiscono e le due figure non sono simili.

::grafico{assi=0 uguale=1 legenda=0 xmin=-0.7 xmax=9.1 ymin=-3.9 ymax=4.55 linee="0,0 5,0 4.8,3.6 0,0;5,0 1.6,1.2" curve="5+sqrt(13)*cos(t),sqrt(13)*sin(t),0,6.2831853072" punti="0,0;5,0;1.6,1.2;4.8,3.6" etichette="-0.23,-0.29,A;5.16,-0.28,B;1.49,1.61,C₁;4.69,3.96,C₂" titolo="Stessi due lati e stesso angolo non compreso, ma due triangoli diversi"}
:::

## Il teorema di Talete

:::teorema{#talete titolo="Parallele e trasversali"}
Un fascio di rette parallele determina su due trasversali segmenti corrispondenti proporzionali. Con punti $A,B,C$ sulla prima trasversale e $A',B',C'$ sulla seconda,
$$
\frac{AB}{BC}=\frac{A'B'}{B'C'}.
$$
Per segmenti $AB=2$, $BC=3$ e $A'B'=6$ si ottiene $B'C'=9$.

I segmenti devono essere individuati dalle stesse coppie di parallele. Confrontare un segmento totale con uno parziale su una trasversale richiede lo stesso confronto sull'altra.

In un triangolo, una retta parallela a un lato divide gli altri due in parti proporzionali. Questo è il caso usato più spesso negli esercizi.
:::

:::dimostrazione{titolo="Distanze tra parallele e lunghezze sulle trasversali"}
Indica con $h_1,h_2$ le distanze perpendicolari tra le prime due e le ultime due parallele. Su una trasversale obliqua, i due segmenti consecutivi sono le ipotenuse di due triangoli rettangoli con cateti perpendicolari alle parallele di lunghezze $h_1,h_2$. L'angolo acuto tra la trasversale e le parallele è lo stesso per entrambe le strisce. I triangoli sono simili per il criterio di due angoli. Perciò $AB/BC=h_1/h_2$.

Lo stesso calcolo sull'altra trasversale dà $A'B'/B'C'=h_1/h_2$, anche se la sua inclinazione è diversa. Su una trasversale perpendicolare i segmenti misurano direttamente $h_1,h_2$. In ogni caso il rapporto interno dipende dalle distanze fra le parallele, non dal punto in cui la trasversale le attraversa.
:::

:::esempio{titolo="Rapporto tra segmento totale e parte"}

Sulla prima trasversale $AB=3$ e $BC=6$. Sulla seconda $A\prime B\prime=5$. Il rapporto dal segmento $AB$ al segmento $A\prime B\prime$ è $\dfrac53$. Il segmento totale $AC$ misura $9$, quindi il totale corrispondente misura $15$. Sottraendo il segmento noto $A\prime B\prime$ si trova il tratto restante, $B\prime C\prime=10$.

$$
\begin{aligned}
A\prime C\prime&=\frac53(3+6)=15 \\[5pt]
B\prime C\prime&=15-5=10
\end{aligned}
$$

::grafico{assi=0 uguale=1 linee="-0.6,0 14,0;-0.6,3 14,3;-0.6,9 14,9;0,0 0,9;1,0 13,9" punti="0,0,pieno,A;0,3,pieno,B;0,9,pieno,C;1,0;5,3;13,9" etichette="1,-0.45,A';5.22,2.6,B';13.24,9.36,C'" xmin=-1 xmax=14.6 ymin=-1 ymax=10 titolo="Le tre parallele individuano la stessa successione di segmenti sulle due trasversali"}
:::

## Una parallela alla base

:::teorema{#parallela titolo="Triangoli annidati"}
Se $D$ appartiene al lato $AB$, $E$ al lato $AC$ e $DE\parallel BC$, allora $ADE$ e $ABC$ sono simili. Hanno l'angolo $A$ comune e angoli corrispondenti congruenti per il parallelismo.

Valgono quindi
$$
\frac{AD}{AB}=\frac{AE}{AC}=\frac{DE}{BC}.
$$
Se $AD=3$, $AB=9$ e $BC=12$, si ottiene $DE=4$.

::grafico{assi=0 uguale=1 linee="0,0 12,0 0,9 0,0;0,6 4,6" punti="0,9,pieno,A;0,0,pieno,B;12,0,pieno,C;0,6,pieno,D;4,6,pieno,E" xmin=-1 xmax=13 ymin=-1 ymax=10 titolo="La parallela $DE$ determina due triangoli simili"}

Il rapporto fra i segmenti piccoli e quelli grandi è lo stesso su tutti e tre i lati. Il segmento totale $AB$ non va confuso con $DB$.
:::

:::esempio{titolo="Il denominatore cambia se confronti tutto il lato"}
Se $AD/DB=2/3$, puoi scrivere $AD=2t$ e $DB=3t$, dunque $AB=5t$. Il rapporto del triangolo piccolo rispetto al grande è $AD/AB=2/5$. Con $DE\parallel BC$ e $BC=15$, si ha $DE=6$. Inoltre $AE/AC=2/5$ e $AE/EC=2/3$. Il primo rapporto confronta i due triangoli, mentre il secondo confronta le due parti dello stesso lato.
:::

:::esempio{titolo="Un segmento vicino alla parallela può dare un rapporto diverso"}
Nel triangolo della figura, il punto $D$ divide $AB$ con $AD/AB=1/3$. Lungo $AC$ il punto $E$ a un terzo da $A$ dà $DE\parallel BC$. Se si sposta $E$ fino a un nuovo punto $F$ che soddisfa $AF/AC=5/12$, i rapporti diventano diversi. Il segmento $DF$ appare poco inclinato, ma non è parallelo a $BC$. La posizione interna dei punti, da sola, non garantisce la similitudine dei triangoli così formati.

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=13 ymin=-0.7 ymax=9.85 linee="0,0 12,0 0,9 0,0;0,6 4,6" segmenti="0,6,5,5.25" punti="0,9;0,0;12,0;0,6;4,6;5,5.25" etichette="-0.25,9.29,A;-0.25,-0.31,B;12.24,-0.32,C;-0.26,6.23,D;4.38,6.31,E;5.28,5.56,F" titolo="DE è parallelo alla base. DF collega due frazioni diverse dei lati"}
:::

:::dimostrazione{titolo="Quando i rapporti garantiscono il parallelismo"}
Siano $D$ interno ad $AB$ ed $E$ interno ad $AC$, con $AD/AB=AE/AC$. Per $D$ traccia la parallela a $BC$ e indica con $E_0$ la sua intersezione con $AC$. Per il caso diretto, $AE_0/AC=AD/AB$. Poiché $AE_0=AE$ e i due punti sono sulla stessa semiretta da $A$, si ha $E_0=E$. Il segmento $DE$ è dunque parallelo a $BC$. Se i rapporti differiscono, il parallelismo è impossibile.
:::

## Perimetri e altezze

:::teorema{#perimetri titolo="Rapporti lineari"}
Tutte le lunghezze corrispondenti di figure simili si moltiplicano per $k$. Questo vale per lati, altezze, mediane e perimetri.

Se i lati sono moltiplicati per $3$, anche la loro somma è moltiplicata per $3$. Un triangolo con perimetro $14$ ha quindi un simile con perimetro $42$.

Una corrispondenza coerente associa anche i vertici opposti alle basi considerate. L'altezza relativa a un lato corrisponde all'altezza relativa al lato omologo dell'altro triangolo.
:::

:::dimostrazione{titolo="Perimetri, altezze e proiezioni omologhe"}
Ogni lato del secondo poligono vale $k$ volte quello corrispondente del primo. Sommando le uguaglianze si ha $P_2=kP_1$. La stessa dilatazione manda una perpendicolare a un lato sulla perpendicolare al lato omologo che passa per il vertice corrispondente. L'altezza e le proiezioni sui lati omologhi si moltiplicano quindi per $k$. Lo stesso vale quando il piede dell'altezza cade sul prolungamento del lato.
:::

## Proiezioni nel triangolo rettangolo

:::teorema{#proiezioni titolo="Le proiezioni dei cateti sull'ipotenusa"}
Nel triangolo $ABC$ rettangolo in $A$, indica con $H$ il piede della perpendicolare da $A$ a $BC$. Le lunghezze $BH$ e $CH$ sono le proiezioni dei cateti $AB$ e $AC$ sull'ipotenusa. I triangoli $ABH$ e $CBA$ sono simili perché hanno l'angolo in $B$ comune e gli angoli retti in $H$ e $A$. Analogamente $ACH\sim BCA$. Dalle due corrispondenze si ricava

$$
\frac{BH}{AB}=\frac{AB}{BC},\qquad
\frac{CH}{AC}=\frac{AC}{BC},\qquad
\frac{BH}{CH}=\frac{AB^2}{AC^2}.
$$

Se $AB=6$, $AC=8$ e $BC=10$, le proiezioni sono $36/10$ e $64/10$. Sommano a $10$ e il loro rapporto è $9/16$, mentre il rapporto dei cateti è $3/4$.

::grafico{assi=0 uguale=1 xmin=-0.75 xmax=10.8 ymin=-0.65 ymax=5.75 linee="0,0 10,0 3.6,4.8 0,0;3.6,0.28 3.88,0.28 3.88,0" segmenti="3.6,0,3.6,4.8" punti="0,0;10,0;3.6,4.8;3.6,0" etichette="-0.22,-0.31,B;10.22,-0.31,C;3.55,5.16,A;3.57,-0.35,H;1.78,0.29,3.6;7.1,0.29,6.4" titolo="Le proiezioni dei cateti si sommano all'ipotenusa"}
:::

:::osservazione
Il ragionamento funziona anche in senso inverso. Se $BH/CH=4/9$, il rapporto $AB/AC$ è la radice positiva $2/3$. Se l’ipotenusa misura $13$, le proiezioni sono $4$ e $9$, perché la loro somma deve essere $13$. Le lunghezze dei cateti si ricavano poi da $AB=\sqrt{13\cdot4}$ e $AC=\sqrt{13\cdot9}$. Questo calcolo separa il rapporto delle proiezioni dal rapporto lineare fra due figure diverse.
:::

## Rapporti fra aree

:::teorema{#aree titolo="Il quadrato del rapporto"}
Il rapporto fra le aree di figure simili è $k^2$. Per i triangoli, base e altezza sono entrambe moltiplicate per $k$, quindi
$$
A_2=\frac{(kb)(kh)}2=k^2A_1.
$$
Lo stesso risultato vale per poligoni simili mediante scomposizione in triangoli.

Con rapporto di lunghezze $3$, un'area di $8$ diventa $72$. Se il rapporto delle aree è $25$, il rapporto delle lunghezze è $5$. Si prende la radice positiva del rapporto delle aree.

::grafico{assi=0 uguale=1 poligoni="0,0 2,0 2,1 0,1;4,0 8,0 8,2 4,2" xmin=-1 xmax=9 ymin=-1 ymax=3 titolo="Rapporto di lunghezze $2$: le aree dei rettangoli sono $2$ e $8$"}
:::

:::esempio{titolo="Area della parte rimanente"}

Una parallela al lato $BC$ ritaglia il triangolo $ADE$ da un triangolo $ABC$ di area $45$. Se $\dfrac{AD}{AB}=\dfrac23$, l’area di $ADE$ vale $\left(\dfrac23\right)^2\cdot45=20$. Il trapezio $DBCE$ occupa la parte di area $45-20=25$. Il quadrato del rapporto si applica ai due triangoli simili, mentre l’area del trapezio si ricava per differenza.

::grafico{assi=0 uguale=1 poligoni="0,0 10,0 7,3 0.3333,3" linee="0,0 10,0 1,9 0,0;0.3333,3 7,3" punti="1,9,pieno,A;0,0,pieno,B;10,0,pieno,C;0.3333,3,pieno,D;7,3,pieno,E" xmin=-1 xmax=11 ymin=-1 ymax=10 titolo="Il trapezio occupa la parte del triangolo grande sotto il segmento parallelo"}
:::

:::esempio{titolo="Un controllo incrociato tra area e perimetro"}
Se i perimetri di due figure simili misurano $28$ e $42$, la seconda ha rapporto lineare $3/2$ rispetto alla prima. Con area iniziale $40$, quella nuova è $(3/2)^2\cdot40=90$. Nel verso inverso il perimetro torna a $28$ per il fattore $2/3$ e l'area torna a $40$ per il fattore $4/9$. Queste deduzioni usano la similitudine già nota. Due figure qualunque con uguale area possono avere forme e perimetri diversi.
:::

:::esempio{titolo="Quando il dato è l'area del trapezio"}
Se $k=AD/AB$ per due triangoli annidati con $DE\parallel BC$, il trapezio occupa la frazione $1-k^2$ dell'area originaria. Per $k=2/3$ quella frazione è $5/9$. Se il trapezio ha area $50$, il triangolo intero ha area $50/(5/9)=90$ e quello ritagliato ha area $40$. Si può controllare che $40/90$ sia $4/9$ e che la loro differenza restituisca l'area data.
:::

## Scale e applicazioni

:::osservazione{#scale titolo="Lunghezze sulla carta e reali"}
Una scala $1:N$ significa che una lunghezza sulla rappresentazione è $\dfrac1N$ della lunghezza reale, espressa nella stessa unità. Quindi $l_{\mathrm{reale}}=Nl_{\mathrm{carta}}$.

In scala $1:200$, un tratto di $3\,\mathrm{cm}$ rappresenta $600\,\mathrm{cm}=6\,\mathrm m$. Le aree sono invece in rapporto $1:N^2$, perciò una conversione di area richiede il quadrato del fattore.

La similitudine permette anche misure indirette. Con raggi solari paralleli e terreno orizzontale, l'altezza di un oggetto e la sua ombra formano triangoli simili a quelli di un oggetto di altezza nota.
:::

:::esempio{titolo="Dai centimetri sulla pianta ai metri quadrati"}
In scala $1:500$, ogni centimetro sulla pianta rappresenta $500\,\mathrm{cm}=5\,\mathrm m$. Un quadrato sulla carta di un centimetro per lato rappresenta quindi un quadrato reale di lato $5\,\mathrm m$ e area $25\,\mathrm{m}^2$. Se una regione sulla pianta occupa $3{,}2\,\mathrm{cm}^2$, la regione reale occupa $3{,}2\cdot25=80\,\mathrm{m}^2$. Lo stesso risultato si ottiene partendo dalla scala fra aree in centimetri quadrati, $1:500^2$, e dividendo infine per $100^2$ per passare ai metri quadrati.
:::

:::esempio{titolo="Ombre misurate nello stesso istante"}
Un'asta verticale alta $1{,}5\,\mathrm m$ proietta un'ombra orizzontale di $2\,\mathrm m$. Un albero verticale sullo stesso terreno proietta un'ombra di $6\,\mathrm m$. Le verticali sono perpendicolari al terreno. I raggi paralleli formano con il terreno lo stesso angolo acuto, quindi i triangoli sono simili per due angoli. Il rapporto delle ombre è $6/2=3$, perciò l'albero è alto $1{,}5\cdot3=4{,}5\,\mathrm m$.

::grafico{assi=0 uguale=1 xmin=-0.86 xmax=11.8 ymin=-0.7 ymax=5.4 linee="0,0 11.5,0;0.5,0 0.5,1.5 2.5,0;4.7,0 4.7,4.5 10.7,0;0.5,0.2 0.7,0.2 0.7,0;4.7,0.22 4.92,0.22 4.92,0" etichette="0.15,0.84,1.5;1.5,-0.34,2;4.33,2.28,4.5;7.7,-0.34,6" titolo="I raggi obliqui sono paralleli e le altezze sono perpendicolari al terreno"}
:::

:::attenzione
Misura le ombre nello stesso istante e lungo la stessa direzione. Se l'asta è inclinata oppure le ombre cadono su superfici con pendenze diverse, le misure non costruiscono necessariamente due triangoli simili. Per una scala di carta, invece, il fattore è fissato dalla rappresentazione. Si convertono prima le unità e si usa $N$ per le lunghezze, $N^2$ per le aree.
:::
