---
titolo: "Pipe systems: series, parallel, and network configurations"
sommario: "Hydraulic resistance of a branch, pipes in series and in parallel, equivalent pipes, distributed withdrawal, the three-reservoir problem, branched pipe networks, and the Hardy Cross solution for looped networks."
---

## Hydraulic resistance of a branch

A pipe network consists of pipe sections connected at nodes. Each section behaves as a long pipe, so its behavior can be expressed by a single coefficient relating head loss to discharge.

:::richiamo{titolo="Friction head loss (Darcy–Weisbach)"}
In a circular pipe of diameter $D$ and length $L$ carrying steady discharge $Q$, the friction head loss is
$$
\Delta H = \lambda\,\frac{L}{D}\,\frac{v^2}{2g} ,
\qquad
v = \frac{Q}{A} = \frac{4\,Q}{\pi D^2} ,
$$
with Darcy friction factor $\lambda$ read from the Moody diagram using Reynolds number $Re = \dfrac{v D}{\nu}$ and relative roughness $\dfrac{\varepsilon}{D}$. See the chapter on friction and minor head losses.
:::

:::richiamo{titolo="Long-pipeline model"}
When a pipe is long compared with its diameter, velocity heads and minor losses are small relative to friction losses and can be neglected. Total head then equals piezometric head, the energy and hydraulic grade lines coincide, and the difference between the free-surface elevations of two reservoirs equals the sum of the friction losses. See the chapter on long pipelines and pumping systems.
:::

:::definizione{#resistenza-idraulica titolo="Hydraulic resistance of a branch"}
The **hydraulic resistance** of a branch is the coefficient $r$ in the expression
$$
\Delta H = r\,Q^2 .
$$
Substituting $v = \dfrac{4Q}{\pi D^2}$ into the Darcy–Weisbach equation gives
$$
r = \frac{8\,\lambda\,L}{g\,\pi^2 D^5} ,
$$
whereas the Gauckler–Strickler equation for a full circular pipe with $R = \dfrac{D}{4}$ gives
$$
r = \frac{10.29\,L}{k_s^2\,D^{\frac{16}{3}}} .
$$
Resistance has dimensions of $\mathrm{s^2/m^5}$ and depends only on branch geometry and roughness. For $\lambda = 0.022$, $L = 1000\,\mathrm{m}$, and $D = 0.300\,\mathrm{m}$, the resistance is $r = 748\,\mathrm{s^2/m^5}$, so a discharge of $100\,\mathrm{L/s}$ produces the loss $\Delta H = 748 \cdot 0.100^2 = 7.48\,\mathrm{m}$. This form is used throughout the chapter. Each branch enters the calculation through its value of $r$.
:::

:::osservazione{#ipotesi-del-capitolo titolo="Assumptions"}
The following results use assumptions that must be checked for each system.

- The fluid is incompressible and the flow is steady.
- The long-pipeline model applies, so minor losses and velocity heads are neglected.
- The friction factor $\lambda$ is constant within each branch.

The third assumption holds for fully rough turbulent flow, because $\lambda$ then depends only on relative roughness. If $\lambda$ still depends on $Re$, resistance varies with discharge, and the solution must be obtained iteratively, updating $\lambda$ at each step.
:::

## Pipes in series

Two branches are in series if all the flow leaving the first enters the second. No water is withdrawn or added at the junction between them.

::::teorema{#condotte-in-serie titolo="Resistance of pipes in series"}
Let $n$ branches of resistances $r_1, \dots, r_n$ be connected in series between two end sections, with no withdrawals at intermediate nodes. The discharge is then the same in every branch, and the total head loss is $\Delta H = r_{\mathrm{eq}}\,Q^2$, with
$$
r_{\mathrm{eq}} = \sum_{i=1}^{n} r_i .
$$

The entire series can be replaced by a single branch of resistance $r_{\mathrm{eq}}$. If the difference in reservoir elevations is known, the discharge follows directly. For two pipe sections with $r_1 = 598.4\,\mathrm{s^2/m^5}$ and $r_2 = 1218\,\mathrm{s^2/m^5}$ connecting reservoirs with an elevation difference $18\,\mathrm{m}$, the result is $Q = \sqrt{\dfrac{18}{1817}} = 0.0995\,\mathrm{m^3/s}$.

:::dimostrazione
Continuity imposes a common discharge, and the energy balance adds the individual head losses.

There are no withdrawals at the intermediate nodes, so continuity gives $Q_1 = Q_2 = \dots = Q_n = Q$.

Let $H_0, H_1, \dots, H_n$ denote the total heads at successive sections. Between each consecutive pair, $H_{i-1} - H_i = r_i Q^2$. Adding the $n$ equations cancels the intermediate heads in pairs and gives
$$
\Delta H = H_0 - H_n = \sum_{i=1}^{n} r_i Q^2 = \Big(\sum_{i=1}^{n} r_i\Big) Q^2 .
$$
Comparing this expression with $\Delta H = r_{\mathrm{eq}} Q^2$, valid for any $Q$, proves the result.
:::
::::

::schema{nodi="A,3.5,17;N,15,12,-;V,28,0,-;P,30.5,20,-;Q,30.5,3,-" etichette="15.95,12.95,N;28.95,-0.95,V" condotte="A-N,0.7,segment 1;N-V,0.6,segment 2" acqua="0,13 3.5,13 3.5,20 0,20;26,-2 30.5,-2 30.5,3 26,3" solidi="0,12 3.5,12 3.5,13 0,13;26,-3 30.5,-3 30.5,-2 26,-2" pelo="0,3.5,20,upstream;26,30.5,3,downstream" piezometrica="3.5,20 15,14.07 28,3" quote="Q,P,18.00 m,1.2" titolo="Two pipes in series: the hydraulic grade line descends from one reservoir surface to the other at two different slopes"}

:::osservazione{#pendenza-della-piezometrica titolo="Reading the hydraulic grade line"}
In the long-pipeline model each pipe section has energy gradient $J_i = \dfrac{r_i Q^2}{L_i}$. The hydraulic grade line is therefore piecewise linear, with a straight segment for each pipe and a change of slope at each junction. The smaller pipe has the larger gradient and hence the steeper segment. To obtain the piezometric head at an intermediate node, subtract the losses in all preceding pipes from the upstream head. Node pressure is $\dfrac{p}{\gamma} = h - z$, where $z$ is the elevation of the pipe centerline.
:::

## Pipes in parallel

Two branches are in parallel if they start at the same node and end at the same node.

::::teorema{#condotte-in-parallelo titolo="Resistance of pipes in parallel"}
Let $n$ branches with resistances $r_1, \dots, r_n$ connect the same two nodes $M$ and $V$. Each branch then has the same head loss $\Delta H = h_M - h_V$, their discharges add, and the equivalent resistance is
$$
r_{\mathrm{eq}} = \frac{1}{\left(\displaystyle\sum_{i=1}^{n} \frac{1}{\sqrt{r_i}}\right)^{2}} .
$$

This result allows a group of parallel branches to be represented as a single branch and predicts the effect of adding a pipe in parallel to an existing one. For two identical branches of resistance $r$, we obtain $r_{\mathrm{eq}} = \dfrac{r}{4}$, so the discharge doubles for the same elevation difference.

:::dimostrazione
Each node has a single piezometric head. All branches connecting the same two nodes must therefore have the same head loss.

Let $h_M$ and $h_V$ be the heads at the nodes, with $\Delta H = h_M - h_V > 0$. For each branch $\Delta H = r_i Q_i^2$, so
$$
Q_i = \sqrt{\frac{\Delta H}{r_i}} = \frac{\sqrt{\Delta H}}{\sqrt{r_i}} .
$$
Continuity at node $M$ gives $Q = \sum_i Q_i$, hence
$$
Q = \sqrt{\Delta H}\,\sum_{i=1}^{n} \frac{1}{\sqrt{r_i}} .
$$
Squaring and solving for $\Delta H$ gives
$$
\Delta H = \frac{Q^2}{\left(\sum_i r_i^{-\frac{1}{2}}\right)^2} ,
$$
and comparison with $\Delta H = r_{\mathrm{eq}} Q^2$ proves the result.
:::
::::

::schema{nodi="M,4,8;V,24,8,-;B,14,12,-;C,14,4,-" condotte="M-B-V,0.5,branch 1;M-C-V,0.42,branch 2" etichette="14,13.4,Q_1;14,2.4,Q_2;25.0,8.0,V" frecce="1,8,3.4,8,Q;24.6,8,27,8,Q" titolo="Two parallel branches between nodes $M$ and $V$: their head losses are equal and their discharges add"}

:::osservazione{#ripartizione-parallelo titolo="Flow division among parallel branches"}
The relations $Q_i = \sqrt{\dfrac{\Delta H}{r_i}}$ show that the ratio of two branch discharges is independent of the total discharge:
$$
\frac{Q_1}{Q_2} = \sqrt{\frac{r_2}{r_1}} .
$$
Discharge is therefore inversely proportional to the square root of resistance. The shorter branch of larger diameter carries the greater share. With $r_1 = 643\,\mathrm{s^2/m^5}$ and $r_2 = 2234\,\mathrm{s^2/m^5}$ the ratio is $\sqrt{\dfrac{2234}{643}} = 1.86$. Of a total discharge of $150\,\mathrm{L/s}$, the first branch carries $97.6\,\mathrm{L/s}$ and the second $52.4\,\mathrm{L/s}$.
:::

## The equivalent pipe

:::definizione{#condotta-equivalente titolo="Equivalent pipe"}
An **equivalent pipe** for a system of branches is a single pipe producing the same head loss at the same discharge, so its resistance is $r_{\mathrm{eq}}$. For specified length $L_e$ and friction factor $\lambda_e$, its diameter follows from the resistance definition:
$$
D_e = \left(\frac{8\,\lambda_e\,L_e}{g\,\pi^2\,r_{\mathrm{eq}}}\right)^{\frac{1}{5}} .
$$
Equivalent pipes can be used to compare designs and simplify a complex system before solving it. For example, replacing parallel branches with their equivalent pipe leaves a single section to combine in series with the others.
:::

:::esempio{titolo="Replacing two pipe sections in series"}
Two pipes in series with resistances $r_1 = 598.4\,\mathrm{s^2/m^5}$ and $r_2 = 1218\,\mathrm{s^2/m^5}$ have $r_{\mathrm{eq}} = 1817\,\mathrm{s^2/m^5}$. An equivalent pipe of length $L_e = 1400\,\mathrm{m}$ with $\lambda_e = 0.023$ has diameter
$$
D_e = \left(\frac{8 \cdot 0.023 \cdot 1400}{9.81 \cdot \pi^2 \cdot 1817}\right)^{\frac{1}{5}} = 0.271\,\mathrm{m} ,
$$
or $271\,\mathrm{mm}$. The next larger standard size is $300\,\mathrm{mm}$. Its resistance is lower, so it carries more flow for the same elevation difference than the original pipes.
:::

:::osservazione{#raddoppio titolo="Adding a parallel pipe"}
Laying a second identical pipe alongside an existing one reduces the resistance of that part of the pipeline to one quarter of its original value, according to $r_{\mathrm{eq}} = \dfrac{r}{4}$. If the pipes run in parallel over only part of the length, the system consists of two elements in series: the parallel section, of resistance $\dfrac{r'}{4}$, and the remaining single pipe, of resistance $r''$. With $n$ identical pipes in parallel the resistance becomes $r_{\mathrm{eq}} = \dfrac{r}{n^2}$. At the same elevation difference, the total discharge is then $n$ times the original discharge.
:::

:::attenzione
The equivalent diameter of two parallel branches is not the sum of the two diameters.

Two pipes of equal length and diameter $200\,\mathrm{mm}$ have $r_{\mathrm{eq}} = \dfrac{r}{4}$, so $D_e^5 = 4\,D^5$ and $D_e = 4^{\frac{1}{5}}\cdot 200 = 264\,\mathrm{mm}$, rather than $400\,\mathrm{mm}$. A pipe of diameter $400\,\mathrm{mm}$ would have resistance $\dfrac{r}{32}$, eight times smaller than the resistance of the pair.
:::

## Distributed withdrawal along a pipe

In distribution networks, customers draw water at points along the streets. The discharge in a pipe therefore decreases downstream.

:::definizione{#portata-distribuita titolo="Distributed withdrawal"}
A pipe of length $L$ has distributed withdrawal when it loses flow continuously through lateral connections. Let $p$ be the **withdrawal rate per unit length**, assumed constant. At distance $x$ from the upstream end the discharge is
$$
Q(x) = Q_m - p\,x ,
\qquad
p = \frac{Q_m - Q_v}{L} ,
$$
where $Q_m$ is the inflow at the upstream end and $Q_v = Q(L)$ is the **throughflow**, the discharge carried on into the next pipe sections. The total discharge withdrawn along the pipe is $Q_m - Q_v = p\,L$.
:::

::schema{nodi="M,2,6;V,20,6" condotte="M-V,0.45," frecce="4,5.4,4,3.8,;6,5.4,6,3.8,;8,5.4,8,3.8,;10,5.4,10,3.8,;12,5.4,12,3.8,;14,5.4,14,3.8,;16,5.4,16,3.8,;18,5.4,18,3.8," etichette="2,7.6,Q_m;20,7.6,Q_v;11,2.8,uniform withdrawal p" titolo="Pipe with uniform withdrawal: the discharge falls from $Q_m$ to $Q_v$"}

:::richiamo{titolo="Integration by substitution"}
If $u = \varphi(x)$ is differentiable with continuous derivative and $f$ is continuous, then
$$
\int_a^b f\big(\varphi(x)\big)\,\varphi'(x)\,dx = \int_{\varphi(a)}^{\varphi(b)} f(u)\,du .
$$
See the chapter on integration in Mathematical Analysis 1.
:::

::::teorema{#perdita-con-erogazione titolo="Head loss with uniform withdrawal"}
Consider a pipe of resistance $r$ and length $L$, with uniform withdrawal, inflow $Q_m$, and throughflow $Q_v$. Assume that its resistance is uniformly distributed along its length. The total head loss is then
$$
\Delta H = \frac{r}{3}\left(Q_m^2 + Q_m Q_v + Q_v^2\right) .
$$

The pipe can be treated as an ordinary branch carrying a suitable constant discharge. The expression also shows that the loss is less than it would be if the entire discharge $Q_m$ reached the outlet. For $r = 1071\,\mathrm{s^2/m^5}$, $Q_m = 120\,\mathrm{L/s}$, and $Q_v = 60\,\mathrm{L/s}$, the result is $\Delta H = 9.00\,\mathrm{m}$, compared with $15.4\,\mathrm{m}$ if the calculation used $Q_m$ throughout.

:::dimostrazione
Write the head loss over an infinitesimal length and integrate along the pipe.

The resistance per unit length is $\dfrac{r}{L}$, so the element $dx$ at distance $x$ from the upstream end produces a loss $dH = \dfrac{r}{L}\,Q(x)^2\,dx$. Integrating along the entire pipe gives
$$
\Delta H = \frac{r}{L}\int_0^L \left(Q_m - p\,x\right)^2 dx .
$$
Let $Q_m \neq Q_v$, so $p \neq 0$. Make the substitution $u = Q_m - p\,x$, which gives $du = -p\,dx$. The limits become $u(0) = Q_m$ and $u(L) = Q_v$, and therefore
$$
\int_0^L \left(Q_m - p\,x\right)^2 dx = \frac{1}{p}\int_{Q_v}^{Q_m} u^2\,du = \frac{Q_m^3 - Q_v^3}{3\,p} .
$$
Since $p = \dfrac{Q_m - Q_v}{L}$ and $Q_m^3 - Q_v^3 = (Q_m - Q_v)\left(Q_m^2 + Q_m Q_v + Q_v^2\right)$, the factor $Q_m - Q_v$ cancels, leaving
$$
\Delta H = \frac{r}{L}\cdot\frac{L\left(Q_m^2 + Q_m Q_v + Q_v^2\right)}{3} = \frac{r}{3}\left(Q_m^2 + Q_m Q_v + Q_v^2\right) .
$$
If instead $Q_m = Q_v$, the integrand is constant and the expression reduces to $\Delta H = r\,Q_m^2$, in agreement with the formula.
:::
::::

:::definizione{#portata-equivalente titolo="Equivalent discharge"}
The **equivalent discharge** of a pipe with distributed withdrawal is the constant discharge that produces the same head loss:
$$
Q_e = \sqrt{\frac{Q_m^2 + Q_m Q_v + Q_v^2}{3}} ,
\qquad
\Delta H = r\,Q_e^2 .
$$
Using $Q_e$ in place of the actual varying discharge brings the pipe within the series and parallel rules already derived. When the entire incoming discharge is withdrawn, $Q_v = 0$. Then $Q_e = \dfrac{Q_m}{\sqrt{3}} = 0.577\,Q_m$ and the loss is one third of that calculated with $Q_m$.
:::

:::osservazione{#portata-media-pratica titolo="Practical approximation for mean discharge"}
Distribution networks are often sized using the mean discharge
$$
Q_e \simeq Q_v + 0.55\,(Q_m - Q_v) ,
$$
which for $Q_v = 0$ gives $0.55\,Q_m$, compared with the exact value $0.577\,Q_m$. The discrepancy in head loss is within $10\%$, comparable to the uncertainty in estimating $\lambda$. This approximation is acceptable for design, but capacity checks are best made with the exact expression.
:::

## The three-reservoir problem

:::definizione{#nodo-di-diramazione titolo="Pipe junction"}
A **junction** is a node at which three or more branches meet. The node has a single piezometric head $h_N$. Each branch connecting it to a reservoir of elevation $z_i$ therefore has head loss $|z_i - h_N|$, and its discharge, taken as positive toward the node, is
$$
Q_i = \operatorname{sgn}(z_i - h_N)\,\sqrt{\frac{|z_i - h_N|}{r_i}} .
$$
The only unknown is therefore $h_N$. Once it is known, the preceding formula gives the individual branch discharges.
:::

::schema{nodi="N,18,6,-;A,3.5,16;B,13,14;C,26,2,-" etichette="17.2,5.2,N;26.8,1.2,C" condotte="A-N,0.55,branch A;B-N,0.45,branch B;N-C,0.65,branch C" acqua="0,13 3.5,13 3.5,20 0,20;10,14 13,14 13,17 10,17;26,-1 30,-1 30,5 26,5" solidi="0,12 3.5,12 3.5,13 0,13;10,13 13,13 13,14 10,14;26,-2 30,-2 30,-1 26,-1" pelo="0,3.5,20,z_A;10,13,17,z_B;26,30,5,z_C" titolo="Three reservoirs connected to junction $N$"}

:::richiamo{titolo="Intermediate value theorem for a zero"}
Let $f$ be continuous on $[a, b]$, with $f(a)\,f(b) < 0$. There is some $c \in (a, b)$ for which $f(c) = 0$. If $f$ is also strictly monotone, this $c$ is unique. See the chapter on continuous functions in Mathematical Analysis 1.
:::

::::teorema{#tre-serbatoi titolo="Existence and uniqueness of junction head"}
Let $n \geq 2$ reservoirs at elevations $z_1, \dots, z_n$, not all equal, be connected to node $N$ through branches of resistances $r_1, \dots, r_n$, with no withdrawal at the node. Exactly one piezometric head $h_N$ satisfies continuity, and it lies in the interval $\left[\min_i z_i,\ \max_i z_i\right]$.

Trial values of $h_N$ can therefore be adjusted toward a unique solution regardless of the starting value. The function whose zero is sought is monotone, and the sign of the imbalance indicates whether to increase or decrease the next trial value.

:::dimostrazione
Express continuity as a single equation in $h_N$ and examine its monotonicity.

For real $h$, define
$$
\Phi(h) = \sum_{i=1}^{n} \operatorname{sgn}(z_i - h)\,\sqrt{\frac{|z_i - h|}{r_i}} ,
$$
the sum of the discharges directed into the node. Continuity requires $\Phi(h_N) = 0$.

Each term is continuous in $h$ because $t \mapsto \operatorname{sgn}(t)\sqrt{|t|}$ is continuous. It is strictly decreasing because $t \mapsto \operatorname{sgn}(t)\sqrt{|t|}$ is strictly increasing and $h \mapsto z_i - h$ is strictly decreasing. Hence $\Phi$ is continuous and strictly decreasing throughout $\mathbb{R}$.

Let $z_{\min}$ and $z_{\max}$ be the minimum and maximum elevations. At $h = z_{\min}$ every term is nonnegative and at least one is positive, since the elevations are not all equal. Thus $\Phi(z_{\min}) > 0$. At $h = z_{\max}$ the same argument gives $\Phi(z_{\max}) < 0$.

The intermediate value theorem gives a point $h_N \in (z_{\min}, z_{\max})$ for which $\Phi(h_N) = 0$. Strict decrease rules out any other zero.
:::
::::

::grafico{f="sqrt(abs(20-x))/27*(2*(x<20)-1)+sqrt(abs(15-x))/39*(2*(x<15)-1)-sqrt(abs(x-5))/20" xmin=5 xmax=21 ymin=-0.31 ymax=0.26 punti="12.71,0,pieno" nomi="h,Φ" titolo="The function $\Phi$ is strictly decreasing, so it has exactly one zero, the junction head $h_N$"}

:::osservazione{#verso-ramo-centrale titolo="Flow direction in the middle reservoir branch"}
For three reservoirs at elevations $z_A > z_B > z_C$, determine the flow direction in the middle branch before solving by testing $h_N = z_B$. At this value branch $B$ carries no flow, and continuity requires
$$
\sqrt{\frac{z_A - z_B}{r_A}} = \sqrt{\frac{z_B - z_C}{r_C}} .
$$
Compare the two sides:

- If the left-hand side is smaller, branch $C$ needs more water than arrives from $A$. Then $h_N < z_B$ and reservoir $B$ feeds the junction.
- If the left-hand side is larger, more water arrives from $A$ than flows into $C$. Then $h_N > z_B$ and the junction feeds reservoir $B$.
- If the two sides are equal, $h_N = z_B$ and the middle branch carries no flow.

Once the flow directions are known, write the three discharges with the appropriate signs. The continuity equation becomes $Q_A + Q_B = Q_C$ in the first case and $Q_A = Q_B + Q_C$ in the second.
:::

## Branched networks

:::definizione{#rete-ramificata titolo="Branched pipe network"}
A **branched pipe network** contains no closed loops. Each node is connected to the source by just one path. The branch discharges follow from continuity alone, starting at the terminal nodes and working back toward the source. Each branch carries the combined demands of all the downstream nodes. Once the discharges are known, calculate head loss in each branch and follow the paths downstream from the reservoir to obtain the piezometric head at every node.
:::

::schema{nodi="S,2,10;A,10,10;B,18,14;C,18,6,-;D,26,14" etichette="18.85,5.15,C" condotte="S-A,0.5,0;A-B,0.4,1;A-C,0.4,2;B-D,0.33,3" acqua="0,7 2,7 2,12 0,12" solidi="0,6 2,6 2,7 0,7" pelo="0,2,12,reservoir" frecce="18.9,14,20.2,14,;18.9,6,20.2,6,;26.9,14,28.2,14," titolo="Branched network: a single path leads from each node back to the reservoir"}

:::osservazione{#dimensionamento-rami titolo="Sizing a branch"}
Design data include each node’s withdrawal and minimum required pressure $\dfrac{p_{\min}}{\gamma}$. For a branch extending from node $M$, of known head $h_M$, to terminal node $V$ at elevation $z_V$, the available head loss is
$$
\Delta H_{\mathrm{avail}} = h_M - z_V - \frac{p_{\min}}{\gamma} ,
$$
and the minimum diameter is found by setting $r\,Q^2 = \Delta H_{\mathrm{avail}}$, or
$$
D \geq \left(\frac{8\,\lambda\,L\,Q^2}{g\,\pi^2\,\Delta H_{\mathrm{avail}}}\right)^{\frac{1}{5}} .
$$
Choose the next larger standard diameter and recalculate the actual loss, which is smaller than the available head. As a final check, the velocity should lie within the customary range, approximately $0.5$ to $2\,\mathrm{m/s}$.
:::

:::esempio{titolo="Pressure at a terminal node"}
A reservoir with free-surface elevation $100.00\,\mathrm{m}$ feeds pipe $0$ ($r_0 = 571.2\,\mathrm{s^2/m^5}$), which carries $120\,\mathrm{L/s}$ to node $A$. Branches $A\!-\!B$ ($r_B = 3563\,\mathrm{s^2/m^5}$, $40\,\mathrm{L/s}$) and $A\!-\!C$ ($r_C = 1861\,\mathrm{s^2/m^5}$, $80\,\mathrm{L/s}$) leave this node. The result is
$$
h_A = 100.00 - 571.2 \cdot 0.120^2 = 91.77\,\mathrm{m} ,
$$
so $h_B = 91.77 - 3563 \cdot 0.040^2 = 86.07\,\mathrm{m}$ and $h_C = 91.77 - 1861 \cdot 0.080^2 = 79.86\,\mathrm{m}$. With nodes $B$ and $C$ at elevations $70.00\,\mathrm{m}$ and $65.00\,\mathrm{m}$, the pressures are equivalent to $16.07\,\mathrm{m}$ and $14.86\,\mathrm{m}$ of water, or $158\,\mathrm{kPa}$ and $146\,\mathrm{kPa}$.
:::

## Looped pipe networks

In a looped network, more than one path reaches each node. Continuity alone therefore cannot determine the discharges, and an energy balance must also be written around each independent loop.

:::definizione{#equazioni-ai-nodi titolo="Node equations"}
At every node, the total inflow equals the total outflow. Let $E_j$ be the concentrated withdrawal at node $j$ and take inflows as positive. Then
$$
\sum_{i \in j} Q_i = E_j .
$$
A network with $n$ nodes gives $n - 1$ independent node equations, since summing all node equations yields the overall balance of inflows and withdrawals and adds no new information.
:::

:::definizione{#equazioni-alle-maglie titolo="Loop equations"}
Choose a direction around a closed loop and take branch discharge as positive when it follows that direction. Since each junction has a single piezometric head, the algebraic sum of head losses around the loop is zero:
$$
\sum_{i \in \text{loop}} r_i\,Q_i\,|Q_i| = 0 .
$$
The product $Q_i |Q_i|$ is used in place of $Q_i^2$ because the head change must reverse sign when the flow reverses. Its value is $Q_i^2$ when $Q_i > 0$.
:::

::schema{nodi="A,4,16;B,15,16;C,26,16;D,4,5;E,15,5;F,26,5" condotte="A-B,0.38,r_AB;B-C,0.38,r_BC;C-F,0.38,r_CF;E-F,0.38,r_EF;D-E,0.38,r_DE;A-D,0.38,r_AD;B-E,0.38,r_BE" frecce="4,19.5,4,17,Q" etichette="9.5,10.5,loop I;20.5,10.5,loop II" titolo="Two-loop network: branch $B\!-\!E$ belongs to both loops"}

:::osservazione{#numero-di-equazioni titolo="Number of independent equations"}
A network with $l$ branches and $n$ nodes has $l$ unknown discharges. There are $n - 1$ independent node equations, so the number of loop equations needed is
$$
m = l - (n - 1) = l - n + 1 ,
$$
which is also the number of independent loops in this network: the elementary loops containing no others. For the network in the figure, with six nodes and seven branches, the count gives $m = 7 - 6 + 1 = 2$, as expected for its two elementary loops. The $n-1$ node equations and $m$ loop equations give as many equations as unknowns. The loop equations are quadratic, so an iterative solution is used.
:::

## The Hardy Cross method

:::richiamo{titolo="Newton’s method"}
Let $F$ be differentiable, with $F'(x_0) \neq 0$. Replacing $F$ by its tangent at $x_0$ gives the approximation
$$
x_1 = x_0 - \frac{F(x_0)}{F'(x_0)}
$$
to a zero of $F$. See the chapter on derivatives and their applications in Mathematical Analysis 1.
:::

::::teorema{#hardy-cross titolo="Hardy Cross correction"}
Consider a loop with a chosen positive direction and branches of resistances $r_i$. Let $Q_i^{(0)}$ be a flow distribution satisfying every node equation. Add the same correction $\Delta Q$ to all branch discharges measured in the loop direction. The node equations continue to hold for any $\Delta Q$. The value satisfying the linearized loop equation is
$$
\Delta Q = -\,\frac{\displaystyle\sum_i r_i\,Q_i^{(0)}\,\big|Q_i^{(0)}\big|}{2\displaystyle\sum_i r_i\,\big|Q_i^{(0)}\big|} .
$$

This is the iteration used to solve looped networks. Starting from any flow distribution consistent with continuity, calculate $\Delta Q$ for each loop, correct the branch discharges, and repeat until $\Delta Q$ falls below the specified tolerance.

:::dimostrazione
An equal correction to all branches of a loop preserves the balance at each node. One step of Newton’s method gives the correction to the loop energy balance.

Each node on a loop is shared by two consecutive branches. In the chosen loop direction, one brings flow toward the node and the other takes it away. The correction $\Delta Q$ therefore enters the node balance once with a plus sign and once with a minus sign. The sum is unchanged, so the node equations continue to hold.

Define
$$
F(\Delta Q) = \sum_i r_i\left(Q_i^{(0)} + \Delta Q\right)\left|Q_i^{(0)} + \Delta Q\right| ,
$$
the sum of losses around the loop after the correction. The function $t \mapsto t\,|t|$ is differentiable with derivative $2|t|$, so
$$
F'(\Delta Q) = 2\sum_i r_i\left|Q_i^{(0)} + \Delta Q\right| .
$$
The loop equation is $F(\Delta Q) = 0$. Applying Newton’s method from $\Delta Q = 0$ gives
$$
\Delta Q = -\,\frac{F(0)}{F'(0)} = -\,\frac{\sum_i r_i\,Q_i^{(0)}\big|Q_i^{(0)}\big|}{2\sum_i r_i\big|Q_i^{(0)}\big|} ,
$$
as stated. In addition, $F$ is strictly increasing because it is a sum of strictly increasing functions with $r_i > 0$. The loop equation therefore has a unique solution in $\Delta Q$.
:::
::::

:::osservazione{#procedura-hardy-cross titolo="Calculation procedure"}
Set out a table with one row per branch and columns for $r_i$, $Q_i$, $r_i Q_i |Q_i|$, and $r_i |Q_i|$. Sum the last two columns to find $\Delta Q$. The steps are as follows.

- Choose the positive direction around each loop and assign signs to the branch discharges.
- Choose an initial flow distribution that satisfies the node equations.
- Compute $\Delta Q$ from the correction formula and add $\Delta Q$ to each branch discharge, observing its sign relative to the loop.
- A branch shared by two loops receives both corrections, each with the corresponding sign.
- Repeat until $|\Delta Q|$ is smaller than the specified tolerance, for example $1\,\mathrm{L/s}$, or until the sum $\sum r_i Q_i |Q_i|$ is smaller than a few hundredths of a meter.

Specify the stopping criterion at the outset because it determines how many digits of the result are significant.
:::

## A pump in a branch

:::osservazione{#pompa-in-un-ramo titolo="Branch containing a pump"}
A pump supplies head $H_p$ to the fluid and thus increases the total head by $H_p$ from its suction section to its discharge section. The balance between branch nodes $M$ and $V$ becomes
$$
h_M + H_p = h_V + r\,Q^2 ,
$$
and the term $-H_p$ accounts for the pump head in the loop equation, with $H_p$ positive if the pump acts in the loop direction and negative if it acts in the opposite direction. Pump input power is $P = \dfrac{\gamma\,Q\,H_p}{\eta}$, where $\eta$ is the pumping system efficiency. If the head varies, use the pump curve $H_p = H_p(Q)$. The branch balance then has one unknown $Q$. See the chapter on long pipelines and pumping systems for the pump curve and operating point.
:::

::schema{nodi="A,3.5,3;N,15,10;V,28,16" condotte="A-N,0.6,segment 1;N-V,0.5,segment 2" pompa="9,6.3,P" acqua="0,0 3.5,0 3.5,5 0,5;28,13 32,13 32,18 28,18" solidi="0,-1 3.5,-1 3.5,0 0,0;28,12 32,12 32,13 28,13" pelo="0,3.5,5,suction;28,32,18,discharge" titolo="Pump in a branch: total head increases by $H_p$ across the pump"}

:::esempio{titolo="Pump head in a series–parallel system"}
A pump lifts $100\,\mathrm{L/s}$ from a reservoir with free surface at $10.00\,\mathrm{m}$ to another with free surface at $50.00\,\mathrm{m}$. The common pipe has $r_0 = 714\,\mathrm{s^2/m^5}$ and the two downstream branches in parallel have equivalent resistance $r_p = 549\,\mathrm{s^2/m^5}$. The losses are $714 \cdot 0.100^2 = 7.14\,\mathrm{m}$ and $549 \cdot 0.100^2 = 5.49\,\mathrm{m}$, so
$$
H_p = 40.00 + 7.14 + 5.49 = 52.63\,\mathrm{m} .
$$
With efficiency $\eta = 0.72$, the input power is $P = \dfrac{9.81 \cdot 0.100 \cdot 52.63}{0.72} = 71.7\,\mathrm{kW}$.
:::
