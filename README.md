# Kurogane web v1

Статичная витрина `kurogane.world`.  
Игра и сайт — разные контуры. Этот архив не знает про логин-порт, геодату и VPS мира.

## Состав

```
index.html          /
download.html       /download
register.html       /register
rules.html          /rules
about.html          /about
es.html             испанская заготовка «Pronto / Soon»
css/style.css
js/config.js        статус, версия патча, Discord / Telegram
js/i18n.js          RU + EN
js/main.js
assets/mark.svg
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

- `status`: `"online"` | `"offline"` | `"checking"`
- `patch.ready`: `true` когда zip готов
- `patch.file`: путь вроде `"files/kurogane-patch-0.1.zip"`
- `contacts.discord` / `contacts.telegram`: полные URL, когда появятся

Регистрация пишет черновик только в `localStorage` браузера. В MariaDB игры ничего не уходит.

## Язык

Переключатель RU / EN на каждой странице, выбор в `localStorage`.  
ES в меню ведёт на заготовку.

## Позже

- живая регистрация в БД аккаунтов
- автостатус сервера
- полная испанская витрина
- личный кабинет
- выкладка патча 0.1 / 0.2

Не в этом репозитории: донат, Stripe, лаунчер, интеграция с игровым VPS.
