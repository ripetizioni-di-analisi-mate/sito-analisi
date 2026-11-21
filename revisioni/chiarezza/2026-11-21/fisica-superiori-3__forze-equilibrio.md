# Fisica 3° anno · Forze ed equilibrio

## Esito del controllo

`python3 strumenti/controlla_capitolo.py fisica-superiori-3 forze-equilibrio`: nessun ERRORE. Frontmatter, 6 titoli `##`, 15 ancore con i loro titoli e 11 righe di figura sono identici all'originale, e la resa IT ed EN è riuscita. Resta un AVVISO su «OH», che è il nome del segmento della figura del braccio e non una sigla.

Parole: IT 2472 → 4199 (×1,70); EN 2359 → 4244 (×1,80). Entrambe sono entro i limiti. La prima stesura era a ×1,78. Ho tolto le descrizioni dei grafici che ripetevano il titolo della figura, un esempio numerico doppio sulla compressione, un caso con θ = 5°, una variante del momento con F_x = +4 e i rimandi ripetuti al paragrafo dei momenti.

## Che cosa è cambiato

1. **Termini e simboli definiti alla prima comparsa**: vincolo e reazione vincolare (con il richiamo del secondo principio $\vec F_R=m\vec a$), forza normale e «normale» = perpendicolare, $N$ corsivo e $\mathrm N$ tondo, tangenziale, tensione, pedice $y$, adesione, distacco, sistema, confine, forze interne ed esterne (con il motivo tratto dal terzo principio), corpo rigido, molla ideale, lunghezza naturale e $\ell$, costante elastica, forza di richiamo, modello lineare, campo elastico, pendenza, intercetta, attrito radente, $\mu$ («mi»), coefficienti come numeri puri, soglia, traslazione, $\alpha$ e $\theta$, piano inclinato, normale uscente, tangente, rapidità, punto materiale, $\sum$, nodo, pedici $L$ e $R$, perno, retta d'azione, posizione, antiorario, coppia, leva, polo, appoggio semplice, uniforme, SI.
2. **Motivi dei «quindi»**: perché la normale si riduce quando la corda tira verso l'alto, perché le forze interne non entrano nel bilancio, perché il peso ha il coseno sulla normale e il seno lungo il piano (l'angolo fra peso e normale entrante è θ), perché la fune destra cede per prima, perché il carico in punta scarica l'appoggio A, perché il momento di una coppia non dipende dal polo (calcolo con lo spostamento $d$: il momento cambia di $-d\sum F_y$).
3. **Passaggi di calcolo aggiunti**: sottrazione delle due misure che elimina $\ell_0$; soglia della trazione obliqua in quattro righe; normale alla soglia (46,2 N); $\sin30^\circ$ e $\cos30^\circ$ sostituiti nel nodo asimmetrico; condizioni della portata delle funi scritte una per riga; momento in coordinate con i due contributi; momenti della tavola uno per forza; $\tan\theta\le\mu_s$ ottenuta dividendo per $mg\cos\theta>0$; $b=r|\sin\theta|$.
4. **Tono prescrittivo tolto** («conviene», «bisogna», «si deve») e sostituito da frasi impersonali di fatto.
5. **Elenchi** al posto di frasi con più oggetti: le due componenti del peso, i due bilanci della trazione obliqua, i due poli della coppia.

## Com'era / Com'è ora (blocco `#piano-inclinato`)

**Com'era**

> Sia $\theta$ l'angolo del piano con l'orizzontale. Si scelgono un asse lungo la discesa e uno normale uscente. La proiezione del peso lungo il piano vale $mg\sin\theta$, verso la discesa. La proiezione normale spinge dentro il piano con modulo $mg\cos\theta$. L'angolo $\theta$ è anche quello tra il peso e la normale entrante, perché entrambe le direzioni si ottengono ruotando l'orizzontale e il piano inclinato di un angolo retto.

**Com'è ora**

> Un **piano inclinato** è una superficie piana che forma un angolo $\theta$ (lettera «theta») con l'orizzontale. Si scelgono un asse lungo il piano, positivo verso la discesa, e un asse perpendicolare al piano, positivo verso l'esterno (asse **normale uscente**). Il peso si scompone lungo questi due assi:
> - la componente lungo il piano vale $mg\sin\theta$ ed è diretta verso la discesa;
> - la componente perpendicolare spinge il corpo dentro il piano e ha modulo $mg\cos\theta$.
>
> Il peso è l'ipotenusa del triangolo rettangolo formato dalle due componenti. L'angolo fra il peso e la normale entrante è uguale a $\theta$, perché il peso è perpendicolare all'orizzontale, la normale è perpendicolare al piano, e due direzioni ruotate entrambe di un angolo retto formano lo stesso angolo di prima. Perciò la componente perpendicolare, adiacente a $\theta$, contiene il coseno, e quella lungo il piano, opposta a $\theta$, contiene il seno.

Nell'originale non era detto perché il seno va lungo il piano e il coseno sulla normale. In quel punto uno studente scambia le due componenti.

## Errori nell'originale

Ho ricalcolato con Python tutti i numeri del capitolo (23,08 N; 46,15 N; 41,57 N; tabella delle reazioni; momenti 1,6, 4, 6 e 3 N·m; braccio della figura) e coincidono tutti. Non ho trovato errori. I dati degli esempi sono invariati.

## Aggiunte per coprire schede, esercizi e domande

- **Molle in serie e in parallelo** e costante equivalente (svolto 1.3, svolto 2.3, domanda 25), con un caso numerico in `#hooke`.
- **Modello di Coulomb** (domanda 42), nominato in `#attrito`.
- **Verso dell'attrito sul nastro trasportatore** spiegato con il pacco (svolto 3.3, domanda 40).
- **Moto in salita** $a=g(\sin\theta+\mu_d\cos\theta)$ (svolto 4.3, domanda 46, esercizio 12).
- **Fulcro, cerniera, baricentro e asta uniforme** (domande 78, 83, 84, svolto 8.2), in `#momento-equilibrio`.
- **Appoggio semplice** che spinge e non trattiene (svolto 8.3), in `#appoggi-limite`.
- **Rapidità** = modulo della velocità (domande 48, svolto 4.2).

## Errori notati negli esercizi e nelle domande (non corretti)

Non ne ho trovati nelle schede e negli esercizi da fare che ho ricalcolato: esercizi da fare 1-14 e schede 1-8. Le domande le ho lette per la copertura e non le ho ricalcolate una per una.

## Dubbi rimasti

- In `#attrito` l'originale dava il grafico con «in scorrimento, qui vale 15 N» senza il valore di $\mu_d$. Ho lasciato solo il titolo della figura, quindi il testo non dice che $\mu_d=0{,}30$.
- In inglese «polo» è reso con *reference point*, perché il file inglese esistente usava *pivot* anche per il polo e qui i due concetti sono distinti.
