---
titolo: Corpo nero, effetto fotoelettrico ed effetto Compton
sommario: Come emettono radiazione i corpi caldi e perché per spiegarlo Planck introdusse i quanti di energia, come Einstein spiegò l'effetto fotoelettrico con i fotoni e come l'effetto Compton mostra che il fotone ha anche una quantità di moto.
---

## Radiazione termica e corpo nero

:::definizione{#radiazione-termica titolo="Radiazione termica"}
Ogni corpo a una temperatura maggiore dello zero assoluto emette onde elettromagnetiche, prodotte dal moto di agitazione termica delle cariche che lo compongono. Questa emissione si chiama **radiazione termica**. Contiene tutte le lunghezze d'onda, ma con intensità diverse, e la sua potenza cresce con la temperatura. A temperatura ambiente un corpo emette quasi solo nell'infrarosso, che l'occhio non vede. Un filo di ferro scaldato oltre $800\,^\circ\mathrm{C}$ diventa rosso, e a temperature più alte diventa giallo e poi bianco, perché una parte crescente della radiazione cade nel visibile. Per le onde elettromagnetiche si rimanda all'argomento sulle equazioni di Maxwell e onde elettromagnetiche.
:::

:::definizione{#corpo-nero titolo="Corpo nero"}
Un corpo che assorbe *tutta* la radiazione che lo colpisce, a qualunque lunghezza d'onda, si chiama **corpo nero**. Un buon modello di corpo nero è una cavità con pareti opache e un piccolo foro. La radiazione che entra dal foro viene riflessa molte volte dalle pareti e a ogni urto ne viene assorbita una parte, quindi la probabilità che esca di nuovo dal foro è trascurabile. Il foro equivale perciò a una superficie che assorbe tutto.

Quando le pareti sono a temperatura $T$, dal foro esce la radiazione termica della cavità. Sperimentalmente la distribuzione di questa radiazione tra le lunghezze d'onda dipende *solo* dalla temperatura, e non dal materiale o dalla forma della cavità. Per questo il corpo nero è il caso più semplice da studiare. Il Sole, le stelle e il filamento di una lampadina emettono una radiazione vicina a quella di un corpo nero.

::grafico{assi=0 uguale=1 linee="0,1.3 0,0 4,0 4,3 0,3 0,1.7;0,1.5 2.2,0 4,1.9 1.4,3 0.4,2.2" vettori="-1.6,1.5,-0.1,1.5,luce" etichette="-0.45,1.05,foro" xmin=-2 xmax=4.6 ymin=-0.5 ymax=3.5 titolo="Modello di corpo nero: la radiazione che entra dal foro viene riflessa e in parte assorbita a ogni urto con le pareti, e la probabilità che esca di nuovo dal foro è trascurabile"}

:::

:::definizione{#intensita-spettrale titolo="Intensità spettrale"}
La potenza emessa da un corpo nero si distribuisce tra le lunghezze d'onda. L'**intensità spettrale** $I(\lambda)$ è la potenza emessa per unità di superficie e per unità di intervallo di lunghezza d'onda attorno a $\lambda$. Il suo grafico in funzione di $\lambda$ si chiama curva del corpo nero. L'area sotto la curva è la potenza totale emessa per unità di superficie.

Le curve misurate hanno tutte la stessa forma. L'intensità è quasi nulla per lunghezze d'onda molto piccole, cresce fino a un massimo e poi diminuisce lentamente. Quando la temperatura aumenta, la curva si alza in ogni punto e il suo massimo si sposta verso lunghezze d'onda minori. Per esempio a $5000\,\mathrm{K}$ il massimo è a $580\,\mathrm{nm}$, nel visibile, mentre a $4000\,\mathrm{K}$ è a $725\,\mathrm{nm}$, al confine con l'infrarosso, e l'area sotto la curva è circa $2{,}4$ volte più piccola.

::grafico{f="100/(x^5*(exp(2.88/x)-1));100/(x^5*(exp(3.6/x)-1))" punti="0.58,10.7,pieno;0.725,3.51,pieno" segmenti="0.58,0,0.58,10.7;0.725,0,0.725,3.51" xmin=-0.2 xmax=3.2 ymin=-0.5 ymax=12 nomi="λ,I" legenda="T = 5000\,\mathrm{K};T = 4000\,\mathrm{K}" titolo="Curve del corpo nero a due temperature, con $\lambda$ in micrometri e $I$ in unità arbitrarie: a temperatura maggiore la curva è più alta e il massimo è a una lunghezza d'onda minore"}

:::

## Leggi di Stefan-Boltzmann e di Wien

:::teorema{#legge-stefan-boltzmann titolo="Legge di Stefan-Boltzmann"}
Un corpo nero di superficie $A$ alla temperatura assoluta $T$ emette la potenza
$$
P = \sigma A T^4 ,
\qquad
\sigma = 5{,}67 \cdot 10^{-8}\,\mathrm{W/(m^2\cdot K^4)} ,
$$
dove $\sigma$ è la **costante di Stefan-Boltzmann**. È una legge sperimentale. La potenza è proporzionale alla quarta potenza della temperatura, quindi raddoppiando la temperatura la potenza emessa diventa $2^4 = 16$ volte più grande. La legge permette di calcolare la potenza emessa da una stella nota la sua temperatura superficiale.

Il Sole ha raggio $R = 6{,}96 \cdot 10^{8}\,\mathrm{m}$ e temperatura superficiale $T = 5800\,\mathrm{K}$. La sua superficie è $4\pi R^2$, perciò la potenza emessa è
$$
P = 5{,}67 \cdot 10^{-8} \cdot 4\pi \cdot \left( 6{,}96 \cdot 10^{8} \right)^2 \cdot 5800^4\,\mathrm{W} \approx 3{,}9 \cdot 10^{26}\,\mathrm{W} .
$$
:::

:::esempio{#potenza-corpo-umano titolo="Radiazione emessa dal corpo umano"}
Il corpo umano emette nell'infrarosso quasi come un corpo nero. Con una superficie di $1{,}8\,\mathrm{m^2}$ e una temperatura di $310\,\mathrm{K}$ la potenza emessa è
$$
P = 5{,}67 \cdot 10^{-8} \cdot 1{,}8 \cdot 310^4\,\mathrm{W} \approx 9{,}4 \cdot 10^{2}\,\mathrm{W} .
$$
Il corpo assorbe però anche la radiazione delle pareti della stanza. Se le pareti sono a $293\,\mathrm{K}$, la potenza assorbita è $5{,}67 \cdot 10^{-8} \cdot 1{,}8 \cdot 293^4\,\mathrm{W} \approx 7{,}5 \cdot 10^{2}\,\mathrm{W}$. La potenza persa per irraggiamento è quindi la differenza, circa $1{,}9 \cdot 10^{2}\,\mathrm{W}$.
:::

:::teorema{#legge-di-wien titolo="Legge dello spostamento di Wien"}
La lunghezza d'onda $\lambda_{\max}$ alla quale la curva del corpo nero ha il massimo è inversamente proporzionale alla temperatura assoluta:
$$
\lambda_{\max}\, T = 2{,}90 \cdot 10^{-3}\,\mathrm{m\cdot K} .
$$
È una legge sperimentale. Spiega perché un corpo che si scalda cambia colore, dal rosso al bianco, e permette di misurare la temperatura di un corpo lontano dal colore della sua luce. Il corpo umano, a $310\,\mathrm{K}$, ha il massimo di emissione a
$$
\lambda_{\max} = \frac{2{,}90 \cdot 10^{-3}}{310}\,\mathrm{m} \approx 9{,}4 \cdot 10^{-6}\,\mathrm{m} = 9{,}4\,\mu\mathrm{m} ,
$$
nell'infrarosso. Su questa lunghezza d'onda lavorano le termocamere.
:::

:::esempio{#temperatura-del-sole titolo="Temperatura superficiale del Sole"}
Lo spettro della luce solare ha il massimo vicino a $\lambda_{\max} = 500\,\mathrm{nm}$. Trattando il Sole come un corpo nero, la **legge di Wien** dà
$$
T = \frac{2{,}90 \cdot 10^{-3}\,\mathrm{m\cdot K}}{5{,}00 \cdot 10^{-7}\,\mathrm{m}} = 5{,}80 \cdot 10^{3}\,\mathrm{K} .
$$
È la temperatura usata per calcolare la potenza del Sole con la legge di Stefan-Boltzmann. Una stella rossa con il massimo a $725\,\mathrm{nm}$ ha temperatura $4{,}0 \cdot 10^{3}\,\mathrm{K}$, una stella azzurra con il massimo a $290\,\mathrm{nm}$ ha temperatura $1{,}0 \cdot 10^{4}\,\mathrm{K}$.
:::

## Ipotesi di Planck

:::osservazione{#problema-corpo-nero titolo="La curva del corpo nero e la fisica classica"}
Alla fine dell'Ottocento si cercò di ricavare la forma della curva del corpo nero con l'elettromagnetismo di Maxwell e la termodinamica. Il calcolo classico (legge di Rayleigh-Jeans) assegna a ogni modo di oscillazione delle onde nella cavità la stessa energia media, proporzionale a $T$. Poiché il numero dei modi cresce senza limite al diminuire della lunghezza d'onda, la curva classica cresce come $\dfrac{1}{\lambda^4}$ per $\lambda \to 0$. La teoria classica descrive bene le lunghezze d'onda grandi, ma prevede un'intensità infinita nell'ultravioletto e una potenza totale infinita, mentre la curva misurata tende a zero. Questo disaccordo prese il nome di *catastrofe ultravioletta*.

::grafico{f="100/(x^5*(exp(2.88/x)-1));100/(2.88*x^4)" xmin=-0.2 xmax=3.2 ymin=-0.5 ymax=12 nomi="λ,I" legenda="\text{curva sperimentale};\text{previsione classica}" titolo="Corpo nero a $5000\,\mathrm{K}$, con $\lambda$ in micrometri: la previsione classica coincide con la curva sperimentale per $\lambda$ grande e cresce senza limite per $\lambda$ piccolo"}

:::

:::teorema{#ipotesi-di-planck titolo="Ipotesi di Planck"}
Nel 1900 Planck suppose che le cariche delle pareti della cavità, che oscillano con frequenza $f$, possano avere solo i valori di energia
$$
E = n h f ,
\qquad
n = 0, 1, 2, 3, \dots
$$
dove $h$ è una nuova costante, oggi detta **costante di Planck**:
$$
h = 6{,}63 \cdot 10^{-34}\,\mathrm{J\cdot s} .
$$
È un postulato. L'energia di un oscillatore non varia quindi con continuità, ma a salti, e la quantità minima $hf$ che può essere emessa o assorbita si chiama **quanto di energia**. Con questa ipotesi Planck ricavò una formula che coincide con le curve sperimentali a ogni temperatura. Per un oscillatore con frequenza $f = 5{,}00 \cdot 10^{14}\,\mathrm{Hz}$, che corrisponde alla luce visibile, il quanto è
$$
hf = 6{,}63 \cdot 10^{-34} \cdot 5{,}00 \cdot 10^{14}\,\mathrm{J} \approx 3{,}3 \cdot 10^{-19}\,\mathrm{J} .
$$

::grafico{assi=0 uguale=1 linee="0,0 3,0;0,1 3,1;0,2 3,2;0,3 3,3;0,4 3,4" vettori="1.5,1,1.5,2;2.3,3,2.3,2" etichette="3.2,0,E = 0;3.2,1,E = hf;3.2,2,E = 2hf;3.2,3,E = 3hf;3.2,4,E = 4hf;0.55,1.5,assorbe;1.45,2.5,emette" xmin=-0.5 xmax=5 ymin=-0.5 ymax=4.5 titolo="Valori possibili dell'energia di un oscillatore di frequenza $f$ secondo Planck: l'energia cambia solo a salti, e ogni salto tra due valori vicini è un quanto $hf$"}

:::

:::osservazione{#perche-planck-funziona titolo="Perché i quanti spiegano la curva"}
Alle lunghezze d'onda piccole corrispondono frequenze grandi, e quindi quanti $hf$ grandi. Quando il quanto è molto maggiore dell'energia tipica di agitazione termica, gli oscillatori di quella frequenza restano quasi tutti nello stato $n = 0$ e la radiazione emessa è quasi nulla. Per questo motivo la curva tende a zero per $\lambda \to 0$. Alle lunghezze d'onda grandi il quanto è piccolo, i salti di energia non si notano e si ritrova la previsione classica.

La formula ricavata da Planck per l'intensità spettrale è
$$
I(\lambda) = \frac{2\pi h c^2}{\lambda^5} \cdot \frac{1}{e^{\frac{hc}{\lambda k T}} - 1} ,
$$
dove $k = 1{,}38 \cdot 10^{-23}\,\mathrm{J/K}$ è la costante di Boltzmann. Dalla formula si ricavano, con il calcolo di un massimo e di un integrale, sia la legge di Wien sia la legge di Stefan-Boltzmann, con i valori sperimentali delle costanti.
:::

:::esempio{#quanti-oggetti-macroscopici titolo="I quanti negli oggetti di uso comune"}
Un pendolo che oscilla con frequenza $f = 1{,}0\,\mathrm{Hz}$ e ha energia $E = 0{,}050\,\mathrm{J}$ può cambiare energia solo a salti di $hf = 6{,}63 \cdot 10^{-34}\,\mathrm{J}$. Il numero quantico del suo stato è
$$
n = \frac{E}{hf} = \frac{0{,}050}{6{,}63 \cdot 10^{-34}} \approx 7{,}5 \cdot 10^{31} .
$$
Un salto di un quanto cambia l'energia di una parte su $10^{31}$, quantità che nessuna misura può rivelare. Per questo nei corpi macroscopici l'energia appare continua, e i quanti diventano visibili solo per oscillatori atomici, con frequenze di $10^{14}$ o $10^{15}\,\mathrm{Hz}$.
:::

## Effetto fotoelettrico: i fatti sperimentali

:::definizione{#effetto-fotoelettrico titolo="Effetto fotoelettrico"}
Si chiama **effetto fotoelettrico** l'emissione di elettroni da parte di un metallo colpito da radiazione elettromagnetica. Gli elettroni emessi si chiamano fotoelettroni. Per esempio una lastra di zinco carica negativamente e collegata a un elettroscopio si scarica se viene illuminata con luce ultravioletta, perché perde elettroni, mentre con luce visibile, anche molto intensa, resta carica.
:::

:::definizione{#fotocella titolo="Fotocella e potenziale di arresto"}
L'effetto si studia con una **fotocella**, un tubo di vetro in cui è fatto il vuoto e che contiene due elettrodi metallici. Il catodo viene illuminato ed emette elettroni; l'anodo li raccoglie. Un generatore regolabile mantiene tra anodo e catodo la tensione $V$, e un amperometro misura la corrente $I$ degli elettroni che arrivano all'anodo.

Se l'anodo è a potenziale maggiore del catodo ($V > 0$), il campo elettrico accelera gli elettroni verso l'anodo e, quando $V$ è abbastanza grande, li raccoglie tutti. La corrente raggiunge allora un valore massimo, detto **corrente di saturazione**. Se si inverte la polarità ($V < 0$), il campo frena gli elettroni, e arrivano all'anodo solo quelli con energia cinetica sufficiente. Il **potenziale di arresto** $V_0$ è il valore della tensione frenante per cui la corrente si annulla.

::grafico{assi=0 uguale=1 curve="2.5+2.4*cos(t),1+1.3*sin(t),0,6.29;3.4+0.25*cos(t),-1.2+0.25*sin(t),0,6.29" linee="1,0.2 1,1.8;4,0.2 4,1.8;1,0.2 1,-1.2 2.4,-1.2;2.6,-1.2 3.15,-1.2;3.65,-1.2 4,-1.2 4,0.2;2.4,-0.9 2.4,-1.5;2.6,-1.05 2.6,-1.35" vettori="-0.6,2.8,0.9,1.5,luce;1.2,1,3.8,1,e⁻" etichette="0.45,1.0,catodo;4.5,1.0,anodo;2.5,-1.75,V;3.4,-1.65,A" xmin=-1 xmax=5.4 ymin=-2.1 ymax=3.1 legenda=0 titolo="Fotocella: la luce colpisce il catodo, gli elettroni emessi vanno verso l'anodo, il generatore fissa la tensione $V$ tra anodo e catodo e l'amperometro misura la corrente"}

Un elettrone che parte dal catodo con energia cinetica $K$ e attraversa la tensione frenante $|V|$ perde l'energia $e|V|$, quindi arriva all'anodo se $K \ge e|V|$. La corrente si annulla quando la tensione ferma anche gli elettroni più veloci, perciò il potenziale di arresto misura l'energia cinetica massima dei fotoelettroni:
$$
e V_0 = K_{\max} .
$$
Per esempio, se $V_0 = 0{,}80\,\mathrm{V}$, gli elettroni più veloci hanno energia cinetica $K_{\max} = 0{,}80\,\mathrm{eV} = 1{,}28 \cdot 10^{-19}\,\mathrm{J}$.
:::

:::osservazione{#osservazioni-fotoelettrico titolo="Le osservazioni sperimentali"}
Gli esperimenti con la fotocella, ripetuti con metalli diversi e con luce di frequenza e intensità diverse, danno questi risultati.

- Per ogni metallo esiste una **frequenza di soglia** $f_0$. Con luce di frequenza minore di $f_0$ non viene emesso alcun elettrone, per quanto la luce sia intensa; con frequenza maggiore di $f_0$ l'emissione avviene anche con luce debolissima.
- L'energia cinetica massima dei fotoelettroni, misurata dal potenziale di arresto, cresce linearmente con la frequenza e *non* dipende dall'intensità della luce.
- L'intensità della luce cambia solo il numero di elettroni emessi al secondo: la corrente di saturazione è proporzionale all'intensità.
- L'emissione è immediata: gli elettroni escono entro $10^{-9}\,\mathrm{s}$ dall'arrivo della luce, anche se la luce è molto debole.

::grafico{f="max(0,4*(1-exp(-(x+1.2)/0.5)));max(0,2*(1-exp(-(x+1.2)/0.5)))" punti="-1.2,0,pieno,−V₀" xmin=-2 xmax=4 ymin=-0.5 ymax=5 nomi="V,I" legenda="\text{luce più intensa};\text{luce meno intensa}" titolo="Corrente $I$ in funzione della tensione $V$ tra anodo e catodo, con luce della stessa frequenza e due intensità: la corrente di saturazione è proporzionale all'intensità, il potenziale di arresto $V_0$ è lo stesso"}

:::

:::osservazione{#contrasto-teoria-ondulatoria titolo="Il contrasto con la teoria ondulatoria"}
Secondo la teoria di Maxwell la luce è un'onda che trasporta energia in modo continuo, e l'intensità dell'onda è proporzionale al quadrato dell'ampiezza del campo elettrico. Un'onda più intensa esercita sugli elettroni forze maggiori, quindi dovrebbe produrre elettroni più veloci. Un'onda di qualunque frequenza, se abbastanza intensa, dovrebbe inoltre estrarre elettroni. Entrambe le previsioni sono smentite dalle osservazioni.

Anche il tempo di emissione è in disaccordo con la teoria ondulatoria. Si consideri luce di intensità $1{,}0 \cdot 10^{-2}\,\mathrm{W/m^2}$ su un metallo che richiede $2{,}3\,\mathrm{eV} = 3{,}7 \cdot 10^{-19}\,\mathrm{J}$ per estrarre un elettrone. Se un elettrone raccoglie l'energia che arriva su un'area dell'ordine di quella di un atomo, $\pi \left( 1{,}0 \cdot 10^{-10}\,\mathrm{m} \right)^2 \approx 3{,}1 \cdot 10^{-20}\,\mathrm{m^2}$, riceve la potenza $3{,}1 \cdot 10^{-22}\,\mathrm{W}$, e accumula l'energia necessaria in
$$
\Delta t = \frac{3{,}7 \cdot 10^{-19}\,\mathrm{J}}{3{,}1 \cdot 10^{-22}\,\mathrm{W}} \approx 1{,}2 \cdot 10^{3}\,\mathrm{s} ,
$$
cioè in circa 20 minuti. L'emissione osservata è invece immediata.
:::

## Fotoni ed equazione di Einstein

:::teorema{#fotone titolo="Ipotesi dei fotoni di Einstein"}
Nel 1905 Einstein suppose che la luce di frequenza $f$ sia formata da pacchetti di energia, poi chiamati **fotoni**, ciascuno con energia
$$
E = h f = \frac{h c}{\lambda} .
$$
È un postulato, che estende l'ipotesi di Planck: l'energia della radiazione è quantizzata anche quando la radiazione si propaga, e un fotone viene assorbito o emesso tutto insieme. In un fascio di luce l'intensità è proporzionale al numero di fotoni che attraversano l'unità di superficie in un secondo. Un fotone di luce verde con $\lambda = 500\,\mathrm{nm}$ ha energia
$$
E = \frac{6{,}63 \cdot 10^{-34} \cdot 3{,}00 \cdot 10^{8}}{5{,}00 \cdot 10^{-7}}\,\mathrm{J} \approx 3{,}98 \cdot 10^{-19}\,\mathrm{J} \approx 2{,}49\,\mathrm{eV} ,
$$
e un laser che emette la potenza $1{,}0\,\mathrm{mW}$ a $650\,\mathrm{nm}$ emette $\dfrac{1{,}0 \cdot 10^{-3}}{3{,}06 \cdot 10^{-19}} \approx 3{,}3 \cdot 10^{15}$ fotoni al secondo.
:::

:::osservazione{#energia-fotone-ev titolo="Energia del fotone in elettronvolt"}
Nei calcoli con i fotoni si usa spesso il prodotto $hc = 6{,}63 \cdot 10^{-34} \cdot 3{,}00 \cdot 10^{8}\,\mathrm{J\cdot m} = 1{,}99 \cdot 10^{-25}\,\mathrm{J\cdot m}$. Dividendo per $1{,}60 \cdot 10^{-19}\,\mathrm{J/eV}$ e passando ai nanometri si ottiene $hc \approx 1{,}24 \cdot 10^{3}\,\mathrm{eV\cdot nm}$, quindi
$$
E\,(\text{in eV}) \approx \frac{1240}{\lambda\,(\text{in nm})} .
$$
I fotoni della luce visibile, tra $380\,\mathrm{nm}$ e $750\,\mathrm{nm}$, hanno quindi energie tra circa $3{,}3\,\mathrm{eV}$ e $1{,}7\,\mathrm{eV}$.
:::

:::definizione{#lavoro-di-estrazione titolo="Lavoro di estrazione"}
Gli elettroni di conduzione sono liberi di muoversi dentro il metallo, ma sono trattenuti dalla superficie. Il **lavoro di estrazione** $W_0$ è l'energia minima che occorre fornire a un elettrone per portarlo fuori dal metallo. Dipende dal metallo e si esprime di solito in elettronvolt. Valori indicativi sono: cesio $2{,}1\,\mathrm{eV}$, sodio $2{,}3\,\mathrm{eV}$, calcio $2{,}9\,\mathrm{eV}$, zinco $4{,}3\,\mathrm{eV}$, rame $4{,}7\,\mathrm{eV}$. Gli elettroni meno legati richiedono esattamente $W_0$; gli altri richiedono un'energia maggiore.
:::

:::teorema{#equazione-di-einstein titolo="Equazione di Einstein per l'effetto fotoelettrico"}
Quando un fotone di frequenza $f$ viene assorbito da un elettrone di un metallo con lavoro di estrazione $W_0$, l'energia cinetica massima dell'elettrone emesso è
$$
K_{\max} = h f - W_0 .
$$
L'equazione segue dall'ipotesi dei fotoni e dalla conservazione dell'energia. L'elettrone riceve tutta l'energia $hf$ del fotone e ne spende almeno $W_0$ per uscire dal metallo, quindi gli resta al più l'energia cinetica $hf - W_0$, che è il valore raggiunto dagli elettroni meno legati. Su una lastra di sodio ($W_0 = 2{,}30\,\mathrm{eV}$) illuminata con luce di $400\,\mathrm{nm}$, i fotoni hanno energia $\dfrac{1240}{400}\,\mathrm{eV} = 3{,}10\,\mathrm{eV}$, perciò $K_{\max} = 3{,}10\,\mathrm{eV} - 2{,}30\,\mathrm{eV} = 0{,}80\,\mathrm{eV}$ e il potenziale di arresto è $V_0 = 0{,}80\,\mathrm{V}$.
:::

:::definizione{#frequenza-di-soglia titolo="Frequenza e lunghezza d'onda di soglia"}
Un elettrone viene emesso solo se $K_{\max} \ge 0$, cioè se $hf \ge W_0$. La **frequenza di soglia** di un metallo è perciò
$$
f_0 = \frac{W_0}{h} ,
$$
e la corrispondente **lunghezza d'onda di soglia** è $\lambda_0 = \dfrac{c}{f_0} = \dfrac{hc}{W_0}$. L'effetto fotoelettrico avviene per $f \ge f_0$, cioè per $\lambda \le \lambda_0$. Per il sodio
$$
f_0 = \frac{2{,}30 \cdot 1{,}60 \cdot 10^{-19}}{6{,}63 \cdot 10^{-34}}\,\mathrm{Hz} \approx 5{,}55 \cdot 10^{14}\,\mathrm{Hz} ,
\qquad
\lambda_0 = \frac{3{,}00 \cdot 10^{8}}{5{,}55 \cdot 10^{14}}\,\mathrm{m} \approx 540\,\mathrm{nm} ,
$$
quindi la luce azzurra e violetta estrae elettroni dal sodio, la luce gialla e rossa no. Per lo zinco, con $W_0 = 4{,}3\,\mathrm{eV}$, la soglia è $\lambda_0 \approx 290\,\mathrm{nm}$, nell'ultravioletto, come nell'esperienza dell'elettroscopio.
:::

:::osservazione{#spiegazione-osservazioni titolo="Come l'ipotesi dei fotoni spiega le osservazioni"}
- Ogni elettrone assorbe un solo fotone. Se $hf < W_0$, nessun fotone ha energia sufficiente, e aumentare l'intensità aumenta il numero di fotoni senza cambiare l'energia di ciascuno; perciò sotto la frequenza di soglia non c'è emissione.
- L'energia cinetica massima $hf - W_0$ dipende dalla frequenza e non dal numero di fotoni, quindi non dipende dall'intensità.
- Il numero di elettroni emessi al secondo è proporzionale al numero di fotoni che arrivano al secondo, quindi la corrente di saturazione è proporzionale all'intensità.
- Un fotone cede la sua energia a un elettrone in un solo evento, perciò l'emissione inizia appena arriva il primo fotone.
:::

:::attenzione{#intensita-ed-energia}
L'intensità della luce e l'energia dei fotoni sono grandezze diverse. Raddoppiare l'intensità non raddoppia l'energia cinetica dei fotoelettroni. Per esempio, sul sodio, luce di $400\,\mathrm{nm}$ dà $K_{\max} = 0{,}80\,\mathrm{eV}$ qualunque sia la sua intensità; con intensità doppia raddoppia solo la corrente di saturazione. Per aumentare $K_{\max}$ occorre aumentare la frequenza.
:::

## Potenziale di arresto e misura della costante di Planck

::::teorema{#potenziale-arresto-frequenza titolo="Potenziale di arresto in funzione della frequenza"}
Per un metallo con lavoro di estrazione $W_0$, illuminato con luce di frequenza $f \ge f_0$, il potenziale di arresto è
$$
V_0 = \frac{h}{e}\, f - \frac{W_0}{e} .
$$
Il grafico di $V_0$ in funzione di $f$ è quindi una retta con pendenza $\dfrac{h}{e}$, che taglia l'asse delle frequenze nella frequenza di soglia $f_0$. La pendenza è la stessa per tutti i metalli e vale $\dfrac{6{,}63 \cdot 10^{-34}}{1{,}60 \cdot 10^{-19}}\,\mathrm{V\cdot s} \approx 4{,}14 \cdot 10^{-15}\,\mathrm{V\cdot s}$; cambia solo la frequenza di soglia. Per questo il grafico permette di misurare $h$.

::grafico{f="(x>=5.55?0.4144*x-2.30:NaN);(x>=10.38?0.4144*x-4.30:NaN)" segmenti="0,-2.3,5.55,0;0,-4.3,10.38,0" punti="5.55,0,pieno;10.38,0,pieno" etichette="5.2,0.45,f₀;10.1,0.45,f₀" xmin=-0.5 xmax=16.5 ymin=-5 ymax=5 nomi="f,V₀" legenda="\text{sodio};\text{zinco}" titolo="Potenziale di arresto $V_0$ in volt in funzione della frequenza $f$ in unità di $10^{14}\,\mathrm{Hz}$ per sodio e zinco: le rette sono parallele, con pendenza $\dfrac{h}{e}$, e tagliano l'asse delle frequenze nelle frequenze di soglia; il prolungamento tratteggiato taglia l'asse $V_0$ in $-\dfrac{W_0}{e}$"}

:::dimostrazione
Il potenziale di arresto e l'energia cinetica massima sono legati da $e V_0 = K_{\max}$. Per l'**equazione di Einstein** $K_{\max} = hf - W_0$, quindi
$$
e V_0 = h f - W_0 .
$$
Dividendo i due membri per $e$ si ottiene $V_0 = \dfrac{h}{e}\, f - \dfrac{W_0}{e}$. Ponendo $V_0 = 0$ si trova $f = \dfrac{W_0}{h} = f_0$, quindi la retta taglia l'asse delle frequenze nella frequenza di soglia.
:::
::::

:::esempio{#misura-di-h titolo="Misura di h da due punti della retta"}
Tra il 1914 e il 1916 Millikan misurò il potenziale di arresto di diversi metalli a varie frequenze. Trovò punti allineati su rette parallele, con una pendenza da cui ricavò un valore di $h$ in accordo con quello di Planck; l'equazione di Einstein risultò così confermata. Si supponga di misurare su un metallo $V_1 = 0{,}60\,\mathrm{V}$ con $f_1 = 7{,}0 \cdot 10^{14}\,\mathrm{Hz}$ e $V_2 = 1{,}84\,\mathrm{V}$ con $f_2 = 1{,}00 \cdot 10^{15}\,\mathrm{Hz}$. La pendenza della retta è $\dfrac{h}{e}$, quindi
$$
h = e\, \frac{V_2 - V_1}{f_2 - f_1} = 1{,}60 \cdot 10^{-19} \cdot \frac{1{,}84 - 0{,}60}{3{,}0 \cdot 10^{14}}\,\mathrm{J\cdot s} \approx 6{,}6 \cdot 10^{-34}\,\mathrm{J\cdot s} .
$$
Il lavoro di estrazione si ricava da un punto della retta: $\dfrac{W_0}{e} = \dfrac{h}{e}\, f_1 - V_1 \approx 2{,}89\,\mathrm{V} - 0{,}60\,\mathrm{V} \approx 2{,}3\,\mathrm{V}$, quindi $W_0 \approx 2{,}3\,\mathrm{eV}$, il valore del sodio.
:::

## Quantità di moto del fotone

:::richiamo{titolo="Energia e quantità di moto in relatività"}
Una particella di massa $m$, energia totale $E$ e quantità di moto $p$ soddisfa $E^2 = p^2 c^2 + m^2 c^4$. Per una particella di massa nulla la relazione diventa $E = pc$. Si rimanda all'argomento sulla relatività ristretta: dinamica ed energia.
:::

::::teorema{#quantita-di-moto-fotone titolo="Quantità di moto del fotone"}
Un fotone di lunghezza d'onda $\lambda$ ha una quantità di moto di modulo
$$
p = \frac{h}{\lambda} = \frac{h f}{c} ,
$$
diretta nel verso di propagazione della luce. Il fotone si muove alla velocità $c$, e una particella con massa non nulla non può raggiungerla; il fotone ha perciò massa nulla. La quantità di moto di un fotone di luce visibile è molto piccola: a $500\,\mathrm{nm}$ si ha
$$
p = \frac{6{,}63 \cdot 10^{-34}}{5{,}00 \cdot 10^{-7}}\,\mathrm{kg\cdot m/s} \approx 1{,}33 \cdot 10^{-27}\,\mathrm{kg\cdot m/s} .
$$
Da questa quantità di moto nasce la pressione di radiazione, per la quale si rimanda all'argomento sulle equazioni di Maxwell e onde elettromagnetiche: una superficie che assorbe $N$ fotoni al secondo riceve la forza media $N p$.

:::dimostrazione
Il fotone ha massa nulla, quindi per la relazione tra energia e quantità di moto $E = pc$. L'energia del fotone è $E = hf$, perciò
$$
p = \frac{E}{c} = \frac{h f}{c} .
$$
Poiché $c = \lambda f$, si ha $\dfrac{f}{c} = \dfrac{1}{\lambda}$, e quindi $p = \dfrac{h}{\lambda}$.
:::
::::

## Effetto Compton

:::osservazione{#esperimento-compton titolo="L'esperimento di Compton"}
Nel 1923 Compton inviò un fascio di raggi X di lunghezza d'onda $\lambda$ nota su un blocco di grafite e misurò la lunghezza d'onda della radiazione diffusa a vari angoli $\theta$ rispetto alla direzione del fascio. Oltre a radiazione con la stessa lunghezza d'onda $\lambda$, trovò radiazione con lunghezza d'onda $\lambda' > \lambda$. La differenza $\lambda' - \lambda$ cresce con l'angolo di diffusione e non dipende dal materiale del bersaglio. Secondo la teoria ondulatoria gli elettroni del bersaglio oscillano con la frequenza dell'onda incidente e riemettono radiazione della stessa frequenza, quindi la variazione di lunghezza d'onda non ha una spiegazione classica. Compton la spiegò come un urto tra un fotone e un elettrone libero, con la conservazione dell'energia e della quantità di moto.
:::

:::richiamo{titolo="Conservazione dell'energia e della quantità di moto in relatività"}
In un sistema isolato l'energia totale e il vettore quantità di moto si conservano. Un elettrone di massa $m_e$ fermo ha energia $m_e c^2$; dopo l'urto, con quantità di moto di modulo $p_e$, ha energia $E_e$ tale che $E_e^2 = p_e^2 c^2 + m_e^2 c^4$. Si rimanda all'argomento sulla relatività ristretta: dinamica ed energia.
:::

::::teorema{#formula-compton titolo="Formula di Compton"}
Un fotone di lunghezza d'onda $\lambda$ urta un elettrone libero e fermo e viene diffuso con l'angolo $\theta$ rispetto alla direzione iniziale. La lunghezza d'onda $\lambda'$ del fotone diffuso soddisfa
$$
\Delta\lambda = \lambda' - \lambda = \frac{h}{m_e c}\,(1 - \cos\theta) .
$$
La variazione di lunghezza d'onda dipende solo dall'angolo di diffusione: è nulla per $\theta = 0^\circ$, vale $\dfrac{h}{m_e c}$ per $\theta = 90^\circ$ e raggiunge il massimo $\dfrac{2h}{m_e c}$ per $\theta = 180^\circ$, quando il fotone torna indietro. Il fotone diffuso ha lunghezza d'onda maggiore, quindi energia minore; l'energia persa dal fotone diventa energia cinetica dell'elettrone.

::grafico{assi=0 uguale=1 vettori="-3,0,-0.12,0,λ;0,0,1.92,1.61,λ′;0,0,1.64,-1.15,e⁻" segmenti="0,0,2.8,0" curve="0.8*cos(t),0.8*sin(t),0,0.698;0.6*cos(t),0.6*sin(t),-0.611,0" punti="0,0,pieno" etichette="1.0,0.35,θ;0.85,-0.25,φ" xmin=-3.3 xmax=3 ymin=-1.6 ymax=2 legenda=0 titolo="Effetto Compton: il fotone di lunghezza d'onda $\lambda$ urta l'elettrone fermo, il fotone diffuso con l'angolo $\theta$ ha lunghezza d'onda $\lambda'$, e l'elettrone parte con l'angolo $\varphi$ dall'altra parte della direzione iniziale"}

:::dimostrazione
L'idea è scrivere le due leggi di conservazione ed eliminare le grandezze dell'elettrone, che non si misurano. Siano $p = \dfrac{h}{\lambda}$ e $p' = \dfrac{h}{\lambda'}$ i moduli delle quantità di moto del fotone prima e dopo l'urto; le energie del fotone sono $pc$ e $p'c$.

La **conservazione dell'energia** dà $pc + m_e c^2 = p'c + E_e$, quindi l'energia dell'elettrone dopo l'urto è
$$
E_e = c\,(p - p') + m_e c^2 .
$$
Si fissa l'asse $x$ nella direzione del fotone incidente e l'asse $y$ nel piano dell'urto, dalla parte del fotone diffuso. La **conservazione della quantità di moto** dà $\vec{p} = \vec{p}\,' + \vec{p}_e$, cioè $\vec{p}_e = \vec{p} - \vec{p}\,'$. In componenti
$$
p_{e,x} = p - p' \cos\theta ,
\qquad
p_{e,y} = -p' \sin\theta ,
$$
e il quadrato del modulo è
$$
\begin{aligned}
p_e^2 &= (p - p' \cos\theta)^2 + (p' \sin\theta)^2 \\[6pt]
&= p^2 - 2 p p' \cos\theta + p'^2 \cos^2\theta + p'^2 \sin^2\theta \\[6pt]
&= p^2 + p'^2 - 2 p p' \cos\theta ,
\end{aligned}
$$
perché $\cos^2\theta + \sin^2\theta = 1$. Si sostituiscono ora $E_e$ e $p_e^2$ nella relazione $E_e^2 = p_e^2 c^2 + m_e^2 c^4$:
$$
\left[ c\,(p - p') + m_e c^2 \right]^2 = c^2 \left( p^2 + p'^2 - 2 p p' \cos\theta \right) + m_e^2 c^4 .
$$
Sviluppando il quadrato al primo membro si ottiene
$$
c^2 \left( p^2 - 2 p p' + p'^2 \right) + 2 m_e c^3 (p - p') + m_e^2 c^4 = c^2 \left( p^2 + p'^2 - 2 p p' \cos\theta \right) + m_e^2 c^4 .
$$
I termini $c^2 p^2$, $c^2 p'^2$ e $m_e^2 c^4$ compaiono nei due membri e si semplificano, quindi resta
$$
-2 c^2 p p' + 2 m_e c^3 (p - p') = -2 c^2 p p' \cos\theta .
$$
Portando $-2c^2 pp'$ al secondo membro e dividendo per $2c^2$ si ha
$$
m_e c\,(p - p') = p p' (1 - \cos\theta) .
$$
Si dividono i due membri per $m_e c\, p p'$. Poiché $\dfrac{p - p'}{p p'} = \dfrac{1}{p'} - \dfrac{1}{p}$, si ottiene
$$
\frac{1}{p'} - \frac{1}{p} = \frac{1 - \cos\theta}{m_e c} .
$$
Infine $\dfrac{1}{p} = \dfrac{\lambda}{h}$ e $\dfrac{1}{p'} = \dfrac{\lambda'}{h}$, perciò $\dfrac{\lambda' - \lambda}{h} = \dfrac{1 - \cos\theta}{m_e c}$; moltiplicando per $h$ si ottiene la formula di Compton.
:::
::::

:::definizione{#lunghezza-onda-compton titolo="Lunghezza d'onda Compton"}
La costante che compare nella formula di Compton si chiama **lunghezza d'onda Compton** dell'elettrone:
$$
\lambda_C = \frac{h}{m_e c} = \frac{6{,}63 \cdot 10^{-34}}{9{,}11 \cdot 10^{-31} \cdot 3{,}00 \cdot 10^{8}}\,\mathrm{m} \approx 2{,}43 \cdot 10^{-12}\,\mathrm{m} = 2{,}43\,\mathrm{pm} .
$$
È la variazione di lunghezza d'onda di un fotone diffuso a $90^\circ$, e la formula si scrive $\Delta\lambda = \lambda_C (1 - \cos\theta)$. Per raggi X con $\lambda = 50{,}0\,\mathrm{pm}$ diffusi a $90^\circ$ si ha $\lambda' = 52{,}4\,\mathrm{pm}$. L'energia del fotone passa da $\dfrac{hc}{\lambda} \approx 24{,}9\,\mathrm{keV}$ a $\dfrac{hc}{\lambda'} \approx 23{,}7\,\mathrm{keV}$, e l'elettrone acquista l'energia cinetica $hc \left( \dfrac{1}{\lambda} - \dfrac{1}{\lambda'} \right) \approx 1{,}15\,\mathrm{keV}$.
:::

:::osservazione{#compton-e-luce-visibile titolo="Perché si usano i raggi X"}
La variazione $\Delta\lambda$ non dipende da $\lambda$ ed è al massimo $2\lambda_C \approx 4{,}85\,\mathrm{pm}$. Per la luce visibile, con $\lambda = 500\,\mathrm{nm}$, la variazione relativa è al più $\dfrac{4{,}85 \cdot 10^{-12}}{5{,}00 \cdot 10^{-7}} \approx 9{,}7 \cdot 10^{-6}$, troppo piccola per essere misurata con gli spettrometri dell'epoca. Per raggi X di qualche decina di picometri la variazione relativa è di qualche percento e si misura bene. L'energia dei fotoni X, di decine di keV, è inoltre molto maggiore dell'energia che lega gli elettroni esterni agli atomi della grafite, quindi questi elettroni si possono considerare liberi e fermi.

La radiazione diffusa con la lunghezza d'onda iniziale $\lambda$ è dovuta agli elettroni legati più strettamente: il fotone urta in pratica l'intero atomo, e al posto di $m_e$ compare la massa dell'atomo, migliaia di volte più grande, che rende $\Delta\lambda$ trascurabile.
:::

## Dualismo onda-corpuscolo

:::osservazione{#dualismo-onda-corpuscolo titolo="Dualismo onda-corpuscolo della luce"}
L'interferenza e la diffrazione della luce si spiegano con le onde elettromagnetiche e non con le particelle. L'effetto fotoelettrico e l'effetto Compton si spiegano invece con i fotoni, che hanno energia $hf$ e quantità di moto $\dfrac{h}{\lambda}$ e scambiano queste grandezze con gli elettroni come particelle in un urto. La luce ha quindi un comportamento ondulatorio e un comportamento corpuscolare, e quale dei due si osserva dipende dall'esperimento. Questo fatto si chiama **dualismo onda-corpuscolo**.

Le due descrizioni sono legate dalle relazioni $E = hf$ e $p = \dfrac{h}{\lambda}$, che a sinistra contengono grandezze di una particella e a destra grandezze di un'onda. La costante di Planck fissa la scala alla quale il comportamento corpuscolare diventa visibile: un fascio di luce di $1{,}0\,\mathrm{mW}$ contiene circa $10^{15}$ fotoni al secondo, e per questo nella vita quotidiana la luce appare come un'onda continua.
:::

:::esempio{#interferenza-fotoni titolo="Interferenza con pochi fotoni"}
In un esperimento della doppia fenditura si riduce l'intensità della luce finché arriva in media un fotone alla volta, e al posto dello schermo si usa un rivelatore che registra i singoli arrivi. Ogni fotone viene rivelato in un solo punto, come una particella. Dopo migliaia di arrivi i punti formano però le frange di interferenza previste dalla teoria ondulatoria. L'onda determina quindi la probabilità che il fotone arrivi in ciascun punto. Lo stesso dualismo vale per gli elettroni e le altre particelle, come si vedrà nell'argomento sull'atomo di Bohr, le onde di materia e il principio di indeterminazione.
:::
