import { optionsFor } from './catalog.mjs';

const items = [
  ['limits and continuity', 1, 'Evaluate the limit of (√(4 + 3x) − 2)/x as x approaches zero.', '3/4', ['0', '1/4', '3/2'],
    'Multiply by the conjugate. For nonzero x, the quotient simplifies to 3/(√(4 + 3x) + 2), which tends to 3/4.'],
  ['limits and continuity', 1, 'Let f(x) = ax − 1 for x < 2 and f(x) = x² + 3 for x ≥ 2. What is a if f is continuous at 2?', '4', ['3', '7/2', '8'],
    'The value on the right branch at 2 is 7. Match the left limit 2a − 1 to 7 to obtain a = 4.'],
  ['derivatives and tangent lines', 2, 'What is the slope of the tangent to f(x) = 1/x at x = 2?', '−1/4', ['1/4', '−1/2', '−2'],
    'Write the function as x⁻¹ and differentiate to get −x⁻². At x = 2 the value is −1/4.'],
  ['differentiation rules', 3, 'For x > 0, what is the derivative of x² ln x?', '2x ln x + x', ['2x/x', '2x ln x', 'x² + 2 ln x'],
    'The product rule gives 2x ln x + x²(1/x), which simplifies to 2x ln x + x.'],
  ['differentiation rules', 3, 'For f(x) = cos(3x), what is f′(π/6)?', '−3', ['−1', '0', '3'],
    'The chain rule gives −3 sin(3x). At x = π/6 the sine equals 1.'],
  ['implicit differentiation and related rates', 4, 'A square has side length 7 m and its side is growing at 0.5 m/s. How fast is the area growing?', '7 m²/s', ['3.5 m²/s', '14 m²/s', '24.5 m²/s'],
    'Differentiate A = s² with respect to time. At this instant dA/dt = 2·7·0.5 = 7 m²/s.'],
  ['implicit differentiation and related rates', 4, 'For x² + xy + y² = 7, what is dy/dx at (1, 2)?', '−4/5', ['4/5', '−5/4', '−2/5'],
    'Differentiate implicitly to get 2x + y + (x + 2y)y′ = 0. At (1, 2) this is 4 + 5y′ = 0.'],
  ['extrema and optimization', 5, 'Which point gives the absolute maximum of f(x) = 4x − x² on [0, 5]?', 'x = 2', ['x = 0', 'x = 4', 'x = 5'],
    'The derivative 4 − 2x vanishes at 2. Compare f(2) = 4 with f(0) = 0 and f(5) = −5.'],
  ['extrema and optimization', 5, 'Which statement is true for f(x) = x³ − 3x?', 'There is a local maximum at x = −1.', ['There is a local minimum at x = −1.', 'There is a local maximum at x = 1.', 'There are no local extrema.'],
    'The derivative 3(x² − 1) changes from positive to negative at −1, and from negative to positive at 1.'],
  ['definite integrals and accumulation', 6, 'Evaluate ∫₀² (3x² + 2) dx.', '12', ['8', '10', '16'],
    'The antiderivative x³ + 2x increases from 0 to 8 + 4 = 12.'],
  ['definite integrals and accumulation', 6, 'Evaluate ∫₀¹ 4x(1 + x²)³ dx.', '15/2', ['15/4', '4', '16'],
    'Substitute u = 1 + x², so 4x dx = 2 du and u runs from 1 to 2. The integral is 2(2⁴ − 1⁴)/4 = 15/2.'],
  ['definite integrals and accumulation', 6, 'If F(x) = ∫ from 0 to x² of cos t dt, what is F′(1)?', '2 cos 1', ['cos 1', '2 sin 1', 'sin 1'],
    'The Fundamental Theorem and the chain rule give F′(x) = 2x cos(x²). Evaluate at x = 1.'],
];

export const questions = items.map(([title, unit, prompt, correct, distractors, explanation], index) => ({
  title, prompt, choices: optionsFor({ correct, distractors }, index), correct: index % 4,
  explanation, href: '/us/calculus-1#unit-' + unit,
}));
