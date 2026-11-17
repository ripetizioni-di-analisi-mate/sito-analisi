---
titolo: "Forces, weight, elasticity, and friction"
sommario: "Weight and mass, Hooke's law, contact reactions, and static and kinetic friction."
---

## Interactions and their representation

:::definizione{#forza titolo="Force as a vector quantity"}
A **force** describes the interaction of one body with another. A door receives a force from the hand pushing it. A stone released in a vacuum experiences Earth's gravitational force. The first interaction requires contact. The second also acts at a distance.

A force is represented by an arrow. When drawn to scale, its length represents the **magnitude**. The line along which it is drawn gives its direction. The arrowhead indicates its sense. The body that receives the force must also be specified. For example, the force of the hand on the door and the force of the door on the hand belong to two separate diagrams. In the chapter on rigid-body equilibrium, the position of the line of action relative to the pivot will matter.

The **newton**, with symbol $\mathrm N$, is the SI unit of force. Within its measuring range, a spring scale assigns to each extension of an elastic element the magnitude of the force that causes it.
:::

:::esempio{titolo="Two pulls on the same ring"}
Two horizontal cords pull a ring. The first pulls to the right with $8\,\mathrm N$ and the second pulls to the left with $5\,\mathrm N$. Take positive $x$ to the right. The components have opposite signs, so
$$
R_x=8\,\mathrm N-5\,\mathrm N=3\,\mathrm N.
$$
The positive sign shows that the resultant points to the right. Adding the magnitudes $8+5$ would describe two pulls in the same direction. In a scale drawing, the rightward arrow has length $8$ and the leftward arrow has length $5$ in the same drawing units.
:::

::grafico{assi=0 uguale=1 vettori="0,0,8,0,8 N;0,0,-5,0,5 N" punti="0,0,pieno,O" xmin=-7 xmax=10 ymin=-1.5 ymax=1.5 titolo="Opposite pulls applied to ring O, with lengths proportional to their magnitudes"}

## Weight and mass

:::definizione{#peso titolo="The local gravitational field"}
Mass $m$ is measured in kilograms. **Weight** is the gravitational force on a body at a given location. Near a planet's surface, in a sufficiently small region, the gravitational field has an approximately uniform local value $g$. The weight is vertical and directed downward, with magnitude
$$
P=mg.
$$
The value of $g$ is expressed in $\mathrm{N/kg}$. It gives the weight of one kilogram at that location. Since $\mathrm{kg}\cdot\mathrm{N/kg}=\mathrm N$, the product is a force. For a mass of $2\,\mathrm{kg}$, using $g=10\,\mathrm{N/kg}$ gives $P=20\,\mathrm N$. The value $10\,\mathrm{N/kg}$ is an approximation often used in exercises. Calculations use the stated or measured value.
:::

:::esempio{titolo="The same mass at two locations"}
A sample has a mass of $3\,\mathrm{kg}$. On Earth, with $g=10\,\mathrm{N/kg}$, it weighs $30\,\mathrm N$. Where $g=4\,\mathrm{N/kg}$ it weighs $12\,\mathrm N$. Since the mass is the same, the ratio of the weights equals the ratio of the field values, $12/30=4/10$. A comparison balance uses two weights in the same field. A spring scale graduated in newtons, by contrast, reports the force for which it was calibrated.
:::

::grafico{f="10*x;4*x" nomi="m (kg),P (N)" punti="3,30,pieno,A;3,12,pieno,B" xmin=0 xmax=5 ymin=0 ymax=55 titolo="Weight versus mass at two locations. At 3 kg the readings are 30 N at A and 12 N at B"}

## Springs and Hooke's law

::::teorema{#hooke titolo="Force proportional to deformation"}
Let $L_0$ be the unloaded length of a spring without preload, and let $L$ be its length under load. The **deformation** is $x=L-L_0$. Take the positive axis in the direction the moving end travels when the spring is extended. In the linear elastic range, the component of the elastic force on the moving end and its magnitude are
$$
F_{e,x}=-kx,\qquad F_e=k\lvert x\rvert,
$$
with $k>0$ in $\mathrm{N/m}$. When $x>0$, the spring pulls toward its natural length. When $x<0$, it pushes toward its natural length. The relation is an empirical model whose range of validity is established for the spring under study.

:::dimostrazione
Within the linear range, experimental measurements show that the magnitude of the force is proportional to the magnitude of the deformation. With positive $x$ for extension, the force points in the negative direction when $x>0$ and in the positive direction when $x<0$. The component with these signs and magnitude $k\lvert x\rvert$ is $-kx$.
:::
::::

:::esempio{titolo="Extension, compression, and scale"}
Consider a spring with $L_0=12\,\mathrm{cm}$ and $k=100\,\mathrm{N/m}$. At $15\,\mathrm{cm}$ its deformation is $x=3\,\mathrm{cm}=0.03\,\mathrm m$ and it pulls with component $-3\,\mathrm N$. At $10\,\mathrm{cm}$ its deformation is $x=-2\,\mathrm{cm}=-0.02\,\mathrm m$ and it pushes with component $+2\,\mathrm N$. Centimetres must be converted before multiplying by $k$, because the spring constant is stated per metre.
:::

::grafico{f="-x" nomi="x (cm),Fₑ (N)" punti="-2,2,pieno,C;3,-3,pieno,A" xmin=-4 xmax=5 ymin=-5 ymax=5 titolo="Elastic force component for k equal to 100 N/m. C shows compression and A shows extension"}

## Comparing and calibrating springs

:::osservazione{#taratura titolo="Slope of the force–extension graph"}
The graph of force magnitude against extension for $x\geq 0$ within the linear range is a straight line through the origin. The ratio $F/x$ can be calculated from a point with $x\ne0$. Another approach is to measure **the slope** between two well-separated points, giving $k=\dfrac{\Delta F}{\Delta x}$. A small reading error has less effect on the gradient when the measured differences are large compared with the instrument's resolution.

If the horizontal axis shows length $L$, the law reads $F=k(L-L_0)$ for $L\geq L_0$. The slope is still $k$ and the horizontal intercept is at $L_0$. The spring constant measures stiffness. Under the same force, the stiffer spring deforms less.
:::

:::esempio{titolo="Calibration without directly measuring the natural length"}
A spring is $14\,\mathrm{cm}$ long under a tension of $4\,\mathrm N$ and $17\,\mathrm{cm}$ long under $10\,\mathrm N$. Both readings are within the linear range. The force increases by $6\,\mathrm N$ for a length increase of $0.03\,\mathrm m$, giving $k=200\,\mathrm{N/m}$. Under $4\,\mathrm N$ the deformation is $0.02\,\mathrm m$. The natural length is therefore $14\,\mathrm{cm}-2\,\mathrm{cm}=12\,\mathrm{cm}$. Substituting the second length checks the result, since $0.05\,\mathrm m\cdot200\,\mathrm{N/m}=10\,\mathrm N$.
:::

::grafico{f="2*(x-12)" nomi="L (cm),F (N)" punti="12,0,pieno,O;14,4,pieno,A;17,10,pieno,B" xmin=12 xmax=18 ymin=0 ymax=13 titolo="Calibration from measurements A and B. The natural length is read at the horizontal intercept O"}

## Normal reaction and tension

:::definizione{#contatto titolo="Constraint forces"}
The **normal reaction** is the component of the contact force perpendicular to the surface. In a non-adhesive contact, the surface can push the body outward. The normal reaction therefore has magnitude $N\geq0$. A taut ideal cord, meanwhile, pulls along the cord from the body toward the support. Its magnitude is called **tension** and denoted $T$.

If an object is at rest on a horizontal table under only its weight and the normal reaction, the two vertical forces balance and $N=P$. An upward pull from a cord reduces the normal reaction to $N=P-T$ so long as this value remains positive. If a downward vertical push of magnitude $S$ is added instead, $N=P+S$. The equations use the components of *all* the vertical forces on the selected body.
:::

:::esempio{titolo="When the cord supports part of the load"}
A stationary crate weighs $60\,\mathrm N$. A vertical cord pulls on it with tension $25\,\mathrm N$. Taking upward as positive, $N+25\,\mathrm N-60\,\mathrm N=0$, so $N=35\,\mathrm N$. The table carries $35\,\mathrm N$ of the load and the cord carries $25\,\mathrm N$. At a tension of $60\,\mathrm N$ the normal reaction reaches zero. Beyond this threshold the table cannot keep the crate supported within the stated model.
:::

::grafico{f="60-x" nomi="T (N),N (N)" punti="0,60,pieno;25,35,pieno,A;60,0,pieno,B" xmin=0 xmax=70 ymin=0 ymax=65 titolo="Normal reaction for a stationary crate weighing 60 N. At B the cord supports the full weight"}

## Sliding friction

:::definizione{#attrito titolo="Actual static friction and its limit"}
**Sliding friction** here describes the component of the contact force parallel to the surface. When there is no sliding, static friction acts against the tendency to slide. In the Coulomb friction model its magnitude $f_s$ satisfies
$$
0\leq f_s\leq\mu_s N.
$$
Here $\mu_s$ is the static coefficient. It has no units because it is a ratio of forces. The actual value is obtained from the balance of tangential components. The upper limit $\mu_sN$ is reached on the point of slipping. If the required friction exceeds that limit, the body cannot remain at rest.

When the surfaces slide relative to each other, the **kinetic friction** model gives magnitude $f_d=\mu_d N$. The force opposes the relative sliding velocity. A moving belt underneath a body can exert friction on the body in the same direction as the belt's motion relative to the ground. What matters is the motion of the body *relative to the belt*.
:::

:::esempio{titolo="Measuring static and kinetic friction"}
A block has $N=40\,\mathrm N$, $\mu_s=0.4$, and $\mu_d=0.25$. A horizontal pull of $6\,\mathrm N$ requires $6\,\mathrm N$ of static friction in the opposite direction. The limit is $0.4\cdot40\,\mathrm N=16\,\mathrm N$, so the block can stay at rest. As the pull is increased quasi-statically, the friction follows it up to $16\,\mathrm N$. When the block slides relative to the surface, the model gives kinetic friction $0.25\cdot40\,\mathrm N=10\,\mathrm N$. The second value is measured while the block is sliding, the first just before it starts to slide.
:::

::grafico{f="x" nomi="F (N),fₛ (N)" punti="6,6,pieno,A;16,16,pieno,B" xmin=0 xmax=16 ymin=0 ymax=18 titolo="Static friction for a block with normal reaction of 40 N. B marks the 16 N limit"}

## Applying a model correctly

:::osservazione{#modelli titolo="Assumptions and physical checks"}
To choose the law, first identify the interaction behind the force. The weight law uses the local field. The spring law uses a deformation within the linear range. For contact forces, check the admissible direction of the normal reaction. For friction, decide whether the surfaces remain stationary relative to each other or slide. The same object can have its weight, normal reaction, and friction in one diagram because it receives forces from different bodies.

Checking units helps to spot an incorrect model or conversion. In $F=kx$ the result must be in newtons, so $k$ and $x$ must be expressed with the same unit of length. Checking the sign is a separate operation. A negative component of an elastic force can be physically correct. A negative normal reaction for a simple support, on the other hand, shows that the proposed contact equilibrium is inadmissible.
:::

:::attenzione
Maximum and actual static friction coincide only at the slipping threshold. For instance, with $\mu_s N=16\,\mathrm N$ and a horizontal pull of $6\,\mathrm N$, friction of $16\,\mathrm N$ would leave a net force of $10\,\mathrm N$ opposite the pull. Equilibrium instead requires $6\,\mathrm N$ of friction.
:::
