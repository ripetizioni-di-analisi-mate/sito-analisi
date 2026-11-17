---
titolo: "Proportionality and graphs"
sommario: "Reading tables, scales, and graphs. Direct, inverse, affine, and quadratic models."
---

Pairs of experimental observations link one quantity to another. A graph makes the relationship visible, while a model makes its rule and range of validity explicit.

## Axes and scales

:::definizione{#assi titolo="Matching coordinates to quantities"}
A point $(x;y)$ represents a pair. Read $x$ on the horizontal axis and $y$ on the vertical axis. State which quantity and unit belong to each axis. A gap of two squares can represent $4\,\mathrm{cm}$ on one axis and $10\,\mathrm N$ on the other. To compare points quantitatively, use values read from the scales. The angle a line makes on paper depends on the choice of both graphical scales.
:::

:::esempio{#unita-pendenza titolo="From grid squares to physical values"}
In a graph of force $F$ against length $l$, each square represents $2\,\mathrm{cm}$ horizontally and $5\,\mathrm N$ vertically. Moving right by two squares and up by three along a line gives $\Delta l=4\,\mathrm{cm}$ and $\Delta F=15\,\mathrm N$. The slope is $\dfrac{15}{4}\,\mathrm{N/cm}$. The ratio of grid squares, $\dfrac32$, describes the tilt on paper and must be converted using the scales.
:::

::grafico{f="15*x/4" xmin=0 xmax=6 ymin=0 ymax=24 punti="0,0,pieno,P;4,15,pieno,Q" segmenti="0,0,4,0;4,0,4,15" nomi="l (cm),F (N)" titolo="The ratio of coordinate differences is 15 N divided by 4 cm"}

:::esempio{titolo="Two vertical scales for the same readings"}
A force gauge reads $18\,\mathrm N$ at $1\,\mathrm s$ and $20\,\mathrm N$ at $5\,\mathrm s$. In a graph starting at $17\,\mathrm N$, the segment joining the readings is easier to notice. In a graph starting at zero, it can look nearly horizontal. In both drawings the average slope between the two points is
$$
\dfrac{20-18}{5-1}\,\mathrm{N/s}=0.50\,\mathrm{N/s}.
$$
The origin of the scale changes the look of the figure. The physical change in force comes from subtracting the endpoint readings and remains two newtons. If the axes are swapped, the new ratio is $\dfrac42\,\mathrm{s/N}=2\,\mathrm{s/N}$. The slopes have different meanings because one measures the average force increase per second and the other measures the time per newton of increase between the readings.
:::

::grafico{segmenti="1,18,5,20" punti="1,18,pieno,A;5,20,pieno,B" xmin=0 xmax=6 ymin=17 ymax=22 nomi="t (s),F (N)" titolo="The force rises by 2 N between 1 s and 5 s. The vertical scale starts at 17 N."}

## Direct proportionality

:::definizione{#diretta titolo="Constant ratio"}
In **direct proportionality**, $y=kx$ with constant coefficient $k$. For $x\neq0$ the ratio $y/x$ equals $k$. The units of $k$ are the units of $y$ divided by those of $x$. When the origin belongs to the domain, the model gives $y=0$ at $x=0$. Multiplying $x$ by a factor also multiplies $y$ by that factor. When water is collected at a constant flow rate, doubling the time since collecting began doubles the volume collected.
:::

::grafico{f="3*x" xmin=0 xmax=4 ymin=0 ymax=12 nomi="t (min),V (L)" punti="1,3,pieno,A;2,6,pieno,B" titolo="At a flow rate of 3 L/min, doubling the time doubles the collected volume"}

:::esempio{#diretta-inversa titolo="From volume to time"}
Assume $V=3t$, with $V$ in litres and $t$ in minutes. To obtain $7.5\,\mathrm L$ takes $\dfrac{7.5}{3}=2.5\,\mathrm{min}$. Division is required because $t$ is the factor multiplied by three. On the graph start at $7.5$ on the vertical axis, move to the line, and read its horizontal coordinate. Substituting $2.5$ into the law recovers the requested volume.
:::

:::esempio{titolo="Changing units preserves the physical law"}
A pump delivers $1.2\,\mathrm L$ every $30\,\mathrm s$. In litres and seconds the coefficient of proportionality is $\dfrac{1.2}{30}\,\mathrm{L/s}=0.04\,\mathrm{L/s}$. If you record volume in millilitres and time in minutes, the coefficient is $2400\,\mathrm{mL/min}$, because the pump delivers twice $1200\,\mathrm{mL}$ in a minute. In $90\,\mathrm s$ the first model gives $0.04\cdot90=3.6\,\mathrm L$. Using $1.5\,\mathrm{min}$, the second gives $2400\cdot1.5=3600\,\mathrm{mL}$. The readings describe the same volume. Combining the coefficient in litres per second with a time in minutes would leave a ratio of time units still to be converted.

If the vessel already contains $2\,\mathrm L$ before the pump starts, the direct proportion applies to the added volume. The total volume has a nonzero initial value. An experiment must specify which of these volumes is being measured.
:::

## Inverse proportionality

:::definizione{#inversa titolo="Constant product"}
Two positive quantities are **inversely proportional** if $xy=c$ for constant $c>0$. The explicit rule is $y=\dfrac{c}{x}$ with $x>0$. Doubling the first quantity halves the second because the product must stay the same. If $12\,\mathrm{cm}^3$ of material is spread in a layer of uniform thickness, an area of $2\,\mathrm{cm}^2$ requires $6\,\mathrm{cm}$ of thickness and an area of $4\,\mathrm{cm}^2$ requires $3\,\mathrm{cm}$. The model decreases across the graph, and the ratio $y/x$ varies.
:::

::grafico{f="12/x" xmin=1 xmax=7 ymin=0 ymax=13 nomi="A (cm²),h (cm)" punti="2,6,pieno,A;4,3,pieno,B" titolo="Doubling area halves the thickness. Volume is 12 cm³ at both points"}

:::attenzione{#calo-non-inverso titolo="A decrease on its own"}
For $y=12-2x$, going from $x=2$ to $x=4$ takes $y$ from $8$ to $4$. At these two points the product is $16$, but at $x=3$ it is $18$. Two observations can agree with more than one model. To distinguish a constant-slope decrease from inverse proportionality, check predictions at more points or start from the physical law governing the process.
:::

:::esempio{titolo="Finding the percentage change from the reciprocal factor"}
Consider a $120\,\mathrm{km}$ journey at a constant speed. At $60\,\mathrm{km/h}$ it takes $2\,\mathrm h$. Increasing the speed by $25\%$ gives $75\,\mathrm{km/h}$. Since covering the same distance means $vt=120\,\mathrm{km}$, the new time is $\dfrac{120}{75}\,\mathrm h=1.6\,\mathrm h$. This is $80\%$ of the previous time, so the time decreases by $20\%$. A $25\%$ decrease would give $1.5\,\mathrm h$, which multiplied by the new speed amounts to only $112.5\,\mathrm{km}$.

The ratio of the two speeds directly gives the reciprocal ratio of the times. The magnitudes of the two percentage changes agree only when the initial and final values agree. On a journey with a fixed half-hour stop, speed multiplied by travel time still gives the distance. Total time also includes the stop, however, and becomes the sum of an inverse term and a constant.
:::

::grafico{f="120/x;120/x+0.5" xmin=35 xmax=93 ymin=0 ymax=4 punti="60,2,pieno;75,1.6,pieno;60,2.5,pieno;75,2.1,pieno" legenda="\text{driving time};\text{with stop}" nomi="v (km/h),t (h)" titolo="At 75 km/h the journey takes 1.6 h of driving. A fixed stop adds 0.5 h."}

:::esempio{titolo="Designing a measurement to separate two models"}
The laws $y=12-2x$ and $y=\dfrac{16}{x}$ coincide at $x=2$ and $x=4$. A more precise reading at either point would still give the same prediction from both models. To distinguish them, choose $x=3$, where the predictions are $6$ and $\dfrac{16}{3}\simeq5.33$. Suppose the new reading is $5.5\pm0.4$. Its interval runs from $5.1$ to $5.9$, so it contains the inverse prediction and excludes the affine one.

With uncertainty $0.6$, the interval would instead run from $4.9$ to $6.1$ and contain both values. Distinguishing the two laws therefore requires a horizontal coordinate where their predictions differ and a measurement with sufficient precision. Agreement with one interval alone does not prove that the relation holds for all horizontal coordinates.
:::

## Affine relationships

:::definizione{#affine titolo="Slope and initial value"}
An **affine relationship** has the form $y=mx+q$. The coefficient $m$ gives the change in $y$ per unit increase in $x$. The intercept $q$ is the model's value at $x=0$. If zero is observable, the intercept can represent the initial reading. Two points with different horizontal coordinates are enough to find $m$ and $q$ in the affine model. The ratio $y/x$ depends on $x$ when $q$ differs from zero.
:::

::::teorema{#due-punti titolo="Obtaining slope and intercept"}
For two points on the same line with $x_1\neq x_2$,
$$
m=\frac{y_2-y_1}{x_2-x_1},\qquad q=y_1-mx_1.
$$

:::dimostrazione
Write $y_1=mx_1+q$ and $y_2=mx_2+q$. Subtract the coordinates in the same order. The intercept cancels, leaving $y_2-y_1=m(x_2-x_1)$. Division is valid because the difference between the horizontal coordinates is nonzero. Substituting $m$ in the first equality gives $q$.
:::
::::

::grafico{f="2*x;2*x+4" xmin=0 xmax=4 ymin=0 ymax=13 nomi="t (min),V (L)" legenda="\text{container A};\text{container B}" punti="0,0,pieno;0,4,pieno;3,6,pieno;3,10,pieno" titolo="The containers start with different volumes and fill at the same rate"}

:::esempio{#confronti-modelli titolo="Where lines meet"}
Two containers hold volumes $V_A=2t+4$ and $V_B=4t$, with volumes in litres and time in minutes. The first has a four-litre head start, but the second gains two more litres every minute. After $\dfrac42=2\,\mathrm{min}$ they reach the same volume of $8\,\mathrm L$. The equality $2t+4=4t$ expresses the condition for intersection. The difference between slopes is relevant because both quantities change with time.
:::

::grafico{f="2*x+4;4*x" xmin=0 xmax=4 ymin=0 ymax=16 punti="2,8,pieno,P" nomi="t (min),V (L)" legenda="A;B" titolo="The lines meet when the volumes agree at the same time"}

:::esempio{titolo="A straight line reaches a capacity limit"}
A vessel contains $4\,\mathrm L$ and receives $3\,\mathrm{L/min}$. Its capacity is $16\,\mathrm L$ and, once it is full, incoming liquid overflows. Before that time the volume $V$ in litres follows $V=4+3t$, with $t$ in minutes. Solving $4+3t=16$ gives $t=4\,\mathrm{min}$. From the fourth minute onwards the volume in the vessel remains $16\,\mathrm L$ in this model. After $6\,\mathrm{min}$ the pump has supplied $18\,\mathrm L$, but only $12\,\mathrm L$ have been added to the initial four. The remaining $6\,\mathrm L$ have overflowed.

The initial and later segments describe the same vessel under different conditions. The point at four minutes belongs to both segments. Read the slope separately before and after capacity is reached. The volume supplied by the pump keeps increasing at the given rate even after the level in the vessel stops rising.
:::

::grafico{segmenti="0,4,4,16;4,16,6,16" punti="0,4,pieno;4,16,pieno;6,16,pieno" xmin=0 xmax=6.4 ymin=0 ymax=21 nomi="t (min),V (L)" titolo="After 4 min the volume in the vessel reaches capacity. The two segments have different slopes."}

## Reading a table

:::osservazione{#tabelle titolo="Choosing a model consistent with the data"}
Check a direct model by calculating $y/x$ for nonzero $x$, an inverse model by calculating $xy$, and an affine model by comparing ratios of successive differences. When the horizontal coordinates are equally spaced, equal vertical differences suffice for the last test. For experimental data with uncertainties, ratios that do not match exactly can represent the same law. Assess the size of the discrepancies against the available uncertainties.
:::

:::esempio{#residui titolo="A deviation from the model"}
The volume predicted by $V=2t+1$ at $t=4\,\mathrm{min}$ is $9\,\mathrm L$. A reading of $8.8\,\mathrm L$ has **residual** $8.8-9=-0.2\,\mathrm L$: it is lower than predicted. With uncertainty $0.3\,\mathrm L$, the prediction lies inside the interval associated with the reading. Checking a single point tests that observation, while comparing the whole graph shows whether the deviations follow a recognizable pattern.
:::

:::osservazione{#dominio titolo="Prediction inside and outside the data"}
Using a model between observed horizontal coordinates is interpolation. Using it beyond that interval is extrapolation, which assumes the process continues to follow the rule. For example, a continuous filling model describes a container until there is no space left. Beyond its maximum capacity, the behaviour changes. Find when the line reaches that limit to determine how far the model applies.
:::

:::esempio{titolo="A table distinguishes slope from ratio"}
We measure a force $F$ at several positions $x$ and treat the numbers in the table as exact. The positions are unevenly spaced. To check the slope, therefore, divide each vertical change by the matching horizontal interval.

| x (cm) | F (N) | F/x (N/cm) |
| ---: | ---: | ---: |
| 1 | 7 | 7 |
| 2 | 11 | 5.50 |
| 4 | 19 | 4.75 |
| 5 | 23 | 4.60 |

From the first to the second point, the force rises by $4\,\mathrm N$ over $1\,\mathrm{cm}$. From the second to the third it rises by $8\,\mathrm N$ over $2\,\mathrm{cm}$. From the third to the fourth it rises by $4\,\mathrm N$ over $1\,\mathrm{cm}$. All three ratios of increments are $4\,\mathrm{N/cm}$, so the points are collinear. The third column varies and therefore rules out direct proportion. The first row gives the intercept $7-4\cdot1=3\,\mathrm N$. The model predicts $15\,\mathrm N$ at $3\,\mathrm{cm}$, between two observed horizontal coordinates. Predicting $31\,\mathrm N$ at $7\,\mathrm{cm}$ would be an extrapolation and would require checking that the relation stays linear beyond the observations.
:::

::grafico{f="4*x+3" punti="1,7,pieno;2,11,pieno;3,15,vuoto;4,19,pieno;5,23,pieno" xmin=0 xmax=6 ymin=0 ymax=27 nomi="x (cm),F (N)" titolo="Four points are measured. The open point at 3 cm is the interpolated value of 15 N."}

:::esempio{titolo="The pattern of residuals suggests which parameter to review"}
For the model $V=3t+2$, with volume in litres and time in minutes, readings of $6$, $14$ and $22\,\mathrm L$ are taken at $t=1$, $3$ and $5\,\mathrm{min}$. The predictions are $5$, $11$ and $17\,\mathrm L$, so the residuals are $1$, $3$ and $5\,\mathrm L$. Subtracting or adding a fixed amount to every prediction would leave the differences between these residuals. The readings instead rise by eight litres every two minutes, or $4\,\mathrm{L/min}$.

If we still assume an affine model, keeping the intercept at two litres and increasing the slope from three to four reproduces all three readings. This differs from the case of identical residuals, which could result from a tare. With real measurements, compare the size of the discrepancy with the measurement precision before changing the model.
:::

## Square-law relationships

:::osservazione{#quadratica titolo="Scale factors"}
For $y=cx^2$ with $c>0$, doubling a value $x>0$ multiplies $y$ by four. An inverse-square rule $y=c/x^2$ instead divides $y$ by four for the same doubling. To identify the two cases, test the ratio $y/x^2$ and the product $yx^2$, respectively. The area of a square is an example of a direct square law. Increasing a side from $x$ to $x+1$ raises the area by $2x+1$, whereas an affine relationship always gives the same vertical increase for equal horizontal increases.
:::

::grafico{f="x^2" xmin=0 xmax=4 ymin=0 ymax=16 nomi="l (cm),A (cm²)" punti="1,1,pieno;2,4,pieno;3,9,pieno" titolo="Equal increases in side length give different increases in area"}

:::esempio{titolo="Reading a law by transforming the horizontal coordinate"}
If $y=2x^2$, define $u=x^2$ and plot $y$ against $u$. The law becomes the straight line $y=2u$, whose slope gives the coefficient. The axis units change. If $x$ is in centimetres, $u$ is in square centimetres. The transformed graph helps check the model when its new axes are stated.
:::

:::esempio{titolo="The same side length controls area and perimeter differently"}
A square tile has side $4\,\mathrm{cm}$, area $16\,\mathrm{cm^2}$ and perimeter $16\,\mathrm{cm}$. Tripling the side gives perimeter $48\,\mathrm{cm}$ and area $144\,\mathrm{cm^2}$. The coefficient four in the perimeter rule counts the sides. The exponent two in the area rule indicates that two lengths are multiplied, each of them tripled. The ratio of area to perimeter has the dimension of length. It is $1\,\mathrm{cm}$ for the small square and $3\,\mathrm{cm}$ for the large one.

Suppose we want a tile with twice the area of the small one. Its positive side length must satisfy $\ell^2=32\,\mathrm{cm^2}$ and is therefore $4\sqrt2\,\mathrm{cm}$. On the area graph, read the horizontal coordinate at the intersection with $32\,\mathrm{cm^2}$. A side of eight centimetres would instead quadruple the area. The ratio of the areas is the square of the ratio of the sides, so take the positive square root to reverse the calculation.
:::

::grafico{f="x^2;32" punti="4,16,pieno;5.65685425,32,pieno" segmenti="5.65685425,0,5.65685425,32" xmin=0 xmax=8 ymin=0 ymax=65 nomi="l (cm),A (cm²)" titolo="Increasing the area from 16 cm² to 32 cm² requires a side about 5.66 cm long."}

:::esempio{titolo="Slopes on intervals of equal width"}
In the square model $A=\ell^2$, changing the side from $1$ to $2\,\mathrm{cm}$ increases the area by $4-1=3\,\mathrm{cm^2}$. Changing it from $3$ to $4\,\mathrm{cm}$ increases the area by $16-9=7\,\mathrm{cm^2}$. Both side lengths increase by one centimetre. The second area increase is larger because adding to a longer side creates two longer strips in addition to the small corner square. The average slopes have units of $\mathrm{cm^2/cm}$ and numerical values of three and seven.

An affine relation would give equal slopes for the two changes. To check the graph of area as a function of $\ell^2$, instead, the horizontal coordinates become $1$, $4$, $9$ and $16\,\mathrm{cm^2}$. Now the horizontal changes are three and seven as well, and each slope equals one. Transforming the horizontal variable is what makes the law linear.
:::
