---
titolo: "Fisica per il TOL del Politecnico di Milano"
sommario: "Dalle unità di misura al moto, dalla termodinamica alle onde e ai livelli energetici dell’atomo."
---

:::percorso
La prova chiede di passare da una situazione fisica a una relazione tra grandezze. Nella prima parte si costruiscono i modelli di moto, forza ed energia. Le stesse grandezze ricompaiono quando si studiano gas, cariche e onde. Ogni esempio esplicita l’unità di misura e l’ipotesi che rende applicabile la formula.
:::

## Misure e vettori

:::definizione{#misure-vettori titolo="Unità e componenti"}
Una **grandezza scalare** è espressa da un numero con la sua unità. Una **grandezza vettoriale** ha anche direzione e verso. Su due assi ortogonali, un vettore di componenti $u_x,u_y$ ha modulo $\sqrt{u_x^2+u_y^2}$ e si somma a un altro vettore sommando le componenti sugli stessi assi.

Nel SI, il newton è $\mathrm{kg\,m\,s^{-2}}$, il joule è $\mathrm{N\,m}$, il watt è $\mathrm{J/s}$ e il pascal è $\mathrm{N/m^2}$. Il controllo dimensionale permette di escludere un risultato con le unità sbagliate.
:::

:::esempio{titolo="Velocità in unità SI"}
Un’auto a $54\,\mathrm{km/h}$ percorre $54000\,\mathrm m$ in $3600\,\mathrm s$. Il rapporto dà $15\,\mathrm{m/s}$. In un calcolo di energia cinetica con massa in chilogrammi, questa è la velocità da elevare al quadrato.
:::

## Moto e forze

:::definizione{#moto-forze titolo="Posizione, velocità e accelerazione"}
Su una retta orientata, la velocità media è $\Delta x/\Delta t$ e l’accelerazione media è $\Delta v/\Delta t$. Se l’accelerazione $a$ è costante, valgono $v=v_0+at$ e $x=x_0+v_0t+\frac12at^2$. La velocità media usa lo spostamento con segno, mentre la rapidità media usa la lunghezza del percorso.

Nel piano, trascurando l’aria, la gravità lascia costante $v_x$ e cambia $v_y$ con accelerazione $-g$ se l’asse verticale è orientato verso l’alto. Nel punto di quota massima $v_y=0$. Una componente orizzontale iniziale resta presente anche in quel punto.
:::

:::teorema{titolo="Leggi di Newton"}
In un riferimento inerziale, la risultante delle forze esterne vale $\vec F_{\rm ris}=m\vec a$. Se la risultante è nulla, la velocità vettoriale si conserva. Le forze di azione e reazione hanno moduli uguali e versi opposti e agiscono su due corpi distinti.
:::

:::esempio{titolo="Due componenti dello stesso moto"}
Una pallina lascia un piano alto $0{,}80\,\mathrm m$ con rapidità orizzontale $5\,\mathrm{m/s}$. Con $g=10\,\mathrm{m/s^2}$ cade per $0{,}40\,\mathrm s$ perché $0{,}80=\frac12g t^2$. Nello stesso tempo avanza di $5\cdot0{,}40=2\,\mathrm m$.
:::

## Energia, quantità di moto e oscillazioni

:::definizione{#energia-fluidi titolo="Lavoro, energia e quantità di moto"}
Per una forza costante, il lavoro vale $L=Fs\cos\theta$, dove $\theta$ è l’angolo tra forza e spostamento. L’energia cinetica è $K=\frac12mv^2$ e varia di una quantità uguale al lavoro totale. La potenza media è $L/\Delta t$.

Vicino alla superficie terrestre l’energia potenziale gravitazionale, riferita a una quota scelta come zero, è $U_g=mgh$. Per una molla ideale di costante $k$ e deformazione $x$ si ha $F_x=-kx$ e $U_e=\frac12kx^2$. L’energia meccanica $K+U$ si conserva quando agiscono soltanto forze conservative o le altre forze compiono lavoro totale nullo.

La quantità di moto è $\vec p=m\vec v$. La quantità di moto totale di un sistema si conserva se l’impulso totale delle forze esterne è nullo. In un urto in cui due corpi restano uniti, questa conservazione consente di trovare la loro velocità comune anche quando l’energia cinetica diminuisce.
:::

:::esempio{titolo="Il punto di equilibrio della molla"}
Per una massa $m$ su una molla ideale orizzontale, il periodo è $T=2\pi\sqrt{m/k}$. Agli estremi $x=\pm A$ la velocità è nulla e l’energia è $\frac12kA^2$. Attraverso $x=0$ la forza elastica è nulla e l’energia cinetica raggiunge il suo massimo.
:::

## Gravitazione e fluidi

:::definizione{#gravitazione-fluidi titolo="Distanza dal centro e leggi di Keplero"}
Due masse puntiformi si attraggono con forza di modulo $Gm_1m_2/r^2$. Fuori da un pianeta sferico, $r$ è la distanza dal centro e l’accelerazione vale $GM/r^2$. In orbita circolare il rapporto $v^2/r=GM/r^2$ determina la rapidità.

I pianeti descrivono ellissi con il Sole in un fuoco. Il segmento tra Sole e pianeta spazza aree uguali in tempi uguali e il pianeta si muove più rapidamente vicino al Sole. Per orbite attorno allo stesso corpo centrale $T^2/a^3$ è costante, dove $a$ è il semiasse maggiore dell’ellisse.
:::

:::definizione{titolo="Pressione e spinta idrostatica"}
La pressione è la forza normale per unità di area. In un fluido omogeneo fermo la pressione a profondità $h$ è $p_0+\rho gh$, con $p_0$ pressione alla superficie. La spinta di Archimede è diretta verso l’alto e ha modulo $\rho_{\rm fluido}gV_{\rm immerso}$.
:::

:::esempio{titolo="Quanto volume resta sotto la superficie"}
Un blocco di densità $800\,\mathrm{kg/m^3}$ galleggia in acqua di densità $1000\,\mathrm{kg/m^3}$. L’uguaglianza tra peso e spinta dà $V_{\rm immerso}/V=800/1000=0{,}8$.
:::

## Gas, calore e cicli

:::definizione{#termodinamica titolo="Scambi di energia e cambiamenti di stato"}
La temperatura assoluta è espressa in kelvin. Se la temperatura è data in gradi Celsius, $T=t+273{,}15$. Senza cambi di stato il calore scambiato è $Q=mc\Delta T$, dove $c$ è il calore specifico. A temperatura di transizione, il calore di cambiamento di fase ha modulo $mL_{\rm latente}$.

Per un gas perfetto vale $pV=nRT$, con pressione assoluta, volume in metri cubi e temperatura in kelvin. Scegliendo positivo il calore assorbito e positivo il lavoro $L$ svolto dal gas, il primo principio è $\Delta U=Q-L$. A pressione costante, in una trasformazione lenta, $L=p\Delta V$.
:::

:::osservazione{titolo="Rendimento di un ciclo"}
Dopo un ciclo l’energia interna torna al valore iniziale. Se una macchina assorbe $Q_c>0$ dalla sorgente calda e cede $Q_f>0$ a quella fredda, il lavoro utile è $Q_c-Q_f$ e il rendimento è $1-Q_f/Q_c$. Per due sorgenti con temperature assolute $T_c>T_f$, il limite del rendimento è $1-T_f/T_c$.
:::

:::esempio{titolo="Bilancio a volume costante"}
Un gas in un recipiente rigido assorbe $240\,\mathrm J$. Poiché il volume è costante, il lavoro di espansione è nullo. L’energia interna aumenta quindi di $240\,\mathrm J$.
:::

## Cariche, circuiti e campi magnetici

:::definizione{#elettromagnetismo titolo="Campo elettrico e potenziale"}
La forza tra due cariche puntiformi ha modulo $k\lvert q_1q_2\rvert/r^2$. Il campo $\vec E$ è la forza per unità di carica di prova positiva. Il potenziale $V$ è l’energia potenziale per unità di carica e si somma come grandezza scalare. Due campi di versi opposti possono cancellarsi anche in un punto a potenziale diverso da zero.

In un conduttore all’equilibrio elettrostatico il campo interno è nullo. Una carica esterna può ridistribuire le cariche sulla superficie. Per un condensatore vale $Q=C\Delta V$. Nel modello piano ideale con area $A$ e distanza $d$ tra le armature, $C=\varepsilon A/d$.
:::

:::osservazione{titolo="Corrente e forza magnetica"}
La corrente è carica che attraversa una sezione per unità di tempo. Per un resistore ohmico, $\Delta V=RI$ e la potenza dissipata è $P=\Delta V\,I$. In serie si sommano le resistenze. In parallelo la tensione è la stessa su ciascun ramo e le correnti si sommano.

Un filo rettilineo lungo percorso da corrente $I$ genera a distanza $r$ un campo di modulo $\mu_0I/(2\pi r)$. Su una carica in moto la parte magnetica della forza è $q\vec v\times\vec B$. È perpendicolare alla velocità, quindi non modifica l’energia cinetica. Con velocità perpendicolare a un campo uniforme, il raggio della traiettoria è $mv/(\lvert q\rvert B)$.
:::

:::esempio{titolo="Due rami alla stessa tensione"}
Due resistori da $4\,\Omega$ e $12\,\Omega$ sono in parallelo a $12\,\mathrm V$. Le correnti nei due rami valgono $3$ e $1\,\mathrm A$, quindi il generatore eroga $4\,\mathrm A$.
:::

## Onde e ottica

:::definizione{#onde-materia titolo="Propagazione, intensità e sovrapposizione"}
Un’onda periodica di lunghezza $\lambda$ e frequenza $f$ si propaga con velocità $v=\lambda f$. Nel passaggio tra due mezzi la frequenza fissata dalla sorgente resta la stessa. Per due onde coerenti emesse in fase, una differenza di cammino pari a un multiplo intero di $\lambda$ dà interferenza costruttiva. A mezza lunghezza d’onda di differenza, due contributi di uguale ampiezza si cancellano.

L’intensità è potenza per area. Una sorgente isotropa, in assenza di assorbimento, distribuisce la stessa potenza su sfere di area $4\pi r^2$. Una fenditura produce una diffrazione più evidente se la sua larghezza è confrontabile con $\lambda$.
:::

:::osservazione{titolo="Riflessione e rifrazione"}
Gli angoli si misurano dalla normale alla superficie. L’angolo riflesso coincide con quello incidente. Per l’onda rifratta vale $n_1\sin\theta_1=n_2\sin\theta_2$. Se la luce viaggia verso un mezzo di indice maggiore, un raggio obliquo rifratto si avvicina alla normale.
:::

## Atomi e fotoni

:::definizione{#atomi-fotoni titolo="Livelli energetici quantizzati"}
Un nucleo contiene protoni e neutroni. Il numero atomico $Z$ conta i protoni e il numero di massa $A$ conta protoni più neutroni. L’atomo neutro ha $Z$ elettroni.

Gli stati elettronici hanno energie ammesse discrete. Un **orbitale** descrive uno stato spaziale dell’elettrone, con numeri quantici che ne precisano le proprietà. Il numero principale $n$ è intero positivo. Per un dato $n$, il numero orbitale $\ell$ assume i valori interi da $0$ a $n-1$. Il fotone di frequenza $f$ ha energia $E=hf$. Una transizione verso un livello di energia inferiore può emettere un fotone con energia pari alla differenza tra i due livelli.
:::

:::esempio{titolo="Segno del salto energetico"}
Un elettrone passa da $-1{,}5\,\mathrm{eV}$ a $-4{,}5\,\mathrm{eV}$. L’energia dell’atomo scende di $3\,\mathrm{eV}$, che è l’energia del fotone emesso.
:::
