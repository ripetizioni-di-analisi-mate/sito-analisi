---
titolo: "Failure criteria for multiaxial stress states"
sommario: "Compare the Tresca, von Mises, Rankine, and Coulomb–Mohr criteria and determine the factor of safety along proportional loading paths."
---

## From the stress tensor to the principal stresses

:::definizione{#tensioni-principali titolo="Principal stresses and sign convention"}
The symmetric tensor $\boldsymbol{\sigma}$ describes the stress state at a point. Its real eigenvalues are the **principal stresses**, ordered as $\sigma_1\geq\sigma_2\geq\sigma_3$. Tension is positive and compression negative. The ordering uses algebraic values, so when all three stresses are negative the most compressive is $\sigma_3$.

On a face normal to a principal direction, the traction vector is parallel to the normal. The shear component is therefore zero on that face. The principal directions describe the same stress state with three values independent of the original axes. The isotropic criteria examined here use these values because the material's limiting response is assumed to be the same in all directions.

In plane stress, the only components that may be nonzero are $\sigma_x$, $\sigma_y$, and $\tau_{xy}$. The $z$ direction is already principal, with principal stress zero. The center $m$ and radius $R$ of the in-plane Mohr circle give the other two principal stresses.
$$
m=\frac{\sigma_x+\sigma_y}{2},\qquad
R=\sqrt{\left(\frac{\sigma_x-\sigma_y}{2}\right)^2+\tau_{xy}^2}.
$$
Their values are $m+R$ and $m-R$. To apply a three-dimensional criterion, order these two values together with zero. If both in-plane values are positive, zero is the smallest. If both are negative, zero is the largest. If they have opposite signs, zero lies between them.
:::

:::esempio{titolo="A plane stress state with three distinct principal stresses"}
Let $\sigma_x=60\,\mathrm{MPa}$, $\sigma_y=20\,\mathrm{MPa}$, and $\tau_{xy}=15\,\mathrm{MPa}$. The center is $40\,\mathrm{MPa}$ and the radius is $25\,\mathrm{MPa}$, because $\sqrt{20^2+15^2}=25$. The in-plane principal stresses are $65\,\mathrm{MPa}$ and $15\,\mathrm{MPa}$. The ordered triple is therefore $(65,15,0)\,\mathrm{MPa}$. The largest principal stress difference is $65\,\mathrm{MPa}$ and involves the out-of-plane direction.

::struttura{poligoni="-1,-1 1,-1 1,1 -1,1" frecce="1,0,1.85,0,σ_x;-1,0,-1.85,0,;0,1,0,1.6,σ_y;0,-1,0,-1.6,;1.16,-0.55,1.16,0.55,τ_xy;-1.16,0.55,-1.16,-0.55,;-0.55,1.16,0.55,1.16,;0.55,-1.16,-0.55,-1.16," titolo="Normal and shear components in plane stress"}
:::

:::osservazione{titolo="Orientations of principal planes"}
In the plane, the normal to a face makes an angle $\theta$ with the $x$ axis. Projecting the traction vector onto that normal gives
$$
\sigma_n=\sigma_x\cos^2\theta+2\tau_{xy}\sin\theta\cos\theta+\sigma_y\sin^2\theta.
$$
Using the double-angle identities, the variable term becomes $\dfrac{\sigma_x-\sigma_y}{2}\cos(2\theta)+\tau_{xy}\sin(2\theta)$. Its maximum is the magnitude of the vector with components $\dfrac{\sigma_x-\sigma_y}{2}$ and $\tau_{xy}$. This gives another interpretation of the radius $R$. In the example, the face on which $\sigma_n=65\,\mathrm{MPa}$ satisfies $\cos(2\theta)=\dfrac{4}{5}$ and $\sin(2\theta)=\dfrac{3}{5}$. Its normal makes an angle of approximately $18.4^\circ$ with the $x$ axis. The second in-plane principal direction is perpendicular to the first, so rotating through $90^\circ$ interchanges the two principal values.
:::

:::attenzione{titolo="Plane stress and plane strain"}
Under plane stress the out-of-plane principal stress is zero. If displacement along $z$ is restrained, a plane strain model may apply instead. For a linearly elastic isotropic material with no imposed strains, $\varepsilon_z=0$ implies $\sigma_z=\nu(\sigma_x+\sigma_y)$, where $\nu$ is Poisson's ratio. If $\sigma_x=90\,\mathrm{MPa}$, $\sigma_y=30\,\mathrm{MPa}$, and $\nu=0.25$, then $\sigma_z=30\,\mathrm{MPa}$. In the absence of shear the triple is therefore $(90,30,30)\,\mathrm{MPa}$. The von Mises equivalent stress is $60\,\mathrm{MPa}$. Substituting zero arbitrarily for the third stress would instead give $30\sqrt7\,\mathrm{MPa}$. Before applying the criterion, identify the quantity that vanishes in the model.
:::

:::esempio{titolo="Steel specimen after a tensile test"}
The localized reduction in diameter at the fracture site is called necking. A tensile test distinguishes the onset of plastic deformation from final fracture. The Tresca and von Mises criteria use the yield stress as their threshold. It is obtained from the test before necking begins.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/strizione-provino.webp" alt="Cylindrical steel specimen with localized necking at the fracture" width="1280" height="1004" loading="lazy" decoding="async"><figcaption>Steel specimen after a tensile test. Resized photograph by <a href="https://commons.wikimedia.org/wiki/File:Proba_rozciagania_stal_probka_2.jpg">Andrzej Otrębski</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</figcaption></figure>
:::

## The three Mohr circles

:::definizione{#cerchi-mohr-tridimensionali titolo="Circles associated with principal stress pairs"}
In Mohr's plane, plot normal stress $\sigma_n$ on the horizontal axis and shear stress $\tau$ on the vertical axis. Each pair of principal stresses $\sigma_i,\sigma_j$ defines a circle of center $c_{ij}=\dfrac{\sigma_i+\sigma_j}{2}$ and radius $r_{ij}=\dfrac{|\sigma_i-\sigma_j|}{2}$. Its horizontal intercepts are the two principal values. For an ordered triple the circle for the pair $(1,3)$ has the largest diameter because $\sigma_1-\sigma_3$ includes the other two intervals.

The circle for the pair $(1,3)$ describes stresses on faces whose normals lie in the plane of principal directions $1$ and $3$. On other planes the pair $(\sigma_n,|\tau|)$ may also occupy points inside the region bounded by the three circles. The maximum three-dimensional shear stress is always the radius of the outer circle. It occurs on a face whose normal bisects the angle between the two extreme principal directions.
:::

:::esempio{titolo="Outer circle and maximum shear stress"}
For the triple $(90,30,-30)\,\mathrm{MPa}$, the three diameters are $60\,\mathrm{MPa}$, $60\,\mathrm{MPa}$, and $120\,\mathrm{MPa}$. The center of the outer circle is at $30\,\mathrm{MPa}$. Its highest point therefore gives $\sigma_n=30\,\mathrm{MPa}$ and $\tau=60\,\mathrm{MPa}$. The two stresses act on the same face, whose normal lies $45^\circ$ between the two extreme principal directions.

::grafico{curve="30+60*cos(t),60*sin(t),0,6.2831853;60+30*cos(t),30*sin(t),0,6.2831853;30*cos(t),30*sin(t),0,6.2831853" xmin=-48 xmax=112 ymin=-72 ymax=72 uguale=1 nomi="σ,τ" legenda="(1,3);(1,2);(2,3)" punti="30,60,pieno,P" titolo="Three Mohr circles for principal stresses of 90, 30, and −30 MPa"}
:::

:::attenzione{titolo="Maximum in-plane and three-dimensional shear stresses"}
The maximum shear stress on faces with normals in the $xy$ plane can differ from the maximum over all faces. For the triple $(65,15,0)\,\mathrm{MPa}$, the in-plane values are $65\,\mathrm{MPa}$ and $15\,\mathrm{MPa}$. The circle for this in-plane pair has radius $25\,\mathrm{MPa}$. The outer circle has intercepts $65\,\mathrm{MPa}$ and $0$ and therefore radius $32.5\,\mathrm{MPa}$. The second value is reached with a normal in the plane of the first principal direction and the $z$ direction. Finding the three-dimensional maximum shear stress thus requires including the out-of-plane principal stress.
:::

## The Tresca criterion

::::teorema{#criterio-tresca titolo="Yielding according to Tresca"}
The **Tresca criterion** assumes that an isotropic ductile material begins to yield when the maximum shear stress reaches its value at yield in uniaxial tension. If $f_y$ is the yield stress in that test, the limiting shear stress is $\dfrac{f_y}{2}$. Define the equivalent stress as
$$
\sigma_{\mathrm{eq,T}}=2\tau_{\max}=\sigma_1-\sigma_3.
$$
The criterion's threshold is $\sigma_{\mathrm{eq,T}}=f_y$. The utilization ratio is $\eta_T=\dfrac{\sigma_{\mathrm{eq,T}}}{f_y}$.

:::dimostrazione
In the principal basis, the unit normal to a face has components $n_i$. Setting $w_i=n_i^2$ gives $\sum_iw_i=1$. The normal stress is $m_n=\sum_iw_i\sigma_i$ and the squared shear traction is $\sum_iw_i\sigma_i^2-m_n^2$. For each $\sigma_i$ in the interval $[\sigma_3,\sigma_1]$, we have $(\sigma_1-\sigma_i)(\sigma_i-\sigma_3)\geq0$. Expanding, multiplying by $w_i$, and summing gives
$$
\sum_iw_i\sigma_i^2\leq(\sigma_1+\sigma_3)m_n-\sigma_1\sigma_3.
$$
It follows that $\tau^2\leq(\sigma_1-m_n)(m_n-\sigma_3)$. The product has maximum $\dfrac{(\sigma_1-\sigma_3)^2}{4}$ when $m_n=\dfrac{\sigma_1+\sigma_3}{2}$. Choosing $w_1=w_3=\dfrac{1}{2}$ and $w_2=0$ attains equality. At yield in uniaxial tension the triple is $(f_y,0,0)$, so the maximum shear stress equals $\dfrac{f_y}{2}$.
:::
::::

:::esempio{titolo="Pure shear according to Tresca"}
In pure shear of magnitude $t$, the principal stresses are $t$, $0$, and $-t$. The outer circle is centered at the origin and has radius $t$. Consequently, $\sigma_{\mathrm{eq,T}}=2t$. If $f_y=240\,\mathrm{MPa}$, the threshold is reached at $t=120\,\mathrm{MPa}$. Pure shear shows why a shear stress cannot be compared directly with the uniaxial tensile yield strength.

::grafico{curve="120*cos(t),120*sin(t),0,6.2831853" xmin=-140 xmax=140 ymin=-136 ymax=136 uguale=1 nomi="σ,τ" legenda="\tau_{\max}=120" punti="0,120,pieno,P" titolo="Outer circle at the Tresca yield threshold in pure shear"}
:::

:::esempio{titolo="Three compressive principal stresses"}
An ordered triple may consist entirely of negative values. For $(-30,-50,-110)\,\mathrm{MPa}$, the largest value is $-30\,\mathrm{MPa}$ and the smallest is $-110\,\mathrm{MPa}$. Their difference is $80\,\mathrm{MPa}$, so the Tresca equivalent stress is $80\,\mathrm{MPa}$. For a limit of $f_y=200\,\mathrm{MPa}$ the utilization ratio is $\dfrac{2}{5}$. Although the mean stress is compressive, the difference between the extremes produces shear on inclined planes. Ordering the extremes by magnitude would lose the link between the circle's diameter and the algebraic stress difference.
:::

## The von Mises criterion

::::teorema{#criterio-von-mises titolo="Yielding according to von Mises"}
The **von Mises criterion** assumes that yielding is governed by the deviatoric stress tensor, obtained by subtracting the mean stress from each principal stress. The von Mises equivalent stress is
$$
\sigma_{\mathrm{eq,V}}=
\sqrt{\frac{
(\sigma_1-\sigma_2)^2+
(\sigma_2-\sigma_3)^2+
(\sigma_3-\sigma_1)^2}{2}}.
$$
The threshold is $\sigma_{\mathrm{eq,V}}=f_y$. The utilization ratio is $\eta_V=\dfrac{\sigma_{\mathrm{eq,V}}}{f_y}$.

:::dimostrazione
Let $\bar\sigma=\dfrac{\sigma_1+\sigma_2+\sigma_3}{3}$ denote the mean stress. The deviator is $\boldsymbol{s}=\boldsymbol{\sigma}-\bar\sigma\boldsymbol I$, where $\boldsymbol I$ is the identity tensor. The second deviatoric invariant is defined as $J_2=\dfrac{\operatorname{tr}(\boldsymbol{s}^2)}{2}$. In principal coordinates the trace of the squared deviator is the sum of the squares of $\sigma_i-\bar\sigma$. In uniaxial tension of magnitude $f_y$ these differences are $\dfrac{2f_y}{3}$, $-\dfrac{f_y}{3}$, and $-\dfrac{f_y}{3}$, so $J_2=\dfrac{f_y^2}{3}$. Thus $\sqrt{3J_2}$ is the equivalent stress normalized to the uniaxial test. Expanding the squared differences from the mean gives the formula in terms of principal stress differences.
:::
::::

:::esempio{titolo="Tension and shear at the same point"}
Under plane stress the formula can be written directly in the original stress components.
$$
\sigma_{\mathrm{eq,V}}
=\sqrt{\sigma_x^2-\sigma_x\sigma_y+\sigma_y^2+3\tau_{xy}^2}.
$$
To obtain this formula, substitute the trace of the tensor $\sigma_x+\sigma_y$ and the trace of its square $\sigma_x^2+\sigma_y^2+2\tau_{xy}^2$ into the invariant form. With $\sigma_x=80\,\mathrm{MPa}$, $\sigma_y=0$, and $\tau_{xy}=40\,\mathrm{MPa}$, the equivalent stress is $\sigma_{\mathrm{eq,V}}=\sqrt{80^2+3\cdot40^2}\,\mathrm{MPa}=40\sqrt7\,\mathrm{MPa}$. Shear contributes even when the normal stress along $y$ is zero.

::struttura{poligoni="-1,-1 1,-1 1,1 -1,1" frecce="1,0,1.8,0,σ_x;-1,0,-1.8,0,;1.16,-0.55,1.16,0.55,τ_xy;-1.16,0.55,-1.16,-0.55,;-0.55,1.16,0.55,1.16,;0.55,-1.16,-0.55,-1.16," titolo="Tension along x combined with positive shear"}
:::

:::osservazione{titolo="Elastic distortion energy"}
For an isotropic, linearly elastic material, the deviatoric strain is $\boldsymbol e=\dfrac{\boldsymbol s}{2G}$, where $G$ is the shear modulus. The elastic distortion energy per unit volume is $\dfrac12\boldsymbol{s}:\boldsymbol e$. The symbol $:$ denotes the sum of products of corresponding components of the two tensors. Since $\boldsymbol s$ is symmetric, $\boldsymbol s:\boldsymbol s=\operatorname{tr}(\boldsymbol s^2)$. The distortion energy is therefore $\dfrac{J_2}{2G}$. After calibration to the uniaxial test, the von Mises threshold is equivalent to prescribing a limiting distortion energy. A change in hydrostatic stress changes the volumetric contribution but leaves distortion energy unchanged.
:::

## Hydrostatic stress and comparison of ductile yield criteria

:::definizione{#parte-deviatorica titolo="Hydrostatic and deviatoric components"}
A stress that is equal in all three principal directions is **hydrostatic**. Adding the same value $h$ to every principal stress leaves every difference $\sigma_i-\sigma_j$ unchanged. The Mohr circle radii and the Tresca and von Mises equivalent stresses are therefore unchanged. The mean stress and the normal stresses on individual planes do change.

For example, changing from $(90,30,-30)\,\mathrm{MPa}$ to $(120,60,0)\,\mathrm{MPa}$ adds $30\,\mathrm{MPa}$ in every direction. The center of the outer circle moves from $30\,\mathrm{MPa}$ to $60\,\mathrm{MPa}$, while the radius remains $60\,\mathrm{MPa}$. The diagram shows this horizontal shift. Both circles reach the same maximum height.

::grafico{curve="30+60*cos(t),60*sin(t),0,6.2831853;60+60*cos(t),60*sin(t),0,6.2831853" xmin=-42 xmax=130 ymin=-70 ymax=70 uguale=1 nomi="σ,τ" legenda="\mathrm{initial\ state};\mathrm{hydrostatic\ increment}" titolo="Both circles shift by 30 MPa without changing radius"}
:::

::::teorema{#confronto-criteri titolo="Bounds relating the Tresca and von Mises equivalent stresses"}
For every ordered triple of principal stresses,
$$
\frac{\sqrt3}{2}\sigma_{\mathrm{eq,T}}
\leq\sigma_{\mathrm{eq,V}}
\leq\sigma_{\mathrm{eq,T}}.
$$
For the same uniaxial yield strength, Tresca therefore reaches its threshold at a load multiplier less than or equal to that for von Mises.

:::dimostrazione
Set $a=\sigma_1-\sigma_2$ and $b=\sigma_2-\sigma_3$. Both are nonnegative. Substitution gives $\sigma_{\mathrm{eq,T}}=a+b$ and $\sigma_{\mathrm{eq,V}}^2=a^2+ab+b^2=(a+b)^2-ab$. Since $ab\geq0$, the upper bound follows. Also, $4ab\leq(a+b)^2$ because $(a-b)^2\geq0$. Substituting this bound on the product gives the lower bound. The upper bound is attained when two principal stresses coincide. The lower bound is attained when the intermediate stress is the average of the other two.
:::
::::

:::osservazione{titolo="Yield envelopes under plane stress"}
For in-plane principal stresses $\sigma_A$ and $\sigma_B$, use dimensionless coordinates $x=\dfrac{\sigma_A}{f_y}$ and $y=\dfrac{\sigma_B}{f_y}$. The third principal stress is zero. Tresca requires $|x|\leq1$, $|y|\leq1$, and $|x-y|\leq1$ simultaneously, so its domain is hexagonal. The von Mises boundary is the ellipse $x^2-xy+y^2=1$. In pure shear $y=-x$. The Tresca threshold is therefore $|x|=\dfrac{1}{2}$, while the von Mises threshold is $|x|=\dfrac{1}{\sqrt3}$.

::grafico{curve="cos(t)+sin(t)/sqrt(3),cos(t)-sin(t)/sqrt(3),0,6.2831853" linee="-1,-1 0,-1 1,0 1,1 0,1 -1,0 -1,-1" xmin=-1.4 xmax=1.4 ymin=-1.4 ymax=1.4 uguale=1 legenda="\mathrm{von\ Mises}" titolo="Normalized axes, von Mises ellipse, and Tresca hexagon"}
:::

:::esempio{titolo="Comparison in pure shear"}
Consider a state of pure shear with $t=130\,\mathrm{MPa}$ and $f_y=240\,\mathrm{MPa}$. Tresca gives $2t=260\,\mathrm{MPa}$, so its utilization ratio exceeds one. Von Mises gives $\sqrt3\,t\simeq225.17\,\mathrm{MPa}$, with a ratio below one. The difference is consistent with the inequality between the equivalent stresses. Both criteria agree in the uniaxial test used to calibrate $f_y$. In pure shear the intermediate principal stress equals the mean of the extremes, so the ratio $\dfrac{\sigma_{\mathrm{eq,V}}}{\sigma_{\mathrm{eq,T}}}$ attains its lower bound $\dfrac{\sqrt3}{2}$. The model choice can therefore affect the assessment of intermediate states near yield.
:::

## The Rankine criterion

:::definizione{#criterio-rankine titolo="Rankine's maximum normal stress criterion"}
The **Rankine criterion** compares the largest positive principal stress and the magnitude of the most compressive principal stress with two distinct uniaxial strengths. Let $f_t>0$ be the tensile strength and $f_c>0$ the magnitude of the compressive strength. The signed compressive failure stress is therefore $-f_c$. The utilization ratio is
$$
\eta_R=\max\left(\frac{\sigma_1}{f_t},-\frac{\sigma_3}{f_c},0\right).
$$
The threshold is $\eta_R=1$. If the ratio is below one, the state lies inside the criterion's domain. This comparison uses the principal values. In the presence of shear, a tensile principal stress may develop even if all the original normal components are compressive.

Under plane stress the domain requires both in-plane principal stresses to lie in the interval $[-f_c,f_t]$. It is therefore a square in the principal stress plane, shifted if the tensile and compressive limits have different magnitudes. The right-hand edge represents the horizontal-axis stress reaching its tensile limit. The lower edge represents the vertical-axis stress reaching its compressive limit.

::grafico{linee="-120,-120 40,-120 40,40 -120,40 -120,-120" punti="24,-48,pieno,E;-15,-72,pieno,F" xmin=-140 xmax=60 ymin=-140 ymax=60 uguale=1 nomi="a,b" titolo="Rankine domain with a = σ_A and b = σ_B in MPa"}
:::

:::esempio{titolo="Which extreme governs?"}
For the triple $(24,0,-48)\,\mathrm{MPa}$ and the limits $f_t=40\,\mathrm{MPa}$ and $f_c=120\,\mathrm{MPa}$, the tensile ratio is $\dfrac{3}{5}$ and the compressive ratio is $\dfrac{2}{5}$. The first is larger, so the utilization ratio is $\dfrac{3}{5}$. The compressive stress is greater in magnitude than the tensile stress, but its strength limit is three times larger. The criterion therefore compares ratios to the limit appropriate to each sign.
:::

:::esempio{titolo="Compressive normal stresses and a tensile principal stress"}
Let $\sigma_x=\sigma_y=-10\,\mathrm{MPa}$ and $\tau_{xy}=35\,\mathrm{MPa}$. The center of Mohr's circle is $-10\,\mathrm{MPa}$ and its radius is $35\,\mathrm{MPa}$. The ordered triple is therefore $(25,0,-45)\,\mathrm{MPa}$. With $f_t=30\,\mathrm{MPa}$ and $f_c=150\,\mathrm{MPa}$, the tensile ratio is $\dfrac{5}{6}$ and the compressive ratio is $\dfrac{3}{10}$. The Rankine utilization ratio is $\dfrac{5}{6}$. The tensile principal stress produced by shear governs, even though the two normal stresses in the original axes were compressive. A Rankine check therefore requires diagonalizing the tensor or finding both horizontal intercepts of the circle.
:::

## The Coulomb–Mohr criterion

::::teorema{#criterio-coulomb-mohr titolo="Coulomb–Mohr envelope for brittle materials"}
In the form used here, the **Coulomb–Mohr criterion** combines the two uniaxial strengths $f_t$ and $f_c$. For a wholly tensile state, the utilization ratio is $\dfrac{\sigma_1}{f_t}$. For a wholly compressive state it is $-\dfrac{\sigma_3}{f_c}$. For a mixed state with $\sigma_1>0>\sigma_3$, it is
$$
\eta_{CM}=\frac{\sigma_1}{f_t}-\frac{\sigma_3}{f_c}.
$$
The threshold is $\eta_{CM}=1$. The formulas agree where either extreme principal stress is zero. In the mixed regime, the ratio is the sum of two positive contributions and is therefore greater than or equal to the larger contribution used by Rankine.

:::dimostrazione
In Mohr's plane, consider the limiting circles from the uniaxial tests. For tension the center and radius are $\dfrac{f_t}{2}$. For compression the center is $-\dfrac{f_c}{2}$ and the radius is $\dfrac{f_c}{2}$. Write the upper common tangent as $\tau=m\sigma+b$, with $b>0$, and set $d=\sqrt{1+m^2}$. The distance from each center to the tangent equals that circle's radius. Thus
$$
b+m\frac{f_t}{2}=d\frac{f_t}{2},\qquad
b-m\frac{f_c}{2}=d\frac{f_c}{2}.
$$
These conditions give $\dfrac{m}{d}=\dfrac{f_t-f_c}{f_t+f_c}$ and $\dfrac{b}{d}=\dfrac{f_tf_c}{f_t+f_c}$. For a mixed stress state the outer circle has center $\dfrac{\sigma_1+\sigma_3}{2}$ and radius $\dfrac{\sigma_1-\sigma_3}{2}$. Equating the radius to the distance from the common tangent and substituting $\dfrac{m}{d}$ and $\dfrac{b}{d}$ gives $\sigma_1 f_c-\sigma_3 f_t=f_tf_c$. Dividing by $f_tf_c$ gives the limiting relation.
:::
::::

:::esempio{titolo="Common tangent and mixed-stress branch"}
With $f_t=40\,\mathrm{MPa}$ and $f_c=120\,\mathrm{MPa}$ the upper tangent is $\tau=\dfrac{60-\sigma_n}{\sqrt3}$ when both coordinates are expressed in megapascals. The compression circle is centered at $-60\,\mathrm{MPa}$ and the tension circle at $20\,\mathrm{MPa}$. The tangent touches them at distances from their centers equal to their respective radii, $60\,\mathrm{MPa}$ and $20\,\mathrm{MPa}$.

::grafico{f="(60-x)/sqrt(3)" curve="-60+60*cos(t),60*sin(t),0,6.2831853;20+20*cos(t),20*sin(t),0,6.2831853" xmin=-132 xmax=54 ymin=-66 ymax=88 uguale=1 nomi="σ,τ" legenda="\mathrm{tangent};\mathrm{compression};\mathrm{tension}" titolo="Uniaxial stress circles and their upper common tangent"}

With $(24,0,-48)\,\mathrm{MPa}$, the utilization ratio is $\dfrac{3}{5}+\dfrac{2}{5}=1$. Rankine gives $\dfrac{3}{5}$ for the same state. The mixed branch of Coulomb–Mohr combines the two extremes, whereas the larger ratio governs in Rankine. In the principal stress plane, the mixed boundary is the segment from $(0,-120)$ to $(40,0)$, or its reflection about the angle bisector if the in-plane directions are interchanged.

::grafico{linee="-120,-120 0,-120 40,0 40,40 0,40 -120,0 -120,-120" punti="24,-48,pieno,E" xmin=-140 xmax=60 ymin=-140 ymax=60 uguale=1 nomi="a,b" titolo="Coulomb–Mohr domain with a = σ_A and b = σ_B in MPa"}
:::

:::osservazione{titolo="Pure shear with unequal tensile and compressive limits"}
The principal stresses in pure shear are $(t,0,-t)$ with $t\geq0$. Coulomb–Mohr gives $\eta_{CM}=t\left(\dfrac{1}{f_t}+\dfrac{1}{f_c}\right)$. The limiting shear stress is therefore $\dfrac{f_tf_c}{f_t+f_c}$. With $f_t=40\,\mathrm{MPa}$ and $f_c=120\,\mathrm{MPa}$ it is $30\,\mathrm{MPa}$. Rankine gives $\min(f_t,f_c)=40\,\mathrm{MPa}$ because it compares the two extremes separately. When available, a shear test provides a check distinct from the uniaxial tests. The mixed branch of Coulomb–Mohr is an idealization constructed from those two original limits.
:::

## Factor of safety and limitations of the comparison

::::teorema{#fattore-sicurezza titolo="Limiting load multiplier under proportional loading"}
A loading path is **proportional** if the entire current stress tensor $\boldsymbol{\sigma}_0$ is multiplied by a positive number $\lambda$. Its principal directions stay the same and the principal stresses become $\lambda\sigma_i$. If the criterion gives utilization ratio $\eta_0>0$ in the initial state, the load multiplier at the limit is
$$
n=\frac{1}{\eta_0}.
$$
A value $n>1$ means that reaching the limit requires increasing the load. A value $n=1$ means the initial state is at the limit. A value $n<1$ means that the threshold is reached by reducing the multiplier from the given state.

:::dimostrazione
For $\lambda>0$ the principal stresses retain their order. Each stress also keeps its sign, so the same branch applies along the whole path. The Tresca and von Mises equivalent stresses and the Rankine and Coulomb–Mohr utilization ratios are homogeneous of degree one for positive multipliers. Thus $\eta(\lambda\boldsymbol{\sigma}_0)=\lambda\eta_0$. At the threshold the ratio is one, so $\lambda=\dfrac{1}{\eta_0}$.
:::
::::

:::esempio{titolo="Intersection of a loading ray with the boundary"}
For Tresca and normalized in-plane principal stresses of $0.6$ and $-0.2$, the utilization ratio is $0.8$ because the positive and negative extremes are $0.8$ apart. The safety factor is $1.25$. Scaling the two coordinates gives $(0.75,-0.25)$. Their difference is one, so the point lies on the boundary.

::grafico{linee="-1,-1 0,-1 1,0 1,1 0,1 -1,0 -1,-1;0,0 1.1,-0.3666667" punti="0.6,-0.2,pieno,P;0.75,-0.25,pieno,L" xmin=-1.25 xmax=1.25 ymin=-1.25 ymax=1.25 uguale=1 titolo="P is the initial stress state and L is the limiting state along the loading path"}
:::

:::attenzione{titolo="Independent loads and conditions of applicability"}
If part of the loading remains fixed, the tensor follows a path of the form $\boldsymbol{\sigma}_{\mathrm{fixed}}+\lambda\boldsymbol{\sigma}_{\mathrm{variable}}$. Principal stresses may change order and their directions may rotate. In general, the reciprocal of the initial utilization ratio then does not give the limiting multiplier. For example, under uniaxial tension with a fixed stress of $60\,\mathrm{MPa}$ and a variable stress of $40\,\mathrm{MPa}$, a limit of $200\,\mathrm{MPa}$ is reached at $60+40\lambda=200$, giving $\lambda=3.5$. Scaling both stress contributions would instead give $n=2$.

Tresca and von Mises describe initial yielding in ductile materials under the assumptions of the models. Rankine and Coulomb–Mohr describe idealized limits for brittle materials. These formulas use the local stress state and the strengths supplied by the problem. Fatigue, crack propagation, member instability, and design checks require their own data and models. For purely hydrostatic loading, Tresca and von Mises give zero utilization and no finite threshold along the loading ray in these models.
:::

:::osservazione{titolo="Comparing two points in the same cross section"}
Apply each criterion point by point. In a section under bending and shear, an extreme fiber may have high normal stress and zero shear, while an interior point may have a lower normal stress and substantial shear. For example, a normal stress of $80\,\mathrm{MPa}$ with zero shear gives a von Mises equivalent stress of $80\,\mathrm{MPa}$. Zero normal stress and a shear stress of $50\,\mathrm{MPa}$ give $50\sqrt3\,\mathrm{MPa}$, approximately $86.6\,\mathrm{MPa}$. For the same material the second state is therefore closer to yielding by the von Mises criterion. This comparison keeps together the components acting at each point.
:::
