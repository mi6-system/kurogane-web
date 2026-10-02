(function () {
  var dict = {
    nav_home: { ru: "Главная", en: "Home" },
    nav_download: { ru: "Скачать", en: "Download" },
    nav_register: { ru: "Регистрация", en: "Register" },
    nav_rules: { ru: "Правила", en: "Rules" },
    nav_about: { ru: "О проекте", en: "About" },

    lang_label: { ru: "Язык", en: "Language" },
    brand_kana: { ru: "黒鉄", en: "黒鉄" },
    unofficial: { ru: "неофициальный фанатский тест", en: "unofficial fan test server" },
    slogan: { ru: "чистый Interlude · кап +15 / +17", en: "classic Interlude · cap +15 / +17" },

    status_label: { ru: "Сервер", en: "Server" },
    status_online: { ru: "Online", en: "Online" },
    status_offline: { ru: "Offline", en: "Offline" },
    status_checking: { ru: "проверяется", en: "checking" },

    hero_kicker: { ru: "Lineage 2 · Interlude · x32.2", en: "Lineage 2 · Interlude · x32.2" },
    cta_download: { ru: "Скачать фулл клиент", en: "Get the full client" },
    cta_register: { ru: "Регистрация", en: "Create account" },

    for_whom_title: { ru: "Для кого", en: "Who it is for" },
    for_whom_text: {
      ru: "Для тех, кто хочет спокойно проверить Interlude x32.2 без гонки доната и без GM-персонажей у игроков. Пришёл, скачал клиент, поиграл, написал, что сломалось.",
      en: "For people who want to try Interlude x32.2 without a donate arms race and without player GM characters. Download the client, play, tell us what broke."
    },

    steps_title: { ru: "Как начать", en: "How to start" },
    step1_t: { ru: "Фулл клиент", en: "Full client" },
    step1_d: {
      ru: "Скачай фулл клиент по ссылке на странице загрузки.",
      en: "Download the full client from the link on the download page."
    },
    step2_t: { ru: "Запуск", en: "Launch" },
    step2_d: {
      ru: "Распакуй клиент и запусти его как обычно.",
      en: "Unpack the client and start it as usual."
    },
    step3_t: { ru: "Игра", en: "Play" },
    step3_d: {
      ru: "Адрес мира выдаётся отдельно — следи за анонсами в Discord и Telegram.",
      en: "The world address is shared separately — follow announcements on Discord and Telegram."
    },

    facts_title: { ru: "Коротко о мире", en: "The realm in brief" },
    fact_rates: { ru: "Рейты", en: "Rates" },
    fact_rates_v: { ru: "x32.2", en: "x32.2" },
    fact_chronicle: { ru: "Хроника", en: "Chronicle" },
    fact_chronicle_v: { ru: "чистый Interlude", en: "clean Interlude" },
    fact_cap: { ru: "Кап заточки", en: "Enchant cap" },
    fact_cap_v: { ru: "броня / бижу +15 (100%), оружие +17 (100%)", en: "armor / jewels +15 (100%), weapon +17 (100%)" },



    contacts_title: { ru: "Сообщество", en: "Community" },
    contacts_lead: {
      ru: "Анонсы, вопросы и баги — в сообществе.",
      en: "Announcements, questions and bug reports live in the community."
    },
    contact_discord: { ru: "Discord", en: "Discord" },
    contact_telegram: { ru: "Telegram", en: "Telegram" },
    contact_soon: { ru: "скоро", en: "soon" },
    contact_open: { ru: "Открыть →", en: "Open →" },

    foot_rights: {
      ru: "Lineage 2 и связанные названия принадлежат их правообладателям.",
      en: "Lineage 2 and related names belong to their respective rights holders."
    },
    skip: { ru: "Перейти к содержимому", en: "Skip to content" },
    menu: { ru: "Меню", en: "Menu" },
    foot_note: {
      ru: "Kurogane — неофициальный фанатский тест. Не связан с правообладателем Lineage 2.",
      en: "Kurogane is an unofficial fan test. Not affiliated with the Lineage 2 rights holder."
    },

    dl_kicker: { ru: "Клиент", en: "Client" },
    dl_title: { ru: "Фулл клиент", en: "Full client" },
    dl_btn_soon: { ru: "Фулл клиент — скоро", en: "Full client — soon" },
    dl_install_title: { ru: "Как установить", en: "How to install" },
    dl_s1: { ru: "Скачай архив", en: "Download the archive" },
    dl_s2: { ru: "Распакуй его", en: "Unpack it" },
    dl_s3: { ru: "Открой папку System", en: "Open the System folder" },
    dl_s4: { ru: "Запусти KuroganeLauncher", en: "Run KuroganeLauncher" },
    dl_btn_get: { ru: "Скачать фулл клиент", en: "Download full client" },

    rg_kicker: { ru: "Аккаунт", en: "Account" },
    rg_title: { ru: "Регистрация", en: "Register" },
    rg_lead: {
      ru: "Регистрация откроется вместе с запуском мира. Анонс появится в Discord и Telegram.",
      en: "Registration opens together with the world launch. The announcement will be posted on Discord and Telegram."
    },
    rg_note: {
      ru: "Сайт не принимает логины и пароли. Данные аккаунта вводятся только в игровом клиенте.",
      en: "This site does not accept logins or passwords. Account details are entered only in the game client."
    },
    nf_title: { ru: "Не найдено", en: "Not found" },
    nf_lead: { ru: "Такой страницы здесь нет. Вернись на главную.", en: "There is no such page here. Go back to the home page." },

    t_home: { ru: "Kurogane — Lineage 2 Interlude x32.2", en: "Kurogane — Lineage 2 Interlude x32.2" },
    t_download: { ru: "Фулл клиент — Kurogane", en: "Full client — Kurogane" },
    t_register: { ru: "Регистрация — Kurogane", en: "Register — Kurogane" },
    t_rules: { ru: "Правила — Kurogane", en: "Rules — Kurogane" },
    t_about: { ru: "О проекте — Kurogane", en: "About — Kurogane" },
    t_notfound: { ru: "404 — Kurogane", en: "404 — Kurogane" },
    d_home: {
      ru: "Kurogane — неофициальный фанатский тест Lineage 2 Interlude. Чистая хроника, рейты x32.2, кап заточки +15 / +17.",
      en: "Kurogane — an unofficial fan test of Lineage 2 Interlude. Clean chronicle, x32.2 rates, +15 / +17 enchant cap."
    },
    d_download: {
      ru: "Фулл клиент для теста Kurogane (Lineage 2 Interlude): ссылка на скачивание.",
      en: "Full client for the Kurogane test (Lineage 2 Interlude): download link."
    },
    d_register: {
      ru: "Как попасть на тест Kurogane: регистрация откроется вместе с запуском мира, анонсы — в Discord и Telegram.",
      en: "How to join the Kurogane test: registration opens with the world launch; announcements on Discord and Telegram."
    },
    d_rules: {
      ru: "Правила теста Kurogane: без GM у игроков, донат не сильнее капа.",
      en: "Kurogane test rules: no player GMs, donations do not beat the cap."
    },
    d_about: {
      ru: "Что такое Kurogane: неофициальный фанатский тест Lineage 2 Interlude. Чёрное железо, открытая дверь.",
      en: "What Kurogane is: an unofficial fan test of Lineage 2 Interlude. Black iron, open door."
    },
    d_notfound: { ru: "Страница не найдена.", en: "Page not found." },

    ru_kicker: { ru: "Порядок", en: "Order" },
    ru_title: { ru: "Правила теста", en: "Test rules" },
    ru_lead: {
      ru: "Короткий устав. Нарушил — вылетел с теста. Спорить «а у соседа так было» бессмысленно.",
      en: "A short charter. Break it and you leave the test. «But someone else did it» is not an argument."
    },
    ru_1_t: { ru: "Нет GM у игроков", en: "No player GMs" },
    ru_1_d: {
      ru: "Игровой персонаж не получает GM-права. Админка — только у тех, кто держит тест, и не для прокачки «своих».",
      en: "Player characters do not get GM rights. Admin tools stay with the people running the test, not for leveling «friends»."
    },
    ru_2_t: { ru: "Донат не сильнее капа", en: "Donate does not beat the cap" },
    ru_2_d: {
      ru: "Даже если позже появится поддержка сервера, она не даёт силу выше капа заточки и не обходит правила теста.",
      en: "Even if server support appears later, it will not grant power above the enchant cap or skip test rules."
    },
    ru_4_t: { ru: "Чистый Interlude", en: "Clean Interlude" },
    ru_4_d: {
      ru: "Не тащим чужие хроники и кастомный P2W-зоопарк. Баги пишем, «уникальные пушки из HF» не просим.",
      en: "We are not importing other chronicles or a custom P2W zoo. Report bugs; do not request unique guns from later eras."
    },
    ru_5_t: { ru: "Честная игра", en: "Fair play" },
    ru_5_d: {
      ru: "Боты, воровство аккаунтов, слив дыр «своим» — сразу вон. Тест маленький, память длинная.",
      en: "Bots, account theft, and leaking holes to friends get you dropped. Small test, long memory."
    },
    ru_6_t: { ru: "Тон", en: "Tone" },
    ru_6_d: {
      ru: "Это не арена для травли. Конфликт в игре — ок. Травля за экраном — нет.",
      en: "This is not a harassment arena. In-game conflict is fine. Harassment off-screen is not."
    },

    ab_kicker: { ru: "Кто", en: "Who" },
    ab_title: { ru: "Kurogane", en: "Kurogane" },
    ab_lead: {
      ru: "Черное железо. Имя сервера — латиницей Kurogane, иероглифы 黒鉄 можно писать мелко. Это не бренд корпорации и не «партнёрская» табличка.",
      en: "Black iron. The Latin name is Kurogane; the characters 黒鉄 stay small. This is not a corporate brand and not a partner plaque."
    },
    ab_p1: {
      ru: "Kurogane — приватный фанатский тест Lineage 2 Interlude. Его собрали, чтобы проверить связку «чистая хроника + высокие рейты + жёсткий кап» на узком круге, а потом открыть дверь тем, кому такой режим близок.",
      en: "Kurogane is a private fan test of Lineage 2 Interlude. It exists to try a clean chronicle, high rates, and a hard cap with a small circle — then open the door to people who want that pace."
    },
    ab_p2: {
      ru: "Сайт и игровой мир — отдельные системы. Здесь — информация, клиент и правила; игра работает на собственной инфраструктуре.",
      en: "The site and the game world are separate systems. Here you get information, the client and the rules; the game runs on its own infrastructure."
    },
    ab_p3: {
      ru: "Мы не правообладатель Lineage 2 и не делаем вид, что тест «согласован с издателем». Это любительская площадка. Если правообладатель попросит закрыть — закроем.",
      en: "We do not hold Lineage 2 rights and we do not pretend the test is «approved by the publisher». It is a hobby room. If the rights holder asks us to close, we close."
    },
    ab_list_title: { ru: "Что это не есть", en: "What this is not" },
    ab_not_1: { ru: "не официальный сервер", en: "not an official server" },
    ab_not_2: { ru: "не магазин силы", en: "not a power shop" },
    ab_not_3: { ru: "не личный кабинет с балансом", en: "not a cash cabinet" },
    ab_not_4: { ru: "не обещание вечного онлайна", en: "not a promise of eternal uptime" }
  };

  var LANGS = [
    { code: "ru", name: "Русский", dir: "ltr" },
    { code: "en", name: "English", dir: "ltr" },
    { code: "es", name: "Español", dir: "ltr" },
    { code: "fr", name: "Français", dir: "ltr" },
    { code: "zh", name: "中文", dir: "ltr" },
    { code: "ja", name: "日本語", dir: "ltr" },
    { code: "ko", name: "한국어", dir: "ltr" },
    { code: "ar", name: "العربية", dir: "rtl" },
    { code: "he", name: "עברית", dir: "rtl" },
    { code: "hi", name: "हिन्दी", dir: "ltr" }
  ];
  var FONT_CSS = {
    zh: "Noto+Sans+SC:wght@400;600",
    ja: "Noto+Sans+JP:wght@400;600",
    ko: "Noto+Sans+KR:wght@400;600",
    ar: "Noto+Sans+Arabic:wght@400;600",
    he: "Noto+Sans+Hebrew:wght@400;600",
    hi: "Noto+Sans+Devanagari:wght@400;600"
  };

  function find(code) {
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i].code === code) return LANGS[i];
    return null;
  }

  function getLang() {
    try {
      var saved = localStorage.getItem("kurogane-lang");
      if (find(saved)) return saved;
    } catch (e) {}
    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
    for (var i = 0; i < list.length; i++) {
      var code = String(list[i]).toLowerCase().split("-")[0];
      if (code === "iw") code = "he";
      if (find(code)) return code;
    }
    return "en";
  }

  function loadFont(lang) {
    var fam = FONT_CSS[lang];
    if (!fam || document.getElementById("font-" + lang)) return;
    var link = document.createElement("link");
    link.id = "font-" + lang;
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=" + fam + "&display=swap";
    document.head.appendChild(link);
  }

  function pick(entry, lang) {
    return entry[lang] || entry.en || entry.ru;
  }

  function setLang(lang) {
    var meta = find(lang);
    if (!meta) { lang = "en"; meta = find("en"); }
    try { localStorage.setItem("kurogane-lang", lang); } catch (e) {}
    var root = document.documentElement;
    root.lang = lang;
    root.dir = meta.dir;
    loadFont(lang);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var entry = dict[el.getAttribute("data-i18n")];
      if (entry) el.textContent = pick(entry, lang);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var entry = dict[el.getAttribute("data-i18n-placeholder")];
      if (entry) el.setAttribute("placeholder", pick(entry, lang));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var entry = dict[el.getAttribute("data-i18n-aria")];
      if (entry) el.setAttribute("aria-label", pick(entry, lang));
    });
    var page = document.body && document.body.getAttribute("data-page");
    if (page && dict["t_" + page]) {
      document.title = pick(dict["t_" + page], lang);
      var desc = document.querySelector('meta[name="description"]');
      if (desc && dict["d_" + page]) desc.setAttribute("content", pick(dict["d_" + page], lang));
    }
    document.querySelectorAll("[data-lang-select]").forEach(function (sel) { sel.value = lang; });
    document.dispatchEvent(new CustomEvent("kurogane:lang", { detail: lang }));
  }

  function buildSelects() {
    document.querySelectorAll("[data-lang-select]").forEach(function (sel) {
      if (sel.options.length) return;
      LANGS.forEach(function (l) {
        var o = document.createElement("option");
        o.value = l.code;
        o.textContent = l.name;
        sel.appendChild(o);
      });
      sel.addEventListener("change", function () { setLang(sel.value); });
    });
  }

  window.KuroganeI18n = { dict: dict, languages: LANGS, getLang: getLang, setLang: setLang };

  document.addEventListener("DOMContentLoaded", function () {
    buildSelects();
    setLang(getLang());
  });
})();
