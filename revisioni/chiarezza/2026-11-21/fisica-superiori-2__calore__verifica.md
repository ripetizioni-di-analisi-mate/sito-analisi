# Verifica · Fisica 2° anno · Calore e calorimetria

**Controllo** (`python3 strumenti/controlla_capitolo.py fisica-superiori-2 calore`): `ESITO: a posto`, nessun ERRORE e nessun AVVISO. 22 blocchi, 7 esempi, 11 figure, come l'originale.

**Parole** (conteggio dello script): italiano 4369 → 4374 (×1,70 rispetto a 2577); inglese 4580 → 4590 (×1,78 rispetto a 2581). Entrambe entro i limiti (1,7 IT, 1,8 EN). Non ho tolto testo: il capitolo era già nel limite e le aggiunte dell'autore sono definizioni, passaggi di calcolo o righe per schede e domande.

## Conti rifatti

Circa 45 numeri ricalcolati con Python, nessuno sbagliato: 2100/2100 = 1,0 K e 2100/200 = 10,5 K; 270·30 = 8100 J, 270·15 = 4050 J; 420/0,40 = 1050 e 500/0,40 = 1250 J/(kg K); 160/0,40 = 400 J/(kg K), 120 − 80 = 40 J/K, 40 + 240 = 280 J/K; media 30 °C e ±7,5 kg K; 24000/800 = 30 °C, 4000/800 = 5 K, −5600 J e +9600 J; tabella −7,2/−6,4/−5,6 kJ; 840 + 160 = 1000 J/K, 420/4200 = 0,10 kg; 450 W, 40 s, 24 kJ; 5600 + 5600 J, 20 K, 0,747 e media pesata dei rendimenti; 8(T − 20) = 240 → 50 °C; 40 W e 8 W/m²; 20 W con salti 5 e 15 K; 30 + 10 W, 0,45 K/W; 1,50 K/W, 20 W, interfacce 20 °C e −2 °C. Testo e figure concordano (pendenze, punti E e I, rette e posizione delle interfacce a 4 e 7 cm).

## Completezza

Confronto blocco per blocco con l'originale: ogni regola, caso e precisazione è ancora nel suo blocco con ancora; dati numerici degli esempi invariati. Le aggiunte segnalate dall'autore (°C/K, cambiamento di stato, pendenza con assi scambiati, pesi = masse, tre o più corpi, energia dispersa, calorimetro e massa d'acqua equivalente, potenza nominale, gradiente, W/m², ponte termico) sono corrette e coprono schede, tracce e domande.

## Correzioni

- `#equilibrio`, dimostrazione: «Si moltiplica ogni capacità per i termini fra parentesi» → «Per la proprietà distributiva $C_1(T_f-T_{1,i})=C_1T_f-C_1T_{1,i}$, e lo stesso vale per il secondo termine» (regola: niente «la parentesi» per indicare un'espressione; il passaggio è ora scritto).
- `#confine-termico`: «quella misura non basta» (senza antecedente) → «la misura dell'energia arrivata all'insieme non basta».
- Inglese: stesse due correzioni; tre imperativi resi impersonali come in italiano («Mix …» → «… are mixed», «Now reverse the order» → «The order of the layers is now reversed», «Consider two heat capacities» → «Two heat capacities are considered»).

## Termini e sigle

Rilettura completa: SI, J, kJ, W, °C, K, $\Delta$, $\eta$, $\Sigma$, $\simeq$, i pedici, fase, proporzionale, modulo, pendenza, capacità termica, omogeneo, potenza dispersa, calorimetro, rendimento, regime, fluido, conducibilità, gradiente, resistenza termica, serie, parallelo, interfaccia: tutti definiti alla prima comparsa. Nessuna mancanza trovata.

## Inglese

Traduzione completa e fedele del testo italiano finale, stessi blocchi, numeri e formule, punto decimale, grafia britannica (metre, neighbouring).

## Dubbi rimasti

- Come segnalato dall'autore: $c$ dell'acqua 4200 e del rame 400 J/(kg K) sono dati d'esercizio arrotondati (reali circa 4186 e 385), lasciati come nell'originale.
- Note dell'autore su domande e schede (decimali troncati nelle opzioni delle domande 21, 27, 48, 56; $\simeq$ davanti a risultati esatti; sei cifre in scheda 4 e traccia 4) non verificate né corrette da me, perché fuori dai file assegnati.
