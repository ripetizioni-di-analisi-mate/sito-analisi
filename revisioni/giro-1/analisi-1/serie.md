# Giro 1, Analisi 1: serie

Riletti: teoria `src/content/teoria/analisi-1/serie.md`, schede svolte 1-8, tracce 1-14. Somme, limiti dei rapporti e delle radici, insiemi di convergenza ricalcolati con sympy; i valori delle somme parziali nella figura del criterio di Leibniz ricontrollati uno per uno. Tutto corretto.

## Modifiche fatte

- **Didattica**, `teoria/analisi-1/serie.md`, blocco `#serie-armonica`. Il testo diceva che l'armonica "è il controesempio che mostra la non sufficienza della condizione necessaria", ma la condizione necessaria è enunciata solo nella sezione successiva. Adesso "è il controesempio che mostra che un termine generale infinitesimo non basta per la convergenza".
- **Editoriali**, `teoria/analisi-1/serie.md`, esempio "Limiti notevoli nel confronto asintotico". Due passaggi logici erano affidati ai due punti ("**diverge**: poiché …", "**converge**: $1 - \cos \frac{1}{n} \sim \dots$"). Adesso "**diverge**. Poiché …" e "**converge**, perché …".
- **Lingua**, `teoria/analisi-1/serie.md`, blocco `#convergenza-assoluta`. "implica la convergenza, e vale" seguito da una disuguaglianza; adesso "e vale la disuguaglianza".
- **Editoriali**, `dafare/analisi-1/serie/7.md`, traccia e soluzione. L'esponente $e^{1/n}$ era scritto con la barra; adesso $e^{\frac{1}{n}}$. Stessa modifica nel file inglese.
- **Didattica**, `dafare/analisi-1/serie/9.md`, titolo. "Criterio del rapporto con doppi fattoriali e potenze": la serie contiene $(2n)!$ e $(n!)^2$, non doppi fattoriali $n!!$, e il titolo poteva confondere. Adesso "Criterio del rapporto con fattoriali e potenze" (il titolo inglese era già corretto).

## Modifiche da fare

- **Schede svolte, confronto asintotico con gli sviluppi di Taylor.** La scheda 3 usa solo limiti notevoli al primo ordine. All'esame compaiono spesso termini in cui il primo ordine si cancella, come $\sum \left( \frac{1}{n} - \sin \frac{1}{n} \right)$ (asintotico a $\frac{1}{6 n^3}$) o $\sum \left( e^{\frac{1}{n}} - 1 - \frac{1}{n} \right)$ (asintotico a $\frac{1}{2 n^2}$). Proposta: un esercizio 4 nella scheda 3 o una scheda dedicata "Serie con gli sviluppi di Taylor", con un caso a parametro.
- **Scheda 8, serie di potenze con potenze pari o centro non banale.** Mancano serie come $\sum \frac{x^{2n}}{4^n}$ o $\sum \frac{(2x - 1)^n}{n}$, dove la formula del raggio non si applica direttamente ai coefficienti e lo studente sbaglia il raggio. Proposta: un esercizio 4 che risolva con la sostituzione $y = x^2$ (o $y = 2x - 1$) e torni alla variabile $x$.
- **Teoria, dimostrazioni omesse di risultati centrali.** Il criterio di Leibniz (con la stima dell'errore) e la convergenza assoluta che implica la convergenza sono chiesti spesso all'orale, e la teoria li dà senza dimostrazione. Proposta: aggiungere le due dimostrazioni in blocchi `:::dimostrazione` (la seconda richiede tre righe con il confronto su $0 \leq a_n + |a_n| \leq 2|a_n|$, già citato nel testo).
- **Teoria, esempio "Studio degli estremi".** La didascalia della figura dice "Dalla serie di $\ln(1 + x)$ con $-x$ al posto di $x$": la serie di $\ln(1 + x)$ compare solo nel blocco successivo `#serie-di-taylor`. Proposta: spostare il blocco `#serie-di-taylor` prima dell'esempio, oppure riformulare la didascalia senza quel rimando.
- **Teoria, criterio del confronto asintotico con $\ell = 0$ e $\ell = +\infty$.** Gli studenti usano spesso la gerarchia degli infiniti (per esempio $\sum \frac{\ln n}{n^2}$, confrontata con $\frac{1}{n^{\frac{3}{2}}}$), ma nessun esempio della teoria mostra i casi $\ell = 0$ o $\ell = +\infty$. Proposta: un esempio breve subito dopo il blocco `#confronto-asintotico`.
