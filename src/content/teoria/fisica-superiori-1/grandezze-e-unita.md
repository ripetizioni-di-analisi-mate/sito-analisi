---
titolo: "Grandezze fisiche e unità di misura"
sommario: "Sistema Internazionale, conversioni, notazione scientifica e controllo delle unità."
---

:::percorso
Si parte dalle operazioni con numeri e frazioni.
Qui si impara a scrivere una misura, convertire le unità e controllare la forma di una formula.
Questi strumenti saranno usati nelle misure con incertezza, nella densità e nei problemi sulle forze.
:::

## Grandezze e Sistema Internazionale

:::definizione{#si titolo="Valore numerico e unità"}
Una **grandezza fisica** è una proprietà misurabile. Misurarla significa confrontarla con un campione scelto come unità. La scrittura $l=2{,}4\,\mathrm m$ contiene il simbolo della grandezza, il valore numerico e l'unità.
Nel Sistema Internazionale, qui si usano soprattutto metro per la lunghezza, chilogrammo per la massa e secondo per il tempo. Il simbolo di un'unità resta invariato al plurale. Massa e peso sono grandezze diverse: il peso è una forza e si esprime in newton.
:::

## Prefissi e conversioni lineari

:::definizione{#prefissi titolo="Multipli e sottomultipli"}
Un prefisso modifica l'unità con una potenza di dieci. Chilo, simbolo k, vale $10^3$; centi, c, vale $10^{-2}$; milli, m, vale $10^{-3}$; micro, $\mu$, vale $10^{-6}$.
Per esempio $250\,\mathrm{cm}=250\cdot10^{-2}\,\mathrm m=2{,}5\,\mathrm m$. La lunghezza è invariata; cambia il numero perché cambia il campione usato. Per il passaggio inverso, $2{,}5\,\mathrm m=2500\,\mathrm{mm}$.
:::

## Superfici e volumi

:::teorema{#superfici-volumi titolo="Elevare anche il fattore di conversione"}
Un'area è il prodotto di due lunghezze, un volume di tre. Poiché $1\,\mathrm{cm}=10^{-2}\,\mathrm m$, valgono
$$
1\,\mathrm{cm}^2=10^{-4}\,\mathrm m^2,\qquad
1\,\mathrm{cm}^3=10^{-6}\,\mathrm m^3.
$$
Quindi $30\,\mathrm{cm}^2=0{,}003\,\mathrm m^2$ e $30\,\mathrm{cm}^3=0{,}000030\,\mathrm m^3$.
Un litro è un decimetro cubo: $1\,\mathrm L=10^{-3}\,\mathrm m^3$. Un millilitro è un centimetro cubo. Le conversioni devono riferirsi alla grandezza completa: il fattore di un'area non coincide con quello di una lunghezza.
:::

## Intervalli di tempo

:::osservazione{#tempo titolo="Ore, minuti e secondi"}
Ore e minuti seguono fattori sessanta. Per convertire una durata composta, si convertono le parti e poi si sommano. Per esempio
$$
1\,\mathrm h+12\,\mathrm{min}
=3600\,\mathrm s+720\,\mathrm s
=4320\,\mathrm s.
$$
Il millisecondo usa invece un prefisso decimale: $1\,\mathrm{ms}=10^{-3}\,\mathrm s$. Una durata di $1{,}5\,\mathrm h$ equivale a un'ora e trenta minuti, perché la parte decimale è metà di un'ora.
:::

## Notazione scientifica

:::definizione{#scientifica titolo="Separare coefficiente e potenza di dieci"}
Un numero positivo in **notazione scientifica normalizzata** si scrive $a\cdot10^n$, con $1\leq a<10$ e $n$ intero. Per esempio $42000=4{,}2\cdot10^4$ e $0{,}00042=4{,}2\cdot10^{-4}$.
Nei prodotti si moltiplicano i coefficienti e si sommano gli esponenti; nei quozienti si dividono i coefficienti e si sottraggono gli esponenti:
$$
(2\cdot10^3)(3\cdot10^{-2})=6\cdot10^1.
$$
Un risultato come $12\cdot10^3$ è corretto ma non normalizzato: la forma normalizzata è $1{,}2\cdot10^4$.
:::

## Unità derivate e dimensioni

:::definizione{#dimensioni titolo="Le unità seguono le operazioni"}
Le grandezze derivate si costruiscono combinando altre grandezze. Un rapporto massa-volume ha unità $\mathrm{kg/m^3}$. Il prodotto di due lunghezze ha unità $\mathrm m^2$.
Il **controllo dimensionale** verifica che i due membri di una formula descrivano lo stesso tipo di grandezza. Se un risultato è richiesto come area, una formula che produce soltanto metri è incompatibile. Questo controllo può individuare un errore, ma da solo non dimostra che una formula sia corretta: anche un fattore numerico sbagliato lascia invariate le dimensioni.
:::

## Somme e confronti

:::osservazione{#confronti titolo="Prima una stessa unità"}
Si sommano o confrontano direttamente i numeri solo dopo aver espresso le grandezze nella stessa unità. Per $2\,\mathrm m+35\,\mathrm{cm}$ si ottiene $2+0{,}35=2{,}35\,\mathrm m$.
Nei rapporti fra grandezze omogenee le unità si semplificano. Per esempio il rapporto fra $50\,\mathrm{cm}$ e $2\,\mathrm m$ è $\dfrac{0{,}5}{2}=0{,}25$, un numero puro. Usare 50 e 2 senza conversione descriverebbe un altro rapporto.
:::
