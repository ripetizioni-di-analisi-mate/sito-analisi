---
titolo: "Flat plates and plate bending"
sommario: "The plate midplane provides the reference for distinguishing membrane action from bending and for calculating displacements, moments, and shear forces with the Kirchhoff–Love model."
---

## The midplane and membrane action

:::definizione{#piano-medio titolo="Midplane and thickness"}
A flat plate has two in-plane dimensions, denoted by $a$ and $b$, and a thickness $h$. The coordinates $x$ and $y$ locate points in the midplane, and $z$ is measured from that plane. For a horizontal plate, take $z$ as positive downward. The two faces are therefore at $-\dfrac h2$ and $\dfrac h2$. The midplane provides a common reference surface for the internal forces transmitted by all fibers of a cross section.

::struttura{poligoni="0,0 6,0 6,3.6 0,3.6" frecce="0,0,2.1,0,x;0,0,0,1.8,y" quote="0 0,6 0,a;6 3.6,6 0,b" riferimento=0 titolo="Plan view of the midplane with dimensions a and b"}

::struttura{poligoni="0,-0.55 6,-0.55 6,0.55 0,0.55" tratteggi="0,0 6,0" quote="6 -0.55,6 0.55,h" frecce="0,0,2.4,0,x;0,0,0,-1.25,z" riferimento=0 titolo="Section along x with the midplane dashed and z positive downward"}
:::

:::definizione{#risultanti-membranali titolo="Membrane force resultants"}
When the loads act in the midplane, a two-dimensional description can be based on the **membrane force resultants**. Let $N_x$ and $N_y$ denote the normal resultants and $N_{xy}$ the shear resultant per unit length of cut. For example, $\sigma_x$ is the normal stress in the $x$ direction, and $\tau_{xy}$ is the shear stress on the faces normal to $x$ and $y$. The resultants are obtained by integrating through the thickness.
$$
N_x=\int_{-\frac{h}{2}}^{\frac{h}{2}}\sigma_x\,\mathrm dz,
\qquad
N_{xy}=\int_{-\frac{h}{2}}^{\frac{h}{2}}\tau_{xy}\,\mathrm dz.
$$
The corresponding integral of $\sigma_y$ gives $N_y$. The units are force per unit length. A constant stress of $25\,\mathrm{MPa}$ in a plate of thickness $8\,\mathrm{mm}$ gives $N_x=200\,\mathrm{N/mm}$, or $200\,\mathrm{kN/m}$. A cut half a meter long therefore transmits a total normal force of $100\,\mathrm{kN}$ if the stress remains constant along the cut.

::struttura{poligoni="0,0 6,0 6,3.4 0,3.4" frecce="0,0,2,0,x;0,0,0,1.7,y;0,1.7,-1.1,1.7,N_x;6,1.7,7.1,1.7,N_x" riferimento=0 titolo="In-plane tension with a normal force resultant per unit length"}
:::

:::osservazione{titolo="Membrane forces and bending moments"}
A normal stress uniform through the thickness produces a membrane force. Its moment about the midplane vanishes because the integrand $z\sigma_x$ is odd in $z$. A stress distribution proportional to $z$ has zero resultant because $\sigma_x$ is odd. It does, however, produce a moment because $z\sigma_x$ is proportional to $z^2$. For a homogeneous, linearly elastic material with thickness symmetric about the midplane, the two distributions can be superimposed. The first represents the in-plane response and the second the bending response.
:::

:::osservazione{titolo="In-plane equilibrium of a plate"}
In a plate subjected only to in-plane loading, a rectangular element transmits both normal and tangential forces along its edges. Let $f_x$ and $f_y$ denote the applied forces in directions $x$ and $y$ per unit area of the midplane. Force equilibrium in each direction gives
$$
\begin{aligned}
\partial_xN_x+\partial_yN_{xy}+f_x&=0,\\[6pt]
\partial_xN_{xy}+\partial_yN_y+f_y&=0.
\end{aligned}
$$
The first equation includes the variation of $N_{xy}$ in direction $y$ because a section normal to $y$ can transmit a force along $x$. If the panel is in uniform tension, $N_x$ is constant and the other resultants may be zero. Without distributed forces the derivatives vanish, satisfying local equilibrium. The prescribed forces must still be imposed along the loaded edges. On edges parallel to $x$, the resultant $N_x$ acting alone produces no normal traction. This stress field can therefore represent a panel with free longitudinal edges. Midplane equilibrium alone does not determine strain. The strains follow from the elastic constitutive law together with the constraints on in-plane displacement.
:::

:::esempio{titolo="Underside of a concrete bridge deck"}
The underside view shows a surface extending in two in-plane directions. If both directions take part in bending, the plate model uses a transverse displacement that depends on two coordinates. The support arrangement determines the boundary conditions.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/sottoponte-tolosa.webp" alt="Underside of the Pont Saint-Pierre in Toulouse, showing the lower surface of the deck" width="1280" height="988" loading="lazy" decoding="async"><figcaption>Underside of a concrete bridge deck. Resized photograph by <a href="https://commons.wikimedia.org/wiki/File:Pont-Saint-Pierre_-_Toulouse_-Sous-face_du_tablier_en_b%C3%A9ton.jpg">Archaeodontosaurus</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</figcaption></figure>
:::

## Kirchhoff–Love assumptions

:::definizione{#kirchhoff-love titolo="Thin-plate kinematics"}
The **Kirchhoff–Love** theory describes the bending of a thin plate at small slopes. Lines initially normal to the midplane remain straight and normal to the deformed midsurface. The transverse displacement $w(x,y)$ is positive downward and is assumed constant along each of these lines. Let $u_0(x,y)$ and $v_0(x,y)$ denote the displacements of the midplane in directions $x$ and $y$. The linearized model gives
$$
u(x,y,z)=u_0(x,y)-z\,w_{,x}(x,y),
\qquad
v(x,y,z)=v_0(x,y)-z\,w_{,y}(x,y).
$$
The notation $w_{,x}$ denotes differentiation with respect to $x$. At a distance $z$ from the midplane, rotation of the normal therefore produces an in-plane displacement proportional to that distance. A portion of plate with constant slope rotates without developing bending strain. Where the slope varies from point to point, some fibers lengthen and others shorten.

::struttura{tratteggi="1.5,-0.4 1.5,0.4;4.5,-0.4 4.5,0.4" frecce="0,0,2,0,x;0,0,0,-1.2,z" linee="0,0 6,0;0,-0.7 1,-0.76 2,-0.93 3,-1.05 4,-0.93 5,-0.76 6,-0.7;1.42,-1.29 1.58,-0.39;4.58,-1.29 4.42,-0.39" etichette="3,0.15,midplane;3,-1.45,deflected surface" riferimento=0 titolo="Normals to the midsurface before and after rotation at a section"}
:::

:::osservazione{titolo="Strain proportional to distance from the midplane"}
Consider bending alone, with $u_0=v_0=0$. The normal strain in the $x$ direction is $\varepsilon_x=\partial_x u=-z\,w_{,xx}$. Similarly, $\varepsilon_y=-z\,w_{,yy}$. The in-plane engineering shear strain is the sum of two derivatives and therefore equals $\gamma_{xy}=\partial_y u+\partial_x v=-2z\,w_{,xy}$. The mixed derivative measures the change in the slope along $x$ as the point of observation moves in direction $y$. It therefore appears twice in the engineering shear strain, once from each direction.

The assumption on the normals implies zero transverse shear strain in the adopted kinematics. The transverse shear resultants $Q_x$ and $Q_y$ can nevertheless be found from moment equilibrium. The model neglects their contribution to deflection. A relatively thick plate, or a region very close to a concentrated load, may require a model that includes transverse shear deformation.
:::

## Plate stiffness and moment resultants

::::teorema{#rigidezza-flessionale titolo="Flexural rigidity of an isotropic plate"}
Consider a homogeneous, isotropic, linearly elastic plate of constant thickness. Let $E$ be Young’s modulus and $\nu$ Poisson’s ratio. Under the plane-stress constitutive law, the **flexural rigidity** is
$$
D=\frac{Eh^3}{12(1-\nu^2)}.
$$
Since $E$ is measured in pascals and $h^3$ in cubic meters, $D$ is measured in newton-meters. For the same material, doubling $h$ multiplies $D$ by eight. A conversion error in the thickness is therefore cubed in the calculation.

:::dimostrazione
Under plane stress, $\sigma_x=\dfrac{E}{1-\nu^2}(\varepsilon_x+\nu\varepsilon_y)$. Substitution of the pure bending strains gives a stress that varies linearly with $z$. To obtain the moment of the stress about the midplane, multiply by $z$ and integrate.
$$
\begin{aligned}
\int_{-\frac{h}{2}}^{\frac{h}{2}} z\sigma_x\,\mathrm dz
&=-\frac{E}{1-\nu^2}
   \bigl(w_{,xx}+\nu w_{,yy}\bigr)
   \int_{-\frac{h}{2}}^{\frac{h}{2}}z^2\,\mathrm dz\\[6pt]
&=-\frac{Eh^3}{12(1-\nu^2)}
   \bigl(w_{,xx}+\nu w_{,yy}\bigr).
\end{aligned}
$$
The common factor multiplying the curvatures is $D$. The term in $\nu w_{,yy}$ remains because normal strain in direction $y$ also contributes to stress in direction $x$.
:::
::::

:::definizione{#momenti-piastra titolo="Moments per unit length"}
Let $M_x$ and $M_y$ denote the moments obtained by integrating $z\sigma_x$ and $z\sigma_y$ through the thickness. Let $M_{xy}$ denote the moment obtained by integrating $z\tau_{xy}$. With $z$ positive downward, the moment–curvature law is
$$
\begin{aligned}
M_x&=-D(w_{,xx}+\nu w_{,yy}),\\[6pt]
M_y&=-D(w_{,yy}+\nu w_{,xx}),\\[6pt]
M_{xy}&=-D(1-\nu)w_{,xy}.
\end{aligned}
$$
The third relation uses shear modulus $G=\dfrac{E}{2(1+\nu)}$ and engineering shear strain $-2z\,w_{,xy}$. Multiplication by $G$ absorbs the factor of two. Plate moment resultants are measured in newtons, or newton-meters per meter of edge. If a cut of length $2\,\mathrm{m}$ carries a uniform $M_x=6\,\mathrm{kN}$, the total moment transmitted across it is $12\,\mathrm{kN\,m}$.

::struttura{poligoni="0,0 6,0 6,3.4 0,3.4" tratteggi="3,0 3,3.4" frecce="0,0,1.8,0,x;0,0,0,1.6,y;3,1.7,4.2,1.7,n" etichette="3,3.75,cut normal to x" riferimento=0 titolo="Cut through the midplane normal to x, on which M_x and M_xy are defined"}
:::

:::esempio{titolo="Bending moment in a direction of zero curvature"}
A plate constrained to bend cylindrically satisfies $w_{,yy}=w_{,xy}=0$. If $w_{,xx}=-0.003\,\mathrm{m^{-1}}$, $D=5\,\mathrm{MN\,m}$, and $\nu=0.2$ at the point considered, then $M_x=15\,\mathrm{kN}$. In addition, $M_y=\nu M_x=3\,\mathrm{kN}$. The second moment is the constitutive response needed to maintain zero curvature along $y$. If the longitudinal edge were free, this cylindrical bending field might be incompatible with the zero moment required at that edge.
:::

:::esempio{titolo="Bending with transverse curvature of the opposite sign"}
Suppose the plate is free to curve along $y$ and the moment $M_y$ vanishes over a region. If the bending moment in the $x$ direction produces a curvature $w_{,xx}=-0.004\,\mathrm{m^{-1}}$ and $\nu=\dfrac14$, then condition $M_y=0$ implies $w_{,yy}=-\nu w_{,xx}=0.001\,\mathrm{m^{-1}}$. The two curvatures have opposite signs. For $D=6\,\mathrm{MN\,m}$, this gives $M_x=22.5\,\mathrm{kN}$. If transverse curvature were restrained at the same point, the result would be $M_x=24\,\mathrm{kN}$ and a moment $M_y=6\,\mathrm{kN}$ would develop. The two values correspond to different kinematic conditions. Cylindrical bending is therefore a modeling assumption that must be consistent with the restraints.
:::

:::osservazione{titolo="Recovering stress at the outer fibers"}
In pure bending, if normal stress varies linearly through the thickness, write $\sigma_x(z)=k_x z$. The definition of the moment gives $k_x=\dfrac{12M_x}{h^3}$. At the face with positive through-thickness coordinate, the stress is therefore $\sigma_x(\dfrac h2)=\dfrac{6M_x}{h^2}$. At the opposite face it has the opposite sign. For $h=0.12\,\mathrm m$ and $M_x=12\,\mathrm{kN}$, the lower face is in tension with stress $\sigma_x=5\,\mathrm{MPa}$. If a uniform membrane resultant is also present along that cut, it adds $\dfrac{N_x}{h}$ to the stress at each face. A mean tensile stress can then reduce the compression at the upper face or place that face in tension. This distinguishes the contribution of the mean stress from that of the through-thickness stress gradient.
:::

## Transverse equilibrium and shear forces

::::teorema{#tagli-equilibrio titolo="Moment and force equilibrium"}
Let $q(x,y)$ be the transverse load per unit area, positive downward. Let $Q_x$ and $Q_y$ be the shear resultants per unit length on sections normal to $x$ and $y$, respectively. In a region with differentiable fields and no distributed couples,
$$
\begin{aligned}
Q_x&=\partial_x M_x+\partial_y M_{xy},\\[6pt]
Q_y&=\partial_x M_{xy}+\partial_y M_y,\\[6pt]
\partial_x Q_x+\partial_y Q_y+q&=0.
\end{aligned}
$$
The shear in the $x$ direction therefore depends both on how $M_x$ varies in direction $x$ and on how the twisting moment $M_{xy}$ varies in direction $y$. In general, the slope of any one moment diagram accounts for only part of the equilibrium condition.

:::dimostrazione
Isolate an infinitesimal rectangle with sides $\mathrm dx$ and $\mathrm dy$. The difference between the moments transmitted on the faces normal to $x$, divided by the area, tends to $\partial_x M_x$. Variation of the twisting moments on the faces normal to $y$ gives the second contribution. Moment equilibrium gives the first shear expression, and taking moments in the orthogonal direction gives the second. Transverse force equilibrium adds the shear differences on the two pairs of faces to the force $q\,\mathrm dx\,\mathrm dy$. Dividing by the area and taking the limit gives the last equation.
:::
::::

:::teorema{#equazione-piastra titolo="The biharmonic plate equation"}
Let $D$ be constant and $w$ four times differentiable over the region considered. Substituting the moment–curvature relations into the equilibrium equation gives
$$
D\bigl(w_{,xxxx}+2w_{,xxyy}+w_{,yyyy}\bigr)=q.
$$
The two mixed-derivative terms arise when the contributions from $M_{xy}$ are added to the derivatives of the other moments. If $\Delta w=w_{,xx}+w_{,yy}$ denotes the Laplacian, the equation becomes $D\Delta^2 w=q$. This form shows that bending in the two directions is coupled even when the material has identical properties in all directions.

::struttura{poligoni="0,0 5,0 5,3.5 0,3.5" frecce="0,0,1.6,0,x;0,0,0,1.4,y;0,1.75,-0.95,1.75,n;5,1.75,5.95,1.75,n;2.5,0,2.5,-0.95,n;2.5,3.5,2.5,4.45,n" etichette="2.5,1.75,q" riferimento=0 titolo="Midplane element with outward normals on all four faces and transverse load q"}
:::

## Cylindrical bending

:::definizione{#flessione-cilindrica titolo="Reduction to a plate strip"}
If the geometry, loads, and restraints allow a deflection field independent of $y$, the model reduces to cylindrical bending and $w=w(x)$. Then $M_x=-D w''$, $M_y=-D\nu w''$, and $M_{xy}=0$. Equilibrium reduces to $D w''''=q(x)$. This has the same form as the beam equation, with the internal actions expressed per unit width of plate. This reduction applies when the response can be independent of $y$, for example in a strip very long in that direction, away from its transverse ends.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" carichi="A,B,0.65,0.65,q" riferimento=0 frecce="-0.45,-0.85,0.05,-0.85,x;-0.45,-0.85,-0.45,-1.25,z" quote="A,B,L" titolo="Cross section of a uniformly loaded, simply supported strip"}
:::

:::esempio{titolo="A simply supported strip under a uniform load"}
Let $L$ be the distance between two support lines and $q$ a uniform load. Equilibrium per unit width gives a reaction $\dfrac{qL}{2}$ along each line. At a cut at position $x$, the load between zero and $x$ has resultant $qx$ with moment arm $\dfrac x2$. It follows that
$$
M_x(x)=\frac{qLx}{2}-\frac{qx^2}{2}.
$$
Since $M_x=-Dw''$, integrate twice and impose $w(0)=w(L)=0$. The solution takes the form
$$
w(x)=\frac{q}{24D}\bigl(L^3x-2Lx^3+x^4\bigr).
$$
By symmetry, the slope is zero at midspan. At this section the moment is $\dfrac{qL^2}{8}$ and the deflection is $\dfrac{5qL^4}{384D}$. For the same load intensity, rigidity, and supports, the moment increases with the square of the span and the deflection with its fourth power.
:::

## Edge and corner conditions

:::definizione{#condizioni-bordo titolo="Clamped, simply supported, and free edges"}
Along a straight edge, $n$ is the outward normal direction and $t$ the tangent direction. Let $M_{nn}$ denote the bending moment normal to the edge, $M_{nt}$ the edge twisting moment, and $Q_n$ the transverse shear across the edge. The homogeneous Kirchhoff–Love boundary conditions take different forms.

- At a clamped edge, the deflection $w$ and the normal derivative $\partial_n w$ both vanish.
- At a simply supported edge, $w$ and $M_{nn}$ both vanish.
- Along a free edge with no applied loading, $M_{nn}$ and the **effective shear** $V_n=Q_n+\partial_t M_{nt}$ both vanish away from the corners.

The twisting moment is associated with the variation of $w$ along the edge. Integrating its work along the edge transfers a tangential derivative from the displacement field to the moment field. This produces the term $\partial_t M_{nt}$ in the effective shear force. A concentrated contribution also appears at the end of the edge. At a free corner the corner actions must therefore be evaluated with the orientations of both adjoining edges. A corner reaction can develop if a support is provided at that vertex.

::struttura{poligoni="0,0 5,0 5,3.4 0,3.4" tratteggi="5,0 5,3.4" frecce="0,0,1.7,0,x;0,0,0,1.6,y;5,1.3,6,1.3,n;5,1.3,5,2.7,t" riferimento=0 titolo="Outward normal and tangent along a straight edge"}
:::

:::esempio{titolo="Effective shear along the edge x = a"}
On the right edge of a rectangular plate, take $\boldsymbol n$ along $+x$ and $\boldsymbol t$ along $+y$. Then $Q_n=Q_x$ and $M_{nt}=M_{xy}$. If $Q_x=-5\,\mathrm{kN/m}$ and $\partial_y M_{xy}=2\,\mathrm{kN/m}$, the effective shear is $-3\,\mathrm{kN/m}$. This value may represent a prescribed load, whereas a load-free edge requires the sum to vanish. Checking only $Q_x$ would omit the twisting-moment contribution.
:::

:::esempio{titolo="Checking edge conditions from a deflected shape"}
Consider the deflection field $w(x,y)=A x^2$ near $x=0$, with $A$ constant and nonzero. At the edge, $w=0$ and $\partial_n w=0$ because $\partial_x w=2Ax$ and the outward normal on the left points along $-x$. The field therefore satisfies the kinematic conditions for a clamped edge on this segment. The normal bending moment, however, is $M_{nn}=-2DA$. For a simply supported edge with no applied couple, this same moment field would leave a nonzero residual. Checking only the deflection would fail to distinguish the two supports.
:::

## Rectangular plates and the Navier solution

::::teorema{#navier titolo="Response to a sinusoidal load"}
Consider a rectangular plate with sides $a$ and $b$, ideally simply supported along all four edges. Let $m$ and $n$ be positive integers, with $\alpha_m=\dfrac{m\pi}{a}$ and $\beta_n=\dfrac{n\pi}{b}$. For a load
$$
q(x,y)=q_{mn}\sin(\alpha_m x)\sin(\beta_n y)
$$
its linear elastic response has the same shape and amplitude
$$
W_{mn}=\frac{q_{mn}}{D(\alpha_m^2+\beta_n^2)^2}.
$$

::struttura{poligoni="0,0 5,0 5,3.4 0,3.4" tratteggi="-0.2,0 -0.2,3.4;5.2,0 5.2,3.4;0,-0.2 5,-0.2;0,3.6 5,3.6" quote="0 0,5 0,a;5 0,5 3.4,b" frecce="0,0,1.7,0,x;0,0,0,1.6,y" punti="2.5,1.7,C" riferimento=0 titolo="Rectangle simply supported along all edges, with center C"}

:::dimostrazione
The product of sines vanishes along all four edges. On an edge normal to $x$, both $w_{,xx}$ and $w_{,yy}$ are multiples of the same product, so $M_x$ also vanishes. Likewise, $M_y$ vanishes along the edges normal to $y$. The simple support conditions are therefore satisfied. Applying the Laplacian once introduces the factor $-(\alpha_m^2+\beta_n^2)$. Applying it again gives the square of this factor, with a positive sign. The equilibrium equation then gives $W_{mn}$.
:::
::::

:::esempio{titolo="First mode shape and center deflection"}
A square plate of side $2\,\mathrm m$ has $D=4\,\mathrm{MN\,m}$. For the first mode, $\alpha_1=\beta_1=\dfrac{\pi}{2}\,\mathrm{m^{-1}}$. If $q_{11}=\pi^4\,\mathrm{kN/m^2}$, both sine terms are one at the center, and $w_C=W_{11}=1\,\mathrm{mm}$. For $\nu=\dfrac14$, the curvatures at the center equal $-\alpha_1^2 W_{11}$. It follows that $M_x=M_y=1.25\pi^2\,\mathrm{kN}$. At the center $M_{xy}=0$ because the mixed derivative contains two cosine factors, both zero there.

::grafico{f="sin(pi*x/2)" xmin=0 xmax=2 ymin=-0.1 ymax=1.2 titolo="Normalized shape along the centerline, with ordinate $\dfrac{w}{W_{11}}$"}
:::

:::teorema{#coefficienti-navier titolo="Coefficients of the double Fourier sine series"}
For a load represented by a double Fourier sine series, orthogonality in each direction gives
$$
q_{mn}=\frac{4}{ab}\int_0^a\int_0^b
q(x,y)\sin(\alpha_m x)\sin(\beta_n y)\,\mathrm dy\,\mathrm dx.
$$
For a constant load $q$, each one-dimensional sine integral vanishes if its index is even. If both $m$ and $n$ are odd, it instead gives $q_{mn}=\dfrac{16q}{mn\pi^2}$. The coefficient $q_{11}$ differs from the uniform load intensity because it measures the component along a shape function that varies across the plate. The deflection field is reconstructed by adding the responses of the individual modes. The fourth-order dependence on frequency in the denominator suppresses the higher modes. Differentiating the series for moments or shear forces weakens that suppression, so more terms may be needed for those quantities than for deflection.
:::

:::esempio{titolo="Third-mode contribution under a uniform load"}
For a square plate under a uniform load, the coefficients $q_{31}$ and $q_{11}$ are in the ratio $\dfrac13$. The ratio of the sums of squared frequencies is $\dfrac{3^2+1^2}{1^2+1^2}=5$. The denominator of the modal response contains the square of that sum. The amplitude $W_{31}$ is therefore $\dfrac{1}{75}$ of the amplitude $W_{11}$. Its contribution to center deflection has the opposite sign because the third-index sine equals $-1$ at the center. For curvature in the $x$ direction, differentiation multiplies each amplitude by $\alpha_m^2$. The magnitude of the third mode’s contribution to this curvature is therefore $\dfrac{9}{75}$ of the first mode’s contribution. A term that barely affects deflection can have a larger effect on a quantity obtained by differentiation. The number of terms needed consequently depends on which quantity is being calculated.
:::

:::attenzione{titolo="Checking the assumptions for modal analysis"}
The sine basis satisfies the four simple support conditions, but the normal slope at an edge is generally nonzero. In particular, at $x=0$ the expression for $\partial_x w$ contains $\alpha_m\sin(\beta_n y)$ in every individual mode. The single-mode solution thus cannot represent a clamped edge at $x=0$. The assumptions must be rechecked if the material or thickness changes. If $D$ varies, moving it outside the derivatives in the equilibrium equation changes the equation itself.
:::


## Choosing a model and checking the results

:::osservazione{titolo="Thickness-to-span ratios"}
The thin-plate assumptions should be assessed over the length scale that governs the problem. A plate that is very long in one direction can have a transverse dimension much smaller than its overall length. For transverse bending, the relevant ratio is thickness to transverse dimension, since the slope changes over that distance. The radius of a loaded region can also be a smaller length scale than the span. A Kirchhoff–Love model may predict the global deflection reliably while stresses close to a highly localized load require a more detailed model. The choice therefore depends on the geometry, the load distribution, and the quantity sought.
:::

:::osservazione{titolo="Comparing linear bending and membrane response"}
Linear bending theory assumes small rotations and neglects terms quadratic in the slopes when evaluating midplane strains. For example, when a strip of initial length $\mathrm dx$ takes on a slope $\partial_x w$, its geometric elongation is of order $(\partial_x w)^2\mathrm dx$. If the edges restrain in-plane movement and deflection becomes comparable to the thickness, this effect can generate membrane tension that alters the bending response. Linear superposition of membrane and bending solutions assumes that this coupling is negligible. The assumptions must therefore be checked again if the thickness is reduced while the load remains fixed.
:::

:::osservazione{titolo="Checks on units and symmetry"}
To check a result, distinguish each quantity per unit length of edge from the corresponding total. A plate moment resultant has units of force, whereas the total moment across a cut of specified width has units of force times length. The shear resultant $Q_x$ has units of force per length because it is a spatial derivative of a moment resultant. The transverse load $q$ is specified per unit area, so it has the same units as a spatial derivative of $Q_x$. In a rectangular plate with loads and supports symmetric about both centerlines, the deflected shape has both symmetries. The slope normal to each centerline vanishes along that line. If the calculated center slope is nonzero under these assumptions, check the data, the location of the origin, and the modes retained in the series.
:::
