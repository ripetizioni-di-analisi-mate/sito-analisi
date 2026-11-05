---
titolo: Meccanica dei fluidi e modelli della circolazione
sommario: Pressione e galleggiamento, portata e Bernoulli, viscosità e Poiseuille, resistenze idrauliche, tensione superficiale e capillarità.
---

:::percorso
Si applicano equilibrio, conservazione della massa e bilancio energetico della meccanica a liquidi e gas. Si distinguono il modello di fluido ideale e quello viscoso. Portate e resistenze introdurranno un'analogia utile per studiare i circuiti elettrici.
:::

## Stati della materia, densità e pressione

:::definizione{#pressione-densita titolo="Densità e pressione"}
Un **fluido** si deforma continuamente sotto uno sforzo tangenziale e, in quiete, esercita forze perpendicolari alle superfici. Un liquido ha volume circa costante nelle condizioni ordinarie; un gas occupa il recipiente disponibile.
$$
\rho=\frac{m}{V},\qquad p=\frac{F_\perp}{A}.
$$
La densità si misura in $\mathrm{kg/m^3}$, la pressione in pascal. La **pressione relativa** è $p_{\mathrm{rel}}=p_{\mathrm{ass}}-p_{\mathrm{atm}}$. Per la conversione di uso fisiologico, $1\,\mathrm{mmHg}\simeq133{,}3\,\mathrm{Pa}$.
:::

## Equilibrio idrostatico e manometri

:::teorema{#stevino titolo="Legge di Stevino"}
In un fluido in quiete, di densità costante, alla profondità $h$ sotto una superficie alla pressione $p_0$,
$$
p=p_0+\rho gh.
$$
La relazione segue dall'equilibrio verticale di una colonna di fluido. Due punti alla stessa quota nello stesso liquido connesso in quiete hanno la stessa pressione. Nei manometri si percorrono le colonne aggiungendo $\rho g\Delta h$ quando si scende e sottraendolo quando si sale.

Nel barometro di Torricelli il mercurio è sostenuto dalla differenza fra pressione atmosferica e pressione sopra la colonna; trascurando il vapore, $p_{\mathrm{atm}}=\rho_{\mathrm{Hg}}gh$.
:::

:::esempio{titolo="Dislivello e pressione"}
Per un liquido di densità $1060\,\mathrm{kg/m^3}$, due punti separati verticalmente di $0{,}40\,\mathrm{m}$ presentano in quiete una differenza di pressione
$$
\Delta p=1060\cdot9{,}81\cdot0{,}40\,\mathrm{Pa}
\simeq4{,}16\cdot10^3\,\mathrm{Pa}\simeq31{,}2\,\mathrm{mmHg}.
$$
Il punto più basso ha pressione maggiore. È un modello idrostatico; un flusso reale richiede anche il bilancio dinamico.
:::

## Pascal e Archimede

:::teorema{#pascal-archimede titolo="Trasmissione della pressione e spinta"}
Per il **principio di Pascal**, una variazione di pressione applicata a un fluido incomprimibile confinato si trasmette al fluido. In un torchio ideale con pistoni alla stessa quota,
$$
\frac{F_1}{A_1}=\frac{F_2}{A_2}.
$$
Per il **principio di Archimede**, la risultante delle pressioni su un corpo immerso è una forza verso l'alto pari al peso del fluido spostato:
$$
F_A=\rho_f gV_{\mathrm{immerso}}.
$$
Per un corpo omogeneo galleggiante in equilibrio, trascurando aria e tensione superficiale, $\dfrac{V_{\mathrm{immerso}}}{V}=\dfrac{\rho_c}{\rho_f}$. Per un corpo completamente immerso il peso apparente misurato da un sostegno verticale è $mg-F_A$.
:::

## Portata ed equazione di continuità

:::teorema{#continuita titolo="Conservazione della massa"}
La **portata volumetrica** è $Q=\dfrac{\Delta V}{\Delta t}$. Attraverso una sezione di area $A$, $Q=A\bar v$, dove $\bar v$ è la velocità media sulla sezione. In un condotto senza perdite, in regime stazionario,
$$
\rho_1A_1\bar v_1=\rho_2A_2\bar v_2.
$$
Se il fluido è incomprimibile, $A_1\bar v_1=A_2\bar v_2$. Se il raggio si dimezza mantenendo la portata, l'area si riduce a un quarto e la velocità media quadruplica. In una rete ramificata la portata in ingresso è la somma di quelle in uscita.
:::

## Bernoulli e variazioni di sezione

:::teorema{#bernoulli titolo="Bilancio energetico di un fluido ideale"}
Lungo una linea di corrente di un fluido incomprimibile e non viscoso in moto stazionario, senza pompe o turbine fra i punti,
$$
p+\frac12\rho v^2+\rho gh=\text{costante}.
$$
I tre termini hanno dimensione di pressione e descrivono energia per unità di volume. In un tratto orizzontale un aumento della velocità corrisponde a una diminuzione della pressione statica. Per un serbatoio molto ampio con superficie e foro alla stessa pressione esterna, il bilancio dà la legge di Torricelli $v=\sqrt{2g\Delta h}$.
:::

:::osservazione{#circolazione titolo="Stenosi e aneurisma nel modello ideale"}
In un restringimento a portata fissata la velocità aumenta; nel modello ideale orizzontale la pressione statica diminuisce. In un allargamento la velocità diminuisce. Nei vasi reali viscosità, elasticità delle pareti, pulsazioni e possibili turbolenze producono perdite e richiedono un modello più completo. Un recupero ideale della pressione dopo un restringimento non descrive da solo il bilancio reale.
:::

## Viscosità e regimi di moto

:::definizione{#viscosita titolo="Fluidi reali"}
La **viscosità dinamica** $\eta$ misura la resistenza allo scorrimento fra strati. Per un fluido newtoniano in moto piano, il modulo dello sforzo tangenziale è $\tau=\eta\left|\dfrac{dv}{dy}\right|$; $\eta$ si misura in $\mathrm{Pa\,s}$. Il moto laminare ha strati ordinati; quello turbolento presenta fluttuazioni e mescolamento.

Per un tubo di diametro $D$ il numero di Reynolds $\mathrm{Re}=\dfrac{\rho\bar vD}{\eta}$ confronta inerzia e viscosità. La transizione dipende da geometria e perturbazioni; le soglie dei tubi rettilinei non si trasferiscono automaticamente ai vasi sanguigni.
:::

## Poiseuille e resistenze idrauliche

:::teorema{#poiseuille titolo="Flusso laminare in un tubo cilindrico"}
Per un fluido newtoniano incomprimibile, in moto laminare stazionario completamente sviluppato in un tubo rigido cilindrico di raggio $r$ e lunghezza $L$, con aderenza alla parete,
$$
Q=\frac{\pi r^4}{8\eta L}\Delta p,\qquad
R_h=\frac{8\eta L}{\pi r^4},\qquad \Delta p=R_hQ.
$$
Il profilo è parabolico: a distanza $s$ dall'asse,
$$
v(s)=\frac{\Delta p}{4\eta L}(r^2-s^2),\qquad v_{\max}=2\bar v.
$$
A parità delle altre condizioni, dimezzare il raggio moltiplica la resistenza per $16$. A portata fissata occorre quindi una differenza di pressione sedici volte maggiore; a differenza di pressione fissata la portata si riduce a un sedicesimo. Il sangue e i vasi si discostano dalle ipotesi del modello in molte condizioni.
:::

:::teorema{#resistenze-idrauliche titolo="Collegamenti in serie e in parallelo"}
In serie passa la stessa portata e le cadute di pressione si sommano, quindi $R_{\mathrm{eq}}=\sum_iR_i$. In parallelo i rami hanno gli stessi nodi estremi e la stessa differenza di pressione; le portate si sommano, quindi
$$
\frac1{R_{\mathrm{eq}}}=\sum_i\frac1{R_i}.
$$
Due tubi identici in parallelo dimezzano la resistenza equivalente. Questa struttura verrà usata anche nei circuiti elettrici.
:::

## Tensione superficiale e legge di Laplace

:::definizione{#laplace titolo="Interfacce curve"}
La **tensione superficiale** $\gamma$ è una forza per unità di lunghezza, o equivalentemente energia per unità di area, e si misura in $\mathrm{N/m}$. Una superficie curva può separare regioni a pressione diversa. La legge di Young-Laplace dà
$$
\Delta p=\gamma\left(\frac1{R_1}+\frac1{R_2}\right).
$$
$R_1$ e $R_2$ sono i raggi principali di curvatura. Per una singola interfaccia sferica di raggio $r$, $\Delta p=\dfrac{2\gamma}{r}$; per una bolla di sapone sottile con due interfacce si ottiene circa $\dfrac{4\gamma}{r}$. Nel modello sferico di un alveolo, a tensione superficiale fissata un raggio minore richiede una sovrapressione maggiore; il surfattante modifica la tensione superficiale.
:::

## Capillarità

:::teorema{#capillarita titolo="Risalita in un capillare"}
In un capillare verticale di raggio interno $r$, con tensione superficiale $\gamma$, angolo di contatto $\theta$ e densità del gas trascurabile, l'equilibrio fra forza verticale sulla linea di contatto e peso del liquido sollevato dà
$$
2\pi r\gamma\cos\theta=\rho g\pi r^2h,
\qquad h=\frac{2\gamma\cos\theta}{\rho gr}.
$$
Per un liquido che bagna la parete, $\theta<90^\circ$ e $h>0$. Per $\theta>90^\circ$ il livello si abbassa. Il valore cresce in modulo al diminuire del raggio, nelle ipotesi del modello.
:::
