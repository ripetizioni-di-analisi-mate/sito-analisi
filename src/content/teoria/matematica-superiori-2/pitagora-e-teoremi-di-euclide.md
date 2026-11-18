---
titolo: "Pitagora e teoremi di Euclide"
sommario: "Teorema di Pitagora e inverso, diagonali, proiezioni dei cateti, teoremi di Euclide e applicazioni alle distanze."
---

## Cateti e ipotenusa

:::definizione{#triangolo titolo="Partire dall'angolo retto"}

Un triangolo rettangolo ha un angolo di $90^\circ$. I due lati che lo formano sono i **cateti**. Il lato opposto è l'**ipotenusa**. Se l'angolo retto è in $A$, useremo $a=AB$, $b=AC$ e $c=BC$. La lettera $c$ indica quindi il lato che non ha $A$ come estremo. La posizione obliqua nel disegno dipende da come si orienta il triangolo.

È utile individuare quali informazioni stabiliscono l'angolo retto. Può essere dato nel testo, conseguire dalla perpendicolarità di due rette, oppure essere dedotto a partire dalle misure. Le relazioni fra i lati di un triangolo rettangolo richiedono questa informazione.

::grafico{assi=0 uguale=1 xmin=-0.85 xmax=5.65 ymin=-0.82 ymax=4.61 poligoni="0,0 5,0 0,3.75" linee="0.28,0 0.28,0.28 0,0.28" punti="0,0;5,0;0,3.75" etichette="-0.23,-0.38,A;5.19,-0.37,B;-0.2,4.13,C;2.5,-0.39,a;-0.42,1.85,b;2.67,2.25,c" titolo="Il segno in $A$ individua i cateti e il lato opposto $BC$"}

:::

## Il teorema di Pitagora

::::teorema{#pitagora titolo="Una relazione fra quadrati"}

Se il triangolo è rettangolo, il quadrato dell'ipotenusa è uguale alla somma dei quadrati dei cateti.

$$
c^2=a^2+b^2.
$$

:::dimostrazione

Si dispongono quattro copie dello stesso triangolo negli angoli di un quadrato di lato $a+b$. Ogni lato del quadrilatero centrale è un'ipotenusa di lunghezza $c$. Ai suoi vertici, due angoli acuti dei triangoli occupano insieme $90^\circ$, perché sono gli angoli non retti di una stessa forma. L'angolo rimasto sull'angolo piatto è quindi retto e il quadrilatero centrale è un quadrato di lato $c$.

::grafico{assi=0 uguale=1 xmin=-0.65 xmax=7.62 ymin=-0.66 ymax=7.67 poligoni="0,0 4,0 0,3;4,0 7,0 7,4;7,4 7,7 3,7;3,7 0,7 0,3" linee="4,0 7,4 3,7 0,3 4,0" etichette="2,-0.39,a;5.5,-0.39,b;4.95,2.15,c" titolo="Il quadrato centrale rimane dopo aver tolto i quattro triangoli"}

$$
\begin{aligned}
c^2&=(a+b)^2-4\cdot\dfrac{ab}{2}\\[6pt]
&=a^2+2ab+b^2-2ab=a^2+b^2 .
\end{aligned}
$$

:::

::::

:::esempio{titolo="Trovare il lato giusto"}

Con cateti di $6$ cm e $8$ cm si sommano i quadrati. L'ipotenusa è $\sqrt{36+64}=10$ cm e supera entrambi. Se i dati sono invece $c=13$ cm e $a=5$ cm, si isola il quadrato del cateto mancante. Ne segue $b=\sqrt{169-25}=12$ cm. In questo secondo calcolo il radicando deve essere positivo, perché il cateto cercato ha lunghezza positiva.

I termini prima della radice sono misure al quadrato. Usare i centimetri per entrambi i lati noti produce centimetri quadrati nel radicando e centimetri per il risultato. Nel passaggio ai lati si prende la radice positiva, non si sommano o sottraggono direttamente le lunghezze.

:::

## Il teorema inverso

::::teorema{#inverso titolo="Dalle tre lunghezze all'angolo retto"}

Se le tre lunghezze positive $a,b,c$ formano un triangolo e $c^2=a^2+b^2$, quel triangolo è rettangolo con angolo retto opposto al lato $c$.

:::dimostrazione

Si costruisce un triangolo con cateti $a$ e $b$ posti lungo due semirette perpendicolari. Per il teorema diretto, il terzo lato misura $\sqrt{a^2+b^2}=c$. I tre lati della costruzione coincidono con quelli del triangolo dato. Il criterio LLL stabilisce la congruenza, dunque anche nel triangolo dato l'angolo opposto a $c$ è retto.

:::

::grafico{assi=0 uguale=1 xmin=-1.05 xmax=13.03 ymin=-0.82 ymax=6.25 linee="0,0 12,0 0,5 0,0;0,0.37 0.37,0.37 0.37,0" punti="0,0;12,0;0,5" etichette="6,-0.44,12;-0.48,2.49,5;6.02,2.85,13" titolo="La costruzione con cateti $5$ e $12$ coincide con la terna assegnata"}

::::

:::attenzione{titolo="Controllare la terna prima di decidere"}

Con $4,5,6$ il lato maggiore è minore della somma degli altri, dunque esiste un triangolo. I quadrati danno $4^2+5^2=41$ e $6^2=36$, quindi l'angolo opposto a $6$ non è retto. Con $2,3,5$ manca già un triangolo, perché i punti sarebbero allineati. Il controllo di esistenza e quello sull'angolo rispondono a due domande diverse.

Quando una terna positiva soddisfa l'uguaglianza pitagorica, la disuguaglianza triangolare è anche automatica. Infatti $(a+b)^2=c^2+2ab>c^2$, dunque $a+b>c$. È sufficiente confrontare il quadrato della lunghezza maggiore con la somma degli altri due.

:::

:::osservazione{titolo="Terne pitagoriche e cambi di scala"}

Una terna pitagorica è formata da tre interi positivi che soddisfano l'uguaglianza del teorema. Da $3,4,5$ si ricava $9,12,15$ moltiplicando ogni lato per $3$. Le due parti dell'uguaglianza dei quadrati vengono entrambe moltiplicate per $9$, quindi l'angolo retto si conserva. La diagonale di un quadrato di lato unitario misura invece $\sqrt2$. È un'ipotenusa di un triangolo rettangolo, ma le sue tre lunghezze non formano una terna di interi.

:::

## Quadrati ed equilateri

::::teorema{#notevoli titolo="Diagonale, altezza e angoli notevoli"}

In un quadrato di lato $l$, la diagonale misura $l\sqrt2$. In un equilatero dello stesso lato, l'altezza misura $\dfrac{\sqrt3}{2}l$ e l'area $\dfrac{\sqrt3}{4}l^2$.

:::dimostrazione

La diagonale del quadrato chiude un triangolo rettangolo con entrambi i cateti di lunghezza $l$. Il suo quadrato vale $2l^2$. Nell'equilatero l'altezza è anche mediana e bisettrice. Congiunge il vertice al punto medio della base e costruisce un triangolo con ipotenusa $l$ e un cateto $\dfrac l2$. Il quadrato dell'altezza è $l^2-\left(\dfrac l2\right)^2=\dfrac{3l^2}{4}$. Si estrae la radice e si moltiplica la base per l'altezza, dividendo per due per l'area.

:::

::grafico{assi=0 uguale=1 xmin=-0.75 xmax=4.83 ymin=-0.78 ymax=4.75 linee="0,0 4,0 4,4 0,4 0,0;0,0 4,4;0,0.24 0.24,0.24 0.24,0" etichette="2,-0.41,l;-0.37,2,l;2.34,1.7,d" titolo="La diagonale $d$ è l’ipotenusa fra due lati uguali"}

::grafico{assi=0 uguale=1 xmin=-0.82 xmax=6.79 ymin=-0.85 ymax=6.03 linee="0,0 6,0 3,5.196152 0,0;3,5.196152 3,0;3,0.27 3.27,0.27 3.27,0" punti="0,0;6,0;3,5.196152;3,0" etichette="-0.17,-0.35,B;6.16,-0.35,C;3,5.63,A;3,-0.4,H;1.5,-0.38,l/2;4.5,-0.38,l/2;3.33,2.45,h" titolo="Un lato dell’equilatero è l’ipotenusa del triangolo $AHC$"}

::::

:::esempio{titolo="Usare la diagonale oppure un angolo da trenta gradi"}

Se la diagonale di un quadrato è $10$ cm, il lato è $\dfrac{10}{\sqrt2}=5\sqrt2$ cm e l'area è $50$ cm$^2$. Il valore $100$ cm$^2$ è il quadrato della diagonale, cioè il doppio dell'area.

L'altezza dell'equilatero divide l'angolo al vertice di $60^\circ$ in due angoli di $30^\circ$. Nel triangolo rettangolo ottenuto il lato opposto a $30^\circ$ è quindi metà dell'ipotenusa. Questa relazione vale per ogni triangolo rettangolo con un angolo di $30^\circ$, per il criterio di similitudine angolo-angolo.

:::

## Proiezioni sull'ipotenusa

:::definizione{#proiezioni titolo="Proiettare gli estremi del cateto"}

In $ABC$ rettangolo in $A$, sia $H$ il piede di $AH$ sulla retta $BC$. Il piede è interno a $BC$ perché gli angoli in $B$ e $C$ sono acuti. Sul prolungamento oltre uno dei due estremi, si otterrebbe un triangolo rettangolo con un altro angolo ottuso, cosa impossibile.

Nella proiezione di $AB$, l'estremo $B$ rimane sulla retta $BC$, mentre $A$ scende in $H$. La proiezione del cateto $AB$ è pertanto $BH$, di lunghezza $p$. La proiezione di $AC$ è $HC$, di lunghezza $q$. Indichiamo con $h=AH$ l'altezza. Entrambe le proiezioni sono positive e $p+q=c$.

::grafico{assi=0 uguale=1 xmin=-1.25 xmax=26.35 ymin=-1.35 ymax=13.84 linee="0,0 25,0 9,12 0,0;9,12 9,0;9,0.6 9.6,0.6 9.6,0" punti="0,0;25,0;9,12;9,0" etichette="-0.39,-0.65,B;25.37,-0.66,C;9,12.84,A;9,-0.72,H;4.5,-0.65,p;17,-0.65,q;9.99,5.64,h" titolo="$BH$ parte dallo stesso estremo $B$ del cateto $AB$"}

Le corrispondenze nei tre triangoli si leggono dagli angoli. Il triangolo intero ha il retto in $A$, mentre i due più piccoli lo hanno in $H$. L'angolo in $B$ è comune a $ABC$ e $HBA$. L'angolo in $C$ è comune a $ABC$ e $HAC$. Questi abbinamenti danno le similitudini nelle scritture ordinate.

$$
ABC\sim HBA\sim HAC.
$$

:::

## Il primo teorema di Euclide

::::teorema{#euclide-primo titolo="Cateto, ipotenusa e proiezione corrispondente"}

In un triangolo rettangolo, il quadrato di ciascun cateto è il prodotto dell'ipotenusa per la proiezione di quel cateto sull'ipotenusa.

$$
a^2=cp,\qquad b^2=cq.
$$

:::dimostrazione

Da $ABC\sim HBA$ si confrontano le ipotenuse $BC$ e $AB$ e poi i due cateti adiacenti all'angolo in $B$, che sono $AB$ e $BH$. Si ottiene $\dfrac{BC}{AB}=\dfrac{AB}{BH}$. Per la similitudine con $HAC$, si ottiene $\dfrac{BC}{AC}=\dfrac{AC}{HC}$. Moltiplicando in croce si ricavano le due uguaglianze. La scelta della proiezione dipende dal cateto usato nella proporzione.

:::

::::

:::esempio{titolo="Risolvere rispetto a una proiezione"}

Con $c=17$ cm e $a=8$ cm, si divide il quadrato di $8$ per $17$. Si trova $p=\dfrac{64}{17}$ cm. L'altro segmento è quindi $q=17-\dfrac{64}{17}=\dfrac{225}{17}$ cm. Riapplicando il teorema si ottiene $b=\sqrt{17q}=15$ cm. Le proiezioni risultano entrambe minori di $c$, e $8^2+15^2=17^2$ controlla le misure dei cateti.

Nella formula $p=\dfrac{a^2}{c}$ si dividono unità quadrate per unità lineari. Il risultato ha perciò l'unità di una lunghezza, come deve accadere per un segmento dell'ipotenusa.

:::

:::osservazione{titolo="Confrontare cateti e proiezioni"}

Dividendo membro a membro le due formule del primo teorema, si trova $\dfrac{a^2}{b^2}=\dfrac pq$. Le lunghezze sono positive, quindi il rapporto dei cateti è la radice quadrata del rapporto delle proiezioni. Se $p:q=4:9$, segue $a:b=2:3$. Il cateto più lungo corrisponde alla proiezione più lunga.

Sommare le due formule offre un controllo diverso. Si ottiene $a^2+b^2=c(p+q)=c^2$, esattamente il risultato di Pitagora. Questa somma però da sola non distingue quale proiezione appartenga a quale cateto. Per assegnarle si torna ai punti $B$ e $C$ della figura.

:::

## Il secondo teorema di Euclide

::::teorema{#euclide-secondo titolo="Altezza e prodotto delle proiezioni"}

Il quadrato dell'altezza relativa all'ipotenusa di un triangolo rettangolo è il prodotto delle due proiezioni.

$$
h^2=pq.
$$

:::dimostrazione

Nella similitudine $HBA\sim HAC$, il lato $BH$ corrisponde ad $AH$, mentre $AH$ del primo triangolo corrisponde a $HC$ del secondo. I rapporti nello stesso ordine danno $\dfrac{BH}{AH}=\dfrac{AH}{HC}$. Si moltiplicano i medi e gli estremi e si ottiene $AH^2=BH\cdot HC$. L'altezza compare come termine medio, perché è un lato comune con un ruolo diverso nelle due corrispondenze.

:::

::::

:::esempio{titolo="Ricostruire e controllare le proiezioni"}

Con $h=6$ cm e $p=4$ cm, il secondo teorema dà $q=\dfrac{h^2}{p}=9$ cm. L'ipotenusa vale $c=p+q=13$ cm. La posizione di $H$ si ricostruisce a partire dall'estremo associato a $p$. Scambiare i nomi delle proiezioni scambia i cateti corrispondenti e lascia invariati $h$ e $c$.

Se si conosce solo $c$, i valori possibili dell'altezza si controllano scrivendo $q=c-p$. Completando il quadrato si ottiene

$$
h^2=p(c-p)=\left(\dfrac c2\right)^2-\left(p-\dfrac c2\right)^2.
$$

Quindi $h\le\dfrac c2$. L'uguaglianza vale quando le proiezioni sono uguali e, per il primo teorema, lo sono anche i cateti. Per $c=10$ cm il massimo è $h=5$ cm. I valori agli estremi del grafico darebbero una proiezione nulla e non rappresentano triangoli con due cateti positivi.

::grafico{xmin=-0.8 xmax=10.9 ymin=-3.7 ymax=28.3 curve="t,t*(10-t),0,10" nomi="p,y" legenda="y=h^2=p(10-p)" punti="0,0,vuoto;5,25,pieno;10,0,vuoto" segmenti="5,0,5,25" titolo="Con $c=10$, il quadrato dell’altezza è massimo per $p=q=5$"}

:::

::::teorema{#euclide-inverso titolo="Un criterio per riconoscere il retto"}

Anche senza conoscere l'angolo in $A$, si può tracciare l'altezza $AH$ in un triangolo $ABC$. Se $H$ è interno a $BC$ e $AH^2=BH\cdot HC$, allora il triangolo iniziale è rettangolo in $A$.

:::dimostrazione

Per Pitagora nei due triangoli che sono retti in $H$, $AB^2=p^2+h^2$ e $AC^2=q^2+h^2$. Per ipotesi $h^2=pq$. La somma vale quindi $p^2+q^2+2pq=(p+q)^2=BC^2$. Il teorema inverso di Pitagora rende allora retto l'angolo opposto a $BC$. La condizione sul piede interno giustifica l'uso di $p+q$.

:::

::::

:::esempio{titolo="Partire dall'altezza e dall'ipotenusa"}

Se $c=20$ cm e $h=8$ cm, l'altezza è minore del limite $10$ cm. Dalla forma del quadrato appena ottenuta segue $(p-10)^2=100-64=36$. Quindi $p$ vale $4$ cm oppure $16$ cm, e $q$ è l'altra lunghezza. Si controllano insieme $4+16=20$ e $4\cdot16=8^2$. Una volta costruito $A$ a distanza $h$ sulla perpendicolare in $H$, il converso appena dimostrato garantisce che l'angolo in $A$ è retto.

Servirebbe un'informazione sui cateti per distinguere quale segmento sia $BH$. Per esempio, con $AB<AC$ occorre $p<q$, quindi $p=4$ cm. Se fosse assegnato $h=11$ cm, il radicando per trovare la distanza di $p$ dal centro dell'intervallo diventerebbe negativo.

:::

## Area e misure inverse

:::osservazione{#problemi titolo="Due scelte di base"}

Si può calcolare l'area di un triangolo rettangolo scegliendo come base un cateto, con l'altro cateto come altezza. Scegliendo invece l'ipotenusa, l'altezza è $AH$. La stessa area $\mathcal A$ si scrive dunque in due modi.

$$
\mathcal A=\dfrac{ab}{2}=\dfrac{ch}{2},\qquad h=\dfrac{ab}{c}.
$$

Per cateti di $9$ cm e $12$ cm si trova $c=15$ cm e l'area è $54$ cm$^2$. Dividere il doppio dell'area per $c$ restituisce $h=\dfrac{108}{15}=7{,}2$ cm. Questa misura è confrontabile con la metà dell'ipotenusa, $7{,}5$ cm, che è il limite ottenuto dal secondo teorema.

:::

:::esempio{titolo="Dall'area a un'altezza possibile"}

Se un triangolo rettangolo ha area $42$ cm$^2$ e ipotenusa $14$ cm, si può ricavare $h=\dfrac{2\cdot42}{14}=6$ cm, anche senza conoscere i cateti. Il controllo $6\le7$ conferma il rispetto del limite sull'altezza.

Sostituire direttamente $h\le\dfrac c2$ nella formula dell'area dà $\mathcal A\le\dfrac{c^2}{4}$. Con ipotenusa $14$ cm, l'area massima è dunque $49$ cm$^2$ e si ottiene con i cateti uguali. Un'area assegnata di $50$ cm$^2$ sarebbe incompatibile, anche se l'equazione $ch=2\mathcal A$ da sola permette di calcolare un valore numerico di $h$.

:::

:::esempio{titolo="Un'altezza in un triangolo isoscele"}

Se un isoscele ha lati uguali di $13$ cm e base di $10$ cm, l'altezza alla base incontra il suo punto medio. Nei due triangoli rettangoli ottenuti la metà della base vale $5$ cm. Il lato di $13$ cm è l'ipotenusa. L'altezza misura $\sqrt{13^2-5^2}=12$ cm e l'area vale $60$ cm$^2$. Il retto utilizzato è quello nel piede dell'altezza, generato dalla costruzione.

::grafico{assi=0 uguale=1 xmin=-0.94 xmax=10.91 ymin=-0.9 ymax=13.05 linee="0,0 10,0 5,12 0,0;5,12 5,0;5,0.32 5.32,0.32 5.32,0" punti="0,0;10,0;5,12;5,0" etichette="2.5,-0.44,5;7.5,-0.44,5;1.83,6.26,13;8.24,6.22,13;5.36,5.72,h" titolo="La mediana alla base produce due triangoli rettangoli congruenti"}

:::

## Distanze sul piano

:::esempio{#distanze titolo="Due spostamenti perpendicolari"}

Su una pianta si va da $P$ a $Q$ per $0{,}3$ km verso est, quindi da $Q$ a $R$ per $400$ m verso nord. Il percorso lungo i due tratti misura $700$ m. Per trovare la distanza diretta si converte $0{,}3$ km in $300$ m e si riconosce l'angolo retto in $Q$. Il segmento diretto $PR$ è l'ipotenusa, lunga $\sqrt{300^2+400^2}=500$ m.

::grafico{assi=0 uguale=1 xmin=-0.73 xmax=4.02 ymin=-0.77 ymax=4.79 linee="0,0 3,0 3,4;2.76,0 2.76,0.24 3,0.24" segmenti="0,0,3,4" punti="0,0;3,0;3,4" etichette="-0.18,-0.38,P;3.18,-0.38,Q;3.19,4.35,R;1.47,-0.38,300 m;3.56,2,400 m" titolo="La linea tratteggiata è la distanza diretta"}

La distanza diretta è maggiore di ciascun tratto, ma minore del percorso che passa per $Q$. Se la direzione del secondo spostamento cambiasse, le due lunghezze da sole non basterebbero per usare Pitagora. È l'informazione sulle direzioni a fissare l'angolo.

:::

:::esempio{titolo="Usare le differenze fra coordinate"}

Nel piano cartesiano i punti $P=(2,-3)$ e $R=(8,5)$ possono essere collegati con un tratto orizzontale e uno verticale. Le lunghezze sono le differenze in valore assoluto delle coordinate corrispondenti, $6$ e $8$. Le direzioni degli assi sono perpendicolari, perciò la distanza è $\sqrt{6^2+8^2}=10$. Se si scambia l'ordine dei punti, le differenze cambiano segno e i loro quadrati restano uguali.

Quando una coordinata coincide, uno dei tratti ha lunghezza zero. In quel caso i due punti sono sulla stessa orizzontale o verticale e basta il valore assoluto dell'altra differenza.

::grafico{xmin=-0.6 xmax=9 ymin=-4.1 ymax=6.2 punti="2,-3,pieno,P;8,5,pieno,R;8,-3,pieno,Q" segmenti="2,-3,8,-3;8,-3,8,5" linee="2,-3 8,5" titolo="I cateti del triangolo sono le differenze orizzontale e verticale"}

:::
