---
titolo: "Ragionamento numerico: orologi, calendari, ordinamenti"
sommario: Come si calcolano l'angolo tra le lancette, le ore segnate da un orologio che va avanti o indietro, le durate e i fusi orari, il giorno della settimana dopo un certo numero di giorni, le posizioni in una fila o in una classifica, le età relative, il numero minimo di estrazioni con il principio dei cassetti e le relazioni di parentela.
---

## Orologi e angolo tra le lancette

:::definizione{#quadrante-orologio titolo="Quadrante dell'orologio"}
Il quadrante di un orologio a lancette è un cerchio diviso in $12$ ore, e ogni ora è divisa in $5$ tacche da un minuto, per un totale di $60$ tacche. L'angolo giro misura $360°$, quindi ogni ora del quadrante corrisponde a
$$
\frac{360°}{12} = 30°
$$
e ogni tacca dei minuti a $\dfrac{360°}{60} = 6°$. Le posizioni delle lancette si misurano in gradi a partire dal $12$, girando in senso orario.

- La **lancetta dei minuti** compie un giro in $60$ minuti, perciò avanza di $6°$ al minuto.
- La **lancetta delle ore** compie un giro in $12$ ore, perciò avanza di $30°$ all'ora. Poiché un'ora dura $60$ minuti, avanza di $\dfrac{30°}{60} = 0{,}5°$ al minuto.

Alle 3:00 la lancetta delle ore è a $90°$ e quella dei minuti a $0°$. Venti minuti dopo la lancetta dei minuti è a $20 \cdot 6° = 120°$, mentre quella delle ore è salita a $90° + 20 \cdot 0{,}5° = 100°$.
:::

::::teorema{#angolo-lancette titolo="Angolo tra le lancette"}
Alle ore $h$ e $m$ minuti, con $h$ contato da $0$ a $11$ sul quadrante, la lancetta delle ore si trova a $30h + 0{,}5m$ gradi e quella dei minuti a $6m$ gradi. L'angolo tra le lancette è quindi
$$
\alpha = \left| \, 30h - 5{,}5\,m \, \right| .
$$
Se $\alpha$ supera $180°$, l'angolo minore tra le lancette è $360° - \alpha$. La formula serve a rispondere ai quesiti del tipo "quale angolo formano le lancette alle …" senza disegnare l'orologio. Alle 15:40 si usa $h = 3$, perché le 15 corrispondono al $3$ del quadrante, e si ottiene $\alpha = |90 - 220| = 130°$.

::grafico{assi=0 uguale=1 curve="3*cos(t),3*sin(t),0,6.29" linee="0,2.75 0,3;1.375,2.382 1.5,2.598;2.382,1.375 2.598,1.5;2.75,0 3,0;2.382,-1.375 2.598,-1.5;1.375,-2.382 1.5,-2.598;0,-2.75 0,-3;-1.375,-2.382 -1.5,-2.598;-2.382,-1.375 -2.598,-1.5;-2.75,0 -3,0;-2.382,1.375 -2.598,1.5;-1.375,2.382 -1.5,2.598" vettori="0,0,1.597,-0.581;0,0,-2.252,-1.3" punti="0,0,pieno" etichette="-0.2,2.25,12;2.05,-0.1,3;-0.08,-2.45,6;-2.3,-0.1,9;-0.3,-1.15,130°;0.9,0.05,ore;-2.2,-0.6,minuti" xmin=-3.4 xmax=3.4 ymin=-3.4 ymax=3.4 legenda=0 titolo="Alle 15:40 la lancetta delle ore è a $90° + 40 \cdot 0{,}5° = 110°$ dal $12$ e quella dei minuti a $40 \cdot 6° = 240°$, quindi le due lancette formano un angolo di $130°$"}

:::dimostrazione
In $h$ ore e $m$ minuti la lancetta delle ore percorre $30h$ gradi per le ore intere e $0{,}5m$ gradi per i minuti, mentre la lancetta dei minuti percorre $6m$ gradi. La differenza tra le due posizioni è $30h + 0{,}5m - 6m = 30h - 5{,}5m$, e l'angolo è il suo valore assoluto.
:::
::::

:::attenzione
Negli orari con i minuti la lancetta delle ore *non* si trova esattamente sul numero dell'ora. Alle 3:30 l'angolo tra le lancette è $|90 - 165| = 75°$, perché la lancetta delle ore è a metà strada tra il $3$ e il $4$. Chi la lascia sul $3$ ottiene $90°$, che è l'angolo delle 3:00 e compare spesso tra le opzioni.
:::

:::osservazione{#sovrapposizioni titolo="Lancette sovrapposte"}
La lancetta dei minuti percorre $6°$ al minuto e quella delle ore $0{,}5°$, quindi la prima guadagna sulla seconda $5{,}5°$ al minuto. Dopo una sovrapposizione, la successiva si ha quando la lancetta dei minuti ha guadagnato un giro intero, cioè dopo
$$
\frac{360}{5{,}5} = \frac{720}{11} = 65 + \frac{5}{11} \ \text{minuti}.
$$
Perciò le lancette si sovrappongono $11$ volte in $12$ ore e $22$ volte in un giorno. Dopo mezzogiorno la prima sovrapposizione cade poco dopo le 13:05, e nessuna cade tra le 11:00 e le 12:00.
:::

## Orologi che vanno avanti o indietro

:::definizione{#orologio-avanti-indietro titolo="Orologio che va avanti o indietro"}
Un orologio **va avanti** di $a$ minuti all'ora se, mentre passa un'ora reale, le sue lancette percorrono $60 + a$ minuti; **va indietro** di $a$ minuti all'ora se ne percorrono $60 - a$. Nei quesiti l'orologio avanza in modo costante, quindi l'errore accumulato è proporzionale al tempo trascorso. Un orologio regolato alle 8:00 che va avanti di $3$ minuti all'ora, alle 14:00 reali ha accumulato $6 \cdot 3 = 18$ minuti di anticipo, perciò segna le 14:18.
:::

:::esempio{titolo="Risalire all'ora vera"}
Un orologio regolato alle 9:00 va avanti di $4$ minuti all'ora e ora segna le 12:12. Ogni ora reale corrisponde a $64$ minuti sull'orologio. Dalle 9:00 l'orologio ha segnato $192$ minuti, quindi le ore reali trascorse sono
$$
\frac{192}{64} = 3 ,
$$
e l'ora vera è le 12:00. Chi toglie $4$ minuti per ogni ora *segnata* sull'orologio, cioè $3{,}2 \cdot 4 = 12{,}8$ minuti, ottiene un risultato vicino ma diverso. Per il calcolo esatto si divide il tempo segnato per i minuti che l'orologio percorre in un'ora reale.
:::

:::teorema{#ora-esatta-di-nuovo titolo="Quando un orologio segna di nuovo l'ora esatta"}
Un orologio a lancette che va avanti o indietro in modo costante segna di nuovo l'ora esatta quando l'errore accumulato è di $12$ ore, cioè di $720$ minuti, perché il quadrante mostra le stesse posizioni ogni $12$ ore. Un orologio che ritarda di $2$ minuti al giorno torna a segnare l'ora esatta dopo
$$
\frac{720}{2} = 360 \ \text{giorni}.
$$
Per un orologio digitale che mostra le ore da 00:00 a 23:59 l'errore accumulato deve invece arrivare a $24$ ore, cioè $1440$ minuti. Un orologio fermo è il caso limite. Le sue lancette mostrano sempre la stessa ora, che è esatta due volte al giorno.
:::

## Durate, mezzanotte e fusi orari

:::definizione{#durate-mezzanotte titolo="Durata di un intervallo di tempo"}
La **durata** tra due orari è il tempo che passa dal primo al secondo. Le ore hanno $60$ minuti, quindi nelle sottrazioni il prestito vale $60$ minuti e non $100$. Dalle 9:45 alle 14:10 passano $4$ ore e $25$ minuti, perché dalle 9:45 alle 10:00 passano $15$ minuti, dalle 10:00 alle 14:00 passano $4$ ore e restano $10$ minuti. Quando l'intervallo comprende la mezzanotte, si calcola il tempo fino alle 24:00 e lo si somma al tempo dopo le 00:00. Un turno di notte dalle 22:45 alle 6:20 dura
$$
1\ \text{h}\ 15\ \text{min} + 6\ \text{h}\ 20\ \text{min} = 7\ \text{h}\ 35\ \text{min}.
$$
:::

:::attenzione
Gli orari *non* si sottraggono come numeri decimali. Scrivendo $14{,}10 - 9{,}45 = 4{,}65$ si otterrebbero "$4$ ore e $65$ minuti", che sono $5$ ore e $5$ minuti, mentre la durata vera è $4$ ore e $25$ minuti. Lo stesso errore porta a scrivere $1{,}5$ ore come "$1$ ora e $50$ minuti", mentre $1{,}5$ ore sono $1$ ora e $30$ minuti.
:::

:::definizione{#fusi-orari titolo="Fusi orari"}
Due località in **fusi orari** diversi hanno, nello stesso istante, orari che differiscono di un numero fisso di ore, che i quesiti indicano nel testo. Per un viaggio si somma la durata all'ora di partenza, letta nel fuso di partenza, e poi si aggiunge o si toglie la differenza di fuso per ottenere l'ora locale di arrivo. Si supponga che a New York siano $6$ ore in meno che a Roma. Un volo che parte da Roma alle 10:30 e dura $9$ ore e $15$ minuti arriva alle 19:45 ora di Roma, cioè alle 13:45 ora di New York. Nel viaggio di ritorno la differenza si aggiunge, perché si va verso un fuso in cui è più tardi.
:::

## Calendari: mesi e anni bisestili

:::definizione{#giorni-dei-mesi titolo="Giorni dei mesi e dell'anno"}
Nel calendario in uso in Italia i mesi hanno lunghezze diverse.

- Hanno $31$ giorni gennaio, marzo, maggio, luglio, agosto, ottobre e dicembre.
- Hanno $30$ giorni aprile, giugno, settembre e novembre.
- Febbraio ha $28$ giorni, oppure $29$ negli anni bisestili.

Un anno non bisestile ha $365$ giorni e uno bisestile $366$. Poiché $365 = 52 \cdot 7 + 1$, un anno non bisestile contiene $52$ settimane intere più un giorno. Luglio e agosto, mesi consecutivi, hanno entrambi $31$ giorni, e così dicembre e gennaio.
:::

:::teorema{#anno-bisestile titolo="Regola degli anni bisestili"}
Un anno è **bisestile** se il suo numero soddisfa una delle due condizioni seguenti.

- È divisibile per $4$ e non è divisibile per $100$, come il 2028 e il 2032.
- È divisibile per $400$, come il 2000.

Gli anni secolari come il 1900 e il 2100 sono divisibili per $4$ ma non per $400$, quindi non sono bisestili. La regola esiste perché l'anno solare dura circa $365{,}2422$ giorni. Un giorno in più ogni $4$ anni aggiunge in media $0{,}25$ giorni all'anno, che sono un po' troppi, perciò si tolgono $3$ giorni ogni $400$ anni saltando tre anni secolari su quattro.
:::

:::osservazione{#stesso-giorno-anno-dopo titolo="La stessa data un anno dopo"}
Poiché $365$ giorni sono $52$ settimane più un giorno, una data cade l'anno successivo un giorno della settimana più avanti. Se tra le due date è compreso un 29 febbraio, i giorni sono $366$ e lo spostamento è di due giorni. Il 15 giugno 2026 è un lunedì, quindi il 15 giugno 2027 è un martedì. Il 15 giugno 2028 è un giovedì, perché tra le due date cade il 29 febbraio 2028.
:::

## Giorno della settimana dopo n giorni

::::teorema{#resto-per-sette titolo="Regola del resto per 7"}
Dopo $n$ giorni il giorno della settimana avanza di $r$ posti, dove $r$ è il resto della divisione di $n$ per $7$. Se oggi è mercoledì, tra $100$ giorni sarà venerdì, perché
$$
100 = 14 \cdot 7 + 2
$$
e mercoledì avanzato di $2$ posti è venerdì. Allo stesso modo $100$ giorni fa era lunedì, perché andando indietro si arretra di $2$ posti.

:::dimostrazione
Ogni blocco di $7$ giorni riporta allo stesso giorno della settimana. Scrivendo $n = 7q + r$ con $0 \le r \le 6$, i $q$ blocchi di una settimana non cambiano il giorno, e restano $r$ giorni da contare uno per uno.
:::
::::

:::esempio{#contare-giorni titolo="Giorni tra due date"}
Il 10 marzo 2027 è un mercoledì. Per sapere in che giorno cade il 4 maggio 2027 si contano i giorni che separano le due date, mese per mese:
$$
(31 - 10) + 30 + 4 = 21 + 30 + 4 = 55 .
$$
I $21$ giorni sono quelli che restano di marzo dopo il 10, i $30$ sono quelli di aprile e i $4$ quelli di maggio fino al 4 compreso. Poiché $55 = 7 \cdot 7 + 6$, il giorno avanza di $6$ posti, quindi il 4 maggio 2027 è un martedì. Avanzare di $6$ posti equivale ad arretrare di $1$.
:::

:::attenzione
Dal giorno 3 al giorno 10 di un mese trascorrono $10 - 3 = 7$ giorni, ma i giorni del periodo, contando sia il 3 sia il 10, sono $8$. Un corso che si tiene ogni giorno dal 3 al 10 compresi ha perciò $8$ lezioni. Le opzioni che differiscono di un giorno dalla risposta corretta nascono spesso da questa confusione.
:::

:::definizione{#ricorrenze titolo="Ricorrenze"}
Un evento si ripete con **periodo** di $a$ giorni se si verifica ogni $a$ giorni. Due eventi con periodi $a$ e $b$, che si verificano insieme in un certo giorno, si verificano di nuovo insieme dopo $\operatorname{mcm}(a, b)$ giorni, dove $\operatorname{mcm}$ indica il minimo comune multiplo, di cui si tratta nell'argomento "Numeri, frazioni e calcolo" di Matematica per concorsi. Una farmacia è di turno ogni $6$ giorni e un mercato si tiene ogni $8$ giorni. Se lunedì capitano insieme, la volta successiva è dopo $24$ giorni, e poiché $24 = 3 \cdot 7 + 3$ quel giorno è un giovedì.
:::

:::esempio{titolo="Quante volte un giorno della settimana in un anno"}
Il 2027 non è bisestile e il 1° gennaio 2027 è un venerdì. Le $52$ settimane intere contengono $52$ venerdì, e il giorno in più è il 31 dicembre, che è di nuovo un venerdì. Perciò nel 2027 ci sono $53$ venerdì e $52$ volte ciascuno degli altri giorni. In un anno bisestile i giorni della settimana che compaiono $53$ volte sono due, quello del 1° gennaio e il successivo.
:::

## Ordinamenti e confronti

:::definizione{#confronti-transitivi titolo="Confronti e proprietà transitiva"}
Le relazioni "è più alto di", "è più anziano di", "arriva prima di" godono della **proprietà transitiva**. Se Anna è più alta di Bruno e Bruno è più alto di Carlo, allora Anna è più alta di Carlo. Per ordinare più persone si dispongono i nomi su una linea, dal maggiore al minore, aggiungendo un confronto alla volta. Dalle frasi "Elena è più alta di Dario", "Dario è più alto di Franco" e "Gina è più alta di Elena" si ottiene l'ordine Gina, Elena, Dario, Franco, quindi la più alta è Gina.
:::

:::attenzione
Due confronti con un termine in comune *non* sempre ordinano i tre nomi. Dalle frasi "Anna è più alta di Bruno" e "Carlo è più alto di Bruno" segue soltanto che Bruno è il più basso dei tre. Le due situazioni "Anna più alta di Carlo" e "Carlo più alto di Anna" sono entrambe compatibili con le frasi, quindi la risposta corretta a "chi è il più alto?" è "non si può stabilire".
:::

:::teorema{#posizioni-in-fila titolo="Posizioni in una fila"}
In una fila di $n$ persone, se una persona è la $k$-esima da sinistra e la $h$-esima da destra, allora
$$
n = k + h - 1 .
$$
Infatti, sommando $k$ e $h$ si contano tutte le persone della fila, e la persona considerata è contata due volte. Chi è terzo da sinistra e quinto da destra sta in una fila di $3 + 5 - 1 = 7$ persone. Tra due persone che occupano i posti $p$ e $q$, con $p < q$, ci sono $q - p - 1$ persone.

::grafico{assi=0 uguale=1 punti="1,0,vuoto;2,0,vuoto;3,0,pieno;4,0,vuoto;5,0,vuoto;6,0,vuoto;7,0,vuoto" etichette="-1.6,0.4,da sinistra;0.85,0.45,1°;1.85,0.45,2°;2.85,0.45,3°;2.85,-0.7,5°;3.85,-0.7,4°;4.85,-0.7,3°;5.85,-0.7,2°;6.85,-0.7,1°;7.4,-0.75,da destra" xmin=-1.8 xmax=9.2 ymin=-1.1 ymax=0.9 titolo="Il punto pieno è terzo da sinistra e quinto da destra, quindi le persone sono $3 + 5 - 1 = 7$"}

:::

:::osservazione{#posizioni-classifica titolo="Classifiche e sorpassi"}
In una classifica senza pari merito ogni posizione è occupata da una sola persona. Chi supera il secondo prende il suo posto e diventa secondo, mentre il secondo scende al terzo posto. Se in una gara di $20$ concorrenti Luca è $8$° partendo dal primo, i concorrenti che lo seguono sono $20 - 8 = 12$, e Luca è $13$° partendo dall'ultimo, in accordo con la formula $n = k + h - 1$.
:::

:::definizione{#eta-relative titolo="Età relative"}
La differenza di età tra due persone resta la stessa per tutta la vita, perché ogni anno entrambe invecchiano di un anno. Il rapporto tra le età invece cambia. Marta ha $30$ anni e sua figlia ne ha $6$, quindi oggi l'età di Marta è il quintuplo di quella della figlia. Tra $x$ anni l'età della madre sarà il triplo se
$$
30 + x = 3\,(6 + x)
\iff
30 + x = 18 + 3x
\iff
x = 6 ,
$$
e infatti tra $6$ anni le età saranno $36$ e $12$. La differenza è sempre $24$ anni.
:::

## Principio dei cassetti e caso peggiore

::::teorema{#principio-dei-cassetti titolo="Principio dei cassetti"}
Se $n + 1$ oggetti si distribuiscono in $n$ cassetti, almeno un cassetto contiene almeno $2$ oggetti. Più in generale, se $k \cdot n + 1$ oggetti si distribuiscono in $n$ cassetti, almeno un cassetto contiene almeno $k + 1$ oggetti. Il principio serve a garantire una coincidenza senza sapere dove si trova. In un gruppo di $13$ persone almeno due sono nate nello stesso mese, perché i mesi sono $12$. In un gruppo di $25$ persone almeno $3$ sono nate nello stesso mese, perché $25 = 2 \cdot 12 + 1$.

:::dimostrazione
Se ogni cassetto contenesse al più $k$ oggetti, gli oggetti sarebbero al più $k \cdot n$, che è meno di $k \cdot n + 1$. Questo contraddice il numero di oggetti, quindi almeno un cassetto ne contiene $k + 1$.
:::
::::

:::definizione{#caso-peggiore titolo="Metodo del caso peggiore"}
Nei quesiti "quanti oggetti occorre estrarre, al buio, per essere *sicuri* di …" si considera l'ordine di estrazione più sfavorevole, detto **caso peggiore**. Il numero cercato è il numero di estrazioni che, anche nel caso peggiore, soddisfa la richiesta. Un cassetto contiene $10$ calzini neri e $10$ blu.

- Per avere con certezza due calzini dello stesso colore bastano $3$ estrazioni, perché nel caso peggiore i primi due sono di colori diversi e il terzo ripete uno dei due colori.
- Per avere con certezza due calzini neri servono $12$ estrazioni, perché nel caso peggiore escono prima tutti i $10$ calzini blu e poi i $2$ neri.

In generale, con $c$ colori servono $c + 1$ estrazioni per avere due oggetti dello stesso colore, ed è il principio dei cassetti con i colori al posto dei cassetti.
:::

:::attenzione
Le domande "due dello stesso colore" e "due di un colore indicato" hanno risposte diverse. Con $5$ guanti rossi, $4$ verdi e $3$ gialli, per due guanti dello stesso colore bastano $4$ estrazioni, mentre per due guanti gialli ne servono $5 + 4 + 2 = 11$.
:::

## Parentele

:::definizione{#parentele titolo="Relazioni di parentela"}
I quesiti di parentela descrivono una persona attraverso una catena di relazioni. La catena si legge partendo dalla persona nota e si traduce un passaggio alla volta, disegnando a margine un piccolo albero genealogico con i genitori sopra e i figli sotto.

- I **fratelli** hanno gli stessi genitori; i **cugini** sono figli di fratelli.
- Gli **zii** sono fratelli o sorelle di un genitore, e i loro coniugi.
- Il **nipote** è il figlio di un figlio o di una figlia, oppure il figlio di un fratello o di una sorella.
- Il **suocero** e la **suocera** sono i genitori del coniuge; il **cognato** è il fratello del coniuge oppure il marito di una sorella.

La frase "il figlio dell'unico fratello di mio padre" descrive mio cugino, perché il fratello di mio padre è mio zio e suo figlio è mio cugino.
:::

:::esempio{titolo="Una catena da sciogliere"}
Paolo indica una fotografia e dice: "Non ho fratelli né sorelle, e il padre di quest'uomo è il figlio di mio padre". Paolo non ha fratelli, quindi l'unico figlio maschio di suo padre è Paolo stesso. La frase dice allora che il padre dell'uomo della fotografia è Paolo, perciò l'uomo della fotografia è il figlio di Paolo. Chi risponde "è Paolo" legge "il figlio di mio padre" come descrizione dell'uomo invece che di suo padre.
:::

## Metodi rapidi per i quiz

:::osservazione{#metodi-rapidi titolo="Controlli veloci sulle opzioni"}
Molte opzioni si eliminano prima di finire il calcolo, con controlli che richiedono pochi secondi.

- **Angoli delle lancette**: l'angolo $|30h - 5{,}5m|$ ha parte decimale $0{,}5$ quando i minuti sono dispari, ed è un numero intero quando sono pari. Alle 7:25 l'angolo è $|210 - 137{,}5| = 72{,}5°$, quindi le opzioni intere si escludono subito.
- **Resto per 7**: $7$, $14$, $70$, $700$ giorni riportano allo stesso giorno della settimana, perciò si toglie dal numero di giorni il multiplo di $7$ più vicino. Dopo $73$ giorni si avanza di $3$ posti, perché $73 = 70 + 3$.
- **Calendari**: si controlla se nel periodo cade un 29 febbraio e se il testo conta gli estremi. Le opzioni che differiscono di un giorno dalla risposta nascono da questi due errori.
- **Caso peggiore**: il risultato è il numero massimo di oggetti che si possono estrarre senza soddisfare la richiesta, aumentato di $1$, e non dipende dalla probabilità.
:::

:::osservazione{#schemi-a-margine titolo="Schemi da disegnare a margine"}
Per ogni tipo di quesito c'è uno schema che si disegna in pochi secondi e su cui la risposta si legge direttamente.

- Per gli ordinamenti si disegna una linea verticale con i nomi dal maggiore al minore, e i confronti incompleti restano su rami separati.
- Per le file si scrive una riga di caselle numerate, e per le classifiche una colonna di posizioni.
- Per i calendari si scrive la sequenza dei sette giorni a partire da quello noto, con sotto i resti da $0$ a $6$.
- Per le parentele si disegna l'albero genealogico, con i coniugi sulla stessa riga e i figli sotto.

Uno schema permette anche di controllare l'opzione scelta, sostituendola nei dati e verificando che tutte le condizioni del testo siano soddisfatte.
:::
