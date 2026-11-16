# Revisione TOLC-I e TOLC-S · 16 novembre 2026

Revisione completa dei materiali di preparazione, con Analisi 1 come riferimento per progressione, passaggi motivati, notazione e figure. Tutti i contenuti interessati hanno la traduzione inglese integrale. Il lavoro è salvato su ramo locale dedicato e consegnato come patch. Il caricamento del ramo su GitHub è stato bloccato dal controllo automatico perché manca l'autorizzazione esplicita a quel trasferimento. Nessuna pubblicazione in produzione è stata eseguita.

| Percorso | Capitoli di teoria | Schede svolte | Esercizi nelle schede | Esercizi da fare | Quiz |
| --- | ---: | ---: | ---: | ---: | ---: |
| TOLC-I | 9 | 38 | 114 | 110 | 810 |
| TOLC-S | 12 | 50 | 158 | 170 | 1080 |

I conteggi della tabella valgono per ciascuna lingua. I file di contenuto sono 4558: 2279 italiani e 2279 inglesi. Ogni capitolo conserva 90 quiz a cinque alternative, una risposta corretta e una spiegazione. Alcuni capitoli comuni ai due corsi riusano gli stessi quesiti: i 1890 ID dei due percorsi non sono presentati come 1890 problemi diversi fra loro.

## Contenuti e controllo indipendente

Le teorie ora sviluppano i concetti in 9–10 sezioni, con definizioni, condizioni, esempi, figure e applicazioni. Le 88 schede contengono 2–4 esercizi progressivi con ragionamenti espliciti; le prime tre schede di ogni capitolo mantengono l’accesso gratuito. I 280 esercizi da fare hanno tracce autonome e soluzione finale. Titoli e descrizioni del catalogo sono aggiornati in entrambe le lingue.

Ogni argomento è stato scritto da un autore e riletto integralmente da un verificatore diverso. La seconda lettura ha riguardato tutte le alternative, gli enunciati e i passaggi, i dati delle figure e il confronto IT/EN. Calcoli simbolici, enumerazioni e controlli numerici affiancano la verifica semantica; non la sostituiscono. I registri sono conservati nella cartella [verifiche](verifiche/).

Le correzioni includono: insiemi completi delle soluzioni esplicitati; distrattori equivalenti eliminati; varianti dello stesso procedimento sostituite; ipotesi fisiche e biologiche precisate; spiegazioni riallineate alle alternative; distinzione fra estremi relativi e assoluti; contenuti di probabilità differenziati dalla statistica del capitolo comune; tempi e contesti grammaticali resi univoci.

Sono stati inoltre corretti il profilo energetico di chimica, una linea temporale inglese con coordinate non valide, alternative troncate nel quesito di forza magnetica e spaziature dei diagrammi biologici. Il controllo dei JSON compilati ha individuato anche orari interpretati come direttive Markdown, che rendevano uguali alcune alternative: la notazione è stata protetta in 18 file IT/EN, mantenendo gli stessi valori. I percorsi, gli ID e le ancore preesistenti sono conservati. Non sono stati cambiati prezzi, permessi, interfaccia o motori delle prove.

## Verifiche finali

- Frontmatter, conteggi, ancore, opzioni, corrette, gratuità e struttura IT/EN: 4558 file, zero errori strutturali.
- Rendering Markdown/KaTeX con i plugin del sito: 4558 file, zero errori di formula, coordinate SVG non finite, direttive vuote o alternative identiche dopo il rendering; 312 occorrenze di figure.
- 262 espressioni grafiche confrontate con un calcolo indipendente su 81 punti ciascuna: zero differenze.
- Lettura delle differenze di formule IT/EN segnalate dal confronto testuale: risolte come traduzioni di etichette/unità o ordine sintattico, senza cambiamenti dei valori.
- Dieci test esistenti TOLC-I/S superati, compresi estrazione, struttura delle simulazioni e correzione/accesso API.
- Compilazione Astro mirata ai due TOLC e alle dipendenze di pagine Analisi 1/Fisica zero completata; post-processi di anteprime, lingue, immagini e sitemap eseguiti.
- 1632 pagine TOLC compilate controllate: lingua corretta, nessun avviso di traduzione mancante, nessun errore KaTeX. Banche JSON: 810 e 1080 quesiti in entrambe le lingue, con ID e risposta corretta allineati, cinque alternative distinte e controllo di tutte le parti in cui il sito suddivide gli archivi più grandi. Ogni parte rispetta il limite di 25 MiB.

Comandi di integrazione eseguiti:

```sh
node --test strumenti/tolc-i.test.mjs strumenti/tolc-s.test.mjs
SOLO_MATERIE=tolc-i,tolc-s,analisi-1,fisica-zero NODE_OPTIONS=--max-old-space-size=4096 npx astro build
node scripts/vetrine.mjs
node scripts/lingue.mjs
node scripts/immagini-og.mjs
node scripts/sitemap-verificata.mjs
git diff --check
```

L’ispezione visuale riguarda le figure effettivamente rese dai plugin, anche a larghezza ridotta. Non è dichiarata una verifica della pagina completa nel browser, né una prova autenticata di acquisto: i browser disponibili non raggiungevano il server locale. Non è stata compilata l’intera raccolta di tutte le discipline. I risultati numerici e l’impronta dei contenuti consegnati sono in [controlli-finali.json](controlli-finali.json).

## Programmi di riferimento

Consultati i programmi e la struttura ufficiale [TOLC-I](https://www.cisiaonline.it/tolc/tolc-i/struttura-della-prova-e-sillabo) e [TOLC-S](https://www.cisiaonline.it/tolc/tolc-s/struttura-della-prova-e-sillabo). I materiali sono originali e indipendenti; non vengono presentati come quesiti ufficiali CISIA. Le simulazioni strutturate per sezione restano quelle italiane già presenti.
