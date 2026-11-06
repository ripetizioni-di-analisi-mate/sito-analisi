"""Un esempio ulteriore per capitolo, con più passaggi e controlli indipendenti."""
import sympy as s

def extra(ci,task,x,y):
    if ci==0:
        expr=(x*x-9)/(x*x-x-6)
        assert s.solve_univariate_inequality(expr>=0,x,relational=False)==s.Union(s.Interval(-s.oo,-3),s.Interval(-2,3,left_open=True,right_open=True),s.Interval(3,s.oo,left_open=True))
        return 4,task('Disequazioni fratte','fratte',r'Risolvi $\dfrac{x^2-9}{x^2-x-6}\geq0$.',s.Union(s.Interval(-s.oo,-3),s.Interval(-2,3,left_open=True,right_open=True),s.Interval(3,s.oo,left_open=True)),[r'x\neq-2,\quad x\neq3',r'\dfrac{(x-3)(x+3)}{(x-3)(x+2)}=\dfrac{x+3}{x+2}\quad(x\neq3)',r'S=(-\infty,-3]\cup(-2,3)\cup(3,+\infty)'],'Le condizioni di esistenza vengono dalla forma iniziale, quindi entrambi gli zeri del denominatore restano esclusi dopo la semplificazione. Il rapporto semplificato è non negativo quando numeratore e denominatore hanno lo stesso segno oppure quando si annulla il numeratore. Si ottengono gli intervalli esterni agli zeri del rapporto semplificato e si esclude anche il punto tre. Lo zero meno tre è ammesso perché il denominatore iniziale vi è diverso da zero.')
    if ci==1:
        ans=s.FiniteSet(1,8)
        assert s.solveset(s.sqrt(3*x+1)-s.Abs(x-3),x,s.S.Reals)==ans
        return 5,task('Equazioni irrazionali con controllo dei candidati','irrazionali',r'Risolvi $\sqrt{3x+1}=|x-3|$.',ans,[r'x\geq-\dfrac13',r'3x+1=(x-3)^2',r'x^2-9x+8=0',r'x=1\quad\text{oppure}\quad x=8'],'Entrambi i membri sono non negativi nel dominio, quindi si può elevare al quadrato in modo equivalente. Il quadrato del valore assoluto coincide con il quadrato dell’argomento. Si risolve la quadratica e si controllano dominio e sostituzione: in uno si trova due uguale a due e nell’altro cinque uguale a cinque.')
    if ci==2:
        inv=(3*x+1)/(x-2); f=(2*x+1)/(x-3)
        assert s.simplify(f.subs(x,inv)-x)==0
        return 5,task('Inverse di funzioni razionali','inversa',r'Trova l’inversa di $f(x)=\dfrac{2x+1}{x-3}$, con dominio $x\neq3$, e indica il dominio dell’inversa.',s.Tuple(inv,s.Complement(s.S.Reals,s.FiniteSet(2))),[r'y(x-3)=2x+1',r'x(y-2)=3y+1',r'x=\dfrac{3y+1}{y-2}',r'f^{-1}(x)=\dfrac{3x+1}{x-2},\quad D_{f^{-1}}=\mathbb R\setminus\{2\}'],'Si risolve l’equazione rispetto all’ascissa iniziale. Il valore due non può essere assunto dalla funzione, perché sostituirlo produrrebbe un’uguaglianza impossibile. Ogni altro valore determina una sola ascissa, quindi l’inversa è definita sull’immagine indicata. La composizione delle due espressioni restituisce l’argomento nei rispettivi domini.')
    if ci==3:
        # A perpendicular bisector combines midpoint, slope and incidence.
        expr=-s.Rational(3,4)*x+s.Rational(17,8)
        assert expr.subs(x,s.Rational(3,2))==s.Integer(1)
        return 4,task('Perpendicolari per punti assegnati','perpendicolari',r'Trova l’asse del segmento con estremi $A(0,-1)$ e $B(3,3)$, nella forma $y=f(x)$.',expr,[r'M=\left(\dfrac32,1\right)',r'm_{AB}=\dfrac43,\quad m_\perp=-\dfrac34',r'y-1=-\dfrac34\left(x-\dfrac32\right)',r'y=-\dfrac34x+\dfrac{17}{8}'],'L’asse del segmento è la retta perpendicolare al segmento nel suo punto medio. Si ricavano prima il punto medio e il coefficiente angolare della retta degli estremi. Il coefficiente della perpendicolare è l’opposto del reciproco. Sostituendo il punto medio nella forma punto-pendenza si ottiene l’equazione; le distanze di ogni suo punto dai due estremi risultano uguali.')
    if ci==4:
        ans=s.FiniteSet(2*x-1,-2*x-1)
        for line in ans: assert s.discriminant(x*x-line,x)==0 and line.subs(x,0)==-1
        return 5,task('Tangenti da un punto esterno','tangenti',r'Trova le tangenti alla parabola $y=x^2$ passanti per $P(0,-1)$, esprimendole come $y=f(x)$.',ans,[r'y=mx-1',r'x^2-mx+1=0',r'\Delta=m^2-4=0',r'm=\pm2',r'y=2x-1\quad\text{oppure}\quad y=-2x-1'],'Il passaggio per il punto fissa il termine noto e lascia incognito il coefficiente angolare. Si sostituisce la famiglia di rette nell’equazione della parabola e si impone una radice doppia. Si ottengono due valori di pendenza e due rette. I punti di contatto sono rispettivamente uno, uno e meno uno, uno; entrambi soddisfano parabola e tangente.')
    if ci==5:
        ans=s.FiniteSet(s.sqrt(3)*(x-4)/3,-s.sqrt(3)*(x-4)/3)
        for line in ans: assert s.discriminant(x*x+line**2-4,x).simplify()==0
        return 5,task('Tangenti da un punto esterno','tangenti',r'Trova le tangenti a $x^2+y^2=4$ passanti per $P(4,0)$, nella forma $y=f(x)$.',ans,[r'y=m(x-4)',r'\dfrac{|4m|}{\sqrt{m^2+1}}=2',r'16m^2=4(m^2+1)',r'm^2=\dfrac13',r'y=\pm\dfrac{\sqrt3}{3}(x-4)'],'Le rette non verticali che passano per il punto hanno l’equazione indicata. La distanza del centro dalla retta deve essere uguale al raggio. Entrambi i membri dell’equazione delle distanze sono non negativi, quindi il quadrato è equivalente. Si trovano due rette. La verticale per il punto è esterna e non aggiunge tangenti.')
    if ci==6:
        ans=s.FiniteSet(s.sqrt(41)/2,-s.sqrt(41)/2)
        for q in ans: assert s.discriminant(x*x/25+(s.Rational(1,2)*x+q)**2/4-1,x)==0
        return 7,task('Tangenti di direzione assegnata','tangenti',r'Trova i valori di $q$ per cui $y=\dfrac12x+q$ è tangente a $\dfrac{x^2}{25}+\dfrac{y^2}{4}=1$.',ans,[r'\dfrac{x^2}{25}+\dfrac{(\dfrac x2+q)^2}{4}=1',r'41x^2+100qx+100q^2-400=0',r'\Delta=65600-6400q^2=0',r'q=\pm\dfrac{\sqrt{41}}2'],'La sostituzione della retta nell’ellisse produce una quadratica nell’ascissa. Il discriminante nullo impone che l’intersezione sia doppia. Le due soluzioni per l’intercetta sono opposte, perché l’ellisse è centrata nell’origine. Si controlla ogni valore sostituendolo nel discriminante senza arrotondare le radici.')
    if ci==7:
        expr=(2*x+3)/(x-1); assert s.simplify(expr-(2+5/(x-1)))==0
        return 7,task('Forme omografiche e intersezioni','omografica',r'Per $y=\dfrac{2x+3}{x-1}$ determina centro, asintoti e intersezioni con gli assi.',s.Tuple(s.Tuple(1,2),s.Tuple(-s.Rational(3,2),0),s.Tuple(0,-3)),[r'y=2+\dfrac5{x-1}',r'C=(1,2),\quad x=1,\quad y=2',r'2x+3=0\Rightarrow x=-\dfrac32',r'x=0\Rightarrow y=-3'],'La divisione separa il termine costante dal reciproco e permette di leggere i due asintoti. La loro intersezione è il centro dell’iperbole. Per l’intersezione con l’asse orizzontale si annulla il numeratore controllando il denominatore. Per quella con l’asse verticale si sostituisce zero, che appartiene al dominio. Il grafico non incontra i due asintoti.')
    if ci==8:
        q=s.symbols('q',real=True)
        assert s.solve(s.discriminant((x-1)**2-2-2*x-q,x),q)==[-5]
        assert (s.Integer(2)-1)**2-2==-1
        return 6,task('Parametri e contatti tra coniche','tangenza',r'Per quale valore di $q$ la retta $y=2x+q$ è tangente alla parabola $y=(x-1)^2-2$? Trova anche il punto di contatto.',s.Tuple(-5,s.Tuple(2,-1)),[r'(x-1)^2-2=2x+q',r'x^2-4x-1-q=0',r'\Delta=20+4q=0\Rightarrow q=-5',r'x=2,\quad y=-1'],'La traslazione della parabola modifica i coefficienti della quadratica delle intersezioni. Si impone discriminante nullo per ricavare il parametro. L’ascissa della radice doppia fornisce il contatto e l’ordinata si ottiene dalla retta. La coppia trovata verifica anche la parabola iniziale, controllando insieme parametro e coordinate.')
    if ci==9:
        ans=s.FiniteSet(2); pol=2**(2*x)-3*2**x-4
        assert pol.subs(x,2)==0
        return 4,task('Equazioni quadratiche con radici da scartare','sostituzione',r'Risolvi $4^x-3\cdot2^x-4=0$.',ans,[r't=2^x>0',r't^2-3t-4=(t-4)(t+1)=0',r't=4\quad(t=-1\text{ escluso})',r'2^x=4\Rightarrow x=2'],'La sostituzione trasforma l’equazione in una quadratica, ma la nuova incognita può assumere soltanto valori positivi. La radice meno uno della quadratica è quindi incompatibile con la sostituzione e viene scartata. Dalla radice positiva si ricava l’unico esponente reale. Il controllo nella traccia dà sedici meno dodici meno quattro uguale a zero.')
    if ci==10:
        ans=s.FiniteSet(3); assert s.simplify(s.log(3-1)+s.log(3+1)-s.log(8))==0
        return 4,task('Equazioni logaritmiche con controllo del dominio','equazioni',r'Risolvi $\ln(x-1)+\ln(x+1)=\ln8$.',ans,[r'x>1',r'\ln[(x-1)(x+1)]=\ln8',r'x^2-1=8\Rightarrow x=\pm3',r'S=\{3\}'],'Entrambi gli argomenti devono essere positivi e la condizione comune è x maggiore di uno. In questo dominio si applica la proprietà del prodotto e poi l’iniettività del logaritmo. La quadratica dà due candidati, ma quello negativo non appartiene al dominio. Il valore tre rende gli argomenti due e quattro, il cui prodotto è otto.')
    return 7,task('Medie aggregate di gruppi','media',r'Una classe di $20$ studenti ha voto medio $6$ e una di $30$ ha voto medio $7$. Trova la media complessiva dei $50$ studenti.',s.Rational(33,5),[r'T_1=20\cdot6=120,\quad T_2=30\cdot7=210',r'\bar x=\dfrac{120+210}{20+30}=\dfrac{33}{5}=6{,}6'],'Le medie delle due classi riassumono somme riferite a numerosità diverse. Moltiplicando ogni media per la numerosità si ricostruisce la somma dei voti di ciascun gruppo. Le somme si aggiungono e si dividono per il numero complessivo di studenti. La media semplice delle due medie darebbe un peso uguale a classi di dimensioni diverse e non risponderebbe alla richiesta.')
