# Verifica · Fisica 2° anno · Moto rettilineo uniforme e grafici

**Esito**: `controlla_capitolo.py` senza ERRORE (unico AVVISO «AB, BC»: sono i segmenti fra i punti A, B, C della figura, nominati nel testo, non sigle).

**Parole**: IT prima del mio intervento 4151 (×1,59), dopo 4162 (×1,60); EN 4303 (×1,64) → 4312 (×1,65). Entro i limiti (1,7 IT, 1,8 EN): nessun alleggerimento necessario oltre a una frase doppia tolta.

## Conti
Rifatti con Python/sympy circa 50 numeri (spostamenti, letture con origine spostata, velocità medie, 54 km/h = 15 m/s, 12 m/s = 43,2 km/h, 0,9 km/900 m, intervallo 4-6 m/s, leggi orarie, pendenze 2 e 2,25 m/s, incontri a 2 s, 20 s, 10 s, −10 s, 5 s, 10/3 s, medie 4/7, 20/7, 8/3, 24/7, 4 m/s, formula 2u₁u₂/(u₁+u₂), u₂ = 24/5). Nessun errore. Righe delle figure controllate sugli attributi: le descrizioni accanto (P, Q, R; A, B, C; barre [7,9] e [17,19]; corda AC sotto B) sono esatte.

## Correzioni
- `#conversione`: «il numero in km/h è maggiore perché in un'ora si percorre una distanza molto più grande che in un secondo» (motivo impreciso: le lunghezze sono in unità diverse) → «perché il chilometro orario è un'unità più piccola: 1 km/h corrisponde a 1/3,6 m/s».
- `#incontri`, partenza ritardata: «prima di t_B resta fermo in x_B0» (dato per certo, ma non sempre vero) → x_B0 spiegata come coordinata di B alla partenza (sostituendo t = t_B, come chiede la domanda 81); la posizione di quiete vale solo se B è fermo prima di partire.
- `#media-tratti`: nella formula con i reciproci mancava un passaggio; ora c'è 2/u_m = 1/u₁ + 1/u₂ e poi la sottrazione di 1/u₁ da entrambi i membri.
- `#grafico-posizione`: tolta la frase sulle rette con stessa pendenza e intercette diverse, che ripeteva l'`:::attenzione` successivo (contenuto dell'originale).

## Completezza e copertura
Confronto blocco per blocco con l'originale: ogni regola, caso ed esempio è nel blocco con ancora in cui stava; numeri degli esempi invariati; titoli, ancore, frontmatter e righe delle figure identici. Termini e sigle (SI, Δ, τ, pedici, modulo, componente, intercetta, corda, velocità istantanea, distacco, velocità relativa, dominio, reciproco, spezzata, fotocellula, errore di azzeramento) definiti alla prima comparsa. Termini di schede, esercizi e domande (rapidità, velocità relativa, intercetta, sorpasso tramite il distacco che cambia segno, inversamente proporzionale nella domanda 88) coperti dalla teoria.

## Voce e inglese
Nessun «tu», nessuna frase prescrittiva o a effetto trovata; i due punti introducono solo elenchi, esempi o formule. L'inglese è la traduzione completa del testo italiano finale (stessa struttura, stessi numeri con il punto decimale, grafia britannica); le tre correzioni sono state riportate anche lì.

## Dubbi
Nessuno sul contenuto. Le segnalazioni dell'autore su schede e domande («≃» per risultati esatti, uso di $v_m$ per la rapidità media nella scheda 8) restano valide e non sono state toccate.
