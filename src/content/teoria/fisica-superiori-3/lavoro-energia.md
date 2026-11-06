---
titolo: "Lavoro, energia e potenza"
sommario: "Lavoro delle forze, energia cinetica e potenziale, conservazione dell’energia e dissipazioni."
---

## Lavoro di una forza costante

:::definizione{#lavoro titolo="Componente lungo lo spostamento"}
Il **lavoro**, indicato con $W$, misura il trasferimento di energia dovuto a una forza durante uno spostamento. Per forza costante e spostamento rettilineo,
$$
W=\vec F\cdot\Delta\vec r=Fs\cos\theta.
$$
$\theta$ è l'angolo fra forza e spostamento, $s$ il modulo dello spostamento. L'unità è il joule, $1\,\mathrm J=1\,\mathrm{N\cdot m}$. Una forza di $10\,\mathrm N$ inclinata di $60^\circ$ rispetto a uno spostamento di $3\,\mathrm m$ compie lavoro $15\,\mathrm J$. Il lavoro è positivo per una componente concorde, negativo per una componente opposta, nullo per una forza perpendicolare allo spostamento. Una normale può quindi avere lavoro nullo pur avendo modulo diverso da zero.
:::

## Lavoro nei grafici

:::osservazione{#lavoro-variabile titolo="Area sotto il grafico forza-posizione"}
Per una forza che cambia lungo un percorso rettilineo, il lavoro è l'area con segno sotto il grafico della componente $F_x$ in funzione di $x$. Si può dividere il percorso in piccoli tratti e sommare i lavori; per segmenti lineari basta l'area di rettangoli e triangoli.

Per allungare lentamente una molla ideale da zero a $x$, la forza esterna cresce da $0$ a $kx$. Il lavoro esterno è l'area di un triangolo, quindi $W_{\mathrm{est}}=\dfrac12kx^2$. Il lavoro della molla è l'opposto. Con $k=100\,\mathrm{N/m}$ e $x=0{,}20\,\mathrm m$, l'energia trasferita alla molla è $2{,}0\,\mathrm J$.
:::

::grafico{f="2*x" area="2*x;0;0;4" xmin=0 xmax=5 ymin=0 ymax=10 nomi="x,F" titolo="L’area triangolare rappresenta il lavoro necessario ad allungare una molla"}

## Energia cinetica

:::teorema{#energia-cinetica titolo="Teorema dell’energia cinetica"}
L'energia cinetica di un punto materiale è $K=\dfrac12mv^2$. Il lavoro totale delle forze è uguale alla variazione di energia cinetica,
$$
W_{\mathrm{tot}}=K_f-K_i.
$$
Con forza risultante costante parallela al moto, $W_{\mathrm{tot}}=mas$. Dalla cinematica $2as=v_f^2-v_i^2$, quindi $mas=\dfrac12m(v_f^2-v_i^2)$. Il teorema si estende a forze variabili sommando i contributi su piccoli tratti.

Una massa di $2{,}0\,\mathrm{kg}$ che passa da $3{,}0$ a $5{,}0\,\mathrm{m/s}$ aumenta l'energia cinetica di $16\,\mathrm J$. Il lavoro risultante è perciò positivo. L'energia cinetica dipende dal riferimento, perché dipende dalla velocità misurata in quel riferimento.
:::

::grafico{f="x^2" xmin=0 xmax=4 ymin=0 ymax=18 nomi="v,K" titolo="A massa costante l’energia cinetica cresce con il quadrato della velocità"}

## Forze conservative ed energia potenziale

:::definizione{#potenziale titolo="Energia associata alla configurazione"}
Una forza è **conservativa** quando il suo lavoro fra due posizioni dipende soltanto dalle posizioni iniziale e finale. Si definisce l'energia potenziale $U$ in modo che $W_c=-\Delta U$. Il livello zero si sceglie liberamente; hanno significato fisico le differenze di energia.

Vicino alla Terra, con $g$ costante, $U_g=mgh$. Sollevando $2{,}0\,\mathrm{kg}$ di $3{,}0\,\mathrm m$ si aumenta $U_g$ di circa $58{,}9\,\mathrm J$, mentre il peso compie lavoro $-58{,}9\,\mathrm J$. Per una molla ideale $U_e=\dfrac12kx^2$, con zero alla lunghezza a riposo. L'attrito dinamico è dissipativo: lungo un percorso chiuso compie lavoro negativo, perciò non si descrive con una sola energia potenziale dipendente dalla posizione.
:::

## Conservazione e dissipazione

:::teorema{#bilancio-energia titolo="Bilancio dell’energia meccanica"}
L'energia meccanica è $E=K+U$. Dal teorema dell'energia cinetica e da $W_c=-\Delta U$ si ricava
$$
E_f-E_i=W_{nc},
$$
dove $W_{nc}$ è il lavoro delle forze non conservative. Se $W_{nc}=0$, l'energia meccanica si conserva. Una caduta da fermo attraverso dislivello $h$ dà $mgh=\dfrac12mv^2$, quindi $v=\sqrt{2gh}$.

Su un piano orizzontale fisso, con attrito dinamico costante, $W_{\mathrm{attr}}=-\mu_dmg\,s$. L'energia meccanica diminuisce e si trasforma in energia interna delle superfici. Per $m=2\,\mathrm{kg}$, $\mu_d=0{,}20$ e $s=5\,\mathrm m$, la diminuzione è circa $19{,}6\,\mathrm J$. Nel bilancio si includono anche eventuali lavori di forze applicate; non si impone conservazione dell'energia meccanica se tali contributi sono presenti.
:::

::grafico{f="10-x;x" xmin=0 xmax=10 ymin=0 ymax=12 nomi="h,E" legenda="energia cinetica;energia potenziale" titolo="Esempio normalizzato senza dissipazione: la somma delle due energie resta $10$"}

## Potenza e rendimento

:::definizione{#potenza titolo="Velocità del trasferimento di energia"}
La potenza media è $P_m=\dfrac W{\Delta t}$. Per una forza costante applicata a un corpo con velocità $\vec v$, la potenza istantanea è $P=\vec F\cdot\vec v$. Il watt equivale a un joule al secondo. Un motore che trasferisce $6000\,\mathrm J$ in $3{,}0\,\mathrm s$ sviluppa potenza media $2000\,\mathrm W$.

Il rendimento è $\eta=\dfrac{E_{\mathrm{utile}}}{E_{\mathrm{fornita}}}$, oppure il rapporto fra potenze misurate nello stesso regime. Con potenza assorbita $1000\,\mathrm W$ e potenza utile $800\,\mathrm W$, $\eta=0{,}80=80\%$. Il kilowattora è un'unità di energia: $1\,\mathrm{kWh}=3{,}6\cdot10^6\,\mathrm J$. Non è un'unità di potenza.
:::
