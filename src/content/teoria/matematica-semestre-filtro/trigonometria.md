---
titolo: "Trigonometria e triangoli rettangoli"
sommario: "Gradi, radianti, seno, coseno e tangente per calcolare lunghezze e proiezioni."
---

## Triangoli rettangoli

:::definizione{#pitagora titolo="Cateti e ipotenusa"}
In un triangolo rettangolo, l'ipotenusa $c$ è il lato opposto all'angolo retto. Se $a$ e $b$ sono i cateti, vale $c^2=a^2+b^2$. Quindi $c=\sqrt{a^2+b^2}$.

Con cateti di $3\,\mathrm{m}$ e $4\,\mathrm{m}$ si ottiene $c=5\,\mathrm{m}$. La stessa relazione servirà a calcolare il modulo di un vettore dalle sue componenti perpendicolari.
:::

## Gradi e radianti

:::definizione{#radianti titolo="Due unità per gli angoli"}
Un angolo giro misura $360^\circ$ oppure $2\pi$ radianti. In una circonferenza di raggio $r>0$, un angolo di $\theta$ radianti individua un arco di lunghezza $s=r\theta$.
$$
\theta_{\mathrm{rad}}=\theta_{\mathrm{gradi}}\frac{\pi}{180},\qquad
\theta_{\mathrm{gradi}}=\theta_{\mathrm{rad}}\frac{180}{\pi}.
$$
Per esempio $60^\circ=\dfrac{\pi}{3}$ radianti. Il valore numerico passato a una calcolatrice dipende dall'unità selezionata.
:::

## Seno, coseno e tangente

:::definizione{#rapporti titolo="Rapporti tra i lati"}
Per un angolo acuto $\theta$ di un triangolo rettangolo,
$$
\sin\theta=\frac{\text{cateto opposto}}{\text{ipotenusa}},\qquad
\cos\theta=\frac{\text{cateto adiacente}}{\text{ipotenusa}},\qquad
\tan\theta=\frac{\sin\theta}{\cos\theta}.
$$
Lato opposto e lato adiacente si individuano rispetto all'angolo scelto. Se l'ipotenusa misura $10\,\mathrm{m}$ e l'angolo è $30^\circ$, il cateto opposto vale $10\sin30^\circ=5\,\mathrm{m}$.
:::

## Valori e identità

:::osservazione{#identita titolo="Angoli notevoli"}
Il teorema di Pitagora applicato a un triangolo di ipotenusa unitaria dà $\sin^2\theta+\cos^2\theta=1$.

| Angolo | Seno | Coseno | Tangente |
| --- | --- | --- | --- |
| $30^\circ$ | $\dfrac12$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{1}{\sqrt3}$ |
| $45^\circ$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt2}{2}$ | $1$ |
| $60^\circ$ | $\dfrac{\sqrt3}{2}$ | $\dfrac12$ | $\sqrt3$ |

I valori permettono di mantenere i risultati esatti, per esempio $10\cos30^\circ=5\sqrt3$, prima di arrotondare.
:::

## Proiezioni e componenti

:::osservazione{#proiezioni titolo="Scomposizione lungo due assi"}
Un segmento orientato di modulo $A$ e angolo $\theta$ misurato dal semiasse positivo $x$ ha componenti $A_x=A\cos\theta$ e $A_y=A\sin\theta$. Il segno dipende dal verso della proiezione.

Per $\theta=120^\circ$, il coseno vale $-\dfrac12$ e il seno vale $\dfrac{\sqrt3}{2}$: la componente orizzontale è negativa e quella verticale positiva. Sul piano inclinato di angolo $\alpha$, il peso ha modulo $mg\sin\alpha$ lungo la discesa e $mg\cos\alpha$ perpendicolarmente al piano.
:::

## Ricavare un angolo

:::osservazione{#inverse titolo="Funzioni trigonometriche inverse"}
In un triangolo rettangolo, se il rapporto tra cateto opposto e adiacente vale $r>0$, l'angolo acuto è $\theta=\arctan r$. Per cateti uguali il rapporto vale uno, quindi $\theta=45^\circ$.

Per un vettore nel piano occorrono anche i segni delle componenti per individuare il quadrante. Il solo rapporto $\dfrac{A_y}{A_x}$ è uguale per vettori opposti, per esempio $(1,1)$ e $(-1,-1)$, che hanno direzioni angolari rispettivamente di $45^\circ$ e $225^\circ$.
:::
