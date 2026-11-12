---
titolo: Newton's laws of motion
sommario: How the three laws of motion relate the forces acting on a body to its acceleration, how weight, the normal force and the tension of a string are described, and how a free-body diagram turns a problem about blocks, strings and pulleys into equations.
---

## Force and the first law

:::definizione{#force titolo="Force and net force"}
A **force** is the action of one body on another, described by a vector $\vec{F}$, so it has a magnitude, measured in newtons, a direction and a sense. Every force has an agent, that is, another body that exerts it, so a force is named by the pair of bodies involved, as in "the force exerted by the string on the block".

When several forces $\vec{F}_1, \dots, \vec{F}_n$ act on the same body at the same instant, experiment shows that their combined effect equals the effect of the single force
$$
\vec{F}_{\text{net}} = \vec{F}_1 + \vec{F}_2 + \dots + \vec{F}_n ,
$$
called the **net force**, or resultant. Forces therefore add as vectors, and the magnitude of the net force is not in general the sum of the magnitudes.

::grafico{assi=0 uguale=1 poligoni="-0.45,-0.45 0.45,-0.45 0.45,0.45 -0.45,0.45" punti="0,0,pieno" vettori="0,0,3,0,F₁;0,0,0,2,F₂;0,0,3,2,F net" segmenti="3,0,3,2;0,2,3,2" xmin=-1.3 xmax=4.3 ymin=-1.3 ymax=3 titolo="Two forces applied to the same body and their resultant: $F_1 = 3.0\,\mathrm{N}$ and $F_2 = 2.0\,\mathrm{N}$ give $F_{\text{net}} = \sqrt{13}\,\mathrm{N} \approx 3.6\,\mathrm{N}$"}

This is what reduces a problem with many forces to a problem with one, since from this point on only the vector sum matters.
:::

:::definizione{#inertial-frame titolo="Inertial frame of reference"}
A motion is described with respect to a **frame of reference**, that is, a body taken as fixed together with a set of axes attached to it and a clock. A frame is called **inertial** when a body far from every other body, on which no force acts, moves in it with constant velocity.

A frame that translates with constant velocity with respect to an inertial frame is inertial as well, since the two frames measure the same acceleration. A frame that accelerates or rotates with respect to an inertial frame is not inertial. For a problem whose duration is short compared with a day, the surface of the Earth is inertial to a good approximation, hence it is the frame used throughout this chapter.
:::

:::teorema{#newtons-first-law titolo="Newton's first law"}
In an inertial frame, a body on which the net force is zero moves with constant velocity:
$$
\vec{F}_{\text{net}} = \vec{0}
\quad\Longrightarrow\quad
\vec{v} = \text{constant} .
$$
A body at rest is the particular case $\vec{v} = \vec{0}$, so such a body remains at rest. The law is experimental, therefore it is not derived from anything else; it states that uniform motion requires no force, and that only a change of velocity does.

A body whose velocity is constant is said to be in **equilibrium**, and for it the first law gives $\sum \vec{F} = \vec{0}$, which in the plane is a pair of numerical equations. A lamp hanging at rest from a cable is in equilibrium under its weight and the pull of the cable, hence the two have equal magnitudes, and the tension of the cable equals the weight of the lamp.
:::

:::attenzione
Equilibrium is zero net force, *not* zero velocity. A crate pushed along a floor at constant velocity is in equilibrium, and the push balances the friction of the floor, which the chapter on applications of Newton's laws describes. A body can therefore move fast and still have no net force on it.
:::

## Mass and Newton's second law

:::definizione{#inertial-mass titolo="Inertial mass"}
The **mass** of a body measures how strongly the body resists a change of its velocity. When the same force is applied in turn to two bodies, their accelerations satisfy
$$
\frac{a_1}{a_2} = \frac{m_2}{m_1} ,
$$
so the body with the larger mass receives the smaller acceleration. Mass is a scalar, measured in kilograms; it is the same at every place, and it adds when bodies are joined.

The relation above is also how an unknown mass is measured dynamically, by comparing its acceleration with that of a known mass under the same force.
:::

:::teorema{#newtons-second-law titolo="Newton's second law"}
In an inertial frame, a body of constant mass $m$ subject to the net force $\vec{F}_{\text{net}}$ has at every instant the acceleration
$$
\vec{F}_{\text{net}} = m\,\vec{a} .
$$
The acceleration has the direction and the sense of the net force and the magnitude $a = \dfrac{F_{\text{net}}}{m}$. The law is experimental, and it fixes the unit of force: $1\,\mathrm{N}$ is the net force that gives a mass of $1\,\mathrm{kg}$ an acceleration of $1\,\mathrm{m/s^2}$, hence $1\,\mathrm{N} = 1\,\mathrm{kg\cdot m/s^2}$.

The relation holds instant by instant, therefore a force that changes in time produces an acceleration that changes with it. A net force of $6.0\,\mathrm{N}$ on a body of mass $2.0\,\mathrm{kg}$ produces $a = 3.0\,\mathrm{m/s^2}$, in the sense of the net force. The law is used in both directions: from the forces to the motion, and from a measured motion to the forces that cause it.
:::

:::richiamo{#acceleration-as-a-derivative titolo="Acceleration as a derivative"}
For a motion along a line, the velocity is the derivative of the position and the acceleration is the derivative of the velocity:
$$
v = \frac{dx}{dt},
\qquad
a = \frac{dv}{dt} = \frac{d^2x}{dt^2} .
$$
The derivative is treated in the calculus course, and the integration of $a(t)$ back to $x(t)$ in the chapter on motion along a straight line.
:::

::::teorema{#second-law-in-components titolo="The second law in components"}
Fix axes $x$ and $y$ in the plane of the motion. Then the second law is equivalent to the pair of numerical equations
$$
\begin{cases}
\displaystyle \sum F_x = m\,a_x \\[6pt]
\displaystyle \sum F_y = m\,a_y
\end{cases}
$$

:::dimostrazione
Two vectors are equal exactly when their corresponding components are equal. Writing $\vec{F}_{\text{net}} = \left(\sum F_x, \sum F_y\right)$ and $m\vec{a} = (m a_x, m a_y)$, the vector equation $\vec{F}_{\text{net}} = m\vec{a}$ holds if and only if the two component equations hold, which is the statement above.
:::

Each axis is then handled on its own, and this is how every problem of this chapter is solved. The axes are chosen so that the acceleration lies along one of them, since the equation of the other axis has zero on its right-hand side and gives directly one of the unknown forces.
::::

## Newton's third law

:::teorema{#newtons-third-law titolo="Newton's third law"}
When a body $A$ exerts a force on a body $B$, the body $B$ exerts on $A$ a force with the same magnitude, the same line of action and the opposite sense:
$$
\vec{F}_{B \to A} = -\,\vec{F}_{A \to B} .
$$
The two forces are of the same kind, they appear and vanish together, and they form an **action-reaction pair**. The law is experimental.

The third law is what carries information from one body of a system to another, since the string that pulls a block with tension $T$ is pulled back by the block with the same $T$, and two blocks pressed together push each other with forces of equal magnitude. Without it, a system of connected bodies could not be solved one body at a time.

::grafico{assi=0 uguale=1 poligoni="0,0 2,0 2,2 0,2;2,0 4,0 4,2 2,2" linee="-0.9,0 5,0" vettori="2,1.4,3.1,1.4,force on B;2,0.6,0.9,0.6,force on A" etichette="0.7,1.72,A;3.3,1.72,B" xmin=-1.1 xmax=5.2 ymin=-1 ymax=2.9 titolo="The two blocks in contact push each other with forces of equal magnitude and opposite sense: the force on $B$ enters the equation of $B$, the force on $A$ enters the equation of $A$"}
:::

:::attenzione
The two forces of an action-reaction pair never cancel in the equation of either body, because they act on *different* bodies. A horse pulling a cart accelerates it even though the cart pulls the horse back with the same magnitude, since the equation of the cart contains only the forward pull of the horse, while the backward pull on the horse appears in the equation of the horse.
:::

:::esempio{#third-law-pairs titolo="Identifying an action-reaction pair"}
A book of mass $m$ rests on a table. Two pairs are present. The Earth pulls the book down with the weight $\vec{w}$, and the book pulls the Earth up with a force of the same magnitude. The table pushes the book up with the normal force $\vec{N}$, and the book pushes the table down with a force of the same magnitude.

The forces $\vec{N}$ and $\vec{w}$ are not an action-reaction pair, since they act on the same body and have different agents. They happen to have equal magnitudes here because the book has zero acceleration, so the first law applied to the book gives $N = mg$. When the table is in an accelerating elevator the two magnitudes differ, as the law on apparent weight shows.
:::

## Weight and the normal force

:::definizione{#weight titolo="Weight"}
The **weight** of a body is the force with which the Earth attracts it,
$$
\vec{w} = m\,\vec{g} ,
\qquad
w = m\,g ,
$$
where $\vec{g}$ points vertically downward and $g = 9.81\,\mathrm{m/s^2}$ near the surface of the Earth. Weight is a force, measured in newtons, while mass is a scalar measured in kilograms, hence a body of mass $3.0\,\mathrm{kg}$ has weight $29.4\,\mathrm{N}$.

The same body carried to the Moon keeps its mass and changes its weight, since $g$ there is about $1.6\,\mathrm{m/s^2}$. A body in free fall, with the resistance of the air neglected, has the weight as its only force, therefore the second law gives $m\vec{g} = m\vec{a}$, hence $\vec{a} = \vec{g}$ independently of the mass, which is the result used in the chapter on motion along a straight line.
:::

:::definizione{#normal-force titolo="Normal force"}
A surface in contact with a body exerts on it the **normal force** $\vec{N}$, perpendicular to the surface and directed away from it. The normal force is a constraint force, so its magnitude is not given by a formula of its own, since it takes whatever value is needed to keep the body from penetrating the surface, and it is found from the equations of motion together with the other unknowns.

A surface can only push, therefore $N \ge 0$, and the condition $N = 0$ is the instant at which the body leaves the surface. On a horizontal plane, with no vertical acceleration and no other vertical force, the equation of the vertical axis gives $N = mg$; with an additional force pressing the body down the value is larger, and with a force pulling it up the value is smaller.

::grafico{assi=0 uguale=1 poligoni="-2.6,0 -1.4,0 -1.4,1 -2.6,1" linee="-3.7,0 -0.3,0" punti="1.8,0.8,pieno" vettori="1.8,0.8,1.8,2.4,N;1.8,0.8,1.8,-0.8,w" etichette="-2.3,1.35,m;1.1,-1.35,free-body diagram" xmin=-4 xmax=3.6 ymin=-1.8 ymax=2.8 titolo="A block at rest on a horizontal floor and its free-body diagram: the forces are $\vec{N}$ and $\vec{w}$, and $N = mg$ because the acceleration is zero"}
:::

::::teorema{#apparent-weight titolo="Apparent weight"}
Let a body of mass $m$ rest on a horizontal platform that has the vertical acceleration $a$, counted positive upward, in an inertial frame. Then the platform exerts on the body the normal force
$$
N = m\,(g + a) .
$$

:::dimostrazione
The free-body diagram of the body contains the normal force $\vec{N}$, directed upward, and the weight $\vec{w}$, directed downward. Choosing the $y$ axis vertical and upward, the second law along $y$ gives
$$
N - m g = m\,a ,
$$
and solving for $N$ gives $N = m(g+a)$.
:::

A scale measures the force with which the body presses on it, which by the third law has the magnitude $N$, so this is the reading of a scale in an accelerating elevator. For $a = 0$ the reading is $mg$; for an upward acceleration it exceeds $mg$; for a downward acceleration it falls below $mg$; and for $a = -g$, that is in free fall, it is zero, which is the state called apparent weightlessness.

::grafico{assi=0 uguale=1 punti="0,0,pieno" vettori="0,0,0,2.2,N;0,0,0,-1.6,w;2.6,-0.5,2.6,0.6,a" xmin=-1.6 xmax=3.8 ymin=-2.4 ymax=3 titolo="Free-body diagram of a person standing on a scale in an elevator with upward acceleration $\vec{a}$: here $N > w$, hence the reading exceeds the weight"}
::::

## Tension in strings and ideal pulleys

:::definizione{#tension titolo="Tension in a string"}
A string attached to a body pulls the body along the string, away from the body, with a force whose magnitude $T$ is called the **tension** of the string. A string can only pull, so $T \ge 0$, and a slack string has $T = 0$.

A string is called **ideal** when its mass is negligible and its length does not change. The second property makes the two ends move with velocities of equal magnitude along the string, which is the constraint used for connected bodies.

::grafico{assi=0 uguale=1 linee="-1.1,4 1.1,4;0,4 0,2.2" poligoni="-0.55,1.2 0.55,1.2 0.55,2.2 -0.55,2.2" punti="3,1.7,pieno" vettori="3,1.7,3,3.3,T;3,1.7,3,0.1,w" xmin=-2.1 xmax=4.4 ymin=-0.4 ymax=4.7 titolo="A block hanging at rest from a string: the free-body diagram contains $\vec{T}$ and $\vec{w}$, and the first law gives $T = mg$"}
:::

::::teorema{#ideal-string titolo="Tension in a massless string"}
A string of negligible mass has the same tension at all of its points, even when it is accelerating.

:::dimostrazione
Take a piece of the string between two of its points, of mass $\Delta m$, and let the string be straight there. The forces on that piece along the string are the pulls of the two neighboring pieces, of magnitudes $T_1$ and $T_2$ and opposite senses. The second law along the string gives
$$
T_2 - T_1 = \Delta m \cdot a ,
$$
and the mass of the string is negligible, hence $\Delta m = 0$ and $T_2 = T_1$. Since the two points were arbitrary, the tension is the same everywhere.
:::

This is what allows a single symbol $T$ to be used for the whole string, and in particular for the two parts of a string that passes over a pulley. A string with appreciable mass does not have this property, and its tension grows from the lower end to the upper end by the weight of the string below.
::::

:::definizione{#ideal-pulley titolo="Ideal pulley"}
A pulley is **ideal** when its mass and the friction at its axle are negligible and it is free to turn. An ideal pulley changes the direction of a string without changing the tension, so the string that passes over it has one single tension on both sides. The reason the tension is unchanged involves the moment of the two pulls about the axle, and it is established in the chapter on fixed-axis rotation.

A load of mass $m$ raised with acceleration $a$ by a rope that passes over a fixed ideal pulley and is pulled downward requires the tension $T = m(g+a)$, and the axle of the pulley must support the two pulls of the rope. When the two parts of the rope are parallel the force on the axle has magnitude $2T$.

::grafico{assi=0 uguale=1 curve="0.7*cos(t),0.7*sin(t),0,6.29" punti="0,0,pieno" vettori="-0.7,0,-0.7,-1.8,T;0.7,0,0.7,-1.8,T;0,0,0,3.6,2T" xmin=-2.4 xmax=2.4 ymin=-2.6 ymax=4.2 titolo="Free-body diagram of an ideal pulley with the two parts of the string vertical: the axle supports the force $2T$"}
:::

## Free-body diagrams

:::definizione{#free-body-diagram titolo="Free-body diagram"}
A **free-body diagram** of a chosen body is a drawing in which the body is replaced by a point or by a simple outline and every force exerted on it by another body is drawn as an arrow starting at the body, labeled with the name of the force and of its agent.

Three kinds of arrow are excluded from it. Forces exerted by the chosen body on other bodies belong to the diagrams of those bodies. The net force is not an applied force, so it does not appear beside the forces that compose it. The acceleration is not a force, and when it is drawn it is kept outside the diagram, beside it.
:::

:::osservazione{#solution-method titolo="Solving a problem with the second law"}
The solution of a dynamics problem follows the same order every time.

- Choose one body and draw its free-body diagram, naming each force together with the body that exerts it.
- Choose the axes, with one axis along the acceleration when its direction is known.
- Write $\sum F_x = m a_x$ and $\sum F_y = m a_y$, replacing every force by its components.
- Solve the system symbolically for the unknowns, which are accelerations and constraint forces such as $N$ and $T$.
- Substitute the data with their units, and check the sign and the order of magnitude of each result.

When the problem contains several bodies, one diagram and one pair of equations are written for each of them, and the third law relates the forces they exert on one another.
:::

:::esempio{#block-pulled-at-an-angle titolo="A block pulled at an angle"}
A block of mass $m = 5.0\,\mathrm{kg}$ lies on a frictionless horizontal floor and is pulled by a string that makes the angle $\theta = 30^\circ$ above the horizontal with the force $F = 30\,\mathrm{N}$. The forces on the block are $\vec{F}$, the weight and the normal force, and the acceleration is horizontal, so with the $x$ axis along the motion and the $y$ axis upward
$$
\begin{cases}
F\cos\theta = m\,a \\[4pt]
N + F\sin\theta - m g = 0
\end{cases}
$$
$$
a = \frac{F\cos\theta}{m} = \frac{30\,\mathrm{N} \cdot 0.866}{5.0\,\mathrm{kg}} = 5.2\,\mathrm{m/s^2} ,
$$
$$
N = m g - F\sin\theta = 49.1\,\mathrm{N} - 15.0\,\mathrm{N} = 34.1\,\mathrm{N} .
$$

::grafico{assi=0 uguale=1 punti="0,0,pieno" vettori="0,0,2.6,1.5,F;0,0,0,-4.9,w;0,0,0,3.4,N" segmenti="2.6,1.5,2.6,0;0,0,3.2,0" etichette="1.05,0.2,30°" riferimento="-3.4,-3.6,0,1.1,x,y" xmin=-4.6 xmax=4.2 ymin=-5.6 ymax=4.2 titolo="Free-body diagram of the block, with the arrows to scale at $10\,\mathrm{N}$ per unit: the vertical component of $\vec{F}$ reduces the normal force to $N = mg - F\sin\theta$"}

The vertical component of the pull carries part of the weight, therefore the normal force is smaller than $mg$. The pull at which the block leaves the floor is the one that makes $N$ vanish, that is $F = \dfrac{mg}{\sin\theta} = 98.1\,\mathrm{N}$.
:::

## Bodies connected by strings

::::teorema{#inextensible-string-constraint titolo="Constraint of an inextensible string"}
Two bodies joined by an ideal string that is kept taut, possibly passing over fixed pulleys, have accelerations of equal magnitude along the string, with senses such that one body advances by as much as the other retreats.

:::dimostrazione
Let $s_1$ and $s_2$ be the lengths of string between each body and the first pulley it meets, measured along the string. The string is inextensible, hence
$$
s_1 + s_2 + c = L ,
$$
where $c$ is the fixed length wrapped on the pulleys and $L$ is the total length, both constant in time. Differentiating twice with respect to time gives
$$
\frac{ds_1}{dt} = -\frac{ds_2}{dt},
\qquad
\frac{d^2s_1}{dt^2} = -\frac{d^2s_2}{dt^2} ,
$$
therefore the two speeds along the string are equal, and so are the two magnitudes of the acceleration.
:::

The constraint reduces the unknowns of a system of two connected bodies to one single acceleration $a$ and one tension $T$, which is what makes the equations of the following results solvable.
::::

:::osservazione{#system-as-a-single-body titolo="Treating the system as a single body"}
Write the equation of each body along the direction of motion and add the equations. By the third law the internal forces appear in pairs of equal magnitude and opposite sense, so they cancel in the sum, and what remains is
$$
\sum F_{\text{ext}} = \left(\textstyle\sum_i m_i\right) a ,
$$
with the external forces alone on the left. The acceleration of a system of connected bodies is therefore obtained at once, and the internal force is then found by returning to the equation of a single body.
:::

::::teorema{#connected-blocks titolo="Two blocks connected on a horizontal plane"}
Let two blocks of masses $m_1$ and $m_2$ lie on a frictionless horizontal plane, joined by an ideal string, and let the horizontal force $\vec{F}$ be applied to $m_1$ along the line of the string. Then
$$
a = \frac{F}{m_1 + m_2} ,
\qquad
T = \frac{m_2}{m_1 + m_2}\,F .
$$

:::dimostrazione
The string is inextensible, hence the two blocks have the same acceleration $a$, and the string is ideal, hence it pulls both blocks with the same tension $T$, backward on $m_1$ and forward on $m_2$. The plane is frictionless and the vertical forces balance on each block, so the second law along the direction of the motion gives
$$
\begin{cases}
F - T = m_1\,a \\[4pt]
T = m_2\,a
\end{cases}
$$
Adding the two equations eliminates $T$ and gives $F = (m_1 + m_2)a$, hence the first formula. Substituting that value of $a$ into the second equation gives $T = \dfrac{m_2}{m_1+m_2}F$.
:::

The tension is a fraction of the applied force, and the fraction is the share of the total mass that the string has to accelerate, therefore $T < F$ always. With $m_1 = m_2$ the tension is half of the applied force.

::grafico{assi=0 uguale=1 linee="-0.4,0 8.4,0;2.6,0.5 4.6,0.5" poligoni="0.6,0 2.6,0 2.6,1 0.6,1;4.6,0 6.2,0 6.2,1 4.6,1" vettori="6.2,0.5,7.6,0.5,F;2.6,0.8,3.4,0.8,T;4.6,0.2,3.8,0.2,T" etichette="1.6,0.5,m₂;5.4,0.5,m₁" xmin=-0.8 xmax=8.4 ymin=-1 ymax=2 titolo="Horizontal forces on the two blocks: the string pulls $m_2$ forward and $m_1$ backward with the same tension $T = \dfrac{m_2}{m_1+m_2}F$"}
::::

::::teorema{#atwood-machine titolo="The Atwood machine"}
Let two bodies of masses $m_1 > m_2$ hang from the two ends of an ideal string that passes over a fixed ideal pulley. Then $m_1$ descends and $m_2$ rises with
$$
a = \frac{m_1 - m_2}{m_1 + m_2}\,g ,
\qquad
T = \frac{2\,m_1 m_2}{m_1 + m_2}\,g .
$$

:::dimostrazione
The string is ideal, hence the tension $T$ is the same on both sides, and it is inextensible, hence the two accelerations have the same magnitude $a$. Taking for each body the positive sense of its own motion, the second law gives
$$
\begin{cases}
m_1 g - T = m_1\,a \\[4pt]
T - m_2 g = m_2\,a
\end{cases}
$$
Adding the two equations eliminates $T$ and gives $(m_1 - m_2)g = (m_1+m_2)a$, hence the first formula. Substituting that value of $a$ in the second equation gives
$$
T = m_2(g + a) = m_2 g\left(1 + \frac{m_1-m_2}{m_1+m_2}\right) = \frac{2\,m_1m_2}{m_1+m_2}\,g .
$$
:::

The two formulas are checked at the ends of their range. For $m_1 = m_2$ the acceleration vanishes and $T = m_1 g$, which is the equilibrium of two equal bodies. For $m_2 = 0$ the acceleration is $g$ and the tension vanishes, which is the free fall of $m_1$. In every other case $m_2 g < T < m_1 g$, since $m_2$ accelerates upward and $m_1$ accelerates downward.

::grafico{assi=0 uguale=1 curve="3+0.5*cos(t),4.6+0.5*sin(t),0,6.29" linee="1.9,5.8 4.1,5.8;3,5.8 3,4.6;2.5,4.6 2.5,2;3.5,4.6 3.5,3.3" poligoni="2.2,1.4 2.8,1.4 2.8,2 2.2,2;3.2,2.7 3.8,2.7 3.8,3.3 3.2,3.3" punti="3,4.6,pieno" vettori="2.5,2,2.5,3.05,T;2.5,1.4,2.5,0,w₁;3.5,3.3,3.5,4.35,T;3.5,2.7,3.5,1.86,w₂" etichette="1.9,1.7,m₁;4.1,3.0,m₂" xmin=-0.2 xmax=6.2 ymin=-0.3 ymax=6.1 titolo="Atwood machine: each body carries its weight and the same tension $T$, whose value lies between the two weights"}
::::

## Bodies on a frictionless incline

::::teorema{#frictionless-incline titolo="Block on a frictionless incline"}
Let a block of mass $m$ rest on a frictionless plane inclined at the angle $\theta$ to the horizontal and be free to slide. Then the block accelerates along the plane, downhill, with
$$
a = g\sin\theta ,
\qquad
N = m g\cos\theta .
$$

:::dimostrazione
The forces on the block are the weight $\vec{w}$, of magnitude $mg$ and directed vertically downward, and the normal force $\vec{N}$, perpendicular to the inclined plane. Choose the $x$ axis along the plane, positive downhill, and the $y$ axis perpendicular to the plane, positive away from it. The angle between the weight and the inward normal to the plane equals $\theta$, therefore the components of the weight are
$$
w_x = m g\sin\theta ,
\qquad
w_y = -\,m g\cos\theta ,
$$
while the normal force has the components $(0, N)$. The block stays on the plane, hence $a_y = 0$, and the two equations are
$$
\begin{cases}
m g\sin\theta = m\,a \\[4pt]
N - m g\cos\theta = 0
\end{cases}
$$
The first gives $a = g\sin\theta$ and the second gives $N = mg\cos\theta$.
:::

Both results are independent of the mass, so two blocks of different masses released together on the same incline slide side by side. The formulas are checked at the ends of their range: for $\theta = 0$ they give $a = 0$ and $N = mg$, which is the block at rest on a horizontal floor, and for $\theta = 90^\circ$ they give $a = g$ and $N = 0$, which is free fall along a vertical wall.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 6,3.4641" linee="0,0 6,0 6,3.4641 0,0" punti="4.3,2.4826,pieno" vettori="4.3,2.4826,4.3,0.4826,w;4.3,2.4826,3.434,3.9826,N;4.3,2.4826,3.434,1.9826;4.3,2.4826,5.166,0.9826" segmenti="3.434,1.9826,4.3,0.4826;5.166,0.9826,4.3,0.4826" etichette="0.95,0.17,30°;2.85,2.2,w sinθ;5.0,0.55,w cosθ;0.45,3.72,y" riferimento="1.5,2.9,120,1.1, ,x" xmin=-0.4 xmax=7.0 ymin=-0.6 ymax=4.4 titolo="Block on a frictionless incline of $30^\circ$: the weight splits into $w\sin\theta$ along the plane and $w\cos\theta$ perpendicular to it, and the second component is balanced by $\vec{N}$"}
::::

:::esempio{#incline-with-a-string titolo="A block held on an incline"}
A block of mass $m = 6.0\,\mathrm{kg}$ rests on a frictionless incline of $\theta = 30^\circ$ and is held by a string parallel to the plane. The block is at rest, hence both components of the net force vanish:
$$
\begin{cases}
T - m g\sin\theta = 0 \\[4pt]
N - m g\cos\theta = 0
\end{cases}
$$
$$
T = 6.0\,\mathrm{kg} \cdot 9.81\,\mathrm{m/s^2} \cdot 0.500 = 29.4\,\mathrm{N} ,
\qquad
N = 6.0\,\mathrm{kg} \cdot 9.81\,\mathrm{m/s^2} \cdot 0.866 = 51.0\,\mathrm{N} .
$$
The string carries only the component of the weight along the plane, which is less than the weight $58.9\,\mathrm{N}$, and the plane carries the rest.

A block on an incline that is not frictionless requires the force of friction as well, and the chapter on applications of Newton's laws treats that case, together with the angle at which the block starts to slide.
:::
