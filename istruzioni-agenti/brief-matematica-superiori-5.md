# Scrivere un argomento della materia "Matematica 5° anno" (liceo scientifico)

Repository: /home/claude/sito-analisi (sito Astro di teoria ed esercizi, in italiano).
Non usare git, non lanciare la build, non toccare file fuori dalle tre cartelle del tuo argomento. Altri autori scrivono in parallelo gli altri argomenti della materia.

## Pubblico e tono (richiesta esplicita di Carmine)
La materia è per studenti del **quinto anno del liceo scientifico**, che preparano verifiche, interrogazioni e la seconda prova dell'esame di maturità. Rispetto alle materie universitarie del sito (Analisi 1) il livello è **più semplice**:
- stessi blocchi e stesso stile del sito, ma frasi più brevi e lessico che uno studente di 18 anni conosce; ogni termine tecnico nuovo si definisce prima di usarlo;
- più esempi numerici: ogni definizione e ogni teorema è seguito da un esempio con numeri concreti;
- dimostrazioni solo per i teoremi che al liceo si dimostrano davvero (indicati nel programma sotto), scritte passo per passo; per gli altri basta l'enunciato con un esempio e una riga che dice che la dimostrazione si studia all'università;
- niente formalismo superfluo (niente quantificatori in simboli quando una frase basta; la definizione di limite con $\varepsilon$ e $\delta$ sì, perché è in programma, ma spiegata con una figura);
- gli esercizi seguono lo stile dei libri di testo del liceo e della seconda prova: "Determina…", "Calcola…", "Studia…", problemi con un parametro, problemi tratti dalla fisica o dalla geometria.

## Prima di scrivere (obbligatorio)
1. Leggi per intero `GUIDA-CONTENUTI.md` nella radice del repository: è la norma di stile e di formato. Seguila alla lettera, con due eccezioni decise da Carmine: **niente blocco `:::percorso`** e **niente prosa tra i blocchi** (sotto un titolo `##` viene subito il primo blocco).
2. Leggi le regole di voce: `/root/.claude/skills/synced/91e36f28-5687-4a5c-ba2a-91e5fd176dde_d4cbc623-8d44-4740-8b1e-b4778a1d8e85/scrittura-umana-carmine/SKILL.md`. Ogni frase deve superare il controllo finale di quella pagina (connettivi espliciti, niente due punti al posto di un connettivo, nessuna personificazione, niente frasi a effetto, niente tono prescrittivo come "conviene", "è importante", "ricorda").
3. Leggi i modelli, già approvati: la teoria `src/content/teoria/matematica-generale/derivate.md` e `studio-di-funzione.md`, le schede `src/content/svolti/matematica-generale/derivate/1.md` e `src/content/svolti/matematica-generale/studio-di-funzione/2.md`, due tracce in `src/content/dafare/matematica-generale/derivate/`. Imita struttura, densità, uso di grassetto e corsivo e figure, con il tono più semplice descritto sopra.
4. Leggi le teorie degli argomenti precedenti della materia che il tuo usa, se esistono già, per non ripeterle e per citarle con il loro nome.
5. Leggi `istruzioni-agenti/brief-figure.md` (sezioni "Strumenti disponibili" e "Controllo obbligatorio").

## Cosa produrre (materia = `matematica-superiori-5`, argomento = il tuo slug)
- `src/content/teoria/matematica-superiori-5/<slug>.md`: frontmatter `titolo` (quello indicato sotto) e `sommario` (una frase). Da 6 a 10 sezioni `##`, circa 2500–3500 parole.
- `src/content/svolti/matematica-superiori-5/<slug>/1.md … 8.md`: 8 schede per tipologia (titolo al plurale, per esempio "Limiti che si presentano nella forma $\frac{0}{0}$"), ciascuna con 2–4 esercizi `## Esercizio k` in difficoltà crescente. `gratis: true` per 1, 2, 3; niente campo `gratis` per 4–8. Le schede 1–3 sono l'anteprima gratuita: tipologie di base e rappresentative. Almeno una scheda (di solito l'ultima) contiene un problema nello stile della seconda prova di maturità, con più domande collegate.
- `src/content/dafare/matematica-superiori-5/<slug>/1.md … 14.md`: 14 tracce, ciascuna con `:::soluzione … :::` contenente il solo risultato finale.
- Il campo `teoria:` di svolti e tracce cita SOLO ancore (`#id`) che esistono davvero nel tuo file di teoria.

## Blocchi
- Concetti: `:::definizione`. Risultati: `:::teorema` (anche criteri e proposizioni); i teoremi da dimostrare (indicati nel programma) con `::::teorema` e `:::dimostrazione` annidata.
- Risultati di argomenti precedenti usati in una dimostrazione: `:::richiamo` con sole ipotesi e tesi.
- `:::esempio`, `:::osservazione`, `:::attenzione` (rare negazioni, con un controesempio; utili per gli errori tipici degli studenti).
- Dopo ogni definizione o teorema: a che cosa serve, con un piccolo esempio numerico nel blocco stesso o in un esempio subito sotto.

## Struttura degli esercizi (svolti)
Traccia; poi il calcolo in formule display, un passaggio per riga o per blocco, con `\begin{aligned}` per le catene lunghe; il risultato in fondo. Sotto, `<div class="spiegazione">` (righe vuote prima e dopo il contenuto) con la spiegazione a parole di ogni passaggio: premessa, connettivo, conclusione; quale teorema si applica e perché le sue ipotesi sono soddisfatte. Le spiegazioni sono più distese che nelle materie universitarie: nessun passaggio algebrico lasciato al lettore. Controllo finale a parole quando ha senso.

## Notazioni comuni a tutta la materia
- Dominio $D$ (o $D_f$), funzione $y = f(x)$, derivate $f'(x)$, $f''(x)$, e $y'$, $y''$ nelle equazioni differenziali; limite $\displaystyle\lim_{x \to x_0} f(x)$; intorno $I(x_0)$; integrale $\displaystyle\int f(x)\,dx$ e $\displaystyle\int_a^b f(x)\,dx$; funzione integrale $F(x) = \displaystyle\int_a^x f(t)\,dt$.
- Logaritmo naturale $\ln x$; $\log_a x$ per le altre basi. Angoli in radianti.
- Probabilità $P(E)$, $P(A \mid B)$, valore medio $M(X)$ (o $\mu$), varianza $\operatorname{var}(X)$ (o $\sigma^2$), deviazione standard $\sigma$, coefficiente binomiale $\dbinom{n}{k}$.
- Spazio: punti $A(x_A, y_A, z_A)$, vettori $\vec{v}$, prodotto scalare $\vec{u} \cdot \vec{v}$, prodotto vettoriale $\vec{u} \times \vec{v}$, piano $ax + by + cz + d = 0$.
- Virgola decimale `{,}`; frazioni sempre in colonna (`\dfrac` nel testo), anche negli esponenti.
- KaTeX: niente pacchetti esterni; ammessi `cases`, `aligned`, `pmatrix`, `vmatrix`, `array`, `\overline`, `\operatorname`.
- Rimandi agli altri argomenti con il loro nome ("si rimanda all'argomento sui limiti"), mai alla struttura della pagina.

## Programma (rispetta i confini; ciò che appartiene ad altri argomenti si richiama in breve)
1. `funzioni`: "Funzioni e loro proprietà". Funzione, dominio e codominio, classificazione (algebriche e trascendenti), ricerca del dominio, segno e intersezioni con gli assi, funzioni pari e dispari, crescenti e decrescenti, periodiche, iniettive, suriettive, biiettive, funzione inversa, funzione composta; grafici delle funzioni elementari (potenze, radici, esponenziali, logaritmi, goniometriche) e trasformazioni geometriche dei grafici (traslazioni, simmetrie, dilatazioni, valore assoluto).
2. `limiti`: "Limiti". Intervalli e intorni, punti di accumulazione e isolati; le quattro definizioni di limite (con figure), limite destro e sinistro; teoremi di unicità, della permanenza del segno e del confronto (dimostrati); operazioni sui limiti e forme indeterminate; limiti notevoli $\lim_{x \to 0} \frac{\sin x}{x} = 1$ (dimostrato con la figura del cerchio goniometrico) e $\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e$ con quelli che ne derivano; infinitesimi e infiniti e il loro confronto; limiti di successioni (cenno, con le progressioni).
3. `continuita-e-asintoti`: "Continuità e asintoti". Funzione continua in un punto e in un intervallo; punti di discontinuità di prima, seconda e terza specie (eliminabile); teoremi di Weierstrass, dei valori intermedi e di esistenza degli zeri (enunciati, con figure e controesempi); metodo di bisezione; asintoti verticali, orizzontali e obliqui (con le formule di $m$ e $q$); grafico probabile di una funzione.
4. `derivate`: "Derivate". Rapporto incrementale e derivata, significato geometrico, retta tangente; continuità e derivabilità (teorema dimostrato); derivate fondamentali (alcune dimostrate con la definizione); regole di derivazione (somma, prodotto, quoziente, funzione composta, funzione inversa); derivate di ordine superiore; punti di non derivabilità (punti angolosi, cuspidi, flessi a tangente verticale); differenziale; applicazioni alla fisica (velocità, accelerazione, intensità di corrente).
5. `teoremi-calcolo-differenziale`: "Teoremi del calcolo differenziale". Teoremi di Fermat, Rolle e Lagrange (dimostrati, con il significato geometrico); conseguenze del teorema di Lagrange (funzioni con derivata nulla, criterio di monotonia); teorema di Cauchy; teorema di De L'Hôpital (enunciato) e suo uso nelle forme indeterminate, comprese $0 \cdot \infty$, $\infty - \infty$, $1^\infty$, $0^0$, $\infty^0$.
6. `studio-di-funzione`: "Massimi, minimi, flessi e studio di funzione". Massimi e minimi relativi e assoluti, ricerca con la derivata prima; concavità e flessi con la derivata seconda; schema completo dello studio di funzione (polinomiali, razionali fratte, irrazionali, esponenziali, logaritmiche, goniometriche, con valore assoluto); problemi di massimo e di minimo (geometria e fisica); dal grafico di $f$ a quello di $f'$ e viceversa; discussione grafica di equazioni con un parametro; risoluzione approssimata di equazioni (bisezione, cenno al metodo delle tangenti). Almeno tre schede con studi completi e il grafico finale.
7. `integrali-indefiniti`: "Integrali indefiniti". Primitive e integrale indefinito, proprietà di linearità; integrali immediati e di funzioni composte; integrazione per sostituzione e per parti; integrali di funzioni razionali fratte (denominatore di primo grado e di secondo grado con discriminante positivo, nullo o negativo).
8. `integrali-definiti`: "Integrali definiti, aree e volumi". Trapezoide e definizione di integrale definito, proprietà; teorema della media (dimostrato); funzione integrale e teorema fondamentale del calcolo integrale (dimostrato); calcolo delle aree tra curve; volumi dei solidi di rotazione attorno all'asse $x$ (e cenno all'asse $y$ e al metodo delle sezioni); integrali impropri; applicazioni alla fisica (spazio dalla velocità, lavoro di una forza, carica dalla corrente).
9. `equazioni-differenziali`: "Equazioni differenziali". Definizioni, soluzione generale e particolare, problema di Cauchy; equazioni del primo ordine a variabili separabili e lineari; equazioni del secondo ordine lineari omogenee a coefficienti costanti (i tre casi del discriminante) e non omogenee con termine noto polinomiale, esponenziale o goniometrico; applicazioni (decadimento radioattivo, crescita di una popolazione, circuito RC, moto armonico).
10. `geometria-spazio`: "Geometria analitica nello spazio". Coordinate cartesiane nello spazio, distanza tra due punti, punto medio; vettori, prodotto scalare e vettoriale, condizioni di parallelismo e perpendicolarità; equazione del piano, piani paralleli e perpendicolari; equazioni della retta (parametriche e cartesiane), posizioni reciproche di rette e piani; distanza di un punto da un piano e da una retta; superficie sferica e piano tangente.
11. `probabilita-e-distribuzioni`: "Probabilità e distribuzioni". Richiami di calcolo combinatorio; probabilità classica, teoremi della somma e del prodotto, probabilità condizionata, teorema di Bayes; variabili aleatorie discrete, valore medio, varianza e deviazione standard; distribuzione binomiale e di Poisson; variabili aleatorie continue e densità di probabilità; distribuzione uniforme, esponenziale e normale (standardizzazione e uso dei valori tabulati, riportati nel testo).

## Figure
Indicativamente 6–10 figure nella teoria e almeno una figura in 4 delle 8 schede svolte (grafici, tangenti, asintoti, aree, solidi di rotazione descritti con la sezione nel piano, curve di soluzione). Didascalie con formule fra dollari, frazioni in colonna. Le tacche degli assi hanno passo $\lceil (\text{max} - \text{min})/10 \rceil$ a partire dal primo intero $\geq$ min: scegli `xmin`, `xmax`, `ymin`, `ymax` in modo che il minimo sia un multiplo del passo (per esempio `xmin=-2 xmax=18` dà tacche pari). Nomi degli assi brevi (`nomi="x,y"`, oppure `t,s`), perché i nomi lunghi escono dal riquadro. Al massimo due curve per figura quando possibile, per non avere troppi colori. Ogni figura va disegnata con `node strumenti/anteprima_figure.mjs <png> <file…>` dalla radice del repository (PNG nella tua cartella di lavoro) e guardata con Read.

## Qualità (l'errore più grave è un risultato sbagliato)
- Dati scelti in modo che i conti siano gestibili a mano.
- Ricalcola OGNI esercizio da capo, comprese le soluzioni delle tracce, con Python e sympy (`pip install --break-system-packages sympy` se manca), da una cartella tua in `/tmp/lavoro-ms5/<slug>/`, non dal repository.
- Ipotesi sempre esplicite. Esercizi originali, non copiati da libri o da prove d'esame.
- Frontmatter YAML valido: un elemento di lista che contiene `{`, `}`, `:` o `[` va fra virgolette. Controllo: `python3 strumenti/yamlcheck.py <file…>`.

## Consegna
Rapporto breve in italiano: file creati, parole della teoria, numero di figure; conferma che (a) tutte le ancore citate esistono, (b) ogni risultato è stato verificato con sympy, (c) lo script delle figure dà 0 problemi e hai guardato il PNG, (d) yamlcheck dà 0 errori.
