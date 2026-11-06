---
titolo: Trasformazioni e problemi sulle coniche
sommario: 'Trasformazioni e coniche: definizioni, metodi, esempi e condizioni da usare negli esercizi del terzo anno.'
---

## Traslazioni di punti e curve

:::teorema{#traslazioni titolo="Cambiare la posizione"}
La traslazione di vettore $(h,k)$ manda $(x,y)$ in $(x+h,y+k)$. Se una curva ha equazione $F(x,y)=0$, la curva traslata ha equazione $F(x-h,y-k)=0$. La circonferenza $x^2+y^2=9$, traslata di $(2,-1)$, diventa $(x-2)^2+(y+1)^2=9$. Distanze e angoli restano invariati.
:::

## Simmetrie assiali e centrali

:::teorema{#simmetrie titolo="Immagini delle coordinate"}
La simmetria rispetto all'asse $x$ manda $(x,y)$ in $(x,-y)$; quella rispetto all'asse $y$ in $(-x,y)$; quella rispetto all'origine in $(-x,-y)$. Rispetto a $y=x$, le coordinate si scambiano. Per esempio $(2,-3)$ diventa $(-3,2)$ nell'ultima trasformazione. Applicando la sostituzione all'equazione si ricava la curva trasformata.
:::

## Omotetie

:::definizione{#omotetie titolo="Rapporto di scala"}
L'**omotetia** di centro l'origine e rapporto $\lambda\neq0$ manda $(x,y)$ in $(\lambda x,\lambda y)$. Le distanze si moltiplicano per $|\lambda|$ e le aree per $\lambda^2$. Una circonferenza di raggio $r$ diventa una circonferenza di raggio $|\lambda|r$. Un rapporto negativo comprende anche una simmetria rispetto all'origine.
:::

## Riconoscere una conica

:::teorema{#riconoscimento titolo="Forma senza termine misto"}
Per $Ax^2+Cy^2+Dx+Ey+F=0$, con entrambi $A,C$ non nulli, il completamento dei quadrati porta a una forma centrata. Coefficienti quadratici dello stesso segno possono dare un'ellisse, un punto o il luogo vuoto; di segno opposto possono dare un'iperbole o due rette. Se uno solo tra $A,C$ è nullo, si può ottenere una parabola, ma vanno controllati anche i termini di primo grado.
:::

## Completare i quadrati

:::esempio{#quadrati titolo="Dalla forma generale al centro"}
Per $4x^2+9y^2-8x+36y+4=0$ si raggruppano i termini: $4[(x-1)^2-1]+9[(y+2)^2-4]+4=0$. Quindi $4(x-1)^2+9(y+2)^2=36$, ossia $\dfrac{(x-1)^2}{9}+\dfrac{(y+2)^2}{4}=1$. Il centro è $(1,-2)$ e i semiassi sono $3$ e $2$. La divisione per il secondo membro si fa dopo averlo calcolato.
:::

## Intersezioni tra curve

:::teorema{#intersezioni titolo="Un sistema per i punti comuni"}
Un punto comune soddisfa le due equazioni. Per $y=x^2$ e $y=2-x^2$ si ottiene $2x^2=2$, quindi $x=\pm1$ e $y=1$. I punti sono $(-1,1)$ e $(1,1)$. Ogni coppia va controllata nelle equazioni iniziali, soprattutto se nella risoluzione si è elevato al quadrato.

::grafico{f="x^2;2-x^2" xmin=-2 xmax=2 ymin=-2 ymax=4 punti="-1,1;1,1" titolo="Le due parabole hanno punti comuni $(-1,1)$ e $(1,1)$"}
:::

## Tangenza e parametri

:::teorema{#tangenza titolo="Intersezione doppia"}
Per determinare una retta tangente in una famiglia si sostituisce la sua equazione nella conica e si impone discriminante nullo quando l'equazione ottenuta è quadratica. Per $y=x^2$ e $y=2x+q$, si trova $x^2-2x-q=0$, quindi $\Delta=4+4q=0$ e $q=-1$. La tangente è $y=2x-1$ e il contatto è $(1,1)$.
:::

## Luoghi geometrici

:::esempio{#luoghi titolo="Punti equidistanti da due punti"}
I punti equidistanti da $A(-2,0)$ e $B(4,0)$ soddisfano $(x+2)^2+y^2=(x-4)^2+y^2$. Sviluppando si ottiene $12x=12$, quindi $x=1$. Il luogo è l'asse del segmento $AB$, cioè la perpendicolare nel suo punto medio. L'uguaglianza delle distanze può essere elevata al quadrato perché entrambi i membri sono non negativi.
:::
