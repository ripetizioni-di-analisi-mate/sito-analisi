---
titolo: "Statically indeterminate structures and virtual work"
sommario: "The force method for elastic beams with one or two redundant restraints, support settlements, and thermal strains."
---

## Equilibrium and compatibility

:::definizione{#schema-primario titolo="The statically determinate primary structure"}
A structure is **statically indeterminate** if it is stable and more than one set of support reactions satisfies the equilibrium equations. The number of independent reactions that equilibrium alone cannot determine is the degree of static indeterminacy. In the **force method**, we choose this number of unknown forces or moments, called redundants, and release the corresponding restraints. The remaining structure must be stable and statically determinate. It is called the primary structure.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,incastro,180;B,carrello" carichi="A,B,0.72,0.72,q" quote="A,B,L" titolo="Beam fixed at A and supported at B"}

The beam shown has a fixed support at $A$ and a vertical support at $B$. The fixed support restrains two translations and one rotation. The support at $B$ supplies an additional vertical reaction. There are three independent equations of equilibrium in the plane, so one of the four reactions remains undetermined. One possible redundant is the reaction $X=R_B$, taken as positive upward. Removing the support leaves a cantilever fixed at $A$, which is a stable primary structure.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,incastro,180" carichi="A,B,0.72,0.72,q" reazioni="B,0,1.05,X" quote="A,B,L" titolo="Primary structure with redundant force X"}

The moment reaction at the fixed support is another possible redundant. In that case rotation at $A$ is released while both translations remain restrained. The primary structure is a beam simply supported at both ends. The unknown couple is applied at section $A$, and the rotation there must be zero. Both choices give the same elastic response because both restore the original restraints.
:::

:::attenzione{titolo="Stability of the released structure"}
Counting reactions helps identify possible releases. Their arrangement must be checked separately. If only the horizontal restraint at the fixed end is released in this example, the remaining supports allow the entire beam to translate horizontally as a rigid body. The structure still has three reactions, but it is unstable and cannot serve as a primary structure for an arbitrary horizontal load.
:::

:::osservazione{titolo="Internal releases and relative displacements"}
A release can also be internal. For example, inserting a hinge at a continuous joint lets the adjacent cross sections rotate relative to one another. If the hinged structure is stable, applying equal and opposite couples restores rotational continuity. The displacement coordinate conjugate to these couples is the difference between the two rotations. Indeed, if the couples are $X$ and $-X$ and the counterclockwise rotations are $\varphi_1$ and $\varphi_2$, their work is $X(\varphi_1-\varphi_2)$. At the continuous joint, the compatibility condition is therefore $\varphi_1-\varphi_2=0$.

The same reasoning applies when a relative translation is released at an internal connection. The unknown force acts in opposite directions on the two parts, and the compatibility equation involves the difference between their displacements in the force direction. The unknowns and their positive directions can thus be chosen separately while each force remains paired with its conjugate displacement.
:::

:::esempio{titolo="Intermediate supports of a continuous multispan bridge"}
The historic Tacoma bridge has reinforced concrete beams that are continuous over several spans. For a continuous beam, overall equilibrium gives fewer equations than there are unknown vertical reactions. One displacement condition is added at each support removed to form the primary structure.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/ponte-continuo.webp" alt="Archival photograph of a column and the underside of the North Twenty-First Street Bridge" width="828" height="1024" loading="lazy" decoding="async"><figcaption>Intermediate supports of a continuous multispan bridge. Resized photograph by <a href="https://commons.wikimedia.org/wiki/File:DETAIL_VIEW_OF_SOUTHEAST_COLUMN%2C_LOOKING_NORTHEAST_-_North_Twenty-First_Street_Bridge%2C_North_Twenty-first_Street_spanning_Buckley_Gulch%2C_Tacoma%2C_Pierce_County%2C_WA_HAER_WASH%2C27-TACO%2C10-11.tif">Historic American Engineering Record</a>, <a href="https://creativecommons.org/publicdomain/mark/1.0/">public domain</a>.</figcaption></figure>
:::

## Virtual work and unit loads

::::teorema{#lavori-virtuali titolo="Unit-force and unit-moment methods"}
Consider a structure made of linearly elastic beams with small displacements and fixed supports, and assume it deforms in bending and under axial load. We seek a displacement or rotation in a specified direction. The actual internal actions are the bending moment $M$ and the axial force $N$. Construct a second system in equilibrium on the same structure by applying a unit force in the direction of the desired translation, or a unit couple in the direction of the desired rotation. Let $m$ and $n$ denote the virtual internal actions per unit of the applied load. The signed value of the desired displacement coordinate is

$$
\delta=\sum_{\text{members}}\int
\left(\frac{Mm}{EI}+\frac{Nn}{EA}\right)\mathrm dx.
$$

:::dimostrazione
The principle of virtual work equates the external work of the virtual loads through the actual displacements to their internal work through the actual strains. The virtual reactions do no work because the actual supports do not move. The external work per unit virtual load therefore equals the single displacement coordinate sought. The internal work contains the product of virtual moment and elastic curvature $\dfrac{M}{EI}$, with consistent signs, and the product of virtual axial force and elastic axial strain $\dfrac{N}{EA}$. Summing over all members gives the stated identity.
:::

The virtual system carries none of the actual loads. The strains in the work integral still belong to the actual system. The flexural rigidity $EI$ may vary from one segment to the next. In that case each segment is integrated using its own rigidity. If the model includes shear or torsional deformation, the internal work also includes the corresponding products of virtual internal actions and actual strains.
::::

:::esempio{titolo="A point load within the span and the resulting tip deflection"}
A cantilever of span $L$ carries a downward force $P$ at a distance $a$ from its fixed end. The virtual system has a downward unit force at the tip because the required deflection $v_B$ is taken as positive downward.

::struttura{nodi="A,0,0;C,2,0;B,5,0" aste="A-B" vincoli="A,incastro,180" forze="C,0,-1.0,P" quote="A,C,a;C,B,L − a" titolo="Actual system with force P at C"}

::struttura{nodi="A,0,0;C,2,0;B,5,0" aste="A-B" vincoli="A,incastro,180" forze="B,0,-1.0,1" quote="A,C,a;C,B,L − a" titolo="Virtual system with a downward unit force at B"}

The actual moment is $-P(a-x)$ between the fixed end and the load, and zero between the load and the tip. The virtual moment is $-(L-x)$ throughout the cantilever. The segment beyond the load contributes no internal work because $M=0$ there. With constant $EI$,

$$
v_B=\frac{P}{EI}\int_0^a(a-x)(L-x)\,\mathrm dx
=\frac{Pa^2(3L-a)}{6EI}.
$$

The product of the moments is positive over the segment that contributes to the integral. The displacement is therefore positive in the direction of the virtual load. For $P=18\,\mathrm{kN}$, $a=2\,\mathrm m$, $L=5\,\mathrm m$, and $EI=12\,000\,\mathrm{kN\,m^2}$, the result is $13\,\mathrm{mm}$. A counterclockwise virtual couple at the tip would instead give the rotation measured positive counterclockwise.
:::

:::esempio{titolo="Finding a rotation with a unit moment"}
Let a cantilever of span $L$ carry a uniform downward load $q$, and find the tip rotation, taking counterclockwise rotation as positive. A counterclockwise unit couple at the tip produces the constant virtual moment diagram $m=1$. The actual moment is $-\dfrac q2(L-x)^2$. Therefore

$$
\varphi_B=\int_0^L\frac{M}{EI}\,\mathrm dx=-\frac{qL^3}{6EI}
$$

for constant flexural rigidity. The negative sign indicates clockwise rotation. For $q=9\,\mathrm{kN/m}$, $L=4\,\mathrm m$, and $EI=8\,000\,\mathrm{kN\,m^2}$, the result is $-0.012\,\mathrm{rad}$. The elastic curve gives the same sign because the downward deflection increases from the fixed end to the tip. With the convention used in this course, counterclockwise rotation is $-v'$.

For a tension bar with two segments in series, an axial unit force can be applied at the tip. The virtual axial force is one in each segment, and the bending contribution is zero. The formula gives the sum of the axial elongations, using the rigidity of each segment.
:::

## One redundant force

::::teorema{#metodo-forze titolo="The compatibility equation for one redundant"}
Consider a linearly elastic structure with one degree of static indeterminacy. Choose a positive direction for the redundant force or couple $X$ on the primary structure. Measure the displacement coordinate prescribed by the released restraint in the same direction. Let $\delta_0$ be the displacement coordinate under the external loads and $f_{11}$ its value under a unit load acting in the positive direction of $X$. If the original restraint prescribes the value $\Delta$, compatibility requires

$$
\delta_0+f_{11}X=\Delta,
\qquad
X=\frac{\Delta-\delta_0}{f_{11}}.
$$

:::dimostrazione
By linearity, the displacement due to $X$ is $X$ times the displacement due to the unit load. The total displacement is therefore $\delta_0+Xf_{11}$. The original restraint permits only the value $\Delta$, which the compatibility equation imposes. For a beam deforming in bending and axial extension, applying virtual work to the same unit-load system gives $f_{11}=\int\bigl(\dfrac{m^2}{EI}+\dfrac{n^2}{EA}\bigr)\,\mathrm dx$, summed over all members. The coefficient is positive if the unit load produces deformation in the model.
:::

Translational flexibility per unit force is measured in $\mathrm{m/kN}$. Greater flexibility means that a smaller force produces the same displacement correction. Once $X$ is known, all reactions and internal actions follow by adding the effects of $X$ to those of the applied loads.
::::

:::esempio{titolo="Prop reaction under a uniform load"}
Remove the tip support and take $X$ as positive upward. The actual moment diagram for the cantilever is $M_0(x)=-\dfrac q2(L-x)^2$, where $q$ is the uniform downward load. The moment diagram for the upward unit force is $m_1(x)=L-x$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,incastro,180" diagramma="0,0,6,0,-(6-s)^2/2" verso=-1 numeri=0 segni=1 titolo="Actual bending moment in the uniformly loaded cantilever, with the upper fibers in tension"}

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,incastro,180" reazioni="B,0,1.05,1" diagramma="0,0,6,0,6-s" verso=-1 numeri=0 segni=1 titolo="Bending moment in the cantilever under an upward unit force"}

The actual and unit-load moment diagrams have opposite signs. Consequently, $\delta_0$ is negative, meaning that the tip moves downward. For constant $EI$, this gives

$$
\begin{aligned}
\delta_0&=-\frac{q}{2EI}\int_0^L (L-x)^3\,\mathrm dx
=-\frac{qL^4}{8EI},\\[5pt]
f_{11}&=\frac1{EI}\int_0^L (L-x)^2\,\mathrm dx
=\frac{L^3}{3EI}.
\end{aligned}
$$

For a stationary prop $\Delta=0$, so $R_B=\dfrac{3qL}{8}$. If $L=6\,\mathrm m$ and $q=8\,\mathrm{kN/m}$, the result is $R_B=18\,\mathrm{kN}$. The rigidity cancels because it is the same in every segment and in both load cases. If rigidity varies along the beam, each segment must be integrated separately.
:::

:::esempio{titolo="A cantilever with two segments of different stiffness"}
Remove the prop from the cantilever and consider a uniform load of intensity $q$. The rigidity is $K$ in the half nearest the fixed end and $\dfrac K2$ in the half nearest the tip. Equilibrium determines the moment diagrams on the primary structure, so they are the same as for a uniform cantilever. In both integrals, however, the more flexible half carries twice the weight. Taking $w=L-x$ as the distance from the tip gives

$$
\begin{aligned}
f_{11}
&=\frac1K\left(2\int_0^{\frac L2}w^2\,\mathrm dw+\int_{\frac L2}^L w^2\,\mathrm dw\right)
=\frac{3L^3}{8K},\\[4pt]
\delta_0
&=-\frac{q}{2K}\left(2\int_0^{\frac L2}w^3\,\mathrm dw+\int_{\frac L2}^L w^3\,\mathrm dw\right)
=-\frac{17qL^4}{128K}.
\end{aligned}
$$

The reaction at the stationary prop is therefore $\dfrac{17qL}{48}$, compared with $\dfrac{3qL}{8}=\dfrac{18qL}{48}$ for uniform rigidity. The two integrals explain the difference. The load term is weighted by $w^3$ and the flexibility term by $w^2$. The more flexible half, near the tip, contributes relatively more to the denominator. A smaller reaction is therefore needed to bring the deflection to zero.
:::

## Two redundants and the flexibility matrix

:::teorema{#due-ridondanze titolo="Compatibility with two redundants"}
Let $X_1$ and $X_2$ be the loads on the primary structure that restore the two released restraints. Let $f_{ij}$ denote displacement coordinate $i$ produced by unit load $j$. There is one compatibility equation for each release:

$$
\begin{cases}
f_{11}X_1+f_{12}X_2=\Delta_1-\delta_{01},\\
f_{21}X_1+f_{22}X_2=\Delta_2-\delta_{02}.
\end{cases}
$$

For bending alone, $f_{ij}$ is the integral of $\dfrac{m_i m_j}{EI}$ summed over all members. Interchanging the two factors in the product leaves its value unchanged, so $f_{12}=f_{21}$. The off-diagonal term describes how a force affects the displacement coordinate conjugate to the other force. The two equations must therefore be solved simultaneously.

For any pair of real values $a_1,a_2$, the quadratic form of the matrix equals the integral of $\dfrac{(a_1m_1+a_2m_2)^2}{EI}$. This value is positive for every nonzero pair if the unit-load moment diagrams are linearly independent in the deformation model. The matrix is then invertible. If a necessary deformation has been neglected, such as axial elongation of a tie that acts as a support, the model should be reconsidered before solving the system.
:::

:::esempio{titolo="Two vertical supports on the same cantilever"}
A beam of length $6\,\mathrm m$ is fixed at $A$ and supported at $B$ and $C$, at distances $3\,\mathrm m$ and $6\,\mathrm m$ from $A$. The unknowns are the two vertical reactions, taken as positive upward. Releasing the supports leaves a cantilever. The unit-load moment diagram for $B$ is $3-x$ on segment $AB$ and vanishes on $BC$. The unit-load moment diagram for $C$ is $6-x$ over the full span.

::struttura{nodi="A,0,0;B,3,0;C,6,0" aste="A-B;B-C" vincoli="A,incastro,180;B,carrello;C,carrello" carichi="A,C,0.7,0.7,q" quote="A,B,3 m;B,C,3 m" titolo="Beam with two redundant vertical supports"}

With distances in meters and constant $EI$, the coefficients multiplied by $EI$ follow by integrating the products of the moment diagrams. For example, $EI f_{BC}=\int_0^3(3-x)(6-x)\,\mathrm dx=\dfrac{45}{2}\,\mathrm{m^3}$. The uniform load of $14\,\mathrm{kN/m}$ makes both $\delta_{0B}$ and $\delta_{0C}$ negative. With reactions expressed in kilonewtons, the numerical system is

$$
\begin{cases}
9R_B+22.5R_C=803.25,\\
22.5R_B+72R_C=2\,268.
\end{cases}
$$

The solution is $R_B=48\,\mathrm{kN}$ and $R_C=16.5\,\mathrm{kN}$. Vertical equilibrium gives a reaction of $84-48-16.5=19.5\,\mathrm{kN}$ at $A$. The middle reaction is larger than the tip reaction even though the tip has greater direct flexibility. Each reaction also depends on the interaction between the two displacement coordinates.
:::

:::esempio{titolo="Releasing rotation at both fixed ends"}
A prismatic beam under a uniform load is fixed at both ends. In the bending model, the end rotations are released while the vertical displacements remain restrained. On the resulting simply supported beam, the moment due to the load is $\dfrac q2 x(L-x)$. By symmetry the internal bending moments at the two ends are equal. Denote their common value by $M_e$. The equal and opposite external couples then add a constant contribution $M_e$ to the moment diagram.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" carichi="A,B,0.7,0.7,q" coppie="A,1,X_A;B,-1,X_B" quote="A,B,L" titolo="Beam with rotation released at both ends"}

Both end rotations must vanish in the original structure, so their difference must also vanish. This difference is the integral of $\dfrac{M}{EI}$ along the beam. For constant rigidity, $\dfrac{qL^3}{12}+M_eL=0$, which gives $M_e=-\dfrac{qL^2}{12}$. The condition on the difference suffices here because symmetry makes the two end rotations equal and opposite. For asymmetric loading the two conditions are imposed separately.
:::

## Prescribed support settlements

:::osservazione{#cedimenti titolo="Displacement prescribed at a support"}
A prescribed settlement is a known displacement of a support point. When that support is released, the corresponding displacement coordinate of the structure must equal the prescribed value. If the reaction is positive upward and the support moves downward by $s$, then $\Delta=-s$. A rotational restraint is treated in the same way by comparing the positive direction of the couple with that of the prescribed rotation.

::struttura{nodi="A,0,0;B,4,0" aste="A-B" vincoli="A,incastro,180;B,carrello" carichi="A,B,0.58,0.58,q" tratteggi="0,0 1,-0.02 2,-0.08 3,-0.17 4,-0.25" frecce="4.65,0.03,4.65,-0.32,s" quote="A,B,L" titolo="Prescribed settlement of the tip support, exaggerated in the diagram"}

For a propped cantilever under a uniform load, the result is $R_B=\dfrac{3qL}{8}-\dfrac{3EI}{L^3}s$. The term due to settlement is negative. Lowering the support brings it closer to the position the tip would reach on the unpropped cantilever. If the calculated reaction reverses direction, a unilateral support loses contact, and the analysis must use the structure with that support disengaged. A bilateral restraint can exert force in either direction.
:::

:::esempio{titolo="Settlement relative to the chord"}
Consider a continuous beam on three simple supports. With the middle support removed, the end supports can settle by different amounts. In the absence of loads, a small rigid-body rotation brings the simply supported beam onto the chord joining the new end positions. The settlement that induces bending in the original structure is therefore the settlement of its middle support relative to that chord.

For example, if the ends move down by $2\,\mathrm{mm}$ and $6\,\mathrm{mm}$ and the spans are equal, the midpoint of the chord moves down by $4\,\mathrm{mm}$. An equal downward displacement of the middle support gives a compatible configuration without reactions due to settlement. If the middle support moves down by $5\,\mathrm{mm}$, the beam must deflect an additional millimeter relative to the chord at midspan.
:::

:::osservazione{titolo="Work of virtual reactions through support settlements"}
If the virtual system retains the settling supports, its reactions can do work through the actual support displacements. With upward positive, a vertical virtual reaction $R^\ast$ at a support that moves down by $s$ contributes $-R^\ast s$ to the external work. This contribution is known because both the virtual reaction and the settlement are known.

In the force method the redundant restraint is released, so there is no virtual support reaction at that restraint. Its settlement appears on the right-hand side as the prescribed value $\Delta$. Any settlement of supports retained in the primary structure contributes instead to the initial displacement $\delta_0$. The two choices of virtual system thus give the same displacement relation.
:::

## Temperature changes and restrained expansion

:::esempio{#temperatura titolo="A member restrained axially at both ends"}
A uniform temperature rise $\Delta T$ produces axial strain $\varepsilon_T=\alpha\Delta T$ in a free bar, where $\alpha$ is the coefficient of thermal expansion. If the distance between the ends remains fixed, the elastic strain must offset the thermal strain. For a uniform member of cross-sectional area $A$ and Young’s modulus $E$, the total elongation is

$$
\Delta L=\frac{NL}{EA}+\alpha\Delta T L.
$$

::struttura{nodi="A,0,0;B,5,0" aste="A-B" vincoli="A,incastro,180;B,incastro,0" quote="A,B,L" etichette="2.5,0.55,uniform ΔT" titolo="Bar restrained axially at both ends and heated uniformly"}

Imposing $\Delta L=0$ gives $N=-EA\alpha\Delta T$. For heating, the sign indicates compression. For cooling, it indicates tension. The length cancels because both elongations are proportional to $L$. This result describes the straight configuration. A slender member in compression may also require a stability analysis.

If two consecutive segments have different rigidities and thermal expansions, and no force is applied at the joint, the axial force $N$ is the same in both segments. Their elongations are added using the rigidity and temperature of each segment:

$$
N\left(\frac{L_1}{EA_1}+\frac{L_2}{EA_2}\right)
+\alpha_1\Delta T_1 L_1+\alpha_2\Delta T_2 L_2=0.
$$

The joint can move even when the ends of the bar are fixed. The condition requires the sum of the elongations to vanish, so one segment can lengthen while the other shortens by the same amount.
:::

## Thermal curvature and verification of results

:::definizione{#curvatura-termica titolo="Free curvature caused by a temperature gradient"}
If temperature varies through the depth, different beam fibers have different free thermal strains. For a homogeneous material with a linear temperature variation through the depth, thermal strain is a linear function of the through-depth coordinate plus a constant. A free cross section can therefore expand at its centroid, and its rotation can vary along the beam. Denote the free curvature by $\kappa_T$, defined as $v_T''$ with $v_T$ positive downward. When a bending moment is present,

$$
v''=-\frac{M}{EI}+\kappa_T.
$$

For a cantilever with a stationary fixed end and constant $\kappa_T$, the free solution satisfies $v_T(0)=v_T'(0)=0$. Integrating twice gives $v_T(L)=\dfrac{\kappa_T L^2}{2}$. If a stationary support is added at the tip, an upward reaction must cancel the positive thermal deflection. With $L=5\,\mathrm m$, $EI=10\,000\,\mathrm{kN\,m^2}$, and $\kappa_T=2\cdot10^{-3}\,\mathrm{m^{-1}}$, the free tip would move down by $25\,\mathrm{mm}$ and the required reaction is $6\,\mathrm{kN}$.

A virtual-work calculation must include the contribution from initial strains. With the sign convention used in this chapter, the thermal term is $\int(n\varepsilon_T-m\kappa_T)\,\mathrm dx$. The minus sign follows from the definition $v_T''=\kappa_T$ because positive bending moment is conjugate to curvature $-v''$. Alternatively, the thermal displacement of the primary structure can be found by direct integration of the free strains.
:::

:::osservazione{titolo="From temperature difference to curvature"}
With the $y$ axis pointing upward, the free longitudinal strain at height $y$ is $\alpha\Delta T(y)$. The difference in strain between the upper and lower fibers is $\alpha(\Delta T_{\mathrm{top}}-\Delta T_{\mathrm{bottom}})$. In a plane beam this difference is $h v_T''$, where $h$ is the distance between the two fibers. Therefore

$$
\kappa_T=\frac{\alpha(\Delta T_{\mathrm{top}}-\Delta T_{\mathrm{bottom}})}{h}.
$$

For example, with $\alpha=10^{-5}\,\mathrm{K^{-1}}$, $h=0.20\,\mathrm m$, and a temperature difference of $20\,\mathrm K$ between the upper and lower fibers, the result is $\kappa_T=10^{-3}\,\mathrm{m^{-1}}$. If both fibers experience the same temperature rise, their difference vanishes and the free curvature is zero. A uniform axial thermal strain can still be present. The two contributions are independent in the linear model.
:::

:::teorema{#castigliano titolo="Castigliano’s theorem"}
For a linearly elastic structure with fixed supports and no imposed strains, the derivative of the strain energy with respect to an applied force gives the displacement in the direction of that force. Differentiation with respect to a couple gives the rotation in the direction of the couple. The proof and the use of fictitious loads are developed in the chapter on energy methods and the displacement method.
:::

:::osservazione{titolo="Separate checks of equilibrium and compatibility"}
A force-method solution must satisfy both equilibrium and compatibility. Equilibrium can be checked by taking moments about a point other than the one used to calculate the reactions. Compatibility can be checked by reconstructing the elastic curve or recomputing a displacement with a different virtual system. For a settling support, the result must equal the prescribed value, while a stationary support must have zero displacement. For a heated bar with restrained ends, the residual to check is the sum of the thermal and elastic elongations.
:::
