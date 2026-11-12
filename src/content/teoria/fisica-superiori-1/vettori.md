---
titolo: "Vettori e operazioni nel piano"
sommario: "Componenti, somme, differenze, moduli e forze equilibranti."
---

:::percorso
Si usano coordinate cartesiane, numeri con segno e il teorema di Pitagora.
Un vettore descrive sia quanto è grande una quantità sia come è orientata.
Le componenti permetteranno di sommare le forze e imporre l'equilibrio nel piano.
:::

## Modulo, direzione e verso

:::definizione{#definizione titolo="Rappresentare una grandezza orientata"}
Un **vettore** si rappresenta con una freccia. Il **modulo** è un numero non negativo che descrive la sua grandezza; la direzione è quella della retta su cui giace; il verso distingue le due orientazioni sulla retta.
Due forze di 5 N lungo la stessa retta possono essere concordi oppure opposte. Avere lo stesso modulo non rende uguali due vettori: devono coincidere anche direzione e verso. Un vettore nullo ha modulo zero e non possiede un verso determinato.
:::

## Componenti cartesiane

:::definizione{#componenti titolo="Proiezioni con segno"}
Scelti un asse x orientato a destra e un asse y verso l'alto, un vettore si scrive $\vec u=(u_x;u_y)$. Una componente negativa indica il verso opposto al verso positivo del relativo asse.
Per due punti A e B, il vettore da A a B ha componenti
$$
\overrightarrow{AB}=(x_B-x_A;y_B-y_A).
$$
Se A=(1;2) e B=(4;6), le componenti sono (3;4). Il punto di partenza non coincide necessariamente con l'origine; perciò le coordinate di B da sole non descrivono sempre il vettore.
:::

## Somme, differenze e prodotti per numeri

:::teorema{#operazioni titolo="Operazioni componente per componente"}
La somma e la differenza si calcolano separatamente sui due assi:
$$
\vec u+\vec v=(u_x+v_x;u_y+v_y),\qquad
\vec u-\vec v=(u_x-v_x;u_y-v_y).
$$
L'opposto è $-\vec u=(-u_x;-u_y)$. Moltiplicare un vettore per un numero c moltiplica entrambe le componenti per c. Se c è negativo si inverte il verso; il modulo è moltiplicato per $|c|$.
Per $\vec u=(2;-1)$ e $\vec v=(-3;4)$, la somma è (-1;3), la differenza (5;-5) e $-2\vec u=(-4;2)$. Graficamente la somma si costruisce mettendo la coda del secondo vettore sulla punta del primo.
:::

## Moduli e Pitagora

:::teorema{#modulo titolo="Componenti perpendicolari"}
Le componenti cartesiane sono perpendicolari. Perciò il modulo soddisfa
$$
|\vec u|=\sqrt{u_x^2+u_y^2}.
$$
Con componenti 6 N e 8 N si trova un modulo di 10 N. Una componente negativa viene elevata al quadrato come quella positiva: il modulo non dipende dal quadrante.
Se sono noti modulo e una componente, il modulo dell'altra è $|u_y|=\sqrt{|\vec u|^2-u_x^2}$. Il segno della componente mancante richiede anche un'informazione sul verso.

::grafico{uguale=1 xmin=-1 xmax=9 ymin=-1 ymax=10 nomi="uₓ,uᵧ" vettori="0,0,6,8" segmenti="6,0,6,8;0,8,6,8" punti="6,8" etichette="3,4.8,u;-0.7,8.1,8" titolo="Componenti di $6\,\mathrm N$ e $8\,\mathrm N$: il modulo è $\sqrt{6^2+8^2}=10\,\mathrm N$; entrambi gli assi sono espressi in newton"}
:::

## Vettori sulla stessa retta

:::teorema{#collineari titolo="Somme algebriche e limiti della risultante"}
Lungo una stessa retta si sceglie un verso positivo e si sommano le componenti con segno. Due forze di 8 N a destra e 3 N a sinistra hanno risultante 5 N a destra.
Se si conoscono solo i moduli U e V, il modulo della somma è compreso fra $|U-V|$ e $U+V$. Il minimo si ha con vettori opposti, il massimo con vettori concordi. Una somma nulla richiede moduli uguali e versi opposti.
:::

## Il vettore equilibrante

:::definizione{#equilibrante titolo="Annullare una risultante"}
Se più vettori hanno risultante $\vec R$, l'**equilibrante** è $-\vec R$. La sua somma con la risultante è nulla.
Per $\vec R=(3;4)\,\mathrm N$, l'equilibrante è $(-3;-4)\,\mathrm N$ e ha modulo 5 N. Si trova prima la risultante e poi si cambia il segno delle due componenti. Nei problemi di statica questa costruzione individua la forza aggiuntiva necessaria per annullare la somma delle forze applicate allo stesso punto.
:::
