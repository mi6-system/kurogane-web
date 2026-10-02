(function () {
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function lang() { return window.KuroganeI18n ? window.KuroganeI18n.getLang() : "ru"; }
  function t(key, fallback) {
    var d = window.KuroganeI18n && window.KuroganeI18n.dict[key];
    return d ? (d[lang()] || d.ru) : fallback;
  }

  function applyStatus() {
    var cfg = window.KUROGANE || {};
    var status = cfg.status || "checking";
    $all("[data-status]").forEach(function (node) {
      node.setAttribute("data-status", status);
      node.hidden = status === "checking";
      var label = $("[data-status-label]", node);
      if (!label) return;
      var key = status === "online" ? "status_online" : status === "offline" ? "status_offline" : "status_checking";
      label.setAttribute("data-i18n", key);
      label.textContent = t(key, label.textContent);
    });
  }

  function applyPatch() {
    var patch = (window.KUROGANE && window.KUROGANE.patch) || {};
    var btn = $("[data-patch-button]");
    if (!btn) return;
    if (patch.ready && patch.file) {
      btn.removeAttribute("aria-disabled");
      btn.classList.remove("is-disabled");
      btn.setAttribute("href", patch.file);
      btn.setAttribute("target", "_blank");
      btn.setAttribute("data-i18n", "dl_btn_get");
      btn.textContent = t("dl_btn_get", "Скачать фулл клиент");
    } else {
      btn.setAttribute("aria-disabled", "true");
      btn.classList.add("is-disabled");
      btn.setAttribute("href", "#");
    }
  }

  function applyContacts() {
    var c = (window.KUROGANE && window.KUROGANE.contacts) || {};
    $all("[data-contact]").forEach(function (el) {
      var url = c[el.getAttribute("data-contact")];
      var state = $("[data-contact-state]", el);
      if (url) {
        el.classList.add("is-live");
        el.href = url;
        if (state) {
          state.setAttribute("data-i18n", "contact_open");
          state.textContent = t("contact_open", "Открыть →");
        }
      } else {
        el.classList.remove("is-live");
        el.removeAttribute("href");
        el.setAttribute("aria-disabled", "true");
      }
    });
    $all("[data-footer-contact]").forEach(function (el) {
      var url = c[el.getAttribute("data-footer-contact")];
      if (url) { el.href = url; el.hidden = false; }
    });
  }

  function bindNav() {
    var toggle = $(".nav-toggle");
    var panel = $(".site-nav");
    if (!toggle || !panel) return;
    function close() {
      panel.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
    toggle.addEventListener("click", function () {
      var open = panel.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    $all("a", panel).forEach(function (a) { a.addEventListener("click", close); });
  }

  function bindHeader() {
    var header = $(".site-header");
    if (!header) return;
    function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 8); }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function bindReveal() {
    var nodes = $all(".reveal");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!nodes.length || reduce || !("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("js-reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    nodes.forEach(function (n) { io.observe(n); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyStatus();
    applyPatch();
    applyContacts();
    bindNav();
    bindHeader();
    bindReveal();
    // re-apply dynamic labels after a language switch
    $all("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () { applyStatus(); applyPatch(); applyContacts(); });
    });
  });
})();
