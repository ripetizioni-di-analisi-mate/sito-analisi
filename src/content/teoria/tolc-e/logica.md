---
titolo: "Logica e ragionamento per il TOLC-E"
sommario: "Implicazioni, negazioni, quantificatori, insiemi e vincoli da usare nei quesiti di logica."
---

Nella sezione di logica del TOLC-E ci sono 13 quesiti in 30 minuti. Nei problemi qui proposti, la conclusione deve seguire dalle premesse del testo. I contesti cambiano, dai turni di un ufficio ai gruppi di iscritti, mentre le regole di deduzione restano le stesse.

## Connettivi e negazioni

Un enunciato può essere vero o falso. Con $P\land Q$ si afferma che valgono entrambe le condizioni. Con $P\lor Q$, nel significato inclusivo, si afferma che ne vale almeno una. Quando il testo richiede **esattamente una**, esclude anche il caso in cui valgano entrambe.

Per negare «P e Q» basta che fallisca almeno una delle due condizioni. Per negare «P o Q», nel senso inclusivo, devono fallire entrambe.

**Esempio.** Il piano richiede che un preventivo sia sia firmato sia numerato. Quale condizione segnala il mancato rispetto del piano? È sufficiente che manchi la firma oppure che manchi il numero. Il caso in cui mancano tutti e due rientra già in questa alternativa.

## Implicazione e contrapposta

L'implicazione $P\Rightarrow Q$ esclude il caso in cui $P$ vale e $Q$ manca. Se sai che $P$ vale, deduci $Q$. Se sai che $Q$ manca, deduci che manca anche $P$. Questo secondo passaggio è l'uso della **contrapposta**, $\neg Q\Rightarrow\neg P$.

**Esempio.** Se una fattura supera il controllo, riceve un codice. Una fattura senza codice non ha superato il controllo. Una fattura con codice potrebbe averlo ricevuto per un'altra ragione, perché la premessa descrive soltanto ciò che accade dopo il controllo.

## Necessario e sufficiente

Se vale $P\Rightarrow Q$, $P$ è **sufficiente** per $Q$ e $Q$ è **necessaria** per $P$. In «si accede solo se si possiede il pass», la freccia va dall'accesso al possesso del pass. In «basta avere un pass per accedere», va nella direzione opposta. «Se e solo se» richiede entrambe le direzioni.

**Esempio.** Per ritirare un ordine serve un documento. Mostrare il documento può lasciare altri requisiti da verificare. La mancanza del documento esclude invece il ritiro per la regola data.

## Quantificatori e controesempi

«Tutti» descrive l'intero gruppo. Per smentirlo occorre trovare almeno un elemento del gruppo privo della proprietà. «Alcuni» significa almeno uno e lascia aperta la possibilità che la proprietà valga per tutti. «Nessuno» esclude qualunque elemento con entrambe le caratteristiche.

**Esempio.** Alcuni soci sono volontari e ogni volontario ha seguito il corso. Si può concludere che almeno un socio ha seguito il corso. Il socio da usare nel ragionamento è proprio uno dei volontari di cui è già garantita l'esistenza.

## Insiemi e conteggi

L'unione raccoglie chi appartiene ad almeno uno dei gruppi. L'intersezione contiene chi appartiene a entrambi. Per due gruppi finiti, $|A\cup B|=|A|+|B|-|A\cap B|$. Per contare chi appartiene a uno solo, sottrai anche l'intersezione dal totale dell'unione.

**Esempio.** Su $40$ iscritti, $22$ partecipano al primo laboratorio, $19$ al secondo e $8$ a entrambi. L'unione vale $33$. Sette persone non partecipano ad alcun laboratorio e $25$ partecipano a uno solo.

## Ordini e abbinamenti

Scrivi i posti fissi per primi. Un vincolo come «B subito dopo A» impone un blocco, mentre «B dopo A» lascia aperta la distanza. Per un abbinamento senza ripetizioni, segna le coppie escluse e cancella una scelta dalle altre righe quando l'hai assegnata.

**Esempio.** In quattro fasce consecutive, D è ultima. C è subito dopo A e B è prima di A. La coppia A–C può stare soltanto nelle fasce due e tre. L'ordine è quindi B, A, C, D.

## Successioni, cicli e casi peggiori

Nei quesiti con un procedimento esplicito, applica la regola nell'ordine indicato e chiarisci se il valore iniziale conta come primo termine oppure come passo zero. Se le mosse si ripetono, raggruppa i cicli completi e calcola le mosse rimanenti. Quando devi garantire un risultato, cerca il caso che lo ritarda di più.

**Esempio.** Un sacchetto contiene sette tessere bianche e quattro nere. Per garantire una nera senza reinserimento, possono uscire prima tutte e sette le bianche. L'ottava estrazione è sufficiente.

[Struttura e sillabo del TOLC-E — CISIA](https://www.cisiaonline.it/tolc/tolc-e/struttura-della-prova-e-sillabo)
