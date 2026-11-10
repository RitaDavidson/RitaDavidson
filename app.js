/* ============================================================================
   This file builds the page from content.js.
   You should not need to edit it. If something looks wrong, it is almost
   always a missing comma or a missing quote mark in content.js.
   ============================================================================ */

(function () {
  "use strict";

  var C = window.CONTENT || (typeof CONTENT !== "undefined" ? CONTENT : null);
  if (!C) { console.error("content.js did not load."); return; }

  /* ---------------------------------------------------------- helpers -- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function has(v) {
    if (v == null) return false;
    if (Array.isArray(v)) return v.length > 0;
    return String(v).trim() !== "";
  }
  function $(id) { return document.getElementById(id); }
  function set(id, html) { var el = $(id); if (el) el.innerHTML = html; }
  function hideSection(id) { var el = $(id); if (el) el.hidden = true; }

  /* A url of "#" (or blank) means "show the button, but it doesn't go
     anywhere yet". Such links never open a new tab and do nothing on click. */
  function isPlaceholder(url) {
    var u = String(url == null ? "" : url).trim();
    return u === "" || u === "#";
  }
  function linkAttrs(url) {
    if (isPlaceholder(url)) return ' href="#" data-placeholder="true"';
    return ' href="' + esc(url) + '"'
      + (/^https?:/i.test(url) ? ' target="_blank" rel="noopener"' : "");
  }

  /* Turn a list of {label,url} into link chips */
  function chips(links) {
    if (!has(links)) return "";
    return '<div class="chips">' + links.filter(function (l) {
      return has(l && l.label);
    }).map(function (l) {
      return '<a class="chip"' + linkAttrs(l.url) + '>' + esc(l.label) + '</a>';
    }).join("") + '</div>';
  }

  /* Bold the site owner's own name inside an author string.
     Works with *asterisks* or by matching the name from basics.name. */
  function boldSelf(authors) {
    var out = esc(authors);
    // *Name* → bold
    out = out.replace(/\*([^*]+)\*/g, "<strong>$1</strong>");
    var full = (C.basics && C.basics.name) || "";
    var bare = full.replace(/^(Dr\.?|Prof\.?|Professor|PhD)\s+/i, "").trim();
    if (bare && out.indexOf("<strong>") === -1) {
      var parts = bare.split(/\s+/);
      var first = parts[0], last = parts[parts.length - 1];
      // Matches "Jordan Avery", "J. Avery", "Avery, J." and similar
      var pattern = "(" + esc(bare) + "|" + esc(first.charAt(0)) + "\\.?\\s*" + esc(last)
        + "|" + esc(last) + ",\\s*" + esc(first.charAt(0)) + "\\.?)";
      try {
        out = out.replace(new RegExp(pattern, "g"), "<strong>$1</strong>");
      } catch (e) { /* if the name has odd characters, just skip bolding */ }
    }
    return out;
  }

  /* ------------------------------------------------------------ icons -- */
  var ICONS = {
    scholar:     '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2 1 8l11 6 9-4.9V17h2V8L12 2zM5 13.2V17c0 2.2 3.1 4 7 4s7-1.8 7-4v-3.8l-7 3.8-7-3.8z"/></svg>',
    orcid:       '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zM7.4 17.9H5.7V7.6h1.7v10.3zM6.5 6.6a1 1 0 1 1 0-2.1 1 1 0 0 1 0 2.1zm5 11.3H9.9V7.6h3.7c3.6 0 5.2 2.5 5.2 5.1 0 2.9-2.2 5.2-5.3 5.2h-2zm.1-1.6h1.7c2.4 0 3.6-1.6 3.6-3.6 0-1.8-1.1-3.5-3.6-3.5h-1.7v7.1z"/></svg>',
    linkedin:    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.5V9h3.6v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-.9-.8-1.7-1.8-1.7z"/></svg>',
    university:  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3 2 8v2h20V8L12 3zM4 11v7H2v2h20v-2h-2v-7h-2v7h-3v-7h-2v7H9v-7H7v7H4v-7z"/></svg>',
    researchgate:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.6 0H4.4A4.4 4.4 0 0 0 0 4.4v15.2A4.4 4.4 0 0 0 4.4 24h15.2a4.4 4.4 0 0 0 4.4-4.4V4.4A4.4 4.4 0 0 0 19.6 0zM8.4 15.9c-.9 0-1.6-.2-2.1-.7-.6-.5-.9-1.2-.9-2.1V10c0-.9.3-1.6.9-2.1.5-.5 1.2-.7 2.1-.7.8 0 1.5.2 2 .6.5.5.8 1 .8 1.8v.3h-1.4v-.2c0-.4-.1-.8-.4-1-.2-.2-.6-.3-1-.3s-.8.1-1 .4c-.3.2-.4.6-.4 1.1v3.2c0 .5.1.9.4 1.1.2.3.6.4 1.1.4.4 0 .8-.1 1-.4.2-.2.4-.6.4-1v-.8H8.3v-1.2h3v1.9c0 .8-.3 1.4-.8 1.9-.5.4-1.2.6-2.1.6zm10.1.6h-1.6l-1.9-3.3h-1.3v3.3h-1.4V7.4h3c.9 0 1.6.2 2.1.7.5.4.7 1.1.7 1.9 0 .6-.1 1.1-.4 1.5-.3.4-.7.7-1.2.8l2 4.2z"/></svg>',
    github:      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"/></svg>',
    bluesky:     '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 10.8C10.9 8.6 7.9 4.6 5.1 2.6 2.4.7 1.4 1 .7 1.3 0 1.7 0 2.9 0 3.6c0 .7.4 5.7.6 6.6.8 2.8 3.8 3.8 6.5 3.5h.4-.4c-4 .6-7.5 2-2.9 7.2 5.1 5.3 7-1.1 8-4.4 1 3.3 2.1 9.5 7.9 4.4 4.3-4.4 1.2-6.6-2.8-7.2h-.4.4c2.8.3 5.7-.7 6.5-3.5.3-.9.6-5.9.6-6.6 0-.7 0-1.9-.7-2.3-.7-.3-1.7-.6-4.4 1.3-2.8 2-5.8 6-6.9 8.2z"/></svg>',
    osf:         '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm0 3.2a7.8 7.8 0 1 1 0 15.6 7.8 7.8 0 0 1 0-15.6zm0 3.1a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4z"/></svg>',
    link:        '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10.6 13.4a1 1 0 0 0 1.4 0l4.3-4.2a3 3 0 0 0-4.3-4.3l-1.4 1.4 1.4 1.4L13.4 6a1 1 0 1 1 1.5 1.5l-4.3 4.3a1 1 0 0 0 0 1.6zm2.8-2.8a1 1 0 0 0-1.4 0l-4.3 4.2a3 3 0 1 0 4.3 4.3l1.4-1.4-1.4-1.4-1.4 1.4a1 1 0 1 1-1.5-1.5l4.3-4.3a1 1 0 0 0 0-1.3z"/></svg>',
    mail:        '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm2.4.7L12 11.6l7.6-5.9H4.4zM20 8.1l-7.4 5.7a1 1 0 0 1-1.2 0L4 8.1V19h16V8.1z"/></svg>',
    download:    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3v10.2l3.6-3.6 1.4 1.4-6 6-6-6 1.4-1.4L10 13.2V3h2zM4 19h16v2H4v-2z"/></svg>',
  };

  /* -------------------------------------------------------- 1. basics -- */
  var b = C.basics || {};
  document.title = b.pageTitle || b.name || "Personal website";
  var md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", b.metaDescription || "");
  document.documentElement.lang = "en";

  var navName = document.querySelector('[data-field="navName"]');
  if (navName) navName.textContent = b.name || "";

  if (has(b.banner)) {
    var banner = $("hero-banner");
    banner.style.backgroundImage = 'url("' + b.banner + '")';
  }

  var photo = $("hero-photo");
  if (has(b.photo)) {
    photo.src = b.photo;
    photo.alt = b.photoAlt || b.name || "";
    photo.onerror = function () { this.style.display = "none"; };
  } else { photo.style.display = "none"; }

  set("hero-name", esc(b.name));
  set("hero-role", esc(b.role));
  set("hero-affil", [b.department, b.university].filter(has).map(esc).join(", "));

  /* ------------------------------------------------------ 2. profiles -- */
  var profiles = (C.profiles || []).filter(function (p) { return has(p && p.url); });
  set("profiles", profiles.map(function (p) {
    return '<li><a' + linkAttrs(p.url) + '>'
      + (ICONS[p.icon] || ICONS.link) + '<span>' + esc(p.label || p.icon) + '</span></a></li>';
  }).join(""));

  /* ----------------------------------------------- 3. hero action row -- */
  var ct = C.contact || {};
  var actions = [];
  if (has(ct.email)) {
    var subj = has(ct.emailSubject) ? "?subject=" + encodeURIComponent(ct.emailSubject) : "";
    actions.push('<a class="btn btn--primary" href="mailto:' + esc(ct.email) + subj + '">'
      + ICONS.mail + esc(ct.emailButtonLabel || "Send me an email") + '</a>');
  }
  if (C.cv && has(C.cv.file)) {
    actions.push('<a class="btn btn--ghost"' + linkAttrs(C.cv.file) + '>'
      + ICONS.download + esc(C.cv.label || "Download CV") + '</a>');
  }
  set("hero-actions", actions.join(""));

  /* --------------------------------------------------------- 4. about -- */
  set("tagline", esc(b.tagline));
  if (!has(b.tagline)) $("tagline").hidden = true;
  set("about-body", (C.about || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join(""));

  var ri = C.researchInterests || [];
  if (has(ri)) {
    set("interests", ri.map(function (r) {
      return "<li><h3>" + esc(r.title) + "</h3><p>" + esc(r.text) + "</p></li>";
    }).join(""));
  } else { $("interests").hidden = true; }

  var edu = C.education || [];
  if (has(edu)) {
    set("education-list", edu.map(function (e) {
      return '<li><div class="edu__period">' + esc(e.period || "") + "</div><div>"
        + '<h4 class="edu__degree">' + esc(e.degree) + "</h4>"
        + (has(e.institution) ? '<p class="edu__inst">' + esc(e.institution) + "</p>" : "")
        + (has(e.detail) ? '<p class="edu__detail">' + esc(e.detail) + "</p>" : "")
        + "</div></li>";
    }).join(""));
  } else { $("education-block").hidden = true; }

  /* ------------------------------------------------------ 5. research -- */
  var projects = C.projects || [];
  if (has(projects)) {
    set("projects", projects.map(function (p) {
      var meta = [p.period, p.funder].filter(has).map(function (m) { return "<span>" + esc(m) + "</span>"; }).join("");
      return "<li><h4>" + esc(p.title) + "</h4>"
        + (meta ? '<p class="meta">' + meta + "</p>" : "")
        + (has(p.text) ? '<p class="body">' + esc(p.text) + "</p>" : "")
        + chips(p.links) + "</li>";
    }).join(""));
  } else { $("projects-block").hidden = true; }

  var pubs = (C.publications || []).slice().sort(function (x, y) {
    return (y.year || 0) - (x.year || 0);
  });
  if (has(pubs)) {
    set("publications", pubs.map(function (p) {
      var venue = [
        has(p.venue) ? "<em>" + esc(p.venue) + "</em>" : "",
        has(p.details) ? esc(p.details) : ""
      ].filter(Boolean).join(", ");
      return '<li><div class="pub__year">' + esc(p.year || "") + "</div><div>"
        + (has(p.status) ? '<span class="tag">' + esc(p.status) + "</span>" : "")
        + '<h4 class="pub__title">' + esc(p.title) + "</h4>"
        + (has(p.authors) ? '<p class="pub__authors">' + boldSelf(p.authors) + "</p>" : "")
        + (venue ? '<p class="pub__venue">' + venue + "</p>" : "")
        + chips(p.links)
        + "</div></li>";
    }).join(""));
  } else { $("pubs-block").hidden = true; }

  if (!has(projects) && !has(pubs)) hideSection("research");

  /* ------------------------------------------------------ 6. teaching -- */
  var teaching = C.teaching || [];
  if (has(teaching)) {
    set("teaching-list", teaching.map(function (t) {
      var meta = [t.role, t.period, t.institution].filter(has)
        .map(function (m) { return "<span>" + esc(m) + "</span>"; }).join("");
      return "<li><h3>" + esc(t.title) + "</h3>"
        + (meta ? '<p class="meta">' + meta + "</p>" : "")
        + (has(t.text) ? '<p class="body">' + esc(t.text) + "</p>" : "") + "</li>";
    }).join(""));
  } else { hideSection("teaching"); }

  /* --------------------------------------------------- 7. conferences -- */
  var confs = (C.conferences || []).slice().sort(function (x, y) {
    return (y.year || 0) - (x.year || 0);
  });
  if (has(confs)) {
    set("conferences-list", confs.map(function (c) {
      var where = [c.event, c.place].filter(has).map(esc).join(" · ");
      return '<li><div class="talk__year">' + esc(c.year || "") + "</div><div>"
        + (has(c.kind) ? '<span class="tag">' + esc(c.kind) + "</span>" : "")
        + '<h3 class="talk__title">' + esc(c.title) + "</h3>"
        + (where ? '<p class="talk__where">' + where + "</p>" : "")
        + "</div></li>";
    }).join(""));
  } else { hideSection("conferences"); }

  /* ------------------------------ 8. awards, methods and affiliations -- */
  var lists = (C.lists || []).filter(function (l) { return l && has(l.items); });
  if (has(lists)) {
    set("lists", lists.map(function (l) {
      var anyYear = l.items.some(function (i) { return has(i.year); });
      return "<div><h3 class=\"subsection__title\">" + esc(l.title) + "</h3>"
        + '<ul class="plainlist">' + l.items.map(function (i) {
            return "<li>"
              + (anyYear ? '<span class="yr">' + esc(i.year || "") + "</span>" : "")
              + "<span>" + esc(i.text) + "</span></li>";
          }).join("") + "</ul></div>";
    }).join(""));
  } else { hideSection("extras"); }

  /* ------------------------------------------------------- 9. contact -- */
  var details = [];
  if (has(ct.email)) {
    details.push('<p><a href="mailto:' + esc(ct.email) + '">' + esc(ct.email) + "</a></p>");
  }
  [ct.office, ct.address, ct.phone].forEach(function (line) {
    if (has(line)) details.push("<p>" + esc(line) + "</p>");
  });
  var affil = [b.department, b.university, b.location].filter(has).map(esc).join("<br>");

  if (details.length || affil) {
    set("contact-body",
      '<div class="contact__details">'
      + (affil ? '<p><span class="label">Where to find me</span>' + affil + "</p>" : "")
      + (details.length ? '<p style="margin-top:1rem"><span class="label">Get in touch</span></p>' + details.join("") : "")
      + "</div>"
      + (has(ct.email)
        ? '<div><a class="btn btn--primary" href="mailto:' + esc(ct.email)
          + (has(ct.emailSubject) ? "?subject=" + encodeURIComponent(ct.emailSubject) : "")
          + '">' + ICONS.mail + esc(ct.emailButtonLabel || "Send me an email") + "</a></div>"
        : "")
    );
  } else { hideSection("contact"); }

  /* -------------------------------------------------------- 10. footer -- */
  var year = new Date().getFullYear();
  set("footer-line", "© " + year + " " + esc(b.name || ""));
  set("footer-note", esc((C.footer && C.footer.note) || ""));

  /* ------------------------------------- 11. navigation and scrollspy -- */
  var NAV = [
    { id: "about",       label: "About" },
    { id: "research",    label: "Research" },
    { id: "teaching",    label: "Teaching" },
    { id: "conferences", label: "Conferences" },
    { id: "extras",      label: "Awards" },
    { id: "contact",     label: "Contact" },
  ].filter(function (n) {
    var el = $(n.id);
    return el && !el.hidden;
  });

  $("nav-list").innerHTML = NAV.map(function (n) {
    return '<li><a href="#' + n.id + '">' + esc(n.label) + "</a></li>";
  }).join("");

  var navLinks = Array.prototype.slice.call($("nav-list").querySelectorAll("a"));

  /* Links marked with "#" are placeholders — clicking them does nothing
     rather than jumping the page back to the top. */
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[data-placeholder="true"]');
    if (a) e.preventDefault();
  });

  var topbar = $("topbar");
  var sentinel = $("hero-photo");
  function onScroll() {
    topbar.classList.toggle("is-stuck", window.scrollY > 180);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if ("IntersectionObserver" in window) {
    var current = null;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) current = e.target.id;
      });
      navLinks.forEach(function (a) {
        a.setAttribute("aria-current", a.getAttribute("href") === "#" + current ? "true" : "false");
      });
    }, { rootMargin: "-88px 0px -60% 0px", threshold: 0 });
    NAV.forEach(function (n) { io.observe($(n.id)); });
  }

})();
