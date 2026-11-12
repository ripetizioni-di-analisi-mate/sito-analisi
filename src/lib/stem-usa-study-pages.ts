import { courses, hasUsStudyPages } from '../data/stem-usa/catalog.mjs';
import { highSchoolHasStudyPages } from '../data/stem-usa/high-school/index.mjs';
import { universityStudies } from './stem-usa-practice';

type Worked = { title: string; prompt?: string; steps: string[] };
type Exercise = { number: number; title: string; prompt: string; explanation: string; answer?: string; primitive: boolean };

export interface UsStudyTopic {
  title: string;
  summary: string;
  theory: { slug: string; text: string; explanation: string; proof?: string }[];
  worked: Worked[];
  exercises: Exercise[];
}

function studyTopics(course: typeof courses[number]): UsStudyTopic[] {
  const study = universityStudies.get(course.slug);
  if (study) return course.lessons.map((lesson, index) => {
    const unit = 'unit-' + (index + 1);
    return {
      title: lesson.title,
      summary: lesson.theory,
      theory: study.theory[unit].map(([text, explanation, proof], i) => ({ slug: 'lesson-' + (i + 1), text, explanation, proof })),
      worked: [{ title: lesson.title, steps: [lesson.worked] }, ...study.practice[unit].worked],
      exercises: study.practice[unit].exercises,
    };
  });
  if (!highSchoolHasStudyPages(course)) return [];
  return course.lessons.map(lesson => ({
    title: lesson.title,
    summary: lesson.theory,
    theory: lesson.sections.map(([text, explanation], i) => ({ slug: 'lesson-' + (i + 1), text, explanation })),
    worked: lesson.worked.map(([prompt, solution], i) => ({ title: lesson.workedTitles[i], prompt, steps: solution.split('\n') })),
    exercises: lesson.exercises.map(([title, prompt, explanation, answer], i) => ({
      number: i + 1, title, prompt, explanation, answer, primitive: false,
    })),
  }));
}

export function usSimulationTopics(slug: string) {
  const course = courses.find(item => item.slug === slug);
  return course ? studyTopics(course).map((lesson, index) => ({
    slug: 'unit-' + (index + 1), titolo: lesson.title, breve: lesson.title, n: lesson.exercises.length,
  })) : [];
}

export function usStudyPaths(highSchool: boolean) {
  return courses.filter(course => course.slug.startsWith('hs-') === highSchool && hasUsStudyPages(course.slug))
    .flatMap(course => studyTopics(course).map((lesson, i) => ({
      params: { course: highSchool ? course.slug.slice(3) : course.slug, topic: 'unit-' + (i + 1) },
      props: { slug: course.slug, lesson },
    })));
}

export function usSectionPaths(highSchool: boolean) {
  return usStudyPaths(highSchool).flatMap(({ params, props }) => ['teoria', 'esercizi-svolti', 'esercizi']
    .map(section => ({ params: { ...params, section }, props })));
}

export function usItemPaths(highSchool: boolean) {
  return usStudyPaths(highSchool).flatMap(({ params, props }) => [
    ...props.lesson.worked.map((_, i) => ({ params: { ...params, section: 'esercizi-svolti', number: String(i + 1) }, props })),
    ...props.lesson.exercises.map(({ number }) => ({ params: { ...params, section: 'esercizi', number: String(number) }, props })),
  ]);
}
