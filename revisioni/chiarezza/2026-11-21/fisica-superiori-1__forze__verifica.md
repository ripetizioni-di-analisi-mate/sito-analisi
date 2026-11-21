# Verifica · Fisica 1° anno · Forze, peso, elasticità e attrito

## Esito
`python3 strumenti/controlla_capitolo.py fisica-superiori-1 forze`: **ESITO: a posto**, nessun ERRORE e nessun AVVISO. Frontmatter, titoli `##`, ancore, 11 righe di figura invariati; 22 blocchi; resa IT ed EN riuscita.

## Lunghezza (conteggio dello script)
| | originale | autore | dopo la verifica |
|---|---|---|---|
| IT | 2572 | 5359 (×2,08) | **4918 (×1,91)** |
| EN | 2599 | 5634 (×2,17) | **5177 (×1,99)** |

Mi sono fermato sopra 1,8. Per scendere ancora avrei dovuto togliere definizioni alla prima comparsa (componente, risultante, sistema, vincolo, pendenza, intercetta, risoluzione, μ, Δ…), passaggi di calcolo o righe che servono a domande ed esercizi (formule inverse, scala del disegno, Pitagora per la forza di contatto, N/cm → N/m, modello di Coulomb e area/velocità, normale con fune nell'attrito dinamico, molle in parallelo), cosa che la nota esclude. L'inglese resta più lungo dell'italiano di circa il 5% a parità di contenuto, perciò è vicino a 2,0.

Tagli fatti (IT ed EN insieme): «In fisica si chiama corpo qualunque oggetto»; mela di un etto; Luna (1,62 N/kg, non usata dagli esercizi); «come una stanza o un laboratorio»; frase sul grafico «ogni retta rappresenta un luogo» e le descrizioni dei grafici già nei titoli delle figure (punti A e B della cassa, «u è in centimetri», segmento fino a B ridotto a un rinvio); aumento di massa e lettura scritto a parole prima della formula che lo calcola (zero spostato); frase di raccordo all'inizio della dimostrazione; esempio numerico di Δ che ripeteva i dati dell'esempio di taratura (sostituito da un caso di una riga); esempio 6 N con molle da 100 e 300 N/m; esempio 0,4·40 = 16 N nella definizione, identico all'esempio che segue; blocco fermo sul pavimento (ripetuto dall'esempio con 6 N); frase «sfiora senza premere»; riga «Il segno delle componenti non cambia il modulo»; elenchi puntati dell'anello e dei carrelli trasformati in frasi (stessi dati e segni); descrizione a parole delle forze sulla scatola superiore che ripeteva l'equazione; riepilogo «La normale fra le scatole vale 12 N e quella alla base 52 N»; incisi su Coulomb («fisico francese del Settecento»); doppione nel blocco `#modelli` delle regole dell'attrito già date in `#attrito`; frase finale sul cambio di verso dell'attrito accorciata.

## Conti rifatti
Rifatti con Python tutti i numeri del capitolo (circa 50: anello 3 e 13 N, Pitagora 10 N e 13 N, carrelli 9, 6, 3 N, scala 3 cm, pesi 20, 30, 12 N, massa 6 kg, rapporti 2/5, campo 10 N/kg, scarto 2 N, 14 N/kg, Hooke −3 e +2 N, 0,05 m, molle 7, 3, −4 N, taratura 200 N/m, 2 cm, 12 cm, 10 N, 2 N/cm = 200 N/m, 3 N/cm, 18 N, scarto 3 N = 30 risoluzioni, normali 50, 30, 60, 35, −10, 12, 52, 40 N, attrito 16, 10, 80, 40 N, intervallo 6-14 N, risultante 10 N nell'attenzione). **Nessun errore.** Dati reali: g ≈ 9,81 N/kg corretto.

## Contenuti dell'originale
Confronto blocco per blocco: nessun contenuto dell'originale mancante o spostato fuori dal suo blocco. Rimessa una precisazione che l'autore aveva tolto: nell'esempio delle due scatole, oltre la soglia di 18 N la scatola superiore perde il contatto («oltre la quale la scatola superiore si stacca»).

## Correzioni di contenuto e di voce
- Tolta una frase inventata nell'`:::attenzione` della taratura: «perché la molla di questo esempio la recupera anche dopo la misura a 6 cm» (dato non presente nell'originale né nei dati dell'esempio). Resta la frase dell'originale.
- «Il peso è una forza, quindi si misura in newton» → «Il peso si misura in newton».

## Termini e copertura degli esercizi
- Aggiunto «(molle in parallelo)» accanto alle molle affiancate: le domande 78 e 81 usano «in parallelo».
- Non coperte (come già segnalato dall'autore): molle **in serie** (domanda 84), pendenza con assi scambiati, attrito su un pianale che accelera, blocco premuto contro parete o soffitto. Richiederebbero contenuto nuovo.

## Inglese
Allineato al testo italiano finale con le stesse modifiche, frase per frase (113 paragrafi in entrambe le lingue). Aggiunta la traduzione mancante di «Radente significa che striscia» («Sliding here means rubbing along the surface»). Punto decimale, grafia britannica come nel file esistente.

## Dubbi rimasti
- Inglese a ×1,99: sotto 2,0 ma con poco margine.
- La definizione di «precarico» («alla lunghezza libera non esercita alcuna forza») è semplificata; tenuta perché coerente con l'uso che ne fa il capitolo.
