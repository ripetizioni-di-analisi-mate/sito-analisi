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
