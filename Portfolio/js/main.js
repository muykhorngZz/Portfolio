/* ============================================================
   Renders the site from DATA (js/data.js).
   You should not need to edit this file to add content.
   ============================================================ */
(function () {
  "use strict";

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s = "") => String(s).replace(/[&<>"]/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- shared gallery renderer ---------- */
  function gallery(photos, hint) {
    if (!photos || !photos.length) {
      return hint ? `<div class="photo-hint">📷 ${esc(hint)}</div>` : "";
    }
    return `<div class="gallery">` + photos.map(p =>
      `<img src="${esc(p.src)}" alt="${esc(p.caption || "")}"
            data-caption="${esc(p.caption || "")}" loading="lazy"
            onerror="this.remove()" />`
    ).join("") + `</div>`;
  }

  /* ---------- HERO marquee ---------- */
  const track = $("#interestTrack");
  if (track) {
    const chips = DATA.interests.map(i => `<span>${esc(i)}</span>`).join("");
    track.innerHTML = chips + chips; // duplicated for seamless loop
  }

  /* ---------- ABOUT ---------- */
  $("#aboutStory").innerHTML = DATA.about.map(p => `<p>${esc(p)}</p>`).join("");

  // A missing file flips the figure into a labelled placeholder rather than
  // showing a broken-image icon.
  $("#aboutMedia").innerHTML = (DATA.aboutPhotos || []).map(ph => `
    <figure class="am-shot">
      <img src="${esc(ph.src)}" alt="${esc(ph.caption || "")}"
           data-caption="${esc(ph.caption || "")}" loading="lazy"
           onerror="this.closest('figure').classList.add('is-placeholder')" />
      <figcaption>${esc(ph.caption || "")}</figcaption>
    </figure>`).join("");

  $("#timeline").innerHTML = DATA.timeline.map(t => `
    <div class="tl-item">
      <div class="tl-dot"></div>
      <div class="tl-year">${esc(t.year)}</div>
      <div class="tl-title">${esc(t.title)}</div>
      <p class="tl-text">${esc(t.text)}</p>
    </div>`).join("");

  /* ---------- PROJECTS ---------- */
  function projectCard(p) {
    return `
      <article class="card">
        <div class="card-type">${esc(p.type)}</div>
        <h4>${esc(p.name)}</h4>
        ${p.role ? `<div class="card-role">${esc(p.role)}</div>` : ""}
        ${gallery(p.photos)}
        <p class="card-sum">${esc(p.summary)}</p>
        <div class="tags">${(p.tech || []).map(t => `<span>${esc(t)}</span>`).join("")}</div>
      </article>`;
  }

  $("#projectGroups").innerHTML = DATA.projectGroups.map(g => `
    <div class="group reveal" data-group="${esc(g.id)}">
      <div class="group-head">
        <h3>${esc(g.title)}</h3>
      </div>
      <p class="group-blurb">${esc(g.blurb)}</p>
      <div class="cards${g.projects.length === 1 ? " single" : ""}">${g.projects.map(projectCard).join("")}</div>
    </div>`).join("");

  const filters = $("#projectFilters");
  filters.innerHTML =
    `<button class="active" data-filter="all">All</button>` +
    DATA.projectGroups.map(g =>
      `<button data-filter="${esc(g.id)}">${esc(g.title)}</button>`).join("");

  filters.addEventListener("click", e => {
    const btn = e.target.closest("button");
    if (!btn) return;
    $$("button", filters).forEach(b => b.classList.toggle("active", b === btn));
    const f = btn.dataset.filter;
    $$(".group", $("#projectGroups")).forEach(g => {
      g.style.display = (f === "all" || g.dataset.group === f) ? "" : "none";
    });
  });

  /* ---------- AWARDS ---------- */
  $("#awardGroups").innerHTML = DATA.awardGroups.map(g => `
    <div class="group reveal">
      <div class="group-head">
        <h3>${esc(g.title)}</h3>
      </div>
      <div class="award-list">
        ${g.items.map(a => `
          <article class="award">
            <div class="award-year">${esc(a.year)}</div>
            <div>
              <h4>${esc(a.name)}</h4>
              <div class="award-org">${esc(a.org)}</div>
              ${a.note ? `<p class="award-note">${esc(a.note)}</p>` : ""}
              ${gallery(a.photos)}
            </div>
          </article>`).join("")}
      </div>
    </div>`).join("");

  /* ---------- VOLUNTEERING ---------- */
  $("#volList").innerHTML = DATA.volunteering.map(v => `
    <article class="vol reveal">
      <div class="vol-top">
        <h3>${esc(v.org)}</h3>
        <span class="vol-year">${esc(v.year)}</span>
      </div>
      <div class="vol-role">${esc(v.role)}</div>
      <p class="vol-sum">${esc(v.summary)}</p>
      ${(v.duties || []).length
        ? `<ul class="duties">${v.duties.map(d => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}
      ${gallery(v.photos)}
    </article>`).join("");

  /* ---------- PHOTO STRIP ---------- */
  const strip = $("#photoStrip");
  const stripShots = DATA.photoStrip || [];

  if (stripShots.length) {
    // `dup` marks the cloned half: it exists only to make the loop seamless,
    // so it is hidden from assistive tech and skipped by the lightbox.
    const tile = (ph, dup) => `
      <figure class="st-shot">
        <img src="${esc(ph.src)}" alt="${dup ? "" : esc(ph.caption || "")}"
             data-caption="${esc(ph.caption || "")}"
             ${dup ? 'data-dup="1" aria-hidden="true"' : ""}
             onerror="this.closest('figure').classList.add('is-placeholder')" />
        <figcaption>${esc(ph.caption || "")}</figcaption>
      </figure>`;

    const GAP = 16;   // must match the `gap` on .strip-track in the CSS

    /* A percentage-based shift can't loop cleanly here: translateX(-50%) is
       half of (2 sets + all gaps), which overshoots by half a gap, and one
       set is not always wide enough to cover the viewport — that is what
       left the blank tail. Instead: measure one set exactly, clone enough
       sets to overflow the screen, and shift by that measured width. */
    function layoutStrip() {
      strip.querySelectorAll("[data-dup]").forEach(n => n.remove());

      // width of one full cycle = all originals + the gap that follows them
      const setWidth = strip.scrollWidth + GAP;
      if (!setWidth || setWidth <= GAP) return;   // nothing measurable yet

      // enough copies that the track always spans more than the viewport
      const copies = Math.max(1, Math.ceil((window.innerWidth * 2) / setWidth));
      const clones = Array.from({ length: copies },
        () => stripShots.map(p => tile(p, true)).join("")).join("");
      strip.insertAdjacentHTML("beforeend", clones);

      strip.style.setProperty("--shift", setWidth + "px");

      /* Duration is derived from the measured width so the strip always
         drifts at the same pixels-per-second, no matter how many photos
         there are or how wide they are. Tying it to the photo count meant
         a longer strip travelled further in a similar time, i.e. faster. */
      const PX_PER_SEC = 53;
      strip.style.animationDuration = (setWidth / PX_PER_SEC) + "s";
    }

    strip.innerHTML = stripShots.map(p => tile(p, false)).join("");

    // Images arrive at unknown widths, so re-measure once they settle and
    // whenever the viewport changes.
    let stripTimer;
    const relayout = () => { clearTimeout(stripTimer); stripTimer = setTimeout(layoutStrip, 80); };

    strip.querySelectorAll("img").forEach(img => {
      img.addEventListener("load",  relayout);
      img.addEventListener("error", relayout);
    });
    addEventListener("resize", relayout);
    addEventListener("load", relayout);
    layoutStrip();
  } else {
    strip.closest(".strip").hidden = true;
  }

  /* ---------- FOOTER ---------- */
  $("#footerLinks").innerHTML = DATA.links
    .filter(l => l.footer !== false).map(l =>
      `<a href="${esc(l.href)}" ${l.download ? "download" : ""}
          ${l.newTab || /^https?:/.test(l.href) ? 'target="_blank" rel="noopener"' : ""}>${esc(l.label)}</a>`
    ).join("")
    + ((DATA.phones || []).length
      ? `<button type="button" class="footer-call" id="footerCall"
                 aria-expanded="false" aria-controls="footerPhones">Call</button>`
      : "");

  /* the numbers stay collapsed until the Call pill is clicked */
  const fPhones = $("#footerPhones");
  const fCall   = $("#footerCall");

  if (fCall) {
    fPhones.innerHTML = DATA.phones.map(p => `
      <a class="footer-tel" href="tel:${esc(p.number.replace(/\s+/g, ""))}">
        <span class="ft-op">${esc(p.name)}</span> ${esc(p.number)}
      </a>`).join("");

    fCall.addEventListener("click", () => {
      const open = fPhones.hidden;
      fPhones.hidden = !open;
      fCall.setAttribute("aria-expanded", String(open));
    });
  }
  $("#year").textContent = new Date().getFullYear();

  /* ---------- CONTACT DROPDOWN ---------- */
  const cBtn  = $("#contactBtn");
  const cMenu = $("#contactMenu");

  cMenu.innerHTML = DATA.links.map(l => `
    <a role="menuitem" href="${esc(l.href)}"
       ${l.download ? "download" : ""}
       ${l.newTab || /^https?:/.test(l.href) ? 'target="_blank" rel="noopener"' : ""}>
      <span class="cd-ico">
        ${l.logo ? `<img src="${esc(l.logo)}" alt="" onerror="this.remove()" />` : ""}
        <i>${esc(l.icon)}</i>
      </span>
      <span class="cd-meta"><b>${esc(l.label)}</b><small>${esc(l.value)}</small></span>
    </a>`).join("")
    + (DATA.phones && DATA.phones.length
      ? `<div class="cd-sep">Call</div>` + DATA.phones.map(p => `
        <a role="menuitem" href="tel:${esc(p.number.replace(/\s+/g, ""))}">
          <span class="cd-ico cd-logo">
            <img src="${esc(p.logo)}" alt="${esc(p.name)}" onerror="this.remove()" />
          </span>
          <span class="cd-meta"><b>${esc(p.name)}</b><small>${esc(p.number)}</small></span>
        </a>`).join("")
      : "");

  const cItems = () => $$("a", cMenu);

  function openMenu() {
    cMenu.hidden = false;
    cBtn.setAttribute("aria-expanded", "true");
  }
  function closeMenu(focusBtn) {
    cMenu.hidden = true;
    cBtn.setAttribute("aria-expanded", "false");
    if (focusBtn) cBtn.focus();
  }
  const menuOpen = () => !cMenu.hidden;

  cBtn.addEventListener("click", e => {
    e.stopPropagation();
    menuOpen() ? closeMenu() : openMenu();
  });

  // open with the keyboard and land on the first item
  cBtn.addEventListener("keydown", e => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openMenu();
      cItems()[0]?.focus();
    }
  });

  cMenu.addEventListener("keydown", e => {
    const items = cItems();
    const i = items.indexOf(document.activeElement);
    if (e.key === "ArrowDown")      { e.preventDefault(); items[(i + 1) % items.length].focus(); }
    else if (e.key === "ArrowUp")   { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
    else if (e.key === "Home")      { e.preventDefault(); items[0].focus(); }
    else if (e.key === "End")       { e.preventDefault(); items[items.length - 1].focus(); }
    else if (e.key === "Escape")    { e.preventDefault(); closeMenu(true); }
    else if (e.key === "Tab")       { closeMenu(false); }
  });

  // picking an option closes the menu
  cMenu.addEventListener("click", e => { if (e.target.closest("a")) closeMenu(); });

  // clicking anywhere else closes it
  document.addEventListener("click", e => {
    if (menuOpen() && !e.target.closest(".contact-menu")) closeMenu();
  });
  addEventListener("keydown", e => {
    if (e.key === "Escape" && menuOpen()) closeMenu(true);
  });

  /* ---------- NAV ---------- */
  const header = $("#siteHeader"), nav = $("#nav"), toggle = $("#navToggle");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", e => {
    if (e.target.closest("a")) {   // closest(), so clicks on inner spans count too
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  addEventListener("scroll", () => {
    header.classList.toggle("scrolled", scrollY > 10);
  }, { passive: true });

  /* active nav link on scroll */
  const sections = $$("main section[id]");
  const navLinks = $$("#nav a");
  const navObs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      navLinks.forEach(a =>
        a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => navObs.observe(s));

  /* ---------- REVEAL ON SCROLL ---------- */
  const revObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); obs.unobserve(en.target); }
    });
  }, { threshold: .12, rootMargin: "0px 0px -60px 0px" });
  $$(".reveal").forEach(el => revObs.observe(el));

  /* ---------- LIGHTBOX ---------- */
  const lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCap");
  // every image that opens full-screen when clicked
  const ZOOMABLE = ".gallery img, .about-media img, .st-shot img:not([data-dup])";
  let shots = [], idx = 0;

  function collect(fromImg) {
    shots = $$(ZOOMABLE).filter(i => i.isConnected);
    idx = shots.indexOf(fromImg);
  }
  function show() {
    const img = shots[idx];
    if (!img) return;
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = img.dataset.caption || "";
    lb.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function close() { lb.hidden = true; lbImg.src = ""; document.body.style.overflow = ""; }
  function step(d) { if (shots.length) { idx = (idx + d + shots.length) % shots.length; show(); } }

  document.addEventListener("click", e => {
    const img = e.target.closest(ZOOMABLE);
    if (img) { collect(img); show(); }
  });
  $("#lbClose").addEventListener("click", close);
  $("#lbPrev").addEventListener("click", () => step(-1));
  $("#lbNext").addEventListener("click", () => step(1));
  lb.addEventListener("click", e => { if (e.target === lb) close(); });
  addEventListener("keydown", e => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
})();
