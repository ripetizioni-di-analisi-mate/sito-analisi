---
titolo: "Elastic stability and critical loads"
sommario: "Euler’s critical load follows from the equilibrium of a deflected member and provides a basis for comparing end restraints, bending planes, and imperfections."
---

## From axial compression to equilibrium in a bent configuration

:::definizione{#instabilita titolo="Buckling under axial compression"}
Consider an initially straight member with axis $x$ carrying a concentric compressive force of magnitude $P$. Take the transverse displacement $v(x)$ as positive downward. The flexural rigidity $EI$ is the product of the elastic modulus $E$ and the second moment of area $I$ about the bending axis. In the Euler–Bernoulli model, plane sections remain plane and normal to the deflected axis. The analysis assumes small displacements, a linearly elastic material, and a load whose direction stays fixed.

When the member is straight, the line of action of the load coincides with its axis. If a disturbance displaces a section laterally, the force acquires a moment arm about the center of that section. This produces a second-order moment because its expression depends on the deformation itself. The elastic bending moment resists the curvature. The **critical load** is the smallest positive $P$ for which linearized equilibrium admits a nonzero transverse displacement with no prescribed transverse load.
:::

:::esempio{titolo="Moment arm in the deflected configuration"}
For a simply supported member, both ends remain on the original axis. If the center deflects by $v(\dfrac L2)$, the distance between its section center and the load line is the magnitude of that displacement. For the same displacement, the moment increases as $P$ increases. An axial force can therefore make the straight configuration unstable while the stresses are still in the elastic range.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="B,-1.25,0,P" tratteggi="0,0 1,-0.4 2,-0.68 3,-0.79 4,-0.68 5,-0.4 6,0" frecce="3,0,3,-0.79,v" quote="A,B,L,1.22" titolo="The load line stays on the original axis as the middle cross section moves sideways"}
:::

:::osservazione{titolo="Equilibrium and stability"}
In a conservative model, equilibrium is locally stable in the energy sense if the configuration is a strict local minimum of the total potential energy. A small disturbance then requires energy. As $P$ increases, the contribution of the axial load reduces the energy increase associated with bending. At the first critical value, the second variation vanishes for one buckling shape. Finding that shape identifies the onset of instability. The linear analysis locates the bifurcation point but leaves the mode amplitude undetermined.
:::

:::esempio{titolo="Lateral deflection of a compression member"}
The slender compression members shown have different end restraints. Their curved shapes depend on the translations and rotations permitted at the ends. Euler’s model predicts the bifurcation load of an ideal member. Finding that load requires its end conditions, unsupported length, and flexural rigidity.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/instabilita-provino.webp" alt="Teaching model with slender compression members and different end restraints" width="1280" height="960" loading="lazy" decoding="async"><figcaption>Lateral deflection of a compression member. Resized photograph by <a href="https://commons.wikimedia.org/wiki/File:Buckledmodel.JPG">Grahams Child</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</figcaption></figure>
:::

## Pin-ended columns and Euler’s formula

::::teorema{#eulero titolo="Euler’s formula"}
For a member of length $L$ and constant rigidity $EI$, pinned at both ends under a concentric compressive force of fixed direction, the first critical load is
$$
P_{\mathrm{cr}}=\frac{\pi^2 EI}{L^2}.
$$
The corresponding shape is $v(x)=C\sin\!\left(\dfrac{\pi x}{L}\right)$, where $C$ is its amplitude coefficient. The mode has nodes at both ends and its greatest deflection occurs at midspan. For the same rigidity, doubling the length reduces the critical load to one quarter of its original value.

:::dimostrazione
Isolate the portion to the left of the section at position $x$. The longitudinal reaction at $A$ has magnitude $P$, and its signed moment arm about the displaced section is $v(x)$. Taking moment as positive when the lower fibers are in tension, equilibrium gives $M=Pv$. With $v$ positive downward, the moment–curvature relation is $EI v''=-M$. It follows that
$$
EI v''+Pv=0.
$$
Setting $k=\sqrt{\dfrac{P}{EI}}$ gives solutions of the form $v(x)=C_1\cos(kx)+C_2\sin(kx)$. The condition $v(0)=0$ implies $C_1=0$. The condition $v(L)=0$ implies $C_2\sin(kL)=0$. A nonzero deflection requires $\sin(kL)=0$, so $kL=n\pi$ for a positive integer $n$. The smallest value corresponds to $n=1$. The formula follows from $P=EI k^2$.
:::
::::

:::osservazione{#modi-superiori titolo="Higher modes and nodes"}
The load associated with mode $n$ is $P_n=n^2P_{\mathrm{cr}}$. It has $n$ half-waves and $n-1$ interior zeros at $\dfrac{jL}{n}$ for $j=1,\ldots,n-1$. Thus, the second mode has a node at midspan and requires four times the first-mode load. When the structure is free to take any admissible shape, buckling begins in the first mode. An ideal midspan brace that restrains only transverse displacement excludes the first mode. For a uniform member with two equal spans, the second mode of the unbraced member satisfies the added restraint.

::grafico{f="sin(pi*x);sin(2*pi*x)" legenda="\mathrm{mode}\ 1;\mathrm{mode}\ 2" xmin=0 xmax=1 ymin=-1.2 ymax=1.2 titolo="Normalized first and second modes plotted against relative position"}
:::

## End restraints and effective buckling length

:::teorema{#lunghezza-efficace titolo="Effective length for ideal end conditions"}
For the standard support arrangements of a uniform member, the first critical load can be written in terms of the **effective length** $L_{\mathrm{eff}}=KL$. The number $K$ is the effective length factor for the bending plane being considered. The relation is
$$
P_{\mathrm{cr}}=\frac{\pi^2 EI}{L_{\mathrm{eff}}^2}.
$$

- Pinned–pinned, $K=1$.
- Fixed–free, $K=2$.
- Fixed–pinned, $K\simeq0.699$.
- Fixed–fixed in bending, $K=\dfrac12$.

For bending, a pin imposes zero transverse displacement and allows free rotation. A fixed end restrains both. In the compression model, the loaded end may slide along the original axis without changing its flexural end condition. A guide that restrains both transverse displacement and rotation is therefore equivalent to a fixed end for the buckling analysis.
:::

:::esempio{titolo="A cantilever column and its effective length"}
For a cantilever, impose $v(0)=v'(0)=0$. The bending moment vanishes at the tip. The effective shear condition at the free end is $EI v'''(L)+Pv'(L)=0$. For a conservative axial force, these conditions admit a shape proportional to $1-\cos(kx)$, with $k=\sqrt{\dfrac{P}{EI}}$. Indeed, the general differential equation is $EI v^{(4)}+Pv''=0$. The shear condition removes the linear term from the general solution, and the two conditions at the origin determine the remaining shape. Condition $v''(L)=0$ gives $\cos(kL)=0$. The first value is $kL=\dfrac{\pi}{2}$, so $P_{\mathrm{cr}}=\dfrac{\pi^2 EI}{4L^2}$ and $L_{\mathrm{eff}}=2L$.

::struttura{nodi="A,0,0;B,5,0" aste="A-B" vincoli="A,incastro,180" forze="B,-1.05,0,P" quote="A,B,L,1.15" tratteggi="0,0 1,-0.04 2,-0.18 3,-0.38 4,-0.62 5,-0.9" titolo="Compressed cantilever column with zero slope at its base and free lateral displacement at the tip"}
:::

:::esempio{titolo="Both ends fixed against rotation"}
Use $v(0)=v'(0)=v(L)=v'(L)=0$. The general solution has constant, linear, sine, and cosine terms. Substitution of the four boundary conditions gives, for $u=kL>0$,
$$
2(1-\cos u)-u\sin u=0.
$$
The first positive value is $u=2\pi$. The equation factors into two terms proportional to $\sin(\dfrac{u}{2})$ and $2\sin(\dfrac{u}{2})-u\cos(\dfrac{u}{2})$, respectively. The first vanishes at $2\pi$. Where the cosine is nonzero, the second requires $\tan(\dfrac{u}{2})=\dfrac{u}{2}$. The first positive root of this last relation has $\dfrac{u}{2}>\pi$. The result is therefore $P_{\mathrm{cr}}=\dfrac{4\pi^2EI}{L^2}$ with mode shape $1-\cos\!\left(\dfrac{2\pi x}{L}\right)$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,incastro,180;B,doppio-pendolo,270" forze="B,-1.25,0,P" quote="A,B,L,1.2" tratteggi="0,0 1,-0.15 2,-0.45 3,-0.6 4,-0.45 5,-0.15 6,0" titolo="The guide at B restrains transverse displacement and rotation while allowing axial movement"}
:::

:::osservazione{titolo="One fixed end and one pinned end"}
For mixed end conditions, impose $v(0)=v'(0)=v(L)=v''(L)=0$. At $L$, zero moment is required in addition to zero displacement. Applying the conditions to the general solution gives $\sin(kL)-kL\cos(kL)=0$. The first positive root is $kL\simeq4.4934$, so $K=\dfrac{\pi}{4.4934}\simeq0.699$. This result assumes an ideal pin and an ideal fixed end. If a support has finite rotational stiffness or an end section can translate, the kinematic conditions change and the factor depends on the complete structure.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,incastro,180;B,carrello" forze="B,-1.25,0,P" quote="A,B,L" titolo="Member fixed at A and pinned against transverse displacement at B"}
:::

## General equation and end forces

:::osservazione{titolo="The differential equilibrium equation"}
For a member with variable flexural rigidity, let $w$ be a small virtual displacement. Its variations at the supports satisfy the same homogeneous kinematic conditions as the actual displacement. The energy form of equilibrium gives
$$
\int_0^L EI(x)v''w''\,dx-P\int_0^L v'w'\,dx=0.
$$
Integrate the first term by parts twice and the second term once. The coefficient of $w$ in the integrand is $(EI v'')''+Pv''$. The end terms are
$$
\left[EI v'' w'-\big((EI v'')'+Pv'\big)w\right]_0^L.
$$
The integral must vanish for every variation $w$ that is zero near the ends. The general equation is therefore $(EI v'')''+Pv''=0$. The end terms distinguish prescribed displacements from natural force conditions. Where virtual rotation is free, the coefficient of $w'$ must vanish, giving zero moment. Where the virtual transverse displacement is free, the coefficient of $w$ must vanish as well. This coefficient contains the contribution from compression.
:::

:::esempio{titolo="Applying flexural boundary conditions"}
At a pin, virtual displacement is zero and virtual rotation is free. Therefore impose $v=0$ and $EI v''=0$. At a flexurally fixed end, $w$ and $w'$ vanish, so the boundary term is zero without prescribing the moment or effective shear. The conditions imposed there are $v=0$ and $v'=0$. At a free end, both $w$ and $w'$ are free, giving two conditions on the end forces. For the compressed cantilever, imposing $v'''(L)=0$ in place of the effective shear condition would omit the force component associated with the slope. That component is of the same order as the other incremental forces.
:::

:::osservazione{titolo="Matching segments with different stiffnesses"}
At an abrupt stiffness change with no hinge or concentrated load, displacement and rotation are continuous. When the equilibrium integral is split into two segments, their boundary terms must cancel at the interface. The variations $w,w'$ are common to both segments and arbitrary there, so the values of $EI v''$ and $(EI v'')'+Pv'$ must agree on both sides. The curvature, however, can jump. For example, if the second segment has twice the rigidity, the same bending moment requires half the curvature on the stiffer side of the interface. A sinusoidal trial shape with continuous curvature is kinematically admissible for the Rayleigh quotient, although it generally fails to satisfy the exact force conditions at the interface.
:::


:::osservazione{titolo="The role of the load direction"}
The load contribution to the energy follows from the work done by a force whose direction remains fixed. On a cantilever, for example, the tip can rotate and move sideways while the force stays parallel to its initial direction. Rotation of the end section does not change the direction of the applied load. A device that keeps the thrust tangent to the deflected tip defines a different problem. Its force direction depends on the deflected shape, so the end conditions for a conservative cantilever load no longer apply directly. Distinguishing the two models requires examining the load application as well as the fixed support symbol. The factor $K=2$ applies to an ideal cantilever under a concentric load of fixed direction.
:::

## Two planes of buckling

:::osservazione{#asse-debole titolo="Comparing the principal planes"}
Let $x$ be the longitudinal axis and $y,z$ the principal axes of the cross section. Displacement along $y$ produces bending about $z$. The relevant flexural rigidity in this plane is $EI_z$. Conversely, displacement along $z$ produces bending about $y$ and involves $EI_y$. If the support conditions allow separate analysis of the two planes, compare
$$
P_{\mathrm{cr},y}=\frac{\pi^2 E I_y}{(K_yL)^2},
\qquad
P_{\mathrm{cr},z}=\frac{\pi^2 E I_z}{(K_zL)^2}.
$$
The subscripts identify the axis about which the section bends. The lower value is the first critical load of the two planes. For identical end restraints, the smaller second moment of area governs. For different restraints, the quantities to compare are $\dfrac{I_y}{K_y^2}$ and $\dfrac{I_z}{K_z^2}$. A brace can therefore change the governing buckling plane.
:::

:::esempio{titolo="A rectangular section and the stiffer end restraint"}
For a rectangular cross section of depth $h$ along $y$ and width $b$ along $z$, the second moments are $I_y=\dfrac{hb^3}{12}$ and $I_z=\dfrac{bh^3}{12}$. If $h=2b$, then $I_z=4I_y$. For pinned ends in both planes, bending about $y$ governs. With $K_y=\dfrac12$ and $K_z=1$ instead, the two critical loads coincide. If $I_z$ is even slightly smaller than $4I_y$, bending about $z$ becomes critical.

::struttura{poligoni="0,0 2,0 2,4 0,4" punti="1,2,G,baricentro" frecce="1,2,1,4.9,y;1,2,3.2,2,z" quote="0 0,2 0,b;0 0,0 4,h,-0.7" riferimento=0 titolo="Principal axes of a rectangle twice as tall as it is wide"}
:::

## Slenderness ratio and elastic range

:::definizione{#snellezza titolo="Geometric slenderness ratio"}
Let $A$ be the cross-sectional area. The **radius of gyration** about the axis under consideration is $i=\sqrt{\dfrac{I}{A}}$. The ratio $\lambda=\dfrac{L_{\mathrm{eff}}}{i}$ is called the **slenderness ratio**. Since both numerator and denominator are lengths, $\lambda$ is dimensionless. Dividing the critical load by the area gives the corresponding average compressive stress. Substituting $I=Ai^2$ gives
$$
\sigma_{\mathrm{cr}}=\frac{P_{\mathrm{cr}}}{A}
=\frac{\pi^2 E}{\lambda^2}.
$$
For the same material, a greater slenderness ratio gives a lower elastic critical stress. For a given area, distributing more material away from the axis increases $I$, increases the radius of gyration, and reduces the slenderness ratio.
:::

:::esempio{titolo="Checking the range of validity"}
For $E=200\,000\,\mathrm{MPa}$ and $\lambda=100$, the Euler stress is $20\pi^2\,\mathrm{MPa}$, approximately $197\,\mathrm{MPa}$. With $\lambda=50$ instead, the calculation gives $80\pi^2\,\mathrm{MPa}$, approximately $790\,\mathrm{MPa}$. If the specified elastic limit is $250\,\mathrm{MPa}$, the first value lies within the assumed elastic range. The second exceeds it. In the second case the elastic model therefore ceases to apply before its predicted critical load is reached. The intersection with a stress threshold follows by setting $\sigma_{\mathrm{cr}}=\sigma_{\mathrm e}$ and solving for $\lambda$.

::grafico{f="200000*pi^2/x^2;250" legenda="\sigma_{\mathrm{cr}};\sigma_{\mathrm e}=250\,\mathrm{MPa}" xmin=45 xmax=180 ymin=0 ymax=1050 titolo="Euler stress in MPa and an elastic limit of 250 MPa"}
:::

## Interpreting a stability analysis

:::esempio{titolo="Stiffness required in the model"}
Consider a pin-ended column of length $5\,\mathrm m$. Find the flexural rigidity that would give a critical load of $60\pi^2\,\mathrm{kN}$ in this model. Solve Euler’s formula for $EI$. The load multiplied by the square of the length is $1500\pi^2\,\mathrm{kN\,m^2}$. Dividing by $\pi^2$ gives $EI=1500\,\mathrm{kN\,m^2}$. The units are those of flexural rigidity because a force is multiplied by a length squared. For different end restraints, repeat the calculation with the new effective length.
:::

:::osservazione{titolo="Sensitivity to end restraints and dimensions"}
The squared effective length has a direct effect on the sensitivity of the load. If $K$ increases by ten percent while $L$ and $EI$ remain fixed, the ratio of the new to the original critical load is $\dfrac{1}{(1.1)^2}$, approximately $0.826$. The load thus falls by about seventeen percent. The fractional change differs from that in $K$ because the coefficient is squared in the denominator. If only $E$ increases by ten percent, the load increases by the same percentage.

For a rectangular section, the second moment of area increases with the cube of the dimension perpendicular to the bending axis. With the other dimension fixed, doubling the perpendicular dimension increases the flexural rigidity in that plane by a factor of eight. The area also doubles. The critical load therefore increases by a factor of eight, while the corresponding average stress increases by a factor of four. Distinguishing load from stress avoids applying the same scale factor to both.
:::

:::attenzione{titolo="First critical load and cross-section checks"}
The Euler load applies to the entire member and the specified buckling mode. A thin wall can have its own local buckling mode in which deformation is concentrated in that part of the cross section. A different model is also required if the section cannot remain elastic at the calculated stress. For example, if the elastic limit is $250\,\mathrm{MPa}$ and the calculation gives $790\,\mathrm{MPa}$, the straight configuration exceeds the assumed material range before reaching that stress. Euler’s result still solves the ideal elastic problem; the other checks address different assumptions.
:::

## Energy and Rayleigh’s estimate

::::teorema{#rayleigh titolo="The Rayleigh quotient"}
For a conservative compressive force constant along the member, let $\varphi$ be a trial function satisfying the homogeneous kinematic boundary conditions. Assume $\varphi'$ is not identically zero and the rigidity satisfies $EI(x)>0$. The quotient
$$
P_{\mathrm R}=
\frac{\displaystyle\int_0^L EI(x)[\varphi''(x)]^2\,dx}
{\displaystyle\int_0^L [\varphi'(x)]^2\,dx}
$$
is an upper bound on the first critical load. Equality holds if $\varphi$ is a first buckling mode shape. The trial function must satisfy the displacement and rotation restraints; the natural end force conditions follow from equilibrium.

:::dimostrazione
For a deflected shape $v=\alpha\varphi$ of amplitude $\alpha$, the bending strain energy is $\dfrac{\alpha^2}{2}\int_0^L EI(x)(\varphi'')^2\,dx$. The contribution from the applied force is $-\dfrac{\alpha^2 P}{2}\int_0^L(\varphi')^2\,dx$ because, to second order, the loss of projected length is $\dfrac12\int_0^L(v')^2\,dx$. For nonzero amplitude, the sum vanishes when $P$ equals the quotient. Minimizing this ratio over all admissible shapes gives the first critical load. Evaluating it for one trial shape therefore gives a value greater than or equal to the minimum.
:::
::::

:::esempio{titolo="Different stiffnesses in the two halves"}
For a pin-ended column with rigidity $EI_1$ in the first half and $EI_2$ in the second, the trial shape $\varphi=\sin\!\left(\dfrac{\pi x}{L}\right)$ satisfies the end restraints. Its second derivative is proportional to the sine, whose square has equal integrals over the two halves. The first derivative is proportional to the cosine, whose square has integral $\dfrac L2$ over the whole member. It follows that
$$
P_{\mathrm R}=\frac{\pi^2}{L^2}\frac{EI_1+EI_2}{2}.
$$
The arithmetic mean follows from the chosen shape. With the stiffness discontinuity away from midspan, the two numerator integrals generally receive different weights.

::struttura{nodi="A,0,0;C,3,0;B,6,0" aste="A-C;C-B" vincoli="A,cerniera;B,carrello" forze="B,-1.2,0,P" etichette="1.4,0.35,EI_1;4.5,0.35,EI_2" quote="A,C,half the length L;C,B,half the length L" titolo="Member with constant flexural rigidity over each half"}
:::

## Imperfections and deflection amplification

:::teorema{#amplificazione-imperfezioni titolo="Initial imperfection in the first mode"}
For a pin-ended column of constant rigidity, suppose the initial stress-free shape is $v_0(x)=e_0\sin\!\left(\dfrac{\pi x}{L}\right)$. The coefficient $e_0$ is the amplitude of the geometric imperfection. For a concentric load $P<P_{\mathrm{cr}}$, the total deflection relative to the line joining the pins has amplitude
$$
v_{\max}=\frac{e_0}{1-\dfrac{P}{P_{\mathrm{cr}}}}.
$$
The additional deflection relative to the initial shape is $v_{\max}-e_0$. The elastic moment depends on the change in curvature from $v_0$, whereas the moment arm depends on the total offset $v$. The equation is therefore $EI(v-v_0)''+Pv=0$. Substituting the sinusoidal shape gives $(P_{\mathrm{cr}}-P)v_{\max}=P_{\mathrm{cr}}e_0$, which yields the formula.
:::

:::esempio{titolo="Total and additional deflection"}
If $e_0=2\,\mathrm{mm}$ and $P=\dfrac34P_{\mathrm{cr}}$, the denominator is $\dfrac14$. The total deflection is $8\,\mathrm{mm}$ and the increase above its initial value is $6\,\mathrm{mm}$. The amplification increases rapidly as $P$ rises. Near the critical load, the linear model may predict displacements outside its small-displacement range. Both initial imperfections and eccentric loads can produce a moment arm as soon as loading begins, but its value and distribution depend on the specified conditions.

::grafico{f="1/(1-x)" xmin=0 xmax=0.9 ymin=0 ymax=11 titolo="Ratio of total to initial deflection as a function of $\dfrac{P}{P_{\mathrm{cr}}}$"}
:::

:::osservazione{titolo="Constant eccentricity of the load line"}
In a distinct example, start with a straight member and apply a compressive force whose line of action has constant eccentricity $e$ relative to the line joining the end centroids. Assume both supports prevent transverse displacement and that the eccentricity-induced end couples are transmitted to the member. Taking the sign of $e$ so it adds to $v$ gives the moment $P(e+v)$. The equation becomes $EI v''+Pv=-Pe$. Using symmetry and imposing $v(0)=v(L)=0$ gives
$$
v(x)=e\left[\frac{\cos(k(x-\dfrac L2))}{\cos(\dfrac{kL}{2})}-1\right],
\qquad k=\sqrt{\frac{P}{EI}}.
$$
The midspan deflection is $e\left[\dfrac{1}{\cos(\dfrac{kL}{2})}-1\right]$. The first Euler load reappears as the value at which the denominator tends to zero. Here $e$ is the offset between the force and the axis at the onset of loading. For an initially imperfect member, $e_0$ is instead the amplitude of the unloaded shape. These two conditions give different amplification laws.
:::

:::esempio{titolo="Two components of the initial imperfection"}
With two pinned ends and constant rigidity, the initial shape can contain both the first and second modes. Consider an unloaded shape with coefficients $e_1=2\,\mathrm{mm}$ and $e_2=1\,\mathrm{mm}$. Since the elastic curve equation is linear, the two contributions can be superimposed. For the first sine term, the second derivative reproduces the function multiplied by $-\dfrac{\pi^2}{L^2}$. For the second the factor is $-\dfrac{4\pi^2}{L^2}$. Each component therefore has its own amplification:
$$
a_1=\frac{e_1}{1-\dfrac{P}{P_1}},\qquad
a_2=\frac{e_2}{1-\dfrac{P}{P_2}},\qquad P_2=4P_1.
$$
With $P=\dfrac12P_1$, the amplitudes are $a_1=4\,\mathrm{mm}$ and $a_2=\dfrac87\,\mathrm{mm}$. At midspan the second mode vanishes, giving a displacement $4\,\mathrm{mm}$. At the quarter-span point the second mode equals one and the first equals $\dfrac{\sqrt2}{2}$. The total displacement there is $\left(2\sqrt2+\dfrac87\right)\,\mathrm{mm}$. Thus a midspan measurement directly gives the first amplitude in this case, while identifying the second requires observing the shape away from the center as well.
:::

:::osservazione{titolo="The contribution of the first mode"}
For a positive load below $P_1$, amplification is greater in the first mode because its denominator is smaller. A small initial component of the lowest mode can therefore become dominant as the load increases. In the ideal case $e_1=0$, the linear equation forced only in the second mode gives $a_1=0$ as long as $P<P_1$. Stability under arbitrary disturbances, however, is still governed by the first critical load. The mode present in the unloaded geometry and the mode governing the onset of buckling describe different aspects of the problem.
:::
