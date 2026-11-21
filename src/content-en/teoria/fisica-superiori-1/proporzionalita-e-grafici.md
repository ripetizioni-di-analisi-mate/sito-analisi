---
titolo: "Proportionality and graphs"
sommario: "Reading tables, scales, and graphs. Direct, inverse, affine, and quadratic models."
---

This chapter shows how to read a graph and a table of measurements and how to recognise the formula that links two quantities, for example $V=3t$ for the volume $V$ of water that a tap delivers in the time $t$.

## Axes and scales

:::definizione{#assi titolo="Matching coordinates to quantities"}
A **quantity** is a property that is measured, such as a length, a time or a force. The result of a measurement is a number followed by a **unit of measurement**, for example $4\,\mathrm{cm}$ (centimetres) or $10\,\mathrm N$. The symbol $\mathrm N$ is read *newton* and is the unit of force.

A graph has two **axes**, two graduated lines, one horizontal and one vertical. The quantity and its unit are written next to each axis. A point on the graph represents a pair of values measured together and is written $(x;y)$. The first number, $x$, is the **horizontal coordinate** and is read on the horizontal axis. The second number, $y$, is the **vertical coordinate** and is read on the vertical axis. In a graph with length in centimetres on the horizontal axis and force in newtons on the vertical axis, the point $(4;15)$ states that a length of $4\,\mathrm{cm}$ corresponds to a force of $15\,\mathrm N$. The expression "graph of $y$ against $x$", or "of $y$ as a function of $x$", states that $y$ is on the vertical axis and $x$ on the horizontal axis.

The **scale** of an axis is the value that corresponds to one grid square. The two scales are chosen independently. For this reason a gap of two squares represents $4\,\mathrm{cm}$ on an axis where one square is worth $2\,\mathrm{cm}$, and represents $10\,\mathrm N$ on an axis where one square is worth $5\,\mathrm N$. If an axis runs from $10\,\mathrm s$ to $30\,\mathrm s$ (seconds) in five equal squares, each square is worth $\dfrac{30-10}{5}\,\mathrm s=4\,\mathrm s$. Three squares after the start of the axis the reading is $10+3\cdot4=22\,\mathrm s$.

Two points are compared using the values read from the scales. The angle a line makes on paper depends on the two scales chosen for the drawing.
:::

:::esempio{#unita-pendenza titolo="From grid squares to physical values"}
The **slope** of a straight line on a graph is a ratio, that is, the result of a division, of two differences. The numerator (above the fraction line) is the increase of the quantity on the vertical axis, and the denominator (below) is the increase of the quantity on the horizontal axis. A difference between two values is written with the Greek letter $\Delta$, read *delta*. $\Delta l$ is the difference between two lengths and $\Delta F$ the difference between two forces.

In a graph of force $F$ against length $l$, each square represents $2\,\mathrm{cm}$ horizontally and $5\,\mathrm N$ vertically. From point $P$ to point $Q$ on the line, the movement is two squares right and three squares up. The scales give
$$
\Delta l=2\cdot2\,\mathrm{cm}=4\,\mathrm{cm},\qquad \Delta F=3\cdot5\,\mathrm N=15\,\mathrm N.
$$
The slope is $\dfrac{\Delta F}{\Delta l}=\dfrac{15}{4}\,\mathrm{N/cm}=3.75\,\mathrm{N/cm}$. The unit $\mathrm{N/cm}$ is read *newtons per centimetre*.

The ratio of grid squares, $\dfrac32$, describes only the tilt of the line on paper. To obtain the slope, the squares are converted into newtons and centimetres using the scales.

The numerical value of a slope depends on the units used. One metre contains $100\,\mathrm{cm}$, so the same line has slope $3.75\cdot100=375\,\mathrm{N/m}$ (newtons per metre).
:::

::grafico{f="15*x/4" xmin=0 xmax=6 ymin=0 ymax=24 punti="0,0,pieno,P;4,15,pieno,Q" segmenti="0,0,4,0;4,0,4,15" nomi="l (cm),F (N)" titolo="The ratio of coordinate differences is 15 N divided by 4 cm"}

:::esempio{titolo="Two vertical scales for the same readings"}
A **force gauge** is an instrument that measures forces. It reads $18\,\mathrm N$ at $1\,\mathrm s$ and $20\,\mathrm N$ at $5\,\mathrm s$. The **average slope** between the two readings is the difference of the forces divided by the difference of the times:
$$
\dfrac{20-18}{5-1}\,\mathrm{N/s}=\dfrac{2}{4}\,\mathrm{N/s}=0.50\,\mathrm{N/s}.
$$
The same two points are drawn in two ways.

- If the vertical axis starts at $17\,\mathrm N$, the segment joining the two readings fills much of the drawing and the rise is easy to notice.
- If the vertical axis starts at zero, the increase of $2\,\mathrm N$ is small compared with the $20\,\mathrm N$ of the axis and the segment looks nearly horizontal.

The value at which the scale starts changes the look of the figure. In both drawings the change in force remains $20-18=2\,\mathrm N$ and the average slope remains $0.50\,\mathrm{N/s}$, because they are calculated from the values read on the scales.

If the axes are swapped, with force horizontal and time vertical, the slope becomes $\dfrac{5-1}{20-18}\,\mathrm{s/N}=\dfrac42\,\mathrm{s/N}=2\,\mathrm{s/N}$. The two slopes have different meanings. The first gives the average increase of force, in newtons, in one second. The second gives the average number of seconds for an increase of one newton.
:::

::grafico{segmenti="1,18,5,20" punti="1,18,pieno,A;5,20,pieno,B" xmin=0 xmax=6 ymin=17 ymax=22 nomi="t (s),F (N)" titolo="The force rises by 2 N between 1 s and 5 s. The vertical scale starts at 17 N."}

## Direct proportionality

:::definizione{#diretta titolo="Constant ratio"}
A tap delivers $3$ litres of water per minute. In $1\,\mathrm{min}$ it fills $3\,\mathrm L$, in $2\,\mathrm{min}$ it fills $6\,\mathrm L$ and in $4\,\mathrm{min}$ it fills $12\,\mathrm L$ ($\mathrm L$ is the symbol for the litre, $\mathrm{min}$ for the minute). Dividing each volume by its time always gives the same number:
$$
\frac31=\frac62=\frac{12}{4}=3.
$$
Two quantities $x$ and $y$ are in **direct proportionality** when $y=kx$. The number $k$ is a **constant**, that is, it stays the same for all pairs, and is called the **coefficient of proportionality**. For $x\neq0$ ($x$ different from zero) the ratio $\dfrac yx$ equals $k$. In the example the volume $V$ and the time $t$ satisfy $V=3t$, with $k=3\,\mathrm{L/min}$ (litres per minute). A formula that describes a phenomenon, such as $V=3t$, is also called a **law** or a **model**.

- The units of $k$ are the units of $y$ divided by those of $x$.
- The **domain** is the set of values of $x$ for which the formula is used. When zero belongs to the domain, the formula gives $y=k\cdot0=0$ at $x=0$. The graph is then a straight line through the origin, that is, through the point $(0;0)$.
- Multiplying $x$ by a number also multiplies $y$ by that number. The **flow rate** is the volume of liquid delivered in each unit of time. When water is collected at a constant flow rate, twice the time since collecting began gives twice the volume collected. In the figure this is the step from $A=(1;3)$ to $B=(2;6)$.
:::

::grafico{f="3*x" xmin=0 xmax=4 ymin=0 ymax=12 nomi="t (min),V (L)" punti="1,3,pieno,A;2,6,pieno,B" titolo="At a flow rate of 3 L/min, doubling the time doubles the collected volume"}

:::esempio{#diretta-inversa titolo="From volume to time"}
The collected volume follows the law $V=3t$, with $V$ in litres and $t$ in minutes. The time needed to collect $7.5\,\mathrm L$ is required. The **sides** of an equality are the two expressions to the left and to the right of the equals sign. In the law the time is multiplied by $3$, so it is found by dividing both sides by $3$:
$$
\begin{aligned}
7.5&=3t\\[6pt]
t&=\frac{7.5}{3}=2.5\,\mathrm{min}.
\end{aligned}
$$
On the graph the reading starts at $7.5$ on the vertical axis, moves across to the line, and ends at the horizontal coordinate of that point. Substituting $2.5$ into the law recovers the requested volume, because $3\cdot2.5=7.5\,\mathrm L$.
:::

:::esempio{titolo="Changing units preserves the physical law"}
A pump delivers $1.2\,\mathrm L$ every $30\,\mathrm s$. The volume delivered is directly proportional to the time, and the coefficient of proportionality is the flow rate of the pump.

- In litres and seconds the coefficient is $\dfrac{1.2}{30}\,\mathrm{L/s}=0.04\,\mathrm{L/s}$ (litres per second).
- In millilitres and minutes the coefficient is $2400\,\mathrm{mL/min}$. One litre contains $1000\,\mathrm{mL}$ (millilitres), so $1.2\,\mathrm L=1200\,\mathrm{mL}$. One minute consists of two intervals of $30\,\mathrm s$, so in one minute the pump delivers $2\cdot1200=2400\,\mathrm{mL}$.

The two coefficients describe the same pump, as the volume delivered in $90\,\mathrm s$ shows.

- The first coefficient gives $0.04\cdot90=3.6\,\mathrm L$.
- With the second coefficient the time is written in minutes, $90\,\mathrm s=1.5\,\mathrm{min}$, and the result is $2400\cdot1.5=3600\,\mathrm{mL}$.

Since $3600\,\mathrm{mL}=3.6\,\mathrm L$, the two results state the same volume. The coefficient in litres per second is multiplied by a time in seconds. Combined with a time in minutes, it would leave in the units a ratio of minutes to seconds still to be converted.

If the vessel already contains $2\,\mathrm L$ before the pump starts, the volume added by the pump is still directly proportional to the time and equals $0.04\,t$. The total volume is $2+0.04\,t$ and at $t=0$ it equals $2\,\mathrm L$, so it is not directly proportional to the time. In an experiment, the question specifies which of the two volumes is being measured.
:::

## Inverse proportionality

:::definizione{#inversa titolo="Constant product"}
A layer of uniform thickness, that is, the same thickness at every point, is made from $12\,\mathrm{cm}^3$ (cubic centimetres) of a material. The volume of the layer is the area $A$ of its base multiplied by the thickness $h$, so $A\cdot h=12\,\mathrm{cm}^3$.

- With an area of $2\,\mathrm{cm}^2$ (square centimetres) the thickness is $\dfrac{12}{2}=6\,\mathrm{cm}$.
- With an area of $4\,\mathrm{cm}^2$ the thickness is $\dfrac{12}{4}=3\,\mathrm{cm}$.

The area has doubled and the thickness has halved, while the product has stayed $2\cdot6=4\cdot3=12$.

Two positive quantities $x$ and $y$ are in **inverse proportionality** when their product is constant, that is, $xy=c$ with $c>0$ ($c$ greater than zero). Dividing both sides by $x$ gives the explicit rule, that is, with $y$ alone on the left-hand side, $y=\dfrac{c}{x}$, with $x>0$. The value $x=0$ is excluded because division by zero is not defined. Doubling the first quantity halves the second, because the product stays equal to $c$. On the graph the curve goes down as $x$ increases. The ratio $\dfrac yx$ changes from one point to another. In the example it is $\dfrac62=3$ at the first point and $\dfrac34=0.75$ at the second.
:::

::grafico{f="12/x" xmin=1 xmax=7 ymin=0 ymax=13 nomi="A (cm²),h (cm)" punti="2,6,pieno,A;4,3,pieno,B" titolo="Doubling area halves the thickness. Volume is 12 cm³ at both points"}

:::attenzione{#calo-non-inverso titolo="A decrease on its own"}
A quantity that decreases while the other increases is not, for that reason alone, inversely proportional to it. For the law $y=12-2x$, three pairs and their products are calculated.

- For $x=2$, $y=12-2\cdot2=8$ and the product is $2\cdot8=16$.
- For $x=4$, $y=12-2\cdot4=4$ and the product is $4\cdot4=16$.
- For $x=3$, $y=12-2\cdot3=6$ and the product is $3\cdot6=18$.

The three products are not equal, so the law $y=12-2x$ is not an inverse proportionality. At the two points $x=2$ and $x=4$ alone, it gives the same values as the inverse law $y=\dfrac{16}{x}$. Two observations therefore agree with more than one model. To distinguish a constant-slope decrease from inverse proportionality, the values are compared at other points as well, or the starting point is the physical law governing the process.
:::

:::esempio{titolo="Finding the percentage change from the reciprocal factor"}
A **percentage** is a fraction with denominator $100$. For example $25\%=\dfrac{25}{100}=0.25$.

A journey of $120\,\mathrm{km}$ (kilometres) is made at a constant speed. The speed $v$, in kilometres per hour ($\mathrm{km/h}$), multiplied by the time $t$, in hours ($\mathrm h$), gives the distance. The distance is fixed, so $vt=120\,\mathrm{km}$ and the two quantities are inversely proportional.

- At a speed of $60\,\mathrm{km/h}$ the time is $\dfrac{120}{60}\,\mathrm h=2\,\mathrm h$.
- Increasing the speed by $25\%$ gives $60+0.25\cdot60=75\,\mathrm{km/h}$. The new time is $\dfrac{120}{75}\,\mathrm h=1.6\,\mathrm h$.

Since $\dfrac{1.6}{2}=0.80$, the new time is $80\%$ of the previous time, so the time decreases by $20\%$.

The **reciprocal** of a fraction is obtained by swapping numerator and denominator. The speed has been multiplied by $\dfrac{75}{60}=\dfrac54$. The product $vt$ stays the same, so the time has been multiplied by the reciprocal $\dfrac45=0.80$. The ratio of the two speeds thus gives the ratio of the times directly.

A decrease of $25\%$ would give a time of $2-0.25\cdot2=1.5\,\mathrm h$. At $75\,\mathrm{km/h}$, in $1.5\,\mathrm h$ the distance covered is $75\cdot1.5=112.5\,\mathrm{km}$, less than the $120\,\mathrm{km}$ of the journey. The percentages of the two changes agree only when the initial and final values agree, and in that case both are $0\%$.

On a journey with a fixed half-hour stop, speed multiplied by travel time still gives the distance. The total time also includes the stop and equals $\dfrac{120}{v}+0.5$, that is, the sum of a term inversely proportional to the speed and a constant. At $60\,\mathrm{km/h}$ the total time is $2.5\,\mathrm h$ and at $75\,\mathrm{km/h}$ it is $2.1\,\mathrm h$. In the figure the curve of the total time lies $0.5\,\mathrm h$ above the curve of the travel time.
:::

::grafico{f="120/x;120/x+0.5" xmin=35 xmax=93 ymin=0 ymax=4 punti="60,2,pieno;75,1.6,pieno;60,2.5,pieno;75,2.1,pieno" legenda="\text{driving time};\text{with stop}" nomi="v (km/h),t (h)" titolo="At 75 km/h the journey takes 1.6 h of driving. A fixed stop adds 0.5 h."}

:::esempio{titolo="Designing a measurement to separate two models"}
The **uncertainty** of a measurement states by how much, at most, the true value differs from the reading. The notation $5.5\pm0.4$ (the symbol $\pm$ is read *plus or minus*) denotes the interval of values between $5.5-0.4=5.1$ and $5.5+0.4=5.9$.

The laws $y=12-2x$ and $y=\dfrac{16}{x}$ coincide at $x=2$, where both equal $8$, and at $x=4$, where both equal $4$. A more precise reading repeated at either of those points would still give the same value predicted by both models. To distinguish them, the point $x=3$ is chosen, where the first law predicts $12-2\cdot3=6$ and the second predicts $\dfrac{16}{3}\simeq5.33$ (the symbol $\simeq$ is read *approximately equal to*).

Let the new reading at $x=3$ be $5.5\pm0.4$. Its interval runs from $5.1$ to $5.9$, so it contains the value $5.33$ predicted by the inverse law and does not contain the value $6$ predicted by the law $y=12-2x$.

With uncertainty $0.6$, the interval would run from $5.5-0.6=4.9$ to $5.5+0.6=6.1$ and would contain both predicted values. Distinguishing the two laws therefore requires a horizontal coordinate where the predictions differ and a sufficiently precise measurement. The agreement found concerns the horizontal coordinate $x=3$. On its own it does not prove that the inverse law holds for all horizontal coordinates.
:::

## Affine relationships

:::definizione{#affine titolo="Slope and initial value"}
A container already holds $4\,\mathrm L$ of water and receives $2\,\mathrm L$ every minute. After $t$ minutes the volume is $V=2t+4$. At $t=0$ it is $4\,\mathrm L$, after one minute $6\,\mathrm L$, after two minutes $8\,\mathrm L$.

An **affine relationship** is a law of the form $y=mx+q$, with $m$ and $q$ constant. Its graph is a straight line.

- The coefficient $m$ is the **slope**, also called the **gradient**. It measures the change in $y$ when $x$ increases by one unit. In the example $m=2\,\mathrm{L/min}$.
- The number $q$ is the **intercept**, that is, the model's value at $x=0$. On the graph it is the vertical coordinate of the point where the line meets the vertical axis. If zero is observable, the intercept represents the initial reading. In the example $q=4\,\mathrm L$.

With $q=0$ the law is the direct proportionality $y=mx$. If $q$ differs from zero, the ratio $\dfrac yx$ depends on $x$. In the example it is $\dfrac61=6$ after one minute and $\dfrac82=4$ after two minutes. Two points with different horizontal coordinates are enough to find $m$ and $q$ in the affine model.

If $y$ decreases as $x$ increases, the slope is negative. The law $y=12-2x$ has $m=-2$ and $q=12$. Its line meets the horizontal axis at the point where $y=0$. From $0=12-2x$ it follows that $2x=12$ and so $x=6$. A horizontal line, such as $y=6$, has slope zero.
:::

::::teorema{#due-punti titolo="Obtaining slope and intercept"}
A line $y=mx+q$ passes through the points $(x_1;y_1)$ and $(x_2;y_2)$, with $x_1\neq x_2$. The small numbers written below, called subscripts, tell the first point from the second. Then
$$
m=\frac{y_2-y_1}{x_2-x_1},\qquad q=y_1-mx_1.
$$
The slope is the difference of the vertical coordinates divided by the difference of the horizontal coordinates, taken in the same order.

For the points $(0;4)$ and $(3;10)$ the result is
$$
m=\frac{10-4}{3-0}=\frac63=2,\qquad q=4-2\cdot0=4,
$$
so the line is $y=2x+4$. For the points $(0;0)$ and $(3;6)$ the result is $m=\dfrac{6-0}{3-0}=2$ and $q=0$, so the line is $y=2x$. In the figure the two lines represent the volumes of two containers that both receive $2\,\mathrm{L/min}$. Container A starts empty and container B starts with $4\,\mathrm L$.

:::dimostrazione
The two points belong to the line, so their coordinates satisfy the law:
$$
y_1=mx_1+q,\qquad y_2=mx_2+q.
$$
The first equality is subtracted from the second, side by side. The intercept cancels because $q-q=0$, leaving
$$
y_2-y_1=mx_2-mx_1=m(x_2-x_1).
$$
In the last step the common factor $m$ has been taken out. The difference of the horizontal coordinates $x_2-x_1$ is nonzero, so both sides are divided by $x_2-x_1$ and the formula for $m$ follows. Subtracting $mx_1$ from both sides of the first equality gives $q=y_1-mx_1$.
:::
::::

::grafico{f="2*x;2*x+4" xmin=0 xmax=4 ymin=0 ymax=13 nomi="t (min),V (L)" legenda="\text{container A};\text{container B}" punti="0,0,pieno;0,4,pieno;3,6,pieno;3,10,pieno" titolo="The containers start with different volumes and fill at the same rate"}

:::esempio{#confronti-modelli titolo="Where lines meet"}
In another trial two containers hold volumes $V_A=2t+4$ and $V_B=4t$, with volumes in litres and time in minutes.

At the start A has a four-litre head start. Every minute B collects $4-2=2$ litres more than A, so the head start is used up after $\dfrac42=2\,\mathrm{min}$. The same result follows from requiring the two volumes to be equal:
$$
\begin{aligned}
2t+4&=4t\\[6pt]
4&=4t-2t=2t\\[6pt]
t&=2\,\mathrm{min}.
\end{aligned}
$$
At that instant both containers hold $8\,\mathrm L$. The **intersection** of two lines is the point that belongs to both, and the equality $2t+4=4t$ expresses its condition. On the graph it is the point $P=(2;8)$. The difference between the slopes, $4-2$, appears in the calculation because both volumes change with time.
:::

::grafico{f="2*x+4;4*x" xmin=0 xmax=4 ymin=0 ymax=16 punti="2,8,pieno,P" nomi="t (min),V (L)" legenda="A;B" titolo="The lines meet when the volumes agree at the same time"}

:::esempio{titolo="A straight line reaches a capacity limit"}
The **capacity** of a vessel is the largest volume it holds. A vessel contains $4\,\mathrm L$ and receives $3\,\mathrm{L/min}$. Its capacity is $16\,\mathrm L$ and, once it is full, incoming liquid overflows, that is, it spills over the rim. Before that time the volume $V$ in litres follows $V=4+3t$, with $t$ in minutes. The vessel is full when
$$
\begin{aligned}
4+3t&=16\\[6pt]
3t&=16-4=12\\[6pt]
t&=\frac{12}{3}=4\,\mathrm{min}.
\end{aligned}
$$
From the fourth minute onwards the volume in the vessel remains $16\,\mathrm L$. After $6\,\mathrm{min}$ the pump has supplied $3\cdot6=18\,\mathrm L$. Only $16-4=12\,\mathrm L$ have been added to the initial four in the vessel. The remaining $18-12=6\,\mathrm L$ have overflowed.

The graph of the volume in the vessel is made of two segments, which describe the same vessel under different conditions.

- From $0$ to $4\,\mathrm{min}$ the segment rises from $(0;4)$ to $(4;16)$, with slope $3\,\mathrm{L/min}$.
- From $4$ to $6\,\mathrm{min}$ the segment is horizontal, with slope zero.

The point $(4;16)$ belongs to both segments. The slope is read separately before and after capacity is reached. The volume supplied by the pump, $3t$, keeps increasing at the given rate even after the level in the vessel stops rising.
:::

::grafico{segmenti="0,4,4,16;4,16,6,16" punti="0,4,pieno;4,16,pieno;6,16,pieno" xmin=0 xmax=6.4 ymin=0 ymax=21 nomi="t (min),V (L)" titolo="After 4 min the volume in the vessel reaches capacity. The two segments have different slopes."}

## Reading a table

:::osservazione{#tabelle titolo="Choosing a model consistent with the data"}
A table of measurements lists pairs $(x;y)$. The check to carry out depends on the model.

- **Direct model.** The ratio $\dfrac yx$ is calculated for the pairs with nonzero $x$. The model is verified if the ratio is always the same. For $(1;7)$, $(2;14)$, $(3;21)$ the ratios all equal $7$, so $y=7x$.
- **Inverse model.** The product $xy$ is calculated. The model is verified if the product is always the same. For $(2;12)$, $(3;8)$, $(6;4)$ the products all equal $24$, so $y=\dfrac{24}{x}$.
- **Affine model.** Going from each pair to the next, the difference of the vertical coordinates is divided by the difference of the horizontal coordinates. The model is verified if these ratios are all equal. For $(1;3)$, $(2;5)$, $(5;11)$ the results are $\dfrac{5-3}{2-1}=2$ and $\dfrac{11-5}{5-2}=2$, so the points lie on a line of slope $2$.

The horizontal coordinates are **equally spaced** when the difference between one of them and the next is always the same, as in $1$, $2$, $3$. In this case, equal differences between successive vertical coordinates suffice for the affine model.

Experimental measurements have an uncertainty. For this reason ratios that do not match exactly can represent the same law. The **discrepancy** is the difference between a measured value and the value given by the law. The law agrees with the data if the discrepancies are smaller than the uncertainties of the measurements.
:::

:::esempio{#residui titolo="A deviation from the model"}
The **residual** of a measurement is the measured value minus the value predicted by the model.

The volume predicted by $V=2t+1$ at $t=4\,\mathrm{min}$ is $2\cdot4+1=9\,\mathrm L$. A reading of $8.8\,\mathrm L$ has residual $8.8-9=-0.2\,\mathrm L$. The residual is negative because the reading is lower than the prediction.

With uncertainty $0.3\,\mathrm L$ the reading is $8.8\pm0.3\,\mathrm L$ and its interval runs from $8.5$ to $9.1\,\mathrm L$. The predicted value, $9\,\mathrm L$, lies inside the interval, so the measurement agrees with the model.

Checking a single point tests that observation alone. Comparing the residuals of all the points on the graph shows whether the deviations follow a pattern.
:::

:::osservazione{#dominio titolo="Prediction inside and outside the data"}
The horizontal coordinates of the measurements run from a smallest value to a largest value.

- An **interpolation** is a prediction of the model for a horizontal coordinate lying between the observed ones.
- An **extrapolation** is a prediction for a horizontal coordinate outside that interval. It is reliable only if the process follows the same law outside the measurements too.

For example, a continuous filling model describes the volume as long as the container has space left. With $V=4+3t$ and capacity $16\,\mathrm L$ the line reaches the limit at $t=4\,\mathrm{min}$, so the model is used for $t$ between $0$ and $4\,\mathrm{min}$.
:::

:::esempio{titolo="A table distinguishes slope from ratio"}
A force $F$ is measured at several positions $x$ and the numbers in the table are treated as exact. The third column gives the ratio of force to position.

| x (cm) | F (N) | F/x (N/cm) |
| ---: | ---: | ---: |
| 1 | 7 | 7 |
| 2 | 11 | 5.50 |
| 4 | 19 | 4.75 |
| 5 | 23 | 4.60 |

The positions are unevenly spaced, because from $2$ to $4\,\mathrm{cm}$ the step is twice as large. The slope is therefore checked by dividing each increase in force by the matching increase in position.

- From the first to the second point: $\dfrac{11-7}{2-1}=\dfrac41=4\,\mathrm{N/cm}$.
- From the second to the third point: $\dfrac{19-11}{4-2}=\dfrac82=4\,\mathrm{N/cm}$.
- From the third to the fourth point: $\dfrac{23-19}{5-4}=\dfrac41=4\,\mathrm{N/cm}$.

All three ratios of increments are $4\,\mathrm{N/cm}$, so the points are **collinear**, that is, they belong to one straight line of slope $m=4\,\mathrm{N/cm}$. A relationship whose graph is a straight line is called **linear**. The values in the third column differ from one another, so the relationship is not a direct proportionality.

The first row gives the intercept $q=7-4\cdot1=3\,\mathrm N$. The model is $F=4x+3$. At $3\,\mathrm{cm}$, between two observed horizontal coordinates, the model predicts $4\cdot3+3=15\,\mathrm N$, and this prediction is an interpolation. Predicting $4\cdot7+3=31\,\mathrm N$ at $7\,\mathrm{cm}$ would be an extrapolation and would require checking that the relation stays linear beyond the observations.
:::

::grafico{f="4*x+3" punti="1,7,pieno;2,11,pieno;3,15,vuoto;4,19,pieno;5,23,pieno" xmin=0 xmax=6 ymin=0 ymax=27 nomi="x (cm),F (N)" titolo="Four points are measured. The open point at 3 cm is the interpolated value of 15 N."}

:::esempio{titolo="The pattern of residuals suggests which parameter to review"}
For the model $V=3t+2$, with volume in litres and time in minutes, readings of $6$, $14$ and $22\,\mathrm L$ are taken at $t=1$, $3$ and $5\,\mathrm{min}$.

- At $t=1$ the prediction is $3\cdot1+2=5\,\mathrm L$ and the residual is $6-5=1\,\mathrm L$.
- At $t=3$ the prediction is $3\cdot3+2=11\,\mathrm L$ and the residual is $14-11=3\,\mathrm L$.
- At $t=5$ the prediction is $3\cdot5+2=17\,\mathrm L$ and the residual is $22-17=5\,\mathrm L$.

The residuals $1$, $3$ and $5\,\mathrm L$ grow with time. Adding or subtracting a fixed amount to every prediction would change the three residuals by the same amount and would therefore leave unchanged the difference of $2\,\mathrm L$ between one residual and the next. The readings rise by $14-6=8$ litres every two minutes, that is, by $\dfrac82=4\,\mathrm{L/min}$, whereas the model has slope $3\,\mathrm{L/min}$.

If an affine model is still assumed, the intercept is kept at two litres and the slope is increased from three to four. The model $V=4t+2$ gives $6$, $14$ and $22\,\mathrm L$ and reproduces all three readings.

This differs from the case of identical residuals, in which the intercept is reviewed. Identical residuals could result from a **tare**, that is, a fixed amount included in every reading, such as the weight of the empty container on a balance. With real measurements, the size of the residuals is compared with the precision of the readings before the model is changed.
:::

## Square-law relationships

:::osservazione{#quadratica titolo="Scale factors"}
The area of a square of side $x$ is $x^2$, that is, $x\cdot x$. With sides of $1$, $2$, $3$ and $4\,\mathrm{cm}$ the area is $1$, $4$, $9$ and $16\,\mathrm{cm^2}$. When the side doubles from $2$ to $4\,\mathrm{cm}$, the area goes from $4$ to $16\,\mathrm{cm^2}$ and is therefore multiplied by four. The number by which a quantity is multiplied is called a **scale factor**.

- For $y=cx^2$ with $c>0$, doubling a value $x>0$ multiplies $y$ by four, because $c(2x)^2=4cx^2$. This case is identified by the ratio $\dfrac{y}{x^2}$, which is constant and equals $c$. The graph of $y=cx^2$ is a curve called a **parabola**.
- For $y=\dfrac{c}{x^2}$, a law called **inverse-square**, the same doubling divides $y$ by four, because $\dfrac{c}{(2x)^2}=\dfrac14\cdot\dfrac{c}{x^2}$. This case is identified by the product $yx^2$, which is constant and equals $c$.

The area of a square is an example of the first case, with $c=1$. If the side increases from $x$ to $x+1$, the increase in area is
$$
(x+1)^2-x^2=(x+1)(x+1)-x^2=x^2+2x+1-x^2=2x+1.
$$
The increase depends on $x$. In an affine relationship, by contrast, equal horizontal increases always give the same vertical increase.
:::

::grafico{f="x^2" xmin=0 xmax=4 ymin=0 ymax=16 nomi="l (cm),A (cm²)" punti="1,1,pieno;2,4,pieno;3,9,pieno" titolo="Equal increases in side length give different increases in area"}

:::esempio{titolo="Reading a law by transforming the horizontal coordinate"}
For the law $y=2x^2$ a new quantity $u=x^2$ is defined and $y$ is plotted against $u$.

The law becomes $y=2u$, which is a direct proportionality. The new graph is a straight line through the origin and its slope is the coefficient $2$ of the law.

The units of the horizontal axis change. If $x$ is in centimetres, $u$ is in square centimetres. The transformed graph serves to check the model, provided the quantity $u=x^2$ and its unit are written on the new axes. For a law $y=\dfrac{c}{x^2}$ the quantity to use on the horizontal axis is $u=\dfrac{1}{x^2}$, because then $y=cu$.
:::

:::esempio{titolo="The same side length controls area and perimeter differently"}
A square tile has side $\ell$. Its perimeter is $4\ell$ and its area is $\ell^2$.

- With $\ell=4\,\mathrm{cm}$ the perimeter is $4\cdot4=16\,\mathrm{cm}$ and the area is $4^2=16\,\mathrm{cm^2}$.
- If the side is tripled, $\ell=12\,\mathrm{cm}$. The perimeter becomes $4\cdot12=48\,\mathrm{cm}$ and the area becomes $12^2=144\,\mathrm{cm^2}$.

The perimeter has been multiplied by $3$ and the area by $\dfrac{144}{16}=9$, that is, by $3^2$. The coefficient four in the perimeter rule counts the sides. The exponent two (the small raised number) in the area rule indicates that two lengths are multiplied, each of them tripled.

The ratio of area to perimeter has unit $\dfrac{\mathrm{cm^2}}{\mathrm{cm}}=\mathrm{cm}$, so it is a length. It is $\dfrac{16}{16}=1\,\mathrm{cm}$ for the small square and $\dfrac{144}{48}=3\,\mathrm{cm}$ for the large one.

A tile with twice the area of the small one, that is, $32\,\mathrm{cm^2}$, is now required. Its side must satisfy $\ell^2=32\,\mathrm{cm^2}$. The square root of $32$, written $\sqrt{32}$, is the positive number whose square is $32$. Since $32=16\cdot2$, the result is
$$
\ell=\sqrt{32}=\sqrt{16}\cdot\sqrt2=4\sqrt2\,\mathrm{cm}\simeq5.66\,\mathrm{cm}.
$$
On the area graph, this is the horizontal coordinate of the point where the curve meets the horizontal line at $32\,\mathrm{cm^2}$. A side of eight centimetres would instead give an area of $64\,\mathrm{cm^2}$, which is four times $16\,\mathrm{cm^2}$. The ratio of the areas is the square of the ratio of the sides. To go from the ratio of the areas to the ratio of the sides, the positive square root is taken.
:::

::grafico{f="x^2;32" punti="4,16,pieno;5.65685425,32,pieno" segmenti="5.65685425,0,5.65685425,32" xmin=0 xmax=8 ymin=0 ymax=65 nomi="l (cm),A (cm²)" titolo="Increasing the area from 16 cm² to 32 cm² requires a side about 5.66 cm long."}

:::esempio{titolo="Slopes on intervals of equal width"}
In the square model $A=\ell^2$, two increases of the side are compared, each of one centimetre.

- Changing the side from $1$ to $2\,\mathrm{cm}$ increases the area by $4-1=3\,\mathrm{cm^2}$.
- Changing the side from $3$ to $4\,\mathrm{cm}$ increases the area by $16-9=7\,\mathrm{cm^2}$.

Lengthening the side of a square by $1\,\mathrm{cm}$ adds two strips as long as the side and $1\,\mathrm{cm}$ wide, plus a small square of side $1\,\mathrm{cm}$ in the corner. The second increase is larger because the two strips are longer. The average slopes have units of $\mathrm{cm^2/cm}$ and numerical values of three and seven.

An affine relation would give equal slopes for the two changes. In the graph of area as a function of $u=\ell^2$, the horizontal coordinates of the sides $1$, $2$, $3$ and $4\,\mathrm{cm}$ become $1$, $4$, $9$ and $16\,\mathrm{cm^2}$. Now the horizontal changes are $4-1=3$ and $16-9=7$ as well, so the slopes are $\dfrac33=1$ and $\dfrac77=1$. The law has become linear because $\ell^2$ has replaced $\ell$ on the horizontal axis.
:::
