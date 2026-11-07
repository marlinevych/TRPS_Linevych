Незабутка

Інформаційна система комунікації служби знахідок для пошуку втрачених речей у громадських закладах.



Призначення

Система допомагає заявникам знайти власне загублене майно, а знаходжувачам і закладам – повернути знайдені речі власникам. Основна ідея – зіставлення оголошень про втрату та знахідку за фото, місцем і прихованими контрольними ознаками.



Функціональність

реєстрація та автентифікація користувачів;

створення оголошень про втрату та знахідку;

автоматичне зіставлення оголошень;

чат між заявником і власником знахідки;

модерація оголошень адміністратором.

Технології

Клієнт: React 18 + TypeScript + Vite + TailwindCSS;

Сервер: Node.js 20 + NestJS + Prisma ORM + Socket.io;

База даних: PostgreSQL 16 + PostGIS;

Інфраструктура: Docker, Nginx, GitHub Actions.

Запуск

Встановити Node.js 20 та PostgreSQL 16.

Виконати npm install у папках src/client та src/server.

Запустити сервер: npm run start в src/server.

Запустити клієнт: npm run dev в src/client.

Застосунок відкривається за адресою http://localhost:5173.



Структура проєкту

nezabutka/

├── README.md

├── .gitignore

├── .github/

│ └── workflows/

│ └── ci.yml

├── docs/

│ └── requirements.md

├── src/

│ ├── client/ (React SPA)

│ │ ├── package.json

│ │ └── src/

│ └── server/ (NestJS backend)

│ ├── package.json

│ ├── prisma/

│ └── src/

│ ├── main.ts

│ └── modules/

│ ├── auth/

│ ├── chat/

│ ├── listings/

│ ├── matching/

│ └── search/

└── tests/

