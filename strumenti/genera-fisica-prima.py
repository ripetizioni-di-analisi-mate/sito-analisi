#!/usr/bin/env python3
"""Contenuti originali di Fisica prima: 18 famiglie, cinque varianti, risposte esatte.
La provenienza didattica e i controlli sono descritti in revisioni/primo-anno/fisica.md.
Esecuzione dalla radice del repository: python3 strumenti/genera-fisica-prima.py
"""
from pathlib import Path
from fractions import Fraction as F
import json, re, math
import sympy as sp

ROOT = Path(__file__).resolve().parents[1]
COURSE = 'fisica-superiori-1'
AUDIT = []

def tex(x):
    x=F(x)
    if x.denominator==1: return str(x.numerator)
    d=x.denominator
    while d%2==0: d//=2
    while d%5==0: d//=5
    if d==1:
        s=format(float(x),'.10f').rstrip('0').rstrip('.')
        return s.replace('.','{,}')
    return ('-' if x<0 else '')+r'\dfrac{'+str(abs(x.numerator))+'}{'+str(x.denominator)+'}'

def M(x,u=''):
    return '$'+tex(x)+(r'\,'+u if u else '')+'$'

def exact(expr):
    v=sp.sympify(expr)
    assert v.is_Rational, expr
    return F(int(v.p),int(v.q))

def N(stem,expr,wrong,u,law,calculation,reason,anchor,label):
    value=exact(expr)
    vals=[]
    for v in wrong:
        v=F(v)
        if v!=value and v not in vals: vals.append(v)
    assert len(vals)>=3,(stem,value,vals)
    vals=vals[:3]
    return dict(stem=stem,answer=M(value,u),options=[M(value,u)]+[M(x,u) for x in vals],keys=[str(value)]+[str(x) for x in vals],expression=expr,value=str(value),calculation=calculation,explanation=law+' '+calculation+' '+reason,anchor=anchor,label=label)

def T(stem,answer,wrong,law,calculation,reason,anchor,label):
    assert len(set([answer]+wrong))==4,(stem,answer,wrong)
    return dict(stem=stem,answer=answer,options=[answer]+wrong,keys=[answer]+wrong,expression=None,value=answer,calculation=calculation,explanation=law+' '+calculation+' '+reason,anchor=anchor,label=label)

# Ogni ramo è una competenza differente; k cambia i dati, non il procedimento.
def units(f,k):
    a=k+2
    if f==0:
        x=120+35*k; y=F(x,100)
        return N(f'Un nastro è lungo {M(x,r"\mathrm{cm}")}. Qual è la lunghezza in metri?',f'{x}/100',[x,F(x,10),x*100],r'\mathrm m','Il prefisso centi indica un centesimo di metro.',f'Quindi $l={x}\\cdot10^{{-2}}\\,\\mathrm m={tex(y)}\\,\\mathrm m$.','Il numero diminuisce perché il metro è più grande del centimetro.','prefissi','Conversioni di lunghezza')
    if f==1:
        x=F(25+3*k,10); y=x*1000
        return N(f'Una strada è lunga {M(x,r"\mathrm{km}")}. Quanti metri misura?',str(y),[x*100,x*10,x/1000],r'\mathrm m','Il prefisso chilo indica un fattore mille.',f'Si ottiene $l={tex(x)}\\cdot1000\\,\\mathrm m={tex(y)}\\,\\mathrm m$.','Lunghezza fisica e distanza restano le stesse dopo la conversione.','prefissi','Conversioni con il prefisso chilo')
    if f==2:
        x=20+5*k; y=F(x,10000)
        return N(f'Un cartoncino ha area {M(x,r"\mathrm{{cm}}^2")}. Quanto vale in metri quadrati?',f'{x}/10000',[F(x,100),F(x,1000),x*10000],r'\mathrm m^2','Nel passaggio dalle lunghezze alle aree il fattore di conversione va elevato al quadrato.',f'Poiché $1\\,\\mathrm{{cm}}^2=10^{{-4}}\\,\\mathrm m^2$, si ha $A={tex(y)}\\,\\mathrm m^2$.','Usare soltanto il fattore cento tratterebbe l’area come una lunghezza.','superfici-volumi','Conversioni di area')
    if f==3:
        x=30+5*k; y=F(x,1000000)
        return N(f'Un campione occupa {M(x,r"\mathrm{{cm}}^3")}. Qual è il volume in metri cubi?',f'{x}/1000000',[F(x,100),F(x,1000),F(x,10000)],r'\mathrm m^3','Il volume richiede il cubo del fattore usato per le lunghezze.',f'Quindi $V={x}\\cdot10^{{-6}}\\,\\mathrm m^3={tex(y)}\\,\\mathrm m^3$.','Tre dimensioni lineari contribuiscono alla conversione.','superfici-volumi','Conversioni di volume')
    if f==4:
        x=F(3+k,2); y=x/1000
        return N(f'Una caraffa contiene {M(x,r"\mathrm L")}. Qual è il volume in metri cubi?',str(y),[x/100,x*1000,x/1000000],r'\mathrm m^3','Un litro è un decimetro cubo.',f'Da $1\\,\\mathrm L=10^{{-3}}\\,\\mathrm m^3$ segue $V={tex(y)}\\,\\mathrm m^3$.','Il litro è una unità di volume, quindi la sua conversione non segue quella del metro.','superfici-volumi','Litri e metri cubi')
    if f==5:
        x=250+75*k; y=F(x,1000)
        return N(f'La bilancia indica {M(x,r"\mathrm g")}. Quale massa si scrive in chilogrammi?',f'{x}/1000',[F(x,100),x*1000,F(x,10)],r'\mathrm{kg}','Il chilogrammo è l’unità SI della massa.',f'Poiché $1000\\,\\mathrm g=1\\,\\mathrm{{kg}}$, la massa vale ${tex(y)}\\,\\mathrm{{kg}}$.','La bilancia misura qui la massa; il peso richiederebbe anche il campo gravitazionale.','si','Grammi e chilogrammi')
    if f==6:
        h=a; minutes=15+5*k; y=3600*h+60*minutes
        return N(f'Un’esperienza dura {h} ore e {minutes} minuti. Qual è la durata in secondi?',str(y),[60*h+minutes,h*3600+minutes,h*100+minutes],r'\mathrm s','Un’ora contiene 3600 secondi e un minuto ne contiene 60.',f'La durata totale è $t={h}\\cdot3600+{minutes}\\cdot60={y}\\,\\mathrm s$.','Le due parti vanno convertite separatamente prima di essere sommate.','tempo','Durate composte')
    if f==7:
        x=12+3*k; y=F(x,1000)
        return N(f'Un sensore registra un intervallo di {M(x,r"\mathrm{{ms}}")}. Quanto dura in secondi?',f'{x}/1000',[x*1000,F(x,100),F(x,1000000)],r'\mathrm s','Il prefisso milli indica un millesimo.',f'Perciò $t={x}\\cdot10^{{-3}}\\,\\mathrm s={tex(y)}\\,\\mathrm s$.','Il simbolo ms indica millisecondi e non il prodotto di metri e secondi.','prefissi','Intervalli in millisecondi')
    if f==8:
        x=F(2+k,10**5)
        return T(f'Qual è la notazione scientifica normalizzata del numero ${tex(x)}$?',f'${a}\\cdot10^{{-5}}$',[f'${a}\\cdot10^{{5}}$',f'${a}\\cdot10^{{-4}}$',f'${a}\\cdot10^{{-6}}$'],'Nella notazione normalizzata il coefficiente è compreso tra uno incluso e dieci escluso.',f'Per ottenere ${a}$ si sposta la virgola di cinque posti verso destra, quindi l’esponente è $-5$.','L’esponente negativo descrive un numero minore di uno.','scientifica','Notazione scientifica di numeri piccoli')
    if f==9:
        x=F(25+5*k,10); b=3+k; y=x*b
        return T(f'Calcolare $({tex(x)}\\cdot10^3)({b}\\cdot10^2)$ e scegliere il valore corretto.',f'${tex(y)}\\cdot10^5$',[f'${tex(x+b)}\\cdot10^5$',f'${tex(y)}\\cdot10^6$',f'${tex(y)}\\cdot10^1$'],'Nel prodotto si moltiplicano i coefficienti e si sommano gli esponenti.',f'Il coefficiente vale ${tex(x)}\\cdot{b}={tex(y)}$ e l’esponente vale $3+2=5$.','La risposta può essere equivalente a una notazione normalizzata anche con coefficiente maggiore di dieci.','scientifica','Operazioni con potenze di dieci')
    if f==10:
        side=2+k; y=side*side*10000
        return N(f'Un pannello quadrato ha lato {M(side,r"\mathrm m")}. Qual è la sua area in centimetri quadrati?',str(y),[side*100,side*side*100,side*10000],r'\mathrm{cm}^2','L’area del quadrato è il quadrato del lato.',f'Il lato misura ${side*100}\\,\\mathrm{{cm}}$, dunque $A=({side*100})^2={y}\\,\\mathrm{{cm}}^2$.','Il fattore cento va applicato prima di elevare la lunghezza al quadrato.','superfici-volumi','Aree da lunghezze convertite')
    if f==11:
        x=2+k;y=F(x,1000)
        return N(f'La dose di un liquido è {M(x,r"\mathrm{{mL}}")}. Quanti litri contiene?',f'{x}/1000',[x*1000,F(x,100),F(x,1000000)],r'\mathrm L','Il millilitro è un millesimo di litro.',f'La dose vale $V={x}\\cdot10^{{-3}}={tex(y)}\\,\\mathrm L$.','Un millilitro equivale inoltre a un centimetro cubo.','superfici-volumi','Millilitri e litri')
    if f==12:
        x=4+k
        return T(f'Una grandezza è definita dal rapporto tra una massa di ${x}\\,\\mathrm{{kg}}$ e un volume espresso in $\\mathrm m^3$. Qual è la sua unità SI?',r'$\mathrm{kg/m^3}$',[r'$\mathrm{kg\,m^3}$',r'$\mathrm{m^3/kg}$',r'$\mathrm{kg/m^2}$'],'Le unità seguono la stessa operazione delle grandezze.',r'Nel rapporto massa diviso volume si ottiene $\dfrac{\mathrm{kg}}{\mathrm m^3}$.','Il valore numerico della massa non cambia il tipo di unità del rapporto.','dimensioni','Unità derivate dai rapporti')
    if f==13:
        x=3+k
        return T(f'Un rettangolo ha base ${x}\\,\\mathrm m$. In quale espressione il risultato ha le dimensioni di un’area?',f'$({x}\\,\\mathrm m)(2\\,\\mathrm m)$',[f'$({x}\\,\\mathrm m)+(2\\,\\mathrm m)$',f'$({x}\\,\\mathrm m)\\div(2\\,\\mathrm m)$',f'$({x}\\,\\mathrm m)(2\\,\\mathrm s)$'],'Un’area è il prodotto di due lunghezze.',r'Il prodotto delle unità dà $\mathrm m\cdot\mathrm m=\mathrm m^2$.','Una somma di lunghezze resta una lunghezza, mentre il loro rapporto è adimensionale.','dimensioni','Controllo dimensionale delle formule')
    if f==14:
        x=2+k;y=300+20*k;v=F(x)+F(y,100)
        return N(f'Si uniscono due aste lunghe {M(x,r"\mathrm m")} e {M(y,r"\mathrm{{cm}}")}, senza sovrapporle. Qual è la lunghezza totale in metri?',str(v),[x+y,F(x+y,100),x+F(y,10)],r'\mathrm m','Prima di sommare due misure si usa la stessa unità.',f'La seconda asta misura ${tex(F(y,100))}\\,\\mathrm m$, quindi il totale è ${x}+{tex(F(y,100))}={tex(v)}\\,\\mathrm m$.','La somma dei soli numeri iniziali mescolerebbe metri e centimetri.','confronti','Somme con unità diverse')
    if f==15:
        x=40+5*k;y=2+k;v=F(x,1000*y)
        return N(f'Un recipiente contiene {M(x,r"\mathrm g")} in {M(y,r"\mathrm L")}. Convertire il rapporto massa/volume in $\\mathrm{{kg/L}}$.',str(v),[F(x,y),F(x*1000,y),F(x,100*y)],r'\mathrm{kg/L}','Il denominatore è già in litri, mentre i grammi vanno convertiti in chilogrammi.',f'Il rapporto è $\\dfrac{{{tex(F(x,1000))}}}{{{y}}}={tex(v)}\\,\\mathrm{{kg/L}}$.','Si converte solo l’unità che cambia fra la misura iniziale e quella richiesta.','dimensioni','Conversioni di un’unità composta')
    if f==16:
        n=3+k;v=F(1,10**n)
        return T(f'Il prefisso associato al fattore $10^{{-3}}$ è usato per una misura di ${n}\\,\\mathrm{{mm}}$. A quanti metri corrisponde?',M(F(n,1000),r'\mathrm m'),[M(F(n,100),r'\mathrm m'),M(n*1000,r'\mathrm m'),M(F(n,1000000),r'\mathrm m')],'Il simbolo mm indica millimetri.',f'Ogni millimetro vale $10^{{-3}}\\,\\mathrm m$, perciò ${n}\\,\\mathrm{{mm}}={tex(F(n,1000))}\\,\\mathrm m$.','Il prefisso micro avrebbe invece il fattore un milionesimo.','prefissi','Lettura dei prefissi nei simboli')
    x=25+10*k; y=F(x,10)
    return T(f'Confrontare ${x}\\,\\mathrm{{cm}}$ e ${tex(y)}\\,\\mathrm{{dm}}$.', 'Le due lunghezze sono uguali',['La prima è dieci volte la seconda','La seconda è dieci volte la prima','Le due unità descrivono grandezze diverse'],'Un decimetro contiene dieci centimetri.',f'Convertendo la seconda misura si trova ${tex(y)}\\cdot10={x}\\,\\mathrm{{cm}}$.','Il confronto richiede valori espressi nella stessa unità.','confronti','Confronti tra misure equivalenti')


def measures(f,k):
    a=k+2
    if f==0:
        c=20+2*k;d=a;v=F(c)
        return N(f'Tre misure di una lunghezza sono ${c-d}$, ${c}$ e ${c+d}\\,\\mathrm{{cm}}$. Qual è la media aritmetica?',str(v),[c-d,c+d,3*c],r'\mathrm{cm}','La media aritmetica è la somma delle misure divisa per il loro numero.',f'Quindi $\\bar l=\\dfrac{{{c-d}+{c}+{c+d}}}3={c}\\,\\mathrm{{cm}}$.','Le deviazioni simmetriche rispetto al valore centrale si compensano.','ripetute','Medie di misure ripetute')
    if f==1:
        lo=30+2*k;hi=lo+2*a;v=a
        return N(f'Le misure estreme di una lunghezza sono ${lo}$ e ${hi}\\,\\mathrm{{mm}}$. Stimare l’incertezza con la semidispersione massima.',str(v),[hi-lo,F(lo+hi,2),lo],r'\mathrm{mm}','La semidispersione massima è metà dell’intervallo fra misura massima e minima.',f'Si calcola $\\Delta l=\\dfrac{{{hi}-{lo}}}2={a}\\,\\mathrm{{mm}}$.','Questa stima descrive la dispersione osservata nelle misure.','ripetute','Semidispersioni massime')
    if f==2:
        x=50+10*k;d=F(a,10);v=d/x
        return N(f'Una misura è $l=({x}\\pm{tex(d)})\\,\\mathrm{{cm}}$. Qual è l’incertezza relativa, senza percentuale?',str(v),[d*x,F(x,d),d], '', 'L’incertezza relativa confronta l’incertezza assoluta con il valore misurato.',f'Il rapporto vale $\\varepsilon=\\dfrac{{{tex(d)}}}{{{x}}}={tex(v)}$.','Le unità si semplificano, quindi il risultato è adimensionale.','relativa','Incertezze relative')
    if f==3:
        x=40+10*k;d=F(x,100)*a;v=a
        return N(f'Una massa vale $m=({x}\\pm{tex(d)})\\,\\mathrm g$. Quanto vale l’incertezza percentuale?',str(v),[F(a,100),a*100,x/d],r'\%','La percentuale si ottiene moltiplicando per cento l’incertezza relativa.',f'Si trova $\\varepsilon_\\%=\\dfrac{{{tex(d)}}}{{{x}}}\\cdot100={a}\\%$.','La quantità assoluta deve essere espressa nella stessa unità del valore centrale.','relativa','Incertezze percentuali')
    if f==4:
        x=20+5*k;p=a;v=F(x*p,100)
        return N(f'La massa di un oggetto è {M(x,r"\mathrm g")} con incertezza relativa del ${p}\\%$. Qual è l’incertezza assoluta?',str(v),[x*p,F(x,p),F(p,100)],r'\mathrm g','L’incertezza assoluta è il prodotto del valore misurato per l’incertezza relativa.',f'Quindi $\\Delta m={x}\\cdot\\dfrac{{{p}}}{{100}}={tex(v)}\\,\\mathrm g$.','La percentuale va prima trasformata in un numero puro.','relativa','Dalla percentuale all’incertezza assoluta')
    if f==5:
        x=10+a;d=F(a,10);v=F(x)-d
        return N(f'Una misura è $l=({x}\\pm{tex(d)})\\,\\mathrm{{cm}}$. Qual è l’estremo inferiore dell’intervallo associato?',str(v),[F(x)+d,F(x)-2*d,d],r'\mathrm{cm}','L’intervallo va dal valore centrale meno l’incertezza al valore centrale più l’incertezza.',f'L’estremo inferiore è ${x}-{tex(d)}={tex(v)}\\,\\mathrm{{cm}}$.','L’incertezza esprime qui la semilarghezza dell’intervallo.','intervalli','Intervalli di misura')
    if f==6:
        d=F(a,10);v=d/2
        return N(f'Un righello analogico ha divisione minima {M(d,r"\mathrm{{cm}}")}. Adottando metà divisione come incertezza di lettura, quanto vale tale incertezza?',str(v),[d,2*d,d/10],r'\mathrm{cm}','Il criterio richiesto assegna metà della divisione minima.',f'Perciò $\\Delta l=\\dfrac{{{tex(d)}}}2={tex(v)}\\,\\mathrm{{cm}}$.','La regola è dichiarata nel problema perché possono essere adottate convenzioni diverse.','strumenti','Risoluzione e criterio di lettura')
    if f==7:
        hi=20+5*k;n=10;v=F(hi,n)
        return N(f'Fra ${0}$ e ${hi}\\,\\mathrm N$ su una scala ci sono ${n}$ intervalli uguali. Quanto vale ogni divisione?',str(v),[hi,hi*n,F(hi,n+1)],r'\mathrm N','La risoluzione della scala si ricava dall’ampiezza totale divisa per il numero di intervalli.',f'Una divisione vale $\\dfrac{{{hi}}}{{{n}}}={tex(v)}\\,\\mathrm N$.','Si contano gli spazi fra le tacche, non le tacche comprese agli estremi.','strumenti','Divisioni di una scala')
    if f==8:
        d1=F(a,10);d2=F(a+1,10);v=d1+d2
        return N(f'Due lunghezze indipendentemente misurate hanno incertezze assolute ${tex(d1)}$ e ${tex(d2)}\\,\\mathrm{{cm}}$. Con la stima prudenziale per una somma, qual è l’incertezza della somma?',str(v),[abs(d1-d2),d1*d2,max(d1,d2)],r'\mathrm{cm}','Nella stima prudenziale le incertezze assolute di una somma si sommano.',f'Si ottiene $\\Delta L={tex(d1)}+{tex(d2)}={tex(v)}\\,\\mathrm{{cm}}$.','Questo metodo considera il caso limite in cui gli scarti contribuiscono nello stesso verso.','propagazione','Incertezze nelle somme')
    if f==9:
        d1=F(a,10);d2=F(a+2,10);v=d1+d2
        return N(f'Il lato di una cornice si ricava sottraendo due letture con incertezze ${tex(d1)}$ e ${tex(d2)}\\,\\mathrm{{mm}}$. Con la stima prudenziale, qual è l’incertezza della differenza?',str(v),[abs(d1-d2),max(d1,d2),d1*d2],r'\mathrm{mm}','Anche per una differenza la stima prudenziale somma le incertezze assolute.',f'Dunque $\\Delta l={tex(d1)}+{tex(d2)}={tex(v)}\\,\\mathrm{{mm}}$.','Sottrarre i valori centrali non implica sottrarre le loro incertezze.','propagazione','Incertezze nelle differenze')
    if f==10:
        p=a;q=a+1;v=p+q
        return N(f'La base e l’altezza di un rettangolo hanno incertezze relative del ${p}\\%$ e ${q}\\%$. Nella propagazione lineare prudenziale del prodotto, qual è l’incertezza relativa dell’area?',str(v),[p*q,abs(p-q),F(p+q,2)],r'\%','Nella propagazione lineare di un prodotto si sommano le incertezze relative.',f'Quindi $\\varepsilon_A\\simeq{p}\\%+{q}\\%={v}\\%$.','La formula trascura il prodotto degli scarti relativi e vale come approssimazione di primo ordine.','propagazione','Prodotti e incertezze relative')
    if f==11:
        p=a;q=a+2;v=p+q
        return N(f'Massa e volume hanno incertezze relative del ${p}\\%$ e ${q}\\%$. Nella stima lineare prudenziale di $\\rho=m/V$, quanto vale l’incertezza relativa della densità?',str(v),[p*q,abs(p-q),F(p+q,2)],r'\%','Per un rapporto la propagazione lineare prudenziale somma le incertezze relative.',f'Perciò $\\varepsilon_\\rho\\simeq{p}\\%+{q}\\%={v}\\%$.','Il quoziente amplifica gli scarti quando numeratore e denominatore variano in versi opposti.','propagazione','Quozienti e incertezze relative')
    if f==12:
        p=a;v=2*p
        return N(f'Il lato di un quadrato ha incertezza relativa del ${p}\\%$. Qual è, al primo ordine, l’incertezza relativa dell’area?',str(v),[p,p*p,F(p,2),3*p],r'\%','L’area contiene due fattori uguali alla lunghezza del lato.',f'La regola delle potenze dà $\\varepsilon_A\\simeq2\\varepsilon_l={v}\\%$.','Il risultato è una stima lineare, quindi non include il termine quadratico dello scarto.','propagazione','Potenze e incertezze relative')
    if f==13:
        x=F(1245+100*k,100);v=F(125+10*k,10)
        return N(f'Arrotondare ${tex(x)}\\,\\mathrm{{cm}}$ al decimo, usando l’arrotondamento per eccesso quando la cifra successiva è 5.',str(v),[v-F(1,10),x,v+F(1,10)],r'\mathrm{cm}','La cifra dei centesimi decide l’arrotondamento al decimo.',f'Poiché è $5$, il valore arrotondato è ${tex(v)}\\,\\mathrm{{cm}}$.','Si conserva una sola cifra dopo la virgola, come richiesto.','cifre','Arrotondamenti al decimo')
    if f==14:
        x=20+k
        return T(f'Lo strumento segna sempre ${x}\\,\\mathrm g$ in più rispetto a masse campione note. Quale descrizione è corretta?','È presente uno scarto sistematico positivo',['Le misure sono esatte perché lo scarto si ripete','La media di molte letture elimina certamente lo scarto','Lo scarto è necessariamente casuale'],'Uno scarto dello stesso segno rispetto a riferimenti noti indica un errore sistematico.',f'In questo caso la lettura supera il riferimento di ${x}\\,\\mathrm g$.','La ripetizione riduce la componente casuale ma non corregge da sola una taratura errata.','errori','Errori sistematici')
    if f==15:
        x=100+20*k;d1=a;d2=2*a
        return T(f'Due strumenti misurano lo stesso valore ${x}\\,\\mathrm{{cm}}$: il primo con incertezza ${d1}\\,\\mathrm{{cm}}$, il secondo con ${d2}\\,\\mathrm{{cm}}$. Quale misura ha minore incertezza relativa?','La misura del primo strumento',['La misura del secondo strumento','Hanno la stessa incertezza relativa','Il confronto è impossibile senza conoscere la massa'],'A parità di valore centrale si confrontano direttamente le incertezze assolute.',f'Il rapporto ${d1}/{x}$ è metà del rapporto ${d2}/{x}$.','Il primo strumento fornisce quindi l’intervallo relativo più stretto.','relativa','Confronti di precisione')
    if f==16:
        c=10+2*k
        return T(f'Le misure $({c}\\pm2)\\,\\mathrm{{cm}}$ e $({c+3}\\pm2)\\,\\mathrm{{cm}}$ sono compatibili secondo il criterio della sovrapposizione degli intervalli?','Sì, gli intervalli si sovrappongono',['No, perché i valori centrali sono diversi','Sì, perché hanno sempre lo stesso valore vero','No, perché le incertezze devono essere nulle'],'Con questo criterio due misure sono compatibili se gli intervalli hanno almeno un punto comune.',f'Gli intervalli sono $[{c-2};{c+2}]$ e $[{c+1};{c+5}]\\,\\mathrm{{cm}}$.','La parte comune non prova che i valori veri coincidano, ma evita una incompatibilità secondo il criterio scelto.','intervalli','Compatibilità delle misure')
    x=F(a,100);v=F(a,10)
    return N(f'Una serie ha semidispersione {M(x,r"\mathrm{{cm}}")}, mentre l’incertezza di lettura è {M(v,r"\mathrm{{cm}}")}. Adottando il maggiore dei due valori, quale incertezza si assegna?',str(v),[x,x+v,x*v],r'\mathrm{cm}','Il criterio dichiarato sceglie la maggiore fra dispersione e incertezza strumentale.',f'Poiché ${tex(v)}>{tex(x)}$, si assegna $\\Delta l={tex(v)}\\,\\mathrm{{cm}}$.','Una serie molto regolare non giustifica una precisione superiore a quella ammessa dallo strumento.','ripetute','Dispersione e limite dello strumento')

def graphs(f,k):
    a=k+2;b=k+4
    if f==0:
        x=a;y=a*b
        return N(f'Due grandezze seguono $y=cx$. Una misura fornisce $x={x}$ e $y={y}$. Quanto vale $c$?',str(b),[x*y,F(x,y),y-x],'','Nella proporzionalità diretta il rapporto fra le due grandezze è costante.',f'Si ricava $c=\\dfrac{{y}}{{x}}=\\dfrac{{{y}}}{{{x}}}={b}$.','Il prodotto fra le grandezze non è invece il coefficiente della relazione.','diretta','Coefficienti di proporzionalità diretta')
    if f==1:
        return N(f'Il volume di liquido raccolto è $V=qt$, con portata costante $q={a}\\,\\mathrm{{L/min}}$. Quanto volume si raccoglie in ${b}\\,\\mathrm{{min}}$?',str(a*b),[F(b,a),a+b,F(a,b)],r'\mathrm L','Con portata costante il volume raccolto è direttamente proporzionale al tempo.',f'La relazione dà $V={a}\\cdot{b}={a*b}\\,\\mathrm L$.','Le unità minuto al numeratore e al denominatore si semplificano.','diretta','Valori da una relazione diretta')
    if f==2:
        return N(f'Una molla campione segue $F=kx$, con $k={10*a}\\,\\mathrm{{N/m}}$. Quale allungamento produce una forza ${2*a}\\,\\mathrm N$?',str(F(1,5)),[5,F(a,5),F(1,50)],r'\mathrm m','Per trovare la variabile moltiplicata per il coefficiente si divide per il coefficiente stesso.',f'Segue $x=\\dfrac{{F}}{{k}}=\\dfrac{{{2*a}}}{{{10*a}}}=0{{,}}2\\,\\mathrm m$.','La legge fornita descrive il tratto di proporzionalità della molla campione.','diretta','Problemi inversi di proporzionalità diretta')
    if f==3:
        return N(f'Due grandezze positive sono inversamente proporzionali. Quando $x={a}$ si misura $y={b}$. Qual è la costante $c$ nella legge $y=c/x$?',str(a*b),[F(b,a),F(a,b),a+b],'','Nella proporzionalità inversa resta costante il prodotto delle grandezze.',f'Quindi $c=xy={a}\\cdot{b}={a*b}$.','Il rapporto costante caratterizzerebbe invece la proporzionalità diretta.','inversa','Costanti di proporzionalità inversa')
    if f==4:
        c=6*a
        return N(f'La legge è $y=\\dfrac{{{c}}}x$, con $x>0$. Quanto vale $y$ per $x=3$?',str(2*a),[3*c,c-3,F(3,c)],'','Si sostituisce il valore positivo di x nel denominatore.',f'Si trova $y=\\dfrac{{{c}}}3={2*a}$.','All’aumentare di x il valore di y diminuisce, restando costante il prodotto.','inversa','Valori da una relazione inversa')
    if f==5:
        c=12*a
        return N(f'La legge è $xy={c}$, con $x,y>0$. Quale valore di $x$ corrisponde a $y=4$?',str(3*a),[4*c,c-4,F(4,c)],'','L’equazione del prodotto costante si risolve dividendo per y.',f'Pertanto $x=\\dfrac{{{c}}}4={3*a}$.','Il valore trovato soddisfa il prodotto richiesto.','inversa','Problemi inversi del prodotto costante')
    if f==6:
        y1=a+1;y2=y1+3*b
        return N(f'Una retta passa per $(1;{y1})$ e $(4;{y2})$. Qual è il coefficiente angolare?',str(b),[F(y2,4),y2-y1,F(3,y2-y1)],'','La pendenza confronta la variazione verticale con quella orizzontale.',f'Quindi $m=\\dfrac{{{y2}-{y1}}}{{4-1}}={b}$.','Le coordinate del singolo punto non bastano quando la retta non passa per l’origine.','affine','Pendenze da due punti')
    if f==7:
        return N(f'La retta $y={a}x+q$ passa per il punto $(2;{2*a+b})$. Quanto vale l’intercetta $q$?',str(b),[2*a+b,a+b,2*a-b],'','L’intercetta è il valore che resta dopo aver sottratto il contributo proporzionale.',f'Sostituendo il punto si ottiene $q=({2*a+b})-{a}\\cdot2={b}$.','Essa rappresenta il valore di y quando x vale zero.','affine','Intercette da una misura')
    if f==8:
        return N(f'Un recipiente contiene inizialmente ${b}\\,\\mathrm L$ e riceve ${a}\\,\\mathrm{{L/min}}$. Quanto liquido contiene dopo $3\\,\\mathrm{{min}}$, senza perdite?',str(b+3*a),[3*a,a+b,3*(a+b),b],r'\mathrm L','Il volume iniziale si somma al volume aggiunto.',f'Si ha $V={b}+{a}\\cdot3={b+3*a}\\,\\mathrm L$.','La relazione è affine, perché il volume iniziale è diverso da zero.','affine','Leggi affini in contesti sperimentali')
    if f==9:
        return N(f'Un grafico è descritto da $y={a*b}-{a}x$. Per quale valore di $x$ incontra l’asse orizzontale?',str(b),[a*b,a+b,-b],'','Sull’asse orizzontale la coordinata y vale zero.',f'Ponendo $0={a*b}-{a}x$ si ricava $x={b}$.','Il segno negativo della pendenza indica che y diminuisce al crescere di x.','affine','Intersezioni con l’asse orizzontale')
    if f==10:
        return T(f'La tabella contiene le coppie $(1;{a}), (2;{2*a}), (3;{3*a})$. Quale modello descrive tutti i dati?','$y='+str(a)+'x$',['$y='+str(a)+r'\div x$','$y=x+'+str(a)+'$','$y='+str(a)+'x^2$'],'Si confrontano i rapporti y/x dei dati.',f'Tutti i rapporti valgono ${a}$, quindi i punti soddisfano $y={a}x$.','Il grafico del modello è una retta passante per l’origine.','tabelle','Riconoscere la proporzionalità da una tabella')
    if f==11:
        factor=a;v=a*a
        return N(f'Una grandezza segue $y=cx^2$, con $c>0$ e x iniziale positivo. Se x diventa ${factor}$ volte il valore iniziale, di quale fattore cresce y?',str(v),[factor,2*factor,1] if factor!=2 else [2,8,1],'','Il fattore applicato a x compare due volte nel quadrato.',f'Infatti $y_2=c({factor}x_1)^2={v}y_1$.','Il fattore di crescita non dipende dal valore di c.','quadratica','Variazioni quadratiche')
    if f==12:
        factor=a;v=F(1,a*a)
        return N(f'Una grandezza segue $y=c/x^2$, con $c>0$ e x positivo. Se x viene moltiplicato per ${factor}$, quanto vale il rapporto $y_2/y_1$?',str(v),[F(1,factor),factor,factor*factor],'','Il quadrato della variabile è al denominatore.',f'Pertanto $\\dfrac{{y_2}}{{y_1}}=\\dfrac1{{{factor}^2}}={tex(v)}$.','Il valore di y diminuisce quando aumenta la variabile positiva x.','quadratica','Variazioni inverse quadratiche')
    if f==13:
        return T(f'Nel grafico di massa m, in grammi, contro volume V, in centimetri cubi, una retta ha pendenza numerica ${a}$. Qual è l’unità della pendenza?',r'$\mathrm{g/cm^3}$',[r'$\mathrm{cm^3/g}$',r'$\mathrm{g\,cm^3}$',r'$\mathrm g$'],'La pendenza ha unità pari a quella dell’asse verticale divisa per quella dell’asse orizzontale.',r'Si ottiene quindi $\dfrac{\mathrm g}{\mathrm{cm}^3}$.','In questo grafico la pendenza descrive la densità di un materiale omogeneo.','assi','Unità di una pendenza')
    if f==14:
        return N(f'In un grafico ogni quadretto orizzontale vale ${a}\\,\\mathrm{{cm}}$ e ogni quadretto verticale vale ${b}\\,\\mathrm N$. Una retta sale di 3 quadretti mentre avanza di 2. Quanto vale la pendenza in $\\mathrm{{N/cm}}$?',str(F(3*b,2*a)),[F(3,2),F(2*a,3*b),F(3*b,a)],r'\mathrm{N/cm}','I quadretti vanno trasformati nelle grandezze rappresentate dagli assi.',f'La pendenza è $\\dfrac{{3\\cdot{b}}}{{2\\cdot{a}}}={tex(F(3*b,2*a))}\\,\\mathrm{{N/cm}}$.','Contare soltanto i quadretti sarebbe corretto solo con scale coerenti e unità considerate.','assi','Scale diverse nei grafici')
    if f==15:
        return N(f'Per una proporzionalità diretta positiva, x aumenta del ${10*a}\\%$. Di quale percentuale aumenta y?',str(10*a),[a,100+10*a,100-10*a,1000*a],r'\%','Nella relazione y=cx un fattore applicato a x si applica anche a y.',f'Il rapporto fra valore nuovo e iniziale è $1+\\dfrac{{{10*a}}}{{100}}$ per entrambe le grandezze.','Perciò la variazione percentuale è uguale.','diretta','Variazioni percentuali in una legge diretta')
    if f==16:
        v=F(1,a)
        return N(f'Si distribuisce una quantità fissa di materiale in strati tutti della stessa densità. Se l’area dello strato viene moltiplicata per ${a}$, quale diventa il rapporto fra nuovo e vecchio spessore?',str(v),[a,a*a,F(1,a*a)],'','A volume fissato il prodotto area per spessore è costante.',f'Da $A_1h_1=A_2h_2$ e $A_2={a}A_1$ segue $h_2/h_1={tex(v)}$.','L’area maggiore richiede uno spessore minore nella proporzione inversa.','inversa','Modelli a prodotto costante')
    return T(f'Due modelli sono $y={a}x$ e $y={a}x+{b}$. Quale affermazione distingue correttamente i grafici?','Hanno la stessa pendenza e intercette diverse',['Hanno sempre la stessa intercetta','Il secondo ha pendenza maggiore','Il primo è una curva quadratica'],'Il coefficiente di x determina la pendenza.',f'Entrambi hanno coefficiente ${a}$, mentre i valori per $x=0$ sono $0$ e ${b}$.','Le due rette sono parallele e distinte.','affine','Confronti tra modelli grafici')


def density(f,k):
    a=k+2;b=k+4
    if f==0:
        m=30*a;v=10*a
        return N(f'Un campione omogeneo ha massa ${m}\\,\\mathrm g$ e volume ${v}\\,\\mathrm{{cm}}^3$. Quanto vale la densità?',str(F(m,v)),[m*v,F(v,m),m-v],r'\mathrm{g/cm^3}','La densità è la massa divisa per il volume del campione.',f'Si ottiene $\\rho=\\dfrac{{{m}}}{{{v}}}=3\\,\\mathrm{{g/cm^3}}$.','Il rapporto indica quanti grammi sono contenuti in un centimetro cubo.','definizione','Densità da massa e volume')
    if f==1:
        d=a;v=12+b;ans=d*v
        return N(f'Un materiale ha densità ${d}\\,\\mathrm{{g/cm^3}}$. Qual è la massa di ${v}\\,\\mathrm{{cm}}^3$ di materiale?',str(ans),[F(v,d),F(d,v),d+v],r'\mathrm g','Si ricava la massa moltiplicando densità e volume.',f'Quindi $m=\\rho V={d}\\cdot{v}={ans}\\,\\mathrm g$.','Le unità di volume si semplificano e il risultato ha unità di massa.','inverse','Masse da una densità nota')
    if f==2:
        d=a;m=15*a;ans=15
        return N(f'Un campione pesa sulla bilancia ${m}\\,\\mathrm g$ e ha densità ${d}\\,\\mathrm{{g/cm^3}}$. Qual è il suo volume?',str(ans),[m*d,F(d,m),m-d],r'\mathrm{cm}^3','Il volume si ricava dividendo la massa per la densità.',f'Pertanto $V=\\dfrac{{m}}{{\\rho}}=\\dfrac{{{m}}}{{{d}}}=15\\,\\mathrm{{cm}}^3$.','La lettura in grammi della bilancia è qui una misura della massa.','inverse','Volumi da massa e densità')
    if f==3:
        d=F(10+a,10);ans=d*1000
        return N(f'La densità di un materiale è ${tex(d)}\\,\\mathrm{{g/cm^3}}$. Quanto vale in unità SI?',str(ans),[d,d/1000,d*1000000],r'\mathrm{kg/m^3}','Un grammo vale un millesimo di chilogrammo e un centimetro cubo un milionesimo di metro cubo.',f'Quindi $1\\,\\mathrm{{g/cm^3}}=1000\\,\\mathrm{{kg/m^3}}$ e $\\rho={tex(ans)}\\,\\mathrm{{kg/m^3}}$.','I due fattori di conversione vanno applicati anche quando compaiono nello stesso rapporto.','unita','Conversioni della densità')
    if f==4:
        v0=30+a;dv=5+a;m=3*dv
        return N(f'Un cilindro graduato passa da ${v0}$ a ${v0+dv}\\,\\mathrm{{mL}}$ quando si immerge completamente un solido non poroso di massa ${m}\\,\\mathrm g$. Qual è la densità del solido?',str(3),[F(m,v0+dv),F(m,v0),dv*3],r'\mathrm{g/cm^3}','Il volume del solido è l’aumento del livello, se il solido è completamente immerso e non assorbe liquido.',f'Si ha $V={v0+dv}-{v0}={dv}\\,\\mathrm{{cm}}^3$ e $\\rho={m}/{dv}=3\\,\\mathrm{{g/cm^3}}$.','Il volume iniziale del liquido non appartiene al campione.','spostamento','Volumi per immersione')
    if f==5:
        d=2+a;v=5+a;empty=2;mass=d*(v-empty)
        return N(f'Un oggetto ha volume esterno ${v}\\,\\mathrm{{cm}}^3$, cavità interna di ${empty}\\,\\mathrm{{cm}}^3$ e materiale di densità ${d}\\,\\mathrm{{g/cm^3}}$. Trascurando la massa dell’aria, quale massa ha?',str(mass),[d*v,d*empty,F(v-empty,d)],r'\mathrm g','La massa dipende dal volume occupato dal materiale.',f'Il volume effettivo è ${v}-{empty}={v-empty}\\,\\mathrm{{cm}}^3$, quindi $m={d}\\cdot{v-empty}={mass}\\,\\mathrm g$.','La cavità contribuisce al volume esterno ma non alla massa del materiale.','cavita','Corpi cavi e volume di materiale')
    if f==6:
        d=3;v=10+a;mass=2*v;ans=F(mass,v+5)
        return N(f'Un oggetto cavo ha massa ${mass}\\,\\mathrm g$ e volume esterno ${v+5}\\,\\mathrm{{cm}}^3$. Qual è la sua densità media rispetto al volume esterno?',str(ans),[F(v+5,mass),mass*(v+5),F(mass,v)],r'\mathrm{g/cm^3}','La densità media usa la massa totale e il volume esterno specificato.',f'Quindi $\\rho_{{media}}=\\dfrac{{{mass}}}{{{v+5}}}={tex(ans)}\\,\\mathrm{{g/cm^3}}$.','Il valore può differire dalla densità del materiale della parete.','cavita','Densità medie di oggetti non pieni')
    if f==7:
        v=10+a;d1=2;d2=3+a;ans=(d2-d1)*v
        return N(f'Due campioni hanno entrambi volume ${v}\\,\\mathrm{{cm}}^3$ e densità ${d1}$ e ${d2}\\,\\mathrm{{g/cm^3}}$. Di quanto è maggiore la massa del secondo?',str(ans),[(d1+d2)*v,d2-d1,F(d2-d1,v)],r'\mathrm g','A parità di volume la differenza di massa è il volume moltiplicato per la differenza di densità.',f'Si ottiene $\\Delta m=({d2}-{d1})\\cdot{v}={ans}\\,\\mathrm g$.','Il secondo campione è più massiccio perché contiene più massa per unità di volume.','confronti','Campioni con volume uguale')
    if f==8:
        mass=12*a;d1=a;d2=2*a;ans=6
        return N(f'Due corpi hanno massa ${mass}\\,\\mathrm g$. Le densità sono ${d1}$ e ${d2}\\,\\mathrm{{g/cm^3}}$. Quanto vale il volume del corpo più denso?',str(ans),[12,24,6*a,3],r'\mathrm{cm}^3','A massa uguale il volume è inversamente proporzionale alla densità.',f'Per il corpo più denso si ha $V=\\dfrac{{{mass}}}{{{d2}}}=6\\,\\mathrm{{cm}}^3$.','Raddoppiare la densità dimezza il volume a massa fissata.','confronti','Campioni con massa uguale')
    if f==9:
        v1=10*a;v2=10;d1=1;d2=2;ans=F(v1*d1+v2*d2,v1+v2)
        return N(f'Si mescolano ${v1}\\,\\mathrm{{cm}}^3$ di liquido di densità $1\\,\\mathrm{{g/cm^3}}$ e $10\\,\\mathrm{{cm}}^3$ di liquido di densità $2\\,\\mathrm{{g/cm^3}}$. Assumendo volumi additivi, qual è la densità della miscela?',str(ans),[3,F(3,2),F(v1+v2,v1+20)],r'\mathrm{g/cm^3}','Si sommano le masse e, per l’ipotesi dichiarata, anche i volumi.',f'Perciò $\\rho=\\dfrac{{{v1}+20}}{{{v1}+10}}={tex(ans)}\\,\\mathrm{{g/cm^3}}$.','La media aritmetica delle densità sarebbe adatta soltanto a volumi uguali.','miscele','Miscele con volumi additivi')
    if f==10:
        area=10*a;h=F(1,10);d=5;ans=area*h*d
        return N(f'Una lastra ha area ${area}\\,\\mathrm{{cm}}^2$, spessore $1\\,\\mathrm{{mm}}$ e densità $5\\,\\mathrm{{g/cm^3}}$. Qual è la massa?',str(ans),[area*5,area*50,area/5],r'\mathrm g','Il volume della lastra è area per spessore, espresso in centimetri.',f'Si ha $V={area}\\cdot0{{,}}1={tex(area*h)}\\,\\mathrm{{cm}}^3$, quindi $m=5V={tex(ans)}\\,\\mathrm g$.','Convertire lo spessore evita di mescolare centimetri quadrati e millimetri.','geometria','Densità e spessori di lastre')
    if f==11:
        side=a;d=2;ans=2*a**3
        return N(f'Un cubo omogeneo ha lato ${a}\\,\\mathrm{{cm}}$ e densità $2\\,\\mathrm{{g/cm^3}}$. Quanto vale la sua massa?',str(ans),[2*a,2*a*a,a**3,6*a],r'\mathrm g','Il volume di un cubo è il cubo del lato.',f'Dunque $m=\\rho l^3=2\\cdot{a}^3={ans}\\,\\mathrm g$.','La densità trasforma il volume geometrico in massa.','geometria','Masse di solidi regolari')
    if f==12:
        outer=20+a;mass=3*(outer-5)
        return N(f'Un oggetto ha volume esterno ${outer}\\,\\mathrm{{cm}}^3$, massa ${mass}\\,\\mathrm g$ e materiale di densità $3\\,\\mathrm{{g/cm^3}}$. Qual è il volume della cavità, trascurando la massa dell’aria?',str(5),[outer,F(mass,3),outer+F(mass,3)],r'\mathrm{cm}^3','La massa e la densità permettono di ricavare il volume del solo materiale.',f'Questo volume è ${mass}/3={outer-5}\\,\\mathrm{{cm}}^3$, quindi la cavità misura ${outer}-({outer-5})=5\\,\\mathrm{{cm}}^3$.','Si sottrae il volume materiale dal volume esterno.','cavita','Volumi di cavità')
    if f==13:
        tare=30+a;full=tare+2*(10+a);v=10+a
        return N(f'Un recipiente vuoto ha massa ${tare}\\,\\mathrm g$; con ${v}\\,\\mathrm{{cm}}^3$ di liquido ha massa ${full}\\,\\mathrm g$. Qual è la densità del liquido?',str(2),[F(full,v),F(tare,v),F(v,full-tare)],r'\mathrm{g/cm^3}','Si sottrae la tara dalla massa complessiva.',f'La massa del liquido è ${full}-{tare}={full-tare}\\,\\mathrm g$, quindi $\\rho=\\dfrac{{{full-tare}}}{{{v}}}=2\\,\\mathrm{{g/cm^3}}$.','La massa del recipiente non fa parte del campione studiato.','spostamento','Tara e densità di un liquido')
    if f==14:
        v=20+a;mass=F(4,5)*v
        return T(f'Un campione ha densità $0{{,}}8\\,\\mathrm{{g/cm^3}}$ e volume ${v}\\,\\mathrm{{cm}}^3$. Se lo si divide in due parti omogenee uguali senza alterarlo, quale densità ha ogni parte?',r'$0{,}8\,\mathrm{g/cm^3}$',[r'$0{,}4\,\mathrm{g/cm^3}$',r'$1{,}6\,\mathrm{g/cm^3}$',r'$0{,}2\,\mathrm{g/cm^3}$'],'Dividendo il campione si dimezzano massa e volume.',r'Nel rapporto $\rho=m/V$ i due fattori di dimezzamento si semplificano.','La densità del materiale omogeneo resta quindi invariata.','confronti','Densità e suddivisione di un campione')
    if f==15:
        mass=100*a;vol=F(a,10);ans=F(mass,1000)/vol
        return N(f'Un liquido ha massa ${mass}\\,\\mathrm g$ e volume ${tex(vol)}\\,\\mathrm L$. Qual è la densità in $\\mathrm{{kg/L}}$?',str(ans),[mass/vol,F(mass,1000)*vol,vol/F(mass,1000),1000,1000000],r'\mathrm{kg/L}','La massa va convertita in chilogrammi prima del rapporto richiesto.',f'Si trova $\\rho=\\dfrac{{{tex(F(mass,1000))}}}{{{tex(vol)}}}=1\\,\\mathrm{{kg/L}}$.','Il litro resta l’unità del denominatore perché è quella richiesta.','unita','Densità con dati in unità diverse')
    if f==16:
        d=a;v1=3;v2=3+b;dm=d*b
        return N(f'Un materiale omogeneo ha masse ${d*v1}$ e ${d*v2}\\,\\mathrm g$ quando i volumi sono ${v1}$ e ${v2}\\,\\mathrm{{cm}}^3$. Quale densità si ricava dalla pendenza del grafico massa-volume?',str(d),[dm,F(b,dm),d*v2],r'\mathrm{g/cm^3}','La pendenza del grafico massa-volume è la densità.',f'Da $\\rho=\\dfrac{{\\Delta m}}{{\\Delta V}}=\\dfrac{{{dm}}}{{{b}}}$ si ottiene ${d}\\,\\mathrm{{g/cm^3}}$.','Le differenze devono riferirsi agli stessi due campioni.','grafico','Densità dalla pendenza di un grafico')
    return T(f'Due campioni A e B hanno volumi ${a}$ e ${2*a}\\,\\mathrm{{cm}}^3$ e masse ${3*a}$ e ${4*a}\\,\\mathrm g$. Quale è più denso?','A è più denso di B',['B è più denso di A','Hanno la stessa densità','Non è possibile confrontarli perché i volumi sono diversi'],'Si confrontano i rapporti massa-volume, non le sole masse.',f'Per A il rapporto vale $3\\,\\mathrm{{g/cm^3}}$, per B vale $2\\,\\mathrm{{g/cm^3}}$.','Il campione di massa maggiore può avere densità minore se il volume cresce maggiormente.','confronti','Confrontare masse e volumi diversi')


def vectors(f,k):
    a=k+2;b=k+4
    if f==0:
        return N(f'Due vettori hanno componenti orizzontali $u_x={a}\\,\\mathrm N$ e $v_x={b}\\,\\mathrm N$. Qual è la componente orizzontale della somma?',str(a+b),[a-b,a*b,F(a,b)],r'\mathrm N','La somma vettoriale si esegue componente per componente.',f'Quindi $(u+v)_x=u_x+v_x={a}+{b}={a+b}\\,\\mathrm N$.','Le componenti verticali non intervengono nel calcolo di quella orizzontale.','componenti','Somme di componenti orizzontali')
    if f==1:
        return N(f'Due vettori hanno componenti verticali $u_y={a}\\,\\mathrm N$ e $v_y=-{b}\\,\\mathrm N$. Quanto vale la componente verticale della somma?',str(a-b),[a+b,b-a,a*b],r'\mathrm N','Le componenti mantengono il proprio segno nella somma.',f'Si trova $(u+v)_y={a}+(-{b})={a-b}\\,\\mathrm N$.','Il risultato negativo indica il verso opposto a quello positivo dell’asse verticale.','componenti','Somme con componenti di segno opposto')
    if f==2:
        return N(f'Si hanno $u_x={a}\\,\\mathrm m$ e $v_x=-{b}\\,\\mathrm m$. Qual è la componente x del vettore $u-v$?',str(a+b),[a-b,b-a,-a-b],r'\mathrm m','Sottrarre un vettore equivale a sommare il suo opposto.',f'Pertanto $(u-v)_x={a}-(-{b})={a+b}\\,\\mathrm m$.','Il doppio segno negativo produce una somma delle componenti positive.','operazioni','Differenze di vettori')
    if f==3:
        return T(f'Il vettore $u$ ha componenti $({a};-{b})\\,\\mathrm N$. Quali sono le componenti di $-u$?',f'$(-{a};{b})\\,\\mathrm N$',[f'$({a};{b})\\,\\mathrm N$',f'$(-{a};-{b})\\,\\mathrm N$',f'$({b};-{a})\\,\\mathrm N$'],'Il vettore opposto ha lo stesso modulo e verso opposto.',f'Si cambia il segno di entrambe le componenti, ottenendo $(-{a};{b})\\,\\mathrm N$.','Cambiare un solo segno produrrebbe in generale un altro vettore.','operazioni','Vettori opposti')
    if f==4:
        return T(f'Un vettore ha componenti $({a};{b})\\,\\mathrm m$. Quali componenti ha il vettore moltiplicato per 3?',f'$({3*a};{3*b})\\,\\mathrm m$',[f'$({a+3};{b+3})\\,\\mathrm m$',f'$({3*a};{b})\\,\\mathrm m$',f'$({a};{3*b})\\,\\mathrm m$'],'Il prodotto per uno scalare moltiplica ogni componente per lo stesso numero.',f'Le componenti diventano $(3\\cdot{a};3\\cdot{b})=({3*a};{3*b})\\,\\mathrm m$.','Poiché lo scalare è positivo, direzione e verso restano invariati.','operazioni','Prodotti per uno scalare positivo')
    if f==5:
        return N(f'Un vettore ha componenti perpendicolari ${3*a}$ e ${4*a}\\,\\mathrm N$. Qual è il suo modulo?',str(5*a),[7*a,a,12*a*a],r'\mathrm N','Le componenti sono i cateti di un triangolo rettangolo.',f'Per Pitagora $|u|=\\sqrt{{({3*a})^2+({4*a})^2}}={5*a}\\,\\mathrm N$.','La somma dei moduli sarebbe corretta soltanto per componenti concordi sulla stessa retta.','modulo','Moduli da componenti perpendicolari')
    if f==6:
        return N(f'Un vettore ha modulo ${5*a}\\,\\mathrm m$ e componente orizzontale ${3*a}\\,\\mathrm m$. Quanto vale il modulo della componente verticale?',str(4*a),[2*a,8*a,5*a],r'\mathrm m','Il quadrato del modulo è la somma dei quadrati delle componenti.',f'Pertanto $|u_y|=\\sqrt{{({5*a})^2-({3*a})^2}}={4*a}\\,\\mathrm m$.','La richiesta del modulo evita di attribuire un segno non determinato dai dati.','modulo','Componenti da un modulo noto')
    if f==7:
        return N(f'Due forze collineari di ${3*a}$ e ${2*a}\\,\\mathrm N$ sono entrambe dirette a destra. Qual è il modulo della risultante?',str(5*a),[a,6*a*a,0],r'\mathrm N','Forze collineari e concordi hanno risultante pari alla somma dei moduli.',f'Dunque $R={3*a}+{2*a}={5*a}\\,\\mathrm N$.','La risultante è orientata nello stesso verso delle due forze.','collineari','Vettori collineari concordi')
    if f==8:
        return N(f'Due forze collineari valgono ${5*a}\\,\\mathrm N$ verso destra e ${2*a}\\,\\mathrm N$ verso sinistra. Qual è il modulo della risultante?',str(3*a),[7*a,-3*a,10*a*a],r'\mathrm N','Per vettori collineari opposti si sottraggono i moduli.',f'Il modulo della risultante è ${5*a}-{2*a}={3*a}\\,\\mathrm N$.','Il verso è quello della forza maggiore, cioè verso destra.','collineari','Vettori collineari discordi')
    if f==9:
        return T(f'Un vettore $u=({a};-{b})\\,\\mathrm N$ viene moltiplicato per $-2$. Qual è il risultato?',f'$(-{2*a};{2*b})\\,\\mathrm N$',[f'$({2*a};-{2*b})\\,\\mathrm N$',f'$(-{a};{b})\\,\\mathrm N$',f'$({a-2};-{b+2})\\,\\mathrm N$'],'Lo scalare negativo inverte il verso e moltiplica il modulo per il proprio valore assoluto.',f'Si trova $-2u=(-{2*a};{2*b})\\,\\mathrm N$.','Entrambe le componenti sono moltiplicate per meno due.','operazioni','Prodotti per uno scalare negativo')
    if f==10:
        return N(f'Su un asse orientato a destra, tre spostamenti successivi sono ${4*a}\\,\\mathrm m$ a destra, ${2*a}\\,\\mathrm m$ a sinistra e ${a}\\,\\mathrm m$ a destra. Quanto vale lo spostamento totale con segno?',str(3*a),[7*a,-3*a,a],r'\mathrm m','Lo spostamento totale è la somma delle componenti con segno.',f'Quindi $s={4*a}-{2*a}+{a}={3*a}\\,\\mathrm m$.','La lunghezza totale del percorso sarebbe la somma dei tre moduli.','collineari','Catene di spostamenti su un asse')
    if f==11:
        x0=a;y0=b;xf=4*a;yf=2*b
        return T(f'Nel piano cartesiano $A=({x0};{y0})\\,\\mathrm m$ e $B=({xf};{yf})\\,\\mathrm m$. Quali componenti ha il vettore da A a B?',f'$({3*a};{b})\\,\\mathrm m$',[f'$(-{3*a};-{b})\\,\\mathrm m$',f'$({5*a};{3*b})\\,\\mathrm m$',f'$({xf};{yf})\\,\\mathrm m$'],'Le componenti del vettore si ricavano come coordinate finali meno iniziali.',f'Quindi $AB=({xf}-{x0};{yf}-{y0})=({3*a};{b})\\,\\mathrm m$.','Usare l’ordine inverso darebbe il vettore da B ad A.','componenti','Vettori tra due punti')
    if f==12:
        return T(f'I vettori $u=({a};0)\\,\\mathrm N$ e $v=(0;{a})\\,\\mathrm N$ sono:','Perpendicolari, con lo stesso modulo',['Uguali','Opposti','Paralleli, con lo stesso verso'],'Le componenti indicano che i vettori sono lungo due assi perpendicolari.',f'Entrambi hanno modulo ${a}\\,\\mathrm N$, ma direzioni diverse.','L’uguaglianza dei moduli non basta per rendere uguali due vettori.','definizione','Modulo uguale e direzioni diverse')
    if f==13:
        return T(f'Due vettori hanno somma nulla e il primo è $u=({a};{b})\\,\\mathrm N$. Quale è il secondo?',f'$(-{a};-{b})\\,\\mathrm N$',[f'$({a};{b})\\,\\mathrm N$',f'$({a};-{b})\\,\\mathrm N$',f'$(-{a};{b})\\,\\mathrm N$'],'Una somma vettoriale è nulla quando ogni somma di componenti è nulla.',f'Il secondo vettore deve quindi essere $v=-u=(-{a};-{b})\\,\\mathrm N$.','Questa costruzione sarà usata per trovare una forza equilibrante.','equilibrante','Vettori con somma nulla')
    if f==14:
        return T(f'La risultante di alcune forze ha componenti $R_x=-{a}\\,\\mathrm N$ e $R_y={b}\\,\\mathrm N$. In quale verso punta?','Verso sinistra e verso l’alto',['Verso destra e verso l’alto','Verso sinistra e verso il basso','Verso destra e verso il basso'],'Il segno negativo della componente x indica sinistra.',f'La componente y positiva di ${b}\\,\\mathrm N$ indica invece l’alto.','Le due informazioni identificano il secondo quadrante.','componenti','Versi dalle componenti')
    if f==15:
        full=5*a;ans=3*a
        return N(f'Il modulo di un vettore è ${full}\\,\\mathrm N$. La sua componente positiva lungo x è i tre quinti del modulo. Quanto vale tale componente?',str(ans),[5*full,F(full,3),4*a],r'\mathrm N','Il rapporto fornito permette di calcolare la componente senza introdurre angoli.',f'Si ha $u_x=\\dfrac35\\cdot{full}={ans}\\,\\mathrm N$.','La componente è minore del modulo, come richiesto per una proiezione su un asse.','componenti','Componenti da rapporti geometrici')
    if f==16:
        return N(f'Due vettori hanno moduli ${5*a}$ e ${2*a}\\,\\mathrm N$. Qual è il minimo modulo possibile della somma al variare della loro direzione relativa?',str(3*a),[7*a,0,10*a*a],r'\mathrm N','Il minimo si ottiene quando i vettori sono collineari e di verso opposto.',f'Vale quindi $R_{{min}}=|{5*a}-{2*a}|={3*a}\\,\\mathrm N$.','Una somma nulla richiederebbe anche moduli uguali.','collineari','Limite inferiore del modulo della somma')
    return N(f'Due vettori hanno moduli ${a}$ e ${b}\\,\\mathrm N$. Qual è il massimo modulo possibile della somma?',str(a+b),[b-a,a*b,0] if a*b!=a+b else [b-a,2*(a+b),0],r'\mathrm N','Il massimo si ottiene disponendo i vettori sulla stessa retta e nello stesso verso.',f'Il valore è $R_{{max}}={a}+{b}={a+b}\\,\\mathrm N$.','In ogni altra configurazione la risultante non supera questa somma dei moduli.','collineari','Limite superiore del modulo della somma')

def forces(f,k):
    a=k+2;b=k+4
    if f==0:
        return N(f'Un oggetto ha massa $ {a}\\,\\mathrm{{kg}}$. Assumendo $g=10\\,\\mathrm{{N/kg}}$, quanto vale il peso?',f'{a}*10',[a,F(a,10),a+10],r'\mathrm N','Il peso è la forza gravitazionale locale, data da P=mg.',f'Quindi $P={a}\\cdot10={10*a}\\,\\mathrm N$.','La massa resta espressa in chilogrammi, mentre il peso si esprime in newton.','peso','Pesi da masse note')
    if f==1:
        return N(f'Un oggetto ha peso $ {10*a}\\,\\mathrm N$ dove $g=10\\,\\mathrm{{N/kg}}$. Qual è la massa?',f'{10*a}/10',[10*a,100*a,F(a,10)],r'\mathrm{kg}','La relazione P=mg si risolve dividendo per g.',f'Pertanto $m=\\dfrac{{{10*a}}}{{10}}={a}\\,\\mathrm{{kg}}$.','Forza e massa hanno unità e significati differenti.','peso','Masse da pesi noti')
    if f==2:
        return N(f'Un campione di massa $ {a}\\,\\mathrm{{kg}}$ ha peso $ {6*a}\\,\\mathrm N$ su un corpo celeste. Qual è il valore locale di g?',f'{6*a}/{a}',[6*a,F(1,6),6*a*a],r'\mathrm{N/kg}','Il campo gravitazionale è il peso per unità di massa.',f'Si trova $g=\\dfrac{{{6*a}}}{{{a}}}=6\\,\\mathrm{{N/kg}}$.','Il valore dipende dal luogo, a differenza della massa.','peso','Campi gravitazionali da peso e massa')
    if f==3:
        s=20*a
        return N(f'Una molla ideale ha $k={s}\\,\\mathrm{{N/m}}$ e allungamento $x=0{{,}}2\\,\\mathrm m$, entro il limite elastico. Qual è il modulo della forza elastica?',f'{s}/5',[s*5,s,F(s,50)],r'\mathrm N','La legge di Hooke dà il modulo F=kx.',f'Quindi $F={s}\\cdot0{{,}}2={4*a}\\,\\mathrm N$.','La forza tende a riportare la molla alla lunghezza naturale.','hooke','Forze elastiche da allungamenti')
    if f==4:
        s=100*a;v=5*a
        return N(f'Una molla ideale con $k={s}\\,\\mathrm{{N/m}}$ esercita una forza di modulo $ {v}\\,\\mathrm N$. Qual è il modulo dell’allungamento?',f'{v}/{s}',[20,F(1,5),F(1,500)],r'\mathrm m','La legge di Hooke si risolve dividendo la forza per k.',f'Segue $x=\\dfrac{{{v}}}{{{s}}}=0{{,}}05\\,\\mathrm m$.','La risposta usa metri perché k è espresso in newton al metro.','hooke','Allungamenti da forze elastiche')
    if f==5:
        return N(f'Una molla si allunga di $ {a}\\,\\mathrm{{cm}}$ sotto una forza di $ {3*a}\\,\\mathrm N$. Qual è la costante elastica nel tratto lineare?',f'{3*a}/({a}/100)',[3,30,3000],r'\mathrm{N/m}','La costante è il rapporto fra forza e allungamento in metri.',f'Si calcola $k=\\dfrac{{{3*a}}}{{{tex(F(a,100))}}}=300\\,\\mathrm{{N/m}}$.','Usare direttamente i centimetri darebbe una diversa unità della costante.','hooke','Costanti elastiche sperimentali')
    if f==6:
        l=10+a;s=50*a
        return N(f'Una molla lunga a riposo $ {l}\\,\\mathrm{{cm}}$ diventa lunga $ {l+4}\\,\\mathrm{{cm}}$. Con $k={s}\\,\\mathrm{{N/m}}$, quale forza elastica esercita in modulo?',f'{s}*4/100',[s*F(l+4,100),s*4,F(s,100)],r'\mathrm N','L’allungamento è la differenza tra lunghezza attuale e naturale.',f'Si ha $x=4\\,\\mathrm{{cm}}=0{{,}}04\\,\\mathrm m$, quindi $F={s}\\cdot0{{,}}04={2*a}\\,\\mathrm N$.','La legge di Hooke usa la deformazione, non la lunghezza totale.','hooke','Lunghezza naturale e deformazione')
    if f==7:
        return T(f'Una molla orizzontale è compressa spostando la sua estremità destra di $ {a}\\,\\mathrm{{cm}}$ verso sinistra. In quale verso la molla spinge quella estremità?','Verso destra',['Verso sinistra','Sempre verso l’alto','La forza è nulla perché la molla è compressa'],'La forza elastica è rivolta verso la configurazione non deformata.',f'L’estremità è stata spostata a sinistra della posizione naturale di $ {a}\\,\\mathrm{{cm}}$.','La molla tende quindi a spingerla verso destra.','hooke','Versi delle forze elastiche')
    if f==8:
        n=20*a
        return N(f'Un blocco ha normale $ {n}\\,\\mathrm N$ e coefficiente di attrito statico $0{{,}}3$. Qual è il massimo modulo dell’attrito statico?',f'3*{n}/10',[n,F(n,3)*10,n*3],r'\mathrm N','Il massimo attrito statico è il coefficiente moltiplicato per la normale.',f'Quindi $f_{{s,max}}=0{{,}}3\\cdot{n}={6*a}\\,\\mathrm N$.','L’attrito effettivo può essere minore quando basta una forza inferiore per mantenere la quiete.','attrito','Valori massimi dell’attrito statico')
    if f==9:
        return N(f'Un blocco fermo è tirato orizzontalmente con $ {3*a}\\,\\mathrm N$. L’attrito statico massimo è $ {5*a}\\,\\mathrm N$ e non vi sono altre forze orizzontali. Qual è l’attrito effettivo in modulo?',str(3*a),[5*a,2*a,0],r'\mathrm N','Finché la quiete è possibile, l’attrito statico equilibra la trazione.',f'Poiché $ {3*a}<{5*a}$, basta $f_s={3*a}\\,\\mathrm N$.','Il massimo indica un limite e non una forza automaticamente presente.','attrito','Attrito statico effettivo')
    if f==10:
        n=50*a
        return N(f'Un corpo scorre su un piano con normale $ {n}\\,\\mathrm N$ e coefficiente di attrito dinamico $0{{,}}2$. Qual è il modulo dell’attrito?',f'{n}/5',[n,F(n,2),n*5],r'\mathrm N','Nel modello radente dinamico il modulo è il coefficiente per la normale.',f'Pertanto $f_d=0{{,}}2\\cdot{n}={10*a}\\,\\mathrm N$.','Il verso è opposto allo scorrimento relativo delle superfici.','attrito','Attrito durante lo scorrimento')
    if f==11:
        return N(f'Un blocco di massa $ {a}\\,\\mathrm{{kg}}$ è fermo su un tavolo. Una forza aggiuntiva di $ {2*a}\\,\\mathrm N$ lo spinge verticalmente in basso. Con $g=10\\,\\mathrm{{N/kg}}$, qual è la normale?',f'{a}*10+{2*a}',[8*a,10*a,2*a],r'\mathrm N','La reazione del tavolo equilibra tutte le forze verticali verso il basso.',f'Quindi $N=mg+F={10*a}+{2*a}={12*a}\\,\\mathrm N$.','La normale coincide con il peso soltanto in assenza di altre forze verticali.','contatto','Normali con spinte verso il basso')
    if f==12:
        return N(f'Un blocco di massa $ {a}\\,\\mathrm{{kg}}$ resta fermo sul tavolo mentre una corda lo tira verso l’alto con $ {3*a}\\,\\mathrm N$. Con $g=10\\,\\mathrm{{N/kg}}$, qual è la normale?',f'{a}*10-{3*a}',[13*a,10*a,3*a],r'\mathrm N','La trazione sostiene una parte del peso.',f'Dall’equilibrio $N+T=mg$ segue $N={10*a}-{3*a}={7*a}\\,\\mathrm N$.','Il risultato positivo è coerente con il contatto mantenuto con il tavolo.','contatto','Normali con trazioni verso l’alto')
    if f==13:
        return N(f'Il massimo attrito statico è $ {2*a}\\,\\mathrm N$ con normale $ {10*a}\\,\\mathrm N$. Quanto vale il coefficiente statico?',f'{2*a}/{10*a}',[5,F(1,50),2],'','Il coefficiente si ricava dividendo il massimo attrito per la normale.',f'Si ottiene $\\mu_s=\\dfrac{{{2*a}}}{{{10*a}}}=0{{,}}2$.','Il rapporto fra due forze è adimensionale.','attrito','Coefficienti di attrito')
    if f==14:
        return N(f'Lo stesso oggetto di massa $ {a}\\,\\mathrm{{kg}}$ si trova prima dove $g=10\\,\\mathrm{{N/kg}}$ e poi dove $g=4\\,\\mathrm{{N/kg}}$. Qual è il peso nel secondo luogo?',f'{a}*4',[a,10*a,6*a],r'\mathrm N','La massa è la stessa nei due luoghi, mentre cambia g.',f'Nel secondo luogo $P=mg={a}\\cdot4={4*a}\\,\\mathrm N$.','Il cambiamento del peso non richiede un cambiamento della quantità di materia.','peso','Masse e pesi in luoghi diversi')
    if f==15:
        return N(f'Due molle ideali hanno costanti $100$ e $200\\,\\mathrm{{N/m}}$. Sottoposte separatamente alla stessa forza di $ {6*a}\\,\\mathrm N$, quale rapporto $x_1/x_2$ hanno gli allungamenti?',str(2),[F(1,2),1,4],'','A forza uguale l’allungamento è inversamente proporzionale alla costante.',r'Quindi $\dfrac{x_1}{x_2}=\dfrac{F/100}{F/200}=2$.','La molla con costante minore si deforma maggiormente.','hooke','Confronti tra molle')
    if f==16:
        return N(f'La forza su una molla passa da $ {2*a}$ a $ {3*a}\\,\\mathrm N$ mentre l’allungamento aumenta di $ {a}\\,\\mathrm{{cm}}$. Qual è la pendenza del grafico forza-allungamento?',f'({3*a}-{2*a})/({a}/100)',[1,10,1000],r'\mathrm{N/m}','Nel tratto elastico lineare la pendenza è la costante della molla.',f'Quindi $k=\\dfrac{{{3*a}-{2*a}}}{{{tex(F(a,100))}}}=100\\,\\mathrm{{N/m}}$.','Le differenze permettono di calcolare la pendenza da due misure.','hooke','Costanti elastiche da variazioni')
    return T(f'Una scatola viene spinta con $ {a}\\,\\mathrm N$ verso destra e resta ferma sul tavolo. In quale verso agisce l’attrito del tavolo sulla scatola?','Verso sinistra',['Verso destra','Verticalmente verso l’alto','Verticalmente verso il basso'],'L’attrito statico si oppone alla tendenza allo scorrimento relativo.',f'La spinta di $ {a}\\,\\mathrm N$ tende a far scorrere la scatola a destra.','La forza d’attrito sulla scatola è quindi diretta a sinistra.','attrito','Versi dell’attrito statico')

def point(f,k):
    a=k+2;b=k+4
    if f==0:
        return N(f'Un anello è tirato con $ {5*a}\\,\\mathrm N$ a destra e $ {2*a}\\,\\mathrm N$ a sinistra. Quale modulo deve avere una terza forza orizzontale per l’equilibrio?',f'{5*a}-{2*a}',[7*a,2*a,0],r'\mathrm N','In equilibrio la somma delle componenti orizzontali è nulla.',f'Le prime due forze hanno risultante $ {5*a}-{2*a}={3*a}\\,\\mathrm N$ a destra.','La terza forza deve quindi valere lo stesso modulo e puntare a sinistra.','condizioni','Equilibri su una retta')
    if f==1:
        return T(f'Due forze su un punto hanno somma $({3*a};{4*a})\\,\\mathrm N$. Quale forza aggiuntiva le equilibra?',f'$(-{3*a};-{4*a})\\,\\mathrm N$',[f'$({3*a};{4*a})\\,\\mathrm N$',f'$(-{3*a};{4*a})\\,\\mathrm N$',f'$({4*a};-{3*a})\\,\\mathrm N$'],'L’equilibrante è l’opposto della risultante.',f'Le componenti sono $(-{3*a};-{4*a})\\,\\mathrm N$.','Così entrambe le somme delle componenti sono nulle.','componenti','Equilibranti nel piano')
    if f==2:
        return N(f'Un oggetto di massa $ {a}\\,\\mathrm{{kg}}$ è appeso fermo a una corda verticale ideale. Con $g=10\\,\\mathrm{{N/kg}}$, qual è la tensione?',f'{a}*10',[a,F(a,10),20*a],r'\mathrm N','Sul corpo agiscono peso verso il basso e tensione verso l’alto.',f'Da $T-mg=0$ segue $T={10*a}\\,\\mathrm N$.','La corda sostiene l’intero peso perché non ci sono altre forze verticali.','corde','Corpi sospesi a una corda')
    if f==3:
        return N(f'Un carico di peso $ {12*a}\\,\\mathrm N$ è sostenuto da due corde verticali che portano lo stesso carico. Quanto vale la tensione di ciascuna?',f'{12*a}/2',[12*a,24*a,3*a],r'\mathrm N','Le due tensioni uguali devono sommare il peso.',f'Quindi $2T={12*a}$ e $T={6*a}\\,\\mathrm N$.','L’uguaglianza dei carichi è un’ipotesi del problema.','corde','Ripartizioni simmetriche del peso')
    if f==4:
        return N(f'Un carico di peso $ {10*a}\\,\\mathrm N$ è sostenuto da due corde verticali. La prima ha tensione $ {3*a}\\,\\mathrm N$. Quanto vale la seconda?',f'{10*a}-{3*a}',[13*a,10*a,3*a],r'\mathrm N','La somma delle tensioni deve uguagliare il peso.',f'Segue $T_2={10*a}-{3*a}={7*a}\\,\\mathrm N$.','Le due corde non sono obbligate a portare carichi uguali.','corde','Ripartizioni asimmetriche del peso')
    if f==5:
        return N(f'Un corpo di massa $ {a}\\,\\mathrm{{kg}}$ è appeso fermo a una molla con $k={100*a}\\,\\mathrm{{N/m}}$. Con $g=10\\,\\mathrm{{N/kg}}$, qual è l’allungamento?',f'{a}*10/{100*a}',[1,F(1,100),10],r'\mathrm m','All’equilibrio la forza elastica uguaglia il peso.',f'Da $kx=mg$ segue $x=\\dfrac{{{10*a}}}{{{100*a}}}=0{{,}}1\\,\\mathrm m$.','L’allungamento si misura rispetto alla lunghezza naturale.','molla','Molle verticali in equilibrio')
    if f==6:
        return N(f'Un corpo ha peso $ {5*a}\\,\\mathrm N$ su un piano inclinato liscio. Il rapporto altezza/lunghezza del piano vale tre quinti. Qual è la componente del peso lungo il piano?',f'{5*a}*3/5',[4*a,5*a,8*a],r'\mathrm N','La componente parallela è il peso per il rapporto altezza/lunghezza del piano.',f'Quindi $P_\\parallel={5*a}\\cdot\\dfrac35={3*a}\\,\\mathrm N$.','Questa componente punta verso il basso lungo il piano.','piano','Componenti sui piani inclinati')
    if f==7:
        return N(f'Un corpo ha peso $ {5*a}\\,\\mathrm N$ e componente parallela al piano liscio $ {3*a}\\,\\mathrm N$. Senza altre forze perpendicolari, quanto vale la normale?',str(4*a),[3*a,5*a,2*a],r'\mathrm N','La normale equilibra la componente perpendicolare del peso.',f'Per Pitagora $N=\\sqrt{{({5*a})^2-({3*a})^2}}={4*a}\\,\\mathrm N$.','La normale è minore del peso perché il piano è inclinato.','piano','Normali sui piani inclinati')
    if f==8:
        return N(f'Un blocco su un piano inclinato liscio ha componente del peso lungo il piano $ {3*a}\\,\\mathrm N$. Una corda parallela al piano lo mantiene fermo. Quale tensione occorre?',str(3*a),[5*a,4*a,0],r'\mathrm N','Lungo il piano agiscono la componente del peso e la tensione opposta.',f'Da $T-P_\\parallel=0$ segue $T={3*a}\\,\\mathrm N$.','La normale non contribuisce lungo il piano perché è perpendicolare.','piano','Corde parallele a piani lisci')
    if f==9:
        return N(f'Un blocco fermo su un piano inclinato ha componente parallela del peso $ {3*a}\\,\\mathrm N$. Il massimo attrito statico vale $ {4*a}\\,\\mathrm N$. Senza altre forze parallele, qual è l’attrito effettivo?',str(3*a),[4*a,a,0],r'\mathrm N','La quiete richiede un attrito che equilibri la componente parallela.',f'Poiché $ {3*a}<{4*a}$, basta $f_s={3*a}\\,\\mathrm N$.','L’attrito è diretto verso l’alto lungo il piano.','attrito-equilibrio','Attrito sui piani inclinati')
    if f==10:
        return T(f'Su un piano inclinato la componente parallela del peso è $ {5*a}\\,\\mathrm N$ e il massimo attrito statico è $ {3*a}\\,\\mathrm N$. Senza altre forze il blocco può restare fermo?','No, il massimo attrito statico è insufficiente',['Sì, perché l’attrito assume qualunque valore necessario','Sì, perché la normale annulla sempre tutto il peso','Sì, perché il massimo attrito è diverso da zero'],'La quiete richiede un attrito pari alla componente parallela.',f'Il valore necessario $ {5*a}\\,\\mathrm N$ supera il limite $ {3*a}\\,\\mathrm N$.','Il modello non ammette quindi un equilibrio statico.','attrito-equilibrio','Possibilità di equilibrio con attrito')
    if f==11:
        return N(f'Un blocco deve restare fermo sul piano inclinato senza altre forze. Le componenti del peso sono $ {3*a}\\,\\mathrm N$ parallela e $ {4*a}\\,\\mathrm N$ perpendicolare. Qual è il coefficiente statico minimo?',f'{3*a}/{4*a}',[F(4,3),F(3,7),F(1,4)],'','Alla soglia l’attrito massimo uguaglia la componente parallela.',f'Quindi $\\mu_{{min}}=\\dfrac{{{3*a}}}{{{4*a}}}=0{{,}}75$.','Un coefficiente maggiore ammette ancora la quiete, uno minore non basta.','attrito-equilibrio','Coefficienti minimi per la quiete')
    if f==12:
        return N(f'Due corde simmetriche sostengono un punto di peso $ {8*a}\\,\\mathrm N$. La componente verticale di ogni tensione è i quattro quinti del suo modulo. Quanto vale la tensione di una corda?',f'{8*a}*5/8',[4*a,8*a,10*a],r'\mathrm N','Le componenti orizzontali si annullano per simmetria e le verticali sommano il peso.',f'Da $2\\cdot\\dfrac45T={8*a}$ segue $T={5*a}\\,\\mathrm N$.','Ogni tensione supera metà del peso perché la corda è inclinata.','corde-inclinate','Corde inclinate simmetriche')
    if f==13:
        return N(f'Un punto è tirato con $ {3*a}\\,\\mathrm N$ a destra e $ {4*a}\\,\\mathrm N$ verso l’alto. Qual è il modulo dell’equilibrante?',str(5*a),[7*a,a,12*a*a],r'\mathrm N','L’equilibrante ha modulo uguale alla risultante e verso opposto.',f'Il modulo vale $F=\\sqrt{{({3*a})^2+({4*a})^2}}={5*a}\\,\\mathrm N$.','La forza richiesta punta verso sinistra e verso il basso.','componenti','Moduli delle equilibranti')
    if f==14:
        return N(f'Un blocco di peso $ {10*a}\\,\\mathrm N$ è premuto contro una parete verticale da una spinta orizzontale. Con coefficiente statico $0{{,}}5$, quale spinta minima lo tiene fermo?',f'{10*a}/(1/2)',[5*a,10*a,40*a],r'\mathrm N','La normale uguaglia la spinta e l’attrito verticale sostiene il peso.',f'Alla soglia $0{{,}}5F={10*a}$, quindi $F={20*a}\\,\\mathrm N$.','L’attrito è verso l’alto mentre la normale è orizzontale.','parete','Equilibri contro una parete')
    if f==15:
        return N(f'Un oggetto di peso $ {10*a}\\,\\mathrm N$ poggia su un piano e riceve una trazione verticale verso l’alto $ {4*a}\\,\\mathrm N$. È fermo. Qual è la normale?',f'{10*a}-{4*a}',[14*a,10*a,4*a],r'\mathrm N','Normale e trazione devono sommare il peso.',f'Quindi $N={10*a}-{4*a}={6*a}\\,\\mathrm N$.','Il risultato positivo è coerente con il contatto del corpo con il piano.','contatto','Appoggi e corde nello stesso equilibrio')
    if f==16:
        return N(f'Su un punto agiscono due forze orizzontali $ {a}$ e $ {b}\\,\\mathrm N$ entrambe a destra. Una molla di costante $100\\,\\mathrm{{N/m}}$ lo equilibra. Quale allungamento occorre?',f'({a}+{b})/100',[a+b,F(b-a,100),100*(a+b)],r'\mathrm m','La forza elastica bilancia la somma delle due forze concordi.',f'Da $100x={a}+{b}$ si ottiene $x={tex(F(a+b,100))}\\,\\mathrm m$.','La molla deve tirare verso sinistra.','molla','Equilibri orizzontali con molle e più forze')
    return T(f'Un punto fermo ha componenti totali $\\Sigma F_x=0$ e $\\Sigma F_y={a}\\,\\mathrm N$. Le condizioni di equilibrio sono soddisfatte?','No, la risultante verticale non è nulla',['Sì, basta che una componente sia nulla','Sì, se le forze sono almeno tre','Sì, se la massa è sufficientemente grande'],'Nel piano devono annullarsi entrambe le componenti della risultante.',f'Qui $\\Sigma F_y={a}\\,\\mathrm N$ è diverso da zero.','La sola condizione orizzontale non garantisce l’equilibrio.','condizioni','Verifiche delle condizioni nel piano')

def rigid(f,k):
    a=k+2;b=k+4
    if f==0:
        return N(f'Una forza di $ {10*a}\\,\\mathrm N$ agisce con braccio perpendicolare $0{{,}}2\\,\\mathrm m$ rispetto a un perno. Qual è il modulo del momento?',f'{10*a}/5',[50*a,10*a,F(a,5)],r'\mathrm{N\,m}','Il momento vale forza per braccio.',f'Quindi $M={10*a}\\cdot0{{,}}2={2*a}\\,\\mathrm{{N\\,m}}$.','Il braccio è la distanza perpendicolare dalla linea d’azione al perno.','momento','Momenti di una forza')
    if f==1:
        return N(f'Una forza genera un momento di modulo $ {2*a}\\,\\mathrm{{N\\,m}}$ con braccio $0{{,}}2\\,\\mathrm m$. Quanto vale la forza?',f'{2*a}*5',[F(2*a,5),2*a,100*a],r'\mathrm N','Si risolve M=Fb rispetto alla forza.',f'Quindi $F=\\dfrac{{{2*a}}}{{0{{,}}2}}={10*a}\\,\\mathrm N$.','Un braccio minore richiede forza maggiore per lo stesso momento.','momento','Forze da momenti assegnati')
    if f==2:
        return N(f'Una forza di $ {10*a}\\,\\mathrm N$ genera un momento di modulo $ {3*a}\\,\\mathrm{{N\\,m}}$. Qual è il braccio?',f'{3*a}/{10*a}',[F(10,3),3,30],r'\mathrm m','Il braccio è il momento diviso per la forza.',f'Pertanto $b=\\dfrac{{{3*a}}}{{{10*a}}}=0{{,}}3\\,\\mathrm m$.','La distanza cercata è perpendicolare alla linea d’azione.','momento','Bracci da forze e momenti')
    if f==3:
        return N(f'Una forza di $ {5*a}\\,\\mathrm N$ ha linea d’azione passante per il perno. Quanto vale il momento rispetto al perno?',str(0),[5*a,-5*a,a],r'\mathrm{N\,m}','Se la linea d’azione passa per il perno, il braccio è nullo.',r'Dunque $M=F\cdot0=0$.','Una forza non nulla può quindi avere momento nullo rispetto a un particolare punto.','momento','Linee d’azione attraverso il perno')
    if f==4:
        return N(f'Due momenti valgono $ {5*a}\\,\\mathrm{{N\\,m}}$ antiorario e $ {2*a}\\,\\mathrm{{N\\,m}}$ orario. Con segno positivo antiorario, qual è il momento totale?',f'{5*a}-{2*a}',[7*a,-3*a,0],r'\mathrm{N\,m}','I momenti si sommano con il segno del verso di rotazione.',f'Si ha $M_{{tot}}={5*a}-{2*a}={3*a}\\,\\mathrm{{N\\,m}}$.','Il segno positivo indica una tendenza antioraria.','segni','Somme algebriche di momenti')
    if f==5:
        return N(f'Una leva ideale equilibra $ {10*a}\\,\\mathrm N$ con braccio $0{{,}}2\\,\\mathrm m$ mediante una forza sul lato opposto con braccio $0{{,}}5\\,\\mathrm m$. Quanto vale questa forza?',f'{10*a}*2/5',[10*a,25*a,2*a],r'\mathrm N','L’equilibrio richiede momenti uguali e opposti.',f'Quindi $F\\cdot0{{,}}5={10*a}\\cdot0{{,}}2$ e $F={4*a}\\,\\mathrm N$.','Il braccio maggiore permette di usare una forza minore.','leve','Leve con forza incognita')
    if f==6:
        return N(f'Una leva ideale equilibra $ {6*a}\\,\\mathrm N$ con braccio perpendicolare $0{{,}}2\\,\\mathrm m$ dal perno mediante $ {3*a}\\,\\mathrm N$ sul lato opposto. Quale braccio ha la seconda forza?',f'{6*a}*2/(10*{3*a})',[F(1,10),F(1,5),2],r'\mathrm m','Si uguagliano i moduli dei momenti.',f'Da $ {3*a}b={6*a}\\cdot0{{,}}2$ segue $b=0{{,}}4\\,\\mathrm m$.','Dimezzare la forza richiede un braccio doppio.','leve','Leve con braccio incognito')
    if f==7:
        return N(f'Due forze parallele opposte di $ {20*a}\\,\\mathrm N$ ciascuna hanno linee d’azione distanti $0{{,}}1\\,\\mathrm m$. Qual è il momento della coppia in modulo?',f'{20*a}/10',[0,20*a,4*a],r'\mathrm{N\,m}','Il momento della coppia è una forza per la distanza fra le linee d’azione.',f'Quindi $M_c={20*a}\\cdot0{{,}}1={2*a}\\,\\mathrm{{N\\,m}}$.','La risultante è nulla, mentre il momento della coppia può essere non nullo.','coppie','Coppie di forze')
    if f==8:
        return T(f'Una coppia di forze di $ {10*a}\\,\\mathrm N$ a distanza $0{{,}}2\\,\\mathrm m$ agisce da sola su un corpo rigido. Quale descrizione è corretta?','Risultante nulla, momento totale diverso da zero',['Equilibrio perché la risultante è nulla','Momento nullo perché le forze sono opposte','Risultante uguale alla somma dei moduli'],'Le due forze uguali e opposte annullano la risultante.',f'Il loro momento vale $ {10*a}\\cdot0{{,}}2={2*a}\\,\\mathrm{{N\\,m}}$.','Per l’equilibrio rigido servono sia risultante nulla sia momento nullo.','equilibrio-rigido','Risultante nulla senza equilibrio')
    if f==9:
        return N(f'Una trave omogenea orizzontale, di peso $ {20*a}\\,\\mathrm N$, è appoggiata ai due estremi. Senza altri carichi, quanto vale ciascuna reazione verticale?',f'{20*a}/2',[20*a,40*a,5*a],r'\mathrm N','Il peso della trave omogenea agisce nel centro.',f'Per simmetria le reazioni sono uguali, quindi $R=P/2={10*a}\\,\\mathrm N$.','La loro somma equilibra il peso.','travi','Travi omogenee con due appoggi')
    if f==10:
        return N(f'Una trave senza peso lunga $3\\,\\mathrm m$ è appoggiata agli estremi A e B. Un carico $ {12*a}\\,\\mathrm N$ si trova a $1\\,\\mathrm m$ da A. Qual è la reazione in B?',f'{12*a}/3',[12*a,8*a,36*a],r'\mathrm N','Si annulla il momento totale rispetto ad A.',f'Da $3R_B={12*a}\\cdot1$ segue $R_B={4*a}\\,\\mathrm N$.','Il sostegno più lontano dal carico porta la parte minore del peso.','travi','Reazioni con carichi fuori dal centro')
    if f==11:
        return N(f'Una trave omogenea di peso $ {4*a}\\,\\mathrm N$, appoggiata agli estremi, porta al centro un carico di $ {8*a}\\,\\mathrm N$. Quanto vale ogni reazione?',f'({8*a}+{4*a})/2',[4*a,12*a,8*a],r'\mathrm N','Il carico e il peso proprio hanno linea d’azione centrale.',f'Per simmetria $R=\\dfrac{{{8*a}+{4*a}}}2={6*a}\\,\\mathrm N$.','Il peso proprio va incluso nel bilancio verticale.','travi','Peso proprio e carico centrale')
    if f==12:
        return N(f'Due masse $ {a}$ e $ {2*a}\\,\\mathrm{{kg}}$ sono fissate su un’asta senza massa in $x=0$ e $x=3\\,\\mathrm m$. Dove si trova il baricentro?',f'{2*a}*3/({a}+{2*a})',[F(3,2),1,3],r'\mathrm m','Il baricentro è la media delle posizioni pesata con le masse.',f'Si trova $x_G=\\dfrac{{{a}\\cdot0+{2*a}\\cdot3}}{{{a}+{2*a}}}=2\\,\\mathrm m$.','Il baricentro è più vicino alla massa maggiore.','baricentro','Baricentri di due masse')
    if f==13:
        return N(f'Un’asta omogenea lunga $ {2*a}\\,\\mathrm{{cm}}$ ha un’estremità nell’origine. A quale distanza si trova il baricentro?',f'{2*a}/2',[2*a,F(a,2),0],r'\mathrm{cm}','In un’asta omogenea la massa è distribuita uniformemente.',f'Per simmetria $x_G={2*a}/2={a}\\,\\mathrm{{cm}}$.','L’omogeneità giustifica l’uso del punto medio.','baricentro','Baricentri di aste omogenee')
    if f==14:
        return N(f'Un blocco con peso $ {10*a}\\,\\mathrm N$ ha base larga $0{{,}}4\\,\\mathrm m$ e baricentro sulla verticale centrale. Una spinta orizzontale agisce a $0{{,}}5\\,\\mathrm m$ da terra. Con attrito sufficiente a evitare lo scorrimento, quale spinta provoca la soglia di ribaltamento?',f'{10*a}*2/5',[10*a,5*a,2*a],r'\mathrm N','Alla soglia si considerano i momenti rispetto allo spigolo verso cui si ribalta il blocco.',f'Il braccio del peso è $0{{,}}2\\,\\mathrm m$, quindi $F\\cdot0{{,}}5={10*a}\\cdot0{{,}}2$ e $F={4*a}\\,\\mathrm N$.','L’ipotesi sull’attrito permette di studiare il ribaltamento prima dello scorrimento.','stabilita','Soglie di ribaltamento')
    if f==15:
        return T(f'Il baricentro di un oggetto appoggiato si sposta di $ {a}\\,\\mathrm{{cm}}$ finché la sua verticale esce dalla base. Senza altri vincoli, quale effetto produce il peso?','Un momento che tende a ribaltare l’oggetto',['Un momento sempre nullo','Una forza orizzontale che annulla il peso','Una normale diretta verso il basso'],'La linea d’azione del peso non attraversa più la zona di appoggio.',f'Dopo lo spostamento di $ {a}\\,\\mathrm{{cm}}$ compare un braccio rispetto allo spigolo estremo.','Senza altri vincoli il peso tende a far ruotare l’oggetto oltre l’appoggio.','stabilita','Verticali del baricentro')
    if f==16:
        return N(f'Una chiave lunga $0{{,}}5\\,\\mathrm m$ riceve all’estremità libera una forza di $ {10*a}\\,\\mathrm N$. La componente perpendicolare è i tre quinti della forza. Qual è il momento rispetto al bullone?',f'{10*a}*3/10',[5*a,6*a,10*a],r'\mathrm{N\,m}','Solo la componente perpendicolare contribuisce al momento.',f'Quindi $M=0{{,}}5\\cdot\\dfrac35\\cdot{10*a}={3*a}\\,\\mathrm{{N\\,m}}$.','La componente lungo la chiave ha linea d’azione passante per il bullone.','momento','Forze non perpendicolari a una leva')
    return N(f'Una leva ha braccio motore $ {a}\\,\\mathrm m$ e braccio resistente $0{{,}}5\\,\\mathrm m$. Nell’equilibrio ideale, quanto vale il rapporto forza resistente/forza motrice?',f'{a}*2',[F(1,2*a),a,F(a,2)],'','L’equilibrio uguaglia i prodotti delle forze per i rispettivi bracci.',f'Quindi $\\dfrac{{F_r}}{{F_m}}=\\dfrac{{{a}}}{{0{{,}}5}}={2*a}$.','Il rapporto è adimensionale e misura il vantaggio meccanico ideale.','leve','Vantaggio meccanico delle leve')

def pressure(f,k):
    a=k+2;b=k+4
    if f==0:
        return N(f'Una forza perpendicolare di ${20*a}\\,\\mathrm N$ è distribuita uniformemente su $0{{,}}02\\,\\mathrm m^2$. Qual è la pressione?',f'{20*a}/(2/100)',[a,F(2*a,5),10*a],r'\mathrm{Pa}','La pressione uniforme è la forza perpendicolare divisa per l’area.',f'Quindi $p=\\dfrac{{{20*a}}}{{0{{,}}02}}={1000*a}\\,\\mathrm{{Pa}}$.','Una pressione si riferisce alla forza distribuita su una superficie.','pressione','Pressioni da forze e superfici')
    if f==1:
        return N(f'Una pressione uniforme di ${1000*a}\\,\\mathrm{{Pa}}$ agisce su $0{{,}}03\\,\\mathrm m^2$. Quale forza perpendicolare produce?',f'{1000*a}*3/100',[30000*a,1000*a,3*a],r'\mathrm N','La forza è pressione per area.',f'Si ottiene $F={1000*a}\\cdot0{{,}}03={30*a}\\,\\mathrm N$.','Il pascal equivale a un newton per metro quadrato.','pressione','Forze da pressioni uniformi')
    if f==2:
        return N(f'Una forza di ${40*a}\\,\\mathrm N$ produce pressione uniforme ${2000*a}\\,\\mathrm{{Pa}}$. Su quale area agisce?',f'{40*a}/{2000*a}',[50,F(1,5),F(1,500)],r'\mathrm m^2','Si ricava l’area dividendo la forza per la pressione.',f'Quindi $A=\\dfrac{{{40*a}}}{{{2000*a}}}=0{{,}}02\\,\\mathrm m^2$.','L’area cercata è quella effettiva su cui si distribuisce la forza.','pressione','Superfici da forze e pressioni')
    if f==3:
        return N(f'Una pressione vale ${a}\\,\\mathrm{{N/cm^2}}$. Quanto vale in pascal?',f'{a}*10000',[100*a,F(a,10000),a],r'\mathrm{Pa}','Un centimetro quadrato vale un decimillesimo di metro quadrato.',f'Perciò $p={a}\\cdot10^4={10000*a}\\,\\mathrm{{Pa}}$.','L’area è al denominatore: il fattore di conversione aumenta il valore numerico della pressione.','unita','Pressioni con aree in centimetri quadrati')
    if f==4:
        return N(f'In acqua di densità $1000\\,\\mathrm{{kg/m^3}}$, a profondità ${a}\\,\\mathrm m$, quanto vale la pressione relativa alla superficie? Usare $g=10\\,\\mathrm{{N/kg}}$.',f'1000*10*{a}',[1000*a,100000+10000*a,F(a,10000)],r'\mathrm{Pa}','La legge di Stevino fornisce l’aumento di pressione rho g h.',f'Quindi $p_{{rel}}=1000\\cdot10\\cdot{a}={10000*a}\\,\\mathrm{{Pa}}$.','La pressione della superficie non va aggiunta quando si chiede la pressione relativa.','stevino','Pressioni relative in un liquido')
    if f==5:
        return N(f'Un serbatoio d’acqua è aperto a pressione atmosferica $100000\\,\\mathrm{{Pa}}$. A profondità ${a}\\,\\mathrm m$, quale pressione assoluta si ha? Usare $\\rho=1000\\,\\mathrm{{kg/m^3}}$ e $g=10\\,\\mathrm{{N/kg}}$.',f'100000+1000*10*{a}',[10000*a,100000-10000*a,100000+1000*a,100000+20000*a],r'\mathrm{Pa}','La pressione assoluta somma quella superficiale e il contributo idrostatico.',f'Quindi $p=100000+1000\\cdot10\\cdot{a}={100000+10000*a}\\,\\mathrm{{Pa}}$.','La pressione atmosferica agisce anche sulla superficie libera dell’acqua.','assoluta','Pressioni assolute')
    if f==6:
        return N(f'In un liquido con $\\rho=800\\,\\mathrm{{kg/m^3}}$ si misura un aumento di pressione ${8000*a}\\,\\mathrm{{Pa}}$ rispetto alla superficie. Con $g=10\\,\\mathrm{{N/kg}}$, qual è la profondità?',f'{8000*a}/(800*10)',[10*a,800*a,F(a,10)],r'\mathrm m','La profondità si ottiene isolando h nella legge di Stevino.',f'Si calcola $h=\\dfrac{{{8000*a}}}{{800\\cdot10}}={a}\\,\\mathrm m$.','L’aumento di pressione deve essere riferito alla stessa superficie da cui si misura h.','stevino','Profondità da differenze di pressione')
    if f==7:
        return N(f'Fra la superficie e un punto a ${a}\\,\\mathrm m$ la pressione cresce di ${9000*a}\\,\\mathrm{{Pa}}$. Con $g=10\\,\\mathrm{{N/kg}}$, qual è la densità costante del liquido?',f'{9000*a}/(10*{a})',[90,9000,F(1,900)],r'\mathrm{kg/m^3}','Dalla legge di Stevino si ricava rho dividendo per gh.',f'Quindi $\\rho=\\dfrac{{{9000*a}}}{{10\\cdot{a}}}=900\\,\\mathrm{{kg/m^3}}$.','La misura riguarda una differenza di pressione e non richiede il valore atmosferico.','stevino','Densità da misure idrostatiche')
    if f==8:
        return N(f'Due punti nella stessa acqua sono alle profondità ${a}$ e ${a+2}\\,\\mathrm m$. Di quanto è maggiore la pressione nel secondo? Usare $\\rho=1000\\,\\mathrm{{kg/m^3}}$ e $g=10\\,\\mathrm{{N/kg}}$.','1000*10*2',[10000*a,10000*(a+2),1000,30000],r'\mathrm{Pa}','Sottraendo le due pressioni si elimina la pressione superficiale.',r'Si trova $\Delta p=\rho g\Delta h=1000\cdot10\cdot2=20000\,\mathrm{Pa}$.','La differenza dipende solo dal dislivello fra i punti.','stevino','Differenze di pressione fra due quote')
    if f==9:
        return T(f'Due recipienti di forme diverse contengono lo stesso liquido fermo e sono aperti alla stessa atmosfera. Due punti sono entrambi a ${a}\\,\\mathrm m$ dalla rispettiva superficie. Come si confrontano le pressioni?','Sono uguali',['È maggiore nel recipiente più largo','È maggiore nel recipiente di volume totale maggiore','La forma basta per decidere quale è maggiore'],'La legge p=p0+rho gh dipende dalla pressione superficiale, dalla densità e dalla profondità.',f'Questi dati sono uguali per i due punti a ${a}\\,\\mathrm m$.','La forma del recipiente non compare nella legge idrostatica.','stevino','Pressione e forma del recipiente')
    if f==10:
        return N(f'In una pressa idraulica ideale i pistoni sono alla stessa quota. Sul pistone piccolo di area $2\\,\\mathrm{{cm}}^2$ agisce una forza aggiuntiva di ${a}\\,\\mathrm N$. L’altro pistone ha area $20\\,\\mathrm{{cm}}^2$. Quale forza aggiuntiva esercita il liquido sul pistone grande?',f'{a}*20/2',[a,F(a,10),20*a],r'\mathrm N','Il principio di Pascal trasmette la stessa variazione di pressione.',f'Da $F_1/A_1=F_2/A_2$ segue $F_2={a}\\cdot\\dfrac{{20}}2={10*a}\\,\\mathrm N$.','L’uguaglianza delle quote evita un ulteriore dislivello idrostatico.','pascal','Presse idrauliche')
    if f==11:
        return N(f'In una pressa ideale alla stessa quota, il pistone grande ha area quattro volte quella piccola. Per esercitare una forza aggiuntiva di ${12*a}\\,\\mathrm N$ sul grande, quale forza aggiuntiva serve sul piccolo?',f'{12*a}/4',[12*a,48*a,6*a],r'\mathrm N','La forza varia nella stessa proporzione dell’area dei pistoni.',f'Quindi $F_1=\\dfrac{{{12*a}}}4={3*a}\\,\\mathrm N$.','Il modello trascura attriti e differenze di quota.','pascal','Problemi inversi della pressa')
    if f==12:
        return N(f'In una pressa ideale i pistoni circolari hanno raggi ${a}$ e ${2*a}\\,\\mathrm{{cm}}$. A quote uguali, quale rapporto forza grande/forza piccola corrisponde alla stessa variazione di pressione?','4',[2,F(1,4),8],'','L’area di un cerchio è proporzionale al quadrato del raggio.',r'Quindi $\dfrac{F_2}{F_1}=\dfrac{A_2}{A_1}=\left(\dfrac{r_2}{r_1}\right)^2=4$.','Raddoppiare il raggio quadruplica l’area, non la raddoppia.','pascal','Pistoni circolari e rapporti di area')
    if f==13:
        return N(f'Una parete piana di area $0{{,}}02\\,\\mathrm m^2$ separa due gas con pressioni uniformi ${110000+1000*a}$ e $110000\\,\\mathrm{{Pa}}$. Qual è il modulo della forza risultante dovuta ai gas?',f'{1000*a}*2/100',[2200+20*a,1000*a,40*a],r'\mathrm N','Le due pressioni esercitano forze opposte sulla stessa area.',f'La forza netta vale $F=\\Delta p A={1000*a}\\cdot0{{,}}02={20*a}\\,\\mathrm N$.','La pressione comune ai due lati si cancella nella risultante.','assoluta','Forze da differenze di pressione')
    if f==14:
        return N(f'Un recipiente contiene uno strato d’olio spesso ${a}\\,\\mathrm m$ sopra $1\\,\\mathrm m$ d’acqua. Con densità rispettive $800$ e $1000\\,\\mathrm{{kg/m^3}}$ e $g=10\\,\\mathrm{{N/kg}}$, qual è l’aumento di pressione dalla superficie al fondo?',f'800*10*{a}+1000*10',[8000*a,10000*(a+1),18000*a],r'\mathrm{Pa}','Ogni strato contribuisce con rho g h calcolato per la propria densità.',f'Quindi $\\Delta p=800\\cdot10\\cdot{a}+1000\\cdot10\\cdot1={8000*a+10000}\\,\\mathrm{{Pa}}$.','I contributi si sommano perché si percorrono in successione i due strati verso il basso.','strati','Liquidi sovrapposti')
    if f==15:
        return N(f'Un manometro ad acqua ha dislivello verticale fra le superfici di ${a}\\,\\mathrm{{cm}}$. Con $\\rho=1000\\,\\mathrm{{kg/m^3}}$ e $g=10\\,\\mathrm{{N/kg}}$, qual è il modulo della differenza di pressione?',f'1000*10*{a}/100',[10000*a,a,10*a],r'\mathrm{Pa}','La differenza di pressione è rho g per il dislivello verticale.',f'Convertendo i centimetri si trova $\\Delta p=1000\\cdot10\\cdot{tex(F(a,100))}={100*a}\\,\\mathrm{{Pa}}$.','Il dislivello è quello fra le due superfici, non l’altezza di una sola colonna.','manometri','Manometri a liquido')
    if f==16:
        return N(f'Un barometro ideale contiene un liquido di densità $10000\\,\\mathrm{{kg/m^3}}$ e ha vuoto sopra la colonna. Per pressione esterna ${10000*a}\\,\\mathrm{{Pa}}$ e $g=10\\,\\mathrm{{N/kg}}$, quale altezza assume la colonna?',f'{10000*a}/(10000*10)',[a,10*a,F(a,100)],r'\mathrm m','La pressione esterna equilibra la colonna quando p=rho gh.',f'Quindi $h=\\dfrac{{{10000*a}}}{{10000\\cdot10}}={tex(F(a,10))}\\,\\mathrm m$.','Il vuoto superiore permette di porre nulla la pressione alla sommità.','manometri','Colonne barometriche ideali')
    return N(f'Due liquidi immiscibili in un tubo a U aperto hanno densità $800$ e $1000\\,\\mathrm{{kg/m^3}}$. La colonna del primo sopra il livello dell’interfaccia è ${5*a}\\,\\mathrm{{cm}}$. Quanto è alta la colonna del secondo sopra lo stesso livello?',f'800*{5*a}/1000',[5*a,F(25*a,4),a],r'\mathrm{cm}','Allo stesso livello del liquido comunicante le pressioni sono uguali.',f'La pressione atmosferica si cancella e $800\\cdot{5*a}=1000h_2$, da cui $h_2={4*a}\\,\\mathrm{{cm}}$.','Il liquido più denso richiede una colonna più bassa per la stessa pressione.','vasi','Colonne di liquidi diversi')

def buoyancy(f,k):
    a=k+2;b=k+4
    if f==0:
        return N(f'Un corpo sposta ${a}\\,\\mathrm L$ d’acqua. Con $\\rho=1000\\,\\mathrm{{kg/m^3}}$ e $g=10\\,\\mathrm{{N/kg}}$, quanto vale la spinta di Archimede?',f'1000*10*{a}/1000',[a,1000*a,10000*a],r'\mathrm N','La spinta uguaglia il peso del fluido spostato.',f'Poiché $V_i={tex(F(a,1000))}\\,\\mathrm m^3$, si ha $F_A=1000\\cdot10\\cdot{tex(F(a,1000))}={10*a}\\,\\mathrm N$.','Conta il volume immerso, che coincide con il volume di liquido spostato.','archimede','Spinte da volumi spostati')
    if f==1:
        return N(f'Un corpo immerso riceve una spinta di ${8*a}\\,\\mathrm N$ in olio con densità $800\\,\\mathrm{{kg/m^3}}$. Con $g=10\\,\\mathrm{{N/kg}}$, qual è il volume immerso?',f'{8*a}/(800*10)',[a,F(a,100),F(a,10000)],r'\mathrm m^3','Si risolve il principio di Archimede rispetto al volume immerso.',f'Si trova $V_i=\\dfrac{{{8*a}}}{{800\\cdot10}}={tex(F(a,1000))}\\,\\mathrm m^3$.','Il volume totale può essere maggiore se il corpo è solo parzialmente immerso.','inverse','Volumi immersi da spinte')
    if f==2:
        return N(f'Un corpo sposta ${a}\\,\\mathrm L$ di liquido e riceve spinta ${9*a}\\,\\mathrm N$. Con $g=10\\,\\mathrm{{N/kg}}$, qual è la densità del liquido?',f'{9*a}/(10*{a}/1000)',[90,9000,F(1,900)],r'\mathrm{kg/m^3}','La densità del fluido si ricava da F_A diviso gV immerso.',f'Quindi $\\rho_f=\\dfrac{{{9*a}}}{{10\\cdot{tex(F(a,1000))}}}=900\\,\\mathrm{{kg/m^3}}$.','Si convertono i litri in metri cubi prima di usare le unità SI.','inverse','Densità del fluido da spinte')
    if f==3:
        return N(f'Un corpo pesa ${30*a}\\,\\mathrm N$ ed è sospeso fermo a un dinamometro. Immerso completamente riceve spinta ${10*a}\\,\\mathrm N$. Quale forza legge il dinamometro?',f'{30*a}-{10*a}',[40*a,30*a,10*a],r'\mathrm N','Peso, spinta e tensione devono equilibrarsi.',f'Da $T+F_A=P$ segue $T={30*a}-{10*a}={20*a}\\,\\mathrm N$.','La lettura diminuisce perché parte del peso è equilibrata dal liquido.','apparente','Pesi apparenti misurati')
    if f==4:
        return N(f'Un oggetto pesa ${20*a}\\,\\mathrm N$ in aria e il dinamometro legge ${12*a}\\,\\mathrm N$ quando è completamente immerso e fermo. Trascurare la spinta dell’aria. Quanto vale la spinta del liquido?',f'{20*a}-{12*a}',[32*a,12*a,20*a],r'\mathrm N','La perdita apparente di peso è il modulo della spinta.',f'Quindi $F_A=P-T={20*a}-{12*a}={8*a}\\,\\mathrm N$.','Il peso gravitazionale non è cambiato; è cambiata la tensione necessaria a sostenere il corpo.','apparente','Spinte da differenze di lettura')
    if f==5:
        return N(f'Un corpo galleggia liberamente fermo in acqua, senza toccare il fondo, e pesa ${10*a}\\,\\mathrm N$. Quanto vale la spinta di Archimede?',str(10*a),[a,20*a,0],r'\mathrm N','Nel galleggiamento libero la spinta e il peso si equilibrano.',f'La condizione è $F_A=P={10*a}\\,\\mathrm N$.','Il corpo regola il volume immerso fino a raggiungere questa uguaglianza.','galleggiamento','Spinta nel galleggiamento libero')
    if f==6:
        rho=100*a
        return N(f'Un corpo omogeneo di densità ${rho}\\,\\mathrm{{kg/m^3}}$ galleggia in acqua di densità $1000\\,\\mathrm{{kg/m^3}}$. Quale frazione del volume è immersa?',f'{rho}/1000',[F(1000,rho),F(1000-rho,1000),F(rho,10000),1],'','L’equilibrio uguaglia il peso del corpo al peso dell’acqua spostata.',f'Da $\\rho_c Vg=\\rho_f V_i g$ segue $\\dfrac{{V_i}}{{V}}=\\dfrac{{{rho}}}{{1000}}={tex(F(rho,1000))}$.','La frazione è minore di uno perché il corpo è meno denso dell’acqua.','frazione','Frazioni immerse e densità')
    if f==7:
        v=5*a;ans=3*a
        return N(f'Un blocco omogeneo di volume ${v}\\,\\mathrm L$ e densità $600\\,\\mathrm{{kg/m^3}}$ galleggia in acqua di densità $1000\\,\\mathrm{{kg/m^3}}$. Quanti litri sono immersi?',f'{v}*600/1000',[v,2*a,F(25*a,3)],r'\mathrm L','La frazione immersa è il rapporto tra densità del corpo e del liquido.',f'Quindi $V_i={v}\\cdot\\dfrac{{600}}{{1000}}={ans}\\,\\mathrm L$.','La parte restante emerge dalla superficie.','frazione','Volumi immersi di corpi galleggianti')
    if f==8:
        v=5*a
        return N(f'Un blocco di volume totale ${v}\\,\\mathrm L$ galleggia con il $60\\%$ del volume immerso. Quanto volume emerge?',f'{v}*40/100',[3*a,v,F(a,5)],r'\mathrm L','Il volume emerso è il volume totale meno quello immerso.',f'La frazione emersa è $1-0{{,}}6=0{{,}}4$, quindi $V_e={v}\\cdot0{{,}}4={2*a}\\,\\mathrm L$.','La percentuale emersa si riferisce allo stesso volume totale.','frazione','Volumi emersi')
    if f==9:
        v=10*a;mass=4*a;ans=6*a
        return N(f'Un galleggiante rigido e stagno ha volume esterno massimo ${v}\\,\\mathrm L$ e massa ${mass}\\,\\mathrm{{kg}}$. In acqua con densità $1\\,\\mathrm{{kg/L}}$, quale massa aggiuntiva, mantenuta fuori dall’acqua, può sostenere fino alla completa immersione?',f'{v}-{mass}',[v,mass,14*a],r'\mathrm{kg}','Alla completa immersione la massa totale sostenibile uguaglia la massa dell’acqua spostata.',f'Si ha $m_{{tot,max}}={v}\\,\\mathrm{{kg}}$, quindi il carico è ${v}-{mass}={ans}\\,\\mathrm{{kg}}$.','La massa del galleggiante deve essere sottratta dalla capacità totale.','carichi','Portate massime di galleggianti')
    if f==10:
        return N(f'Una piattaforma galleggia in acqua di densità $1000\\,\\mathrm{{kg/m^3}}$. Si aggiunge una massa di ${a}\\,\\mathrm{{kg}}$. Di quanto cresce il volume immerso, finché resta il galleggiamento libero?',f'{a}/1000',[a,F(a,100),1000*a],r'\mathrm m^3','La spinta aggiuntiva deve uguagliare il peso del carico aggiunto.',f'Da $\\rho_f g\\Delta V=\\Delta m g$ segue $\\Delta V=\\dfrac{{{a}}}{{1000}}={tex(F(a,1000))}\\,\\mathrm m^3$.','Il valore di g si semplifica fra i due membri.','carichi','Affondamenti aggiuntivi dovuti ai carichi')
    if f==11:
        return T(f'Una barca di massa totale ${100*a}\\,\\mathrm{{kg}}$ galleggia prima in acqua dolce e poi in acqua salata più densa. A massa invariata, come cambia la spinta?','Resta uguale al peso della barca',['Aumenta perché il liquido è più denso','Diminuisce perché diminuisce il volume immerso','Diventa nulla in acqua salata'],'In entrambi i casi la barca galleggia in equilibrio.',f'La massa totale resta ${100*a}\\,\\mathrm{{kg}}$, quindi il peso è lo stesso nei due casi.','Nel liquido più denso basta un volume immerso minore per produrre la medesima spinta.','confronti','Galleggiamento in liquidi diversi')
    if f==12:
        return T(f'Due corpi impermeabili e non porosi di forme diverse sono completamente immersi nello stesso liquido uniforme, senza contatto con il fondo. Entrambi hanno volume esterno ${a}\\,\\mathrm L$. Come si confrontano le spinte?','Sono uguali',['È maggiore sul corpo più pesante','È maggiore sul corpo più largo qualunque sia la forma','È maggiore sul corpo con densità maggiore'],'La spinta dipende dalla densità del fluido e dal volume immerso.',f'Entrambi spostano ${a}\\,\\mathrm L$ dello stesso liquido.','Forma e massa del corpo non entrano direttamente nel modulo della spinta a volume immerso fissato.','confronti','Forme diverse e volumi uguali')
    if f==13:
        return T(f'Un corpo rigido completamente immerso in acqua incomprimibile viene abbassato di ${a}\\,\\mathrm m$, restando lontano dal fondo. Densità e g sono costanti. Come cambia la spinta?','Resta invariata',['Aumenta nella stessa proporzione della pressione assoluta','Diminuisce perché il peso cresce','Diventa nulla se il corpo non galleggia'],'Il volume del corpo rigido resta uguale e l’immersione è già completa.',r'Nella relazione $F_A=\rho_f gV_i$ nessuno dei tre fattori cambia.','La pressione cresce con la profondità, ma la differenza che produce la spinta resta la stessa.','confronti','Profondità e spinta su corpi rigidi')
    if f==14:
        return N(f'Un corpo completamente immerso ha peso ${6*a}\\,\\mathrm N$ e riceve spinta ${10*a}\\,\\mathrm N$. Una corda fissata al fondo lo tiene fermo. Quale tensione serve?',f'{10*a}-{6*a}',[16*a,6*a,10*a],r'\mathrm N','La corda tira verso il basso e insieme al peso equilibra la spinta.',f'Da $P+T=F_A$ segue $T={10*a}-{6*a}={4*a}\\,\\mathrm N$.','Il corpo tenderebbe a salire se la corda venisse rimossa.','vincoli','Corpi trattenuti al fondo')
    if f==15:
        return N(f'Un corpo immerso completamente provoca la fuoriuscita di ${a}\\,\\mathrm L$ d’acqua da un recipiente inizialmente colmo. Con densità $1\\,\\mathrm{{kg/L}}$, qual è la massa d’acqua fuoriuscita?',f'{a}*1',[10*a,F(a,10),1000*a],r'\mathrm{kg}','Il volume fuoriuscito coincide con il volume di liquido spostato.',f'La massa è $m=\\rho V=1\\cdot{a}={a}\\,\\mathrm{{kg}}$.','Il recipiente deve essere inizialmente colmo perché il volume raccolto misuri tutto quello spostato.','archimede','Liquido spostato e massa fuoriuscita')
    if f==16:
        return N(f'Un solido pesa ${30*a}\\,\\mathrm N$ in aria e appare pesare ${20*a}\\,\\mathrm N$ quando è completamente immerso in acqua. Trascurando la spinta dell’aria, qual è il rapporto densità solido/densità acqua?',f'{30*a}/({30*a}-{20*a})',[F(3,2),F(2,3),F(1,3)],'','Il peso è rho del solido per Vg e la perdita di peso è rho dell’acqua per Vg.',f'Il rapporto vale $\\dfrac{{\\rho_s}}{{\\rho_f}}=\\dfrac{{{30*a}}}{{{30*a}-{20*a}}}=3$.','Volume e g si semplificano perché l’immersione è completa.','inverse','Densità da pesate idrostatiche')
    return T(f'Un corpo omogeneo di volume ${a}\\,\\mathrm L$ ha densità $1200\\,\\mathrm{{kg/m^3}}$ ed è immerso in acqua di densità $1000\\,\\mathrm{{kg/m^3}}$. Senza vincoli, quale confronto vale a completa immersione?','Il peso è maggiore della spinta',['Il peso è minore della spinta','Peso e spinta sono sempre uguali per ogni corpo immerso','La spinta è nulla perché il corpo è più denso'],'A completa immersione peso e spinta hanno lo stesso fattore Vg.',r'Poiché $1200>1000$, si ha $\rho_c Vg>\rho_f Vg$.','Il corpo non può galleggiare liberamente in questo modello.','galleggiamento','Densità e possibilità di galleggiare')

DATA = [
 ('grandezze-e-unita','Grandezze fisiche e unità di misura','Sistema Internazionale, conversioni, notazione scientifica e controllo delle unità.',units),
 ('misure-e-incertezze','Misure, strumenti e incertezze','Letture, misure ripetute, intervalli e propagazione delle incertezze con criteri espliciti.',measures),
 ('proporzionalita-e-grafici','Proporzionalità e grafici','Tabelle, proporzionalità diretta e inversa, relazioni affini e lettura delle scale.',graphs),
 ('densita','Massa, volume e densità','Densità dei materiali, misure per immersione, corpi cavi e miscele.',density),
 ('vettori','Vettori e operazioni nel piano','Componenti, somme, differenze, moduli e forze equilibranti.',vectors),
 ('forze','Forze, peso, elasticità e attrito','Peso e massa, legge di Hooke, reazioni di contatto e attrito statico e dinamico.',forces),
 ('equilibrio-punto','Equilibrio del punto materiale','Risultante nulla, corde, molle, piani inclinati e condizioni per la quiete con attrito.',point),
 ('equilibrio-corpo-rigido','Equilibrio del corpo rigido','Momenti, leve, coppie di forze, reazioni delle travi, baricentri e stabilità.',rigid),
 ('pressione-fluidi','Pressione ed equilibrio dei fluidi','Pressione assoluta e relativa, Stevino, Pascal, vasi comunicanti e manometri.',pressure),
 ('archimede-galleggiamento','Spinta di Archimede e galleggiamento','Volume immerso, peso apparente, densità, carichi sostenibili e corpi vincolati.',buoyancy),
]
SCHEDE = {
'units': [('Lunghezze e prefissi',[0,1,16]),('Superfici e volumi',[2,3,10]),('Litri e misure di capacità',[4,11,3]),('Masse e unità composte',[5,12,15]),('Durate e letture delle unità',[6,7,16]),('Scritture scientifiche e prodotti',[8,9,8]),('Dimensioni delle grandezze',[12,13,15]),('Somme e confronti di misure',[14,17,10])],
'measures':[('Medie e dispersioni',[0,1,17]),('Letture di scale e intervalli',[6,7,5]),('Incertezze assolute e relative',[2,3,4]),('Somme e differenze di misure',[8,9,5]),('Prodotti, quozienti e potenze',[10,11,12]),('Arrotondamenti e percentuali',[13,2,3]),('Taratura, precisione e compatibilità',[14,15,16]),('Scelte dell’incertezza da assegnare',[4,5,17])],
'graphs':[('Relazioni di proporzionalità diretta',[0,1,2]),('Relazioni di proporzionalità inversa',[3,4,5]),('Pendenze e intercette',[6,7,9]),('Confronti fra relazioni lineari',[8,15,17]),('Tabelle, assi e scale',[10,13,14]),('Quadrati e prodotti costanti',[11,12,16]),('Ricerca delle grandezze incognite',[2,5,8]),('Pendenze di grafici sperimentali',[6,14,17])],
'density':[('Densità, masse e volumi',[0,1,2]),('Conversioni nelle misure di densità',[3,15,0]),('Misure con recipienti e cilindri graduati',[4,13,2]),('Corpi cavi e volumi esterni',[5,6,12]),('Confronti tra campioni',[7,8,17]),('Miscele e proprietà dei materiali',[9,14,16]),('Solidi regolari e lastre',[10,11,1]),('Grafici e dati sperimentali',[16,15,9])],
'vectors':[('Somme e differenze di componenti',[0,1,2]),('Opposti e prodotti per numeri',[3,4,9]),('Moduli e componenti mancanti',[5,6,13]),('Vettori lungo una retta',[7,8,10]),('Coordinate, versi e proiezioni',[11,14,15]),('Confronti tra vettori',[12,3,4]),('Limiti dei moduli delle risultanti',[16,17,5]),('Vettori equilibranti',[13,0,2])],
'forces':[('Masse, pesi e campi gravitazionali',[0,1,2]),('Forze elastiche e allungamenti',[3,4,5]),('Lunghezze naturali e tarature',[6,7,16]),('Limiti e valori effettivi dell’attrito',[8,9,13]),('Versi e moduli dell’attrito',[10,17,9]),('Reazioni normali nei contatti',[11,12,8]),('Pesi in ambienti diversi',[14,0,1]),('Confronti fra molle',[15,5,16])],
'point':[('Equilibri delle componenti',[0,1,13]),('Carichi sostenuti da corde',[2,3,4]),('Equilibri con molle',[5,16,5]),('Componenti sui piani inclinati',[6,7,8]),('Quieti ammissibili con attrito',[9,10,11]),('Corde inclinate e risultanti',[12,13,1]),('Pareti e appoggi',[14,15,2]),('Controlli delle condizioni di equilibrio',[17,10,11])],
'rigid':[('Forze, bracci e momenti',[0,1,2]),('Linee d’azione e segni dei momenti',[3,4,16]),('Equilibri delle leve',[5,6,17]),('Coppie di forze e condizioni di equilibrio',[7,8,4]),('Reazioni delle travi',[9,10,11]),('Baricentri di aste e masse',[12,13,12]),('Equilibri alla soglia del ribaltamento',[14,15,3]),('Momenti e vantaggi delle leve',[16,17,6])],
'pressure':[('Pressioni, forze e superfici',[0,1,2]),('Conversioni e pressioni assolute',[3,4,5]),('Problemi inversi della legge di Stevino',[6,7,8]),('Forme dei recipienti e dislivelli',[9,8,14]),('Presse e rapporti fra pistoni',[10,11,12]),('Forze dovute a differenze di pressione',[13,1,3]),('Manometri e barometri',[15,16,6]),('Vasi comunicanti e liquidi sovrapposti',[17,14,7])],
'buoyancy':[('Spinte, volumi immersi e densità',[0,1,2]),('Pesate in aria e in acqua',[3,4,16]),('Equilibri di galleggiamento',[5,6,17]),('Volumi immersi ed emersi',[7,8,6]),('Carichi e portate dei galleggianti',[9,10,7]),('Confronti fra corpi e liquidi',[11,12,13]),('Spinte e corpi vincolati',[14,3,4]),('Liquidi spostati e misure di densità',[15,2,16])]
}

def clean(s):
    assert not re.search(r'[\x00-\x08\x0b\x0c\x0e-\x1f]',s),repr(s)
    # Unità sempre dritte; i numeri in una frazione sono composti in colonna.
    return s

def write_file(path,text):
    path=ROOT/path
    path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text(clean(text),encoding='utf-8')

def generate(audit_path=None):
    AUDIT.clear()
    for slug,title,summary,fn in DATA:
        seen=set();positions=[0]*4
        for variant in range(5):
            for family in range(18):
                number=variant*18+family+1
                q=fn(family,variant)
                assert q['stem'] not in seen,(slug,number,'traccia duplicata')
                seen.add(q['stem'])
                pos=(number-1)%4
                options=q['options'][1:].copy()
                options.insert(pos,q['options'][0])
                keys=q['keys'][1:].copy()
                keys.insert(pos,q['keys'][0])
                assert len(set(keys))==4
                positions[pos]+=1
                path=Path('src/content/domande')/COURSE/slug/f'{number}.md'
                write_file(path,f'---\ncorretta: {pos+1}\n---\n\n'+q['stem']+'\n\n'+'\n'.join('- '+s for s in options)+'\n\n## Spiegazione\n\n'+q['explanation']+'\n')
                AUDIT.append(dict(course=COURSE,chapter=slug,family=family,variant=variant,label=q['label'],path=str(path),kind='quiz',correct=pos+1,options=options,option_keys=keys,expected=q['value'],expression=q['expression'],stem=q['stem']))
        used=set()
        for n,(label,families) in enumerate(SCHEDE[fn.__name__],1):
            qs=[]
            for j,family in enumerate(families):
                available=[v for v in [5,6,7] if (family,v) not in used]
                assert available,(slug,family,'troppe ripetizioni svolti')
                v=available[0]
                used.add((family,v))
                qs.append((fn(family,v),family,v))
            front={'titolo':label,'gratis':n<=3,'teoria':list(dict.fromkeys(q['anchor'] for q,_,_ in qs)),'parole':[label]}
            text='---\n'+'\n'.join(f'{key}: '+json.dumps(value,ensure_ascii=False) for key,value in front.items())+'\n---\n'
            for j,(q,family,v) in enumerate(qs,1):
                calc=q['calculation']
                # I passaggi sono gli stessi della spiegazione verificata; le formule si espandono su righe proprie.
                # Le formule brevi restano nella frase: evita frammenti di prosa isolati.
                explanation=q['explanation'].replace(q['calculation'],'').replace('  ',' ')
                traccia=q['stem']+('\n\n'+'\n'.join('- '+s for s in q['options']) if q['expression'] is None else '')
                text+=f'\n## Esercizio {j}\n\n'+traccia+'\n\n'+calc.strip()+'\n\n<div class="spiegazione">\n\n'+explanation+'\n\n</div>\n'
                AUDIT.append(dict(course=COURSE,chapter=slug,family=family,variant=v,label=q['label'],path=f'src/content/svolti/{COURSE}/{slug}/{n}.md',exercise=j,kind='worked',expected=q['value'],expression=q['expression'],stem=q['stem']))
            write_file(Path('src/content/svolti')/COURSE/slug/f'{n}.md',text)
        practice_families=[f for f in range(18) if any((f,v) not in used for v in [5,6,7])][:14]
        assert len(practice_families)==14
        for n,family in enumerate(practice_families,1):
            available=[v for v in [5,6,7] if (family,v) not in used]
            assert available,(slug,family,'nessuna variante da fare')
            v=available[0];used.add((family,v));q=fn(family,v)
            front={'titolo':q['label'],'teoria':[q['anchor']],'parole':[q['label']]}
            text='---\n'+'\n'.join(f'{key}: '+json.dumps(value,ensure_ascii=False) for key,value in front.items())+'\n---\n\n'+q['stem']+('\n\n'+'\n'.join('- '+s for s in q['options']) if q['expression'] is None else '')+'\n\n:::soluzione\n'+q['answer']+'.\n:::\n'
            write_file(Path('src/content/dafare')/COURSE/slug/f'{n}.md',text)
            AUDIT.append(dict(course=COURSE,chapter=slug,family=family,variant=v,label=q['label'],path=f'src/content/dafare/{COURSE}/{slug}/{n}.md',kind='practice',expected=q['value'],expression=q['expression'],stem=q['stem']))
        if 'THEORY' in globals() and slug in THEORY:
            front='---\ntitolo: '+json.dumps(title,ensure_ascii=False)+'\nsommario: '+json.dumps(summary,ensure_ascii=False)+'\n---\n\n'
            write_file(Path('src/content/teoria')/COURSE/(slug+'.md'),front+THEORY[slug].strip()+'\n')
        print(f'{slug}: 90 quiz, posizioni {positions}; 8 schede/24 svolti;14 tracce')
    if audit_path:
        Path(audit_path).write_text(json.dumps(AUDIT,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')

THEORY = {}
THEORY['grandezze-e-unita']=r"""
:::percorso
Si parte dalle operazioni con numeri e frazioni.
Qui si impara a scrivere una misura, convertire le unità e controllare la forma di una formula.
Questi strumenti saranno usati nelle misure con incertezza, nella densità e nei problemi sulle forze.
:::

## Grandezze e Sistema Internazionale

:::definizione{#si titolo="Valore numerico e unità"}
Una **grandezza fisica** è una proprietà misurabile. Misurarla significa confrontarla con un campione scelto come unità. La scrittura $l=2{,}4\,\mathrm m$ contiene il simbolo della grandezza, il valore numerico e l'unità.
Nel Sistema Internazionale, qui si usano soprattutto metro per la lunghezza, chilogrammo per la massa e secondo per il tempo. Il simbolo di un'unità resta invariato al plurale. Massa e peso sono grandezze diverse: il peso è una forza e si esprime in newton.
:::

## Prefissi e conversioni lineari

:::definizione{#prefissi titolo="Multipli e sottomultipli"}
Un prefisso modifica l'unità con una potenza di dieci. Chilo, simbolo k, vale $10^3$; centi, c, vale $10^{-2}$; milli, m, vale $10^{-3}$; micro, $\mu$, vale $10^{-6}$.
Per esempio $250\,\mathrm{cm}=250\cdot10^{-2}\,\mathrm m=2{,}5\,\mathrm m$. La lunghezza è invariata; cambia il numero perché cambia il campione usato. Per il passaggio inverso, $2{,}5\,\mathrm m=2500\,\mathrm{mm}$.
:::

## Superfici e volumi

:::teorema{#superfici-volumi titolo="Elevare anche il fattore di conversione"}
Un'area è il prodotto di due lunghezze, un volume di tre. Poiché $1\,\mathrm{cm}=10^{-2}\,\mathrm m$, valgono
$$
1\,\mathrm{cm}^2=10^{-4}\,\mathrm m^2,\qquad
1\,\mathrm{cm}^3=10^{-6}\,\mathrm m^3.
$$
Quindi $30\,\mathrm{cm}^2=0{,}003\,\mathrm m^2$ e $30\,\mathrm{cm}^3=0{,}000030\,\mathrm m^3$.
Un litro è un decimetro cubo: $1\,\mathrm L=10^{-3}\,\mathrm m^3$. Un millilitro è un centimetro cubo. Le conversioni devono riferirsi alla grandezza completa: il fattore di un'area non coincide con quello di una lunghezza.
:::

## Intervalli di tempo

:::osservazione{#tempo titolo="Ore, minuti e secondi"}
Ore e minuti seguono fattori sessanta. Per convertire una durata composta, si convertono le parti e poi si sommano. Per esempio
$$
1\,\mathrm h+12\,\mathrm{min}
=3600\,\mathrm s+720\,\mathrm s
=4320\,\mathrm s.
$$
Il millisecondo usa invece un prefisso decimale: $1\,\mathrm{ms}=10^{-3}\,\mathrm s$. Una durata di $1{,}5\,\mathrm h$ equivale a un'ora e trenta minuti, perché la parte decimale è metà di un'ora.
:::

## Notazione scientifica

:::definizione{#scientifica titolo="Separare coefficiente e potenza di dieci"}
Un numero positivo in **notazione scientifica normalizzata** si scrive $a\cdot10^n$, con $1\leq a<10$ e $n$ intero. Per esempio $42000=4{,}2\cdot10^4$ e $0{,}00042=4{,}2\cdot10^{-4}$.
Nei prodotti si moltiplicano i coefficienti e si sommano gli esponenti; nei quozienti si dividono i coefficienti e si sottraggono gli esponenti:
$$
(2\cdot10^3)(3\cdot10^{-2})=6\cdot10^1.
$$
Un risultato come $12\cdot10^3$ è corretto ma non normalizzato: la forma normalizzata è $1{,}2\cdot10^4$.
:::

## Unità derivate e dimensioni

:::definizione{#dimensioni titolo="Le unità seguono le operazioni"}
Le grandezze derivate si costruiscono combinando altre grandezze. Un rapporto massa-volume ha unità $\mathrm{kg/m^3}$. Il prodotto di due lunghezze ha unità $\mathrm m^2$.
Il **controllo dimensionale** verifica che i due membri di una formula descrivano lo stesso tipo di grandezza. Se un risultato è richiesto come area, una formula che produce soltanto metri è incompatibile. Questo controllo può individuare un errore, ma da solo non dimostra che una formula sia corretta: anche un fattore numerico sbagliato lascia invariate le dimensioni.
:::

## Somme e confronti

:::osservazione{#confronti titolo="Prima una stessa unità"}
Si sommano o confrontano direttamente i numeri solo dopo aver espresso le grandezze nella stessa unità. Per $2\,\mathrm m+35\,\mathrm{cm}$ si ottiene $2+0{,}35=2{,}35\,\mathrm m$.
Nei rapporti fra grandezze omogenee le unità si semplificano. Per esempio il rapporto fra $50\,\mathrm{cm}$ e $2\,\mathrm m$ è $\dfrac{0{,}5}{2}=0{,}25$, un numero puro. Usare 50 e 2 senza conversione descriverebbe un altro rapporto.
:::
"""
THEORY['misure-e-incertezze']=r"""
:::percorso
Le conversioni permettono di confrontare misure della stessa grandezza.
Una misura sperimentale richiede anche informazioni sullo strumento e sull'incertezza.
Qui si costruiscono intervalli e stime che serviranno per la densità, i grafici sperimentali e le forze.
:::

## Strumenti e risoluzione

:::definizione{#strumenti titolo="Portata, divisioni e lettura"}
La **portata** è il valore massimo previsto dalla scala; la **risoluzione** è la minima variazione distinguibile dallo strumento. Se fra 0 e $10\,\mathrm N$ ci sono venti intervalli uguali, ogni divisione vale $0{,}5\,\mathrm N$.
Una convenzione scolastica assegna metà divisione a una lettura analogica; altre attività adottano una divisione intera o l'incertezza dichiarata dal costruttore. Negli esercizi il criterio è specificato. Non si deve trasformare una convenzione particolare in una regola universale per ogni strumento.
:::

## Misure ripetute

:::definizione{#ripetute titolo="Media e semidispersione"}
La media aritmetica di $n$ letture è
$$
\bar x=\frac{x_1+\cdots+x_n}{n}.
$$
Una stima semplice della dispersione è $\Delta x=(x_{\max}-x_{\min})/2$, detta **semidispersione massima**. Le letture 9,8; 10,0; 10,2 cm hanno media 10,0 cm e semidispersione 0,2 cm.
La stima assegnata non dovrebbe ignorare la capacità di lettura dello strumento. Quando viene richiesto il maggiore fra semidispersione e incertezza strumentale, si confrontano le due quantità nella stessa unità.
:::

## Scrivere un risultato e il suo intervallo

:::definizione{#intervalli titolo="Valore centrale e incertezza assoluta"}
La misura $x=(x_m\pm\Delta x)$ indica il valore centrale $x_m$ e l'incertezza assoluta $\Delta x$. L'intervallo associato va da $x_m-\Delta x$ a $x_m+\Delta x$.
Per $l=(12{,}0\pm0{,}2)\,\mathrm{cm}$ gli estremi sono 11,8 e 12,2 cm. Secondo il criterio di sovrapposizione, due misure sono compatibili se gli intervalli hanno almeno un punto in comune. Questo criterio operativo non dimostra l'uguaglianza dei valori veri né attribuisce da solo una probabilità all'intervallo.
:::

## Incertezza relativa e percentuale

:::definizione{#relativa titolo="Confrontare l'incertezza con la misura"}
Per un valore centrale positivo,
$$
\varepsilon=\frac{\Delta x}{x_m},\qquad
\varepsilon_\%=100\varepsilon.
$$
L'incertezza relativa è adimensionale. Se $m=(50\pm1)\,\mathrm g$, allora $\varepsilon=0{,}02$ e l'incertezza percentuale è 2%. Per ritrovare quella assoluta si usa $\Delta x=\varepsilon x_m$.
Una stessa incertezza assoluta pesa diversamente su valori centrali diversi. Uno scarto di 1 mm su 10 mm rappresenta il 10%; su 100 mm rappresenta l'1%.
:::

## Propagazione delle incertezze

:::teorema{#propagazione titolo="Stime prudenziali e approssimazioni lineari"}
Per somme e differenze, una stima prudenziale somma le incertezze assolute:
$$
\Delta(a+b)=\Delta a+\Delta b,\qquad
\Delta(a-b)=\Delta a+\Delta b.
$$
Per prodotti e quozienti di grandezze positive, la stima lineare prudenziale somma le incertezze relative. Per $z=x^n$, al primo ordine, $\varepsilon_z\simeq|n|\varepsilon_x$. Per esempio un lato noto al 2% dà un'area quadrata nota circa al 4%.
Le formule lineari trascurano termini di ordine superiore e sono adatte a piccole incertezze. Si applica il metodo dichiarato: la somma quadratica statistica richiede ipotesi differenti e non è sostituibile automaticamente alla stima prudenziale.
:::

## Arrotondare senza aggiungere precisione

:::osservazione{#cifre titolo="Cifre utili nel risultato"}
Il valore centrale e l'incertezza vanno riportati a posizioni decimali coerenti. Se l'incertezza assegnata è 0,2 cm, scrivere 12,34567 cm come risultato finale suggerirebbe una precisione non sostenuta.
Per arrotondare al decimo si osserva il centesimo. Con la convenzione indicata negli esercizi, 12,45 diventa 12,5. Durante i passaggi intermedi si conservano più cifre, arrotondando il risultato alla fine, per evitare che piccoli errori di arrotondamento si accumulino.
:::

## Errori casuali e sistematici

:::definizione{#errori titolo="Dispersione e taratura"}
Gli **errori casuali** producono variazioni fra le letture. Uno **scarto sistematico** sposta le misure in modo ripetuto rispetto al riferimento, per esempio quando una bilancia aggiunge sempre 3 g.
Ripetere le misure aiuta a descrivere la dispersione; una media non elimina da sola una taratura errata. Un controllo dello zero o il confronto con un campione noto può mettere in evidenza lo scarto sistematico. Una serie molto concentrata può essere precisa nelle ripetizioni e tuttavia distante dal riferimento.
:::
"""
THEORY['proporzionalita-e-grafici']=r"""
:::percorso
Si usano rapporti, conversioni e coppie di dati misurati.
Un grafico permette di riconoscere una relazione e controllare come varia una grandezza quando cambia l'altra.
Le stesse idee compariranno nei grafici massa-volume, nella legge di Hooke e nella pressione dei liquidi.
:::

## Assi e scale

:::definizione{#assi titolo="Associare coordinate e grandezze"}
Ogni asse riporta il nome della grandezza e l'unità. In un grafico massa-volume, il volume può stare sull'asse orizzontale e la massa su quello verticale. Il punto (2;6) indica allora un volume di 2 unità e una massa di 6 unità.
Le scale dei due assi possono essere diverse. Tre quadretti verticali non rappresentano necessariamente una variazione numerica di tre. Una pendenza si ricava dalle variazioni delle grandezze, dopo aver letto le scale. La sua unità è quella dell'asse verticale divisa per quella dell'asse orizzontale.
:::

## Proporzionalità diretta

:::definizione{#diretta titolo="Rapporto costante"}
Due grandezze positive sono direttamente proporzionali quando $y=cx$ con $c$ costante. Il rapporto $y/x$ è costante e il grafico è una retta passante per l'origine. Se x raddoppia, anche y raddoppia.
Con $c=3$, ai valori x=1,2,3 corrispondono y=3,6,9. Per trovare x a partire da y si usa $x=y/c$, con $c\ne0$. Un aumento percentuale di x produce lo stesso aumento percentuale di y.

::grafico{f="3*x" xmin=0 xmax=4 ymin=0 ymax=12 nomi="x,y" punti="1,3,pieno,A;2,6,pieno,B" titolo="Nella relazione $y=3x$ il rapporto fra le coordinate resta 3"}
:::

## Proporzionalità inversa

:::definizione{#inversa titolo="Prodotto costante"}
Due grandezze positive sono inversamente proporzionali quando $xy=c$, cioè $y=c/x$ con $c>0$. Il prodotto resta costante. Raddoppiare x dimezza y.
Per $c=12$ le coppie (2;6), (3;4), (4;3) descrivono lo stesso prodotto. Il grafico è un ramo di iperbole; x=0 è escluso. Un esempio è lo spessore di uno strato a volume fissato: se l'area cresce, lo spessore diminuisce.

::grafico{f="12/x" xmin=1 xmax=7 ymin=0 ymax=13 nomi="x,y" punti="2,6,pieno,A;4,3,pieno,B" titolo="Nella relazione $xy=12$ il prodotto resta 12"}
:::

## Relazioni affini

:::definizione{#affine titolo="Pendenza e valore iniziale"}
Una relazione $y=mx+q$ è affine. Il coefficiente m è la pendenza e q è il valore di y per x=0, detto intercetta. Per due punti con coordinate orizzontali diverse,
$$
m=\frac{y_2-y_1}{x_2-x_1},\qquad q=y_1-mx_1.
$$
Un recipiente con 4 L iniziali che riceve 2 L al minuto segue $V=4+2t$. Dopo tre minuti contiene 10 L. La presenza del valore iniziale rende la relazione affine; il rapporto V/t non resta costante.

::grafico{f="2*x;2*x+4" xmin=0 xmax=4 ymin=0 ymax=13 nomi="x,y" legenda="y=2x;y=2x+4" titolo="Stessa pendenza e intercette diverse producono rette parallele"}
:::

## Leggere una tabella

:::osservazione{#tabelle titolo="Scegliere una relazione compatibile con i dati"}
Per riconoscere una proporzionalità diretta si confrontano i rapporti y/x; per una inversa si confrontano i prodotti xy. Per una relazione affine si confrontano le pendenze fra coppie di punti.
I dati (1;5), (2;8), (3;11) hanno variazione di y uguale a 3 per ogni unità di x. Seguono $y=3x+2$, non una proporzionalità diretta. Tre dati coerenti suggeriscono un modello nel campo osservato; non dimostrano che il modello valga per ogni possibile valore esterno alle misure.
:::

## Dipendenze dal quadrato

:::osservazione{#quadratica titolo="Fattori di scala"}
In $y=cx^2$, con c positivo e x positivo, moltiplicare x per un fattore r moltiplica y per $r^2$. In $y=c/x^2$ lo stesso cambiamento moltiplica y per $1/r^2$.
Per esempio, raddoppiare il lato di un quadrato quadruplica l'area. Le due relazioni si distinguono sia dalla proporzionalità diretta sia da quella inversa semplice. Il confronto dei fattori evita di introdurre calcoli più lunghi quando interessa soltanto il rapporto fra valore finale e iniziale.
:::
"""

THEORY['densita']=r"""
:::percorso
Si parte dalle misure di massa e volume e dalle conversioni fra unità.
Qui si distingue la quantità di materiale dalla sua concentrazione in un certo volume.
La densità servirà per la pressione idrostatica e per spiegare il galleggiamento.
:::

## Densità di un materiale

:::definizione{#definizione titolo="Massa per unità di volume"}
Per un campione omogeneo la **densità** è
$$
\rho=\frac mV.
$$
Il simbolo $\rho$ si legge rho; m è la massa e V il volume. Un campione di 60 g che occupa 20 cm³ ha densità 3 g/cm³: ogni centimetro cubo contiene 3 g di materiale.
La densità dipende dalle condizioni del materiale, per esempio dalla temperatura. Nei problemi di questo capitolo tali condizioni sono mantenute fisse.
:::

## Problemi inversi

:::teorema{#inverse titolo="Ricavare massa o volume"}
Dalla definizione si ottengono $m=\rho V$ e $V=m/\rho$, con densità positiva. Un volume di 8 cm³ di materiale con densità 2 g/cm³ ha massa 16 g. Se lo stesso materiale ha massa 30 g, occupa 15 cm³.
Le formule descrivono la stessa relazione e si scelgono secondo l'incognita. Il risultato deve mantenere unità coerenti: densità in g/cm³ e volume in cm³ producono grammi.
:::

## Unità della densità

:::osservazione{#unita titolo="Chilogrammi al metro cubo e grammi al centimetro cubo"}
Nel SI la densità si esprime in $\mathrm{kg/m^3}$. Poiché $1\,\mathrm g=10^{-3}\,\mathrm{kg}$ e $1\,\mathrm{cm}^3=10^{-6}\,\mathrm m^3$, vale
$$
1\,\mathrm{g/cm^3}=1000\,\mathrm{kg/m^3}=1\,\mathrm{kg/L}.
$$
Quindi 0,8 g/cm³ corrisponde a 800 kg/m³. Si convertono sia numeratore sia denominatore; cambiare solo la massa darebbe un altro valore.
:::

## Misurare un volume irregolare

:::osservazione{#spostamento titolo="Immersione e tara"}
Un solido non poroso, completamente immerso e senza bolle aderenti, sposta un volume di liquido uguale al proprio. Se il cilindro graduato passa da 35 a 47 mL, il volume è 12 cm³.
Per trovare la massa del liquido in un recipiente si sottrae la **tara**, cioè la massa del recipiente vuoto. Da 70 g complessivi e 30 g di tara si ricavano 40 g di liquido. Il volume iniziale nel cilindro e la massa del contenitore vanno separati dai dati del campione.
:::

## Solidi regolari e lastre

:::osservazione{#geometria titolo="Il volume prima della massa"}
Per un parallelepipedo $V=abc$; per un cubo $V=l^3$; per una lastra di area A e spessore h, $V=Ah$. Un cubo di lato 2 cm ha volume 8 cm³, quindi con densità 3 g/cm³ ha massa 24 g.
Uno spessore in millimetri va convertito se l'area è in centimetri quadrati. Una lastra di 20 cm² spessa 1 mm ha volume $20\cdot0{,}1=2\,\mathrm{cm}^3$.
:::

## Corpi cavi e densità media

:::definizione{#cavita titolo="Volume esterno e volume del materiale"}
In un oggetto cavo, il volume del materiale è il volume esterno meno quello della cavità. Trascurando la massa dell'aria, la massa è la densità del materiale per il volume effettivamente occupato dal materiale.
La **densità media** dell'oggetto usa invece massa totale divisa per volume esterno. Una struttura con 18 g di materiale in un volume esterno di 12 cm³ ha densità media 1,5 g/cm³, anche se la parete è fatta di un materiale più denso. Questa distinzione sarà usata nei galleggianti.
:::

## Confrontare campioni

:::teorema{#confronti titolo="Stesso volume, stessa massa o stesso materiale"}
A volume uguale, la massa è direttamente proporzionale alla densità. A massa uguale, il volume è inversamente proporzionale alla densità.
Se un campione omogeneo viene diviso in due parti, massa e volume di ogni parte diminuiscono nello stesso rapporto: la densità resta uguale. Non si decide quale oggetto sia più denso osservando soltanto quale pesa di più; occorrono anche i volumi.
:::

## Miscele

:::osservazione{#miscele titolo="Somma delle masse e ipotesi sui volumi"}
Quando non si perde materiale, la massa totale è $m_1+m_2$. Se il problema assume anche volumi additivi, allora
$$
\rho_{\mathrm{miscela}}=\frac{\rho_1V_1+\rho_2V_2}{V_1+V_2}.
$$
La media aritmetica delle densità vale solo per volumi uguali. Per 20 cm³ a densità 1 g/cm³ e 10 cm³ a densità 2 g/cm³, la massa totale è 40 g e il volume assunto è 30 cm³. La densità è quindi $\dfrac43\,\mathrm{g/cm^3}$. Nelle miscele reali i volumi possono non essere additivi: l'ipotesi va indicata.
:::

## Grafico massa-volume

:::osservazione{#grafico titolo="La densità come pendenza"}
Per uno stesso materiale omogeneo a condizioni fisse, $m=\rho V$. Il grafico massa-volume è una retta passante per l'origine e la pendenza è la densità.
Con due campioni si può usare $\rho=\Delta m/\Delta V$. Le unità della pendenza sono massa divisa per volume. Una retta più ripida indica maggiore densità solo se gli assi dei grafici usano le stesse scale.

::grafico{f="2*x;3*x" xmin=0 xmax=5 ymin=0 ymax=16 nomi="V,m" legenda="\rho=2\,\mathrm{g/cm^3};\rho=3\,\mathrm{g/cm^3}" titolo="Con volume in centimetri cubi e massa in grammi, le pendenze sono le densità in g/cm³"}
:::
"""
THEORY['vettori']=r"""
:::percorso
Si usano coordinate cartesiane, numeri con segno e il teorema di Pitagora.
Un vettore descrive sia quanto è grande una quantità sia come è orientata.
Le componenti permetteranno di sommare le forze e imporre l'equilibrio nel piano.
:::

## Modulo, direzione e verso

:::definizione{#definizione titolo="Rappresentare una grandezza orientata"}
Un **vettore** si rappresenta con una freccia. Il **modulo** è un numero non negativo che descrive la sua grandezza; la direzione è quella della retta su cui giace; il verso distingue le due orientazioni sulla retta.
Due forze di 5 N lungo la stessa retta possono essere concordi oppure opposte. Avere lo stesso modulo non rende uguali due vettori: devono coincidere anche direzione e verso. Un vettore nullo ha modulo zero e non possiede un verso determinato.
:::

## Componenti cartesiane

:::definizione{#componenti titolo="Proiezioni con segno"}
Scelti un asse x orientato a destra e un asse y verso l'alto, un vettore si scrive $\vec u=(u_x;u_y)$. Una componente negativa indica il verso opposto al verso positivo del relativo asse.
Per due punti A e B, il vettore da A a B ha componenti
$$
\overrightarrow{AB}=(x_B-x_A;y_B-y_A).
$$
Se A=(1;2) e B=(4;6), le componenti sono (3;4). Il punto di partenza non coincide necessariamente con l'origine; perciò le coordinate di B da sole non descrivono sempre il vettore.
:::

## Somme, differenze e prodotti per numeri

:::teorema{#operazioni titolo="Operazioni componente per componente"}
La somma e la differenza si calcolano separatamente sui due assi:
$$
\vec u+\vec v=(u_x+v_x;u_y+v_y),\qquad
\vec u-\vec v=(u_x-v_x;u_y-v_y).
$$
L'opposto è $-\vec u=(-u_x;-u_y)$. Moltiplicare un vettore per un numero c moltiplica entrambe le componenti per c. Se c è negativo si inverte il verso; il modulo è moltiplicato per $|c|$.
Per $\vec u=(2;-1)$ e $\vec v=(-3;4)$, la somma è (-1;3), la differenza (5;-5) e $-2\vec u=(-4;2)$. Graficamente la somma si costruisce mettendo la coda del secondo vettore sulla punta del primo.
:::

## Moduli e Pitagora

:::teorema{#modulo titolo="Componenti perpendicolari"}
Le componenti cartesiane sono perpendicolari. Perciò il modulo soddisfa
$$
|\vec u|=\sqrt{u_x^2+u_y^2}.
$$
Con componenti 6 N e 8 N si trova un modulo di 10 N. Una componente negativa viene elevata al quadrato come quella positiva: il modulo non dipende dal quadrante.
Se sono noti modulo e una componente, il modulo dell'altra è $|u_y|=\sqrt{|\vec u|^2-u_x^2}$. Il segno della componente mancante richiede anche un'informazione sul verso.

::grafico{uguale=1 xmin=-1 xmax=9 ymin=-1 ymax=10 nomi="uₓ,uᵧ" vettori="0,0,6,8" segmenti="6,0,6,8;0,8,6,8" punti="6,8" etichette="3,4.8,u;-0.7,8.1,8" titolo="Componenti di $6\,\mathrm N$ e $8\,\mathrm N$: il modulo è $\sqrt{6^2+8^2}=10\,\mathrm N$; entrambi gli assi sono espressi in newton"}
:::

## Vettori sulla stessa retta

:::teorema{#collineari titolo="Somme algebriche e limiti della risultante"}
Lungo una stessa retta si sceglie un verso positivo e si sommano le componenti con segno. Due forze di 8 N a destra e 3 N a sinistra hanno risultante 5 N a destra.
Se si conoscono solo i moduli U e V, il modulo della somma è compreso fra $|U-V|$ e $U+V$. Il minimo si ha con vettori opposti, il massimo con vettori concordi. Una somma nulla richiede moduli uguali e versi opposti.
:::

## Il vettore equilibrante

:::definizione{#equilibrante titolo="Annullare una risultante"}
Se più vettori hanno risultante $\vec R$, l'**equilibrante** è $-\vec R$. La sua somma con la risultante è nulla.
Per $\vec R=(3;4)\,\mathrm N$, l'equilibrante è $(-3;-4)\,\mathrm N$ e ha modulo 5 N. Si trova prima la risultante e poi si cambia il segno delle due componenti. Nei problemi di statica questa costruzione individua la forza aggiuntiva necessaria per annullare la somma delle forze applicate allo stesso punto.
:::
"""
THEORY['forze']=r"""
:::percorso
Le forze sono vettori e si sommano mediante le componenti.
Qui si riconoscono peso, forza elastica, reazione normale e attrito, con le condizioni dei relativi modelli.
Nel capitolo successivo queste forze saranno combinate nei problemi di equilibrio.
:::

## Interazioni e rappresentazione

:::definizione{#forza titolo="La forza come grandezza vettoriale"}
Una **forza** descrive un'interazione fra corpi. Può essere di contatto, come quella di un tavolo su un oggetto, oppure agire senza contatto diretto, come la forza gravitazionale.
Si rappresenta con modulo, direzione e verso; nei corpi rigidi conta anche la linea d'azione. L'unità SI è il newton, simbolo N. Il dinamometro misura una forza attraverso la deformazione di un elemento elastico opportunamente tarato.
:::

## Peso e massa

:::definizione{#peso titolo="Il campo gravitazionale locale"}
La massa m si esprime in chilogrammi. Il peso è la forza gravitazionale locale e, vicino alla superficie considerata, ha modulo
$$
P=mg.
$$
Qui g è il campo gravitazionale in N/kg; negli esercizi viene indicato il valore da usare. Con $m=2\,\mathrm{kg}$ e $g=10\,\mathrm{N/kg}$ il peso vale 20 N.
Spostare lo stesso oggetto in un luogo con g diverso cambia il peso, non la massa. La direzione del peso è verticale, con verso verso il basso nel riferimento locale.
:::

## Molle e legge di Hooke

:::teorema{#hooke titolo="Forza proporzionale alla deformazione"}
Nel tratto elastico lineare di una molla ideale, il modulo della forza è $F_e=k|x|$. La deformazione x è la differenza fra lunghezza attuale e lunghezza naturale; k è la costante elastica in N/m.
Con $k=100\,\mathrm{N/m}$ e allungamento 3 cm, si usa $x=0{,}03\,\mathrm m$ e si ottiene 3 N. Il verso della forza tende a ripristinare la lunghezza naturale: una molla allungata tira, una compressa spinge.
La legge richiede deformazioni entro il campo in cui il modello lineare è valido.

::grafico{f="x" xmin=0 xmax=6 ymin=0 ymax=6 nomi="x,F" punti="3,3,pieno,A" titolo="Allungamento $x$ in centimetri e forza $F$ in newton. Per $k=100\,\mathrm{N/m}$, $3\,\mathrm{cm}=0{,}03\,\mathrm m$ corrispondono a $3\,\mathrm N$"}
:::

## Confrontare e tarare molle

:::osservazione{#taratura titolo="Pendenza del grafico forza-allungamento"}
Il rapporto F/x e la pendenza $\Delta F/\Delta x$ del grafico lineare forniscono k. A forza uguale, la molla con k maggiore si deforma meno.
La lunghezza totale non deve sostituire x. Se una molla passa da 12 a 16 cm, la deformazione è 4 cm. Se il grafico riporta lunghezza totale anziché allungamento, la pendenza resta k, ma la retta in generale non passa per l'origine degli assi.
:::

## Reazione normale e tensione

:::definizione{#contatto titolo="Forze dei vincoli"}
La **reazione normale** N di una superficie è perpendicolare alla superficie di contatto. Una corda ideale tesa tira lungo la propria direzione; la relativa forza si chiama tensione.
Su un tavolo orizzontale, con solo peso e normale e con corpo fermo, N=P. Se si aggiunge una spinta verticale verso il basso, N aumenta; con una trazione verso l'alto, N diminuisce. Il piano non può esercitare una normale di trazione: un calcolo che richiede N negativa indica che quel contatto non può essere mantenuto nelle ipotesi date.
:::

## Attrito radente

:::definizione{#attrito titolo="Valore effettivo e limite statico"}
L'attrito agisce lungo la superficie. Nel modello statico,
$$
0\leq f_s\leq\mu_sN.
$$
Il valore effettivo è quello richiesto dalla quiete, finché non supera il limite $f_{s,\max}=\mu_sN$. Un blocco tirato con 3 N può avere attrito di 3 N anche se il limite è 8 N.
Durante lo scorrimento, il modello dinamico assegna $f_d=\mu_dN$, opposto alla velocità relativa delle superfici. I coefficienti sono adimensionali. Per riconoscere il verso statico si considera la tendenza allo scorrimento; esso non è sempre opposto a una forza scelta senza esaminare tutte le altre.
:::

## Usare correttamente un modello

:::osservazione{#modelli titolo="Ipotesi e controlli fisici"}
I dati devono precisare se la molla è nel tratto lineare, se il corpo è fermo o scorre, se il piano è liscio o ruvido e quali forze aggiuntive agiscono.
Dopo il calcolo si controllano unità, segni e condizioni. Se l'attrito necessario supera il massimo statico, la quiete non è possibile. Se la normale trovata è negativa, il contatto assunto deve essere rivisto. Questi controlli fanno parte della soluzione e precedono l'uso della risposta numerica.
:::
"""

THEORY['equilibrio-punto']=r"""
:::percorso
Si usano le componenti dei vettori e le leggi delle forze peso, elastiche e d'attrito.
Il modello di punto materiale descrive i casi in cui non occorre studiare la rotazione del corpo.
L'equilibrio dei momenti sarà aggiunto nel capitolo sul corpo rigido.
:::

## Condizioni di equilibrio

:::teorema{#condizioni titolo="Risultante nulla"}
Un punto materiale che rimane fermo in un riferimento inerziale ha risultante delle forze nulla:
$$
\sum\vec F=\vec 0.
$$
Nel piano questa condizione richiede contemporaneamente
$$
\begin{cases}
\sum F_x=0,\\
\sum F_y=0.
\end{cases}
$$
La quiete iniziale è parte dell'ipotesi statica. La sola risultante nulla non distingue da un moto rettilineo uniforme; qui si studiano corpi fermi. Una forza equilibrante è opposta alla risultante di tutte le altre.
:::

## Disegnare e proiettare le forze

:::osservazione{#componenti titolo="Un corpo alla volta"}
Si sceglie il corpo studiato e si rappresentano le sole forze esterne che agiscono su quel corpo. Poi si scelgono gli assi, si attribuiscono i segni e si impongono le somme nulle.
Se le forze già note sommano $(6;8)\,\mathrm N$, l'equilibrante ha componenti $(-6;-8)\,\mathrm N$ e modulo 10 N. Una forza che il corpo esercita su un altro oggetto non deve essere aggiunta fra quelle che agiscono sul primo corpo.
:::

## Corde verticali

:::teorema{#corde titolo="Ripartire un carico"}
Per un corpo appeso a una sola corda verticale, senza altre forze, vale $T=P$. Con due corde verticali vale $T_1+T_2=P$.
Le tensioni sono uguali solo se la configurazione e il carico permettono quella simmetria. Se P=30 N e una corda sostiene 12 N, l'altra sostiene 18 N. Una corda ideale tesa tira lungo la propria direzione; non può spingere il corpo.
:::

## Molle in equilibrio

:::teorema{#molla titolo="Deformazione richiesta dal carico"}
Una molla verticale che sostiene da sola un peso soddisfa $kx=mg$. Con $m=1\,\mathrm{kg}$, $g=10\,\mathrm{N/kg}$ e $k=200\,\mathrm{N/m}$, l'allungamento è $x=0{,}05\,\mathrm m$.
La stessa relazione di equilibrio può essere usata orizzontalmente: la forza elastica deve uguagliare la risultante opposta delle altre forze lungo l'asse. La deformazione trovata deve restare entro il campo elastico lineare assunto.
:::

## Piani inclinati

:::teorema{#piano titolo="Assi parallelo e perpendicolare al piano"}
Su un piano inclinato si scelgono assi lungo il piano e perpendicolari ad esso. Se il triangolo del piano ha altezza h, base b e lunghezza L, le componenti del peso hanno moduli
$$
P_\parallel=P\frac hL,\qquad P_\perp=P\frac bL.
$$
I due rapporti derivano dalla similitudine dei triangoli costruiti con il peso e le sue proiezioni. Per un triangolo 3-4-5 e peso 10 N, le componenti sono 6 N lungo il piano e 8 N perpendicolari.
Senza altre forze perpendicolari, la normale vale $N=P_\perp$. Una corda parallela a un piano liscio deve equilibrare $P_\parallel$.
:::

## Attrito e possibilità di quiete

:::teorema{#attrito-equilibrio titolo="Prima la forza richiesta, poi il limite"}
Si calcola l'attrito necessario all'equilibrio e si verifica
$$
f_{\mathrm{richiesto}}\leq\mu_sN.
$$
Su un piano inclinato senza altre forze parallele, $f_{\mathrm{richiesto}}=P_\parallel$ e l'attrito punta verso l'alto. Il coefficiente minimo è $\mu_{s,\min}=P_\parallel/N$, purché N sia positivo.
Se servono 9 N e il limite è 7 N, nessun valore statico ammissibile equilibra il corpo. Se il limite è 12 N, l'attrito effettivo resta 9 N.
:::

## Corde inclinate simmetriche

:::teorema{#corde-inclinate titolo="Somma delle componenti verticali"}
Due corde simmetriche hanno tensioni uguali. Le componenti orizzontali si annullano e le verticali devono sommare il peso.
Se la componente verticale di ciascuna tensione è $\dfrac45T$, allora $2\cdot\dfrac45T=P$. Per P=16 N si trova T=10 N. Il valore supera metà del peso perché ogni corda fornisce anche una componente orizzontale, che viene annullata dall'altra.
:::

## Contatto con un piano

:::osservazione{#contatto titolo="Normale e forze verticali"}
Un corpo fermo sul tavolo, aiutato da una trazione verticale T verso l'alto, soddisfa $N+T=P$. Per P=20 N e T=6 N, la normale è 14 N.
Il risultato deve essere non negativo. Se la trazione supera il peso, il tavolo non può applicare una forza verso il basso per conservarne il contatto: la configurazione statica assunta non è più possibile.
:::

## Corpi premuti contro una parete

:::teorema{#parete titolo="Normale orizzontale e attrito verticale"}
Una spinta orizzontale F può premere un corpo contro una parete verticale. Se non vi sono altre forze orizzontali, la normale ha modulo N=F. Per impedirne la discesa, l'attrito deve equilibrare il peso.
Il limite statico richiede $P\leq\mu_sF$. La spinta minima è quindi $F_{\min}=P/\mu_s$ per coefficiente positivo. Un corpo di peso 10 N con $\mu_s=0{,}5$ richiede almeno 20 N di spinta. In questo caso l'attrito è verso l'alto e la normale è orizzontale.
:::
"""
THEORY['equilibrio-corpo-rigido']=r"""
:::percorso
L'annullamento della risultante controlla l'equilibrio traslatorio.
Per un corpo esteso occorre anche controllare la tendenza a ruotare.
Momenti, bracci e baricentro permettono di risolvere leve, travi appoggiate e problemi di stabilità.
:::

## Momento di una forza

:::definizione{#momento titolo="Forza e distanza perpendicolare"}
Il **momento** di una forza rispetto a un punto descrive la sua tendenza a produrre rotazione. Nel piano il suo modulo è
$$
M=Fb,
$$
dove b è il **braccio**, cioè la distanza perpendicolare dal punto alla linea d'azione della forza. L'unità è N m.
Una forza di 20 N con braccio 0,3 m produce 6 N m. Se la linea d'azione attraversa il punto scelto, il braccio e il momento sono nulli. La distanza dal punto di applicazione al perno coincide con il braccio soltanto quando la forza è perpendicolare a quel segmento.
:::

## Segni dei momenti

:::osservazione{#segni titolo="Orario e antiorario"}
Si sceglie un verso di rotazione positivo, per esempio quello antiorario. Una forza che tende a ruotare il corpo in quel verso ha momento positivo; quella che tende al verso opposto ha momento negativo.
Un momento di 8 N m antiorario e uno di 3 N m orario danno un totale di 5 N m antiorario. Il segno dipende dalla tendenza di rotazione rispetto al punto scelto, non dal solo verso verticale della forza.
:::

## Equilibrio del corpo rigido

:::teorema{#equilibrio-rigido titolo="Forze e momenti devono annullarsi"}
Per un corpo rigido fermo nel piano, in un riferimento inerziale, occorre
$$
\begin{cases}
\sum F_x=0,\\
\sum F_y=0,\\
\sum M_O=0.
\end{cases}
$$
O è il punto rispetto al quale si calcolano i momenti. Quando la risultante è nulla, il momento totale non dipende dalla scelta di O. Conviene scegliere un punto su cui passa una forza incognita: quella forza ha momento nullo e non compare nella relativa equazione.
:::

## Leve

:::teorema{#leve titolo="Uguaglianza dei momenti opposti"}
Una leva ideale con due forze ai lati del fulcro, e peso proprio trascurabile oppure già equilibrato, soddisfa
$$
F_1b_1=F_2b_2.
$$
Per equilibrare 40 N con braccio 0,2 m usando un braccio di 0,8 m occorrono 10 N. Il rapporto fra forza resistente e motrice è il rapporto fra braccio motore e resistente.
I bracci sono distanze perpendicolari. Se la forza è obliqua alla leva, si può usare la componente perpendicolare moltiplicata per la distanza fra fulcro e punto di applicazione.

::grafico{assi=0 uguale=1 xmin=-2.5 xmax=5.5 ymin=-3 ymax=3.2 linee="-1.5,0 4.5,0;-0.35,-0.6 0,0 0.35,-0.6 -0.35,-0.6;-0.6,-0.7 0.6,-0.7" vettori="-1,0,-1,-2,F₁ = 40 N;4,0,4,-0.5,F₂ = 10 N;0,0,0,2.5,R = 50 N" punti="0,0" etichette="-0.65,0.55,0,2 m;2.2,0.55,0,8 m;0,-1.1,O" titolo="Leva di peso trascurabile: $40\cdot0{,}2=10\cdot0{,}8$. La reazione del fulcro, $R=50\,\mathrm N$, equilibra le due forze verso il basso"}
:::

## Coppie di forze

:::definizione{#coppie titolo="Risultante nulla e momento non nullo"}
Una **coppia** è formata da due forze parallele, uguali e opposte, con linee d'azione diverse. La risultante è nulla; il modulo del momento è $M_c=Fd$, dove d è la distanza fra le linee.
Due forze di 10 N distanti 0,2 m producono una coppia di 2 N m. Il momento della coppia non dipende dal punto rispetto al quale si calcola. Il corpo non è in equilibrio sotto l'effetto della sola coppia, anche se la somma delle forze è zero.
:::

## Travi con due appoggi

:::osservazione{#travi titolo="Ricavare le reazioni"}
Una trave orizzontale appoggiata agli estremi A e B riceve reazioni verticali $R_A$ e $R_B$. Prima si impone $R_A+R_B=P_{\mathrm{tot}}$; poi si annullano i momenti, per esempio rispetto ad A.
Una trave senza peso lunga 3 m porta un carico di 60 N a 1 m da A. Da $3R_B=60\cdot1$ si trova $R_B=20\,\mathrm N$; quindi $R_A=40\,\mathrm N$. Il peso proprio di una trave omogenea va applicato al centro e aggiunto ai carichi.
:::

## Baricentro

:::definizione{#baricentro titolo="Posizione della risultante dei pesi"}
In un campo gravitazionale uniforme il peso totale si può applicare al **baricentro**. Per due masse puntiformi lungo un asse,
$$
x_G=\frac{m_1x_1+m_2x_2}{m_1+m_2}.
$$
Due masse 1 kg e 2 kg poste a 0 e 3 m hanno baricentro a 2 m. Per un'asta omogenea il baricentro è il punto medio; per un corpo con distribuzione di massa non uniforme non basta osservare il centro geometrico.
:::

## Stabilità e ribaltamento

:::teorema{#stabilita titolo="La verticale del baricentro"}
Un corpo appoggiato, soggetto soltanto al peso e alle reazioni di sostegno, può mantenere l'equilibrio se la verticale del baricentro attraversa la base di appoggio. Quando raggiunge un bordo si raggiunge una configurazione limite; oltre il bordo il peso tende a ribaltare il corpo.
Con una spinta orizzontale applicata a quota h, si confrontano i momenti rispetto allo spigolo di ribaltamento. Per base larga w e baricentro centrale, alla soglia $Fh=P\,w/2$. Questa conclusione presuppone attrito sufficiente a evitare uno scorrimento precedente.
:::
"""
THEORY['pressione-fluidi']=r"""
:::percorso
Si combinano forze, superfici e densità.
La pressione descrive come una forza si distribuisce e come un liquido fermo trasmette le azioni.
I fluidi sono affrontati in prima in diversi percorsi e in seconda in altri; questo modulo prepara la spinta di Archimede.
:::

## Definizione di pressione

:::definizione{#pressione titolo="Forza normale per unità di area"}
Una forza perpendicolare distribuita uniformemente su area A produce pressione
$$
p=\frac{F_\perp}{A}.
$$
Per 100 N su 0,02 m² si ottengono 5000 Pa. Le formule inverse sono $F_\perp=pA$ e $A=F_\perp/p$ per pressione positiva.
In un fluido fermo la pressione in un punto non ha un verso privilegiato: la forza che produce su una parete è normale alla parete. Su superfici dove la pressione varia, usare un unico p richiede una pressione uniforme oppure un valore medio appropriato.
:::

## Unità della pressione

:::osservazione{#unita titolo="Pascal e conversioni delle aree"}
Il pascal è $1\,\mathrm{Pa}=1\,\mathrm{N/m^2}$. Si usano anche $1\,\mathrm{kPa}=1000\,\mathrm{Pa}$ e $1\,\mathrm{bar}=100000\,\mathrm{Pa}$.
Se la forza è in newton e l'area in centimetri quadrati, prima si converte l'area: $1\,\mathrm{cm}^2=10^{-4}\,\mathrm m^2$. Pertanto $1\,\mathrm{N/cm^2}=10000\,\mathrm{Pa}$. Il fattore è al denominatore, quindi una superficie espressa con un numero minore produce un valore numerico di pressione maggiore.
:::

## Legge di Stevino

::::teorema{#stevino titolo="Pressione e profondità"}
In un liquido fermo a densità costante, a profondità h sotto una superficie con pressione $p_0$,
$$
p=p_0+\rho gh.
$$
La profondità è una distanza verticale. Per acqua con $\rho=1000\,\mathrm{kg/m^3}$ e $g=10\,\mathrm{N/kg}$, scendere di un metro aumenta la pressione di 10000 Pa.

:::dimostrazione
Si considera una colonna verticale di liquido di area A e altezza h. Il liquido circostante esercita la forza $pA$ verso l'alto sulla base e $p_0A$ verso il basso sulla sommità. Il peso della colonna è $\rho Ahg$. L'equilibrio verticale richiede $pA-p_0A-\rho Ahg=0$; dividendo per A si ottiene la legge.
:::
::::

## Pressione assoluta e relativa

:::definizione{#assoluta titolo="Scegliere il riferimento"}
La **pressione assoluta** si riferisce al vuoto. La **pressione relativa** esprime la differenza rispetto a un riferimento, spesso l'atmosfera.
In un recipiente aperto, $p_{\mathrm{ass}}=p_{\mathrm{atm}}+\rho gh$ e $p_{\mathrm{rel}}=\rho gh$. Con atmosfera a 100000 Pa e incremento idrostatico di 20000 Pa, la pressione assoluta è 120000 Pa.
Una parete separa due pressioni: se entrambe sono uniformi sulla stessa area, la forza netta ha modulo $|p_1-p_2|A$. Una pressione comune ai due lati si cancella nella risultante.
:::

## Principio di Pascal

:::teorema{#pascal titolo="Trasmettere una variazione di pressione"}
Una variazione di pressione applicata a un fluido incomprimibile confinato viene trasmessa a tutto il fluido. In una pressa ideale con pistoni alla stessa quota, le forze aggiuntive soddisfano
$$
\frac{F_1}{A_1}=\frac{F_2}{A_2}.
$$
Un'area dieci volte maggiore produce una forza aggiuntiva dieci volte maggiore. Se i pistoni sono circolari, il rapporto delle aree è il quadrato del rapporto dei raggi. Le quote uguali e gli attriti trascurati sono ipotesi del modello usato.
:::

## Vasi comunicanti

:::teorema{#vasi titolo="Uguaglianza delle pressioni allo stesso livello"}
Nello stesso liquido fermo e comunicante, punti alla stessa quota hanno la stessa pressione. Con la stessa pressione sulle superfici libere, un unico liquido raggiunge lo stesso livello nei vari rami.
Per liquidi immiscibili diversi, le altezze possono essere diverse. Con superfici alla stessa pressione, l'uguaglianza rispetto a un livello comune dà $\rho_1gh_1=\rho_2gh_2$. Il liquido più denso richiede una colonna più bassa. Le altezze si misurano rispetto allo stesso livello, non rispetto a basi scelte separatamente.
:::

## Strati sovrapposti

:::osservazione{#strati titolo="Somma dei contributi idrostatici"}
Attraversando più strati di liquidi fermi verso il basso, ogni strato aggiunge $\rho_i gh_i$. La pressione è continua attraverso l'interfaccia, nel modello che trascura gli effetti di tensione superficiale.
Per 0,2 m d'olio a 800 kg/m³ sopra 0,3 m d'acqua a 1000 kg/m³, con g=10 N/kg, l'aumento complessivo è $1600+3000=4600\,\mathrm{Pa}$. Non si usa una sola densità per l'altezza totale, salvo definire opportunamente una media.
:::

## Manometri e barometri

:::osservazione{#manometri titolo="Colonne che misurano una pressione"}
Un manometro a U usa un dislivello verticale $\Delta h$ per misurare una differenza di pressione: $|\Delta p|=\rho g|\Delta h|$ nel caso semplice con lo stesso liquido.
Un barometro ideale con vuoto sopra la colonna soddisfa $p_{\mathrm{est}}=\rho gh$. Se sopra la colonna la pressione non fosse nulla, occorrerebbe sommarla al contributo idrostatico. La lunghezza inclinata del tubo non sostituisce l'altezza verticale della colonna.
:::
"""
THEORY['archimede-galleggiamento']=r"""
:::percorso
La pressione nei liquidi aumenta con la profondità.
La differenza delle forze di pressione genera una risultante verso l'alto.
Si combinano questa spinta e il peso per studiare immersione, letture dei dinamometri e galleggiamento.
:::

## Il principio di Archimede

::::teorema{#archimede titolo="Peso del fluido spostato"}
Un corpo immerso in un fluido in equilibrio riceve una spinta verso l'alto pari al peso del fluido spostato:
$$
F_A=\rho_f gV_i.
$$
$\rho_f$ è la densità del fluido e $V_i$ il volume immerso che sposta effettivamente il fluido. Per 2 L immersi in acqua a 1000 kg/m³, usando g=10 N/kg, la spinta è 20 N.

:::dimostrazione
Si immagina di sostituire la parte immersa del corpo con lo stesso volume di fluido circostante. Quel fluido sarebbe in equilibrio: la risultante delle pressioni sulle sue superfici equilibra il suo peso. Le pressioni dipendono dalla posizione delle superfici e restano le stesse quando al posto del fluido c'è il corpo. La loro risultante è quindi il peso di quel volume di fluido, diretto verso l'alto.
:::
::::

## Volume immerso e problemi inversi

:::osservazione{#inverse titolo="Identificare il volume che sposta fluido"}
Per trovare il volume immerso si usa $V_i=F_A/(\rho_f g)$; per trovare la densità del fluido, $\rho_f=F_A/(gV_i)$.
Se un corpo è completamente immerso, impermeabile e non poroso, il volume immerso coincide con il volume esterno. Con immersione parziale coincide solo con la parte sotto la superficie. Il volume della cavità di un oggetto aperto e pieno dello stesso liquido non va automaticamente contato come fluido spostato.
:::

## Peso apparente

:::teorema{#apparente titolo="La tensione del dinamometro"}
Un corpo appeso fermo a un dinamometro e immerso nel liquido soddisfa $T+F_A=P$, se il dinamometro tira verso l'alto. La lettura è
$$
T=P-F_A.
$$
Per peso 30 N e spinta 10 N si leggono 20 N. Il peso gravitazionale non è diminuito; il liquido contribuisce a sostenerlo. Trascurando la spinta dell'aria, la differenza fra lettura in aria e lettura nel liquido è la spinta.
:::

## Galleggiamento libero

:::teorema{#galleggiamento titolo="Spinta uguale al peso"}
Un corpo che galleggia fermo senza appoggi o altri vincoli soddisfa $F_A=P$. Per un corpo omogeneo di densità minore di quella del liquido, l'equilibrio si raggiunge con immersione parziale.
Se la densità del corpo supera quella del liquido, a completa immersione il peso supera la spinta. Con densità uguali, nel modello ideale il corpo può restare completamente immerso senza una preferenza di quota. Tensione superficiale, bolle e comprimibilità sono esclusi nei problemi di questo modulo.
:::

## Frazione immersa

:::teorema{#frazione titolo="Rapporto tra densità"}
Per un corpo omogeneo che galleggia, uguagliando peso e spinta si ottiene
$$
\rho_c Vg=\rho_f V_i g
\quad\Longrightarrow\quad
\frac{V_i}{V}=\frac{\rho_c}{\rho_f}.
$$
Un corpo di densità 600 kg/m³ in acqua di densità 1000 kg/m³ ha il 60% del volume immerso e il 40% emerso. La frazione si riferisce al volume; coincide con una frazione dell'altezza soltanto per una forma con sezione orizzontale costante.
:::

## Carichi sui galleggianti

:::teorema{#carichi titolo="Massa totale e volume disponibile"}
Una massa aggiunta a una piattaforma galleggiante richiede un volume immerso aggiuntivo $\Delta V=\Delta m/\rho_f$. Questo vale finché è possibile il galleggiamento libero e il carico non entra a sua volta in acqua.
Per un galleggiante rigido e stagno, alla completa immersione il massimo peso sostenibile è $\rho_f gV_{\max}$. La capacità di carico espressa in massa è $m_{\mathrm{carico,max}}=\rho_fV_{\max}-m_{\mathrm{galleggiante}}$. Dalla capacità totale va sottratta la massa propria del galleggiante.
:::

## Corpi vincolati

:::osservazione{#vincoli titolo="La corda può tirare verso l'alto o verso il basso"}
Se un corpo tende ad affondare, una corda fissata sopra può sostenere la parte di peso non equilibrata dalla spinta. Se tende a salire, una corda fissata al fondo deve invece tirare verso il basso.
Nel secondo caso $P+T=F_A$, quindi $T=F_A-P$. Per spinta 15 N e peso 9 N occorre una tensione di 6 N verso il basso. Un risultato con segno incompatibile con il verso assunto segnala che quella disposizione della corda non può sostenere l'equilibrio.
:::

## Confronti fra situazioni

:::osservazione{#confronti titolo="Quali fattori cambiano"}
Su un corpo rigido completamente immerso in un liquido a densità costante, lontano dal fondo, la spinta non cambia con la profondità: $\rho_f$, g e $V_i$ restano gli stessi. Due corpi impermeabili con uguale volume immerso nello stesso fluido ricevono la stessa spinta, anche se hanno masse e forme diverse.
Una barca che galleggia in un liquido più denso, a massa invariata, riceve ancora una spinta uguale al proprio peso. Cambia il volume immerso richiesto, che diminuisce. La distinzione fra corpo completamente immerso e corpo libero di galleggiare determina quale grandezza resta fissata.
:::
"""

if __name__ == '__main__':
    import argparse
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--audit',type=Path,help='Percorso del rapporto JSON facoltativo per revisione indipendente')
    args=parser.parse_args()
    generate(args.audit)
