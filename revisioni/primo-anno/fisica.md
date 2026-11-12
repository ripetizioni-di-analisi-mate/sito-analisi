# Fisica 1° anno: contenuti e verifica

## Ambito didattico

Il corso copre la misura e la statica del primo anno: grandezze e unità, incertezze, proporzionalità e grafici, densità, vettori, forze, equilibrio del punto e del corpo rigido, pressione nei fluidi e galleggiamento. I capitoli sui fluidi precisano che la loro collocazione fra primo e secondo anno dipende dal percorso. Cinematica, dinamica, lavoro, energia e termologia restano nel corso del secondo anno.

Il perimetro è stato confrontato con programmi scolastici ufficiali, senza copiarne esercizi:

- [Liceo Vico di Corsico, programma svolto Fisica 1A 2024/25](https://www.liceovico.edu.it/wp-content/uploads/2025/06/1A_FISICA_programma_svolto.pdf).
- [Liceo Severi-Correnti, programma svolto Fisica 1C 2024/25](https://severi-correnti.edu.it/sites/default/files/programmi_svolti/2024-2025/PrimaC-LS-Fisica-PSeC2024-2025-D%26%23039%3BEredit%C3%A0.pdf).

## Materiali

| Materiale | Per capitolo | Totale |
|---|---:|---:|
| Capitoli di teoria | 1 | 10 |
| Schede svolte | 8 | 80 |
| Esercizi nelle schede | 24 | 240 |
| Esercizi da fare con soluzione | 14 | 140 |
| Domande a tempo | 90 | 900 |

Ogni capitolo comprende 18 famiglie di domande, con cinque varianti per famiglia. Le famiglie alternano problemi diretti e inversi, letture di dati, conversioni, confronti fra casi e condizioni di validità dei modelli. Le quattro posizioni della risposta corretta ricorrono 23, 23, 22 e 22 volte per capitolo. Le schede svolte accostano famiglie correlate con richieste diverse; i dati usati negli svolti e nelle tracce sono esterni alle cinque varianti dei quiz.

## Controlli

Il generatore `strumenti/genera-fisica-prima.py` usa aritmetica razionale e un controllo di distinzione delle quattro alternative. Il rapporto JSON facoltativo, esportabile con `--audit PERCORSO`, registra famiglia, variante, risposta e percorso per una revisione indipendente.

Sono stati verificati:

- 900 quiz, ciascuno con quattro alternative e una spiegazione autosufficiente;
- 6.325 formule dei quiz mediante KaTeX;
- frontmatter YAML dei 1.130 file;
- distribuzione delle posizioni corrette, unicità delle tracce nel capitolo e assenza di caratteri di controllo invisibili;
- distinzione fra peso e massa, attrito statico effettivo e limite, normale e peso, pressione relativa e assoluta, volume esterno e volume immerso;
- criteri espliciti per incertezza e arrotondamento; piccoli scarti richiesti per la propagazione lineare;
- ipotesi di linearità delle molle, bracci perpendicolari nelle leve, carichi fuori dall'acqua nei galleggianti, corpi impermeabili nei confronti fra spinte.

Le frazioni di componenti necessarie ai piani inclinati e alle corde sono fornite e spiegate geometricamente, senza presupporre trigonometria già studiata.
