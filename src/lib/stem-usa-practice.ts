import katex from 'katex';
import { calculusPractice, calculusSlug } from '../data/stem-usa/calculus-1-practice.mjs';
import { calculusTimed } from '../data/stem-usa/calculus-1-timed.mjs';
import { calculusTheory } from '../data/stem-usa/calculus-1-theory.mjs';
import { calculus2Practice } from '../data/stem-usa/calculus-2/practice.mjs';
import { calculus2Theory } from '../data/stem-usa/calculus-2/theory.mjs';
import { calculus2Timed } from '../data/stem-usa/calculus-2/timed.mjs';
import { optionsFor } from '../data/stem-usa/catalog.mjs';
import { leggi, valore } from '../../worker/valuta.mjs';
import type { Domanda } from './domande';

export { calculusSlug };

export interface PracticeUnit {
  worked: { title: string; prompt: string; steps: string[] }[];
  exercises: { number: number; title: string; prompt: string; answer: string; explanation: string; primitive: boolean }[];
}

interface UniversityStudy {
  theory: Record<string, string[][]>;
  practice: Record<string, PracticeUnit>;
  timed: Record<string, { number: number; prompt: string; correct: string; distractors: string[]; explanation: string }[]>;
}

export const universityStudies = new Map<string, UniversityStudy>([
  [calculusSlug, { theory: calculusTheory, practice: calculusPractice, timed: calculusTimed }],
  ['calculus-2', { theory: calculus2Theory, practice: calculus2Practice, timed: calculus2Timed }],
]);

export const timedCount = (study: UniversityStudy) =>
  Object.values(study.timed).reduce((total, questions) => total + questions.length, 0);

export function practiceCounts(study: UniversityStudy) {
  return Object.values(study.practice).reduce(
    (counts, topic) => ({ worked: counts.worked + topic.worked.length + 1, exercises: counts.exercises + topic.exercises.length }),
    { worked: 0, exercises: 0 },
  );
}

export function calculusHtml(text: string): string {
  return text.split('$').map((part, index) => index % 2
    ? katex.renderToString(part, { throwOnError: true, strict: false, output: 'htmlAndMathml' })
    : part.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  ).join('');
}

export function calculusAnswer(answer: string, primitive: boolean) {
  const expression = leggi(answer);
  if (!expression) throw new Error('Invalid practice answer: ' + answer);
  if (/\bx\b/.test(answer)) return { tipo: 'funzione' as const, e: answer, primitiva: primitive };
  const v = valore(expression);
  if (!Number.isFinite(v) || primitive) throw new Error('Invalid numeric practice answer: ' + answer);
  return { tipo: 'numero' as const, v };
}

export function practiceAnswers(study: UniversityStudy) {
  return Object.fromEntries(Object.entries(study.practice).flatMap(([topic, material]) =>
    material.exercises.map(exercise => [
      topic + '/' + exercise.number,
      calculusAnswer(exercise.answer, exercise.primitive),
    ])
  ));
}

export function timedQuestions(study: UniversityStudy): Record<string, Domanda[]> {
  return Object.fromEntries(Object.entries(study.timed).map(([topic, questions], topicIndex) => [
    topic,
    questions.map((q, questionIndex) => {
      const index = topicIndex + questionIndex;
      const choices = optionsFor(q, index);
      return {
        id: topic + '/' + q.number,
        n: q.number,
        testo: '<p>' + calculusHtml(q.prompt) + '</p>',
        scelte: choices.map(calculusHtml),
        corretta: index % choices.length + 1,
        spiegazione: '<p>' + calculusHtml(q.explanation) + '</p>',
      };
    }),
  ]));
}
