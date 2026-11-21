---
titolo: "Forces, weight, elasticity, and friction"
sommario: "Weight and mass, Hooke's law, contact reactions, and static and kinetic friction."
---

## Interactions and their representation

:::definizione{#forza titolo="Force as a vector quantity"}
A **force** is a push or a pull that one body exerts on another body. A hand pushing a door exerts a force on the door. The Earth pulls a released stone downwards, so it exerts a force on the stone. Every force comes from an **interaction**, that is, from the action between two bodies.

- The force of the hand on the door is a **contact force**, because it exists only while the hand touches the door.
- The force of the Earth on the stone is a **force at a distance**, because the Earth pulls the stone without touching it. The stone receives it even in a vacuum, where there is no air. A magnet also attracts a paper clip without touching it.

Force is a **vector quantity**, that is, a quantity described by three pieces of information. It is therefore drawn as an arrow.

- The **magnitude** is the value of the force, given by a number with its unit. In a scale drawing it is the length of the arrow. If $1\,\mathrm{cm}$ on the drawing represents $4\,\mathrm N$, a force of $12\,\mathrm N$ is an arrow $3\,\mathrm{cm}$ long.
- The **direction** is the line along which the arrow is drawn, for example horizontal or vertical. This line is called the line of action.
- The **sense** is shown by the arrowhead. On a horizontal line there are two senses, to the right and to the left.

For every force, the body that receives it is also stated. A drawing of a single body with the arrows of the forces it receives is called a **force diagram**. The force of the hand on the door belongs to the diagram of the door. The force of the door on the hand belongs to the diagram of the hand. In the chapter on rigid-body equilibrium, the position of the line of action relative to the pivot will be used. The pivot is the point about which the body rotates, like the hinge of a door.

The **newton**, with symbol $\mathrm N$, is the unit of force in the International System (SI), the set of units used in the sciences, to which the metre and the kilogram also belong.

The **spring scale** is the instrument that measures forces. It contains a spring, and each extension of the spring corresponds to a value in newtons marked on the scale. The correspondence holds within the measuring range of the instrument, that is, between zero and the last value on the scale.

When all the forces lie on the same line, a positive sense is chosen on that line. The line with the chosen sense is called an axis and is denoted by a letter, for example $x$. The **component** of a force along the axis is its magnitude with the sign $+$ if the force points in the positive sense, and with the sign $-$ if it points in the opposite sense. The **resultant** is the single force equivalent to all the forces acting on the body. Its component is the sum of the components of the individual forces and is written $R_x$.
:::

:::esempio{titolo="Two pulls on the same ring"}
Two horizontal cords pull a ring. The first pulls to the right with $8\,\mathrm N$ and the second pulls to the left with $5\,\mathrm N$. Take positive $x$ to the right. The first force points in the positive sense and has component $+8\,\mathrm N$. The second points in the opposite sense and has component $-5\,\mathrm N$. The component of the resultant is their sum.
$$
R_x=8\,\mathrm N-5\,\mathrm N=3\,\mathrm N.
$$
The positive sign shows that the resultant points to the right. The sum of the magnitudes, $8\,\mathrm N+5\,\mathrm N=13\,\mathrm N$, is the resultant of two pulls in the same sense. In a scale drawing, the rightward arrow has length $8$ and the leftward arrow has length $5$ in the same drawing units.
:::

::grafico{assi=0 uguale=1 vettori="0,0,8,0,8 N;0,0,-5,0,5 N" punti="0,0,pieno,O" xmin=-7 xmax=10 ymin=-1.5 ymax=1.5 titolo="Opposite pulls applied to ring O, with lengths proportional to their magnitudes"}

:::esempio{titolo="Two perpendicular forces"}
A sledge receives a horizontal force with component $F_x=6\,\mathrm N$ and a vertical force with component $F_y=-8\,\mathrm N$. The two arrows are perpendicular, that is, they form a right angle. They are the two shorter sides of a right-angled triangle and the resultant is its hypotenuse. By Pythagoras' theorem, the magnitude of the resultant is
$$
R=\sqrt{(6\,\mathrm N)^2+(-8\,\mathrm N)^2}=\sqrt{36+64}\,\mathrm N=\sqrt{100}\,\mathrm N=10\,\mathrm N.
$$
:::

:::esempio{titolo="Two carts and the system boundary"}
Two carts $A$ and $B$ are connected by a taut string. The string has negligible mass, that is, a mass so small that its weight is not counted. A towing force of $14\,\mathrm N$ pulls $A$ to the right. The floor exerts resistive forces of $2\,\mathrm N$ on $A$ and $3\,\mathrm N$ on $B$, both to the left. The string pulls $A$ to the left and $B$ to the right with a force of the same magnitude $T$, which is called the tension. The towing sense is taken as positive. Cart $A$ receives $+14\,\mathrm N$ from the tow, $-2\,\mathrm N$ from the floor and $-T$ from the string, while cart $B$ receives $+T$ from the string and $-3\,\mathrm N$ from the floor. The force diagrams of the two carts therefore give

$$
R_{A,x}=(14-2)\,\mathrm N-T,\qquad
R_{B,x}=T-3\,\mathrm N.
$$

The **system** is the set of bodies chosen for study. If the system comprises both carts, the string forces are **internal forces**, because they are exchanged between parts of the system. The tow and the resistive forces of the floor are **external forces**, because they come from bodies that are not part of the system. When the two resultants are added, the terms $-T$ and $+T$ cancel and the resultant of the external forces remains, $(14-2-3)\,\mathrm N=9\,\mathrm N$ to the right. The resultant on one cart alone requires the value of the tension. If a sensor reads $T=6\,\mathrm N$, the results are $R_{A,x}=12\,\mathrm N-6\,\mathrm N=6\,\mathrm N$ and $R_{B,x}=6\,\mathrm N-3\,\mathrm N=3\,\mathrm N$. The two tension arrows act on different bodies, so they are summed only when the system boundary contains both bodies.
:::

## Weight and mass

:::definizione{#peso titolo="The local gravitational field"}
The **mass** $m$ is the quantity of matter in a body. It is measured in kilograms, with symbol $\mathrm{kg}$, and stays the same at any location. The **weight** is the gravitational force with which the planet pulls the body at the place where it is. Weight is measured in newtons. Its direction is vertical and its sense is downwards.

The **gravitational field** $g$ of a location is the weight of one kilogram at that location. It is measured in $\mathrm{N/kg}$, read "newtons per kilogram". Near the Earth's surface it is about $9.81\,\mathrm{N/kg}$. The value is *local*, that is, it refers to one location. In a region that is small compared with the planet, $g$ is approximately *uniform*, that is, it has the same value at every point.

If one kilogram weighs $g$ newtons, $m$ kilograms weigh $m$ times as much. The magnitude of the weight is therefore the product of the mass and the field.
$$
P=mg.
$$
For a body of mass $2\,\mathrm{kg}$, using $g=10\,\mathrm{N/kg}$, the result is $P=2\,\mathrm{kg}\cdot10\,\mathrm{N/kg}=20\,\mathrm N$. Since $\mathrm{kg}\cdot\mathrm{N/kg}=\mathrm N$, the product is a force. The same formula gives the mass, $m=\dfrac{P}{g}$, and the field, $g=\dfrac{P}{m}$. A body that weighs $60\,\mathrm N$ where $g=10\,\mathrm{N/kg}$ has mass $\dfrac{60\,\mathrm N}{10\,\mathrm{N/kg}}=6\,\mathrm{kg}$.

The value $10\,\mathrm{N/kg}$ is an approximation of $9.81\,\mathrm{N/kg}$ used in many exercises. Calculations use the value stated in the text or measured.
:::

:::esempio{titolo="The same mass at two locations"}
A sample, that is, an object used for a measurement, has a mass of $3\,\mathrm{kg}$. On Earth, with $g=10\,\mathrm{N/kg}$, it weighs $3\,\mathrm{kg}\cdot10\,\mathrm{N/kg}=30\,\mathrm N$. Where $g=4\,\mathrm{N/kg}$ it weighs $3\,\mathrm{kg}\cdot4\,\mathrm{N/kg}=12\,\mathrm N$. The mass is the same at the two locations, so the ratio of the weights equals the ratio of the field values.
$$
\frac{12\,\mathrm N}{30\,\mathrm N}=\frac{2}{5},\qquad
\frac{4\,\mathrm{N/kg}}{10\,\mathrm{N/kg}}=\frac{2}{5}.
$$
A two-pan balance compares the weights of two bodies at the same location. In the ratio of the two weights the field $g$ appears in both the numerator and the denominator and cancels, so the balance compares the masses and gives the same result at every location. A spring scale graduated in newtons shows instead the force that stretches it.
:::

::grafico{f="10*x;4*x" nomi="m (kg),P (N)" punti="3,30,pieno,A;3,12,pieno,B" xmin=0 xmax=5 ymin=0 ymax=55 titolo="Weight versus mass at two locations. At 3 kg the readings are 30 N at A and 12 N at B"}

:::esempio{titolo="Estimating the field with a zero offset"}
The spring scale in this example, with no load, reads a value $b$ different from zero, which is called the zero offset and is added to every measurement. The reading $P_\mathrm{lett}$ is therefore the sum of the weight $gm$ and the offset.
$$
P_\mathrm{lett}=gm+b.
$$
When masses of $0.50\,\mathrm{kg}$ and $1.50\,\mathrm{kg}$ are suspended one at a time, the readings are $7\,\mathrm N$ and $17\,\mathrm N$, respectively. The offset is the same in both trials, so the increase in the reading is the weight of the added mass alone. The field is obtained by dividing the change in reading by the added mass.

$$
g=\frac{17-7}{1.50-0.50}\,\mathrm{N/kg}=\frac{10}{1.00}\,\mathrm{N/kg}=10\,\mathrm{N/kg}.
$$

In the first trial the weight is $0.50\,\mathrm{kg}\cdot10\,\mathrm{N/kg}=5\,\mathrm N$. The offset is the difference between reading and weight, so $b=7\,\mathrm N-5\,\mathrm N=2\,\mathrm N$.

In the graph the reading is a straight line. The **slope** of a line is the increase of the quantity on the vertical axis for each extra unit on the horizontal axis. Here the slope is $10\,\mathrm{N/kg}$ and measures the field. The **intercept** is the value read at $m=0$. Here it is $2\,\mathrm N$ and measures the instrument offset. Dividing the first reading alone by the mass gives $\dfrac{7\,\mathrm N}{0.50\,\mathrm{kg}}=14\,\mathrm{N/kg}$, a value that contains both the field and the offset.

::grafico{f="10*x+2;10*x" nomi="m (kg),P (N)" punti="0,2,pieno;0.5,7,pieno,A;1.5,17,pieno,B" legenda="\text{reading};\text{weight}" xmin=0 xmax=2 ymin=0 ymax=24 titolo="The 2 N offset shifts the line upwards and leaves its slope unchanged."}
:::

## Springs and Hooke's law

::::teorema{#hooke titolo="Force proportional to deformation"}
**Hooke's law** gives the force that a pulled or compressed spring exerts on whatever deforms it. Three quantities are needed.

- The **unloaded length** $L_0$ is the length of the spring when no force pulls or compresses it. It is also called the natural length or the length at rest.
- $L$ is the length of the spring under load, that is, while a force deforms it.
- The **deformation** is the difference $x=L-L_0$. It is positive if the spring is extended and negative if it is compressed.

The spring considered has no preload, that is, it exerts no force at its unloaded length.

One end of the spring is fixed and the other is free to move. The axis is oriented in the sense in which the moving end travels when the spring extends. The **linear elastic range** is the interval of deformations in which the force is directly proportional to the deformation, that is, it doubles when the deformation doubles. In this range the elastic force on the moving end has component $F_{e,x}$ and magnitude $F_e$ given by
$$
F_{e,x}=-kx,\qquad F_e=k\lvert x\rvert,
$$
with $k>0$ in $\mathrm{N/m}$. The subscript $e$ stands for elastic. The symbol $\lvert x\rvert$ is the absolute value of $x$, that is, the number $x$ without its sign. The constant $k$ is called the **spring constant** or **stiffness** and gives the number of newtons needed to deform the spring by one metre.

The minus sign shows that the force has the sense opposite to the deformation. When $x>0$, the spring pulls toward its natural length. When $x<0$, it pushes toward its natural length. For this reason the elastic force is also called a restoring force.

The magnitude gives the deformation, $\lvert x\rvert=\dfrac{F_e}{k}$, and the constant, $k=\dfrac{F_e}{\lvert x\rvert}$. A spring with $k=200\,\mathrm{N/m}$ pulled with $10\,\mathrm N$ extends by $\dfrac{10\,\mathrm N}{200\,\mathrm{N/m}}=0.05\,\mathrm m$.

The relation is an empirical model, that is, a law obtained from measurements. Its range of validity is established for the spring under study. Beyond the **elastic limit** the spring, once released, stays longer than before and the law no longer describes it. An ideal spring is a spring of negligible mass that follows the law exactly.

:::dimostrazione
Measurements within the linear range show that the magnitude of the force is directly proportional to the magnitude of the deformation. The ratio of the two magnitudes is therefore a positive constant $k$, and $F_e=k\lvert x\rvert$.

Positive $x$ was chosen for extension. If $x>0$, the spring pulls the end backwards, so the force points in the negative sense and its component is $-k\lvert x\rvert=-kx$. If $x<0$, the spring pushes the end forwards, so the force points in the positive sense and its component is $+k\lvert x\rvert$. Since $\lvert x\rvert=-x$ when $x<0$, the component is $-kx$ in this case too.
:::
::::

:::esempio{titolo="Extension, compression, and scale"}
Consider a spring with $L_0=12\,\mathrm{cm}$ and $k=100\,\mathrm{N/m}$. The constant is given in newtons per metre, so the deformation is expressed in metres before multiplying by $k$, knowing that $1\,\mathrm{cm}=0.01\,\mathrm m$.

At $15\,\mathrm{cm}$ the spring is extended and has deformation $x=15\,\mathrm{cm}-12\,\mathrm{cm}=3\,\mathrm{cm}=0.03\,\mathrm m$. The component of the force is
$$
F_{e,x}=-100\,\mathrm{N/m}\cdot0.03\,\mathrm m=-3\,\mathrm N.
$$
The spring pulls in the negative sense.

At $10\,\mathrm{cm}$ it is compressed and its deformation is $x=10\,\mathrm{cm}-12\,\mathrm{cm}=-2\,\mathrm{cm}=-0.02\,\mathrm m$. The component of the force is
$$
F_{e,x}=-100\,\mathrm{N/m}\cdot(-0.02\,\mathrm m)=+2\,\mathrm N.
$$
The spring pushes in the positive sense.

In the graph the deformation is in centimetres. A constant of $100\,\mathrm{N/m}$ is equivalent to $1\,\mathrm N$ for each centimetre, because one metre contains $100$ centimetres.
:::

::grafico{f="-x" nomi="x (cm),Fₑ (N)" punti="-2,2,pieno,C;3,-3,pieno,A" xmin=-4 xmax=5 ymin=-5 ymax=5 titolo="Elastic force component for k equal to 100 N/m. C shows compression and A shows extension"}

:::osservazione{titolo="Two stretched springs on opposite sides of a ring"}
A ring is pulled to the left by a spring of stiffness $k_\mathrm s$ and to the right by a spring of stiffness $k_\mathrm d$. The subscripts $\mathrm s$ and $\mathrm d$ stand for left and right (*sinistra* and *destra* in Italian). Both springs are extended. At the equilibrium position the ring is at rest and the two tensions have the same magnitude $T_0$.

The ring is displaced by $u$ to the right. The left spring extends by a further $u$, so its tension increases by $k_\mathrm s u$. The right spring shortens by $u$, so its tension decreases by $k_\mathrm d u$.

For $T_0=6\,\mathrm N$, $k_\mathrm s=100\,\mathrm{N/m}$, $k_\mathrm d=300\,\mathrm{N/m}$ and $u=0.01\,\mathrm m$ the magnitudes of the two tensions are
$$
T_\mathrm s=6\,\mathrm N+100\,\mathrm{N/m}\cdot0.01\,\mathrm m=7\,\mathrm N,\qquad
T_\mathrm d=6\,\mathrm N-300\,\mathrm{N/m}\cdot0.01\,\mathrm m=3\,\mathrm N.
$$
With the positive sense to the right, the component of the total force is $3\,\mathrm N-7\,\mathrm N=-4\,\mathrm N$. The $4\,\mathrm N$ resultant points to the left, that is, towards the starting position.

In letters, if both springs stay stretched and in their linear ranges, the same calculation gives

$$
F_x=(T_0-k_\mathrm d u)-(T_0+k_\mathrm s u)
=-(k_\mathrm s+k_\mathrm d)u.
$$

The two stiffnesses add, as for two springs side by side between the same supports (springs in parallel), which extend by the same amount $x$ and pull in the same sense.

::grafico{curve="t,6+t,0,2;t,6-3*t,0,2" nomi="u (cm),T (N)" punti="0,6,pieno;1,7,pieno,A;1,3,pieno,B" legenda="T_\mathrm s;T_\mathrm d" xmin=0 xmax=2.35 ymin=0 ymax=9 titolo="Moving the ring increases the leftward pull and decreases the rightward pull. A and B give the magnitudes after 1 cm."}
:::

## Comparing and calibrating springs

:::osservazione{#taratura titolo="Slope of the force–extension graph"}
**Calibrating** a spring means obtaining its constant $k$ from measurements, and its unloaded length too when needed. Pairs of values, extension and force, are measured and plotted on a graph with the extension $x$ on the horizontal axis and the magnitude $F$ of the force on the vertical axis.

For $x\geq 0$ and within the linear range the graph is a straight line through the origin, because $F=kx$ and the force is zero at $x=0$. The ratio $\dfrac{F}{x}$ of the vertical and horizontal coordinates has the same value $k$ at every point with $x\ne0$.

Two points give **the slope** of the line,
$$
k=\frac{\Delta F}{\Delta x}.
$$
The Greek letter $\Delta$, read "delta", denotes a difference between two values of the same quantity. For example, a force that goes from $4\,\mathrm N$ to $10\,\mathrm N$ has $\Delta F=10\,\mathrm N-4\,\mathrm N=6\,\mathrm N$.

The **resolution** of an instrument is the smallest difference it distinguishes. A small reading error has less effect on the slope if the two points are well separated, that is, if the measured differences are large compared with the resolution.

If the horizontal axis shows the length $L$ instead of the extension, the law reads $F=k(L-L_0)$ for $L\geq L_0$. The slope is still $k$. The line meets the horizontal axis at the point $L=L_0$, because the force is zero at the unloaded length.

The constant $k$ measures stiffness. Under the same force, the stiffer spring deforms less.

If the extension on the graph is in centimetres, the slope is in $\mathrm{N/cm}$. Since $1\,\mathrm{cm}=0.01\,\mathrm m$, a slope of $2\,\mathrm{N/cm}$ equals $\dfrac{2\,\mathrm N}{0.01\,\mathrm m}=200\,\mathrm{N/m}$.
:::

:::esempio{titolo="Calibration without directly measuring the natural length"}
A spring is $14\,\mathrm{cm}$ long under a tension of $4\,\mathrm N$ and $17\,\mathrm{cm}$ long under $10\,\mathrm N$. Both readings are within the linear range.

The force increases by $10\,\mathrm N-4\,\mathrm N=6\,\mathrm N$ while the length increases by $17\,\mathrm{cm}-14\,\mathrm{cm}=3\,\mathrm{cm}=0.03\,\mathrm m$. The constant is the slope.
$$
k=\frac{6\,\mathrm N}{0.03\,\mathrm m}=200\,\mathrm{N/m}.
$$
Under $4\,\mathrm N$ the deformation is
$$
x=\frac{4\,\mathrm N}{200\,\mathrm{N/m}}=0.02\,\mathrm m=2\,\mathrm{cm}.
$$
The natural length is therefore $14\,\mathrm{cm}-2\,\mathrm{cm}=12\,\mathrm{cm}$.

The second reading checks the value. At $17\,\mathrm{cm}$ the deformation is $17\,\mathrm{cm}-12\,\mathrm{cm}=5\,\mathrm{cm}=0.05\,\mathrm m$, so $0.05\,\mathrm m\cdot200\,\mathrm{N/m}=10\,\mathrm N$, which is the measured tension.
:::

::grafico{f="2*(x-12)" nomi="L (cm),F (N)" punti="12,0,pieno,O;14,4,pieno,A;17,10,pieno,B" xmin=12 xmax=18 ymin=0 ymax=13 titolo="Calibration from measurements A and B. The natural length is read at the horizontal intercept O"}

:::attenzione
The constant found from two points is the slope of the secant, that is, of the line through those two points. To extend the model to other loads, further measurements are checked against the same line within the instrument's resolution.

At extensions of $2\,\mathrm{cm}$ and $4\,\mathrm{cm}$, the measured tensions are $6\,\mathrm N$ and $12\,\mathrm N$, respectively. The slope is $\dfrac{12\,\mathrm N-6\,\mathrm N}{4\,\mathrm{cm}-2\,\mathrm{cm}}=3\,\mathrm{N/cm}$. That model predicts a tension of $3\,\mathrm{N/cm}\cdot6\,\mathrm{cm}=18\,\mathrm N$ at $6\,\mathrm{cm}$. The instrument, which has a resolution of $0.1\,\mathrm N$, reads $15\,\mathrm N$ instead. A reading is compatible with a prediction when their difference does not exceed the error of the instrument. Here the difference is $3\,\mathrm N$, thirty times the resolution, so the reading is incompatible with the prediction. At $6\,\mathrm{cm}$ the spring is outside the linear range.

If the spring recovers its natural length at the end of the test, the measured deformation is reversible. Recovery of the natural length alone does not establish proportionality.

::grafico{f="3*x" nomi="x (cm),F (N)" punti="2,6,pieno;4,12,pieno;6,15,pieno,M;6,18,vuoto,R" legenda="\text{linear model}" xmin=0 xmax=7 ymin=0 ymax=23 titolo="M is the reading at 6 cm. R is the prediction obtained by extending the line through the first two readings."}
:::

## Normal reaction and tension

:::definizione{#contatto titolo="Constraint forces"}
A **constraint** is an object that prevents some movements of a body. A table prevents the book resting on it from moving down. A taut cord prevents the body tied to it from moving away.

The **normal reaction** is the component of the contact force perpendicular to the surface. Normal means perpendicular. On a horizontal table it is vertical and directed upwards. On an inclined plane it is perpendicular to the inclined plane.

In a non-adhesive contact, that is, one without glue or magnets, the surface pushes the body outward and does not hold it back. The normal reaction therefore has magnitude $N\geq0$, where the symbol $\geq$ is read "greater than or equal to".

The italic letter $N$ denotes the magnitude of the normal reaction. The upright letter $\mathrm N$, written after a number, is the symbol of the newton. Both appear in the expression $N=35\,\mathrm N$.

An **ideal cord** has negligible mass and does not stretch. When it is taut it exerts a pulling force along the cord, from the body toward the point where the cord is fixed. The magnitude of this force is called **tension** and denoted $T$. A slack cord, that is, one that is not taut, has zero tension.

A body that stays at rest is in **equilibrium**, and the resultant of the forces it receives is zero. For vertical forces the upward sense is taken as positive and the sum of the components is set equal to zero. There are three cases, calculated for an object of weight $P=50\,\mathrm N$ at rest on a horizontal table.

- The object receives only its weight and the normal reaction. Equilibrium gives $N-P=0$, so $N=P=50\,\mathrm N$.
- A cord pulls it upwards with tension $T=20\,\mathrm N$. Equilibrium gives $N+T-P=0$, so the normal reaction decreases to $N=P-T=30\,\mathrm N$. The formula holds so long as this value is positive.
- A downward vertical push of magnitude $S=10\,\mathrm N$ is added to the weight. Equilibrium gives $N-P-S=0$, so $N=P+S=60\,\mathrm N$.

The equations use the components of *all* the vertical forces on the selected body.
:::

:::esempio{titolo="When the cord supports part of the load"}
A stationary crate weighs $60\,\mathrm N$. A vertical cord pulls on it upwards with tension $25\,\mathrm N$. The crate is at rest, so, with upward as positive, the sum of the components is zero.
$$
N+25\,\mathrm N-60\,\mathrm N=0,
$$
so $N=60\,\mathrm N-25\,\mathrm N=35\,\mathrm N$. The table carries $35\,\mathrm N$ of the load and the cord carries $25\,\mathrm N$.

At a tension of $60\,\mathrm N$ the normal reaction reaches zero, because $60\,\mathrm N-60\,\mathrm N=0$. With a larger tension, for example $70\,\mathrm N$, the same equation would give $N=-10\,\mathrm N$. A non-adhesive table does not exert a negative normal reaction, so beyond the threshold of $60\,\mathrm N$ the crate does not stay at rest on the table and lifts off.
:::

::grafico{linee="0,60 60,0" nomi="T (N),N (N)" punti="0,60,pieno;25,35,pieno,A;60,0,pieno,B" xmin=0 xmax=70 ymin=0 ymax=65 titolo="Normal reaction for a stationary crate weighing 60 N. At B the cord supports the full weight and the branch for equilibrium with support ends."}

:::esempio{titolo="The reading under two boxes"}
A box weighing $40\,\mathrm N$ rests on a horizontal platform. The platform is a scale that shows the normal force it exerts, $N_\mathrm{base}$. A second box, weighing $18\,\mathrm N$, is stacked on the first and a rope pulls it vertically upwards with $6\,\mathrm N$. The normal force between the two boxes is denoted $N_\mathrm{tra}$ (*tra* means between in Italian). The positive sense is upwards.

The equilibrium of the upper box gives $N_\mathrm{tra}+6\,\mathrm N-18\,\mathrm N=0$, so
$$
N_\mathrm{tra}=18\,\mathrm N-6\,\mathrm N=12\,\mathrm N.
$$
For the system of the two boxes, the contact force between them is internal. The external forces are the normal force of the platform, the tension and the two weights. Equilibrium gives $N_\mathrm{base}+6\,\mathrm N-40\,\mathrm N-18\,\mathrm N=0$. Subtracting the tension from the sum of the weights gives the load on the platform.

$$
N_\mathrm{base}=(40+18-6)\,\mathrm N=52\,\mathrm N.
$$

The result is checked on the lower box alone, which receives its own weight of $40\,\mathrm N$ and the $12\,\mathrm N$ with which the upper box presses on it. The sum $40\,\mathrm N+12\,\mathrm N=52\,\mathrm N$ is the platform reading.

With any tension $T$ the same calculations give $N_\mathrm{tra}=18\,\mathrm N-T$ and $N_\mathrm{base}=58\,\mathrm N-T$, which are the two lines in the graph. If the tension is increased to $18\,\mathrm N$, the force between the boxes falls to zero. At that instant the platform supports only the lower box and reads $40\,\mathrm N$. The lines apply up to this threshold, beyond which the upper box lifts off.

::grafico{f="58-x;18-x" nomi="T (N),N (N)" punti="6,52,pieno,A;6,12,pieno,B;18,40,pieno;18,0,pieno" legenda="N_\mathrm{base};N_\mathrm{tra}" xmin=0 xmax=18 ymin=0 ymax=63 titolo="The normal forces decrease as the upward tension increases. Their difference is the 40 N weight of the lower box."}
:::

## Sliding friction

:::definizione{#attrito titolo="Actual static friction and its limit"}
**Sliding friction** is the component of the contact force parallel to the surface. Sliding here means rubbing along the surface. A surface with friction is called rough and a surface without friction is called smooth.

The contact force therefore has two mutually perpendicular components, the normal reaction and the friction. Its magnitude is obtained with Pythagoras' theorem. With a normal reaction of $12\,\mathrm N$ and a friction of $5\,\mathrm N$ the magnitude is $\sqrt{12^2+5^2}\,\mathrm N=\sqrt{169}\,\mathrm N=13\,\mathrm N$.

**Static friction** is the friction that acts when the surfaces do not slide over each other. The sense of static friction is opposite to the tendency to slide, that is, to the sense in which the body would slip if friction were absent.

In the **Coulomb friction model**, a simplified description of friction, the magnitude $f_s$ of static friction satisfies
$$
0\leq f_s\leq\mu_s N.
$$
Here $N$ is the magnitude of the normal reaction and $\mu_s$ is the **coefficient of static friction**. The Greek letter $\mu$ is read "mu" and the subscript $s$ stands for static. The coefficient is a number that depends on the materials of the two surfaces. It has no units, because it is a ratio of two forces. The model sets no upper limit on the coefficient, which is greater than $1$ for some pairs of materials.

The product $\mu_sN$ is the **static limit**, that is, the maximum static friction. Dividing the limit by the normal reaction gives the coefficient again.

The actual value of static friction is obtained from the balance of the tangential components, that is, those parallel to the surface. The body is at rest, so their sum is zero. The actual value equals the limit $\mu_sN$ only at the **slipping threshold**, which is the situation in which the body is about to start sliding. If equilibrium requires a friction above the limit, the body cannot remain at rest and it slides.

When the surfaces slide relative to each other, **kinetic friction** acts. The model gives its magnitude,
$$
f_d=\mu_d N,
$$
where $\mu_d$ is the coefficient of kinetic friction, which also has no units. For the most common pairs of materials $\mu_d$ is smaller than $\mu_s$. The normal reaction $N$ is obtained from the equilibrium of the vertical forces. A crate of weight $100\,\mathrm N$ pulled upwards by a vertical rope with $20\,\mathrm N$ has $N=80\,\mathrm N$. With $\mu_d=0.5$ the kinetic friction is $0.5\cdot80\,\mathrm N=40\,\mathrm N$.

In the Coulomb model the static limit and the kinetic friction depend only on the coefficient and on the normal reaction, so they stay the same if the area of the supporting face changes. Kinetic friction also stays the same if the sliding speed changes.

The sense of kinetic friction is opposite to the relative sliding velocity, which is the velocity of the body measured relative to the surface it slides on. A conveyor belt moves to the right at $3$ metres per second and a parcel just placed on it moves, as seen from the ground, to the right at $1$ metre per second. Relative to the belt the parcel slides to the left, so the friction of the belt on the parcel points to the right, in the same sense as the belt's motion relative to the ground. What matters is the motion of the body *relative to the belt*.
:::

:::esempio{titolo="Measuring static and kinetic friction"}
A block has $N=40\,\mathrm N$, $\mu_s=0.4$, and $\mu_d=0.25$. The static limit is
$$
\mu_sN=0.4\cdot40\,\mathrm N=16\,\mathrm N.
$$
A horizontal pull of $6\,\mathrm N$ requires, for equilibrium, $6\,\mathrm N$ of static friction in the opposite sense. This value is below the limit, so the block stays at rest and the actual friction is $6\,\mathrm N$.

The pull is increased quasi-statically, that is, so slowly that the block is in equilibrium at every instant. The friction always has the same magnitude as the pull, up to $16\,\mathrm N$ (point $B$ in the graph).

When the block slides relative to the surface, the model gives a kinetic friction of
$$
\mu_dN=0.25\cdot40\,\mathrm N=10\,\mathrm N.
$$
The value of $10\,\mathrm N$ is measured while the block is sliding. The value of $16\,\mathrm N$ is measured just before sliding starts.
:::

::grafico{f="x" nomi="F (N),fₛ (N)" punti="6,6,pieno,A;16,16,pieno,B" xmin=0 xmax=16 ymin=0 ymax=18 titolo="Static friction for a block with normal reaction of 40 N. B marks the 16 N limit"}

:::esempio{titolo="An admissible interval of forces"}
A spring pulls a stationary block to the left with $10\,\mathrm N$. A horizontal rope pulls to the right with adjustable force $F$. The static friction limit at the contact is $4\,\mathrm N$. The values of $F$ for which the block stays at rest are required.

Right is taken as positive and $f_x$ denotes the component of the friction. The sum of the horizontal components is zero, that is, $F-10\,\mathrm N+f_x=0$. The frictional component required for rest is therefore $f_x=10\,\mathrm N-F$.

The magnitude of the friction does not exceed the limit, so $\lvert f_x\rvert\leq4\,\mathrm N$, that is, $f_x$ lies between $-4\,\mathrm N$ and $+4\,\mathrm N$. The two conditions hold together.

$$
\begin{cases}
10\,\mathrm N-F\leq4\,\mathrm N\\
10\,\mathrm N-F\geq-4\,\mathrm N
\end{cases}
$$

The first condition gives $F\geq6\,\mathrm N$ and the second $F\leq14\,\mathrm N$. The block stays at rest for

$$
6\,\mathrm N\leq F\leq14\,\mathrm N.
$$

At $F=10\,\mathrm N$ the spring and rope already balance, so friction is zero. At the lower limit, $F=6\,\mathrm N$, the component is $f_x=+4\,\mathrm N$ and friction points to the right, because the spring prevails and the block tends to slide to the left. At the upper limit, $F=14\,\mathrm N$, the component is $f_x=-4\,\mathrm N$ and friction points to the left, because the rope prevails and the block tends to slide to the right. Friction reverses because it opposes the tendency to slide.

::grafico{f="10-x" nomi="F (N),fₓ (N)" segmenti="6,-5,6,4;14,-4,14,5" punti="6,4,pieno,A;10,0,pieno;14,-4,pieno,B" xmin=4 xmax=16 ymin=-6 ymax=6 titolo="Friction required for rest. Only the segment between A and B is admissible."}
:::

## Applying a model correctly

:::osservazione{#modelli titolo="Assumptions and physical checks"}
A **model** is a simplified description of a phenomenon, valid under certain conditions called assumptions. To choose the law, the interaction behind the force is identified first.

- For weight, $P=mg$ is used with the field $g$ of the location.
- For a spring, $F_e=k\lvert x\rvert$ is used with a deformation within the linear range.
- For a contact, the normal reaction is obtained from equilibrium and its admissible sense is checked, that is, that the result is $N\geq0$.
- For friction, it is decided whether the surfaces remain stationary relative to each other or slide.

The same object has its weight, normal reaction, and friction in one diagram, because it receives forces from different bodies.

Checking units helps to spot an incorrect model or conversion. In $F=kx$ the result must be in newtons, so $k$ and $x$ must be expressed with the same unit of length. With $k$ in $\mathrm{N/m}$ and $x$ in metres the units give $\mathrm{N/m}\cdot\mathrm m=\mathrm N$.

Checking the sign is a separate operation. A negative component of an elastic force is physically correct, like the component of $-3\,\mathrm N$ of the extended spring. A negative normal reaction for a simple support, such as $N=-10\,\mathrm N$, shows instead that the proposed contact equilibrium is inadmissible.
:::

:::attenzione
Maximum and actual static friction coincide only at the slipping threshold. For instance, with $\mu_s N=16\,\mathrm N$ and a horizontal pull of $6\,\mathrm N$, friction of $16\,\mathrm N$ would leave a net force of $16\,\mathrm N-6\,\mathrm N=10\,\mathrm N$ opposite the pull, and the stationary block would start moving backwards. Equilibrium instead requires $6\,\mathrm N$ of friction.
:::
