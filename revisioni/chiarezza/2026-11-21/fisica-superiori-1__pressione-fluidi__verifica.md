# Verifica · Fisica 1° anno · Pressione nei fluidi in quiete

**Controllo** (`python3 strumenti/controlla_capitolo.py fisica-superiori-1 pressione-fluidi`): ESITO a posto, nessun ERRORE e nessun AVVISO.

## Parole (conteggio dello script)
- Italiano: originale 2678; consegna dell'autore 5275 (×1,97); dopo la verifica **5049 (×1,89)**.
- Inglese: originale 2667; consegna dell'autore 5522 (×2,07); dopo la verifica **5277 (×1,98)**.

Non sono sceso fino a 1,8. Per arrivarci si dovrebbero togliere definizioni alla prima comparsa (forza, modulo, densità, campo gravitazionale, gradiente, sezione, interfaccia, manometro, barometro…) o righe di calcolo, che il brief chiede di tenere. I blocchi più cresciuti sono quelli con le definizioni: `#pressione` (125 → circa 380 parole), `#stevino` (51 → circa 245), `#manometri`, `#vasi`, `#pascal`. L'inglese resta circa il 5% più lungo dell'italiano per la lingua stessa (molti «that is» per «cioè»).

## Conti rifatti
Circa 45 valori ricalcolati con Python/sympy (pressioni e forze dei primi esempi, pressione media 3,2 kPa e 175 N, depressione 20 N, taratura 4000 Pa e 500 Pa/N, gradiente 8,0 kPa/m, ρ = 800 kg/m³, p₀ = 100 kPa e coppia 1000/99, piastra 2/5/8 kPa e 900 N, letture 115, −10, 118, 20, 15 kPa, pressa 80 N e 1 cm, 48 N, 2 cm, 0,96 J, olio–acqua 0,20 m, vasi con gas 0,50, 0,17 e 0,33 m, strati 4 + 10 = 14 kPa, spessori x = 0,90 m, 7,2 e 6,0 kPa, 12,0 e 15,0 kPa, manometro 1200 Pa e 15 cm con olio, barometro 10 m e 0,735 ≈ 0,74 m col mercurio, 100 + 3 = 103 kPa). Nessun errore. Dati reali controllati: pressione atmosferica al livello del mare ≈ 101 kPa, mercurio 13 600 kg/m³, g ≈ 9,8 N/kg.

## Completezza e figure
Confronto blocco per blocco con l'originale: ogni regola, caso e precisazione è nel suo blocco con ancora; dati degli esempi invariati; 11 righe `::grafico` identiche e il testo attorno corrisponde agli attributi. Nessun contenuto dell'originale da rimettere. Copertura degli esercizi: le aggiunte dell'autore (pistoni circolari con π r², gradiente, conversioni cm² e N/cm²) sono corrette e servono agli esercizi; nessun altro termine scoperto (cercati bar, atm, MPa, spinta, manometro nelle schede, esercizi e domande).

## Interventi (italiano e inglese insieme)
Alleggerimento, solo nelle categorie ammesse:
- tolte frasi che ripetevano il calcolo o la figura: «L'area è raddoppiata e la pressione si è dimezzata», «L'olio aggiunge 4 kPa e l'acqua 10 kPa» (già nelle righe di calcolo), la descrizione dell'intercetta sotto il grafico di `#densita-da-pressioni` e quella delle due rette in `#tre-riferimenti` (le dicono i titoli dei grafici), l'equazione intermedia ripetuta subito dopo nella formula del gradiente;
- tolte le verifiche doppie: «e la loro somma è 13,2 kPa come richiesto», il valore 900 N ripetuto;
- tolte le definizioni ripetute: seconda definizione di «uniforme» (nel `#pressione` e nell'elenco di `#stevino`);
- tolti gli esempi aggiunti dall'autore dove l'originale ne aveva già uno adatto: 20 000 Pa a 2 m in `#stevino` (subito dopo c'è «Pressioni a due quote»), forza di 100 N sulla membrana in `#assoluta`, 3 kPa trasmessi in `#pascal`, striscia più alta in `#spinta-su-parete`;
- tolti incisi e raccordi: «L'idea è isolare una colonna…» all'inizio della dimostrazione (ripeteva la conclusione), «e conta soltanto in tubi molto sottili e nelle gocce», nel manometro l'anticipazione «il liquido è più basso nel ramo in cui il gas preme di più» (dimostrata subito dopo);
- frasi unite senza perdere passaggi (componenti di una forza, fluido, azzeramento del sensore, pendenza della taratura, risultato dell'olio–acqua in `#vasi`, ragionamento del manometro).

Voce: «il suo volume non cambia anche se viene compresso» (contraddittorio) → «anche se viene premuto»; «Il simbolo p̄ si legge… quindi sull'area totale» (un «quindi» senza premessa) → «Sull'area totale la pressione media, indicata con p̄ e letta “p medio”, è». Nessun «tu», nessuna frase prescrittiva, nessun «può/possono».

## Inglese
Traduzione completa e fedele del testo italiano finale: stessi blocchi, stesse formule (301 per lingua), punto decimale, grafia britannica (metre, vapour, centimetre). Le stesse modifiche sono state fatte nei due file.

## Dubbi rimasti
- Lunghezza: 1,89 in italiano e 1,98 in inglese, sopra l'obiettivo di 1,8 per le ragioni dette sopra.
- Come già segnalato dall'autore: nella figura degli strati il fondo è «F» in italiano e «B» in inglese (righe delle figure non toccabili); il liquido del barometro con gas residuo (12 500 kg/m³) è un dato d'esercizio, non è chiamato mercurio.
