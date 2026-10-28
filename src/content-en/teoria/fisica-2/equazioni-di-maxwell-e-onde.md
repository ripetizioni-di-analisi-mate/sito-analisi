---
titolo: Maxwell's equations and electromagnetic waves
sommario: How the displacement current completes Ampère's law, what the four Maxwell equations are, why they imply waves that travel at the speed of light, and how much energy and momentum these waves carry.
---

## Displacement current

Throughout this topic the fields are in vacuum, unless stated explicitly, and currents are denoted by the lowercase letter $i$, because the letter $I$ denotes the intensity of a wave.

:::richiamo{titolo="Ampère's law"}
In the steady state, for every oriented closed curve $\gamma$ we have $\displaystyle\oint_\gamma \vec{B} \cdot d\vec{l} = \mu_0\, i_{\text{enc}}$, where $i_{\text{enc}}$ is the current enclosed by $\gamma$, that is, the current through any surface bounded by $\gamma$, with the positive direction fixed by the right-hand rule. See the topic on the sources of the magnetic field.
:::

:::osservazione{#incoerenza-legge-ampere titolo="Ampère's law and a charging capacitor"}
Consider a parallel-plate capacitor that is being charged through a wire carrying the current $i$, and a closed curve $\gamma$ that encircles the wire. The flat surface $S_1$ is crossed by the wire, so the current through it is $i$. The surface $S_2$, which has the same boundary, passes between the plates, where there are no moving charges, so the current through it is zero. Ampère's law would therefore give two different values for the same circulation $\displaystyle\oint_\gamma \vec{B} \cdot d\vec{l}$, and in the form of the reminder it holds only for steady currents.

Between the plates, however, there is an electric field that grows while the capacitor charges, and its flux through $S_2$ varies in time. Maxwell added to Ampère's law a term proportional to the rate of change of that flux.

::grafico{assi=0 uguale=1 unicolore=1 linee="0,0 4,0;5,0 9,0;4,-1.6 4,1.6;5,-1.6 5,1.6" curve="2.5+0.25*cos(t),1.0*sin(t),0,6.29" segmenti="2.5,1,2.9,1.6;2.9,1.6,3.5,2.05;3.5,2.05,4.1,2.1;4.1,2.1,4.5,1.85;4.5,1.85,4.5,-1.85;4.5,-1.85,4.1,-2.1;4.1,-2.1,3.5,-2.05;3.5,-2.05,2.9,-1.6;2.9,-1.6,2.5,-1" vettori="0.6,0,1.6,0,i;6.8,0,7.8,0,i" etichette="2.0,1.2,γ;1.85,-0.65,S₁;3.3,2.35,S₂;3.35,-1.25,+q;5.15,-1.25,−q" xmin=-0.2 xmax=9.2 ymin=-2.6 ymax=2.7 titolo="Charging capacitor: the flat surface $S_1$ is crossed by the current $i$, while the surface $S_2$ with the same boundary $\gamma$ passes between the plates, where only the displacement current flows"}

:::

:::definizione{#corrente-di-spostamento titolo="Displacement current"}
Let $S$ be an oriented surface and let $\Phi_E = \displaystyle\iint_S \vec{E} \cdot \hat{n}\, dA$ be the flux of the electric field through it. The **displacement current** through $S$ is
$$
i_s = \varepsilon_0 \frac{d\Phi_E}{dt} .
$$
It is measured in amperes, like a conduction current, because the product $\varepsilon_0 \Phi_E$ is measured in $\mathrm{C^2/(N\cdot m^2)} \cdot \mathrm{N\cdot m^2/C} = \mathrm{C}$. The displacement current does *not* correspond to a motion of charges. For example, if the uniform field between the plates of a capacitor of area $A = 0.010\,\mathrm{m^2}$ grows at the rate $\dfrac{dE}{dt} = 1.0 \cdot 10^{12}\,\mathrm{V/(m\cdot s)}$, the displacement current is $i_s = \varepsilon_0 A \dfrac{dE}{dt} = 8.85 \cdot 10^{-12} \cdot 0.010 \cdot 1.0 \cdot 10^{12}\,\mathrm{A} \approx 0.089\,\mathrm{A}$.
:::

::::teorema{#corrente-spostamento-condensatore titolo="Displacement current in a parallel-plate capacitor"}
Consider a parallel-plate capacitor in vacuum, with plates of area $A$, connected to a circuit carrying the current $i = \dfrac{dq}{dt}$, where $q$ is the charge on the positive plate, and neglect edge effects. Then the displacement current through a surface that passes between the plates, parallel to them, is equal to the conduction current in the wires:
$$
i_s = i .
$$
The displacement current therefore continues between the plates the conduction current, which stops at the plates. Hence the surfaces $S_1$ and $S_2$, which have the same boundary $\gamma$, give the same enclosed current. A capacitor being charged with $i = 2.0\,\mathrm{A}$ is crossed by a displacement current of $2.0\,\mathrm{A}$, whatever the area of the plates and their separation.

:::dimostrazione
Neglecting edge effects, the field between the plates is uniform, perpendicular to the plates, with magnitude $E = \dfrac{\sigma}{\varepsilon_0} = \dfrac{q}{\varepsilon_0 A}$, while outside it is zero. The flux through the surface, oriented from the positive plate toward the negative one, is therefore
$$
\Phi_E = E A = \frac{q}{\varepsilon_0} .
$$
Differentiating with respect to time gives $i_s = \varepsilon_0 \dfrac{d\Phi_E}{dt} = \dfrac{dq}{dt} = i$.
:::
::::

## Ampère-Maxwell law

:::teorema{#legge-ampere-maxwell titolo="Ampère-Maxwell law"}
For every oriented closed curve $\gamma$ and every surface $S$ bounded by $\gamma$, oriented by the right-hand rule,
$$
\oint_\gamma \vec{B} \cdot d\vec{l} = \mu_0\, i_{\text{enc}} + \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt} = \mu_0 \left( i_{\text{enc}} + i_s \right) ,
$$
where $i_{\text{enc}}$ is the conduction current through $S$ and $\Phi_E$ is the flux of the electric field through $S$. It is a postulate, introduced by Maxwell to make Ampère's law consistent with the conservation of charge and confirmed by the experimental discovery of electromagnetic waves.

The law states that the magnetic field is generated both by currents and by electric fields that vary in time. In the steady state the flux $\Phi_E$ is constant and Ampère's law is recovered. For example, if a capacitor is charged with $i = 2.0\,\mathrm{A}$, the circulation of $\vec{B}$ along a curve that encircles the wire is $\mu_0 i \approx 2.5 \cdot 10^{-6}\,\mathrm{T\cdot m}$ even with a surface that passes between the plates.
:::

::::teorema{#campo-magnetico-nel-condensatore titolo="Magnetic field between the plates of a capacitor"}
Consider a parallel-plate capacitor in vacuum with circular plates of radius $R$, being charged with current $i$, and neglect edge effects. In the region between the planes of the plates the magnetic field lines are circles coaxial with the plates, and at distance $r$ from the axis the magnitude of the field is

- $B = \dfrac{\mu_0\, i\, r}{2\pi R^2}$ for $0 \le r \le R$;
- $B = \dfrac{\mu_0\, i}{2\pi r}$ for $r \ge R$.

The field grows linearly with $r$ up to the edge of the plates, where it reaches the maximum value $\dfrac{\mu_0 i}{2\pi R}$, and outside it coincides with the field of a straight wire carrying the current $i$. With $R = 5.0\,\mathrm{cm}$ and $i = 2.0\,\mathrm{A}$ the maximum field is $\dfrac{4\pi \cdot 10^{-7} \cdot 2.0}{2\pi \cdot 0.050}\,\mathrm{T} = 8.0\,\mu\mathrm{T}$.

::grafico{assi=0 uguale=1 unicolore=1 poligoni="2,0 1.879,0.684 1.532,1.286 1,1.732 0.347,1.970 -0.347,1.970 -1,1.732 -1.532,1.286 -1.879,0.684 -2,0 -1.879,-0.684 -1.532,-1.286 -1,-1.732 -0.347,-1.970 0.347,-1.970 1,-1.732 1.532,-1.286 1.879,-0.684" curve="cos(t),sin(t),0,6.29;3*cos(t),3*sin(t),0,6.29" vettori="0.45,1.0,-0.45,1.0,B;0.7,3.0,-0.7,3.0,B" segmenti="0,0,1.414,-1.414" etichette="0.75,-0.55,R;-0.12,-0.12,⊙;-1.45,0.15,⊙;1.25,0.15,⊙;-0.12,-1.45,⊙;-0.95,-1.0,⊙" xmin=-3.6 xmax=3.6 ymin=-3.4 ymax=3.6 legenda=0 titolo="Top view: between the plates the field $\vec{E}$ points out of the page and grows; the magnetic field lines are coaxial circles traversed counterclockwise, inside and outside the edge of the plates"}

::grafico{f="min(x,1/x)+0*sqrt(x)" punti="1,1,pieno" segmenti="1,0,1,1" xmin=-0.3 xmax=4.2 ymin=-0.15 ymax=1.3 nomi="r,B" titolo="Magnitude of the magnetic field as a function of the distance from the axis, with $r$ in units of $R$ and $B$ in units of $\dfrac{\mu_0 i}{2\pi R}$: a straight line up to the edge of the plates, then a $\dfrac{1}{r}$ behavior"}

:::dimostrazione
The electric field between the plates is uniform and equal to $E = \dfrac{q}{\varepsilon_0 \pi R^2}$, so $\dfrac{dE}{dt} = \dfrac{i}{\varepsilon_0 \pi R^2}$. By the rotational symmetry about the axis, the magnetic field is tangent to the coaxial circles and has constant magnitude on each of them. Apply the Ampère-Maxwell law to the circle $\gamma$ of radius $r$, in a plane parallel to the plates and lying between them, with the surface equal to the disk bounded by $\gamma$. The disk is not crossed by conduction currents, so
$$
2\pi r\, B = \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt} .
$$
If $r \le R$, the flux is $\Phi_E = E\,\pi r^2$, hence $2\pi r\, B = \mu_0 \varepsilon_0\, \pi r^2\, \dfrac{i}{\varepsilon_0 \pi R^2} = \mu_0\, i\, \dfrac{r^2}{R^2}$, which gives the first formula. If $r \ge R$, the electric field is zero outside the plates, so $\Phi_E = E\,\pi R^2 = \dfrac{q}{\varepsilon_0}$ and $2\pi r\, B = \mu_0\, i$, which gives the second.
:::
::::

## Maxwell's equations

:::richiamo{titolo="Flux and circulation"}
The flux of a vector field $\vec{F}$ through an oriented surface $S$ with unit normal $\hat{n}$ is the surface integral $\displaystyle\iint_S \vec{F} \cdot \hat{n}\, dA$; for a closed surface one writes $\displaystyle\oint_S \vec{F} \cdot \hat{n}\, dA$, with $\hat{n}$ pointing outward. The circulation of $\vec{F}$ along an oriented closed curve $\gamma$ is the line integral $\displaystyle\oint_\gamma \vec{F} \cdot d\vec{l}$. See the Mathematical Analysis 2 topics on curves and line integrals and on surfaces, fluxes and the theorems of Gauss and Stokes.
:::

:::teorema{#equazioni-di-maxwell titolo="Maxwell's equations in integral form"}
In vacuum, in the presence of charges and currents, the electric field and the magnetic field satisfy, for every closed surface $S$ and every oriented closed curve $\gamma$ that is the boundary of a fixed surface $\Sigma$, oriented by the right-hand rule, the four equations
$$
\begin{cases}
\displaystyle\oint_S \vec{E} \cdot \hat{n}\, dA = \frac{Q_{\text{int}}}{\varepsilon_0} \\[14pt]
\displaystyle\oint_S \vec{B} \cdot \hat{n}\, dA = 0 \\[14pt]
\displaystyle\oint_\gamma \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt} \\[14pt]
\displaystyle\oint_\gamma \vec{B} \cdot d\vec{l} = \mu_0\, i_{\text{enc}} + \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt}
\end{cases}
$$
where $Q_{\text{int}}$ is the charge contained in $S$, $\Phi_B$ and $\Phi_E$ are the fluxes of the two fields through $\Sigma$, and $i_{\text{enc}}$ is the conduction current through $\Sigma$. They are postulates, which bring together Gauss's law, Gauss's law for magnetism, the Faraday-Neumann-Lenz law and the Ampère-Maxwell law; their consequences are confirmed by experiment as long as quantum effects are negligible.

Together with the **Lorentz force** $\vec{F} = q \left( \vec{E} + \vec{v} \times \vec{B} \right)$, which describes the action of the fields on charges, Maxwell's equations contain all of classical electromagnetism.
:::

:::osservazione{#significato-equazioni-maxwell titolo="Meaning of the four equations"}
- Gauss's law states that charges are the sources of the electric field; see the topic on the flux of the electric field and Gauss's law.
- Gauss's law for magnetism states that the flux of the magnetic field through every closed surface is zero, so there are no isolated magnetic charges and the magnetic field lines have neither a beginning nor an end.
- The Faraday-Neumann-Lenz law states that a varying magnetic field generates an electric field with nonzero circulation, hence *not* conservative; see the topic on electromagnetic induction.
- The Ampère-Maxwell law states that the magnetic field is generated by currents and by varying electric fields.

In statics the time derivatives are zero and the equations for $\vec{E}$ and for $\vec{B}$ decouple; when the fields vary, the third and the fourth equations link them to each other.
:::

:::osservazione{#maxwell-nel-vuoto titolo="Maxwell's equations away from charges and currents"}
In a region with no charges and no currents we have $Q_{\text{int}} = 0$ and $i_{\text{enc}} = 0$, and the equations become
$$
\begin{cases}
\displaystyle\oint_S \vec{E} \cdot \hat{n}\, dA = 0 \\[14pt]
\displaystyle\oint_S \vec{B} \cdot \hat{n}\, dA = 0 \\[14pt]
\displaystyle\oint_\gamma \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt} \\[14pt]
\displaystyle\oint_\gamma \vec{B} \cdot d\vec{l} = \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt}
\end{cases}
$$
A varying magnetic field generates an electric field, and a varying electric field generates a magnetic field. The two fields can therefore sustain each other even far from the charges that produced them, and propagate through space as **electromagnetic waves**.
:::

## Local form of Maxwell's equations

:::richiamo{titolo="Divergence theorem and Stokes' theorem"}
Let $\vec{F}$ be a vector field of class $C^1$. For a region $V$ bounded by a closed surface $S$ with outward normal, $\displaystyle\oint_S \vec{F} \cdot \hat{n}\, dA = \iiint_V \nabla \cdot \vec{F}\, dV$, and for an oriented surface $\Sigma$ with boundary $\gamma$ oriented by the right-hand rule, $\displaystyle\oint_\gamma \vec{F} \cdot d\vec{l} = \iint_\Sigma \left( \nabla \times \vec{F} \right) \cdot \hat{n}\, dA$. See the Mathematical Analysis 2 topic on surfaces, fluxes and the theorems of Gauss and Stokes.
:::

::::teorema{#forma-locale-maxwell titolo="Maxwell's equations in local form"}
Suppose that the fields are of class $C^1$ and that the charges and currents are described by a continuous volume charge density $\rho$ and a continuous current density $\vec{J}$. Then Maxwell's equations in integral form are equivalent to the equations
$$
\begin{cases}
\nabla \cdot \vec{E} = \dfrac{\rho}{\varepsilon_0} \\[10pt]
\nabla \cdot \vec{B} = 0 \\[10pt]
\nabla \times \vec{E} = -\dfrac{\partial \vec{B}}{\partial t} \\[10pt]
\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \varepsilon_0 \dfrac{\partial \vec{E}}{\partial t}
\end{cases}
$$
at every point and at every instant. The term $\varepsilon_0 \dfrac{\partial \vec{E}}{\partial t}$ is the **displacement current density**, which, integrated over a fixed surface, gives the displacement current.

:::dimostrazione
We prove that Gauss's law implies the first equation. Let $V$ be any region with boundary $S$. The enclosed charge is $Q_{\text{int}} = \displaystyle\iiint_V \rho\, dV$, and by the divergence theorem Gauss's law becomes
$$
\iiint_V \left( \nabla \cdot \vec{E} - \frac{\rho}{\varepsilon_0} \right) dV = 0 .
$$
The integrand is continuous; if it were nonzero at some point, by the sign-preservation property the integral over a small sphere around that point would be nonzero. Since the integral vanishes over *every* region, $\nabla \cdot \vec{E} = \dfrac{\rho}{\varepsilon_0}$ everywhere. The second equation follows in the same way.

For the third, apply Stokes' theorem to the Faraday-Neumann-Lenz law on a fixed surface $\Sigma$; since $\Sigma$ does not depend on time, the derivative of the flux is the flux of the derivative, and
$$
\iint_\Sigma \left( \nabla \times \vec{E} + \frac{\partial \vec{B}}{\partial t} \right) \cdot \hat{n}\, dA = 0
$$
for every $\Sigma$; choosing small disks perpendicular to the integrand vector, one concludes that the integrand is zero. The fourth is obtained in the same way, with $i_{\text{enc}} = \displaystyle\iint_\Sigma \vec{J} \cdot \hat{n}\, dA$. The converse implications are obtained by integrating.
:::
::::

:::osservazione{#conservazione-carica-maxwell titolo="Conservation of charge"}
For fields of class $C^2$ the divergence of a curl is zero, so taking the divergence of both sides of the fourth equation in local form gives $0 = \mu_0 \nabla \cdot \vec{J} + \mu_0 \varepsilon_0 \dfrac{\partial}{\partial t} \left( \nabla \cdot \vec{E} \right)$. Substituting $\nabla \cdot \vec{E} = \dfrac{\rho}{\varepsilon_0}$ from the first equation,
$$
\nabla \cdot \vec{J} + \frac{\partial \rho}{\partial t} = 0 ,
$$
which is the **continuity equation**: integrated over a fixed region, it says that the charge leaving the region per unit time is equal to the decrease of the charge contained in it. Without Maxwell's term the same computation would give $\nabla \cdot \vec{J} = 0$, a relation that is false where charge accumulates, as on the plates of a charging capacitor. The displacement current therefore makes Maxwell's equations consistent with the conservation of charge.
:::

## Wave equation and the speed of light

:::definizione{#onda-piana titolo="Plane wave"}
An electromagnetic wave is called **plane** if, at every instant, the fields are the same at all points of each plane perpendicular to a fixed direction, called the direction of propagation. With the $x$ axis oriented along the direction of propagation we consider the case
$$
\vec{E} = E(x,t)\,\hat{\jmath} , \qquad \vec{B} = B(x,t)\,\hat{k} ,
$$
in which the electric field points along $y$ and the magnetic field along $z$. From Maxwell's equations in vacuum it follows that the components of the fields along the direction of propagation are constant, and in a wave they can be set equal to zero; for this reason electromagnetic waves are called **transverse**. The wave emitted by a small source has spherical wavefronts, which far from the source are plane to a good approximation.
:::

:::richiamo{titolo="Schwarz's theorem"}
If a function $f(x,t)$ has continuous mixed second partial derivatives, then $\dfrac{\partial^2 f}{\partial x\, \partial t} = \dfrac{\partial^2 f}{\partial t\, \partial x}$. See the Mathematical Analysis 2 topic on differential calculus in several variables.
:::

::::teorema{#equazione-delle-onde titolo="Wave equation"}
Consider a plane wave in vacuum, in a region with no charges and no currents, with $\vec{E} = E(x,t)\,\hat{\jmath}$ and $\vec{B} = B(x,t)\,\hat{k}$ of class $C^2$. Then
$$
\frac{\partial E}{\partial x} = -\frac{\partial B}{\partial t} , \qquad \frac{\partial B}{\partial x} = -\mu_0 \varepsilon_0 \frac{\partial E}{\partial t} ,
$$
and each of the two fields satisfies the **wave equation**
$$
\frac{\partial^2 E}{\partial x^2} = \mu_0 \varepsilon_0 \frac{\partial^2 E}{\partial t^2} , \qquad \frac{\partial^2 B}{\partial x^2} = \mu_0 \varepsilon_0 \frac{\partial^2 B}{\partial t^2} .
$$
The first two relations link the variation in space of each field to the variation in time of the other, and are used to find $B$ when $E$ is known. The constant $\mu_0 \varepsilon_0$ is measured in $\mathrm{s^2/m^2}$, so it is the reciprocal of the square of a speed.

::grafico{assi=0 uguale=1 unicolore=1 linee="2,0 4.4,0 4.4,3 2,3 2,0" vettori="2,0.7,2,2.1,E(x);4.4,0.5,4.4,2.7,E(x+dx);3.6,3.35,3.0,3.35" etichette="3.0,1.4,⊙ B;3.0,-0.45,dx;1.15,1.4,h" riferimento="-0.6,-0.4,0,1.1,x,y" xmin=-1 xmax=6.6 ymin=-1 ymax=3.9 titolo="Rectangle with sides $dx$ and $h$ in the $xy$ plane, traversed counterclockwise: the circulation of $\vec{E}$ is $\left[ E(x+dx) - E(x) \right] h$, and the field $\vec{B}$, perpendicular to the page, crosses its surface"}

:::dimostrazione
Apply the Faraday-Neumann-Lenz law to the rectangle in the $xy$ plane with sides parallel to the axes, of lengths $dx$ and $h$, with its left side at the abscissa $x$, traversed counterclockwise as seen from the positive side of the $z$ axis, so that the normal is $\hat{k}$. On the sides parallel to the $x$ axis the electric field, directed along $y$, is perpendicular to the path and does not contribute to the circulation. On the side at abscissa $x + dx$, traversed upward, the contribution is $E(x+dx,t)\,h$; on the side at abscissa $x$, traversed downward, it is $-E(x,t)\,h$. To first order in $dx$, $E(x+dx,t) - E(x,t) = \dfrac{\partial E}{\partial x}\, dx$, and the flux of the magnetic field through the rectangle is $B\, h\, dx$; therefore
$$
\frac{\partial E}{\partial x}\, h\, dx = -\frac{\partial B}{\partial t}\, h\, dx
\quad\Longrightarrow\quad
\frac{\partial E}{\partial x} = -\frac{\partial B}{\partial t} .
$$
Next apply the Ampère-Maxwell law, with no conduction currents, to the rectangle in the $xz$ plane with sides $dx$ and $h$, oriented with normal $\hat{\jmath}$. With this orientation the side at abscissa $x$ is traversed in the positive direction of the $z$ axis and the side at abscissa $x + dx$ in the negative direction, so the circulation of $\vec{B}$ is $\left[ B(x,t) - B(x+dx,t) \right] h = -\dfrac{\partial B}{\partial x}\, h\, dx$, while the flux of the electric field is $E\, h\, dx$. Hence
$$
-\frac{\partial B}{\partial x}\, h\, dx = \mu_0 \varepsilon_0 \frac{\partial E}{\partial t}\, h\, dx
\quad\Longrightarrow\quad
\frac{\partial B}{\partial x} = -\mu_0 \varepsilon_0 \frac{\partial E}{\partial t} .
$$
Differentiating the first relation with respect to $x$ and the second with respect to $t$, and exchanging the order of differentiation by **Schwarz's theorem**, we obtain
$$
\begin{aligned}
\frac{\partial^2 E}{\partial x^2} &= -\frac{\partial^2 B}{\partial x\, \partial t} \\[6pt]
&= -\frac{\partial}{\partial t} \left( \frac{\partial B}{\partial x} \right) \\[6pt]
&= \mu_0 \varepsilon_0 \frac{\partial^2 E}{\partial t^2} .
\end{aligned}
$$
The equation for $B$ is obtained in the same way, differentiating the first relation with respect to $t$ and the second with respect to $x$.
:::
::::

::::teorema{#soluzioni-equazione-onde titolo="Traveling waves"}
Let $v = \dfrac{1}{\sqrt{\mu_0 \varepsilon_0}}$ and let $f$ be a function of one variable of class $C^2$. Then
$$
E(x,t) = f(x - vt)
$$
is a solution of the wave equation, and the same holds for $E(x,t) = g(x + vt)$ with $g$ of class $C^2$. At the instant $t$ the graph of $f(x - vt)$ is the graph of $f$ translated by $vt$ in the positive direction of the $x$ axis, so the profile of the field moves without changing shape with speed $v$; the function $g(x + vt)$ describes a profile that moves in the negative direction. One also proves that every solution of the wave equation is the sum $f(x - vt) + g(x + vt)$ of a wave traveling toward increasing $x$ and one traveling toward decreasing $x$ (d'Alembert's formula).

::grafico{f="exp(-(x-2)^2);exp(-(x-6.5)^2)" vettori="2,1.18,6.5,1.18,v t₁" xmin=-0.5 xmax=9.5 ymin=-0.3 ymax=1.5 nomi="x,E" legenda="t = 0;t = t_1" titolo="A pulse $E(x,t) = f(x - vt)$ at the instants $0$ and $t_1$: the profile is the same, translated by the distance $v t_1$ in the direction of propagation"}

:::dimostrazione
Setting $s = x - vt$, by the chain rule $\dfrac{\partial E}{\partial x} = f'(s)$ and $\dfrac{\partial E}{\partial t} = -v\, f'(s)$; differentiating again gives $\dfrac{\partial^2 E}{\partial x^2} = f''(s)$ and $\dfrac{\partial^2 E}{\partial t^2} = v^2 f''(s)$. Since $\mu_0 \varepsilon_0 v^2 = 1$,
$$
\mu_0 \varepsilon_0 \frac{\partial^2 E}{\partial t^2} = \mu_0 \varepsilon_0\, v^2 f''(s) = f''(s) = \frac{\partial^2 E}{\partial x^2} .
$$
For $g(x + vt)$ the computation is the same, with $v$ in place of $-v$ in the time derivative.
:::
::::

:::teorema{#velocita-della-luce titolo="Speed of electromagnetic waves"}
Electromagnetic waves propagate in vacuum with speed
$$
c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}} = \frac{1}{\sqrt{4\pi \cdot 10^{-7} \cdot 8.85 \cdot 10^{-12}}}\,\mathrm{m/s} \approx 3.00 \cdot 10^{8}\,\mathrm{m/s} .
$$
The result follows from the theorem on traveling waves, and the value coincides with the measured speed of light; from this coincidence Maxwell concluded that light is an electromagnetic wave. The speed depends neither on the frequency nor on the amplitude of the wave. Light from the Sun, which is $1.50 \cdot 10^{11}\,\mathrm{m}$ from the Earth, arrives after $\dfrac{1.50 \cdot 10^{11}}{3.00 \cdot 10^{8}}\,\mathrm{s} = 500\,\mathrm{s}$, that is, about $8.3$ minutes.
:::

:::osservazione{#sorgenti-onde titolo="How electromagnetic waves are produced"}
Electromagnetic waves are produced by **accelerated** charges. In an antenna the charges oscillate along a conductor with the frequency $f$ of the alternating current flowing in it, and the antenna emits a wave of the same frequency. The current in the antenna is produced by an oscillating circuit, for which see the topic on electrical oscillations and alternating-current circuits.
:::

## Harmonic plane waves

:::definizione{#onda-armonica titolo="Harmonic wave"}
A plane wave traveling in the positive direction of the $x$ axis is called **harmonic** if the electric field has the form
$$
E(x,t) = E_0 \sin(kx - \omega t) ,
$$
where $E_0 > 0$ is the amplitude, $k > 0$ the wave number and $\omega > 0$ the angular frequency. At a fixed point the field oscillates with period $T = \dfrac{2\pi}{\omega}$ and frequency $f = \dfrac{1}{T}$; at a fixed instant the field is periodic in space with period $\lambda = \dfrac{2\pi}{k}$, called the **wavelength**. Since $E_0 \sin(kx - \omega t) = E_0 \sin\left( k \left( x - \dfrac{\omega}{k}\, t \right) \right)$, the wave is a traveling wave with speed $\dfrac{\omega}{k}$, which in vacuum is equal to $c$; hence
$$
c = \frac{\omega}{k} = \lambda f ,
$$
that is, in one period a crest of the wave advances by one wavelength. The field $E_0 \sin(kx + \omega t)$ describes a harmonic wave traveling in the negative direction of the $x$ axis. For example, a radio wave of frequency $f = 100\,\mathrm{MHz}$ has $\lambda = \dfrac{3.00 \cdot 10^{8}}{1.00 \cdot 10^{8}}\,\mathrm{m} = 3.00\,\mathrm{m}$, $\omega = 2\pi f \approx 6.28 \cdot 10^{8}\,\mathrm{rad/s}$ and $k = \dfrac{2\pi}{\lambda} \approx 2.09\,\mathrm{rad/m}$.

::grafico{f="sin(pi*x/2)" segmenti="1,1.25,5,1.25;1,0,1,1;5,0,5,1" punti="1,1,pieno;5,1,pieno" etichette="2.85,1.38,λ;6.3,-1.25,E₀ sin(kx)" xmin=-0.5 xmax=9.2 ymin=-1.5 ymax=1.6 nomi="x,E" titolo="Electric field of a harmonic wave at the instant $t = 0$, in units of $E_0$: two consecutive crests are one wavelength $\lambda$ apart"}

:::

::::teorema{#relazione-e-cb titolo="Relation between the electric field and the magnetic field"}
In a plane traveling wave in vacuum propagating in the positive direction of the $x$ axis, with electric field $\vec{E} = E(x,t)\,\hat{\jmath}$, the magnetic field is $\vec{B} = B(x,t)\,\hat{k}$ with
$$
B(x,t) = \frac{E(x,t)}{c} .
$$
At every point and every instant the magnitudes therefore satisfy $E = cB$. The two fields oscillate in phase, are perpendicular to each other and to the direction of propagation, and the cross product $\vec{E} \times \vec{B}$ points in the direction of propagation of the wave. For a wave traveling in the negative direction of the $x$ axis, instead, $B = -\dfrac{E}{c}$, and $\vec{E} \times \vec{B}$ points along $-\hat{\imath}$. The relation gives the magnetic field of a wave when the electric field is known; for example, $E_0 = 300\,\mathrm{V/m}$ corresponds to $B_0 = \dfrac{300}{3.00 \cdot 10^{8}}\,\mathrm{T} = 1.00\,\mu\mathrm{T}$.

::grafico{assi=0 uguale=1 linee="0,0 10.2,0;0,0 0,2.3;0,0 -1.2,-1.2" curve="t,1.6*sin(t),0,9.42;t-0.75*sin(t),-0.75*sin(t),0,9.42" vettori="7.854,0,7.854,1.6,E;8.9,-1.4,10.3,-1.4,c;7.854,0,7.104,-0.75,B" etichette="10.35,-0.1,x;0.12,2.4,y;-1.55,-1.45,z" xmin=-1.8 xmax=10.8 ymin=-2 ymax=2.6 legenda=0 titolo="Harmonic plane wave traveling along the $x$ axis: the electric field oscillates along $y$, the magnetic field along $z$, in phase, and $\vec{E} \times \vec{B}$ points in the direction of propagation"}

:::dimostrazione
Let $E(x,t) = f(x - ct)$ and look for the magnetic field in the form $B(x,t) = g(x - ct)$ of a wave traveling in the same direction. The first relation of the wave equation, $\dfrac{\partial E}{\partial x} = -\dfrac{\partial B}{\partial t}$, becomes
$$
f'(x - ct) = c\, g'(x - ct) ,
$$
so $g = \dfrac{f}{c}$ up to an additive constant. The constant represents a static, uniform magnetic field superposed on the wave, which is not part of the wave and is set equal to zero; hence $B = \dfrac{E}{c}$. Finally $\vec{E} \times \vec{B} = E B \left( \hat{\jmath} \times \hat{k} \right) = \dfrac{E^2}{c}\,\hat{\imath}$, which points along $\hat{\imath}$ at every point where $E \neq 0$. For the wave traveling in the negative direction, with $E = f(x + ct)$ and $B = g(x + ct)$, the same relation gives $f' = -c\, g'$, that is, $B = -\dfrac{E}{c}$.
:::
::::

:::osservazione{#sovrapposizione-onde titolo="Superposition of waves"}
The wave equation is linear, so the sum of two solutions is again a solution. Two waves that meet are superposed, and the resulting field is the vector sum of the fields. Interference and diffraction are based on superposition; for these see the topic on geometrical and wave optics. For example, the sum of two harmonic waves with the same amplitude traveling in opposite directions is
$$
E_0 \sin(kx - \omega t) + E_0 \sin(kx + \omega t) = 2 E_0 \sin(kx) \cos(\omega t) ,
$$
a **standing wave**, in which the electric field is zero at every instant at the points with $\sin(kx) = 0$, which are $\dfrac{\lambda}{2}$ apart.
:::

## Energy and the Poynting vector

:::richiamo{titolo="Energy density of the electric field and of the magnetic field"}
In vacuum the electric field has energy density $u_E = \dfrac{1}{2} \varepsilon_0 E^2$ and the magnetic field has energy density $u_B = \dfrac{B^2}{2\mu_0}$. See the topics on conductors, capacitors and dielectrics and on electromagnetic induction.
:::

::::teorema{#densita-energia-onda titolo="Energy density of a wave"}
In a plane traveling wave in vacuum the electric and magnetic energy densities are equal at every point and every instant, and the total energy density is
$$
u = u_E + u_B = \varepsilon_0 E^2 = \frac{B^2}{\mu_0} .
$$
For a harmonic wave the density $u = \varepsilon_0 E_0^2 \sin^2(kx - \omega t)$ oscillates between $0$ and $\varepsilon_0 E_0^2$, and its time average is $\langle u \rangle = \dfrac{1}{2} \varepsilon_0 E_0^2$, because the average value of $\sin^2$ over one period is $\dfrac{1}{2}$. With $E_0 = 100\,\mathrm{V/m}$ we have $\langle u \rangle = \dfrac{1}{2} \cdot 8.85 \cdot 10^{-12} \cdot 100^2\,\mathrm{J/m^3} \approx 4.4 \cdot 10^{-8}\,\mathrm{J/m^3}$.

:::dimostrazione
By the relation between the fields $B = \dfrac{E}{c}$, and by the speed of electromagnetic waves $c^2 = \dfrac{1}{\mu_0 \varepsilon_0}$, so
$$
u_B = \frac{B^2}{2\mu_0} = \frac{E^2}{2\mu_0 c^2} = \frac{\mu_0 \varepsilon_0 E^2}{2\mu_0} = \frac{1}{2} \varepsilon_0 E^2 = u_E .
$$
Adding gives $u = \varepsilon_0 E^2$, and substituting $E = cB$ gives $u = \varepsilon_0 c^2 B^2 = \dfrac{B^2}{\mu_0}$.
:::
::::

:::definizione{#vettore-di-poynting titolo="Poynting vector"}
The **Poynting vector** is
$$
\vec{S} = \frac{1}{\mu_0}\, \vec{E} \times \vec{B} ,
$$
and it is measured in $\mathrm{W/m^2}$, because $\dfrac{\mathrm{V/m} \cdot \mathrm{T}}{\mathrm{T \cdot m/A}} = \mathrm{V \cdot A/m^2}$. In a plane traveling wave $\vec{S}$ points in the direction of propagation and, since $\vec{E}$ and $\vec{B}$ are perpendicular and $B = \dfrac{E}{c}$, it has magnitude
$$
S = \frac{EB}{\mu_0} = \frac{E^2}{\mu_0 c} .
$$
The magnitude of $\vec{S}$ is the power through a surface of unit area perpendicular to the direction of propagation, as stated by the theorem on the energy flux of a plane wave. At a point where $E = 300\,\mathrm{V/m}$ and $B = 1.00\,\mu\mathrm{T}$ we have $S = \dfrac{300 \cdot 1.00 \cdot 10^{-6}}{4\pi \cdot 10^{-7}}\,\mathrm{W/m^2} \approx 239\,\mathrm{W/m^2}$.
:::

::::teorema{#poynting-e-densita titolo="Energy flux of a plane wave"}
In a plane traveling wave in vacuum, the energy that in the time $dt$ crosses a surface of area $A$ perpendicular to the direction of propagation is $dU = S A\, dt$, with
$$
S = u\, c .
$$
The energy of the field therefore travels with the wave at the speed $c$, and the magnitude of the Poynting vector is the power per unit area carried by the wave.

::grafico{assi=0 uguale=1 linee="2,0 5,0;2,2 5,2" curve="5+0.35*cos(t),1+sin(t),0,6.29;2+0.35*cos(t),1+sin(t),0,6.29" vettori="5.4,1,7.2,1,S" segmenti="2,-0.45,5,-0.45" etichette="3.15,-0.85,c dt;4.95,0.85,A" xmin=0.8 xmax=7.8 ymin=-1.2 ymax=2.6 legenda=0 titolo="In the time $dt$ the energy contained in the cylinder with base $A$ and height $c\,dt$, that is, $u A c\,dt$, crosses the surface $A$"}

:::dimostrazione
The wave advances by the distance $c\, dt$ in the time $dt$, so the energy that crosses the surface is the energy contained in the cylinder with base $A$ and height $c\, dt$ that precedes it. If $dt$ is small enough that the energy density in the cylinder can be considered constant, $dU = u A c\, dt$. By the energy density of a wave $u c = \varepsilon_0 c E^2$, and since $\varepsilon_0 c = \dfrac{\varepsilon_0 \mu_0 c^2}{\mu_0 c} = \dfrac{1}{\mu_0 c}$ we obtain
$$
u\, c = \frac{E^2}{\mu_0 c} = \frac{E B}{\mu_0} = S .
$$
:::
::::

:::definizione{#intensita titolo="Intensity of a wave"}
The **intensity** $I$ of a wave is the time average of the magnitude of the Poynting vector, that is, the average power per unit area carried by the wave, and it is measured in $\mathrm{W/m^2}$. For a harmonic wave of amplitude $E_0$, since the average value of $\sin^2$ over one period is $\dfrac{1}{2}$,
$$
I = \langle S \rangle = \frac{E_0^2}{2\mu_0 c} = \frac{1}{2}\, c\, \varepsilon_0 E_0^2 = \frac{E_0 B_0}{2\mu_0} = c \langle u \rangle .
$$
The intensity is proportional to the square of the amplitude, so doubling the amplitude of the electric field quadruples the intensity. When the intensity is known, $E_0 = \sqrt{\dfrac{2I}{c\, \varepsilon_0}}$. Solar radiation, outside the Earth's atmosphere, has intensity $I \approx 1.36\,\mathrm{kW/m^2}$; a harmonic wave with the same intensity has $E_0 = \sqrt{\dfrac{2 \cdot 1360}{3.00 \cdot 10^{8} \cdot 8.85 \cdot 10^{-12}}}\,\mathrm{V/m} \approx 1.0 \cdot 10^{3}\,\mathrm{V/m}$ and $B_0 = \dfrac{E_0}{c} \approx 3.4\,\mu\mathrm{T}$.
:::

:::teorema{#sorgente-isotropa titolo="Intensity of an isotropic source"}
A point source that emits the average power $P$ uniformly in all directions, called an **isotropic** source, in a medium that does not absorb energy produces at distance $r$ the intensity
$$
I(r) = \frac{P}{4\pi r^2} .
$$
The formula follows from the conservation of energy. The average power $P$ crosses every sphere centered at the source and is distributed uniformly over the area $4\pi r^2$. The intensity decreases as the inverse square of the distance and the amplitude of the field, proportional to $\sqrt{I}$, as the inverse of the distance. A lamp that emits the light power $P = 10\,\mathrm{W}$ produces at $r = 2.0\,\mathrm{m}$ the intensity $I = \dfrac{10}{4\pi \cdot 2.0^2}\,\mathrm{W/m^2} \approx 0.20\,\mathrm{W/m^2}$.
:::

## Momentum and radiation pressure

:::teorema{#quantita-di-moto-radiazione titolo="Momentum of an electromagnetic wave"}
An electromagnetic wave that carries the energy $U$ in vacuum also carries a momentum of magnitude
$$
p = \frac{U}{c} ,
$$
directed in the direction of propagation. This follows from Maxwell's equations and the Lorentz force, here without proof, and is confirmed by measurements of the force exerted by light. The factor $\dfrac{1}{c}$ is very small; for example a laser pulse of $1.0\,\mathrm{J}$ carries $p = \dfrac{1.0}{3.00 \cdot 10^{8}}\,\mathrm{kg \cdot m/s} \approx 3.3 \cdot 10^{-9}\,\mathrm{kg \cdot m/s}$.
:::

:::richiamo{titolo="Impulse-momentum theorem"}
If in the time interval $\Delta t$ the momentum of a body changes by $\Delta\vec{p}$, the average force acting on the body is $\vec{F}_m = \dfrac{\Delta \vec{p}}{\Delta t}$. See the topic on systems of particles, momentum and collisions.
:::

::::teorema{#pressione-di-radiazione titolo="Radiation pressure"}
Consider a plane wave of intensity $I$ incident perpendicularly on a flat surface of area $A$. The average force exerted by the wave on the surface is perpendicular to the surface and points in the direction of propagation of the wave, and the **radiation pressure** $p_{\text{rad}} = \dfrac{F}{A}$ is

- $p_{\text{rad}} = \dfrac{I}{c}$ if the surface absorbs all the radiation;
- $p_{\text{rad}} = \dfrac{2I}{c}$ if the surface reflects all the radiation.

With $I = 1.36\,\mathrm{kW/m^2}$ and an absorbing surface we have $p_{\text{rad}} = \dfrac{1360}{3.00 \cdot 10^{8}}\,\mathrm{Pa} \approx 4.5 \cdot 10^{-6}\,\mathrm{Pa}$, of the order of $10^{-11}$ times atmospheric pressure. Hence radiation pressure matters only for very light bodies with a large surface, such as solar sails, and for very small dust grains.

:::dimostrazione
In the time $\Delta t$ the energy $U = I A\, \Delta t$ reaches the surface, and by the theorem on the momentum of an electromagnetic wave it carries the momentum $\dfrac{U}{c} = \dfrac{I A\, \Delta t}{c}$, perpendicular to the surface. If the surface absorbs the radiation, this momentum is transferred to the surface. If it reflects it, the reflected wave has momentum opposite to that of the incident wave; so the momentum of the radiation changes by $\dfrac{2U}{c}$ in magnitude, and the surface receives an equal and opposite momentum. By the **impulse-momentum theorem** the average force is the momentum received divided by $\Delta t$, hence
$$
F = \frac{I A}{c} \quad \text{(absorption)} , \qquad F = \frac{2 I A}{c} \quad \text{(reflection)} ,
$$
and dividing by $A$ gives the two pressures.
:::
::::

## Electromagnetic spectrum

:::definizione{#spettro-elettromagnetico titolo="Electromagnetic spectrum"}
Electromagnetic waves all have the same nature and in vacuum the same speed $c$, and they are distinguished by their frequency or, equivalently, by their wavelength $\lambda = \dfrac{c}{f}$. The set of all possible frequencies is called the **electromagnetic spectrum**, and it is divided into bands that take different names according to the way the waves are produced and detected. The boundaries between the bands are conventional and approximate:

- radio waves, with $\lambda$ greater than about $1\,\mathrm{m}$, used for radio and television broadcasting;
- microwaves, with $\lambda$ from about $1\,\mathrm{mm}$ to $1\,\mathrm{m}$, used in radar, mobile telephony and microwave ovens;
- infrared, with $\lambda$ from about $700\,\mathrm{nm}$ to $1\,\mathrm{mm}$, emitted abundantly by hot bodies;
- visible light, with $\lambda$ from about $400\,\mathrm{nm}$ (violet) to $700\,\mathrm{nm}$ (red);
- ultraviolet, with $\lambda$ from about $10\,\mathrm{nm}$ to $400\,\mathrm{nm}$;
- X-rays, with $\lambda$ from about $0.01\,\mathrm{nm}$ to $10\,\mathrm{nm}$;
- gamma rays, with $\lambda$ less than about $0.01\,\mathrm{nm}$, emitted in nuclear processes.

Yellow light with $\lambda = 580\,\mathrm{nm}$ has frequency $f = \dfrac{3.00 \cdot 10^{8}}{5.80 \cdot 10^{-7}}\,\mathrm{Hz} \approx 5.17 \cdot 10^{14}\,\mathrm{Hz}$.

::grafico{assi=0 poligoni="-13,0 3,0 3,0.8 -13,0.8;-6.4,0 -6.15,0 -6.15,0.8 -6.4,0.8" segmenti="-11,0,-11,0.8;-8,0,-8,0.8;-6.4,0,-6.4,0.8;-6.15,0,-6.15,0.8;-3,0,-3,0.8;0,0,0,0.8" linee="-12,0 -12,-0.18;-9,0 -9,-0.18;-6,0 -6,-0.18;-3,0 -3,-0.18;0,0 0,-0.18;3,0 3,-0.18" vettori="-6.27,2.0,-6.27,0.95" etichette="-12.3,0.3,γ;-9.75,0.3,X;-7.55,0.3,UV;-4.9,0.3,IR;-2.85,0.3,microwaves;0.9,0.3,radio;-7.0,2.25,visible;-12.6,-0.6,1 pm;-9.6,-0.6,1 nm;-6.6,-0.6,1 μm;-3.7,-0.6,1 mm;-0.45,-0.6,1 m;2.4,-0.6,1 km" xmin=-13.5 xmax=3.5 ymin=-1.1 ymax=2.7 uguale=1 titolo="Electromagnetic spectrum on a logarithmic scale of the wavelength $\lambda$, which decreases to the left while the frequency $f = \dfrac{c}{\lambda}$ increases; visible light occupies the narrow band between $400\,\mathrm{nm}$ and $700\,\mathrm{nm}$"}

:::

:::osservazione{#onde-nei-mezzi titolo="Electromagnetic waves in material media"}
In a homogeneous insulating medium with relative permittivity $\varepsilon_r$ and relative magnetic permeability $\mu_r$, away from free charges, Maxwell's equations have the same form with $\varepsilon_0 \varepsilon_r$ and $\mu_0 \mu_r$ in place of $\varepsilon_0$ and $\mu_0$, and the wave propagates with speed
$$
v = \frac{1}{\sqrt{\mu_0 \mu_r\, \varepsilon_0 \varepsilon_r}} = \frac{c}{\sqrt{\mu_r\, \varepsilon_r}} .
$$
The ratio $n = \dfrac{c}{v}$ is the **index of refraction** of the medium, for which see the topic on geometrical and wave optics. In transparent media $\mu_r \approx 1$, and $\varepsilon_r$ depends on the frequency of the wave.
:::
