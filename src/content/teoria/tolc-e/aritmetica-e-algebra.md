---
titolo: "Aritmetica e algebra per il TOLC-E"
sommario: "Numeri, percentuali, calcolo letterale, sistemi, equazioni e disequazioni con vincoli."
---

:::percorso
Una variazione di prezzo chiede di individuare il valore di riferimento. Un'equazione chiede invece di capire quali valori dell'incognita sono ammessi. In entrambi i casi conviene fissare i dati e i vincoli prima di svolgere il calcolo. Le disuguaglianze e le condizioni sui denominatori serviranno anche per determinare il dominio delle funzioni.
:::

## Numeri e frazioni

:::definizione{#numeri-e-frazioni titolo="Interi, razionali e reali"}
Gli interi comprendono zero, i naturali positivi e i loro opposti. Un numero è **razionale** se si può scrivere come rapporto di due interi con denominatore diverso da zero. I decimali finiti e periodici sono razionali. I reali comprendono anche numeri irrazionali come $\sqrt{2}$.

Per sommare frazioni si può scegliere come denominatore comune il minimo comune multiplo dei denominatori. Nella divisione per una frazione diversa da zero si moltiplica per il suo reciproco.
:::

:::esempio{titolo="Una differenza di frazioni"}
Il minimo comune multiplo di $8$ e $12$ è $24$, quindi
$$
\frac{5}{8}-\frac{1}{12}=\frac{15}{24}-\frac{2}{24}=\frac{13}{24}.
$$
:::

## Rapporti e variazioni percentuali

:::definizione{#percentuali-e-proporzioni titolo="Percentuale e valore di riferimento"}
Il $p\%$ di una quantità $Q$ è $\dfrac{p}{100}Q$. Dopo un aumento si ottiene $Q(1+\dfrac{p}{100})$, dopo una riduzione $Q(1-\dfrac{p}{100})$. Per risalire al valore iniziale si divide per il fattore di variazione, quando questo è diverso da zero.

Il confronto fra due misure usa come denominatore il valore iniziale. Una quota divisa in rapporto $a$ a $b$ si ripartisce nelle frazioni $\dfrac{a}{a+b}$ e $\dfrac{b}{a+b}$, con $a,b>0$.
:::

:::esempio{titolo="Variazioni successive"}
Un abbonamento da $80$ euro subisce un aumento del $25\%$ e poi uno sconto del $10\%$. L'aumento porta il prezzo a $100$ euro. Lo sconto si calcola su $100$ euro, quindi il prezzo finale è $90$ euro. Rispetto agli $80$ euro iniziali l'aumento complessivo è del $12{,}5\%$.
:::

## Potenze, radicali e valore assoluto

:::definizione{#potenze-radicali-e-modulo titolo="Esponenti, radici e distanze"}
Per $a\ne0$ e $n$ intero positivo, $a^{-n}=\dfrac{1}{a^n}$ e $a^0=1$. Con la stessa base e potenze definite si sommano gli esponenti nel prodotto e si sottraggono nella divisione. Per $a>0$ vale $a^{m/n}=(\sqrt[n]{a})^m$, con $n$ intero positivo.

La radice quadrata reale $\sqrt{u}$ richiede $u\ge0$ e vale sempre almeno zero. Il **valore assoluto** $|x-a|$ misura la distanza di $x$ da $a$. Perciò $\sqrt{x^2}=|x|$ e, per $r\ge0$, $|x-a|\le r$ equivale a $a-r\le x\le a+r$.
:::

:::esempio{titolo="Radice e valore assoluto"}
Per $x=-4$ si ha $\sqrt{x^2}=\sqrt{16}=4$. Se $|x-2|=3$, i punti a distanza $3$ da $2$ sono $-1$ e $5$.
:::

## Polinomi e identità

:::definizione{#polinomi-e-divisione titolo="Coefficienti, fattori e resto"}
Due polinomi sono identicamente uguali se i coefficienti delle potenze corrispondenti coincidono. Nelle scomposizioni si cercano il fattore comune, i prodotti notevoli e gli zeri. Per esempio $A^2-B^2=(A-B)(A+B)$.

Dividere $P$ per $D\ne0$ produce $P=DQ+R$, dove $R$ è zero oppure ha grado minore di $D$. Con $D(x)=x-a$ il resto è il numero $P(a)$, poiché la valutazione in $a$ annulla il prodotto $D(a)Q(a)$.
:::

:::esempio{titolo="Un resto senza svolgere la divisione"}
Dividendo $P(x)=2x^3-5x+1$ per $x+2$ si calcola $P(-2)=-16+10+1=-5$. Il resto è $-5$, quindi $x+2$ non è un fattore di $P$.
:::

## Equazioni e sistemi

:::definizione{#equazioni-e-sistemi titolo="Soluzioni che soddisfano tutte le condizioni"}
Un'equazione di primo grado $ax+b=0$, con $a\ne0$, ha soluzione $x=-\dfrac{b}{a}$. Se $a=0$, l'equazione è vera per ogni $x$ quando $b=0$ e non ha soluzioni quando $b\ne0$.

Un sistema impone di soddisfare tutte le sue equazioni. Con l'eliminazione si combinano opportunamente le equazioni per cancellare un'incognita. In un problema di conteggio si controlla inoltre che i risultati siano interi e non negativi.
:::

:::esempio{titolo="Biglietti a due prezzi"}
Una cassa vende $12$ biglietti da $4$ o $7$ euro e incassa $63$ euro. Chiamando $x$ il numero di biglietti da $7$ euro, il ricavo è $7x+4(12-x)=48+3x$. Ne segue $x=5$. I $7$ biglietti rimasti costano $4$ euro ciascuno.
:::

## Secondo grado e forme riconducibili

:::definizione{#secondo-grado titolo="Discriminante e sostituzione"}
Per $ax^2+bx+c=0$, con $a\ne0$, il discriminante è $\Delta=b^2-4ac$. Se $\Delta\ge0$ le soluzioni sono $\dfrac{-b\pm\sqrt{\Delta}}{2a}$, coincidenti quando $\Delta=0$. Per $\Delta<0$ non ci sono radici reali.

Un'equazione biquadratica contiene solo le potenze $x^4$ e $x^2$ oltre al termine noto. Si pone $t=x^2$ con $t\ge0$. Ogni soluzione positiva $t$ produce due valori opposti di $x$, mentre $t=0$ produce il solo valore $x=0$.
:::

:::esempio{titolo="Le soluzioni dopo la sostituzione"}
Da $x^4-10x^2+9=0$ si ottiene $(t-1)(t-9)=0$. Poiché entrambe le radici in $t$ sono positive, le soluzioni iniziali sono $-3,-1,1,3$.
:::

## Espressioni fratte e disequazioni

:::definizione{#frazioni-e-segno titolo="Esclusioni e tabella dei segni"}
Una frazione è definita solo dove il denominatore è diverso da zero. I valori esclusi restano tali dopo ogni semplificazione. Per il segno di un rapporto si ordinano gli zeri di numeratore e denominatore e si studiano gli intervalli che separano. Gli zeri del denominatore si escludono sempre. Gli zeri ammessi del numeratore si includono con $\le$ o $\ge$.

Se si moltiplica una disuguaglianza per un numero negativo, il verso si inverte. Un denominatore che dipende da $x$ può cambiare segno, quindi una moltiplicazione globale richiede di distinguere i casi.
:::

:::esempio{titolo="Un intervallo con un estremo escluso"}
Per $\dfrac{x-4}{x+1}\le0$ i punti critici sono $-1$ e $4$. Il rapporto è negativo fra i due punti e si annulla in $4$. L'insieme soluzione è $(-1,4]$.
:::

## Equazioni e disequazioni con radicali

:::definizione{#equazioni-con-radici titolo="Vincoli prima di elevare al quadrato"}
L'equazione $\sqrt{A(x)}=B(x)$ equivale a imporre $A(x)=B(x)^2$ e $B(x)\ge0$ sui valori in cui le espressioni sono definite. Per $\sqrt{A(x)}<B(x)$ si impongono $A(x)\ge0$ e $B(x)>0$ prima del confronto $A(x)<B(x)^2$. Per un confronto con verso opposto, il caso $B(x)<0$ va considerato separatamente.
:::

:::esempio{titolo="Una soluzione che rispetta il segno"}
Da $\sqrt{x+6}=x$ occorre $x\ge0$. Elevando al quadrato risulta $x^2-x-6=0$, quindi $x=-2$ oppure $x=3$. Il solo valore ammesso è $3$, per il quale entrambi i membri valgono $3$.
:::
