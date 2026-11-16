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

:::richiamo{titolo="Campo di una carica puntiforme"}
**Ipotesi:** una carica puntiforme $Q$ è ferma nel vuoto e $r$ è la distanza dal punto considerato.

**Tesi:** il campo è radiale e la sua componente radiale con segno vale $E_r=\dfrac{Q}{4\pi\varepsilon_0r^2}$.
:::

::::teorema{#gauss-puntiforme titolo="Flusso di una carica puntiforme su una sfera"}
Una carica puntiforme $Q$ occupa il centro di una sfera di raggio $r$. Il flusso del campo elettrico attraverso la sfera, con le normali uscenti, vale
$$
\Phi_E=\frac{Q}{\varepsilon_0}
$$
per ogni valore di $r$. È il caso particolare del teorema di Gauss che si ricava direttamente dalla legge di Coulomb. Il flusso è indipendente dal raggio, poiché il campo diminuisce come $\dfrac{1}{r^2}$ mentre l'area della sfera cresce come $r^2$.

:::dimostrazione
In ogni punto della sfera il campo è radiale e la normale uscente è $\hat r$, quindi $\vec E\cdot\hat n=E_r$. Per la legge di Coulomb $E_r$ dipende soltanto da $r$, perciò ha lo stesso valore in tutti i punti della sfera. Il flusso è il prodotto di $E_r$ per l'area $4\pi r^2$,
$$
\begin{aligned}
\Phi_E&=E_r\cdot4\pi r^2\\[6pt]
&=\frac{Q}{4\pi\varepsilon_0r^2}\cdot4\pi r^2\\[6pt]
&=\frac{Q}{\varepsilon_0}.
\end{aligned}
$$
Il raggio si semplifica, quindi il risultato vale per ogni sfera con centro nella carica. Se $Q<0$ il campo è entrante, $E_r<0$, e il flusso è negativo.
:::
::::

:::esempio{titolo="Stesso flusso su sfere diverse"}
Una carica $Q=+2\,\mathrm{nC}$ è al centro di due sfere, di raggi $0{,}10\,\mathrm{m}$ e $0{,}50\,\mathrm{m}$. Sulla prima il campo vale $1{,}80\cdot10^{3}\,\mathrm{N/C}$ e l'area è $0{,}126\,\mathrm{m^2}$. Sulla seconda il campo vale $71{,}9\,\mathrm{N/C}$ e l'area è $3{,}14\,\mathrm{m^2}$. In entrambi i casi il prodotto è $226\,\mathrm{N\,m^2/C}$, cioè $\dfrac{Q}{\varepsilon_0}$.

::grafico{assi=0 uguale=1 unicolore=1 curve="1.6*cos(t),1.6*sin(t),0,6.28318530718" punti="0,0,pieno,Q" vettori="1.60,0.00,2.50,0.00;1.13,1.13,1.77,1.77;0.00,1.60,0.00,2.50;-1.13,1.13,-1.77,1.77;-1.60,0.00,-2.50,0.00;-1.13,-1.13,-1.77,-1.77;-0.00,-1.60,-0.00,-2.50;1.13,-1.13,1.77,-1.77" xmin=-3 xmax=3 ymin=-3 ymax=3 titolo="Carica $+Q$ al centro di una sfera gaussiana. In ogni punto della superficie il campo è parallelo alla normale uscente."}

:::

:::attenzione
Il valore $\dfrac{Q}{\varepsilon_0}$ si riferisce al flusso attraverso una superficie *chiusa* e per una superficie aperta non vale. Se la carica $+2\,\mathrm{nC}$ è al centro di una sfera, una calotta emisferica occupa metà dell'area. Il campo ha lo stesso modulo e lo stesso angolo con la normale in ogni punto, quindi la calotta riceve metà del flusso, cioè $113\,\mathrm{N\,m^2/C}$ e non $226\,\mathrm{N\,m^2/C}$.
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

:::attenzione
Dentro una sfera isolante carica la formula del campo esterno con la carica totale non si applica. Per $R=0{,}10\,\mathrm{m}$ e $Q=1{,}5\,\mathrm{nC}$, a $r=0{,}040\,\mathrm{m}$ la formula $\dfrac{Q}{4\pi\varepsilon_0r^2}$ darebbe $8{,}43\cdot10^{3}\,\mathrm{N/C}$. La sfera gaussiana di quel raggio racchiude soltanto la frazione $\left(\dfrac{r}{R}\right)^3=0{,}064$ della carica, quindi il campo vale $540\,\mathrm{N/C}$, circa $16$ volte meno.
:::

:::richiamo{titolo="Campo di una distribuzione sfericamente simmetrica"}
**Ipotesi:** la distribuzione di carica è sfericamente simmetrica e $Q_{\mathrm{int}}(r)$ è la carica racchiusa nella sfera di raggio $r$.

**Tesi:** $E_r=\dfrac{Q_{\mathrm{int}}(r)}{4\pi\varepsilon_0r^2}$.
:::

::::teorema{#guscio titolo="Campo di un guscio sferico"}
Un guscio sferico sottile di raggio $R$ porta la carica $Q$ con densità superficiale uniforme $\sigma_q=\dfrac{Q}{4\pi R^2}$. Il campo è nullo all'interno e, all'esterno, coincide con quello di una carica puntiforme $Q$ al centro,
$$
E_r=
\begin{cases}
0 & \text{se } r<R,\\[6pt]
\dfrac{Q}{4\pi\varepsilon_0r^2} & \text{se } r>R.
\end{cases}
$$
Serve per i corpi cavi carichi in superficie e per le sfere conduttrici.

:::dimostrazione
La distribuzione ha simmetria sferica, quindi vale $E_r=\dfrac{Q_{\mathrm{int}}(r)}{4\pi\varepsilon_0r^2}$. La carica si trova tutta sul guscio. Una sfera gaussiana con $r<R$ sta dentro il guscio e non racchiude carica, quindi $Q_{\mathrm{int}}=0$ e $E_r=0$. Una sfera gaussiana con $r>R$ contiene l'intero guscio, quindi $Q_{\mathrm{int}}=Q$ e si ottiene la formula del campo di una carica puntiforme.
:::
::::

:::esempio{titolo="Guscio carico"}
Un guscio di raggio $R=0{,}10\,\mathrm{m}$ porta $Q=+4\,\mathrm{nC}$. La densità superficiale è $\sigma_q=\dfrac{Q}{4\pi R^2}=3{,}18\cdot10^{-8}\,\mathrm{C/m^2}$. Dentro il guscio il campo è nullo. Appena fuori vale $3{,}60\cdot10^{3}\,\mathrm{N/C}$ e a $r=0{,}20\,\mathrm{m}$ vale $899\,\mathrm{N/C}$, un quarto del valore precedente.

::grafico{f="x<1?0:1/(x^2)" xmin=0 xmax=3 ymin=0 ymax=1.25 punti="1,1,pieno;1,0,vuoto;2,0.25,pieno" nomi="r/R,E/Eₛ" legenda="\dfrac{E}{E_s}" titolo="Modulo normalizzato del campo di un guscio, con $E_s$ valore appena fuori. Dentro il guscio $E=0$."}

:::

:::osservazione
Sul guscio il modulo del campo passa da zero a $\dfrac{Q}{4\pi\varepsilon_0R^2}=\dfrac{\sigma_q}{\varepsilon_0}$, che nell'esempio vale $3{,}60\cdot10^{3}\,\mathrm{N/C}$. Il salto è pari al rapporto fra la densità superficiale e $\varepsilon_0$, lo stesso valore del campo appena fuori da un conduttore.
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

:::esempio{titolo="Flusso costante al variare del raggio"}
Un filo con $\lambda_q=2{,}0\,\mathrm{nC/m}$ attraversa due cilindri coassiali lunghi $0{,}50\,\mathrm{m}$, di raggi $0{,}20\,\mathrm{m}$ e $0{,}40\,\mathrm{m}$. Ciascuno racchiude $1{,}0\,\mathrm{nC}$, quindi il flusso è lo stesso,
$$
\Phi_E=\frac{10^{-9}}{8{,}85\cdot10^{-12}}\,\mathrm{N\,m^2/C}\simeq113\,\mathrm{N\,m^2/C}.
$$
Le aree dei mantelli sono $0{,}628\,\mathrm{m^2}$ e $1{,}26\,\mathrm{m^2}$, perciò il campo vale $180\,\mathrm{N/C}$ sul primo e $90\,\mathrm{N/C}$ sul secondo.
:::

:::osservazione
Il campo del filo decresce come $\dfrac{1}{r}$. Quello di una carica puntiforme o di una distribuzione sferica decresce come $\dfrac{1}{r^2}$. Se i due moduli coincidono a $r=r_0$, a $r=2r_0$ il filo dà la metà del valore iniziale e la sfera un quarto.

::grafico{f="1/x;1/(x^2)" xmin=0.2 xmax=3 ymin=0 ymax=3 punti="1,1,pieno;2,0.5,pieno;2,0.25,pieno" nomi="r/r₀,E/E₀" legenda="\dfrac{1}{r};\dfrac{1}{r^2}" titolo="Moduli normalizzati al valore $E_0$ che hanno a $r=r_0$. La curva che decresce più lentamente è quella del filo, $\dfrac{1}{r}$."}

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

:::esempio{titolo="Campo lungo la perpendicolare alle armature"}
Due armature con densità $+8{,}85\cdot10^{-9}\,\mathrm{C/m^2}$ e $-8{,}85\cdot10^{-9}\,\mathrm{C/m^2}$ distano $2\,\mathrm{cm}$. Fra le armature ciascun piano contribuisce con $500\,\mathrm{N/C}$ nello stesso verso, quindi $E_{\mathrm{int}}=\dfrac{\sigma_q}{\varepsilon_0}=1000\,\mathrm{N/C}$. Fuori i due contributi di $500\,\mathrm{N/C}$ hanno versi opposti e il campo è nullo.

::grafico{f="abs(x)<=1?1000:0" xmin=-3 xmax=3 ymin=0 ymax=1500 punti="0,1000,pieno" segmenti="-1,0,-1,1400;1,0,1,1400" etichette="-1.0,1450,+σ;1.0,1450,−σ" nomi="x,E" legenda="E" titolo="Modulo del campo in $\mathrm{N/C}$ lungo l'asse $x$ (in $\mathrm{cm}$) perpendicolare alle armature, poste in $x=-1\,\mathrm{cm}$ ($+\sigma_q$) e in $x=1\,\mathrm{cm}$ ($-\sigma_q$)."}

:::

:::attenzione
Se le due armature hanno la stessa densità $+\sigma_q$, la sovrapposizione dà il risultato opposto: fra i piani i due campi hanno versi opposti e si annullano, fuori hanno lo stesso verso e si sommano. Con $\sigma_q=8{,}85\cdot10^{-9}\,\mathrm{C/m^2}$ il campo fra i piani è nullo e fuori vale $1000\,\mathrm{N/C}$ da entrambi i lati.
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

:::esempio{titolo="Campo appena fuori da un conduttore"}
Un conduttore ha in un punto della superficie la densità $\sigma_q=8{,}85\cdot10^{-9}\,\mathrm{C/m^2}$. Appena fuori il campo è perpendicolare alla superficie e vale $\dfrac{\sigma_q}{\varepsilon_0}=1000\,\mathrm{N/C}$. Un piano isolante indefinito con la stessa densità produce $\dfrac{\sigma_q}{2\varepsilon_0}=500\,\mathrm{N/C}$ su ciascun lato.
:::

:::osservazione
Il valore doppio rispetto al piano isolante si spiega con la sovrapposizione. La carica vicina al punto produce $\dfrac{\sigma_q}{2\varepsilon_0}$ verso l'esterno fuori dal metallo e $\dfrac{\sigma_q}{2\varepsilon_0}$ verso l'interno dentro. Tutte le altre cariche producono $\dfrac{\sigma_q}{2\varepsilon_0}$ verso l'esterno sia dentro sia fuori. Dentro i due contributi si compensano, fuori si sommano.
:::

:::esempio{titolo="Guscio conduttore con una carica nella cavità"}
Un guscio conduttore neutro, con raggio interno $0{,}10\,\mathrm{m}$ e raggio esterno $0{,}15\,\mathrm{m}$, ha al centro della cavità una carica $+3\,\mathrm{nC}$. La parete interna porta $-3\,\mathrm{nC}$ e la superficie esterna $+3\,\mathrm{nC}$. Fuori dal guscio la distribuzione ha simmetria sferica e una sfera gaussiana di raggio $0{,}30\,\mathrm{m}$ racchiude la carica netta $(+3-3+3)\,\mathrm{nC}=+3\,\mathrm{nC}$. Il campo vale
$$
E=\frac{3\cdot10^{-9}}{4\pi\cdot8{,}85\cdot10^{-12}\cdot(0{,}30)^2}\,\mathrm{N/C}\simeq300\,\mathrm{N/C}.
$$
Nel metallo, fra $0{,}10\,\mathrm{m}$ e $0{,}15\,\mathrm{m}$, il campo è nullo.
:::

## Quando il flusso permette di ricavare il campo

:::osservazione{#uso-simmetria titolo="Scelta della superficie gaussiana"}
Il teorema di Gauss vale per tutte le superfici chiuse. Per isolare il campo nell'equazione, la simmetria della distribuzione deve permettere di determinare la componente normale su parti della superficie. Su una sfera concentrica $E_r$ è costante. Su un cilindro attorno al filo è costante sul mantello e nulla sulle basi. Sul cilindro corto che attraversa un piano risulta costante sulle basi e nulla sul mantello.

Se si sposta una carica puntiforme dal centro di una sfera gaussiana a un altro punto interno, la carica racchiusa resta la stessa. Il campo vicino alla carica diventa più intenso e le direzioni non sono tutte radiali rispetto al centro della sfera. Dividere il flusso totale per l'area dà la media della componente normale, mentre per conoscere i valori puntuali occorre il campo di Coulomb.
:::

:::esempio{titolo="Flusso nullo e campo non nullo"}
Due cariche $+2\,\mathrm{nC}$ e $-2\,\mathrm{nC}$ distano $0{,}10\,\mathrm{m}$ e sono entrambe racchiuse da una sfera. La carica netta è nulla, quindi il flusso totale è nullo. Nel punto medio fra le cariche il campo non è nullo. Ciascuna carica dista $0{,}050\,\mathrm{m}$ e i due contributi hanno lo stesso verso, dalla carica positiva verso quella negativa, perciò
$$
E=2\cdot\frac{2\cdot10^{-9}}{4\pi\cdot8{,}85\cdot10^{-12}\cdot(0{,}050)^2}\,\mathrm{N/C}\simeq1{,}4\cdot10^{4}\,\mathrm{N/C}.
$$
Il teorema di Gauss non permette di ricavare questo campo, perché la distribuzione non ha una simmetria che renda costante la componente normale su una superficie.
:::
