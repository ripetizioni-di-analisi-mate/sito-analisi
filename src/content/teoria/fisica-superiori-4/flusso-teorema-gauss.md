---
titolo: Flusso elettrico e teorema di Gauss
sommario: Come si orienta una superficie, come si sommano i flussi e quando la simmetria permette di calcolare il campo elettrico.
---

## Superficie orientata e componente normale

:::definizione{#superficie-orientata titolo="Area orientata"}
Una superficie piana di area $A$ ha due possibili versori normali, entrambi perpendicolari al piano e di verso opposto. Scelto il versore $\hat n$, il vettore area è $\vec A=A\hat n$. Cambiare orientazione sostituisce $\vec A$ con $-\vec A$.

Una superficie chiusa delimita un volume, quindi si sceglie in ogni punto la normale rivolta **verso l'esterno**. Su due facce opposte di un cubo i versori normali sono opposti. Su una sfera centrata nell'origine, il versore normale in un punto coincide con il versore radiale $\hat r$ che va dal centro al punto. Per una superficie curva, la normale si riferisce al piano tangente nel punto considerato.
:::

:::esempio{titolo="Componente normale su una faccia"}
Un campo $\vec E$ forma un angolo $\theta$ con $\hat n$. La sua componente con segno lungo la normale è $E_n=\vec E\cdot\hat n=E\cos\theta$, dove $E$ è il modulo. Se il campo attraversa la faccia verso l'esterno, $E_n>0$. Se la attraversa in senso opposto a $\hat n$, $E_n<0$. Un campo parallelo alla faccia ha $E_n=0$.

::grafico{assi=0 uguale=1 linee="-2.1,0 2.6,0" vettori="0,0,0,2,n;0,0,2.08,1.2,E" etichette="0.47,0.79,60°;0.76,-0.35,piano" xmin=-2.7 xmax=3 ymin=-0.75 ymax=2.25 titolo="Sezione della superficie piana. Il campo forma un angolo di $60^\circ$ con la normale e di $30^\circ$ con il piano."}

:::

## Flusso elettrico attraverso una superficie

:::definizione{#flusso titolo="Flusso del campo elettrico"}
Se $\vec E$ è uniforme su una superficie piana, il **flusso** è il prodotto della componente normale per l'area,
$$
\Phi_E=\vec E\cdot\vec A=EA\cos\theta.
$$
L'unità è $\mathrm{N\,m^2/C}$. Quando si gira la normale, l'angolo diventa $180^\circ-\theta$ e il coseno cambia segno, quindi il flusso diventa $-\Phi_E$. Il campo nello spazio rimane lo stesso.
:::

:::esempio{titolo="Angolo dato rispetto al piano"}
Un campo di modulo $200\,\mathrm{N/C}$ forma $30^\circ$ con un piano di area $0{,}030\,\mathrm{m^2}$. La normale è scelta dalla parte verso cui punta il campo. L'angolo con la normale è $60^\circ$. Poiché $\cos60^\circ=\dfrac12$, si ha
$$
\Phi_E=200\cdot0{,}030\cdot\frac12\,\mathrm{N\,m^2/C}
=3\,\mathrm{N\,m^2/C}.
$$
Con la normale opposta l'angolo è $120^\circ$ e il flusso è $-3\,\mathrm{N\,m^2/C}$.
:::

:::osservazione
Su una superficie curva o quando il campo varia, si prendono elementi di area abbastanza piccoli da poter considerare campo e normale costanti su ciascuno. Un elemento orientato di area $\Delta A$ contribuisce con $\vec E\cdot\hat n\,\Delta A$. Sommando i contributi con segno e passando al limite si ottiene $\Phi_E=\int_S\vec E\cdot\hat n\,\mathrm{d}A$.
:::

## Teorema di Gauss

:::teorema{#gauss titolo="Flusso totale e carica racchiusa"}
Per ogni superficie chiusa orientata con le normali uscenti, il flusso elettrico totale è
$$
\Phi_{E,\mathrm{chiusa}}=\frac{Q_{\mathrm{int}}}{\varepsilon_0},
\qquad
\varepsilon_0=8{,}85\cdot10^{-12}\,\mathrm{C^2/(N\,m^2)}.
$$
$Q_{\mathrm{int}}$ è la **somma algebrica** delle cariche racchiuse. Le cariche esattamente sul contorno si evitano scegliendo una superficie gaussiana leggermente spostata. Una carica esterna modifica il campo locale, mentre il suo contributo al flusso netto è nullo.
:::

:::esempio{titolo="Carica netta con segno"}
Una superficie chiusa racchiude cariche $+4\,\mathrm{nC}$ e $-6\,\mathrm{nC}$. La loro somma è $-2\,\mathrm{nC}$. Poiché $1\,\mathrm{nC}=10^{-9}\,\mathrm{C}$, il flusso totale vale
$$
\Phi_{E,\mathrm{chiusa}}=
\frac{-2\cdot10^{-9}}{8{,}85\cdot10^{-12}}\,\mathrm{N\,m^2/C}
\simeq -226\,\mathrm{N\,m^2/C}.
$$
Il flusso negativo indica che i contributi entranti prevalgono sulla somma di tutta la superficie. Il campo può uscire da singole zone.
:::

:::attenzione
Un cubo in un campo uniforme può avere **flusso netto nullo con campo non nullo**. Supponiamo che il campo di modulo $E$ sia parallelo a uno spigolo. Esce da una faccia di area $A$ e entra attraverso quella opposta, con contributi $+EA$ e $-EA$. È tangente alle quattro facce rimanenti. La somma è zero, in accordo con l'assenza di carica netta interna.

::grafico{assi=0 uguale=1 linee="-1.6,-1.35 1.6,-1.35 1.6,1.35 -1.6,1.35 -1.6,-1.35" vettori="-2.65,0.57,2.65,0.57,E;-1.63,0,-2.45,0,n₁;1.63,0,2.45,0,n₂" etichette="-2.45,-0.85,−EA;1.88,-0.85,+EA" xmin=-3.2 xmax=3.2 ymin=-1.72 ymax=1.72 titolo="Sezione del cubo. Le due facce attraversate dal campo hanno normali opposte e flussi che si compensano."}

:::

## Simmetria sferica

::::teorema{#sfera titolo="Campo di una distribuzione sfericamente simmetrica"}
Per una distribuzione di carica sfericamente simmetrica, il campo è radiale. La componente radiale con segno $E_r=\vec E\cdot\hat r$ ha lo stesso valore in tutti i punti alla stessa distanza $r>0$ dal centro. Una superficie gaussiana sferica con quel centro dà
$$
E_r=\frac{Q_{\mathrm{int}}(r)}{4\pi\varepsilon_0r^2}.
$$
Fuori dalla distribuzione si ha $Q_{\mathrm{int}}(r)=Q$, la carica totale. Perciò il campo esterno coincide con quello di una carica puntiforme $Q$ al centro. Il campo è uscente per $E_r>0$ ed entrante per $E_r<0$. Il modulo vale $E=|E_r|$.

:::dimostrazione
La simmetria di rotazione attorno alla direzione radiale esclude componenti tangenziali. Una rotazione attorno al centro può inoltre portare qualsiasi punto della superficie in qualsiasi altro. La componente radiale ha quindi lo stesso valore sull'intera sfera. Poiché la normale uscente è $\hat r$, la somma del flusso è $E_r$ per l'area $4\pi r^2$. Il teorema di Gauss dà $4\pi r^2E_r=\dfrac{Q_{\mathrm{int}}(r)}{\varepsilon_0}$.
:::
::::

:::esempio{titolo="Campo esterno orientato verso il centro"}
Una distribuzione sferica di carica totale $-1\,\mathrm{nC}$ è tutta contenuta entro un raggio di $0{,}10\,\mathrm{m}$. A distanza $r=0{,}20\,\mathrm{m}$ è racchiusa tutta la carica. Si ottiene
$$
E_r=\frac{-10^{-9}}{4\pi\cdot8{,}85\cdot10^{-12}\cdot(0{,}20)^2}\,\mathrm{N/C}
\simeq-225\,\mathrm{N/C}.
$$
Il segno individua il verso verso il centro. Raddoppiando la distanza, la sfera gaussiana racchiude ancora la stessa carica. L'area quadruplica, quindi il modulo del campo diventa un quarto e il flusso totale resta invariato.
:::

:::teorema{#sfera-uniforme titolo="Campo interno di una sfera isolante carica"}
Sia $R$ il raggio di una sfera isolante con carica totale $Q$ distribuita con densità volumica uniforme. La sfera interna di raggio $r<R$ racchiude la frazione di carica uguale alla frazione di volume,
$$
Q_{\mathrm{int}}(r)
=Q\frac{\frac43\pi r^3}{\frac43\pi R^3}
=Q\left(\frac{r}{R}\right)^3.
$$
Inserendola nella formula di Gauss si trova $E_r=\dfrac{Qr}{4\pi\varepsilon_0R^3}$. Nel centro il campo è nullo per simmetria e il modulo cresce linearmente fino a $r=R$. Il valore interno tende a quello esterno per $r\to R$, perché nel modello la densità è volumica e sulla superficie manca una carica superficiale separata.

::grafico{f="x<=1?x:1/(x^2)" xmin=0 xmax=3 ymin=0 ymax=1.25 punti="1,1,pieno;0.5,0.5,pieno;2,0.25,pieno" nomi="r/R,E/Eₛ" legenda="\dfrac{E}{E_s}" titolo="Modulo normalizzato per la sfera isolante, con $E_s$ modulo alla superficie. A $r=\dfrac R2$ si ha $E=\dfrac{E_s}2$, a $r=2R$ si ha $E=\dfrac{E_s}4$."}

:::

## Simmetria cilindrica e filo indefinito

::::teorema{#filo titolo="Campo di un filo rettilineo indefinito"}
Un filo indefinito con densità lineare uniforme $\lambda_q$ ha carica $\lambda_q L$ in un tratto di lunghezza $L$. Il campo a distanza $r$ dall'asse è radiale nel piano perpendicolare al filo e la sua componente uscente è
$$
E_r=\frac{\lambda_q}{2\pi\varepsilon_0r}.
$$
Il verso è verso il filo se $\lambda_q<0$. Il modello descrive il tratto centrale di un filo finito quando il punto di osservazione è molto più vicino all'asse che agli estremi del filo.

:::dimostrazione
Le traslazioni lungo il filo e le rotazioni attorno all'asse rendono equivalente ogni punto del mantello di un cilindro coassiale. La riflessione nel piano perpendicolare al filo che passa per il punto esclude la componente assiale. La riflessione nel piano che contiene il filo e il punto esclude la componente tangenziale attorno all'asse. Il campo risulta normale al mantello e tangente alle basi. Quindi
$$
\begin{aligned}
\Phi_{\mathrm{basi}} &=0,\\[6pt]
\Phi_{\mathrm{mantello}}&=E_r\,2\pi rL
=\frac{\lambda_qL}{\varepsilon_0}.
\end{aligned}
$$
Il fattore $L$ si semplifica. Il campo dipende dalla distanza radiale, mentre la lunghezza del cilindro è una scelta di calcolo.
:::
::::

:::esempio{titolo="Contributi di mantello e basi"}
Per un filo con $\lambda_q=1\,\mathrm{nC/m}$ e $r=0{,}10\,\mathrm{m}$ si ottiene $E\simeq180\,\mathrm{N/C}$. Raddoppiando $r$, a parità di $L$, la carica racchiusa resta la stessa e il mantello raddoppia la propria area. Il campo si dimezza a circa $90\,\mathrm{N/C}$.

::grafico{assi=0 uguale=1 linee="-2.4,-1.12 2.4,-1.12 2.4,1.12 -2.4,1.12 -2.4,-1.12" segmenti="-3.12,0,3.12,0;0,-1.12,0,0;-2.4,-1.46,2.4,-1.46" vettori="-1.5,1.13,-1.5,1.71,E;1.2,-1.13,1.2,-1.72,E;0.85,0.24,0.85,0.84,E" etichette="-0.32,-0.59,r;-0.04,-1.6,L;2.58,-0.13,filo" xmin=-3.5 xmax=3.75 ymin=-1.95 ymax=1.95 titolo="Sezione lungo l'asse del cilindro gaussiano. Il campo attraversa il mantello e rimane tangente alle basi a sinistra e destra."}

:::

## Piano carico e due armature

::::teorema{#piano titolo="Campo di un piano uniforme indefinito"}
Per un piano indefinito di densità superficiale uniforme $\sigma_q$, il campo è perpendicolare al piano e ha lo stesso modulo sui due lati. Il modulo è
$$
E=\frac{|\sigma_q|}{2\varepsilon_0}.
$$
Con $\sigma_q>0$ i campi puntano via dal piano. Con $\sigma_q<0$ puntano verso il piano. In questo modello il modulo è indipendente dalla distanza dal piano.

:::dimostrazione
Una superficie gaussiana a cilindro corto attraversa il piano. Le basi uguali hanno area $A$ e sono parallele al piano. Il campo è tangente al mantello, quindi il mantello ha flusso nullo. Con carica positiva i flussi attraverso entrambe le basi sono uscenti e la somma è $2EA$. La carica racchiusa è $\sigma_qA$, quindi $2EA=\dfrac{\sigma_q A}{\varepsilon_0}$. Per carica negativa entrambi i flussi sono entranti e il calcolo del modulo usa $|\sigma_q|$.
:::
::::

:::esempio{titolo="Superficie a cilindro corto"}
Il piano ha $\sigma_q=8{,}85\cdot10^{-9}\,\mathrm{C/m^2}$. La formula dà $E=500\,\mathrm{N/C}$ su ciascun lato. Con basi di area $0{,}10\,\mathrm{m^2}$, il flusso uscente da ciascuna base è $50\,\mathrm{N\,m^2/C}$ e il flusso chiuso è $100\,\mathrm{N\,m^2/C}$.

::grafico{assi=0 uguale=1 linee="-2.55,0 2.55,0;-1.15,-0.65 1.15,-0.65 1.15,0.65 -1.15,0.65 -1.15,-0.65" vettori="-0.42,0.68,-0.42,1.48,E;0.42,-0.68,0.42,-1.48,E" etichette="-1.99,0.18,+σ;0.34,0.78,A;-0.5,-0.82,A" xmin=-2.85 xmax=2.85 ymin=-1.65 ymax=1.65 titolo="Il piano carico taglia il cilindro gaussiano. Entrambe le basi danno lo stesso contributo uscente."}

:::

:::teorema{#due-piani titolo="Campo fra armature opposte"}
Due piani paralleli indefiniti, di densità $+\sigma_q$ e $-\sigma_q$ con $\sigma_q>0$, producono per sovrapposizione un campo nullo all'esterno e un campo uniforme all'interno. Nell'intercapedine ciascun contributo punta dal piano positivo verso quello negativo e ha modulo $\dfrac{\sigma_q}{2\varepsilon_0}$. Perciò
$$
E_{\mathrm{int}}=\frac{\sigma_q}{\varepsilon_0}.
$$
Nelle regioni esterne i due moduli sono uguali e i versi opposti. Per lastre finite il risultato vale in buona approssimazione nella regione centrale quando la distanza fra le lastre è molto minore delle dimensioni trasversali.
:::

## Conduttori in equilibrio elettrostatico

:::teorema{#conduttore titolo="Campo nel metallo e appena fuori"}
Nel materiale di un conduttore in equilibrio elettrostatico il campo è nullo. Un campo interno eserciterebbe una forza sulle cariche libere e le metterebbe in moto. Una superficie gaussiana interamente immersa nel metallo ha perciò flusso nullo. L'eventuale carica in eccesso si trova sulle superfici.

Il campo appena fuori dal metallo è normale alla superficie. Una componente tangenziale farebbe scorrere carica lungo il metallo. Per una piccola superficie gaussiana cilindrica che attraversa il confine, la base interna ha flusso nullo. Nel limite di un cilindro sottile il mantello dà un contributo trascurabile. Se $\sigma_q$ è la densità superficiale locale e $A$ l'area della base esterna, si ha
$$
E_{n,\mathrm{est}}A=\frac{\sigma_q A}{\varepsilon_0}
\quad\Longrightarrow\quad
E_{n,\mathrm{est}}=\frac{\sigma_q}{\varepsilon_0}.
$$
Per una sfera conduttrice isolata e carica, il modulo passa da zero appena dentro al valore $\dfrac{|Q|}{4\pi\varepsilon_0R^2}$ appena fuori. Qui la carica sta sulla superficie e i limiti dai due lati sono diversi.
:::

:::esempio{titolo="Carica indotta sulla parete di una cavità"}
Una cavità chiusa dentro un conduttore contiene una carica puntiforme $+3\,\mathrm{nC}$. Una superficie chiusa tracciata nel metallo attorno alla cavità ha flusso zero, dato che giace dove $\vec E=0$. La carica puntiforme e la carica indotta sulla parete interna devono quindi avere somma zero. La parete interna porta in totale $-3\,\mathrm{nC}$. Se il conduttore era neutro, la sua superficie esterna porta in totale $+3\,\mathrm{nC}$.

In assenza di cariche nella cavità, tutta la parete interna è allo stesso potenziale. Per la soluzione elettrostatica con questo contorno il potenziale è costante anche nella cavità, quindi il campo vi è nullo.
:::

## Quando il flusso permette di ricavare il campo

:::osservazione{#uso-simmetria titolo="Scelta della superficie gaussiana"}
Il teorema di Gauss vale per tutte le superfici chiuse. Per isolare il campo nell'equazione, la simmetria della distribuzione deve permettere di determinare la componente normale su parti della superficie. Su una sfera concentrica $E_r$ è costante. Su un cilindro attorno al filo è costante sul mantello e nulla sulle basi. Sul cilindro corto che attraversa un piano risulta costante sulle basi e nulla sul mantello.

Se si sposta una carica puntiforme dal centro di una sfera gaussiana a un altro punto interno, la carica racchiusa resta la stessa. Il campo vicino alla carica diventa più intenso e le direzioni non sono tutte radiali rispetto al centro della sfera. Dividere il flusso totale per l'area dà la media della componente normale, mentre per conoscere i valori puntuali occorre il campo di Coulomb.
:::
