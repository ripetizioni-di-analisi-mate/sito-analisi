# Revisione di chiarezza · Fisica 1° anno · Vettori

**Controllo** (`python3 strumenti/controlla_capitolo.py fisica-superiori-1 vettori`): nessun ERRORE. Un solo AVVISO sulle «sigle» AB, BC, CA, che sono nomi di segmenti e di frecce delle figure.

**Parole**: italiano 2596 → 4668 (×1,80); inglese 2552 → 4891 (×1,92). Il conteggio comprende i passaggi di calcolo aggiunti (ogni numero di una formula conta come parola). Siamo sopra l'intervallo atteso (1,2-1,7) e sotto la soglia dell'avviso (2,0): l'aumento viene da definizioni e conti, non da esempi nuovi.

Invariati: frontmatter, titoli `##`, ancore e titoli dei blocchi con ancora, le 12 righe delle figure, i 23 blocchi e i loro titoli, tutti i dati numerici degli esempi. Nessun blocco aggiunto o tolto.

## Che cosa è cambiato

1. **Termini definiti alla prima comparsa**: grandezza, unità di misura, metro (m), newton (N), centimetro (cm), spostamento, vettore, coda e punta della freccia, scalare, parallele, concordi, discordi, forza, punto di applicazione, angolo retto, cateti, ipotenusa, radice quadrata, assi cartesiani, origine, ascissa, ordinata, proiezione, incremento, quota, opposto, risultante, parallelogramma, valore assoluto, adimensionale, perpendicolari, circonferenza, collineari, quadranti, equilibrio, corpo esteso, vincolo, tensione.
2. **Simboli letti a parole**: $\vec u$, $u_x$, $(3;-2)\,\mathrm m$, $\overrightarrow{AB}$, $\lVert\vec u\rVert$, $\lvert k\rvert$, $\geq$.
3. **Prima i numeri, poi le lettere**: somma componente per componente (prima $(3;1)+(-1;3)=(2;4)$, che è la figura, poi la formula), modulo (prima $(6;8)\,\mathrm N \to 10\,\mathrm N$, poi $\sqrt{u_x^2+u_y^2}$), limiti della risultante (prima 7 N e 4 N, poi $\lvert a-b\rvert$ e $a+b$).
4. **Passaggi di calcolo scritti tutti**: Pitagora nel percorso chiuso ($36+64=100$), letture della telecamera ($6-5$, $6-3$, $3-1$), conversione da centimetri a metri con la frazione in colonna, $169-25=144$, modulo $\sqrt{64+36}$ dell'equilibrante, controllo $\vec R+\vec E=(0;0)$.
5. **Dimostrazioni** nello stesso blocco, a passi brevi; nella dimostrazione del modulo è detto perché compaiono i valori assoluti e perché si prende la radice positiva; nei limiti della risultante è nominata la proprietà usata (in un triangolo ogni lato è al massimo la somma degli altri due).
6. **Figure descritte nel testo**: per ciascuna il testo dice che cosa sono le frecce, i punti e i segmenti disegnati (proiezioni da B, retta di ascissa −5 e circonferenza di raggio 13, freccia E).
7. **Voce**: tolto il lessico da laboratorio («incompatibile con i dati», «convenzione di lettura», «il vincolo ipotizzato») e le frasi prescrittive («si legge prima la convenzione e poi si esegue la sottrazione»); forma impersonale ovunque (via «se vogliamo»). Le due condizioni di equilibrio dell'anello sono ora in sistema con la graffa.

## Com'era / Com'è ora (blocco «Un asse verticale orientato verso il basso»)

**Com'era**

> Una telecamera adotta gli stessi riferimenti orizzontali ma misura la coordinata verticale verso il basso a partire da uno zero fissato alla quota $6\,\mathrm m$. Le quote lette dalla telecamera sono quindi $1\,\mathrm m$ e $3\,\mathrm m$, e la sua componente verticale è $+2\,\mathrm m$.
>
> Lo zero della scala si cancella nella differenza. Invece il ribaltamento dell'asse inverte il segno, perché una diminuzione della quota verso l'alto diventa un aumento della coordinata verso il basso.

**Com'è ora**

> Una telecamera usa le stesse coordinate orizzontali e misura la coordinata verticale verso il basso, a partire da uno zero posto alla quota di $6\,\mathrm m$. La lettura della telecamera è quindi $6$ meno la quota. Per $A$ essa vale $6-5=1\,\mathrm m$ e per $B$ vale $6-3=3\,\mathrm m$. La componente verticale secondo la telecamera è $3-1=+2\,\mathrm m$.
>
> Nella differenza lo zero della scala si elimina, perché $(6-3)-(6-5)=5-3=2$. Il segno è invece opposto a quello di prima, perché una diminuzione della quota misurata verso l'alto è un aumento della coordinata misurata verso il basso.

Lo studente non aveva modo di ricavare da dove venissero 1 m e 3 m, né di vedere che cosa significa che lo zero «si cancella».

## Errori trovati nell'originale

Nessun errore numerico: tutti i conti sono stati rifatti e coincidono. Una sola imprecisione di notazione: $16\,\mathrm m^2$ scritto con l'esponente fuori da `\mathrm`, ora $16\,\mathrm{m^2}$ come nel resto del capitolo.

## Aggiunte per coprire gli esercizi

- **discordi** (usato in schede e domande, assente in teoria): definito nel blocco `#traslazione` accanto a «concordi».
- **quadrante** (7 occorrenze negli esercizi): definito nell'esempio sulle due misure candidate, dove l'originale lo usava senza spiegarlo.
- **risultante**: la teoria la usava da metà capitolo senza definirla; ora è definita nel blocco `#operazioni`.
- **radice semplificata** (le schede scrivono $2\sqrt{130}$): aggiunto il passaggio $\sqrt{136}=\sqrt{4\cdot34}=2\sqrt{34}\approx11{,}7$.
- **notazioni del modulo** usate negli esercizi ($\lvert\vec u\rvert$, la sola lettera $R$, $R_{min}$): richiamate nel blocco `#modulo`.
- vettore opposto $\overrightarrow{BA}$ e ritorno $(-2;-1)\,\mathrm{cm}$ scritti con i numeri (l'originale diceva solo «si cambiano entrambi i segni»).

## Dubbi rimasti

- Lunghezza ×1,80 in italiano: se va riportata entro 1,7, i tagli possibili senza perdere contenuto sono il secondo conto 6-8-10 nel blocco `#modulo` (ripete quello del percorso chiuso, ma è ciò che la figura mostra) e la frase sulla porta di casa e il cancello in `#traslazione`.
- «Ampiezza» per il valore senza segno di una componente è un termine dell'originale (in grassetto): l'ho tenuto e definito, anche se le schede usano più spesso «valore assoluto».
- Nell'inglese ho reso «concordi/discordi» con *same sense / opposite senses*, come nelle schede inglesi; «ascissa/ordinata» con *horizontal/vertical coordinate*, come nel file inglese esistente.
- In `#traslazione` il vettore nullo cita le componenti prima della loro definizione (era così nell'originale): ho aggiunto una riga che dice che cosa sono, senza spostare il contenuto in un altro blocco.
