# Scrivere un argomento della materia "Fisica 1"

Repository: /home/claude/sito-analisi1 (sito Astro di teoria ed esercizi universitari, in italiano).
Non usare git, non lanciare la build, non toccare file fuori dalle tre cartelle del tuo argomento (elencate sotto). Altri autori scrivono in parallelo gli altri argomenti della materia.

## Prima di scrivere (obbligatorio)
1. Leggi per intero `GUIDA-CONTENUTI.md` nella radice del repository: è la norma di stile e di formato. Seguila alla lettera.
2. Leggi i modelli: `src/content/teoria/algebra-lineare/vettori.md`, due schede in `src/content/svolti/algebra-lineare/vettori/` (1.md e 5.md) e due tracce in `src/content/dafare/algebra-lineare/vettori/`. Imita struttura, densità, tono, uso di grassetto e corsivo e figure.
3. Leggi istruzioni-agenti/brief-figure.md (sezioni "Strumenti disponibili" e "Controllo obbligatorio").

## Cosa produrre (materia = `fisica-1`, argomento = il tuo slug)
- `src/content/teoria/fisica-1/<slug>.md`: frontmatter `titolo` (il titolo dell'argomento indicato sotto) e `sommario` (una frase). Da 6 a 10 sezioni `##`, circa 2500–3500 parole di prosa.
- `src/content/svolti/fisica-1/<slug>/1.md … 7.md`: 7 schede per tipologia di problema (titolo al plurale, per esempio "Piani inclinati con attrito"), ciascuna con 2–4 esercizi `## Esercizio k` in difficoltà crescente. `gratis: true` per 1, 2, 3; `gratis: false` per 4–7. Le schede 1–3 sono l'anteprima gratuita: tipologie di base, rappresentative e invoglianti.
- `src/content/dafare/fisica-1/<slug>/1.md … 13.md`: 13 tracce, ciascuna con `:::soluzione … :::` contenente il solo risultato finale (valore numerico con unità di misura, o la formula).
- Il campo `teoria:` di svolti e tracce cita SOLO ancore (`#id`) che esistono davvero nel tuo file di teoria.

## Blocchi nella fisica
- Grandezze e concetti: `:::definizione`.
- Principi e leggi sperimentali (principi della dinamica, legge di gravitazione, leggi dei gas, principi della termodinamica): `:::teorema` con titolo del principio, *senza* dimostrazione; nel testo del blocco si dice che è un principio o una legge sperimentale, poi a cosa serve e un esempio.
- Risultati che si ricavano (teorema dell'energia cinetica, conservazione dell'energia meccanica, teoremi di König e di Steiner, conservazione della quantità di moto e del momento angolare, leggi di Keplero dalla gravitazione, Stevino, Archimede, Bernoulli, rendimento di Carnot, disuguaglianza di Clausius): `::::teorema` con `:::dimostrazione` annidata. Le dimostrazioni centrali dell'esame vanno scritte.
- Strumenti matematici usati (derivata, integrale, prodotto vettoriale, equazione differenziale del moto armonico): `:::richiamo` breve con rimando all'argomento di Analisi 1 o di Algebra lineare che li tratta.

## Struttura degli esercizi (svolti)
Ogni esercizio: testo del problema con i dati; poi la risoluzione nell'ordine
1. schema della situazione (con una figura `::grafico` quando aiuta: diagramma delle forze, traiettoria, grafico orario, ciclo nel piano $pV$);
2. leggi applicate, scritte in forma simbolica;
3. risoluzione simbolica fino alla formula finale della grandezza cercata;
4. sostituzione numerica con le unità e risultato.
Sotto, `<div class="spiegazione">` con la spiegazione a parole di ogni passaggio (perché si applica quella legge, quali ipotesi sono soddisfatte, per esempio "il piano è liscio, quindi l'unica forza che compie lavoro è il peso").
Quando ha senso, un controllo finale a parole: dimensioni, ordine di grandezza, caso limite.

## Notazioni comuni a tutta la materia (usale identiche)
- Vettori con la freccia: $\vec{F}$, $\vec{v}$, $\vec{a}$; modulo $F$ oppure $|\vec{F}|$; versori $\hat{\imath}, \hat{\jmath}, \hat{k}$ (oppure $\hat{u}_x$); componenti $F_x, F_y$.
- Derivate temporali $\dfrac{dx}{dt}$, $\dot{x}$ solo se introdotto; integrali con il differenziale.
- Unità del Sistema Internazionale in tondo con spazio sottile: $9{,}81\,\mathrm{m/s^2}$, $3{,}0\,\mathrm{kg}$, $250\,\mathrm{J}$. Virgola decimale italiana scritta `{,}` dentro le formule. Le unità composte si scrivono con il simbolo SI (`\mathrm{m/s}`, `\mathrm{J/(kg\cdot K)}`): è l'unica barra ammessa. Numeri e grandezze, invece, seguono la regola delle frazioni in colonna (`\dfrac{1}{2} m v^2`, mai `1/2 mv^2`).
- $g = 9{,}81\,\mathrm{m/s^2}$ salvo dove il testo dichiara $g = 9{,}8$ o $10\,\mathrm{m/s^2}$. Risultati con 2 o 3 cifre significative coerenti con i dati.
- Termodinamica: $p$, $V$, $T$ (in kelvin), $n$ moli, $R = 8{,}314\,\mathrm{J/(mol\cdot K)}$, $Q$ calore assorbito dal sistema, $L$ lavoro fatto dal sistema (convenzione $\Delta U = Q - L$), $c_V$, $c_p$, $\gamma$, entropia $S$.
- KaTeX: niente pacchetti esterni; ammessi `cases`, `aligned`, `pmatrix`, `\vec`, `\hat`, `\mathrm`, `\operatorname`.
- Rimandi ad altri argomenti con il loro nome ("si rimanda all'argomento sul lavoro e l'energia"), mai alla struttura della pagina.

## Programma dei 12 argomenti (ordine di studio; rispetta i confini, non ripetere ciò che appartiene ad altri argomenti se non con un richiamo breve)
1. `grandezze-e-vettori`: "Grandezze fisiche, unità di misura e vettori". Grandezze fondamentali e derivate, Sistema Internazionale, multipli e prefissi, conversioni, analisi dimensionale, cifre significative e notazione scientifica, ordini di grandezza; grandezze scalari e vettoriali, componenti cartesiane e polari, somma, prodotto scalare e vettoriale con il loro significato fisico (lavoro, momento), derivata di un vettore.
2. `cinematica-1d`: "Cinematica in una dimensione". Sistema di riferimento, legge oraria, spostamento, velocità media e istantanea, accelerazione, moto rettilineo uniforme e uniformemente accelerato, caduta libera e lancio verticale, grafici orari $x(t)$, $v(t)$, $a(t)$ e aree sotto i grafici, passaggio da $a(t)$ a $x(t)$ per integrazione, moto con accelerazione dipendente da $v$ (cenno).
3. `moto-nel-piano`: "Moto nel piano: proiettile e moto circolare". Vettori posizione, velocità, accelerazione; moto del proiettile (traiettoria, gittata, altezza massima, tempo di volo); moto circolare uniforme e non uniforme, velocità angolare, accelerazione centripeta e tangenziale; moti relativi e trasformazioni di Galileo.
4. `leggi-di-newton`: "Leggi di Newton e forze". I tre principi, sistemi inerziali, massa e peso, reazione vincolare, tensione dei fili (fili ideali, carrucole), attrito statico e dinamico, piano inclinato, forza elastica (legge di Hooke), forza centripeta nei moti circolari (curve, giro della morte), sistemi di corpi collegati, forze apparenti nei sistemi non inerziali (cenno: ascensore, piattaforma rotante).
5. `lavoro-ed-energia`: "Lavoro ed energia". Lavoro di una forza costante e variabile, potenza, energia cinetica e teorema dell'energia cinetica, forze conservative e energia potenziale (gravitazionale, elastica), conservazione dell'energia meccanica, lavoro delle forze non conservative (attrito), curve di energia potenziale ed equilibrio.
6. `oscillazioni`: "Oscillazioni e moto armonico". Moto armonico semplice (equazione $\ddot{x} = -\omega^2 x$ e sua soluzione), massa-molla, pendolo semplice per piccole oscillazioni, energia nel moto armonico, pendolo fisico (con rimando al corpo rigido), oscillazioni smorzate e forzate, risonanza (senza i dettagli matematici più pesanti).
7. `quantita-di-moto`: "Sistemi di punti, quantità di moto e urti". Quantità di moto, impulso e teorema dell'impulso, centro di massa e suo moto, conservazione della quantità di moto, urti elastici e anelastici in una e due dimensioni, pendolo balistico, teorema di König per l'energia cinetica, sistemi a massa variabile (cenno: razzo).
8. `corpo-rigido`: "Dinamica del corpo rigido". Moto di rotazione attorno a un asse fisso, momento di una forza, momento angolare, momento d'inerzia (calcolo per corpi semplici, teorema di Steiner), seconda equazione cardinale, energia cinetica di rotazione, conservazione del momento angolare, rotolamento puro, equilibrio statico del corpo rigido (leve, scale appoggiate).
9. `gravitazione`: "Gravitazione". Legge di gravitazione universale, campo gravitazionale, energia potenziale gravitazionale, velocità di fuga, orbite circolari e satelliti, leggi di Keplero (la terza ricavata per orbite circolari), variazione di $g$ con la quota.
10. `fluidi`: "Meccanica dei fluidi". Densità e pressione, legge di Stevino, principio di Pascal (torchio idraulico), principio di Archimede e galleggiamento, portata ed equazione di continuità, teorema di Bernoulli e applicazioni (Torricelli, Venturi), cenno alla viscosità.
11. `primo-principio`: "Temperatura, calore e primo principio della termodinamica". Temperatura e equilibrio termico, scale termometriche, dilatazione termica, calore, capacità termica e calore specifico, calorimetria e cambiamenti di stato, propagazione del calore (cenno), gas perfetto ed equazione di stato, lavoro termodinamico, primo principio, energia interna del gas perfetto, trasformazioni isoterme, isobare, isocore, adiabatiche (con $pV^\gamma$ costante), calori molari, cicli.
12. `secondo-principio`: "Secondo principio, macchine termiche ed entropia". Macchine termiche e frigorifere, rendimento ed efficienza, enunciati di Kelvin-Planck e Clausius e loro equivalenza, ciclo di Carnot e teorema di Carnot, temperatura termodinamica, disuguaglianza di Clausius, entropia come funzione di stato, variazioni di entropia nelle trasformazioni del gas perfetto e nei passaggi di calore, principio di aumento dell'entropia.

## Figure (obbligatorie dove servono)
La fisica si capisce dai disegni. Con `::grafico` puoi fare:
- diagrammi delle forze: `vettori=` dal punto di applicazione (peso, normale, attrito, tensione), il piano inclinato o il pavimento con `segmenti=`, `uguale=1`, assi `nomi="x,y"` scelti lungo il piano quando serve;
- traiettorie: parabola del proiettile con `f=` o `curve=`, circonferenza con `curve=` e vettori velocità e accelerazione;
- grafici orari $x(t)$, $v(t)$ con `nomi="t,x"` o `nomi="t,v"` e `area=` per lo spazio percorso;
- oscillazioni $x(t)$ e energie nel moto armonico; curve di energia potenziale;
- cicli termodinamici nel piano $pV$ con `nomi="V,p"`: isoterme `f="k/x"`, adiabatiche `f="k/x^1.4"`, isobare e isocore con `segmenti=` o `vettori=` (che danno anche il verso del ciclo);
- pressione in funzione della profondità, sezioni di un condotto.
Indicativamente 6–10 figure nella teoria e almeno una figura in 4 delle 7 schede svolte. Didascalie con formule fra dollari, frazioni in colonna. Il PNG di controllo si chiama `figure-<slug>.png`. Ogni figura va guardata.

## Qualità (l'errore più grave è un risultato sbagliato)
- Dati scelti in modo che i conti siano gestibili a mano e i risultati abbiano senso fisico (velocità, masse, temperature realistiche).
- Ricalcola OGNI esercizio da capo, comprese le soluzioni delle tracce, con Python (`python3`, eventualmente `pip install --break-system-packages sympy`), da una cartella tua nello scratchpad, non dal repository: prima la formula simbolica con sympy, poi il valore numerico, controllando anche le dimensioni.
- Ipotesi fisiche sempre esplicite (filo inestensibile e di massa trascurabile, attrito dell'aria trascurabile, gas perfetto, trasformazione quasistatica).
- Esercizi originali, non copiati da libri.
- Italiano: valgono tutte le regole di GUIDA-CONTENUTI.md (connettivi espliciti, niente frasi di riempimento, niente "la parentesi", frazioni in colonna, sistemi con la graffa per condizioni da soddisfare insieme, mai per elencare).

## Consegna
Alla fine elenca i file creati con il numero di parole della teoria e il numero di figure, e conferma: (a) tutte le ancore citate nei campi `teoria:` esistono nel file di teoria; (b) ogni risultato è stato verificato con un calcolo indipendente (di' con cosa); (c) lo script delle figure dà 0 problemi e hai guardato il PNG. Rapporto breve, in italiano.
