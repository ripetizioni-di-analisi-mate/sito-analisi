# Fisica 3° anno · Lavoro, energia e potenza: revisione di chiarezza

**Parole**: italiano 2647 → 4447 (×1,68); inglese 2638 → 4564 (×1,73). Controllo `controlla_capitolo.py`: a posto, senza errori né avvisi.

## Che cosa è cambiato
1. **Termini definiti alla prima comparsa**: punto di applicazione, modulo, $\Delta$ e $\theta$ (come si leggono), prodotto scalare, componente, scalare, joule, risultante, normale, punto materiale, riferimento inerziale, velocità scalare, configurazione, energia potenziale, gravità uniforme, costante elastica, lunghezza naturale, potenziale totale, energia meccanica, forze non conservative, attrito dinamico e $\mu_d$, energia interna, guida circolare interna, potenza, watt, kilowattora, rendimento $\eta$, regime stazionario, ordinata/ascissa, impulso, SI, pedici $i$, $f$ e «net».
2. **Casi del segno del lavoro in elenco** (acuto, ottuso, retto) con il motivo (il segno del coseno).
3. **Passaggi di calcolo mancanti**: lavoro della trazione $36-(-24)=60\,\mathrm J$; aree dei triangoli con la frazione in colonna (l'originale aveva $2\cdot6/2$ in linea); valori di $U$ a 5 e 25 cm e del minimo; completamento del quadrato nella molla verticale; sostituzione $v^2=gR$ nella guida circolare; $v^2=K$ per il carrello da 2 kg; conversione del kWh.
4. **Motivi dei «quindi»**: perché il lavoro accumulato è massimo dove $F_x=0$; perché a metà frenata resta metà energia ($-F\cdot6$ è metà di $-F\cdot12=-K_i$); perché in cima alla guida la normale è minima; perché la distanza di arresto va con $v^2$; da dove viene $P=\vec F\cdot\vec v$; come si ottiene la seconda uguaglianza del bilancio.
5. **Dimostrazione del teorema dell'energia cinetica** con passi brevi e il secondo principio nominato.
6. **Due situazioni nel blocco del contorno del sistema** in elenco (solo pattino / pattino e pista).

## Com'era / Com'è ora (guida circolare, dove lo studente si perde)
**Com'era**: «Al limite del distacco la normale vale zero, quindi $\dfrac{v^2}{R}=g$. Il bilancio energetico dalla partenza alla sommità dà $gH=2gR+\dfrac{v^2}{2}$, da cui $H_{\rm min}=\dfrac{5R}{2}$.»

**Com'è ora**: «In un moto circolare la risultante verso il centro è uguale alla massa per l'accelerazione centripeta $\dfrac{v^2}{R}$, quindi in cima $N+mg=\dfrac{mv^2}{R}$. Al limite del distacco la normale vale zero, quindi $\dfrac{v^2}{R}=g$, cioè $v^2=gR$. Il bilancio energetico dalla partenza alla sommità, diviso per la massa, dà $gH=2gR+\dfrac{v^2}{2}$. Sostituendo $v^2=gR$ si ottiene $gH=2gR+\dfrac{gR}{2}=\dfrac{5gR}{2}$, da cui $H_{\rm min}=\dfrac{5R}{2}$.»

## Errori trovati nell'originale
Nessun errore numerico: tutti i numeri degli esempi sono stati ricalcolati e sono giusti. Corretta solo la frazione in linea $2\cdot6/2$ (ora in colonna).

## Termini e procedimenti degli esercizi aggiunti in teoria
- Lavoro con le componenti, $W=F_x\Delta x+F_y\Delta y$ (traccia 9, domanda 19) → `#lavoro`.
- Area di un trapezio nel grafico forza-posizione (domande 21, 53) → `#lavoro-variabile`.
- Conversione km/h → m/s e $v^2=v_x^2+v_y^2$ (scheda 2, domande 25, 26) → `#energia-cinetica`.
- Velocità in un riferimento in moto, $\vec v-\vec u$ (scheda 2 es. 3, traccia 10, domande 27, 34) → `#energia-cinetica`.
- Dislivello su una rampa $h=s\sin\alpha$ e quota negativa sotto lo zero (scheda 4) → `#potenziale`.
- $v_f^2=v_i^2+2gh$ con velocità iniziale (scheda 6) e normale di una guida fissa che non compie lavoro (domanda 69) → `#bilancio-energia`.
- Normale ridotta $N=mg-F_y$ (scheda 7 es. 2, domanda 17) e attrito su andata e ritorno (domanda 78) → `#bilancio-energia`.
- Aumento di energia interna con lavoro esterno (domanda 71) → `#contorno-sistema`.
- Rendimenti in cascata come prodotto (domanda 82) → `#potenza`.
Gli esempi nuovi usano numeri diversi da quelli di schede, tracce e domande.

## Dubbi e note
- Esercizi e domande: nessun errore trovato (ricalcolate, fra le altre, le tracce 9, 11, 13 e le domande 34, 44, 46, 55, 63, 64, 71, 73, 77, 83). Nelle spiegazioni delle schede 1, 4, 5 e 8 alcuni paragrafi ripetono il conto già fatto con parole diverse (non toccati).
- Raggio terrestre scritto «circa 6400 km» (valore medio 6371 km).
