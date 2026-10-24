# Pulse App

![React](https://img.shields.io/badge/React-18-20232A?logo=react&logoColor=61DAFB) ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux&logoColor=white) ![Sass](https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white) ![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?logo=socketdotio&logoColor=white)

The React client for **Pulse**, a social media platform with posts, follows, real-time chat and notifications. The API, queues and sockets live in [pulse-backend](https://github.com/tanwarAalok/pulse-backend).

> **Status:** work in progress. The authentication flows are built; the social feed (`/app/social/streams`) is a placeholder.

## What's built

- **Auth pages:** sign in and register tabs, forgot password and reset password, wired to the backend's `/api/v1` auth endpoints.
- **App shell:** React Router v6 routes, a Redux Toolkit store with a user slice, and reusable `Button` and `Input` components.
- **API layer:** a shared Axios instance (`src/services/axios.js`) that sends cookies with every request, with per-environment base URLs.
- **Quality:** ESLint and Prettier scripts, React Testing Library and MSW mocks for component tests.

## Getting started

Requires Node.js 16+ and a running [pulse-backend](https://github.com/tanwarAalok/pulse-backend) (port 8000 by default).

```bash
git clone https://github.com/tanwarAalok/pulse-app.git
cd pulse-app
npm install
```

Create a `.env` file in the project root:

```env
REACT_APP_BASE_ENDPOINT=http://localhost:8000
REACT_APP_ENVIRONMENT=local
```

Then start the app on http://localhost:3000:

```bash
npm start
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm start` | Development server with hot reload |
| `npm test` | Tests with coverage |
| `npm run build` | Production build in `build/` |
| `npm run lint:check` / `lint:fix` | ESLint |
| `npm run prettier:check` / `prettier:fix` | Prettier |

## Project structure

```
src/
  pages/          auth (login, register, forgot/reset password) and social (streams)
  components/     shared UI components
  redux-toolkit/  store and reducers
  services/       Axios instance and API utilities
  hooks/          custom hooks
  mocks/          MSW handlers for tests
  routes.js       route table
```
