# Verifica · Fisica 2° anno · Moto rettilineo uniformemente accelerato

## Esito
`python3 strumenti/controlla_capitolo.py fisica-superiori-2 moto-accelerato`: **ESITO: a posto**, nessun ERRORE e nessun AVVISO.

Parole (conteggio dello script): IT 2626 originale, 3816 dopo l'autore (×1,45), **3852 dopo la verifica (×1,47)**; EN 2526 originale, 3877 dopo l'autore (×1,53), **3913 dopo la verifica (×1,55)**. Entrambe sotto i limiti (1,7 IT, 1,8 EN): nessun alleggerimento necessario, il testo dell'autore non ha ripetizioni da togliere.

## Conti rifatti
Circa 45 conti rifatti con Python/sympy (tutti gli esempi: tabella del sensore, conversioni km/h, incertezze, leggi della velocità e oraria, carrello con inversione, spostamenti consecutivi, frenate, relazione senza tempo, $v^2=-16$, caduta e lancio, radici $-1$ e $3$, asse verso il basso). **Nessun errore.** Dati numerici degli esempi identici all'originale.

## Completezza
Confronto blocco per blocco con l'originale: ogni regola, caso e precisazione è ancora nel suo blocco con ancora (anche «salvo che un'altra forza faccia poi invertire il moto», l'intervallo senza dati del sensore, l'aggiunta di $x_0$, la conservazione del modulo all'andata e al ritorno). Nulla da rimettere.

## Termini e definizioni
L'autore aveva definito alla prima comparsa asse, velocità con segno, modulo/rapidità, pedici, $\Delta$, SI, pendenza, compatibile, modello, incertezza, $v_0$, inversione, posizione, legge oraria, spostamento, area con segno, velocità media, distanza percorsa, decelerazione, tempi e spazi della frenata, intercetta, quota, $g$, $\simeq$, culmine, radici, dominio fisico. Aggiunte mie (IT ed EN):
- **parabola**: una riga che dice che cos'è (curva ad arco simmetrico con un punto più alto o più basso), prima solo nominata;
- **differenza di quadrati**: richiamo della formula $A^2-B^2=(A-B)(A+B)$ nel passaggio della relazione senza tempo;
- **tangente orizzontale** nel punto M di `#distanza-inversione`: la domanda 67 usa «massimo con tangente orizzontale» e la teoria non nominava la tangente.

## Voce
- `#area-accelerazione`: due punti usati come spiegazione → frase separata.
- Inglese: tolti due imperativi («Use $g$…», «To calculate it, find…») resi in forma impersonale come l'italiano.

## Inglese
Traduzione completa e fedele del testo italiano finale (letta per intero): stessi blocchi, formule (375), elenchi, numeri con punto decimale, grafia britannica (metre, trolley, idealised). Allineato «culmine» → «apex» anche in `#radici-dominio`, dove l'inglese aveva «highest point».

## Dubbi rimasti
- Le note dell'autore su esercizi e domande (scheda 1 con «≃» per un risultato esatto, frase confusa nella scheda 4 es. 3, soluzione $2{,}66667$ dell'esercizio da fare 1) restano da valutare: non sono file di questo incarico.
- `#tolleranza-pendenza` dice «il valore vero sta fra…»: semplificazione accettabile per il livello, lasciata.
