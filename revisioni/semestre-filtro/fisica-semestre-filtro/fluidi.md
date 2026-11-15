# Fluidi — rapporto autore

Data: 15 novembre 2026. Autore: agente `bio_flusso`. Contenuti congelati e disponibili per la revisione indipendente assegnata dal coordinatore; questo rapporto non sostituisce tale revisione.

## Materiali consegnati

- 230 Markdown: per ciascuna lingua, una teoria, 10 schede svolte, 14 tracce autonome e 90 domande a tempo.
- Teoria in 9 sezioni, con tutte le 11 ancore iniziali preservate nello stesso ordine. Il validatore conta 3148 parole italiane e 3120 inglesi. Rimossa la direttiva `percorso`.
- 23 esercizi dettagliati per lingua, ciascuno con un solo blocco di spiegazione. Conservati e approfonditi i 20 casi iniziali; aggiunti efflusso di Torricelli, profilo parabolico con Reynolds e sforzo alla parete, confronto sfera/cilindro/film di sapone. Accesso gratuito mantenuto soltanto per le schede 1–3.
- 14 tracce trasformate in richieste aperte con ragionamento e controlli. I dati e i temi iniziali sono mantenuti, estendendoli con confronti, bilanci e interpretazioni.
- 90 quiz distinti per lingua: conservato il nucleo dei primi 14 con spiegazioni ampliate; sostituiti i ricicli numerici dei successivi 76. Sono presenti conversioni, lettura di pendenze, inferenze, confronto di modelli, vincoli imposti e dati insufficienti. Le chiavi sono 23/23/22/22, con seed 2026111505 e stessa permutazione IT/EN; sequenza massima di chiavi uguali pari a 4, nessun ciclo 1234.
- 20 SVG originali, 10 per lingua: 9 nella teoria e un manometro aggiuntivo negli svolti, con ulteriori riusi pertinenti. Le figure scientifiche hanno geometria identica nelle due lingue; testi, titoli accessibili, didascalie e alt sono tradotti. I decimali inglesi usano il punto.

## Copertura del programma MUR, unità 3

| Ambito | Sviluppo |
| --- | --- |
| Stati e grandezze | Fluido/solido, incomprimibilità, densità, pressione scalare e forza normale, pressione assoluta/relativa e conversioni. |
| Idrostatica | Bilancio della colonna, Stevino, recipienti e pareti, manometro con più liquidi, barometro con pressione superiore eventualmente non nulla. |
| Pascal e Archimede | Trasmissione degli incrementi, correzione per la quota, volume e lavoro del torchio, galleggiamento, spinta e peso apparente. |
| Idrodinamica ideale | Portata media, conservazione della massa anche nei fluidi viscosi, rami e accumulo, Bernoulli lungo una linea di corrente, efflusso, stenosi e aneurisma. |
| Viscosità e reti | Stazionario distinto da laminare, fluttuazioni turbolente, gradiente di velocità, Reynolds, Poiseuille con tutte le condizioni, profilo sviluppato, resistenze e potenza. |
| Superfici | Energia e forza superficiali, curvature principali, piano/cilindro/sfera, una o due interfacce, surfattante, risalita e depressione capillare. |

Sono esplicitati i limiti dei modelli della circolazione. La continuità non determina da sola la pressione; Poiseuille richiede di distinguere pressione imposta e portata imposta. Il contributo gravitazionale non viene omesso nei tubi verticali. Il fattore 2 della sfera è distinto dal conteggio delle interfacce del film di sapone. L’angolo di contatto è misurato attraverso il liquido.

## Fonti primarie e istituzionali consultate

- [MUR, syllabus Fisica 2026/2027](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_FISICA_%20finale%202026.pdf): lettura integrale della trascrizione locale `qa/fisica-syllabus.txt`, copertura specifica dell’unità 3.
- [NIST, SP 811, appendice B9](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9) e [appendice B8](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8): unità, pressione, atmosfera standard, mmHg convenzionale, volume e viscosità.
- [Rice University/OpenStax, Bernoulli](https://openstax.org/books/university-physics-volume-1/pages/14-6-bernoullis-equation): bilancio del lavoro di pressione e dell’energia lungo il flusso.
- [Rice University/OpenStax, viscosità e turbolenza](https://openstax.org/books/university-physics-volume-1/pages/14-7-viscosity-and-turbulence): sforzo viscoso, Poiseuille, profilo e resistenza del tubo orizzontale.
- [MIT, Advanced Fluid Dynamics, sezione 11](https://web.mit.edu/2.25/www/225_sect_11.html): significato meccanico ed energetico della tensione, interfacce, angolo di contatto e risalita.
- [TU Delft, Fluid dynamics](https://interactivetextbooks.tudelft.nl/nb1140/content/fluiddynamics.html): impostazione dell’equilibrio idrostatico e relazioni fra pressione, forze e proprietà del fluido.

Testi, domande e figure sono originali; non sono stati copiati esercizi da banche esterne.

## Controlli autore effettivamente eseguiti

`node strumenti/verifica-semestre-filtro-bilingue.mjs fisica-semestre-filtro fluidi`: PASS, 230 file resi, 1640 formule, nessun errore e nessun avviso. Il controllo aggiuntivo `check.mjs` usa parser Markdown e KaTeX con plugin del repository, verifica metadati, quattro opzioni uniche, accessi, direttive, figure presenti e confronto completo delle formule IT/EN normalizzando separatori decimali e la parola costante/constant.

Il ricalcolo separato `calcoli.py` ricostruisce dai dati 152 valori e bilanci di quiz, esercizi, tracce, esempi e geometrie. Controlla inoltre 724 punti dei path effettivi dei grafici nelle due lingue: 161 per profilo parabolico e 201 per curva capillare, per lingua. La tolleranza delle coordinate arrotondate è 0,003 unità SVG. Risultato PASS. Tutti i 20 SVG sono XML validi e hanno identica geometria IT/EN.

Renderizzati 40 PNG, tutti a 390 e 780 px, e ispezionate tutte le figure a entrambe le larghezze mediante 12 contact sheet e controlli singoli finali. Durante il controllo sono stati spostati il testo della velocità media, chiarita la coordinata con segno del profilo (`x`, con distanza radiale `s=|x|`) e resi inequivocabili i punti A/B del manometro. Nessun testo tagliato o sovrapposto nelle versioni finali.

Confrontate le 11 ancore originali anche nell’ordine, controllati caratteri di controllo, frazioni, link inglesi, decimali e assenza di rimandi alle lettere delle risposte. Migliorati quattro distrattori finali e allineato l’ordine dei dati in due passi inglesi. `git diff --check` pulito sul capitolo.

Evidenze: `qa/fisica-semestre-filtro/fluidi/`, con baseline dei 115 file iniziali, manifesto delle permutazioni, risultati dei controlli, immagini e hash dei 250 file didattici finali. I generatori iniziali non devono essere rieseguiti: i sorgenti consegnati contengono le correzioni finali documentate nel README della cartella QA.

## Passaggio alla revisione

Resta da eseguire la revisione indipendente completa del capitolo, incluse tutte le domande e le traduzioni. Build Astro integrata e verifiche sul sito spettano al coordinatore. L’autore non ha eseguito build, commit, modifiche a codice condiviso, cataloghi o pubblicazione.

## Revisione indipendente completa — conclusa e congelata

Revisore: agente `bio_genetica` (`/root/bio_genetica`), distinto dall’autore. Data: 15 novembre 2026. La revisione è iniziata soltanto dopo il congelamento esplicito dell’autore. Salvata una baseline autonoma con testo e SHA-256 di tutti i 230 Markdown, 20 SVG e di questo rapporto. Non sono stati rieseguiti i generatori dell’autore.

### Lettura e controllo scientifico

Letti integralmente tutti i 115 file italiani e i 115 inglesi: entrambe le teorie, tutte le 23 soluzioni distribuite nelle 10 schede per lingua, le 14 tracce con relativa soluzione, tutti i 90 quiz con le quattro alternative e la spiegazione. Verificati la copertura dell’intera unità 3 MUR, la traduzione e l’autonomia delle tracce.

Confermati i bilanci idrostatici, le pressioni assolute e relative, la distinzione fra spinta e peso, le correzioni di quota nel torchio, la conservazione di massa con o senza accumulo, i vincoli di Bernoulli e Poiseuille, la topologia delle reti e i vincoli della pompa. Nei fenomeni superficiali verificati distintamente curvature, numero delle interfacce, segno del menisco, angolo attraverso il liquido e limiti del modello del surfattante. Non sono stati trovati risultati numerici errati nei materiali consegnati.

I 90 quiz sono stati confrontati anche per obiettivo concettuale: nessuna coppia richiede la semplice sostituzione di numeri nello stesso quesito. Il controllo lessicale aggiuntivo, dopo normalizzazione dei numeri, ha somiglianza massima 0,669, fra quiz 17 e 23: misurano rispettivamente la conversione da pressione relativa ad assoluta e il bilancio del barometro con gas residuo. L’ispezione manuale comprende unicità della risposta corretta e plausibilità degli errori proposti.

### Correzioni effettive del revisore

- Teoria IT/EN: ricondotti i 21 segmenti di prosa, formule e figure esterni alle direttive a blocchi didattici, come richiesto da `GUIDA-CONTENUTI.md`. Conservati testo, nove sezioni e tutte le 11 ancore, nello stesso ordine. Precisato che è il moto nel condotto a essere stazionario.
- Quiz 8 e 39 IT/EN: esplicitato il regime stazionario del flusso; nel 39 indicata anche l’assenza di diramazioni. La geometria immobile del condotto, da sola, non stabilisce la stazionarietà del fluido.
- Quiz 9, 44 e 46 IT/EN: esclusi esplicitamente anche i contributi di turbine, oltre a quelli di pompe, nella forma semplice di Bernoulli.
- Quiz 51 IT/EN: specificato il modello quasi stazionario, con fluido incomprimibile e assenza di perdite o macchine. La spiegazione chiarisce che conservare la velocità della superficie libera non rende la relazione esatta per qualsiasi svuotamento rapido: i contributi non stazionari sono trascurati per ipotesi.
- Quiz 65 IT/EN: precisati moto stazionario incomprimibile, sezione costante, profili uguali agli estremi e assenza di macchine. Queste condizioni consentono di identificare il lavoro della caduta di pressione con la potenza dissipata senza contributi cinetici netti.
- Quiz 71 IT/EN: sostituite le tre alternative deboli con altre effettive ipotesi di Poiseuille; il testo ora assegna esplicitamente tutte le condizioni necessarie salvo lo sviluppo completo del profilo. La sola risposta corretta resta lo sviluppo mancante.
- Quiz 89 IT/EN: reso esplicito il liquido newtoniano e sostituite le tre alternative con errori pertinenti su pressione relativa, segno del contributo gravitazionale e falsa soglia di attrito statico.
- Quiz 63, 84 e 86 IT/EN: chiarito il fattore moltiplicativo rispetto al valore iniziale, migliorato un distrattore sull’angolo retto e specificata la misura dell’angolo attraverso il liquido.
- Uniformate le frazioni matematiche a `\dfrac`, incluse le frazioni annidate; mantenuti valori, unità, chiavi e ordine delle risposte. Le correzioni di notazione riguardano quiz e schede svolte 4, 7 e 9. I decimali inglesi conservano il punto.

Totale: 118 Markdown modificati rispetto alla baseline del revisore — 2 teorie, 6 schede svolte e 110 file di quiz; molte differenze riguardano soltanto la notazione delle frazioni. Nessuna traccia e nessun SVG modificati. Il rapporto è aggiornato separatamente.

### Verifiche indipendenti finali

Il nuovo script `independent-review/checks.py` ricalcola autonomamente **183 risultati numerici**, senza importare dati o funzioni dai generatori dell’autore: esempi della teoria, sottodomande delle 23 soluzioni, tutte le 14 tracce e risposte numeriche dei quiz. Sono inclusi bilanci alternativi, conversioni, rapporti, potenza e sforzo alla parete. Tutti i risultati corrispondono agli arrotondamenti dichiarati.

Lo stesso controllo confronta integralmente le formule delle **115 coppie IT/EN**, normalizzando soltanto il separatore decimale e `costante/constant`: parità completa. Ricontrollati tutti i 180 file di quiz per quattro alternative distinte e assenza di dipendenze dalle lettere delle opzioni. Le chiavi restano **23/23/22/22**, identiche nelle due lingue; massimo quattro chiavi uguali consecutive e nessun periodo da 1 a 20. Le 11 ancore sono invariate anche nell’ordine.

Tutti i **20 SVG** sono stati riletti come sorgente XML e renderizzati autonomamente a **390 e 780 px**. Ispezionate tutte le **40 rese**, raccolte in dieci tavole di confronto: titoli, assi, unità, etichette e traduzioni leggibili, nessun taglio o sovrapposizione. Confermata la geometria identica IT/EN. Ricontrollati quantitativamente le scale di pressione, l’immersione del cubo, le aree e le frecce di continuità, le barre energetiche e le colonne del manometro. Verificati tutti i **724 vertici** effettivi dei grafici parabolici e capillari con tolleranza inferiore a 0,002 unità SVG. Reti e interfacce di Laplace sono corrette anche nel conteggio topologico e geometrico.

Comando finale:

```text
node strumenti/verifica-semestre-filtro-bilingue.mjs fisica-semestre-filtro fluidi
```

Esito: **230 file resi, 1640 formule, zero errori e zero avvisi**. Le teorie finali contano 3289 parole italiane e 3248 inglesi secondo il validatore; ciascuna conserva nove figure distinte. Nessun errore nel controllo delle differenze di spaziatura del capitolo. Le prove automatiche documentate contano 2552 verifiche totali, delle quali 183 numeriche; il totale include controlli di formato formula per formula e non sostituisce la lettura scientifica.

### Fonti riaperte e nuove evidenze

Durante la revisione sono state riaperte le fonti istituzionali NIST B9, OpenStax su Bernoulli e viscosità, e MIT sezione 11 già elencate dall’autore. NIST conferma separatamente atmosfera standard e mmHg convenzionale. Per la distinzione fra Bernoulli stazionario e non stazionario è stata consultata inoltre la [lezione MIT sul flusso potenziale, sezione 3.4](https://web.mit.edu/fluids-modules/www/potential_flows/LecturesHTML/lec09/lecture9.html), che conserva il termine temporale nel caso generale. Il programma MUR è stato confrontato con la trascrizione ufficiale locale.

Evidenze autonome: `qa/fisica-semestre-filtro/fluidi/independent-review/`, contenente baseline, correzioni mirate, manifesti delle differenze, ricalcoli, confronto quiz, HTML del validatore, tutte le rese delle figure e manifesto finale degli hash. Non sono stati modificati altri capitoli, codice condiviso, cataloghi o prezzi; non sono stati eseguiti build, commit o pubblicazione.

**Stato finale: revisione indipendente conclusa; 230 Markdown, 20 SVG e rapporto congelati e consegnati al coordinatore per l’integrazione.**
