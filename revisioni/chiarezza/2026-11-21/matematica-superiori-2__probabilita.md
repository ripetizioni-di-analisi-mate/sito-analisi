# Matematica 2° anno · Probabilità elementare — revisione di chiarezza

**Parole (corpo, conteggio dello script)**: italiano 2271 → 3576 (×1,57); inglese 2336 → 3765 (×1,61).
**Controllo**: `python3 strumenti/controlla_capitolo.py matematica-superiori-2 probabilita` → «a posto, con avvisi da valutare». L'unico avviso riguarda le «sigle» TT, TC, CT, RR, RB, BR, BB. Sono nomi di esiti e di percorsi, spiegati nel testo («$TC$ significa testa al primo lancio e croce al secondo»).

## Che cosa è cambiato
1. **Eventi**: ogni oggetto ha la sua definizione e un esempio con il dado (esperimento aleatorio, esito, spazio degli esiti). Il simbolo $\Omega$ ora è presentato come lettera greca omega maiuscola, e $\subseteq$ e $\varnothing$ sono letti a parole. Impossibile e certo sono in un elenco. Nell'esempio delle due monete il raggruppamento per numero di teste è scritto con i tre pesi 1/4, 1/2, 1/4.
2. **Probabilità classica**: definiti «equiprobabili», «uniformemente / a caso», «casi favorevoli / possibili» e «incompatibili». La dimostrazione ora ha tutti i passaggi. Nel dado truccato «peso» è definito e i passaggi $5p+2p=1$, $7p=1$, $p=\dfrac17$ sono su righe separate.
3. **Complementare, unione, intersezione, differenza**: ognuno è letto a parole («$A$ oppure $B$», «$A$ ma non $B$», «omega meno $E$»). Ogni formula ha un piccolo esempio con il dado. Nella dimostrazione dell'unione è spiegato perché il centro è contato due volte.
4. **Esempi con i conteggi**: i conti intermedi sono scritti, cioè le tre zone del diagramma di Venn, il denominatore comune $\dfrac{9+8-12}{12}$, la distribuzione dei dodici esiti con il controllo di $|A|$ e $|B|$, e $6+6-1=11$ punti nella griglia dei due dadi. «Marginali» è definito.
5. **Albero**: nodo, ramo e percorso sono in un elenco, con un esempio numerico (due lanci di moneta). Coppia ordinata e indipendenza dei lanci sono definite alla prima comparsa.
6. **Indipendenza e reimmissione**: è detto che cosa significa «con reimmissione» / «senza reimmissione». È spiegato perché pari e «maggiore di 4» sono indipendenti (due pari su quattro in ciascuna metà). L'osservazione sul complementare nomina la proprietà usata a ogni passaggio. Il caso degli eventi incompatibili ha un controesempio numerico.
7. **Probabilità condizionata**: c'è la lettura «$A$ dato $B$» con un esempio sul dado (6 sapendo pari, $\dfrac13$). Nella dimostrazione la divisione per $N$ è scritta. La tabella a doppia entrata è definita e si mostra come si ricava una casella. Il passaggio a $P(A\mid B)=P(A)$ per eventi indipendenti è svolto.
8. **Frequenze**: la frequenza relativa ha un esempio, e la differenza con la probabilità è detta in forma affermativa. La frequenza cumulata è definita. Nella media pesata compare la media semplice $\dfrac{0{,}8+0{,}6}{2}$ come confronto esplicito.

## Com'era / Com'è ora (dimostrazione della probabilità condizionata)
**Com'era**: «Nel modello finito equiprobabile, indichiamo con $N$ il numero totale di esiti, con $n_B$ gli esiti in $B$ e con $n_{AB}$ quelli in $A\cap B$. Il dato restringe il denominatore a $n_B$ e i favorevoli sono $n_{AB}$. Dividendo entrambi i termini del rapporto $\dfrac{n_{AB}}{n_B}$ per $N$ otteniamo il quoziente delle due probabilità.»

**Com'è ora**: «Si considera un modello finito con esiti equiprobabili. Siano $N$ il numero totale di esiti, $n_B$ il numero di esiti in $B$ e $n_{AB}$ il numero di esiti in $A\cap B$. Sapendo che $B$ è avvenuto, i casi possibili sono gli $n_B$ esiti di $B$ e i favorevoli sono gli $n_{AB}$ esiti che stanno anche in $A$, quindi $P(A\mid B)=\dfrac{n_{AB}}{n_B}$. Dividendo numeratore e denominatore per $N$ si ottiene $\dfrac{n_{AB}}{n_B}=\dfrac{\frac{n_{AB}}{N}}{\frac{n_B}{N}}=\dfrac{P(A\cap B)}{P(B)}$.»

## Errori trovati nell'originale
Nessun errore numerico. Ho ricalcolato tutti i numeri della teoria: 4/7, 11/36, 20/36/18/26, 5/12, 13/12, la tabella dell'urna, $\dfrac rn$, 5/8 e 4/7, 3/5 e 3/4, le frequenze cumulate, 0,65 e 0,70.

## Contenuti aggiunti per coprire esercizi e domande
- **Probabilità con i settori di una ruota** ($\dfrac{\alpha}{360}$): serve alla scheda 1, esercizio 3, e alla domanda 24. Aggiunta nel blocco `#classica`.
- **Notazione $|E|$ e $\#E$** per il numero di elementi: usata nelle schede 3, 4, 5 e nelle domande 3 e 4. Aggiunta in `#classica`.
- **Notazione $\overline E$** per il complementare: usata nelle domande 2 e 42. Aggiunta in `#complementare`.
- **Differenza $A\setminus B$**: usata nella scheda 5 e nella domanda 36. Aggiunta in `#unione`.
- Nei blocchi in cui gli esercizi li usano sono definiti anche «dado truccato» (domanda 26), «uniformemente», «con/senza reimmissione», «frequenza cumulata» (scheda 8) e «marginali» (scheda 5).

## Dubbi e segnalazioni sugli esercizi (non corretti)
- La domanda 59 scrive le coppie come $(1;2)$ e $(2;1)$, mentre teoria e schede usano $(1,2)$. È solo un'incoerenza di grafia.
- Nella scheda 6 la lettera $B$ indica il blu, mentre nella teoria $B$ indica sia il blu sia un evento generico. È lo stesso uso dell'originale, quindi non ho cambiato nulla.
- Le spiegazioni di schede e domande usano spesso l'imperativo («Conta», «Fissa», «sottrai»), che le regole del sito escludono. Non è materia di questo intervento.
