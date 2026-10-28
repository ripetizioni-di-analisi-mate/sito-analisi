---
titolo: Campi vettoriali e teorema di Green
sommario: Campi vettoriali nel piano e nello spazio, lavoro lungo una curva, campi conservativi e potenziale, campi irrotazionali e domini semplicemente connessi, teorema di Green e calcolo di aree.
---

## Campi vettoriali

:::definizione{#campo-vettoriale titolo="Campo vettoriale"}
Un **campo vettoriale** su un aperto $A \subseteq \mathbb{R}^2$ è una funzione $F : A \to \mathbb{R}^2$ che a ogni punto associa un vettore,
$$
F(x, y) = \bigl( F_1(x, y),\; F_2(x, y) \bigr),
$$
dove $F_1$ e $F_2$, le **componenti** del campo, sono funzioni scalari su $A$. Nello spazio un campo vettoriale su $A \subseteq \mathbb{R}^3$ ha tre componenti, $F = (F_1, F_2, F_3)$. Il campo si dice di classe $C^k$ se le sue componenti sono di classe $C^k$. Un campo vettoriale è il modello matematico di una forza che dipende dal punto, come il campo gravitazionale o un campo elettrico; il disegno tipico mostra in ogni punto del piano una freccia con la direzione e la lunghezza del vettore associato.
:::

:::esempio
$F(x, y) = (-y, x)$ è un campo vettoriale di classe $C^{\infty}$ su $\mathbb{R}^2$. In ogni punto il vettore $(-y, x)$ è perpendicolare al vettore posizione $(x, y)$, poiché il prodotto scalare $(-y) \cdot x + x \cdot y$ è nullo, quindi le frecce **ruotano attorno all'origine** in verso antiorario. Un esempio nello spazio è il campo $F(x, y, z) = (yz, xz, xy)$, di classe $C^{\infty}$ su $\mathbb{R}^3$.

::grafico{xmin=-3.2 xmax=3.2 ymin=-3 ymax=3 uguale=1 vettori="0.8,0,0.8,0.32;1.48,0.61,1.23,1.2;2.4,0,2.4,0.96;0.57,0.57,0.34,0.79;0.61,1.48,0.02,1.72;1.7,1.7,1.02,2.38;0,0.8,-0.32,0.8;-0.61,1.48,-1.2,1.23;0,2.4,-0.96,2.4;-0.57,0.57,-0.79,0.34;-1.48,0.61,-1.72,0.02;-1.7,1.7,-2.38,1.02;-0.8,0,-0.8,-0.32;-1.48,-0.61,-1.23,-1.2;-2.4,0,-2.4,-0.96;-0.57,-0.57,-0.34,-0.79;-0.61,-1.48,-0.02,-1.72;-1.7,-1.7,-1.02,-2.38;0,-0.8,0.32,-0.8;0.61,-1.48,1.2,-1.23;0,-2.4,0.96,-2.4;0.57,-0.57,0.79,-0.34;1.48,-0.61,1.72,-0.02;1.7,-1.7,2.38,-1.02" titolo="Il campo $F(x, y) = (-y, x)$ in alcuni punti di tre circonferenze centrate nell'origine: le frecce ruotano in verso antiorario e si allungano allontanandosi dall'origine"}

:::

:::osservazione
Ogni funzione scalare $f$ di classe $C^1$ su un aperto $A$ genera un campo vettoriale, il suo **gradiente** $\nabla f = (f_x, f_y)$. La domanda centrale di questo capitolo è quella *inversa*: dato un campo $F$, stabilire se esiste una funzione scalare di cui $F$ è il gradiente. Per il gradiente si rimanda al capitolo sul calcolo differenziale.
:::

## Lavoro e circuitazione

:::richiamo{titolo="Integrale di linea di seconda specie"}
Sia $F$ un campo vettoriale continuo su un aperto $A$ e sia $\gamma$ una curva regolare a tratti con sostegno in $A$, di parametrizzazione $r : [a, b] \to A$. L'integrale di linea di $F$ lungo $\gamma$ è
$$
\int_{\gamma} F \cdot dr = \int_{a}^{b} F(r(t)) \cdot r'(t) \, dt ,
$$
dove il punto indica il prodotto scalare. L'integrale **cambia segno** se si inverte il verso di percorrenza e *non* dipende dalla parametrizzazione scelta, purché il verso sia lo stesso. La definizione e le proprietà sono nel capitolo sulle curve e gli integrali di linea.
:::

:::definizione{#lavoro-e-circuitazione titolo="Lavoro e circuitazione"}
L'integrale di linea di seconda specie di un campo $F$ lungo una curva orientata $\gamma$ si chiama **lavoro** di $F$ lungo $\gamma$. Nel piano si scrive anche nella forma
$$
\int_{\gamma} F_1 \, dx + F_2 \, dy ,
$$
che nel calcolo diventa $\displaystyle\int_a^b \bigl( F_1(r(t))\, x'(t) + F_2(r(t))\, y'(t) \bigr) dt$. Se la curva è chiusa, cioè $r(a) = r(b)$, il lavoro si chiama **circuitazione** di $F$ lungo $\gamma$ e si indica con
$$
\oint_{\gamma} F \cdot dr .
$$
Il nome viene dalla fisica: se $F$ è una forza, l'integrale misura il lavoro compiuto dalla forza su un punto materiale che percorre la curva. La circuitazione è lo strumento con cui si riconoscono i campi **non conservativi**, come mostra il teorema di caratterizzazione.
:::

:::esempio{titolo="Calcolo di un lavoro"}
Lavoro di $F(x, y) = (y, x^2)$ lungo il segmento da $(0, 0)$ a $(1, 1)$, parametrizzato da $r(t) = (t, t)$ con $t \in [0, 1]$. Poiché $r'(t) = (1, 1)$ e $F(r(t)) = (t, t^2)$, il lavoro è
$$
\int_0^1 (t \cdot 1 + t^2 \cdot 1) \, dt = \frac{1}{2} + \frac{1}{3} = \frac{5}{6} .
$$
:::

## Campi conservativi e potenziale

:::definizione{#campo-conservativo titolo="Campo conservativo e potenziale"}
Un campo vettoriale $F$ continuo su un aperto connesso $A$ si dice **conservativo** in $A$ se *esiste* una funzione $U : A \to \mathbb{R}$ di classe $C^1$ tale che
$$
\nabla U(x) = F(x) \qquad \text{per ogni } x \in A .
$$
La funzione $U$ si chiama **potenziale** di $F$ in $A$. Nel piano la condizione significa $U_x = F_1$ e $U_y = F_2$; nello spazio si aggiunge $U_z = F_3$. La proprietà **dipende dall'insieme** $A$: lo stesso campo può essere conservativo su un aperto e non esserlo su un aperto più grande, come mostra il controesempio del campo di rotazione.
:::

:::esempio
$F(x, y) = (2x, 2y)$ è **conservativo** su $\mathbb{R}^2$ con potenziale $U(x, y) = x^2 + y^2$, poiché $U_x = 2x = F_1$ e $U_y = 2y = F_2$. Anche $U(x, y) = x^2 + y^2 + 7$ è un potenziale dello stesso campo, perciò il potenziale **non è unico**.
:::

::::teorema{#lavoro-campo-conservativo titolo="Lavoro di un campo conservativo"}
Sia $F$ conservativo su un aperto connesso $A$ con potenziale $U$ e sia $\gamma$ una curva regolare a tratti con sostegno in $A$, dal punto $P$ al punto $Q$. Allora
$$
\int_{\gamma} F \cdot dr = U(Q) - U(P) .
$$
Il lavoro dipende **solo dagli estremi** della curva e non dal cammino che li congiunge; in particolare la circuitazione lungo *ogni* curva chiusa è nulla. Questo teorema è l'analogo in più variabili del teorema fondamentale del calcolo integrale e negli esercizi sostituisce il calcolo diretto dell'integrale di linea: trovato un potenziale, il lavoro è una differenza di due valori.

::grafico{xmin=-0.5 xmax=5 ymin=-0.6 ymax=3.6 uguale=1 curve="0.5+3.5*t,0.5+2*t,0,1;0.5+3.5*t,0.5+2*t+1.5*sin(pi*t),0,1;0.5+3.5*t,0.5+2*t-1.2*sin(pi*t),0,1" vettori="1.97,1.34,2.53,1.66;1.97,0.178,2.53,0.498;1.97,2.793,2.53,3.113" punti="0.5,0.5,pieno,P;4,2.5,pieno,Q" etichette="2.9,1.45,γ₁;0.9,2.2,γ₂;3.4,0.75,γ₃" titolo="Tre curve da $P$ a $Q$: per un campo conservativo il lavoro lungo ciascuna vale $U(Q) - U(P)$"}

:::dimostrazione
Sia $r : [a, b] \to A$ una parametrizzazione regolare di $\gamma$ con $r(a) = P$ e $r(b) = Q$, e sia $g(t) = U(r(t))$. Poiché $U$ è di classe $C^1$, per la **regola della catena** $g$ è derivabile e
$$
g'(t) = \nabla U(r(t)) \cdot r'(t) = F(r(t)) \cdot r'(t) .
$$
Per il **teorema fondamentale del calcolo integrale**, quindi,
$$
\int_{\gamma} F \cdot dr = \int_a^b g'(t) \, dt = g(b) - g(a) = U(Q) - U(P) .
$$
Se la curva è regolare a tratti, si applica il ragionamento su ciascun tratto e si sommano i risultati; le somme ai punti di raccordo si semplificano a coppie.
:::
::::

:::richiamo{titolo="Regola della catena"}
Se $U$ è di classe $C^1$ su $A$ e $r : [a, b] \to A$ è derivabile, allora $t \mapsto U(r(t))$ è derivabile e la derivata è $\nabla U(r(t)) \cdot r'(t)$.
:::

:::osservazione
Su un aperto connesso due potenziali dello stesso campo **differiscono per una costante**. Infatti, se $\nabla U = \nabla V = F$, la differenza $W = U - V$ ha gradiente nullo in ogni punto; su un aperto connesso una funzione $C^1$ con gradiente nullo è costante, perciò $U = V + c$. Per questo motivo il potenziale si scrive sempre con una costante additiva arbitraria, come la primitiva di una funzione di una variabile.
:::

## Indipendenza dal cammino

::::teorema{#caratterizzazione-conservativi titolo="Caratterizzazione dei campi conservativi"}
Sia $F$ un campo vettoriale continuo su un aperto connesso $A$. Le tre condizioni seguenti sono equivalenti.

1. $F$ è conservativo in $A$.
2. Il lavoro di $F$ dipende *solo* dagli estremi: per ogni coppia di curve regolari a tratti in $A$ con gli stessi estremi e lo stesso verso, i due lavori coincidono.
3. La circuitazione di $F$ lungo ogni curva chiusa regolare a tratti in $A$ è nulla.

Il teorema fornisce il criterio con cui si dimostra che un campo non è conservativo: trovata *una sola* curva chiusa con circuitazione diversa da zero, la condizione 3 non è soddisfatta, quindi il potenziale **non esiste**. La stessa equivalenza giustifica la costruzione del potenziale come lavoro lungo una spezzata.

:::dimostrazione
La condizione 1 implica la condizione 2 per il teorema sul lavoro di un campo conservativo, poiché il lavoro vale $U(Q) - U(P)$ qualunque sia la curva da $P$ a $Q$.

Le condizioni 2 e 3 sono **equivalenti**. Se il lavoro dipende solo dagli estremi e $\gamma$ è chiusa con punto iniziale e finale $P$, la curva costante in $P$ ha gli stessi estremi e lavoro nullo, quindi la circuitazione lungo $\gamma$ è nulla; in modo più diretto, spezzata $\gamma$ in due archi $\gamma_1$ e $\gamma_2$ da $P$ a $Q$, i lavori lungo $\gamma_1$ e lungo $\gamma_2$ coincidono, perciò il lavoro lungo $\gamma_1$ seguito da $\gamma_2$ invertita, cioè lungo $\gamma$, è nullo. Viceversa, se ogni circuitazione è nulla e $\gamma_1$, $\gamma_2$ sono due curve da $P$ a $Q$, la curva ottenuta percorrendo $\gamma_1$ e poi $\gamma_2$ in verso opposto è chiusa, quindi il suo lavoro è nullo, e i lavori lungo $\gamma_1$ e $\gamma_2$ coincidono.

La condizione 2 implica la condizione 1. Fissato $P_0 \in A$, per ogni $x \in A$ si definisce $U(x)$ come il lavoro di $F$ lungo una qualunque curva regolare a tratti in $A$ da $P_0$ a $x$; una tale curva esiste perché un aperto connesso di $\mathbb{R}^n$ è connesso per spezzate, e il valore non dipende dalla curva per l'ipotesi. Si verifica che $U_x = F_1$ nel punto $(x, y)$: per $h$ piccolo il segmento orizzontale da $(x, y)$ a $(x + h, y)$ è contenuto in $A$, e scegliendo come cammino per $(x + h, y)$ un cammino per $(x, y)$ seguito dal segmento si ottiene
$$
U(x + h, y) - U(x, y) = \int_0^1 F_1(x + th, y)\, h \, dt ,
$$
poiché sul segmento la seconda componente della parametrizzazione $r(t) = (x + th, y)$ è costante. Dividendo per $h$ e passando al limite per $h \to 0$, per la continuità di $F_1$ il rapporto incrementale tende a $F_1(x, y)$. Lo stesso ragionamento con segmenti verticali dà $U_y = F_2$. Le derivate parziali di $U$ coincidono con le componenti di $F$, che sono continue, quindi $U$ è di classe $C^1$ e $\nabla U = F$.
:::
::::

:::richiamo{titolo="Lavoro di un campo conservativo"}
Se $F = \nabla U$ su $A$ e $\gamma$ è una curva regolare a tratti in $A$ da $P$ a $Q$, allora il lavoro di $F$ lungo $\gamma$ è $U(Q) - U(P)$.
:::

## Campi irrotazionali

:::definizione{#campo-irrotazionale titolo="Campo irrotazionale (campo chiuso)"}
Un campo $F = (F_1, F_2)$ di classe $C^1$ su un aperto $A \subseteq \mathbb{R}^2$ si dice **irrotazionale**, o **chiuso**, se
$$
\frac{\partial F_1}{\partial y}(x, y) = \frac{\partial F_2}{\partial x}(x, y) \qquad \text{per ogni } (x, y) \in A .
$$
Nello spazio il **rotore** di un campo $F = (F_1, F_2, F_3)$ di classe $C^1$ è il campo vettoriale
$$
\operatorname{rot} F = \left( \frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z},\;\; \frac{\partial F_1}{\partial z} - \frac{\partial F_3}{\partial x},\;\; \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \right),
$$
e $F$ si dice irrotazionale se $\operatorname{rot} F = (0, 0, 0)$ in ogni punto di $A$. La condizione nel piano è il caso particolare con $F_3 = 0$ e componenti indipendenti da $z$: resta solo la terza componente del rotore. L'irrotazionalità si verifica con un calcolo di derivate parziali, perciò negli esercizi è sempre il *primo* controllo su un campo assegnato.
:::

::::teorema{#conservativo-implica-irrotazionale titolo="Un campo conservativo di classe C¹ è irrotazionale"}
Sia $F$ un campo di classe $C^1$ su un aperto connesso $A$. Se $F$ è conservativo in $A$, allora $F$ è irrotazionale in $A$. La condizione è *necessaria* e si usa al contrario: se le derivate incrociate non coincidono, il campo **non è conservativo** e la ricerca del potenziale termina.

:::dimostrazione
Sia $U$ un potenziale di $F$ nel piano, con $U_x = F_1$ e $U_y = F_2$. Poiché $F$ è di classe $C^1$, le derivate seconde miste di $U$ esistono e sono continue, quindi il **teorema di Schwarz** si applica e
$$
\frac{\partial F_1}{\partial y} = \frac{\partial^2 U}{\partial y \, \partial x} = \frac{\partial^2 U}{\partial x \, \partial y} = \frac{\partial F_2}{\partial x} .
$$
Nello spazio lo stesso scambio di derivate, applicato alle tre coppie di variabili, annulla le tre componenti del rotore.
:::
::::

:::richiamo{titolo="Teorema di Schwarz"}
Se le derivate seconde miste di $U$ esistono e sono continue in un aperto, allora in ogni punto dell'aperto esse **coincidono**. L'enunciato completo è nel capitolo sul calcolo differenziale.
:::

:::attenzione
L'implicazione inversa *non* è vera in generale: esistono **campi irrotazionali non conservativi**. Il controesempio classico è il campo di rotazione
$$
F(x, y) = \left( \frac{-y}{x^2 + y^2},\; \frac{x}{x^2 + y^2} \right),
$$
di classe $C^{\infty}$ sull'aperto connesso $A = \mathbb{R}^2 \setminus \{(0, 0)\}$. Il campo è irrotazionale, poiché entrambe le derivate incrociate valgono
$$
\frac{\partial F_1}{\partial y} = \frac{\partial F_2}{\partial x} = \frac{y^2 - x^2}{(x^2 + y^2)^2} .
$$
Lungo la circonferenza unitaria $r(t) = (\cos t, \sin t)$ con $t \in [0, 2\pi]$, percorsa in verso antiorario, si ha $F(r(t)) = (-\sin t, \cos t) = r'(t)$, quindi la circuitazione è
$$
\oint_{\gamma} F \cdot dr = \int_0^{2\pi} (\sin^2 t + \cos^2 t) \, dt = 2\pi \neq 0 .
$$
Per il **teorema di caratterizzazione** il campo **non è conservativo** in $A$. L'ostacolo è il punto $(0,0)$ tolto dal dominio: la nozione di dominio semplicemente connesso precisa questa idea.

::grafico{xmin=-3.2 xmax=3.2 ymin=-3 ymax=3 uguale=1 curve="cos(t),sin(t),0,6.29" vettori="1,0,1,0.75;1.39,0.8,1.15,1.21;2.4,0,2.4,0.31;0.5,0.87,-0.15,1.24;0,1.6,-0.47,1.6;1.2,2.08,0.93,2.23;-0.5,0.87,-1.15,0.49;-1.39,0.8,-1.62,0.39;-1.2,2.08,-1.47,1.92;-1,0,-1,-0.75;-1.39,-0.8,-1.15,-1.21;-2.4,0,-2.4,-0.31;-0.5,-0.87,0.15,-1.24;0,-1.6,0.47,-1.6;-1.2,-2.08,-0.93,-2.23;0.5,-0.87,1.15,-0.49;1.39,-0.8,1.62,-0.39;1.2,-2.08,1.47,-1.92" punti="0,0,vuoto" titolo="Il campo di rotazione: le frecce sono tangenti alle circonferenze centrate nell'origine e hanno lunghezza proporzionale a $\dfrac{1}{\sqrt{x^2 + y^2}}$; l'origine non appartiene al dominio"}

:::

## Domini semplicemente connessi

:::definizione{#semplicemente-connesso titolo="Aperto semplicemente connesso"}
Un aperto connesso $A \subseteq \mathbb{R}^n$ si dice **semplicemente connesso** se *ogni* curva chiusa con sostegno in $A$ si può deformare con continuità, restando in $A$, fino a ridurla a un punto. Nel piano la condizione ha una lettura geometrica: $A$ è semplicemente connesso quando **non ha buchi**, cioè quando la regione racchiusa da ogni curva chiusa in $A$ è tutta contenuta in $A$.

- Sono semplicemente connessi: $\mathbb{R}^2$ e $\mathbb{R}^3$, i cerchi e le palle, i rettangoli, ogni insieme convesso, ogni semipiano, $\mathbb{R}^3$ privato di un punto.
- Non sono semplicemente connessi: $\mathbb{R}^2 \setminus \{(0,0)\}$, una corona circolare, $\mathbb{R}^3$ privato di una retta.

Nel piano togliere un punto crea un buco, poiché una circonferenza attorno al punto non può essere contratta senza attraversarlo; nello spazio una curva chiusa può aggirare un punto mancante, perciò $\mathbb{R}^3$ meno un punto resta semplicemente connesso, mentre una retta tolta *non* si aggira.

::grafico{xmin=-4 xmax=4.5 ymin=-1.6 ymax=2.1 uguale=1 area="sqrt(abs(1.69-(x+2.2)^2));-sqrt(abs(1.69-(x+2.2)^2));-3.5;-0.9|sqrt(abs(1.69-(x-2.2)^2));-sqrt(abs(1.69-(x-2.2)^2));0.9;1.7|sqrt(abs(1.69-(x-2.2)^2));sqrt(abs(0.25-(x-2.2)^2));1.7;2.7|-sqrt(abs(0.25-(x-2.2)^2));-sqrt(abs(1.69-(x-2.2)^2));1.7;2.7|sqrt(abs(1.69-(x-2.2)^2));-sqrt(abs(1.69-(x-2.2)^2));2.7;3.5" curve="-2.2+1.3*cos(t),1.3*sin(t),0,6.29;2.2+0.9*cos(t),0.9*sin(t),0,6.29;2.2+0.5*cos(t),0.5*sin(t),0,6.29;2.2+1.3*cos(t),1.3*sin(t),0,6.29" etichette="-3.9,1.6,semplicemente connesso;0.7,1.6,non semplicemente connesso" titolo="Un cerchio, semplicemente connesso, e una corona circolare, che non lo è: la curva tratteggiata gira attorno al buco e non si riduce a un punto restando nella corona"}

:::

:::teorema{#irrotazionale-su-semplicemente-connesso titolo="Irrotazionale su semplicemente connesso implica conservativo"}
Sia $F$ un campo di classe $C^1$ e irrotazionale su un aperto semplicemente connesso $A$. Allora $F$ è **conservativo** in $A$. Insieme alla condizione necessaria, il teorema produce il criterio usato negli esercizi, con due controlli in sequenza:
$$
\begin{cases}
\dfrac{\partial F_1}{\partial y} = \dfrac{\partial F_2}{\partial x} \ \text{in } A \\[10pt]
A \ \text{semplicemente connesso}
\end{cases}
\implies F \ \text{conservativo in } A .
$$
Nel piano, per un dominio la cui frontiera è una curva chiusa contenuta in $A$ insieme alla regione racchiusa, la dimostrazione segue dal **teorema di Green**: la circuitazione è l'integrale doppio di $\dfrac{\partial F_2}{\partial x} - \dfrac{\partial F_1}{\partial y}$, che è la funzione nulla, quindi ogni circuitazione di questo tipo è nulla. La dimostrazione generale richiede la teoria dell'omotopia e si omette. Il controesempio del campo di rotazione mostra che l'ipotesi sul dominio *non* si può togliere; su un aperto non semplicemente connesso il teorema non dà informazioni e l'analisi passa dal calcolo diretto delle circuitazioni attorno ai buchi.
:::

:::osservazione
Un campo irrotazionale su un aperto qualunque $A$ è **conservativo** su *ogni* aperto semplicemente connesso contenuto in $A$. Il campo di rotazione, non conservativo su $\mathbb{R}^2 \setminus \{(0,0)\}$, è conservativo sul semipiano $x > 0$, dove un potenziale è $U(x, y) = \arctan \dfrac{y}{x}$. La proprietà di essere conservativo è quindi una **proprietà della coppia campo e dominio**, non del solo campo.
:::

## Costruzione del potenziale

:::proposizione{#potenziale-per-integrazione-successiva titolo="Potenziale per integrazione successiva"}
Sia $F = (F_1, F_2)$ conservativo su $A$. Ogni potenziale $U$ soddisfa il sistema
$$
\begin{cases}
U_x = F_1 \\[4pt]
U_y = F_2
\end{cases}
$$
e si costruisce in due passi. Dalla prima equazione, integrando $F_1$ rispetto a $x$ con $y$ fissata, si ottiene
$$
U(x, y) = \int F_1(x, y) \, dx + c(y),
$$
dove la costante di integrazione $c(y)$ è una **funzione della sola** $y$, poiché la derivata parziale rispetto a $x$ di una funzione di $y$ è nulla. Derivando questa espressione rispetto a $y$ e imponendo la seconda equazione si ricava $c'(y)$, e con una integrazione in $y$ si ottiene $c(y)$ a meno di una costante. Se il campo è conservativo, $c'(y)$ risulta una funzione della sola $y$; se nella espressione di $c'(y)$ resta la variabile $x$, il campo **non è conservativo**. Nello spazio il procedimento ha tre passi, con una funzione $c(y, z)$ al primo passo e una funzione $c(z)$ al secondo.
:::

:::esempio{titolo="Costruzione di un potenziale"}
$F(x, y) = (2xy, \, x^2 + 1)$ su $\mathbb{R}^2$. Le derivate incrociate valgono entrambe $2x$ e il dominio è semplicemente connesso, quindi il campo è **conservativo**. Integrando $F_1 = 2xy$ rispetto a $x$ si ottiene $U(x, y) = x^2 y + c(y)$. Derivando rispetto a $y$ e imponendo $U_y = F_2$ si ottiene
$$
x^2 + c'(y) = x^2 + 1 ,
$$
quindi $c'(y) = 1$, perciò $c(y) = y + k$. I potenziali sono $U(x, y) = x^2 y + y + k$ con $k \in \mathbb{R}$.
:::

::::proposizione{#potenziale-su-spezzate titolo="Potenziale come lavoro lungo una spezzata"}
Sia $F = (F_1, F_2)$ conservativo su un aperto $A$ che contiene il rettangolo di vertici opposti $(x_0, y_0)$ e $(x, y)$. Un potenziale è il **lavoro lungo la spezzata** che va da $(x_0, y_0)$ a $(x, y_0)$ in orizzontale e poi da $(x, y_0)$ a $(x, y)$ in verticale:
$$
U(x, y) = \int_{x_0}^{x} F_1(t, y_0) \, dt + \int_{y_0}^{y} F_2(x, t) \, dt .
$$
Nello spazio si aggiunge il terzo tratto verticale, con il termine $\displaystyle\int_{z_0}^{z} F_3(x, y, t) \, dt$. La formula sostituisce l'integrazione successiva quando le primitive parziali sono più semplici lungo la spezzata; la scelta comoda è spesso $(x_0, y_0) = (0, 0)$.

::grafico{xmin=-0.5 xmax=4.5 ymin=-0.5 ymax=3.3 uguale=1 vettori="0.5,0.5,3,0.5;3,0.5,3,2.5" punti="0.5,0.5;3,0.5;3,2.5" etichette="0.05,0.15,(x₀, y₀);3.12,0.15,(x, y₀);3.12,2.6,(x, y)" titolo="La spezzata da $(x_0, y_0)$ a $(x, y)$: prima un tratto orizzontale, poi un tratto verticale"}

:::dimostrazione
Per il **teorema di caratterizzazione** il lavoro di un campo conservativo da $(x_0, y_0)$ a $(x, y)$ non dipende dal cammino, e la funzione che a ogni punto associa tale lavoro è un potenziale. Sul tratto orizzontale, parametrizzato da $r(t) = (t, y_0)$ con $t$ da $x_0$ a $x$, si ha $r'(t) = (1, 0)$, quindi il lavoro è l'integrale di $F_1(t, y_0)$; sul tratto verticale, parametrizzato da $r(t) = (x, t)$ con $t$ da $y_0$ a $y$, si ha $r'(t) = (0, 1)$, quindi il lavoro è l'integrale di $F_2(x, t)$. La somma dei due tratti è la formula enunciata.
:::
::::

## Il teorema di Green

:::definizione{#bordo-orientato titolo="Dominio regolare e bordo orientato positivamente"}
Un dominio $D \subset \mathbb{R}^2$ si dice **normale** rispetto all'asse $x$ se
$$
D = \{ (x, y) : a \leq x \leq b, \ g_1(x) \leq y \leq g_2(x) \}
$$
con $g_1, g_2$ di classe $C^1$ su $[a, b]$ e $g_1 \leq g_2$; la definizione rispetto all'asse $y$ scambia i ruoli delle variabili. Un **dominio regolare** è un dominio normale rispetto a un asse, oppure l'unione di un numero finito di domini normali con interni a due a due disgiunti. Il bordo $\partial D$ è **orientato positivamente** quando è percorso lasciando il dominio alla propria sinistra: per un dominio senza buchi il verso è antiorario, per un eventuale buco interno il verso della curva che lo delimita è orario.

::grafico{xmin=-3.6 xmax=3.6 ymin=-2.5 ymax=2.6 uguale=1 area="2*sqrt(abs(1-x^2/9));-2*sqrt(abs(1-x^2/9));-3;-0.8|2*sqrt(abs(1-x^2/9));sqrt(abs(0.64-x^2));-0.8;0.8|-sqrt(abs(0.64-x^2));-2*sqrt(abs(1-x^2/9));-0.8;0.8|2*sqrt(abs(1-x^2/9));-2*sqrt(abs(1-x^2/9));0.8;3" curve="3*cos(t),2*sin(t),0,6.29;0.8*cos(t),0.8*sin(t),0,6.29;0.8*cos(t),0.8*sin(t),0,6.29" vettori="0.6,1.96,-0.6,1.96;-0.35,0.72,0.35,0.72" etichette="1.5,0.3,D" titolo="Il bordo orientato positivamente di un dominio con un buco: la curva esterna è percorsa in verso antiorario, quella interna in verso orario, e in entrambi i casi $D$ resta a sinistra"}

:::

::::teorema{#teorema-di-green titolo="Teorema di Green"}
Sia $D \subset \mathbb{R}^2$ un dominio regolare con bordo $\partial D$ regolare a tratti e orientato positivamente, e sia $F = (F_1, F_2)$ un campo di classe $C^1$ su un aperto contenente $D$. Allora
$$
\oint_{\partial D} F_1 \, dx + F_2 \, dy
= \iint_{D} \left( \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \right) dx \, dy .
$$
Il teorema collega la **circuitazione lungo il bordo** con un **integrale doppio sul dominio** e si usa nei due versi: trasforma una circuitazione in un integrale doppio, in genere più semplice da calcolare, e trasforma l'area di un dominio in un integrale di linea lungo il bordo, utile quando il bordo è assegnato in forma parametrica. Per il campo $F = (-y^3, x^3)$ sul cerchio $x^2 + y^2 \leq 4$, per esempio, la circuitazione lungo la circonferenza è l'integrale doppio di $3x^2 + 3y^2$, che in coordinate polari vale $24\pi$.

:::dimostrazione
Si dimostra l'identità per un dominio $D$ normale rispetto a entrambi gli assi; il caso generale segue scomponendo il dominio regolare in domini normali e sommando le identità, poiché i tagli interni sono percorsi due volte in versi opposti e i loro contributi alla circuitazione **si semplificano**.

Primo passo, l'identità $\displaystyle\oint_{\partial D} F_1 \, dx = - \iint_D \frac{\partial F_1}{\partial y} \, dx \, dy$ per $D$ normale rispetto all'asse $x$, con $a \leq x \leq b$ e $g_1(x) \leq y \leq g_2(x)$. Per il **teorema di riduzione** e per il **teorema fondamentale del calcolo integrale** applicato alla variabile $y$,
$$
\begin{aligned}
\iint_D \frac{\partial F_1}{\partial y} \, dx \, dy
&= \int_a^b \left( \int_{g_1(x)}^{g_2(x)} \frac{\partial F_1}{\partial y}(x, y) \, dy \right) dx \\[6pt]
&= \int_a^b \bigl( F_1(x, g_2(x)) - F_1(x, g_1(x)) \bigr) \, dx .
\end{aligned}
$$
Il bordo orientato positivamente è formato dal grafico di $g_1$ percorso da sinistra a destra, dal segmento verticale $x = b$, dal grafico di $g_2$ percorso da destra a sinistra e dal segmento verticale $x = a$. Sui due segmenti verticali $x$ è costante, quindi $dx = 0$ e il contributo all'integrale di $F_1 \, dx$ è **nullo**. Sul grafico di $g_1$, con parametrizzazione $(x, g_1(x))$ e $x$ da $a$ a $b$, l'integrale vale $\displaystyle\int_a^b F_1(x, g_1(x)) \, dx$; sul grafico di $g_2$, percorso in verso opposto, vale $\displaystyle -\int_a^b F_1(x, g_2(x)) \, dx$. Sommando i quattro tratti si ottiene
$$
\oint_{\partial D} F_1 \, dx
= \int_a^b \bigl( F_1(x, g_1(x)) - F_1(x, g_2(x)) \bigr) \, dx
= - \iint_D \frac{\partial F_1}{\partial y} \, dx \, dy .
$$

::grafico{xmin=-0.4 xmax=4.4 ymin=-0.6 ymax=3.8 area="3+0.4*sin(1.5*x);0.5+0.3*(x-2)^2;0.5;3.5" curve="t,0.5+0.3*(t-2)^2,0.5,3.5;2.6,t,0.608,2.725;t,3+0.4*sin(1.5*t),0.5,3.5" segmenti="0.5,0,0.5,3.273;3.5,0,3.5,2.656" vettori="1.3,0.647,1.9,0.503;1.9,3.115,1.3,3.372" etichette="0.45,-0.45,a;3.45,-0.45,b;2.6,0.15,y = g₁(x);2.3,3.3,y = g₂(x)" titolo="Dominio normale rispetto all'asse $x$: il bordo orientato positivamente percorre il grafico di $g_1$ da sinistra a destra e il grafico di $g_2$ da destra a sinistra; sui lati verticali $dx = 0$"}

Secondo passo, l'identità $\displaystyle\oint_{\partial D} F_2 \, dy = \iint_D \frac{\partial F_2}{\partial x} \, dx \, dy$ per $D$ normale rispetto all'asse $y$. Il calcolo è lo stesso con i ruoli di $x$ e $y$ scambiati; il segno è *opposto* perché, con l'orientazione positiva del bordo, il grafico della funzione che delimita il dominio a destra è percorso dal basso verso l'alto. Sommando le due identità si ottiene la tesi.
:::
::::

:::richiamo{titolo="Teorema di riduzione per gli integrali doppi"}
Se $f$ è continua sul dominio normale $D = \{ (x,y) : a \leq x \leq b, \ g_1(x) \leq y \leq g_2(x) \}$, allora l'integrale doppio di $f$ su $D$ è uguale all'**integrale iterato** $\displaystyle\int_a^b \left( \int_{g_1(x)}^{g_2(x)} f(x, y) \, dy \right) dx$.
:::

:::osservazione
Il **teorema di Green** spiega il legame tra irrotazionalità e circuitazioni. Se $F$ è irrotazionale, l'integrando $\dfrac{\partial F_2}{\partial x} - \dfrac{\partial F_1}{\partial y}$ è nullo, quindi la circuitazione lungo il bordo di ogni dominio regolare contenuto nel dominio del campo insieme al suo interno è nulla. Per il campo di rotazione la circuitazione lungo la circonferenza unitaria vale $2\pi$ e il teorema di Green *non* si applica al cerchio unitario, poiché il campo non è definito nell'origine: le due affermazioni sono **coerenti**.
:::

## Aree con la formula di Green

::::proposizione{#area-con-green titolo="Formule dell'area"}
Sia $D$ un dominio regolare con bordo orientato positivamente. L'area di $D$ si calcola con *uno qualunque* dei tre integrali di linea
$$
\operatorname{area}(D)
= \oint_{\partial D} x \, dy
= - \oint_{\partial D} y \, dx
= \frac{1}{2} \oint_{\partial D} ( x \, dy - y \, dx ) .
$$
Le formule servono quando il bordo è noto in forma parametrica e una descrizione cartesiana del dominio è scomoda, come per l'ellisse o per le curve chiuse assegnate con $x = x(t)$, $y = y(t)$. La terza formula è spesso la più comoda, poiché nel suo integrando i termini misti si semplificano.

:::dimostrazione
Si applica il **teorema di Green** a tre campi. Per $F = (0, x)$ l'integrando dell'integrale doppio è $\dfrac{\partial F_2}{\partial x} - \dfrac{\partial F_1}{\partial y} = 1$, quindi la circuitazione di $x \, dy$ è l'integrale doppio della costante $1$, cioè l'area. Per $F = (-y, 0)$ l'integrando è ancora $1$, quindi anche $-\oint y \, dx$ è l'area. La terza formula è la **media aritmetica** delle prime due.
:::
::::

:::esempio{titolo="Area dell'ellisse"}
L'ellisse di semiassi $a$ e $b$ ha bordo $r(t) = (a \cos t, \, b \sin t)$ con $t \in [0, 2\pi]$, percorso in verso antiorario. Con la terza formula,
$$
\begin{aligned}
\operatorname{area}
&= \frac{1}{2} \int_0^{2\pi} \bigl( a \cos t \cdot b \cos t - b \sin t \cdot (-a \sin t) \bigr) \, dt \\[6pt]
&= \frac{ab}{2} \int_0^{2\pi} (\cos^2 t + \sin^2 t) \, dt = \pi a b .
\end{aligned}
$$
Per $a = b = R$ si ritrova l'**area del cerchio** $\pi R^2$.
:::
