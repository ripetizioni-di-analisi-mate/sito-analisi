# Verifica di un capitolo della materia "TIEC Cattolica"

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Modifica solo i file del tuo capitolo (materia `tiec`):
- teoria: `src/content/teoria/tiec/<capitolo>.md`
- quiz svolti: `src/content/svolti/tiec/<capitolo>/*.md`
- quiz da fare: `src/content/dafare/tiec/<capitolo>/*.md`
- domande a tempo: `src/content/domande/tiec/<capitolo>/*.md`

Questi file sono stati scritti da altri autori con `istruzioni-agenti/brief-tiec.md` e `istruzioni-agenti/brief-domande-tiec.md`: leggili per intero, insieme a `istruzioni-agenti/brief-verifica-matematica-concorsi.md` (stessi controlli, ma qui le opzioni sono **quattro, A–D**) e a `GUIDA-CONTENUTI.md`. Carica la skill **scrittura-umana-carmine** prima di correggere qualsiasi frase.

Il materiale sarà venduto a studenti che preparano il TIEC della Cattolica: una risposta segnata male, due opzioni entrambe difendibili o un quesito ambiguo sono gli errori più gravi. Controlla tutto in modo indipendente (lavora in `/tmp/verifica-tiec/<capitolo>/`), senza fidarti dei conti né dei file di lavoro degli autori.

## Cosa fare
1. **Quiz svolti e tracce**: tutti i controlli del punto 1–9 di `brief-verifica-matematica-concorsi.md`, con quattro opzioni A–D. Distribuzione delle lettere: ogni lettera corretta da 4 a 8 volte sui 24 svolti e da 3 a 4 volte sulle 14 tracce (riordina aggiornando ogni riferimento alle lettere).
2. **Domande a tempo (90)**: per ognuna risolvi da zero (Python per matematica e logica numerica; ragionamento scritto per logica verbale, comprensione e inglese); `corretta` giusta; le altre tre sbagliate e non difendibili; spiegazione corretta e completa, senza rimandi alla posizione delle risposte.
3. **Comprensione**: la risposta corretta è giustificata da una frase precisa del brano; nessuna sbagliata è deducibile dal brano; brani originali, senza enti o ricerche reali a cui si attribuiscono dati.
4. **Inglese**: una sola opzione grammaticalmente corretta e naturale; inglese corretto nei testi; livello B1–B2.
5. **Ripetizioni**: leggi le 90 domande una accanto all'altra e confrontale con schede e tracce. Doppione = stessa abilità sullo stesso oggetto con numeri diversi, dato e incognita invertiti, testo a stampo, brano o frase già usati con la stessa domanda. Riscrivi ogni doppione su una sezione della teoria poco coperta e ricontrollalo. Aiuto: `python3 strumenti/domande-simili.py src/content/domande/tiec/<capitolo> 0.7`.
6. **Fedeltà al TIEC**: niente regole o numeri del test che non siano in `brief-tiec.md` (punti per risposta, date, posti); nessun contenuto copiato dalle demo ufficiali.
7. **Stile**: niente `:::percorso` né prosa tra i blocchi; connettivi espliciti, due punti mai al posto di un connettivo; nessuna personificazione o frase a effetto; frazioni in colonna; virgola decimale `{,}`; mai "la parentesi". Correzioni puntuali, senza allungare il testo.
8. **Formato**: ancore citate esistenti; blocchi bilanciati; schede 1–2 `gratis: true`; 8 schede, 14 tracce, 90 domande; posizioni corrette delle domande fra 20 e 25 ciascuna; figure controllate con `node strumenti/anteprima_figure.mjs` (guarda il PNG); `python3 strumenti/yamlcheck.py` con 0 errori su tutti i file del capitolo.

## Rapporto (breve, in italiano)
Quiz e domande verificati, errori trovati e corretti (file, che cosa era sbagliato, correzione), doppioni riscritti, distribuzione finale di lettere e posizioni, dubbi non risolti.
