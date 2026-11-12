# Scrivere un argomento del corso americano "University Physics I · Mechanics"

Repository: `/home/claude/sito-analisi` (sito Astro di teoria ed esercizi universitari).
Questo corso è della **sezione americana** del sito: il programma è quello statunitense e **i contenuti si scrivono in inglese**, non si traducono dall'italiano. Il lettore è uno studente del primo anno di ingegneria o di scienze in un'università degli Stati Uniti, che segue un corso di fisica con il calcolo (riferimento: OpenStax *University Physics Volume 1*, Purdue PHYS 172, Illinois PHYS 211).

Non usare git, non lanciare la build, non toccare file fuori dalle tre cartelle del tuo argomento. Altri autori scrivono in parallelo gli altri argomenti.

## Prima di scrivere (obbligatorio)
1. Leggi per intero `GUIDA-CONTENUTI.md` nella radice del repository: è la norma di stile e di formato, e vale anche in inglese. Le uniche differenze sono la lingua e le convenzioni numeriche elencate più sotto.
2. Leggi il modello già approvato: `src/content-us/teoria/physics-1-mechanics/units-measurement-and-vectors.md`. È il capitolo 1 di questo stesso corso. Imita struttura, densità, tono, uso dei blocchi, del grassetto e del corsivo, e le figure.
3. Leggi due schede e due tracce italiane per la struttura degli esercizi: `src/content/svolti/fisica-1/leggi-di-newton/1.md` e `5.md`, `src/content/dafare/fisica-1/leggi-di-newton/1.md` e `7.md`. Copia la struttura, non il testo né i dati.
4. Leggi `istruzioni-agenti/brief-figure.md`, sezioni "Strumenti disponibili" e "Controllo obbligatorio".

## Cosa produrre (corso = `physics-1-mechanics`, argomento = il tuo slug)
- `src/content-us/teoria/physics-1-mechanics/<slug>.md`: frontmatter `titolo` (il titolo inglese indicato sotto) e `sommario` (una frase in inglese). Da 6 a 10 sezioni `##`, circa 2500–3500 parole.
- `src/content-us/svolti/physics-1-mechanics/<slug>/1.md … 7.md`: 7 schede per tipologia di problema (titolo al plurale in inglese, per esempio "Blocks on an inclined plane with friction"), ciascuna con 2–4 esercizi `## Exercise k` in difficoltà crescente. `gratis: true` per 1, 2, 3; `gratis: false` per 4–7. Le schede 1–3 sono l'anteprima gratuita: tipologie di base, rappresentative e invoglianti.
- `src/content-us/dafare/physics-1-mechanics/<slug>/1.md … 13.md`: 13 tracce, ciascuna con `:::soluzione … :::` contenente il solo risultato finale (valore numerico con unità, o la formula).
- Il campo `teoria:` di schede e tracce cita SOLO ancore (`#id`) che esistono davvero nel tuo file di teoria. Le ancore si scrivono in inglese e con il trattino: `{#newtons-second-law}`.
- Il campo `parole:` di schede e tracce contiene 3-6 parole chiave inglesi di ricerca ("free-body diagram", "kinetic friction", "terminal speed").

## Lingua e convenzioni numeriche (diverse dall'italiano)
- Inglese da manuale universitario americano. Frasi complete, lessico tecnico canonico (the hypothesis **is satisfied**, the theorem **applies**, **it follows that**, **hence**, **therefore**, **since**). Nessuna personificazione, nessuna metafora, nessuna frase a effetto o "da IA" (Imagine…, In summary, Remember, crucial, "it's not X but Y", domande retoriche, lineette lunghe).
- Deduzioni complete: premessa, connettivo esplicito, conclusione. I due punti non sostituiscono un connettivo. Una frase, un passaggio logico.
- Esposizione di fatti, non consigli. Niente tono prescrittivo. Le negazioni sono rare e stanno in un blocco `:::attenzione` con un controesempio.
- **Punto decimale**, non la virgola: `2.5`, `9.81`, `126.9^\circ`. Nel LaTeX si scrive semplicemente `9.81` (la regola italiana `{,}` qui non si applica).
- **Frazioni sempre in colonna** con `\dfrac`, anche negli esponenti: `\dfrac{1}{2}mv^2`, mai `1/2 mv^2`, mai `v^2/2`. L'unica barra ammessa è quella dentro il simbolo di un'unità (`\mathrm{m/s}`, `\mathrm{J/(kg\cdot K)}`).
- Unità SI in tondo con spazio sottile: `9.81\,\mathrm{m/s^2}`, `3.0\,\mathrm{kg}`, `250\,\mathrm{J}`. Dove un problema americano lo richiede si possono usare ft, lb, mi/h, convertendo subito in SI nel primo passaggio.
- $g = 9.81\,\mathrm{m/s^2}$, salvo dove il testo dichiara $9.8$ o $10\,\mathrm{m/s^2}$. Risultati con 2 o 3 cifre significative coerenti con i dati.
- Vettori con la freccia: $\vec{F}$, $\vec{v}$, $\vec{a}$; modulo $F$ oppure $|\vec{F}|$; versori $\hat{\imath}, \hat{\jmath}, \hat{k}$; componenti $F_x$, $F_y$.
- Niente "the parenthesis" per indicare un'espressione: si nomina l'espressione.
- KaTeX: niente pacchetti esterni; ammessi `cases`, `aligned`, `pmatrix`, `\vec`, `\hat`, `\mathrm`, `\operatorname`.
- Rimandi ad altri capitoli con il loro nome ("as the chapter on work and kinetic energy develops"), mai alla struttura della pagina.

## Blocchi
Le etichette escono automaticamente in inglese (Definition, Theorem, Proof, Example, Remark, Warning, Recall): tu scrivi le direttive italiane `:::definizione`, `::::teorema`, `:::dimostrazione`, `:::esempio`, `:::osservazione`, `:::attenzione`, `:::richiamo`, `:::soluzione`.
- Grandezze e concetti: `:::definizione`.
- Principi e leggi sperimentali (le tre leggi di Newton, la legge di gravitazione, la legge di Hooke): `:::teorema` con il nome del principio, **senza** dimostrazione; nel testo si dice che è una legge sperimentale, poi a cosa serve e un esempio.
- Risultati che si ricavano (work-energy theorem, conservation of mechanical energy, impulse-momentum theorem, parallel-axis theorem, König, conservazione del momento angolare, leggi di Keplero, Bernoulli): `::::teorema` con `:::dimostrazione` annidata. Le dimostrazioni che il corso americano chiede vanno scritte.
- Strumenti matematici usati (derivata, integrale, prodotto vettoriale, equazione differenziale del moto armonico): `:::richiamo` breve con rimando al capitolo di Calculus che li tratta.
- Niente prosa fuori dai blocchi, tranne una riga di collegamento fra due sezioni quando serve davvero.
- **Dopo ogni definizione e ogni teorema**: a che cosa serve e come si usa, con un piccolo esempio o il rimando esplicito al capitolo dove se ne vedrà l'importanza. I paragrafi devono essere propedeutici, con un senso di progressione.

## Struttura degli esercizi svolti
Ogni esercizio: testo del problema con i dati; poi la risoluzione nell'ordine
1. schema della situazione (con una figura `::grafico` quando aiuta: free-body diagram, traiettoria, grafico orario);
2. leggi applicate, scritte in forma simbolica;
3. risoluzione simbolica fino alla formula finale della grandezza cercata;
4. sostituzione numerica con le unità e risultato.
Sotto, `<div class="spiegazione">` con la spiegazione a parole di ogni passaggio (perché si applica quella legge, quali ipotesi sono soddisfatte, per esempio "the surface is frictionless, hence the normal force does no work"). Il calcolo sopra e la spiegazione sotto, a tutta pagina: mai due colonne.
I passaggi devono essere espliciti, così che lo studente capisca anche solo leggendo.

## Programma dei 14 argomenti (rispetta i confini: ciò che appartiene a un altro capitolo si richiama in una riga, non si rifà)
1. `units-measurement-and-vectors` — "Units, measurement and vectors". **Già scritto**: se è il tuo argomento, produci solo schede svolte e tracce, coerenti con quel file di teoria.
2. `motion-along-a-straight-line` — "Motion along a straight line". Riferimento e legge oraria, spostamento, velocità media e istantanea, accelerazione, moto uniforme e uniformemente accelerato, caduta libera, grafici $x(t)$, $v(t)$, $a(t)$ e aree sotto i grafici, integrazione da $a(t)$ a $x(t)$.
3. `motion-in-two-and-three-dimensions` — "Motion in two and three dimensions". Vettori posizione, velocità e accelerazione; moto del proiettile (traiettoria, gittata, altezza massima, tempo di volo); moto circolare uniforme e non uniforme, velocità angolare, accelerazione centripeta e tangenziale; moto relativo.
4. `newtons-laws-of-motion` — "Newton's laws of motion". I tre principi, sistemi inerziali, massa e peso, forza normale, tensione dei fili (fili ideali, carrucole), free-body diagram, sistemi di corpi collegati.
5. `applications-of-newtons-laws` — "Applications of Newton's laws". Attrito statico e dinamico, piano inclinato, resistenza del mezzo e velocità limite, forza centripeta nei moti circolari (curve sopraelevate, giro della morte), forze apparenti nei sistemi non inerziali (cenno).
6. `work-and-kinetic-energy` — "Work and kinetic energy". Lavoro di una forza costante e variabile, lavoro come integrale di linea, potenza, energia cinetica e work-energy theorem.
7. `potential-energy-and-conservation-of-energy` — "Potential energy and conservation of energy". Forze conservative ed energia potenziale (gravitazionale, elastica), conservazione dell'energia meccanica, lavoro delle forze non conservative, curve di energia potenziale ed equilibrio, relazione $F_x = -\dfrac{dU}{dx}$.
8. `linear-momentum-and-collisions` — "Linear momentum and collisions". Quantità di moto, impulso e impulse-momentum theorem, conservazione della quantità di moto, urti elastici e anelastici in una e due dimensioni, centro di massa e suo moto, sistemi a massa variabile (cenno: razzo).
9. `fixed-axis-rotation` — "Fixed-axis rotation". Grandezze angolari, cinematica rotazionale, momento d'inerzia (calcolo per corpi semplici, parallel-axis theorem), momento di una forza, seconda legge per la rotazione, energia cinetica di rotazione, lavoro e potenza nella rotazione.
10. `angular-momentum-and-rolling` — "Angular momentum and rolling". Rotolamento senza strisciamento, momento angolare di un punto e di un corpo rigido, conservazione del momento angolare, precessione del giroscopio (cenno).
11. `static-equilibrium-and-elasticity` — "Static equilibrium and elasticity". Condizioni di equilibrio, baricentro, problemi di equilibrio (scale appoggiate, travi, bracci), sforzo e deformazione, moduli di Young, di taglio e di compressibilità, legge di Hooke per i solidi.
12. `gravitation` — "Gravitation". Legge di gravitazione universale, campo gravitazionale, $g$ con la quota, energia potenziale gravitazionale, velocità di fuga, orbite circolari e satelliti, leggi di Keplero (la terza ricavata per orbite circolari).
13. `fluid-mechanics` — "Fluid mechanics". Densità e pressione, variazione della pressione con la profondità, principio di Pascal, principio di Archimede e galleggiamento, portata ed equazione di continuità, equazione di Bernoulli e applicazioni (Torricelli, Venturi), viscosità (cenno).
14. `oscillations-waves-and-sound` — "Oscillations, waves and sound". Moto armonico semplice ($\ddot{x} = -\omega^2 x$ e sua soluzione), massa-molla, pendolo semplice e pendolo fisico, energia nel moto armonico, oscillazioni smorzate e forzate, risonanza; onde trasversali e longitudinali, equazione d'onda, velocità di un'onda su una corda, interferenza e onde stazionarie, suono, intensità in decibel, effetto Doppler.

## Figure (obbligatorie dove servono)
La fisica si capisce dai disegni. Con `::grafico` puoi fare: free-body diagram (`vettori=` dal punto di applicazione, piano inclinato o pavimento con `segmenti=`, `uguale=1`, assi `nomi="x,y"`); traiettorie (parabola con `f=` o `curve=`, circonferenza con `curve=` e vettori velocità e accelerazione); grafici orari con `nomi="t,x"` o `nomi="t,v"` e `area=`; curve di energia potenziale; profili d'onda con `nomi="x,y"`.
Gli assi vanno **sempre orientati**, con le frecce e le lettere. Indicativamente 6–10 figure nella teoria e almeno una figura in 4 delle 7 schede svolte. Didascalie in inglese con le formule fra dollari e le frazioni in colonna. Il PNG di controllo si chiama `figure-<slug>.png`. Ogni figura va guardata.

## Qualità (l'errore più grave è un risultato sbagliato)
- Dati scelti in modo che i conti siano gestibili a mano e i risultati abbiano senso fisico (velocità, masse, lunghezze realistiche).
- Ricalcola OGNI esercizio da capo, comprese le soluzioni delle tracce, con Python (`python3`, eventualmente `pip install --break-system-packages sympy`), da una cartella tua nello scratchpad, non dal repository: prima la formula simbolica con sympy, poi il valore numerico, controllando anche le dimensioni.
- Ipotesi fisiche sempre esplicite (massless inextensible string, negligible air resistance, frictionless pulley, rigid body).
- Esercizi originali, non copiati da libri o da OpenStax.
- Controlla il frontmatter YAML: gli elementi di lista che contengono `{ } : [` vanno fra virgolette. Verifica con `python3 strumenti/yamlcheck.py <file…>`.

## Consegna
Alla fine elenca i file creati con il numero di parole della teoria e il numero di figure, e conferma: (a) tutte le ancore citate nei campi `teoria:` esistono nel file di teoria; (b) ogni risultato è stato verificato con un calcolo indipendente (di' con cosa); (c) lo script delle figure dà 0 problemi e hai guardato il PNG. Rapporto breve, in italiano.
