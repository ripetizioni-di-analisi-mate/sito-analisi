# Giro 1 · precorso · logaritmiche

Rilette: teoria, 5 schede svolte, 12 tracce. Tutti i risultati ricalcolati con sympy (equazioni ridotte alla forma algebrica e filtrate con le condizioni di esistenza, disequazioni controllate su una griglia fitta): nessun errore numerico.

## Modifiche fatte

1. **Matematica** · `src/content/teoria/precorso/logaritmiche.md`, blocco `#disequazioni-logaritmo-numero`. Il blocco trattava solo $\log_a A > k$; il caso $\log_a A < k$, usato nella scheda 4 (Esercizio 2) e nella scheda 5 (Esercizio 2), non era enunciato e lì il sistema cambia lato. Aggiunto: per $\log_a A < k$ i due casi si scambiano; con $0 < a < 1$ equivale ad $A > a^{k}$ (l'esistenza segue da $A > a^{k} > 0$), con $a > 1$ equivale al sistema $A < a^{k}$, $A > 0$. Stessa aggiunta nel file inglese.
2. **Editoriale (frazioni in colonna)** · Le basi $\frac{1}{2}$ e $\frac{1}{3}$ erano scritte in linea, `\log_{1/2}`, `\log_{1/3}`, mentre la teoria in un punto usava già `\log_{\frac{1}{2}}`. Sostituite tutte con `\log_{\frac{1}{2}}` e `\log_{\frac{1}{3}}` in teoria (esempio "Base tra 0 e 1" e didascalia), `svolti/.../logaritmiche/2.md` (Esercizio 3, anche didascalia), `svolti/.../logaritmiche/5.md` (tre esercizi, anche didascalia), tracce 4, 11, 12. Stessa sostituzione nei file inglesi corrispondenti.
3. **Figure** · teoria, figura dell'esempio "Base tra 0 e 1". La legenda, generata dall'espressione della funzione, mostrava $y = \dfrac{\ln(x + 1)}{\ln\left(\frac{1}{3}\right)}$ invece dei logaritmi in base $\frac{1}{3}$ del testo. Aggiunto l'attributo `legenda` con $y = \log_{\frac{1}{3}} (x + 1)$ e $y = \log_{\frac{1}{3}} (5 - x)$. Figura ridisegnata e controllata.
4. **Figure / editoriale** · teoria, figura di $y = \log_2 x$ nell'esempio "I due grafici di base": didascalia in testo semplice ("y = log₂ x: base maggiore di 1…"), diversa da tutte le altre; ora con le formule in KaTeX. Stessa modifica nel file inglese.
5. **Lingua** · teoria, didascalia della figura nel blocco `#definizione-logaritmo`: "$y = 2^{x}$ e $y = \log_2 x$… sono simmetrici" (le funzioni non sono simmetriche, lo sono i grafici); ora "I grafici di $y = 2^{x}$ e di $y = \log_2 x$… sono simmetrici". La figura non è nel file inglese.

## Modifiche da fare

1. **Teoria, proprietà dei logaritmi** · Manca l'avviso sul logaritmo di una potenza con esponente pari: $\log_a (x^{2}) = 2 \log_a |x|$ e non $2 \log_a x$, che fa perdere le soluzioni negative (es. $\log_3 (x^{2}) = 2$ ha soluzioni $x = \pm 3$; con $2 \log_3 x = 2$ resta solo $x = 3$). È un errore che lo studente fa sempre all'esame. Proposta: un blocco `:::attenzione` dopo `#proprieta-logaritmi` con questo controesempio.
2. **Svolti + tracce, disequazioni con sostituzione** · La sostituzione $t = \log_a x$ è svolta solo per le equazioni. Le disequazioni del tipo $(\log_2 x)^{2} - 3 \log_2 x + 2 < 0$ (soluzione $2 < x < 4$) mancano in teoria, svolti e tracce. Proposta: un esempio nella sezione "Equazioni con sostituzione" o un'osservazione, più un esercizio nella scheda 5 o una scheda 6.
3. **Svolti, disequazioni con le proprietà** · Nessuna disequazione richiede di riunire due logaritmi (es. $\log_2 x + \log_2 (x - 2) < 3$, soluzione $2 < x < 4$), dove lo studente deve tenere le condizioni di esistenza dei logaritmi *originali*. Proposta: un esercizio nella scheda 4.
4. **Svolti/tracce, cambio di base** · Il blocco `#cambio-di-base` non è mai usato in un esercizio. Proposta: una traccia "Equazione con logaritmi in basi diverse", per esempio $\log_2 x + \log_4 x = 3$ (soluzione $x = 4$).
5. **Versione inglese** · Il file inglese ha 2 figure contro le 12 dell'italiano. Proposta: decidere se riportare le figure anche in inglese.
