---
titolo: "Tensioni, deformazioni e legge di Hooke"
sommario: "Come trasformare le tensioni nel piano, ricavare le direzioni principali e applicare la legge di Hooke."
---

:::percorso
Le sollecitazioni di una trave sono risultanti delle tensioni distribuite sulla sua sezione. Qui si studia lo stato di tensione in un punto e si ricavano le deformazioni quando il materiale è elastico lineare e isotropo. Questi risultati servono nel problema di De Saint Venant e nelle verifiche di resistenza.
:::

## Componenti di tensione e deformazione

:::definizione{#tensione-piana titolo="Stato piano di tensione"}
Nel piano $xy$ si indicano con $\sigma_x$ e $\sigma_y$ le componenti normali e con $\tau_{xy}=\tau_{yx}$ la componente tangenziale. Le tensioni normali sono positive a trazione. Nello **stato piano di tensione** si ha $\sigma_z=\tau_{xz}=\tau_{yz}=0$. È un modello adatto, lontano dai bordi caricati, a una lamina sottile caricata nel proprio piano con facce libere.
:::

:::definizione{#deformazioni titolo="Deformazioni infinitesime"}
Per un campo di spostamenti $u_x(x,y)$, $u_y(x,y)$ valgono
$$
\varepsilon_x=\frac{\partial u_x}{\partial x},\qquad
\varepsilon_y=\frac{\partial u_y}{\partial y},\qquad
\gamma_{xy}=\frac{\partial u_x}{\partial y}+\frac{\partial u_y}{\partial x}.
$$
La deformazione normale è la variazione relativa di lunghezza. La deformazione angolare ingegneristica $\gamma_{xy}$ è il doppio della componente tensoriale $\varepsilon_{xy}$.
:::

## Tensioni su un piano inclinato

:::teorema{#trasformazione titolo="Trasformazione delle tensioni nel piano"}
Sia $\theta$ l’angolo antiorario dall’asse $x$ alla normale del piano. Si ponga $p=\dfrac{\sigma_x+\sigma_y}{2}$ e $d=\dfrac{\sigma_x-\sigma_y}{2}$. Con tangente ruotata di $90^\circ$ in senso antiorario rispetto alla normale,
$$
\sigma_n=p+d\cos 2\theta+\tau_{xy}\sin 2\theta,\qquad
\tau_{nt}=-d\sin 2\theta+\tau_{xy}\cos 2\theta.
$$
L’angolo della normale va distinto dall’angolo della retta che rappresenta il piano.
:::

## Cerchio di Mohr e tensioni principali

:::teorema{#mohr titolo="Tensioni principali e massimo taglio nel piano"}
Il cerchio di Mohr ha centro $(p,0)$ e raggio $R=\sqrt{d^2+\tau_{xy}^2}$. Le tensioni principali nel piano sono $\sigma_1=p+R$ e $\sigma_2=p-R$. Sui piani principali la componente tangenziale è nulla. Se $R>0$, per la normale associata a $\sigma_1$ valgono
$$
\cos 2\theta_1=\frac{d}{R},
\qquad
\sin 2\theta_1=\frac{\tau_{xy}}{R}.
$$
Il massimo modulo del taglio nel piano è $R$. Per il massimo taglio tridimensionale in stato piano di tensione si ordinano tutte e tre le tensioni principali $\sigma_1$, $\sigma_2$, $0$ e si divide per due la differenza tra la massima e la minima.
:::

## Legge di Hooke in stato piano di tensione

:::teorema{#hooke-tensione-piana titolo="Legge di Hooke in stato piano di tensione"}
Per materiale elastico lineare isotropo, siano $E$ il modulo di Young, $\nu$ il coefficiente di Poisson e $G=\dfrac{E}{2(1+\nu)}$ il modulo di taglio. In stato piano di tensione,
$$
\varepsilon_x=\frac{\sigma_x-\nu\sigma_y}{E},\qquad
\varepsilon_y=\frac{\sigma_y-\nu\sigma_x}{E},\qquad
\gamma_{xy}=\frac{\tau_{xy}}{G}.
$$
La deformazione fuori dal piano è $\varepsilon_z=-\dfrac{\nu(\sigma_x+\sigma_y)}{E}$. Se si conosce il valore di $E$ in $\mathrm{MPa}$, si usano tensioni in $\mathrm{MPa}$ per ricavare deformazioni adimensionali.
:::

## Stato piano di deformazione

:::teorema{#hooke-deformazione-piana titolo="Legge di Hooke in stato piano di deformazione"}
Se la deformazione lungo $z$ è impedita e valgono $\varepsilon_z=\gamma_{xz}=\gamma_{yz}=0$, si ha
$$
\sigma_z=\nu(\sigma_x+\sigma_y).
$$
Il termine $\sigma_z$ entra quindi nelle deformazioni nel piano. Per esempio, $\varepsilon_x=\dfrac{\sigma_x-\nu(\sigma_y+\sigma_z)}{E}$.
:::

## Misure con una rosetta estensimetrica

:::teorema{#rosetta titolo="Rosetta rettangolare a 0°, 45° e 90°"}
Siano $\varepsilon_0$, $\varepsilon_{45}$ e $\varepsilon_{90}$ le deformazioni normali misurate lungo tre direzioni a $0^\circ$, $45^\circ$ e $90^\circ$ in senso antiorario rispetto all’asse $x$. Dalla trasformazione del tensore di deformazione si ottiene
$$
\varepsilon_x=\varepsilon_0,\qquad
\varepsilon_y=\varepsilon_{90},\qquad
\gamma_{xy}=2\varepsilon_{45}-\varepsilon_0-\varepsilon_{90}.
$$
Il valore $\gamma_{xy}$ così ricavato è la deformazione angolare ingegneristica. Si usa la legge costitutiva adatta per risalire alle tensioni.
:::

## Verifica di resistenza per materiali duttili

:::teorema{#von-mises titolo="Criterio di von Mises"}
In stato piano di tensione, la tensione equivalente di von Mises vale
$$
\sigma_{\mathrm{eq}}=\sqrt{\sigma_x^2-\sigma_x\sigma_y+\sigma_y^2+3\tau_{xy}^2}.
$$
Per un materiale duttile che segue il criterio di von Mises, l’inizio dello snervamento si ha quando $\sigma_{\mathrm{eq}}$ raggiunge la tensione di snervamento in trazione semplice. In taglio puro con $|\tau_{xy}|=40\,\mathrm{MPa}$ risulta $\sigma_{\mathrm{eq}}=40\sqrt{3}\,\mathrm{MPa}$.
:::
