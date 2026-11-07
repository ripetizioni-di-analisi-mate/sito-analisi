"""Problemi numerici originali; i parametri distinguono esempi, tracce e quiz.

Ogni caso conserva formula numerica e risultato per una verifica indipendente.
Le distribuzioni e i quantili sono ricalcolati con scipy in fase di generazione.
"""
from dataclasses import dataclass
from math import comb, factorial, sqrt, exp, log, ceil
from statistics import mean, median, pvariance, variance
from scipy.stats import norm, binom, poisson, hypergeom, geom, t as student, chi2

@dataclass
class Caso:
    titolo: str
    ancora: str
    domanda: str
    valore: float
    formula: str
    motivo: str
    probabilita: bool = False

def f(x):
    return f'{float(x):.4f}'.rstrip('0').rstrip('.').replace('.', '{,}')

def dati(xs):
    return ', '.join(f(x) for x in xs)

def caso(j, k, v):
    """j = capitolo (0..11), k = tipologia (0..9), v = variante."""
    a = v + 2
    C = Caso
    if j == 0:
        n = 40 + 5*v
        r = 8 + v
        if k == 0:
            return C('Frequenze relative', 'frequenze', f'In una rilevazione {r} unità su {n} appartengono alla modalità A. Calcolare la frequenza relativa di A.', r/n, rf'f_A=\frac{{{r}}}{{{n}}}', 'La frequenza assoluta della modalità è il numeratore. Il denominatore comprende tutte le unità osservate; il rapporto è una proporzione.', True)
        if k == 1:
            p = 15+5*v
            return C('Dalle percentuali ai conteggi', 'frequenze', f'In un campione di 200 unità il ${p}\\%$ ha la caratteristica A. Quante unità hanno A?', 2*p, rf'n_A=200\cdot\frac{{{p}}}{{100}}', 'Si converte la percentuale in proporzione e la si moltiplica per la numerosità complessiva. Il risultato è un conteggio di unità.')
        if k == 2:
            ns = [a, a+3, 2*a, a+1]
            return C('Frequenze cumulate assolute', 'cumulate', f'Le modalità ordinate $0,1,2,3$ hanno frequenze assolute ${dati(ns)}$. Quante osservazioni sono minori o uguali a 2?', sum(ns[:3]), '+'.join(map(str, ns[:3])), 'La cumulata fino a 2 comprende le prime tre modalità. La frequenza della modalità 3 resta fuori dal conteggio.')
        if k == 3:
            xs = [a,a,a+1,a+2,a+4,a+4]
            return C('Valori della ripartizione empirica', 'cumulate', f'Per i dati ${dati(xs)}$, calcolare $F_n({a+1})$.', .5, r'F_n(x)=\frac{\#\{x_i\le x\}}n=\frac36', 'Le due osservazioni uguali al minimo e l’osservazione successiva soddisfano la disuguaglianza. La ripartizione comprende anche il valore uguale alla soglia.', True)
        if k == 4:
            h = a+2
            p = .1+.01*v
            return C('Altezze degli istogrammi', 'istogramma', f'Una classe di ampiezza ${h}$ ha frequenza relativa ${f(p)}$. Qual è la sua densità di frequenza?', p/h, rf'd=\frac{{f_i}}{{h_i}}=\frac{{{f(p)}}}{{{h}}}', 'L’area del rettangolo deve coincidere con la frequenza relativa. Quindi si divide la frequenza per l’ampiezza della classe.')
        if k == 5:
            h = a+3
            d = .01+.001*v
            return C('Aree degli istogrammi', 'istogramma', f'Una classe ha ampiezza ${h}$ e altezza di densità relativa ${f(d)}$. Calcolare la sua frequenza relativa.', h*d, rf'f_i=d_i h_i={f(d)}\cdot {h}', 'La frequenza relativa è l’area, quindi si moltiplicano altezza e ampiezza. Le altezze da sole non rappresentano frequenze quando le classi hanno ampiezze diverse.', True)
        if k == 6:
            return C('Punti medi delle classi', 'classi', f'Calcolare il punto medio della classe $[{a},{3*a+2})$.', 2*a+1, rf'c=\frac{{{a}+{3*a+2}}}2', 'Il punto medio è la media dei due estremi. Usarlo come rappresentante della classe introduce un’approssimazione nei calcoli sui dati raggruppati.')
        if k == 7:
            return C('Marginali di una tabella', 'tabelle', f'Una tabella ha prima riga $({a},{a+2})$ e seconda riga $({2*a},{a+1})$. Calcolare la frequenza marginale assoluta della prima colonna.', 3*a, rf'n_{{\cdot1}}={a}+{2*a}', 'La marginale di colonna si ottiene sommando le celle della stessa colonna. Il totale di una riga avrebbe un significato diverso.')
        if k == 8:
            return C('Percentuali entro un gruppo', 'tabelle', f'Una riga di tabella contiene ${a}$ unità nella prima colonna e ${2*a+1}$ nella seconda. Calcolare la proporzione della prima colonna entro questa riga.', a/(3*a+1), rf'\frac{{n_{{11}}}}{{n_{{1\cdot}}}}=\frac{{{a}}}{{{a}+{2*a+1}}}', 'La richiesta riguarda soltanto la riga considerata. Perciò il denominatore è il totale della riga, non quello dell’intero campione.', True)
        return C('Proporzioni sopra una soglia', 'cumulate', f'Per una distribuzione empirica $F_n({a})={f(.3+.02*v)}$. Calcolare la proporzione di osservazioni strettamente maggiori di ${a}$.', 1-(.3+.02*v), rf'1-F_n({a})=1-{f(.3+.02*v)}', 'La ripartizione comprende tutti i valori minori o uguali alla soglia. Il complementare contiene quelli strettamente maggiori.', True)
    if j == 1:
        xs = [a,a+1,a+2,a+5,a+7]
        if k == 0:
            return C('Medie di dati non raggruppati', 'media', f'Calcolare la media dei dati ${dati(xs)}$.', mean(xs), rf'\bar x=\frac{{'+ '+'.join(map(str,xs))+r'}{5}', 'Si sommano tutti i dati e si divide per il loro numero. Ogni osservazione ha lo stesso peso.')
        if k == 1:
            return C('Medie ponderate e gruppi', 'media', f'Un gruppo di {a+3} unità ha media 20; un secondo di {2*a+1} unità ha media 30. Calcolare la media complessiva.', (20*(a+3)+30*(2*a+1))/(3*a+4), rf'\bar x=\frac{{20\cdot{a+3}+30\cdot{2*a+1}}}{{{3*a+4}}}', 'Le somme dei due gruppi si ricavano moltiplicando media e numerosità. La somma totale va divisa per la numerosità totale.')
        if k == 2:
            return C('Mediane con numerosità pari', 'quantili', f'I dati ordinati sono ${a},{a+1},{a+3},{a+6}$. Calcolare la mediana con la convenzione della media dei due valori centrali.', a+2, rf'\operatorname{{Med}}=\frac{{{a+1}+{a+3}}}2', 'La numerosità è pari. I due valori centrali sono la seconda e la terza osservazione ordinata.')
        if k == 3:
            ys = [0,a,2*a]
            return C('Varianze descrittive', 'varianza', f'Calcolare la varianza descrittiva, con divisore $n$, dei dati ${dati(ys)}$.', 2*a*a/3, rf'v=\frac{{(0-{a})^2+({a}-{a})^2+({2*a}-{a})^2}}3', 'La media è il valore centrale. I due scarti estremi sono opposti, ma i loro quadrati si sommano; il divisore richiesto è tre.')
        if k == 4:
            return C('Varianze campionarie corrette', 'varianza', f'Per un campione di ${a+3}$ osservazioni la somma degli scarti quadratici dalla media vale ${6*(a+2)}$. Calcolare $s^2$.', 6, rf's^2=\frac{{{6*(a+2)}}}{{{a+3}-1}}', 'La varianza corretta usa il divisore n meno uno. La somma degli scarti quadratici è già fornita, quindi non occorre ricostruire le osservazioni.')
        if k == 5:
            return C('Trasformazioni delle varianze', 'trasformazioni', f'Una variabile osservata ha varianza descrittiva ${a}$. Si trasforma con $y=5-{a+1}x$. Calcolare la varianza di $y$.', a*(a+1)**2, rf'v_y=(-{a+1})^2\,{a}', 'La traslazione non modifica gli scarti dalla media. Il coefficiente moltiplicativo viene elevato al quadrato, quindi la varianza resta non negativa.')
        if k == 6:
            return C('Punteggi standardizzati', 'standardizzazione', f'Una distribuzione ha media ${10*a}$ e deviazione standard ${a+1}$. Standardizzare l’osservazione ${10*a+3*(a+1)}$.', 3, rf'z=\frac{{{10*a+3*(a+1)}-{10*a}}}{{{a+1}}}', 'Si sottrae la media e si divide per la deviazione standard. Il risultato indica il numero di deviazioni standard sopra la media.')
        if k == 7:
            return C('Coefficienti di variazione', 'dispersione', f'Una misura su scala a rapporti ha media positiva ${20+a}$ e deviazione standard ${a}$. Calcolare il coefficiente di variazione come rapporto, non in percentuale.', a/(20+a), rf'CV=\frac{{{a}}}{{{20+a}}}', 'Il coefficiente è la deviazione standard divisa per la media. Per ottenere una percentuale si moltiplicherebbe il rapporto per cento, ma qui è richiesto il rapporto.')
        if k == 8:
            return C('Barriere dei box plot', 'boxplot', f'Sono dati $Q_1={a}$ e $Q_3={a+4}$. Calcolare la barriera superiore di Tukey.', a+10, rf'IQR={a+4}-{a}=4,\qquad B_s={a+4}+1{{,}}5\cdot4', 'La distanza interquartile vale quattro. La barriera superiore si trova aggiungendo al terzo quartile una volta e mezza questa distanza.')
        return C('Quartili con convenzione dichiarata', 'quantili', f'I dati sono ${dati(list(range(a,a+8)))}$. Usare $q_p=x_{{(\\lceil np\\rceil)}}$ per calcolare $Q_3$.', a+5, rf'\lceil8\cdot0{{,}}75\rceil=6,\qquad Q_3=x_{{(6)}}={a+5}', 'La convenzione richiesta sceglie l’osservazione di rango pari al soffitto di n per p. La sesta osservazione è il terzo quartile secondo questa convenzione.')
    if j == 2:
        n = a+4
        if k == 0:
            return C('Permutazioni di oggetti distinti', 'permutazioni', f'In quanti modi si possono ordinare ${a+2}$ libri distinti su uno scaffale?', factorial(a+2), rf'({a+2})!', 'Ogni libro occupa una posizione diversa. Le scelte disponibili diminuiscono di uno a ogni posizione, quindi si usa il fattoriale.')
        if k == 1:
            return C('Disposizioni senza ripetizione', 'combinazioni', f'Tra ${n}$ candidati si assegnano tre ruoli diversi, senza cumulo di ruoli. Quante assegnazioni sono possibili?', n*(n-1)*(n-2), rf'{n}\cdot{n-1}\cdot{n-2}', 'I ruoli distinguono l’ordine. Dopo ogni assegnazione rimane un candidato in meno per il ruolo successivo.')
        if k == 2:
            return C('Commissioni e combinazioni', 'combinazioni', f'Scegliere una commissione di 3 persone tra ${n}$ candidati. Quante commissioni distinte sono possibili?', comb(n,3), rf'\binom{{{n}}}3=\frac{{{n}!}}{{3!({n}-3)!}}', 'Una commissione non distingue i ruoli. Dividere per il fattoriale di tre elimina gli ordinamenti dello stesso gruppo.')
        if k == 3:
            return C('Sequenze con ripetizione', 'combinazioni', f'Un codice ha tre posizioni, ciascuna con ${a+2}$ simboli possibili. Le ripetizioni sono ammesse. Quanti codici esistono?', (a+2)**3, rf'({a+2})^3', 'Ogni posizione offre lo stesso numero di simboli. Il principio del prodotto moltiplica le tre possibilità indipendenti in termini di scelta.')
        if k == 4:
            return C('Unioni di eventi', 'assiomi', f'$P(A)={f(.3+.01*v)}$, $P(B)=0{{,}}4$, $P(A\\cap B)=0{{,}}1$. Calcolare $P(A\\cup B)$.', .6+.01*v, rf'P(A\cup B)={f(.3+.01*v)}+0{{,}}4-0{{,}}1', 'Sommando le probabilità dei due eventi si conta due volte l’intersezione. Sottraendola una volta si ottiene l’unione.', True)
        if k == 5:
            p = .1+.02*v
            return C('Almeno un successo', 'complementare', f'Si eseguono ${a+1}$ prove indipendenti con probabilità di successo ${f(p)}$. Calcolare la probabilità di almeno un successo.', 1-(1-p)**(a+1), rf'1-(1-{f(p)})^{{{a+1}}}', 'Il complementare è una sequenza di soli insuccessi. L’indipendenza permette di moltiplicare le probabilità degli insuccessi.', True)
        if k == 6:
            N,R,m = 12+v,5+v,3
            val = comb(R,2)*comb(N-R,1)/comb(N,m)
            return C('Estrazioni con esattamente due successi', 'estrazioni', f'Un’urna ha ${R}$ rosse e ${N-R}$ blu. Si estraggono 3 palline senza reinserimento. Qual è la probabilità di esattamente 2 rosse?', val, rf'\frac{{\binom{{{R}}}2\binom{{{N-R}}}1}}{{\binom{{{N}}}3}}', 'Si scelgono due rosse e una blu, poi si divide per tutti i campioni di tre palline. I conteggi riguardano gruppi senza ordine.', True)
        if k == 7:
            return C('Permutazioni con oggetti ripetuti', 'permutazioni', f'Si ordinano ${a}$ simboli A e due simboli B, indistinguibili entro ciascun tipo. Quante stringhe distinte si ottengono?', comb(a+2,2), rf'\frac{{({a+2})!}}{{{a}!2!}}', 'Le permutazioni che scambiano soltanto simboli uguali descrivono la stessa stringa. Si eliminano dividendo per i fattoriali delle molteplicità.')
        if k == 8:
            N,R=10+v,3+v
            return C('Probabilità classiche su esiti uniformi', 'equiprobabilita', f'Si estrae uniformemente una tessera da ${N}$ tessere distinte, ${R}$ delle quali sono marcate. Qual è la probabilità di una tessera marcata?', R/N, rf'P(A)=\frac{{{R}}}{{{N}}}', 'Ogni tessera ha la stessa probabilità. Il rapporto tra casi favorevoli e possibili è quindi applicabile.', True)
        return C('Intersezioni dalle unioni', 'assiomi', f'$P(A)=0{{,}}5$, $P(B)={f(.3+.01*v)}$ e $P(A\\cup B)=0{{,}}65$. Calcolare $P(A\\cap B)$.', .15+.01*v, rf'P(A\cap B)=0{{,}}5+{f(.3+.01*v)}-0{{,}}65', 'Si risolve la formula dell’unione rispetto all’intersezione. I valori forniti rispettano i limiti imposti alle probabilità.', True)
    if j == 3:
        p=.2+.02*v
        if k == 0:
            return C('Probabilità condizionate da intersezioni', 'condizionata', f'$P(A\\cap B)={f(p/2)}$ e $P(B)=0{{,}}5$. Calcolare $P(A\\mid B)$.', p, rf'P(A\mid B)=\frac{{{f(p/2)}}}{{0{{,}}5}}', 'L’evento condizionante è B e la sua probabilità è positiva. Si divide la probabilità dell’intersezione per quella di B.', True)
        if k == 1:
            return C('Intersezioni con la regola del prodotto', 'prodotto', f'$P(A)={f(p)}$ e $P(B\\mid A)=0{{,}}6$. Calcolare $P(A\\cap B)$.', p*.6, rf'P(A\cap B)={f(p)}\cdot0{{,}}6', 'La probabilità dell’intero percorso si ottiene moltiplicando la probabilità del primo evento per quella del secondo condizionata al primo.', True)
        if k == 2:
            return C('Probabilità totali su due gruppi', 'totale', f'$P(B)={f(p)}$, $P(A\\mid B)=0{{,}}8$, $P(A\\mid B^c)=0{{,}}2$. Calcolare $P(A)$.', .8*p+.2*(1-p), rf'P(A)=0{{,}}8\cdot{f(p)}+0{{,}}2\cdot(1-{f(p)})', 'B e il suo complementare formano una partizione. Si sommano i due percorsi incompatibili che conducono ad A.', True)
        if k == 3:
            return C('Inversioni con Bayes', 'bayes', f'$P(B)={f(p)}$, $P(A\\mid B)=0{{,}}8$, $P(A\\mid B^c)=0{{,}}2$. Calcolare $P(B\\mid A)$.', .8*p/(.8*p+.2*(1-p)), rf'P(B\mid A)=\frac{{0{{,}}8\cdot{f(p)}}}{{0{{,}}8\cdot{f(p)}+0{{,}}2(1-{f(p)})}}', 'Il numeratore è la probabilità del percorso B e A. Il denominatore è la probabilità totale di A, che rende confrontabili tutti i casi osservati.', True)
        if k == 4:
            return C('Intersezioni di eventi indipendenti', 'indipendenza', f'A e B sono indipendenti, con $P(A)={f(p)}$ e $P(B)=0{{,}}7$. Calcolare $P(A\\cap B)$.', .7*p, rf'P(A\cap B)=P(A)P(B)={f(p)}\cdot0{{,}}7', 'L’indipendenza è un’ipotesi esplicita del problema. Perciò la probabilità dell’intersezione fattorizza.', True)
        if k == 5:
            return C('Sistemi indipendenti in parallelo', 'mutua', f'Due componenti indipendenti funzionano con probabilità ${f(p)}$ e $0{{,}}9$. Il sistema funziona se almeno uno funziona. Calcolare l’affidabilità.', 1-(1-p)*.1, rf'1-(1-{f(p)})(1-0{{,}}9)', 'Il sistema si guasta soltanto se si guastano entrambi i componenti. Si calcola questo evento con l’indipendenza e poi se ne prende il complementare.', True)
        if k == 6:
            R,N=5+v,9+v
            return C('Percorsi senza reinserimento', 'prodotto', f'Un’urna contiene ${R}$ rosse e ${N-R}$ blu. Dopo una prima estrazione rossa senza reinserimento, qual è la probabilità che anche la seconda sia rossa?', (R-1)/(N-1), rf'P(R_2\mid R_1)=\frac{{{R}-1}}{{{N}-1}}', 'La prima estrazione rossa toglie una pallina rossa e una pallina dal totale. Si aggiorna il campione possibile prima della seconda estrazione.', True)
        if k == 7:
            prev=.01+.005*v
            val=.9*prev/(.9*prev+.04*(1-prev))
            return C('Valori predittivi dei controlli', 'classificatori', f'Il ${f(prev*100)}\\%$ dei pezzi è difettoso. Un controllo segnala il 90% dei difettosi e il 4% dei regolari. Qual è la probabilità di difetto tra i segnalati?', val, rf'\frac{{0{{,}}9\cdot{f(prev)}}}{{0{{,}}9\cdot{f(prev)}+0{{,}}04(1-{f(prev)})}}', 'Le segnalazioni includono veri e falsi positivi. Bayes divide la quota congiunta di veri positivi per la quota totale di segnalazioni.', True)
        if k == 8:
            return C('Condizionamento sui complementari', 'condizionata', f'$P(B\\mid A)={f(p)}$ e $P(A)>0$. Calcolare $P(B^c\\mid A)$.', 1-p, rf'P(B^c\mid A)=1-P(B\mid A)=1-{f(p)}', 'All’interno del gruppo A, B e il suo complementare esauriscono i casi possibili. Le due probabilità condizionate sommano a uno.', True)
        return C('Sistemi indipendenti in serie', 'mutua', f'Tre componenti indipendenti hanno affidabilità ${f(p)}$, $0{{,}}8$ e $0{{,}}9$. Il sistema funziona se tutti funzionano. Calcolare l’affidabilità.', p*.8*.9, rf'{f(p)}\cdot0{{,}}8\cdot0{{,}}9', 'Per un sistema in serie occorre l’intersezione dei tre eventi di funzionamento. L’indipendenza mutua consente il prodotto delle tre probabilità.', True)
    if j == 4:
        p=.15+.02*v
        n=8+v
        if k == 0:
            return C('Normalizzazioni di masse discrete', 'massa', f'X assume $0,1,2$ con masse $c,{a}c,2c$. Determinare c.', 1/(a+3), rf'c(1+{a}+2)=1\quad\Longrightarrow\quad c=\frac1{{{a+3}}}', 'Le probabilità delle tre modalità devono sommare a uno. Il valore ricavato è positivo, quindi la funzione è una massa ammissibile.', True)
        if k == 1:
            return C('Valori attesi da una tabella', 'momenti', f'X assume $0,{a},{2*a}$, con probabilità $0{{,}}2$, $0{{,}}5$, $0{{,}}3$. Calcolare $E[X]$.', 1.1*a, rf'E[X]=0\cdot0{{,}}2+{a}\cdot0{{,}}5+{2*a}\cdot0{{,}}3', 'L’attesa è una media ponderata con le probabilità come pesi. I pesi sommano a uno e i valori sono quelli del supporto.')
        if k == 2:
            return C('Probabilità binomiali puntuali', 'binomiale', f'$X\\sim\\operatorname{{Bin}}({n},{f(p)})$. Calcolare $P(X=2)$.', binom.pmf(2,n,p), rf'\binom{{{n}}}2{f(p)}^2(1-{f(p)})^{{{n-2}}}', 'Si fissano due successi e i rimanenti insuccessi. Il coefficiente binomiale conta tutte le posizioni possibili dei due successi.', True)
        if k == 3:
            return C('Varianze binomiali', 'binomiale', f'$X\\sim\\operatorname{{Bin}}({n},{f(p)})$. Calcolare $\\operatorname{{Var}}(X)$.', n*p*(1-p), rf'np(1-p)={n}\cdot{f(p)}\cdot(1-{f(p)})', 'X è somma di n Bernoulli indipendenti. Ciascuna ha varianza p per uno meno p, quindi le varianze si sommano.')
        if k == 4:
            rate=1+.25*v
            return C('Probabilità di zero eventi Poisson', 'poisson', f'$X\\sim\\operatorname{{Pois}}({f(rate)})$. Calcolare $P(X=0)$.', exp(-rate), rf'e^{{-{f(rate)}}}\frac{{{f(rate)}^0}}{{0!}}=e^{{-{f(rate)}}}', 'Per zero eventi la potenza e il fattoriale valgono uno. Rimane il fattore esponenziale.', True)
        if k == 5:
            return C('Probabilità geometriche', 'geometrica', f'Prove indipendenti hanno successo con probabilità ${f(p)}$. T conta anche la prova del primo successo. Calcolare $P(T={a+1})$.', (1-p)**a*p, rf'(1-{f(p)})^{{{a}}}\cdot{f(p)}', 'Prima dell’ultimo tentativo devono verificarsi soltanto insuccessi. L’ultimo tentativo è il primo successo.', True)
        if k == 6:
            N,R,m=20+v,8+v,4
            return C('Varianze ipergeometriche', 'ipergeometrica', f'Si estraggono uniformemente 4 unità senza reinserimento da ${N}$, di cui ${R}$ successi. Calcolare la varianza del numero di successi.', m*(R/N)*(1-R/N)*(N-m)/(N-1), rf'4\cdot\frac{{{R}}}{{{N}}}\left(1-\frac{{{R}}}{{{N}}}\right)\frac{{{N-4}}}{{{N-1}}}', 'Si parte dalla varianza binomiale e si applica il fattore di correzione finita. La dipendenza delle estrazioni riduce la dispersione rispetto al reinserimento.')
        if k == 7:
            return C('Somme di conteggi Poisson', 'somme', f'X e Y sono Poisson indipendenti con parametri ${a}$ e ${a+3}$. Calcolare $E[X+Y]$.', 2*a+3, rf'E[X+Y]=E[X]+E[Y]={a}+{a+3}', 'L’attesa di ciascuna Poisson coincide con il parametro. La linearità dell’attesa somma le due medie; l’indipendenza garantisce inoltre che la somma sia ancora Poisson.')
        if k == 8:
            return C('Attese geometriche', 'geometrica', f'Il primo successo si verifica in prove indipendenti con probabilità ${f(p)}$. T è il numero della prova del successo. Calcolare $E[T]$.', 1/p, rf'E[T]=\frac1{{{f(p)}}}', 'La convenzione include la prova del successo. Se si contassero soltanto i fallimenti, l’attesa sarebbe inferiore di uno.')
        return C('Probabilità cumulative binomiali', 'binomiale', f'$X\\sim\\operatorname{{Bin}}({n},{f(p)})$. Calcolare $P(X\\ge1)$.', 1-(1-p)**n, rf'P(X\ge1)=1-P(X=0)=1-(1-{f(p)})^{{{n}}}', 'La probabilità di nessun successo si calcola direttamente. Il complementare evita di sommare tutte le altre masse.', True)
    if j == 5:
        b=4+v
        rate=.25+.05*v
        if k == 0:
            return C('Normalizzazioni di densità', 'densita', f'$f_X(x)=cx$ per $0<x<{b}$, zero altrove. Determinare c affinché f sia una densità.', 2/b**2, rf'\int_0^{{{b}}}cx\,dx=\frac{{c\,{b}^2}}2=1', 'La densità è non negativa per c positivo. L’integrale sull’intero supporto deve valere uno, quindi si risolve l’equazione di normalizzazione.')
        if k == 1:
            return C('Intervalli uniformi', 'uniforme', f'$X\\sim U(0,{b})$. Calcolare $P(1<X<3)$.', 2/b, rf'\frac{{3-1}}{{{b}-0}}', 'L’intervallo richiesto è contenuto nel supporto. La densità è costante, quindi la probabilità coincide con il rapporto delle lunghezze.', True)
        if k == 2:
            return C('Varianze uniformi', 'uniforme', f'$X\\sim U(2,{b+2})$. Calcolare la varianza.', b*b/12, rf'\operatorname{{Var}}(X)=\frac{{({b+2}-2)^2}}{{12}}', 'La varianza uniforme dipende dall’ampiezza del supporto al quadrato. Traslare entrambi gli estremi non la cambia.')
        if k == 3:
            return C('Code esponenziali', 'esponenziale', f'X è esponenziale con tasso ${f(rate)}$. Calcolare $P(X>2)$.', exp(-2*rate), rf'P(X>2)=e^{{-2\cdot{f(rate)}}}', 'La funzione di sopravvivenza esponenziale usa il prodotto tra tasso e durata. Il parametro fornito è il tasso, non la scala.', True)
        if k == 4:
            return C('Quantili esponenziali', 'esponenziale', f'X è esponenziale con tasso ${f(rate)}$. Calcolare la mediana.', log(2)/rate, rf'1-e^{{-\lambda m}}=\frac12\quad\Longrightarrow\quad m=\frac{{\log2}}{{{f(rate)}}}', 'La mediana lascia metà della probabilità a sinistra. Si risolve l’equazione della ripartizione e si ottiene il logaritmo di due diviso il tasso.')
        if k == 5:
            mu,sig=20+v,2+v
            z=.5+.1*v
            return C('Standardizzazioni normali e code', 'normale', f'$X\\sim N({mu},{sig**2})$. Calcolare $P(X>{f(mu+sig*z)})$. Il secondo parametro è la varianza.', norm.sf(z), rf'z=\frac{{{f(mu+sig*z)}-{mu}}}{{{sig}}}={f(z)},\qquad P=1-\Phi({f(z)})', 'Si usa la radice della varianza al denominatore. Dopo la standardizzazione la probabilità cercata è una coda superiore della normale standard.', True)
        if k == 6:
            mu,sig=30+v,3+v
            return C('Quantili normali', 'normale', f'$X\\sim N({mu},{sig**2})$. Usando $z_{{0,975}}=1{{,}}96$, calcolare il quantile di ordine $0{{,}}975$.', mu+1.96*sig, rf'q=\mu+\sigma z_{{0{{,}}975}}={mu}+{sig}\cdot1{{,}}96', 'Il quantile standard è espresso in deviazioni standard. Per tornare alle unità originarie si moltiplica per sigma e si aggiunge la media.')
        if k == 7:
            nu=4+v
            return C('Momenti chi quadrato', 'famiglie', f'$X\\sim\\chi^2_{{{nu}}}$. Calcolare la varianza di X.', 2*nu, rf'\operatorname{{Var}}(X)=2\nu=2\cdot{nu}', 'Una chi quadrato ha media pari ai gradi di libertà e varianza doppia. La richiesta riguarda la varianza, non la media.')
        if k == 8:
            return C('Densità di trasformazioni affini', 'trasformazioni', f'$X\\sim U(0,1)$ e $Y={a}X+1$. Quanto vale la densità di Y all’interno del suo supporto?', 1/a, rf'x=\frac{{y-1}}{{{a}}},\qquad f_Y(y)=1\cdot\left|\frac1{{{a}}}\right|', 'La trasformazione allarga il supporto di un fattore a. Il valore assoluto della derivata dell’inversa compensa questo allargamento, mantenendo area totale uno.')
        return C('Attese da densità triangolari', 'ripartizione', f'X ha densità $f(x)=2x/{b*b}$ per $0<x<{b}$, zero altrove. Calcolare $E[X]$.', 2*b/3, rf'E[X]=\int_0^{{{b}}}x\frac{{2x}}{{{b*b}}}\,dx=\frac{{2\,{b}^3}}{{3\cdot{b*b}}}', 'Per l’attesa si integra x per la densità, sul suo supporto. Il momento ottenuto cade all’interno dell’intervallo dei valori possibili.')
    if j == 6:
        p=.2+.01*v
        if k == 0:
            return C('Marginali da masse congiunte', 'congiunta', f'Per X,Y in $\\{{0,1\\}}$ le masse $(p_{{00}},p_{{01}},p_{{10}},p_{{11}})$ sono $({f(p)},0{{,}}2,0{{,}}3,{f(.5-p)})$. Calcolare $P(X=1)$.', .8-p, rf'p_X(1)=p_{{10}}+p_{{11}}=0{{,}}3+{f(.5-p)}', 'Si somma sulle modalità di Y lasciando X fissata a uno. Le quattro masse sono positive e sommano a uno.', True)
        if k == 1:
            return C('Leggi condizionate da tabelle', 'condizionamento', f'Le masse congiunte $(p_{{00}},p_{{01}},p_{{10}},p_{{11}})$ sono $({f(p)},0{{,}}2,0{{,}}3,{f(.5-p)})$. Calcolare $P(Y=1\\mid X=1)$.', (.5-p)/(.8-p), rf'\frac{{p_{{11}}}}{{p_{{10}}+p_{{11}}}}=\frac{{{f(.5-p)}}}{{0{{,}}3+{f(.5-p)}}}', 'Il numeratore è la cella con entrambe le modalità uguali a uno. Il denominatore è la marginale di X uguale a uno.', True)
        if k == 2:
            cov=.2+.05*v
            return C('Covarianze dai momenti misti', 'covarianza', f'$E[X]=2$, $E[Y]={a}$, $E[XY]={f(2*a+cov)}$. Calcolare la covarianza.', cov, rf'\operatorname{{Cov}}(X,Y)={f(2*a+cov)}-2\cdot{a}', 'Si sottrae al momento misto il prodotto delle attese. Le informazioni fornite sono sufficienti senza conoscere l’intera legge congiunta.')
        if k == 3:
            cov=.5+.1*v
            return C('Varianze di somme dipendenti', 'somme', f'$\\operatorname{{Var}}(X)=4$, $\\operatorname{{Var}}(Y)=9$ e $\\operatorname{{Cov}}(X,Y)={f(cov)}$. Calcolare la varianza di $X+Y$.', 13+2*cov, rf'4+9+2\cdot{f(cov)}', 'Per una somma occorre aggiungere due volte la covarianza. Il termine non si elimina perché il problema non assume indipendenza.')
        if k == 4:
            rho=.1+.04*v
            return C('Correlazioni da covarianze', 'correlazione', f'$\\sigma_X=2$, $\\sigma_Y=3$ e $\\operatorname{{Cov}}(X,Y)={f(6*rho)}$. Calcolare la correlazione.', rho, rf'\rho=\frac{{{f(6*rho)}}}{{2\cdot3}}', 'La correlazione divide la covarianza per il prodotto delle deviazioni standard. Le unità si semplificano e il risultato resta tra meno uno e uno.')
        if k == 5:
            prob=.3+.02*v
            return C('Ripartizioni dei massimi', 'estremi', f'$X_1,\\dots,X_{{{a}}}$ sono indipendenti uniformi su $(0,1)$. Calcolare $P(\\max_i X_i\\le {f(prob)})$.', prob**a, rf'\prod_{{i=1}}^{{{a}}}P(X_i\le {f(prob)})={f(prob)}^{{{a}}}', 'Il massimo è sotto la soglia se lo sono tutte le variabili. Le probabilità coincidono perché le variabili hanno la stessa distribuzione.', True)
        if k == 6:
            prob=.3+.02*v
            return C('Code dei minimi', 'estremi', f'$X_1,\\dots,X_{{{a}}}$ sono indipendenti uniformi su $(0,1)$. Calcolare $P(\\min_i X_i>{f(prob)})$.', (1-prob)**a, rf'(1-{f(prob)})^{{{a}}}', 'Il minimo supera la soglia se tutte le variabili la superano. L’indipendenza permette il prodotto delle probabilità di coda.', True)
        if k == 7:
            return C('Attese totali su gruppi', 'totale', f'$P(G=0)=0{{,}}4$, $P(G=1)=0{{,}}6$, $E[Y\\mid G=0]={a}$, $E[Y\\mid G=1]={a+5}$. Calcolare $E[Y]$.', a+3, rf'E[Y]=0{{,}}4\cdot{a}+0{{,}}6\cdot{a+5}', 'Si fa la media delle medie condizionate con i pesi dei gruppi. La legge dell’attesa totale ricostruisce così la media complessiva.')
        if k == 8:
            return C('Scomposizioni della varianza totale', 'totale', f'$E[\\operatorname{{Var}}(Y\\mid X)]={a}$ e $\\operatorname{{Var}}(E[Y\\mid X])={a+2}$. Calcolare $\\operatorname{{Var}}(Y)$.', 2*a+2, rf'\operatorname{{Var}}(Y)={a}+{a+2}', 'La dispersione totale comprende variabilità entro i gruppi e variabilità tra le loro medie. La legge della varianza totale somma i due contributi.')
        return C('Covarianze di trasformazioni', 'covarianza', f'$\\operatorname{{Cov}}(X,Y)={a}$. Calcolare $\\operatorname{{Cov}}(2X+1,-3Y+4)$.', -6*a, rf'2\cdot(-3)\operatorname{{Cov}}(X,Y)=-6\cdot{a}', 'Le traslazioni non cambiano la covarianza. I due coefficienti moltiplicativi si moltiplicano tra loro e cambiano il segno in questo caso.')
    if j == 7:
        n=(a+3)**2
        sig=a+1
        if k == 0:
            return C('Errori standard delle medie', 'media-campionaria', f'Un campione i.i.d. ha $n={n}$ e deviazione standard della popolazione $\\sigma={sig}$. Calcolare $SE(\\bar X)$.', sig/sqrt(n), rf'\frac{{\sigma}}{{\sqrt n}}=\frac{{{sig}}}{{{a+3}}}', 'L’errore standard riguarda la distribuzione della media campionaria. Si divide la deviazione standard della popolazione per la radice della numerosità.')
        if k == 1:
            return C('Varianze delle medie campionarie', 'media-campionaria', f'Osservazioni i.i.d. hanno varianza ${9+a}$. Per $n={10+a}$, calcolare la varianza della media.', (9+a)/(10+a), rf'\operatorname{{Var}}(\bar X)=\frac{{{9+a}}}{{{10+a}}}', 'L’indipendenza elimina le covarianze nella somma. Dividere la somma per n comporta un fattore n al quadrato nella varianza, lasciando sigma quadro diviso n.')
        if k == 2:
            eps=2
            return C('Limiti di Chebyshev per le medie', 'chebyshev', f'Un campione i.i.d. di numerosità ${n}$ proviene da una popolazione di varianza 4. Quale limite superiore dà Chebyshev per $P(|\\bar X-\\mu|\\ge2)$?', 1/n, rf'\frac{{\sigma^2}}{{n\varepsilon^2}}=\frac4{{{n}\cdot4}}', 'Chebyshev usa la varianza della media e il quadrato della tolleranza. Il risultato è un limite superiore, non una probabilità esatta.', True)
        if k == 3:
            mu=20+v
            z=.5+.1*v
            threshold=mu+z*sig/sqrt(n)
            return C('Probabilità esatte per medie normali', 'tcl', f'Un campione normale i.i.d. ha $\\mu={mu}$, $\\sigma={sig}$ e $n={n}$. Calcolare $P(\\bar X>{f(threshold)})$ usando la soglia esatta ${mu}+{f(z)}\\cdot{sig}/{a+3}$.', norm.sf(z), rf'Z=\frac{{\bar X-{mu}}}{{{sig}/\sqrt{{{n}}}}},\qquad P=1-\Phi({f(z)})', 'La popolazione normale rende esatta la distribuzione della media. La soglia è costruita usando l’errore standard, quindi il valore standardizzato indicato è esatto.', True)
        if k == 4:
            size=40+v*5;p=.2
            return C('Varianze delle proporzioni', 'proporzioni', f'Un conteggio binomiale ha $n={size}$ e $p=0{{,}}2$. Calcolare la varianza di $\\hat p=K/n$.', p*(1-p)/size, rf'\operatorname{{Var}}(\hat p)=\frac{{0{{,}}2\cdot0{{,}}8}}{{{size}}}', 'Dividere K per n divide la sua varianza per n al quadrato. La varianza binomiale contiene già un fattore n, che si semplifica.')
        if k == 5:
            kobs=10+v
            z=(kobs+.5-20)/sqrt(16)
            return C('Correzioni di continuità binomiali', 'proporzioni', f'$K\\sim\\operatorname{{Bin}}(100,0{{,}}2)$. Approssimare $P(K\\le {kobs})$ con la normale, applicando la correzione di continuità.', norm.cdf(z), rf'z=\frac{{{kobs}+0{{,}}5-20}}{{\sqrt{{16}}}}={f(z)},\qquad P\approx\Phi({f(z)})', 'La media binomiale è venti e la varianza sedici. Per includere la massa sull’intero k si sposta il bordo a k più un mezzo.', True)
        if k == 6:
            return C('Numerosità per ridurre l’errore standard', 'media-campionaria', f'Con ${n}$ osservazioni l’errore standard della media è E. Quante osservazioni servono per ridurlo a $E/2$, mantenendo la stessa popolazione e il modello i.i.d.?', 4*n, rf'\frac{{\sigma}}{{\sqrt{{n_2}}}}=\frac12\frac{{\sigma}}{{\sqrt{{{n}}}}}\quad\Longrightarrow\quad n_2=4\cdot{n}', 'L’errore standard varia come l’inverso della radice della numerosità. Per dimezzarlo la radice deve raddoppiare, quindi la numerosità deve quadruplicare.')
        if k == 7:
            N=100+v*10;m=20
            return C('Correzioni per popolazioni finite', 'normale-campione', f'La popolazione finita ha $N={N}$ e varianza con divisore N pari a 25. Si estraggono 20 unità uniformemente senza reinserimento. Calcolare la varianza della media.', 25*(N-m)/(m*(N-1)), rf'\frac{{25}}{{20}}\frac{{{N}-20}}{{{N}-1}}', 'La varianza della media i.i.d. viene moltiplicata per la correzione finita. La convenzione del divisore N della varianza di popolazione determina il denominatore N meno uno.')
        if k == 8:
            size=8+v
            return C('Gradi di libertà nei campioni normali', 'normale-campione', f'Per un campione normale i.i.d. di ${size}$ osservazioni, quanti gradi di libertà ha $(n-1)S^2/\\sigma^2$?', size-1, rf'\nu=n-1={size}-1', 'La stima della media impone un vincolo agli scarti. La somma degli scarti quadratici normalizzata segue quindi una chi quadrato con n meno uno gradi di libertà.')
        threshold=10+v
        return C('Limiti di Markov', 'chebyshev', f'$Y\\ge0$ ha attesa 2. Quale limite superiore dà Markov per $P(Y\\ge {threshold})$?', 2/threshold, rf'P(Y\ge {threshold})\le\frac{{E[Y]}}{{{threshold}}}=\frac2{{{threshold}}}', 'La non negatività è l’ipotesi che permette di applicare Markov. Si divide l’attesa per la soglia positiva.', True)
    if j == 8:
        n=10+v
        if k == 0:
            bias=.2+.1*v
            return C('Distorsioni degli stimatori', 'eqm', f'Uno stimatore di $\\theta$ ha attesa $\\theta+{f(bias)}$. Calcolare la distorsione.', bias, rf'b(T)=E[T]-\theta=(\theta+{f(bias)})-\theta', 'La distorsione è uno scarto medio con segno. In questo caso lo stimatore sovrastima il parametro in media.')
        if k == 1:
            bias=.2+.1*v;vr=1+.1*v
            return C('Errori quadratici medi', 'eqm', f'Uno stimatore ha varianza ${f(vr)}$ e distorsione ${f(bias)}$. Calcolare il MSE.', vr+bias*bias, rf'MSE={f(vr)}+({f(bias)})^2', 'L’errore quadratico medio somma varianza e quadrato della distorsione. Il segno della distorsione non incide sul secondo termine.')
        if k == 2:
            total=30+3*v
            return C('Stime corrette delle varianze', 'varianza-corretta', f'Un campione di $n={n}$ ha somma degli scarti quadratici ${total}$. Calcolare la stima corretta della varianza.', total/(n-1), rf'S^2=\frac{{{total}}}{{{n}-1}}', 'La correzione di distorsione usa n meno uno. Dividere per n darebbe la varianza descrittiva, che sottostima in media la varianza della popolazione.')
        if k == 3:
            m=2+.2*v
            return C('Stime Poisson con i momenti', 'momenti', f'Un campione Poisson ha media osservata ${f(m)}$. Determinare la stima del parametro $\\lambda$ con il metodo dei momenti.', m, rf'E[X]=\lambda=\bar x\quad\Longrightarrow\quad\hat\lambda={f(m)}', 'Il primo momento della Poisson coincide con il parametro. Uguagliarlo al primo momento campionario fornisce direttamente la media osservata.')
        if k == 4:
            m=2+.2*v
            return C('Stime dei tassi esponenziali', 'momenti', f'Un campione esponenziale ha media osservata ${f(m)}$. Stimare il tasso $\\lambda$ con il metodo dei momenti.', 1/m, rf'\frac1\lambda=\bar x={f(m)}\quad\Longrightarrow\quad\hat\lambda=\frac1{{{f(m)}}}', 'Il parametro richiesto è il tasso. Poiché la media teorica è il suo reciproco, si inverte la media campionaria.')
        if k == 5:
            size=30+v;success=8+v
            return C('Massime verosimiglianze Bernoulli', 'verosimiglianza', f'In ${size}$ prove Bernoulli indipendenti si osservano ${success}$ successi. Calcolare lo stimatore di massima verosimiglianza di p.', success/size, rf'\ell(p)={success}\log p+{size-success}\log(1-p),\qquad\hat p=\frac{{{success}}}{{{size}}}', 'La derivata della log-verosimiglianza si annulla nella proporzione campionaria. Il numero di successi è interno ai possibili conteggi, quindi il massimo è interno.', True)
        if k == 6:
            mx=8+v
            return C('Massime verosimiglianze uniformi', 'uniforme', f'Un campione da $U(0,\\theta)$ ha $n={n}$ e massimo osservato ${mx}$. Calcolare la stima di massima verosimiglianza di $\\theta$.', mx, rf'L(\theta)\propto\theta^{{-{n}}}\mathbf1_{{\{{\theta\ge {mx}\}}}},\qquad\hat\theta={mx}', 'La verosimiglianza decresce sul supporto ammissibile del parametro. Il massimo si trova quindi nel più piccolo estremo che contiene tutte le osservazioni.')
        if k == 7:
            mx=8+v
            return C('Correzioni del massimo uniforme', 'uniforme', f'Un campione da $U(0,\\theta)$ ha $n={n}$ e massimo ${mx}$. Calcolare la stima corretta $\\tilde\\theta=(n+1)M/n$.', (n+1)*mx/n, rf'\tilde\theta=\frac{{{n+1}}}{{{n}}}\cdot{mx}', 'Il massimo sottostima in media l’estremo superiore. Il fattore n più uno diviso n elimina esattamente la distorsione.')
        if k == 8:
            total=30+3*v
            return C('Massime verosimiglianze della varianza normale', 'verosimiglianza', f'Un campione normale ha $n={n}$, media ignota e somma degli scarti quadratici dalla media pari a ${total}$. Calcolare la stima di massima verosimiglianza di $\\sigma^2$.', total/n, rf'\hat\sigma^2_{{ML}}=\frac1n\sum_i(x_i-\bar x)^2=\frac{{{total}}}{{{n}}}', 'Nel modello normale con media ignota la massima verosimiglianza usa il divisore n. La stima corretta della stessa varianza usa invece n meno uno.')
        return C('Precisione delle medie come stimatori', 'consistenza', f'Una popolazione ha varianza 9. Per una media di ${n}$ osservazioni i.i.d., calcolare il MSE come stimatore di $\\mu$.', 9/n, rf'MSE(\bar X)=\operatorname{{Var}}(\bar X)=\frac9{{{n}}}', 'La media campionaria è corretta. Il MSE coincide quindi con la sua varianza e tende a zero al crescere della numerosità.')
    if j == 9:
        n=(a+3)**2;sig=a+1;m=40+v
        if k == 0:
            return C('Semiampiezze per medie con sigma nota', 'media-nota', f'Un campione normale ha $n={n}$ e $\\sigma={sig}$ nota. Con quantile $z=1{{,}}96$, calcolare la semiampiezza dell’intervallo bilatero al 95%.', 1.96*sig/sqrt(n), rf'h=1{{,}}96\frac{{{sig}}}{{{a+3}}}', 'La semiampiezza è il quantile moltiplicato per l’errore standard. Qui la deviazione standard della popolazione è nota, quindi il quantile normale è appropriato.')
        if k == 1:
            return C('Estremi inferiori di intervalli normali', 'media-nota', f'Un campione normale ha $\\bar x={m}$, $n={n}$ e $\\sigma={sig}$ nota. Usando $z=1{{,}}96$, calcolare l’estremo inferiore dell’intervallo al 95%.', m-1.96*sig/sqrt(n), rf'L={m}-1{{,}}96\frac{{{sig}}}{{{a+3}}}', 'Si sottrae alla media campionaria il margine di errore. La radice della numerosità al denominatore è quella fornita dal campione.')
        if k == 2:
            size=10+v;qt=round(student.ppf(.975,size-1),4);s=3+v
            return C('Intervalli di Student con quantile fornito', 'student', f'Un campione normale ha $n={size}$ e $s={s}$. La deviazione standard della popolazione è ignota. Usare il quantile fornito $t_{{0,975;{size-1}}}={f(qt)}$ per calcolare la semiampiezza.', qt*s/sqrt(size), rf'h={f(qt)}\cdot {s}\cdot {size}^{{-1/2}}', 'La deviazione standard è stimata dal campione. Il quantile di Student con n meno uno gradi di libertà tiene conto di questa stima.')
        if k == 3:
            E=.5+.1*v
            return C('Pianificazioni di numerosità per medie', 'numerosita', f'Con $\\sigma=5$ nota e quantile $z=1{{,}}96$, scegliere la minima numerosità per una semiampiezza al più ${f(E)}$.', ceil((1.96*5/E)**2-1e-10), rf'n\ge\left(\frac{{1{{,}}96\cdot5}}{{{f(E)}}}\right)^2', 'Si risolve il vincolo sul margine di errore rispetto a n. L’arrotondamento deve avvenire verso l’alto per rispettare la semiampiezza massima.')
        if k == 4:
            size=200+v*20;success=60+5*v;p=success/size
            return C('Margini approssimati per proporzioni', 'proporzione', f'Si osservano ${success}$ successi in $n={size}$ prove. Calcolare la semiampiezza dell’intervallo di Wald al 95% usando $z=1{{,}}96$. I conteggi di successi e insuccessi sono adeguati.', 1.96*sqrt(p*(1-p)/size), rf'\hat p=\frac{{{success}}}{{{size}}},\qquad h=1{{,}}96\sqrt{{\frac{{\hat p(1-\hat p)}}{{{size}}}}}', 'Wald sostituisce p con la proporzione osservata nell’errore standard. È un intervallo approssimato; la richiesta dichiara conteggi sufficienti per l’esercizio.')
        if k == 5:
            size=20+v;p=(3+v)/size;z=1.96
            c=(p+z*z/(2*size))/(1+z*z/size)
            return C('Centri degli intervalli di Wilson', 'proporzione', f'Si osservano ${3+v}$ successi su ${size}$ prove. Con $z=1{{,}}96$, calcolare il centro dell’intervallo di Wilson.', c, rf'c=\frac{{\frac{{{3+v}}}{{{size}}}+\frac{{1{{,}}96^2}}{{2\cdot{size}}}}}{{1+\frac{{1{{,}}96^2}}{{{size}}}}}', 'Il centro di Wilson include un termine di correzione e non coincide in generale con la proporzione campionaria. Si applica la formula con il conteggio osservato.')
        if k == 6:
            size=10+v;s2=4+v;qhi=round(chi2.ppf(.975,size-1),4)
            return C('Estremi di intervalli per varianze', 'varianza', f'Un campione normale ha $n={size}$ e $s^2={s2}$. Usare $\\chi^2_{{0,975;{size-1}}}={f(qhi)}$ per calcolare l’estremo inferiore dell’intervallo al 95% per la varianza.', (size-1)*s2/qhi, rf'L=\frac{{({size}-1)\cdot{s2}}}{{{f(qhi)}}}', 'L’estremo inferiore usa il quantile chi quadrato maggiore al denominatore. Il numeratore è la somma degli scarti quadratici ricavata dalla varianza corretta.')
        if k == 7:
            n1,n2=20+v,30+v
            return C('Errori standard di differenze indipendenti', 'due-medie', f'Due campioni indipendenti hanno $n_1={n1}$, $n_2={n2}$ e varianze note 4 e 9. Calcolare l’errore standard di $\\bar X-\\bar Y$.', sqrt(4/n1+9/n2), rf'SE=\sqrt{{\frac4{{{n1}}}+\frac9{{{n2}}}}}', 'Per campioni indipendenti le varianze delle due medie si sommano anche quando si considera una differenza. La radice restituisce l’errore standard.')
        if k == 8:
            return C('Limiti superiori unilateri', 'numerosita', f'Un campione normale ha $\\bar x={m}$, $n={n}$ e $\\sigma={sig}$ nota. Usando $z_{{0,95}}=1{{,}}645$, calcolare il limite superiore unilatero al 95%.', m+1.645*sig/sqrt(n), rf'U={m}+1{{,}}645\frac{{{sig}}}{{{a+3}}}', 'La probabilità esclusa è tutta in una coda. Perciò si usa il quantile 0,95, invece di quello 0,975 dell’intervallo bilatero.')
        E=.04+.005*v
        return C('Pianificazioni prudenti per proporzioni', 'numerosita', f'Pianificare un intervallo normale al 95% per una proporzione ignota. Usare $z=1{{,}}96$ e $p(1-p)\\le1/4$. Qual è la minima numerosità per margine ${f(E)}$?', ceil(1.96**2/(4*E**2)-1e-10), rf'n\ge\frac{{1{{,}}96^2}}{{4\cdot{f(E)}^2}}', 'Il prodotto p per uno meno p ha massimo un quarto. Usare tale massimo fornisce una pianificazione prudente per il margine normale approssimato.')
    if j == 10:
        z=.5+.2*v
        if k == 0:
            n=25;sig=5;mu0=20;obs=mu0+z
            return C('Statistiche z per una media', 'media', f'Un campione normale ha $n=25$, $\\sigma=5$ nota e $\\bar x={f(obs)}$. Sotto $H_0:\\mu=20$, calcolare la statistica z.', z, rf'z=\frac{{{f(obs)}-20}}{{5/\sqrt{{25}}}}', 'L’errore standard sotto il modello è uno. La statistica misura lo scarto della media osservata dal valore nullo in unità di errore standard.')
        if k == 1:
            return C('Valori p normali bilateri', 'p-value', f'In un test z con alternativa bilatera si osserva $z={f(z)}$. Calcolare il valore p.', 2*norm.sf(abs(z)), rf'p=2[1-\Phi(|{f(z)}|)]', 'Si considerano entrambe le code perché l’alternativa ammette scostamenti positivi e negativi. La simmetria della normale permette di raddoppiare una sola coda.', True)
        if k == 2:
            return C('Valori p normali unilateri', 'p-value', f'In un test z con alternativa superiore si osserva $z={f(z)}$. Calcolare il valore p.', norm.sf(z), rf'p=1-\Phi({f(z)})', 'L’alternativa superiore considera scostamenti verso valori maggiori. Si calcola soltanto la coda a destra della statistica osservata.', True)
        if k == 3:
            size=10+v;obs=2+.2*v;s=2
            return C('Statistiche t per una media', 'media', f'Un campione normale ha $n={size}$, $\\bar x={f(obs)}$ e $s=2$, con sigma ignota. Sotto $H_0:\\mu=2$, calcolare la statistica t.', (obs-2)/(s/sqrt(size)), rf't=\frac{{{f(obs)}-2}}{{2/\sqrt{{{size}}}}}', 'La deviazione standard viene stimata dal campione. La statistica usa s e ha sotto la nulla una Student con n meno uno gradi di libertà.')
        if k == 4:
            size=100;p0=.5;ph=.55+.01*v
            return C('Test score sulle proporzioni', 'proporzioni', f'Per una proporzione si hanno $n={size}$, $\\hat p={f(ph)}$ e $H_0:p=0{{,}}5$. Calcolare la statistica score normale.', (ph-p0)/sqrt(p0*(1-p0)/size), rf'z=({f(ph)}-0{{,}}5)\sqrt{{4\cdot{size}}}', 'Il test score calcola la varianza sotto l’ipotesi nulla. Perciò al denominatore si usa p zero, non la proporzione osservata.')
        if k == 5:
            expected=20+v;obs=expected+a
            return C('Contributi alle statistiche chi quadrato', 'chi-quadrato', f'Una categoria ha conteggio osservato ${obs}$ e atteso ${expected}$. Calcolare il suo contributo alla statistica chi quadrato.', a*a/expected, rf'\frac{{(O-E)^2}}E=\frac{{({obs}-{expected})^2}}{{{expected}}}', 'Il contributo usa lo scarto al quadrato diviso per il conteggio atteso. La statistica completa somma questi contributi su tutte le categorie.')
        if k == 6:
            rows=2+v;cols=3
            return C('Gradi di libertà dei test di indipendenza', 'chi-quadrato', f'Un test di indipendenza usa una tabella ${rows}\\times3$ con conteggi attesi adeguati. Calcolare i gradi di libertà.', (rows-1)*2, rf'\nu=({rows}-1)(3-1)', 'I vincoli imposti dalle marginali riducono il numero di celle libere. Il prodotto del numero di righe meno uno per quello delle colonne meno uno dà i gradi di libertà.')
        if k == 7:
            beta=.1+.03*v
            return C('Potenze da errori di secondo tipo', 'errori', f'Per un’alternativa specifica un test ha probabilità di errore di secondo tipo $\\beta={f(beta)}$. Calcolare la potenza.', 1-beta, rf'1-\beta=1-{f(beta)}', 'La potenza è la probabilità di rifiutare sotto l’alternativa specificata. È il complementare della probabilità di non rifiuto sotto la stessa alternativa.', True)
        if k == 8:
            m=2+v
            return C('Correzioni di Bonferroni', 'multipli', f'Si vogliono eseguire ${m}$ test controllando l’errore familiare al più a $0{{,}}05$ con Bonferroni. Quale livello si assegna a ciascun test?', .05/m, rf'\alpha_{{\mathrm{{singolo}}}}=\frac{{0{{,}}05}}{{{m}}}', 'Bonferroni ripartisce il livello complessivo tra i confronti. Il controllo non richiede l’indipendenza dei test.', True)
        return C('Conteggi attesi sotto indipendenza', 'chi-quadrato', f'In una tabella con totale 200, una riga ha totale ${40+v*5}$ e una colonna ha totale 80. Calcolare il conteggio atteso della loro cella sotto indipendenza.', (40+v*5)*80/200, rf'E_{{ij}}=\frac{{n_{{i\cdot}}n_{{\cdot j}}}}n=\frac{{{40+v*5}\cdot80}}{{200}}', 'L’indipendenza fattorizza le frequenze relative marginali. Moltiplicando per il totale si ottiene il conteggio atteso della cella.')
    if j == 11:
        if k == 0:
            xx=10+v;xy=2*xx+a
            return C('Pendenze dei minimi quadrati', 'retta', f'Per dati appaiati $S_{{xx}}={xx}$ e $S_{{xy}}={xy}$. Calcolare la pendenza della retta con intercetta.', xy/xx, rf'b=\frac{{S_{{xy}}}}{{S_{{xx}}}}=\frac{{{xy}}}{{{xx}}}', 'Il denominatore misura la variabilità del predittore ed è positivo. La pendenza è il rapporto tra somma dei prodotti centrati e somma dei quadrati centrati.')
        if k == 1:
            return C('Intercette delle rette', 'retta', f'La retta dei minimi quadrati ha pendenza $b=2$, $\\bar x={a}$ e $\\bar y={3*a+1}$. Calcolare l’intercetta.', a+1, rf'a_0=\bar y-b\bar x={3*a+1}-2\cdot{a}', 'La retta con intercetta passa per il punto delle due medie. Questa condizione determina l’intercetta una volta nota la pendenza.')
        if k == 2:
            return C('Residui delle osservazioni', 'residui', f'La retta stimata è $\\hat y=1+2x$. Per un’osservazione con $x={a}$ e $y={3*a+2}$, calcolare il residuo.', a+1, rf'\hat y=1+2\cdot{a}={2*a+1},\qquad e={3*a+2}-{2*a+1}', 'Il residuo è il valore osservato meno quello adattato. Un residuo positivo indica un’osservazione sopra la retta.')
        if k == 3:
            sst=100+v*10;sse=20+v*2
            return C('Coefficienti di determinazione', 'residui', f'Una regressione lineare semplice con intercetta ha $SST={sst}$ e $SSE={sse}$. Calcolare $R^2$.', 1-sse/sst, rf'R^2=1-\frac{{{sse}}}{{{sst}}}', 'Si sottrae a uno la quota residua della variabilità. La scomposizione usata vale per l’adattamento dei minimi quadrati con intercetta.', True)
        if k == 4:
            xx=25;yy=36;xy=3+v
            return C('Correlazioni di Pearson', 'pearson', f'$S_{{xx}}=25$, $S_{{yy}}=36$, $S_{{xy}}={xy}$. Calcolare la correlazione campionaria.', xy/30, rf'r=\frac{{{xy}}}{{\sqrt{{25\cdot36}}}}=\frac{{{xy}}}{{30}}', 'La correlazione standardizza la somma dei prodotti centrati. La radice al denominatore è positiva e il segno dipende da S xy.')
        if k == 5:
            n=10+v;sse=3*(n-2)
            return C('Varianze residue corrette', 'inferenza', f'Una regressione con intercetta e una pendenza usa $n={n}$ osservazioni e ha $SSE={sse}$. Calcolare $s_e^2$.', 3, rf's_e^2=\frac{{SSE}}{{n-2}}=\frac{{{sse}}}{{{n}-2}}', 'Il modello stima due coefficienti. Perciò rimangono n meno due gradi di libertà per stimare la varianza degli errori.')
        if k == 6:
            se=2+v;xx=25+v
            return C('Errori standard delle pendenze', 'inferenza', f'In una regressione semplice $s_e={se}$ e $S_{{xx}}={xx}$. Calcolare $SE(b)$.', se/sqrt(xx), rf'SE(b)=\frac{{s_e}}{{\sqrt{{S_{{xx}}}}}}=\frac{{{se}}}{{\sqrt{{{xx}}}}}', 'La dispersione degli errori aumenta l’incertezza della pendenza. Una maggiore variabilità del predittore, a parità di altre condizioni, la riduce.')
        if k == 7:
            slope=.3+.1*v;seb=.2
            return C('Test sulle pendenze', 'inferenza', f'Si stima $b={f(slope)}$ con $SE(b)=0{{,}}2$. Sotto $H_0:\\beta=0$, calcolare la statistica t.', slope/seb, rf't=\frac{{{f(slope)}-0}}{{0{{,}}2}}', 'Si confronta la stima della pendenza con il valore nullo. Il rapporto è espresso in unità del suo errore standard.')
        if k == 8:
            n=10+v;se=2
            return C('Incertezza della risposta media', 'previsione', f'Una regressione ha $n={n}$ e $s_e=2$. Nel punto $x_0=\\bar x$, calcolare l’errore standard della risposta media stimata.', se/sqrt(n), rf'SE(\hat y_0)=2\sqrt{{\frac1{{{n}}}+0}}', 'Nel centro dei dati il termine dovuto alla distanza dalla media di x è zero. Rimane la componente legata alla stima della media.')
        n=10+v
        return C('Incertezza di nuove osservazioni', 'previsione', f'Una regressione ha $n={n}$ e $s_e=2$. Nel punto $x_0=\\bar x$, calcolare l’errore standard di previsione per una nuova osservazione indipendente.', 2*sqrt(1+1/n), rf'SE_{{\mathrm{{pred}}}}=2\sqrt{{1+\frac1{{{n}}}}}', 'La nuova osservazione aggiunge la propria variabilità residua. Per questo compare il termine uno oltre all’incertezza della risposta media.')
    raise ValueError((j,k,v))
