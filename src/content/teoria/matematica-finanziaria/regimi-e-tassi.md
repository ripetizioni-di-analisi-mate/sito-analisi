---
titolo: Regimi finanziari e tassi equivalenti
sommario: Come si calcolano capitale, montante e valore attuale e come si confrontano tassi riferiti a durate diverse.
---

## Capitale, interesse e durata

:::definizione{#semplice titolo="Capitalizzazione semplice"}
Un'operazione elementare scambia un capitale iniziale $C>0$ con una somma disponibile a una data successiva. Questa somma è il **montante** $M$. La differenza $I=M-C$ è l'interesse maturato. La durata $t\geq 0$ si misura nella stessa unità di tempo a cui si riferisce il tasso $i$. Se il tasso è annuo, un semestre vale $\dfrac{1}{2}$ anno.

Nel **regime semplice** l'interesse maturato in ogni unità di tempo è $Ci$. Poiché il capitale su cui si calcola l'interesse resta $C$ per tutta la durata, l'interesse totale cresce in proporzione a $t$. Di conseguenza
$$
I=Cit,\qquad M=C+I=C(1+it).
$$
La quantità $1+it$ è il fattore di montante. Con $C>0$ si assume $1+it>0$ affinché il montante sia positivo. La stessa formula permette di determinare un dato mancante, per esempio il capitale che produce un montante fissato.
:::

:::esempio{titolo="Durata in mesi e tasso annuo"}
Un deposito di $2000\,\mathrm{euro}$ è remunerato al $4\%$ annuo semplice per nove mesi. La durata in anni è $\dfrac{9}{12}=\dfrac{3}{4}$, quindi il tasso applicato al deposito è il $3\%$. Si ottiene
$$
I=2000\cdot 0{,}04\cdot\frac{3}{4}=60\,\mathrm{euro},
\qquad M=2060\,\mathrm{euro}.
$$
Ogni mese matura un dodicesimo dell'interesse annuo di $80\,\mathrm{euro}$. Il valore di $60\,\mathrm{euro}$ si ritrova anche sommando nove quote mensili.
:::

:::osservazione
Se la durata è espressa in giorni, la frazione d'anno dipende dalla convenzione del contratto. Nella convenzione Actual/365 Fixed si divide il numero di giorni effettivi per $365$. Nella convenzione Actual/360 si divide lo stesso numero di giorni per $360$. La convenzione 30/360 modifica anche il numeratore, perché per contare i giorni adotta regole fondate su mesi di trenta giorni. Perciò «base 360» identifica il denominatore e lascia da precisare come si contano i giorni.

Per $36$ giorni effettivi, la durata Actual/360 è $\dfrac{36}{360}=\dfrac{1}{10}$ di anno. Al $5\%$ annuo semplice il capitale di $8000\,\mathrm{euro}$ genera quindi $40\,\mathrm{euro}$ di interesse. In base Actual/365 Fixed, la durata sarebbe $\dfrac{36}{365}$ e l'interesse sarebbe inferiore, perché il denominatore è maggiore a parità di numeratore.
:::

:::esempio{titolo="Date uguali e convenzioni diverse"}
Un deposito di $6000\,\mathrm{euro}$ al $6\%$ annuo semplice va dal 1º ottobre al 1º febbraio. Tra le due date intercorrono $123$ giorni effettivi. Con Actual/360 la frazione d'anno è $\dfrac{123}{360}$. Con la convenzione 30/360, quattro mesi a partire dal primo giorno del mese contano $120$ giorni. Gli interessi risultano
$$
\begin{aligned}
I_{\mathrm{effettivi}}
&=6000\cdot0{,}06\cdot\frac{123}{360}
=123\,\mathrm{euro}\\[6pt]
I_{\mathrm{convenzionali}}
&=6000\cdot0{,}06\cdot\frac{120}{360}
=120\,\mathrm{euro}.
\end{aligned}
$$
Il denominatore è lo stesso nei due calcoli. La differenza di $3\,\mathrm{euro}$ dipende dai tre giorni in più del conteggio effettivo, che valgono un euro ciascuno.
:::

:::esempio{titolo="Tasso implicito e soglia di montante"}
Da $M-C=Cit$ si ricava $i=\dfrac{M-C}{Ct}$ per $t>0$. Se $2400\,\mathrm{euro}$ diventano $2460\,\mathrm{euro}$ in sei mesi, il rendimento sui sei mesi è $\dfrac{60}{2400}=2{,}5\%$. Il semestre vale mezzo anno, quindi il tasso annuo semplice è il $5\%$.

Se è fissato il tasso $i>0$, si può invece ricavare il tempo necessario per raggiungere un montante $M\geq C$. La durata è $t=\dfrac{M-C}{Ci}$. In questo calcolo $Ci$ è l'interesse maturato in un anno quando $i$ è annuo. Dividere l'interesse richiesto per l'interesse annuo dà direttamente la durata in anni.
:::

## Capitalizzazione composta

:::definizione{#composto titolo="Capitalizzazione composta"}
Nel **regime composto** il capitale al termine di un periodo comprende l'interesse appena maturato. Perciò nel periodo successivo il tasso si applica a una somma aggiornata. Indicato con $i>-1$ il tasso effettivo di un periodo, si chiama $q=1+i$ il fattore di montante del periodo.

Per $n$ periodi interi, il montante è $M=Cq^n$. La convenzione esponenziale usa la stessa legge per ogni durata reale $t\geq 0$. Il fattore di attualizzazione di un periodo è $v=q^{-1}$. Perciò il capitale che alla scadenza diventa $M$ è
$$
M=Cq^t,\qquad C=Mv^t .
$$
Queste due relazioni descrivono la stessa operazione vista alle due date. Per passare dalla data iniziale alla scadenza si moltiplica per $q^t$. Il percorso inverso usa il reciproco di quel fattore.
:::

:::esempio{titolo="Interessi su due periodi"}
Un deposito di $1000\,\mathrm{euro}$ rende il $10\%$ annuo composto. Al termine del primo anno il montante è $1100\,\mathrm{euro}$. Nel secondo anno l'interesse è il $10\%$ di $1100\,\mathrm{euro}$, quindi vale $110\,\mathrm{euro}$. Il montante finale è $1210\,\mathrm{euro}$. I $10\,\mathrm{euro}$ in più rispetto ai $200\,\mathrm{euro}$ di interesse semplice sono l'interesse maturato sui $100\,\mathrm{euro}$ del primo anno.
:::

:::osservazione
Il rapporto $\dfrac{M}{C}$ è il fattore osservato sull'intera durata. Se $t>0$, la radice di ordine $t$ restituisce il fattore di un periodo. Se il tasso è noto e diverso da zero, il logaritmo trasforma l'esponente incognito in un prodotto. Si ricava così
$$
i=\left(\frac{M}{C}\right)^{\frac{1}{t}}-1,
\qquad
t=\frac{\log\left(\frac{M}{C}\right)}{\log(1+i)}.
$$
Nel calcolo della durata il numeratore e il denominatore devono avere lo stesso segno per ottenere $t>0$. Con $-1<i<0$, il montante decresce, perciò il rapporto $\dfrac{M}{C}$ appartiene a $(0,1)$ per ogni durata positiva.
:::

:::esempio{titolo="Durata ricavata da una potenza"}
Un capitale di $2500\,\mathrm{euro}$ diventa $3025\,\mathrm{euro}$ al $10\%$ annuo composto. Il rapporto tra le somme è $1{,}21=1{,}1^2$. Poiché la funzione $t\mapsto 1{,}1^t$ è strettamente crescente, l'unica durata che produce quel rapporto è $2$ anni.
:::

:::osservazione
A parità di $i>0$, i fattori semplice e composto coincidono a $t=0$ e a $t=1$. Per $0<t<1$, la curva composta è strettamente convessa e si trova sotto il segmento che unisce i due punti comuni. Per $t>1$ la curva sale sopra il prolungamento della stessa retta. Il confronto dipende quindi dalla posizione della scadenza rispetto a un periodo.

::grafico{f="1+0.2*x;1.2^x" xmin=0 xmax=4.1 ymin=0 ymax=2.25 nomi="t,fattore" legenda="\text{Semplice};\text{Composto}" punti="0,1,pieno;1,1.2,pieno" etichette="2.85,1.91,Composto;3.15,1.55,Semplice" titolo="Fattori semplice e composto al 20% annuo"}
:::

:::esempio{titolo="Lo stesso tasso per periodi interi e frazionari"}
Un deposito rende il $21\%$ effettivo annuo e la convenzione è esponenziale. In sei mesi il fattore è $\sqrt{1{,}21}=1{,}1$, quindi $5000\,\mathrm{euro}$ diventano $5500\,\mathrm{euro}$. In un contratto che applica l'interesse semplice per le frazioni d'anno il fattore semestrale sarebbe invece $1+0{,}21\cdot\dfrac{1}{2}=1{,}105$. Il dato annuo fissa il montante a un anno. La convenzione sulla frazione d'anno stabilisce quale fattore impiegare per una scadenza interna all'anno.
:::

## Sconto commerciale

:::definizione{#sconto-commerciale titolo="Valore attuale commerciale"}
Un titolo promette un importo futuro $M>0$. Anticiparne l'incasso significa ricevere oggi un valore attuale $V$. La differenza $D=M-V$ è lo sconto. Nello **sconto commerciale**, a un tasso di sconto $d\geq 0$ per unità di tempo, lo sconto è proporzionale all'importo futuro e alla durata $t$:
$$
D=Mdt,\qquad V=M(1-dt).
$$
Si richiede $dt<1$ affinché $V$ sia positivo. Il coefficiente $1-dt$ è il fattore di attualizzazione commerciale per la durata $t$.
:::

:::esempio{titolo="Anticipo di un credito"}
Un credito di $5000\,\mathrm{euro}$ scade tra sei mesi ed è anticipato al $6\%$ annuo di sconto commerciale. Poiché $t=\dfrac{1}{2}$, il tasso di sconto per la durata effettiva è il $3\%$ del valore a scadenza. Si ricava
$$
D=5000\cdot0{,}06\cdot\frac{1}{2}=150\,\mathrm{euro},
\qquad V=4850\,\mathrm{euro}.
$$
Il rapporto $\dfrac{150}{5000}$ misura lo sconto relativo alla somma futura. Il rapporto $\dfrac{150}{4850}$ misura invece il costo dell'anticipo rispetto alla somma ricevuta. I due rapporti usano la stessa differenza in euro e basi di calcolo diverse.
:::

:::attenzione
A $d=25\%$ annuo e $t=4$ anni si ottiene $dt=1$, perciò $V=0$. Per durate maggiori si otterrebbe un valore attuale negativo a fronte di un importo futuro positivo. La restrizione $dt<1$ indica esattamente quali durate sono ammissibili per quel tasso.
:::

## Sconto razionale e confronto degli anticipi

:::definizione{#sconto-razionale titolo="Valore attuale razionale"}
Nello **sconto razionale** il valore attuale è il capitale che, impiegato a interesse semplice fino a scadenza, produce l'importo futuro $M>0$. Con tasso di interesse $i$ per unità di tempo, durata $t\geq 0$ e $1+it>0$, si risolve $M=V(1+it)$:
$$
V=\frac{M}{1+it},\qquad
D=M-V=\frac{Mit}{1+it}.
$$
Lo sconto si può anche scrivere $D=Vit$. La somma su cui si calcola l'interesse è quindi il valore attuale.
:::

:::esempio{titolo="Confronto a parità di tasso dichiarato"}
Per un credito di $1100\,\mathrm{euro}$ a un anno, il tasso razionale del $10\%$ dà un valore attuale di $1000\,\mathrm{euro}$. Lo sconto commerciale del $10\%$ dà un valore attuale di $990\,\mathrm{euro}$. Nel primo caso lo sconto è il $10\%$ di $1000\,\mathrm{euro}$ e nel secondo è il $10\%$ di $1100\,\mathrm{euro}$. Per questo il valore attuale razionale è maggiore.
:::

:::osservazione
Un tasso di sconto commerciale $d$ e un tasso di interesse semplice $i$ sono equivalenti per una durata $t>0$ se danno lo stesso valore attuale per un identico valore a scadenza. Si uguagliano i fattori di attualizzazione e si isola il tasso cercato:
$$
1-dt=\frac{1}{1+it},
\qquad
d=\frac{i}{1+it},
\qquad
i=\frac{d}{1-dt}.
$$
La presenza di $t$ nelle conversioni significa che l'equivalenza è legata alla durata. Per un credito semestrale al $10\%$ semplice, il tasso commerciale annuo equivalente è $\dfrac{0{,}10}{1{,}05}$, cioè circa $9{,}52\%$. Per un credito annuale allo stesso tasso semplice è invece $\dfrac{0{,}10}{1{,}10}$, cioè circa $9{,}09\%$.
:::

:::osservazione
L'equivalenza fra i due sconti si può leggere anche a partire dal valore dello sconto in euro. Se entrambi i contratti riconoscono lo stesso valore attuale, $D=M-V$ è lo stesso nei due casi. Per un periodo di durata $t>0$, si ha quindi $Mdt=Vit$, da cui $d=i\dfrac{V}{M}$. Con $i>0$ il valore attuale razionale è minore del valore futuro, quindi il tasso di sconto commerciale equivalente è più basso. La relazione spiega perché un'anticipazione può avere lo stesso costo in euro pur riportando un tasso dichiarato diverso.
:::

## Tassi effettivi equivalenti

::::teorema{#tassi-equivalenti titolo="Equivalenza dei tassi nel regime composto"}
Due tassi sono **equivalenti** se, applicati nei rispettivi periodi, producono lo stesso montante sullo stesso capitale alla medesima scadenza. Siano $i>-1$ il tasso effettivo annuo e $i_m>-1$ il tasso effettivo di un sottoperiodo, con $m\geq 1$ sottoperiodi uguali per anno. In capitalizzazione composta l'equivalenza vale se e solo se
$$
1+i=(1+i_m)^m .
$$
Il tasso infrannuale equivalente è quindi $i_m=(1+i)^{\dfrac{1}{m}}-1$. Questa conversione permette di usare il tasso mensile per un pagamento mensile e il tasso annuo per un pagamento annuale conservando la stessa legge finanziaria.

:::dimostrazione
Si esprime il montante dello stesso capitale a un anno in entrambe le unità. Il tasso annuo si applica una volta, perciò il montante è $C(1+i)$. Il tasso infrannuale si applica $m$ volte, perciò il montante è $C(1+i_m)^m$. Poiché $C>0$, l'uguaglianza dei montanti equivale all'uguaglianza dei fattori. I fattori sono positivi, quindi la radice positiva di ordine $m$ determina un solo valore di $i_m$. Elevando entrambi i fattori annuali allo stesso esponente si ottengono montanti identici a ogni durata ammessa dalla convenzione esponenziale.
:::
::::

:::esempio{titolo="Dal semestre all'anno"}
Un deposito remunera il $5\%$ effettivo a semestre. La durata annua comprende due semestri, quindi il fattore annuo è $1{,}05^2=1{,}1025$. Il tasso annuo equivalente è il $10{,}25\%$. Rispetto al $10\%$ ottenuto sommando due interessi semestrali sul capitale iniziale, la differenza di $0{,}25$ punti percentuali misura l'interesse del secondo semestre su quello del primo.
:::

:::osservazione
Per passare direttamente da un tasso effettivo trimestrale $i_4$ a uno mensile $i_{12}$ si può scegliere un trimestre come scadenza comune. Poiché un trimestre contiene tre mesi, vale $1+i_4=(1+i_{12})^3$. La stessa equazione si ottiene uguagliando i fattori annuali, perché entrambi i membri verrebbero elevati alla quarta potenza. La scelta della durata comune riduce il numero di operazioni.
:::

## Tasso nominale e tasso effettivo

:::definizione{#tasso-nominale titolo="Tasso annuo nominale convertibile"}
Il **tasso annuo nominale convertibile $m$ volte** è il valore $j^{(m)}=mi_m$, dove $i_m$ è il tasso effettivo applicato a ciascuno degli $m$ sottoperiodi dell'anno. Se $1+\dfrac{j^{(m)}}{m}>0$, allora il tasso annuo effettivo composto è
$$
i_m=\frac{j^{(m)}}{m},
\qquad
i=\left(1+\frac{j^{(m)}}{m}\right)^m-1.
$$
La prima formula identifica il tasso applicato a ogni sottoperiodo. La seconda conta quante volte quel fattore interviene durante l'anno.
:::

:::esempio{titolo="Lo stesso tasso dichiarato a due frequenze"}
Un nominale annuo del $12\%$ convertibile mensilmente corrisponde all'$1\%$ effettivo mensile, quindi il tasso annuo effettivo è circa $12{,}6825\%$. Con lo stesso nominale convertibile trimestralmente, il tasso trimestrale è il $3\%$ e il tasso annuo effettivo è $1{,}03^4-1$, cioè circa $12{,}5509\%$. A parità di nominale positivo, una frequenza più alta fa maturare prima gli interessi e aumenta il fattore annuo.
:::

:::osservazione
Se il dato di partenza è l'effettivo annuo, il nominale convertibile $m$ volte che gli corrisponde si ricava in due passaggi. Si trova prima il tasso effettivo del sottoperiodo tramite la radice e lo si moltiplica poi per $m$:
$$
j^{(m)}=m\left[(1+i)^{\frac{1}{m}}-1\right].
$$
Per $i=21\%$ e $m=2$, il fattore semestrale è $\sqrt{1{,}21}=1{,}1$. Il nominale convertibile due volte è il $20\%$. In un confronto fra contratti, i tassi nominali associati a frequenze diverse si possono confrontare dopo aver calcolato i rispettivi tassi effettivi su una durata comune.
:::

:::osservazione
A tasso nominale annuo $j>0$ fissato, si può confrontare il passaggio da $m$ a $2m$ conversioni considerando la durata di un sottoperiodo del primo contratto. Il primo contratto usa il fattore $1+\dfrac{j}{m}$. Il secondo lo divide in due e applica il fattore $1+\dfrac{j}{2m}$ a ciascuna metà. Il fattore complessivo su quel sottoperiodo è
$$
\left(1+\frac{j}{2m}\right)^2=1+\frac{j}{m}+\frac{j^2}{4m^2}.
$$
Il termine aggiuntivo è positivo. Elevando entrambi i fattori alla potenza $m$, il vantaggio del secondo si conserva sul montante annuo. In questo confronto si tiene fisso il nominale e si misura l'effetto della frequenza.
:::

:::attenzione
Un tasso nominale annuo del $12\%$ convertibile mensilmente e un tasso effettivo annuo del $12\%$ descrivono montanti annuali diversi. Nel primo caso $1000\,\mathrm{euro}$ diventano $1000\cdot1{,}01^{12}\,\mathrm{euro}$, cioè circa $1126{,}83\,\mathrm{euro}$. Nel secondo diventano $1120\,\mathrm{euro}$. Per una scadenza semestrale, il primo contratto applica sei volte il fattore mensile $1{,}01$. Il secondo usa la radice quadrata del fattore annuo $1{,}12$ con la convenzione esponenziale.
:::

## Intensità istantanea di interesse

:::definizione{#capitalizzazione-continua titolo="Forza di interesse e legge continua"}
Sia $r(t)>0$ il fattore di montante dalla data zero alla data $t$, con $r(0)=1$. Se $r$ è derivabile, la **forza di interesse** $\delta(t)$ è il tasso istantaneo di crescita relativa del montante:
$$
\delta(t)=\frac{r'(t)}{r(t)}.
$$
Il numeratore misura quanto varia il fattore di montante per unità di tempo. Il denominatore riferisce quella variazione al valore raggiunto alla stessa data. Se $\delta$ è continua, l'identità $\delta(t)=(\log r)'(t)$ dà
$$
r(t)=\exp\left(\int_0^t\delta(u)\,du\right),
$$
dove $u$ è la variabile di integrazione. La quantità che entra nell'esponenziale è l'integrale della forza lungo la durata effettiva.
:::

:::esempio{titolo="Forza costante ed effettivo annuo"}
Con forza annua costante $\delta$, il fattore a $t$ anni è $e^{\delta t}$. In un anno il fattore vale $e^\delta$, quindi il tasso effettivo annuo equivalente è $i=e^\delta-1$. Per $\delta=0{,}05$, il tasso effettivo è circa $5{,}1271\%$. Lo stesso capitale di $1000\,\mathrm{euro}$ dopo due anni vale $1000e^{0{,}10}\,\mathrm{euro}$, circa $1105{,}17\,\mathrm{euro}$. Viceversa, un effettivo annuo $i>-1$ dà una forza costante equivalente $\delta=\log(1+i)$.
:::

:::esempio{titolo="Forza crescente nel tempo"}
Si consideri $\delta(u)=0{,}02+0{,}01u$ con $u$ espresso in anni. Nei primi due anni l'integrale è
$$
\int_0^2 (0{,}02+0{,}01u)\,du
=0{,}02\cdot 2 + \frac{0{,}01}{2}\cdot 2^2
=0{,}06.
$$
Il fattore di montante è $e^{0{,}06}$. La forza media annua sul biennio è $\dfrac{0{,}06}{2}=0{,}03$. Il valore finale $\delta(2)=0{,}04$ descrive invece la crescita relativa alla fine del biennio. Usarlo per l'intero intervallo sovrastimerebbe il montante.
:::

## Scindibilità e reinvestimento

::::teorema{#scindibilita titolo="Leggi omogenee scindibili"}
Una legge è **omogenea** se il fattore dipende dalla durata e resta lo stesso quando si spostano di uguale quantità le due date dell'operazione. Sia $r(t)>0$ una legge omogenea, continua per $t\geq0$ e con $r(0)=1$. La legge è **scindibile** se per ogni $s,t\geq0$ vale
$$
r(s+t)=r(s)r(t).
$$
Sotto queste ipotesi, la scindibilità equivale all'esistenza di una costante reale $\delta$ tale che $r(t)=e^{\delta t}$. Nel regime composto con tasso costante, capitalizzare direttamente per due intervalli consecutivi o reinvestire l'intero montante alla data intermedia dà quindi la stessa somma finale.

:::dimostrazione
Si trasforma la moltiplicazione dei fattori in un'addizione. Posto $g(t)=\log r(t)$, la scindibilità equivale a $g(s+t)=g(s)+g(t)$. Applicando l'identità $n$ volte si ottiene $g(nu)=ng(u)$ per ogni intero $n\geq1$ e $u\geq0$. In particolare, $g(1)=n g\left(\dfrac{1}{n}\right)$. Per interi $m\geq0$ segue
$$
g\left(\frac{m}{n}\right)
=m g\left(\frac{1}{n}\right)
=\frac{m}{n}g(1).
$$
Per continuità l'identità vale per ogni reale $t\geq0$, perché ogni tale numero è limite di una successione di razionali non negativi. Si ha quindi $r(t)=e^{tg(1)}$. Viceversa, per $r(t)=e^{\delta t}$ vale $e^{\delta(s+t)}=e^{\delta s}e^{\delta t}$, quindi la legge è scindibile.
:::
::::

:::esempio{titolo="Rinnovo di un deposito semplice"}
Al $10\%$ annuo semplice, investire direttamente per due anni dà il fattore $1{,}2$. Rinnovare dopo un anno reinvestendo l'intero montante dà $1{,}1^2=1{,}21$. In generale, per due durate $s,t>0$ il prodotto dei fattori semplici contiene un termine aggiuntivo:
$$
(1+is)(1+it)=1+i(s+t)+i^2st.
$$
Con $i\neq0$, il termine $i^2st$ è positivo. I due montanti differiscono anche se il tasso e il capitale iniziale coincidono. Con $i=0$, entrambi i fattori valgono $1$.
:::

:::osservazione
Se la forza dipende dalla data, il fattore tra le date $a$ e $b$, con $0\leq a\leq b$, è $r(a,b)=\exp\left(\int_a^b\delta(u)\,du\right)$. Per una data intermedia $c$ vale $r(a,b)=r(a,c)r(c,b)$, perché l'integrale si somma sui due intervalli contigui. Il fattore del secondo intervallo va calcolato tra $c$ e $b$. Con $\delta(u)=0{,}02+0{,}01u$, l'esponente sull'intervallo da $0$ a $1$ è $0{,}025$, mentre da $1$ a $2$ è $0{,}035$. Le durate coincidono e i fattori dipendono dalle date.
:::
