---
titolo: "Numeri, operazioni e frazioni"
sommario: "Insiemi numerici, segni, priorità delle operazioni, frazioni e problemi con quantità esatte."
---

:::percorso
Il punto di partenza sono le operazioni sui numeri incontrate nella scuola media. Qui si precisa come lavorare con segni, frazioni e priorità dei calcoli. Queste regole serviranno nel calcolo letterale, nelle equazioni e nella lettura dei dati di fisica.
:::

## Insiemi numerici e scritture dello stesso numero

:::definizione{#insiemi-numerici titolo="Naturali, interi e razionali"}
I **naturali** sono $0,1,2,3,\ldots$; in questo corso lo zero è incluso in $\mathbb N$. Gli **interi** comprendono anche gli opposti dei naturali, quindi $\mathbb Z=\{\ldots,-2,-1,0,1,2,\ldots\}$. I **razionali** sono i numeri scrivibili come $\dfrac ab$, con $a,b$ interi e $b\ne0$.

Ogni intero è razionale, perché $a=\dfrac a1$. Una stessa quantità può avere più scritture: $\dfrac12=\dfrac24=0{,}5$. Una frazione è **ridotta ai minimi termini** quando numeratore e denominatore non hanno divisori comuni maggiori di uno. Per esempio $\dfrac{18}{24}=\dfrac34$, dividendo entrambi per sei.
:::

## Operazioni e segni

:::teorema{#operazioni titolo="Segni e ordine dei calcoli"}
La somma di numeri con segno si interpreta come uno spostamento sulla retta numerica. Per esempio $-7+10=3$ e $-7-10=-17$. Sottrarre un numero equivale a sommare il suo opposto: $5-(-3)=5+3=8$.

Nel prodotto e nel quoziente di due numeri non nulli, segni uguali danno risultato positivo e segni opposti danno risultato negativo. La divisione per zero è esclusa; zero diviso un numero non nullo vale zero.

Si eseguono prima i calcoli racchiusi nei raggruppamenti, poi le potenze, poi prodotti e quozienti, infine somme e differenze. Operazioni dello stesso livello si eseguono da sinistra verso destra. Per esempio $18:3\cdot2=12$.
:::

:::esempio{titolo="Un segno meno davanti a una somma"}
Nel calcolo $6-(4-9)$, si può prima trovare $4-9=-5$ e ottenere $6-(-5)=11$. In alternativa si usa la distributiva del fattore $-1$ e si scrive $6-4+9=11$. Entrambi i termini della somma sottratta cambiano segno.
:::

## Calcoli con le frazioni

:::teorema{#frazioni titolo="Operazioni fra numeri razionali"}
Per sommare frazioni si usa un denominatore comune. Le frazioni equivalenti si ottengono moltiplicando numeratore e denominatore per lo stesso numero non nullo. Per esempio

$$
\frac23+\frac14=\frac8{12}+\frac3{12}=\frac{11}{12}.
$$

Nel prodotto si moltiplicano numeratori e denominatori. Nella divisione si moltiplica per il reciproco del divisore, che deve essere non nullo:

$$
\frac35\cdot\frac{10}9=\frac23,
\qquad
\frac35:\frac27=\frac35\cdot\frac72=\frac{21}{10}.
$$

Si semplificano fattori di un prodotto. La cancellazione di addendi non è una regola valida: $\dfrac{2+3}{2}=\dfrac52$, mentre cancellare il due al numeratore darebbe un valore diverso.
:::

## Divisibilità e organizzazione di quantità

:::definizione{#divisibilita titolo="Massimo comune divisore e minimo comune multiplo"}
Il **massimo comune divisore** di due interi positivi è il maggiore dei loro divisori comuni. Il **minimo comune multiplo** è il minore dei loro multipli comuni positivi. Per $12$ e $18$ si ha $\operatorname{MCD}=6$ e $\operatorname{mcm}=36$.

La scomposizione in fattori primi permette di calcolarli. Nel MCD si prendono i fattori primi comuni con esponente minore; nel mcm tutti i fattori presenti con esponente maggiore. Il MCD interviene nel dividere materiali in gruppi uguali senza avanzi; il mcm nel cercare quando due cicli tornano insieme e nello scegliere denominatori comuni.
:::

## Decimali, confronti e retta numerica

:::osservazione{#retta titolo="Confrontare valori e distanze"}
Un razionale ha scrittura decimale finita oppure periodica. Per esempio $\dfrac38=0{,}375$ e $\dfrac29=0{,}\overline2$. Per ricavare la frazione del secondo numero si pone $z=0{,}\overline2$: allora $10z-z=2$, quindi $z=\dfrac29$.

Sulla retta numerica, il numero più a destra è maggiore. Fra numeri negativi, $-2>-5$. La **distanza** tra $a$ e $b$ è $|b-a|$, sempre non negativa; tra $-3$ e $5$ vale $8$. Il numero a metà fra $a$ e $b$ è $\dfrac{a+b}{2}$: tra $\dfrac13$ e $1$ vale $\dfrac23$.
:::

## Tradurre una situazione in operazioni

:::esempio{#problemi titolo="Quantità iniziale, variazione e controllo"}
Una scatola contiene $24$ penne rosse e $18$ blu. Si preparano pacchetti con $4$ rosse e $3$ blu: entrambi i colori consentono $6$ pacchetti. Ogni pacchetto contiene $7$ penne. Dopo aver regalato $2$ pacchetti rimangono $(6-2)\cdot7=28$ penne.

Il controllo può seguire una strada diversa: le penne iniziali sono $24+18=42$ e quelle regalate sono $2\cdot7=14$, quindi $42-14=28$. Specificare l’unità della risposta distingue il numero di pacchetti dal numero di penne.
:::
