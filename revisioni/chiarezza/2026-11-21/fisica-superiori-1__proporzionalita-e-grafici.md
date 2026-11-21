# Rapporto · fisica-superiori-1 / proporzionalita-e-grafici

**Controllo** (`python3 strumenti/controlla_capitolo.py fisica-superiori-1 proporzionalita-e-grafici`): ESITO «a posto», nessun ERRORE, nessun AVVISO.

**Parole**: italiano 2566 → 4829 (×1,88); inglese 2549 → 5056 (×1,98). Blocchi 24, ancore, titoli `##`, titoli dei blocchi e 11 righe di figura invariati. Formule in evidenza 4 → 12, voci di elenco 0 → 37, uguali nelle due lingue.

L'aumento supera l'intervallo atteso (1,2-1,7) e resta sotto la soglia 2,0. Il conteggio è gonfiato dai conti scritti passo per passo (le formule nel testo passano da circa 210 a 516 e ogni pezzo di formula conta come parola). Ho già tolto le ripetizioni che avevo introdotto; ciò che resta sono definizioni, passaggi di calcolo e i casi richiesti dalle domande.

## Che cosa è cambiato

1. Ogni blocco parte da una situazione con i numeri (rubinetto da 3 L/min, strato da 12 cm³, recipiente con 4 L che riceve 2 L/min, area del quadrato) e solo dopo arriva la legge con le lettere.
2. Termini e simboli definiti alla prima comparsa: grandezza, unità di misura, N (newton), cm, s, L, mL, min, km/h, h, cm², cm³, assi, ascissa, ordinata, scala, «y contro x», pendenza, Δ, rapporto, numeratore e denominatore, dinamometro, pendenza media, costante, coefficiente di proporzionalità, legge/modello, dominio, origine, portata, membri di un'uguaglianza, percentuale, reciproco, incertezza, ±, ≃, intercetta, indici, intersezione, capacità, equispaziate, scarto, residuo, interpolazione, estrapolazione, allineati, lineare, tara, fattore di scala, esponente, radice quadrata.
3. Conti scritti un passaggio per riga: $\Delta l$ e $\Delta F$ dai quadretti, $7{,}5=3t$, i due coefficienti della pompa, $2t+4=4t$, $4+3t=16$, i tre rapporti fra incrementi della tabella, i tre residui, $(x+1)^2-x^2$, $\sqrt{32}=4\sqrt2$.
4. Oggetti quasi uguali messi in elenco (le due scale verticali, i due coefficienti della pompa, i tre controlli diretto/inverso/affine, i due tratti del grafico con capacità).
5. Tolta la voce da laboratorio e la prima persona plurale («Assumiamo», «Supponiamo», «Misuriamo», «la previsione inversa ed esclude quella affine», «compatibile»): forma impersonale e frasi con soggetto e verbo.
6. Il testo attorno a ogni figura nomina i punti che la figura mostra (P e Q, A e B, il punto P=(2;8), il punto vuoto a 3 cm, le due curve con e senza sosta). Nel blocco `#due-punti` un esempio numerico con i punti (0;4), (3;10) e (0;0), (3;6) spiega la figura dei due recipienti che lo segue, prima non commentata.
7. Dimostrazione di `#due-punti` riscritta con le due uguaglianze in evidenza, la sottrazione membro a membro e il raccoglimento di $m$ nominati.
8. Frazioni tutte in colonna: `y/x`, `c/x^2`, `y/x^2` sono diventati `\dfrac`.

## Com'era / Com'è ora (blocco `#diretta`)

**Com'era**

> In una **proporzionalità diretta** vale $y=kx$, dove $k$ è un coefficiente costante. Per $x\neq0$ il rapporto $y/x$ vale $k$. Le unità di $k$ sono quelle di $y$ divise per quelle di $x$. Quando l'origine appartiene al dominio, il modello dà $y=0$ in corrispondenza di $x=0$.

**Com'è ora**

> Un rubinetto versa $3$ litri d'acqua al minuto. In $1\,\mathrm{min}$ si raccolgono $3\,\mathrm L$, in $2\,\mathrm{min}$ si raccolgono $6\,\mathrm L$ e in $4\,\mathrm{min}$ si raccolgono $12\,\mathrm L$ ($\mathrm L$ è il simbolo del litro, $\mathrm{min}$ quello del minuto). Dividendo ogni volume per il suo tempo si ottiene sempre lo stesso numero: $\dfrac31=\dfrac62=\dfrac{12}{4}=3$.
>
> Due grandezze $x$ e $y$ sono in **proporzionalità diretta** quando $y=kx$. Il numero $k$ è una **costante**, cioè resta lo stesso per tutte le coppie, e si chiama **coefficiente di proporzionalità**. Per $x\neq0$ ($x$ diverso da zero) il rapporto $\dfrac yx$ vale $k$. […] Il **dominio** è l'insieme dei valori di $x$ per i quali si usa la formula. Quando lo zero appartiene al dominio, per $x=0$ la formula dà $y=k\cdot0=0$. Il grafico è allora una retta che passa per l'origine, cioè per il punto $(0;0)$.

## Errori nell'originale

Nessun errore numerico: tutti i conti sono stati ricalcolati con Python e coincidono. Nell'inglese originale l'ultimo esempio aveva una frase rotta («To check the graph of area as a function of $\ell^2$, instead, the horizontal coordinates become…»), ora corretta.

## Aggiunte per coprire schede, esercizi e domande

- `#assi`: ascissa e ordinata, «grafico di y contro x», valore di un quadretto su una scala che non parte da zero (da 10 s a 30 s in cinque quadretti).
- `#unita-pendenza`: la pendenza cambia valore numerico con le unità (3,75 N/cm = 375 N/m).
- `#affine`: «coefficiente angolare» come sinonimo di pendenza (la teoria non lo nominava, le schede 3 e 8 e gli esercizi sì), pendenza negativa, intersezione con l'asse orizzontale ($y=12-2x$ in $x=6$), retta orizzontale con pendenza zero.
- `#inversa`: $x=0$ escluso.
- `#tabelle`: una terna di coppie per ciascun controllo (diretto, inverso, affine con ascisse non equispaziate).
- Esempio sulla trasformazione dell'ascissa: caso $u=\dfrac{1}{x^2}$ per la legge inversa quadratica.

## Dubbi rimasti

- La figura dopo `#due-punti` chiama A il recipiente $2t$ e B il recipiente $2t+4$, mentre l'esempio `#confronti-modelli` chiama A il recipiente $2t+4$ e B il recipiente $4t$. Le righe delle figure non si toccano, quindi ho aperto l'esempio con «In un'altra prova». Uniformare le lettere richiederebbe di cambiare la legenda di una figura.
- Residuo definito come «misurato meno previsto», come nell'originale. La domanda 10 chiede invece la correzione «previsto meno osservato», che ha segno opposto: è coerente, ma lo studente la incontra senza preavviso.
- Inglese: uso «horizontal/vertical coordinate» come il file e le schede esistenti (abscissa e ordinate non compaiono nelle schede inglesi) e «gradient» come secondo nome di slope.
- Lunghezza oltre l'intervallo atteso, come spiegato sopra.
