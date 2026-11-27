# Analisi 2 · capitolo «Disequazioni grafiche»: schede svolte, esercizi da fare, domande a tempo

Repository: `/home/claude/sito-analisi`. **Non usare git, non lanciare la build.** Scrivi solo i file indicati nella tua consegna. Altri agenti lavorano in parallelo su altri file dello stesso capitolo: non toccare i loro.

Il capitolo è il primo di Analisi matematica 2 (27/11/2026, richiesta di Carmine). Insegna a disegnare la regione del piano descritta da una disequazione in $x$ e $y$ (rette, parabole con asse verticale e orizzontale, circonferenze, ellissi, iperboli, anche con centro o vertice fuori dall'origine, con tutti i simboli $<$, $\leq$, $=$, $\geq$, $>$, $\neq$) e a preparare la regione per i domini, per gli integrali doppi (dominio normale rispetto all'asse $x$ o $y$) e per i massimi e minimi (punti interni, tratti di frontiera, vertici, vincoli).

## Prima di scrivere (obbligatorio)

1. Leggi per intero `GUIDA-CONTENUTI.md` e carica la skill **scrittura-umana-carmine** con lo strumento Skill (se nell'elenco compare come `anthropic-skills:scrittura-umana-carmine`, usa quel nome).
2. Leggi per intero la teoria del capitolo: `src/content/teoria/analisi-2/disequazioni-grafiche.md`. Usa le stesse parole e le stesse notazioni: *frontiera*, *compresa* / *esclusa*, *tratto continuo* / *tratteggiata*, *punto di prova*, *regola della variabile isolata*, *punti interni* / *punti esterni*, *regione tra i due rami*, *regioni interne ai rami*, *regioni oltre i rami*, *dominio normale rispetto all'asse $x$*, *tratto di frontiera*, *vertici*, *vincolo*.
3. Guarda un modello del sito: `src/content/svolti/analisi-2/funzioni-di-piu-variabili/1.md` (scheda), `src/content/dafare/analisi-2/funzioni-di-piu-variabili/3.md` (esercizio da fare), `src/content/domande/analisi-2/funzioni-di-piu-variabili/20.md` e `56.md` (domande, la seconda con figura).

## Ancore della teoria (campo `teoria` del frontmatter)

`dove-servono`, `soluzioni-due-variabili`, `frontiera-e-simboli`, `segno-costante`, `variabile-isolata`, `semipiano`, `striscia`, `parabola-asse-verticale`, `parabola-asse-orizzontale`, `parabola-traslata`, `cerchio-interno-esterno`, `centro-e-raggio`, `semicirconferenze`, `cerchi-degeneri`, `ellisse-interno-esterno`, `iperbole-rami-orizzontali`, `iperbole-rami-verticali`, `iperbole-equilatera`, `iperboli-degeneri`, `riconoscere-la-conica`, `procedimento`, `tabella-riassuntiva`, `regioni-con-grafici`, `funzioni-monotone`, `sistema-di-disequazioni`, `prodotto-e-quoziente`, `valore-assoluto-nel-piano`, `dominio-normale-x`, `dominio-normale-y`, `forma-normale`, `regioni-non-normali`, `regioni-polari`, `scomposizione-di-una-regione`, `vincolo-di-uguaglianza`, `limitati-e-chiusi`.

## Le figure: `::grafico` con l'attributo `regione`

Ogni esercizio di questo capitolo ha la sua figura. La direttiva sta su una riga sola, con una riga vuota prima e dopo.

```
::grafico{regione="x^2+y^2<=4; y>x" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 punti="1.4142,1.4142,vuoto;-1.4142,-1.4142,vuoto" titolo="$x^2 + y^2 \leq 4$ e $y > x$"}
```

- `regione`: una o più condizioni separate da `;` che devono valere insieme (sistema). Più sistemi separati da `|` si uniscono (prodotti, quozienti, casi del valore assoluto). Simboli: `<`, `<=`, `>`, `>=`, `=`, `!=`. Le espressioni usano la sintassi dei grafici del sito: `^` per le potenze, moltiplicazione esplicita `2*x`, `x*y`, funzioni `sqrt abs exp log sin cos`, `pi`. Esempi: `"y>=x^2"`, `"x<=-y^2+2*y+3"`, `"(x-1)^2/4-(y+2)^2<=1"`, `"x^2+y^2>=1; y>=x | x^2+y^2<=1; y<=x"` (prodotto $\geq 0$), `"x^2+4*y^2=4"` (solo la curva).
- La regione viene colorata. La frontiera è disegnata da sola: **a tratto continuo** dove è compresa (`<=`, `>=`, `=`), **tratteggiata** dove è esclusa (`<`, `>`, `!=`). Le parti delle curve che non delimitano la regione restano come traccia sottile; `tracce=0` le toglie (da usare quando la traccia coinciderebbe con un asse o disturba).
- Scrivi sempre le condizioni in forma polinomiale quando c'è una divisione: `x*y>1`, non `y>1/x`. Per $y > \dfrac{1}{x}$ si scrive `"x>0; x*y>1 | x<0; x*y<1"`.
- `uguale=1` **sempre** (stessa scala sui due assi). Riquadro `xmin xmax ymin ymax` con estremi interi o mezzi, che contenga vertici, centri, intersezioni, e con la larghezza circa uguale all'altezza (da 6 a 10 unità per lato).
- `punti="x,y,pieno,Nome;x,y,vuoto"`: vertici, centri (`pieno`, etichette `V`, `C`, `A`, `B`), punti di prova, e **`vuoto` nei punti in cui una frontiera compresa incontra una frontiera esclusa**. Le etichette non contengono virgole.
- `segmenti="x0,y0,x1,y1;…"`: segmenti tratteggiati sottili. Usali per gli **asintoti** delle iperboli (da un bordo all'altro del riquadro).
- `linee="x0,y0 x1,y1"`: segmento a tratto pieno (il segmento verticale o orizzontale che attraversa un dominio normale), con i due estremi in `punti`.
- `titolo="…"`: didascalia, sempre presente, con le formule fra dollari e le frazioni in colonna (`$\dfrac{x^2}{4} + y^2 \leq 1$`).
- Più figure piccole affiancate (al massimo due per riga): racchiudi le direttive in `<div class="figure-affiancate">` … `</div>`, con una riga vuota dopo l'apertura, fra le direttive e prima della chiusura.

**Controllo delle figure (obbligatorio).** Dalla radice del repository:
`node strumenti/anteprima_figure.mjs /tmp/lavoro-dg/<tuo-nome>.png <file1> <file2> …` e apri il PNG con Read. Ogni figura deve mostrare la regione giusta, la frontiera giusta (continua o tratteggiata) e stare nel riquadro. Per vedere una pagina intera resa come sul sito: `node strumenti/anteprima_pagina.mjs /tmp/lavoro-dg/<nome>.png <file.md>` (stampa anche il numero di formule con errore: deve essere 0).

## Controllo dei conti (obbligatorio)

Lavora in `/tmp/lavoro-dg/<tuo-nome>/`. Con Python (sympy, numpy) verifica **ogni** esercizio e **ogni** domanda:
- completamento dei quadrati, vertice, centro, raggio, semiassi, asintoti, intersezioni fra le curve;
- la regione dichiarata: prendi almeno 200 punti a caso nel riquadro e controlla che la descrizione a parole («punti interni», «a destra della parabola», «tra i due rami»…) coincida con la disequazione di partenza; controlla che la stringa `regione` della figura sia equivalente alla disequazione della traccia (stesso esito sugli stessi punti);
- nelle domande: la risposta corretta è giusta e **nessuna** delle tre sbagliate è difendibile.

Controlla il frontmatter con `python3 strumenti/yamlcheck.py <file…>`.

## Regole di scrittura che Carmine controlla per prime

- Italiano da manuale universitario. Ogni deduzione ha premessa, connettivo esplicito (quindi, poiché, perciò, allora, dato che) e conclusione. **I due punti non sostituiscono un connettivo.** Una frase, un passaggio.
- Esposizione di fatti: niente consigli, niente tono prescrittivo («si deve», «bisogna stare attenti», «mai»), niente frasi a effetto, niente domande retoriche, niente lineette lunghe, niente «In sintesi», «Ricorda», «fondamentale», «cruciale», niente costruzioni «non X ma Y».
- Frazioni **sempre in colonna** (`\dfrac` nel testo, `\frac` in display), anche nelle didascalie. Virgola decimale `{,}`.
- Mai «la parentesi»: si nomina l'espressione («il binomio $x - 1$», «il fattore $y - x$»).
- La graffa `\begin{cases}` solo per condizioni che devono valere insieme (un sistema). I casi alternativi vanno in elenco puntato.
- Nessuna etichetta di difficoltà (facile, semplice, difficile, banale).
- Grassetto: al massimo due o tre per spiegazione, sul nome del metodo applicato e sulla conclusione («i **punti interni**», «frontiera **esclusa**»). Mai dentro le formule.
- Niente rimandi alla struttura della pagina («come visto sopra», «nell'esercizio precedente», «vedi figura»): ogni esercizio si legge da solo.
- I numeri del testo, del calcolo e della figura coincidono.

---

## A. Schede svolte (`src/content/svolti/analisi-2/disequazioni-grafiche/<n>.md`)

Frontmatter: `titolo` (quello indicato sotto), `gratis` (`true` solo per le schede 1, 2, 3), `teoria` (elenco di ancore usate), `parole` (4-6 parole chiave per la ricerca).

Ogni esercizio:

```
## Esercizio 1

Risolvere graficamente la disequazione
$$
x^2 + y^2 - 2x + 4y - 4 > 0 .
$$

$$
\begin{aligned}
(x - 1)^2 - 1 + (y + 2)^2 - 4 - 4 &> 0 \\[6pt]
(x - 1)^2 + (y + 2)^2 &> 9
\end{aligned}
$$

::grafico{regione="(x-1)^2+(y+2)^2>9" xmin=-3 xmax=5 ymin=-6 ymax=2 uguale=1 punti="1,-2,pieno,C" titolo="$(x - 1)^2 + (y + 2)^2 > 9$"}

<div class="spiegazione">

La disequazione contiene $x^2$ e $y^2$ con lo stesso coefficiente, quindi la frontiera è una circonferenza. … quindi le soluzioni sono i **punti esterni**, circonferenza **esclusa**.

</div>
```

- Traccia: «Risolvere graficamente la disequazione» (o «il sistema»), oppure la richiesta specifica indicata nell'elenco. Poi **tutti** i passaggi del calcolo in display, uno per riga (`aligned` con `\\[6pt]`): isolamento della variabile o completamento dei quadrati, coordinate del vertice o del centro, raggio o semiassi, asintoti, intersezioni con gli assi quando servono al disegno, intersezioni fra le curve nei sistemi (con l'equazione risolta), punto di prova quando la variabile non è isolata (con il valore calcolato).
- Poi la figura. Poi `<div class="spiegazione">` (righe vuote dopo l'apertura e prima della chiusura): la spiegazione a parole di ogni passaggio, a tutta larghezza, in 4-8 frasi. Deve dire: come si riconosce la curva, come si ottiene la forma da cui si disegna, perché la regione è quella (regola della variabile isolata oppure punto di prova, con il conto), se la frontiera è compresa o esclusa e come è disegnata. Nei sistemi: quali punti di incontro sono compresi e quali esclusi.
- Gli esercizi di una scheda sono in ordine crescente di lavoro richiesto. Le tracce sono **fissate qui sotto**: non cambiarle (se trovi un errore in una traccia, segnalalo nel rapporto e correggi il meno possibile).

### Elenco delle schede

1. **Semipiani e strisce** (`gratis: true`): $3x - 2y < 6$; $x + 2y \geq 0$; $-1 < x \leq 3$; $|x + y| \leq 2$.
2. **Parabole con asse verticale** (`gratis: true`): $y \leq 4 - x^2$; $y > x^2 + 2x - 3$; $2y + x^2 - 4x \geq 0$.
3. **Parabole con asse orizzontale** (`gratis: true`): $x < y^2 - 1$; $x \geq 4 - y^2$; $y^2 + 2y - x - 3 \leq 0$; $y^2 + 4x - 4y \leq 0$.
4. **Cerchi, regioni esterne e corone**: $x^2 + y^2 > 9$; $x^2 + y^2 + 4x - 6y + 9 \leq 0$; $4 \leq (x - 1)^2 + y^2 < 9$; $x^2 + y^2 \leq 4y$.
5. **Ellissi con il centro nell'origine e fuori dall'origine**: $\dfrac{x^2}{4} + \dfrac{y^2}{9} \geq 1$; $x^2 + 4y^2 < 16$; $x^2 + 4y^2 - 6x + 8y + 9 \leq 0$.
6. **Iperboli con i rami a destra e a sinistra oppure in alto e in basso**: $\dfrac{x^2}{4} - y^2 > 1$; $y^2 - x^2 \leq 4$; $4x^2 - y^2 + 8x + 2y - 1 \geq 0$.
7. **Iperboli riferite agli asintoti**: $xy < 2$; $xy \leq -1$; $(x - 1)(y + 2) > 1$; $y \leq \dfrac{2}{x - 1}$.
8. **Coniche in forma generale** (riconoscere la curva dai coefficienti, poi ridurla): $x^2 + y^2 - 6x + 5 < 0$; $y^2 - 2y - 2x - 3 > 0$; $2x^2 + y^2 - 4y \geq 0$; $x^2 - y^2 - 4x + 4 > 0$ (coppia di rette).
9. **Disequazioni con logaritmi, esponenziali e radici**: $y \geq e^x - 1$; $y < \ln(x + 1)$; $\ln(x^2 + y^2) \leq 0$ (cerchio privato del centro); $\sqrt{x - y^2} < 2$ (regione tra due parabole).
10. **Sistemi di disequazioni**: $x^2 + y^2 \leq 9$ con $x + y \geq 3$; $y \geq x^2 - 2$ con $y < x$; $x \geq y^2$ con $x \leq 2 - y^2$; $\dfrac{x^2}{4} + y^2 \leq 1$ con $xy > 0$. Le tracce si scrivono con la graffa.
11. **Prodotti, quozienti e valori assoluti**: $(x - y)(x^2 + y^2 - 4) > 0$; $\dfrac{y - x^2}{x - 1} \geq 0$; $|x - 1| + |y| < 2$; $xy\,(x^2 + y^2 - 1) \leq 0$. Per prodotti e quozienti il calcolo riporta il segno di ogni fattore in ciascuna regione (una tabella Markdown va bene).
12. **Domini normali rispetto all'asse x e all'asse y** (traccia: «Scrivere la regione come dominio normale rispetto all'asse $x$ e rispetto all'asse $y$»): regione tra $y = x^2$ e $y = 4$; triangolo di vertici $(0, 0)$, $(1, 1)$, $(2, 0)$ (rispetto a $x$ servono due domini); regione del primo quadrante tra $y = x^2$ e $x = y^2$; quarto di cerchio $x^2 + y^2 \leq 4$, $x \geq 0$, $y \geq 0$, anche in coordinate polari. Nella figura il segmento verticale o orizzontale che attraversa la regione (`linee` + `punti`); due figure affiancate quando si mostrano le due forme.
13. **Interno, frontiera e vertici di un insieme** (traccia: «Scomporre l'insieme in punti interni, tratti di frontiera e vertici», con ogni tratto scritto come curva e intervallo della variabile libera, o parametrizzato): $x^2 + y^2 \leq 9$ con $x + y \geq 3$; $x \geq y^2$ con $x \leq 4$; $|x| + |y| \leq 1$; vincolo $x^2 + 4y^2 - 2x = 3$ (riconoscere la curva, parametrizzarla, dire se è un insieme limitato e chiuso).

## B. Esercizi da fare (`src/content/dafare/analisi-2/disequazioni-grafiche/<n>.md`) e chiavi di correzione

Frontmatter: `titolo` (quello indicato, al massimo 45 caratteri), `teoria`, `parole`. Corpo: la traccia; poi il blocco

```
:::soluzione
Una o due frasi con il risultato (curva, elementi che la individuano, regione, frontiera compresa o esclusa), poi la figura.

::grafico{…}
:::
```

Niente svolgimento: solo il risultato finale, completo.

1. *Semipiano con retta in forma implicita*: $x - 3y \leq 3$.
2. *Striscia tra due rette parallele*: $-2 < y - x \leq 1$.
3. *Regione sotto una parabola*: $y < -x^2 + 6x - 5$.
4. *Parabola in forma generale*: $x^2 - 2x + 2y - 3 \geq 0$.
5. *Regione a destra di una parabola*: $x > y^2 - 2y$.
6. *Parabola con asse orizzontale*: $y^2 + x - 4 \leq 0$.
7. *Esterno di un cerchio*: $x^2 + y^2 + 2x - 8 \geq 0$.
8. *Corona circolare*: $1 \leq x^2 + y^2 - 4y + 4 < 9$.
9. *Esterno di un'ellisse*: $\dfrac{x^2}{16} + \dfrac{y^2}{4} > 1$.
10. *Ellisse in forma generale*: $4x^2 + 9y^2 - 16x + 18y - 11 \leq 0$.
11. *Regione tra i rami di un'iperbole*: $x^2 - \dfrac{y^2}{9} \leq 1$.
12. *Iperbole con asintoti traslati*: $x(y - 2) > 1$.
13. *Disequazione con il logaritmo*: $\ln(4 - x^2 - y^2) \geq 0$.
14. *Dominio con il logaritmo*: determinare e disegnare il dominio di $f(x, y) = \sqrt{y - \ln x}$.
15. *Sistema con cerchio e parabola*: $x^2 + y^2 < 4$ con $y \geq x^2 - 2$ (graffa).
16. *Prodotto di due fattori*: $(x + y)(xy - 1) \geq 0$.
17. *Dominio normale nelle due forme*: scrivere come dominio normale rispetto all'asse $x$ e rispetto all'asse $y$ la regione compresa tra $y = x^2$ e $y = 2x$.
18. *Dominio normale rispetto all'asse y*: scrivere come dominio normale rispetto all'asse $y$ la regione $x \geq y^2 - 1$, $x \leq 1 - y^2$ (graffa).
19. *Scomposizione di un semicerchio*: scomporre in punti interni, tratti di frontiera e vertici l'insieme $x^2 + y^2 \leq 4$, $x \geq 0$ (graffa).
20. *Vincolo da riconoscere*: riconoscere la curva $4x^2 + y^2 - 8x = 0$ e stabilire se è un insieme limitato.

**Chiavi di correzione.** Leggi `istruzioni-agenti/brief-chiavi-correzione.md` (formato, tipi di casella, controllo). Scrivi `/home/claude/chiavi-lavoro/analisi-2__disequazioni-grafiche.json` con una chiave per ognuno dei 20 esercizi (`"disequazioni-grafiche/<n>"`). Caselle tipiche: `scelta` per la curva di frontiera, per la regione (opzioni parallele: sopra/sotto, a destra/a sinistra, punti interni/punti esterni, tra i due rami/interne ai rami…) e per la frontiera («compresa», «esclusa»); `valori` con `ordine: true` per vertice e centro; `numero` per raggio e semiassi; `intervallo` per la proiezione di un dominio normale (con `var`); `funzione` con `var` per le curve di ingresso e di uscita ($g_1$, $g_2$, $h_1$, $h_2$). Le etichette non contengono la risposta. Controlla con `node strumenti/chiavi-controlla.mjs analisi-2 /home/claude/chiavi-lavoro/analisi-2__disequazioni-grafiche.json` (lo strumento legge le soluzioni dai file che hai appena scritto).

## C. Domande a tempo (`src/content/domande/analisi-2/disequazioni-grafiche/<n>.md`)

Formato in `istruzioni-agenti/brief-domande.md` (leggilo: frontmatter `corretta`, quattro risposte, `## Spiegazione`). In questo capitolo **ogni domanda ha il suo testo completo prima dell'elenco** (nessuna domanda a testo vuoto), si risolve in due minuti e ha una sola risposta giusta. Le spiegazioni hanno da 3 a 6 frasi e non nominano le risposte per posizione.

Le 90 domande sono divise fra tre autori; ogni autore scrive i numeri e gli argomenti della sua consegna, nelle quantità indicate. **Nessuna domanda è la variante numerica di un'altra**: stessa situazione con altri numeri, dato e incognita scambiati, stesso testo a stampo sono vietati. Prima di scrivere fai il piano delle tue 30 domande come coppie «che cosa si chiede × su quale curva», tutte diverse. Non riusare le disequazioni degli esempi della teoria, delle schede e degli esercizi da fare elencati sopra.

Che cosa si può chiedere (varia i formati):
- dalla disequazione alla regione («Quale regione descrive…?»);
- **dalla figura alla disequazione**: la domanda mostra una `::grafico{regione=… titolo="La regione colorata"}` (la didascalia non rivela la risposta) e chiede quale disequazione o sistema la descrive. Da 7 a 9 domande su 30 hanno una figura;
- appartenenza: quale punto appartiene alla regione, o è sulla frontiera;
- frontiera compresa o esclusa, punti di incontro compresi o esclusi;
- elementi della curva dopo il completamento dei quadrati: vertice, centro, raggio, semiassi, asintoti;
- riconoscimento della conica dalla forma generale, casi degeneri;
- equivalenze con logaritmi, esponenziali, radici, valori assoluti;
- estremi di un dominio normale ($a$, $b$, $g_1$, $g_2$ oppure $c$, $d$, $h_1$, $h_2$), numero di domini normali necessari, descrizione in coordinate polari;
- tratti di frontiera e vertici di un insieme, vincoli, insiemi limitati o chiusi, applicabilità del teorema di Weierstrass.

Risposte sbagliate: errori tipici e plausibili (verso non cambiato dopo aver diviso per un numero negativo, interno scambiato con esterno, asse verticale scambiato con asse orizzontale, frontiera compresa scambiata con esclusa, segno sbagliato nel centro dopo il completamento, raggio scambiato con il suo quadrato, semiassi scambiati, regione tra i rami scambiata con le regioni interne). La posizione della risposta corretta è distribuita: nei tuoi 30 file ogni posizione compare 7 o 8 volte.

**Livello e abilità (per lo Studio guidato).** Per ogni domanda scrivi anche livello e abilità nel file `/home/claude/sg-classi/dg-<primo>-<ultimo>.json`, nella forma `{"1": [2, 0], "2": [1, 0], …}` (numero della domanda → [livello, indice dell'abilità]).
- Livello: 1 = applicazione diretta di una definizione o della tabella riassuntiva, uno o due passaggi; 2 = procedimento tipico in più passaggi (completare i quadrati e poi leggere la regione, sistema di due condizioni); 3 = più tecniche insieme, casi da distinguere, risposte sbagliate costruite su errori sottili. In ogni gruppo di argomenti circa un terzo di livello 1, metà di livello 2, il resto di livello 3; **ogni abilità ha almeno 3 domande di livello 1 e 3 di livello 2** fra le tue.
- Abilità (indice): 0 «Simboli, frontiera e punto di prova»; 1 «Semipiani e strisce»; 2 «Regioni delimitate da parabole»; 3 «Cerchi, corone ed ellissi»; 4 «Regioni delimitate da iperboli»; 5 «Riconoscere la curva dalla disequazione»; 6 «Sistemi, prodotti e quozienti»; 7 «Domini normali, frontiera e vertici».

Consegne:
- **Autore 1, domande 1-30**: simboli, frontiera, punto di prova e regola della variabile isolata (8, abilità 0); rette, semipiani e strisce (10, abilità 1); parabole con asse verticale (8, abilità 2); parabole con asse orizzontale (4, abilità 2).
- **Autore 2, domande 31-60**: parabole con asse orizzontale, anche in forma generale (4, abilità 2); circonferenze e corone (9, abilità 3); ellissi (7, abilità 3); iperboli, comprese $xy = k$ e le coppie di rette (10, abilità 4).
- **Autore 3, domande 61-90**: riconoscimento della conica dalla forma generale e casi degeneri (5, abilità 5); curve non coniche e disequazioni con logaritmi, esponenziali, radici (5, abilità 5); sistemi, prodotti, quozienti e valori assoluti (8, abilità 6); domini normali e coordinate polari (6, abilità 7); punti interni, tratti di frontiera, vertici, vincoli, insiemi limitati e chiusi (6, abilità 7).

## Rapporto finale (breve, in italiano)

File scritti; per le figure, conferma di aver aperto il PNG e che lo strumento dà 0 problemi; conferma del controllo dei conti con Python; conteggio delle posizioni corrette (domande); eventuali errori trovati nelle tracce fissate o nella teoria (citali con precisione: non correggere la teoria).
