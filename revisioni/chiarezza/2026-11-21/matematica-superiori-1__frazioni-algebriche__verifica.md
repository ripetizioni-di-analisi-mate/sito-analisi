# Verifica · Matematica 1° anno · Frazioni algebriche

**Controllo finale** (`python3 strumenti/controlla_capitolo.py matematica-superiori-1 frazioni-algebriche`): `ESITO: a posto`, nessun ERRORE. 503 formule, 29 figure/svg, 66 blocchi, 8 titoli `##` in entrambe le lingue.

## Parole (conteggio dello script)
- Italiano: originale 2416; consegna dell'autore 4553 (×1,88); dopo la verifica **4475 (×1,85)**.
- Inglese: originale 2461; consegna dell'autore 4755 (×1,93); dopo la verifica **4672 (×1,90)**.

Mi sono fermato sopra 1,8: ciò che resta in più sono definizioni alla prima comparsa (polinomio, quoziente, condizione di esistenza, dominio, $\mathbb R$, $\in$, zero/radice, fattore, addendo, parametro, coefficiente, ascissa/ordinata, asintoto, mcm, molteplicità, opposto, inverso/reciproco, intervallo, $\cup$, funzione…), passaggi di calcolo e le aggiunte che servono a schede e domande (sottrazione di un intero, $f(5)$, ridurre ai minimi termini). Togliere ancora significherebbe toccare queste parti. L'inglese resta più lungo perché è la traduzione integrale dello stesso testo (l'originale inglese era già più lungo in proporzione).

## Conti rifatti
Circa 30 conti ricalcolati con sympy (valori in $x=5$, $x=-1$, valore escluso $-\frac{3}{a-1}$ e caso $a=4$, tutte le semplificazioni, somme, differenze, prodotti, quozienti, $\frac{3x}{x-4}-3=\frac{12}{x-4}$, verifiche numeriche in $x=0,2,3$, punti vuoti delle figure, frazione sovrapposta, ciclista, aiuola, limite $y=1$). Nessun conto sbagliato.

## Errori di contenuto
Nessuno. Una deduzione corretta: «il denominatore complessivo è il divisore, quindi è diverso da zero» → «…quindi si richiede che sia diverso da zero» (IT ed EN).

## Completezza rispetto all'originale
Confronto blocco per blocco: tutte le regole, i casi e i dati numerici dell'originale sono presenti nel blocco con ancora in cui stavano. Righe `::grafico` identiche.

## Termini definiti dopo la prima comparsa (corretti)
- «membro»/«membri» comparivano già in `Un coefficiente che può annullarsi` e in `#somme` ma erano definiti solo nella dimostrazione di `#equivalenza`: definizione spostata alla prima comparsa, insieme a «equazione» (prima definita solo nell'ultimo esempio). Nella risoluzione «si porta 3 al secondo membro» → «si sottrae 3 da entrambi i membri».

## Richiesta dell'autore: asintoto $y=1$
Nell'esempio `Un fattore cancellato e un fattore che rimane` aggiunta la riga: l'asintoto orizzontale $y=1$ indica il valore a cui si avvicina la frazione quando $x$ è molto grande, con il caso $x=100$, $\frac{99}{102}$ (IT ed EN).

## Alleggerimenti (IT ed EN insieme)
Tolte o accorciate: secondo esempio $x=5$ nella definizione (doppione di `#valori`); lettura a parole di $D$ che ripeteva la definizione di dominio; ripetizione dei segni di $x-2$ in `#segno` e nell'esempio dei denominatori opposti; frase ripetuta «l'esclusione di 0 si scrive accanto al risultato» nella frazione sovrapposta; «cioè scritti come prodotti» (scomporre era già definito); osservazione sulle condizioni, dimostrazioni di `#somme` e `#prodotti`, verifica in $x=0$, controllo del segno dimenticato e descrizione della figura di `#valori` resi più compatti, senza perdere passaggi.

## Inglese
Traduzione completa e allineata al testo italiano finale: stessi blocchi, stessi numeri, punto decimale, grafia americana del file esistente (*canceled*, *meters*).

## Dubbi rimasti
- La definizione di asintoto («retta a cui la curva si avvicina senza toccarla») è vera per le figure del capitolo, non in generale; l'ho lasciata così per il livello del primo anno.
- Schede e domande usano il raccoglimento a fattor comune, trattato in un capitolo precedente: non aggiunto qui.
