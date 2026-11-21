# Matematica 1° anno · Geometria del piano e triangoli

Esito del controllo (`strumenti/controlla_capitolo.py`): **nessun ERRORE**, resa riuscita in italiano e in inglese. Resta un AVVISO sulla lunghezza (vedi «Dubbi rimasti»).

## Parole

| | Prima | Dopo | Rapporto |
|---|---|---|---|
| Italiano | 2287 | 4976 | 2,18 |
| Inglese | 2234 | 5136 | 2,30 |

«Può/possono»: 0,2 ogni 1000 parole. Blocchi 23, figure 11, ancore e titoli invariati.

## Che cosa è cambiato

1. **Ogni termine ha la sua definizione alla prima comparsa.** L'originale usava senza definirli: retta, semiretta, origine, estremi, allineati, distanza, angolo, lati e vertice dell'angolo, ampiezza, grado, congruente (per angoli, segmenti e triangoli), semirette opposte, rette incidenti e perpendicolari, triangolo, lato opposto, perimetro, movimenti rigidi, elementi corrispondenti, angolo compreso, semipiano, circonferenza e raggio, rette parallele, angoli alterni interni, angolo esterno, piede dell'altezza, base, lati obliqui, angolo al vertice, valore assoluto, «se e solo se», punto di tangenza, ipotesi, tesi, controesempio.
2. **Simboli e sigle detti a parole**: $\alpha,\beta,\gamma,\delta,\varepsilon$ con il nome, $^\circ$, $\mathrm{cm}$, $\widehat{AOB}$ e $\widehat A$, $\cong$, $\leftrightarrow$, $C'$, $|a-b|$; LAL, ALA, LLL con il significato delle lettere e della loro posizione.
3. **Elenchi al posto di frasi con più oggetti simili**: tipi di angolo, relazioni fra angoli, triangoli rispetto ai lati e agli angoli, mediana/altezza/bisettrice e il dato da cui si riconosce ciascuna.
4. **Dimostrazioni a passi brevi**, con la proprietà usata nominata: angoli opposti al vertice (le due somme a $180^\circ$ e la sottrazione di $\beta$), i tre criteri (un caso per criterio), somma degli angoli (richiamo sugli alterni interni, poi i tre angoli attorno a $C$), triangolo isoscele (le tre uguaglianze, LAL, le tre conseguenze), teorema inverso, disuguaglianza triangolare (prima le disuguaglianze, poi i tre casi delle circonferenze).
5. **Conti con tutti i passaggi**: terzo angolo ($48^\circ+67^\circ=115^\circ$, poi $180^\circ-115^\circ$), angoli dell'isoscele, equazione $2l+8=32$ risolta in colonna con l'operazione detta a parole, due casi del perimetro $36\,\mathrm{cm}$ in elenco.
6. **Frasi figurate o da manuale riscritte**: «il lato $AC$ porta l'angolo in $A$ nel settore a sinistra», «tre angoli lasciano libera la scala», «LAL stabilisce», «la sola informazione… lascia aperto l'ordine».
7. **Testo legato alle figure**: i numeri letti nelle figure sono detti nel testo ($BC=5$, $BM=MC=2{,}5$, angolo in $B$ ottuso; $BC=4$ e $BD=DC=2$ nell'isoscele; $a=5$, $b=3$, $c=8$ nella figura degli archi). Nell'esempio «Associare lati e vertici» ciascuna figura è stata messa subito dopo il paragrafo che la descrive (stesso blocco, righe identiche).
8. **Ultimo esempio**: la dimostrazione di $AC=BD$ è diventata un elenco numerato di cinque passi, ciascuno con la sua giustificazione.

## Com'era / Com'è ora

Punto scelto: la dimostrazione della somma degli angoli interni. Lo studente trova «porta l'angolo nel settore», «angoli alterni interni» e «rette parallele» senza alcuna definizione.

**Com'era**

> Si traccia per $C$ la parallela ad $AB$. Il lato $AC$ attraversa le due rette parallele e porta l'angolo in $A$ nel settore a sinistra di $AC$ presso $C$. Allo stesso modo $BC$ porta l'angolo in $B$ nel settore a destra presso $C$. Sono uguaglianze di angoli alterni interni. I due settori e l'angolo interno in $C$ coprono insieme l'angolo piatto sotto la parallela.

**Com'è ora**

> La dimostrazione usa le rette parallele. Due rette sono **parallele** se stanno nello stesso piano e non si incontrano. Quando una terza retta taglia due rette parallele, i due angoli che stanno fra le parallele, da parti opposte rispetto alla terza retta e con vertici diversi, si chiamano **alterni interni**. Due angoli alterni interni sono congruenti.
>
> Nella prima figura si traccia per $C$ la retta parallela al lato $AB$. La retta del lato $AC$ taglia le due parallele. L'angolo $\alpha$ in $A$ e l'angolo in $C$ compreso fra la parallela e il lato $AC$, a sinistra di $AC$, sono alterni interni. Anche questo secondo angolo misura quindi $\alpha$. Allo stesso modo la retta del lato $BC$ taglia le due parallele. L'angolo $\beta$ in $B$ e l'angolo in $C$ compreso fra la parallela e il lato $BC$, a destra di $BC$, sono alterni interni. Anche questo angolo misura quindi $\beta$.
>
> Sotto la parallela, attorno al punto $C$, si trovano uno accanto all'altro tre angoli di ampiezze $\alpha$, $\gamma$ e $\beta$. Insieme formano l'angolo piatto che ha il vertice in $C$ e i lati sulla parallela. Perciò $\alpha+\gamma+\beta=180^\circ$.

**Che cosa migliora**

- «Parallele» e «alterni interni» sono definiti prima di essere usati, e la proprietà usata è enunciata.
- Il verbo figurato «porta l'angolo» è sostituito dal fatto: i due angoli sono alterni interni, quindi hanno la stessa ampiezza.
- Ogni «quindi» segue da una frase scritta; la conclusione è la formula $\alpha+\gamma+\beta=180^\circ$, che nell'originale mancava.
- Le lettere $\alpha$, $\beta$, $\gamma$ sono le stesse delle etichette della figura.

## Errori trovati nell'originale e corretti

- Nessun errore di calcolo: tutti i numeri sono stati ricalcolati (angoli, perimetri, intervallo $3<c<11$, distanze $CB_1=CB_2=5$ nel controesempio, angolo ottuso in $B$ nella figura dell'altezza).
- Frazione in linea `(36-10)/2` dentro una formula: ora è $\dfrac{36-10}{2}$.

## Termini e procedimenti degli esercizi aggiunti alla teoria

- **Perimetro** (13 file fra schede, esercizi e domande): definito nel blocco «Vertici e corrispondenza».
- **Lati obliqui**, **base**, **angolo al vertice**, **angoli alla base**: definiti nel teorema sul triangolo isoscele.
- **Cateti e ipotenusa**, **lato opposto a un angolo**: nel blocco «Vertici e corrispondenza»; l'altezza che coincide con un cateto è nel blocco dei tre segmenti.
- **Intervallo** $\left(3,\,11\right)$ con estremi esclusi (le soluzioni di esercizi e domande sono scritte così): in «Controlli sui dati».
- **Punti allineati senza ordine noto** (due valori possibili, scheda 1 e due domande): caso $AB=8$, $AC=5$ nel blocco `#concetti`.
- **Isoscele con un angolo noto di cui non si sa la posizione** (domande): caso dei $40^\circ$ in «Quale angolo si ripete».
- **Notazione $\widehat{AOB}$** e simbolo $\leftrightarrow$ (schede 2, 6, 7 e domande): spiegati alla prima comparsa.
- Angoli interni di ampiezza maggiore di $0^\circ$ (domanda sulla terna $(0,90,90)$): una riga nel teorema `#esempi`.

## Dubbi rimasti

- **Lunghezza oltre il doppio (2,18 in italiano, 2,30 in inglese), sopra l'intervallo atteso 1,2-1,7.** Dopo il primo controllo (2,31) sono stati tolti gli esempi aggiunti che ripetevano altri esempi (caso numerico nella dimostrazione degli opposti al vertice, esempio numerico sull'angolo esterno, perimetro $40\,\mathrm{cm}$, terna $4,7,12$, angolo di $89^\circ$, elenchi ridotti a una frase). Quello che resta in più sono definizioni che l'originale non aveva (circa quaranta termini, elencati al punto 1) e i passi delle dimostrazioni; il brief chiede di non togliere né le une né gli altri. Se si vuole rientrare sotto 2,0 la scelta è del titolare: i candidati sono la definizione dei tre movimenti rigidi, il richiamo su parallele e alterni interni e il terzo caso delle circonferenze.
- La proprietà degli angoli alterni interni è enunciata senza dimostrazione, come nell'originale (il capitolo non tratta le rette parallele).
- Nella dimostrazione della disuguaglianza triangolare resta come fatto di partenza «il percorso più breve fra due punti è il segmento», come nell'originale.
- Inglese: «adiacenti» è reso con *linear pair*, «opposti al vertice» con *vertical angles*, «lati obliqui» con *legs*, «altezza» con *altitude*, come nel file esistente e nelle schede inglesi; grafia britannica (*centre*, *centimetres*, *recognise*).
- Non ho guardato l'anteprima grafica delle figure: le righe `::grafico` sono identiche all'originale e la resa dello script è riuscita.
