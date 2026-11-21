# Rapporto · Matematica 1° anno · Rette parallele e quadrilateri

**Controllo:** `python3 strumenti/controlla_capitolo.py matematica-superiori-1 parallele-e-quadrilateri` → «a posto, con avvisi da valutare», nessun ERRORE. Unico avviso: «sigle BD, AC», che sono nomi di segmenti.

**Parole:** italiano 2473 → 4684 (×1,89); inglese 2436 → 4780 (×1,96). Sopra l'intervallo atteso (1,2-1,7), sotto la soglia di avviso (2,0). Dopo un primo taglio delle ripetizioni (da ×2,01), l'aumento che resta viene da tre cose: le definizioni che mancavano (una ventina di termini), le dimostrazioni riscritte un passo per frase e i conti messi in colonna. Se va accorciato ancora, i candidati sono gli esempi numerici aggiunti nell'osservazione sulle aree e la descrizione delle figure.

## Che cosa è cambiato

1. **Termini definiti alla prima comparsa**: trasversale, incrocio, congruenti (angoli e segmenti), acuto/retto/ottuso, supplementari, opposti al vertice, adiacenti, settore, semiretta, traslazione e vettore di traslazione, lati e angoli consecutivi e opposti, diagonale, convesso, punto medio, perpendicolari, condizione sufficiente, base maggiore e minore, lati obliqui, perimetro, area, cateti, ipotenusa. Simboli letti a parole: $\parallel$, $\perp$, $\angle BAC$ (la lettera centrale è il vertice), $\alpha$ e $\beta$.
2. **Sigle dei criteri di congruenza**: ALA, LAL e LLL hanno il nome per esteso e l'enunciato in una riga alla prima comparsa (prima erano usate senza spiegazione).
3. **Elenchi al posto di frasi con tre oggetti quasi uguali**: le tre coppie di angoli, le tre proprietà e i tre criteri di parallelismo, le proprietà del parallelogramma, le proprietà delle diagonali di rettangolo, rombo e quadrato.
4. **Dimostrazioni con un passo per frase** e i dati dei due triangoli in elenco (lato comune, lati congruenti, angolo compreso), con il criterio nominato. Nel criterio delle diagonali che si bisecano ora è scritto quali angoli sono alterni interni e per quali rette.
5. **Conti in colonna**: l'equazione $5x+30=180$ con tutti i passaggi e l'operazione detta a parole; gli angoli del parallelogramma ($58^\circ$, $122^\circ$); l'altezza del trapezio dall'area.
6. **Voce**: imperativi («traccia», «supponi», «confronta», «racchiudi», «unisci») e «consideriamo» portati alla forma impersonale; tolti «può/possono» e «permette di».
7. **Testo che descrive le figure**: per ogni figura sono detti i punti e le misure che si leggono dal disegno (inclinazione di $45^\circ$ e angoli $45^\circ$/$135^\circ$; trapezio con basi $6$ e $3$ e altezza $3$; trapezio ruotato con $B=7$, $b=4$, $h=3$, area $16{,}5$; quadrilatero con $AO=4$, $OC=2$, $BO=OD=3$).
8. Titoli `##`, ancore, titoli dei blocchi, righe delle figure e dati numerici degli esempi sono invariati; nessun blocco aggiunto o tolto.

## Com'era / Com'è ora

Blocco «Condizioni sufficienti», dimostrazione del criterio delle diagonali.

**Com'era**

> Per dimostrare l’ultimo criterio si assumono $AO=OC$ e $BO=OD$. I triangoli $AOB$ e $COD$ hanno due coppie di lati congruenti e gli angoli in $O$ opposti al vertice, dunque congruenti. Per LAL i triangoli sono congruenti. Dall'uguaglianza degli angoli corrispondenti si ricava $AB\parallel CD$.

Lo studente si perdeva in due punti: «LAL» non era mai spiegato, e «angoli corrispondenti» qui indicava gli angoli che si corrispondono nei due triangoli, mentre nel capitolo «corrispondenti» è il nome di una coppia di angoli fra parallele. Non era detto quali angoli usare né perché ne segue il parallelismo.

**Com'è ora**

> Si dimostra l’ultimo criterio. Le diagonali si incontrano in $O$ e per ipotesi $AO=OC$ e $BO=OD$. Il criterio di congruenza LAL (lato, angolo, lato) afferma che due triangoli sono congruenti se hanno congruenti due lati e l'angolo compreso tra essi. Nei triangoli $AOB$ e $COD$:
>
> - $AO=CO$ e $BO=DO$ per ipotesi;
> - gli angoli $\angle AOB$ e $\angle COD$, compresi tra questi lati, sono opposti al vertice e quindi congruenti.
>
> Per il criterio LAL i due triangoli sono congruenti. Gli angoli che si corrispondono sono congruenti, quindi $\angle OAB=\angle OCD$. Questi due angoli sono alterni interni per le rette $AB$ e $CD$ tagliate dalla trasversale $AC$. Per il criterio inverso si ricava $AB\parallel CD$.

## Errori trovati nell'originale e corretti

- **Formule che non si vedevano bene (italiano e inglese)**: in 11 blocchi mancava la barra rovesciata dei comandi LaTeX (`^circ`, `angle`, `parallel`, `perp`, `dfrac`, `,mathrm`, `cdot`), quindi in pagina comparivano scritte come «180circ» o «ABparallelCD». Blocchi: le due dimostrazioni sul parallelismo, la somma degli angoli, «Dai lati paralleli al punto medio comune», «Ricostruire i quattro angoli», le dimostrazioni sui criteri, l'osservazione senza titolo, «Che cosa aggiunge il dato sulle diagonali», l'area del trapezio, «L'altezza si ricava dall'area». Tutte corrette.
- **Frazioni in linea** ($uh/2$, $d_1/2$, $d_1d_2/2$, $2\cdot70/(12+8)$) messe in colonna.
- **Dimostrazione sui coniugati interni**: l'originale diceva che, sostituendo un angolo con il suo adiacente, si ottengono due angoli «nella posizione dei corrispondenti» senza dire quale dei due adiacenti. Ora è indicato l'adiacente che sta tra le rette, e la coppia ottenuta è di alterni interni.
- Nessun errore numerico: tutti i conti dell'originale sono giusti (ricontrollati a mano, non con sympy: sono somme di angoli, perimetri e terne pitagoriche).

## Termini degli esercizi che mancavano in teoria e sono stati aggiunti

- **Base maggiore, base minore, lati obliqui** (schede e domande li usano molte volte; la teoria diceva «lati obliqui» senza definirli): in «Basi, altezza e perimetro».
- **Semiperimetro** (scheda sui perimetri): nello stesso blocco, con $P=34\,\mathrm{cm}$ → $17\,\mathrm{cm}$.
- **Teorema di Pitagora, cateti, ipotenusa, proiezione** (schede 4 e 6): nell'osservazione «La lunghezza del lato e l'altezza», con il lato obliquo $5$ e proiezione $3$ → altezza $4$, e il lato del rombo con diagonali $8$ e $6$ → $5\,\mathrm{cm}$.

## Dubbi rimasti

- Lunghezza: vedi sopra (×1,89). Decida il titolare se accorciare.
- Nell'osservazione «Una proprietà non è sempre reversibile» ho riusato i dati $AO=OC=4$, $BO=OD=6$ del blocco «Condizioni sufficienti» per mostrare un parallelogramma che non è un rettangolo (diagonali $8$ e $12$): è un esempio aggiunto, non presente in quel blocco nell'originale.
- Inglese: il file esistente e le schede usano la grafia americana (*recognizing*, *trapezoid*, *labeled*) e i termini *same-side interior angles*, *vertical angles*, *legs*, SAS/ASA/SSS; li ho mantenuti. In inglese *legs* indica sia i lati obliqui del trapezio sia i cateti: è l'uso corrente, ma nell'osservazione sulle aree le due accezioni sono vicine.
- Le figure non sono state rese in PNG: le righe `::grafico` sono identiche all'originale e il testo è stato scritto leggendo le coordinate.
