# Missione: Chiarezza totale

Versione B scelta dall’utente il 6 novembre 2026, con eliminazione dei tre collegamenti verdi in fondo al riquadro personale: «Tutti i tuoi progressi», «Lega della settimana» e «Duelli».

## Comportamento finale

- Home con ricerca unica, materie acquistate immediatamente accessibili e presentazione dei servizi dopo il catalogo.
- Pannello personale compatto con stemma, rango, livello, EXP, ripresa e pulsante di studio; senza statistiche, obiettivi, premi espansi o i tre collegamenti rimossi.
- Destinazioni delle sessioni riutilizzate dalla versione attuale, comprese domande di ripasso e materie senza quiz.
- Percorso fra teoria, svolti, esercizi e domande, con presentazione compatta sul telefono.
- Concentrazione facoltativa e reversibile con indice e Pi disponibili.
- Ricerca con filtri, suggerimenti per refusi, formule leggibili e recupero dagli errori.

La versione integra gli aggiornamenti già pubblicati: pacchetti, navigazione per aree, denominazioni delle verifiche delle superiori e funzione di caricamento del compito. Nessuna modifica ai contenuti didattici, ai prezzi, ai pagamenti, alle autorizzazioni o alle regole EXP.

## Anteprima locale

```sh
node strumenti/anteprima-chiarezza.mjs /percorso/assoluto/anteprima
```

Il generatore usa solo pagine pubbliche campione e dati dimostrativi. Le API di account e pagamento reali non vengono contattate. Il pannello B non contiene un modello fittizio di progressi: usa il markup effettivo e le stesse sostituzioni del Worker.

## Verifica

```sh
node strumenti/test-ricerca.mjs
node strumenti/test-percorso-studio.mjs
node --test strumenti/percorso-studio.test.mjs
NODE_OPTIONS=--max-old-space-size=2800 npx astro build
node scripts/vetrine.mjs
node scripts/lingue.mjs
node scripts/immagini-og.mjs
node strumenti/verifica-chiarezza.mjs
```

Le prove grafiche usano un profilo dimostrativo; non effettuano acquisti reali. La scelta B senza i tre link è stata autorizzata nella conversazione dopo il confronto A/B/C richiesto in `CLAUDE.md`.
