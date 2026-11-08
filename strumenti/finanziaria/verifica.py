"""Ricalcola i residui delle equazioni finanziarie e controlla i risultati scritti nei Markdown."""
from pathlib import Path
import json,math,re
ROOT=Path(__file__).resolve().parents[2]
records=json.loads((ROOT/'strumenti/finanziaria/controlli.json').read_text())
errors=[]
for r in records:
    p=r['params']|{'ans':r['answer']}
    env={'__builtins__':{},'sum':sum,'range':range,'round':round,'enumerate':enumerate,'zip':zip,'prod':math.prod,'exp':math.exp,'log':math.log}|p
    residual=eval(r['check'],env)
    if abs(residual)>1e-8*max(1,abs(r['answer'])): errors.append((r['file'],'residuo',residual))
    text=(ROOT/r['file']).read_text()
    if r['risultato'] not in text: errors.append((r['file'],'risultato assente'))
# Verifica indipendente: somma delle quote capitale e saldo finale dei piani francesi.
for k in range(8):
    C=10000+500*k;i=.035+.002*k;n=4+k%3
    R=C*i/(1-(1+i)**(-n));D=C;capitali=[]
    for _ in range(n):
        quota=R-i*D;capitali.append(quota);D-=quota
    assert abs(D)<1e-7 and abs(sum(capitali)-C)<1e-7
# Derivate del prezzo: confronto con differenze finite centrali, indipendenti dalle somme delle derivate.
for k in range(8):
    i=.03+.002*k;c=40+2*k;h=1e-5
    price=lambda y: c/(1+y)+c/(1+y)**2+(1000+c)/(1+y)**3
    first=(price(i+h)-price(i-h))/(2*h)
    second=(price(i+h)-2*price(i)+price(i-h))/(h*h)
    target=[r for r in records if r['file'].endswith('duration-convexity/8.md') and r['params'].get('i')==i]
    if target: assert abs(first-target[0]['answer'])/abs(first)<1e-7
    cv=(2*c/(1+i)**3+6*c/(1+i)**4+12*(1000+c)/(1+i)**5)/price(i)
    assert abs(second/price(i)-cv)<1e-4
# Redington: confronto del surplus esatto con la positività per piccoli spostamenti in entrambe le direzioni.
for H in (3,4):
    T1,T2,delta,L=1,7,.04,10000
    L0=L*math.exp(-delta*H);w=(T2-H)/(T2-T1)
    F1=L0*w*math.exp(delta*T1);F2=L0*(1-w)*math.exp(delta*T2)
    for shock in (-.001,.001):
        new=delta+shock
        assert F1*math.exp(-new*T1)+F2*math.exp(-new*T2)-L*math.exp(-new*H)>0
if errors:
    for e in errors:print(e)
    raise SystemExit(1)
print(f'{len(records)} risultati verificati; piani, derivate e immunizzazione controllati indipendentemente.')
