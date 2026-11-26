---
titolo: "Vectors and basic forces"
sommario: "Scalar and vector quantities, vector sums and components, measuring forces, weight, and spring force."
---

## Scalar and vector quantities

:::definizione{#scalari-e-vettori titolo="Scalars and vectors"}
A value and its unit are enough to describe the mass of an object, for example $2\,\mathrm{kg}$. To describe a displacement, we also need to specify its direction and its sense along that direction. Moving $3\,\mathrm{m}$ east leads to a different position than moving $3\,\mathrm{m}$ west.

A **scalar** quantity is described by a number and its unit of measurement. Mass, duration, and temperature are scalars. A **vector** quantity is described by a magnitude, a direction, and a sense, and it obeys the rules of vector addition. Displacement and force are vector quantities.

This distinction determines what information is needed to describe a situation. Saying that a rope exerts a force of $10\,\mathrm{N}$ specifies the magnitude of the force. To complete the description, we must say how the rope is oriented and which way it pulls.
:::

:::definizione{#modulo-direzione-verso titolo="Magnitude, direction, and sense"}
An arrow represents a **vector**. The line along which the arrow lies gives its direction, and the arrowhead shows its sense. The **magnitude** is the nonnegative value of the quantity, expressed with its unit.

The symbol $\vec{A}$ denotes the vector, and $A$ denotes its magnitude. A horizontal arrow pointing right and one pointing left have the same direction and opposite senses. A vertical arrow has a different direction.

To draw the vector, we choose a scale. If $1\,\mathrm{cm}$ represents $2\,\mathrm{N}$, then a force of $6\,\mathrm{N}$ is drawn as an arrow $3\,\mathrm{cm}$ long. The length on the page therefore represents a force, and the force itself is measured in newtons.

::grafico{vettori="0,1,3,1,A;3,-1,0,-1,B" assi=0 uguale=1 xmin=-1 xmax=5 ymin=-2 ymax=3 titolo="Two horizontal vectors of equal magnitude pointing in opposite senses."}
:::

## Vectors along a line

:::definizione{#componente-su-un-asse titolo="Component along an axis"}
To work with parallel vectors, we choose an axis, that is, a line with an origin and a positive direction. The **component** $A_x$ is the signed number that describes the vector along that axis and has the same unit as the vector.

If the positive direction is to the right, a vector of magnitude $5\,\mathrm{m}$ pointing right has $A_x=+5\,\mathrm{m}$. A vector of magnitude $5\,\mathrm{m}$ pointing left has $A_x=-5\,\mathrm{m}$. The magnitude is $5\,\mathrm{m}$ in both cases. The sign of the component tells us which way the vector points.

The **opposite vector** of $\vec{A}$, denoted by $-\vec{A}$, has the same magnitude and direction and the opposite sense. If $A_x=-5\,\mathrm{m}$, the component of the opposite vector is $+5\,\mathrm{m}$.
:::

:::teorema{#somma-collineare titolo="Sum of collinear vectors"}
Two vectors are **collinear** when both are parallel to the same line. If we choose an axis parallel to them, the component of their sum equals the sum of their signed components:
$$
R_x=A_x+B_x.
$$
The symbol $\vec{R}$ denotes the vector sum. Its magnitude is $R=|R_x|$, where the absolute value removes any negative sign. The sign of $R_x$ tells us which way the vector points.

Two displacements of $4\,\mathrm{m}$ and $3\,\mathrm{m}$, both to the right, give $R_x=4+3=7\,\mathrm{m}$. If the second displacement is to the left, the result is $R_x=4-3=1\,\mathrm{m}$. In the second case, the final point lies $1\,\mathrm{m}$ to the right of the starting point.
:::

:::attenzione{titolo="Magnitude and component"}
The magnitude of a vector is nonnegative. For two forces of $2\,\mathrm{N}$ to the right and $7\,\mathrm{N}$ to the left, taking the positive direction of the axis to be to the right gives
$$
R_x=2\,\mathrm{N}-7\,\mathrm{N}=-5\,\mathrm{N}.
$$
The resultant therefore has magnitude $5\,\mathrm{N}$ and points left. The value $-5\,\mathrm{N}$ is its component, whereas its magnitude is positive.
:::

## Vector addition in the plane

:::definizione{#somma-punta-coda titolo="Tip-to-tail rule"}
Two successive displacements can have different directions. To obtain the overall displacement, draw the second vector starting at the tip of the first. The **vector sum** is the arrow from the tail of the first vector to the tip of the second.

This construction is called the **tip-to-tail rule**. Moving a vector to construct the sum preserves its magnitude, direction, and sense. The same rule can be used to add three or more vectors by placing them one after another.

A path that runs $3\,\mathrm{m}$ east and then $4\,\mathrm{m}$ north ends northeast of the starting point. The distance traveled is $7\,\mathrm{m}$, while the length of the arrow from start to finish is $5\,\mathrm{m}$. The two quantities describe different aspects of the path.

::grafico{vettori="0,0,3,0,A;3,0,3,4,B;0,0,3,4,R" uguale=1 xmin=-1 xmax=5 ymin=-1 ymax=6 nomi="est,nord" titolo="Sum of a displacement of $3\,\mathrm{m}$ east and a displacement of $4\,\mathrm{m}$ north. Each unit on the axes represents $1\,\mathrm{m}$."}
:::

::::teorema{#somma-perpendicolare titolo="Sum of perpendicular vectors"}
If two vectors are perpendicular, meaning that they form a right angle, the magnitude of their sum is given by
$$
R=\sqrt{A^2+B^2}.
$$
The principal square root of a nonnegative number is the nonnegative number that, when multiplied by itself, gives the original number. For example, $\sqrt{25}=5$ because $5\cdot5=25$.

This relation gives the magnitude of the sum from just the magnitudes of the two perpendicular vectors. For $A=6\,\mathrm{m}$ and $B=8\,\mathrm{m}$, it gives $R=10\,\mathrm{m}$.

:::dimostrazione
Apply the Pythagorean theorem to the triangle formed using the tip-to-tail rule. The two perpendicular vectors are the legs, and the vector sum is the hypotenuse. Therefore
$$
R^2=A^2+B^2.
$$
Since the magnitude is nonnegative, taking the square root gives the stated relation.
:::
::::

## The components of a vector

:::definizione{#componenti-nel-piano titolo="Cartesian components"}
In the plane, choose two perpendicular axes, $x$ and $y$. The arrow representing a vector can be constructed by adding an arrow parallel to the $x$-axis and an arrow parallel to the $y$-axis. Their respective signed components are denoted by $A_x$ and $A_y$.

If $\vec{A}$ runs from the origin to the point with coordinates $(3\,\mathrm{m},4\,\mathrm{m})$, its components are $A_x=3\,\mathrm{m}$ and $A_y=4\,\mathrm{m}$. By the Pythagorean theorem, its magnitude is $5\,\mathrm{m}$. If the endpoint has a negative horizontal coordinate, $A_x$ is also negative.

The components describe which way the vector points without requiring an angle measurement. For example, $A_x=-3\,\mathrm{m}$ and $A_y=4\,\mathrm{m}$ indicate an arrow pointing up and to the left.

::grafico{vettori="0,0,-3,4,A;0,0,-3,0,Ax;0,0,0,4,Ay" segmenti="-3,0,-3,4;0,4,-3,4" uguale=1 xmin=-5 xmax=2 ymin=-1 ymax=6 titolo="A vector with components $A_x=-3\,\mathrm{m}$ and $A_y=4\,\mathrm{m}$. The projections show the two components."}
:::

:::teorema{#somma-per-componenti titolo="Vector addition using components"}
To add two vectors in the plane, add their components separately along each axis:
$$
R_x=A_x+B_x,
\qquad
R_y=A_y+B_y.
$$
The magnitude of the sum is therefore
$$
R=\sqrt{R_x^2+R_y^2}.
$$
Component pairs of $(2,1)$ and $(1,3)$, in meters, give $(3,4)$, so the magnitude of the sum is $5\,\mathrm{m}$. Each addition involves components along the same axis and of the same physical quantity.
:::

## Forces and how they are measured

:::definizione{#forza titolo="Force"}
A **force** describes an interaction between bodies that can change their motion or deform them. A hand exerts a force on a spring as it stretches it. Earth exerts a force on an object even without touching it.

Force is a vector quantity. Its unit in the International System of Units is the newton, with symbol $\mathrm{N}$. To describe a force, specify its magnitude, direction, sense, and the body on which it acts. When the size of the body matters, also specify the point of application. A push near a door hinge has a different effect on the door's rotation than the same push at the handle.

In the **point particle** model, the dimensions of the body are neglected for the problem under study. The forces on the particle add as vectors, and their sum is called the **resultant**. Two forces acting at the same point, one of $8\,\mathrm{N}$ to the right and one of $3\,\mathrm{N}$ to the left, have a resultant of $5\,\mathrm{N}$ to the right.
:::

:::definizione{#dinamometro titolo="Force gauge"}
A **force gauge** is an instrument that measures the magnitude of a force. A spring scale relates the deformation of a spring to a scale marked in newtons. The instrument is calibrated by comparing its readings with known forces.

If there are five equal intervals between $2\,\mathrm{N}$ and $3\,\mathrm{N}$, each interval represents $0.2\,\mathrm{N}$. A pointer on the second mark past $2\,\mathrm{N}$ therefore reads $2.4\,\mathrm{N}$. The reading is still a measurement with uncertainty, as discussed in the chapter on measurements.

The scale has a capacity, the maximum value it can measure. A spring scale with a capacity of $5\,\mathrm{N}$ gives readings within that range. A larger force requires an instrument with a higher capacity.
:::

## Mass and weight

:::definizione{#massa-e-peso titolo="Mass and weight"}
**Mass** $m$ is a property of a body and is measured in kilograms. **Weight** $\vec{P}$ is the gravitational force that Earth exerts on the body. Near Earth's surface, it acts vertically downward.

The magnitude of the weight is given by
$$
P=mg,
$$
where $g$ is the local acceleration due to gravity. Near Earth's surface we use $g=9.81\,\mathrm{m/s^2}$, equivalent to $9.81\,\mathrm{N/kg}$ when calculating weight. The meaning of acceleration is discussed in the chapter on acceleration and free fall.

For a mass of $2\,\mathrm{kg}$, this gives $P=19.62\,\mathrm{N}$. The relation also gives the mass from a known weight by dividing by $g$. For the same mass, a different value of $g$ at another location gives a different weight.
:::

:::esempio{titolo="The same mass at two locations"}
A body has a mass of $5\,\mathrm{kg}$. At a location where $g=10\,\mathrm{N/kg}$, its weight is $50\,\mathrm{N}$. At another location, where $g=2\,\mathrm{N/kg}$, its weight is $10\,\mathrm{N}$. Its mass remains $5\,\mathrm{kg}$. The gravitational force on the body changes because the value of $g$ changes.
:::

## Spring force

:::definizione{#allungamento titolo="Extension of a spring"}
The **natural length** $\ell_0$ is the length of the undeformed spring. If its length changes to $\ell$, its extension is
$$
\Delta\ell=\ell-\ell_0.
$$
The symbol $\Delta$, read as delta, denotes a change. A spring with a natural length of $12\,\mathrm{cm}$ that is stretched to $15\,\mathrm{cm}$ has an extension of $3\,\mathrm{cm}$, or $0.03\,\mathrm{m}$. Final length and extension are two different measurements.
:::

:::teorema{#legge-di-hooke titolo="Hooke's law"}
For a spring that obeys **Hooke's law**, within the range where the deformation is elastic and proportional to the force, the magnitude of the spring force is
$$
F_e=k\,\Delta\ell
$$
when the spring is stretched. The **spring constant** $k$ is positive and is measured in $\mathrm{N/m}$. The force exerted by the spring tends to restore its natural length. Therefore, if the free end of a spring fixed on the left is moved to the right, stretching the spring, the spring force on that end points to the left.

The law is based on experiments and holds within the range described. For $k=100\,\mathrm{N/m}$ and $\Delta\ell=0.02\,\mathrm{m}$, the magnitude is $2\,\mathrm{N}$. Doubling the extension to $0.04\,\mathrm{m}$ increases the force to $4\,\mathrm{N}$, provided the law still holds.

::grafico{f="0.1*x" xmin=0 xmax=60 ymin=0 ymax=7 nomi="Δℓ,F" legenda=0 titolo="A spring with $k=100\,\mathrm{N/m}$. Extension is in millimeters and force in newtons. An extension of $20\,\mathrm{mm}$ corresponds to a force of $2\,\mathrm{N}$."}
:::

:::osservazione{#formule-inverse-hooke titolo="Spring constant and extension"}
The same law can be used to find a quantity other than force. Dividing both sides by $k$ gives
$$
\Delta\ell=\frac{F_e}{k}.
$$
If a positive extension is known, dividing by it gives
$$
k=\frac{F_e}{\Delta\ell}.
$$
A spring force of magnitude $3\,\mathrm{N}$ at an extension of $0.015\,\mathrm{m}$ corresponds to $k=200\,\mathrm{N/m}$. For the same extension, a spring with a larger spring constant exerts a larger force. This comparison applies when both springs are within the range where the law holds.
:::
