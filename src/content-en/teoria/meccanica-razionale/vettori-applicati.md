---
titolo: Applied vectors, moments and force systems
sommario: Moment of an applied vector about a pole and about an axis, scalar invariant, reduction of a system to its central axis, Varignon's theorem, center of a system of parallel vectors and distributed loads on a rod.
---

## Applied vectors and the moment about a pole

:::definizione{#vettore-applicato titolo="Applied vector and line of action"}
A force acting on a body is determined by a magnitude, a direction, an orientation and by the point of the body on which it acts. It is therefore represented by a pair $(P, \vec{v})$ formed by a point $P$ of space and by a vector $\vec{v}$, and such a pair is called an **applied vector**; the point $P$ is the **point of application**. The **line of action** of $(P, \vec{v})$, for $\vec{v} \neq \vec{0}$, is the line through $P$ parallel to $\vec{v}$.

The fixed frame is $(O; x, y, z)$ with unit vectors $\hat{\imath}$, $\hat{\jmath}$, $\hat{k}$; the position of a point $P$ is written as a difference of points, $P - O$. When the problem is planar one works in the plane $Oxy$, with $x$ horizontal pointing right, $y$ vertical pointing up and $z$ coming out of the page. A **system of applied vectors** is a finite set $(P_1, \vec{v}_1), \dots, (P_n, \vec{v}_n)$. Forces, constraint reactions and the elementary momenta of the points of a body are all systems of applied vectors, therefore the results of this chapter are used throughout Analytical mechanics, from the statics of systems to the cardinal equations of dynamics.
:::

:::richiamo{titolo="Cross product and scalar triple product"}
The cross product $\vec{u} \wedge \vec{w}$ of two vectors forming the angle $\varphi$ is orthogonal to both, has magnitude $|\vec{u}|\,|\vec{w}|\sin\varphi$ and orientation given by the right-hand rule; it vanishes if and only if the two vectors are parallel, it satisfies $\vec{w} \wedge \vec{u} = -\,\vec{u} \wedge \vec{w}$ and it is distributive with respect to addition. The scalar triple product $\vec{u} \wedge \vec{w} \cdot \vec{t}$ vanishes if and only if the three vectors are coplanar, and in particular if two of them are parallel. The vector triple product identity also holds,
$$
\vec{u} \wedge (\vec{w} \wedge \vec{t}) = (\vec{u} \cdot \vec{t})\,\vec{w} - (\vec{u} \cdot \vec{w})\,\vec{t} .
$$
See the topic on vectors in space in Linear Algebra.
:::

:::definizione{#momento-polare titolo="Moment about a pole"}
The moment measures the tendency of an applied vector to produce a rotation about a point. Let $(P, \vec{v})$ be an applied vector and let $O$ be a point, called the **pole**. The **moment** of $(P, \vec{v})$ about $O$ is the vector
$$
\vec{M}_O = (P - O) \wedge \vec{v} .
$$
For a force measured in $\mathrm{N}$ and a length in $\mathrm{m}$ the moment is measured in $\mathrm{N\,m}$. In the plane $Oxy$ the moment is parallel to $\hat{k}$, hence it reduces to the number $M_O$ defined by $\vec{M}_O = M_O\,\hat{k}$, and from the cross product in components one obtains
$$
M_O = (x_P - x_O)\,v_y - (y_P - y_O)\,v_x .
$$
The number $M_O$ is positive when the vector tends to produce a counterclockwise rotation about $O$. For $P - O = a\,(2\hat{\imath} + \hat{\jmath})$ and $\vec{v} = v\,(\hat{\imath} - \hat{\jmath})$ one obtains $M_O = a v\,[2 \cdot (-1) - 1 \cdot 1] = -3\,a v$, therefore the rotation tends to be clockwise.
:::

::::teorema{#momento-e-braccio titolo="Moment and arm"}
Let $(P, \vec{v})$ be an applied vector with $\vec{v} \neq \vec{0}$ and let $b$ be the distance of the pole $O$ from the line of action, called the **arm**. Then
$$
|\vec{M}_O| = |\vec{v}|\,b ,
$$
and the moment stays the same if the point of application is moved to another point of the line of action. In particular $\vec{M}_O = \vec{0}$ if and only if the line of action passes through $O$. The theorem serves to compute the moment without components, by measuring the arm on the drawing, and to recognize at once the vectors whose moment about the chosen pole vanishes. For the applied vector of the definition of moment one has $|\vec{v}| = v\sqrt{2}$, therefore
$$
b = \frac{3\,a v}{v\sqrt{2}} = \frac{3\sqrt{2}}{2}\,a .
$$

::struttura{nodi="O,0,0;P,4,2;H,3,3" forze="5.2 0.8,1.2,-1.2,v" tratteggi="2.5,3.5 5.5,0.5;0,0 3,3" etichette="1.2,1.85,b" punti="0,0;4,2;3,3" titolo="The arm $b$ is the distance of the pole $O$ from the line of action of $\vec{v}$, measured along the perpendicular $OH$"}

:::dimostrazione
Let $H$ be the foot of the perpendicular drawn from $O$ to the line of action, so that $|H - O| = b$. The vector $P - H$ is parallel to $\vec{v}$, therefore $(P - H) \wedge \vec{v} = \vec{0}$ and by the distributive property
$$
\vec{M}_O = \big[ (H - O) + (P - H) \big] \wedge \vec{v} = (H - O) \wedge \vec{v} .
$$
The vectors $H - O$ and $\vec{v}$ are orthogonal, hence the magnitude of their cross product equals $b\,|\vec{v}|$. The last expression depends on the point of application only through the line of action, which determines $H$; therefore all the points of the line of action give the same moment. Finally, since $|\vec{v}| \neq 0$, the product $b\,|\vec{v}|$ vanishes if and only if $b = 0$, that is if and only if $O$ belongs to the line of action.
:::
::::

## Moment about an axis

:::definizione{#momento-assiale titolo="Axial moment"}
In problems with a fixed axis of rotation only the component of the moment along that axis is of interest. Let $r$ be an oriented line, let $\hat{u}$ be its unit vector and let $A$ be a point of $r$. The **axial moment** of the applied vector $(P, \vec{v})$ about $r$ is the number
$$
M_r = \hat{u} \cdot \vec{M}_A = \hat{u} \cdot (P - A) \wedge \vec{v} ,
$$
that is the component along $\hat{u}$ of the moment computed about a point of the axis. The axial moment about the $z$ axis therefore coincides with the third component of $\vec{M}_O$. For $P - O = a\,(\hat{\imath} + \hat{\jmath})$ and $\vec{v} = F\,(2\hat{\imath} - \hat{\jmath} + 2\hat{k})$ one obtains $\vec{M}_O = a F\,(2\hat{\imath} - 2\hat{\jmath} - 3\hat{k})$, therefore $M_z = -3\,a F$. The axial moment is the quantity appearing in the equation of motion of a rigid body with a fixed axis, treated in the topic on rigid-body dynamics.

::struttura{frecce="0,0,-1.0,-0.72,x;0,0,2,0,y;0,0,0,2,z" punti="-0.7,-0.504,P" tratteggi="0,0 -0.7,-0.504" forze="0.5 -0.504,1.2,0,v" reazioni="0 1.8,0,1.2,M_O" etichette="0.14,-0.32,O" riferimento=0 titolo="The vector $\vec{v} = v\,\hat{\jmath}$ applied at $P - O = a\,\hat{\imath}$ has moment $\vec{M}_O = a v\,\hat{k}$, hence axial moment $M_z = a v$"}

:::

::::teorema{#momento-assiale-indipendente titolo="Independence of the axial moment of the point of the axis"}
The axial moment $M_r$ does not depend on the point $A$ chosen on the axis $r$. The definition is therefore well posed, and in computations one takes as pole the point of the axis that makes the calculation shortest, for example the foot of the perpendicular drawn from $P$.

:::dimostrazione
Let $A$ and $A'$ be two points of $r$. From the decomposition $P - A' = (P - A) + (A - A')$ and from the distributive property of the cross product it follows that
$$
\vec{M}_{A'} = \vec{M}_A + (A - A') \wedge \vec{v} ,
$$
and taking the scalar product with $\hat{u}$ one obtains
$$
\hat{u} \cdot \vec{M}_{A'} = \hat{u} \cdot \vec{M}_A + \hat{u} \wedge (A - A') \cdot \vec{v} .
$$
The vector $A - A'$ is parallel to $\hat{u}$, since $A$ and $A'$ both belong to $r$; therefore the scalar triple product on the right-hand side vanishes and the two axial moments coincide.
:::
::::

:::attenzione
A vanishing axial moment gives no information about the moment with respect to the points of the axis. For the applied vector $(P, \vec{v})$ with $P - O = a\,(\hat{\imath} + \hat{\jmath} + \hat{k})$ and $\vec{v} = F\,(\hat{\imath} - \hat{\jmath})$ one obtains $\vec{M}_O = a F\,(\hat{\imath} + \hat{\jmath} - 2\hat{k})$, which differs from the zero vector, whereas the axial moment about the line through $O$ with unit vector $\hat{u} = \dfrac{\hat{\imath} + \hat{\jmath} + \hat{k}}{\sqrt{3}}$ equals
$$
M_r = \frac{a F\,(1 + 1 - 2)}{\sqrt{3}} = 0 .
$$
The axial moment vanishes because the line of action and the axis are coplanar, since $P$ belongs to the axis.
:::

## Resultant, resultant moment and scalar invariant

:::definizione{#risultante-momento-risultante titolo="Resultant and resultant moment"}
Given the system of applied vectors $(P_1, \vec{v}_1), \dots, (P_n, \vec{v}_n)$, the **resultant** is the sum of the vectors and the **resultant moment** about the pole $O$ is the sum of the moments:
$$
\vec{R} = \sum_{i=1}^{n} \vec{v}_i ,
\qquad
\vec{M}_O = \sum_{i=1}^{n} (P_i - O) \wedge \vec{v}_i .
$$
The resultant is a free vector, because it depends only on the vectors $\vec{v}_i$ and not on the points of application; the resultant moment, on the other hand, depends on the pole. These two quantities are the only ones appearing in the cardinal equations of statics and of dynamics, therefore two systems having the same $\vec{R}$ and $\vec{M}_O$ produce the same effects on a rigid body.
:::

::::teorema{#cambiamento-di-polo titolo="Change of pole formula"}
For every pair of poles $O$ and $O'$ one has
$$
\vec{M}_{O'} = \vec{M}_O + (O - O') \wedge \vec{R} .
$$
Once $\vec{R}$ and the moment about one pole are known, the moment about every other pole is therefore obtained with a single cross product, without repeating the sum over all the vectors of the system. If $\vec{R} = \vec{0}$, the resultant moment is the same for all poles.

:::dimostrazione
For every index $i$ one has $P_i - O' = (P_i - O) + (O - O')$. From the distributive property of the cross product it follows that
$$
\begin{aligned}
\vec{M}_{O'} &= \sum_{i=1}^{n} \big[ (P_i - O) + (O - O') \big] \wedge \vec{v}_i \\[6pt]
&= \sum_{i=1}^{n} (P_i - O) \wedge \vec{v}_i + (O - O') \wedge \sum_{i=1}^{n} \vec{v}_i \\[6pt]
&= \vec{M}_O + (O - O') \wedge \vec{R} .
\end{aligned}
$$
:::
::::

::::teorema{#invariante-scalare titolo="Scalar invariant"}
The number
$$
I = \vec{R} \cdot \vec{M}_O
$$
does not depend on the pole $O$ and is called the **scalar invariant** of the system, or invariant trinomial. The invariant serves to recognize at once whether a system can be reduced to a single applied vector, since the reduction is possible, when $\vec{R} \neq \vec{0}$, if and only if $I = 0$.

:::dimostrazione
From the change of pole formula it follows that
$$
\vec{R} \cdot \vec{M}_{O'} = \vec{R} \cdot \vec{M}_O + \vec{R} \cdot (O - O') \wedge \vec{R} .
$$
The scalar triple product on the right-hand side contains the vector $\vec{R}$ twice, hence it vanishes; therefore $\vec{R} \cdot \vec{M}_{O'} = \vec{R} \cdot \vec{M}_O$.
:::
::::

:::osservazione{#invariante-sistemi-piani titolo="Planar systems and systems of parallel vectors"}
If all the points $P_i$ belong to the plane $Oxy$ and all the vectors $\vec{v}_i$ are parallel to that plane, then $\vec{R}$ is parallel to the plane and $\vec{M}_O$ is parallel to $\hat{k}$, therefore $I = 0$. The same happens for a system of vectors all parallel to a unit vector $\hat{u}$: the resultant is parallel to $\hat{u}$ and every moment $(P_i - O) \wedge \vec{v}_i$ is orthogonal to $\hat{u}$, hence $\vec{M}_O$ is orthogonal to $\hat{u}$ as well and the scalar product $\vec{R} \cdot \vec{M}_O$ vanishes. In both cases, if $\vec{R} \neq \vec{0}$, the system is equivalent to a single applied vector.
:::

## Couples

:::definizione{#coppia titolo="Couple of applied vectors"}
A **couple** is a system formed by two applied vectors $(A, \vec{v})$ and $(B, -\vec{v})$ with $\vec{v} \neq \vec{0}$ and parallel, distinct lines of action; the distance $d$ between the two lines is the **arm of the couple**. The resultant of a couple vanishes, therefore a couple tends to produce a rotation without producing a translation. In a structure or in a mechanical system an applied concentrated couple is indicated by its moment $\mathcal{M}$ alone.
:::

::::teorema{#momento-di-una-coppia titolo="Moment of a couple"}
The moment of a couple is the same about every pole and equals
$$
\vec{M} = (A - B) \wedge \vec{v} ,
$$
with magnitude $|\vec{v}|\,d$ and direction orthogonal to the plane of the two lines of action. A couple is therefore completely determined by its moment, and two couples with the same moment are equivalent, whatever their arms and magnitudes. In a drawing a couple is represented by a curved arrow, positive in the counterclockwise sense when the moment is parallel to $\hat{k}$ and has the same orientation.

::struttura{nodi="A,0,0;B,2,0" forze="A,0,-1,v;B,0,1,v" coppie="1 0.6,1,ℳ" quote="A,B,d,1.4" tratteggi="0,-1.2 0,1.4;2,-1.2 2,1.4" punti="0,0;2,0" titolo="Couple with arm $d$: the resultant vanishes and the moment equals $|\vec{v}|\,d$ about every pole"}

:::dimostrazione
The resultant of the couple is $\vec{v} - \vec{v} = \vec{0}$, therefore by the change of pole formula the resultant moment is the same for every pole. It is then computed about $B$: the vector applied at $B$ has zero moment about $B$, whereas $(A, \vec{v})$ has moment $(A - B) \wedge \vec{v}$. By the theorem on the moment and the arm the magnitude of this moment is the product of $|\vec{v}|$ by the distance of $B$ from the line of action of $(A, \vec{v})$, that is $|\vec{v}|\,d$. Its direction is orthogonal to $A - B$ and to $\vec{v}$, hence to the plane containing the two lines of action.
:::
::::

## Equivalent systems, transfer and reduction

:::definizione{#sistemi-equivalenti titolo="Equivalent systems"}
Two systems of applied vectors are **equivalent** if they have the same resultant and the same resultant moment about a pole $O$:
$$
\begin{cases}
\vec{R}' = \vec{R} \\[4pt]
\vec{M}'_O = \vec{M}_O
\end{cases}
$$
A system equivalent to the empty system, that is with $\vec{R} = \vec{0}$ and $\vec{M}_O = \vec{0}$, is said to be **balanced**. Since the cardinal equations contain the forces only through $\vec{R}$ and $\vec{M}_O$, two equivalent systems produce on the same rigid body the same constraint reactions and the same motion; a complicated system can therefore be replaced by a simpler equivalent system.
:::

:::teorema{#equivalenza-ogni-polo titolo="Equivalence about every pole"}
If two systems have the same resultant and the same resultant moment about a pole $O$, then they have the same resultant moment about every other pole $O'$. Equivalence can therefore be checked with the most convenient pole, for example at the point of application of one of the vectors. The result follows by applying the change of pole formula to the two systems and substituting the equalities $\vec{R}' = \vec{R}$ and $\vec{M}'_O = \vec{M}_O$.
:::

::::teorema{#trasporto titolo="Sliding and transfer of an applied vector"}
Let $(P, \vec{v})$ be an applied vector.

- Sliding: for every point $P'$ of the line of action, the system formed by $(P', \vec{v})$ is equivalent to the one formed by $(P, \vec{v})$.
- Transfer: for every point $Q$, the system formed by $(P, \vec{v})$ is equivalent to the system formed by $(Q, \vec{v})$ and by the couple of moment
$$
\mathcal{\vec{M}}_t = (P - Q) \wedge \vec{v} ,
$$
which is the moment of $(P, \vec{v})$ about the arrival point $Q$.

Transfer serves to bring all the vectors of a system to one and the same point, chosen once and for all, and so to obtain an equivalent system formed by a single applied vector and a single couple.

::struttura{nodi="Q,0,0;P,2,0" aste="Q-P" forze="P,0,-1.2,v" quote="Q,P,ℓ" titolo="The vector $\vec{v}$ applied at $P$"}

::struttura{nodi="Q,0,0;P,2,0" aste="Q-P" forze="Q,0,-1.2,v" coppie="Q,-1,ℳ_t" quote="Q,P,ℓ" titolo="The equivalent system at $Q$: the same vector and the transfer couple of moment $-\ell\,|\vec{v}|\,\hat{k}$"}

:::dimostrazione
In both cases the resultant is $\vec{v}$. In the sliding the moment about every pole stays the same, by the theorem on the moment and the arm. In the transfer the moments about $Q$ are compared: the initial system has moment $(P - Q) \wedge \vec{v}$, whereas in the final system the vector applied at $Q$ has zero moment about $Q$ and the couple has moment $\mathcal{\vec{M}}_t = (P - Q) \wedge \vec{v}$ about every pole. The two systems therefore have the same resultant and the same moment about $Q$, hence they are equivalent.
:::
::::

::::teorema{#riduzione titolo="Reduction of a system of applied vectors"}
Every system of applied vectors with resultant $\vec{R}$ and resultant moment $\vec{M}_O$ is equivalent to the system formed by the single applied vector $(O, \vec{R})$ and by a couple of moment $\vec{M}_O$. Four cases occur.

- $\vec{R} = \vec{0}$ and $\vec{M}_O = \vec{0}$: the system is balanced.
- $\vec{R} = \vec{0}$ and $\vec{M}_O \neq \vec{0}$: the system is equivalent to a couple of moment $\vec{M}_O$.
- $\vec{R} \neq \vec{0}$ and $I = 0$: the system is equivalent to a single applied vector, with vector $\vec{R}$, applied at a point of the central axis.
- $\vec{R} \neq \vec{0}$ and $I \neq 0$: the system is equivalent to an applied vector with vector $\vec{R}$ and to a couple whose moment is parallel to $\vec{R}$.

:::dimostrazione
Every vector $(P_i, \vec{v}_i)$ is transferred to $O$. By the theorem on transfer one obtains the system formed by the vectors $(O, \vec{v}_i)$ and by the couples of moment $(P_i - O) \wedge \vec{v}_i$. The vectors applied at the same point $O$ add up to $(O, \vec{R})$ and the couples add up to a couple of moment $\vec{M}_O$, since resultant and resultant moment are additive. The first two cases follow from the definitions of balanced system and of couple. The other two follow from the properties of the central axis.
:::
::::

## Central axis

:::definizione{#asse-centrale titolo="Central axis"}
Consider a system of applied vectors with $\vec{R} \neq \vec{0}$. The **central axis** is the set of the points $Q$ about which the resultant moment is parallel to the resultant:
$$
\vec{M}_Q \wedge \vec{R} = \vec{0} .
$$
The central axis determines the poles about which the reduction of the system is the simplest possible, and in the case $I = 0$ it is the line of action of the single vector equivalent to the system.
:::

::::teorema{#equazione-asse-centrale titolo="Equation of the central axis and minimum moment"}
Consider a system with resultant $\vec{R} \neq \vec{0}$, resultant moment $\vec{M}_O$ and invariant $I$. The central axis is the line parallel to $\vec{R}$ of equation
$$
Q - O = \frac{\vec{R} \wedge \vec{M}_O}{|\vec{R}|^2} + \lambda\,\vec{R} ,
\qquad \lambda \in \mathbb{R} ,
$$
and for every point $Q$ of the central axis one has
$$
\vec{M}_Q = \frac{I}{|\vec{R}|^2}\,\vec{R} ,
\qquad
|\vec{M}_Q| = \frac{|I|}{|\vec{R}|} .
$$
The resultant moment about the points of the central axis has minimum magnitude among all the poles. In particular, if $I = 0$ the moment about the points of the central axis vanishes, therefore the system is equivalent to the single applied vector $(Q, \vec{R})$ with $Q$ on the central axis.

:::dimostrazione
Set $\vec{r} = Q - O$. By the change of pole formula one has $\vec{M}_Q = \vec{M}_O + \vec{R} \wedge \vec{r}$. Choosing
$$
\vec{r} = \frac{\vec{R} \wedge \vec{M}_O}{|\vec{R}|^2}
$$
and applying the vector triple product identity one obtains
$$
\vec{R} \wedge \vec{r} = \frac{\vec{R} \wedge (\vec{R} \wedge \vec{M}_O)}{|\vec{R}|^2} = \frac{(\vec{R} \cdot \vec{M}_O)\,\vec{R} - |\vec{R}|^2\,\vec{M}_O}{|\vec{R}|^2} = \frac{I}{|\vec{R}|^2}\,\vec{R} - \vec{M}_O ,
$$
therefore $\vec{M}_Q = \dfrac{I}{|\vec{R}|^2}\,\vec{R}$, which is parallel to $\vec{R}$. Adding to $\vec{r}$ a vector $\lambda\,\vec{R}$ does not change $\vec{M}_Q$, since $\vec{R} \wedge \lambda\,\vec{R} = \vec{0}$; therefore all the points of the stated line belong to the central axis. Conversely, if $\vec{M}_{Q'}$ is parallel to $\vec{R}$, from the invariance of $I$ it follows that $\vec{M}_{Q'} = \dfrac{I}{|\vec{R}|^2}\,\vec{R} = \vec{M}_Q$, hence $\vec{R} \wedge (Q - Q') = \vec{0}$ and $Q'$ lies on the line through $Q$ parallel to $\vec{R}$. As for minimality, take an arbitrary pole $Q'$ and write $\vec{M}_{Q'} = \vec{M}_Q + \vec{R} \wedge (Q - Q')$: the second summand is orthogonal to $\vec{R}$ and the first is parallel to $\vec{R}$, therefore
$$
|\vec{M}_{Q'}|^2 = |\vec{M}_Q|^2 + |\vec{R} \wedge (Q - Q')|^2 \geq |\vec{M}_Q|^2 .
$$
:::
::::

:::esempio{titolo="Two skew vectors"}
Let $(P_1, \vec{v}_1)$ with $P_1 = O$ and $\vec{v}_1 = v\,\hat{\imath}$, and $(P_2, \vec{v}_2)$ with $P_2 - O = h\,\hat{k}$ and $\vec{v}_2 = v\,\hat{\jmath}$. The two lines of action are skew. One obtains
$$
\vec{R} = v\,(\hat{\imath} + \hat{\jmath}) ,
\qquad
\vec{M}_O = h\,\hat{k} \wedge v\,\hat{\jmath} = -\,h v\,\hat{\imath} ,
\qquad
I = -\,h v^2 \neq 0 ,
$$
therefore the system is not equivalent to a single applied vector. The central axis passes through the point
$$
Q - O = \frac{\vec{R} \wedge \vec{M}_O}{|\vec{R}|^2} = \frac{v\,(\hat{\imath} + \hat{\jmath}) \wedge (-\,h v\,\hat{\imath})}{2 v^2} = \frac{h}{2}\,\hat{k}
$$
and is parallel to $\hat{\imath} + \hat{\jmath}$; the minimum moment equals
$$
\vec{M}_Q = \frac{I}{|\vec{R}|^2}\,\vec{R} = -\,\frac{h v}{2}\,(\hat{\imath} + \hat{\jmath}) ,
\qquad
|\vec{M}_Q| = \frac{\sqrt{2}}{2}\,h v .
$$

::struttura{frecce="0,0,-1,-0.72,x;0,0,2,0,y;0,0,0,2,z" forze="-0.6 -0.432,-0.6,-0.432,v_1;1.2 1.6,1.2,0,v_2" tratteggi="-0.8,1.376 1.2,-0.064" punti="0,0;0,1.6;0,0.8,Q,centro" etichette="0.16,-0.32,O;0.18,1.42,P_2;0.95,-0.5,central axis" riferimento=0 titolo="The two skew vectors and the central axis, parallel to $\vec{R}$ and passing through $Q$ with $Q - O = \dfrac{h}{2}\,\hat{k}$"}

:::

## Concurrent vectors and planar systems

::::teorema{#teorema-di-varignon titolo="Varignon's theorem"}
Let $(P_1, \vec{v}_1), \dots, (P_n, \vec{v}_n)$ be applied vectors whose lines of action all pass through one and the same point $K$, and let $\vec{R} \neq \vec{0}$ be their resultant. Then for every pole $O$
$$
\vec{M}_O = (K - O) \wedge \vec{R} ,
$$
that is the resultant moment coincides with the moment of the resultant applied at $K$, and the system is equivalent to the single applied vector $(K, \vec{R})$. It follows that $I = 0$, and the central axis is the line through $K$ parallel to $\vec{R}$. By far the most used case is that of a single vector decomposed into its components, applied at the same point, and then the moment of the vector is the sum of the moments of the components, each computed with its own arm.

:::dimostrazione
By sliding, every vector $(P_i, \vec{v}_i)$ is brought to the point $K$ of its own line of action without the moment changing, therefore $(P_i - O) \wedge \vec{v}_i = (K - O) \wedge \vec{v}_i$. Summing over $i$ and using the distributive property one obtains
$$
\vec{M}_O = \sum_{i=1}^{n} (K - O) \wedge \vec{v}_i = (K - O) \wedge \vec{R} .
$$
The moment about $K$ is therefore zero and the system is equivalent to $(K, \vec{R})$. Finally $I = \vec{R} \cdot (K - O) \wedge \vec{R} = 0$, because the scalar triple product contains $\vec{R}$ twice.
:::
::::

:::teorema{#retta-d-azione-risultante titolo="Line of action of the resultant of a planar system"}
Consider a planar system, with all the points and all the vectors in the plane $Oxy$, and let $\vec{R} = (R_x, R_y) \neq \vec{0}$. Since $I = 0$, the system is equivalent to the single vector $\vec{R}$ applied at an arbitrary point of the line
$$
x\,R_y - y\,R_x = M_O ,
$$
called the **line of action of the resultant**, which is parallel to $\vec{R}$ and whose distance from $O$ is $\dfrac{|M_O|}{|\vec{R}|}$. The equation is obtained by requiring that the moment about $O$ of $\vec{R}$ applied at $(x, y)$ equal $M_O$. For vertical loads, with $R_x = 0$ and $R_y \neq 0$, the line of action is the vertical line of abscissa $x = \dfrac{M_O}{R_y}$.
:::

:::esempio{titolo="Three vectors on a plate"}
On a rectangular plate there act $\vec{v}_1 = F\,\hat{\imath}$ at $O$, $\vec{v}_2 = -2F\,\hat{\jmath}$ at the point of coordinates $(2a, 0)$ and $\vec{v}_3 = F\,(-\hat{\imath} + \hat{\jmath})$ at the point of coordinates $(2a, a)$. One obtains
$$
\vec{R} = -F\,\hat{\jmath} ,
\qquad
M_O = 2a \cdot (-2F) + \big[ 2a \cdot F - a \cdot (-F) \big] = -\,a F ,
$$
therefore the line of action of the resultant has equation $-x F = -\,a F$, that is $x = a$. The system is equivalent to the single vector $-F\,\hat{\jmath}$ applied at a point of the vertical line of abscissa $a$, and about that point the resultant moment vanishes.

::struttura{poligoni="0,0 2,0 2,1 0,1" nodi="O,0,0;B,2,0;C,2,1" forze="O,1.1,0,v_1;B,0,-1.1,v_2;C,-0.78,0.78,v_3" reazioni="1 -1.5,0,-1,R" tratteggi="1,-1.7 1,1.5" punti="1,0" quote="O,B,2a,-2" titolo="The three vectors and, in the second color, the resultant on the line of action of abscissa $x = a$"}

:::

## Systems of parallel vectors and their center

::::teorema{#centro-vettori-paralleli titolo="Center of a system of parallel vectors"}
Let $\vec{v}_i = c_i\,\hat{u}$ be vectors parallel to the unit vector $\hat{u}$, applied at the points $P_i$, where each $c_i$ is a signed number. If $\displaystyle\sum_i c_i \neq 0$, the system is equivalent to the single vector $\vec{R} = \Big( \sum_i c_i \Big)\,\hat{u}$ applied at the **center of the system**, the point $C$ defined by
$$
C - O = \frac{\displaystyle\sum_{i=1}^{n} c_i\,(P_i - O)}{\displaystyle\sum_{i=1}^{n} c_i} .
$$
The point $C$ depends on the coefficients $c_i$ and on the points of application, and does not depend on the unit vector $\hat{u}$: if all the vectors rotate by the same angle about their respective points of application, the line of action of the resultant rotates about $C$. With the same computation, applied to the weights of the parts of a body, one obtains the center of mass, treated in the topic on mass geometry.

::struttura{tratteggi="0,0 4,0 4,2 0,2 0,0" punti="0,0;4,0;4,2;0,2;2,1.4,C,centro" forze="0 0.6,0,0.6,;4 1.2,0,1.2,;4 3.8,0,1.8,;0 4.4,0,2.4," reazioni="2 3.6,0,2.2," quote="0 0,4 0,4a;4 0,4 2,2a,1.4" etichette="0.2,0.62,F;4.2,1.22,2F;4.2,3.82,3F;0.2,4.42,4F;2.2,3.5,R;-0.45,-0.3,P_1;4.2,-0.3,P_2;4.2,1.7,P_3;-0.45,1.7,P_4" titolo="Four parallel vectors with coefficients $F$, $2F$, $3F$, $4F$ and the resultant applied at the center $C$ of coordinates $\left( 2a, \dfrac{7a}{5} \right)$"}

:::dimostrazione
The resultant is $\sum_i c_i\,\hat{u}$. Set $c = \sum_i c_i$ and denote by $C$ the point defined in the statement, so that $\sum_i c_i\,(P_i - O) = c\,(C - O)$. By the distributive property of the cross product the resultant moment about $O$ is
$$
\begin{aligned}
\vec{M}_O &= \sum_{i=1}^{n} (P_i - O) \wedge c_i\,\hat{u} = \Big[ \sum_{i=1}^{n} c_i\,(P_i - O) \Big] \wedge \hat{u} \\[6pt]
&= c\,(C - O) \wedge \hat{u} = (C - O) \wedge c\,\hat{u} = (C - O) \wedge \vec{R} .
\end{aligned}
$$
The vector $\vec{R}$ applied at $C$ therefore has the same moment as the system about $O$, besides the same resultant, hence the two systems are equivalent. The point $C$ is defined without $\hat{u}$ entering, therefore it does not depend on the common direction of the vectors.
:::
::::

:::osservazione{#proprieta-del-centro titolo="Properties of the center"}
Three properties used in all computations follow from the formula for the center.

- Additivity: if the system is split into two groups, with total coefficients $c'$ and $c''$ and centers $C'$ and $C''$, then the center of the complete system is the center of the two vectors $c'\,\hat{u}$ at $C'$ and $c''\,\hat{u}$ at $C''$.
- Symmetry: if the points and the coefficients are symmetric with respect to a plane or to a line, the center belongs to that plane or to that line.
- Membership: if all the coefficients are positive, $C$ belongs to the smallest convex set containing the points $P_i$; with one negative coefficient the center can fall outside that set. For $c_1 = F$ at $O$, $c_2 = -2F$ at $P_2 - O = a\,\hat{\imath}$ and $c_3 = \dfrac{3}{2}\,F$ at $P_3 - O = 3a\,\hat{\imath}$ the total coefficient is $\dfrac{F}{2}$ and the center is the point of abscissa $5a$, outside the segment containing the three points of application.
:::

## Distributed loads on a rod

:::richiamo{titolo="Definite integral"}
For a function $f$ continuous on $[a, b]$ the integral $\displaystyle\int_a^b f(s)\,ds$ is the limit of the sums $\sum_k f(s_k)\,\Delta s_k$ as the maximum width of the intervals $\Delta s_k$ tends to zero, and if $F$ is a primitive of $f$ one has $\displaystyle\int_a^b f(s)\,ds = F(b) - F(a)$. See the topic on integral calculus in Mathematical Analysis 1.
:::

:::definizione{#carico-distribuito titolo="Distributed load on a rod"}
A **distributed load** is a force spread continuously along a rod. Let $s$ be the coordinate measured from one end of the rod and let $\hat{u}$ be the common direction of the elementary forces. The **intensity** of the load is the function $q(s)$, force per unit length measured in $\mathrm{N/m}$, such that on the segment of length $ds$ the force $q(s)\,\hat{u}\,ds$ acts. The own weight of a homogeneous rod of linear density $\lambda$ is a uniform load of intensity $q = \lambda\,g$ directed downwards. A distributed load is a system of infinitely many parallel applied vectors, therefore its center is computed as that of a system of parallel vectors, with integrals in place of sums.
:::

::::teorema{#risultante-carico-distribuito titolo="Resultant of a distributed load"}
Let $q$ be continuous, or piecewise continuous, on the segment $0 \leq s \leq \ell$ of a straight rod, and let
$$
R = \int_0^\ell q(s)\,ds \neq 0 .
$$
Then the load is equivalent to the single force $R\,\hat{u}$ applied at the point of abscissa
$$
s_C = \frac{1}{R}\int_0^\ell s\,q(s)\,ds .
$$
With this reduction distributed loads enter the equilibrium equations and the cardinal equations as concentrated forces. If instead $R = 0$ the load is equivalent to a couple, of moment $\displaystyle - \hat{k}\int_0^\ell s\,q(s)\,ds$ for a load directed along $-\hat{\jmath}$ on a rod parallel to $\hat{\imath}$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" carichi="A,B,0,1.2,q_0" reazioni="4 1.35,0,-1.3,R" quote="A,4 0,s_C,0.9" riferimento=0 titolo="Triangular load of intensity $q(s) = q_0\,\dfrac{s}{\ell}$: the resultant equals $\dfrac{q_0\,\ell}{2}$ and passes through the point of abscissa $\dfrac{2\ell}{3}$"}

:::dimostrazione
The interval $[0, \ell]$ is divided into intervals of width $\Delta s_k$ and the load on each interval is replaced by the force $q(s_k)\,\hat{u}\,\Delta s_k$ applied at one of its points, of abscissa $s_k$. A system of parallel vectors is obtained, therefore by the theorem on the center of a system of parallel vectors its resultant equals $\big( \sum_k q(s_k)\,\Delta s_k \big)\,\hat{u}$ and is applied at the point of abscissa
$$
\frac{\sum_k s_k\,q(s_k)\,\Delta s_k}{\sum_k q(s_k)\,\Delta s_k} .
$$
As the maximum width of the intervals tends to zero the two sums tend to the integrals of the statement, therefore the resultant and its abscissa are the ones indicated. If $R = 0$ the resultant vanishes, therefore by the reduction theorem the system is equivalent to a couple of moment $\vec{M}_O = \displaystyle\int_0^\ell s\,\hat{\imath} \wedge \big( -q(s)\,\hat{\jmath} \big)\,ds$, which is the moment indicated.
:::
::::

:::esempio{titolo="Standard loads"}
On the segment $0 \leq s \leq \ell$ the following values are obtained.

- Uniform load $q(s) = q_0$: $R = q_0\,\ell$ and $s_C = \dfrac{\ell}{2}$.
- Triangular load $q(s) = q_0\,\dfrac{s}{\ell}$: $R = \dfrac{q_0\,\ell}{2}$ and $s_C = \dfrac{2\ell}{3}$.
- Parabolic load $q(s) = q_0\,\Big( 1 - \dfrac{s^2}{\ell^2} \Big)$: $R = \dfrac{2\,q_0\,\ell}{3}$ and $s_C = \dfrac{3\ell}{8}$.

For the parabolic load, for example,
$$
R = q_0 \int_0^\ell \Big( 1 - \frac{s^2}{\ell^2} \Big)\,ds = q_0\,\Big( \ell - \frac{\ell}{3} \Big) = \frac{2\,q_0\,\ell}{3} ,
\qquad
\int_0^\ell s\,q(s)\,ds = q_0\,\Big( \frac{\ell^2}{2} - \frac{\ell^2}{4} \Big) = \frac{q_0\,\ell^2}{4} ,
$$
and dividing the second result by the first one finds $s_C = \dfrac{3\ell}{8}$.
:::

## Balanced systems

:::definizione{#sistema-equilibrato titolo="Balanced system"}
A system of applied vectors is **balanced** if
$$
\begin{cases}
\vec{R} = \vec{0} \\[4pt]
\vec{M}_O = \vec{0}
\end{cases}
$$
for one pole $O$, and therefore, by the change of pole formula, for every pole. In space the two vector conditions are six scalar equations, in the plane three. A rigid body initially at rest stays in equilibrium if and only if the system of all the forces acting on it, including the constraint reactions, is balanced; this is the content of the cardinal equations of statics, treated in the topic on the statics of systems.
:::

:::teorema{#due-vettori-equilibrati titolo="Balanced systems of two and of three vectors"}
Two nonzero applied vectors form a balanced system if and only if they are opposite and have the same line of action. Three nonzero, non-parallel applied vectors form a balanced system only if the three lines of action are coplanar and pass through one and the same point. The first statement follows from the condition $\vec{R} = \vec{0}$, which makes the two vectors opposite, and from the theorem on the moment of a couple, which for distinct lines of action would give a nonzero moment. The second is obtained by choosing as pole the point $K$ at which two of the lines of action meet: the two corresponding vectors have zero moment about $K$, therefore the third one has zero moment as well and its line of action passes through $K$.
:::

:::osservazione{#equilibratura-con-un-vettore titolo="Balancing a system"}
To balance a system with resultant $\vec{R}$ and moment $\vec{M}_O$ it is necessary to add a system with resultant $-\vec{R}$ and moment $-\vec{M}_O$, for example the applied vector $(O, -\vec{R})$ together with the couple of moment $-\vec{M}_O$. A single applied vector $(Q, -\vec{R})$ suffices if and only if $\vec{M}_O = (Q - O) \wedge \vec{R}$, and this condition requires $\vec{M}_O$ orthogonal to $\vec{R}$, that is $I = 0$; in that case $Q$ is a point of the central axis. A system with $I \neq 0$ is therefore balanced by an applied vector and a couple, and the couple of minimum moment is the one of moment $-\dfrac{I}{|\vec{R}|^2}\,\vec{R}$, to be added to a vector applied at a point of the central axis.
:::
