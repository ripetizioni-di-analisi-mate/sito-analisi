---
titolo: Sorgenti del campo magnetico e teorema di Ampère
sommario: Come le correnti producono il campo magnetico (filo rettilineo, spira, solenoide), la forza tra due fili paralleli e la definizione dell'ampere, il flusso del campo magnetico e il teorema di Gauss per il magnetismo, la circuitazione e il teorema di Ampère con le sue applicazioni, e le proprietà magnetiche dei materiali.
---

## Campo magnetico di un filo rettilineo

:::osservazione{#esperienza-biot-savart titolo="Le misure di Biot e Savart"}
L'esperienza di Oersted mostra che un filo percorso da corrente orienta un ago magnetico posto vicino al filo, quindi produce un campo magnetico. Nel 1820 Biot e Savart misurarono questo campo attorno a un filo rettilineo lungo, contando le oscillazioni di un ago magnetico a varie distanze dal filo e con varie intensità di corrente. Dalle misure conclusero che il campo è perpendicolare al filo e alla distanza dal filo, che il suo modulo è *direttamente* proporzionale alla corrente e che è *inversamente* proporzionale alla distanza. Raddoppiando la corrente il campo raddoppia; raddoppiando la distanza il campo si dimezza.
:::

:::teorema{#legge-biot-savart titolo="Legge di Biot-Savart"}
Si consideri un filo rettilineo molto lungo, che si schematizza come un **filo indefinito**, percorso dalla corrente $I$. In un punto a distanza $r$ dal filo il campo magnetico ha modulo
$$
B = \frac{\mu_0 I}{2\pi r} ,
$$
dove $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\cdot m/A}$ è la **permeabilità magnetica del vuoto**. È una legge sperimentale, che riassume le misure di Biot e Savart.

Le linee di campo sono circonferenze centrate sul filo, in piani perpendicolari al filo. Il verso si trova con la **regola della mano destra**: con il pollice nel verso della corrente, le dita piegate indicano il verso in cui le linee girano attorno al filo. La legge serve a calcolare il campo vicino a fili e cavi. Per esempio, un filo percorso da $5{,}0\,\mathrm{A}$ produce a $2{,}0\,\mathrm{cm}$ il campo
$$
B = \frac{4\pi \cdot 10^{-7} \cdot 5{,}0}{2\pi \cdot 0{,}020}\,\mathrm{T} = 5{,}0 \cdot 10^{-5}\,\mathrm{T} ,
$$
che è dello stesso ordine di grandezza del campo magnetico terrestre.

::grafico{assi=0 uguale=1 unicolore=1 punti="0,0,pieno" linee="0.160,0.000 0.148,0.061 0.113,0.113 0.061,0.148 0.000,0.160 -0.061,0.148 -0.113,0.113 -0.148,0.061 -0.160,0.000 -0.148,-0.061 -0.113,-0.113 -0.061,-0.148 -0.000,-0.160 0.061,-0.148 0.113,-0.113 0.148,-0.061 0.160,-0.000;1.000,0.000 0.991,0.131 0.966,0.259 0.924,0.383 0.866,0.500 0.793,0.609 0.707,0.707 0.609,0.793 0.500,0.866 0.383,0.924 0.259,0.966 0.131,0.991 0.000,1.000 -0.131,0.991 -0.259,0.966 -0.383,0.924 -0.500,0.866 -0.609,0.793 -0.707,0.707 -0.793,0.609 -0.866,0.500 -0.924,0.383 -0.966,0.259 -0.991,0.131 -1.000,0.000 -0.991,-0.131 -0.966,-0.259 -0.924,-0.383 -0.866,-0.500 -0.793,-0.609 -0.707,-0.707 -0.609,-0.793 -0.500,-0.866 -0.383,-0.924 -0.259,-0.966 -0.131,-0.991 -0.000,-1.000 0.131,-0.991 0.259,-0.966 0.383,-0.924 0.500,-0.866 0.609,-0.793 0.707,-0.707 0.793,-0.609 0.866,-0.500 0.924,-0.383 0.966,-0.259 0.991,-0.131 1.000,-0.000;2.000,0.000 1.983,0.261 1.932,0.518 1.848,0.765 1.732,1.000 1.587,1.218 1.414,1.414 1.218,1.587 1.000,1.732 0.765,1.848 0.518,1.932 0.261,1.983 0.000,2.000 -0.261,1.983 -0.518,1.932 -0.765,1.848 -1.000,1.732 -1.218,1.587 -1.414,1.414 -1.587,1.218 -1.732,1.000 -1.848,0.765 -1.932,0.518 -1.983,0.261 -2.000,0.000 -1.983,-0.261 -1.932,-0.518 -1.848,-0.765 -1.732,-1.000 -1.587,-1.218 -1.414,-1.414 -1.218,-1.587 -1.000,-1.732 -0.765,-1.848 -0.518,-1.932 -0.261,-1.983 -0.000,-2.000 0.261,-1.983 0.518,-1.932 0.765,-1.848 1.000,-1.732 1.218,-1.587 1.414,-1.414 1.587,-1.218 1.732,-1.000 1.848,-0.765 1.932,-0.518 1.983,-0.261 2.000,-0.000;3.000,0.000 2.974,0.392 2.898,0.776 2.772,1.148 2.598,1.500 2.380,1.826 2.121,2.121 1.826,2.380 1.500,2.598 1.148,2.772 0.776,2.898 0.392,2.974 0.000,3.000 -0.392,2.974 -0.776,2.898 -1.148,2.772 -1.500,2.598 -1.826,2.380 -2.121,2.121 -2.380,1.826 -2.598,1.500 -2.772,1.148 -2.898,0.776 -2.974,0.392 -3.000,0.000 -2.974,-0.392 -2.898,-0.776 -2.772,-1.148 -2.598,-1.500 -2.380,-1.826 -2.121,-2.121 -1.826,-2.380 -1.500,-2.598 -1.148,-2.772 -0.776,-2.898 -0.392,-2.974 -0.000,-3.000 0.392,-2.974 0.776,-2.898 1.148,-2.772 1.500,-2.598 1.826,-2.380 2.121,-2.121 2.380,-1.826 2.598,-1.500 2.772,-1.148 2.898,-0.776 2.974,-0.392 3.000,-0.000" vettori="1,0,1,0.8,B;0,2,-0.9,2;-3,0,-3,-0.9;0,-3,0.9,-3" segmenti="0,0,-1.414,1.414" etichette="0.25,0.3,I;-0.95,0.55,r" xmin=-3.6 xmax=3.6 ymin=-3.5 ymax=3.5 titolo="Linee di campo di un filo rettilineo con la corrente $I$ uscente dal foglio ($\odot$): sono circonferenze centrate sul filo, percorse in verso antiorario, e il campo vale $B = \dfrac{\mu_0 I}{2\pi r}$"}

:::

:::osservazione{#simboli-entrante-uscente titolo="Vettori perpendicolari al foglio"}
Nelle figure il simbolo $\odot$ indica un vettore o una corrente che esce dal foglio verso chi guarda, e il simbolo $\otimes$ un vettore o una corrente che entra nel foglio. Il primo simbolo rappresenta la punta di una freccia, il secondo la sua coda. Se la corrente esce dal foglio, la regola della mano destra dà linee di campo percorse in verso antiorario; se la corrente entra nel foglio, le linee sono percorse in verso orario.
:::

:::esempio{#sovrapposizione-fili titolo="Campo di due fili paralleli"}
Quando più correnti producono un campo nello stesso punto, il campo totale è la somma vettoriale dei campi delle singole correnti. Questa proprietà si chiama **principio di sovrapposizione**.

Due fili paralleli distano $10\,\mathrm{cm}$ e sono percorsi nello stesso verso dalle correnti $I_1 = 4{,}0\,\mathrm{A}$ e $I_2 = 6{,}0\,\mathrm{A}$. Nel punto medio $M$ ciascun filo dista $r = 5{,}0\,\mathrm{cm}$, quindi
$$
B_1 = \frac{\mu_0 I_1}{2\pi r} = \frac{2 \cdot 10^{-7} \cdot 4{,}0}{0{,}050}\,\mathrm{T} = 1{,}6 \cdot 10^{-5}\,\mathrm{T} ,
\qquad
B_2 = \frac{2 \cdot 10^{-7} \cdot 6{,}0}{0{,}050}\,\mathrm{T} = 2{,}4 \cdot 10^{-5}\,\mathrm{T} .
$$
Le correnti sono concordi e $M$ sta tra i due fili, perciò per la regola della mano destra i due campi in $M$ hanno versi opposti. Il campo totale ha quindi modulo $B_2 - B_1 = 8{,}0 \cdot 10^{-6}\,\mathrm{T}$ e ha il verso del campo del filo $2$.
:::

## Campo di una spira e di un solenoide

:::teorema{#campo-spira titolo="Campo al centro di una spira circolare"}
Una spira circolare di raggio $R$, percorsa dalla corrente $I$, produce nel suo centro un campo perpendicolare al piano della spira, di modulo
$$
B = \frac{\mu_0 I}{2R} .
$$
Il verso si trova con la regola della mano destra: con le dita piegate nel verso della corrente nella spira, il pollice indica il verso del campo al centro. Una **bobina piatta** di $N$ spire sovrapposte produce un campo $N$ volte maggiore, $B = \dfrac{\mu_0 N I}{2R}$. La formula si ricava sommando i contributi dei tratti della spira, con un calcolo che si studia all'università; qui si usa come risultato sperimentale.

Per una spira di raggio $5{,}0\,\mathrm{cm}$ percorsa da $4{,}0\,\mathrm{A}$ il campo al centro è
$$
B = \frac{4\pi \cdot 10^{-7} \cdot 4{,}0}{2 \cdot 0{,}050}\,\mathrm{T} \approx 5{,}0 \cdot 10^{-5}\,\mathrm{T} ,
$$
e una bobina di $50$ spire con le stesse dimensioni produce $2{,}5 \cdot 10^{-3}\,\mathrm{T}$.

::grafico{assi=0 uguale=1 punti="0,1.2,pieno;0,0,pieno,O" curve="0.45*cos(t),1.2*sin(t),0,6.29" legenda=0 linee="0.160,1.200 0.148,1.261 0.113,1.313 0.061,1.348 0.000,1.360 -0.061,1.348 -0.113,1.313 -0.148,1.261 -0.160,1.200 -0.148,1.139 -0.113,1.087 -0.061,1.052 -0.000,1.040 0.061,1.052 0.113,1.087 0.148,1.139 0.160,1.200;0.160,-1.200 0.148,-1.139 0.113,-1.087 0.061,-1.052 0.000,-1.040 -0.061,-1.052 -0.113,-1.087 -0.148,-1.139 -0.160,-1.200 -0.148,-1.261 -0.113,-1.313 -0.061,-1.348 -0.000,-1.360 0.061,-1.348 0.113,-1.313 0.148,-1.261 0.160,-1.200;-0.113,-1.313 0.113,-1.087;-0.113,-1.087 0.113,-1.313" segmenti="-2.2,0,2.6,0" vettori="0,0,1.6,0,B" etichette="0.3,1.55,I;0.3,-1.6,I;2.4,-0.3,asse" xmin=-2.4 xmax=3 ymin=-1.8 ymax=1.8 titolo="Spira vista di taglio: la corrente esce dal foglio in alto ($\odot$) ed entra in basso ($\otimes$); al centro $O$ il campo è perpendicolare al piano della spira e vale $B = \dfrac{\mu_0 I}{2R}$"}

:::

:::osservazione{#spira-come-magnete titolo="La spira si comporta come un piccolo magnete"}
Le linee di campo di una spira entrano da una faccia ed escono dall'altra, come quelle di un magnete a forma di disco. La faccia da cui escono le linee si comporta come un polo nord e l'altra come un polo sud. Perciò due spire coassiali percorse da correnti nello stesso verso si attraggono, come due magneti affiancati con poli opposti. Il momento magnetico della spira, $\vec{\mu} = I S\,\hat{n}$, introdotto nell'argomento sul campo magnetico e la forza di Lorentz, ha il verso del campo al centro.
:::

:::definizione{#solenoide titolo="Solenoide"}
Un **solenoide** è un filo avvolto a elica su un cilindro, con spire fitte e affiancate. Se la lunghezza $\ell$ del solenoide è molto maggiore del raggio delle spire, all'interno il campo è **uniforme** e parallelo all'asse, mentre all'esterno è trascurabile. Con $N$ spire percorse dalla corrente $I$ il campo interno vale
$$
B = \mu_0\,\frac{N}{\ell}\,I = \mu_0\, n I ,
$$
dove $n = \dfrac{N}{\ell}$ è il numero di spire per unità di lunghezza. La formula si ricava con il teorema di Ampère, che si enuncia nel seguito dell'argomento. Il verso del campo interno si trova come per la spira, e il solenoide ha un polo nord e un polo sud alle due estremità, come una calamita a barra.

Il solenoide serve a produrre in laboratorio un campo magnetico uniforme di valore noto. Per esempio, $400$ spire avvolte su $20\,\mathrm{cm}$ danno $n = 2{,}0 \cdot 10^{3}$ spire al metro; con $I = 2{,}5\,\mathrm{A}$ il campo interno è $B = 4\pi \cdot 10^{-7} \cdot 2{,}0 \cdot 10^{3} \cdot 2{,}5\,\mathrm{T} \approx 6{,}3 \cdot 10^{-3}\,\mathrm{T}$.
:::

## Forza tra due fili paralleli e definizione dell'ampere

:::richiamo{titolo="Forza magnetica su un filo rettilineo"}
Un filo rettilineo di lunghezza $\ell$, percorso dalla corrente $I$ e immerso in un campo magnetico uniforme $\vec{B}$, subisce la forza $\vec{F} = I\,\vec{\ell} \times \vec{B}$, dove $\vec{\ell}$ ha modulo $\ell$ e il verso della corrente. Se il filo è perpendicolare al campo, il modulo della forza è $F = I \ell B$.
:::

::::teorema{#forza-tra-fili titolo="Forza tra due fili paralleli"}
Due fili rettilinei indefiniti e paralleli, a distanza $d$ nel vuoto, sono percorsi dalle correnti $I_1$ e $I_2$. Su un tratto di lunghezza $\ell$ di ciascun filo agisce una forza perpendicolare ai fili, di modulo
$$
F = \frac{\mu_0 I_1 I_2\,\ell}{2\pi d} .
$$
La forza è **attrattiva** se le correnti sono concordi e **repulsiva** se sono discordi. Le forze sui due fili hanno lo stesso modulo e versi opposti, come prevede il terzo principio della dinamica.

Per esempio, due fili a $5{,}0\,\mathrm{cm}$ di distanza, percorsi da $10\,\mathrm{A}$ e $20\,\mathrm{A}$, si scambiano su un tratto di $2{,}0\,\mathrm{m}$ la forza
$$
F = \frac{4\pi \cdot 10^{-7} \cdot 10 \cdot 20 \cdot 2{,}0}{2\pi \cdot 0{,}050}\,\mathrm{N} = 1{,}6 \cdot 10^{-3}\,\mathrm{N} .
$$

::grafico{assi=0 uguale=1 linee="3.680,3.000 3.670,3.050 3.642,3.092 3.600,3.120 3.550,3.130 3.500,3.120 3.458,3.092 3.430,3.050 3.420,3.000 3.430,2.950 3.458,2.908 3.500,2.880 3.550,2.870 3.600,2.880 3.642,2.908 3.670,2.950 3.680,3.000;3.458,2.908 3.642,3.092;3.458,3.092 3.642,2.908;0,0 0,4;3,0 3,4" vettori="0,0.4,0,1.4,I₁;3,0.4,3,1.4,I₂;0,2.2,0.9,2.2,F;3,2.2,2.1,2.2,F" segmenti="0,3.7,3,3.7" punti="0,2.2,pieno;3,2.2,pieno" etichette="1.42,3.85,d;3.8,3.25,B₁" xmin=-1 xmax=4.4 ymin=-0.3 ymax=4.2 titolo="Due fili paralleli con correnti concordi: nei punti del secondo filo il campo $\vec{B}_1$ del primo entra nel foglio ($\otimes$), e le due forze sono attrattive"}

:::dimostrazione
L'idea è calcolare il campo del primo filo nella posizione del secondo e poi applicare al secondo filo la formula della forza su un filo rettilineo.

Per la legge di Biot-Savart, in ogni punto del filo $2$ il campo prodotto dal filo $1$ ha modulo
$$
B_1 = \frac{\mu_0 I_1}{2\pi d} .
$$
Tutti i punti del filo $2$ hanno la stessa distanza $d$ dal filo $1$, quindi il campo $B_1$ ha lo stesso modulo lungo tutto il filo $2$. Le linee di campo del filo $1$ sono circonferenze centrate sul filo $1$, perciò $\vec{B}_1$ è perpendicolare al filo $2$ e ha la stessa direzione in tutti i suoi punti. Il filo $2$ si trova quindi in un campo uniforme perpendicolare a esso, e la forza su un suo tratto di lunghezza $\ell$ ha modulo
$$
F = I_2\,\ell\,B_1 = I_2\,\ell\,\frac{\mu_0 I_1}{2\pi d} = \frac{\mu_0 I_1 I_2\,\ell}{2\pi d} .
$$
Per il verso si considera la figura, con le correnti verso l'alto. Per la regola della mano destra il campo del filo $1$ nei punti del filo $2$ entra nel foglio. Il prodotto vettoriale $\vec{\ell} \times \vec{B}_1$, con $\vec{\ell}$ verso l'alto e $\vec{B}_1$ entrante, è rivolto verso sinistra, cioè verso il filo $1$, quindi la forza è attrattiva. Se $I_2$ ha verso opposto, il vettore $\vec{\ell}$ cambia verso e con esso la forza, che diventa repulsiva.
:::
::::

:::definizione{#definizione-ampere titolo="Definizione dell'ampere"}
Fino al 2019 l'**ampere** era definito con la forza tra due fili paralleli. Un ampere è l'intensità della corrente costante che, mantenuta in due fili rettilinei paralleli, indefiniti e di sezione trascurabile, posti a $1\,\mathrm{m}$ di distanza nel vuoto, produce tra i fili una forza di $2 \cdot 10^{-7}\,\mathrm{N}$ per ogni metro di lunghezza. Il valore si controlla con la formula della forza tra fili:
$$
\frac{F}{\ell} = \frac{4\pi \cdot 10^{-7} \cdot 1 \cdot 1}{2\pi \cdot 1}\,\mathrm{N/m} = 2 \cdot 10^{-7}\,\mathrm{N/m} .
$$
Questa definizione collegava l'unità di corrente a misure meccaniche di forza e di lunghezza, e il coulomb si definiva di conseguenza come $1\,\mathrm{A\cdot s}$. Dal 2019 il Sistema Internazionale fissa invece il valore esatto della carica elementare $e$, e l'ampere corrisponde al passaggio di circa $6{,}24 \cdot 10^{18}$ cariche elementari al secondo. Il valore di $\mu_0$ resta $4\pi \cdot 10^{-7}\,\mathrm{T\cdot m/A}$ con un errore inferiore a una parte su un miliardo.
:::

## Flusso del campo magnetico e teorema di Gauss

:::definizione{#flusso-campo-magnetico titolo="Flusso del campo magnetico"}
Si considera una superficie $S$ e si sceglie su di essa un verso, detto verso della normale. La superficie si divide in parti così piccole che ciascuna si può considerare piana e il campo su di essa si può considerare costante. A ogni parte, di area $\Delta S$, si associa il vettore $\Delta\vec{S} = \Delta S\,\hat{n}$, dove $\hat{n}$ è il versore perpendicolare alla parte e orientato nel verso scelto. Il **flusso del campo magnetico** attraverso $S$ è la somma dei prodotti scalari
$$
\Phi(\vec{B}) = \sum \vec{B} \cdot \Delta\vec{S} = \sum B\,\Delta S \cos\theta ,
$$
dove $\theta$ è l'angolo tra $\vec{B}$ e $\hat{n}$ in ciascuna parte. L'unità di misura è il **weber**, $1\,\mathrm{Wb} = 1\,\mathrm{T\cdot m^2}$.

Se la superficie è piana, di area $S$, e il campo è uniforme, tutti i termini della somma hanno lo stesso $\theta$, quindi
$$
\Phi(\vec{B}) = B S \cos\theta .
$$
Il flusso è massimo quando il campo è perpendicolare alla superficie ($\theta = 0^\circ$), nullo quando il campo è parallelo alla superficie ($\theta = 90^\circ$) e negativo quando il campo attraversa la superficie in verso opposto alla normale. Per un quadrato di lato $10\,\mathrm{cm}$ in un campo uniforme di $0{,}20\,\mathrm{T}$, con $\theta = 60^\circ$, si ha $\Phi(\vec{B}) = 0{,}20 \cdot 0{,}010 \cdot \cos 60^\circ\,\mathrm{Wb} = 1{,}0 \cdot 10^{-3}\,\mathrm{Wb}$. Le variazioni del flusso producono le correnti indotte, studiate nell'argomento sull'induzione elettromagnetica.

::grafico{assi=0 uguale=1 unicolore=1 linee="2.5,0.6 3.7,3.4" vettori="-0.5,0.6,1.3,0.6;-0.5,1.6,1.3,1.6,B;-0.5,2.6,1.3,2.6;-0.5,3.6,1.3,3.6;3.100,2.000,4.295,1.488,n̂" segmenti="3.100,2.000,4.7,2.000" punti="3.100,2.000,pieno" etichette="4.25,1.82,θ;2.2,3.2,S" xmin=-0.8 xmax=5 ymin=0.2 ymax=4 titolo="Superficie piana $S$ vista di taglio in un campo uniforme $\vec{B}$: il flusso è $\Phi(\vec{B}) = B S \cos\theta$, dove $\theta$ è l'angolo tra $\vec{B}$ e il versore normale $\hat{n}$"}

:::

:::attenzione
Il flusso e il campo sono grandezze diverse. Il campo è un vettore definito in ogni punto e si misura in tesla; il flusso è un numero associato a una superficie e si misura in weber. Due spire nello stesso campo uniforme di $0{,}20\,\mathrm{T}$, perpendicolari al campo, con aree $0{,}010\,\mathrm{m^2}$ e $0{,}040\,\mathrm{m^2}$, sono attraversate da flussi diversi, $2{,}0 \cdot 10^{-3}\,\mathrm{Wb}$ e $8{,}0 \cdot 10^{-3}\,\mathrm{Wb}$. Una spira parallela allo stesso campo è attraversata da flusso nullo, anche se il campo nei suoi punti vale $0{,}20\,\mathrm{T}$.
:::

:::teorema{#teorema-gauss-magnetismo titolo="Teorema di Gauss per il campo magnetico"}
Per una superficie chiusa si sceglie come verso della normale quello rivolto verso l'esterno. Il flusso del campo magnetico attraverso *ogni* superficie chiusa è nullo:
$$
\Phi_{S}(\vec{B}) = 0 .
$$
È una legge sperimentale, uno dei principi dell'elettromagnetismo. Per il campo elettrico il teorema di Gauss dà invece $\Phi(\vec{E}) = \dfrac{Q}{\varepsilon_0}$, dove $Q$ è la carica racchiusa dalla superficie; la legge per il campo magnetico ha la stessa forma con $0$ al secondo membro, quindi afferma che nessuna superficie chiusa racchiude sorgenti del campo magnetico analoghe alle cariche elettriche.

Il teorema serve a stabilire quali campi magnetici sono possibili. Per esempio, un cubo di lato $5{,}0\,\mathrm{cm}$ è immerso in un campo uniforme di $0{,}30\,\mathrm{T}$ perpendicolare a due facce. Attraverso la faccia da cui il campo entra il flusso è $-0{,}30 \cdot 0{,}050^2\,\mathrm{Wb} = -7{,}5 \cdot 10^{-4}\,\mathrm{Wb}$, attraverso la faccia opposta è $+7{,}5 \cdot 10^{-4}\,\mathrm{Wb}$, e attraverso le altre quattro facce, parallele al campo, è nullo; la somma è quindi zero, come prevede il teorema.
:::

:::osservazione{#assenza-monopoli titolo="Assenza di monopoli magnetici"}
Le linee del campo elettrico partono dalle cariche positive e terminano sulle cariche negative. Una carica magnetica isolata, cioè un polo nord o un polo sud da solo, si chiamerebbe **monopolo magnetico**, e una superficie chiusa che lo racchiude sarebbe attraversata da un flusso diverso da zero. Il teorema di Gauss per il magnetismo esprime il fatto sperimentale che i monopoli magnetici non sono mai stati osservati. Di conseguenza le linee del campo magnetico sono **linee chiuse**: ogni linea che esce da una superficie chiusa vi rientra in un altro punto. Spezzando una calamita a barra in due parti si ottengono due calamite, ciascuna con il suo polo nord e il suo polo sud.
:::

## Circuitazione del campo magnetico e teorema di Ampère

:::definizione{#circuitazione-campo-magnetico titolo="Circuitazione del campo magnetico"}
Si considera una linea chiusa $\gamma$ e si sceglie un verso di percorrenza. La linea si divide in tratti così piccoli che ciascuno si può considerare rettilineo e il campo su di esso si può considerare costante. A ogni tratto si associa il vettore spostamento $\Delta\vec{\ell}$, tangente alla linea e orientato nel verso di percorrenza. La **circuitazione** del campo magnetico lungo $\gamma$ è la somma dei prodotti scalari
$$
\Gamma_\gamma(\vec{B}) = \sum \vec{B} \cdot \Delta\vec{\ell} = \sum B\,\Delta\ell \cos\alpha ,
$$
dove $\alpha$ è l'angolo tra $\vec{B}$ e $\Delta\vec{\ell}$ in ciascun tratto. L'unità di misura è $\mathrm{T\cdot m}$.

Due casi semplici permettono di calcolarla. Sui tratti in cui $\vec{B}$ è perpendicolare alla linea il contributo è nullo, perché $\cos 90^\circ = 0$. Sui tratti in cui $\vec{B}$ è tangente alla linea, concorde con il verso di percorrenza e di modulo costante, il contributo è $B$ per la lunghezza del tratto. Per esempio, in un campo uniforme di $0{,}050\,\mathrm{T}$ si considera un quadrato di lato $20\,\mathrm{cm}$ con due lati paralleli al campo. Il lato percorso nel verso del campo dà $0{,}050 \cdot 0{,}20\,\mathrm{T\cdot m} = 1{,}0 \cdot 10^{-2}\,\mathrm{T\cdot m}$, il lato opposto dà $-1{,}0 \cdot 10^{-2}\,\mathrm{T\cdot m}$ e gli altri due lati danno zero, quindi la circuitazione è nulla.
:::

:::definizione{#correnti-concatenate titolo="Correnti concatenate"}
Una corrente si dice **concatenata** con la linea chiusa $\gamma$ se attraversa una superficie che ha $\gamma$ come bordo; le correnti che passano fuori dalla linea non sono concatenate. Il segno delle correnti concatenate si stabilisce con la regola della mano destra: con le dita piegate nel verso di percorrenza di $\gamma$, il pollice indica il verso delle correnti da contare positive. Per una linea nel piano del foglio percorsa in verso antiorario, le correnti uscenti dal foglio sono positive e quelle entranti sono negative.

Nella figura, con $I_1 = 3{,}0\,\mathrm{A}$ uscente, $I_2 = 5{,}0\,\mathrm{A}$ entrante e $I_3$ esterna alla linea, la somma delle correnti concatenate è $I_1 - I_2 = -2{,}0\,\mathrm{A}$.

::grafico{assi=0 uguale=1 punti="-1.2,0.4,pieno;4.4,1.5,pieno" curve="3*cos(t)+0.3*cos(2*t),2*sin(t)+0.2*sin(3*t),0,6.29" legenda=0 linee="-1.050,0.400 -1.061,0.457 -1.094,0.506 -1.143,0.539 -1.200,0.550 -1.257,0.539 -1.306,0.506 -1.339,0.457 -1.350,0.400 -1.339,0.343 -1.306,0.294 -1.257,0.261 -1.200,0.250 -1.143,0.261 -1.094,0.294 -1.061,0.343 -1.050,0.400;1.150,-0.500 1.139,-0.443 1.106,-0.394 1.057,-0.361 1.000,-0.350 0.943,-0.361 0.894,-0.394 0.861,-0.443 0.850,-0.500 0.861,-0.557 0.894,-0.606 0.943,-0.639 1.000,-0.650 1.057,-0.639 1.106,-0.606 1.139,-0.557 1.150,-0.500;0.894,-0.606 1.106,-0.394;0.894,-0.394 1.106,-0.606;4.550,1.500 4.539,1.557 4.506,1.606 4.457,1.639 4.400,1.650 4.343,1.639 4.294,1.606 4.261,1.557 4.250,1.500 4.261,1.443 4.294,1.394 4.343,1.361 4.400,1.350 4.457,1.361 4.506,1.394 4.539,1.443 4.550,1.500" vettori="0.4,1.82,-0.5,1.82" etichette="-0.95,0.62,I₁;1.25,-0.3,I₂;4.65,1.7,I₃;2.55,2.0,γ" xmin=-3.6 xmax=5.4 ymin=-2.5 ymax=2.5 titolo="La linea $\gamma$ è percorsa in verso antiorario, quindi le correnti uscenti ($\odot$) sono positive: le correnti concatenate danno $I_1 - I_2$, mentre $I_3$ non è concatenata"}

:::

:::teorema{#teorema-di-ampere titolo="Teorema di Ampère"}
In presenza di correnti costanti nel tempo, la circuitazione del campo magnetico lungo una qualsiasi linea chiusa $\gamma$ è uguale a $\mu_0$ per la somma delle correnti concatenate con $\gamma$:
$$
\Gamma_\gamma(\vec{B}) = \mu_0 \sum I_{\text{conc}} .
$$
Il teorema si ricava in generale dalla legge di Biot-Savart con strumenti che si studiano all'università; nel caso di un filo rettilineo la verifica è un calcolo diretto.

Il teorema permette di calcolare la circuitazione senza conoscere il campo punto per punto. Per la linea della figura precedente si ottiene
$$
\Gamma_\gamma(\vec{B}) = 4\pi \cdot 10^{-7} \cdot (3{,}0 - 5{,}0)\,\mathrm{T\cdot m} \approx -2{,}5 \cdot 10^{-6}\,\mathrm{T\cdot m} ,
$$
e la corrente $I_3$ non compare, anche se il suo campo nei punti di $\gamma$ è diverso da zero. Nelle situazioni con molta simmetria il teorema permette anche di calcolare il campo, come si vede nelle applicazioni che seguono.
:::

::::teorema{#verifica-ampere-filo titolo="Circuitazione attorno a un filo rettilineo"}
Sia $\gamma$ una circonferenza di raggio $r$, in un piano perpendicolare a un filo rettilineo indefinito percorso dalla corrente $I$, con il centro sul filo e percorsa nel verso dato dalla regola della mano destra. Allora
$$
\Gamma_\gamma(\vec{B}) = \mu_0 I ,
$$
qualunque sia il raggio $r$. Il risultato è quello previsto dal teorema di Ampère, perché la circonferenza concatena la sola corrente $I$, con segno positivo. Con $I = 10\,\mathrm{A}$ la circuitazione vale $4\pi \cdot 10^{-7} \cdot 10\,\mathrm{T\cdot m} \approx 1{,}3 \cdot 10^{-5}\,\mathrm{T\cdot m}$, sia per una circonferenza di $1\,\mathrm{cm}$ sia per una di $1\,\mathrm{m}$.

::grafico{assi=0 uguale=1 punti="0,0,pieno" linee="0.150,0.000 0.139,0.057 0.106,0.106 0.057,0.139 0.000,0.150 -0.057,0.139 -0.106,0.106 -0.139,0.057 -0.150,0.000 -0.139,-0.057 -0.106,-0.106 -0.057,-0.139 -0.000,-0.150 0.057,-0.139 0.106,-0.106 0.139,-0.057 0.150,-0.000;2.000,0.000 1.983,0.261 1.932,0.518 1.848,0.765 1.732,1.000 1.587,1.218 1.414,1.414 1.218,1.587 1.000,1.732 0.765,1.848 0.518,1.932 0.261,1.983 0.000,2.000 -0.261,1.983 -0.518,1.932 -0.765,1.848 -1.000,1.732 -1.218,1.587 -1.414,1.414 -1.587,1.218 -1.732,1.000 -1.848,0.765 -1.932,0.518 -1.983,0.261 -2.000,0.000 -1.983,-0.261 -1.932,-0.518 -1.848,-0.765 -1.732,-1.000 -1.587,-1.218 -1.414,-1.414 -1.218,-1.587 -1.000,-1.732 -0.765,-1.848 -0.518,-1.932 -0.261,-1.983 -0.000,-2.000 0.261,-1.983 0.518,-1.932 0.765,-1.848 1.000,-1.732 1.218,-1.587 1.414,-1.414 1.587,-1.218 1.732,-1.000 1.848,-0.765 1.932,-0.518 1.983,-0.261 2.000,-0.000" segmenti="0,0,1.414,1.414" vettori="0,2,-1.1,2,B;-1.414,-1.414,-0.85,-1.98,Δℓ" etichette="0.25,-0.35,I;0.55,0.95,r" xmin=-2.8 xmax=2.8 ymin=-2.6 ymax=2.6 titolo="Circonferenza di raggio $r$ centrata sul filo e percorsa in verso antiorario: in ogni punto $\vec{B}$ è tangente e concorde con $\Delta\vec{\ell}$, quindi $\Gamma(\vec{B}) = B \cdot 2\pi r$"}

:::dimostrazione
L'idea è che lungo la circonferenza il campo è sempre tangente e ha sempre lo stesso modulo, quindi la somma che definisce la circuitazione si riduce a un prodotto.

Per la legge di Biot-Savart le linee di campo del filo sono circonferenze centrate sul filo, quindi in ogni punto di $\gamma$ il campo è tangente a $\gamma$. La circonferenza è percorsa nel verso delle linee di campo, perciò ogni $\Delta\vec{\ell}$ è concorde con $\vec{B}$ e $\cos\alpha = 1$. Tutti i punti di $\gamma$ distano $r$ dal filo, quindi il campo ha in tutti lo stesso modulo $B = \dfrac{\mu_0 I}{2\pi r}$, che si può raccogliere nella somma:
$$
\Gamma_\gamma(\vec{B}) = \sum B\,\Delta\ell = B \sum \Delta\ell = B \cdot 2\pi r .
$$
La somma delle lunghezze dei tratti è la lunghezza della circonferenza, $2\pi r$. Sostituendo il valore di $B$ si ottiene
$$
\Gamma_\gamma(\vec{B}) = \frac{\mu_0 I}{2\pi r} \cdot 2\pi r = \mu_0 I .
$$
Il raggio $r$ si semplifica, perciò la circuitazione non dipende dalla circonferenza scelta.
:::
::::

:::osservazione{#campo-non-conservativo titolo="Il campo magnetico non è conservativo"}
Il campo elettrostatico ha circuitazione nulla lungo ogni linea chiusa, e per questo è conservativo e ammette un potenziale. Il campo magnetico ha invece circuitazione diversa da zero lungo le linee che concatenano una corrente, come mostra la verifica per il filo rettilineo. Il campo magnetico perciò **non è conservativo**, e per esso non si definisce un'energia potenziale come per il campo elettrostatico. Lungo una linea che non concatena correnti, per esempio il quadrato nel campo uniforme dell'esempio sulla circuitazione, la circuitazione è nulla.
:::

## Applicazioni del teorema di Ampère

::::teorema{#campo-solenoide titolo="Campo all'interno di un solenoide"}
Si consideri un solenoide molto lungo, con $n$ spire per unità di lunghezza percorse dalla corrente $I$. Si ammette, come mostrano le misure, che lontano dalle estremità il campo interno sia uniforme e parallelo all'asse e che il campo esterno sia trascurabile. Allora il campo interno ha modulo
$$
B = \mu_0\, n I .
$$
Il campo non dipende dal raggio del solenoide né dalla posizione all'interno. Con $n = 1{,}5 \cdot 10^{3}$ spire al metro e $I = 2{,}0\,\mathrm{A}$ si ha $B = 4\pi \cdot 10^{-7} \cdot 1{,}5 \cdot 10^{3} \cdot 2{,}0\,\mathrm{T} \approx 3{,}8 \cdot 10^{-3}\,\mathrm{T}$.

::grafico{assi=0 uguale=1 punti="0.250,1.000,pieno;0.750,1.000,pieno;1.250,1.000,pieno;1.750,1.000,pieno;2.250,1.000,pieno;2.750,1.000,pieno;3.250,1.000,pieno;3.750,1.000,pieno" linee="0.380,1.000 0.370,1.050 0.342,1.092 0.300,1.120 0.250,1.130 0.200,1.120 0.158,1.092 0.130,1.050 0.120,1.000 0.130,0.950 0.158,0.908 0.200,0.880 0.250,0.870 0.300,0.880 0.342,0.908 0.370,0.950 0.380,1.000;0.380,-1.000 0.370,-0.950 0.342,-0.908 0.300,-0.880 0.250,-0.870 0.200,-0.880 0.158,-0.908 0.130,-0.950 0.120,-1.000 0.130,-1.050 0.158,-1.092 0.200,-1.120 0.250,-1.130 0.300,-1.120 0.342,-1.092 0.370,-1.050 0.380,-1.000;0.158,-1.092 0.342,-0.908;0.158,-0.908 0.342,-1.092;0.880,1.000 0.870,1.050 0.842,1.092 0.800,1.120 0.750,1.130 0.700,1.120 0.658,1.092 0.630,1.050 0.620,1.000 0.630,0.950 0.658,0.908 0.700,0.880 0.750,0.870 0.800,0.880 0.842,0.908 0.870,0.950 0.880,1.000;0.880,-1.000 0.870,-0.950 0.842,-0.908 0.800,-0.880 0.750,-0.870 0.700,-0.880 0.658,-0.908 0.630,-0.950 0.620,-1.000 0.630,-1.050 0.658,-1.092 0.700,-1.120 0.750,-1.130 0.800,-1.120 0.842,-1.092 0.870,-1.050 0.880,-1.000;0.658,-1.092 0.842,-0.908;0.658,-0.908 0.842,-1.092;1.380,1.000 1.370,1.050 1.342,1.092 1.300,1.120 1.250,1.130 1.200,1.120 1.158,1.092 1.130,1.050 1.120,1.000 1.130,0.950 1.158,0.908 1.200,0.880 1.250,0.870 1.300,0.880 1.342,0.908 1.370,0.950 1.380,1.000;1.380,-1.000 1.370,-0.950 1.342,-0.908 1.300,-0.880 1.250,-0.870 1.200,-0.880 1.158,-0.908 1.130,-0.950 1.120,-1.000 1.130,-1.050 1.158,-1.092 1.200,-1.120 1.250,-1.130 1.300,-1.120 1.342,-1.092 1.370,-1.050 1.380,-1.000;1.158,-1.092 1.342,-0.908;1.158,-0.908 1.342,-1.092;1.880,1.000 1.870,1.050 1.842,1.092 1.800,1.120 1.750,1.130 1.700,1.120 1.658,1.092 1.630,1.050 1.620,1.000 1.630,0.950 1.658,0.908 1.700,0.880 1.750,0.870 1.800,0.880 1.842,0.908 1.870,0.950 1.880,1.000;1.880,-1.000 1.870,-0.950 1.842,-0.908 1.800,-0.880 1.750,-0.870 1.700,-0.880 1.658,-0.908 1.630,-0.950 1.620,-1.000 1.630,-1.050 1.658,-1.092 1.700,-1.120 1.750,-1.130 1.800,-1.120 1.842,-1.092 1.870,-1.050 1.880,-1.000;1.658,-1.092 1.842,-0.908;1.658,-0.908 1.842,-1.092;2.380,1.000 2.370,1.050 2.342,1.092 2.300,1.120 2.250,1.130 2.200,1.120 2.158,1.092 2.130,1.050 2.120,1.000 2.130,0.950 2.158,0.908 2.200,0.880 2.250,0.870 2.300,0.880 2.342,0.908 2.370,0.950 2.380,1.000;2.380,-1.000 2.370,-0.950 2.342,-0.908 2.300,-0.880 2.250,-0.870 2.200,-0.880 2.158,-0.908 2.130,-0.950 2.120,-1.000 2.130,-1.050 2.158,-1.092 2.200,-1.120 2.250,-1.130 2.300,-1.120 2.342,-1.092 2.370,-1.050 2.380,-1.000;2.158,-1.092 2.342,-0.908;2.158,-0.908 2.342,-1.092;2.880,1.000 2.870,1.050 2.842,1.092 2.800,1.120 2.750,1.130 2.700,1.120 2.658,1.092 2.630,1.050 2.620,1.000 2.630,0.950 2.658,0.908 2.700,0.880 2.750,0.870 2.800,0.880 2.842,0.908 2.870,0.950 2.880,1.000;2.880,-1.000 2.870,-0.950 2.842,-0.908 2.800,-0.880 2.750,-0.870 2.700,-0.880 2.658,-0.908 2.630,-0.950 2.620,-1.000 2.630,-1.050 2.658,-1.092 2.700,-1.120 2.750,-1.130 2.800,-1.120 2.842,-1.092 2.870,-1.050 2.880,-1.000;2.658,-1.092 2.842,-0.908;2.658,-0.908 2.842,-1.092;3.380,1.000 3.370,1.050 3.342,1.092 3.300,1.120 3.250,1.130 3.200,1.120 3.158,1.092 3.130,1.050 3.120,1.000 3.130,0.950 3.158,0.908 3.200,0.880 3.250,0.870 3.300,0.880 3.342,0.908 3.370,0.950 3.380,1.000;3.380,-1.000 3.370,-0.950 3.342,-0.908 3.300,-0.880 3.250,-0.870 3.200,-0.880 3.158,-0.908 3.130,-0.950 3.120,-1.000 3.130,-1.050 3.158,-1.092 3.200,-1.120 3.250,-1.130 3.300,-1.120 3.342,-1.092 3.370,-1.050 3.380,-1.000;3.158,-1.092 3.342,-0.908;3.158,-0.908 3.342,-1.092;3.880,1.000 3.870,1.050 3.842,1.092 3.800,1.120 3.750,1.130 3.700,1.120 3.658,1.092 3.630,1.050 3.620,1.000 3.630,0.950 3.658,0.908 3.700,0.880 3.750,0.870 3.800,0.880 3.842,0.908 3.870,0.950 3.880,1.000;3.880,-1.000 3.870,-0.950 3.842,-0.908 3.800,-0.880 3.750,-0.870 3.700,-0.880 3.658,-0.908 3.630,-0.950 3.620,-1.000 3.630,-1.050 3.658,-1.092 3.700,-1.120 3.750,-1.130 3.800,-1.120 3.842,-1.092 3.870,-1.050 3.880,-1.000;3.658,-1.092 3.842,-0.908;3.658,-0.908 3.842,-1.092" segmenti="1,0.35,3,0.35;3,0.35,3,1.9;3,1.9,1,1.9;1,1.9,1,0.35" vettori="0.4,-0.45,3.6,-0.45,B" etichette="0.85,0.15,a;3.15,0.15,b;3.15,2.1,c;0.85,2.1,d;2.0,0.55,h" xmin=-0.3 xmax=4.3 ymin=-1.5 ymax=2.4 titolo="Sezione di un solenoide: le spire escono dal foglio in alto ($\odot$) ed entrano in basso ($\otimes$); lungo il rettangolo $abcd$ contribuisce alla circuitazione solo il lato interno $ab$"}

:::dimostrazione
L'idea è applicare il teorema di Ampère a un rettangolo scelto in modo che un solo lato dia un contributo alla circuitazione.

Si considera il rettangolo $abcd$ della figura, con il lato $ab$ di lunghezza $h$ all'interno del solenoide e parallelo all'asse, il lato $cd$ all'esterno e i lati $bc$ e $da$ perpendicolari all'asse. Il rettangolo si percorre nel verso $a \to b \to c \to d$, concorde con il campo sul lato $ab$. Si calcolano i quattro contributi.

- Sul lato $ab$ il campo è uniforme e concorde con $\Delta\vec{\ell}$, quindi il contributo è $B h$.
- Sui lati $bc$ e $da$ il campo è perpendicolare a $\Delta\vec{\ell}$ nel tratto interno ed è nullo nel tratto esterno, quindi il contributo è zero.
- Sul lato $cd$ il campo è nullo, quindi il contributo è zero.

La circuitazione vale perciò $B h$. Il rettangolo è attraversato dalle spire che si trovano nel tratto di lunghezza $h$, cioè da $n h$ spire, ciascuna percorsa dalla corrente $I$ uscente dal foglio. La corrente uscente è positiva per il verso di percorrenza scelto, quindi la somma delle correnti concatenate è $n h I$. Per il teorema di Ampère
$$
B h = \mu_0\, n h I ,
$$
e dividendo per $h$ si ottiene $B = \mu_0\, n I$.
:::
::::

::::teorema{#campo-filo-spesso titolo="Campo dentro e fuori un filo spesso"}
Un filo rettilineo indefinito a sezione circolare di raggio $R$ è percorso dalla corrente $I$, distribuita in modo uniforme sulla sezione. A distanza $r$ dall'asse il campo è tangente alle circonferenze centrate sull'asse e ha modulo
$$
B(r) =
\begin{cases}
\dfrac{\mu_0 I\, r}{2\pi R^2} & 0 \leq r \leq R \\[10pt]
\dfrac{\mu_0 I}{2\pi r} & r \geq R
\end{cases}
$$
Fuori dal filo il campo è uguale a quello di un filo sottile lungo l'asse. Dentro il filo il campo è proporzionale alla distanza dall'asse, quindi è nullo sull'asse ed è massimo sulla superficie. Per un filo di raggio $2{,}0\,\mathrm{mm}$ percorso da $10\,\mathrm{A}$ il campo sulla superficie è $\dfrac{2 \cdot 10^{-7} \cdot 10}{2{,}0 \cdot 10^{-3}}\,\mathrm{T} = 1{,}0 \cdot 10^{-3}\,\mathrm{T}$, mentre a $1{,}0\,\mathrm{mm}$ e a $4{,}0\,\mathrm{mm}$ dall'asse il campo vale in entrambi i casi $5{,}0 \cdot 10^{-4}\,\mathrm{T}$.

::grafico{f="min(x,1/x)" segmenti="1,0,1,1" punti="1,1,pieno" legenda="B(r)" nomi="r,B" xmin=0 xmax=4 ymin=0 ymax=1.3 titolo="Campo di un filo spesso in funzione della distanza dall'asse, con $r$ in unità di $R$ e $B$ in unità di $\dfrac{\mu_0 I}{2\pi R}$: cresce in modo lineare dentro il filo e decresce come $\dfrac{1}{r}$ fuori"}

:::dimostrazione
Per la simmetria del filo, il campo è tangente alle circonferenze centrate sull'asse e ha lo stesso modulo in tutti i punti di una di queste circonferenze. Si applica il teorema di Ampère alla circonferenza di raggio $r$, percorsa nel verso delle linee di campo; come nella verifica per il filo rettilineo, la circuitazione vale $B \cdot 2\pi r$.

Se $r \geq R$, la circonferenza concatena tutta la corrente $I$, perciò $B \cdot 2\pi r = \mu_0 I$ e $B = \dfrac{\mu_0 I}{2\pi r}$.

Se $r < R$, la circonferenza concatena solo la corrente che attraversa il cerchio di raggio $r$. La corrente è distribuita in modo uniforme, quindi la corrente concatenata sta alla corrente totale come l'area $\pi r^2$ sta all'area $\pi R^2$:
$$
I_{\text{conc}} = I\,\frac{\pi r^2}{\pi R^2} = I\,\frac{r^2}{R^2} .
$$
Per il teorema di Ampère si ha allora
$$
B \cdot 2\pi r = \mu_0 I\,\frac{r^2}{R^2} ,
$$
e dividendo per $2\pi r$ si ottiene $B = \dfrac{\mu_0 I\, r}{2\pi R^2}$. Per $r = R$ le due espressioni danno lo stesso valore $\dfrac{\mu_0 I}{2\pi R}$.
:::
::::

::::teorema{#campo-toroide titolo="Campo di un toroide"}
Un **toroide** è un solenoide richiuso ad anello: $N$ spire, percorse dalla corrente $I$, sono avvolte su un anello. All'interno dell'anello le linee di campo sono circonferenze con il centro sull'asse del toroide, e a distanza $r$ dall'asse il campo ha modulo
$$
B = \frac{\mu_0 N I}{2\pi r} ;
$$
fuori dall'anello il campo è nullo. Il campo interno non è uniforme, perché diminuisce dal bordo interno al bordo esterno. Per un toroide di $500$ spire percorse da $3{,}0\,\mathrm{A}$ il campo vale $3{,}0 \cdot 10^{-3}\,\mathrm{T}$ a $10\,\mathrm{cm}$ dall'asse e $2{,}5 \cdot 10^{-3}\,\mathrm{T}$ a $12\,\mathrm{cm}$. Il toroide serve a confinare il campo in una regione chiusa, senza poli e senza campo all'esterno.

::grafico{assi=0 uguale=1 punti="1.848,0.765,pieno;0.765,1.848,pieno;-0.765,1.848,pieno;-1.848,0.765,pieno;-1.848,-0.765,pieno;-0.765,-1.848,pieno;0.765,-1.848,pieno;1.848,-0.765,pieno" linee="1.750,0.000 1.742,0.172 1.716,0.341 1.675,0.508 1.617,0.670 1.543,0.825 1.455,0.972 1.353,1.110 1.237,1.237 1.110,1.353 0.972,1.455 0.825,1.543 0.670,1.617 0.508,1.675 0.341,1.716 0.172,1.742 0.000,1.750 -0.172,1.742 -0.341,1.716 -0.508,1.675 -0.670,1.617 -0.825,1.543 -0.972,1.455 -1.110,1.353 -1.237,1.237 -1.353,1.110 -1.455,0.972 -1.543,0.825 -1.617,0.670 -1.675,0.508 -1.716,0.341 -1.742,0.172 -1.750,0.000 -1.742,-0.172 -1.716,-0.341 -1.675,-0.508 -1.617,-0.670 -1.543,-0.825 -1.455,-0.972 -1.353,-1.110 -1.237,-1.237 -1.110,-1.353 -0.972,-1.455 -0.825,-1.543 -0.670,-1.617 -0.508,-1.675 -0.341,-1.716 -0.172,-1.742 -0.000,-1.750 0.172,-1.742 0.341,-1.716 0.508,-1.675 0.670,-1.617 0.825,-1.543 0.972,-1.455 1.110,-1.353 1.237,-1.237 1.353,-1.110 1.455,-0.972 1.543,-0.825 1.617,-0.670 1.675,-0.508 1.716,-0.341 1.742,-0.172 1.750,-0.000;3.250,0.000 3.234,0.319 3.188,0.634 3.110,0.943 3.003,1.244 2.866,1.532 2.702,1.806 2.512,2.062 2.298,2.298 2.062,2.512 1.806,2.702 1.532,2.866 1.244,3.003 0.943,3.110 0.634,3.188 0.319,3.234 0.000,3.250 -0.319,3.234 -0.634,3.188 -0.943,3.110 -1.244,3.003 -1.532,2.866 -1.806,2.702 -2.062,2.512 -2.298,2.298 -2.512,2.062 -2.702,1.806 -2.866,1.532 -3.003,1.244 -3.110,0.943 -3.188,0.634 -3.234,0.319 -3.250,0.000 -3.234,-0.319 -3.188,-0.634 -3.110,-0.943 -3.003,-1.244 -2.866,-1.532 -2.702,-1.806 -2.512,-2.062 -2.298,-2.298 -2.062,-2.512 -1.806,-2.702 -1.532,-2.866 -1.244,-3.003 -0.943,-3.110 -0.634,-3.188 -0.319,-3.234 -0.000,-3.250 0.319,-3.234 0.634,-3.188 0.943,-3.110 1.244,-3.003 1.532,-2.866 1.806,-2.702 2.062,-2.512 2.298,-2.298 2.512,-2.062 2.702,-1.806 2.866,-1.532 3.003,-1.244 3.110,-0.943 3.188,-0.634 3.234,-0.319 3.250,-0.000;1.968,0.765 1.959,0.811 1.933,0.850 1.894,0.876 1.848,0.885 1.802,0.876 1.763,0.850 1.737,0.811 1.728,0.765 1.737,0.719 1.763,0.681 1.802,0.655 1.848,0.645 1.894,0.655 1.933,0.681 1.959,0.719 1.968,0.765;2.892,1.148 2.883,1.194 2.856,1.233 2.818,1.259 2.772,1.268 2.726,1.259 2.687,1.233 2.661,1.194 2.652,1.148 2.661,1.102 2.687,1.063 2.726,1.037 2.772,1.028 2.818,1.037 2.856,1.063 2.883,1.102 2.892,1.148;2.687,1.063 2.856,1.233;2.687,1.233 2.856,1.063;0.885,1.848 0.876,1.894 0.850,1.933 0.811,1.959 0.765,1.968 0.719,1.959 0.681,1.933 0.655,1.894 0.645,1.848 0.655,1.802 0.681,1.763 0.719,1.737 0.765,1.728 0.811,1.737 0.850,1.763 0.876,1.802 0.885,1.848;1.268,2.772 1.259,2.818 1.233,2.856 1.194,2.883 1.148,2.892 1.102,2.883 1.063,2.856 1.037,2.818 1.028,2.772 1.037,2.726 1.063,2.687 1.102,2.661 1.148,2.652 1.194,2.661 1.233,2.687 1.259,2.726 1.268,2.772;1.063,2.687 1.233,2.856;1.063,2.856 1.233,2.687;-0.645,1.848 -0.655,1.894 -0.681,1.933 -0.719,1.959 -0.765,1.968 -0.811,1.959 -0.850,1.933 -0.876,1.894 -0.885,1.848 -0.876,1.802 -0.850,1.763 -0.811,1.737 -0.765,1.728 -0.719,1.737 -0.681,1.763 -0.655,1.802 -0.645,1.848;-1.028,2.772 -1.037,2.818 -1.063,2.856 -1.102,2.883 -1.148,2.892 -1.194,2.883 -1.233,2.856 -1.259,2.818 -1.268,2.772 -1.259,2.726 -1.233,2.687 -1.194,2.661 -1.148,2.652 -1.102,2.661 -1.063,2.687 -1.037,2.726 -1.028,2.772;-1.233,2.687 -1.063,2.856;-1.233,2.856 -1.063,2.687;-1.728,0.765 -1.737,0.811 -1.763,0.850 -1.802,0.876 -1.848,0.885 -1.894,0.876 -1.933,0.850 -1.959,0.811 -1.968,0.765 -1.959,0.719 -1.933,0.681 -1.894,0.655 -1.848,0.645 -1.802,0.655 -1.763,0.681 -1.737,0.719 -1.728,0.765;-2.652,1.148 -2.661,1.194 -2.687,1.233 -2.726,1.259 -2.772,1.268 -2.818,1.259 -2.856,1.233 -2.883,1.194 -2.892,1.148 -2.883,1.102 -2.856,1.063 -2.818,1.037 -2.772,1.028 -2.726,1.037 -2.687,1.063 -2.661,1.102 -2.652,1.148;-2.856,1.063 -2.687,1.233;-2.856,1.233 -2.687,1.063;-1.728,-0.765 -1.737,-0.719 -1.763,-0.681 -1.802,-0.655 -1.848,-0.645 -1.894,-0.655 -1.933,-0.681 -1.959,-0.719 -1.968,-0.765 -1.959,-0.811 -1.933,-0.850 -1.894,-0.876 -1.848,-0.885 -1.802,-0.876 -1.763,-0.850 -1.737,-0.811 -1.728,-0.765;-2.652,-1.148 -2.661,-1.102 -2.687,-1.063 -2.726,-1.037 -2.772,-1.028 -2.818,-1.037 -2.856,-1.063 -2.883,-1.102 -2.892,-1.148 -2.883,-1.194 -2.856,-1.233 -2.818,-1.259 -2.772,-1.268 -2.726,-1.259 -2.687,-1.233 -2.661,-1.194 -2.652,-1.148;-2.856,-1.233 -2.687,-1.063;-2.856,-1.063 -2.687,-1.233;-0.645,-1.848 -0.655,-1.802 -0.681,-1.763 -0.719,-1.737 -0.765,-1.728 -0.811,-1.737 -0.850,-1.763 -0.876,-1.802 -0.885,-1.848 -0.876,-1.894 -0.850,-1.933 -0.811,-1.959 -0.765,-1.968 -0.719,-1.959 -0.681,-1.933 -0.655,-1.894 -0.645,-1.848;-1.028,-2.772 -1.037,-2.726 -1.063,-2.687 -1.102,-2.661 -1.148,-2.652 -1.194,-2.661 -1.233,-2.687 -1.259,-2.726 -1.268,-2.772 -1.259,-2.818 -1.233,-2.856 -1.194,-2.883 -1.148,-2.892 -1.102,-2.883 -1.063,-2.856 -1.037,-2.818 -1.028,-2.772;-1.233,-2.856 -1.063,-2.687;-1.233,-2.687 -1.063,-2.856;0.885,-1.848 0.876,-1.802 0.850,-1.763 0.811,-1.737 0.765,-1.728 0.719,-1.737 0.681,-1.763 0.655,-1.802 0.645,-1.848 0.655,-1.894 0.681,-1.933 0.719,-1.959 0.765,-1.968 0.811,-1.959 0.850,-1.933 0.876,-1.894 0.885,-1.848;1.268,-2.772 1.259,-2.726 1.233,-2.687 1.194,-2.661 1.148,-2.652 1.102,-2.661 1.063,-2.687 1.037,-2.726 1.028,-2.772 1.037,-2.818 1.063,-2.856 1.102,-2.883 1.148,-2.892 1.194,-2.883 1.233,-2.856 1.259,-2.818 1.268,-2.772;1.063,-2.856 1.233,-2.687;1.063,-2.687 1.233,-2.856;1.968,-0.765 1.959,-0.719 1.933,-0.681 1.894,-0.655 1.848,-0.645 1.802,-0.655 1.763,-0.681 1.737,-0.719 1.728,-0.765 1.737,-0.811 1.763,-0.850 1.802,-0.876 1.848,-0.885 1.894,-0.876 1.933,-0.850 1.959,-0.811 1.968,-0.765;2.892,-1.148 2.883,-1.102 2.856,-1.063 2.818,-1.037 2.772,-1.028 2.726,-1.037 2.687,-1.063 2.661,-1.102 2.652,-1.148 2.661,-1.194 2.687,-1.233 2.726,-1.259 2.772,-1.268 2.818,-1.259 2.856,-1.233 2.883,-1.194 2.892,-1.148;2.687,-1.233 2.856,-1.063;2.687,-1.063 2.856,-1.233" curve="2.5*cos(t),2.5*sin(t),0,6.29" legenda=0 vettori="-2.5,0,-2.5,-1.1,B" segmenti="0,0,1.768,1.768" etichette="0.7,1.15,r" xmin=-3.6 xmax=3.6 ymin=-3.5 ymax=3.5 titolo="Toroide visto dall'alto: le spire escono dal foglio sul bordo interno ($\odot$) ed entrano sul bordo esterno ($\otimes$); la circonferenza colorata di raggio $r$ è attraversata una volta da ogni spira"}

:::dimostrazione
Per la simmetria del toroide il campo ha lo stesso modulo in tutti i punti di una circonferenza con il centro sull'asse. Si applica il teorema di Ampère alla circonferenza di raggio $r$ percorsa nel verso delle linee di campo, e la circuitazione vale $B \cdot 2\pi r$.

- Se la circonferenza è dentro l'anello, ogni spira la attraversa una volta, sul bordo interno, sempre nello stesso verso; la corrente concatenata è $N I$, quindi $B \cdot 2\pi r = \mu_0 N I$ e $B = \dfrac{\mu_0 N I}{2\pi r}$.
- Se la circonferenza è nel foro dell'anello, nessuna spira la attraversa, quindi la corrente concatenata è nulla e il campo è nullo.
- Se la circonferenza è fuori dall'anello, ogni spira attraversa il cerchio due volte, in versi opposti, sul bordo interno e sul bordo esterno; la corrente concatenata è $N I - N I = 0$ e il campo è nullo.
:::
::::

## Proprietà magnetiche dei materiali

:::osservazione{#correnti-microscopiche titolo="Ipotesi di Ampère sulle correnti microscopiche"}
Ampère propose che il magnetismo dei materiali fosse prodotto da minuscole correnti circolari all'interno della materia. Oggi queste correnti si identificano con il moto degli elettroni negli atomi, che fa di ogni atomo un piccolo dipolo magnetico, come una spira. Se i dipoli sono orientati a caso, i loro campi si compensano e il materiale non produce campo; se un campo esterno li orienta, i loro campi si sommano e il materiale si dice **magnetizzato**.
:::

:::definizione{#permeabilita-relativa titolo="Permeabilità magnetica relativa"}
Si riempie un solenoide con un materiale. Sia $B_0$ il campo che le spire producono nel vuoto e sia $B$ il campo misurato con il materiale all'interno. La **permeabilità magnetica relativa** del materiale è il rapporto
$$
\mu_r = \frac{B}{B_0} .
$$
È un numero puro, uguale a $1$ per il vuoto. Il prodotto $\mu = \mu_r \mu_0$ si chiama permeabilità magnetica assoluta del materiale, e il campo nel solenoide pieno si scrive $B = \mu_r \mu_0\, n I$.

La permeabilità relativa serve a calcolare quanto un materiale aumenta o riduce il campo delle correnti. Per esempio, un solenoide con $1000$ spire al metro percorse da $0{,}40\,\mathrm{A}$ produce nel vuoto $B_0 = 4\pi \cdot 10^{-7} \cdot 1000 \cdot 0{,}40\,\mathrm{T} \approx 5{,}0 \cdot 10^{-4}\,\mathrm{T}$. Con un nucleo di ferro che in queste condizioni ha $\mu_r = 1000$ il campo diventa circa $0{,}50\,\mathrm{T}$. Su questo principio funzionano gli elettromagneti.
:::

:::definizione{#classi-materiali titolo="Sostanze diamagnetiche, paramagnetiche e ferromagnetiche"}
I materiali si dividono in tre classi secondo il valore di $\mu_r$.

- Le sostanze **diamagnetiche** hanno $\mu_r$ di poco minore di $1$. Il campo al loro interno è leggermente minore di $B_0$, e vicino a un magnete sono respinte debolmente. Sono diamagnetici il rame, con $\mu_r \approx 0{,}99999$, l'acqua e il bismuto.
- Le sostanze **paramagnetiche** hanno $\mu_r$ di poco maggiore di $1$. I loro dipoli atomici si orientano in parte nel verso del campo, ostacolati dall'agitazione termica, e vicino a un magnete sono attratte debolmente. Sono paramagnetici l'alluminio, con $\mu_r \approx 1{,}00002$, e l'ossigeno.
- Le sostanze **ferromagnetiche** hanno $\mu_r$ molto maggiore di $1$, con valori da qualche centinaio a qualche decina di migliaia, e sono attratte con forza da un magnete. Sono ferromagnetici il ferro, il nichel, il cobalto e molte loro leghe.

Nelle sostanze diamagnetiche e paramagnetiche $\mu_r$ è così vicina a $1$ che nei calcoli si usa $\mu_0$ come nel vuoto. Per esempio, in un solenoide con $B_0 = 5{,}0 \cdot 10^{-4}\,\mathrm{T}$ un nucleo di alluminio porta il campo a $5{,}0001 \cdot 10^{-4}\,\mathrm{T}$, una differenza che non si apprezza con due cifre significative.
:::

:::osservazione{#domini-temperatura-curie titolo="Domini magnetici e temperatura di Curie"}
In un materiale ferromagnetico i dipoli atomici sono allineati spontaneamente in piccole regioni, dette **domini magnetici**. Senza campo esterno i domini sono orientati a caso e il materiale non è magnetizzato; un campo esterno fa crescere i domini orientati come il campo, e il materiale si magnetizza molto più di una sostanza paramagnetica.

Al di sopra di una temperatura caratteristica, la **temperatura di Curie**, l'agitazione termica distrugge l'allineamento dei domini e il materiale diventa paramagnetico. Per il ferro la temperatura di Curie è circa $770\,^\circ\mathrm{C}$, per il nichel circa $360\,^\circ\mathrm{C}$. Un magnete di ferro riscaldato oltre $770\,^\circ\mathrm{C}$ perde quindi la sua magnetizzazione.
:::

:::osservazione{#ciclo-isteresi titolo="Ciclo di isteresi"}
Nei materiali ferromagnetici $\mu_r$ non è costante: il campo $B$ nel materiale dipende da $B_0$ e anche dalla storia del materiale. Se si fa crescere $B_0$ e poi lo si riporta a zero, il campo nel materiale non torna a zero e resta un **campo residuo** $B_r$. Per annullarlo serve un campo esterno di verso opposto. Facendo variare $B_0$ avanti e indietro, il grafico di $B$ in funzione di $B_0$ descrive una curva chiusa, il ciclo di isteresi.

I materiali con un ciclo largo e un campo residuo grande, come l'acciaio, servono per i magneti permanenti. I materiali con un ciclo stretto, come il ferro dolce, si magnetizzano e si smagnetizzano facilmente, e servono per i nuclei degli elettromagneti e dei trasformatori, studiati nell'argomento sulla corrente alternata.

::grafico{f="tanh(1.4*(x-1));tanh(1.4*(x+1))" punti="0,0.885,pieno,Bᵣ;-1,0,pieno" nomi="B₀,B" legenda="B_0 \text{ crescente};B_0 \text{ decrescente}" xmin=-4 xmax=4 ymin=-2 ymax=2 titolo="Ciclo di isteresi di un materiale ferromagnetico, in unità arbitrarie: quando $B_0$ torna a zero resta il campo residuo $B_r$, che si annulla solo con un campo esterno opposto"}

:::
