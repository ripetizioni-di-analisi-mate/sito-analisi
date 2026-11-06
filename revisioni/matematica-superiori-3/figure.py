"""Figure delle schede, riferite ai dati del secondo esempio."""
def figure(ci,j):
    attributes = {
      (2,6): dict(f='(x-2)^2-1',xmin=-1,xmax=5,ymin=-3,ymax=9,punti='2,-1,pieno,V',titolo='Il vertice è $(2,-1)$'),
      (3,2): dict(f='3*x-2',xmin=-1,xmax=5,ymin=-4,ymax=12,punti='1,1,pieno,A;3,7,pieno,B',titolo='La retta passa per $A(1,1)$ e $B(3,7)$'),
      (3,5): dict(f='2*x;-x+6',xmin=-1,xmax=5,ymin=-2,ymax=9,punti='2,4,pieno,P',titolo='L’intersezione è $P(2,4)$'),
      (3,6): dict(f='2.5-0.75*x',xmin=-2,xmax=5,ymin=-2,ymax=5,punti='0,0,pieno,O;1.2,1.6,pieno,H',linee='0,0 1.2,1.6',uguale=1,titolo='La distanza dall’origine alla retta è il segmento $OH=2$'),
      (4,0): dict(f='(x-2)^2-1',xmin=-1,xmax=5,ymin=-3,ymax=9,punti='2,-1,pieno,V',titolo='La forma del vertice rende esplicito $V(2,-1)$'),
      (4,2): dict(f='3*(x-2)^2-1',xmin=-1,xmax=5,ymin=-3,ymax=14,punti='2,-1,pieno,V;4,11,pieno,P',titolo='Vertice $(2,-1)$ e punto $(4,11)$ determinano la parabola'),
      (4,5): dict(f='x^2;4*x-4',xmin=-2,xmax=5,ymin=-5,ymax=15,punti='2,4,pieno,T',titolo='La retta $y=4x-4$ è tangente in $T(2,4)$'),
      (4,6): dict(curve='t^2-2,t+3,-3,3',xmin=-3,xmax=8,ymin=-1,ymax=7,punti='-2,3,pieno,V',legenda='x=(y-3)^2-2',titolo='La parabola orizzontale ha vertice $V(-2,3)$'),
      (5,0): dict(curve='2+4*cos(t),-1+4*sin(t),0,6.283185307',xmin=-4,xmax=8,ymin=-7,ymax=5,uguale=1,punti='2,-1,pieno,C;6,-1,pieno,P',linee='2,-1 6,-1',legenda='(x-2)^2+(y+1)^2=16',titolo='Il raggio $CP$ misura $4$'),
      (5,4): dict(curve='10*cos(t),10*sin(t),0,6.283185307',f='6',xmin=-12,xmax=12,ymin=-12,ymax=12,uguale=1,punti='-8,6,pieno,A;8,6,pieno,B',legenda='y=6;x^2+y^2=100',titolo='La retta $y=6$ incontra la circonferenza nelle ascisse $-8$ e $8$'),
      (5,5): dict(curve='10*cos(t),10*sin(t),0,6.283185307',f='12.5-0.75*x',xmin=-13,xmax=13,ymin=-13,ymax=15,uguale=1,punti='0,0,pieno,O;6,8,pieno,P',linee='0,0 6,8',legenda='6x+8y=100;x^2+y^2=100',titolo='La tangente è perpendicolare al raggio $OP$'),
      (5,6): dict(curve='10*cos(t),10*sin(t),0,6.283185307',xmin=-12,xmax=12,ymin=-12,ymax=12,uguale=1,punti='0,0,pieno,O;0,6,pieno,H;-8,6,pieno,A;8,6,pieno,B',linee='-8,6 8,6;0,0 0,6;0,0 8,6',legenda='x^2+y^2=100',titolo='$OH=6$, il raggio è $10$ e la corda $AB$ misura $16$'),
      (6,1): dict(curve='10*cos(t),6*sin(t),0,6.283185307',xmin=-12,xmax=12,ymin=-8,ymax=8,uguale=1,punti='-8,0,pieno,F₁;8,0,pieno,F₂',legenda='\\dfrac{x^2}{100}+\\dfrac{y^2}{36}=1',titolo='La distanza di ciascun fuoco dal centro è $8$'),
      (6,4): dict(curve='2+10*cos(t),6*sin(t),0,6.283185307',xmin=-10,xmax=14,ymin=-8,ymax=8,uguale=1,punti='2,0,pieno,C;-6,0,pieno,F₁;10,0,pieno,F₂',legenda='\\dfrac{(x-2)^2}{100}+\\dfrac{y^2}{36}=1',titolo='Il centro è $(2,0)$ e il fuoco con ascissa minore è $(-6,0)$'),
      (7,1): dict(f='4/3*sqrt(x^2-36);-4/3*sqrt(x^2-36)',xmin=-15,xmax=15,ymin=-15,ymax=15,uguale=1,punti='-10,0,pieno,F₁;10,0,pieno,F₂;-6,0,pieno,V₁;6,0,pieno,V₂',legenda='y=\\dfrac43\\sqrt{x^2-36};y=-\\dfrac43\\sqrt{x^2-36}',titolo='I vertici hanno ascisse $\\pm6$ e i fuochi $\\pm10$'),
      (7,7): dict(f='4+5/(x-2)',xmin=-5,xmax=9,ymin=-4,ymax=12,asintoti='x=2;y=4',punti='2,4,pieno,C',titolo='Gli asintoti si intersecano nel centro $C(2,4)$'),
      (8,0): dict(xmin=-1,xmax=6,ymin=-3,ymax=4,uguale=1,punti='2,1,pieno,P;4,-1,pieno,P′',vettori='2,1,4,-1,v',titolo='Il vettore $(2,-2)$ porta $P$ in $P′$'),
      (8,2): dict(xmin=-6,xmax=4,ymin=-10,ymax=6,uguale=1,punti='0,0,pieno,O;2,4,pieno,P;-4,-8,pieno,P′',linee='-4,-8 2,4',titolo='Il rapporto $-2$ raddoppia la distanza e cambia la semiretta'),
    }.get((ci,j))
    if not attributes: return ''
    return '::grafico{'+ ' '.join(f'{key}="{value}"' for key,value in attributes.items())+'}'
