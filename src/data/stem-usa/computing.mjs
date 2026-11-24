import { course, lesson as L, illinois } from './lesson.mjs';

const texas = {
  title: 'The University of Texas at Austin · Computer Science courses',
  url: 'https://catalog.utexas.edu/courses/c_s/',
};

// Informatica tolta dal sito (24/11/2026, richiesta di Carmine): resta solo Discrete Mathematics, nell'area Mathematics.
export const discreteMathematics = [
  course('discrete-mathematics', 'Discrete Mathematics', 'Develop proof and counting tools used in computer science.',
    'Algebra and comfort with symbolic reasoning.',
    [illinois('CS/173', 'CS 173 Discrete Structures'), texas],
    [
      L('Propositional logic and quantifiers', 'An implication P ⇒ Q fails only when P is true and Q is false. Negating a universal statement turns it into an existential statement with the predicate negated.',
        'The negation of “Every record has a key” is “At least one record has no key.” A single counterexample disproves the original statement.',
        'Which is logically equivalent to P ⇒ Q?', '¬Q ⇒ ¬P', ['Q ⇒ P', '¬P ⇒ ¬Q', 'P ∧ ¬Q'], 'An implication and its contrapositive are false in exactly the same case: P true and Q false.'),
      L('Sets, functions and relations', 'A function from A to B assigns exactly one element of B to every element of A. It is injective when distinct inputs have distinct outputs. It is surjective when every element of B is attained.',
        'The map f: ℤ → ℤ with f(n) = 2n is injective because 2a = 2b implies a = b. It misses every odd integer.',
        'For f: ℤ → ℤ given by f(n) = n + 3, which property holds?', 'It is both injective and surjective.', ['It is injective only.', 'It is surjective only.', 'It is neither.'], 'The inverse sends every integer m to m − 3. Therefore each output has exactly one input.'),
      L('Proof by induction', 'Establish a base case, then prove the implication from the claim at k to the claim at k + 1. The induction hypothesis is available during the step.',
        'To prove 1 + ⋯ + n = n(n + 1)/2, assume the formula at n = k. Add k + 1 and simplify to (k + 1)(k + 2)/2.',
        'After verifying P(1), which step completes a standard induction for all n ≥ 1?', 'Prove P(k) ⇒ P(k + 1) for every k ≥ 1.', ['Prove P(2) alone.', 'Assume P(k + 1) for every k.', 'Verify P(10) and P(100).'], 'The base case starts the chain, and the implication extends it to each succeeding integer.'),
      L('Counting and combinatorics', 'Use the product rule for successive independent choices. Use combinations when the order of distinct chosen items is irrelevant. If order matters, use permutations.',
        'There are 5·4 = 20 ways to assign a chair and vice chair from 5 people. If selecting a two-person committee with no roles, divide by 2 to obtain 10.',
        'How many three-person teams can be chosen from six people?', '20', ['18', '36', '120'], 'Choose without order: (6·5·4)/(3·2·1) = 20.'),
      L('Graphs, trees and paths', 'A graph has vertices and edges. A tree is connected and acyclic, so there is a unique simple path between each pair of vertices. A finite tree with n vertices has n − 1 edges.',
        'A network of five nodes connected as a tree has four edges. Removing any edge disconnects it because that edge lay on the only path between its endpoints.',
        'How many edges does a tree with 12 vertices have?', '11', ['10', '12', '66'], 'A tree on n vertices has n − 1 edges. Substitution gives 11.'),
    ]),
];
