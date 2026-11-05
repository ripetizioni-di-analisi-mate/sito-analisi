# Verifica della compatibilità con un esame

Il catalogo viene generato dal materiale della materia alla compilazione del sito. Per le schede include titolo, parole chiave, termini evidenziati nelle spiegazioni e brevi estratti delle tracce. Per la teoria include le voci dell'indice, un estratto dell'enunciato e la presenza verificata del blocco di dimostrazione.

Il confronto considera lo stesso procedimento anche con coefficienti e formulazioni diversi. Una voce di teoria può coprire un calcolo quando spiega direttamente il metodo sufficiente; un prerequisito generico resta un riscontro parziale. Ogni riscontro completo restituisce un collegamento al materiale usato.

I pesi di copertura sono 1 per il procedimento o il contenuto richiesto, 0,5 per il solo argomento e 0 senza riscontro. Non sono applicate soglie minime alla percentuale. La soglia 80 dell'acquisto consigliato resta una condizione di visualizzazione del riquadro.

Il formato del modello ha sei campi: `numeroPunto|tipo|argomento|codice|punti|testo`. Il punteggio `p3` indica tre punti per la singola richiesta; `8` indica otto punti per l'intero esercizio. Un totale si distribuisce sulle richieste senza punteggio specifico; punteggi assenti o incoerenti comportano pesi uguali per tutte le richieste. Restano leggibili anche il formato precedente a sette campi e i prefissi `P3` e `E8`.

Il modello riceve l'istruzione di terminare con `FINE_CONFRONTO|N`. Quando omette questo segnale, si accetta anche una conclusione esplicita del trasporto (`finish_reason: stop` o `[DONE]`). Una risposta interrotta, un conteggio incoerente o il raggiungimento del limite di token non producono una percentuale né un esito archiviato e restituiscono il controllo alla quota giornaliera. Il segnale di fine controlla il protocollo; non dimostra da solo che il modello abbia riconosciuto correttamente ogni richiesta del testo.

Eseguire `npm run test:compatibilita` per le prove locali del calcolo, degli estratti e della gestione delle risposte. Queste prove usano un modello simulato e non misurano l'accuratezza dei modelli reali. Per modifiche al catalogo o al browser eseguire anche `npm run build`. La velocità complessiva dipende anche dalla lettura delle immagini e dall'inferenza; il browser aggiunge ogni richiesta una sola volta durante lo streaming, senza ricostruire le precedenti.
