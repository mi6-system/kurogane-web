(function () {
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function applyStatus() {
    var cfg = window.KUROGANE || {};
    var status = cfg.status || "checking";
    var nodes = $all("[data-status]");
    nodes.forEach(function (node) {
      node.setAttribute("data-status", status);
      var label = $("[data-status-label]", node);
      if (!label) return;
      var key = status === "online" ? "status_online" : status === "offline" ? "status_offline" : "status_checking";
      label.setAttribute("data-i18n", key);
      var lang = window.KuroganeI18n ? window.KuroganeI18n.getLang() : "ru";
      var dict = window.KuroganeI18n && window.KuroganeI18n.dict[key];
      if (dict) label.textContent = dict[lang];
    });
  }

  function applyPatch() {
    var patch = (window.KUROGANE && window.KUROGANE.patch) || {};
    var btn = $("[data-patch-button]");
    if (!btn) return;
    var ver = patch.version || "0.1";
    if (patch.ready && patch.file) {
      btn.removeAttribute("aria-disabled");
      btn.classList.remove("is-disabled");
      btn.setAttribute("href", patch.file);
      btn.setAttribute("download", "");
      var lang = window.KuroganeI18n ? window.KuroganeI18n.getLang() : "ru";
      btn.textContent = (lang === "en" ? "Download patch " : "Скачать патч ") + ver;
    } else {
      btn.setAttribute("aria-disabled", "true");
      btn.classList.add("is-disabled");
      btn.setAttribute("href", "#patch-slot");
    }
    $all("[data-patch-version]").forEach(function (el) {
      el.textContent = ver;
    });
  }

  function applyContacts() {
    var c = (window.KUROGANE && window.KUROGANE.contacts) || {};
    $all("[data-contact]").forEach(function (el) {
      var key = el.getAttribute("data-contact");
      var url = c[key];
      var value = $("[data-contact-value]", el);
      var link = $("[data-contact-link]", el);
      if (url) {
        el.classList.add("is-live");
        if (link) {
          link.href = url;
          link.hidden = false;
        }
        if (value) value.hidden = true;
      } else {
        el.classList.remove("is-live");
        if (link) link.hidden = true;
        if (value) value.hidden = false;
      }
    });
  }

  function bindNav() {
    var toggle = $(".nav-toggle");
    var panel = $(".site-nav");
    if (!toggle || !panel) return;
    toggle.addEventListener("click", function () {
      var open = panel.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function bindRegister() {
    var form = $("#register-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = {
        login: (form.login && form.login.value || "").trim(),
        email: (form.email && form.email.value || "").trim(),
        lang: form.lang ? form.lang.value : "ru",
        at: new Date().toISOString(),
        notice: "local stub only — not sent to game DB"
      };
      try {
        var prev = JSON.parse(localStorage.getItem("kurogane-reg-stub") || "[]");
        prev.push(data);
        localStorage.setItem("kurogane-reg-stub", JSON.stringify(prev));
      } catch (err) {}
      form.hidden = true;
      var done = $("#register-done");
      if (done) done.hidden = false;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyStatus();
    applyPatch();
    applyContacts();
    bindNav();
    bindRegister();
  });
})();
