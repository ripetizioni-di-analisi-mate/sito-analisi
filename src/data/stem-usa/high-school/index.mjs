import { highSchoolMath } from './mathematics.mjs';
import { advancedHighSchoolMath } from './advanced-math.mjs';
import { lifeAndMatter } from './life-and-matter.mjs';
import { physicalScience } from './physical-science.mjs';

export const highSchoolGroups = [
  { id: 'hs-mathematics', name: 'Mathematics', courses: [...highSchoolMath, ...advancedHighSchoolMath] },
  { id: 'hs-science', name: 'Science', courses: [...lifeAndMatter, ...physicalScience] },
];

export const highSchoolCourses = highSchoolGroups.flatMap(group => group.courses);
export const highSchoolPath = '/us/high-school';
export const highSchoolName = 'High school';
export const highSchoolCourse = slug => highSchoolCourses.find(course => course.slug === slug);
export const highSchoolHasStudyPages = course => Boolean(course?.lessons.length && course.lessons.every(lesson => lesson.sections?.length));
export const highSchoolQuestionCount = lesson => 1 + (lesson.timed?.length ?? 0);
export const highSchoolTimedTopics = Object.fromEntries(
  highSchoolCourses.map(course => [course.slug, course.lessons.map((_, index) => 'unit-' + (index + 1))])
);

// Keep the full course behind its entitlement while opening the same study pages
// as the Italian preview. The Worker removes marked content before serving HTML.
export const FREE_THEORY_SECTIONS = 2;
export const FREE_WORKED_EXAMPLES = 3;
export const FREE_PRACTICE_EXERCISE = 1;
export const FREE_TIMED_QUESTION = 1;

export function highSchoolStudyTopic(course, topic) {
  const match = typeof topic === 'string' && /^unit-([1-9]\d*)$/.exec(topic);
  return match ? course?.lessons[Number(match[1]) - 1] : undefined;
}

export function highSchoolPreviewPage(slug, section) {
  const course = highSchoolCourse(slug);
  if (!highSchoolHasStudyPages(course)) return false;
  if (section === 'simulazione') return true;
  const [topic, view, number, ...rest] = section.split('/');
  if (rest.length) return false;
  if (topic === 'prove-d-esame') return view === 'domande' && number === undefined;
  const lesson = highSchoolStudyTopic(course, topic);
  if (!lesson) return false;
  if (number === undefined) return ['teoria', 'esercizi-svolti', 'esercizi', 'domande'].includes(view);
  const count = view === 'esercizi-svolti' ? lesson.worked.length : view === 'esercizi' ? lesson.exercises.length : 0;
  return /^[1-9]\d*$/.test(number) && Number(number) <= count;
}
