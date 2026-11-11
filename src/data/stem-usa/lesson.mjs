export function lesson(title, theory, worked, prompt, correct, distractors, explanation) {
  return { title, theory, worked, prompt, correct, distractors, explanation };
}

export function course(slug, title, description, preparation, sources, lessons) {
  return { slug, title, description, preparation, sources, lessons };
}

export const illinois = (code, title) => ({
  title: 'University of Illinois · ' + title,
  url: 'https://courses.illinois.edu/schedule/terms/' + code + '/',
});
