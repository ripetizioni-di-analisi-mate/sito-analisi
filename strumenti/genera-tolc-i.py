"""Prima banca originale TOLC-I: rigenerazione deterministica dei materiali."""
from pathlib import Path
import json

ROOT = Path('src/content')
THEORY = {}
QUESTIONS = {}

def chapter(slug, title, summary, body, rows):
    THEORY[slug] = (title, summary, body.strip())
    QUESTIONS[slug] = []
    for line in rows.strip().splitlines():
        if not line.strip(): continue
        parts = line.split('|')
        assert len(parts) == 7, (slug, line)
        question, answer, *rest = parts
        choices = [answer] + rest[:4]
        explanation = rest[4]
        assert len(set(choices)) == 5, (slug, choices)
        QUESTIONS[slug].append((question, choices, explanation))

chapter('aritmetica-e-algebra', 'Aritmetica e algebra per il TOLC-I',
'Frazioni, percentuali, potenze, polinomi, equazioni e disequazioni: scegliere il metodo prima di calcolare.', r'''
Il punto di partenza è riconoscere la struttura del quesito. Scrivi i vincoli sulle incognite, semplifica e controlla il risultato nelle condizioni iniziali. Nei quiz le alternative aiutano a verificare un calcolo, ma non sostituiscono il ragionamento.

## Numeri, frazioni e percentuali

Per sommare frazioni si usa un denominatore comune; per dividerle si moltiplica per il reciproco della seconda, che deve essere diversa da zero. La frazione $\frac{3}{4}$ corrisponde a $0{,}75$, cioè al $75\%$. Se una quantità $P$ aumenta del $r\%$, diventa $P(1+r/100)$; se diminuisce, diventa $P(1-r/100)$.

Due variazioni successive si **moltiplicano**: dopo un aumento del $20\%$ e uno sconto del $20\%$, rimane $1{,}2\cdot0{,}8=0{,}96$ del prezzo iniziale. Per le proporzioni $a:b=c:d$ vale $ad=bc$, con denominatori non nulli.

## Potenze, radici e valore assoluto

Per basi e denominatori ammissibili valgono $a^m a^n=a^{m+n}$, $(a^m)^n=a^{mn}$ e $a^{-n}=1/a^n$. La radice quadrata reale richiede un radicando non negativo. Ricorda $\sqrt{x^2}=|x|$: per $x=-3$ il risultato è $3$.

L'equazione $|x-a|=r$, con $r\geq0$, individua i punti a distanza $r$ da $a$: $x=a-r$ oppure $x=a+r$. La disequazione $|x-a|<r$ dà $a-r<x<a+r$ quando $r>0$.

## Polinomi e fattorizzazioni

Le identità utili sono $(a+b)^2=a^2+2ab+b^2$ e $a^2-b^2=(a-b)(a+b)$. Raccogli prima un eventuale fattore comune. Un prodotto è nullo quando almeno un fattore è nullo; una frazione è nulla quando il numeratore è nullo e il denominatore non lo è.

Semplificare $\frac{x^2-9}{x-3}$ produce $x+3$ **solo per $x\ne3$**. Il valore escluso non rientra dopo la semplificazione.

## Equazioni e sistemi

In $ax+b=0$, se $a\ne0$, la soluzione è $x=-b/a$. Se $a=0$ bisogna distinguere l'identità dall'impossibilità. Per $ax^2+bx+c=0$, con $a\ne0$, il discriminante è $\Delta=b^2-4ac$: ci sono due radici reali distinte se $\Delta>0$, una doppia se $\Delta=0$, nessuna se $\Delta<0$.

Per un sistema lineare puoi usare sostituzione o eliminazione. In un problema assegna un'incognita a ogni quantità e traduci tutte le condizioni: una sola equazione spesso non basta.

## Disequazioni e radicali

Moltiplicare o dividere per un numero negativo **inverte** il verso. Per prodotti e frazioni prepara una tabella dei segni. Gli zeri del denominatore sono sempre esclusi; quelli del numeratore si includono solo nelle disequazioni non strette.

Per $\sqrt{x+1}=x-1$ imponi $x\geq1$, poi eleva al quadrato. Le candidate sono $x=0$ e $x=3$, ma solo $3$ soddisfa il vincolo e l'equazione iniziale. Il controllo finale elimina le soluzioni estranee.

## Metodo da quiz

Stima prima segno e ordine di grandezza. Elimina alternative incompatibili con il dominio. Risolvi senza sviluppare prodotti inutili e sostituisci il risultato nell'espressione di partenza. Se il calcolo si allunga, lascia il quesito e torna a rivederlo prima di chiudere la sezione.
''', r'''
Quanto vale $\frac{3}{4}+\frac{5}{6}$?|$\frac{19}{12}$|$\frac{8}{10}$|$\frac{4}{5}$|$\frac{15}{24}$|$\frac{17}{12}$|Il denominatore comune è 12: le frazioni diventano $9/12$ e $10/12$. La loro somma è $19/12$, maggiore di uno come suggerisce la stima iniziale.
Un prezzo di 80 euro aumenta del 20% e poi diminuisce del 20%. Qual è il prezzo finale?|76,80 euro|80 euro|64 euro|96 euro|72 euro|I fattori successivi sono 1,20 e 0,80. Si ottiene $80\cdot1{,}20\cdot0{,}80=76{,}80$. Le due variazioni percentuali hanno basi differenti e non si annullano.
Per $x\ne0$, quanto vale $\frac{x^5 x^{-2}}{x}$?|$x^2$|$x^3$|$x^4$|$x$|$1$|Nel prodotto gli esponenti si sommano e nel quoziente si sottraggono: $5-2-1=2$. La condizione $x\ne0$ resta necessaria.
Quali sono le soluzioni di $x^2-5x+6=0$?|$2$ e $3$|$-2$ e $-3$|$1$ e $6$|$-1$ e $-6$|Solo $2$|Il polinomio si scompone in $(x-2)(x-3)$. Per la legge di annullamento del prodotto si ha $x=2$ oppure $x=3$.
Risolvi $\frac{x-1}{x+2}>0$.|$x<-2$ oppure $x>1$|$-2<x<1$|$x>1$ soltanto|$x\geq1$|Tutti i reali tranne $-2$|Numeratore e denominatore devono avere lo stesso segno. Sono entrambi negativi per $x<-2$ e positivi per $x>1$. Si escludono il polo e lo zero perché il confronto è stretto.
Qual è la soluzione di $\sqrt{x+1}=x-1$?|$x=3$|$x=0$|$x=1$|$x=0$ oppure $x=3$|Nessuna soluzione|Il secondo membro deve essere non negativo: $x\geq1$. Dopo il quadrato si ottiene $x(x-3)=0$; il vincolo elimina zero e la verifica conferma tre.
Nel sistema $x+y=7$, $2x-y=5$, quanto vale $x$?|$4$|$3$|$2$|$5$|$6$|Sommando membro a membro si elimina $y$ e si ottiene $3x=12$. Quindi $x=4$ e, per controllo, $y=3$.
Quali valori soddisfano $\lvert2x-1\rvert=5$?|$x=-2$ oppure $x=3$|$x=2$ oppure $x=-3$|Solo $x=3$|$x=-3$ oppure $x=3$|$x=0$ oppure $x=5$|Il valore assoluto vale cinque se l'argomento vale cinque oppure meno cinque. Le equazioni $2x-1=5$ e $2x-1=-5$ danno tre e meno due.
Quanto vale $\frac{x^2-9}{x-3}$ per $x\ne3$?|$x+3$|$x-3$|$x^2+3$|$1$|$x+3$ anche per $x=3$|La differenza di quadrati è $(x-3)(x+3)$. Si può cancellare il fattore $x-3$ solo mantenendo l'esclusione di tre dal dominio.
Per quali valori $-3x+6\leq0$?|$x\geq2$|$x\leq2$|$x>2$|$x<2$|$x\geq-2$|Portando sei a destra si ha $-3x\leq-6$. Dividendo per meno tre il verso si inverte: $x\geq2$. L'uguaglianza è inclusa.
''')

chapter('geometria', 'Geometria per il TOLC-I',
'Aree e volumi, triangoli, rette, circonferenze e coniche: passare dalle figure alle equazioni.', r'''
Un piccolo disegno con dati e unità evita molti errori. Una lunghezza è espressa in metri, un'area in metri quadrati e un volume in metri cubi. Se tutte le lunghezze si moltiplicano per $k>0$, aree e volumi si moltiplicano per $k^2$ e $k^3$.

## Angoli e triangoli

La somma degli angoli interni di un triangolo è $180^\circ$. In un triangolo rettangolo $a^2+b^2=c^2$, dove $c$ è l'ipotenusa. L'area è metà del prodotto tra base e altezza relativa. Triangoli simili hanno angoli uguali e lati corrispondenti proporzionali.

Un triangolo con cateti 6 e 8 ha ipotenusa 10, area 24 e perimetro 24. Un lato non può essere maggiore o uguale alla somma degli altri due: la disuguaglianza stretta distingue un triangolo da una figura degenerata.

## Figure piane

Per un rettangolo $A=bh$; per un parallelogramma vale la stessa formula con l'altezza perpendicolare alla base. Nel trapezio $A=(B+b)h/2$. Un cerchio di raggio $r$ ha area $\pi r^2$ e circonferenza $2\pi r$.

Per un settore di angolo $\alpha$ in gradi, l'area è $\alpha\pi r^2/360$. Non confondere il cerchio, che è una superficie, con la circonferenza, che ne è il bordo.

## Solidi

Un prisma o un cilindro ha volume $A_bh$. Una piramide o un cono con la stessa base e altezza ha volume $A_bh/3$. Per una sfera $V=4\pi r^3/3$ e superficie $4\pi r^2$.

Il volume del cilindro di raggio 2 e altezza 5 è $20\pi$. La sua superficie totale è $2\pi r^2+2\pi rh=28\pi$. Prima di applicare la formula scegli se il problema chiede capacità o rivestimento.

## Coordinate, distanze e rette

Tra $A(x_1,y_1)$ e $B(x_2,y_2)$ la distanza è $\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$; il punto medio ha coordinate $((x_1+x_2)/2,(y_1+y_2)/2)$. Una retta non verticale si scrive $y=mx+q$: $m$ è la pendenza, $q$ l'intercetta.

Due rette non verticali sono parallele se hanno la stessa pendenza; sono perpendicolari se $m_1m_2=-1$. Le rette verticali si scrivono $x=k$ e richiedono attenzione a parte. L'intersezione di due rette è la soluzione del sistema delle loro equazioni.

## Circonferenza e coniche

La circonferenza di centro $(a,b)$ e raggio $r$ ha equazione $(x-a)^2+(y-b)^2=r^2$. Completa i quadrati per leggere centro e raggio da una forma sviluppata.

La parabola $y=ax^2+bx+c$, con $a\ne0$, ha asse $x=-b/(2a)$; sostituendo questa ascissa trovi l'ordinata del vertice. L'ellisse $x^2/a^2+y^2/b^2=1$ ha semiassi $a,b>0$; nell'iperbole $x^2/a^2-y^2/b^2=1$ i segni dei termini quadratici sono opposti.

## Controllo del risultato

Verifica unità, positività e scala. Se raddoppi il raggio, l'area del cerchio quadruplica. Nella geometria analitica sostituisci sempre le coordinate trovate nelle equazioni iniziali: devono soddisfarle entrambe.
''', r'''
Un triangolo rettangolo ha cateti 6 e 8. Quanto misura l'ipotenusa?|$10$|$14$|$\sqrt{14}$|$48$|$7$|Per Pitagora l'ipotenusa è $\sqrt{6^2+8^2}=\sqrt{100}=10$. È correttamente maggiore di ciascun cateto.
Qual è l'area di un cerchio di raggio 3?|$9\pi$|$6\pi$|$3\pi$|$18\pi$|$27\pi$|L'area è $\pi r^2$, quindi $9\pi$. Il valore $6\pi$ sarebbe invece la lunghezza della circonferenza.
Un cono ha raggio di base 2 e altezza 9. Qual è il volume?|$12\pi$|$36\pi$|$6\pi$|$18\pi$|$24\pi$|Si applica $V=\pi r^2h/3=\pi\cdot4\cdot9/3=12\pi$. Il volume è un terzo di quello del cilindro con la stessa base e altezza.
Qual è la distanza tra $(1,2)$ e $(4,6)$?|$5$|$7$|$25$|$\sqrt{7}$|$4$|Le differenze tra le coordinate sono 3 e 4. La distanza euclidea è $\sqrt{3^2+4^2}=5$.
Quale retta passa per $(0,2)$ e $(2,6)$?|$y=2x+2$|$y=3x+2$|$y=2x-2$|$y=x+2$|$y=4x+2$|La pendenza è $(6-2)/(2-0)=2$ e il punto con ascissa zero dà l'intercetta 2. Ne segue $y=2x+2$.
Qual è il coefficiente angolare di una retta perpendicolare a $y=2x+1$?|$-\frac12$|$2$|$-2$|$\frac12$|$0$|Per rette non verticali perpendicolari il prodotto delle pendenze vale meno uno. Da $2m=-1$ si ricava $m=-1/2$.
La circonferenza $(x-2)^2+(y+1)^2=9$ ha centro e raggio:|Centro $(2,-1)$, raggio 3|Centro $(-2,1)$, raggio 3|Centro $(2,1)$, raggio 9|Centro $(2,-1)$, raggio 9|Centro $(-2,-1)$, raggio 3|La forma standard è $(x-a)^2+(y-b)^2=r^2$. Si leggono $a=2$, $b=-1$ e $r=\sqrt9=3$.
Qual è il vertice della parabola $y=x^2-4x+3$?|$(2,-1)$|$(-2,-1)$|$(2,3)$|$(4,3)$|$(1,0)$|L'ascissa del vertice è $-b/(2a)=2$. Sostituendo si trova $4-8+3=-1$, quindi il vertice è $(2,-1)$.
Due triangoli simili hanno rapporto tra i lati corrispondenti pari a 3. Qual è il rapporto tra le aree, nello stesso ordine?|$9$|$3$|$6$|$27$|$\sqrt3$|L'area dipende da due lunghezze. Una similitudine di rapporto 3 moltiplica sia la base sia l'altezza per 3, quindi l'area per 9.
Quanto vale il semiasse maggiore dell'ellisse $x^2/25+y^2/9=1$?|$5$|$25$|$3$|$10$|$\sqrt{34}$|I denominatori sono i quadrati dei semiassi: si ottengono 5 e 3. Il maggiore è 5, mentre 10 è la lunghezza dell'intero asse maggiore.
''')

chapter('funzioni-e-grafici', 'Funzioni, esponenziali e logaritmi',
'Dominio, lettura dei grafici, trasformazioni ed equazioni esponenziali e logaritmiche.', r'''
Una funzione associa a ogni valore ammesso di $x$ un solo valore $f(x)$. Leggere un grafico significa collegare ascisse e ordinate, distinguendo zeri, segno, crescenza e valori esclusi. Per il TOLC-I sono centrali le funzioni elementari e le loro trasformazioni.

## Dominio e zeri

Un denominatore deve essere diverso da zero, un radicando di indice pari non negativo e l'argomento di un logaritmo strettamente positivo. Per $f(x)=\sqrt{x-2}/(x-5)$ il dominio è $[2,5)\cup(5,+\infty)$. Gli zeri si ottengono da $f(x)=0$ all'interno del dominio.

In un grafico uno zero è un punto sull'asse orizzontale. L'intercetta verticale, quando esiste, è invece $f(0)$.

## Grafici e trasformazioni

La funzione $f(x)+k$ trasla il grafico in verticale di $k$; $f(x-h)$ lo trasla a destra di $h$. La funzione $-f(x)$ riflette rispetto all'asse orizzontale, mentre $f(-x)$ riflette rispetto a quello verticale.

Per esempio $y=(x-2)^2+1$ ha vertice $(2,1)$. Una funzione crescente conserva l'ordine degli argomenti, una decrescente lo inverte. Non confondere crescente con positiva: $y=x-100$ è crescente anche dove assume valori negativi.

## Potenze ed esponenziali

Per $a>0$, $a\ne1$, l'esponenziale $a^x$ è positivo per ogni reale e passa per $(0,1)$. È crescente per $a>1$ e decrescente per $0<a<1$. Se due potenze hanno la stessa base ammissibile, l'uguaglianza equivale all'uguaglianza degli esponenti.

Da $2^{x+1}=16=2^4$ segue $x=3$. Nella disequazione $(1/2)^x>1/4=(1/2)^2$, la base minore di uno inverte il confronto: $x<2$.

## Logaritmi

Il logaritmo $\log_a b$ è l'esponente da dare ad $a$ per ottenere $b$: $\log_a b=c$ equivale ad $a^c=b$. Si richiedono $a>0$, $a\ne1$, $b>0$.

Per argomenti positivi, $\log_a(uv)=\log_a u+\log_a v$, $\log_a(u/v)=\log_a u-\log_a v$ e $\log_a(u^k)=k\log_a u$. Non esiste una proprietà analoga per la somma $u+v$.

## Equazioni e disequazioni logaritmiche

Prima scrivi il dominio, poi usa le proprietà. Da $\log_2(x-1)=3$ segue $x-1=8$, quindi $x=9$, che soddisfa $x>1$. Da $\log_{1/2}(x)>1$ segue $0<x<1/2$ perché il logaritmo è decrescente.

Se sommi due logaritmi, devi mantenere positivi **entrambi** gli argomenti: la positività del solo prodotto non basta. Dopo aver risolto, interseca sempre con il dominio.

## Composizione e controllo

La composizione $(f\circ g)(x)$ significa $f(g(x))$. Per $f(x)=x^2$ e $g(x)=x+1$, ottieni $(x+1)^2$; invertendo l'ordine trovi $x^2+1$.

Controlla il risultato con valori facili, come zero e uno, e con il comportamento atteso del grafico. Le due espressioni di una composizione possono coincidere in qualche punto senza rappresentare la stessa funzione.
''', r'''
Qual è il dominio di $f(x)=\frac{\sqrt{x-2}}{x-5}$?|$[2,5)\cup(5,+\infty)$|$[2,+\infty)$|$(2,+\infty)$|$(-\infty,5)$|$[5,+\infty)$|Il radicando impone $x\geq2$ e il denominatore impone $x\ne5$. Le due condizioni vanno soddisfatte contemporaneamente.
Risolvi $2^{x+1}=16$.|$x=3$|$x=4$|$x=2$|$x=8$|$x=-3$|Si riscrive 16 come $2^4$. L'esponenziale in base due è iniettivo: $x+1=4$, quindi $x=3$.
Quanto vale $\log_2 32$?|$5$|$4$|$16$|$2$|$\frac15$|Per definizione il logaritmo è l'esponente necessario a ottenere 32 dalla base 2. Poiché $2^5=32$, il risultato è cinque.
Risolvi $\log_3(x-1)=2$.|$x=10$|$x=7$|$x=9$|$x=3$|$x=8$|Il dominio è $x>1$. La definizione di logaritmo dà $x-1=3^2=9$, quindi $x=10$, valore ammissibile.
Per quali valori $(1/2)^x>1/4$?|$x<2$|$x>2$|$x\leq2$|$x\geq2$|$x< -2$|Si scrive $1/4=(1/2)^2$. La funzione esponenziale con base compresa tra zero e uno è decrescente, quindi il verso del confronto tra esponenti si inverte.
Il grafico $y=(x-3)^2+2$ ha vertice:|$(3,2)$|$(-3,2)$|$(3,-2)$|$(-3,-2)$|$(0,11)$|La forma $y=(x-h)^2+k$ permette di leggere direttamente il vertice $(h,k)$. Qui $h=3$ e $k=2$.
Se $f(x)=x^2$ e $g(x)=x+1$, quanto vale $(f\circ g)(2)$?|$9$|$5$|$6$|$4$|$8$|La funzione interna si applica per prima: $g(2)=3$. Poi $f(3)=9$. Il valore cinque corrisponderebbe alla composizione inversa.
Per $a,b>0$, quale identità è sempre vera?|$\ln(ab)=\ln a+\ln b$|$\ln(a+b)=\ln a+\ln b$|$\ln(ab)=\ln a\ln b$|$\ln(a/b)=\ln b-\ln a$|$\ln(a^2)=\ln a+2$|Il logaritmo trasforma il prodotto in somma. Le condizioni di positività rendono definiti tutti i logaritmi presenti nell'identità corretta.
Qual è il dominio di $\ln(x^2-4)$?|$x<-2$ oppure $x>2$|$-2<x<2$|Tutti i reali tranne $-2$ e $2$|$x\geq2$|Tutti i reali|L'argomento deve essere positivo: $x^2-4>0$. Fattorizzando $(x-2)(x+2)$ si trova che il prodotto è positivo all'esterno delle radici, escluse.
Una funzione è crescente. Da $a<b$ quale relazione segue necessariamente?|$f(a)\leq f(b)$|$f(a)>f(b)$|$f(a)>0$|$f(b)=0$|$a>0$|La crescenza in senso non stretto conserva l'ordine: $f(a)\leq f(b)$. Non impone che i valori della funzione siano positivi.
''')

chapter('trigonometria-e-statistica', 'Trigonometria, statistica e combinatoria',
'Angoli, formule goniometriche, medie, varianza, frequenze e conteggi essenziali.', r'''
Questo capitolo raccoglie due strumenti ricorrenti nei quiz: relazioni tra angoli e lunghezze, e lettura quantitativa dei dati. In entrambi i casi è utile riconoscere una struttura semplice prima di eseguire i calcoli.

## Radianti e valori notevoli

Un angolo giro misura $2\pi$ radianti e $360^\circ$. Quindi $180^\circ=\pi$ e $30^\circ=\pi/6$. Nel triangolo rettangolo seno e coseno sono i rapporti tra il cateto opposto o adiacente e l'ipotenusa. La tangente è $\sin x/\cos x$ quando il denominatore è diverso da zero.

I valori da ricordare sono $\sin(\pi/6)=1/2$, $\cos(\pi/3)=1/2$ e $\sin(\pi/4)=\cos(\pi/4)=\sqrt2/2$. La circonferenza goniometrica determina i segni nei quattro quadranti.

## Identità e formule

L'identità fondamentale è $\sin^2x+\cos^2x=1$. Le formule di addizione sono $\sin(a+b)=\sin a\cos b+\cos a\sin b$ e $\cos(a+b)=\cos a\cos b-\sin a\sin b$.

Ponendo $a=b=x$ ricavi $\sin(2x)=2\sin x\cos x$ e $\cos(2x)=1-2\sin^2x=2\cos^2x-1$. Le formule di bisezione derivano da queste identità; il segno di seno o coseno va scelto secondo il quadrante.

## Equazioni e triangoli

L'equazione $\sin x=1/2$ ha soluzioni $x=\pi/6+2k\pi$ e $x=5\pi/6+2k\pi$, con $k$ intero. In un intervallo limitato seleziona solo quelle comprese nell'intervallo. Per le disequazioni usa il grafico o la circonferenza goniometrica.

In un triangolo qualsiasi, il teorema dei seni è $a/\sin\alpha=b/\sin\beta=c/\sin\gamma$. Il teorema del coseno è $c^2=a^2+b^2-2ab\cos\gamma$, dove $\gamma$ è l'angolo compreso tra $a$ e $b$.

## Frequenze, media e varianza

La frequenza relativa è il rapporto tra il numero di osservazioni di una modalità e il totale. La media aritmetica è $\bar x=(x_1+\cdots+x_n)/n$; per gruppi di numerosità diverse serve la media ponderata.

La varianza descrittiva con divisore $n$ è $\sigma^2=\frac1n\sum_i(x_i-\bar x)^2$. Non è la media degli scarti, che è zero. Se aggiungi una costante a tutti i dati la media aumenta della stessa costante, mentre la varianza resta uguale.

## Permutazioni e combinazioni

Le permutazioni di $n$ oggetti distinti sono $n!$. Se scegli $k$ elementi distinti senza considerare l'ordine, usi $\binom nk=n!/(k!(n-k)!)$. Se conta anche l'ordine, il numero è $n!/(n-k)!$.

Per scegliere una coppia tra cinque persone ci sono dieci possibilità. Per assegnare presidente e vicepresidente tra le stesse persone ce ne sono venti, perché scambiare i ruoli cambia il risultato.

## Lettura di tabelle e istogrammi

Controlla titolo, unità e scala degli assi. Una percentuale va rapportata al gruppo a cui si riferisce. In un istogramma con classi di ampiezza diversa, la frequenza è rappresentata dall'area del rettangolo: l'altezza è una densità di frequenza.

Per la probabilità in un modello con esiti equiprobabili si usa il rapporto tra esiti favorevoli ed esiti possibili. Per eventi non equiprobabili questa scorciatoia non è giustificata.
''', r'''
Quanto vale $\sin(\pi/6)$?|$\frac12$|$\frac{\sqrt3}{2}$|$\frac{\sqrt2}{2}$|$1$|$0$|L'angolo $\pi/6$ corrisponde a 30 gradi. Il seno di questo angolo notevole è un mezzo.
Quanti radianti sono $150^\circ$?|$\frac{5\pi}{6}$|$\frac{3\pi}{2}$|$\frac{\pi}{6}$|$\frac{5\pi}{3}$|$\frac{2\pi}{3}$|Si moltiplicano i gradi per $\pi/180$: $150\pi/180=5\pi/6$. Il risultato deve essere compreso tra $\pi/2$ e $\pi$.
Quali sono le soluzioni di $\sin x=1/2$ in $[0,2\pi)$?|$\pi/6$ e $5\pi/6$|$\pi/6$ e $7\pi/6$|$\pi/3$ e $2\pi/3$|Solo $\pi/6$|$5\pi/6$ e $11\pi/6$|Il seno è positivo nel primo e nel secondo quadrante. L'angolo di riferimento è $\pi/6$, quindi le due soluzioni sono $\pi/6$ e $\pi-\pi/6$.
Quale espressione coincide con $\sin(2x)$ per ogni $x$ reale?|$2\sin x\cos x$|$2\sin x$|$\sin^2x$|$\cos^2x-\sin^2x$|$\sin x+\cos x$|La formula di duplicazione del seno è $\sin(2x)=2\sin x\cos x$. L'espressione con la differenza dei quadrati rappresenta invece $\cos(2x)$.
Un triangolo rettangolo ha ipotenusa 10 e un angolo acuto di $30^\circ$. Quanto misura il cateto opposto a quell'angolo?|$5$|$10\sqrt3$|$5\sqrt3$|$10$|$20$|Il cateto opposto è il prodotto tra ipotenusa e seno dell'angolo: $10\sin30^\circ=10/2=5$.
Qual è la media aritmetica di $2,4,6,8$?|$5$|$4$|$6$|$20$|$\frac52$|La somma è venti e i dati sono quattro. La media è $20/4=5$, compresa tra il valore minimo e quello massimo.
Una classe di 20 studenti ha media 24 e una di 10 studenti media 27. Qual è la media complessiva?|$25$|$25{,}5$|$24$|$26$|$51$|Occorre pesare le medie per le numerosità: $(20\cdot24+10\cdot27)/30=750/30=25$. La media semplice delle due medie non è appropriata.
Qual è la varianza descrittiva, con divisore $n$, dei dati $1,3$?|$1$|$2$|$0$|$4$|$\frac12$|La media è due e gli scarti sono meno uno e uno. I quadrati sono entrambi uno: la loro media è uno. Con il divisore $n-1$ si avrebbe un'altra quantità.
Quante coppie non ordinate si possono scegliere tra 5 persone distinte?|$10$|$20$|$25$|$5$|$120$|La scelta non dipende dall'ordine: si usa $\binom52=5\cdot4/2=10$. Dividere per due evita di contare due volte la stessa coppia.
In un campione di 80 oggetti, 12 sono difettosi. Qual è la frequenza relativa dei difettosi?|$15\%$|$12\%$|$6{,}67\%$|$20\%$|$18\%$|La frequenza relativa è $12/80=0{,}15$, che corrisponde al quindici per cento. Il totale di riferimento è l'intero campione di ottanta oggetti.
''')

chapter('logica', 'Logica e ragionamento per il TOLC-I',
'Implicazioni, negazioni, quantificatori, insiemi e problemi di deduzione.', r'''
Nei quesiti di logica conta quello che segue dalle premesse, anche quando la conclusione sembra poco plausibile nella vita quotidiana. Separa le informazioni esplicite dalle ipotesi che stai aggiungendo tu.

## Enunciati e connettivi

Un enunciato ha un valore di verità. La congiunzione $p\land q$ è vera se entrambe le parti sono vere; la disgiunzione inclusiva $p\lor q$ è vera se almeno una lo è. La frase «o uno o l'altro, ma non entrambi» esprime invece una disgiunzione esclusiva.

Le leggi di De Morgan danno $\neg(p\land q)=(\neg p)\lor(\neg q)$ e $\neg(p\lor q)=(\neg p)\land(\neg q)$. La negazione non consiste nel cambiare una parola mantenendo invariata la struttura.

## Implicazione e contrapposta

«Se $p$, allora $q$» è falsa solo quando $p$ è vera e $q$ falsa. Da $p\Rightarrow q$ e $p$ segue $q$; da $p\Rightarrow q$ e $\neg q$ segue $\neg p$. La contrapposta $\neg q\Rightarrow\neg p$ è equivalente all'implicazione iniziale.

Il contrario $q\Rightarrow p$ non è equivalente. Da «se piove, il cortile è bagnato» non segue che ogni cortile bagnato sia stato bagnato dalla pioggia.

## Necessario e sufficiente

Se $p\Rightarrow q$, $p$ è condizione sufficiente per $q$ e $q$ è necessaria per $p$. «Per entrare occorre il badge» significa che entrare implica avere il badge; non garantisce che il badge da solo permetta l'ingresso.

«Solo se» introduce la condizione necessaria. «Se e solo se» afferma entrambe le implicazioni. Riscrivere la frase con una freccia prima di guardare le opzioni riduce le inversioni.

## Quantificatori e sillogismi

La negazione di «tutti gli A sono B» è «esiste almeno un A che non è B». La negazione di «esiste un A che è B» è «nessun A è B». «Alcuni» significa almeno uno; non significa necessariamente che altri non abbiano la proprietà.

Da «tutti gli A sono B» e «nessun B è C» segue «nessun A è C». Da «alcuni B sono C» non puoi concludere che alcuni A siano C: potrebbero trovarsi nella parte di B esterna ad A.

## Insiemi e conteggi

Per due insiemi finiti $|A\cup B|=|A|+|B|-|A\cap B|$. Sottrarre l'intersezione evita di contare due volte chi appartiene a entrambi. Disegna le zone prima di inserire i numeri.

Se venti studenti fanno sport, quindici musica e cinque entrambe le attività, chi ne pratica almeno una è trenta. Per trovare chi non ne pratica nessuna devi conoscere anche il totale degli studenti.

## Deduzioni e sequenze

Negli ordinamenti trasforma ogni vincolo in una relazione, come $A<B<C$. Nei problemi con abbinamenti prepara una tabella e procedi per esclusione. Nei quiz con numeri controlla differenze, rapporti e alternanze; una regola deve spiegare tutti i termini forniti.

Una sequenza finita ammette in astratto molte continuazioni: nei quesiti di allenamento si cerca la regola semplice coerente con i dati. Rileggi la domanda per distinguere «deve essere vero», «può essere vero» e «è impossibile».
''', r'''
Qual è la negazione di «Tutti gli studenti hanno il badge»?|Almeno uno studente non ha il badge|Nessuno studente ha il badge|Tutti gli studenti non hanno il badge|Almeno uno studente ha il badge|Esattamente uno studente ha il badge|Per negare una proprietà universale basta un controesempio: uno studente senza badge. Affermare che nessuno lo abbia è una frase più forte e non equivalente.
Se piove, il campo è bagnato. Il campo non è bagnato. Cosa segue necessariamente?|Non piove|Piove|Il campo è coperto|Ha smesso di piovere|Non si può dedurre nulla sulla pioggia|Si applica la contrapposta: se pioggia implica campo bagnato, l'assenza di campo bagnato implica assenza di pioggia. Non serve aggiungere informazioni sul tempo precedente.
Tutti gli A sono B. Nessun B è C. Quale conclusione è necessaria?|Nessun A è C|Tutti i C sono A|Alcuni A sono C|Tutti i B sono A|Esiste almeno un A|L'insieme A è contenuto in B, che è disgiunto da C. Quindi anche A è disgiunto da C. Le premesse non affermano che A contenga elementi.
«Per entrare è necessario avere il badge». Quale situazione contraddice la frase?|Una persona entra senza badge|Una persona ha il badge ma non entra|Una persona non entra e non ha il badge|Una persona entra con il badge|Nessuno entra|Il badge è una condizione necessaria all'ingresso: chi entra deve averlo. Avere il badge senza entrare non viola la condizione, che non è dichiarata sufficiente.
In un gruppo di 40 persone, 22 studiano inglese, 18 francese e 7 entrambe le lingue. Quante non studiano nessuna delle due?|$7$|$0$|$15$|$11$|$33$|Almeno una lingua è studiata da $22+18-7=33$ persone. Le altre sono $40-33=7$. L'intersezione va sottratta una volta.
Anna arriva prima di Bruno. Carla arriva dopo Bruno. Quale ordine è obbligato?|Anna, Bruno, Carla|Bruno, Anna, Carla|Carla, Bruno, Anna|Anna, Carla, Bruno|Bruno, Carla, Anna|Le due premesse si traducono in Anna prima di Bruno e Bruno prima di Carla. Concatenando i vincoli si ottiene l'unico ordine possibile dei tre.
Qual è la negazione di «Marco studia e Lucia lavora»?|Marco non studia oppure Lucia non lavora|Marco non studia e Lucia non lavora|Marco studia oppure Lucia lavora|Marco studia e Lucia non lavora|Marco non studia e Lucia lavora|La negazione di una congiunzione è la disgiunzione delle negazioni. Basta che una delle due affermazioni originali sia falsa perché la congiunzione risulti falsa.
Tutti gli ingegneri del gruppo conoscono Python. Alcune persone del gruppo conoscono Python. Quale conclusione segue necessariamente?|Nessuna delle altre quattro conclusioni è garantita|Tutte le persone che conoscono Python sono ingegneri|Alcuni ingegneri non conoscono Python|Nel gruppo esiste almeno un ingegnere|Nessun ingegnere conosce Python|Sapere che esistono persone che conoscono Python non prova che siano ingegneri. La premessa universale sugli ingegneri non afferma la loro esistenza e non consente di invertire l'implicazione.
Completa la sequenza seguendo la regola «aggiungi i numeri pari consecutivi»: 3, 5, 9, 15, ...|$23$|$21$|$22$|$24$|$30$|Le differenze sono due, quattro e sei. La regola dichiarata richiede poi di aggiungere otto: $15+8=23$.
Una scatola contiene 3 palline rosse e 4 blu. Quante palline devi estrarre senza guardare, senza reinserimento, per essere certo di averne due dello stesso colore?|$3$|$2$|$4$|$5$|$7$|Con due estrazioni potresti avere un colore per ciascuna pallina. Alla terza, essendoci solo due colori, almeno un colore compare due volte: è il principio dei cassetti.
''')

chapter('fisica', 'Fisica nella sezione Scienze del TOLC-I',
'Misure, meccanica, fluidi, calore, ottica ed elettricità con formule e controlli dimensionali.', r'''
La sezione Scienze comprende sia fisica sia chimica. In fisica prepara il modello, converti le unità nel Sistema internazionale e scrivi la relazione prima di sostituire i numeri. Le formule servono a descrivere condizioni precise.

## Misure e vettori

La velocità si misura in metri al secondo, l'accelerazione in metri al secondo quadrato e la forza in newton, con $1\,\mathrm N=1\,\mathrm{kg\,m/s^2}$. Per passare da chilometri orari a metri al secondo si divide per 3,6.

Massa e temperatura sono scalari; spostamento, velocità e forza sono vettori. Per sommare due vettori perpendicolari di moduli 3 e 4, il modulo della risultante è 5. Vettori opposti di uguale modulo si annullano.

## Cinematica e dinamica

Nel moto rettilineo uniforme $s=s_0+vt$. Con accelerazione costante $v=v_0+at$ e $s-s_0=v_0t+at^2/2$. La velocità media è spostamento diviso intervallo di tempo; non è in generale la media aritmetica di due velocità.

La prima legge di Newton riguarda l'assenza di forza risultante; la seconda è $\vec F_{\rm ris}=m\vec a$; la terza riguarda forze uguali e opposte su **corpi diversi**. Il peso vicino alla superficie terrestre è $mg$. La quantità di moto è $m\vec v$.

## Lavoro, energia e fluidi

Per una forza costante il lavoro è $Fs\cos\theta$; l'energia cinetica è $mv^2/2$ e la potenza media è lavoro diviso tempo. Il lavoro della risultante è la variazione di energia cinetica. In assenza di lavoro di forze non conservative si conserva l'energia meccanica.

La pressione è forza normale divisa per area. In un fluido in quiete la differenza di pressione a profondità $h$ è $\rho gh$. La spinta di Archimede è pari al peso del fluido spostato. L'acqua a profondità maggiore esercita pressione maggiore, a parità delle altre condizioni.

## Temperatura e termodinamica

La temperatura assoluta è $T=t_{\rm Celsius}+273{,}15$. Il calore necessario senza cambiamento di fase è $Q=mc\Delta T$; durante un passaggio di stato si usa il calore latente. Nei gas ideali $pV=nRT$, con temperatura in kelvin.

Nella convenzione in cui $L$ è il lavoro compiuto dal gas, il primo principio è $\Delta U=Q-L$. Una macchina termica non può trasformare ciclicamente tutto il calore assorbito da un'unica sorgente in lavoro: il rendimento è minore di uno per una macchina reale.

## Ottica geometrica

Nella riflessione l'angolo riflesso è uguale a quello incidente, misurato rispetto alla normale. Nella rifrazione $n_1\sin\theta_1=n_2\sin\theta_2$. L'indice di rifrazione è $n=c/v$: la luce viaggia più lentamente in un mezzo con indice maggiore.

Per una lente sottile $1/f=1/p+1/q$, con le convenzioni di segno appropriate. Una lente convergente può produrre un'immagine reale per un oggetto oltre il fuoco. Uno specchio piano produce un'immagine virtuale alla stessa distanza dietro lo specchio.

## Elettricità e magnetismo

La forza di Coulomb tra cariche puntiformi ha modulo $k|q_1q_2|/r^2$. Il campo elettrico è forza per unità di carica di prova; un condensatore soddisfa $Q=CV$. Per un resistore ohmico $V=RI$ e la potenza elettrica è $VI$.

In serie si sommano le resistenze, in parallelo si sommano i reciproci. Una carica in moto subisce in un campo magnetico una forza di modulo $|q|vB\sin\theta$, perpendicolare alla velocità. Le onde elettromagnetiche si propagano anche nel vuoto, dove $c=\lambda f$.
''', r'''
A quanti metri al secondo corrispondono 72 km/h?|$20\,\mathrm{m/s}$|$72\,\mathrm{m/s}$|$25{,}92\,\mathrm{m/s}$|$2\,\mathrm{m/s}$|$200\,\mathrm{m/s}$|Per convertire da chilometri orari a metri al secondo si divide per 3,6. Quindi $72/3{,}6=20$.
Un corpo parte da fermo con accelerazione costante $2\,\mathrm{m/s^2}$. Quanto spazio percorre in 3 s?|$9\,\mathrm m$|$6\,\mathrm m$|$18\,\mathrm m$|$3\,\mathrm m$|$12\,\mathrm m$|Con velocità iniziale nulla lo spostamento è $at^2/2$. Sostituendo i dati si ha $2\cdot3^2/2=9$ metri.
Una forza risultante di 12 N agisce su una massa di 3 kg. Quanto vale l'accelerazione?|$4\,\mathrm{m/s^2}$|$36\,\mathrm{m/s^2}$|$9\,\mathrm{m/s^2}$|$0{,}25\,\mathrm{m/s^2}$|$15\,\mathrm{m/s^2}$|La seconda legge di Newton dà $a=F/m=12/3=4$. Si usa la forza risultante, come specifica il testo.
Quanto vale l'energia cinetica di una massa di 2 kg che viaggia a 3 m/s?|$9\,\mathrm J$|$6\,\mathrm J$|$18\,\mathrm J$|$3\,\mathrm J$|$12\,\mathrm J$|L'energia cinetica è $mv^2/2$. Il quadrato riguarda la velocità: $2\cdot9/2=9$ joule.
In acqua con densità $1000\,\mathrm{kg/m^3}$, quale aumento di pressione si ha scendendo di 2 m? Usa $g=10\,\mathrm{m/s^2}$.|$20000\,\mathrm{Pa}$|$2000\,\mathrm{Pa}$|$200\,\mathrm{Pa}$|$100000\,\mathrm{Pa}$|$5000\,\mathrm{Pa}$|La variazione idrostatica è $\rho gh=1000\cdot10\cdot2=20000$ pascal. Non si somma la pressione atmosferica perché si chiede l'aumento.
Un gas ideale si espande a temperatura costante da 2 L a 4 L. Come cambia la pressione?|Si dimezza|Raddoppia|Rimane costante|Quadruplica|Si riduce a un quarto|A temperatura e quantità di gas costanti, $pV$ è costante. Se il volume raddoppia, la pressione deve dimezzarsi.
Un gas assorbe 500 J di calore e compie 200 J di lavoro. Quanto varia l'energia interna?|$+300\,\mathrm J$|$+700\,\mathrm J$|$-300\,\mathrm J$|$-700\,\mathrm J$|$0\,\mathrm J$|Con il lavoro positivo quando compiuto dal gas, il primo principio è $\Delta U=Q-L$. Si ottiene $500-200=300$ joule.
Un resistore da 6 ohm è sottoposto a 12 V. Quale corrente lo attraversa?|$2\,\mathrm A$|$72\,\mathrm A$|$0{,}5\,\mathrm A$|$6\,\mathrm A$|$18\,\mathrm A$|Per la legge di Ohm $I=V/R$. Quindi $I=12/6=2$ ampere, assumendo il comportamento ohmico indicato dal testo.
La distanza tra due cariche puntiformi raddoppia. Come cambia il modulo della forza di Coulomb?|Diventa un quarto|Si dimezza|Raddoppia|Quadruplica|Resta invariato|La forza è inversamente proporzionale al quadrato della distanza. Sostituire $r$ con $2r$ introduce un fattore $1/4$.
La luce entra dall'aria in un mezzo di indice 1,5. Quanto vale la velocità nel mezzo? Usa $c=3\cdot10^8\,\mathrm{m/s}$.|$2\cdot10^8\,\mathrm{m/s}$|$4{,}5\cdot10^8\,\mathrm{m/s}$|$3\cdot10^8\,\mathrm{m/s}$|$1{,}5\cdot10^8\,\mathrm{m/s}$|$0{,}5\cdot10^8\,\mathrm{m/s}$|Per definizione $n=c/v$, quindi $v=c/n$. Dividendo tre per 1,5 si ottiene due, e la velocità è minore che nel vuoto.
''')

chapter('chimica', 'Chimica nella sezione Scienze del TOLC-I',
'Atomi, legami, formule, mole, reazioni, composti organici, soluzioni e ossidoriduzione.', r'''
La chimica del TOLC-I richiede di interpretare formule e reazioni, riconoscere la struttura della materia e svolgere semplici calcoli quantitativi. Prima distingui la quantità richiesta: massa, moli e concentrazione non sono intercambiabili.

## Atomo e tavola periodica

Il nucleo contiene protoni positivi e neutroni privi di carica; gli elettroni hanno carica negativa. Il numero atomico $Z$ conta i protoni, il numero di massa $A$ è la somma di protoni e neutroni. In un atomo neutro protoni ed elettroni sono in ugual numero.

Gli isotopi hanno lo stesso numero atomico e diverso numero di neutroni. Gli elementi della stessa colonna della tavola periodica hanno spesso comportamento chimico simile, legato agli elettroni più esterni.

## Legami, ioni e molecole

Un catione ha perso elettroni, un anione ne ha acquistati. Nel legame ionico agisce l'attrazione tra ioni di carica opposta; nel legame covalente due atomi condividono elettroni. Un composto ionico come NaCl non è costituito da molecole isolate nel cristallo.

L'acqua è una sostanza molecolare polare. L'aria è una miscela, composta soprattutto da azoto e ossigeno: non ha una formula chimica unica come una sostanza pura.

## Formule e bilanciamento

In $\mathrm{H_2O}$ l'indice due riguarda gli atomi di idrogeno. In $2\mathrm{H_2O}$ il coefficiente due moltiplica l'intera formula. Bilanciare significa conservare il numero di atomi di ogni elemento e, nelle equazioni ioniche, la carica.

Nella reazione $2\mathrm{H_2}+\mathrm{O_2}\to2\mathrm{H_2O}$ reagiscono due moli di idrogeno per ogni mole di ossigeno. Per bilanciare cambia i coefficienti, mai gli indici delle formule.

## Mole e stechiometria

Una mole contiene il numero di Avogadro di entità, circa $6{,}022\cdot10^{23}$. La relazione tra massa e quantità di sostanza è $n=m/M$, dove $M$ è la massa molare in grammi per mole se $m$ è in grammi.

In 36 grammi d'acqua, usando $M=18\,\mathrm{g/mol}$, ci sono due moli di molecole. Per una reazione bilanciata passa dalle masse alle moli, usa il rapporto tra coefficienti e torna alla massa solo alla fine. Con più reagenti verifica quale si esaurisce per primo.

## Carbonio e soluzioni

Il carbonio forma quattro legami nei composti organici semplici. Gli alcani aciclici saturi hanno formula $\mathrm{C_nH_{2n+2}}$; un alchene aciclico con un solo doppio legame ha $\mathrm{C_nH_{2n}}$. Riconosci i gruppi elementari, come il gruppo ossidrile negli alcoli.

La concentrazione molare è $c=n/V$ con volume della soluzione in litri. In una diluizione senza reazioni le moli di soluto restano costanti: $c_1V_1=c_2V_2$. Il volume richiesto è quello finale della soluzione.

## Acidi, basi e ossidoriduzioni

Il pH è $-\log_{10}[\mathrm{H_3O^+}]$ nella consueta approssimazione per soluzioni diluite. Una soluzione con concentrazione di ioni idronio $10^{-3}\,\mathrm{mol/L}$ ha pH 3. A $25^\circ\mathrm C$, l'acqua neutra ha pH circa 7.

L'ossidazione è perdita di elettroni, la riduzione è acquisto di elettroni. Il numero di ossidazione aumenta nell'ossidazione. Nella combustione completa di un idrocarburo in ossigeno i prodotti sono anidride carbonica e acqua; la disponibilità di ossigeno è una condizione essenziale.
''', r'''
Un atomo neutro ha numero atomico 8 e numero di massa 18. Quanti neutroni contiene?|$10$|$8$|$18$|$26$|$16$|I neutroni sono la differenza tra numero di massa e numero atomico: $18-8=10$. Il numero otto conta invece protoni ed elettroni dell'atomo neutro.
Due isotopi dello stesso elemento differiscono per:|Numero di neutroni|Numero di protoni|Numero atomico|Simbolo dell'elemento|Carica del protone|Gli isotopi hanno lo stesso numero di protoni e quindi lo stesso numero atomico. Cambia il numero di neutroni, e di conseguenza il numero di massa.
Quante moli di acqua ci sono in 36 g? Assumi massa molare 18 g/mol.|$2\,\mathrm{mol}$|$18\,\mathrm{mol}$|$0{,}5\,\mathrm{mol}$|$648\,\mathrm{mol}$|$36\,\mathrm{mol}$|La quantità di sostanza è $n=m/M=36/18=2$ moli. La massa molare converte i grammi in moli.
Nella reazione $2\mathrm{H_2}+\mathrm{O_2}\to2\mathrm{H_2O}$, con 3 mol di ossigeno e idrogeno in eccesso, quante moli d'acqua si formano?|$6\,\mathrm{mol}$|$3\,\mathrm{mol}$|$1{,}5\,\mathrm{mol}$|$9\,\mathrm{mol}$|$2\,\mathrm{mol}$|I coefficienti indicano due moli d'acqua per ogni mole di ossigeno. Con tre moli di ossigeno si producono sei moli d'acqua, perché l'idrogeno non limita la reazione.
Qual è la concentrazione di una soluzione che contiene 0,5 mol di soluto in 2 L di soluzione?|$0{,}25\,\mathrm{mol/L}$|$1\,\mathrm{mol/L}$|$4\,\mathrm{mol/L}$|$0{,}5\,\mathrm{mol/L}$|$2{,}5\,\mathrm{mol/L}$|La concentrazione molare è il rapporto tra moli di soluto e volume finale della soluzione in litri: $0{,}5/2=0{,}25$ moli per litro.
Una soluzione diluita ha $[\mathrm{H_3O^+}]=10^{-3}\,\mathrm{mol/L}$. Quanto vale approssimativamente il pH?|$3$|$-3$|$11$|$7$|$10^{-3}$|Dalla definizione $\mathrm{pH}=-\log_{10}[\mathrm{H_3O^+}]$ si ottiene $-(-3)=3$. La soluzione è acida.
Durante un'ossidazione una specie chimica:|Perde elettroni|Acquista elettroni|Perde necessariamente protoni|Diminuisce sempre il numero di ossidazione|Diventa sempre neutra|L'ossidazione corrisponde alla perdita di elettroni e all'aumento del numero di ossidazione. La riduzione è il processo opposto.
Qual è la formula del metano?|$\mathrm{CH_4}$|$\mathrm{CO_2}$|$\mathrm{C_2H_6}$|$\mathrm{CH_3OH}$|$\mathrm{C_2H_4}$|Il metano è l'alcano con un solo atomo di carbonio. Il carbonio è legato a quattro idrogeni; l'etano ha invece due atomi di carbonio.
In un cristallo di cloruro di sodio, il legame prevalente tra sodio e cloro è:|Ionico|Covalente apolare|Metallico|Un legame tra molecole di NaCl isolate|Nucleare|Il cristallo è un reticolo di cationi sodio e anioni cloruro, tenuto insieme dall'attrazione elettrostatica tra cariche opposte.
Portando da 100 mL a 500 mL il volume di una soluzione 1 mol/L, senza perdere soluto, quale concentrazione si ottiene?|$0{,}2\,\mathrm{mol/L}$|$5\,\mathrm{mol/L}$|$1\,\mathrm{mol/L}$|$0{,}5\,\mathrm{mol/L}$|$0{,}02\,\mathrm{mol/L}$|Le moli di soluto restano costanti. Si usa $c_2=c_1V_1/V_2=1\cdot100/500=0{,}2$ moli per litro, con volumi espressi nella stessa unità.
''')

chapter('comprensione-verbale', 'Comprensione verbale per il TOLC-I',
'Tesi, informazioni esplicite, inferenze e connettivi, con brani originali e domande commentate.', r'''
La comprensione verbale verifica come leggi e colleghi le informazioni. La risposta deve essere sostenuta dal brano: una frase plausibile o vera in generale può essere comunque sbagliata se non deriva dal testo.

## Prima la domanda, poi il brano

Leggi rapidamente la consegna per capire se cerca un dato, la tesi, una deduzione o il significato di una parola. Poi leggi il testo intero, individuando argomento e passaggi principali. Tornare al punto pertinente è più efficace che affidarsi al ricordo di una parola isolata.

Distingui «secondo il testo» da «secondo le tue conoscenze». Le domande qui raccolte riguardano brani originali di allenamento, non quesiti ufficiali CISIA.

## Informazioni esplicite e inferenze

Un'informazione esplicita è affermata direttamente. Un'inferenza combina elementi del testo senza aggiungere ipotesi non giustificate. Se un esperimento ha coinvolto solo volontari adulti, non puoi estendere automaticamente i risultati ai bambini.

Controlla i quantificatori: «alcuni» non significa «tutti»; «spesso» non significa «sempre». Le alternative assolute richiedono un sostegno altrettanto forte nel brano.

## Tesi ed esempi

La tesi è l'idea centrale che l'autore sostiene. Un esempio la illustra, un dato può sostenerla, un'obiezione la mette alla prova. Una buona sintesi conserva il rapporto fra queste parti e non trasforma un dettaglio nell'argomento principale.

Un titolo efficace riguarda l'intero testo. Un titolo corretto per un singolo periodo può essere troppo ristretto per il brano completo.

## Connettivi

«Tuttavia» e «eppure» introducono un contrasto. «Dunque» e «pertanto» annunciano una conclusione. «Poiché» e «perché» possono introdurre una causa. «Purché» esprime una condizione.

Sostituisci mentalmente il connettivo con una parafrasi. Se la relazione logica cambia, l'alternativa non è equivalente. Fai attenzione anche ai riferimenti di pronomi come «questo», «esso» e «tale».

## Correlazione e causalità

Se due fenomeni variano insieme, non segue automaticamente che uno causi l'altro. Potrebbe esserci una terza variabile o un diverso verso della relazione. Un confronto tra gruppi diversi richiede attenzione alle condizioni di partenza.

Un testo può segnalare un limite senza negare il valore di un risultato. «Non basta a dimostrare» è diverso da «dimostra che è falso»: conservare questa differenza è essenziale nelle inferenze.

## Una procedura in tre passaggi

Individua la frase o il collegamento che giustifica la risposta. Elimina le alternative che contraddicono il testo, aggiungono informazioni o cambiano la forza dell'affermazione. Rileggi infine la domanda: nelle consegne negative si cerca l'affermazione non sostenuta.

Annota dopo l'allenamento il tipo di errore: dato ignorato, quantificatore, relazione logica o inferenza eccessiva. Il ripasso è più utile se corregge il processo di lettura, oltre alla singola risposta.
''', r'''
Leggi: «Un comune ha esteso l'orario della biblioteca per tre mesi. Gli ingressi serali sono aumentati, mentre quelli mattutini sono rimasti stabili. L'indagine non ha misurato il tempo trascorso a leggere». Quale dato è esplicito?|Gli ingressi serali sono aumentati|È aumentato il tempo medio di lettura|Gli ingressi mattutini sono diminuiti|Tutti i cittadini leggono di più|L'apertura è stata estesa per un anno|Il brano afferma direttamente l'aumento degli ingressi serali. Il tempo di lettura non è stato misurato e non può essere ricavato dal solo numero di ingressi.
Leggi: «Un comune ha esteso l'orario della biblioteca per tre mesi. Gli ingressi serali sono aumentati, mentre quelli mattutini sono rimasti stabili. L'indagine non ha misurato il tempo trascorso a leggere». Quale conclusione non è sostenuta?|Il tempo medio di lettura è aumentato|La rilevazione riguarda tre mesi|Gli accessi del mattino sono stabili|La biblioteca ha ampliato l'orario|Gli accessi serali sono cresciuti|Il tempo di lettura è esplicitamente escluso dalla misurazione. Tutte le altre alternative riprendono informazioni contenute nel brano.
Leggi: «Un comune ha esteso l'orario della biblioteca per tre mesi. Gli ingressi serali sono aumentati, mentre quelli mattutini sono rimasti stabili. L'indagine non ha misurato il tempo trascorso a leggere». A cosa si riferisce «quelli»?|Agli ingressi|Ai comuni|Ai libri|Ai tre mesi|Agli orari di lettura individuali|Il pronome riprende il sostantivo ingressi, confrontando gli accessi serali con quelli mattutini. Non si riferisce a oggetti o durate diversi.
Leggi: «Un comune ha esteso l'orario della biblioteca per tre mesi. Gli ingressi serali sono aumentati, mentre quelli mattutini sono rimasti stabili. L'indagine non ha misurato il tempo trascorso a leggere». Quale titolo è più aderente?|Più ingressi serali dopo l'ampliamento dell'orario|Dimostrato l'aumento della lettura tra tutti i cittadini|La chiusura delle biblioteche al mattino|Un anno di nuove biblioteche|Il calo degli accessi serali|Il titolo corretto riassume intervento e risultato effettivamente misurato. Gli altri introducono effetti non verificati, durate inesatte o fatti contrari al testo.
Leggi: «Un comune ha esteso l'orario della biblioteca per tre mesi. Gli ingressi serali sono aumentati, mentre quelli mattutini sono rimasti stabili. L'indagine non ha misurato il tempo trascorso a leggere». Quale nuova rilevazione permetterebbe di studiare il limite dichiarato?|Misurare la durata delle sessioni di lettura|Contare soltanto le porte della biblioteca|Rilevare il colore delle pareti|Contare di nuovo i mesi dell'anno|Misurare soltanto l'altezza degli scaffali|Il limite riguarda il tempo trascorso a leggere. Una rilevazione della durata delle sessioni aggiungerebbe proprio l'informazione assente, mentre le altre misure non affrontano il problema.
Leggi: «Un'indagine rileva che i pendolari che usano la bicicletta dichiarano maggiore benessere. Poiché i partecipanti hanno scelto autonomamente il mezzo, il risultato non dimostra da solo che la bicicletta sia la causa del benessere». Qual è il punto centrale?|L'associazione osservata non basta a provare una causa|La bicicletta riduce certamente il benessere|Il mezzo è stato assegnato a sorte|Tutti i pendolari usano la bicicletta|Il benessere non è stato rilevato|Il testo distingue l'associazione statistica dalla prova di causalità. La scelta autonoma del mezzo può accompagnarsi a differenze tra partecipanti che il confronto non controlla.
Leggi: «Un'indagine rileva che i pendolari che usano la bicicletta dichiarano maggiore benessere. Poiché i partecipanti hanno scelto autonomamente il mezzo, il risultato non dimostra da solo che la bicicletta sia la causa del benessere». Che funzione ha «poiché»?|Introduce la ragione della cautela interpretativa|Introduce una conclusione causale certa|Indica un'alternativa esclusiva|Introduce una successione di date|Nega l'esistenza dei partecipanti|La proposizione introdotta da poiché spiega perché il risultato non basta a dimostrare una causa. Il connettivo collega una ragione metodologica alla cautela della conclusione.
Leggi: «Un'indagine rileva che i pendolari che usano la bicicletta dichiarano maggiore benessere. Poiché i partecipanti hanno scelto autonomamente il mezzo, il risultato non dimostra da solo che la bicicletta sia la causa del benessere». Quale affermazione contraddice il testo?|Il mezzo di trasporto è stato assegnato casualmente|Il mezzo è stato scelto dai partecipanti|Si rileva un'associazione con il benessere dichiarato|La causalità non è dimostrata dal solo risultato|Lo studio riguarda pendolari|L'assegnazione casuale è incompatibile con la scelta autonoma specificata nel testo. Le altre affermazioni ne riprendono informazioni o cautele esplicite.
Leggi: «Un'indagine rileva che i pendolari che usano la bicicletta dichiarano maggiore benessere. Poiché i partecipanti hanno scelto autonomamente il mezzo, il risultato non dimostra da solo che la bicicletta sia la causa del benessere». Che cosa significa «non dimostra da solo»?|Servono altre evidenze per sostenere la causalità|La causalità è certamente impossibile|Il risultato è necessariamente inventato|Non esiste alcuna associazione|Il benessere è identico per tutti|La frase limita la forza della prova disponibile. Non dimostra che il rapporto causale sia falso, ma afferma che i dati descritti non sono sufficienti per stabilirlo.
Leggi: «Un'indagine rileva che i pendolari che usano la bicicletta dichiarano maggiore benessere. Poiché i partecipanti hanno scelto autonomamente il mezzo, il risultato non dimostra da solo che la bicicletta sia la causa del benessere». Quale sintesi conserva il significato?|Tra i ciclisti intervistati si osserva maggiore benessere, con un limite nell'interpretazione causale|La bicicletta causa sempre benessere per chiunque|Lo studio dimostra che ogni mezzo produce lo stesso effetto|I partecipanti non potevano scegliere il mezzo|Lo studio non ha raccolto alcuna informazione sul benessere|La sintesi corretta conserva sia l'associazione rilevata sia la cautela metodologica. Le altre alterano la forza della conclusione o contraddicono informazioni esplicite.
''')

chapter('inglese', 'Inglese per il TOLC-I',
'Tempi verbali, domande, pronomi, preposizioni, confronti e lessico in trenta quiz commentati.', r'''
La sezione di inglese segue le quattro sezioni principali e ha un punteggio separato. Allena la lettura della frase completa: un avverbio di tempo, il soggetto o una preposizione possono determinare la risposta corretta.

## Presente semplice e progressivo

Il present simple descrive abitudini e fatti generali: «She studies every day». Alla terza persona singolare si aggiunge normalmente la desinenza -s; nelle domande e nelle negazioni compare does e il verbo torna alla forma base.

Il present continuous usa am/is/are e la forma in -ing: «They are studying now». Distingui l'abitudine dall'azione in corso. Gli avverbi always, often e usually accompagnano spesso le abitudini, mentre now suggerisce un'azione attuale.

## Passato e present perfect

Il past simple si usa per azioni concluse in un tempo passato definito: «I visited Rome yesterday». Nelle domande con did il verbo è alla forma base. Gli irregolari come go/went e see/saw richiedono attenzione.

Il present perfect usa have/has e il participio passato. Può collegare un'esperienza o una durata al presente: «She has lived here since 2020». Since introduce il momento iniziale, for la durata. Non si usa normalmente il present perfect con yesterday.

## Futuro, modali e condizioni

Will si usa, tra gli altri casi, per decisioni immediate e previsioni. Be going to può indicare un'intenzione già formata. Dopo can, must e should si usa il verbo base senza to: «You should rest».

Nel first conditional una struttura comune è «If it rains, we will stay home»: presente nella subordinata con if e will nella principale. Nel second conditional si trova «If I had more time, I would travel» per un'ipotesi meno reale o immaginata.

## Nomi, pronomi e quantità

Many si riferisce a nomi numerabili plurali, much a nomi non numerabili; some è comune nelle affermative e any nelle domande e negative. A few indica una piccola quantità positiva di elementi numerabili.

Distingui he/him/his e she/her/her secondo la funzione nella frase. Gli articoli a e an dipendono dal suono iniziale: «an hour», ma «a university». Il pronome relativo who si usa per persone, which tipicamente per cose.

## Preposizioni e confronti

Si dice «on Monday», «at eight», «in November». Un'interazione comune è «interested in», mentre si è «good at» qualcosa. Memorizza la combinazione nel contesto, senza tradurre ogni parola isolatamente.

Il comparativo di tall è taller; il superlativo è the tallest. Con aggettivi più lunghi si usano more e most. Good diventa better e best. Per confrontare uguaglianza si usa as ... as.

## Lettura e metodo

Individua soggetto, verbo e indicatore temporale prima di leggere le alternative. Per il lessico cerca il significato adatto alla frase: library significa biblioteca, non libreria. Nei brevi messaggi cerca chi fa cosa, quando e con quale scopo.

Nella simulazione la sezione inglese vale un punto per risposta corretta e zero per risposta errata o omessa. Non c'è la penalità di un quarto di punto applicata alle quattro sezioni precedenti. Il risultato resta distinto dal punteggio principale su cinquanta.
''', r'''
Completa: «She ___ to university every morning».|goes|go|going|gone|are going|Il soggetto è la terza persona singolare e every morning indica un'abitudine. Al present simple si usa goes.
Completa: «Look! The children ___ in the garden».|are playing|plays|is playing|played|has played|Look richiama un'azione in corso. Children è plurale, quindi il present continuous richiede are playing.
Completa: «I ___ this film yesterday».|watched|watch|have watched|am watching|watches|Yesterday indica un momento passato concluso. Si usa il past simple watched, senza have.
Completa: «We have lived here ___ 2020».|since|for|during|by|until|Since introduce il momento di inizio di una situazione che continua nel presente. For richiederebbe invece una durata, come six years.
Completa: «They have studied English ___ three years».|for|since|at|from|in|Three years è una durata. Si usa for con il present perfect per esprimere da quanto tempo dura l'attività.
Completa: «___ you like coffee?»|Do|Does|Are|Is|Has|Con il soggetto you, una domanda al present simple con il verbo like usa l'ausiliare do. Il verbo principale resta alla forma base.
Completa: «He doesn't ___ meat».|eat|eats|eating|ate|eaten|Dopo doesn't il verbo è alla forma base eat. La desinenza della terza persona è già espressa dall'ausiliare.
Completa: «There isn't ___ milk in the fridge».|any|many|a few|an|every|Nella frase negativa si usa any con il nome non numerabile milk. Many e a few richiedono nomi numerabili plurali.
Completa: «How ___ students are in your class?»|many|much|little|any|a|Students è un nome numerabile plurale. Per chiedere quanti si usa how many, mentre how much riguarda quantità non numerabili.
Completa: «This exercise is ___ than the previous one».|easier|easiest|easy|more easyer|the easiest|Than introduce un confronto. Il comparativo regolare di easy è easier; il superlativo non si usa in questa struttura.
Completa: «She is the ___ student in the group».|best|better|good|more good|well|Il confronto riguarda l'intero gruppo ed è preceduto da the. Il superlativo irregolare di good è best.
Completa: «The lesson starts ___ nine o'clock».|at|on|in|to|by on|Per un orario preciso si usa at. On si usa normalmente con i giorni e in con mesi, anni e parti del giorno.
Completa: «Our exam is ___ Monday».|on|at|in|by at|under|I giorni della settimana sono preceduti normalmente da on. La frase si completa con on Monday.
Completa: «He is interested ___ engineering».|in|on|at|for|with|L'espressione corretta è interested in. È utile imparare insieme l'aggettivo e la preposizione che lo accompagna.
Completa: «You ___ wear a seat belt: it is compulsory».|must|might|would|may be|could to|La seconda parte specifica che si tratta di un obbligo. Must seguito dal verbo base esprime tale necessità.
Completa: «If it rains, we ___ at home».|will stay|would stayed|staying|have stay|will stayed|Nel first conditional si può usare if con il presente e will con il verbo base nella principale. La forma corretta è will stay.
Completa: «If I had more time, I ___ more books».|would read|will reading|have readed|reads|am read|Il periodo ipotetico usa had nella subordinata e would seguito dal verbo base nella principale. Read è qui la forma base del verbo.
Completa: «This is the teacher ___ helped me».|who|which|where|when|whose book|L'antecedente è una persona e il pronome è soggetto di helped. Who introduce correttamente la relativa.
Completa: «I bought ___ umbrella yesterday».|an|a|some of|many|these|Umbrella è singolare numerabile e inizia con un suono vocalico. Si usa l'articolo indeterminativo an.
Completa: «My brother is ___ engineer».|an|a|the an|many|some|Engineer inizia con un suono vocalico. Per descrivere la professione al singolare si usa an engineer.
Completa: «Can you help ___ with this problem?»|me|I|my|mine|myself's|Il pronome è complemento del verbo help. La forma oggetto della prima persona singolare è me.
Completa: «This bag belongs to Anna. It is ___».|hers|her|she|she's bag|herself's|Il pronome possessivo sostituisce her bag e si usa senza un nome seguente. La forma richiesta è hers.
Completa: «You should ___ a short break».|take|to take|taking|takes|took|Dopo il modale should si usa il verbo base senza to. La combinazione corretta è should take.
Completa: «___ did you arrive? At eight».|When|Who|Whose|Which book|How many|La risposta fornisce un orario, quindi la domanda deve riguardare il tempo. When significa quando.
Completa: «I was tired, ___ I finished the exercise».|but|because of|although of|unless to|despite of|Le due proposizioni sono in contrasto: nonostante la stanchezza, l'esercizio è stato finito. But collega correttamente due proposizioni autonome.
Nel messaggio «The library will close at 6 p.m. today», che cosa indica library?|Biblioteca|Libreria commerciale|Laboratorio|Aula di informatica|Libretto universitario|Library significa biblioteca. Il messaggio comunica l'orario di chiusura della biblioteca, non quello di un negozio di libri.
Leggi: «The train leaves at 8:15. Please arrive ten minutes early». A che ora viene chiesto di arrivare?|8:05|8:25|8:15|7:15|8:10|Ten minutes early significa dieci minuti prima. Sottraendo dieci minuti dalle 8:15 si ottengono le 8:05.
Completa: «I have never ___ to London».|been|went|go|being|was|Il present perfect richiede have seguito dal participio passato. Per indicare l'esperienza di una visita si usa been.
Completa: «There ___ two books on the desk».|are|is|was|has|be|Two books è plurale e la frase è al presente. La struttura esistenziale richiede there are.
Completa: «We went home ___ the lesson».|after|during of|while to|until of|at to|After seguito dal nome the lesson esprime posteriorità: siamo andati a casa dopo la lezione. Le altre sequenze non sono grammaticali nel contesto.
''')

for slug, (title, summary, body) in THEORY.items():
    p=ROOT/'teoria'/'tolc-i'/f'{slug}.md'; p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(f'---\ntitolo: {json.dumps(title,ensure_ascii=False)}\nsommario: {json.dumps(summary,ensure_ascii=False)}\n---\n\n{body}\n')
    questions=QUESTIONS[slug]
    for i,(question, choices, explanation) in enumerate(questions,1):
        # Posizioni distribuite senza cambiare il significato delle alternative.
        rotation=(i-1)%5
        options=choices[-rotation:]+choices[:-rotation] if rotation else choices
        correct=rotation+1
        listing='\n'.join('- '+c for c in options)
        qpath=ROOT/'domande'/'tolc-i'/slug/f'{i}.md';qpath.parent.mkdir(parents=True,exist_ok=True)
        qpath.write_text(f'---\ncorretta: {correct}\n---\n\n{question}\n\n{listing}\n\n## Spiegazione\n\n{explanation}\n')
        p=ROOT/'dafare'/'tolc-i'/slug/f'{i}.md';p.parent.mkdir(parents=True,exist_ok=True)
        p.write_text(f'---\ntitolo: "Quesito {i}"\nteoria: []\nparole: []\n---\n\n{question}\n\n{listing}\n\n:::soluzione\n\n**Risposta corretta: {"ABCDE"[correct-1]}.** {explanation}\n\n:::\n')
    # Ogni scheda raggruppa più esempi; le prime tre sono in anteprima.
    groups=6 if len(questions)==30 else 4
    for g in range(groups):
        start=(len(questions)*g)//groups; end=(len(questions)*(g+1))//groups
        blocks=[]
        for j,(question,choices,explanation) in enumerate(questions[start:end],1):
            listing='\n'.join('- '+c for c in choices)
            blocks.append(f'## Esercizio {j}\n\n{question}\n\n{listing}\n\n<div class="spiegazione">\n\n**Risposta: {choices[0]}.** {explanation}\n\n</div>')
        p=ROOT/'svolti'/'tolc-i'/slug/f'{g+1}.md';p.parent.mkdir(parents=True,exist_ok=True)
        p.write_text(f'---\ntitolo: {json.dumps(f"{title} · scheda {g+1}",ensure_ascii=False)}\ngratis: {str(g<3).lower()}\nteoria: []\nparole: []\n---\n\n'+ '\n\n'.join(blocks)+'\n')
print(json.dumps({'capitoli':len(THEORY),'domande':sum(map(len,QUESTIONS.values())),'schede':sum(6 if len(q)==30 else 4 for q in QUESTIONS.values())},ensure_ascii=False))
