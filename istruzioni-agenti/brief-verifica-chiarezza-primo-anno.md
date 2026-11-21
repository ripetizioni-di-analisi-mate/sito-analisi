# Verifica indipendente di un capitolo rivisto · Fisica 1° anno e Matematica 1° anno (21 novembre 2026)

Un altro autore ha appena rivisto per chiarezza un capitolo di teoria seguendo `/home/claude/lavoro/brief-chiarezza-primo-anno.md`. **Leggi quel brief per intero**: contiene chi legge, il metodo, la voce, i vincoli tecnici. Tu sei il verificatore: non hai visto il lavoro nascere e devi giudicarlo come farebbe Carmine, il titolare del sito, che è un docente esigente.

Repository `/home/claude/sito-analisi`. File da verificare: `src/content/teoria/<materia>/<capitolo>.md` e `src/content-en/teoria/<materia>/<capitolo>.md`. Originale: `git -C /home/claude/sito-analisi show HEAD:<percorso>`. Rapporto dell'autore: `/home/claude/lavoro/rapporti/<materia>__<capitolo>.md` (leggilo e controlla ogni punto che segnala come dubbio o come modifica di contenuto).

**Nessun comando git che modifichi.** Altri agenti lavorano in parallelo su altri capitoli: apri in scrittura solo i tuoi due file. Correggi direttamente ciò che trovi (italiano e inglese insieme), senza riscrivere ciò che è già a posto.

## Che cosa controllare, in quest'ordine

1. **Correttezza.** Rifai da zero ogni conto del capitolo con Python o sympy (esempi, tabelle, numeri citati, unità). Controlla ogni affermazione: se è falsa, imprecisa o inventata, correggila. I dati reali devono essere veri.
2. **Niente di perso, niente di spostato.** Confronta blocco per blocco con l'originale: ogni regola, caso, eccezione e precisazione dell'originale deve esserci ancora, **nel blocco con ancora in cui stava**; i dati numerici degli esempi dell'originale devono essere gli stessi. Ciò che manca si rimette, detto in modo semplice.
3. **Lettura da quattordicenne.** Leggi tutto il capitolo italiano dall'inizio. Per ogni termine tecnico, simbolo o sigla annota dove compare la prima volta e controlla che lì sia definito. Ogni «quindi/perciò» deve seguire da qualcosa di scritto. Ogni regola deve avere il suo caso concreto. Dove trovi un salto, aggiungi la definizione, il motivo o il passaggio mancante (solo quelli).
4. **Copertura degli esercizi.** Guarda (solo lettura) schede, esercizi e domande del capitolo in `src/content/svolti/…`, `src/content/dafare/…`, `src/content/domande/…`: i termini, le notazioni e i procedimenti che usano devono essere spiegati in teoria. Quelli che mancano si aggiungono nel blocco più vicino per argomento, in una-tre righe con un caso numerico.
5. **Voce.** Togli ogni frase prescrittiva, a effetto, figurata o di raccordo; i due punti usati al posto di un connettivo logico; le negazioni infilate nei paragrafi; «può/possono» e «permette di» superflui; il «tu»; il tono infantile.
6. **Coerenza con le figure.** Il testo attorno a ogni figura deve descrivere ciò che la figura mostra davvero (leggi gli attributi della riga).
7. **Inglese.** Traduzione completa e fedele del testo italiano finale: stessi blocchi, stessi numeri, punto decimale, stessa grafia del file inglese esistente, niente frasi mancanti o aggiunte.
8. **Lunghezza.** Oltre 2,0 volte l'originale si tolgono ripetizioni ed esempi doppi aggiunti dall'autore; mai contenuti dell'originale, definizioni o passaggi di calcolo.

Alla fine esegui

```
python3 /home/claude/lavoro/controlla_capitolo.py <materia> <capitolo>
```

e porta l'esito a zero `ERRORE`.

## Rapporto

Scrivi `/home/claude/lavoro/rapporti/<materia>__<capitolo>__verifica.md` (in italiano, breve): conti rifatti (quanti, quanti sbagliati), errori di contenuto corretti (uno per uno, «era → è»), contenuti dell'originale rimessi, termini o sigle che mancavano di definizione, procedimenti degli esercizi aggiunti, correzioni di voce, stato dell'inglese, dubbi rimasti. Non dichiarare controlli che non hai fatto. Risposta finale di poche righe: esito e percorso del rapporto.
