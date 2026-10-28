# Superfici, flussi e teoremi di Gauss e Stokes: primo giro

Riletti la teoria, le 8 schede svolte e le 13 tracce; tutti i risultati ricalcolati con sympy, le circuitazioni delle schede 8 anche con il calcolo diretto lungo il bordo (nessun errore numerico trovato).

## Modifiche fatte

- `teoria/analisi-2/superfici-e-flussi.md`, dimostrazione del *Teorema della divergenza (Gauss)*: c'era "il normale esterno" (due volte) e "con normali opposti", con *normale* usato come sostantivo maschile; ora "il versore normale esterno" e "con versori normali opposti", come nel resto del capitolo. Lingua.
- `svolti/analisi-2/superfici-e-flussi/6.md` (e versione inglese), esercizio 1, ultima frase della spiegazione: diceva che il campo attraversa il paraboloide "prevalentemente" dal lato opposto alla normale, "vicino al bordo", affermazione vaga e imprecisa (l'integrando $-(x^2 + y^2)$ è negativo in *ogni* punto tranne il vertice); ora confronta la pendenza $x$ del campo con la pendenza $2x$ del paraboloide nella sezione $y = 0$ e conclude che il campo attraversa la superficie dall'alto verso il basso in ogni punto diverso dal vertice. Didattica.

## Modifiche da fare

- Teoria, esempio del blocco *Piano tangente a una superficie* e scheda 1, esercizio 2: l'elicoide $(u\cos v, u\sin v, 2v)$ nel punto $\left(1, \dfrac{\pi}{2}\right)$ è svolto due volte con gli stessi numeri; lo studente che apre la scheda ritrova l'esempio appena letto. Proposta: cambiare il punto nell'esempio teorico (per esempio $(u_0, v_0) = (2, 0)$) oppure sostituire l'esercizio 2 della scheda con un'altra superficie (un cono o un toro).
- Teoria, esempio del blocco *Integrale di superficie* e scheda 4, esercizio 1: anche qui lo stesso calcolo ($\iint_\Sigma z \, d\sigma$ sul piano $z = 1 - x - y$, risultato $\dfrac{\sqrt{3}}{6}$) compare identico. Proposta: cambiare la funzione integranda nell'esempio teorico (per esempio $x$ al posto di $z$) o nell'esercizio.
- Scheda 7 (teorema della divergenza): manca il caso del campo singolare nell'origine, $\mathbf{F} = \dfrac{(x, y, z)}{(x^2 + y^2 + z^2)^{3/2}}$, nel quale il teorema *non* si applica alla palla e il flusso uscente da una sfera vale $4\pi$ pur essendo la divergenza nulla. È una domanda d'esame frequente e chiarisce il ruolo dell'ipotesi "$C^1$ su un aperto contenente $V$". Proposta: aggiungerlo come esercizio 4.
- Scheda 8 (Stokes): in tutti e tre gli esercizi la superficie scelta è piana. Manca la tipologia inversa, molto frequente: calcolare il flusso del rotore attraverso una superficie curva (semisfera o paraboloide) sostituendola con il disco che ha lo stesso bordo, oppure calcolando la circuitazione sul bordo. Proposta: un esercizio 4 di questo tipo.
- Schede 6-7: nessun esercizio richiede di invertire l'orientazione indotta dalla parametrizzazione (normale verso il basso o verso l'interno), situazione in cui lo studente sbaglia il segno. Proposta: aggiungere a una delle due schede un flusso con orientazione verso il basso, con la spiegazione del cambio di segno.
- Tracce: nessuna traccia sulla tecnica di chiusura della superficie (osservazione dopo il teorema della divergenza, scheda 7 esercizio 3). Proposta: aggiungere una traccia 14 con un paraboloide o una semisfera da chiudere con un disco.
