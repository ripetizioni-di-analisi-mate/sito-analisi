# Revisione indipendente: gruppi funzionali

Revisione eseguita leggendo la teoria, tutte le 10 schede svolte (20 esercizi), le 14 tracce e i 14 quiz: 39 file. Sono stati controllati prodotti, connettività, classi funzionali, conservazione di atomi e cariche, condizioni indicate e unicità delle alternative corrette. Nessun contenuto didattico è stato modificato in questa revisione.

## Esito

Non sono stati trovati risultati finali chimicamente errati nelle 20 soluzioni svolte o nelle 14 tracce. Tutti i 14 quiz hanno una sola alternativa corretta e la chiave dichiarata coincide con la risposta ricavata indipendentemente. Le posizioni corrette sono 1,2,3,4,1,2,3,4,1,2,3,4,1,2.

La versione attuale della Claisen precisa correttamente almeno due idrogeni alfa per l'autocondensazione classica sostenuta dalla deprotonazione del prodotto; è presente anche un esempio biochimico di condensazione tra tioesteri. L'idrolisi delle ammidi distingue correttamente prodotti acidi e basici. La decarbossilazione termica dell'acetoacetico è distinta da quella ossidativa del piruvato. Le quantità chinone/chinolo sono corrette.

## Correzioni e completamenti puntuali consigliati

### 1. Esempi biologici di tautomeria poco sviluppati

File `src/content/teoria/chimica-semestre-filtro/gruppi-funzionali.md`, blocco `#tautomeria-aldolica`.

Il fosfoenolpiruvato ha una spiegazione del collegamento tra enolo e stabilizzazione del piruvato. Per citosina e urato il testo si limita invece a nominare l'esistenza di tautomeri; non identifica i gruppi che cambiano. Il BRIEF richiede spiegazioni reali dei temi e non un semplice richiamo nominale.

Completamento suggerito, in poche frasi: nella citosina distinguere forme cheto-amminiche, enol-amminiche e cheto-imminiche; spiegare che la conversione C=O/C–OH e quella NH2/=NH cambiano disposizione dei donatori e accettori di legame a idrogeno. Per l'acido urico indicare che nelle forme lattame/lattime un gruppo carbonilico può essere rappresentato come C–OH con contemporaneo trasferimento protonico e modifica dei doppi legami nell'anello. Mantenere l'attuale distinzione tra tautomeria e deprotonazione ad urato. Non serve introdurre percentuali o prevalenze dipendenti da condizioni non assegnate.

### 2. Precisare la condizione della disidratazione ad alchene

Stesso file, blocco `#reazioni-alcoli`.

La frase generale sulla disidratazione ad alchene è limitata alle condizioni adatte ma non esplicita il requisito strutturale. Aggiungere che serve un idrogeno sul carbonio beta rispetto a quello che porta OH. Per esempio l'etanolo può dare etene; il metanolo non possiede un carbonio beta e non può produrre un alchene con questo schema. La precisazione evita di interpretare la frase come proprietà di qualunque alcol.

### 3. Locuzione alfa/beta nella spiegazione dell'acetoacetico

File `src/content/svolti/chimica-semestre-filtro/gruppi-funzionali/10.md`, spiegazione dell'Esercizio 2.

Il risultato propanone + CO2 è corretto. La frase «Il carbossile è in beta rispetto al gruppo chetonico» usa però il riferimento di numerazione al contrario rispetto alla nomenclatura dei beta-chetoacidi. Sostituire con «Il gruppo chetonico si trova sul carbonio beta rispetto al carbossile». In CH3–CO–CH2–COOH il carbonio carbossilico è C1, CH2 è C2/α e il carbonile chetonico è C3/β.

### 4. Riferimenti teorici incompleti in quattro schede miste

Le risposte sono corrette, ma i collegamenti dell'intera scheda citano solo la teoria dell'Esercizio 1. Integrare il frontmatter `teoria`:

- svolti/3.md: aggiungere `eteri-epossidi` per l'apertura dell'ossirano;
- svolti/7.md: aggiungere `tautomeria-aldolica` per la coppia propanone/enolo;
- svolti/8.md: aggiungere `carbossilici` per la neutralizzazione dell'acido propanoico;
- svolti/10.md: aggiungere `lattoni-decarbossilazione` per l'acido acetoacetico.

Si tratta di completamenti dei rimandi, non di ancore inesistenti.

## Copertura del BRIEF

Presenti: alcoli/fenoli/tioli, classificazione e proprietà, ossidazione/disidratazione/sostituzione; eteri/tioeteri/epossidi; ammine/basicità/nucleofilicità/sali/alchilazione/colina/nitrosammine; aldeidi/chetoni e addizioni/riduzioni/ossidazioni; emiacetali/emichetali/acetali/chetali/immine; idrogeni alfa/aldolica/tautomeria, con il completamento richiesto al punto 1; chinoni/ubichinone; carbossilici e derivati, incluse anidridi/tioesteri/ammidi/acilfosfati; salificazione/Fischer/idrolisi/transesterificazione; Claisen e tioesteri; lattoni e decarbossilazioni.

## Verifiche indipendenti ulteriori

Due controlli delle moli di elettroni con `decimal.Decimal`; sette bilanci elementari ricalcolati in Python (addizione aldolica, disidratazione aldolica, decarbossilazione, idrolisi basica dell'acetammide, idratazione dell'ossirano, esterificazione e formazione dell'immina). Tutti superati.

Fonti consultate per verifiche puntuali:

- OpenStax, Organic Chemistry, §23.7, fonte originale del testo: https://openstax.org/books/organic-chemistry/pages/23-7-the-claisen-condensation-reaction
- Lobsiger e Leutwyler, studio sperimentale sui tautomeri della citosina, J. Phys. Chem. Lett. 2012, DOI 10.1021/jz301719h, scheda PubMed: https://pubmed.ncbi.nlm.nih.gov/26290991/

Le fonti sono state usate per confermare fatti chimici, senza copiarne testo, figure o esercizi. La revisione non include una nuova compilazione Astro né la verifica visiva, di competenza dell'integrazione.
