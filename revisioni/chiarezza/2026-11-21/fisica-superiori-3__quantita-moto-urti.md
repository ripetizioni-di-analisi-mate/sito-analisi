# Revisione di chiarezza · Fisica 3° anno · Quantità di moto e urti

**Parole**: italiano 2657 → 4505 (×1,70); inglese 2505 → 4506 (×1,80). Controllo: «ESITO: a posto», nessun AVVISO.

## Che cosa è cambiato
1. **Termini definiti alla prima comparsa**: riferimento inerziale, vettore e modulo, componente con segno, Σ (sigma) e indice $j$, energia cinetica $K=\frac12mv^2$ e scalare, sistema chiuso, rapidità, impulso ($\vec J=\vec F\Delta t$, prima mai definito: il teorema lo dava per noto), Δ («delta»), risultante, area con segno, forza media, picco, forze interne ed esterne, terzo principio, sistema isolato, normale, urto, media pesata, riferimento del centro di massa, sbarra uniforme, carico puntiforme, velocità relativa, rinculo, urto elastico, prodotto scalare e θ («teta»), ms e mN·s.
2. **Passaggi di calcolo esplicitati**: componenti delle due sfere e Pitagora; $\Delta\vec p$ della biglia componente per componente; dimostrazione dell'impulso con $\vec a=\frac{\vec v_f-\vec v_i}{\Delta t}$ e il secondo principio; $1\,\mathrm{N\cdot s}=1\,\mathrm{kg\cdot m/s}$; le tre aree del sensore come triangoli; impulso del peso $-0{,}20\cdot10\cdot0{,}020$; percentuale 0,67% e soglia di 15 ms; centro di massa $\frac{24}{8}$ e dopo il cambio d'origine; equazione della pedana ($100d+120=0$) e controllo 48/−48; urto elastico con la differenza di quadrati e la sostituzione $v_2=u_1+v_1$; decomposizione dell'energia con il calcolo di $u_1-V$ e del fattore $\frac{m_1m_2}{2M}$; quadrato di $\vec v_1+\vec v_2$ come prodotto scalare.
3. **Motivi dei «quindi»**: perché due osservatori misurano la stessa variazione ($\vec P'=\vec P-M\vec u$), perché gli impulsi interni si cancellano (terzo principio, equazione per ogni corpo), perché il centro di massa si muove con $\vec P/M$, perché si può dividere nell'urto elastico ($u_1-v_1\neq0$), perché i termini misti si annullano.
4. **Imperativi e prima persona tolti** («raggruppa», «inserisci», «sviluppa», «approssimiamo»); frasi da laboratorio riscritte («pesi statistici della media», «valore pertinente a…», «fatto utile per…»).
5. **Casi in elenco**: le due sfere, le tre aree, forze interne/esterne, i due modi di scegliere il sistema con la parete, i casi $m_1=m_2$ e $m_1<m_2$.
6. Numeri degli esempi, titoli `##`, ancore, titoli dei blocchi e righe delle figure invariati; brevi frasi che dicono che cosa mostra la figura dove l'etichetta non bastava.

## Com'era / Com'è ora
Blocco `#centro-massa`, punto in cui lo studente si perdeva (formula della velocità del centro di massa senza passaggi, «pesi statistici»).

**Com'era**: «Le masse sono i pesi statistici della media. […] Calcolando la variazione della posizione del centro di massa fra due istanti si trova $\vec v_{CM}=\dfrac{\sum_jm_j\vec v_j}{M}=\dfrac{\vec P}{M}$. […] Nel suo riferimento la quantità di moto totale è zero, fatto utile per descrivere gli urti elastici.»

**Com'è ora**: «Una **media pesata** di alcuni valori si calcola moltiplicando ogni valore per il suo peso, sommando i prodotti e dividendo per la somma dei pesi. […] Fra due istanti ogni corpo si sposta di $\Delta\vec r_j$ e le masse non cambiano, quindi il centro di massa si sposta di $\Delta\vec r_{CM}=\dfrac{\sum_jm_j\Delta\vec r_j}{M}$. Dividendo per $\Delta t$ si ottiene la velocità del centro di massa […]. Il **riferimento del centro di massa** è il riferimento che si muove con velocità $\vec v_{CM}$. In esso ogni velocità diminuisce di $\vec v_{CM}$, quindi la quantità di moto totale vale $\vec P-M\vec v_{CM}=0$.»

## Errori nell'originale
Nessun numero sbagliato: tutti i conti della teoria ricalcolati in Python. Frasi imprecise corrette: «l'impulso del peso e quello della normale sono generalmente verticali» → «sono verticali» (su binario orizzontale lo sono sempre); nell'esempio dell'aggancio «$3\cdot4-2\cdot1=10$ in kg·m/s» scritto con le unità corrette; frazioni in linea ($(2\cdot0+6\cdot4)/8$, $m_2(u_1-u_2)/M$) portate in colonna.

## Aggiunto per la copertura di schede, esercizi e domande
- Velocità vista da un osservatore in moto, $\vec v\,'=\vec v-\vec u$ (scheda 1 es. 3, domande 17 e 66): esempio 10 − 4 = 6 m/s (`#quantita-moto`).
- $K=\dfrac{p^2}{2m}$ (domanda 41, scheda 5 es. 1, scheda 8 es. 3) (`#anelastico`).
- Velocità finale nell'urto elastico come $v=2V-u$ (scheda 7 es. 3) (esempio nel riferimento del centro di massa).
- Velocità relativa + quantità di moto come sistema quando entrambi i corpi si muovono (domanda 53) (`#elastico`).
- Perdita che quadruplica raddoppiando la velocità relativa (domanda 61); conteggio di incognite ed equazioni nel piano (domanda 85) (`#anelastico` osservazione, `#elastico`).
- Prodotto scalare (domanda 56, osservazione finale); sbarra uniforme più carico con un caso numerico (domanda 46).

## Errori o difetti notati negli esercizi e nelle domande (non corretti)
- Nessun errore numerico in schede, esercizi da fare e domande (ricalcolati).
- Domanda 25, spiegazione: «lo stesso rettangolo di area pari alla massa di quantità di moto trasferita» è una frase senza senso (forse «alla quantità di moto trasferita»).
- Domanda 86: «Il miglior controllo è tornare alla forma fattorizzata» non risponde alla domanda in modo diretto.
- Domande 8, 58, 59: pedice inglese $E_{\mathrm{loss}}$ (la teoria usa $\Delta K_{\mathrm{persa}}$); domanda 41: frazione in linea $p^2/(2m)$.
- Scheda 7 e domande 13, 23: «unità SI» senza la sigla per esteso.
- Schede svolte con imperativi in seconda persona («Scegli», «Porta», «Usa», «Calcola», «Verifica»), contrari allo stile del sito.

## Dubbi
Nessuno sui contenuti. Il capitolo è al limite di lunghezza (×1,70 in italiano, ×1,80 in inglese).
