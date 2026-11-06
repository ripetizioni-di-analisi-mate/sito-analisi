---
titolo: "Fluidi in movimento"
sommario: "Portata, continuità, equazione di Bernoulli, efflusso, Venturi, viscosità e limiti del modello ideale."
---

## Portata e regime stazionario

:::definizione{#portata titolo="Volume che attraversa una sezione"}
La **portata volumetrica** è $Q=\dfrac{\Delta V}{\Delta t}$ e si misura in $\mathrm{m^3/s}$. Se la velocità è uniforme su una sezione perpendicolare al moto, $Q=Av$. In caso di profilo non uniforme si usa la velocità media sulla sezione.

Con area $2{,}0\cdot10^{-3}\,\mathrm{m^2}$ e velocità media $3{,}0\,\mathrm{m/s}$ si ottiene $Q=6{,}0\cdot10^{-3}\,\mathrm{m^3/s}$, cioè $6{,}0\,\mathrm{L/s}$. Un litro equivale a $10^{-3}\,\mathrm{m^3}$. In regime stazionario velocità e pressione in un punto fissato non cambiano nel tempo, anche se possono variare da un punto all'altro.
:::

## Continuità

:::teorema{#continuita titolo="Conservazione della massa"}
In un condotto senza perdite, senza accumulo e in regime stazionario, la portata massica si conserva: $\rho_1A_1v_1=\rho_2A_2v_2$. Per un fluido incomprimibile la densità è costante, quindi
$$
A_1v_1=A_2v_2.
$$
Se l'area si dimezza, la velocità raddoppia. Per sezioni circolari $A=\pi r^2$, quindi dimezzare il raggio riduce l'area a un quarto e quadruplica la velocità. Questa distinzione fra raggio e area è necessaria nei problemi di restringimento. In una biforcazione la portata entrante è la somma delle portate uscenti.
:::

::grafico{assi=0 uguale=1 linee="-4,2 -1,2 1,1 4,1;-4,-2 -1,-2 1,-1 4,-1" vettori="-3,0,-1.5,0,v₁;1,0,4,0,v₂" xmin=-5 xmax=5 ymin=-3 ymax=3 titolo="Condotto con restringimento: la velocità aumenta nella sezione più piccola"}

## Equazione di Bernoulli

:::teorema{#bernoulli titolo="Energia lungo una linea di corrente"}
Per un fluido ideale incomprimibile, senza viscosità, in regime stazionario, lungo la stessa linea di corrente e senza pompe o turbine interposte,
$$
p+\frac12\rho v^2+\rho gy=\text{costante}.
$$
Ogni termine ha dimensione di una pressione, cioè energia per unità di volume. Il termine $p$ descrive il lavoro delle forze di pressione; gli altri sono energia cinetica e potenziale gravitazionale per unità di volume. L'equazione deriva dal bilancio dell'energia meccanica di un piccolo volume in moto.

Fra due sezioni alla stessa quota si ha $p_1+\dfrac12\rho v_1^2=p_2+\dfrac12\rho v_2^2$. Con acqua che passa da $2$ a $4\,\mathrm{m/s}$, la pressione diminuisce di $6000\,\mathrm{Pa}$. Se cambiano anche le quote, il contributo $\rho gy$ va mantenuto.
:::

## Effetto Venturi

:::osservazione{#venturi titolo="Restringimenti e pressione"}
In un tubo orizzontale ideale, un restringimento aumenta la velocità per continuità e riduce la pressione secondo Bernoulli. Combinando le due equazioni,
$$
p_1-p_2=\frac12\rho v_1^2\left[\left(\frac{A_1}{A_2}\right)^2-1\right].
$$
Per $A_1=2A_2$ la velocità nella strettoia è doppia e la differenza di pressione è $\dfrac32\rho v_1^2$. Un misuratore Venturi usa questa differenza per risalire alla velocità o alla portata, nel campo di validità del modello.

La frase secondo cui una velocità maggiore implica pressione minore richiede queste ipotesi. In un fluido con pompa, dislivelli o forti dissipazioni il confronto va svolto con il bilancio completo; non si applica come regola indipendente dal contesto.
:::

## La legge di Torricelli

:::teorema{#torricelli titolo="Velocità di efflusso da un serbatoio"}
Un serbatoio aperto ha un piccolo foro a profondità $h$ sotto la superficie. Se la superficie è molto più grande del foro, la sua velocità è trascurabile; superficie e getto sono alla stessa pressione atmosferica. Applicando Bernoulli si ricava
$$
v=\sqrt{2gh}.
$$
Con $h=1{,}25\,\mathrm m$ e $g=9{,}81\,\mathrm{m/s^2}$, $v\simeq4{,}95\,\mathrm{m/s}$. La portata ideale è $Q=Av$. Se il livello scende, diminuiscono sia $h$ sia la portata, perciò il tempo di svuotamento non si calcola usando una portata iniziale costante. Nei getti reali contrazione e dissipazioni richiedono coefficienti correttivi.
:::

::grafico{f="sqrt(2*x)" xmin=0 xmax=8 ymin=0 ymax=5 nomi="h,v" titolo="Nel modello di Torricelli la velocità cresce con la radice della profondità"}

## Viscosità e moto reale

:::osservazione{#viscosita titolo="Resistenza al moto e regime laminare"}
La viscosità dinamica $\eta$ descrive l'attrito interno del fluido e si misura in $\mathrm{Pa\cdot s}$. Per un fluido newtoniano in moto laminare stazionario in un tubo cilindrico lungo di raggio $r$, lunghezza $L$ e differenza di pressione $\Delta p$, la legge di Poiseuille è
$$
Q=\frac{\pi r^4\Delta p}{8\eta L}.
$$
La portata cresce come la quarta potenza del raggio nelle ipotesi indicate. A differenza del fluido ideale, una differenza di pressione è necessaria anche in un tubo orizzontale a sezione costante per compensare le dissipazioni.

Per una piccola sfera di raggio $r$ in un fluido viscoso, in regime di scorrimento lento con numero di Reynolds molto piccolo e lontano dalle pareti, la legge di Stokes dà $F_v=6\pi\eta rv$. Alla velocità limite di caduta, peso, spinta e resistenza si bilanciano. Il numero di Reynolds è $\mathrm{Re}=\dfrac{\rho vD}{\eta}$; per un tubo usa il diametro $D$. I risultati per moto laminare non si estendono automaticamente alla turbolenza.
:::

::grafico{f="1-x^2" xmin=-1 xmax=1 ymin=-0.2 ymax=1.4 nomi="r,v" titolo="Profilo normalizzato della velocità nel moto laminare in un tubo: massimo al centro e nullo alla parete"}
