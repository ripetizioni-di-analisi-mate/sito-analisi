import { course as C } from '../lesson.mjs';
import { unit as U, commonCore, mathFramework, texasMath } from './material.mjs';

const sources = [commonCore, mathFramework, texasMath];

export const advancedHighSchoolMath = [
  C('hs-algebra-2', 'Algebra II', 'Extend algebra to polynomial, rational, radical, exponential and logarithmic functions.', 'Algebra I and basic geometry.', sources, [
    U('Polynomials and complex numbers',
      'If $f(a)=0$ for a polynomial $f$, then $x-a$ is a factor. A quadratic with negative discriminant has two nonreal complex roots. The imaginary unit satisfies $i^2=-1$.',
      [
        ['Factor $x^3-4x^2+x+6$ given that $x=2$ is a zero.', 'Dividing by $x-2$ gives $x^2-2x-3=(x-3)(x+1)$. Thus $f(x)=(x-2)(x-3)(x+1)$.'],
        ['Solve $x^2-6x+13=0$ over the complex numbers.', 'Completing the square gives $(x-3)^2=-4$. Therefore $x=3+2i$ or $x=3-2i$.'],
      ],
      [
        ['Evaluate a polynomial', 'Find $f(-2)$ for $f(x)=x^3+2x^2-3x+1$.', 'Substitution gives $-8+8+6+1=7$.', '7'],
        ['A missing coefficient', 'The polynomial $x^3+kx-6$ has a zero at $x=2$. Find $k$.', 'Substitute $2$ to get $8+2k-6=0$, so $k=-1$.', '-1'],
        ['Complex roots', 'Find the two complex roots of $x^2+4x+8=0$. Enter the positive imaginary coefficient.', 'Complete the square to get $(x+2)^2=-4$. The roots are $-2\\pm2i$. The positive coefficient is $2$.', '2'],
      ],
      ['Which is a factor of $x^3-9x$?', '$x-3$', ['$x-2$', '$x+1$', '$x+9$'], 'Factor as $x(x^2-9)=x(x-3)(x+3)$.']),
    U('Radicals and rational equations',
      'A real square root requires a nonnegative radicand. A rational expression is undefined at zeros of its denominator. Squaring or multiplying by an expression can introduce candidates that must be checked in the original equation.',
      [
        ['Solve $\\sqrt{x+4}=x-2$.', 'The right side requires $x\\ge2$. Squaring gives $x+4=x^2-4x+4$, so $x(x-5)=0$. Only $5$ meets the sign restriction and satisfies the original equation.'],
        ['Solve $1/(x-1)=2/(x+1)$.', 'Exclude $x=1$ and $x=-1$. Cross-multiplication gives $x+1=2x-2$, so $x=3$, which is allowed.'],
      ],
      [
        ['Rational exponent', 'Evaluate $27^{2/3}$.', 'The cube root of $27$ is $3$. Squaring it gives $9$.', '9'],
        ['Solve with a radical', 'Solve $\\sqrt{x+7}=4$.', 'Square to get $x+7=16$, so $x=9$. The original equation becomes $\\sqrt{16}=4$.', '9'],
        ['Rational equation', 'Solve $3/(x+2)=1/4$.', 'Exclude $-2$, then multiply through to get $12=x+2$. Thus $x=10$.', '10'],
      ],
      ['What value remains excluded from $(x^2-16)/(x-4)$ after simplification?', '$4$', ['$-4$', '$0$', '$8$'], 'The original denominator vanishes at $4$, although the remaining factor $x+4$ is defined there.']),
    U('Exponentials and logarithms',
      'A logarithm reverses exponentiation. The equation $\\log_b A=c$ is equivalent to $b^c=A$ for $A>0$, $b>0$ and $b\\ne1$. A logarithmic equation must respect the positivity of each argument.',
      [
        ['Solve $3^{2x-1}=27$.', 'Write $27=3^3$. Equality of the exponents gives $2x-1=3$ and $x=2$.'],
        ['Solve $\\log_2(x-1)+\\log_2(x+1)=3$.', 'The domain requires $x>1$. Combine the logs to get $x^2-1=8$. Of $x=3$ and $x=-3$, only $3$ belongs to the domain.'],
      ],
      [
        ['Evaluate a logarithm', 'Evaluate $\\log_5(1/125)$.', 'Since $5^{-3}=1/125$, the logarithm is $-3$.', '-3'],
        ['Convert to exponential form', 'Solve $\\log_3(x+2)=3$.', 'Then $x+2=27$, so $x=25$, which makes the argument positive.', '25'],
        ['Doubling time', 'A quantity follows $A(t)=40\\cdot2^{t/3}$. At what $t$ does it reach $320$?', 'The ratio is $320/40=8=2^3$. Thus $t/3=3$ and $t=9$.', '9'],
      ],
      ['What is the domain of $\\log_2(x-5)$?', '$x>5$', ['$x\\ge5$', '$x>0$', '$x\\ne5$'], 'The logarithm requires $x-5>0$.']),
    U('Function composition, inverses and sequences',
      'A composition applies the inner function first. An inverse undoes a function on a domain where distinct inputs give distinct outputs. Arithmetic sequences add a constant difference and geometric sequences multiply by a constant ratio.',
      [
        ['Find $(f\\circ g)(2)$ for $f(x)=2x-5$ and $g(x)=x^2+1$.', 'First calculate $g(2)=5$. Then $f(5)=10-5=5$.'],
        ['Find the inverse of $f(x)=3x-4$.', 'Solve $y=3x-4$ for the original input to get $x=(y+4)/3$. Therefore $f^{-1}(x)=(x+4)/3$.'],
      ],
      [
        ['Evaluate a composition', 'If $f(x)=x^2$ and $g(x)=x-3$, find $(g\\circ f)(4)$.', 'The inside value is $16$, so the output is $16-3=13$.', '13'],
        ['Undo a function', 'If $f(x)=4x+7$, find $f^{-1}(19)$.', 'Solve $4x+7=19$ to get $x=3$.', '3'],
        ['Geometric sequence', 'A geometric sequence has first term 5 and ratio 3. Find the fourth term.', 'The terms are $5,15,45,135$.', '135'],
      ],
      ['An arithmetic sequence starts with 9 and has common difference $-4$. What is its sixth term?', '$-11$', ['$-15$', '$-7$', '$29$'], 'The sixth term is $9+5(-4)=-11$.']),
    U('Trigonometric functions and models',
      'On the unit circle, cosine is the horizontal coordinate and sine is the vertical coordinate. In $y=A\\sin(Bx)+D$, with $B>0$, amplitude is $|A|$, the midline is $y=D$ and the period is $2\\pi/B$.',
      [
        ['Evaluate $\\cos(2\\pi/3)$.', 'The reference angle is $\\pi/3$. In quadrant II the horizontal coordinate is negative, giving $-1/2$.'],
        ['Find the maximum and minimum of $y=3\\sin(2x)+4$.', 'Sine lies between $-1$ and $1$. Multiplying by $3$ and adding $4$ gives the minimum $1$ and maximum $7$.'],
      ],
      [
        ['Convert degrees to radians', 'Convert $150^\\circ$ to radians.', 'Multiply by $\\pi/180$ to get $5\\pi/6$.', '5*pi/6'],
        ['Identify a period', 'Find the period of $y=\\cos(4x)$.', 'The angle must increase by $2\\pi$, so the period is $2\\pi/4=\\pi/2$.', 'pi/2'],
        ['Read a model', 'A temperature model is $T(t)=15+5\\cos(\\pi t/12)$. Find its minimum.', 'The lowest cosine value is $-1$, so the minimum is $15-5=10$.', '10'],
      ],
      ['Which point lies on the unit circle at angle $3\\pi/2$?', '$(0,-1)$', ['$(0,1)$', '$(-1,0)$', '$(1,0)$'], 'The angle is three quarters of a counterclockwise turn from the positive horizontal axis.']),
    U('Probability and statistical inference',
      'Conditional probability uses a restricted sample space. A random sample supports inference about a population. Random assignment is used in an experiment to make comparison groups similar on average.',
      [
        ['Among 50 students, 20 bike to school. Of those who bike, 8 also take the bus on some days. Find the probability of taking the bus given that a student bikes.', 'Restrict the sample space to the 20 bike riders. The conditional probability is $8/20=2/5$.'],
        ['A school randomly assigns two study methods to volunteers before a test. What does the assignment help establish?', 'Random assignment reduces systematic differences between the groups. The experiment can support a causal comparison for the participants, with generalization depending on how they were recruited.'],
      ],
      [
        ['Conditional probability from counts', 'Of 30 students taking chemistry, 12 take physics. Find the probability of physics given chemistry.', 'Use the 30 chemistry students as the denominator. The probability is $12/30=2/5$.', '2/5'],
        ['Independent outcomes', 'A fair coin is flipped and a fair six-sided die is rolled independently. Find the probability of heads and rolling 6.', 'Multiply the independent probabilities $1/2$ and $1/6$.', '1/12'],
        ['Identify a sampling bias', 'A survey of study time recruits only students attending an optional evening study group. Explain why it may overestimate study time for the school.', 'Participation in the group is related to the behavior being measured. Students who already study more may be more likely to be included.'],
      ],
      ['Which design gives the strongest basis for a causal claim about a new tutoring method?', 'Randomly assign eligible students to the new method or a comparison method.',
        ['Ask only students who chose the new method.', 'Compare the two highest scores after the change.', 'Survey students about which method sounds better.'],
        'Random assignment gives comparison groups whose other characteristics are balanced on average.']),
  ]),
  C('hs-precalculus', 'Precalculus', 'Analyze functions and prepare for calculus through trigonometry, vectors and coordinate models.', 'Algebra II and Geometry. This is an advanced high school option.', sources, [
    U('Polynomial and rational function behavior',
      'The leading term determines polynomial end behavior. A zero of odd multiplicity crosses the horizontal axis, and one of even multiplicity touches it. For rational functions, compare leading terms and check whether excluded inputs create holes or asymptotes.',
      [
        ['Describe the behavior near the zeros of $(x-1)^2(x+3)$.', 'The zero at $1$ has even multiplicity, so the sign does not change there. At $-3$ the multiplicity is odd, so the sign changes.'],
        ['Find the horizontal asymptote of $(4x^2-3)/(2x^2+x+1)$.', 'The degrees are equal. The ratio of leading coefficients is $4/2=2$, so the asymptote is $y=2$.'],
      ],
      [
        ['Multiplicity', 'What is the multiplicity of $x=2$ for $(x-2)^3(x+1)^2$?', 'The factor $x-2$ is raised to the third power.', '3'],
        ['Horizontal asymptote', 'Find the $y$-value of the horizontal asymptote of $(5x^2+1)/(2x^2-7)$.', 'Equal degrees give the ratio of the leading coefficients, $5/2$.', '5/2'],
        ['Locate a vertical asymptote', 'Find the $x$-value of the vertical asymptote of $(x+4)/(x-3)$.', 'The denominator vanishes at $3$ while the numerator is $7$, so the vertical asymptote is $x=3$.', '3'],
      ],
      ['Which point is a hole of $f(x)=(x^2-4)/(x-2)$?', '$(2,4)$', ['$(2,0)$', '$(-2,0)$', '$(4,2)$'], 'For $x\\ne2$, $f(x)=x+2$. The excluded input is $2$ and the limiting output is $4$.']),
    U('Inverses and exponential models',
      'A function has an inverse on a domain where it is one-to-one. The graphs of a function and its inverse reflect across $y=x$. Taking a logarithm solves for the unknown exponent in a positive exponential model.',
      [
        ['Find an inverse of $f(x)=x^2-1$ on $x\\ge0$.', 'From $y=x^2-1$ and $x\\ge0$, solve $x=\\sqrt{y+1}$. The inverse is $f^{-1}(x)=\\sqrt{x+1}$ on $x\\ge-1$.'],
        ['A balance is $250(1.06)^t$ dollars. Express the time when it first reaches 400 dollars.', 'Solve $(1.06)^t=400/250=1.6$. Taking logarithms gives $t=\\ln(1.6)/\\ln(1.06)$.'],
      ],
      [
        ['Inverse evaluation', 'For $f(x)=\\sqrt{x-3}$, find $f^{-1}(5)$.', 'Set $\\sqrt{x-3}=5$. Squaring gives $x=28$.', '28'],
        ['Solve for time', 'Solve $7e^{2t}=21$ for $t$. Enter the exact value.', 'Divide by $7$ and take logs. Then $2t=\\ln3$ and $t=\\ln3/2$.', 'ln(3)/2'],
        ['Read the inverse domain', 'For $f(x)=x^2+2$ restricted to $x\\ge0$, state the smallest input of $f^{-1}$.', 'The range of $f$ begins at $2$, so the domain of the inverse begins there.', '2'],
      ],
      ['If $f$ is one-to-one and $f(8)=3$, what is $f^{-1}(3)$?', '$8$', ['$3$', '$1/3$', '$-8$'], 'An inverse exchanges the original input and output.']),
    U('Trigonometric identities, equations and inverse trig',
      'Identities hold for every input in their common domain. The sine and cosine functions repeat every $2\\pi$. Inverse trigonometric functions return values on chosen principal intervals.',
      [
        ['Solve $2\\sin x=1$ on $0\\le x<2\\pi$.', 'The reference angle is $\\pi/6$. Sine is positive in quadrants I and II, giving $x=\\pi/6$ and $x=5\\pi/6$.'],
        ['Evaluate $\\arccos(-1/2)$.', 'The principal range of arccosine is $[0,\\pi]$. The angle in that range with cosine $-1/2$ is $2\\pi/3$.'],
      ],
      [
        ['Pythagorean identity', 'If $\\sin x=3/5$ and $x$ is in quadrant II, find $\\cos x$.', 'The squared cosine is $1-9/25=16/25$. The cosine is negative in quadrant II.', '-4/5'],
        ['Inverse tangent', 'Evaluate $\\arctan(1)$ in radians.', 'Tangent equals $1$ at $\\pi/4$ in its principal interval.', 'pi/4'],
        ['Solve a cosine equation', 'Find the larger solution of $\\cos x=1/2$ in $[0,2\\pi)$.', 'The two angles are $\\pi/3$ and $5\\pi/3$. The larger is $5\\pi/3$.', '5*pi/3'],
      ],
      ['Which expression equals $1-\\sin^2 x$ for all real $x$?', '$\\cos^2 x$', ['$\\cos x$', '$\\sin^2 x$', '$-\\cos^2 x$'], 'Rearrange the Pythagorean identity $\\sin^2x+\\cos^2x=1$.']),
    U('Vectors, parametric equations and polar coordinates',
      'A planar vector has horizontal and vertical components. Parametric equations give coordinates as functions of a common parameter. In polar coordinates, $x=r\\cos\\theta$ and $y=r\\sin\\theta$.',
      [
        ['Add $(3,-2)$ and $(-1,5)$ and find the magnitude of the sum.', 'The component sum is $(2,3)$. Its magnitude is $\\sqrt{2^2+3^2}=\\sqrt{13}$.'],
        ['Eliminate $t$ from $x=2t+1$, $y=t^2$.', 'Solve $t=(x-1)/2$ and substitute. Then $y=(x-1)^2/4$.'],
      ],
      [
        ['Vector magnitude', 'Find the magnitude of $(-5,12)$.', 'Compute $\\sqrt{25+144}=13$.', '13'],
        ['Read a parametric point', 'For $x=1+3t$ and $y=2-t$, find $y$ when $x=10$.', 'The first equation gives $t=3$. Substitute to get $y=-1$.', '-1'],
        ['Polar conversion', 'Find the Cartesian $x$-coordinate of the polar point $(6,2\\pi/3)$.', 'Multiply $6$ by $\\cos(2\\pi/3)=-1/2$.', '-3'],
      ],
      ['Which Cartesian point corresponds to polar coordinates $(4,\\pi/2)$?', '$(0,4)$', ['$(4,0)$', '$(0,-4)$', '$(-4,0)$'], 'At $\\pi/2$, cosine is zero and sine is one.']),
    U('Sequences and geometric series',
      'A geometric sequence with first term $a$ and ratio $r$ has $n$th term $ar^{n-1}$. For $r\\ne1$, the sum of the first $n$ terms is $a(1-r^n)/(1-r)$. An infinite geometric series converges when $|r|<1$.',
      [
        ['Find the sum $3+6+12+24+48$.', 'Here $a=3$, $r=2$ and $n=5$. The formula gives $3(1-2^5)/(1-2)=93$.'],
        ['Find $8+4+2+1+\\cdots$ as an infinite series.', 'The ratio is $1/2$. Its absolute value is below one, so the sum is $8/(1-1/2)=16$.'],
      ],
      [
        ['Calculate a term', 'Find the fifth term of the geometric sequence with first term 2 and ratio $-3$.', 'Use $2(-3)^4=162$.', '162'],
        ['Finite sum', 'Find the sum of the first four terms of $5,15,45,\\ldots$.', 'The fourth term is $135$. The sum is $5+15+45+135=200$.', '200'],
        ['Infinite sum', 'Evaluate $12+3+3/4+\\cdots$.', 'The ratio is $1/4$. The sum is $12/(1-1/4)=16$.', '16'],
      ],
      ['Which geometric series has a finite sum?', '$2+1+1/2+1/4+\\cdots$', ['$2+4+8+16+\\cdots$', '$2+2+2+2+\\cdots$', '$2-2+2-2+\\cdots$'], 'Only the first series has a ratio with absolute value strictly less than one.']),
  ]),
];
