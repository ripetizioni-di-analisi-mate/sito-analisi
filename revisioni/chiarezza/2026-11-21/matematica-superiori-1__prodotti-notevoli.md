# Matematica 1° anno · Prodotti notevoli — revisione di chiarezza

## Esito del controllo

`python3 strumenti/controlla_capitolo.py matematica-superiori-1 prodotti-notevoli` → **nessun ERRORE**, «a posto, con avvisi da valutare».

- Italiano: 2390 → 4688 parole (×1,96). Inglese: 2383 → 4869 parole (×2,04).
- Unico avviso: l'inglese supera di poco il doppio. È la traduzione integrale dell'italiano, che resta sotto la soglia; l'inglese usa più parole per le stesse frasi.
- La crescita è sopra l'intervallo atteso (1,2-1,7). Dopo tre giri di tagli delle ripetizioni resta così perché l'originale non definiva nessun termine di base e saltava i passaggi dei calcoli. Se serve scendere ancora, i primi candidati sono i due esempi numerici in apertura dei teoremi sul quadrato e sulla somma per differenza e le righe che descrivono i grafici.
- Invariati: frontmatter, 8 titoli `##`, 9 ancore con i loro titoli, 10 righe delle figure, titoli degli esempi, tutti i dati numerici. Blocchi 30 come prima, nessun blocco nuovo.
- Conti ricalcolati con sympy.

## Che cosa è cambiato

1. **Termini definiti alla prima comparsa**, che prima erano dati per noti: espressione letterale, numero reale, identità, proprietà distributiva, addendo, fattore, monomio, coefficiente, termine noto, polinomio, binomio, trinomio, prodotto notevole, controesempio, sviluppare e sviluppo, termine misto, doppio prodotto, opposto, sezione di un cubo, termine lineare, quadrato perfetto, valore assoluto, «se e solo se», «si annulla», media, perimetro, proporzionale.
2. **Simboli letti a parole** alla prima comparsa: $a,b\in\mathbb R$, $a,b>0$, $a>b>0$, $0\le d<20$, $d\geq0$, la freccia $\Longrightarrow$.
3. **Prima i numeri, poi le lettere**: il quadrato di un binomio parte da $13^2=(10+3)^2=100+60+9$, la somma per differenza da $13\cdot7=(10+3)(10-3)=100-9$.
4. **Passaggi di calcolo scritti per intero**: $(a-b)^2$ ricavato da $a+(-b)$ con il conto; $(2x-3)^3$ con la sostituzione $a=2x$, $b=3$; i tre doppi prodotti di $(x-y+2)^2$ uno per riga; $6x+9=51$ risolta in due passi; $201\cdot198$ con i quattro prodotti; $d^2=400-384$.
5. **Dimostrazioni con le proprietà nominate** (distributiva, commutativa). Nel confronto dei coefficienti sono scritti $u=A-A'$, $v=B-B'$, $w=C-C'$ e i tre valori in $0$, $1$, $-1$ uno per riga.
6. **Figure descritte dal testo**: per ogni grafico sono detti i punti segnati e le altezze. Nel grafico del «centro comune» la figura usa media $10$ (fattori $10+d$ e $10-d$), mentre il testo parlava solo di media $100$: ora il testo fa il collegamento con $13\cdot7=91$ e $15\cdot5=75$.
7. **Voce**: tolti «conviene», «si può scegliere», «la parentesi», «termini firmati», «contributo», «punto del dominio». Casi quasi uguali messi in elenco. Frazioni in colonna, unità con `\mathrm`.

## Com'era / Com'è ora

Esempio «Dalle sezioni del cubo ai volumi»: lo studente non sa che cos'è una sezione, non sa da dove vengono i due strati, e l'ultima frase è incomprensibile.

**Com'era**

> Si prenda un cubo di lato $4=3+1$. Una sezione quadrata è suddivisa in regioni di aree $9$, $3$, $3$ e $1$. Uno strato di spessore $3$ dà quindi volumi $27$, $9$, $9$ e $3$, mentre l'altro, di spessore $1$, dà $9$, $3$, $3$ e $1$. Riunendo i volumi uguali si ottengono $27+3\cdot9+3\cdot3+1=64$. In generale il numero di modi per scegliere un termine da uno dei tre fattori è lo stesso quando si sceglie da due fattori, perché resta un solo fattore escluso.

**Com'è ora**

> Un cubo di lato $4$ ha volume $4^3=64$. Si scrive $4=3+1$ e si divide ogni spigolo in un tratto lungo $3$ e in un tratto lungo $1$.
>
> Una **sezione** del cubo è la figura che si ottiene tagliandolo con un piano parallelo a una faccia, ed è un quadrato di lato $4$. La figura mostra una sezione divisa in quattro regioni di aree $9$, $3$, $3$ e $1$, come nel quadrato di un binomio con $a=3$ e $b=1$.
>
> Il cubo è formato da due strati sovrapposti, uno di spessore $3$ e uno di spessore $1$, e ogni strato è diviso come la sezione. Il volume di ciascun pezzo è l'area della sua regione moltiplicata per lo spessore dello strato.
>
> - Lo strato di spessore $3$ contiene pezzi di volume $9\cdot3=27$, $3\cdot3=9$, $3\cdot3=9$ e $1\cdot3=3$.
> - Lo strato di spessore $1$ contiene pezzi di volume $9$, $3$, $3$ e $1$.
>
> Gli otto pezzi sono uno di volume $27$, tre di volume $9$, tre di volume $3$ e uno di volume $1$. La somma è $27+3\cdot9+3\cdot3+1=64$. Con $a=3$ e $b=1$ questi numeri sono $a^3=27$, $a^2b=9$, $ab^2=3$ e $b^3=1$.
>
> Nel prodotto $(a+b)(a+b)(a+b)$ ogni termine dello sviluppo si forma scegliendo $a$ oppure $b$ da ciascuno dei tre fattori. Il termine $a^2b$ si forma scegliendo $b$ da un solo fattore, che si sceglie in $3$ modi. Il termine $ab^2$ si forma scegliendo $b$ da due fattori, cioè lasciando fuori un solo fattore, e anche questo si sceglie in $3$ modi. Per questo i due termini centrali hanno lo stesso coefficiente $3$.

Che cosa migliora: «sezione» è definita; è detto perché il volume è area per spessore; ogni volume ha il suo conto; i numeri sono collegati ad $a^3$, $a^2b$, $ab^2$, $b^3$; l'ultima frase dice che cosa si conta e perché viene $3$ in entrambi i casi.

## Errori trovati nell'originale

Nessun errore di calcolo nella teoria: tutti i numeri sono stati ricalcolati e confermati.

## Termini degli esercizi aggiunti in teoria

Schede, tracce e domande usano «quadrato perfetto», «termine noto», «termine misto», «termine di primo grado / lineare», «monomio», «sviluppare», «si annulla», che la teoria non spiegava: ora sono definiti (vedi punto 1).

## Dubbi rimasti

- **Esercizi da fare del capitolo (non toccati, fuori dall'incarico)**: in `src/content/dafare/matematica-superiori-1/prodotti-notevoli/` titolo, traccia e soluzione non corrispondono fra loro in quasi tutti i file. Esempi: `10.md` ha titolo «Prodotti numerici simmetrici», traccia sul cubo $(x+11)^3$ e soluzione $9879$ (che è $111\cdot89$, la traccia di `2.md`); `2.md` ha titolo «Quadrati di differenze», traccia $111\cdot89$ e soluzione $x^2-22x+121$. Sembra che le tracce siano state rimescolate rispetto a titoli e soluzioni. Va controllato a parte, anche perché la verifica automatica delle risposte usa queste soluzioni.
- «Forma fattorizzata» compare nelle schede svolte; in teoria è resa con «trasforma la differenza fra due quadrati in un prodotto», senza il nome.
- Grafia inglese: il file esistente e le schede usano la forma americana (*recognizing*, *nonnegative*), mantenuta.
