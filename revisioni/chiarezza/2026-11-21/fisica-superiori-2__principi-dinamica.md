# Fisica 2° anno · I principi della dinamica

## Esito del controllo

`python3 strumenti/controlla_capitolo.py fisica-superiori-2 principi-dinamica`: **a posto**, nessun ERRORE e nessun AVVISO. Frontmatter, 6 titoli `##`, 6 ancore con i loro titoli, 11 righe di figura identici all'originale; resa IT ed EN riuscita.

Parole: IT 2559 → 4330 (×1,69); EN 2507 → 4497 (×1,79). Entrambe entro i limiti (1,7 e 1,8). La prima stesura era a ×1,95: ho tolto descrizioni dei grafici che ripetevano la figura, un controllo ripetuto, le frasi «nell'ultima riga si è…» e ho unito in una riga le definizioni brevi.

## Che cosa è cambiato

1. **Termini e simboli alla prima comparsa**: forza e interazione, vettore (modulo, direzione, verso), newton e SI, $\vec F$ contro $F$, traslazione, diagramma delle forze, risultante e pedice $R$, componente con il segno, $\sum$ e indice $j$, normale, riferimento e riferimento inerziale, rapidità, moto rettilineo uniforme, pendenza, intercetta, accelerazione (richiamo con un numero), sistema, forze interne ed esterne, filo ideale, tensione, accelerazione di gravità, inerzia, molla ideale, lunghezza naturale, deformazione, regime lineare, legge di Hooke, costante elastica o rigidezza, richiamo, attrito tangenziale, $N$ corsivo contro $\mathrm N$ tondo, $\mu$ («mi»), scivolare, limite statico, soglia di scorrimento, piano inclinato, $\alpha$, seno e coseno (richiamo sul triangolo rettangolo), liscio, moto circolare uniforme, accelerazione centripeta, «centripeta», solidale.
2. **Motivo dei «quindi»**: perché la normale vale $mg\cos\alpha$ (somma perpendicolare nulla), perché la componente del peso è $mg\sin\alpha$ (angolo fra peso e asse perpendicolare uguale ad $\alpha$), perché la tensione si annulla nel sistema dei due carrelli, perché sul disco agisce l'attrito *statico*.
3. **Passaggi di calcolo mancanti**: bilancio dell'ascensore in tre righe; $v^2/2=5\Rightarrow v^2=10\Rightarrow v=\sqrt{10}$; $a=-6/2$; accelerazioni dei due pattinatori; risultante del sensore $(2)(2)$ e $(2)(4)$; $\sin30^\circ=\frac12$ e la componente perpendicolare $40\cos30^\circ\simeq34{,}6$ N; rapporto $3:4:5$ tradotto in $\sin\alpha=\frac35$, $\cos\alpha=\frac45$, con la componente perpendicolare del peso (40 N) che prima mancava nel conto $N=40+15$.
4. **Voce da laboratorio tolta**: «I dati sono compatibili con una resistenza costante» → «quindi sul carrello agisce anche una resistenza costante»; «richiede altre considerazioni» → il riferimento accelerato non è inerziale, con il disco sul pianale.
5. **Attenzione del terzo principio** con controesempio numerico (libro di 20 N premuto con 5 N: normale 25 N, quindi peso e normale non sono una coppia).
6. **Formule inverse** richieste dagli esercizi: $a=F_R/m$, $m=F_R/a$, $m=P/g$, $g=P/m$, $k=|F_e|/|x|$, $|x|=|F_e|/k$, $\mu_d=f_d/N$, $\mu_{s,\min}$.

## Com'era / Com'è ora (blocco `#applicazioni`)

**Com'era**

> Per un corpo su un piano inclinato l'asse parallelo al piano è comodo per lo scorrimento. L'altro asse è perpendicolare alla superficie. Se il piano forma un angolo $\alpha$ con l'orizzontale, il peso ha componente $mg\sin\alpha$ verso valle e componente $mg\cos\alpha$ verso il piano. In assenza di altre forze perpendicolari e con contatto mantenuto, $N=mg\cos\alpha$.

**Com'è ora**

> Un **piano inclinato** è una superficie piana che forma un angolo $\alpha$ (lettera greca «alfa») con l'orizzontale. L'asse parallelo al piano è comodo per lo scorrimento e l'altro asse è perpendicolare alla superficie. Con questa scelta la normale sta tutta sull'asse perpendicolare e l'accelerazione tutta su quello parallelo, perché il corpo resta sul piano.
>
> Il peso si scompone lungo i due assi. In un triangolo rettangolo il **seno** di un angolo acuto è il cateto opposto diviso per l'ipotenusa, il **coseno** è il cateto adiacente diviso per l'ipotenusa. Il peso è l'ipotenusa del triangolo formato dalle sue due componenti, e l'angolo fra il peso e l'asse perpendicolare al piano è uguale ad $\alpha$. Quindi il peso ha componente $mg\sin\alpha$ verso valle e componente $mg\cos\alpha$ verso il piano.
>
> In assenza di altre forze perpendicolari e con contatto mantenuto, la somma delle forze perpendicolari è zero, cioè $N-mg\cos\alpha=0$, quindi $N=mg\cos\alpha$.

Nell'originale seno e coseno comparivano senza dire perché uno va lungo il piano e l'altro perpendicolare: è il punto in cui uno studente di seconda scambia le due componenti.

## Errori nell'originale

Nessun errore di calcolo: tutti i numeri sono stati ricalcolati con Python e coincidono. Dati degli esempi invariati. Unica imprecisione: la fune «verso nord-ovest» ha componenti $(-3;4)$, che non sono a 45°; ho scritto «verso nord-ovest, cioè in una direzione fra nord e ovest».

## Aggiunte per coprire schede, esercizi e domande

- Modulo della risultante con Pitagora (svolto 2.2, domande 16, 20).
- Formule inverse (domande 17, 23, 24, 26, 27, 29, 38, 39, 40, 47; svolto 4.3).
- Nome «legge di Hooke» e «rigidezza» (svolto 4, domanda 48); forze di più molle che si sommano (esercizio 12, domanda 12); retta di pendenza $-k$ (domanda 68).
- Normale con trazione o spinta verticale $N=mg\mp F$ (svolti 5.2, 5.3, 6.3; domande 32, 33).
- Coefficiente statico minimo (svolto 8.2, domanda 41).
- Riferimento non inerziale con il pianale (domanda 56); relazione istantanea (domanda 89).
- Massa che si semplifica sul piano liscio per corpi diversi (domanda 77).
- Raddoppio della rapidità → risultante ×4, raggio minore → risultante maggiore, filo spezzato → moto lungo la tangente (domande 81, 82, 83).
- Le due forze del terzo principio sono dello stesso tipo (domande 61, 88).

## Da segnalare negli esercizi (non corretti)

- Scheda svolta 8 («Attriti statici effettivi») ha `teoria: ["inerzia"]`, ma tratta l'attrito statico: il rimando giusto sarebbe `attrito`.
- Domanda 11 (ascensore che rallenta in discesa) rimanda a `#forze`; il procedimento è quello di `#newton`.
- Esercizio da fare 3: soluzione $24{,}525\,\mathrm N$ con più cifre dei dati; svolto 1.1 e 7.1 usano «$\simeq$» per risultati esatti (2 m/s², 8 m/s²).

## Dubbi rimasti

- Nastro trasportatore (domanda 87) e attrito che trascina il pacco: la teoria dice solo che l'attrito si oppone allo scorrimento *relativo*; non ho aggiunto un esempio per non superare il limite di lunghezza.
- EN a ×1,79, vicino al limite di 1,8: l'inglese è più lungo dell'italiano di circa 170 parole per la struttura della lingua, la traduzione è integrale.
