---
titolo: "Misure, strumenti e incertezze"
sommario: "Letture, misure ripetute, intervalli e propagazione delle incertezze con criteri espliciti."
---

:::percorso
Le conversioni permettono di confrontare misure della stessa grandezza.
Una misura sperimentale richiede anche informazioni sullo strumento e sull'incertezza.
Qui si costruiscono intervalli e stime che serviranno per la densità, i grafici sperimentali e le forze.
:::

## Strumenti e risoluzione

:::definizione{#strumenti titolo="Portata, divisioni e lettura"}
La **portata** è il valore massimo previsto dalla scala; la **risoluzione** è la minima variazione distinguibile dallo strumento. Se fra 0 e $10\,\mathrm N$ ci sono venti intervalli uguali, ogni divisione vale $0{,}5\,\mathrm N$.
Una convenzione scolastica assegna metà divisione a una lettura analogica; altre attività adottano una divisione intera o l'incertezza dichiarata dal costruttore. Negli esercizi il criterio è specificato. Non si deve trasformare una convenzione particolare in una regola universale per ogni strumento.
:::

## Misure ripetute

:::definizione{#ripetute titolo="Media e semidispersione"}
La media aritmetica di $n$ letture è
$$
\bar x=\frac{x_1+\cdots+x_n}{n}.
$$
Una stima semplice della dispersione è $\Delta x=(x_{\max}-x_{\min})/2$, detta **semidispersione massima**. Le letture 9,8; 10,0; 10,2 cm hanno media 10,0 cm e semidispersione 0,2 cm.
La stima assegnata non dovrebbe ignorare la capacità di lettura dello strumento. Quando viene richiesto il maggiore fra semidispersione e incertezza strumentale, si confrontano le due quantità nella stessa unità.
:::

## Scrivere un risultato e il suo intervallo

:::definizione{#intervalli titolo="Valore centrale e incertezza assoluta"}
La misura $x=(x_m\pm\Delta x)$ indica il valore centrale $x_m$ e l'incertezza assoluta $\Delta x$. L'intervallo associato va da $x_m-\Delta x$ a $x_m+\Delta x$.
Per $l=(12{,}0\pm0{,}2)\,\mathrm{cm}$ gli estremi sono 11,8 e 12,2 cm. Secondo il criterio di sovrapposizione, due misure sono compatibili se gli intervalli hanno almeno un punto in comune. Questo criterio operativo non dimostra l'uguaglianza dei valori veri né attribuisce da solo una probabilità all'intervallo.
:::

## Incertezza relativa e percentuale

:::definizione{#relativa titolo="Confrontare l'incertezza con la misura"}
Per un valore centrale positivo,
$$
\varepsilon=\frac{\Delta x}{x_m},\qquad
\varepsilon_\%=100\varepsilon.
$$
L'incertezza relativa è adimensionale. Se $m=(50\pm1)\,\mathrm g$, allora $\varepsilon=0{,}02$ e l'incertezza percentuale è 2%. Per ritrovare quella assoluta si usa $\Delta x=\varepsilon x_m$.
Una stessa incertezza assoluta pesa diversamente su valori centrali diversi. Uno scarto di 1 mm su 10 mm rappresenta il 10%; su 100 mm rappresenta l'1%.
:::

## Propagazione delle incertezze

:::teorema{#propagazione titolo="Stime prudenziali e approssimazioni lineari"}
Per somme e differenze, una stima prudenziale somma le incertezze assolute:
$$
\Delta(a+b)=\Delta a+\Delta b,\qquad
\Delta(a-b)=\Delta a+\Delta b.
$$
Per prodotti e quozienti di grandezze positive, la stima lineare prudenziale somma le incertezze relative. Per $z=x^n$, al primo ordine, $\varepsilon_z\simeq|n|\varepsilon_x$. Per esempio un lato noto al 2% dà un'area quadrata nota circa al 4%.
Le formule lineari trascurano termini di ordine superiore e sono adatte a piccole incertezze. Si applica il metodo dichiarato: la somma quadratica statistica richiede ipotesi differenti e non è sostituibile automaticamente alla stima prudenziale.
:::

## Arrotondare senza aggiungere precisione

:::osservazione{#cifre titolo="Cifre utili nel risultato"}
Il valore centrale e l'incertezza vanno riportati a posizioni decimali coerenti. Se l'incertezza assegnata è 0,2 cm, scrivere 12,34567 cm come risultato finale suggerirebbe una precisione non sostenuta.
Per arrotondare al decimo si osserva il centesimo. Con la convenzione indicata negli esercizi, 12,45 diventa 12,5. Durante i passaggi intermedi si conservano più cifre, arrotondando il risultato alla fine, per evitare che piccoli errori di arrotondamento si accumulino.
:::

## Errori casuali e sistematici

:::definizione{#errori titolo="Dispersione e taratura"}
Gli **errori casuali** producono variazioni fra le letture. Uno **scarto sistematico** sposta le misure in modo ripetuto rispetto al riferimento, per esempio quando una bilancia aggiunge sempre 3 g.
Ripetere le misure aiuta a descrivere la dispersione; una media non elimina da sola una taratura errata. Un controllo dello zero o il confronto con un campione noto può mettere in evidenza lo scarto sistematico. Una serie molto concentrata può essere precisa nelle ripetizioni e tuttavia distante dal riferimento.
:::
