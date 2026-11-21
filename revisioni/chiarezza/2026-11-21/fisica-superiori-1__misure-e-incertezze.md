# Fisica 1° anno · Misure, strumenti e incertezze — revisione di chiarezza

**Controllo** (`python3 strumenti/controlla_capitolo.py fisica-superiori-1 misure-e-incertezze`): nessun ERRORE. Resta un solo avviso, falso allarme: «6 forme americane» sono le 6 occorrenze di *force meter* (il dinamometro), nome già usato nel file inglese esistente e nelle schede inglesi; il resto è in grafia britannica (*centre*, *millimetre*).

## Parole

| | prima | dopo | rapporto |
| --- | ---: | ---: | ---: |
| Italiano | 2612 | 5110 | 1,96 |
| Inglese | 2596 | 5182 | 2,00 |

Il capitolo è sopra la fascia attesa (1,2-1,7) e appena sotto la soglia dell'avviso (2,0). La prima stesura era a 2,13: ho tolto ripetizioni ed esempi doppi aggiunti da me. Quello che resta in più sono definizioni di termini e simboli che l'originale usava senza spiegarli (una quarantina) e i passaggi dei conti, che l'originale dava solo come risultato. Se serve scendere ancora, i punti da cui togliere sono la dimostrazione della propagazione (prodotto, quoziente, potenza) e le tabelle aggiunte.

## Che cosa è cambiato

1. **Termini e simboli definiti alla prima comparsa**: grandezza, lettura, scala, tacca, indice, analogico e digitale, quadrante, divisione/passo, incertezza, protocollo, offset, intervallo e scrittura $[7;13]$, centro e raggio, pedice, $\bar x$, $\pm$, $\Delta x$, $\geq$, $\varepsilon$, $\%$, adimensionale, $\simeq$, $\lvert n\rvert$, $\rho$ e densità, nominale, prudenziale, primo ordine, specifica, vincolo, arrotondare, parità, copertura, scarto, campione, taratura, sensibilità. Unità: cm, mm, N (newton), s, g, cm², cm³, g/cm³.
2. **Prima i numeri, poi le lettere**: media e semidispersione partono dalle tre letture 9,8, 10,0 e 10,2 cm con il conto scritto; le formule con $x_1,\ldots,x_n$ vengono dopo. Lo stesso per $x=(x_m\pm\Delta x)$ e per l'incertezza relativa.
3. **Tutti i passaggi dei conti**: medie delle serie (somma, divisione), conversione 0,05 cm = 0,5 mm, estremi degli intervalli, densità minima e massima con i valori decimali e le sottrazioni che danno 0,64 e 0,78, stima lineare del quadrato (10% → 20% → 20 cm²), taratura a due campioni con le due condizioni in sistema e la sottrazione che elimina $b$.
4. **Propagazione**: l'enunciato in un solo periodo è diventato tre regole in elenco (somma e differenza, prodotto e quoziente, potenza), ciascuna con un caso numerico; la dimostrazione è divisa in passi con il nome (somma, differenza, prodotto, quoziente, potenza) e ogni uguaglianza è scritta.
5. **Voce da laboratorio tolta**: «valore centrale campionario», «il protocollo vuole», «modello a intervalli», «configurazione», «escursione osservata», «sensibilità a un estremo spostato» sono stati sostituiti da frasi con soggetto e verbo concreti. «Può/possono» da 3,8 a 0 ogni 1000 parole.
6. **Figure descritte dal testo**: ogni figura ha ora nel testo la frase che dice che cosa mostra (scala con divisioni da 0,5 N, i due dinamometri, mezzeria, serie A e B, punti A e B della bilancia, retta dello scarto). Le righe `::grafico` sono identiche e nello stesso posto.
7. **Due tabelle e alcuni elenchi aggiunti** al posto di frasi con più oggetti simili: i due dinamometri (portata, divisione, incertezza), le tre regole per l'incertezza strumentale, i due casi dell'arrotondamento al decimo.
8. **Struttura invariata**: frontmatter, 7 titoli `##`, 25 blocchi, ancore e titoli dei blocchi, 10 figure; dati numerici degli esempi tutti uguali all'originale.

## Com'era / Com'è ora

Blocco `#propagazione`, l'enunciato.

**Com'era**

> Se per ogni ingresso si usa un intervallo simmetrico e si ammettono tutte le combinazioni dei due intervalli, la massima deviazione dalla somma o dalla differenza dei valori centrali è $\Delta a+\Delta b$. Per un prodotto o un quoziente di grandezze positive con piccole incertezze relative, la stima prudenziale **al primo ordine** è la somma delle incertezze relative. Per la potenza $z=x^n$ con $x>0$ vale al primo ordine $\varepsilon_z\simeq\lvert n\rvert\varepsilon_x$.

Lo studente non sa che cosa sia un «ingresso», che cosa voglia dire «prudenziale» o «al primo ordine», come si leggano $\simeq$ e $\lvert n\rvert$, e non vede nessun numero.

**Com'è ora**

> Una grandezza calcolata a partire da altre grandezze misurate ha anch'essa un'incertezza. Il calcolo di questa incertezza a partire da quelle dei dati, detti anche ingressi, si chiama **propagazione delle incertezze**.
>
> Le regole che seguono sono prudenziali. Ogni ingresso ha un intervallo simmetrico, $a=(a_m\pm\Delta a)$ e $b=(b_m\pm\Delta b)$, ed è libero di assumere qualsiasi valore del proprio intervallo, qualunque sia il valore dell'altro. Si cerca la massima distanza del risultato dal suo valore centrale.
>
> - **Somma e differenza.** L'incertezza assoluta di $a+b$ e di $a-b$ è la somma delle incertezze assolute, $\Delta a+\Delta b$. Per $a=(12{,}0\pm0{,}2)\,\mathrm{cm}$ e $b=(5{,}0\pm0{,}1)\,\mathrm{cm}$ la somma è $(17{,}0\pm0{,}3)\,\mathrm{cm}$ e la differenza è $(7{,}0\pm0{,}3)\,\mathrm{cm}$.
> - **Prodotto e quoziente** di grandezze positive con incertezze relative piccole. L'incertezza relativa del risultato è circa la somma delle incertezze relative, $\varepsilon\simeq\varepsilon_a+\varepsilon_b$. Il simbolo $\simeq$ si legge «circa uguale». Se la base di un rettangolo ha incertezza del $2\%$ e l'altezza del $3\%$, l'area ha incertezza di circa il $5\%$.
> - **Potenza.** Per $z=x^n$ con $x>0$ vale $\varepsilon_z\simeq\lvert n\rvert\,\varepsilon_x$. La scrittura $\lvert n\rvert$ indica il valore assoluto di $n$, cioè $n$ senza il segno. Per l'area di un quadrato, che è il lato elevato alla seconda, è $n=2$.
>
> Le regole per prodotto, quoziente e potenza sono approssimazioni **al primo ordine**, dette anche lineari, perché trascurano i prodotti fra due incertezze relative: con $0{,}02$ e $0{,}03$ il termine trascurato è $0{,}02\cdot0{,}03=0{,}0006$.

(«Prudenziale» è definito prima, nel blocco `#intervallo-tolleranza`: una regola che considera il caso più sfavorevole.)

## Errori trovati nell'originale

Nessun errore di calcolo: tutti i numeri dell'originale sono stati ricalcolati e sono giusti. Due correzioni di forma: le divisioni in linea $(3+10)\div2$ e $(154-52)\div(150-50)$ sono ora frazioni in colonna.

## Aggiunte per coprire schede, esercizi e domande

- **Parallasse** (domanda 76, che rimanda a `#errori`): tre righe nel blocco `#errori`.
- **Passo** della scala e **quadrante** (schede 2 e 8, varie domande): nel blocco `#strumenti`.
- **Notazione $\max$ e $\min$** (scheda 8, esercizi 2 e 3): in `#dispersione-strumentale` e in `#intervallo-tolleranza`, con il conto $\Delta_{\max}=\min(1\,\mathrm{mm};3\,\mathrm{mm})$ sui dati dell'esempio.
- **Sensibilità e offset** come nomi di $a$ e $b$ nella taratura (domande sulla taratura): in `#taratura-due-punti`; «offset» è definito già nell'esempio del righello.
- **Adimensionale** (schede 3 e altre): in `#relativa`.
- **Risoluzione di uno strumento digitale e dato del costruttore** (domanda sul cronometro, 0,01 s e 0,03 s): stessi numeri nel blocco `#criterio-lettura`.
- **Raggio** di un intervallo (usato in quasi tutte le spiegazioni delle schede): definito nell'esempio su media e punto medio.

## Dubbi rimasti

- Lunghezza: 1,96 in italiano, 2,00 in inglese (vedi sopra).
- Nell'esempio «Confrontare risoluzioni relative» ho aggiunto la frase «fra due misure si dice più precisa quella con l'incertezza relativa minore», perché la scheda 7 ha «precisione» nel titolo e la teoria non la nominava. È l'uso dei libri di testo delle superiori; se Carmine preferisce non introdurre il termine, la frase si toglie senza toccare altro.
- La frase dell'originale «La scelta del centro dipende dalla domanda» (`#intervallo-osservato`) è resa dai due punti in elenco all'inizio del blocco, non più come frase di chiusura.
- Il blocco `#strumenti` definisce molti termini insieme: ho lasciato in grassetto solo lettura, portata, divisione e risoluzione per restare vicino al limite di due-tre grassetti per blocco.
- Non ho guardato l'anteprima grafica delle figure (righe invariate; la resa dello script è a posto).
