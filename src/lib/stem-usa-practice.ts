import katex from 'katex';
import { calculusPractice } from '../data/stem-usa/calculus-1-practice.mjs';
import { calculusTimed } from '../data/stem-usa/calculus-1-timed.mjs';
import { leggi, valore } from '../../worker/valuta.mjs';
import type { Domanda } from './domande';

export { calculusSlug } from '../data/stem-usa/calculus-1-practice.mjs';
export const calculusTopics = Object.keys(calculusTimed);
export const calculusTimedCount = Object.values(calculusTimed).reduce((total, questions) => total + questions.length, 0);
export const calculusCounts = Object.values(calculusPractice).reduce(
  (counts, topic) => ({ worked: counts.worked + topic.worked.length + 1, exercises: counts.exercises + topic.exercises.length }),
  { worked: 0, exercises: 0 },
);

export function calculusHtml(text: string): string {
  return text.split('$').map((part, index) => index % 2
    ? katex.renderToString(part, { throwOnError: true, strict: false, output: 'htmlAndMathml' })
    : part.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  ).join('');
}

export function calculusAnswer(answer: string, primitive: boolean) {
  const expression = leggi(answer);
  if (!expression) throw new Error('Invalid Calculus I answer: ' + answer);
  if (/\bx\b/.test(answer)) return { tipo: 'funzione' as const, e: answer, primitiva: primitive };
  const v = valore(expression);
  if (!Number.isFinite(v) || primitive) throw new Error('Invalid Calculus I numeric answer: ' + answer);
  return { tipo: 'numero' as const, v };
}

export function calculusAnswers() {
  return Object.fromEntries(Object.entries(calculusPractice).flatMap(([topic, material]) =>
    material.exercises.map(exercise => [
      topic + '/' + exercise.number,
      calculusAnswer(exercise.answer, exercise.primitive),
    ])
  ));
}

export function calculusQuestions(): Record<string, Domanda[]> {
  return Object.fromEntries(Object.entries(calculusTimed).map(([topic, questions], topicIndex) => [
    topic,
    questions.map((q, questionIndex) => {
      const correct = (topicIndex + questionIndex) % 4;
      const choices = [...q.distractors];
      choices.splice(correct, 0, q.correct);
      return {
        id: topic + '/' + q.number,
        n: q.number,
        testo: '<p>' + calculusHtml(q.prompt) + '</p>',
        scelte: choices.map(calculusHtml),
        corretta: correct + 1,
        spiegazione: '<p>' + calculusHtml(q.explanation) + '</p>',
      };
    }),
  ]));
}
