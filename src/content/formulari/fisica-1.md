---
titolo: "Formulario di Fisica 1"
sommario: "Le formule di Fisica 1 con le condizioni di validità: cinematica e moto del proiettile, leggi di Newton, lavoro ed energia, oscillazioni, urti, corpo rigido, gravitazione, fluidi, primo e secondo principio della termodinamica."
descrizione: "Formulario di Fisica 1 in PDF: proiettile, leggi di Newton, energia, urti, momento d'inerzia, gravitazione, Bernoulli, gas perfetto, Carnot, entropia."
---

## Unità di misura e vettori

Le definizioni e gli esempi sono nel capitolo [Grandezze fisiche, unità di misura e vettori](/fisica-1/grandezze-e-vettori/teoria).

:::formula{#unita-derivate titolo="Unità derivate del Sistema Internazionale"}
$$
1\,\mathrm{N} = 1\,\mathrm{kg\cdot m/s^2},
\qquad
1\,\mathrm{J} = 1\,\mathrm{N\cdot m},
\qquad
1\,\mathrm{W} = 1\,\mathrm{J/s},
\qquad
1\,\mathrm{Pa} = 1\,\mathrm{N/m^2}
$$
$$
1\,\frac{\mathrm{km}}{\mathrm{h}} = \frac{1}{3{,}6}\,\frac{\mathrm{m}}{\mathrm{s}},
\qquad
1\,\mathrm{L} = 10^{-3}\,\mathrm{m^3},
\qquad
1\,\frac{\mathrm{g}}{\mathrm{cm^3}} = 10^{3}\,\frac{\mathrm{kg}}{\mathrm{m^3}},
\qquad
1\,\mathrm{kWh} = 3{,}6 \cdot 10^{6}\,\mathrm{J}
$$
Le unità di base della meccanica sono metro, chilogrammo e secondo. Prima di sostituire i dati in una formula si convertono tutti nel Sistema Internazionale.
:::

:::formula{#prefissi titolo="Prefissi"}
| Prefisso | Fattore |
| --- | --- |
| giga $\mathrm{G}$, mega $\mathrm{M}$, kilo $\mathrm{k}$ | $10^{9}$, $10^{6}$, $10^{3}$ |
| centi $\mathrm{c}$, milli $\mathrm{m}$ | $10^{-2}$, $10^{-3}$ |
| micro $\mu$, nano $\mathrm{n}$, pico $\mathrm{p}$ | $10^{-6}$, $10^{-9}$, $10^{-12}$ |

Un esponente si applica anche al prefisso, quindi $1\,\mathrm{cm^2} = 10^{-4}\,\mathrm{m^2}$ e $1\,\mathrm{cm^3} = 10^{-6}\,\mathrm{m^3}$.
:::

:::formula{#analisi-dimensionale titolo="Analisi dimensionale"}
$$
[v] = [L\,T^{-1}],
\qquad
[a] = [L\,T^{-2}],
\qquad
[F] = [M\,L\,T^{-2}],
\qquad
[E] = [M\,L^{2}\,T^{-2}]
$$
In una relazione fisica corretta i due membri hanno le stesse dimensioni, si sommano solo termini con le stesse dimensioni e l'argomento di $\sin$, $\cos$, $\exp$, $\ln$ è adimensionale. Una formula omogenea può ancora avere un coefficiente numerico sbagliato.
:::

:::formula{#cifre-significative titolo="Cifre significative"}
$$
(3{,}0 \cdot 10^{8}) \cdot (2{,}0 \cdot 10^{-3}) = 6{,}0 \cdot 10^{5},
\qquad
12{,}52 + 1{,}3 = 13{,}8
$$
In prodotti e quozienti il risultato ha tante cifre significative quante il dato che ne ha di meno. In somme e differenze il risultato ha tanti decimali quanti il dato che ne ha di meno.
:::

:::formula{#componenti-cartesiane-e-polari titolo="Componenti cartesiane e polari, somma di vettori"}
$$
A_x = A\cos\theta,
\qquad
A_y = A\sin\theta
$$
$$
A = \sqrt{A_x^2 + A_y^2 + A_z^2},
\qquad
\tan\theta = \frac{A_y}{A_x}
$$
$$
\vec{A} + \vec{B} = (A_x + B_x,\ A_y + B_y,\ A_z + B_z),
\qquad
k\vec{A} = (kA_x,\ kA_y,\ kA_z)
$$
L'angolo $\theta$ è misurato dal semiasse positivo delle $x$ in verso antiorario, per un vettore del piano $xy$. La tangente determina $\theta$ a meno di $180^\circ$, quindi il quadrante si sceglie dai segni di $A_x$ e $A_y$; la formula richiede $A_x \neq 0$. La risultante di più forze si ottiene sommando separatamente le componenti.
:::

:::formula{#prodotto-scalare titolo="Prodotto scalare"}
$$
\vec{A} \cdot \vec{B} = A B \cos\theta = A_x B_x + A_y B_y + A_z B_z
$$
$$
\cos\theta = \frac{\vec{A} \cdot \vec{B}}{A B}
$$
L'angolo $\theta \in [0^\circ, 180^\circ]$ è quello tra i due vettori, e la seconda formula vale per vettori non nulli. Il prodotto è nullo *solo se* i vettori sono perpendicolari o uno dei due è nullo. Il prodotto $\vec{A} \cdot \hat{u}$ con un versore è la componente di $\vec{A}$ lungo $\hat{u}$.
:::

:::formula{#prodotto-vettoriale titolo="Prodotto vettoriale"}
$$
\vec{A} \times \vec{B} = (A_y B_z - A_z B_y)\,\hat{\imath} + (A_z B_x - A_x B_z)\,\hat{\jmath} + (A_x B_y - A_y B_x)\,\hat{k}
$$
$$
|\vec{A} \times \vec{B}| = A B \sin\theta,
\qquad
\vec{B} \times \vec{A} = -\,\vec{A} \times \vec{B}
$$
Il vettore è perpendicolare al piano di $\vec{A}$ e $\vec{B}$, con verso dato dalla regola della mano destra. Valgono $\hat{\imath} \times \hat{\jmath} = \hat{k}$, $\hat{\jmath} \times \hat{k} = \hat{\imath}$, $\hat{k} \times \hat{\imath} = \hat{\jmath}$.
:::

:::formula{#derivata-di-un-vettore titolo="Derivata di un vettore"}
$$
\frac{d\vec{A}}{dt} = \frac{dA_x}{dt}\,\hat{\imath} + \frac{dA_y}{dt}\,\hat{\jmath} + \frac{dA_z}{dt}\,\hat{k},
\qquad
\frac{d}{dt}\big(\vec{A} \cdot \vec{B}\big) = \frac{d\vec{A}}{dt} \cdot \vec{B} + \vec{A} \cdot \frac{d\vec{B}}{dt}
$$
I versori $\hat{\imath}, \hat{\jmath}, \hat{k}$ sono costanti, perciò si derivano le sole componenti. Se $|\vec{A}|$ è costante, allora $\vec{A} \cdot \dfrac{d\vec{A}}{dt} = 0$, cioè la derivata è perpendicolare al vettore.
:::

## Cinematica in una dimensione

Le leggi del moto sono ricavate nel capitolo [Cinematica in una dimensione](/fisica-1/cinematica-1d/teoria).

:::formula{#velocita-e-accelerazione-1d titolo="Velocità e accelerazione"}
$$
v_m = \frac{\Delta x}{\Delta t},
\qquad
v(t) = \frac{dx}{dt},
\qquad
a_m = \frac{\Delta v}{\Delta t},
\qquad
a(t) = \frac{dv}{dt} = \frac{d^2 x}{dt^2}
$$
Lo spostamento $\Delta x = x(t_2) - x(t_1)$ coincide con la distanza percorsa *solo se* il verso del moto non cambia. Il moto è accelerato quando $v$ e $a$ hanno lo stesso segno, decelerato quando hanno segno opposto.
:::

:::formula{#moto-rettilineo-uniforme titolo="Moto rettilineo uniforme"}
$$
x(t) = x_0 + v\,(t - t_0)
$$
La formula vale con velocità $v$ costante, e $x_0$ è la posizione all'istante $t_0$. Nei problemi di incontro si scrive la legge oraria di ciascun corpo nello stesso riferimento e si risolve $x_A(t) = x_B(t)$.
:::

:::formula{#moto-uniformemente-accelerato titolo="Moto uniformemente accelerato"}
$$
v(t) = v_0 + a\,t,
\qquad
x(t) = x_0 + v_0\,t + \frac{1}{2}\,a\,t^2
$$
$$
v^2 = v_0^2 + 2\,a\,(x - x_0),
\qquad
v_m = \frac{v_0 + v}{2}
$$
Le formule valgono con accelerazione $a$ costante e $t$ misurato dall'istante in cui la posizione è $x_0$ e la velocità è $v_0$. La relazione tra velocità e spostamento si usa quando il tempo non è dato; per esempio un corpo che frena da $v_0$ fino a fermarsi percorre $\dfrac{v_0^2}{2|a|}$.
:::

:::formula{#caduta-libera-e-lancio-verticale titolo="Caduta libera e lancio verticale"}
$$
v(t) = v_0 - g\,t,
\qquad
y(t) = y_0 + v_0\,t - \frac{1}{2}\,g\,t^2,
\qquad
g = 9{,}81\,\mathrm{m/s^2}
$$
L'asse $y$ è orientato verso l'alto e la resistenza dell'aria è trascurabile. Un corpo lasciato cadere da fermo dall'altezza $h$ arriva al suolo dopo il tempo $\sqrt{\dfrac{2h}{g}}$ con velocità di modulo $\sqrt{2gh}$.
:::

:::formula{#altezza-massima-lancio-verticale titolo="Tempo di salita e altezza massima"}
$$
t_s = \frac{v_0}{g},
\qquad
h_{\mathrm{max}} = y_0 + \frac{v_0^2}{2g}
$$
Le formule valgono per un lancio verso l'alto con $v_0 > 0$ e resistenza dell'aria trascurabile. Il corpo torna alla quota $y_0$ dopo il tempo $2t_s$, con velocità $-v_0$.
:::

:::formula{#area-sotto-il-grafico titolo="Spostamento e spazio percorso dal grafico della velocità"}
$$
\Delta x = \int_{t_1}^{t_2} v(t)\,dt,
\qquad
d = \int_{t_1}^{t_2} |v(t)|\,dt
$$
Lo spostamento è l'area con segno sotto il grafico di $v(t)$, lo spazio percorso è l'area senza segno. Allo stesso modo la variazione di velocità è l'area sotto il grafico di $a(t)$.
:::

:::formula{#legge-oraria-da-accelerazione titolo="Legge oraria dall'accelerazione"}
$$
v(t) = v_0 + \int_{t_0}^{t} a(s)\,ds,
\qquad
x(t) = x_0 + \int_{t_0}^{t} v(s)\,ds
$$
Le formule valgono per $a(t)$ continua, con $v_0$ e $x_0$ valori all'istante $t_0$. Le due condizioni iniziali sono necessarie entrambe, perché ogni integrazione introduce una costante.
:::

:::formula{#accelerazione-funzione-della-posizione titolo="Accelerazione in funzione della posizione"}
$$
a = v\,\frac{dv}{dx},
\qquad
\frac{1}{2}\,v^2 - \frac{1}{2}\,v_0^2 = \int_{x_0}^{x} a(\xi)\,d\xi
$$
Si usa quando l'accelerazione è data come funzione della posizione, $a = a(x)$; $v_0$ è la velocità nella posizione $x_0$.
:::

:::formula{#accelerazione-proporzionale-alla-velocita titolo="Accelerazione proporzionale alla velocità"}
$$
a = -k\,v
\quad\Longrightarrow\quad
v(t) = v_0\,e^{-k t},
\qquad
x(t) = x_0 + \frac{v_0}{k}\left(1 - e^{-k t}\right)
$$
Le formule valgono per $k > 0$ costante, con $v_0$ e $x_0$ valori in $t = 0$. Il corpo si ferma solo per $t \to +\infty$ e percorre in tutto la distanza $\dfrac{v_0}{k}$.
:::

:::formula{#velocita-limite titolo="Velocità limite"}
$$
a = A - k\,v
\quad\Longrightarrow\quad
v(t) = \frac{A}{k}\left(1 - e^{-k t}\right),
\qquad
v_L = \frac{A}{k}
$$
Le formule valgono per $A > 0$ e $k > 0$ costanti e partenza da fermo, come per un corpo che cade in un fluido con resistenza proporzionale alla velocità. La velocità limite è il valore in cui l'accelerazione si annulla.
:::

## Moto nel piano e moto circolare

Il capitolo [Moto nel piano: proiettile e moto circolare](/fisica-1/moto-nel-piano/teoria) contiene le dimostrazioni e gli esempi.

:::formula{#velocita-e-accelerazione-vettoriali titolo="Posizione, velocità e accelerazione nel piano"}
$$
\vec{r}(t) = x(t)\,\hat{\imath} + y(t)\,\hat{\jmath},
\qquad
\vec{v} = \frac{d\vec{r}}{dt},
\qquad
\vec{a} = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2}
$$
$$
\vec{v}(t) = \vec{v}_0 + \vec{a}\,t,
\qquad
\vec{r}(t) = \vec{r}_0 + \vec{v}_0\,t + \frac{1}{2}\,\vec{a}\,t^2
$$
Le leggi orarie della seconda riga valgono con $\vec{a}$ costante. La velocità è tangente alla traiettoria, e ogni componente segue la legge del moto rettilineo con la propria accelerazione.
:::

:::formula{#leggi-orarie-del-proiettile titolo="Leggi orarie del proiettile"}
$$
x(t) = v_0\cos\theta\; t,
\qquad
y(t) = v_0\sin\theta\; t - \frac{1}{2}\,g\,t^2
$$
$$
v_x = v_0\cos\theta,
\qquad
v_y(t) = v_0\sin\theta - g\,t
$$
Il proiettile parte dall'origine con velocità $v_0$ inclinata di $\theta$ sull'orizzontale, l'asse $y$ è verso l'alto e la resistenza dell'aria è trascurabile. Il moto orizzontale è uniforme, quello verticale uniformemente accelerato.
:::

:::formula{#traiettoria-parabolica titolo="Traiettoria parabolica"}
$$
y = \tan\theta\; x - \frac{g}{2\,v_0^2\cos^2\theta}\; x^2
$$
Si ottiene ricavando $t$ da $x(t)$ e sostituendolo in $y(t)$, quindi richiede $\cos\theta \neq 0$. Si usa per sapere se il proiettile supera un ostacolo alla distanza orizzontale $x$.
:::

:::formula{#altezza-massima-tempo-di-volo-gittata titolo="Altezza massima, tempo di volo e gittata"}
$$
H = \frac{v_0^2\sin^2\theta}{2g},
\qquad
T = \frac{2\,v_0\sin\theta}{g},
\qquad
R = \frac{v_0^2\sin 2\theta}{g}
$$
Il tempo di volo e la gittata si riferiscono al ritorno alla quota di partenza. A parità di $v_0$ la gittata è massima per $\theta = 45^\circ$, dove vale $\dfrac{v_0^2}{g}$, e gli angoli complementari $\theta$ e $90^\circ - \theta$ danno la stessa gittata.
:::

:::formula{#lancio-orizzontale titolo="Lancio orizzontale da una quota"}
$$
t_c = \sqrt{\frac{2h}{g}},
\qquad
d = v_0\,\sqrt{\frac{2h}{g}},
\qquad
v_{\mathrm{suolo}} = \sqrt{v_0^2 + 2gh}
$$
Il corpo parte dalla quota $h$ con velocità orizzontale $v_0$ e resistenza dell'aria trascurabile. Il tempo di caduta è lo stesso di un corpo lasciato cadere da fermo dalla stessa quota.
:::

:::formula{#velocita-e-quota titolo="Velocità in funzione della quota"}
$$
v = \sqrt{v_0^2 - 2g\,(y - y_0)}
$$
La formula vale per un corpo soggetto al solo peso, con asse $y$ verso l'alto, qualunque sia la direzione di lancio. Nei lanci da una quota con angolo qualsiasi il tempo di arrivo alla quota $y_f$ si ricava dall'equazione di secondo grado $y_0 + v_0\sin\theta\; t - \dfrac{1}{2}\,g\,t^2 = y_f$, scegliendo la radice positiva che corrisponde al moto descritto.
:::

:::formula{#moto-circolare-uniforme titolo="Moto circolare uniforme"}
$$
s = R\,\theta,
\qquad
\omega = \frac{d\theta}{dt},
\qquad
v = \omega R
$$
$$
T = \frac{2\pi}{\omega} = \frac{2\pi R}{v},
\qquad
f = \frac{1}{T} = \frac{\omega}{2\pi},
\qquad
a_n = \frac{v^2}{R} = \omega^2 R
$$
L'angolo $\theta$ è in radianti e $\omega$ è costante. L'accelerazione centripeta $a_n$ è diretta verso il centro della circonferenza, e in forma vettoriale $\vec{a} = -\omega^2\,\vec{r}$ con l'origine nel centro.
:::

:::formula{#moto-circolare-uniformemente-accelerato titolo="Moto circolare uniformemente accelerato"}
$$
\begin{aligned}
\omega(t) &= \omega_0 + \alpha\,t \\[4pt]
\theta(t) &= \theta_0 + \omega_0\,t + \frac{1}{2}\,\alpha\,t^2 \\[4pt]
\omega^2 &= \omega_0^2 + 2\alpha\,(\theta - \theta_0)
\end{aligned}
$$
Le formule valgono con accelerazione angolare $\alpha = \dfrac{d\omega}{dt}$ costante. Sono le leggi del moto uniformemente accelerato con $\theta$ al posto di $x$.
:::

:::formula{#accelerazione-tangenziale-e-centripeta titolo="Accelerazione tangenziale e centripeta"}
$$
\vec{a} = a_t\,\hat{u}_t + a_n\,\hat{u}_n,
\qquad
a_t = \frac{dv}{dt} = \alpha R,
\qquad
a_n = \frac{v^2}{R},
\qquad
a = \sqrt{a_t^2 + a_n^2}
$$
Le formule valgono nel moto circolare di raggio $R$; $\hat{u}_t$ è tangente nel verso del moto e $\hat{u}_n$ è diretto verso il centro. Su una traiettoria qualsiasi $R$ si sostituisce con il raggio di curvatura $\rho = \dfrac{v^2}{a_n}$, e $a_t = \dfrac{\vec{a} \cdot \vec{v}}{v}$.
:::

:::formula{#trasformazioni-di-galileo titolo="Trasformazioni di Galileo e composizione delle velocità"}
$$
\vec{r} = \vec{r}\,' + \vec{V}\,t,
\qquad
\vec{v} = \vec{v}\,' + \vec{V},
\qquad
\vec{a} = \vec{a}\,'
$$
Le formule valgono se $S'$ trasla rispetto a $S$ con velocità $\vec{V}$ costante e le origini coincidono in $t = 0$, con velocità piccole rispetto a quella della luce. Le grandezze con l'apice sono misurate in $S'$.
:::

## Leggi di Newton e forze

Gli enunciati e i problemi risolti sono nel capitolo [Leggi di Newton e forze](/fisica-1/leggi-di-newton/teoria).

:::formula{#secondo-principio-dinamica titolo="Secondo principio ed equilibrio"}
$$
\vec{R} = m\,\vec{a},
\qquad
\begin{cases}
R_x = m\,a_x \\[4pt]
R_y = m\,a_y
\end{cases}
$$
$\vec{R}$ è la risultante di tutte le forze applicate al punto materiale, in un sistema di riferimento inerziale; le due equazioni scalari valgono insieme. Il punto è in equilibrio quando $R_x = 0$ e $R_y = 0$.
:::

:::formula{#peso-e-terzo-principio titolo="Peso e terzo principio"}
$$
\vec{P} = m\,\vec{g},
\qquad
\vec{F}_{BA} = -\,\vec{F}_{AB}
$$
Il peso vale $mg$ vicino alla superficie terrestre. Le due forze del terzo principio hanno la stessa retta d'azione e agiscono su corpi diversi, perciò nell'equazione del moto di un singolo corpo ne compare una sola.
:::

:::formula{#leggi-dell-attrito titolo="Attrito radente"}
$$
f_s \leq \mu_s\,N,
\qquad
f_d = \mu_d\,N
$$
$N$ è il modulo della reazione normale. L'attrito statico agisce finché le superfici non scorrono e assume il valore necessario all'equilibrio, fino al massimo $\mu_s N$; l'attrito dinamico agisce durante lo scorrimento, con verso opposto alla velocità relativa.
:::

:::attenzione
La formula $f_s = \mu_s N$ dà il valore massimo dell'attrito statico. Un blocco di $2{,}0\,\mathrm{kg}$ fermo su un pavimento con $\mu_s = 0{,}50$, spinto orizzontalmente con $5{,}0\,\mathrm{N}$, resta fermo e l'attrito vale $5{,}0\,\mathrm{N}$, mentre $\mu_s N = 9{,}8\,\mathrm{N}$.
:::

:::formula{#piano-inclinato titolo="Piano inclinato"}
$$
N = m g \cos\alpha,
\qquad
a = g \sin\alpha
$$
$$
a_{\mathrm{discesa}} = g\,(\sin\alpha - \mu_d \cos\alpha),
\qquad
a_{\mathrm{salita}} = g\,(\sin\alpha + \mu_d \cos\alpha)
$$
La prima riga vale su un piano liscio inclinato di $\alpha$, senza altre forze perpendicolari al piano. Con attrito dinamico, $a_{\mathrm{discesa}}$ è l'accelerazione di un corpo che scende e $a_{\mathrm{salita}}$ il modulo della decelerazione di un corpo che sale; entrambe sono dirette verso il basso lungo il piano.
:::

:::formula{#angolo-limite titolo="Angolo limite di attrito"}
$$
\tan\alpha \leq \mu_s
$$
Un corpo fermo su un piano inclinato di $\alpha$ resta in quiete *se e solo se* la disuguaglianza è soddisfatta. L'angolo limite $\arctan\mu_s$ non dipende dalla massa.
:::

:::formula{#legge-di-hooke titolo="Legge di Hooke e molle in serie e in parallelo"}
$$
F_x = -k\,x
$$
$$
k_{\mathrm{par}} = k_1 + k_2,
\qquad
\frac{1}{k_{\mathrm{ser}}} = \frac{1}{k_1} + \frac{1}{k_2}
$$
La molla è ideale, cioè di massa trascurabile, e $x$ è l'allungamento rispetto alla lunghezza a riposo. Le molle in parallelo hanno lo stesso allungamento, quelle in serie sono attraversate dalla stessa forza.
:::

:::formula{#forza-centripeta titolo="Forza centripeta"}
$$
F_c = m\,\frac{v^2}{r} = m\,\omega^2 r
$$
$F_c$ è la componente della risultante diretta verso il centro della traiettoria circolare di raggio $r$. È la somma delle componenti radiali delle forze presenti, come tensione, attrito, reazione normale e gravità.
:::

:::formula{#curve-stradali titolo="Curva piana e curva sopraelevata"}
$$
v_{\mathrm{max}} = \sqrt{\mu_s\,g\,r},
\qquad
v = \sqrt{g\,r \tan\alpha}
$$
La prima formula dà la velocità massima in una curva orizzontale di raggio $r$, dove la forza centripeta è l'attrito statico. La seconda dà la velocità con cui si percorre una curva sopraelevata di $\alpha$ senza bisogno di attrito.
:::

:::formula{#giro-della-morte titolo="Giro della morte"}
$$
v_{\mathrm{alto}} \geq \sqrt{g\,r},
\qquad
N_{\mathrm{alto}} = m\,\frac{v^2}{r} - m g,
\qquad
N_{\mathrm{basso}} = m g + m\,\frac{v^2}{r}
$$
Il corpo percorre l'interno di una guida circolare verticale di raggio $r$, e la prima condizione è necessaria e sufficiente per restare a contatto nel punto più alto. Se la guida è liscia, la conservazione dell'energia meccanica dà $v_{\mathrm{basso}}^2 = v_{\mathrm{alto}}^2 + 4gr$, perciò nel punto più basso serve $v \geq \sqrt{5gr}$.
:::

:::formula{#macchina-di-atwood titolo="Macchina di Atwood"}
$$
a = \frac{m_1 - m_2}{m_1 + m_2}\,g,
\qquad
T = \frac{2\,m_1 m_2}{m_1 + m_2}\,g
$$
Il filo e la carrucola sono ideali, cioè il filo è inestensibile e di massa trascurabile e la carrucola ha massa trascurabile e ruota senza attrito. L'accelerazione è positiva nel verso in cui scende $m_1$.
:::

:::formula{#corpo-trainato titolo="Corpo su un piano trainato da un corpo appeso"}
$$
a = \frac{m_2 - \mu_d\,m_1}{m_1 + m_2}\,g,
\qquad
T = \frac{(1 + \mu_d)\,m_1 m_2}{m_1 + m_2}\,g
$$
Il corpo $m_1$ scorre su un piano orizzontale con attrito dinamico $\mu_d$, il corpo $m_2$ scende appeso a un filo ideale che passa su una carrucola ideale. Il sistema parte da fermo *solo se* $m_2 > \mu_s\,m_1$.
:::

:::formula{#sistema-come-unico-corpo titolo="Sistema come unico corpo e carrucola mobile"}
$$
a = \frac{F_{\mathrm{est}}}{m_{\mathrm{tot}}},
\qquad
T = \frac{mg}{2}
$$
La prima formula vale per corpi che hanno la stessa accelerazione, con $F_{\mathrm{est}}$ risultante delle sole forze esterne lungo il moto; le forze interne di contatto si ricavano poi dall'equazione di un solo corpo. La seconda dà la tensione all'equilibrio di un filo ideale con un corpo di massa $m$ appeso a una carrucola mobile ideale.
:::

:::formula{#forze-apparenti titolo="Forze apparenti e peso apparente"}
$$
\vec{R} + \vec{F}_{\mathrm{app}} = m\,\vec{a}\,',
\qquad
\vec{F}_{\mathrm{app}} = -\,m\,\vec{A}
$$
$$
N = m\,(g + a),
\qquad
F_{\mathrm{cf}} = m\,\omega^2 r
$$
La prima riga vale in un sistema che trasla con accelerazione $\vec{A}$ rispetto a un sistema inerziale. $N$ è il peso apparente in un ascensore con accelerazione $a$ positiva verso l'alto. La forza centrifuga agisce su un corpo in quiete in un sistema che ruota con $\omega$ costante, a distanza $r$ dall'asse.
:::

## Lavoro, potenza ed energia

Le definizioni e i teoremi sono dimostrati nel capitolo [Lavoro ed energia](/fisica-1/lavoro-ed-energia/teoria).

:::formula{#lavoro-forza-costante titolo="Lavoro di una forza costante"}
$$
L = \vec{F} \cdot \vec{s} = F\, s \cos\theta,
\qquad
L_{\mathrm{tot}} = L_1 + \dots + L_n = \vec{R} \cdot \vec{s}
$$
La forza è costante e lo spostamento $\vec{s}$ è rettilineo; $\theta$ è l'angolo tra forza e spostamento. Il lavoro è positivo per $\theta < 90^\circ$, nullo per forze perpendicolari allo spostamento, negativo per $\theta > 90^\circ$.
:::

:::formula{#lavoro-forza-variabile titolo="Lavoro di una forza variabile"}
$$
L = \int_{x_A}^{x_B} F_x(x)\, dx,
\qquad
L = \int_\gamma \vec{F} \cdot d\vec{r}
$$
La prima formula vale per un moto rettilineo lungo l'asse $x$; il lavoro è l'area con segno sotto il grafico di $F_x(x)$. La seconda vale lungo una traiettoria curva $\gamma$.
:::

:::formula{#lavori-notevoli titolo="Lavoro del peso, della forza elastica e dell'attrito"}
$$
L_P = mg\,(y_A - y_B),
\qquad
L_{\mathrm{el}} = \frac{1}{2} k x_A^2 - \frac{1}{2} k x_B^2,
\qquad
L_{\mathrm{att}} = -\mu_d\, N\, d
$$
L'asse $y$ è verso l'alto e $x$ è l'allungamento della molla. I lavori del peso e della forza elastica dipendono solo dalle posizioni iniziale e finale. Il lavoro dell'attrito dinamico vale con $N$ costante, e $d$ è la distanza percorsa.
:::

:::formula{#potenza titolo="Potenza e rendimento"}
$$
P_m = \frac{L}{\Delta t},
\qquad
P = \frac{dL}{dt} = \vec{F} \cdot \vec{v} = F\,v\cos\theta,
\qquad
\eta = \frac{P_{\mathrm{u}}}{P_{\mathrm{ass}}}
$$
La potenza si misura in watt. Una forza costante applicata a un corpo con velocità costante sviluppa la potenza costante $F v\cos\theta$. Il rendimento di un motore soddisfa $0 < \eta < 1$.
:::

:::formula{#teorema-energia-cinetica titolo="Teorema dell'energia cinetica"}
$$
K = \frac{1}{2} m v^2,
\qquad
L_{\mathrm{tot}} = K_B - K_A
$$
$L_{\mathrm{tot}}$ è il lavoro di *tutte* le forze applicate al punto materiale, conservative e non conservative. Per esempio lo spazio di frenata su un piano orizzontale con attrito dinamico è $d = \dfrac{v_0^2}{2\mu_d\, g}$.
:::

:::formula{#energia-potenziale titolo="Energia potenziale"}
$$
L_{A \to B} = U(A) - U(B),
\qquad
U = m g y,
\qquad
U = \frac{1}{2} k x^2
$$
L'energia potenziale è definita per le forze conservative, a meno di una costante. $U = mgy$ vale vicino alla superficie terrestre con $y$ verso l'alto, e $U = \dfrac{1}{2} k x^2$ vale per una molla ideale con $x$ allungamento.
:::

:::formula{#forza-da-energia-potenziale titolo="Forza come derivata dell'energia potenziale"}
$$
F_x(x) = -\frac{dU}{dx},
\qquad
U(x) = -\int_{x_0}^{x} F_x(s)\,ds
$$
Le formule valgono per una forza conservativa che dipende solo dalla posizione lungo $x$; $x_0$ è il punto in cui si pone $U = 0$.
:::

:::formula{#conservazione-energia-meccanica titolo="Conservazione dell'energia meccanica"}
$$
E = K + U,
\qquad
K_A + U_A = K_B + U_B
$$
L'energia si conserva quando sul corpo agiscono forze conservative ed eventualmente forze che non compiono lavoro, come la reazione di una superficie fissa liscia o la tensione di un filo con un estremo fisso. Per un corpo che scende da fermo di un dislivello $h$ lungo una guida liscia si ha $v = \sqrt{2gh}$, qualunque sia il profilo della guida.
:::

:::formula{#lavoro-forze-non-conservative titolo="Lavoro delle forze non conservative"}
$$
L_{\mathrm{nc}} = E_B - E_A = (K_B + U_B) - (K_A + U_A)
$$
$L_{\mathrm{nc}}$ è il lavoro delle forze non conservative, per esempio l'attrito, e le forze conservative sono contate nell'energia potenziale. Con il solo attrito dinamico $L_{\mathrm{nc}} = -\mu_d N d$ e l'energia meccanica diminuisce.
:::

:::formula{#curve-di-energia-potenziale titolo="Curve di energia potenziale ed equilibrio"}
$$
U(x) \leq E,
\qquad
U'(x_0) = 0,
\qquad
U''(x_0) > 0 \implies \text{equilibrio stabile}
$$
Il moto con energia meccanica $E$ costante avviene solo dove $U(x) \leq E$, e i punti con $U(x) = E$ sono punti di inversione. Le posizioni di equilibrio sono i punti stazionari di $U$; se $U''(x_0) < 0$ l'equilibrio è instabile. Il criterio richiede $U$ derivabile due volte con $U''$ continua.
:::

## Oscillazioni e moto armonico

Le soluzioni delle equazioni del moto sono ricavate nel capitolo [Oscillazioni e moto armonico](/fisica-1/oscillazioni/teoria).

:::formula{#moto-armonico-semplice titolo="Legge oraria del moto armonico"}
$$
x(t) = A\cos(\omega t + \varphi),
\qquad
T = \frac{2\pi}{\omega},
\qquad
f = \frac{1}{T} = \frac{\omega}{2\pi}
$$
$$
v(t) = -A\omega\sin(\omega t + \varphi),
\qquad
a(t) = -A\omega^2\cos(\omega t + \varphi) = -\omega^2 x(t)
$$
$A > 0$ è l'ampiezza, $\omega$ la pulsazione in $\mathrm{rad/s}$, $\varphi$ la fase iniziale. La velocità ha modulo massimo $A\omega$ nella posizione di equilibrio, l'accelerazione ha modulo massimo $A\omega^2$ agli estremi.
:::

:::formula{#velocita-in-funzione-della-posizione titolo="Velocità in funzione della posizione"}
$$
|v| = \omega\sqrt{A^2 - x^2}
$$
La formula vale per $|x| \leq A$ e non richiede di conoscere l'istante. Si ricava da $\dfrac{x^2}{A^2} + \dfrac{v^2}{A^2\omega^2} = 1$.
:::

:::formula{#equazione-del-moto-armonico titolo="Equazione del moto armonico"}
$$
\ddot{x} = -\omega^2 x
\quad\Longrightarrow\quad
x(t) = C_1\cos(\omega t) + C_2\sin(\omega t) = A\cos(\omega t + \varphi)
$$
Ogni sistema la cui equazione del moto ha questa forma, con $\omega > 0$, compie un moto armonico di pulsazione $\omega$. Il periodo non dipende dall'ampiezza.
:::

:::formula{#ampiezza-e-fase titolo="Ampiezza e fase dalle condizioni iniziali"}
$$
A = \sqrt{x_0^2 + \frac{v_0^2}{\omega^2}},
\qquad
\begin{cases}
\cos\varphi = \dfrac{x_0}{A} \\[10pt]
\sin\varphi = -\dfrac{v_0}{A\omega}
\end{cases}
$$
$x_0$ e $v_0$ sono posizione e velocità in $t = 0$, e le due condizioni su $\varphi$ devono valere insieme. Con la sola tangente la fase resterebbe determinata a meno di $\pi$.
:::

:::formula{#oscillatore-massa-molla titolo="Oscillatore massa-molla"}
$$
\omega = \sqrt{\frac{k}{m}},
\qquad
T = 2\pi\sqrt{\frac{m}{k}},
\qquad
\Delta\ell = \frac{mg}{k}
$$
La molla è ideale e non ci sono attriti. Per una molla verticale $\Delta\ell$ è l'allungamento all'equilibrio, e attorno alla nuova posizione di equilibrio il corpo oscilla con la stessa $\omega$. Con più molle si usa la costante equivalente in serie o in parallelo.
:::

:::formula{#energia-oscillatore titolo="Energia del moto armonico"}
$$
K = \frac{1}{2}kA^2\sin^2(\omega t + \varphi),
\qquad
U = \frac{1}{2}kA^2\cos^2(\omega t + \varphi)
$$
$$
E = K + U = \frac{1}{2}kA^2 = \frac{1}{2}m\omega^2 A^2
$$
Le formule valgono per l'oscillatore massa-molla senza attriti, con $U$ nulla nella posizione di equilibrio. L'energia totale è costante e proporzionale al quadrato dell'ampiezza.
:::

:::formula{#piccole-oscillazioni titolo="Piccole oscillazioni attorno a un minimo"}
$$
\omega = \sqrt{\frac{U''(x_e)}{m}}
$$
La formula vale vicino a un punto di equilibrio $x_e$ con $U''(x_e) > 0$, per oscillazioni di ampiezza piccola rispetto alla scala su cui varia $U''$. Vicino a $x_e$ la forza è approssimativamente $-U''(x_e)\,(x - x_e)$, come quella di una molla.
:::

:::formula{#pendolo-semplice titolo="Pendolo semplice"}
$$
\omega = \sqrt{\frac{g}{\ell}},
\qquad
T_0 = 2\pi\sqrt{\frac{\ell}{g}},
\qquad
T = mg\cos\theta + m\,\frac{v^2}{\ell}
$$
Il periodo $T_0$ vale per piccole oscillazioni, con ampiezza fino a una decina di gradi e filo inestensibile di massa trascurabile; per ampiezza $\theta_0$ maggiore $T_0 \approx 2\pi\sqrt{\dfrac{\ell}{g}}\left(1 + \dfrac{\theta_0^2}{16}\right)$. La terza formula dà la tensione del filo quando forma l'angolo $\theta$ con la verticale. In un ascensore con accelerazione $a$ verso l'alto si sostituisce $g$ con $g + a$.
:::

:::formula{#pendolo-fisico-e-di-torsione titolo="Pendolo fisico e pendolo di torsione"}
$$
T = 2\pi\sqrt{\frac{I}{mgd}},
\qquad
T = 2\pi\sqrt{\frac{I}{\kappa}}
$$
Nel pendolo fisico $I$ è il momento d'inerzia rispetto all'asse di sospensione e $d$ la distanza del centro di massa dall'asse, per piccole oscillazioni. Nel pendolo di torsione $\kappa$ è la costante di torsione del filo, e la formula vale finché il momento di richiamo è proporzionale all'angolo.
:::

:::formula{#oscillatore-smorzato titolo="Oscillatore smorzato"}
$$
m\ddot{x} + b\dot{x} + kx = 0,
\qquad
\ddot{x} + 2\gamma\dot{x} + \omega_0^2 x = 0
$$
$$
\omega_0 = \sqrt{\frac{k}{m}},
\qquad
\gamma = \frac{b}{2m}
$$
La forza viscosa è $-b\,\vec{v}$, con $b > 0$. $\omega_0$ è la pulsazione propria del sistema senza smorzamento, $\gamma$ la costante di smorzamento in $\mathrm{s^{-1}}$.
:::

:::formula{#regimi-di-smorzamento titolo="Regimi dell'oscillatore smorzato"}
$$
\begin{aligned}
&\gamma < \omega_0: && x(t) = A_0\,e^{-\gamma t}\cos(\omega_s t + \varphi), \quad \omega_s = \sqrt{\omega_0^2 - \gamma^2} \\[4pt]
&\gamma = \omega_0: && x(t) = (C_1 + C_2 t)\,e^{-\gamma t} \\[4pt]
&\gamma > \omega_0: && x(t) = C_1 e^{r_1 t} + C_2 e^{r_2 t}, \quad r_{1,2} = -\gamma \pm \sqrt{\gamma^2 - \omega_0^2}
\end{aligned}
$$
Solo nel primo caso il corpo oscilla, con pulsazione $\omega_s < \omega_0$. Lo smorzamento critico corrisponde a $b = 2\sqrt{km}$ e dà il ritorno all'equilibrio più rapido tra i moti senza oscillazioni.
:::

:::formula{#energia-e-fattore-di-qualita titolo="Energia e fattore di qualità"}
$$
E(t) \approx \frac{1}{2}kA_0^2\,e^{-2\gamma t},
\qquad
Q = \frac{\omega_0}{2\gamma},
\qquad
\gamma = \frac{1}{\Delta t}\ln\frac{A_1}{A_2}
$$
Le formule valgono per smorzamento debole con $\gamma$ molto minore di $\omega_0$. La terza ricava $\gamma$ da due ampiezze $A_1$ e $A_2$ misurate a distanza $\Delta t$.
:::

:::formula{#oscillatore-forzato titolo="Oscillatore forzato e regime stazionario"}
$$
\ddot{x} + 2\gamma\dot{x} + \omega_0^2 x = \frac{F_0}{m}\cos(\Omega t)
$$
$$
x(t) = A(\Omega)\cos(\Omega t - \delta),
\qquad
A(\Omega) = \frac{F_0}{m\sqrt{(\omega_0^2 - \Omega^2)^2 + 4\gamma^2\Omega^2}}
$$
Il regime stazionario si raggiunge dopo il transitorio per $\gamma > 0$ e non dipende dalle condizioni iniziali. Lo sfasamento $\delta \in (0, \pi)$ soddisfa $\tan\delta = \dfrac{2\gamma\Omega}{\omega_0^2 - \Omega^2}$.
:::

:::formula{#risonanza titolo="Risonanza"}
$$
\Omega_r = \sqrt{\omega_0^2 - 2\gamma^2},
\qquad
A_{\mathrm{max}} = \frac{F_0}{2m\gamma\sqrt{\omega_0^2 - \gamma^2}} \approx Q\,\frac{F_0}{k}
$$
L'ampiezza ha un massimo *solo se* $\gamma < \dfrac{\omega_0}{\sqrt{2}}$. L'approssimazione con il fattore di qualità vale per smorzamento piccolo, dove $\Omega_r \approx \omega_0$.
:::

## Quantità di moto, centro di massa e urti

Le dimostrazioni e gli esempi si trovano nel capitolo [Sistemi di punti, quantità di moto e urti](/fisica-1/quantita-di-moto/teoria).

:::formula{#quantita-di-moto titolo="Quantità di moto"}
$$
\vec{p} = m\,\vec{v},
\qquad
\vec{F} = \frac{d\vec{p}}{dt}
$$
$\vec{F}$ è la risultante delle forze sul punto materiale, in un sistema inerziale. Per massa costante la seconda formula coincide con $\vec{F} = m\,\vec{a}$.
:::

:::formula{#impulso titolo="Impulso e forza media"}
$$
\vec{J} = \int_{t_1}^{t_2} \vec{F}(t)\,dt = \vec{p}(t_2) - \vec{p}(t_1),
\qquad
\vec{F}_m = \frac{\Delta\vec{p}}{\Delta t}
$$
$\vec{F}$ è la risultante delle forze applicate. In un rimbalzo la variazione $\Delta\vec{p}$ si calcola con i segni delle velocità; per una palla che torna indietro con velocità di modulo invariato $|\Delta p| = 2mv$.
:::

:::formula{#centro-di-massa titolo="Centro di massa"}
$$
\vec{r}_{\mathrm{cm}} = \frac{1}{M} \sum_{i=1}^{N} m_i\,\vec{r}_i,
\qquad
x_{\mathrm{cm}} = \frac{\sum_i m_i x_i}{M},
\qquad
\vec{r}_{\mathrm{cm}} = \frac{1}{M} \int \vec{r}\,dm
$$
$M$ è la massa totale. Per un corpo omogeneo con un centro o un asse di simmetria il centro di massa sta su di esso. Per un'asta con densità lineare $\lambda(x)$ si ha $x_{\mathrm{cm}} = \dfrac{\int_0^L x\,\lambda(x)\,dx}{\int_0^L \lambda(x)\,dx}$.
:::

:::formula{#centro-di-massa-composto titolo="Centro di massa di un corpo composto"}
$$
\vec{r}_{\mathrm{cm}} = \frac{M_1\,\vec{r}_1 + M_2\,\vec{r}_2}{M_1 + M_2}
$$
Ogni parte si tratta come un punto materiale posto nel proprio centro di massa $\vec{r}_1$, $\vec{r}_2$. Un foro in un corpo omogeneo si tratta come una parte di massa negativa.
:::

:::formula{#moto-del-centro-di-massa titolo="Moto del centro di massa"}
$$
\vec{P} = \sum_i m_i\,\vec{v}_i = M\,\vec{v}_{\mathrm{cm}},
\qquad
M\,\vec{a}_{\mathrm{cm}} = \frac{d\vec{P}}{dt} = \vec{F}_{\mathrm{est}}
$$
$\vec{F}_{\mathrm{est}}$ è la risultante delle sole forze esterne, perché le forze interne si annullano a coppie per il terzo principio. Il centro di massa si muove come un punto di massa $M$ soggetto a $\vec{F}_{\mathrm{est}}$.
:::

:::formula{#conservazione-quantita-di-moto titolo="Conservazione della quantità di moto"}
$$
\vec{P} = \sum_i m_i\,\vec{v}_i = \text{costante},
\qquad
m_1\,\Delta x_1 + m_2\,\Delta x_2 = 0
$$
La conservazione vale quando la risultante delle forze esterne è nulla; se è nulla solo la componente $x$, si conserva solo $P_x$. La seconda formula vale per due corpi inizialmente fermi in un sistema isolato lungo $x$, come una persona che cammina su una barca, perché il centro di massa resta fermo.
:::

:::formula{#urto-completamente-anelastico titolo="Urto completamente anelastico"}
$$
V = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2},
\qquad
\Delta K = -\frac{1}{2}\,\frac{m_1 m_2}{m_1 + m_2}\,(v_1 - v_2)^2
$$
I due corpi restano uniti dopo l'urto, in una dimensione, e le forze esterne sono trascurabili durante l'urto. La quantità di moto si conserva, mentre l'energia cinetica diminuisce di $|\Delta K|$.
:::

:::formula{#pendolo-balistico titolo="Pendolo balistico"}
$$
v = \frac{m + M}{m}\,\sqrt{2 g h}
$$
Il proiettile di massa $m$ si conficca nel blocco di massa $M$, fermo e appeso a fili inestensibili, che sale fino all'altezza $h$. Durante l'urto si conserva la quantità di moto; nella salita successiva si conserva l'energia meccanica.
:::

:::formula{#urto-elastico titolo="Urto elastico in una dimensione"}
$$
v_1' = \frac{(m_1 - m_2)\,v_1 + 2 m_2 v_2}{m_1 + m_2},
\qquad
v_2' = \frac{(m_2 - m_1)\,v_2 + 2 m_1 v_1}{m_1 + m_2}
$$
Si conservano quantità di moto ed energia cinetica, e le velocità sono componenti con segno lungo la retta dell'urto. Ne segue $v_1' - v_2' = -(v_1 - v_2)$. Con $v_2 = 0$ e masse uguali i corpi si scambiano le velocità.
:::

:::formula{#coefficiente-di-restituzione titolo="Coefficiente di restituzione"}
$$
e = -\frac{v_2' - v_1'}{v_2 - v_1},
\qquad
e = \sqrt{\frac{h'}{h}}
$$
Vale $e = 1$ negli urti elastici, $e = 0$ in quelli completamente anelastici e $0 < e < 1$ negli altri. La seconda formula vale per una pallina che cade da $h$ su un pavimento fermo e rimbalza fino a $h'$, con resistenza dell'aria trascurabile.
:::

:::formula{#urti-nel-piano titolo="Urti nel piano"}
$$
\begin{cases}
m_1 v_{1x} + m_2 v_{2x} = m_1 v_{1x}' + m_2 v_{2x}' \\[6pt]
m_1 v_{1y} + m_2 v_{2y} = m_1 v_{1y}' + m_2 v_{2y}'
\end{cases}
$$
Le due componenti della quantità di moto si conservano insieme, con forze esterne trascurabili durante l'urto. In un urto elastico tra masse uguali con il bersaglio fermo vale inoltre $\vec{v}_1\,' \cdot \vec{v}_2\,' = 0$, cioè i corpi si allontanano lungo direzioni perpendicolari.
:::

:::formula{#teorema-di-konig titolo="Teorema di König"}
$$
K = \frac{1}{2}\,M v_{\mathrm{cm}}^2 + K^{*},
\qquad
K^{*} = \frac{1}{2}\,\mu\,(v_1 - v_2)^2,
\qquad
\mu = \frac{m_1 m_2}{m_1 + m_2}
$$
$K^{*}$ è l'energia cinetica nel sistema del centro di massa; la seconda formula vale per due corpi in moto lungo una retta. In un urto con forze esterne trascurabili il termine $\dfrac{1}{2} M v_{\mathrm{cm}}^2$ non cambia, quindi l'energia che si può dissipare è al più $K^{*}$.
:::

:::formula{#sistemi-a-massa-variabile titolo="Sistemi a massa variabile ed equazione del razzo"}
$$
M\,\frac{d\vec{v}}{dt} = \vec{F}_{\mathrm{est}} + \vec{u}\,\frac{dM}{dt},
\qquad
v_f = v_i + u \ln \frac{M_i}{M_f}
$$
$\vec{u}$ è la velocità della massa acquistata o espulsa *relativa* al corpo. L'equazione del razzo vale senza forze esterne, con gas espulsi all'indietro con velocità relativa di modulo $u$ costante; per un lancio verticale si aggiunge $-g\,t$, con $t$ durata della combustione.
:::

## Dinamica del corpo rigido

Le definizioni e le dimostrazioni sono nel capitolo [Dinamica del corpo rigido](/fisica-1/corpo-rigido/teoria).

:::formula{#grandezze-angolari titolo="Velocità e accelerazione dei punti del corpo"}
$$
v = \omega r,
\qquad
a_t = \alpha r,
\qquad
a_c = \omega^2 r = \frac{v^2}{r}
$$
Le formule valgono per un corpo rigido che ruota attorno a un asse fisso, con $r$ distanza del punto dall'asse. Tutti i punti hanno la stessa $\omega$ e la stessa $\alpha$; con $\alpha$ costante valgono le leggi del moto circolare uniformemente accelerato.
:::

:::formula{#momento-di-una-forza titolo="Momento di una forza"}
$$
\vec{\tau}_O = \vec{r} \times \vec{F},
\qquad
\tau_O = rF\sin\varphi = F b,
\qquad
\tau_z = x F_y - y F_x
$$
$\vec{r} = \overrightarrow{OP}$ va dal polo $O$ al punto di applicazione e $b$ è il braccio, cioè la distanza di $O$ dalla retta d'azione. Per forze in un piano perpendicolare all'asse $z$ si ha $\tau_z = \pm F b$, positivo quando la forza tende a far ruotare il corpo in verso antiorario.
:::

:::formula{#momento-angolare titolo="Momento angolare"}
$$
\vec{L}_O = \vec{r} \times m\vec{v},
\qquad
L_z = I\omega
$$
La seconda formula vale per un corpo rigido che ruota attorno all'asse fisso $z$, con $I$ momento d'inerzia rispetto a quell'asse. Per un punto in moto circolare di raggio $r$ si ha $L_z = m r^2 \omega$.
:::

:::formula{#momento-di-inerzia titolo="Momento d'inerzia"}
$$
I = \sum_i m_i R_i^2,
\qquad
I = \int R^2\,dm
$$
$R_i$ è la distanza del punto $i$ dall'asse. Il momento d'inerzia dipende dall'asse ed è additivo, cioè quello di un corpo composto è la somma di quelli delle parti rispetto allo stesso asse.
:::

:::formula{#momenti-di-inerzia-notevoli titolo="Momenti d'inerzia di corpi omogenei"}
| Corpo e asse | $I$ |
| --- | --- |
| asta di lunghezza $L$, asse per il centro | $\dfrac{1}{12} M L^2$ |
| asta di lunghezza $L$, asse per un estremo | $\dfrac{1}{3} M L^2$ |
| anello o cilindro cavo sottile, asse di simmetria | $M R^2$ |
| disco o cilindro pieno, asse di simmetria | $\dfrac{1}{2} M R^2$ |
| sfera piena, asse per il centro | $\dfrac{2}{5} M R^2$ |

Gli assi delle aste sono perpendicolari all'asta. Per un asse diverso si usa il teorema di Steiner.
:::

:::formula{#teorema-di-steiner titolo="Teorema di Steiner"}
$$
I = I_C + M d^2
$$
$I_C$ è il momento d'inerzia rispetto a un asse per il centro di massa, $I$ quello rispetto a un asse *parallelo* a distanza $d$. Per esempio per l'asta $\dfrac{1}{12} M L^2 + M\left(\dfrac{L}{2}\right)^2 = \dfrac{1}{3} M L^2$.
:::

:::formula{#equazione-rotazione-asse-fisso titolo="Seconda equazione cardinale e rotazione attorno a un asse fisso"}
$$
\frac{d\vec{L}_O}{dt} = \vec{\tau}_O^{(e)},
\qquad
\tau_z = I\alpha
$$
$\vec{\tau}_O^{(e)}$ è il momento delle sole forze esterne, con polo $O$ fisso o nel centro di massa. Nella seconda formula $I$ è riferito all'asse fisso e $\tau_z$ è il momento assiale delle forze esterne; le reazioni di un asse privo di attrito hanno momento assiale nullo. Nei problemi con fili e carrucole massive si aggiunge il vincolo $a = \alpha R$ se il filo non slitta.
:::

:::formula{#energia-cinetica-di-rotazione titolo="Energia, lavoro e potenza nelle rotazioni"}
$$
K = \frac{1}{2} I\omega^2,
\qquad
W = \int_{\theta_1}^{\theta_2} \tau_z\,d\theta = \frac{1}{2} I\omega_2^2 - \frac{1}{2} I\omega_1^2,
\qquad
P = \tau_z\,\omega
$$
Le formule valgono per la rotazione attorno a un asse fisso; il lavoro è indicato con $W$ per distinguerlo dal momento angolare $L$. L'uguaglianza tra lavoro e variazione di energia cinetica richiede un asse privo di attrito.
:::

:::formula{#energia-corpo-rigido titolo="Energia cinetica e potenziale di un corpo rigido"}
$$
K = \frac{1}{2} M v_C^2 + \frac{1}{2} I_C\,\omega^2,
\qquad
U = M g z_C
$$
$I_C$ è riferito a un asse per il centro di massa $C$ di direzione fissa, e $z_C$ è la quota di $C$. Se le forze che compiono lavoro sono conservative, $K + U$ si conserva; per un'asta che cade da ferma dalla verticale ruotando attorno a un estremo, nella posizione orizzontale $\omega = \sqrt{\dfrac{3g}{L}}$.
:::

:::formula{#conservazione-momento-angolare titolo="Conservazione del momento angolare"}
$$
I_1\,\omega_1 = I_2\,\omega_2
$$
La formula vale se il momento assiale delle forze esterne è nullo e il sistema ruota rigidamente attorno all'asse in ogni istante, anche quando il momento d'inerzia cambia, come per una pattinatrice che chiude le braccia. L'energia cinetica di rotazione in generale cambia.
:::

:::formula{#urti-con-asse-fisso titolo="Urto con un corpo vincolato a un asse"}
$$
m v_0 d = \left( I_O + m d^2 \right) \omega
$$
Il proiettile di massa $m$ si conficca nel corpo fermo, incernierato senza attrito, con velocità $v_0$ perpendicolare all'asse e retta d'azione a distanza $d$ dall'asse. Si conserva il momento angolare rispetto all'asse; la quantità di moto cambia per la reazione impulsiva dell'asse.
:::

:::formula{#rotolamento-puro titolo="Rotolamento puro"}
$$
v_C = \omega R,
\qquad
a_C = \alpha R,
\qquad
K = \frac{1}{2}\left( M + \frac{I_C}{R^2} \right) v_C^2
$$
Il corpo di raggio $R$ rotola senza strisciare, quindi il punto di contatto ha velocità nulla. L'attrito statico agisce nel punto di contatto e non compie lavoro.
:::

:::formula{#rotolamento-piano-inclinato titolo="Rotolamento lungo un piano inclinato"}
$$
a_C = \frac{g\sin\beta}{1 + k},
\qquad
f = \frac{k}{1 + k}\,M g\sin\beta,
\qquad
v_C = \sqrt{\frac{2 g h}{1 + k}}
$$
Il corpo ha $I_C = k M R^2$, con $k = \dfrac{2}{5}$ per la sfera piena, $\dfrac{1}{2}$ per il cilindro pieno, $1$ per l'anello, e parte da fermo su un piano inclinato di $\beta$. Il rotolamento puro è possibile *solo se* $\mu_s \geq \dfrac{k}{1 + k}\tan\beta$; $v_C$ è la velocità dopo un dislivello $h$.
:::

:::formula{#condizioni-di-equilibrio titolo="Equilibrio statico del corpo rigido"}
$$
\begin{cases}
\vec{R}^{(e)} = \vec{0} \\[4pt]
\vec{\tau}_O^{(e)} = \vec{0}
\end{cases}
$$
$$
F_1\,b_1 = F_2\,b_2
$$
Le due condizioni devono valere insieme; con forze in un piano diventano $R_x = 0$, $R_y = 0$, $\tau_z = 0$. Se la risultante è nulla, il momento ha lo stesso valore per ogni polo, perciò si può prendere il polo nel punto in cui passano le forze incognite. La seconda formula è la condizione di equilibrio di una leva, con $b_1$ e $b_2$ bracci delle due forze rispetto al fulcro.
:::

## Gravitazione

Le leggi e le loro conseguenze sono ricavate nel capitolo [Gravitazione](/fisica-1/gravitazione/teoria).

:::formula{#legge-di-gravitazione-universale titolo="Legge di gravitazione universale"}
$$
F = G\,\frac{m_1 m_2}{r^2},
\qquad
G = 6{,}67 \cdot 10^{-11}\,\mathrm{N\cdot m^2/kg^2}
$$
La formula vale per masse puntiformi e per corpi a simmetria sferica, con $r$ distanza tra i centri. La forza è attrattiva e diretta lungo la congiungente; con più masse le forze si sommano come vettori.
:::

:::formula{#campo-gravitazionale titolo="Campo gravitazionale"}
$$
\vec{g} = \frac{\vec{F}}{m},
\qquad
g = \frac{GM}{r^2}
$$
La seconda formula dà il modulo del campo di una massa puntiforme o sferica $M$ a distanza $r$ dal centro, fuori dalla massa. Il campo è diretto verso $M$, e il campo di più masse è la somma vettoriale dei campi.
:::

:::formula{#energia-potenziale-gravitazionale titolo="Energia potenziale e potenziale gravitazionale"}
$$
U(r) = -\,\frac{G M m}{r},
\qquad
V(r) = -\,\frac{GM}{r},
\qquad
L_{A \to B} = G M m \left( \frac{1}{r_B} - \frac{1}{r_A} \right)
$$
Lo zero dell'energia potenziale è a distanza infinita, quindi $U < 0$ per ogni $r$ finito. Per un sistema di più masse $U = -\displaystyle\sum_{i < j} \frac{G m_i m_j}{r_{ij}}$, con una sola coppia per ogni termine.
:::

:::formula{#guscio-e-sfera titolo="Guscio sferico e sfera omogenea"}
$$
g_{\mathrm{guscio}}(r) =
\begin{cases}
\dfrac{GM}{r^2} & \text{se } r > R \\[10pt]
0 & \text{se } r < R
\end{cases}
\qquad
g_{\mathrm{sfera}}(r) =
\begin{cases}
\dfrac{GM}{r^2} & \text{se } r \geq R \\[10pt]
\dfrac{GM}{R^3}\,r & \text{se } r \leq R
\end{cases}
$$
Il guscio e la sfera sono omogenei, di massa $M$ e raggio $R$. Fuori dal corpo il campo è quello di una massa puntiforme posta nel centro.
:::

:::formula{#variazione-di-g titolo="Accelerazione di gravità alla superficie, in quota e in profondità"}
$$
g_0 = \frac{GM}{R^2},
\qquad
g(h) = g_0\,\frac{R^2}{(R + h)^2} \approx g_0 \left( 1 - \frac{2h}{R} \right),
\qquad
g(d) = g_0 \left( 1 - \frac{d}{R} \right)
$$
Per la Terra $M_T = 5{,}97 \cdot 10^{24}\,\mathrm{kg}$, $R_T = 6{,}37 \cdot 10^6\,\mathrm{m}$ e $g_0 = 9{,}81\,\mathrm{m/s^2}$, e vale $GM = g_0 R^2$. L'approssimazione in quota richiede $h$ molto minore di $R$; la formula in profondità vale per un pianeta omogeneo.
:::

:::formula{#orbita-circolare titolo="Velocità e periodo in orbita circolare"}
$$
v = \sqrt{\frac{GM}{r}},
\qquad
T = 2\pi\,\sqrt{\frac{r^3}{GM}},
\qquad
\frac{T^2}{r^3} = \frac{4\pi^2}{GM}
$$
Il satellite percorre un'orbita circolare di raggio $r$, misurato dal centro del pianeta, e la massa $M$ del corpo centrale è molto maggiore di quella del satellite. La terza formula è la terza legge di Keplero, che per un'orbita ellittica vale con il semiasse maggiore al posto di $r$. Il satellite geostazionario ha $r = 4{,}21 \cdot 10^7\,\mathrm{m}$.
:::

:::formula{#energia-di-un-satellite titolo="Energia di un satellite in orbita circolare"}
$$
K = \frac{GMm}{2r},
\qquad
U = -\,\frac{GMm}{r},
\qquad
E = -\,\frac{GMm}{2r}
$$
Le formule valgono in orbita circolare, con lo zero di $U$ all'infinito. Il lavoro necessario per portare il satellite dall'orbita $r_1$ all'orbita $r_2 > r_1$ è $\dfrac{GMm}{2}\left(\dfrac{1}{r_1} - \dfrac{1}{r_2}\right)$.
:::

:::formula{#velocita-di-fuga titolo="Velocità di fuga e moti legati"}
$$
v_f = \sqrt{\frac{2GM}{R}} = \sqrt{2 g_0 R},
\qquad
r_{\mathrm{max}} = \frac{GMm}{|E|}
$$
La velocità di fuga si riferisce alla superficie di un pianeta di raggio $R$, trascurando l'atmosfera e la rotazione. Il moto è legato se $E = \dfrac{1}{2} m v^2 - \dfrac{GMm}{r} < 0$, e in quel caso la distanza dal centro non supera $r_{\mathrm{max}}$; per $E \geq 0$ il corpo arriva all'infinito con velocità $\sqrt{\dfrac{2E}{m}}$.
:::

:::formula{#seconda-legge-di-keplero titolo="Seconda legge di Keplero"}
$$
\frac{dA}{dt} = \frac{|\vec{L}|}{2m} = \text{costante},
\qquad
r_p v_p = r_a v_a
$$
La velocità areolare è costante perché la forza gravitazionale è centrale e il momento angolare rispetto al centro di attrazione si conserva. La seconda formula lega distanze e velocità al perielio e all'afelio, dove la velocità è perpendicolare al raggio.
:::

:::attenzione
La formula $U = mgh$ vale solo per quote piccole rispetto al raggio del pianeta. Per portare un corpo dalla superficie terrestre alla quota $h = R_T$ serve $\Delta U = GM_T m\left(\dfrac{1}{R_T} - \dfrac{1}{2R_T}\right) = \dfrac{1}{2}\,m g_0 R_T$, cioè metà del valore $m g_0 R_T$ dato da $mgh$.
:::

## Fluidi in quiete

Le leggi della statica dei fluidi sono dimostrate nel capitolo [Meccanica dei fluidi](/fisica-1/fluidi/teoria).

:::formula{#densita-e-pressione titolo="Densità, pressione e unità"}
$$
\rho = \frac{m}{V},
\qquad
p = \frac{F_\perp}{A}
$$
$$
1\,\mathrm{atm} = 1{,}013 \cdot 10^5\,\mathrm{Pa} = 760\,\mathrm{mmHg},
\qquad
1\,\mathrm{bar} = 10^5\,\mathrm{Pa}
$$
$F_\perp$ è la componente della forza perpendicolare alla superficie di area $A$. Per l'acqua $\rho = 1{,}00 \cdot 10^3\,\mathrm{kg/m^3}$, per il mercurio $13{,}6 \cdot 10^3\,\mathrm{kg/m^3}$.
:::

:::formula{#legge-di-stevino titolo="Legge di Stevino e pressione relativa"}
$$
p_2 = p_1 + \rho g\,(y_1 - y_2),
\qquad
p = p_0 + \rho g h,
\qquad
p - p_0 = \rho g h
$$
La legge vale per un fluido incomprimibile in quiete, con $y$ verso l'alto e $h$ profondità sotto la superficie libera alla pressione $p_0$. Punti dello stesso fluido alla stessa quota hanno la stessa pressione. La differenza $p - p_0$ è la pressione relativa, misurata dai manometri; su una parete con l'aria dall'altro lato la forza risultante si calcola con la sola pressione relativa.
:::

:::formula{#tubo-a-u-e-barometro titolo="Tubo a U e barometro"}
$$
\rho_1 h_1 = \rho_2 h_2,
\qquad
p_0 = \rho_{\mathrm{Hg}}\, g h
$$
Nel tubo a U con due liquidi immiscibili $h_1$ e $h_2$ sono le altezze delle colonne sopra la superficie di separazione. Nel barometro di Torricelli $h$ è l'altezza della colonna di mercurio sopra la superficie della vaschetta, circa $760\,\mathrm{mm}$ a livello del mare.
:::

:::formula{#forza-su-una-parete titolo="Forza su una parete verticale"}
$$
F = \frac{1}{2}\,\rho g w H^2
$$
La parete è rettangolare, di larghezza $w$, bagnata dal liquido fino all'altezza $H$, con l'aria dall'altro lato. La forza si ottiene integrando la pressione relativa $\rho g z$ sulle strisce orizzontali alla profondità $z$.
:::

:::formula{#torchio-idraulico titolo="Principio di Pascal e torchio idraulico"}
$$
F_2 = \frac{A_2}{A_1}\, F_1,
\qquad
s_2 = \frac{A_1}{A_2}\, s_1
$$
Il liquido è incomprimibile e i pistoni, di massa trascurabile, sono alla stessa quota. La forza è moltiplicata per il rapporto tra le aree e lo spostamento è diviso per lo stesso rapporto, quindi $F_1 s_1 = F_2 s_2$.
:::

:::formula{#principio-di-archimede titolo="Principio di Archimede e peso apparente"}
$$
S = \rho_f\, V_{\mathrm{imm}}\, g,
\qquad
P_{\mathrm{app}} = P - S = (\rho_c - \rho_f)\, V g
$$
La spinta $S$ è verticale verso l'alto, con $\rho_f$ densità del fluido e $V_{\mathrm{imm}}$ volume immerso. Il peso apparente vale per un corpo omogeneo di densità $\rho_c$ completamente immerso, e da esso si ricava $\dfrac{\rho_c}{\rho_f} = \dfrac{P}{P - P_{\mathrm{app}}}$.
:::

:::formula{#condizione-di-galleggiamento titolo="Galleggiamento"}
$$
\frac{V_{\mathrm{imm}}}{V} = \frac{\rho_c}{\rho_f}
$$
La formula vale per un corpo omogeneo che galleggia, cioè con $\rho_c < \rho_f$, trascurando le forze dell'aria. Se $\rho_c = \rho_f$ il corpo immerso è in equilibrio a ogni profondità, se $\rho_c > \rho_f$ affonda.
:::

## Fluidi in moto

Il capitolo [Meccanica dei fluidi](/fisica-1/fluidi/teoria) contiene anche la dinamica dei fluidi, con il teorema di Bernoulli e le sue applicazioni.

:::formula{#equazione-di-continuita titolo="Portata ed equazione di continuità"}
$$
Q = \frac{dV}{dt} = A v,
\qquad
A_1 v_1 = A_2 v_2
$$
La velocità è supposta uniforme sulla sezione di area $A$, e l'equazione di continuità vale per un fluido incomprimibile in moto stazionario. Se il diametro di un tubo circolare si dimezza, la velocità quadruplica.
:::

:::formula{#teorema-di-bernoulli titolo="Teorema di Bernoulli"}
$$
p_1 + \frac{1}{2}\rho v_1^2 + \rho g y_1 = p_2 + \frac{1}{2}\rho v_2^2 + \rho g y_2
$$
Il teorema vale per un **fluido ideale**, cioè incomprimibile, senza viscosità e in moto stazionario, per due sezioni dello stesso condotto o due punti della stessa linea di corrente. Con $v_1 = v_2 = 0$ si ritrova la legge di Stevino.
:::

:::formula{#teorema-di-torricelli titolo="Teorema di Torricelli"}
$$
v = \sqrt{2 g h},
\qquad
Q = a\sqrt{2gh}
$$
Il serbatoio è aperto e il foro, di area $a$ molto minore di quella della superficie libera, si trova alla profondità $h$ sotto la superficie; il liquido è ideale. Il getto prosegue con il moto del proiettile.
:::

:::formula{#tubo-di-venturi titolo="Tubo di Venturi"}
$$
v_1 = \sqrt{\frac{2\,\Delta p}{\rho\left( \dfrac{A_1^2}{A_2^2} - 1 \right)}},
\qquad
\Delta p = \rho g\, \Delta h
$$
Il condotto è orizzontale, di sezione $A_1$ con una strozzatura $A_2 < A_1$, percorso da un fluido ideale; $\Delta p = p_1 - p_2$. La seconda formula vale quando la pressione si legge con due tubi verticali aperti riempiti dallo stesso liquido, con dislivello $\Delta h$.
:::

:::formula{#viscosita-e-poiseuille titolo="Viscosità, legge di Poiseuille e numero di Reynolds"}
$$
F = \eta\, A\, \frac{v}{d},
\qquad
Q = \frac{\pi R^4\, \Delta p}{8\, \eta L},
\qquad
\mathrm{Re} = \frac{\rho\, v D}{\eta}
$$
Le formule valgono per fluidi newtoniani, con $\eta$ in $\mathrm{Pa\cdot s}$. La legge di Poiseuille vale per un tubo cilindrico orizzontale di raggio $R$ e lunghezza $L$ in moto laminare stazionario, cioè per $\mathrm{Re}$ minore di circa $2000$.
:::

## Temperatura, calore e calorimetria

Le definizioni e le leggi sperimentali sono nel capitolo [Temperatura, calore e primo principio della termodinamica](/fisica-1/primo-principio/teoria).

:::formula{#scale-termometriche titolo="Scale termometriche"}
$$
T = t_C + 273{,}15,
\qquad
t_F = \frac{9}{5}\,t_C + 32,
\qquad
\Delta T = \Delta t_C
$$
$T$ è in kelvin, $t_C$ in gradi Celsius, $t_F$ in gradi Fahrenheit. Nelle formule che contengono $T$, come l'equazione di stato dei gas, la temperatura va in kelvin; nelle formule con $\Delta T$ le due scale danno lo stesso valore.
:::

:::formula{#dilatazione-termica titolo="Dilatazione termica"}
$$
\Delta L = \alpha\, L_0\, \Delta T,
\qquad
\Delta S = 2\alpha\, S_0\, \Delta T,
\qquad
\Delta V = \beta\, V_0\, \Delta T, \quad \beta = 3\alpha
$$
Le formule valgono per piccole variazioni di temperatura e per solidi omogenei e isotropi. Un foro si dilata come se fosse pieno dello stesso materiale. Un liquido che riempie un recipiente fino all'orlo, scaldato insieme a esso, trabocca del volume $(\beta_{\ell} - 3\alpha_r)\,V_0\,\Delta T$.
:::

:::formula{#calore-specifico titolo="Capacità termica e calore specifico"}
$$
C = \frac{Q}{\Delta T},
\qquad
Q = m\,c\,\Delta T,
\qquad
Q = m \int_{T_i}^{T_f} c(T)\, dT
$$
$Q$ è il calore assorbito, positivo se la temperatura aumenta, e non ci sono cambiamenti di stato. La seconda formula vale con $c$ costante; per l'acqua $c_a = 4186\,\mathrm{J/(kg\cdot K)}$.
:::

:::formula{#temperatura-di-equilibrio titolo="Temperatura di equilibrio"}
$$
\sum_i Q_i = 0,
\qquad
T_e = \frac{m_1 c_1 T_1 + m_2 c_2 T_2}{m_1 c_1 + m_2 c_2}
$$
Il sistema è termicamente isolato e i $Q_i$ sono i calori assorbiti dai singoli corpi. La seconda formula vale per due corpi senza cambiamenti di stato; un calorimetro reale si aggiunge come una massa d'acqua pari al suo equivalente in acqua $m_e$.
:::

:::formula{#calore-latente titolo="Calore latente"}
$$
Q = \pm\, m\,\lambda
$$
$$
\lambda_f = 3{,}33 \cdot 10^5\,\mathrm{J/kg},
\qquad
\lambda_v = 2{,}26 \cdot 10^6\,\mathrm{J/kg}
$$
Il segno è positivo per fusione e vaporizzazione, negativo per solidificazione e condensazione. Durante il cambiamento di stato, a pressione costante, la temperatura resta costante. I valori sono quelli dell'acqua a $1\,\mathrm{atm}$. Nei bilanci con cambiamenti di stato si controlla prima se il calore disponibile basta a completare la fusione.
:::

:::formula{#propagazione-del-calore titolo="Conduzione e irraggiamento"}
$$
P = \frac{Q}{\Delta t} = k\,A\,\frac{T_1 - T_2}{d},
\qquad
P = e\,\sigma\,A\,T^4
$$
La legge di Fourier vale per una parete piana di spessore $d$ e area $A$ in regime stazionario, con $k$ conducibilità termica in $\mathrm{W/(m\cdot K)}$. La legge di Stefan-Boltzmann dà la potenza emessa da un corpo alla temperatura assoluta $T$, con $\sigma = 5{,}67 \cdot 10^{-8}\,\mathrm{W/(m^2\cdot K^4)}$ ed emissività $0 \leq e \leq 1$.
:::

## Gas perfetto e primo principio della termodinamica

Il primo principio e le trasformazioni del gas perfetto sono trattati nel capitolo [Temperatura, calore e primo principio della termodinamica](/fisica-1/primo-principio/teoria).

:::formula{#equazione-di-stato titolo="Equazione di stato del gas perfetto"}
$$
pV = nRT,
\qquad
pV = N k_B T,
\qquad
n = \frac{m}{M}
$$
$$
R = 8{,}314\,\mathrm{J/(mol\cdot K)},
\qquad
N_A = 6{,}022 \cdot 10^{23}\,\mathrm{mol^{-1}},
\qquad
k_B = \frac{R}{N_A} = 1{,}38 \cdot 10^{-23}\,\mathrm{J/K}
$$
L'equazione vale negli stati di equilibrio, con $p$ in pascal, $V$ in metri cubi e $T$ in kelvin; $M$ è la massa molare. A $0\,^\circ\mathrm{C}$ e $1\,\mathrm{atm}$ una mole occupa $22{,}4\,\mathrm{L}$.
:::

:::formula{#leggi-dei-gas titolo="Leggi di Boyle e di Gay-Lussac"}
$$
pV = \text{costante},
\qquad
\frac{V}{T} = \text{costante},
\qquad
\frac{p}{T} = \text{costante}
$$
Le tre leggi valgono per una quantità fissata di gas perfetto, rispettivamente a temperatura, pressione e volume costanti. Con due stati si scrivono come $\dfrac{p_1 V_1}{T_1} = \dfrac{p_2 V_2}{T_2}$.
:::

:::attenzione
Nell'equazione di stato e nelle leggi di Gay-Lussac la temperatura va in kelvin. Un gas a volume costante portato da $27\,^\circ\mathrm{C}$ a $54\,^\circ\mathrm{C}$ passa da $300\,\mathrm{K}$ a $327\,\mathrm{K}$, quindi la pressione aumenta del $9\%$ circa e non raddoppia.
:::

:::formula{#lavoro-termodinamico titolo="Lavoro termodinamico"}
$$
L = \int_{V_i}^{V_f} p\, dV,
\qquad
L = p\,(V_f - V_i) \ \text{ a pressione costante}
$$
$L$ è il lavoro fatto dal sistema in una trasformazione quasistatica, positivo in un'espansione. Nel piano $(V, p)$ il lavoro è l'area sotto la curva della trasformazione, con il segno di $dV$.
:::

:::formula{#primo-principio titolo="Primo principio della termodinamica"}
$$
\Delta U = Q - L,
\qquad
dU = \delta Q - \delta L
$$
$Q$ è il calore *assorbito* dal sistema e $L$ il lavoro *fatto* dal sistema, per un sistema chiuso tra due stati di equilibrio. $U$ è una funzione di stato, mentre $Q$ e $L$ dipendono dalla trasformazione. Nelle trasformazioni adiabatiche $\Delta U = -L$, in quelle a volume costante $\Delta U = Q$, in un ciclo $Q = L$.
:::

:::formula{#energia-interna-e-calori-molari titolo="Energia interna e calori molari del gas perfetto"}
$$
\Delta U = n\,c_V\,(T_f - T_i),
\qquad
c_p - c_V = R,
\qquad
\gamma = \frac{c_p}{c_V}
$$
$$
\text{monoatomico: } c_V = \frac{3}{2}R, \ \gamma = \frac{5}{3};
\qquad
\text{biatomico: } c_V = \frac{5}{2}R, \ \gamma = \frac{7}{5}
$$
L'energia interna del gas perfetto dipende solo dalla temperatura, perciò la prima formula vale per *ogni* trasformazione, anche non a volume costante. I valori dei biatomici valgono a temperatura ambiente.
:::

:::formula{#trasformazione-isocora-isobara titolo="Trasformazioni isocora e isobara"}
$$
\text{isocora:} \quad \frac{p}{T} = \text{costante}, \qquad L = 0, \qquad Q = n\,c_V\,\Delta T
$$
$$
\text{isobara:} \quad \frac{V}{T} = \text{costante}, \qquad L = p\,\Delta V = nR\,\Delta T, \qquad Q = n\,c_p\,\Delta T
$$
Le formule valgono per $n$ moli di gas perfetto in trasformazioni quasistatiche. In entrambe $\Delta U = n\,c_V\,\Delta T$.
:::

:::formula{#trasformazione-isoterma titolo="Trasformazione isoterma"}
$$
pV = \text{costante},
\qquad
\Delta U = 0,
\qquad
Q = L = nRT \ln\frac{V_f}{V_i} = nRT \ln\frac{p_i}{p_f}
$$
Le formule valgono per un gas perfetto in un'isoterma quasistatica alla temperatura $T$. Il gas assorbe calore nelle espansioni e lo cede nelle compressioni.
:::

:::formula{#trasformazione-adiabatica titolo="Trasformazione adiabatica"}
$$
pV^{\gamma} = \text{costante},
\qquad
TV^{\gamma - 1} = \text{costante},
\qquad
T p^{\frac{1 - \gamma}{\gamma}} = \text{costante}
$$
$$
Q = 0,
\qquad
L = -\Delta U = n\,c_V\,(T_i - T_f) = \frac{p_i V_i - p_f V_f}{\gamma - 1}
$$
Le relazioni della prima riga valgono per un'adiabatica quasistatica (reversibile) di un gas perfetto. In un'adiabatica irreversibile restano vere $Q = 0$ e $L = n\,c_V\,(T_i - T_f)$; per un'espansione contro una pressione esterna costante $p_e$ si ha $L = p_e\,(V_f - V_i)$.
:::

:::formula{#cicli-termodinamici titolo="Cicli termodinamici"}
$$
\Delta U = 0,
\qquad
Q_{\mathrm{tot}} = L_{\mathrm{tot}},
\qquad
L_{\mathrm{rett}} = (p_2 - p_1)(V_2 - V_1)
$$
Per un ciclo quasistatico $|L_{\mathrm{tot}}|$ è l'area racchiusa nel piano $(V, p)$, positiva se il ciclo è percorso in senso orario. La terza formula vale per il ciclo rettangolare di due isobare e due isocore percorso in senso orario. I calori dei singoli tratti si ottengono da $Q = \Delta U + L$.
:::

## Secondo principio, macchine termiche ed entropia

Gli enunciati e le dimostrazioni sono nel capitolo [Secondo principio, macchine termiche ed entropia](/fisica-1/secondo-principio/teoria).

:::formula{#macchina-termica titolo="Macchina termica e rendimento"}
$$
L = Q_{\mathrm{ass}} - Q_{\mathrm{ced}},
\qquad
\eta = \frac{L}{Q_{\mathrm{ass}}} = 1 - \frac{Q_{\mathrm{ced}}}{Q_{\mathrm{ass}}}
$$
$$
L = Q_1 + Q_2,
\qquad
\eta = 1 + \frac{Q_2}{Q_1} = 1 - \frac{|Q_2|}{Q_1}
$$
$Q_{\mathrm{ass}}$ e $Q_{\mathrm{ced}}$ sono positivi e riferiti a un ciclo. Nella seconda riga la macchina lavora tra due serbatoi $T_1 > T_2$ e $Q_1 > 0$, $Q_2 < 0$ sono i calori con il segno della convenzione del primo principio.
:::

:::formula{#frigorifero-e-pompa-di-calore titolo="Frigorifero e pompa di calore"}
$$
|Q_1| = Q_2 + |L|,
\qquad
\varepsilon = \frac{Q_2}{|L|},
\qquad
\varepsilon_{\mathrm{pc}} = \frac{|Q_1|}{|L|} = \varepsilon + 1
$$
La macchina assorbe $Q_2 > 0$ dal serbatoio freddo, cede $|Q_1|$ al serbatoio caldo e riceve il lavoro $|L|$ in ogni ciclo. Le efficienze possono superare $1$.
:::

:::formula{#rendimento-di-carnot titolo="Ciclo di Carnot"}
$$
\frac{Q_2}{Q_1} = -\frac{T_2}{T_1},
\qquad
\eta_C = 1 - \frac{T_2}{T_1}
$$
$$
\varepsilon_C = \frac{T_2}{T_1 - T_2},
\qquad
\varepsilon_{\mathrm{pc},C} = \frac{T_1}{T_1 - T_2}
$$
Il ciclo è reversibile e scambia calore con due soli serbatoi alle temperature $T_1 > T_2$, espresse in kelvin. Per un gas perfetto i calori sulle isoterme sono $Q_1 = nRT_1 \ln\dfrac{V_B}{V_A}$ e $Q_2 = -\,nRT_2 \ln\dfrac{V_C}{V_D}$, con $\dfrac{V_B}{V_A} = \dfrac{V_C}{V_D}$.
:::

:::formula{#teorema-di-carnot titolo="Teorema di Carnot e bilancio di una macchina"}
$$
\eta \leq 1 - \frac{T_2}{T_1},
\qquad
\frac{Q_1}{T_1} + \frac{Q_2}{T_2} \leq 0
$$
Le disuguaglianze valgono per ogni macchina tra due serbatoi $T_1 > T_2$, con il segno di uguaglianza *solo* per le macchine reversibili. Una macchina dichiarata che non le soddisfa viola il secondo principio.
:::

:::attenzione
Nel rendimento di Carnot le temperature vanno in kelvin. Tra $500\,^\circ\mathrm{C}$ e $20\,^\circ\mathrm{C}$ si ha $\eta_C = 1 - \dfrac{293{,}15}{773{,}15} \approx 0{,}62$, mentre il rapporto delle temperature Celsius darebbe $1 - \dfrac{20}{500} = 0{,}96$.
:::

:::formula{#disuguaglianza-di-clausius titolo="Disuguaglianza di Clausius"}
$$
\sum_{i=1}^{n} \frac{Q_i}{T_i} \leq 0,
\qquad
\oint \frac{\delta Q}{T} \leq 0
$$
Il sistema compie un ciclo, $Q_i$ è il calore assorbito dal serbatoio alla temperatura $T_i$ e $T$ è la temperatura del serbatoio che fornisce $\delta Q$. Il segno di uguaglianza vale per i cicli reversibili.
:::

:::formula{#entropia titolo="Entropia"}
$$
S(B) - S(A) = \int_A^B \left( \frac{\delta Q}{T} \right)_{\mathrm{rev}},
\qquad
S(B) - S(A) \geq \int_A^B \frac{\delta Q}{T}
$$
Nella definizione l'integrale si calcola lungo una qualsiasi trasformazione reversibile da $A$ a $B$, quindi per una trasformazione irreversibile $\Delta S$ si calcola lungo una reversibile scelta tra gli stessi stati. Nella disuguaglianza la trasformazione è qualsiasi e $T$ è la temperatura dei serbatoi. Lungo una reversibile $Q = \displaystyle\int T\, dS$ è l'area sotto la curva nel piano $(S, T)$.
:::

:::formula{#entropia-del-gas-perfetto titolo="Variazione di entropia del gas perfetto"}
$$
\Delta S = n c_V \ln\frac{T_B}{T_A} + nR \ln\frac{V_B}{V_A} = n c_p \ln\frac{T_B}{T_A} - nR \ln\frac{p_B}{p_A}
$$
La formula vale tra due stati di equilibrio con una trasformazione qualsiasi, anche irreversibile, perché $S$ è una funzione di stato. Nell'espansione libera di $n$ moli fino al volume doppio $\Delta S = nR\ln 2$, anche se $Q = 0$.
:::

:::formula{#entropia-casi-particolari titolo="Entropia nelle trasformazioni del gas perfetto"}
$$
\begin{aligned}
&\text{isoterma:} && \Delta S = nR \ln\frac{V_B}{V_A} = \frac{Q}{T} \\[4pt]
&\text{isocora:} && \Delta S = n c_V \ln\frac{T_B}{T_A} \\[4pt]
&\text{isobara:} && \Delta S = n c_p \ln\frac{T_B}{T_A} \\[4pt]
&\text{adiabatica reversibile:} && \Delta S = 0
\end{aligned}
$$
Le formule seguono dalla variazione di entropia del gas perfetto. L'uguaglianza $\Delta S = \dfrac{Q}{T}$ dell'isoterma richiede una trasformazione reversibile.
:::

:::formula{#entropia-di-corpi-e-serbatoi titolo="Entropia di serbatoi, corpi e cambiamenti di stato"}
$$
\Delta S_{\mathrm{serb}} = \frac{Q}{T},
\qquad
\Delta S_{\mathrm{corpo}} = m c \ln\frac{T_B}{T_A},
\qquad
\Delta S = \pm\,\frac{m \lambda}{T}
$$
$Q$ è il calore assorbito dal serbatoio alla temperatura costante $T$. La seconda formula vale per un corpo con calore specifico $c$ costante portato da $T_A$ a $T_B$, la terza per un cambiamento di stato alla temperatura $T$, con il segno positivo per fusione e vaporizzazione.
:::

:::formula{#aumento-dell-entropia titolo="Principio di aumento dell'entropia"}
$$
\Delta S_{\mathrm{u}} = \sum \Delta S \geq 0
$$
La disuguaglianza vale per un sistema isolato, in particolare per l'universo formato dal sistema e da tutti i serbatoi e corpi con cui interagisce; l'uguaglianza vale *solo* per le trasformazioni reversibili. Per il calore $Q$ che passa da un serbatoio $T_1$ a un serbatoio $T_2 < T_1$ si ha $\Delta S_{\mathrm{u}} = Q\left(\dfrac{1}{T_2} - \dfrac{1}{T_1}\right) > 0$.
:::

:::formula{#lavoro-perso titolo="Entropia e lavoro perso"}
$$
\Delta S_{\mathrm{u}} = -\frac{Q_1}{T_1} - \frac{Q_2}{T_2},
\qquad
L_{\mathrm{rev}} - L = T_2\, \Delta S_{\mathrm{u}}
$$
Le formule valgono per un motore che in un ciclo assorbe $Q_1 > 0$ dal serbatoio $T_1$ e scambia $Q_2 < 0$ con il serbatoio $T_2$; l'entropia del fluido in un ciclo non cambia. $L_{\mathrm{rev}} = Q_1\left(1 - \dfrac{T_2}{T_1}\right)$ è il lavoro di una macchina reversibile che assorbe lo stesso $Q_1$.
:::
