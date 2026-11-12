import { earlyMidterms } from './purdue-midterms.mjs';

export const exams = [
  {
    "id": "sample",
    "name": "Warm-up quiz",
    "description": "Try six questions on limits, derivatives and integrals. See which topics to review before a full practice exam.",
    "minutes": 15,
    "questions": [
      {
        "id": "s1",
        "topic": "Limits",
        "lessons": [
          5
        ],
        "prompt": "Evaluate lim (x → 3) (x² − 9)/(x − 3).",
        "choices": [
          "0",
          "3",
          "6",
          "9",
          "The limit does not exist"
        ],
        "answer": 2,
        "steps": [
          "Factor the numerator as (x − 3)(x + 3).",
          "Cancel x − 3 for x ≠ 3. The remaining expression x + 3 approaches 6."
        ],
        "review": [
          [
            "Limit laws",
            "2-3-the-limit-laws"
          ]
        ]
      },
      {
        "id": "s2",
        "topic": "Continuity",
        "lessons": [
          8
        ],
        "prompt": "Let f(x) = x² − 1 for x ≤ 2 and f(x) = ax + 1 for x > 2. What value of a makes f continuous at x = 2?",
        "choices": [
          "1",
          "0",
          "1/2",
          "3/2",
          "2"
        ],
        "answer": 0,
        "steps": [
          "The left-hand limit and f(2) both equal 2² − 1 = 3.",
          "The right-hand limit is 2a + 1. Set 2a + 1 = 3 and solve to get a = 1."
        ],
        "review": [
          [
            "Continuity",
            "2-4-continuity"
          ]
        ]
      },
      {
        "id": "s3",
        "topic": "Chain rule and logarithms",
        "lessons": [
          15,
          17
        ],
        "prompt": "For f(x) = ln(1 + x²), find f′(2).",
        "choices": [
          "1/5",
          "2/5",
          "4",
          "4/3",
          "4/5"
        ],
        "answer": 4,
        "steps": [
          "The derivative of ln u is u′/u. Here u = 1 + x² and u′ = 2x.",
          "At x = 2 the result is 4/(1 + 4) = 4/5."
        ],
        "review": [
          [
            "The chain rule",
            "3-6-the-chain-rule"
          ],
          [
            "Logarithmic and exponential derivatives",
            "3-9-derivatives-of-exponential-and-logarithmic-functions"
          ]
        ]
      },
      {
        "id": "s4",
        "topic": "First derivative test",
        "lessons": [
          22
        ],
        "prompt": "A differentiable function satisfies f′(x) = (x + 2)(x − 1)². At which x-values does f have a local minimum?",
        "choices": [
          "x = 1 only",
          "x = −2 only",
          "x = −2 and x = 1",
          "x = 0 only",
          "No local minimum"
        ],
        "answer": 1,
        "steps": [
          "Away from x = 1, the squared factor is positive, so the sign of f′ comes from x + 2.",
          "At −2, f′ goes from negative to positive. At 1 it is positive on both sides, so only −2 gives a local minimum."
        ],
        "review": [
          [
            "Derivatives and graph shape",
            "4-5-derivatives-and-the-shape-of-a-graph"
          ]
        ]
      },
      {
        "id": "s5",
        "topic": "Linear approximation",
        "lessons": [
          28
        ],
        "prompt": "Use the linearization of f(x) = ∛x at x = 27 to estimate ∛27.81.",
        "choices": [
          "3.003",
          "3.009",
          "3.09",
          "3.03",
          "3.27"
        ],
        "answer": 3,
        "steps": [
          "At x = 27, f(27) = 3 and f′(27) = 1/(3 · 27^(2/3)) = 1/27.",
          "The input increases by 0.81. The linear estimate is 3 + 0.81/27 = 3.03."
        ],
        "review": [
          [
            "Linear approximation and differentials",
            "4-2-linear-approximations-and-differentials"
          ]
        ]
      },
      {
        "id": "s6",
        "topic": "Fundamental Theorem of Calculus",
        "lessons": [
          33
        ],
        "prompt": "Evaluate ∫₀² (3x² + 1) dx.",
        "choices": [
          "8",
          "10",
          "12",
          "14",
          "6"
        ],
        "answer": 1,
        "steps": [
          "An antiderivative is x³ + x.",
          "Evaluate it at the upper endpoint and subtract its value at the lower endpoint. The result is (8 + 2) − 0 = 10."
        ],
        "review": [
          [
            "Fundamental Theorem of Calculus",
            "5-3-the-fundamental-theorem-of-calculus"
          ]
        ]
      }
    ]
  },
  ...earlyMidterms,
  {
    "id": "exam3",
    "name": "Exam 3 practice",
    "description": "Prepare for lessons 21–31. Work through extrema, curve sketching, optimization, linear approximation and the first area estimates.",
    "minutes": 60,
    "questions": [
      {
        "id": "m1",
        "topic": "Absolute extrema",
        "lessons": [
          21
        ],
        "prompt": "Let f(x) = x³ − 3x on [−2, 3]. What is the absolute maximum value minus the absolute minimum value?",
        "choices": [
          "16",
          "18",
          "20",
          "22",
          "24"
        ],
        "answer": 2,
        "steps": [
          "Solve f′(x) = 3x² − 3 = 0. The interior candidates are x = −1 and x = 1.",
          "At x = −2, −1, 1 and 3 the values are −2, 2, −2 and 18, respectively.",
          "Subtract the minimum from the maximum to get 18 − (−2) = 20."
        ],
        "review": [
          [
            "Maxima and minima",
            "4-3-maxima-and-minima"
          ]
        ]
      },
      {
        "id": "m2",
        "topic": "Mean Value Theorem",
        "lessons": [
          22
        ],
        "prompt": "Suppose h is continuous on [2, 7], differentiable on (2, 7), and h(2) = 5. If 2 ≤ h′(x) ≤ 4 on (2, 7), what is the greatest possible value of h(7)?",
        "choices": [
          "13",
          "15",
          "20",
          "23",
          "25"
        ],
        "answer": 4,
        "steps": [
          "By the Mean Value Theorem, (h(7) − 5)/5 equals h′(c) for some c in (2, 7).",
          "Since h′(c) ≤ 4, h(7) ≤ 25. The linear function h(x) = 5 + 4(x − 2) attains 25."
        ],
        "review": [
          [
            "Mean Value Theorem",
            "4-4-the-mean-value-theorem"
          ]
        ]
      },
      {
        "id": "m3",
        "topic": "First derivative test",
        "lessons": [
          22,
          23
        ],
        "prompt": "Suppose f′(x) = (x + 3)²(x − 2)(x − 5) for every real x. Which statement about local extrema is true?",
        "choices": [
          "Local maximum at 2 and local minimum at 5",
          "Local minimum at 2 and local maximum at 5",
          "Local maximum at −3 and local minimum at 2",
          "Local minimum at −3 and local maximum at 2",
          "Local maxima at 2 and 5"
        ],
        "answer": 0,
        "steps": [
          "The squared factor does not change sign at −3. The sign of f′ is positive for x < 2 away from −3, negative on (2, 5), and positive for x > 5.",
          "A change from positive to negative gives a local maximum at 2. The reverse gives a local minimum at 5."
        ],
        "review": [
          [
            "Mean Value Theorem",
            "4-4-the-mean-value-theorem"
          ],
          [
            "Derivatives and graph shape",
            "4-5-derivatives-and-the-shape-of-a-graph"
          ]
        ]
      },
      {
        "id": "m4",
        "topic": "Concavity",
        "lessons": [
          23
        ],
        "prompt": "On which intervals is f(x) = x/(1 + x²) concave up?",
        "choices": [
          "(−∞, −√3) ∪ (0, √3)",
          "(−√3, 0) ∪ (√3, ∞)",
          "(−∞, 0)",
          "(−√3, √3)",
          "(0, √3) ∪ (√3, ∞)"
        ],
        "answer": 1,
        "steps": [
          "Differentiate twice. This gives f′(x) = (1 − x²)/(1 + x²)² and f″(x) = 2x(x² − 3)/(1 + x²)³.",
          "The denominator is positive. The numerator is positive when −√3 < x < 0 or x > √3."
        ],
        "review": [
          [
            "Derivatives and graph shape",
            "4-5-derivatives-and-the-shape-of-a-graph"
          ]
        ]
      },
      {
        "id": "m5",
        "topic": "Curve sketching",
        "lessons": [
          24,
          25
        ],
        "prompt": "Let f(x) = (x + 1)/(x − 2). Which statement correctly describes the graph?",
        "choices": [
          "It increases on both sides of x = 2.",
          "Its vertical asymptote is x = −1.",
          "It approaches y = 0 as x → ∞.",
          "For x > 2, it decreases and approaches y = 1 from above.",
          "For x < 2, it lies above y = 1."
        ],
        "answer": 3,
        "steps": [
          "Rewrite f(x) as 1 + 3/(x − 2). Its vertical asymptote is x = 2 and its horizontal asymptote is y = 1.",
          "For x > 2, the extra term is positive and shrinks to zero. The derivative −3/(x − 2)² confirms that the graph decreases."
        ],
        "review": [
          [
            "Limits at infinity and asymptotes",
            "4-6-limits-at-infinity-and-asymptotes"
          ],
          [
            "Derivatives and graph shape",
            "4-5-derivatives-and-the-shape-of-a-graph"
          ]
        ]
      },
      {
        "id": "m6",
        "topic": "Optimization with a volume constraint",
        "lessons": [
          26,
          27
        ],
        "prompt": "An open-top box with a square base must hold 32 ft³. What base side length minimizes the amount of material used?",
        "choices": [
          "2 ft",
          "3 ft",
          "4 ft",
          "5 ft",
          "8 ft"
        ],
        "answer": 2,
        "steps": [
          "For base side x > 0, the height is 32/x². The surface area is S(x) = x² + 4x(32/x²) = x² + 128/x.",
          "Set S′(x) = 2x − 128/x² = 0. Then x³ = 64, so x = 4.",
          "The derivative is negative before 4 and positive after 4, giving the minimum."
        ],
        "review": [
          [
            "Applied optimization",
            "4-7-applied-optimization-problems"
          ]
        ]
      },
      {
        "id": "m7",
        "topic": "Profit optimization",
        "lessons": [
          26,
          27
        ],
        "prompt": "A vendor can sell q items per day at a price p(q) = 72 − 2q dollars per item, with 0 ≤ q ≤ 36. The daily cost is 12q + 100 dollars. What price maximizes daily profit?",
        "choices": [
          "$30",
          "$36",
          "$40",
          "$48",
          "$42"
        ],
        "answer": 4,
        "steps": [
          "Profit is revenue minus cost, so P(q) = q(72 − 2q) − (12q + 100) = −2q² + 60q − 100.",
          "Set P′(q) = 60 − 4q = 0 to get q = 15. The quadratic opens downward, so this is the maximum.",
          "Substitute into the price equation to get p(15) = $42."
        ],
        "review": [
          [
            "Applied optimization",
            "4-7-applied-optimization-problems"
          ]
        ]
      },
      {
        "id": "m8",
        "topic": "Linearization",
        "lessons": [
          28
        ],
        "prompt": "Let f(x) = √(x² + 7). Use the linearization at x = 3 to estimate f(3.08).",
        "choices": [
          "4.06",
          "4.02",
          "4.04",
          "4.08",
          "4.24"
        ],
        "answer": 0,
        "steps": [
          "At x = 3, f(3) = 4 and f′(3) = 3/4 because f′(x) = x/√(x² + 7).",
          "The input increases by 0.08, so the linear estimate is 4 + (3/4)(0.08) = 4.06."
        ],
        "review": [
          [
            "Linear approximation and differentials",
            "4-2-linear-approximations-and-differentials"
          ]
        ]
      },
      {
        "id": "m9",
        "topic": "L’Hôpital’s Rule for a 0/0 form",
        "lessons": [
          29
        ],
        "prompt": "Evaluate lim (x → 0) (e^(2x) − 1 − 2x)/x².",
        "choices": [
          "0",
          "1",
          "4",
          "2",
          "The limit does not exist"
        ],
        "answer": 3,
        "steps": [
          "The first quotient has form 0/0. Differentiate numerator and denominator to get (2e^(2x) − 2)/(2x).",
          "This still has form 0/0. Differentiate both again to get 4e^(2x)/2, which approaches 2."
        ],
        "review": [
          [
            "L’Hôpital’s Rule",
            "4-8-lhopitals-rule"
          ]
        ]
      },
      {
        "id": "m10",
        "topic": "L’Hôpital’s Rule for a product",
        "lessons": [
          29
        ],
        "prompt": "Evaluate lim (x → ∞) x ln(1 + 3/x).",
        "choices": [
          "1/3",
          "3",
          "0",
          "1",
          "∞"
        ],
        "answer": 1,
        "steps": [
          "Rewrite the product as ln(1 + 3/x)/(1/x) so that it has the form 0/0.",
          "The ratio of derivatives is [−3/(x²(1 + 3/x))]/(−1/x²) = 3/(1 + 3/x). It approaches 3."
        ],
        "review": [
          [
            "L’Hôpital’s Rule",
            "4-8-lhopitals-rule"
          ]
        ]
      },
      {
        "id": "m11",
        "topic": "Antiderivatives with an initial condition",
        "lessons": [
          30
        ],
        "prompt": "A particle has velocity v(t) = 3√t − 4/(1 + t²) for t ≥ 0. If its position is s(0) = 2, what is s(1)?",
        "choices": [
          "2 − π",
          "4 − π/4",
          "5 − π",
          "4 + π",
          "4 − π"
        ],
        "answer": 4,
        "steps": [
          "An antiderivative of the velocity is s(t) = 2t^(3/2) − 4 arctan(t) + C. The initial value gives C = 2.",
          "At t = 1, use arctan(1) = π/4 to get 2 − π + 2 = 4 − π."
        ],
        "review": [
          [
            "Antiderivatives",
            "4-10-antiderivatives"
          ]
        ]
      },
      {
        "id": "m12",
        "topic": "Right-endpoint Riemann sums",
        "lessons": [
          31
        ],
        "prompt": "The flow into a tank at times 0, 2, 4 and 6 minutes is 3, 5, 4 and 7 gallons per minute, respectively. Use a right-endpoint sum with three equal intervals to estimate the amount that flowed into the tank in the first 6 minutes.",
        "choices": [
          "24 gal",
          "26 gal",
          "32 gal",
          "35 gal",
          "42 gal"
        ],
        "answer": 2,
        "steps": [
          "Each interval is 2 minutes wide. Use the flow rates at 2, 4 and 6 minutes.",
          "The estimated amount is 2(5 + 4 + 7) = 32 gallons."
        ],
        "review": [
          [
            "Approximating areas",
            "5-1-approximating-areas"
          ]
        ]
      }
    ]
  },
  {
    "id": "final",
    "name": "Final exam practice",
    "description": "Review lessons 1–36. The questions cover functions, limits, differentiation, applications, integration and exponential models.",
    "minutes": 120,
    "questions": [
      {
        "id": "f1",
        "topic": "Domain of a function",
        "lessons": [
          1,
          2
        ],
        "prompt": "Find the real domain of g(x) = ln(4 − x²)/√(x + 1).",
        "choices": [
          "(−2, 2)",
          "(−1, 2)",
          "[−1, 2)",
          "(−1, 2]",
          "(−∞, 2)"
        ],
        "answer": 1,
        "steps": [
          "The logarithm needs 4 − x² > 0, which gives −2 < x < 2.",
          "The square root is in the denominator, so x + 1 must be strictly positive. Intersect the two conditions to get (−1, 2)."
        ],
        "review": [
          [
            "Functions and domains",
            "1-1-review-of-functions"
          ],
          [
            "Inverse functions",
            "1-4-inverse-functions"
          ]
        ]
      },
      {
        "id": "f2",
        "topic": "Inverse functions",
        "lessons": [
          2
        ],
        "prompt": "Let f(x) = 2 + 3e^(−x). What is f⁻¹(11)?",
        "choices": [
          "ln 3",
          "−ln 9",
          "ln 9",
          "−ln 3",
          "−3"
        ],
        "answer": 3,
        "steps": [
          "Find the input x such that f(x) = 11. The equation 2 + 3e^(−x) = 11 reduces to e^(−x) = 3.",
          "Take the natural logarithm to get −x = ln 3, so x = −ln 3."
        ],
        "review": [
          [
            "Inverse functions",
            "1-4-inverse-functions"
          ]
        ]
      },
      {
        "id": "f3",
        "topic": "Limits by rationalization",
        "lessons": [
          5
        ],
        "prompt": "Evaluate lim (x → 0) (√(9 + 2x) − 3)/x.",
        "choices": [
          "1/3",
          "1/6",
          "0",
          "2/3",
          "3"
        ],
        "answer": 0,
        "steps": [
          "Multiply by (√(9 + 2x) + 3)/(√(9 + 2x) + 3). The numerator becomes 2x.",
          "Cancel x for x ≠ 0. The resulting quotient 2/(√(9 + 2x) + 3) approaches 2/6 = 1/3."
        ],
        "review": [
          [
            "Limit laws",
            "2-3-the-limit-laws"
          ]
        ]
      },
      {
        "id": "f4",
        "topic": "Continuity at a piecewise join",
        "lessons": [
          8
        ],
        "prompt": "Let f(x) = (x³ − 1)/(x − 1) for x < 1 and f(x) = ax² + 2a for x ≥ 1. Find a so that f is continuous at 1.",
        "choices": [
          "0",
          "1/3",
          "2/3",
          "3",
          "1"
        ],
        "answer": 4,
        "steps": [
          "For x < 1 the left branch simplifies to x² + x + 1, whose limit at 1 is 3.",
          "The right branch has value 3a at 1 and is continuous there. Set 3a = 3 to get a = 1."
        ],
        "review": [
          [
            "Continuity",
            "2-4-continuity"
          ]
        ]
      },
      {
        "id": "f5",
        "topic": "Derivative from a difference quotient",
        "lessons": [
          9,
          10
        ],
        "prompt": "Evaluate lim (h → 0) [1/(2 + h) − 1/2]/h.",
        "choices": [
          "1/4",
          "−1/2",
          "−1/4",
          "1/2",
          "0"
        ],
        "answer": 2,
        "steps": [
          "Combine the fractions in the numerator to get −h/[2(2 + h)].",
          "Divide by h for h ≠ 0. The remaining expression is −1/[2(2 + h)], which approaches −1/4."
        ],
        "review": [
          [
            "The derivative definition",
            "3-1-defining-the-derivative"
          ],
          [
            "The derivative as a function",
            "3-2-the-derivative-as-a-function"
          ]
        ]
      },
      {
        "id": "f6",
        "topic": "Quotient and chain rules",
        "lessons": [
          12,
          13,
          15
        ],
        "prompt": "Let g(x) = sin(2x)/(1 + x). What is g′(0)?",
        "choices": [
          "−2",
          "0",
          "1",
          "2",
          "4"
        ],
        "answer": 3,
        "steps": [
          "The numerator has derivative 2 cos(2x). At x = 0 the numerator is 0 and its derivative is 2.",
          "The quotient rule gives (2 · 1 − 0 · 1)/1² = 2."
        ],
        "review": [
          [
            "Differentiation rules",
            "3-3-differentiation-rules"
          ],
          [
            "Trigonometric derivatives",
            "3-5-derivatives-of-trigonometric-functions"
          ],
          [
            "The chain rule",
            "3-6-the-chain-rule"
          ]
        ]
      },
      {
        "id": "f7",
        "topic": "Implicit differentiation",
        "lessons": [
          16
        ],
        "prompt": "The curve x² + xy + 2y² = 8 passes through (2, 1). What is dy/dx at this point?",
        "choices": [
          "−5/6",
          "−6/5",
          "5/6",
          "−1/2",
          "−5/4"
        ],
        "answer": 0,
        "steps": [
          "Differentiate with respect to x. This gives 2x + y + xy′ + 4yy′ = 0.",
          "Solve for y′ to get −(2x + y)/(x + 4y). At (2, 1) it is −5/6."
        ],
        "review": [
          [
            "Implicit differentiation",
            "3-8-implicit-differentiation"
          ]
        ]
      },
      {
        "id": "f8",
        "topic": "Derivative of an inverse trigonometric function",
        "lessons": [
          20
        ],
        "prompt": "For f(x) = arcsin(2x), find f′(1/4).",
        "choices": [
          "2/√3",
          "√3/2",
          "2",
          "1/√3",
          "4/√3"
        ],
        "answer": 4,
        "steps": [
          "Apply the chain rule to get f′(x) = 2/√(1 − 4x²).",
          "At x = 1/4, the denominator is √(3/4) = √3/2. Dividing 2 by that gives 4/√3."
        ],
        "review": [
          [
            "Inverse function derivatives",
            "3-7-derivatives-of-inverse-functions"
          ]
        ]
      },
      {
        "id": "f9",
        "topic": "Related rates",
        "lessons": [
          18,
          19
        ],
        "prompt": "An inverted conical tank is 12 ft deep and has a top radius of 6 ft. Water enters at 10 ft³/min. How fast is the water depth increasing when it is 4 ft? Use V = πr²h/3 for the volume of a cone.",
        "choices": [
          "5/(4π) ft/min",
          "5/(2π) ft/min",
          "10/π ft/min",
          "π/10 ft/min",
          "5/(8π) ft/min"
        ],
        "answer": 1,
        "steps": [
          "By similar triangles, r/h = 6/12 = 1/2. Thus V = πh³/12.",
          "Differentiate with respect to time. This gives dV/dt = (πh²/4) dh/dt.",
          "At h = 4, set 10 = 4π dh/dt. The depth increases at 5/(2π) ft/min."
        ],
        "review": [
          [
            "Related rates",
            "4-1-related-rates"
          ]
        ]
      },
      {
        "id": "f10",
        "topic": "Mean Value Theorem and average velocity",
        "lessons": [
          22
        ],
        "prompt": "A particle has position s(t) = t³ + 3t on 0 ≤ t ≤ 3. At what time does its instantaneous velocity equal its average velocity over this interval?",
        "choices": [
          "1",
          "3/2",
          "2",
          "√3",
          "√5"
        ],
        "answer": 3,
        "steps": [
          "The average velocity is [s(3) − s(0)]/3 = 36/3 = 12.",
          "The instantaneous velocity is 3t² + 3. Set it equal to 12 and choose the root in (0, 3), t = √3."
        ],
        "review": [
          [
            "Mean Value Theorem",
            "4-4-the-mean-value-theorem"
          ]
        ]
      },
      {
        "id": "f11",
        "topic": "Inflection points",
        "lessons": [
          23
        ],
        "prompt": "A twice-differentiable function satisfies f″(x) = (x + 1)²(x − 2)(x − 4). At which x-values does its graph have inflection points?",
        "choices": [
          "−1 only",
          "−1 and 2",
          "2 and 4",
          "−1, 2 and 4",
          "4 only"
        ],
        "answer": 2,
        "steps": [
          "Look for sign changes of f″. The squared factor has the same sign on either side of −1.",
          "The product changes from positive to negative at 2 and from negative to positive at 4. Both give inflection points."
        ],
        "review": [
          [
            "Derivatives and graph shape",
            "4-5-derivatives-and-the-shape-of-a-graph"
          ]
        ]
      },
      {
        "id": "f12",
        "topic": "Area optimization",
        "lessons": [
          26,
          27
        ],
        "prompt": "A rectangle has its base on the x-axis and its upper corners on y = 12 − x², symmetric about the y-axis. What is the largest possible area?",
        "choices": [
          "32",
          "16",
          "24",
          "36",
          "48"
        ],
        "answer": 0,
        "steps": [
          "If the upper right corner has x-coordinate x > 0, the width is 2x and the height is 12 − x². Thus A(x) = 24x − 2x³ for 0 ≤ x ≤ √12.",
          "Solve A′(x) = 24 − 6x² = 0 to get x = 2. The endpoints give zero, so this is the maximum.",
          "The width is 4 and the height is 8. The area is 32."
        ],
        "review": [
          [
            "Applied optimization",
            "4-7-applied-optimization-problems"
          ]
        ]
      },
      {
        "id": "f13",
        "topic": "Differentials",
        "lessons": [
          28
        ],
        "prompt": "A circular disk’s radius increases from 10 cm to 10.2 cm. Use a differential to estimate the increase in its area.",
        "choices": [
          "2π cm²",
          "20π cm²",
          "4.04π cm²",
          "0.4π cm²",
          "4π cm²"
        ],
        "answer": 4,
        "steps": [
          "For A = πr², the differential is dA = 2πr dr.",
          "With r = 10 and dr = 0.2, the estimate is dA = 2π · 10 · 0.2 = 4π cm². The value 4.04π is the exact increase."
        ],
        "review": [
          [
            "Linear approximation and differentials",
            "4-2-linear-approximations-and-differentials"
          ]
        ]
      },
      {
        "id": "f14",
        "topic": "Indeterminate powers",
        "lessons": [
          29
        ],
        "prompt": "Evaluate lim (x → 0⁺) x^x.",
        "choices": [
          "0",
          "1",
          "e",
          "∞",
          "The limit does not exist"
        ],
        "answer": 1,
        "steps": [
          "Write x^x = e^(x ln x). To find the limit of the exponent, rewrite x ln x as ln x/(1/x).",
          "L’Hôpital’s Rule gives a ratio of derivatives of (1/x)/(−1/x²) = −x, which approaches 0.",
          "By continuity of the exponential function, x^x approaches e⁰ = 1."
        ],
        "review": [
          [
            "L’Hôpital’s Rule",
            "4-8-lhopitals-rule"
          ]
        ]
      },
      {
        "id": "f15",
        "topic": "Finding a function from its derivative",
        "lessons": [
          30
        ],
        "prompt": "For x > 0, suppose f′(x) = 1/x² − 4x and f(1) = 0. Find f(2).",
        "choices": [
          "−13/2",
          "−7/2",
          "−11/2",
          "−5",
          "11/2"
        ],
        "answer": 2,
        "steps": [
          "Integrate term by term to get f(x) = −1/x − 2x² + C.",
          "The condition f(1) = 0 gives C = 3. Then f(2) = −1/2 − 8 + 3 = −11/2."
        ],
        "review": [
          [
            "Antiderivatives",
            "4-10-antiderivatives"
          ]
        ]
      },
      {
        "id": "f16",
        "topic": "Riemann sums as definite integrals",
        "lessons": [
          31,
          32,
          33
        ],
        "prompt": "Evaluate the limit of the sums ∑ (2/n)√(1 + 2k/n), for k = 1 through n as n → ∞.",
        "choices": [
          "(2/3)(3√3 − 1)",
          "2(√3 − 1)",
          "(2/3)(2√2 − 1)",
          "3√3 − 1",
          "√3"
        ],
        "answer": 0,
        "steps": [
          "The interval width is Δx = 2/n and the sample points are xₖ = 1 + kΔx. This is a right-endpoint Riemann sum for ∫₁³ √x dx.",
          "An antiderivative is (2/3)x^(3/2). Subtract the endpoint values to get (2/3)(3√3 − 1)."
        ],
        "review": [
          [
            "Approximating areas",
            "5-1-approximating-areas"
          ],
          [
            "Definite integrals",
            "5-2-the-definite-integral"
          ],
          [
            "Fundamental Theorem of Calculus",
            "5-3-the-fundamental-theorem-of-calculus"
          ]
        ]
      },
      {
        "id": "f17",
        "topic": "Fundamental Theorem with two variable bounds",
        "lessons": [
          33
        ],
        "prompt": "Let H(x) be the integral of 1 + t³ with respect to t from t = x² to t = 3x. What is H′(1)?",
        "choices": [
          "24",
          "26",
          "52",
          "84",
          "80"
        ],
        "answer": 4,
        "steps": [
          "Use the Fundamental Theorem and the chain rule on both bounds. This gives H′(x) = 3[1 + (3x)³] − 2x[1 + (x²)³].",
          "At x = 1 the result is 3(28) − 2(2) = 80."
        ],
        "review": [
          [
            "Fundamental Theorem of Calculus",
            "5-3-the-fundamental-theorem-of-calculus"
          ]
        ]
      },
      {
        "id": "f18",
        "topic": "Definite integrals and symmetry",
        "lessons": [
          34
        ],
        "prompt": "Evaluate ∫ from −2 to 2 of (x³ + |x|) dx.",
        "choices": [
          "0",
          "4",
          "2",
          "8",
          "12"
        ],
        "answer": 1,
        "steps": [
          "The integral of x³ over [−2, 2] is zero because x³ is odd.",
          "The function |x| is even, so its integral is 2∫₀² x dx = 2 · 2 = 4."
        ],
        "review": [
          [
            "Definite integrals",
            "5-2-the-definite-integral"
          ]
        ]
      },
      {
        "id": "f19",
        "topic": "Substitution in a definite integral",
        "lessons": [
          34,
          35
        ],
        "prompt": "Evaluate ∫₀¹ 6x(1 + x²)⁴ dx.",
        "choices": [
          "31/5",
          "48/5",
          "96/5",
          "93/5",
          "31"
        ],
        "answer": 3,
        "steps": [
          "Let u = 1 + x². Then du = 2x dx, and the bounds change from x = 0 and 1 to u = 1 and 2.",
          "The integral is 3∫₁² u⁴ du = (3/5)(2⁵ − 1⁵) = 93/5."
        ],
        "review": [
          [
            "Definite integrals",
            "5-2-the-definite-integral"
          ],
          [
            "Substitution",
            "5-5-substitution"
          ]
        ]
      },
      {
        "id": "f20",
        "topic": "Exponential decay",
        "lessons": [
          36
        ],
        "prompt": "A substance decays according to A(t) = A₀e^(kt), with t in hours. After 4 hours, one quarter of the initial amount remains. After how many hours will one thirty-second of the initial amount remain?",
        "choices": [
          "10 hours",
          "6 hours",
          "8 hours",
          "12 hours",
          "20 hours"
        ],
        "answer": 0,
        "steps": [
          "One quarter is (1/2)², so 4 hours correspond to two half-lives. Each half-life is 2 hours.",
          "One thirty-second is (1/2)⁵. Five half-lives take 5 · 2 = 10 hours."
        ],
        "review": [
          [
            "Exponential growth and decay",
            "6-8-exponential-growth-and-decay"
          ]
        ]
      }
    ]
  }
];
