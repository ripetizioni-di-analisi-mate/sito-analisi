---
titolo: "Funzioni e grafici per il TOLC-E"
sommario: "Dominio e lettura dei grafici, modelli elementari, equazioni e disequazioni esponenziali e logaritmiche."
---

:::percorso
Le equazioni di aritmetica e algebra permettono di trovare i punti in cui una funzione assume un valore assegnato. Qui si collega il calcolo alla lettura di grafici, tabelle e semplici modelli di costo. Con esponenziali e logaritmi la scelta della base stabilisce anche il verso delle disequazioni.
:::

## Corrispondenza, dominio e immagine

:::definizione{#dominio-e-immagine titolo="I valori di ingresso e di uscita"}
Una **funzione** associa a ciascun elemento $x$ del proprio dominio un solo valore $f(x)$. L'immagine è l'insieme dei valori effettivamente assunti. Per trovare il dominio reale di una formula si raccolgono tutti i vincoli. Un denominatore deve essere diverso da zero. Il radicando di una radice quadrata deve essere almeno zero. L'argomento di un logaritmo deve essere strettamente positivo.
:::

:::esempio{titolo="Due vincoli contemporanei"}
In $f(x)=\dfrac{\sqrt{2x-4}}{x-5}$ servono $x\ge2$ e $x\ne5$. Il dominio è quindi $[2,5)\cup(5,+\infty)$. Se un modello descrive una quantità intera, come un numero di articoli, si interseca il dominio della formula anche con i valori interi ammessi.
:::

## Zeri, segno e andamento

:::definizione{#lettura-del-grafico titolo="Ascisse, ordinate e intervalli"}
In un punto del grafico $(x,f(x))$, l'ascissa è l'ingresso e l'ordinata è l'uscita. Gli **zeri** sono le ascisse dei punti sull'asse orizzontale. Dove il grafico è sopra tale asse, la funzione è positiva. L'intercetta verticale, quando esiste, ha ordinata $f(0)$.

Per verificare se una funzione è crescente si confrontano le ordinate a due ascisse in ordine crescente. L'altezza del grafico rispetto all'asse orizzontale indica il segno, mentre la variazione di altezza da sinistra a destra indica l'andamento.
:::

:::esempio{titolo="Segno di una retta crescente"}
La funzione $f(x)=2x-4$ è crescente. Si annulla in $x=2$ ed è negativa a sinistra di tale punto.
::grafico{f="2*x-4" xmin=-1 xmax=5 ymin=-6 ymax=7 punti="0,-4;2,0;4,4" legenda=0 titolo="Grafico di y = 2x − 4"}
:::

## Rette e modelli a tratti

:::definizione{#funzioni-affini titolo="Variazione costante e quota iniziale"}
Una funzione **affine** ha forma $f(x)=mx+q$. Per ogni aumento di una unità di $x$, l'uscita varia di $m$. Il valore $q=f(0)$ è la quota iniziale. Una funzione a tratti può avere una formula diversa dopo una soglia. Nel punto di soglia si usa il tratto che contiene quel valore.
:::

:::esempio{titolo="Confronto tra due tariffe"}
Due servizi costano rispettivamente $C_A(x)=12+3x$ e $C_B(x)=5x$ euro per $x$ utilizzi. L'uguaglianza $12+3x=5x$ dà $x=6$. La differenza $C_A(x)-C_B(x)=12-2x$ è positiva per $x<6$, quindi prima di sei utilizzi conviene $B$.
:::

## Parabole, valore assoluto e trasformazioni

:::definizione{#trasformazioni-del-grafico titolo="Traslazioni, riflessioni e vertici"}
La trasformazione $g(x)=f(x-h)+k$ sposta ogni punto del grafico di $h$ in orizzontale e di $k$ in verticale. Il segno davanti alla funzione, in $g(x)=-f(x)$, cambia l'ordinata e riflette il grafico rispetto all'asse $x$. In $g(x)=f(-x)$ cambia l'ascissa e la riflessione avviene rispetto all'asse $y$.

La parabola $a(x-h)^2+k$ con $a\ne0$ ha vertice $(h,k)$. Ha minimo $k$ se $a>0$ e massimo $k$ se $a<0$. Il grafico di $|x-h|+k$ ha due tratti rettilinei che si incontrano in $(h,k)$.
:::

:::esempio{titolo="Il vertice dopo una traslazione"}
Per $f(x)=-(x-4)^2+9$, il quadrato si annulla solo in $4$ e rende tutti gli altri valori minori di $9$. Il massimo è quindi $9$ e viene raggiunto in $x=4$.
::grafico{f="-(x-4)^2+9" xmin=0 xmax=8 ymin=-5 ymax=10 punti="1,0;4,9;7,0" legenda=0 titolo="Parabola con massimo in (4, 9)"}
:::

## Esponenziali e fattori ripetuti

:::definizione{#equazioni-esponenziali titolo="Confrontare le potenze con la stessa base"}
Per $a>0$ e $a\ne1$, la funzione $a^x$ ha dominio reale, immagine positiva e passa per $(0,1)$. Se $a>1$ è strettamente crescente. Se $0<a<1$ è strettamente decrescente, quindi il confronto tra due potenze con la stessa base si inverte quando si passa agli esponenti.

In un modello con fattore costante $a$ per periodo, da un valore iniziale $V_0$ si arriva a $V_n=V_0a^n$ dopo $n$ periodi.
:::

:::esempio{titolo="Disequazione con base minore di uno"}
Poiché $\dfrac1{16}=(\dfrac12)^4$, la disequazione $(\dfrac12)^{x+1}>\dfrac1{16}$ diventa $x+1<4$. L'insieme soluzione è $x<3$.
:::

## Logaritmi e proprietà

:::definizione{#proprieta-dei-logaritmi titolo="Dalla potenza al suo esponente"}
Per $a>0$, $a\ne1$ e $u>0$, il numero $\log_a u$ è l'esponente a cui si eleva $a$ per ottenere $u$. È quindi la funzione inversa di $a^x$, con dominio $(0,+\infty)$. Per $u,v>0$ valgono
$$
\begin{aligned}
\log_a(uv)&=\log_a u+\log_a v,\\
\log_a\left(\frac{u}{v}\right)&=\log_a u-\log_a v,\\
\log_a(u^c)&=c\log_a u.
\end{aligned}
$$
:::

:::esempio{titolo="Ridurre un calcolo a una potenza nota"}
La differenza $\log_3 54-\log_3 2$ è $\log_3 27$. Poiché $27=3^3$, il risultato è $3$.
:::

## Equazioni e disequazioni logaritmiche

:::definizione{#equazioni-logaritmiche titolo="Dominio, confronto e verifica"}
Prima di unire due logaritmi occorre imporre la positività di ciascun argomento. Per $a>1$, il logaritmo mantiene l'ordine degli argomenti positivi. Per $0<a<1$, lo inverte. Dopo il calcolo si mantengono soltanto le soluzioni che appartengono al dominio iniziale.
:::

:::esempio{titolo="Una disequazione con due argomenti"}
Per $\log_2(x+3)\le\log_2(7-x)$ occorre $-3<x<7$. Con base $2$, il confronto dà $x+3\le7-x$, cioè $x\le2$. L'intersezione dei vincoli è $(-3,2]$.
:::

## Composizione e valore inverso

:::definizione{#composizione-e-inversa titolo="Applicare o invertire una corrispondenza"}
La composizione $(f\circ g)(x)$ è $f(g(x))$. Per calcolarla si applica prima $g$, poi $f$. Il risultato di $g$ deve appartenere al dominio di $f$. Una funzione è invertibile sulla propria immagine se a ogni uscita corrisponde un solo ingresso.
:::

:::esempio{titolo="Ricavare l'ingresso dall'uscita"}
Se $f(x)=3x+2$, per trovare $f^{-1}(14)$ si risolve $3x+2=14$. Si ottiene $x=4$, quindi $f^{-1}(14)=4$.
:::
