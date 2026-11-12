---
titolo: Numeri, proporzioni e percentuali
sommario: Numeri con segno, frazioni, decimali, divisibilità, potenze, radici, conversioni e percentuali con esempi commentati.
---

Quando un problema mescola numeri, unità e percentuali, comincia individuando la quantità di cui si parla. Un aumento di $10$ euro e un aumento del $10\%$ descrivono operazioni diverse. In questo capitolo riparti dai calcoli essenziali e arrivi a riconoscere la base di ogni confronto. Il programma della prova di recupero dipende dal tuo corso di laurea.

## Segni, distanza e priorità

:::definizione{#segni-e-ordine titolo="Numeri sulla retta"}
I numeri crescono andando da sinistra verso destra. Tra due numeri negativi, quello più lontano da zero è il minore. Per esempio, $-8<-3$ anche se $8>3$.

Il valore assoluto $|a|$ misura la distanza di $a$ da zero. La distanza fra due numeri $a$ e $b$ è $|a-b|$. Tra $-3$ e $5$ ci sono $8$ unità, perché $|5-(-3)|=8$.
:::

:::esempio{titolo="Una sottrazione di numeri negativi"}
Sottrarre $-4$ significa aggiungere il suo opposto, $4$. Perciò $-7-(-4)=-7+4=-3$. Sulla retta, questo spostamento va verso destra di quattro unità.
:::

:::osservazione{#priorita titolo="L'ordine delle operazioni"}
Semplifica prima le parentesi e calcola le potenze. Esegui poi moltiplicazioni e divisioni, da sinistra a destra. Completa con addizioni e sottrazioni, ancora da sinistra a destra.

In $14-2(3-5)^2$, la parentesi dà $-2$, la potenza dà $4$ e il prodotto dà $8$. Il risultato è $14-8=6$.
:::

:::attenzione
Le parentesi stabiliscono la base. In $(-3)^2$ la base è $-3$ e il risultato è $9$. In $-3^2$ si calcola il quadrato di $3$ e poi si mette il segno meno, ottenendo $-9$.
:::

## Divisibilità, MCD e mcm

:::definizione{#divisibilita titolo="Multipli e divisori"}
Un numero intero positivo $d$ divide un intero $n$ se $n=dq$ per qualche intero $q$. Per esempio, $6$ divide $42$ perché $42=6\cdot7$. In una divisione con resto $n=dq+r$ si ha $0\le r<d$.

Un numero è divisibile per $2$ se termina con una cifra pari, per $5$ se termina con $0$ o $5$, per $3$ se la somma delle sue cifre è divisibile per $3$.
:::

:::osservazione{#mcd-mcm titolo="Come scegliere tra MCD e mcm"}
Il massimo comune divisore, **MCD**, serve quando devi dividere quantità in gruppi identici, senza avanzi, e vuoi ottenere il maggior numero possibile di gruppi. Il minimo comune multiplo, **mcm**, serve quando due cicli devono ritrovarsi insieme per la prima volta.

Con $18=2\cdot3^2$ e $24=2^3\cdot3$, l’MCD è $2\cdot3=6$. Per i fattori comuni si scelgono gli esponenti più piccoli. Il mcm è $2^3\cdot3^2=72$. Qui si includono tutti i fattori presenti, con gli esponenti più grandi.
:::

:::esempio{titolo="Due cicli di durata diversa"}
Due operazioni partono insieme e si ripetono ogni $9$ e $15$ minuti. Il primo nuovo incontro avviene dopo $\operatorname{mcm}(9,15)=45$ minuti. Infatti $45$ è il quinto multiplo di $9$ e il terzo multiplo di $15$.
:::

## Frazioni, confronti e operazioni

:::definizione{#frazioni-equivalenti titolo="Il denominatore e le forme equivalenti"}
In $\dfrac ab$ il denominatore $b$ dev’essere diverso da zero. Moltiplicando o dividendo numeratore e denominatore per uno stesso numero non nullo, il valore della frazione rimane invariato. Per esempio, $\dfrac{18}{24}=\dfrac34$.

Per confrontare $\dfrac56$ e $\dfrac79$, riscrivile con denominatore $18$. Si ottengono $\dfrac{15}{18}$ e $\dfrac{14}{18}$. A questo punto il confronto riguarda solo i numeratori.
:::

:::osservazione{#operazioni-frazioni titolo="Le quattro operazioni"}
Per sommare o sottrarre, porta le frazioni a un denominatore comune e poi opera sui numeratori. Per moltiplicare, moltiplica i numeratori e i denominatori, semplificando eventuali fattori comuni. Per dividere, moltiplica la prima frazione per il reciproco della seconda, che dev’essere non nulla.

Per esempio,

$$
\frac{5}{8}-\frac{1}{6}=\frac{15-4}{24}=\frac{11}{24},
\qquad
\frac{5}{8}\div\frac{5}{12}=\frac{5}{8}\cdot\frac{12}{5}=\frac32.
$$
:::

:::attenzione
Una semplificazione cancella fattori comuni, perciò in $\dfrac{6\cdot5}{6\cdot7}$ si può cancellare $6$. In $\dfrac{6+5}{6+7}$ il $6$ è un addendo e il valore rimane $\dfrac{11}{13}$.
:::

:::esempio{#frazione-di-quantita titolo="Frazione di una quantità e totale"}
I $\dfrac35$ di $45$ valgono $27$, perché un quinto vale $9$. Se conosci invece la parte e vuoi ricavare l’intero, dividi per la frazione. Se i tre quinti sono $27$, il totale è $27\div\dfrac35=45$.
:::

## Decimali e notazione scientifica

:::osservazione{#decimali titolo="Da frazione a decimale e ritorno"}
La cifra dopo la virgola indica i decimi, la seconda i centesimi, la terza i millesimi. Perciò $0{,}48=\dfrac{48}{100}=\dfrac{12}{25}$. In senso inverso puoi dividere il numeratore per il denominatore.

Per confrontare $0{,}6$ e $0{,}57$ scrivi il primo come $0{,}60$. Sessanta centesimi sono più di cinquantasette. Per arrotondare $0{,}576$ al centesimo, osserva il $6$ dei millesimi. Si arrotonda a $0{,}58$.
:::

:::esempio{#notazione-scientifica titolo="Gestire numeri molto grandi o piccoli"}
Un numero positivo in notazione scientifica si scrive come $a\cdot10^n$ con $1\le a<10$ e $n$ intero. In $420000=4{,}2\cdot10^5$ l’esponente è positivo. In $0{,}00042=4{,}2\cdot10^{-4}$ è negativo.

Per dividere $2{,}4$ per $0{,}06$, moltiplica entrambi per $100$. Il quoziente rimane lo stesso ed è $240/6=40$.
:::

## Potenze e radici

:::osservazione{#potenze titolo="Potenze con la stessa base"}
In un prodotto di potenze con la stessa base si sommano gli esponenti. In un quoziente si sottraggono, con base diversa da zero. Una potenza di potenza moltiplica gli esponenti. Per $a\ne0$ valgono $a^0=1$ e $a^{-n}=1/a^n$.

Per esempio, $3^5/3^2=3^3=27$ e $(2^3)^2=2^6=64$. L’esponente negativo cambia la base nel reciproco, quindi $2^{-3}=\dfrac18$.
:::

:::definizione{#radici titolo="Radici reali"}
Per $t\ge0$, la radice quadrata $\sqrt t$ è il numero non negativo il cui quadrato è $t$. Ne segue che $\sqrt{a^2}=|a|$. Invece la radice cubica di un negativo è negativa, come $\sqrt[3]{-27}=-3$.

Cerca un fattore quadrato per semplificare. Da $45=9\cdot5$ si ottiene $\sqrt{45}=3\sqrt5$. Per stimare la radice, confronta i quadrati vicini. Poiché $36<45<49$, si ha $6<\sqrt{45}<7$.
:::

## Rapporti, proporzioni e unità di misura

:::definizione{#rapporti-e-proporzioni titolo="Leggere un rapporto"}
Un rapporto confronta due quantità nello stesso ordine in cui sono nominate. Un rapporto di $3$ a $2$ tra acqua e concentrato indica tre parti di acqua ogni due parti di concentrato. La frazione di concentrato rispetto al totale è quindi $\dfrac{2}{3+2}=\dfrac25$.

Una proporzione è l’uguaglianza tra due rapporti. Se $a/b=c/d$ con $b,d\ne0$, puoi moltiplicare per $bd$ per ottenere $ad=bc$.
:::

:::osservazione{#proporzionalita titolo="Riconoscere proporzionalità diretta e inversa"}
In una proporzionalità diretta è costante il quoziente. Se sei quaderni costano $9$ euro, ogni quaderno costa $1{,}50$ euro allo stesso prezzo unitario. Otto quaderni costano $12$ euro.

In una proporzionalità inversa è costante il prodotto. Su un percorso fissato di $120$ km, il tempo è $120/v$ ore se la velocità $v$ è espressa in km/h. Raddoppiando la velocità si dimezza il tempo, a velocità costante.
:::

:::esempio{#conversioni titolo="Uniformare le unità prima di confrontare"}
Una confezione da $350$ g costa $2{,}10$ euro. Scrivi la massa come $0{,}35$ kg e calcola il costo al chilogrammo con $2{,}10/0{,}35=6$ euro/kg. Un’altra confezione da mezzo chilo a $3{,}25$ euro costa $6{,}50$ euro/kg. Il prezzo al chilogrammo permette un confronto sulla stessa quantità.
:::

## Percentuali, prezzi e variazioni successive

:::definizione{#percentuale titolo="Parte, totale e tasso"}
Il $p\%$ del totale $T$ vale $T\cdot p/100$. Se conosci la parte $P$ e il totale, calcola il tasso con $100P/T$. Se conosci la parte e il tasso non nullo, ricava il totale con $P/(p/100)$.

Per esempio, $21$ risposte su $60$ corrispondono a $21/60=0{,}35$, cioè al $35\%$. Se $21$ è il $35\%$ del totale, il calcolo inverso è $21/0{,}35=60$.
:::

:::osservazione{#variazioni-percentuali titolo="Moltiplicatori e valori iniziali"}
Aumentare del $p\%$ significa moltiplicare per $1+p/100$. Diminuire del $p\%$ significa moltiplicare per $1-p/100$. Per risalire dal prezzo finale a quello iniziale, dividi per il fattore di variazione.

Dopo uno sconto del $15\%$, un prezzo di $68$ euro rappresenta l’$85\%$ dell’originale. Si risale a $68/0{,}85=80$ euro. Per calcolare un aumento percentuale da un valore iniziale a uno finale, dividi l’aumento per il valore iniziale.
:::

:::esempio{#base-percentuale titolo="Quando la base cambia"}
Un costo di $100$ euro aumenta del $10\%$ e poi diminuisce del $10\%$. Diventa prima $110$ euro e poi $99$ euro. Il secondo $10\%$ è di $110$ euro. La variazione complessiva è $-1\%$.

Se la percentuale di risposte esatte passa dal $40\%$ al $50\%$, la crescita è di $10$ **punti percentuali**. L’aumento rispetto alla quota iniziale è invece $10/40=25\%$.
:::
