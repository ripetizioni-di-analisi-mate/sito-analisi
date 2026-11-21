# Verifica indipendente di un capitolo riscritto · TOLC-S e TOLC-I (21 novembre 2026)

Un altro autore ha appena riscritto per chiarezza un capitolo di teoria dei TOLC seguendo `/home/claude/lavoro/brief-chiarezza-tolc.md`. **Leggi quel brief per intero**: contiene il metodo, la voce, i vincoli tecnici e la regola sui capitoli comuni ai due TOLC. Tu sei il verificatore: non hai visto il lavoro nascere e devi giudicarlo come farebbe Carmine, il titolare del sito, che è un docente esigente.

Repository `/home/claude/sito-analisi`. File da verificare: `src/content/teoria/tolc-s/<capitolo>.md`, `src/content-en/teoria/tolc-s/<capitolo>.md` e, se esistono, gli stessi in `tolc-i`. Originale: `git -C /home/claude/sito-analisi show HEAD:<percorso>`. Rapporto dell'autore: `/home/claude/lavoro/rapporti/<capitolo>.md`.

**Nessun comando git che modifichi.** Correggi direttamente nei file ciò che trovi (in italiano e in inglese insieme), senza riscrivere ciò che è già a posto.

## Che cosa controllare, in quest'ordine

1. **Correttezza.** Rifai da zero ogni conto del capitolo con Python o sympy (esempi, tabelle, numeri citati). Controlla ogni affermazione scientifica, storica o linguistica: se è falsa, imprecisa o inventata, correggila. I dati reali devono essere veri; i dati d'esercizio devono essere dichiarati come tali.
2. **Lettura da principiante.** Leggi tutto il capitolo italiano dall'inizio. Per ogni termine tecnico, simbolo o sigla annota dove compare la prima volta e controlla che lì sia definito (nome per esteso per le sigle). Ogni «quindi/perciò» deve seguire da qualcosa di scritto. Ogni regola deve avere il suo caso concreto. Dove trovi un salto, aggiungi la definizione, il motivo o il passaggio mancante (solo quelli: niente frasi generiche).
3. **Voce.** Togli ogni frase prescrittiva, a effetto, figurata o di raccordo; i due punti usati al posto di un connettivo logico; le negazioni infilate nei paragrafi (vanno in `:::attenzione` con un controesempio, e solo se servono); «può/possono» superflui.
4. **Coerenza con le figure.** Il testo attorno a ogni figura deve descrivere ciò che la figura mostra davvero (leggi gli attributi della riga: funzioni, punti, etichette, titolo).
5. **Inglese.** Traduzione completa e fedele del testo italiano finale: stessi blocchi, stessi numeri, punto decimale, niente frasi mancanti o aggiunte.
6. **Capitoli comuni.** Le parti comuni ai due TOLC devono avere lo stesso testo nei due file; ogni file conserva frontmatter, titoli, ancore e figure propri.
7. **Lunghezza.** Se il capitolo supera 1,8 volte l'originale, accorcia gli esempi più lunghi senza togliere definizioni.

Alla fine esegui

```
python3 /home/claude/lavoro/controlla_capitolo.py tolc-s <capitolo>
python3 /home/claude/lavoro/controlla_capitolo.py tolc-i <capitolo>     # se esiste in tolc-i
```

e porta l'esito a zero `ERRORE`.

## Rapporto

Scrivi `/home/claude/lavoro/rapporti/<capitolo>__verifica.md` (in italiano, breve): conti rifatti (quanti, quanti sbagliati), errori di contenuto corretti (elencali uno per uno con «era → è»), termini o sigle che mancavano di definizione, correzioni di voce, stato dell'inglese, dubbi rimasti che deve decidere Carmine. Non dichiarare controlli che non hai fatto. Risposta finale di poche righe: esito e percorso del rapporto.
