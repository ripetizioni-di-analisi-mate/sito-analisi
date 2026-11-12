---
titolo: "Trigonometria e triangoli rettangoli"
sommario: "Triangoli rettangoli, angoli, funzioni goniometriche e proiezioni per calcolare distanze, direzioni e componenti."
---

## Lati di un triangolo rettangolo

:::definizione{titolo="Cateti e ipotenusa"}
Un triangolo è **rettangolo** se ha un angolo retto. I due lati che formano quell'angolo sono i cateti. Il lato opposto è l'ipotenusa. Quando si fissa uno degli angoli acuti, il cateto che si trova di fronte a quell'angolo si chiama *opposto* e l'altro si chiama *adiacente*. L'ipotenusa rimane la stessa se si cambia angolo di riferimento, mentre i due cateti si scambiano il ruolo.

La distinzione compare nei problemi con due distanze perpendicolari. Per esempio, se si raggiunge un punto percorrendo prima quattro centimetri in orizzontale e poi tre in verticale, i due tratti sono i cateti. La distanza diretta dal punto iniziale a quello finale è invece l'ipotenusa.
:::

::::teorema{#pitagora titolo="Teorema di Pitagora"}
In un triangolo rettangolo con cateti di lunghezza $a$ e $b$ e ipotenusa di lunghezza $c$, vale
$$
c^2=a^2+b^2.
$$
Poiché le lunghezze sono positive, dall'identità si ricava $c=\sqrt{a^2+b^2}$. Se sono noti l'ipotenusa e il cateto $a$, l'altro cateto misura $b=\sqrt{c^2-a^2}$.

:::dimostrazione
Si dispone una copia del triangolo in ciascun angolo di un quadrato di lato $a+b$. Lungo ogni lato del quadrato esterno, i due triangoli adiacenti occupano un segmento di lunghezza $a$ e uno di lunghezza $b$. Le quattro ipotenuse delimitano la figura interna e ne sono i lati. Ciascun angolo interno è retto perché insieme ai due angoli acuti del triangolo forma un angolo piatto. La figura interna è quindi un quadrato di lato $c$.

L'area del quadrato esterno è $(a+b)^2$. Sottraendo quattro volte l'area di un triangolo si ottiene
$$
c^2=(a+b)^2-4\cdot\frac{ab}{2}=a^2+b^2.
$$
:::
::::

:::esempio{titolo="Distanza diretta e percorso ad angolo retto"}
Un punto si sposta di $4\,\mathrm{cm}$ verso destra da $A$ a $B$ e poi di $3\,\mathrm{cm}$ verso l'alto da $B$ a $C$. L'angolo in $B$ è retto. La distanza da $A$ a $C$ è
$$
c=\sqrt{4^2+3^2}\,\mathrm{cm}
=\sqrt{25}\,\mathrm{cm}
=5\,\mathrm{cm}.
$$
La lunghezza del percorso lungo i due cateti è $7\,\mathrm{cm}$. In un problema di spostamento, la distanza tra posizione iniziale e finale si calcola con l'ipotenusa, mentre il percorso dipende dai tratti effettivamente compiuti.

::grafico{assi=0 uguale=1 xmin=-0.55 xmax=4.95 ymin=-0.52 ymax=3.55 linee="0,0 4,0 4,3 0,0;3.72,0 3.72,0.28 4,0.28" etichette="-0.15,-0.19,A;4.08,-0.19,B;4.08,3.05,C;1.79,-0.23,4 cm;4.18,1.38,3 cm;1.54,1.67,5 cm" titolo="I due cateti rappresentano gli spostamenti orizzontale e verticale. L’ipotenusa rappresenta la distanza diretta."}
:::

:::osservazione{titolo="Verificare che un triangolo abbia un angolo retto"}
La relazione di Pitagora si può usare anche per riconoscere un triangolo rettangolo. Supponiamo che un triangolo abbia lati $a,b,c$, con $c$ il più lungo, e che valga $c^2=a^2+b^2$. Si costruisce un triangolo rettangolo con cateti di lunghezza $a$ e $b$. Per Pitagora la sua ipotenusa misura $c$. I due triangoli hanno quindi i tre lati corrispondenti uguali e sono congruenti. L'angolo opposto a $c$ è perciò retto anche nel triangolo di partenza.

Per esempio, con lati $8\,\mathrm{cm}$, $15\,\mathrm{cm}$ e $17\,\mathrm{cm}$ si ottiene $8^2+15^2=64+225=289=17^2$. Si può dunque usare il lato da $17\,\mathrm{cm}$ come ipotenusa e applicare i rapporti goniometrici agli angoli acuti.
:::

## Gradi, radianti e lunghezza dell'arco

:::definizione{#radianti titolo="Misura in radianti"}
Un angolo giro misura $360^\circ$. In una circonferenza di raggio $r>0$, un angolo al centro individua un arco. Se l'angolo corrisponde a un arco di lunghezza $s$, la sua misura positiva in radianti è il rapporto $\theta=\dfrac{s}{r}$. Un **radiante** è quindi l'angolo che individua un arco lungo quanto il raggio.

La circonferenza completa ha lunghezza $2\pi r$, perciò l'angolo giro misura $2\pi\,\mathrm{rad}$. Un angolo piatto misura dunque $180^\circ=\pi\,\mathrm{rad}$. Queste due unità esprimono la stessa apertura. Il rapporto tra le misure in radianti e in gradi è quindi costante.
$$
\begin{aligned}
\theta_{\mathrm{rad}}&=\theta_{\mathrm{gradi}}\frac{\pi}{180},\\[6pt]
\theta_{\mathrm{gradi}}&=\theta_{\mathrm{rad}}\frac{180}{\pi}.
\end{aligned}
$$
:::

:::esempio{titolo="Un arco lungo quanto il raggio"}
Un cerchio di raggio $2\,\mathrm{cm}$ ha un arco lungo $2\,\mathrm{cm}$ quando l'angolo al centro è di $1\,\mathrm{rad}$. Un cerchio di raggio doppio, con la stessa apertura, ha anche un arco lungo il doppio. Infatti il rapporto tra arco e raggio conserva il suo valore.

::grafico{assi=0 uguale=1 xmin=-2.35 xmax=2.8 ymin=-2.26 ymax=2.3 curve="2*cos(t),2*sin(t),0,1;2*cos(t),2*sin(t),1,6.283185307179586;0.65*cos(t),0.65*sin(t),0,1" linee="2,0 0,0 1.080604612,1.682941970" etichette="0.73,0.19,1 rad;1.14,-0.22,r = 2 cm;1.72,1.27,Arco di 2 cm" legenda=0 titolo="Il rapporto fra arco e raggio è uno, quindi l’apertura è di un radiante."}
:::

:::esempio{titolo="Da gradi ad arco e da arco a gradi"}
Una ruota di raggio $24\,\mathrm{cm}$ ruota di $150^\circ$. Per calcolare la lunghezza dell'arco descritto da un punto del bordo, si esprime prima l'angolo in radianti.
$$
\begin{aligned}
\theta&=150\cdot\frac{\pi}{180}\,\mathrm{rad}
=\frac{5\pi}{6}\,\mathrm{rad},\\[6pt]
s&=24\,\mathrm{cm}\cdot\frac{5\pi}{6}
=20\pi\,\mathrm{cm}.
\end{aligned}
$$
Si può controllare il risultato osservando che $150^\circ$ sono cinque dodicesimi di un giro. Cinque dodicesimi della lunghezza della circonferenza, pari a $48\pi\,\mathrm{cm}$, danno infatti $20\pi\,\mathrm{cm}$. Nell'operazione inversa si divide l'arco per il raggio e si ottiene la misura in radianti. Per esempio, un arco lungo $7\pi\,\mathrm{m}$ su un cerchio di raggio $9\,\mathrm{m}$ corrisponde a $\dfrac{7\pi}{9}\,\mathrm{rad}$, cioè a $140^\circ$.
:::

:::attenzione{titolo="Unità nella formula della lunghezza dell'arco"}
Nella formula $s=r\theta$ si usa il valore numerico dell'angolo in radianti. Se un angolo misura $90^\circ$ e il raggio è $4\,\mathrm{m}$, l'arco è un quarto della circonferenza. La conversione dà $\theta=\dfrac{\pi}{2}\,\mathrm{rad}$, quindi $s=2\pi\,\mathrm{m}$. Usare il numero $90$ in quella formula darebbe $360\,\mathrm{m}$, più della lunghezza dell'intera circonferenza.

Per un percorso lungo il bordo, la lunghezza si calcola dalla misura dell'apertura percorsa. Per esempio, una rotazione oraria di $90^\circ$ ha misura orientata $-\dfrac{\pi}{2}\,\mathrm{rad}$, ma il tratto percorso sul bordo ha lunghezza positiva $2\pi\,\mathrm{m}$.
:::

## Seno, coseno e tangente nel triangolo

:::definizione{#rapporti titolo="Rapporti goniometrici di un angolo acuto"}
Sia $\theta$ un angolo acuto di un triangolo rettangolo. Indichiamo con $a$ il cateto opposto a $\theta$, con $b$ il cateto adiacente e con $c$ l'ipotenusa. I tre rapporti sono
$$
\begin{aligned}
\sin\theta&=\frac{a}{c},\\[6pt]
\cos\theta&=\frac{b}{c},\\[6pt]
\tan\theta&=\frac{a}{b}.
\end{aligned}
$$
I lati si misurano nella stessa unità, quindi i rapporti sono numeri senza unità. Le lunghezze di due triangoli rettangoli con lo stesso angolo acuto sono proporzionali perché i triangoli sono simili. Pertanto i tre rapporti dipendono dall'angolo, anche se il triangolo viene ingrandito. Dividendo il seno per il coseno si ottiene $\dfrac{\frac{a}{c}}{\frac{b}{c}}=\dfrac{a}{b}$, che è la tangente.
:::

:::esempio{titolo="Triangoli simili e rapporto fra i cateti"}
In un triangolo rettangolo il cateto opposto a $\theta$ misura $1\,\mathrm{m}$ e quello adiacente misura $2\,\mathrm{m}$. In un secondo triangolo i due cateti corrispondenti misurano $2\,\mathrm{m}$ e $4\,\mathrm{m}$. Il secondo ha tutti i lati doppi. Le due tangenti valgono quindi entrambe $\dfrac{1}{2}$. Lo stesso fattore si semplifica nel rapporto per il seno e nel rapporto per il coseno.

::grafico{assi=0 uguale=1 xmin=-0.4 xmax=7.85 ymin=-0.6 ymax=2.55 curve="0.59*cos(t),0.59*sin(t),0,0.463647609;3+0.59*cos(t),0.59*sin(t),0,0.463647609" legenda=0 linee="0,0 2,0 2,1 0,0;1.8,0 1.8,0.2 2,0.2;3,0 7,0 7,2 3,0;6.77,0 6.77,0.23 7,0.23" etichette="0.72,-0.29,2 m;2.12,0.44,1 m;4.64,-0.29,4 m;7.14,0.92,2 m;0.67,0.12,θ;3.69,0.12,θ" titolo="Il secondo triangolo è il doppio del primo. Il rapporto tra cateto opposto e adiacente resta uguale."}
:::

:::esempio{titolo="Dislivello da distanza orizzontale"}
Un punto è osservato con un angolo di elevazione di $30^\circ$. La distanza orizzontale tra l'osservatore e la verticale del punto è $9\,\mathrm{m}$. Il dislivello $h$ è il cateto opposto, mentre i nove metri misurano quello adiacente. Pertanto il rapporto noto è la tangente.
$$
\begin{aligned}
\frac{h}{9\,\mathrm{m}}&=\tan 30^\circ=\frac{1}{\sqrt{3}},\\[6pt]
h&=\frac{9}{\sqrt{3}}\,\mathrm{m}=3\sqrt{3}\,\mathrm{m}.
\end{aligned}
$$
La distanza in linea di vista è l'ipotenusa. Per ricavarla dallo stesso dato si usa il coseno, che mette in rapporto il cateto orizzontale e l'ipotenusa. La scelta della funzione dipende quindi dai due lati che compaiono nel calcolo.
:::

:::osservazione{titolo="Pendenza, angolo e unità"}
Per un tratto rettilineo che sale, la pendenza è il rapporto fra dislivello e distanza orizzontale. Se questi valori sono $3\,\mathrm{m}$ e $12\,\mathrm{m}$, la pendenza è $\dfrac{1}{4}$, cioè $25\%$. Per un angolo $\theta$ misurato rispetto all'orizzontale, quel rapporto è $\tan\theta$. Di conseguenza l'angolo misura $\arctan\left(\dfrac{1}{4}\right)$, circa $14{,}0^\circ$.

Il numero $25$ esprime i metri di salita ogni cento metri orizzontali. La misura in gradi descrive invece l'apertura tra il tratto inclinato e l'orizzontale. Una pendenza del $100\%$ corrisponde a un angolo di $45^\circ$, perché in quel caso il dislivello e la distanza orizzontale sono uguali.
:::

## Valori esatti degli angoli notevoli

:::osservazione{titolo="Triangolo di quarantacinque gradi"}
In un triangolo rettangolo con due cateti uguali, gli angoli acuti sono uguali. La loro somma è $90^\circ$, quindi misurano entrambi $45^\circ$. Se i cateti valgono $1$, l'ipotenusa vale $\sqrt{2}$ per il teorema di Pitagora. Di conseguenza
$$
\sin45^\circ=\cos45^\circ=\frac{1}{\sqrt{2}}
=\frac{\sqrt{2}}{2},
\qquad \tan45^\circ=1.
$$
La scelta di cateti unitari semplifica i conti. In un triangolo di dimensioni diverse i rapporti hanno gli stessi valori perché gli angoli sono gli stessi.
:::

:::osservazione{titolo="Triangolo di trenta e sessanta gradi"}
Un triangolo equilatero di lato $4$ ha tutti gli angoli di $60^\circ$. L'altezza divide la base in due segmenti di lunghezza $2$ e l'angolo al vertice in due angoli di $30^\circ$. Si ottengono così due triangoli rettangoli con ipotenusa $4$. L'altezza vale $\sqrt{4^2-2^2}=2\sqrt{3}$.

Per l'angolo di $30^\circ$, il cateto opposto è la metà della base e l'adiacente è l'altezza. Quindi il seno vale $\dfrac{2}{4}=\dfrac{1}{2}$ e il coseno vale $\dfrac{2\sqrt{3}}{4}=\dfrac{\sqrt{3}}{2}$. Per l'angolo di $60^\circ$ i due cateti si scambiano il ruolo. I valori del seno e del coseno risultano perciò scambiati.

::grafico{assi=0 uguale=1 xmin=-0.55 xmax=4.6 ymin=-0.45 ymax=3.85 linee="0,0 4,0 2,3.464101615 0,0;2,0 2,3.464101615;1.78,0 1.78,0.22 2,0.22" etichette="0.48,0.28,60°;1.65,2.22,30°;0.75,-0.23,2;2.82,-0.23,2;2.23,1.50,2√3;0.55,1.65,4" titolo="L’altezza dimezza l’angolo al vertice e divide la base in due metà uguali."}
:::

:::esempio{titolo="Calcolare una lunghezza mantenendo il radicale"}
Una rampa lunga $8\,\mathrm{m}$ forma $30^\circ$ con l'orizzontale. La proiezione orizzontale vale $8\cos30^\circ\,\mathrm{m}=4\sqrt{3}\,\mathrm{m}$ e il dislivello vale $8\sin30^\circ\,\mathrm{m}=4\,\mathrm{m}$. Il calcolo esatto consente di controllare il risultato con Pitagora. I quadrati delle due misure numeriche sono $48$ e $16$. La loro somma è $64$, quindi l'ipotenusa misura effettivamente otto metri.
:::

:::osservazione{titolo="Seno e coseno di angoli complementari"}
In un triangolo rettangolo, i due angoli acuti sono complementari. Il cateto opposto a un angolo è quindi quello adiacente all'altro. Il rapporto con l'ipotenusa è lo stesso, perciò $\sin\theta=\cos(90^\circ-\theta)$ per un angolo acuto $\theta$. Analogamente, $\cos\theta=\sin(90^\circ-\theta)$.

L'identità aiuta a calcolare una proiezione quando il disegno indica l'angolo rispetto all'altro asse. Per esempio, un segmento di lunghezza $8\,\mathrm{m}$ a $60^\circ$ dall'orizzontale ha proiezione verticale $8\sin60^\circ\,\mathrm{m}=4\sqrt{3}\,\mathrm{m}$. Se si misura invece l'angolo rispetto alla verticale, si ottiene lo stesso valore calcolando $8\cos30^\circ\,\mathrm{m}$.
:::

:::osservazione{titolo="Risultati esatti e valori approssimati"}
Quando un esercizio chiede un'approssimazione, si può calcolare il valore decimale dopo aver ottenuto il radicale. Nell'esempio della rampa, $4\sqrt{3}\,\mathrm{m}$ sono circa $6{,}93\,\mathrm{m}$. Il risultato esatto conserva l'informazione necessaria per controllare la relazione di Pitagora. Se si eleva al quadrato il valore arrotondato, anche il controllo diventa approssimato.
:::

## Circonferenza goniometrica e quadranti

:::definizione{#quadranti titolo="Coordinate sulla circonferenza unitaria"}
Si considera la circonferenza di centro nell'origine $O$ e raggio $1$. Un angolo orientato $\theta$ si misura dal semiasse positivo $x$, in senso antiorario per i valori positivi. Il suo lato finale incontra la circonferenza in un punto $P$. Si definiscono $\cos\theta$ e $\sin\theta$ rispettivamente come ascissa e ordinata di $P$. Per gli angoli acuti, il triangolo formato con l'asse $x$ ha ipotenusa unitaria, quindi la definizione coincide con quella basata sui rapporti fra lati.

Le coordinate assegnano i segni per ogni quadrante. Nel primo sono positive entrambe. Nel secondo l'ascissa è negativa e l'ordinata positiva. Nel terzo sono negative entrambe. Nel quarto l'ascissa è positiva e l'ordinata negativa. Quando il punto appartiene a un asse, una delle coordinate vale zero. Un giro completo riporta il punto nella stessa posizione, quindi seno e coseno si ripetono aggiungendo o sottraendo multipli interi di $360^\circ$.
:::

:::esempio{titolo="Angolo di riferimento nel secondo quadrante"}
L'angolo $150^\circ$ appartiene al secondo quadrante. Il raggio forma con il semiasse negativo $x$ un angolo di $180^\circ-150^\circ=30^\circ$. I moduli delle coordinate sono dunque quelli del punto corrispondente a $30^\circ$ nel primo quadrante. Nel secondo quadrante l'ascissa cambia segno e l'ordinata resta positiva.
$$
\cos150^\circ=-\frac{\sqrt{3}}{2},
\qquad
\sin150^\circ=\frac{1}{2}.
$$

::grafico{uguale=1 xmin=-1.45 xmax=1.45 ymin=-1.35 ymax=1.35 curve="cos(t),sin(t),0,6.283185307179586;0.35*cos(t),0.35*sin(t),0,2.617993877991494" legenda=0 punti="-0.866025403784,0.5,pieno,P" linee="0,0 -0.866025403784,0.5" segmenti="-0.866025403784,0,-0.866025403784,0.5;-0.866025403784,0.5,0,0.5" etichette="0.12,0.39,150°" titolo="Il punto P di 150° ha ascissa negativa e ordinata positiva."}
:::

:::osservazione{titolo="Angoli negativi e angoli coterminali"}
L'angolo $-60^\circ$ si misura in senso orario a partire dal semiasse positivo $x$. Il suo lato finale coincide con quello di $300^\circ$, perché le due misure differiscono di un giro. Quindi $\cos(-60^\circ)=\dfrac{1}{2}$ e $\sin(-60^\circ)=-\dfrac{\sqrt{3}}{2}$. La direzione nel piano può ammettere diverse misure dello stesso angolo orientato. Se il problema chiede un valore in $[0^\circ,360^\circ)$, nell'esempio la risposta è $300^\circ$.
:::

## Identità goniometriche e tangente

::::teorema{#identita titolo="Identità di seno e coseno"}
Per ogni angolo reale $\theta$ si ha
$$
\sin^2\theta+\cos^2\theta=1.
$$
L'identità permette di ottenere il modulo di una funzione goniometrica quando è noto il valore dell'altra. Il quadrante fornisce poi il segno.

:::dimostrazione
Il punto che rappresenta l'angolo sulla circonferenza unitaria ha coordinate $(\cos\theta,\sin\theta)$. Poiché la sua distanza dall'origine è $1$, la somma dei quadrati delle coordinate è il quadrato di quella distanza. Si ottiene così l'identità.
:::
::::

:::esempio{titolo="Seno ricavato da coseno e quadrante"}
Nel terzo quadrante si sa che $\cos\theta=-\dfrac{5}{13}$. Per l'identità di seno e coseno, il quadrato del seno vale
$$
\begin{aligned}
\sin^2\theta
&=1-\frac{25}{169}\\[6pt]
&=\frac{144}{169}.
\end{aligned}
$$
Il seno è negativo nel terzo quadrante, quindi $\sin\theta=-\dfrac{12}{13}$. La tangente è allora $\dfrac{-12}{-5}=\dfrac{12}{5}$. Le due coordinate hanno lo stesso segno, perciò il loro rapporto è positivo.
:::

:::attenzione{titolo="Quando la tangente è definita"}
La tangente di $\theta$ è il rapporto $\dfrac{\sin\theta}{\cos\theta}$ per $\cos\theta\ne0$. A $90^\circ$ e $270^\circ$ il punto appartiene all'asse verticale, quindi il denominatore del rapporto è zero e la tangente non è definita. A $0^\circ$ il punto ha coordinate $(1,0)$, quindi la tangente vale zero. Nei problemi con proiezione orizzontale nulla l'angolo si determina dalla direzione verticale, prima di impostare un rapporto.
:::

:::osservazione{titolo="Periodo della tangente e controllo dei segni"}
Se si aggiunge un angolo piatto, il punto della circonferenza goniometrica si sposta all'estremo opposto del diametro. Entrambe le coordinate cambiano segno. Dunque, ogni volta che il coseno è diverso da zero, il loro rapporto conserva il proprio valore. La tangente si ripete quindi ogni $180^\circ$.

Per esempio, $\tan 45^\circ=1$ e $\tan225^\circ=1$. Per un angolo del secondo quadrante, invece, il numeratore è positivo e il denominatore è negativo. Di conseguenza $\tan135^\circ=-1$. Il controllo dei segni permette di riconoscere un errore anche prima di calcolare i moduli delle coordinate.
:::

## Proiezioni ortogonali e componenti

:::definizione{#proiezioni titolo="Componenti lungo gli assi cartesiani"}
Un segmento orientato di modulo $A>0$ forma un angolo $\theta$ con il semiasse positivo $x$. La sua componente orizzontale è $A_x=A\cos\theta$ e quella verticale è $A_y=A\sin\theta$. Infatti le componenti di un segmento di modulo $1$ coincidono con le coordinate del punto sulla circonferenza unitaria. Moltiplicando la lunghezza per $A$, anche ciascuna componente si moltiplica per $A$.

Le componenti sono grandezze con segno. Per esempio, se il segmento punta a sinistra e verso l'alto, la componente orizzontale è negativa e quella verticale è positiva. Le lunghezze delle due proiezioni sono invece i valori assoluti delle componenti.
:::

:::esempio{titolo="Proiezione con angolo misurato dalla verticale"}
Un segmento di lunghezza $6\,\mathrm{m}$ è nel primo quadrante e forma un angolo di $30^\circ$ con la verticale. L'angolo misurato dal semiasse positivo $x$ è $60^\circ$, perché i due assi sono perpendicolari. La proiezione orizzontale ha lunghezza $6\cos60^\circ\,\mathrm{m}=3\,\mathrm{m}$. La proiezione verticale ha lunghezza $6\sin60^\circ\,\mathrm{m}=3\sqrt{3}\,\mathrm{m}$.

Si ottiene lo stesso risultato usando direttamente l'angolo dalla verticale. In tal caso la proiezione orizzontale è il cateto opposto, mentre quella verticale è il cateto adiacente. La scelta tra seno e coseno dipende quindi dall'asse da cui si misura l'angolo.

::grafico{uguale=1 xmin=-0.65 xmax=4.45 ymin=-0.5 ymax=5.9 nomi="x,y" curve="1.17*cos(t),1.17*sin(t),1.047197551196598,1.570796326794897" legenda=0 vettori="0,0,3,5.196152423" segmenti="3,0,3,5.196152423;0,5.196152423,3,5.196152423" etichette="0.2,1.55,30°;2.12,3.08,6 m;0.72,-0.37,Proiezione orizzontale" titolo="Il segmento è inclinato di 30° rispetto alla verticale e di 60° rispetto all’orizzontale."}
:::

:::esempio{titolo="Componenti entrambe negative"}
Uno spostamento lungo $12\,\mathrm{m}$ forma un angolo di $210^\circ$ misurato in senso antiorario dal semiasse positivo $x$. L'angolo è nel terzo quadrante e il suo angolo di riferimento è $30^\circ$. Quindi il coseno vale $-\dfrac{\sqrt{3}}{2}$ e il seno vale $-\dfrac{1}{2}$. La componente orizzontale è $-6\sqrt{3}\,\mathrm{m}$ e quella verticale è $-6\,\mathrm{m}$.

Lo spostamento porta dunque a sinistra e verso il basso rispetto al punto di partenza. Le lunghezze delle proiezioni valgono $6\sqrt{3}\,\mathrm{m}$ e $6\,\mathrm{m}$. I loro quadrati sono $108\,\mathrm{m^2}$ e $36\,\mathrm{m^2}$. La somma è il quadrato di $12\,\mathrm{m}$ e conferma il modulo dello spostamento. Il calcolo di Pitagora controlla le lunghezze. Il controllo del quadrante stabilisce separatamente i segni delle componenti.
:::

## Ricavare l'angolo da lati o componenti

:::definizione{#inverse titolo="Funzioni goniometriche inverse"}
Le funzioni goniometriche assumono lo stesso valore per più angoli. Per ricavare un angolo a partire da un rapporto, si stabilisce prima l'intervallo in cui cercarlo. In un triangolo rettangolo, l'angolo cercato è acuto. In questo intervallo il seno, il coseno e la tangente determinano ciascuno un unico angolo.

Se il rapporto tra cateto opposto e ipotenusa è $r$, l'angolo acuto è $\arcsin r$. Se è noto il rapporto tra cateto adiacente e ipotenusa, si usa $\arccos r$. Se è dato il rapporto tra i due cateti, si usa $\arctan r$. Per esempio, due cateti uguali hanno rapporto uno, perciò l'angolo acuto è $\arctan 1=45^\circ$. La scrittura $\arctan r$ indica un angolo, mentre $\dfrac{1}{\tan\theta}$ indica il reciproco di un rapporto.
:::

:::esempio{titolo="Direzioni con la stessa tangente"}
Due segmenti orientati hanno componenti $(1,1)$ e $(-1,-1)$. Entrambi hanno rapporto tra ordinata e ascissa uguale a $1$. Nel primo caso le componenti sono positive, quindi il segmento è nel primo quadrante e la direzione è $45^\circ$. Nel secondo caso entrambe sono negative, quindi il segmento è nel terzo quadrante. La direzione è allora $180^\circ+45^\circ=225^\circ$.

La tangente è uguale per i due angoli perché cambiano segno sia il numeratore sia il denominatore. Per risolvere un problema con due componenti si può determinare prima l'angolo acuto a partire dal rapporto dei loro moduli. Poi si ricava la misura orientata in base al quadrante. Se una componente è zero, basta individuare il semiasse su cui si trova il segmento.

::grafico{assi=0 uguale=1 xmin=-1.55 xmax=1.6 ymin=-1.43 ymax=1.55 riferimento="0,0,0,1.42,x,y" vettori="0,0,1,1;0,0,-1,-1" linee="-1.42,0 0,0;0,-1.38 0,0" segmenti="1,0,1,1;-1,0,-1,-1" etichette="0.70,1.22,45°;-1.49,-1.20,225°;-0.17,0.10,O;0.97,-0.14,1;-1.08,0.08,−1" titolo="Segmenti orientati in versi opposti hanno lo stesso rapporto tra componenti e angoli distanti 180°."}
:::

:::esempio{titolo="Misura orientata nel quarto quadrante"}
Un segmento orientato ha componente orizzontale $3\,\mathrm{m}$ e componente verticale $-3\,\mathrm{m}$. Il rapporto tra i moduli è $1$, quindi l'angolo acuto di riferimento è $45^\circ$. I segni collocano il segmento nel quarto quadrante. L'angolo orientato può essere scritto come $-45^\circ$. Per esprimerlo nell'intervallo $[0^\circ,360^\circ)$ si aggiunge un giro e si ottiene $315^\circ$.

Per un segmento sull'asse verticale il rapporto tra componente verticale e orizzontale avrebbe denominatore zero. Se la componente verticale è positiva la direzione è $90^\circ$. Se è negativa la direzione è $270^\circ$. Il segmento di modulo zero ha entrambe le componenti nulle e non individua un angolo.
:::

## Componenti del peso su un piano inclinato

:::osservazione{#piano-inclinato titolo="Assi lungo il piano e perpendicolari al piano"}
Si consideri un piano che sale da sinistra a destra e forma un angolo acuto $\alpha$ con l'orizzontale. Si scelga il semiasse positivo $x'$ lungo la salita e il semiasse positivo $y'$ perpendicolare al piano verso l'esterno. Il peso ha direzione verticale verso il basso e modulo $P=mg$, dove $m$ è la massa e $g$ il modulo dell'accelerazione di gravità.

Il semiasse negativo $y'$ forma con la verticale verso il basso lo stesso angolo $\alpha$ che il piano forma con l'orizzontale. Infatti le due coppie di direzioni sono ottenute l'una dall'altra con una rotazione di novanta gradi, che conserva l'angolo. Nel triangolo delle proiezioni il cateto opposto ad $\alpha$ è parallelo al piano. La sua lunghezza vale $P\sin\alpha$, mentre la lunghezza della proiezione perpendicolare vale $P\cos\alpha$.

Entrambe le componenti sono negative nella convenzione scelta, perché il peso punta verso la discesa e verso il piano.
$$
P_{x'}=-mg\sin\alpha,\qquad
P_{y'}=-mg\cos\alpha.
$$

::grafico{assi=0 uguale=1 xmin=-0.5 xmax=6.4 ymin=-0.3 ymax=3.95 linee="0,0 5.75,0 5.75,3.319764048 0,0" riferimento="3.48,2.009178936,30,1.2,x′,y′" vettori="3.48,2.009178936,3.48,0.309178936;3.48,2.009178936,2.743878407,1.584178936;3.48,2.009178936,4.216121593,0.734178936" segmenti="2.743878407,1.584178936,3.48,0.309178936;4.216121593,0.734178936,3.48,0.309178936" etichette="0.83,0.19,α;3.09,0.25,P;1.87,0.70,P lungo x′;4.36,0.70,P lungo y′" titolo="Le due proiezioni del peso puntano verso la discesa e verso l’interno del piano."}
:::

:::esempio{titolo="Calcolare le due componenti del peso"}
Un corpo di massa $6\,\mathrm{kg}$ si trova su un piano inclinato di $30^\circ$. Per il calcolo si assume $g=10\,\mathrm{m/s^2}$. Il peso ha modulo $60\,\mathrm{N}$. Con $x'$ positivo verso la salita e $y'$ positivo verso l’esterno, si ottengono
$$
\begin{aligned}
P_{x'}&=-60\sin30^\circ\,\mathrm{N}
=-30\,\mathrm{N},\\[6pt]
P_{y'}&=-60\cos30^\circ\,\mathrm{N}
=-30\sqrt{3}\,\mathrm{N}.
\end{aligned}
$$
Le componenti sono perpendicolari, quindi la somma dei loro quadrati deve valere $P^2$. I valori ottenuti danno $900+2700=3600$ in newton al quadrato, in accordo con un peso di $60\,\mathrm{N}$. Quando la pendenza diminuisce, la componente parallela diminuisce perché diminuisce il seno di un angolo acuto. Su un piano orizzontale vale zero e tutto il peso è perpendicolare al piano.
:::
