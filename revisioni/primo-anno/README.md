# Matematica e Fisica di prima superiore

## Richiesta e perimetro

L'11 novembre 2026 è stato richiesto di completare Matematica e Fisica del primo anno con la stessa intensità dei corsi delle altre classi: 90 domande per argomento, esercizi utili per le verifiche, spiegazioni leggibili e una sola risposta corretta per quiz.

Le due voci esistevano nel catalogo come materie in preparazione, con elenco degli argomenti vuoto. Il lavoro comprende quindi i contenuti e la loro attivazione nel percorso Superiori.

| Corso | Capitoli | Schede svolte | Esercizi nelle schede | Tracce da fare | Domande a tempo |
|---|---:|---:|---:|---:|---:|
| Matematica 1° anno | 12 | 96 | 288 | 168 | 1.080 |
| Fisica 1° anno | 10 | 80 | 240 | 140 | 900 |

Ogni capitolo ha 8 schede di 3 esercizi, 14 tracce con soluzione e 90 domande. Le sessioni mantengono le 15 domande previste da `DOMANDE_SESSIONE`. I corsi usano l'infrastruttura esistente per simulazioni di verifiche, ripasso, progressi e accesso al materiale.

Il prezzo è allineato agli altri anni delle superiori: 29 euro per ciascuna materia. Il catalogo centrale alimenta la pagina di acquisto e il preventivo Stripe; non occorre creare un prodotto separato. Restano applicabili gli sconti del catalogo.

## Scelta del programma

Il percorso è riferito alla prima superiore, con particolare attenzione al liceo scientifico. La distribuzione dei contenuti fra primo e secondo anno cambia secondo l'istituto e la classe. Questa variabilità è dichiarata nelle descrizioni dei corsi.

Sono stati confrontati programmi effettivamente svolti pubblicati dagli istituti:

- [Liceo scientifico Copernico di Pavia, Matematica 1B/C](https://copernico.edu.it/wp-content/uploads/2025/06/1c_matematica25.pdf): numeri, insiemi, calcolo letterale, fattorizzazione, frazioni algebriche, equazioni, disequazioni, geometria e statistica.
- [Liceo Vico di Corsico, Fisica 1A 2024/25](https://www.liceovico.edu.it/wp-content/uploads/2025/06/1A_FISICA_programma_svolto.pdf): misure, incertezze, relazioni fra grandezze, densità, vettori, forze, equilibrio e fluidi.
- [Liceo Severi-Correnti, Fisica 1C 2024/25](https://severi-correnti.edu.it/sites/default/files/programmi_svolti/2024-2025/PrimaC-LS-Fisica-PSeC2024-2025-D%26%23039%3BEredit%C3%A0.pdf): confronto sulla diversa collocazione annuale dei fluidi, con percorso di prima centrato su misure ed equilibrio dei solidi.

Le fonti servono a delimitare il programma; testi ed esercizi sono originali. La fisica mantiene il collegamento con il corso di seconda già presente: cinematica, dinamica, energia, termologia e ottica restano nel percorso successivo. In matematica si esplicita la possibile collocazione nel secondo anno di alcune parti sulle frazioni algebriche e sulle disequazioni.

## Criteri di revisione

Ogni banca di 90 quiz è organizzata in 18 famiglie di competenze con cinque varianti. La revisione considera il procedimento richiesto, i prerequisiti e la distinzione fra le opzioni. L'assenza di stringhe duplicate non basta a dimostrare che esista una sola risposta corretta: anche frazioni, espressioni algebriche, insiemi e unità diverse possono rappresentare la stessa risposta.

In matematica si controllano in particolare domini delle frazioni, cambio del verso nelle disequazioni, ipotesi dei teoremi geometrici e inclusione fra classi di quadrilateri. In fisica si controllano unità, valore di `g`, massa e peso, attrito statico effettivo e massimo, braccio del momento, pressione assoluta e relativa, volume immerso e convenzioni sulle incertezze.

I controlli strutturali sono ripetibili con:

```sh
python3 strumenti/verifica-primo-anno.py
node strumenti/verifica-domande.mjs matematica-superiori-1 fisica-superiori-1
node strumenti/verifica-primo-anno-render.mjs
```

Questi comandi verificano conteggi, formati e collegamenti; la correttezza delle soluzioni richiede anche il ricalcolo e la revisione delle famiglie. I rapporti specifici di materia documentano l'estensione dei controlli didattici.

## Risultati del controllo integrato

- Completezza dei 22 capitoli: 2.486 sorgenti Markdown, con 176 schede svolte, 308 tracce da fare e 1.980 quiz.
- Verifica delle domande: quattro alternative, posizioni corrette bilanciate e 13.545 formule valide.
- Rendering con gli stessi plugin di Astro: 2.486 file, 18.343 formule inline e display, 528 delimitazioni delle tracce degli esercizi svolti; nessun errore KaTeX o direttiva non riconosciuta.
- Revisione e ricalcolo indipendente: tutti i 1.980 quiz e gli 836 risultati di esercizi svolti e da fare, con lettura delle 396 famiglie e delle 22 teorie. L'estensione esatta del confronto simbolico e della lettura manuale è documentata nel rapporto indipendente.
- Controllo visivo di 17 figure: 10 in matematica e 7 in fisica. Corretti gli incroci fra etichette e segmenti e la scala del grafico di Hooke, ora espressa in centimetri.
- Integrazione con il preventivo digitale verificata mediante dati locali: 2.900 centesimi per ciascuna materia e 4.930 centesimi per entrambe con lo sconto pacchetto del 15% già previsto dal sito. Verificati gli slug di autorizzazione. Non sono state create transazioni reali.

I contenuti restano in italiano; le etichette del catalogo inglese lo dichiarano. Le prime tre schede svolte di ogni capitolo mantengono le anteprime gratuite previste dall'infrastruttura del sito.
