---
titolo: "Simulazioni scientifiche e confronto con i dati"
sommario: "Costruire un modello a passi, verificarne le unità e confrontare previsioni e misure."
---

## Specificare il modello

:::definizione{#modello titolo="Variabili, parametri e condizioni iniziali"}
In una simulazione di raffreddamento la temperatura dell’oggetto è una variabile di stato. La temperatura ambiente può essere un parametro costante. Il valore della temperatura dell’oggetto al tempo zero è la condizione iniziale.
:::

## Aggiornare lo stato

:::definizione{#eulero titolo="Metodo di Eulero esplicito"}
Per $y'=f(t,y)$, il valore nuovo è $y_{k+1}=y_k+h f(t_k,y_k)$ e il nuovo tempo è $t_{k+1}=t_k+h$. Il passo moltiplica la variazione per unità di tempo. Per un corpo con accelerazione costante si aggiornano posizione e velocità usando i valori dello stesso istante iniziale.
:::

## Simulare il raffreddamento

:::definizione{#raffreddamento titolo="Legge di raffreddamento a passi"}
Se la temperatura $T$ varia secondo $T'=-k(T-T_a)$, l’aggiornamento di Eulero è $T_{i+1}=T_i-hk(T_i-T_a)$. Con ambiente a $20$ °C, temperatura iniziale $60$ °C e $hk=0{,}25$, il primo passo porta a $50$ °C.
:::

## Controllare il passo temporale

:::definizione{#passo titolo="Effetto del passo"}
Per arrivare allo stesso tempo finale dimezzando $h$ si raddoppiano i passi. Un confronto fra due simulazioni indica quanto il risultato dipende dal passo. Nel raffreddamento, se $hk>1$ il primo aggiornamento può portare la temperatura sotto quella ambiente.
:::

## Confrontare dati e previsioni

:::definizione{#residui titolo="Residui di un modello"}
Si definisce il residuo come misura meno previsione. Un residuo positivo significa che il modello prevede un valore più basso di quello misurato. Il confronto richiede stesse unità e stesso istante.
:::

## Tenere separati calcolo e modello

:::definizione{#validazione titolo="Verifica e validazione"}
Per verificare un programma si possono confrontare i risultati con un caso di soluzione nota. Per valutare il modello si confrontano le previsioni con misure indipendenti. Se il risultato numerico si stabilizza al raffinarsi del passo ma resta lontano dalle misure, occorre valutare anche le ipotesi del modello e la qualità dei dati.
:::

## Laboratorio in Python

:::esempio{titolo="Confrontare un raffreddamento con tre misure"}
Si simula una temperatura iniziale di $60$ °C con ambiente a $20$ °C e fattore $hk=0{,}25$. La misura iniziale fissa la condizione di partenza. I tre valori successivi servono per il confronto.

```python
temperatura = 60.0
ambiente = 20.0
fattore = 0.25
misure = [51.0, 44.0, 37.0]
residui = []

for istante, misura in enumerate(misure, start=1):
    temperatura -= fattore * (temperatura - ambiente)
    residuo = misura - temperatura
    residui.append(residuo)
    print(istante, temperatura, misura, residuo)

errore_medio = sum(abs(r) for r in residui) / len(residui)
assert residui == [1.0, 1.5, 0.125]
assert errore_medio == 0.875
```

Il primo aggiornamento sottrae un quarto di $40$ °C, quindi la previsione è $50$ °C. Il residuo è $51-50=1$ °C. Gli aggiornamenti successivi ripartono dalla previsione, mentre le misure servono solo per calcolare i residui.
:::
