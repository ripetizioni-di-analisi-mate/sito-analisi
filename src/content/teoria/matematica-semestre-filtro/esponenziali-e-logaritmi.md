---
titolo: "Esponenziali, logaritmi e applicazioni"
sommario: "Proprietà dei logaritmi, modelli esponenziali, pH di soluzioni ideali e livelli sonori."
---

## Esponenziali

:::definizione{#esponenziale titolo="La variabile all'esponente"}
Per $a>0$, $a\ne1$, la funzione $y=a^x$ è un'esponenziale. Ha valori positivi e passa per $(0,1)$. È crescente per $a>1$ e decrescente per $0<a<1$.

Nell'equazione $2^x=8$ si scrive $8=2^3$, quindi $x=3$. Il modello $N(t)=N_0e^{-kt}$, con $k>0$, descrive una diminuzione esponenziale; il prodotto $kt$ è privo di dimensioni.
:::

## Logaritmi e dominio

:::definizione{#logaritmo titolo="Esponente corrispondente a un numero"}
Per $a>0$, $a\ne1$ e $x>0$, $\log_a x$ è l'esponente $y$ tale che $a^y=x$. Per esempio $\log_{10}1000=3$ e $\log_{10}0{,}01=-2$. Si usa $\ln x$ per il logaritmo in base $e$.

Nei modelli fisici l'argomento del logaritmo è un rapporto privo di dimensioni. La condizione $x>0$ si verifica prima di applicare le proprietà.
:::

## Proprietà e cambio di base

:::teorema{#proprieta titolo="Logaritmi di prodotti, quozienti e potenze"}
Per $x,y>0$ e $r$ reale valgono
$$
\log_a(xy)=\log_a x+\log_a y,\qquad
\log_a\frac{x}{y}=\log_a x-\log_a y,
$$
$$
\log_a(x^r)=r\log_a x,\qquad
\log_a x=\frac{\ln x}{\ln a}.
$$
Queste identità seguono dalle proprietà delle potenze. Per esempio $\log_{10}(2\cdot10^{-3})=\log_{10}2-3\approx-2{,}699$. L'uguaglianza permette di distinguere l'effetto del coefficiente da quello della potenza di dieci.
:::

## pH e concentrazione

:::osservazione{#ph titolo="Applicazione ai logaritmi decimali"}
Il pH è definito attraverso l'attività degli ioni idrogeno. Negli esercizi su soluzioni acquose sufficientemente diluite e ideali si usa l'approssimazione
$$
\mathrm{pH}\approx-\log_{10}\left(\frac{[\mathrm{H_3O^+}]}{1\,\mathrm{mol/L}}\right).
$$
Se la concentrazione vale $10^{-3}\,\mathrm{mol/L}$, il pH è circa $3$. Viceversa, dato il pH, $[\mathrm{H_3O^+}]\approx10^{-\mathrm{pH}}\,\mathrm{mol/L}$. Una concentrazione dieci volte maggiore abbassa il pH di una unità in questa approssimazione.
:::

## Livelli sonori

:::definizione{#decibel titolo="Logaritmo di un rapporto di intensità"}
Il livello di intensità sonora è $L=10\log_{10}\left(\dfrac{I}{I_0}\right)\,\mathrm{dB}$, dove $I>0$ e $I_0>0$ è l'intensità di riferimento. Se $\dfrac{I}{I_0}=10^4$, allora $L=40\,\mathrm{dB}$.

Per due intensità la differenza dei livelli è $\Delta L=10\log_{10}\left(\dfrac{I_2}{I_1}\right)\,\mathrm{dB}$. Un'intensità cento volte maggiore dà quindi un aumento di $20\,\mathrm{dB}$.
:::

## Tempo di dimezzamento

:::osservazione{#dimezzamento titolo="Ricavare il tempo in un modello esponenziale"}
Nel modello $N=N_0e^{-kt}$, il rapporto $\dfrac{N}{N_0}=e^{-kt}$ permette di applicare il logaritmo naturale. Si ricava
$$
t=\frac{\ln(N_0/N)}{k},\qquad T_{\frac12}=\frac{\ln2}{k}.
$$
Dopo due tempi di dimezzamento resta $\dfrac14$ della quantità iniziale; dopo tre resta $\dfrac18$. Per esempio, con $T_{\frac12}=4\,\mathrm{h}$, dopo $12\,\mathrm{h}$ resta il $12{,}5\%$ iniziale.
:::
