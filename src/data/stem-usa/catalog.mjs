import { mathematics } from './mathematics.mjs';
import { physics } from './physics.mjs';
import { computing } from './computing.mjs';
import { science } from './science.mjs';

export const groups = [
  { id: 'mathematics', name: 'Mathematics', courses: mathematics },
  { id: 'physics-engineering', name: 'Physics & Engineering', courses: physics },
  { id: 'computer-science', name: 'Computer Science', courses: computing },
  { id: 'natural-sciences', name: 'Natural Sciences', courses: science },
];

export const courses = groups.flatMap(group => group.courses);
export const courseUrl = slug => '/us/' + slug;

export function optionsFor(lesson, index) {
  const choices = [...lesson.distractors];
  const position = index % (choices.length + 1);
  choices.splice(position, 0, lesson.correct);
  return choices;
}
