---
titolo: "Numeri reali e radicali"
sommario: "Numeri irrazionali, radicali reali, condizioni di esistenza, operazioni, razionalizzazioni e potenze razionali."
---

## Numeri razionali e irrazionali

:::definizione{#reali titolo="L’insieme dei numeri reali"}
Un numero **razionale** si scrive come $\dfrac pq$, con $p,q$ interi e $q\ne0$. La sua scrittura decimale è finita oppure periodica. Un numero **irrazionale** ha una scrittura decimale infinita non periodica e non è il rapporto di due interi. I due tipi di numeri formano insieme $\mathbb R$.

Per esempio $\dfrac38=0{,}375$ è razionale, mentre $\sqrt2$ è irrazionale. I valori $1{,}41$ e $1{,}414$ sono approssimazioni di $\sqrt2$. Nei calcoli si conserva il valore esatto e si arrotonda alla precisione richiesta.

Se $\sqrt2=\dfrac pq$ fosse una frazione ridotta, da $p^2=2q^2$ seguirebbe che $p$ è pari. Scrivendo $p=2k$, si ricaverebbe $q^2=2k^2$, quindi anche $q$ sarebbe pari. La frazione non sarebbe ridotta; questa contraddizione dimostra l'irrazionalità.
:::

## Radici pari e dispari

:::definizione{#definizione titolo="Il radicale principale"}
Per $a\ge0$, $\sqrt[2m]{a}$ è l'unico numero non negativo la cui potenza di esponente $2m$ vale $a$. Per indice dispari $2m+1$, la radice esiste per ogni reale $a$ e ha lo stesso segno del radicando. L'indice è un intero positivo.

Quindi $\sqrt{25}=5$, $\sqrt[4]{16}=2$ e $\sqrt[3]{-27}=-3$. L'equazione $x^2=25$ ha invece due soluzioni, $x=\pm5$. Il simbolo $\sqrt{25}$ indica soltanto la radice principale.

La radice quadrata di $-4$ non è reale. La radice cubica di $-8$ vale $-2$, perché $(-2)^3=-8$.
:::

## Condizioni di esistenza

:::teorema{#dominio titolo="Radicandi e denominatori"}
Un radicale di indice pari richiede il radicando non negativo. Se il radicale è al denominatore, il radicando deve essere strettamente positivo.

Per $\sqrt{2x-6}$ si richiede $x\ge3$. Per $\dfrac1{\sqrt{2x-6}}$ si richiede $x>3$. Un indice dispari non impone da solo vincoli sul segno.

Se il radicando è una frazione, la frazione deve anche essere definita. Per $\sqrt{\dfrac{x-1}{x+2}}$ si studia il segno del quoziente e si esclude $x=-2$. Il dominio è $(-\infty,-2)\cup[1,+\infty)$.

::grafico{f="sqrt(x-1)" xmin=-1 xmax=8 ymin=-1 ymax=4 punti="1,0,pieno,A" titolo="Il grafico di $y=\sqrt{x-1}$ inizia in $(1;0)$"}
:::

## Semplificazione ed estrazione

:::teorema{#semplificazione titolo="Fattori quadrati e valore assoluto"}
Per $a\ge0$ vale $\sqrt{k^2a}=|k|\sqrt a$. In particolare $\sqrt{x^2}=|x|$ per ogni reale $x$. Il valore assoluto è necessario perché la radice principale è non negativa.

Per esempio $\sqrt{72}=6\sqrt2$, mentre $\sqrt{(-5)^2}=5$. Se $x<0$, da $\sqrt{x^2}$ si ottiene $-x$, che è positivo.

Con indice dispari vale $\sqrt[3]{a^3}=a$. La riduzione dell'indice e dell'esponente deve rispettare il dominio iniziale. Per esempio $\sqrt[6]{x^2}=\sqrt[3]{|x|}$ per tutti i reali, mentre $\sqrt[3]x$ sarebbe negativo per $x<0$.

::grafico{f="abs(x)" xmin=-4 xmax=4 ymin=-1 ymax=5 titolo="La funzione $y=\sqrt{x^2}=|x|$ assume valori non negativi"}
:::

## Operazioni

:::teorema{#operazioni titolo="Radicali simili, prodotti e quozienti"}
Per $a,b\ge0$ valgono $\sqrt a\sqrt b=\sqrt{ab}$ e, se $b>0$, $\dfrac{\sqrt a}{\sqrt b}=\sqrt{\dfrac ab}$. Si sommano i coefficienti dei radicali **simili**, cioè con lo stesso indice e lo stesso radicando.

Per esempio $\sqrt{12}+\sqrt{27}=2\sqrt3+3\sqrt3=5\sqrt3$. Invece $\sqrt2+\sqrt3$ resta una somma. Il suo quadrato è $5+2\sqrt6$, applicando il quadrato di un binomio.

La radice non si distribuisce sulla somma. Infatti $\sqrt{9+16}=5$, mentre $\sqrt9+\sqrt{16}=7$. Le formule di prodotto e quoziente non giustificano una formula analoga per la somma.
:::

## Razionalizzazione semplice

:::teorema{#razionalizzazione titolo="Eliminare una radice dal denominatore"}
**Razionalizzare** significa ottenere una frazione equivalente con denominatore razionale. Si moltiplicano numeratore e denominatore per lo stesso fattore non nullo.

Per esempio
$$
\frac5{\sqrt3}=\frac{5\sqrt3}{3}.
$$
Il prodotto $\sqrt3\sqrt3$ vale $3$. Per $\dfrac1{\sqrt[3]2}$ si moltiplica per $\sqrt[3]4$ e si ottiene $\dfrac{\sqrt[3]4}{2}$, perché il prodotto dei radicali al denominatore è $\sqrt[3]8=2$.

La trasformazione mantiene le esclusioni del dominio iniziale. Una semplificazione non rende ammissibile un valore che annullava il denominatore.
:::

## Il coniugato

:::teorema{#coniugato titolo="Somme e differenze di radicali"}
Il **coniugato** di $\sqrt a-\sqrt b$ è $\sqrt a+\sqrt b$. Per $a,b\ge0$ il loro prodotto vale $a-b$.

Per esempio
$$
\frac1{\sqrt5-\sqrt2}=\frac{\sqrt5+\sqrt2}{5-2}
=\frac{\sqrt5+\sqrt2}{3}.
$$
Si cambia il segno fra i termini, mentre i radicali restano invariati. L'identità usata è $(u-v)(u+v)=u^2-v^2$.

Se $a=b$, il denominatore iniziale è nullo e la frazione non esiste. Il nuovo denominatore $a-b$ conserva la stessa esclusione.
:::

## Potenze razionali e confronti

:::definizione{#potenze titolo="Esponenti frazionari"}
Per $a>0$, $p$ intero e $q$ intero positivo si definisce
$$
a^{\frac pq}=\sqrt[q]{a^p}.
$$
Per esempio $16^{\frac34}=8$ e $9^{-\frac12}=\dfrac13$. La base positiva permette di applicare le proprietà delle potenze senza cambiare il dominio.

La funzione $y=\sqrt x$ è crescente in $[0,+\infty)$. Per confrontare due radici quadrate si possono quindi confrontare i radicandi. Per confrontare $2\sqrt3$ e $3\sqrt2$, entrambi positivi, si confrontano i loro quadrati $12$ e $18$. Segue $2\sqrt3<3\sqrt2$.

L'elevamento al quadrato conserva l'ordine tra numeri non negativi; senza questa ipotesi il ragionamento non sarebbe valido.
:::
