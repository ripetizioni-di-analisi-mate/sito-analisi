# Revisione di chiarezza · Fisica 2° anno · Lavoro, energia e potenza

**Parole**: italiano 2635 → 4468 (×1,70); inglese 2586 → 4641 (×1,79). Controllo: «ESITO: a posto», nessun AVVISO.

## Che cosa è cambiato
1. **Definizioni alla prima comparsa**: vettore, modulo, θ («teta»), componente parallela, joule e newton, scalare, risultante, punto materiale, rapidità, Δ («delta»), quota zero, dislivello, forza tangenziale, normale, lunghezza naturale, deformazione, costante elastica (N/m), regime lineare, molla ideale, «lentamente», energia meccanica, vincolo fermo, liscio/ruvido, energia interna, watt (con l'avviso W dritto = watt, W corsivo = lavoro), kilowatt, η («eta»), energia utile, pedice «oth» (dall'inglese *other*), «i» = ingresso.
2. **Segno del lavoro** a elenco: angolo minore di 90°, maggiore di 90° (con il caso 180°, −40 J), 90°.
3. **Passaggi di calcolo esplicitati**: tutte le energie cinetiche ($\frac12\cdot2\cdot6^2$…), le quote con segno ($3\cdot10\cdot(-1)$), le forze elastiche ($-250\cdot(-0{,}12)$), le rapidità da $v^2=\frac{2K}{m}$, $x^2=0{,}36$, $v^2=2gh$ dividendo per $m$; nella dimostrazione del teorema dell'energia cinetica il passo $a\Delta x=\frac{v_f^2-v_i^2}{2}$ e il nome del secondo principio.
4. **Motivo dei «quindi»**: perché $W_g=-mg(h_f-h_i)$ (peso verticale verso il basso), perché la normale ha lavoro nullo, perché la pendenza del grafico di $K$ è la forza (4 N e −3 N calcolati), perché il rapporto delle potenze dà il rendimento.
5. **Conservazione**: dimostrazione scritta a passi ($W_{\mathrm{tot}}=-\Delta U_g-\Delta U_e$, poi $\Delta K+\Delta U_g+\Delta U_e=0$).
6. **Esempi**: stessi numeri dell'originale, divisi in righe di elenco dove c'erano più tratti o più casi; nell'esempio delle due guide spiegato perché sono lunghe 5 m (Pitagora) e 7 m (3 m + 4 m), come mostra la figura.
7. Frasi da laboratorio o prescrittive riscritte («nell'istante in cui si osservano», «occorre dichiarare quali forze…», «il bilancio va controllato…», «va applicata… prima di sottrarre»).

## Com'era / Com'è ora
Punto in cui lo studente si perdeva (blocco `#energia-attrito`).

**Com'era**: «Se forze ulteriori compiono lavoro $W_{\mathrm{oth}}$, allora $\Delta E_m=W_{\mathrm{oth}}$. […] Occorre dichiarare quali forze sono già rappresentate dalle energie potenziali per evitare di contarle due volte.»

**Com'è ora**: «Si indica con $W_{\mathrm{oth}}$ il lavoro delle **altre forze**, cioè di tutte le forze che compiono lavoro tranne il peso e la forza elastica (il pedice oth viene dall'inglese *other*, «altre»). Il lavoro totale è $W_g+W_e+W_{\mathrm{oth}}$, e lo stesso ragionamento della conservazione dà $\Delta E_m=W_{\mathrm{oth}}$. […] Il lavoro del peso è già contenuto in $\Delta U_g$ e quello della molla in $\Delta U_e$, perciò questi due lavori non entrano in $W_{\mathrm{oth}}$. Aggiungerli anche lì significherebbe contarli due volte.»

## Errori nell'originale
Nessun numero sbagliato: tutti i conti della teoria ricalcolati in Python.

## Aggiunto per la copertura di schede, esercizi e domande
- Lavoro di una forza costante su un arco (domanda 20): esempio da 12 N e 3 m → 36 J (`#lavoro`).
- Forza che cresce linearmente da un valore non nullo: trapezio e forza media, 4 → 10 N su 3 m = 21 J (domanda 22, `#area-lavoro`).
- Energia proporzionale a $k$, quadruplica se la deformazione raddoppia (domande 69, 72, `#elastica`).
- Bilancio con molla, mano e attrito (dafare 14, domanda 14): 4 + 7 − 2 = 9 J (`#energia-attrito`).
- Potenza nulla di una forza perpendicolare alla velocità (domanda 82).
- kilowatt (domanda 53); rendimento fra 0 e 1 (domanda 84); rendimento di due dispositivi in serie = prodotto (scheda 8 es. 3, domanda 83) (`#potenza`, `#rendimento`).

## Errori o difetti notati negli esercizi e nelle domande (non corretti)
- Domanda 15: la risposta errata «−13 J» non corrisponde a nessun errore plausibile (debole come distrattore).
- Domanda 13: la spiegazione usa «unità SI» senza dirlo per esteso (la teoria ora dice in che unità si ottiene il joule, ma non nomina la sigla SI).
- Domanda 73 cita il «prodotto scalare», termine non presente nella teoria di 2° anno.
- Nessun errore numerico trovato nelle schede svolte, negli esercizi da fare e nelle domande lette.

## Dubbi
Nessuno sui contenuti. Il capitolo è al limite di lunghezza (×1,70 in italiano).
