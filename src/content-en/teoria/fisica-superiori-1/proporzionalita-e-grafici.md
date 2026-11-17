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

## Direct proportionality

:::definizione{#diretta titolo="Constant ratio"}
In **direct proportionality**, $y=kx$ with constant coefficient $k$. For $x\neq0$ the ratio $y/x$ equals $k$. The units of $k$ are the units of $y$ divided by those of $x$. When the origin belongs to the domain, the model gives $y=0$ at $x=0$. Multiplying $x$ by a factor also multiplies $y$ by that factor. When water is collected at a constant flow rate, doubling the time since collecting began doubles the volume collected.
:::

::grafico{f="3*x" xmin=0 xmax=4 ymin=0 ymax=12 nomi="t (min),V (L)" punti="1,3,pieno,A;2,6,pieno,B" titolo="At a flow rate of 3 L/min, doubling the time doubles the collected volume"}

:::esempio{#diretta-inversa titolo="From volume to time"}
Assume $V=3t$, with $V$ in litres and $t$ in minutes. To obtain $7.5\,\mathrm L$ takes $\dfrac{7.5}{3}=2.5\,\mathrm{min}$. Division is required because $t$ is the factor multiplied by three. On the graph start at $7.5$ on the vertical axis, move to the line, and read its horizontal coordinate. Substituting $2.5$ into the law recovers the requested volume.
:::

## Inverse proportionality

:::definizione{#inversa titolo="Constant product"}
Two positive quantities are **inversely proportional** if $xy=c$ for constant $c>0$. The explicit rule is $y=\dfrac{c}{x}$ with $x>0$. Doubling the first quantity halves the second because the product must stay the same. If $12\,\mathrm{cm}^3$ of material is spread in a layer of uniform thickness, an area of $2\,\mathrm{cm}^2$ requires $6\,\mathrm{cm}$ of thickness and an area of $4\,\mathrm{cm}^2$ requires $3\,\mathrm{cm}$. The model decreases across the graph, and the ratio $y/x$ varies.
:::

::grafico{f="12/x" xmin=1 xmax=7 ymin=0 ymax=13 nomi="A (cm²),h (cm)" punti="2,6,pieno,A;4,3,pieno,B" titolo="Doubling area halves the thickness. Volume is 12 cm³ at both points"}

:::attenzione{#calo-non-inverso titolo="A decrease on its own"}
For $y=12-2x$, going from $x=2$ to $x=4$ takes $y$ from $8$ to $4$. At these two points the product is $16$, but at $x=3$ it is $18$. Two observations can agree with more than one model. To distinguish a constant-slope decrease from inverse proportionality, check predictions at more points or start from the physical law governing the process.
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

## Square-law relationships

:::osservazione{#quadratica titolo="Scale factors"}
For $y=cx^2$ with $c>0$, doubling a value $x>0$ multiplies $y$ by four. An inverse-square rule $y=c/x^2$ instead divides $y$ by four for the same doubling. To identify the two cases, test the ratio $y/x^2$ and the product $yx^2$, respectively. The area of a square is an example of a direct square law. Increasing a side from $x$ to $x+1$ raises the area by $2x+1$, whereas an affine relationship always gives the same vertical increase for equal horizontal increases.
:::

::grafico{f="x^2" xmin=0 xmax=4 ymin=0 ymax=16 nomi="l (cm),A (cm²)" punti="1,1,pieno;2,4,pieno;3,9,pieno" titolo="Equal increases in side length give different increases in area"}

:::esempio{titolo="Reading a law by transforming the horizontal coordinate"}
If $y=2x^2$, define $u=x^2$ and plot $y$ against $u$. The law becomes the straight line $y=2u$, whose slope gives the coefficient. The axis units change. If $x$ is in centimetres, $u$ is in square centimetres. The transformed graph helps check the model when its new axes are stated.
:::
