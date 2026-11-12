# Verifica di un argomento di "Idraulica"

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Modifica solo i file del tuo argomento.

Per l'argomento assegnato (materia `idraulica`):
- teoria: `src/content/teoria/idraulica/<slug>.md`
- esercizi svolti: `src/content/svolti/idraulica/<slug>/*.md`
- esercizi da fare: `src/content/dafare/idraulica/<slug>/*.md` (risultati nel blocco `:::soluzione`)

Questi file sono stati scritti da un altro autore e saranno venduti a studenti di Ingegneria: un risultato sbagliato è l'errore più grave possibile. Controllali in modo indipendente, senza fidarti dei conti scritti. Leggi prima `GUIDA-CONTENUTI.md`, `istruzioni-agenti/brief-idraulica.md` (le regole con cui sono stati scritti, con le notazioni e le convenzioni comuni) e l'intestazione di `src/plugins/struttura.mjs`. Carica la skill **scrittura-umana-carmine** con lo strumento Skill prima di correggere qualsiasi frase.

## Cosa fare
1. Per OGNI esercizio svolto e OGNI traccia da fare: ricava i dati **dalla figura e dal testo** (devono coincidere: livelli, quote, diametri, lunghezze, pendenze), poi risolvi il problema da zero in forma simbolica con sympy e numericamente (script in `/tmp/lavoro/verifica-idraulica-<slug>/`, non nel repository). Controlla anche i passaggi intermedi scritti negli svolti, le unità e le conversioni ($\mathrm{L/s}$ in $\mathrm{m^3/s}$, $\mathrm{mm}$ in $\mathrm{m}$, $\mathrm{bar}$ in $\mathrm{Pa}$).
2. Idraulica, non solo conti:
   - le pressioni sono relative dove il testo lo dice, assolute dove serve (cavitazione, aspirazione, barometro), e i due casi non si mescolano;
   - la legge di Stevin è applicata dentro lo stesso fluido in quiete e in continuità, e non attraverso una superficie di separazione o un tratto in moto;
   - nelle spinte: $S = \gamma h_G A$ con $h_G$ affondamento del baricentro, centro di spinta sotto il baricentro con $y_C = y_G + \dfrac{I_G}{y_G A}$ misurato lungo il piano della superficie, componente verticale uguale al peso del volume di pressione con il verso giusto, momenti presi rispetto al punto dichiarato;
   - Bernoulli è scritto fra due sezioni dove il moto è lineare e la distribuzione delle pressioni è idrostatica, con lo stesso piano di riferimento per le quote, e la perdita di carico sta dalla parte di valle;
   - nell'equazione globale il volume di controllo è dichiarato, le spinte sulle sezioni sono dirette verso l'interno, il peso compare solo se la sua componente non è nulla sull'asse considerato, e il segno finale distingue la forza sul fluido da quella sulle pareti;
   - $\lambda$ è coerente con $Re$ e con $\dfrac{\varepsilon}{D}$ (Colebrook o Moody), e il regime di moto dichiarato è quello che risulta dal calcolo;
   - nelle lunghe condotte la piezometrica resta sopra l'asse della condotta dove la pressione è positiva, e i punti critici sono segnalati;
   - nei sistemi di condotte le equazioni ai nodi e alle maglie sono complete e i versi assunti sono coerenti con il risultato (nel problema dei tre serbatoi il verso nel ramo centrale va discusso, non assunto);
   - nei canali: $A$, $C$, $R$, $B$ calcolati con la geometria giusta, moto uniforme con $J = i$, altezza critica e numero di Froude coerenti con il tipo di corrente, profilo tracciato dalla sezione di controllo giusta, risalto con $h_2 > h_1$, $\Delta E > 0$ e altezze coniugate ricavate dall'equazione globale;
   - gli ordini di grandezza stanno nei limiti del brief (velocità, $\lambda$, pressioni, $Re$).
3. Teoria: enunciati con ipotesi complete, dimostrazioni corrette, esempi numerici che tornano, definizioni coerenti con il resto della materia. Le formule sperimentali (Moody, Colebrook, Gauckler-Strickler, coefficienti $\mu$ e $\xi$) non devono comparire come teoremi dimostrati; il loro campo di validità va detto.
4. Notazioni comuni (correggi se il tuo argomento se ne discosta, senza cambiare i risultati): $\gamma = 9{,}81\,\mathrm{kN/m^3}$, $\rho = 1000\,\mathrm{kg/m^3}$, $\nu = 10^{-6}\,\mathrm{m^2/s}$; $h = z + \dfrac{p}{\gamma}$, $H = z + \dfrac{p}{\gamma} + \dfrac{v^2}{2g}$; $J$ cadente, $\Delta H = J L$, $\lambda$, $\xi$, $\varepsilon$, $Re$; $R = \dfrac{A}{C}$; $S$ spinta, $P$ potenza, $Q$ portata, $\mu$ coefficiente di portata; $h_0$ altezza di moto uniforme, $h_c$ altezza critica, $Fr$, $i$ pendenza del fondo, $k_s$ di Gauckler-Strickler.
5. Formato: ogni ancora citata nei campi `teoria:` esiste come `#id` nel file di teoria; blocchi `:::`/`::::` bilanciati; nessun blocco `:::percorso`; schede 1–3 `gratis: true`, le altre `gratis: false`; frontmatter YAML valido (`python3 strumenti/yamlcheck.py <file…>`); frazioni in colonna (l'unica barra ammessa è nei simboli delle unità come `\mathrm{m^3/s}`); le equazioni da soddisfare insieme in sistema con la graffa; nelle schede ogni traccia dice "in figura" e la figura dei dati segue subito il testo.
6. Figure: rendi tutte le figure con `node strumenti/anteprima_figure.mjs /tmp/lavoro/verifica-idraulica-<slug>/figure.png <file…>` dalla radice del repository e guarda il PNG (se è molto lungo, dividi i file in più chiamate): livelli, quote e diametri coerenti con il testo, piezometrica sopra la condotta dove la pressione è positiva e sotto il piano dei carichi, linea dei carichi totali sopra la piezometrica, diagramma di pressione con le frecce rivolte verso la superficie e il vertice sul pelo libero, sponde dei canali disegnate come due regioni distinte, nessuna etichetta sovrapposta in modo illeggibile, nessun risultato scritto nella figura dei dati. Correggi quelle sbagliate.
7. Correggi direttamente ogni errore con modifiche minime, mantenendo lo stile (italiano da manuale, connettivi espliciti, grassetto e corsivo come da guida). Se un esercizio è irrimediabilmente sbagliato, cambia i dati e rifallo tutto, ricontrollandolo. Le correzioni di forma sono puntuali: niente riscritture estese.

## Rapporto (breve, in italiano)
Numero di esercizi e tracce verificati, elenco degli errori trovati e corretti (file, cosa era sbagliato, correzione), figure corrette, notazioni uniformate, eventuali dubbi non risolti.
