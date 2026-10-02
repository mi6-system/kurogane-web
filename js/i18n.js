(function () {
  var dict = {
    nav_home: { ru: "Главная", en: "Home" },
    nav_download: { ru: "Скачать", en: "Download" },
    nav_register: { ru: "Регистрация", en: "Register" },
    nav_rules: { ru: "Правила", en: "Rules" },
    nav_about: { ru: "О проекте", en: "About" },
    nav_es: { ru: "ES", en: "ES" },

    brand_kana: { ru: "黒鉄", en: "黒鉄" },
    unofficial: { ru: "неофициальный фанатский тест", en: "unofficial fan test server" },
    slogan: { ru: "чистый Interlude · кап +15 / +17", en: "classic Interlude · cap +15 / +17" },

    status_label: { ru: "Сервер", en: "Server" },
    status_online: { ru: "Online", en: "Online" },
    status_offline: { ru: "Offline", en: "Offline" },
    status_checking: { ru: "проверяется", en: "checking" },

    hero_kicker: { ru: "Lineage 2 · Interlude · x32.2", en: "Lineage 2 · Interlude · x32.2" },
    hero_lead: {
      ru: "Приватный тестовый сервер. Чистая хроника, жёсткий кап заточки, костюмы как стиль — без статов. Двери открыты: это тест с друзьями, а не витрина «официального» гранд-сервера.",
      en: "A private test realm. Clean chronicle, hard enchant cap, costumes as style — no stats. The door is open: a test with friends, not a showcase for an “official” grand server."
    },
    cta_download: { ru: "Скачать патч", en: "Get the patch" },
    cta_register: { ru: "Регистрация", en: "Create account" },

    for_whom_title: { ru: "Для кого", en: "Who it is for" },
    for_whom_text: {
      ru: "Для тех, кто хочет спокойно проверить Interlude x32.2 без гонки доната и без GM-персонажей у игроков. Пришёл, поставил патч, поиграл, написал, что сломалось.",
      en: "For people who want to try Interlude x32.2 without a donate arms race and without player GM characters. Install the patch, play, tell us what broke."
    },

    steps_title: { ru: "Как начать", en: "How to start" },
    step1_t: { ru: "Патч", en: "Patch" },
    step1_d: {
      ru: "Скачай клиентский патч, когда номер версии на сайте станет новее твоего.",
      en: "Download the client patch when the version on this site is newer than yours."
    },
    step2_t: { ru: "Запуск", en: "Launch" },
    step2_d: {
      ru: "Поставь файлы в клиент Interlude и запусти его как обычно.",
      en: "Drop the files into an Interlude client and start it as usual."
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
    fact_style: { ru: "Костюмы", en: "Costumes" },
    fact_style_v: { ru: "фракции стиля, без статов", en: "style factions, no stats" },

    factions_title: { ru: "Фракции стиля", en: "Style factions" },
    factions_lead: {
      ru: "Костюмы на тесте — это одежда, не сет с бонусами. Названия фракций, не чужие лицензии.",
      en: "Costumes on this test are clothes, not bonus sets. Faction names, not licensed characters."
    },
    fac_north: { ru: "Север", en: "North" },
    fac_north_d: { ru: "Скандинавский холод, мех, руны, железо.", en: "Northern cold, fur, runes, iron." },
    fac_field: { ru: "Поле", en: "Field" },
    fac_field_d: { ru: "Славянский крой, лён, обереги, земля.", en: "Slavic cut, linen, charms, soil." },
    fac_blade: { ru: "Клинок", en: "Blade" },
    fac_blade_d: { ru: "Самурайская линия, лак, ткань, сталь.", en: "Samurai line, lacquer, cloth, steel." },
    fac_orbit: { ru: "Орбита", en: "Orbit" },
    fac_orbit_d: { ru: "Космо-силуэт, вакуум, кромка света.", en: "Cosmo silhouette, vacuum, light edge." },
    fac_cut: { ru: "Крой", en: "Cut" },
    fac_cut_d: { ru: "Модники: городской крой, ткань, жест.", en: "Street cut, cloth, attitude." },


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
    dl_title: { ru: "Патч", en: "Patch" },
    dl_lead: {
      ru: "Качай только если номер на этой странице новее того, что уже стоит у тебя.",
      en: "Download only if the number on this page is newer than what you already have."
    },
    dl_current: { ru: "Текущая выкладка", en: "Current drop" },
    dl_v01: { ru: "0.1 — только клиентский ini + сплэш", en: "0.1 — client ini + splash only" },
    dl_v01_state: { ru: "ещё не готов", en: "not ready yet" },
    dl_btn_soon: { ru: "Patch 0.1 — скоро", en: "Patch 0.1 — soon" },
    dl_btn_get: { ru: "Скачать патч", en: "Download patch" },
    dl_state_ready: { ru: "доступен для скачивания", en: "available to download" },
    dl_install_title: { ru: "Установка", en: "Installation" },
    dl_i1: { ru: "Скачай архив по кнопке.", en: "Download the archive with the button." },
    dl_i2: { ru: "Распакуй файлы в папку клиента Interlude с заменой.", en: "Unpack the files into your Interlude client folder, replacing existing ones." },
    dl_i3: { ru: "Запусти клиент как обычно.", en: "Start the client as usual." },
    dl_roadmap: { ru: "План патчей", en: "Patch plan" },
    dl_v02: { ru: "0.2 — костюмы (фракции стиля)", en: "0.2 — costumes (style factions)" },
    dl_warn: {
      ru: "Патч только для этого теста. Чужие сборки и «универсальные» лаунчеры сюда не подходят.",
      en: "This patch is for this test only. Third-party packs and generic launchers do not belong here."
    },

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
    t_download: { ru: "Скачать патч — Kurogane", en: "Download the patch — Kurogane" },
    t_register: { ru: "Регистрация — Kurogane", en: "Register — Kurogane" },
    t_rules: { ru: "Правила — Kurogane", en: "Rules — Kurogane" },
    t_about: { ru: "О проекте — Kurogane", en: "About — Kurogane" },
    t_notfound: { ru: "404 — Kurogane", en: "404 — Kurogane" },
    d_home: {
      ru: "Kurogane — неофициальный фанатский тест Lineage 2 Interlude. Чистая хроника, рейты x32.2, кап заточки +15 / +17, костюмы без статов.",
      en: "Kurogane — an unofficial fan test of Lineage 2 Interlude. Clean chronicle, x32.2 rates, +15 / +17 enchant cap, costumes without stats."
    },
    d_download: {
      ru: "Клиентский патч для теста Kurogane (Lineage 2 Interlude): версия, установка и план обновлений.",
      en: "Client patch for the Kurogane test (Lineage 2 Interlude): version, installation and update plan."
    },
    d_register: {
      ru: "Как попасть на тест Kurogane: регистрация откроется вместе с запуском мира, анонсы — в Discord и Telegram.",
      en: "How to join the Kurogane test: registration opens with the world launch; announcements on Discord and Telegram."
    },
    d_rules: {
      ru: "Правила теста Kurogane: без GM у игроков, донат не сильнее капа, костюмы без статов.",
      en: "Kurogane test rules: no player GMs, donations do not beat the cap, costumes have no stats."
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
    ru_3_t: { ru: "Костюмы без статов", en: "Costumes have no stats" },
    ru_3_d: {
      ru: "Скины и фракции стиля — внешность. Бонусов к урону, защите и заточкам в костюме нет.",
      en: "Skins and style factions are looks. No damage, defense, or enchant bonuses on a costume."
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
      ru: "Сайт и игровой мир — отдельные системы. Здесь — информация, патч и правила; игра работает на собственной инфраструктуре.",
      en: "The site and the game world are separate systems. Here you get information, the patch and the rules; the game runs on its own infrastructure."
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

  var htmlLang = { ru: "ru", en: "en" };

  function getLang() {
    try {
      var saved = localStorage.getItem("kurogane-lang");
      if (saved === "en" || saved === "ru") return saved;
    } catch (e) {}
    var nav = (navigator.language || "ru").toLowerCase();
    return nav.indexOf("en") === 0 ? "en" : "ru";
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "ru") lang = "ru";
    try { localStorage.setItem("kurogane-lang", lang); } catch (e) {}
    document.documentElement.lang = htmlLang[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var entry = dict[key];
      if (!entry) return;
      el.textContent = entry[lang] || entry.ru;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      var entry = dict[key];
      if (!entry) return;
      el.setAttribute("placeholder", entry[lang] || entry.ru);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var entry = dict[el.getAttribute("data-i18n-aria")];
      if (entry) el.setAttribute("aria-label", entry[lang] || entry.ru);
    });
    var page = document.body && document.body.getAttribute("data-page");
    if (page && dict["t_" + page]) {
      document.title = dict["t_" + page][lang];
      var meta = document.querySelector('meta[name="description"]');
      if (meta && dict["d_" + page]) meta.setAttribute("content", dict["d_" + page][lang]);
    }
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang-btn") === lang ? "true" : "false");
    });
  }

  window.KuroganeI18n = { dict: dict, getLang: getLang, setLang: setLang };

  document.addEventListener("DOMContentLoaded", function () {
    setLang(getLang());
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang-btn"));
      });
    });
  });
})();
