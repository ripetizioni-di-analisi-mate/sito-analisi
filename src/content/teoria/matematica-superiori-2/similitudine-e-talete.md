---
titolo: "Similitudine e teorema di Talete"
sommario: "Segmenti proporzionali, Talete, criteri di similitudine, corrispondenze fra lati, rapporti di perimetri e aree e scale."
---

## Corrispondenze fra figure

:::definizione{#rapporto titolo="Il rapporto di similitudine"}
Due figure sono **simili** quando hanno la stessa forma e differiscono al più per le dimensioni, come una fotografia e il suo ingrandimento. Nei poligoni si confrontano gli elementi **corrispondenti**, detti anche **omologhi**, cioè gli angoli e i lati che occupano lo stesso posto nelle due figure. Due poligoni sono simili se hanno gli angoli corrispondenti **congruenti**, cioè della stessa ampiezza, e i lati corrispondenti **proporzionali**, cioè tali che il rapporto fra un lato della seconda figura e il lato corrispondente della prima sia lo stesso numero per tutte le coppie. Questo numero si indica con $k$ e si chiama **rapporto di similitudine** (o fattore) dalla prima figura alla seconda. È positivo, perché è il rapporto fra due lunghezze.

Se un lato passa da $4$ a $10$, il rapporto è $k=\dfrac{10}{4}=\dfrac52$. Un altro lato di $6$ diventa allora $6\cdot\dfrac52=15$. Per tornare dalla seconda figura alla prima si usa il rapporto inverso $\dfrac25$, cioè il reciproco di $\dfrac52$, e infatti $10\cdot\dfrac25=4$.

Con $k>1$ la seconda figura è un **ingrandimento** della prima, con $k<1$ è una **riduzione**. Con $k=1$ i lati corrispondenti sono uguali, quindi le due figure simili sono congruenti, cioè sovrapponibili.
:::

:::esempio{titolo="Stessi angoli oppure stessi lati"}
Il primo rettangolo ha lati $2$ e $3$, il secondo ha lati $2$ e $4$. Tutti gli angoli sono retti, quindi gli angoli corrispondenti sono congruenti. Il lato corto passa da $2$ a $2$, con rapporto $\dfrac22=1$, mentre il lato lungo passa da $3$ a $4$, con rapporto $\dfrac43$. I due rapporti sono diversi, perciò non esiste un unico fattore che trasformi il primo rettangolo nel secondo e i rettangoli non sono simili.

Viceversa, un quadrato e un rombo (quadrilatero con i quattro lati uguali) con angolo di $60^\circ$, con i lati della stessa lunghezza, hanno tutti i rapporti fra i lati uguali a $1$. I loro angoli sono però diversi, $90^\circ$ nel quadrato e $60^\circ$ e $120^\circ$ nel rombo, quindi neppure queste due figure sono simili. Per i poligoni con più di tre lati si controllano perciò entrambe le condizioni della definizione.

::grafico{assi=0 uguale=1 xmin=-0.6 xmax=9.6 ymin=-0.65 ymax=2.75 linee="0,0 3,0 3,2 0,2 0,0;5,0 9,0 9,2 5,2 5,0" etichette="1.5,-0.32,3;-0.25,1,2;7,-0.32,4;4.75,1,2" titolo="I due rettangoli hanno gli stessi angoli e rapporti di lati diversi"}
:::

## Segmenti proporzionali

:::teorema{#proporzioni titolo="Ordine dei termini"}
Una **proporzione** è un'uguaglianza fra due rapporti. Si scrive $a:b=c:d$, oppure $\dfrac ab=\dfrac cd$, e si legge «$a$ sta a $b$ come $c$ sta a $d$», con i denominatori $b$ e $d$ diversi da zero. I numeri $a$ e $d$ sono gli **estremi**, $b$ e $c$ i **medi**. Moltiplicando entrambi i membri di $\dfrac ab=\dfrac cd$ per $bd$ si ottiene $ad=bc$, quindi la proporzione equivale all'uguaglianza fra il prodotto degli estremi e il prodotto dei medi. Questo passaggio si chiama anche **moltiplicazione in croce**. Nei problemi geometrici le lunghezze sono positive.

Se $\dfrac{x}{6}=\dfrac{4}{3}$, moltiplicando in croce si trova $3x=6\cdot4=24$, quindi $x=\dfrac{24}{3}=8$. Se si inverte un rapporto, si inverte anche l'altro, e infatti $\dfrac6x=\dfrac68=\dfrac34$.

Le corrispondenze fanno parte del dato. Il simbolo $\sim$ si legge «è simile a» e $\triangle$ indica un triangolo. Nella scrittura $\triangle ABC\sim\triangle DEF$ si corrispondono i vertici che stanno nella stessa posizione, cioè $A$ e $D$, $B$ ed $E$, $C$ e $F$. Perciò $AB$ corrisponde a $DE$, $BC$ a $EF$ e $AC$ a $DF$.
:::

:::esempio{titolo="Il lato corrispondente si legge dai vertici"}
Si sa che $ABC\sim DEF$, con $AB=4$, $BC=6$, $AC=5$ e $DE=10$. L'ordine delle lettere stabilisce che $AB$ e $DE$ sono lati corrispondenti, quindi
$$
k=\frac{DE}{AB}=\frac{10}{4}=\frac52.
$$
Gli altri lati del secondo triangolo si ottengono moltiplicando per $k$ i lati corrispondenti del primo:
$$
EF=\frac52\cdot6=15,\qquad DF=\frac52\cdot5=\frac{25}{2}.
$$
Nel verso inverso, dal secondo triangolo al primo, tutti i rapporti valgono $\dfrac25$:
$$
\frac{AB}{DE}=\frac{BC}{EF}=\frac{AC}{DF}=\frac25.
$$
Il calcolo parte da due coppie di lati omologhi lette nei nomi dei triangoli, e solo dopo si sostituiscono i numeri.

::grafico{assi=0 uguale=1 xmin=-0.65 xmax=16 ymin=-0.75 ymax=13.2 linee="0,0 4,0 0.625,4.960783708 0,0;5.3,0 15.3,0 6.8625,12.40195927 5.3,0" etichette="-0.21,-0.31,A;4.19,-0.31,B;0.56,5.27,C;5.11,-0.31,D;15.56,-0.31,E;6.76,12.72,F" titolo="Corrispondenza dei lati"}
:::

:::osservazione{titolo="Invertire tutte le frazioni nello stesso passaggio"}
Per due lunghezze omologhe positive il rapporto inverso è il reciproco del rapporto diretto. Perciò da $\dfrac{DE}{AB}=\dfrac{EF}{BC}$, invertendo entrambe le frazioni, segue $\dfrac{AB}{DE}=\dfrac{BC}{EF}$. Con $AB=4$, $DE=10$, $BC=6$ ed $EF=15$ le due frazioni nel primo verso valgono $\dfrac52$ e nel verso opposto valgono $\dfrac25$. Se nello stesso confronto si mescolano i versi, l'uguaglianza diventa $\dfrac{DE}{AB}=\dfrac{BC}{EF}$, cioè $\dfrac52=\dfrac25$, che è falsa. Il fattore dalla figura piccola alla grande e quello dalla grande alla piccola descrivono infatti due trasformazioni diverse, un ingrandimento e una riduzione.
:::

## Criteri per i triangoli

:::teorema{#criteri titolo="Tre modi di riconoscere la similitudine"}
Per i triangoli bastano meno condizioni di quelle della definizione. Due triangoli sono simili se vale una delle tre condizioni seguenti.
- **Primo criterio (due angoli).** Due angoli corrispondenti sono congruenti. Allora è congruente anche il terzo, perché in entrambi i triangoli la somma degli angoli è $180^\circ$.
- **Secondo criterio (LAL, due lati e l'angolo compreso).** Due lati corrispondenti sono proporzionali e l'angolo *compreso* fra essi, cioè l'angolo che ha quei due lati come lati, è congruente.
- **Terzo criterio (LLL, tre lati).** I tre lati corrispondenti sono proporzionali.

I triangoli di lati $3$, $4$, $5$ e $6$, $8$, $10$ sono simili per il terzo criterio, perché
$$
\frac63=\frac84=\frac{10}{5}=2,
$$
e il rapporto di similitudine è $2$. Tre lunghezze sono i lati di un triangolo quando la maggiore è minore della somma delle altre due (**disuguaglianza triangolare**), come accade per $10<6+8$.

Un solo angolo congruente non determina una forma, quindi serve un altro dato fra quelli di un criterio. Nel secondo criterio l'angolo si trova fra i due lati di cui si conosce il rapporto.
:::

:::dimostrazione{titolo="Ridurre i criteri a congruenze"}
L'idea è ingrandire o ridurre uno dei due triangoli finché una coppia di lati corrispondenti ha la stessa lunghezza, e poi usare un criterio di congruenza. Lo strumento è la **dilatazione** di centro $O$ e fattore $k$, che manda ogni punto $X$ nel punto $X'$ della semiretta $OX$ con $OX'=k\cdot OX$. Se un punto si trova $3$ unità a destra e $2$ sopra $O$, la sua immagine si trova $3k$ unità a destra e $2k$ sopra $O$. Perciò ogni segmento conserva la sua direzione e ha la lunghezza moltiplicata per $k$, e quindi gli angoli restano invariati.

I criteri di congruenza dei triangoli sono LAL (due lati e l'angolo compreso), ALA (un lato e i due angoli ai suoi estremi) e LLL (tre lati), dove L sta per lato e A per angolo.
- Se due angoli corrispondono, anche il terzo coincide. Dopo aver reso uguali due lati omologhi con una dilatazione, gli angoli ai loro estremi sono uguali e si applica ALA.
- Se si conoscono due rapporti uguali e l'angolo compreso, la dilatazione di fattore uguale a quel rapporto rende uguali entrambe le coppie di lati, e l'angolo fra essi resta congruente, quindi si applica LAL.
- Con tre rapporti uguali la dilatazione rende uguali tutti i lati corrispondenti e si applica LLL.

In ogni caso il triangolo dilatato è simile al primo e congruente al secondo, perciò i due triangoli di partenza sono simili.
:::

:::attenzione{titolo="L'angolo deve essere compreso fra i due lati dati"}
Dal punto $A$ parte una semiretta che incontra in $C_1$ e $C_2$ la circonferenza di centro $B$ e raggio $\sqrt{13}$ (radice quadrata di $13$). Ogni punto della circonferenza dista $\sqrt{13}$ dal centro, quindi $BC_1=BC_2=\sqrt{13}$. In figura $AB=5$, $AC_1=2$ e $AC_2=6$. I triangoli $ABC_1$ e $ABC_2$ hanno perciò uguali il lato $AB$, il lato di lunghezza $\sqrt{13}$ e l'angolo in $A$.

L'angolo in $A$ non è compreso fra i lati $AB$ e $BC_1$, né fra $AB$ e $BC_2$, perché quei lati si incontrano in $B$. Il secondo criterio quindi non si applica, e i due triangoli hanno anche forme diverse. I lati del primo triangolo sono $2$, $\sqrt{13}\approx3{,}61$ e $5$, quelli del secondo sono $\sqrt{13}$, $5$ e $6$. Il rapporto fra i lati maggiori è $\dfrac65=1{,}2$, quello fra i lati minori è $\dfrac{\sqrt{13}}{2}\approx1{,}80$, perciò i lati non sono proporzionali e le due figure non sono simili.

::grafico{assi=0 uguale=1 legenda=0 xmin=-0.7 xmax=9.1 ymin=-3.9 ymax=4.55 linee="0,0 5,0 4.8,3.6 0,0;5,0 1.6,1.2" curve="5+sqrt(13)*cos(t),sqrt(13)*sin(t),0,6.2831853072" punti="0,0;5,0;1.6,1.2;4.8,3.6" etichette="-0.23,-0.29,A;5.16,-0.28,B;1.49,1.61,C₁;4.69,3.96,C₂" titolo="Stessi due lati e stesso angolo non compreso, ma due triangoli diversi"}
:::

## Il teorema di Talete

:::teorema{#talete titolo="Parallele e trasversali"}
Un **fascio di rette parallele** è un insieme di rette parallele fra loro, e una **trasversale** è una retta che le taglia tutte. Il **teorema di Talete** afferma che un fascio di rette parallele determina su due trasversali segmenti corrispondenti proporzionali. Se le parallele incontrano la prima trasversale in $A,B,C$ e la seconda nei punti corrispondenti $A',B',C'$ (si legge «$A$ primo», e così via), allora
$$
\frac{AB}{BC}=\frac{A'B'}{B'C'}.
$$
Per segmenti $AB=2$, $BC=3$ e $A'B'=6$ si ottiene $\dfrac23=\dfrac{6}{B'C'}$, quindi $2\cdot B'C'=18$ e $B'C'=9$.

I segmenti corrispondenti sono individuati dalle stesse coppie di parallele: $AB$ e $A'B'$ stanno fra la prima e la seconda, $BC$ e $B'C'$ fra la seconda e la terza. Se su una trasversale si confronta un segmento totale con uno parziale, sull'altra si fa lo stesso confronto, cioè $\dfrac{AB}{AC}=\dfrac{A'B'}{A'C'}$. Con i numeri di prima entrambi i rapporti valgono $\dfrac25$, perché $AC=2+3=5$ e $A'C'=6+9=15$.

In un triangolo, una retta parallela a un lato divide gli altri due in parti proporzionali. Questo è il caso usato più spesso negli esercizi.
:::

:::dimostrazione{titolo="Distanze tra parallele e lunghezze sulle trasversali"}
L'idea è confrontare ogni segmento con la larghezza della striscia che attraversa. Si indicano con $h_1$ e $h_2$ le distanze fra le prime due e fra le ultime due parallele, misurate perpendicolarmente alle parallele. Su una trasversale obliqua i due segmenti consecutivi sono le ipotenuse di due triangoli rettangoli che hanno un cateto perpendicolare alle parallele, lungo $h_1$ nella prima striscia e $h_2$ nella seconda. L'angolo acuto fra la trasversale e le parallele è lo stesso in entrambe le strisce, perché le parallele hanno tutte la stessa direzione. I due triangoli rettangoli sono quindi simili per il primo criterio, e perciò $\dfrac{AB}{BC}=\dfrac{h_1}{h_2}$.

Lo stesso calcolo sull'altra trasversale dà $\dfrac{A'B'}{B'C'}=\dfrac{h_1}{h_2}$, anche se la sua inclinazione è diversa. Su una trasversale perpendicolare i segmenti misurano direttamente $h_1$ e $h_2$. In ogni caso il rapporto fra i due segmenti di una trasversale dipende soltanto dalle distanze fra le parallele, quindi è lo stesso su tutte le trasversali.
:::

:::esempio{titolo="Rapporto tra segmento totale e parte"}

Sulla prima trasversale $AB=3$ e $BC=6$. Sulla seconda $A\prime B\prime=5$. Dalla proporzione di Talete, moltiplicando in croce, segue $AB\cdot B\prime C\prime=BC\cdot A\prime B\prime$ e, dividendo per $AB\cdot BC$, $\dfrac{A\prime B\prime}{AB}=\dfrac{B\prime C\prime}{BC}$. Ogni segmento della seconda trasversale è quindi il corrispondente della prima moltiplicato per lo stesso numero $\dfrac{A\prime B\prime}{AB}=\dfrac53$. Il segmento totale $AC$ misura $3+6=9$, quindi il totale corrispondente misura $15$. Sottraendo il segmento noto $A\prime B\prime$ si trova il tratto restante, $B\prime C\prime=10$.

$$
\begin{aligned}
A\prime C\prime&=\frac53(3+6)=15 \\[5pt]
B\prime C\prime&=15-5=10
\end{aligned}
$$

In figura le tre parallele sono orizzontali, la prima trasversale è verticale e la seconda è obliqua.

::grafico{assi=0 uguale=1 linee="-0.6,0 14,0;-0.6,3 14,3;-0.6,9 14,9;0,0 0,9;1,0 13,9" punti="0,0,pieno,A;0,3,pieno,B;0,9,pieno,C;1,0;5,3;13,9" etichette="1,-0.45,A';5.22,2.6,B';13.24,9.36,C'" xmin=-1 xmax=14.6 ymin=-1 ymax=10 titolo="Le tre parallele individuano la stessa successione di segmenti sulle due trasversali"}
:::

## Una parallela alla base

:::teorema{#parallela titolo="Triangoli annidati"}
Nel triangolo $ABC$ il punto $D$ appartiene al lato $AB$, il punto $E$ al lato $AC$ e $DE\parallel BC$, dove il simbolo $\parallel$ si legge «è parallelo a». Allora $ADE$ e $ABC$ sono simili. Infatti hanno l'angolo in $A$ in comune. Inoltre la retta $AB$ taglia le parallele $DE$ e $BC$, quindi gli angoli $\angle ADE$ e $\angle ABC$ sono congruenti, perché sono angoli corrispondenti formati da due parallele con una trasversale. Per il primo criterio i triangoli sono simili.

Valgono quindi
$$
\frac{AD}{AB}=\frac{AE}{AC}=\frac{DE}{BC}.
$$
Se $AD=3$, $AB=9$ e $BC=12$, il rapporto è $\dfrac{AD}{AB}=\dfrac39=\dfrac13$, quindi $DE=\dfrac13\cdot12=4$.

::grafico{assi=0 uguale=1 linee="0,0 12,0 0,9 0,0;0,6 4,6" punti="0,9,pieno,A;0,0,pieno,B;12,0,pieno,C;0,6,pieno,D;4,6,pieno,E" xmin=-1 xmax=13 ymin=-1 ymax=10 titolo="La parallela $DE$ determina due triangoli simili"}

Il rapporto fra i segmenti del triangolo piccolo e quelli del triangolo grande è lo stesso su tutti e tre i lati. Al denominatore sta il lato intero $AB$ del triangolo grande. Il segmento $DB$ è soltanto la parte di $AB$ esterna al triangolo piccolo e non è un lato di nessuno dei due triangoli.
:::

:::esempio{titolo="Il denominatore cambia se si confronta tutto il lato"}
Se $\dfrac{AD}{DB}=\dfrac23$, si divide $AB$ in parti uguali di lunghezza $t$, in modo che $AD$ ne contenga $2$ e $DB$ ne contenga $3$. Perciò $AD=2t$, $DB=3t$ e $AB=5t$. Il rapporto del triangolo piccolo rispetto al grande è $\dfrac{AD}{AB}=\dfrac{2t}{5t}=\dfrac25$. Con $DE\parallel BC$ e $BC=15$ si ha $DE=\dfrac25\cdot15=6$. Sull'altro lato valgono $\dfrac{AE}{AC}=\dfrac25$ e $\dfrac{AE}{EC}=\dfrac23$. Il primo rapporto confronta i due triangoli, mentre il secondo confronta le due parti dello stesso lato.
:::

:::esempio{titolo="Un segmento vicino alla parallela può dare un rapporto diverso"}
Nel triangolo della figura il punto $D$ divide $AB$ con $\dfrac{AD}{AB}=\dfrac13$. Lungo $AC$ il punto $E$ a un terzo da $A$ dà $DE\parallel BC$. Si sposta $E$ fino a un nuovo punto $F$ con $\dfrac{AF}{AC}=\dfrac5{12}$. I rapporti diventano diversi, perché $\dfrac13=\dfrac4{12}$ è diverso da $\dfrac5{12}$. Il segmento $DF$ appare poco inclinato rispetto a $DE$. Se fosse parallelo a $BC$, per il teorema dei triangoli annidati varrebbe $\dfrac{AF}{AC}=\dfrac{AD}{AB}$, quindi $DF$ non è parallelo a $BC$. Il fatto che i punti stiano sui lati, da solo, non garantisce la similitudine dei triangoli così formati.

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=13 ymin=-0.7 ymax=9.85 linee="0,0 12,0 0,9 0,0;0,6 4,6" segmenti="0,6,5,5.25" punti="0,9;0,0;12,0;0,6;4,6;5,5.25" etichette="-0.25,9.29,A;-0.25,-0.31,B;12.24,-0.32,C;-0.26,6.23,D;4.38,6.31,E;5.28,5.56,F" titolo="DE è parallelo alla base. DF collega due frazioni diverse dei lati"}
:::

:::dimostrazione{titolo="Quando i rapporti garantiscono il parallelismo"}
Il teorema inverso afferma che rapporti uguali sui due lati garantiscono il parallelismo. Siano $D$ interno ad $AB$ ed $E$ interno ad $AC$, con $\dfrac{AD}{AB}=\dfrac{AE}{AC}$. Per $D$ si traccia la parallela a $BC$ e si indica con $E_0$ la sua intersezione con $AC$. Per il teorema diretto $\dfrac{AE_0}{AC}=\dfrac{AD}{AB}$, quindi $\dfrac{AE_0}{AC}=\dfrac{AE}{AC}$ e perciò $AE_0=AE$. I due punti stanno sulla stessa semiretta da $A$ alla stessa distanza da $A$, quindi $E_0=E$. Il segmento $DE$ è dunque parallelo a $BC$. Se invece i rapporti sono diversi, il parallelismo è impossibile, perché una parallela darebbe rapporti uguali per il teorema diretto.
:::

## Perimetri e altezze

:::teorema{#perimetri titolo="Rapporti lineari"}
Tutte le lunghezze corrispondenti di figure simili si moltiplicano per $k$. Questo vale per:
- i lati;
- le **altezze**, dove l'altezza relativa a un lato è il segmento condotto dal vertice opposto perpendicolarmente alla retta di quel lato;
- le **mediane**, dove la mediana relativa a un lato è il segmento che unisce il punto medio di quel lato al vertice opposto;
- i **perimetri**, cioè le somme dei lati.

Se i lati sono moltiplicati per $3$, anche la loro somma è moltiplicata per $3$. Un triangolo con perimetro $14$ ha quindi un simile con perimetro $3\cdot14=42$.

Una corrispondenza coerente associa anche i vertici opposti alle basi considerate. L'altezza relativa a un lato corrisponde all'altezza relativa al lato omologo dell'altro triangolo, condotta dal vertice corrispondente.
:::

:::dimostrazione{titolo="Perimetri, altezze e proiezioni omologhe"}
Ogni lato del secondo poligono vale $k$ volte quello corrispondente del primo. Per un triangolo di lati $a$, $b$, $c$ i lati del simile sono $ka$, $kb$, $kc$, e sommando si ha
$$
P_2=ka+kb+kc=k(a+b+c)=kP_1.
$$
La stessa dilatazione conserva gli angoli, quindi manda una perpendicolare a un lato sulla perpendicolare al lato omologo che passa per il vertice corrispondente. Perciò si moltiplicano per $k$ l'altezza e le **proiezioni** sui lati omologhi, cioè i segmenti che vanno da un estremo del lato al **piede** dell'altezza, il punto in cui l'altezza incontra la retta del lato. Lo stesso vale quando il piede dell'altezza cade sul prolungamento del lato, come nei triangoli ottusangoli. La dilatazione moltiplica per $k$ anche le due metà di un lato, quindi manda il punto medio nel punto medio del lato omologo, e anche le mediane risultano moltiplicate per $k$.
:::

## Proiezioni nel triangolo rettangolo

:::teorema{#proiezioni titolo="Le proiezioni dei cateti sull'ipotenusa"}
Nel triangolo $ABC$ rettangolo in $A$ il lato $BC$, opposto all'angolo retto, è l'**ipotenusa**, e $AB$, $AC$ sono i **cateti**. Si indica con $H$ il piede della perpendicolare da $A$ a $BC$. Le lunghezze $BH$ e $CH$ sono le proiezioni dei cateti $AB$ e $AC$ sull'ipotenusa.

I triangoli $ABH$ e $CBA$ sono simili per il primo criterio, perché hanno l'angolo in $B$ comune e gli angoli retti in $H$ e in $A$. In questa corrispondenza $BH$ è omologo di $BA$ e $AB$ è omologo di $CB$. Analogamente $ACH\sim BCA$, con l'angolo in $C$ comune. Dalle due corrispondenze si ricava

$$
\frac{BH}{AB}=\frac{AB}{BC},\qquad
\frac{CH}{AC}=\frac{AC}{BC}.
$$

Moltiplicando in croce si ottiene $AB^2=BH\cdot BC$ e $AC^2=CH\cdot BC$, cioè il primo teorema di Euclide. Dividendo la prima uguaglianza per la seconda, il fattore comune $BC$ si semplifica e resta
$$
\frac{BH}{CH}=\frac{AB^2}{AC^2}.
$$

Se $AB=6$, $AC=8$ e $BC=10$, le proiezioni sono $BH=\dfrac{36}{10}=3{,}6$ e $CH=\dfrac{64}{10}=6{,}4$. La loro somma è $10$, cioè l'ipotenusa, e il loro rapporto è $\dfrac{36}{64}=\dfrac9{16}$, mentre il rapporto dei cateti è $\dfrac68=\dfrac34$. Infatti $\left(\dfrac34\right)^2=\dfrac9{16}$.

::grafico{assi=0 uguale=1 xmin=-0.75 xmax=10.8 ymin=-0.65 ymax=5.75 linee="0,0 10,0 3.6,4.8 0,0;3.6,0.28 3.88,0.28 3.88,0" segmenti="3.6,0,3.6,4.8" punti="0,0;10,0;3.6,4.8;3.6,0" etichette="-0.22,-0.31,B;10.22,-0.31,C;3.55,5.16,A;3.57,-0.35,H;1.78,0.29,3.6;7.1,0.29,6.4" titolo="Le proiezioni dei cateti si sommano all'ipotenusa"}
:::

:::osservazione
Il ragionamento funziona anche in senso inverso. Se $\dfrac{BH}{CH}=\dfrac49$, il rapporto $\dfrac{AB}{AC}$ è la radice positiva $\sqrt{\dfrac49}=\dfrac23$. Se l'ipotenusa misura $13$, le proiezioni sono $4$ e $9$, perché devono stare nel rapporto $\dfrac49$ e la loro somma deve essere $4+9=13$. Le lunghezze dei cateti si ricavano poi dal primo teorema di Euclide:
$$
AB=\sqrt{13\cdot4}=\sqrt{52},\qquad AC=\sqrt{13\cdot9}=\sqrt{117}.
$$
Il rapporto $\dfrac49$ confronta due segmenti dello stesso triangolo ed è il quadrato di $\dfrac{AB}{AC}$. Il rapporto di similitudine, invece, confronta due figure diverse.
:::

## Rapporti fra aree

:::teorema{#aree titolo="Il quadrato del rapporto"}
Il rapporto fra le aree di figure simili è $k^2$. Un triangolo di base $b$ e altezza $h$ ha area $A_1=\dfrac{bh}{2}$. Nel triangolo simile base e altezza sono entrambe moltiplicate per $k$, quindi
$$
A_2=\frac{(kb)(kh)}2=k^2A_1.
$$
Lo stesso risultato vale per poligoni simili mediante scomposizione in triangoli, perché ogni triangolo ha l'area moltiplicata per $k^2$ e quindi anche la loro somma.

Con rapporto di lunghezze $3$, un'area di $8$ diventa $3^2\cdot8=72$. Se il rapporto delle aree è $25$, cioè $k^2=25$, il rapporto delle lunghezze è $k=\sqrt{25}=5$. Si prende la radice positiva del rapporto delle aree, perché $k$ è un rapporto fra lunghezze.

Nella figura il rapporto delle lunghezze è $2$ e le aree passano da $2$ a $8$, cioè sono moltiplicate per $2^2=4$.

::grafico{assi=0 uguale=1 poligoni="0,0 2,0 2,1 0,1;4,0 8,0 8,2 4,2" xmin=-1 xmax=9 ymin=-1 ymax=3 titolo="Rapporto di lunghezze $2$: le aree dei rettangoli sono $2$ e $8$"}
:::

:::esempio{titolo="Area della parte rimanente"}

Una parallela al lato $BC$ ritaglia il triangolo $ADE$ da un triangolo $ABC$ di area $45$. Se $\dfrac{AD}{AB}=\dfrac23$, i due triangoli sono simili con rapporto $\dfrac23$ e l’area di $ADE$ vale $\left(\dfrac23\right)^2\cdot45=\dfrac49\cdot45=20$. Il **trapezio** $DBCE$, cioè il quadrilatero con i due lati paralleli $DE$ e $BC$, occupa la parte di area $45-20=25$. Il quadrato del rapporto si applica ai due triangoli simili, mentre l’area del trapezio si ricava per differenza.

::grafico{assi=0 uguale=1 poligoni="0,0 10,0 7,3 0.3333,3" linee="0,0 10,0 1,9 0,0;0.3333,3 7,3" punti="1,9,pieno,A;0,0,pieno,B;10,0,pieno,C;0.3333,3,pieno,D;7,3,pieno,E" xmin=-1 xmax=11 ymin=-1 ymax=10 titolo="Il trapezio occupa la parte del triangolo grande sotto il segmento parallelo"}
:::

:::esempio{titolo="Un controllo incrociato tra area e perimetro"}
Se i perimetri di due figure simili misurano $28$ e $42$, la seconda ha rapporto lineare $\dfrac{42}{28}=\dfrac32$ rispetto alla prima. Con area iniziale $40$, quella nuova è $\left(\dfrac32\right)^2\cdot40=\dfrac94\cdot40=90$. Nel verso inverso il perimetro torna a $28$ per il fattore $\dfrac23$ e l'area torna a $40$ per il fattore $\left(\dfrac23\right)^2=\dfrac49$. Queste deduzioni usano la similitudine già nota. Due figure qualunque con uguale area possono avere forme e perimetri diversi. Per esempio, un rettangolo di lati $2$ e $8$ e un quadrato di lato $4$ hanno entrambi area $16$, ma perimetri $20$ e $16$.
:::

:::esempio{titolo="Quando il dato è l'area del trapezio"}
Se $k=\dfrac{AD}{AB}$ per due triangoli annidati con $DE\parallel BC$, il triangolo piccolo occupa la frazione $k^2$ dell'area originaria e il trapezio occupa la frazione restante $1-k^2$. Per $k=\dfrac23$ quella frazione è $1-\dfrac49=\dfrac59$. Se il trapezio ha area $50$, allora $\dfrac59$ dell'area del triangolo intero valgono $50$, quindi il triangolo intero ha area $50\cdot\dfrac95=90$ e quello ritagliato ha area $90-50=40$. Come controllo, $\dfrac{40}{90}=\dfrac49$.
:::

## Scale e applicazioni

:::osservazione{#scale titolo="Lunghezze sulla carta e reali"}
Una **scala** $1:N$, che si legge «uno a $N$», indica che una lunghezza sulla rappresentazione è $\dfrac1N$ della lunghezza reale corrispondente, con le due lunghezze espresse nella stessa unità. Quindi $l_{\mathrm{reale}}=N\cdot l_{\mathrm{carta}}$.

In scala $1:200$, un tratto di $3\,\mathrm{cm}$ rappresenta $200\cdot3=600\,\mathrm{cm}$, cioè $6\,\mathrm m$, perché $1\,\mathrm m=100\,\mathrm{cm}$. Il disegno e la realtà sono figure simili con rapporto $N$, quindi le aree sono in rapporto $1:N^2$, e per convertire un'area si usa il quadrato del fattore.

Con la similitudine si fanno anche misure indirette, cioè si ricava una lunghezza senza misurarla direttamente. Con raggi solari paralleli e terreno orizzontale, l'altezza di un oggetto verticale e la sua ombra formano un triangolo rettangolo simile a quello di un oggetto di altezza nota.
:::

:::esempio{titolo="Dai centimetri sulla pianta ai metri quadrati"}
In scala $1:500$, ogni centimetro sulla pianta rappresenta $500\,\mathrm{cm}=5\,\mathrm m$. Un quadrato sulla carta di un centimetro per lato rappresenta quindi un quadrato reale di lato $5\,\mathrm m$ e area $5\cdot5=25\,\mathrm{m}^2$. Se una regione sulla pianta occupa $3{,}2\,\mathrm{cm}^2$, la regione reale occupa $3{,}2\cdot25=80\,\mathrm{m}^2$. Lo stesso risultato si ottiene con la scala fra aree in centimetri quadrati, $1:500^2$, che dà $3{,}2\cdot250\,000=800\,000\,\mathrm{cm}^2$. Poiché $1\,\mathrm{m}^2=100\cdot100\,\mathrm{cm}^2$, dividendo infine per $100^2$ si passa a $80\,\mathrm{m}^2$.
:::

:::esempio{titolo="Ombre misurate nello stesso istante"}
Un'asta verticale alta $1{,}5\,\mathrm m$ proietta un'ombra orizzontale di $2\,\mathrm m$. Un albero verticale sullo stesso terreno proietta nello stesso istante un'ombra di $6\,\mathrm m$. Ciascun oggetto forma con la sua ombra e con il raggio di sole che passa per la sua cima un triangolo rettangolo, perché le verticali sono perpendicolari al terreno. I raggi paralleli formano con il terreno lo stesso angolo acuto, quindi i triangoli sono simili per il primo criterio. Il rapporto delle ombre è $\dfrac62=3$, perciò anche le altezze stanno nel rapporto $3$ e l'albero è alto $1{,}5\cdot3=4{,}5\,\mathrm m$.

::grafico{assi=0 uguale=1 xmin=-0.86 xmax=11.8 ymin=-0.7 ymax=5.4 linee="0,0 11.5,0;0.5,0 0.5,1.5 2.5,0;4.7,0 4.7,4.5 10.7,0;0.5,0.2 0.7,0.2 0.7,0;4.7,0.22 4.92,0.22 4.92,0" etichette="0.15,0.84,1.5;1.5,-0.34,2;4.33,2.28,4.5;7.7,-0.34,6" titolo="I raggi obliqui sono paralleli e le altezze sono perpendicolari al terreno"}
:::

:::attenzione
I triangoli delle ombre sono simili quando gli oggetti sono verticali, le ombre sono misurate nello stesso istante e lungo la stessa direzione, e cadono su terreni con la stessa pendenza. Se l'asta è inclinata cambia l'angolo alla base, e se le ombre cadono su superfici con pendenze diverse cambia l'angolo fra raggio e terreno, quindi le misure non costruiscono necessariamente due triangoli simili. Per una scala di carta, invece, il fattore è fissato dalla rappresentazione. Le unità si convertono prima, poi si usa $N$ per le lunghezze e $N^2$ per le aree.
:::
