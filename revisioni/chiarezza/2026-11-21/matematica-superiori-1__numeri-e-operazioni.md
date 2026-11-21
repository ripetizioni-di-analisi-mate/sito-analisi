# Matematica 1° anno · Numeri, operazioni e frazioni: revisione di chiarezza

**Esito del controllo** (`python3 strumenti/controlla_capitolo.py matematica-superiori-1 numeri-e-operazioni`): nessun ERRORE; resta un AVVISO di lunghezza per lingua (vedi «Dubbi rimasti»).

**Parole**: italiano 2540 → 5412 (×2,13); inglese 2593 → 5703 (×2,20). Blocchi 33, esempi 13, figure 9: invariati. Frontmatter, titoli `##`, ancore, titoli dei blocchi e righe delle figure identici all'originale.

## Che cosa è cambiato

1. **Termini e simboli spiegati alla prima comparsa**: insieme, $\mathbb N$, $\mathbb Z$, $\mathbb Q$, i simboli $\in$, $\ne$, $\subsetneq$, $<$, $>$, $\le$, $\ge$, i tre puntini, le graffe degli insiemi, opposto, numeratore, denominatore, dividendo, divisore, quoziente, resto, consecutivi, retta numerica, unità, coordinata, origine, addendi, fattori, potenza, esponente, espressione, raggruppamento, multiplo, numero primo, scomposizione in fattori primi, algoritmo, divisione con resto, membri di un'uguaglianza, «se e solo se», $\max$, periodo, antiperiodo, il trattino sul periodo, il simbolo s del secondo, la scrittura $ab$ per il prodotto, il puntino e i due punti come operazioni.
2. **Sigle**: MCD e mcm hanno il nome per esteso e un esempio per elenco dei divisori e dei multipli ($8$ e $12$) prima del metodo con gli esponenti.
3. **Prima i numeri, poi le lettere**: le tre proprietà delle operazioni, il prodotto e il quoziente di frazioni, l'equivalenza con i prodotti in croce, la regola dei segni e la scrittura decimale hanno un caso numerico prima dell'enunciato con le lettere.
4. **Passaggi di calcolo scritti per intero**: formula del punto medio, confronto fra $-\dfrac56$ e $-\dfrac79$ (le due frazioni portate a diciottesimi), $14-(9-2(4-7))$ una riga per operazione, somma $\dfrac23+\dfrac14$, divisione $7:24$ (primo passo svolto prima della tabella), differenza $1000z-10z$ nella frazione generatrice.
5. **Casi in forma di sistema**: valore assoluto e algoritmo di Euclide sono scritti con la graffa, al posto dei casi a parole.
6. **Dimostrazioni** tutte conservate, con passi più brevi e la proprietà usata nominata (distributiva nella regola dei segni e in Euclide; verso delle disuguaglianze nel confronto fra frazioni).
7. **Figure descritte nel testo**: frecce del valore assoluto, punti $P$ e $Q$, righe A e B dei segnali, celle colorate del rettangolo, parti del recipiente.
8. Negli esempi dei problemi è detta la domanda («si cercano il numero di pacchetti completi e le penne che avanzano») e sono scritti i conti intermedi ($8\cdot4=32$, $31+23=54$, $2\cdot7=14$).

## Com'era / Com'è ora

Blocco «Divisori, massimo comune divisore e minimo comune multiplo».

**Com'era**

> Nelle scomposizioni in fattori primi, un divisore comune può prendere ogni primo al massimo con l'esponente minore. Un multiplo comune deve invece contenerlo almeno con l'esponente maggiore. Per $72=2^3\cdot3^2$ e $120=2^3\cdot3\cdot5$ si ottiene [formula con MCD = 24 e mcm = 360].

«Fattori primi», «scomposizione» ed «esponente» non erano mai stati spiegati, e MCD e mcm erano stati definiti soltanto con le lettere.

**Com'è ora**

> Per $8$ e $12$ i divisori di $8$ sono $1,2,4,8$ e quelli comuni con $12$ sono $1,2,4$, quindi $\operatorname{MCD}(8,12)=4$. I multipli di $8$ sono $8,16,24,\ldots$ e quelli di $12$ sono $12,24,\ldots$, quindi $\operatorname{mcm}(8,12)=24$. […]
>
> Un **numero primo** è un intero maggiore di $1$ che ha come divisori soltanto $1$ e sé stesso, come $2,3,5,7,11$. Ogni intero maggiore di $1$ si scrive come prodotto di numeri primi. Questa scrittura è la **scomposizione in fattori primi**. Per $72$ si divide per il primo più piccolo finché la divisione dà un intero, poi si passa al primo successivo.
>
> $72=2\cdot36=2\cdot2\cdot18=2\cdot2\cdot2\cdot9=2\cdot2\cdot2\cdot3\cdot3=2^3\cdot3^2.$
>
> - Un divisore comune prende ogni primo al massimo con l'esponente minore, perché deve dividere entrambi i numeri. Il MCD è il prodotto dei primi comuni, ciascuno con l'esponente minore.
> - Un multiplo comune contiene ogni primo almeno con l'esponente maggiore, perché deve essere divisibile per entrambi i numeri. Il mcm è il prodotto di tutti i primi presenti, ciascuno con l'esponente maggiore.

Che cosa migliora: MCD e mcm si vedono prima su due numeri piccoli; primo, scomposizione ed esponente sono definiti; la scomposizione di $72$ è svolta; ogni regola sugli esponenti ha il suo motivo.

## Errori trovati nell'originale

Nessun errore numerico: tutti i conti sono stati rifatti (MCD e mcm di $72$ e $120$, Euclide su $132$ e $84$, $\dfrac7{24}=0{,}291\overline6$, $0{,}2\overline{15}=\dfrac{71}{330}$, penne, recipiente) e sono corretti. I dati degli esempi sono invariati.

## Termini degli esercizi aggiunti in teoria

- **modulo** come sinonimo di valore assoluto (domande);
- **media aritmetica** dei due estremi (schede sul punto medio);
- **frazione generatrice**, **parte non periodica / antiperiodo** (schede sui decimali);
- **concordi / discordi** (domande sui segni);
- **reciproco** e **opposto** definiti (erano usati senza definizione);
- **ridurre ai minimi termini**, **semplificare**, **prodotti in croce**;
- **potenza, esponente, fattori primi** (usati dalle schede su MCD e mcm);
- nel problema dei pacchetti: con due quozienti diversi il numero di pacchetti è il minore.

## Dubbi rimasti

- **Lunghezza oltre il doppio** (×2,13 in italiano). Dopo un primo giro a ×2,31 ho tolto una quarantina di ripetizioni ed esempi doppi aggiunti da me. Sotto il doppio non si scende senza togliere definizioni: l'originale è molto asciutto (2540 parole per 33 blocchi) e usa circa quaranta termini e simboli mai spiegati. Se si preferisce un testo più corto, i primi tagli possibili sono gli esempi numerici delle tre proprietà delle operazioni e l'esempio di MCD e mcm per elenco.
- In qualche blocco di definizioni i grassetti superano i due o tre indicati dalla guida, perché ogni termine definito è in grassetto.
- Inglese: tenuta la grafia del file esistente e delle schede (americana: *center*, *canceling*, *factorization*); «modulo» è reso con *magnitude*, come nelle domande inglesi.
