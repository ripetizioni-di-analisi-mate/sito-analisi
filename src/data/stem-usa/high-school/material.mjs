export function unit(title, theory, worked, exercises, quiz) {
  const [prompt, correct, distractors, explanation] = quiz;
  return { title, theory, worked, exercises, prompt, correct, distractors, explanation };
}

export const mathFramework = {
  title: 'California Department of Education · High school mathematics framework',
  url: 'https://www.cde.ca.gov/CI/ma/cf/documents/mathframeworkch8.pdf',
};
export const commonCore = {
  title: 'Common Core Mathematics · Model high school course pathways',
  url: 'https://www.cde.ca.gov/be/cc/cd/documents/may2012item12catt2.pdf',
};
export const texasMath = {
  title: 'Texas Education Agency · High school mathematics standards',
  url: 'https://tea.texas.gov/laws-and-rules/texas-administrative-code/19-tac-chapter-111',
};
export const scienceFramework = {
  title: 'California Department of Education · High school science course model',
  url: 'https://www.cde.ca.gov/ci/sc/cf/documents/scifwchapter8.pdf',
};
export const texasScience = {
  title: 'Texas Education Agency · High school science standards',
  url: 'https://tea.texas.gov/laws-and-rules/texas-administrative-code/19-tac-chapter-112',
};
