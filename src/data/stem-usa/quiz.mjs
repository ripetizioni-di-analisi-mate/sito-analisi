const m = String.raw;

export function fraction(numerator, denominator = 1) {
  if (!denominator) throw new Error('Zero denominator');
  let a = Math.abs(numerator), b = Math.abs(denominator);
  while (b) [a, b] = [b, a % b];
  const n = Math.abs(numerator / a), d = Math.abs(denominator / a);
  const sign = numerator * denominator < 0 ? '-' : '';
  return d === 1 ? sign + n : m`${sign}\dfrac{${n}}{${d}}`;
}

const math = value => '$' + value + '$';
export const question = (prompt, correct, distractors, explanation) => ({ prompt, correct, distractors, explanation });
export const numericQuestion = (prompt, correct, distractors, explanation) => question(prompt, math(correct), distractors.map(math), explanation);
