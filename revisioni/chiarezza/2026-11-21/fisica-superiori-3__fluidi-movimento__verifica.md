# Verifica · Fisica 3° anno · Fluidi in movimento

**Controllo** (`python3 strumenti/controlla_capitolo.py fisica-superiori-3 fluidi-movimento`): `ESITO: a posto`, nessun ERRORE.

**Parole**: italiano 4123 → 4115 (×1,69 sull'originale di 2438); inglese 4131 → 4123 (×1,79 sull'originale di 2297). Entro i limiti 1,7 e 1,8.

## Conti rifatti

Circa 30 numeri ricalcolati con Python: 50/15 = 3,33 L/s; 0,015·4·cos 60° = 0,030 m³/s; 1,20·0,008 = 0,0096 kg/s e 0,0096/0,96 = 10 L/s (+25%); 16000, 10000, 6000 Pa e 18, 2, 10 kPa; Pitot √(2·8000/1000) = 4 m/s; Venturi v₁² = 4, Q = 0,020 m³/s; tabella di taratura 1,5/6/13,5 kPa con la parabola 0,015 Q²; Torricelli 4 e 2 m/s; serbatoio chiuso 9 + 7 = 16 m²/s²; 1/0,8⁴ = 2,44, 0,8⁴ = 0,41, Re ×1,25; 2⁴ = 16; velocità limite di Stokes ricavata da 6πηrv = (ρₛ − ρ)·(4/3)πr³g. Nessun conto sbagliato.

## Completezza

Confronto blocco per blocco con l'originale: ogni regola, caso e precisazione è ancora nel blocco con ancora in cui stava (portata non uniforme, media di sezione, stazionarietà con particella che accelera, continuità con gas, biforcazione e ripartizione, pressione assoluta/relativa, Stevino, ristagno, recupero di pressione e i tre casi di insufficienza, ipotesi di Torricelli, contrazione del getto, Poiseuille, Stokes, Re, velocità limite e risalita, tratti in serie). Dati numerici invariati, righe delle figure identiche. Nessun contenuto da rimettere.

## Correzioni

- Linea di corrente: era «il percorso seguito da una particella di fluido» (vero solo in regime stazionario) → «In regime stazionario tutte le particelle che passano per uno stesso punto seguono lo stesso percorso, detto linea di corrente» (IT ed EN).
- Unità della viscosità: «pascal per secondo» (si legge Pa/s) → «pascal secondo», come già nell'inglese.
- Definizione di pascal ripetuta due volte nel blocco `#bernoulli`: tolta la prima ($1\,\mathrm{Pa}=1\,\mathrm{N/m^2}$ resta nella riga sui termini dell'equazione).
- «Il saldo è positivo. Una sezione più alta può quindi…» → una frase con «Poiché».
- Inglese: «A gauge pressure of 3500 Pa» → «An overpressure of 3500 Pa» (è la differenza rispetto allo sbocco, non la pressione relativa all'atmosfera).

## Lettura, termini e copertura

Ogni termine e simbolo è definito alla prima comparsa (fluido, sezione, Δ, SI, L, ρ, ṁ, regime stazionario, monte/valle, strozzatura, θ, coseno, normale, incomprimibile, biforcazione, ideale, pressione, quota, peso specifico, presa, ristagno, gola, taratura, pelo libero, efflusso, area efficace, coefficiente di efflusso, η, newtoniano, laminare/turbolento, velocità relativa, Re, velocità limite, serie). Controllate le aggiunte dell'autore per schede, esercizi e domande: corrette e necessarie. Voce: nessun «tu», nessuna formula vietata, nessun tono prescrittivo.

## Inglese

Traduzione completa e fedele del testo italiano finale (stessi blocchi, numeri, elenchi e tabella; punto decimale; grafia britannica come nel file esistente).

## Dubbi

Nessuno oltre a quelli già segnalati dall'autore (soglia di Re «circa 2000»). Le note dell'autore su schede e domande (imperativi, opzioni con troppe cifre) restano da valutare a parte.
