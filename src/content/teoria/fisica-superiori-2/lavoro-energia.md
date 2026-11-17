---
titolo: Lavoro, energia e potenza
sommario: Lavoro con segno, energia cinetica e potenziale, bilanci con e senza attrito, potenza e rendimento.
---

## Lavoro di una forza costante

:::definizione{#lavoro titolo="Forza e spostamento"}
Il **lavoro** di una forza costante $\vec F$ durante uno spostamento $\vec s$ misura un trasferimento di energia. Indicando con $\theta$ l'angolo fra i due vettori, si definisce
$$
W=Fs\cos\theta=F_\parallel s,\qquad 1\,\mathrm{J}=1\,\mathrm{N\,m}.
$$
$F$ e $s$ sono moduli, quindi il segno del lavoro viene dalla proiezione $F_\parallel$. Una forza con parte parallela concorde produce lavoro positivo. Una parte parallela opposta produce lavoro negativo. Se la forza è perpendicolare allo spostamento, la proiezione è nulla. Il lavoro è scalare: il segno riguarda il trasferimento, non un verso nello spazio.

Se agiscono più forze, si può calcolare il lavoro di ciascuna e poi sommare con segno. Per forze costanti si ottiene lo stesso risultato calcolando il lavoro della risultante, poiché le proiezioni lungo lo spostamento si sommano.
:::

:::esempio{titolo="La proiezione utile di una forza inclinata"}
Una valigia si sposta di $3\,\mathrm{m}$ lungo un pavimento. Una fune la tira con $20\,\mathrm{N}$ a $60^\circ$ dallo spostamento. La proiezione lungo il pavimento è $20\cos60^\circ\,\mathrm{N}=10\,\mathrm{N}$, quindi il lavoro della fune vale $30\,\mathrm{J}$. La parte verticale della trazione cambia le forze di contatto ma ha lavoro diretto nullo durante lo spostamento orizzontale. Anche peso e normale hanno lavoro nullo in questo spostamento. Se scorre con attrito, l'attrito compie un ulteriore lavoro negativo.

::grafico{assi=0 uguale=1 linee="-0.7,0 4.2,0" vettori="0,0,3,0,s;0,0,1.3,2.25,F" segmenti="1.3,0,1.3,2.25" xmin=-0.8 xmax=4.3 ymin=-0.6 ymax=2.8 titolo="La forza e lo spostamento formano 60°. La proiezione orizzontale è la metà della forza."}
:::

:::osservazione{#area-lavoro titolo="Lavoro come area con segno"}
Se un grafico riporta la componente parallela della forza in funzione della coordinata lungo il moto, il lavoro di un tratto a forza costante è l'area con segno del rettangolo. La base ha unità di metri, l'altezza di newton e il prodotto si misura in joule. Per una serie di tratti si sommano le aree. Per una forza che cresce linearmente da zero si ottiene un triangolo. Questa lettura servirà per ricavare l'energia di una molla.
:::

## Energia cinetica

::::teorema{#cinetica titolo="Il lavoro totale cambia l'energia cinetica"}
Un punto materiale di massa $m$ e rapidità $v$ ha energia cinetica $K=\dfrac12mv^2$. Il lavoro **totale** delle forze durante un tratto è $\Delta K=K_f-K_i$. Una forza singola può compiere lavoro positivo mentre altre compiono lavoro negativo. La variazione di energia cinetica dipende dalla somma.
:::dimostrazione
Per un tratto rettilineo con risultante costante lungo l'asse, il lavoro totale è $F_R\Delta x$. Il secondo principio dà $F_R=ma$ con i segni lungo l'asse. Usando $2a\Delta x=v_f^2-v_i^2$ si ottiene
$$
W_{\mathrm{tot}}=ma\Delta x=\frac12m(v_f^2-v_i^2)=K_f-K_i.
$$
Il risultato vale più in generale. Se la forza varia, si può suddividere il moto in tratti brevi e sommare le variazioni di energia. I termini intermedi si cancellano perché l'energia alla fine di ogni tratto diventa quella iniziale del successivo.
:::
::::

:::esempio{titolo="Frenare riducendo l'energia cinetica"}
Un carrello di $2\,\mathrm{kg}$ rallenta da $6$ a $4\,\mathrm{m/s}$. Le energie cinetiche agli estremi sono $36$ e $16\,\mathrm{J}$. Il lavoro totale vale $16-36=-20\,\mathrm{J}$. Il segno negativo è coerente con la diminuzione di rapidità. Se la sola forza orizzontale è un attrito uniforme e il carrello percorre $5\,\mathrm{m}$, il suo modulo è $\dfrac{20}{5}\,\mathrm{N}=4\,\mathrm{N}$.

::grafico{f="x^2" punti="4,16,pieno,F;6,36,pieno,I" xmin=0 xmax=6.7 ymin=0 ymax=44 nomi="v (m/s),K (J)" titolo="Per 2 kg l'energia in joule è il quadrato della rapidità in m/s."}
:::

## Energia potenziale gravitazionale

:::definizione{#potenziale titolo="Energia associata alla quota"}
Vicino al suolo si può prendere $g$ costante. Per un corpo di massa $m$ l'energia potenziale gravitazionale, scegliendo una quota di riferimento zero, è $U_g=mgh$. La quota $h$ è positiva sopra il livello scelto e negativa sotto. Cambiare riferimento aggiunge la stessa costante all'energia di ogni punto. La variazione fra due quote e il lavoro del peso restano quindi invariati.
$$
\Delta U_g=mg(h_f-h_i),\qquad W_g=mg(h_i-h_f)=-\Delta U_g.
$$
Il peso punta verso il basso, quindi compie lavoro positivo durante una discesa. Il lavoro dipende dalla variazione di quota. Una rampa lunga e una più corta con gli stessi estremi danno lo stesso lavoro del peso, anche se possono produrre perdite diverse a causa dell'attrito.
:::

:::esempio{titolo="Una quota di arrivo sotto lo zero"}
Un corpo di $3\,\mathrm{kg}$ scende da $h_i=2\,\mathrm{m}$ a $h_f=-1\,\mathrm{m}$, con $g=10\,\mathrm{m/s^2}$. Rispetto al riferimento scelto $U_i=60\,\mathrm{J}$ e $U_f=-30\,\mathrm{J}$. Quindi $\Delta U_g=-90\,\mathrm{J}$ e il peso compie $+90\,\mathrm{J}$ di lavoro. Se si sceglie zero all'arrivo, le energie diventano $90$ e $0\,\mathrm{J}$ e si ottiene la stessa variazione.

::grafico{f="30*x" punti="-1,-30,pieno,F;2,60,pieno,I" xmin=-1.6 xmax=2.5 ymin=-50 ymax=80 nomi="h (m),U (J)" titolo="Il lavoro del peso è positivo, perché l'energia potenziale diminuisce da I a F."}
:::

## Energia elastica

:::teorema{#elastica titolo="Energia di una molla ideale"}
La deformazione $x$ di una molla è misurata dalla lunghezza naturale. La legge elastica $F_e=-kx$ vale nel regime lineare. Allungando lentamente la molla da zero a $x>0$, la forza esterna necessaria ha modulo crescente da zero a $kx$. Il lavoro della forza esterna è l'area sotto la retta, un triangolo di base $x$ e altezza $kx$. Il lavoro è immagazzinato nella molla come energia potenziale elastica,
$$
U_e=\frac12 kx^2.
$$
La compressione di uguale modulo dà la stessa energia, perché il quadrato elimina il segno. Nello scaricarsi la molla compie lavoro positivo se si muove verso la lunghezza naturale. In generale il lavoro elastico fra due configurazioni è $W_e=U_{e,i}-U_{e,f}$. La forza dipende da $x$, perciò moltiplicare la forza finale per l'intera deformazione raddoppierebbe il lavoro di carico da zero.
:::

:::esempio{titolo="Area della forza necessaria a caricare una molla"}
Una molla con $k=100\,\mathrm{N/m}$ viene allungata di $0{,}10\,\mathrm{m}$. La forza di carico sale fino a $10\,\mathrm{N}$. L'energia è $\dfrac12\cdot0{,}10\cdot10\,\mathrm{J}=0{,}50\,\mathrm{J}$. Il fattore un mezzo descrive la crescita lineare della forza lungo tutta la deformazione.

::grafico{f="100*x" area="100*x;0;0;0.10" punti="0.1,10,pieno,A" xmin=0 xmax=0.12 ymin=0 ymax=13 nomi="x (m),F (N)" titolo="L'area del triangolo durante il carico vale 0,50 J."}
:::

## Conservazione dell'energia meccanica

:::teorema{#conservazione titolo="Trasformazioni tra energia cinetica e potenziale"}
Si considera l'energia meccanica $E_m=K+U_g+U_e$, includendo le energie potenziali delle interazioni rilevanti. Se soltanto il peso e la forza elastica compiono lavoro, $W_{\mathrm{tot}}=-\Delta U_g-\Delta U_e$. Il teorema dell'energia cinetica dà allora $\Delta E_m=0$. Anche un vincolo in quiete che esercita una forza sempre perpendicolare allo spostamento può essere presente, perché il suo lavoro è nullo.
$$
K_i+U_{g,i}+U_{e,i}=K_f+U_{g,f}+U_{e,f}.
$$
Da fermo, scendendo di un dislivello $h$ senza attrito, tutto l'abbassamento di energia gravitazionale diventa energia cinetica. Si scrive $mgh=\dfrac12mv^2$, quindi $v=\sqrt{2gh}$. La massa si semplifica perché tutte le energie coinvolte in questo caso sono proporzionali a $m$.
:::

:::osservazione{#energia-attrito titolo="Bilancio quando agiscono altre forze"}
Se forze ulteriori compiono lavoro $W_{\mathrm{oth}}$, allora $\Delta E_m=W_{\mathrm{oth}}$. Un attrito opposto allo scorrimento lungo un piano fermo compie lavoro negativo sul corpo e riduce la sua energia meccanica. Parte dell'energia passa, per esempio, in energia interna del corpo e della superficie. Un motore può invece trasferire energia al corpo e aumentare $E_m$. Occorre dichiarare quali forze sono già rappresentate dalle energie potenziali per evitare di contarle due volte.
:::

:::esempio{titolo="Dallo stesso dislivello con e senza attrito"}
Un carrello di $2\,\mathrm{kg}$ parte da fermo e scende di $5\,\mathrm{m}$ con $g=10\,\mathrm{m/s^2}$. Senza attrito ha $K_f=100\,\mathrm{J}$ e rapidità $10\,\mathrm{m/s}$. Se l'attrito compie lavoro di $-36\,\mathrm{J}$, il bilancio dà $K_f=64\,\mathrm{J}$ e rapidità $8\,\mathrm{m/s}$. La variazione di quota è la stessa e cambia il lavoro delle altre forze. Il risultato suppone che il carrello raggiunga la fine della discesa.
:::

## Potenza e rendimento

:::definizione{#potenza titolo="Energia trasferita nell'unità di tempo"}
La **potenza media** è il lavoro diviso per la durata positiva, $\mathcal P_m=\dfrac{W}{\Delta t}$. Un watt corrisponde a un joule al secondo. Due motori possono trasferire la stessa energia in tempi diversi. Quello che la fornisce in meno tempo ha potenza media maggiore. Se forza parallela e velocità sono costanti, sostituendo lo spostamento si ottiene $\mathcal P=F_\parallel v$.
:::

:::definizione{#rendimento titolo="Quota utile dell'energia in ingresso"}
Il **rendimento** $\eta$ confronta l'energia utile con quella assorbita nello stesso processo. Si assume positiva l'energia in ingresso e si misura l'uscita utile sulla stessa durata. La frazione è
$$
\eta=\frac{E_u}{E_i}=\frac{\mathcal P_u}{\mathcal P_i}.
$$
Il rapporto delle potenze vale se entrambe sono medie sulla stessa durata. Il valore percentuale è $100\eta\%$. Se un motore assorbe $500\,\mathrm{J}$ e ne fornisce $350\,\mathrm{J}$ di utili, il rendimento vale $70\%$ e $150\,\mathrm{J}$ non sono uscita utile. Su $5\,\mathrm{s}$ le due potenze medie valgono $100\,\mathrm{W}$ e $70\,\mathrm{W}$. Anche il loro rapporto restituisce $0{,}70$.
:::
