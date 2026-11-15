# Biomolecole — rapporto dell’autore

Revisione del 15 novembre 2026. Autore: agente `bio_segnalazione`. Scrittura e autocontrolli conclusi; materiale pronto per la verifica scientifica e linguistica di un agente distinto. La presente sezione non costituisce una verifica indipendente. Nessun commit, build Astro o pubblicazione eseguito dall’autore.

## Materiale e conservazione

Sono presenti 115 Markdown per lingua: una teoria, 10 schede con due esercizi ciascuna, 14 tracce e 90 domande a scelta multipla. Sono conservati tutti i 23 identificatori della teoria originale e i riferimenti associati. Le prime tre schede svolte sono gratuite in entrambe le lingue; le altre sette mantengono l’accesso riservato.

La teoria conserva i contenuti validi della versione italiana iniziale e li amplia: 10 sezioni principali, 4.152 parole IT e 4.090 EN secondo il contatore del validatore. Comprende 11 figure per lingua. I 28 SVG originali sono 11 coppie teoriche e tre ulteriori coppie usate negli esercizi, con le denominazioni della soluzione rimosse dalle tavole che costituiscono dati da interpretare. Le formule condensate dichiarano le omissioni di stereochimica; le proiezioni di Fischer e Haworth rappresentano esplicitamente le informazioni necessarie all’assegnazione.

## Copertura dell’unità 7 MUR

Il confronto è stato eseguito con l’unità 7 del syllabus ufficiale MUR 2026/27 di Chimica e propedeutica biochimica, conservato in `qa/chimica-syllabus.txt` e nel PDF corrispondente. La copertura comprende:

- I venti amminoacidi standard, nomi, sigle, formule delle catene laterali e proprietà; nove essenziali, dipendenza dai precursori, convenzione di Fischer, D/L, R/S, eccezione della cisteina, glicina e stereocentri di isoleucina e treonina; zwitterioni, equilibri acido-base e punto isoelettrico.
- Formazione del peptide mediante aminolisi di un estere amminoacidico, bilancio con liberazione di alcol, orientazione della sequenza, risonanza e planarità; quattro livelli delle proteine, legami a idrogeno, interazioni non covalenti e disolfuri.
- Monosaccaridi, nomenclatura, isomeria costituzionale, stereoisomeria, epimeri, anomeri e tautomeria; Fischer, ciclizzazione, Haworth, mutarotazione, ossidazione e riduzione; Maillard, base di Schiff e prodotto di Amadori, condensazione e legame glicosidico; disaccaridi riducenti e non riducenti, oligosaccaridi, amminozuccheri, amido, glicogeno, cellulosa e glicosamminoglicani.
- Acidi grassi saturi e insaturi, posizione dei doppi legami, nomenclatura Δ e ω, essenziali, isomeria cis/trans, proprietà fisiche e idrogenazione; triacilgliceroli, idrolisi e saponificazione; glicerofosfolipidi, ceramide, sfingomielina e glicolipidi; colesterolo, ormoni steroidei, acidi biliari e vitamina D.
- Purine e pirimidine, nucleosidi e nucleotidi, siti del legame N-glicosidico, ATP e bilancio energetico dell’idrolisi, NAD/NADH e FAD/FADH₂; legame fosfodiestere, polarità, complementarità e differenze fra DNA e RNA.
- Glicazione e altre modificazioni non enzimatiche, deaminazione di citosina e 5-metilcitosina; radicale idrossilico, danni a proteine, lipidi e DNA, propagazione della perossidazione lipidica; glutatione, tocoferolo e carotenoidi, distinguendo trasferimento di elettroni, stabilizzazione del radicale e disattivazione fisica dell’ossigeno singoletto.

## Esercizi, tracce e quesiti

I 20 esercizi per lingua espongono dati, ragionamento, calcolo quando pertinente, controllo del risultato e interpretazione. La mediana è 247 parole IT e 237 EN per esercizio. I casi comprendono modifiche delle catene laterali, priorità CIP, carica media e specie prevalente, masse dei peptidi e aminolisi, dissociazione di oligomeri e disolfuri, epimeri e anomeri, rotazione ottica, idrolisi di disaccaridi, grafi di glucani, GAG, saponificazione, complementarità e bilanci redox.

Le 14 tracce sono autonome e dotate di soluzione motivata; le prime 14 domande mantengono la corrispondenza tematica con esse. I 90 quiz alternano interpretazione strutturale, perturbazione, conteggio, calcolo, ipotesi e confronto fra processi. La revisione dell’autore ha sostituito distrattori estranei con errori pertinenti e ha eliminato un secondo quesito quasi equivalente sull’impacchettamento cis/trans, introducendo un caso sulle proprietà anfipatiche degli acidi biliari. Le spiegazioni sono state riallineate alle alternative effettive; mediana 49 parole IT e 46 EN.

Le risposte hanno distribuzione 23/23/22/22, permutazione fissa non ciclica identica nelle due lingue e al massimo tre risposte consecutive nella stessa posizione. La verifica sul file effettivo conferma che ogni permutazione conserva l’identità della risposta corretta. Il seed finale è `2026111508`.

## Fonti consultate

Oltre al programma ufficiale MUR, sono stati consultati i seguenti riferimenti per i punti di nomenclatura e per i meccanismi più delicati. I casi numerici, le spiegazioni e gli SVG sono originali.

- IUPAC Gold Book, [convenzione di Fischer–Rosanoff](https://goldbook.iupac.org/terms/view/F02392/plain): configurazione relativa D/L.
- IUPAC, [Nomenclature of Carbohydrates, sezioni 2-Carb-6 e 2-Carb-7](https://iupac.qmul.ac.uk/2carb/06n07.html): forme cicliche, proiezioni e configurazione anomerica; [Blue Book, P-10](https://iupac.qmul.ac.uk/BlueBook/P10.html) per la nomenclatura dei prodotti naturali.
- NCBI, *Essentials of Glycobiology*, [Monosaccharide Diversity](https://www.ncbi.nlm.nih.gov/books/NBK579981/): diversità dei monosaccaridi, relazioni stereochimiche e rappresentazioni.
- Mori e Manning, 1986, [studio sperimentale sulla formazione della base di Schiff e del prodotto di Amadori](https://pubmed.ncbi.nlm.nih.gov/3963373/), DOI `10.1016/0003-2697(86)90426-4`.
- Di Mascio e collaboratori, 1990, [Carotenoids, tocopherols and thiols as biological singlet molecular oxygen quenchers](https://pubmed.ncbi.nlm.nih.gov/2088803/), DOI `10.1042/bst0181054`: differenza fra disattivazione fisica e reazione chimica.
- NCBI, [Biochemistry, Antioxidants](https://www.ncbi.nlm.nih.gov/books/NBK541064/) e [rassegna sui sistemi di difesa antiossidante](https://pubmed.ncbi.nlm.nih.gov/1985387/): contesto del ruolo dei tioli e degli antiossidanti non enzimatici. Questi ultimi sono riferimenti di sintesi. Il lavoro di Di Mascio del 1990 è classificato come review in PubMed; lo studio di Mori e Manning è invece un lavoro sperimentale. Questa distinzione bibliografica è stata precisata dal revisore indipendente.

## Controlli effettivamente eseguiti

Il comando `node strumenti/verifica-semestre-filtro-bilingue.mjs chimica-semestre-filtro biomolecole`, con salvataggio dell’HTML mediante `RENDER_DIR`, ha reso tutti i 230 Markdown e 916 formule: zero errori e zero avvisi. Il controllo include quantità, YAML, ancore, riferimenti, accesso, direttive, figure raggiungibili, quattro opzioni distinte, chiavi corrette e distribuzione delle risposte.

Un secondo controllo dell’autore ha confrontato tutte le 115 coppie: metadati funzionali uguali, ordine delle formule identico dopo normalizzazione di quattro etichette tradotte, tutte le 23 ancore originali preservate, assenza di caratteri di controllo indesiderati e di spazi finali. Il confronto dei file effettivi con il registro dei quiz conferma enunciati, spiegazioni, alternative e identità delle risposte. I decimali LaTeX mantengono in questa consegna la notazione con virgola in entrambe le lingue; la localizzazione inglese può adottare il punto senza cambiare i valori.

Sono stati eseguiti 54 controlli aritmetici e stechiometrici separati dal testo di composizione, usando `Decimal` per i bilanci decimali e tolleranze esplicite per le potenze: pI, frazioni di protonazione, carica media, masse dei peptidi, disolfuri, stereoisomeri, rotazione ottica, idrolisi, ramificazioni, cariche dei GAG, nomenclatura ω, idrogenazione, saponificazione, accoppiamento energetico, legami fosfodiestere e a idrogeno, elettroni e glutatione. Controllate anche due sequenze complementari inverse. Questi sono autocontrolli dell’autore, non una seconda revisione umana o di agente distinto.

Tutti i 28 SVG sono XML validi, renderizzati con Sharp e ispezionati a larghezze 350 e 760 px: 56 immagini. Corrette le posizioni delle etichette della curva di carica, i numeri nelle Haworth e l’allineamento dei legami verticali nei lipidi, poi ricontrollate le rese. Le tre coppie per gli esercizi sono state esaminate separatamente per evitare di mostrare direttamente la denominazione richiesta dal quesito. Il controllo del diff sugli spazi è passato.

Le evidenze riproducibili sono in `qa/chimica-semestre-filtro/biomolecole/`: `validation.json`, `author-check.py`, `author-check.json`, registro delle domande e della permutazione, HTML e immagini di controllo. Gli script iniziali di composizione non devono essere rieseguiti dopo le correzioni editoriali: i Markdown e SVG effettivi sono la versione da revisionare.

## Ipotesi e limiti da conservare nella revisione

Il pI di amminoacidi con tre gruppi ionizzabili è presentato come approssimazione fondata sui due equilibri che delimitano la specie a carica zero. La glicina è trattata come sistema diprotico ideale diluito; la curva usa le tre frazioni e distingue carica media da specie prevalente. I conteggi dei glucani assumono un grafo ad albero, ramificazioni binarie ed estremità riducente libera. L’equazione della miscela anomerica assume additività della rotazione alle stesse condizioni. Il conto dei legami a idrogeno usa coppie Watson–Crick canoniche; i bilanci redox separano sistemi diversi e non implicano trasferimenti diretti non specificati. Il glutatione può reagire direttamente con alcuni ossidanti, ma questo non attribuisce a ogni coppia la stessa velocità né sostituisce il ruolo degli enzimi.

Restano al revisore distinto la verifica indipendente completa e al coordinatore il controllo delle pagine Astro complete e la build della materia. Non sono state osservate ulteriori anomalie scientifiche, numeriche o di resa delle figure negli autocontrolli descritti.


## Verifica indipendente completa — bio_genoma

Revisore distinto dall’autore: agente `bio_genoma`, 15 novembre 2026. La verifica è stata eseguita sui file congelati dall’autore, salvandone testo e hash prima di qualsiasi correzione. Sono stati letti integralmente tutti i **230 Markdown**: le due teorie, le 20 schede bilingui con complessivi 40 esercizi, le 28 tracce con soluzione e tutti i 180 quiz. Il confronto dell’inglese ha incluso enunciati, alternative, spiegazioni, formule, metadati funzionali e riferimenti. Non si tratta della ripetizione degli autocontrolli dell’autore.

### Risultati scientifici e correzioni

La verifica dell’intera unità 7 MUR conferma la copertura dei contenuti indicati sopra. Sono state ricontrollate le venti catene laterali, le nove essenziali, le priorità CIP e l’eccezione L-cisteina/R, le configurazioni dei carboidrati, la carica dei GAG, i siti di esterificazione e amidazione dei lipidi, le basi e i collegamenti degli acidi nucleici. I modelli dichiarati di carica media, pI approssimato, additività della rotazione e conteggio dei glucani sono coerenti con le soluzioni.

Sono state apportate queste correzioni effettive, in entrambe le lingue:

- **Teoria:** precisato che le formule con NH₂/NH₃⁺ descrivono amminoacidi con ammina primaria e che la prolina protonata porta due H sull’azoto. Chiarito che l’accoppiamento all’idrolisi dell’ATP richiede un meccanismo condiviso, oltre al bilancio di energia libera favorevole.
- **Scheda 2:** eliminata l’ambigua istruzione di portare H indietro «con una sola inversione» nella Fischer. La soluzione distingue ora un cambio del punto di vista dallo scambio di due gruppi, che invertirebbe la configurazione.
- **Schede 1 e 6:** reso anonimo il testo alternativo della figura delle catene R₁/R₂; spostata la Fischer già denominata di glucosio/mannosio nella spiegazione, per evitare di anticipare il riconoscimento richiesto nell’enunciato.
- **Quiz 20, 27, 39, 66, 77 e 84:** sostituiti distrattori deboli con errori pertinenti su conformazione e configurazione, localizzazione della carica del guanidinio, reattività del C6, ammonio quaternario, ossidrili dello scheletro nucleotidico e distinzione fra radicale fenossilico e ione fenossido. Le spiegazioni sono state aggiornate per confutare le nuove alternative.
- **Quiz 33, 40, 52 e 87:** precisate rispettivamente la distinzione fra segno ottico e serie D/L, la formazione dello stereocentro al C2 nella riduzione del fruttosio, il conteggio delle estremità riducenti e il verso corretto della semireazione GSH/GSSG. Rimossi riferimenti a distrattori che non comparivano più nelle domande.
- **Localizzazione inglese:** convertite 212 virgole decimali LaTeX in punti, distribuite in 22 file. Nessun valore è cambiato; le virgole che separano posizioni strutturali o cariche sono rimaste tali.

Le correzioni interessano **48 Markdown** rispetto alla consegna congelata; nessun SVG richiedeva modifiche. Tutte le 90 chiavi e i testi delle rispettive risposte corrette italiane sono invariati. Le alternative rimangono nello stesso ordine in IT e EN. La distribuzione è 23/23/22/22, con al massimo tre posizioni uguali consecutive; non sono emerse ulteriori ambiguità o duplicazioni da correggere nella lettura completa.

### Controlli indipendenti riproducibili

Il revisore ha scritto ed eseguito `controllo-indipendente.py`, separato dagli script dell’autore. Gli **84 controlli aritmetici, atomici e di carica** sono passati: pI, frazioni e carica media, masse dei peptidi, bilancio atomico dell’aminolisi dell’estere, disolfuri, miscela anomerica, idrolisi del lattosio, alberi di glucani, GAG, idrogenazione, saponificazione anche per elementi, complementarità, fosfodiesteri, legami a idrogeno, accoppiamento energetico e bilanci redox.

La curva del pI è stata verificata direttamente nei due SVG: **482 punti** confrontati con la distribuzione diprotica della glicina, con errore massimo inferiore a 0,0051 unità SVG, compatibile con l’arrotondamento delle coordinate. Tutti i **28 SVG** sono stati nuovamente renderizzati e ispezionati a **390 e 780 px**, per 56 rese. La verifica comprende formule e valenze, orientazione cis/trans, convenzione di Fischer, OH delle Haworth, trasformazione Schiff/Amadori, connessioni O/N dei lipidi e fosfodiestere 3′–5′. Non sono state osservate sovrapposizioni o troncamenti; la geometria delle 14 coppie linguistiche coincide.

Il confronto automatico delle **115 coppie** conferma 458 formule per lingua identiche dopo normalizzazione del separatore decimale e di quattro etichette tradotte, tutte le **23 ancore originali** preservate, metadati funzionali corrispondenti e assenza di caratteri di controllo. Le prime tre schede rimangono gratuite. Il controllo degli spazi nel diff è passato.

Eseguito nuovamente il comando `node strumenti/verifica-semestre-filtro-bilingue.mjs chimica-semestre-filtro biomolecole`, con HTML del revisore: **230 file resi, 916 formule, zero errori e zero avvisi**. Teoria finale: 4.206 parole IT e 4.144 EN secondo il validatore. Le evidenze indipendenti sono in `qa/chimica-semestre-filtro/biomolecole/revisore-bio-genoma/`: `baseline-review.json`, `correzioni.py/json`, `controllo-indipendente.py`, `independent-check.json`, `validation.json`, HTML e le 56 immagini di controllo.

### Fonti consultate dal revisore

Il confronto con il programma è stato svolto sull’unità 7 del PDF ufficiale e della trascrizione `qa/chimica-syllabus.txt`. Per i punti delicati sono state consultate direttamente:

- [IUPAC, nomenclatura degli amminoacidi, 3AA-3–3AA-5](https://iupac.qmul.ac.uk/AminoAcid/AA3t5.html) e [Blue Book P-10](https://iupac.qmul.ac.uk/BlueBook/P10.html): convenzione di Fischer, D/L, R/S e cisteina.
- [Gallas e collaboratori, 2012, *The Amadori rearrangement as glycoconjugation method*](https://www.beilstein-journals.org/bjoc/articles/8/185), DOI `10.3762/bjoc.8.185`: studio originale per connettività del prodotto 1-amminodeossichetoso e riarrangiamento.
- [Di Mascio, Kaiser e Sies, 1989](https://pubmed.ncbi.nlm.nih.gov/2802626/), DOI `10.1016/0003-9861(89)90467-0`: studio originale sulla disattivazione fisica dell’ossigeno singoletto da parte dei carotenoidi. È distinto dalla review del 1990 citata dall’autore.
- [*Spectra and structure of alpha-tocopherol radicals produced in anoxic media*](https://pubmed.ncbi.nlm.nih.gov/1665834/): misure ESR e fotolisi per la natura fenossilica del radicale prodotto dalla perdita dell’idrogeno fenolico.
- [*Essentials of Glycobiology*, proteoglicani e GAG](https://www.ncbi.nlm.nih.gov/books/NBK453033/): riferimento di sintesi per ialuronano, cheratan solfato e composizione delle unità ripetute, distinto dagli studi originali precedenti.

**Esito della revisione: superata dopo le correzioni documentate. Capitolo congelato per l’integrazione.** Il revisore non ha eseguito build Astro, commit o pubblicazione; la verifica delle pagine complete e il rilascio restano al coordinatore.
