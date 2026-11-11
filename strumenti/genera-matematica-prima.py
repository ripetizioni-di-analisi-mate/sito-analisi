#!/usr/bin/env python3
"""Contenuti originali di Matematica prima superiore, con calcoli esatti.

Ogni capitolo comprende 18 famiglie didattiche e cinque quesiti per famiglia.
I quesiti sono autonomi; le opzioni numeriche/algebriche sono confrontate con
Sympy prima della scrittura. Questo controllo affianca la revisione didattica.
"""
from pathlib import Path
import json, re, math, statistics
from dataclasses import dataclass
from collections import Counter
import sympy as S
import yaml

ROOT = Path(__file__).resolve().parents[1]
COURSE = 'matematica-superiori-1'
x,y,a,b = S.symbols('x y a b', real=True)
R = S.Rational

def tex(v):
    if isinstance(v,str): return v
    return S.latex(S.sympify(v)).replace(r'\frac',r'\dfrac')
def M(v): return '$'+tex(v)+'$'
def poly(v): return tex(S.expand(v))
def seq(v): return ', '.join(tex(i) for i in v)
def braces(v): return r'\{'+ ';'.join(tex(i) for i in sorted(v))+r'\}'
def same(a,b):
    if isinstance(a,str) or isinstance(b,str): return a==b
    if isinstance(a,S.Set) or isinstance(b,S.Set): return a==b
    # Tutte le alternative algebriche qui sono funzioni razionali: cancel
    # verifica esattamente l'identità senza le euristiche lente di simplify.
    return S.cancel(a-b)==0

@dataclass
class Question:
    prompt: str
    values: list
    explanation: str
    steps: str = ''
    unit: str = ''
    textual: bool = False
    def choices(self):
        if hasattr(self,'_selected'): return self._selected
        vals=[]
        for v in self.values:
            if not any(same(v,w) for w in vals): vals.append(v)
        assert len(vals)>=4,(self.prompt, vals)
        self._selected=vals[:4]
        return self._selected
    def show(self,v):
        return str(v) if self.textual else '$'+tex(v)+self.unit+'$'
    def solution(self): return self.show(self.values[0])

def N(p,ans,bad,e,steps='',unit=''):
    ans=S.sympify(ans)
    return Question(p,[ans,*map(S.sympify,bad)],e,steps,unit)
def T(p,ans,bad,e): return Question(p,[ans,*bad],e,textual=True)
def A(p,ans,bad,e,steps=''):
    return N(p,ans,bad,e,steps)

CHAPTERS = {}
def chapter(slug,title,summary,path,sections,families,generator,worked=None):
    CHAPTERS[slug]=dict(title=title,summary=summary,path=path,sections=sections,
        families=families,generator=generator,worked=worked or [0,2,4,6,8,10,12,15])

def numeri(f,k):
    n=k+2
    if f==0:
        ans=-n-4+2*n
        return N(rf'Calcola $-{n}-4+{2*n}$.',ans,[-3*n-4,3*n-4,n+4,4-n,n+3],
            rf'Si sommano prima i due addendi negativi, ottenendo $-{n+4}$. L’addendo positivo vale ${2*n}$. La somma algebrica è quindi ${ans}$.',rf'-{n}-4+{2*n}=-{n+4}+{2*n}={ans}')
    if f==1:
        ans=4*n-3
        return N(rf'Calcola ${n}-({-3*n}+3)$.',ans,[-2*n+3,4*n+3,-2*n-3,n-3],
            'Sottrarre una somma equivale a sommare gli opposti dei suoi addendi. Cambiano quindi entrambi i segni contenuti nell’espressione sottratta. Si raccolgono infine i termini numerici.',rf'{n}-(-{3*n}+3)={n}+{3*n}-3={ans}')
    if f==2:
        ans=3*n-2*(n+1)
        return N(rf'Calcola $3\cdot {n}-2\cdot({n}+1)$.',ans,[3*n-2*n+1,(3*n-2)*(n+1),3*n-2*n-1,3*n+2*(n+1)],
            'L’addizione fra i numeri raggruppati si esegue prima del prodotto esterno. I prodotti precedono poi la sottrazione. Si confrontano soltanto i due risultati ottenuti.',rf'3\cdot {n}-2\cdot {n+1}={3*n}-{2*(n+1)}={ans}')
    if f==3:
        ans=R(2*n+1,3*n)
        return N(rf'Calcola $\dfrac{{{n+1}}}{{{3*n}}}+\dfrac{{1}}{{3}}$.',ans,[R(n+2,3*n+3),R(n+2,3*n),R(2*n+1,6*n),R(n+1,n)],
            rf'Il denominatore comune è ${3*n}$. La seconda frazione diventa $\dfrac{{{n}}}{{{3*n}}}$. Si sommano i numeratori e si mantiene il denominatore comune.',rf'\frac{{{n+1}}}{{{3*n}}}+\frac13=\frac{{{n+1}+{n}}}{{{3*n}}}={tex(ans)}')
    if f==4:
        ans=R(3,2*n)
        return N(rf'Calcola $\dfrac{{9}}{{{2*n}}}\cdot\dfrac13$.',ans,[R(9,2*n+3),R(9,6*n*n),R(27,2*n),R(3,2*n+1)],
            'Il prodotto fra frazioni si calcola moltiplicando i numeratori e i denominatori. Il fattore comune tre può essere semplificato prima del prodotto. La frazione finale conserva esattamente lo stesso valore.',rf'\frac{{9}}{{{2*n}}}\cdot\frac13=\frac{{9}}{{{6*n}}}={tex(ans)}')
    if f==5:
        ans=R(3*(n+1),2*n)
        return N(rf'Calcola $\dfrac{{{n+1}}}{{{n}}}:\dfrac23$.',ans,[R(2*(n+1),3*n),R(3*n,2*(n+1)),R(n+1,2*n),R(3*(n+1),n)],
            'Il divisore è una frazione non nulla. Dividere per due terzi equivale a moltiplicare per tre mezzi. Si esegue quindi il prodotto e si riduce la frazione.',rf'\frac{{{n+1}}}{{{n}}}:\frac23=\frac{{{n+1}}}{{{n}}}\cdot\frac32={tex(ans)}')
    if f==6:
        u=6*n;v=9*n;ans=math.gcd(u,v)
        return N(rf'Qual è il massimo comune divisore di ${u}$ e ${v}$?',ans,[n,6*n,18*n,9*n],
            rf'I numeri si scrivono ${u}=3\cdot {n}\cdot2$ e ${v}=3\cdot {n}\cdot3$. I fattori residui due e tre sono coprimi. Il massimo divisore comune è quindi ${ans}$.',rf'\operatorname{{MCD}}({u},{v})={ans}')
    if f==7:
        u=4*n;v=6*n;ans=math.lcm(u,v)
        return N(rf'Due segnali si ripetono ogni ${u}$ e ${v}$ secondi e partono insieme. Dopo quanti secondi tornano insieme per la prima volta?',ans,[2*n,4*n,24*n,10*n],
            'Il tempo cercato deve essere un multiplo di entrambi i periodi. Il primo istante positivo con questa proprietà è il minimo comune multiplo. Poiché i periodi sono quattro e sei volte la stessa quantità, bastano dodici volte quella quantità.',rf'\operatorname{{mcm}}({u},{v})={ans}',r'\,\mathrm{s}')
    if f==8:
        ans=R(n,8)
        return N(rf'Quale frazione ridotta rappresenta il numero decimale ${str(n/8).replace(".","{,}")}$?',ans,[R(n,80),R(n,4),R(n+1,8),R(n,16)],
            'Un decimale finito rappresenta una frazione con denominatore una potenza di dieci. Numeratore e denominatore possono poi essere divisi per un fattore comune. La frazione ridotta deve restituire lo stesso decimale quando si esegue la divisione.',rf'{str(n/8).replace(".","{,}")}={tex(ans)}')
    if f==9:
        digit=(k%8)+1;ans=R(digit,9)
        return N(rf'Qual è la frazione generatrice di $0{{,}}\overline{{{digit}}}$?',ans,[R(digit,10),R(digit,99),R(digit+1,9),R(digit,90)],
            'Si indica il numero periodico con una lettera e lo si moltiplica per dieci. Sottraendo il numero iniziale, la parte periodica si elimina. La differenza dei due membri sinistri è nove volte il numero cercato.',rf'z=0{{,}}\overline{{{digit}}},\quad10z-z={digit},\quad z={tex(ans)}')
    if f==10:
        ans=R(2*n+1,2*n+2)
        return N(rf'Quale numero si trova esattamente a metà tra $\dfrac{{{n}}}{{{n+1}}}$ e $1$?',ans,[R(n,2*n+2),R(2*n+1,n+1),R(n+1,2*n+1),R(n,2*n+1)],
            'Il punto medio fra due numeri è la loro media aritmetica. Si sommano i due valori usando un denominatore comune. Si divide poi la somma per due.',rf'\frac12\left(\frac{{{n}}}{{{n+1}}}+1\right)={tex(ans)}')
    if f==11:
        ans=2*n+5
        return N(rf'Qual è la distanza sulla retta numerica tra $-{n}$ e ${n+5}$?',ans,[5,-2*n-5,n+5,2*n-5],
            'La distanza è il valore assoluto della differenza delle coordinate. Il punto positivo e quello negativo stanno da parti opposte dell’origine. Perciò le rispettive distanze dall’origine si sommano.',rf'|{n+5}-(-{n})|={ans}')
    if f==12:
        ans=7*(n-2)
        return N(rf'Si preparano pacchetti con 4 penne rosse e 3 blu usando ${4*n}$ rosse e ${3*n}$ blu. Dopo aver regalato 2 pacchetti, quante penne rimangono?',ans,[7*n-2,7*n,n-2,7*(n+2)],
            'Ogni pacchetto contiene sette penne e i materiali permettono di formare lo stesso numero di pacchetti per entrambi i colori. Regalare due pacchetti toglie quattordici penne. Il totale rimasto è quindi sette volte il numero dei pacchetti residui.',rf'\frac{{{4*n}}}4={n},\qquad({n}-2)\cdot7={ans}')
    if f==13:
        ans=-n*(n+1)
        return N(rf'Calcola $(-{n})\cdot({n+1})$.',ans,[n*(n+1),-2*n-1,-n*n,n*n+1],
            'I due fattori hanno segno opposto, quindi il prodotto è negativo. Il valore assoluto si ottiene moltiplicando i due valori positivi. Si applica il segno soltanto dopo aver determinato il modulo.',rf'(-{n})\cdot{n+1}=-({n}\cdot{n+1})={ans}')
    if f==14:
        ans=R(2*n,3)
        return N(rf'Una bottiglia contiene $\dfrac{{{n}}}3$ litri. Se se ne aggiunge una quantità uguale, quanti litri contiene?',ans,[R(n,6),R(2*n,6),R(n+1,3),R(n,9)],
            'Si sommano due quantità espresse nella stessa unità. I denominatori sono uguali, quindi si sommano soltanto i numeratori. Il totale è il doppio della quantità iniziale.',rf'\frac{{{n}}}3+\frac{{{n}}}3=\frac{{{2*n}}}3',r'\,\mathrm{L}')
    if f==15:
        ans=R(1,n*(n+1))
        return N(rf'Calcola $\dfrac1{{{n}}}-\dfrac1{{{n+1}}}$.',ans,[R(1,-1),R(2,2*n+1),R(1,n+1),R(1,n)],
            rf'Un denominatore comune è ${n*(n+1)}$. I numeratori diventano rispettivamente ${n+1}$ e ${n}$. La differenza dei numeratori vale uno.',rf'\frac1{{{n}}}-\frac1{{{n+1}}}=\frac{{{n+1}-{n}}}{{{n*(n+1)}}}={tex(ans)}')
    if f==16:
        ans=R(3*n+2,n)
        return N(rf'Calcola $3+\dfrac2{{{n}}}$ come unica frazione.',ans,[R(5,n),R(3,n+2),R(3*n-2,n),R(n+2,3)],
            'Per sommare l’intero alla frazione si esprime anche l’intero con lo stesso denominatore. Il numeratore dell’intero viene moltiplicato per quel denominatore. Si sommano quindi i numeratori.',rf'3+\frac2{{{n}}}=\frac{{{3*n}+2}}{{{n}}}={tex(ans)}')
    ans=2*n+1
    return N(rf'Quale numero intero rende vera l’uguaglianza $-{n}+z={n+1}$?',ans,[1,-2*n-1,2*n-1,n+1],
        rf'Si aggiunge ${n}$ a entrambi i membri dell’uguaglianza. Nel primo membro resta soltanto $z$. Si ottiene così il numero che, sommato al valore negativo iniziale, restituisce il valore richiesto.',rf'z={n+1}+{n}={ans}')

def potenze(f,k):
    n=k+2
    if f==0:
        ans=2**(k+3)
        return N(rf'Calcola $2^{k+1}\cdot2^2$.',ans,[2**(2*k+2),2**(k+1)+4,2**(k+1),2**(k+4)],
            'Le basi dei due fattori sono uguali. Nel prodotto di potenze con la stessa base si sommano gli esponenti. Si calcola infine la potenza ottenuta.',rf'2^{k+1}\cdot2^2=2^{{{k+1}+2}}=2^{k+3}={ans}')
    if f==1:
        ans=3**k
        return N(rf'Calcola $3^{k+2}:3^2$.',ans,[3**(k+4),3**(2*k+4),k,3**(k+1)],
            'La base è non nulla, quindi il quoziente è definito. Nel quoziente di potenze con la stessa base si sottrae l’esponente del divisore. Il valore finale si calcola con l’esponente rimasto.',rf'3^{k+2}:3^2=3^{{{k+2}-2}}=3^{k}={ans}')
    if f==2:
        ans=2**(2*k+2)
        return N(rf'Calcola $(2^{k+1})^2$.',ans,[2**(k+3),2**(k+1)*2,2**(2*k+3),2**k],
            'La potenza esterna indica che il fattore interno viene moltiplicato per se stesso. Gli esponenti di una potenza di potenza si moltiplicano. L’esponente complessivo è quindi il doppio di quello interno.',rf'(2^{k+1})^2=2^{{2\cdot{k+1}}}=2^{2*k+2}={ans}')
    if f==3:
        ans=R(1,n*n)
        return N(rf'Calcola ${n}^{{-2}}$.',ans,[-n*n,R(-1,n*n),R(1,2*n),n*n],
            'Un esponente negativo richiede il reciproco della potenza con esponente positivo. La base è non nulla. Si calcola il quadrato della base e poi se ne prende il reciproco.',rf'{n}^{{-2}}=\frac1{{{n}^2}}={tex(ans)}')
    if f==4:
        ans=-n*n
        return N(rf'Calcola $-{n}^2$, dove il segno meno non è incluso nella base della potenza.',ans,[n*n,-2*n,2*n,-n],
            'La potenza precede il segno meno posto davanti alla base. Si eleva quindi al quadrato il numero positivo. Il segno esterno produce infine il suo opposto.',rf'-{n}^2=-({n}\cdot{n})={ans}')
    if f==5:
        ans=10**(k+1)
        return N(rf'Quante volte ${n}\cdot10^{k+1}$ è maggiore di ${n}$?',ans,[k+1,10*k,10**k,n*10**(k+1)],
            'Il fattore di confronto è il rapporto fra le due quantità. Il fattore numerico comune si semplifica perché è non nullo. Resta la potenza di dieci indicata.',rf'\frac{{{n}\cdot10^{k+1}}}{{{n}}}=10^{k+1}={ans}')
    if f==6:
        ans=3*n
        return N(rf'Nella proporzione $2:3={2*n}:x$, quanto vale $x$?',ans,[R(4*n,3),6*n,n,3*n+1],
            'In una proporzione il prodotto dei medi uguaglia quello degli estremi. Si ottiene un’equazione con il fattore due davanti all’incognita. Dividendo entrambi i membri per due si determina il termine cercato.',rf'2x=3\cdot{2*n},\qquad x={ans}')
    if f==7:
        ans=5*n
        return N(rf'${n}$ quaderni costano ${3*n}$ euro. Quanto costano ${5*n}$ quaderni allo stesso prezzo unitario?',ans*3,[ans,3*n,15*n+3,3*n*n],
            'Il prezzo di un quaderno è il costo totale diviso per il numero di quaderni. Il prezzo unitario vale tre euro. Il nuovo costo è il prodotto di questo prezzo per la nuova quantità.',rf'\frac{{{3*n}}}{{{n}}}=3,\qquad 3\cdot{5*n}={15*n}',r'\,\text{euro}')
    if f==8:
        ans=2*n
        return N(rf'Per completare lo stesso lavoro, 3 macchine identiche impiegano ${4*n}$ ore. Quante ore impiegano 6 macchine, lavorando con lo stesso ritmo?',ans,[8*n,4*n,6*n,n],
            'Per un lavoro fissato il prodotto fra numero di macchine e tempo resta costante. Raddoppiando le macchine si dimezza il tempo. Si divide quindi la durata iniziale per due.',rf'3\cdot{4*n}=6t,\qquad t={ans}',r'\,\mathrm{h}')
    if f==9:
        ans=5*n
        return N(rf'Calcola il $25\%$ di ${20*n}$.',ans,[25*n,15*n,R(n,4),20*n-25],
            'La percentuale venticinque su cento equivale a un quarto. La quantità richiesta è quindi un quarto del totale. Dividendo il totale per quattro si ottiene il risultato.',rf'\frac{{25}}{{100}}\cdot{20*n}={ans}')
    if f==10:
        ans=16*n
        return N(rf'Un articolo costa ${20*n}$ euro e viene scontato del $20\%$. Qual è il prezzo finale?',ans,[4*n,24*n,20*n-20,18*n],
            'Lo sconto è il venti per cento del prezzo iniziale. Il prezzo finale è l’ottanta per cento del prezzo iniziale. Si moltiplica pertanto il prezzo per ottanta centesimi.',rf'{20*n}\left(1-\frac{{20}}{{100}}\right)={ans}',r'\,\text{euro}')
    if f==11:
        ans=11*n
        return N(rf'Una quantità iniziale di ${10*n}$ aumenta del $10\%$. Qual è il nuovo valore?',ans,[n,9*n,10*n+10,20*n],
            'L’aumento percentuale si calcola sul valore iniziale. Il dieci per cento di quel valore si aggiunge al totale di partenza. Il nuovo valore è quindi il centodieci per cento dell’iniziale.',rf'{10*n}+\frac{{10}}{{100}}\cdot{10*n}={ans}')
    if f==12:
        ans=10*n
        return N(rf'Dopo uno sconto del $20\%$, un prezzo è diventato ${8*n}$ euro. Qual era il prezzo prima dello sconto?',ans,[R(32*n,5),R(48*n,5),8*n+20,40*n],
            'Il prezzo pagato corrisponde all’ottanta per cento del prezzo iniziale. Per recuperare il prezzo iniziale si divide per ottanta centesimi. Aggiungere il venti per cento al prezzo già ridotto userebbe una base diversa.',rf'P\cdot\frac45={8*n},\qquad P={8*n}\cdot\frac54={ans}',r'\,\text{euro}')
    if f==13:
        ans=R(99*n,1)
        return N(rf'Un valore iniziale di ${100*n}$ aumenta del $10\%$ e poi diminuisce del $10\%$ sul nuovo valore. Quanto vale alla fine?',ans,[100*n,90*n,110*n,98*n],
            'Le due percentuali si applicano a basi diverse. Il primo fattore è undici decimi e il secondo è nove decimi. Il prodotto dei due fattori vale novantanove centesimi.',rf'{100*n}\cdot\frac{{11}}{{10}}\cdot\frac9{{10}}={ans}')
    if f==14:
        ans=R(3*n,2)
        return N(rf'Su una mappa in scala $1:50000$, una distanza misura ${3*n}$ cm. A quanti chilometri corrisponde nella realtà?',ans,[150*n,15*n,R(3*n,20),3*n*50000],
            'Ogni centimetro sulla mappa corrisponde a cinquantamila centimetri reali. Questi equivalgono a cinquecento metri, cioè mezzo chilometro. Si moltiplica la misura sulla mappa per mezzo chilometro.',rf'{3*n}\cdot50000\,\mathrm{{cm}}={tex(ans)}\,\mathrm{{km}}',r'\,\mathrm{km}')
    if f==15:
        ans=3*n
        return N(rf'Due persone si dividono ${5*n}$ euro nel rapporto $2:3$. Quanti euro spettano alla seconda?',ans,[2*n,5*n,R(5*n,3),5*n-3],
            'Il rapporto indica cinque parti complessive, due per la prima persona e tre per la seconda. Ogni parte vale il totale diviso per cinque. Alla seconda persona spettano tre parti.',rf'\frac{{{5*n}}}{{2+3}}={n},\qquad3\cdot{n}={ans}',r'\,\text{euro}')
    if f==16:
        ans=20
        return N(rf'In una classe di ${5*n}$ studenti, ${n}$ partecipano a un laboratorio. Quale percentuale della classe partecipa?',ans,[5,n,80,25],
            'La frequenza relativa è il numero dei partecipanti diviso per il totale della classe. Il rapporto si riduce a un quinto. Moltiplicandolo per cento si ottiene la percentuale.',rf'\frac{{{n}}}{{{5*n}}}\cdot100=20',r'\%')
    ans=R(7*n,2)
    return N(rf'Una ricetta per 4 persone richiede ${2*n}$ etti di farina. Quanti etti servono per 7 persone mantenendo le stesse proporzioni?',ans,[R(8*n,7),14*n,R(7*n,4),2*n+3],
        'La quantità per persona è un quarto della dose indicata. Moltiplicando quella quantità per sette si ottiene la dose richiesta. Il rapporto fra nuova e vecchia dose è sette quarti.',rf'{2*n}\cdot\frac74={tex(ans)}',r'\,\mathrm{hg}')

def insiemi(f,k):
    n=k+2; A=S.FiniteSet(n,n+1,n+2); B=S.FiniteSet(n+2,n+3); U=S.FiniteSet(*range(n,n+6))
    common=rf'Siano $A={tex(A)}$ e $B={tex(B)}$. '
    if f==0:
        return N(common+r'Qual è $A\cup B$?',A|B,[A&B,A-B,B-A,U],
            'L’unione contiene gli elementi che appartengono ad almeno uno dei due insiemi. L’elemento comune si scrive una sola volta. Si elencano quindi tutti gli elementi presenti in uno o nell’altro insieme.')
    if f==1:
        return N(common+r'Qual è $A\cap B$?',A&B,[A|B,A-B,B-A,S.EmptySet],
            'L’intersezione contiene gli elementi presenti in entrambi gli insiemi. Si confrontano uno per uno gli elementi dei due elenchi. Soltanto l’elemento comune soddisfa le due appartenenze.')
    if f==2:
        return N(common+r'Qual è $A\setminus B$?',A-B,[B-A,A&B,A|B,S.EmptySet],
            'La differenza contiene gli elementi di A che non appartengono a B. Si parte quindi dall’elenco di A. L’elemento che compare anche in B viene eliminato.')
    if f==3:
        return N(rf'Nell’universo $U={tex(U)}$, sia $A={tex(A)}$. Qual è il complementare di $A$ rispetto a $U$?',U-A,[A,U,A&S.FiniteSet(n+2),S.FiniteSet(n+4,n+5)],
            'Il complementare dipende dall’insieme universo dichiarato. Si prendono tutti gli elementi di U e si eliminano quelli che appartengono ad A. Gli elementi rimasti formano il complementare.')
    if f==4:
        domain=S.FiniteSet(n,n+1,n+2)
        good=rf'$\{{({n};1),({n+1};2),({n+2};2)\}}$'
        return T(rf'Il dominio è $A={tex(domain)}$ e il codominio è $B=\{{1;2;3\}}$. Quale relazione, scritta come insieme di coppie ordinate, è una funzione da $A$ a $B$?',good,
            [rf'$\{{({n};1),({n};2),({n+1};2),({n+2};3)\}}$',rf'$\{{({n};1),({n+1};2)\}}$',rf'$\{{({n};1),({n+1};2),({n+2};4)\}}$'],
            'Una funzione assegna a ogni elemento del dominio una sola immagine nel codominio. Nella relazione corretta ciascun primo elemento compare una volta e ogni secondo elemento appartiene a B. È consentito che due elementi diversi del dominio abbiano la stessa immagine.')
    if f==5:
        return N(rf'Un insieme $A$ ha ${n}$ elementi e $B$ ne ha ${n+1}$. Quante coppie ordinate contiene $A\times B$?',n*(n+1),[2*n+1,n*n,n+1,2**n],
            'Il prodotto cartesiano contiene tutte le coppie con primo elemento in A e secondo in B. A ciascun elemento di A si associano tutti gli elementi di B. Le due numerosità si moltiplicano.',rf'|A\times B|={n}\cdot{n+1}={n*(n+1)}')
    if f==6:
        return N(rf'In un gruppo di ${5*n}$ ragazzi, ${3*n}$ studiano inglese, ${2*n}$ francese e ${n}$ entrambe le lingue. Quanti studiano almeno una delle due?',4*n,[5*n,n,6*n,3*n],
            'Sommando i due gruppi, chi studia entrambe le lingue viene contato due volte. Si sottrae quindi una volta l’intersezione. Il risultato conta ciascuno studente una sola volta.',rf'{3*n}+{2*n}-{n}={4*n}')
    if f==7:
        return N(rf'In una classe di ${6*n}$ studenti, ${4*n}$ praticano almeno uno fra nuoto e tennis. Quanti non praticano nessuno dei due sport?',2*n,[4*n,6*n,10*n,n],
            'Il gruppo che pratica almeno uno sport e il suo complementare dividono la classe in due parti disgiunte. La numerosità del complementare è il totale meno il numero già contato. Si sottrae quindi il gruppo di praticanti dal totale.',rf'{6*n}-{4*n}={2*n}')
    if f==8:
        return N(rf'Due insiemi disgiunti hanno rispettivamente ${2*n}$ e ${3*n}$ elementi. Quanti elementi ha la loro unione?',5*n,[n,6*n*n,0,3*n],
            'Due insiemi disgiunti non hanno elementi comuni. Nell’unione non ci sono elementi da sottrarre per evitare un doppio conteggio. La numerosità dell’unione è quindi la somma delle numerosità.',rf'|A\cup B|={2*n}+{3*n}={5*n}')
    if f==9:
        return T(rf'Sia $A={tex(A)}$. Quale affermazione è vera?',M(n+1)+r' $\in A$',[M(n+3)+r' $\in A$',M(n)+r' $\notin A$',M(n+2)+r' $\notin A$'],
            'Il simbolo di appartenenza confronta un elemento con un insieme. Nell’elenco di A compare il numero indicato dalla risposta corretta. Le altre affermazioni attribuiscono o negano un’appartenenza incompatibile con l’elenco.')
    if f==10:
        C=S.FiniteSet(n,n+1)
        return T(rf'Siano $C={tex(C)}$ e $D={tex(A)}$. Quale relazione è vera?',r'$C\subsetneq D$',[r'$D\subseteq C$',r'$C=D$',r'$C\cap D=\varnothing$'],
            'Ogni elemento di C compare in D. D contiene però anche un elemento che non compare in C. Perciò C è un sottoinsieme proprio di D.')
    if f==11:
        return T(rf'La proposizione $p$ afferma «${n}$ è maggiore di ${n-1}$», mentre $q$ afferma «${n}$ è minore di ${n-2}$». Qual è il valore di verità di $p\land q$?',
            'Falso, perché la congiunzione richiede entrambe le proposizioni vere',
            ['Vero, perché basta che una proposizione sia vera','Vero, perché p è vera','Non determinabile con i dati forniti'],
            'La proposizione p è vera e q è falsa. La congiunzione è vera soltanto quando entrambi i componenti sono veri. Poiché uno dei componenti è falso, la congiunzione è falsa.')
    if f==12:
        return T(rf'Per un numero reale $x$, qual è la negazione di $x>{n}$?',M(rf'x\le {n}'),[M(rf'x<{n}'),M(rf'x\ge {n}'),M(rf'x\ne {n}')],
            'La negazione deve includere tutti e soli i casi in cui la proposizione iniziale è falsa. Un numero non maggiore della soglia può essere minore oppure uguale alla soglia. Il caso di uguaglianza va quindi incluso.')
    if f==13:
        return T(rf'Qual è la negazione della frase «Tutti i ${n}$ studenti del gruppo hanno consegnato»?',
            'Almeno uno studente del gruppo non ha consegnato',
            ['Nessuno studente del gruppo ha consegnato','Tutti gli studenti hanno consegnato in ritardo','Esattamente uno studente del gruppo ha consegnato'],
            'Per rendere falsa una frase riferita a tutti basta un solo controesempio. Non è necessario che nessuno abbia consegnato. La negazione afferma quindi l’esistenza di almeno una mancata consegna.')
    if f==14:
        return T(rf'Qual è la negazione della frase «Esiste un intero maggiore di ${n}$ che soddisfa la proprietà P»?',
            rf'Nessun intero maggiore di {n} soddisfa P',
            [rf'Tutti gli interi maggiori di {n} soddisfano P',rf'Esattamente un intero maggiore di {n} soddisfa P',rf'Esiste un intero minore di {n} che soddisfa P'],
            'La proposizione iniziale richiede almeno un esempio nel dominio indicato. Per negarla si deve escludere ogni esempio in quel dominio. Non basta cambiare il dominio cercando numeri più piccoli.')
    if f==15:
        ans=2-k
        return N(rf'La funzione $f:\mathbb R\to\mathbb R$ è definita da $f(x)=2x+{n}$. Qual è l’immagine di $-{k}$?',ans,[2*k+n,-2*k-n,2*(n-k),-k+n],
            'L’immagine si trova applicando la regola della funzione al valore indicato. Si sostituisce quel valore alla variabile e si esegue prima il prodotto. Si aggiunge poi il termine costante.',rf'f(-{k})=2(-{k})+{n}={ans}')
    if f==16:
        C=S.FiniteSet(*range(n,n+4));D=S.FiniteSet(n,n+2);E=S.FiniteSet(n+1,n+2)
        return N(rf'Siano $U={tex(C)}$, $A={tex(D)}$, $B={tex(E)}$. Qual è $U\setminus(A\cup B)$?',C-(D|E),[D|E,C-(D&E),D&E,C],
            'Si costruisce prima l’unione dei due insiemi interni. Si elimina poi dall’universo ciascun elemento di quell’unione. Il risultato contiene gli elementi che non appartengono né ad A né a B.')
    D=S.FiniteSet(n,n+1);E=S.FiniteSet(n+2,n+3)
    return T(rf'Siano $A={tex(D)}$ e $B={tex(E)}$. Quale coppia appartiene ad $A\times B$?',
        M(rf'({n};{n+2})'),[M(rf'({n+2};{n})'),M(rf'({n};{n+1})'),M(rf'({n+2};{n+3})')],
        'In una coppia ordinata del prodotto cartesiano, il primo elemento deve appartenere al primo insieme. Il secondo deve appartenere al secondo insieme. Scambiare l’ordine può quindi cambiare l’appartenenza al prodotto.')

def monomi(f,k):
    n=k+2
    if f==0:
        ans=3*n-2
        return N(rf'Qual è il coefficiente di $x^2y$ nella somma ${n}x^2y+{2*n}x^2y-2x^2y$?',ans,[3*n+2,n,2*n-2,3*n],
            'I tre monomi hanno la stessa parte letterale e sono quindi simili. Si sommano soltanto i coefficienti. La parte letterale resta invariata.',rf'{n}+{2*n}-2={ans}')
    if f==1:
        ans=-2*n*x**(k+1)*y**3
        return A(rf'Esegui $({n}x^{k}y)\cdot(-2xy^2)$.',ans,[2*n*x**(k+1)*y**3,-2*n*x**k*y**2,(n-2)*x**(k+1)*y**3,-2*n*x**(k+2)*y**3],
            'Si moltiplicano separatamente i coefficienti e le parti letterali. Per ciascuna lettera si sommano gli esponenti dei due fattori. Il coefficiente è negativo perché i coefficienti iniziali hanno segno opposto.',rf'{n}\cdot(-2)=-{2*n},\qquad x^{k}x=x^{k+1},\qquad yy^2=y^3')
    if f==2:
        ans=3*x**k*y**2
        return A(rf'Per $x\ne0$ e $y\ne0$, semplifica $\dfrac{{{3*n}x^{k+2}y^3}}{{{n}x^2y}}$.',ans,[3*x**(k+4)*y**4,3*x**k*y**3,n*x**k*y**2,R(1,3)*x**k*y**2],
            'Il denominatore è non nullo per le condizioni dichiarate. Si dividono i coefficienti e si sottraggono gli esponenti delle lettere uguali. Le condizioni iniziali restano valide anche dopo la semplificazione.',rf'\frac{{{3*n}}}{{{n}}}=3,\qquad x^{{{k+2}-2}}=x^{k},\qquad y^{{3-1}}=y^2')
    if f==3:
        ans=n*n*x**(2*k)*y**2
        return A(rf'Eleva al quadrato il monomio $-{n}x^{k}y$.',ans,[-n*n*x**(2*k)*y**2,n*n*x**(k+2)*y**2,2*n*x**(2*k)*y**2,n*n*x**k*y],
            'Il quadrato di un prodotto è il prodotto dei quadrati dei suoi fattori. Il coefficiente negativo diventa positivo. Gli esponenti della parte letterale raddoppiano.',rf'(-{n}x^{k}y)^2={n*n}x^{2*k}y^2')
    if f==4:
        return N(rf'Qual è il grado complessivo del monomio $-{n}x^{k+1}y^3$?',k+4,[k+1,3,k+3,n],
            'Il grado complessivo di un monomio non nullo è la somma degli esponenti delle lettere. Il coefficiente numerico non entra nel conteggio. Si sommano quindi i due esponenti.',rf'({k+1})+3={k+4}')
    if f==5:
        ans=n*x**2+(n+1)*x-2
        p=n*x**2+2*x+1;q=(n-1)*x-3
        return A(rf'Riduci la somma $({poly(p)})+({poly(q)})$.',ans,[n*x**2+(n-3)*x+4,n*x**2+(n+1)*x+4,(2*n-1)*x**2-2,n*x**2+(n+3)*x-2],
            'Si eliminano i raggruppamenti preceduti dal segno più. Si raccolgono separatamente i termini di secondo grado, quelli di primo grado e i termini costanti. Ogni somma conserva la propria parte letterale.',rf'({poly(p)})+({poly(q)})={poly(ans)}')
    if f==6:
        p=n*x**2+3*x+1;q=2*x**2-x+n;ans=S.expand(p-q)
        return A(rf'Riduci $({poly(p)})-({poly(q)})$.',ans,[p+q,(n-2)*x**2+2*x+1-n,(n+2)*x**2+4*x+1-n,(n-2)*x**2+4*x+1+n],
            'Sottrarre un polinomio cambia il segno di tutti i suoi termini. Dopo il cambio di segno si sommano i termini simili. Anche il termine costante del polinomio sottratto cambia segno.',rf'({poly(p)})-({poly(q)})={poly(ans)}')
    if f==7:
        ans=n*x**3-2*n*x**2+3*n*x
        return A(rf'Sviluppa ${n}x(x^2-2x+3)$.',ans,[n*x**3-2*x+3,n*x**3+2*n*x**2+3*n*x,n*x**3-2*n*x+3*n,n*x**2-2*n*x+3*n],
            'La proprietà distributiva applica il monomio a ogni termine del polinomio. In ciascun prodotto si moltiplicano i coefficienti e si sommano gli esponenti di x. Si mantengono i segni dei termini interni.',rf'{n}x(x^2-2x+3)={poly(ans)}')
    if f==8:
        ans=x**2+(n+2)*x+2*n
        return A(rf'Sviluppa $(x+{n})(x+2)$.',ans,[x**2+2*n,(2*x+n)*(x+2),x**2+(n-2)*x+2*n,x**2+(n+2)*x+n+2],
            'Ogni termine del primo fattore moltiplica entrambi i termini del secondo. Si ottengono quattro prodotti. I due prodotti di primo grado sono simili e si sommano.',rf'(x+{n})(x+2)=x^2+2x+{n}x+{2*n}={poly(ans)}')
    if f==9:
        p=2*x**2-3*x+n;val=-k;ans=p.subs(x,val)
        return N(rf'Per $P(x)={poly(p)}$, calcola $P({val})$.',ans,[2*k*k-3*k+n,-2*k*k+3*k+n,2*k+3*k+n,2*k*k+n],
            'Si sostituisce lo stesso valore in tutte le occorrenze della lettera. Il quadrato di un numero negativo è positivo. Il termine lineare con coefficiente negativo cambia invece segno quando il valore sostituito è negativo.',rf'P({val})=2\cdot({val})^2-3\cdot({val})+{n}={ans}')
    if f==10:
        p=n*x**3-2*x**2+(n+1)*x-7
        return N(rf'Qual è il termine noto del polinomio $P(x)={poly(p)}$?',-7,[n,n+1,-2,7],
            'Il termine noto è quello che non contiene la variabile. È anche il valore del polinomio quando la variabile è zero. Tutti gli altri termini si annullano in quella sostituzione.',rf'P(0)=-7')
    if f==11:
        p=n*x**4+3*x**2-(n-1)*x**4+x
        return N(rf'Qual è il grado di $P(x)={n}x^4+3x^2-{n-1}x^4+x$ dopo la riduzione?',4,[2,1,8,3],
            'Il grado si valuta dopo aver sommato i termini simili. I due coefficienti di quarto grado hanno differenza uno, quindi quel termine non si annulla. Il massimo esponente rimasto è quattro.',rf'P(x)=x^4+3x^2+x')
    if f==12:
        ans=2*n*(x+y)
        return A(rf'Un rettangolo ha lati ${n}x$ e ${n}y$, con $x,y>0$. Quale espressione dà il suo perimetro?',ans,[n*(x+y),n*n*x*y,2*n*x+n*y,4*n*x*y],
            'Il perimetro è la somma dei quattro lati. I lati opposti del rettangolo hanno la stessa lunghezza. Ciascuna delle due misure compare quindi due volte.',rf'P={n}x+{n}y+{n}x+{n}y={poly(ans)}')
    if f==13:
        ans=2*n*x**2+3*n*x
        return A(rf'Un rettangolo ha base ${n}x$ e altezza $2x+3$, con $x>0$. Qual è la sua area?',ans,[2*n*x**2+3,2*n*x+3*n,2*(n*x+2*x+3),2*n*x**2-3*n*x],
            'L’area del rettangolo è il prodotto della base per l’altezza. Si applica la proprietà distributiva al prodotto fra monomio e binomio. Ogni termine rappresenta un contributo alla stessa area.',rf'A={n}x(2x+3)={poly(ans)}')
    if f==14:
        ans=n
        return N(rf'Per quale valore di $c$ i monomi $({n+2}-c)x^2$ e $2x^2$ sono uguali per ogni $x$?',ans,[n+4,2-n,n+2,2],
            'Due monomi con la stessa parte letterale sono identici quando i coefficienti coincidono. Si uguaglia quindi il coefficiente variabile a due. La semplice equazione numerica determina c.',rf'{n+2}-c=2,\qquad c={n}')
    if f==15:
        ans=R(1,2)*x**2+(n-1)*x
        p=R(3,2)*x**2+n*x;q=x**2+x
        return A(rf'Riduci $({tex(p)})-({tex(q)})$.',ans,[R(5,2)*x**2+(n+1)*x,R(1,2)*x**2+(n+1)*x,R(3,2)*x**2+(n-1)*x,-R(1,2)*x**2+(n-1)*x],
            'Si sottraggono i coefficienti dei termini di secondo grado e quelli dei termini di primo grado. La sottrazione fra tre mezzi e uno richiede un denominatore comune. Le due parti letterali restano separate.',rf'\left(\frac32-1\right)x^2+({n}-1)x={tex(ans)}')
    if f==16:
        ans=n*x**2*y
        return A(rf'Quale monomio deve essere aggiunto a $2x^2y$ per ottenere ${n+2}x^2y$?',ans,[n*x*y**2,(n+4)*x**2*y,(n+2)*x**2*y,-n*x**2*y],
            'Il monomio mancante deve avere la stessa parte letterale della somma richiesta. Il suo coefficiente è la differenza fra il coefficiente finale e quello già presente. La verifica consiste nel sommare nuovamente i due coefficienti.',rf'({n+2}-2)x^2y={tex(ans)}')
    ans=-x**2+n*x-1
    return A(rf'Qual è l’opposto del polinomio $x^2-{n}x+1$?',ans,[x**2+n*x+1,-x**2-n*x-1,-x**2+n*x+1,x**2-n*x-1],
        'L’opposto di un polinomio si ottiene moltiplicando tutti i termini per meno uno. Cambia quindi il segno di ciascun coefficiente. Sommando il polinomio e il suo opposto si ottiene il polinomio nullo.',rf'-(x^2-{n}x+1)={poly(ans)}')

def notevoli(f,k):
    n=k+2
    if f==0:
        ans=(x+n)**2
        return A(rf'Qual è lo sviluppo di $(x+{n})^2$?',S.expand(ans),[x*x+n*n,x*x+n*x+n*n,x*x+2*n*x-n*n,x*x-2*n*x+n*n],
            'Il quadrato di una somma contiene i quadrati dei due termini e il doppio del loro prodotto. Il doppio prodotto ha segno positivo. Si scrivono quindi tutti e tre i termini.',rf'(x+{n})^2=x^2+2\cdot{n}x+{n*n}={poly(ans)}')
    if f==1:
        ans=(x-n)**2
        return A(rf'Sviluppa $(x-{n})^2$.',S.expand(ans),[x*x-n*n,x*x+2*n*x+n*n,x*x-n*x+n*n,x*x-2*n*x-n*n],
            'Nel quadrato di una differenza il doppio prodotto è negativo. I quadrati dei due termini restano positivi. Il termine noto è quindi il quadrato del numero sottratto.',rf'(x-{n})^2=x^2-{2*n}x+{n*n}')
    if f==2:
        ans=x*x-n*n
        return A(rf'Calcola $(x+{n})(x-{n})$.',ans,[x*x+n*n,x*x-2*n*x+n*n,x*x+2*n*x-n*n,2*x-2*n],
            'Il prodotto di una somma per la corrispondente differenza è una differenza di quadrati. Nello sviluppo i due prodotti misti hanno segno opposto e si eliminano. Rimangono il quadrato della lettera e l’opposto del quadrato del numero.',rf'(x+{n})(x-{n})=x^2-{n*n}')
    if f==3:
        ans=(2*x+n)**2
        return A(rf'Sviluppa $(2x+{n})^2$.',S.expand(ans),[2*x*x+2*n*x+n*n,4*x*x+2*n*x+n*n,4*x*x+n*n,4*x*x+4*n*x-n*n],
            'Il primo termine è due volte x, quindi il suo quadrato è quattro volte x al quadrato. Il doppio prodotto contiene anche quel fattore due. Il quadrato del secondo termine completa lo sviluppo.',rf'(2x+{n})^2=4x^2+{4*n}x+{n*n}')
    if f==4:
        ans=(x+n)**3
        return A(rf'Qual è lo sviluppo di $(x+{n})^3$?',S.expand(ans),[x**3+n**3,x**3+n*x*x+n*n*x+n**3,x**3+3*n*x*x+3*n*n*x-n**3,x**3+3*n*x*x+n**3],
            'Il cubo di un binomio si ottiene moltiplicando il suo quadrato per il binomio stesso. I termini di secondo e di primo grado ricevono tre contributi uguali. I coefficienti risultano uno, tre, tre e uno.',rf'(x+{n})^3=x^3+{3*n}x^2+{3*n*n}x+{n**3}')
    if f==5:
        ans=(x-n)**3
        return A(rf'Sviluppa $(x-{n})^3$.',S.expand(ans),[x**3-n**3,x**3+3*n*x*x+3*n*n*x-n**3,x**3-3*n*x*x-3*n*n*x-n**3,x**3-3*n*x*x+3*n*n*x+n**3],
            'Si applica il cubo della somma trattando il secondo termine come un numero negativo. I termini con una potenza dispari di quel numero hanno segno negativo. Il termine che contiene il suo quadrato ha invece segno positivo.',rf'(x-{n})^3=x^3-{3*n}x^2+{3*n*n}x-{n**3}')
    if f==6:
        ans=2*n
        return N(rf'Quale coefficiente deve sostituire $c$ perché $x^2+cx+{n*n}$ sia uguale a $(x+{n})^2$ per ogni $x$?',ans,[n,n*n,2*n*n,-2*n],
            'Si sviluppa il quadrato del binomio. Il coefficiente del termine di primo grado è il doppio del numero sommato a x. L’identità richiede lo stesso coefficiente nei due polinomi.',rf'(x+{n})^2=x^2+{2*n}x+{n*n},\qquad c={ans}')
    if f==7:
        ans=n*n
        return N(rf'Quale termine costante completa $x^2-{2*n}x+\square=(x-{n})^2$?',ans,[-n*n,2*n,n,4*n*n],
            'Il termine lineare già coincide con il doppio prodotto negativo. Manca il quadrato del secondo termine del binomio. Tale quadrato è sempre non negativo.',rf'(x-{n})^2=x^2-{2*n}x+{n*n}')
    if f==8:
        ans=(10+n)**2
        return N(rf'Calcola ${10+n}^2$ usando ${10+n}=10+{n}$.',ans,[100+n*n,100+10*n+n*n,100+2*n+n*n,100+20*n-n*n],
            'Si considera il numero come somma di dieci e del secondo addendo. Il quadrato comprende anche il doppio prodotto dei due addendi. Si sommano infine i tre contributi numerici.',rf'(10+{n})^2=100+{20*n}+{n*n}={ans}')
    if f==9:
        ans=10000-n*n
        return N(rf'Calcola ${100+n}\cdot{100-n}$ usando un prodotto notevole.',ans,[10000+n*n,10000-2*n,100-n*n,10000-n],
            'I due fattori sono la somma e la differenza dello stesso numero rispetto a cento. Il loro prodotto è la differenza dei quadrati. Si sottrae il quadrato del numero dal quadrato di cento.',rf'(100+{n})(100-{n})=10000-{n*n}={ans}')
    if f==10:
        ans=(x+y+n)**2
        return A(rf'Sviluppa $(x+y+{n})^2$.',S.expand(ans),[x*x+y*y+n*n,x*x+y*y+n*n+2*x*y,x*x+y*y+n*n+x*y+n*x+n*y,x*x+y*y+n*n+2*x*y+2*n*x-2*n*y],
            'Il quadrato di una somma di tre termini contiene i tre quadrati e tre doppi prodotti. Ogni coppia di termini compare una volta nel gruppo dei doppi prodotti. Si mantengono tutti questi contributi.',rf'(x+y+{n})^2=x^2+y^2+{n*n}+2xy+{2*n}x+{2*n}y')
    if f==11:
        ans=4*n*x
        return A(rf'Semplifica $(x+{n})^2-(x-{n})^2$.',ans,[2*n*x,2*x*x+2*n*n,0,4*n*n],
            'Si sviluppano i due quadrati mantenendo il segno meno davanti al secondo. I termini quadratici e i termini costanti si annullano. I termini lineari si sommano perché il secondo doppio prodotto viene sottratto con il suo segno negativo.',rf'(x^2+{2*n}x+{n*n})-(x^2-{2*n}x+{n*n})={4*n}x')
    if f==12:
        ans=2*x*x+2*n*n
        return A(rf'Semplifica $(x+{n})^2+(x-{n})^2$.',ans,[4*n*x,2*x*x,2*x*x-2*n*n,x*x+n*n],
            'I due quadrati hanno doppi prodotti opposti. Nella somma questi termini si eliminano. I quadrati di x e del numero compaiono invece due volte.',rf'(x^2+{2*n}x+{n*n})+(x^2-{2*n}x+{n*n})={poly(ans)}')
    if f==13:
        ans=2*n*x+n*n
        return A(rf'Il lato di un quadrato passa da $x$ a $x+{n}$, con $x>0$. Di quanto aumenta la sua area?',ans,[n*n,2*n*x,x*x+n*n,2*x+n],
            'L’aumento dell’area è l’area finale meno quella iniziale. Si sviluppa il quadrato della nuova misura del lato. Il termine x al quadrato si elimina nella differenza.',rf'(x+{n})^2-x^2={2*n}x+{n*n}')
    if f==14:
        ans=-2*n
        return N(rf'Nello sviluppo di $(x-{n})^2$, qual è il coefficiente del termine in $x$?',ans,[2*n,-n,n*n,-n*n],
            'Il termine di primo grado proviene dal doppio prodotto. Poiché il secondo addendo è negativo, anche quel prodotto è negativo. Il coefficiente richiesto è quindi l’opposto del doppio del numero.',rf'2\cdot x\cdot(-{n})=-{2*n}x')
    if f==15:
        ans=9*x*x-n*n*y*y
        return A(rf'Sviluppa $(3x+{n}y)(3x-{n}y)$.',ans,[9*x*x+n*n*y*y,3*x*x-n*y*y,9*x*x-6*n*x*y+n*n*y*y,9*x*x-n*y*y],
            'Si riconoscono una somma e la corrispondente differenza. Si eleva al quadrato l’intero primo termine, tre x, e l’intero secondo termine. La formula richiede la differenza fra questi due quadrati.',rf'(3x)^2-({n}y)^2=9x^2-{n*n}y^2')
    if f==16:
        ans=R(1,4)*x*x+n*x+n*n
        return A(rf'Sviluppa $\left(\dfrac x2+{n}\right)^2$.',ans,[R(1,2)*x*x+n*x+n*n,R(1,4)*x*x+2*n*x+n*n,R(1,4)*x*x+n*n,R(1,4)*x*x+n*x-n*n],
            'Il quadrato di x diviso due ha coefficiente un quarto. Nel doppio prodotto il fattore due semplifica il denominatore due. Rimane il coefficiente lineare indicato dal secondo termine del binomio.',rf'\left(\frac x2+{n}\right)^2=\frac{{x^2}}4+{n}x+{n*n}')
    ans=2*n*x
    return A(rf'Uno studente scrive $(x+{n})^2=x^2+{n*n}$. Quale termine manca nel secondo membro?',ans,[n*x,n*n,x*x,-2*n*x],
        'Il prodotto del binomio per se stesso genera due prodotti misti uguali. La scrittura proposta contiene soltanto i due quadrati. Manca quindi la somma dei due prodotti misti.',rf'x\cdot{n}+{n}\cdot x={2*n}x')

def scomposizioni(f,k):
    n=k+2
    def F(prompt,target,candidates,why,steps=''):
        # Le alternative sono confrontate dopo lo sviluppo, ma la risposta viene mostrata fattorizzata.
        return A(prompt,target,candidates,why,steps)
    if f==0:
        ans=n*x*(x+2)
        return F(rf'Quale prodotto è uguale a ${n}x^2+{2*n}x$?',ans,[n*(x+2),n*x*(x-2),x*(x+2*n),n*x*(2*x+1)],
            'Entrambi i termini contengono il fattore numerico n indicato e una x. Dividendo ciascun termine per il fattore comune si ottengono x e due. La proprietà distributiva permette di ricostruire il polinomio iniziale.',rf'{n}x^2+{2*n}x={n}x(x+2)')
    if f==1:
        ans=x*x-n*n
        return F(rf'Quale prodotto scompone $x^2-{n*n}$?',S.Mul(x-n,x+n,evaluate=False),[(x-n)**2,(x+n)**2,(x-n)*(x+1),(x+n)*(x-1)],
            'Il polinomio è una differenza fra due quadrati. La scomposizione usa la somma e la differenza delle rispettive basi. Moltiplicando i due fattori, i prodotti misti si annullano.',rf'x^2-{n*n}=(x-{n})(x+{n})')
    if f==2:
        return F(rf'Scomponi $x^2+{2*n}x+{n*n}$.',(x+n)**2,[(x-n)**2,(x+n)*(x+1),x*(x+2*n),x*x+n*n],
            'Il primo e il terzo termine sono quadrati. Il termine centrale è il doppio prodotto delle loro basi con segno positivo. Il polinomio è quindi il quadrato della loro somma.',rf'x^2+{2*n}x+{n*n}=(x+{n})^2')
    if f==3:
        return F(rf'Scomponi $x^2-{2*n}x+{n*n}$.',(x-n)**2,[(x+n)**2,(x-n)*(x+n),x*(x-2*n),(x-n)*(x-1)],
            'I termini estremi sono quadrati e il termine centrale è il doppio prodotto negativo. Si riconosce perciò il quadrato di una differenza. Il termine noto resta positivo dopo lo sviluppo.',rf'x^2-{2*n}x+{n*n}=(x-{n})^2')
    if f==4:
        return F(rf'Quale prodotto è uguale a $x^2+{n+2}x+{2*n}$?',S.Mul(x+n,x+2,evaluate=False),[(x-n)*(x-2),(x+2*n)*(x+1),(x+n+2)*x,(x+n)*(x-2)],
            'Si cercano due numeri con somma uguale al coefficiente di x e prodotto uguale al termine noto. I numeri richiesti sono il numero indicato e due. Il prodotto dei due binomi restituisce il trinomio.',rf'{n}+2={n+2},\quad {n}\cdot2={2*n},\quad x^2+{n+2}x+{2*n}=(x+{n})(x+2)')
    if f==5:
        return F(rf'Quale prodotto è uguale a $x^2-{n+1}x+{n}$?',S.Mul(x-n,x-1,evaluate=False),[(x+n)*(x+1),(x-n)*(x+1),x*(x-n-1),(x+n)*(x-1)],
            'Il termine noto positivo e il coefficiente lineare negativo suggeriscono due numeri negativi. I numeri meno n e meno uno hanno il prodotto e la somma richiesti. Si costruiscono quindi i due fattori lineari.',rf'x^2-{n+1}x+{n}=(x-{n})(x-1)')
    if f==6:
        return F(rf'Scomponi $xy+{n}x+2y+{2*n}$.',S.Mul(x+2,y+n,evaluate=False),[(x+n)*(y+2),(x-2)*(y+n),(x+2)*(y-n),x*(y+n)+2],
            'Si raggruppano i primi due termini e gli ultimi due. Da ciascun gruppo si raccoglie un fattore, lasciando lo stesso binomio. Si raccoglie infine il binomio comune.',rf'xy+{n}x+2y+{2*n}=x(y+{n})+2(y+{n})=(x+2)(y+{n})')
    if f==7:
        return F(rf'Scomponi ${n}x^3-{n}x$.',S.Mul(n,x,x-1,x+1,evaluate=False),[n*x*(x-1)**2,n*(x-1)*(x+1),n*x*(x*x+1),n*x*x*(x-1)],
            'Si raccoglie prima il monomio comune. Il fattore rimasto è una differenza di quadrati. Si scompone anche questo fattore per completare la fattorizzazione.',rf'{n}x^3-{n}x={n}x(x^2-1)={n}x(x-1)(x+1)')
    if f==8:
        return F(rf'Quale prodotto scompone $4x^2-{n*n}y^2$?',S.Mul(2*x-n*y,2*x+n*y,evaluate=False),[(2*x-n*y)**2,(4*x-n*y)*(x+n*y),(2*x-n*n*y)*(2*x+y),(2*x+n*y)**2],
            'Le basi dei due quadrati sono due x e n y. La differenza dei quadrati si scompone nel prodotto della loro somma e della loro differenza. Va quindi estratta anche la radice del coefficiente quattro.',rf'4x^2-{n*n}y^2=(2x-{n}y)(2x+{n}y)')
    if f==9:
        return F(rf'Scomponi $-{n}x^2-{2*n}x$.',-n*x*(x+2),[n*x*(x+2),-n*x*(x-2),-n*(x+2),-x*(x+2*n)],
            'Il fattore comune può essere scelto negativo. Dividendo entrambi i termini per meno n x si ottengono x e due. Il controllo tramite distribuzione restituisce due termini negativi.',rf'-{n}x^2-{2*n}x=-{n}x(x+2)')
    if f==10:
        p=(x+n)*(x-1)
        return N(rf'Il polinomio $P(x)=(x+{n})(x-1)$ è già scomposto. Qual è $P(-{n})$?',0,[n,1,-n,2*n],
            'Sostituendo l’opposto del numero nel primo fattore, quel fattore diventa zero. Un prodotto con un fattore nullo è nullo. Non è necessario sviluppare il polinomio per calcolare questo valore.',rf'P(-{n})=(-{n}+{n})(-{n}-1)=0')
    if f==11:
        return N(rf'Per quale valore di $c$ si ha l’identità $x^2+{n+3}x+c=(x+{n})(x+3)$?',3*n,[n+3,n-3,3*n+1,n*n],
            'Si sviluppa il prodotto dei due binomi. Il termine noto nasce dal prodotto dei loro termini costanti. L’identità impone che c sia uguale a quel prodotto.',rf'(x+{n})(x+3)=x^2+{n+3}x+{3*n},\quad c={3*n}')
    if f==12:
        return F(rf'Qual è il massimo comune divisore monomiale di ${6*n}x^3y^2$ e ${9*n}x^2y^4$, con coefficiente intero positivo?',3*n*x*x*y*y,[18*n*x**3*y**4,3*n*x**3*y**4,n*x*y,6*n*x*x*y*y],
            'Il coefficiente è il massimo comune divisore dei coefficienti numerici. Per ogni lettera comune si sceglie il minore dei due esponenti. Il monomio ottenuto divide entrambi i monomi dati.',rf'\operatorname{{MCD}}={3*n}x^2y^2')
    if f==13:
        return F(rf'Qual è il minimo comune multiplo monomiale di ${2*n}x^2y$ e ${3*n}xy^3$, con coefficiente intero positivo?',6*n*x*x*y**3,[n*x*y,6*n*x**3*y**4,5*n*x*x*y**3,6*n*x*y],
            'Il coefficiente è il minimo comune multiplo dei coefficienti numerici. Per ogni lettera presente si sceglie il maggiore degli esponenti. Il risultato contiene i fattori necessari per essere multiplo di entrambi.',rf'\operatorname{{mcm}}={6*n}x^2y^3')
    if f==14:
        return F(rf'Per $x\ne0$, quale quoziente si ottiene raccogliendo ${n}x$ da ${n}x^2+{3*n}x$?',x+3,[x+3*n,n*x+3,x-3,x*x+3],
            'Raccogliere un fattore significa dividere ciascun termine per quel fattore. Il primo termine produce x e il secondo produce tre. Il polinomio residuo è quindi la loro somma.',rf'\frac{{{n}x^2+{3*n}x}}{{{n}x}}=x+3')
    if f==15:
        return F(rf'Scomponi $x^2y+{n}xy^2$.',S.Mul(x,y,x+n*y,evaluate=False),[x*y*(x+n),x*(x+n*y),x*y*(x-n*y),x*y*(x*y+n)],
            'Entrambi i termini contengono una x e una y. Dopo aver raccolto il loro prodotto, il primo termine lascia x e il secondo lascia n y. Moltiplicare il fattore comune per il risultato verifica la scomposizione.',rf'x^2y+{n}xy^2=xy(x+{n}y)')
    if f==16:
        return F(rf'Scomponi completamente $x^4-{n**4}$.',S.Mul(x-n,x+n,x*x+n*n,evaluate=False),[(x-n)**2*(x*x+n*n),(x*x-n*n)**2,(x-n)*(x+n),(x*x+n*n)**2],
            'Si applica una prima volta la differenza di quadrati alle basi x al quadrato e n al quadrato. Il fattore con il segno meno è ancora una differenza di quadrati. Si scompone ulteriormente quel fattore.',rf'x^4-{n**4}=(x^2-{n*n})(x^2+{n*n})=(x-{n})(x+{n})(x^2+{n*n})')
    return N(rf'Quale valore di $x$ rende nullo il fattore $x+{n}$ nella scomposizione $(x+{n})(x+2)$?',-n,[n,-2*n,n+2,0],
        'Per annullare il fattore indicato, la somma di x e del numero deve valere zero. Il numero cercato è il suo opposto. Sostituendolo nel fattore si verifica direttamente l’annullamento.',rf'x+{n}=0,\qquad x=-{n}')

def frazioni(f,k):
    n=k+2; lin=x-n; plus=x+n
    cond=rf'Per $x\ne {n}$ e $x\ne -{n}$, '
    if f==0:
        return T(rf'Qual è la condizione di esistenza di $\dfrac{{x+1}}{{x-{n}}}$ nei numeri reali?',M(rf'x\ne {n}'),[M(rf'x\ne -1'),M(rf'x>{n}'),M(rf'x\ne -{n}')],
            'Una frazione algebrica è definita quando il suo denominatore è diverso da zero. Il numeratore può invece annullarsi. Si esclude quindi soltanto la radice del denominatore.')
    if f==1:
        return T(rf'Quali sono i valori esclusi per $\dfrac{{x+2}}{{x^2-{n*n}}}$?',M(rf'x=-{n}\;\text{{oppure}}\;x={n}'),[M(rf'x=-2\;\text{{oppure}}\;x={n}'),M(rf'x={n}'),M(rf'x=-{n}')],
            'Il denominatore si scompone in due fattori lineari. Una frazione non è definita se almeno uno dei fattori del denominatore si annulla. Vanno perciò esclusi entrambi i valori opposti.')
    if f==2:
        return A(rf'Per $x\ne {n}$, semplifica $\dfrac{{x^2-{n*n}}}{{x-{n}}}$.',plus,[lin,x*x+n*n,1,2*x],
            'Si scompone il numeratore come differenza di quadrati. Il fattore comune al denominatore si può semplificare perché è non nullo nel dominio dichiarato. La condizione iniziale continua a valere.',rf'\frac{{(x-{n})(x+{n})}}{{x-{n}}}=x+{n}')
    if f==3:
        return A(rf'Per $x\ne0$, semplifica $\dfrac{{{n}x^2+{2*n}x}}{{{n}x}}$.',x+2,[x+2*n,n*x+2,x*x+2,x-2],
            'Al numeratore si raccoglie il fattore comune n x. Il denominatore coincide con quel fattore. Dopo la semplificazione resta il polinomio contenuto nel secondo fattore.',rf'\frac{{{n}x(x+2)}}{{{n}x}}=x+2')
    if f==4:
        return A(rf'Per $x\ne{n}$, calcola $\dfrac2{{x-{n}}}+\dfrac3{{x-{n}}}$.',5/lin,[R(5,2)/lin,6/lin,1/lin,5/(x+n)],
            'Le frazioni hanno già lo stesso denominatore. Si sommano i numeratori e si conserva quel denominatore. La somma mantiene la condizione di esistenza iniziale.',rf'\frac2{{x-{n}}}+\frac3{{x-{n}}}=\frac5{{x-{n}}}')
    if f==5:
        return A(rf'Per $x\ne{n}$, calcola $\dfrac{{x+2}}{{x-{n}}}-\dfrac{{x-1}}{{x-{n}}}$.',3/lin,[1/lin,(2*x+1)/lin,3/(x+n),-3/lin],
            'Il denominatore comune resta invariato. Il segno meno davanti al secondo numeratore cambia il segno di entrambi i suoi termini. I termini in x si eliminano e rimane tre.',rf'\frac{{x+2-(x-1)}}{{x-{n}}}=\frac3{{x-{n}}}')
    if f==6:
        return A(cond+rf'calcola $\dfrac{{x-{n}}}{{x+{n}}}\cdot\dfrac{{x+{n}}}{{2(x-{n})}}$.',R(1,2),[2,1,-R(1,2),x],
            'Si moltiplicano i numeratori e i denominatori. I due fattori lineari comuni sono non nulli per le condizioni date. Si semplificano e resta soltanto il fattore numerico.',rf'\frac{{(x-{n})(x+{n})}}{{2(x+{n})(x-{n})}}=\frac12')
    if f==7:
        return A(cond+rf'calcola $\dfrac{{x-{n}}}{{x+{n}}}:\dfrac{{2(x-{n})}}{{x+{n}}}$.',R(1,2),[2,1,-R(1,2),x+n],
            'Il divisore è definito e non nullo nel dominio indicato. La divisione diventa un prodotto per il reciproco del divisore. I fattori comuni si semplificano e resta il rapporto fra i coefficienti.',rf'\frac{{x-{n}}}{{x+{n}}}\cdot\frac{{x+{n}}}{{2(x-{n})}}=\frac12')
    if f==8:
        return A(cond+rf'calcola $\dfrac1{{x-{n}}}+\dfrac1{{x+{n}}}$.',2*x/(x*x-n*n),[2/(x*x-n*n),2*n/(x*x-n*n),1/x,2*x/(x*x+n*n)],
            'Un denominatore comune è il prodotto dei due fattori lineari. I numeratori diventano rispettivamente x più n e x meno n. La loro somma elimina i termini numerici.',rf'\frac{{x+{n}+x-{n}}}{{(x-{n})(x+{n})}}=\frac{{2x}}{{x^2-{n*n}}}')
    if f==9:
        return A(cond+rf'calcola $\dfrac1{{x-{n}}}-\dfrac1{{x+{n}}}$.',2*n/(x*x-n*n),[2*x/(x*x-n*n),-2*n/(x*x-n*n),0,2*n/(x*x+n*n)],
            'Si usa come denominatore comune il prodotto dei due denominatori. Il secondo numeratore deve essere sottratto per intero. I termini in x si eliminano e i due termini numerici si sommano.',rf'\frac{{(x+{n})-(x-{n})}}{{x^2-{n*n}}}=\frac{{{2*n}}}{{x^2-{n*n}}}')
    if f==10:
        val=n+2;ans=R(n+3,2)
        return N(rf'Calcola il valore di $\dfrac{{x+1}}{{x-{n}}}$ per $x={val}$.',ans,[R(n+1,2),R(2,n+3),n+3,R(n+3,2*n+2)],
            'Il valore assegnato non annulla il denominatore, quindi la sostituzione è ammessa. Si sostituisce la stessa x nel numeratore e nel denominatore. Si esegue infine il rapporto dei due risultati.',rf'\frac{{{val}+1}}{{{val}-{n}}}=\frac{{{n+3}}}2={tex(ans)}')
    if f==11:
        return T(rf'La frazione $\dfrac{{x-{n}}}{{x-{n}}}$ viene semplificata in $1$. Quale affermazione conserva correttamente il dominio?',
            rf'Vale $1$ per ogni $x\ne {n}$', [rf'Vale $1$ per ogni reale, compreso $x={n}$',rf'Vale $0$ per $x={n}$',rf'È definita soltanto per $x>{n}$'],
            'La semplificazione richiede che il fattore cancellato sia non nullo. Il valore escluso dal denominatore iniziale resta escluso. La formula semplificata rappresenta la stessa frazione soltanto su quel dominio.')
    if f==12:
        return N(rf'Per quale valore di $x$ la frazione $\dfrac{{x-{n}}}{{x+1}}$ vale zero?',n,[-1,-n,0,n+1],
            'Una frazione vale zero quando il numeratore è zero e il denominatore è non nullo. Il numeratore si annulla per il valore indicato. In quel punto il denominatore vale n più uno ed è diverso da zero.',rf'x-{n}=0\Rightarrow x={n},\qquad {n}+1\ne0')
    if f==13:
        return A(rf'Per $x\ne{n}$, riscrivi $1+\dfrac{{{n}}}{{x-{n}}}$ come unica frazione.',x/lin,[(x+n)/lin,1,2*x/lin,(x-2*n)/lin],
            'Si scrive uno come il denominatore diviso per se stesso. I due numeratori si sommano. Il termine meno n e il termine più n si eliminano.',rf'1+\frac{{{n}}}{{x-{n}}}=\frac{{x-{n}+{n}}}{{x-{n}}}=\frac x{{x-{n}}}')
    if f==14:
        return A(rf'Per $x\ne-{n}$, semplifica $\dfrac{{-x-{n}}}{{x+{n}}}$.',-1,[1,0,-x,1/(x+n)],
            'Il numeratore è l’opposto dell’intero denominatore. Si raccoglie meno uno al numeratore. Il fattore comune non nullo si semplifica lasciando il segno negativo.',rf'\frac{{-(x+{n})}}{{x+{n}}}=-1')
    if f==15:
        return T(rf'Quali condizioni rendono definita l’espressione $\dfrac1{{x+{n}}}:\dfrac{{x-1}}{{x+{n}}}$?',
            M(rf'x\ne -{n}\;\text{{e}}\;x\ne1'),[M(rf'x\ne -{n}'),M(rf'x\ne1'),M(rf'x\ne {n}\;\text{{e}}\;x\ne-1')],
            'I denominatori delle due frazioni devono essere non nulli. Inoltre il divisore deve essere diverso da zero, quindi anche il suo numeratore non può annullarsi. Le due condizioni devono valere contemporaneamente.')
    if f==16:
        return A(rf'Per $x\ne{n}$, calcola $\dfrac{{2x}}{{x-{n}}}-2$.',2*n/lin,[0,2/lin,-2*n/lin,2*x/lin],
            'Il numero due si riscrive con il denominatore della prima frazione. Si sottrae poi tutto il nuovo numeratore. I termini contenenti x si eliminano.',rf'\frac{{2x-2(x-{n})}}{{x-{n}}}=\frac{{{2*n}}}{{x-{n}}}')
    return A(rf'Per $x\ne -{n}$, calcola $\dfrac{{x^2-{n*n}}}{{(x+{n})^2}}$.',lin/plus,[plus/lin,1,lin,-1],
        'Si scompone il numeratore in somma e differenza. Il denominatore contiene due copie del fattore somma. Si semplifica una sola copia comune, mantenendo il fattore restante.',rf'\frac{{(x-{n})(x+{n})}}{{(x+{n})^2}}=\frac{{x-{n}}}{{x+{n}}}')

def equazioni(f,k):
    n=k+2
    if f==0:
        return N(rf'Risolvi $3x+{n}={4*n}$.',n,[3*n,5*n,R(5*n,3),-n],
            'Si sottrae lo stesso termine numerico a entrambi i membri. Rimane un’equazione in cui l’incognita è moltiplicata per tre. Si dividono entrambi i membri per quel coefficiente non nullo.',rf'3x={4*n}-{n}={3*n},\qquad x={n}')
    if f==1:
        return N(rf'Risolvi $2(x-{n})={n+3}$.',R(3*n+3,2),[R(n+3,2),R(3-n,2),3*n+3,n+3],
            'Si divide prima l’uguaglianza per due, mantenendo l’intero binomio. Si aggiunge poi il numero sottratto alla variabile. Si riduce infine la somma alla stessa frazione.',rf'x-{n}=\frac{{{n+3}}}2,\qquad x=\frac{{{3*n+3}}}2')
    if f==2:
        return N(rf'Risolvi $5x-{n}=2x+{2*n}$.',n,[-n,3*n,R(3*n,7),2*n],
            'Si sottrae due x da entrambi i membri. Si aggiunge poi n a entrambi i membri. Il coefficiente dell’incognita e il termine noto risultano entrambi multipli di tre.',rf'5x-2x={2*n}+{n},\qquad3x={3*n},\qquad x={n}')
    if f==3:
        ans=3*n-2
        return N(rf'Risolvi $\dfrac{{x+2}}3={n}$.',ans,[R(n-2,3),3*n+2,n-2,R(n+2,3)],
            'Il denominatore è il numero non nullo tre. Moltiplicando entrambi i membri per tre si elimina il denominatore. Si sottrae infine due per isolare la variabile.',rf'x+2={3*n},\qquad x={ans}')
    if f==4:
        ans=6*n
        return N(rf'Risolvi $\dfrac x2-\dfrac x3={n}$.',ans,[n,5*n,R(6*n,5),-6*n],
            'Si porta il primo membro al denominatore comune sei. Il numeratore è tre x meno due x e si riduce a x. Moltiplicando l’uguaglianza per sei si trova la soluzione.',rf'\frac{{3x-2x}}6={n},\qquad x={6*n}')
    if f==5:
        return T(rf'Qual è l’insieme delle soluzioni reali di $2(x+{n})=2x+{2*n+1}$?',r'$\varnothing$',[r'$\mathbb R$',M(n),M(1)],
            'Sviluppando il primo membro, i termini in x hanno lo stesso coefficiente. Sottraendoli, resta un’uguaglianza fra due numeri diversi. Nessun valore dell’incognita può renderla vera.')
    if f==6:
        return T(rf'Qual è l’insieme delle soluzioni reali di $3(x-{n})=3x-{3*n}$?',r'$\mathbb R$',[r'$\varnothing$',M(n),M(0)],
            'La proprietà distributiva rende i due membri identici. Dopo la riduzione si ottiene zero uguale a zero. L’uguaglianza vale quindi per ogni numero reale.')
    if f==7:
        ans=2*n+1
        return N(rf'La somma di due interi consecutivi è ${4*n+3}$. Qual è il minore?',ans,[2*n+2,4*n+2,2*n,4*n+3],
            'Se il minore è x, il successivo è x più uno. La loro somma è due x più uno. Si sottrae uno dalla somma data e si divide per due.',rf'x+(x+1)={4*n+3},\qquad2x={4*n+2},\qquad x={ans}')
    if f==8:
        ans=3*n
        return N(rf'Un rettangolo ha perimetro ${10*n}$ cm e base ${2*n}$ cm. Quanto misura l’altezza?',ans,[8*n,4*n,5*n,n],
            'Il semiperimetro è la somma di base e altezza. Si divide quindi il perimetro per due. Sottraendo la base si ottiene l’altezza.',rf'b+h={5*n},\qquad h={5*n}-{2*n}={3*n}',r'\,\mathrm{cm}')
    if f==9:
        ans=2*n
        return N(rf'Un ingresso costa 5 euro più 3 euro per ogni attività. Il totale pagato è ${6*n+5}$ euro. Quante attività sono state acquistate?',ans,[6*n,2*n+5,R(6*n+5,3),n],
            'Si separa il costo fisso dalla parte che dipende dal numero di attività. Sottraendo cinque euro resta il costo complessivo delle attività. Dividendo per tre si ricava il loro numero.',rf'5+3x={6*n+5},\qquad3x={6*n},\qquad x={2*n}')
    if f==10:
        ans=3*n
        return N(rf'Fra ${n}$ anni, una persona avrà ${4*n}$ anni. Quanti anni ha oggi?',ans,[5*n,4*n,n,2*n],
            'L’età futura si ottiene sommando all’età attuale gli anni trascorsi. Per ricavare l’età attuale si sottrae quell’intervallo dall’età futura. La soluzione è positiva e compatibile con il contesto.',rf'x+{n}={4*n},\qquad x={3*n}')
    if f==11:
        ans=n+5
        return N(rf'La media di tre numeri è ${n+2}$. I primi due valgono ${n}$ e ${n+1}$. Quanto vale il terzo?',ans,[n+2,3*n+6,n+3,2*n+5],
            'La somma dei tre numeri è tre volte la media. Si sottrae da quella somma il totale dei due numeri noti. Rimane il terzo numero.',rf'{n}+{n+1}+x=3\cdot{n+2},\qquad x={n+5}')
    if f==12:
        ans=2*n
        return N(rf'Risolvi la proporzione $x:4={n}:2$.',ans,[R(n,2),n,8*n,R(2,n)],
            'Si uguagliano il prodotto dei medi e quello degli estremi. L’equazione ottenuta ha coefficiente due davanti all’incognita. Si divide per due e si verifica il rapporto richiesto.',rf'2x=4\cdot{n},\qquad x={2*n}')
    if f==13:
        ans=R(2*n,3)
        return N(rf'Una grandezza soddisfa $s=3t+{n}$. Se $s={3*n}$, quanto vale $t$?',ans,[n,2*n,R(4*n,3),R(n,3)],
            'Si sostituisce nella formula il valore noto di s. Si sottrae n e si divide per il coefficiente tre. È una trasformazione della formula in cui la variabile richiesta viene isolata.',rf'{3*n}=3t+{n},\qquad3t={2*n},\qquad t={tex(ans)}')
    if f==14:
        ans=n+2
        return N(rf'Risolvi $\dfrac{{x-{n}}}{{x+1}}=\dfrac2{{{n+3}}}$ nei reali, con $x\ne-1$.',ans,[-1,n,n+3,-n-2],
            'I denominatori sono non nulli nelle condizioni indicate. Si moltiplica in croce e si raccolgono i termini in x. La soluzione ottenuta non coincide con il valore escluso.',rf'{n+3}(x-{n})=2(x+1),\qquad {n+1}x={n*(n+3)+2},\qquad x={n+2}')
    if f==15:
        return T(rf'Qual è l’insieme delle soluzioni di $\dfrac{{x-{n}}}{{x-{n}}}=0$?',r'$\varnothing$',[M(n),r'$\mathbb R$',M(rf'\mathbb R\setminus\{{{n}\}}')],
            'Il dominio esclude il valore che annulla il denominatore. Per ogni valore ammesso, la frazione vale uno. L’equazione uno uguale a zero non è mai soddisfatta.')
    if f==16:
        ans=-n
        return N(rf'Risolvi $-{2}x+{n}={3*n}$.',ans,[n,-2*n,2*n,R(n,2)],
            'Si sottrae n da entrambi i membri. Il coefficiente della variabile è negativo e si divide per quel coefficiente. La sostituzione del risultato restituisce il valore richiesto nel secondo membro.',rf'-2x={2*n},\qquad x=-{n}')
    ans=2
    return N(rf'Per quale valore di $c$ l’equazione $cx+{n}=2x+{n}$ è un’identità?',ans,[n,0,-2,n+2],
        'Un’identità deve essere vera per ogni valore dell’incognita. I termini noti sono già uguali. Anche i coefficienti della variabile devono quindi coincidere.',rf'(c-2)x=0\;\text{{per ogni }}x,\qquad c=2')

def intervallo(edge,op):
    if op=='>': return S.Interval.open(edge,S.oo)
    if op=='>=': return S.Interval(edge,S.oo)
    if op=='<': return S.Interval.open(-S.oo,edge)
    return S.Interval(-S.oo,edge)
def I(prompt,edge,op,why,steps=''):
    good=intervallo(S.sympify(edge),op)
    vals=[intervallo(S.sympify(edge),v) for v in ['>','>=','<','<='] if v!=op]
    return N(prompt+' Qual è l’insieme delle soluzioni?',good,vals,why,steps)

def disequazioni(f,k):
    n=k+2
    if f==0:
        return I(rf'Risolvi $2x+{n}>{3*n}$.',n,'>',
            'Si sottrae n da entrambi i membri. Si divide poi per due, che è positivo, quindi il verso resta invariato. La disuguaglianza è stretta e il valore di confine resta escluso.',rf'2x>{2*n},\qquad x>{n}')
    if f==1:
        return I(rf'Risolvi $-3x\le {3*n}$.',-n,'>=',
            'Per isolare x si divide per meno tre. Una divisione per un numero negativo inverte il verso della disuguaglianza. Poiché è ammessa l’uguaglianza, il valore di confine è incluso.',rf'-3x\le {3*n},\qquad x\ge -{n}')
    if f==2:
        return I(rf'Risolvi $2(x-{n})<6$.',n+3,'<',
            'Si divide per due, un numero positivo. Si aggiunge poi n a entrambi i membri senza cambiare il verso. Il valore di confine non soddisfa la disuguaglianza stretta.',rf'x-{n}<3,\qquad x<{n+3}')
    if f==3:
        return I(rf'Risolvi $5x-{n}\ge2x+{2*n}$.',n,'>=',
            'Si raccolgono le variabili nel primo membro e i termini numerici nel secondo. Il coefficiente della variabile diventa tre. La divisione per tre conserva il verso.',rf'3x\ge {3*n},\qquad x\ge{n}')
    if f==4:
        return I(rf'Risolvi $\dfrac{{x+1}}2\le {n}$.',2*n-1,'<=',
            'Moltiplicare per il denominatore positivo due conserva il verso. Si sottrae poi uno per isolare la variabile. L’estremo è incluso perché la disuguaglianza consente l’uguaglianza.',rf'x+1\le {2*n},\qquad x\le{2*n-1}')
    if f==5:
        return I(rf'Risolvi $\dfrac x2-\dfrac x3>{n}$.',6*n,'>',
            'Il denominatore comune è sei, che è positivo. Il primo membro si riduce a x diviso sei. Moltiplicando per sei si ottiene la soglia finale.',rf'\frac x6>{n},\qquad x>{6*n}')
    if f==6:
        ans=S.Interval(n,n+4,left_open=True,right_open=False)
        return N(rf'Quale intervallo rappresenta le due condizioni simultanee $x>{n}$ e $x\le {n+4}$?',ans,[S.Interval(n,n+4),S.Interval.open(n,n+4),S.Interval(n,n+4,right_open=True),S.Interval.open(n,S.oo)],
            'Le condizioni devono essere vere contemporaneamente, quindi si prende l’intersezione. Il valore minore è escluso, mentre il valore maggiore è incluso. Gli altri punti fra i due estremi soddisfano entrambe le condizioni.')
    if f==7:
        ans=S.Union(S.Interval.open(-S.oo,-n),S.Interval.open(n,S.oo))
        return N(rf'Qual è l’insieme dei reali che soddisfano almeno una fra $x<-{n}$ e $x>{n}$?',ans,[S.Interval.open(-n,n),S.EmptySet,S.Reals,S.Interval.open(n,S.oo)],
            'La richiesta di almeno una condizione corrisponde all’unione. I due gruppi di soluzioni sono le due semirette esterne. Gli estremi non sono inclusi perché entrambe le disuguaglianze sono strette.')
    if f==8:
        return N(rf'Quanti numeri interi soddisfano ${n}<x\le {n+6}$?',6,[5,7,n+6,n],
            'Il primo intero ammesso è quello successivo al limite inferiore. L’intero uguale al limite superiore è incluso. La sequenza contiene sei interi consecutivi.',rf'x\in\{{{n+1},{n+2},{n+3},{n+4},{n+5},{n+6}\}}')
    if f==9:
        return N(rf'Si hanno ${3*n+2}$ euro. Ogni biglietto costa 3 euro. Qual è il massimo numero intero di biglietti acquistabile?',n,[n+1,n-1,3*n+2,3*n],
            'Il costo di x biglietti deve essere al massimo pari al denaro disponibile. La divisione per il prezzo dà una quantità compresa fra n e n più uno. Poiché i biglietti sono interi, il massimo ammesso è n.',rf'3x\le {3*n+2},\qquad x\le {tex(R(3*n+2,3))},\qquad x_{{\max}}={n}')
    if f==10:
        return N(rf'Una confezione contiene 4 matite. Quante confezioni occorrono almeno per avere ${4*n+1}$ matite?',n+1,[n,4*n+1,n+2,n-1],
            'Il numero di matite deve essere almeno uguale alla richiesta. Con n confezioni manca ancora una matita. Una confezione in più soddisfa la richiesta ed è il primo numero intero ammissibile.',rf'4x\ge{4*n+1},\qquad x\ge{tex(R(4*n+1,4))},\qquad x_{{\min}}={n+1}')
    if f==11:
        return I(rf'Risolvi ${n}-2x>3{n}$.'.replace(f'3{n}',str(3*n)),-n,'<',
            'Si sottrae il termine numerico iniziale da entrambi i membri. Resta un coefficiente negativo davanti alla variabile. La divisione per quel coefficiente inverte il verso.',rf'-2x>{2*n},\qquad x<-{n}')
    if f==12:
        ans=S.Interval(n,n+2,left_open=False,right_open=True)
        return N(rf'Risolvi la doppia disuguaglianza ${2*n+1}\le2x+1<{2*n+5}$.',ans,[S.Interval(n,n+2),S.Interval.open(n,n+2),S.Interval(n,n+2,left_open=True),S.Interval(2*n,2*n+4)],
            'Si sottrae uno da tutti e tre i membri. Si divide poi ogni membro per due, un numero positivo. L’estremo sinistro resta incluso e quello destro resta escluso.',rf'{2*n}\le2x<{2*n+4},\qquad {n}\le x<{n+2}')
    if f==13:
        return N(rf'Quale fra questi numeri soddisfa $2x+{n}>3{n}$?'.replace(f'3{n}',str(3*n)),n+1,[n,n-1,-n,0],
            'Si riduce la disequazione sottraendo n e dividendo per due. La condizione equivalente richiede che x sia strettamente maggiore di n. Fra le quantità proposte, solo il numero successivo soddisfa questa richiesta.',rf'2x>{2*n},\qquad x>{n}')
    if f==14:
        return T(rf'Qual è l’insieme delle soluzioni di $2x+{n}>2x+{n+1}$?',r'$\varnothing$',[r'$\mathbb R$',M(rf'x>{n}'),M(rf'x>{n+1}')],
            'Sottraendo due x da entrambi i membri, l’incognita scompare. Rimane una disuguaglianza fra due numeri consecutivi che è falsa. Nessun valore della variabile la può rendere vera.')
    if f==15:
        return T(rf'Qual è l’insieme delle soluzioni di $3x-{n}\le3x-{n-1}$?',r'$\mathbb R$',[r'$\varnothing$',M(rf'x\le{n}'),M(rf'x\ge-{n}')],
            'I termini con la variabile si eliminano. Il numero nel primo membro è minore di quello nel secondo, quindi la disuguaglianza numerica è vera. La disequazione è soddisfatta da tutti i reali.')
    if f==16:
        return I(rf'Risolvi $-{n}(x-2)\ge0$.',2,'<=',
            'Il coefficiente esterno è negativo. Dividendo per quel coefficiente si inverte il verso, ottenendo una condizione sul binomio. Si aggiunge infine due a entrambi i membri.',rf'x-2\le0,\qquad x\le2')
    ans=S.EmptySet
    return N(rf'Qual è l’insieme dei reali che soddisfano contemporaneamente $x>{n+2}$ e $x\le{n}$?',ans,[S.Reals,S.Interval(n,n+2),S.Interval.open(n+2,S.oo),S.Interval(-S.oo,n)],
        'Il primo vincolo richiede numeri maggiori della soglia più alta. Il secondo richiede numeri non maggiori della soglia più bassa. Le due semirette non hanno punti comuni, quindi l’intersezione è vuota.')

def geometria(f,k):
    n=k+2
    if f==0:
        return N(rf'I punti $A,B,C$ sono allineati nell’ordine scritto. Si ha $AC={5*n}$ cm e $AB={2*n}$ cm. Quanto misura $BC$?',3*n,[7*n,5*n,n,2*n],
            'Poiché B è interno al segmento AC, la lunghezza di AC è la somma di AB e BC. Si sottrae quindi AB dalla lunghezza totale. L’ordine dei punti è necessario per scegliere questa relazione.',rf'BC=AC-AB={5*n}-{2*n}={3*n}',r'\,\mathrm{cm}')
    if f==1:
        return N(rf'$M$ è il punto medio di $AB$ e $AM={3*n}$ cm. Quanto misura $AB$?',6*n,[3*n,R(3*n,2),9*n,2*n],
            'Il punto medio divide il segmento in due parti congruenti. La lunghezza di MB coincide quindi con quella di AM. Il segmento intero misura il doppio di ciascuna metà.',rf'AB=AM+MB={3*n}+{3*n}={6*n}',r'\,\mathrm{cm}')
    if f==2:
        angle=20+3*k
        return N(rf'Un angolo misura ${angle}^\circ$. Quanto misura il suo complementare?',90-angle,[180-angle,angle,90+angle,360-angle],
            'Due angoli complementari hanno somma pari a un angolo retto. Si sottrae quindi la misura data da novanta gradi. Il risultato è positivo perché l’angolo assegnato è acuto.',rf'\beta=90^\circ-{angle}^\circ={90-angle}^\circ',r'^\circ')
    if f==3:
        angle=70+4*k
        return N(rf'Un angolo misura ${angle}^\circ$. Quanto misura il suo supplementare?',180-angle,[90-angle,angle,180+angle,360-angle,180],
            'Due angoli supplementari hanno somma pari a un angolo piatto. La misura cercata completa la misura assegnata fino a centottanta gradi. Si calcola quindi la differenza.',rf'\beta=180^\circ-{angle}^\circ={180-angle}^\circ',r'^\circ')
    if f==4:
        angle=35+2*k
        return N(rf'Due rette si intersecano. Un angolo misura ${angle}^\circ$. Quanto misura l’angolo opposto al vertice?',angle,[180-angle,90-angle,2*angle,360-angle],
            'Due angoli opposti al vertice hanno lati appartenenti alle stesse rette con versi opposti. Ciascuno è supplementare dello stesso angolo adiacente. Hanno quindi la stessa misura.',rf'\beta=\alpha={angle}^\circ',r'^\circ')
    if f==5:
        angle=40+4*k
        return N(rf'La bisettrice divide un angolo di ${angle}^\circ$ in due parti. Quanto misura ciascuna parte?',R(angle,2),[angle,2*angle,180-angle,90-angle,45],
            'La bisettrice è la semiretta che divide un angolo in due angoli congruenti. La somma delle due parti coincide con l’angolo iniziale. Ogni parte misura quindi metà dell’angolo dato.',rf'\beta=\frac{{{angle}^\circ}}2={angle//2}^\circ',r'^\circ')
    if f==6:
        alpha=30+2*k;beta=45+k;ans=180-alpha-beta
        return N(rf'In un triangolo due angoli misurano ${alpha}^\circ$ e ${beta}^\circ$. Quanto misura il terzo?',ans,[alpha+beta,180-alpha,180-beta,90-alpha-beta],
            'La somma degli angoli interni di un triangolo è centottanta gradi. Si calcola prima la somma delle due misure note. La misura restante è la differenza fra l’angolo piatto e quella somma.',rf'\gamma=180^\circ-({alpha}^\circ+{beta}^\circ)={ans}^\circ',r'^\circ')
    if f==7:
        vert=40+4*k;ans=R(180-vert,2)
        return N(rf'Un triangolo isoscele ha angolo al vertice di ${vert}^\circ$. Quanto misura ciascun angolo alla base?',ans,[180-vert,R(vert,2),90-vert,vert,90],
            'Gli angoli alla base di un triangolo isoscele sono congruenti. La loro somma è centottanta gradi meno l’angolo al vertice. Si divide questa somma per due.',rf'\beta=\frac{{180^\circ-{vert}^\circ}}2={tex(ans)}^\circ',r'^\circ')
    if f==8:
        base=30+2*k;ans=180-2*base
        return N(rf'In un triangolo isoscele un angolo alla base misura ${base}^\circ$. Quanto misura l’angolo al vertice?',ans,[180-base,90-base,2*base,base],
            'L’altro angolo alla base ha la stessa misura di quello noto. I due angoli di base occupano quindi il doppio della misura assegnata. L’angolo al vertice completa la somma a centottanta gradi.',rf'\alpha=180^\circ-2\cdot{base}^\circ={ans}^\circ',r'^\circ')
    if f==9:
        ext=110+3*k;remote=35+k;ans=ext-remote
        return N(rf'Un angolo esterno di un triangolo misura ${ext}^\circ$. Uno dei due angoli interni non adiacenti misura ${remote}^\circ$. Quanto misura l’altro?',ans,[180-ext,ext+remote,180-remote,remote],
            'Un angolo esterno è uguale alla somma dei due angoli interni non adiacenti. Si sottrae quindi la misura nota dall’angolo esterno. Il risultato è la misura dell’altro angolo interno richiesto.',rf'\beta={ext}^\circ-{remote}^\circ={ans}^\circ',r'^\circ')
    if f==10:
        ans=S.Interval.open(2,2*n+2)
        return N(rf'Due lati di un triangolo misurano ${n}$ e ${n+2}$ cm. Quale intervallo descrive le misure ammesse, in centimetri, per il terzo lato?',ans,[S.Interval(2,2*n+2),S.Interval.open(0,2*n+2),S.Interval.open(2*n+2,S.oo),S.Interval.open(0,2)],
            'La misura di un lato è minore della somma degli altri due e maggiore della loro differenza in valore assoluto. Le uguaglianze darebbero punti allineati, quindi sono escluse. Si applicano entrambe le disuguaglianze alla misura incognita.',rf'|{n+2}-{n}|<c<{n}+{n+2},\qquad2<c<{2*n+2}')
    if f==11:
        return N(rf'Un triangolo isoscele ha perimetro ${8*n}$ cm e base ${2*n}$ cm. Quanto misura ciascuno dei lati uguali?',3*n,[6*n,4*n,2*n,n],
            'Sottraendo la base dal perimetro resta la somma dei due lati uguali. Poiché hanno la stessa lunghezza, ciascuno è metà di questa somma. Il risultato rispetta anche la disuguaglianza triangolare.',rf'2l={8*n}-{2*n}={6*n},\qquad l={3*n}',r'\,\mathrm{cm}')
    if f==12:
        return T(rf'Due triangoli hanno rispettivamente due lati lunghi ${n+2}$ e ${n+4}$ cm e l’angolo compreso uguale a ${40+k}^\circ$. Quale criterio garantisce la congruenza?',
            'Lato-angolo-lato, con l’angolo compreso fra i lati dati',
            ['Lato-lato-lato, perché sono noti tre lati','Angolo-lato-angolo, perché sono noti due angoli','Nessun criterio, anche se l’angolo indicato è compreso'],
            'Le due coppie di lati corrispondenti hanno lunghezze uguali. È uguale anche l’angolo formato da quei due lati in ciascun triangolo. Sono precisamente le ipotesi del criterio lato-angolo-lato.')
    if f==13:
        return T(rf'Due triangoli hanno entrambi un lato di ${n+3}$ cm e i due angoli adiacenti a quel lato misurano ${30+k}^\circ$ e ${50+k}^\circ$. Quale criterio si applica?',
            'Angolo-lato-angolo', ['Lato-lato-lato','Lato-angolo-lato','I dati non garantiscono la congruenza'],
            'Il lato noto è compreso fra i due angoli assegnati. Le misure dei due angoli e del lato coincidono nei due triangoli. Questi dati soddisfano il criterio angolo-lato-angolo.')
    if f==14:
        return T(rf'Due triangoli hanno entrambi lati lunghi ${n+1}$, ${n+2}$ e ${n+3}$ cm. Quale criterio prova che sono congruenti?',
            'Lato-lato-lato', ['Angolo-lato-angolo, perché sono assegnati due angoli','Lato-angolo-lato, perché è assegnato un angolo','La sola uguaglianza dei perimetri, senza usare i lati'],
            'Le tre lunghezze soddisfano la disuguaglianza triangolare. Le tre coppie di lati corrispondenti hanno la stessa misura. Il criterio lato-lato-lato garantisce quindi la congruenza.')
    if f==15:
        return N(rf'I triangoli $ABC$ e $DEF$ sono congruenti con corrispondenza $A\leftrightarrow D$, $B\leftrightarrow E$, $C\leftrightarrow F$. Se $BC={n+5}$ cm e $AB={n+2}$ cm, quanto misura $EF$?',n+5,[n+2,2*n+7,3,n],
            'La corrispondenza fra vertici determina quella fra i lati. Gli estremi B e C corrispondono rispettivamente a E e F. Il lato EF è quindi congruente al lato BC.',rf'EF=BC={n+5}',r'\,\mathrm{cm}')
    if f==16:
        return T(rf'Nel triangolo $ABC$ si sa che $AB=AC={n+4}$ cm. Si vuole dimostrare $\widehat B=\widehat C$. Qual è la tesi?',
            r'$\widehat B=\widehat C$', [rf'$AB=AC={n+4}\,\mathrm{{cm}}$',r'$AB=BC$',r'$\widehat A=90^\circ$'],
            'L’ipotesi raccoglie le informazioni assegnate, qui l’uguaglianza dei due lati. La tesi è l’affermazione da dimostrare. In questo caso si deve dedurre l’uguaglianza degli angoli opposti ai lati congruenti.')
    return T(rf'Due triangoli equilateri hanno lati rispettivamente di ${n}$ e ${2*n}$ cm. Hanno tutti gli angoli uguali a $60^\circ$. Sono congruenti?',
        'No, perché i lati corrispondenti hanno lunghezze diverse',
        ['Sì, perché basta avere i tre angoli corrispondenti uguali','Sì, perché entrambi sono equilateri','Non si può decidere perché mancano le altezze'],
        'La congruenza richiede uguaglianza delle lunghezze corrispondenti. In questo caso il lato del secondo triangolo è doppio di quello del primo. L’uguaglianza dei soli angoli non impone la stessa dimensione.')

def parallele(f,k):
    n=k+2
    if f==0:
        angle=40+3*k
        return N(rf'Due rette parallele sono tagliate da una trasversale. Un angolo misura ${angle}^\circ$. Quanto misura il suo corrispondente sull’altra retta?',angle,[180-angle,90-angle,2*angle,360-angle],
            'Per due rette parallele tagliate da una trasversale, gli angoli corrispondenti sono congruenti. La posizione relativa dei due angoli è la stessa nei due incroci. Le loro misure quindi coincidono.',rf'\beta={angle}^\circ',r'^\circ')
    if f==1:
        angle=50+2*k
        return N(rf'Due rette parallele sono tagliate da una trasversale. Un angolo interno misura ${angle}^\circ$. Quanto misura il suo alterno interno?',angle,[180-angle,90-angle,2*angle,360-angle],
            'Gli alterni interni stanno nella fascia fra le rette e da parti opposte della trasversale. Quando le rette sono parallele, questi angoli sono congruenti. La misura cercata è quindi uguale a quella nota.',rf'\beta={angle}^\circ',r'^\circ')
    if f==2:
        angle=65+3*k
        return N(rf'Due rette parallele sono tagliate da una trasversale. Un angolo interno misura ${angle}^\circ$. Quanto misura il coniugato interno dalla stessa parte della trasversale?',180-angle,[angle,90-angle,180+angle,2*angle],
            'Gli angoli coniugati interni sono supplementari quando le rette sono parallele. La loro somma vale centottanta gradi. Si sottrae da questa somma l’angolo noto.',rf'\beta=180^\circ-{angle}^\circ={180-angle}^\circ',r'^\circ')
    if f==3:
        angle=35+4*k
        return T(rf'Due rette tagliate da una trasversale hanno una coppia di angoli alterni interni entrambi di ${angle}^\circ$. Che cosa si può concludere?',
            'Le due rette sono parallele', ['Le rette sono necessariamente perpendicolari','Le due rette coincidono necessariamente','La trasversale è parallela a entrambe'],
            'Vale anche il criterio inverso degli alterni interni. L’uguaglianza di una coppia di tali angoli garantisce il parallelismo delle due rette. La misura particolare dell’angolo non impone la perpendicolarità.')
    if f==4:
        aa=20+3*k;bb=70-3*k
        return N(rf'La semiretta $OC$ è interna all’angolo convesso $AOB$. Si ha $AOC={aa}^\circ$ e $COB={bb}^\circ$. Quanto misura $AOB$?',90,[180,aa,bb,abs(aa-bb)],
            'La semiretta interna divide l’angolo in due parti senza sovrapposizione. La misura totale è quindi la somma delle due misure. Il risultato è un angolo retto e le rette che contengono OA e OB sono perpendicolari.',rf'\widehat{{AOB}}={aa}^\circ+{bb}^\circ=90^\circ',r'^\circ')
    if f==5:
        aa=70+k;bb=80+k;ans=360-aa-bb-90
        return N(rf'Un quadrilatero convesso ha tre angoli di ${aa}^\circ$, ${bb}^\circ$ e $90^\circ$. Quanto misura il quarto?',ans,[180-aa-bb,360-aa-bb,aa+bb,90],
            'Una diagonale divide il quadrilatero convesso in due triangoli. La somma dei quattro angoli interni vale quindi due angoli piatti. Si sottrae da trecentosessanta gradi la somma degli angoli noti.',rf'\delta=360^\circ-{aa}^\circ-{bb}^\circ-90^\circ={ans}^\circ',r'^\circ')
    if f==6:
        return N(rf'Un parallelogramma ha lati consecutivi lunghi ${2*n}$ e ${3*n}$ cm. Qual è il perimetro?',10*n,[5*n,6*n*n,8*n,12*n],
            'In un parallelogramma i lati opposti sono congruenti. Ogni lunghezza assegnata compare due volte lungo il contorno. Il perimetro è quindi il doppio della somma dei due lati consecutivi.',rf'P=2({2*n}+{3*n})={10*n}',r'\,\mathrm{cm}')
    if f==7:
        angle=50+3*k
        return N(rf'Un angolo interno di un parallelogramma misura ${angle}^\circ$. Quanto misura l’angolo interno consecutivo?',180-angle,[angle,90-angle,2*angle,360-angle],
            'I lati opposti del parallelogramma sono paralleli. I due angoli consecutivi sono quindi coniugati interni rispetto a un lato trasversale. La loro somma è centottanta gradi.',rf'\beta=180^\circ-{angle}^\circ={180-angle}^\circ',r'^\circ')
    if f==8:
        angle=55+2*k
        return N(rf'Un angolo di un parallelogramma misura ${angle}^\circ$. Quanto misura l’angolo opposto?',angle,[180-angle,90-angle,2*angle,360-angle],
            'Ciascuno degli angoli opposti è supplementare dello stesso angolo consecutivo. Sono quindi congruenti. La misura dell’angolo opposto coincide con quella data.',rf'\gamma={angle}^\circ',r'^\circ')
    if f==9:
        return N(rf'Le diagonali di un parallelogramma si incontrano in $O$. Se $AC={6*n}$ cm, quanto misura $AO$?',3*n,[6*n,12*n,2*n,4*n],
            'Le diagonali di un parallelogramma si bisecano, cioè ciascuna divide l’altra a metà. O è quindi il punto medio di AC. La lunghezza AO è metà della diagonale.',rf'AO=\frac{{AC}}2=\frac{{{6*n}}}2={3*n}',r'\,\mathrm{cm}')
    if f==10:
        return N(rf'In un rettangolo la diagonale $AC$ misura ${2*n+5}$ cm. Quanto misura la diagonale $BD$?',2*n+5,[n+5,R(2*n+5,2),4*n+10,2*n],
            'Un rettangolo è un parallelogramma con angoli retti. Le sue diagonali sono congruenti, come segue dalla congruenza dei triangoli rettangoli formati dai lati. La seconda diagonale ha quindi la misura della prima.',rf'BD=AC={2*n+5}',r'\,\mathrm{cm}')
    if f==11:
        return N(rf'Un rombo ha un lato di ${n+4}$ cm. Qual è il suo perimetro?',4*n+16,[2*n+8,(n+4)**2,3*n+12,4*n+4],
            'Un rombo ha tutti e quattro i lati congruenti. Il perimetro si ottiene sommando quattro volte la stessa lunghezza. Le misure degli angoli non servono per questo calcolo.',rf'P=4\cdot{n+4}={4*n+16}',r'\,\mathrm{cm}')
    if f==12:
        angle=50+4*k
        return N(rf'Un angolo interno di un rombo misura ${angle}^\circ$. La diagonale che parte da quel vertice biseca l’angolo. Quanto misura ciascuna metà?',R(angle,2),[angle,180-angle,90-angle,2*angle],
            'La diagonale di un rombo divide in due parti congruenti l’angolo del vertice da cui parte. La somma delle due parti restituisce l’angolo iniziale. Ciascuna parte è quindi metà della misura assegnata.',rf'\beta=\frac{{{angle}^\circ}}2={tex(R(angle,2))}^\circ',r'^\circ')
    if f==13:
        angle=50+3*k
        return N(rf'In un trapezio isoscele un angolo adiacente alla base maggiore misura ${angle}^\circ$. Quanto misura l’altro angolo adiacente alla stessa base?',angle,[180-angle,90-angle,2*angle,360-angle],
            'In un trapezio isoscele gli angoli adiacenti alla stessa base sono congruenti. La base indicata è la stessa per i due angoli. Si usa quindi l’uguaglianza delle loro misure.',rf'\beta={angle}^\circ',r'^\circ')
    if f==14:
        angle=60+2*k
        return N(rf'In un trapezio un angolo sulla base maggiore misura ${angle}^\circ$. Quanto misura l’angolo sulla base minore adiacente allo stesso lato obliquo?',180-angle,[angle,90-angle,180+angle,2*angle],
            'Le due basi sono parallele e il lato obliquo è una trasversale. Gli angoli indicati sono coniugati interni. Sono supplementari anche se il trapezio non è isoscele.',rf'\beta=180^\circ-{angle}^\circ={180-angle}^\circ',r'^\circ')
    if f==15:
        names=['PQRS','ABCD','EFGH','LMNO','RSTU'];name=names[(k-1)%5]
        return T(rf'Il quadrilatero ${name}$ ha quattro lati congruenti e quattro angoli retti. Quale classificazione è corretta usando le definizioni inclusive?',
            'È sia un rettangolo sia un rombo', ['È un rettangolo ma non un rombo','È un rombo ma non un rettangolo','Non è né rettangolo né rombo'],
            'I quattro angoli retti soddisfano la definizione di rettangolo. I quattro lati congruenti soddisfano la definizione di rombo. Le due classificazioni valgono contemporaneamente e il quadrilatero è un quadrato.')
    if f==16:
        return T(rf'Le diagonali di un quadrilatero convesso $ABCD$ si incontrano in $O$ con $AO=OC={n}$ cm e $BO=OD={n+2}$ cm. Quale conclusione è sempre giustificata?',
            'Il quadrilatero è un parallelogramma', ['Il quadrilatero è necessariamente un rettangolo','Il quadrilatero è necessariamente un rombo','Le diagonali sono necessariamente perpendicolari'],
            'Le uguaglianze mostrano che le diagonali si bisecano reciprocamente. Questa proprietà è un criterio per riconoscere un parallelogramma. Da sola non impone né angoli retti né lati tutti congruenti.')
    return N(rf'Un parallelogramma ha un lato di ${n+3}$ cm e perimetro ${6*n+10}$ cm. Quanto misura il lato consecutivo?',2*n+2,[5*n+7,3*n+5,n+2,2*n+4],
        'Il semiperimetro è la somma di due lati consecutivi. Si divide il perimetro per due e si sottrae il lato noto. Il lato trovato completa il contorno con la sua copia opposta.',rf'b=\frac{{{6*n+10}}}2-{n+3}={2*n+2}',r'\,\mathrm{cm}')

def statistica(f,k):
    n=k+2
    if f==0:
        data=[n,n+1,n+2,n+3];ans=R(2*n+3,2)
        return N(rf'Qual è la media aritmetica dei dati ${seq(data)}$?',ans,[sum(data),n+1,n+2,R(sum(data),3)],
            'La media aritmetica è la somma delle osservazioni divisa per il loro numero. Le osservazioni sono quattro. Il valore può essere non intero anche quando tutti i dati sono interi.',rf'\bar x=\frac{{{n}+{n+1}+{n+2}+{n+3}}}4={tex(ans)}')
    if f==1:
        data=[n+4,n,n+2,n+1,n+8]
        return N(rf'Qual è la mediana dei dati ${seq(data)}$?',n+2,[n+1,n+4,R(5*n+15,5),n+8],
            'La mediana si trova dopo aver ordinato i dati. Con cinque osservazioni si prende la terza nell’ordine crescente. Non si deve usare la posizione centrale dell’elenco originale se l’elenco non è ordinato.',rf'{n}<{n+1}<{n+2}<{n+4}<{n+8},\qquad\operatorname{{mediana}}={n+2}')
    if f==2:
        data=[n,n+2,n+5,n+9];ans=R(2*n+7,2)
        return N(rf'Qual è la mediana dei dati ordinati ${seq(data)}$?',ans,[n+2,n+5,R(4*n+16,4),n+9],
            'Con un numero pari di osservazioni ci sono due posizioni centrali. La mediana è la media aritmetica dei due valori centrali. Gli estremi dell’elenco non entrano in questo calcolo.',rf'\operatorname{{mediana}}=\frac{{{n+2}+{n+5}}}2={tex(ans)}')
    if f==3:
        data=[n,n+1,n+1,n+1,n+3,n+3]
        return N(rf'Qual è la moda dei dati ${seq(data)}$?',n+1,[n,n+3,R(6*n+9,6),3],
            'La moda è il valore che compare con la frequenza maggiore. Il valore n più uno compare tre volte, mentre gli altri compaiono meno spesso. La moda è il valore osservato e non il numero delle sue occorrenze.')
    if f==4:
        data=[n+1,n+8,n+2,n+4]
        return N(rf'Qual è il campo di variazione dei dati ${seq(data)}$?',7,[n+8,n+1,9,2*n+9],
            'Il campo di variazione è la differenza fra il massimo e il minimo. Si individuano quindi i due estremi dell’insieme dei dati. La posizione in cui compaiono nell’elenco non influisce.',rf'R={n+8}-{n+1}=7')
    if f==5:
        return N(rf'In ${5*n}$ osservazioni, una modalità compare ${2*n}$ volte. Qual è la sua frequenza relativa?',R(2,5),[R(5,2),R(1,5),2*n,R(2*n,100)],
            'La frequenza relativa è la frequenza assoluta divisa per il numero totale di osservazioni. Il fattore comune n si semplifica. Il risultato è compreso fra zero e uno.',rf'f=\frac{{{2*n}}}{{{5*n}}}=\frac25')
    if f==6:
        return N(rf'In un’indagine di ${10*n}$ persone, il $30\%$ sceglie una risposta. Quante persone la scelgono?',3*n,[30*n,R(n,3),7*n,10*n-30],
            'La percentuale indica tre decimi del totale. Moltiplicando il numero di persone per tre decimi si ricava la frequenza assoluta. Il risultato è un intero, come richiede il conteggio delle persone.',rf'n_i=\frac{{30}}{{100}}\cdot{10*n}={3*n}')
    if f==7:
        ans=n+R(4,3)
        return N(rf'Un valore ${n}$ compare 2 volte e un valore ${n+2}$ compare 4 volte. Qual è la media delle sei osservazioni?',ans,[n+1,2*n+2,R(2*n+4,6),n+2],
            'Ogni valore deve essere pesato con la propria frequenza. La somma pesata si divide per il totale delle frequenze. La media risulta più vicina al valore che compare più spesso.',rf'\bar x=\frac{{2\cdot{n}+4\cdot{n+2}}}{{2+4}}={tex(ans)}')
    if f==8:
        return N(rf'Una tabella riporta tre modalità con frequenze ${n}$, ${2*n}$ e ${3*n}$. Qual è il numero totale di osservazioni?',6*n,[3*n,2*n,6*n*n,3],
            'Le modalità rappresentano parti disgiunte dell’insieme osservato. Il totale si ottiene sommando tutte le frequenze assolute. Il numero delle modalità non coincide con il numero delle osservazioni.',rf'N={n}+{2*n}+{3*n}={6*n}')
    if f==9:
        return N(rf'I valori $1,2,3$ hanno frequenze rispettivamente ${n}$, ${2*n}$ e ${n+1}$. Quante osservazioni hanno valore al massimo $2$?',3*n,[2*n,n,4*n+1,n+1],
            'La condizione al massimo due comprende i valori uno e due. Si sommano quindi le frequenze di entrambe le modalità. La frequenza del valore tre rimane esclusa.',rf'N_{{\le2}}={n}+{2*n}={3*n}')
    if f==10:
        return N(rf'Una modalità rappresenta il $25\%$ di ${4*n}$ osservazioni. Qual è l’angolo del suo settore in un diagramma circolare?',90,[25,100,180,45],
            'L’intero diagramma circolare misura trecentosessanta gradi. Il settore deve occupare la stessa frazione del cerchio della frequenza relativa. Un quarto del totale corrisponde a un quarto dell’angolo giro.',rf'\alpha=\frac{{25}}{{100}}\cdot360^\circ=90^\circ',r'^\circ')
    if f==11:
        old=n+4;new=n+7
        return N(rf'La media di un gruppo di dati è ${old}$. Se si aggiunge 3 a ogni dato, qual è la nuova media?',new,[old+3*n,old,3*old,R(old,3)],
            'Aggiungere tre a ogni dato aumenta la somma totale di tre volte il numero dei dati. Dividendo per lo stesso numero di dati, la media aumenta di tre. La dimensione del gruppo non cambia questo risultato.',rf'\overline{{x+3}}=\bar x+3={old}+3={new}')
    if f==12:
        old=n+3
        return N(rf'La media di un gruppo di misure è ${old}$ cm. Se ogni misura viene raddoppiata, qual è la nuova media?',2*old,[old+2,old,old*old,R(old,2)],
            'Raddoppiare ogni misura raddoppia anche la somma delle misure. Il numero delle osservazioni rimane invariato. La nuova media è quindi doppia della media iniziale.',rf'\overline{{2x}}=2\bar x=2\cdot{old}={2*old}',r'\,\mathrm{cm}')
    if f==13:
        return N(rf'La media di 4 dati è ${n+3}$. Tre dati valgono ${n}$, ${n+2}$ e ${n+4}$. Quanto vale il quarto?',n+6,[n+3,4*n+12,n+2,n+4],
            'Dalla media e dal numero dei dati si ricava la somma totale. Si sottrae poi la somma dei tre dati noti. Il risultato è il valore mancante.',rf'x=4\cdot{n+3}-({n}+{n+2}+{n+4})={n+6}')
    if f==14:
        examples=['il mezzo usato per andare a scuola','il colore degli occhi','la lingua madre','il sistema operativo dello smartphone','il colore preferito']
        item=examples[(k-1)%5]
        return T(rf'In un’indagine si registra {item}. Che tipo di carattere è?',
            'Qualitativo nominale', ['Quantitativo continuo','Quantitativo discreto','Qualitativo ordinale, con un ordine naturale obbligatorio'],
            'Le modalità sono categorie. Non sono quantità misurabili e non hanno un ordine naturale unico. Il carattere è quindi qualitativo nominale.')
    if f==15:
        examples=['il numero di figli per famiglia','il numero di libri letti in un mese','il numero di computer in un laboratorio','il numero di autobus passati in un’ora','il numero di errori in un dettato']
        item=examples[(k-1)%5]
        return T(rf'In un’indagine si registra {item}. Che tipo di carattere è?',
            'Quantitativo discreto', ['Quantitativo continuo','Qualitativo nominale','Qualitativo ordinale senza valori numerici'],
            'La grandezza osservata si ottiene tramite un conteggio. Può assumere valori interi non negativi. Perciò è un carattere quantitativo discreto.')
    if f==16:
        lo=50+n;hi=60+n
        return T(rf'Un grafico a barre confronta i valori ${lo}$ e ${hi}$ con l’asse verticale che parte da ${lo-1}$. Quale osservazione è corretta?',
            'La differenza numerica è 10, ma l’asse troncato può amplificare visivamente il confronto',
            ['Il secondo valore è almeno dieci volte il primo','La differenza è 1 perché l’asse parte vicino ai valori','I due valori sono necessariamente uguali'],
            'Le etichette numeriche indicano una differenza di dieci unità. Se l’asse delle barre non parte da zero, il rapporto fra le altezze visibili non coincide con il rapporto fra i valori. Il confronto richiede quindi di leggere la scala.')
    small=n+2;data=[small,small,small+1,small+1,small+20]
    return N(rf'Qual è la mediana dei dati ordinati ${seq(data)}$, che includono un valore molto più grande degli altri?',small+1,[R(sum(data),5),small,small+20,20],
        'La mediana di cinque dati ordinati è il terzo valore. Il valore estremo aumenta molto la somma e quindi la media, ma non sposta la posizione centrale in questo elenco. Il terzo dato resta il valore richiesto.',rf'\operatorname{{mediana}}={small+1}')

# Le teorie sono sorgenti Markdown redatte e revisionate separatamente:
# questo generatore NON le sovrascrive.
CATALOGO = [
 ('numeri-e-operazioni',numeri,
  'Somme con segno|Sottrazioni di espressioni|Priorità delle operazioni|Somme di frazioni|Prodotti di frazioni|Divisioni di frazioni|Massimo comune divisore|Minimo comune multiplo e cicli|Decimali finiti|Decimali periodici|Punti medi numerici|Distanze sulla retta|Problemi con pacchetti|Prodotti con segno|Somme di quantità|Differenze di frazioni|Interi e frazioni|Addendi mancanti',
  ['operazioni','operazioni','operazioni','frazioni','frazioni','frazioni','divisibilita','divisibilita','retta','retta','retta','retta','problemi','operazioni','problemi','frazioni','frazioni','operazioni'],
  [('Somme e differenze con segno',[0,1,17]),('Operazioni fra frazioni',[3,4,5]),('Espressioni numeriche',[13,2,16]),('Confronti e distanze',[10,11,15]),('Divisibilità e quantità raggruppate',[6,7,12]),('Numeri decimali e frazioni',[8,9,10]),('Problemi con quantità razionali',[14,12,17]),('Controlli sulle operazioni',[1,5,16])]),
 ('potenze-proporzioni-percentuali',potenze,
  'Prodotti di potenze|Quozienti di potenze|Potenze di potenze|Esponenti negativi|Segno e base della potenza|Fattori di dieci|Proporzioni con incognita|Prezzo unitario|Proporzionalità inversa|Percentuali di un totale|Prezzi scontati|Aumenti percentuali|Prezzi iniziali|Variazioni successive|Scale cartografiche|Ripartizioni in rapporto|Percentuale di una parte|Proporzioni nelle ricette',
  ['potenze']*5+['notazione','rapporti','proporzionalita','proporzionalita','percentuali','percentuali','percentuali','percentuali','percentuali','scale','rapporti','percentuali','proporzionalita'],
  [('Proprietà delle potenze',[0,1,2]),('Segni ed esponenti',[4,3,5]),('Rapporti e proporzioni',[6,15,17]),('Prezzi e quantità proporzionali',[7,8,17]),('Percentuali e confronti',[9,16,11]),('Sconti e prezzi iniziali',[10,12,13]),('Scale e ripartizioni',[14,15,6]),('Modelli proporzionali nei problemi',[7,8,14])]),
 ('insiemi-e-logica',insiemi,
  'Unione di insiemi|Intersezione di insiemi|Differenza di insiemi|Complementari|Riconoscimento di funzioni|Cardinalità del prodotto cartesiano|Conteggi con sovrapposizioni|Conteggi del complementare|Insiemi disgiunti|Appartenenza|Inclusione propria|Congiunzioni logiche|Negazioni di disuguaglianze|Negazione di frasi universali|Negazione di frasi esistenziali|Immagini di una funzione|Operazioni composte|Coppie ordinate',
  ['regole','regole','regole','regole','relazioni','relazioni','metodo','metodo','metodo','concetti','concetti','esempi','problemi','problemi','problemi','relazioni','applicazioni','relazioni'],
  [('Operazioni fra insiemi',[0,1,2]),('Complementari e operazioni composte',[3,7,16]),('Conteggi senza duplicazioni',[8,6,7]),('Elementi e sottoinsiemi',[9,10,2]),('Coppie ordinate e funzioni',[17,4,15]),('Proposizioni e negazioni',[11,12,13]),('Quantificatori e significato delle frasi',[13,14,11]),('Relazioni e problemi di conteggio',[5,6,4])]),
 ('monomi-e-polinomi',monomi,
  'Coefficienti di monomi simili|Prodotti di monomi|Quozienti di monomi|Potenze di monomi|Grado di monomi|Somme di polinomi|Differenze di polinomi|Monomi per polinomi|Prodotti di binomi|Valori numerici|Termini noti|Grado dopo la riduzione|Perimetri letterali|Aree letterali|Coefficienti da determinare|Coefficienti frazionari|Monomi mancanti|Polinomi opposti',
  ['somme','prodotti','quozienti','quozienti','grado','somme','somme','prodotti','prodotti','valore','grado','grado','valore','valore','monomi','somme','somme','somme'],
  [('Somme e differenze di polinomi',[0,5,6]),('Prodotti letterali',[1,7,8]),('Potenze e coefficienti frazionari',[3,2,15]),('Gradi e termini del polinomio',[4,10,11]),('Valori e coefficienti incogniti',[9,14,16]),('Formule di area e perimetro',[12,13,8]),('Opposti e differenze',[17,6,15]),('Prodotti e quozienti di monomi',[1,2,3])]),
 ('prodotti-notevoli',notevoli,
  'Quadrati di somme|Quadrati di differenze|Somma per differenza|Quadrati con coefficienti|Cubi di somme|Cubi di differenze|Coefficienti centrali|Completamenti di quadrati|Quadrati numerici|Prodotti numerici simmetrici|Quadrati di trinomi|Differenze di quadrati sviluppati|Somme di quadrati sviluppati|Variazioni di area|Segni del doppio prodotto|Differenze di quadrati letterali|Quadrati con frazioni|Riconoscimento di termini mancanti',
  ['quadrati','quadrati','somma-differenza','quadrati','cubi','cubi','riconoscimento','riconoscimento','applicazioni','somma-differenza','trinomio','applicazioni','applicazioni','applicazioni','quadrati','somma-differenza','quadrati','riconoscimento'],
  [('Quadrati di binomi',[0,1,3]),('Differenze di quadrati',[2,9,15]),('Cubi di binomi',[4,5,10]),('Completamenti e coefficienti',[6,7,17]),('Prodotti notevoli numerici e geometrici',[8,9,13]),('Somme e differenze di quadrati',[11,12,13]),('Segni e coefficienti frazionari',[14,16,1]),('Riconoscimento delle formule',[17,10,15])]),
 ('scomposizioni',scomposizioni,
  'Raccoglimenti totali|Differenze di quadrati|Quadrati di somme|Quadrati di differenze|Trinomi con somma positiva|Trinomi con somma negativa|Raccoglimenti parziali|Scomposizioni in più passaggi|Differenze di quadrati con coefficienti|Raccoglimenti negativi|Valori nulli di un prodotto|Termini noti mancanti|MCD di monomi|mcm di monomi|Fattori residui|Raccoglimenti con due lettere|Differenze di quarte potenze|Annullamento di fattori',
  ['comune','quadrati','quadrati','quadrati','trinomio','trinomio','parziale','completa','quadrati','comune','mcd-mcm','trinomio','mcd-mcm','mcd-mcm','comune','comune','completa','mcd-mcm'],
  [('Raccoglimenti comuni',[0,9,15]),('Prodotti notevoli al contrario',[1,2,3]),('Trinomi da scomporre',[4,5,11]),('Raccoglimenti e più passaggi',[6,7,16]),('Differenze di quadrati letterali',[1,8,16]),('MCD e mcm di monomi',[12,13,14]),('Fattori e valori che annullano',[10,17,11]),('Controlli delle scomposizioni',[14,15,6])]),
 ('frazioni-algebriche',frazioni,
  'Dominio con denominatore lineare|Dominio con differenza di quadrati|Semplificazioni di fattori lineari|Raccoglimenti nelle frazioni|Somme con denominatore comune|Differenze con denominatore comune|Prodotti di frazioni|Quozienti di frazioni|Somme con denominatori diversi|Differenze con denominatori diversi|Valori numerici ammessi|Esclusioni dopo la semplificazione|Zeri di una frazione|Interi e frazioni algebriche|Fattori opposti|Condizioni sulla divisione|Differenze con interi|Semplificazioni con fattori ripetuti',
  ['dominio','dominio','semplificare','semplificare','somme','somme','prodotti','divisioni','somme','somme','valori','semplificare','valori','somme','prodotti','divisioni','somme','semplificare'],
  [('Condizioni di esistenza',[0,1,15]),('Semplificazioni e dominio',[2,3,11]),('Somme e differenze con denominatore comune',[4,5,16]),('Denominatori da ricondurre',[8,9,13]),('Prodotti e divisioni',[6,7,15]),('Valori numerici e zeri',[10,12,11]),('Segni e fattori ripetuti',[14,17,2]),('Operazioni combinate e controlli',[13,16,7])]),
 ('equazioni-primo-grado',equazioni,
  'Equazioni in forma lineare|Equazioni con binomi|Incognita in entrambi i membri|Frazioni con denominatore numerico|Somme di frazioni|Equazioni impossibili|Identità|Numeri consecutivi|Misure di rettangoli|Costi fissi e variabili|Problemi con età|Medie e dato mancante|Proporzioni|Formule inverse|Equazioni con denominatore letterale|Candidati esclusi dal dominio|Coefficienti negativi|Identità con parametro',
  ['lineari','parentesi','lineari','frazioni','frazioni','classificazione','classificazione','problemi','problemi','problemi','problemi','problemi','problemi','problemi','frazioni','classificazione','lineari','classificazione'],
  [('Principi di equivalenza',[0,2,16]),('Parentesi e denominatori numerici',[1,3,4]),('Classificare le equazioni',[5,6,17]),('Problemi con numeri e medie',[7,11,12]),('Costi, età e misure',[10,9,8]),('Formule e proporzioni',[12,13,11]),('Equazioni fratte e dominio',[14,15,3]),('Verifiche di soluzioni e identità',[2,16,17])]),
 ('disequazioni-primo-grado',disequazioni,
  'Coefficienti positivi|Coefficienti negativi|Parentesi nelle disequazioni|Incognita in entrambi i membri|Denominatori numerici|Differenze di frazioni|Intersezioni di intervalli|Unioni di semirette|Conteggi di soluzioni intere|Massimi acquistabili|Minimi necessari|Inversione del verso|Doppie disuguaglianze|Verifica di valori|Disequazioni impossibili|Disequazioni sempre vere|Fattori negativi|Vincoli incompatibili',
  ['coefficienti','ordine','coefficienti','coefficienti','coefficienti','coefficienti','sistemi','sistemi','intervalli','problemi','problemi','ordine','sistemi','coefficienti','casi','casi','ordine','sistemi'],
  [('Isolare la variabile',[0,3,1]),('Raggruppamenti e frazioni',[2,4,5]),('Intervalli e vincoli simultanei',[6,12,17]),('Soluzioni intere nei problemi',[8,9,10]),('Segni e verso della disuguaglianza',[1,11,16]),('Unioni e intersezioni',[7,6,17]),('Casi impossibili e sempre veri',[13,14,15]),('Controlli sui valori di confine',[4,12,13])]),
 ('geometria-piano-triangoli',geometria,
  'Segmenti consecutivi|Punti medi|Angoli complementari|Angoli supplementari|Opposti al vertice|Bisettrici|Terzo angolo di un triangolo|Angoli alla base|Angolo al vertice|Angoli esterni|Disuguaglianza triangolare|Perimetri isosceli|Criterio LAL|Criterio ALA|Criterio LLL|Corrispondenza fra lati|Ipotesi e tesi|Limiti dei soli angoli uguali',
  ['concetti','concetti','regole','regole','regole','regole','esempi','problemi','problemi','esempi','disuguaglianza','applicazioni','metodo','metodo','metodo','metodo','controlli','controlli'],
  [('Segmenti e punti medi',[0,1,11]),('Relazioni fra angoli',[2,3,4]),('Bisettrici e triangoli',[5,6,9]),('Triangoli isosceli',[7,8,11]),('Possibilità di costruire un triangolo',[10,11,6]),('Criteri di congruenza',[12,13,14]),('Corrispondenze e dimostrazioni',[15,16,12]),('Che cosa garantiscono i dati',[14,17,16])]),
 ('parallele-e-quadrilateri',parallele,
  'Angoli corrispondenti|Angoli alterni interni|Angoli coniugati interni|Criteri di parallelismo|Angoli retti|Somma degli angoli di un quadrilatero|Perimetri di parallelogrammi|Angoli consecutivi|Angoli opposti|Diagonali e punti medi|Diagonali di rettangoli|Perimetri di rombi|Bisettrici del rombo|Angoli alla base del trapezio isoscele|Angoli sullo stesso lato del trapezio|Classificazioni inclusive|Criterio delle diagonali|Lati incogniti dal perimetro',
  ['regole','regole','regole','regole','concetti','metodo','esempi','esempi','esempi','esempi','casi-particolari','casi-particolari','casi-particolari','applicazioni','applicazioni','metodo','problemi','esempi'],
  [('Angoli di rette parallele',[0,1,2]),('Riconoscere parallelismi e angoli retti',[3,4,2]),('Angoli dei quadrilateri',[5,7,8]),('Perimetri e lati incogniti',[6,11,17]),('Diagonali dei parallelogrammi',[9,10,16]),('Rombi e classificazioni',[11,12,15]),('Angoli dei trapezi',[13,14,2]),('Proprietà sufficienti e conclusioni',[15,16,10])]),
 ('dati-e-statistica',statistica,
  'Medie semplici|Mediane di gruppi dispari|Mediane di gruppi pari|Mode|Campi di variazione|Frequenze relative|Frequenze da percentuali|Medie con frequenze|Totali delle frequenze|Frequenze cumulate|Settori circolari|Traslazioni dei dati|Variazioni di scala dei dati|Dati mancanti dalla media|Caratteri qualitativi|Caratteri quantitativi discreti|Scale dei grafici|Mediane e valori estremi',
  ['media','mediana-moda','mediana-moda','mediana-moda','dispersione','frequenze','frequenze','media','frequenze','frequenze','grafici','media','media','media','dati','dati','grafici','dispersione'],
  [('Media e frequenze',[0,7,13]),('Mediane e ordinamento',[1,2,17]),('Moda e dispersione',[3,4,17]),('Frequenze assolute e relative',[5,6,8]),('Conteggi e rappresentazioni',[9,10,16]),('Come cambia la media',[11,12,13]),('Tipi di dati',[14,15,3]),('Leggere criticamente un riepilogo',[4,16,17])]),
]

def normalizza(text,k=None):
    text=re.sub(r'\^(-?\d{2,})(?!\d)',r'^{\1}',text)
    if k is not None:
        n=k+2
        text=re.sub(r'\bn x\b',lambda m:M(n*x),text)
        text=re.sub(r'\bn y\b',lambda m:M(n*y),text)
        text=re.sub(r'\bn\b',lambda m:M(n),text)
    assert not any(ord(c)<32 and c not in '\n\t' for c in text),repr(text)
    return text

def normalizza_q(q,k):
    q.prompt=normalizza(q.prompt)
    q.explanation=normalizza(q.explanation,k)
    q.steps=normalizza(q.steps)
    q.choices()
    return q

def yaml_front(data):
    return '---\n'+yaml.safe_dump(data,allow_unicode=True,sort_keys=False).strip()+'\n---\n\n'

def scrivi(collection,slug,filename,body):
    p=ROOT/'src/content'/collection/COURSE/slug
    p.mkdir(parents=True,exist_ok=True)
    out=p/filename
    out.write_text(body.strip()+'\n',encoding='utf-8')
    return str(out.relative_to(ROOT))

def render_spiegazione(q):
    chunks=[q.explanation]
    if q.steps: chunks+=['$$\n'+q.steps.replace(r'\dfrac',r'\frac')+'\n$$']
    chunks+=['Il risultato è '+q.solution()+'.']
    return '\n\n'.join(chunks)

def render_options(q,values):
    return '\n'.join('- '+normalizza(q.show(v)) for v in values)

def audit_entry(collection,slug,family,k,q,path,options,correct):
    return {'collection':collection,'chapter':slug,'family':family,'variant':k,'path':path,
            'prompt':q.prompt,'values':[str(v) for v in options],
            'options':[normalizza(q.show(v)) for v in options],
            'correct_index':correct,'expected':str(q.values[0]),
            'expected_display':normalizza(q.solution()),'steps':q.steps,
            'explanation':q.explanation,'textual':q.textual}

def generate(audit_path=None):
    audit=[];counts={}
    for slug,fn,familystr,anchors,groups in CATALOGO:
        fam=familystr.split('|')
        assert len(fam)==len(anchors)==18
        theory=ROOT/'src/content/teoria'/COURSE/(slug+'.md')
        assert theory.is_file(),f'Teoria mancante: {slug}'
        theorytext=theory.read_text()
        theoryanchors=set(re.findall(r'\{#([\w-]+)',theorytext))
        assert set(anchors)<=theoryanchors,(slug,set(anchors)-theoryanchors)
        assert len(re.findall(r'^## ',theorytext,re.M))>=6
        assert ':::percorso' in theorytext
        prompts=set()
        positions=Counter()
        for f in range(18):
            for k in range(1,6):
                i=f*5+k
                q=normalizza_q(fn(f,k),k)
                assert q.prompt not in prompts,(slug,f,k,'traccia duplicata')
                prompts.add(q.prompt)
                choices=q.choices()
                correct=(i-1)%4
                options=choices[1:]
                options.insert(correct,choices[0])
                positions[correct+1]+=1
                body=yaml_front({'corretta':correct+1})+q.prompt+'\n\n'+render_options(q,options)+'\n\n## Spiegazione\n\n'+render_spiegazione(q)
                path=scrivi('domande',slug,str(i)+'.md',normalizza(body))
                audit.append(audit_entry('domande',slug,fam[f],k,q,path,options,correct+1))
        assert sorted(positions.values())==[22,22,23,23]
        used_worked=set()
        for i,(title,families) in enumerate(groups,1):
            used=list(dict.fromkeys(anchors[f] for f in families))
            body=yaml_front({'titolo':title,'gratis':i<=3,'teoria':used,'parole':[title,'Primo anno','Verifiche']})
            for j,f in enumerate(families,1):
                k=next(v for v in [5+j,6,7,8] if (f,v) not in used_worked)
                used_worked.add((f,k))
                q=normalizza_q(fn(f,k),k)
                body+=f'## Esercizio {j}\n\n'+q.prompt+'\n\n'
                exercise_options=q.choices()[1:]
                exercise_correct=(i+j-2)%4
                exercise_options.insert(exercise_correct,q.choices()[0])
                if q.textual or 'fra questi' in q.prompt:
                    body+=render_options(q,exercise_options)+'\n\n'
                if q.steps: body+='$$\n'+q.steps.replace(r'\dfrac',r'\frac')+'\n$$\n\n'
                body+='<div class="spiegazione">\n\n'+q.explanation+'\n\nIl risultato è '+q.solution()+'.\n\n</div>\n\n'
                audit.append(audit_entry('svolti',slug,fam[f],k,q,f'src/content/svolti/{COURSE}/{slug}/{i}.md#esercizio-{j}',exercise_options,exercise_correct+1))
            scrivi('svolti',slug,str(i)+'.md',normalizza(body))
        for i,f in enumerate(range(14),1):
            k=9;q=normalizza_q(fn(f,k),k)
            body=yaml_front({'titolo':fam[f],'teoria':[anchors[f]],'parole':[fam[f],'Primo anno','Verifiche']})+q.prompt+'\n\n'
            practice_options=q.choices()[1:]
            practice_correct=(i-1)%4
            practice_options.insert(practice_correct,q.choices()[0])
            if q.textual or 'fra questi' in q.prompt:
                body+=render_options(q,practice_options)+'\n\n'
            body+=':::soluzione\n'+normalizza(q.solution())+'\n:::\n'
            path=scrivi('dafare',slug,str(i)+'.md',normalizza(body))
            audit.append(audit_entry('dafare',slug,fam[f],k,q,path,practice_options,practice_correct+1))
        counts[slug]={'theory':1,'worked_sheets':8,'worked_exercises':24,'practice':14,'quiz':90,'families':18,'positions':dict(positions)}
        print(slug,': 90 quiz, 8 schede (24 esercizi), 14 tracce',flush=True)
    if audit_path:
        p=Path(audit_path);p.parent.mkdir(parents=True,exist_ok=True)
        p.write_text(json.dumps({'course':COURSE,'counts':counts,'records':audit},ensure_ascii=False,indent=2)+'\n')
    return counts

if __name__=='__main__':
    import argparse
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--audit',help='Percorso JSON opzionale per la revisione indipendente')
    args=parser.parse_args()
    generate(args.audit)
