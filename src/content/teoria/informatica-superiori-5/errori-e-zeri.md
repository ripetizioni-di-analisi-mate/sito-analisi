---
titolo: "Approssimazioni e ricerca degli zeri"
sommario: "Errori assoluti e relativi, bisezione e metodo di Newton."
---

## Misurare l’errore

:::definizione{#errore titolo="Errore assoluto e relativo"}
Se $x$ è il valore esatto e $\widehat x$ un’approssimazione, l’errore assoluto è $|\widehat x-x|$. L’errore relativo è il rapporto tra errore assoluto e $|x|$, con $x\ne 0$. Un errore di $0{,}2$ su $10$ equivale al $2\%$.
:::

## Leggere la precisione dei dati

:::definizione{#arrotondamento titolo="Errore di arrotondamento"}
L’arrotondamento al centesimo sostituisce un valore con il centesimo più vicino. Il massimo scarto è $0{,}005$. I calcoli al computer usano inoltre un insieme finito di numeri rappresentabili. Confrontare direttamente due risultati in virgola mobile può dare esiti inattesi.
:::

## Isolare una radice

:::definizione{#cambio-segno titolo="Cambio di segno e continuità"}
Se $f$ è continua su $[a,b]$ e assume segni opposti agli estremi, allora esiste almeno uno zero fra $a$ e $b$. Per $f(x)=x^2-2$, $f(1)=-1$ e $f(2)=2$, quindi l’intervallo $[1,2]$ contiene uno zero. Uno zero può esistere anche senza cambio di segno, come per $x^2$ fra $-1$ e $1$.
:::

## Dimezzare l’intervallo

:::definizione{#bisezione titolo="Metodo di bisezione"}
Si calcola il punto medio $m$. Se $f(m)=0$, la radice è trovata. Altrimenti si conserva il sottointervallo con cambio di segno. Nel caso di $x^2-2$ su $[1,2]$, il primo medio è $1{,}5$ e $f(1{,}5)>0$, quindi si conserva $[1,1{,}5]$.
:::

## Stabilire quando fermarsi

:::definizione{#tolleranza titolo="Tolleranza sul punto medio"}
Dopo $k$ dimezzamenti, la larghezza è $\dfrac{b-a}{2^k}$. Il punto medio del nuovo intervallo dista da almeno una radice al più metà della larghezza. Se si vuole un errore in $x$ di al più $\varepsilon$, ci si può fermare quando la larghezza è al più $2\varepsilon$.
:::

## Usare la tangente

:::definizione{#newton titolo="Metodo di Newton"}
Dal valore corrente $x_k$ si calcola $x_{k+1}=x_k-\dfrac{f(x_k)}{f'(x_k)}$. Geometricamente si usa l’intersezione fra la tangente e l’asse orizzontale. Il passo richiede derivata non nulla. La convergenza dipende dalla funzione e dalla scelta del punto iniziale.
:::

## Laboratorio in Python

:::esempio{titolo="Calcolare la radice di due per bisezione"}
Il codice usa una funzione continua, estremi di segno opposto e una tolleranza fissa. A ogni iterazione mantiene la radice nell’intervallo corrente.

```python
def f(x):
    return x * x - 2


a, b = 1.0, 2.0
tolleranza = 0.001

while b - a > 2 * tolleranza:
    m = (a + b) / 2
    if f(m) == 0:
        a = b = m
        break
    if f(m) < 0:
        a = m
    else:
        b = m

radice = (a + b) / 2
assert b - a <= 2 * tolleranza
print(radice)
```

Per questa funzione sull’intervallo scelto, l’estremo sinistro ha segno negativo e il destro positivo. Di conseguenza un medio negativo sostituisce l’estremo sinistro. Il valore stampato è circa $1{,}41504$.
:::
