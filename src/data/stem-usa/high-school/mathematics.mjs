import { course as C } from '../lesson.mjs';
import { unit as U, commonCore, mathFramework, texasMath } from './material.mjs';

const sources = [commonCore, mathFramework, texasMath];

export const highSchoolMath = [
  C('hs-algebra-1', 'Algebra I', 'Solve equations, model change with functions, and interpret data.', 'Arithmetic with signed numbers, fractions, and the coordinate plane.', sources, [
    U('Linear equations, inequalities and systems',
      'Solving an equation means preserving the set of solutions at each step. An inequality reverses direction when both sides are multiplied or divided by a negative number. A solution of a system makes both equations true.',
      [
        ['Solve $4(2x-1)=3x+11$.', 'Distribute to get $8x-4=3x+11$. Subtract $3x$ and add $4$, so $5x=15$ and $x=3$.'],
        ['A theater sells 14 tickets. Adult tickets cost 10 dollars and student tickets cost 6 dollars. Revenue is 116 dollars. How many adult tickets were sold?', 'If $a$ adults attend, $14-a$ students attend. Substitute into the revenue equation to get $10a+6(14-a)=116$. Then $4a=32$ and $a=8$.'],
      ],
      [
        ['Solve an equation', 'Solve $5x-7=2x+11$. Enter $x$.', 'Subtract $2x$ and add $7$. Then $3x=18$, so $x=6$.', '6'],
        ['Inequality boundary', 'Solve $-3x+8<20$. Enter the boundary value of $x$, then check the direction of the inequality.', 'Subtract $8$ to get $-3x<12$. Divide by $-3$ and reverse the sign. The solution is $x>-4$.', '-4'],
        ['Eliminate a variable', 'Solve $x+y=12$ and $2x-y=9$. Enter $y$.', 'Adding the equations gives $3x=21$, so $x=7$. Then $y=12-7=5$.', '5'],
      ],
      ['Which equation has no solution?', '$3(x+2)=3x+1$', ['$2x+1=7$', '$4x=0$', '$x-2=2x+1$'], 'Subtract $3x$ from both sides. The result $6=1$ is false for every $x$.']),
    U('Linear functions and rates of change',
      'In a linear model $y=mx+b$, the slope $m$ is change in output divided by change in input. The intercept $b$ is the output at input zero. The units of slope are output units per input unit.',
      [
        ['Find the equation of the line through $(2,7)$ and $(5,16)$.', 'The slope is $(16-7)/(5-2)=3$. Substitute $(2,7)$ into $y=3x+b$ to obtain $b=1$, so $y=3x+1$.'],
        ['A bike rental costs 12 dollars plus 4 dollars per hour. Interpret the two coefficients in $C(h)=12+4h$.', 'The starting fee is 12 dollars. Each additional hour adds 4 dollars, so 4 dollars per hour is the slope.'],
      ],
      [
        ['Slope from two points', 'Find the slope through $(-2,4)$ and $(4,-5)$.', 'The slope is $(-5-4)/(4+2)=-9/6=-3/2$.', '-3/2'],
        ['Initial value', 'A line with slope $-2$ passes through $(3,5)$. Find its $y$-intercept.', 'Set $5=-2(3)+b$. Thus $b=11$.', '11'],
        ['Read a contextual model', 'A 90-liter tank drains at 6 liters per minute. When is it down to 30 liters? Enter minutes.', 'Solve $90-6t=30$. Then $6t=60$ and $t=10$.', '10'],
      ],
      ['A function has $f(1)=9$ and $f(3)=5$ and is linear. What is $f(0)$?', '$11$', ['$7$', '$-2$', '$9$'], 'The slope is $(5-9)/(3-1)=-2$. Going back one unit from $x=1$ adds $2$.']),
    U('Exponents and exponential models',
      'A fixed percent change leads to repeated multiplication. In $A(t)=A_0b^t$, the multiplier is $b=1+r$ for growth or $b=1-r$ for decay, where $r$ is the rate as a decimal.',
      [
        ['An account starts at 200 dollars and grows by 5% each year. Find the balance after two years.', 'Each year multiplies the balance by $1.05$. After two years, $200(1.05)^2=220.50$ dollars.'],
        ['A sample loses 20% of its mass each hour. It starts at 250 g. Find the mass after three hours.', 'It retains $0.80$ of its mass each hour. Compute $250(0.80)^3=128$ g.'],
      ],
      [
        ['Simplify powers', 'Evaluate $(2^3)^2/2^4$.', 'Multiply exponents for the power of a power and subtract when dividing, giving $2^{6-4}=4$.', '4'],
        ['Repeated percent growth', 'A club has 80 members and grows by 10% each year. Find the model prediction after two years.', 'Compute $80(1.10)^2=96.8$. The model gives a decimal prediction, which can be rounded to 97 people when needed.', '96.8'],
        ['Interpret a decay factor', 'For $A(t)=500(0.92)^t$, find the percent lost each period. Enter the number without a percent sign.', 'Each period retains 92% of the previous value. The loss is 8%.', '8'],
      ],
      ['Which pattern shows exponential growth with a constant multiplier?', '$6,12,24,48$', ['$6,12,18,24$', '$6,9,15,24$', '$6,7,10,15$'], 'Consecutive terms in $6,12,24,48$ have ratio $2$.']),
    U('Quadratic equations and graphs',
      'A quadratic can be studied through its zeros and its vertex. A factored equation uses the zero-product property. In vertex form $a(x-h)^2+k$, the vertex is $(h,k)$ and the sign of $a$ determines whether it is a minimum or a maximum.',
      [
        ['Solve $x^2-7x+12=0$.', 'Factor as $(x-3)(x-4)=0$. Thus $x=3$ or $x=4$.'],
        ['Find the maximum of $h(t)=-2(t-3)^2+18$ on $0\\le t\\le 6$.', 'The squared term is smallest at $t=3$. Since its coefficient is negative, the maximum height is $18$.'],
      ],
      [
        ['Use the zero-product property', 'Find the greater root of $x^2-9x+20=0$.', 'The factors are $(x-4)(x-5)$. The greater root is $5$.', '5'],
        ['Find the vertex', 'Find the $x$-coordinate of the vertex of $y=x^2-6x+4$.', 'Completing the square gives $(x-3)^2-5$. The vertex is at $x=3$.', '3'],
        ['Model an area', 'A rectangle with perimeter 24 ft has width $x$. Find its maximum area in square feet.', 'Its area is $x(12-x)=36-(x-6)^2$. The maximum is $36$.', '36'],
      ],
      ['How many distinct real solutions does $x^2+4x+4=0$ have?', '$1$', ['$0$', '$2$', '$4$'], 'The left side is $(x+2)^2$, which vanishes only at $x=-2$.']),
    U('Data, scatter plots and residuals',
      'The median divides ordered observations in half. A scatter plot shows the relation between two quantitative variables. A residual is the observed response minus the predicted response, so a positive residual means the model predicted too low.',
      [
        ['Find the median of $3,5,5,7,10,18$.', 'There are six observations, so average the third and fourth. The median is $(5+7)/2=6$.'],
        ['A model predicts 71 points for a student who actually scores 76. Find and interpret the residual.', 'The residual is $76-71=5$. The student scored 5 points higher than predicted.'],
      ],
      [
        ['Mean from a small sample', 'Find the mean of $4,6,6,8,16$.', 'The sum is $40$. Divide by $5$ to get $8$.', '8'],
        ['Calculate a residual', 'The model $y=2x+7$ is used for an observation $(4,12)$. Find the residual.', 'The predicted value is $15$. Subtract it from the observed value $12$ to get $-3$.', '-3'],
        ['Read the shape of residuals', 'Residuals are mostly positive at both ends of the data and negative near the middle. What does the pattern suggest about the line?', 'The repeated sign pattern indicates curvature that the line misses. A different model may fit better.'],
      ],
      ['What can a strong positive association in a scatter plot establish by itself?', 'Larger values of one variable tend to occur with larger values of the other.',
        ['Changing the first variable necessarily causes the second to increase.', 'The slope must equal one.', 'Every residual must equal zero.'],
        'Association describes a pattern in the data. A causal claim requires a design or evidence that addresses other explanations.']),
  ]),
  C('hs-geometry', 'Geometry', 'Use transformations, proofs, trigonometry and measurement to solve geometric problems.', 'Linear equations and coordinates.', sources, [
    U('Rigid motions, angles and congruence',
      'Translations, reflections and rotations preserve lengths and angle measures. Congruence follows when a rigid motion or a sequence of rigid motions maps corresponding points. SAS uses two sides and the angle between them.',
      [
        ['Reflect $(4,-3)$ across the $y$-axis.', 'Reflection across the $y$-axis negates the horizontal coordinate and preserves the vertical coordinate. The image is $(-4,-3)$.'],
        ['Two triangles have corresponding sides 6 and 9 and an included angle of $42^\\circ$. Explain the congruence.', 'The given angle is between the two given sides in each triangle. The triangles are congruent by side-angle-side.'],
      ],
      [
        ['Translate a point', 'Translate $(-3,5)$ by $(7,-2)$. Enter the new $x$-coordinate.', 'Add corresponding coordinates. The image is $(4,3)$.', '4'],
        ['Parallel lines', 'Two same-side interior angles between parallel lines have measures $3x$ and $2x+10$ degrees. Find $x$.', 'They are supplementary, so $5x+10=180$ and $x=34$.', '34'],
        ['Choose a congruence argument', 'Two triangles have three pairs of equal corresponding sides. Name the criterion that proves congruence.', 'Side-side-side applies because all three pairs of corresponding lengths agree.'],
      ],
      ['What is the image of $(2,5)$ under a $90^\\circ$ counterclockwise rotation about the origin?', '$(-5,2)$', ['$(5,-2)$', '$(-2,-5)$', '$(2,-5)$'], 'The coordinate rule for that rotation is $(x,y)\\mapsto(-y,x)$.']),
    U('Similarity and right-triangle trigonometry',
      'Similar figures have equal corresponding angles and proportional corresponding sides. In a right triangle, sine, cosine and tangent express ratios relative to a chosen acute angle.',
      [
        ['A 4-ft pole casts a 6-ft shadow. At the same time, a tree casts a 27-ft shadow. Find the tree height.', 'The sun angle and right angles give similar triangles. Set $h/27=4/6$, so $h=18$ ft.'],
        ['A ramp rises at $30^\\circ$ and is 12 ft long. Find its vertical rise.', 'The rise is opposite the angle and the ramp is the hypotenuse. Therefore the rise is $12\\sin30^\\circ=6$ ft.'],
      ],
      [
        ['Scale a triangle', 'A side of length 8 becomes 14 after a dilation. What length does a side of length 20 become?', 'The scale factor is $14/8=7/4$. Multiply $20$ by $7/4$ to get $35$.', '35'],
        ['Use the Pythagorean theorem', 'A right triangle has legs 9 and 12. Find the hypotenuse.', 'The square of the hypotenuse is $81+144=225$, so its length is $15$.', '15'],
        ['Find a height from a ratio', 'From a point 18 m away, the tangent of the angle of elevation to a roof is $2/3$. Find the roof height above eye level in meters.', 'Tangent is rise over horizontal run, so the rise is $18(2/3)=12$ m.', '12'],
      ],
      ['Two similar triangles have corresponding side lengths in the ratio $3:5$. What is the ratio of their areas?', '$9:25$', ['$3:5$', '$6:25$', '$27:125$'], 'Areas scale by the square of the linear scale factor.']),
    U('Coordinate geometry and proof',
      'Slope compares vertical change with horizontal change. The midpoint averages the coordinates of the endpoints. Squared distance can be used to compare lengths without taking square roots.',
      [
        ['Show that the segment from $(0,1)$ to $(3,5)$ has length 5.', 'The horizontal and vertical changes are 3 and 4. The squared distance is $3^2+4^2=25$, so the length is $5$.'],
        ['Find the slope of a line perpendicular to $y=3x-2$.', 'The slope of the given line is $3$. A perpendicular nonvertical line has negative reciprocal slope $-1/3$.'],
      ],
      [
        ['Midpoint', 'Find the $y$-coordinate of the midpoint of $(-4,8)$ and $(6,-2)$.', 'Average the vertical coordinates. The result is $(8-2)/2=3$.', '3'],
        ['Distance', 'Find the distance between $(1,-2)$ and $(7,6)$.', 'The differences are 6 and 8. Thus the distance is $\\sqrt{36+64}=10$.', '10'],
        ['Compare slopes', 'Are segments from $(0,0)$ to $(2,6)$ and from $(1,-1)$ to $(3,5)$ parallel?', 'Both slopes are $3$, and the segments lie on different lines. They are parallel.'],
      ],
      ['Which line is perpendicular to $y=-2x+1$?', '$y=x/2+4$', ['$y=2x+4$', '$y=-x/2+4$', '$y=-2x+4$'], 'The product of the slopes $-2$ and $1/2$ is $-1$.']),
    U('Circles, arcs and sectors',
      'An inscribed angle has half the measure of its intercepted arc. Arc length and sector area use the fraction of the full turn. With radians, arc length is $s=r\\theta$.',
      [
        ['An inscribed angle intercepts a $100^\\circ$ arc. Find the angle measure.', 'It is half the arc measure, so the angle is $50^\\circ$.'],
        ['Find the area of a $90^\\circ$ sector of radius 6 cm.', 'The sector is one fourth of the circle. Its area is $(1/4)\\pi(6)^2=9\\pi$ square centimeters.'],
      ],
      [
        ['Inscribed angle', 'An inscribed angle intercepts an arc of $136^\\circ$. Find the angle in degrees.', 'Halve the measure of the intercepted arc to get $68^\\circ$.', '68'],
        ['Arc length', 'Find the length of an arc with radius 8 m and central angle $\\pi/4$ radians.', 'Use $s=r\\theta=8(\\pi/4)=2\\pi$ m.', '2*pi'],
        ['Tangent and radius', 'Find the angle in degrees between a tangent line and the radius at the point of tangency.', 'A radius drawn to the point of tangency is perpendicular to the tangent, so the angle is $90^\\circ$.', '90'],
      ],
      ['What is the radius of $(x-2)^2+(y+1)^2=49$?', '$7$', ['$49$', '$\\sqrt{50}$', '$-7$'], 'The right side equals the square of the radius, and the radius is positive.']),
    U('Area, surface area and volume',
      'The volume of a prism or cylinder is base area times perpendicular height. The volume of a pyramid or cone with the same base and height is one third as large. Scaling all lengths by $k$ scales volume by $k^3$.',
      [
        ['Find the volume of a cone of radius 3 cm and height 8 cm.', 'The base area is $9\\pi$ square centimeters. One third of base area times height is $24\\pi$ cubic centimeters.'],
        ['A model cube has side 4 in. A second cube has side 6 in. Compare their surface areas.', 'The length ratio from the first cube to the second is $3/2$. The area ratio is $(3/2)^2=9/4$.'],
      ],
      [
        ['Cylinder volume', 'Find the volume in cubic centimeters of a cylinder with radius 4 cm and height 7 cm.', 'Multiply base area $16\\pi$ by height $7$ to get $112\\pi$.', '112*pi'],
        ['Pyramid volume', 'Find the volume of a pyramid with square base side 6 ft and height 10 ft. Enter cubic feet.', 'One third of $36(10)$ is $120$.', '120'],
        ['Volume scaling', 'A solid has volume 30 cm³. All dimensions are multiplied by 2. Find the new volume in cubic centimeters.', 'The volume is multiplied by $2^3=8$. The new volume is $240$.', '240'],
      ],
      ['A rectangle is 6 ft by 8 ft. What is its diagonal length?', '$10$ ft', ['$14$ ft', '$48$ ft', '$7$ ft'], 'The diagonal is the hypotenuse of a right triangle with legs 6 and 8.']),
  ]),
];
