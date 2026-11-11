import { fraction as f, question as q, numericQuestion as num } from '../quiz.mjs';

const m = String.raw;
const family = (cases, make) => cases.map(values => make(...values));
const paired = [[2,3],[3,4],[4,5],[5,6]];
const integers = [[2],[3],[4],[5]];

const techniques = [
  ...family(paired, (a,b) =>
    num(m`Evaluate $\int_0^1 2x(${b}+x^2)^{${a}}\,dx$.`,
      f((b+1)**(a+1)-b**(a+1),a+1),
      [f((b+1)**(a+1),a+1),f((b+1)**(a+1)-b**(a+1),2*(a+1)),(b+1)**a-b**a],
      m`Use $u=${b}+x^2$, so $du=2x\,dx$. Integrate $u^{${a}}$ from $${b}$ to $${b+1}$ and subtract the value at the lower endpoint.`)),
  ...family(integers, a =>
    q(m`Which expression equals $\int_1^{${a}} x\ln x\,dx$?`,
      m`$${f(a*a,2)}\ln ${a}-${f(a*a-1,4)}$`,
      [m`$${a*a}\ln ${a}-${f(a*a-1,4)}$`,m`$${f(a*a,2)}\ln ${a}+${f(a*a-1,4)}$`,m`$${f(a*a,2)}\ln ${a}-${f(a*a,4)}$`],
      m`Parts gives $x^2\ln x/2-x^2/4$. The logarithmic term is zero at $1$, but the second term there is $-1/4$.`)),
  ...family(integers, b => {
    const s = b % 2 === 0 ? 1 : -1;
    return num(m`Find the coefficient of $\pi$ in $\int_0^\pi x^2\cos(${b}x)\,dx$.`,
      f(2*s,b*b),[f(-2*s,b*b),f(s,b*b),f(2*s,b)],
      m`Two applications of integration by parts leave the endpoint term $2x\cos(${b}x)/${b*b}$. The sine terms vanish at both endpoints.`);
  }),
  ...family([[1],[2],[3],[5]], a =>
    num(m`Evaluate $\int_0^{\pi/2} \sin^{${a}} x\cos^3x\,dx$.`,
      f(2,(a+1)*(a+3)),[f(1,a+1),f(1,(a+1)*(a+3)),f(-2,(a+1)*(a+3))],
      m`Save one cosine for $du$ with $u=\sin x$. Integrate $u^{${a}}(1-u^2)$ from zero to one. The result is $1/(${a+1})-1/(${a+3})$.`)),
  ...family(integers, a =>
    num(m`Find the coefficient of $\pi$ in $\int_0^{${a}\pi/2}\sin^2(2x)\,dx$.`,
      f(a,4),[f(a,2),f(a,8),0],
      m`The half-angle formula gives $(1-\cos 4x)/2$. The cosine term integrates to zero on the stated interval.`)),
  ...family([[1],[3],[4],[5]], a =>
    num(m`Evaluate $\int_0^{\pi/4}\tan^{${a}}x\sec^2x\,dx$.`,
      f(1,a+1),[f(1,a),f(1,a+2),1+a],
      m`Take $u=\tan x$. The new bounds are zero and one, so integrate $u^{${a}}$ to obtain $1/${a+1}$.`)),
  ...family([[2,'1','0',1,6],[4,m`2\sqrt 2`,'0',1,4],[6,m`3\sqrt 3`,'0',1,3],[8,'4','-4',1,3]], (a,b,lower,n,d) =>
    num(m`Find the coefficient of $\pi$ in $\int_{${lower}}^{${b}} dx/\sqrt{${a*a}-x^2}$.`,
      f(n,d),[f(n,2*d),f(2*n,d),f(-n,d)],
      m`Set $x=${a}\sin\theta$ with $\theta\in[-\pi/2,\pi/2]$. The integral becomes the difference of the endpoint angles on that branch.`)),
  ...family([[2,1,4],[3,1,4],[4,m`\sqrt 3`,3],[5,m`1/\sqrt3`,6]], (a,multiple,d) =>
    num(m`Find the coefficient of $\pi$ in $\int_0^{${a}( ${multiple} )} dx/(${a*a}+x^2)$.`,
      f(1,a*d),[f(1,d),f(1,a*a*d),f(-1,a*d)],
      m`An antiderivative is $\arctan(x/${a})/${a}$. The upper angle is $\pi/${d}$ and the lower angle is zero.`)),
  ...family([[1,3],[2,5],[3,7],[4,9]], (a,b) =>
    num(m`In $1/[(x+${a})(x+${b})]=A/(x+${a})+B/(x+${b})$, find $A$.`,
      f(1,b-a),[f(-1,b-a),f(1,b+a),f(1,b)],
      m`Clear denominators and substitute $x=-${a}$. This leaves $1=A(${b}-${a})$.`)),
  ...family([[1],[3],[4],[5]], a =>
    num(m`Write $\int_0^1 (2x+${a})/(1+x^2)\,dx$ as $\ln 2+k\pi$. Find $k$.`,
      f(a,4),[f(a,2),f(a,8),a],
      m`The $2x$ term gives the logarithm. The constant term integrates to $${a}\arctan x$, whose endpoint difference is $${a}\pi/4$.`)),
  ...family(integers, a =>
    num(m`Illinois MATH 231. Approximate $\int_0^{${a}} x^2\,dx$ with the trapezoidal rule using two equal subintervals.`,
      f(3*a**3,8),[f(a**3,3),f(a**3,8),f(5*a**3,16)],
      m`The panel width is $${a}/2$. Use half-weights at the endpoints and full weight at $x=${a}/2$.`)),
  ...family(integers, a =>
    num(m`Illinois MATH 231. Apply Simpson’s rule with two equal subintervals to $\int_0^{${a}} x^4\,dx$.`,
      f(5*a**5,24),[f(a**5,5),f(a**5,6),f(3*a**5,8)],
      m`With width $${a}/2$, use $h[f(0)+4f(${a}/2)+f(${a})]/3$. This differs from the exact integral because the integrand is quartic.`)),
  q("Which substitution simplifies $\\int x\\cos(1+x^2)\\,dx$ directly?", "$u=1+x^2$", ["$u=x^2\\cos x$", "$u=\\cos x$", "$u=1+x$"], "The differential is $du=2x\\,dx$, and the cosine becomes $\\cos u$."),
  q("In integration by parts for $\\int \\ln x\\,dx$ on $x>0$, which pair makes the remaining integrand after applying parts a constant?", "$u=\\ln x$, $dv=dx$", ["$u=x$, $dv=\\ln x\\,dx$", "$u=1/x$, $dv=\\ln x\\,dx$", "$u=\\ln x$, $dv=x\\,dx$"], "With $v=x$ and $du=dx/x$, the remaining product $v\\,du$ is $dx$."),
  q("Which antiderivative of $x\\sin x$ is correct?", "$-x\\cos x+\\sin x$", ["$x\\cos x-\\sin x$", "$-x\\cos x-\\sin x$", "$x\\sin x+\\cos x$"], "Take $u=x$ and $dv=\\sin x\\,dx$. Then $v=-\\cos x$ and the remaining integral adds $\\sin x$."),
  q("Which identity reduces $\\sin^4x$ to lower powers?", "$\\sin^4x=(1-\\cos 2x)^2/4$", ["$\\sin^4x=(1+\\cos 2x)^2/4$", "$\\sin^4x=(1-\\cos 4x)/2$", "$\\sin^4x=1-\\cos^4x$"], "Square the half-angle identity $\\sin^2 x=(1-\\cos2x)/2$."),
  q("For $x>3$, which substitution directly converts $\\sqrt{x^2-9}$ into a positive multiple of $\\tan\\theta$?", "$x=3\\sec\\theta$, $0<\\theta<\\pi/2$", ["$x=3\\sin\\theta$, $0<\\theta<\\pi/2$", "$x=3\\cos\\theta$, $0<\\theta<\\pi/2$", "$x=3\\tan\\theta$, $-\\pi/2<\\theta<\\pi/2$"], "The identity $\\sec^2\\theta-1=\\tan^2\\theta$ gives the desired radical on the stated positive branch."),
  q("What form must a partial-fraction decomposition use for $1/[(x-1)^2(x+3)]$?", "$A/(x-1)+B/(x-1)^2+C/(x+3)$", ["$A/(x-1)^2+C/(x+3)$", "$A/(x-1)+B/(x+3)^2$", "$A/(x-1)+B/(x+3)$"], "A factor with multiplicity two needs both powers. The factor $x+3$ contributes a first-power term."),
  q("Which is the general numerator over the irreducible factor $x^2+4$ in a real partial-fraction decomposition?", "$Ax+B$", ["$A$ only", "$Ax^2+B$", "$1/(Ax+B)$"], "The numerator degree must be below the factor degree. A general linear polynomial is needed for a quadratic."),
  q("Which step is required before decomposing $(x^3+1)/(x^2-1)$ into a polynomial and proper partial fractions?", "Polynomial division.", ["Take the square root of the denominator.", "Split the two numerator terms into separate improper integrals.", "Replace $x^2$ with $x$ in the denominator."], "The numerator degree exceeds the denominator degree, so divide to isolate the polynomial part."),
  q("Illinois MATH 231. Which choice of panel count is allowed for composite Simpson’s rule on a uniform grid?", "$n=6$", ["$n=3$", "$n=5$", "$n=7$"], "Simpson’s rule groups adjacent panels in pairs and therefore uses an even number of subintervals."),
  q("Illinois MATH 231. If $f$ is convex on the interval, how does the composite trapezoidal estimate compare with the integral?", "It is at least as large as the integral.", ["It is always strictly smaller than the integral.", "It must equal the midpoint estimate.", "It is always zero."], "On each panel the chord lies at or above the graph of a convex function. Sum the panel integrals."),
  q("Which substitution is efficient for $\\int \\tan^5x\\sec^3x\\,dx$ on an interval where the functions are defined?", "$u=\\sec x$, saving $\\sec x\\tan x\\,dx$", ["$u=\\tan x$, saving $\\sin x\\,dx$", "$u=\\sin x$, saving $\\tan x\\,dx$", "$u=x^2$, saving $\\sec^2x\\,dx$"], "The remaining factors are $\\tan^4x\\sec^2x$. Use $\\tan^2x=\\sec^2x-1$ to express them as a polynomial in $u$."),
  q("When applying the substitution $u=1+x^2$ to $\\int_2^3 x/(1+x^2)\\,dx$, what are the new bounds?", "$5$ to $10$", ["$2$ to $3$", "$4$ to $9$", "$1$ to $10$"], "Compute $u(2)=5$ and $u(3)=10$. The transformed integrand is $1/(2u)$."),
];

const improper = [
  ...family(paired, (a,b) =>
    num(m`Find the coefficient of $e^{-${a*b}}$ in $\int_{${b}}^\infty e^{-${a}x}\,dx$.`,
      f(1,a),[f(-1,a),a,f(1,a*a)],
      m`Use the primitive $-e^{-${a}x}/${a}$. Its limit is zero and the lower endpoint contributes $e^{-${a*b}}/${a}$.`)),
  ...family(paired, (a,p) =>
    num(m`Evaluate $\int_{${a}}^\infty x^{-${p}}\,dx$.`,
      f(1,(p-1)*a**(p-1)),[f(1,p*a**p),f(1,a**(p-1)),f(-1,(p-1)*a**(p-1))],
      m`The antiderivative is $-1/[${p-1}x^{${p-1}}]$. Its value at infinity tends to zero.`)),
  ...family(paired, (a,b) =>
    num(m`Evaluate $\int_0^{${b*b}} \dfrac{${a}}{\sqrt{x}}\,dx$.`,
      2*a*b,[a*b,b,2*a*b*b],
      m`The antiderivative $2\cdot${a}\sqrt{x}$ has a finite right limit of zero at the lower endpoint.`)),
  ...family(paired, (a,b) =>
    num(m`Evaluate $\int_{${a}}^{${a+b**3}} (${a+b**3}-x)^{-2/3}\,dx$.`,
      3*b,[b,3*b*b,b**3+1],
      m`Substitute $u=${a+b**3}-x$ and reverse the new bounds. The integral from zero to $${b**3}$ is $[3u^{1/3}]_0^{${b**3}}$.`)),
  ...family(paired, (a,b) =>
    num(m`Evaluate $\int_0^{${a*a+b*b}} dx/\sqrt{|x-${a*a}|}$.`,
      2*(a+b),[2*(b-a),2*b,a+b],
      m`Split at $${a*a}$. The left length is $${a*a}$ and the right length is $${b*b}$. The integrals are $2\cdot${a}$ and $2\cdot${b}$.`)),
  ...family(paired, (a,b) =>
    num(m`Evaluate $\int_{-\infty}^0 e^{${a}x}\,dx+\int_0^\infty e^{-${b}x}\,dx$.`,
      f(a+b,a*b),[f(1,a+b),f(b-a,a*b),a+b],
      m`The first exponential contributes $1/${a}$ and the second contributes $1/${b}$. Each limit is finite.`)),
  ...family(paired, (a,p) =>
    num(m`Evaluate $\int_{e^{${a}}}^\infty dx/[x(\ln x)^{${p}}]$.`,
      f(1,(p-1)*a**(p-1)),[f(1,p*a**p),f(1,a**(p-1)),f(-1,(p-1)*a)],
      m`The substitution $u=\ln x$ gives $\int_{${a}}^\infty u^{-${p}}\,du$. Integrate the resulting power.`)),
  ...family([[2,1,3],[3,3,5],[4,2,5],[5,4,8]], (a,p,r) =>
    num(m`Which exponent $s$ makes the ratio of $(${a}x^{${p}}+1)/(x^{${r}}+2)$ to $1/x^s$ tend to a finite positive constant as $x\to\infty$?`,
      r-p,[r+p,r-p+1,r+p+1],
      m`At large $x$ the leading numerator and denominator give power $${p}-${r}$ with coefficient $${a}$. The comparison needs the same power.`)),
  ...family(paired, (a,b) =>
    num(m`Find the smallest $B\ge1$ for which $\int_B^\infty ${a}/x^2\,dx\le 1/${10*b}$.`,
      10*a*b,[10*b,a*b,20*a*b],
      m`The omitted tail is $${a}/B$. Solve the positive inequality to find the smallest allowed cutoff.`)),
  ...family(paired, (a,b) =>
    q(m`Which expression equals $\int_{${a}}^\infty [1/x-1/(x+${b})]\,dx$?`,
      m`$\ln(${f(a+b,a)})$`,
      [m`$\ln(${f(a,a+b)})$`,m`$\ln(${a+b})$`,m`$\ln(${f(b,a)})$`],
      m`The combined primitive is $\ln[x/(x+${b})]$. It tends to zero as $x\to\infty$. Subtract its value at $${a}$.`)),
  ...family([['1/2',2,true,true],['3/2',1,false,true],['1/2',0,true,false],['1',0,false,false]], (p,r,near,far) => {
    const options = ['Converges at both ends.','Converges only at zero.','Converges only at infinity.','Diverges at both ends.'];
    const correct = near ? (far ? 0 : 1) : (far ? 2 : 3);
    return q(m`Classify $\int_0^\infty \dfrac{dx}{x^{${p}}(1+x)^{${r}}}$ by its behavior at the two endpoints.`,
      options[correct],options.filter((_,i)=>i!==correct),
      m`Near zero compare with $x^{-(${p})}$. Far out compare with $x^{-(${p}+${r})}$. The power test has different inequalities at the two ends.`);
  }),
  ...family(integers, a =>
    num(m`Evaluate $\int_0^1 \ln(x^{${a}})\,dx$.`,
      -a,[a,-1,f(-1,a)],
      m`On the positive interval the logarithm is $${a}\ln x$. The primitive $x\ln x-x$ tends to zero at zero and equals $-1$ at one.`)),
  q("Which improper integral converges at the lower endpoint?", "$\\int_0^1 x^{-3/4}\\,dx$", ["$\\int_0^1 x^{-1}\\,dx$", "$\\int_0^1 x^{-5/4}\\,dx$", "$\\int_0^1 x^{-2}\\,dx$"], "For $x^{-p}$ near zero, convergence requires $p<1$. Only $3/4$ meets this condition."),
  q("Which upper tail diverges?", "$\\int_1^\\infty dx/x$", ["$\\int_1^\\infty dx/x^{3/2}$", "$\\int_1^\\infty e^{-x}\\,dx$", "$\\int_1^\\infty dx/(1+x^2)$"], "The logarithmic primitive of $1/x$ grows without bound. The other three tails have finite integrals."),
  q("What does $\\int_{-1}^1 dx/x$ equal as an improper integral?", "It diverges.", ["It converges to zero.", "It converges to two.", "It converges to minus two."], "The integrals on the two sides of zero diverge separately. A symmetric cutoff cancels divergent quantities and does not define convergence."),
  q("Suppose $0\\le f(x)\\le g(x)$ eventually and $\\int g$ converges. What follows about the tail integral of $f$?", "It converges.", ["It diverges.", "Its value equals the integral of $g$.", "Its value must be zero."], "The positive partial integrals of $f$ are increasing and bounded above by those of the convergent comparison."),
  q("For positive functions, suppose $f(x)/g(x)\\to0$ and the tail integral of $g$ converges. What follows?", "The tail integral of $f$ converges.", ["It diverges.", "The two tails have equal integrals.", "The limit gives no convergence information here."], "Since the ratio tends to zero, eventually $f\\le g$. Direct comparison gives convergence."),
  q("Which limit defines $\\int_0^2 dx/\\sqrt{x}$?", "$\\lim_{a\\to0^+}\\int_a^2 dx/\\sqrt{x}$", ["$\\lim_{b\\to2^-}\\int_0^b dx/\\sqrt{x}$", "$\\lim_{a\\to0^-}\\int_a^2 dx/\\sqrt{x}$", "$\\lim_{b\\to\\infty}\\int_2^b dx/\\sqrt{x}$"], "The singular endpoint is zero, and the integrand is defined on its right. Start the proper integral at a positive cutoff."),
  q("Why does $\\int_1^\\infty \\sin x/x^2\\,dx$ converge absolutely?", "Its absolute integrand is bounded above by $1/x^2$.", ["The sine has a finite limit at infinity.", "Its absolute integrand is bounded below by $1/x$.", "Every signed oscillating integral converges absolutely."], "The absolute value of sine is at most one. The upper comparison has a finite tail integral."),
  q("Which tail is finite for every constant $k>0$?", "$\\int_0^\\infty e^{-kx}\\,dx$", ["$\\int_0^\\infty e^{kx}\\,dx$", "$\\int_0^\\infty dx/(x+1)$", "$\\int_0^\\infty dx$"], "The primitive for the decaying exponential has a finite limit of zero at infinity and gives the total $1/k$."),
  q("The limit-comparison ratio of two eventually positive functions is $4$. One has a divergent tail integral. What follows?", "Both tail integrals diverge.", ["The second tail integral converges.", "The ratio means both integrals equal four.", "Divergence cannot be transferred."], "A finite strictly positive ratio bounds each function by a positive constant multiple of the other far out."),
  q("The integral $\\int_0^\\infty e^{-x}\\,dx$ is cut off at $B$. Which expression gives the omitted tail?", "$e^{-B}$", ["$1-e^{-B}$", "$Be^{-B}$", "$e^B$"], "The tail is $\\int_B^\\infty e^{-x}\\,dx$. The endpoint value at infinity vanishes, leaving $e^{-B}$."),
  q("For which $p$ does $\\int_2^\\infty dx/[x(\\ln x)^p]$ converge?", "$p>1$", ["$p<1$", "$p\\ge1$", "Every real $p$"], "The substitution $u=\\ln x$ produces the power $u^{-p}$ on an infinite interval with a positive lower endpoint."),
  q("Can an improper integral converge even though the integrand is unbounded near a finite endpoint?", "Yes. The integral of $x^{-1/2}$ on $(0,1]$ is an example.", ["No. Boundedness at every endpoint is necessary.", "Only if there are two infinite endpoints.", "Only if positive and negative parts cancel."], "The primitive $2\\sqrt x$ has a finite limit at zero, so the first example converges."),
];

const applications = [
  ...family([[2,4],[3,5],[4,7],[5,8]], (a,b) =>
    num(m`Find the total geometric area between $y=x$ and $y=${a}$ on $[0,${b}]$.`,
      f(a*a+(b-a)**2,2),[f(Math.abs(a*a-(b-a)**2),2),f(b*b,2),f((b-a)**2,2)],
      m`The crossing is at $x=${a}$. Add the areas of two triangles with base and height $${a}$ and $${b-a}$, respectively.`)),
  ...family(integers, a =>
    num(m`Find the area enclosed by $x=${a*a}$ and $x=y^2$.`,
      f(4*a**3,3),[f(2*a**3,3),2*a**3,f(a**3,3)],
      m`The vertical range is $-${a}\le y\le${a}$. Integrate the horizontal width $${a*a}-y^2$ over that symmetric interval.`)),
  ...family(integers, a =>
    num(m`A base lies between $y=0$ and $y=${a}-x$ for $0\le x\le${a}$. Cross sections perpendicular to the $x$-axis are squares. Find the volume.`,
      f(a**3,3),[f(a*a,4),a**3,f(a**3,6)],
      m`The square side is $${a}-x$. Integrate $(${a}-x)^2$ across the base.`)),
  ...family(paired, (a,b) =>
    num(m`The region under $y=x$ on $[0,${a}]$ rotates about $y=-${b}$. Find the coefficient of $\pi$ in its volume.`,
      f(a**3+3*b*a*a,3),[f(a**3,3),f(a**3+3*b*a*a+3*b*b*a,3),f(a**3+6*b*a*a,3)],
      m`The outer and inner distances are $x+${b}$ and $${b}$. The difference of their squares is $x^2+${2*b}x$.`)),
  ...family(paired, (a,b) =>
    num(m`The region under $y=${a}x$ on $[0,${b}]$ rotates about the $y$-axis. Using shells, find the coefficient of $\pi$ in its volume.`,
      f(2*a*b**3,3),[f(a*b**3,3),f(a*b*b,2),f(2*a*b*b,3)],
      m`The radius is $x$ and the height is $${a}x$. Integrate the product $2\pi\cdot x\cdot${a}x$ from zero to $${b}$.`)),
  ...family(paired, (a,b) =>
    num(m`Find the coefficient of $\sqrt{${1+a*a}}$ in the arc length of $y=${a}x+1$ on $[0,${b}]$.`,
      b,[a,a*b,b+1],
      m`The derivative is the constant $${a}$, so the arc-length element is $\sqrt{${1+a*a}}\,dx$ over a length of $${b}$.`)),
  ...family(paired, (a,b) =>
    num(m`A horizontal segment at height $y=${a}$ runs from $x=1$ to $x=${1+b}$. Find the coefficient of $\pi$ in the area swept out by rotating it about the $x$-axis.`,
      2*a*b,[a*b,a*a*b+a,2*a*(b+1)],
      m`The segment sweeps the lateral surface of a cylinder. Multiply circumference $2\pi\cdot${a}$ by segment length $${b}$.`)),
  ...family(paired, (a,b) =>
    num(m`A spring obeys Hooke’s law and takes $${2*a}$ N to hold it $1$ m beyond equilibrium. Find the work in joules to extend it from $1$ m to $${b}$ m.`,
      a*(b*b-1),[a*b*b,2*a*(b-1),2*a*(b*b-1)],
      m`The force law is $F(x)=${2*a}x$. The work is the change of $${a}x^2$ between the two stretches.`)),
  ...family(paired, (a,b) =>
    num(m`A rope of length $${b}$ m and weight $${a}$ N/m hangs vertically. How much work in joules lifts it all to the point from which it hangs?`,
      f(a*b*b,2),[a*b,a*b*b,f(a*b,2)],
      m`A piece at distance $y$ below the top weighs $${a}\,dy$ and is lifted by $y$ meters. Integrate $${a}y$ from zero to $${b}$.`)),
  ...family(paired, (a,b) =>
    num(m`For the uniform lamina under $y=x^{${a}}$ on $[0,${b}]$, find $\bar x$.`,
      f(b*(a+1),a+2),[f(b,2),f(b*(a+2),a+1),f(b*(a+1),2*a+1)],
      m`The first moment about the $y$-axis is $\int_0^{${b}}x^{${a+1}}\,dx$. Divide by the area $\int_0^{${b}}x^{${a}}\,dx$.`)),
  ...family(paired, (a,b) =>
    num(m`A rectangular tank has horizontal cross-sectional area $${a}$ m² and fluid to depth $${b}$ m. The outlet is at the top. Enter the coefficient of its constant weight density in the work to empty it.`,
      f(a*b*b,2),[a*b*b,a*b,f(b*b,2)],
      m`The layer at height $y$ rises $${b}-y$ meters. Multiply that distance by the layer volume $${a}\,dy$ and integrate.`)),
  ...family([[2,3],[3,5],[4,6],[5,8]], (a,b) =>
    num(m`A region extends from $y=0$ to $y=${a}$ between vertical lines $x=0$ and $x=${b}$. Rotate it about $y=-1$. Find the coefficient of $\pi$ in the volume.`,
      b*((a+1)**2-1),[b*a*a,b*(a+1)**2,b*((a+1)**2+1)],
      m`All washers have outer radius $${a+1}$ and inner radius one. Multiply the washer area by the horizontal length $${b}$.`)),
  q("Which integrand gives the area between $y=x$ and $y=x^2$ on $[0,1]$ with vertical slices?", "$x-x^2$", ["$x^2-x$", "$x+x^2$", "$\\pi(x-x^2)$"], "The upper height is $x$ and the lower height is $x^2$ on that interval."),
  q("The region between $y=1$ and $y=3$ rotates about $y=-2$. What are the outer and inner radii of a vertical washer?", "$5$ and $3$", ["$3$ and $1$", "$5$ and $1$", "$3$ and $2$"], "The distances from the axis are $3-(-2)=5$ and $1-(-2)=3$."),
  q("Which shell radius is used for a slice at $x$ when the axis of rotation is $x=4$ and $0\\le x\\le2$?", "$4-x$", ["$x$", "$x+4$", "$2-x$"], "The distance from $x$ to the vertical axis is $|x-4|$. On the given interval this equals $4-x$."),
  q("What factor belongs in the arc-length integral for $y=f(x)$?", "$\\sqrt{1+[f'(x)]^2}$", ["$\\sqrt{1+[f(x)]^2}$", "$1+f'(x)$", "$|f'(x)|$"], "Apply the distance formula to a small chord. Factoring the horizontal width leaves the square root involving the slope."),
  q("Which expression gives the surface area swept by $y=f(x)\\ge0$ around the $x$-axis?", "$2\\pi\\int f(x)\\sqrt{1+[f'(x)]^2}\\,dx$", ["$\\pi\\int f(x)^2\\,dx$", "$2\\pi\\int xf(x)\\,dx$", "$\\int \\sqrt{1+[f'(x)]^2}\\,dx$"], "A thin surface band has circumference $2\\pi f(x)$ and slant width given by the length element."),
  q("A lamina has uniform density and mirror symmetry about $x=2$. What can be concluded about $\\bar x$?", "$\\bar x=2$", ["$\\bar x=0$", "$\\bar x=4$", "It equals the lamina’s area."], "Paired elements have equal weights and opposite horizontal displacements from the symmetry line. Their moments about that line cancel."),
  q("A spring stretches farther as it is pulled. What quantity is integrated to find the work over a stretch interval?", "Force as a function of stretch.", ["Stretch as a function of time.", "Force divided by stretch.", "The square of the applied force."], "For an infinitesimal displacement $dx$, the work is $F(x)\\,dx$. Add these contributions over the stretch interval."),
  q("A layer of liquid is at height $y$ and must be pumped to height $H$. What distance multiplies the layer weight in the work integral?", "$H-y$", ["$y$", "$H+y$", "$H$ for every layer."], "The outlet is $H$ above the reference level and the layer is already at $y$. Its vertical displacement is their difference."),
  q("Cross sections perpendicular to the $x$-axis are equilateral triangles with side length $s(x)$. Which expression is their area?", "$\\sqrt3\\,s(x)^2/4$", ["$s(x)^2$", "$\\pi s(x)^2/4$", "$s(x)/2$"], "An equilateral triangle of side $s$ has height $\\sqrt3 s/2$, so its area is half its base times that height."),
  q("What distinguishes the formula $V=\\int A(x)\\,dx$ for cross sections from the formula for geometric area under a curve?", "$A(x)$ is already a two-dimensional slice area.", ["$A(x)$ always represents a radius.", "The integral requires a factor of $2\\pi$ in every case.", "Only the endpoints of $A$ matter."], "Multiplying slice area by thickness gives a small volume. A radius or slice width would first need to be converted into area."),
  q("For a curve $y=f(x)$, why can its arc length exceed the difference of its endpoint $x$-coordinates?", "Each short chord includes both its horizontal and vertical displacement.", ["The integral subtracts the horizontal width.", "The endpoint distance is always zero.", "The curve length ignores changes in $y$."], "The chord length is the square root of the sum of the two squared displacements. It is at least the horizontal displacement."),
  q("The bottom curve of a lamina is $y=g(x)$ and the top is $y=f(x)$. What height does the midpoint of a vertical strip have?", "$(f(x)+g(x))/2$", ["$f(x)-g(x)$", "$f(x)g(x)$", "$[f(x)-g(x)]/2$"], "Average the heights of the two boundaries to locate the midpoint. The difference gives the strip height."),
];

const series = [
  ...family(paired, (a,b) =>
    num(m`Find $\lim_{n\to\infty}(${a}n^2+n)/(${b}n^2+1)$.`,
      f(a,b),[f(b,a),f(a+1,b),0],
      m`Divide numerator and denominator by $n^2$. The terms that have negative powers of $n$ vanish.`)),
  ...family(paired, (a,b) =>
    num(m`A convergent sequence satisfies $a_{n+1}=(a_n+${a*b})/${b}$. Find its limit.`,
      f(a*b,b-1),[a,a*b,f(a*b,b+1)],
      m`Let the limit be $L$. The recurrence gives $${b}L=L+${a*b}$. Solve for $L$.`)),
  ...family(paired, (a,b) =>
    num(m`Evaluate $\sum_{n=0}^\infty ${a}(-1/${b})^n$.`,
      f(a*b,b+1),[f(a*b,b-1),f(a,b),a],
      m`The first term is $${a}$ and the signed common ratio is $-1/${b}$. Divide the first term by $1+1/${b}$.`)),
  ...family(paired, (a,b) =>
    num(m`Evaluate $\sum_{n=1}^\infty[1/(n+${a})-1/(n+${b})]$.`,
      f(1,a+1),[f(1,a),f(1,b+1),0],
      m`Since $${b}=${a}+1$, consecutive terms cancel. The first surviving term is $1/${a+1}$ and the last term tends to zero.`)),
  ...family(paired, (a,b) =>
    num(m`Find the term limit of $\sum_{n=1}^\infty (${a}n+1)/(${b}n+2)$.`,
      f(a,b),[0,f(b,a),f(a+1,b+2)],
      m`Divide each term’s numerator and denominator by $n$. The term limit is nonzero, so the series diverges.`)),
  ...family([[2,3,1],[3,5,2],[4,7,3],[5,9,4]], (a,b,p) =>
    num(m`What is the limit of the ratio of $(${a}n^${p}+1)/(${b}n^{${p+2}}+3)$ to $1/n^2$?`,
      f(a,b),[f(b,a),0,f(a+1,b+3)],
      m`Multiplication by $n^2$ makes the degrees equal. The limit is the ratio of leading coefficients, so the comparison with the convergent $p$-series is valid.`)),
  ...family(paired, (a,p) =>
    num(m`Find the integral-test upper bound for the remainder after term $${a}$ of $\sum_{n=1}^\infty n^{-${p}}$.`,
      f(1,(p-1)*a**(p-1)),[f(1,(p-1)*(a+1)**(p-1)),f(1,(p-1)*a**p),f(1,a**(p-1))],
      m`Use $\int_{${a}}^\infty x^{-${p}}\,dx$ because the positive terms decrease. The lower endpoint is the last retained index.`)),
  ...family(paired, (a,b) =>
    num(m`For $\sum_{n=1}^\infty (-1)^{n-1}/n^2$, what is the smallest $N$ whose alternating-series error bound is at most $1/${(a+b)**2}$?`,
      a+b-1,[a+b,a+b+1,(a+b)**2-1],
      m`The bound after $N$ terms is $1/(N+1)^2$. Solving the inequality gives $N+1\ge${a+b}$.`)),
  ...family(paired, (a,b) =>
    num(m`Let $a_n=${a}^n/(n+${b})!$. Evaluate $a_{n+1}/a_n$ at $n=2$.`,
      f(a,3+b),[f(a,2+b),f(1,3+b),f(3+b,a)],
      m`Cancel the factorials to obtain $${a}/(n+${b+1})$. Substitute two. The same formula gives ratio limit zero.`)),
  ...family(paired, (a,b) =>
    num(m`Find the root-test limit for $a_n=[(${a}n+1)/(${b}n+3)]^n$.`,
      f(a,b),[f(b,a),f(a+1,b+3),0],
      m`The $n$th root is the positive expression inside the power. Its limit is the ratio of the leading coefficients.`)),
  ...family(paired, (a,b) =>
    num(m`A series has partial sums $S_N=\dfrac{${a}N}{N+${b}}$. Find its sum.`,
      a,[b,f(a,b),a+b],
      m`The sum is the limit of the partial sums. Divide numerator and denominator by $N$.`)),
  ...family([[1],[2],[3],[4]], a =>
    q(m`Classify $\sum_{n=1}^\infty (-1)^n/(n+${a})$.`,
      'Conditionally convergent.',['Absolutely convergent.','Divergent by the term test.','Divergent because every term is negative.'],
      m`The decreasing magnitudes tend to zero, so the alternating series converges. Its absolute series is a tail of the harmonic series and diverges.`)),
  q("The terms of a sequence are bounded and nondecreasing. What follows?", "The sequence converges.", ["Its limit is zero.", "The corresponding series converges.", "It must be constant."], "A nondecreasing sequence bounded above converges to its least upper bound. That limit need not be zero."),
  q("Suppose the partial sums of $\\sum a_n$ approach $4$. What is $\\lim a_n$?", "$0$", ["$4$", "$1$", "The limit need not exist."], "A term equals the difference of consecutive partial sums, both of which approach four."),
  q("If $a_n\\to0$, what can be concluded about $\\sum a_n$ from the term test alone?", "The test is inconclusive.", ["The series converges absolutely.", "The series converges conditionally.", "The series diverges."], "A zero term limit is necessary. Both the convergent series $\\sum 1/n^2$ and the divergent series $\\sum 1/n$ have it."),
  q("Which positive series is best suited to direct comparison with $1/n^2$ as an upper bound?", "$\\sum 1/(n^2+7)$", ["$\\sum 1/n$", "$\\sum 1$", "$\\sum n/(n+1)$"], "Each term of the first series is at most $1/n^2$. The comparison series converges."),
  q("Suppose $a_n,b_n>0$ and $a_n/b_n\\to3$. The series $\\sum b_n$ diverges. What follows?", "$\\sum a_n$ diverges.", ["$\\sum a_n$ converges absolutely.", "$\\sum a_n$ converges conditionally.", "The limit gives no information."], "The finite positive ratio allows limit comparison, which transfers divergence in either direction."),
  q("For an alternating series with positive magnitudes decreasing to zero, what bounds the magnitude of the error after $N$ terms?", "The magnitude of term $N+1$.", ["The signed value of term $N$.", "The sum of all the absolute terms.", "The first term divided by $N$ in every case."], "The sum is between the partial sums at $N$ and $N+1$. Their distance equals the magnitude of the first omitted term."),
  q("The ratio-test limit is one. Which statement is justified by that test?", "The ratio test is inconclusive.", ["The series is absolutely convergent.", "The series is conditionally convergent.", "The series is divergent."], "Both the harmonic series and $\\sum 1/n^2$ have ratio limit one and behave differently."),
  q("If $\\lim\\sqrt[n]{|a_n|}=3/2$, what does the root test give?", "The series diverges.", ["The series converges absolutely.", "The series converges conditionally.", "The test is inconclusive."], "A root limit above one makes the magnitudes of the terms fail to tend to zero."),
  q("Which series converges conditionally?", "$\\sum_{n=1}^\\infty (-1)^{n-1}/n$", ["$\\sum_{n=1}^\\infty 1/n$", "$\\sum_{n=1}^\\infty (-1)^n/n^2$", "$\\sum_{n=1}^\\infty (-1)^n$"], "The alternating harmonic series converges, but the series of its magnitudes is harmonic and diverges."),
  q("Which result justifies convergence of $\\sum 1/[n(\\ln n)^2]$ from $n=2$ onward?", "The integral test and the substitution $u=\\ln x$.", ["The term test alone.", "A geometric ratio of one half between successive terms.", "A lower bound by the harmonic series."], "The positive function decreases and its tail integral becomes an integral of $u^{-2}$, which converges."),
  q("The partial sums are $S_N=(-1)^N$. Which statement about the corresponding series holds?", "It diverges because its partial sums oscillate.", ["It converges because the sums are bounded.", "It converges to zero by cancellation.", "It converges to one because each odd partial sum is negative."], "Convergence of a series requires a limit of the partial sums. The even and odd subsequences approach different values."),
  q("A positive decreasing function $f$ interpolates the terms of a convergent series. What is an integral lower bound on the sum after term $N$?", "$\\int_{N+1}^\\infty f(x)\\,dx$", ["$\\int_N^\\infty f(x)\\,dx$", "$\\int_1^N f(x)\\,dx$", "$Nf(N)$"], "On each interval $[n,n+1]$ with $n\\ge N+1$, the function lies at or below its left endpoint height $f(n)$."),
];

const power = [
  ...family(paired, (a,b) =>
    num(m`Find the radius of convergence of $\sum_{n=1}^\infty n^{${a}}(x-1)^n/${b}^n$.`,
      b,[a,f(1,b),a*b],
      m`The ratio of successive polynomial factors tends to one. The absolute ratio limit is $|x-1|/${b}$, so the radius is $${b}$.`)),
  ...family(paired, (a,b) =>
    q(m`Find the interval of convergence of $\sum_{n=1}^\infty (x-${a})^n/(${b}^n n)$.`,
      m`$[${a-b},${a+b})$`,[m`$(${a-b},${a+b}]$`,m`$[${a-b},${a+b}]$`,m`$(${a-b},${a+b})$`],
      m`The open interval comes from $|x-${a}|<${b}$. At the left endpoint the series alternates and at the right it is harmonic.`)),
  ...family(paired, (a,b) =>
    q(m`Find the interval of convergence of $\sum_{n=1}^\infty (-1)^n(x-${a})^n/(${b}^n n)$.`,
      m`$(${a-b},${a+b}]$`,[m`$[${a-b},${a+b})$`,m`$[${a-b},${a+b}]$`,m`$(${a-b},${a+b})$`],
      m`The absolute ratio gives radius $${b}$. At the left endpoint the two signs cancel, giving the divergent harmonic series. At the right the terms alternate and converge.`)),
  ...family(paired, (a,b) =>
    num(m`Find the coefficient of $x^{${2*b}}$ in the expansion of $1/(1+${a}x^2)$ about zero.`,
      (-a)**b,[a**(b+1),-((-a)**b),(-a)**(b-1)],
      m`Use the geometric series with ratio $-${a}x^2$. The power $x^{${2*b}}$ occurs when the index equals $${b}$.`)),
  ...family(paired, (a,b) =>
    num(m`Find the coefficient of $x^{${b}}$ in the Maclaurin series of $e^{${a}x}$.`,
      f(a**b,factorial(b)),[f(a,factorial(b)),a**b,f(a**b,factorial(b-1))],
      m`The degree-$${b}$ term is $(${a}x)^{${b}}/${b}!$. The power acts on the coefficient as well as on $x$.`)),
  ...family(paired, (a,b) =>
    num(m`The coefficient of $(x-2)^{${a}}$ in the Taylor polynomial of $f$ is $${b}$. Find $f^{(${a})}(2)$.`,
      b*factorial(a),[b,f(b,factorial(a)),a*b+1],
      m`The coefficient is the derivative at the center divided by $${a}!$. Therefore multiply $${b}$ by $${a}!$.`)),
  ...family([[3],[4],[5],[6]], b =>
    num(m`Use the degree-two Maclaurin polynomial for $e^x$ to approximate $e^{1/${b}}$.`,
      f(2*b*b+2*b+1,2*b*b),[f(b+1,b),f(b*b+b+1,b*b),f(2*b*b+2*b-1,2*b*b)],
      m`The polynomial is $1+x+x^2/2$. Substitute $x=1/${b}$ to include the quadratic contribution.`)),
  ...family(paired, (a,b) =>
    num(m`If $|f^{(${a+1})}(t)|\le 1$ between $0$ and $1/${b}$, what bound does Taylor’s theorem give for the degree-$${a}$ approximation error at $1/${b}$?`,
      f(1,b**(a+1)*factorial(a+1)),[f(1,b**a*factorial(a)),f(1,b**(a+1)),f(1,b**a*factorial(a+1))],
      m`The bound uses the first derivative order beyond the polynomial, $${a+1}$. Multiply $(1/${b})^{${a+1}}$ by $1/${a+1}!$.`)),
  ...family(paired, (a,b) =>
    num(m`Suppose $f(x)=\sum_{n=0}^\infty (x/${a})^n$. Find the coefficient of $x^{${b-1}}$ in $f'(x)$.`,
      f(b,a**b),[f(1,a**b),f(b-1,a**(b-1)),f(b,a**(b-1))],
      m`The term that produces the requested power is $x^{${b}}/${a**b}$. Differentiate that term to obtain the coefficient.`)),
  ...family(paired, (a,b) =>
    num(m`Find the coefficient of $x^{${2*b+1}}$ in the expansion of $\int_0^x dt/(1-${a}t^2)$ about zero.`,
      f(a**b,2*b+1),[a**b,f(a**b,2*b),f(a**(b+1),2*b+1)],
      m`The geometric expansion contributes $${a**b}t^{${2*b}}$. Integrate this power to obtain the coefficient of $x^{${2*b+1}}$.`)),
  ...family(integers, a =>
    num(m`Evaluate $\lim_{x\to0}(e^{${a}x}-1-${a}x)/x^2$ using a series.`,
      f(a*a,2),[a*a,f(a,2),0],
      m`The constant and linear terms cancel. The next term is $(${a}x)^2/2$, so the limit is $${f(a*a,2)}$.`)),
  ...family(integers, a =>
    num(m`Use the alternating cosine series. What bound follows for the error of $1-x^2/2$ at $x=1/${a}$?`,
      f(1,24*a**4),[f(1,2*a*a),f(1,a**4),f(1,720*a**6)],
      m`The first omitted nonzero term is $x^4/4!$. At $x=1/${a}$ its magnitude gives the stated bound.`)),
  q("A power series about $x=2$ has radius $3$. Where does it converge absolutely regardless of endpoint behavior?", "At $x=0$.", ["At $x=-2$.", "At $x=6$.", "At $x=8$."], "The distance of zero from the center is two, which is less than three. The other distances exceed the radius."),
  q("Which statement applies at the two endpoints of a finite positive radius of convergence?", "They require separate tests in the original series.", ["Both must be included.", "Both must be excluded.", "Their inclusion is determined by the center alone."], "The ratio or root test that finds the radius has boundary limit one. Each substituted endpoint produces its own numerical series."),
  q("What is the radius of convergence of $\\sum_{n=0}^\\infty x^n/n!$?", "Infinite.", ["$1$", "$0$", "$e$"], "The absolute ratio limit for fixed nonzero $x$ is the limit of $|x|/(n+1)$, which is zero. At zero only the constant term remains."),
  q("What is the radius of convergence of $\\sum_{n=0}^\\infty n!x^n$?", "$0$", ["$1$", "Infinite.", "$e$"], "For each fixed nonzero $x$, the absolute ratio $(n+1)|x|$ grows without bound. At zero the series reduces to its constant term."),
  q("For $|x|<1$, which series represents $1/(1+x)$?", "$\\sum_{n=0}^\\infty (-1)^n x^n$", ["$\\sum_{n=0}^\\infty x^n$", "$\\sum_{n=1}^\\infty (-1)^n x^n$", "$\\sum_{n=0}^\\infty x^{2n}$"], "Use the geometric expansion with ratio $-x$ and keep the constant term one."),
  q("Which property is preserved under termwise differentiation inside a power series’ interval of convergence?", "The radius of convergence.", ["Convergence at both endpoints in every case.", "Every coefficient.", "The value of the sum at the center."], "Termwise differentiation preserves the radius. The endpoint series can change."),
  q("Which is the degree-three Maclaurin polynomial of $\\sin x$?", "$x-x^3/6$", ["$1-x^2/2$", "$x+x^3/6$", "$x-x^3/3$"], "The first derivative at zero is one and the third derivative at zero is minus one. Divide the cubic coefficient by $3!$."),
  q("Which is the quadratic Taylor polynomial of $\\ln x$ about $x=1$?", "$(x-1)-(x-1)^2/2$", ["$1+(x-1)+(x-1)^2/2$", "$x-x^2/2$", "$-(x-1)+(x-1)^2/2$"], "At one the value is zero, the first derivative is one and the second derivative is minus one."),
  q("Which is the degree-four Maclaurin polynomial of $\\cos x$?", "$1-x^2/2+x^4/24$", ["$1+x^2/2+x^4/24$", "$1-x^2/2-x^4/24$", "$1-x+x^2/2$"], "The derivatives at zero at orders zero, two, and four are $1,-1,1$. Odd derivatives vanish."),
  q("What is the coefficient of $x^4$ in the Maclaurin expansion of $e^{x^2}$?", "$1/2$", ["$1$", "$1/4$", "$1/24$"], "The term at index two of the exponential series becomes $(x^2)^2/2!$. Other terms have different powers of $x$."),
  q("For a degree-three Taylor polynomial about $c$, which derivative is used for the usual remainder bound?", "The fourth derivative on the interval between $c$ and the input.", ["The third derivative only at $c$.", "The first derivative only at the input.", "The fifth derivative only at $c$."], "Taylor’s remainder uses one derivative beyond the polynomial degree and bounds it along the interval from the center to the evaluation point."),
  q("Which Maclaurin expansion gives a direct evaluation of $\\lim_{x\\to0}(1-\\cos x)/x^2$?", "$\\cos x=1-x^2/2+\\cdots$", ["$\\cos x=x-x^3/6+\\cdots$", "$\\cos x=1+x+x^2/2+\\cdots$", "$\\cos x=1+x+x^2+\\cdots$"], "The constant terms cancel and the leading term left in the numerator is $x^2/2$."),
];

function factorial(n) {
  let value = 1;
  for (let k=2; k<=n; k++) value *= k;
  return value;
}

const curves = [
  ...family(paired, (a,b) =>
    num(m`For $x=${a}t-1$ and $y=t^2+${a}$ with $0\le t\le${b}$, find $y$ when $x=${a*b-1}$.`,
      b*b+a,[b*b,a*a+b,b+a],
      m`The equation for $x$ gives $t=${b}$. Substitute this endpoint of the parameter interval into $y$.`)),
  ...family(paired, (a,b) =>
    num(m`For $x=t^2+${a}t$ and $y=${b}t^2-t$, find $dy/dx$ at $t=1$.`,
      f(2*b-1,2+a),[f(2+a,2*b-1),f(b-1,1+a),2*b-1],
      m`At one the derivatives with respect to $t$ are $${2+a}$ and $${2*b-1}$. Divide the derivative of $y$ by that of $x$.`)),
  ...family(paired, (a,b) =>
    num(m`For $x=${a}t+1$ and $y=t^3$, find $d^2y/dx^2$ at $t=${b}$.`,
      f(6*b,a*a),[f(6*b,a),6*b,f(3*b*b,a)],
      m`The first derivative is $3t^2/${a}$. Differentiate it with respect to $t$ and divide by $${a}$ once more before substituting $${b}$.`)),
  ...family(paired, (a,b) =>
    num(m`For $x=${a}t+2$ and $y=t^2-${2*b}t$, find the parameter where the tangent is horizontal.`,
      b,[2*b,a,0],
      m`The derivative of $y$ with respect to $t$ is zero at $${b}$, while the derivative of $x$ is $${a}\ne0$.`)),
  ...family(paired, (a,b) =>
    num(m`For $x=t^2-${2*a}t$ and $y=${b}t$, find the parameter where the tangent is vertical.`,
      a,[2*a,b,0],
      m`The derivative of $x$ with respect to $t$ vanishes at $${a}$ and the derivative of $y$ is nonzero there.`)),
  ...family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    num(m`Find the coefficient of $\pi$ in the length of $x=${a}\cos t$, $y=${a}\sin t$, $0\le t\le\pi/${b}$.`,
      f(a,b),[f(b,a),a,f(a,2*b)],
      m`The speed is the constant $${a}$. Multiply it by the parameter span $\pi/${b}$.`)),
  ...family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    num(m`A point has polar coordinates $(-${2*a},\pi/3)$. Find its Cartesian $x$-coordinate.`,
      -a,[a,-2*a,f(-a,b)],
      m`In $x=r\cos\theta$, keep the sign of $r$. Since $\cos(\pi/3)=1/2$, the result is $-${a}$.`)),
  ...family(integers, a =>
    num(m`The polar equation $r=${2*a}\sin\theta$ describes a circle. Find the $y$-coordinate of its center.`,
      a,[0,2*a,-a],
      m`Multiply by $r$ to get $x^2+y^2=${2*a}y$. Completing the square gives $x^2+(y-${a})^2=${a*a}$.`)),
  ...family(paired, (a,b) =>
    num(m`Find the coefficient of $\pi$ in the area of $0\le r\le${a}$, $0\le\theta\le\pi/${b}$.`,
      f(a*a,2*b),[f(a*a,b),f(a*a,3*b),f(a*a,4*b)],
      m`The area integrand is $r^2/2=${a*a}/2$ over the angle interval of length $\pi/${b}$.`)),
  ...family(paired, (a,b) =>
    num(m`Find the coefficient of $\pi$ in the area between $r=${a}$ and $r=${b}$ for $0\le\theta\le\pi/2$.`,
      f(b*b-a*a,4),[f(b*b-a*a,2),f((b-a)**2,4),f(a*a+b*b,4)],
      m`Subtract the squared inner radius from the squared outer radius before multiplying by half the angular width.`)),
  ...family(paired, (a,b) =>
    num(m`For $r=${a}\cos(${b}\theta)$, find the coefficient of $\pi$ in the area of the petal centered at zero.`,
      f(a*a,4*b),[f(a*a,2*b),f(a*a,4),f(a,4*b)],
      m`One petal uses $-\pi/(2\cdot${b})\le\theta\le\pi/(2\cdot${b})$. The mean of the cosine squared over that interval is $1/2$. Multiply by $${a*a}/2$ and the angular width.`)),
  ...family(paired, (a,b) =>
    num(m`Find the coefficient of $\sqrt{${1+a*a}}$ in the length of $r=e^{${a}\theta}$ over $0\le\theta\le (\ln ${b})/${a}$.`,
      f(b-1,a),[f(b,a),-1,f(b+1,a)],
      m`The speed is $\sqrt{${1+a*a}}\,e^{${a}\theta}$. Integrating the exponential gives $(${b}-1)/${a}$.`)),
  q("For $x=t$ and $y=t^2$ with $-2\\le t\\le1$, what is the range of traced $x$-coordinates?", "$[-2,1]$", ["$[0,4]$", "$[-1,2]$", "All real numbers."], "The parameter equals the horizontal coordinate, so the horizontal range is exactly the parameter interval."),
  q("At a point of a parametric curve, $x'(t)=0$ and $y'(t)\\ne0$. What is the tangent direction?", "Vertical.", ["Horizontal.", "Slope one.", "It has zero length."], "The nonzero velocity vector has zero horizontal component and nonzero vertical component."),
  q("Why is the second derivative of $y$ with respect to $x$ different from the derivative of $dy/dx$ with respect to $t$?", "The chain rule requires division by $dx/dt$.", ["It always requires multiplication by $dy/dt$.", "It is always zero.", "It is found by squaring $dy/dx$."], "To differentiate a function of $t$ with respect to $x$, use $d/dx=(1/x'(t))d/dt$ where the denominator is nonzero."),
  q("What is the parametric speed for $x=x(t)$ and $y=y(t)$?", "$\\sqrt{(x'(t))^2+(y'(t))^2}$", ["$x'(t)+y'(t)$", "$y'(t)/x'(t)$", "$\\sqrt{x(t)^2+y(t)^2}$"], "The speed is the norm of the velocity vector, whose components are the time derivatives of the coordinates."),
  q("Which positive-radius coordinates represent $(-3,0)$ in Cartesian form?", "$(3,\\pi)$", ["$(3,0)$", "$(3,\\pi/2)$", "$(3,3\\pi/2)$"], "The distance is three and the point lies on the negative horizontal ray."),
  q("Which polar point is equivalent to $(2,\\pi/4)$?", "$(-2,5\\pi/4)$", ["$(-2,\\pi/4)$", "$(2,3\\pi/4)$", "$(2,5\\pi/4)$"], "Changing the radius sign reverses the ray. Adding $\\pi$ to the angle reverses it again."),
  q("Which Cartesian equation is equivalent to $r=4\\cos\\theta$?", "$(x-2)^2+y^2=4$", ["$x^2+(y-2)^2=4$", "$(x-4)^2+y^2=16$", "$x^2+y^2=4$"], "Multiplying by $r$ gives $x^2+y^2=4x$. Complete the square in $x$."),
  q("Which interval traces exactly the petal centered at zero for $r=\\cos(2\\theta)$?", "$[-\\pi/4,\\pi/4]$", ["$[-\\pi/2,\\pi/2]$", "$[0,\\pi/4]$", "$[-\\pi,\\pi]$"], "The nearest zeros on each side of zero are at $-\\pi/4$ and $\\pi/4$. Between them the radius is positive."),
  q("With $r=2$ and $0\\le\\theta\\le\\pi$, what curve length is traced?", "$2\\pi$", ["$4\\pi$", "$\\pi$", "$4$"], "The polar speed is the constant radius two. The tracing is a semicircle with angular width $\\pi$."),
  q("Which factor is the speed in the polar arc-length integral?", "$\\sqrt{r^2+(dr/d\\theta)^2}$", ["$r^2/2$", "$r\\cos\\theta$", "$|dr/d\\theta|$"], "Differentiating both Cartesian coordinates and summing their squared derivatives cancels the mixed terms."),
  q("Why should the pole be checked separately when finding intersections of two polar curves?", "They may reach the origin at different angles.", ["Every polar curve passes through the origin.", "Negative radii describe points outside the plane.", "All intersections at the pole have angle zero."], "The point $r=0$ is the same Cartesian point for every angle. The two curves need not have zero radius at a common parameter value."),
  q("For one tracing of a region between nonnegative radii $r_{out}$ and $r_{in}$, what is the area integrand in $\\theta$?", "$(r_{out}^2-r_{in}^2)/2$", ["$(r_{out}-r_{in})^2/2$", "$r_{out}-r_{in}$", "$(r_{out}^2+r_{in}^2)/2$"], "Subtract the inner sector area from the outer sector area on each angular slice."),
];

const vectors = [
  ...family(paired, (a,b) =>
    num(m`For $P=(1,2,3)$ and $Q=(${a+1},${b+2},2)$, find the squared length of $\overrightarrow{PQ}$.`,
      a*a+b*b+1,[a*a+b*b,a+b+1,(a+1)**2+(b+2)**2+4],
      m`The displacement has components $(${a},${b},-1)$. The squared length is their sum of squares.`)),
  ...family(integers, a =>
    num(m`Find the $y$-component of the unit vector in the direction $(0,${3*a},${4*a})$.`,
      f(3,5),[f(4,5),f(3,4),f(3,5*a)],
      m`The norm is $${5*a}$. Divide the second component by the norm.`)),
  ...family(paired, (a,b) =>
    num(m`For $u=(${a},1,2)$ and $v=(1,-${b},3)$, find $u\cdot v$.`,
      a-b+6,[a+b+6,a-b,2*a-b+9],
      m`The products of corresponding components are $${a}$, $-${b}$, and $6$.`)),
  ...family(paired, (a,b) =>
    num(m`Find $c$ so that $(c,${a},2)$ and $(2,-${b},1)$ are perpendicular.`,
      f(a*b-2,2),[f(a*b+2,2),f(2-a*b,2),a*b],
      m`Set the dot product $2c-${a*b}+2$ equal to zero and solve.`)),
  ...family(paired, (a,b) =>
    num(m`Find the scalar component of $(${a},${b},1)$ in the direction $(3,0,4)$.`,
      f(3*a+4,5),[f(3*a+4,25),f(3*b+4,5),3*a+4],
      m`The dot product is $${3*a+4}$ and the direction vector has norm five. The scalar component uses the norm to the first power.`)),
  ...family(paired, (a,b) =>
    num(m`Project $(${a},${b},1)$ onto $(1,2,0)$. Find the second coordinate of the projection.`,
      f(2*(a+2*b),5),[f(a+2*b,5),f(2*(a+2*b),25),a+2*b],
      m`The projection is $(${a+2*b}/5)(1,2,0)$. Multiply the scalar multiplier by the second component of the direction vector.`)),
  ...family(paired, (a,b) =>
    num(m`Find the third component of $(${a},1,0)\times(2,${b},0)$.`,
      a*b-2,[2-a*b,a*b+2,a*b],
      m`The third component is the determinant of the first two coordinate columns, $${a}\cdot${b}-1\cdot2$.`)),
  ...family(paired, (a,b) =>
    num(m`Find the area of the triangle with vertices $(0,0,0)$, $(${a},0,0)$, and $(1,${b},0)$.`,
      f(a*b,2),[a*b,f(a+b,2),f(a*b,4)],
      m`The third component of the cross product of the two edges from the origin is $${a*b}$. The triangle area is half its absolute value.`)),
  ...family(paired, (a,b) =>
    num(m`A sphere satisfies $x^2+y^2+z^2-${2*a}x+${2*b}y=1$. Find its squared radius.`,
      1+a*a+b*b,[1+a*a-b*b,1+a+b,a*a+b*b],
      m`Completing squares in $x$ and $y$ adds $${a*a}$ and $${b*b}$ to both sides.`)),
  ...family([[3,5],[4,6],[5,7],[6,8]], (a,b) =>
    num(m`Find the squared radius of the circle cut from $x^2+y^2+z^2=${b*b}$ by $z=${a}$.`,
      b*b-a*a,[b*b,a*a,b*b+a*a],
      m`Substitute $z=${a}$. The remaining equation is a circle with the stated difference as its squared radius.`)),
  ...family(paired, (a,b) =>
    num(m`For the ellipse $x^2/${b*b}+y^2/${a*a}=1$, find the squared distance from its center to a focus.`,
      b*b-a*a,[b*b,a*a+b*b,(b-a)**2],
      m`The square of the focus distance is the difference between the squares of the semimajor and semiminor axes.`)),
  ...family([[1,2],[2,3],[3,2],[5,4]], (a,b) =>
    q(m`Classify the conic $r=8/(${b}+${a}\cos\theta)$.`,
      a < b ? 'Ellipse.' : 'Hyperbola.',
      [a < b ? 'Hyperbola.' : 'Ellipse.','Parabola.','Circle.'],
      m`After dividing the denominator by $${b}$, the eccentricity is $${a}/${b}$. An eccentricity strictly between zero and one gives an ellipse. An eccentricity above one gives a hyperbola.`)),
  q("How is the displacement vector from $P$ to $Q$ computed?", "Subtract the coordinates of $P$ from those of $Q$.", ["Subtract the coordinates of $Q$ from those of $P$.", "Add their coordinates.", "Take the dot product of their position vectors."], "A displacement records each final coordinate minus the corresponding starting coordinate."),
  q("What is the norm of the vector $(1,2,2)$?", "$3$", ["$5$", "$9$", "$\\sqrt5$"], "Take the square root of the sum $1+4+4=9$."),
  q("Two nonzero vectors have negative dot product. What can be said about their angle?", "It is obtuse or straight.", ["It is acute.", "It is exactly $\\pi/2$.", "It is necessarily zero."], "The cosine is negative because both norms in its denominator are positive. The angle lies in $(\\pi/2,\\pi]$."),
  q("If $u\\cdot v=0$ and $v\\ne0$, what is the projection of $u$ onto $v$?", "The zero vector.", ["The vector $v$.", "The vector $u+v$.", "The unit vector in the direction of $v$."], "The multiplier $(u\\cdot v)/\\|v\\|^2$ is zero."),
  q("What happens when the order of a cross product is reversed?", "The result changes sign.", ["The result doubles.", "The result is unchanged for all vectors.", "It becomes the dot product."], "The cross product is antisymmetric, so $v\\times u=-(u\\times v)$."),
  q("What is the magnitude of the cross product of parallel vectors?", "$0$", ["The product of their norms.", "The sum of their norms.", "The difference of their norms."], "The angle is zero or $\\pi$. Its sine is zero, so the parallelogram has zero area."),
  q("The parallelogram spanned by two edges has area ten. What is the area of the triangle with the same two edges?", "$5$", ["$10$", "$20$", "$100$"], "A diagonal of the parallelogram divides it into two congruent triangles."),
  q("Which point is the center of $(x-1)^2+(y+2)^2+(z-3)^2=16$?", "$(1,-2,3)$", ["$(-1,2,-3)$", "$(1,2,3)$", "$(4,4,4)$"], "The center is the point from which the squared coordinate distances are measured."),
  q("A plane at distance $d$ from the center of a sphere of radius $R$ intersects it in a circle when $0<d<R$. What is the radius of that circle?", "$\\sqrt{R^2-d^2}$", ["$R-d$", "$R+d$", "$\\sqrt{R^2+d^2}$"], "The sphere radius, plane offset, and section radius form a right triangle, with the sphere radius as hypotenuse."),
  q("What is the shape of $r=3/(1+\\cos\\theta)$?", "A parabola.", ["An ellipse with eccentricity one half.", "A circle.", "A hyperbola."], "The normalized denominator has eccentricity one, which gives a parabola."),
  q("Which form describes an ellipse centered at the origin with vertical semimajor axis four and horizontal semiminor axis two?", "$x^2/4+y^2/16=1$", ["$x^2/16+y^2/4=1$", "$x^2/4-y^2/16=1$", "$x^2+y^2=4$"], "The denominator of each squared coordinate equals the square of the corresponding semiaxis. The larger denominator belongs under $y^2$."),
  q("A force is perpendicular to the displacement. What is the work done by that force?", "Zero.", ["The product of the force and displacement magnitudes.", "The magnitude of the displacement.", "A negative number for every nonzero force."], "Work is the dot product of the force and displacement. The cosine of a right angle is zero."),
];

const banks = [techniques, improper, applications, series, power, curves, vectors];

export const calculus2Timed = Object.fromEntries(banks.map((bank, index) => [
  'unit-' + (index + 1),
  bank.map((item, i) => ({ ...item, number: i + 1 })),
]));
