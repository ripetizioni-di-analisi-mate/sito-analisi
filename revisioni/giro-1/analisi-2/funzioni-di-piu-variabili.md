# Funzioni di più variabili: primo giro

Riletti la teoria, le 7 schede svolte e le 14 tracce; limiti, restrizioni e prolungamenti ricalcolati con sympy, figure ridisegnate e controllate.

## Modifiche fatte

- `teoria/analisi-2/funzioni-di-piu-variabili.md`, riferimenti alla struttura della pagina (vietati dalla guida), sostituiti con il nome di ciò che si cita (italiano e inglese). Editoriale, 4 punti:
  - *Insieme limitato e insieme compatto*: "teorema di Weierstrass, enunciato alla fine del capitolo" → "teorema di Weierstrass in più variabili";
  - *Funzione di due o più variabili*: "gli insiemi di livello, introdotti nel paragrafo seguente" → "definiti nel paragrafo sulle curve e superfici di livello";
  - osservazione dopo *Limite in due variabili*: "le tecniche dei due paragrafi seguenti" → "due strumenti distinti: il teorema delle restrizioni per dimostrare che un limite non esiste, il confronto e le coordinate polari per dimostrare che esiste";
  - avviso su $\dfrac{x^2 y}{x^4 + y^2}$: "come nel paragrafo seguente" → "con il teorema del confronto o con le coordinate polari".
- Teoria, esempio *Continuità da verificare in un solo punto* (italiano e inglese): l'esempio si fermava a "da verificare con le tecniche del paragrafo precedente" e lo studente non sapeva se la funzione fosse continua. Ora contiene la maggiorazione $|f| = \dfrac{x^2}{x^2 + y^2}\,|x| \leq |x|$ e la conclusione. Didattica.
- `svolti/.../4.md`, esercizio 2 (italiano e inglese): la regola finale "quando il grado del numeratore supera quello del denominatore il limite è $0$" è falsa in generale (per esempio $\dfrac{x^3}{(x - y)^2}$ vale $1$ lungo $y = x - x^{3/2}$). Ora è ristretta al caso del denominatore $x^2 + y^2$ con numeratore omogeneo di grado maggiore di $2$. Matematica.
- `svolti/.../1.md`, esercizio 4 (italiano e inglese): "non è limitato, perché contiene tutto l'asse $x$" era falso, dato che i punti $(\pm 3, 0)$ sono tolti; ora "contiene i punti $(x, 0)$ con $|x| > 3$". Aggiunta anche la non connessione del dominio (la circonferenza tolta lo separa in tre parti), unica proprietà non descritta mentre gli esercizi 2 e 3 la discutono. Matematica.
- `dafare/.../8.md` (italiano e inglese): "maggiorata da $g(\rho) = \rho \to 0^+$" si leggeva come se $g$ tendesse a $0^+$ come valore di arrivo; ora "maggiorata da $g(\rho) = \rho$, che non dipende da $\theta$ e tende a $0$ per $\rho \to 0^+$". Lingua.

## Modifiche da fare

- Schede svolte: sono 7 invece delle 10 previste dalla guida. Proposta di tre schede nuove per tipologie frequenti all'esame: (a) limiti e continuità con un parametro, per esempio "per quali $\alpha > 0$ la funzione $\dfrac{|x|^{\alpha} y}{x^2 + y^2}$, prolungata con $0$, è continua nell'origine"; (b) limiti in un punto diverso dall'origine, con le coordinate polari centrate in $P_0$; (c) studio del segno di una funzione di due variabili sul piano, che usa il blocco *Insieme connesso* (segno costante sui pezzi connessi) e oggi non ha esercizi.
- Teoria, *Calcolo con le coordinate polari*: il cambio di coordinate è scritto per un centro $P_0$ qualunque, ma l'unico esempio è nell'origine; lo studente non vede mai la traslazione all'opera. Proposta: un esempio breve come $\displaystyle\lim_{(x,y)\to(1,0)} \frac{(x - 1)^2 y}{(x - 1)^2 + y^2}$.
- Teoria, *Superficie di livello*: definita con un esempio, ma nessuna scheda o traccia la usa. Proposta: una traccia "descrivere le superfici di livello di $f(x, y, z) = x^2 + y^2 - z$" (paraboloidi traslati).
- Teoria, *Punto interno, esterno, di frontiera*: nessun esercizio chiede di determinare $\mathring{A}$ e $\partial A$ di un insieme assegnato, domanda frequente nei quiz di teoria. Proposta: una traccia sulla corona $1 \leq x^2 + y^2 < 4$ con richiesta di interno, frontiera e chiusura.
- `svolti/.../7.md`, esercizio 2: "Prima di ricorrere a maggiorazioni conviene osservare la struttura del numeratore" ha un tono da consiglio; da valutare se riformulare in forma espositiva ("Il numeratore si fattorizza come…").
