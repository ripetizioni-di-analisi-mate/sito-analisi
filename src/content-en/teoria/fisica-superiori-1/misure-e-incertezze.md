---
titolo: "Measurements, instruments, and uncertainties"
sommario: "Readings, repeated measurements, intervals, and propagation of uncertainty under explicit rules."
---

Two instruments can give different readings of the same length. To decide whether the difference matters, we need the resolution, the reading rule, and, for more than one reading, the spread.

## Instruments and resolution

:::definizione{#strumenti titolo="Range, divisions, and readings"}
An instrument's **range** is the interval over which it is intended to be used. On a scale starting at zero, its upper endpoint is the largest value that can be measured. The **resolution** is the smallest distinguishable change. On an analogue scale it is generally associated with the gap between two consecutive marks. If $2\,\mathrm N$ and $6\,\mathrm N$ are separated by eight equal intervals, the resolution is $\dfrac{6-2}{8}\,\mathrm N=0.5\,\mathrm N$. Count the spaces between marks, because eight intervals have nine endpoints.
:::

:::osservazione{#criterio-lettura titolo="Resolution and assigned uncertainty"}
Resolution is a property of the instrument, whereas **instrumental uncertainty** also depends on the rule being used. A school experiment may use half a division on an analogue scale. Another may assign a full division or use the manufacturer's specification, which includes further effects. A digital instrument whose final digit is in hundredths can change its reading in steps of $0.01$ without guaranteeing a maximum deviation of $0.01$ from a reference value. Calculations use the rule stated for the experiment.
:::

::grafico{assi=0 xmin=1.6 xmax=6.4 ymin=-0.8 ymax=1.1 linee="2,0 6,0;2,-0.12 2,0.12;2.5,-0.08 2.5,0.08;3,-0.12 3,0.12;3.5,-0.08 3.5,0.08;4,-0.12 4,0.12;4.5,-0.08 4.5,0.08;5,-0.12 5,0.12;5.5,-0.08 5.5,0.08;6,-0.12 6,0.12" etichette="2,0.35,2 N;4,0.35,4 N;6,0.35,6 N;2.25,-0.31,0.5 N" titolo="Eight equal intervals separate 2 N and 6 N"}

:::esempio{titolo="Reading without moving the zero"}
To measure a segment, any two marks on one ruler may be used. If the starting point is at $1.2\,\mathrm{cm}$ and the endpoint at $5.8\,\mathrm{cm}$, the length is $4.6\,\mathrm{cm}$. It is the difference between two positions. If the ruler has a constant zero offset and both endpoints are measured in the same setup, the common offset of the positions cancels in the difference.
:::

## Repeated measurements

:::definizione{#ripetute titolo="Mean and half-range"}
When the same quantity is measured repeatedly using the same procedure, the **arithmetic mean** of the $n$ readings is $\bar x=\dfrac{x_1+\cdots+x_n}{n}$. The **half-range** is $s=\dfrac{x_{\max}-x_{\min}}2$. The first is a sample central value. The second uses only the extreme readings and gives half the distance between them. Readings of $9.8$, $10.0$, and $10.2\,\mathrm{cm}$ have mean $10.0\,\mathrm{cm}$ and half-range $0.2\,\mathrm{cm}$.
:::

:::esempio{titolo="The mean and the midpoint of the extremes"}
Readings of $8$, $8$, and $14\,\mathrm{cm}$ have a mean of $10\,\mathrm{cm}$. The midpoint between $8$ and $14$ is $11\,\mathrm{cm}$. The two readings equal to $8$ enter the mean separately and pull it towards $8$. The half-range stays at $3\,\mathrm{cm}$. When readings are asymmetric, an interval centred on the mean with radius equal to the half-range can omit a reading. Here it would give $[7;13]\,\mathrm{cm}$. To specify the entire observed range, report the endpoints $[8;14]\,\mathrm{cm}$.
:::

::grafico{assi=0 xmin=6.5 xmax=15 ymin=-0.8 ymax=2 linee="8,0 14,0" punti="8,0,pieno;10,0,pieno;11,0,pieno;14,0,pieno" etichette="8,0.34,8 twice;10,-0.34,mean 10;11,0.60,midpoint 11;14,0.34,14" titolo="Sample mean and midpoint of the extremes in centimetres"}

:::osservazione{#dispersione-strumentale titolo="When the readings coincide"}
If a series of measurements always gives the same value, its half-range is zero. The instrument's resolution still limits what can be distinguished. When the method requires the larger of the instrumental uncertainty and the half-range, compare quantities in the same unit and choose the larger. For example, a half-range of $0.05\,\mathrm{cm}$ is half of $1\,\mathrm{mm}$, so with a reading uncertainty of $1\,\mathrm{mm}$ the assigned uncertainty is $1\,\mathrm{mm}$.
:::

## Reporting a result and its interval

:::definizione{#intervalli titolo="Central value and absolute uncertainty"}
In $x=(x_m\pm\Delta x)$, $x_m$ is the central value and $\Delta x\geq 0$ is the **absolute uncertainty**. Both have the same unit. For $l=(12.0\pm0.2)\,\mathrm{cm}$, the corresponding symmetric interval runs from $11.8$ to $12.2\,\mathrm{cm}$. The uncertainty is half its width. The symbol $\pm$ combines both endpoints with the central value. A statistical interpretation would require information about the method used to assign the uncertainty.
:::

:::osservazione{#compatibilita titolo="Compatibility by overlap"}
Under the overlap rule, two measurements are **compatible** if their closed intervals share at least one point. For example, $[11.8;12.2]$ and $[12.1;12.5]$ intersect from $12.1$ to $12.2$. Two intervals that touch at an endpoint are also compatible under this rule. Compatibility says that the reported uncertainties allow a value in common. Assessing the quality of the method also requires information about the reading and calibration process.
:::

::grafico{assi=0 xmin=11.7 xmax=12.6 ymin=-0.3 ymax=1.5 linee="11.8,0.83 12.2,0.83;12.1,0.38 12.5,0.38" punti="11.8,0.83;12.2,0.83;12.1,0.38;12.5,0.38" segmenti="12.1,0.25,12.1,0.95;12.2,0.25,12.2,0.95" etichette="11.94,1.05,reading A;12.36,0.15,reading B" titolo="The intervals in centimetres share the segment from 12.1 to 12.2"}

## Relative and percentage uncertainty

:::definizione{#relativa titolo="Comparing uncertainty with the measurement"}
For a positive central value, **relative uncertainty** is $\varepsilon=\dfrac{\Delta x}{x_m}$. Its percentage value is $100\varepsilon$. The units cancel in the ratio when both terms are stated in the same unit. If $m=(50\pm1)\,\mathrm g$, the ratio is $0.02$ and the percentage is $2\%$. To recover absolute uncertainty from the percentage, divide the percentage by one hundred and multiply by the measured value.
:::

:::esempio{titolo="Comparing relative resolutions"}
Two instruments measure lengths of $(10\pm1)\,\mathrm{mm}$ and $(100\pm1)\,\mathrm{mm}$. Their intervals both have width $2\,\mathrm{mm}$, but the uncertainty is $10\%$ of the first value and $1\%$ of the second. Relative uncertainty measures the size of the uncertainty compared with the quantity being studied. At a central value of zero, the ratio is undefined. An absolute uncertainty can still be reported.
:::

## Propagation of uncertainty

::::teorema{#propagazione titolo="Conservative estimates and linear approximations"}
If each input lies within a symmetric interval and every combination of the two intervals is allowed, the largest deviation from the sum or difference of the central values is $\Delta a+\Delta b$. For a product or a ratio of positive quantities with small relative uncertainties, the conservative **first-order** estimate is the sum of the relative uncertainties. For a power $z=x^n$ with $x>0$, to first order $\varepsilon_z\simeq\lvert n\rvert\varepsilon_x$.

:::dimostrazione
The sum is largest when both inputs reach their upper endpoints. The difference is largest when the first input is at its upper endpoint and the second at its lower endpoint. In both cases, the increase from the central value is $\Delta a+\Delta b$. For a product, writing the two upper endpoints as $a(1+\varepsilon_a)$ and $b(1+\varepsilon_b)$ shows that the relative increase includes $\varepsilon_a+\varepsilon_b+\varepsilon_a\varepsilon_b$. The first-order approximation retains the two linear terms. For a ratio, an increase uses the lowest denominator, so the denominator contains the factor $1-\varepsilon_b$. If $\varepsilon_b$ is small, its reciprocal is approximately $1+\varepsilon_b$, leading to the same sum.
:::
::::

:::esempio{#limiti-esatti titolo="Exact bounds from input intervals"}
A square's nominal side is $10\,\mathrm{cm}$ and its absolute uncertainty is $1\,\mathrm{cm}$. The side lies between $9$ and $11\,\mathrm{cm}$, so the area lies between $81$ and $121\,\mathrm{cm}^2$. The linear estimate around $100\,\mathrm{cm}^2$ gives $20\%$, or an approximate interval from $80$ to $120\,\mathrm{cm}^2$. It differs from the exact endpoints by the quadratic term of $1\,\mathrm{cm}^2$. If one needs an upper bound guaranteed under this interval model, use the exact bound.
:::

:::attenzione{titolo="Dependence between the inputs"}
When the same reading appears twice in a formula, the two deviations are the same deviation. In $a-a$ they cancel even if $a$ is uncertain. Adding absolute uncertainties for a difference instead treats opposite deviations as possible. The rule is chosen from the available information about the inputs. For a ratio, the denominator's interval must also stay away from zero.
:::

## Rounding without adding precision

:::osservazione{#cifre titolo="Useful digits in the result"}
Report the central value and its uncertainty to matching decimal places. If the final uncertainty is $0.2\,\mathrm{cm}$, a central reading of $12.347\,\mathrm{cm}$ is reported as $(12.3\pm0.2)\,\mathrm{cm}$ when rounding the central value to the nearest tenth. Keep extra digits through the intermediate steps. Intermediate rounding errors add up or are amplified in later calculations. For a bound that must stay conservative, the procedure may require rounding the uncertainty upward.
:::

:::esempio{titolo="Rounding to a tenth"}
In $12.45$, the first digit discarded when rounding to a tenth is the five in the hundredths place. Rounding a tie upward gives $12.5$. The hundredths digit of $12.44$ is four, so the result is $12.4$. State the tie-breaking rule, because procedures can handle ties in different ways.
:::

## Random and systematic errors

:::definizione{#errori titolo="Spread and calibration"}
**Random errors** appear as variations between repeated readings. A **systematic offset** shifts readings from a reference in a repeatable way. A scale that always reads $3\,\mathrm g$ too high over the mass range in use has a positive offset. Comparing several known samples helps establish whether the offset is constant or changes across the scale. Repeated readings of one object characterize the reading spread. A reference is needed to identify an instrument with incorrect calibration.
:::

::grafico{f="x;x+3" xmin=0 xmax=12 ymin=0 ymax=15 nomi="reference mass (g),reading (g)" legenda="\text{ideal reading};\text{reading with offset}" punti="6,6,pieno,A;6,9,pieno,B" titolo="A 3 g offset gives a line parallel to the ideal reading"}

:::esempio{titolo="Close readings and a distant reference"}
On a $100\,\mathrm g$ sample, a scale reads $105.0$, $104.9$, and $105.1\,\mathrm g$. The readings are close together and are about $5\,\mathrm g$ away from the sample value. A more stable mean would help estimate the offset, which remains even when the effect of random fluctuations is reduced. A correction of $5\,\mathrm g$ should be applied to other masses only after checking that the offset persists over that range.
:::
