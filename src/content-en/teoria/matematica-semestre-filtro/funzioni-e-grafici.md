---
titolo: "Functions, proportionality, and graphs"
sommario: "Read axes and scales, recognize proportional relationships, and calculate slopes and areas on graphs of motion."
---

## Variables, domains, and function values

:::definizione{#grafico titolo="Representing a function"}
A **function** assigns to each allowed value of the independent variable $x$ exactly one value of the dependent variable $y$. The notation $y=f(x)$ means that we obtain the value of $y$ by taking $x$ as the input to the rule $f$. The **domain** is the set of allowed values of $x$. The graph is the set of ordered pairs $(x,f(x))$ plotted in the Cartesian plane. A vertical line at any value in the domain meets the graph at exactly one point because that input has a unique output.

The domain depends both on the rule for calculating the output and on the situation being described. A formula may be defined for every real number but describe an experiment only for concentrations within the calibration range. In that case the domain of the model is the calibration range.
:::

:::esempio{titolo="A calibration with a specified range"}
An instrument has a dimensionless response $A$ that depends on the concentration $c$ of a solution. Its calibration gives $A(c)=(3\,\mathrm{L/mol})c+0.08$ for $0\le c\le 0.20\,\mathrm{mol/L}$. At $c=0.10\,\mathrm{mol/L}$ the response is

$$
A(0.10\,\mathrm{mol/L})
=(3\,\mathrm{L/mol})(0.10\,\mathrm{mol/L})+0.08
=0.38.
$$

The product of $\mathrm{L/mol}$ and $\mathrm{mol/L}$ is dimensionless, so it can be added to the baseline response $0.08$. At the upper end of the interval we obtain $A(0.20\,\mathrm{mol/L})=0.68$. Since the response increases as $c$ increases, the model gives responses between $0.08$ and $0.68$. The allowed concentrations and the possible responses lie in two different intervals.
:::

:::osservazione{titolo="Input and output values"}
Reading a graph from input to output means starting with a horizontal coordinate and finding the corresponding vertical coordinate. Reading it in reverse means starting with a vertical coordinate and finding the horizontal coordinates that produce it. The first procedure gives exactly one value by the definition of a function. The second can give several. For example, on the domain of all real numbers, $f(x)=x^2$ takes the value $4$ at both $x=-2$ and $x=2$. If the domain is restricted to $x\ge 0$, the same equation has only one admissible solution. In applications, the choice of domain thus also determines the number of physically possible answers.
:::

## Tables, points, and axis scales

:::definizione{#scala-assi titolo="Scale and units of an axis"}
The **scale** indicates how much the quantity changes between two positions on an axis. On a linear scale, equal distances on the graph represent equal numerical changes. The two axes can use different scales. On a graph of concentration versus time, an interval on the horizontal axis might represent one minute, while an interval of the same length on the vertical axis might represent $0.5\,\mathrm{mmol/L}$. To calculate the slope from the data, use the numerical changes with their respective units.
:::

:::esempio{titolo="Three concentration measurements"}
The concentration $c$ is measured at three different times. Each row in the table gives one point on the graph.

| $t$ in minutes | $c$ in $\mathrm{mmol/L}$ |
|---:|---:|
| 0 | 4 |
| 2 | 3 |
| 5 | 1 |

The middle point has horizontal coordinate $2$ and vertical coordinate $3$. To read its concentration, move up from $t=2\,\mathrm{min}$ to the point, then horizontally to $c=3\,\mathrm{mmol/L}$. Between the first and second measurements, the concentration decreases by $1\,\mathrm{mmol/L}$ in $2\,\mathrm{min}$. Between the second and third it decreases by $2\,\mathrm{mmol/L}$ in $3\,\mathrm{min}$. Since the decreases occur over different time intervals, comparing the changes per minute requires two divisions.

::grafico{xmin=-0.5 xmax=6 ymin=-0.5 ymax=5 nomi="t,c" punti="0,4;2,3;5,1" segmenti="2,0,2,3;0,3,2,3" titolo="Concentration c in mmol/L at time t in minutes. The middle point has coordinates $(2,3)$."}
:::

:::attenzione{titolo="Measured points and the model curve"}
A table of measurements establishes the value of the quantity at the times listed. Estimating an intermediate value requires an additional assumption. If we assume a constant rate of change between $2$ and $5\,\mathrm{min}$, we estimate the concentration at $3\,\mathrm{min}$ to be $3-\dfrac{2}{3}=\dfrac{7}{3}\,\mathrm{mmol/L}$. A more rapid change near the end could give a different value at the same time while still matching both measurements. The line segment therefore represents linear interpolation. This distinction matters when a problem asks for a reading from an experimental graph or for an estimate obtained from a model.
:::

## Lines, slopes, and intercepts

:::definizione{#retta titolo="Slope and intercept of a line"}
In an affine relationship $y=mx+q$, the **slope** $m$ is the change in $y$ per unit increase in $x$. The **vertical intercept** $q$ is the value the formula gives at $x=0$. Its units are the same as those of $y$. Given two distinct points $P_1=(x_1,y_1)$ and $P_2=(x_2,y_2)$ with $x_1\ne x_2$, we have

$$
m=\frac{y_2-y_1}{x_2-x_1},
\qquad q=y_1-mx_1.
$$

Subtracting the two equations $y_2=mx_2+q$ and $y_1=mx_1+q$ eliminates the term $q$, leaving $y_2-y_1=m(x_2-x_1)$. Dividing by the change in the horizontal coordinate gives $m$. If we interchange the points, both numerator and denominator change sign, so the ratio stays the same.
:::

:::esempio{titolo="Initial position and constant velocity"}
An object is at position $1\,\mathrm{m}$ at time zero and at $7\,\mathrm{m}$ after $3\,\mathrm{s}$. Assume its position–time graph is a straight line between the measurements. Its displacement over this interval is $7\,\mathrm{m}-1\,\mathrm{m}=6\,\mathrm{m}$. The elapsed time is $3\,\mathrm{s}$, so the slope is $2\,\mathrm{m/s}$. Since the first point has horizontal coordinate zero, we already know the intercept, and the formula is

$$
s(t)=1\,\mathrm{m}+(2\,\mathrm{m/s})t.
$$

At $t=2\,\mathrm{s}$ the object is $5\,\mathrm{m}$ from the origin in the positive direction. Its position has changed by $4\,\mathrm{m}$ from its initial value. The two quantities have the same units, but the first gives a position relative to the origin and the second gives the change between two times.

::grafico{curve="t,2*t+1,0,4" legenda="s=2t+1" xmin=-0.5 xmax=4.5 ymin=-0.8 ymax=10 nomi="t,s" punti="0,1;3,7" segmenti="0,1,3,1;3,1,3,7" titolo="Position s in meters and time t in seconds. A horizontal run of 3 seconds corresponds to a rise of 6 meters."}
:::

:::osservazione{titolo="The sign of the slope and the choice of origin"}
A positive slope means the vertical coordinate increases as the horizontal coordinate increases. If the slope is negative, the vertical coordinate decreases. When $m=0$ the graph is horizontal and the function is constant. The choice of origin affects the intercept. For example, moving the origin in the example by $4\,\mathrm{m}$ in the positive direction subtracts $4\,\mathrm{m}$ from every position. The new intercept is $-3\,\mathrm{m}$. This common shift cancels when we take the difference between two positions, so the slope is still $2\,\mathrm{m/s}$.
:::

## Direct proportionality and the initial value

:::definizione{#diretta titolo="A constant ratio"}
Two quantities are **directly proportional** if their relationship is $y=kx$ for a constant $k$. For every allowed value $x\ne 0$, the ratio $\dfrac{y}{x}$ equals $k$. If the input is multiplied by a factor $\lambda$ and the new input is in the domain, then the output is multiplied by the same factor. The graph is a straight line that passes through the origin if the domain includes zero.

For a homogeneous liquid of constant density $\rho$, the ratio of its mass $m$ to its volume $V$ is $\dfrac{m}{V}=\rho$ for $V>0$. Once the density is known, the relationship $m=\rho V$ lets us find mass from volume or volume from mass.
:::

:::esempio{titolo="Mass of the liquid and the scale reading"}
An empty container has mass $12\,\mathrm{g}$. With $20\,\mathrm{mL}$ of liquid in the container, the scale reads $36\,\mathrm{g}$. The mass of the liquid is $36\,\mathrm{g}-12\,\mathrm{g}=24\,\mathrm{g}$. Dividing by the volume gives $\rho=1.2\,\mathrm{g/mL}$. For the same liquid, a volume $V=40\,\mathrm{mL}$ corresponds to a liquid mass of $48\,\mathrm{g}$. The scale therefore reads $12\,\mathrm{g}+48\,\mathrm{g}=60\,\mathrm{g}$.

Denoting the total mass by $M$, we obtain

$$
M(V)=12\,\mathrm{g}+(1.2\,\mathrm{g/mL})V.
$$

The graph of $M$ has the same slope as the graph of $m$ because a change in volume produces the same change in mass on both graphs. The intercepts differ. At zero volume the liquid has zero mass, while the scale reads the mass of the container.

::grafico{f="1.2*x;1.2*x+12" xmin=0 xmax=43 ymin=0 ymax=60 nomi="V,m" legenda="m=1.2V;M=1.2V+12" punti="20,24;20,36;40,48;40,60" segmenti="20,24,20,36;40,48,40,60" titolo="Mass in grams and volume in milliliters. The constant vertical separation of 12 grams is the mass of the container."}
:::

:::attenzione{titolo="A line with a nonzero intercept"}
For the two volumes in the example, the ratios of total mass to volume are $\dfrac{36}{20}=1.8$ and $\dfrac{60}{40}=1.5$, both in $\mathrm{g/mL}$. These ratios differ, so total mass and volume are not directly proportional. To find the density of the liquid, subtract the mass of the container before taking the ratio, or divide the change in total mass by the change in volume. The latter ratio is $\dfrac{60-36}{40-20}=1.2$ in $\mathrm{g/mL}$.
:::

## Inverse and quadratic relationships

:::definizione{#inversa-quadratica titolo="A constant product and a squared input"}
In an **inverse proportion**, $y=\dfrac{k}{x}$, with $x\ne 0$ and constant $k\ne 0$. The product $xy$ remains equal to $k$. For positive values of $x$ and $k$, increasing $x$ decreases $y$. If the input is multiplied by a positive factor $\lambda$, the output is divided by $\lambda$.

In a **quadratic relationship** of the form $y=kx^2$, with $k\ne 0$, the ratio $\dfrac{y}{x^2}$ is constant for $x\ne 0$. Multiplying the input by a factor $\lambda$ multiplies the output by $\lambda^2$. We can distinguish the two relationships by comparing products or ratios of values, or by observing how the vertical coordinates change when the horizontal coordinates are rescaled.
:::

:::esempio{titolo="Gas pressure at constant temperature"}
A fixed amount of an ideal gas occupies $3\,\mathrm{L}$ at a pressure of $120\,\mathrm{kPa}$. At constant temperature, the product of pressure and volume is $360\,\mathrm{kPa}\,\mathrm{L}$. If the volume changes to $6\,\mathrm{L}$, the pressure is

$$
p=\frac{360\,\mathrm{kPa}\,\mathrm{L}}{6\,\mathrm{L}}
=60\,\mathrm{kPa}.
$$

A volume of $2\,\mathrm{L}$ corresponds to a pressure of $180\,\mathrm{kPa}$. Increasing the volume from $2$ to $3\,\mathrm{L}$ lowers the pressure by $60\,\mathrm{kPa}$. Increasing it from $3$ to $4\,\mathrm{L}$ lowers the pressure by $30\,\mathrm{kPa}$. The increases in volume are equal, but the decreases in pressure differ. The slope along this branch of the graph therefore varies, and the model applies only to positive volumes.

::grafico{f="360/x" xmin=0 xmax=8 ymin=0 ymax=200 nomi="V,p" legenda="p=\dfrac{360}{V}" punti="2,180;3,120;6,60" segmenti="3,0,3,120;0,120,3,120;6,0,6,60;0,60,6,60" titolo="Pressure p in kilopascals and volume V in liters. Doubling the volume from 3 to 6 liters halves the pressure."}
:::

:::esempio{titolo="Kinetic energy and the square of speed"}
An object of mass $4\,\mathrm{kg}$ moves at speed $v=3\,\mathrm{m/s}$. Its kinetic energy is $E_c=\dfrac{1}{2}mv^2=18\,\mathrm{J}$. If the speed becomes $6\,\mathrm{m/s}$, then

$$
\frac{E_{c,2}}{E_{c,1}}
=\frac{(6\,\mathrm{m/s})^2}{(3\,\mathrm{m/s})^2}
=4.
$$

The final energy is $72\,\mathrm{J}$. The mass is the same in both states, so the common factor $\dfrac{1}{2}m$ cancels in the ratio. Working backward, to quadruple the energy at fixed mass we must double the speed. We take the positive square root because $v$ denotes the magnitude of the velocity.
:::

## Identifying a model from data

:::osservazione{#confronto-modelli titolo="Four tests for tabulated data"}
To test a relationship, calculate quantities that the model predicts will be constant. For an affine relationship, the slopes between successive pairs of points must be equal. For a direct proportion, the ratio of the vertical coordinate to the horizontal coordinate must also be constant. For an inverse proportion, check the products $xy$. For a quadratic relationship of the form $y=kx^2$, compare the ratios of the vertical coordinates to the squares of the horizontal coordinates. Use consistent units across measurements so that the results are comparable.
:::

::::teorema{#allineamento titolo="When three points are collinear"}
Let $P_1=(x_1,y_1)$, $P_2=(x_2,y_2)$, and $P_3=(x_3,y_3)$ be three points with $x_1<x_2<x_3$. The three points lie on the same straight line if and only if
$$
\frac{y_2-y_1}{x_2-x_1}=\frac{y_3-y_2}{x_3-x_2}.
$$
This condition justifies testing the slopes in a table of measurements. For example, the slopes between successive pairs of points $(0,1)$, $(2,5)$, and $(5,11)$ are $\dfrac{4}{2}=2$ and $\dfrac{6}{3}=2$, so the points lie on the line $y=2x+1$.

:::dimostrazione
The idea is to construct the line through the first two points and check that it contains the third.

If the three points lie on the line $y=mx+q$, applying the slope formula to the pairs $P_1,P_2$ and $P_2,P_3$ gives $m$ in both cases, so the two ratios are equal.

Conversely, let $m$ be the common value of the two ratios and let $q=y_1-mx_1$. The first ratio gives $y_2=y_1+m(x_2-x_1)=mx_2+q$, so $P_2$ lies on the line $y=mx+q$. The second ratio gives $y_3=y_2+m(x_3-x_2)=mx_2+q+mx_3-mx_2=mx_3+q$, so $P_3$ also lies on this line.
:::
::::

:::esempio{titolo="One increase in the input, three different outputs"}
Consider three dimensionless models. All three give $4$ at $x=2$. When the input increases to $x=4$, the direct proportion $y=2x$ gives $8$. The inverse proportion $y=\dfrac{8}{x}$ gives $2$. The quadratic model $y=x^2$ gives $16$. With only one data point, each model can fit the data because its coefficient can be determined from that point. A second measurement distinguishes these three candidate models because their predictions differ.

::grafico{f="2*x;8/x;x^2" xmin=0 xmax=5 ymin=0 ymax=20 nomi="x,y" punti="2,4;4,8;4,2;4,16" segmenti="2,0,2,4;4,0,4,16" titolo="Three models agree at x = 2. Their three different outputs at x = 4 distinguish the direct, inverse, and quadratic relationships."}
:::

:::esempio{titolo="Finding an affine relationship from measurements at unequal time intervals"}
The liquid level in a container is measured at $t=1$, $3$, and $6\,\mathrm{s}$. The respective levels are $7$, $11$, and $17\,\mathrm{cm}$. The level rises by $4\,\mathrm{cm}$ in the first interval and by $6\,\mathrm{cm}$ in the second. Since the intervals last $2$ and $3\,\mathrm{s}$, both ratios equal $2\,\mathrm{cm/s}$. The data points lie on a straight line. The intercept is $7\,\mathrm{cm}-(2\,\mathrm{cm/s})(1\,\mathrm{s})=5\,\mathrm{cm}$. The ratios of level to time, however, vary. An affine model with initial level $5\,\mathrm{cm}$ fits the data.
:::

:::osservazione{titolo="Agreement with a model and measurement precision"}
For experimental data, the ratios may differ because of measurement uncertainty. A comparison must take the precision of the measurements into account. For example, two slope estimates of $1.98$ and $2.02\,\mathrm{cm/s}$ are consistent with a common slope if each has an uncertainty of $0.03\,\mathrm{cm/s}$. The intervals $[1.95,2.01]$ and $[1.99,2.05]$ overlap. This agreement concerns the measured intervals and the chosen model. A prediction outside the observed range requires the assumption that the relationship also holds there.
:::

## Intersections and threshold values

:::definizione{#incroci titolo="Intersection of two graphs"}
An ordered pair $(x,y)$ lies on the graphs of both $f$ and $g$ when $y=f(x)$ and $y=g(x)$. We therefore find the horizontal coordinate of an intersection by solving $f(x)=g(x)$ on the common domain. Substituting the resulting value into either formula gives the vertical coordinate. If one of the functions is constant, the intersection tells us when the other quantity reaches that value.

For two lines $f(x)=m_1x+q_1$ and $g(x)=m_2x+q_2$ with different slopes, the equation is equivalent to $(m_1-m_2)x=q_2-q_1$. There is exactly one algebraic solution. The point lies on both model graphs if its horizontal coordinate belongs to both domains.
:::

:::esempio{titolo="When two levels are equal"}
The liquid levels in two containers are measured from the same reference height. In the first container the level rises according to $h_A(t)=2\,\mathrm{cm}+(2\,\mathrm{cm/min})t$. In the second it falls according to $h_B(t)=11\,\mathrm{cm}-(1\,\mathrm{cm/min})t$. Both formulas apply for $0\le t\le5\,\mathrm{min}$. To find when the levels are equal, write

$$
\begin{aligned}
2\,\mathrm{cm}+(2\,\mathrm{cm/min})t
  &=11\,\mathrm{cm}-(1\,\mathrm{cm/min})t,\\[6pt]
(3\,\mathrm{cm/min})t &=9\,\mathrm{cm},\\[6pt]
t&=3\,\mathrm{min}.
\end{aligned}
$$

This time lies in the allowed interval. Substituting it into both formulas gives $8\,\mathrm{cm}$. Before this time the second level is higher. Indeed, the difference $h_B(t)-h_A(t)=9\,\mathrm{cm}-(3\,\mathrm{cm/min})t$ is positive for $t<3\,\mathrm{min}$ and negative for $t>3\,\mathrm{min}$. The intersection marks the time at which the first level overtakes the second.

::grafico{f="2+2*x;11-x" xmin=0 xmax=5 ymin=0 ymax=14 nomi="t,h" legenda="h_A=2+2t;h_B=11-t" punti="0,2;0,11,pieno,11;3,8" segmenti="3,0,3,8;0,8,3,8" titolo="Levels h in centimeters and time t in minutes. The lines intersect after three minutes at a height of eight centimeters."}
:::

:::osservazione{titolo="Parallel lines and measurements over different intervals"}
If two lines have the same slope, the difference between their vertical coordinates is constant. If their intercepts differ, this difference is nonzero, so the lines never meet. If their intercepts are equal, the lines coincide. The two quantities are then equal at every input in their common domain. If the models apply over disjoint intervals, equating their formulas can give an algebraic solution even though there is no time at which both quantities can be measured.
:::

## Slopes on graphs of motion

:::definizione{#moto titolo="Average velocity and average acceleration"}
In straight-line motion, position $s(t)$ is a signed coordinate measured relative to an origin and a choice of positive direction. Between two times $t_1<t_2$, the **average velocity** is the displacement divided by the elapsed time. On a position–time graph it is the slope of the secant line through the two points. If the velocity $v(t)$ is known, the **average acceleration** is the change in velocity divided by the same elapsed time.

$$
v_m=\frac{s(t_2)-s(t_1)}{t_2-t_1},
\qquad
a_m=\frac{v(t_2)-v(t_1)}{t_2-t_1}.
$$

With position in meters and time in seconds, average velocity is measured in $\mathrm{m/s}$. With velocity in $\mathrm{m/s}$ and time in seconds, average acceleration is measured in $\mathrm{m/s^2}$. The quantity on the vertical axis determines what the slope represents.
:::

:::esempio{titolo="Two slopes for the same position function"}
An object’s position is given by $s(t)=(1\,\mathrm{m/s^2})t^2$ between $0$ and $4\,\mathrm{s}$. At times $0$, $2$, and $4\,\mathrm{s}$, its positions are $0$, $4$, and $16\,\mathrm{m}$, respectively. Over the first two seconds its average velocity is $\dfrac{4-0}{2-0}\,\mathrm{m/s}=2\,\mathrm{m/s}$. Over the next two seconds it is $\dfrac{16-4}{4-2}\,\mathrm{m/s}=6\,\mathrm{m/s}$. The elapsed times are equal and the displacements differ, so the graph has different average slopes over the two intervals. Over the entire interval the displacement is $16\,\mathrm{m}$ and the elapsed time is $4\,\mathrm{s}$. The overall average velocity is $4\,\mathrm{m/s}$.

::grafico{curve="t,t^2,0,4" legenda="s=t^2" xmin=0 xmax=4.8 ymin=0 ymax=20 nomi="t,s" punti="0,0;2,4;4,16" segmenti="0,0,2,4;2,4,4,16" titolo="Position s in meters and time t in seconds. The secant lines for the two intervals have slopes of 2 and 6 meters per second."}
:::

:::osservazione{titolo="Signed velocity and acceleration"}
A negative velocity indicates motion opposite to the chosen positive direction. A positive average acceleration means that the signed value of the velocity increases over the interval. If the velocity changes from $-5$ to $-1\,\mathrm{m/s}$ in $2\,\mathrm{s}$, the change is $+4\,\mathrm{m/s}$ and the average acceleration is $2\,\mathrm{m/s^2}$. Since both velocity values are negative, the speed decreases from $5$ to $1\,\mathrm{m/s}$. The sign of the velocity and the sign of its change describe different things, so they can be opposite.
:::

## Areas on a velocity–time graph

:::definizione{#area titolo="Displacement and distance traveled"}
On a velocity–time graph, the **displacement** between two times is the signed area between the graph and the time axis. A region above the axis contributes positively and a region below the axis contributes negatively. The **distance traveled** is the sum of the absolute values of these areas. Each region’s base has units of time and its height has units of velocity, so their product has units of length.

For constant velocity, the region is a rectangle. If velocity varies linearly and its initial and final values have the same sign, the displacement is the elapsed time multiplied by the arithmetic mean of the two velocities. This follows from the formula for the area of a trapezoid. If the graph crosses the axis, splitting the region at the time when $v=0$ also allows us to find the distance traveled.
:::

::::teorema{#spostamento-lineare titolo="Displacement when velocity varies linearly"}
If, between two times $t_1<t_2$, the velocity varies linearly from $v_1$ to $v_2$, the displacement is
$$
\Delta s=\frac{v_1+v_2}{2}\,(t_2-t_1).
$$
The formula holds for any combination of signs of the two velocities. When $v_1$ and $v_2$ have the same sign, the object does not reverse direction, and the distance traveled is $|\Delta s|$. For example, a velocity that decreases from $5$ to $1\,\mathrm{m/s}$ in $3\,\mathrm{s}$ gives a displacement of $\dfrac{5+1}{2}\cdot 3\,\mathrm{m}=9\,\mathrm{m}$.

:::dimostrazione
The idea is to calculate the signed area between the line segment and the time axis. Let $\Delta t=t_2-t_1$.

If $v_1$ and $v_2$ are both nonnegative, start with the rectangle of height $v_1$. Add a triangle if $v_2>v_1$, or subtract it if $v_2<v_1$. The triangle has height $|v_2-v_1|$, and both shapes have base $\Delta t$. In either case the area is
$$
v_1\Delta t+\frac{(v_2-v_1)\Delta t}{2}=\frac{v_1+v_2}{2}\,\Delta t.
$$
If both velocities are nonpositive, the region is the reflection across the time axis of the region for velocities $-v_1$ and $-v_2$. Thus only the sign of the signed area changes, and the formula still holds.

If $v_1>0>v_2$, the velocity is zero at the time $t_0$ for which $t_0-t_1=\dfrac{v_1}{v_1-v_2}\Delta t$, and consequently $t_2-t_0=\dfrac{-v_2}{v_1-v_2}\Delta t$. The two triangles have signed areas $\dfrac{v_1(t_0-t_1)}{2}$ and $\dfrac{v_2(t_2-t_0)}{2}$, so
$$
\Delta s=\frac{\Delta t}{2}\cdot\frac{v_1^2-v_2^2}{v_1-v_2}=\frac{v_1+v_2}{2}\,\Delta t,
$$
because $v_1^2-v_2^2=(v_1-v_2)(v_1+v_2)$. The case $v_1<0<v_2$ follows in the same way.
:::
::::

:::esempio{titolo="Two regions separated by a change in direction"}
The velocity decreases linearly from $4\,\mathrm{m/s}$ to $-2\,\mathrm{m/s}$ between $0$ and $6\,\mathrm{s}$. The slope is $-1\,\mathrm{m/s^2}$, so $v(t)=4\,\mathrm{m/s}-(1\,\mathrm{m/s^2})t$. The velocity is zero at $t=4\,\mathrm{s}$. Before that time, the region is a triangle of base $4\,\mathrm{s}$ and height $4\,\mathrm{m/s}$. After the zero crossing, it is a triangle of base $2\,\mathrm{s}$ and geometric height $2\,\mathrm{m/s}$. Denoting the unsigned areas above and below the axis by $S_+$ and $S_-$, respectively, we obtain

$$
\begin{aligned}
S_+ &= \frac{(4\,\mathrm{s})(4\,\mathrm{m/s})}{2}=8\,\mathrm{m},\\[6pt]
S_- &= \frac{(2\,\mathrm{s})(2\,\mathrm{m/s})}{2}=2\,\mathrm{m},\\[6pt]
\Delta s &= S_+-S_-=6\,\mathrm{m},\\[6pt]
d &= S_++S_-=10\,\mathrm{m}.
\end{aligned}
$$

If the initial position is $3\,\mathrm{m}$, the final position is $3\,\mathrm{m}+6\,\mathrm{m}=9\,\mathrm{m}$. The distance of $10\,\mathrm{m}$ includes travel in both directions.

::grafico{curve="t,4-t,0,6" legenda="v=4-t" xmin=-0.5 xmax=7 ymin=-3 ymax=5 nomi="t,v" punti="0,4;4,0;6,-2" area="4-x;0;0;4|0;4-x;4;6" segmenti="6,0,6,-2" titolo="Velocity v in meters per second and time t in seconds. The triangle below the axis makes a negative contribution to the displacement."}
:::

:::osservazione{titolo="Finding average velocity from area"}
Once the displacement is known, dividing by the elapsed time gives the average velocity. In the example, it is $\dfrac{6\,\mathrm{m}}{6\,\mathrm{s}}=1\,\mathrm{m/s}$. When velocity varies linearly over a single interval, the average velocity equals the arithmetic mean of the velocities at the endpoints. For a graph with several segments, add the contributions from each segment and then divide by the total time. If an object maintains a velocity of $2\,\mathrm{m/s}$ for $1\,\mathrm{s}$ and then $6\,\mathrm{m/s}$ for $3\,\mathrm{s}$, the respective displacements are $2$ and $18\,\mathrm{m}$. The average velocity is therefore $\dfrac{20\,\mathrm{m}}{4\,\mathrm{s}}=5\,\mathrm{m/s}$ because the object spends more time at the higher velocity.
:::


:::esempio{titolo="A sloping segment followed by a stop"}
An object has velocity $6\,\mathrm{m/s}$ at time zero. Its velocity decreases linearly, reaching zero at time $4\,\mathrm{s}$. Between $4$ and $7\,\mathrm{s}$ the object remains at rest. While it slows down, the displacement is the area of the triangle with base $4\,\mathrm{s}$ and height $6\,\mathrm{m/s}$. While it is at rest, the graph coincides with the axis and the area is zero. The displacement is therefore

$$
\Delta s=\frac{(4\,\mathrm{s})(6\,\mathrm{m/s})}{2}=12\,\mathrm{m}.
$$

The average velocity over the first four seconds is $3\,\mathrm{m/s}$. Over the full interval it is $\dfrac{12}{7}\,\mathrm{m/s}$. The values differ because the object reaches its final position after four seconds, but the second average also includes the time spent at rest. On a position–time graph, the stop corresponds to a horizontal segment at the position where the object stopped, which may be nonzero.
:::

:::osservazione{titolo="Distance, displacement, and two kinds of average"}
Distance traveled divided by elapsed time gives average speed. Displacement divided by elapsed time gives signed average velocity. An object that travels $5\,\mathrm{m}$ in one direction and returns to its starting point along the same line travels a total distance of $10\,\mathrm{m}$. If the trip takes $4\,\mathrm{s}$, its average speed is $2.5\,\mathrm{m/s}$ and its average velocity is zero. Average speed equals the absolute value of average velocity when the object travels in the same direction whenever it is moving.
:::


:::attenzione{titolo="Using units to interpret an area"}
On a position–time graph, the area under a curve has units of length times time. For example, a constant position of $3\,\mathrm{m}$ for $2\,\mathrm{s}$ gives a rectangle of area $6\,\mathrm{m}\,\mathrm{s}$. The object stays at the same position, so its displacement is zero. On a velocity–time graph, a rectangle with height $3\,\mathrm{m/s}$ and base $2\,\mathrm{s}$ has area $6\,\mathrm{m}$ and represents a displacement. Thus, even before doing the calculation, we can use the quantity on the vertical axis to determine what the area represents.
:::

:::osservazione{titolo="Checking an area using average velocity"}
If the velocity stays between $2$ and $5\,\mathrm{m/s}$ for $4\,\mathrm{s}$, the displacement lies between $8$ and $20\,\mathrm{m}$. This is because the region under the graph contains the rectangle of height $2\,\mathrm{m/s}$ and is contained in the rectangle of height $5\,\mathrm{m/s}$. This check gives bounds even when the graph is curved and the exact shape of the region is unknown.
:::
