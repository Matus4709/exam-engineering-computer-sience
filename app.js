/* global EXAM_SECTIONS */
(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const appEl = $("#app");
  const tocEl = $("#toc");
  const searchEl = $("#search");
  const clearEl = $("#clearSearch");
  const toggleAllEl = $("#toggleAll");
  const printEl = $("#print");

  const sections = Array.isArray(window.EXAM_SECTIONS) ? window.EXAM_SECTIONS : [];

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function slugify(s) {
    return String(s)
      .toLowerCase()
      .trim()
      .replaceAll(/[\s/]+/g, "-")
      .replaceAll(/[^\p{L}\p{N}-]+/gu, "")
      .replaceAll(/-+/g, "-")
      .replaceAll(/^-|-$/g, "");
  }

  function renderMarkdownLite(text) {
    // Celowo minimalne: paragrafy + listy w HTML (treści wpisujemy już jako HTML albo proste teksty)
    return escapeHtml(text).replaceAll("\n", "<br/>");
  }

  function buildSection(section) {
    const sid = section.id || slugify(section.title);
    const qaCount = section.qas?.length ?? 0;
    const sectionEl = document.createElement("section");
    sectionEl.className = "section";
    sectionEl.id = sid;
    sectionEl.dataset.sectionTitle = section.title;

    sectionEl.innerHTML = `
      <div class="section__head">
        <h2 class="section__title">
          <span>${escapeHtml(section.title)}</span>
          <span class="section__badge">${qaCount} pytań</span>
        </h2>
        ${
          section.tags?.length
            ? `<div>${section.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>`
            : ""
        }
      </div>
      <div class="section__body"></div>
    `;

    const body = $(".section__body", sectionEl);

    (section.qas || []).forEach((qa, idx) => {
      const d = document.createElement("details");
      d.className = "qa";
      if (qa.open) d.open = true;
      d.dataset.q = qa.q;
      d.dataset.aText = stripHtml(qa.a || "");
      d.innerHTML = `
        <summary>
          <span class="qa__marker">${idx + 1}</span>
          <span class="qa__q">${escapeHtml(qa.q)}</span>
        </summary>
        <div class="qa__a">
          ${qa.aHtml ? qa.aHtml : qa.a ? renderMarkdownLite(qa.a) : ""}
        </div>
      `;
      body.appendChild(d);
    });

    return sectionEl;
  }

  function stripHtml(html) {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  function render() {
    appEl.innerHTML = "";
    sections.forEach((s) => appEl.appendChild(buildSection(s)));
    buildTOC();
  }

  function buildTOC() {
    tocEl.innerHTML = "";
    const links = sections.map((s) => {
      const id = s.id || slugify(s.title);
      const a = document.createElement("a");
      a.href = `#${id}`;
      a.textContent = s.title;
      a.dataset.target = id;
      return a;
    });
    links.forEach((a) => tocEl.appendChild(a));

    const onScroll = () => {
      const fromTop = window.scrollY + 120;
      let activeId = null;
      $$(".section").forEach((sec) => {
        if (sec.offsetTop <= fromTop) activeId = sec.id;
      });
      $$("#toc a").forEach((a) => {
        a.classList.toggle("active", a.dataset.target === activeId);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function openAll(open) {
    $$(".qa").forEach((d) => (d.open = open));
    toggleAllEl.textContent = open ? "Zwiń wszystko" : "Rozwiń wszystko";
    toggleAllEl.dataset.open = String(open);
  }

  function clearSearch() {
    searchEl.value = "";
    applySearch("");
  }

  function highlight(el, query) {
    // proste highlightowanie w summary; answer zostawiamy bez zmian, żeby nie niszczyć HTML
    const q = query.trim();
    if (!q) {
      $$(".qa__q", el).forEach((n) => (n.innerHTML = escapeHtml(el.dataset.q || n.textContent || "")));
      return;
    }
    const safe = escapeRegExp(q);
    const re = new RegExp(`(${safe})`, "ig");
    const original = el.dataset.q || "";
    const marked = escapeHtml(original).replace(re, '<span class="mark">$1</span>');
    $(".qa__q", el).innerHTML = marked;
  }

  function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function applySearch(query) {
    const q = query.trim().toLowerCase();
    const any = q.length > 0;

    $$(".qa").forEach((d) => {
      const hay = `${(d.dataset.q || "").toLowerCase()} ${(d.dataset.aText || "").toLowerCase()}`;
      const match = !any || hay.includes(q);
      d.style.display = match ? "" : "none";
      highlight(d, query);
    });

    $$(".section").forEach((sec) => {
      const visible = $$(".qa", sec).some((d) => d.style.display !== "none");
      sec.style.display = visible ? "" : "none";
    });
  }

  // Events
  searchEl.addEventListener("input", (e) => applySearch(e.target.value));
  clearEl.addEventListener("click", clearSearch);
  toggleAllEl.addEventListener("click", () => {
    const isOpen = toggleAllEl.dataset.open === "true";
    openAll(!isOpen);
  });
  printEl.addEventListener("click", () => window.print());

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchEl) {
      e.preventDefault();
      searchEl.focus();
    }
    if (e.key === "Escape") {
      if (document.activeElement === searchEl || searchEl.value) clearSearch();
    }
  });

  // Init
  render();
  openAll(false);
})();

