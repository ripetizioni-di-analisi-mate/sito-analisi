(() => {
  const questions = [
    {
      prompt: "Dati A = {0, 1, 2, 3} e B = {2, 3, 5}, quale insieme è A ∖ B?",
      answers: ["{5}", "{0, 1}", "{2, 3}", "{0, 1, 5}"],
      correct: 1,
      reviewTitle: "Ripassa la differenza tra insiemi",
      reviewUrl: "/analisi-1/insiemi/teoria/operazioni-tra-insiemi",
      explanation: "Per ottenere A ∖ B, parti da A e togli gli elementi che trovi anche in B. Elimini 2 e 3. Rimangono 0 e 1, quindi A ∖ B = {0, 1}. Il 5 appartiene solo a B e non può comparire nella differenza A ∖ B."
    },
    {
      prompt: "Dati A = {1, 2} e B = {0, 1}, a quale dei prodotti cartesiani A × B e B × A appartiene la coppia (0, 1)?",
      answers: ["Solo ad A × B", "A entrambi", "Solo a B × A", "A nessuno dei due"],
      correct: 2,
      reviewTitle: "Ripassa il prodotto cartesiano",
      reviewUrl: "/analisi-1/insiemi/teoria/prodotto-cartesiano",
      explanation: "Conta l’ordine delle coordinate. Per appartenere ad A × B, la coppia dovrebbe avere la prima coordinata in A. Lo 0 non appartiene ad A. Invece 0 appartiene a B e 1 appartiene ad A, quindi (0, 1) appartiene a B × A."
    }
  ];

  const byId = (id) => document.getElementById("aa-" + id);
  const landing = byId("landing");
  const session = byId("sessione");
  const summary = byId("riepilogo");
  const answerForm = byId("risposte");
  const choices = byId("scelte");
  const heading = byId("domanda");
  const feedback = byId("esito");
  const reviewLink = byId("ripasso-mirato");
  const confirmButton = byId("conferma");
  const nextButton = byId("continua");

  let current = 0;
  let score = 0;
  let deadline = 0;
  let interval = null;
  let answered = false;

  function stopTimer() {
    window.clearInterval(interval);
    interval = null;
  }

  function openView(view) {
    for (const element of [landing, session, summary]) {
      element.hidden = element !== view;
    }
    window.scrollTo(0, 0);
  }

  function finishAnswer(selected) {
    if (answered) return;
    answered = true;
    stopTimer();
    const question = questions[current];
    const correct = selected === question.correct;
    if (correct) score += 1;
    choices.disabled = true;
    confirmButton.hidden = true;
    const rightChoice = choices.querySelectorAll("label")[question.correct];
    rightChoice.classList.add("correct");
    if (!correct) {
      const note = document.createElement("span");
      note.className = "choice-note";
      note.textContent = "Risposta corretta";
      rightChoice.append(note);
      reviewLink.href = question.reviewUrl;
      reviewLink.textContent = question.reviewTitle;
      reviewLink.setAttribute("aria-label", question.reviewTitle + " (si apre in una nuova scheda)");
    }
    reviewLink.hidden = correct;
    byId("tempo").hidden = true;
    feedback.hidden = false;
    const title = byId("titolo-esito");
    if (selected === null) title.textContent = "Tempo scaduto";
    else title.textContent = correct ? "Risposta corretta" : "Risposta errata";
    byId("spiegazione").textContent = question.explanation;
    nextButton.textContent = current + 1 === questions.length ? "Vedi il risultato" : "Domanda successiva";
    if (!session.closest("[data-attivita]").hidden) title.focus({preventScroll: true});
  }

  function updateTime() {
    if (answered || session.hidden) return;
    const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    const seconds = String(remaining % 60).padStart(2, "0");
    byId("minuti").textContent = Math.floor(remaining / 60) + ":" + seconds;
    if (remaining === 0) finishAnswer(null);
  }

  function showQuestion() {
    stopTimer();
    openView(session);
    const question = questions[current];
    answered = false;
    feedback.hidden = true;
    reviewLink.hidden = true;
    byId("tempo").hidden = false;
    confirmButton.hidden = false;
    confirmButton.disabled = true;
    choices.disabled = false;
    choices.querySelectorAll("label").forEach((label) => label.remove());
    byId("progresso").textContent = "Domanda " + (current + 1) + " di " + questions.length;
    heading.textContent = question.prompt;
    question.answers.forEach((answer, index) => {
      const label = document.createElement("label");
      label.className = "choice";
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "scelta";
      radio.value = String(index);
      radio.required = true;
      const text = document.createElement("span");
      text.textContent = answer;
      label.append(radio, text);
      choices.append(label);
    });
    deadline = Date.now() + 120000;
    updateTime();
    interval = window.setInterval(updateTime, 250);
    heading.focus({preventScroll: true});
  }

  byId("inizia").addEventListener("click", () => {
    current = 0;
    score = 0;
    showQuestion();
  });

  answerForm.addEventListener("change", () => {
    confirmButton.disabled = answered || !choices.querySelector("input:checked");
  });

  answerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (answered || session.hidden) return;
    updateTime();
    const selected = choices.querySelector("input:checked");
    if (!answered && selected) finishAnswer(Number(selected.value));
  });

  nextButton.addEventListener("click", () => {
    if (!answered || session.hidden) return;
    current += 1;
    if (current < questions.length) {
      showQuestion();
      return;
    }
    openView(summary);
    byId("punteggio").textContent = score === 1
      ? "Hai dato 1 risposta corretta su 2."
      : "Hai dato " + score + " risposte corrette su 2.";
    byId("titolo-riepilogo").focus({preventScroll: true});
  });

  document.querySelectorAll("#anteprima-attivita [data-ritorno]").forEach((button) => {
    button.addEventListener("click", () => {
      stopTimer();
      openView(landing);
      byId("inizia").focus({preventScroll: true});
    });
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) updateTime();
  });
})();
