---
titolo: Successioni e progressioni
sommario: Successioni esplicite e ricorsive, progressioni aritmetiche e geometriche, somme finite, interpolazione e modelli discreti.
---

## Successioni numeriche

:::definizione{#successioni titolo="Termine e indice"}
Una **successione** assegna un numero a ogni indice naturale. In questo argomento gli indici partono da $1$, salvo indicazione diversa, e il termine di indice $n$ si scrive $a_n$. Per esempio $a_n=2n-1$ dà $1,3,5,7,\ldots$.

Una formula **esplicita** calcola un termine direttamente dall'indice. Una definizione **ricorsiva** assegna uno o più termini iniziali e una regola per ricavare i successivi. La successione precedente si può descrivere con $a_1=1$ e $a_{n+1}=a_n+2$. L'indice conta la posizione, mentre $a_n$ è il valore del termine.
:::

## Crescenza e differenze

:::definizione{#monotonia titolo="Monotonia di una successione"}
Una successione è crescente se $a_{n+1}\geq a_n$ per ogni indice, strettamente crescente se la disuguaglianza è stretta. È decrescente se vale la disuguaglianza opposta. Il confronto si può studiare tramite il segno di $a_{n+1}-a_n$.

Per $a_n=n^2$, si ottiene $a_{n+1}-a_n=(n+1)^2-n^2=2n+1>0$, quindi la successione è strettamente crescente. Per $a_n=(-1)^n$ i termini alternano $-1$ e $1$, quindi la successione non è monotona. Lo studio dei limiti delle successioni appartiene al corso del quinto anno.
:::

## Progressioni aritmetiche

::::teorema{#aritmetiche titolo="Differenza costante e termine generale"}
Una **progressione aritmetica** ha differenza costante $d$ tra termini consecutivi. Se il primo termine è $a_1$, allora
$$
a_n=a_1+(n-1)d.
$$
:::dimostrazione
Per passare dal primo al termine di indice $n$ si compiono $n-1$ incrementi, tutti uguali a $d$. La somma degli incrementi è $(n-1)d$, da cui segue la formula.
:::
::::

:::esempio
Per $a_1=4$ e $d=3$ i primi termini sono $4,7,10,13$. Il ventesimo è $a_{20}=4+19\cdot3=61$. Se sono noti $a_4=13$ e $a_{10}=31$, si ha $31-13=(10-4)d$, quindi $d=3$ e $a_1=4$. Il denominatore è la differenza degli indici.
:::

## Somme di progressioni aritmetiche

::::teorema{#somma-aritmetica titolo="Somma dei primi n termini"}
Per una progressione aritmetica,
$$
S_n=a_1+\cdots+a_n=\frac{n(a_1+a_n)}2
=\frac n2\bigl(2a_1+(n-1)d\bigr).
$$
:::dimostrazione
Si scrive la somma una volta nell'ordine normale e una volta in quello inverso. Ogni coppia verticale vale $a_1+a_n$, perché l'incremento di un termine compensa il decremento dell'altro. Sommando le due righe si ottiene $2S_n=n(a_1+a_n)$.
:::
::::

:::esempio
La somma dei primi $20$ numeri dispari è $S_{20}=\dfrac{20(1+39)}2=400$. In generale i primi $n$ dispari sommano a $n^2$, perché l'ultimo è $2n-1$.
:::

## Progressioni geometriche

:::definizione{#geometriche titolo="Ragione e termine generale"}
Una **progressione geometrica** soddisfa $a_{n+1}=q\,a_n$, con ragione costante $q$. Il termine generale è
$$
a_n=a_1q^{n-1}.
$$
Se i termini sono non nulli, la ragione è il rapporto tra due consecutivi. Per $a_1=3$ e $q=2$ si ottengono $3,6,12,24,\ldots$ e $a_8=3\cdot2^7=384$. Con ragione negativa i segni si alternano. Con $a_1>0$ e $0<q<1$ la progressione è positiva e decrescente.

Per $q=0$ si ha $a_1,0,0,\ldots$; il primo termine viene mantenuto come dato iniziale. Se $a_1=0$, tutti i termini sono nulli qualunque sia $q$.
:::

## Somme di progressioni geometriche

::::teorema{#somma-geometrica titolo="Somma geometrica finita"}
Per $q\neq1$ la somma dei primi $n\geq1$ termini è
$$
S_n=a_1\frac{1-q^n}{1-q}.
$$
Se $q=1$, tutti i termini sono uguali e $S_n=na_1$.

:::dimostrazione
Si moltiplica $S_n=a_1+a_1q+\cdots+a_1q^{n-1}$ per $q$ e si sottraggono le espressioni. I termini intermedi si cancellano, dando $S_n-qS_n=a_1-a_1q^n$. Poiché $1-q\neq0$, si divide per $1-q$.
:::
::::

:::esempio
Per sommare $2+6+18+54+162$ si ha $a_1=2$, $q=3$, $n=5$, quindi $S_5=2\dfrac{1-3^5}{1-3}=242$. Numeratore e denominatore sono entrambi negativi, perciò il risultato è positivo.
:::

## Interpolazione e medie

:::teorema{#interpolazione titolo="Inserire termini tra due valori"}
Per inserire $k$ termini tra $A$ e $B$ in una progressione aritmetica si hanno $k+1$ intervalli uguali, quindi $d=\dfrac{B-A}{k+1}$. Per inserire termini positivi in una progressione geometrica tra $A,B>0$ si impone $q^{k+1}=\dfrac BA$, da cui $q=\left(\dfrac BA\right)^{\frac1{k+1}}$.

Tra $2$ e $14$, inserendo tre termini aritmetici, si ottiene $d=3$ e la sequenza $2,5,8,11,14$. Tra $3$ e $48$, inserendo tre termini geometrici positivi, si ha $q=2$ e la sequenza $3,6,12,24,48$. Con un solo termine intermedio si ritrovano la media aritmetica $\dfrac{A+B}2$ e la media geometrica positiva $\sqrt{AB}$.
:::

## Modelli discreti e soglie

:::esempio{#modelli titolo="Una quantità che raddoppia"}
All'istante $n=0$ una coltura contiene $500$ cellule e raddoppia a ogni intervallo di osservazione. In questo esempio gli indici partono da $0$, quindi $N_n=500\cdot2^n$. Per raggiungere almeno $10000$ cellule si risolve $2^n\geq20$.

Poiché $2^4=16<20$ e $2^5=32\geq20$, il primo indice è $n=5$. Il logaritmo darebbe la soglia reale $\dfrac{\ln20}{\ln2}$, ma il modello ammette soltanto indici interi.
:::

:::esempio
Una sala ha $12$ file; la prima ha $15$ posti e ogni fila successiva ha $2$ posti in più. L'ultima ha $15+11\cdot2=37$ posti. Il totale è $\dfrac{12(15+37)}2=312$. La differenza costante giustifica il modello aritmetico, mentre una percentuale costante avrebbe richiesto una progressione geometrica.
:::
