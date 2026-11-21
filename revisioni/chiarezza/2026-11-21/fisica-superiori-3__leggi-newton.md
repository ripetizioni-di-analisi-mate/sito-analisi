# Revisione di chiarezza · Fisica 3° anno · I principi della dinamica (leggi-newton)

Parole (conteggio dello script): italiano 2493 → 3930 (×1,58); inglese 2454 → 4129 (×1,68). Controllo `controlla_capitolo.py`: nessun ERRORE, nessun AVVISO di struttura.

## Che cosa è cambiato
1. Definiti alla prima comparsa i termini che il testo dava per noti: forza come vettore (modulo, direzione, verso), newton e la sua relazione con kg·m/s², punto materiale, punto di applicazione e momento, normale (= perpendicolare), risultante con la regola dei segni, sistema, forze interne ed esterne, tensione, piano liscio, centro di massa, sistema di riferimento, rapidità, componente, attrito statico e dinamico con i coefficienti μ (come si legge), dinamometro, pianale, filo ideale e inestensibile, carrucola, macchina di Atwood, momento d'inerzia, velocità e accelerazione angolare, peso apparente, caduta libera, accelerazione centripeta. Simboli spiegati: Σ, pedice «ext,x», F_{A→B}, α, ω.
2. Passaggi di calcolo aggiunti dove c'era solo il risultato: componenti dell'accelerazione (12/4, −16/4) e modulo con Pitagora; velocità relativa nella cabina ($v_{\mathrm{rel}}=0-2t$); componenti del peso sulla rampa con sin 30° = 1/2 e cos 30° = √3/2, più il richiamo di seno e coseno; normale e limiti dell'attrito (0,50·40, 0,30·40); limite del pacco e accelerazione massima 15/5; somma delle equazioni di Atwood con T che si cancella; derivazione con $T_2-T_1=\frac{I}{R^2}a$ nella carrucola con massa; normale in conca e in cima (30 ± 12), $v=\sqrt{gr}$ con il valore numerico ≈ 6,3 m/s.
3. Motivi dei «quindi» resi espliciti: perché le forze interne si cancellano (terzo principio), perché il pacco accelera ancora a destra mentre scivola all'indietro sul pianale (l'attrito dinamico punta ancora a destra), perché T è maggiore del peso della massa che sale e minore di quello della massa che scende, perché a < g in Atwood, perché la normale non può essere negativa.
4. Casi in elenco puntato: peso e normale del libro; i due passi del sistema collegato; i tre casi dell'ascensore (aggiunto «velocità costante → N = mg», usato nella scheda 4 e nelle domande 51-52); conca e sommità.
5. Ogni figura ha ora una riga che dice che cosa mostra (libro con P = N e F; frecce a₁, a₂ opposte; retta F–a con pendenza = massa; cateto tratteggiato della rampa; i due tratti del grafico dell'attrito; retta N(a) e i suoi tre punti; normali diverse in conca e in cima).
6. Tolte le espressioni da manuale universitario o da laboratorio («corpi liberi da una risultante», «Il principio distingue il mantenimento del moto dalla sua variazione», «L'uguaglianza delle forze reciproche è compatibile con risposte molto diverse», «occorre», «bisogna»). Frazioni in linea portate in colonna ($\dfrac{F}{m_1+m_2}$, $\dfrac{I}{R^2}$, $\dfrac{mv^2}{r}$, $\dfrac{a}{R}$).
7. Inglese ritradotto per intero dal nuovo italiano, grafia britannica come il file esistente (centre, tyres, lift, carriage, puck); titoli, ancore, frontmatter e figure identici al file inglese originale.

## Com'era / Com'è ora (sistemi collegati, Atwood)
**Com'era**: «Per due masse sospese in una macchina di Atwood, con $m_2>m_1$, si sceglie positivo verso il basso per la massa più pesante e verso l'alto per la più leggera. Le equazioni sono […] Sommandole si ottiene $a=g(m_2-m_1)/(m_1+m_2)$. La tensione si recupera da una delle due equazioni. È maggiore del peso della massa che sale e minore del peso della massa che scende.»

**Com'è ora**: «Una macchina di Atwood è formata da due masse appese ai capi di un filo che passa su una carrucola. Con $m_2>m_1$ la massa più pesante scende e la più leggera sale. Per ciascuna massa si sceglie positivo il verso in cui si muove […]; così le due accelerazioni hanno lo stesso valore $a$. Su ogni massa agiscono il peso verso il basso e la tensione verso l'alto, quindi le equazioni sono […] Sommandole, $T$ si cancella e resta $(m_2-m_1)g=(m_1+m_2)a$, cioè $a=g\dfrac{m_2-m_1}{m_1+m_2}$. Poiché $m_2-m_1$ è minore di $m_1+m_2$, l'accelerazione è minore di $g$. La tensione si recupera da una delle due equazioni: $T=m_1(g+a)$ è maggiore del peso della massa che sale, e $T=m_2(g-a)$ è minore del peso della massa che scende.»

## Errori trovati nell'originale
Nessun errore numerico: tutti i valori ricalcolati con Python (2 N e 2/6 m/s² del centro di massa; −6 m/s dopo 3 s; (3, −4) e 5 m/s²; 19,62 N; 25 N e 43,3 N sulla rampa; 20 N, 12 N, 1 m/s²; 10 N, 15 N, 3 m/s² del pacco; a = 2 m/s², T = 6 N; 480 N e 600 N; 12, 42, 18 N). Le lunghezze delle frecce delle figure sono coerenti con i numeri (N/P = 42/30 e 18/30 nella figura della curva).

## Contenuti aggiunti per coprire esercizi e domande
- Pendenza del grafico F–a = massa (domanda 21) e pendenza del grafico v–t = accelerazione (domande 9, 22).
- Lettura della bilancia a velocità costante (scheda 4, es. 3; domande 51, 52).
- Accelerazione centripeta $v^2/r=\omega^2 r$ con la velocità angolare (domanda 86) e componente tangenziale che rende la risultante maggiore della componente radiale (domanda 88).
- Accelerazione del blocco B quando il contatto si apre, $F/m_B$ (traccia 13).
- Tensione quando si tira l'altro carrello, $T=m_1a=4\,\mathrm N$ (scheda 6, es. 3).
- Normale ridotta da una trazione obliqua, $N=P-F_y$.

## Osservazioni su schede e domande (non corrette, solo segnalate)
- Scheda 2, es. 3: «Nel tratto a accelerazione costante» (va «ad accelerazione»).
- Scheda 5, es. 2 («Quando includi la molla») e scheda 2, es. 2 («Scegli il verso positivo»), domanda 12 («Scegli come sistema»), domanda 15 («sottrai»), domanda 37 («Dividi»): forma con il «tu», diversa dalla forma impersonale della teoria.
- Scheda 4, es. 2: pedice $N_{\mathrm{hyp}}$ in inglese nel testo italiano.

## Dubbi rimasti
Nessuno sui contenuti. La sezione sulla carrucola con massa resta di livello alto per il 3° anno (momento d'inerzia, accelerazione angolare): i termini ora sono definiti in una riga ciascuno, senza ampliarla.
