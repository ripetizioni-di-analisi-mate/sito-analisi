(() => {
  // Risposte dei primi due esercizi del capitolo.
  const exercises = {
    insiemi: {
      expected: ["0,1,2,3,5", "2,3", "0,1", "5"],
      read: readSet,
      retry: ["Controlla quali elementi appartengono ad almeno uno dei due insiemi.",
        "Cerca gli elementi presenti in entrambi gli insiemi.",
        "Tieni gli elementi di A che non compaiono in B.",
        "Tieni gli elementi di B che non compaiono in A."]
    },
    intervalli: {
      expected: ["[0,2]", "(-3,4)", "(-3,0)", "(-inf,0)U[4,inf)"],
      read: readIntervals,
      retry: ["Controlla se 0 e 2 appartengono a entrambi gli intervalli.",
        "Verifica se i due estremi esterni appartengono all’unione.",
        "Parti da A e togli anche gli estremi che appartengono a B.",
        "Il complementare contiene i reali esterni a B. Verifica in particolare 0 e 4."]
    }
  };

  function readSet(raw) {
    let value = raw.replace(/−/g, "-").trim();
    if (value.startsWith("{") && value.endsWith("}")) value = value.slice(1, -1).trim();
    if (!/^[+-]?\d+(?:(?:\s*[,;]\s*|\s+)[+-]?\d+)*$/.test(value)) return null;
    const numbers = value.split(/\s*[,;]\s*|\s+/).map(Number);
    if (!numbers.every(Number.isSafeInteger)) return null;
    return Array.from(new Set(numbers)).sort((a, b) => a - b).join(",");
  }

  function readIntervals(raw) {
    const value = raw.toLowerCase().replace(/\s+/g, "").replace(/−/g, "-")
      .replace(/\\?infty|infinito|infinity|∞/g, "inf").replace(/∪|\\cup/g, "u");
    const intervals = [];
    for (const piece of value.split("u")) {
      const match = /^([([\]])([+-]?(?:\d+(?:\.\d+)?|inf))[,;]([+-]?(?:\d+(?:\.\d+)?|inf))([)\]\[])$/.exec(piece);
      if (!match) return null;
      const [, left, a, b, right] = match;
      const lower = endpointValue(a);
      const upper = endpointValue(b);
      const closedLeft = left === "[";
      const closedRight = right === "]";
      if (Number.isNaN(lower) || Number.isNaN(upper) || lower > upper || (lower === upper && !(closedLeft && closedRight)) ||
          (!Number.isFinite(lower) && closedLeft) || (!Number.isFinite(upper) && closedRight)) return null;
      intervals.push({lower, upper, closedLeft, closedRight});
    }
    intervals.sort((a, b) => a.lower - b.lower || Number(b.closedLeft) - Number(a.closedLeft));
    const union = [];
    for (const next of intervals) {
      const last = union.at(-1);
      if (!last || next.lower > last.upper || (next.lower === last.upper && !last.closedRight && !next.closedLeft)) {
        union.push(next);
      } else if (next.upper > last.upper) {
        last.upper = next.upper;
        last.closedRight = next.closedRight;
      } else if (next.upper === last.upper && next.closedRight) {
        last.closedRight = true;
      }
    }
    return union.map(({lower, upper, closedLeft, closedRight}) =>
      (closedLeft ? "[" : "(") + endpointText(lower) + "," + endpointText(upper) + (closedRight ? "]" : ")")
    ).join("U");
  }

  function endpointValue(value) {
    if (value === "-inf") return -Infinity;
    if (value.endsWith("inf")) return Infinity;
    const number = Number(value);
    return Number.isFinite(number) ? number : NaN;
  }

  function endpointText(number) {
    if (Number.isFinite(number)) return String(number);
    return number < 0 ? "-inf" : "inf";
  }

  for (const form of document.querySelectorAll("#anteprima-attivita .practice")) {
    const exercise = exercises[form.dataset.esercizio];
    const fields = Array.from(form.querySelectorAll(".answer-field input"));
    const status = form.querySelector(".form-status");

    function noteFor(field) {
      return document.getElementById(field.getAttribute("aria-describedby"));
    }
    for (const field of fields) {
      field.addEventListener("input", () => {
        field.removeAttribute("aria-invalid");
        delete field.dataset.valid;
        noteFor(field).textContent = "";
        status.textContent = "";
      });
    }
    form.addEventListener("submit", event => {
      event.preventDefault();
      let correctCount = 0;
      for (const [i, field] of fields.entries()) {
        const result = exercise.read(field.value);
        const correct = result === exercise.expected[i];
        field.dataset.valid = String(correct);
        field.setAttribute("aria-invalid", String(!correct));
        let note = exercise.retry[i];
        if (!field.value.trim()) note = "Scrivi la risposta.";
        else if (result === null) note = form.dataset.esercizio === "insiemi" ? "Usa numeri separati da virgole." : "Controlla le parentesi e gli estremi.";
        if (correct) {
          correctCount++;
          note = "Corretta.";
        }
        noteFor(field).textContent = note;
      }
      status.textContent = correctCount === 4 ? "Tutte e 4 le risposte sono corrette." :
        correctCount + (correctCount === 1 ? " risposta corretta su 4." : " risposte corrette su 4.");
    });
  }
})();
