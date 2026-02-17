# Backend Project Setup Plan

## Overview
Set up a scalable, maintainable backend for the Mao Coffee Modee project using modern Node.js best practices.

## Frameworks & Libraries
- **Framework:** [Fastify](https://www.fastify.io/) (lightweight, fast, robust plugin ecosystem)
- **Language:** TypeScript
- **ORM:** Prisma (for PostgreSQL)
- **Validation:** Zod
- **Environment Config:** dotenv, fastify-env
- **Testing:** Vitest or Jest
- **Linting/Formatting:** ESLint, Prettier
- **Other:** pino (logging), fastify-cors, fastify-helmet (security)

## Project Structure
```
backend/
  src/
    routes/
    controllers/
    services/
    models/
    utils/
    plugins/
  prisma/
  tests/
  .env
  package.json
  tsconfig.json
```

## Steps
1. **Initialize project**
   - `pnpm init` (or npm/yarn)
   - Add TypeScript, Fastify, Prisma, Zod, dotenv, etc.
2. **Setup TypeScript config**
   - `tsconfig.json` with strict settings
3. **Setup Fastify server**
   - Create `src/server.ts` entrypoint
   - Register plugins (CORS, helmet, env, logger)
4. **Environment Config**
   - Use `.env` for secrets (DB, API keys)
   - Validate env vars with fastify-env
5. **Database**
   - Use PostgreSQL (local/dev via Docker)
   - Setup Prisma schema, migrations
6. **API Structure**
   - Organize by feature (routes/controllers/services)
   - Use Zod for request/response validation
7. **Security**
   - Use helmet, CORS, rate limiting
   - Never log sensitive data
   - Validate all input
8. **Testing**
   - Add basic tests for health check, endpoints
9. **Linting/Formatting**
   - Setup ESLint, Prettier

## References
- [Fastify Docs](https://www.fastify.io/docs/latest/)
- [Prisma Docs](https://www.prisma.io/docs/)
- [Zod Docs](https://zod.dev/)
