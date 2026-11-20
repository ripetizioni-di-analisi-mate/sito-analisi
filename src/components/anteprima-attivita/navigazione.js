(() => {
  const root = document.getElementById("anteprima-attivita");
  const sections = new Map(Array.from(root.querySelectorAll("[data-attivita]"), section => [section.dataset.attivita, section]));
  const links = Array.from(root.querySelectorAll(".activities a"));

  function displayActivity(initial) {
    const fragment = location.hash.slice(1);
    if (fragment && !sections.has(fragment) && !initial) return;
    const activity = sections.has(fragment) ? fragment : "domande-a-tempo";

    for (const [name, section] of sections) section.hidden = name !== activity;
    for (const link of links) {
      if (link.hash === "#" + activity) {
        link.setAttribute("aria-current", "page");
        document.title = link.textContent + " · Analisi matematica 1";
        if (!initial) link.focus({preventScroll: true});
      } else {
        link.removeAttribute("aria-current");
      }
    }
    if (!initial) window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", () => displayActivity(false));
  displayActivity(true);

  const search = document.getElementById("aa-search");
  const topic = document.getElementById("aa-topic");
  const count = document.getElementById("aa-count");
  const empty = document.getElementById("aa-empty");
  const clear = root.querySelector(".clear-search");

  function searchable(value) {
    return value.toLocaleLowerCase("it").normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ε/g, " epsilon ").replace(/∩/g, " intersezione ").replace(/∪/g, " unione ")
      .replace(/[^\p{L}\p{N}]+/gu, " ").trim();
  }

  const sheets = Array.from(root.querySelectorAll("#aa-sheet-list .sheet"), sheet => ({
    sheet,
    topic: sheet.dataset.group,
    words: searchable([sheet.querySelector(".sheet-copy").textContent, sheet.dataset.terms,
      sheet.dataset.number, Number(sheet.dataset.number)].join(" "))
  }));

  function filterSheets() {
    const words = searchable(search.value).split(" ").filter(Boolean);
    let visible = 0;
    for (const item of sheets) {
      const match = (topic.value === "tutte" || item.topic === topic.value) && words.every(word => item.words.includes(word));
      item.sheet.hidden = !match;
      if (match) visible++;
      else item.sheet.querySelector("details").open = false;
    }
    const filtered = words.length > 0 || topic.value !== "tutte";
    count.textContent = visible + (visible === 1 ? " scheda" : " schede") + (filtered ? " su " + sheets.length : "");
    clear.hidden = !search.value;
    empty.hidden = visible > 0;
  }

  search.addEventListener("input", filterSheets);
  topic.addEventListener("change", filterSheets);
  function clearSearch() {
    search.value = "";
    filterSheets();
    search.focus();
  }
  clear.addEventListener("click", clearSearch);
  document.getElementById("aa-reset").addEventListener("click", () => {
    topic.value = "tutte";
    clearSearch();
  });
  search.addEventListener("keydown", event => {
    if (event.key === "Escape" && search.value) {
      event.preventDefault();
      clearSearch();
    }
  });

})();
