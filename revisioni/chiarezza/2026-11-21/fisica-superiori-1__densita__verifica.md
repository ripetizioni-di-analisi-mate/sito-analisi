# Verifica · Fisica 1° anno · Densità

**Controllo finale** (`python3 strumenti/controlla_capitolo.py fisica-superiori-1 densita`): `ESITO: a posto`, nessun ERRORE, nessun AVVISO.

**Parole** (conteggio dello script)
- Italiano: originale 2619; consegna dell'autore 4779 (×1,82); dopo la verifica 4677 (×1,79).
- Inglese: originale 2578; consegna dell'autore 4970 (×1,93); dopo la verifica 4765 (×1,85).

L'inglese resta un po' sopra 1,8 perché la traduzione dello stesso testo è circa il 3-4% più lunga dell'italiano (l'inglese originale era invece più corto). Per scendere ancora bisognerebbe togliere definizioni o passaggi di calcolo: mi sono fermato.

## Conti
Rifatti con Python/sympy 76 valori (tutti gli esempi, gli intervalli, le conversioni, l'intersezione delle rette, il fattore 10³, le percentuali). Sbagliati: 0.

## Completezza
Confronto blocco per blocco con l'originale: ogni regola, caso e precisazione è ancora nel suo blocco con ancora; dati numerici degli esempi invariati; righe delle figure identiche. Testo attorno alle figure coerente con gli attributi (P e Q, punto P a 0,75/750, 28 e 40 mL, A e B a 4 cm³, E a (20; 66), punti 2950 e 3000 kg/m³).

## Correzioni richieste
- **mg/mL** (domanda 29): aggiunto nel blocco `#unita` il milligrammo come millesima parte del grammo, con il caso 0,6 g/mL = 600 mg/mL (IT ed EN).
- **Frase in più nell'inglese** (`#grafico`): tolta la frase sulle coordinate *abscissa*/*ordinate*; ora l'inglese traduce l'italiano («the axis of **abscissas** (x-axis)», «the axis of **ordinates** (y-axis)»). Di conseguenza in `#intercetta` e `#grafici-con-tara` «vertical coordinate(s)» è diventato «ordinate(s)», come in italiano.

## Alleggerimento (IT ed EN insieme)
Tolte solo ripetizioni: la frase sotto P e Q che ripeteva il titolo del grafico; il doppione «per passare da g/cm³ a kg/m³ si moltiplica per mille»; la spiegazione del segno %; il secondo calcolo della lettura comune 66 g e «le due rette si incontrano in E» (già nel titolo della figura); «il secondo ha massa maggiore e densità minore»; la descrizione delle due curve (già nella legenda); «ciascun componente occupa metà del volume» (titolo della figura); la frase sulle unità del prodotto in `#geometria`; la densità ricalcolata con il volume per immersione in `#due-misure-volume` (verifica doppia); due frasi unite con «quindi». Nell'inglese, in più, una trentina di frasi rese più asciutte senza cambiare il contenuto.

## Voce e inglese
Nessun «tu», nessuna lineetta, nessun tono prescrittivo (i «può/possono» rimasti sono nei titoli dei blocchi, che non si toccano). Inglese: stessi blocchi, stesse frasi (riallineata anche la frase del sostegno in `#tara-del-sostegno`), punto decimale, grafia britannica.

## Dubbi rimasti
- La tara è definita nell'esempio `#tara`, dopo il blocco `#spostamento` intitolato «Immersione e tara», come nell'originale.
- Non ho eseguito la build del sito; lo script ha reso entrambi i file senza errori.
