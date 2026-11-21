# Verifica · matematica-superiori-2 / equazioni-secondo-grado

Controllo `strumenti/controlla_capitolo.py`: **ESITO: a posto** (nessun ERRORE, nessun AVVISO).

## Parole
- Italiano: originale 2193; prima del mio intervento 3587 (×1,64); dopo 3587 (×1,64).
- Inglese: «originale» 2210; prima 3688 (×1,67); dopo 3692 (×1,67).
- Il capitolo era già sotto 1,7 / 1,8: nessun taglio necessario, nessun aumento.

## Conti rifatti
Circa 40 conti rifatti con sympy (radici di tutti gli esempi, discriminanti 28, 16, −8, 9, 36, 4k−3, 4, −4, −3; identità del quadrato completato; $-1\pm3\sqrt2$; radice doppia 2 per $k=\tfrac34$; fattorizzazioni; somma dei quadrati 29; $b=2$ e altra radice −4; lati 5 e 9, 6 e 8; $-(t-7)(t+1)$). Nessun errore.

## Completezza
Confronto blocco per blocco con l'originale: ogni regola, caso ed esempio è ancora nel suo blocco con ancora; numeri degli esempi invariati; 9 righe delle figure identiche; testo attorno alle figure coerente con gli attributi. Termini e simboli (coefficienti, radice, $S$, $\varnothing$, $\iff$, $\pm$, $\Delta$, $\lambda$, valore assoluto, molteplicità, vertice, asse, monico, $\mathbb R\setminus$, candidati, parametro, identità, semiperimetro, modello) definiti alla prima comparsa. Copertura di schede, tracce e domande già completa.

## Correzioni fatte
- Voce (IT e EN): due punti al posto di un connettivo in `#fratte` (esempio del punto mancante, «privata del punto di ascissa 2: in figura…») e in «Richiedere due radici positive» («retta orientata: il tratto…»): spezzati in due frasi.
- Inglese, `#incomplete`: «If $c=0$ (there is no constant term), the equation has no constant term» era tautologico → «the equation is called an equation **with no constant term**» (stessa resa delle schede inglesi, «No Constant Term»).

## Inglese
Traduzione completa e fedele del testo italiano finale (stessi blocchi, formule, numeri con punto decimale, grafia britannica: *factorisation*, *centimetres*).

## Dubbio da segnalare al coordinatore
Il file inglese in HEAD (`git show HEAD:src/content-en/teoria/matematica-superiori-2/equazioni-secondo-grado.md`) contiene un altro capitolo (fluidi: «Fluids in motion», Bernoulli, Torricelli). Quindi frontmatter e titoli `##` inglesi non potevano essere presi «identici dal file inglese esistente»: li ha scritti l'autore, e il rapporto ×1,67 in inglese è calcolato su quel file sbagliato. Il clone è poco profondo e non ho potuto vedere versioni precedenti. Il testo inglese attuale è comunque la traduzione corretta del capitolo.

Segnalazioni dell'autore su schede e domande («la parentesi», tono prescrittivo in scheda 4) confermate; non toccate (fuori dai miei file).
