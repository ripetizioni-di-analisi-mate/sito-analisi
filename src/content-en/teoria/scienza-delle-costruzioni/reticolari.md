---
titolo: "Plane trusses"
sommario: "Identify the assumptions of the truss model and determine member forces and deformations using equilibrium of joints and sections."
---

## From the structure to pin-connected members

:::definizione{#aste-due-forze titolo="Two-force members"}
An **ideal plane truss** consists of straight members connected at their ends by pins. The axes of the members meeting at a joint pass through a single point, where the loads and reactions are also applied. Member weights are neglected or, as an explicit modeling approximation, replaced by equivalent joint loads. A pin allows connected members to rotate relative to one another, so it transmits force without transmitting a couple.

Isolate a member $AB$ subjected only to forces at its ends. The moment of the force at $A$ about $A$ is zero. Equilibrium requires the force at $B$ also to have zero moment about that point, so its line of action passes through $A$. The two forces therefore act along $AB$ and must be equal and opposite for translational equilibrium. A member loaded in this way is a **two-force member**.

A cut through an interior cross section exposes an axial force $N_{AB}$ that is constant along the member because no other loads act between its ends. The shear force and bending moment are zero. The sign $N_{AB}>0$ indicates tension. In this case the member pulls both joints inward toward its center. With $N_{AB}<0$ the member is in compression and pushes its joints outward.
:::

:::esempio{titolo="Triangulating a bridge deck"}
In a span modeled with horizontal, vertical, and diagonal members, the **upper chord** can be distinguished from the lower chord. The upright members are called verticals. A floor beam can deliver its share of the deck load to the joint where a chord and diagonal meet. The model then receives the load at a joint, allowing each member to be analyzed in terms of its axial force. The distance between chords is the depth of the truss. In the method of sections it provides the moment arm between two horizontal forces.

::struttura{nodi="A,0,0;B,4,0;C,8,0;D,0,3;E,4,3;F,8,3" aste="A-B;B-C;A-D;B-E;C-F;D-E;E-F;D-B;E-C" vincoli="A,cerniera;C,carrello" reticolare=1 forze="B,0,-1.1,P_B;C,0,-1.1,P_C" quote="A,B,4 m;B,C,4 m;8.55 3,8.55 0,3 m,-0.55" titolo="Two-panel span with forces applied at the lower joints"}
:::

:::attenzione{titolo="A force applied between joints"}
A vertical force applied midway along a horizontal chord acts directly on the member. If the chord segment is treated as a pin-ended beam, a central force of magnitude $P$ produces a midspan moment of magnitude $\dfrac{PL}{4}$, where $L$ is the span. A model with axial forces only does not capture this local bending. A truss model can still represent the overall load path if members carrying transverse loads between joints are analyzed separately for their local response.
:::

:::esempio{titolo="Joints and chords of a railway bridge"}
The photograph of the bridge over the Gauley River shows the chords along the upper and lower edges of the side truss. The verticals and diagonals meet at the joints. For the overall analysis, the deck loads are transferred to the joints and each member is represented by its axis.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/ponte-reticolare.webp" alt="Side view of a steel truss bridge showing its chords, verticals, and diagonals" width="1280" height="960" loading="lazy" decoding="async"><figcaption>Joints and chords of a railway bridge. Resized photograph by <a href="https://commons.wikimedia.org/wiki/File:Railroad_Bridge-27527.jpg">Ken Thomas</a>, <a href="https://creativecommons.org/publicdomain/mark/1.0/">public domain</a>.</figcaption></figure>
:::

## Stability, supports, and the member count

:::osservazione{#stabilita-reticolare titolo="Number of members and arrangement of joints"}
Let $j$ be the number of joints, $m$ the number of members, and $r$ the number of scalar reaction components. Each joint gives two equations because concurrent forces in the plane have two components. Each member introduces one unknown axial force, so the equilibrium system has $2j$ rows and $m+r$ columns.

A statically determinate truss requires $m+r=2j$ and a full set of independent equations. The first check is a count. The second depends on the actual geometry. If the counts agree, the equilibrium matrix is square and gives a unique solution for every joint loading provided its rank is $2j$. A singular matrix admits a nonzero combination of internal forces and reactions in equilibrium with zero applied load. Some joint loads then lie outside the range of the matrix and cannot be balanced by the actions allowed in the model.
:::

:::esempio{titolo="Panels with and without a diagonal"}
Consider a rectangle formed by pin-connected members, with a pin at $A$ and a roller at $B$ on a horizontal surface, so its reaction is vertical. The bottom member $AB$ stays stationary. The two verticals can rotate together without changing length while the upper member translates parallel to the lower member. The rectangle can therefore become a parallelogram. For this structure $j=4$, $m=4$, and $r=3$, so $m+r=7<8=2j$.

::struttura{nodi="A,0,0;B,4,0;C,4,3;D,0,3" aste="A-B;B-C;C-D;D-A" vincoli="A,cerniera;B,carrello" reticolare=1 tratteggi="0,0 0.9,2.862 4.9,2.862 4,0" titolo="The pin-jointed quadrilateral can deform into a parallelogram"}

Adding a diagonal between $A$ and $C$ also fixes the distance $AC$. The triangles $ABC$ and $ACD$ now have prescribed side lengths. Both are rigid provided each has three distinct, noncollinear vertices. The triangulated panel thus has $m=5$ and satisfies $m+r=8$. The three reaction components restrain the three planar rigid-body motions: the pin fixes $A$ and the vertical reaction at $B$ has a moment arm $AB$ about $A$.

::struttura{nodi="A,0,0;B,4,0;C,4,3;D,0,3" aste="A-B;B-C;C-D;D-A;A-C" vincoli="A,cerniera;B,carrello" reticolare=1 titolo="The shared diagonal divides the panel into two triangles"}
:::

:::esempio{titolo="A roller support with an ineffective reaction direction"}
Keep the five members of the triangulated panel but place the roller at $B$ against a vertical guide. Its reaction at $B$ is therefore horizontal. Its line of action coincides with $AB$ and passes through the pin at $A$. All reactions have zero moment about $A$. A horizontal force at the upper joint, however, has a moment arm equal to the panel height. Balancing that load requires an opposing external moment that the specified reactions cannot provide. The count is still correct, but the matrix is singular. Kinematically, a small rotation about $A$ moves $B$ vertically, which is precisely the direction the guide leaves free.
:::

## Equilibrium and admissible displacements

:::definizione{#compatibilita-reticolare titolo="Member elongation compatible with joint displacements"}
Let $\mathbf u_A$ and $\mathbf u_B$ be the displacements of the two joints of member $AB$. For infinitesimal displacements, elongation is the projection of $\mathbf u_B-\mathbf u_A$ onto the unit vector $\mathbf e_{AB}$ of the undeformed member. Thus,
$$
\delta L_{AB}=(\mathbf u_B-\mathbf u_A)\cdot \mathbf e_{AB}.
$$
To derive this expression, write the length of the displaced segment as the norm of $L_{AB}\mathbf e_{AB}+\mathbf u_B-\mathbf u_A$. The linear term in the expansion of this norm is the stated projection. Because only the linear term is retained, the expression describes infinitesimal motion. For a finite displacement, compute the new distance between the joints directly.

If every projection vanishes and the joint displacements satisfy the supports, a nonzero displacement vector describes an infinitesimal mechanism. For example, joint $B$ may lie between fixed joints $A$ and $C$ on the same horizontal line. An infinitesimal vertical displacement of $B$ has zero projection along either member. The lengths change only to second order in the displacement. A vertical bar joining $B$ to a stationary joint would change length to first order and would prevent this mechanism in a model with inextensible members.
:::

:::osservazione{titolo="Member directions in the equilibrium equations"}
The equilibrium matrix column for $AB$ contains $\mathbf e_{AB}$ in the rows for $A$ and $-\mathbf e_{AB}$ in the rows for $B$. Its dot product with the vector of all joint displacements is therefore $-\delta L_{AB}$. For a roller reaction, the column has just one pair of nonzero components, given by the unit vector in the reaction direction. Its dot product with the displacements gives the displacement in the restrained direction. If $Q$ is the equilibrium matrix, the condition $Q^{\mathsf T}\mathbf u=\mathbf 0$ collects all compatibility conditions for inextensible members and stationary supports. The transpose thus connects the static and kinematic descriptions of the same geometry.

If the rank of $Q$ is $\rho$, there are $m+r-\rho$ independent combinations of member forces and reactions that can equilibrate without external loads. The number of independent infinitesimal mechanisms is $2j-\rho$. Both counts can be positive. For the triangulated panel with its roller against a vertical guide, equal and opposite horizontal reactions can be balanced by an axial force in the lower member even with no applied loads. The same geometry admits an infinitesimal rotation about the pin. There is therefore both a redundant internal force and a free motion even though $m+r=2j$.
:::

## Support reactions and the method of joints

::::teorema{#metodo-dei-nodi titolo="The method of joints"}
Consider an ideal plane truss in equilibrium. For joint $A$, let $\mathbf F_A$ be the resultant of loads and reactions applied directly at $A$. For each member $AB$, let $L_{AB}$ be its length and $\mathbf e_{AB}$ the unit vector from $A$ to $B$. The member exerts the force $N_{AB}\mathbf e_{AB}$ on joint $A$. The components follow from the joint coordinates, giving
$$
L_{AB}=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2},\qquad
\mathbf e_{AB}=\frac{(x_B-x_A,\ y_B-y_A)}{L_{AB}}.
$$
At joint $A$ the equations are
$$
\begin{cases}
\displaystyle \sum_B N_{AB} e_{AB,x}+F_{A,x}=0,\\[6pt]
\displaystyle \sum_B N_{AB} e_{AB,y}+F_{A,y}=0.
\end{cases}
$$

:::dimostrazione
Isolate the joint and replace each member by the force it exerts along its axis. All lines of action pass through the joint, so every force has zero moment about it. The two force equilibrium equations remain, obtained by projecting the sum of forces onto axes $x$ and $y$. At joint $B$ the same member has the opposite unit vector because $\mathbf e_{BA}=-\mathbf e_{AB}$. The scalar force $N_{AB}$ nevertheless has the same value at both joints, since its sign describes the state of the entire member.
:::
::::

:::osservazione{titolo="Choosing the order of solution"}
First isolate the complete truss to determine the external reactions. Internal forces occur in equal, opposite, collinear pairs and therefore cancel in both force and moment equilibrium. With a pin at $A$ and a vertical roller reaction at $B$, taking moments about $A$ leaves the roller reaction as the only unknown provided its moment arm is nonzero. Force equilibrium then gives the horizontal and vertical pin reactions.

Once the reactions are known, look for a joint with at most two unknown member forces. If two forces are unknown, their member directions must be independent. If the members are parallel, the two columns of unit-vector components are proportional and joint equilibrium yields at most one independent scalar condition on the two unknowns. Then move to an adjacent joint, where the newly determined member force is known. Some trusses require the equilibrium equations of several joints to be solved simultaneously. The local count identifies a short solution sequence when one exists; the complete system can still be solved if it does not.
:::

:::esempio{titolo="An upper joint with two diagonal members"}
In a triangular truss of span $6\,\mathrm m$ and height $4\,\mathrm m$, the upper joint $C$ has horizontal coordinate $3\,\mathrm m$. Apply a vertical load of $40\,\mathrm{kN}$ at $C$. The load has half the moment arm about $A$ of the reaction at $B$, so both vertical reactions equal $20\,\mathrm{kN}$. The outward unit vectors from $C$ are $\left(-\dfrac35,-\dfrac45\right)$ toward $A$ and $\left(\dfrac35,-\dfrac45\right)$ toward $B$.

::struttura{nodi="A,0,0;B,6,0;C,3,4" aste="A-B;A-C;B-C" vincoli="A,cerniera;B,carrello" reticolare=1 forze="C,0,-1.25,40 kN" quote="A,3 0,3 m;3 0,B,3 m;6.5 4,6.5 0,4 m,-0.55" titolo="Geometry and load of an isosceles triangular truss loaded at the apex"}

Horizontal equilibrium requires $N_{AC}=N_{BC}$. Vertical equilibrium requires $-\dfrac45(N_{AC}+N_{BC})-40\,\mathrm{kN}=0$. It follows that $N_{AC}=N_{BC}=-25\,\mathrm{kN}$. At joint $A$ the compressed diagonal exerts a force with horizontal component $-15\,\mathrm{kN}$. Because the horizontal reaction is zero, equilibrium requires $N_{AB}=15\,\mathrm{kN}$. The lower chord therefore pulls joint $A$ to the right.

::struttura{nodi="C,0,0,-" reticolare=1 forze="C,0,-1.4,P" etichette="0.16,0.12,C" frecce="0,0,-1.8,-2.4,N_AC;0,0,1.8,-2.4,N_BC" titolo="The unit vectors of the two axial forces initially point away from the joint"}
:::

## Zero-force members and load transfer

::::teorema{#aste-scariche titolo="Identifying zero-force members"}
If an unloaded joint with no reaction connects two noncollinear members, both have zero axial force. If three members meet at a joint with no external force and two are collinear, the third carries zero force provided it points in a different direction.

:::dimostrazione
In the first case, a linear combination of vectors in two independent directions can vanish only when both coefficients are zero. In the second case, project forces onto a normal to the two collinear members. The projections from both collinear members vanish. The third member’s unit vector has a nonzero projection, so its coefficient must be zero. Identifying a zero-force member reduces the number of unknowns at neighboring joints.
:::
::::

:::esempio{titolo="The vertical member in a roof truss"}
The figure shows horizontal chord members $AB$ and $BC$ and the vertical member $BD$. At the unloaded lower joint $B$, vertical equilibrium gives $N_{BD}=0$ because the other two members are horizontal. If a downward force of magnitude $P$ is suspended from joint $B$ instead, the equation becomes $N_{BD}-P=0$. The vertical member is then in tension and transfers the load to joint $D$. The geometry is identical in both models; the result changes because the loading vector changes.

::struttura{nodi="A,0,0;B,4,0;C,8,0;D,4,3" aste="A-B;B-C;A-D;B-D;C-D" vincoli="A,cerniera;C,carrello" reticolare=1 forze="D,0,-1.1,P_D" quote="A,B,4 m;B,C,4 m" titolo="Vertical member $BD$ carries zero force for this load case alone"}

A zero-force member for a particular load case is still part of the structure’s geometry. For the roof truss, removing the vertical member allows the two collinear members $AB$ and $BC$ to accommodate an infinitesimal vertical displacement of joint $B$. In an equilibrium analysis one can set $N_{BD}=0$ for the specified load case. In a stability analysis the vertical member matters because it prevents that motion.
:::

## Ritter sections and the choice of moment center

::::teorema{#metodo-delle-sezioni titolo="Ritter’s method of sections"}
Choose a section that cuts several members and separates the truss into two parts. On the isolated part, each cut member exerts an axial force along its own line of action. If the lines of action of two unknown forces intersect at $O$, taking moments about $O$ eliminates both unknowns. A third unknown can be found directly if its line of action has a nonzero moment arm about $O$. If the two lines to be eliminated are parallel, project the forces perpendicular to their common direction instead.

:::dimostrazione
Add the equilibrium equations for all joints on one side of the cut. Member forces internal to that part cancel in pairs because they are equal, opposite, and collinear. The remaining forces are the external loads and reactions on that part and the forces in the members crossing the cut. A force has zero moment about any point on its line of action, so taking moments about $O$ eliminates the first two unknowns. The coefficient of the third unknown is its signed moment arm. Alternatively, if two lines are parallel, projection onto their common normal removes both forces and gives the third if its normal component is nonzero.
:::
::::

:::esempio{titolo="Cutting three members in the same panel"}
The section shown cuts the lower chord $AB$, diagonal $DB$, and upper chord $DE$. The lines of action of $AB$ and $DB$ pass through $B$. Moment equilibrium about $B$ therefore gives the force in $DE$ directly, with moment arm $3\,\mathrm m$. Since both chords are horizontal, vertical equilibrium gives the diagonal force. Once its horizontal component is known, horizontal equilibrium also gives the lower chord force. The method of joints is needed only if forces in additional members are required.

::struttura{nodi="A,0,0;B,4,0;C,8,0;D,0,3;E,4,3;F,8,3" aste="A-B;B-C;A-D;B-E;C-F;D-E;E-F;D-B;E-C" vincoli="A,cerniera;C,carrello" reticolare=1 forze="E,0,-1.0,P_E;F,0,-1.0,P_F" tratteggi="2,-0.8 2,3.9" etichette="2.2,4,s" quote="A,B,4 m;B,C,4 m;8.55 3,8.55 0,3 m,-0.55" titolo="Section cut through two chords and one diagonal"}

With $P_E=12\,\mathrm{kN}$ and $P_F=18\,\mathrm{kN}$, the result is $V_A=6\,\mathrm{kN}$. Isolate the left-hand part and assume the forces in the cut members point to the right along their respective lines of action. The moment of $V_A$ about $B$ is clockwise and equals $-4V_A$ in the indicated units. The moment of the horizontal force $N_{DE}$ is $-3N_{DE}$. Hence $N_{DE}=-8\,\mathrm{kN}$. The vertical component of the outward diagonal force is $-\dfrac35 N_{DB}$, giving $6-\dfrac35N_{DB}=0$ and $N_{DB}=10\,\mathrm{kN}$. The horizontal component of the diagonal force is $8\,\mathrm{kN}$ and balances the force in the upper chord. The lower chord $AB$ carries zero force.

::struttura{nodi="A,0,0;D,0,3;B,4,0;U,2,0,-;V,2,1.5,-;W,2,3,-" aste="A-D;A-U;D-V;D-W" reazioni="A,0,0.85,V_A" frecce="2,0,3.05,0,N_AB;2,1.5,3.05,0.7125,N_DB;2,3,3.05,3,N_DE" tratteggi="2,-0.65 2,3.75;3.05,0.7125 4,0" punti="4,0,O,centro" titolo="Left-hand free body with the cut-member forces and moment center $O=B$"}
:::

## Checking the calculated member forces

:::osservazione{titolo="An independent free-body check"}
Substituting an unknown back into the equation used to find it automatically satisfies that equation. To check the sign or the unit-vector direction, isolate a different free body. For the triangular truss analyzed by the method of joints, joint $C$ gave the diagonal forces and horizontal equilibrium at $A$ gave the chord force. Joint $B$ provides a direct check. The unit vector of diagonal $BC$ is $\left(-\dfrac35,\dfrac45\right)$ from $B$ toward $C$. Thus,
$$
\begin{cases}
-15-\dfrac35(-25)=0,\\[6pt]
20+\dfrac45(-25)=0,
\end{cases}
$$
where forces are expressed in $\mathrm{kN}$. The first equation checks horizontal equilibrium of the chord and diagonal forces. The second checks the direction of the diagonal’s vertical component against the roller reaction.

For a section calculation, a similar check uses an end joint of a cut member or the part on the opposite side of the cut. On the opposite side, the axial forces retain their calculated scalar signs, but the unit vectors reverse direction. Reversing the scalar sign as well would give the same force vector on both halves and violate action and reaction. Keeping the signed scalar force distinct from its unit vector avoids this error.
:::

:::esempio{titolo="When symmetry provides a check"}
With a pin on the left, a vertical roller reaction on the right, and only vertical applied loads, the horizontal reaction is zero. In a geometrically symmetric truss under symmetric vertical loading, the vertical reactions match and corresponding members carry equal forces if the solution is unique. This gives a check because reflecting the force system produces another solution consistent with the same support reactions. For a horizontal load applied above the supports, however, the height of the load enters the moment balance. Even if the loaded joint lies at midspan, the two vertical reactions will generally differ.
:::

## Stresses and changes in length

:::osservazione{#variazione-lunghezza titolo="From axial force to axial deformation"}
Once the axial force is known, the change in member length can be calculated. Let $A$ be its cross-sectional area, $L$ its original length, and $E$ Young’s modulus. In a prismatic member under pure axial loading, the average normal stress is $\sigma=\dfrac NA$. For small strains in a linearly elastic material, the longitudinal strain is $\varepsilon=\dfrac{\sigma}{E}$. If these quantities remain constant along the member, integrating strain over its length gives $\varepsilon L$. Thus,
$$
\Delta L=\frac{NL}{EA}.
$$
The product $EA$ is the axial rigidity and has the dimensions of force. The change in length is positive in tension and negative in compression. The formula gives the change in distance between the two joints measured along the original member direction. Finding the vertical displacement of a joint also requires relating that change to the directions of the other members and the movements permitted by the supports.

::struttura{nodi="A,0,0,-;B,6,0,-" aste="A-B" frecce="0,0,-1.2,0,N;6,0,7.2,0,N" etichette="0,0.38,A;6,0.38,B" quote="A,B,L" titolo="Isolated member in tension with opposing forces at its ends"}
:::

:::esempio{titolo="A tie and a strut"}
If the lower chord of a triangular truss has $L=6\,\mathrm m$, $N=24\,\mathrm{kN}$, and $EA=36\,000\,\mathrm{kN}$, its change in length is
$$
\Delta L=\frac{24\cdot 6}{36\,000}\,\mathrm m
=0.004\,\mathrm m=4\,\mathrm{mm}.
$$
With $N=-15\,\mathrm{kN}$, $L=2\,\mathrm m$, and $EA=30\,000\,\mathrm{kN}$, the result is instead $\Delta L=-1\,\mathrm{mm}$. The first value represents the elongation of a tie. The second represents the elastic shortening of a strut. For a slender strut, the chapter on elastic stability examines the load at which lateral deflection can develop. The axial length change calculated here refers to the straight configuration.
:::
