---
titolo: "Probabilità condizionata, indipendenza e Bayes"
sommario: "Condizionamento, alberi, indipendenza, probabilità totale e formula di Bayes."
---

## Il gruppo di riferimento

:::definizione{#condizionata titolo="Probabilità condizionata"}
Sapere che è accaduto $B$ restringe l'insieme dei casi possibili. Se $P(B)>0$,
$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$
Il denominatore è la probabilità dell'informazione disponibile. Se 20 studenti su 50 pendolari viaggiano in treno, la proporzione è $20/50$, anche se gli studenti del campione complessivo sono 200. $P(A\mid B)$ e $P(B\mid A)$ hanno denominatori diversi e possono differire molto.
:::

## Regola del prodotto e alberi

:::teorema{#prodotto titolo="Probabilità di percorsi successivi"}
Dalla definizione segue $P(A\cap B)=P(B)P(A\mid B)$. Per tre eventi, se i denominatori sono positivi,
$$
P(A\cap B\cap C)=P(A)P(B\mid A)P(C\mid A\cap B).
$$
In un albero si moltiplicano le probabilità lungo un percorso e si sommano le probabilità di percorsi incompatibili. Estraendo due palline senza reinserimento da un'urna con 3 rosse su 5, la probabilità di due rosse è $(3/5)(2/4)=3/10$.
:::

## Indipendenza di due eventi

:::definizione{#indipendenza titolo="Eventi indipendenti"}
$A$ e $B$ sono **indipendenti** se $P(A\cap B)=P(A)P(B)$. Quando $P(B)>0$, questo equivale a $P(A\mid B)=P(A)$. L'indipendenza si dimostra dal modello o dai valori delle probabilità.

Due eventi incompatibili di probabilità positiva sono dipendenti, perché la loro intersezione ha probabilità zero e il prodotto è positivo. L'indipendenza di $A$ e $B$ implica anche quella delle coppie ottenute sostituendo uno o entrambi con il complementare.
:::

## Partizioni e probabilità totale

:::teorema{#totale titolo="Formula della probabilità totale"}
Se $B_1,\dots,B_r$ formano una partizione di $\Omega$ e hanno probabilità positiva, allora
$$
P(A)=\sum_{i=1}^rP(A\mid B_i)P(B_i).
$$
Ogni esito di $A$ appartiene a uno solo dei gruppi $B_i$. Se due impianti forniscono il 60% e il 40% dei pezzi, con quote di difettosità del 2% e del 5%, la probabilità di un pezzo difettoso è $0{,}6\cdot0{,}02+0{,}4\cdot0{,}05=0{,}032$.
:::

## Inversione del condizionamento

:::teorema{#bayes titolo="Formula di Bayes"}
Nelle ipotesi della probabilità totale, se $P(A)>0$,
$$
P(B_j\mid A)=\frac{P(A\mid B_j)P(B_j)}{\sum_iP(A\mid B_i)P(B_i)}.
$$
Il numeratore misura i casi del gruppo $B_j$ in cui si verifica $A$; il denominatore comprende tutti i casi di $A$. Nell'esempio dei due impianti, la probabilità che un pezzo difettoso provenga dal secondo è $0{,}02/0{,}032=0{,}625$.
:::

## Classificatori e probabilità di base

:::esempio{#classificatori titolo="Sensibilità e falsi positivi"}
Un controllo individua il 90% dei pezzi difettosi e segnala erroneamente il 5% di quelli regolari. Se il 2% dei pezzi è difettoso, la probabilità di una segnalazione è $0{,}9\cdot0{,}02+0{,}05\cdot0{,}98=0{,}067$. Quindi la probabilità di difetto dopo una segnalazione è $0{,}018/0{,}067\approx0{,}269$.

La sensibilità condiziona sul difetto; il valore predittivo condiziona sulla segnalazione. Il secondo dipende anche dalla quota iniziale di difetti. Tutti i valori dell'esempio sono ipotesi del modello, non dati empirici su un dispositivo reale.
:::

## Più eventi e indipendenza mutua

:::attenzione{#mutua titolo="Indipendenza a coppie e mutua"}
Per tre eventi l'indipendenza mutua richiede sia le tre fattorizzazioni a coppie sia $P(A\cap B\cap C)=P(A)P(B)P(C)$. Con due monete regolari, gli eventi «prima testa», «seconda testa» e «risultati uguali» sono indipendenti a coppie; la loro intersezione ha probabilità $1/4$, mentre il prodotto è $1/8$.

Per sistemi di componenti indipendenti, l'affidabilità in serie è il prodotto delle affidabilità. In parallelo, quando basta un componente funzionante, è uno meno il prodotto delle probabilità di guasto.
:::
