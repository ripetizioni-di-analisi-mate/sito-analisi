import { universityStudies, timedQuestions, practiceAnswers, practiceCounts, timedCount, calculusHtml, calculusAnswer } from './stem-usa-practice';
import { highSchoolCourses, highSchoolCourse, highSchoolTimedTopics } from '../data/stem-usa/high-school/index.mjs';
import { optionsFor, universityTimedTopics } from '../data/stem-usa/catalog.mjs';
import type { Domanda } from './domande';

export const usTimedTopics: Record<string, string[]> = { ...universityTimedTopics, ...highSchoolTimedTopics };
export const usPracticeSlugs = [...universityStudies.keys(), ...highSchoolCourses.map(course => course.slug)];

export function usQuestions(slug: string): Record<string, Domanda[]> {
  const study = universityStudies.get(slug);
  if (study) return timedQuestions(study);
  const course = highSchoolCourse(slug);
  if (!course) return {};
  return Object.fromEntries(course.lessons.map((lesson, index) => {
    const topic = 'unit-' + (index + 1);
    return [topic, [{
      id: topic + '/1',
      n: 1,
      testo: '<p>' + calculusHtml(lesson.prompt) + '</p>',
      scelte: optionsFor(lesson, index).map(calculusHtml),
      corretta: index % 4 + 1,
      spiegazione: '<p>' + calculusHtml(lesson.explanation) + '</p>',
    }]];
  }));
}

export function usAnswers(slug: string) {
  const study = universityStudies.get(slug);
  if (study) return practiceAnswers(study);
  const course = highSchoolCourse(slug);
  if (!course) return {};
  return Object.fromEntries(course.lessons.flatMap((lesson, index) => lesson.exercises.flatMap((exercise, i) => exercise[3] === undefined
    ? [] : [[`unit-${index + 1}/${i + 1}`, calculusAnswer(exercise[3], false)]])));
}

export function usContentCounts(slug: string, topics: number) {
  const study = universityStudies.get(slug);
  if (study) return { ...practiceCounts(study), timed: timedCount(study), review: topics };
  const course = highSchoolCourse(slug);
  if (!course) return { worked: topics, exercises: 0, timed: 0, review: topics };
  return {
    worked: course.lessons.reduce((sum, lesson) => sum + lesson.worked.length, 0),
    exercises: course.lessons.reduce((sum, lesson) => sum + lesson.exercises.length, 0),
    timed: course.lessons.length,
    review: 0,
  };
}
