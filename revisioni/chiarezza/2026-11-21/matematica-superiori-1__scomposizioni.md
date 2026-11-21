# Revisione di chiarezza · Matematica 1° anno · Scomposizione dei polinomi

File toccati (solo questi due):
- `src/content/teoria/matematica-superiori-1/scomposizioni.md`
- `src/content-en/teoria/matematica-superiori-1/scomposizioni.md`

## Esito del controllo

`python3 strumenti/controlla_capitolo.py matematica-superiori-1 scomposizioni` → **ESITO: a posto** (nessun ERRORE, nessun AVVISO).

| | Prima | Dopo | Rapporto |
|---|---:|---:|---:|
| Italiano (parole) | 2412 | 4714 | ×1,95 |
| Inglese (parole) | 2444 | 4872 | ×1,99 |

La lunghezza è **sopra la fascia attesa (1,2-1,7)** e appena sotto la soglia di avviso (2,0). Ho già tolto in quattro passaggi le ripetizioni e gli esempi doppi che avevo aggiunto (da ×2,14 a ×1,95). Quello che resta in più sono definizioni alla prima comparsa, passaggi di calcolo e le verifiche numeriche delle figure. Per scendere ancora andrebbero tolte definizioni, quindi mi sono fermato: decide il titolare se accorciare.

Frontmatter, 9 titoli `##`, 8 ancore con i loro titoli, 9 righe di figura, numeri degli esempi: invariati. Blocchi: 34 come prima, nessun blocco aggiunto o tolto. Tutti i conti ricontrollati con sympy.

## Che cosa è cambiato

1. **Termini definiti alla prima comparsa**, che prima erano dati per noti: monomio, coefficiente, polinomio, addendo/termine, fattore, scomporre, proprietà distributiva e commutativa, identità, MCD e mcm (nome per esteso e significato), valore assoluto, quoziente, primo e secondo membro, binomio, trinomio, opposti, basi, coniugati, doppio prodotto, prodotti misti, grado, coefficiente principale, termine noto, termine costante, lineare, fattore lineare, monico, numeri reali, $\sqrt2$, zero/radice, parabola, intervallo, regola dei segni, zero semplice, coprimi, fattore primo, sviluppare, frazione algebrica.
2. **Enunciati con indici riscritti**: «Siano $M,Q_1,\ldots,Q_n$ polinomi…» è diventato un conto con i numeri ($5\cdot2+5\cdot7$) seguito da $MA+MB+MC=M(A+B+C)$. Lo stesso per differenza di quadrati ($7^2-3^2$) e trinomio ($(x+2)(x+3)$ prima di $r$, $s$).
3. **Condizioni da soddisfare insieme scritte come sistema** ($r+s=b$, $rs=c$; $m+n=b$, $mn=ac$).
4. **Passaggi di calcolo esplicitati**: quozienti del raccoglimento, riga intermedia in «Binomi opposti», sviluppi dei tre prodotti notevoli nella dimostrazione, perché lo zero di $2x+1$ è $-\dfrac12$, come si raccoglie $-1$.
5. **Dimostrazione di «Spezzare il termine di primo grado»** divisa in cinque passi numerati, con la proprietà usata nominata e il caso $2x^2+7x+3$ seguito passo per passo.
6. **Figure descritte con i loro numeri**: aree $24+18=42$, $20+12+10+6=48$, $36-4=32=4\cdot8$; nei grafici è detto che cosa sono i punti segnati.
7. **Casi messi in elenco** (segni di $b$ e $c$; $b=0$ con $c>0$ o $c<0$; MCD e mcm), ciascuno con un trinomio di esempio.
8. Tolti «può/possono», «conviene», «permette di», verbi figurati («il criterio esclude», «la coppia di curve rende visibile»); forma impersonale ovunque, frazioni in colonna.

## Com'era / Com'è ora

Blocco `#comune`, apertura del capitolo. Lo studente trovava indici, «addendo» e «identità» senza spiegazione prima ancora di vedere un numero.

**Com'era**

> Siano $M,Q_1,\ldots,Q_n$ polinomi. Se ogni addendo di $P$ è il prodotto di $M$ per un polinomio $Q_i$, allora $M$ è un **fattore comune** e vale l'identità
> $$P=M Q_1+\cdots+M Q_n=M(Q_1+\cdots+Q_n).$$
> Per un polinomio non nullo a coefficienti interi si può scegliere come parte numerica il massimo comune divisore dei coefficienti in valore assoluto. Per ogni lettera si prende il più piccolo esponente che compare nei monomi non nulli, contando come zero l'esponente di una lettera assente.

**Com'è ora**

> Un **monomio** è un prodotto di numeri e lettere, come $6x^2$. Il numero $6$ è il suo **coefficiente** e $2$ è l'esponente della lettera $x$. Un **polinomio** è una somma di monomi, che si chiamano **addendi** o **termini** del polinomio. **Scomporre** un polinomio significa scriverlo come prodotto. Le espressioni che si moltiplicano sono i **fattori**.
>
> Con i numeri, $5\cdot2+5\cdot7=45$ e anche $5\cdot(2+7)=5\cdot9=45$. Il numero $5$ moltiplica entrambi gli addendi, quindi si scrive una sola volta davanti alla somma. Questa regola è la **proprietà distributiva** e vale anche per i polinomi. Se ogni addendo di un polinomio $P$ è il prodotto di uno stesso polinomio $M$ per un altro polinomio, allora $M$ è un **fattore comune** e si raccoglie davanti alla somma. Con tre addendi $MA$, $MB$ e $MC$ si ottiene
> $$P=MA+MB+MC=M(A+B+C).$$
> La scrittura è la stessa con due addendi o con più di tre. Questa uguaglianza è un'**identità**, cioè è vera per qualunque valore dato alle lettere. […]
>
> - Come numero si prende il **massimo comune divisore (MCD)** dei coefficienti, cioè il più grande intero che li divide tutti. I coefficienti si considerano in **valore assoluto**, cioè senza il segno: il valore assoluto di $-8$ è $8$.
> - Per ogni lettera si prende l'esponente più piccolo fra quelli con cui la lettera compare negli addendi. Una lettera che manca in un addendo conta con esponente zero, perché $x^0=1$, e quindi resta fuori dal fattore comune.

## Errori trovati nell'originale

Nessun errore di calcolo o di enunciato: tutti i numeri dell'originale sono giusti e sono rimasti uguali.

## Aggiunte per coprire schede, esercizi e domande

- **Completare il quadrato** ($x^2-8x+20=(x-4)^2+4$): lo chiede una domanda a tempo che rimanda a `#completa`, la teoria non lo spiegava. Aggiunto in tre righe.
- **Monico** («binomi monici» in tracce e domande), **coprimi**, **doppio prodotto**, **prodotti misti**, **coniugati**, **zero semplice**, **scomporre completamente**: usati dagli esercizi, ora definiti.
- **Raccogliere un monomio con coefficiente negativo** (traccia 2): una riga nell'avviso su $-4x^2-8x$, con il confronto $4x(-x-2)$.
- Esempi presi dai numeri degli esercizi: $x^2+6x+9$, $x^2-6x+9$, $x^2-12x+11$, $(x+11)(x-1)$.

## Dubbi rimasti

- **Lunghezza** quasi doppia (vedi sopra).
- **Completare il quadrato** sta nell'osservazione su $x^4-16$, subito sotto il blocco `#completa`, e non dentro il blocco con l'ancora. L'ho messo lì perché usa lo stesso ragionamento ($x^2+4\ge4$) e perché in `#completa` sarebbe stato un argomento in più in fondo a un esempio su altro. Chi arriva dal link della domanda lo trova nel riquadro successivo.
- La dimostrazione di `#trinomio-generale` resta impegnativa per un quattordicenne anche a passi (usa «un intero che divide un prodotto ed è coprimo con un fattore divide l'altro», enunciato ma non dimostrato).
- Nei blocchi che aprono le sezioni i grassetti sono più dei 2-3 della guida, perché ogni termine definito è in grassetto come nei capitoli modello del TOLC-S.
- Inglese: grafia americana come nel file e nelle schede esistenti (*factorization*, *nonzero*); termini delle schede (*constant term*, *leading coefficient*, *cross terms*, *middle term*, *monic*, *factoring by grouping*). «Doppio prodotto» reso con *double product* e «prodotto notevole» con *special product*: nelle schede inglesi non c'è un termine fisso.
- Non ho guardato le figure rese in PNG: le righe sono identiche, ho controllato solo che il testo corrisponda agli attributi.
