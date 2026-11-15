---
titolo: Suono, risonanza ed effetto Doppler
sommario: Onde di pressione, livelli in decibel, eco, battimenti, risonanze dei tubi ed effetto Doppler nel mezzo.
---

## Propagazione del suono

:::definizione{#suono titolo="Onda sonora"}
Il **suono** in aria è un'onda meccanica longitudinale. Quando la membrana di un altoparlante avanza, comprime l'aria vicina. Quando arretra, la pressione locale diminuisce. La successione di compressioni e rarefazioni si propaga nel mezzo, mentre ogni particella d'aria oscilla avanti e indietro attorno alla propria posizione di equilibrio.

Il **periodo** $T$ è l'intervallo fra due massimi di pressione successivi misurati dallo stesso microfono. La frequenza $f$ è il numero di cicli al secondo, quindi $f=\dfrac{1}{T}$. La **lunghezza d'onda** $\lambda$ è la distanza fra due massimi consecutivi osservati nello stesso istante. In un periodo la perturbazione si sposta di una lunghezza d'onda, perciò
$$
u=\frac{\lambda}{T}=\lambda f.
$$

Il suono richiede un mezzo materiale. La velocità $u$ dipende dal mezzo e dal suo stato. Per l'aria nei problemi si usa spesso $340\,\mathrm{m/s}$. Se un tono ha frequenza $680\,\mathrm{Hz}$, nello stesso mezzo si ottiene $\lambda=\dfrac{340}{680}\,\mathrm m=0{,}50\,\mathrm m$.
:::

:::esempio{titolo="Lettura di un profilo di pressione"}
Nel grafico sono riportate le variazioni di pressione lungo una direzione in un unico istante. I due massimi segnati si trovano a $x=0{,}125\,\mathrm m$ e $x=0{,}625\,\mathrm m$, quindi $\lambda=0{,}50\,\mathrm m$. Il grafico è spaziale perché l'ascissa è $x$. Per ricavare il periodo occorre conoscere anche $u$ oppure registrare la pressione in funzione del tempo in un punto fisso.

::grafico{f="sin(4*pi*x)" xmin=0 xmax=1 ymin=-1.3 ymax=1.4 nomi="x,Δp (Pa)" punti="0.125,1,pieno;0.625,1,pieno" segmenti="0.125,0,0.125,1;0.625,0,0.625,1" legenda="\Delta p(x)" titolo="Profilo istantaneo. Due massimi consecutivi distano $0{,}50\,\mathrm m$."}
:::

:::osservazione
A un'interfaccia ferma le oscillazioni dei due mezzi hanno la stessa frequenza imposta dalla sorgente. Dalla relazione $\lambda=\dfrac{u}{f}$ segue che la lunghezza d'onda cambia nello stesso rapporto di $u$. Se $u_2=3u_1$ allora $\lambda_2=3\lambda_1$. La frequenza comune garantisce che, al confine, il ciclo di compressione del secondo mezzo sia ripetuto con il periodo del primo.
:::

## Altezza, timbro e ampiezza

:::definizione{#caratteri-suono titolo="Caratteri di un suono"}
L'**altezza** di un suono periodico è collegata alla frequenza fondamentale $f_1$. Una frequenza più alta corrisponde a un suono più acuto. Il **timbro** dipende fra l'altro dal contenuto delle armoniche e da come la vibrazione inizia e si attenua.

Un tono puro contiene una sola frequenza. Un suono periodico complesso può contenere componenti alle frequenze $f_1$, $2f_1$, $3f_1$ e così via. Con $f_1=200\,\mathrm{Hz}$ la seconda e la terza armonica si trovano quindi a $400\,\mathrm{Hz}$ e $600\,\mathrm{Hz}$.
:::

:::esempio{titolo="Stessa nota, spettri diversi"}
Due strumenti hanno fondamentale $200\,\mathrm{Hz}$. Nel primo prevale la fondamentale, nel secondo la componente a $400\,\mathrm{Hz}$ ha un'ampiezza confrontabile con essa. I due suoni hanno la stessa fondamentale e un diverso contenuto delle armoniche, quindi possono essere riconosciuti dal timbro. Per alzare la nota di un'ottava si raddoppia la fondamentale a $400\,\mathrm{Hz}$ e si spostano nello stesso rapporto le frequenze delle armoniche.
:::

:::osservazione
L'ampiezza di pressione è una grandezza fisica misurabile in pascal. La sensazione di volume dipende anche dalla frequenza e dalla risposta dell'orecchio. Il livello in decibel quantifica un rapporto di intensità rispetto a un riferimento fissato.
:::

## Intensità e sorgenti puntiformi

:::definizione{#intensita titolo="Potenza per unità di superficie"}
L'**intensità sonora** $I$ è la potenza media che attraversa una superficie perpendicolare alla propagazione, divisa per la sua area. Si misura in $\mathrm{W/m^2}$. Per una sorgente puntiforme isotropa, in campo libero e senza assorbimento, ciascuna sfera centrata sulla sorgente è attraversata dalla stessa potenza $P$. Siccome la sfera di raggio $r$ ha area $4\pi r^2$,
$$
I=\frac{P}{4\pi r^2}.
$$

L'intensità è uniforme sulla sfera perché la sorgente è isotropa. Se la distanza raddoppia, l'area quadruplica e la stessa potenza si distribuisce su una superficie quattro volte maggiore. L'intensità diventa quindi un quarto. In un ambiente chiuso le riflessioni sulle pareti possono modificare questa dipendenza dalla distanza.
:::

:::esempio{titolo="Intensità a due distanze"}
Per $P=1{,}0\,\mathrm W$ e $r=2{,}0\,\mathrm m$ si ottiene
$$
I_2=\frac{1{,}0}{4\pi\cdot 2{,}0^2}\,\mathrm{W/m^2}
\simeq 1{,}99\cdot 10^{-2}\,\mathrm{W/m^2}.
$$
A $4{,}0\,\mathrm m$ l'intensità è $\dfrac{I_2}{4}\simeq 4{,}97\cdot10^{-3}\,\mathrm{W/m^2}$. La curva mostra il rapporto con il valore a $1\,\mathrm m$, perciò i valori segnati sono adimensionali.

::grafico{f="1/x^2" xmin=0.85 xmax=5 ymin=0 ymax=1.3 nomi="r,I/I₁" punti="1,1,pieno;2,0.25,pieno;4,0.0625,pieno" legenda="I(r)/I_1" titolo="Nel campo libero $I_1$ è l'intensità a $1\,\mathrm m$. I valori a $2\,\mathrm m$ e $4\,\mathrm m$ sono rispettivamente $\dfrac{I_1}{4}$ e $\dfrac{I_1}{16}$."}
:::

:::osservazione
Per un'onda armonica progressiva nello stesso mezzo, $I$ è proporzionale al quadrato dell'ampiezza di pressione. Raddoppiare l'ampiezza quadruplica quindi l'intensità. Questa relazione confronta due ampiezze. La legge $\dfrac{P}{4\pi r^2}$ descrive invece come cambia l'intensità quando si cambia distanza a potenza fissata.
:::

## Livello sonoro in decibel

:::definizione{#decibel titolo="Scala logaritmica delle intensità"}
Il **livello di intensità sonora** $\beta$ confronta l'intensità misurata $I$ con l'intensità di riferimento $I_0=10^{-12}\,\mathrm{W/m^2}$.
$$
\beta=10\log_{10}\!\left(\frac{I}{I_0}\right)\,\mathrm{dB}.
$$
Il rapporto dentro il logaritmo è adimensionale. Per $I=10^{-6}\,\mathrm{W/m^2}$ vale $\dfrac{I}{I_0}=10^6$, quindi $\beta=60\,\mathrm{dB}$. Per risalire all'intensità si divide prima il valore numerico del livello, espresso in decibel, per $10$ e poi si eleva $10$ a quell'esponente.
$$
I=I_0\,10^{\frac{\beta}{10\,\mathrm{dB}}}.
$$
:::

::::teorema{#confronto-livelli titolo="Differenza fra livelli"}
Sottraendo due livelli riferiti allo stesso $I_0$, il riferimento si semplifica.
$$
\beta_2-\beta_1=10\log_{10}\!\left(\frac{I_2}{I_1}\right)\,\mathrm{dB}.
$$
Un fattore $10$ in intensità aggiunge $10\,\mathrm{dB}$. Un fattore $2$ aggiunge circa $3{,}01\,\mathrm{dB}$. Per una sorgente puntiforme ideale, a distanza doppia $\dfrac{I_2}{I_1}=\dfrac14$, quindi il livello diminuisce di circa $6{,}02\,\mathrm{dB}$.

:::dimostrazione
La differenza dei due logaritmi è il logaritmo del quoziente. Poiché $\dfrac{I_2/I_0}{I_1/I_0}=\dfrac{I_2}{I_1}$, il risultato dipende solo dal rapporto delle intensità.
:::
::::

:::esempio{titolo="Due sorgenti indipendenti"}
Un microfono misura $50\,\mathrm{dB}$ con la prima sorgente accesa e $60\,\mathrm{dB}$ con la seconda. Per sorgenti indipendenti, le intensità medie si sommano. La differenza di $10\,\mathrm{dB}$ dà $I_1=\dfrac{I_2}{10}$, quindi $I_{\mathrm{tot}}=1{,}1I_2$. Il livello totale si ricava dal più alto aggiungendo il contributo del fattore $1{,}1$.
$$
\beta_{\mathrm{tot}}=60\,\mathrm{dB}+10\log_{10}(1{,}1)\,\mathrm{dB}\simeq60{,}4\,\mathrm{dB}.
$$
Il contributo della sorgente più debole è piccolo perché al microfono la sua intensità è un decimo dell'altra.
:::

:::attenzione
Due sorgenti coerenti con fase fissata richiedono di sommare le perturbazioni prima di calcolare l'intensità. Due onde di uguale ampiezza che arrivano in opposizione di fase possono dare intensità nulla nel punto. Il raddoppio dell'intensità vale per due contributi indipendenti di uguale intensità media.
:::

## Eco e battimenti

:::teorema{#eco titolo="Tempo di andata e ritorno"}
Nella misura di un eco con sorgente e ricevitore nello stesso punto, l'impulso percorre la distanza $d$ dalla parete due volte. Se la velocità è costante,
$$
\Delta t=\frac{2d}{u},\qquad d=\frac{u\Delta t}{2}.
$$
Con $\Delta t=0{,}40\,\mathrm s$ e $u=340\,\mathrm{m/s}$ l'intero percorso misura $136\,\mathrm m$, quindi la parete dista $68\,\mathrm m$. Se due microfoni registrano lo stesso fronte diretto lungo una semiretta dalla sorgente, la differenza dei tempi corrisponde invece a un cammino di sola andata.
:::

:::definizione{#battimenti titolo="Frequenze vicine"}
I **battimenti** sono massimi e minimi periodici d'ampiezza prodotti da due toni di frequenze vicine e ampiezze confrontabili. Se le frequenze sono $f_1$ e $f_2$, la frequenza dei massimi d'intensità è
$$
f_b=|f_1-f_2|.
$$
Le due oscillazioni si rinforzano quando sono in fase. Poiché ciascuna accumula $f_i$ cicli al secondo, la differenza fra i loro numeri di cicli cambia di $|f_1-f_2|$ ogni secondo. A ogni variazione di un ciclo intero le oscillazioni tornano in fase e si ripresenta un massimo.

Con $f_1=440\,\mathrm{Hz}$ e $f_2=444\,\mathrm{Hz}$ si hanno quattro massimi al secondo. Fra due massimi consecutivi passano $\dfrac14\,\mathrm s$. Il tono percepito è vicino alla frequenza media, $442\,\mathrm{Hz}$.
:::

:::esempio{titolo="Massimi dell'inviluppo"}
Nel grafico si sommano due oscillazioni di $9\,\mathrm{Hz}$ e $10\,\mathrm{Hz}$. L'ampiezza è massima a $t=0$, $1\,\mathrm s$ e $2\,\mathrm s$. Le vibrazioni rapide fra due massimi appartengono al tono, mentre la distanza di $1\,\mathrm s$ fra i massimi è il periodo del battimento.

::grafico{f="cos(18*pi*x)+cos(20*pi*x);2*abs(cos(pi*x));-2*abs(cos(pi*x))" xmin=0 xmax=2 ymin=-2.3 ymax=2.5 nomi="t,Δp (Pa)" legenda="\Delta p(t);+2\lvert\cos(\pi t)\rvert;-2\lvert\cos(\pi t)\rvert" titolo="I massimi successivi dell'inviluppo sono separati da $1\,\mathrm s$."}
:::

## Risonanza nei tubi sonori

:::teorema{#tubi titolo="Tubi aperti e chiusi a un'estremità"}
La risonanza si osserva quando la frequenza di eccitazione è vicina a una frequenza propria del tubo. Le riflessioni ai due estremi producono un'onda stazionaria. I punti che restano fermi si chiamano **nodi di spostamento** e i punti di massima ampiezza si chiamano **ventri di spostamento**.

In un tubo uniforme ideale le condizioni agli estremi sono le seguenti.

- All'estremo chiuso la parete impedisce il moto longitudinale dell'aria, quindi c'è un nodo di spostamento e un ventre di pressione.
- All'estremo aperto la pressione resta vicina a quella dell'aria esterna, quindi c'è un nodo di pressione e un ventre di spostamento.

Per un tubo di lunghezza $L$ aperto a entrambe le estremità, la distanza minima fra due ventri è $\dfrac{\lambda}{2}$. I modi successivi aggiungono altre mezze lunghezze d'onda, quindi $L=\dfrac{n\lambda_n}{2}$ e le frequenze sono
$$
f_n=\frac{nu}{2L},\qquad n=1,2,3,\ldots
$$
Per un tubo chiuso a un'estremità e aperto all'altra, il primo modo contiene un quarto di lunghezza d'onda, dal nodo al ventre. Ogni modo successivo aggiunge una mezza lunghezza d'onda. Ne segue $L=\dfrac{(2n-1)\lambda_n}{4}$, quindi
$$
f_n=\frac{(2n-1)u}{4L},\qquad n=1,2,3,\ldots
$$
Qui $n$ conta i modi ammessi in ordine crescente. Il secondo modo corrisponde alla terza armonica perché la sua frequenza è tre volte la fondamentale. Si trascurano la correzione di estremità e le perdite.
:::

:::esempio{titolo="Modi di un tubo lungo 0,85 m"}
Con $L=0{,}85\,\mathrm m$ e $u=340\,\mathrm{m/s}$ il tubo aperto ai due estremi ha fondamentale $200\,\mathrm{Hz}$. Chiudendo un'estremità compare il vincolo di spostamento nullo. La lunghezza della fondamentale passa da $\lambda=2L$ a $\lambda=4L$ e la frequenza passa da $200\,\mathrm{Hz}$ a $100\,\mathrm{Hz}$. Il modo successivo contiene tre quarti di lunghezza d'onda, quindi vale $300\,\mathrm{Hz}$.

::grafico{curve="t,cos(pi*t/0.85),0,0.85;t,sin(pi*t/1.7),0,0.85;t,sin(3*pi*t/1.7),0,0.85" xmin=-0.03 xmax=0.92 ymin=-1.35 ymax=1.35 nomi="x,s/sₘₐₓ" segmenti="0.85,-1.13,0.85,1.13" legenda="\text{Aperto, modo 1};\text{Chiuso, modo 1};\text{Chiuso, modo 2}" titolo="Profili di spostamento tra $x=0$ e $x=0{,}85\,\mathrm m$. Il tubo chiuso ha un nodo in $x=0$ e un ventre al bordo aperto."}
:::

## Effetto Doppler

::::teorema{#doppler titolo="Sorgente e osservatore in moto rispetto al mezzo"}
L'**effetto Doppler** si calcola confrontando la distanza fra due fronti emessi successivamente e la velocità con cui i fronti raggiungono l'osservatore. Siano $f$ la frequenza emessa, $u$ la velocità del suono e $f'$ la frequenza ricevuta. Per moto lungo la congiungente, in aria ferma e con velocità subsoniche, vale
$$
f'=f\frac{u+v_o}{u-v_s}.
$$
Si prende $v_o>0$ se l'osservatore si muove verso la sorgente, e $v_s>0$ se la sorgente si muove verso l'osservatore. Le velocità sono misurate rispetto all'aria. Chi si allontana ha la componente corrispondente negativa.

:::dimostrazione
In un periodo di emissione $T=\dfrac1f$, il primo fronte avanza di $uT$ e la sorgente avanza verso l'osservatore di $v_sT$. Il fronte successivo parte da una posizione più avanzata, quindi la distanza fra i due fronti è $\lambda'=(u-v_s)T$. Se l'osservatore va incontro ai fronti, la velocità di incontro è $u+v_o$. Il numero di fronti ricevuti al secondo è $\dfrac{u+v_o}{\lambda'}$, che dà la formula.
:::
::::

:::esempio{titolo="Uguale velocità di avvicinamento"}
Con $f=600\,\mathrm{Hz}$ e $u=340\,\mathrm{m/s}$, una sorgente che avanza a $20\,\mathrm{m/s}$ verso un osservatore fermo produce
$$
f'=600\frac{340}{340-20}\,\mathrm{Hz}=637{,}5\,\mathrm{Hz}.
$$
Se la sorgente è ferma e lo stesso moto appartiene all'osservatore, la distanza fra i fronti è quella di emissione. Aumenta invece la velocità con cui l'osservatore li incontra, quindi
$$
f'=600\frac{340+20}{340}\,\mathrm{Hz}\simeq635{,}3\,\mathrm{Hz}.
$$
In entrambi i casi la frequenza ricevuta è maggiore di quella emessa. I due risultati differiscono perché la sorgente mobile modifica la spaziatura dei fronti, mentre l'osservatore mobile modifica il ritmo con cui li attraversa.
:::

:::esempio{titolo="Ricavare velocità e verso"}
Una sorgente emette $500\,\mathrm{Hz}$ e un osservatore fermo ne riceve $450\,\mathrm{Hz}$ in aria con $u=340\,\mathrm{m/s}$. Ponendo $v_o=0$ e isolando $v_s$ si ottiene
$$
v_s=u\left(1-\frac{f}{f'}\right)
=340\left(1-\frac{500}{450}\right)\,\mathrm{m/s}
\simeq-37{,}8\,\mathrm{m/s}.
$$
Il segno negativo indica che la sorgente si allontana. Una verifica si ottiene osservando che $u-v_s>u$, quindi la formula deve dare $f'<f$.
:::

## Confronti e lettura di un esperimento

:::osservazione{#misure titolo="Grandezze da misurare"}
Per un eco si confrontano i tempi di emissione e ricezione di un impulso. Nei battimenti si misura l'intervallo fra due massimi dell'inviluppo. Nella risonanza si varia la frequenza di eccitazione e si cercano le frequenze alle quali il tubo risponde con maggiore ampiezza. Nell'effetto Doppler si confrontano la frequenza emessa e quella ricevuta mentre almeno uno dei due corpi è in moto rispetto all'aria.
:::

:::esempio{titolo="Distanza del microfono e moto del microfono"}
Un tono fisso di $500\,\mathrm{Hz}$ in aria con $u=340\,\mathrm{m/s}$ ha lunghezza d'onda $0{,}68\,\mathrm m$. Con due microfoni fermi a distanze diverse dall'altoparlante isotropo, quello più lontano riceve il segnale più tardi e misura un'intensità minore, ma registra la stessa frequenza. Un microfono che si avvicina all'altoparlante attraversa invece più fronti al secondo rispetto a uno fermo e misura una frequenza maggiore.
:::
