---
titolo: "Intervalli di confidenza e numerosità campionaria"
sommario: "Intervalli per medie, proporzioni e varianze, confronto di campioni e pianificazione della precisione."
---

## Significato del livello di confidenza

:::definizione{#confidenza titolo="Procedura di confidenza"}
Un intervallo casuale $[L(X),U(X)]$ ha livello $1-\alpha$ se contiene il parametro con probabilità $1-\alpha$ nel modello, oppure almeno tale probabilità per una procedura conservativa. Dopo l'osservazione gli estremi sono numeri fissati.

La copertura del 95% riguarda la ripetizione del metodo su campioni nuovi. Nel modello frequentista il parametro è fisso: l'intervallo osservato lo contiene oppure no. La precisione dipende dall'ampiezza; aumentando la confidenza, a parità di altre condizioni, l'intervallo si allarga.
:::

## Media con varianza nota

:::teorema{#media-nota titolo="Intervallo normale per la media"}
Per un campione i.i.d. normale con deviazione standard nota $\sigma>0$,
$$
\bar X\pm z_{1-\alpha/2}\frac{\sigma}{\sqrt n}
$$
è un intervallo bilatero esatto di livello $1-\alpha$. $z_p$ è il quantile di ordine $p$ della normale standard. Al 95%, $z_{0{,}975}\approx1{,}96$. Per popolazioni non normali l'intervallo può essere usato come approssimazione tramite il teorema centrale del limite, quando giustificato.
:::

## Media con varianza ignota

:::teorema{#student titolo="Intervallo di Student"}
Per un campione i.i.d. normale di numerosità $n>1$, con deviazione standard ignota,
$$
\bar X\pm t_{1-\alpha/2,n-1}\frac{S}{\sqrt n}.
$$
La distribuzione di Student tiene conto della stima della variabilità; i gradi di libertà sono $n-1$. Con dati fortemente asimmetrici e campione piccolo, la formula non offre copertura esatta. Negli esercizi si dichiarano il modello normale oppure il carattere approssimato della procedura.
:::

## Proporzione e intervallo di Wilson

:::definizione{#proporzione titolo="Intervalli per una proporzione"}
Con $K\sim\operatorname{Bin}(n,p)$ e $\hat p=K/n$, l'intervallo di Wald è $\hat p\pm z\sqrt{\hat p(1-\hat p)/n}$. È un'approssimazione e può avere copertura inadeguata vicino a 0 e 1 o con pochi successi e insuccessi.

L'intervallo di Wilson si ottiene dall'inversione del test score. Posto $z=z_{1-\alpha/2}$, ha centro e semiampiezza
$$
c=\frac{\hat p+z^2/(2n)}{1+z^2/n},\qquad
h=\frac{z\sqrt{\hat p(1-\hat p)/n+z^2/(4n^2)}}{1+z^2/n}.
$$
L'intervallo è $[c-h,c+h]$. Per campioni piccoli si possono usare procedure binomiali esatte, generalmente conservative.
:::

## Varianza di una popolazione normale

:::teorema{#varianza titolo="Intervallo chi quadrato"}
Per un campione i.i.d. normale con $n>1$, un intervallo di livello $1-\alpha$ per $\sigma^2$ è
$$
\left[\frac{(n-1)S^2}{\chi^2_{1-\alpha/2,n-1}},
\frac{(n-1)S^2}{\chi^2_{\alpha/2,n-1}}\right].
$$
La notazione $\chi^2_{p,\nu}$ indica il quantile inferiore di ordine $p$. Il quantile maggiore compare al denominatore dell'estremo inferiore. Per ottenere un intervallo per $\sigma$ si prendono le radici degli estremi, perché la radice è crescente sui valori positivi.
:::

## Differenza tra due medie

:::teorema{#due-medie titolo="Campioni indipendenti"}
Con campioni normali indipendenti e varianze note, l'errore standard di $\bar X-\bar Y$ è $\sqrt{\sigma_X^2/n_X+\sigma_Y^2/n_Y}$. Con varianze ignote si usa comunemente l'intervallo di Welch, sostituendo le varianze campionarie e usando il quantile di Student con gradi di libertà
$$
\nu\approx\frac{(S_X^2/n_X+S_Y^2/n_Y)^2}
{(S_X^2/n_X)^2/(n_X-1)+(S_Y^2/n_Y)^2/(n_Y-1)}.
$$
Per dati appaiati si analizzano invece le differenze entro ciascuna coppia con un intervallo a un campione. Il modello con varianza comune richiede un'ipotesi aggiuntiva sulle due popolazioni.
:::

## Numerosità e intervalli unilateri

:::definizione{#numerosita titolo="Margine di errore prefissato"}
Con $\sigma$ nota, per ottenere semiampiezza al più $E>0$ si sceglie $n\ge(z\sigma/E)^2$, arrotondando all'intero superiore. Per una proporzione, la pianificazione normale prudente usa $p(1-p)\le1/4$, quindi $n\ge z^2/(4E^2)$.

Un limite superiore unilatero per la media normale con $\sigma$ nota è $\bar X+z_{1-\alpha}\sigma/\sqrt n$; l'intervallo è $(-\infty,U]$. Il quantile usa $1-\alpha$, perché tutta la probabilità esclusa è in una sola coda.
:::
