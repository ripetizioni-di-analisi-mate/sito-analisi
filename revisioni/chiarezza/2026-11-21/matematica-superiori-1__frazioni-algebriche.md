# Matematica 1° anno · Frazioni algebriche — revisione di chiarezza

**Controllo** (`python3 strumenti/controlla_capitolo.py matematica-superiori-1 frazioni-algebriche`): `ESITO: a posto`, nessun ERRORE e nessun AVVISO. Resa corretta dei due file (509 formule, 10 figure, 33 blocchi, 8 titoli `##` ciascuno).

**Parole**: italiano 2416 → 4553 (×1,88); inglese 2461 → 4755 (×1,93).
La crescita supera l'intervallo atteso (1,2–1,7) e resta sotto la soglia di avviso (2,0). Dopo la prima stesura (×2,00) ho tolto ripetizioni, esempi numerici doppi e descrizioni lunghe dei grafici. Quello che resta in più sono definizioni di termini che l'originale usava senza spiegarli (circa 35) e passaggi di calcolo.

## Che cosa è cambiato

1. **Definizione di apertura**: prima «Siano $P$ e $Q$ due polinomi reali in $x$…»; ora si parte da $\dfrac{x+1}{x-3}$ con i numeri ($x=5$ dà $3$, $x=3$ annulla il denominatore), poi condizione di esistenza e dominio, e solo alla fine la scrittura con $P$, $Q$ e l'insieme $D$, letta a parole.
2. **Termini e simboli definiti alla prima comparsa**: polinomio, numeratore, denominatore, quoziente, «si annulla», indefinita, condizione di esistenza, dominio, $\ne$, $\mathbb R$, $\in$, $\setminus$, zero/radice, scomporre, fattore, addendo, parametro, coefficiente, ridurre ai minimi termini, lineare, ascissa, ordinata, cerchio vuoto, rami, asintoto, $\pm$, grado, minimo comune multiplo (mcm), molteplicità, opposto, sviluppare, inverso/reciproco, costante, dividendo, divisore, valore numerico, zero della frazione, segno, intervallo, $\pm\infty$, $\cup$, prodotti incrociati, dominio comune, «se e solo se», funzione, membri, equazione, soluzione, impossibile, frazione sovrapposta, km/h, m².
3. **Ogni teorema parte da un caso con i numeri** ($\dfrac{6}{10}=\dfrac35$, $\dfrac12+\dfrac13$, $\dfrac23\cdot\dfrac45$, $\dfrac23:\dfrac45$, $\dfrac23=\dfrac46$) e poi dà l'enunciato con le lettere, che è rimasto con tutte le ipotesi.
4. **Dimostrazioni** riscritte a passi brevi con la proprietà nominata (invariantiva della divisione, commutativa e associativa, prodotto per $1$, moltiplicazione per il reciproco).
5. **Passaggi di calcolo esplicitati**: risoluzione di $(a-1)x+3=0$ riga per riga, $\dfrac{x+3}{x}=\dfrac xx+\dfrac3x$, sviluppo del numeratore $x+2+2x-4$, $\dfrac1{2-x}=\dfrac1{-(x-2)}$, divisione scritta come prodotto per il reciproco, verifiche numeriche con il conto.
6. **Condizioni da soddisfare insieme scritte come sistema** (somma di due frazioni, frazione sovrapposta); casi paralleli in elenco (le due esclusioni di $\dfrac{(x+4)(x-1)}{(x+4)(x+2)}$, i quozienti $A:B$ e $B:A$).
7. **Figure**: il testo ora dice che cosa si vede (cerchio vuoto, rette tratteggiate, rami, punto pieno, assi $v$ e $t$). Righe `::grafico` identiche.
8. Tolte le formule da manuale o figurate («il dominio iniziale continua a governare ogni sostituzione», «manca il quoziente», «questo controllo intercetta un segno meno dimenticato», «il grafico conserva lì la separazione tra i rami»).

Invariati: frontmatter, titoli `##`, ancore, titoli di tutti i blocchi, tabelle, dati numerici di tutti gli esempi, ordine dei blocchi. Nessun contenuto tolto. Grafia inglese americana, come nel file esistente (*canceled*, *meters*, *recognizing*).

## Com'era / Com'è ora (blocco «La semplificazione riguarda i fattori»)

**Com'era**

> Per $x\ne0$ la frazione $\dfrac{x+3}{x}$ ha una somma al numeratore. Perciò si divide ciascun addendo per $x$ e si ottiene $1+\dfrac3x$. In $x=2$ la frazione vale $\dfrac52$. Il controllo numerico distingue questa trasformazione dalla cancellazione isolata dell'addendo $x$.

**Com'è ora**

> Un **addendo** è un termine di una somma, mentre un fattore è un termine di un prodotto. Nella frazione $\dfrac{x+3}{x}$, definita per $x\ne0$, il numeratore è la somma $x+3$. La lettera $x$ è un addendo del numeratore e non è un suo fattore. Perciò si divide ciascun addendo per $x$:
> $$\frac{x+3}{x}=\frac xx+\frac3x=1+\frac3x.$$
> In $x=2$ la frazione vale $\dfrac{2+3}{2}=\dfrac52$, e anche $1+\dfrac32$ vale $\dfrac52$. Cancellando il solo addendo $x$ al numeratore con la $x$ al denominatore resterebbe $3$, che è diverso da $\dfrac52$. Il controllo numerico distingue così la trasformazione corretta dalla cancellazione di un addendo.

Nell'originale «addendo» non era definito, mancava il passaggio $\dfrac xx+\dfrac3x$ e l'errore da cui il blocco mette in guardia (cancellare la $x$ e ottenere $3$) non era mai scritto.

## Errori nell'originale

Nessuno. Tutti i conti sono stati ricalcolati con sympy (semplificazioni, somme, prodotti, quozienti, valori nei punti di controllo, coordinate dei cerchi vuoti nelle figure).

## Aggiunte per coprire schede, esercizi e domande

- **Condizione di esistenza**: è il termine usato da schede e domande; la teoria definiva solo «dominio». Aggiunta nel blocco `#dominio`, con «indefinita» e «valore escluso».
- **Reciproco**: schede e domande dicono «reciproco», la teoria solo «inverso». Ora i due nomi compaiono insieme (`#prodotti`, `#divisioni`).
- **Sottrarre un intero** (svolti 3, tracce «Interi e frazioni algebriche», «Differenze con denominatore comune»): caso $\dfrac{3x}{x-4}-3=\dfrac{12}{x-4}$ in `#somme`, con il segno meno su tutto il numeratore.
- **Ridurre / ridotta ai minimi termini** (tracce «riduci…»): una riga in `#semplificare`.
- **Notazione $f(x)$, $f(5)$** (tracce e domande): una riga in `#valori`.
- **Unione di intervalli $\cup$ e $\pm\infty$** (domande): in `#segno`.
- **Equazione impossibile / insieme delle soluzioni vuoto**: nell'esempio dell'equazione.
- **Minimo comune multiplo (mcm)** dei denominatori: nome e regola in `#somme`.

## Dubbi rimasti

- Lunghezza ×1,88 in italiano: sopra l'intervallo indicato dal brief. Per scendere ancora si dovrebbero togliere definizioni o verifiche numeriche.
- La parola «funzione» era nell'originale (`#equivalenza` e l'esempio successivo); l'ho tenuta con una definizione di una riga, anche se al primo anno le funzioni spesso non sono ancora state trattate.
- In inglese «condizione di esistenza» è resa con *domain restriction* (termine del file esistente), con «also called its condition of existence» alla prima comparsa.
- Nella figura di $\dfrac{x-1}{x+2}$ l'asintoto orizzontale $y=1$ è disegnato ma il testo spiega solo che cosa sia un asintoto in generale, senza commentare quella retta (tolto per contenere la lunghezza).
