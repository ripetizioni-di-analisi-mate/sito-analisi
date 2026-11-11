import { exams } from '../data/stem-usa/purdue.mjs';

const letters = 'ABCDE';
const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;' };
const escapeHtml = value => String(value).replace(/[&<>]/g, character => entities[character]);
const studyBook = "https://openstax.org/books/calculus-volume-1/pages/";
const storageKey = 'ripetizioni-calculus-purdue-ma16100-f26-v1';
const app = document.querySelector('#purdue-app');
const dialog = document.querySelector('#purdue-submit-dialog');
let current = null;
let timer = null;
const attempts = Object.create(null);

function restore() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey)) || {};
    for (const exam of exams) {
      const attempt = saved[exam.id];
      const count = exam.questions.length;
      if (!attempt || !Array.isArray(attempt.answers) || attempt.answers.length !== count ||
          !attempt.answers.every(value => value === null || Number.isInteger(value) && value >= 0 && value < 5) ||
          !Number.isInteger(attempt.index) || attempt.index < 0 || attempt.index >= count ||
          !Number.isFinite(attempt.deadline) || ![null, 'submitted', 'expired'].includes(attempt.finished)) continue;
      if (attempt.finished === null && attempt.deadline <= Date.now()) attempt.finished = 'expired';
      attempts[exam.id] = attempt;
    }
  } catch {
    // The current page still works when local storage is disabled.
  }
}
function save() {
  try { localStorage.setItem(storageKey, JSON.stringify(attempts)); } catch {}
}
function focusContent(selector) {
  const element = app.querySelector(selector);
  element?.focus();
}
function stopTimer() {
  clearInterval(timer);
  timer = null;
}
function showMenu(focus = false) {
  stopTimer();
  current = null;
  app.innerHTML = `
    <h2 tabindex="-1" id="main-heading">Choose a practice test</h2>
    <div class="card-grid">${exams.map(exam => {
      const attempt = attempts[exam.id];
      if (attempt && !attempt.finished && attempt.deadline <= Date.now()) attempt.finished = 'expired';
      const label = attempt?.finished ? 'View results' : attempt ? 'Resume practice' : exam.id === 'sample' ? 'Start free quiz' : 'Start practice';
      return `<article class="card">
        <h3>${exam.name}</h3>
        <p class="meta">${exam.questions.length} questions · ${exam.minutes} min</p>
        <p>${exam.description}</p>
        <button class="button" type="button" data-open="${exam.id}" aria-label="${label} · ${exam.name}">${label}</button>
      </article>`;
    }).join('')}</div>
    <p class="note">Your timer starts when you open a test. You can skip questions and return to them before submitting.</p>`;
  save();
  if (focus) focusContent('#main-heading');
}
function newAttempt(exam) {
  attempts[exam.id] = {
    answers: Array(exam.questions.length).fill(null),
    index: 0,
    deadline: Date.now() + exam.minutes * 60_000,
    finished: null,
  };
  save();
}
function openExam(id) {
  current = exams.find(exam => exam.id === id);
  if (!current) return;
  if (!attempts[id]) newAttempt(current);
  if (attempts[id].finished) showResults();
  else if (attempts[id].deadline <= Date.now()) finish('expired');
  else showQuestion(true);
}
function answerCount(attempt) {
  return attempt.answers.filter(answer => answer !== null).length;
}
function updateTimer() {
  if (!current) return;
  const attempt = attempts[current.id];
  const remaining = Math.max(0, Math.ceil((attempt.deadline - Date.now()) / 1000));
  if (remaining === 0) {
    if (dialog.open) dialog.close('cancel');
    finish('expired');
    return;
  }
  const display = document.querySelector('#timer');
  if (!display) return;
  display.textContent = `${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(2, '0')}`;
  display.parentElement.dataset.low = remaining <= 300;
}
function updateProgress() {
  const attempt = attempts[current.id];
  const count = answerCount(attempt);
  const total = current.questions.length;
  const label = `${count} of ${total} answered`;
  document.querySelector('#progress-label').textContent = label;
  document.querySelector('#progress').value = count;
  app.querySelectorAll('[data-question]').forEach((button, index) => {
    const answered = attempt.answers[index] !== null;
    button.classList.toggle('answered', answered);
    button.setAttribute('aria-label', `Question ${index + 1}, ${answered ? 'answered' : 'unanswered'}`);
  });
}
function showQuestion(focus) {
  const attempt = attempts[current.id];
  const index = attempt.index;
  const question = current.questions[index];
  const total = current.questions.length;
  stopTimer();
  app.innerHTML = `
    <button class="back" data-home>← All practice tests</button>
    <div class="practice-head">
      <h2>${current.name}</h2>
      <p class="timer"><span class="sr-only">Time remaining </span><span id="timer" role="timer"></span></p>
    </div>
    <div class="practice-grid">
      <section class="panel" aria-labelledby="question-heading">
        <div class="meta">Question ${index + 1} of ${total}</div>
        <h3 class="prompt" id="question-heading" tabindex="-1">${escapeHtml(question.prompt)}</h3>
        <fieldset aria-labelledby="question-heading">
          <div class="options">${question.choices.map((choice, option) => `
            <label class="option">
              <input type="radio" name="answer" value="${option}" ${attempt.answers[index] === option ? 'checked' : ''}>
              <span class="letter">${letters[option]}.</span><span>${escapeHtml(choice)}</span>
            </label>`).join('')}</div>
        </fieldset>
        <div class="actions">
          <button class="button secondary" data-move="-1" ${index === 0 ? 'disabled' : ''}>Previous</button>
          ${index === total - 1 ? '<button class="button" type="button" data-submit>Submit answers</button>' : '<button class="button" type="button" data-move="1">Next question</button>'}
        </div>
      </section>
      <nav class="panel" aria-label="Questions">
        <h3>Questions</h3>
        <p id="progress-label" class="meta progress-line" aria-live="polite"></p>
        <progress id="progress" max="${total}" aria-label="Answered questions"></progress>
        <div class="numbers">${current.questions.map((_, i) => `
          <button class="number" data-question="${i}" ${i === index ? 'aria-current="step"' : ''}>${i + 1}</button>`).join('')}</div>
        <button class="button secondary" data-submit>Submit answers</button>
      </nav>
    </div>`;
  updateProgress();
  timer = setInterval(updateTimer, 500);
  updateTimer();
  if (focus && !attempt.finished) focusContent('#question-heading');
}
function finish(reason) {
  const attempt = attempts[current.id];
  if (attempt.finished) return;
  stopTimer();
  attempt.finished = reason;
  save();
  showResults();
}
function reviewLinks(sections) {
  return sections.map(([title, slug]) =>
    `<a href="${studyBook + slug}" target="_blank" rel="noopener">${escapeHtml(title)}</a>`
  ).join(' · ');
}
function showResults() {
  stopTimer();
  const exam = current;
  const attempt = attempts[exam.id];
  const total = exam.questions.length;
  const correct = exam.questions.reduce((sum, q, index) => sum + Number(attempt.answers[index] === q.answer), 0);
  const unanswered = total - answerCount(attempt);
  const outcome = attempt.finished === 'expired' ? 'Time expired.' : 'Practice submitted.';
  app.innerHTML = `
    <button class="back" data-home>← All practice tests</button>
    <div class="results-head">
      <h2 tabindex="-1" id="main-heading">${exam.name} results</h2>
      <p class="meta">${outcome}</p>
    </div>
    <div class="panel score-panel">
      <strong class="score">${correct} / ${total}</strong>
      <div><p><strong>${Math.round(100 * correct / total)}% correct</strong></p>
      <p class="meta">${total - correct - unanswered} incorrect · ${unanswered} unanswered</p></div>
    </div>
    <div class="result-tools">
      <h3>Worked solutions</h3>
      ${correct < total ? '<label><input type="checkbox" id="missed-only"> Show missed questions only</label>' : ''}
    </div>
    <div class="review-list">${exam.questions.map((question, index) => {
      const choice = attempt.answers[index];
      const status = choice === null ? 'Unanswered' : choice === question.answer ? 'Correct' : 'Incorrect';
      const selected = choice === null ? '—' : `${letters[choice]}. ${question.choices[choice]}`;
      return `<details class="review-item" data-status="${status.toLowerCase()}">
        <summary>${index + 1}. ${escapeHtml(question.topic)}<span data-outcome="${status.toLowerCase()}">${status}</span></summary>
        <div class="review-body">
          <p class="prompt">${escapeHtml(question.prompt)}</p>
          <p><strong>Your answer</strong> ${escapeHtml(selected)}</p>
          <p><strong>Correct answer</strong> ${letters[question.answer]}. ${escapeHtml(question.choices[question.answer])}</p>
          <ol>${question.steps.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol>
          <p class="meta">Purdue ${question.lessons.length === 1 ? 'lesson' : 'lessons'} ${question.lessons.join(', ')}</p>
          <p><strong>Review on OpenStax</strong> ${reviewLinks(question.review)}</p>
        </div>
      </details>`;
    }).join('')}</div>
    <div class="actions"><button class="button secondary" data-retry>Start a new attempt</button></div>`;
  focusContent('#main-heading');
}
app.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.hasAttribute('data-home')) { showMenu(true); return; }
  if (button.dataset.open) { openExam(button.dataset.open); return; }
  if (!current) return;
  const attempt = attempts[current.id];
  if (button.hasAttribute('data-retry')) { newAttempt(current); showQuestion(true); return; }
  if (attempt.finished) return;
  if (attempt.deadline <= Date.now()) { finish('expired'); return; }
  if (button.hasAttribute('data-submit')) {
    const left = current.questions.length - answerCount(attempt);
    document.querySelector('#confirm-message').textContent = left === 0
      ? 'You answered every question. You can review your score and worked solutions after submitting.'
      : `${left} ${left === 1 ? 'question is' : 'questions are'} unanswered. You can still return to the test.`;
    dialog.returnValue = 'cancel';
    dialog.showModal();
    return;
  }
  if (button.dataset.question !== undefined) attempt.index = Number(button.dataset.question);
  else if (button.dataset.move) attempt.index += Number(button.dataset.move);
  else return;
  save();
  showQuestion(true);
});
app.addEventListener('change', event => {
  if (event.target.id === 'missed-only') {
    app.querySelectorAll('[data-status="correct"]').forEach(item => { item.hidden = event.target.checked; });
    return;
  }
  if (!current || event.target.name !== 'answer') return;
  const attempt = attempts[current.id];
  if (attempt.deadline <= Date.now()) { finish('expired'); return; }
  attempt.answers[attempt.index] = Number(event.target.value);
  save();
  updateProgress();
});
dialog.addEventListener('close', () => {
  if (current && dialog.returnValue === 'submit') {
    finish(attempts[current.id].deadline <= Date.now() ? 'expired' : 'submitted');
  }
});
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && timer !== null) updateTimer();
});
restore();
showMenu();
