"""Rigenera i contenuti di Statistica e probabilità dai sorgenti revisionabili."""
from pathlib import Path
import json
import math
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT/'strumenti/statistica'))
from teorie import TEORIE
from esercizi import caso, f
from concetti import CONCETTI

CAPITOLI = [
('dati-e-frequenze','Dati, frequenze e grafici','Dati e frequenze','Popolazioni e campioni, scale di misura, distribuzioni di frequenza, istogrammi e tabelle a doppia entrata.'),
('indici-descrittivi','Indici di posizione e dispersione','Indici descrittivi','Medie, mediana, quantili, varianze, standardizzazione e confronto della dispersione.'),
('probabilita-e-combinatoria','Probabilità e calcolo combinatorio','Probabilità e conteggi','Eventi e assiomi, conteggi ordinati e non ordinati, complementari ed estrazioni.'),
('probabilita-condizionata','Probabilità condizionata, indipendenza e Bayes','Condizionata e Bayes','Condizionamento, alberi, indipendenza, probabilità totale e formula di Bayes.'),
('variabili-discrete','Variabili aleatorie e distribuzioni discrete','Variabili discrete','Masse, attese e varianze; Bernoulli, binomiale, geometrica, Poisson e ipergeometrica.'),
('variabili-continue','Variabili aleatorie e distribuzioni continue','Variabili continue','Densità e ripartizioni, uniforme, esponenziale, normale e distribuzioni per l’inferenza.'),
('distribuzioni-congiunte','Distribuzioni congiunte, covarianza e trasformazioni','Distribuzioni congiunte','Marginali e condizionate, indipendenza, covarianza, correlazione, somme ed estremi.'),
('campionamento-e-teoremi-limite','Campionamento, legge dei grandi numeri e teorema centrale del limite','Campionamento e TCL','Distribuzioni campionarie, errori standard, disuguaglianze, convergenza e approssimazioni normali.'),
('stima-puntuale','Stima puntuale e massima verosimiglianza','Stima puntuale','Stimatori, distorsione, MSE, metodo dei momenti, massima verosimiglianza e consistenza.'),
('intervalli-di-confidenza','Intervalli di confidenza e numerosità campionaria','Intervalli di confidenza','Intervalli per medie, proporzioni e varianze, confronto di campioni e pianificazione della precisione.'),
('test-di-ipotesi','Test di ipotesi, potenza e chi quadrato','Test di ipotesi','Ipotesi e decisioni, valore p, test per medie e proporzioni, adattamento e indipendenza.'),
('regressione-e-correlazione','Regressione lineare e correlazione','Regressione','Minimi quadrati, residui, correlazione, inferenza sulla pendenza e intervalli di previsione.'),
]

def scrivi(tipo, slug, nome, fm, corpo):
    path=ROOT/'src/content'/tipo/'statistica'/slug
    if tipo=='teoria':
        path=path.with_suffix('.md')
    else:
        path=path/f'{nome}.md'
    path.parent.mkdir(parents=True,exist_ok=True)
    front='\n'.join(f'{k}: {json.dumps(v,ensure_ascii=False)}' for k,v in fm.items())
    path.write_text(f'---\n{front}\n---\n\n{corpo.strip()}\n')

def arrotonda(c):
    return c.domanda + (' Arrotondare il risultato a quattro cifre decimali.' if abs(c.valore-round(c.valore))>1e-9 else '')

def risultato(c):
    return f'${f(c.valore)}$'

def svolgimento(c):
    return f'$$\n{c.formula}\\approx {f(c.valore)}.\n$$\n\n<div class="spiegazione">\n\n{c.motivo}\n\n</div>'

def opzioni(c):
    x=float(c.valore)
    candidati=([x/2,1-x,x*.75,x+.1,x+.2,.1,.25,.5,.75,.9] if c.probabilita else [x/2,2*x,1.5*x,x+1,x-1,x+2,x-2,0,1,2,3])
    valori=[x]
    for y in candidati:
        if c.probabilita and not 0<=y<=1: continue
        if all(abs(y-z)>.0002 for z in valori): valori.append(y)
        if len(valori)==4: break
    assert len(valori)==4,c
    out=[f'${f(y)}$' for y in valori]
    assert len(set(out))==4,c
    return out

def quiz(slug,n,ancora,domanda,scelte,spiegazione):
    posizione=(n-1)%4
    corretto=scelte[0]
    scelte=scelte[-posizione:]+scelte[:-posizione] if posizione else scelte
    corpo=domanda+'\n\n'+'\n'.join('- '+s for s in scelte)
    corpo+='\n\n## Spiegazione\n\n'+spiegazione+f'\n\n[Teoria del procedimento](/statistica/{slug}/teoria#{ancora}).'
    scrivi('domande',slug,n,{'corretta':scelte.index(corretto)+1},corpo)

def main():
    audit=[]
    for j,(slug,titolo,breve,sommario) in enumerate(CAPITOLI):
        teoria=TEORIE[slug].strip()
        ancore=set(re.findall(r'\{#([\w-]+)',teoria))
        scrivi('teoria',slug,None,{'titolo':titolo,'sommario':sommario},teoria)
        for k in range(10):
            cs=[caso(j,k,v) for v in [0,1]]
            for c in cs: assert c.ancora in ancore,(slug,c.ancora)
            corpo='\n\n'.join(f'## Esercizio {i+1}\n\n{arrotonda(c)}\n\n{svolgimento(c)}' for i,c in enumerate(cs))
            scrivi('svolti',slug,k+1,{'titolo':cs[0].titolo,'gratis':k<3,'teoria':list(dict.fromkeys(c.ancora for c in cs)),'parole':[cs[0].titolo.lower(),breve.lower()]},corpo)
        # Tipologie diverse distribuite lungo l'intero capitolo, con varianti nuove.
        for i in range(14):
            k=i%10;v=2+i//10
            c=caso(j,k,v)
            scrivi('dafare',slug,i+1,{'titolo':c.titolo+f' · esercizio {i+1}','teoria':[c.ancora],'parole':[c.titolo.lower()]},arrotonda(c)+'\n\n:::soluzione\n'+risultato(c)+'\n:::')
        for i in range(40):
            k=i%10;v=4+i//10;c=caso(j,k,v)
            assert math.isfinite(c.valore),(j,k,v)
            if c.probabilita: assert 0<=c.valore<=1,(j,k,v)
            spiegazione=c.motivo+f'\n\n$$\n{c.formula}\\approx {f(c.valore)}.\n$$'
            quiz(slug,i+1,c.ancora,arrotonda(c),opzioni(c),spiegazione)
        for i,(ancora,domanda,corretta,distrattori,motivo) in enumerate(CONCETTI[j],41):
            assert ancora in ancore,(slug,ancora)
            quiz(slug,i,ancora,domanda,[corretta,*distrattori],motivo)
        for k in range(10):
            for v in range(8):
                c=caso(j,k,v)
                audit.append({'capitolo':slug,'tipo':k,'variante':v,'domanda':c.domanda,'risultato':float(c.valore),'formula':c.formula})
        print(f'{slug}: 10 schede, 20 esercizi svolti, 14 tracce, 45 quiz')
    (ROOT/'strumenti/statistica/risultati.json').write_text(json.dumps(audit,ensure_ascii=False,indent=2)+'\n')

if __name__=='__main__': main()
