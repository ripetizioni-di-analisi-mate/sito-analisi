---
titolo: "Quantità di moto, impulso e urti"
sommario: "Impulso delle forze, conservazione della quantità di moto, centro di massa, rinculi e urti elastici e anelastici."
---

## Quantità di moto

:::definizione{#quantita-moto titolo="Una grandezza vettoriale del moto"}
La **quantità di moto** di un punto materiale è $\vec p=m\vec v$. L'unità è $\mathrm{kg\cdot m/s}$. A parità di velocità una massa maggiore ha quantità di moto maggiore. In una dimensione il segno coincide con quello della velocità scelta sull'asse.

Un corpo di $2{,}0\,\mathrm{kg}$ con velocità $-3{,}0\,\mathrm{m/s}$ ha quantità di moto $-6{,}0\,\mathrm{kg\cdot m/s}$. La quantità di moto totale di più corpi è la somma vettoriale delle singole quantità di moto. Due corpi con quantità di moto opposte possono avere totale nullo pur essendo entrambi in movimento.
:::

## Impulso

:::teorema{#impulso titolo="Impulso e variazione di quantità di moto"}
Per una forza costante l'impulso è $\vec J=\vec F\Delta t$. Per una forza variabile è l'area con segno sotto il grafico forza-tempo, componente per componente. Il teorema dell'impulso afferma $\vec J_{\mathrm{tot}}=\Delta\vec p$.

Con massa costante si ricava dal secondo principio: $\vec F=m\dfrac{\Delta\vec v}{\Delta t}$ per una forza costante, quindi $\vec F\Delta t=m\Delta\vec v$. Una forza media di $20\,\mathrm N$ applicata per $0{,}30\,\mathrm s$ fornisce impulso $6{,}0\,\mathrm{N\cdot s}$. A parità di variazione di quantità di moto, aumentare il tempo di arresto diminuisce il modulo della forza media. Questo spiega il ruolo delle protezioni che allungano la durata dell'urto.
:::

::grafico{f="4" area="4;0;0;3" xmin=0 xmax=4 ymin=0 ymax=6 nomi="t,F" titolo="L’area sotto il grafico forza-tempo è l’impulso"}

## Sistemi isolati

:::teorema{#conservazione-moto titolo="Conservazione della quantità di moto"}
Per un sistema, le forze interne si compensano a coppie nella somma. La variazione della quantità di moto totale è determinata dall'impulso delle forze esterne. Se tale impulso è nullo, la quantità di moto totale resta costante,
$$
\sum\vec p_i=\sum\vec p_f.
$$
Durante un urto breve, peso e altre forze esterne possono avere impulso trascurabile rispetto alle forze dell'urto. L'approssimazione va riferita alla direzione studiata. Su un binario orizzontale ideale il vincolo compensa il peso, quindi la quantità di moto orizzontale del sistema di carrelli si conserva. Per il singolo carrello la forza dell'altro carrello è esterna e ne cambia la quantità di moto.
:::

## Centro di massa

:::definizione{#centro-massa titolo="Moto complessivo del sistema"}
Per due masse sull'asse,
$$
x_{CM}=\frac{m_1x_1+m_2x_2}{m_1+m_2},\qquad
v_{CM}=\frac{m_1v_1+m_2v_2}{m_1+m_2}.
$$
Il centro di massa è più vicino alla massa maggiore. Con masse $1\,\mathrm{kg}$ a $x=0$ e $3\,\mathrm{kg}$ a $x=4\,\mathrm m$, risulta $x_{CM}=3\,\mathrm m$. La quantità di moto totale è $(m_1+m_2)\vec v_{CM}$.

Il centro di massa accelera secondo $(m_1+m_2)\vec a_{CM}=\sum\vec F_{\mathrm{esterne}}$. In un'esplosione ideale senza impulso esterno il centro di massa continua il suo moto precedente, anche se i frammenti acquistano velocità diverse.
:::

::grafico{assi=0 uguale=1 punti="-2,0,pieno,m₁;2,0,pieno,m₂;1,0,pieno,CM" linee="-2,0 2,0" xmin=-4 xmax=4 ymin=-2 ymax=2 titolo="Con $m_2=3m_1$ il centro di massa è più vicino alla seconda massa"}

## Urto completamente anelastico e rinculo

:::teorema{#anelastico titolo="Corpi che restano uniti"}
Se due corpi restano uniti dopo l'urto e l'impulso esterno è trascurabile, la velocità comune è
$$
v_f=\frac{m_1v_1+m_2v_2}{m_1+m_2}.
$$
Per $m_1=m_2=1\,\mathrm{kg}$, $v_1=4\,\mathrm{m/s}$ e $v_2=0$, risulta $v_f=2\,\mathrm{m/s}$. L'energia cinetica passa da $8$ a $4\,\mathrm J$; la differenza si trasforma in deformazioni, energia interna e suono. L'energia totale resta conservata includendo tutte le forme.

Nel rinculo da quiete, $m_1v_1+m_2v_2=0$, quindi $v_2=-\dfrac{m_1}{m_2}v_1$. I due moti hanno versi opposti. L'energia cinetica può aumentare perché viene liberata energia interna; la conservazione della quantità di moto da sola non implica la conservazione dell'energia cinetica.
:::

## Urti elastici

:::teorema{#elastico titolo="Quantità di moto ed energia cinetica conservate"}
Un urto è elastico quando si conserva anche l'energia cinetica. Per un urto unidimensionale con il secondo corpo inizialmente fermo,
$$
v_{1f}=\frac{m_1-m_2}{m_1+m_2}v_{1i},\qquad
v_{2f}=\frac{2m_1}{m_1+m_2}v_{1i}.
$$
Le formule si ricavano risolvendo insieme la conservazione della quantità di moto e quella dell'energia cinetica, scegliendo la soluzione con effettivo urto. Con masse uguali, il primo corpo si ferma e il secondo acquista la sua velocità. Se $m_2>m_1$, il primo rimbalza perché $v_{1f}<0$.

In due dimensioni la quantità di moto si conserva per ciascuna componente; la conservazione dell'energia cinetica aggiunge un'equazione scalare. Per determinare tutte le velocità servono anche informazioni sulla geometria dell'urto. Le formule unidimensionali non si applicano automaticamente a un urto obliquo.
:::
