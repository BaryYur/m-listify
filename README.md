# M-listify

<p>
  <img src="https://img.shields.io/badge/NestJS-11.x-e0234e?logo=nestjs&logoColor=white" alt="NestJS version" /> 
  <img src="https://img.shields.io/badge/React-18.x-61dafb?logo=react&logoColor=white" alt="React version" /> 
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white" alt="TypeScript version" />
  <img src="https://img.shields.io/badge/Prisma-6.x-2d3748?logo=prisma&logoColor=white" alt="Prisma version" />
  <img src="https://img.shields.io/badge/Husky-9.x-white?logo=git&logoColor=black" alt="Husky" />
</p>

Full-stack monorepo application for managing list of films. Built with **NestJS**, **React**, and **TypeScript**.

---

## Project Structure

This project is a monorepo managed with npm workspaces.

```text
.
├── backend/                # NestJS API
│   ├── src/
│   │   ├── modules/        # Domain modules (auth, user, task, task-list, etc.)
│   │   ├── common/         # Shared utilities, decorators, and filters
│   │   └── prisma/         # Database schema and migrations
│   └── test/               # E2E and integration tests
├── frontend/               # React (NextJS) Application
│   ├── src/
│   │   ├── app/            # Pages
│   │   │   ├── (public)/   # For all users
│   │   │   │   ├── page_1/
│   │   │   │   │   ├── _components # Components specific for page_1 
│   │   │   │   │   ├── layout.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   │
│   │   │   ├── (private)/   # For authenticated user
│   │   │   │   └── page_1/
│   │   │   │      ├── _components # Components specific for page_1 
│   │   │   │      ├── layout.tsx
│   │   │   │      └── page.tsx
│   │   │   │ 
│   │   ├── components/     # UI Components (shared and specific)
│   │   ├── hooks/          # Custom React hooks
│   │   │   ├── ui/
│   │   │   └── api/
│   │   ├── context/        # Context store
│   │   ├── store/          # Zustand store
│   │   ├── types/          # Entities types
│   │   ├── services/       # API communication layer (Axios)
│   │   └── middleware.ts   # Auth middleware
├── .github/workflows/      # CI/CD (lint, test, build automation)
└── .husky/                 # Git hooks (lint-staged, commitlint, pre-push)
```

---

## Tech Stack

### Backend

- **Framework**: [NestJS](https://nestjs.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: PostgreSQL
- **Auth**: Passport.js + JWT
- **Cache**: Redis

### Frontend

- **Framework**: [NextJS](https://nextjs.org/docs)
- **State Management**: Zustand + React Query (TanStack)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn + Lucide React

---

## Development Workflow

We use **GitHub Flow** and **Husky** to maintain high code quality:

1.  **Conventional Commits**: All commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) format. Task IDs from branch names are automatically appended.
    - Example: `feat: add drag and drop support (ML-34)`
2.  **Pre-commit Hook**: Automatically runs **Prettier** and **ESLint** on staged files.
3.  **Pre-push Hook**: Runs **TypeScript type-checking** for both projects before pushing to remote.
4.  **CI/CD**: GitHub Actions runs full linting, testing, and building upon every pull request to `main`.

---

## Getting Started

### Prerequisites

- Node.js **v22.x** or higher
- Docker (optional, for local DB and for Redis)

### Installation

```bash
# Clone the repository
git clone https://github.com/BaryYur/advanced-notes-app.git

# Install dependencies for the entire monorepo
npm install

# Setup environment variables
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

### Running Locally

```bash
# Run both projects simultaneously
npm run dev

# Run specific project
npm run dev -w backend
npm run dev -w frontend
```

---

## Available Scripts

| Script               | Description                                             |
| :------------------- | :------------------------------------------------------ |
| `npm run dev`        | Starts both backend and frontend in development mode    |
| `npm run build`      | Builds both projects for production                     |
| `npm run lint`       | Runs ESLint across the whole monorepo                   |
| `npm run type-check` | Runs TypeScript type-checking across the whole monorepo |
| `npm run format`     | Formats the entire codebase with Prettier               |
| `npm run redis:up`   | Up redis container                                      |
| `npm run redis:down` | Down redis container                                    |
| `npm run redis:logs` | Show redis logs                                         |
