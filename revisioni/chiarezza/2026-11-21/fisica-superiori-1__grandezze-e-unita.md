# Revisione di chiarezza · fisica-superiori-1 / grandezze-e-unita

Controllo (`strumenti/controlla_capitolo.py`): **ESITO a posto**, nessun ERRORE e nessun AVVISO.

## Parole

- Italiano: 2552 → 4614 (×1,81)
- Inglese: 2559 → 4829 (×1,89)

L'aumento supera di poco la fascia attesa (1,2-1,7) e resta sotto la soglia di avviso (2,0). Una prima stesura era a ×2,01 ed è stata accorciata togliendo esempi doppi e descrizioni lunghe delle figure. Il resto dell'aumento viene dalle definizioni dei termini che l'originale usava senza spiegarli e dalle due tabelle/elenchi nuovi (le formule contano come parole).

## Che cosa è cambiato

1. **Sigle, simboli e unità spiegati alla prima comparsa**: SI (Sistema Internazionale), m, kg, s, N (newton), g, L, mL, h, min, ms, m/s («metri al secondo»), kg/m³, cm² e cm³, la lettera greca µ («mi»), ℓ (elle corsiva), ℓ₀, |a| (valore assoluto), le parentesi quadre per l'unità di un termine.
2. **Termini definiti in una riga dove compaiono**: unità di misura, valore numerico, massa, forza peso, campo gravitazionale, potenza di dieci ed esponente (anche negativo), multiplo e sottomultiplo, rapporto, reciproco, fattore di conversione, rapporto unitario, membri di un'uguaglianza, unità lineare/quadrata/cubica, capacità, recipiente graduato, sezione, quota, pendenza, coefficiente, numero intero, cifre significative, addendi, ordine di grandezza, scarto, arrotondare, densità, adimensionale, grandezze omogenee, termini, modello, percentuale, frazione complementare.
3. **Numeri prima delle lettere**: il teorema sul fattore di conversione parte da 1 m = 100 cm e 2,5 m = 250 cm, poi enuncia la regola con U, W e c (enunciato originale conservato).
4. **Prefissi in tabella** (prefisso, simbolo, valore, esempio con il metro) al posto dell'elenco in una sola frase.
5. **Passaggi di calcolo scritti**: 72 km/h → 20 m/s in una riga per passaggio; area del foglio nei due metodi con i prodotti espliciti; 360 m/min → 6 m/s; litro = dm³ = 1000 cm³; istanti t₁, t₂, t₃ del sensore prima della formula generale; i tre contributi di ℓ₀ + bt + ct² con le unità.
6. **Regole della notazione scientifica** in elenco (prodotto, rapporto, normalizzazione, somma), ciascuna con un caso numerico; spiegato che cosa conta l'esponente (posti di cui si sposta la virgola).
7. **Controllo dimensionale**: aggiunto il controesempio numerico per A = 2bh (b = 3 m, h = 2 m: 12 m² contro 6 m²) e spiegato che cosa significa «condizione necessaria».
8. Tolti il punto di vista da laboratorio e i verbi figurati («l'unica unità che sopravvive», «il numero 2,4 sarebbe compatibile con», «se cambio unità» in prima persona). Ogni figura ha una frase che dice che cosa mostra. Frontmatter, titoli ##, ancore, titoli dei blocchi, righe delle figure e dati numerici sono invariati.

## Com'era / Com'è ora (blocco `#prefissi`)

**Com'era**

> Un **prefisso** indica una potenza di dieci che moltiplica l'unità. Chilo (k) vale 10³, deci (d) vale 10⁻¹, centi (c) vale 10⁻², milli (m) vale 10⁻³ e micro (µ) vale 10⁻⁶. Si parte sempre dal simbolo intero. Per esempio, in mm la prima lettera significa milli, mentre la seconda significa metro. In un millimetro è contenuto un millesimo di metro.

Lo studente che arriva dalle medie non sa che cosa sia 10⁻³, non sa leggere µ e non trova nessuna uguaglianza con un'unità che conosce.

**Com'è ora**

> Una **potenza di dieci** è un prodotto di fattori tutti uguali a 10. L'**esponente**, scritto in alto a destra, indica quanti sono i fattori. Per esempio 10³ = 10·10·10 = 1000. Con un esponente negativo si divide 1 per la potenza con l'esponente positivo, quindi 10⁻² = 1/10² = 1/100 = 0,01 (nel file le frazioni sono in colonna).
>
> Un **prefisso** è una parte di parola messa davanti al nome di un'unità. Il prefisso indica una potenza di dieci che moltiplica l'unità. Si ottiene un **multiplo** quando la nuova unità è più grande di quella di partenza e un **sottomultiplo** quando è più piccola.
>
> [tabella: chilo, k, 10³ = 1000, 1 km = 1000 m; … ; micro, µ, 10⁻⁶ = 0,000001, 1 µm = 0,000001 m]
>
> Il simbolo µ è la lettera greca «mi». Un simbolo si legge per intero. La prima lettera è il prefisso e il resto è l'unità. Per esempio, in mm la prima lettera significa milli, mentre la seconda significa metro. In un millimetro è contenuto un millesimo di metro.
>
> Lo stesso prefisso si applica a ogni unità. Davanti al grammo (simbolo g) il prefisso chilo dà il chilogrammo, quindi 1 kg = 1000 g. Una massa di 700 g vale perciò 700/1000 kg = 0,7 kg.

## Errori trovati nell'originale

Nessun errore numerico: tutti i conti dell'originale sono stati ricalcolati e sono giusti (350 µm = 0,0350 cm; 3 cm² = 3·10⁻⁴ m²; 40 mL = 4·10⁻⁵ m³; 360 m/min = 6 m/s; vasca 7 cm; sensore 3 s e 3250 ms; scarto 80 mm e 100 mm dopo l'arrotondamento; 72 km/h = 20 m/s; 11 m; rotolo 1,50 m; bottiglia 60 % e 300 mL). I punti delle figure corrispondono ai dati.

Due imprecisioni di forma sistemate: «Se cambio unità» (prima persona) e la frase vaga «l'ultima cifra indicata dalla bilancia riguarda la lettura che lo strumento fornisce», ora «è quella dei millesimi di chilogrammo, cioè dei grammi».

## Aggiunte per coprire gli esercizi

- **Grammi e chilogrammi** (dafare «Grammi e chilogrammi», scheda 4): 1 kg = 1000 g e 700 g = 0,7 kg, nel blocco `#prefissi`. L'esercizio cita l'ancora `#si`, ma lì i prefissi non sono ancora stati introdotti.
- **Newton e simbolo N** (domande su forza peso e su N·m): nell'esempio «Leggere una bilancia».
- **Adimensionale** e numero di giri (domanda sulla bobina): nel blocco `#dimensioni`.
- **Densità** definita con un caso numerico (10 kg in 2 m³) nel blocco `#dimensioni`.
- **Verso opposto per le aree** (1 m² = 10000 cm², usato da «lato 9 m, area in cm²») e conversione di 50 cm² nel blocco `#superfici-volumi`.
- **Durata in ore e minuti** con un conto completo (2 h 15 min = 8100 s) nel blocco `#tempo`.
- **Confronto di due misure** (0,8 m e 75 cm) nel blocco `#confronti`.

## Dubbi rimasti

- Lunghezza a ×1,81, sopra l'1,7 atteso: se serve accorciare, i primi candidati sono le righe che descrivono le figure e la tabella dei prefissi (ultima colonna).
- Non coperti in teoria perché compaiono in una sola domanda ciascuno e la spiegazione della domanda è autosufficiente: hertz (Hz), portata, simbolo Δ usato nelle schede.
- «Massa = quantità di materia di un corpo» e «campo gravitazionale = intensità dell'attrazione» sono definizioni di livello scolastico, scelte per un quattordicenne; il capitolo sulle forze potrà precisarle.
- «Ordine di grandezza» è definito come la potenza di dieci della notazione normalizzata (una delle due convenzioni in uso; l'altra arrotonda alla potenza più vicina).
- Inglese: «omogenee» reso con *of the same kind*, come nel file esistente; grafia britannica e *normalized* come nelle schede inglesi.
