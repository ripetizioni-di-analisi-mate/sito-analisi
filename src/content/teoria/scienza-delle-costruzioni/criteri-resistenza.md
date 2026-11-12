---
titolo: Criteri di resistenza per stati di tensione
sommario: Si confrontano Tresca, von Mises, Rankine e Coulomb–Mohr e si calcola il fattore di sicurezza lungo percorsi di carico proporzionali.
---

## Dal tensore di tensione alle tensioni principali

:::definizione{#tensioni-principali titolo="Tensioni principali e convenzione dei segni"}
Per descrivere lo stato di tensione in un punto si usa il tensore simmetrico $\boldsymbol{\sigma}$. Le **tensioni principali** sono i suoi autovalori reali. Si ordinano come $\sigma_1\geq\sigma_2\geq\sigma_3$. La trazione è positiva e la compressione negativa. L’ordinamento riguarda i valori algebrici, quindi se le tre tensioni sono negative la più compressiva è $\sigma_3$.

Su una faccia con normale in una direzione principale, il vettore di tensione è parallelo alla normale. Su quella faccia la componente tangenziale è quindi nulla. Il passaggio alle direzioni principali permette di descrivere lo stesso stato con tre valori, indipendenti dagli assi iniziali. I criteri isotropi trattati qui usano quei valori perché il limite del materiale è assunto uguale in tutte le direzioni.

In uno stato piano di tensione, le sole componenti eventualmente diverse da zero sono $\sigma_x$, $\sigma_y$ e $\tau_{xy}$. La direzione $z$ è già principale e le corrisponde il valore zero. Le altre due tensioni si ricavano dal centro $m$ e dal raggio $R$ del cerchio di Mohr nel piano.
$$
m=\frac{\sigma_x+\sigma_y}{2},\qquad
R=\sqrt{\left(\frac{\sigma_x-\sigma_y}{2}\right)^2+\tau_{xy}^2}.
$$
Si ottengono $m+R$ e $m-R$. Per applicare un criterio tridimensionale si ordina la terna composta da questi due valori e dallo zero. Se i due valori piani sono positivi, lo zero è il valore più piccolo. Se sono negativi, lo zero è il più grande. Se hanno segno opposto, lo zero sta fra i due.
:::

:::esempio{titolo="Uno stato piano con tre valori distinti"}
Siano $\sigma_x=60\,\mathrm{MPa}$, $\sigma_y=20\,\mathrm{MPa}$ e $\tau_{xy}=15\,\mathrm{MPa}$. Il centro vale $40\,\mathrm{MPa}$ e il raggio vale $25\,\mathrm{MPa}$, perché $\sqrt{20^2+15^2}=25$. Le tensioni nel piano sono $65\,\mathrm{MPa}$ e $15\,\mathrm{MPa}$. La terna ordinata è quindi $(65,15,0)\,\mathrm{MPa}$. La differenza principale più grande è $65\,\mathrm{MPa}$, che coinvolge la direzione fuori dal piano.

::struttura{poligoni="-1,-1 1,-1 1,1 -1,1" frecce="1,0,1.85,0,σ_x;-1,0,-1.85,0,;0,1,0,1.6,σ_y;0,-1,0,-1.6,;1.16,-0.55,1.16,0.55,τ_xy;-1.16,0.55,-1.16,-0.55,;-0.55,1.16,0.55,1.16,;0.55,-1.16,-0.55,-1.16," titolo="Componenti normali e tangenziali di uno stato piano"}
:::

:::osservazione{titolo="Orientamento delle facce principali"}
Nel piano, la normale di una faccia forma un angolo $\theta$ con l’asse $x$. Proiettando il vettore di tensione sulla normale, si ottiene
$$
\sigma_n=\sigma_x\cos^2\theta+2\tau_{xy}\sin\theta\cos\theta+\sigma_y\sin^2\theta.
$$
Usando le formule dell’angolo doppio, il termine variabile diventa $\dfrac{\sigma_x-\sigma_y}{2}\cos(2\theta)+\tau_{xy}\sin(2\theta)$. Il suo massimo è il modulo del vettore con componenti $\dfrac{\sigma_x-\sigma_y}{2}$ e $\tau_{xy}$. Questa è un’altra lettura del raggio $R$. Nell’esempio, la faccia su cui si ha $\sigma_n=65\,\mathrm{MPa}$ soddisfa $\cos(2\theta)=\dfrac{4}{5}$ e $\sin(2\theta)=\dfrac{3}{5}$. La sua normale forma circa $18{,}4^\circ$ con l’asse $x$. La seconda direzione principale nel piano è perpendicolare alla prima, quindi la rotazione di $90^\circ$ scambia i due valori principali.
:::

:::attenzione{titolo="Tensione piana e deformazione piana"}
La tensione principale fuori dal piano vale zero nello stato piano di tensione. Se è lo spostamento lungo $z$ a essere impedito, il modello può essere invece di deformazione piana. Con materiale isotropo lineare e senza deformazioni imposte, $\varepsilon_z=0$ implica $\sigma_z=\nu(\sigma_x+\sigma_y)$, dove $\nu$ è il coefficiente di Poisson. Se $\sigma_x=90\,\mathrm{MPa}$, $\sigma_y=30\,\mathrm{MPa}$ e $\nu=0{,}25$, si ricava $\sigma_z=30\,\mathrm{MPa}$. In assenza di taglio, la terna è quindi $(90,30,30)\,\mathrm{MPa}$. Il valore ottenuto per von Mises è $60\,\mathrm{MPa}$. Sostituire arbitrariamente lo zero alla terza tensione darebbe invece $30\sqrt7\,\mathrm{MPa}$. Prima di applicare il criterio si identifica quindi quale grandezza è nulla nel modello.
:::

:::esempio{titolo="Provino d’acciaio dopo la prova di trazione"}
La riduzione localizzata del diametro nella zona di rottura si chiama strizione. La prova permette di distinguere l’inizio della deformazione plastica dal cedimento finale. I criteri di Tresca e von Mises trattati nel capitolo usano come soglia lo snervamento, che si legge dalla prova prima della strizione.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/strizione-provino.webp" alt="Provino cilindrico d’acciaio con riduzione localizzata della sezione nella zona di rottura" width="1280" height="1004" loading="lazy" decoding="async"><figcaption>Provino d’acciaio dopo la prova di trazione. Foto ridimensionata di <a href="https://commons.wikimedia.org/wiki/File:Proba_rozciagania_stal_probka_2.jpg">Andrzej Otrębski</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</figcaption></figure>
:::

## I tre cerchi di Mohr

:::definizione{#cerchi-mohr-tridimensionali titolo="Cerchi associati alle coppie principali"}
Nel piano di Mohr si rappresenta la tensione normale $\sigma_n$ sull’asse orizzontale e quella tangenziale $\tau$ sull’asse verticale. Ogni coppia di tensioni principali $\sigma_i,\sigma_j$ individua un cerchio con centro $c_{ij}=\dfrac{\sigma_i+\sigma_j}{2}$ e raggio $r_{ij}=\dfrac{|\sigma_i-\sigma_j|}{2}$. I suoi estremi sull’asse orizzontale sono i due valori principali. Per una terna ordinata, il cerchio della coppia $(1,3)$ ha il diametro maggiore, perché $\sigma_1-\sigma_3$ comprende gli altri due intervalli.

Il cerchio della coppia $(1,3)$ descrive gli stati sulle facce la cui normale appartiene al piano delle direzioni principali $1$ e $3$. Sugli altri piani, la coppia $(\sigma_n,|\tau|)$ può occupare anche punti interni alla regione delimitata dai tre cerchi. Il massimo taglio nello stato tridimensionale è comunque il raggio del cerchio esterno. Il valore si raggiunge su una faccia con normale a metà fra le due direzioni principali estreme.
:::

:::esempio{titolo="Il cerchio esterno e il massimo taglio"}
Per la terna $(90,30,-30)\,\mathrm{MPa}$, i tre diametri sono $60\,\mathrm{MPa}$, $60\,\mathrm{MPa}$ e $120\,\mathrm{MPa}$. Il centro del cerchio esterno è a $30\,\mathrm{MPa}$. Nel punto più alto di quel cerchio si leggono quindi $\sigma_n=30\,\mathrm{MPa}$ e $\tau=60\,\mathrm{MPa}$. Le due componenti appartengono alla stessa faccia, che ha normale a $45^\circ$ fra le direzioni principali estreme.

::grafico{curve="30+60*cos(t),60*sin(t),0,6.2831853;60+30*cos(t),30*sin(t),0,6.2831853;30*cos(t),30*sin(t),0,6.2831853" xmin=-48 xmax=112 ymin=-72 ymax=72 uguale=1 nomi="σ,τ" legenda="(1,3);(1,2);(2,3)" punti="30,60,pieno,P" titolo="Tre cerchi di Mohr per le tensioni 90, 30 e −30 MPa"}
:::

:::attenzione{titolo="Taglio massimo nel piano e nello spazio"}
Il massimo taglio sulle facce con normale nel piano $xy$ può differire dal massimo taglio su tutte le facce. Per la terna $(65,15,0)\,\mathrm{MPa}$, i valori nel piano sono $65\,\mathrm{MPa}$ e $15\,\mathrm{MPa}$. Il cerchio della coppia nel piano ha raggio $25\,\mathrm{MPa}$. Il cerchio esterno ha invece estremi $65\,\mathrm{MPa}$ e $0$, quindi il suo raggio è $32{,}5\,\mathrm{MPa}$. Si raggiunge il secondo valore con una normale nel piano della prima direzione principale e della direzione $z$. Il calcolo del massimo taglio nello spazio richiede perciò l’inclusione della tensione principale fuori dal piano.
:::

## Il criterio di Tresca

::::teorema{#criterio-tresca titolo="Snervamento secondo Tresca"}
Il **criterio di Tresca** assume che lo snervamento di un materiale duttile isotropo inizi quando la massima tensione tangenziale raggiunge il valore che si ha allo snervamento in trazione monoassiale. Se $f_y$ è la tensione di snervamento in quella prova, il limite tangenziale è $\dfrac{f_y}{2}$. Si definisce la tensione equivalente
$$
\sigma_{\mathrm{eq,T}}=2\tau_{\max}=\sigma_1-\sigma_3.
$$
La soglia del criterio è $\sigma_{\mathrm{eq,T}}=f_y$. L’indice di utilizzo è $\eta_T=\dfrac{\sigma_{\mathrm{eq,T}}}{f_y}$.

:::dimostrazione
Nella base principale, una faccia ha normale unitaria con componenti $n_i$. Ponendo $w_i=n_i^2$ si ha $\sum_iw_i=1$. La tensione normale è $m_n=\sum_iw_i\sigma_i$ e il quadrato della componente tangenziale è $\sum_iw_i\sigma_i^2-m_n^2$. Per ogni $\sigma_i$ dell’intervallo $[\sigma_3,\sigma_1]$ vale $(\sigma_1-\sigma_i)(\sigma_i-\sigma_3)\geq0$. Sviluppando, moltiplicando per $w_i$ e sommando si ottiene
$$
\sum_iw_i\sigma_i^2\leq(\sigma_1+\sigma_3)m_n-\sigma_1\sigma_3.
$$
Ne segue $\tau^2\leq(\sigma_1-m_n)(m_n-\sigma_3)$. Il prodotto ha massimo $\dfrac{(\sigma_1-\sigma_3)^2}{4}$ quando $m_n=\dfrac{\sigma_1+\sigma_3}{2}$. La scelta $w_1=w_3=\dfrac{1}{2}$ e $w_2=0$ realizza l’uguaglianza. In trazione monoassiale allo snervamento la terna è $(f_y,0,0)$, quindi il massimo taglio vale $\dfrac{f_y}{2}$.
:::
::::

:::esempio{titolo="Taglio puro secondo Tresca"}
In taglio puro, con tensione tangenziale di modulo $t$, le tensioni principali sono $t$, $0$ e $-t$. Il cerchio esterno ha centro nell’origine e raggio $t$. Di conseguenza $\sigma_{\mathrm{eq,T}}=2t$. Se $f_y=240\,\mathrm{MPa}$, il criterio raggiunge la soglia per $t=120\,\mathrm{MPa}$. Il taglio puro evidenzia perché il valore tangenziale non va confrontato direttamente con il limite della prova a trazione.

::grafico{curve="120*cos(t),120*sin(t),0,6.2831853" xmin=-140 xmax=140 ymin=-136 ymax=136 uguale=1 nomi="σ,τ" legenda="\tau_{\max}=120" punti="0,120,pieno,P" titolo="Cerchio esterno al limite di Tresca in taglio puro"}
:::

:::esempio{titolo="Tensioni principali tutte compressive"}
Una terna ordinata può essere composta soltanto da valori negativi. Con $(-30,-50,-110)\,\mathrm{MPa}$, l’estremo superiore è $-30\,\mathrm{MPa}$ e quello inferiore è $-110\,\mathrm{MPa}$. La differenza è $80\,\mathrm{MPa}$, quindi l’equivalente di Tresca vale $80\,\mathrm{MPa}$. Per un limite $f_y=200\,\mathrm{MPa}$, l’indice è $\dfrac{2}{5}$. La pressione media è compressiva, ma la distanza fra gli estremi genera taglio sui piani inclinati. Se si scambiassero gli estremi ordinandoli per modulo, si perderebbe il legame fra il diametro del cerchio e la differenza algebrica.
:::

## Il criterio di von Mises

::::teorema{#criterio-von-mises titolo="Snervamento secondo von Mises"}
Il **criterio di von Mises** assume che la soglia sia governata dalla parte deviatorica del tensore di tensione, ossia dalla parte che resta sottraendo la tensione media a ogni componente principale. L’equivalente di von Mises è
$$
\sigma_{\mathrm{eq,V}}=
\sqrt{\frac{
(\sigma_1-\sigma_2)^2+
(\sigma_2-\sigma_3)^2+
(\sigma_3-\sigma_1)^2}{2}}.
$$
La soglia è $\sigma_{\mathrm{eq,V}}=f_y$. L’indice di utilizzo è $\eta_V=\dfrac{\sigma_{\mathrm{eq,V}}}{f_y}$.

:::dimostrazione
Sia $\bar\sigma=\dfrac{\sigma_1+\sigma_2+\sigma_3}{3}$ la tensione media. Il deviatore è $\boldsymbol{s}=\boldsymbol{\sigma}-\bar\sigma\boldsymbol I$, dove $\boldsymbol I$ è il tensore identità. Il secondo invariante deviatorico si definisce come $J_2=\dfrac{\operatorname{tr}(\boldsymbol{s}^2)}{2}$. Nelle direzioni principali, la traccia del quadrato è la somma dei quadrati di $\sigma_i-\bar\sigma$. In trazione monoassiale di intensità $f_y$, questi scarti valgono $\dfrac{2f_y}{3}$, $-\dfrac{f_y}{3}$ e $-\dfrac{f_y}{3}$, quindi $J_2=\dfrac{f_y^2}{3}$. Ne segue che $\sqrt{3J_2}$ è l’equivalente normalizzato sulla prova monoassiale. Sviluppando i quadrati degli scarti dalla media si ottiene la formula con le differenze principali.
:::
::::

:::esempio{titolo="Trazione e taglio nello stesso punto"}
Per uno stato piano di tensione, la formula si può scrivere direttamente nelle componenti iniziali.
$$
\sigma_{\mathrm{eq,V}}
=\sqrt{\sigma_x^2-\sigma_x\sigma_y+\sigma_y^2+3\tau_{xy}^2}.
$$
La formula segue sostituendo nella forma in invarianti la traccia del tensore $\sigma_x+\sigma_y$ e la traccia del suo quadrato $\sigma_x^2+\sigma_y^2+2\tau_{xy}^2$. Con $\sigma_x=80\,\mathrm{MPa}$, $\sigma_y=0$ e $\tau_{xy}=40\,\mathrm{MPa}$ si ottiene $\sigma_{\mathrm{eq,V}}=\sqrt{80^2+3\cdot40^2}\,\mathrm{MPa}=40\sqrt7\,\mathrm{MPa}$. Il taglio contribuisce al risultato anche se la tensione normale lungo $y$ è nulla.

::struttura{poligoni="-1,-1 1,-1 1,1 -1,1" frecce="1,0,1.8,0,σ_x;-1,0,-1.8,0,;1.16,-0.55,1.16,0.55,τ_xy;-1.16,0.55,-1.16,-0.55,;-0.55,1.16,0.55,1.16,;0.55,-1.16,-0.55,-1.16," titolo="Trazione lungo x combinata con taglio positivo"}
:::

:::osservazione{titolo="Energia elastica di distorsione"}
Per un materiale isotropo lineare, la parte deviatorica della deformazione è $\boldsymbol e=\dfrac{\boldsymbol s}{2G}$, dove $G$ è il modulo di taglio. L’energia elastica per unità di volume associata alla distorsione vale $\dfrac12\boldsymbol{s}:\boldsymbol e$. Il simbolo $:$ indica la somma dei prodotti fra le componenti corrispondenti dei due tensori. Poiché $\boldsymbol s$ è simmetrico, $\boldsymbol s:\boldsymbol s=\operatorname{tr}(\boldsymbol s^2)$. Ne segue che l’energia di distorsione è $\dfrac{J_2}{2G}$. La soglia di von Mises equivale quindi a fissare un valore di tale energia, dopo la taratura monoassiale. Una variazione di tensione idrostatica cambia il contributo volumetrico e lascia invariata l’energia di distorsione.
:::

## La parte idrostatica e il confronto tra i criteri duttili

:::definizione{#parte-deviatorica titolo="Parte idrostatica e parte deviatorica"}
Una tensione uguale nelle tre direzioni è detta **idrostatica**. Se alle tensioni principali si somma lo stesso valore $h$, ogni differenza $\sigma_i-\sigma_j$ rimane uguale. Di conseguenza i raggi dei cerchi di Mohr, l’equivalente di Tresca e l’equivalente di von Mises restano invariati. Cambiano invece la tensione media e le tensioni normali sui singoli piani.

Per esempio, passando da $(90,30,-30)\,\mathrm{MPa}$ a $(120,60,0)\,\mathrm{MPa}$ si aggiungono $30\,\mathrm{MPa}$ a tutte le direzioni. Il centro del cerchio esterno passa da $30\,\mathrm{MPa}$ a $60\,\mathrm{MPa}$, mentre il raggio resta $60\,\mathrm{MPa}$. Il disegno mostra la traslazione orizzontale, che lascia invariata l’altezza massima raggiunta da entrambi i cerchi.

::grafico{curve="30+60*cos(t),60*sin(t),0,6.2831853;60+60*cos(t),60*sin(t),0,6.2831853" xmin=-42 xmax=130 ymin=-70 ymax=70 uguale=1 nomi="σ,τ" legenda="\mathrm{stato\ iniziale};\mathrm{incremento\ idrostatico}" titolo="I cerchi traslano di 30 MPa e mantengono il raggio"}
:::

::::teorema{#confronto-criteri titolo="Intervallo tra le equivalenti di Tresca e von Mises"}
Per ogni terna ordinata di tensioni principali vale
$$
\frac{\sqrt3}{2}\sigma_{\mathrm{eq,T}}
\leq\sigma_{\mathrm{eq,V}}
\leq\sigma_{\mathrm{eq,T}}.
$$
A parità di limite monoassiale, Tresca raggiunge quindi la soglia per un moltiplicatore di carico minore o uguale a quello di von Mises.

:::dimostrazione
Si pongano $a=\sigma_1-\sigma_2$ e $b=\sigma_2-\sigma_3$. Sono entrambi non negativi. Sostituendo nelle formule, $\sigma_{\mathrm{eq,T}}=a+b$ e $\sigma_{\mathrm{eq,V}}^2=a^2+ab+b^2=(a+b)^2-ab$. Poiché $ab\geq0$, si ottiene il limite superiore. Inoltre $4ab\leq(a+b)^2$, perché $(a-b)^2\geq0$. Sostituendo questo limite del prodotto si ottiene il limite inferiore. Il limite superiore si raggiunge se due tensioni principali coincidono. Quello inferiore si raggiunge se la tensione intermedia è la media delle altre due.
:::
::::

:::osservazione{titolo="Inviluppi nello stato piano"}
Se le due tensioni principali nel piano sono $\sigma_A$ e $\sigma_B$, si usano le coordinate adimensionali $x=\dfrac{\sigma_A}{f_y}$ e $y=\dfrac{\sigma_B}{f_y}$. La terza tensione è nulla. Tresca impone insieme $|x|\leq1$, $|y|\leq1$ e $|x-y|\leq1$, quindi il suo dominio è esagonale. La soglia di von Mises dà l’ellisse $x^2-xy+y^2=1$. In taglio puro si ha $y=-x$. Perciò la soglia di Tresca è $|x|=\dfrac{1}{2}$, mentre quella di von Mises è $|x|=\dfrac{1}{\sqrt3}$.

::grafico{curve="cos(t)+sin(t)/sqrt(3),cos(t)-sin(t)/sqrt(3),0,6.2831853" linee="-1,-1 0,-1 1,0 1,1 0,1 -1,0 -1,-1" xmin=-1.4 xmax=1.4 ymin=-1.4 ymax=1.4 uguale=1 legenda="\mathrm{von\ Mises}" titolo="Assi normalizzati, ellisse di von Mises ed esagono di Tresca"}
:::

:::esempio{titolo="Confronto in taglio puro"}
Si consideri uno stato di taglio puro con $t=130\,\mathrm{MPa}$ e $f_y=240\,\mathrm{MPa}$. Tresca dà $2t=260\,\mathrm{MPa}$, quindi l’indice supera uno. Von Mises dà $\sqrt3\,t\simeq225{,}17\,\mathrm{MPa}$ e il suo indice resta inferiore a uno. La differenza è compatibile con la disuguaglianza fra le due equivalenti. Entrambi i criteri coincidono nella prova monoassiale usata per tarare $f_y$. Nello stato con taglio puro la tensione principale intermedia è la media delle estreme, quindi il rapporto $\dfrac{\sigma_{\mathrm{eq,V}}}{\sigma_{\mathrm{eq,T}}}$ raggiunge il limite inferiore $\dfrac{\sqrt3}{2}$. La scelta del modello incide quindi sul giudizio per stati intermedi vicini alla soglia.
:::

## Il criterio di Rankine

:::definizione{#criterio-rankine titolo="Massima tensione normale secondo Rankine"}
Il **criterio di Rankine** confronta la massima tensione principale positiva e il modulo della più compressiva con due limiti monoassiali distinti. Si indicano con $f_t>0$ il limite a trazione e con $f_c>0$ il modulo del limite a compressione. Il segno della tensione di rottura in compressione è dunque $-f_c$. L’indice di utilizzo è
$$
\eta_R=\max\left(\frac{\sigma_1}{f_t},-\frac{\sigma_3}{f_c},0\right).
$$
La soglia è $\eta_R=1$. Se l’indice è inferiore a uno, lo stato è interno al dominio del criterio. Il confronto richiede i valori principali. In presenza di taglio, una tensione principale di trazione può comparire anche quando tutte le componenti normali iniziali sono compressive.

In stato piano, il dominio si ottiene chiedendo che entrambe le tensioni principali nel piano appartengano all’intervallo $[-f_c,f_t]$. Il dominio è quindi un quadrato nel piano delle tensioni principali, traslato se i due limiti hanno moduli diversi. Il bordo destro rappresenta il raggiungimento del limite a trazione della tensione riportata sull’asse orizzontale. Il bordo inferiore rappresenta il limite a compressione della tensione riportata sull’asse verticale.

::grafico{linee="-120,-120 40,-120 40,40 -120,40 -120,-120" punti="24,-48,pieno,E;-15,-72,pieno,F" xmin=-140 xmax=60 ymin=-140 ymax=60 uguale=1 nomi="a,b" titolo="Dominio di Rankine con a = σ_A e b = σ_B in MPa"}
:::

:::esempio{titolo="Quale estremo governa"}
Per la terna $(24,0,-48)\,\mathrm{MPa}$ e i limiti $f_t=40\,\mathrm{MPa}$ e $f_c=120\,\mathrm{MPa}$, il rapporto di trazione è $\dfrac{3}{5}$ e quello di compressione è $\dfrac{2}{5}$. Il primo è maggiore, quindi l’indice è $\dfrac{3}{5}$. La compressione ha modulo maggiore della trazione, ma il suo limite è tre volte maggiore. Il criterio confronta quindi rapporti rispetto ai limiti pertinenti a ciascun segno.
:::

:::esempio{titolo="Compressione normale e trazione principale"}
Siano $\sigma_x=\sigma_y=-10\,\mathrm{MPa}$ e $\tau_{xy}=35\,\mathrm{MPa}$. Il centro del cerchio di Mohr vale $-10\,\mathrm{MPa}$ e il raggio vale $35\,\mathrm{MPa}$. La terna ordinata è quindi $(25,0,-45)\,\mathrm{MPa}$. Con $f_t=30\,\mathrm{MPa}$ e $f_c=150\,\mathrm{MPa}$, il rapporto di trazione è $\dfrac{5}{6}$ e quello di compressione è $\dfrac{3}{10}$. L’indice di Rankine è $\dfrac{5}{6}$. In questo caso governa la trazione principale prodotta dal taglio, anche se le due tensioni normali sugli assi iniziali erano compressive. In una verifica con Rankine occorre quindi diagonalizzare il tensore o ricavare i due estremi del cerchio.
:::

## Il criterio di Coulomb–Mohr

::::teorema{#criterio-coulomb-mohr titolo="Inviluppo di Coulomb–Mohr per materiali fragili"}
Nella forma qui usata, il **criterio di Coulomb–Mohr** combina i due limiti monoassiali $f_t$ e $f_c$. Per stati completamente di trazione, l’indice è $\dfrac{\sigma_1}{f_t}$. Per stati completamente di compressione è $-\dfrac{\sigma_3}{f_c}$. Per uno stato misto, con $\sigma_1>0>\sigma_3$, vale
$$
\eta_{CM}=\frac{\sigma_1}{f_t}-\frac{\sigma_3}{f_c}.
$$
Il limite è $\eta_{CM}=1$. Le formule coincidono sulle frontiere in cui una delle due tensioni estreme vale zero. Per uno stato misto l’indice somma i due contributi positivi, quindi è maggiore o uguale al massimo dei due contributi usato da Rankine.

:::dimostrazione
Nel piano di Mohr si considerano i cerchi limite delle prove monoassiali. Per la trazione il centro e il raggio sono $\dfrac{f_t}{2}$. Per la compressione il centro è $-\dfrac{f_c}{2}$ e il raggio è $\dfrac{f_c}{2}$. Si scrive la tangente comune superiore come $\tau=m\sigma+b$, con $b>0$, e si pone $d=\sqrt{1+m^2}$. La distanza di ciascun centro dalla tangente è pari al proprio raggio. Si ottiene quindi
$$
b+m\frac{f_t}{2}=d\frac{f_t}{2},\qquad
b-m\frac{f_c}{2}=d\frac{f_c}{2}.
$$
Da queste condizioni seguono $\dfrac{m}{d}=\dfrac{f_t-f_c}{f_t+f_c}$ e $\dfrac{b}{d}=\dfrac{f_tf_c}{f_t+f_c}$. Per uno stato misto, il cerchio esterno ha centro $\dfrac{\sigma_1+\sigma_3}{2}$ e raggio $\dfrac{\sigma_1-\sigma_3}{2}$. Imponendo che il raggio uguagli la distanza dalla tangente comune e sostituendo i valori di $\dfrac{m}{d}$ e $\dfrac{b}{d}$, si ottiene $\sigma_1 f_c-\sigma_3 f_t=f_tf_c$. Dividendo per $f_tf_c$ si ricava l’espressione al limite.
:::
::::

:::esempio{titolo="Tangente comune e ramo misto"}
Con $f_t=40\,\mathrm{MPa}$ e $f_c=120\,\mathrm{MPa}$, la tangente superiore ha espressione $\tau=\dfrac{60-\sigma_n}{\sqrt3}$, quando entrambe le coordinate sono espresse in megapascal. Il centro del cerchio di compressione è a $-60\,\mathrm{MPa}$ e quello di trazione è a $20\,\mathrm{MPa}$. La tangente tocca entrambi a distanze pari ai rispettivi raggi, che sono $60\,\mathrm{MPa}$ e $20\,\mathrm{MPa}$.

::grafico{f="(60-x)/sqrt(3)" curve="-60+60*cos(t),60*sin(t),0,6.2831853;20+20*cos(t),20*sin(t),0,6.2831853" xmin=-132 xmax=54 ymin=-66 ymax=88 uguale=1 nomi="σ,τ" legenda="\mathrm{tangente};\mathrm{compressione};\mathrm{trazione}" titolo="Cerchi monoassiali e tangente comune superiore"}

Con $(24,0,-48)\,\mathrm{MPa}$, l’indice vale $\dfrac{3}{5}+\dfrac{2}{5}=1$. Lo stesso stato dà $\dfrac{3}{5}$ con Rankine. La differenza nasce dal fatto che il ramo misto di Coulomb–Mohr combina gli effetti dei due estremi, mentre in Rankine governa il rapporto maggiore. Nel piano delle tensioni principali il confine misto è il segmento da $(0,-120)$ a $(40,0)$, oppure quello simmetrico rispetto alla bisettrice se si scambiano le direzioni nel piano.

::grafico{linee="-120,-120 0,-120 40,0 40,40 0,40 -120,0 -120,-120" punti="24,-48,pieno,E" xmin=-140 xmax=60 ymin=-140 ymax=60 uguale=1 nomi="a,b" titolo="Dominio di Coulomb–Mohr con a = σ_A e b = σ_B in MPa"}
:::

:::osservazione{titolo="Confronto in taglio puro per limiti asimmetrici"}
In taglio puro la terna è $(t,0,-t)$ con $t\geq0$. Per Coulomb–Mohr si ha $\eta_{CM}=t\left(\dfrac{1}{f_t}+\dfrac{1}{f_c}\right)$. Il valore limite del taglio è dunque $\dfrac{f_tf_c}{f_t+f_c}$. Con $f_t=40\,\mathrm{MPa}$ e $f_c=120\,\mathrm{MPa}$ vale $30\,\mathrm{MPa}$. Rankine dà invece $\min(f_t,f_c)=40\,\mathrm{MPa}$ perché confronta separatamente gli estremi. L’esempio mostra che una prova di taglio, quando disponibile, offre un confronto distinto dalle prove monoassiali. Il ramo misto di Coulomb–Mohr resta una descrizione idealizzata costruita usando i due limiti di partenza.
:::

## Fattore di sicurezza e limiti del confronto

::::teorema{#fattore-sicurezza titolo="Moltiplicatore al limite per carico proporzionale"}
Un percorso di carico è **proporzionale** se il tensore corrente $\boldsymbol{\sigma}_0$ viene moltiplicato integralmente per un numero positivo $\lambda$. Le direzioni principali restano le stesse e le tensioni principali diventano $\lambda\sigma_i$. Se l’indice del criterio nello stato di partenza è $\eta_0>0$, il moltiplicatore al quale si raggiunge il limite è
$$
n=\frac{1}{\eta_0}.
$$
Un valore $n>1$ indica che il limite è raggiunto aumentando il carico. Un valore $n=1$ indica che lo stato iniziale è sul limite. Un valore $n<1$ indica che la soglia si incontra riducendo il moltiplicatore rispetto allo stato dato.

:::dimostrazione
L’ordinamento delle tensioni principali resta invariato per $\lambda>0$. Anche il segno di ciascuna tensione resta invariato, quindi il ramo del criterio è lo stesso lungo tutto il percorso. Le equivalenti di Tresca e von Mises e gli indici di Rankine e Coulomb–Mohr sono omogenei di grado uno per moltiplicatori positivi. Pertanto $\eta(\lambda\boldsymbol{\sigma}_0)=\lambda\eta_0$. Sulla soglia l’indice vale uno, dunque $\lambda=\dfrac{1}{\eta_0}$.
:::
::::

:::esempio{titolo="Intersezione di una semiretta con il limite"}
Con Tresca e tensioni principali nel piano normalizzate pari a $0{,}6$ e $-0{,}2$, l’indice è $0{,}8$ perché l’estremo positivo e quello negativo distano $0{,}8$. Il fattore è $1{,}25$. Moltiplicando le due coordinate si ottiene $(0{,}75,-0{,}25)$. La loro differenza è uno, quindi il punto appartiene al bordo del dominio.

::grafico{linee="-1,-1 0,-1 1,0 1,1 0,1 -1,0 -1,-1;0,0 1.1,-0.3666667" punti="0.6,-0.2,pieno,P;0.75,-0.25,pieno,L" xmin=-1.25 xmax=1.25 ymin=-1.25 ymax=1.25 uguale=1 titolo="P è lo stato iniziale e L è il punto limite lungo il carico"}
:::

:::attenzione{titolo="Carichi indipendenti e condizioni di applicabilità"}
Se parte del carico resta fissa, il tensore segue un percorso del tipo $\boldsymbol{\sigma}_{\mathrm{fisso}}+\lambda\boldsymbol{\sigma}_{\mathrm{variabile}}$. Le tensioni principali possono cambiare ordine e le loro direzioni possono ruotare. In questo caso il reciproco dell’indice nello stato iniziale non fornisce in generale il moltiplicatore al limite. Per esempio, in trazione monoassiale con una tensione fissa di $60\,\mathrm{MPa}$ e una variabile di $40\,\mathrm{MPa}$, un limite di $200\,\mathrm{MPa}$ si raggiunge a $60+40\lambda=200$, quindi per $\lambda=3{,}5$. Scalando entrambe le tensioni si otterrebbe invece $n=2$.

Tresca e von Mises descrivono l’inizio dello snervamento di materiali duttili secondo le ipotesi del modello. Rankine e Coulomb–Mohr descrivono limiti ideali per materiali con comportamento fragile. Le formule operano sullo stato tensionale locale e sui limiti forniti dal problema. La fatica, la propagazione delle cricche, l’instabilità degli elementi e le verifiche di progetto richiedono dati e modelli specifici. Per uno stato puramente idrostatico, Tresca e von Mises danno indice zero e nessuna soglia finita lungo quella semiretta nel modello adottato.
:::

:::osservazione{titolo="Confrontare due punti della stessa sezione"}
I criteri si applicano punto per punto. In una sezione soggetta insieme a flessione e taglio, il lembo esterno può avere tensione normale elevata e taglio nullo, mentre un punto interno può avere una tensione normale minore e un taglio significativo. Per esempio, con $80\,\mathrm{MPa}$ di tensione normale e taglio nullo si ottiene un equivalente di von Mises di $80\,\mathrm{MPa}$. Con tensione normale nulla e taglio di $50\,\mathrm{MPa}$ si ottiene invece $50\sqrt3\,\mathrm{MPa}$, circa $86{,}6\,\mathrm{MPa}$. Il secondo stato è quindi più vicino allo snervamento secondo von Mises, a parità di materiale. Il confronto conserva il legame fra componenti che agiscono nello stesso punto.
:::
