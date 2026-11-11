---
titolo: "Ricerca, ordinamento e complessità degli algoritmi"
sommario: "Contare le operazioni e scegliere un algoritmo in base a dati e vincoli."
---

## Fissare la dimensione dell’input

:::definizione{#costo titolo="Costo di un algoritmo"}
Per stimare il lavoro si sceglie una misura dell’input, ad esempio il numero $n$ di elementi, e un’operazione da contare, ad esempio i confronti. Una ricerca sequenziale in un elenco di $n$ valori può eseguire $n$ confronti.
:::

## Leggere la crescita

:::definizione{#crescita titolo="Ordine di crescita"}
Una funzione è $O(g(n))$ se per $n$ sufficientemente grande il suo valore è limitato superiormente da un multiplo costante di $g(n)$. Per esempio $3n+2$ è $O(n)$ e cresce linearmente. Quando si conoscono anche limiti inferiori dello stesso ordine si può scrivere $\Theta(n)$.
:::

## Esaminare un elenco

:::definizione{#ricerca-lineare titolo="Ricerca lineare"}
La **ricerca lineare** confronta il bersaglio con un elemento alla volta. Può fermarsi al primo risultato. In un elenco non ordinato, per certificare che il bersaglio è assente occorre esaminare tutti gli elementi.
:::

## Dimezzare l’intervallo

:::definizione{#ricerca-binaria titolo="Ricerca binaria"}
La **ricerca binaria** richiede una sequenza ordinata. Dopo il confronto con l’elemento centrale mantiene la metà che può contenere il valore. Con accesso diretto agli indici richiede $O(\log n)$ confronti, perché l’intervallo si dimezza a ogni passo.
:::

## Ordinare per selezione

:::definizione{#ordinamento titolo="Ordinamento per selezione"}
A ogni passaggio si cerca il minimo nella parte non ordinata e lo si mette al suo inizio. I confronti sono $(n-1)+(n-2)+\cdots+1$, cioè $\dfrac{n(n-1)}2$. Il numero di confronti cresce quadraticamente anche se l’elenco è già ordinato.
:::

## Leggere cicli annidati

:::definizione{#cicli titolo="Conteggio nei cicli"}
Due cicli indipendenti, ognuno di $n$ iterazioni, eseguono $n^2$ iterazioni interne. Se il secondo scorre soltanto le posizioni successive alla prima, si visitano invece $\dfrac{n(n-1)}2$ coppie. In entrambi i casi la crescita è quadratica.
:::

## Laboratorio in Python

:::esempio{titolo="Misurare i confronti nella ricerca binaria"}
La funzione restituisce l’indice del valore trovato e il numero di confronti con gli elementi centrali. Per un valore assente restituisce `None` come indice. Si suppone che la sequenza sia ordinata in senso crescente.

```python
def ricerca_binaria(valori, bersaglio):
    sinistra = 0
    destra = len(valori) - 1
    confronti = 0
    while sinistra <= destra:
        centro = (sinistra + destra) // 2
        confronti += 1
        if valori[centro] == bersaglio:
            return centro, confronti
        if valori[centro] < bersaglio:
            sinistra = centro + 1
        else:
            destra = centro - 1
    return None, confronti


assert ricerca_binaria([2, 4, 6, 8, 10], 8) == (3, 2)
assert ricerca_binaria([2, 4, 6, 8, 10], 7) == (None, 2)
assert ricerca_binaria([], 7) == (None, 0)
```

Il contatore aumenta una volta per elemento centrale esaminato. Nel secondo test i valori centrali sono 6 e 8. Dopo il confronto con 8 l’intervallo diventa vuoto.
:::
