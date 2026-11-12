---
titolo: Algebra, equazioni e disequazioni
sommario: Calcolo letterale, scomposizioni, dominio, equazioni, disequazioni e sistemi con passaggi verificabili.
---

Quando un problema chiede un valore, scegli un simbolo per indicarlo e precisa quali valori può assumere. Un prezzo è positivo, un numero di ingressi è intero e un denominatore deve essere non nullo. Questi vincoli servono anche al termine del calcolo, quando controlli i risultati.

## Calcolo letterale e prodotti notevoli

:::definizione{#calcolo-letterale titolo="Termini simili e sostituzione"}
Un monomio come $-3x^2y$ ha coefficiente $-3$ e parte letterale $x^2y$. Si possono sommare i coefficienti dei monomi con la stessa parte letterale. Per esempio, $5x^2y-3x^2y=2x^2y$. In $5x^2y-3xy^2$ le potenze delle lettere sono diverse e i due termini restano distinti.

Quando sostituisci un numero negativo in una potenza, scrivi la base fra parentesi. Per $x=-2$, l’espressione $3x^2-4x$ vale $3(-2)^2-4(-2)=12+8=20$.
:::

:::osservazione{#prodotti-notevoli titolo="Distribuzione e tre identità"}
La proprietà distributiva dà $a(b+c)=ab+ac$. Quando la parentesi è preceduta da un meno, tutti i termini cambiano segno. Per esempio, $2(x-1)-(x+4)=2x-2-x-4=x-6$.

Sviluppando i prodotti si ottengono le identità

$$
(a+b)^2=a^2+2ab+b^2,\qquad (a-b)^2=a^2-2ab+b^2,\qquad
(a-b)(a+b)=a^2-b^2.
$$

Per controllare $(2x-3)^2$, riconosci i quadrati $4x^2$ e $9$, e il doppio prodotto $2(2x)(-3)=-12x$. Il risultato è $4x^2-12x+9$.
:::

## Scomposizioni e frazioni algebriche

:::osservazione{#scomposizioni titolo="Da somma a prodotto"}
Cerca un fattore comune. Per esempio, $12x^3-8x^2=4x^2(3x-2)$. Poi verifica se il fattore rimasto è un prodotto notevole oppure un trinomio scomponibile.

Nel trinomio $x^2+bx+c$ puoi cercare due numeri con somma $b$ e prodotto $c$. In $x^2+x-12$ questi numeri sono $4$ e $-3$. Si ottiene $(x+4)(x-3)$ e lo sviluppo restituisce il trinomio iniziale.
:::

:::definizione{#dominio-algebrico titolo="Prima il dominio"}
Una frazione algebrica è definita quando il denominatore è diverso da zero. Ad esempio, $\dfrac{x^2-25}{x-5}$ è definita per $x\ne5$. Nel dominio si può semplificare il fattore $x-5$ e trovare $x+5$.

L’espressione semplificata $x+5$ ha un valore anche in $5$. Quel valore resta escluso per la frazione di partenza.
:::

:::attenzione
Si semplificano fattori. Nel rapporto $\dfrac{x(x+2)}x$, il fattore $x$ si può semplificare se $x\ne0$. Nella somma $\dfrac{x+2}x$ si può invece scrivere $1+\dfrac2x$, sempre per $x\ne0$.
:::

## Equazioni di primo grado

:::osservazione{#equazioni-lineari titolo="Operare sui due membri"}
Un’equazione chiede per quali valori di $x$ i due membri sono uguali. Puoi aggiungere o sottrarre la stessa quantità ai due membri. Puoi anche moltiplicare o dividere entrambi per un numero non nullo.

Per risolvere $4(x-2)=2x+10$, sviluppa la parentesi e sottrai $2x$ a entrambi i membri. Si ottiene $2x-8=10$. Aggiungi $8$ e dividi per $2$, ottenendo $x=9$. Sostituendo, i due membri valgono entrambi $28$.
:::

:::esempio{titolo="Quando l'incognita scompare"}
Da $5(x+1)=5x+5$ si arriva a $5=5$, quindi ogni reale è soluzione. Da $5(x+1)=5x+6$ si arriva a $5=6$, quindi non esistono soluzioni. Il risultato dipende dall’uguaglianza che resta dopo aver eliminato i termini con $x$.
:::

:::osservazione{#problemi-con-equazioni titolo="Tradurre un problema"}
Un costo complessivo di $47$ euro comprende una quota di $11$ euro e $4$ euro per visita. Posto $x$ il numero di visite, l’equazione è $11+4x=47$. Tolta la quota iniziale restano $36$ euro, perciò $x=9$. Il risultato è un intero non negativo e soddisfa la condizione del problema.
:::

## Disequazioni lineari e intervalli

:::osservazione{#disequazioni-lineari titolo="Verso e inclusione degli estremi"}
In una disequazione, aggiungere o sottrarre la stessa quantità conserva il verso. Moltiplicare o dividere per un numero positivo conserva il verso. Un fattore negativo lo inverte.

In $-3x+2>8$ si ottiene $-3x>6$ e quindi $x<-2$. L’intervallo $(-\infty,-2)$ esclude $-2$. Invece $(-\infty,-2]$ lo include. L’infinito resta sempre un estremo aperto.
:::

:::esempio{#sistemi-di-disequazioni titolo="Condizioni da rispettare insieme"}
Se $x+2\ge0$ e $2x<6$ devono valere entrambe, ottieni $x\ge-2$ e $x<3$. L’intersezione è $[-2,3)$. Il valore $-2$ rispetta entrambe le condizioni. Il valore $3$ viola la seconda, che è stretta.
:::

## Sistemi lineari

:::definizione{#sistemi-lineari titolo="Sostituzione ed eliminazione"}
Un sistema di due equazioni richiede una coppia $(x,y)$ che soddisfi entrambe. Se un’equazione dà già $y$ in funzione di $x$, puoi sostituire quella formula nell’altra. Puoi anche sommare o sottrarre le due equazioni dopo aver reso uguali o opposti i coefficienti di un’incognita.

Per esempio, nel sistema $x+y=11$ e $x-y=3$, sommare dà $2x=14$. Con $x=7$, la prima equazione dà $y=4$. La coppia $(7,4)$ verifica anche $7-4=3$.
:::

:::attenzione
Due equazioni proporzionali possono descrivere la stessa condizione. Il sistema $x+y=4$ e $2x+2y=8$ ha infinite soluzioni, perché la seconda equazione è il doppio della prima. Con $2x+2y=9$ la coppia di equazioni sarebbe incompatibile.
:::

## Secondo grado e segno dei prodotti

:::osservazione{#equazioni-quadratiche titolo="Fattorizzazione e discriminante"}
In un’equazione $ax^2+bx+c=0$ con $a\ne0$, verifica prima se puoi scomporre il polinomio. In $x^2-7x+12=0$ trovi $(x-3)(x-4)=0$, perciò le soluzioni sono $3$ e $4$.

Se la scomposizione non è immediata, calcola $\Delta=b^2-4ac$. Con $\Delta>0$ ci sono due radici reali, con $\Delta=0$ una radice reale doppia, con $\Delta<0$ nessuna radice reale. Quando $\Delta\ge0$, le radici si calcolano con $x=\dfrac{-b\pm\sqrt{\Delta}}{2a}$.
:::

:::esempio{#segno-del-prodotto titolo="Una disequazione di secondo grado"}
Per $(x-2)(x+3)\le0$, i punti che dividono la retta sono $-3$ e $2$. Sotto $-3$ i due fattori sono negativi e il prodotto è positivo. Fra $-3$ e $2$ i fattori hanno segni opposti e il prodotto è negativo. Sopra $2$ sono entrambi positivi. Il verso ammette il valore zero, quindi la soluzione è $[-3,2]$.
:::

## Frazioni, radicali e valori assoluti nelle equazioni

:::osservazione{#equazioni-fratte titolo="Controllare i valori esclusi"}
Per risolvere $\dfrac{x+4}{x-2}=\dfrac6{x-2}$, escludi prima $x=2$. Moltiplicando per $x-2$ nel dominio ottieni $x+4=6$. Il solo candidato è $2$, già escluso. L’equazione non ha soluzioni.
:::

:::esempio{#equazioni-con-radice titolo="Verificare i candidati dopo il quadrato"}
In $\sqrt{x+2}=x$ il radicando dev’essere non negativo e anche il secondo membro dev’essere non negativo. Elevando al quadrato si ottiene $x^2-x-2=0$, con candidati $2$ e $-1$. Il candidato $-1$ è negativo e va scartato. Per $x=2$ l’uguaglianza iniziale è $\sqrt4=2$.
:::

:::esempio{#equazioni-con-modulo titolo="Leggere il modulo come distanza"}
In $|x-4|=3$ si cercano i numeri a distanza $3$ da $4$, cioè $1$ e $7$. Se la distanza dev’essere minore di $3$, si prendono i valori fra $1$ e $7$, estremi esclusi. Se dev’essere almeno $3$, si prendono $x\le1$ oppure $x\ge7$.
:::

:::osservazione{#segno-di-una-frazione titolo="Segni del numeratore e del denominatore"}
Per $\dfrac{x-4}{x+2}\ge0$, separa gli intervalli usando $-2$ e $4$. Per $x<-2$ entrambi i termini sono negativi. Per $-2<x<4$ hanno segno opposto. Per $x>4$ sono positivi. In $4$ il numeratore vale zero e il denominatore è diverso da zero, mentre $-2$ resta fuori dal dominio. Si ottiene $(-\infty,-2)\cup[4,+\infty)$.
:::
