import { fraction, question as q, numericQuestion as numeric } from './quiz.mjs';

const m = String.raw;

const family = (cases, make) => cases.map(values => make(...values));

// The order in each unit determines permanent question IDs. Append future additions.
const limits = [
  family([[2,5],[3,7],[4,9],[5,13]], (a,b) =>
    numeric(m`Evaluate $\lim_{x\to${a}}\dfrac{(x-${a})(x+${b})}{x^2-${a}^2}$.`,
      fraction(a+b,2*a), [fraction(b,2*a),fraction(a+b,a),fraction(a+b,a*a+1)],
      m`Factor the denominator as $(x-${a})(x+${a})$. After canceling the factor that tends to zero, the denominator tends to $${2*a}$ and the numerator to $${a+b}$.`)),
  family([[3,2],[4,3],[5,4],[6,5]], (a,b) =>
    numeric(m`Evaluate $\lim_{h\to0}\dfrac{\sqrt{${a*a}+${b}h}-${a}}{h}$.`,
      fraction(b,2*a), [fraction(b,a),fraction(1,2*a),fraction(a,b)],
      m`Multiply by the conjugate. After canceling $h$, the numerator is $${b}$ and the denominator tends to $${2*a}$.`)),
  family([[2,3],[3,5],[5,2],[7,4]], (a,b) =>
    numeric(m`Evaluate $\lim_{x\to0}\dfrac{\sin(${a}x)}{\sin(${b}x)}$ with angles in radians.`,
      fraction(a,b), [fraction(b,a),0,1],
      m`Divide each sine by its own argument. Both resulting ratios approach $1$, leaving the coefficient ratio $${fraction(a,b)}$.`)),
  family([[2,5],[3,8],[4,7],[5,12]], (a,b) =>
    numeric(m`Find $\lim_{x\to-\infty}\dfrac{${a}x-1}{\sqrt{${b*b}x^2+3}}$.`,
      fraction(-a,b), [fraction(a,b),fraction(-a,b*b),0],
      m`Write the radical as $|x|\sqrt{${b*b}+3/x^2}$. For negative $x$, dividing the numerator by $|x|$ makes its leading term $-${a}$.`)),
  family([[1,3],[2,5],[3,7],[4,9]], (a,b) =>
    numeric(m`Let $f(x)=kx+${b}$ for $x<${a}$ and $f(x)=x^2+${b+2*a}$ for $x\ge${a}$. Which $k$ makes $f$ continuous at $${a}$?`,
      a+2, [a,0,a+3],
      m`The left limit is $${a}k+${b}$. The right limit and function value equal $${a*a+b+2*a}$. Equating the two gives $k=${a+2}$.`)),
  family([[2,1,2],[4,5,2],[6,5,3],[8,9,3]], (a,b,power) => {
    const positive = a > b;
    const right = positive ? '+\\infty' : '-\\infty';
    const left = power % 2 ? (positive ? '-\\infty' : '+\\infty') : right;
    const correct = '$(' + left + ',' + right + ')$';
    const options = ['$(-\\infty,-\\infty)$','$(-\\infty,+\\infty)$','$(+\\infty,-\\infty)$','$(+\\infty,+\\infty)$'];
    const sign = power % 2 ? 'changes sign from negative to positive' : 'is positive on both sides';
    return q(m`For $f(x)=\dfrac{x-${b}}{(x-${a})^${power}}$, what are the left and right limits at $x=${a}$, in that order?`,
      correct, options.filter(option => option !== correct),
      m`The numerator tends to $${a-b}$. The denominator ${sign} as it approaches zero, which determines the signs of the two infinite limits.`);
  }),
  family([[2,3],[4,5],[6,7],[8,9]], (a,b) =>
    numeric(m`A continuous, strictly increasing function has $f(${a})=-2$, $f(${b})=3$ and $f(${b+1})=5$. How many zeros lie in $[${a},${b+1}]$?`,
      1,[0,2,3],
      'The Intermediate Value Theorem gives a zero between the first two inputs. Strict increase permits at most one zero on the full interval.')),
  family([[1,2],[2,3],[3,4],[4,5]], (a,b) =>
    numeric(m`For $x\ne0$, suppose $${a}-${b}x^2\le f(x)\le ${a}+x^2$. Find $\lim_{x\to0}f(x)$.`,
      a,[0,-a,a+b],
      m`Each bound has limit $${a}$. The squeeze theorem gives the same limit for $f$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`If $f(x)=\dfrac{x^2-${a*a}}{x-${a}}+${b}$ for $x\ne${a}$, which value at $${a}$ makes $f$ continuous?`,
      2*a+b,[a+b,2*a,b],
      m`Away from $${a}$ the quotient simplifies to $x+${a}$. Its limit plus the constant is $${2*a+b}$, which must equal the assigned value.`)),
  family([[2,5],[3,7],[4,9],[5,11]], (a,b) =>
    numeric(m`Suppose $\lim_{x\to c}f(x)=${a}$ and $\lim_{x\to c}g(x)=${b}$. Find $\lim_{x\to c}\dfrac{f(x)^2+g(x)}{g(x)-f(x)}$.`,
      fraction(a*a+b,b-a),[fraction(a+b,b-a),fraction(a*a+b,b+a),fraction(a*a,b-a)],
      m`The numerator tends to $${a*a+b}$ and the denominator tends to $${b-a}\ne0$. The quotient law therefore applies.`)),
  family([[2,1],[3,1],[5,2],[7,3]], (a,b) =>
    numeric(m`Evaluate $\lim_{x\to0}\dfrac{1-\cos(${a}x)}{\sin^2(${b}x)}$ in radians.`,
      fraction(a*a,2*b*b),[fraction(a*a,b*b),fraction(b*b,2*a*a),0],
      m`Replace the numerator by $2\sin^2(${a}x/2)$. The sine-to-argument ratios tend to $1$, leaving $${fraction(a*a,2*b*b)}$.`)),
  family([[2,5],[3,7],[4,9],[5,11]], (a,b) =>
    q(m`For $f(x)=\dfrac{(x-${a})(x+${b})}{(x-${a})(x-${b})}$ on its original domain, classify the points with $x=${a}$ and $x=${b}$.`,
      m`A hole at $${a}$ and a vertical asymptote at $${b}$.`,
      [m`A vertical asymptote at $${a}$ and a hole at $${b}$.`,'Two holes.','Two vertical asymptotes.'],
      m`Cancel $x-${a}$ on the original domain. The remaining quotient has a finite value at $${a}$, while its denominator still vanishes at $${b}$ with a nonzero numerator.`)),
  q(m`Suppose $\lim_{x\to a} f(x)=4$, while $g(x)$ has distinct finite left and right limits at $a$. What can be concluded about $f(x)+g(x)$?`,
    'Its two-sided limit does not exist.',
    ['Its limit is $4$.','Its limit is the average of the two side limits of $g$.','Its limit depends only on $f(a)$.'],
    'Each side limit of the sum is four plus the corresponding side limit of g. The two resulting values remain distinct.'),
  q('Which function satisfies the hypotheses of the Intermediate Value Theorem on $[-1,1]$?',
    '$f(x)=|x|$.',['$f(x)=1/x$.', m`$f(x)=\sqrt{x}$.`, '$f(x)=x/|x|$.'],
    'Absolute value is continuous throughout the closed interval, including at zero.'),
  q("For $x\\ne0$, $f(x)=(x^2+x)/x$, and $f(0)=9$. What is $\\lim_{x\\to0}[f(x)-f(0)]$?", "$-8$", ["$0$", "$1$", "$8$"], "For nonzero $x$ the function is $x+1$, so its limit is $1$. The subtracted value is the fixed number $9$."),
  q("A function is continuous on $[2,6]$, with $f(2)=1$ and $f(6)=8$. Which conclusion follows from the Intermediate Value Theorem alone?", "Some interior point has output $4$.", ["Exactly one point has output $4$.", "Some interior point has output $0$.", "The function is increasing on the interval."], "The value $4$ is strictly between the endpoint values. Continuity gives existence of an interior solution."),
  q("Suppose $f(x)$ has a jump at $2$ with distinct finite side limits. Which change removes the jump?", "No change to $f(2)$ alone can remove it.", ["Set $f(2)$ to the left limit.", "Set $f(2)$ to the right limit.", "Set $f(2)$ to the average of the side limits."], "Changing one function value leaves both side limits unchanged, so they remain different."),
  q("Find $\\lim_{x\\to-\\infty}\\dfrac{x^2-1}{x^3+1}$.", "$0$", ["$1$", "$-1$", "$-\\infty$"], "Divide both polynomials by $x^3$. The denominator tends to $1$ and every term in the numerator tends to zero."),
  q("For all sufficiently small nonzero $x$, $|g(x)|\\le 4|x|$. What is the limit of $g(x)$ as $x\\to0$?", "$0$", ["$4$", "$-4$", "The limit is undetermined."], "The lower bound $-4|x|$ and the upper bound $4|x|$ both tend to zero. Apply the squeeze theorem."),
  q("Which expression has a removable discontinuity at $x=3$?", "$\\dfrac{x^2-9}{x-3}$", ["$\\dfrac{x+3}{x-3}$", "$\\dfrac1{(x-3)^2}$", "$\\dfrac{|x-3|}{x-3}$"], "In the first quotient, canceling the common factor gives $x+3$ for $x\\ne3$. The other expressions have infinite or unequal side limits."),
  q("Suppose $\\lim_{x\\to a}f(x)=3$ and $\\lim_{x\\to a}g(x)=0$. What follows for $\\lim_{x\\to a} f(x)g(x)$?", "It equals zero.", ["It equals three.", "It depends on $g(a)$.", "The product law cannot be used."], "Both limits are finite, so the product law gives $3\\cdot0$."),
  q("For $f(x)=2+1/(x-1)$, which horizontal asymptote follows from the limit as $x\\to+\\infty$?", "$y=2$", ["$x=1$", "$y=0$", "$y=1$"], "As $x$ increases without bound, the reciprocal term tends to zero."),
];

const derivative = [
  family([[2,1,4],[3,2,5],[4,1,5],[5,3,6]], (a,u,v) =>
    numeric(m`Find the average rate of change of $f(x)=${a}x^2-x$ on $[${u},${v}]$.`,
      a*(u+v)-1,[2*a*v-1,a*(v-u)-1,a*(u+v)],
      m`Factor the difference of squares in $f(${v})-f(${u})$. Dividing by $${v-u}$ gives $${a}(${u}+${v})-1=${a*(u+v)-1}$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Use the difference quotient to find $f'(${b})$ for $f(x)=${a}x^2+x$.`,
      2*a*b+1,[a*b+1,2*a*b,2*a+1],
      m`Expanding $f(${b}+h)-f(${b})$ gives $(${2*a*b+1})h+${a}h^2$. After dividing by $h$, take $h\to0$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`For $y=x^2+${a}$, find the $y$-intercept of the tangent line at $x=${b}$.`,
      a-b*b,[a+b*b,a,2*b],
      m`The tangent has slope $${2*b}$ and passes through $(${b},${b*b+a})$. Setting $x=0$ in its point-slope equation gives $${a-b*b}$.`)),
  family([[2,4],[3,5],[4,6],[5,7]], (a,b) =>
    numeric(m`The tangent to $f(x)=x^2$ at $x=${a}$ is used to estimate $f(${a}+1/${b})$. What is the estimate?`,
      fraction(a*a*b+2*a,b),[a*a,fraction(a*a*b+1,b),fraction(a*a*b-2*a,b)],
      m`At the base point the value is $${a*a}$ and the slope is $${2*a}$. The linear change is $${2*a}/${b}$.`)),
  family([[3,2],[4,3],[5,4],[6,5]], (a,b) =>
    numeric(m`A particle has position $s(t)=t^3-${a}t^2+${b}t$ feet. Find its acceleration at $t=${a}$ in ft/s².`,
      4*a,[6*a,2*a,4*a+b],
      m`The velocity is $3t^2-${2*a}t+${b}$. Its derivative is $6t-${2*a}$, which gives $${4*a}$ at the requested time.`)),
  family([[2,5],[3,7],[4,9],[5,11]], (a,b) =>
    numeric(m`A particle has velocity $v(t)=(t-${a})(t-${b})^2$ on $[0,${b+1}]$. At which time does it reverse direction?`,
      a,[0,b,b+1],
      m`The linear factor changes sign at $${a}$. The squared factor is positive on both sides of $${b}$, so stopping there does not reverse the direction.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`For $f(x)=${a}|x-${b}|+x$, find its left derivative at $x=${b}$.`,
      1-a,[a+1,-a,1],
      m`On the left, $|x-${b}|=${b}-x$. The slope of that branch is $-${a}+1$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`A sphere has radius $${a}$ in. Use a differential to estimate its volume increase for a radius increase of $1/${b}$ in. Enter the coefficient of $\pi$ in the estimate.`,
      fraction(4*a*a,b),[fraction(4*a,b),fraction(a*a,2*b),fraction(4*a*a*a,b)],
      m`Since $V=4\pi r^3/3$, its differential is $4\pi r^2\,dr$. Substitute $r=${a}$ and $dr=1/${b}$.`)),
  family([[2,4],[3,7],[4,9],[5,12]], (a,b) =>
    numeric(m`For $x<1$, let $f(x)=ax^2+${b}$. For $x\ge1$, let $f(x)=${2*a}x+c$. What $c$ is required for differentiability at $1$?`,
      b-a,[b+a,b,b+2*a],
      m`Matching slopes gives $2a=${2*a}$, so $a=${a}$. Matching values then gives $${a}+${b}=${2*a}+c$.`)),
  family([[2,5],[3,7],[4,9],[5,11]], (a,b) =>
    numeric(m`The graph of $f$ has tangent $y=${a}x+${b}$ at $x=1$. What is $\lim_{h\to0}\dfrac{f(1+h)-f(1)}{2h}$?`,
      fraction(a,2),[a,2*a,b],
      m`The tangent slope is $f'(1)=${a}$. The displayed quotient is half the difference quotient that defines that derivative.`)),
  family([[2,5],[3,7],[4,9],[5,11]], (a,b) =>
    numeric(m`A car moves along a line with position $s(t)=${b}t-${a}t^2$ feet. What is its speed at $t=${b}$ in ft/s?`,
      b*(2*a-1),[b*(1-2*a),b,2*a*b],
      m`Velocity is $${b}-${2*a}t$. At the specified time it is $${b*(1-2*a)}$ ft/s. Speed is the magnitude of velocity.`)),
  family([[3,5],[4,6],[5,7],[6,8]], (a,b) =>
    numeric(m`Find the slope of the normal line to $f(x)=\sqrt{x}$ at $x=${a*a}$.`,
      -2*a,[fraction(-1,2*a),2*a,-b],
      m`The tangent slope is $1/(2\sqrt{${a*a}})=1/${2*a}$. The normal slope is its negative reciprocal.`)),
  q(m`Suppose $f$ is differentiable at $2$, with $f(2)=5$ and $f'(2)=0$. What is the tangent line at that point?`,
    '$y=5$',['$x=2$','$y=0$','$y=2$'],
    'The slope is zero and the point of tangency has height five. The line through it with zero slope has constant height five.'),
  q('A differentiable function is concave down on an interval containing $a$ and $b$. How does its tangent at $a$ estimate $f(b)$?',
    'The tangent value is at least $f(b)$.', ['The tangent value is at most $f(b)$.','The tangent value must be negative.','The tangent value always equals $f(b)$.'],
    'For a concave-down function, the graph lies on or below each of its tangent lines on the interval.'),
  q("A tangent at $x=2$ has equation $y=5-3(x-2)$. What ordered pair gives $(f(2),f'(2))$?", "$(5,-3)$", ["$(2,5)$", "$(-3,5)$", "$(5,3)$"], "At the point of tangency the line gives the function value, and its slope is the derivative."),
  q("If $s$ is measured in meters and $t$ in seconds, what are the units of $s''(t)$?", "m/s²", ["m/s", "m²/s", "s/m"], "Each time derivative introduces one additional factor of inverse seconds."),
  q("If $f'(3)=-4$, what is $\\lim_{h\\to0}[f(3-2h)-f(3)]/h$?", "$8$", ["$-8$", "$-4$", "$-2$"], "With $k=-2h$, the displayed quotient is $-2$ times the quotient defining $f'(3)$."),
  q("A particle has $v(4)=-3$ ft/s and $a(4)=2$ ft/s². Is its speed increasing at that instant?", "Its speed is decreasing.", ["Its speed is increasing.", "Its speed is zero.", "Its speed is constant because velocity is negative."], "Negative velocity and positive acceleration mean that the velocity is moving toward zero, so its magnitude is decreasing."),
  q("What is the slope of the secant through $(a,f(a))$ and $(b,f(b))$ when $a\\ne b$?", "$\\dfrac{f(b)-f(a)}{b-a}$", ["$\\dfrac{f(b)+f(a)}{b-a}$", "$f'(a)$", "$\\dfrac{b-a}{f(b)-f(a)}$"], "Secant slope is the change in output divided by the change in input."),
  q("For $f(x)=x^2$, which tangent line gives the linear approximation at $x=-2$?", "$y=4-4(x+2)$", ["$y=4+4(x+2)$", "$y=-2-4(x-4)$", "$y=4-2(x+2)$"], "At $-2$ the height is $4$ and the slope is $2(-2)=-4$."),
  q("Which graph behavior prevents a finite derivative at $x=a$ even when the function is continuous there?", "The two finite one-sided slopes are unequal.", ["The tangent is horizontal.", "The function is decreasing near $a$.", "The function value at $a$ is zero."], "The two one-sided limits of the difference quotient must agree for the derivative to exist."),
  q("The position $s(t)=12-2t$ is recorded in feet. What is its acceleration?", "$0$ ft/s²", ["$-2$ ft/s²", "$2$ ft/s²", "$12$ ft/s²"], "Velocity is the constant $-2$ ft/s. Its time derivative is zero."),
];

const rules = [
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Find $f'(1)$ for $f(x)=x^{${a}}e^{${b}(x-1)}$.`,
      a+b,[a,b,a*b],
      m`At $x=1$, both original factors are $1$. Their derivatives at that point are $${a}$ and $${b}$, so the product rule gives their sum.`)),
  family([[2,3],[3,5],[4,7],[5,9]], (a,b) =>
    numeric(m`Find $f'(1)$ for $f(x)=\dfrac{${a}x+${b}}{1+x^2}$.`,
      fraction(-b,2),[fraction(a+b,2),fraction(-b,4),a],
      m`The denominator is $2$ and its derivative is $2$ at $1$. The quotient rule gives $[2\cdot${a}-2(${a}+${b})]/4$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Find $f'(1)$ for $f(x)=\cos(\pi/2+${a}(x^{${b}}-1))$.`,
      -a*b,[a*b,-a,-b],
      m`At $1$, the argument of cosine is $\pi/2$, so its outer derivative is $-1$. The inner derivative there is $${a*b}$.`)),
  family([[2,3],[3,5],[4,7],[5,9]], (a,b) =>
    numeric(m`Find $f''(0)$ for $f(x)=e^{${a}x^2+${b}x}$.`,
      2*a+b*b,[2*a,b*b,2*a+b],
      m`For $e^{g(x)}$ the second derivative is $e^{g(x)}[(g'(x))^2+g''(x)]$. At zero these contributions are $${b*b}$ and $${2*a}$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Find the slope of $y=\arctan(${a}x)$ at $x=${b}$.`,
      fraction(a,1+a*a*b*b),[fraction(1,1+a*a*b*b),fraction(a,1+a*b),fraction(a,1+b*b)],
      m`The outer derivative at $u$ is $1/(1+u^2)$. Here $u=${a*b}$ and the inner derivative is $${a}$.`)),
  family([[2,5],[3,7],[4,9],[5,11]], (a,b) =>
    numeric(m`Evaluate $f'(1)$ for $f(x)=(x^{${a}})^{${b}x}$, defined for $x>0$.`,
      a*b,[a+b,a,b],
      m`Take logarithms to obtain $\ln f(x)=${a*b}x\ln x$. At $1$, the logarithmic derivative is $${a*b}$ and $f(1)=1$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Evaluate $\dfrac{d}{dx}\ln|x^2-${b*b}|$ at $x=${a}$.`,
      fraction(2*a,a*a-b*b),[fraction(-2*a,a*a-b*b),fraction(a,a*a-b*b),fraction(2*a,a*a+b*b)],
      m`The derivative of $\ln|u|$ is $u'/u$ for $u\ne0$. At $${a}$ the argument is nonzero and its derivative is $${2*a}$.`)),
  family([[2,5],[3,7],[4,9],[5,11]], (a,b) =>
    numeric(m`Suppose $g(0)=${a}$, $g'(0)=-${b}$, $f'(${a})=3$ and $f'(0)=1$. Find $(f\circ g)'(0)$.`,
      -3*b,[-b,3*b,-3*a],
      m`The outer derivative must be evaluated at $g(0)=${a}$. Multiply $3$ by $g'(0)=-${b}$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Find the derivative of $f(x)=\dfrac{x^{${a}}}{x^{${a}}+${b}}$ at $x=1$.`,
      fraction(a*b,(1+b)**2),[fraction(a,(1+b)**2),fraction(a*b,1+b),fraction(-a*b,(1+b)**2)],
      m`The two terms containing $x^{${2*a-1}}$ cancel in the quotient-rule numerator. The remaining numerator at $1$ is $${a*b}$ and the denominator is $(1+${b})^2$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Find $f''(0)$ for $f(x)=(1+${a}x)(1+${b}x)^2$.`,
      4*a*b+2*b*b,[2*b*b,2*a*b+2*b*b,4*a*b],
      m`The coefficient of $x^2$ in the product is $${b*b}+${2*a*b}$. Multiply that coefficient by $2$ to obtain $f''(0)$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Let $f(x)=\sin(${a}x)+\cos(${b}x)$. Evaluate $f''(0)$.`,
      -b*b,[-a*a,b*b,-(a*a+b*b)],
      m`The sine term gives $-${a*a}\sin(${a}x)$ and vanishes at zero. The cosine term gives $-${b*b}\cos(${b}x)$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Suppose $f(${a})=${b}$ and $f'(${a})=-${a}$. The inverse is differentiable at $${b}$. What is $(f^{-1})'(${b})$?`,
      fraction(-1,a),[fraction(1,a),fraction(-1,b),-a],
      m`Differentiate $f(f^{-1}(y))=y$. Since $f^{-1}(${b})=${a}$, the inverse derivative is the reciprocal of $f'(${a})=-${a}$.`)),
  q(m`Which expression is the derivative of $\sqrt{1+x^4}$?`,
    m`$\dfrac{2x^3}{\sqrt{1+x^4}}$`,[m`$\dfrac{1}{2\sqrt{1+x^4}}$`,m`$\dfrac{4x^3}{\sqrt{1+x^4}}$`,m`$2x^3\sqrt{1+x^4}$`],
    'The outer square root gives a reciprocal factor with denominator twice the square root. The inner power gives four times the cube of the input.'),
  q(m`On which interval is the derivative of $\arcsin(2x)$ finite?`,
    '$(-1/2,1/2)$',['$[-1/2,1/2]$','$(-1,1)$','All real numbers.'],
    m`The derivative is $2/\sqrt{1-4x^2}$, so the radicand must be strictly positive.`),
  q("If $f(x)=e^{\\sin x}$, find $f'(0)$.", "$1$", ["$0$", "$e$", "$-1$"], "The chain rule gives $e^{\\sin x}\\cos x$. At zero both factors are $1$."),
  q("Differentiate $g(x)=3^{x^2}$ for real $x$.", "$2x(\\ln 3)3^{x^2}$", ["$2x3^{x^2}$", "$(\\ln 3)3^{2x}$", "$x^2 3^{x^2-1}$"], "The exponential with base $3$ contributes a factor $\\ln 3$, and the inner exponent contributes $2x$."),
  q("Find $\\left.\\dfrac{d}{dx}\\tan(2x)\\right|_{x=0}$.", "$2$", ["$0$", "$1$", "$4$"], "The derivative is $2\\sec^2(2x)$. At zero the secant equals $1$."),
  q("Let $h=fg$ with $f(2)=0$, $f'(2)=5$, $g(2)=3$ and $g'(2)=2$. Find $h'(2)$.", "$15$", ["$0$", "$10$", "$17$"], "The term $f'(2)g(2)$ equals $15$ and the term $f(2)g'(2)$ vanishes."),
  q("Which is the derivative of $\\ln(\\cos x)$ near $x=0$?", "$-\\tan x$", ["$\\tan x$", "$-\\sin x$", "$\\sec x$"], "Apply the logarithm derivative to $u=\\cos x>0$. The quotient is $-\\sin x/\\cos x$."),
  q("If $f(x)=x^2e^x$, which value equals $f''(0)$?", "$2$", ["$0$", "$1$", "$4$"], "The first derivative is $e^x(x^2+2x)$. Apply the product rule again and evaluate $e^x(x^2+4x+2)$ at zero."),
  q("If $f(x)=1/(1-x)$, where does its derivative exist?", "At every real input except $1$.", ["At every real input.", "Only for $x<1$.", "Only for $x>1$."], "The quotient rule yields $1/(1-x)^2$ wherever the original denominator is nonzero."),
  q("Differentiate $\\arcsin(x/3)$ for $-3<x<3$.", "$1/\\sqrt{9-x^2}$", ["$3/\\sqrt{9-x^2}$", "$1/(9+x^2)$", "$-1/\\sqrt{9-x^2}$"], "The chain rule gives $(1/3)/\\sqrt{1-x^2/9}$. Since $3$ is positive, the result simplifies to $1/\\sqrt{9-x^2}$."),
];

const rates = [
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Find the tangent slope to $x^2+xy+y^2=${a*a+a*b+b*b}$ at $(${a},${b})$.`,
      fraction(-(2*a+b),a+2*b),[fraction(2*a+b,a+2*b),fraction(-a,b),fraction(-(a+2*b),2*a+b)],
      m`The derivative of $xy$ is $y+xy'$. Collecting the terms gives $(x+2y)y'=-(2x+y)$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`On $x^2+y^2=${a*a+b*b}$, find $y''$ at $(${a},${b})$.`,
      fraction(-(a*a+b*b),b**3),[fraction(a*a+b*b,b**3),fraction(-1,b),fraction(-a,b)],
      m`First $y'=-x/y$. Then $1+(y')^2+yy''=0$, so at the given point $y''=-[1+(${a}/${b})^2]/${b}$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`A circular oil slick has radius $${a}$ ft, increasing at $${b}$ ft/min. What is the coefficient of $\pi$ in the rate of increase of its area in ft²/min?`,
      2*a*b,[a*b,2*a,2*a*b+b],
      m`Differentiate $A=\pi r^2$ with respect to time to get $dA/dt=2\pi r\,dr/dt$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`A sphere has radius $${a}$ in and its volume decreases at $${4*a*a*b}\pi$ in³/s. What is its signed radius rate in in/s?`,
      -b,[b,-2*b,-(a+1)*b],
      m`Use $dV/dt=4\pi r^2\,dr/dt$. The given volume rate is negative, and dividing it by $${4*a*a}\pi$ gives $-${b}$.`)),
  family([[1,2],[2,3],[3,4],[4,5]], (k,v) =>
    numeric(m`A $${13*k}$-ft ladder has its foot $${5*k}$ ft from a wall. Its foot moves away at $${v}$ ft/s. Find the signed rate of change of the height in ft/s.`,
      fraction(-5*v,12),[fraction(5*v,12),fraction(-12*v,5),-v],
      m`The height is $${12*k}$ ft by the Pythagorean theorem. Differentiating $x^2+y^2=L^2$ gives $y'=-xx'/y$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`A rectangular tank has a fixed base $${a}$ ft by $${b}$ ft. Water enters at $${2*a*b}$ ft³/min. At what rate does its depth increase in ft/min?`,
      2,[1,a*b,2*a*b],
      m`The volume is base area times depth. Divide the inflow by the fixed base area $${a*b}$ ft².`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`A rectangle has length $${2*a}$ ft and width $${b}$ ft. Its length grows at $${a}$ ft/s and its width shrinks at $${b}$ ft/s. Find the signed area rate in ft²/s.`,
      -a*b,[a*b,-2*a*b,3*a*b],
      m`The two product-rule terms are $${a}\cdot${b}$ and $${2*a}\cdot(-${b})$. Their sum is negative.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`A cone has a fixed ratio $r/h=1/${a}$. At water depth $${a*b}$ ft the inflow is $${2*b*b}\pi$ ft³/min. What is the depth rate in ft/min?`,
      2,[1,2*a,2*b],
      m`Using the fixed ratio gives $V=\pi h^3/(3\cdot${a*a})$. Differentiate to obtain $dV/dt=\pi h^2 h'/${a*a}$. At the specified depth the coefficient of $h'$ is $${b*b}\pi$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`A $${b}$-ft-tall person walks away from a $${3*b}$-ft lamp at $${2*a}$ ft/s. What is the rate of motion of the tip of the shadow away from the lamp, in ft/s?`,
      3*a,[a,2*a,4*a],
      m`Similar triangles give $s=x/2$, where $x$ is the person's distance from the lamp and $s$ is the shadow length. The tip is at $x+s$, so its rate is $3x'/2$.`)),
  family([[1,2],[2,3],[3,4],[4,5]], (k,v) =>
    numeric(m`An observer is $${4*k}$ ft from a wall. A marker moves up the wall at $${v}$ ft/s. Find the rate of increase of its elevation angle when the marker is $${3*k}$ ft high, in rad/s.`,
      fraction(4*v,25*k),[fraction(v,4*k),fraction(3*v,25*k),fraction(4*v,5*k)],
      m`Use $\tan\theta=h/(${4*k})$. At the stated height, $\sec^2\theta=25/16$. Divide $h'/(${4*k})$ by this value.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`A population grows exponentially and doubles every $${a}$ hours. What is its growth factor over $${a*b}$ hours?`,
      2**b,[b,2**(b+1),2**(b-1)],
      m`The time interval contains $${b}$ doubling periods, so the growth factor is $2^{${b}}$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`A sample starts at $${2**b*a}$ g and decays exponentially with a $${a}$-hour half-life. How many grams remain after $${a*b}$ hours?`,
      a,[2*a,a*b,2**b],
      m`There are $${b}$ half-lives in the elapsed time. Divide the initial mass by $2^{${b}}$.`)),
  q(m`At the point $(2,0)$ of $x^2+y^2=4$, what is the tangent line?`,
    '$x=2$',['$y=0$','$y=x-2$','$y=2$'],
    m`Near the point the right branch is $x=\sqrt{4-y^2}$. Its derivative with respect to $y$ at zero is zero, so the tangent is vertical.`),
  q(m`A model obeys $P'=kP$ with constant $k>0$. What stays constant as the population increases?`,
    'The relative growth rate.',['The absolute growth rate.','The population.','The increase over successive equal time intervals.'],
    m`The quotient $P'/P=k$ is constant. The rate $P'$ increases with $P$.`),
  q("A square side decreases at $3$ cm/s. When its area is $25$ cm², what is the signed area rate?", "$-30$ cm²/s", ["$30$ cm²/s", "$-15$ cm²/s", "$-75$ cm²/s"], "At that instant the side is $5$ cm. From $A=s^2$, the derivative is $2s\\,s'=2(5)(-3)$."),
  q("For $x^2+4y^2=16$, which point has a horizontal tangent?", "$(0,2)$", ["$(4,0)$", "$(-4,0)$", "$(2,\\sqrt3)$"], "Where $y\\ne0$, the slope is $-x/(4y)$. It vanishes at $(0,2)$ among the four choices."),
  q("At a point where $xy=12$, $x=3$ and $dx/dt=2$. What is $dy/dt$?", "$-8/3$", ["$8/3$", "$-2/3$", "$-6$"], "At the point $y=4$. Differentiating the product gives $2(4)+3\\,dy/dt=0$."),
  q("A circle's area grows at a fixed rate. What happens to $dr/dt$ as its positive radius increases?", "It decreases.", ["It increases.", "It stays constant.", "It becomes negative."], "The radius rate is the positive constant area rate divided by $2\\pi r$, which decreases as $r$ increases."),
  q("A rectangle keeps its area constant as its length increases. What happens to its width at that instant?", "It decreases.", ["It increases.", "It stays constant.", "Its rate always equals minus the length rate."], "The product rule gives $W'=-(W/L)L'$ for positive sides. The factor multiplying the positive length rate is negative."),
  q("A sample loses half its mass every six hours under exponential decay. What fraction remains after nine hours?", "$1/(2\\sqrt2)$", ["$1/4$", "$1/3$", "$3/8$"], "Nine hours is $3/2$ half-lives, so the multiplier is $(1/2)^{3/2}$."),
  q("A point moves horizontally with $x'=4$ ft/s on the line $y=3$ ft. What is the rate of its distance from the origin at $x=0$?", "$0$ ft/s", ["$3$ ft/s", "$4$ ft/s", "$7$ ft/s"], "With $d=\\sqrt{x^2+9}$, differentiating gives $d'=xx'/d$. At $x=0$ the numerator vanishes and $d=3$."),
  q("For $e^y+x=3$, find the tangent slope at $(2,0)$.", "$-1$", ["$1$", "$0$", "$-2$"], "Differentiate to obtain $e^y y'+1=0$. The exponential factor at the stated point is $1$."),
];

const applications = [
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Find the value of $c$ guaranteed by the Mean Value Theorem for $f(x)=x^2$ on $[${a},${a+b}]$.`,
      fraction(2*a+b,2),[2*a+b,a,a+b],
      m`The secant slope is $${2*a+b}$. Set the derivative $2c$ equal to that slope and solve for $c$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Let $f(x)=(x-${a})(x-${a+b})$. Find the value of $c$ given by Rolle’s theorem on $[${a},${a+b}]$.`,
      fraction(2*a+b,2),[fraction(b,2),a,a+b],
      m`The endpoint values are zero and the polynomial is differentiable. Its derivative is $2x-${2*a+b}$, which vanishes at the midpoint.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Find the absolute minimum value of $f(x)=x^2-${2*a}x+${b}$ on $[0,${2*a+1}]$.`,
      b-a*a,[b,b+a*a,-a*a],
      m`Complete the square to obtain $(x-${a})^2+${b-a*a}$. The square is zero at an interior point of the interval.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    q(m`Suppose $f'(x)=(x-${a})^2(x-${b})$. How should the critical point at $x=${a}$ be classified?`,
      'Neither a local maximum nor a local minimum.',
      ['A strict local maximum.','A strict local minimum.','A critical point where the derivative is undefined.'],
      m`The squared factor is positive on both sides of $${a}$, and $x-${b}$ remains negative there. The derivative vanishes at $${a}$ without changing sign.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Find the $x$-coordinate of the inflection point of $f(x)=x^3-${3*a}x^2+${b}$.`,
      a,[0,2*a,3*a],
      m`The second derivative is $6x-${6*a}$. It changes sign at $x=${a}$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`A garden uses $${4*a*b}$ ft of fencing for three sides against a straight wall. What width perpendicular to the wall maximizes the area, in feet?`,
      a*b,[2*a*b,4*a*b,a+b],
      m`If the width is $x$, the area is $x(${4*a*b}-2x)$. Its derivative vanishes at $x=${a*b}$ and the quadratic opens downward.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Cut equal squares from the corners of a $${6*a}$-in square sheet to make an open box. What cut length maximizes its volume, in inches?`,
      a,[2*a,3*a,a+b],
      m`For cut length $x$, the volume is $x(${6*a}-2x)^2$. Its derivative is $(${6*a}-2x)(${6*a}-6x)$. The only interior critical point is $x=${a}$, while the volume is zero at the endpoints.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Evaluate $\lim_{x\to0}\dfrac{e^{${a}x}-1-${a}x}{${b}x^2}$.`,
      fraction(a*a,2*b),[0,fraction(a,2*b),fraction(a*a,b)],
      m`Two applications of L’Hôpital’s rule give the limit of $\dfrac{${a*a}e^{${a}x}}{${2*b}}$ as $x\to0$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Evaluate $\lim_{x\to+\infty}\dfrac{\ln(${a}x)}{x^{${b}}}$.`,
      0,[1,a,b],
      m`Both original functions tend to infinity. Their derivative quotient is $1/(${b}x^{${b}})$, which tends to zero.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Illinois MATH 221 practice. For $f(x)=x^2-${a*a+b}$, find the next Newton iterate starting from $x_0=${a}$.`,
      fraction(2*a*a+b,2*a),[fraction(2*a*a-b,2*a),a,a+b],
      m`Here $f(x_0)=-${b}$ and $f'(x_0)=${2*a}$. Subtracting the negative ratio adds $${b}/${2*a}$ to the starting value.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    q(m`Suppose $f'(x)=(x-${a})(x-${b})$ throughout the real line. On which open interval is $f$ strictly decreasing?`,
      m`$(${a},${b})$`,[m`$(-\infty,${a})$`,m`$(${b},\infty)$`,m`$(-\infty,\infty)$`],
      'The factors have opposite signs only between the two roots. The derivative is negative there.')),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Find the $x$-coordinate of the point on the line $y=${a*(1+b*b)}-${b}x$ closest to the origin.`,
      a*b,[a,a*(1+b*b),a*b+1],
      m`Minimize the squared distance $x^2+[${a*(1+b*b)}-${b}x]^2$. Its derivative vanishes at $x=${a*b}$ and the quadratic coefficient is positive.`)),
  q(m`Can the Mean Value Theorem be applied to $f(x)=|x|$ on $[-2,3]$?`,
    'No, because differentiability fails inside the interval.',
    ['Yes, because the function is continuous.','No, because the endpoint values differ.','Yes, because both endpoint slopes exist.'],
    'The theorem requires differentiability at every interior point. The corner at zero violates that hypothesis.'),
  q(m`Which hypothesis guarantees that $f$ attains an absolute maximum on $[0,4]$?`,
    'Continuity on the entire closed interval.',['Differentiability only on the open interval.','A zero derivative at one point.','A positive average rate of change.'],
    'The Extreme Value Theorem applies to continuous functions on closed, bounded intervals.'),
  q("A differentiable function has $f'(x)>0$ for $x<2$ and $f'(x)<0$ for $x>2$. What occurs at $2$?", "A local maximum.", ["A local minimum.", "An inflection point is guaranteed.", "Neither kind of local extremum."], "The function increases to $2$ and decreases after $2$, so nearby function values are smaller than $f(2)$."),
  q("Which conclusion is justified by $f''(x)<0$ on $(1,3)$?", "The graph is concave down there.", ["The function is decreasing there.", "The graph has a local maximum there.", "The function has negative values there."], "A negative second derivative makes tangent slopes decrease. The slopes themselves can be positive, negative or zero."),
  q("If $f'(x)=0$ on $(a,b)$ and $f$ is continuous on $[a,b]$, what does the Mean Value Theorem imply?", "$f$ is constant on $[a,b]$.", ["$f$ equals zero on $[a,b]$.", "$f$ is strictly increasing.", "Only the endpoint values agree."], "On any subinterval the secant slope equals an interior derivative, so any two function values agree."),
  q("Evaluate $\\lim_{x\\to0}\\dfrac{\\sin(4x)}{e^{2x}-1}$.", "$2$", ["$1/2$", "$4$", "$0$"], "Both numerator and denominator vanish. Their derivative quotient is $4\\cos(4x)/(2e^{2x})$, which tends to $2$."),
  q("For $f(x)=x^3$, which statement about $x=0$ is correct?", "It is a stationary inflection point.", ["It is a strict local minimum.", "It is a strict local maximum.", "It is neither stationary nor an inflection point."], "The first derivative vanishes at zero. The second derivative $6x$ changes sign there, while the first derivative stays positive on both sides."),
  q("The derivative at an interior point of a differentiable function is nonzero. What does Fermat’s theorem rule out at that point?", "A local maximum or minimum.", ["An inflection point.", "A tangent line.", "A change of concavity."], "An interior local extremum at a differentiable point would require zero derivative."),
  q("An objective is $A(x)=x(20-2x)$ with $0\\le x\\le3$. Where is its absolute maximum on this interval?", "$x=3$", ["$x=5$", "$x=0$", "$x=2$"], "Its derivative is $20-4x>0$ throughout the feasible interval. The maximum occurs at the right endpoint."),
  q("What is $\\lim_{x\\to0^+}x\\ln x$?", "$0$", ["$-\\infty$", "$1$", "$-1$"], "Rewrite the product as $\\ln x/(1/x)$. The derivative quotient is $-x$ and tends to zero."),
];

const integrals = [
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Use two equal subintervals and right endpoints to approximate $\int_0^{2}(${a}x^2+${b})\,dx$.`,
      5*a+2*b,[a+2*b,4*a+2*b,5*a+b],
      m`The width is $1$ and the sample points are $1$ and $2$. The sum is $(${a}+${b})+(4\cdot${a}+${b})$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Compute $\int_0^${a}(3x^2-${b})\,dx$.`,
      a**3-a*b,[a**3-b,a**3+a*b,3*a**3-a*b],
      m`An antiderivative is $x^3-${b}x$. Evaluate it at $${a}$ and subtract its value at zero.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Let $F(x)=\int_0^{${a}x}(t^2+${b})\,dt$. Find $F'(1)$.`,
      a*(a*a+b),[a*a+b,a+b,a*(a+b)],
      m`The Fundamental Theorem gives the integrand evaluated at $${a}x$. The chain rule multiplies that value by $${a}$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Let $F(x)=\int_x^{${a}x}(t+${b})\,dt$. Find $F'(1)$.`,
      a*(a+b)-(1+b),[a*(a+b)+(1+b),a*(a+b),a+b-1],
      m`The upper bound contributes $${a}(${a}+${b})$ and the lower bound contributes $-(1+${b})$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Evaluate $\int_0^1 ${2*a}x(1+${a}x^2)^{${b}}\,dx$.`,
      fraction((1+a)**(b+1)-1,b+1),[fraction((1+a)**(b+1),b+1),fraction((1+a)**b-1,b),fraction((1+a)**(b+1)-1,b)],
      m`Set $u=1+${a}x^2$. Its differential is the factor in front of the power and the new limits are $1$ and $${1+a}$. Integrate $u^{${b}}$ on that interval.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`A particle has velocity $v(t)=t-${a}$ m/s on $[0,${a+b}]$. Find total distance traveled in meters.`,
      fraction(a*a+b*b,2),[fraction(b*b-a*a,2),fraction((a+b)**2,2),fraction(b*b,2)],
      m`The velocity changes sign at $${a}$. The areas under its absolute value are triangles of base and height $${a}$ and $${b}$ respectively.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Find the average value of $f(x)=${a}x^2+${b}$ on $[0,3]$.`,
      3*a+b,[9*a+3*b,9*a+b,3*a],
      m`The definite integral is $9\cdot${a}+3\cdot${b}$. Divide it by the interval length $3$.`)),
  family([[2],[3],[4],[5]], a =>
    numeric(m`Find the area enclosed by $y=${a}x$ and $y=x^2$ on $[0,${a}]$.`,
      fraction(a**3,6),[fraction(a**3,3),fraction(a**3,2),0],
      m`The line lies above the parabola between their intersections. Integrate $${a}x-x^2$ from $0$ to $${a}$.`)),
  family([[2],[3],[4],[5]], a =>
    numeric(m`Illinois MATH 221 practice. The region under $y=x$ on $[0,${a}]$ rotates about the $x$-axis. What is the coefficient of $\pi$ in its volume?`,
      fraction(a**3,3),[fraction(a*a,2),a**3,fraction(a**3,2)],
      m`Each disk perpendicular to the axis has radius $x$. Integrating the disk area $\pi x^2$ from zero to $${a}$ gives the volume.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Illinois MATH 221 practice. A spring exerts $${2*a}$ N at a stretch of $1$ m. How much work, in joules, stretches it from equilibrium to $${b}$ m if it obeys Hooke’s law?`,
      a*b*b,[2*a*b*b,a*b,2*a*b],
      m`The force at stretch $x$ is $${2*a}x$. Integrating from zero to $${b}$ gives $${a}\cdot${b}^2$ joules.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`Suppose $\int_0^2 f(x)\,dx=${a}$ and $\int_0^5 f(x)\,dx=${b}$. Find $\int_5^2 3f(x)\,dx$.`,
      3*(a-b),[3*(b-a),a-b,3*(a+b)],
      m`Additivity gives $\int_2^5 f(x)\,dx=${b}-${a}$. Reverse the bounds and multiply by $3$.`)),
  family([[2,3],[3,4],[4,5],[5,6]], (a,b) =>
    numeric(m`A rate is $r(t)=${a}e^{${b}t}$ units per hour. What is the coefficient of $e^{${b}}-1$ in the net change from $t=0$ to $t=1$?`,
      fraction(a,b),[fraction(b,a),a,a*b],
      m`Integrate $r(t)$ to obtain $(${a}/${b})e^{${b}t}$. The endpoint difference is the requested factor times $${fraction(a,b)}$.`)),
  q(m`What must be true for $F(x)=\int_0^x f(t)\,dt$ to be decreasing throughout an open interval when $f$ is continuous there?`,
    '$f(x)\le0$ throughout the interval.',['$f(x)\ge0$ throughout the interval.','$F(x)<0$ throughout the interval.','$f$ is strictly decreasing throughout the interval.'],
    m`Since $F'=f$, an everywhere differentiable decreasing function has a nonpositive derivative.`),
  q(m`If $F$ and $G$ are antiderivatives of a continuous function on the same interval, what can be concluded about $F-G$?`,
    'It is constant on the interval.',['It equals zero on the interval.','It equals the original integrand.','It has a positive derivative.'],
    'Their derivative difference is zero everywhere in the interior, so the Mean Value Theorem gives the same difference at all points.'),
  q("Suppose $\\int_1^4 f(x)\\,dx=-7$. Find $\\int_4^1 f(x)\\,dx$.", "$7$", ["$-7$", "$0$", "$14$"], "Reversing the limits negates the signed integral."),
  q("If $f$ is continuous and nonnegative on $[2,5]$, what is the geometric area between its graph and the axis?", "$\\int_2^5 f(x)\\,dx$", ["$\\int_5^2 f(x)\\,dx$", "$f(5)-f(2)$", "$3f(5)$"], "Each vertical slice has height $f(x)$, so the signed integral already gives the geometric area."),
  q("If $F(x)=\\int_x^4 t^2\\,dt$, what is $F'(2)$?", "$-4$", ["$4$", "$16$", "$-16$"], "The lower endpoint is the moving bound. Its contribution is $-x^2$, giving $-4$ at $x=2$."),
  q("Find $\\int_{-2}^2(x^3+1)\\,dx$.", "$4$", ["$0$", "$2$", "$8$"], "The cubic is odd and its integral over the symmetric interval vanishes. The constant contributes the interval length $4$."),
  q("For positive continuous $f$, how does $A(x)=\\int_0^x f(t)\\,dt$ change?", "It is strictly increasing.", ["It is strictly decreasing.", "It is constant.", "It is always concave up."], "The Fundamental Theorem gives $A'=f>0$. Concavity would require information about changes in $f$."),
  q("Use $u=5-2x$ to rewrite $\\int_0^1 2(5-2x)^3\\,dx$. Which is the transformed integral with increasing bounds?", "$\\int_3^5 u^3\\,du$", ["$\\int_0^1 u^3\\,du$", "$\\int_3^5 2u^3\\,du$", "$\\int_5^3 u^3\\,du$"], "The new endpoints are $5$ and $3$, and $du=-2dx$. Absorb the negative sign by reversing the new bounds."),
  q("Find the average value of $f(x)=2x+3$ on $[1,5]$.", "$9$", ["$36$", "$8$", "$12$"], "The integral is $[x^2+3x]_1^5=36$. Divide by the interval length $4$."),
  q("For a particle with $v(t)=t-1$ on $[0,2]$, what is its total distance?", "$1$", ["$0$", "$2$", "$1/2$"], "The two triangles under $|v(t)|$ each have base and height $1$, so the total area is $1$."),
];

export const calculusAdditionalQuestions = {
  'unit-1': limits,
  'unit-2': derivative,
  'unit-3': rules,
  'unit-4': rates,
  'unit-5': applications,
  'unit-6': integrals,
};
