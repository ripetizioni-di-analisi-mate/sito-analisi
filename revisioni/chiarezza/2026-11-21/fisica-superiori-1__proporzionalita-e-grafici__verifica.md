# Verifica · fisica-superiori-1 / proporzionalita-e-grafici

**Controllo finale** (`python3 strumenti/controlla_capitolo.py fisica-superiori-1 proporzionalita-e-grafici`): ESITO «a posto», nessun ERRORE, nessun AVVISO.

**Parole**
- Italiano: originale 2566; consegna dell'autore 4829 (×1,88); dopo la verifica 4652 (×1,81).
- Inglese: originale 2549; consegna dell'autore 5056 (×1,98); dopo la verifica 4870 (×1,91).
L'inglese resta sopra 1,8 perché la traduzione è per natura più lunga dell'italiano (stessi contenuti, circa 4% di parole in più). Per scendere ancora bisognerebbe togliere definizioni alla prima comparsa, passaggi di calcolo o i casi aggiunti per schede e domande: mi sono fermato qui.

## Conti rifatti
Circa 60 conti rifatti con Python/sympy (scale, pendenze, pompa e conversioni, strato, prodotti di y=12-2x, percentuali e tempi con sosta, intervalli di incertezza, due punti, intersezione, capacità, controlli delle tre terne in #tabelle, residui, tabella F/x, (x+1)²-x², piastrella, √32). Nessuno sbagliato.

## Errori di contenuto
Nessuno trovato.

## Contenuti dell'originale
Confronto blocco per blocco: ogni regola, caso e precisazione dell'originale è presente nel blocco con ancora in cui stava; dati numerici degli esempi invariati; 11 righe di figura identiche. Nulla da rimettere.

## Termini mancanti / copertura degli esercizi
- Aggiunta in `#quadratica` una frase: il grafico di y=cx² si chiama **parabola** (la parola compare in una spiegazione delle domande e non era in teoria). Italiano e inglese.
- Gli altri termini usati da schede, esercizi e domande (coefficiente angolare, intercetta, residuo, tara, pendenza media, interpolazione, percentuale, incertezza) sono definiti alla prima comparsa.

## Alleggerimento (italiano e inglese insieme)
- Introduzione ridotta a una frase con l'esempio V=3t (l'esempio del rubinetto era ripetuto subito in #diretta).
- `#assi`: tolto «quindi con altre scale la stessa linea appare più o meno inclinata» (ripeteva la frase precedente).
- `#unita-pendenza`: tolta la frase che riformulava a parole 3,75 N/cm.
- Pompa: tolti la verifica «0,04·1,5=0,06 non è il volume in litri» (anche una negazione nel paragrafo) e il conto aggiunto dei 5,6 L.
- `#inversa`: due frasi sul prodotto costante unite in una.
- `#due-punti`: tolta la frase «a ogni istante B contiene 4 L in più» (si legge già dalle due rette).
- `#confronti-modelli`: tolte le due frasi che ripetevano a parole le formule V_A e V_B; verifica finale ridotta a «entrambi i recipienti contengono 8 L».
- `#tabelle`: frase di raccordo accorciata.
- `#residui`: tolto l'inciso «per esempio se sono tutti positivi…».
- `#dominio`: tolto il conto 4+3t=16 già svolto nell'esempio della capacità.
- `#quadratica`: tolto il doppio calcolo di (x+1)² (ora una sola riga in evidenza) e gli aumenti 3 e 5 cm², già mostrati nell'esempio «Pendenze su tratti della stessa larghezza».
- Esempio sull'ascissa trasformata: tolti i valori 2, 8, 18 e la loro verifica, esempio aggiunto dall'autore.
- Piastrella: tolto «e quindi il fattore è 3·3» (ripete «cioè per 3²»).
- Pendenze: tolti i conti 1+1+1 e 3+3+1, che rifacevano i due aumenti già calcolati.
- Tabella F/x: tolto l'inciso «cioè fra aumenti».

## Voce
Nessuna frase prescrittiva, figurata o in seconda persona rimasta; i due punti restano solo prima di formule ed elenchi.

## Inglese
Traduzione completa e fedele del testo italiano finale (stessi blocchi, formule, elenchi, numeri con punto decimale, grafia britannica come il file esistente). Ogni taglio e l'aggiunta sulla parabola sono stati fatti nelle due lingue.

## Dubbi rimasti (dal rapporto dell'autore, confermati)
- Le lettere A e B dei recipienti sono diverse fra la figura dopo `#due-punti` e l'esempio `#confronti-modelli`; resta «In un'altra prova», perché uniformarle richiederebbe di cambiare una riga di figura.
- La domanda 10 usa «previsto meno osservato», segno opposto al residuo definito in teoria («misurato meno previsto», come nell'originale).
