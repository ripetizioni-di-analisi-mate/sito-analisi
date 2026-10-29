# Scrivere un argomento della materia "Algebra lineare e geometria analitica"

Repository: /home/claude/sito-analisi1 (sito Astro di teoria ed esercizi di matematica universitaria, in italiano).
Non usare git, non lanciare la build, non toccare file fuori dalle tre cartelle del tuo argomento (elencate sotto).

## Prima di scrivere (obbligatorio)
1. Leggi per intero `GUIDA-CONTENUTI.md` nella radice del repository: è la norma di stile e di formato. Seguila alla lettera.
2. Leggi i modelli: `src/content/teoria/analisi-2/massimi-e-minimi.md`, due schede in `src/content/svolti/analisi-2/massimi-e-minimi/` (per esempio 1.md e 4.md) e due tracce in `src/content/dafare/analisi-2/massimi-e-minimi/`. Imita struttura, densità e tono.

## Cosa produrre (materia = `algebra-lineare`, argomento = il tuo slug)
- `src/content/teoria/algebra-lineare/<slug>.md`: frontmatter `titolo` (il titolo dell'argomento indicato sotto) e `sommario` (una frase). Da 6 a 10 sezioni `##`, circa 2500–3500 parole. Dimostrazioni dei teoremi centrali dell'esame (dentro `:::dimostrazione` annidato nel `::::teorema`).
- `src/content/svolti/algebra-lineare/<slug>/1.md … 7.md`: 7 schede per tipologia (titolo al plurale), ciascuna con 2–4 esercizi `## Esercizio k` in difficoltà crescente, calcolo in display e `<div class="spiegazione">` sotto ogni esercizio. `gratis: true` per 1, 2, 3; `gratis: false` per 4–7. Le schede 1–3 sono l'anteprima gratuita: devono essere tipologie di base, rappresentative e invoglianti.
- `src/content/dafare/algebra-lineare/<slug>/1.md … 13.md`: 13 tracce, ciascuna con `:::soluzione … :::` contenente il solo risultato finale.
- Il campo `teoria:` di svolti e tracce cita SOLO ancore (`#id`) che esistono davvero nel tuo file di teoria.

## Notazioni comuni a tutta la materia (usale identiche)
- Insiemi numerici $\mathbb{R}$, $\mathbb{R}^n$; vettori di $\mathbb{R}^n$ in colonna quando servono nei calcoli matriciali, scritti in riga come $(1, 2, 3)$ nel testo; vettori geometrici $\vec{v}$; componenti $v_1, v_2, v_3$.
- Matrici con lettere maiuscole, insieme $M_{m,n}(\mathbb{R})$ e $M_n(\mathbb{R})$; parentesi tonde `\begin{pmatrix}`; determinante $\det A$ oppure `\begin{vmatrix}`; trasposta $A^T$; identità $I_n$; inversa $A^{-1}$; rango $\operatorname{rk} A$; traccia $\operatorname{tr} A$.
- Riduzione a scala con le operazioni scritte sulla freccia: `\xrightarrow{R_2 \to R_2 - 2R_1}`; matrice completa `\left(\begin{array}{ccc|c} … \end{array}\right)`.
- Applicazioni lineari $f : V \to W$, nucleo $\ker f$, immagine $\operatorname{Im} f$, matrice associata $M^{\mathcal{B}}_{\mathcal{C}}(f)$, sottospazio generato $\langle v_1, \dots, v_k \rangle$, dimensione $\dim V$.
- Polinomio caratteristico $p_A(\lambda) = \det(A - \lambda I)$, autospazio $V_\lambda$, molteplicità algebrica $m_a(\lambda)$ e geometrica $m_g(\lambda)$.
- Prodotto scalare $\langle u, v \rangle$ (in $\mathbb{R}^n$ standard anche $u \cdot v$), norma $\|v\|$, prodotto vettoriale $\vec{u} \times \vec{v}$.
- KaTeX: niente pacchetti esterni; ammessi `pmatrix`, `vmatrix`, `array`, `cases`, `aligned`, `\xrightarrow`, `\operatorname`. La direttiva `::grafico` disegna solo grafici di funzioni $y = f(x)$: usala solo dove serve davvero (per le coniche non si presta).
- Rimandi ad altri argomenti della materia con il loro nome ("si rimanda all'argomento sui determinanti"), mai alla struttura della pagina.

## Programma dei 10 argomenti (ordine di studio; rispetta i confini, non ripetere ciò che appartiene ad altri argomenti se non con un richiamo breve)
1. `vettori` — "Vettori nel piano e nello spazio": vettori geometrici, somma e prodotto per scalare, componenti, modulo, versore, prodotto scalare e angolo, ortogonalità, proiezione, prodotto vettoriale (area del parallelogramma), prodotto misto (volume, complanarità), parallelismo.
2. `matrici` — "Matrici e operazioni tra matrici": definizioni, matrici quadrate, diagonali, triangolari, simmetriche, somma e prodotto per scalare, prodotto righe per colonne e sue proprietà (non commutatività, divisori dello zero), trasposta, potenze, matrice inversa (definizione e unicità; il calcolo con i determinanti è nell'argomento successivo), riduzione a scala per righe e matrici a scala, calcolo dell'inversa con Gauss-Jordan.
3. `determinanti` — "Determinante e matrice inversa": determinante di ordine 2 e 3 (Sarrus), sviluppo di Laplace, proprietà (operazioni elementari, righe proporzionali, triangolari), teorema di Binet, invertibilità e determinante, inversa con la matrice dei complementi algebrici, determinanti con parametro.
4. `sistemi-lineari` — "Sistemi lineari e rango": scrittura matriciale, rango (minori e riduzione a scala, teorema degli orlati), teorema di Rouché-Capelli, numero di parametri liberi $n - \operatorname{rk} A$, metodo di Gauss, regola di Cramer, sistemi omogenei, struttura delle soluzioni (soluzione particolare più nucleo), sistemi con parametro (discussione completa).
5. `spazi-vettoriali` — "Spazi vettoriali, basi e dimensione": definizione ed esempi ($\mathbb{R}^n$, matrici, polinomi $\mathbb{R}_n[x]$), sottospazi e criterio, combinazioni lineari e sottospazio generato, dipendenza e indipendenza lineare, basi, dimensione, coordinate, completamento ed estrazione di basi, somma e intersezione di sottospazi, formula di Grassmann, somma diretta, sottospazi in forma cartesiana e parametrica.
6. `applicazioni-lineari` — "Applicazioni lineari": definizione, matrice associata rispetto a basi, nucleo e immagine, iniettività e suriettività, teorema della dimensione (nullità più rango), isomorfismi, composizione e prodotto di matrici, cambiamento di base e matrici simili, applicazioni lineari definite sui vettori di una base, applicazioni con parametro.
7. `autovalori` — "Autovalori, autovettori e diagonalizzazione": autovalori e autovettori di un endomorfismo e di una matrice, polinomio caratteristico, autospazi, molteplicità algebrica e geometrica e loro relazione, autovettori di autovalori distinti sono indipendenti, criterio di diagonalizzabilità, matrice diagonalizzante $P$ con $P^{-1} A P = D$, potenze di matrici diagonalizzabili, matrici con parametro.
8. `prodotto-scalare` — "Prodotto scalare, ortogonalità e teorema spettrale": prodotto scalare standard in $\mathbb{R}^n$ e proprietà, norma, disuguaglianza di Cauchy-Schwarz, ortogonalità, basi ortonormali, proiezione ortogonale, procedimento di Gram-Schmidt, complemento ortogonale, matrici ortogonali, teorema spettrale reale (matrici simmetriche diagonalizzabili con base ortonormale), diagonalizzazione ortogonale.
9. `rette-e-piani` — "Rette e piani nello spazio": equazione cartesiana del piano e vettore normale, equazioni parametriche e cartesiane della retta, vettore direttore, passaggio tra le forme, posizioni reciproche (retta-retta, inclusi sghembe; retta-piano; piano-piano), angoli, distanze (punto-piano, punto-retta, rette sghembe), proiezioni e simmetrici, fasci di piani, retta di minima distanza.
10. `coniche-e-quadriche` — "Coniche e quadriche": coniche come luoghi e in forma canonica (ellisse, iperbole, parabola) solo come richiamo breve, matrice associata a una conica, invarianti e classificazione (degenere o no, $\det$ della matrice $3 \times 3$ e del blocco $2 \times 2$), riduzione a forma canonica con rotazione e traslazione (uso degli autovalori), centro e assi; quadriche: matrice associata, classificazione delle quadriche non degeneri in forma canonica (ellissoide, iperboloidi, paraboloidi) e dei coni e cilindri, riconoscimento.

## Novità di stile (obbligatorie)
- **Grassetto e corsivo**: segui la sezione "Grassetto e corsivo" di GUIDA-CONTENUTI.md (grassetto per il termine definito, il teorema o metodo applicato e la conclusione a parole, max 2–3 per blocco; corsivo per l'accento logico; mai dentro o attorno alle formule).
- **Titoli dei blocchi**: il sito numera da solo i blocchi definizione/teorema/proposizione quando in una sezione ce n'è più di uno, e nasconde il titolo di un blocco uguale al titolo della sezione: non scrivere numeri nei titoli, e se una sezione contiene un solo concetto puoi dare al blocco lo stesso titolo della sezione.
- **Figure**: leggi istruzioni-agenti/brief-figure.md (sezioni "Strumenti disponibili" e "Controllo obbligatorio") e inserisci le figure dove aiutano davvero: vettori nel piano con `vettori=` e `uguale=1`, rette e coniche con `curve=` e `uguale=1`, interpretazione geometrica dei sistemi 2×2 (rette che si incontrano, parallele, coincidenti), autovettori come direzioni invarianti, proiezioni ortogonali, spazi generati (rette per l'origine), immagine di un quadrato tramite un'applicazione lineare. Didascalie con formule fra dollari e frazioni sempre in colonna (`$\dfrac{a}{b}$`). Per lo spazio tridimensionale disegna sezioni o proiezioni piane. Usa come nome del PNG il tuo slug.
- Non usare mai "la parentesi" per indicare un'espressione; nominala.

## Qualità matematica (l'errore più grave è un risultato sbagliato)
- Scegli i numeri degli esercizi in modo che i conti tornino puliti (autovalori interi, determinanti piccoli, radici esatte).
- Ricalcola OGNI esercizio da capo, comprese le soluzioni delle tracce, prima di scriverlo. Per i calcoli matriciali puoi verificarli con Python (`python3 -c`, eventualmente `pip install --break-system-packages sympy`) eseguito da una cartella diversa dal repository: fallo per ogni determinante, inversa, rango, autovalore, base, distanza e forma canonica.
- Ipotesi sempre esplicite negli enunciati.

## Consegna
Alla fine elenca i file creati con il numero di parole della teoria, e conferma: (a) tutte le ancore citate nei campi `teoria:` esistono nel file di teoria; (b) ogni risultato è stato verificato con un calcolo indipendente (di' con cosa). Rapporto breve, in italiano.
