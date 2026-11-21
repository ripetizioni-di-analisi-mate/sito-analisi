# Matematica 2° anno · Circonferenza, cerchio e poligoni · revisione di chiarezza

Parole (corpo, conteggio dello script): italiano 2336 → 3896 (×1,67); inglese 2345 → 4017 (×1,71). Controllo: `ESITO: a posto`, senza avvisi.

## Che cosa è cambiato

1. **Termini definiti alla prima comparsa**: centro, raggio, interno/esterno (in elenco con un caso numerico), arco minore e maggiore, semicirconferenza, perpendicolare, piede, distanza di una corda, ipotenusa e cateti, congruenti, isoscele, angolo esterno di un triangolo, settore circolare, angolo concavo, «insiste/intercetta», inscritto, convesso, supplementari, tangente, secante, esterna, regolare, perimetro, rotazione, $\pi$ («pi greco», rapporto fra circonferenza e diametro), concentriche, corona circolare.
2. **Teorema di Pitagora** richiamato in tre righe nella prima dimostrazione che lo usa; terzo criterio di congruenza nominato.
3. **Calcoli scritti per esteso**, un passaggio per riga: mezza corda e distanza ($\sqrt{100-64}=\sqrt{36}=6$), segmento tangente, raggio da $PT$ e $OP$, arco da $60^\circ$, angolo da un arco di $5\pi$, quarto di cerchio (arco, perimetro, area), ricavo di $A_{\mathrm s}=\dfrac{r\ell}{2}$ per sostituzione, corona da $120^\circ$, somme dei lati opposti nel quadrilatero circoscritto.
4. **Dimostrazioni a passi brevi**: angolo al centro con i tre casi titolati (lato sul diametro, diametro interno, diametro esterno) e legati alle tre figure; tangenti con i tre casi in elenco; poligono regolare con la rotazione definita e ogni passaggio motivato.
5. **Casi in elenco** invece che in una frase: posizioni di un punto, posizioni di una retta, numero di tangenti da un punto, formule del poligono regolare.
6. L'errore «usare la corda intera come cateto» è passato in un blocco `:::attenzione` con il conto ($100-256=-156$).
7. Le figure sono descritte nel testo (diametro $AB$, raggio $OP$, $Q$ interno, $S$ esterno; $r=5$, $d=3$, $AH=4$ nella figura della corda; quarto di cerchio con $r=4$).

## Com'era / Com'è ora

Com'era (dimostrazione del teorema dell'angolo alla circonferenza):
> Si traccia il diametro $CD$. Se uno dei lati dell'angolo coincide con $CD$, si può chiamare $A$ l'altro estremo. Il triangolo $OCA$ ha $OC=OA$. L'angolo $\widehat{AOD}$ è esterno a quel triangolo e vale $\widehat{OCA}+\widehat{CAO}=2\widehat{ACD}$.

Com'è ora:
> *Primo caso: un lato dell'angolo sta sul diametro* (prima figura). Si chiama $A$ l'estremo dell'altro lato. Il triangolo $OCA$ è isoscele, cioè ha due lati uguali, perché $OC$ e $OA$ sono raggi. In un triangolo isoscele gli angoli alla base sono uguali, quindi $\widehat{CAO}=\widehat{OCA}=\widehat{ACD}$. L'angolo $\widehat{AOD}$ è un **angolo esterno** del triangolo, cioè l'angolo formato da un lato e dal prolungamento del lato vicino. Un angolo esterno di un triangolo è uguale alla somma dei due angoli interni non adiacenti, perciò $\widehat{AOD}=\widehat{OCA}+\widehat{CAO}=2\,\widehat{ACD}$.

## Errori nell'originale

Nessun errore numerico: tutti i conti ricalcolati ($\sqrt{10^2-8^2}=6$, $\sqrt{13^2-12^2}=5$, $4\sqrt3$, $\dfrac13(64-25)\pi=13\pi$, $\dfrac{6\cdot9}{2}=27$, $45^\circ/135^\circ$, $183^\circ$ ecc.).

## Aggiunte per la copertura di schede, esercizi e domande

- **Angolo esterno di un poligono** e somma degli angoli esterni $=360^\circ$, con il caso $156^\circ\to15$ lati (svolto 7, domande sugli angoli esterni e sulle «svolte»). Blocco `#poligoni`.
- **Somma degli angoli interni** $(n-2)\cdot180^\circ$ con $n=9\to140^\circ$ (domanda 7). Blocco `#poligoni`.
- **Regolare = lati e angoli congruenti insieme**, con il rombo da $75^\circ$ (domanda sul rombo). Blocco `#poligoni`.
- **Circonferenza per i vertici di un triangolo rettangolo**: raggio = metà ipotenusa, cateti 9 e 12 (domanda omonima). Blocco `#semicirconferenza`.
- **Rette a distanza 2, 4, 6 cm da una circonferenza di raggio 4** (svolto 3). Blocco `#tangenti`.
- **Ruota che rotola senza slittare** avanza di una circonferenza a giro, $C=\pi d$ (svolto 5, domande sulle ruote). Blocco `#lunghezze`.
- **Area proporzionale al quadrato del raggio** (raddoppio → ×4) (domande sul raddoppio del raggio). Blocco `#aree`.
- Arco minore/maggiore, angolo concavo, «insiste/intercetta», posizione interno/sulla circonferenza/esterno con $r=6$ (svolti 1-2, domanda 9).

## Errori notati in esercizi e domande (non corretti)

Nessun errore trovato nelle schede, negli esercizi da fare e nelle 90 domande lette.

## Dubbi

- Inglese a ×1,71 (limite 1,8): la traduzione è integrale; l'inglese usa *circle* per circonferenza e *disk* per cerchio, come il file esistente e le schede.
- Nell'esempio dell'esagono c'è solo l'apotema, come nell'originale (non è stata aggiunta l'area, per contenere la lunghezza).
