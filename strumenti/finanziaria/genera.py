"""Esercizi originali di Matematica finanziaria; parametri riproducibili e controlli a residuo."""
from pathlib import Path
import json, math
ROOT=Path(__file__).resolve().parents[2]
MATERIA='matematica-finanziaria'
REGISTRO=[]
def f(x,d=4):
    s=f'{x:.{d}f}'.rstrip('0').rstrip('.') if d else str(int(x))
    return (s or '0').replace('.','{,}')
def af(n,i): return "a_{\\overline{"+str(n)+"}|"+f(i)+"}"
def sf(n,i): return "s_{\\overline{"+str(n)+"}|"+f(i)+"}"
def a(n,i): return sum((1+i)**(-h) for h in range(1,n+1))
def s(n,i): return sum((1+i)**h for h in range(n))
def pv(c,t,i): return sum(x*(1+i)**(-u) for x,u in zip(c,t))
def bisect(fun,lo,hi):
    flo=fun(lo)
    assert flo*fun(hi)<=0
    for _ in range(120):
        mid=(lo+hi)/2
        if flo*fun(mid)>0: lo=mid;flo=fun(mid)
        else: hi=mid
    return (lo+hi)/2

def ex(title,anchor,question,steps,why,answer,unit,params,check):
    assert math.isfinite(answer)
    if r'\quad' in steps:
        steps=r'\begin{gathered}'+steps.replace(r',\qquad ',r'\\[6pt]').replace(r',\quad ',r'\\[6pt]').replace(r'\qquad ',r'\\[6pt]').replace(r'\quad ',r'\\[6pt]')+r'\end{gathered}'
    return dict(title=title,anchor=anchor,question=question,steps=steps,why=why,answer=answer,unit=unit,params=params,check=check)

def regimi(t,k):
    C=1800+170*k;i=.025+.002*k;n=2+k%4
    if t==0:
        months=7+k;T=months/12;ans=C*(1+i*T)
        return ex('Montanti nel regime semplice','semplice',rf'Calcolare il montante di ${f(C)}$ euro al tasso annuo semplice del ${f(100*i)}\%$ per ${months}$ mesi.',rf'M=C(1+it)={f(C)}\left(1+{f(i)}\cdot\frac{{{months}}}{{12}}\right)', 'Il tempo si esprime in anni, perché il tasso è annuo. Il fattore semplice moltiplica il capitale iniziale; sottraendo il capitale dal montante si ricava anche l’interesse.',ans,'euro',dict(C=C,i=i,T=T), 'ans-C-C*i*T')
    if t==1:
        ans=C*(1+i)**n
        return ex('Capitalizzazione composta','composto',rf'Un capitale di ${f(C)}$ euro è investito per ${n}$ anni al tasso annuo composto del ${f(100*i)}\%$. Calcolare il montante.',rf'M={f(C)}(1+{f(i)})^{{{n}}}', 'Ogni anno il capitale disponibile viene moltiplicato per lo stesso fattore. Dopo il primo anno anche gli interessi maturati producono interessi.',ans,'euro',dict(C=C,i=i,T=n),'ans/(1+i)**T-C')
    if t==2:
        d=.035+.002*k;T=(6+k)/12;ans=C*(1-d*T)
        return ex('Valori attuali commerciali','sconto-commerciale',rf'Anticipare ${f(C)}$ euro esigibili fra ${6+k}$ mesi al tasso annuo di sconto commerciale del ${f(100*d)}\%$. Determinare il valore attuale.',rf'V={f(C)}\left(1-{f(d)}\frac{{{6+k}}}{{12}}\right)', 'Lo sconto si calcola sull’importo a scadenza e si sottrae da quell’importo. Il prodotto fra tasso e durata è minore di uno, quindi il valore attuale è positivo.',ans,'euro',dict(C=C,d=d,T=T),'ans+C*d*T-C')
    if t==3:
        T=(8+k)/12;ans=C/(1+i*T)
        return ex('Sconti razionali','sconto-razionale',rf'Calcolare il valore attuale razionale di ${f(C)}$ euro fra ${8+k}$ mesi al tasso annuo semplice del ${f(100*i)}\%$.',rf'V=\frac{{{f(C)}}}{{1+{f(i)}\cdot\frac{{{8+k}}}{{12}}}}', 'Il valore attuale è il capitale che produce l’importo futuro nel regime semplice. Quindi si divide l’importo futuro per il fattore di montante del periodo.',ans,'euro',dict(C=C,i=i,T=T),'ans*(1+i*T)-C')
    if t==4:
        m=[2,4,12][k%3];ans=100*((1+i)**(1/m)-1)
        return ex('Tassi equivalenti infrannuali','tassi-equivalenti',rf'Dato il tasso annuo effettivo del ${f(100*i)}\%$, calcolare il tasso effettivo di un sottoperiodo quando un anno contiene ${m}$ sottoperiodi uguali. Esprimere il risultato in percentuale.',rf'i_m=(1+{f(i)})^{{\frac1{{{m}}}}}-1', 'L’applicazione del tasso del sottoperiodo per tutti i sottoperiodi deve produrre il fattore annuo assegnato. Si estrae quindi la radice corrispondente, prima di sottrarre uno.',ans,'percento',dict(i=i,m=m),'(1+ans/100)**m-(1+i)')
    if t==5:
        m=[2,4,12][k%3];j=.06+.003*k;ans=100*((1+j/m)**m-1)
        return ex('Conversioni dei tassi nominali','tasso-nominale',rf'Un tasso annuo nominale del ${f(100*j)}\%$ è convertibile ${m}$ volte l’anno. Determinare il tasso annuo effettivo in percentuale.',rf'i=\left(1+\frac{{{f(j)}}}{{{m}}}\right)^{{{m}}}-1', 'Il tasso nominale diviso per il numero di conversioni dà il tasso di un sottoperiodo. L’effettivo annuo si ottiene applicando quel fattore per un anno intero.',ans,'percento',dict(j=j,m=m),'1+ans/100-(1+j/m)**m')
    if t==6:
        delta=.03+.002*k;ans=C*math.exp(delta*n)
        return ex('Capitalizzazione continua','capitalizzazione-continua',rf'Calcolare il montante di ${f(C)}$ euro dopo ${n}$ anni con forza di interesse costante $\delta={f(delta)}$.',rf'M={f(C)}e^{{{f(delta)}\cdot{n}}}', 'La forza assegnata è continua, quindi il fattore di montante è esponenziale. Il controllo consiste nel riattualizzare il montante moltiplicandolo per il fattore esponenziale opposto.',ans,'euro',dict(C=C,delta=delta,T=n),'log(ans/C)-delta*T')
    u=1+k%2;v=2+k%3;ans=C*((1+i*u)*(1+i*v)-(1+i*(u+v)))
    return ex('Confronti sulla scindibilità','scindibilita',rf'Un capitale di ${f(C)}$ euro è investito al ${f(100*i)}\%$ semplice. Calcolare quanto il montante ottenuto rinnovando il capitale dopo ${u}$ anni per altri ${v}$ anni supera il montante dell’investimento semplice unico di ${u+v}$ anni.',rf'\Delta M={f(C)}\left[(1+{f(i)}\cdot{u})(1+{f(i)}\cdot{v})-(1+{f(i)}\cdot{u+v})\right]', 'Nel rinnovo gli interessi del primo intervallo entrano nel capitale del secondo. Sviluppando il prodotto, la differenza è il termine aggiuntivo pari al capitale moltiplicato per il quadrato del tasso e per le due durate.',ans,'euro',dict(C=C,i=i,u=u,v=v),'ans-C*i*i*u*v')

def equivalenza(t,k):
    i=.03+.002*k;A=900+80*k;B=1300+90*k
    if t==0:
        tau=2;n=4+k%2;ans=A*(1+i)+B*(1+i)**(tau-n)
        return ex('Valori a una data intermedia','valore-finanziario',rf'Valutare al tempo $2$ un incasso di ${f(A)}$ euro al tempo $1$ e uno di ${f(B)}$ euro al tempo ${n}$, al tasso annuo composto del ${f(100*i)}\%$.',rf'V(2)={f(A)}(1+{f(i)})+{f(B)}(1+{f(i)})^{{2-{n}}}', 'Il primo incasso precede la data di valutazione e si capitalizza per un anno. Il secondo la segue e si attualizza per il numero di anni residui.',ans,'euro',dict(A=A,B=B,i=i,n=n),'ans/(1+i)**2-A/(1+i)-B/(1+i)**n')
    if t==1:
        paid=500+30*k;ans=(A/(1+i)+B/(1+i)**3-paid)*(1+i)**2
        return ex('Pagamenti incogniti equivalenti','equivalenza',rf'Sostituire due debiti di ${f(A)}$ euro fra un anno e ${f(B)}$ euro fra tre anni con ${f(paid)}$ euro oggi e un pagamento $X$ fra due anni. Determinare $X$ al tasso composto del ${f(100*i)}\%$.',rf'X=\left(\frac{{{f(A)}}}{{1+{f(i)}}}+\frac{{{f(B)}}}{{(1+{f(i)})^3}}-{f(paid)}\right)(1+{f(i)})^2', 'Si impone l’uguaglianza dei valori attuali dei due piani. Dopo aver sottratto il pagamento immediato, il valore residuo si porta alla scadenza del pagamento incognito.',ans,'euro',dict(A=A,B=B,i=i,paid=paid),'paid+ans/(1+i)**2-A/(1+i)-B/(1+i)**3')
    if t==2:
        T=4;ans=A*(1+i)**3+B*(1+i)
        return ex('Sostituzioni con capitale unico','capitale-unico',rf'Sostituire ${f(A)}$ euro al tempo $1$ e ${f(B)}$ euro al tempo $3$ con un pagamento unico al tempo $4$, al ${f(100*i)}\%$ composto. Calcolare l’importo.',rf'X={f(A)}(1+{f(i)})^3+{f(B)}(1+{f(i)})', 'I due debiti si trasferiscono alla stessa scadenza finale. Il primo matura per tre anni e il secondo per un anno, quindi i fattori sono diversi.',ans,'euro',dict(A=A,B=B,i=i),'ans/(1+i)**4-A/(1+i)-B/(1+i)**3')
    if t==3:
        V=1000+100*k;T=2+k%4;X=round(V*(1+i)**T,2);ans=math.log(X/V)/math.log(1+i)
        return ex('Scadenze comuni incognite','scadenza-comune',rf'Un debito ha valore attuale di ${f(V)}$ euro. Viene sostituito da ${f(X,2)}$ euro a una scadenza $T$ incognita. Determinare $T$ con tasso composto annuo del ${f(100*i)}\%$.',rf'T=\frac{{\log\left(\frac{{{f(X,2)}}}{{{f(V)}}}\right)}}{{\log(1+{f(i)})}}', 'L’importo sostitutivo, attualizzato alla sua scadenza incognita, deve uguagliare il debito attuale. I logaritmi permettono di isolare la durata che compare nell’esponente.',ans,'anni',dict(V=V,X=X,i=i),'X/(1+i)**ans-V')
    if t==4:
        total=A+B;V=A/(1+i)+B/(1+i)**4;ans=math.log(total/V)/math.log(1+i)
        return ex('Scadenze medie nel regime composto','scadenza-media',rf'Calcolare la scadenza equivalente del pagamento unico di ${f(total)}$ euro che sostituisce ${f(A)}$ euro al tempo $1$ e ${f(B)}$ euro al tempo $4$, al ${f(100*i)}\%$ composto.',rf'T=\frac{{\log\left(\frac{{{f(total)}}}{{\frac{{{f(A)}}}{{1+{f(i)}}}+\frac{{{f(B)}}}{{(1+{f(i)})^4}}}}\right)}}{{\log(1+{f(i)})}}', 'Il capitale sostitutivo è la somma nominale dei due debiti. La sua data si determina imponendo l’equivalenza attuale, e deve risultare tra le due scadenze originali.',ans,'anni',dict(A=A,B=B,i=i),'(A+B)/(1+i)**ans-A/(1+i)-B/(1+i)**4')
    if t==5:
        rates=[.02+.001*k,.035+.001*k,.04+.001*k];ans=A*math.prod(1+x for x in rates)
        return ex('Montanti con tassi variabili','tassi-variabili',rf'Investire ${f(A)}$ euro per tre anni con tassi effettivi rispettivamente del ${f(100*rates[0])}\%$, ${f(100*rates[1])}\%$ e ${f(100*rates[2])}\%$. Determinare il montante.',rf'M={f(A)}(1+{f(rates[0])})(1+{f(rates[1])})(1+{f(rates[2])})', 'Il montante di ogni anno è il capitale dell’anno successivo. Si moltiplicano quindi i fattori annui nell’ordine delle scadenze, senza sommare direttamente i tassi.',ans,'euro',dict(A=A,rates=rates),'ans/prod([1+x for x in rates])-A')
    if t==6:
        d=.02+.001*k;b=.003;u=1;v=3;ans=math.exp(d*(v-u)+b*(v*v-u*u)/2)
        return ex('Fattori fra due date','leggi-due-variabili',rf'Con forza $\delta(t)={f(d)}+{f(b)}t$, calcolare il fattore di montante tra il tempo $1$ e il tempo $3$.',rf'r(1,3)=\exp\left({f(d)}(3-1)+\frac{{{f(b)}}}2(3^2-1^2)\right)', 'Il logaritmo del fattore è l’integrale della forza tra le due date assegnate. L’integrale del termine lineare contiene la differenza dei quadrati delle date.',ans,'numero',dict(d=d,b=b,u=u,v=v),'log(ans)-d*(v-u)-b*(v*v-u*u)/2')
    C=2500+100*k;R=900+35*k;ans=C-R*a(3,i)
    return ex('Confronti fra piani di pagamento','confronto-operazioni',rf'Un acquisto costa ${f(C)}$ euro oggi oppure tre rate annue posticipate da ${f(R)}$ euro. Al ${f(100*i)}\%$ composto, calcolare il prezzo immediato meno il valore attuale del piano rateale.',rf'\Delta={f(C)}-{f(R)}\left((1+{f(i)})^{{-1}}+(1+{f(i)})^{{-2}}+(1+{f(i)})^{{-3}}\right)', 'Entrambi i piani si valutano oggi. Il segno della differenza indica quale dei due piani ha il valore attuale minore dal punto di vista di chi paga.',ans,'euro',dict(C=C,R=R,i=i),'ans-C+sum([R/(1+i)**h for h in [1,2,3]])')

def rendite(t,k):
    R=400+30*k;i=.03+.002*k;n=4+k%4
    if t==0:
        ans=R*a(n,i);return ex('Valori delle rendite posticipate','rendita-posticipata',rf'Calcolare il valore attuale di ${n}$ rate annue posticipate da ${f(R)}$ euro al ${f(100*i)}\%$.',rf'V={f(R)}\frac{{1-(1+{f(i)})^{{-{n}}}}}{{{f(i)}}}', 'La prima rata scade fra un anno e l’ultima alla fine del piano. Il valore si ottiene sommando le rate attualizzate, oppure usando il fattore della rendita posticipata.',ans,'euro',dict(R=R,i=i,n=n),'ans-sum([R/(1+i)**h for h in range(1,n+1)])')
    if t==1:
        ans=R*a(n,i)*(1+i);return ex('Valori delle rendite anticipate','rendita-anticipata',rf'Valutare ${n}$ rate da ${f(R)}$ euro ai tempi $0,1,\ldots,{n-1}$ al tasso annuo del ${f(100*i)}\%$.',rf'V={f(R)}(1+{f(i)})\frac{{1-(1+{f(i)})^{{-{n}}}}}{{{f(i)}}}', 'La rata iniziale è disponibile subito. Rispetto alla rendita posticipata tutte le rate precedono di un periodo le scadenze corrispondenti, quindi il valore è moltiplicato per il fattore periodale.',ans,'euro',dict(R=R,i=i,n=n),'ans-sum([R/(1+i)**h for h in range(n)])')
    if t==2:
        ans=R*s(n,i);return ex('Montanti di versamenti costanti','montante-rendita',rf'Calcolare al tempo ${n}$ il montante di ${n}$ versamenti annui posticipati da ${f(R)}$ euro al ${f(100*i)}\%$.',rf'M={f(R)}\frac{{(1+{f(i)})^{{{n}}}-1}}{{{f(i)}}}', 'L’ultimo versamento viene effettuato alla data di valutazione e non matura interessi. Il primo matura per un numero di periodi pari al totale meno uno.',ans,'euro',dict(R=R,i=i,n=n),'ans-sum([R*(1+i)**h for h in range(n)])')
    if t==3:
        m=2+k%3;ans=R*a(n,i)/(1+i)**m
        return ex('Rendite differite','rendita-differita',rf'Calcolare il valore attuale di ${n}$ rate da ${f(R)}$ euro con prima scadenza al tempo ${m+1}$ e ultima al tempo ${m+n}$, al ${f(100*i)}\%$.',rf'V={f(R)}\frac{{1-(1+{f(i)})^{{-{n}}}}}{{{f(i)}}}(1+{f(i)})^{{-{m}}}', 'La rendita posticipata corrispondente viene valutata un periodo prima della prima rata. Quel valore si attualizza per il numero di periodi di differimento.',ans,'euro',dict(R=R,i=i,n=n,m=m),'ans-sum([R/(1+i)**h for h in range(m+1,m+n+1)])')
    if t==4:
        m=1+k%3;ans=R/i/(1+i)**m
        return ex('Perpetuità differite','rendita-perpetua',rf'Una rendita perpetua paga ${f(R)}$ euro annui a partire dal tempo ${m+1}$. Determinarne il valore attuale al ${f(100*i)}\%$.',rf'V=\frac{{{f(R)}}}{{{f(i)}}}(1+{f(i)})^{{-{m}}}', 'Il valore della perpetuità un periodo prima della prima rata è la rata divisa per il tasso. Si trasferisce poi quel valore alla data iniziale con il fattore composto.',ans,'euro',dict(R=R,i=i,m=m),'ans*(1+i)**m*i-R')
    if t==5:
        C=9000+500*k;ans=C/a(n,i)
        return ex('Rate di rimborso incognite','rata-incognita',rf'Un capitale di ${f(C)}$ euro viene restituito con ${n}$ rate annue posticipate uguali al tasso del ${f(100*i)}\%$. Calcolare la rata.',rf'R=\frac{{{f(C)}}}{{\frac{{1-(1+{f(i)})^{{-{n}}}}}{{{f(i)}}}}}', 'Il capitale erogato deve coincidere con il valore attuale di tutte le rate. Poiché il fattore della rendita è positivo, la rata si ottiene dividendo il capitale per quel fattore.',ans,'euro',dict(C=C,i=i,n=n),'sum([ans/(1+i)**h for h in range(1,n+1)])-C')
    if t==6:
        C=round(R*a(n,i),2);ans=-math.log(1-C*i/R)/math.log(1+i)
        return ex('Durate teoriche delle rendite','durata-incognita',rf'Un debito attuale di ${f(C,2)}$ euro viene rimborsato con rate annue posticipate da ${f(R)}$ euro al ${f(100*i)}\%$. Calcolare la durata teorica del piano.',rf'n=-\frac{{\log\left(1-\frac{{{f(C,2)}\cdot{f(i)}}}{{{f(R)}}}\right)}}{{\log(1+{f(i)})}}', 'Si isola prima il fattore di sconto dell’ultima scadenza. Il suo logaritmo consente di ricavare la durata; i dati sono assegnati con cifre sufficienti per riconoscere il numero intero di rate.',ans,'anni',dict(C=C,R=R,i=i),'C-R*(1-(1+i)**(-ans))/i')
    C=round(R*a(n,i),2);ans=100*bisect(lambda y:R*a(n,y)-C,0,1)
    return ex('Tassi impliciti delle rendite','tasso-rendita',rf'Il prezzo di ${n}$ rate annue posticipate da ${f(R)}$ euro è ${f(C,2)}$ euro. Determinare il tasso annuo effettivo, in percentuale, risolvendo l’equazione di equivalenza.',rf'{f(C,2)}={f(R)}\sum_{{h=1}}^{{{n}}}(1+i)^{{-h}}', 'La somma dei valori attuali è una funzione continua e strettamente decrescente del tasso. La radice è unica; si può determinarla per bisezione e verificarla sostituendola nell’equazione.',ans,'percento',dict(C=C,R=R,n=n),'C-sum([R/(1+ans/100)**h for h in range(1,n+1)])')

def variabili(t,k):
    R=500+40*k;i=.04+.002*k;n=4+k%3;d=30+5*k;g=.01+.001*k
    if t==0:
        cash=[R,R+100,R-50,R+200];ans=pv(cash,[1,2,3,4],i)
        return ex('Valutazioni di rate irregolari','rendita-generica',rf'Quattro incassi ai tempi $1,2,3,4$ valgono rispettivamente ${f(cash[0])}$, ${f(cash[1])}$, ${f(cash[2])}$ e ${f(cash[3])}$ euro. Determinare il valore attuale al ${f(100*i)}\%$.',r'V=\sum_{h=1}^4R_h(1+i)^{-h}', 'Ogni rata viene attualizzata dalla propria scadenza. L’assenza di una rata costante richiede di mantenere distinti i quattro importi nella somma.',ans,'euro',dict(cash=cash,i=i),'ans-sum([x/(1+i)**(h+1) for h,x in enumerate(cash)])')
    if t==1:
        ans=sum((R+h*d)/(1+i)**(h+1) for h in range(n))
        return ex('Rendite aritmetiche','progressione-aritmetica',rf'Una rendita di ${n}$ rate annue posticipate ha prima rata di ${f(R)}$ euro; ogni rata successiva aumenta di ${d}$ euro. Valutarla al ${f(100*i)}\%$.',rf'V=\sum_{{h=1}}^{{{n}}}\frac{{{f(R)}+(h-1){d}}}{{(1+{f(i)})^h}}', 'L’incremento è un importo fisso e si somma per ogni passaggio alla rata successiva. Dopo aver individuato la rata di ogni anno, ciascun importo si attualizza dalla sua data.',ans,'euro',dict(R=R,d=d,n=n,i=i),'ans-R*sum([(1+i)**(-h) for h in range(1,n+1)])-d*sum([(h-1)*(1+i)**(-h) for h in range(1,n+1)])')
    if t==2:
        ans=R/(i-g)*(1-((1+g)/(1+i))**n)
        return ex('Rendite geometriche finite','progressione-geometrica',rf'La prima rata annua posticipata di una rendita di ${n}$ rate è ${f(R)}$ euro. Le rate crescono del ${f(100*g)}\%$ ogni anno. Calcolare il valore attuale al ${f(100*i)}\%$.',rf'V=\frac{{{f(R)}}}{{{f(i)}-{f(g)}}}\left[1-\left(\frac{{1+{f(g)}}}{{1+{f(i)}}}\right)^{{{n}}}\right]', 'La rata dell’anno successivo è quella precedente moltiplicata per il fattore di crescita. Dopo l’attualizzazione, i termini formano una progressione geometrica con ragione pari al rapporto fra crescita e capitalizzazione.',ans,'euro',dict(R=R,g=g,i=i,n=n),'ans-sum([R*(1+g)**(h-1)/(1+i)**h for h in range(1,n+1)])')
    if t==3:
        ans=R/(i-g)
        return ex('Perpetuità crescenti','perpetuita-crescente',rf'Una perpetuità paga ${f(R)}$ euro fra un anno, poi rate che aumentano del ${f(100*g)}\%$ annuo. Valutarla al ${f(100*i)}\%$.',rf'V=\frac{{{f(R)}}}{{{f(i)}-{f(g)}}}', 'Il tasso di valutazione supera quello di crescita, quindi la serie converge. L’equazione ricorsiva della rendita conferma che il valore di oggi è la prima rata più il valore futuro cresciuto, entrambi attualizzati per un anno.',ans,'euro',dict(R=R,i=i,g=g),'ans-(R+(1+g)*ans)/(1+i)')
    if t==4:
        delta=.03+.002*k;ans=R*(1-math.exp(-delta*n))/delta
        return ex('Flussi continui costanti','flussi-continui',rf'Un flusso continuo ha densità di ${f(R)}$ euro all’anno per ${n}$ anni. Calcolare il valore attuale con forza costante $\delta={f(delta)}$.',rf'V=\int_0^{{{n}}}{f(R)}e^{{-{f(delta)}t}}\,dt=\frac{{{f(R)}}}{{{f(delta)}}}\left(1-e^{{-{f(delta)}\cdot{n}}}\right)', 'La densità moltiplicata per un intervallo di tempo dà l’importo di quel tratto. L’integrale somma gli importi infinitesimi dopo l’attualizzazione esponenziale.',ans,'euro',dict(R=R,delta=delta,n=n),'ans*delta-R*(1-exp(-delta*n))')
    if t==5:
        delta=.05+.002*k;gamma=.02;ans=R*(1-math.exp(-(delta-gamma)*n))/(delta-gamma)
        return ex('Flussi continui crescenti','flussi-crescenti',rf'Una densità di incasso $c(t)={f(R)}e^{{{f(gamma)}t}}$ euro all’anno è attiva da $0$ a ${n}$ anni. Valutarla con forza $\delta={f(delta)}$.',rf'V={f(R)}\int_0^{{{n}}}e^{{-({f(delta)}-{f(gamma)})t}}\,dt', 'Il fattore di sconto si moltiplica per la densità crescente. Gli esponenti si sommano e l’integrale dipende dalla differenza tra forza di interesse e crescita della densità.',ans,'euro',dict(R=R,delta=delta,gamma=gamma,n=n),'ans*(delta-gamma)-R*(1-exp(-(delta-gamma)*n))')
    if t==6:
        b=.003;delta=.02+.001*k;C=5000+100*k;ans=C*math.exp(-delta*n-b*n*n/2)
        return ex('Intensità variabili nel tempo','intensita-variabile',rf'Calcolare il valore attuale di ${f(C)}$ euro fra ${n}$ anni con forza $\delta(t)={f(delta)}+{f(b)}t$.',rf'V={f(C)}\exp\left(-{f(delta)}\cdot{n}-\frac{{{f(b)}}}2\cdot{n}^2\right)', 'Il fattore di sconto è l’esponenziale dell’opposto dell’integrale della forza. L’importo futuro viene moltiplicato per quel fattore fino alla scadenza assegnata.',ans,'euro',dict(C=C,delta=delta,b=b,n=n),'log(C/ans)-delta*n-b*n*n/2')
    K=14000+500*k;C=2000+100*k;ans=(K-C*(1+i)**n)/s(n,i)
    return ex('Piani di costituzione di capitale','costituzione-capitale',rf'Un deposito iniziale di ${f(C)}$ euro e ${n}$ versamenti annui posticipati uguali devono formare ${f(K)}$ euro al tempo ${n}$. Calcolare il versamento al ${f(100*i)}\%$.',rf'R=\frac{{{f(K)}-{f(C)}(1+{f(i)})^{{{n}}}}}{{\frac{{(1+{f(i)})^{{{n}}}-1}}{{{f(i)}}}}}', 'Il deposito iniziale produce già una parte del capitale finale. Si sottrae quel montante dall’obiettivo e si divide il capitale ancora da costituire per il fattore di montante dei versamenti.',ans,'euro',dict(K=K,C=C,i=i,n=n),'C*(1+i)**n+sum([ans*(1+i)**h for h in range(n)])-K')

def ammortamenti(t,k):
    C=10000+500*k;i=.035+.002*k;n=4+k%3;R=C/a(n,i)
    if t==0:
        ans=n*R-C;D=C;rows=['| Periodo | Debito iniziale | Interesse | Capitale | Rata | Debito finale |','| --- | ---: | ---: | ---: | ---: | ---: |']
        for h in range(1,n+1):
            interest=D*i;capital=R-interest;new=D-capital
            rows.append(f'| {h} | {D:.2f} | {interest:.2f} | {capital:.2f} | {R:.2f} | {max(0,new):.2f} |'.replace('.',','));D=new
        E=ex('Piani francesi completi','piano-ammortamento',rf'Costruire il piano francese di ${f(C)}$ euro, ${n}$ rate annue e tasso del ${f(100*i)}\%$. Determinare l’interesse totale. Esporre gli importi ai centesimi senza arrotondare i calcoli intermedi.',rf'R=\frac{{{f(C)}}}{{{af(n,i)}}}\approx{f(R,2)},\qquad I_{{\mathrm{{tot}}}}={n}R-{f(C)}', 'La rata è il capitale diviso per il fattore della rendita. In ogni riga l’interesse si calcola sul debito prima del pagamento, la quota capitale è la rata meno l’interesse e il nuovo debito si ottiene sottraendo la quota capitale.',ans,'euro',dict(C=C,i=i,n=n),'sum([(C*(1+i)**h-(C+ans)/n*sum([(1+i)**j for j in range(h)]))*i for h in range(n)])-ans')
        E['table']='\n'.join(rows)+'\n\nGli importi in tabella sono arrotondati separatamente; una somma di valori esposti può differire di un centesimo dal valore calcolato senza arrotondamenti intermedi.';return E
    if t==1:
        D1=C*(1+i)-R;ans=R-D1*i
        return ex('Quote capitale nel piano francese','francese',rf'Un prestito francese di ${f(C)}$ euro viene rimborsato in ${n}$ rate annue al ${f(100*i)}\%$. Calcolare la quota capitale della seconda rata.',rf'R=\frac{{{f(C)}}}{{{af(n,i)}}},\quad D_1={f(C)}(1+{f(i)})-R,\quad C_2=R-{f(i)}D_1', 'La quota interesse della seconda rata si riferisce al debito che rimane dopo la prima. Sottraendo tale interesse dalla rata costante si trova la quota capitale richiesta.',ans,'euro',dict(C=C,i=i,n=n),'ans-(C/sum([(1+i)**(-h) for h in range(1,n+1)])-i*C)*(1+i)')
    if t==2:
        h=2+k%2;ans=C/n+i*C*(1-(h-1)/n)
        return ex('Rate del piano italiano','italiano',rf'Calcolare la rata numero ${h}$ di un piano italiano di ${f(C)}$ euro, ${n}$ rate annue e tasso del ${f(100*i)}\%$.',rf'R_{{{h}}}=\frac{{{f(C)}}}{{{n}}}+{f(i)}\left({f(C)}-({h}-1)\frac{{{f(C)}}}{{{n}}}\right)', 'La quota capitale è uguale in tutte le rate. Prima della rata richiesta sono state rimborsate le quote capitale dei periodi precedenti, quindi l’interesse si applica soltanto al debito rimasto.',ans,'euro',dict(C=C,i=i,n=n,h=h),'ans-C/n-i*(C-(h-1)*C/n)')
    if t==3:
        j=.02+.001*k;Q=C/s(n,j);ans=C*i+Q
        return ex('Esborsi nei piani americani','americano',rf'Un prestito di ${f(C)}$ euro paga interessi annui del ${f(100*i)}\%$ e rimborsa tutto il capitale dopo ${n}$ anni. Un fondo al ${f(100*j)}\%$ viene alimentato con versamenti posticipati uguali per formare il rimborso. Calcolare l’esborso annuo per interessi e fondo.',rf'Q=\frac{{{f(C)}}}{{{sf(n,j)}}},\qquad E={f(i)}\cdot{f(C)}+Q', 'Gli interessi del prestito si pagano sul capitale intero. La quota del fondo si determina imponendo che il montante dei versamenti uguagli il rimborso finale, usando il tasso proprio del fondo.',ans,'euro',dict(C=C,i=i,j=j,n=n),'(ans-C*i)*sum([(1+j)**h for h in range(n)])-C')
    if t==4:
        h=2;ans=R*a(n-h,i)
        return ex('Debiti residui con due metodi','debito-residuo',rf'Calcolare il debito residuo subito dopo la seconda rata di un piano francese di ${f(C)}$ euro, ${n}$ rate e tasso annuo del ${f(100*i)}\%$.',rf'R=\frac{{{f(C)}}}{{{af(n,i)}}},\qquad D_2=R {af(n-2,i)}', 'Il metodo prospettivo attualizza alla seconda data le rate ancora da pagare. Il risultato può essere controllato capitalizzando il prestito per due periodi e sottraendo il montante delle due rate già versate.',ans,'euro',dict(C=C,i=i,n=n),'ans-C*(1+i)**2+C/sum([(1+i)**(-h) for h in range(1,n+1)])*((1+i)+1)')
    if t==5:
        j=.045+.002*k;ans=R*a(n-1,j)
        return ex('Valori di mercato dei debiti residui','estinzione-anticipata',rf'Dopo la prima rata di un piano francese originario di ${f(C)}$ euro, ${n}$ anni e tasso del ${f(100*i)}\%$, valutare le rate residue al tasso di mercato del ${f(100*j)}\%$. Le rate contrattuali restano quelle iniziali.',rf'R=\frac{{{f(C)}}}{{{af(n,i)}}},\qquad V_1=R {af(n-1,j)}', 'Le rate residue mantengono l’importo contrattuale. Cambia il tasso con cui vengono valutate, quindi si applica il nuovo fattore di rendita al numero di pagamenti ancora dovuti.',ans,'euro',dict(C=C,i=i,j=j,n=n),'ans-C/sum([(1+i)**(-h) for h in range(1,n+1)])*sum([(1+j)**(-h) for h in range(1,n)])')
    if t==6:
        j=.05+.001*k;ans=C/n*a(n,j)
        return ex('Nuda proprietà dei prestiti','usufrutto-nuda-proprieta',rf'Per un piano italiano di ${f(C)}$ euro con ${n}$ quote capitale annuali, calcolare il valore iniziale della nuda proprietà al tasso di valutazione del ${f(100*j)}\%$.',rf'N(j)=\frac{{{f(C)}}}{{{n}}}{af(n,j)}', 'La nuda proprietà comprende soltanto le quote capitale. Nel piano italiano queste sono costanti, quindi il loro valore è quello di una rendita posticipata di rata pari al capitale diviso per il numero di rimborsi.',ans,'euro',dict(C=C,j=j,n=n),'ans-sum([(C/n)/(1+j)**h for h in range(1,n+1)])')
    j=.055+.001*k;D=C*(1+i)-R;ans=D/a(n-1,j)
    return ex('Rate ricalcolate dopo il cambio del tasso','tasso-variabile',rf'Un prestito francese di ${f(C)}$ euro, ${n}$ anni e tasso iniziale del ${f(100*i)}\%$ passa al ${f(100*j)}\%$ subito dopo la prima rata. La durata finale resta invariata. Calcolare la nuova rata costante.',rf'R_0=\frac{{{f(C)}}}{{{af(n,i)}}},\quad D_1={f(C)}(1+{f(i)})-R_0,\quad R_1=\frac{{D_1}}{{{af(n-1,j)}}}', 'Il nuovo piano parte dal debito residuo dopo il primo pagamento. Si usa il nuovo tasso e il numero di rate ancora da pagare, mantenendo fissa la scadenza finale assegnata.',ans,'euro',dict(C=C,i=i,j=j,n=n),'ans*sum([(1+j)**(-h) for h in range(1,n)])-C*(1+i)+C/sum([(1+i)**(-h) for h in range(1,n+1)])')

def investimenti(t,k):
    C=2000+100*k;i=.04+.002*k;R=850+40*k
    if t==0:
        cash=[R,R+100,R+200];ans=pv(cash,[1,2,3],i)-C
        return ex('Valori attuali netti','van',rf'Un progetto richiede ${f(C)}$ euro oggi e incassa ${f(cash[0])}$, ${f(cash[1])}$ e ${f(cash[2])}$ euro fra uno, due e tre anni. Calcolare il VAN al ${f(100*i)}\%$.',rf'\operatorname{{VAN}}=-{f(C)}+\frac{{{f(cash[0])}}}{{1+{f(i)}}}+\frac{{{f(cash[1])}}}{{(1+{f(i)})^2}}+\frac{{{f(cash[2])}}}{{(1+{f(i)})^3}}', 'L’esborso iniziale entra con segno negativo e non viene attualizzato. Ogni incasso successivo viene riportato alla data iniziale, poi si sommano tutti i flussi con il loro segno.',ans,'euro',dict(C=C,i=i,cash=cash),'ans+C-sum([x/(1+i)**(h+1) for h,x in enumerate(cash)])')
    if t==1:
        n=2+k%3;M=round(C*(1+i)**n,2);ans=100*((M/C)**(1/n)-1)
        return ex('Rendimenti interni con un incasso','tir',rf'Un investimento di ${f(C)}$ euro oggi produce ${f(M,2)}$ euro dopo ${n}$ anni. Determinare il TIR annuo in percentuale.',rf'i^*=\left(\frac{{{f(M,2)}}}{{{f(C)}}}\right)^{{\frac1{{{n}}}}}-1', 'L’unico incasso deve avere valore attuale uguale all’esborso. Il fattore complessivo si converte in fattore annuo estraendo la radice corrispondente alla durata.',ans,'percento',dict(C=C,M=M,n=n),'M/(1+ans/100)**n-C')
    if t==2:
        n=3;R=1000+50*k;C=round(R*a(n,i),2);ans=100*bisect(lambda y:R*a(n,y)-C,0,1)
        return ex('TIR unici con più incassi','unicita-tir',rf'Un investimento costa ${f(C,2)}$ euro e paga tre incassi annuali posticipati da ${f(R)}$ euro. Calcolare il TIR annuo in percentuale.',rf'-{f(C,2)}+{f(R)}\sum_{{h=1}}^3(1+i^*)^{{-h}}=0', 'Tutti gli incassi futuri sono positivi, quindi il VAN è strettamente decrescente e la radice è unica. La bisezione individua il tasso che riproduce il prezzo come somma degli incassi attualizzati.',ans,'percento',dict(C=C,R=R),'sum([R/(1+ans/100)**h for h in [1,2,3]])-C')
    if t==3:
        lo=.08+.005*k;hi=.20+.005*k;X=C*(2+lo+hi);Y=round(-C*(1+lo)*(1+hi),2);disc=math.sqrt(X*X+4*C*Y);lo=(X-disc)/(2*C)-1;hi=(X+disc)/(2*C)-1;ans=100*hi
        return ex('Investimenti con TIR multipli','tir-multipli',rf'I flussi annuali di un progetto sono $-{f(C)}$, ${f(X,8)}$, ${f(Y,8)}$ euro ai tempi $0,1,2$. Calcolare il maggiore dei due TIR, in percentuale.',rf'-{f(C)}(1+i)^2+{f(X,8)}(1+i)+({f(Y,8)})=0\quad\Longrightarrow\quad i_1={f(lo)},\ i_2={f(hi)}', 'Moltiplicando il VAN per il fattore positivo del secondo periodo si ottiene un’equazione quadratica in uno più il tasso. Entrambe le radici indicate sono ammissibili e annullano il VAN; la richiesta seleziona la maggiore.',ans,'percento',dict(C=C,X=X,Y=Y,lo=lo),' -C+X/(1+ans/100)+Y/(1+ans/100)**2')
    if t==4:
        A=[900+20*k,1000+20*k];B=[500+30*k,1550+30*k];ans=pv(B,[1,2],i)-pv(A,[1,2],i)
        return ex('Confronti fra progetti alternativi','confronto-progetti',rf'Due progetti hanno lo stesso esborso iniziale. Il progetto A incassa ${f(A[0])}$ e ${f(A[1])}$ euro ai tempi $1,2$; il progetto B incassa ${f(B[0])}$ e ${f(B[1])}$ euro alle stesse date. Calcolare $\operatorname{{VAN}}_B-\operatorname{{VAN}}_A$ al ${f(100*i)}\%$.',rf'\Delta\operatorname{{VAN}}=\frac{{{f(B[0]-A[0])}}}{{1+{f(i)}}}+\frac{{{f(B[1]-A[1])}}}{{(1+{f(i)})^2}}', 'Gli esborsi iniziali uguali si eliminano nella differenza. Rimangono i flussi differenziali alle due scadenze; il loro valore attuale stabilisce l’ordine dei VAN al tasso assegnato.',ans,'euro',dict(A=A,B=B,i=i),'ans-sum([(B[h]-A[h])/(1+i)**(h+1) for h in range(2)])')
    if t==5:
        A=2200+100*k;B=A*(1.08+.003*k);ans=100*(B/A-1)
        return ex('Tassi di indifferenza','tasso-soglia',rf'A parità di esborso iniziale, A paga ${f(A)}$ euro fra un anno e B paga ${f(B,8)}$ euro fra due anni. Calcolare il tasso annuo di indifferenza in percentuale.',rf'\frac{{{f(A)}}}{{1+i}}=\frac{{{f(B,8)}}}{{(1+i)^2}}\quad\Longrightarrow\quad i=\frac{{{f(B,8)}}}{{{f(A)}}}-1', 'Si uguagliano i valori attuali degli incassi, perché gli esborsi iniziali coincidono. Moltiplicando per il fattore del secondo anno si ottiene un’equazione lineare in uno più il tasso.',ans,'percento',dict(A=A,B=B),'A/(1+ans/100)-B/(1+ans/100)**2')
    if t==6:
        fee=50+5*k;M=C*(1+i);ans=100*(M/(C-fee)-1)
        return ex('Costi effettivi con spese iniziali','taeg',rf'Un prestito nominale di ${f(C)}$ euro trattiene subito ${f(fee)}$ euro di spese e richiede ${f(M,8)}$ euro dopo un anno. Calcolare il tasso annuo effettivo del flusso del debitore in percentuale.',rf'i_{{\mathrm{{eff}}}}=\frac{{{f(M,8)}}}{{{f(C)}-{f(fee)}}}-1', 'Il debitore dispone del capitale nominale meno le spese immediate. Il tasso effettivo rende quel capitale disponibile equivalente al rimborso a un anno.',ans,'percento',dict(C=C,fee=fee,M=M),'(C-fee)*(1+ans/100)-M')
    n=3+k%3;C=round(.98*R*a(n,i),2);ans=n
    return ex('Recuperi attualizzati del capitale','recupero-attualizzato',rf'Un investimento costa ${f(C,2)}$ euro e paga ${n}$ incassi annui posticipati da ${f(R)}$ euro. Al ${f(100*i)}\%$, determinare la prima scadenza intera di recupero attualizzato.',rf'\sum_{{h=1}}^{{m}}\frac{{{f(R)}}}{{(1+{f(i)})^h}}\geq{f(C,2)}', 'Si sommano progressivamente gli incassi attualizzati. La prima somma che raggiunge l’esborso determina la scadenza richiesta; si controlla che la somma fermata alla data precedente sia ancora minore.',ans,'anni',dict(C=C,R=R,i=i,n=n),'0 if sum([R/(1+i)**h for h in range(1,round(ans))])<C<=sum([R/(1+i)**h for h in range(1,round(ans)+1)]) else 1')

def obbligazioni(t,k):
    N=1000;i=.035+.002*k;n=3+k%4;c=35+2*k
    if t==0:
        ans=N/(1+i)**n
        return ex('Prezzi degli zero coupon','zero-coupon',rf'Uno ZCB rimborsa ${N}$ euro fra ${n}$ anni. Calcolare il prezzo al rendimento annuo effettivo del ${f(100*i)}\%$.',rf'P=\frac{{{N}}}{{(1+{f(i)})^{{{n}}}}}', 'Il titolo ha un solo pagamento alla scadenza. Il prezzo è il valore attuale del rimborso, ottenuto con il rendimento riferito alla stessa unità temporale.',ans,'euro',dict(N=N,i=i,n=n),'ans*(1+i)**n-N')
    if t==1:
        ans=c*a(n,i)+N/(1+i)**n
        return ex('Prezzi dei titoli con cedola','prezzo-obbligazione',rf'Un titolo rimborsa ${N}$ euro fra ${n}$ anni e paga cedole annue posticipate da ${c}$ euro, compresa l’ultima alla scadenza. Calcolare il prezzo al rendimento del ${f(100*i)}\%$.',rf'P={c}{af(n,i)}+{N}(1+{f(i)})^{{-{n}}}', 'Il titolo si scompone in una rendita di cedole e nel rimborso finale. L’ultima data contiene sia la cedola sia il capitale, quindi entrambi i contributi devono essere presenti.',ans,'euro',dict(N=N,c=c,i=i,n=n),'ans-sum([c/(1+i)**h for h in range(1,n+1)])-N/(1+i)**n')
    if t==2:
        P=round(c*a(n,i)+N/(1+i)**n,2);ans=100*bisect(lambda y:c*a(n,y)+N/(1+y)**n-P,0,1)
        return ex('Rendimenti a scadenza','rendimento-scadenza',rf'Il prezzo di un titolo con rimborso ${N}$ euro fra ${n}$ anni e cedole annue da ${c}$ euro è ${f(P,2)}$ euro. Calcolare il rendimento annuo effettivo a scadenza in percentuale.',rf'{f(P,2)}={c}\sum_{{h=1}}^{{{n}}}(1+y)^{{-h}}+{N}(1+y)^{{-{n}}}', 'Il rendimento è il tasso che uguaglia il valore attuale dei pagamenti al prezzo. La funzione del prezzo è decrescente, quindi il rendimento è unico e si può ricavare per bisezione.',ans,'percento',dict(N=N,c=c,n=n,P=P),'P-sum([c/(1+ans/100)**h for h in range(1,n+1)])-N/(1+ans/100)**n')
    if t==3:
        q=.04+.002*k;m=2;j=(1+i)**.5-1;ans=N*q/m*a(n*m,j)+N/(1+j)**(n*m)
        return ex('Titoli con cedole semestrali','cedole-infrannuali',rf'Un titolo di nominale e rimborso ${N}$ euro paga cedole semestrali con tasso cedolare nominale annuo del ${f(100*q)}\%$ e scade fra ${n}$ anni. Calcolare il prezzo con rendimento annuo effettivo del ${f(100*i)}\%$.',rf'j=(1+{f(i)})^{{\frac12}}-1,\quad c=\frac{{{N}\cdot{f(q)}}}2,\quad P=c a_{{\overline{{{2*n}}}|j}}+{N}(1+j)^{{-{2*n}}}', 'La cedola si ottiene dividendo per due l’importo annuo nominale. Il rendimento dato è annuo effettivo, quindi il tasso semestrale si ricava per equivalenza composta.',ans,'euro',dict(N=N,q=q,i=i,n=n),'ans-sum([(N*q/2)/(1+i)**(h/2) for h in range(1,2*n+1)])-N/(1+i)**n')
    if t==4:
        clean=975+3*k;alpha=.25+.05*k;ans=clean+alpha*c
        return ex('Corsi secchi e prezzi tel quel','corso-secco',rf'Un’obbligazione ha corso secco di ${f(clean)}$ euro per l’intero titolo e cedola di ${c}$ euro per periodo. La frazione trascorsa è ${f(alpha)}$. Calcolare il prezzo tel quel con rateo lineare.',rf'P_{{\mathrm{{tel\ quel}}}}={f(clean)}+{f(alpha)}\cdot{c}', 'Il rateo è la quota della cedola maturata secondo la frazione di periodo assegnata. Il prezzo effettivamente regolato si ottiene aggiungendo quel rateo al corso secco.',ans,'euro',dict(clean=clean,alpha=alpha,c=c),'ans-clean-alpha*c')
    if t==5:
        q=c/N;ans=N*(q-i)*a(n,i)
        return ex('Scarti del prezzo dalla pari','tassi-prezzi',rf'Un titolo rimborsa ${N}$ euro fra ${n}$ anni e paga cedole annue da ${c}$ euro. Al rendimento del ${f(100*i)}\%$, calcolare il prezzo meno il valore di rimborso.',rf'P-{N}=({c}-{N}\cdot{f(i)}){af(n,i)}', 'La relazione fra tasso cedolare e rendimento stabilisce il segno dello scarto dalla pari. Il valore richiesto si ottiene anche calcolando il prezzo come somma dei flussi attualizzati e sottraendo il rimborso nominale.',ans,'euro',dict(N=N,c=c,i=i,n=n),'ans+N-sum([c/(1+i)**h for h in range(1,n+1)])-N/(1+i)**n')
    if t==6:
        P0=980+2*k;P1=990+3*k;ans=100*(P1+c-P0)/P0
        return ex('Rendimenti durante il possesso','rendimento-periodo',rf'Un titolo si acquista a ${f(P0)}$ euro e si vende dopo un anno a ${f(P1)}$ euro, subito dopo avere incassato una cedola di ${c}$ euro. Calcolare il rendimento annuo del periodo di possesso in percentuale.',rf'h=\frac{{{f(P1)}+{c}-{f(P0)}}}{{{f(P0)}}}', 'L’incasso finale comprende prezzo di vendita e cedola. Sottraendo il prezzo iniziale si trova il guadagno; dividendolo per il capitale investito si ricava il rendimento del periodo.',ans,'percento',dict(P0=P0,P1=P1,c=c),'P0*(1+ans/100)-P1-c')
    x=2+k%3;y=3+k%2;P1=1000/(1+i);P2=1000/(1+i)**3;ans=x*P1+y*P2
    return ex('Prezzi dei portafogli obbligazionari','portafoglio-titoli',rf'Un portafoglio contiene ${x}$ ZCB con rimborso di $1000$ euro fra un anno e ${y}$ ZCB con lo stesso rimborso fra tre anni. Calcolare il prezzo con curva piatta al ${f(100*i)}\%$ annuo effettivo.',rf'P={x}\frac{{1000}}{{1+{f(i)}}}+{y}\frac{{1000}}{{(1+{f(i)})^3}}', 'Il prezzo del portafoglio è la somma delle quantità moltiplicate per i prezzi unitari. Ogni ZCB viene valutato alla propria scadenza prima di sommare i due investimenti.',ans,'euro',dict(x=x,y=y,i=i),'ans-x*1000/(1+i)-y*1000/(1+i)**3')

def struttura(t,k):
    v1=.96-.001*k;v2=.91-.001*k;v3=.85-.001*k
    if t==0:
        N=100;P=91-.2*k;ans=P/N
        return ex('Fattori di sconto dai titoli unitari','fattori-sconto',rf'Uno ZCB con rimborso di ${N}$ euro fra due anni costa ${f(P)}$ euro. Determinare il fattore di sconto biennale.',rf'v(0,2)=\frac{{{f(P)}}}{{{N}}}', 'Il fattore di sconto è il prezzo di un euro futuro. Il prezzo del titolo viene quindi diviso per il suo rimborso, espresso nella stessa unità monetaria.',ans,'numero',dict(P=P,N=N),'ans*N-P')
    if t==1:
        T=2+k%3;v=.9-.005*k;ans=100*(v**(-1/T)-1)
        return ex('Tassi spot per scadenza','tassi-spot',rf'Il fattore di sconto alla scadenza di ${T}$ anni è ${f(v)}$. Calcolare il tasso spot annuo effettivo in percentuale.',rf's_{{{T}}}={f(v)}^{{-\frac1{{{T}}}}}-1', 'Il fattore di sconto è il reciproco del montante di un euro fino alla scadenza. Il tasso annuo si ricava distribuendo quel fattore complessivo sul numero di anni.',ans,'percento',dict(v=v,T=T),'v*(1+ans/100)**T-1')
    if t==2:
        ans=100*((v1/v3)**.5-1)
        return ex('Tassi forward composti','tassi-forward',rf'Sono dati $v(0,1)={f(v1)}$ e $v(0,3)={f(v3)}$. Calcolare il tasso forward annuo effettivo tra il primo e il terzo anno, in percentuale.',rf'f_{{1,3}}=\left(\frac{{{f(v1)}}}{{{f(v3)}}}\right)^{{\frac12}}-1', 'Il rapporto dei fattori determina il montante sui due anni dell’intervallo forward. Il tasso richiesto è annuo, quindi si estrae la radice quadrata del fattore prima di sottrarre uno.',ans,'percento',dict(v1=v1,v3=v3),'v3*(1+ans/100)**2-v1')
    if t==3:
        ans=100*math.log(v1/v3)/2
        return ex('Tassi forward continui','forward-continuo',rf'Dati $v(0,1)={f(v1)}$ e $v(0,3)={f(v3)}$, calcolare il tasso forward continuo medio tra $1$ e $3$ anni, espresso in percentuale annua.',rf'\phi_{{1,3}}=\frac{{\log({f(v1)})-\log({f(v3)})}}2', 'Nella convenzione continua il logaritmo del rapporto dei fattori rappresenta la capitalizzazione complessiva. Dividendo per la durata dell’intervallo si ottiene l’intensità media annua.',ans,'percento',dict(v1=v1,v3=v3),'v3*exp(ans/100*2)-v1')
    if t==4:
        N=100;c=4+k*.2;P=round(c*v1+(N+c)*v2,2);ans=(P-c*v1)/(N+c)
        return ex('Bootstrap della curva dei fattori','bootstrap',rf'Un titolo di prezzo ${f(P,8)}$ euro paga una cedola di ${f(c)}$ fra un anno e cedola più rimborso di $100$ euro fra due anni. Dato $v(0,1)={f(v1)}$, determinare $v(0,2)$.',rf'v(0,2)=\frac{{{f(P,8)}-{f(c)}\cdot{f(v1)}}}{{100+{f(c)}}}', 'Il primo flusso ha già un fattore di sconto noto. Si sottrae il suo valore dal prezzo e si divide il valore residuo per il pagamento totale della seconda data.',ans,'numero',dict(P=P,c=c,v1=v1),'c*v1+(100+c)*ans-P')
    if t==5:
        c=5+.2*k;N=100;ans=c*v1+c*v2+(N+c)*v3
        return ex('Prezzi su curve non piatte','prezzo-curva',rf'Una curva assegna $v(0,1)={f(v1)}$, $v(0,2)={f(v2)}$, $v(0,3)={f(v3)}$. Calcolare il prezzo di un titolo con tre cedole annuali di ${f(c)}$ euro e rimborso finale di $100$ euro.',rf'P={f(c)}\cdot{f(v1)}+{f(c)}\cdot{f(v2)}+(100+{f(c)})\cdot{f(v3)}', 'Ogni scadenza usa il proprio fattore di sconto. Alla terza data si sommano rimborso e cedola prima di moltiplicarli per il fattore finale.',ans,'euro',dict(c=c,v1=v1,v2=v2,v3=v3),'ans-c*v1-c*v2-(100+c)*v3')
    if t==6:
        c=4+.2*k;fair=c*v1+(100+c)*v2;extra=1+.25*k;observed=round(fair+extra,2);ans=observed-fair
        return ex('Arbitraggi fra titolo e replica','arbitraggio',rf'Un titolo paga ${f(c)}$ euro fra un anno e ${f(100+c)}$ euro fra due anni. I fattori sono ${f(v1)}$ e ${f(v2)}$; il titolo quota ${f(observed,2)}$ euro. Con vendite allo scoperto ammesse e assenza di costi, calcolare il guadagno iniziale della vendita del titolo e dell’acquisto della replica.',rf'G={f(observed,2)}-\left({f(c)}\cdot{f(v1)}+{f(100+c)}\cdot{f(v2)}\right)', 'Vendendo il titolo si riceve il prezzo osservato. Si acquistano ZCB che riproducono esattamente le due uscite future della posizione venduta; il costo della replica lascia il guadagno iniziale e i flussi futuri si annullano.',ans,'euro',dict(c=c,v1=v1,v2=v2,observed=observed),'ans-observed+c*v1+(100+c)*v2')
    c=5;P1=round(100*v1,2);P2=round(c*v1+105*v2,2);v1=P1/100;v2=(P2-c*v1)/105;F1=30+2*k;F2=60+3*k;x2=F2/105;x1=(F1-c*x2)/100;ans=x1*P1+x2*P2
    return ex('Replicazioni con titoli cedolari','replicazione',rf'Il titolo A paga $100$ euro al tempo $1$ e costa ${f(P1,2)}$ euro. B paga $5$ euro al tempo $1$ e $105$ al tempo $2$, e costa ${f(P2,2)}$ euro. Calcolare il costo del portafoglio che paga ${F1}$ euro al tempo $1$ e ${F2}$ al tempo $2$, con quantità divisibili.',rf'x_B=\frac{{{F2}}}{{105}},\quad x_A=\frac{{{F1}-5x_B}}{{100}},\quad P={f(P1,2)}x_A+{f(P2,2)}x_B', 'La seconda scadenza determina per prima la quantità di B. Il pagamento che B produce alla prima data viene sottratto dal flusso desiderato; il residuo si replica con A.',ans,'euro',dict(F1=F1,F2=F2,v1=v1,v2=v2),'ans-F1*v1-F2*v2')

def dati_duration(k):
    i=.03+.002*k;cash=[40+2*k,40+2*k,1040+2*k];times=[1,2,3];P=pv(cash,times,i)
    D=sum(t*c/(1+i)**t for t,c in zip(times,cash))/P
    conv=sum(t*(t+1)*c/(1+i)**(t+2) for t,c in zip(times,cash))/P
    return i,cash,times,P,D,conv

def duration(t,k):
    i,cash,times,P,D,conv=dati_duration(k);q=f(100*i);c=f(cash[0]);params=dict(i=i,cash=cash,times=times)
    if t==0:
        return ex('Duration di Macaulay','duration-macaulay',rf'Un titolo paga ${c}$ euro ai tempi $1$ e $2$ e ${f(cash[2])}$ euro al tempo $3$. Calcolare la duration di Macaulay al rendimento annuo del ${q}\%$.',r'P=\sum_hC_h(1+i)^{-t_h},\qquad D=\frac{\sum_ht_hC_h(1+i)^{-t_h}}P', 'Ogni scadenza viene pesata con il valore attuale del pagamento corrispondente. Si divide la somma dei prodotti fra scadenza e valore attuale per il prezzo totale.',D,'anni',params,'ans*sum([c/(1+i)**u for c,u in zip(cash,times)])-sum([u*c/(1+i)**u for c,u in zip(cash,times)])')
    if t==1:
        return ex('Duration modificate','duration-modificata',rf'Un titolo paga ${c}$ euro al primo e al secondo anno e ${f(cash[2])}$ al terzo. Calcolare la duration modificata rispetto al rendimento annuo effettivo del ${q}\%$.',r'D_{\mathrm{mod}}=\frac{D}{1+i}', 'Si calcola prima la durata media con i pesi attualizzati. Il rendimento è composto annuo, quindi la sensibilità relativa si ottiene dividendo la duration di Macaulay per uno più il rendimento.',D/(1+i),'numero',params,'ans*sum([c/(1+i)**u for c,u in zip(cash,times)])-sum([u*c/(1+i)**(u+1) for c,u in zip(cash,times)])')
    if t==2:
        return ex('Convexity dei titoli cedolari','convexity',rf'Calcolare la convexity rispetto al rendimento annuo effettivo del ${q}\%$ di un titolo con flussi ${c}$, ${c}$ e ${f(cash[2])}$ euro ai tempi $1,2,3$.',r'\mathcal C=\frac{\sum_ht_h(t_h+1)C_h(1+i)^{-t_h-2}}{\sum_hC_h(1+i)^{-t_h}}', 'La seconda derivata di ogni pagamento attualizzato contiene la scadenza moltiplicata per la scadenza più uno. La somma delle seconde derivate si normalizza dividendo per il prezzo.',conv,'numero',params,'ans*sum([c/(1+i)**u for c,u in zip(cash,times)])-sum([u*(u+1)*c/(1+i)**(u+2) for c,u in zip(cash,times)])')
    if t==3:
        price=1000+30*k;dm=3+.1*k;bp=20+5*k;change=bp*.0001;ans=-price*dm*change
        return ex('Variazioni lineari di prezzo','sensibilita-prezzo',rf'Un portafoglio vale ${f(price)}$ euro e ha duration modificata ${f(dm)}$. Stimare in euro la variazione di prezzo per un aumento del rendimento di ${bp}$ punti base, al primo ordine.',rf'\Delta P\approx-{f(price)}\cdot{f(dm)}\cdot\frac{{{bp}}}{{10000}}', 'I punti base si convertono in variazione decimale del rendimento. Il segno negativo deriva dalla relazione inversa fra prezzo e tasso per un flusso futuro positivo.',ans,'euro',dict(price=price,dm=dm,bp=bp),'ans+price*dm*bp/10000')
    if t==4:
        price=980+10*k;dm=4+.1*k;cv=22+k;dy=.005+.001*k;ans=price*(1-dm*dy+.5*cv*dy*dy)
        return ex('Prezzi stimati al secondo ordine','taylor-prezzo',rf'Un titolo costa ${f(price)}$ euro, ha duration modificata ${f(dm)}$ e convexity ${f(cv)}$. Stimare il nuovo prezzo per $\Delta y={f(dy)}$ usando il secondo ordine.',rf'P_{{\mathrm{{nuovo}}}}\approx{f(price)}\left(1-{f(dm)}\cdot{f(dy)}+\frac12{f(cv)}\cdot{f(dy)}^2\right)', 'Il termine lineare rappresenta la variazione dovuta alla duration. La convexity aggiunge la correzione quadratica; la variazione relativa viene poi moltiplicata per il prezzo iniziale.',ans,'euro',dict(price=price,dm=dm,cv=cv,dy=dy),'ans/price-1+dm*dy-cv*dy*dy/2')
    if t==5:
        w=.3+.03*k;T1=2;T2=6;ans=w*T1+(1-w)*T2
        return ex('Duration dei portafogli','duration-portafoglio',rf'Un portafoglio valutato a un unico rendimento investe il ${f(w*100)}\%$ del valore di mercato in uno ZCB biennale e il resto in uno ZCB a sei anni. Calcolare la duration di Macaulay.',rf'D_P={f(w)}\cdot2+(1-{f(w)})\cdot6', 'La duration di ogni ZCB coincide con la sua scadenza. I pesi assegnati sono quote di valore di mercato e sommano uno, quindi la duration del portafoglio è la loro media ponderata.',ans,'anni',dict(w=w,T1=T1,T2=T2),'ans-w*T1-(1-w)*T2')
    if t==6:
        T=4+k%4;ans=T/(1+i)
        return ex('Duration degli zero coupon','duration-zcb',rf'Uno ZCB scade fra ${T}$ anni e ha rendimento annuo effettivo del ${q}\%$. Calcolare la duration modificata.',rf'D_{{\mathrm{{mod}}}}=\frac{{{T}}}{{1+{f(i)}}}', 'La sola scadenza del titolo è anche la sua duration di Macaulay. La conversione alla duration modificata usa il fattore di un periodo del rendimento composto.',ans,'numero',dict(T=T,i=i),'ans*(1+i)-T')
    ans=-P*D/(1+i)
    return ex('Derivate del prezzo obbligazionario','derivate-prezzo',rf'Per i flussi ${c}$, ${c}$ e ${f(cash[2])}$ euro ai tempi $1,2,3$, calcolare la derivata del prezzo rispetto al rendimento annuo effettivo, nel punto $y={f(i)}$.',r'P^{\prime}(y)=-\sum_ht_hC_h(1+y)^{-t_h-1}', 'Si derivano separatamente le potenze negative dei fattori di montante. Tutti i termini della derivata hanno segno negativo, perché le scadenze e i pagamenti sono positivi.',ans,'numero',params,'ans+sum([u*c/(1+i)**(u+1) for c,u in zip(cash,times)])')

def immunizzazione(t,k):
    delta=.03+.002*k;L=10000+500*k;H=3+k%2;T1=1;T2=6+k%2;L0=L*math.exp(-delta*H);w1=(T2-H)/(T2-T1);w2=1-w1
    if t==0:
        A1=4000+200*k;A2=7000+300*k;ans=A1*math.exp(-delta*T1)+A2*math.exp(-delta*T2)-L0
        return ex('Surplus di attività e passività','valore-netto',rf'Le attività pagano ${f(A1)}$ euro al tempo ${T1}$ e ${f(A2)}$ euro al tempo ${T2}$. La passività richiede ${f(L)}$ euro al tempo ${H}$. Calcolare il surplus iniziale con forza piatta $\delta={f(delta)}$.',rf'S={f(A1)}e^{{-{f(delta)}\cdot{T1}}}+{f(A2)}e^{{-{f(delta)}\cdot{T2}}}-{f(L)}e^{{-{f(delta)}\cdot{H}}}', 'Si valutano alla stessa forza sia gli incassi sia l’obbligazione da pagare. Il surplus è il valore delle attività meno il valore della passività.',ans,'euro',dict(A1=A1,A2=A2,L=L,T1=T1,T2=T2,H=H,delta=delta),'ans-A1*exp(-delta*T1)-A2*exp(-delta*T2)+L*exp(-delta*H)')
    if t==1:
        ans=100*w2
        return ex('Pesi per la corrispondenza delle duration','duration-matching',rf'Un passivo ha duration di ${H}$ anni. Un portafoglio di ZCB alle scadenze ${T1}$ e ${T2}$ anni deve avere lo stesso valore e la stessa duration. Calcolare la quota percentuale del valore di mercato da assegnare al titolo lungo.',rf'w_2=\frac{{{H}-{T1}}}{{{T2}-{T1}}}', 'La duration degli attivi è la media delle scadenze dei due ZCB pesata con i capitali investiti. Si impone che tale media uguagli la duration del passivo e si risolve rispetto al peso lungo.',ans,'percento',dict(H=H,T1=T1,T2=T2),'(1-ans/100)*T1+(ans/100)*T2-H')
    if t==2:
        ans=L0*w1
        return ex('Capitali investiti in due titoli','portafoglio-due-titoli',rf'Per coprire ${f(L)}$ euro al tempo ${H}$, sono disponibili ZCB alle scadenze ${T1}$ e ${T2}$. Con forza piatta $\delta={f(delta)}$, determinare il capitale da investire oggi nello ZCB breve per uguagliare valore e duration del passivo.',rf'L_0={f(L)}e^{{-{f(delta)}\cdot{H}}},\qquad X_1=L_0\frac{{{T2}-{H}}}{{{T2}-{T1}}}', 'Il capitale totale da investire è il valore attuale del passivo. Il sistema formato da uguaglianza dei valori e uguaglianza delle duration determina la quota di valore del titolo breve.',ans,'euro',dict(L=L,H=H,delta=delta,T1=T1,T2=T2),'ans*T1+(L*exp(-delta*H)-ans)*T2-L*exp(-delta*H)*H')
    if t==3:
        ans=w1*T1*T1+w2*T2*T2-H*H
        return ex('Convexity eccedente degli attivi','convexity-matching',rf'Un passivo unico scade a ${H}$ anni. Due ZCB a ${T1}$ e ${T2}$ anni ne eguagliano valore e duration, con pesi non negativi. Calcolare $C_A-C_L$ rispetto alla forza continua.',rf'C_A-C_L=\frac{{{T2}-{H}}}{{{T2}-{T1}}}{T1}^2+\frac{{{H}-{T1}}}{{{T2}-{T1}}}{T2}^2-{H}^2', 'Con parametrizzazione continua la convexity è il secondo momento delle scadenze. Il passivo unico ha secondo momento pari al quadrato della sua data; la dispersione dei due ZCB produce l’eccedenza.',ans,'numero',dict(H=H,T1=T1,T2=T2),'ans-(H-T1)*(T2-H)')
    if t==4:
        L0=round(L0,2);shock=.005+.001*k;excess=(H-T1)*(T2-H);ans=.5*L0*excess*shock*shock
        return ex('Surplus locali secondo Redington','redington',rf'Attivi e passivi hanno uguale valore attuale di ${f(L0,2)}$ euro e uguale duration. L’eccedenza di convexity continua degli attivi è ${f(excess)}$. Stimare il surplus al secondo ordine per uno spostamento parallelo della forza pari a ${f(shock)}$.',rf'S(\delta_0+h)\approx\frac12\cdot{f(L0,2)}\cdot{f(excess)}\cdot{f(shock)}^2', 'L’uguaglianza dei valori annulla il termine costante del surplus e quella delle duration annulla il termine lineare. Rimane al secondo ordine la metà della derivata seconda moltiplicata per il quadrato dello spostamento.',ans,'euro',dict(L0=L0,excess=excess,shock=shock),'2*ans-L0*excess*shock*shock')
    if t==5:
        C1=100+10*k;C2=150+10*k;ans=C1*(H-T1)*math.exp(delta*(H-T1))+C2*(H-T2)*math.exp(delta*(H-T2))
        return ex('Sensibilità del valore all’orizzonte','rischio-reinvestimento',rf'Un flusso paga ${f(C1)}$ euro al tempo ${T1}$ e ${f(C2)}$ al tempo ${T2}$. Con orizzonte $H={H}$ e forza $\delta={f(delta)}$, calcolare la derivata di $W_H$ rispetto alla forza, applicata sia al reinvestimento sia all’attualizzazione.',rf'W_H^{{\prime}}(\delta)=({H}-{T1}){f(C1)}e^{{{f(delta)}({H}-{T1})}}+({H}-{T2}){f(C2)}e^{{{f(delta)}({H}-{T2})}}', 'Il pagamento prima dell’orizzonte genera una sensibilità positiva al reinvestimento. Il pagamento successivo genera una sensibilità negativa alla valutazione; la somma delle due derivate determina il risultato netto.',ans,'numero',dict(C1=C1,C2=C2,H=H,T1=T1,T2=T2,delta=delta),'ans-(H-T1)*C1*exp(delta*(H-T1))-(H-T2)*C2*exp(delta*(H-T2))')
    if t==6:
        tau=.5;newdelta=delta+.01;Lnew=L*math.exp(-newdelta*(H-tau));ans=Lnew*(T2-H)/(T2-T1)
        return ex('Riequilibri a una nuova data','riequilibrio',rf'Una passività di ${f(L)}$ euro al tempo originario ${H}$ va coperta con ZCB alle date originarie ${T1}$ e ${T2}$. Alla data $\tau={f(tau)}$ la nuova forza piatta è ${f(newdelta)}$. Determinare il capitale da assegnare al titolo breve nel riequilibrio di valore e duration.',rf'L_\tau={f(L)}e^{{-{f(newdelta)}({H}-{f(tau)})}},\qquad X_1=L_\tau\frac{{({T2}-{f(tau)})-({H}-{f(tau)})}}{{({T2}-{f(tau)})-({T1}-{f(tau)})}}', 'Alla nuova data si usano tempi residui e nuovi valori di mercato. Le differenze fra le tre scadenze restano uguali, ma il valore del passivo da ripartire è quello aggiornato.',ans,'euro',dict(L=L,H=H,T1=T1,T2=T2,tau=tau,newdelta=newdelta),'ans*(T1-tau)+(L*exp(-newdelta*(H-tau))-ans)*(T2-tau)-L*exp(-newdelta*(H-tau))*(H-tau)')
    short=2;long=4;target=5+.1*k;ans=100*(target-short)/(long-short)
    return ex('Vincoli sui pesi immunizzanti','limiti-immunizzazione',rf'Un passivo ha duration ${f(target)}$. Sono disponibili soltanto ZCB a ${short}$ e ${long}$ anni. Ammettendo vendite allo scoperto, calcolare il peso percentuale del valore del titolo lungo che uguaglia la duration. Il peso residuo appartiene al titolo breve.',rf'w_2=\frac{{{f(target)}-{short}}}{{{long}-{short}}}', 'La duration del passivo supera entrambe le scadenze disponibili. Il peso del titolo lungo deve quindi superare il cento per cento e quello del breve è negativo; senza vendita allo scoperto il sistema non ammette una soluzione con pesi non negativi.',ans,'percento',dict(short=short,long=long,target=target),'(1-ans/100)*short+(ans/100)*long-target')

CAPITOLI=[
 ('regimi-e-tassi','Regimi finanziari e tassi equivalenti','Regimi e tassi',regimi),
 ('equivalenza-finanziaria','Equivalenza finanziaria e valutazione dei flussi','Equivalenza finanziaria',equivalenza),
 ('rendite-costanti','Rendite costanti, differite e perpetue','Rendite costanti',rendite),
 ('rendite-variabili','Rendite variabili, flussi continui e costituzione di capitale','Rendite variabili',variabili),
 ('ammortamenti','Ammortamento dei prestiti e debito residuo','Ammortamenti',ammortamenti),
 ('valutazione-investimenti','VAN, TIR e confronto degli investimenti','VAN e TIR',investimenti),
 ('obbligazioni','Titoli obbligazionari, prezzi e rendimenti','Obbligazioni',obbligazioni),
 ('struttura-a-termine','Struttura a termine, tassi forward e arbitraggio','Struttura a termine',struttura),
 ('duration-convexity','Duration, convexity e sensibilità dei prezzi','Duration e convexity',duration),
 ('immunizzazione','Immunizzazione finanziaria e gestione del rischio di tasso','Immunizzazione',immunizzazione),
]

def risultato(E, value=None):
    v=E['answer'] if value is None else value
    digits=2 if E['unit']=='euro' else 4
    tail={'euro':' euro','percento':r'\%','anni':' anni','numero':''}[E['unit']]
    return '$'+f(v,digits)+('$'+tail if E['unit'] in ('euro','anni') else tail+'$')

def registra(E,path):
    REGISTRO.append({key:E[key] for key in ['answer','unit','params','check']}|{'file':str(path.relative_to(ROOT)),'risultato':risultato(E)})

def scrivi(path,text):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text.rstrip('\n') + '\n', encoding='utf8')

def front(title,anchor,free=None):
    return '---\ntitolo: '+json.dumps(title,ensure_ascii=False)+'\n'+(('gratis: '+str(free).lower()+'\n') if free is not None else '')+'teoria: ['+anchor+']\nparole: ['+json.dumps(title,ensure_ascii=False)+']\n---\n\n'

def genera():
    for slug,title,brief,fn in CAPITOLI:
        for t in range(8):
            es=[fn(t,k) for k in (0,1)]
            body=front(es[0]['title'],es[0]['anchor'],t<3)
            for j,E in enumerate(es,1):
                body+=f'## Esercizio {j}\n\n'+E['question']+'\n\n$$\n'+E['steps']+'\n$$\n\nIl risultato è '+risultato(E)+'.\n\n'
                if E.get('table'): body+=E['table']+'\n\n'
                body+='<div class="spiegazione">\n\n'+E['why']+'\n\n</div>\n\n'
            path=ROOT/'src/content/svolti'/MATERIA/slug/f'{t+1}.md';scrivi(path,body)
            for E in es:registra(E,path)
        for num in range(1,15):
            t=(num-1)%8;k=2+(num-1)//8;E=fn(t,k)
            body=front(E['title'],E['anchor'])+E['question']+'\n\n:::soluzione\n'+risultato(E)+'.\n:::\n'
            path=ROOT/'src/content/dafare'/MATERIA/slug/f'{num}.md';scrivi(path,body);registra(E,path)
        for num in range(1,33):
            t=(num-1)%8;k=4+(num-1)//8;E=fn(t,k)
            v=E['answer'];scale=max(abs(v)*.12,1 if E['unit'] in ('euro','anni') else .1)
            vals=[v,v+scale,v-scale,v+2.1*scale]
            correct=(num-1)%4
            vals=vals[-correct:]+vals[:-correct] if correct else vals
            rendered=[risultato(E,x) for x in vals]
            assert len(set(rendered))==4
            question=E['question']+' '+('Arrotondare il risultato ai centesimi.' if E['unit']=='euro' else 'Approssimare il risultato a quattro cifre decimali, quando necessario.')
            body='---\ncorretta: '+str(correct+1)+'\n---\n\n'+question+'\n\n'+'\n'.join('- '+x for x in rendered)+'\n\n## Spiegazione\n\n$$\n'+E['steps']+'\n$$\n\n'+E['why']+' Il risultato è '+risultato(E)+'.\n'
            path=ROOT/'src/content/domande'/MATERIA/slug/f'{num}.md';scrivi(path,body);registra(E,path)
    scrivi(ROOT/'strumenti/finanziaria/controlli.json',json.dumps(REGISTRO,ensure_ascii=False,indent=2)+'\n')
    scrivi(ROOT/'strumenti/finanziaria/capitoli.json',json.dumps([dict(slug=s,titolo=t,breve=b) for s,t,b,_ in CAPITOLI],ensure_ascii=False,indent=2)+'\n')
    print('10 capitoli; 80 schede con 160 svolgimenti, 140 esercizi e 320 quiz. Controlli numerici:',len(REGISTRO))

if __name__=='__main__':genera()
