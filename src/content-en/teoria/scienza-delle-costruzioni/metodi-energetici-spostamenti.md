---
titolo: "Energy methods and the displacement method"
sommario: "How to find displacements and reactions from strain energy and analyze beams and frames using joint stiffnesses."
---

## Strain energy in members

:::definizione{#energia-elastica titolo="Strain energy and internal forces"}
A slowly increasing tensile force stretches a tie. During each increment of elongation, the force does work that is stored as **strain energy**. In a linearly elastic structure, force is proportional to elongation. The area under the force–elongation graph is therefore a triangle. If the final force is $N$ and the elongation is $u$, the stored energy is $U=\dfrac12 Nu$.

A prismatic bar of length $L$, elastic modulus $E$, and cross-sectional area $A$ has elongation $u=\dfrac{NL}{EA}$. The quantity $EA$ is the axial rigidity. If $N$ or $EA$ varies along coordinate $x$, add the energies of the elements of length $dx$. For an assembly of linearly elastic members, the axial and bending energies can be added when their corresponding deformations are uncoupled.

$$
U=\sum_e\int_0^{L_e}
\left(\frac{N_e(x)^2}{2E_eA_e}
+\frac{M_e(x)^2}{2E_eI_e}\right)dx.
$$

The index $e$ identifies the member, and $I_e$ is its second moment of area about the bending axis. Integrate over each segment using the internal force distribution for that segment. Because the internal actions are squared, segments in compression and segments with negative bending moment also give positive contributions. If shear deformation is included, add the term $\dfrac{T^2}{2GA_s}$, where $G$ is the shear modulus and $A_s$ the effective shear area of the model.
:::

:::esempio{titolo="A tie with two segments of different cross-sectional areas"}
Two segments in series carry a tensile force of $24\,\mathrm{kN}$. The first segment has length $1\,\mathrm{m}$ and rigidity $EA_1=24\,000\,\mathrm{kN}$. The second has length $2\,\mathrm{m}$ and rigidity $EA_2=12\,000\,\mathrm{kN}$. Since there is no load between the segments, they carry the same axial force. Their energy contributions are

$$
U_1=\frac{24^2\cdot1}{2\cdot24\,000}\,\mathrm{kN\,m}
=0.012\,\mathrm{kN\,m},
\qquad
U_2=\frac{24^2\cdot2}{2\cdot12\,000}\,\mathrm{kN\,m}
=0.048\,\mathrm{kN\,m}.
$$

The second segment stores four times as much strain energy as the first because it is twice as long and has half the rigidity. The sum is $0.060\,\mathrm{kN\,m}$. The tip displacement equals the sum of the two elongations, or $5\,\mathrm{mm}$. The work done by the gradually applied force gives the same energy, $\dfrac12\cdot24\cdot0.005\,\mathrm{kN\,m}$.

::struttura{nodi="A,0,0;B,1,0;C,3,0" aste="A-B;B-C" vincoli="A,incastro,180" forze="C,0.65,0,P" quote="A,B,1 m;B,C,2 m" etichette="0.55,0.28,EA_1;2,0.28,EA_2" titolo="Bar with two axial rigidities in series"}
:::

:::esempio{titolo="Three-point bending test"}
The testing machine applies a force at midspan while the specimen rests on two supports. The area under the force–displacement curve measures the work of the load. Under quasistatic loading in the linear elastic range, this area is triangular and equals the stored strain energy.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/prova-flessione.webp" alt="Testing machine applying a central load to a specimen resting on two supports" width="1280" height="1000" loading="lazy" decoding="async"><figcaption>Three-point bending test. Resized photograph by <a href="https://commons.wikimedia.org/wiki/File:Three_point_flexural_test.jpg">Cjp24</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</figcaption></figure>
:::

## Bending strain energy and external work

:::definizione{#energia-flessionale titolo="Strain energy in a beam under bending"}
For a linearly elastic Euler–Bernoulli beam, let $w(x)$ be the transverse displacement, positive upward. The counterclockwise rotation is $\varphi=w^\prime$. A positive moment places the lower fibers in tension and equals $M=EIw^{\prime\prime}$. With the deflection $v=-w$ taken as positive downward, the same relation becomes $M=-EIv^{\prime\prime}$.

The two end sections of an element of length $dx$ rotate by $w^{\prime\prime}dx$ relative to one another. Its strain energy is therefore $\dfrac12 M w^{\prime\prime}dx$. Substituting the constitutive relation gives

$$
U_M=\int_0^L\frac{M(x)^2}{2EI}\,dx
=\frac12\int_0^L EI\big(w^{\prime\prime}(x)\big)^2\,dx.
$$

The first expression is convenient when the internal forces are known. The second uses the deflected shape directly and is useful for deriving stiffness coefficients. With $M$ in $\mathrm{kN\,m}$, $EI$ in $\mathrm{kN\,m^2}$, and $dx$ in $\mathrm{m}$, the integral gives $\mathrm{kN\,m}$.
:::

:::esempio{titolo="A couple at the tip of a cantilever"}
A cantilever of length $L$ carries a counterclockwise tip couple $C$. There is no transverse load along the beam, so the shear is zero and the internal moment is constant. It follows that $U_M=\dfrac{C^2 L}{2EI}$. Since the curvature is constant, rotation varies linearly along the cantilever. At the tip it is $\varphi_B=\dfrac{CL}{EI}$. The product $\dfrac12 C\varphi_B$ equals the strain energy integral.

::struttura{nodi="A,0,0;B,3,0" aste="A-B" vincoli="A,incastro,180" coppie="B,1,C" quote="A,B,L" titolo="Counterclockwise couple applied at the cantilever tip"}
:::

::::teorema{#clapeyron titolo="Clapeyron’s theorem"}
Consider an initially unloaded, linearly elastic structure with fixed supports and no imposed strains. Let $Q_i$ denote the final forces and couples and $d_i$ their conjugate displacements and rotations. A force is conjugate to displacement in its own direction. A couple is conjugate to rotation measured with the same sign convention. The total strain energy is

$$
U=\frac12\sum_i Q_i d_i.
$$

For a distributed load, add the continuous contribution $\dfrac12\int q(x)v(x)\,dx$, where $q$ and $v$ are measured in the same direction.

:::dimostrazione
Increase the loads from zero to their final values by multiplying them by a parameter $\lambda$ that goes from $0$ to $1$. By linearity, the displacements are then $\lambda d_i$. The incremental work is therefore $\lambda\sum_i Q_i d_i\,d\lambda$. Integration with respect to $\lambda$ gives the factor $\dfrac12$. The reactions at stationary supports do no work because the corresponding displacements are zero. Under quasistatic conditions the work equals the strain energy.
:::
::::


:::osservazione{titolo="Fixed supports and contributions to external work"}
Clapeyron’s formula includes only forces through their conjugate displacements. For example, a couple applied to an end restrained against rotation may change the local reaction. The rotation there is zero, so the couple does no work. If a support undergoes a prescribed movement, the reaction that holds it in position has a conjugate displacement and must be included in the work balance. The applied load and the work of the support reaction then make separate contributions.

Since the structure starts unloaded, work can be measured from the origin of the load–displacement curve. Initial stresses or an imposed temperature change may introduce an initial offset in the relation between the final mechanical loads and the total strain. The initial state and the portion of strain that contributes to the strain energy must then be specified.
:::

## Betti’s and Maxwell’s reciprocity theorems

::::teorema{#betti-maxwell titolo="Reciprocal work and reciprocity"}
Apply two load systems, identified by $(1)$ and $(2)$, separately to the same linear structure with the same supports. Let $Q_i^{(1)}$ be the force or couple from the first system at coordinate $i$, and $d_i^{(2)}$ the displacement produced there by the second system. By **Betti’s theorem**,

$$
\sum_i Q_i^{(1)}d_i^{(2)}
=\sum_i Q_i^{(2)}d_i^{(1)}.
$$

Applying unit loads separately at two coordinates yields **Maxwell’s reciprocity theorem**. The displacement of the first coordinate due to a unit load at the second equals the displacement of the second coordinate due to a unit load at the first. The equality is signed and requires conjugate load and displacement at each coordinate.

:::dimostrazione
When the two systems are superimposed, the total energy contains a cross term. The bending contribution to this term in each member is $\int\dfrac{M^{(1)}M^{(2)}}{EI}\,dx$. By virtual work, the first system acting through the displacements of the second gives this expression together with any axial contributions. Interchanging the systems leaves the product of the two bending moments unchanged. The same is true for the product of the axial forces. The two reciprocal works are therefore equal.
:::
::::

:::esempio{titolo="Interchanging load and displacement points on a tie"}
A bar is restrained axially at $A$, and sections $B$ and $C$ are at distances $a$ and $b$ from that support, respectively, with $a<b$. If a force $F$ acts at $C$, segment $AB$ carries axial force $F$ and elongates by $\dfrac{Fa}{EA}$. This is the displacement of $B$. If the same force acts at $B$, segment $BC$ carries zero axial force and translates with $B$. The displacement of $C$ is therefore also $\dfrac{Fa}{EA}$. The length that deforms in both reciprocal-work calculations is $a$.

::struttura{nodi="A,0,0;B,1,0;C,3,0" aste="A-B;B-C" vincoli="A,incastro,180" quote="A,B,a;A,C,b,1.35" titolo="Two sections where load and displacement are compared"}
:::

## Energy derivatives and auxiliary loads

::::teorema{#castigliano titolo="Castigliano’s theorem"}
For a stable, linearly elastic structure with fixed supports and no initial strains, express the strain energy $U$ in terms of the independent loads. Its derivative with respect to a force or couple $Q_i$ gives the conjugate displacement or rotation.

$$
d_i=\frac{\partial U}{\partial Q_i}.
$$

For bending, differentiating the energy under the integral sign gives

$$
d_i=\sum_e\int_0^{L_e}
\frac{M_e}{E_e I_e}\,\frac{\partial M_e}{\partial Q_i}\,dx.
$$

For a downward force, the derivative gives displacement measured positive downward. For a counterclockwise couple, it gives rotation measured positive counterclockwise. The positive direction is thus established before the moment diagrams are calculated.

:::dimostrazione
By Clapeyron’s theorem, $U=\dfrac12\sum_j Q_jd_j$. Since the displacements depend linearly on the loads, write $d_j=\sum_k f_{jk}Q_k$, where $f_{jk}$ is the flexibility coefficient. Differentiating the product gives one term equal to $\dfrac12 d_i$. The second term is $\dfrac12\sum_j Q_j f_{ji}$. By reciprocity, $f_{ji}=f_{ij}$, so the second term also equals $\dfrac12 d_i$. Their sum gives $d_i$.
:::
::::

:::esempio{#carico-ausiliario titolo="Deflection at a point with no applied point load"}
A cantilever carries a uniform downward load $q$. To find the tip deflection, add a downward auxiliary force $F$ at the tip. Measuring $x$ from the fixed end, the bending moment is

$$
M(x)=-\frac{q(L-x)^2}{2}-F(L-x).
$$

The derivative of $M$ with respect to $F$ is $-(L-x)$. Differentiate the energy first, then set $F=0$ because the actual structure carries only the uniform load. It follows that

$$
v_B=\int_0^L\frac{q(L-x)^3}{2EI}\,dx
=\frac{qL^4}{8EI}.
$$

The result is positive in the direction of the auxiliary force. Substituting $F=0$ before differentiating would remove the dependence of the energy on the load conjugate to the desired deflection.

::struttura{nodi="A,0,0;B,4,0" aste="A-B" vincoli="A,incastro,180" carichi="A,B,0.5,0.5,q" forze="B,0,-1.1,F" quote="A,B,L" titolo="Actual uniform load and an auxiliary tip force"}
:::

## Menabrea’s theorem and redundant forces

::::teorema{#menabrea titolo="Menabrea’s energy condition"}
Release redundant restraints in a linearly elastic structure to obtain a stable, statically determinate primary structure. Introduce the corresponding unknown reaction $X_i$ at each released coordinate. If the released restraints prescribed zero displacements, the actual reactions satisfy

$$
\frac{\partial U}{\partial X_i}=0.
$$

This is the compatibility condition in the direction of the reaction. If a displacement $\bar d_i$ is prescribed in that direction, the derivative must instead equal $\bar d_i$ with the sign of the released coordinate.

:::dimostrazione
On the primary structure the unknown reactions are independent applied loads. By Castigliano’s theorem, $\dfrac{\partial U}{\partial X_i}$ is the displacement at the coordinate where $X_i$ acts. The actual displacement must equal the value prescribed by the support. For supports without settlement, the stationary point is a minimum if distinct combinations of reactions produce independent deformation fields. In that case the quadratic part of the energy is positive for every nonzero combination of those reactions.
:::
::::

:::esempio{titolo="The support of a propped cantilever"}
A cantilever of span $L$ is propped at $B$ and carries a downward load $q$ over its full span. Remove the prop and apply an upward reaction $X$ at $B$. The bending moment is $M=X(L-x)-\dfrac{q(L-x)^2}{2}$. The displacement conjugate to $X$ is the upward displacement at $B$, which the prop requires to be zero. Therefore

$$
0=\frac{1}{EI}\left(X\frac{L^3}{3}-q\frac{L^4}{8}\right),
\qquad
X=\frac{3qL}{8}.
$$

The two terms represent two displacements. The first is due to the unknown reaction. The second is the deflection of the unpropped cantilever under the distributed load, with the opposite sign. Their sum must vanish, showing that the force method and differentiation of strain energy express the same compatibility condition.

::struttura{nodi="A,0,0;B,4,0" aste="A-B" vincoli="A,incastro,180;B,carrello" carichi="A,B,0.52,0.52,q" quote="A,B,L" titolo="Actual cantilever with a support at the tip"}

::struttura{nodi="A,0,0;B,4,0" aste="A-B" vincoli="A,incastro,180" carichi="A,B,0.52,0.52,q" reazioni="B,0,0.95,X" quote="A,B,L" titolo="Primary structure with the reaction introduced as an unknown"}
:::

## Stiffness at the ends of a beam

::::teorema{#rigidezza-rotazionale titolo="End moments due to end rotations"}
Let $AB$ be a prismatic beam with rigidity $EI$ and length $L$. With no distributed or concentrated loads between the ends, prescribe zero vertical end displacements and counterclockwise end rotations $\varphi_A$ and $\varphi_B$. The external couples $m_A$ and $m_B$ applied to the ends of the isolated member are both positive counterclockwise. They satisfy

$$
\begin{aligned}
m_A&=\frac{EI}{L}(4\varphi_A+2\varphi_B),\\[6pt]
m_B&=\frac{EI}{L}(2\varphi_A+4\varphi_B).
\end{aligned}
$$

The coefficient $\dfrac{4EI}{L}$ is the rotational stiffness of one end with the other end restrained. The coefficient $\dfrac{2EI}{L}$ gives the moment transmitted to the far end per unit of that same rotation.

:::dimostrazione
Without loads between the ends, equilibrium produces a linear curvature distribution, so $w(x)$ is a cubic polynomial. With $r=\dfrac{x}{L}$ as the dimensionless position, the cubic satisfying the prescribed end displacements and slopes is

$$
w(x)=L\big[\varphi_A(r-2r^2+r^3)+\varphi_B(-r^2+r^3)\big].
$$

The external end moments at the left and right ends have opposite sign conventions relative to the internal bending moment. Indeed, integration by parts of the variation of strain energy gives the boundary term $[EIw^{\prime\prime}\,\delta w^\prime]_0^L$. It follows that $m_A=-EIw^{\prime\prime}(0)$ and $m_B=EIw^{\prime\prime}(L)$. Substitution of the second derivative of the cubic gives the two relations.
:::
::::

:::esempio{titolo="Counterclockwise rotation at one end"}
If $\varphi_A=\varphi$ is prescribed and $\varphi_B$ is restrained, the two external couples are $\dfrac{4EI}{L}\varphi$ and $\dfrac{2EI}{L}\varphi$, respectively. The two couples have the same sign. A pair of opposing vertical end forces is needed to balance their combined moment. The signs of the external couples must be distinguished from those of the internal moment diagram just inside the ends.

:::

## Translations and hinges

:::definizione{#rotazione-corda titolo="Chord rotation"}
Let $w_A$ and $w_B$ denote the upward transverse end displacements. The **chord rotation** is $\psi=\dfrac{w_B-w_A}{L}$. For small displacements, this is the slope of the line joining the displaced ends.

To isolate bending, subtract the straight line $w_A+\psi x$ from the deflected shape. This line has zero curvature. The difference therefore retains the beam curvature and has zero displacement at both ends. Its end rotations are $\varphi_A-\psi$ and $\varphi_B-\psi$. Substitution into the stiffness relation gives

$$
\begin{aligned}
m_A&=\frac{EI}{L}(4\varphi_A+2\varphi_B-6\psi),\\[6pt]
m_B&=\frac{EI}{L}(2\varphi_A+4\varphi_B-6\psi).
\end{aligned}
$$

If both end rotations equal $\psi$, the beam undergoes an infinitesimal rigid-body motion and the deformation-induced couples vanish.
:::

:::esempio{#rigidezza-traslazionale titolo="Transverse translation with zero end rotations"}
Keep both rotations zero and prescribe an upward displacement $\Delta$ at $B$ while holding $A$ fixed. The two external couples are $-\dfrac{6EI\Delta}{L^2}$. Taking moments about $A$ gives the external transverse force at $B$.

$$
F_BL+m_A+m_B=0,
\qquad
F_B=\frac{12EI\Delta}{L^3}.
$$

The force points in the direction of the prescribed displacement. The ratio of the force to the displacement is the transverse stiffness with rotations restrained. For a frame, this calculation is applied in the local coordinates of each member.

::struttura{nodi="A,0,0;B,4,0,-" aste="A-B" vincoli="A,incastro,180;B,incastro,0" quote="A,B,L" frecce="4,0,4,0.85,Δ" tratteggi="0,0 1,0.12 2,0.43 3,0.74 4,0.85" etichette="4.17,-0.13,B" titolo="Prescribed displacement at B with rotations restrained"}
:::

:::esempio{#rigidezza-cerniera titolo="Stiffness with the far end pinned"}
Restrain the translations and allow end $B$ to rotate at a hinge. With no loads between the ends, the condition $m_B=0$ gives

$$
2\varphi_A+4\varphi_B=0,
\qquad
\varphi_B=-\frac{\varphi_A}{2}.
$$

Substitution in the first relation gives $m_A=\dfrac{3EI}{L}\varphi_A$. Allowing rotation at $B$ therefore reduces the rotational stiffness seen at $A$. The value $\dfrac{3EI}{L}$ applies to a prescribed rotation with translations restrained and no load between the ends. If the member is loaded between its ends, the load also contributes to the end moments.

::struttura{nodi="A,0,0;B,4,0" aste="A-B" vincoli="A,cerniera;B,carrello" quote="A,B,L" coppie="A,1,m_A" titolo="Prescribed rotation at A and zero external moment at B"}
:::

## Joint equilibrium and the displacement method

:::definizione{#metodo-spostamenti titolo="Unknown displacements and member end forces"}
In the **displacement method**, the unknowns are the rotations and translations of the free joints. Members meeting at a rigid joint share the displacement and rotation of that joint. Express the end forces of each member in terms of the unknown movements and then impose joint equilibrium.

For a member loaded between its ends, also calculate the external end forces and moments needed to keep both end translations and rotations zero. By superposition, these fixed-end actions are added to the contributions from the actual joint movements. The actions exerted by the members on the joint are opposite to the actions exerted by the joint on the individual members. Thus, the end couples required by all members meeting at the joint sum to the couple applied externally to that joint.
:::


:::esempio{titolo="Effect of loading on a span"}
A prismatic span of length $L$ carries a downward load $q$. To find the contributions of that load to the external end couples, restrain the four end degrees of freedom associated with bending. Under those conditions the deflected shape is

$$
w(x)=-\frac{q}{24EI}x^2(L-x)^2.
$$

The polynomial and its first derivative vanish at both ends. It also satisfies $EIw^{\prime\prime\prime\prime}=-q$, so it obeys the beam equation with a downward distributed force. The end curvatures give $m_A^{(0)}=\dfrac{qL^2}{12}$ and $m_B^{(0)}=-\dfrac{qL^2}{12}$. These moments enter the joint equilibrium equations together with the couples due to the actual rotations. Loads applied between joints may therefore cause joint rotation even when no couple is applied directly to the joint.
:::

:::esempio{#rigidezza-nodi titolo="An interior joint of a continuous beam"}
The far ends $A$ and $C$ of a two-span continuous beam are fixed. Intermediate support $B$ restrains vertical displacement, and the adjacent ends of the two spans rotate together. With no loads between joints and a couple $C_B$ applied at $B$, the external end moments required by the two members sum to $C_B$.

$$
\left(\frac{4EI_{AB}}{L_{AB}}
+\frac{4EI_{BC}}{L_{BC}}\right)\varphi_B=C_B.
$$

The member with greater rotational stiffness takes the greater share of the couple because both members experience the same rotation. Compare the ratios $\dfrac{EI_e}{L_e}$ since both flexural rigidity and length affect the response.

::struttura{nodi="A,0,0;B,3,0;C,6,0" aste="A-B;B-C" vincoli="A,incastro,180;B,carrello;C,incastro,0" quote="A,B,L_1;B,C,L_2" coppie="B,1,C_B" titolo="Continuous beam with one unknown rotation"}
:::

:::esempio{titolo="Sidesway of a portal frame with a rigid crossbeam"}
Consider a portal frame with two identical columns of height $H$, fixed at the base. The crossbeam is rigid in its plane, and the columns are assumed axially inextensible. The vertical displacements at the top are therefore zero. Because the crossbeam is rigid, both top joints translate horizontally by the same amount $\Delta$ and have zero rotation. Each column therefore has transverse stiffness $\dfrac{12EI}{H^3}$.

Under a total horizontal force $Q$, the two transverse forces at the top must sum to $Q$. It follows that $\Delta=\dfrac{QH^3}{24EI}$. If the column rigidities differ, evaluate their stiffness coefficients separately, then add them. If the crossbeam has finite flexural rigidity, include the top joint rotations among the unknowns and impose moment equilibrium at both joints.

::struttura{nodi="A,0,0;B,0,3;C,4,3;D,4,0" aste="A-B;B-C;C-D" vincoli="A,incastro;D,incastro" forze="C,0.9,0,Q" quote="A,B,H,-0.85" titolo="Portal frame with two identical columns and a horizontal load at the top"}
:::


## Checking the system equations

:::osservazione{titolo="System stiffness and work through prescribed displacements"}
The assembled joint equations can be written in the form $K\mathbf d=\mathbf f$. The vector $\mathbf d$ contains the free displacement coordinates, and $\mathbf f$ contains the equivalent forces and couples at these coordinates after all known contributions have been moved to the right-hand side. The matrix $K$ is assembled at each joint by adding the contributions from the connected members. For a translational coordinate, the diagonal entry is the force required to impose unit translation with all other coordinates restrained. For a rotational coordinate, it is the couple required for a unit rotation.

The value of a prescribed coordinate contributes to the equations for the other coordinates through the stiffness coefficients. This contribution is moved to the right-hand side of the free-coordinate equations. After the displacements are found, the equation at the prescribed coordinate gives the force or couple required to maintain that displacement. For a settling support, this procedure gives the settlement-induced reactions even in the absence of other loads.
:::

:::osservazione{titolo="Checking compatibility and equilibrium"}
At a rigid joint the deflected shapes of all connected members must give the same joint rotation. Check compatibility by inspecting the displacements actually assigned to each member end. Then check equilibrium by adding the external joint load to all member actions on the joint. The reactions can also be checked against overall equilibrium because the interaction forces and couples between members cancel in pairs.

Units distinguish stiffness coefficients multiplying translations from those multiplying rotations. For example, $\dfrac{12EI}{L^3}$ has units of $\mathrm{kN/m}$ and gives a force when multiplied by a displacement in meters. The coefficient $\dfrac{4EI}{L}$ has units of $\mathrm{kN\,m}$ per radian and gives a couple when multiplied by a rotation. If prescribed displacements are in millimeters and stiffnesses are based on meters, convert the displacements before multiplying. This avoids assigning a member a force one thousand times greater than the force corresponding to its actual displacement.
:::
