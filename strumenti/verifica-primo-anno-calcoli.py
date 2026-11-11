#!/usr/bin/env python3
"""Independent reviewer oracles. Loads definitions only; never runs writers.

The oracle expressions are reconstructed from the problem statements reviewed
for each family. They do not use an author's expression/value as the oracle.
Reproducible verification of 1,980 quiz generator cases. Numeric, algebraic,
interval and set answers are parsed from their visible TeX, then compared with
separate formulas. Textual families retain explicit independently reviewed
answers; exact text matching is not a general natural-language proof.

Dependencies: Python 3.10+, sympy and PyYAML (the mathematics generator imports
PyYAML). No ANTLR dependency is needed: TeX parsing uses a restricted translator.
Default output is a JSON summary on stdout; --output writes the detailed report
only to the explicitly requested location. The source generators are loaded as
AST definitions, so running this check never regenerates or edits content.

Usage:
  python3 strumenti/verifica-primo-anno-calcoli.py
  python3 strumenti/verifica-primo-anno-calcoli.py --with-extra-variants
  python3 strumenti/verifica-primo-anno-calcoli.py geometria pressure
  python3 strumenti/verifica-primo-anno-calcoli.py --output /tmp/calcoli.json
"""
import argparse
import ast
import hashlib
import json
import math
import re
import sys
import types
from functools import lru_cache
from pathlib import Path
from fractions import Fraction as F
import sympy as S
from sympy.parsing.sympy_parser import parse_expr, standard_transformations, implicit_multiplication_application, rationalize

ROOT=Path(__file__).resolve().parents[1]
REPO=ROOT
OUT=None
SELECTED=set()
WITH_EXTRA=False
REPORT={'scope':'Independent semantic family review and separate recalculation oracles', 'courses':{}, 'issues':[]}
VISIBLE={'math':0,'physics':0,'skipped_textual_math':0,'skipped_textual_physics':0}

def load_definitions(path,name):
    source=path.read_text()
    tree=ast.parse(source)
    allowed={'ROOT','COURSE','AUDIT','CHAPTERS','x','y','a','b','R','CATALOGO','DATA','SCHEDE'}
    nodes=[]
    for node in tree.body:
        if isinstance(node,(ast.Import,ast.ImportFrom,ast.FunctionDef,ast.ClassDef)):
            nodes.append(node)
        elif isinstance(node,ast.Assign):
            names={n.id for t in node.targets for n in ast.walk(t) if isinstance(n,ast.Name)}
            if names <= allowed: nodes.append(node)
    module=types.ModuleType(name)
    module.__file__=str(path)
    sys.modules[name]=module
    exec(compile(ast.Module(nodes,type_ignores=[]),str(path),'exec'),module.__dict__)
    return module,hashlib.sha256(source.encode()).hexdigest()

def equal(left,right):
    if isinstance(left,S.Set) and isinstance(right,S.Set): return left==right
    if isinstance(left,str) and isinstance(right,str): return left==right
    try:
        return S.cancel(S.sympify(left)-S.sympify(right))==0
    except Exception:
        return left==right

@lru_cache(maxsize=30000)
def parse_visible(text,unit=''):
    s=text.strip().strip('$')
    if unit and s.endswith(unit):s=s[:-len(unit)]
    s=re.split(r'\\,\\(?:mathrm|text)',s,maxsplit=1)[0]
    s=s.replace(r'\%', '').replace(r'\,','').replace('{,}','.').replace(r'\left','').replace(r'\right','').strip()
    if s in [r'\emptyset',r'\varnothing']:return S.EmptySet
    if s in [r'\mathbb{R}',r'\mathbb R']:return S.Reals
    if r'\cup' in s:return S.Union(*(parse_visible(x) for x in s.split(r'\cup')))
    if s.startswith(r'\{') and s.endswith(r'\}'):
        return S.FiniteSet(*(parse_visible(x) for x in s[2:-2].split(',')))
    if s[:1] in ['(', '['] and s[-1:] in [')',']'] and ',' in s:
        left,right=s[1:-1].split(',')
        return S.Interval(parse_visible(left),parse_visible(right),left_open=s[0]=='(',right_open=s[-1]==')')
    if s in [r'\infty',r'+\infty']:return S.oo
    if s==r'-\infty':return -S.oo
    def atom(pos):
        while pos<len(s) and s[pos].isspace():pos+=1
        if s[pos]!='{':return s[pos],pos+1
        start=pos+1;depth=1;pos+=1
        while depth:
            if s[pos]=='{':depth+=1
            if s[pos]=='}':depth-=1
            pos+=1
        return s[start:pos-1],pos
    # Restricted exact translator for the actual generated arithmetic/TeX
    # subset. Unsupported commands fail rather than being silently ignored.
    while True:
        match=re.search(r'\\d?frac',s)
        if not match:break
        top,pos=atom(match.end())
        bottom,end=atom(pos)
        s=s[:match.start()]+'(('+top+')/('+bottom+'))'+s[end:]
    s=s.replace(r'\cdot','*').replace(r'\times','*')
    s=re.sub(r'\^\{([^{}]+)\}',r'**(\1)',s)
    s=re.sub(r'\^([0-9a-z])',r'**\1',s)
    s=s.replace('{','(').replace('}',')')
    if '\\' in s:raise ValueError('Unsupported TeX command in visible expression: '+s)
    local={z:S.Symbol(z,real=True) for z in ['x','y','a','b']}
    return parse_expr(s,local_dict=local,transformations=standard_transformations+(implicit_multiplication_application,rationalize),evaluate=True)

def check_visible(course,name,f,k,options,expected,unit=''):
    try:
        parsed=[parse_visible(o,unit) for o in options]
        matches=[i for i,v in enumerate(parsed) if equal(v,expected)]
        VISIBLE[course]+=1
        if matches!=[0]:
            REPORT['issues'].append({'course':course,'fn':name,'f':f,'k':k,'error':'Visible answers fail independent oracle','visible':options,'expected':str(expected),'parsed':[str(v) for v in parsed],'matches':matches})
    except Exception as exc:
        REPORT['issues'].append({'course':course,'fn':name,'f':f,'k':k,'error':'Visible parse needs manual review','details':str(exc)[:200],'visible':options})

def checked_math(m,name,oracles):
    results=[]
    fn=getattr(m,name)
    for f,oracle in enumerate(oracles):
        for k in range(1,6):
            q=fn(f,k)
            expected=oracle(k)
            good=equal(q.values[0],expected)
            options=[]
            for v in q.values:
                if not any(equal(v,w) for w in options): options.append(v)
            if len(options)<4:
                REPORT['issues'].append({'course':'math','fn':name,'f':f,'k':k,'error':'Fewer than four semantically distinct options','prompt':q.prompt})
                good=False
            options=options[:4]
            matches=[i for i,v in enumerate(options) if equal(v,expected)]
            good=good and matches==[0]
            if not q.textual:check_visible('math',name,f,k,[q.show(v) for v in options],expected,q.unit)
            else:VISIBLE['skipped_textual_math']+=1
            if not good:
                REPORT['issues'].append({'course':'math','fn':name,'f':f,'k':k,'prompt':q.prompt,'expected':str(expected),'actual':str(q.values[0]),'matches':matches})
            results.append({'f':f,'k':k,'ok':good})
    return results

def checked_physics(m,name,oracles):
    results=[]
    fn=getattr(m,name)
    for f,oracle in enumerate(oracles):
        for k in range(0,5):
            try:q=fn(f,k)
            except AssertionError as exc:
                REPORT['issues'].append({'course':'physics','fn':name,'f':f,'k':k,'error':'Author options assertion','details':str(exc)})
                continue
            expected=oracle(k)
            # Numeric expected values are compared against exact numeric keys.
            # Conceptual families use an explicit independently selected answer.
            matches=[i for i,v in enumerate(q['keys']) if equal(v,expected)]
            good=matches==[0]
            if q['expression'] is not None:check_visible('physics',name,f,k,q['options'],expected)
            else:VISIBLE['skipped_textual_physics']+=1
            if not good:
                REPORT['issues'].append({'course':'physics','fn':name,'f':f,'k':k,'prompt':q['stem'],'expected':str(expected),'actual':q['value'],'matches':matches})
            results.append({'f':f,'k':k,'ok':good})
    return results

def main(build_only=False):
    m,msha=load_definitions(REPO/'strumenti/genera-matematica-prima.py','independent_math')
    p,psha=load_definitions(REPO/'strumenti/genera-fisica-prima.py','independent_physics')
    mn=[
        lambda k: -(k+2)-4+2*(k+2),
        lambda k: (k+2)-(-3*(k+2)+3),
        lambda k: 3*(k+2)-2*(k+3),
        lambda k: F(k+3,3*(k+2))+F(1,3),
        lambda k: F(9,2*(k+2))*F(1,3),
        lambda k: F(k+3,k+2)/F(2,3),
        lambda k: math.gcd(6*(k+2),9*(k+2)),
        lambda k: math.lcm(4*(k+2),6*(k+2)),
        lambda k: F(str((k+2)/8)),
        lambda k: F(k%8+1,9),
        lambda k: (F(k+2,k+3)+1)/2,
        lambda k: abs((k+7)-(-(k+2))),
        lambda k: 4*(k+2)+3*(k+2)-2*(4+3),
        lambda k: -(k+2)*(k+3),
        lambda k: 2*F(k+2,3),
        lambda k: F(1,k+2)-F(1,k+3),
        lambda k: 3+F(2,k+2),
        lambda k: (k+3)+(k+2),
    ]
    mp=[
        lambda k: 2**(k+1)*2**2,
        lambda k: F(3**(k+2),3**2),
        lambda k: (2**(k+1))**2,
        lambda k: F(1,(k+2)**2),
        lambda k: -(k+2)**2,
        lambda k: F((k+2)*10**(k+1),k+2),
        lambda k: F(3*2*(k+2),2),
        lambda k: F(3*(k+2),k+2)*5*(k+2),
        lambda k: F(3*4*(k+2),6),
        lambda k: F(25,100)*20*(k+2),
        lambda k: 20*(k+2)*(1-F(20,100)),
        lambda k: 10*(k+2)*(1+F(10,100)),
        lambda k: F(8*(k+2),1-F(20,100)),
        lambda k: 100*(k+2)*(1+F(10,100))*(1-F(10,100)),
        lambda k: F(3*(k+2)*50000,100000),
        lambda k: F(5*(k+2),2+3)*3,
        lambda k: F(k+2,5*(k+2))*100,
        lambda k: F(2*(k+2),4)*7,
    ]
    mi=[
        lambda k:S.FiniteSet(*range(k+2,k+6)),
        lambda k:S.FiniteSet(k+4),
        lambda k:S.FiniteSet(k+2,k+3),
        lambda k:S.FiniteSet(k+5,k+6,k+7),
        lambda k:rf'$\{{({k+2};1),({k+3};2),({k+4};2)\}}$',
        lambda k:(k+2)*(k+3),
        lambda k:3*(k+2)+2*(k+2)-(k+2),
        lambda k:6*(k+2)-4*(k+2),
        lambda k:2*(k+2)+3*(k+2),
        lambda k:m.M(k+3)+r' $\in A$',
        lambda k:r'$C\subsetneq D$',
        lambda k:'Falso, perché la congiunzione richiede entrambe le proposizioni vere',
        lambda k:m.M(rf'x\le {k+2}'),
        lambda k:'Almeno uno studente del gruppo non ha consegnato',
        lambda k:f'Nessun intero maggiore di {k+2} soddisfa P',
        lambda k:2*(-k)+(k+2),
        lambda k:S.FiniteSet(k+5),
        lambda k:m.M(rf'({k+2};{k+4})'),
    ]
    x,y=m.x,m.y
    mm=[
        lambda k:(k+2)+2*(k+2)-2,
        lambda k:((k+2)*x**k*y)*(-2*x*y**2),
        lambda k:S.cancel(3*(k+2)*x**(k+2)*y**3/((k+2)*x**2*y)),
        lambda k:(-(k+2)*x**k*y)**2,
        lambda k:k+1+3,
        lambda k:((k+2)*x**2+2*x+1)+((k+1)*x-3),
        lambda k:((k+2)*x**2+3*x+1)-(2*x**2-x+(k+2)),
        lambda k:(k+2)*x*(x**2-2*x+3),
        lambda k:(x+k+2)*(x+2),
        lambda k:2*(-k)**2-3*(-k)+(k+2),
        lambda k:-7,
        lambda k:S.degree((k+2)*x**4+3*x**2-(k+1)*x**4+x,x),
        lambda k:2*((k+2)*x+(k+2)*y),
        lambda k:(k+2)*x*(2*x+3),
        lambda k:k+4-2,
        lambda k:(S.Rational(3,2)*x**2+(k+2)*x)-(x**2+x),
        lambda k:(k+4)*x**2*y-2*x**2*y,
        lambda k:-(x**2-(k+2)*x+1),
    ]
    mnot=[
        lambda k:S.expand((x+k+2)**2),
        lambda k:S.expand((x-k-2)**2),
        lambda k:(x+k+2)*(x-k-2),
        lambda k:S.expand((2*x+k+2)**2),
        lambda k:S.expand((x+k+2)**3),
        lambda k:S.expand((x-k-2)**3),
        lambda k:S.expand((x+k+2)**2).coeff(x,1),
        lambda k:S.expand((x-k-2)**2).coeff(x,0),
        lambda k:(12+k)**2,
        lambda k:(102+k)*(98-k),
        lambda k:S.expand((x+y+k+2)**2),
        lambda k:(x+k+2)**2-(x-k-2)**2,
        lambda k:(x+k+2)**2+(x-k-2)**2,
        lambda k:(x+k+2)**2-x**2,
        lambda k:S.expand((x-k-2)**2).coeff(x,1),
        lambda k:(3*x+(k+2)*y)*(3*x-(k+2)*y),
        lambda k:(x/2+k+2)**2,
        lambda k:(x+k+2)**2-(x**2+(k+2)**2),
    ]
    ms=[
        lambda k:(k+2)*x*x+2*(k+2)*x,
        lambda k:x*x-(k+2)**2,
        lambda k:x*x+2*(k+2)*x+(k+2)**2,
        lambda k:x*x-2*(k+2)*x+(k+2)**2,
        lambda k:x*x+(k+4)*x+2*(k+2),
        lambda k:x*x-(k+3)*x+(k+2),
        lambda k:x*y+(k+2)*x+2*y+2*(k+2),
        lambda k:(k+2)*x**3-(k+2)*x,
        lambda k:4*x*x-(k+2)**2*y*y,
        lambda k:-(k+2)*x*x-2*(k+2)*x,
        lambda k:((-k-2)+(k+2))*((-k-2)-1),
        lambda k:S.expand((x+k+2)*(x+3)).coeff(x,0),
        lambda k:math.gcd(6*(k+2),9*(k+2))*x**min(3,2)*y**min(2,4),
        lambda k:math.lcm(2*(k+2),3*(k+2))*x**max(2,1)*y**max(1,3),
        lambda k:S.cancel(((k+2)*x*x+3*(k+2)*x)/((k+2)*x)),
        lambda k:x*x*y+(k+2)*x*y*y,
        lambda k:x**4-(k+2)**4,
        lambda k:-(k+2),
    ]
    mf=[
        lambda k:m.M(rf'x\ne {k+2}'),
        lambda k:m.M(rf'x=-{k+2}\;\text{{oppure}}\;x={k+2}'),
        lambda k:S.cancel((x*x-(k+2)**2)/(x-k-2)),
        lambda k:S.cancel(((k+2)*x*x+2*(k+2)*x)/((k+2)*x)),
        lambda k:2/(x-k-2)+3/(x-k-2),
        lambda k:(x+2)/(x-k-2)-(x-1)/(x-k-2),
        lambda k:S.cancel(((x-k-2)/(x+k+2))*((x+k+2)/(2*(x-k-2)))),
        lambda k:S.cancel(((x-k-2)/(x+k+2))/(2*(x-k-2)/(x+k+2))),
        lambda k:1/(x-k-2)+1/(x+k+2),
        lambda k:1/(x-k-2)-1/(x+k+2),
        lambda k:F((k+4)+1,(k+4)-(k+2)),
        lambda k:rf'Vale $1$ per ogni $x\ne {k+2}$',
        lambda k:k+2,
        lambda k:1+(k+2)/(x-k-2),
        lambda k:(-x-k-2)/(x+k+2),
        lambda k:m.M(rf'x\ne -{k+2}\;\text{{e}}\;x\ne1'),
        lambda k:2*x/(x-k-2)-2,
        lambda k:(x*x-(k+2)**2)/(x+k+2)**2,
    ]
    me=[
        lambda k:S.solve(S.Eq(3*x+k+2,4*(k+2)),x)[0],
        lambda k:S.solve(S.Eq(2*(x-k-2),k+5),x)[0],
        lambda k:S.solve(S.Eq(5*x-k-2,2*x+2*(k+2)),x)[0],
        lambda k:S.solve(S.Eq((x+2)/3,k+2),x)[0],
        lambda k:S.solve(S.Eq(x/2-x/3,k+2),x)[0],
        lambda k:r'$\varnothing$',
        lambda k:r'$\mathbb R$',
        lambda k:S.solve(S.Eq(x+x+1,4*(k+2)+3),x)[0],
        lambda k:S.solve(S.Eq(2*(2*(k+2)+x),10*(k+2)),x)[0],
        lambda k:S.solve(S.Eq(5+3*x,6*(k+2)+5),x)[0],
        lambda k:S.solve(S.Eq(x+k+2,4*(k+2)),x)[0],
        lambda k:S.solve(S.Eq((k+2+k+3+x)/3,k+4),x)[0],
        lambda k:S.solve(S.Eq(x/4,S.Rational(k+2,2)),x)[0],
        lambda k:S.solve(S.Eq(3*(k+2),3*x+k+2),x)[0],
        lambda k:S.solve(S.Eq((x-k-2)/(x+1),S.Rational(2,k+5)),x)[0],
        lambda k:r'$\varnothing$',
        lambda k:S.solve(S.Eq(-2*x+k+2,3*(k+2)),x)[0],
        lambda k:2,
    ]
    solvei=lambda rel:S.solve_univariate_inequality(rel,x,relational=False)
    md=[
        lambda k:solvei(2*x+k+2>3*(k+2)),
        lambda k:solvei(-3*x<=3*(k+2)),
        lambda k:solvei(2*(x-k-2)<6),
        lambda k:solvei(5*x-k-2>=2*x+2*(k+2)),
        lambda k:solvei((x+1)/2<=k+2),
        lambda k:solvei(x/2-x/3>k+2),
        lambda k:solvei(x>k+2).intersect(solvei(x<=k+6)),
        lambda k:solvei(x<-k-2).union(solvei(x>k+2)),
        lambda k:len([z for z in range(-20,30) if k+2<z<=k+8]),
        lambda k:math.floor(F(3*(k+2)+2,3)),
        lambda k:math.ceil(F(4*(k+2)+1,4)),
        lambda k:solvei((k+2)-2*x>3*(k+2)),
        lambda k:solvei(2*(k+2)+1<=2*x+1).intersect(solvei(2*x+1<2*(k+2)+5)),
        lambda k:k+3,
        lambda k:r'$\varnothing$',
        lambda k:r'$\mathbb R$',
        lambda k:solvei(-(k+2)*(x-2)>=0),
        lambda k:solvei(x>k+4).intersect(solvei(x<=k+2)),
    ]
    mg=[
        lambda k:5*(k+2)-2*(k+2),
        lambda k:2*3*(k+2),
        lambda k:90-(20+3*k),
        lambda k:180-(70+4*k),
        lambda k:35+2*k,
        lambda k:F(40+4*k,2),
        lambda k:180-(30+2*k)-(45+k),
        lambda k:F(180-(40+4*k),2),
        lambda k:180-2*(30+2*k),
        lambda k:(110+3*k)-(35+k),
        lambda k:S.Interval.open(abs((k+4)-(k+2)),(k+4)+(k+2)),
        lambda k:F(8*(k+2)-2*(k+2),2),
        lambda k:'Lato-angolo-lato, con l’angolo compreso fra i lati dati',
        lambda k:'Angolo-lato-angolo',
        lambda k:'Lato-lato-lato',
        lambda k:k+7,
        lambda k:r'$\widehat B=\widehat C$',
        lambda k:'No, perché i lati corrispondenti hanno lunghezze diverse',
    ]
    mq=[
        lambda k:40+3*k,
        lambda k:50+2*k,
        lambda k:180-(65+3*k),
        lambda k:'Le due rette sono parallele',
        lambda k:(20+3*k)+(70-3*k),
        lambda k:360-(70+k)-(80+k)-90,
        lambda k:2*(2*(k+2)+3*(k+2)),
        lambda k:180-(50+3*k),
        lambda k:55+2*k,
        lambda k:F(6*(k+2),2),
        lambda k:2*(k+2)+5,
        lambda k:4*(k+6),
        lambda k:F(50+4*k,2),
        lambda k:50+3*k,
        lambda k:180-(60+2*k),
        lambda k:'È sia un rettangolo sia un rombo',
        lambda k:'Il quadrilatero è un parallelogramma',
        lambda k:F(6*(k+2)+10,2)-(k+5),
    ]
    mst=[
        lambda k:F(sum([k+2,k+3,k+4,k+5]),4),
        lambda k:sorted([k+6,k+2,k+4,k+3,k+10])[2],
        lambda k:F((k+4)+(k+7),2),
        lambda k:__import__('statistics').mode([k+2,k+3,k+3,k+3,k+5,k+5]),
        lambda k:max([k+3,k+10,k+4,k+6])-min([k+3,k+10,k+4,k+6]),
        lambda k:F(2*(k+2),5*(k+2)),
        lambda k:F(30,100)*10*(k+2),
        lambda k:F(2*(k+2)+4*(k+4),6),
        lambda k:(k+2)+2*(k+2)+3*(k+2),
        lambda k:(k+2)+2*(k+2),
        lambda k:F(25,100)*360,
        lambda k:(k+6)+3,
        lambda k:2*(k+5),
        lambda k:4*(k+5)-((k+2)+(k+4)+(k+6)),
        lambda k:'Qualitativo nominale',
        lambda k:'Quantitativo discreto',
        lambda k:'La differenza numerica è 10, ma l’asse troncato può amplificare visivamente il confronto',
        lambda k:sorted([k+4,k+4,k+5,k+5,k+24])[2],
    ]
    pu=[
        lambda k:F(120+35*k,100),
        lambda k:F(25+3*k,10)*1000,
        lambda k:F(20+5*k,100**2),
        lambda k:F(30+5*k,100**3),
        lambda k:F(3+k,2*1000),
        lambda k:F(250+75*k,1000),
        lambda k:(k+2)*3600+(15+5*k)*60,
        lambda k:F(12+3*k,1000),
        lambda k:f'${k+2}\\cdot10^{{-5}}$',
        lambda k:f'${p.tex(F(25+5*k,10)*(3+k))}\\cdot10^5$',
        lambda k:((k+2)*100)**2,
        lambda k:F(k+2,1000),
        lambda k:r'$\mathrm{kg/m^3}$',
        lambda k:f'$({k+3}\\,\\mathrm m)(2\\,\\mathrm m)$',
        lambda k:k+2+F(300+20*k,100),
        lambda k:F(40+5*k,1000*(2+k)),
        lambda k:p.M(F(3+k,1000),r'\mathrm m'),
        lambda k:'Le due lunghezze sono uguali',
    ]
    pm=[
        lambda k:F((20+2*k-(k+2))+(20+2*k)+(20+2*k+(k+2)),3),
        lambda k:F((30+2*k+2*(k+2))-(30+2*k),2),
        lambda k:F(k+2,10)/F(50+10*k),
        lambda k:(F(40+10*k,100)*(k+2))/F(40+10*k)*100,
        lambda k:F((20+5*k)*(k+2),100),
        lambda k:F(12+k)-F(k+2,10),
        lambda k:F(k+2,10)/2,
        lambda k:F(20+5*k,10),
        lambda k:F(k+2,10)+F(k+3,10),
        lambda k:F(k+2,10)+F(k+4,10),
        lambda k:(k+2)+(k+3),
        lambda k:(k+2)+(k+4),
        lambda k:2*(k+2),
        lambda k:F(math.floor(F(1245+100*k,10)+F(1,2)),10),
        lambda k:'È presente uno scarto sistematico positivo',
        lambda k:'La misura del primo strumento',
        lambda k:'Sì, gli intervalli si sovrappongono',
        lambda k:max(F(k+2,100),F(k+2,10)),
    ]
    pg=[
        lambda k:F((k+2)*(k+4),k+2),
        lambda k:(k+2)*(k+4),
        lambda k:F(2*(k+2),10*(k+2)),
        lambda k:(k+2)*(k+4),
        lambda k:F(6*(k+2),3),
        lambda k:F(12*(k+2),4),
        lambda k:F(((k+3)+3*(k+4))-(k+3),4-1),
        lambda k:(2*(k+2)+(k+4))-(k+2)*2,
        lambda k:(k+4)+3*(k+2),
        lambda k:F((k+2)*(k+4),k+2),
        lambda k:'$y='+str(k+2)+'x$',
        lambda k:(k+2)**2,
        lambda k:F(1,(k+2)**2),
        lambda k:r'$\mathrm{g/cm^3}$',
        lambda k:F(3*(k+4),2*(k+2)),
        lambda k:10*(k+2),
        lambda k:F(1,k+2),
        lambda k:'Hanno la stessa pendenza e intercette diverse',
    ]
    pd=[
        lambda k:F(30*(k+2),10*(k+2)),
        lambda k:(k+2)*(16+k),
        lambda k:F(15*(k+2),k+2),
        lambda k:F(k+12,10)*1000,
        lambda k:F(3*(k+7),(30+k+2+k+7)-(30+k+2)),
        lambda k:(k+4)*((k+7)-2),
        lambda k:F(2*(k+12),(k+12)+5),
        lambda k:(k+5)*(k+12)-2*(k+12),
        lambda k:F(12*(k+2),2*(k+2)),
        lambda k:F(10*(k+2)*1+10*2,10*(k+2)+10),
        lambda k:10*(k+2)*F(1,10)*5,
        lambda k:2*(k+2)**3,
        lambda k:(k+22)-F(3*(k+22-5),3),
        lambda k:F((30+k+2+2*(10+k+2))-(30+k+2),10+k+2),
        lambda k:r'$0{,}8\,\mathrm{g/cm^3}$',
        lambda k:F(100*(k+2),1000)/F(k+2,10),
        lambda k:F((k+2)*(3+k+4)-(k+2)*3,(3+k+4)-3),
        lambda k:'A è più denso di B',
    ]
    pv=[
        lambda k:(k+2)+(k+4),
        lambda k:(k+2)-(k+4),
        lambda k:(k+2)-(-(k+4)),
        lambda k:f'$(-{k+2};{k+4})\\,\\mathrm N$',
        lambda k:f'$({3*(k+2)};{3*(k+4)})\\,\\mathrm m$',
        lambda k:math.isqrt((3*(k+2))**2+(4*(k+2))**2),
        lambda k:math.isqrt((5*(k+2))**2-(3*(k+2))**2),
        lambda k:3*(k+2)+2*(k+2),
        lambda k:abs(5*(k+2)-2*(k+2)),
        lambda k:f'$(-{2*(k+2)};{2*(k+4)})\\,\\mathrm N$',
        lambda k:4*(k+2)-2*(k+2)+(k+2),
        lambda k:f'$({4*(k+2)-(k+2)};{2*(k+4)-(k+4)})\\,\\mathrm m$',
        lambda k:'Perpendicolari, con lo stesso modulo',
        lambda k:f'$(-{k+2};-{k+4})\\,\\mathrm N$',
        lambda k:'Verso sinistra e verso l’alto',
        lambda k:F(3,5)*(5*(k+2)),
        lambda k:abs(5*(k+2)-2*(k+2)),
        lambda k:(k+2)+(k+4),
    ]
    pf=[
        lambda k:(k+2)*10,
        lambda k:F(10*(k+2),10),
        lambda k:F(6*(k+2),k+2),
        lambda k:20*(k+2)*F(1,5),
        lambda k:F(5*(k+2),100*(k+2)),
        lambda k:F(3*(k+2),F(k+2,100)),
        lambda k:50*(k+2)*F(4,100),
        lambda k:'Verso destra',
        lambda k:F(3,10)*20*(k+2),
        lambda k:3*(k+2),
        lambda k:F(1,5)*50*(k+2),
        lambda k:10*(k+2)+2*(k+2),
        lambda k:10*(k+2)-3*(k+2),
        lambda k:F(2*(k+2),10*(k+2)),
        lambda k:4*(k+2),
        lambda k:F(6*(k+2),100)/F(6*(k+2),200),
        lambda k:F(3*(k+2)-2*(k+2),F(k+2,100)),
        lambda k:'Verso sinistra',
    ]
    pp=[
        lambda k:abs(5*(k+2)-2*(k+2)),
        lambda k:f'$(-{3*(k+2)};-{4*(k+2)})\\,\\mathrm N$',
        lambda k:(k+2)*10,
        lambda k:F(12*(k+2),2),
        lambda k:10*(k+2)-3*(k+2),
        lambda k:F(10*(k+2),100*(k+2)),
        lambda k:5*(k+2)*F(3,5),
        lambda k:math.isqrt((5*(k+2))**2-(3*(k+2))**2),
        lambda k:3*(k+2),
        lambda k:3*(k+2),
        lambda k:'No, il massimo attrito statico è insufficiente',
        lambda k:F(3*(k+2),4*(k+2)),
        lambda k:F(8*(k+2),2*F(4,5)),
        lambda k:math.isqrt((3*(k+2))**2+(4*(k+2))**2),
        lambda k:F(10*(k+2),F(1,2)),
        lambda k:10*(k+2)-4*(k+2),
        lambda k:F((k+2)+(k+4),100),
        lambda k:'No, la risultante verticale non è nulla',
    ]
    pr=[
        lambda k:10*(k+2)*F(1,5),
        lambda k:F(2*(k+2),F(1,5)),
        lambda k:F(3*(k+2),10*(k+2)),
        lambda k:5*(k+2)*0,
        lambda k:5*(k+2)-2*(k+2),
        lambda k:F(10*(k+2)*F(1,5),F(1,2)),
        lambda k:F(6*(k+2)*F(1,5),3*(k+2)),
        lambda k:20*(k+2)*F(1,10),
        lambda k:'Risultante nulla, momento totale diverso da zero',
        lambda k:F(20*(k+2),2),
        lambda k:F(12*(k+2)*1,3),
        lambda k:F(4*(k+2)+8*(k+2),2),
        lambda k:F((k+2)*0+2*(k+2)*3,(k+2)+2*(k+2)),
        lambda k:F(2*(k+2),2),
        lambda k:F(10*(k+2)*F(2,10),F(5,10)),
        lambda k:'Un momento che tende a ribaltare l’oggetto',
        lambda k:F(1,2)*F(3,5)*10*(k+2),
        lambda k:F(k+2,F(1,2)),
    ]
    ppressure=[
        lambda k:F(20*(k+2),F(2,100)),
        lambda k:1000*(k+2)*F(3,100),
        lambda k:F(40*(k+2),2000*(k+2)),
        lambda k:F(k+2,F(1,10000)),
        lambda k:1000*10*(k+2),
        lambda k:100000+1000*10*(k+2),
        lambda k:F(8000*(k+2),800*10),
        lambda k:F(9000*(k+2),10*(k+2)),
        lambda k:1000*10*((k+4)-(k+2)),
        lambda k:'Sono uguali',
        lambda k:F(k+2,2)*20,
        lambda k:F(12*(k+2),4),
        lambda k:F((2*(k+2))**2,(k+2)**2),
        lambda k:((110000+1000*(k+2))-110000)*F(2,100),
        lambda k:800*10*(k+2)+1000*10*1,
        lambda k:1000*10*F(k+2,100),
        lambda k:F(10000*(k+2),10000*10),
        lambda k:F(800*5*(k+2),1000),
    ]
    pb=[
        lambda k:1000*10*F(k+2,1000),
        lambda k:F(8*(k+2),800*10),
        lambda k:F(9*(k+2),10*F(k+2,1000)),
        lambda k:30*(k+2)-10*(k+2),
        lambda k:20*(k+2)-12*(k+2),
        lambda k:10*(k+2),
        lambda k:F(100*(k+2),1000),
        lambda k:5*(k+2)*F(600,1000),
        lambda k:5*(k+2)*(1-F(60,100)),
        lambda k:1*(10*(k+2))-4*(k+2),
        lambda k:F(k+2,1000),
        lambda k:'Resta uguale al peso della barca',
        lambda k:'Sono uguali',
        lambda k:'Resta invariata',
        lambda k:10*(k+2)-6*(k+2),
        lambda k:1*(k+2),
        lambda k:F(30*(k+2),30*(k+2)-20*(k+2)),
        lambda k:'Il peso è maggiore della spinta',
    ]
    math_suites={'numeri':mn,'potenze':mp,'insiemi':mi,'monomi':mm,'notevoli':mnot,'scomposizioni':ms,'frazioni':mf,'equazioni':me,'disequazioni':md,'geometria':mg,'parallele':mq,'statistica':mst}
    physics_suites={'units':pu,'measures':pm,'graphs':pg,'density':pd,'vectors':pv,'forces':pf,'point':pp,'rigid':pr,'pressure':ppressure,'buoyancy':pb}
    if build_only:
        return m,p,msha,psha,math_suites,physics_suites
    unknown=SELECTED-set(math_suites)-set(physics_suites)
    if unknown:
        raise ValueError('Unknown generator function names: '+', '.join(sorted(unknown)))
    if SELECTED:
        math_suites={name:oracle for name,oracle in math_suites.items() if name in SELECTED}
        physics_suites={name:oracle for name,oracle in physics_suites.items() if name in SELECTED}
    REPORT['courses']['math']={'source_sha256':msha,'families_reviewed':[name+'/0..17' for name in math_suites],'results':{name:checked_math(m,name,oracles) for name,oracles in math_suites.items()}}
    REPORT['courses']['physics']={'source_sha256':psha,'families_reviewed':[name+'/0..17' for name in physics_suites],'results':{name:checked_physics(p,name,oracles) for name,oracles in physics_suites.items()}}
    REPORT['visible_answer_parsing']=VISIBLE
    extra_count=0
    if WITH_EXTRA:
        extra_results=[]
        for course,module,suites,variants in [('math',m,math_suites,range(6,10)),('physics',p,physics_suites,range(5,8))]:
            for name,oracles in suites.items():
                for f,oracle in enumerate(oracles):
                    for k in variants:
                        expected=oracle(k)
                        q=getattr(module,name)(f,k)
                        if course=='math':
                            actual,visible,textual,unit=q.values[0],q.solution(),q.textual,q.unit
                        else:
                            actual,visible,textual,unit=q['value'],q['answer'],q['expression'] is None,''
                        good=equal(actual,expected)
                        if not textual:
                            try:good=good and equal(parse_visible(visible,unit),expected)
                            except Exception as exc:
                                good=False
                                REPORT['issues'].append({'course':course,'fn':name,'f':f,'k':k,'error':'Extra visible parse requires review','details':str(exc)})
                        if not good:
                            REPORT['issues'].append({'course':course,'fn':name,'f':f,'k':k,'error':'Extra variant disagrees with independent oracle','expected':str(expected),'visible':visible})
                        extra_results.append({'course':course,'fn':name,'f':f,'k':k,'ok':good})
        extra_count=len(extra_results)
        REPORT['extra_variants']={'scope':'Superset of worked/practice generator pairs, not a count of published exercises','results':extra_results}
    if OUT is not None:
        OUT.parent.mkdir(parents=True,exist_ok=True)
        OUT.write_text(json.dumps(REPORT,ensure_ascii=False,indent=2)+'\n')
    print(json.dumps({'quiz_cases':sum(len(rs) for c in REPORT['courses'].values() for rs in c['results'].values()),'extra_generator_cases':extra_count,'visible_answer_parsing':VISIBLE,'issues':REPORT['issues'],'report':str(OUT) if OUT else None},ensure_ascii=False))
    return 1 if REPORT['issues'] else 0

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__,formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('families',nargs='*',help='Optional generator function names, such as geometria or pressure')
    parser.add_argument('--output',type=Path,help='Write a detailed JSON report at this explicitly chosen location')
    parser.add_argument('--with-extra-variants',action='store_true',help='Also check mathematics k=6..9 and physics k=5..7, a superset of worked/practice cases')
    args=parser.parse_args()
    SELECTED=set(args.families)
    OUT=args.output
    WITH_EXTRA=args.with_extra_variants
    raise SystemExit(main())
