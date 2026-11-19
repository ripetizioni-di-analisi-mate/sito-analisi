---
titolo: "Stress, strain, and Hooke's law"
sommario: "From traction on a surface to the stress tensor, Mohr's circle, and strains in an isotropic elastic solid."
---

## Traction and the Cauchy stress tensor

:::definizione{#vettore-tensione titolo="Traction on an internal surface"}
A beam cross section transmits a distributed force. To describe what happens at a single point, consider a small part of the cut surface surrounding that point. Orient the surface with the unit normal $\mathbf n$ pointing outward from the isolated part. If $\Delta\mathbf F$ is the contact force that the removed part exerts on the area $\Delta A$, the **traction vector** is
$$
\mathbf t(\mathbf n)=\lim_{\Delta A\to0}\frac{\Delta\mathbf F}{\Delta A}.
$$
The limit is taken at a regular material point. The projection $\sigma_n=\mathbf n\cdot\mathbf t(\mathbf n)$ is the normal stress. The remaining component $\mathbf t(\mathbf n)-\sigma_n\mathbf n$ lies in the surface and is the shear traction. A positive value of $\sigma_n$ indicates tension because the normal points outward. A negative value indicates compression.

::struttura{poligoni="0,0 2.4,0 0,1.8" frecce="1.2,0.9,1.74,1.62,n;1.2,0.9,0.48,1.44,t;1.2,0.9,2.05,1.42,tension" titolo="Normal, tangent, and traction on an inclined cut"}

The proportions of normal and tangential components of the same force depend on the orientation of the face. For example, if a surface traction has components $30\,\mathrm{MPa}$ along the normal and $40\,\mathrm{MPa}$ along the tangent, its magnitude is $50\,\mathrm{MPa}$. One megapascal equals one newton per square millimeter.
:::

::::teorema{#relazione-cauchy titolo="Cauchy's traction formula"}
In a classical continuum with contact tractions, every traction at a regular point is obtained from a single tensor $\boldsymbol{\sigma}$ through
$$
\mathbf t(\mathbf n)=\boldsymbol{\sigma}\mathbf n,\qquad
\boldsymbol{\sigma}=
\begin{pmatrix}
\sigma_x & \tau_{xy} & \tau_{xz}\\
\tau_{xy} & \sigma_y & \tau_{yz}\\
\tau_{xz} & \tau_{yz} & \sigma_z
\end{pmatrix}.
$$
The three columns are the tractions on faces whose outward normals point along the positive coordinate axes. Balance of angular momentum makes the tensor symmetric in the absence of distributed couples. In particular, the $y$ component of traction on the face with normal $\mathbf e_x$ equals the $x$ component on the face with normal $\mathbf e_y$.

:::dimostrazione
Isolate a tetrahedron with an inclined face of area $A$ and three coordinate faces. When the direction cosines $n_i$ are positive, the coordinate faces have areas $An_i$ and normals $-\mathbf e_i$. The surface forces scale with the square of the tetrahedron's size, whereas the body force scales with its cube. Dividing the equilibrium equation by $A$ and taking the limit gives $\mathbf t(\mathbf n)+\sum_i n_i\mathbf t(-\mathbf e_i)=0$. Since tractions on opposite faces point in opposite directions, $\mathbf t(\mathbf n)=\sum_i n_i\mathbf t(\mathbf e_i)$. The same argument applies in the other octants with the corresponding normal signs reversed. Moment equilibrium of a cubic element gives equality of the corresponding pairs of shear stresses.
:::

The formula gives the stresses on a plane with any specified normal from their Cartesian components, even when the plane is oblique to all three axes.
::::

:::definizione{#tensione-piana titolo="Plane stress"}
In **plane stress** relative to $xy$, $\sigma_z=\tau_{xz}=\tau_{yz}=0$. The third column of the tensor is zero, so there is no traction on the faces perpendicular to $z$. This model describes a thin plate loaded in its plane, with traction-free broad faces, in regions away from points of load application. Two normal stresses and one shear stress remain in the plane.

::struttura{poligoni="-1,-1 1,-1 1,1 -1,1" frecce="1,0,1.7,0,σ_x;-1,0,-1.7,0;0,1,0,1.7,σ_y;0,-1,0,-1.7;1.15,-0.6,1.15,0.6,τ_xy;-1.15,0.6,-1.15,-0.6;-0.6,1.15,0.6,1.15;0.6,-1.15,-0.6,-1.15" titolo="Faces of a plane element showing positive stress components"}

On the face with normal $+\mathbf e_x$, a positive $\tau_{xy}$ points toward $+y$. On the face with normal $-\mathbf e_x$, the same component is drawn toward $-y$. In the Saint-Venant problem, this interpretation connects the beam's internal forces and moments with the tractions on its cross section.
:::

:::esempio{titolo="From uniform stress to the resultant on the cross section"}
A prismatic bar of area $A=300\,\mathrm{mm^2}$ carries an axial tensile force. At a section where the normal stress is uniform and equal to $\sigma_x=40\,\mathrm{MPa}$, the traction on the face with normal $+\mathbf e_x$ has magnitude $40\,\mathrm{MPa}$ along $+x$. Its integral over that face reduces to the product $N=\sigma_x A=12\,000\,\mathrm N$. The value $40\,\mathrm{MPa}$ is a local quantity with the same value at every point of that section. The value $12\,\mathrm{kN}$ refers to the entire section. If the stress varies across the face, integrate the local traction to obtain the resultant and include each contribution's moment arm when calculating the resultant moment.
:::

:::esempio{titolo="Tensile test specimens"}
The central portion of each specimen has a smaller cross section than the gripped ends. In the gauge length, away from the fillets, a uniaxial model relates force, average stress, and axial strain. The shape of the specimen shows where this model applies.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/provini-trazione.webp" alt="Elongated metal tensile specimens with wider ends and a narrower gauge section" width="806" height="1024" loading="lazy" decoding="async"><figcaption>Tensile test specimens. Resized photograph by <a href="https://commons.wikimedia.org/wiki/File:Proba_rozciagania_probki_1.jpg">Andrzej Otrębski</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</figcaption></figure>
:::

## Equilibrium in a continuum

::::teorema{#equilibrio-locale titolo="Local equilibrium equations"}
Consider material at rest with a differentiable Cauchy stress tensor and body force $\mathbf b$, expressed as a force per unit volume. Force equilibrium is $\operatorname{div}\boldsymbol{\sigma}+\mathbf b=\mathbf0$. For planar fields independent of $z$, the two equations are
$$
\begin{cases}
\frac{\partial\sigma_x}{\partial x}+\frac{\partial\tau_{xy}}{\partial y}+b_x=0,\\[4pt]
\frac{\partial\tau_{xy}}{\partial x}+\frac{\partial\sigma_y}{\partial y}+b_y=0.
\end{cases}
$$
On a boundary with prescribed external traction $\overline{\mathbf t}$, impose $\boldsymbol{\sigma}\mathbf n=\overline{\mathbf t}$. These are two separate checks. Local equilibrium applies at interior points, while the boundary condition specifies the force per unit area on the surface.

::struttura{poligoni="0,0 3,0 3,2 0,2" frecce="0,0,3.9,0,x;0,0,0,2.7,y;1.45,1,2.1,1.5,b;3,0.72,3.8,1.12,t(n)" punti="1.45,1,P,pieno" riferimento=0 titolo="Body force at a point and traction on the boundary"}

:::dimostrazione
Consider an infinitesimal rectangular element. Along $x$, the two faces perpendicular to $x$ contribute the difference between their values of $\sigma_x$ times the face area. The faces perpendicular to $y$ contribute through the difference in $\tau_{xy}$. Add the body force along $x$, divide by the volume, and take the limit. Dividing the differences by the corresponding lengths gives the derivatives in the first equation. Projection along $y$ gives the second.
:::
::::

:::esempio{titolo="Stress varying from point to point"}
Let $\sigma_x=kx$ and $\tau_{xy}=0$, with $\sigma_y$ constant. The first equation gives $b_x=-k$, and the second gives $b_y=0$. If $k=3\,\mathrm{MPa/m}$, the body force along $x$ is $-3\,\mathrm{MN/m^3}$. Its negative sign balances the net force from the tractions on the two faces normal to $x$. Under the same assumptions a uniform field requires zero body force because opposite tractions have equal magnitudes.
:::

:::osservazione{titolo="Traction-free and loaded boundaries"}
On a free portion of the boundary, the prescribed traction vector is zero. If the normal is $+\mathbf e_x$, this requires $\sigma_x=\tau_{xy}=0$ there. The value $\sigma_y$ may remain nonzero because it is a component of traction on a face with a different normal. For example, in the uniform field $\sigma_x=\tau_{xy}=0$, $\sigma_y=20\,\mathrm{MPa}$, the vertical edge is free while the horizontal edge is loaded. This field satisfies the local equilibrium equations in the absence of body forces. The boundary conditions identify which faces can physically realize this example.
:::

## Displacements, strains, and compatibility

:::definizione{#deformazioni titolo="Infinitesimal strain tensor"}
Let $\mathbf u$ be the displacement field. Its gradient $\nabla\mathbf u$ describes how displacement changes between neighboring points. Its symmetric part is the infinitesimal strain tensor $\boldsymbol{\varepsilon}=\dfrac12(\nabla\mathbf u+(\nabla\mathbf u)^{\mathsf T})$. Its skew-symmetric part describes infinitesimal rotation. In the plane, for example,
$$
\varepsilon_x=\frac{\partial u_x}{\partial x},\qquad
\varepsilon_y=\frac{\partial u_y}{\partial y},\qquad
\gamma_{xy}=\frac{\partial u_x}{\partial y}+\frac{\partial u_y}{\partial x}
=2\varepsilon_{xy}.
$$
The normal strain $\varepsilon_x$ measures the relative change in length of a segment initially parallel to $x$. The engineering shear strain $\gamma_{xy}$ measures the signed decrease in the initially right angle between segments directed along $+x$ and $+y$. For small displacement gradients, terms quadratic in the gradients are neglected. To first order the relative volume change is the trace $\varepsilon_x+\varepsilon_y+\varepsilon_z$.

::struttura{poligoni="0,0 2,0 2,1.7 0,1.7" tratteggi="0,0 2.5,0 3.1,1.7 0.6,1.7 0,0" frecce="0,1.7,0.6,1.7,u_x;2,0,2.5,0" etichette="1.2,1.25,initial;2.95,1.98,deformed" titolo="Horizontal extension and shear distortion of an element"}

If $u_x=ay$ and $u_y=-ax$, the two cross derivatives are equal and opposite. This gives $\gamma_{xy}=0$, and all normal strains vanish. The field represents an infinitesimal rigid-body rotation. It therefore changes the orientation of the segments while preserving their lengths and the angle between them.
:::

::::teorema{#compatibilita-piana titolo="Compatibility of plane strains"}
If a sufficiently smooth strain field is derived from single-valued in-plane displacements, then
$$
\frac{\partial^2\varepsilon_x}{\partial y^2}
+\frac{\partial^2\varepsilon_y}{\partial x^2}
=\frac{\partial^2\gamma_{xy}}{\partial x\partial y}.
$$
In a simply connected planar domain with sufficiently smooth fields, this identity is also sufficient for an in-plane displacement field to exist. The displacement is unique up to a planar rigid-body motion. The equation checks whether strains specified separately along $x$, along $y$, and in shear can describe a single configuration.

:::dimostrazione
To prove necessity, substitute the derivatives of $u_x,u_y$ into the relation. The first term on the left is $\partial_x\partial_y^2u_x$ and the second is $\partial_y\partial_x^2u_y$. Differentiating $\gamma_{xy}$ gives the same terms because the mixed derivatives commute. To prove sufficiency introduce $\omega=\dfrac12(\partial_xu_y-\partial_yu_x)$. The equations $\partial_x\omega=\dfrac12\partial_x\gamma_{xy}-\partial_y\varepsilon_x$ and $\partial_y\omega=\partial_x\varepsilon_y-\dfrac12\partial_y\gamma_{xy}$ define a gradient field precisely when the identity holds. The simply connected domain therefore admits $\omega$. The relations $\partial_xu_x=\varepsilon_x$, $\partial_yu_x=\dfrac12\gamma_{xy}-\omega$, $\partial_xu_y=\dfrac12\gamma_{xy}+\omega$, and $\partial_yu_y=\varepsilon_y$ define two more gradient fields. Integrating them gives $u_x,u_y$.
:::

For $\varepsilon_x=ay^2$, $\varepsilon_y=bx^2$, and $\gamma_{xy}=cxy$ the condition becomes $2a+2b=c$. If the coefficients do not satisfy this equality, the prescribed strains are incompatible.
::::

:::esempio{titolo="Positive shear strain from a displacement field"}
Let $u_x=ay$ with $a=3\cdot10^{-4}$, and let $u_y=0$. A segment initially parallel to $x$ remains horizontal, while one parallel to $y$ acquires a rightward component. The angle between them therefore decreases. Calculation gives $\varepsilon_x=\varepsilon_y=0$ and $\gamma_{xy}=3\cdot10^{-4}$. The two diagonals of an initially square element give different readings. A segment along $(1,1)$ lengthens, while one along $(-1,1)$ shortens. This is a shear distortion that preserves volume to first order. A measurement along $x$ alone would give zero even though the element has changed shape.
:::

## Stresses on an inclined plane

::::teorema{#trasformazione titolo="Plane stress transformation"}
Let $\theta$ be the counterclockwise angle from the $x$ axis to the normal $\mathbf n=(\cos\theta,\sin\theta)$. Obtain the positive tangent $\mathbf m=(-\sin\theta,\cos\theta)$ by rotating the normal counterclockwise through $90^\circ$. Setting $p=\dfrac{\sigma_x+\sigma_y}{2}$ and $d=\dfrac{\sigma_x-\sigma_y}{2}$ gives the following projections of traction:
$$
\begin{aligned}
\sigma_n&=p+d\cos2\theta+\tau_{xy}\sin2\theta,\\[6pt]
\tau_{nt}&=-d\sin2\theta+\tau_{xy}\cos2\theta.
\end{aligned}
$$
The angle is measured to the normal of the face. In particular, a horizontal face has a vertical normal and corresponds to $\theta=90^\circ$ if the upward-facing side is chosen.

::struttura{poligoni="0,0 2.4,0 0,1.8" frecce="0,0,3,0,x;0,0,0,2.3,y;1.2,0.9,1.74,1.62,n;1.2,0.9,0.48,1.44,m" riferimento=0 titolo="Global axes and oriented basis of the inclined face"}

:::dimostrazione
By Cauchy's formula, the in-plane traction is the product of the plane stress matrix and $(\cos\theta,\sin\theta)^{\mathsf T}$. The dot product with $\mathbf n$ gives $\sigma_x\cos^2\theta+\sigma_y\sin^2\theta+2\tau_{xy}\sin\theta\cos\theta$. The dot product with $\mathbf m$ gives $(\sigma_y-\sigma_x)\sin\theta\cos\theta+\tau_{xy}(\cos^2\theta-\sin^2\theta)$. Substituting the double-angle identities yields the two formulas.
:::
::::

:::esempio{titolo="A face at forty-five degrees"}
In a uniaxial test with $\sigma_x=80\,\mathrm{MPa}$, $\sigma_y=0$, and $\tau_{xy}=0$, we have $p=d=40\,\mathrm{MPa}$. For $\theta=45^\circ$ the cosine of twice the angle is zero and the sine is one, so $\sigma_n=40\,\mathrm{MPa}$ and $\tau_{nt}=-40\,\mathrm{MPa}$. The second component's sign indicates that the shear traction points opposite to the tangent $\mathbf m$. Even uniaxial loading therefore produces shear on inclined faces.
:::

## Mohr's circle and principal directions

::::teorema{#mohr titolo="Mohr's circle and principal stresses"}
In the $(\sigma_n,\tau_{nt})$ plane, the point representing the face traces a circle of center $(p,0)$ and radius $R=\sqrt{d^2+\tau_{xy}^2}$. Its horizontal intercepts are the **in-plane principal stresses**
$$
\sigma_1=p+R,\qquad \sigma_2=p-R.
$$
If $R>0$, the normal direction associated with $\sigma_1$ follows from $\cos 2\theta_1=\dfrac dR$ and $\sin 2\theta_1=\dfrac{\tau_{xy}}R$. Together these determine the quadrant of the double angle. The other principal normal is perpendicular to the first. When $R=0$, every in-plane normal is principal and the shear traction vanishes for every $\theta$.

::grafico{curve="50+25*cos(t),25*sin(t),0,6.283185307" xmin=-10 xmax=90 ymin=-35 ymax=35 uguale=1 nomi="σ,τ" punti="50,0,pieno,C;65,20,pieno,X;35,-20,pieno,Y;75,0,pieno,σ₁;25,0,pieno,σ₂" segmenti="50,0,65,20;35,-20,50,0" legenda="(\sigma_n-50)^2+\tau_{nt}^2=25^2" titolo="Mohr's circle for 65 MPa, 35 MPa, and 20 MPa"}

:::dimostrazione
Subtract $p$ from the normal stress. The pair $(\sigma_n-p,\tau_{nt})$ is then obtained by rotating $(d,\tau_{xy})$ through $-2\theta$, so its squared norm is $d^2+\tau_{xy}^2$. To reach the larger principal stress, set the pair equal to $(R,0)$. The normal component is $p+R$ and the shear component vanishes. The smaller principal stress similarly gives $(-R,0)$.
:::

The principal normals are also eigenvectors of the tensor. Indeed, in the plane problem $\tau_{nt}=0$ implies $\boldsymbol{\sigma}\mathbf n=\sigma_n\mathbf n$.
::::

:::osservazione{titolo="Maximum in-plane and three-dimensional shear stresses"}
The maximum shear stress magnitude in the $xy$ plane is $R$, because the largest absolute ordinate on the circle is $R$. The three-dimensional maximum uses the largest and smallest of the three principal stresses. For plane stress, include the zero principal stress associated with the out-of-plane normal.

::grafico{curve="50+25*cos(t),25*sin(t),0,6.283185307;37.5+37.5*cos(t),37.5*sin(t),0,6.283185307" xmin=-10 xmax=90 ymin=-50 ymax=50 uguale=1 nomi="σ,τ" punti="0,0,pieno;25,0,pieno;75,0,pieno" legenda="\text{planes between the axes }1,2;\text{planes between the axes }1,3" titolo="For this plane stress state, the three-dimensional maximum shear stress exceeds the in-plane maximum"}

If the in-plane principal stresses are $75\,\mathrm{MPa}$ and $25\,\mathrm{MPa}$, the maximum in-plane shear stress is $25\,\mathrm{MPa}$. In three dimensions the extremes are $75\,\mathrm{MPa}$ and zero, so the maximum shear stress is $37.5\,\mathrm{MPa}$. It acts on faces whose normals bisect the angle between the principal directions corresponding to those extremes. This distinction matters when a failure criterion considers all directions.
:::

:::osservazione{titolo="Invariants under rotation"}
The sum of the normal stresses on two perpendicular faces is the trace of the in-plane matrix. In a rotated basis, the normals of the two faces are $\mathbf n$ and $\mathbf m$. Inserting $\theta$ and $\theta+90^\circ$ in the transformation formula cancels the sine and cosine terms, leaving $\sigma_x+\sigma_y=2p$. The determinant $\sigma_x\sigma_y-\tau_{xy}^2$ is also invariant and equals $\sigma_1\sigma_2$. For example, with $\sigma_x=65\,\mathrm{MPa}$, $\sigma_y=35\,\mathrm{MPa}$, and $\tau_{xy}=20\,\mathrm{MPa}$, the trace is $100\,\mathrm{MPa}$ and the determinant is $1\,875\,\mathrm{MPa^2}$. The principal stress pair $(75,25)\,\mathrm{MPa}$ satisfies both checks.
:::

## Linear elasticity and plane stress

:::definizione{#hooke-tridimensionale titolo="Three-dimensional Hooke's law"}
For a homogeneous, isotropic, linear elastic material, **Young's modulus** $E$ relates axial stress and strain in a uniaxial test. Poisson's ratio $\nu$ is the negative of the transverse-to-longitudinal strain ratio in the same test. The shear modulus is $G=\dfrac{E}{2(1+\nu)}$. A stable elastic response requires $E>0$ and $-1<\nu<\dfrac12$. Superposition of the normal contributions and the shear law give, in the $x$ direction,
$$
\varepsilon_x=\frac{\sigma_x-\nu(\sigma_y+\sigma_z)}{E},
\qquad
\gamma_{xy}=\frac{\tau_{xy}}{G}.
$$
The relations for $y,z$ follow by permuting the indices. In a uniaxial tensile test with $\nu>0$, the transverse strain is negative, so the specimen contracts laterally. Superposition applies as long as the response is linear and strains are small.

::struttura{poligoni="-2,-0.8 2,-0.8 2,0.8 -2,0.8" tratteggi="-2.4,-0.5 2.4,-0.5 2.4,0.5 -2.4,0.5 -2.4,-0.5" frecce="2.45,0,3.1,0,σ_x;-2.45,0,-3.1,0;0,0.8,0,0.52;0,-0.8,0,-0.52" titolo="Axial elongation and lateral contraction of a tensile specimen"}
:::

::::teorema{#hooke-tensione-piana titolo="Hooke's law for plane stress"}
If $\sigma_z=\tau_{xz}=\tau_{yz}=0$ and the material is isotropic and linearly elastic, then
$$
\begin{aligned}
\varepsilon_x&=\frac{\sigma_x-\nu\sigma_y}{E},\\[6pt]
\varepsilon_y&=\frac{\sigma_y-\nu\sigma_x}{E},\\[6pt]
\gamma_{xy}&=\frac{\tau_{xy}}{G},\\[6pt]
\varepsilon_z&=-\frac{\nu(\sigma_x+\sigma_y)}{E}.
\end{aligned}
$$
Traction-free faces allow the thickness to change. The in-plane stresses follow from the in-plane strains by solving the two coupled normal strain equations.

:::dimostrazione
For the direct relation, set $\sigma_z$ to zero in the three normal strain equations of Hooke's law. To invert the relation, add the second equation multiplied by $\nu$ to the first. The term containing $\sigma_y$ cancels, so $\sigma_x=\dfrac{E}{1-\nu^2}(\varepsilon_x+\nu\varepsilon_y)$. Interchanging $x$ and $y$ gives $\sigma_y=\dfrac{E}{1-\nu^2}(\varepsilon_y+\nu\varepsilon_x)$.
:::
::::

:::esempio{titolo="A sheet in biaxial tension"}
With $E=200\,000\,\mathrm{MPa}$, $\nu=0.25$, $\sigma_x=120\,\mathrm{MPa}$, and $\sigma_y=60\,\mathrm{MPa}$, the strain along $x$ is $\dfrac{120-0.25\cdot60}{200\,000}=525\cdot10^{-6}$. Along $y$ it is $150\cdot10^{-6}$. Since the two in-plane normal stresses are tensile, the thickness decreases and $\varepsilon_z=-225\cdot10^{-6}$. The number $525$ is expressed in microstrain. One microstrain corresponds to a dimensionless strain of $10^{-6}$.
:::

:::osservazione{titolo="Volumetric strain and elastic energy"}
Adding the three normal strain equations of Hooke's law gives $\operatorname{tr}\boldsymbol{\varepsilon}=\dfrac{1-2\nu}{E}\operatorname{tr}\boldsymbol{\sigma}$. Under a uniform pressure of magnitude $p_{\mathrm h}$ the three normal stresses equal $-p_{\mathrm h}$. The relative volume change is therefore $-\dfrac{p_{\mathrm h}}K$, where $K=\dfrac{E}{3(1-2\nu)}$ is the bulk modulus. For linear elastic loading from an initially unloaded state, the stored energy density is $w=\dfrac12\boldsymbol{\sigma}:\boldsymbol{\varepsilon}$. Double contraction denotes the sum of the products of corresponding components. For the pair of shear components $xy$ the contribution to the contraction is $2\tau_{xy}\varepsilon_{xy}=\tau_{xy}\gamma_{xy}$. Uniform pressure gives $w=\dfrac{p_{\mathrm h}^2}{2K}$. The chapter on energy methods uses these expressions to integrate the density over the volume of the structure.
:::

## Plane strain

::::teorema{#hooke-deformazione-piana titolo="Hooke's law for plane strain"}
If $\varepsilon_z=\gamma_{xz}=\gamma_{yz}=0$ and the material is isotropic and linearly elastic, then
$$
\sigma_z=\nu(\sigma_x+\sigma_y),\qquad
\varepsilon_x=\frac{(1-\nu^2)\sigma_x-\nu(1+\nu)\sigma_y}{E}.
$$
The relation along $y$ follows by interchanging the indices. This model can represent the interior of a long prismatic body with geometry and loading uniform along $z$ and restraints preventing out-of-plane normal strain. The stress $\sigma_z$ is the local reaction to the restrained extension or contraction.

::struttura{poligoni="0,0 2.8,0 2.8,1.8 0,1.8" linee="2.8,0 3.6,0.65 3.6,2.45 0.8,2.45 0,1.8;2.8,1.8 3.6,2.45" frecce="2.8,1.8,4.1,2.86,z" etichette="1.25,0.95,ε_z = 0" titolo="Adjacent elements of a solid restrained against strain along z"}

:::dimostrazione
In Hooke's law for $\varepsilon_z$, the numerator contains $\sigma_z-\nu(\sigma_x+\sigma_y)$. Since $\varepsilon_z=0$, that numerator vanishes. Substituting the resulting value of $\sigma_z$ into the equation for $\varepsilon_x$ gives the two coefficients shown. If the strains are known, the inverse three-dimensional relation is $\boldsymbol{\sigma}=2G\boldsymbol{\varepsilon}+\lambda\operatorname{tr}(\boldsymbol{\varepsilon})\mathbf I$, where $\mathbf I$ is the identity tensor and $\lambda=\dfrac{E\nu}{(1+\nu)(1-2\nu)}$. For $\varepsilon_z=0$ the volumetric term gives $\sigma_z=\lambda(\varepsilon_x+\varepsilon_y)$.
:::
::::

:::attenzione{titolo="The out-of-plane condition changes the result"}
Suppose that $\sigma_x=100\,\mathrm{MPa}$, $\sigma_y=0$, $E=200\,000\,\mathrm{MPa}$, and $\nu=0.25$. Under plane stress, $\varepsilon_x=500\cdot10^{-6}$ and the thickness contracts. Under plane strain, $\sigma_z=25\,\mathrm{MPa}$ and $\varepsilon_x=468.75\cdot10^{-6}$. The same in-plane stresses give different strains because the restraint along $z$ differs.
:::

## Principal strains and the strain-gauge rosette

:::definizione{#deformazioni-principali titolo="Normal strain in a given direction"}
For a unit vector $\mathbf n=(\cos\theta,\sin\theta)$ in the plane, the normal strain is $\varepsilon_n=\mathbf n^{\mathsf T}\boldsymbol{\varepsilon}\mathbf n$. Expanding the product gives
$$
\varepsilon_n=
\frac{\varepsilon_x+\varepsilon_y}{2}
+\frac{\varepsilon_x-\varepsilon_y}{2}\cos2\theta
+\frac{\gamma_{xy}}{2}\sin2\theta.
$$
The in-plane principal strains can therefore be found using Mohr's circle for the strain tensor. Its shear coordinate is half the engineering shear strain. The principal strains are the extreme values of the relative change in length as the segment direction varies.
:::

::::teorema{#rosetta titolo="Rectangular rosette at 0°, 45°, and 90°"}
A strain gauge measures normal strain in the direction of its grid. Let $\varepsilon_0$, $\varepsilon_{45}$, and $\varepsilon_{90}$ be readings from three grids oriented at $0^\circ$, $45^\circ$, and $90^\circ$ counterclockwise from $x$, at the same point in a locally uniform strain field. Then
$$
\varepsilon_x=\varepsilon_0,\qquad
\varepsilon_y=\varepsilon_{90},\qquad
\gamma_{xy}=2\varepsilon_{45}-\varepsilon_0-\varepsilon_{90}.
$$

::struttura{poligoni="-0.2,-0.2 3.2,-0.2 3.2,2.8 -0.2,2.8" frecce="0,0,2.6,0,0°;0,0,1.75,1.75,45°;0,0,0,2.35,90°" titolo="Grid orientations in a rectangular strain-gauge rosette"}

:::dimostrazione
The strain measured at $0^\circ$ is $\varepsilon_x$, while the strain at $90^\circ$ is $\varepsilon_y$. At $45^\circ$ the cosine of twice the angle vanishes and the sine equals one, so $\varepsilon_{45}=\dfrac{\varepsilon_x+\varepsilon_y+\gamma_{xy}}2$. Solving for $\gamma_{xy}$ gives the third relation.
:::
::::

:::esempio{titolo="From three gauge readings to shear stress"}
For readings $420\cdot10^{-6}$, $300\cdot10^{-6}$, and $-180\cdot10^{-6}$ taken in order of increasing angle, the result is $\gamma_{xy}=(600-420+180)\cdot10^{-6}=360\cdot10^{-6}$. If the material is isotropic and linearly elastic, with $G=80\,000\,\mathrm{MPa}$, the shear stress is $G\gamma_{xy}=28.8\,\mathrm{MPa}$. Determining the normal stresses also requires the out-of-plane condition. A single surface gauge measures the relative length change along its own direction and leaves the complete field undetermined.
:::

:::attenzione{titolo="Grid orientation and the sign of shear strain"}
If the inclined grid makes an angle of $-45^\circ$ rather than $+45^\circ$, the sine of twice that angle is $-1$. Its reading is therefore $\varepsilon_{-45}=\dfrac{\varepsilon_x+\varepsilon_y-\gamma_{xy}}2$. For $\varepsilon_x=200\cdot10^{-6}$, $\varepsilon_y=0$, and $\gamma_{xy}=100\cdot10^{-6}$, the readings at $+45^\circ$ and $-45^\circ$ are $150\cdot10^{-6}$ and $50\cdot10^{-6}$, respectively. The physical orientation of the grid determines which relation applies. If a different angular convention is used for measurement, express the angles in the same frame as the tensor.
:::

## From stresses to a strength check

:::richiamo{#von-mises titolo="Von Mises criterion"}
For a ductile material obeying the von Mises criterion, the onset of yielding is assessed by comparing an equivalent stress with the yield strength from a uniaxial tensile test. In plane stress the equivalent stress is
$$
\sigma_{\mathrm{eq}}=\sqrt{\sigma_x^2-\sigma_x\sigma_y+\sigma_y^2+3\tau_{xy}^2}.
$$
In pure shear with $|\tau_{xy}|=40\,\mathrm{MPa}$, this gives $\sigma_{\mathrm{eq}}=40\sqrt3\,\mathrm{MPa}$. The chapter on [failure criteria](/en/scienza-delle-costruzioni/criteri-resistenza/teoria) develops the three-dimensional formula and compares it with Tresca's criterion and the criteria for brittle materials.
:::

:::osservazione{titolo="One sheet, three different questions"}
Given the tractions, use the local equilibrium equations and boundary conditions to check whether a field is in equilibrium. To find the stresses on an inclined face, apply the tensor to the face normal and resolve the resulting traction. Starting from strain measurements, first reconstruct the strain tensor and then use the constitutive law with the appropriate out-of-plane conditions. All three operations occur in beam stress analysis, where the internal force and moment resultants, the local cross-sectional stresses, and the material's elastic response have distinct roles.
:::

:::esempio{titolo="Traction on a cross section and on a weld"}
Consider a sheet with $\sigma_x=60\,\mathrm{MPa}$ and all other stress components zero. A cut perpendicular to $x$ has normal stress $60\,\mathrm{MPa}$ and zero shear stress. A weld inclined at $45^\circ$ to $x$ has a normal making an angle of $-45^\circ$ with the same axis. With the positive tangent defined in this chapter, both projections equal $30\,\mathrm{MPa}$. The material stress tensor is the same in both calculations. What changes is the surface on which it determines the traction. To check the weld, use both projections on the inclined face as the surface loading. The chapter on failure criteria instead assesses the material using the tensor components and principal stresses.
:::
