# Scrivere un argomento della materia "Matematica generale" (corsi di Economia)

Repository: /home/claude/sito-analisi (sito Astro di teoria ed esercizi universitari, in italiano).
Non usare git, non lanciare la build, non toccare file fuori dalle tre cartelle del tuo argomento. Altri autori scrivono in parallelo gli altri argomenti della materia.

## Prima di scrivere (obbligatorio)
1. Leggi per intero `GUIDA-CONTENUTI.md` nella radice del repository: è la norma di stile e di formato. Seguila alla lettera, con due eccezioni decise da Carmine: **niente blocco `:::percorso`** e **niente prosa tra i blocchi** (sotto un titolo `##` viene subito il primo blocco).
2. Leggi le regole di voce: `/root/.claude/skills/synced/91e36f28-5687-4a5c-ba2a-91e5fd176dde_d4cbc623-8d44-4740-8b1e-b4778a1d8e85/scrittura-umana-carmine/SKILL.md`. Ogni frase deve superare il controllo finale di quella pagina (connettivi espliciti, niente due punti al posto di un connettivo, nessuna personificazione, niente frasi a effetto).
3. Leggi i modelli, che sono già approvati: la teoria `src/content/teoria/matematica-generale/funzioni.md`, le schede `src/content/svolti/matematica-generale/funzioni/1.md` e `6.md`, due tracce in `src/content/dafare/matematica-generale/funzioni/`; per densità e figure anche `src/content/teoria/algebra-lineare/vettori.md`. Imita struttura, densità, tono, uso di grassetto e corsivo e figure.
4. Leggi le teorie degli argomenti precedenti della materia che il tuo usa (elenco sotto), per non ripeterle e per citarle con il loro nome.
5. Leggi `istruzioni-agenti/brief-figure.md` (sezioni "Strumenti disponibili" e "Controllo obbligatorio").

## Cosa produrre (materia = `matematica-generale`, argomento = il tuo slug)
- `src/content/teoria/matematica-generale/<slug>.md`: frontmatter `titolo` (quello indicato sotto) e `sommario` (una frase). Da 6 a 10 sezioni `##`, circa 2500–3500 parole.
- `src/content/svolti/matematica-generale/<slug>/1.md … 8.md`: 8 schede per tipologia (titolo al plurale, per esempio "Integrali per parti"), ciascuna con 2–4 esercizi `## Esercizio k` in difficoltà crescente. `gratis: true` per 1, 2, 3; `gratis: false` per 4–8. Le schede 1–3 sono l'anteprima gratuita: tipologie di base e rappresentative.
- `src/content/dafare/matematica-generale/<slug>/1.md … 14.md`: 14 tracce, ciascuna con `:::soluzione … :::` contenente il solo risultato finale.
- Il campo `teoria:` di svolti e tracce cita SOLO ancore (`#id`) che esistono davvero nel tuo file di teoria.

## Blocchi
- Concetti: `:::definizione`. Risultati: `:::teorema` (anche criteri e proposizioni); i teoremi centrali dell'esame con `::::teorema` e `:::dimostrazione` annidata, per gli altri una riga che dice da dove seguono o dove si rimanda (per esempio all'argomento corrispondente di Analisi 1 o di Algebra lineare).
- Risultati di argomenti precedenti usati in una dimostrazione: `:::richiamo` con sole ipotesi e tesi.
- `:::esempio`, `:::osservazione`, `:::attenzione` (rare negazioni, con un controesempio).
- Dopo ogni definizione o teorema: a che cosa serve, con un piccolo esempio nel blocco stesso o in un esempio subito sotto.

## Peso della parte economica (richiesta esplicita di Carmine)
La materia è per Economia, ma la parte economica deve essere **presente e non invadente**.
- Nella teoria definizioni e teoremi hanno esempi **matematici**; le applicazioni economiche si concentrano in una o due sezioni `##` dedicate, verso la fine (per esempio "Applicazioni economiche"), più al massimo qualche frase di collegamento altrove.
- Nelle schede svolte al massimo 2–3 schede su 8 con contesto economico; nelle tracce circa 4 su 14.
- Eccezione: in `matematica-finanziaria` il contenuto è finanziario per sua natura.

## Struttura degli esercizi (svolti)
Traccia ("Calcolare…", "Studiare…", "Determinare…"); poi il calcolo in formule display, un passaggio per riga o per blocco, con `\begin{aligned}` per le catene lunghe; il risultato in fondo. Sotto, `<div class="spiegazione">` (righe vuote prima e dopo il contenuto) con la spiegazione a parole di ogni passaggio: premessa, connettivo, conclusione; quale teorema si applica e perché le sue ipotesi sono soddisfatte. Controllo finale a parole quando ha senso.

## Notazioni comuni a tutta la materia
- Funzioni di una variabile $f(x)$; derivate $f'(x)$, $f''(x)$; due variabili $f(x, y)$, derivate parziali $f_x$, $f_y$, $f_{xx}$, $f_{xy}$, gradiente $\nabla f$, hessiana $H(x, y)$.
- Economia: quantità $q$, prezzo $p$, costo $C(q)$, ricavo $R(q)$, profitto $\pi(q)$, costo medio $\bar{C}(q)$, elasticità $\varepsilon$, domanda $q_d$, offerta $q_s$.
- Finanza: capitale iniziale $C$ (dichiararlo), montante $M$, tasso annuo $i$, tempo $t$ in anni, rata $R$, valore attuale $V$; rendite con $a_{\overline{n}|i} = \dfrac{1 - (1 + i)^{-n}}{i}$ e $s_{\overline{n}|i} = \dfrac{(1 + i)^{n} - 1}{i}$.
- Matrici in grassetto maiuscolo non serve: $A$, $B$, determinante $\det A$, rango $\operatorname{rk} A$, trasposta $A^{T}$, inversa $A^{-1}$.
- Euro scritti a parole ("$200$ euro"); virgola decimale `{,}`; frazioni sempre in colonna (`\dfrac` nel testo), anche negli esponenti.
- KaTeX: niente pacchetti esterni; ammessi `cases`, `aligned`, `pmatrix`, `vmatrix`, `array`, `\overline`, `\operatorname`.
- Rimandi agli altri argomenti con il loro nome ("si rimanda all'argomento sulle derivate, le funzioni marginali e l'elasticità"), mai alla struttura della pagina.

## Programma (rispetta i confini; ciò che appartiene ad altri argomenti si richiama in breve)
Argomenti già scritti: 1 `funzioni` "Funzioni reali e modelli economici"; 2 `successioni-e-serie` "Successioni, progressioni e serie"; 3 `limiti-e-continuita` "Limiti e continuità"; 4 `derivate` "Derivate, funzioni marginali ed elasticità" (regole di derivazione, Fermat, Rolle, Lagrange, monotonia, de l'Hôpital, marginali, elasticità, approssimazione lineare).

5. `studio-di-funzione`: "Studio di funzione e ottimizzazione". Usa 1, 3, 4. Massimi e minimi relativi e assoluti, criterio della derivata prima e della derivata seconda, concavità e flessi, schema completo dello studio di funzione (dominio, simmetrie, segno, limiti e asintoti, derivata prima e monotonia, derivata seconda e concavità, grafico), massimi e minimi assoluti su un intervallo chiuso, problemi di ottimizzazione. Applicazioni economiche in una sezione: profitto massimo ($R' = C'$ e condizione del secondo ordine), costo medio minimo, ricavo massimo. Almeno tre schede con studi completi (razionale, esponenziale, logaritmica) con il grafico finale.
6. `integrali`: "Calcolo integrale e applicazioni economiche". Usa 4 e 3. Primitive e integrale indefinito, integrali immediati, integrazione per sostituzione e per parti, funzioni razionali con denominatore di primo o di secondo grado con radici reali, integrale definito (somme di Riemann, proprietà), teorema della media, funzione integrale e teorema fondamentale del calcolo (con dimostrazione), aree tra curve, integrali impropri semplici ($\int_1^{+\infty} x^{-a}\,dx$, $\int_0^{+\infty} e^{-kx}\,dx$). Applicazioni economiche in una sezione: costo totale dal costo marginale, surplus del consumatore e del produttore, valore medio, valore attuale di un flusso continuo.
7. `matematica-finanziaria`: "Capitalizzazione, rendite e ammortamenti". Usa 1 (esponenziali e logaritmi), 2 (progressioni e serie geometriche), 3 (teorema degli zeri). Interesse semplice e composto, montante e valore attuale, sconto, tassi equivalenti e tasso nominale convertibile $k$ volte, capitalizzazione continua e intensità istantanea, equivalenza finanziaria e scadenza media, rendite immediate posticipate e anticipate, differite, perpetue, ammortamento francese (rata costante, piano in tabella) e italiano (quota capitale costante), debito residuo, VAN e TIR (con il teorema degli zeri e la bisezione). Tabelle dei piani di ammortamento in Markdown.
8. `matrici-e-sistemi`: "Matrici, determinanti e sistemi lineari". Indipendente dagli argomenti di analisi. Matrici e operazioni (somma, prodotto per uno scalare, prodotto righe per colonne, trasposta), matrici quadrate (identità, diagonali, triangolari, simmetriche), determinante ($2 \times 2$, Sarrus, sviluppo di Laplace, proprietà, determinante del prodotto), matrice inversa (esistenza e formula con i complementi algebrici), rango (minori e riduzione a scala), sistemi lineari in forma matriciale, regola di Cramer, teorema di Rouché-Capelli, eliminazione di Gauss, sistemi con un parametro. Per la teoria più ampia si rimanda ad Algebra lineare. Applicazioni economiche in una sezione: equilibrio di mercato con due beni, modello input-output di Leontief.
9. `funzioni-di-due-variabili`: "Funzioni di due variabili". Usa 1, 3, 4, 8. Il piano $\mathbb{R}^2$, distanza, intorni, punti interni e di frontiera, insiemi aperti, chiusi, limitati; dominio di funzioni di due variabili (con figure delle regioni del piano), grafico e curve di livello, limiti e continuità (cenno), derivate parziali, gradiente, derivate seconde e teorema di Schwarz, piano tangente, differenziale e approssimazione lineare, derivata lungo una curva (cenno). Applicazioni economiche in una sezione: funzione di Cobb-Douglas, produttività marginali, isoquanti e curve di indifferenza, saggio marginale di sostituzione, funzioni omogenee e rendimenti di scala.
10. `ottimizzazione`: "Massimi e minimi liberi e vincolati". Usa 4, 8, 9. Massimi e minimi relativi, punti stazionari, matrice hessiana e test dell'hessiana (con i casi indecisi), punti di sella, massimi e minimi assoluti su insiemi chiusi e limitati (Weierstrass, studio della frontiera), vincoli di uguaglianza: metodo di sostituzione e moltiplicatori di Lagrange, con l'interpretazione geometrica (gradiente della funzione parallelo a quello del vincolo, curva di livello tangente al vincolo). Applicazioni economiche in una sezione: profitto massimo con due beni, problema del consumatore (utilità con vincolo di bilancio), minimo costo dell'impresa.

## Figure
Indicativamente 6–10 figure nella teoria e almeno una figura in 4 delle 8 schede svolte (studi di funzione, aree, domini nel piano, curve di livello, vincoli e curve di livello tangenti, grafici dei montanti). Didascalie con formule fra dollari, frazioni in colonna. Le tacche degli assi hanno passo $\lceil (\text{max} - \text{min})/10 \rceil$ a partire dal primo intero $\geq$ min: scegli `xmin`, `xmax`, `ymin`, `ymax` in modo che il minimo sia un multiplo del passo (per esempio `xmin=-2 xmax=18` dà tacche pari), così i numeri sugli assi sono puliti. Al massimo due curve per figura quando possibile, per non avere troppi colori. Ogni figura va disegnata con `node strumenti/anteprima_figure.mjs <png> <file…>` dalla radice del repository (PNG nella tua cartella di lavoro) e guardata con Read.

## Qualità (l'errore più grave è un risultato sbagliato)
- Dati scelti in modo che i conti siano gestibili a mano.
- Ricalcola OGNI esercizio da capo, comprese le soluzioni delle tracce, con Python e sympy (`pip install --break-system-packages sympy` se manca), da una cartella tua in `/tmp/lavoro-mg/<slug>/`, non dal repository.
- Ipotesi sempre esplicite. Esercizi originali, non copiati da libri.
- Frontmatter YAML valido: un elemento di lista che contiene `{`, `}`, `:` o `[` va fra virgolette. Controllo: `python3 strumenti/yamlcheck.py <file…>`.

## Consegna
Rapporto breve in italiano: file creati, parole della teoria, numero di figure; conferma che (a) tutte le ancore citate esistono, (b) ogni risultato è stato verificato con sympy, (c) lo script delle figure dà 0 problemi e hai guardato il PNG, (d) yamlcheck dà 0 errori.
