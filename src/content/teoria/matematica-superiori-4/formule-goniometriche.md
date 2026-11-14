---
titolo: Formule goniometriche
sommario: Le formule di addizione e sottrazione con la dimostrazione, le formule di duplicazione, di bisezione e parametriche, le formule di prostaferesi e di Werner, il metodo dell'angolo aggiunto, la verifica delle identità e il calcolo esatto delle funzioni goniometriche di angoli come $15^\circ$, $75^\circ$ e $22{,}5^\circ$.
---

## Identità goniometriche

:::richiamo{titolo="Funzioni goniometriche sulla circonferenza"}
Sia $\alpha$ un numero reale e sia $P$ il punto della circonferenza goniometrica (centro nell'origine, raggio $1$) che corrisponde all'angolo orientato $\alpha$. Allora
$$
P = (\cos\alpha, \sin\alpha) ,
\qquad
\sin^2\alpha + \cos^2\alpha = 1 ,
\qquad
\tan\alpha = \frac{\sin\alpha}{\cos\alpha} \quad \text{per } \alpha \neq \frac{\pi}{2} + k\pi .
$$
Per gli archi opposti e complementari valgono
$$
\cos(-\alpha) = \cos\alpha ,
\qquad
\sin(-\alpha) = -\sin\alpha ,
\qquad
\cos\left( \frac{\pi}{2} - \alpha \right) = \sin\alpha ,
\qquad
\sin\left( \frac{\pi}{2} - \alpha \right) = \cos\alpha .
$$
:::

:::definizione{#identita-goniometrica titolo="Identità goniometrica"}
Un'**identità goniometrica** è un'uguaglianza tra due espressioni che contengono funzioni goniometriche della stessa variabile, vera per *ogni* valore della variabile per cui entrambi i membri sono definiti. Per esempio
$$
\tan x \cos x = \sin x
$$
è un'identità, perché per $x \neq \dfrac{\pi}{2} + k\pi$ si ha $\tan x \cos x = \dfrac{\sin x}{\cos x} \cdot \cos x = \sin x$. L'uguaglianza $\sin x = \dfrac{1}{2}$, invece, è vera solo per alcuni valori di $x$, come $x = \dfrac{\pi}{6}$, ed è un'equazione.

Un'identità permette di sostituire un'espressione con un'altra equivalente, di solito più semplice. Tutte le formule di questo argomento sono identità, e ciascuna è accompagnata dall'insieme dei valori per cui vale.
:::

:::osservazione{#uso-formule titolo="A che cosa servono le formule goniometriche"}
I valori esatti di seno, coseno e tangente sono noti per gli angoli notevoli $0$, $\dfrac{\pi}{6}$, $\dfrac{\pi}{4}$, $\dfrac{\pi}{3}$, $\dfrac{\pi}{2}$ e per i loro archi associati. Le formule goniometriche esprimono le funzioni di un angolo somma, differenza, doppio o metà con le funzioni degli angoli di partenza. Per esempio $\dfrac{\pi}{12} = \dfrac{\pi}{3} - \dfrac{\pi}{4}$, quindi il seno di $\dfrac{\pi}{12}$, cioè di $15^\circ$, si calcola con i valori noti per $\dfrac{\pi}{3}$ e $\dfrac{\pi}{4}$.

Le stesse formule servono a semplificare le espressioni e a trasformare un'equazione o una disequazione in una forma risolubile; si rimanda agli argomenti sulle equazioni e sulle disequazioni goniometriche.
:::

:::attenzione
Il seno di una somma di angoli è diverso dalla somma dei seni. Per $\alpha = \beta = \dfrac{\pi}{6}$ si ha
$$
\sin(\alpha + \beta) = \sin\frac{\pi}{3} = \frac{\sqrt{3}}{2} ,
\qquad
\sin\alpha + \sin\beta = \frac{1}{2} + \frac{1}{2} = 1 ,
$$
e i due numeri sono diversi. Il seno di una somma si calcola con la formula di addizione del seno.
:::

## Coseno della differenza e della somma

:::richiamo{titolo="Distanza tra due punti"}
Dati due punti $A(x_A, y_A)$ e $B(x_B, y_B)$ del piano cartesiano, la loro distanza è
$$
\overline{AB} = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} .
$$
:::

::::teorema{#coseno-differenza titolo="Coseno della differenza"}
Per ogni coppia di numeri reali $\alpha$ e $\beta$ vale
$$
\cos(\alpha - \beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta .
$$
Da questa formula si ricavano tutte le altre formule dell'argomento. Per esempio, poiché $\dfrac{\pi}{12} = \dfrac{\pi}{3} - \dfrac{\pi}{4}$,
$$
\cos\frac{\pi}{12} = \cos\frac{\pi}{3}\cos\frac{\pi}{4} + \sin\frac{\pi}{3}\sin\frac{\pi}{4} = \frac{1}{2} \cdot \frac{\sqrt{2}}{2} + \frac{\sqrt{3}}{2} \cdot \frac{\sqrt{2}}{2} = \frac{\sqrt{2} + \sqrt{6}}{4} .
$$

:::dimostrazione
L'idea è calcolare in due modi la lunghezza della stessa corda della circonferenza goniometrica. Siano $P(\cos\alpha, \sin\alpha)$ e $Q(\cos\beta, \sin\beta)$ i punti che corrispondono agli angoli $\alpha$ e $\beta$; l'angolo $Q\widehat{O}P$ misura $\alpha - \beta$. Per la formula della distanza
$$
\begin{aligned}
\overline{PQ}^2 &= (\cos\alpha - \cos\beta)^2 + (\sin\alpha - \sin\beta)^2 \\[6pt]
&= \cos^2\alpha - 2\cos\alpha\cos\beta + \cos^2\beta + \sin^2\alpha - 2\sin\alpha\sin\beta + \sin^2\beta \\[6pt]
&= 2 - 2\,(\cos\alpha\cos\beta + \sin\alpha\sin\beta) ,
\end{aligned}
$$
dove nell'ultimo passaggio si è usata due volte la relazione fondamentale, $\cos^2\alpha + \sin^2\alpha = 1$ e $\cos^2\beta + \sin^2\beta = 1$.

::grafico{curve="cos(t),sin(t),0,6.29" vettori="0,0,-0.5,0.866,P;0,0,0.866,0.5,Q" linee="-0.5,0.866 0.866,0.5" xmin=-1.5 xmax=1.5 ymin=-1.3 ymax=1.3 uguale=1 legenda=0 titolo="I punti $P(\cos\alpha, \sin\alpha)$ e $Q(\cos\beta, \sin\beta)$, qui con $\alpha = \dfrac{2\pi}{3}$ e $\beta = \dfrac{\pi}{6}$; l'angolo al centro $Q\widehat{O}P$ misura $\alpha - \beta$"}

Si ruota ora la figura attorno all'origine di un angolo $-\beta$. Una rotazione conserva le distanze; il punto $Q$ va nel punto $A(1, 0)$ e il punto $P$ va nel punto $P'$ che corrisponde all'angolo $\alpha - \beta$, cioè $P'\big( \cos(\alpha - \beta), \sin(\alpha - \beta) \big)$. Perciò $\overline{PQ} = \overline{P'A}$, e
$$
\begin{aligned}
\overline{P'A}^2 &= \big( \cos(\alpha - \beta) - 1 \big)^2 + \sin^2(\alpha - \beta) \\[6pt]
&= \cos^2(\alpha - \beta) - 2\cos(\alpha - \beta) + 1 + \sin^2(\alpha - \beta) \\[6pt]
&= 2 - 2\cos(\alpha - \beta) .
\end{aligned}
$$

::grafico{curve="cos(t),sin(t),0,6.29" vettori="0,0,0,1,P′;0,0,1,0,A" linee="0,1 1,0" xmin=-1.5 xmax=1.5 ymin=-1.3 ymax=1.3 uguale=1 legenda=0 titolo="Dopo la rotazione di $-\beta$ la corda diventa $P'A$, con $P'\big( \cos(\alpha - \beta), \sin(\alpha - \beta) \big)$ e $A(1, 0)$; la sua lunghezza è uguale a quella di $PQ$"}

Uguagliando le due espressioni si ottiene $2 - 2\cos(\alpha - \beta) = 2 - 2\,(\cos\alpha\cos\beta + \sin\alpha\sin\beta)$. Togliendo $2$ da entrambi i membri e dividendo per $-2$ si ricava la tesi.
:::
::::

::::teorema{#coseno-somma titolo="Coseno della somma"}
Per ogni coppia di numeri reali $\alpha$ e $\beta$ vale
$$
\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta .
$$
Rispetto alla formula della differenza cambia solo il segno davanti al prodotto dei seni. Per esempio, poiché $\dfrac{5\pi}{12} = \dfrac{\pi}{4} + \dfrac{\pi}{6}$,
$$
\cos\frac{5\pi}{12} = \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} - \frac{\sqrt{2}}{2} \cdot \frac{1}{2} = \frac{\sqrt{6} - \sqrt{2}}{4} .
$$

:::dimostrazione
Si scrive la somma come differenza, $\alpha + \beta = \alpha - (-\beta)$, e si applica la formula del coseno della differenza con $-\beta$ al posto di $\beta$:
$$
\cos(\alpha + \beta) = \cos\alpha\cos(-\beta) + \sin\alpha\sin(-\beta) .
$$
Poiché $\cos(-\beta) = \cos\beta$ e $\sin(-\beta) = -\sin\beta$, il secondo membro è uguale a $\cos\alpha\cos\beta - \sin\alpha\sin\beta$.
:::
::::

:::esempio{titolo="Coseno della somma con angoli assegnati dal quadrante"}
Siano $\cos\alpha = \dfrac{3}{5}$ con $0 < \alpha < \dfrac{\pi}{2}$ e $\sin\beta = \dfrac{5}{13}$ con $\dfrac{\pi}{2} < \beta < \pi$. Per applicare le formule servono anche $\sin\alpha$ e $\cos\beta$, che si ricavano dalla relazione fondamentale. L'angolo $\alpha$ è nel primo quadrante, quindi il suo seno è positivo; l'angolo $\beta$ è nel secondo quadrante, quindi il suo coseno è negativo:
$$
\sin\alpha = \sqrt{1 - \frac{9}{25}} = \frac{4}{5} ,
\qquad
\cos\beta = -\sqrt{1 - \frac{25}{169}} = -\frac{12}{13} .
$$
Allora
$$
\cos(\alpha + \beta) = \frac{3}{5} \cdot \left( -\frac{12}{13} \right) - \frac{4}{5} \cdot \frac{5}{13} = -\frac{56}{65} ,
\qquad
\cos(\alpha - \beta) = -\frac{36}{65} + \frac{20}{65} = -\frac{16}{65} .
$$
:::

:::attenzione
Il coseno di una differenza è diverso dalla differenza dei coseni. Per $\alpha = \beta = \dfrac{\pi}{3}$ si ha $\cos(\alpha - \beta) = \cos 0 = 1$, mentre $\cos\alpha - \cos\beta = 0$.
:::

## Seno e tangente della somma e della differenza

::::teorema{#seno-somma-differenza titolo="Seno della somma e della differenza"}
Per ogni coppia di numeri reali $\alpha$ e $\beta$ valgono
$$
\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta ,
\qquad
\sin(\alpha - \beta) = \sin\alpha\cos\beta - \cos\alpha\sin\beta .
$$
Nel seno compaiono i prodotti misti, un seno per un coseno, e il segno in mezzo è lo stesso dell'operazione tra gli angoli. Per esempio
$$
\sin\frac{\pi}{12} = \sin\left( \frac{\pi}{3} - \frac{\pi}{4} \right) = \frac{\sqrt{3}}{2} \cdot \frac{\sqrt{2}}{2} - \frac{1}{2} \cdot \frac{\sqrt{2}}{2} = \frac{\sqrt{6} - \sqrt{2}}{4} .
$$
Il risultato coincide con $\cos\dfrac{5\pi}{12}$, come deve accadere, perché $\dfrac{\pi}{12}$ e $\dfrac{5\pi}{12}$ sono angoli complementari.

:::dimostrazione
L'idea è trasformare il seno in un coseno con gli archi complementari. Poiché $\sin t = \cos\left( \dfrac{\pi}{2} - t \right)$ per ogni $t$,
$$
\begin{aligned}
\sin(\alpha + \beta) &= \cos\left( \left( \frac{\pi}{2} - \alpha \right) - \beta \right) \\[6pt]
&= \cos\left( \frac{\pi}{2} - \alpha \right)\cos\beta + \sin\left( \frac{\pi}{2} - \alpha \right)\sin\beta \\[6pt]
&= \sin\alpha\cos\beta + \cos\alpha\sin\beta ,
\end{aligned}
$$
dove il secondo passaggio è la formula del coseno della differenza. La formula di $\sin(\alpha - \beta)$ si ottiene sostituendo $-\beta$ al posto di $\beta$, perché $\cos(-\beta) = \cos\beta$ e $\sin(-\beta) = -\sin\beta$.
:::
::::

:::esempio{titolo="Seno della somma e quadrante del risultato"}
Con gli angoli dell'esempio sul coseno della somma, cioè $\sin\alpha = \dfrac{4}{5}$, $\cos\alpha = \dfrac{3}{5}$, $\sin\beta = \dfrac{5}{13}$ e $\cos\beta = -\dfrac{12}{13}$, si ottiene
$$
\sin(\alpha + \beta) = \frac{4}{5} \cdot \left( -\frac{12}{13} \right) + \frac{3}{5} \cdot \frac{5}{13} = -\frac{48}{65} + \frac{15}{65} = -\frac{33}{65} .
$$
Il seno e il coseno di $\alpha + \beta$ sono entrambi negativi, quindi l'angolo $\alpha + \beta$ è nel terzo quadrante. Questo è coerente con i dati, perché da $0 < \alpha < \dfrac{\pi}{2}$ e $\dfrac{\pi}{2} < \beta < \pi$ segue $\dfrac{\pi}{2} < \alpha + \beta < \dfrac{3\pi}{2}$.
:::

::::teorema{#tangente-somma-differenza titolo="Tangente della somma e della differenza"}
Siano $\alpha$, $\beta$ e $\alpha + \beta$ diversi da $\dfrac{\pi}{2} + k\pi$. Allora
$$
\tan(\alpha + \beta) = \frac{\tan\alpha + \tan\beta}{1 - \tan\alpha\tan\beta} .
$$
Se invece $\alpha$, $\beta$ e $\alpha - \beta$ sono diversi da $\dfrac{\pi}{2} + k\pi$, allora
$$
\tan(\alpha - \beta) = \frac{\tan\alpha - \tan\beta}{1 + \tan\alpha\tan\beta} .
$$
Le condizioni garantiscono che esistano le tre tangenti che compaiono nella formula. Per esempio
$$
\tan\frac{\pi}{12} = \tan\left( \frac{\pi}{3} - \frac{\pi}{4} \right) = \frac{\sqrt{3} - 1}{1 + \sqrt{3}} = \frac{\left( \sqrt{3} - 1 \right)^2}{3 - 1} = \frac{4 - 2\sqrt{3}}{2} = 2 - \sqrt{3} ,
$$
dove si è razionalizzato moltiplicando numeratore e denominatore per $\sqrt{3} - 1$.

:::dimostrazione
Si scrive la tangente come rapporto tra seno e coseno e si usano le formule di addizione:
$$
\tan(\alpha + \beta) = \frac{\sin\alpha\cos\beta + \cos\alpha\sin\beta}{\cos\alpha\cos\beta - \sin\alpha\sin\beta} .
$$
Per ipotesi $\cos\alpha \neq 0$ e $\cos\beta \neq 0$, quindi si possono dividere numeratore e denominatore per $\cos\alpha\cos\beta$. Il numeratore diventa $\dfrac{\sin\alpha}{\cos\alpha} + \dfrac{\sin\beta}{\cos\beta} = \tan\alpha + \tan\beta$, e il denominatore diventa $1 - \dfrac{\sin\alpha}{\cos\alpha} \cdot \dfrac{\sin\beta}{\cos\beta} = 1 - \tan\alpha\tan\beta$. La formula della differenza si ottiene sostituendo $-\beta$ al posto di $\beta$, perché $\tan(-\beta) = -\tan\beta$.
:::
::::

:::esempio{titolo="Angolo tra due rette"}
Una retta di coefficiente angolare $m$ forma con l'asse $x$ un angolo $\theta$ tale che $\tan\theta = m$. Le rette $y = 3x$ e $y = \dfrac{x}{2}$ formano con l'asse $x$ due angoli $\theta_1$ e $\theta_2$ con $\tan\theta_1 = 3$ e $\tan\theta_2 = \dfrac{1}{2}$. L'angolo tra le due rette è la differenza $\theta_1 - \theta_2$, e per la formula della tangente della differenza
$$
\tan(\theta_1 - \theta_2) = \frac{3 - \dfrac{1}{2}}{1 + 3 \cdot \dfrac{1}{2}} = \frac{\dfrac{5}{2}}{\dfrac{5}{2}} = 1 .
$$
Poiché $\theta_1 - \theta_2$ è compreso tra $0$ e $\dfrac{\pi}{2}$, l'angolo tra le due rette è $\dfrac{\pi}{4}$.

::grafico{f="3*x;x/2" xmin=-1 xmax=3 ymin=-1 ymax=4 uguale=1 titolo="Le rette $y = 3x$ e $y = \dfrac{x}{2}$ formano un angolo di $\dfrac{\pi}{4}$, perché la tangente della differenza delle loro inclinazioni vale $1$"}

:::

:::osservazione
Se $\tan\alpha\tan\beta = 1$, il denominatore della formula della tangente della somma è nullo. In questo caso $\alpha + \beta = \dfrac{\pi}{2} + k\pi$, e la tangente di $\alpha + \beta$ non esiste. Per esempio, con $\tan\alpha = 2$ e $\tan\beta = \dfrac{1}{2}$ e i due angoli acuti, si ha $\cos(\alpha + \beta) = \cos\alpha\cos\beta\,(1 - \tan\alpha\tan\beta) = 0$, quindi $\alpha + \beta = \dfrac{\pi}{2}$.
:::

## Formule di duplicazione

::::teorema{#duplicazione titolo="Formule di duplicazione"}
Per ogni numero reale $\alpha$ valgono
$$
\sin 2\alpha = 2\sin\alpha\cos\alpha ,
\qquad
\cos 2\alpha = \cos^2\alpha - \sin^2\alpha = 1 - 2\sin^2\alpha = 2\cos^2\alpha - 1 .
$$
Se inoltre $\alpha \neq \dfrac{\pi}{2} + k\pi$ e $\alpha \neq \dfrac{\pi}{4} + k\dfrac{\pi}{2}$, vale
$$
\tan 2\alpha = \frac{2\tan\alpha}{1 - \tan^2\alpha} .
$$
Le tre forme del coseno permettono di scegliere quella che contiene il solo dato disponibile: se è noto $\sin\alpha$ si usa $1 - 2\sin^2\alpha$, se è noto $\cos\alpha$ si usa $2\cos^2\alpha - 1$. Per esempio, con $\cos\alpha = \dfrac{1}{3}$, si ottiene $\cos 2\alpha = 2 \cdot \dfrac{1}{9} - 1 = -\dfrac{7}{9}$ senza calcolare $\sin\alpha$.

:::dimostrazione
Si pone $\beta = \alpha$ nelle formule di addizione:
$$
\sin 2\alpha = \sin\alpha\cos\alpha + \cos\alpha\sin\alpha = 2\sin\alpha\cos\alpha ,
\qquad
\cos 2\alpha = \cos\alpha\cos\alpha - \sin\alpha\sin\alpha = \cos^2\alpha - \sin^2\alpha .
$$
Sostituendo $\cos^2\alpha = 1 - \sin^2\alpha$ si ottiene $\cos 2\alpha = 1 - 2\sin^2\alpha$; sostituendo invece $\sin^2\alpha = 1 - \cos^2\alpha$ si ottiene $\cos 2\alpha = 2\cos^2\alpha - 1$. La formula della tangente è la tangente della somma con $\beta = \alpha$; le condizioni garantiscono che esistano $\tan\alpha$ e $\tan 2\alpha$, cioè $\alpha \neq \dfrac{\pi}{2} + k\pi$ e $2\alpha \neq \dfrac{\pi}{2} + k\pi$.
:::
::::

:::esempio{titolo="Funzioni dell'angolo doppio di un angolo del secondo quadrante"}
Sia $\sin\alpha = \dfrac{3}{5}$ con $\dfrac{\pi}{2} < \alpha < \pi$. Nel secondo quadrante il coseno è negativo, quindi $\cos\alpha = -\sqrt{1 - \dfrac{9}{25}} = -\dfrac{4}{5}$. Per le formule di duplicazione
$$
\sin 2\alpha = 2 \cdot \frac{3}{5} \cdot \left( -\frac{4}{5} \right) = -\frac{24}{25} ,
\qquad
\cos 2\alpha = 1 - 2 \cdot \frac{9}{25} = \frac{7}{25} ,
\qquad
\tan 2\alpha = \frac{\sin 2\alpha}{\cos 2\alpha} = -\frac{24}{7} .
$$
Dalla condizione $\dfrac{\pi}{2} < \alpha < \pi$ segue $\pi < 2\alpha < 2\pi$; il seno negativo e il coseno positivo indicano che $2\alpha$ è nel quarto quadrante.
:::

:::attenzione
Il seno dell'angolo doppio è diverso dal doppio del seno. Per $x = \dfrac{\pi}{2}$ si ha $\sin 2x = \sin\pi = 0$, mentre $2\sin x = 2$. I grafici delle due funzioni sono diversi; infatti $\sin 2x$ ha periodo $\pi$ e valori tra $-1$ e $1$, $2\sin x$ ha periodo $2\pi$ e valori tra $-2$ e $2$.

::grafico{f="sin(2*x);2*sin(x)" xmin=-1 xmax=7 ymin=-2.5 ymax=2.5 titolo="I grafici di $\sin 2x$ e di $2\sin x$: la prima funzione ha periodo $\pi$ e ampiezza $1$, la seconda ha periodo $2\pi$ e ampiezza $2$"}

:::

::::teorema{#formule-abbassamento titolo="Formule di abbassamento di grado"}
Per ogni numero reale $\alpha$ valgono
$$
\sin^2\alpha = \frac{1 - \cos 2\alpha}{2} ,
\qquad
\cos^2\alpha = \frac{1 + \cos 2\alpha}{2} .
$$
Le formule trasformano un quadrato di seno o di coseno in un'espressione di primo grado nel coseno dell'angolo doppio. Per esempio
$$
\sin^2\frac{\pi}{8} = \frac{1 - \cos\dfrac{\pi}{4}}{2} = \frac{1 - \dfrac{\sqrt{2}}{2}}{2} = \frac{2 - \sqrt{2}}{4} .
$$
La prima formula mostra anche che il grafico di $\sin^2 x$ è una cosinusoide di periodo $\pi$ che oscilla tra $0$ e $1$ attorno al valore $\dfrac{1}{2}$.

::grafico{f="sin(x)^2;1/2" xmin=-1 xmax=7 ymin=-0.5 ymax=1.5 legenda="y = \sin^2 x;y = \dfrac{1}{2}" titolo="Il grafico di $\sin^2 x = \dfrac{1 - \cos 2x}{2}$ ha periodo $\pi$ e oscilla tra $0$ e $1$ attorno alla retta $y = \dfrac{1}{2}$"}

:::dimostrazione
Dalla forma $\cos 2\alpha = 1 - 2\sin^2\alpha$ si ricava $2\sin^2\alpha = 1 - \cos 2\alpha$, e dividendo per $2$ si ottiene la prima formula. Dalla forma $\cos 2\alpha = 2\cos^2\alpha - 1$ si ricava allo stesso modo la seconda.
:::
::::

:::esempio{titolo="Seno dell'angolo triplo"}
Le formule di addizione e di duplicazione insieme danno le funzioni dell'angolo triplo. Si scrive $3\alpha = 2\alpha + \alpha$:
$$
\begin{aligned}
\sin 3\alpha &= \sin 2\alpha\cos\alpha + \cos 2\alpha\sin\alpha \\[6pt]
&= 2\sin\alpha\cos^2\alpha + \left( 1 - 2\sin^2\alpha \right)\sin\alpha \\[6pt]
&= 2\sin\alpha\left( 1 - \sin^2\alpha \right) + \sin\alpha - 2\sin^3\alpha \\[6pt]
&= 3\sin\alpha - 4\sin^3\alpha .
\end{aligned}
$$
Per $\alpha = \dfrac{\pi}{6}$ la formula dà $3 \cdot \dfrac{1}{2} - 4 \cdot \dfrac{1}{8} = 1$, che è il valore di $\sin\dfrac{\pi}{2}$. Con lo stesso procedimento si ottiene $\cos 3\alpha = 4\cos^3\alpha - 3\cos\alpha$.
:::

## Formule di bisezione

::::teorema{#bisezione titolo="Formule di bisezione"}
Per ogni numero reale $\alpha$ valgono
$$
\sin\frac{\alpha}{2} = \pm\sqrt{\frac{1 - \cos\alpha}{2}} ,
\qquad
\cos\frac{\alpha}{2} = \pm\sqrt{\frac{1 + \cos\alpha}{2}} ,
$$
dove ciascun segno è quello che la funzione ha nel quadrante in cui si trova l'angolo $\dfrac{\alpha}{2}$. Le formule permettono di calcolare le funzioni dell'angolo metà conoscendo il solo coseno dell'angolo intero. Per esempio, con $\alpha = \dfrac{\pi}{4}$, l'angolo metà $\dfrac{\pi}{8}$ è nel primo quadrante e
$$
\cos\frac{\pi}{8} = \sqrt{\frac{1 + \dfrac{\sqrt{2}}{2}}{2}} = \sqrt{\frac{2 + \sqrt{2}}{4}} = \frac{\sqrt{2 + \sqrt{2}}}{2} .
$$

:::dimostrazione
Si applicano le formule di abbassamento di grado all'angolo $\dfrac{\alpha}{2}$, il cui doppio è $\alpha$:
$$
\sin^2\frac{\alpha}{2} = \frac{1 - \cos\alpha}{2} ,
\qquad
\cos^2\frac{\alpha}{2} = \frac{1 + \cos\alpha}{2} .
$$
I secondi membri sono maggiori o uguali a $0$, perché $-1 \leq \cos\alpha \leq 1$. Estraendo la radice quadrata si ottengono i valori assoluti, $\left| \sin\dfrac{\alpha}{2} \right| = \sqrt{\dfrac{1 - \cos\alpha}{2}}$ e $\left| \cos\dfrac{\alpha}{2} \right| = \sqrt{\dfrac{1 + \cos\alpha}{2}}$. Il segno di $\sin\dfrac{\alpha}{2}$ e quello di $\cos\dfrac{\alpha}{2}$ dipendono quindi dal quadrante dell'angolo $\dfrac{\alpha}{2}$.
:::
::::

:::osservazione{#segno-bisezione titolo="Scelta del segno nelle formule di bisezione"}
Il segno si decide dal quadrante dell'angolo metà, che in generale è diverso da quello dell'angolo intero. Per $\alpha = \dfrac{4\pi}{3}$, nel terzo quadrante, si ha $\cos\alpha = -\dfrac{1}{2}$ e l'angolo metà è $\dfrac{2\pi}{3}$, nel secondo quadrante. Nel secondo quadrante il seno è positivo e il coseno è negativo, perciò
$$
\sin\frac{2\pi}{3} = +\sqrt{\frac{1 + \dfrac{1}{2}}{2}} = \frac{\sqrt{3}}{2} ,
\qquad
\cos\frac{2\pi}{3} = -\sqrt{\frac{1 - \dfrac{1}{2}}{2}} = -\frac{1}{2} ,
$$
in accordo con i valori noti.

::grafico{curve="cos(t),sin(t),0,6.29;0.25*cos(t),0.25*sin(t),0,4.19;0.45*cos(t),0.45*sin(t),0,2.09" vettori="0,0,-0.5,-0.866,α;0,0,-0.5,0.866,α/2" segmenti="-0.5,-0.866,-0.5,0.866" xmin=-1.5 xmax=1.5 ymin=-1.3 ymax=1.3 uguale=1 legenda=0 titolo="L'angolo $\alpha = \dfrac{4\pi}{3}$ è nel terzo quadrante, il suo angolo metà $\dfrac{2\pi}{3}$ è nel secondo, perciò le due formule si usano con il segno $+$ per il seno e $-$ per il coseno"}

Quando è dato solo un intervallo per $\alpha$, si divide l'intervallo per $2$: da $\dfrac{3\pi}{2} < \alpha < 2\pi$ segue $\dfrac{3\pi}{4} < \dfrac{\alpha}{2} < \pi$, quindi l'angolo metà è nel secondo quadrante.
:::

:::esempio{titolo="Angolo metà di un angolo del quarto quadrante"}
Sia $\cos\alpha = \dfrac{1}{9}$ con $\dfrac{3\pi}{2} < \alpha < 2\pi$. L'angolo metà soddisfa $\dfrac{3\pi}{4} < \dfrac{\alpha}{2} < \pi$, quindi è nel secondo quadrante, dove il seno è positivo e il coseno è negativo. Per le formule di bisezione
$$
\sin\frac{\alpha}{2} = \sqrt{\frac{1 - \dfrac{1}{9}}{2}} = \sqrt{\frac{4}{9}} = \frac{2}{3} ,
\qquad
\cos\frac{\alpha}{2} = -\sqrt{\frac{1 + \dfrac{1}{9}}{2}} = -\sqrt{\frac{5}{9}} = -\frac{\sqrt{5}}{3} .
$$
:::

::::teorema{#tangente-bisezione titolo="Tangente dell'angolo metà"}
Per $\alpha \neq \pi + 2k\pi$ vale
$$
\tan\frac{\alpha}{2} = \frac{\sin\alpha}{1 + \cos\alpha} ,
$$
e per $\alpha \neq k\pi$ vale anche
$$
\tan\frac{\alpha}{2} = \frac{1 - \cos\alpha}{\sin\alpha} .
$$
Queste due formule non contengono radici, quindi danno anche il segno corretto senza esaminare il quadrante; richiedono però di conoscere sia $\sin\alpha$ sia $\cos\alpha$. Per esempio
$$
\tan\frac{\pi}{8} = \frac{1 - \cos\dfrac{\pi}{4}}{\sin\dfrac{\pi}{4}} = \frac{1 - \dfrac{\sqrt{2}}{2}}{\dfrac{\sqrt{2}}{2}} = \frac{2 - \sqrt{2}}{\sqrt{2}} = \sqrt{2} - 1 .
$$

:::dimostrazione
L'idea è moltiplicare numeratore e denominatore di $\dfrac{\sin\frac{\alpha}{2}}{\cos\frac{\alpha}{2}}$ per un fattore che produca le formule di duplicazione. Per $\alpha \neq \pi + 2k\pi$ si ha $\cos\dfrac{\alpha}{2} \neq 0$, e moltiplicando per $2\cos\dfrac{\alpha}{2}$ si ottiene
$$
\tan\frac{\alpha}{2} = \frac{2\sin\dfrac{\alpha}{2}\cos\dfrac{\alpha}{2}}{2\cos^2\dfrac{\alpha}{2}} = \frac{\sin\alpha}{1 + \cos\alpha} ,
$$
perché il numeratore è $\sin\alpha$ per la duplicazione del seno e il denominatore è $1 + \cos\alpha$ per la seconda formula di abbassamento. Per $\alpha \neq k\pi$ si ha anche $\sin\dfrac{\alpha}{2} \neq 0$; moltiplicando invece per $2\sin\dfrac{\alpha}{2}$, il numeratore diventa $2\sin^2\dfrac{\alpha}{2} = 1 - \cos\alpha$ e il denominatore diventa $\sin\alpha$.
:::
::::

## Formule parametriche

::::teorema{#parametriche titolo="Formule parametriche"}
Sia $x \neq \pi + 2k\pi$ e sia $t = \tan\dfrac{x}{2}$. Allora
$$
\sin x = \frac{2t}{1 + t^2} ,
\qquad
\cos x = \frac{1 - t^2}{1 + t^2} .
$$
Se inoltre $x \neq \dfrac{\pi}{2} + k\pi$, vale $\tan x = \dfrac{2t}{1 - t^2}$. Le formule esprimono seno e coseno con una sola incognita $t$, senza radici; per questo motivo ogni espressione razionale in $\sin x$ e $\cos x$ diventa un'espressione razionale in $t$. Per esempio, con $t = 2$, si ottiene
$$
\sin x = \frac{4}{5} ,
\qquad
\cos x = \frac{1 - 4}{5} = -\frac{3}{5} .
$$

:::dimostrazione
Per la duplicazione del seno e per la relazione fondamentale si può scrivere
$$
\sin x = \frac{2\sin\dfrac{x}{2}\cos\dfrac{x}{2}}{1} = \frac{2\sin\dfrac{x}{2}\cos\dfrac{x}{2}}{\sin^2\dfrac{x}{2} + \cos^2\dfrac{x}{2}} .
$$
Per ipotesi $x \neq \pi + 2k\pi$, quindi $\dfrac{x}{2} \neq \dfrac{\pi}{2} + k\pi$ e $\cos\dfrac{x}{2} \neq 0$. Dividendo numeratore e denominatore per $\cos^2\dfrac{x}{2}$ si ottiene $\sin x = \dfrac{2t}{t^2 + 1}$. Allo stesso modo $\cos x = \dfrac{\cos^2\dfrac{x}{2} - \sin^2\dfrac{x}{2}}{\cos^2\dfrac{x}{2} + \sin^2\dfrac{x}{2}}$, e la stessa divisione dà $\cos x = \dfrac{1 - t^2}{1 + t^2}$. Il quoziente delle due formule è la formula di $\tan x$.
:::
::::

:::osservazione{#significato-parametriche titolo="Significato geometrico del parametro"}
Sia $P(\cos x, \sin x)$ un punto della circonferenza goniometrica diverso da $A(-1, 0)$. La retta $AP$ ha coefficiente angolare
$$
\frac{\sin x - 0}{\cos x - (-1)} = \frac{\sin x}{1 + \cos x} = \tan\frac{x}{2} = t ,
$$
per la formula della tangente dell'angolo metà. Perciò $t$ è l'ordinata del punto $T$ in cui la retta $AP$ taglia l'asse $y$, e l'angolo $O\widehat{A}P$ misura $\dfrac{x}{2}$, cioè la metà dell'angolo al centro. Al variare di $t$ in $\mathbb{R}$ il punto $P$ descrive tutta la circonferenza tranne il punto $A$, che corrisponde agli angoli $x = \pi + 2k\pi$ esclusi dalle formule.

::grafico{curve="cos(t),sin(t),0,6.29" linee="-1,0 1,1" vettori="0,0,0.6,0.8,P" punti="-1,0,pieno,A;0,0.5,pieno,T" xmin=-1.5 xmax=1.5 ymin=-1.3 ymax=1.3 uguale=1 legenda=0 titolo="Con $t = \dfrac{1}{2}$ la retta per $A(-1, 0)$ di coefficiente angolare $t$ taglia la circonferenza in $P\left( \dfrac{3}{5}, \dfrac{4}{5} \right)$ e l'asse $y$ in $T\left( 0, \dfrac{1}{2} \right)$"}

:::

:::esempio{titolo="Un'espressione trasformata in un'espressione razionale"}
Si scrive $E = 2\sin x + \cos x - 1$ in funzione di $t = \tan\dfrac{x}{2}$, per $x \neq \pi + 2k\pi$:
$$
E = \frac{4t}{1 + t^2} + \frac{1 - t^2}{1 + t^2} - \frac{1 + t^2}{1 + t^2} = \frac{4t - 2t^2}{1 + t^2} = \frac{2t\,(2 - t)}{1 + t^2} .
$$
Il denominatore $1 + t^2$ è sempre positivo, quindi $E = 0$ per $t = 0$ oppure $t = 2$. Il valore escluso $x = \pi$ va esaminato a parte, e si trova $E = 2 \cdot 0 + (-1) - 1 = -2$, diverso da $0$.
:::

:::attenzione
Il controllo dei valori $x = \pi + 2k\pi$ è necessario, perché per questi valori la sostituzione non è definita. Nell'equazione $\sin x + \cos x + 1 = 0$ la sostituzione dà
$$
\frac{2t + 1 - t^2 + 1 + t^2}{1 + t^2} = \frac{2t + 2}{1 + t^2} = 0 ,
$$
cioè $t = -1$ e $x = -\dfrac{\pi}{2} + 2k\pi$. Anche $x = \pi$ soddisfa l'equazione, perché $\sin\pi + \cos\pi + 1 = 0 - 1 + 1 = 0$, e questa soluzione con la sola sostituzione andrebbe persa. Si rimanda all'argomento sulle equazioni goniometriche.
:::

## Formule di Werner e di prostaferesi

::::teorema{#werner titolo="Formule di Werner"}
Per ogni coppia di numeri reali $\alpha$ e $\beta$ valgono
$$
\begin{aligned}
\sin\alpha\cos\beta &= \frac{1}{2}\big( \sin(\alpha + \beta) + \sin(\alpha - \beta) \big) , \\[6pt]
\cos\alpha\cos\beta &= \frac{1}{2}\big( \cos(\alpha + \beta) + \cos(\alpha - \beta) \big) , \\[6pt]
\sin\alpha\sin\beta &= \frac{1}{2}\big( \cos(\alpha - \beta) - \cos(\alpha + \beta) \big) .
\end{aligned}
$$
Le formule di Werner trasformano un prodotto di funzioni goniometriche in una somma. Per esempio
$$
\cos\frac{5\pi}{12}\cos\frac{\pi}{12} = \frac{1}{2}\left( \cos\frac{\pi}{2} + \cos\frac{\pi}{3} \right) = \frac{1}{2}\left( 0 + \frac{1}{2} \right) = \frac{1}{4} .
$$

:::dimostrazione
Si sommano membro a membro le formule del seno della somma e della differenza:
$$
\sin(\alpha + \beta) + \sin(\alpha - \beta) = 2\sin\alpha\cos\beta ,
$$
perché i termini $\cos\alpha\sin\beta$ hanno segni opposti e si annullano. Dividendo per $2$ si ottiene la prima formula. Sommando le formule del coseno della somma e della differenza si annullano i termini $\sin\alpha\sin\beta$ e si ottiene $\cos(\alpha + \beta) + \cos(\alpha - \beta) = 2\cos\alpha\cos\beta$. Sottraendo invece la formula del coseno della somma da quella della differenza si annullano i termini $\cos\alpha\cos\beta$ e si ottiene $\cos(\alpha - \beta) - \cos(\alpha + \beta) = 2\sin\alpha\sin\beta$.
:::
::::

::::teorema{#prostaferesi titolo="Formule di prostaferesi"}
Per ogni coppia di numeri reali $p$ e $q$ valgono
$$
\begin{aligned}
\sin p + \sin q &= 2\sin\frac{p + q}{2}\cos\frac{p - q}{2} , \\[6pt]
\sin p - \sin q &= 2\cos\frac{p + q}{2}\sin\frac{p - q}{2} , \\[6pt]
\cos p + \cos q &= 2\cos\frac{p + q}{2}\cos\frac{p - q}{2} , \\[6pt]
\cos p - \cos q &= -2\sin\frac{p + q}{2}\sin\frac{p - q}{2} .
\end{aligned}
$$
Le formule di prostaferesi trasformano una somma o una differenza in un prodotto; in ogni formula compaiono la semisomma $\dfrac{p + q}{2}$ e la semidifferenza $\dfrac{p - q}{2}$ degli angoli. Per esempio
$$
\sin\frac{5\pi}{12} + \sin\frac{\pi}{12} = 2\sin\frac{\pi}{4}\cos\frac{\pi}{6} = 2 \cdot \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} = \frac{\sqrt{6}}{2} .
$$
Un prodotto è nullo quando è nullo uno dei fattori, perciò la forma di prodotto serve a risolvere le equazioni, come si vede nell'argomento sulle equazioni goniometriche.

:::dimostrazione
Si pongono $\alpha = \dfrac{p + q}{2}$ e $\beta = \dfrac{p - q}{2}$, così che $\alpha + \beta = p$ e $\alpha - \beta = q$. La prima formula di Werner, moltiplicata per $2$, diventa
$$
2\sin\frac{p + q}{2}\cos\frac{p - q}{2} = \sin p + \sin q ,
$$
che è la prima formula di prostaferesi. Con la stessa sostituzione la seconda formula di Werner dà la terza di prostaferesi, e la terza formula di Werner dà $2\sin\dfrac{p + q}{2}\sin\dfrac{p - q}{2} = \cos q - \cos p$, cioè la quarta. La seconda formula si ottiene dalla prima scritta con $-q$ al posto di $q$, perché $\sin(-q) = -\sin q$.
:::
::::

:::esempio{titolo="Una somma di due sinusoidi scritta come prodotto"}
Per l'espressione $\sin 3x + \sin x$ la semisomma degli angoli è $2x$ e la semidifferenza è $x$, quindi
$$
\sin 3x + \sin x = 2\sin 2x\cos x .
$$
Il fattore $2\cos x$ varia tra $-2$ e $2$, e il grafico della somma resta compreso tra le curve $y = 2\cos x$ e $y = -2\cos x$, che tocca nei punti in cui $\sin 2x = \pm 1$. L'espressione si annulla dove $\sin 2x = 0$ oppure $\cos x = 0$, cioè per $x = k\dfrac{\pi}{2}$.

::grafico{f="sin(3*x)+sin(x);2*cos(x);-2*cos(x)" xmin=-4 xmax=4 ymin=-2.5 ymax=2.5 legenda="y = \sin 3x + \sin x;y = 2\cos x;y = -2\cos x" titolo="Il grafico di $\sin 3x + \sin x = 2\sin 2x\cos x$ resta compreso tra le curve $y = 2\cos x$ e $y = -2\cos x$ e si annulla nei multipli di $\dfrac{\pi}{2}$"}

:::

:::attenzione
Nella quarta formula di prostaferesi il segno meno è necessario. Per $p = 0$ e $q = \pi$ si ha $\cos 0 - \cos\pi = 1 - (-1) = 2$, e la formula dà $-2\sin\dfrac{\pi}{2}\sin\left( -\dfrac{\pi}{2} \right) = -2 \cdot 1 \cdot (-1) = 2$. Senza il segno meno si otterrebbe $-2$.
:::

## Angolo aggiunto

:::definizione{#angolo-aggiunto titolo="Angolo aggiunto"}
Siano $a$ e $b$ due numeri reali non entrambi nulli e sia $r = \sqrt{a^2 + b^2}$. Si chiama **angolo aggiunto** dell'espressione $a\sin x + b\cos x$ un angolo $\varphi$ tale che
$$
\begin{cases}
\cos\varphi = \dfrac{a}{r} \\[8pt]
\sin\varphi = \dfrac{b}{r}
\end{cases}
$$
Le due condizioni sono compatibili, perché $\left( \dfrac{a}{r} \right)^2 + \left( \dfrac{b}{r} \right)^2 = \dfrac{a^2 + b^2}{r^2} = 1$. In altre parole, $r$ è la distanza del punto $(a, b)$ dall'origine e $\varphi$ è l'angolo che il segmento dall'origine a $(a, b)$ forma con il verso positivo dell'asse $x$. Per $a = \sqrt{3}$ e $b = 1$ si ha $r = 2$, $\cos\varphi = \dfrac{\sqrt{3}}{2}$ e $\sin\varphi = \dfrac{1}{2}$, quindi $\varphi = \dfrac{\pi}{6}$.

::grafico{curve="2*cos(t),2*sin(t),0,6.29;0.6*cos(t),0.6*sin(t),0,0.524" vettori="0,0,1.732,1,(a, b)" segmenti="1.732,0,1.732,1" etichette="0.8,0.18,φ" xmin=-2.5 xmax=2.5 ymin=-2.3 ymax=2.3 uguale=1 legenda=0 titolo="Il punto $(a, b) = \left( \sqrt{3}, 1 \right)$ ha distanza $r = 2$ dall'origine; l'angolo aggiunto $\varphi = \dfrac{\pi}{6}$ è l'angolo del segmento che lo congiunge all'origine"}

Se $a > 0$, l'angolo $\varphi = \arctan\dfrac{b}{a}$ soddisfa le due condizioni; se $a < 0$ le soddisfa $\varphi = \arctan\dfrac{b}{a} + \pi$.
:::

::::teorema{#formula-angolo-aggiunto titolo="Formula dell'angolo aggiunto"}
Siano $a$ e $b$ non entrambi nulli, $r = \sqrt{a^2 + b^2}$ e $\varphi$ l'angolo aggiunto. Per ogni $x$ reale vale
$$
a\sin x + b\cos x = r\sin(x + \varphi) .
$$
Perciò l'espressione $a\sin x + b\cos x$ è una sinusoide di ampiezza $r$ e periodo $2\pi$; i suoi valori riempiono l'intervallo $[-r, r]$, il massimo $r$ si ha per $x + \varphi = \dfrac{\pi}{2} + 2k\pi$ e il minimo $-r$ per $x + \varphi = \dfrac{3\pi}{2} + 2k\pi$. Per esempio $3\sin x + 4\cos x = 5\sin(x + \varphi)$ con $\varphi = \arctan\dfrac{4}{3}$, quindi l'espressione assume tutti e soli i valori tra $-5$ e $5$.

:::dimostrazione
Si sviluppa il secondo membro con la formula del seno della somma e si usano le due condizioni che definiscono $\varphi$:
$$
r\sin(x + \varphi) = r\sin x\cos\varphi + r\cos x\sin\varphi = r \cdot \frac{a}{r}\sin x + r \cdot \frac{b}{r}\cos x = a\sin x + b\cos x .
$$
:::
::::

:::esempio{titolo="Massimo e minimo di una combinazione di seno e coseno"}
Per $f(x) = \sqrt{3}\sin x + \cos x$ si ha $r = 2$ e $\varphi = \dfrac{\pi}{6}$, quindi
$$
f(x) = 2\sin\left( x + \frac{\pi}{6} \right) .
$$
Il massimo $2$ si ha per $x + \dfrac{\pi}{6} = \dfrac{\pi}{2} + 2k\pi$, cioè per $x = \dfrac{\pi}{3} + 2k\pi$; il minimo $-2$ si ha per $x + \dfrac{\pi}{6} = \dfrac{3\pi}{2} + 2k\pi$, cioè per $x = \dfrac{4\pi}{3} + 2k\pi$. Il grafico di $f$ è il grafico di $2\sin x$ traslato verso sinistra di $\dfrac{\pi}{6}$.

::grafico{f="sqrt(3)*sin(x)+cos(x);2*sin(x)" punti="1.047,2,pieno;4.189,-2,pieno" xmin=-1 xmax=7 ymin=-2.5 ymax=2.5 legenda="y = \sqrt{3}\sin x + \cos x;y = 2\sin x" titolo="Il grafico di $\sqrt{3}\sin x + \cos x = 2\sin\left( x + \dfrac{\pi}{6} \right)$ è quello di $2\sin x$ traslato di $\dfrac{\pi}{6}$ verso sinistra; il massimo $2$ è in $x = \dfrac{\pi}{3}$ e il minimo $-2$ in $x = \dfrac{4\pi}{3}$"}

:::

:::esempio{titolo="Angolo aggiunto in un altro quadrante"}
Per $\sin x - \cos x$ si ha $a = 1$ e $b = -1$, quindi $r = \sqrt{2}$, $\cos\varphi = \dfrac{\sqrt{2}}{2}$ e $\sin\varphi = -\dfrac{\sqrt{2}}{2}$. Il punto $(1, -1)$ è nel quarto quadrante e $\varphi = -\dfrac{\pi}{4}$, perciò
$$
\sin x - \cos x = \sqrt{2}\sin\left( x - \frac{\pi}{4} \right) .
$$
Per $-\sin x + \sqrt{3}\cos x$ si ha $a = -1$ e $b = \sqrt{3}$, quindi $r = 2$, $\cos\varphi = -\dfrac{1}{2}$ e $\sin\varphi = \dfrac{\sqrt{3}}{2}$; il punto $\left( -1, \sqrt{3} \right)$ è nel secondo quadrante e $\varphi = \dfrac{2\pi}{3}$. Quindi $-\sin x + \sqrt{3}\cos x = 2\sin\left( x + \dfrac{2\pi}{3} \right)$.
:::

:::osservazione{#angolo-aggiunto-fisica titolo="Sovrapposizione di due moti armonici"}
In fisica la formula dell'angolo aggiunto descrive la somma di due oscillazioni con la stessa pulsazione $\omega$. Se un punto si muove con legge $s(t) = 3\sin(\omega t) + 4\cos(\omega t)$, allora $s(t) = 5\sin(\omega t + \varphi)$ con $\varphi = \arctan\dfrac{4}{3}$. Il moto è quindi ancora armonico, con ampiezza $5$, la stessa pulsazione e fase iniziale $\varphi$. Per il grafico di $y = A\sin(\omega x + \varphi)$ si rimanda all'argomento sugli angoli e le funzioni goniometriche.
:::

## Identità e angoli non notevoli

:::osservazione{#verifica-identita titolo="Verifica di un'identità"}
Per verificare un'identità si determinano prima i valori della variabile per cui entrambi i membri sono definiti. Poi si trasforma un membro, di solito il più complicato, fino a ottenere l'altro, oppure si trasformano entrambi fino alla stessa espressione. Per esempio, nell'uguaglianza
$$
\frac{\sin 2x}{1 + \cos 2x} = \tan x
$$
il primo membro esiste per $\cos 2x \neq -1$, cioè per $x \neq \dfrac{\pi}{2} + k\pi$, e il secondo membro esiste per gli stessi valori. Per le formule di duplicazione
$$
\frac{\sin 2x}{1 + \cos 2x} = \frac{2\sin x\cos x}{1 + 2\cos^2 x - 1} = \frac{2\sin x\cos x}{2\cos^2 x} = \frac{\sin x}{\cos x} = \tan x ,
$$
dove la semplificazione per $\cos x$ è lecita perché $\cos x \neq 0$. L'identità vale quindi per ogni $x \neq \dfrac{\pi}{2} + k\pi$.
:::

:::esempio{titolo="Due identità con le formule di duplicazione"}
Per ogni $x$ reale vale $\cos^4 x - \sin^4 x = \cos 2x$. Infatti il primo membro è una differenza di quadrati, e
$$
\cos^4 x - \sin^4 x = \left( \cos^2 x - \sin^2 x \right)\left( \cos^2 x + \sin^2 x \right) = \cos 2x \cdot 1 = \cos 2x .
$$
Per ogni $x$ reale vale anche $\sin 4x = 4\sin x\cos x\cos 2x$. Si applica due volte la duplicazione del seno, prima all'angolo $2x$ e poi all'angolo $x$:
$$
\sin 4x = 2\sin 2x\cos 2x = 2 \cdot 2\sin x\cos x \cdot \cos 2x = 4\sin x\cos x\cos 2x .
$$
:::

:::teorema{#valori-non-notevoli titolo="Funzioni goniometriche di 15°, 75°, 22,5° e 67,5°"}
Valgono i valori della tabella.

| angolo | $\sin$ | $\cos$ | $\tan$ |
| --- | --- | --- | --- |
| $15^\circ = \dfrac{\pi}{12}$ | $\dfrac{\sqrt{6} - \sqrt{2}}{4}$ | $\dfrac{\sqrt{6} + \sqrt{2}}{4}$ | $2 - \sqrt{3}$ |
| $75^\circ = \dfrac{5\pi}{12}$ | $\dfrac{\sqrt{6} + \sqrt{2}}{4}$ | $\dfrac{\sqrt{6} - \sqrt{2}}{4}$ | $2 + \sqrt{3}$ |
| $22{,}5^\circ = \dfrac{\pi}{8}$ | $\dfrac{\sqrt{2 - \sqrt{2}}}{2}$ | $\dfrac{\sqrt{2 + \sqrt{2}}}{2}$ | $\sqrt{2} - 1$ |
| $67{,}5^\circ = \dfrac{3\pi}{8}$ | $\dfrac{\sqrt{2 + \sqrt{2}}}{2}$ | $\dfrac{\sqrt{2 - \sqrt{2}}}{2}$ | $\sqrt{2} + 1$ |

I valori di $15^\circ$ seguono dalle formule di sottrazione con $15^\circ = 45^\circ - 30^\circ$, e quelli di $22{,}5^\circ$ dalle formule di bisezione con $\alpha = 45^\circ$. Gli angoli $75^\circ$ e $67{,}5^\circ$ sono complementari di $15^\circ$ e di $22{,}5^\circ$, quindi seno e coseno si scambiano e la tangente diventa la reciproca; per esempio $\dfrac{1}{2 - \sqrt{3}} = \dfrac{2 + \sqrt{3}}{4 - 3} = 2 + \sqrt{3}$. Con gli archi associati si ottengono poi altri angoli: $\cos 105^\circ = \cos(180^\circ - 75^\circ) = -\dfrac{\sqrt{6} - \sqrt{2}}{4}$.
:::

:::esempio{titolo="Costruzione geometrica della tangente di 15°"}
Si considera il triangolo $ABC$ rettangolo in $C$ con $B\widehat{A}C = 60^\circ$ e $A\widehat{B}C = 30^\circ$, e con $\overline{AC} = 1$. Allora $\overline{AB} = 2$ e $\overline{BC} = \sqrt{3}$. Si prolunga il cateto $CB$ oltre $B$ fino al punto $D$ con $\overline{BD} = \overline{AB} = 2$. Il triangolo $ABD$ è isoscele sulla base $AD$, e l'angolo esterno $A\widehat{B}C = 30^\circ$ è la somma dei due angoli alla base, che sono uguali. Perciò $A\widehat{D}C = 15^\circ$, e nel triangolo rettangolo $ACD$
$$
\tan 15^\circ = \frac{\overline{AC}}{\overline{CD}} = \frac{1}{2 + \sqrt{3}} = \frac{2 - \sqrt{3}}{4 - 3} = 2 - \sqrt{3} ,
$$
in accordo con il valore ottenuto con la formula della tangente della differenza.

::grafico{assi=0 uguale=1 linee="-3.732,0 0,0 0,1 -3.732,0;-1.732,0 0,1" punti="0,0,pieno;0,1,pieno;-1.732,0,pieno;-3.732,0,pieno" etichette="0.15,-0.2,C;0.15,1.15,A;-1.732,-0.25,B;-3.85,-0.25,D;-0.9,-0.25,√3;-2.7,-0.25,2;0.2,0.5,1;-3.1,0.12,15°;-1.35,0.12,30°" xmin=-4.2 xmax=0.6 ymin=-0.5 ymax=1.4 titolo="Il triangolo $ABD$ è isoscele con $\overline{BA} = \overline{BD} = 2$; l'angolo in $D$ misura $15^\circ$ e $\tan 15^\circ = \dfrac{1}{2 + \sqrt{3}} = 2 - \sqrt{3}$"}

:::

:::esempio{titolo="Espressioni con angoli non notevoli"}
Molte espressioni con angoli non notevoli si riconducono a un angolo notevole con le formule, senza usare la tabella. Per la duplicazione del seno e del coseno
$$
\sin 15^\circ\cos 15^\circ = \frac{1}{2}\sin 30^\circ = \frac{1}{4} ,
\qquad
\cos^2 15^\circ - \sin^2 15^\circ = \cos 30^\circ = \frac{\sqrt{3}}{2} .
$$
Per la seconda formula di prostaferesi, con semisomma $45^\circ$ e semidifferenza $30^\circ$,
$$
\sin 75^\circ - \sin 15^\circ = 2\cos 45^\circ\sin 30^\circ = 2 \cdot \frac{\sqrt{2}}{2} \cdot \frac{1}{2} = \frac{\sqrt{2}}{2} .
$$
Per la formula di abbassamento, infine, $\cos^2 22{,}5^\circ = \dfrac{1 + \cos 45^\circ}{2} = \dfrac{2 + \sqrt{2}}{4}$.
:::
