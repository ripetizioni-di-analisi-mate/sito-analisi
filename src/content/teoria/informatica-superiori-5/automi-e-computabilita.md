---
titolo: "Automi, linguaggi e limiti della computazione"
sommario: "Riconoscere sequenze con stati finiti e distinguere i limiti teorici dal costo di un calcolo."
---

## Descrivere le stringhe

:::definizione{#alfabeto titolo="Alfabeto e linguaggio"}
Un **alfabeto** è un insieme finito di simboli. Una stringa è una sequenza finita di simboli dell’alfabeto. La stringa vuota si indica con $\varepsilon$. Un **linguaggio** è un insieme di stringhe, ad esempio quelle binarie che terminano con 1.
:::

## Riconoscere una stringa

:::definizione{#automa titolo="Automa finito deterministico"}
Un **automa finito deterministico** ha stati, uno stato iniziale, stati finali e una transizione per ciascuna coppia stato-simbolo. Legge la stringa da sinistra a destra e la accetta se termina in uno stato finale.
:::

## Costruire gli stati

:::definizione{#invariante titolo="Significato dello stato"}
Per riconoscere le stringhe con un numero pari di 1, basta distinguere due stati. Si parte dallo stato pari, che è finale. Leggendo 1 si cambia stato e leggendo 0 si conserva lo stato. Lo stato descrive la parità dei soli simboli già letti.
:::

## Misurare la memoria disponibile

:::definizione{#memoria-finita titolo="Memoria finita"}
Un automa ricorda il passato attraverso un numero finito di stati. Può contare modulo tre usando tre stati. Per riconoscere tutte le stringhe composte da $n$ zeri seguiti da $n$ uni servirebbe distinguere quantità arbitrariamente grandi. Tale linguaggio non è regolare.
:::

## Descrivere un modello generale

:::definizione{#turing titolo="Macchina di Turing"}
Una **macchina di Turing** ha controllo a stati, un nastro leggibile e scrivibile estendibile secondo necessità e una testina. Ogni passo può cambiare lo stato, riscrivere il simbolo letto e spostare la testina. Il modello permette di formalizzare quali problemi ammettono un algoritmo.
:::

## Distinguere decisione e costo

:::definizione{#arresto titolo="Decidibilità e problema dell’arresto"}
Un problema di decisione è **decidibile** se esiste un algoritmo che termina per ogni input e restituisce la risposta corretta. Stabilire, per un programma arbitrario con un dato input, se prima o poi terminerà è indecidibile nel modello generale. Un singolo programma può comunque essere analizzato, per esempio quando contiene solo un ciclo con numero fisso di iterazioni.
:::

## Laboratorio in Python

:::esempio{titolo="Simulare un automa di parità"}
Il dizionario delle transizioni associa a ciascuna coppia stato e simbolo il nuovo stato. Le prove includono la stringa vuota, una stringa accettata e una rifiutata.

```python
transizioni = {
    ("pari", "0"): "pari",
    ("pari", "1"): "dispari",
    ("dispari", "0"): "dispari",
    ("dispari", "1"): "pari",
}


def accetta(parola):
    stato = "pari"
    for simbolo in parola:
        stato = transizioni[stato, simbolo]
    return stato == "pari"


assert accetta("")
assert accetta("101")
assert not accetta("10110")
```

La funzione si applica alle parole dell’alfabeto binario. In ogni passo aggiorna lo stato con la transizione della tabella.
:::
