# Revisione di chiarezza · Matematica 2° anno · Equazioni e sistemi non lineari

File toccati (solo questi due):
- `src/content/teoria/matematica-superiori-2/equazioni-e-sistemi-non-lineari.md`
- `src/content-en/teoria/matematica-superiori-2/equazioni-e-sistemi-non-lineari.md`

## Esito del controllo

`python3 strumenti/controlla_capitolo.py matematica-superiori-2 equazioni-e-sistemi-non-lineari` → **ESITO: a posto** (nessun ERRORE, nessun AVVISO).

| | Prima | Dopo | Rapporto |
|---|---:|---:|---:|
| Italiano (parole) | 2196 | 3719 | ×1,69 |
| Inglese (parole) | 2157 | 3778 | ×1,75 |

Entrambi entro il vincolo (1,7 e 1,8). Frontmatter, 8 titoli `##`, 9 ancore con i loro titoli, 9 righe di figura, numeri degli esempi: invariati. Blocchi: 34 come prima, nessuno aggiunto o tolto. Tutti i conti ricontrollati con sympy.

## Che cosa è cambiato

1. **Termini definiti alla prima comparsa** (prima dati per noti): fattore, radice/soluzione, dominio, primo e secondo membro, legge di annullamento del prodotto (nome usato nelle domande), raccogliere, differenza di quadrati, insieme delle soluzioni, ascissa e ordinata, molteplicità, grado, biquadratica, incognita ausiliaria, non negativo, $\pm$, radice doppia, termine noto, strettamente positivo, equazione irrazionale, radicando, radice quadrata principale, $A(x)$ e $B(x)$, reversibile, candidato e candidato estraneo, $\mathbb R$, identità, valore assoluto, radice cubica, isolare, quadrato del binomio e doppio prodotto (termine misto), parametro, argomento e ramo del valore assoluto, notazione $[1,+\infty)$, sistema, coppia ordinata, sistema non lineare, $g(x)$ e $F(x,y)$, metodo di sostituzione, parabola, completare il quadrato, tangente, sistema simmetrico, discriminante $\Delta$ (con la lettura della lettera greca), relazioni di Viète, circonferenza, condizione di esistenza.
2. **Passaggi di calcolo mancanti scritti per esteso**: scomposizione di $x^3-9x$, scomposizioni delle equazioni in $t$, sviluppo di $\sqrt{x+6}=x$, passaggio $6\sqrt x=8$ in due radicali, conto completo nell'avviso su $\sqrt{x+4}+\sqrt x=1$, formula $\sqrt x=\dfrac{4-k^2}{2k}$ nell'esempio con il parametro, differenza di quadrati con $a$ e $b$ dichiarati in $|x-5|=|2x-1|$, ordinate calcolate nell'esempio retta-parabola, completamento del quadrato nella tangenza, origine delle identità $(x+y)^2-4xy=(x-y)^2$ e $(x+y)^2+(x-y)^2=2(x^2+y^2)$.
3. **Dimostrazione dell'annullamento del prodotto riscritta**: la versione precedente divideva per un prodotto supposto nullo («condurrebbe a $1=0$»); ora si moltiplica per $\dfrac1a$ con $a\ne0$ e si ottiene $b=0$, poi si estende a più fattori.
4. **Casi in elenco**: le tre uscite di $t$ (positivo, zero, negativo) nelle biquadratiche, i due rami del valore assoluto (nel teorema e nell'esempio), i tre casi di $m$ nella tangenza, i tre casi del discriminante nei sistemi simmetrici. Il criterio delle tre radici ($c=0$ e $-\dfrac ba>0$) è scritto come sistema, perché sono condizioni da soddisfare insieme.
5. **Ogni «quindi» con la sua premessa**: per esempio perché $x\ge0$ basta nei due radicali, perché dividere per $2k$ è lecito, perché i due candidati di $|2x-1|=x+2$ stanno nel proprio ramo, perché $u^2$ si può moltiplicare.
6. **Figure descritte**: che cosa sono i punti segnati (ascisse delle soluzioni, punto $P$, segmento in $x=9$, vertice di $|2x-1|$, cerchio vuoto in $(2,8)$, rette $m=-1$ e $m=-2$, circonferenza di raggio $\sqrt{13}$).
7. **Voce**: tolti l'imperativo implicito («Supponiamo», «non si deve elevare») e le frasi prescrittive; nell'ultima riga dell'esempio con il parametro il «non si deve» è diventato un fatto (la condizione di segno non è soddisfatta).

## Com'era / Com'è ora

Esempio «Una differenza di radicali e un valore di confine». Lo studente trovava una lettera $k$ mai presentata, un quadrato fatto a parole e una condizione $k^2\le4$ che compariva senza conto.

**Com'era**

> In $\sqrt{x+4}-\sqrt x=k$, si cerchino soluzioni per $k>0$. Dopo aver isolato la prima radice, il secondo membro $k+\sqrt x$ è positivo sul dominio. Il quadrato dà $4=k^2+2k\sqrt x$. Dividere per $2k$ è lecito e il risultato deve essere non negativo. Occorre quindi $k^2\le4$. […] Con $k>2$ non si deve elevare una seconda volta al quadrato, perché la condizione di segno è già fallita.

**Com'è ora**

> In $\sqrt{x+4}-\sqrt x=k$ la lettera $k$ è un **parametro**, cioè un numero fissato ma non specificato. Si cercano le soluzioni per $k>0$, con dominio $x\ge0$. Dopo aver isolato la prima radice, $\sqrt{x+4}=k+\sqrt x$, il secondo membro è positivo sul dominio, perché $k>0$ e $\sqrt x\ge0$. Elevando al quadrato si trova
> $$x+4=k^2+2k\sqrt x+x,\qquad 4=k^2+2k\sqrt x,\qquad \sqrt x=\frac{4-k^2}{2k}.$$
> Dividere per $2k$ è lecito perché $k>0$, e il risultato è uguale a $\sqrt x$, quindi deve essere non negativo. Poiché il denominatore $2k$ è positivo, occorre $4-k^2\ge0$, cioè $k^2\le4$. […] Con $k>2$ il valore $\dfrac{4-k^2}{2k}$ è negativo, quindi la condizione di segno non è soddisfatta e non ci sono soluzioni. Per questo non si eleva una seconda volta al quadrato.

(Nel file le tre uguaglianze sono su righe separate in un `aligned`.)

## Errori trovati nell'originale

- Nessun numero sbagliato negli esempi: tutti i risultati sono confermati con sympy.
- La dimostrazione dell'annullamento del prodotto era impropria (divisione per un prodotto supposto nullo): riscritta, vedi punto 3.

## Termini e procedimenti degli esercizi aggiunti in teoria

- Nome «legge di annullamento del prodotto» (domanda 55), grado e somma delle molteplicità (domanda 10), regola «molteplicità pari: il grafico tocca l'asse; dispari: lo attraversa» (scheda 2, esercizio 2).
- Completare il quadrato (domanda 82), $\pm$ (schede 1 e 7), discriminante del sistema somma-prodotto (domande 14, 74; scheda 6), «candidato estraneo» (scheda 4, domanda 45), retta tangente (domande 82, 85), circonferenza $x^2+y^2=r^2$ (domande 83, 85).

## Non aggiunti per il vincolo di lunghezza (da valutare)

- Polinomio **monico** e coefficiente principale (domanda 52).
- Funzione crescente e decrescente, usata per contare le soluzioni di $\sqrt x=2-x$ (domanda 38).
- Identità $x^3+y^3=(x+y)^3-3xy(x+y)$ (domanda 77).
- Sostituzione $t=|x|$ (domande 70 e 84) e curva $y=\dfrac9x$ (scheda 6, esercizio 3).
- Punto medio come soluzione di $|x-a|=|x-b|$ (domanda 37) e simmetria delle soluzioni di $|x-c|=k$ rispetto a $c$ (scheda 5, esercizio 1; domanda 69): la prima versione lo diceva, è stato tolto per stare entro 1,7.

## Errori negli esercizi e nelle domande (non corretti, solo segnalati)

Nessun errore di calcolo trovato in schede, tracce e domande lette tutte. Due frasi poco chiare:
- Scheda 3, esercizio 2, ultima frase: «Questo distingue l'annullamento del radicando da una divisione per zero» non ha un riferimento nel testo dell'esercizio.
- Domanda 12, testo della spiegazione: «Il controllo richiesto prima del quadrato riguarda quindi il segno del membro opposto alla radice, oltre al suo dominio» (il «suo» è ambiguo).

## Dubbi rimasti

- Nell'esempio del rettangolo l'originale non spiega da dove vengono $x+y=7$ e $xy=12$ (perimetro $14$ e area $12$); la versione nuova dice «le misure soddisfano», e la frase su area e perimetro resta in fondo come nell'originale. Si può anticipare se si accetta qualche parola in più.
- Inglese: «condition of existence» per «condizione di esistenza» (le schede inglesi non usano un termine fisso); grafia britannica mantenuta (*centre*, *centimetres*, *Recognising*).
