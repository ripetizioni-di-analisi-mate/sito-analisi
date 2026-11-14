# Studio guidato di Logica per concorsi e Analisi 3: abilità, rimandi e basi

Preparato il 14/11/2026 notte (richiesta di Carmine: Studio guidato per le materie con domande a tempo varie). Classificazione di un agente per capitolo con il brief `istruzioni-agenti/brief-studio-guidato-materia.md`.
I tre capitoli di Analisi 3 presi da Analisi 2 (serie di funzioni, serie di potenze, serie di Fourier) usano la classificazione di Analisi 2; le loro basi restano dentro Analisi 3.

I dati veri sono in `src/data/studio-guidato-livelli.json` e in `RIMANDI` (`src/data/studio-guidato.mjs`); questo file è un riepilogo da leggere.

# Logica per concorsi

## 1. Insiemi e diagrammi di Venn

| Abilità | Domande (base, medio, avanzato) | Teoria | Schede svolte | Base |
|---|---|---|---|---|
| Insiemi, elementi e sottoinsiemi | 15 (7, 7, 1) | Insiemi ed elementi; Sottoinsiemi, insieme vuoto e insieme universo | nessuna | Implicazione e contronominale (Precorso, Logica elementare) |
| Unione, intersezione e differenza | 12 (5, 6, 1) | Operazioni tra insiemi | 1 | Proposizioni e connettivi (Precorso, Logica elementare) |
| Complementare e leggi di De Morgan | 7 (2, 5, 0) | Operazioni tra insiemi | 3 | Negazioni ed equivalenze logiche (Precorso, Logica elementare) |
| Relazioni tra categorie | 11 (3, 4, 4) | Relazioni tra categorie; Metodi rapidi per i quiz | 5 | Quantificatori e loro negazione (Precorso, Logica elementare) |
| Conteggi con due insiemi | 21 (8, 11, 2) | Contare gli elementi di due insiemi | 2; 4 | nessuna |
| Formula per tre insiemi | 7 (2, 2, 3) | Contare gli elementi di tre insiemi | 6 | Equazioni di primo grado (Precorso, Equazioni e disequazioni polinomiali e fratte) |
| Esattamente uno, esattamente due | 8 (2, 5, 1) | Contare gli elementi di tre insiemi | 7 | nessuna |
| Minimo e massimo dell'intersezione | 9 (2, 5, 2) | Valori minimi e massimi dell’intersezione | 8 | nessuna |

## 2. Connettivi, negazioni e implicazioni

| Abilità | Domande (base, medio, avanzato) | Teoria | Schede svolte | Base |
|---|---|---|---|---|
| Valore di verità di frasi composte | 10 (4, 5, 1) | Proposizioni e valori di verità; Negazione, congiunzione e disgiunzione | 2 | Negazioni ed equivalenze logiche (Precorso, Logica elementare); Proposizioni e connettivi (Precorso, Logica elementare) |
| Disgiunzione inclusiva ed esclusiva | 8 (3, 4, 1) | Negazione, congiunzione e disgiunzione | 3 | Negazioni ed equivalenze logiche (Precorso, Logica elementare) |
| Leggi di De Morgan e frasi equivalenti | 12 (2, 5, 5) | Frasi equivalenti e leggi di De Morgan; Negazione, congiunzione e disgiunzione | 1 | Negazioni ed equivalenze logiche (Precorso, Logica elementare); Complementare e leggi di De Morgan (Insiemi e diagrammi di Venn) |
| Implicazione e doppia implicazione | 15 (4, 9, 2) | Implicazione e doppia implicazione | 2 | Implicazione e contronominale (Precorso, Logica elementare) |
| Negazione di implicazione e doppia implicazione | 9 (1, 6, 2) | Negazione dell’implicazione; Metodi rapidi per i quiz | 4 | Implicazione e contronominale (Precorso, Logica elementare); Negazioni ed equivalenze logiche (Precorso, Logica elementare) |
| Frasi equivalenti a un'implicazione | 16 (5, 8, 3) | Inversa, contraria e contronominale; Negazione dell’implicazione | 5 | Implicazione e contronominale (Precorso, Logica elementare) |
| Dalle frasi italiane ai connettivi | 12 (6, 5, 1) | Dalle frasi italiane ai connettivi | 6 | Condizioni necessarie e sufficienti (Precorso, Logica elementare); Implicazione e contronominale (Precorso, Logica elementare) |
| Tautologie e contraddizioni | 8 (3, 3, 2) | Tautologie e contraddizioni | 7 | Negazioni ed equivalenze logiche (Precorso, Logica elementare) |

## 3. Condizioni necessarie e sufficienti

| Abilità | Domande (base, medio, avanzato) | Teoria | Schede svolte | Base |
|---|---|---|---|---|
| Condizione sufficiente e necessaria | 10 (3, 5, 2) | Condizione sufficiente; Condizione necessaria | 1 | Implicazione e contronominale (Precorso, Logica elementare) |
| Situazioni che violano una regola | 8 (2, 5, 1) | Condizione sufficiente; Metodi rapidi per i quiz | 8 | Implicazione e contronominale (Precorso, Logica elementare); Leggi di De Morgan e frasi equivalenti (Connettivi, negazioni e implicazioni) |
| Condizione necessaria e sufficiente | 14 (5, 6, 3) | Condizione necessaria e sufficiente | 5 | Dimostrazioni e controesempi (Precorso, Logica elementare); Implicazione e contronominale (Precorso, Logica elementare) |
| Tradurre le frasi in implicazioni | 11 (2, 7, 2) | Tradurre le frasi in implicazioni | 3; 2 | Implicazione e contronominale (Precorso, Logica elementare); Negazioni ed equivalenze logiche (Precorso, Logica elementare) |
| Modus ponens e modus tollens | 10 (4, 5, 1) | Deduzioni valide | 4 | Implicazione e contronominale (Precorso, Logica elementare); Leggi di De Morgan e frasi equivalenti (Connettivi, negazioni e implicazioni) |
| Deduzioni non valide | 10 (4, 6, 0) | Deduzioni non valide | 4 | Dimostrazioni e controesempi (Precorso, Logica elementare); Implicazione e contronominale (Precorso, Logica elementare) |
| Catene di implicazioni | 15 (4, 8, 3) | Catene di implicazioni | 6 | Implicazione e contronominale (Precorso, Logica elementare) |
| Regolamenti e bandi | 12 (4, 6, 2) | Regolamenti e bandi | 7 | Leggi di De Morgan e frasi equivalenti (Connettivi, negazioni e implicazioni); Negazioni ed equivalenze logiche (Precorso, Logica elementare) |

## 4. Sillogismi e quantificatori

| Abilità | Domande (base, medio, avanzato) | Teoria | Schede svolte | Base |
|---|---|---|---|---|
| Significato di alcuni e tutti | 8 (3, 2, 3) | Quantificatori | nessuna | nessuna |
| Le quattro forme e frasi equivalenti | 8 (3, 4, 1) | Le quattro forme | 1 | Relazioni tra categorie (Insiemi e diagrammi di Venn); Implicazione e contronominale (Precorso, Logica elementare) |
| Negazione delle frasi quantificate | 12 (4, 2, 6) | Negazione delle frasi quantificate | 2 | Leggi di De Morgan e frasi equivalenti (Connettivi, negazioni e implicazioni); Negazioni ed equivalenze logiche (Precorso, Logica elementare) |
| Quadrato logico | 9 (2, 5, 2) | Il quadrato logico | 3 | Quantificatori e loro negazione (Precorso, Logica elementare) |
| Sillogismi con premesse universali | 21 (6, 11, 4) | Sillogismi validi; Verifica con i diagrammi e controesempi | 4; 8 | Relazioni tra categorie (Insiemi e diagrammi di Venn); Implicazione e contronominale (Precorso, Logica elementare) |
| Sillogismi con una premessa particolare | 19 (4, 12, 3) | Sillogismi validi; Verifica con i diagrammi e controesempi | 5 | Relazioni tra categorie (Insiemi e diagrammi di Venn) |
| Validità e controesempi | 13 (1, 9, 3) | Il sillogismo; Verifica con i diagrammi e controesempi | 6; 7 | Dimostrazioni e controesempi (Precorso, Logica elementare); Deduzioni non valide (Condizioni necessarie e sufficienti) |

## 5. Ragionamento numerico: orologi, calendari, ordinamenti

| Abilità | Domande (base, medio, avanzato) | Teoria | Schede svolte | Base |
|---|---|---|---|---|
| Angolo tra le lancette | 11 (2, 5, 4) | Orologi e angolo tra le lancette | 1 | Definizione e proprietà del modulo (Precorso, Equazioni e disequazioni con il valore assoluto) |
| Orologi che vanno avanti o indietro | 7 (1, 4, 2) | Orologi che vanno avanti o indietro | 3 | nessuna |
| Durate, mezzanotte e fusi orari | 9 (2, 5, 2) | Durate, mezzanotte e fusi orari | 4 | nessuna |
| Mesi e anni bisestili | 10 (2, 6, 2) | Calendari: mesi e anni bisestili | 5 | nessuna |
| Giorno della settimana dopo n giorni | 14 (5, 7, 2) | Giorno della settimana dopo n giorni; Calendari: mesi e anni bisestili | 2 | nessuna |
| Posizioni in fila e ordinamenti | 15 (4, 9, 2) | Ordinamenti e confronti | 6 | nessuna |
| Principio dei cassetti e caso peggiore | 12 (3, 6, 3) | Principio dei cassetti e caso peggiore | 8 | nessuna |
| Parentele ed età relative | 12 (4, 6, 2) | Parentele; Ordinamenti e confronti | 7 | Equazioni di primo grado (Precorso, Equazioni e disequazioni polinomiali e fratte) |

## 6. Problemi di deduzione e tabelle

| Abilità | Domande (base, medio, avanzato) | Teoria | Schede svolte | Base |
|---|---|---|---|---|
| Griglie di deduzione | 14 (5, 8, 1) | Griglie di deduzione; Che cos’è un problema di deduzione | 1; 3 | Implicazione e contronominale (Precorso, Logica elementare) |
| Disposizioni in fila | 18 (9, 6, 3) | Disposizioni in fila; Metodi rapidi per i quiz | 2 | nessuna |
| Disposizioni attorno a un tavolo | 8 (1, 7, 0) | Disposizioni attorno a un tavolo | 4 | nessuna |
| Turni e calendari | 11 (3, 5, 3) | Turni e calendari di lavoro | 5 | nessuna |
| Sinceri e bugiardi | 10 (2, 5, 3) | Veri e bugiardi | 6 | Negazioni ed equivalenze logiche (Precorso, Logica elementare); Valore di verità di frasi composte (Connettivi, negazioni e implicazioni) |
| Chi è stato: affermazioni vere | 15 (3, 4, 8) | Chi è stato: affermazioni contraddittorie | 7 | Negazioni ed equivalenze logiche (Precorso, Logica elementare); Valore di verità di frasi composte (Connettivi, negazioni e implicazioni) |
| Domande sulle opzioni | 14 (5, 5, 4) | Domande sulle opzioni; Metodi rapidi per i quiz | 8 | Dimostrazioni e controesempi (Precorso, Logica elementare); Quantificatori e loro negazione (Precorso, Logica elementare) |

## 7. Logica verbale e comprensione dei testi

| Abilità | Domande (base, medio, avanzato) | Teoria | Schede svolte | Base |
|---|---|---|---|---|
| Analogie con la frase ponte | 11 (4, 6, 1) | Analogie verbali | 1 | nessuna |
| Analogie tra coppie di parole | 8 (1, 4, 3) | Analogie verbali; Metodi rapidi per i quiz | 3 | nessuna |
| Termine estraneo | 13 (6, 7, 0) | Classificazioni e termine estraneo | 2 | nessuna |
| Connettivi e parola mancante | 18 (10, 6, 2) | Completamento di frasi e connettivi | 4; 5 | nessuna |
| Brani: vero, falso, non deducibile | 11 (5, 5, 1) | Brani e affermazioni | 6 | nessuna |
| Quantificatori e parole spia nei brani | 8 (2, 4, 2) | Brani e affermazioni | 6 | Significato di alcuni e tutti (Sillogismi e quantificatori); Tradurre le frasi in implicazioni (Condizioni necessarie e sufficienti) |
| Conclusione e assunzione implicita | 9 (3, 5, 1) | Struttura di un argomento | 7 | Condizione sufficiente e necessaria (Condizioni necessarie e sufficienti); Valore di verità di frasi composte (Connettivi, negazioni e implicazioni) |
| Rafforzare e indebolire un argomento | 12 (2, 7, 3) | Rafforzare e indebolire un argomento | 8 | Deduzioni non valide (Condizioni necessarie e sufficienti) |

## 8. Ragionamento figurale e spaziale

| Abilità | Domande (base, medio, avanzato) | Teoria | Schede svolte | Base |
|---|---|---|---|---|
| Ruotare e riflettere una figura | 17 (5, 10, 2) | Le trasformazioni di una figura; Rotazioni e simmetrie di figure piane | 6 | nessuna |
| Serie di figure | 17 (6, 7, 4) | Serie di figure | 1; 3 | Giorno della settimana dopo n giorni (Ragionamento numerico: orologi, calendari, ordinamenti) |
| Matrici per riga e per colonna | 9 (4, 3, 2) | Matrici di figure | 2 | nessuna |
| Matrici a sovrapposizione | 7 (2, 4, 1) | Matrici di figure | 4 | Unione, intersezione e differenza (Insiemi e diagrammi di Venn) |
| Figura estranea | 6 (2, 3, 1) | Figura estranea | 5 | nessuna |
| Figura ruotata o allo specchio | 7 (2, 4, 1) | Rotazioni e simmetrie di figure piane; Le trasformazioni di una figura | 6 | nessuna |
| Sviluppi del cubo | 12 (2, 6, 4) | Sviluppi del cubo | 7 | nessuna |
| Conteggio di figure e cubetti | 15 (2, 8, 5) | Conteggio di figure | 8 | nessuna |

# Analisi 3

## 1. Successioni e serie di funzioni

| Abilità | Domande (base, medio, avanzato) | Teoria | Schede svolte | Base |
|---|---|---|---|---|
| Limite puntuale | 9 (4, 4, 1) | Successioni di funzioni e convergenza puntuale | 1 | Limiti notevoli (Analisi 1, Limiti e continuità); Limiti all'infinito e gerarchie (Analisi 1, Limiti e continuità) |
| Criterio del sup | 19 (6, 11, 2) | Convergenza uniforme | 2 | Massimi e minimi assoluti, immagine (Analisi 1, Studio di funzione); Regole di derivazione (Analisi 1, Calcolo differenziale e Taylor) |
| Dove la convergenza è uniforme | 16 (6, 6, 4) | Convergenza uniforme; Continuità del limite uniforme | 3 | Estremo superiore e inferiore (Analisi 1, Insiemi, induzione e funzioni elementari); Definizione di limite e continuità (Analisi 1, Limiti e continuità) |
| Limiti di integrali | 14 (6, 5, 3) | Passaggio al limite sotto il segno di integrale; Continuità, integrazione e derivazione termine a termine | 5; 7 | Integrali definiti e aree (Analisi 1, Calcolo integrale); Integrali immediati e riconducibili (Analisi 1, Calcolo integrale) |
| Derivazione per successioni e serie | 10 (3, 3, 4) | Derivazione per successioni; Continuità, integrazione e derivazione termine a termine | 7 | Regole di derivazione (Analisi 1, Calcolo differenziale e Taylor) |
| Convergenza puntuale delle serie | 9 (4, 4, 1) | Serie di funzioni | 6 | Criteri del rapporto e della radice (Analisi 1, Serie numeriche); Serie geometriche (Analisi 1, Serie numeriche) |
| Convergenza totale | 13 (7, 4, 2) | Serie di funzioni | 4; 6 | Confronto e confronto asintotico (Analisi 1, Serie numeriche); Massimi e minimi assoluti, immagine (Analisi 1, Studio di funzione) |

## 2. Serie di potenze e serie di Taylor

| Abilità | Domande (base, medio, avanzato) | Teoria | Schede svolte | Base |
|---|---|---|---|---|
| Raggio di convergenza | 16 (10, 4, 2) | Serie di potenze e raggio di convergenza; Calcolo del raggio | 1; 2 | Criteri del rapporto e della radice (Analisi 1, Serie numeriche); Limiti all'infinito e gerarchie (Analisi 1, Limiti e continuità) |
| Serie lacunari | 8 (3, 4, 1) | Calcolo del raggio | 4 | Radice di un quadrato e valore assoluto (Precorso, Equazioni e disequazioni irrazionali); Serie geometriche (Analisi 1, Serie numeriche) |
| Comportamento agli estremi | 18 (4, 9, 5) | Comportamento agli estremi | 3; 1 | Serie a segni alterni (Analisi 1, Serie numeriche); Confronto e confronto asintotico (Analisi 1, Serie numeriche) |
| Derivazione e integrazione termine a termine | 12 (4, 5, 3) | Derivazione e integrazione termine a termine; Convergenza totale e continuità della somma | 6 | Serie geometriche (Analisi 1, Serie numeriche); Derivazione per successioni e serie (Successioni e serie di funzioni) |
| Serie di Taylor e derivate nel centro | 8 (5, 2, 1) | Serie di Taylor | 7 | Polinomi di Taylor (Analisi 1, Calcolo differenziale e Taylor); Regole di derivazione (Analisi 1, Calcolo differenziale e Taylor) |
| Sviluppi di MacLaurin | 15 (9, 3, 3) | Sviluppi di MacLaurin notevoli; Nuovi sviluppi da quelli noti | 5 | Polinomi di Taylor (Analisi 1, Calcolo differenziale e Taylor); Serie geometriche (Analisi 1, Serie numeriche) |
| Somme di serie e limiti | 13 (5, 7, 1) | Applicazioni | 8 | Serie geometriche (Analisi 1, Serie numeriche); Confronto asintotico e Taylor (Analisi 1, Limiti e continuità) |

## 3. Serie di Fourier

| Abilità | Domande (base, medio, avanzato) | Teoria | Schede svolte | Base |
|---|---|---|---|---|
| Polinomi trigonometrici | 16 (12, 2, 2) | Funzioni periodiche e polinomi trigonometrici; Coefficienti e serie di Fourier | 2 | Identità e formule (Precorso, Equazioni e disequazioni goniometriche) |
| Ortogonalità del sistema trigonometrico | 8 (6, 2, 0) | Ortogonalità del sistema trigonometrico | nessuna | Identità e formule (Precorso, Equazioni e disequazioni goniometriche); Integrali definiti e aree (Analisi 1, Calcolo integrale) |
| Calcolo dei coefficienti di Fourier | 14 (8, 5, 1) | Coefficienti e serie di Fourier | 1; 3 | Integrazione per parti (Analisi 1, Calcolo integrale); Integrali definiti e aree (Analisi 1, Calcolo integrale) |
| Funzioni pari e funzioni dispari | 15 (1, 11, 3) | Funzioni pari e funzioni dispari | 2; 1 | Proprietà delle funzioni (Analisi 1, Insiemi, induzione e funzioni elementari); Integrazione per parti (Analisi 1, Calcolo integrale) |
| Somma della serie in un punto | 9 (3, 5, 1) | Convergenza puntuale | 4 | Definizione di limite e continuità (Analisi 1, Limiti e continuità) |
| Convergenza uniforme e ipotesi | 8 (1, 4, 3) | Convergenza uniforme; Convergenza puntuale | 3 | Convergenza totale (Successioni e serie di funzioni); Continuità e derivabilità (Analisi 1, Studio di funzione) |
| Uguaglianza di Parseval | 9 (3, 3, 3) | L’uguaglianza di Parseval | 5 | Integrali definiti e aree (Analisi 1, Calcolo integrale) |
| Periodo e periodo 2L | 11 (6, 3, 2) | Periodo generico; Funzioni periodiche e polinomi trigonometrici | 6 | Periodo, dominio e valori assunti (Precorso, Equazioni e disequazioni goniometriche); Integrazione per sostituzione (Analisi 1, Calcolo integrale) |

## 4. Analisi complessa: funzioni olomorfe e logaritmo

| Abilità | Domande (base, medio, avanzato) | Teoria | Schede svolte | Base |
|---|---|---|---|---|
| Limiti e continuità nel piano complesso | 12 (5, 5, 2) | Funzioni e limiti nel piano complesso | 8 | Restrizioni e non esistenza del limite (Analisi 2, Funzioni di più variabili); Coniugato e modulo (Analisi 1, Numeri complessi) |
| Derivata complessa e rapporto incrementale | 13 (4, 6, 3) | Derivata complessa e olomorfia | 1 | Regole di derivazione (Analisi 1, Calcolo differenziale e Taylor); Coniugato e modulo (Analisi 1, Numeri complessi) |
| Equazioni di Cauchy-Riemann | 12 (4, 7, 1) | Condizioni di Cauchy-Riemann | 2; 6 | Derivate parziali e gradiente (Analisi 2, Calcolo differenziale in più variabili); Differenziabilità (Analisi 2, Calcolo differenziale in più variabili) |
| Esponenziale e seno complessi | 14 (5, 7, 2) | Esponenziale e funzioni trigonometriche | 4 | Forma trigonometrica ed esponenziale (Analisi 1, Numeri complessi); Equazioni in campo complesso (Analisi 1, Numeri complessi) |
| Logaritmo, rami e potenze complesse | 16 (4, 8, 4) | Logaritmo e potenze complesse | 5; 9 | Forma trigonometrica ed esponenziale (Analisi 1, Numeri complessi); Potenze e radici n-esime (Analisi 1, Numeri complessi) |
| Funzioni armoniche e coniugate | 12 (3, 7, 2) | Funzioni armoniche e coniugate | 3; 10 | Derivate seconde e hessiana (Analisi 2, Calcolo differenziale in più variabili); Costruzione del potenziale (Analisi 2, Campi vettoriali e teorema di Green) |
| Trasformazioni conformi | 11 (3, 6, 2) | Trasformazioni conformi | 7; 10 | Forma trigonometrica ed esponenziale (Analisi 1, Numeri complessi); Luoghi nel piano di Gauss (Analisi 1, Numeri complessi) |

## 5. Analisi complessa: Cauchy, Laurent e residui

| Abilità | Domande (base, medio, avanzato) | Teoria | Schede svolte | Base |
|---|---|---|---|---|
| Integrali lungo un cammino | 7 (2, 4, 1) | Integrale su un cammino | nessuna | Integrali di linea di seconda specie (Analisi 2, Curve e integrali di linea); Forma trigonometrica ed esponenziale (Analisi 1, Numeri complessi) |
| Primitive e teorema di Cauchy | 9 (3, 4, 2) | Primitive e teorema di Cauchy | 1 | Derivata complessa e rapporto incrementale (Analisi complessa: funzioni olomorfe e logaritmo); Potenziale e lavoro conservativo (Analisi 2, Campi vettoriali e teorema di Green) |
| Formula di Cauchy e conseguenze | 16 (4, 8, 4) | Formula di Cauchy e conseguenze | 2; 8 | Regole di derivazione (Analisi 1, Calcolo differenziale e Taylor); Luoghi nel piano di Gauss (Analisi 1, Numeri complessi) |
| Sviluppi di Taylor e Laurent | 13 (3, 7, 3) | Sviluppi di Taylor e Laurent | 5; 9 | Serie geometriche (Analisi 1, Serie numeriche); Sviluppi di MacLaurin (Serie di potenze e serie di Taylor) |
| Singolarità e calcolo dei residui | 15 (4, 8, 3) | Singolarità e residui | 3; 4 | Polinomi di Taylor (Analisi 1, Calcolo differenziale e Taylor); Radici razionali e molteplicità (Precorso, Fattorizzazione, Ruffini e divisione tra polinomi) |
| Teorema dei residui su contorni | 8 (1, 4, 3) | Teorema dei residui e integrali reali; Singolarità e residui | 8 | Luoghi nel piano di Gauss (Analisi 1, Numeri complessi); Orientazione e segno degli integrali (Analisi 2, Curve e integrali di linea) |
| Integrali reali con i residui | 8 (2, 2, 4) | Teorema dei residui e integrali reali | 6; 10 | Integrali su intervalli illimitati (Analisi 1, Integrali impropri); Potenze e radici n-esime (Analisi 1, Numeri complessi) |
| Principio dell'argomento e Rouché | 14 (3, 7, 4) | Conteggio degli zeri | 7; 10 | Coniugato e modulo (Analisi 1, Numeri complessi); Radici razionali e molteplicità (Precorso, Fattorizzazione, Ruffini e divisione tra polinomi) |

## 6. Misura e integrale di Lebesgue

| Abilità | Domande (base, medio, avanzato) | Teoria | Schede svolte | Base |
|---|---|---|---|---|
| Sigma-algebre e proprietà delle misure | 8 (2, 4, 2) | Sigma-algebre e misure; Misura di Lebesgue | nessuna | Operazioni tra insiemi e intervalli (Analisi 1, Insiemi, induzione e funzioni elementari) |
| Misura di Lebesgue di insiemi | 7 (3, 3, 1) | Misura di Lebesgue | 1; 8 | Operazioni tra insiemi e intervalli (Analisi 1, Insiemi, induzione e funzioni elementari); Serie geometriche (Analisi 1, Serie numeriche) |
| Funzioni misurabili e semplici | 13 (4, 7, 2) | Funzioni misurabili e semplici | 2; 8 | Operazioni tra insiemi e intervalli (Analisi 1, Insiemi, induzione e funzioni elementari); Integrali definiti e aree (Analisi 1, Calcolo integrale) |
| Integrale di Lebesgue e integrabilità | 11 (4, 6, 1) | Integrale di Lebesgue | 3; 8 | Integrali campione e confronto asintotico (Analisi 1, Integrali impropri); Integrali definiti e aree (Analisi 1, Calcolo integrale) |
| Convergenza monotona e lemma di Fatou | 11 (2, 5, 4) | Convergenza monotona e Fatou | 5; 9 | Limite puntuale (Successioni e serie di funzioni); Integrali campione e confronto asintotico (Analisi 1, Integrali impropri) |
| Teorema della convergenza dominata | 14 (3, 7, 4) | Convergenza dominata | 4; 9 | Limite puntuale (Successioni e serie di funzioni); Confronto e convergenza assoluta (Analisi 1, Integrali impropri) |
| Tonelli, Fubini e integrali iterati | 13 (5, 5, 3) | Tonelli e Fubini | 6; 10 | Domini normali e scambio dell'ordine (Analisi 2, Integrali doppi e tripli); Integrali su intervalli illimitati (Analisi 1, Integrali impropri) |
| Integrali dipendenti da un parametro | 13 (4, 5, 4) | Integrali dipendenti da un parametro | 7; 10 | Derivate parziali e gradiente (Analisi 2, Calcolo differenziale in più variabili); Integrali su intervalli illimitati (Analisi 1, Integrali impropri) |

## 7. Spazi Lᵖ e spazi di Hilbert

| Abilità | Domande (base, medio, avanzato) | Teoria | Schede svolte | Base |
|---|---|---|---|---|
| Norme Lᵖ e supremo essenziale | 9 (5, 4, 0) | Spazi Lᵖ | 1; 2 | Integrali di funzioni illimitate (Analisi 1, Integrali impropri); Misura di Lebesgue di insiemi (Misura e integrale di Lebesgue) |
| Hölder, Minkowski e completezza | 10 (2, 7, 1) | Hölder e Minkowski | nessuna | Potenze a esponente razionale (Precorso, Potenze e radici); Integrali campione e confronto asintotico (Analisi 1, Integrali impropri) |
| Inclusioni e modi di convergenza | 13 (3, 6, 4) | Inclusioni e convergenze | 3; 8 | Teorema della convergenza dominata (Misura e integrale di Lebesgue); Limite puntuale (Successioni e serie di funzioni) |
| Prodotto scalare e norma indotta | 8 (4, 2, 2) | Spazi di Hilbert | nessuna | Coniugato e modulo (Analisi 1, Numeri complessi); Prodotti notevoli (Precorso, Fattorizzazione, Ruffini e divisione tra polinomi) |
| Proiezione ortogonale e distanza | 20 (8, 10, 2) | Proiezione ortogonale | 4; 9 | Proprietà e teoremi dell'integrale (Analisi 1, Calcolo integrale); Integrali definiti e aree (Analisi 1, Calcolo integrale) |
| Sistemi ortonormali, Bessel e Parseval | 13 (5, 6, 2) | Basi ortonormali e Parseval | 7; 10 | Ortogonalità del sistema trigonometrico (Serie di Fourier); Confronto e confronto asintotico (Analisi 1, Serie numeriche) |
| Rappresentazione di Riesz | 9 (3, 5, 1) | Rappresentazione di Riesz e convergenza debole | 6 | Coniugato e modulo (Analisi 1, Numeri complessi) |
| Convergenza debole | 8 (2, 5, 1) | Rappresentazione di Riesz e convergenza debole | 10 | Definizione e condizione necessaria (Analisi 1, Serie numeriche) |

## 8. Spazi di Banach e operatori lineari

| Abilità | Domande (base, medio, avanzato) | Teoria | Schede svolte | Base |
|---|---|---|---|---|
| Spazi di Banach e completezza | 6 (1, 4, 1) | Spazi normati e completezza | 10 | Criterio del sup (Successioni e serie di funzioni); Hölder, Minkowski e completezza (Spazi Lᵖ e spazi di Hilbert) |
| Norma di un operatore lineare | 15 (8, 6, 1) | Operatori lineari continui | 1; 2 | Massimi e minimi assoluti, immagine (Analisi 1, Studio di funzione); Proprietà e teoremi dell'integrale (Analisi 1, Calcolo integrale) |
| Funzionali, norma duale e Hahn-Banach | 14 (4, 7, 3) | Funzionali e duale; Applicazione aperta, grafico chiuso e Hahn-Banach | 3; 8 | Prodotto scalare e norma indotta (Spazi Lᵖ e spazi di Hilbert); Definizione e proprietà del modulo (Precorso, Equazioni e disequazioni con il valore assoluto) |
| Teorema delle contrazioni | 13 (5, 7, 1) | Contrazioni e serie di Neumann | 4; 5 | Teoremi, monotonia ed estremi (Analisi 1, Calcolo differenziale e Taylor); Serie geometriche (Analisi 1, Serie numeriche) |
| Serie di Neumann e inversi | 10 (2, 6, 2) | Contrazioni e serie di Neumann | 6; 9 | Serie geometriche (Analisi 1, Serie numeriche) |
| Principio di uniforme limitatezza | 10 (3, 4, 3) | Baire e uniforme limitatezza | 10 | Prodotto scalare e norma indotta (Spazi Lᵖ e spazi di Hilbert); Confronto e confronto asintotico (Analisi 1, Serie numeriche) |
| Applicazione aperta e grafico chiuso | 7 (2, 2, 3) | Applicazione aperta, grafico chiuso e Hahn-Banach | nessuna | Hölder, Minkowski e completezza (Spazi Lᵖ e spazi di Hilbert); Derivazione per successioni e serie (Successioni e serie di funzioni) |
| Operatori compatti e Ascoli-Arzelà | 15 (5, 9, 1) | Operatori compatti e Ascoli-Arzelà | 7; 10 | Sistemi ortonormali, Bessel e Parseval (Spazi Lᵖ e spazi di Hilbert); Criterio del sup (Successioni e serie di funzioni) |

## 9. Trasformata di Fourier e convoluzione

| Abilità | Domande (base, medio, avanzato) | Teoria | Schede svolte | Base |
|---|---|---|---|---|
| Definizione, stime e Riemann-Lebesgue | 12 (5, 6, 1) | Convenzione e trasformabilità | nessuna | Confronto e convergenza assoluta (Analisi 1, Integrali impropri); Teorema della convergenza dominata (Misura e integrale di Lebesgue) |
| Trasformate elementari | 12 (7, 5, 0) | Trasformate elementari | 1; 2 | Integrali su intervalli illimitati (Analisi 1, Integrali impropri); Forma trigonometrica ed esponenziale (Analisi 1, Numeri complessi) |
| Traslazioni, modulazioni e dilatazioni | 13 (3, 8, 2) | Traslazioni, modulazioni e dilatazioni | 3; 8 | Integrazione per sostituzione (Analisi 1, Calcolo integrale); Forma trigonometrica ed esponenziale (Analisi 1, Numeri complessi) |
| Derivate e moltiplicazione per x | 11 (4, 4, 3) | Derivate e moltiplicazioni | 7 | Integrazione per parti (Analisi 1, Calcolo integrale); Regole di derivazione (Analisi 1, Calcolo differenziale e Taylor) |
| Convoluzione | 12 (3, 7, 2) | Convoluzione | 6; 9 | Operazioni tra insiemi e intervalli (Analisi 1, Insiemi, induzione e funzioni elementari); Domini normali e scambio dell'ordine (Analisi 2, Integrali doppi e tripli) |
| Inversione e Plancherel | 11 (4, 4, 3) | Inversione e Plancherel | 5; 9 | Uguaglianza di Parseval (Serie di Fourier); Prodotto scalare e norma indotta (Spazi Lᵖ e spazi di Hilbert) |
| Distribuzioni e delta di Dirac | 9 (3, 5, 1) | Distribuzioni temperate | 10 | Integrazione per parti (Analisi 1, Calcolo integrale); Funzionali, norma duale e Hahn-Banach (Spazi di Banach e operatori lineari) |
| Equazione del calore con Fourier | 10 (3, 4, 3) | Applicazione all’equazione del calore | 10 | Lineari del primo ordine (Analisi 1, Equazioni differenziali) |

## 10. Trasformata di Laplace

| Abilità | Domande (base, medio, avanzato) | Teoria | Schede svolte | Base |
|---|---|---|---|---|
| Semipiano di convergenza | 8 (1, 4, 3) | Trasformata unilatera e convergenza | nessuna | Confronto e convergenza assoluta (Analisi 1, Integrali impropri); Integrali campione e confronto asintotico (Analisi 1, Integrali impropri) |
| Trasformate elementari e linearità | 10 (6, 4, 0) | Trasformate elementari; Traslazioni e ritardi | 1; 3 | Integrazione per parti (Analisi 1, Calcolo integrale); Identità e formule (Precorso, Equazioni e disequazioni goniometriche) |
| Derivate e moltiplicazione per t | 9 (4, 3, 2) | Derivate e dati iniziali | nessuna | Integrazione per parti (Analisi 1, Calcolo integrale); Regole di derivazione (Analisi 1, Calcolo differenziale e Taylor) |
| Ritardi, segnali a tratti e periodici | 16 (6, 6, 4) | Traslazioni e ritardi | 4; 8 | Integrazione per sostituzione (Analisi 1, Calcolo integrale); Serie geometriche (Analisi 1, Serie numeriche) |
| Convoluzione causale | 9 (2, 6, 1) | Convoluzione e antitrasformazione | 9 | Integrali definiti e aree (Analisi 1, Calcolo integrale); Domini normali e scambio dell'ordine (Analisi 2, Integrali doppi e tripli) |
| Antitrasformazione: fratti semplici e residui | 15 (5, 8, 2) | Convoluzione e antitrasformazione | 5; 9 | Funzioni razionali fratte (Analisi 1, Calcolo integrale); Singolarità e calcolo dei residui (Analisi complessa: Cauchy, Laurent e residui) |
| Problemi di Cauchy con Laplace | 13 (5, 6, 2) | Problemi di Cauchy e forzanti; Derivate e dati iniziali | 7; 10 | Omogenee del secondo ordine (Analisi 1, Equazioni differenziali); Lineari del primo ordine (Analisi 1, Equazioni differenziali) |
| Teoremi del valore iniziale e finale | 10 (4, 5, 1) | Valori iniziali e finali | 10 | Polinomi a coefficienti reali (Analisi 1, Numeri complessi); Limiti all'infinito e gerarchie (Analisi 1, Limiti e continuità) |

## 11. Equazioni alle derivate parziali

| Abilità | Domande (base, medio, avanzato) | Teoria | Schede svolte | Base |
|---|---|---|---|---|
| Classificazione delle EDP del secondo ordine | 11 (5, 4, 2) | Equazioni e dati | 6 | Classificazione con l'Hessiana (Analisi 2, Massimi e minimi liberi e vincolati); Derivate seconde e hessiana (Analisi 2, Calcolo differenziale in più variabili) |
| Metodo delle caratteristiche | 15 (4, 7, 4) | Caratteristiche e trasporto | 1; 8 | Regola della catena (Analisi 2, Calcolo differenziale in più variabili); Lineari del primo ordine (Analisi 1, Equazioni differenziali) |
| Autovalori e sviluppo in seni | 7 (3, 4, 0) | Separazione delle variabili | nessuna | Omogenee del secondo ordine (Analisi 1, Equazioni differenziali); Calcolo dei coefficienti di Fourier (Serie di Fourier) |
| Equazione del calore sul segmento | 14 (3, 7, 4) | Equazione del calore; Separazione delle variabili | 2; 9 | Lineari del primo ordine (Analisi 1, Equazioni differenziali); Calcolo dei coefficienti di Fourier (Serie di Fourier) |
| Formula di d'Alembert | 7 (2, 4, 1) | Equazione delle onde | 7 | Regola della catena (Analisi 2, Calcolo differenziale in più variabili); Integrali definiti e aree (Analisi 1, Calcolo integrale) |
| Modi ed energia delle onde | 9 (2, 6, 1) | Equazione delle onde; Separazione delle variabili | 3; 9 | Omogenee del secondo ordine (Analisi 1, Equazioni differenziali); Integrazione per parti (Analisi 1, Calcolo integrale) |
| Problemi di Laplace e principio del massimo | 12 (3, 6, 3) | Laplace e problemi di Dirichlet | 4; 10 | Omogenee del secondo ordine (Analisi 1, Equazioni differenziali); Funzioni armoniche e coniugate (Analisi complessa: funzioni olomorfe e logaritmo) |
| Derivate deboli e formulazione debole | 15 (5, 6, 4) | Equazione di Poisson e soluzioni deboli; Esistenza e metodo dell’energia | 5; 10 | Integrazione per parti (Analisi 1, Calcolo integrale); Rappresentazione di Riesz (Spazi Lᵖ e spazi di Hilbert) |
