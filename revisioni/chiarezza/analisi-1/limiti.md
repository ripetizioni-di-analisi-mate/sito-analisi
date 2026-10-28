# Limiti e continuità: revisione di chiarezza (argomento pilota)

Teoria: 25.857 → 38.073 byte (+47%; senza le righe delle figure +45%). Cinque figure nuove. Nessun errore matematico trovato: tutti i limiti della teoria, delle 10 schede e delle 14 tracce sono stati ricalcolati con sympy. Ancore, campi `gratis`, ordine di schede ed esercizi, risultati: invariati.

## Dove lo studente si bloccava

**Teoria**
1. Apertura: nessun collegamento con insiemi (intorni, sup) né con derivate, studio di funzione, integrali impropri, serie.
2. `#intorno`: $|x - x_0|$ non era detto "distanza"; l'intorno arrivava senza l'idea di vicinanza.
3. `#punto-di-accumulazione`: nessun motivo per cui serve; gli esempi $\{1, 2, 3\}$ e $\mathbb{N}$ senza spiegazione.
4. `#limite-finito`: definizione ε-δ senza l'idea prima, senza dire che cosa sono $\varepsilon$ e $\delta$ né perché $\delta$ dipende da $\varepsilon$; nessuna figura nel blocco.
5. Esempio $3x - 1$: $\delta = \dfrac{\varepsilon}{3}$ arrivava "dal nulla" (il fattore 3 non era motivato).
6. `#limite-infinito`: "stessa struttura, con intorni di tipo diverso" senza dire che cosa sono $M$ e $K$; nell'esempio $\dfrac{1}{x^2}$ mancava il passaggio da $\dfrac{1}{x^2} > M$ a $|x| < \dfrac{1}{\sqrt{M}}$.
7. Passaggio dalle definizioni ai teoremi: nessuna frase sul perché si passa ai teoremi.
8. `#unicita-del-limite`: dimostrazione senza idea; disuguaglianza triangolare usata senza nominarla; $\min\{\delta_1, \delta_2\}$ non motivato.
9. `#permanenza-del-segno`: scelta $\varepsilon = \dfrac{L}{2}$ senza idea.
10. `#teorema-del-confronto`: nella dimostrazione "per $x$ abbastanza vicino" nascondeva la scelta di $\delta$.
11. `#limitata-per-infinitesima`: usa "infinitesima" prima che sia definita.
12. `#algebra-dei-limiti`: scritture come $L + \infty = +\infty$ presentate come conti, non come abbreviazioni di enunciati; nessuna origine del teorema; le schede usano "il limite si calcola sostituendo" (continuità) prima che la continuità sia definita.
13. `#forme-indeterminate`: elencate $1^\infty$, $0^0$, $\infty^0$ senza dire come si trattano (le schede 6 e 10 le usano); nessun legame con la derivata.
14. `#limite-funzione-composta`: la condizione $g(x) \neq y_0$ non era motivata.
15. Limiti notevoli: nessuna frase su perché servono e a che cosa serviranno; in $\dfrac{1 - \cos x}{x^2}$ mancava il conto $(1 - \cos x)(1 + \cos x) = \sin^2 x$; nella dimostrazione del seno le tre aree erano date senza dire da dove vengono; radianti non nominati.
16. `#limiti-notevoli-esponenziale`: "definizione di $e$ estesa dalle successioni" quando le successioni non sono ancora state viste; derivazioni del secondo e terzo limite compresse; la forma $(1 + u)^{\frac{1}{u}} \to e$ per $u \to 0$, usata nelle schede 6 e 10, non compariva; la continuità di $u^v$, usata nelle schede, non compariva.
17. `#infinitesimo-infinito`: nessun esempio di o-piccolo; "scrive un'approssimazione insieme all'ordine dell'errore" si capiva solo alla seconda lettura.
18. `#funzioni-asintotiche`: la sostituzione nei prodotti era affermata senza il perché.
19. `#definizione-asintoti`: le formule di $m$ e $q$ arrivavano dal nulla.
20. Funzioni continue: nessun ponte con i calcoli precedenti (dove si è sempre "sostituito"); nessuna lettura in parole; nessun legame con la derivabilità.
21. Teoremi sulle funzioni continue: enunciati senza l'idea; nessuna figura per Weierstrass e valori intermedi; Weierstrass senza controesempio per l'ipotesi di continuità.
22. Dimostrazione del teorema degli zeri: un unico paragrafo denso, con la permanenza del segno applicata a una funzione continua senza dire con quale $L$; nessuna figura dell'insieme $E$.
23. Dimostrazione dei valori intermedi: "l'intervallo di estremi $x_m$ e $x_M$" senza dire che l'ordine può essere qualunque.

**Schede**
24. Scheda 1, es. 1: perché si scompone (il fattore $x - 1$ comune, teorema di Ruffini) e perché si può semplificare (la definizione di limite esclude $x_0$) non erano detti; la continuità del polinomio non era nominata come risultato della teoria.
25. Scheda 2, es. 1: perché si razionalizza; mancava il legame con il limite notevole $(1 + x)^\alpha$.
26. Scheda 3, es. 1: il teorema usato per concludere non era nominato.
27. Scheda 4, es. 1: perché si moltiplica e si divide per $5x$ e $2x$; il teorema che autorizza il cambio di variabile non era nominato.
28. Scheda 4, es. 3: perché non si sostituisce subito $\tan x \sim x$, $\sin x \sim x$.
29. Scheda 5, es. 2: cambio di variabile implicito.
30. Scheda 6, es. 1 e 3: perché si pone $t = \dfrac{x - 1}{2}$; da dove viene la continuità di $u^v$; perché serve $u \neq 0$; come si riscrive l'esponente $\dfrac{1}{x^2}$.
31. Scheda 7, es. 1: perché non si raccoglie $x$ subito.
32. Scheda 8, es. 1: perché ci si aspetta un asintoto obliquo.

## Prima e dopo

**1. `#limite-finito`, idea e lettura in parole (con figura nuova)**
Prima:
> Fissata una distanza $\varepsilon$ da $L$, piccola a piacere, esiste un intorno di $x_0$ in cui *tutti* i valori $f(x)$ distano da $L$ meno di $\varepsilon$; il raggio $\delta$ **dipende da** $\varepsilon$.

Adesso (prima della definizione formale):
> Si vuole esprimere che $f(x)$ è vicino quanto si vuole a $L$ pur di prendere $x$ abbastanza vicino a $x_0$. Le due vicinanze si misurano con due numeri: $\varepsilon$ è la distanza ammessa tra $f(x)$ e $L$, $\delta$ quanto ci si può allontanare da $x_0$.

e dopo:
> In parole: fissata una tolleranza $\varepsilon$, piccola a piacere, esiste un intorno di $x_0$ in cui *tutti* i valori $f(x)$ distano da $L$ meno di $\varepsilon$. Sul grafico, la striscia orizzontale tra $L - \varepsilon$ e $L + \varepsilon$ contiene il tratto di grafico sopra l'intervallo $(x_0 - \delta, x_0 + \delta)$. Prima si fissa $\varepsilon$ e poi si cerca $\delta$, perciò il raggio $\delta$ **dipende da** $\varepsilon$: quando la striscia si restringe, in generale si restringe anche l'intervallo. La struttura *per ogni $\varepsilon > 0$ esiste* è la stessa della caratterizzazione dell'estremo superiore vista nel capitolo sugli insiemi.

Figura: $y = x^2$ con $x_0 = 1$, $\varepsilon = \dfrac{1}{2}$; la striscia, l'intervallo $(x_0 - \delta, x_0 + \delta)$ e il riquadro colorato. Il grafico esce dalla striscia a distanze diverse a sinistra e a destra, e la didascalia mostra che $\delta$ è la più piccola delle due.

**2. Esempio "Verifica con la definizione"**
Prima:
> Fissato $\varepsilon > 0$, poiché $|(3x - 1) - 5| = 3|x - 2|$, basta $\delta = \dfrac{\varepsilon}{3}$

Adesso:
> La distanza di $f(x)$ da $5$ è tre volte la distanza di $x$ da $2$, perché $|(3x - 1) - 5| = |3x - 6| = 3|x - 2|$. Quindi, fissato $\varepsilon > 0$, basta $\delta = \dfrac{\varepsilon}{3}$ […] Con $\varepsilon = \dfrac{3}{2}$ si ottiene $\delta = \dfrac{1}{2}$, con $\varepsilon = \dfrac{3}{10}$ serve $\delta = \dfrac{1}{10}$.

**3. Ponte verso "Primi teoremi sui limiti"** (prima non c'era nulla)
> La definizione permette di verificare un valore già noto e non indica come trovarlo. I teoremi che seguono si dimostrano dalla definizione una volta per tutte, e da essi si ricavano le regole di calcolo che evitano di tornare a $\varepsilon$ e $\delta$.

**4. `#forme-indeterminate`, forme esponenziali e derivata** (aggiunto)
> Le tre forme esponenziali si riconducono a $0 \cdot \infty$ con la scrittura $f(x)^{g(x)} = e^{g(x) \ln f(x)}$, valida per $f(x) > 0$.
>
> Il rapporto incrementale $\dfrac{f(x) - f(x_0)}{x - x_0}$, il cui limite è la derivata nel capitolo sul calcolo differenziale, per una funzione continua è sempre una forma $\dfrac{0}{0}$.

Più un nuovo esempio "Una forma 1 elevato a infinito" ($\lim_{x \to 0}(1 + 2x)^{\frac{1}{x}} = e^2$), che giustifica la continuità di $u^v$ usata nelle schede 6 e 10.

**5. `#limite-funzione-composta`, la condizione $g(x) \neq y_0$**
Prima: solo "(condizione *non necessaria* se $f$ è continua in $y_0$)".
Adesso, in più:
> La condizione $g(x) \neq y_0$ serve perché il limite di $f$ in $y_0$ non usa il valore $f(y_0)$, che invece compare nei punti in cui $g(x) = y_0$; se $f$ è continua in $y_0$, quel valore è $L$.

**6. `#limiti-notevoli-esponenziale`, da dove viene $e$ (con figura nuova)**
Prima:
> Il primo è la definizione del numero $e$ estesa dalle successioni alle funzioni e si *assume*. Il secondo segue dal primo con $x = \dfrac{1}{t}$: $\dfrac{\ln(1 + x)}{x} = \ln\left(\left(1 + \dfrac{1}{t}\right)^{t}\right) \to \ln e = 1$

Adesso:
> Il numero $e = 2{,}71828\ldots$ è il limite della successione $\left(1 + \dfrac{1}{n}\right)^{n}$, richiamata nel capitolo sulle serie; il primo limite estende questo fatto dalla variabile intera $n$ alla variabile reale $x$ e si *assume*. Con la sostituzione $x = \dfrac{1}{u}$ diventa $\lim_{u \to 0} (1 + u)^{\frac{1}{u}} = e$, la forma che si usa per le forme $1^{\infty}$.
>
> […] Per le proprietà del logaritmo $\dfrac{\ln(1 + x)}{x} = \ln\left((1 + x)^{\frac{1}{x}}\right)$; per $x \to 0$ l'argomento tende a $e$ e, per la **continuità del logaritmo**, l'espressione tende a $\ln e = 1$.

Figura: $y = \left(1 + \dfrac{1}{x}\right)^x$ che si avvicina alla retta $y = e$. In fondo al blocco: il secondo e il terzo limite danno le derivate di $\ln x$ e $e^x$.

**7. `#definizione-asintoti`, da dove vengono $m$ e $q$** (aggiunto)
> Le formule di $m$ e $q$ vengono dalla richiesta che la distanza verticale $f(x) - (mx + q)$ tra grafico e retta tenda a $0$. Dividendo questa differenza per $x$ si ottiene $\dfrac{f(x)}{x} - m - \dfrac{q}{x} \to 0$, quindi $\dfrac{f(x)}{x} \to m$; trovato $m$, resta $f(x) - mx \to q$.

**8. Teoremi sulle funzioni continue: idea prima dell'enunciato (con tre figure nuove)**
Prima (sotto il titolo):
> Valgono per $f$ continua su un intervallo chiuso e limitato $[a, b]$; senza una delle due ipotesi le conclusioni *possono* non valere, come mostrano gli esempi.

Adesso:
> I tre teoremi seguenti garantiscono che un punto *esiste* (uno zero, un massimo, un punto in cui si assume un valore dato) senza dire come trovarlo. Valgono per $f$ continua su un intervallo chiuso e limitato $[a, b]$, e senza una delle due ipotesi le conclusioni *possono* non valere. Nel capitolo sul calcolo differenziale tornano nei teoremi di Rolle e di Lagrange e nella ricerca dei massimi e minimi assoluti.

e in testa ai blocchi: "Il grafico di una funzione continua su un intervallo si traccia senza staccare la penna: se parte sotto l'asse $x$ e arriva sopra, lo attraversa." (zeri); "Una funzione continua su un intervallo chiuso e limitato raggiunge un valore più alto e uno più basso di tutti gli altri, eventualmente negli estremi." (Weierstrass, con figura di $x^3 - 3x$ su $[-1{,}8;\ 2{,}2]$: massimo in un estremo, minimo interno, e un terzo controesempio senza continuità); "Per passare da un valore a un altro, una funzione continua su un intervallo assume tutti i valori intermedi: ogni retta $y = k$ compresa tra minimo e massimo incontra il grafico." (valori intermedi, con figura dell'immagine $[m, M]$ sull'asse $y$ e della retta $y = 1$ che incontra il grafico tre volte).

**9. Dimostrazione del teorema degli zeri** (con figura dell'insieme $E$)
Prima: un paragrafo unico ("Se fosse $f(c) < 0$, per la permanenza del segno $f < 0$ in un intorno di $c$; poiché $f(b) > 0$ si ha $c < b$, e l'intorno conterrebbe punti di $E$ maggiori di $c$, contro la definizione di estremo superiore. Se fosse $f(c) > 0$, […]").
Adesso: frase sull'idea ("lo zero si costruisce come estremo superiore dell'insieme dei punti in cui $f$ è negativa"); la completezza nominata; la frase "Poiché $f$ è continua in $c$, se $f(c) \neq 0$ la permanenza del segno si applica con $L = f(c)$"; i due casi in elenco, ciascuno con la contraddizione scritta per esteso; la figura di $f(x) = (x - 1)(x - 2)(x - 3)$ su $[0, 4]$ con $E = [0, 1) \cup (2, 3)$ evidenziato e $c = \sup E = 3$.

**10. Scheda 4, esercizio 3**
Aggiunto in apertura della spiegazione:
> Sostituire $\tan x$ e $\sin x$ con $x$ darebbe al numeratore $x - x = 0$ e un risultato sbagliato, perché le funzioni asintotiche non si sostituiscono in una differenza; per questo la differenza si trasforma prima in un prodotto.

Altre schede, stesso criterio: scheda 1 (Ruffini e il fattore comune, la definizione di limite che esclude $x_0$, la continuità dei polinomi nominata), scheda 6 (perché $t = \dfrac{x - 1}{2}$, la continuità di $u^v = e^{v \ln u}$, la condizione $u \neq 0$), scheda 7 (perché raccogliere subito dà $\infty \cdot 0$), scheda 8 (la divisione $\dfrac{x^2 - 3x}{x - 2} = x - 1 - \dfrac{2}{x - 2}$ fa prevedere l'asintoto obliquo).

## Collegamenti aggiunti

Apertura:
> :::percorso
> Si usano gli intervalli e il valore assoluto letto come distanza (Precorso e capitolo sugli insiemi), l'estremo superiore con la completezza di $\mathbb{R}$ e i grafici delle funzioni elementari. Qui si rende precisa l'idea che $f(x)$ si avvicina a un valore quando $x$ si avvicina a un punto, si ricavano le regole per calcolare i limiti, comprese le forme indeterminate, e si definisce la continuità. Nel capitolo sul calcolo differenziale la derivata è il limite del rapporto incrementale: i limiti notevoli danno le derivate di $\sin x$, $e^x$ e $\ln x$, e i teoremi sulle funzioni continue tornano nei teoremi di Rolle e di Lagrange. Asintoti e limiti agli estremi del dominio sono un passo dello studio di funzione; integrali impropri e serie sono definiti come limiti.
> :::

Ponti sotto i titoli: Intorni; Primi teoremi sui limiti; Operazioni con i limiti; Limiti notevoli; Infinitesimi (linguaggio di Taylor e dei criteri di confronto per integrali impropri e serie); Asintoti; Funzioni continue; Teoremi sulle funzioni continue (Rolle, Lagrange, massimi e minimi assoluti).

Rimandi nei blocchi:
- `#limite-finito` → caratterizzazione dell'estremo superiore (insiemi).
- `#forme-indeterminate` → rapporto incrementale come forma $\dfrac{0}{0}$ (calcolo differenziale).
- `#limite-notevole-seno` → derivata di $\sin x$; `#limiti-notevoli-esponenziale` → derivate di $\ln x$ ed $e^x$; numero $e$ → successioni nel capitolo sulle serie.
- `#gerarchia-degli-infiniti` → dimostrazione con de l'Hôpital.
- `#funzione-continua` → continuità necessaria per la derivabilità.
- Unicità del limite → disuguaglianza triangolare (Precorso, valore assoluto).
- Schede: Ruffini (Precorso), continuità delle funzioni elementari, teorema sui limiti di somma prodotto e quoziente, limite della funzione composta, limite notevole $(1 + x)^\alpha$, nominati la prima volta che servono.

## Da decidere

1. **Lunghezza**: la teoria cresce del 45% (senza contare le righe delle figure), sopra l'indicazione del 20-40%. Le aggiunte che pesano di più sono le cinque figure, la dimostrazione del teorema degli zeri in due casi e il nuovo esempio sulla forma $1^\infty$. Se il tono va bene ma la dose è troppa, i primi tagli candidati sono: il rimando alla caratterizzazione del sup nella definizione di limite, il terzo controesempio di Weierstrass, la lettura in parole del limite di funzione composta.
2. **Mappa**: il rimando dalla definizione di limite alla caratterizzazione del sup con $\varepsilon$ (stessa struttura "per ogni $\varepsilon$ esiste") è vero ma non compare in `revisioni/percorso/analisi-1.md`; proposta di aggiungerlo tra i "Prepara" di insiemi. Non l'ho fatto perché il file è condiviso.
3. **Punto interno**: il capitolo sulle derivate definisce la derivata in un "punto interno" ad $A$, nozione che non compare né in insiemi né qui. Si potrebbe aggiungere una riga nel blocco `#intorno` ("$x_0$ è interno ad $A$ se un intorno di $x_0$ è contenuto in $A$").
4. **Schede mancanti**: nessuna scheda svolta lavora sulla verifica di un limite con la definizione né sul teorema degli zeri (che compare solo nella traccia 13). Una scheda "Esistenza di soluzioni con il teorema degli zeri" sarebbe utile all'esame; non l'ho aggiunta perché il numero delle schede è fisso.
5. **Campo `teoria` delle schede**: diverse schede usano ora per nome risultati non elencati nel frontmatter (scheda 1: `continuita-funzioni-elementari`; schede 4 e 6: `limite-funzione-composta`; scheda 3: `algebra-dei-limiti`). Aggiungerli migliorerebbe i collegamenti dalla scheda alla teoria.
6. **Posizione dei `:::richiamo`**: nel file stanno dopo il teorema che li usa (per esempio "Permanenza del segno" dopo la dimostrazione degli zeri). Se l'aside non si vede accanto alla dimostrazione, conviene spostarli prima del teorema.
