# Il percorso di Analisi matematica 1

Mappa dei collegamenti tra gli argomenti, nell'ordine del sito. Da qui nascono i blocchi `:::percorso` e i rimandi tra argomenti: si scrive un collegamento solo se compare qui (o se è altrettanto vero e concreto; in quel caso va aggiunto anche qui).

Il filo della materia: si parte dai numeri reali e dalle funzioni; il **limite** è lo strumento che permette di dire che cosa fa una funzione vicino a un punto o all'infinito. Con il limite si definiscono la **continuità**, la **derivata** (limite del rapporto incrementale), l'**integrale** (limite di somme), l'**integrale improprio** (limite di integrali) e la **serie** (limite delle somme parziali). Le **equazioni differenziali** chiudono il percorso mettendo insieme derivate e integrali.

## 1. Insiemi, induzione e funzioni elementari (`insiemi`)
- Usa: il Precorso (equazioni, disequazioni, potenze, logaritmi, goniometria).
- Fa: linguaggio degli insiemi, insiemi numerici, estremo superiore e completezza di $\mathbb{R}$, induzione e binomio di Newton, funzioni e loro grafici, funzioni elementari.
- Prepara:
  - la completezza di $\mathbb{R}$ (esistenza dell'estremo superiore) è ciò su cui si reggono i teoremi delle funzioni continue (zeri, Weierstrass) e l'esistenza del limite delle successioni monotone (serie a termini positivi);
  - intervalli e valore assoluto diventano gli **intorni** dei limiti;
  - monotonia, limitatezza, simmetrie e trasformazioni dei grafici tornano nello studio di funzione;
  - il binomio di Newton serve per le potenze nei numeri complessi e per alcuni limiti notevoli;
  - funzione inversa e composta tornano nelle regole di derivazione e nella sostituzione negli integrali;
  - i grafici delle funzioni elementari sono i modelli che i limiti, le derivate e gli integrali permettono di studiare.

## 2. Numeri complessi (`numeri-complessi`)
- Usa: forma algebrica delle equazioni di secondo grado (discriminante negativo), goniometria, il binomio di Newton.
- Fa: forma algebrica, trigonometrica ed esponenziale, radici $n$-esime, teorema fondamentale dell'algebra.
- Prepara:
  - le equazioni differenziali lineari del secondo ordine: quando l'equazione caratteristica ha discriminante negativo, le soluzioni $e^{\alpha x}\cos(\beta x)$ ed $e^{\alpha x}\sin(\beta x)$ vengono dalle radici complesse e dalla formula di Eulero;
  - la scomposizione dei polinomi (teorema fondamentale dell'algebra), usata negli integrali delle funzioni razionali (fattori di secondo grado irriducibili).

## 3. Limiti e continuità (`limiti`)
- Usa: intervalli e valore assoluto (intorni), estremo superiore e completezza (teoremi sulle funzioni continue), grafici delle funzioni elementari (limiti agli estremi del dominio).
- Fa: definizione di limite, teoremi sui limiti, forme indeterminate, limiti notevoli, infinitesimi e infiniti, asintoti, continuità e teoremi sulle funzioni continue.
- Prepara:
  - la **derivata** è un limite (del rapporto incrementale); i limiti notevoli $\dfrac{\sin x}{x} \to 1$, $\dfrac{e^x - 1}{x} \to 1$, $\dfrac{\ln(1+x)}{x} \to 1$ danno le derivate di $\sin x$, $e^x$, $\ln x$;
  - la continuità è una condizione necessaria per la derivabilità;
  - gli **asintoti** e i limiti agli estremi del dominio sono un passo dello **studio di funzione**;
  - il teorema degli zeri e Weierstrass tornano nei teoremi di Rolle e Lagrange e nella ricerca di massimi e minimi assoluti;
  - infinitesimi, infiniti e simboli di Landau sono il linguaggio della formula di Taylor e dei criteri di confronto asintotico per integrali impropri e serie;
  - l'integrale improprio e la serie sono definiti come limiti.

## 4. Calcolo differenziale e Taylor (`derivate`)
- Usa: limiti (rapporto incrementale, limiti notevoli), continuità, Weierstrass e teorema degli zeri, funzione composta e inversa.
- Fa: derivata e significato geometrico, regole di derivazione, Fermat, Rolle, Lagrange e conseguenze, de l'Hôpital, derivate successive, formula di Taylor.
- Prepara:
  - lo **studio di funzione**: segno della derivata e monotonia (conseguenza di Lagrange), derivata seconda e concavità;
  - gli **integrali**: una primitiva è una funzione con derivata assegnata; il teorema fondamentale del calcolo lega integrale e derivata; le funzioni con derivata nulla su un intervallo sono costanti (Lagrange), da cui "le primitive differiscono per una costante";
  - de l'Hôpital e Taylor risolvono le forme indeterminate rimaste aperte nei limiti;
  - Taylor e gli sviluppi danno gli ordini di infinitesimo usati nei criteri di confronto (integrali impropri, serie) e la serie di Taylor (serie di potenze);
  - le **equazioni differenziali** hanno per incognita una funzione di cui si conoscono relazioni tra le derivate.

## 5. Studio di funzione (`studio-di-funzione`)
- Usa: dominio e simmetrie (funzioni elementari), limiti e asintoti, continuità, derivata prima e seconda, Lagrange (monotonia), Weierstrass (massimi assoluti).
- Fa: lo schema completo dello studio, criteri per massimi, minimi e flessi, convessità, grafico qualitativo.
- Prepara:
  - le aree tra curve (negli integrali) richiedono di sapere dove un grafico sta sopra l'altro e dove si intersecano;
  - il numero di soluzioni di un'equazione $f(x) = k$ si legge dal grafico;
  - i problemi di massimo e minimo tornano negli integrali impropri e nelle serie (per esempio per stabilire che una successione è decrescente in un criterio).

## 6. Calcolo integrale (`integrali`)
- Usa: derivate e regole di derivazione (lette al contrario), Lagrange (primitive che differiscono per una costante), continuità e Weierstrass (teorema della media), funzioni razionali e scomposizione dei polinomi (Precorso, numeri complessi), studio del segno.
- Fa: primitive e tecniche di integrazione, integrale di Riemann, teorema della media, funzione integrale, teorema fondamentale del calcolo, aree.
- Prepara:
  - gli **integrali impropri** sono limiti di integrali definiti calcolati con il teorema fondamentale;
  - il criterio dell'integrale per le **serie** confronta una serie con un integrale improprio;
  - le **equazioni differenziali** a variabili separabili e lineari del primo ordine si risolvono integrando.

## 7. Integrali impropri (`integrali-impropri`)
- Usa: integrale definito e teorema fondamentale, limiti, infinitesimi e infiniti (ordine), confronto asintotico, sviluppi di Taylor.
- Fa: integrali su intervalli illimitati e di funzioni illimitate, integrali campione, criteri del confronto e del confronto asintotico, convergenza assoluta.
- Prepara:
  - le **serie**: stessa domanda (converge o no?) con gli stessi strumenti (campioni di riferimento $\dfrac{1}{x^\alpha}$ e $\dfrac{1}{n^\alpha}$, confronto, confronto asintotico, convergenza assoluta); il criterio dell'integrale collega i due argomenti.

## 8. Serie numeriche (`serie`)
- Usa: limiti di successioni, successioni monotone e completezza di $\mathbb{R}$, infinitesimi e ordini, integrali impropri (criterio dell'integrale e campioni), Taylor.
- Fa: somme parziali e carattere, serie geometrica e armonica generalizzata, condizione necessaria, criteri per serie a termini positivi e a segno variabile, serie di potenze.
- Prepara:
  - le serie di potenze e la serie di Taylor, riprese in Analisi matematica 2 (serie di funzioni, di potenze, di Fourier).

## 9. Equazioni differenziali (`equazioni-differenziali`)
- Usa: derivate, integrali e tecniche di integrazione (variabili separabili, lineari del primo ordine), numeri complessi e formula di Eulero (secondo ordine con radici complesse), sistemi lineari (problema di Cauchy).
- Fa: problema di Cauchy, esistenza e unicità, variabili separabili, lineari del primo ordine, Bernoulli, secondo ordine a coefficienti costanti, metodo di somiglianza.
- Prepara:
  - i modelli della fisica (moto armonico, oscillazioni smorzate e forzate, circuiti RC e RLC in Fisica 1 e Fisica 2) sono equazioni di questo tipo.
