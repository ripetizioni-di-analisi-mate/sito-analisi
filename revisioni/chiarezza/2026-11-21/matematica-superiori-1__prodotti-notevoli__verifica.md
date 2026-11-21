# Verifica · Matematica 1° anno · Prodotti notevoli

## Esito

`python3 strumenti/controlla_capitolo.py matematica-superiori-1 prodotti-notevoli` → **ESITO: a posto** (nessun ERRORE, nessun AVVISO).

| | Originale | Consegna dell'autore | Dopo la verifica |
|---|---|---|---|
| Italiano | 2390 parole | 4688 (×1,96) | **4401 (×1,84)** |
| Inglese | 2383 parole | 4869 (×2,04) | **4558 (×1,91)** |

Frontmatter, 8 titoli `##`, 9 ancore con i loro titoli, 10 righe delle figure: invariati. 30 blocchi in entrambe le lingue, 211 paragrafi e 644 formule allineati fra italiano e inglese.

## Correttezza

- Rifatti con sympy 53 conti e identità del capitolo (tutte le identità, gli esempi numerici, le aree delle figure, $201\cdot198$, $103\cdot97$, $105\cdot95$, perimetro e area, somma e differenza dei quadrati, punti dei grafici). **Nessun errore**, né nell'originale né nella revisione.
- Le descrizioni dei grafici corrispondono agli attributi delle righe (punti, segmenti, funzioni).

## Completezza rispetto all'originale

Confronto blocco per blocco: ogni regola, caso, eccezione e precisazione dell'originale è ancora nel suo blocco (compresi: «vale anche per valori negativi», la sostituzione fra espressioni identiche, l'accordo solo nello zero del binomio, la cancellazione dei prodotti misti solo a distanze uguali, l'area massima e il caso «area maggiore di 400», i segni indeterminati dei binomi). Dati numerici degli esempi invariati. Niente da rimettere.

## Termini aggiunti

- **forma fattorizzata** (usata in due schede svolte e in una domanda): aggiunta nel teorema `#somma-differenza`, «trasforma la differenza fra due quadrati in un prodotto, cioè nella sua forma fattorizzata», con l'esempio $x^2-9=(x+3)(x-3)$ già presente. Inglese: *factored form*.
- Gli altri termini usati da schede, tracce e domande (quadrato perfetto, termine noto, termine misto, doppio prodotto, termine lineare, si annulla, media) erano già definiti dall'autore.

## Alleggerimento (italiano e inglese insieme)

Tolti soltanto ripetizioni, verifiche doppie ed esempi aggiunti in più:
- teoremi `#quadrati` e `#somma-differenza`: tolti gli esempi d'apertura $(10+3)^2$ e $(10+3)(10-3)$ aggiunti dall'autore (gli esempi con i numeri seguono subito, nei blocchi della figura: $a=4$, $b=2$ e la figura a L $7$, $2$; resta $13^2=169$ come esempio della definizione di quadrato);
- «in simboli $a,b\in\mathbb R$» ripetuto per esteso in tre teoremi: ora è spiegato solo alla prima comparsa;
- descrizioni dei grafici che ripetevano i numeri appena scritti (controesempio, termine mancante, somma e differenza): ridotte a una frase;
- verifiche doppie: «$16+8+8+4=36$» scritto due volte, «Infatti $40+10=50$…», l'esempio $2x^2+3x+1$ / $2x^2+5x+1$ nel teorema `#coefficienti` (lo stesso fatto è mostrato dall'esempio successivo con $4x^2-6x+9$), il secondo esempio di quadrato perfetto $x^2+6x+9$ (il blocco ha già $9x^2-24x+16$);
- frasi che ripetevano un elenco o una riga di calcolo (doppi prodotti con $-y$, otto pezzi del cubo, segno del coefficiente $54$, prodotti misti opposti), raccordi e precisazioni accessorie.

Non sono scesi sotto 1,8: italiano 1,84, inglese 1,91. Per scendere ancora bisognerebbe togliere definizioni alla prima comparsa (addendo, monomio, coefficiente, binomio, opposto, valore assoluto, «se e solo se», media, perimetro, proporzionale…) o passaggi di calcolo (dimostrazioni passo per passo, $6x+9=51$ in due passi, i quattro prodotti di $201\cdot198$, $d^2=400-384$): mi sono fermato qui. L'inglese resta più lungo perché la traduzione usa più parole per le stesse frasi (rapporto inglese/italiano circa 1,04 paragrafo per paragrafo).

## Voce

Nessuna lineetta lunga, nessun «tu», nessun «conviene/devi/bisogna», nessuna «parentesi»; «può/possono» 0,4 ogni 1000 parole. Riformulati in forma più diretta alcuni passaggi («Se due espressioni sono legate da un'identità, una si può scrivere…» → «Due espressioni legate da un'identità si scrivono l'una al posto dell'altra… Poiché hanno lo stesso valore…»; attenzione «Opposto del quadrato»: prima l'uguaglianza solo in $x=3$, poi il controesempio $x=0$, senza ripeterlo due volte).

## Inglese

Traduzione completa e fedele del testo italiano finale: stessi blocchi, stessi paragrafi, stesse formule, punto decimale. Grafia americana come nel file esistente e nelle schede (*recognizing*, *centimeters*). Ogni modifica fatta in italiano è stata fatta anche in inglese.

## Esercizi da fare: titolo, traccia e soluzione (solo controllo, file non modificati)

Ho controllato tutti i 14 file di `src/content/dafare/matematica-superiori-1/prodotti-notevoli/` e i corrispondenti di `src/content-en/dafare/…` (le tracce e le soluzioni inglesi sono le stesse, solo tradotte: stesso difetto in entrambe le lingue). Soluzioni corrette calcolate con sympy.

| File | Titolo | Traccia (in breve) | Soluzione scritta | Soluzione corretta della traccia | Corrisponde |
|---|---|---|---|---|---|
| 1 | Quadrati di somme | sviluppare $(x+11)^2$ | $x^2+22x+121$ | $x^2+22x+121$ | **sì** |
| 2 | Quadrati di differenze | calcolare $111\cdot89$ con la media | $x^2-22x+121$ | $9879$ | no |
| 3 | Somma per differenza | sviluppare $(x+y+11)^2$ | $x^2-121$ | $x^2+y^2+121+2xy+22x+22y$ | no |
| 4 | Quadrati con coefficienti | semplificare $(x+11)^2-(x-11)^2$ | $4x^2+44x+121$ | $44x$ | no |
| 5 | Cubi di somme | semplificare $(x+11)^2+(x-11)^2$ | $x^3+33x^2+363x+1331$ | $2x^2+242$ | no |
| 6 | Cubi di differenze | aumento di area da lato $x$ a $x+11$ | $x^3-33x^2+363x-1331$ | $22x+121$ | no |
| 7 | Coefficienti centrali | sviluppare $(x-11)^2$ | $22$ | $x^2-22x+121$ | no |
| 8 | Completamenti di quadrati | calcolare $(x+11)(x-11)$ | $121$ | $x^2-121$ | no |
| 9 | Quadrati numerici | sviluppare $(2x+11)^2$ | $441$ | $4x^2+44x+121$ | no |
| 10 | Prodotti numerici simmetrici | $(x+11)^3$ dal quadrato | $9879$ | $x^3+33x^2+363x+1331$ | no |
| 11 | Quadrati di trinomi | sviluppare $(x-11)^3$ | $x^2+2xy+22x+y^2+22y+121$ | $x^3-33x^2+363x-1331$ | no |
| 12 | Differenze di quadrati sviluppati | $c$ tale che $x^2+cx+121=(x+11)^2$ | $44x$ | $c=22$ | no |
| 13 | Somme di quadrati sviluppati | termine noto di $x^2-22x+\square=(x-11)^2$ | $2x^2+242$ | $121$ | no |
| 14 | Variazioni di area | $21^2$ con $21=10+11$ | $22x+121$ | $441$ | no |

Che cosa è successo: **titolo, campo `teoria:` e soluzione sono coerenti fra loro in ogni file**; sono le **tracce** a essere spostate. La traccia che oggi sta nel file *k* appartiene al file indicato qui sotto (quello con titolo e soluzione giusti):

1→1, 2→10, 3→11, 4→12, 5→13, 6→14, 7→2, 8→3, 9→4, 10→5, 11→6, 12→7, 13→8, 14→9.

Per sistemare basta rimettere ogni traccia nel file giusto (stessa permutazione in italiano e in inglese), lasciando titolo, `teoria:`, parole e soluzione dove sono. Da notare anche:
- l'unica chiave di correzione del capitolo, `prodotti-notevoli/11` in `src/data/chiavi/matematica-superiori-1.json`, ha etichetta «Sviluppo di $(x+y+11)^2$» e il valore giusto per quella traccia: tornerà coerente quando la traccia di `3.md` sarà spostata in `11.md`; oggi lo studente che risponde correttamente a $(x-11)^3$ viene dato in errore;
- le altre verifiche automatiche leggono la soluzione scritta, quindi oggi danno errore a chi risponde giusto in 13 esercizi su 14;
- le domande a tempo 1-14 del capitolo hanno un testo proprio e non dipendono da queste tracce.

## Dubbi rimasti

Nessuno sul contenuto della teoria.
