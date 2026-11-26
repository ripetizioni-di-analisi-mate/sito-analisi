---
titolo: Solving equations and rearranging formulas
sommario: Solve equations and systems of equations, isolate quantities in physics formulas, and check that the results satisfy the conditions of the problem.
---

## Equalities and operations that preserve equivalence

:::definizione{#equivalenza titolo="Equation and solution set"}
An **equation** states that two expressions, called its *sides*, are equal. The expressions depend on a quantity to be determined. The letter $x$ denotes the **unknown**. A solution is an admissible value of $x$ that makes the two sides equal when substituted into them. Two equations are equivalent on a given domain if they have the same solution set on that domain. Equivalence allows us to replace an equation with one that is easier to work with.
:::

::::teorema{#trasformazioni-equivalenti titolo="Reversible operations on both sides"}
On a domain where all the expressions are defined, adding the same expression to both sides or subtracting it from both sides produces an equivalent equation. The same holds if both sides are multiplied or divided by an expression that is nonzero throughout the domain. The first property lets us collect the terms containing the unknown on one side. The second lets us isolate the unknown or clear denominators.

:::dimostrazione
To establish equivalence, apply the inverse operation. If $L$ and $R$ denote the two sides and $u$ is defined on the domain, then $L=R$ implies $L+u=R+u$. Subtracting $u$ from the second equality recovers the first. If $k\ne0$ throughout the domain, then $L=R$ implies $kL=kR$. Dividing by $k$ recovers the original equality. For subtraction and division, the same reasoning applies with the operations in reverse order.
:::
::::

:::esempio{titolo="Two expressions with the same value"}
To solve $4x+2=2x+8$, first subtract $2x$ from both sides. The term containing the unknown remains on the left. Then subtract $2$ from both sides and divide by the remaining coefficient.
$$
\begin{aligned}
4x+2&=2x+8 \\[6pt]
2x+2&=8 \\[6pt]
2x&=6 \\[6pt]
x&=3 .
\end{aligned}
$$
At $x=3$, both sides equal $14$. In the coordinate plane, the graphs of the two sides are straight lines. Their intersection has horizontal coordinate $3$ and vertical coordinate $14$, so the horizontal coordinate of the intersection is the solution of the equation.

::grafico{f="4*x+2;2*x+8" xmin=-1 xmax=4 ymin=-2 ymax=18 punti="3,14,pieno" segmenti="3,0,3,14;0,14,3,14" titolo="Both sides equal $14$ when $x=3$"}

:::

:::attenzione{titolo="Multiplying by a factor that can be zero"}
$x=2$ implies $x(x-1)=2(x-1)$. The second equation is also satisfied when $x=1$, because both sides become zero. Multiplication by $x-1$ therefore preserves equivalence only on the domain $x\ne1$.
:::

:::osservazione{titolo="Difference between the two sides"}
To test a candidate solution, compute the **residual** $L-R$, the difference between the left and right sides. For the equation $4x+2=2x+8$, the residual is $2x-6$. At $x=2$, it is $-2$, so the left side is less than the right. At $x=4$, it is $2$, so the left side is greater. At $x=3$, the residual is zero. Writing an equation in the form $L-R=0$ lets us find the zeros of a single expression. In applications, both sides and their difference are expressed in the same units.
:::

## Linear equations

:::definizione{#equazioni-lineari titolo="Coefficient of the unknown and constant term"}
After expanding products and collecting like terms, a linear equation in $x$ can be written as $ax=b$. The number $a$ is the coefficient of $x$, and $b$ is the constant term. When $a\ne0$, the equation has degree one. The value of $a$ determines whether we can divide by the coefficient.

- If $a\ne0$, divide by $a$ to obtain the unique solution $x=\dfrac{b}{a}$.
- If $a=0$ and $b=0$, the equality holds for every $x$ in the domain. It is an identity on that domain.
- If $a=0$ and $b\ne0$, the equality is false for every $x$. The solution set is empty.

These three cases also apply when the coefficients depend on a parameter, a quantity whose value varies from one problem to another.
:::

:::esempio{titolo="The unknown on both sides"}
To solve $3(2x-1)=4x+9$, expand the product on the left. The factor $3$ multiplies both $2x$ and $-1$. Then subtract $4x$ from both sides and add $3$ to both sides.
$$
\begin{aligned}
6x-3&=4x+9 \\[6pt]
2x-3&=9 \\[6pt]
2x&=12 \\[6pt]
x&=6 .
\end{aligned}
$$
The remaining coefficient is $2$, so division gives just one value. At $x=6$, the left side equals $3\cdot11=33$ and the right side equals $24+9=33$.
:::

:::esempio{titolo="An equation with a parameter"}
Consider $k(x+1)=3x+k$, where $k$ is a fixed real number. Expand the product and subtract $k$ from both sides. Then collect the terms in $x$.
$$
\begin{aligned}
kx+k&=3x+k \\[6pt]
(k-3)x&=0 .
\end{aligned}
$$
When $k\ne3$, the coefficient is nonzero, so the only solution is $x=0$. When $k=3$, both sides of the second equation equal zero for every $x$. The formula $x=\dfrac{0}{k-3}$ applies only in the first case.
:::

:::esempio{titolo="Deformation of a spring under an initial load"}
In a linear model, the measured force is $F=F_0+kx$. The given value $F_0=5\,\mathrm{N}$ is the force at zero deformation, and $k=40\,\mathrm{N/m}$ is the spring constant. For a measured force of $25\,\mathrm{N}$, find the deformation $x$. Subtracting the initial force first gives the part proportional to $x$.
$$
\begin{aligned}
kx&=F-F_0=20\,\mathrm{N} \\[6pt]
x&=\frac{20\,\mathrm{N}}{40\,\mathrm{N/m}}
  =0.5\,\mathrm{m}.
\end{aligned}
$$
The term $F_0$ is expressed in newtons, so it can be subtracted from $F$. Substituting $x$ into the formula gives $5+40\cdot0.5=25$ newtons, as measured.
:::

## Rearranging formulas and working with units

:::definizione{#inverse titolo="Expressing one quantity in terms of the others"}
A **rearranged formula** expresses one quantity in a relation in terms of the others. The quantity we want is the unknown, and the others are given. For example, $\rho=\dfrac{m}{V}$ defines the density $\rho$ of a sample with mass $m$ and volume $V>0$. Multiplying by $V$ gives the mass, $m=\rho V$. If $\rho>0$, dividing this last equality by $\rho$ gives $V=\dfrac{m}{\rho}$. Thus the same relation lets us calculate any of three quantities, depending on which two are known.
:::

:::esempio{titolo="Volume of a sample"}
A sample has mass $20\,\mathrm{g}$ and density $4\,\mathrm{g/cm^3}$. Find its volume. Since the density is positive, we can use the formula rearranged for $V$.
$$
\begin{aligned}
V&=\frac{m}{\rho} \\[6pt]
&=\frac{20\,\mathrm{g}}{4\,\mathrm{g/cm^3}} \\[6pt]
&=5\,\mathrm{cm^3}.
\end{aligned}
$$
In the quotient, the units of mass cancel, leaving the unit of volume. To check the result, recalculate the mass using $m=\rho V$. This gives the original value, $20\,\mathrm{g}$.

::grafico{f="4*x;20" xmin=0 xmax=8 ymin=0 ymax=31 nomi="V,m" legenda="m=4V;m=20" punti="5,20,pieno" segmenti="5,0,5,20" titolo="With $V$ in $\mathrm{cm^3}$ and $m$ in $\mathrm{g}$, the level $20\,\mathrm{g}$ corresponds to the volume $5\,\mathrm{cm^3}$"}

:::

:::esempio{titolo="Pressure and force on a surface"}
A flat surface experiences a uniform pressure $p=8\,\mathrm{kPa}$ from a normal force of magnitude $F$. The surface has area $A=250\,\mathrm{cm^2}$. Since $p=\dfrac{F}{A}$ and $A>0$, multiplying by the area gives $F=pA$. To express the result in newtons, convert the pressure to pascals and the area to square meters.
$$
\begin{aligned}
p&=8\,000\,\mathrm{Pa} \\[6pt]
A&=250\cdot10^{-4}\,\mathrm{m^2}
   =0.025\,\mathrm{m^2} \\[6pt]
F&=8\,000\,\mathrm{Pa}\cdot0.025\,\mathrm{m^2}
   =200\,\mathrm{N}.
\end{aligned}
$$
The area conversion uses $10^{-4}$ because the ratio of centimeters to meters must be squared. Pascals times square meters gives newtons, as expected for a force.
:::

:::osservazione{titolo="Checking the dimensions of a rearranged formula"}
The expressions $V=\dfrac{m}{\rho}$ and $V=m\rho$ give different units. If $m$ is in grams and $\rho$ is in grams per cubic centimeter, the product has units of $\mathrm{g^2/cm^3}$, which are incompatible with volume. The quotient has units of $\mathrm{cm^3}$. Checking dimensions therefore reveals when a product and a quotient have been interchanged. Substituting the values into the original relation also checks the numerical factors, which can change without affecting the units.
:::

:::esempio{titolo="Amount of substance from the gas law"}
For an ideal gas, $pV=nRT$ relates the pressure $p$, volume $V$, amount of substance $n$, and absolute temperature $T$. We use the approximate value $R=8.31\,\mathrm{J/(mol\,K)}$ for the gas constant. To find $n$ when $T>0$, we can divide by the product $RT$ because it is positive. With $p=83.1\,\mathrm{kPa}$, $V=0.030\,\mathrm{m^3}$, and $T=300\,\mathrm{K}$, we obtain
$$
\begin{aligned}
n&=\frac{pV}{RT} \\[6pt]
&=\frac{83\,100\cdot0.030\,\mathrm{J}}
        {8.31\cdot300\,\mathrm{J/mol}} \\[6pt]
&=1.0\,\mathrm{mol}.
\end{aligned}
$$
The product $pV$ has units of energy because one pascal times one cubic meter equals one joule. The product $RT$ is measured in joules per mole. Their ratio therefore has the required unit.
:::

## Products and denominators

:::osservazione{#parentesi titolo="The distributive property and common denominators"}
To expand a product, apply the distributive property to every term in the sum. For example, $-3(x-2)=-3x+6$, because $-3$ also multiplies $-2$. In an equation with fractions, first determine the domain, then multiply both sides by a common denominator. The chosen factor also multiplies any terms written without a fraction. If the denominators depend on $x$, the values excluded from the domain remain excluded after simplification.
:::

:::esempio{titolo="Fractions with numerical denominators"}
In the equation $\dfrac{x-2}{4}+\dfrac{x+1}{6}=3$, the number $12$ is a common multiple of $4$ and $6$. Multiplying both sides by $12$ gives an equation without denominators.
$$
\begin{aligned}
3(x-2)+2(x+1)&=36 \\[6pt]
3x-6+2x+2&=36 \\[6pt]
5x-4&=36 \\[6pt]
x&=8 .
\end{aligned}
$$
At $x=8$, both terms equal $\dfrac{3}{2}$, so their sum is $3$. The common denominator is a nonzero number, and the equation is defined for every real $x$.
:::

:::esempio{titolo="A common factor and an excluded value"}
In the equation $\dfrac{x^2-1}{x+1}=x-1$, the left side is defined for $x\ne-1$. For these values, factor the numerator and cancel the factor $x+1$.
$$
\frac{(x-1)(x+1)}{x+1}=x-1 .
$$
The equation therefore holds for all real numbers except $-1$. At $x=-1$, the right side equals $-2$, while the left side is undefined. The open circle distinguishes the graph of the quotient from the line representing its simplified expression.

::grafico{f="(x^2-1)/(x+1)" xmin=-4 xmax=4 ymin=-6 ymax=5 punti="-1,-2,vuoto" titolo="The quotient equals $x-1$ wherever it is defined. The point $(-1,-2)$ is excluded"}

:::

:::attenzione{titolo="The simplified equation and the original domain"}
To solve $\dfrac{x+2}{x-1}=\dfrac{3}{x-1}$, require $x\ne1$ and multiply by $x-1$. The new equation gives $x+2=3$, so the only candidate is $x=1$. Since the original denominator is zero at that point, the equation **has no solutions**. The calculation after multiplication must be interpreted on the original domain.
:::

:::esempio{titolo="Two factors in the common denominator"}
In the equation
$$
\frac{2}{x-1}+\frac{3}{x+1}=\frac{x+4}{x^2-1}
$$
the domain excludes $x=1$ and $x=-1$. Since $x^2-1=(x-1)(x+1)$, we can use $x^2-1$ as a common denominator for all three terms.
$$
\begin{aligned}
2(x+1)+3(x-1)&=x+4 \\[6pt]
5x-1&=x+4 \\[6pt]
4x&=5 .
\end{aligned}
$$
The solution is $x=\dfrac54$, which belongs to the domain. The factor left in the first term is $x+1$, since the denominator of that term already contained $x-1$. In the second term, the remaining factor is $x-1$. The term on the right already had the full common denominator, so only its numerator remains.
:::

## Formulas involving differences and signs

:::definizione{#variazioni titolo="Initial value, final value, and change"}
The change in a quantity is its final value minus its initial value. In the calorimetry equation $Q=mc(T_f-T_i)$, $T_f$ and $T_i$ are the final and initial temperatures, $m$ is the mass, $c$ is the specific heat capacity, and $Q$ is the heat exchanged by the sample. We assume $m>0$ and take $c>0$ to be constant over the interval, with no phase changes. In this model, $Q$ is positive when the sample absorbs heat and negative when it releases heat. Since $mc>0$, $Q$ has the same sign as the temperature change.
:::

:::esempio{titolo="Final temperature after cooling"}
A sample at $22\,^\circ\mathrm{C}$ releases $360\,\mathrm{J}$ and has heat capacity $mc=120\,\mathrm{J/K}$. First divide by $mc$ to find the temperature change. Then add the initial temperature.
$$
\begin{aligned}
T_f-T_i&=\frac{Q}{mc} \\[6pt]
&=\frac{-360\,\mathrm{J}}{120\,\mathrm{J/K}}
=-3\,\mathrm{K}.
\end{aligned}
$$
A change of $-3\,\mathrm{K}$ corresponds to a change of $-3\,^\circ\mathrm{C}$. The final temperature is therefore $19\,^\circ\mathrm{C}$. In the graph, $d$ denotes the numerical value of the difference $T_f-T_i$ in kelvins. For $d<0$, the heat exchanged $Q$ is also negative.

::grafico{f="120*x" xmin=-4 xmax=4 ymin=-450 ymax=450 nomi="d,Q" legenda="Q=120d" punti="-3,-360,pieno" titolo="A change of $d=-3$ in $\mathrm{K}$ corresponds to $Q=-360\,\mathrm{J}$"}

:::

:::esempio{titolo="Finding the initial temperature from the final temperature"}
A sample with heat capacity $mc=120\,\mathrm{J/K}$ reaches a final temperature of $27\,^\circ\mathrm{C}$ after absorbing $600\,\mathrm{J}$. Solving the relation $T_f-T_i=\dfrac{Q}{mc}$ for $T_i$ gives
$$
T_i=T_f-\frac{Q}{mc}.
$$
The quotient is $5\,\mathrm{K}$, so the initial temperature is $22\,^\circ\mathrm{C}$. If $Q$ is positive, the final temperature exceeds the initial temperature. This comparison checks the minus sign in the rearranged formula.
:::

:::osservazione{titolo="Conditions for finding the mass"}
If the mass $m$ is the unknown in the calorimetry equation, we can divide by $c(T_f-T_i)$ only when this product is nonzero. For example, a sample releases $900\,\mathrm{J}$ and its temperature drops by $5\,\mathrm{K}$. If $c=600\,\mathrm{J/(kg\,K)}$, the mass is
$$
m=\frac{-900\,\mathrm{J}}{600\,\mathrm{J/(kg\,K)}\cdot(-5\,\mathrm{K})}
 =0.3\,\mathrm{kg}.
$$
The ratio is positive because the heat and the temperature change have the same sign. If the temperature change is zero, the formula gives $Q=0$ for every positive mass. In that case, every admissible mass satisfies the equality when $Q=0$. If the measured value is $Q\ne0$, no mass satisfies the model with those data.
:::

## Quadratic equations and roots

::::teorema{#quadratiche titolo="The discriminant and the quadratic formula"}
Let $a$, $b$, and $c$ be real numbers with $a\ne0$. For the equation $ax^2+bx+c=0$, define the discriminant $\Delta=b^2-4ac$. If $\Delta$ is nonnegative, the real solutions are given by
$$
x=\frac{-b\pm\sqrt{\Delta}}{2a}.
$$
For $\Delta>0$, there are two distinct roots. For $\Delta=0$, the two expressions coincide and give a single solution, called a double root. For $\Delta<0$, the real solution set is empty. The discriminant therefore tells us how many solutions there are before we calculate them.

:::dimostrazione
Rewrite the equation so that its left side is a square. Multiplying by $4a$ and rearranging the terms gives
$$
4a^2x^2+4abx=-4ac.
$$
Adding $b^2$ to both sides gives $(2ax+b)^2=b^2-4ac=\Delta$. The square of a real number is nonnegative. For $\Delta\ge0$, we have $2ax+b=\pm\sqrt{\Delta}$, and we can divide by $2a$ because $a\ne0$.
:::
::::

::::teorema{#annullamento-prodotto titolo="Zero-product property"}
Let $A$ and $B$ be real numbers. The product $AB$ equals zero if and only if at least one factor equals zero. If the left side of an equation is written as a product of linear factors and the right side is zero, the equation therefore reduces to one linear equation for each factor. For example, $(x+5)(x-4)=0$ is equivalent to $x+5=0$ or $x-4=0$, so the solutions are $-5$ and $4$.

:::dimostrazione
If $A=0$ or $B=0$, the product $AB$ is zero because any number multiplied by zero gives zero. Conversely, suppose that $AB=0$ and $A\ne0$. Since $A\ne0$, the reciprocal $\dfrac{1}{A}$ exists, and we can multiply both sides of $AB=0$ by it. This gives $B=\dfrac{1}{A}\cdot0=0$, so if the first factor is nonzero, the second must be zero.
:::
::::

:::attenzione{titolo="A product equal to a nonzero number"}
The property applies only to products equal to zero. In the equation $(x-1)(x-3)=3$, setting one factor at a time equal to $3$ would give $x=4$ and $x=6$. At $x=6$, the left side equals $5\cdot3=15$, so $6$ is not a solution. Instead, expand the product and move $3$ to the left side.
$$
\begin{aligned}
x^2-4x+3-3&=0 \\[6pt]
x(x-4)&=0 .
\end{aligned}
$$
The solutions are $0$ and $4$. For both, the original left side equals $3$.
:::

:::esempio{titolo="Two roots on the same parabola"}
For $x^2-5x+6=0$, we have $\Delta=(-5)^2-4\cdot1\cdot6=1$. The formula gives
$$
x_1=\frac{5-1}{2}=2,\qquad x_2=\frac{5+1}{2}=3 .
$$
Since $(x-2)(x-3)=x^2-5x+6$, the same values can be obtained by setting each factor equal to zero. On the graph, the two roots are the horizontal coordinates of the points where the parabola meets the $x$-axis.

::grafico{f="x^2-5*x+6" xmin=0 xmax=5 ymin=-1 ymax=5 punti="2,0,pieno;3,0,pieno" titolo="The parabola has two zeros, at $x=2$ and $x=3$"}

:::

:::attenzione{titolo="Square roots and solving for a squared quantity"}
The symbol $\sqrt{9}$ denotes $3$. The equation $u^2=9$ has the two solutions $u=3$ and $u=-3$, because the square of each is $9$. In the formula $E_c=\dfrac12mv^2$, if $m>0$, $E_c\ge0$, and $v$ denotes the *magnitude* of the velocity, we use $v=\sqrt{\dfrac{2E_c}{m}}$. With $m=2\,\mathrm{kg}$ and $E_c=16\,\mathrm{J}$, the speed is $4\,\mathrm{m/s}$. The same energy would result from a velocity component of $-4\,\mathrm{m/s}$ for straight-line motion along an axis with a specified positive direction.
:::

:::esempio{titolo="A double root and the absence of real zeros"}
The trinomial $x^2-4x+4$ is the square $(x-2)^2$. It is zero only at $x=2$, and its discriminant is indeed $16-16=0$. Adding $1$ to the constant term gives the equation
$$
(x-2)^2+1=0 .
$$
For every real $x$, the left side is at least $1$, so the solution set is empty. The discriminant of the trinomial $x^2-4x+5$ is $16-20=-4$, in agreement with this result. In both examples, the minimum occurs at the same value $x=2$. Its vertical coordinate changes from zero to one.
:::

## Systems of two equations

:::definizione{#sistemi titolo="Conditions that must hold simultaneously"}
A solution of a **system** of two equations in $x$ and $y$ is an ordered pair $(x,y)$ that satisfies both. In the substitution method, solve one equation for either unknown in terms of the other, then use that expression in the second equation. In the elimination method, combine the equations to make the coefficient of one unknown zero. Keeping the first equation and replacing the second by the second minus a multiple of the first is a reversible operation. Adding back the same multiple recovers the original equation.
:::

:::esempio{titolo="Elimination and the intersection of two lines"}
Solve the system
$$
\begin{cases}
x+y=7,\\
2x+y=10.
\end{cases}
$$
Keep the first equation and subtract its left side from the left side of the second. Subtract the corresponding right sides as well. This gives $x=10-7=3$, so $y=7-3=4$. The pair satisfies the equalities $3+4=7$ and $2\cdot3+4=10$. In the figure, each line consists of the pairs satisfying its equation. The point $(3,4)$ lies on both lines.

::grafico{f="7-x;10-2*x" xmin=-1 xmax=7 ymin=-2 ymax=12 punti="3,4,pieno" segmenti="3,0,3,4;0,4,3,4" titolo="The intersection of the lines gives the pair $(3,4)$"}

:::

:::esempio{titolo="Volume and solute balances"}
Two solutions containing the same solute at concentrations of $3\,\mathrm{g/L}$ and $9\,\mathrm{g/L}$ are mixed. Assume that the volumes are additive and that no solute is lost. The final volume is $0.8\,\mathrm{L}$ and the final concentration is $6\,\mathrm{g/L}$, so the final mass of solute is $4.8\,\mathrm{g}$. Let $x$ and $y$ be the numerical values of the two volumes in liters. The two balances are
$$
\begin{cases}
x+y=0.8,\\
3x+9y=4.8.
\end{cases}
$$
Subtracting three times the first equation from the second gives $6y=4.8-2.4=2.4$. Thus $y=0.4$ and $x=0.8-0.4=0.4$. Both volumes are positive, and the solute mass is $3\cdot0.4+9\cdot0.4=4.8$ grams.
:::

:::osservazione{titolo="Consistent data and parallel lines"}
If two equations represent intersecting lines, their intersection gives a single ordered pair. Coincident lines give all the pairs on the same line. Distinct parallel lines give an empty solution set. For example, $x+y=5$ and $2x+2y=10$ express the same constraint, because the second is twice the first. If the right side of the second equation is $12$, dividing by $2$ gives $x+y=6$. No pair can have both sum $5$ and sum $6$.
:::

:::osservazione{titolo="Possible concentrations in a mixture"}
Let $C_1<C_2$ be the concentrations of the two initial solutions, $V_1$ and $V_2$ their nonnegative volumes, and $V=V_1+V_2>0$ the final volume. If the solute is conserved, the final concentration $C$ satisfies $C_1V_1+C_2V_2=CV$. Substituting $V_1=V-V_2$ gives
$$
V_2=\frac{C-C_1}{C_2-C_1}\,V .
$$
Since $V_2$ lies between zero and $V$, the ratio multiplying the concentration difference lies between zero and one. Therefore $C$ must lie between $C_1$ and $C_2$. If both volumes are positive, the final concentration lies strictly between the initial concentrations. If the initial concentrations are equal, the solute balance is the volume balance multiplied by their common concentration. In that case, the two balances determine the total but leave the individual volumes undetermined, provided the final concentration has that same value.
:::

:::esempio{titolo="Calibration from two readings"}
The voltage $U$ measured by a sensor over a certain temperature range follows the model $U=aT+b$. Here $T$ and $U$ denote the numerical values in degrees Celsius and volts, respectively. At $20\,^\circ\mathrm{C}$, the reading is $0.7\,\mathrm{V}$, and at $30\,^\circ\mathrm{C}$, it is $0.9\,\mathrm{V}$. These two measurements require that
$$
\begin{cases}
20a+b=0.7,\\
30a+b=0.9 .
\end{cases}
$$
Subtracting the first equation from the second gives $10a=0.2$, so $a=0.02$. The first equation then gives $b=0.3$. Within the calibration range, at $T=23$ the model gives $U=0.02\cdot23+0.3=0.76$, or $0.76\,\mathrm{V}$. The second measurement allows us to distinguish the coefficient $a$ from the constant term $b$.
:::

## The domain and physically admissible solutions

:::attenzione{#condizioni titolo="Mathematical conditions and model constraints"}
The mathematical domain consists of the values for which the expressions are defined. A denominator must be nonzero, and the radicand of a real square root must be nonnegative. The model can impose further conditions. For example, a liquid volume may be limited by the container’s capacity, and elapsed time is greater than or equal to zero. Solving the equation and imposing these constraints are two distinct steps.

An operation that is not reversible can introduce extra candidates. For example, squaring both sides of $\sqrt{x+5}=x-1$ gives $x^2-3x-4=0$, so $x=4$ or $x=-1$. At $x=-1$, the left side equals $2$ and the right side equals $-2$, so that value is excluded. At $x=4$, both sides equal $3$. In this case, the condition $x-1\ge0$ would have ruled out $-1$ before the calculation.
:::

:::richiamo{titolo="Zero-product property"}
If $A$ and $B$ are real numbers, then $AB=0$ if and only if $A=0$ or $B=0$.
:::

::::teorema{#quadrato-membri titolo="Squaring two nonnegative sides"}
Let $L$ and $R$ be two nonnegative real numbers. Then $L=R$ if and only if $L^2=R^2$. Thus, in an equation involving a square root, such as $\sqrt{x+5}=x-1$, require both sides to be nonnegative. For the values satisfying this condition, squaring gives an equivalent equation and introduces no extra candidates.

:::dimostrazione
If $L=R$, the squares of the two numbers agree, so $L^2=R^2$. Conversely, $L^2=R^2$ implies $L^2-R^2=0$, or equivalently $(L-R)(L+R)=0$. By the zero-product property, $L-R=0$ or $L+R=0$. In the second case, the sum of two nonnegative numbers is zero, so $L=R=0$. In either case, $L=R$ therefore holds.
:::
::::

:::esempio{titolo="A condition on the right side"}
In the equation $\sqrt{x+5}=x-1$, the left side is nonnegative wherever it is defined. The condition $x-1\ge0$ also makes the right side nonnegative and implies $x+5\ge6>0$, so we work with $x\ge1$. In this region, the equation is equivalent to $x+5=(x-1)^2$, or $x^2-3x-4=0$. Of the two roots $4$ and $-1$, only $4$ satisfies $x\ge1$. Without the condition, the value $-1$ satisfies $L^2=R^2$ with $L=2$ and $R=-2$, and the theorem does not apply because $R<0$.

::grafico{f="sqrt(x+5);x-1" xmin=-6 xmax=7 ymin=-4 ymax=6 punti="4,3,pieno;-1,2,vuoto;-1,-2,vuoto" segmenti="-1,-2,-1,2" titolo="The curves $y=\sqrt{x+5}$ and $y=x-1$ meet only at $(4,3)$. At $x=-1$, the two sides equal $2$ and $-2$"}

:::

:::esempio{titolo="Time to reach the ground"}
In a model of vertical motion, the numerical value of the height in meters is $h(t)=8+6t-2t^2$, where $t$ is the numerical value of the elapsed time in seconds. The model describes the motion from launch until the first contact with the ground, so we seek a value $t\ge0$ with $h(t)=0$. Dividing the equation by $-2$ and factoring the polynomial gives
$$
\begin{aligned}
t^2-3t-4&=0 \\[6pt]
(t-4)(t+1)&=0.
\end{aligned}
$$
The algebraic roots are $4$ and $-1$. Only $4$ satisfies the condition on elapsed time. The object therefore hits the ground $4\,\mathrm{s}$ after launch. The other intersection belongs to an algebraic extension of the graph.

::grafico{f="8+6*x-2*x^2" xmin=-2 xmax=5 ymin=-6 ymax=14 nomi="t,h" legenda="h=8+6t-2t^2" punti="-1,0,vuoto;4,0,pieno" titolo="With $t$ in $\mathrm{s}$ and $h$ in $\mathrm{m}$, the admissible zero is $t=4$"}

:::

:::osservazione{titolo="Checking the answer in the original problem"}
Once a result has been found, it can be substituted into the original formula. In the height model, $h(4)=8+24-32=0$, so the time found satisfies the condition for reaching the ground. In the density formula, substitution also checks the consistency of the units. In a system of balance equations, the check requires recovering both the total volume and the mass of solute. The check therefore has the same structure as the original problem and addresses every condition that defines a solution.
:::

:::esempio{titolo="Calculated volume and container capacity"}
To dissolve $0.04\,\mathrm{mol}$ of solute and obtain a concentration of $0.08\,\mathrm{mol/L}$, the relation $c=\dfrac{n}{V}$ requires a final volume of
$$
V=\frac{0.04\,\mathrm{mol}}{0.08\,\mathrm{mol/L}}
 =0.50\,\mathrm{L}.
$$
The volume is positive and satisfies the mathematical relation. However, a container with capacity $0.35\,\mathrm{L}$ imposes the condition $V\le0.35\,\mathrm{L}$. Since the calculated volume exceeds this limit, the container is too small to prepare the solution with the given quantities. Substitution into the formula verifies the concentration, while comparison with the capacity determines whether the result can actually be achieved in the problem.
:::
