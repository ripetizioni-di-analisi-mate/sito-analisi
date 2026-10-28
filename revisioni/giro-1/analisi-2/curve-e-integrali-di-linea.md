# Curve e integrali di linea: primo giro

Rilette la teoria, le 7 schede svolte e le 13 tracce; lunghezze, integrali di prima e seconda specie e baricentri ricalcolati (nessun errore nei risultati), figure ridisegnate.

## Modifiche fatte

- `teoria/analisi-2/curve-e-integrali-di-linea.md`, esempio *Una cuspide* (italiano e inglese): "la curva arriva nell'origine scendendo lungo il ramo con $y < 0$ … con un'inversione del verso di avanzamento verticale" era sbagliato: per $t < 0$ si ha $y'(t) = 3t^2 > 0$, quindi la curva sale, mentre $x'(t) = 2t$ cambia segno. Ora: arriva nell'origine muovendosi verso sinistra, riparte verso destra, con un'inversione del verso di avanzamento orizzontale (in accordo con i vettori della figura). Matematica.
- `svolti/.../1.md`, esercizio 3 (italiano e inglese): "la curva perde la direzione tangente proprio dove la velocità si annulla" era impreciso, poiché nella cuspide entrambi i rami sono tangenti all'asse $x$. Ora: nell'istante $t = 0$ la velocità si annulla e $x'(t) = 2t$ cambia segno, quindi il verso di avanzamento orizzontale si inverte. Matematica.
- Teoria, riferimenti alla struttura della pagina (italiano e inglese). Editoriale, 2 punti:
  - *Orientazione e curva opposta*: tolto "come precisato alla fine del capitolo";
  - *Lunghezza di una curva*: "la formula integrale del teorema seguente" → "la formula della lunghezza".
- Frazioni in linea dentro le formule, sostituite con `\frac` (italiano e inglese). Editoriale, 4 file:
  - `svolti/.../3.md`, esercizio 2: esponente $3/2$ nella primitiva;
  - `svolti/.../5.md`, esercizio 2: estremi $\pi/2$ (cinque occorrenze);
  - `svolti/.../7.md`, esercizio 3: estremi $\pi/2$ (due occorrenze);
  - `dafare/.../11.md`: estremo $\pi/2$.

## Modifiche da fare

- Schede svolte: sono 7 invece di 10, tracce 13 invece di 14. Tipologie d'esame assenti: (a) lunghezza di curve in coordinate polari $\rho = \rho(\theta)$ (cardioide, spirale), con la formula $\sqrt{\rho^2 + \rho'^2}$ che la teoria non riporta; (b) parametrizzazione di una curva assegnata come intersezione di superfici (sfera e piano, cilindro e piano) prima dell'integrale; (c) baricentro di un filo *non* omogeneo, oggi presente solo come massa nella traccia 10.
- Teoria, *Curva regolare*: richiede $\gamma'(t) \neq \mathbf{0}$ per $t \in (a, b)$, estremi esclusi, mentre le schede verificano la condizione su $[a, b]$ (scheda 1, esercizio 1: "per ogni $t \in [0, 2]$"). Lo studente non capisce se gli estremi contano. Proposta: una riga che spieghi la scelta (la regolarità negli estremi non è richiesta, così le spezzate e le cuspidi agli estremi sono ammesse).
- Notazione dell'integrale di seconda specie: qui $\displaystyle\int_\gamma F \cdot d\gamma$ con parametrizzazione $\gamma(t)$, nel capitolo sui campi vettoriali $\displaystyle\int_\gamma F \cdot dr$ con $r(t)$; inoltre il blocco *Campo vettoriale* è definito in entrambi i capitoli con testi diversi. Proposta: scegliere una notazione unica e, nel capitolo sui campi, sostituire la definizione con un richiamo.
- Teoria, figura dell'esempio *Stesso sostegno, parametrizzazioni diverse*: i vettori $\gamma'(0)$ e $\delta'(0)$ sono sovrapposti sulla stessa retta e il più corto è coperto per metà dal più lungo. Proposta: applicare i due vettori in punti diversi, oppure affiancarli con una piccola traslazione orizzontale.
