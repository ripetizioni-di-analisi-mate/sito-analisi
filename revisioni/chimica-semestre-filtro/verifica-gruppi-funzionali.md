# Verifica unità 6: gruppi funzionali

10 sezioni teoriche, 17 ancore, 39 file. Coperti alcoli/fenoli/tioli/eteri/tioeteri/epossidi, ammine e sali/colina/nitrosammine, carbonili e addizioni, acetali/immine, aldolica/tautomeria con esempi urato-citosina-fosfoenolpiruvato, chinoni e ubichinone, acidi/derivati acilici/esterificazione/idrolisi/transesterificazione, Claisen e tioesteri, lattoni e decarbossilazioni. Distinte idrolisi acida/basica e decarbossilazioni di alfa- e beta-chetoacidi.

## Controlli eseguiti

- Riletti teoria, tracce e alternative; verificati i prodotti organici in base a connettività, numero di carboni, gruppi funzionali, conservazione degli atomi e condizioni specificate.
- Controllati gli orientamenti CIP/Fischer, la distinzione fra configurazione assoluta e segno ottico, e il carattere condizionale dei modelli di reazione.
- Ogni unità contiene 1 teoria, 10 schede con 2 esercizi ciascuna, 14 tracce e 14 quiz. Le schede gratuite sono le prime 3.
- Validazione YAML sui 78 file delle due unità: 0 errori.
- Rese con KaTeX 368 formule delle due unità con `throwOnError: true`: 0 errori.
- Verificati tutti i rimandi `teoria` e i link delle spiegazioni rispetto alle ancore della rispettiva unità.
- Ogni quiz contiene 4 alternative testualmente distinte e una sola risposta corretta, distribuita fra le 4 posizioni; le spiegazioni chiariscono la scelta.
- Ricalcolati in Python i valori delle rotazioni ottiche, gli eccessi enantiomerici, i fattori di velocità e le quantità di elettroni; verificati separatamente i bilanci di combustione, addizione/disidratazione aldolica, decarbossilazione e idrolisi dell’acetammide.

## Limiti della verifica

La verifica chimica è una revisione interna dei contenuti; non è stata svolta una revisione da un docente terzo. La compilazione completa del sito e la verifica visiva sono gestite dal responsabile dell’integrazione. I quiz seguono il formato di allenamento a quattro alternative già presente sul sito, senza essere presentati come riproduzione del formato ministeriale.

## Correzioni dopo la revisione indipendente

Applicate le quattro modifiche puntuali richieste nella revisione `revisione-gruppi-funzionali.md`:

1. Sviluppata la spiegazione della citosina (cheto-amminica, enol-amminica, cheto-imminica) e del sistema acido urico/urato, distinguendo trasferimento protonico, ionizzazione e risonanza. Il motivo lattame/lattime è mostrato localmente, senza attribuire percentuali o prevalenze indipendenti dalle condizioni.
2. Esplicitata la presenza di un idrogeno sul carbonio beta per la disidratazione diretta dell’alcol ad alchene.
3. Corretto il riferimento di numerazione del beta-chetoacido nella spiegazione dell’Esercizio 2 della scheda 10.
4. Completati i rimandi teorici delle schede 3, 7, 8 e 10 con le ancore dell’Esercizio 2.

Fonti scientifiche primarie consultate per la correzione 1, senza riproduzione di testo o figure:

- Barone, *DFT Meets Wave-Function Composite Methods for Characterizing Cytosine Tautomers in the Gas Phase*, JCTC 2023, DOI 10.1021/acs.jctc.3c00465: https://pmc.ncbi.nlm.nih.gov/articles/PMC10413851/ . Conferma la classificazione dei tautomeri della citosina in cheto-amminici, enol-amminici e cheto-imminici; non si trasferiscono ai sistemi biologici le popolazioni calcolate in fase gassosa.
- Tang et al., *Tautomerism unveils a self-inhibition mechanism of crystallization*, Nature Communications 14, 561 (2023), DOI 10.1038/s41467-023-35924-3: https://www.nature.com/articles/s41467-023-35924-3 . Gli esperimenti e i calcoli sull’urato mostrano tautomeri a stato ionico fissato; pH e temperatura cambiano gli equilibri.
- Asami, Urashima e Saigusa, *Structural identification of uric acid and its monohydrates by IR-UV double resonance spectroscopy*, PCCP 2011, DOI 10.1039/C1CP22540E: https://pubmed.ncbi.nlm.nih.gov/22002599/ . L’acido urico neutro studiato nel fascio molecolare è identificato nella forma trichetonica; questo dato non è presentato come misura delle specie presenti in soluzione.

Verifica successiva alle modifiche: YAML sui cinque Markdown didattici modificati con 0 errori; KaTeX sulle loro 60 formule con 0 errori; tutte le otto ancore citate nei quattro frontmatter esistono. Ripetuto anche il controllo KaTeX sulle due unità organiche attuali (78 file, 373 formule, 0 errori); l’unità 5 non è stata modificata in questa revisione.
