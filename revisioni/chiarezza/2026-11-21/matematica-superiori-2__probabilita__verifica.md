# Verifica · Matematica 2° anno · Probabilità elementare

**Parole (corpo, conteggio dello script)**: italiano 3578 → 3591 (originale 2271, ×1,58); inglese 3765 → 3784 (originale 2336, ×1,62). Entro i limiti (1,7 IT, 1,8 EN). Non ho tagliato altro, perché il capitolo era già sotto 1,7 e le aggiunte dell'autore sono definizioni o passaggi di calcolo.
**Controllo**: `python3 strumenti/controlla_capitolo.py matematica-superiori-2 probabilita` → «a posto, con avvisi da valutare». L'unico avviso riguarda TT, TC, CT, RR, RB, BR, BB, che sono nomi di esiti spiegati nel testo e non sigle.

## Conti rifatti
Ho rifatto con Python (fractions e sympy) 24 conti: 4/6 e 2/6; p = 1/7 e P(pari) = 4/7; 90/360; le 11 coppie con almeno un sei e 11/36; l'esempio con A ∪ B = {2,4,5,6}; le zone 20, 36, 18, 26; 17/12, 5/12, 13/12 e il modello a 12 esiti; 6 e 5 coppie per i totali 7 e 8; 4/25; 2/3 · 3/4 = 1/2; la tabella dell'urna e il conteggio 12/20 = 3/5; l'identità r/n (sympy), 5/8 e 4/7; 3/5 e 3/4; P(6 | pari) = 1/3; le frequenze cumulate (8/15 ≈ 0,533); 26/40 = 0,65 e la media semplice 0,70. Nessun conto sbagliato.

## Niente di perso
Ho confrontato i blocchi uno per uno con l'originale. Tutte le regole, le precisazioni e i dati numerici sono ancora nel blocco in cui stavano. Le precisazioni dell'originale sono rimaste anche quando sono state riformulate: il «valore 1 raccoglie due esiti», l'unione vista sui conteggi, il caso di intersezione minima, la regola con i pesi nella dimostrazione della condizionata, il prodotto lungo un ramo, il dato dei 40 lanci che comprende i primi venti. Le figure sono identiche e il testo che le accompagna descrive ciò che mostrano.

## Correzioni (era → è)
- `#classica`: «con un dado regolare» → «con un dado **regolare**, cioè con le sei facce ugualmente probabili». Il termine era usato senza definizione, e lo usano 25 domande.
- `#classica`: «settore di ampiezza $\alpha$ gradi» → aggiunto «($\alpha$ è la lettera greca alfa)».
- `#complementare`: aggiunto «si chiama anche **evento contrario**». Il termine è usato nella domanda 81.
- `#indipendenza`: aggiunto «Se sono diversi, gli eventi si dicono **dipendenti**». Il termine è usato in circa 40 domande e in 7 schede o esercizi.
- Esempio delle tessere: «Contando loro come casi possibili si darebbe…» (italiano scorretto) → «Se si prendessero i due colori come casi possibili, ciascuno avrebbe probabilità 1/2…». Tolta anche la negazione «non i colori».
- Frequenza cumulata: tolta la frase che ripeteva il titolo della figura («Nel grafico i punti sono… la linea orizzontale è…»). Ora il testo dice «le frequenze cumulate si avvicinano alla probabilità teorica 1/2. Dopo sessanta lanci la frequenza è 8/15 ≈ 0,533».

## Voce
Non ho trovato «tu», tono prescrittivo, frasi a effetto, lineette lunghe o frazioni in linea. I due punti compaiono solo prima di elenchi o formule.

## Inglese
È una traduzione completa e fedele del testo italiano finale: stessi blocchi, numeri e formule, punto decimale. Ho applicato all'inglese le stesse correzioni fatte all'italiano. La grafia è americana (color, favorable, labeling), come nel file inglese esistente e nelle schede. Per «evento contrario» ho usato «complementary event», il termine della domanda 81 in inglese.

## Dubbi rimasti
Nessuno sul contenuto. Le segnalazioni dell'autore sugli esercizi restano valide e non sono state corrette, perché sono fuori da questo intervento: la grafia $(1;2)$ nella domanda 59 e gli imperativi nelle spiegazioni.
