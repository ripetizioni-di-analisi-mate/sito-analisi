# Fisica 2° anno · Moto rettilineo uniformemente accelerato

## Esito del controllo

`python3 strumenti/controlla_capitolo.py fisica-superiori-2 moto-accelerato`: **ESITO: a posto**, nessun ERRORE e nessun AVVISO. Frontmatter, 6 titoli `##`, ancore con i loro titoli e 11 righe di figura identici all'originale; IT ed EN con lo stesso numero di blocchi (29), formule (374) ed elementi di elenco.

Parole (conteggio dello script): **IT 2626 → 3814 (×1,45)**, **EN 2526 → 3877 (×1,53)**. Entro i limiti di 1,7 e 1,8.

## Che cosa è cambiato

1. **Termini e simboli alla prima comparsa**: asse con origine e verso, velocità con segno, modulo e rapidità (usata in teoria, schede e domande senza definizione), pedici $i$, $f$, lettera $\Delta$, SI per esteso e lettura di $\mathrm{m/s^2}$, pendenza (richiamo di una riga), compatibile, modello, incertezza assoluta, accelerazione costante, $v_0$ letto «v zero», inversione, area con segno, posizione, legge oraria, spostamento, parabola, velocità media, distanza percorsa, decelerazione, tempo di arresto, spazio di frenata e di reazione, tempo di reazione, intercetta, quota, accelerazione di gravità, simbolo $\simeq$, culmine, radici, dominio fisico.
2. **Passaggi di calcolo mancanti**: ricavo di $v=v_0+at$ dalla definizione (moltiplicare e aggiungere $v_0$), i tre rapporti della tabella del sensore uno per riga, la conversione km/h → m/s con la divisione per 3,6, la dimostrazione della legge oraria con rettangolo e triangolo in elenco, i due spostamenti consecutivi scritti per esteso prima della sottrazione, i tre passaggi della relazione senza tempo nominati, $t_a$ e $s_f$ ricavati ponendo $v=0$, $t=\sqrt{2h/g}$ e quota massima ricavati dalle leggi, scomposizione $(t+1)(t-3)$ motivata.
3. **Motivi dei «quindi»**: perché lo spazio di frenata quadruplica ($(2v_0)^2=4v_0^2$), perché il triangolo del pattinatore ha area quadrupla, perché $v^2=-16$ esclude il punto, perché la conversione si può fare dopo la sottrazione.
4. **Elenchi al posto di frasi dense**: i due profili dello stesso intervallo, le due accelerazioni di `#area-accelerazione`, le due fasi del modello di arresto, le due formule combinate nella relazione senza tempo.
5. **Descrizione delle figure** dove il testo non diceva che cosa mostrano (retta da A a B sotto l'asse, punto B come inversione, M come massimo della parabola, rettangolo e triangolo della distanza totale, assi del grafico $v^2$-$\Delta x$, intercetta).
6. **Frasi da laboratorio o figurate riscritte**: «compatibili con un modello a pendenza costante», «il confronto usa l'intervallo di misura, che decide…», «moltiplicherebbe i valori matematici del modello» (blocco attenzione della caduta), «retromarcia artificiale».

## Com'era / Com'è ora (blocco `#velocita`, dove lo studente trovava la formula senza sapere da dove viene)

**Com'era**

> Con accelerazione $a$ costante, il suo valore coincide con quello medio in ogni intervallo. Se $v_0$ è la velocità all'inizio e $t$ il tempo trascorso da quell'istante, moltiplicando per $t$ si ricava
> $$v(t)=v_0+at.$$

**Com'è ora**

> L'accelerazione è **costante** quando la velocità cambia della stessa quantità in ogni secondo. In questo caso l'accelerazione $a$ coincide con l'accelerazione media in ogni intervallo. Si indicano con $v_0$ («v zero») la velocità all'istante $t=0$ e con $v(t)$ la velocità all'istante $t$. Nell'intervallo da $0$ a $t$ la definizione dà
> $$a=\frac{v(t)-v_0}{t}.$$
> Moltiplicando i due membri per $t$ si ottiene $at=v(t)-v_0$. Aggiungendo $v_0$ ai due membri si ricava
> $$v(t)=v_0+at.$$

Nell'originale «moltiplicando per $t$» si riferiva a una formula che non compariva nel testo.

## Errori nell'originale

Nessun errore di calcolo: tutti i numeri degli esempi sono stati ricalcolati (Python/sympy) e coincidono. Dati degli esempi invariati.

## Aggiunte per coprire schede, esercizi e domande

- **Rapidità = modulo della velocità** (schede 7, domande 18, 31, 35, 39, 44, 56, 58, 83).
- **Conversione km/h → m/s dividendo per 3,6** (domande 35, 52).
- **$v^2=v_0^2-2g(y-y_0)$** nel moto verticale (domande 74, 83) e **$g$ uguale per tutti i corpi qualunque sia la massa** (domanda 80).
- **Grafico $x(t)$ è una parabola, pendenza = velocità, massimo con pendenza nulla** (domande 64, 65, 67).
- **Unità del termine $\frac12at^2$** (domanda 89).
- **Velocità media come spostamento diviso durata** e **distanza percorsa** definite in `#area-velocita` (domande 10, 12, 28-30, 69-71).

## Note su esercizi e domande (non corretti, come da incarico)

- Scheda svolta 1, esercizi 1 e 2: $a_m=\frac{6}{3}\simeq2$ usa «≃» per un risultato esatto.
- Scheda svolta 4, esercizio 3: «La velocità diminuisce quindi alla stessa velocità con cui diminuisce la lettura del tachimetro» è una frase confusa (velocità che diminuisce «alla stessa velocità»).
- Esercizio da fare 1: soluzione $2{,}66667$; il valore esatto è $\frac{8}{3}$.

## Dubbi rimasti

- In inglese il culmine è reso con **apex**, come nelle domande inglesi del capitolo.
- Il titolo dell'attenzione `#posizione-accessibile` parla di «carrello» in un esempio che prima parlava di «veicolo»: lasciato com'era (titolo con ancora da non toccare).
