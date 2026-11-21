# Verifica · Fisica 2° anno · Lavoro, energia e potenza

**Esito**: `controlla_capitolo.py` → «ESITO: a posto», nessun ERRORE né AVVISO.

**Parole** (conteggio dello script): italiano 2635 → 4468 consegnato dall'autore → **4477** dopo la verifica (×1,70); inglese 2586 → 4641 → **4651** (×1,80). Le aggiunte richieste (coseno, prodotto scalare, SI) sono state compensate con tagli, perciò entrambe le lingue restano entro i limiti 1,7 e 1,8.

## Conti rifatti
Rifatti in Python tutti i 60 circa numeri del capitolo (lavori, energie cinetiche e potenziali, molle, bilanci, rapidità, potenze, rendimenti, angolo della figura della valigia, lunghezze 5 m e 7 m delle guide). Nessun conto sbagliato, né nell'originale né nel testo dell'autore.

## Completezza rispetto all'originale
Confronto blocco per blocco: ogni regola, caso e precisazione dell'originale è ancora nel suo blocco con ancora; numeri degli esempi invariati; righe delle figure identiche. Nulla da rimettere.

## Termini mancanti aggiunti (IT ed EN)
- **Coseno** (`#lavoro`): usato dalla prima formula senza richiamo, e non definito in nessun capitolo precedente di Fisica 2° anno. Aggiunta una riga: che cos'è $\cos\theta$ e quanto vale a 0°, 60°, 90°, 180° (i valori usati nel capitolo).
- **Prodotto scalare** (domanda 73): una riga in `#lavoro`, subito dopo «grandezza scalare»: $Fs\cos\theta$ si chiama prodotto scalare e si scrive $\vec F\cdot\vec s$. Messa in `#lavoro` e non in `#conservazione` (a cui la domanda rimanda) perché è lì che compare $Fs\cos\theta$. In inglese «scalar product, or dot product», perché la domanda 73 inglese dice «dot product».
- **SI** (domanda 13 e altre sei domande che scrivono «unità SI»): nella riga del joule, «l'unità di energia del Sistema Internazionale (SI)».

## Correzioni di voce
- «da non confondere con il lavoro $W$» (negazione nel paragrafo) → «in carattere dritto, mentre il lavoro $W$ è in corsivo».

## Alleggerimenti (IT ed EN insieme)
- Tolto l'esempio «carrello di 2 kg a 3 m/s, $K=9$ J» in `#cinetica`: identico al primo passo dell'esempio «Trasferire l'energia».
- Tolto «alzare lo zero di 3 m toglie $mg\cdot3$ m» in `#potenziale`: il cambio di zero è già mostrato con i numeri nell'esempio della quota sotto lo zero.
- Accorciate frasi che ripetevano la figura o il calcolo: descrizione del grafico $K=v^2$, motivo del segno del lavoro del peso (una frase invece di due), chiusura dell'esempio delle aree con segno, spiegazione del fattore un mezzo nell'esempio della molla (la stessa spiegazione è già nel teorema `#elastica`).
- Tenuto il controesempio $\frac12\cdot250\cdot0{,}08^2=0{,}8$ J: lo usano la domanda 35 e la scheda 6.

## Inglese
Traduzione completa del testo italiano finale: stessi blocchi, formule e numeri (punto decimale), grafia britannica come nel file esistente (metre, trapezium). Le modifiche sono state fatte in parallelo nelle due lingue.

## Dubbi rimasti
- Segnalazioni dell'autore sugli esercizi confermate e non corrette (fuori dal mio incarico): la domanda 15 ha un distrattore «−13 J» debole.
