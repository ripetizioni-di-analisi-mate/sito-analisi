# Campi vettoriali e teorema di Green: primo giro

Riletti la teoria, le 7 schede svolte e le 14 tracce; derivate incrociate, rotori, potenziali, lavori, circuitazioni con Green e aree ricalcolati (nessun errore nei risultati), figure ridisegnate.

## Modifiche fatte

- `teoria/analisi-2/campi-vettoriali.md`, dimostrazione della *Caratterizzazione dei campi conservativi*, passaggio da 2 a 3 (italiano e inglese): il primo argomento usava "la curva costante in $P$", che non è regolare a tratti (velocità nulla) e quindi esce dalle ipotesi del teorema; il secondo argomento parlava di "due archi $\gamma_1$ e $\gamma_2$ da $P$ a $Q$" senza dire chi fosse $Q$ e senza dire che il secondo arco di $\gamma$ va percorso al contrario. Ora resta solo lo spezzamento: si fissa $Q$ sul sostegno, $\gamma_1$ va da $P$ a $Q$, il secondo arco va da $Q$ a $P$ e il suo opposto $\gamma_2$ va da $P$ a $Q$. Matematica.
- Teoria, dimostrazione del *Lavoro di un campo conservativo* (italiano e inglese): "le somme ai punti di raccordo si semplificano a coppie" non diceva che cosa si semplifica; ora "i valori di $U$ nei punti di raccordo compaiono una volta con il segno più e una volta con il segno meno, quindi si semplificano a coppie". Lingua.
- Teoria, *Potenziale per integrazione successiva*: "nella espressione" → "nell'espressione". Lingua.
- Teoria, *Formule dell'area* (italiano e inglese): "nel suo integrando i termini misti si semplificano" era vago (nell'ellisse non ci sono termini misti che si elidono); ora "è spesso la più comoda per i bordi parametrizzati con seno e coseno, poiché nel suo integrando compare la somma $\cos^2 t + \sin^2 t = 1$, come per l'ellisse". Didattica.
- `svolti/.../1.md`, esercizio 2 (italiano e inglese): "la costruzione del potenziale non va tentata" (tono prescrittivo, vietato dalla guida) → "un potenziale non esiste". Editoriale.

## Modifiche da fare

- Schede svolte: sono 7 invece di 10. Tipologie frequenti all'esame senza esercizio: (a) campo con parametro, "determinare $a$ in modo che $F = (ax y + y^2,\; x^2 + 2xy)$ sia conservativo e calcolarne un potenziale"; (b) teorema di Green su un dominio con un buco (corona circolare), che la teoria illustra con una figura ma nessun esercizio usa; (c) campo di rotazione e circuitazione lungo una curva chiusa che *non* gira attorno all'origine (per esempio una circonferenza di centro $(3, 0)$ e raggio $1$), per far vedere che la circuitazione è nulla.
- Teoria, *Irrotazionale su semplicemente connesso implica conservativo*: la dimostrazione con Green copre solo "un dominio la cui frontiera è una curva chiusa contenuta in $A$ insieme alla regione racchiusa", e lo studente non capisce perché questo basti per *ogni* curva chiusa (le curve che si autointersecano). Proposta: una riga che dica esplicitamente che il caso generale non è coperto e rimandi alla dimostrazione omessa.
- Teoria, figura della dimostrazione del teorema di Green: il segmento verticale tratteggiato in $x = 2.6$ non è nominato nella didascalia. Proposta: aggiungere "il segmento tratteggiato interno è l'intervallo $g_1(x) \leq y \leq g_2(x)$ su cui si integra in $y$".
- Teoria, figura del campo di rotazione: sulla circonferenza unitaria le frecce, lunghe $0{,}75$, si sovrappongono alla circonferenza stessa e il disegno vicino all'origine è confuso. Proposta: ridurre la scala delle frecce, per esempio a $0{,}5 \cdot \dfrac{1}{\rho}$.
- Notazione: qui l'integrale di seconda specie è $\displaystyle\int_\gamma F \cdot dr$ con $r(t)$, nel capitolo sulle curve $\displaystyle\int_\gamma F \cdot d\gamma$ con $\gamma(t)$, e il blocco *Campo vettoriale* è definito due volte. Proposta in comune con il capitolo sulle curve: notazione unica e un richiamo al posto della seconda definizione.
