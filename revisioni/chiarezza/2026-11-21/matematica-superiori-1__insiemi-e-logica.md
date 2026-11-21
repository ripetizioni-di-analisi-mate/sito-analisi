# Matematica 1° anno · Insiemi e logica elementare

## Esito del controllo

`python3 strumenti/controlla_capitolo.py matematica-superiori-1 insiemi-e-logica` → **ESITO: a posto** (nessun ERRORE, nessun AVVISO).

## Parole

- Italiano: 2700 → 4863 (×1,80)
- Inglese: 2741 → 5053 (×1,84)

L'aumento supera di poco la fascia attesa (1,2-1,7) e resta sotto la soglia di avviso (2,0). Una prima stesura era a ×1,95: sono stati tolti gli esempi doppi e le descrizioni ripetute delle figure. Quello che resta in più sono le letture dei simboli (il capitolo ne introduce circa venti), tre tabelle e i passaggi di calcolo.

## Che cosa è cambiato

1. **Ogni simbolo ha la lettura a parole alla prima comparsa**: $\in$, $\notin$, $\subseteq$, $\subsetneq$, $\varnothing$, $\mathbb Z$, $\le$, $\cup$, $\cap$, $\setminus$, $A^c$, $|A|$, $\min$, $\times$, $f(a)$, $\land$, $\lor$, $\neg$, $\Rightarrow$, $\iff$, $\forall$, $\exists$. Prima molti comparivano senza lettura («Per $A,B\subseteq U$…»).
2. **Termini definiti alla prima comparsa**: sottoinsieme, multiplo, insieme finito, numerosità, primo e secondo membro, relazione, dominio, codominio, connettivo, tabella di verità, espressioni equivalenti, ipotesi e conclusione di un'implicazione, conversa, contronominale, controesempio, frase universale ed esistenziale, «se e solo se».
3. **Prima i numeri, poi le lettere**: le quattro operazioni hanno un caso numerico dentro la definizione ($U=\{1;…;5\}$, $A=\{1;2;3\}$, $B=\{3;4\}$); la formula dell'unione ha il conto $3+2-1=4$ e il motivo della sottrazione (gli elementi comuni contati due volte).
4. **Implicazione**: aggiunta la tabella di verità con la colonna della contronominale e un esempio che fa vedere tutte le righe («se un intero è multiplo di $4$, allora è pari», con $8$, $6$, $3$). La dimostrazione ora rimanda alle colonne della tabella.
5. **Quantificatori**: lettura di $\forall$ ed $\exists$ in elenco, esempio con gli studenti che hanno consegnato il compito, negazioni dette prima a parole e poi in simboli.
6. **Passaggi di calcolo esplicitati** negli esempi: le sei coppie del prodotto cartesiano scritte tutte, le tre immagini di $f(x)=2x+1$ una per riga, le due prove fallite nell'esempio sull'ordine dei quantificatori ($0+0=0$, $1+1=2$), il conto $14+12-4=22$ nell'osservazione sui conteggi.
7. **Elenchi al posto di frasi con più oggetti simili**: i due modi di assegnare un insieme, le quattro operazioni, i tre connettivi, le tre relazioni del blocco `:::attenzione` sulle funzioni. La condizione di uguaglianza di due coppie è scritta come sistema.
8. Tolte le formule da manuale («si può determinare», «la relazione tra le coordinate si può rispettare in zero modi», «incompatibile con l'universo assegnato»). «Può/possono» è sceso a 0,6 ogni 1000 parole.

Invariati: frontmatter, titoli `##`, ancore e titoli dei blocchi con ancora, titoli degli esempi, le 11 righe delle figure, tutti i dati numerici degli esempi. Nessun contenuto tolto.

## Com'era / Com'è ora

Blocco `#problemi` (Condizione sufficiente e condizione necessaria).

**Com'era**

> L'implicazione $p\Rightarrow q$ è falsa esattamente quando $p$ è vera e $q$ è falsa. Se vale $p\Rightarrow q$, $p$ è condizione **sufficiente** per $q$ e $q$ è condizione **necessaria** per $p$. La contronominale $\neg q\Rightarrow\neg p$ ha sempre lo stesso valore di verità dell'implicazione originaria.

Il simbolo $\Rightarrow$ non era letto, «contronominale» non era definita e non c'era alcun caso concreto: lo studente non aveva modo di capire perché un'implicazione con ipotesi falsa conta come vera.

**Com'è ora**

> L'**implicazione** $p\Rightarrow q$ si legge «se $p$ allora $q$» oppure «$p$ implica $q$». La proposizione $p$ è l'ipotesi e $q$ è la conclusione. L'implicazione $p\Rightarrow q$ è falsa esattamente quando $p$ è vera e $q$ è falsa.
>
> (tabella di verità con le colonne $p\Rightarrow q$, $\neg q$, $\neg p$, $\neg q\Rightarrow\neg p$)
>
> Si consideri la frase «se un intero è multiplo di $4$, allora è pari». Il numero $8$ è multiplo di $4$ ed è pari, come nella prima riga. Il numero $6$ è pari senza essere multiplo di $4$, come nella terza riga. Il numero $3$ rientra nella quarta riga. Nessuno dei tre smentisce la frase. La smentirebbe soltanto un multiplo di $4$ dispari, che corrisponde alla seconda riga.
>
> Se vale $p\Rightarrow q$, $p$ è condizione **sufficiente** per $q$, perché la verità di $p$ basta per avere $q$. Inoltre $q$ è condizione **necessaria** per $p$, perché quando $q$ è falsa anche $p$ è falsa. Nell'esempio, essere multiplo di $4$ è sufficiente per essere pari, ed essere pari è necessario per essere multiplo di $4$.
>
> La **contronominale** di $p\Rightarrow q$ è l'implicazione $\neg q\Rightarrow\neg p$. La contronominale ha sempre lo stesso valore di verità dell'implicazione originaria.

## Errori trovati nell'originale

Nessuno. Tutti gli insiemi, i conteggi e le tabelle di verità sono stati ricalcolati con Python e coincidono.

## Termini e notazioni degli esercizi che mancavano in teoria (aggiunti)

- $f:A\to B$, $f:\mathbb R\to\mathbb R$ e l'insieme $\mathbb R$ (domande a tempo sulle funzioni), con il calcolo di un'immagine da una formula ($f(x)=2x+3$, $f(-1)=1$): blocco `#funzioni`.
- La freccia $\mapsto$ (scheda 5): blocco `#funzioni`.
- $a\mid b$ «$a$ divide $b$» e $a\nmid b$ (schede 6 e 7), con la precisazione che la barra ha un altro significato nella scrittura di un insieme: esempio «La direzione del criterio».
- «Ascissa» e «ordinata» (scheda 5): esempio «Sei coppie e una relazione».
- «Numerosità» come nome di $|A|$ (usata in dieci file fra schede e domande e nel titolo del blocco `#controlli`): blocco `#metodo`.
- Un insieme come elemento di un altro insieme, $C=\{\varnothing;4\}$ (scheda 4): blocco `:::attenzione` della prima sezione.
- «Testimone» di una frase esistenziale (scheda 7): esempio «Trovare un controesempio indicando il dominio».
- «Tabella di verità» ed espressioni «equivalenti» (scheda 6): blocco `#esempi` e l'esempio che lo segue.
- $\iff$ letto «equivale a» (schede 7): blocco `#quantificatori`.
- «Enunciato» come sinonimo di proposizione (schede 6): blocco `#esempi`.

## Dubbi rimasti

- Lunghezza a ×1,80, sopra la fascia attesa: se va ridotta ancora, i candidati sono la tabella aggiunta nell'esempio «Leggere un'espressione composta» e il caso numerico dentro la definizione delle operazioni.
- Il valore assoluto $|x|$ compare in una scheda e in una domanda con lo stesso simbolo usato qui per la numerosità $|A|$. Non è stato aggiunto in teoria, perché appartiene a un altro capitolo.
- Nella figura del teorema di De Morgan la riga `::venn` usa `ambiente="U"` al posto di `universo=1`: copiata identica, non verificata a schermo.
- Inglese: «theater» e «cardinality» tenuti come nel file esistente e nelle domande inglesi.
