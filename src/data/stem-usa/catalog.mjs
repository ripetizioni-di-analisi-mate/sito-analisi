import { mathematics } from './mathematics.mjs';
import { physics } from './physics.mjs';
import { computing } from './computing.mjs';
import { science } from './science.mjs';
import { highSchoolCourses, highSchoolPath, highSchoolCourse, highSchoolHasStudyPages, highSchoolPreviewPage } from './high-school/index.mjs';

export const groups = [
  { id: 'mathematics', name: 'Mathematics', courses: mathematics },
  { id: 'physics-engineering', name: 'Physics & Engineering', courses: physics },
  { id: 'computer-science', name: 'Computer Science', courses: computing },
  { id: 'natural-sciences', name: 'Natural Sciences', courses: science },
];

export const universityCourses = groups.flatMap(group => group.courses);
const coursesWithTimedPractice = new Set(['calculus-1', 'calculus-2', 'calculus-3', 'differential-equations']);
export const universityTimedTopics = Object.fromEntries(
  universityCourses
    .filter(course => coursesWithTimedPractice.has(course.slug))
    .map(course => [course.slug, course.lessons.map((_, index) => 'unit-' + (index + 1))])
);
export const hasUsStudyPages = slug => Object.hasOwn(universityTimedTopics, slug)
  || highSchoolHasStudyPages(highSchoolCourse(slug));

export function usStudyPreviewPage(slug, section) {
  if (slug?.startsWith('hs-')) return highSchoolPreviewPage(slug, section);
  if (!Object.hasOwn(universityTimedTopics, slug)) return false;
  if (section === 'simulazione') return true;
  const [topic, view, number, ...rest] = section.split('/');
  if (rest.length) return false;
  if (topic === 'prove-d-esame') return view === 'domande' && number === undefined;
  if (!universityTimedTopics[slug].includes(topic)) return false;
  if (number === undefined) return ['teoria', 'esercizi-svolti', 'esercizi', 'domande'].includes(view);
  return ['esercizi-svolti', 'esercizi'].includes(view) && /^[1-9]\d*$/.test(number);
}

export const courses = [...universityCourses, ...highSchoolCourses];
export const courseUrl = slug => slug.startsWith('hs-') ? highSchoolPath + '/' + slug.slice(3) : '/us/' + slug;

export function optionsFor(lesson, index) {
  const choices = [...lesson.distractors];
  const position = index % (choices.length + 1);
  choices.splice(position, 0, lesson.correct);
  return choices;
}
