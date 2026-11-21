# Verifica · Fisica 3° anno · Fluidi in equilibrio

**Controllo finale** (`python3 strumenti/controlla_capitolo.py fisica-superiori-3 fluidi-equilibrio`): `ESITO: a posto`, nessun ERRORE né AVVISO.

**Parole**
- Italiano: originale 2484; consegna dell'autore 4197 (×1,69); dopo la verifica 4196 (×1,69).
- Inglese: originale 2350; consegna dell'autore 4215 (×1,79); dopo la verifica 4214 (×1,79).
Entrambi restano sotto i limiti richiesti (1,7 e 1,8). Il capitolo era già entro 1,8: non ho fatto altri tagli, perché le frasi rimaste sono contenuti dell'originale, definizioni alla prima comparsa, passaggi di calcolo o righe per schede e domande.

## Conti rifatti
Rifatti con Python/sympy 22 conti: risultante e momento sulla paratoia per integrazione ($\rho gbH^2/2$, $\rho gbH^3/3$, braccio $2H/3$), 40000 Pa, 4000 / 10000 / 14000 Pa, 2000 Pa, −18 kPa e −3600 N, 2400 Pa, 0,24 m, 0,06 m, 400 N, 2 cm, 8 J e 8 J, 8 kPa, 18 kPa, 540 N, 40 / 10 / 30 N, 0,025 m³ e 0,050 m. Nessuno sbagliato.
Figure controllate sugli attributi: recipiente di `#quota-colonna` (olio 1,35 ≡ acqua 1,08, livelli coerenti; ramo sinistro acqua, destro olio sopra acqua; C nell'olio, D nell'acqua alla stessa quota), manometro d'acqua (dislivello 0,20), manometro a due liquidi (I 0,40, D 0,64, olio 0,70), imbarcazione inclinata in verso orario con B a destra di G (coppia antioraria, come nel testo).

## Completezza rispetto all'originale
Confronto blocco per blocco: ogni regola, caso e precisazione dell'originale è presente nel blocco con ancora in cui stava; dati numerici degli esempi invariati; titoli, ancore, titoli dei blocchi e righe delle figure identici. Nulla da rimettere.

## Correzioni fatte (IT ed EN insieme)
- `#pressione`: «omogeneo» era definito con la densità prima che la densità fosse definita → ora «ogni metro cubo del liquido ha la stessa massa, cioè la stessa densità».
- `#pressione`: «risultante» usata senza spiegazione → «la risultante, cioè della forza totale».
- `#pressione`: la frase «Due fluidi … gradienti idrostatici diversi» precedeva la definizione di gradiente idrostatico → messa dopo la definizione.
- `#pressione`: tolto «cioè un newton su un metro quadrato» (ripeteva $1\,\mathrm{N/m^2}$).
- `#risultante-parete`: «Poiché la crescita è lineare» ripeteva la frase precedente → «Per questo la media è…».
- `#stevino`: tolto l'inciso «(primo strato, secondo strato…)».

## Voce
Nessuna frase prescrittiva, a effetto o con «tu»; frazioni in colonna; nessuna lineetta lunga. Le negazioni rimaste sono dell'originale o necessarie (filo che può solo tirare).

## Inglese
Traduzione integrale e fedele del testo italiano finale, stessi blocchi, numeri con il punto decimale, grafia britannica come nel file esistente (metre, centre, pressurised). Le stesse sei correzioni sono state riportate.

## Dubbi rimasti
- In inglese «gauge pressure» traduce sia «sovrapressione» sia «pressione relativa», come nelle schede inglesi: coerente, lasciato così.
- Nell'esempio del manometro d'acqua l'inglese non ripete «dalle iniziali inglesi left e right» (ovvio in inglese): scelta dell'autore, accettata.
- Note dell'autore su schede e domande (non toccate) confermate solo in lettura, non corrette.
