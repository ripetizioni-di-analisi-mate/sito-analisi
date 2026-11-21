# Fisica 1° anno · Forze, peso, elasticità e attrito

## Esito del controllo

`python3 strumenti/controlla_capitolo.py fisica-superiori-1 forze`: **nessun ERRORE**. Frontmatter, 7 titoli `##`, 7 ancore con i loro titoli, 11 righe di figura identici all'originale; resa IT ed EN riuscita (348 formule, 11 figure, 0 problemi nell'anteprima delle figure).

Resta un **AVVISO di lunghezza**: IT 2572 → 5359 parole (×2,08), EN 2599 → 5634 (×2,17). Dopo la prima stesura (×2,26) ho tolto verifiche doppie, descrizioni ripetute dei grafici ed esempi numerici in più. Il resto dell'aumento sta nei quattro blocchi di definizione (forza, legge di Hooke, vincoli, attrito), dove l'originale usava senza spiegarli una trentina di termini. Per scendere sotto 2,0 andrebbero tolte definizioni, cosa che il brief esclude. Gli esempi sono cresciuti di 1,4-1,6 volte.

## Che cosa è cambiato

1. **Ogni termine e ogni sigla alla prima comparsa**: forza di contatto e a distanza, grandezza vettoriale, modulo, direzione, verso, retta d'azione, perno, diagramma delle forze, SI (Sistema Internazionale), newton e N, dinamometro, asse, componente, risultante, sistema, forze interne ed esterne, massa trascurabile, kg, N/kg («newton al chilogrammo»), locale e uniforme, campione, scarto dello zero, pendenza, intercetta, lunghezza libera (naturale, a riposo), precarico, tratto elastico lineare, valore assoluto, pedici ($e$, $s$, $d$, «lett», «tra», «base»), costante elastica o rigidezza, limite elastico, molla e corda ideali, tarare, Δ, risoluzione, secante, compatibile, vincolo, normale = perpendicolare, ≥, corda lasca, equilibrio, radente, liscio e ruvido, μ, coefficiente, limite statico, soglia di scorrimento, tangenziale, quasi staticamente, modello e ipotesi.
2. **Prima frase = che cos'è**: «Una forza è una spinta o una trazione che un corpo esercita su un altro corpo» al posto di «Una forza descrive l'interazione…»; lo stesso per peso, campo, reazione normale, attrito, modello.
3. **Conti con tutti i passaggi**: bilanci scritti con i segni di ogni forza (anello, carrelli, cassa, due scatole), deformazioni calcolate come differenza di lunghezze con la conversione in metri, taratura in quattro righe, zero spostato con le due differenze esplicite.
4. **Numeri prima delle lettere** nell'osservazione sulle due molle: prima 7 N e 3 N con i dati, poi la formula $-(k_s+k_d)u$.
5. **Elenchi al posto di frasi dense**: le tre informazioni della freccia, le tre grandezze della molla, i tre casi della normale (con $P=50$ N), la scelta della legge nel blocco finale.
6. **Condizioni come sistema**: nell'esempio dell'intervallo di forze le due disuguaglianze $10-F\le4$ e $10-F\ge-4$ sono in graffa, poi risolte una per una.
7. **Voce da laboratorio tolta**: «si adotta il valore indicato o misurato», «entro il modello descritto», «incompatibile con la previsione» ora hanno un motivo o una definizione accanto (per esempio la tensione di 70 N che darebbe $N=-10$ N).
8. **Simbolo $N$**: una riga distingue $N$ corsivo (modulo della normale) da N diritto (newton), che nel capitolo compaiono nella stessa formula.

## Com'era / Com'è ora (attrito statico, blocco `#attrito`)

**Com'era**

> L'**attrito radente** è la componente di contatto parallela alla superficie. Quando non c'è scorrimento, l'attrito statico si orienta contro la tendenza allo scorrimento. Nel modello di Coulomb il suo modulo $f_s$ è limitato da $0\leq f_s\leq\mu_s N$. Qui $\mu_s$ è il coefficiente statico, privo di unità perché è il rapporto fra due forze. Il valore effettivo si ricava dal bilancio delle componenti tangenziali. Il prodotto $\mu_sN$ si raggiunge alla soglia di scorrimento.

**Com'è ora**

> L'**attrito statico** è l'attrito che agisce quando le superfici non scorrono l'una sull'altra. Un blocco appoggiato sul pavimento e tirato con una forza piccola resta fermo, perché il pavimento esercita sul blocco un attrito uguale e opposto alla trazione. Il verso dell'attrito statico è opposto alla tendenza allo scorrimento, cioè al verso in cui il corpo scivolerebbe se l'attrito mancasse. […]
>
> Qui $N$ è il modulo della normale e $\mu_s$ è il **coefficiente di attrito statico**. La lettera greca $\mu$ si legge «mi» e il pedice $s$ sta per statico. Il coefficiente è un numero che dipende dai materiali delle due superfici. È privo di unità, perché è il rapporto fra due forze. […]
>
> Il prodotto $\mu_sN$ è il **limite statico**, cioè l'attrito statico massimo. Con $\mu_s=0{,}4$ e $N=40\,\mathrm N$ il limite è $0{,}4\cdot40\,\mathrm N=16\,\mathrm N$. […] Il valore effettivo dell'attrito statico si ricava dal bilancio delle componenti tangenziali, cioè parallele alla superficie. Il corpo è fermo, quindi la loro somma è zero. Il valore effettivo è uguale al limite $\mu_sN$ soltanto alla **soglia di scorrimento**, che è la situazione in cui il corpo sta per iniziare a scorrere.

Nell'originale «tendenza allo scorrimento», «modello di Coulomb», $\mu$, «tangenziali» e «soglia» comparivano in sei righe senza una spiegazione né un numero.

## Errori nell'originale

Nessun errore di calcolo: tutti i numeri degli esempi sono stati rifatti e coincidono. I dati degli esempi sono invariati.

## Aggiunte per coprire schede, esercizi e domande

- **Modulo da due componenti perpendicolari** (domande sulla slitta e sulla forza di contatto 13 N / 12 N): esempio nuovo senza ancora «Due forze perpendicolari» (6 N e −8 N → 10 N) e una riga nel blocco `#attrito` (12 N e 5 N → 13 N).
- **Formule inverse** $m=\frac{P}{g}$, $g=\frac{P}{m}$, $\lvert x\rvert=\frac{F_e}{k}$, $k=\frac{F_e}{\lvert x\rvert}$ (esercizi da fare 2, 3, 5, 6).
- **Scala di un disegno** (1 cm = 4 N), **forza a distanza** con la calamita, **molla, corda e dinamometro «ideali»**, **corda lasca**, **limite elastico**, **precarico**.
- **Molle affiancate fra gli stessi supporti**: le rigidezze si sommano (scheda 8).
- **Pendenza in N/cm** e passaggio a N/m (scheda 3 e domande).
- **Modello di Coulomb**: limite e attrito dinamico non dipendono dall'area di appoggio né dalla velocità; il coefficiente non ha un limite superiore (tre domande).
- **Normale diversa dal peso nell'attrito dinamico** (esercizio da fare 11): cassa di 100 N con fune verticale di 20 N.
- Valori reali aggiunti: $g\approx9{,}81$ N/kg sulla Terra, $1{,}62$ N/kg sulla Luna.

## Dubbi rimasti

- **Lunghezza oltre 2,0** (vedi sopra): se si preferisce stare sotto, i candidati al taglio sono l'esempio «Due forze perpendicolari» e le righe sul modello di Coulomb (area, velocità), entrambi aggiunti per le domande.
- Non coperti dalla teoria, perché richiederebbero un argomento nuovo: pendenza con gli assi scambiati (m/N, una domanda), attrito statico su un pianale che accelera, blocco premuto contro una parete o un soffitto. Per questi ultimi la teoria dice solo che la normale è diretta dalla superficie verso il corpo.
- Nel testo inglese i pedici italiani ($k_\mathrm s$, $k_\mathrm d$, $N_\mathrm{tra}$, $P_\mathrm{lett}$) restano, perché compaiono nelle legende delle figure; sono spiegati alla prima comparsa.
- «Per le coppie di materiali più comuni $\mu_d$ è minore di $\mu_s$» è un'aggiunta: l'originale non lo diceva, ma gli esempi lo usano.
