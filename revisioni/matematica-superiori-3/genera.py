"""Generatore riproducibile delle schede originali di Matematica 3° anno.

Le verifiche simboliche usano le equazioni della traccia, prima della scrittura.
"""
from pathlib import Path
from dataclasses import dataclass
import json
import sympy as s
import yaml
from teoria import CHAPTERS, THEORY

ROOT = Path(__file__).resolve().parents[2]
SLUG = 'matematica-superiori-3'
x, y = s.symbols('x y', real=True)
R = s.S.Reals

def L(v):
    return s.latex(s.sympify(v), fold_short_frac=False).replace('\\frac', '\\dfrac')

def M(v): return '$'+L(v)+'$'
def pair(a,b): return s.Tuple(a,b)
def span(a,b,lo=False,ro=False): return s.Interval(a,b,left_open=lo,right_open=ro)
def outside(a,b,closed=False): return s.Union(span(-s.oo,a,ro=not closed),span(b,s.oo,lo=not closed))
def eq_roots(expr,ans,domain=R):
    actual=s.solveset(expr,x,domain)
    assert actual==ans, (expr,actual,ans)
def inequality(expr,operator,ans):
    actual=s.solve_univariate_inequality(operator(expr,0),x,relational=False)
    assert actual==ans, (expr,actual,ans)
def equal(a,b):
    if isinstance(a,s.Set) or isinstance(b,s.Set): return a==b
    if isinstance(a,s.Tuple) and isinstance(b,s.Tuple): return len(a)==len(b) and all(equal(c,d) for c,d in zip(a,b))
    try: return s.simplify(a-b)==0
    except TypeError: return a==b

@dataclass
class Task:
    title: str
    anchor: str
    prompt: str
    answer: object
    steps: list
    explanation: str
    graph: str=''

def task(title,anchor,prompt,answer,steps,why,graph=''):
    return Task(title,anchor,prompt,s.sympify(answer),steps,why,graph)

def algebra(j,k):
    a,b=k,k+3
    p=s.expand((x-a)*(x-b))
    if j==0:
        ans=s.FiniteSet(a,b); eq_roots(p,ans)
        return task('Equazioni quadratiche scomponibili','equazioni',f'Risolvi {M(p)} $=0$.',ans,[L(p)+'=0',f'(x-{a})(x-{b})=0',r'S='+L(ans)],'Il coefficiente di secondo grado è diverso da zero. La scomposizione riproduce il termine noto e il coefficiente di primo grado, quindi si applica la legge di annullamento del prodotto. Almeno uno dei due fattori deve essere nullo. Le due radici ottenute annullano il polinomio iniziale e non ci sono condizioni che le escludano.')
    if j==1:
        ans=s.FiniteSet(-k,k); p=x**2-k**2; eq_roots(p,ans)
        return task('Equazioni come differenza di quadrati','secondo-grado',f'Risolvi {M(p)} $=0$.',ans,[f'x^2={k*k}',f'x=\\pm {k}',r'S='+L(ans)],'Si isola il quadrato dell’incognita. Poiché il secondo membro è positivo, esistono due valori opposti con quel quadrato. Entrambi sono soluzioni; considerare soltanto la radice positiva perderebbe uno dei due valori. La sostituzione nel polinomio dà zero in entrambi i casi.')
    if j==2:
        ans=span(a,b); inequality(p,s.Le,ans)
        return task('Disequazioni quadratiche non strette','disequazioni',f'Risolvi {M(p)} $\\leq0$.',ans,[f'(x-{a})(x-{b})\\leq0',f'{a}\\leq x\\leq{b}',r'S='+L(ans)],'Il coefficiente del termine quadratico è positivo e le radici sono distinte. Tra le radici il primo fattore è positivo e il secondo negativo, quindi il prodotto è negativo. Nei due intervalli esterni i fattori hanno lo stesso segno. Gli estremi sono inclusi perché il confronto ammette l’uguaglianza.')
    if j==3:
        ans=outside(a,b); inequality(p,s.Gt,ans)
        return task('Prodotti strettamente positivi','prodotti',f'Risolvi $(x-{a})(x-{b})>0$.',ans,[f'x<{a}\\quad\\text{{oppure}}\\quad x>{b}',r'S='+L(ans)],'I fattori si annullano nei due valori indicati. Per valori minori di entrambi gli zeri sono entrambi negativi; dopo entrambi gli zeri sono entrambi positivi. Il prodotto è dunque positivo nei due intervalli esterni. Gli zeri sono esclusi perché il confronto è stretto.')
    if j==4:
        expr=(x-a)/(x-b); ans=s.Union(span(-s.oo,a),span(b,s.oo,lo=True)); inequality(expr,s.Ge,ans)
        return task('Disequazioni fratte','fratte',f'Risolvi $\\dfrac{{x-{a}}}{{x-{b}}}\\geq0$.',ans,[f'x\\neq {b}',f'x\\leq{a}\\quad\\text{{oppure}}\\quad x>{b}',r'S='+L(ans)],'Si impone che il denominatore sia diverso da zero. Numeratore e denominatore hanno lo stesso segno nei due intervalli esterni, quindi il rapporto è positivo in tali intervalli. Lo zero del numeratore viene incluso perché dà rapporto nullo; lo zero del denominatore resta escluso anche con una disequazione non stretta.')
    if j==5:
        ans=span(a+1,b,lo=True); base=s.Intersection(span(a,b),span(a+1,s.oo,lo=True)); assert ans==base
        return task('Sistemi di disequazioni','sistemi',f'Risolvi $\\begin{{cases}}{L(p)}\\leq0,\\\\x>{a+1}.\\end{{cases}}$',ans,[f'{a}\\leq x\\leq{b}',f'x>{a+1}',r'S='+L(ans)],'La disequazione quadratica ammette l’intervallo chiuso tra le radici. La seconda condizione richiede valori strettamente maggiori della soglia indicata. Poiché il sistema impone entrambe le condizioni, si prende l’intersezione: il primo estremo è escluso e il secondo rimane incluso.')
    if j==6:
        # Values of the parameter giving a double root.
        ans=k*k; assert s.discriminant(x*x-2*k*x+ans,x)==0
        return task('Parametri e radici coincidenti','parametri',f'Per quale valore di $m$ l’equazione $x^2-{2*k}x+m=0$ ha una radice reale doppia?',ans,[f'\\Delta={4*k*k}-4m',f'{4*k*k}-4m=0',f'm={k*k}'], 'Il coefficiente di secondo grado vale uno per ogni parametro, quindi l’equazione resta quadratica. Una radice reale doppia richiede discriminante nullo. Risolvendo questa condizione si trova il valore del parametro; sostituendolo, il trinomio diventa un quadrato perfetto.')
    ans=pair(k,k+3); eq_roots(x*(x+3)-k*(k+3),s.FiniteSet(k,-k-3))
    return task('Problemi con lati e area','problemi',f'Un rettangolo ha area ${k*(k+3)}$ e il lato maggiore supera il minore di $3$. Determina i lati.',ans,[f'x(x+3)={k*(k+3)}',f'(x-{k})(x+{k+3})=0',f'x={k}\\quad(x>0)',f'(x,x+3)=({k},{k+3})'],'Il lato minore è l’incognita e deve essere positivo. Il lato maggiore si esprime aggiungendo la differenza assegnata. L’equazione dell’area è quadratica e presenta anche una radice negativa, che si scarta perché non rappresenta una lunghezza. I due lati positivi hanno prodotto uguale all’area richiesta.')

def assoluto(j,k):
    h=k; r=k+2
    if j==0:
        ans=s.FiniteSet(h-r,h+r); eq_roots(s.Abs(x-h)-r,ans)
        return task('Equazioni di distanza','equazioni',f'Risolvi $|x-{h}|={r}$.',ans,[f'x-{h}=\\pm{r}',r'S='+L(ans)],'Il valore assoluto rappresenta una distanza e il secondo membro è positivo. La stessa distanza si ottiene spostandosi a destra oppure a sinistra del centro. Per questo si risolvono due equazioni lineari e si uniscono le loro soluzioni. I due valori sono distinti perché il raggio non è nullo.')
    if j==1:
        ans=span(h-r,h+r); inequality(s.Abs(x-h)-r,s.Le,ans)
        return task('Disequazioni con distanza limitata','interne',f'Risolvi $|x-{h}|\\leq{r}$.',ans,[f'-{r}\\leq x-{h}\\leq{r}',r'S='+L(ans)],'Una distanza minore o uguale al raggio individua tutti i punti compresi tra i due estremi. Le due disequazioni sono simultanee e formano un intervallo. Gli estremi soddisfano l’uguaglianza e vengono quindi inclusi. La soluzione si può leggere anche dal grafico del valore assoluto.')
    if j==2:
        ans=outside(h-r,h+r); inequality(s.Abs(x-h)-r,s.Gt,ans)
        return task('Disequazioni con distanza esterna','esterne',f'Risolvi $|x-{h}|>{r}$.',ans,[f'x-{h}<-{r}\\quad\\text{{oppure}}\\quad x-{h}>{r}',r'S='+L(ans)],'La distanza supera il raggio nei punti che si trovano fuori dall’intervallo centrato nel valore assegnato. Basta soddisfare una delle due condizioni, quindi si usa l’unione. I punti estremi hanno distanza esattamente uguale al raggio e sono esclusi dal confronto stretto.')
    if j==3:
        ans=span(h,s.oo,lo=True)
        assert s.solveset(x-h,x,R)==s.FiniteSet(h)
        return task('Domini con radici al denominatore','radicali',f'Determina il dominio reale di $f(x)=\\dfrac1{{\\sqrt{{x-{h}}}}}$.',ans,[f'x-{h}>0',r'D='+L(ans)],'Una radice quadrata reale richiede radicando non negativo. In questa espressione, però, la radice è anche un denominatore e non può annullarsi. Le due condizioni insieme richiedono radicando strettamente positivo. L’estremo che renderebbe nulla la radice resta perciò escluso.')
    if j==4:
        ans=s.FiniteSet(k*k+h); eq_roots(s.sqrt(x-h)-k,ans)
        return task('Equazioni con radice isolata','irrazionali',f'Risolvi $\\sqrt{{x-{h}}}={k}$.',ans,[f'x\\geq{h}',f'x-{h}={k*k}',r'S='+L(ans)],'La radice è isolata e il secondo membro è non negativo, quindi elevare al quadrato è un passaggio equivalente nel dominio. Si risolve l’equazione lineare ottenuta e si controlla la condizione di esistenza. La sostituzione dà la radice quadrata di un quadrato con risultato positivo.')
    if j==5:
        # sqrt(x+n(n-1)) = x has roots n and 1-n after squaring.
        n=k+1; c=n*(n-1); ans=s.FiniteSet(n); eq_roots(s.sqrt(x+c)-x,ans)
        return task('Equazioni irrazionali con controllo dei candidati','irrazionali',f'Risolvi $\\sqrt{{x+{c}}}=x$.',ans,[r'x\geq0',f'x+{c}=x^2',f'(x-{n})(x+{n-1})=0',r'S='+L(ans)],'Il secondo membro deve essere non negativo perché è uguale a una radice quadrata. Dopo l’elevamento al quadrato compaiono due candidati, ma quello negativo viola questa condizione. Il candidato positivo soddisfa anche la traccia iniziale. Il controllo del segno evita la soluzione estranea introdotta dal quadrato.')
    if j==6:
        ans=span(h,h+r*r); inequality(s.sqrt(x-h)-r,s.Le,ans)
        return task('Disequazioni con radice e soglia positiva','confronti',f'Risolvi $\\sqrt{{x-{h}}}\\leq{r}$.',ans,[f'0\\leq x-{h}\\leq{r*r}',r'S='+L(ans)],'Il radicando è non negativo per il dominio e la soglia è positiva. Il confronto può quindi essere elevato al quadrato conservando il verso. Si ottengono un limite inferiore e uno superiore da soddisfare insieme. Entrambi gli estremi sono ammessi, perché la radice è definita e la disequazione non è stretta.')
    ans=s.FiniteSet(h-1,h+4); eq_roots(s.Abs(x-h)+s.Abs(x-h-3)-5,ans)
    return task('Somme di valori assoluti','tratti',f'Risolvi $|x-{h}|+|x-{h+3}|=5$.',ans,[f'x<{h}:\\quad {2*h+3}-2x=5',f'{h}\\leq x\\leq{h+3}:\\quad 3\\neq5',f'x>{h+3}:\\quad 2x-{2*h+3}=5',r'S='+L(ans)],'I due argomenti cambiano segno nei rispettivi zeri. All’esterno del segmento la somma delle distanze varia linearmente; all’interno coincide con la lunghezza del segmento e vale tre. Si risolvono le equazioni dei due intervalli esterni e si verifica che ogni risultato appartenga al caso in cui è stato calcolato.')

def funzioni(j,k):
    if j==0:
        p=x*x-2*k*x+k; ans=p.subs(x,k+2)
        return task('Calcolo di immagini','valori',f'Data $f(x)={L(p)}$, calcola $f({k+2})$.',ans,[f'f({k+2})=({k+2})^2-{2*k}({k+2})+{k}',f'f({k+2})={L(ans)}'],'L’immagine si trova sostituendo l’ascissa in ogni occorrenza dell’incognita. Il coefficiente di primo grado moltiplica l’intero valore sostituito. Si svolgono prima potenze e prodotti e poi la somma algebrica. Il risultato è un’ordinata del grafico, non una soluzione dell’equazione f(x)=0.')
    if j==1:
        a,b=k,k+3; ans=s.Union(span(a,b,ro=True),span(b,s.oo,lo=True))
        assert ans==s.Complement(span(a,s.oo),s.FiniteSet(b))
        return task('Domini con radice e frazione','dominio',f'Trova il dominio di $f(x)=\\dfrac{{\\sqrt{{x-{a}}}}}{{x-{b}}}$.',ans,[f'x\\geq{a}',f'x\\neq{b}',r'D='+L(ans)],'Il radicando impone un intervallo chiuso a sinistra. Il denominatore esclude un punto che appartiene a tale intervallo. Le due condizioni si intersecano, quindi l’intervallo si divide in due parti. Il primo estremo è incluso perché annulla soltanto il numeratore e lascia il denominatore diverso da zero.')
    if j==2:
        a,b=k,k+2; ans=s.FiniteSet(a); eq_roots((x-a)/(x+b),ans)
        return task('Zeri di funzioni razionali','zeri',f'Trova gli zeri di $f(x)=\\dfrac{{x-{a}}}{{x+{b}}}$.',ans,[f'x\\neq-{b}',f'x-{a}=0',r'Z='+L(ans)],'Una frazione è nulla quando si annulla il numeratore e il denominatore rimane diverso da zero. Lo zero trovato appartiene al dominio, perché i due valori esclusi e richiesti sono distinti. La sua ordinata è zero, quindi corrisponde all’intersezione del grafico con l’asse orizzontale.')
    if j==3:
        p=x**4+k*x*x+k; ans=s.simplify(p.subs(x,-x)-p); assert ans==0
        # The numerical quantity tests the defining identity and permits unambiguous alternatives.
        return task('Verifiche di simmetria','simmetrie',f'Per $f(x)={L(p)}$, semplifica $f(-x)-f(x)$ per verificare la parità.',ans,[f'f(-x)={L(p.subs(x,-x))}',r'f(-x)-f(x)=0'],'Il dominio è l’intera retta reale e quindi è simmetrico rispetto all’origine. Tutte le potenze dell’incognita hanno esponente pari e rimangono uguali quando si sostituisce il valore opposto. La differenza è identicamente nulla, quindi la funzione è pari e il grafico è simmetrico rispetto all’asse verticale.')
    if j==4:
        f=2*x+k; g=x*x+1; ans=s.expand(g.subs(x,f)); assert s.simplify(ans-((2*x+k)**2+1))==0
        return task('Composizioni di funzioni','composizione',f'Date $f(x)=2x+{k}$ e $g(x)=x^2+1$, determina $(g\\circ f)(x)$ in forma sviluppata.',ans,[f'g(f(x))=(2x+{k})^2+1',r'(g\circ f)(x)='+L(ans)],'La notazione richiede di applicare prima la funzione interna f e poi la funzione g. Si sostituisce quindi tutta l’espressione di f nell’argomento del quadrato. Il quadrato del binomio produce anche il doppio prodotto. Entrambe le funzioni sono polinomiali, quindi la composizione è definita su tutti i reali.')
    if j==5:
        a=k+1; ans=(x-k)/a; assert s.simplify((a*x+k).subs(x,ans)-x)==0
        return task('Inverse di funzioni affini','inversa',f'Data $f(x)={a}x+{k}$ su $\\mathbb R$, trova $f^{{-1}}(x)$.',ans,[f'y={a}x+{k}',f'x=\\dfrac{{y-{k}}}{{{a}}}',r'f^{-1}(x)='+L(ans)],'Il coefficiente angolare è diverso da zero e la funzione è iniettiva. Si parte dalla relazione tra ascissa e ordinata e si isola l’ascissa. Dopo averla ricavata si rinomina l’argomento dell’inversa con x. La composizione con la funzione iniziale restituisce x, che controlla il risultato.')
    if j==6:
        h=k; v=1-k; ans=pair(h,v)
        return task('Vertici dopo una traslazione','traslazioni',f'Il grafico $y=(x-{h})^2+({v})$ è una traslazione di $y=x^2$. Trova il vertice.',ans,[f'x-{h}=0',f'x={h},\\quad y={v}',r'V='+L(ans)],'Il quadrato si annulla quando il suo argomento è zero. In quel punto l’ordinata coincide con il termine esterno al quadrato. La traslazione sposta dunque il vertice dell’origine nel punto calcolato. Il segno meno dentro l’argomento corrisponde a uno spostamento verso destra per un valore positivo di h.')
    ans=span(k,s.oo)
    return task('Immagini di funzioni quadratiche','immagine',f'Trova l’insieme immagine di $f(x)=(x-{k+1})^2+{k}$ su $\\mathbb R$.',ans,[f'(x-{k+1})^2\\geq0',f'f(x)\\geq{k}',r'f(\mathbb R)='+L(ans)],'Il quadrato è non negativo e può assumere ogni valore reale non negativo. Il termine costante rappresenta quindi il minimo raggiunto dalla funzione. Poiché il quadrato non ha limite superiore, nemmeno i valori della funzione hanno un massimo. L’estremo inferiore appartiene all’immagine perché si raggiunge nel vertice.')

def retta(j,k):
    if j==0:
        A=pair(k,1); B=pair(k+3,5); ans=5; assert s.sqrt(sum((b-a)**2 for a,b in zip(A,B)))==ans
        return task('Distanze tra punti','distanza',f'Calcola la distanza tra $A{L(A)}$ e $B{L(B)}$.',ans,[r'AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}',r'AB=\sqrt{3^2+4^2}=5'],'Le differenze delle coordinate sono gli spostamenti orizzontale e verticale. Esse costituiscono i cateti di un triangolo rettangolo, quindi si applica il teorema di Pitagora. I quadrati eliminano l’eventuale segno degli spostamenti. La distanza è una lunghezza e si prende la radice non negativa.')
    if j==1:
        A=pair(k,-k); B=pair(k+4,k+2); ans=(A+B)/2 if False else pair(k+2,1)
        assert all(s.simplify((a+b)/2-v)==0 for a,b,v in zip(A,B,ans))
        return task('Punti medi di segmenti','medio',f'Trova il punto medio di $A{L(A)}$ e $B{L(B)}$.',ans,[f'x_M=\\dfrac{{{k}+{k+4}}}2={k+2}',f'y_M=\\dfrac{{-{k}+{k+2}}}2=1',r'M='+L(ans)],'Il punto medio divide il segmento in due parti della stessa lunghezza. Le sue coordinate sono le medie delle coordinate corrispondenti degli estremi. Si calcola separatamente la media delle ascisse e quella delle ordinate, mantenendo i segni. Il punto ottenuto appartiene alla retta del segmento.')
    if j==2:
        a=k+1; q=-k; A=pair(1,a+q); B=pair(3,3*a+q); ans=a*x+q
        assert all(s.simplify(ans.subs(x,P[0])-P[1])==0 for P in [A,B])
        return task('Rette per due punti','due-punti',f'Trova $f(x)$ nella retta $y=f(x)$ per $A{L(A)}$ e $B{L(B)}$.',ans,[f'm=\\dfrac{{{B[1]}-{A[1]}}}{{3-1}}={a}',f'q={A[1]}-{a}={q}',r'y='+L(ans)],'Le ascisse sono diverse, quindi la retta non è verticale. Si divide la variazione delle ordinate per quella delle ascisse per trovare il coefficiente angolare. Sostituendo uno dei punti nella forma esplicita si ricava il termine noto. La verifica su entrambi i punti controlla sia pendenza sia intercetta.')
    if j==3:
        m=k+1; P=pair(2,k); q=k-2*m; ans=m*x+q
        return task('Parallele per un punto','parallele',f'Trova $f(x)$ nella parallela $y=f(x)$ a $y={m}x+7$ passante per $P{L(P)}$.',ans,[f'm={m}',f'q={k}-{m}\\cdot2={q}',r'y='+L(ans)],'Le rette parallele non verticali hanno lo stesso coefficiente angolare. Si conserva quindi la pendenza della retta assegnata e si determina soltanto l’intercetta. Il punto imposto fornisce un’equazione lineare nel termine noto. Il risultato soddisfa la condizione di passaggio e conserva la direzione richiesta.')
    if j==4:
        m=k+1; ans=-s.Rational(1,m); assert ans*m==-1
        return task('Pendenze di rette perpendicolari','perpendicolari',f'Qual è il coefficiente angolare di una perpendicolare a $y={m}x-3$?',ans,[f'{m}m_\\perp=-1',r'm_\perp='+L(ans)],'La retta assegnata non è orizzontale né verticale. Il prodotto dei coefficienti angolari di due rette perpendicolari vale meno uno. Si divide quindi tale valore per la pendenza assegnata. Il segno cambia e il valore assoluto diventa il reciproco, che verifica il prodotto richiesto.')
    if j==5:
        q=3*k; ans=pair(k,2*k); sol=s.solve([y-2*x,y+x-q],[x,y]); assert pair(sol[x],sol[y])==ans
        return task('Intersezioni di rette','intersezioni',f'Trova il punto comune a $y=2x$ e $y=-x+{q}$.',ans,[f'2x=-x+{q}',f'x={k}',f'y={2*k}',r'P='+L(ans)],'Un punto comune deve avere la stessa ordinata calcolata con entrambe le rette. Uguagliando le due espressioni si trova l’ascissa. La si sostituisce poi in una delle equazioni per ricavare l’ordinata. Le pendenze sono diverse, quindi il punto di intersezione è unico.')
    if j==6:
        c=5*k; ans=k
        assert s.Abs(c)/s.sqrt(3**2+4**2)==ans
        return task('Distanze di punti da rette','punto-retta',f'Calcola la distanza dell’origine dalla retta $3x+4y-{c}=0$.',ans,[f'd=\\dfrac{{|0+0-{c}|}}{{\\sqrt{{3^2+4^2}}}}',f'd=\\dfrac{{{c}}}5={k}'],'Si applica la formula della distanza punto-retta alla forma implicita. Il numeratore è il valore assoluto dell’espressione della retta valutata nel punto; il denominatore è la lunghezza del vettore dei coefficienti. Il valore assoluto rende il risultato non negativo e la divisione elimina la dipendenza dalla scala dell’equazione.')
    ans=pair(k,2*k); P=pair(k+2,2*k+4); assert (pair(2*ans[0]-P[0],2*ans[1]-P[1]))==pair(k-2,2*k-4)
    # Use a second midpoint problem requiring reconstruction rather than reading a formula.
    B=pair(k-2,2*k-4)
    return task('Ricostruzioni di estremi','medio',f'Il punto medio di $AB$ è $M{L(ans)}$ e $A{L(P)}$. Trova $B$.',B,[f'x_B=2\\cdot{k}-({k+2})={k-2}',f'y_B=2\\cdot{2*k}-({2*k+4})={2*k-4}',r'B='+L(B)],'Si usa la formula del punto medio come equazione da invertire. Moltiplicando la coordinata del punto medio per due e sottraendo quella dell’estremo noto si ottiene la coordinata dell’altro estremo. Il calcolo si ripete per l’ordinata. La media delle coordinate degli estremi ricostruiti restituisce il punto medio assegnato.')

def parabola(j,k):
    h=k; v=1-k; a=k+1
    p=s.expand((x-h)**2+v)
    if j==0:
        ans=pair(h,v); assert p.subs(x,h)==v
        return task('Vertici dal completamento del quadrato','vertice',f'Trova il vertice di $y={L(p)}$.',ans,[f'y=(x-{h})^2+({v})',r'V='+L(ans)],'Il coefficiente quadratico vale uno. Si aggiunge e sottrae il quadrato necessario a ricostruire il binomio. Nella forma del vertice, il quadrato si annulla nell’ascissa del vertice e il termine esterno dà l’ordinata. La parabola è aperta verso l’alto, quindi quel punto realizza anche il minimo.')
    if j==1:
        ans=s.FiniteSet(h-2,h+2); pol=(x-h)**2-4; eq_roots(pol,ans)
        return task('Zeri di parabole','zeri',f'Trova le ascisse delle intersezioni con l’asse $x$ di $y=(x-{h})^2-4$.',ans,[f'(x-{h})^2=4',f'x-{h}=\\pm2',r'Z='+L(ans)],'Sull’asse orizzontale l’ordinata vale zero. L’equazione ottenuta è un quadrato uguale a un numero positivo, quindi ha due soluzioni simmetriche rispetto all’asse della parabola. Le ordinate dei due punti sono nulle. La distanza di ciascuna ascissa dall’asse è uguale a due.')
    if j==2:
        p=s.expand(a*(x-h)**2+v); ans=p; P=pair(h+2,4*a+v)
        assert p.subs(x,P[0])==P[1]
        return task('Equazioni da vertice e punto','equazione',f'Trova $f(x)$ in forma sviluppata per la parabola $y=f(x)$ con vertice $V{L(pair(h,v))}$ e passante per $P{L(P)}$.',ans,[f'y=A(x-{h})^2+({v})',f'{P[1]}=4A+({v})',f'A={a}',r'y='+L(ans)],'Il vertice assegnato consente di scrivere subito la forma con un solo coefficiente incognito. Il punto ha ascissa diversa da quella del vertice, quindi determina quel coefficiente. Sostituendo le coordinate si ricava un’equazione lineare. Lo sviluppo finale conserva sia il vertice sia il passaggio per il punto richiesto.')
    if j==3:
        p=s.Rational(1,4*a); ans=pair(h,v+p)
        return task('Fuochi di parabole verticali','fuoco',f'Trova il fuoco di $y={a}(x-{h})^2+({v})$.',ans,[f'(x-{h})^2=\\dfrac1{{{a}}}(y-({v}))',r'p='+L(p),r'F='+L(ans)],'Si porta il quadrato isolato e si confronta l’equazione con la forma in cui il suo coefficiente è quattro volte il parametro focale. Il fuoco ha la stessa ascissa del vertice e ordinata aumentata di tale parametro. Il coefficiente positivo conferma che l’apertura e il fuoco si trovano verso l’alto.')
    if j==4:
        # Intersection of y=x^2 and a horizontal line, both coordinates given by the set.
        ans=s.FiniteSet(pair(-k,k*k),pair(k,k*k)); roots=s.solveset(x*x-k*k,x,R); assert roots==s.FiniteSet(-k,k)
        return task('Intersezioni tra rette e parabole','intersezioni',f'Trova i punti comuni a $y=x^2$ e $y={k*k}$.',ans,[f'x^2={k*k}',f'x=\\pm{k}',r'P_1='+L(pair(-k,k*k))+r',\quad P_2='+L(pair(k,k*k))],'Si sostituisce l’ordinata costante della retta nell’equazione della parabola. La quantità assegnata è positiva e produce due ascisse opposte. Le ordinate sono entrambe uguali al valore della retta. Ogni coppia soddisfa quindi simultaneamente le due equazioni e individua un punto comune.')
    if j==5:
        ans=2*k*x-k*k; assert s.factor(x*x-ans)==(x-k)**2
        return task('Tangenti senza derivate','tangenti',f'Trova $f(x)$ nella tangente $y=f(x)$ a $y=x^2$ nel punto di ascissa ${k}$.',ans,[f'y={2*k}x-{k*k}',f'x^2-({2*k}x-{k*k})=(x-{k})^2',r'y='+L(ans)],'La tangente deve passare per il punto della parabola e avere un’intersezione doppia con essa. La formula algebrica dà la pendenza e l’intercetta. Sostituendo la retta nella parabola resta un quadrato con unica radice, proprio nell’ascissa assegnata. Questo controlla la tangenza senza usare il calcolo differenziale.')
    if j==6:
        ans=pair(-k,k+1)
        return task('Vertici di parabole orizzontali','orizzontale',f'Trova il vertice di $x=(y-{k+1})^2-{k}$.',ans,[f'y-{k+1}=0',f'y={k+1},\\quad x=-{k}',r'V='+L(ans)],'Nella forma con asse orizzontale è il quadrato della differenza delle ordinate a essere isolato. Il suo annullamento individua l’ordinata del vertice, mentre il termine esterno dà l’ascissa. Il coefficiente positivo significa che la curva si apre verso destra. L’ordine delle coordinate rimane ascissa, ordinata.')
    total=2*(k+2); ans=(k+2)**2
    assert s.expand(-(x-(k+2))**2+ans-x*(total-x))==0
    return task('Massimi di aree quadratiche','massimi',f'Un rettangolo ha somma delle misure dei due lati consecutivi pari a ${total}$. Qual è l’area massima?',ans,[f'A(x)=x({total}-x)',f'A(x)=-(x-{k+2})^2+{ans}',f'A_{{\\mathrm{{max}}}}={ans}'],'Si esprime il secondo lato sottraendo il primo dalla somma assegnata. L’area diventa una parabola con concavità rivolta verso il basso. Il quadrato compare con segno negativo, quindi l’area non supera il termine costante della forma del vertice. Il vertice è nel dominio delle lunghezze positive e realizza il massimo.')

def circle(j,k):
    h,v=k,1-k; r=k+2
    if j==0:
        expr=s.expand((x-h)**2+(y-v)**2-r*r); ans=pair(h,v)
        assert [s.diff(expr,z).subs({x:h,y:v}) for z in [x,y]]==[0,0]
        return task('Centri dalla forma generale','generale',f'Trova il centro della circonferenza ${L(expr)}=0$.',ans,[f'(x-{h})^2+(y-({v}))^2={r*r}',r'C='+L(ans)],'Si raggruppano i termini in x e quelli in y e si completano i due quadrati. Le coordinate del centro sono i valori che annullano le differenze dentro i quadrati. Il secondo membro è positivo e quindi l’equazione rappresenta una circonferenza reale. I segni delle coordinate si controllano leggendo le differenze nella forma canonica.')
    if j==1:
        expr=s.expand((x-h)**2+(y-v)**2-r*r); ans=r
        return task('Raggi dalla forma generale','generale',f'Trova il raggio della circonferenza ${L(expr)}=0$.',ans,[f'(x-{h})^2+(y-({v}))^2={r*r}',f'r=\\sqrt{{{r*r}}}={r}'],'Dopo il completamento dei quadrati, il secondo membro rappresenta il quadrato del raggio. La lunghezza del raggio si ottiene prendendo la radice positiva. Il termine noto della forma generale, da solo, non è il quadrato del raggio perché cambiano anche le costanti introdotte completando i quadrati.')
    if j==2:
        P=pair(h+3*k,v+4*k); rr=5*k; ans=0
        expr=(x-h)**2+(y-v)**2-rr*rr; assert expr.subs({x:P[0],y:P[1]})==0
        return task('Controlli di appartenenza','punti',f'Per $P{L(P)}$ e $C{L(pair(h,v))}$, calcola $CP^2-{rr*rr}$ per stabilire se $P$ appartiene alla circonferenza di raggio ${rr}$.',ans,[f'CP^2=({3*k})^2+({4*k})^2={rr*rr}',f'CP^2-{rr*rr}=0'],'Si confronta il quadrato della distanza dal centro con il quadrato del raggio. La differenza richiesta è zero, quindi le due quantità coincidono e il punto appartiene alla circonferenza. Il controllo non richiede di estrarre la radice della distanza. Un risultato negativo indicherebbe un punto interno e uno positivo un punto esterno.')
    if j==3:
        A=pair(h-r,v); B=pair(h+r,v); ans=r*r
        assert sum((a-b)**2 for a,b in zip(A,B))/4==ans
        return task('Raggi da diametri assegnati','diametro',f'Sono dati gli estremi $A{L(A)}$, $B{L(B)}$ di un diametro. Calcola $r^2$.',ans,[f'AB={2*r}',f'r=\\dfrac{{{2*r}}}2={r}',f'r^2={ans}'],'La distanza tra i due estremi coincide con il diametro. Poiché le ordinate sono uguali, essa è il valore assoluto della differenza delle ascisse. Il raggio è metà del diametro e si eleva poi al quadrato per rispondere alla richiesta. Il punto medio degli estremi sarebbe il centro della circonferenza.')
    if j==4:
        rr=5*k; yy=3*k; ans=s.FiniteSet(-4*k,4*k)
        eq_roots(x*x+yy*yy-rr*rr,ans)
        return task('Intersezioni con rette orizzontali','intersezioni',f'Trova le ascisse dei punti comuni a $x^2+y^2={rr*rr}$ e $y={yy}$.',ans,[f'x^2+{yy*yy}={rr*rr}',f'x^2={16*k*k}',r'S='+L(ans)],'La retta assegna la stessa ordinata a tutti i suoi punti. Sostituendola nell’equazione della circonferenza rimane un’equazione nell’ascissa. Il secondo membro positivo produce due soluzioni opposte, quindi la retta è secante. Le due coppie complete hanno le ordinate della retta e le ascisse appena trovate.')
    if j==5:
        rr=5*k; ans=pair(s.Rational(3,25*k),s.Rational(4,25*k))
        # Tangent normalized to alpha*x+beta*y=1.
        assert s.simplify(ans[0]*(3*k)+ans[1]*(4*k))==1
        return task('Tangenti in punti della circonferenza','tangenti',f'La tangente a $x^2+y^2={rr*rr}$ in $P({3*k},{4*k})$ si scrive $\\alpha x+\\beta y=1$. Trova $(\\alpha,\\beta)$.',ans,[f'{3*k}x+{4*k}y={rr*rr}',r'(\alpha,\beta)='+L(ans)],'Il punto assegnato appartiene alla circonferenza per la relazione pitagorica tra le coordinate. La tangente si scrive moltiplicando ciascuna coordinata corrente per la corrispondente coordinata del punto. Dividendo l’equazione per il quadrato del raggio si porta il secondo membro a uno e si leggono i due coefficienti richiesti.')
    if j==6:
        rr=5*k; d=3*k; ans=8*k; assert 2*s.sqrt(rr*rr-d*d)==ans
        return task('Lunghezze di corde','corde',f'Una circonferenza ha raggio ${rr}$ e una corda dista ${d}$ dal centro. Calcola la lunghezza della corda.',ans,[f'\\dfrac L2=\\sqrt{{{rr*rr}-{d*d}}}={4*k}',f'L={8*k}'],'La perpendicolare dal centro alla retta della corda la divide in due segmenti congruenti. Il raggio è l’ipotenusa del triangolo rettangolo e la distanza dal centro è un cateto. Per Pitagora si ricava la semilunghezza della corda. Il risultato va raddoppiato per ottenere la lunghezza dell’intero segmento.')
    rr=5*k; delta=6*k; ans=3*k
    diff=s.expand((x-delta)**2+y*y-rr*rr-(x*x+y*y-rr*rr)); eq_roots(diff,s.FiniteSet(ans))
    return task('Assi radicali di circonferenze','asse-radicale',f'L’asse radicale di $x^2+y^2={rr*rr}$ e $(x-{delta})^2+y^2={rr*rr}$ è verticale. Qual è la sua ascissa?',ans,[f'-{2*delta}x+{delta*delta}=0',f'x={ans}'],'Sottraendo le due equazioni si eliminano i termini quadratici e il raggio comune. Rimane l’equazione di una retta verticale. I centri hanno la stessa ordinata e lo stesso raggio, quindi l’asse radicale passa anche per il punto medio del segmento tra i centri. La coordinata trovata è coerente con questa simmetria.')

def ellisse(j,k):
    a,b,c=5*k,3*k,4*k
    E=x*x/a**2+y*y/b**2-1
    if j==0:
        return task('Lunghezze degli assi','assi',f'Per $\\dfrac{{x^2}}{{{a*a}}}+\\dfrac{{y^2}}{{{b*b}}}=1$, calcola la lunghezza dell’asse maggiore.',2*a,[f'a=\\sqrt{{{a*a}}}={a}',f'2a={2*a}'],'I denominatori sono i quadrati dei semiassi e quello maggiore individua l’asse maggiore. Si estrae prima la radice per trovare il semiasse e poi lo si raddoppia. La lunghezza di un asse è la distanza tra i due vertici opposti, quindi è diversa dal singolo semiasse.')
    if j==1:
        assert a*a-b*b==c*c
        return task('Distanze dei fuochi dal centro','fuochi',f'Per $\\dfrac{{x^2}}{{{a*a}}}+\\dfrac{{y^2}}{{{b*b}}}=1$, trova la distanza $c$ di ciascun fuoco dal centro.',c,[f'c^2={a*a}-{b*b}={c*c}',f'c={c}'],'L’asse maggiore è orizzontale perché il suo denominatore è maggiore. Nell’ellisse il quadrato della distanza focale si ottiene sottraendo il quadrato del semiasse minore da quello del maggiore. Si prende la radice positiva perché si cerca una distanza. I fuochi hanno poi coordinate opposte sull’asse maggiore.')
    if j==2:
        ans=s.Rational(4,5)
        return task('Eccentricità di ellissi','eccentricita',f'Trova l’eccentricità di $\\dfrac{{x^2}}{{{a*a}}}+\\dfrac{{y^2}}{{{b*b}}}=1$.',ans,[f'c=\\sqrt{{{a*a}-{b*b}}}={c}',f'e=\\dfrac{{{c}}}{{{a}}}={L(ans)}'],'L’eccentricità confronta la distanza del fuoco dal centro con il semiasse maggiore. I due valori crescono nello stesso rapporto quando si ingrandisce l’ellisse, quindi il quoziente non cambia con la scala. Il risultato è compreso tra zero e uno, come richiede una ellisse non degenere.')
    if j==3:
        xx=3*k; ans=s.FiniteSet(-s.Rational(12*k,5),s.Rational(12*k,5)); actual=s.solveset(E.subs(x,xx),y,R); assert actual==ans
        return task('Ordinate di punti dell’ellisse','punti',f'Nell’ellisse $\\dfrac{{x^2}}{{{a*a}}}+\\dfrac{{y^2}}{{{b*b}}}=1$, trova le ordinate dei punti di ascissa ${xx}$.',ans,[f'\\dfrac{{y^2}}{{{b*b}}}=1-\\dfrac9{{25}}=\\dfrac{{16}}{{25}}',f'y=\\pm {L(s.Rational(12*k,5))}'],'Si sostituisce l’ascissa nell’equazione e si isola il termine contenente l’ordinata. Il valore rimasto è positivo, quindi esistono due ordinate opposte. La coppia di punti è simmetrica rispetto all’asse maggiore. Entrambe le ordinate devono essere conservate perché la traccia riguarda l’ellisse completa.')
    if j==4:
        h,v=k,2-k; ans=pair(h-c,v)
        return task('Fuochi di ellissi traslate','traslata',f'Trova il fuoco con ascissa minore di $\\dfrac{{(x-{h})^2}}{{{a*a}}}+\\dfrac{{(y-({v}))^2}}{{{b*b}}}=1$.',ans,[r'C='+L(pair(h,v)),f'c={c}',r'F_1='+L(ans)],'La traslazione individua il centro senza modificare i semiassi. La distanza focale si calcola con la stessa differenza dei quadrati della forma centrata. Il fuoco con ascissa minore si trova sottraendo tale distanza all’ascissa del centro, mentre l’ordinata rimane uguale a quella del centro.')
    if j==5:
        # a and c supplied, b squared to be found.
        return task('Equazioni da vertici e fuochi','ricostruzione',f'Un’ellisse centrata nell’origine ha asse maggiore orizzontale, vertice $({a},0)$ e fuoco $({c},0)$. Trova $b^2$.',b*b,[f'a={a},\\quad c={c}',f'b^2=a^2-c^2={a*a}-{c*c}={b*b}'],'Il vertice determina il semiasse maggiore e il fuoco determina la distanza focale. La distanza focale è minore del semiasse, quindi i dati sono compatibili con un’ellisse. La relazione tra i quadrati permette di ricavare il denominatore mancante dell’equazione canonica, che deve risultare positivo.')
    if j==6:
        ans=a; assert E.subs({x:a,y:0})==0
        return task('Tangenti ai vertici principali','tangenti',f'La tangente a $\\dfrac{{x^2}}{{{a*a}}}+\\dfrac{{y^2}}{{{b*b}}}=1$ nel vertice $({a},0)$ ha forma $x=t$. Trova $t$.',ans,[f'\\dfrac{{{a}x}}{{{a*a}}}=1',f'x={a}'],'Il punto è un vertice principale e appartiene alla curva. La formula della tangente contiene un termine con ordinata del punto uguale a zero, che si annulla. Rimane una equazione verticale. Il valore costante dell’ascissa coincide con quello del vertice, come richiede il contatto in quel punto.')
    return task('Somme delle distanze focali','definizione',f'Per un punto dell’ellisse $\\dfrac{{x^2}}{{{a*a}}}+\\dfrac{{y^2}}{{{b*b}}}=1$, quanto vale la somma delle distanze dai fuochi?',2*a,[f'a={a}',f'PF_1+PF_2=2a={2*a}'],'La definizione geometrica dell’ellisse assegna una somma delle distanze costante per tutti i suoi punti. Tale costante è la lunghezza dell’asse maggiore. Si ricava quindi il semiasse dal denominatore maggiore e lo si raddoppia, senza dover conoscere le coordinate del punto specifico.')

def iperbole(j,k):
    a,b,c=3*k,4*k,5*k
    if j==0:
        return task('Vertici di iperboli','assi',f'Trova il vertice con ascissa positiva di $\\dfrac{{x^2}}{{{a*a}}}-\\dfrac{{y^2}}{{{b*b}}}=1$.',pair(a,0),[r'y=0',f'x^2={a*a}',r'V='+L(pair(a,0))],'Il termine positivo è quello contenente l’ascissa, quindi l’asse trasverso è orizzontale. Ponendo l’ordinata uguale a zero si trovano i due vertici. La traccia seleziona quello con ascissa positiva, che ha valore uguale al semiasse trasverso. L’altro vertice è il suo simmetrico rispetto all’origine.')
    if j==1:
        assert a*a+b*b==c*c
        return task('Fuochi delle iperboli','fuochi',f'Per $\\dfrac{{x^2}}{{{a*a}}}-\\dfrac{{y^2}}{{{b*b}}}=1$, trova la distanza $c$ di un fuoco dal centro.',c,[f'c^2={a*a}+{b*b}={c*c}',f'c={c}'],'Nell’iperbole la distanza focale soddisfa una somma di quadrati. Si leggono i due semiassi dai denominatori e si calcola la radice positiva della loro somma. Il risultato supera il semiasse trasverso, come richiede la definizione geometrica. I due fuochi stanno sull’asse del termine positivo.')
    if j==2:
        ans=s.Rational(4,3)
        return task('Coefficienti angolari degli asintoti','asintoti',f'Per $\\dfrac{{x^2}}{{{a*a}}}-\\dfrac{{y^2}}{{{b*b}}}=1$, trova il coefficiente angolare positivo degli asintoti.',ans,[f'm=\\dfrac ba=\\dfrac{{{b}}}{{{a}}}',r'm='+L(ans)],'Gli asintoti passano per il centro e hanno coefficienti angolari opposti. Per l’iperbole con asse trasverso orizzontale il valore positivo è il rapporto tra il semiasse verticale e quello orizzontale. Si usano le radici dei denominatori, non direttamente i denominatori. Una dilatazione uniforme non modifica questo rapporto.')
    if j==3:
        ans=s.Rational(5,3)
        return task('Eccentricità di iperboli','fuochi',f'Calcola l’eccentricità di $\\dfrac{{x^2}}{{{a*a}}}-\\dfrac{{y^2}}{{{b*b}}}=1$.',ans,[f'c=\\sqrt{{{a*a}+{b*b}}}={c}',f'e=\\dfrac ca={L(ans)}'],'Il coefficiente di eccentricità è la distanza del fuoco dal centro divisa per il semiasse trasverso. La distanza focale si ricava sommando i quadrati dei semiassi. Il risultato è maggiore di uno, che distingue l’iperbole dall’ellisse. Il rapporto è invariato se tutte le lunghezze vengono moltiplicate per lo stesso fattore.')
    if j==4:
        xx=5*k; ans=s.FiniteSet(-s.Rational(16*k,3),s.Rational(16*k,3)); E=x*x/a**2-y*y/b**2-1
        assert s.solveset(E.subs(x,xx),y,R)==ans
        return task('Ordinate dei punti di un ramo','punti',f'Per $\\dfrac{{x^2}}{{{a*a}}}-\\dfrac{{y^2}}{{{b*b}}}=1$ e $x={xx}$, trova le ordinate.',ans,[f'\\dfrac{{y^2}}{{{b*b}}}=\\dfrac{{25}}9-1=\\dfrac{{16}}9',f'y=\\pm {L(s.Rational(16*k,3))}'],'L’ascissa assegnata supera il semiasse trasverso, quindi può appartenere al ramo destro. Sostituendola si isola il quadrato dell’ordinata, che risulta positivo. Le due ordinate opposte rappresentano due punti dello stesso ramo, simmetrici rispetto all’asse orizzontale. Entrambe verificano la stessa equazione.')
    if j==5:
        K=k*(k+1); xx=k+1; ans=k
        assert xx*ans==K
        return task('Punti dell’iperbole equilatera','equilatera',f'Sulla curva $xy={K}$, qual è l’ordinata del punto con ascissa ${xx}$?',ans,[f'{xx}y={K}',f'y={k}'],'L’ascissa assegnata è non nulla, quindi si può dividere l’equazione per tale valore. Il prodotto delle coordinate deve rimanere uguale alla costante della curva. Poiché costante e ascissa sono positive, anche l’ordinata risulta positiva e il punto appartiene al ramo nel primo quadrante.')
    if j==6:
        h,v=k,1-k; ans=pair(h,v)
        return task('Centri di iperboli traslate','traslata',f'Trova il centro di $\\dfrac{{(x-{h})^2}}{{{a*a}}}-\\dfrac{{(y-({v}))^2}}{{{b*b}}}=1$.',ans,[f'X=x-{h},\\quad Y=y-({v})',r'C='+L(ans)],'Le differenze dentro i quadrati esprimono le coordinate rispetto al centro della conica. Il punto che annulla entrambe le differenze è quindi il centro. I denominatori e il segno tra i termini determinano la forma e l’orientamento, mentre la traslazione agisce solo sulla posizione.')
    h,v=k,k+2; A=2*k+1; expr=v+A/(x-h); ans=pair(h,v)
    return task('Asintoti di funzioni omografiche','omografica',f'Gli asintoti di $y={v}+\\dfrac{{{A}}}{{x-{h}}}$ sono $x=h$ e $y=v$. Trova la coppia dei loro valori costanti.',ans,[f'x-{h}=0',f'x={h},\\quad y={v}',r'(h,v)='+L(ans)],'La forma separa una costante da un termine reciproco. Il denominatore individua la retta verticale esclusa dal dominio e il termine costante individua l’asintoto orizzontale. Il numeratore del reciproco è non nullo, quindi il grafico è un’iperbole e non una costante con un punto mancante. L’intersezione degli asintoti è il centro.')

def transforms(j,k):
    if j==0:
        ans=pair(k+2,1-k)
        return task('Traslazioni di punti','traslazioni',f'Trasla $P(2,1)$ del vettore $({k},-{k})$. Trova l’immagine.',ans,[fr'x^\prime=2+{k}={k+2}',fr'y^\prime=1-{k}={1-k}',r'P^\prime='+L(ans)],'Una traslazione somma a ogni coordinata la corrispondente componente del vettore. Lo spostamento verticale è negativo, quindi l’ordinata diminuisce. Il vettore tra il punto iniziale e quello trovato coincide con il vettore assegnato. La trasformazione conserva tutte le distanze tra punti.')
    if j==1:
        P=pair(k,2*k+1); ans=pair(k,-2*k-1)
        return task('Simmetrie rispetto all’asse orizzontale','simmetrie',f'Trova il simmetrico di $P{L(P)}$ rispetto all’asse $x$.',ans,[fr'x^\prime={k}',fr'y^\prime=-({2*k+1})',r'P^\prime='+L(ans)],'La simmetria rispetto all’asse orizzontale conserva l’ascissa e cambia il segno dell’ordinata. I due punti hanno la stessa distanza dall’asse e stanno da parti opposte. Il punto medio del segmento che li unisce appartiene all’asse x, che è l’asse di simmetria richiesto.')
    if j==2:
        P=pair(k,k+2); lam=-2; ans=pair(-2*k,-2*(k+2))
        return task('Omotetie di rapporto negativo','omotetie',f'Applica a $P{L(P)}$ l’omotetia di centro l’origine e rapporto $-2$.',ans,[fr'x^\prime=-2\\cdot{k}',fr'y^\prime=-2\\cdot{k+2}',r'P^\prime='+L(ans)],'L’omotetia moltiplica entrambe le coordinate per il rapporto assegnato. Il valore assoluto del rapporto raddoppia la distanza dall’origine e il segno negativo porta il punto sulla semiretta opposta. Il risultato si trova sulla stessa retta che unisce il punto iniziale all’origine.')
    if j==3:
        h,v=k,1-k; a,b=3,2; expr=s.expand(4*(x-h)**2+9*(y-v)**2-36); ans=pair(h,v)
        assert s.diff(expr,x).subs(x,h)==0 and s.diff(expr,y).subs(y,v)==0
        return task('Centri mediante completamento dei quadrati','quadrati',f'Trova il centro della conica ${L(expr)}=0$.',ans,[f'4(x-{h})^2+9(y-({v}))^2=36',r'C='+L(ans)],'Si raccolgono i termini che dipendono dalla stessa coordinata. Completando i quadrati si rende esplicita la traslazione del centro. Il secondo membro positivo e i coefficienti quadratici dello stesso segno mostrano che si tratta di un’ellisse reale. Il centro annulla i due argomenti dei quadrati.')
    if j==4:
        ans=pair(k,-k); expr=(x-k)**2+(y+k)**2-(k+2)**2
        return task('Centri di circonferenze traslate','riconoscimento',f'La circonferenza $x^2+y^2={((k+2)**2)}$ viene traslata del vettore $({k},-{k})$. Trova il nuovo centro.',ans,[f'(x-{k})^2+(y+{k})^2={(k+2)**2}',r'C^\prime='+L(ans)],'Il centro iniziale è l’origine. La traslazione sposta tutti i punti dello stesso vettore, quindi sposta allo stesso modo anche il centro. Il raggio rimane invariato perché una traslazione conserva le distanze. L’equazione della curva traslata conferma le nuove coordinate del centro.')
    if j==5:
        ans=s.FiniteSet(pair(-k,k*k),pair(k,k*k)); other=2*k*k-x*x
        eq_roots(x*x-other,s.FiniteSet(-k,k))
        return task('Intersezioni di due parabole','intersezioni',f'Trova i punti comuni a $y=x^2$ e $y={2*k*k}-x^2$.',ans,[f'2x^2={2*k*k}',f'x=\\pm{k}',f'y={k*k}',r'P_1='+L(pair(-k,k*k))+r',\quad P_2='+L(pair(k,k*k))],'Le ordinate delle due curve devono coincidere. Uguagliando le espressioni si ottiene un’equazione quadratica nelle ascisse. Per ogni ascissa trovata si calcola l’ordinata con una delle parabole e si verifica anche nell’altra. Le due curve sono simmetriche rispetto a una retta orizzontale e i punti comuni hanno la stessa ordinata.')
    if j==6:
        ans=-k*k; assert s.discriminant(x*x-2*k*x-ans,x)==0
        return task('Parametri di tangenza','tangenza',f'Per quale valore di $q$ la retta $y={2*k}x+q$ è tangente a $y=x^2$?',ans,[f'x^2-{2*k}x-q=0',f'\\Delta={4*k*k}+4q=0',f'q={ans}'],'Sostituendo la retta nella parabola si ottiene un’equazione di secondo grado che descrive le intersezioni. La tangenza richiede una radice doppia e quindi discriminante nullo. Questa condizione determina il termine noto della retta. Con tale valore il polinomio diventa un quadrato perfetto.')
    aa=k; bb=k+4; ans=k+2
    eq_roots((x-aa)**2-(x-bb)**2,s.FiniteSet(ans))
    return task('Luoghi di equidistanza','luoghi',f'Il luogo dei punti equidistanti da $A({aa},0)$ e $B({bb},0)$ è $x=t$. Trova $t$.',ans,[f'(x-{aa})^2+y^2=(x-{bb})^2+y^2',f'{2*(bb-aa)}x={bb*bb-aa*aa}',f'x={ans}'],'Si esprime l’uguaglianza delle distanze dai due punti. Elevare al quadrato è equivalente perché entrambe le distanze sono non negative. I termini quadratici e quelli con l’ordinata si eliminano, lasciando una retta verticale. Essa passa per il punto medio del segmento ed è perpendicolare al segmento stesso.')

def exp(j,k):
    if j==0:
        n=k+1; ans=n**3; assert (s.Integer(n)**2)**s.Rational(3,2)==ans
        return task('Potenze con esponenti razionali','potenze',f'Calcola $({n*n})^{{\\frac32}}$.',ans,[f'({n*n})^{{\\frac32}}=(\\sqrt{{{n*n}}})^3',f'({n})^3={ans}'],'La base è positiva e l’esponente razionale indica una radice seguita da una potenza. Si estrae prima la radice quadrata, scegliendo il valore non negativo, e si eleva poi al cubo. L’ordine inverso darebbe lo stesso risultato ma richiederebbe numeri più grandi.')
    if j==1:
        n=k+2; ans=k; eq_roots(s.Integer(2)**(x+2)-2**n,s.FiniteSet(ans))
        return task('Equazioni esponenziali con base comune','equazioni',f'Risolvi $2^{{x+2}}=2^{{{n}}}$.',s.FiniteSet(ans),[f'x+2={n}',f'x={ans}'],'Le due potenze hanno la stessa base positiva e diversa da uno. La funzione esponenziale è iniettiva e quindi l’uguaglianza delle potenze equivale a quella degli esponenti. Si risolve l’equazione lineare ottenuta. Non compaiono restrizioni aggiuntive, perché gli esponenti sono definiti su tutti i reali.')
    if j==2:
        ans=span(-s.oo,k); inequality(s.Integer(2)**x-2**k,s.Le,ans)
        return task('Disequazioni esponenziali crescenti','crescenti',f'Risolvi $2^x\\leq2^{{{k}}}$.',ans,[r'2>1',f'x\\leq{k}',r'S='+L(ans)],'La base è maggiore di uno, quindi l’esponenziale è strettamente crescente. Il confronto tra i valori equivale al confronto nello stesso verso tra gli esponenti. La soglia è inclusa perché la traccia ammette l’uguaglianza. Ogni valore minore dell’esponente soglia produce una potenza non superiore a quella assegnata.')
    if j==3:
        ans=span(-s.oo,k); inequality(s.Rational(1,2)**x-s.Rational(1,2)**k,s.Ge,ans)
        return task('Disequazioni esponenziali decrescenti','decrescenti',f'Risolvi $\\left(\\dfrac12\\right)^x\\geq\\left(\\dfrac12\\right)^{{{k}}}$.',ans,[r'0<\dfrac12<1',f'x\\leq{k}',r'S='+L(ans)],'La base è positiva e minore di uno, quindi aumentando l’esponente il valore della potenza diminuisce. Per ottenere una potenza maggiore o uguale alla soglia si richiede un esponente minore o uguale. Il cambiamento di verso dipende dalla monotonia. L’estremo è ammesso perché produce la stessa potenza.')
    if j==4:
        n=k+1; ans=s.FiniteSet(0,n); p=2**(2*x)-(1+2**n)*2**x+2**n
        # Polynomial in the positive substitution has the two declared powers as roots.
        t=s.symbols('t',real=True); eq_roots((x-1)*(x-2**n),s.FiniteSet(1,2**n))
        assert all(s.simplify(p.subs(x,v))==0 for v in ans)
        return task('Equazioni quadratiche nell’esponenziale','sostituzione',f'Risolvi $4^x-{1+2**n}\\cdot2^x+{2**n}=0$.',ans,[r't=2^x>0',f'(t-1)(t-{2**n})=0',f'2^x=1\\quad\\text{{oppure}}\\quad 2^x=2^{{{n}}}',r'S='+L(ans)],'Si riscrive la potenza in base quattro come il quadrato della potenza in base due. La sostituzione produce un’equazione quadratica e impone che la nuova incognita sia positiva. Entrambe le radici trovate rispettano questa condizione. Tornando alla potenza iniziale si ricavano due esponenti distinti.')
    if j==5:
        ans=k
        return task('Asintoti di esponenziali traslate','trasformazioni',f'Qual è l’ordinata dell’asintoto orizzontale di $f(x)=3^{{x-{k+1}}}+{k}$?',ans,[r'3^{x-h}>0',f'y={k}'],'Il termine esponenziale è positivo e si avvicina a zero quando l’argomento tende verso valori sempre più negativi. Aggiungere una costante trasla verticalmente il grafico e l’asintoto. Lo spostamento orizzontale presente nell’esponente non modifica l’ordinata dell’asintoto. Tale valore non viene raggiunto dalla funzione.')
    if j==6:
        N=20*(k+1); ans=4*N
        return task('Raddoppiamenti e modelli','modelli',f'Una quantità iniziale di ${N}$ raddoppia ogni $3$ giorni. Quanto vale dopo $6$ giorni?',ans,[f'N(t)={N}\\cdot2^{{\\frac t3}}',f'N(6)={N}\\cdot2^2={ans}'],'Il rapporto tra il tempo trascorso e il tempo di raddoppio conta quanti raddoppi sono avvenuti. Dopo sei giorni ne sono avvenuti due. Ciascun raddoppio moltiplica la quantità per due, quindi il fattore complessivo è quattro. La crescita si calcola con un prodotto ripetuto e non con un incremento costante.')
    ans=span(k,s.oo,lo=True)
    return task('Immagini di esponenziali traslate','funzione',f'Trova l’immagine di $f(x)=2^{{x-{k}}}+{k}$ su $\\mathbb R$.',ans,[r'2^{x-k}\in(0,+\infty)',r'f(\mathbb R)='+L(ans)],'L’esponenziale assume tutti e soli i valori positivi. La traslazione orizzontale non cambia questo insieme, mentre l’addizione della costante lo sposta verticalmente. L’estremo inferiore resta escluso perché una potenza con base positiva non è mai zero. Non esiste un limite superiore per i valori assunti.')

def logs(j,k):
    if j==0:
        n=k%5+2; power=k-3; ans=power
        return task('Logaritmi dalla definizione','definizione',f'Calcola $\\log_{{{n}}}\\left({L(s.Integer(n)**power)}\\right)$.',ans,[f'{n}^{{{power}}}={L(s.Integer(n)**power)}',f'\\log_{{{n}}}\\left({L(s.Integer(n)**power)}\\right)={power}'],'Il logaritmo è l’esponente da assegnare alla base per ottenere l’argomento. La base è maggiore di uno e l’argomento è positivo, quindi il logaritmo esiste. La potenza mostrata identifica direttamente l’esponente. Un esponente negativo corrisponde al reciproco di una potenza positiva.')
    if j==1:
        n=k+2; A=3*2**n; ans=n
        return task('Differenze di logaritmi','proprieta',f'Calcola $\\log_2({A})-\\log_2 3$.',ans,[f'\\log_2\\dfrac{{{A}}}3=\\log_2({2**n})',f'\\log_2(2^{{{n}}})={n}'],'Entrambi gli argomenti sono positivi, quindi si può applicare la proprietà del rapporto. La differenza diventa il logaritmo di un quoziente che è una potenza della base. La definizione di logaritmo restituisce l’esponente di tale potenza. Le condizioni sugli argomenti rendono valida la trasformazione fin dall’inizio.')
    if j==2:
        ans=s.Rational(k+1,2)
        return task('Cambi di base','base',f'Calcola $\\log_4(2^{{{k+1}}})$.',ans,[f'\\log_4(2^{{{k+1}}})=\\dfrac{{\\log_2(2^{{{k+1}}})}}{{\\log_2 4}}',f'=\\dfrac{{{k+1}}}2={L(ans)}'],'Si cambia la base del logaritmo in due, così numeratore e denominatore diventano immediati. La base quattro è ammissibile e il denominatore del cambio di base è diverso da zero. Il risultato può essere frazionario perché l’esponente necessario per passare da quattro alla potenza assegnata non deve essere intero.')
    if j==3:
        ans=span(k,s.oo,lo=True)
        return task('Domini logaritmici','dominio',f'Trova il dominio di $f(x)=\\ln(x-{k})$.',ans,[f'x-{k}>0',r'D='+L(ans)],'Il logaritmo reale è definito soltanto con argomento strettamente positivo. Si impone quindi una disequazione lineare nell’incognita. Il valore che annulla l’argomento è escluso e corrisponde alla retta asintotica verticale. Per valori inferiori l’argomento sarebbe negativo e il logaritmo reale non esisterebbe.')
    if j==4:
        n=k%4+1; ans=s.FiniteSet(k+2**n)
        assert s.log((k+2**n)-k,2)==n
        return task('Equazioni logaritmiche elementari','equazioni',f'Risolvi $\\log_2(x-{k})={n}$.',ans,[f'x>{k}',f'x-{k}=2^{{{n}}}={2**n}',r'S='+L(ans)],'Si impone il dominio prima di trasformare l’equazione. La definizione di logaritmo permette di passare all’uguaglianza tra l’argomento e una potenza della base. La soluzione lineare ottenuta appartiene al dominio perché la potenza è positiva. La sostituzione verifica anche il valore del logaritmo.')
    if j==5:
        n=k%4+1; hi=k+2**n; ans=span(k,hi,lo=True)
        return task('Disequazioni con logaritmi crescenti','disequazioni',f'Risolvi $\\log_2(x-{k})\\leq{n}$.',ans,[f'x>{k}',f'x-{k}\\leq2^{{{n}}}={2**n}',r'S='+L(ans)],'La base due è maggiore di uno e la funzione logaritmica è crescente. Si confronta quindi l’argomento con la potenza corrispondente mantenendo il verso. Il risultato va intersecato con il dominio. L’estremo inferiore è escluso perché annulla l’argomento, mentre quello superiore è incluso per l’uguaglianza ammessa.')
    if j==6:
        n=k%4+1; hi=k+2**n; ans=span(k,hi,lo=True)
        return task('Disequazioni con logaritmi decrescenti','disequazioni',f'Risolvi $\\log_{{\\frac12}}(x-{k})\\geq-{n}$.',ans,[f'x>{k}',f'x-{k}\\leq\\left(\\dfrac12\\right)^{{-{n}}}={2**n}',r'S='+L(ans)],'La base è compresa tra zero e uno, quindi la funzione logaritmica è decrescente. Il confronto maggiore o uguale tra logaritmi richiede un confronto minore o uguale tra gli argomenti. Si mantiene anche la condizione di positività dell’argomento. I due estremi hanno inclusione diversa per le due condizioni imposte.')
    N=50*(k+1); n=k%5+2; ans=n
    return task('Tempi in modelli esponenziali','modelli',f'Nel modello $N(t)={N}\\cdot2^t$, in quale tempo reale si raggiunge ${N*2**n}$?',ans,[f'2^t=\\dfrac{{{N*2**n}}}{{{N}}}={2**n}',f't=\\log_2({2**n})={n}'],'Si divide il valore soglia per la quantità iniziale per ottenere il fattore di crescita richiesto. Il tempo è l’esponente della base due che produce quel fattore. In questo caso il rapporto è una potenza intera, quindi il logaritmo restituisce un tempo esatto senza approssimazioni. La sostituzione nel modello verifica la soglia.')

def stats(j,k):
    if j==0:
        n=k+1; N=4*n; ans=s.Rational(1,4)
        return task('Frequenze relative','frequenze',f'Un valore compare ${n}$ volte su ${N}$ osservazioni. Trova la frequenza relativa come numero, non in percentuale.',ans,[f'f=\\dfrac{{{n}}}{{{N}}}={L(ans)}'],'La frequenza relativa confronta il numero di occorrenze con il totale delle osservazioni. Il quoziente viene ridotto ai minimi termini. Per convertirlo in frequenza percentuale si moltiplicherebbe per cento, ma qui si richiede il numero. Il risultato è compreso tra zero e uno, come deve avvenire per ogni frequenza relativa.')
    if j==1:
        data=[k,k+2,k+7]; ans=s.Rational(sum(data),3)
        assert ans==s.Add(*data)/3
        return task('Medie di dati individuali','media',f'Calcola la media aritmetica dei dati ${k}$, ${k+2}$, ${k+7}$.',ans,[f'\\bar x=\\dfrac{{{k}+{k+2}+{k+7}}}3',r'\bar x='+L(ans)],'I dati hanno tutti lo stesso peso, quindi si sommano e si divide per il loro numero. La somma conserva l’informazione totale e la media distribuisce tale somma in parti uguali. Il risultato si trova tra il minimo e il massimo dei dati. Non si divide per il valore massimo né per la somma delle frequenze relative.')
    if j==2:
        data=[k+9,k,k+3,k+3,k+7]; ans=sorted(data)[2]
        return task('Mediane con numerosità dispari','mediana',f'Trova la mediana dei dati, presentati in ordine sparso: ${k+9}$, ${k}$, ${k+3}$, ${k+3}$, ${k+7}$.',ans,[r'('+','.join(map(str,sorted(data)))+')',f'\\operatorname{{mediana}}={ans}'],'La mediana dipende dalla posizione dopo l’ordinamento. Con cinque osservazioni si seleziona il terzo dato della lista ordinata. Il valore ripetuto occupa due posizioni e va riportato entrambe le volte, perché ciascuna osservazione conta. La mediana così trovata lascia almeno metà delle osservazioni da ciascun lato, considerando anche le uguaglianze.')
    if j==3:
        data=[k,k+2,k+4]; mean=s.Rational(sum(data),3); ans=sum((z-mean)**2 for z in data)/3
        assert ans==s.Rational(8,3)
        return task('Varianze descrittive','varianza',f'Calcola la varianza dei dati ${k}$, ${k+2}$, ${k+4}$ usando il divisore $N=3$.',ans,[f'\\bar x={k+2}',r'\sigma^2=\dfrac{(-2)^2+0^2+2^2}3=\dfrac83'],'Si calcola prima la media e poi lo scarto di ciascun dato dalla media. Gli scarti vengono elevati al quadrato per evitare che quelli positivi e negativi si annullino. La traccia descrive l’intera popolazione osservata e richiede il divisore N. La varianza è non negativa e ha unità pari al quadrato dell’unità dei dati.')
    if j==4:
        a=k+1; original=4; ans=a*a*original
        return task('Varianze dopo trasformazioni affini','trasformazioni',f'Un insieme di dati ha varianza $4$. Se ogni dato diventa $y={a}x+7$, qual è la nuova varianza?',ans,[f'\\sigma_y^2={a}^2\\sigma_x^2',f'\\sigma_y^2={a*a}\\cdot4={ans}'],'Aggiungere la stessa costante a tutti i dati sposta anche la media e lascia invariati gli scarti. Moltiplicare i dati per un coefficiente moltiplica invece ogni scarto per quel coefficiente. Nella varianza gli scarti sono al quadrato, quindi il fattore si presenta al quadrato. La costante additiva non entra nel risultato.')
    if j==5:
        a=k+1; X=[1,2,3]; Y=[a*z+k for z in X]; xm=s.Rational(sum(X),3); ym=s.Rational(sum(Y),3)
        ans=sum((u-xm)*(v-ym) for u,v in zip(X,Y))/3
        assert ans==s.Rational(2*a,3)
        return task('Covarianze di coppie di dati','covarianza',f'Calcola la covarianza con divisore $N=3$ delle coppie $(1,{Y[0]})$, $(2,{Y[1]})$, $(3,{Y[2]})$.',ans,[f'\\bar x=2,\\quad\\bar y={L(ym)}',f'\\operatorname{{cov}}=\\dfrac{{(-1)(-{a})+0+1\\cdot{a}}}3={L(ans)}'],'Si calcolano le due medie usando tutte le coppie. Per ogni osservazione si moltiplica lo scarto della prima variabile per quello della seconda e si fa la media dei prodotti. In questi dati gli scarti hanno lo stesso segno nelle coppie estreme, quindi la covarianza è positiva e indica una tendenza crescente congiunta.')
    if j==6:
        a=k+1; X=[1,2,3]; Y=[a*z+k for z in X]; cov=s.Rational(2*a,3); var=s.Rational(2,3); ans=a
        assert cov/var==ans
        return task('Pendenze di rette di regressione','regressione',f'Trova il coefficiente angolare della retta di regressione di $y$ su $x$ per $(1,{Y[0]})$, $(2,{Y[1]})$, $(3,{Y[2]})$.',ans,[r'\sigma_x^2=\dfrac23',r'\operatorname{cov}(x,y)='+L(cov),r'm=\dfrac{\operatorname{cov}(x,y)}{\sigma_x^2}='+L(ans)],'La variabilità delle ascisse è positiva, quindi la retta di regressione di y su x è definita. Il suo coefficiente angolare è il rapporto tra covarianza e varianza delle ascisse. I tre punti sono allineati, quindi la retta trovata li contiene tutti e gli scarti verticali sono nulli. L’intercetta si ricaverebbe usando le medie delle coordinate.')
    val1,val2=k,k+4; n1,n2=3,1; ans=s.Rational(val1*n1+val2*n2,n1+n2)
    return task('Medie da tabelle di frequenza','media',f'Il valore ${val1}$ ha frequenza $3$ e il valore ${val2}$ frequenza $1$. Trova la media delle quattro osservazioni.',ans,[f'\\bar x=\\dfrac{{3\\cdot{val1}+1\\cdot{val2}}}{{3+1}}',r'\bar x='+L(ans)],'Ogni valore entra nella somma tante volte quante indica la sua frequenza. Si moltiplicano quindi i valori per i rispettivi conteggi e si divide per il totale delle osservazioni. La media semplice dei due valori distinti non terrebbe conto delle loro frequenze diverse. Il risultato è più vicino al valore che compare più spesso.')

BUILDERS=[algebra,assoluto,funzioni,retta,parabola,circle,ellisse,iperbole,transforms,exp,logs,stats]

def shifted(v,d):
    if isinstance(v,s.Tuple): return s.Tuple(*(shifted(z,d) for z in v))
    if isinstance(v,s.FiniteSet): return s.FiniteSet(*(shifted(z,d) for z in v))
    if isinstance(v,s.Interval): return s.Interval(v.start+d,v.end+d,left_open=v.left_open,right_open=v.right_open)
    if isinstance(v,s.Union): return s.Union(*(shifted(z,d) for z in v.args))
    return s.simplify(v+d)

def options(ans):
    out=[ans]
    for d in [1,-1,2,-2,3,-3]:
        candidate=shifted(ans,d)
        if not any(equal(candidate,z) for z in out): out.append(candidate)
        if len(out)==4: break
    assert len(out)==4
    for i,a in enumerate(out):
        assert all(not equal(a,b) for b in out[i+1:]),out
    return out

def front(data):
    return '---\n'+yaml.safe_dump(data,allow_unicode=True,sort_keys=False,width=1000)+'---\n\n'

def write(collection,relative,body):
    path=ROOT/'src/content'/collection/SLUG/relative
    path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text(body.strip()+'\n')

def calculation(t):
    return '$$\n\\begin{gathered}\n'+r'\\[6pt]'.join(t.steps)+'\n\\end{gathered}\n$$\n'

def main():
    totals={'teoria':0,'svolti':0,'esercizi_svolti':0,'dafare':0,'domande':0}
    report=[]
    for ci,((slug,title,brief),builder) in enumerate(zip(CHAPTERS,BUILDERS)):
        source=THEORY[slug].strip()
        anchors=set(__import__('re').findall(r'\{#([\w-]+)',source))
        assert 6<=source.count('\n## ')+source.startswith('## ')<=10
        write('teoria',slug+'.md',front({'titolo':title,'sommario':f'{brief}: definizioni, metodi, esempi e condizioni da usare negli esercizi del terzo anno.'})+source)
        totals['teoria']+=1
        for j in range(8):
            tasks=[builder(j,k) for k in [1,2]]
            from approfondimenti import extra
            extra_j, extra_task = extra(ci,task,x,y)
            if j==extra_j: tasks.append(extra_task)
            t=tasks[0]; assert t.anchor in anchors,(slug,t.anchor)
            body=front({'titolo':t.title,'gratis':j<3,'teoria':[t.anchor],'parole':[brief.lower(),t.title.lower()]})
            for n,t in enumerate(tasks,1):
                body+=f'## Esercizio {n}\n\n{t.prompt}\n\n'+calculation(t)+'\n'
                from figure import figure
                diagram = t.graph or (figure(ci,j) if n==2 else '')
                if diagram: body+=diagram+'\n\n'
                body+='<div class="spiegazione">\n\n'+t.explanation+'\n\nIl risultato è '+M(t.answer)+'.\n\n</div>\n\n'
            write('svolti',f'{slug}/{j+1}.md',body)
            totals['svolti']+=1; totals['esercizi_svolti']+=len(tasks)
        for n in range(14):
            t=builder(n%8,4+n//8); assert t.anchor in anchors
            body=front({'titolo':f'{t.title} · {n+1}','teoria':[t.anchor],'parole':[brief.lower(),t.title.lower()]})
            body+=t.prompt+'\n\n:::soluzione\n'+M(t.answer)+'\n:::\n'
            write('dafare',f'{slug}/{n+1}.md',body); totals['dafare']+=1
        traces=set()
        for n in range(45):
            t=builder(n%8,10+n//8)
            assert t.prompt not in traces,(slug,n,t.prompt)
            traces.add(t.prompt)
            opts=options(t.answer); correct=(n+ci)%4
            opts=opts[1:correct+1]+[opts[0]]+opts[correct+1:]
            assert equal(opts[correct],t.answer)
            body=front({'corretta':correct+1})+t.prompt+'\n\n'+'\n'.join('- '+M(z) for z in opts)
            body+='\n\n## Spiegazione\n\n'+t.explanation+'\n\n'+calculation(t)
            write('domande',f'{slug}/{n+1}.md',body); totals['domande']+=1
            report.append({'capitolo':slug,'numero':n+1,'risposta':s.srepr(t.answer),'posizione':correct+1,'famiglia':t.title})
    (ROOT/'revisioni'/SLUG/'risposte-verificate.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
    print(json.dumps(totals,ensure_ascii=False))

if __name__=='__main__': main()
