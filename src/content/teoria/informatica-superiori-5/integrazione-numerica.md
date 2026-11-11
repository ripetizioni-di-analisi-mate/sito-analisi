---
titolo: "Integrazione numerica"
sommario: "Approssimare un integrale con rettangoli, trapezi e il metodo di Simpson."
---

## Suddividere l’intervallo

:::definizione{#partizione titolo="Griglia uniforme"}
Su $[a,b]$ con $n$ intervalli uguali il passo è $h=\dfrac{b-a}{n}$. I nodi sono $x_i=a+ih$ per $i$ da 0 a $n$. Tre intervalli richiedono quattro nodi, estremi inclusi.
:::

## Usare rettangoli

:::definizione{#rettangoli titolo="Metodo dei rettangoli sinistri"}
In ciascun intervallo si usa un rettangolo di larghezza $h$ e altezza $f(x_i)$ al bordo sinistro. La somma è $h\sum_{i=0}^{n-1} f(x_i)$. Se $f$ è crescente, i rettangoli sinistri sottostimano l’integrale.
:::

## Campionare al centro

:::definizione{#punti-medi titolo="Metodo dei punti medi"}
Per il metodo dei punti medi si valuta $f$ al centro di ogni intervallo. Su $[0,2]$ con due intervalli i campioni sono $0{,}5$ e $1{,}5$. La somma delle altezze va moltiplicata per il passo.
:::

## Unire gli estremi con segmenti

:::definizione{#trapezi titolo="Metodo dei trapezi"}
Su un intervallo la stima è il passo moltiplicato per la media delle due altezze. Nel metodo composto i nodi interni valgono due volte perché appartengono a due intervalli. I trapezi integrano esattamente una funzione affine.
:::

## Raggruppare gli intervalli a coppie

:::definizione{#simpson titolo="Metodo di Simpson"}
Su due intervalli di passo $h$, la formula è $\dfrac h3[f(x_0)+4f(x_1)+f(x_2)]$. Il metodo composto richiede un numero pari di intervalli. L’approssimazione è esatta per polinomi fino al grado tre.
:::

## Confrontare due stime

:::definizione{#raffinamento titolo="Raffinamento del passo"}
Raddoppiando il numero di intervalli si dimezza il passo. La differenza fra due stime indica quanto il risultato cambia al raffinamento. Una garanzia quantitativa dell’errore richiede ipotesi aggiuntive sulla funzione o una stima teorica.
:::

## Laboratorio in Python

:::esempio{titolo="Sommare i trapezi e raffinare la griglia"}
Si usa $f(x)=x^2$ su $[0,2]$. Per avere un confronto esatto si usa l’integrale $\dfrac83$. La funzione richiede un numero intero positivo di intervalli.

```python
def trapezi(f, a, b, n):
    if n <= 0:
        raise ValueError("Serve almeno un intervallo")
    h = (b - a) / n
    interni = sum(f(a + i * h) for i in range(1, n))
    return h * ((f(a) + f(b)) / 2 + interni)


def quadrato(x):
    return x * x


assert trapezi(quadrato, 0, 2, 2) == 3
assert trapezi(quadrato, 0, 2, 4) == 2.75
for n in (2, 4, 8):
    stima = trapezi(quadrato, 0, 2, n)
    print(n, stima, abs(stima - 8 / 3))
```

Con 2, 4 e 8 intervalli le stime sono rispettivamente $3$, $2{,}75$ e $2{,}6875$. Per questo esempio si avvicinano al valore esatto per eccesso.
:::
