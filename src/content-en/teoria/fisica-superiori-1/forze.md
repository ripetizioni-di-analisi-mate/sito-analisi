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

:::esempio{titolo="Two carts and the system boundary"}
Two carts $A$ and $B$ are connected by a taut string of negligible mass. Cart $A$ is pulled to the right by a towing force of $14\,\mathrm N$. The floor exerts resistive forces of $2\,\mathrm N$ on $A$ and $3\,\mathrm N$ on $B$, both to the left. The string pulls $A$ to the left and $B$ to the right with tension $T$. Take the towing direction as positive. Separate force diagrams give the two balances

$$
R_{A,x}=(14-2)\,\mathrm N-T,\qquad
R_{B,x}=T-3\,\mathrm N.
$$

If the system comprises both carts, the two string forces cancel in the sum. The net external horizontal force is $9\,\mathrm N$ to the right. Finding the resultant for either cart alone requires the tension. If a sensor reads $T=6\,\mathrm N$, the resultants on the two carts are $6\,\mathrm N$ and $3\,\mathrm N$. The two tension arrows act on different bodies and can be summed only when the system boundary contains both bodies.
:::

## Weight and mass

:::definizione{#peso titolo="The local gravitational field"}
Mass $m$ is measured in kilograms. **Weight** is the gravitational force on a body at a given location. Near a planet's surface, in a sufficiently small region, the gravitational field has an approximately uniform local value $g$. The weight is vertical and directed downward, with magnitude
$$
P=mg.
$$
The value of $g$ is expressed in $\mathrm{N/kg}$. It gives the weight of one kilogram at that location. Since $\mathrm{kg}\cdot\mathrm{N/kg}=\mathrm N$, the product is a force. For a mass of $2\,\mathrm{kg}$, using $g=10\,\mathrm{N/kg}$ gives $P=20\,\mathrm N$. The value $10\,\mathrm{N/kg}$ is an approximation often used in exercises. Calculations use the stated or measured value.
:::

:::esempio{titolo="The same mass at two locations"}
A sample has a mass of $3\,\mathrm{kg}$. On Earth, with $g=10\,\mathrm{N/kg}$, it weighs $30\,\mathrm N$. Where $g=4\,\mathrm{N/kg}$ it weighs $12\,\mathrm N$. Since the mass is the same, the ratio of the weights equals the ratio of the field values, $\dfrac{12}{30}=\dfrac{4}{10}$. A two-pan balance compares two weights in the same field and gives their mass ratio. A spring scale graduated in newtons reports the force that stretches it.
:::

::grafico{f="10*x;4*x" nomi="m (kg),P (N)" punti="3,30,pieno,A;3,12,pieno,B" xmin=0 xmax=5 ymin=0 ymax=55 titolo="Weight versus mass at two locations. At 3 kg the readings are 30 N at A and 12 N at B"}

:::esempio{titolo="Estimating the field with a zero offset"}
A spring scale gives a reading $P_\mathrm{lett}=gm+b$, where $b$ is a fixed zero offset. When masses of $0.50\,\mathrm{kg}$ and $1.50\,\mathrm{kg}$ are suspended one at a time, the readings are $7\,\mathrm N$ and $17\,\mathrm N$, respectively. Because the offset is the same in both trials, dividing the change in reading by the extra kilogram gives

$$
g=\frac{17-7}{1.50-0.50}\,\mathrm{N/kg}=10\,\mathrm{N/kg}.
$$

From the first trial, $b=7\,\mathrm N-0.50\,\mathrm{kg}\cdot g=2\,\mathrm N$. In this model, the slope measures the field and the intercept measures the instrument offset. Dividing the reading by the mass for one sample would confound the two effects.

::grafico{f="10*x+2;10*x" nomi="m (kg),P (N)" punti="0,2,pieno;0.5,7,pieno,A;1.5,17,pieno,B" legenda="\text{reading};\text{weight}" xmin=0 xmax=2 ymin=0 ymax=24 titolo="The 2 N offset shifts the line upwards and leaves its slope unchanged."}
:::

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

:::osservazione{titolo="Two stretched springs on opposite sides of a ring"}
A ring is pulled to the left by a spring of stiffness $k_\mathrm s$ and to the right by a spring of stiffness $k_\mathrm d$. At equilibrium the two tensions have equal magnitude $T_0$. When the ring is displaced by $u>0$ to the right, the left spring extends by a further $u$ and the right spring shortens by $u$. If both stay stretched and in their linear ranges, the component of the total force is

$$
F_x=(T_0-k_\mathrm d u)-(T_0+k_\mathrm s u)
=-(k_\mathrm s+k_\mathrm d)u.
$$

For $T_0=6\,\mathrm N$, $k_\mathrm s=100\,\mathrm{N/m}$, $k_\mathrm d=300\,\mathrm{N/m}$ and $u=0.01\,\mathrm m$, the tensions are $7\,\mathrm N$ to the left and $3\,\mathrm N$ to the right. The $4\,\mathrm N$ resultant points towards the starting position.

::grafico{curve="t,6+t,0,2;t,6-3*t,0,2" nomi="u (cm),T (N)" punti="0,6,pieno;1,7,pieno,A;1,3,pieno,B" legenda="T_\mathrm s;T_\mathrm d" xmin=0 xmax=2.35 ymin=0 ymax=9 titolo="Moving the ring increases the leftward pull and decreases the rightward pull. A and B give the magnitudes after 1 cm."}
:::

## Comparing and calibrating springs

:::osservazione{#taratura titolo="Slope of the force–extension graph"}
The graph of force magnitude against extension for $x\geq 0$ within the linear range is a straight line through the origin. The ratio $\dfrac{F}{x}$ of the vertical and horizontal coordinates can be calculated from a point with $x\ne0$. Two well-separated points give **the slope**, $k=\dfrac{\Delta F}{\Delta x}$. A small reading error has less effect on the slope when the measured differences are large compared with the instrument's resolution.

If the horizontal axis shows length $L$, the law reads $F=k(L-L_0)$ for $L\geq L_0$. The slope is still $k$ and the horizontal intercept is at $L_0$. The spring constant measures stiffness. Under the same force, the stiffer spring deforms less.
:::

:::esempio{titolo="Calibration without directly measuring the natural length"}
A spring is $14\,\mathrm{cm}$ long under a tension of $4\,\mathrm N$ and $17\,\mathrm{cm}$ long under $10\,\mathrm N$. Both readings are within the linear range. The force increases by $6\,\mathrm N$ for a length increase of $0.03\,\mathrm m$, giving $k=200\,\mathrm{N/m}$. Under $4\,\mathrm N$ the deformation is $0.02\,\mathrm m$. The natural length is therefore $14\,\mathrm{cm}-2\,\mathrm{cm}=12\,\mathrm{cm}$. Substituting the second length checks the result, since $0.05\,\mathrm m\cdot200\,\mathrm{N/m}=10\,\mathrm N$.
:::

::grafico{f="2*(x-12)" nomi="L (cm),F (N)" punti="12,0,pieno,O;14,4,pieno,A;17,10,pieno,B" xmin=12 xmax=18 ymin=0 ymax=13 titolo="Calibration from measurements A and B. The natural length is read at the horizontal intercept O"}

:::attenzione
The constant found from two points is the slope of the secant through those points. To extend the model to other loads, check whether further measurements agree with the same line within the instrument's resolution. At extensions of $2\,\mathrm{cm}$ and $4\,\mathrm{cm}$, the measured tensions are $6\,\mathrm N$ and $12\,\mathrm N$, respectively. The model predicts $18\,\mathrm N$ at $6\,\mathrm{cm}$. A reading of $15\,\mathrm N$ at a resolution of $0.1\,\mathrm N$ is incompatible with that prediction. If the natural length is recovered at the end of the test, the measured deformation is reversible. Recovery of the natural length alone does not establish proportionality.

::grafico{f="3*x" nomi="x (cm),F (N)" punti="2,6,pieno;4,12,pieno;6,15,pieno,M;6,18,vuoto,R" legenda="\text{linear model}" xmin=0 xmax=7 ymin=0 ymax=23 titolo="M is the reading at 6 cm. R is the prediction obtained by extending the line through the first two readings."}
:::

## Normal reaction and tension

:::definizione{#contatto titolo="Constraint forces"}
The **normal reaction** is the component of the contact force perpendicular to the surface. In a non-adhesive contact, the surface can push the body outward. The normal reaction therefore has magnitude $N\geq0$. A taut ideal cord, meanwhile, pulls along the cord from the body toward the support. Its magnitude is called **tension** and denoted $T$.

If an object is at rest on a horizontal table under only its weight and the normal reaction, the two vertical forces balance and $N=P$. An upward pull from a cord reduces the normal reaction to $N=P-T$ so long as this value remains positive. If a downward vertical push of magnitude $S$ is added instead, $N=P+S$. The equations use the components of *all* the vertical forces on the selected body.
:::

:::esempio{titolo="When the cord supports part of the load"}
A stationary crate weighs $60\,\mathrm N$. A vertical cord pulls on it with tension $25\,\mathrm N$. Taking upward as positive, $N+25\,\mathrm N-60\,\mathrm N=0$, so $N=35\,\mathrm N$. The table carries $35\,\mathrm N$ of the load and the cord carries $25\,\mathrm N$. At a tension of $60\,\mathrm N$ the normal reaction reaches zero. Beyond this threshold the table cannot keep the crate supported within the stated model.
:::

::grafico{linee="0,60 60,0" nomi="T (N),N (N)" punti="0,60,pieno;25,35,pieno,A;60,0,pieno,B" xmin=0 xmax=70 ymin=0 ymax=65 titolo="Normal reaction for a stationary crate weighing 60 N. At B the cord supports the full weight and the branch for equilibrium with support ends."}

:::esempio{titolo="The reading under two boxes"}
A box weighing $40\,\mathrm N$ rests on a horizontal platform. The box stacked on top weighs $18\,\mathrm N$ and a rope pulls it vertically upwards with $6\,\mathrm N$. Equilibrium of the upper box alone gives $N_\mathrm{tra}=18\,\mathrm N-6\,\mathrm N=12\,\mathrm N$. For the two boxes together, the force between them is internal. Subtracting the tension from the sum of the weights gives the load on the platform

$$
N_\mathrm{base}=(40+18-6)\,\mathrm N=52\,\mathrm N.
$$

The normal force between the boxes is $12\,\mathrm N$ and the one at the base is $52\,\mathrm N$. Adding the lower box's own weight to the $12\,\mathrm N$ it receives from the upper box gives the platform reading again.

If the tension is increased to $18\,\mathrm N$, the force between the boxes falls to zero. At that instant the platform supports only the lower box. The plotted lines apply up to this threshold, when the upper box can lose contact.

::grafico{f="58-x;18-x" nomi="T (N),N (N)" punti="6,52,pieno,A;6,12,pieno,B;18,40,pieno;18,0,pieno" legenda="N_\mathrm{base};N_\mathrm{tra}" xmin=0 xmax=18 ymin=0 ymax=63 titolo="The normal forces decrease as the upward tension increases. Their difference is the 40 N weight of the lower box."}
:::

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

:::esempio{titolo="An admissible interval of forces"}
A spring pulls a stationary block to the left with $10\,\mathrm N$. A horizontal rope pulls to the right with adjustable force $F$. The static friction limit at the contact is $4\,\mathrm N$. Taking right as positive, the frictional component required for rest is $f_x=10\,\mathrm N-F$. The constraint $|f_x|\leq4\,\mathrm N$ gives

$$
6\,\mathrm N\leq F\leq14\,\mathrm N.
$$

At $F=10\,\mathrm N$ the spring and rope already balance, so friction is zero. At the lower limit friction points to the right, and at the upper limit it points to the left. It can reverse because it opposes the tendency for the surfaces to slide relative to one another.

::grafico{f="10-x" nomi="F (N),fₓ (N)" segmenti="6,-5,6,4;14,-4,14,5" punti="6,4,pieno,A;10,0,pieno;14,-4,pieno,B" xmin=4 xmax=16 ymin=-6 ymax=6 titolo="Friction required for rest. Only the segment between A and B is admissible."}
:::

## Applying a model correctly

:::osservazione{#modelli titolo="Assumptions and physical checks"}
To choose the law, first identify the interaction behind the force. The weight law uses the local field. The spring law uses a deformation within the linear range. For contact forces, check the admissible direction of the normal reaction. For friction, decide whether the surfaces remain stationary relative to each other or slide. The same object can have its weight, normal reaction, and friction in one diagram because it receives forces from different bodies.

Checking units helps to spot an incorrect model or conversion. In $F=kx$ the result must be in newtons, so $k$ and $x$ must be expressed with the same unit of length. Checking the sign is a separate operation. A negative component of an elastic force can be physically correct. A negative normal reaction for a simple support, on the other hand, shows that the proposed contact equilibrium is inadmissible.
:::

:::attenzione
Maximum and actual static friction coincide only at the slipping threshold. For instance, with $\mu_s N=16\,\mathrm N$ and a horizontal pull of $6\,\mathrm N$, friction of $16\,\mathrm N$ would leave a net force of $10\,\mathrm N$ opposite the pull. Equilibrium instead requires $6\,\mathrm N$ of friction.
:::
