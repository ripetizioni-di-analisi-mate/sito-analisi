---
titolo: "Test di ipotesi, potenza e chi quadrato"
sommario: "Ipotesi e decisioni, valore p, test per medie e proporzioni, adattamento e indipendenza."
---

## Ipotesi e regola di decisione

:::definizione{#ipotesi titolo="Ipotesi nulla e alternativa"}
Un test confronta un'ipotesi nulla $H_0$ con un'alternativa $H_1$. La statistica test misura quanto i dati si discostano da $H_0$; la regione critica determina i risultati per cui si rifiuta $H_0$. La direzione dell'alternativa si stabilisce prima di osservare il risultato.

Per una media si distinguono $H_1:\mu\ne\mu_0$, $H_1:\mu>\mu_0$ e $H_1:\mu<\mu_0$. Una decisione di non rifiuto significa che il test non ha fornito sufficiente evidenza contro $H_0$ al livello scelto; non dimostra l'uguaglianza del parametro al valore ipotizzato.
:::

## Errori e potenza

:::definizione{#errori titolo="Errori di primo e secondo tipo"}
L'errore di primo tipo è rifiutare $H_0$ quando è vera; il livello $\alpha$ ne controlla la probabilità massima sotto $H_0$. L'errore di secondo tipo è non rifiutare $H_0$ per un'alternativa specifica. La sua probabilità è $\beta(\theta)$ e la potenza è $1-\beta(\theta)$.

La potenza dipende dall'effetto reale, dalla variabilità, dalla numerosità e dal livello. Ridurre $\alpha$, lasciando tutto il resto fissato, restringe la regione critica e può aumentare l'errore di secondo tipo.
:::

## Valore p e significatività

:::definizione{#p-value titolo="Valore p"}
Il **valore p** è, sotto $H_0$, la probabilità di un risultato almeno altrettanto incompatibile con essa secondo l'ordinamento del test. Si rifiuta $H_0$ se $p\le\alpha$.

Per un test normale bilatero, $p=2[1-\Phi(|z_{\mathrm{oss}}|)]$; per l'alternativa superiore è $1-\Phi(z_{\mathrm{oss}})$. Il valore p non è la probabilità che $H_0$ sia vera e non misura da solo l'importanza pratica dell'effetto. Una stima dell'effetto con il suo intervallo di confidenza completa la decisione.
:::

## Test per una media

:::teorema{#media titolo="Test z e test t"}
Per osservazioni i.i.d. normali, con deviazione standard nota, $Z=(\bar X-\mu_0)/(\sigma/\sqrt n)$ è normale standard sotto $H_0$. Se la deviazione standard è ignota e $n>1$, $T=(\bar X-\mu_0)/(S/\sqrt n)$ ha legge $t_{n-1}$ sotto $H_0$.

Nel test bilatero si rifiuta quando il valore assoluto supera il quantile $1-\alpha/2$. Nel test superiore si confronta con il quantile $1-\alpha$. Per medie di popolazioni non normali i test possono avere validità approssimata con campioni adeguati; le ipotesi non si ricavano dalla sola numerosità.
:::

## Proporzioni e confronto di campioni

:::definizione{#proporzioni titolo="Test score e confronti"}
Per una proporzione, sotto $H_0:p=p_0$, il test normale score usa $Z=(\hat p-p_0)/\sqrt{p_0(1-p_0)/n}$. L'approssimazione richiede conteggi attesi adeguati; per campioni piccoli si usa un test binomiale esatto.

Per due medie indipendenti con varianze ignote si usa normalmente Welch. Per dati appaiati, il test t si applica alle differenze. Per due proporzioni sotto l'ipotesi di uguaglianza, l'errore standard del test usa la proporzione combinata dei due campioni.
:::

## Adattamento e indipendenza

:::definizione{#chi-quadrato titolo="Test chi quadrato"}
Per conteggi osservati $O_i$ e attesi $E_i>0$, la statistica è $\sum_i(O_i-E_i)^2/E_i$. Nel test di adattamento a $k$ categorie, i gradi di libertà sono $k-1-r$, dove $r$ è il numero di parametri stimati, nelle condizioni di regolarità del modello.

In una tabella $r\times c$ per il test di indipendenza, $E_{ij}=n_{i\cdot}n_{\cdot j}/n$ e i gradi di libertà sono $(r-1)(c-1)$. L'approssimazione richiede conteggi attesi sufficienti: negli esercizi si usa almeno 5 in ogni cella. Le unità devono essere indipendenti. Per tabelle piccole si può ricorrere a test esatti.
:::

## Varianza, confronti multipli e intervalli

:::osservazione{#multipli titolo="Decisioni collegate"}
Per una popolazione normale, il test di una varianza usa $(n-1)S^2/\sigma_0^2\sim\chi^2_{n-1}$ sotto $H_0$. Un test bilatero di livello $\alpha$ rifiuta i valori esterni all'intervallo centrale dei quantili chi quadrato.

Il test bilatero per un parametro e l'intervallo ottenuto invertendo lo stesso test sono coerenti: si rifiuta il valore nullo quando esso è escluso dall'intervallo corrispondente. Eseguire molti test aumenta il rischio di falsi rifiuti complessivi; Bonferroni assegna a ciascuno di $m$ test il livello $\alpha/m$ per controllare l'errore familiare al più a $\alpha$.
:::
