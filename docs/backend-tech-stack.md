## Backend Tech Stack

The backend for the **Mao Coffee Modee** project is designed for clarity, maintainability, and scalability. Below is an overview of the core technologies and tools used:

### Programming Language
- **TypeScript** (v4.x)
- **JavaScript** (ES2020+)

### Main Framework
- **Express.js** (v4.x) — Fast, unopinionated web framework for Node.js

### Database & ORM
- **PostgreSQL** (v14+)
- **Prisma ORM** (v4.x) — Type-safe database client for Node.js & TypeScript

### API Style
- **RESTful API** — Follows REST conventions for resource-based endpoints

### Testing Tools
- **Jest** — Unit and integration testing
- **Supertest** — HTTP assertions for API endpoint testing

### Key Libraries & Utilities
- **Zod** — Schema validation and type-safe request/response validation
- **http-errors** — Standardized error handling for Express
- **dotenv** — Environment variable management
- **winston** — Logging utility for structured logs

### Deployment & Runtime
- **Node.js** (v18.x LTS)
- **Docker** — Containerized deployment for consistency across environments
- **Docker Compose** — Multi-service orchestration (app, database, etc.)

### Additional Infrastructure
- **pnpm** — Fast, disk space-efficient package manager
- **ESLint & Prettier** — Code quality and formatting
- **GitHub Actions** — CI/CD for automated testing and deployment

### Authentication
- **Firebase Authentication** (Google Auth) — Secure user authentication and identity management
- **firebase-admin** — Node.js SDK for server-side Firebase integration

> **Integration:**
> - All user authentication and session management will use Firebase Auth (Google sign-in).
> - Backend endpoints will verify Firebase ID tokens using `firebase-admin`.
> - User identity and roles will be managed via Firebase claims.

> **Note:** All dependencies are managed via `pnpm` and defined in the root `package.json`.

This stack ensures a robust, maintainable, and developer-friendly backend foundation for Mao Coffee Modee.
