# Verifica del corso Fisica 4° anno

- 12 capitoli di teoria; 96 schede con 192 esercizi svolti, dei quali 96 con ulteriori richieste collegate; 168 esercizi da fare; 540 domande a tempo.
- 36 schede gratuite, prime tre per capitolo. Ogni capitolo contiene 45 domande a quattro alternative; posizioni corrette distribuite in modo uniforme (135 per posizione), senza duplicati di traccia nello stesso capitolo.
- 924 risultati numerici nei contenuti calcolati con SymPy. Verifica indipendente delle 96 famiglie con 9 serie di dati ciascuna e dei 108 risultati aggiuntivi: nessuna discrepanza significativa. Controllati separatamente segni, unità, intervalli fisici e 84 domande concettuali.
- 78 figure prodotte dal renderer SVG del sito, controllate visivamente. Corretta la proporzione fra riscaldamento del ghiaccio e dell’acqua; precisata la normalizzazione del grafico dei battimenti.
- `node scripts/verifica.mjs fisica-superiori-4`: nessun errore nelle formule, nelle ancore o nei blocchi. Controllo YAML: zero errori, comprese tutte le domande.
- Build locale con `SOLO_MATERIE=fisica-superiori-4 npm run build`: 677 pagine, completata. Verificate le pagine generate, le immagini social e tutti i collegamenti interni alla materia. Nessun errore KaTeX nelle pagine. Nessun titolo o descrizione duplicato nell’audit SEO; i collegamenti verso altre materie omesse dalla build limitata sono attesi.
- Provati gli stati del riquadro acquisto: ospite con e senza prezzo, account senza prezzo e account con materia già abilitata. Nessun tentativo di pagamento o iscrizione finalizzata al pagamento quando il prezzo non è configurato.

## Limite operativo

Il prezzo nel catalogo del sito è 29 euro, come Fisica 5° anno. L’accesso a Paddle non è stato completato; `PADDLE_PREZZO_FISICA_SUPERIORI_4` resta da configurare con un nuovo prezzo dedicato. Il sito esplicita che l’acquisto non è ancora disponibile. Nessun prezzo del quinto anno viene riutilizzato.

Contenuti disponibili in italiano, come il corso di quinta; le pagine inglesi usano l’avviso standard del sito per i contenuti non ancora tradotti.
