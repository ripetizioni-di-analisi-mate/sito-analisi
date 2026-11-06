# Revisione scientifica indipendente: biomolecole

Data: 6 novembre 2026. Revisione effettuata leggendo la teoria e tutti i 38 file degli esercizi e delle domande dell'unità `biomolecole` della materia `chimica-semestre-filtro`. Nessun contenuto dell'autore è stato modificato.

## Esito

Non sono stati rilevati errori nei risultati numerici, nelle venti catene laterali, nelle assegnazioni stereochimiche o nelle chiavi dei quattordici quiz. Una traccia va precisata per rendere univoca l'identificazione del polisaccaride: vedere il rilievo seguente.

## Rilievo concreto e correzione proposta

**File:** `src/content/svolti/chimica-semestre-filtro/biomolecole/8.md`, esercizio 2, traccia alla riga 26 e spiegazione alla riga 35.

La traccia identifica un polisaccaride mediante l'alternanza di acido glucuronico e N-acetilglucosammina e l'assenza di solfati. La soluzione lo identifica come ialuronato. Questi soli dati descrivono anche altri polimeri, tra cui l'eparosano: la composizione monosaccaridica è uguale, ma i legami glicosidici sono diversi. La risposta attesa è corretta per l'ialuronato, mentre la traccia non ne specifica ancora la connettività distintiva.

**Modifica minima proposta della traccia:**

> Un polisaccaride lineare privo di gruppi solfato alterna acido D-glucuronico e N-acetil-D-glucosammina. Il glucuronato è legato alla glucosammina con un legame β(1→3), mentre la glucosammina è legata al glucuronato successivo con un legame β(1→4). Identificarlo, indicare se è un eteropolisaccaride e spiegare quale gruppo produce la carica negativa a pH 7.

La prima frase della spiegazione può diventare: «La composizione e i legami glicosidici indicati identificano l'ialuronato, forma deprotonata dell'acido ialuronico.» I restanti passaggi dell'esercizio restano corretti.

**Priorità:** precisazione puntuale della traccia per l'univocità scientifica; nessun risultato numerico da cambiare.

Fonti di verifica del confronto strutturale:

- Articolo di ricerca che confronta ialuronano ed eparosano con gli stessi monomeri ma legami differenti: https://pmc.ncbi.nlm.nih.gov/articles/PMC5458544/
- Struttura dell'ialuronano, testo di riferimento pubblicato su NCBI Bookshelf: https://www.ncbi.nlm.nih.gov/books/NBK579913/

## Controlli della teoria

- Le venti catene laterali e le sigle a una/tre lettere sono coerenti con gli amminoacidi indicati. Corrette le distinzioni Asp/Asn, Glu/Gln, tiolo della cisteina/tioetere della metionina, guanidinio dell'arginina e imidazolo dell'istidina.
- Corrette le cariche prevalenti delle catene a pH 7, la glicina achirale, la serie L nella Fischer assegnata, L-alanina S e L-cisteina R; isoleucina e treonina hanno un ulteriore stereocentro laterale.
- Il punto isoelettrico è calcolato con i due pKa che delimitano la forma neutra nelle ipotesi del testo; corretta la distinzione fra carica media e forma prevalente.
- Corretti orientazione N→C, bilancio formale dei peptidi, planarità ammidica, livelli delle proteine e disolfuri. Le domande sui disolfuri specificano la conservazione della sequenza, quindi il loro esito è coerente con il significato di struttura primaria adottato.
- Corrette epimeria glucosio/mannosio al C2 e glucosio/galattosio al C4, forme D/L, anomeri e mutarotazione, ossidazione del glucosio e riduzione a sorbitolo, tautomeria dei saggi riducenti, disaccaridi e amminozuccheri.
- Corretti i legami di amido/glicogeno/cellulosa, i GAG e l'eccezione del cheratan solfato rispetto all'acido uronico. La descrizione dell'ialuronato nella teoria è vera; il rilievo riguarda soltanto la deduzione univoca nella traccia svolta.
- Corretti notazione Δ/ω, effetto cis sull'impacchettamento a parità delle altre caratteristiche, saponificazione, ceramide/sfingomielina, fosfolipidi, colesterolo e derivazione della vitamina D dal 7-deidrocolesterolo.
- Corrette purine/pirimidine, nucleoside/nucleotide, ribosio/deossiribosio, tipi di legami nell'ATP, NAD/FAD, fosfodiesteri 3′–5′ e antiparallelismo del DNA. I conteggi distinguono il collegamento fosfodiestere dai due legami esterei del fosfato.
- Corretti Maillard/Amadori, deaminazione di citosina e 5-metilcitosina, bilancio GSH/GSSG, funzione del tiolo e del tocoferolo.

Verifica autorevole delle configurazioni e delle sigle: raccomandazioni IUPAC-IUB, https://iupac.qmul.ac.uk/AminoAcid/ e https://iupac.qmul.ac.uk/AminoAcid/AA3t5.html .

## Tutti i quiz

Le alternative sono state lette singolarmente. Ogni domanda ha una sola risposta corretta nelle condizioni specificate.

| File in `src/content/domande/chimica-semestre-filtro/biomolecole/` | Chiave verificata | Ragione |
| --- | --- | --- |
| `1.md` | 1 | CH2CONH2 identifica Asn |
| `2.md` | 2 | Fischer L della cisteina, α R |
| `3.md` | 3 | pI = (9,00 + 10,50) / 2 = 9,75 |
| `4.md` | 4 | 3 Ala meno 2 H2O = 231,23 g/mol |
| `5.md` | 1 | 8 cisteine danno 4 disolfuri; sequenza conservata |
| `6.md` | 2 | Glucosio/galattosio epimeri C4 |
| `7.md` | 3 | OH e CH2OH sullo stesso lato nel D-glucopiranosio: β |
| `8.md` | 4 | Ossidazione dell'aldeide: gluconico |
| `9.md` | 1 | Lattosio riducente e saccarosio non riducente |
| `10.md` | 2 | Cellulosa, omopolimero del glucosio β(1→4) |
| `11.md` | 3 | Tre equivalenti NaOH, quindi 0,180 mol |
| `12.md` | 4 | Acilazione ammidica della sfingosina: ceramide |
| `13.md` | 1 | Reverse complement 5′-TACGT-3′ |
| `14.md` | 2 | Citosina → uracile; 0,040 mol GSH → 0,020 mol GSSG |

## Ricalcoli e verifica dei file

Eseguiti con Python, aritmetica Decimal e reverse-complement indipendente:

- Punti isoelettrici 6,10; 2,90; 9,75.
- Masse molari Gly-Ala 146,14; pentapeptide 361,33; Ala-Ala-Ala 231,23 g/mol.
- Saponificazione: 0,080 mol di triacilglicerolo richiedono 0,240 mol di NaOH; 0,060 mol richiedono 0,180 mol.
- NADH e FADH2 dell'esercizio svolto cedono complessivamente 0,100 mol di elettroni; riduzione del perossido richiede 0,030 mol GSH; 0,040 mol GSH producono 0,020 mol GSSG.
- Reverse complement delle sequenze AGTCC e ACGTA rispettivamente GGACT e TACGT.
- Conteggi di legami e ponti controllati: n−1 per catene lineari, due cisteine per disolfuro.
- Parsing YAML, ancore del frontmatter, 4 alternative distinte per quiz e due esercizi per scheda: nessuna anomalia.

## Copertura del brief

Tutte le famiglie richieste nel brief sono presenti con spiegazioni sostanziali: venti amminoacidi e loro proprietà, stereochimica e pI, peptidi e proteine, monosaccaridi/stereoisomeri/reazioni, disaccaridi/oligosaccaridi/amminozuccheri, polisaccaridi/GAG, acidi grassi/triacilgliceroli/lipidi complessi/steroidi, nucleotidi/ATP/NAD/FAD/DNA/RNA, glicazione/deaminazione/radicali/antiossidanti. Nessuna lacuna di programma rilevata.
