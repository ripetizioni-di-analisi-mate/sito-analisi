"""Casi di calcolo con alternative tratte da errori tipici d'esame."""
from math import exp, log

from genera import a, f, s


def calcolo(traccia, formula, spiegazione, unita, valori, residuo, **dati):
    return dict(question=traccia, steps=formula, why=spiegazione, unit=unita,
                answer=valori[0], distractors=valori[1:], check=residuo, params=dati)


def numero(x):
    return f(x).replace('{,}', ',')


def regimi(k):
    C, i, n, m = 2400+380*k, .035+.005*k, 3+k, (2, 4, 12, 4, 2, 12)[k]
    mesi = 5+k
    t, q = mesi/12, 1+i
    M, S = round(C*q**n, 2), round(C*(1+i*t), 2)
    yield calcolo(
        f'In regime semplice, {C} euro diventano {numero(S)} euro in {mesi} mesi. Calcolare il tasso annuo.',
        r'i=\frac{M-C}{Ct}', 'Si rapporta l’interesse al capitale e si divide per la durata in anni.',
        'percento', [100*(S/C-1)/t, 100*(S/C-1), 100*(S/C-1)/mesi, 100*(S/C-1)*t],
        'C*(1+ans*t/100)-M', C=C, M=S, t=t)
    yield calcolo(
        f'In regime composto, {C} euro diventano {numero(M)} euro in {n} anni. Calcolare il tasso annuo effettivo.',
        r'i=\left(\frac{M}{C}\right)^{\frac1n}-1', 'Il rapporto fra montante e capitale è il fattore di tutto il periodo. Si estrae la radice di ordine pari al numero di anni.',
        'percento', [100*((M/C)**(1/n)-1), 100*(M/C-1)/n, 100*(M/C-1), 100*(1-(C/M)**(1/n))],
        'C*(1+ans/100)**n-M', C=C, M=M, n=n)
    r = 1.25+.1*k
    yield calcolo(
        f'Al {numero(100*i)}% annuo composto, dopo quanti anni il montante è pari a {numero(r)} volte il capitale?',
        r'T=\frac{\log\left(\frac{M}{C}\right)}{\log(1+i)}', 'I logaritmi isolano il tempo dall’esponente del fattore di montante.',
        'anni', [log(r)/log(q), (r-1)/i, log(r)/i, log(r)/log(1+2*i)],
        '(1+i)**ans-r', i=i, r=r)
    d = .04+.005*k
    yield calcolo(
        f'Un titolo pagabile fra un anno viene anticipato al tasso di sconto commerciale del {numero(100*d)}%. Calcolare il rendimento annuo effettivo per chi compra al valore scontato.',
        r'1+i=\frac{N}{N(1-d)}=\frac1{1-d}', 'Lo sconto si calcola sul nominale. Il rendimento rapporta il guadagno al prezzo pagato.',
        'percento', [100*d/(1-d), 100*d, 100*d/(1+d), 100*d/(1-d)**2],
        '(1+ans/100)*(1-d)-1', d=d)
    j = m*(q**(1/m)-1)
    yield calcolo(
        f'Un deposito rende il {numero(100*i)}% annuo effettivo. Calcolare il tasso nominale annuo equivalente convertibile {m} volte l’anno.',
        r'j=m\big((1+i)^{\frac1m}-1\big)', 'Si ricava il tasso effettivo di un sottoperiodo e lo si moltiplica per il numero di conversioni.',
        'percento', [100*j, 100*j/m, 100*i, 100*((1+i/m)**m-1)],
        '(1+ans/(100*m))**m-1-i', i=i, m=m)
    delta = .028+.004*k
    yield calcolo(
        rf'Un conto capitalizza in continuo con forza annua $\delta={f(delta)}$. Calcolare il tasso effettivo per {mesi} mesi.',
        r'i_t=e^{\delta t}-1', 'L’esponente è la forza annua moltiplicata per la frazione d’anno.',
        'percento', [100*(exp(delta*t)-1), 100*delta*t, 100*(exp(delta)-1)*t, 100*(1-exp(-delta*t))],
        '1+ans/100-exp(delta*t)', delta=delta, t=t)
    yield calcolo(
        f'Per {C} euro esigibili fra {mesi} mesi, due banche applicano il medesimo tasso annuo del {numero(100*i)}% come tasso razionale semplice e come tasso commerciale. Di quanto il valore attuale razionale supera quello commerciale?',
        r'V_r-V_c=N\left(\frac1{1+it}-(1-it)\right)',
        'Il valore razionale si ottiene dividendo per il fattore semplice. Quello commerciale sottrae lo sconto calcolato sul nominale.',
        'euro', [C/(1+i*t)-C*(1-i*t), C*i*t, C*(i*t)**2, C*i/(1+i*t)],
        'ans*(1+i*t)-C*(i*t)**2', C=C, i=i, t=t)
    yield calcolo(
        f'Due conti offrono il {numero(100*i)}% annuo. Il primo usa capitalizzazione composta e il secondo interesse semplice senza reinvestimento. Calcolare il maggior montante del primo dopo {n} anni su {C} euro.',
        r'M_c-M_s=C\big((1+i)^n-1-ni\big)', 'L’interesse composto matura sul capitale e sugli interessi precedenti. L’interesse semplice è calcolato sul capitale iniziale.',
        'euro', [C*(q**n-1-n*i), C*(q**n-1), C*n*i, C*(q**(n-1)-1-(n-1)*i)],
        'ans+C*(1+n*i)-C*(1+i)**n', C=C, i=i, n=n)


def equivalenza(k):
    A, B, i = 1200+160*k, 2300+250*k, .035+.005*k
    q, T = 1+i, 5+k
    V = A/q+B/q**4
    yield calcolo(
        f'Sostituire {A} euro al tempo 1 e {B} euro al tempo 4 con due rate uguali ai tempi 2 e 3. Calcolare ogni rata al tasso composto annuo del {numero(100*i)}%.',
        r'R=\frac{Aq^{-1}+Bq^{-4}}{q^{-2}+q^{-3}},\qquad q=1+i',
        'L’importo è lo stesso per entrambe le rate, quindi moltiplica la somma dei due fattori di sconto.',
        'euro', [V/(q**-2+q**-3), (A+B)/2, V/2, V/(q**-1+q**-2)],
        'ans*((1+i)**-2+(1+i)**-3)-A/(1+i)-B/(1+i)**4', A=A, B=B, i=i)
    yield calcolo(
        f'Un’operazione prevede un esborso di {A} euro oggi e un incasso di {B} euro al tempo 4. Calcolare il valore netto al tempo 2 al tasso composto del {numero(100*i)}%.',
        r'V_2=Bq^{-2}-Aq^2,\qquad q=1+i',
        'L’incasso futuro si attualizza e l’esborso iniziale si capitalizza. I due flussi hanno segno opposto.',
        'euro', [B/q**2-A*q**2, (B-A)/q**2, B*q**2-A/q**2, B/q**2-A],
        'ans/(1+i)**2-B/(1+i)**4+A', A=A, B=B, i=i)
    yield calcolo(
        f'Un fornitore concede {A} euro di sconto su un debito di {B} euro esigibile fra 3 anni, se viene pagato oggi. Calcolare il tasso composto annuo che rende equivalenti le due alternative.',
        r'i=\left(\frac{B}{B-A}\right)^{\frac13}-1',
        'Il pagamento immediato è il nominale meno lo sconto. Si confronta questo importo con il pagamento a scadenza.',
        'percento', [100*((B/(B-A))**(1/3)-1), 100*A/B/3, 100*A/(B-A)/3, 100*A/B],
        '(B-A)*(1+ans/100)**3-B', A=A, B=B)
    yield calcolo(
        f'Un debito di {B} euro scade al tempo 3. Il debitore versa {A} euro al tempo 1 e posticipa il saldo al tempo 5. Calcolare il saldo con tasso composto annuo del {numero(100*i)}%.',
        r'X=Bq^2-Aq^4,\qquad q=1+i',
        'Il pagamento eseguito riduce il debito di un importo pari al proprio montante alla nuova scadenza.',
        'euro', [B*q**2-A*q**4, (B-A)*q**2, B*q**2-A, B*q**2-A*q],
        'ans/(1+i)**5+A/(1+i)-B/(1+i)**3', A=A, B=B, i=i)
    j = .065+.005*k
    yield calcolo(
        f'Il tasso effettivo del primo anno è {numero(100*i)}% e quello del secondo è {numero(100*j)}%. Calcolare il capitale iniziale che produce {B} euro dopo due anni.',
        r'C=\frac{B}{(1+i_1)(1+i_2)}', 'Il capitale attraversa entrambi i periodi. Si inverte il prodotto dei due fattori di montante.',
        'euro', [B/(q*(1+j)), B/(1+i+j), B/q**2, B/(1+j)**2],
        'ans*(1+i)*(1+j)-B', B=B, i=i, j=j)
    d2, d5 = .923-.004*k, .794-.008*k
    yield calcolo(
        f'I fattori di sconto da oggi ai tempi 2 e 5 sono {numero(d2)} e {numero(d5)}. In un mercato senza arbitraggio, quanto valgono al tempo 2 i {B} euro esigibili al tempo 5?',
        r'V_2=B\frac{v(0,5)}{v(0,2)}', 'Attualizzare prima al tempo due e poi a oggi deve dare lo stesso valore dell’attualizzazione diretta.',
        'euro', [B*d5/d2, B*d5, B*d2/d5, B*d2*d5],
        'ans*d2-B*d5', B=B, d2=d2, d5=d5)
    yield calcolo(
        f'Un debitore può pagare {A} euro oggi e {B} al tempo {T}, oppure una somma unica al tempo 1. Calcolare la somma equivalente al tasso composto annuo del {numero(100*i)}%.',
        r'X=Aq+Bq^{1-T},\qquad q=1+i',
        'Il pagamento immediato matura un anno di interessi. Quello lontano si attualizza fino al tempo uno.',
        'euro', [A*q+B*q**(1-T), A+B*q**-T, A*q+B*q**-T, A+B*q**(1-T)],
        'ans/(1+i)-A-B/(1+i)**T', A=A, B=B, i=i, T=T)
    yield calcolo(
        f'Un credito di {B} euro scade fra due anni. Si concordano {A} euro oggi e una seconda somma fra {T} anni. Calcolare il secondo pagamento come percentuale del credito nominale al tasso composto del {numero(100*i)}%.',
        r'\frac{X}{B}=\left(q^{-2}-\frac{A}{B}\right)q^T,\qquad q=1+i',
        'Si sottrae l’incasso immediato dal valore attuale del credito. Il residuo si porta alla seconda scadenza e si rapporta al nominale.',
        'percento', [100*(q**-2-A/B)*q**T, 100*(1-A/B), 100*(q**-2-A/B), 100*(1-A/B)*q**(T-2)],
        'A+B*ans/100/(1+i)**T-B/(1+i)**2', A=A, B=B, i=i, T=T)


def rendite(k):
    R, i, n, m = 360+60*k, .03+.006*k, 5+k, 2+k%3
    q = 1+i
    v = R*a(n, i)
    yield calcolo(
        f'Due rendite hanno {n} rate annue da {R} euro. Nella prima si paga a inizio anno, nella seconda a fine anno. Calcolare la differenza tra il valore attuale della prima e quello della seconda al {numero(100*i)}%.',
        r'V_{\rm ant}-V_{\rm post}=R(1-q^{-n}),\qquad q=1+i',
        'Le rate comuni ai tempi da uno a n meno uno si elidono. Rimangono la rata immediata e quella all’ultima scadenza.',
        'euro', [R*(1-q**-n), R*i, R*(q**n-1), R*(1-q**-(n-1))],
        'ans-R+R/(1+i)**n', R=R, i=i, n=n)
    K = 18000+1200*k
    yield calcolo(
        f'Un debito di {K} euro oggi sarà saldato con {n} rate annue uguali a partire dal tempo {m+1}. Al {numero(100*i)}% annuo, qual è la rata?',
        r'R=\frac{K(1+i)^m}{a_{\overline n|i}}',
        'Il valore attuale delle rate al tempo m deve uguagliare il montante del debito alla stessa data.',
        'euro', [K*q**m/a(n, i), K/a(n, i), K*q**(m+1)/a(n, i), K/q**m/a(n, i)],
        'sum([ans/(1+i)**h for h in range(m+1,m+n+1)])-K', K=K, i=i, m=m, n=n)
    yield calcolo(
        f'Calcolare il montante al tempo {n} di {n} rate annue da {R} euro, versate all’inizio di ogni anno al {numero(100*i)}%.',
        r'M=R(1+i)s_{\overline n|i}',
        'Rispetto alle rate posticipate ogni versamento matura un anno in più. Il montante si moltiplica per il fattore annuo.',
        'euro', [R*q*s(n, i), R*s(n, i), R*s(n, i)/q, R*q*s(n+1, i)],
        'ans/(1+i)**n-sum([R/(1+i)**h for h in range(n)])', R=R, i=i, n=n)
    j = q**.25-1
    yield calcolo(
        f'Un prestito di {K} euro si rimborsa con {n} rate trimestrali posticipate uguali. Il tasso annuo effettivo è {numero(100*i)}%. Calcolare la rata.',
        r'j=(1+i)^{\frac14}-1,\qquad R=\frac{K}{a_{\overline n|j}}',
        'I periodi del piano sono trimestri. Il tasso trimestrale equivalente si applica a ogni rata.',
        'euro', [K/a(n, j), K/a(n, i), K/n, K/a(n, i/4)],
        'sum([ans/(1+i)**(h/4) for h in range(1,n+1)])-K', K=K, i=i, n=n)
    X = 2000+200*k
    yield calcolo(
        f'Per un debito di {K} euro si pagano subito {X} euro e poi {n} rate annue posticipate uguali. Al {numero(100*i)}% annuo calcolare la rata.',
        r'R=\frac{K-X}{a_{\overline n|i}}',
        'Il versamento iniziale riduce direttamente il capitale da distribuire sulle rate future.',
        'euro', [(K-X)/a(n, i), K/a(n, i)-X/n, K/a(n, i), (K-X)/(q*a(n, i))],
        'X+sum([ans/(1+i)**h for h in range(1,n+1)])-K', K=K, X=X, i=i, n=n)
    yield calcolo(
        f'Un finanziamento di {K} euro prevede {n} rate annue uguali posticipate e un saldo aggiuntivo di {X} euro insieme all’ultima rata. Al {numero(100*i)}% annuo calcolare l’importo di ciascuna rata ordinaria.',
        r'R=\frac{K-X(1+i)^{-n}}{a_{\overline n|i}}',
        'Il saldo finale copre la parte del debito pari al proprio valore attuale. Le rate ordinarie coprono il resto.',
        'euro', [(K-X/q**n)/a(n, i), (K-X)/a(n, i), (K-X/q**(n+1))/a(n, i), K/a(n, i)],
        'sum([ans/(1+i)**h for h in range(1,n+1)])+X/(1+i)**n-K', K=K, X=X, i=i, n=n)
    F = round(v+R*.6*q**-(n+1), 2)
    yield calcolo(
        f'Un debito di {numero(F)} euro si rimborsa al {numero(100*i)}% annuo con {n} rate posticipate da {R} euro e un ultimo saldo un anno dopo. Calcolare il saldo.',
        r'X=\big(F-Ra_{\overline n|i}\big)(1+i)^{n+1}',
        'Il valore attuale delle rate note si sottrae dal debito. La differenza si porta alla scadenza del saldo.',
        'euro', [(F-v)*q**(n+1), (F-v)*q**n, F-v, (F-v)*q**(n+2)],
        'ans/(1+i)**(n+1)+sum([R/(1+i)**h for h in range(1,n+1)])-F', F=F, R=R, i=i, n=n)
    yield calcolo(
        f'Una rendita perpetua paga {R} euro ogni trimestre con prima rata tra tre mesi. Calcolare il valore attuale al {numero(100*i)}% annuo effettivo.',
        r'V=\frac{R}{(1+i)^{\frac14}-1}',
        'La perpetuità si valuta con il tasso effettivo del periodo di pagamento. In questo caso il periodo è un trimestre.',
        'euro', [R/j, 4*R/i, R/i, R*(1+j)/j],
        'ans*((1+i)**.25-1)-R', R=R, i=i)


def variabili(k):
    R, h, i, n = 480+50*k, 35+5*k, .045+.005*k, 4+k
    q = 1+i
    W = sum(t/q**(t+1) for t in range(n))
    V = round(R*a(n, i)+h*W, 2)
    yield calcolo(
        f'Una rendita di {n} rate annue posticipate vale oggi {numero(V)} euro al {numero(100*i)}%. Ogni rata supera la precedente di {h} euro. Calcolare la prima rata.',
        r'R_1=\frac{V-h\sum_{t=1}^n(t-1)(1+i)^{-t}}{a_{\overline n|i}}',
        'Si sottrae il valore attuale degli incrementi. Il residuo è il valore di n rate costanti pari alla prima.',
        'euro', [(V-h*W)/a(n, i), V/a(n, i), (V-h*(W+a(n, i)))/a(n, i), (V-h*W)/n],
        'sum([(ans+h*t)/(1+i)**(t+1) for t in range(n)])-V', V=V, h=h, n=n, i=i)
    yield calcolo(
        f'Una rendita di {n} rate annue posticipate vale oggi {numero(V)} euro al {numero(100*i)}%. La prima rata è {R} euro e gli aumenti sono in euro e costanti. Calcolare l’aumento annuo.',
        r'h=\frac{V-Ra_{\overline n|i}}{\sum_{t=1}^n(t-1)(1+i)^{-t}}',
        'Il valore delle rate costanti si sottrae dal totale. La differenza è il valore attuale della sola progressione degli aumenti.',
        'euro', [(V-R*a(n, i))/W, (V-R*a(n, i))/(W+a(n, i)), (V-R*a(n, i))/sum(range(n)), (V-R*a(n, i))/a(n, i)],
        'sum([(R+ans*t)/(1+i)**(t+1) for t in range(n)])-V', V=V, R=R, n=n, i=i)
    yield calcolo(
        f'La prima di {n} rate annue posticipate è {R} euro e le successive crescono al {numero(100*i)}% annuo. Il tasso di valutazione è lo stesso. Calcolare il valore attuale.',
        r'V=\frac{nR_1}{1+i}',
        'Il fattore di crescita cancella una potenza del fattore di attualizzazione. Tutte le rate hanno quindi lo stesso valore attuale.',
        'euro', [n*R/q, n*R, R*a(n, i), n*R/q**n],
        'ans*(1+i)-n*R', R=R, i=i, n=n)
    g = .015+.002*k
    montante = sum(R*(1+g)**t*q**(n-1-t) for t in range(n))
    yield calcolo(
        f'Si versano {n} rate annue posticipate. La prima è {R} euro e le successive crescono al {numero(100*g)}% annuo. Il conto rende il {numero(100*i)}%. Calcolare il montante all’ultimo versamento.',
        r'M=R_1\sum_{t=1}^n(1+g)^{t-1}(1+i)^{n-t}',
        'Ogni rata cresce rispetto alla precedente, ma resta investita per un anno in meno. L’ultima rata si aggiunge senza interessi.',
        'euro', [montante, montante/q, montante*q, R*s(n, i)],
        'ans/(1+i)**n-sum([R*(1+g)**t/(1+i)**(t+1) for t in range(n)])', R=R, i=i, g=g, n=n)
    m = 2+k%3
    yield calcolo(
        f'Una perpetuità paga la prima rata di {R} euro al tempo {m+1}. Le rate crescono al {numero(100*g)}% annuo e il tasso di valutazione è {numero(100*i)}%. Calcolare il valore attuale.',
        r'V_0=\frac{R_1}{i-g}(1+i)^{-m}',
        'La formula della perpetuità crescente valuta il flusso un anno prima della prima rata. Da quella data si attualizza a oggi.',
        'euro', [R/(i-g)/q**m, R/(i-g), R/(i-g)/q**(m+1), R/i/q**m],
        'ans*(1+i)**m*(i-g)-R', R=R, i=i, g=g, m=m)
    delta = .035+.004*k
    C = 2*R+h
    first = R*(1-exp(-delta))/delta
    second = C*(exp(-delta)-exp(-delta*n))/delta
    yield calcolo(
        rf'Un flusso continuo paga {R} euro all’anno dal tempo 0 al tempo 1 e {C} euro all’anno dal tempo 1 al tempo {n}. Calcolare il valore attuale con forza $\delta={f(delta)}$.',
        r'V=\int_0^1Re^{-\delta t}\,dt+\int_1^nCe^{-\delta t}\,dt',
        'La densità cambia al tempo uno. Le due parti dell’integrale usano le proprie densità e le date effettive.',
        'euro', [first+second, first+second*exp(delta), R+C*(n-1), C*(1-exp(-delta*n))/delta],
        'delta*ans-R*(1-exp(-delta))-C*(exp(-delta)-exp(-delta*n))', R=R, C=C, delta=delta, n=n)
    yield calcolo(
        rf'Un fondo riceve una densità costante di {R} euro all’anno per {n} anni. Con forza di interesse $\delta={f(delta)}$, calcolare il montante al tempo {n}.',
        r'M=\int_0^n Re^{\delta(n-t)}\,dt',
        'Un versamento al tempo t capitalizza per n meno t anni. L’integrale somma tutti i versamenti portati alla data finale.',
        'euro', [R*(exp(delta*n)-1)/delta, R*(1-exp(-delta*n))/delta, R*n, R*exp(delta*n)*n],
        'ans*exp(-delta*n)*delta-R*(1-exp(-delta*n))', R=R, delta=delta, n=n)
    K = 1000+int(1.1*montante)
    yield calcolo(
        f'Le prime {n} rate annue posticipate di un piano partono da {R} euro e crescono al {numero(100*g)}% annuo. Il conto rende il {numero(100*i)}%. Quale integrazione all’ultima scadenza porta il fondo a {K} euro?',
        r'X=K-R_1\sum_{t=1}^n(1+g)^{t-1}(1+i)^{n-t}',
        'La differenza si calcola alla data dell’obiettivo, usando il montante dei versamenti già programmati.',
        'euro', [K-montante, K-montante/q, K-R*s(n, i), (K-montante)/q**n],
        'ans/(1+i)**n+sum([R*(1+g)**t/(1+i)**(t+1) for t in range(n)])-K/(1+i)**n',
        K=K, R=R, i=i, g=g, n=n)


def ammortamenti(k):
    C, i, n = 12000+850*k, .036+.006*k, 5+k
    q = 1+i
    R = C/a(n, i)
    D1, D2 = C*q-R, C*q**2-R*(1+q)
    rata = 600+100*k
    yield calcolo(
        f'Un piano francese prevede {n} rate annue posticipate da {rata} euro al {numero(100*i)}%. Calcolare il capitale erogato.',
        r'C=Ra_{\overline n|i}', 'Il capitale iniziale uguaglia il valore attuale delle rate.',
        'euro', [rata*a(n, i), rata*n, rata*s(n, i), rata*q*a(n, i)],
        'ans-sum([rata/(1+i)**t for t in range(1,n+1)])', rata=rata, i=i, n=n)
    yield calcolo(
        f'Un debito di {C} euro viene rimborsato con {n} rate annue francesi al {numero(100*i)}%. Calcolare la quota interessi della seconda rata.',
        r'I_2=i\big(C(1+i)-R\big),\qquad R=\frac{C}{a_{\overline n|i}}',
        'La seconda rata matura interessi sul debito rimasto dopo la prima rata.',
        'euro', [i*D1, i*C, i*(C-R), i*D2],
        'ans-i*sum([(C/sum([(1+i)**-h for h in range(1,n+1)]))/(1+i)**t for t in range(1,n)])',
        C=C, i=i, n=n)
    it = i*C*(n+1)/2
    yield calcolo(
        f'In un piano italiano da {C} euro con {n} rate annue al {numero(100*i)}%, calcolare gli interessi totali.',
        r'I_{\rm tot}=iC\frac{n+1}{2}',
        'I debiti iniziali dei periodi formano una progressione da C a C diviso n. La loro somma, moltiplicata per il tasso, dà gli interessi.',
        'euro', [it, i*C*n, i*C*(n-1)/2, n*R-C],
        'ans-i*sum([C*(1-t/n) for t in range(n)])', C=C, i=i, n=n)
    yield calcolo(
        f'Per un prestito francese di {C} euro con {n} rate annue al {numero(100*i)}%, quanto è dovuto subito prima della seconda rata, inclusa la rata in scadenza?',
        r'D_{2^-}=C(1+i)^2-R(1+i)',
        'Il saldo dopo la prima rata matura ancora un anno di interessi. La seconda rata non è ancora stata pagata.',
        'euro', [D1*q, D1, D2, C*q**2],
        'ans-(C/sum([(1+i)**-t for t in range(1,n+1)]))*sum([(1+i)**-t for t in range(n-1)])',
        C=C, i=i, n=n)
    j = .024+.003*k
    esborso = C*i+C/s(n, j)
    yield calcolo(
        f'Un piano americano da {C} euro prevede soli interessi annui al {numero(100*i)}% e restituzione del capitale al tempo {n}. Il fondo rende il {numero(100*j)}% e riceve versamenti annui posticipati. Calcolare gli esborsi annuali complessivi sommati sui {n} anni, senza includere il capitale già formato dal fondo.',
        r'E_{\rm tot}=n\left(iC+\frac{C}{s_{\overline n|j}}\right)',
        'Ogni anno si pagano gli interessi sul capitale intero e si versa la quota del fondo. Il rimborso finale è già coperto dai versamenti del fondo.',
        'euro', [n*esborso, n*i*C+C, n*(i*C+C/s(n, i)), esborso],
        '(ans/n-C*i)*sum([(1+j)**t for t in range(n)])-C', C=C, i=i, j=j, n=n)
    yield calcolo(
        f'Un prestito francese di {C} euro ha {n} rate annue al {numero(100*i)}%. Dopo la seconda rata il tasso diventa {numero(100*j)}%. Calcolare la nuova rata, a scadenza finale invariata.',
        r'R_{\rm nuova}=\frac{D_2}{a_{\overline{n-2}|j}}',
        'Il debito residuo si ottiene con le prime due rate contrattuali. Il nuovo tasso si applica alle sole rate rimaste.',
        'euro', [D2/a(n-2, j), D2/a(n, j), R, D1/a(n-2, j)],
        'ans*sum([(1+j)**-t for t in range(1,n-1)])-(C/sum([(1+i)**-t for t in range(1,n+1)]))*sum([(1+i)**-t for t in range(1,n-1)])',
        C=C, i=i, j=j, n=n)
    U = 700+85*k
    V = 4500+320*k
    yield calcolo(
        f'Alla stessa data e allo stesso tasso, le rate residue di un prestito valgono {V} euro e le sole quote interessi valgono {U} euro. Calcolare la nuda proprietà.',
        r'N=V-U', 'Le rate si dividono in quote capitale e quote interessi. Il valore delle quote capitale è il residuo dopo aver sottratto l’usufrutto.',
        'euro', [V-U, V+U, U, V], 'ans+U-V', V=V, U=U)
    F = 50+10*k
    yield calcolo(
        f'Subito dopo la seconda rata di un piano francese di {C} euro con {n} rate annue al {numero(100*i)}%, si può estinguere al valore di mercato delle rate rimaste, più {F} euro di spese. Il tasso di mercato è {numero(100*j)}%. Calcolare l’esborso.',
        r'E=Ra_{\overline{n-2}|j}+F',
        'Le rate restano quelle del contratto. Il nuovo tasso serve a valutare le scadenze residue, dopo di che si aggiungono le spese.',
        'euro', [R*a(n-2, j)+F, D2+F, R*a(n-2, j), R*a(n-1, j)+F],
        '(ans-F)*sum([(1+i)**-t for t in range(1,n+1)])-C*sum([(1+j)**-t for t in range(1,n-1)])',
        C=C, i=i, j=j, n=n, F=F)


def investimenti(k):
    C, A, B, i, n = 5500+550*k, 1200+100*k, 4300+470*k, .05+.006*k, 3+k
    q = 1+i
    yield calcolo(
        f'Un progetto costa {C} euro oggi. Produce {A} euro al tempo 1, richiede {2*A} euro di manutenzione al tempo 2 e incassa {B} euro al tempo {n}. Calcolare il VAN al {numero(100*i)}%.',
        r'V=-C+Aq^{-1}-2Aq^{-2}+Bq^{-n},\qquad q=1+i',
        'La manutenzione è un esborso. Ogni flusso entra nel VAN con il proprio segno e il fattore della propria data.',
        'euro', [-C+A/q-2*A/q**2+B/q**n, -C+A/q+B/q**n, -C+A/q+2*A/q**2+B/q**n, -C-A+B/q**n],
        'ans+C-A/(1+i)+2*A/(1+i)**2-B/(1+i)**n', C=C, A=A, B=B, i=i, n=n)
    F = 110+30*k
    yield calcolo(
        f'Un investimento costa {C} euro oggi più {F} euro di commissione iniziale. Tra un anno viene liquidato per {C+A} euro. Calcolare il TIR annuo effettivo.',
        r'i^\ast=\frac{C+A}{C+F}-1',
        'La commissione aumenta il capitale inizialmente impegnato. Il TIR confronta l’incasso con l’intero esborso.',
        'percento', [100*(A-F)/(C+F), 100*A/C, 100*(A-F)/C, 100*A/(C+F)],
        '(C+F)*(1+ans/100)-C-A', C=C, A=A, F=F)
    yield calcolo(
        f'Rispetto al progetto A, il progetto B richiede {C} euro in più oggi e paga {C+A} euro in più al tempo {n}. Calcolare il tasso annuo di indifferenza.',
        r'i^\ast=\left(\frac{C+A}{C}\right)^{\frac1n}-1',
        'Si annulla il VAN dei flussi incrementali. Alla radice i valori attuali dei due progetti coincidono.',
        'percento', [100*((1+A/C)**(1/n)-1), 100*A/C, 100*A/(C*n), 100*A/((C+A)*n)],
        'C*(1+ans/100)**n-C-A', C=C, A=A, n=n)
    yield calcolo(
        f'Un impianto costa {C} euro oggi e rende {A} euro al tempo 1. Serve un incasso di rivendita al tempo {n} per ottenere VAN nullo al {numero(100*i)}%. Calcolare l’incasso.',
        r'X=(C-Aq^{-1})q^n,\qquad q=1+i',
        'Il primo incasso copre una parte dell’esborso iniziale. La vendita deve coprire il valore residuo alla propria scadenza.',
        'euro', [(C-A/q)*q**n, (C-A)*q**n, C*q**n-A, C-A/q],
        'A/(1+i)+ans/(1+i)**n-C', C=C, A=A, i=i, n=n)
    yield calcolo(
        f'Un progetto costa {C} euro oggi, incassa {A} euro al tempo 1 e {B} al tempo {n}. Calcolare il valore netto al tempo {n}, usando il {numero(100*i)}% sia per costo sia per reinvestimento.',
        r'V_n=B+Aq^{n-1}-Cq^n,\qquad q=1+i',
        'Alla data finale l’incasso intermedio e l’investimento iniziale si riportano con durate diverse.',
        'euro', [B+A*q**(n-1)-C*q**n, B+A-C, B+A/q-C*q**n, B+A*q**n-C*q**n],
        'ans/(1+i)**n-B/(1+i)**n-A/(1+i)+C', C=C, A=A, B=B, i=i, n=n)
    yield calcolo(
        f'Un finanziamento eroga {C} euro ma trattiene subito {F} euro di spese. Tra un anno si rimborsano {C+A} euro. Calcolare il costo annuo effettivo.',
        r'i=\frac{C+A}{C-F}-1',
        'Il debitore dispone dell’erogazione al netto delle spese iniziali. Il rimborso si rapporta a quel capitale netto.',
        'percento', [100*(A+F)/(C-F), 100*A/C, 100*(A+F)/C, 100*A/(C-F)],
        '(C-F)*(1+ans/100)-C-A', C=C, A=A, F=F)
    first, second = .08+.01*k, .24+.02*k
    u, v = 1+first, 1+second
    yield calcolo(
        f'I flussi di un progetto ai tempi 0, 1 e 2 sono rispettivamente −1000, {numero(1000*(u+v))} e −{numero(1000*u*v)} euro. Il TIR minore è {numero(100*first)}%. Calcolare l’altro TIR.',
        r'0=-1000q^2+X_1q+X_2,\qquad q=1+i',
        'Moltiplicando il VAN per il quadrato del fattore annuo si ottiene un polinomio di secondo grado. La somma delle due radici in q è il rapporto fra l’incasso al tempo uno e 1000.',
        'percento', [100*second, 100*(second-first), 100*(second+first), 100*second/u],
        '(1+ans/100)**2-(u+v)*(1+ans/100)+u*v if abs(1+ans/100-u)>1e-9 else 1', u=u, v=v)
    rata = 1800+150*k
    vals = [rata/q**t for t in range(1, 7)]
    stop = next(t for t in range(1, 7) if sum(vals[:t]) >= C)
    yield calcolo(
        f'Un progetto costa {C} euro oggi e incassa {rata} euro a fine anno per sei anni. Al {numero(100*i)}%, dopo quanti anni interi la somma attualizzata degli incassi raggiunge per la prima volta il costo?',
        r'R\sum_{t=1}^{h}(1+i)^{-t}\ge C',
        'Si cumulano gli incassi attualizzati. Il recupero avviene alla prima scadenza in cui la somma uguaglia o supera il costo.',
        'anni', [stop, stop-1, stop+1, stop-2],
        '0 if ans==int(ans) and sum([R/(1+i)**t for t in range(1,int(ans)+1)])>=C>sum([R/(1+i)**t for t in range(1,int(ans))]) else 1',
        R=rata, C=C, i=i)


def obbligazioni(k):
    F, i, n, c = 1000+100*k, .045+.005*k, 4+k, .035+.004*k
    q = 1+i
    C = F*c
    P = F/q**n+C*a(n, i)
    yield calcolo(
        f'Un titolo rimborsa {F} euro fra {n} anni e paga cedole annue del {numero(100*c)}% del nominale. Al rendimento del {numero(100*i)}%, calcolare il prezzo in percentuale del nominale.',
        r'\frac{100P}{F}=100\big(c\,a_{\overline n|i}+q^{-n}\big),\qquad q=1+i',
        'Si attualizzano le cedole e il rimborso. Il corso percentuale è il prezzo diviso per il nominale, moltiplicato per cento.',
        'percento', [100*P/F, 100/q**n, 100*c*a(n, i), 100*(1+n*c)/q**n],
        'ans/100-(1+i)**-n-c*sum([(1+i)**-t for t in range(1,n+1)])', i=i, c=c, n=n)
    clean = .947-.003*k
    mesi = (3, 4, 5, 7, 8, 9)[k]
    frac = mesi/12
    yield calcolo(
        f'Il corso secco di un titolo con nominale {F} euro è {numero(100*clean)}. La cedola annua è {numero(C)} euro e sono trascorsi {mesi} mesi dalla cedola precedente. Usare mesi su dodici per il rateo e calcolare il prezzo tel quel in euro.',
        r'P_{\rm tq}=P_{\rm secco}+C\theta',
        'Il corso secco è espresso per cento di nominale. Il rateo aggiunto è la quota della cedola già maturata.',
        'euro', [F*clean+C*frac, F*clean, F*clean+C*(1-frac), F*clean+C],
        'ans-F*clean-C*frac', F=F, clean=clean, C=C, frac=frac)
    target = .05+.006*k
    sale = 970+130*k
    yield calcolo(
        f'Un titolo verrà venduto tra un anno per {sale} euro subito dopo aver incassato una cedola di {numero(C)} euro. Quale prezzo massimo di acquisto oggi permette un rendimento annuo almeno del {numero(100*target)}%?',
        r'P_{\max}=\frac{P_1+C}{1+i}',
        'L’acquirente riceve sia la cedola sia il ricavo di vendita. Il prezzo di soglia è il valore attuale di entrambi.',
        'euro', [(sale+C)/(1+target), sale/(1+target), sale+C, sale/(1+target)+C],
        'ans*(1+target)-sale-C', sale=sale, C=C, target=target)
    price = round(F*q**-n, 2)
    yield calcolo(
        f'Uno zero coupon costa {numero(price)} euro, rimborsa {F} euro e rende il {numero(100*i)}% annuo effettivo. Calcolare la scadenza in anni.',
        r'n=\frac{\log\left(\frac{F}{P}\right)}{\log(1+i)}',
        'Il fattore complessivo di montante è il rapporto fra rimborso e prezzo. I logaritmi isolano la scadenza.',
        'anni', [log(F/price)/log(q), (F/price-1)/i, log(F/price)/i, log(F/price)/log(1+2*i)],
        'price*(1+i)**ans-F', price=price, i=i, F=F)
    yield calcolo(
        f'Un titolo da {F} euro paga una cedola annua del {numero(100*c)}% e viene acquistato a {numero(F*clean)} euro. Calcolare il rendimento corrente, cioè cedola annua divisa per il prezzo.',
        r'y_{\rm corr}=\frac{C}{P}',
        'Il rendimento corrente considera l’incasso cedolare annuale rispetto al capitale pagato.',
        'percento', [100*c/clean, 100*c, 100*c*clean, 100*(c+1-clean)/clean],
        'ans*clean/100-c', c=c, clean=clean)
    j = q**.5-1
    premium = .022+.004*k
    coupon = 2*F*(premium+1-q**-n)/a(2*n, j)
    yield calcolo(
        f'Un titolo con nominale {F} euro, durata {n} anni e cedole semestrali è quotato a {numero(100*(1+premium))}. Il rendimento annuo effettivo è {numero(100*i)}%. Calcolare la cedola annua nominale in euro, pari a due cedole semestrali.',
        r'2C_s=2\frac{P-F(1+i)^{-n}}{a_{\overline{2n}|j}},\qquad j=(1+i)^{\frac12}-1',
        'Il prezzo meno il rimborso attualizzato è il valore delle cedole. Le scadenze delle cedole sono semestrali.',
        'euro', [coupon, coupon/2, 2*F*premium/a(2*n, j), 2*F*(premium+1-q**-n)/a(n, i)],
        'ans/2*sum([(1+i)**(-t/2) for t in range(1,2*n+1)])+F/(1+i)**n-F*(1+premium)', F=F, i=i, n=n, premium=premium)
    p1, p2, h1, h2 = 1500+160*k, 2500+120*k, .025+.005*k, .072+.002*k
    yield calcolo(
        f'Un portafoglio investe {p1} euro nel titolo A e {p2} nel titolo B. I rendimenti effettivi dello stesso periodo, cedole comprese, sono {numero(100*h1)}% e {numero(100*h2)}%. Calcolare il rendimento del portafoglio.',
        r'h_P=\frac{P_Ah_A+P_Bh_B}{P_A+P_B}',
        'Il guadagno totale è la somma dei guadagni dei due investimenti. Va diviso per il capitale totale iniziale.',
        'percento', [100*(p1*h1+p2*h2)/(p1+p2), 50*(h1+h2), 100*(p1*h2+p2*h1)/(p1+p2), 100*(h1+h2)],
        'ans*(p1+p2)/100-p1*h1-p2*h2', p1=p1, p2=p2, h1=h1, h2=h2)
    diff = F-P
    yield calcolo(
        f'Un titolo con nominale {F} euro, cedola annua del {numero(100*c)}% e scadenza fra {n} anni rende il {numero(100*i)}% annuo effettivo. Di quanti euro il prezzo è inferiore al nominale?',
        r'F-P=F(i-c)a_{\overline n|i}',
        'Un titolo alla pari avrebbe cedola pari al tasso di rendimento per il nominale. Il prezzo si riduce del valore attuale della differenza cedolare.',
        'euro', [diff, F*(i-c)*n, F-F/q**n, F*(i-c)*q**-n],
        'ans-F+F/(1+i)**n+F*c*sum([(1+i)**-t for t in range(1,n+1)])', F=F, i=i, c=c, n=n)


def struttura(k):
    d1, d2, d4 = .965-.004*k, .92-.006*k, .81-.008*k
    N, c = 1000+120*k, 35+5*k
    yield calcolo(
        f'I fattori di sconto a due e quattro anni sono {numero(d2)} e {numero(d4)}. Calcolare il tasso effettivo annuo a termine per il biennio compreso fra i tempi 2 e 4.',
        r'f_{2,4}=\left(\frac{D_2}{D_4}\right)^{\frac12}-1',
        'Il rapporto dei fattori di sconto dà il fattore di montante complessivo del biennio. La radice quadrata lo converte in un tasso annuo.',
        'percento', [100*((d2/d4)**.5-1), 100*(d2/d4-1), 100*(d2/d4-1)/2, 100*(1-(d4/d2)**.5)],
        'D4*(1+ans/100)**2-D2', D2=d2, D4=d4)
    i, fwd = .035+.005*k, .055+.006*k
    q3 = (1+i)*(1+fwd)**2
    yield calcolo(
        f'Il tasso a pronti a un anno è {numero(100*i)}% e il tasso annuo a termine dal tempo 1 al tempo 3 è {numero(100*fwd)}%. Calcolare il tasso a pronti annuo a tre anni.',
        r'(1+i_3)^3=(1+i_1)(1+f_{1,3})^2',
        'Il montante a tre anni è il prodotto del fattore del primo anno e del fattore a termine per i due successivi.',
        'percento', [100*(q3**(1/3)-1), 100*(i+2*fwd)/3, 50*(i+fwd), 100*(q3-1)],
        '(1+ans/100)**3-(1+i)*(1+fwd)**2', i=i, fwd=fwd)
    coupon = .042+.004*k
    yield calcolo(
        f'Un titolo con due cedole annue del {numero(100*coupon)}% del nominale è quotato alla pari. Il fattore di sconto a un anno è {numero(d1)}. Determinare quello a due anni.',
        r'D_2=\frac{1-cD_1}{1+c}',
        'Alla seconda scadenza si pagano rimborso e cedola. Si sottrae dal prezzo il valore della prima cedola e si divide per il flusso finale.',
        'numero', [(1-coupon*d1)/(1+coupon), (1-coupon)/(1+coupon), 1/(1+coupon)**2, 1-coupon*d1],
        '(1+coupon)*ans+coupon*d1-1', coupon=coupon, d1=d1)
    yield calcolo(
        f'Si vuole fissare oggi il prezzo da pagare al tempo 2 per ricevere {N} euro al tempo 4. I fattori di sconto a due e quattro anni sono {numero(d2)} e {numero(d4)}. Calcolare il prezzo a termine privo di arbitraggio.',
        r'K D_2=ND_4',
        'Le due gambe dell’accordo devono avere oggi lo stesso valore. In questo modo il contratto parte con valore nullo.',
        'euro', [N*d4/d2, N*d4, N*d2/d4, N*d2*d4],
        'ans*d2-N*d4', N=N, d2=d2, d4=d4)
    theo = c*d1+c*d2+(N+c)*d4
    market = round(theo-5-k, 2)
    yield calcolo(
        f'Un titolo paga {c} euro ai tempi 1 e 2 e {N+c} euro al tempo 4. Gli ZCB hanno fattori {numero(d1)}, {numero(d2)} e {numero(d4)} a quelle scadenze. Il titolo costa {numero(market)} euro. Calcolare l’incasso iniziale dall’acquisto del titolo e dalla vendita del portafoglio replicante, senza costi.',
        r'G=cD_1+cD_2+(N+c)D_4-P_{\rm mercato}',
        'I flussi futuri del titolo e della replica venduta si compensano. Resta l’incasso di vendita della replica meno il prezzo del titolo.',
        'euro', [theo-market, market-theo, theo, c*(d1+d2)],
        'ans+market-c*(d1+d2)-(N+c)*d4', c=c, d1=d1, d2=d2, d4=d4, N=N, market=market)
    d3 = .87-.008*k
    price = round(c*(d1+d2)+(N+c)*d3, 2)
    yield calcolo(
        f'Un’obbligazione a tre anni con nominale {N} euro e cedole annue da {c} euro costa {numero(price)} euro. I fattori di sconto a un anno e a due anni sono {numero(d1)} e {numero(d2)}. Calcolare il fattore a tre anni.',
        r'D_3=\frac{P-c(D_1+D_2)}{N+c}',
        'I valori delle prime due cedole sono già noti. Il valore residuo del titolo si divide per rimborso e ultima cedola.',
        'numero', [(price-c*(d1+d2))/(N+c), (price-c*(d1+d2))/N, price/(N+c), (price-c*d1)/(N+c)],
        'ans*(N+c)+c*(d1+d2)-price', N=N, c=c, d1=d1, d2=d2, price=price)
    yield calcolo(
        f'I fattori di sconto a due e quattro anni sono {numero(d2)} e {numero(d4)}. Calcolare in percentuale la forza annua costante a termine per il periodo tra le due scadenze.',
        r'\delta_{2,4}=\frac{\log(D_2/D_4)}{2}',
        'Il logaritmo del rapporto dei fattori è la forza accumulata nei due anni. Si divide per la durata.',
        'percento', [50*log(d2/d4), 100*log(d2/d4), 50*(d2/d4-1), 100*((d2/d4)**.5-1)],
        'd4*exp(2*ans/100)-d2', d2=d2, d4=d4)
    v = c*d1+(N+c)*d2
    yield calcolo(
        f'Un titolo paga {c} euro al tempo 1 e {N+c} euro al tempo 2. I fattori di sconto sono {numero(d1)} e {numero(d2)}. Calcolare la quota percentuale del prezzo attribuibile al primo flusso.',
        r'w_1=\frac{cD_1}{cD_1+(N+c)D_2}',
        'La quota è il rapporto fra il valore attuale della prima cedola e il valore attuale complessivo.',
        'percento', [100*c*d1/v, 100*c/(N+2*c), 100*c*d2/v, 100*c/v],
        'ans*(c*d1+(N+c)*d2)/100-c*d1', c=c, d1=d1, d2=d2, N=N)


def duration(k):
    P, D, C = 900+105*k, 3.2+.3*k, 15+3*k
    h = (.002+.0005*k)
    loss = P*D*h
    yield calcolo(
        f'Un’obbligazione vale {P} euro e ha duration modificata {numero(D)}. Stimare di quanti euro diminuisce il prezzo al primo ordine per un aumento del rendimento di {numero(h*10000)} punti base.',
        r'|\Delta P|\simeq PD_{\rm mod}\Delta y',
        'Un punto base è un decimillesimo. La sensibilità percentuale si moltiplica per il prezzo per ottenere la variazione in euro.',
        'euro', [loss, D*h, P*D*h*100, P*h],
        'ans-P*D*h', P=P, D=D, h=h)
    T1, T2 = 2, 7
    target = 3.4+.4*k
    w = (target-T1)/(T2-T1)
    yield calcolo(
        f'A un rendimento comune, due titoli hanno duration modificata {T1} e {T2}. Il portafoglio vale {P} euro e deve avere duration modificata {numero(target)}. Quanto valore va assegnato al titolo lungo?',
        r'X_2=P\frac{D_P-D_1}{D_2-D_1}',
        'La duration del portafoglio è la media ponderata con i valori di mercato. Si risolve l’equazione rispetto al valore del titolo lungo.',
        'euro', [P*w, P*(1-w), P*target/T2, P*(target-T1)/T2],
        '((P-ans)*T1+ans*T2)/P-target', P=P, T1=T1, T2=T2, target=target)
    i = .04+.006*k
    slope = round(P*D, 2)
    yield calcolo(
        f'Un titolo costa {P} euro. Al rendimento annuo effettivo del {numero(100*i)}%, la derivata del prezzo rispetto al rendimento decimale vale −{numero(slope)} euro. Calcolare la duration di Macaulay.',
        r'D_M=-(1+y)\frac{P^\prime(y)}{P}',
        'La derivata cambiata di segno e divisa per il prezzo dà la duration modificata. Il fattore di montante la converte in duration di Macaulay.',
        'anni', [slope/P*(1+i), slope/P, slope/P/(1+i), slope*(1+i)],
        'ans*P/(1+i)-slope', P=P, i=i, slope=slope)
    h2 = .02+.002*k
    down = round(P*(1+D*h2+.5*C*h2*h2), 2)
    up = round(P*(1-D*h2+.5*C*h2*h2), 2)
    yield calcolo(
        f'Un titolo vale {P} euro. Per una diminuzione del rendimento di {numero(100*h2)} punti percentuali vale {numero(down)} euro, e per un aumento uguale vale {numero(up)} euro. Stimare la convexity con la differenza seconda centrata, normalizzata per il prezzo.',
        r'C\simeq\frac{P(y-h)+P(y+h)-2P(y)}{P(y)h^2}',
        'La somma delle due variazioni elimina il termine lineare. Il residuo si divide per il prezzo e per il quadrato dello spostamento.',
        'numero', [(down+up-2*P)/(P*h2*h2), (down+up-2*P)/(2*P*h2*h2), (down-up)/(2*P*h2), (down+up-2*P)/(P*h2)],
        'ans*P*h2*h2-down-up+2*P', P=P, h2=h2, down=down, up=up)
    yield calcolo(
        f'Un titolo da {P} euro ha duration modificata {numero(D)} e convexity {C}. Se il rendimento sale di {numero(100*h2)} punti percentuali, di quanti euro la stima di secondo ordine supera quella lineare?',
        r'P_{\rm quad}-P_{\rm lin}=\tfrac12PC(\Delta y)^2',
        'Le due stime condividono il termine lineare. La differenza è il solo contributo di secondo ordine.',
        'euro', [.5*P*C*h2*h2, P*C*h2*h2, .5*P*D*h2*h2, .5*P*C*h2],
        '2*ans-P*C*h2*h2', P=P, C=C, h2=h2)
    T = 4+k
    yield calcolo(
        f'Uno zero coupon scade fra {T} anni e rende il {numero(100*i)}% annuo effettivo. Calcolare la convexity rispetto al rendimento annuo effettivo.',
        r'C=\frac{T(T+1)}{(1+y)^2}',
        'La seconda derivata del prezzo di uno zero coupon introduce il prodotto T per T più uno. Si divide poi per il prezzo.',
        'numero', [T*(T+1)/(1+i)**2, T*T/(1+i)**2, T*(T+1)/(1+i), T*(T+1)],
        'ans*(1+i)**2-T*(T+1)', T=T, i=i)
    change = round(.011*P+3*k, 2)
    yield calcolo(
        f'Un titolo vale {P} euro e ha duration modificata {numero(D)}. Il prezzo perde {numero(change)} euro. Stimare l’aumento del rendimento in punti base con l’approssimazione lineare.',
        r'\Delta y_{\rm pb}\simeq 10^4\frac{|\Delta P|}{PD_{\rm mod}}',
        'Si ricava il rendimento decimale dall’equazione di sensibilità. Poi si converte il valore in punti base.',
        'numero', [10000*change/(P*D), 100*change/(P*D), 10000*change/P, 10000*change*D/P],
        'ans*P*D/10000-change', P=P, D=D, change=change)
    yield calcolo(
        f'Un portafoglio vale {P} euro e ha duration modificata {numero(D)}. Si aggiunge, con nuovo capitale, uno zero coupon da {T} anni che rende il {numero(100*i)}%. Si acquistano {P//2} euro di valore di mercato del titolo. Calcolare la nuova duration modificata, rispetto a uno spostamento parallelo dei rendimenti.',
        r'D_{\rm nuova}=\frac{PD+X\,T/(1+y)}{P+X}',
        'Si calcola la duration modificata del nuovo titolo, poi si fa la media ponderata sul valore totale dopo l’acquisto.',
        'numero', [(P*D+(P//2)*T/(1+i))/(P+P//2), (D+T/(1+i))/2, (P*D+(P//2)*T)/(P+P//2), D+T/(1+i)],
        'ans*(P+X)-P*D-X*T/(1+i)', P=P, X=P//2, D=D, T=T, i=i)


def immunizzazione(k):
    L, H, T1, T2, delta = 8400+650*k, 3+k%3, 1, 8+k%2, .032+.004*k
    L0 = L*exp(-delta*H)
    w = (H-T1)/(T2-T1)
    yield calcolo(
        rf'Una passività di {L} euro scade al tempo {H}. Con forza piatta $\delta={f(delta)}$, due zero coupon alle date {T1} e {T2} devono eguagliarne valore attuale e duration. Calcolare il nominale da acquistare del titolo lungo.',
        r'N_2=L e^{-\delta H}\frac{H-T_1}{T_2-T_1}e^{\delta T_2}',
        'Il peso di duration dà il valore attuale investito nel titolo lungo. Il suo nominale è il montante di quel valore fino alla propria scadenza.',
        'euro', [L0*w*exp(delta*T2), L0*w, L*w, L0*(1-w)*exp(delta*T1)],
        'ans*exp(-delta*T2)*(T2-T1)-L*exp(-delta*H)*(H-T1)', L=L, H=H, T1=T1, T2=T2, delta=delta)
    u = .27+.05*k
    yield calcolo(
        f'Un portafoglio detiene il {numero(100*u)}% del valore di mercato in uno zero coupon a {T2} anni e il resto in uno zero coupon a {T1} anno. A quale scadenza deve essere il passivo unico per avere la stessa duration rispetto alla forza piatta?',
        r'H=(1-w)T_1+wT_2',
        'La duration del passivo unico coincide con la sua scadenza. Quella del portafoglio è la media delle scadenze pesata con i valori di mercato.',
        'anni', [(1-u)*T1+u*T2, (1-u)*T2+u*T1, (T1+T2)/2, u*T2],
        'ans-(1-u)*T1-u*T2', u=u, T1=T1, T2=T2)
    Va, Da, Dnew = 5000+500*k, 2+.1*k, 7+.2*k
    target = 4+.1*k
    X = Va*(target-Da)/(Dnew-target)
    yield calcolo(
        f'Un portafoglio di {Va} euro ha duration {numero(Da)}. Si aggiunge un titolo di duration {numero(Dnew)} per raggiungere {numero(target)} anni. Quanto capitale nuovo occorre, assumendo una sensibilità alla stessa forza?',
        r'X=\frac{V_A(D_\star-D_A)}{D_{\rm nuovo}-D_\star}',
        'Il valore totale aumenta con l’acquisto. L’equazione di duration deve pesare il titolo nuovo e gli attivi esistenti sul nuovo totale.',
        'euro', [X, Va*(target-Da)/Dnew, Va*(target-Da)/(Dnew-Da), Va*(Dnew-target)/(target-Da)],
        'Va*Da+ans*Dnew-(Va+ans)*target', Va=Va, Da=Da, Dnew=Dnew, target=target)
    gap = 1.2+.15*k
    V = 9100+830*k
    dy = .004+.001*k
    yield calcolo(
        rf'Attivi e passivi valgono entrambi {V} euro. La duration degli attivi supera di {numero(gap)} anni quella dei passivi. Stimare al primo ordine il surplus dopo un aumento parallelo della forza di $\Delta\delta={f(dy)}$.',
        r'\Delta S\simeq-V(D_A-D_L)\Delta\delta',
        'A parità di valore iniziale, la differenza fra le derivate dipende dal divario di duration. Gli attivi a duration maggiore perdono più valore.',
        'euro', [-V*gap*dy, V*gap*dy, -V*dy, -V*gap*dy/2],
        'ans+V*gap*dy', V=V, gap=gap, dy=dy)
    X2 = 3700+240*k
    yield calcolo(
        rf'Il tratto lungo della curva cambia e aumenta di $\Delta\delta={f(dy)}$ la sola forza a pronti relativa alla scadenza {T2}. Uno zero coupon a tale data valeva {X2} euro prima dello shock. Calcolare la perdita esatta di valore.',
        r'|\Delta P|=P_0(1-e^{-T_2\Delta\delta})',
        'Il nominale resta fisso. Il prezzo iniziale viene moltiplicato per il fattore di sconto aggiuntivo dovuto al cambiamento della forza.',
        'euro', [X2*(1-exp(-T2*dy)), X2*T2*dy, X2*(exp(T2*dy)-1), X2*(1-exp(-dy))],
        'ans+X2*exp(-T2*dy)-X2', X2=X2, T2=T2, dy=dy)
    cost = 50+8*k
    XA = V+cost
    yield calcolo(
        f'Prima di uno spostamento parallelo della curva gli attivi valgono {XA} euro e i passivi {V} euro. Le duration sono entrambe di {H} anni. Per un aumento della forza pari a {numero(dy)}, stimare il surplus al primo ordine.',
        r'S_{\rm nuovo}\simeq(V_A-V_L)(1-H\Delta\delta)',
        'Le duration uguali implicano la stessa variazione percentuale al primo ordine. Il surplus iniziale si moltiplica per quel fattore.',
        'euro', [cost*(1-H*dy), cost, cost*(1+H*dy), cost-XA*H*dy],
        'ans-(XA-V)+H*dy*(XA-V)', XA=XA, V=V, H=H, dy=dy)
    L1, L2 = 2700+110*k, 5800+160*k
    W1, W2 = L1*exp(-delta*T1), L2*exp(-delta*T2)
    yield calcolo(
        rf'Due passività di {L1} e {L2} euro scadono ai tempi {T1} e {T2}. Con forza piatta $\delta={f(delta)}$, calcolare la duration del passivo complessivo.',
        r'D_L=\frac{T_1L_1e^{-\delta T_1}+T_2L_2e^{-\delta T_2}}{L_1e^{-\delta T_1}+L_2e^{-\delta T_2}}',
        'Le scadenze si pesano con il valore attuale di ciascuna passività. Il peso nominale darebbe una duration diversa.',
        'anni', [(T1*W1+T2*W2)/(W1+W2), (T1*L1+T2*L2)/(L1+L2), (T1+T2)/2, (T1*W2+T2*W1)/(W1+W2)],
        'ans*(L1*exp(-delta*T1)+L2*exp(-delta*T2))-T1*L1*exp(-delta*T1)-T2*L2*exp(-delta*T2)',
        L1=L1, L2=L2, delta=delta, T1=T1, T2=T2)
    yield calcolo(
        rf'Due passività di {L1} e {L2} euro scadono ai tempi {T1} e {T2}. Si acquistano due zero coupon che coprono esattamente i flussi dovuti alle rispettive date. Calcolare il costo oggi con forza piatta $\delta={f(delta)}$.',
        r'V=N_1e^{-\delta T_1}+N_2e^{-\delta T_2}',
        'Il capitale nominale di ciascun titolo è il flusso dovuto alla sua scadenza. Il costo è la somma dei due prezzi attualizzati.',
        'euro', [W1+W2, L1+L2, (L1+L2)*exp(-delta*T2), (L1+L2)*exp(-delta*T1)],
        'ans-N1*exp(-delta*T1)-N2*exp(-delta*T2)', N1=L1, N2=L2, delta=delta, T1=T1, T2=T2)


CALCOLI = {
    'regimi-e-tassi': regimi,
    'equivalenza-finanziaria': equivalenza,
    'rendite-costanti': rendite,
    'rendite-variabili': variabili,
    'ammortamenti': ammortamenti,
    'valutazione-investimenti': investimenti,
    'obbligazioni': obbligazioni,
    'struttura-a-termine': struttura,
    'duration-convexity': duration,
    'immunizzazione': immunizzazione,
}


def domande_calcolo(slug):
    domande = [quesito for variante in range(6) for quesito in CALCOLI[slug](variante)]
    assert len(domande) == 48, slug
    return enumerate(domande, start=33)
