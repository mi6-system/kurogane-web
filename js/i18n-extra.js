/* Extra languages. Order of every row: es, fr, zh, ja, ko, ar, he */
(function () {
  var CODES = ["es", "fr", "zh", "ja", "ko", "ar", "he"];
  var T = {
    lang_label: ["Idioma", "Langue", "语言", "言語", "언어", "اللغة", "שפה"],

    nav_home: ["Inicio", "Accueil", "首页", "ホーム", "홈", "الرئيسية", "דף הבית"],
    nav_download: ["Descargar", "Télécharger", "下载", "ダウンロード", "다운로드", "تنزيل", "הורדה"],
    nav_register: ["Registro", "Inscription", "注册", "登録", "가입", "التسجيل", "הרשמה"],
    nav_rules: ["Reglas", "Règles", "规则", "ルール", "규칙", "القواعد", "חוקים"],
    nav_about: ["Acerca de", "À propos", "关于", "概要", "소개", "حول المشروع", "אודות"],

    unofficial: ["servidor de prueba no oficial de fans", "serveur de test fan non officiel", "非官方玩家测试服", "非公式ファンテストサーバー", "비공식 팬 테스트 서버", "خادم تجريبي غير رسمي من المعجبين", "שרת ניסוי לא רשמי של מעריצים"],
    slogan: ["Interlude puro · tope +15 / +17", "Interlude pur · plafond +15 / +17", "纯净 Interlude · 强化上限 +15 / +17", "純粋な Interlude · 強化上限 +15 / +17", "순수 Interlude · 강화 한도 +15 / +17", "Interlude نقي · حد التعزيز +15 / +17", "Interlude נקי · תקרת חידוד +15 / +17"],
    status_label: ["Servidor", "Serveur", "服务器", "サーバー", "서버", "الخادم", "שרת"],
    status_checking: ["comprobando", "vérification", "检查中", "確認中", "확인 중", "جارٍ الفحص", "בודק"],
    cta_download: ["Descargar cliente completo", "Télécharger le client complet", "下载完整客户端", "フルクライアントをダウンロード", "풀 클라이언트 다운로드", "تنزيل العميل الكامل", "הורדת הקליינט המלא"],
    cta_register: ["Crear cuenta", "Créer un compte", "创建账号", "アカウント作成", "계정 만들기", "إنشاء حساب", "יצירת חשבון"],

    for_whom_title: ["Para quién es", "Pour qui", "适合谁", "対象", "누구를 위한 서버인가", "لمن هذا الخادم", "למי זה מיועד"],
    for_whom_text: [
      "Para quienes quieren probar Interlude x32.2 con calma, sin carrera de donaciones y sin personajes GM entre los jugadores. Descarga el cliente, juega y cuéntanos qué se rompió.",
      "Pour ceux qui veulent tester Interlude x32.2 tranquillement, sans course au don et sans personnages MJ chez les joueurs. Télécharge le client, joue et dis-nous ce qui ne va pas.",
      "适合想安静体验 Interlude x32.2 的玩家：没有氪金竞赛，玩家也没有 GM 角色。下载客户端，进游戏，告诉我们哪里出了问题。",
      "課金競争もプレイヤーGMキャラクターもない環境で、Interlude x32.2 を気軽に試したい人向けです。クライアントをダウンロードして遊び、不具合を教えてください。",
      "후원 경쟁도, 플레이어 GM 캐릭터도 없이 Interlude x32.2를 차분히 체험하고 싶은 분들을 위한 서버입니다. 클라이언트를 받아 플레이하고, 문제점을 알려 주세요.",
      "لمن يريد تجربة Interlude x32.2 بهدوء، بلا سباق تبرعات وبلا شخصيات GM لدى اللاعبين. نزّل العميل والعب وأخبرنا بما تعطّل.",
      "למי שרוצה לנסות את Interlude x32.2 ברוגע, בלי מרוץ תרומות ובלי דמויות GM אצל השחקנים. מורידים את הקליינט, משחקים, ומספרים לנו מה נשבר."
    ],

    steps_title: ["Cómo empezar", "Comment commencer", "如何开始", "はじめ方", "시작하는 방법", "كيف تبدأ", "איך מתחילים"],
    step1_t: ["Cliente completo", "Client complet", "完整客户端", "フルクライアント", "풀 클라이언트", "العميل الكامل", "קליינט מלא"],
    step1_d: [
      "Descarga el cliente completo desde el enlace de la página de descargas.",
      "Télécharge le client complet via le lien de la page de téléchargement.",
      "在下载页面通过链接获取完整客户端。",
      "ダウンロードページのリンクからフルクライアントを入手してください。",
      "다운로드 페이지의 링크에서 풀 클라이언트를 받으세요.",
      "نزّل العميل الكامل من الرابط في صفحة التنزيل.",
      "מורידים את הקליינט המלא מהקישור בעמוד ההורדה."
    ],
    step2_t: ["Inicio", "Lancement", "启动", "起動", "실행", "التشغيل", "הפעלה"],
    step2_d: [
      "Descomprime el cliente y ábrelo como de costumbre.",
      "Décompresse le client et lance-le comme d'habitude.",
      "解压客户端，像平常一样启动。",
      "クライアントを展開して、いつも通り起動します。",
      "클라이언트의 압축을 풀고 평소처럼 실행하세요.",
      "فك ضغط العميل وشغّله كالمعتاد.",
      "מחלצים את הקליינט ומפעילים כרגיל."
    ],
    step3_t: ["Juego", "Jeu", "游戏", "プレイ", "플레이", "اللعب", "משחק"],
    step3_d: [
      "La dirección del mundo se comparte aparte: sigue los anuncios en Discord y Telegram.",
      "L'adresse du monde est communiquée séparément : suis les annonces sur Discord et Telegram.",
      "游戏世界地址单独发布，请关注 Discord 和 Telegram 上的公告。",
      "ワールドのアドレスは別途案内します。DiscordとTelegramのお知らせをご確認ください。",
      "월드 주소는 별도로 안내합니다. Discord와 Telegram 공지를 확인하세요.",
      "يُعلن عنوان العالم بشكل منفصل — تابع الإعلانات على Discord وTelegram.",
      "כתובת העולם נמסרת בנפרד — עקבו אחר ההודעות ב-Discord וב-Telegram."
    ],

    facts_title: ["El reino en breve", "Le monde en bref", "服务器概览", "ワールド概要", "서버 한눈에 보기", "لمحة عن العالم", "העולם בקצרה"],
    fact_rates: ["Rates", "Taux", "倍率", "レート", "배율", "المعدلات", "Rates"],
    fact_chronicle: ["Crónica", "Chronique", "版本", "クロニクル", "크로니클", "الحقبة", "כרוניקל"],
    fact_chronicle_v: ["Interlude puro", "Interlude pur", "纯净 Interlude", "純粋な Interlude", "순수 Interlude", "Interlude نقي", "Interlude נקי"],
    fact_cap: ["Límite de encantamiento", "Plafond d'enchantement", "强化上限", "強化上限", "강화 상한", "حد التعزيز", "תקרת חידוד"],
    fact_cap_v: [
      "armadura / joyas +15 (100 %), arma +17 (100 %)",
      "armure / bijoux +15 (100 %), arme +17 (100 %)",
      "防具 / 饰品 +15（100%），武器 +17（100%）",
      "防具／アクセサリー +15（100%）、武器 +17（100%）",
      "방어구 / 장신구 +15 (100%), 무기 +17 (100%)",
      "الدروع / المجوهرات +15 (100%)، الأسلحة +17 (100%)",
      "שריון / תכשיטים +15 (100%), נשק +17 (100%)"
    ],

    contacts_title: ["Comunidad", "Communauté", "社区", "コミュニティ", "커뮤니티", "المجتمع", "קהילה"],
    contacts_lead: [
      "Anuncios, preguntas y reportes de errores: en la comunidad.",
      "Annonces, questions et signalements de bugs : dans la communauté.",
      "公告、提问和 Bug 反馈都在社区。",
      "お知らせ、質問、バグ報告はコミュニティで。",
      "공지, 질문, 버그 제보는 커뮤니티에서.",
      "الإعلانات والأسئلة وبلاغات الأخطاء في المجتمع.",
      "הודעות, שאלות ודיווחי באגים — בקהילה."
    ],
    contact_soon: ["pronto", "bientôt", "即将开放", "近日公開", "준비 중", "قريبًا", "בקרוב"],
    contact_open: ["Abrir →", "Ouvrir →", "打开 →", "開く →", "열기 →", "فتح ←", "פתיחה ←"],

    foot_rights: [
      "Lineage 2 y los nombres relacionados pertenecen a sus respectivos titulares.",
      "Lineage 2 et les noms associés appartiennent à leurs détenteurs respectifs.",
      "Lineage 2 及相关名称归其各自权利人所有。",
      "Lineage 2および関連する名称は、それぞれの権利者に帰属します。",
      "Lineage 2 및 관련 명칭은 각 권리자에게 귀속됩니다.",
      "Lineage 2 والأسماء ذات الصلة مملوكة لأصحاب الحقوق.",
      "Lineage 2 והשמות הקשורים שייכים לבעלי הזכויות שלהם."
    ],
    foot_note: [
      "Kurogane es una prueba no oficial de fans. Sin relación con el titular de Lineage 2.",
      "Kurogane est un test fan non officiel. Sans lien avec le détenteur de Lineage 2.",
      "Kurogane 是非官方的玩家测试，与 Lineage 2 权利人无关。",
      "Kurogane は非公式のファンテストです。Lineage 2の権利者とは無関係です。",
      "Kurogane는 비공식 팬 테스트이며 Lineage 2 권리자와 관련이 없습니다.",
      "Kurogane اختبار غير رسمي من المعجبين ولا علاقة له بصاحب حقوق Lineage 2.",
      "Kurogane הוא ניסוי מעריצים לא רשמי ואינו קשור לבעלי הזכויות של Lineage 2."
    ],
    skip: ["Saltar al contenido", "Aller au contenu", "跳到正文", "本文へスキップ", "본문으로 건너뛰기", "تخطَّ إلى المحتوى", "דלג לתוכן"],
    menu: ["Menú", "Menu", "菜单", "メニュー", "메뉴", "القائمة", "תפריט"],

    dl_kicker: ["Cliente", "Client", "客户端", "クライアント", "클라이언트", "العميل", "קליינט"],
    dl_title: ["Cliente completo", "Client complet", "完整客户端", "フルクライアント", "풀 클라이언트", "العميل الكامل", "קליינט מלא"],
    dl_btn_soon: ["Cliente completo — pronto", "Client complet — bientôt", "完整客户端 — 即将上线", "フルクライアント — 近日公開", "풀 클라이언트 — 준비 중", "العميل الكامل — قريبًا", "קליינט מלא — בקרוב"],
    dl_btn_get: ["Descargar cliente completo", "Télécharger le client complet", "下载完整客户端", "フルクライアントをダウンロード", "풀 클라이언트 다운로드", "تنزيل العميل الكامل", "הורדת הקליינט המלא"],

    rg_kicker: ["Cuenta", "Compte", "账号", "アカウント", "계정", "الحساب", "חשבון"],
    rg_title: ["Registro", "Inscription", "注册", "登録", "가입", "التسجيل", "הרשמה"],
    rg_lead: [
      "El registro se abrirá junto con el lanzamiento del mundo. El anuncio saldrá en Discord y Telegram.",
      "L'inscription ouvrira avec le lancement du monde. L'annonce sera publiée sur Discord et Telegram.",
      "注册将随游戏世界一同开放，公告会发布在 Discord 和 Telegram。",
      "登録はワールドの公開と同時に始まります。お知らせはDiscordとTelegramで行います。",
      "가입은 월드 오픈과 함께 시작됩니다. 공지는 Discord와 Telegram에 올라옵니다.",
      "سيُفتح التسجيل مع إطلاق العالم، وسيُنشر الإعلان على Discord وTelegram.",
      "ההרשמה תיפתח עם השקת העולם. ההודעה תפורסם ב-Discord וב-Telegram."
    ],
    rg_note: [
      "Este sitio no acepta usuarios ni contraseñas. Los datos de la cuenta se introducen solo en el cliente del juego.",
      "Ce site n'accepte ni identifiants ni mots de passe. Les données du compte se saisissent uniquement dans le client du jeu.",
      "本网站不接收账号和密码，账号信息只能在游戏客户端中输入。",
      "このサイトではログイン情報もパスワードも受け付けません。アカウント情報はゲームクライアントでのみ入力します。",
      "이 사이트는 아이디나 비밀번호를 받지 않습니다. 계정 정보는 게임 클라이언트에서만 입력하세요.",
      "لا يقبل هذا الموقع أسماء مستخدمين أو كلمات مرور. تُدخل بيانات الحساب في عميل اللعبة فقط.",
      "האתר אינו מקבל שמות משתמש או סיסמאות. פרטי החשבון מוזנים רק בקליינט המשחק."
    ],

    nf_title: ["No encontrado", "Introuvable", "页面未找到", "見つかりません", "페이지를 찾을 수 없음", "غير موجود", "לא נמצא"],
    nf_lead: [
      "Esta página no existe. Vuelve al inicio.",
      "Cette page n'existe pas. Retourne à l'accueil.",
      "这里没有这个页面，请返回首页。",
      "このページは存在しません。ホームに戻ってください。",
      "이 페이지는 존재하지 않습니다. 홈으로 돌아가세요.",
      "هذه الصفحة غير موجودة. عد إلى الصفحة الرئيسية.",
      "העמוד הזה לא קיים. חזרו לדף הבית."
    ],

    t_download: ["Cliente completo — Kurogane", "Client complet — Kurogane", "完整客户端 — Kurogane", "フルクライアント — Kurogane", "풀 클라이언트 — Kurogane", "العميل الكامل — Kurogane", "קליינט מלא — Kurogane"],
    t_register: ["Registro — Kurogane", "Inscription — Kurogane", "注册 — Kurogane", "登録 — Kurogane", "가입 — Kurogane", "التسجيل — Kurogane", "הרשמה — Kurogane"],
    t_rules: ["Reglas — Kurogane", "Règles — Kurogane", "规则 — Kurogane", "ルール — Kurogane", "규칙 — Kurogane", "القواعد — Kurogane", "חוקים — Kurogane"],
    t_about: ["Acerca de — Kurogane", "À propos — Kurogane", "关于 — Kurogane", "概要 — Kurogane", "소개 — Kurogane", "حول المشروع — Kurogane", "אודות — Kurogane"],
    d_home: [
      "Kurogane — prueba no oficial de fans de Lineage 2 Interlude. Crónica limpia, rates x32.2, tope de encantamiento +15 / +17.",
      "Kurogane — test fan non officiel de Lineage 2 Interlude. Chronique pure, taux x32.2, plafond d'enchantement +15 / +17.",
      "Kurogane — Lineage 2 Interlude 非官方玩家测试。纯净版本，x32.2 倍率，强化上限 +15 / +17。",
      "Kurogane — Lineage 2 Interlude の非公式ファンテスト。純粋なクロニクル、x32.2 レート、強化上限 +15 / +17。",
      "Kurogane — Lineage 2 Interlude 비공식 팬 테스트. 순수 크로니클, x32.2 배율, 강화 한도 +15 / +17.",
      "Kurogane — اختبار غير رسمي من المعجبين للعبة Lineage 2 Interlude. حقبة نقية، معدلات x32.2، حد التعزيز +15 / +17.",
      "Kurogane — ניסוי מעריצים לא רשמי של Lineage 2 Interlude. כרוניקל נקי, ריינטים x32.2, תקרת חידוד +15 / +17."
    ],
    d_download: [
      "Cliente completo para la prueba Kurogane (Lineage 2 Interlude): enlace de descarga.",
      "Client complet pour le test Kurogane (Lineage 2 Interlude) : lien de téléchargement.",
      "Kurogane 测试（Lineage 2 Interlude）完整客户端：下载链接。",
      "Kurogane テスト（Lineage 2 Interlude）用フルクライアントのダウンロードリンク。",
      "Kurogane 테스트(Lineage 2 Interlude)용 풀 클라이언트 다운로드 링크.",
      "العميل الكامل لاختبار Kurogane (Lineage 2 Interlude): رابط التنزيل.",
      "הקליינט המלא לניסוי Kurogane (Lineage 2 Interlude): קישור להורדה."
    ],
    d_register: [
      "Cómo unirte a la prueba Kurogane: el registro se abre con el lanzamiento del mundo; anuncios en Discord y Telegram.",
      "Comment rejoindre le test Kurogane : l'inscription ouvre avec le lancement du monde ; annonces sur Discord et Telegram.",
      "如何加入 Kurogane 测试：注册将随世界上线开放，公告发布在 Discord 和 Telegram。",
      "Kurogane テストへの参加方法：登録はワールド公開と同時に開始。お知らせはDiscordとTelegramで。",
      "Kurogane 테스트 참여 방법: 가입은 월드 오픈과 함께 시작되며 공지는 Discord와 Telegram에 올라옵니다.",
      "كيف تنضم إلى اختبار Kurogane: يُفتح التسجيل مع إطلاق العالم، والإعلانات على Discord وTelegram.",
      "איך מצטרפים לניסוי Kurogane: ההרשמה נפתחת עם השקת העולם; הודעות ב-Discord וב-Telegram."
    ],
    d_rules: [
      "Reglas de la prueba Kurogane: sin GM entre los jugadores, la donación no supera el tope.",
      "Règles du test Kurogane : pas de MJ chez les joueurs, le don ne dépasse pas le plafond.",
      "Kurogane 测试规则：玩家无 GM，捐助不能突破上限。",
      "Kurogane テストのルール：プレイヤーにGMなし、課金は上限を超えない。",
      "Kurogane 테스트 규칙: 플레이어 GM 없음, 후원은 한도를 넘지 못함.",
      "قواعد اختبار Kurogane: لا GM بين اللاعبين، والتبرع لا يتجاوز الحد.",
      "חוקי ניסוי Kurogane: אין GM לשחקנים, תרומה לא עוקפת את התקרה."
    ],
    d_about: [
      "Qué es Kurogane: una prueba no oficial de fans de Lineage 2 Interlude. Hierro negro, puerta abierta.",
      "Qu'est-ce que Kurogane : un test fan non officiel de Lineage 2 Interlude. Fer noir, porte ouverte.",
      "Kurogane 是什么：Lineage 2 Interlude 的非官方玩家测试。黑铁，敞开的大门。",
      "Kurogane とは：Lineage 2 Interlude の非公式ファンテスト。黒い鉄、開かれた扉。",
      "Kurogane란: Lineage 2 Interlude 비공식 팬 테스트. 검은 쇠, 열린 문.",
      "ما هو Kurogane: اختبار غير رسمي من المعجبين للعبة Lineage 2 Interlude. حديد أسود وباب مفتوح.",
      "מה זה Kurogane: ניסוי מעריצים לא רשמי של Lineage 2 Interlude. ברזל שחור, דלת פתוחה."
    ],
    d_notfound: ["Página no encontrada.", "Page introuvable.", "页面未找到。", "ページが見つかりません。", "페이지를 찾을 수 없습니다.", "الصفحة غير موجودة.", "העמוד לא נמצא."],

    ru_kicker: ["Orden", "Ordre", "秩序", "秩序", "질서", "النظام", "סדר"],
    ru_title: ["Reglas de la prueba", "Règles du test", "测试规则", "テストのルール", "테스트 규칙", "قواعد الاختبار", "חוקי הניסוי"],
    ru_lead: [
      "Un reglamento breve. Si lo incumples, sales de la prueba. «En otro lado se podía» no es un argumento.",
      "Un règlement court. Tu l'enfreins, tu quittes le test. « Chez les autres c'était permis » n'est pas un argument.",
      "简短的规章。违反者将被移出测试。“别人那里可以”不算理由。",
      "短い決まりです。違反するとテストから外れます。「他ではOKだった」は理由になりません。",
      "짧은 규정입니다. 어기면 테스트에서 제외됩니다. “다른 곳에선 됐다”는 이유가 되지 않습니다.",
      "ميثاق قصير. من يخالفه يخرج من الاختبار. «عند غيرنا كان مسموحًا» ليست حجة.",
      "אמנה קצרה. מפרים — מוצאים מהניסוי. «אצל אחרים זה היה מותר» זה לא טיעון."
    ],
    ru_1_t: ["Sin GM entre los jugadores", "Pas de MJ chez les joueurs", "玩家不能拥有 GM", "プレイヤーにGM権限なし", "플레이어 GM 없음", "لا GM بين اللاعبين", "אין GM לשחקנים"],
    ru_1_d: [
      "Los personajes de jugador no reciben derechos de GM. Las herramientas de administración son solo para quienes mantienen la prueba, no para subir de nivel a «amigos».",
      "Les personnages des joueurs n'ont pas de droits MJ. Les outils d'administration restent à ceux qui font tourner le test, pas pour monter le niveau de « copains ».",
      "玩家角色不会获得 GM 权限。管理工具仅限运营测试的人员使用，不用于给“自己人”练级。",
      "プレイヤーキャラクターにGM権限は与えません。管理ツールはテスト運営者のみが使用し、「身内」のレベル上げには使いません。",
      "플레이어 캐릭터에는 GM 권한을 주지 않습니다. 관리 도구는 테스트 운영진만 사용하며, ‘지인’ 육성에는 쓰지 않습니다.",
      "لا تحصل شخصيات اللاعبين على صلاحيات GM. أدوات الإدارة مقصورة على من يشغّل الاختبار، وليست لترقية «الأصدقاء».",
      "דמויות שחקנים לא מקבלות הרשאות GM. כלי הניהול שמורים למי שמריץ את הניסוי, לא להעלאת רמה של «חברים»."
    ],
    ru_2_t: ["La donación no supera el tope", "Le don ne dépasse pas le plafond", "捐助不能突破上限", "課金は上限を超えない", "후원은 한도를 넘지 못함", "التبرع لا يتجاوز الحد", "תרומה לא עוקפת את התקרה"],
    ru_2_d: [
      "Aunque más adelante aparezca apoyo al servidor, no dará poder por encima del tope de encantamiento ni evitará las reglas de la prueba.",
      "Même si un soutien au serveur apparaît plus tard, il ne donnera pas de puissance au-delà du plafond d'enchantement et ne contournera pas les règles du test.",
      "即使以后推出服务器支持，也不会带来超过强化上限的实力，也不能绕过测试规则。",
      "将来サーバー支援が導入されても、強化上限を超える力は与えられず、テストのルールを回避することもできません。",
      "나중에 서버 후원이 생기더라도 강화 한도를 넘는 힘을 주지 않으며 테스트 규칙을 우회할 수 없습니다.",
      "حتى لو ظهر دعم للخادم لاحقًا، فلن يمنح قوة تفوق حد التعزيز ولن يتجاوز قواعد الاختبار.",
      "גם אם בעתיד תופיע תמיכה בשרת, היא לא תעניק כוח מעל תקרת החידוד ולא תעקוף את חוקי הניסוי."
    ],
    ru_4_t: ["Interlude puro", "Interlude pur", "纯净 Interlude", "純粋な Interlude", "순수 Interlude", "Interlude نقي", "Interlude נקי"],
    ru_4_d: [
      "No traemos otras crónicas ni un zoo de P2W personalizado. Reporta errores; no pidas armas únicas de épocas posteriores.",
      "On n'importe pas d'autres chroniques ni un bestiaire P2W sur mesure. Signale les bugs ; ne demande pas d'armes uniques d'époques plus tardives.",
      "不引入其他版本，也不搞自定义的付费变强内容。发现 Bug 请反馈，不要索要后期版本的独特武器。",
      "他のクロニクルや独自のP2W要素は持ち込みません。バグは報告してください。後期クロニクルの固有武器は要望しないでください。",
      "다른 크로니클이나 자체 제작 P2W 요소는 들이지 않습니다. 버그는 제보하되, 후기 시대의 특수 무기는 요구하지 마세요.",
      "لا نستورد حقبًا أخرى ولا حديقة P2W مخصصة. أبلغ عن الأخطاء، ولا تطلب أسلحة فريدة من حقب لاحقة.",
      "לא מייבאים כרוניקלים אחרים או גן חיות P2W מותאם. מדווחים על באגים, לא מבקשים כלי נשק ייחודיים מתקופות מאוחרות."
    ],
    ru_5_t: ["Juego limpio", "Fair-play", "公平游戏", "フェアプレイ", "공정한 플레이", "اللعب النزيه", "משחק הוגן"],
    ru_5_d: [
      "Bots, robo de cuentas y filtrar fallos a «los tuyos» significan expulsión inmediata. Prueba pequeña, memoria larga.",
      "Bots, vol de comptes et fuite de failles à des « proches » : exclusion immédiate. Petit test, longue mémoire.",
      "使用外挂、盗号、向“自己人”泄露漏洞者，立即清退。测试规模小，但我们记性好。",
      "ボット、アカウント盗用、「身内」への不具合の横流しは即退場です。小さなテストですが、記憶は長いです。",
      "봇, 계정 도용, ‘지인’에게 허점 유출은 즉시 퇴출입니다. 작은 테스트지만 기억은 오래갑니다.",
      "البوتات وسرقة الحسابات وتسريب الثغرات لـ«المقرَّبين» تعني الطرد فورًا. اختبار صغير وذاكرة طويلة.",
      "בוטים, גניבת חשבונות והדלפת פרצות ל«שלנו» — הרחקה מיידית. ניסוי קטן, זיכרון ארוך."
    ],
    ru_6_t: ["Tono", "Ton", "态度", "態度", "태도", "الأسلوب", "טון"],
    ru_6_d: [
      "Esto no es una arena de acoso. El conflicto dentro del juego está bien. El acoso fuera de la pantalla, no.",
      "Ce n'est pas une arène de harcèlement. Un conflit en jeu, ça va. Le harcèlement derrière l'écran, non.",
      "这里不是霸凌的场所。游戏内的冲突没问题，屏幕之外的骚扰不行。",
      "ここはいじめの場ではありません。ゲーム内の対立は問題ありませんが、画面の外での嫌がらせは許されません。",
      "이곳은 괴롭힘의 장이 아닙니다. 게임 내 갈등은 괜찮지만, 화면 밖 괴롭힘은 안 됩니다.",
      "هذه ليست ساحة للتنمر. الصراع داخل اللعبة لا بأس به، أما التنمر خارج الشاشة فلا.",
      "זו לא זירה להתנכלות. עימות בתוך המשחק זה בסדר. הטרדה מחוץ למסך — לא."
    ],

    ab_kicker: ["Quiénes", "Qui", "关于我们", "私たちについて", "소개", "من نحن", "מי"],
    ab_lead: [
      "Hierro negro. El nombre latino es Kurogane; los caracteres 黒鉄 quedan pequeños. No es una marca corporativa ni una placa de socios.",
      "Fer noir. Le nom latin est Kurogane ; les caractères 黒鉄 restent discrets. Ce n'est ni une marque d'entreprise ni une plaque de partenaire.",
      "黑铁。名称以拉丁字母 Kurogane 为准，汉字 黒鉄 仅作小字点缀。这不是公司品牌，也不是合作伙伴的铭牌。",
      "黒い鉄。名前はラテン文字の Kurogane で、漢字の 黒鉄 は小さく添えるだけです。企業ブランドでも、提携先のプレートでもありません。",
      "검은 쇠. 이름은 라틴 문자 Kurogane이며, 한자 黒鉄는 작게만 씁니다. 기업 브랜드도, 제휴 표식도 아닙니다.",
      "الحديد الأسود. الاسم باللاتينية Kurogane، وتبقى الأحرف 黒鉄 صغيرة. هذه ليست علامة شركة ولا لافتة شريك.",
      "ברזל שחור. השם הלטיני הוא Kurogane; התווים 黒鉄 נשארים קטנים. זה לא מותג תאגידי ולא שלט שותפים."
    ],
    ab_p1: [
      "Kurogane es una prueba privada de fans de Lineage 2 Interlude. Existe para probar una crónica limpia, rates altos y un tope estricto con un círculo reducido, y luego abrir la puerta a quienes quieran ese ritmo.",
      "Kurogane est un test fan privé de Lineage 2 Interlude. Il sert à essayer une chronique pure, des taux élevés et un plafond strict avec un petit cercle, puis à ouvrir la porte à ceux qui aiment ce rythme.",
      "Kurogane 是 Lineage 2 Interlude 的私人玩家测试。它先在小范围内试验“纯净版本 + 高倍率 + 严格上限”的组合，然后向喜欢这种节奏的玩家敞开大门。",
      "Kurogane は Lineage 2 Interlude の非公開ファンテストです。純粋なクロニクル、高レート、厳しい上限という組み合わせをまず少人数で試し、そのペースが好きな人に門戸を開くために作られました。",
      "Kurogane는 Lineage 2 Interlude의 비공개 팬 테스트입니다. 순수한 크로니클, 높은 배율, 엄격한 한도의 조합을 소규모로 시험한 뒤, 이런 속도를 원하는 분들께 문을 여는 것이 목적입니다.",
      "Kurogane اختبار خاص من المعجبين للعبة Lineage 2 Interlude. وُجد لتجربة حقبة نقية ومعدلات عالية وحدٍّ صارم في دائرة صغيرة، ثم فتح الباب لمن يحب هذا الإيقاع.",
      "Kurogane הוא ניסוי מעריצים פרטי של Lineage 2 Interlude. הוא נועד לבדוק כרוניקל נקי, ריינטים גבוהים ותקרה קשיחה במעגל קטן — ואז לפתוח את הדלת למי שאוהב את הקצב הזה."
    ],
    ab_p2: [
      "El sitio y el mundo del juego son sistemas separados. Aquí encontrarás información, el cliente y las reglas; el juego funciona en su propia infraestructura.",
      "Le site et le monde du jeu sont deux systèmes séparés. Ici : informations, client et règles ; le jeu tourne sur sa propre infrastructure.",
      "网站与游戏世界是相互独立的系统。这里提供信息、客户端和规则；游戏运行在独立的基础设施上。",
      "サイトとゲームワールドは別のシステムです。ここでは情報、クライアント、ルールを提供し、ゲームは独自のインフラで動いています。",
      "사이트와 게임 월드는 별개의 시스템입니다. 여기서는 정보, 클라이언트, 규칙을 제공하며 게임은 자체 인프라에서 운영됩니다.",
      "الموقع وعالم اللعبة نظامان منفصلان. هنا تجد المعلومات والعميل والقواعد، واللعبة تعمل على بنيتها التحتية الخاصة.",
      "האתר ועולם המשחק הם מערכות נפרדות. כאן יש מידע, הקליינט והחוקים; המשחק רץ על תשתית משלו."
    ],
    ab_p3: [
      "No somos titulares de los derechos de Lineage 2 ni fingimos que la prueba esté «aprobada por el editor». Es un espacio de aficionados. Si el titular de los derechos nos pide cerrar, cerramos.",
      "Nous ne détenons pas les droits de Lineage 2 et ne prétendons pas que le test soit « approuvé par l'éditeur ». C'est un espace de passionnés. Si le détenteur des droits nous demande de fermer, nous fermons.",
      "我们不是 Lineage 2 的权利人，也不假装本测试“获得发行商认可”。这是一个业余爱好者的空间。如果权利人要求关闭，我们会关闭。",
      "私たちは Lineage 2 の権利者ではなく、このテストが「パブリッシャーに承認されている」と装うこともしません。あくまで趣味の場です。権利者から閉鎖を求められれば、閉鎖します。",
      "저희는 Lineage 2의 권리자가 아니며, 이 테스트가 ‘퍼블리셔의 승인을 받았다’고 주장하지 않습니다. 취미로 운영하는 공간이며, 권리자가 종료를 요청하면 종료합니다.",
      "لسنا أصحاب حقوق Lineage 2 ولا ندّعي أن الاختبار «معتمد من الناشر». إنه فضاء هواة. وإذا طلب صاحب الحقوق الإغلاق فسنغلق.",
      "אנחנו לא בעלי הזכויות של Lineage 2 ולא מעמידים פנים שהניסוי «מאושר על ידי המו״ל». זה מקום של חובבים. אם בעל הזכויות יבקש לסגור — נסגור."
    ],
    ab_list_title: ["Lo que esto no es", "Ce que ce n'est pas", "我们不是什么", "これは何ではないか", "이곳이 아닌 것", "ما ليس عليه هذا المشروع", "מה זה לא"],
    ab_not_1: ["no es un servidor oficial", "pas un serveur officiel", "不是官方服务器", "公式サーバーではありません", "공식 서버가 아닙니다", "ليس خادمًا رسميًا", "לא שרת רשמי"],
    ab_not_2: ["no es una tienda de poder", "pas une boutique de puissance", "不是卖实力的商店", "強さを売る店ではありません", "힘을 파는 상점이 아닙니다", "ليس متجرًا للقوة", "לא חנות כוח"],
    ab_not_3: ["no es un panel personal con saldo", "pas un espace personnel avec solde", "不是带余额的个人中心", "残高付きのマイページではありません", "잔액이 있는 개인 계정 페이지가 아닙니다", "ليس حسابًا شخصيًا برصيد", "לא אזור אישי עם יתרה"],
    ab_not_4: ["no es una promesa de estar siempre en línea", "pas une promesse de disponibilité éternelle", "不承诺永远在线", "永遠の稼働を約束するものではありません", "영원한 가동을 약속하지 않습니다", "ليس وعدًا بالعمل إلى الأبد", "לא הבטחה לפעילות נצחית"]
  };

  var dict = window.KuroganeI18n && window.KuroganeI18n.dict;
  if (!dict) return;
  Object.keys(T).forEach(function (key) {
    if (!dict[key]) dict[key] = { ru: key, en: key };
    CODES.forEach(function (code, i) {
      var v = T[key][i];
      if (code === "ar" || code === "he") {
        // keep "+15 / +17" in logical order inside right-to-left text
        v = v.replace(/\+15 \/ \+17/g, "\u2066+15 / +17\u2069").replace(/\+1[57] \(100%\)/g, function (m) { return "\u2066" + m + "\u2069"; });
      }
      dict[key][code] = v;
    });
  });
})();
