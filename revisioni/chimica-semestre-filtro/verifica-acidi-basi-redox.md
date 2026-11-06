# Verifica dell'unità acidi-basi-redox

Data: 6 novembre 2026. Asset originali in italiano, materia `chimica-semestre-filtro`, unità `acidi-basi-redox`.

## Contenuti consegnati

- Una teoria con 10 sezioni e 18 ancore.
- Dieci schede svolte, due esercizi ciascuna; prime tre schede gratuite.
- Quattordici tracce con risposta finale nel blocco soluzione.
- Quattordici domande a tempo con quattro opzioni e spiegazione; posizioni corrette distribuite 4, 4, 3, 3.

La teoria tratta Arrhenius, Brønsted-Lowry, Lewis, specie anfiprotiche, Kw/pH/pOH, indicatori, Ka/Kb/pKa/pKb, specie forti/deboli/poliprotiche, sali/idrolisi, neutralizzazione, tamponi/capacità/Henderson-Hasselbalch, bicarbonato/fosfati/proteine, acidosi/alcalosi come direzioni di processo, solubilità e pH di ossalato/fosfati/urato, redox/bilanciamento, celle/potenziali/Nernst/Gibbs, ossigeno/respirazione/Fenton/bilancio di Haber-Weiss.

## Controlli eseguiti

- Lettura delle regole e degli esempi richiesti dal brief; nessun blocco percorso o comando mhchem.
- Parsing YAML di tutti i 39 file; controllo delle ancore richiamate nel frontmatter e dei collegamenti alla propria teoria.
- Controllo del numero di schede, esercizi, tracce, opzioni distinte e spiegazioni; verifica dei flag gratis.
- Rendering di tutte le 555 espressioni matematiche con KaTeX, `throwOnError: true`: nessun errore.
- Ricalcolo di 25 risultati con Python e radici polinomiali indipendenti in Sympy per gli equilibri deboli. I valori comprendono tutti i pH, il rapporto fosfato, il Kb inverso, Gibbs e le correzioni di Nernst presenti nei materiali. Arrotondamenti coerenti.
- Verifica con vettori stechiometrici della conservazione di atomi e carica per permanganato/ferro, dicromato/ioduro, Fenton e Haber-Weiss.
- Rilettura delle domande qualitative e delle alternative: una sola corretta per le ipotesi assegnate.

## Ipotesi rese esplicite

Attività adimensionali e loro approssimazione diluita; temperatura per Kw e coefficiente di Nernst; eventuale esclusione dell'autoprotolisi; validità dell'approssimazione delle piccole dissociazioni; stato chiuso del bicarbonato anfiprotico rispetto al modello aperto fisiologico; distinzione tra potenziali standard chimici e valori a pH fissato; reazione diretta di Haber-Weiss lenta e ciclo mediato dal ferro. Gli esempi biologici descrivono equilibri e trasformazioni, senza istruzioni terapeutiche.

## Fonti primarie di verifica

- Programma MUR 2026/2027: https://www.mur.gov.it/sites/default/files/2026-06/Syllabus%20Chim.Prop_.Bioch_.%20-%20finale-%202026.pdf
- Definizione IUPAC di pH: https://goldbook.iupac.org/terms/view/P04524
- Definizione IUPAC di costante acida: https://goldbook.iupac.org/terms/view/15441
- Equazione di Nernst IUPAC: https://goldbook.iupac.org/terms/view/09068
- Modello acido-base aperto e valori del bicarbonato a 37 °C: https://pmc.ncbi.nlm.nih.gov/articles/PMC4666298/
- Distinzione tra Fenton e bilancio/ciclo di Haber-Weiss: https://pubmed.ncbi.nlm.nih.gov/11642713/

## Limiti del controllo

Questo controllo riguarda i contenuti dell'unità. La compilazione Astro, l'integrazione nel catalogo, la resa della pagina e la pubblicazione sono affidate all'agente responsabile del sito.
