---
titolo: Conductors, capacitors and dielectrics
sommario: Why the interior field of a conductor in equilibrium is zero and the charge lies on the surface, how to compute the capacitance of parallel-plate, spherical and cylindrical capacitors and of their combinations, how much energy the electric field stores and how a dielectric changes capacitance, field and energy.
---

## Conductors in electrostatic equilibrium

Throughout this topic the charges are at rest, the conductors are homogeneous and the space around them is vacuum, except where dielectrics are introduced. Work is denoted by $W$.

:::definizione{#conduttore-in-equilibrio titolo="Conductor in electrostatic equilibrium"}
A **conductor** is a material that contains charges free to move inside it, such as the conduction electrons of a metal. A conductor is in **electrostatic equilibrium** when no charge inside it or on its surface is in macroscopic motion. When a conductor is charged or brought into an external field, the free charges move and equilibrium is reached in a very short time, which is neglected in electrostatics problems. All the properties that follow hold for conductors in equilibrium, and they serve to determine where the charge lies and what the field is without knowing the motion of the charges during the redistribution.
:::

::::teorema{#campo-interno-nullo titolo="Electric field inside a conductor"}
At every point inside the material of a conductor in electrostatic equilibrium the electric field is zero:
$$
\vec{E} = \vec{0} .
$$
The interior field is zero even when the conductor is in an external field $\vec{E}_0$. In this case the free charges redistribute on the surface, with negative charge on the side the lines of $\vec{E}_0$ come from and positive charge on the opposite side, and the field produced by these charges, called **induced charges**, cancels $\vec{E}_0$ inside the material. The phenomenon is called electrostatic induction, and the total charge of an isolated neutral conductor remains zero.

:::dimostrazione
Suppose that at an interior point $P$ the field is $\vec{E} \neq \vec{0}$. A free charge $q$ at $P$ experiences the force $q\vec{E} \neq \vec{0}$, therefore it starts moving. This contradicts the hypothesis that the conductor is in equilibrium, hence $\vec{E} = \vec{0}$ at every interior point.
:::
::::

:::richiamo{titolo="Gauss's law"}
The flux of the electric field through a closed surface $S$ equals the charge $Q_{\text{int}}$ enclosed by $S$ divided by $\varepsilon_0$: $\Phi_E = \displaystyle\oint_S \vec{E} \cdot \hat{n}\,dA = \dfrac{Q_{\text{int}}}{\varepsilon_0}$. See the topic on Gauss's law and, for surface integrals, the topic on surfaces and fluxes in Analysis 2.
:::

::::teorema{#carica-sulla-superficie titolo="Charge on the surface of a conductor"}
In a conductor in electrostatic equilibrium the volume charge density is zero at every interior point, and any net charge of the conductor is distributed over its surface with surface density $\sigma$.

The result says that to describe a charged conductor it is enough to know $\sigma$ on the surface. The distribution of $\sigma$ depends on the shape of the conductor and on nearby charges; on an isolated sphere, by symmetry, it is uniform, and a sphere of radius $R$ with charge $Q$ has $\sigma = \dfrac{Q}{4\pi R^2}$.

::grafico{unicolore=1 assi=0 uguale=1 poligoni="1.300,0.000 1.293,0.136 1.272,0.270 1.236,0.402 1.188,0.529 1.126,0.650 1.052,0.764 0.966,0.870 0.870,0.966 0.764,1.052 0.650,1.126 0.529,1.188 0.402,1.236 0.270,1.272 0.136,1.293 0.000,1.300 -0.136,1.293 -0.270,1.272 -0.402,1.236 -0.529,1.188 -0.650,1.126 -0.764,1.052 -0.870,0.966 -0.966,0.870 -1.052,0.764 -1.126,0.650 -1.188,0.529 -1.236,0.402 -1.272,0.270 -1.293,0.136 -1.300,0.000 -1.293,-0.136 -1.272,-0.270 -1.236,-0.402 -1.188,-0.529 -1.126,-0.650 -1.052,-0.764 -0.966,-0.870 -0.870,-0.966 -0.764,-1.052 -0.650,-1.126 -0.529,-1.188 -0.402,-1.236 -0.270,-1.272 -0.136,-1.293 -0.000,-1.300 0.136,-1.293 0.270,-1.272 0.402,-1.236 0.529,-1.188 0.650,-1.126 0.764,-1.052 0.870,-0.966 0.966,-0.870 1.052,-0.764 1.126,-0.650 1.188,-0.529 1.236,-0.402 1.272,-0.270 1.293,-0.136 1.300,-0.000" vettori="1.65,0.0,2.45,0.0,E;1.167,1.167,1.732,1.732;0.0,1.65,0.0,2.45;-1.167,1.167,-1.732,1.732;-1.65,0.0,-2.45,0.0;-1.167,-1.167,-1.732,-1.732;-0.0,-1.65,-0.0,-2.45;1.167,-1.167,1.732,-1.732" etichette="1.33,0.30,+;0.96,0.95,+;0.31,1.32,+;-0.45,1.32,+;-1.10,0.95,+;-1.47,0.30,+;-1.47,-0.46,+;-1.10,-1.11,+;-0.45,-1.48,+;0.31,-1.48,+;0.96,-1.11,+;1.33,-0.46,+;-0.4,-0.1,E = 0" xmin=-4 xmax=4 ymin=-2.6 ymax=2.6 titolo="Charged conducting sphere in equilibrium: the charge lies on the surface, the interior field is zero and the exterior field is perpendicular to the surface"}

:::dimostrazione
Let $P$ be a point inside the material and let $S$ be a closed surface that encloses $P$ and lies entirely inside the material. By the theorem on the field inside a conductor $\vec{E} = \vec{0}$ at every point of $S$, therefore the flux through $S$ is zero. By **Gauss's law** the charge enclosed by $S$ is then zero. Since $S$ can be chosen arbitrarily small around $P$, the volume charge density at $P$ is zero. Hence the net charge, which is conserved, can only be on the surface.
:::
::::

:::richiamo{titolo="Potential difference and electric field"}
The electrostatic field is conservative, and for two points $A$ and $B$ we have $V_A - V_B = \displaystyle\int_A^B \vec{E} \cdot d\vec{\ell}$ along *any* path from $A$ to $B$. See the topic on the electric potential and, for line integrals, the topic on curves and line integrals in Analysis 2.
:::

::::teorema{#conduttore-equipotenziale titolo="Equipotential conductor"}
All points of a conductor in electrostatic equilibrium, interior and on the surface, are at the same potential. The surface of the conductor is therefore an equipotential surface, and the field at points just outside it is **perpendicular to the surface**.

A single value of the potential is therefore assigned to the conductor, the potential of the conductor, and two conductors connected by a conducting wire form a single conductor, so they reach the same potential. This property makes it possible to compute how the charge is shared among connected conductors.

:::dimostrazione
Let $A$ and $B$ be two points of the conductor, joined by a path that runs inside the material. Along the path $\vec{E} = \vec{0}$, therefore $V_A - V_B = \displaystyle\int_A^B \vec{E} \cdot d\vec{\ell} = 0$. If the field just outside the surface had a component tangent to the surface, the free charges of the surface would move along it, contrary to the hypothesis of equilibrium; hence the exterior field is perpendicular to the surface, consistent with the fact that the field is perpendicular to equipotential surfaces.
:::
::::

:::osservazione{#cavita-nel-conduttore titolo="Cavity in a conductor and electrostatic shielding"}
Consider a conductor with a cavity inside it.

- If the cavity does *not* contain charges, the field in the cavity is zero and there is no charge on the wall of the cavity. Indeed, a field line in the cavity would go from a positive to a negative charge of the wall, and the integral of the field along that line would be positive, whereas the wall is equipotential. A closed conducting enclosure therefore isolates its interior from external fields, and it is called an **electrostatic shield** or Faraday cage.
- If the cavity contains a charge $q$, the charge $-q$ is induced on the wall of the cavity. Indeed, a closed surface contained in the material and surrounding the cavity has zero flux, so it encloses zero total charge. If the conductor has net charge $Q$, the charge $Q + q$ is on the outer surface.

For example, a neutral conducting spherical shell containing a charge $q = 5.0\,\mathrm{nC}$ carries $-5.0\,\mathrm{nC}$ on the inner surface and $+5.0\,\mathrm{nC}$ on the outer one, and outside the field is that of a charge $q$ placed at the center of the shell, whatever the position of $q$ in the cavity.
:::

## Field at the surface and the effect of sharp points

::::teorema{#teorema-di-coulomb titolo="Coulomb's theorem"}
Let $\sigma$ be the surface charge density at a point of the surface of a conductor in equilibrium, and let $\hat{n}$ be the unit normal to the surface pointing outward. At points just outside, the electric field is
$$
\vec{E} = \frac{\sigma}{\varepsilon_0}\,\hat{n} .
$$
The theorem gives the field near a conductor from the local charge density, and vice versa; the field points outward where $\sigma > 0$ and inward where $\sigma < 0$. For example, where $\sigma = 1.0\,\mu\mathrm{C/m^2}$ the field is $E = \dfrac{1.0 \cdot 10^{-6}}{8.85 \cdot 10^{-12}}\,\mathrm{V/m} \approx 1.1 \cdot 10^{5}\,\mathrm{V/m}$.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 6,2 0,2" linee="0,2 6,2;2.4,1.4 3.6,1.4 3.6,2.6 2.4,2.6 2.4,1.4" vettori="3,2.6,3,3.8,E" etichette="0.33,2.10,+;0.93,2.10,+;1.53,2.10,+;2.13,2.10,+;2.68,2.10,+;3.18,2.10,+;3.73,2.10,+;4.33,2.10,+;4.93,2.10,+;5.53,2.10,+;3.75,2.75,ΔA;0.5,0.8,E = 0;4.3,0.8,conductor" xmin=-0.2 xmax=6.2 ymin=-0.2 ymax=4.1 titolo="The small cylinder with bases of area $\Delta A$ straddling the surface encloses the charge $\sigma\,\Delta A$; flux leaves only through the outer base"}

:::dimostrazione
Consider a small cylinder with bases of area $\Delta A$ parallel to the surface, one just outside and one just inside the conductor, and negligible height. The base area is so small that $\sigma$ and the exterior field can be considered constant on it. On the inner base the field is zero; on the lateral surface, of negligible area, the flux is negligible; on the outer base the field is perpendicular to the surface, by the theorem on the equipotential conductor, therefore the flux is $E_n\,\Delta A$, where $E_n$ is the component of $\vec{E}$ along $\hat{n}$. The cylinder encloses the charge $\sigma\,\Delta A$, hence **Gauss's law** gives
$$
E_n\,\Delta A = \frac{\sigma\,\Delta A}{\varepsilon_0}
\quad\Longrightarrow\quad
E_n = \frac{\sigma}{\varepsilon_0} .
$$
:::
::::

:::osservazione{#confronto-piano-carico titolo="Comparison with the charged plane"}
An isolated infinite plane with density $\sigma$ produces on each side the field $\dfrac{\sigma}{2\varepsilon_0}$, as shown in the topic on Gauss's law. Near a conductor the field is twice as large, $\dfrac{\sigma}{\varepsilon_0}$, because the field of the local charge adds to that of all the other charges of the conductor; these charges arrange themselves so that inside the conductor the two contributions cancel and outside they add. The factor $2$ reappears in the force between the plates of a capacitor.
:::

::::teorema{#potere-delle-punte titolo="Effect of sharp points"}
Consider two conducting spheres of radii $R_1$ and $R_2$, at a distance much larger than the radii and connected by a thin conducting wire, on which the charge is negligible. At equilibrium the surface charge densities are inversely proportional to the radii:
$$
\frac{\sigma_1}{\sigma_2} = \frac{R_2}{R_1} .
$$
By Coulomb's theorem the fields at the surfaces are in the same ratio. The result extends qualitatively to a conductor of any shape, on which the charge density and the field are more intense where the radius of curvature of the surface is smaller, that is, near points and edges. If the field near a point exceeds the dielectric strength of air, the air becomes conducting and the point discharges; the lightning rod works on this principle. With $R_1 = 1\,\mathrm{cm}$ and $R_2 = 10\,\mathrm{cm}$ we have $\sigma_1 = 10\,\sigma_2$.

::grafico{unicolore=1 assi=0 uguale=1 poligoni="0.662,1.346 0.551,1.395 0.436,1.435 0.318,1.466 0.198,1.487 0.077,1.498 -0.045,1.499 -0.166,1.491 -0.286,1.472 -0.405,1.444 -0.520,1.407 -0.632,1.360 -0.741,1.304 -0.844,1.240 -0.942,1.168 -1.033,1.088 -1.118,1.000 -1.195,0.906 -1.265,0.807 -1.326,0.702 -1.378,0.592 -1.422,0.478 -1.456,0.361 -1.480,0.242 -1.495,0.122 -1.500,0.000 -1.495,-0.122 -1.480,-0.242 -1.456,-0.361 -1.422,-0.478 -1.378,-0.592 -1.326,-0.702 -1.265,-0.807 -1.195,-0.906 -1.118,-1.000 -1.033,-1.088 -0.942,-1.168 -0.844,-1.240 -0.741,-1.304 -0.632,-1.360 -0.520,-1.407 -0.405,-1.444 -0.286,-1.472 -0.166,-1.491 -0.045,-1.499 0.077,-1.498 0.198,-1.487 0.318,-1.466 0.436,-1.435 0.551,-1.395 0.662,-1.346 3.4,0" vettori="0.0,1.6,0.0,2.25;-1.131,1.131,-1.591,1.591;-1.6,0.0,-2.25,0.0;-1.131,-1.131,-1.591,-1.591;-0.0,-1.6,-0.0,-2.25;2.075,0.763,2.472,1.57;2.075,-0.763,2.472,-1.57;3.5,0,5.2,0,E" etichette="-0.64,1.50,+;-1.65,0.49,+;-1.65,-0.65,+;-0.64,-1.66,+;2.17,0.68,+;2.17,-0.84,+;2.72,0.41,+;2.72,-0.57,+;3.13,0.21,+;3.13,-0.37,+;3.41,0.14,+" xmin=-2.6 xmax=5.6 ymin=-2.5 ymax=2.5 titolo="On a pointed conductor the charge density and the field are more intense where the radius of curvature is smaller, that is, near the point"}

:::dimostrazione
The two spheres and the wire form a single conductor, therefore by the theorem on the equipotential conductor they are at the same potential. Since the spheres are far apart, the potential of each is that of an isolated sphere with its own charge, hence
$$
\frac{k Q_1}{R_1} = \frac{k Q_2}{R_2}
\quad\Longrightarrow\quad
\frac{Q_1}{Q_2} = \frac{R_1}{R_2} .
$$
The densities are $\sigma_i = \dfrac{Q_i}{4\pi R_i^2}$, therefore $\dfrac{\sigma_1}{\sigma_2} = \dfrac{Q_1}{Q_2} \cdot \dfrac{R_2^2}{R_1^2} = \dfrac{R_2}{R_1}$.
:::
::::

## Capacitance of a conductor and capacitors

:::definizione{#capacita titolo="Capacitance of an isolated conductor"}
Consider an isolated conductor, far from other bodies, with charge $Q$ and potential $V$, with the potential reference at infinity. The **capacitance** of the conductor is
$$
C = \frac{Q}{V} .
$$
The ratio does not depend on $Q$. Indeed, multiplying the charge by a number multiplies the density $\sigma$ at every point, the field and the potential by the same number, because Coulomb's law is linear in the charges; therefore $C$ depends only on the shape and size of the conductor. The unit is the **farad**, $1\,\mathrm{F} = 1\,\mathrm{C/V}$, and in practice the submultiples $1\,\mu\mathrm{F} = 10^{-6}\,\mathrm{F}$, $1\,\mathrm{nF} = 10^{-9}\,\mathrm{F}$, $1\,\mathrm{pF} = 10^{-12}\,\mathrm{F}$ are used. Capacitance measures how much charge is needed to bring the conductor to a given potential.
:::

::::teorema{#capacita-sfera titolo="Capacitance of a conducting sphere"}
An isolated conducting sphere of radius $R$ has capacitance
$$
C = 4\pi\varepsilon_0 R = \frac{R}{k} .
$$
A sphere of radius $10\,\mathrm{cm}$ has $C = \dfrac{0.10}{8.99 \cdot 10^{9}}\,\mathrm{F} \approx 11\,\mathrm{pF}$, and the Earth, with $R \approx 6.37 \cdot 10^{6}\,\mathrm{m}$, has $C \approx 7.1 \cdot 10^{-4}\,\mathrm{F}$. The farad is therefore a very large unit for isolated conductors.

:::dimostrazione
The charge $Q$ is distributed uniformly over the surface, therefore by Gauss's law outside the sphere the field is that of a point charge $Q$ placed at the center. The potential on the surface, with reference at infinity, is hence $V = \dfrac{kQ}{R}$, and $C = \dfrac{Q}{V} = \dfrac{R}{k} = 4\pi\varepsilon_0 R$.
:::
::::

:::definizione{#condensatore titolo="Capacitor"}
A **capacitor** is a system of two conductors, called **plates**, in complete induction, that is, arranged so that all the field lines leaving one plate end on the other. Under these conditions the plates carry opposite charges $+Q$ and $-Q$, and the capacitance of the capacitor is
$$
C = \frac{Q}{\Delta V} ,
$$
where $\Delta V = V_+ - V_- > 0$ is the potential difference between the positive and the negative plate and $Q > 0$ is the charge of the positive plate. As for the isolated conductor, $C$ depends only on the geometry of the plates and on the material between them. A capacitor connected to a source that maintains the potential difference $\Delta V$ charges to $Q = C\,\Delta V$; capacitors serve to store charge and energy in circuits, and for charging and discharging through a resistor see the topic on electric current and direct-current circuits. In circuits the capacitor is drawn as two parallel segments.
:::

:::osservazione{#calcolo-capacita titolo="How to compute a capacitance"}
The capacitance of a capacitor is obtained in four steps.

1. Assign the charges $+Q$ and $-Q$ to the plates.
2. Compute the field between the plates, usually with Gauss's law exploiting the symmetry.
3. Compute $\Delta V = \displaystyle\int_{+}^{-} \vec{E} \cdot d\vec{\ell}$ along a path from the positive to the negative plate.
4. Compute $C = \dfrac{Q}{\Delta V}$; the charge $Q$ cancels, as expected from the definition.

The procedure is applied in the three cases that follow, and it can be repeated for any sufficiently symmetric geometry.
:::

## Parallel-plate, spherical and cylindrical capacitors

::::teorema{#condensatore-piano titolo="Parallel-plate capacitor"}
Consider two flat parallel plates of area $A$, at a distance $d$ much smaller than their dimensions, in vacuum, and neglect edge effects. The capacitance is
$$
C = \frac{\varepsilon_0 A}{d} ,
$$
and between the plates the field is uniform, perpendicular to the plates, with magnitude
$$
E = \frac{\sigma}{\varepsilon_0} = \frac{\Delta V}{d} , \qquad \sigma = \frac{Q}{A} .
$$
The capacitance increases with the area and decreases with the distance. With $A = 1.0\,\mathrm{m^2}$ and $d = 1.0\,\mathrm{mm}$ one obtains $C = \dfrac{8.85 \cdot 10^{-12} \cdot 1.0}{1.0 \cdot 10^{-3}}\,\mathrm{F} = 8.85\,\mathrm{nF}$; capacitances of the order of a microfarad therefore require large areas, small distances and a dielectric between the plates.

::grafico{unicolore=1 assi=0 uguale=1 linee="1,0 1,3;5,0 5,3" vettori="1.4,0.6,4.6,0.6;1.4,1.2,4.6,1.2;1.4,1.8,4.6,1.8;1.4,2.4,4.6,2.4,E" segmenti="1,-0.35,5,-0.35" etichette="1.08,0.22,+;1.08,0.82,+;1.08,1.42,+;1.08,2.02,+;1.08,2.62,+;4.75,0.22,−;4.75,0.82,−;4.75,1.42,−;4.75,2.02,−;4.75,2.62,−;2.95,-0.75,d;0.6,3.25,+Q;4.75,3.25,−Q" xmin=-0.5 xmax=6.5 ymin=-1 ymax=3.5 titolo="Parallel-plate capacitor: the charges $+Q$ and $-Q$ lie on the facing sides of the plates and between the plates the field is uniform, $E = \dfrac{\sigma}{\varepsilon_0}$"}

:::dimostrazione
The charges $\pm Q$ arrange themselves on the facing sides of the plates with uniform densities $\pm\sigma$, and each side, treated as an infinite plane, produces a field of magnitude $\dfrac{\sigma}{2\varepsilon_0}$, directed away from the positive side and toward the negative side. Between the plates the two fields have the same direction and add, outside they have opposite directions and cancel, therefore between the plates $E = \dfrac{\sigma}{\varepsilon_0}$, in agreement with **Coulomb's theorem**. The field is uniform, hence along a segment perpendicular to the plates
$$
\Delta V = \int_{+}^{-} \vec{E} \cdot d\vec{\ell} = E\,d = \frac{Q\,d}{\varepsilon_0 A}
\quad\Longrightarrow\quad
C = \frac{Q}{\Delta V} = \frac{\varepsilon_0 A}{d} .
$$
:::
::::

::::teorema{#condensatore-sferico titolo="Spherical capacitor"}
Consider two concentric spherical plates, a conducting sphere of radius $R_1$ and a conducting shell of inner radius $R_2 > R_1$, with vacuum in between. The capacitance is
$$
C = 4\pi\varepsilon_0\,\frac{R_1 R_2}{R_2 - R_1} .
$$
For $R_2 \to +\infty$ one recovers the capacitance of the isolated sphere, $4\pi\varepsilon_0 R_1$. If instead the distance $d = R_2 - R_1$ is much smaller than $R_1$, we have $R_1 R_2 \approx R_1^2$ and $C \approx \dfrac{\varepsilon_0 \cdot 4\pi R_1^2}{d}$, that is, the formula of the parallel-plate capacitor with the area of the sphere. With $R_1 = 10\,\mathrm{cm}$ and $R_2 = 11\,\mathrm{cm}$ one obtains $C \approx 1.2 \cdot 10^{-10}\,\mathrm{F} = 120\,\mathrm{pF}$.

::grafico{f="4/x^2+0*sqrt((x-1)*(2.5-x))" punti="1,4,pieno;2.5,0.64,pieno;1,0,vuoto;2.5,0,vuoto" segmenti="1,0,1,4;2.5,0,2.5,0.64" xmin=0 xmax=3.6 ymin=-0.4 ymax=4.8 nomi="r,E" legenda="E(r)" titolo="Field of a spherical capacitor with $R_1 = 1$ and $R_2 = 2.5$: $E = \dfrac{Q}{4\pi\varepsilon_0 r^2}$ between the plates, zero for $r < R_1$ and for $r > R_2$"}

:::dimostrazione
Assign the charge $+Q$ to the inner sphere and $-Q$ to the shell. For $R_1 < r < R_2$ the spherical surface of radius $r$ encloses the charge $Q$, therefore by **Gauss's law** and spherical symmetry the field is radial with magnitude $E(r) = \dfrac{Q}{4\pi\varepsilon_0 r^2}$. Integrating along a radius,
$$
\Delta V = \int_{R_1}^{R_2} \frac{Q}{4\pi\varepsilon_0 r^2}\,dr = \frac{Q}{4\pi\varepsilon_0} \left( \frac{1}{R_1} - \frac{1}{R_2} \right) = \frac{Q}{4\pi\varepsilon_0}\,\frac{R_2 - R_1}{R_1 R_2} ,
$$
therefore $C = \dfrac{Q}{\Delta V} = 4\pi\varepsilon_0\,\dfrac{R_1 R_2}{R_2 - R_1}$.
:::
::::

::::teorema{#condensatore-cilindrico titolo="Cylindrical capacitor"}
Consider two coaxial cylindrical plates of length $\ell$, a conducting cylinder of radius $a$ and a cylindrical shell of inner radius $b > a$, with vacuum in between and $\ell$ much larger than $b$, so that edge effects are negligible. The capacitance is
$$
C = \frac{2\pi\varepsilon_0\,\ell}{\ln \dfrac{b}{a}} .
$$
The capacitance is proportional to the length, and the **capacitance per unit length** $\dfrac{C}{\ell}$ depends only on the ratio $\dfrac{b}{a}$. The model describes the coaxial cable; with $b = 2a$ one obtains $\dfrac{C}{\ell} = \dfrac{2\pi \cdot 8.85 \cdot 10^{-12}}{\ln 2}\,\mathrm{F/m} \approx 80\,\mathrm{pF/m}$.

:::dimostrazione
Assign the charge $+Q$ to the inner cylinder and $-Q$ to the shell, with linear density $\lambda = \dfrac{Q}{\ell}$. For $a < r < b$ apply **Gauss's law** to a coaxial cylinder of radius $r$ and length $h$. By symmetry the field is radial and the flux crosses only the lateral surface, therefore $E \cdot 2\pi r h = \dfrac{\lambda h}{\varepsilon_0}$ and $E(r) = \dfrac{\lambda}{2\pi\varepsilon_0 r}$. Integrating along a radius,
$$
\Delta V = \int_a^b \frac{\lambda}{2\pi\varepsilon_0 r}\,dr = \frac{\lambda}{2\pi\varepsilon_0} \ln\frac{b}{a} = \frac{Q}{2\pi\varepsilon_0\,\ell} \ln\frac{b}{a} ,
$$
therefore $C = \dfrac{Q}{\Delta V} = \dfrac{2\pi\varepsilon_0\,\ell}{\ln \dfrac{b}{a}}$.
:::
::::

## Capacitors in series and in parallel

::::teorema{#condensatori-in-parallelo titolo="Capacitors in parallel"}
Consider $n$ capacitors of capacitances $C_1, \dots, C_n$ connected in **parallel**, that is, with the plates on one side connected to the same wire and those on the other side to a second wire. The system is equivalent to a single capacitor of capacitance
$$
C_{\text{eq}} = C_1 + C_2 + \dots + C_n .
$$
All the capacitors have the same potential difference $\Delta V$, and the charge is shared in proportion to the capacitances, $Q_i = C_i\,\Delta V$. The equivalent capacitance is larger than the capacitance of each capacitor; two capacitors of $2.0\,\mu\mathrm{F}$ and $3.0\,\mu\mathrm{F}$ in parallel are equivalent to $5.0\,\mu\mathrm{F}$.

::grafico{assi=0 uguale=1 linee="0,0 0,1.35;-0.2,1.35 0.2,1.35;-0.4,1.65 0.4,1.65;0,1.65 0,3 6,3 6,1.65;5.6,1.65 6.4,1.65;5.6,1.35 6.4,1.35;6,1.35 6,0 0,0;3,3 3,1.65;2.6,1.65 3.4,1.65;2.6,1.35 3.4,1.35;3,1.35 3,0" punti="3,3,pieno;3,0,pieno" etichette="0.5,1.75,+;0.35,1.05,−;-1.05,1.4,ΔV;3.55,1.4,C₁;6.55,1.4,C₂" xmin=-1.4 xmax=7.4 ymin=-0.5 ymax=3.5 titolo="Capacitors in parallel: the plates connected to the same wire are at the same potential, therefore all the capacitors have the same $\Delta V$"}

:::dimostrazione
The plates connected to the same wire form a single conductor, therefore by the theorem on the equipotential conductor they are at the same potential; hence every capacitor has the same $\Delta V$ and the charge $Q_i = C_i\,\Delta V$. The total charge delivered by the source is
$$
Q = Q_1 + \dots + Q_n = (C_1 + \dots + C_n)\,\Delta V ,
$$
and the ratio $\dfrac{Q}{\Delta V}$ is the sum of the capacitances.
:::
::::

::::teorema{#condensatori-in-serie titolo="Capacitors in series"}
Consider $n$ capacitors, initially uncharged, of capacitances $C_1, \dots, C_n$ connected in **series**, that is, one after the other, with the negative plate of each connected to the positive plate of the next. The system is equivalent to a single capacitor of capacitance $C_{\text{eq}}$ with
$$
\frac{1}{C_{\text{eq}}} = \frac{1}{C_1} + \frac{1}{C_2} + \dots + \frac{1}{C_n} .
$$
All the capacitors have the same charge $Q$, and the potential difference is shared in inverse proportion to the capacitances, $\Delta V_i = \dfrac{Q}{C_i}$, therefore the capacitor with the smallest capacitance has the largest voltage. The equivalent capacitance is smaller than the smallest of the capacitances; for two capacitors $C_{\text{eq}} = \dfrac{C_1 C_2}{C_1 + C_2}$, and from $2.0\,\mu\mathrm{F}$ and $3.0\,\mu\mathrm{F}$ one obtains $1.2\,\mu\mathrm{F}$.

::grafico{assi=0 uguale=1 linee="0,0 0,1.35;-0.2,1.35 0.2,1.35;-0.4,1.65 0.4,1.65;0,1.65 0,3 2.35,3;2.35,2.6 2.35,3.4;2.65,2.6 2.65,3.4;2.65,3 4.35,3;4.35,2.6 4.35,3.4;4.65,2.6 4.65,3.4;4.65,3 6,3 6,0 0,0" etichette="0.5,1.75,+;0.35,1.05,−;-1.05,1.4,ΔV;2.25,3.65,C₁;4.25,3.65,C₂;2.0,3.1,+;2.85,3.1,−;4.0,3.1,+;4.85,3.1,−" xmin=-1.4 xmax=7 ymin=-0.5 ymax=4.1 titolo="Capacitors in series: the inner plates, connected to each other and isolated, form a neutral conductor, therefore all the capacitors have the same charge $Q$"}

:::dimostrazione
The negative plate of one capacitor and the positive plate of the next, with the wire that connects them, form an isolated conductor, initially uncharged, hence with zero total charge by conservation of charge. If the positive plate of the first capacitor receives the charge $Q$, by complete induction its negative plate carries $-Q$, therefore the positive plate of the second carries $+Q$, and so on; hence every capacitor has charge $Q$. The potential differences add along the series,
$$
\Delta V = \Delta V_1 + \dots + \Delta V_n = Q \left( \frac{1}{C_1} + \dots + \frac{1}{C_n} \right) ,
$$
and $\dfrac{\Delta V}{Q} = \dfrac{1}{C_{\text{eq}}}$ gives the claim.
:::
::::

:::esempio{titolo="Reduction of a capacitor network"}
A capacitor $C_1 = 3.0\,\mu\mathrm{F}$ is connected in series with the parallel combination of $C_2 = 2.0\,\mu\mathrm{F}$ and $C_3 = 4.0\,\mu\mathrm{F}$, and the potential difference $\Delta V = 12\,\mathrm{V}$ is applied across the network. First the parallel combination is replaced by $C_{23} = C_2 + C_3 = 6.0\,\mu\mathrm{F}$, then the series by
$$
C_{\text{eq}} = \frac{C_1 C_{23}}{C_1 + C_{23}} = \frac{3.0 \cdot 6.0}{9.0}\,\mu\mathrm{F} = 2.0\,\mu\mathrm{F} .
$$
The charge delivered by the source is $Q = C_{\text{eq}}\,\Delta V = 24\,\mu\mathrm{C}$, and it is also the charge of $C_1$ and of the parallel combination. Therefore $\Delta V_1 = \dfrac{24}{3.0}\,\mathrm{V} = 8.0\,\mathrm{V}$ and the parallel combination has $\Delta V_{23} = 4.0\,\mathrm{V}$, from which $Q_2 = 8.0\,\mu\mathrm{C}$ and $Q_3 = 16\,\mu\mathrm{C}$. In other words, the network is traversed backward, from the equivalent capacitor to the individual capacitors.
:::

## Energy of the capacitor and of the electric field

::::teorema{#energia-condensatore titolo="Energy of a charged capacitor"}
A capacitor of capacitance $C$ with charge $Q$ and potential difference $\Delta V$ stores the electric potential energy
$$
U = \frac{Q^2}{2C} = \frac{1}{2} C\,\Delta V^2 = \frac{1}{2} Q\,\Delta V .
$$
The energy equals the work needed to charge the capacitor, and it is returned when the capacitor discharges, for example in the flash of a camera. Of the three forms, the convenient one is the one containing the quantity that stays constant in the problem: $\dfrac{Q^2}{2C}$ for an isolated capacitor, $\dfrac{1}{2} C\,\Delta V^2$ for a capacitor connected to a source. A $100\,\mu\mathrm{F}$ capacitor at $50\,\mathrm{V}$ stores $U = \dfrac{1}{2} \cdot 100 \cdot 10^{-6} \cdot 50^2\,\mathrm{J} = 0.125\,\mathrm{J}$.

::grafico{f="2*x+0*sqrt(x*(3-x))" area="2*x;0;0;3" segmenti="3,0,3,6;0,6,3,6" punti="3,6,pieno" etichette="1.9,1.4,U" xmin=-0.4 xmax=4 ymin=-0.6 ymax=7.4 nomi="q,ΔV" legenda="\Delta V(q)" titolo="During charging $\Delta V = \dfrac{q}{C}$ grows linearly with $q$; the work to bring the charge from $0$ to $Q$ is the area of the triangle, $\dfrac{1}{2} Q\,\Delta V$"}

:::dimostrazione
The capacitor is charged by transporting charge in small amounts $dq$ from the negative to the positive plate. When the charge of the positive plate is $q$, the potential difference is $\dfrac{q}{C}$, therefore the work to transport $dq$ against the electric force is $dW = \dfrac{q}{C}\,dq$. The total work to go from $q = 0$ to $q = Q$ is
$$
W = \int_0^Q \frac{q}{C}\,dq = \frac{Q^2}{2C} ,
$$
and this work remains stored as potential energy $U$. The other two forms follow by substituting $Q = C\,\Delta V$.
:::
::::

::::teorema{#densita-energia titolo="Energy density of the electric field"}
In a region of empty space where there is the electric field $\vec{E}$, the energy per unit volume is
$$
u = \frac{1}{2} \varepsilon_0 E^2 ,
$$
which is measured in $\mathrm{J/m^3}$. The energy of a system of charges can therefore be thought of as distributed in the space where the field is, with density $u$, and it is obtained by integrating $u$ over the volume. The formula is derived for the parallel-plate capacitor and holds for any electrostatic field in vacuum. Where $E = 1.0 \cdot 10^{6}\,\mathrm{V/m}$ we have $u = \dfrac{1}{2} \cdot 8.85 \cdot 10^{-12} \cdot 10^{12}\,\mathrm{J/m^3} \approx 4.4\,\mathrm{J/m^3}$.

:::dimostrazione
In a parallel-plate capacitor the field is uniform and is confined to the volume $A\,d$ between the plates. Since $C = \dfrac{\varepsilon_0 A}{d}$ and $\Delta V = E\,d$, the energy of the capacitor is
$$
U = \frac{1}{2} \frac{\varepsilon_0 A}{d}\,(E\,d)^2 = \frac{1}{2} \varepsilon_0 E^2 \cdot A\,d ,
$$
therefore the energy per unit volume is $u = \dfrac{U}{A\,d} = \dfrac{1}{2} \varepsilon_0 E^2$.
:::
::::

::::teorema{#forza-tra-armature titolo="Force between the plates of a parallel-plate capacitor"}
The plates of a parallel-plate capacitor with charge $Q$ attract each other with a force of magnitude
$$
F = \frac{Q^2}{2\varepsilon_0 A} = \frac{1}{2} \varepsilon_0 E^2 A .
$$
The force equals the energy density times the area, and it corresponds to the field $\dfrac{\sigma}{2\varepsilon_0}$ produced by one plate alone, acting on the charge $Q$ of the other; indeed, the total field $\dfrac{\sigma}{\varepsilon_0}$ also includes the contribution of the plate on which the force acts, and a plate exerts no force on itself. With $A = 0.010\,\mathrm{m^2}$ and $Q = 0.10\,\mu\mathrm{C}$ one obtains $F = \dfrac{(1.0 \cdot 10^{-7})^2}{2 \cdot 8.85 \cdot 10^{-12} \cdot 0.010}\,\mathrm{N} \approx 0.056\,\mathrm{N}$.

:::dimostrazione
Consider the isolated capacitor, hence with constant $Q$, and slowly move one plate away by $dx$ with an external force that balances the attraction. The energy with the plates at distance $x$ is $U(x) = \dfrac{Q^2}{2C} = \dfrac{Q^2\,x}{2\varepsilon_0 A}$. The work of the external force, $F\,dx$, equals the increase in energy $dU$, because the capacitor is isolated and no source does work; hence
$$
F = \frac{dU}{dx} = \frac{Q^2}{2\varepsilon_0 A} ,
$$
and with $Q = \sigma A = \varepsilon_0 E A$ one obtains $F = \dfrac{1}{2} \varepsilon_0 E^2 A$.
:::
::::

## Dielectrics

:::teorema{#condensatore-con-dielettrico titolo="Capacitor with a dielectric"}
This is an experimental law. If the space between the plates of a capacitor of capacitance $C_0$ in vacuum is *completely* filled by a homogeneous isotropic insulator, called a **dielectric**, the capacitance becomes
$$
C = \varepsilon_r\,C_0 , \qquad \varepsilon_r \geq 1 ,
$$
where $\varepsilon_r$ is a number that depends only on the material, whatever the shape of the capacitor. The law makes it possible to obtain larger capacitances for the same dimensions, and for this reason real capacitors contain a dielectric. For example, a $10\,\mathrm{pF}$ capacitor in vacuum filled with Teflon, with $\varepsilon_r \approx 2.1$, has capacitance $21\,\mathrm{pF}$.
:::

:::definizione{#costante-dielettrica-relativa titolo="Relative permittivity"}
The dimensionless number $\varepsilon_r$ in the law of the capacitor with a dielectric is called the **relative permittivity** of the material, and the product $\varepsilon = \varepsilon_0\,\varepsilon_r$ is called the absolute permittivity. Vacuum has $\varepsilon_r = 1$, air $\varepsilon_r \approx 1.0006$, polyethylene $\varepsilon_r \approx 2.3$, glass values roughly between $4$ and $10$ and water $\varepsilon_r \approx 80$. Since $\varepsilon_r$ of air differs from $1$ by less than one part in a thousand, in problems air is treated as vacuum. The capacitances of a capacitor filled with a dielectric are obtained by replacing $\varepsilon_0$ with $\varepsilon$; for example, a filled parallel-plate capacitor has $C = \dfrac{\varepsilon_0 \varepsilon_r A}{d}$.
:::

:::osservazione{#polarizzazione titolo="Polarization of the dielectric"}
In a dielectric the charges are *not* free to move over macroscopic distances. In an electric field, however, each molecule deforms or orients itself and becomes a small dipole aligned with the field; the dielectric is said to be **polarized**. Inside a homogeneous dielectric the charges of neighboring dipoles compensate each other, while on the faces facing the plates a layer of **polarization charges** remains, negative near the positive plate and positive near the negative one. The field of these charges is opposite to that of the free charges of the plates, and reduces it. For the dipole in an electric field see the topic on the electric field.
:::

::::teorema{#campo-nel-dielettrico titolo="Field and polarization charges"}
Consider a parallel-plate capacitor with free charge density $\sigma$ on the plates, completely filled by a dielectric of constant $\varepsilon_r$, and let $E_0 = \dfrac{\sigma}{\varepsilon_0}$ be the field that would exist in vacuum with the same charge. In the dielectric the field and the density of the polarization charges are
$$
E = \frac{E_0}{\varepsilon_r} = \frac{\sigma}{\varepsilon_0 \varepsilon_r} ,
\qquad
\sigma_p = \sigma \left( 1 - \frac{1}{\varepsilon_r} \right) .
$$
The density $\sigma_p$ is smaller than $\sigma$, therefore the field is reduced without vanishing; in the limit $\varepsilon_r \to +\infty$ one would have $\sigma_p = \sigma$ and zero field, as in a conductor. For the same reason two point charges immersed in a dielectric attract or repel each other with a force $\varepsilon_r$ times smaller than in vacuum, and the energy density in the dielectric is $u = \dfrac{1}{2} \varepsilon_0 \varepsilon_r E^2$.

::grafico{unicolore=1 assi=0 uguale=1 poligoni="1,0 5,0 5,3 1,3" linee="1,0 1,3;5,0 5,3" vettori="1.85,0.3,4.15,0.3;1.85,1.5,4.15,1.5,E;1.85,2.7,4.15,2.7" etichette="1.08,0.22,+;1.08,0.82,+;1.08,1.42,+;1.08,2.02,+;1.08,2.62,+;4.75,0.22,−;4.75,0.82,−;4.75,1.42,−;4.75,2.02,−;4.75,2.62,−;1.43,0.52,−;1.43,1.12,−;1.43,1.72,−;1.43,2.32,−;4.41,0.52,+;4.41,1.12,+;4.41,1.72,+;4.41,2.32,+;0.7,3.3,σ;1.25,3.3,−σₚ;4.25,3.3,+σₚ;4.85,3.3,−σ" xmin=-0.5 xmax=6.5 ymin=-0.3 ymax=3.7 titolo="Polarized dielectric: the polarization charges $\mp\sigma_p$ on the faces facing the plates reduce the field to $E = \dfrac{E_0}{\varepsilon_r}$"}

:::dimostrazione
For the same charge $Q$, by the law of the capacitor with a dielectric the potential difference is $\Delta V = \dfrac{Q}{\varepsilon_r C_0} = \dfrac{\Delta V_0}{\varepsilon_r}$. The field is uniform, therefore $E = \dfrac{\Delta V}{d} = \dfrac{E_0}{\varepsilon_r}$. Then apply **Gauss's law** to a small cylinder with one base inside the positive plate and the other in the dielectric. The charge enclosed per unit area is the free charge of the plate, $\sigma$, plus the polarization charge of the face of the dielectric, $-\sigma_p$, hence
$$
E = \frac{\sigma - \sigma_p}{\varepsilon_0}
\quad\Longrightarrow\quad
\sigma_p = \sigma - \varepsilon_0 E = \sigma - \frac{\sigma}{\varepsilon_r} = \sigma \left( 1 - \frac{1}{\varepsilon_r} \right) .
$$
:::
::::

:::osservazione{#inserimento-del-dielettrico titolo="Inserting a dielectric at constant charge and at constant voltage"}
When a dielectric is inserted until it fills a charged capacitor, the effect depends on which quantity stays constant.

- Isolated capacitor: the charge $Q$ stays constant, therefore $\Delta V$ and $E$ become $\varepsilon_r$ times smaller and the energy $U = \dfrac{Q^2}{2C}$ becomes $\dfrac{U_0}{\varepsilon_r}$. The energy decreases because the field pulls the dielectric inside and does positive work on it.
- Capacitor connected to a source: the potential difference $\Delta V$ stays constant, therefore the field $E = \dfrac{\Delta V}{d}$ remains unchanged, the charge becomes $\varepsilon_r Q_0$ and the energy $U = \dfrac{1}{2} C\,\Delta V^2$ becomes $\varepsilon_r U_0$. The source moves the charge $(\varepsilon_r - 1)\,Q_0$ and does the work $W_{\text{gen}} = \Delta V\,(\varepsilon_r - 1)\,Q_0$, which is twice the increase in energy; half of the work goes to the field and half is the work done by the field on the dielectric as it enters.
:::

:::definizione{#rigidita-dielettrica titolo="Dielectric strength"}
The **dielectric strength** of an insulator is the maximum magnitude $E_{\max}$ of the electric field that the material withstands without becoming conducting. Beyond this value a discharge occurs in the material, and the capacitor is damaged or discharges. For air under ordinary conditions $E_{\max} \approx 3 \cdot 10^{6}\,\mathrm{V/m}$. In a parallel-plate capacitor the maximum potential difference that can be applied is $\Delta V_{\max} = E_{\max}\,d$; with $1.0\,\mathrm{mm}$ of air one obtains about $3\,\mathrm{kV}$. The solid dielectrics used in capacitors usually have a higher dielectric strength than air, and therefore increase both the capacitance and the working voltage.
:::

## Partially filled capacitors

::::teorema{#condensatore-parzialmente-riempito titolo="Dielectric slab parallel to the plates"}
In a parallel-plate capacitor of area $A$ and separation $d$, with negligible edge effects, insert a dielectric slab of constant $\varepsilon_r$, thickness $s < d$ and area $A$, parallel to the plates. The capacitance becomes
$$
C = \frac{\varepsilon_0 A}{d - s + \dfrac{s}{\varepsilon_r}} .
$$
The capacitance depends only on the thickness of the slab, and its position between the plates is irrelevant. The capacitor is equivalent to two capacitors in series, one of thickness $d - s$ in vacuum and one of thickness $s$ filled with dielectric. With $s = \dfrac{d}{2}$ and $\varepsilon_r = 3$ one obtains $C = \dfrac{\varepsilon_0 A}{\dfrac{d}{2} + \dfrac{d}{6}} = \dfrac{3}{2}\,C_0$.

::grafico{unicolore=1 assi=0 uguale=1 poligoni="3,0 5,0 5,3 3,3" linee="1,0 1,3;5,0 5,3" vettori="1.15,0.4,2.85,0.4;1.15,1.1,2.85,1.1;1.15,1.8,2.85,1.8;1.15,2.5,2.85,2.5,E₀;3.15,0.75,4.85,0.75;3.15,2.15,4.85,2.15,E" segmenti="1,-0.35,3,-0.35;3,-0.35,5,-0.35" etichette="1.75,-0.75,d − s;3.95,-0.75,s;3.9,1.35,εᵣ" xmin=-0.5 xmax=6.5 ymin=-1 ymax=3.4 titolo="Dielectric slab of thickness $s$ parallel to the plates: the field is $E_0$ in vacuum and $E = \dfrac{E_0}{\varepsilon_r}$ in the slab"}

:::dimostrazione
The free charge $\pm Q$ of the plates has density $\sigma = \dfrac{Q}{A}$. In vacuum the field is $E_0 = \dfrac{\sigma}{\varepsilon_0}$, and in the slab, by the theorem on field and polarization charges, it is $\dfrac{E_0}{\varepsilon_r}$. Adding the contributions of the stretches in vacuum, of total thickness $d - s$, and of the stretch in the slab,
$$
\Delta V = E_0\,(d - s) + \frac{E_0}{\varepsilon_r}\,s = \frac{Q}{\varepsilon_0 A} \left( d - s + \frac{s}{\varepsilon_r} \right) ,
$$
and $C = \dfrac{Q}{\Delta V}$ gives the claim. The position of the slab changes only how the stretch in vacuum is divided, and not its total length $d - s$.
:::
::::

::::teorema{#dielettrico-affiancato titolo="Dielectric occupying part of the area"}
In a parallel-plate capacitor of area $A$ and separation $d$, a dielectric of constant $\varepsilon_r$ fills the whole thickness over a part $A_1$ of the area, while the remaining part $A_2 = A - A_1$ is empty. The capacitance is
$$
C = \frac{\varepsilon_0 \left( A_2 + \varepsilon_r A_1 \right)}{d} .
$$
The capacitor is equivalent to two capacitors in parallel. In the two parts the field is the same, $E = \dfrac{\Delta V}{d}$, while the free charge density on the plates is $\varepsilon_0 E$ in the empty part and $\varepsilon_r \varepsilon_0 E$ in the part with the dielectric. If the dielectric occupies half of the area, $C = \dfrac{1 + \varepsilon_r}{2}\,C_0$.

:::dimostrazione
The two parts share the plates, therefore they have the same potential difference $\Delta V$; hence they are two capacitors in parallel, of capacitances $\dfrac{\varepsilon_0 \varepsilon_r A_1}{d}$ and $\dfrac{\varepsilon_0 A_2}{d}$. By the theorem on **capacitors in parallel** the capacitance is the sum of the two.
:::
::::

:::osservazione{#lastra-conduttrice titolo="Conducting slab between the plates"}
If an uncharged *conducting* slab of thickness $s$ and area $A$, parallel to the plates, is inserted between the plates of a parallel-plate capacitor, the field in the slab is zero and the charges $-Q$ and $+Q$ are induced on its faces. The capacitor is equivalent to two vacuum capacitors in series, with thicknesses that add up to $d - s$, therefore
$$
C = \frac{\varepsilon_0 A}{d - s} ,
$$
whatever the position of the slab. The same result is obtained from the formula of the dielectric slab in the limit $\varepsilon_r \to +\infty$, consistent with the fact that a conductor completely cancels the field inside it.
:::
