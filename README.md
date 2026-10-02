# Kurogane web v1

Статичная витрина `kurogane.world`.  
Игра и сайт — разные контуры. Этот архив не знает про логин-порт, геодату и VPS мира.

## Состав

```
index.html          /
404.html           страница ошибки (noindex)
sitemap.xml, robots.txt
download.html       /download
register.html       /register
rules.html          /rules
about.html          /about
es.html             испанская заготовка «Pronto / Soon»
css/style.css
js/config.js        статус, версия патча, Discord / Telegram
js/i18n.js          RU + EN, движок переключения языка
js/i18n-extra.js    ES, FR, ZH, JA, KO, AR, HE (строка = ключ, порядок es, fr, zh, ja, ko, ar, he)
js/i18n-hi.js       HI (хинди, объект ключ → текст)
js/i18n-eu.js       DE, PT, IT (строка = ключ, порядок de, pt, it)
js/i18n-tr.js       TR (турецкий, объект ключ → текст)
js/main.js
assets/mark.svg, hero.jpg, hero-m.jpg (мобильный), og.jpg (превью ссылок 1200x630)
files/              слот под zip патча
```

Индекс лежит в корне. Так и заливать.

## Как залить на любой static host

Подойдёт Nginx, Caddy, Cloudflare Pages, Netlify, GitHub Pages, обычная папка на shared hosting.

1. Распакуй архив так, чтобы `index.html` оказался в корне сайта.
2. Домен повесь на **80/443** этого хоста. Не направляй A-запись сайта на игровой порт.
3. Если хост требует `404.html` — скопируй `index.html` или оставь ответ хоста как есть.

Пример Nginx:

```nginx
server {
  listen 80;
  listen 443 ssl;
  server_name kurogane.world www.kurogane.world;
  root /var/www/kurogane;
  index index.html;
  location / { try_files $uri $uri.html $uri/ =404; }
}
```

DNS у регистратора (Spaceship): A / AAAA / CNAME на **веб-хост**, не на игровой IP:7777.

## Ручные ручки v1

Файл `js/config.js`:

- `status`: `"online"` | `"offline"` | `"checking"` (при `checking` плашка статуса скрыта)
- `patch.ready`: `true` когда zip готов
- `patch.file`: ссылка на архив (внешний URL или путь вроде `"files/kurogane-patch-0.1.zip"`)
- `contacts.discord` / `contacts.telegram` / `contacts.instagram`: полные URL, когда появятся

Страница регистрации — информационная: форма удалена, сайт не собирает логины и пароли. Когда появится бэкенд, форму можно вернуть из истории git.

## Язык

Выпадающий список в шапке: RU, EN, ES, FR, DE, PT, IT, TR, ZH, JA, KO, AR, HE, HI. Выбор хранится в `localStorage`, по умолчанию берётся язык браузера, иначе EN.
Для AR и HE включается `dir="rtl"`; шрифты для ZH / JA / KO / AR / HE / HI подгружаются с Google Fonts только при выборе языка.
Заголовок и description страницы тоже переключаются (ключи `t_*` / `d_*`, страница определяется по `<body data-page>`).
`es.html` — только редирект на главную с испанским языком (для старых ссылок).

## Позже

- живая регистрация в БД аккаунтов
- автостатус сервера
- полная испанская витрина
- личный кабинет
- выкладка патча 0.1 / 0.2

Не в этом репозитории: донат, Stripe, лаунчер, интеграция с игровым VPS.
