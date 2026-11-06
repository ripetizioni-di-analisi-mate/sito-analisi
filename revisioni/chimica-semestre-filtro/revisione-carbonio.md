# Revisione scientifica indipendente: carbonio, idrocarburi e stereochimica

Letti integralmente tutti i 39 file: teoria, 10 schede con 20 esercizi svolti, 14 tracce e 14 quiz. Nessun contenuto è stato modificato da questa revisione.

## Esito

Configurazioni R/S ed E/Z, priorità CIP, relazioni enantiomeri/diastereoisomeri/epimeri, conteggi dei legami, nomenclatura dei casi proposti, bilanciamenti, leggi cinetiche e orientamenti delle reazioni risultano corretti. Ciascuno dei 14 quiz ha una sola alternativa corretta nelle condizioni della traccia e l'indice `corretta` la identifica. Non sono stati trovati risultati numerici errati.

### Correzione della traccia aperta

`src/content/dafare/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/12.md` chiede «Quale sequenza presenta due doppi legami coniugati?» senza presentare sequenze fra cui scegliere. Il corrispondente quiz è completo e corretto, ma la traccia aperta dipende da alternative assenti. Testo proposto: «Scrivere una sequenza di quattro atomi di carbonio con due doppi legami coniugati.» La soluzione attuale C=C-C=C resta valida.

### Copertura da completare

Nel capitolo di teoria, `#intermedi` descrive rottura omolitica e radicali, ma non espone una reazione radicalica a catena. Per rendere esplicito il punto del syllabus relativo alle reazioni radicaliche, aggiungere un esempio compatto di clorurazione del metano:

- Iniziazione fotochimica: Cl2 → 2 Cl·.
- Propagazione: Cl· + CH4 → HCl + CH3·; CH3· + Cl2 → CH3Cl + Cl·.
- Terminazione, per esempio: Cl· + Cl· → Cl2.

Una frase dovrebbe spiegare che la propagazione rigenera un radicale, mentre la terminazione consuma due radicali. L'esempio descrive la monosostituzione; la reazione reale può proseguire a prodotti ulteriormente clorurati. Queste formule qui sono una specifica per il parent e vanno rese in KaTeX con il sistema già usato dal sito.

### Raccordi consigliati

- In `#sostituzione-aromatica`, esplicitare i locanti degli orientamenti prima del primo esempio: «Per due sostituenti sul benzene, orto indica le posizioni 1,2; meta le posizioni 1,3; para le posizioni 1,4.» Sono termini usati anche dalle schede e dai quiz.
- In `src/content/svolti/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/9.md`, aggiungere `alcani-cicloalcani` all'elenco `teoria`, perché il primo esercizio riguarda combustione del butano e attualmente il solo rimando è `alcheni-dieni`.
- In `src/content/svolti/chimica-semestre-filtro/carbonio-idrocarburi-stereochimica/10.md`, aggiungere `sostituzione-aromatica` all'elenco `teoria` per il secondo esercizio. Attualmente il solo rimando è `aromaticita`.

## Controlli eseguiti

- Parsing YAML, conteggi e rimandi: 39 file; 8 sezioni della teoria e 15 ancore; tutti i riferimenti esistono; 10 schede da due esercizi; primi tre flag `gratis: true`, successivi sette false.
- Controllo di quattro alternative distinte per ciascuno dei 14 quiz. Distribuzione delle corrette nelle posizioni 1/2/3/4: 4/4/3/3. Ogni alternativa è stata valutata nel merito, oltre al controllo strutturale.
- Ricalcoli indipendenti in Python di 22 quantità: conteggi sigma/pi, formule degli alcani, numero massimo di configurazioni, rotazioni ed eccessi enantiomerici, fattori di velocità, bilanciamenti di combustione ed elettroni di Hückel. Valori confermati con `rel_tol=1e-10`, `abs_tol=1e-12`.
- Rendering KaTeX con `throwOnError: true` di tutte le 222 formule estratte dai 39 file: nessun errore.
- Verifica indipendente delle priorità OH > etile > metile > H e Br > Cl > O > H; assegnazioni delle due Fischer confermate considerando la direzione del gruppo 4.
- Verifica della catena massima e dei locanti per 2-metilpentano, but-1-ene e 3-metilpentano. L'alternativa 2-etilbutano nel quiz 2 descrive una scelta di catena non massima, quindi non è il nome IUPAC corretto richiesto.
- Verifica delle condizioni delle reazioni: addizione di HBr specificata ionica e senza perossidi; SN1 intesa nel modello cinetico dato; SN2 distinta dall'assegnazione finale R/S; eliminazione del 2-bromobutano ammette entrambi gli isomeri costituzionali e le due forme del but-2-ene; aromaticità richiede ciclicità, planarità e coniugazione oltre al conteggio elettronico.

## Copertura del BRIEF

| Tema | Esito |
| --- | --- |
| Ibridazione, rappresentazioni e nomenclatura | Presente e corretto |
| Stereoisomeri, R/S, Fischer, rotazione e racemi | Presente e corretto |
| Effetti induttivi, risonanza, nucleofili/elettrofili, intermedi | Presente e corretto |
| Reazioni radicaliche | Omolisi presente; integrare esempio di catena |
| Alogenuri, SN1/SN2, E1/E2 | Presente e corretto |
| Alcani, cicloalcani, tensione, ossidazione | Presente e corretto |
| Alcheni, dieni coniugati e addizioni | Presente e corretto |
| Aromaticità, pirimidine, purine, sostituzioni e cenni tossicologici | Presente e corretto |

La revisione copre contenuti e formule; integrazione, build e verifica visiva restano al proprietario della build.
