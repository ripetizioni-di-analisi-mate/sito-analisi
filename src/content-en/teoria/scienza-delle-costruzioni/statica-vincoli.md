---
titolo: "Supports and equilibrium of planar structures"
sommario: "Use free-body diagrams and support conditions to calculate reactions in beams and frames and distinguish unstable, statically determinate, and statically indeterminate structures."
---

## From the physical structure to a planar model

:::definizione{#corpo-rigido titolo="Rigid bodies and degrees of freedom"}
In calculating the reactions of a statically determinate structure, its initial geometry can be represented by rigid bodies. A **rigid body** preserves the distance between every pair of points. In a plane, the two coordinates of a point $O$ and the angle of a material line segment through $O$ describe its configuration. These three quantities are the body's degrees of freedom. A restraint adds a condition that an admissible configuration must satisfy.

A planar model applies when the geometry and the loads under study can be represented in the same plane. The $x$ axis points right, the $y$ axis up, and the $z$ axis out of the page. An inclined force is represented by its components $F_x$ and $F_y$. A couple is positive if it tends to rotate the body counterclockwise. Distances are measured in meters, forces in kilonewtons, and moments in kilonewton-meters.
:::

:::definizione{#momento-forza-piana titolo="Moment of a force about a point"}
The **moment** of a force about point $O$ measures its turning effect about that point. Let $P$ be the point of application, and let $(x_P,y_P)$ and $(x_O,y_O)$ be the coordinates of the two points. The $z$ component of the cross product is
$$
M_O(F)=(x_P-x_O)F_y-(y_P-y_O)F_x.
$$
A downward force acting to the right of $O$ has a negative moment because it tends to turn the body clockwise. For a horizontal force applied above or below the reference point, the moment arm equals the difference in height. The formula still holds if $P$ moves along the line of action because the additional displacement is parallel to the force and contributes nothing to the cross product.

::struttura{nodi="O,0,0;P,4,2" tratteggi="0,0 4,0 4,2" forze="P,1.4,-0.7,F" quote="0 0,4 0,4 m;4 0,4 2,2 m,0.65" titolo="Coordinates of the point of application relative to O"}
:::

:::esempio{titolo="A force applied above the reference point"}
A force with components $F_x=6\,\mathrm{kN}$ and $F_y=-3\,\mathrm{kN}$ acts at $P=(4,2)$, whose coordinates are in meters. The vertical component contributes $4\cdot(-3)=-12\,\mathrm{kN\,m}$ to the moment about the origin. The horizontal component contributes $-2\cdot6=-12\,\mathrm{kN\,m}$. The total moment is therefore $-24\,\mathrm{kN\,m}$, clockwise. If moments are taken about $P$, both components have zero moment arm, and the moment vanishes.
:::

:::esempio{titolo="Transferring a force and adding an equivalent couple"}
A downward force of $10\,\mathrm{kN}$ acts $3\,\mathrm{m}$ to the right of $O$. The system has a downward resultant of $10\,\mathrm{kN}$ and a moment about $O$ equal to $-30\,\mathrm{kN\,m}$. If the force is applied at $O$, the resultant is unchanged, but the moment of the force about $O$ vanishes. Equivalence therefore requires an additional clockwise couple of $30\,\mathrm{kN\,m}$.

This transfer is useful when a load acts through a projecting bracket. The bracket geometry determines the moment arm relative to the beam axis. On the free-body diagram of the beam, the force can be placed on the axis together with the corresponding couple. The transferred force and the couple together reproduce the original loading. The result can be checked about any point other than $O$, since the two systems have both the same resultant and the same moment about $O$.
:::

:::esempio{titolo="Roller bearing of a bridge"}
The rollers permit displacement in the rolling direction. The pin permits relative rotation. A planar model of an ideal roller support includes a reaction normal to the guide. The photograph shows the physical basis for this idealization.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/appoggio-rulli.webp" alt="Steel bearing with parallel rollers beneath a hinge pin" width="1280" height="960" loading="lazy" decoding="async"><figcaption>Roller bearing of a bridge. Resized photograph by <a href="https://commons.wikimedia.org/wiki/File:BridgeBearing.jpg">Douglas W. Jones</a>, <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0</a>.</figcaption></figure>
:::

## External supports and free bodies

:::definizione{#vincoli-piani titolo="Roller, pin, and fixed supports"}
An **ideal support** exerts a reaction associated with the motion it restrains. A roller on a smooth plane prevents translation normal to the plane. Its reaction therefore introduces a single scalar unknown. On a horizontal plane the reaction is vertical. On an inclined plane its horizontal and vertical components are projections of the same force, so there is still only one unknown.

A pin support restrains its point in both directions but allows the body to rotate about it. For a pin at $A$, introduce the components $H_A$ and $V_A$. A fixed support restrains both coordinates of the point and the orientation of the attached cross section. It therefore supplies a reaction couple $M_A$ in addition to the two force components.
:::

:::esempio{titolo="From the supported structure to the free body"}
The beam in the figure has a pin support on the left and a roller on a horizontal surface on the right. In the **free-body diagram**, the supports are replaced by their reactions. The unknown force components are drawn along the coordinate axes. The sign obtained in the calculation indicates whether the actual direction agrees with the arrow.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="2 0,0,-1.1,P" quote="A,2 0,2 m;2 0,B,4 m" titolo="Supported beam with a point load"}

::struttura{nodi="A,0,0;B,6,0" aste="A-B" forze="2 0,0,-1.1,P" reazioni="A,0,1,V_A;A,0.9,0,H_A;B,0,1,V_B" titolo="Free body with three unknown reactions"}

A diagram of the entire system shows its external loads. When a part is isolated, its diagram also includes the forces and moments transmitted by the other parts through their connections. The choice of free body therefore determines which forces enter the equations.
:::

:::osservazione{titolo="Normal to an inclined roller support"}
Let $\boldsymbol{n}=(n_x,n_y)$ be the chosen unit normal to the sliding plane. The roller reaction at $B$ is $R_B\boldsymbol{n}$. If $\boldsymbol{n}=\left(-\dfrac{3}{5},\dfrac{4}{5}\right)$, its two components are $-\dfrac{3}{5} R_B$ and $\dfrac{4}{5} R_B$. The sign of $R_B$ determines the sense along the normal. Substitute the two projections before writing the equations so that the number of unknowns matches the number of restraints.
:::

## Equilibrium equations and the choice of moment center

::::teorema{#equilibrio-piano titolo="Equilibrium equations in the plane"}
A planar rigid body is in static equilibrium if the resultant of the applied forces is zero and the resultant moment about a point $O$ is zero. The resultant moment includes the moments of the forces and any directly applied couples. The conditions are
$$
\begin{cases}
\sum F_x=0,\\[4pt]
\sum F_y=0,\\[4pt]
\sum M_O=0.
\end{cases}
$$

:::dimostrazione
Express a virtual rigid-body displacement in terms of two independent translations and an independent infinitesimal rotation. If $\delta u_O$ and $\delta v_O$ are translations of the reference point and $\delta\varphi$ is the counterclockwise rotation, the displacement of a force's point of application is
$$
\delta x_P=\delta u_O-(y_P-y_O)\delta\varphi,\qquad
\delta y_P=\delta v_O+(x_P-x_O)\delta\varphi.
$$
The work done by the force is $F_x\delta x_P+F_y\delta y_P$. Including the work done by couples gives
$$
\delta L=\left(\sum F_x\right)\delta u_O+
\left(\sum F_y\right)\delta v_O+
\left(\sum M_O\right)\delta\varphi.
$$
Once supports have been replaced by their reactions, the free body is in equilibrium when this work vanishes for every virtual rigid-body motion. The three variations are independent. The work therefore vanishes for every choice if and only if all three coefficients are zero.
:::
::::

:::esempio{titolo="A force applied away from midspan"}
The beam of length $6\,\mathrm{m}$ in the free-body diagram carries $P=18\,\mathrm{kN}$ at a distance $2\,\mathrm{m}$ from $A$. Taking moments about $A$ gives both pin reactions zero moment arm. This leaves $6V_B-2\cdot18=0$, so $V_B=6\,\mathrm{kN}$. Vertical equilibrium gives $V_A=18-6=12\,\mathrm{kN}$. The applied force is vertical and the roller lies on a horizontal plane, so $H_A=0$.

The force is closer to $A$ than to $B$. Its moment arm about $B$ is therefore greater, giving a larger reaction at $A$. Taking moments about $B$ gives the balance $-6\cdot12+4\cdot18=0$, in kilonewton-meters.
:::

:::osservazione{titolo="Forces, couples, and a change of moment center"}
The moment of a couple is independent of the reference point because the two forces forming it have zero resultant. For a system with resultant $\boldsymbol R$, changing the reference point from $O$ to $B$ gives
$$
M_B=M_O-(x_B-x_O)R_y+(y_B-y_O)R_x.
$$
Thus if $\boldsymbol R=\boldsymbol 0$, the moments about the two points agree. Choosing a suitable point can simplify the calculation of reactions. Taking moments about a second point also checks the moment arms and signs used in the original calculation.
:::

## Distributed loads and equivalent resultants

::::teorema{#risultante-carichi titolo="Resultant and point of application"}
Let $q(x)\geq0$ denote the intensity of a downward vertical load in kilonewtons per meter. On the interval from $a$ to $b$, assume that $q$ is integrable and that its resultant has positive magnitude. With respect to the origin, the load is equivalent to a downward force of magnitude $Q$ acting at coordinate $x_Q$, where
$$
Q=\int_a^b q(x)\,\mathrm{d}x,\qquad
x_Q=\frac{\int_a^b xq(x)\,\mathrm{d}x}{Q}.
$$

:::dimostrazione
Consider the resultant force and the moment about the origin. An element of length $\mathrm{d}x$ contributes a vertical force of magnitude $q(x)\,\mathrm{d}x$ and a moment $-xq(x)\,\mathrm{d}x$. Integrating sums these contributions, so the total moment is $-\int_a^b xq(x)\,\mathrm{d}x$. A point load of magnitude $Q$ has moment $-Qx_Q$. Equating the moments gives the formula. The change-of-reference-point relation guarantees equivalence about other points as well.
:::
::::

:::esempio{titolo="A rectangle and a triangle over the same interval"}
The load intensity increases linearly from $2\,\mathrm{kN/m}$ to $8\,\mathrm{kN/m}$ over a length of $6\,\mathrm{m}$. Measure $x$ from the beginning of the loaded interval. The diagram is the sum of a rectangle of height $2\,\mathrm{kN/m}$ and a triangle of height $6\,\mathrm{kN/m}$. The first contributes $12\,\mathrm{kN}$ at $3\,\mathrm{m}$. The second contributes $18\,\mathrm{kN}$ at $4\,\mathrm{m}$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" carichi="A,B,0.35,1.4,q" quote="A,B,6 m" titolo="Trapezoidal load increasing from 2 to 8 kN/m"}

The total resultant is $30\,\mathrm{kN}$. Its moment about the origin must equal the sum of the two moments, so
$$
x_Q=\frac{12\cdot3+18\cdot4}{30}\,\mathrm{m}
=\frac{18}{5}\,\mathrm{m}=3.6\,\mathrm{m}.
$$
The point of application lies to the right of the midpoint because the load is more intense on the right. This resultant can be used for overall equilibrium. To find internal forces and moments at a section, include only the loading on the isolated portion.
:::

:::osservazione{titolo="Direction of increasing load and moment arm of a triangular distribution"}
For a load increasing from zero to $q_{\max}$ over a length $\ell$, measure $x$ from the zero-intensity end. Then $q(x)=\dfrac{q_{\max}}{\ell}x$. The resultant is $\dfrac{q_{\max}\ell}{2}$, while the first moment of the load is
$$
\int_0^\ell xq(x)\,\mathrm{d}x
=\frac{q_{\max}}{\ell}\int_0^\ell x^2\,\mathrm{d}x
=\frac{q_{\max}\ell^2}{3}.
$$
Dividing the moment by the resultant gives $x_Q=\dfrac{2\ell}{3}$. If the load instead decreases from $q_{\max}$ to zero, reflection about the midpoint gives its diagram. The resultant is unchanged, and its point of application becomes $x_Q=\dfrac{\ell}{3}$.

If the triangular load starts at a nonzero coordinate $a$, add the distance measured from the start of the load to $a$. For example, a triangular load increasing over $3\,\mathrm{m}$ and beginning at $x=2\,\mathrm{m}$ has its resultant at $x_Q=2+2=4\,\mathrm{m}$. Its moment arm about the origin is therefore $4\,\mathrm{m}$. Distinguishing the absolute coordinate from the distance measured from the start of the load directly affects the reaction obtained from moment equilibrium.
:::

## Classifying support arrangements

:::definizione{#classificazione-vincoli titolo="Determinacy, indeterminacy, and instability"}
A structure is **statically determinate** if its supports prevent every infinitesimal rigid-body motion and equilibrium determines every reaction. It is **statically indeterminate** if rigid-body motions are prevented but equilibrium leaves some reactions undetermined. It is **unstable** if it admits at least one infinitesimal rigid-body motion compatible with its restraints. An unstable structure can also have redundant restraints. Comparing the numbers of restraints and degrees of freedom therefore gives only an initial indication. The directions of the restraints must also be checked.
:::

::::teorema{#rango-vincoli titolo="Rank of the constraint equations"}
For a planar rigid body, let $K$ be the matrix that maps three infinitesimal rigid-body motions to their restrained components. If there are $m$ scalar constraints and the rank of $K$ is $r$, the space of compatible motions has dimension $3-r$. The space of self-equilibrated combinations of reactions has dimension $m-r$.

:::dimostrazione
Compatible motions satisfy $K\boldsymbol d=\boldsymbol 0$, where $\boldsymbol d$ contains the two translations and the rotation. By the rank–nullity theorem, the dimension of the null space is the number of columns minus the rank. The virtual work of the reactions is the product of their values with $K\boldsymbol d$. The equivalent generalized forces are thus obtained from the transpose $K^{\mathsf T}$. Since a matrix and its transpose have the same rank, the null space of the transpose has dimension $m-r$.
:::
::::

:::esempio{titolo="Three rollers and a free translation"}
Three rollers on horizontal surfaces are located at coordinates $0$, $2$, and $5\,\mathrm{m}$. The infinitesimal vertical displacement of a point with coordinate $x$ is $\delta v_O+x\delta\varphi$. The three constraints require this value to vanish at each support. The first two impose $\delta v_O=0$ and $\delta\varphi=0$. The third repeats a condition already satisfied. The translation $\delta u_O$ remains free, so the rank is two and the structure is unstable.

::struttura{nodi="A,0,0;C,2,0;B,5,0" aste="A-C;C-B" vincoli="A,carrello;C,carrello;B,carrello" frecce="1,0.9,3,0.9,u" titolo="Horizontal translation compatible with three rollers"}

If a pin replaces the first roller, horizontal motion is restrained. With three vertical constraints, one vertical reaction remains redundant. If the middle roller is also removed, three independent constraints remain and the structure becomes statically determinate.
:::

:::esempio{titolo="Concurrent reactions and a free rotation"}
Three rollers may have different orientations yet leave the structure unstable. In the figure, the normals to the three guides all pass through $O$. During an infinitesimal rotation about $O$, the velocity of each support point is perpendicular to the radius joining it to $O$. Since this radius is parallel to the guide normal, each normal velocity component vanishes. The rotation therefore satisfies all the constraints.

::struttura{nodi="A,-3,0;B,0,-2;C,2,2;O,0,0" aste="A-B;B-C" vincoli="A,carrello,180;B,carrello,270;C,carrello,45" tratteggi="-3,0 0,0;0,-2 0,0;2,2 0,0" titolo="The lines of action of all three reactions pass through O"}

The free-body diagram gives the same conclusion. All reactions have zero moment about $O$, so they cannot balance an applied couple with a nonzero moment. The kinematic check identifies the admissible motion, while the static check identifies a load that cannot be balanced. Rotating one guide so that its normal misses $O$ gives that reaction a nonzero moment arm. The other two guides restrain two independent motion components, so the reoriented guide can restrain the remaining rotation.
:::

## Internal hinges and suspended spans

:::definizione{#cerniera-interna titolo="Forces transmitted at a hinge"}
An **internal hinge** requires the connected bodies to have the same displacement at their connection and allows them to rotate relative to one another. It can therefore transmit a force with two components. An ideal hinge transmits zero moment between the bodies. A concentrated couple applied to one body at the connection is an external load in that body's equilibrium equations. The free-body diagram of one body shows the force components exerted by the other. On the second diagram the same components appear with opposite signs.

An internal hinge connects two parts of the structure, whereas a pin support connects the structure to its surroundings. The transmitted force cancels in overall equilibrium. If the overall equations alone leave one reaction undetermined, isolating either part provides a moment equation about the hinge in which both transmitted components have zero moment arm.
:::

:::esempio{titolo="Reactions of a Gerber beam"}
Let $AC$ be a segment of length $3\,\mathrm{m}$ fixed at $A$. The segment $CB$, of length $4\,\mathrm{m}$, is hinged at $C$ and rests at $B$ on a roller on a horizontal surface. A downward force of $20\,\mathrm{kN}$ acts at a distance $1\,\mathrm{m}$ from $C$.

::struttura{nodi="A,0,0;C,3,0;B,7,0" aste="A-C;C-B" vincoli="A,incastro,180;B,carrello" cerniere="C" forze="4 0,0,-1.15,P" quote="A,C,3 m;C,4 0,1 m;4 0,B,3 m" titolo="Gerber beam with a force on the suspended span"}

For segment $CB$, choose the unknown vertical forces $Y_C$ and $V_B$, both positive upward. Taking moments about $C$ gives $4V_B-20\cdot1=0$, hence $V_B=5\,\mathrm{kN}$. Vertical equilibrium gives $Y_C=15\,\mathrm{kN}$. Segment $AC$ therefore carries a downward force of $15\,\mathrm{kN}$. The fixed support provides an upward force of $15\,\mathrm{kN}$ and a counterclockwise couple of $45\,\mathrm{kN\,m}$. Since the load is vertical, the horizontal reactions are zero.

::struttura{nodi="C,0,0;B,4,0" aste="C-B" forze="1 0,0,-1.2,P" reazioni="C,0,0.9,Y_C;B,0,0.9,V_B" quote="C,1 0,1 m;1 0,B,3 m" titolo="Free-body diagram of the suspended span CB"}

The forces at $C$ cancel in overall equilibrium. Taking moments about $A$ gives $45+5\cdot7-20\cdot4=0$. This calculation checks the load's moment arm, the fixed-end moment, and the reaction at $B$ together.
:::

:::osservazione{titolo="Counting restraints for two connected bodies"}
Two planar rigid bodies taken separately have six degrees of freedom. In the Gerber beam shown, the fixed support provides three restraints, the internal hinge two, and the roller one. This gives six restraints, but static determinacy requires them to be independent. To check independence, first consider body $AC$. The fixed support prevents all of its rigid-body motions. The hinge therefore fixes point $C$ of body $CB$. Body $CB$ could still rotate about $C$. Since $B$ is a positive horizontal distance from $C$, this rotation would cause a vertical displacement at $B$. The roller prevents that displacement, so the rotation is zero.

If the roller at $B$ had a horizontal normal, an infinitesimal rotation of $CB$ would still produce a vertical velocity at $B$, now compatible with the support. The number of restraints would be the same, but their independence would change, leaving a possible mechanism. The position of the hinge and the direction of the reaction must therefore be considered together.
:::

## Negative reactions and unilateral supports

:::osservazione{#controllo-reazioni titolo="Interpreting and checking support reactions"}
To check the reactions, return to the free-body diagram and check the units, components, and moments separately. A negative reaction acts opposite to its assumed arrow. For a bilateral support, this is consistent with the model. For a unilateral contact support, the reaction must act in a direction the support can provide. Its sign therefore determines whether the assumed contact can be maintained.

On an overhanging beam, the force can have a longer moment arm than the last support. Equilibrium may then require the opposite support to pull the beam downward. This distinguishes a simple bearing from a connection capable of holding the structure down.
:::

:::esempio{titolo="An overhang and loss of contact"}
The beam shown has a pin at $A$ and a roller at $B$. The distances are $AB=4\,\mathrm{m}$ and $BD=2\,\mathrm{m}$. At end $D$, a force $P=10\,\mathrm{kN}$ acts downward.

::struttura{nodi="A,0,0;B,4,0;D,6,0" aste="A-B;B-D" vincoli="A,cerniera;B,carrello" forze="D,0,-1.1,P" quote="A,B,4 m;B,D,2 m" titolo="Force at the tip of overhang BD"}

Taking moments about $A$ gives $4V_B-6\cdot10$, so $V_B=15\,\mathrm{kN}$. Vertical equilibrium gives $V_A=-5\,\mathrm{kN}$. Taking moments about $B$ as a check yields $(-4)(-5)+2(-10)=0$. The pin at $A$ must therefore exert a downward force. A bilateral connection can supply it. If $A$ were simply supported by contact from below, the calculated sign would require a force the support could not exert. The problem would then have to be reformulated with a different contact configuration.
:::

## Horizontal forces on frames

:::esempio{titolo="Vertical moment arm of a horizontal force"}
The rigid portal frame shown has height $3\,\mathrm{m}$ and width $6\,\mathrm{m}$. A force $P=12\,\mathrm{kN}$ acts to the right at height $3\,\mathrm{m}$. There is a pin at $A$ and a roller on a horizontal surface at $B$. The applied force is horizontal, but its line of action lies above the supports. It therefore produces a clockwise moment about $A$.

::struttura{nodi="A,0,0;C,0,3;D,6,3;B,6,0" aste="A-C;C-D;D-B" vincoli="A,cerniera;B,carrello" forze="C,1.1,0,P" quote="A,C,3 m;C,D,6 m,-0.65" titolo="Horizontal force applied at the top of the portal frame"}

The moment and force equilibrium equations give
$$
\begin{cases}
6V_B-3\cdot12=0,\\[4pt]
V_A+V_B=0,\\[4pt]
H_A+12=0.
\end{cases}
$$
It follows that $V_B=6\,\mathrm{kN}$, $V_A=-6\,\mathrm{kN}$, and $H_A=-12\,\mathrm{kN}$. The two vertical reactions have equal magnitudes and opposite directions, forming the couple that balances the moment of the horizontal force. Component $H_A$ balances the applied force in the horizontal direction.

Once the reactions are known, cut the frame at a section of the crossbeam and isolate one part of the frame. The external reactions on that free body are then known. Moving from equilibrium of the entire structure to equilibrium of one part gives the axial force, shear force, and bending moment.
:::
